"use client";

import { useState } from "react";
import SalesChart from "./SalesChart";
import MetricCard from "./MetricCard";

export default function SalesOverview() {
  const [selectedPeriod, setSelectedPeriod] = useState("1 Year");

  return (
    <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Sales Overview
          </h2>
          <p className="text-sm text-gray-500">
            Showing overview Jan 2022 - Sep 2022
          </p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm">
            View Transactions
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedPeriod("1 Week")}
              className={`px-3 py-1.5 rounded-lg font-medium text-xs ${
                selectedPeriod === "1 Week"
                  ? "bg-gray-200 text-gray-900"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              1 Week
            </button>
            <button
              onClick={() => setSelectedPeriod("1 Month")}
              className={`px-3 py-1.5 rounded-lg font-medium text-xs ${
                selectedPeriod === "1 Month"
                  ? "bg-gray-200 text-gray-900"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              1 Month
            </button>
            <button
              onClick={() => setSelectedPeriod("1 Year")}
              className={`px-3 py-1.5 rounded-lg font-medium text-xs ${
                selectedPeriod === "1 Year"
                  ? "bg-gray-200 text-gray-900"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              1 Year
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <MetricCard
            value="₦120,000.00"
            label="Total Inflow"
            valueColor="text-[#4545FE]"
            change="+ 2.5%"
            changeColor="green"
          />
          <MetricCard
            value="₦50,000.00"
            label="MRR"
            valueColor="text-[#12B76A]"
            change="+ 2.5%"
            changeColor="green"
          />
          <MetricCard
            value="₦200,000.00"
            label="Commission Revenue"
            valueColor="text-[#14B8A6]"
            change="+ 0.5%"
            changeColor="green"
          />
          <MetricCard
            value="₦100,000.00"
            label="GMV"
            valueColor="text-[#F04438]"
            change="- 0.5%"
            changeColor="red"
          />
        </div>
      </div>
    </div>
  );
}
