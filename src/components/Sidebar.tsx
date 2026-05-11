import {
  LayoutDashboard,
  BarChart2,
  ShoppingCart,
  Package,
  TrendingUp,
  MessageSquare,
  Settings,
  LogOut,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Users, label: "User Directory", path: "/users" },
  { icon: BarChart2, label: "Leaderboard", path: "#", disabled: true },
  { icon: ShoppingCart, label: "Order", path: "#", disabled: true },
  { icon: Package, label: "Products", path: "#", disabled: true },
  { icon: TrendingUp, label: "Sales Report", path: "#", disabled: true },
  { icon: MessageSquare, label: "Messages", path: "#", disabled: true },
  { icon: Settings, label: "Settings", path: "#", disabled: true },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen w-64 bg-white text-gray-500 p-6 border-r border-gray-100 shrink-0">
      <div className="flex items-center gap-3 px-2 py-4 mb-8">
        <div className="w-10 h-10 bg-[#5D5FEF] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#5D5FEF]/30">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L4 8L12 12L20 8L12 4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12L12 16L20 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 16L12 20L20 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="text-[#151D48] text-2xl font-bold">Dabang</span>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            onClick={(e) => {
              if (item.disabled) e.preventDefault();
            }}
            className={({ isActive }) => `
              w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 group
              ${
                !item.disabled && isActive
                  ? "bg-[#5D5FEF] text-white shadow-lg shadow-[#5D5FEF]/30"
                  : "hover:bg-[#5D5FEF]/5 hover:text-[#5D5FEF]"
              }
            `}
          >
            {({ isActive }) => (
              <>
                <item.icon
                  size={20}
                  className={
                    !item.disabled && isActive
                      ? "text-white"
                      : "text-[#737791] group-hover:text-[#5D5FEF]"
                  }
                />
                <span className="font-semibold text-sm">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="bg-[#5D5FEF] rounded-[24px] p-5 text-center relative overflow-hidden group">
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
          <div className="relative z-10">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h4 className="text-white font-bold text-base mb-1 text-nowrap">
              Dabang Pro
            </h4>
            <p className="text-white/70 text-[10px] mb-4 leading-tight">
              Get access to all features on tetumbas
            </p>
            <button className="w-full bg-white text-[#5D5FEF] py-2.5 rounded-xl font-bold text-xs shadow-sm hover:bg-gray-50 transition-colors">
              Get Pro
            </button>
          </div>
        </div>
        <button className="w-full flex items-center gap-4 px-4 py-3 mt-4 text-[#737791] hover:text-red-500 transition-colors">
          <LogOut size={20} />
          <span className="font-semibold text-sm">Sign Out</span>
        </button>
      </div>
    </div>
  );
}
