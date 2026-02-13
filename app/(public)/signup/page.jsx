"use client";

import { useState } from "react";
import Link from "next/link";

export default function Signup() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignup = async () => {
    console.log("Button clicked");

    const res = await fetch("/api/auth/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({ name,email,password })
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Signup</h1>

        <input type="text" placeholder="Full Name"
          onChange={(e)=>setName(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg"/>

        <input type="email" placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg"/>

        <input type="password" placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg"/>

        <button
          onClick={handleSignup}
          className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Sign Up
        </button>

        <p className="text-center mt-3">
          Already have account?
          <Link href="/login" className="text-blue-600"> Login</Link>
        </p>
      </div>
    </div>
  );
}
