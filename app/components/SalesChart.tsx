import { salesData, maxValue } from "../data/salesData";

export default function SalesChart() {
  return (
    <div className="relative">
      <div className="flex gap-4">
        <div className="flex flex-col justify-between h-64 text-xs text-gray-500 pb-6">
          <span>50m</span>
          <span>40m</span>
          <span>30m</span>
          <span>20m</span>
          <span>10m</span>
          <span>0m</span>
        </div>

        <div className="flex-1">
          <div className="h-64 flex items-end justify-center gap-3 mb-4">
            {salesData.map((data, index) => (
              <div
                key={index}
                className="flex items-end justify-center gap-1 h-full"
                style={{ width: "8%" }}
              >
                <div
                  className="bg-blue-500 rounded-t min-h-[2px]"
                  style={{
                    height: `${(data.blue / maxValue) * 100}%`,
                    width: "28%",
                  }}
                />
                <div
                  className="bg-green-500 rounded-t min-h-[2px]"
                  style={{
                    height: `${(data.green / maxValue) * 100}%`,
                    width: "28%",
                  }}
                />
                <div
                  className="bg-red-500 rounded-t min-h-[2px]"
                  style={{
                    height: `${(data.red / maxValue) * 100}%`,
                    width: "28%",
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 text-xs text-gray-500">
            {salesData.map((data, index) => (
              <span key={index} style={{ width: "8%" }}>
                {data.month}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
