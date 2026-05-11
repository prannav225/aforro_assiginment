const products = [
  { id: '01', name: 'Home Decor Range', sales: 45, color: '#0095FF', barBg: '#F0F9FF' },
  { id: '02', name: 'Disney Princess Pink Bag 18"', sales: 29, color: '#00E096', barBg: '#F0FFF8' },
  { id: '03', name: 'Bathroom Essentials', sales: 18, color: '#884DFF', barBg: '#FBF7FF' },
  { id: '04', name: 'Apple Smartwatches', sales: 25, color: '#FF8F0D', barBg: '#FFF9F3' },
];

export default function TopProducts() {
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-sm h-full flex flex-col">
      <h3 className="text-xl font-bold text-[#151D48] mb-6">Top Products</h3>
      <div className="flex-1 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-50">
              <th className="pb-4 text-[11px] font-medium text-[#96A5B8] w-12">#</th>
              <th className="pb-4 text-[11px] font-medium text-[#96A5B8]">Name</th>
              <th className="pb-4 text-[11px] font-medium text-[#96A5B8] w-48">Popularity</th>
              <th className="pb-4 text-[11px] font-medium text-[#96A5B8] text-center w-20">Sales</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {products.map((product) => (
              <tr key={product.id} className="group">
                <td className="py-5 text-xs font-medium text-[#444444]">{product.id}</td>
                <td className="py-5 text-xs font-semibold text-[#151D48]">{product.name}</td>
                <td className="py-5">
                  <div className={`w-full h-1 bg-[#F4F5F9] rounded-full overflow-hidden`}>
                    <div 
                      className="h-full rounded-full" 
                      style={{ 
                        width: `${product.sales}%`,
                        backgroundColor: product.color
                      }}
                    ></div>
                  </div>
                </td>
                <td className="py-5 text-center">
                  <div 
                    className="inline-block px-3 py-1 rounded-lg border text-xs font-bold"
                    style={{ 
                      color: product.color,
                      borderColor: product.color,
                      backgroundColor: `${product.color}10`
                    }}
                  >
                    {product.sales}%
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
