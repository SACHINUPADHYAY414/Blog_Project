import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { TbShoppingCartDollar } from "react-icons/tb";

const Home = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June","July", "August", "September" , "October" , "November" , "December"],
      datasets: [
        {
          label: "Sales This Month",
          data: [1000,1400,1800, 2200, 2500, 3000, 3400, 3800, 4200, 4800],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1
        }
      ]
    };

    const config = {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    const myChart = new Chart(chartRef.current, config);
    
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="w-full h-full overflow-auto bg-gray-200">
      <div className="grid grid-cols-4 gap-4 justify-center items-center py-4 mr-3 px-4">
        <div className="w-full space-y-4 h-48 bg-gray-100 rounded-lg m-2">
          <div className="flex justify-between items-center px-4">
            <TbShoppingCartDollar className="h-8 w-8 mb-4 mt-4 text-blue-500" />
            <p className="border rounded-full px-4 items-center text-center bg-green-300 text-2xl text-white">
              20%
            </p>
          </div>
          <div className="text-left px-4 font-md text-2xl ">
            <h3 className="">7593</h3>
            <p className="">Project Sales</p>
          </div>
        </div>
        <div className="w-full space-y-4 h-48 bg-gray-100 rounded-lg m-2">
          <div className="flex justify-between items-center px-4">
            <TbShoppingCartDollar className="h-8 w-8 mb-4 mt-4 text-blue-500" />
            <p className="border rounded-full px-4 items-center text-center bg-red-500 text-2xl text-white">
              20%
            </p>
          </div>
          <div className="text-left px-4 font-md text-2xl ">
            <h3 className="">7593</h3>
            <p className="">New Orders</p>
          </div>
        </div>
        <div className="w-full space-y-4 h-48 bg-gray-100 rounded-lg m-2">
          <div className="flex justify-between items-center px-4">
            <TbShoppingCartDollar className="h-8 w-8 mb-4 mt-4 text-blue-500" />
            <p className="border rounded-full px-4 items-center text-center bg-green-300 text-2xl text-white">
              20%
            </p>
          </div>
          <div className="text-left px-4 font-md text-2xl ">
            <h3 className="">7593</h3>
            <p className="">Total Projects</p>
          </div>
        </div>
        <div className="w-full space-y-4 h-48 bg-gray-100 rounded-lg m-2">
          <div className="flex justify-between items-center px-4">
            <a href="https://static.vecteezy.com/system/resources/previews/009/665/468/non_2x/notes-illustration-3d-free-png.png" alt="Notes" className="h-8 w-8 mb-4 mt-4 text-blue-500"/>
            <p className="border rounded-full px-4 items-center text-center bg-green-300 text-2xl text-white">
              20%
            </p>
          </div>
          <div className="text-left px-4 font-md text-2xl ">
            <h3 className="">7593</h3>
            <p className="">Total Notes</p>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 gap-4 justify-center items-center pb-4 px-4 ">
        <div className="flex h-48 bg-green-100 rounded-lg">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
            alt="avtar"
            className="h-full px-3 py-4"
          />

          <div className="px-4 py-4 justify-center items-center text-left ">
            <h2 className="justify-center items-center text-left text-2xl mx-auto font-medium ">
              Sachin upadhyay
            </h2>
            <p>Full Stack Developer</p>
            {/* <p>+91 7294890821</p> */}
          </div>
        </div>

        <div className="h-48 flex-col-1 space-y-4 ">
          <div className="h-16 w-full bg-blue-100 rounded-lg"></div>
          <div className="h-28 w-full bg-gray-100 rounded-lg"></div>
        </div>
      </div>
      <div className="h-56 px-4  py-4 ml-4 mr-4 bg-gray-100 rounded-sm">
        <h3 className="text-2xl border-b border-gray-400">Sales Overview</h3>

        <div className="flex h-48 w-full grid-cols-2">
          <div className="px-4 py-4">
            <h3 className="text-2xl font-bold font-sans">9352</h3>
            <p>Sales This Month</p>
          </div>
          <div className="w-full h-full">
            <canvas ref={chartRef} className="w-full"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
