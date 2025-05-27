import React from 'react';
import NoData from "../images/no data 1.png";

function Dashboard() {
  return (
   <div className="flex flex-col items-center justify-center h-full w-full  ">
  <img src={NoData} alt="No Data" className="max-w-xs mb-4" />
  <h1 className="text-xl text-gray-400 font-bold">No Data</h1>
</div>

  );
}

export default Dashboard;
