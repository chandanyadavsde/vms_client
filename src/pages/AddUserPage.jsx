import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUserPage = () => {
    const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    role: '',
    phoneNumber: '',
    email: '',
    location: '',
  });
  const [toastMessage, setToastMessage] = useState('');

  const API_URL = process.env.REACT_APP_VMS_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  // Show toast for 3 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        firstName: formData.firstName,
        middleName: formData.middleName,
        lastName: formData.lastName,
        role: formData.role,
        phone: formData.phoneNumber,
        email: formData.email,
      };

      const response = await fetch(`${API_URL}/vms/add-user/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      // Success
      setToastMessage('User added successfully!');
      setStep(1);
      // Reset form (optional)
      setFormData({
        firstName: '',
        middleName: '',
        lastName: '',
        role: '',
        phoneNumber: '',
        email: '',
        location: '',
      });
         // Imperative navigation after success:
      navigate("/admindashboard/usermanagement");

    } catch (error) {
      setToastMessage('Error adding user');
      console.error(error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-8 mt-2 min-h-[600px]">

      {/* Stepper (unchanged) */}
      <div className="mb-8">
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 1 ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-600'}`}>1</div>
            <div className="text-sm font-medium ml-2">User Details</div>
          </div>
          <div className={`w-20 h-1 mx-2 ${step >= 2 ? 'bg-orange-500' : 'bg-gray-300'}`} />
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 2 ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-600'}`}>2</div>
            <div className="text-sm font-medium ml-2">Confirm Details</div>
          </div>
        </div>
      </div>

      <div className="min-h-[400px]">
        {step === 1 ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Create User Details</h2>
            <form>
              {/* Form inputs unchanged except phoneNumber renamed to phone in payload */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="middleName" className="block text-sm font-medium text-gray-700 mb-1">Middle Name</label>
                  <input
                    type="text"
                    id="middleName"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  >
                    <option value="">Select a role</option>
                   <option value="user">User</option>
                   <option value="admin">Admin</option>
                  <option value="HQ">HQ</option>

                    
                  </select>
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select a location</option>
                    <option value="new-york">Pune</option>
                    <option value="san-francisco">Solaput</option>
                    <option value="london">Surat</option>
                    <option value="tokyo">Tokyo</option>
                    <option value="sydney">Sydney</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  onClick={() => {
                    setFormData({
                      firstName: '',
                      middleName: '',
                      lastName: '',
                      role: '',
                      phoneNumber: '',
                      email: '',
                      location: '',
                    });
                    setStep(1);
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                  disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.role}
                >
                  Next
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Confirm User Details</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              {/* Confirmation content unchanged */}
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">First Name</p>
                  <p className="font-medium">{formData.firstName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Middle Name</p>
                  <p className="font-medium">{formData.middleName || '-'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Last Name</p>
                  <p className="font-medium">{formData.lastName}</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-medium">{formData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                  <p className="font-medium">{formData.phoneNumber || '-'}</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">Role & Location</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Role</p>
                  <p className="font-medium capitalize">{formData.role}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="font-medium capitalize">{formData.location.replace('-', ' ') || '-'}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Go Back
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
              >
                Create User
              </button>
            </div>
          </>
        )}
      </div>

      {/* Toast message at bottom-left */}
      {toastMessage && (
        <div className="fixed bottom-4 left-4 bg-orange-600 text-white px-4 py-2 rounded shadow-lg text-sm z-50">
          {toastMessage}
        </div>
      )}

    </div>
  );
};

export default AddUserPage;
