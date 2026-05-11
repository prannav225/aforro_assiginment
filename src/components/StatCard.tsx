import { type LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  isUp: boolean;
  icon: LucideIcon;
  iconBg: string;
}

export default function StatCard({ title, value, trend, isUp, icon: Icon, iconBg }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${iconBg}`}>
          <Icon size={24} className="text-white" />
        </div>
        <div className={`flex items-center gap-1 text-sm font-medium ${isUp ? 'text-green-500' : 'text-red-500'}`}>
          {isUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          {trend}
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      </div>
    </div>
  );
}
