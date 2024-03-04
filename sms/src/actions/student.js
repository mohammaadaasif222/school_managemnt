export const csvUplaod = async (csv) => {
  try {
    const formData = new FormData();
    formData.append("file", csv);
    const response = await axios.post(
      `${URL}/admin/upload/student-data`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setMessage(response.data.message);
    setTimeout(() => {
      setMessage("");
      setCsvFile("");
    }, 5000);
  } catch (error) {
    setError(error.response.data.error);
    setTimeout(() => {
      setError("");
    }, 5000);
  }
};

export const addStudent = async ()=>{

}