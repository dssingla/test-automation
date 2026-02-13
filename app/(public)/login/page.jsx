"use client";

import { useState } from "react";
import Link from "next/link";

export default function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async () => {
  const res = await fetch("/api/auth/login",{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ email,password })
  });

  const data = await res.json();
  alert(data.message);

  if(res.status===200){
    localStorage.setItem("token", data.token); // store token
    window.location.href="/dashboard";
  }
};


  return (
    <div className="flex justify-center items-center mt-20">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <input type="email" placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg"/>

        <input type="password" placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg"/>

        <button onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Login
        </button>

        <p className="text-center mt-3">
          No account?
          <Link href="/signup" className="text-blue-600"> Signup</Link>
        </p>
      </div>
    </div>
  );
}
