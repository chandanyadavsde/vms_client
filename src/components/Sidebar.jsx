import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTachometerAlt, 
  faUsers, 
  faChevronDown, 
  faChevronUp, 
  faUserPlus, 
  faUserShield, 
  faUserSlash,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  const [isUserManagementOpen, setIsUserManagementOpen] = useState(false);
  const navigate = useNavigate();

  const handleUserManagementClick = (e) => {
    // Prevent default if clicking on the chevron icon
    if (e.target.closest('.chevron-icon')) {
      e.preventDefault();
      e.stopPropagation();
      toggleUserManagement();
    } else {
      // Navigate to user management page
      navigate("/admindashboard/usermanagement");
    }
  };

  const toggleUserManagement = () => {
    setIsUserManagementOpen(!isUserManagementOpen);
  };

  return (
    <div className="w-64 bg-[#1a2234] text-white flex flex-col">
      <div className="p-5 border-b border-gray-700">
        <div className="text-xl font-bold text-amber-500">
          <span className="text-2xl">skeiron</span>
          <span className="text-sm ml-1 text-white">LOGISTICS</span>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul>
          <li className="px-2 mx-3 rounded-lg hover:bg-[#2a374b] transition-colors duration-200">
            <Link to="/admindashboard" className="flex items-center text-gray-300 hover:text-white px-3 py-2">
              <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
              <span>Dashboard</span> 
            </Link>
          </li>
          
          {/* User Management Dropdown */}
          <li className="px-2 mx-3 rounded-lg hover:bg-[#2a374b] transition-colors duration-200">
            <div 
              onClick={handleUserManagementClick}
              className="flex items-center justify-between text-gray-300 hover:text-white px-3 py-2 cursor-pointer"
            >
              <div className="flex items-center">
                <FontAwesomeIcon icon={faUsers} className="mr-3" />
                <span>User Management</span>
              </div>
              <div 
                className="chevron-icon"
                onClick={toggleUserManagement}
              >
                <FontAwesomeIcon 
                  icon={isUserManagementOpen ? faChevronUp : faChevronDown} 
                  className="text-xs"
                />
              </div>
            </div>
            <div
              className={`
                ml-4 overflow-hidden transition-all duration-500 ease-in-out
                ${isUserManagementOpen ? 'max-h-60 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}
              `}
            >
              <ul className="space-y-1 py-1">
                <li className="rounded-lg hover:bg-[#2a374b] transition-colors duration-200">
                  <Link 
                    to="/admindashboard/add-user" 
                    className="flex items-center text-gray-400 hover:text-white text-sm px-3 py-2 pl-8"
                  >
                    <FontAwesomeIcon icon={faUserPlus} className="mr-3 text-xs" />
                    Add User
                  </Link>
                </li>
                <li className="rounded-lg hover:bg-[#2a374b] transition-colors duration-200">
                  <Link 
                    to="/admindashboard/add-role" 
                    className="flex items-center text-gray-400 hover:text-white text-sm px-3 py-2 pl-8"
                  >
                    <FontAwesomeIcon icon={faUserShield} className="mr-3 text-xs" />
                    Add Role
                  </Link>
                </li>
                <li className="rounded-lg hover:bg-[#2a374b] transition-colors duration-200">
                  <Link 
                    to="/admindashboard/deleted-users" 
                    className="flex items-center text-gray-400 hover:text-white text-sm px-3 py-2 pl-8"
                  >
                    <FontAwesomeIcon icon={faUserSlash} className="mr-3 text-xs" />
                    Deleted Users
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Support and Feedback */}
          <li className="px-2 mx-3 rounded-lg hover:bg-[#2a374b] transition-colors duration-200">
            <Link to="/admindashboard/support" className="flex items-center text-gray-300 hover:text-white px-3 py-2">
              <FontAwesomeIcon icon={faHeadset} className="mr-3" />
              <span>Support & Feedback</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGS4_gl3MZZkA/profile-displayphoto-shrink_400_400/B56ZXNnG26HEAo-/0/1742911337528?e=1753920000&v=beta&t=yuyYqzHZDSiGF5U-zK98mlecLxOwL2zxJFaF8gspUuE"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-400">johndoe@Skeiron.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}