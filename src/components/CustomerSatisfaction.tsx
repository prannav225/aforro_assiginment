import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  Legend,
  type LegendPayload,
} from "recharts";

const data = [
  { name: "1", last: 35, this: 70 },
  { name: "2", last: 40, this: 55 },
  { name: "3", last: 25, this: 65 },
  { name: "4", last: 25, this: 45 },
  { name: "5", last: 35, this: 65 },
  { name: "6", last: 35, this: 45 },
  { name: "7", last: 55, this: 85 },
];

export default function CustomerSatisfaction() {
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-sm h-full flex flex-col">
      <h3 className="text-xl font-bold text-[#151D48] mb-8">
        Customer Satisfaction
      </h3>
      <div className="flex-1 w-full min-h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorLast" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0095FF" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#0095FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorThis" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00E096" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00E096" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />
            <Area
              type="monotone"
              dataKey="last"
              stroke="#0095FF"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorLast)"
              dot={{ r: 4, fill: "#0095FF", strokeWidth: 2, stroke: "#fff" }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              name="Last Month"
            />
            <Area
              type="monotone"
              dataKey="this"
              stroke="#00E096"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorThis)"
              dot={{ r: 4, fill: "#00E096", strokeWidth: 2, stroke: "#fff" }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              name="This Month"
            />
            <Legend
              verticalAlign="bottom"
              align="center"
              content={(props) => {
                const { payload } = props;
                return (
                  <div className="flex justify-center items-center gap-0 pt-6 border-t border-gray-50 mt-4">
                    {payload?.map((entry: LegendPayload, index: number) => (
                      <div key={`item-${index}`} className="flex items-center">
                        <div className="flex flex-col items-center px-6">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-4 h-[2px] rounded-full"
                              style={{ backgroundColor: entry.color }}
                            ></div>
                            <span className="text-xs text-[#737791] font-semibold">
                              {entry.value}
                            </span>
                          </div>
                          <span className="text-sm font-bold text-[#151D48] mt-1">
                            {entry.value === "Last Month" ? "$3,004" : "$4,504"}
                          </span>
                        </div>
                        {index === 0 && (
                          <div className="h-8 w-px bg-gray-200"></div>
                        )}
                      </div>
                    ))}
                  </div>
                );
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
