import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Jan', loyal: 300, new: 280, unique: 350 },
  { name: 'Feb', loyal: 350, new: 300, unique: 380 },
  { name: 'Mar', loyal: 320, new: 250, unique: 320 },
  { name: 'Apr', loyal: 380, new: 320, unique: 400 },
  { name: 'May', loyal: 340, new: 280, unique: 350 },
  { name: 'Jun', loyal: 360, new: 300, unique: 370 },
  { name: 'Jul', loyal: 320, new: 260, unique: 310 },
  { name: 'Aug', loyal: 340, new: 290, unique: 340 },
  { name: 'Sep', loyal: 380, new: 350, unique: 410 },
  { name: 'Oct', loyal: 330, new: 280, unique: 330 },
  { name: 'Nov', loyal: 350, new: 310, unique: 360 },
  { name: 'Dec', loyal: 310, new: 250, unique: 300 },
];

export default function VisitorInsights() {
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-sm h-full flex flex-col">
      <h3 className="text-xl font-bold text-[#151D48] mb-6">Visitor Insights</h3>
      <div className="flex-1 w-full min-h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F2F2F2" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#737791', fontSize: 10 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#737791', fontSize: 10 }} 
              ticks={[0, 100, 200, 300, 400]}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Line 
              type="monotone" 
              dataKey="loyal" 
              stroke="#A855F7" 
              strokeWidth={3} 
              dot={false} 
              name="Loyal Customers"
            />
            <Line 
              type="monotone" 
              dataKey="new" 
              stroke="#EF4444" 
              strokeWidth={3} 
              dot={false} 
              name="New Customers"
            />
            <Line 
              type="monotone" 
              dataKey="unique" 
              stroke="#22C55E" 
              strokeWidth={3} 
              dot={false} 
              name="Unique Customers"
            />
            <Legend 
              verticalAlign="bottom" 
              align="center" 
              iconType="circle"
              wrapperStyle={{ paddingTop: '15px', fontSize: '9px', fontWeight: 'bold' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
