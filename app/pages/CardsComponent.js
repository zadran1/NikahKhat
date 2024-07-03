import React from "react";

import { Card } from "primereact/card";

function CardsComponent() {
  return (
    <div className="container mx-auto">
      <div className="flex space-x-4">
        <div className="bg-white shadow-md rounded-lg p-6 flex-1">
          <h3 className="text-xl font-bold mb-4 text-purple-500">
            ۴۵ <i className="pi pi-file text-purple-500"></i>
          </h3>
          <p className="text-purple-500 mb-3">نوي غوښتنلیکونه</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex-1">
          <h3 className="text-xl font-bold mb-4 text-blue-500">
            ۲۸ <i className="pi pi-filter text-blue-500"></i>
          </h3>
          <p className="text-blue-500 mb-6">غوښتنلیکونه په کار کې</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex-1">
          <h3 className="text-xl font-bold mb-4 text-green-500">
            ۷۹ <i className="pi pi-file-check text-green-500"></i>
          </h3>
          <p className="text-green-500 mb-6 ">بشپړ شوي</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex-1">
          <h3 className="text-xl font-bold mb-4 text-red-600">
            ۷ <i className="pi pi-file-excel text-red-600"></i>
          </h3>
          <p className="text-red-600 mb-6">رد شوي</p>
        </div>
      </div>
    </div>
  );
}

export default CardsComponent;
