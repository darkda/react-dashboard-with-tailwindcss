import React from "react";
import { FaEllipsisV, FaRegCalendarMinus } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";
import { Flex, Progress } from "antd";
import PieComponent from "./PieComponent";
import norecords from "../assets/images/norecords.png";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function MainArea() {
  return (
    <div className="pt-[25px] px-[25px] bg-[#f6f9fc] ">
      <div className="flex items-center justify-between pb-[25px]">
        <h1 className="text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer">
          Dashboard
        </h1>
        <button className="bg-sky-400 h-[32px] font-bold text-white rounded-[5px] flex items-center justify-center px-[10px] cursor-pointer">
          Generate Report
        </button>
      </div>
      <div>
        <div className=" grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]">
          <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-sky-400 flex items-center justify-between px-[15px] cursor-pointer hover:shadow-lg transform hover:scale-[105%] transition duration-300 ease-out">
            <div>
              <h2 className="text-[#B589DF] text-[14px] leading-[17px] font-bold">
                EARNINGS (MONTHLY)
              </h2>
              <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
                $40,000
              </h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="black" />
          </div>

          <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-sky-400 flex items-center justify-between px-[15px] cursor-pointer hover:shadow-lg transform hover:scale-[105%] transition duration-300 ease-out">
            <div>
              <h2 className="text-[#78ce5e] text-[14px] leading-[17px] font-bold">
                EARNINGS (ANNUAL)
              </h2>
              <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
                $40,000
              </h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="black" />
          </div>

          <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-sky-400 flex items-center justify-between px-[15px] cursor-pointer hover:shadow-lg transform hover:scale-[105%] transition duration-300 ease-out">
            <div>
              <h2 className="text-[#78ce5e] text-[14px] leading-[17px] font-bold">
                TASKS
              </h2>
              <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
                $40,000
              </h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="black" />
          </div>

          <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-sky-400 flex items-center justify-between px-[15px] cursor-pointer hover:shadow-lg transform hover:scale-[105%] transition duration-300 ease-out">
            <div>
              <h2 className="text-[#78ce5e] text-[14px] leading-[17px] font-bold">
                PENDING REQUESTS
              </h2>
              <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
                $40,000
              </h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="black" />
          </div>
        </div>

        <div className="flex mt-[22px] w-full gap-[30px]">
          <div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-md">
            <div className="py-[15px] px-[20px] border-b-[1px] border-[#ededed] bg-[#f8f9fc] flex items-center justify-between">
              <h2>Earnings Overview</h2>
              <FaEllipsisV color="gray" className="cursor-pointer" />
            </div>
            <div>
              <LineChart
                width={600}
                height={400}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </div>
          </div>

          <div className="basis-[30%] border bg-white shadow-md cursor-pointer rounded-md">
            <div className="py-[15px] px-[20px] border-b-[1px] border-[#ededed] bg-[#f8f9fc] flex items-center justify-between">
              <h2>Earnings Overview</h2>
              <FaEllipsisV color="gray" className="cursor-pointer" />
            </div>
            <div className="pl-[42px]">
              <PieComponent />
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-[22px] w-full gap-[30px]">
        <div className="basis-[55%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-[#f8f9fc] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
            <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
              Project Overview
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="p-[20px] space-y-[15px] py-[15px]">
            <div>
              <h2>Server Migration</h2>
              <Progress percent={30} strokeColor="gray" />
            </div>
            <div>
              <h2>Sales Tracking</h2>
              <Progress
                percent={51}
                status="active"
                strokeColor="orange"
                showInfo={true}
              />
            </div>
            <div>
              <h2>Customer Database</h2>
              <Progress
                percent={70}
                status="active"
                strokeColor="#e74a3b"
                showInfo={true}
              />
            </div>
            <div>
              <h2>Payout Details</h2>
              <Progress percent={90} strokeColor="blue" showInfo={true} />
            </div>
            <div>
              <h2>Account Setup</h2>
              <Progress percent={50} status="exception" showInfo={true} />
            </div>
          </div>
        </div>

        <div className="basis-[45%] border  justify-center items-center">
          <div className="bg-[#f8f9fc] cursor-pointer flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
            <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
              Resources
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="flex  pl-[35px] pb-[100px] justify-center items-center h-[100%] ">
            <div className="w-[250px] h-[250px]">
              <img src={norecords} alt="No files" />
              <p className=" font-semibold text-gray-500">No Data Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainArea;
