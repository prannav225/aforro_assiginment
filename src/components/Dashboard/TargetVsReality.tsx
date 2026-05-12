import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { ShoppingBag, Ticket } from "lucide-react";

const data = [
  { name: "Jan", reality: 50, target: 80 },
  { name: "Feb", reality: 60, target: 70 },
  { name: "Mar", reality: 90, target: 80 },
  { name: "Apr", reality: 45, target: 65 },
  { name: "May", reality: 75, target: 90 },
  { name: "June", reality: 65, target: 75 },
  { name: "July", reality: 85, target: 95 },
];

export default function TargetVsReality() {
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-sm h-full flex flex-col">
      <h3 className="text-xl font-bold text-[#151D48] mb-6">
        Target vs Reality
      </h3>
      <div className="flex-1 w-full min-h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={8}>
            <CartesianGrid
              strokeDasharray="0"
              vertical={false}
              stroke="#F2F2F2"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#737791", fontSize: 10, fontWeight: 500 }}
              dy={10}
            />
            <Tooltip
              cursor={{ fill: "#F9FAFB" }}
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />
            <Bar
              dataKey="reality"
              fill="#4AB58E"
              radius={[4, 4, 0, 0]}
              barSize={15}
            />
            <Bar
              dataKey="target"
              fill="#FFCF00"
              radius={[4, 4, 0, 0]}
              barSize={15}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#E2FFF3] rounded-xl flex items-center justify-center">
            <ShoppingBag size={24} className="text-[#27AE60]" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-[#151D48]">Reality Sales</p>
            <p className="text-xs text-[#737791] font-medium">Global</p>
          </div>
          <span className="text-sm font-bold text-[#27AE60]">8.823</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#FFF4DE] rounded-xl flex items-center justify-center">
            <Ticket size={24} className="text-[#FFA412]" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-[#151D48]">Target Sales</p>
            <p className="text-xs text-[#737791] font-medium">Commercial</p>
          </div>
          <span className="text-sm font-bold text-[#FFA412]">12.122</span>
        </div>
      </div>
    </div>
  );
}
