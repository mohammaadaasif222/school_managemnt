const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/cathAsyncErrorsMiddleware");
const sendToken = require("../utils/jwtToken");
const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const db = require("../config/database");
dotenv.config({ path: "backend/config/config.env" });
//  Register new user
exports.createStudent = catchAsyncErrors(async (req, res, next) => {
  try {
    const studentData = req.body;

    const { class_name, section, adm_no, ...studentBioData } = studentData;

    const tableName = `${class_name}_${section}_biodata`;

    const tableExistsQuery = `SHOW TABLES LIKE '${tableName}'`;
    const [tables] = await db.promise().query(tableExistsQuery);

    if (tables.length === 0) {
      const createTableQuery = `
            CREATE TABLE ${tableName} (
              id INT AUTO_INCREMENT PRIMARY KEY,
              adm_no VARCHAR(255) UNIQUE, -- Making adm_no unique
              ${Object.keys(studentBioData)
                .map((key) => `${key} VARCHAR(255)`)
                .join(", ")}
            ) 
          `;
      await db.promise().query(createTableQuery);
    }

    const columns = ["adm_no", ...Object.keys(studentBioData)].join(", ");
    const valuesPlaceholders = Array(Object.keys(studentBioData).length + 1)
      .fill("?")
      .join(", ");
    const insertQuery = `INSERT INTO ${tableName} (${columns}) VALUES (${valuesPlaceholders})`;

    const values = [adm_no, ...Object.values(studentBioData)];

    await db.promise().query(insertQuery, values);

    res.status(201).json({
      success: true,
      message: `Student bio-data for ${class_name} - ${section} created successfully`,
    });
  } catch (error) {
    console.error("Error creating student bio-data:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
//  Log Out User

exports.getStudent = asyncHandler(async (req, res, next) => {
  const { teacher_id, adm_no } = req.params;

  let sql;
  let values;

  if (teacher_id) {
    sql = "SELECT * FROM teacher WHERE teacher_id = ?";
    values = [teacher_id];
  } else if (adm_no) {
    sql = "SELECT * FROM teacher WHERE adm_no = ?";
    values = [adm_no];
  } else {
    return next(new ErrorHandler("Missing parameters", 400));
  }

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error during retrieval:", err);
      return next(new ErrorHandler("Error during retrieval", 500));
    }

    if (result.length > 0) {
      res.status(200).json({ success: true, student: result[0] });
    } else {
      return next(new ErrorHandler("Student not found", 404));
    }
  });
});

exports.getStudents = asyncHandler(async (req, res, next) => {
  let sql = "SELECT * FROM students";

  const { class: studentClass, section } = req.query;

  if (studentClass && section) {
    sql += ` WHERE class = ? AND section = ?`;
    db.query(sql, [studentClass, section], (err, result) => {
      if (err) {
        console.error("Error during retrieval:", err);
        return next(new ErrorHandler("Error during retrieval", 500));
      }
      res.status(200).json({ success: true, students: result });
    });
  } else if (studentClass) {
    sql += ` WHERE class = ?`;
    db.query(sql, [studentClass], (err, result) => {
      if (err) {
        console.error("Error during retrieval:", err);
        return next(new ErrorHandler("Error during retrieval", 500));
      }
      res.status(200).json({ success: true, students: result });
    });
  } else if (section) {
    sql += ` WHERE section = ?`;
    db.query(sql, [section], (err, result) => {
      if (err) {
        console.error("Error during retrieval:", err);
        return next(new ErrorHandler("Error during retrieval", 500));
      }
      res.status(200).json({ success: true, students: result });
    });
  } else {
    db.query(sql, (err, result) => {
      if (err) {
        console.error("Error during retrieval:", err);
        return next(new ErrorHandler("Error during retrieval", 500));
      }
      res.status(200).json({ success: true, students: result });
    });
  }
});

exports.updateStudent = asyncHandler(async (req, res) => {
  const updatedData = req.body;

  const { updatedFields } = updatedData;
  const updateFieldsString = Object.keys(updatedFields)
    .map((key) => `${key}="${updatedFields[key]}"`)
    .join(", ");

  const sql = `UPDATE teacher SET ${updateFieldsString} WHERE teacher_id = ${req.user.teacher_id};`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error during update:", err);
      next(new ErrorHandler("Error during update", 500));
    }

    if (result.affectedRows > 0) {
      res.status(200).json({ success: true, message: "Update successful" });
    } else {
      next(new ErrorHandler("User not found or no changes applied", 404));
    }
  });
});

exports.deleteStudent = asyncHandler(async (req, res, next) => {
  const { adm_no } = req.body;

  if (!adm_no) {
    return next(new ErrorHandler("Admission number (adm_no) is required", 400));
  }

  const sql = `DELETE FROM teacher WHERE adm_no = ?`;

  db.query(sql, [adm_no], (err, result) => {
    if (err) {
      console.error("Error during deletion:", err);
      return next(new ErrorHandler("Error during deletion", 500));
    }

    if (result.affectedRows > 0) {
      res.status(200).json({ success: true, message: "Deletion successful" });
    } else {
      return next(
        new ErrorHandler("Student not found or no changes applied", 404)
      );
    }
  });
});
