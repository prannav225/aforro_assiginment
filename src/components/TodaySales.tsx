import { BarChart2, ShoppingBag, Tag, UserPlus, Upload } from 'lucide-react';

const stats = [
  {
    title: 'Total Sales',
    value: '$1k',
    trend: '+8% from yesterday',
    icon: BarChart2,
    bgColor: 'bg-[#FFE2E5]',
    iconColor: 'text-[#FA5A7D]',
  },
  {
    title: 'Total Order',
    value: '300',
    trend: '+5% from yesterday',
    icon: ShoppingBag,
    bgColor: 'bg-[#FFF4DE]',
    iconColor: 'text-[#FF947A]',
  },
  {
    title: 'Product Sold',
    value: '5',
    trend: '+1.2% from yesterday',
    icon: Tag,
    bgColor: 'bg-[#DCFCE7]',
    iconColor: 'text-[#3CD856]',
  },
  {
    title: 'New Customers',
    value: '8',
    trend: '0.5% from yesterday',
    icon: UserPlus,
    bgColor: 'bg-[#F3E8FF]',
    iconColor: 'text-[#BF83FF]',
  },
];

export default function TodaySales() {
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-sm h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-[#151D48]">Today's Sales</h3>
          <p className="text-[#737791] text-xs font-medium">Sales Summery</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 border border-[#D5D5D5] rounded-xl text-[#151D48] font-bold text-xs hover:bg-gray-50 transition-colors">
          <Upload size={14} />
          Export
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.title} className={`${stat.bgColor} p-4 rounded-[16px] transition-transform hover:scale-[1.02] cursor-pointer`}>
            <div className={`w-10 h-10 rounded-full bg-white/60 flex items-center justify-center mb-3`}>
              <stat.icon size={20} className={stat.iconColor} />
            </div>
            <h4 className="text-xl font-bold text-[#151D48] mb-0.5">{stat.value}</h4>
            <p className="text-[#425166] text-xs font-bold mb-1.5">{stat.title}</p>
            <p className="text-[#4079ED] text-[9px] font-bold">{stat.trend}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
