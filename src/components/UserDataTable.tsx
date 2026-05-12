import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import {
  Search,
  ArrowUpDown,
  Filter,
  Loader2,
  AlertCircle,
} from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
  address: {
    city: string;
  };
}

export default function UserDataTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter/Sort states
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [cityFilter, setCityFilter] = useState("All");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        setUsers(response.data);
        setError(null);
      } catch (err) {
        setError(err.message || "Something went wrong while fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Derived state for cities
  const cities = useMemo(() => {
    return ["All", ...new Set(users.map((u) => u.address.city))];
  }, [users]);

  // Using useMemo for filtering and sorting to optimize performance
  const filteredUsers = useMemo(() => {
    return users
      .filter((user) => {
        const matchesSearch =
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCity =
          cityFilter === "All" || user.address.city === cityFilter;
        return matchesSearch && matchesCity;
      })
      .sort((a, b) => {
        if (sortOrder === "asc") return a.name.localeCompare(b.name);
        return b.name.localeCompare(a.name);
      });
  }, [users, searchQuery, cityFilter, sortOrder]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-96 bg-white rounded-[20px] shadow-sm">
        <Loader2 className="w-10 h-10 text-[#5D5FEF] animate-spin mb-4" />
        <p className="text-[#737791] font-medium">
          Fetching users from directory...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-96 bg-white rounded-[20px] shadow-sm p-8 text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <h3 className="text-xl font-bold text-[#151D48] mb-2">
          Oops! Something went wrong
        </h3>
        <p className="text-[#737791] mb-6">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-[#5D5FEF] text-white rounded-xl font-bold hover:bg-[#4d4fd1] transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-[20px] shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h3 className="text-2xl font-bold text-[#151D48]">User Directory</h3>
          <p className="text-[#737791] text-sm font-medium">
            Manage and monitor platform members
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#737791]"
              size={16}
            />
            <input
              type="text"
              placeholder="Search name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-[#F9FAFB] border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]/10 w-64"
            />
          </div>

          {/* City Filter */}
          <div className="relative">
            <Filter
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#737791]"
              size={16}
            />
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="pl-10 pr-8 py-2 bg-[#F9FAFB] border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]/10 appearance-none cursor-pointer"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Toggle */}
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="flex items-center gap-2 px-4 py-2 bg-[#F9FAFB] border border-gray-100 rounded-xl text-sm font-bold text-[#151D48] hover:bg-gray-50 transition-colors"
          >
            <ArrowUpDown size={16} className="text-[#5D5FEF]" />
            Sort: {sortOrder === "asc" ? "A-Z" : "Z-A"}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-50">
              <th className="pb-4 text-xs font-semibold text-[#96A5B8] uppercase tracking-wider">
                Name
              </th>
              <th className="pb-4 text-xs font-semibold text-[#96A5B8] uppercase tracking-wider">
                Email
              </th>
              <th className="pb-4 text-xs font-semibold text-[#96A5B8] uppercase tracking-wider">
                Company
              </th>
              <th className="pb-4 text-xs font-semibold text-[#96A5B8] uppercase tracking-wider">
                City
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-[#F9FAFB] transition-colors group"
                >
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#5D5FEF]/10 flex items-center justify-center text-[#5D5FEF] font-bold text-xs uppercase">
                        {user.name.charAt(0)}
                      </div>
                      <span className="text-sm font-bold text-[#151D48] group-hover:text-[#5D5FEF] transition-colors">
                        {user.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-[#737791] font-medium">
                    {user.email}
                  </td>
                  <td className="py-4 text-sm text-[#151D48] font-semibold">
                    {user.company.name}
                  </td>
                  <td className="py-4">
                    <span className="px-3 py-1 bg-[#F1F2FF] text-[#5D5FEF] text-[10px] font-bold rounded-lg uppercase">
                      {user.address.city}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="py-12 text-center text-[#737791] italic"
                >
                  No users found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
