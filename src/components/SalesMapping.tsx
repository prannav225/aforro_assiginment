import { WorldMap } from "react-svg-worldmap";

export default function SalesMapping() {
  const data = [
    { country: "us", value: 100, color: "#FFA412" }, // USA - Orange
    { country: "br", value: 100, color: "#FA5A7D" }, // Brazil - Red
    { country: "sa", value: 100, color: "#00E096" }, // Saudi Arabia - Teal
    { country: "cn", value: 100, color: "#BF83FF" }, // China - Purple
    { country: "id", value: 100, color: "#00E096" }, // Indonesia - Teal
    { country: "cd", value: 100, color: "#5D5FEF" }, // DR Congo - Blue
  ];

  const getStyle = ({
    countryCode,
  }: {
    countryCode: string;
    color?: string;
    countryValue?: number;
    minValue?: number;
    maxValue?: number;
  }): React.CSSProperties => {
    const country = data.find((d) => d.country === countryCode.toLowerCase());
    if (country) {
      return {
        fill: country.color,
        fillOpacity: 1,
        stroke: "#FFFFFF",
        strokeWidth: 0.5,
        strokeOpacity: 1,
        cursor: "pointer",
      };
    }
    return {
      fill: "#E5E7EB", // Light gray for other countries
      fillOpacity: 1,
      stroke: "#FFFFFF",
      strokeWidth: 0.5,
      strokeOpacity: 1,
      cursor: "pointer",
    };
  };

  return (
    <div className="bg-white p-6 rounded-[20px] shadow-sm flex flex-col h-full overflow-hidden">
      <h3 className="text-xl font-bold text-[#151D48] mb-8">
        Sales Mapping by Country
      </h3>
      <div className="flex-1 flex items-center justify-center -mt-8 scale-[1] origin-center">
        <WorldMap
          color="#E5E7EB"
          size="responsive"
          // @ts-expect-error - WorldMap requires ISOCode literal types which are overly strict
          data={data}
          backgroundColor="transparent"
          styleFunction={getStyle}
          tooltipBgColor="#151D48"
        />
      </div>
    </div>
  );
}
