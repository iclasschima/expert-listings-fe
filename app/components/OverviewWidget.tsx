interface OverviewWidgetProps {
  title: string;
  icon: React.ReactNode;
  metrics: {
    label: string;
    value: string;
  }[];
}

export default function OverviewWidget({
  title,
  icon,
  metrics,
}: OverviewWidgetProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
          <a
            href="#"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            View all &gt;
          </a>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-sm font-normal text-gray-900 mb-1.5">
                {metric.label}
              </span>
              <span className="text-2xl font-bold text-gray-900">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
