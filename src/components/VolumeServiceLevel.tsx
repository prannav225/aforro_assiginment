import { BarChart, Bar, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "1", volume: 60, services: 40 },
  { name: "2", volume: 55, services: 55 },
  { name: "3", volume: 75, services: 25 },
  { name: "4", volume: 60, services: 30 },
  { name: "5", volume: 45, services: 35 },
  { name: "6", volume: 45, services: 45 },
];

export default function VolumeServiceLevel() {
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-sm h-full flex flex-col">
      <h3 className="text-xl font-bold text-[#151D48] mb-8">
        Volume vs Service Level
      </h3>
      <div className="flex-1 w-full min-h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barGap={0}
            stackOffset="sign"
            margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
          >
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />
            {/* Legend with custom content to match the screenshot exactly */}
            <Legend
              verticalAlign="bottom"
              align="center"
              content={(props) => {
                const { payload } = props;
                return (
                  <div className="flex justify-center items-center gap-0 pt-6 border-t border-gray-50 mt-4">
                    {payload?.map((entry: { color: string; value: string }, index: number) => (
                      <div key={`item-${index}`} className="flex items-center">
                        <div className="flex flex-col items-center px-6">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: entry.color }}
                            ></div>
                            <span className="text-xs text-[#737791] font-semibold capitalize">
                              {entry.value}
                            </span>
                          </div>
                          <span className="text-sm font-bold text-[#151D48] mt-1">
                            {entry.value === "volume" ? "1,135" : "635"}
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
            {/* Green on bottom, Blue on top as per image */}
            <Bar
              dataKey="services"
              stackId="a"
              fill="#00E096"
              radius={[0, 0, 0, 0]}
              barSize={12}
            />
            <Bar
              dataKey="volume"
              stackId="a"
              fill="#0095FF"
              radius={[3, 3, 0, 0]}
              barSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
