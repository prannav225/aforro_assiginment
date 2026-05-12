import TodaySales from "../components/Dashboard/TodaySales";
import VisitorInsights from "../components/Dashboard/VisitorInsights";
import TotalRevenue from "../components/Dashboard/TotalRevenue";
import CustomerSatisfaction from "../components/Dashboard/CustomerSatisfaction";
import TargetVsReality from "../components/Dashboard/TargetVsReality";
import TopProducts from "../components/Dashboard/TopProducts";
import SalesMapping from "../components/Dashboard/SalesMapping";
import VolumeServiceLevel from "../components/Dashboard/VolumeServiceLevel";

const Dashboard = () => (
  <main className="flex-1 overflow-y-auto p-8 pt-2">
    {/* Row 1: Today's Sales (60%) & Visitor Insights (40%) */}
    <div className="grid grid-cols-1 xl:grid-cols-10 gap-6 mb-6">
      <div className="xl:col-span-6">
        <TodaySales />
      </div>
      <div className="xl:col-span-4">
        <VisitorInsights />
      </div>
    </div>

    {/* Row 2: Total Revenue (40%), Customer Satisfaction (30%), Target vs Reality (30%) */}
    <div className="grid grid-cols-1 xl:grid-cols-10 gap-6 mb-6">
      <div className="xl:col-span-4">
        <TotalRevenue />
      </div>
      <div className="xl:col-span-3">
        <CustomerSatisfaction />
      </div>
      <div className="xl:col-span-3">
        <TargetVsReality />
      </div>
    </div>

    {/* Row 3: Top Products, Sales Mapping, Volume vs Service Level (Equal split) */}
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 pb-8">
      <TopProducts />
      <SalesMapping />
      <VolumeServiceLevel />
    </div>
  </main>
);

export default Dashboard;
