const orders = [
  {
    id: "1",
    product: 'MacBook Pro 14"',
    date: "Oct 24, 2023",
    customer: "Guy Hawkins",
    amount: "$2,400",
    status: "Completed",
  },
  {
    id: "2",
    product: "Apple Watch Series 9",
    date: "Oct 23, 2023",
    customer: "Jane Cooper",
    amount: "$399",
    status: "Processing",
  },
  {
    id: "3",
    product: "iPhone 15 Pro",
    date: "Oct 22, 2023",
    customer: "Wade Warren",
    amount: "$999",
    status: "Pending",
  },
  {
    id: "4",
    product: "AirPods Pro 2",
    date: "Oct 21, 2023",
    customer: "Esther Howard",
    amount: "$249",
    status: "Completed",
  },
  {
    id: "5",
    product: "iPad Air M1",
    date: "Oct 20, 2023",
    customer: "Cameron Williamson",
    amount: "$599",
    status: "Cancelled",
  },
];

const statusStyles: Record<string, string> = {
  Completed: "bg-green-100 text-green-700",
  Processing: "bg-blue-100 text-blue-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function RecentOrdersTable() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900">Recent Orders</h3>
        <button className="text-teal-600 font-semibold text-sm hover:underline">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                Product
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                Date
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                Customer
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                Amount
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-gray-900">
                    {order.product}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-500">{order.date}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-900">
                    {order.customer}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-gray-900">
                    {order.amount}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${statusStyles[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
