import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
const AddUserPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ firstName: "", middleName: "", lastName: "", role: "Manager", phone: "", email: "", location: "Pune" });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      navigate("/");
      // submit logic here
    }, 2000);
  };

  return (
    <main className="flex-1 overflow-y-auto p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Add User</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center whitespace-nowrap"
        >
          <i className="fas fa-arrow-left mr-2"></i>Back
        </button>
      </div>
      {/* form fields same as before... */}
      <div className="flex justify-end gap-4 mt-8">
        <button onClick={() => navigate("/")} className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
          Cancel
        </button>
        <button onClick={handleSubmit} className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
          Create User
        </button>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-check text-2xl text-green-500"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Success!</h3>
            <p className="text-gray-600 mb-4">New user has been added successfully</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default AddUserPage;