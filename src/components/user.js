// user.js

export const users = [
  {
    id: 1,
    name: "Chandan Vishwakarma",
    email: "chandan.vishwakarma@sorigin.co",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Chandan Vishwakarma",
    email: "chandan.vishwakarma@sorigin.co",
    role: "Admin",
    status: "Active",
  },
  {
    id: 3,
    name: "Chandan Vishwakarma",
    email: "chandan.vishwakarma@sorigin.co",
    role: "Admin",
    status: "Active",
  },
  {
    id: 4,
    name: "Chandan Vishwakarma",
    email: "chandan.vishwakarma@sorigin.co",
    role: "Coordinator",
    status: "Active",
  },
  {
    id: 5,
    name: "Chandan Vishwakarma",
    email: "chandan.vishwakarma@sorigin.co",
    role: "Coordinator",
    status: "Active",
  },
  {
    id: 6,
    name: "Chandan Vishwakarma",
    email: "chandan.vishwakarma@sorigin.co",
    role: "Driver",
    status: "Inactive",
  },
  {
    id: 7,
    name: "Chandan Vishwakarma",
    email: "chandan.vishwakarma@sorigin.co",
    role: "Manager",
    status: "Active",
  },
  {
    id: 8,
    name: "Chandan Vishwakarma",
    email: "chandan.vishwakarma@sorigin.co",
    role: "Coordinator",
    status: "Inactive",
  },
  {
    id: 9,
    name: "Chandan Vishwakarma",
    email: "chandan.vishwakarma@sorigin.co",
    role: "Coordinator",
    status: "Inactive",
  },
];

// Helper to assign color based on role
export const getRoleBadgeClass = (role) => {
  switch (role) {
    case "Admin":
      return "bg-amber-100 text-amber-600";
    case "Coordinator":
      return "bg-blue-100 text-blue-600";
    case "Manager":
      return "bg-pink-200 text-pink-600";
    case "Driver":
      return "bg-purple-100 text-purple-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

// Helper to assign color based on status
export const getStatusClass = (status) =>
  status === "Active" ? "text-green-600" : "text-red-500"
