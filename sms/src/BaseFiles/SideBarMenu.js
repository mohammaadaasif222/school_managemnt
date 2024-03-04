import React, { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FiMenu} from 'react-icons/fi';
import { MdOutlineDashboard } from "react-icons/md";
import { PiStudentBold,PiExam  } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { LiaSchoolSolid } from "react-icons/lia";
import { BiLibrary } from "react-icons/bi";

const SidebarMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [companyNameVisible, setCompanyNameVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
    setCompanyNameVisible(!collapsed); 
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setCollapsed(true); 
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`sidebar-wrapper ${collapsed && isMobile ? 'collapsed' : ''}`}>
      <Sidebar collapsed={collapsed}>
        <div className="sidebar-header">
          {isMobile && (
            <div className="toggle-btn-mobile p-2" onClick={handleToggleCollapse}>
              <FiMenu />
            </div>
          )}
          {(!isMobile || (isMobile && !collapsed)) && (
            <div className={`company-name ${companyNameVisible ? 'hidden' : ''} py-2`}>
              Skyway Technologies
            </div>
          )}
           {!isMobile && (
            <div className="toggle-btn p-2" onClick={handleToggleCollapse}>
              <FiMenu />
            </div>
          )}
        </div>
        {(!isMobile || (isMobile && !collapsed)) && (
          <Menu className='bg-[#233459] text-gray-100' iconShape="square">
            <SubMenu label="Dashboard" icon={ <MdOutlineDashboard className='text-yellow-600'/>}>
              <MenuItem>Admin</MenuItem>
              <MenuItem>Student</MenuItem>
              <MenuItem>Parent</MenuItem>
            </SubMenu>
            <hr/>
            <SubMenu label="Student" icon={<PiStudentBold className='text-yellow-600'/> }>
              <MenuItem>All Student</MenuItem>
              <MenuItem>Student Detail</MenuItem>
              <MenuItem>Admission Form</MenuItem>
              <MenuItem>Student Promotion</MenuItem>
            </SubMenu>
            <hr/>
            <SubMenu label="Teacher" icon={<GiTeacher className='text-yellow-600'/>}>
              <MenuItem>All Teacher</MenuItem>
              <MenuItem>Teacher Detail</MenuItem>
              <MenuItem>Assign Teacher</MenuItem>
              <MenuItem>Add Teacher</MenuItem>
            </SubMenu>
            <hr/>
            <SubMenu label="Classes" icon={<LiaSchoolSolid className='text-yellow-600'/>}>
              <MenuItem>Class Detail</MenuItem>
              <MenuItem>Create Class</MenuItem>
            </SubMenu>
            <hr/>
            <SubMenu label="Library" icon={<BiLibrary className='text-yellow-600'/>}>
              <MenuItem>All Books</MenuItem>
              <MenuItem>Issue Book</MenuItem>
              <MenuItem>Issued Book Detail</MenuItem>
              <MenuItem>Add New Book</MenuItem>
            </SubMenu>
            <hr/>
            <SubMenu label="Result" icon={<PiExam className='text-yellow-600'/>}>
              <MenuItem>Marks Detail</MenuItem>
              <MenuItem>Generate Report Card</MenuItem>
            </SubMenu>
            <hr/>
            <SubMenu label="Dashboard" icon={ <MdOutlineDashboard className='text-yellow-600'/>}>
              <MenuItem>Admin</MenuItem>
              <MenuItem>Student</MenuItem>
              <MenuItem>Parent</MenuItem>
            </SubMenu>
            <hr/>
            <SubMenu label="Student" icon={<PiStudentBold className='text-yellow-600'/> }>
              <MenuItem>All Student</MenuItem>
              <MenuItem>Student Detail</MenuItem>
              <MenuItem>Admission Form</MenuItem>
              <MenuItem>Student Promotion</MenuItem>
            </SubMenu>
            <hr/>
            <SubMenu label="Teacher" icon={<GiTeacher className='text-yellow-600'/>}>
              <MenuItem>All Teacher</MenuItem>
              <MenuItem>Teacher Detail</MenuItem>
              <MenuItem>Assign Teacher</MenuItem>
              <MenuItem>Add Teacher</MenuItem>
            </SubMenu>
            <hr/>
            <SubMenu label="Classes" icon={<LiaSchoolSolid className='text-yellow-600'/>}>
              <MenuItem>Class Detail</MenuItem>
              <MenuItem>Create Class</MenuItem>
            </SubMenu>
            <hr/>
            <SubMenu label="Library" icon={<BiLibrary className='text-yellow-600'/>}>
              <MenuItem>All Books</MenuItem>
              <MenuItem>Issue Book</MenuItem>
              <MenuItem>Issued Book Detail</MenuItem>
              <MenuItem>Add New Book</MenuItem>
            </SubMenu>
            <hr/>
            <SubMenu label="Result" icon={<PiExam className='text-yellow-600'/>}>
              <MenuItem>Marks Detail</MenuItem>
              <MenuItem>Generate Report Card</MenuItem>
            </SubMenu>
          </Menu>
        )}
      </Sidebar>
    </div>
  );
};

export default SidebarMenu;
