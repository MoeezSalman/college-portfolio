"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";
import { HiOutlineLockClosed } from "react-icons/hi2";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "admin@college.com" &&
      password === "admin123"
    ) {
      Cookies.set("admin-auth", "true");

      router.push("/admin/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6 dark:bg-slate-950">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900"
      >

        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25">
          <HiOutlineLockClosed size={26} />
        </div>

        <h1 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="mb-5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/15 dark:border-slate-700 dark:bg-slate-800/60 dark:placeholder:text-slate-500 dark:focus:bg-slate-800"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-6 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/15 dark:border-slate-700 dark:bg-slate-800/60 dark:placeholder:text-slate-500 dark:focus:bg-slate-800"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40">
          Login
        </button>

        <p className="mt-6 rounded-xl bg-slate-50 p-4 text-center text-sm text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
          Demo:
          <br />
          admin@college.com
          <br />
          admin123
        </p>

      </form>

    </section>
  );
}
