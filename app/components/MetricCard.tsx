interface MetricCardProps {
  value: string;
  label: string;
  valueColor: string;
  change: string;
  changeColor: "green" | "red";
}

export default function MetricCard({
  value,
  label,
  valueColor,
  change,
  changeColor,
}: MetricCardProps) {
  const changeColorClasses = {
    green: "text-green-600",
    red: "text-red-600",
  };

  const isPositive = change.startsWith("+");

  return (
    <div className="bg-gray-50 rounded-lg p-4 overflow-hidden w-full border border-gray-200">
      <div className="flex flex-col h-full">
        <p className={`text-2xl font-bold ${valueColor} mb-2 leading-tight`}>
          {value}
        </p>
        <div className="flex items-center gap-2">
          <p className="text-sm font-normal text-gray-900 leading-tight">
            {label}
          </p>
          <div
            className={`flex items-center gap-1 ${changeColorClasses[changeColor]} mt-auto`}
          >
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
              {isPositive ? (
                <path d="M7 14l5-5 5 5z" />
              ) : (
                <path d="M17 10l-5 5-5-5z" />
              )}
            </svg>
            <span className="text-xs font-medium whitespace-nowrap">
              {change}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
