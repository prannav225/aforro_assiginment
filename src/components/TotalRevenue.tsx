import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Monday', online: 14000, offline: 11000 },
  { name: 'Tuesday', online: 17000, offline: 13000 },
  { name: 'Wednesday', online: 11000, offline: 15000 },
  { name: 'Thursday', online: 23000, offline: 19000 },
  { name: 'Friday', online: 13000, offline: 11000 },
  { name: 'Saturday', online: 18000, offline: 15000 },
  { name: 'Sunday', online: 21000, offline: 14000 },
];

export default function TotalRevenue() {
  return (
    <div className="bg-white p-8 rounded-[20px] shadow-sm h-full flex flex-col">
      <h3 className="text-xl font-bold text-[#151D48] mb-8">Total Revenue</h3>
      <div className="flex-1 w-full min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={10} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="0" vertical={false} stroke="#F2F2F2" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#737791', fontSize: 11, fontWeight: 500 }} 
              dy={15}
              interval={0}
              tickFormatter={(value) => value}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#737791', fontSize: 11, fontWeight: 500 }} 
              ticks={[0, 5000, 10000, 15000, 20000, 25000]}
              tickFormatter={(value) => value === 0 ? '0' : `${value / 1000}k`}
            />
            <Tooltip 
              cursor={{ fill: '#F9FAFB' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar 
              dataKey="online" 
              fill="#0095FF" 
              radius={[4, 4, 0, 0]} 
              name="Online Sales" 
              barSize={15}
            />
            <Bar 
              dataKey="offline" 
              fill="#00E096" 
              radius={[4, 4, 0, 0]} 
              name="Offline Sales" 
              barSize={15}
            />
            <Legend 
              verticalAlign="bottom" 
              align="center" 
              iconType="circle"
              iconSize={10}
              wrapperStyle={{ paddingTop: '35px', fontSize: '12px', fontWeight: 600, color: '#151D48' }}
              formatter={(value) => <span style={{ color: '#151D48', marginLeft: '8px', marginRight: '20px' }}>{value}</span>}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
