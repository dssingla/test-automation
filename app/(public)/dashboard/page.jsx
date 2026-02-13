"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  // fake auth check (later we add real JWT check)
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token){
      router.push("/login");
    }
  },[]);

  const handleLogout = ()=>{
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between">
        <h1 className="text-xl font-bold">MyApp Dashboard</h1>
        <button 
          onClick={handleLogout}
          className="bg-white text-blue-600 px-4 py-1 rounded-lg">
          Logout
        </button>
      </nav>

      {/* Dashboard Content */}
      <div className="p-8">

        <h2 className="text-3xl font-bold mb-6">Welcome 👋</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Users</h3>
            <p className="text-3xl font-bold mt-2">120</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Revenue</h3>
            <p className="text-3xl font-bold mt-2">$2,450</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Orders</h3>
            <p className="text-3xl font-bold mt-2">320</p>
          </div>

        </div>

        {/* Activity */}
        <div className="bg-white p-6 rounded-xl shadow mt-8">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>

          <ul className="space-y-3">
            <li className="border-b pb-2">User John signed up</li>
            <li className="border-b pb-2">Payment received $120</li>
            <li className="border-b pb-2">New order placed</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
