import { Search, Bell, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-50">
      <h1 className="text-2xl font-bold text-[#151D48] shrink-0">Dashboard</h1>

      <div className="flex-1 max-w-lg mx-8">
        <div className="relative group">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5D5FEF]"
            size={18}
          />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-11 pr-4 py-2.5 bg-[#F9FAFB] border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]/10 text-sm text-[#737791] placeholder-[#737791]"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1.5 rounded-lg transition-colors">
          <img
            src="https://flagcdn.com/w20/us.png"
            alt="US"
            className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
          />
          <span className="text-[#151D48] font-semibold text-xs">Eng (US)</span>
          <ChevronDown size={14} className="text-[#737791]" />
        </div>

        <button className="relative p-2.5 bg-[#FFFAF1] text-[#FFA412] rounded-xl hover:bg-[#FFF4DE] transition-colors group">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border-2 border-[#FFFAF1] group-hover:border-[#FFF4DE]"></span>
        </button>

        <div className="flex items-center gap-3 pl-2">
          <div className="w-10 h-10 rounded-xl bg-gray-100 overflow-hidden shadow-sm">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Musfiq"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-[#151D48] font-bold text-sm leading-tight">
              Musfiq
            </p>
            <p className="text-[#737791] text-[10px] font-medium">Admin</p>
          </div>
          <ChevronDown size={14} className="text-[#737791] cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
