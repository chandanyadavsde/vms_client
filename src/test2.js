import React, { useState } from 'react';

const Test2 = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('User created successfully!');
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-8 mt-10">
      {/* Stepper */}
      <div className="mb-8">
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 1 ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>1</div>
            <div className="text-sm font-medium ml-2">User Details</div>
          </div>
          <div className={`w-20 h-1 mx-2 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`} />
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 2 ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>2</div>
            <div className="text-sm font-medium ml-2">Confirm Details</div>
          </div>
        </div>
      </div>

      {step === 1 ? (
        <>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Create User Details</h2>
          <form>
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a role</option>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="editor">Editor</option>
                  <option value="user">User</option>
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a location</option>
                  <option value="new-york">New York</option>
                  <option value="san-francisco">San Francisco</option>
                  <option value="london">London</option>
                  <option value="tokyo">Tokyo</option>
                  <option value="sydney">Sydney</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
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
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Create User
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Test2;
