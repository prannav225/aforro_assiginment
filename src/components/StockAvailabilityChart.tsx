import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'In Stock', value: 65, color: '#14b8a6' },
  { name: 'Low Stock', value: 20, color: '#f59e0b' },
  { name: 'Out of Stock', value: 15, color: '#ef4444' },
];

export default function StockAvailabilityChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-[400px]">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Stock Availability</h3>
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 space-y-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-sm text-gray-600 font-medium">{item.name}</span>
            </div>
            <span className="text-sm font-bold text-gray-900">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
