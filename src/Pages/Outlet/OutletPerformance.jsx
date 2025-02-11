import React from "react";
import { Line } from "react-chartjs-2";
import { FaSearch } from "react-icons/fa";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const OutletPerformance = () => {
  const profitData = {
    labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    datasets: [
      {
        label: "Revenue",
        data: [20000, 35000, 55000, 70000, 65000, 60000, 75000],
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Profit",
        data: [18000, 30000, 50000, 60000, 55000, 50000, 67000],
        borderColor: "orange",
        fill: false,
      },
    ],
  };

  return (
    <main className="flex-1 p-6 bg-gray-100">
      {/* Search Bar */}
      <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-md mb-6">
        <div className="flex items-center space-x-2">
          <FaSearch />
          <input type="text" placeholder="Search stock, reports, customers" className="outline-none" />
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </div>

      {/* Overview Section */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-bold">Overview</h3>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <p className="text-gray-600">Total Profit</p>
              <p className="text-xl font-bold">LKR 21,190</p>
            </div>
            <div>
              <p className="text-gray-600">Revenue</p>
              <p className="text-xl font-bold text-orange-500">LKR 18,300</p>
            </div>
            <div>
              <p className="text-gray-600">Sales</p>
              <p className="text-xl font-bold text-blue-500">LKR 17,432</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-bold">Best Selling Category</h3>
          <table className="w-full mt-4">
            <thead>
              <tr className="text-gray-500">
                <th className="text-left">Category</th>
                <th className="text-right">Turn Over</th>
                <th className="text-right">Increase By</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2.3Kg Cylinder</td>
                <td className="text-right">LKR 26,000</td>
                <td className="text-right text-green-500">3.2%</td>
              </tr>
              <tr>
                <td>05Kg Cylinder</td>
                <td className="text-right">LKR 22,000</td>
                <td className="text-right text-green-500">2%</td>
              </tr>
              <tr>
                <td>12Kg Cylinder</td>
                <td className="text-right">LKR 22,000</td>
                <td className="text-right text-green-500">1.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Profit & Revenue Chart */}
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h3 className="text-lg font-bold">Profit & Revenue</h3>
        <Line data={profitData} />
      </div>

      {/* Best Selling Products */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <h3 className="text-lg font-bold">Best Selling Product</h3>
        <table className="w-full mt-4">
          <thead>
            <tr className="text-gray-500">
              <th className="text-left">Product</th>
              <th className="text-left">Product ID</th>
              <th className="text-left">Category</th>
              <th className="text-right">Remaining Qty</th>
              <th className="text-right">Turn Over</th>
              <th className="text-right">Increase By</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2.3Kg</td>
              <td>23567</td>
              <td>Small</td>
              <td className="text-right">200</td>
              <td className="text-right">LKR 17,000</td>
              <td className="text-right text-green-500">2.3%</td>
            </tr>
            <tr>
              <td>05Kg</td>
              <td>25831</td>
              <td>Medium</td>
              <td className="text-right">150</td>
              <td className="text-right">LKR 12,000</td>
              <td className="text-right text-green-500">1.3%</td>
            </tr>
            <tr>
              <td>12Kg</td>
              <td>56841</td>
              <td>Large</td>
              <td className="text-right">100</td>
              <td className="text-right">LKR 10,000</td>
              <td className="text-right text-green-500">1.3%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default OutletPerformance;
