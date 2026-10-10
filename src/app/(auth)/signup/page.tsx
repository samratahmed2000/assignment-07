"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  return (
    <section className="min-h-70 bg-[#f7f9f8] flex flex-col items-center justify-center px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-[28px] font-bold text-[#1a1a1a]">
          অ্যাকাউন্ট তৈরি করুন
        </h1>
        <p className="text-[14px] text-[#5d665f]">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      {/* Main Card Container */}
      <div className="w-full max-w-115 bg-white border border-[#e2e8f0] rounded-xl p-8 shadow-sm">
        <form className="flex flex-col gap-4">
          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-[14px] font-medium text-[#1a1a1a]"
            >
              নাম
            </label>
            <input
              type="text"
              id="name"
              placeholder="যেমন: সম্রাট আহমেদ"
              className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-lg text-[14px] placeholder-[#a0aec0] focus:outline-none focus:border-green-600"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[14px] font-medium text-[#1a1a1a]"
            >
              ইমেইল
            </label>
            <input
              type="email"
              id="email"
              placeholder="ahmed@mail.com"
              className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-lg text-[14px] placeholder-[#a0aec0] focus:outline-none focus:border-green-600"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-[14px] font-medium text-[#1a1a1a]"
            >
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              id="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-lg text-[14px] placeholder-[#a0aec0] focus:outline-none focus:border-green-600"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="confirm-password"
              className="text-[14px] font-medium text-[#1a1a1a]"
            >
              পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="আবার লিখুন"
              className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-lg text-[14px] placeholder-[#a0aec0] focus:outline-none focus:border-green-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#008744] hover:bg-[#007038] text-white font-medium py-3 px-4 rounded-lg transition-colors text-[15px] mt-2"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>

          {/* Divider */}
          <div className="relative flex py-2 items-center">
            <div className="grow border-t border-[#e2e8f0]"></div>
            <span className="shrink mx-4 text-[#718096] text-[12px]">অথবা</span>
            <div className="grow border-t border-[#e2e8f0]"></div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 border border-[#e2e8f0] rounded-lg py-2.5 text-[14px] font-medium text-[#4a5568] hover:bg-gray-50 transition-colors"
            >
              {/* Substitute with an actual SVG if icons are needed */}
              <span className="text-red-500 font-bold">
                <FcGoogle />
              </span>{" "}
              Google দিয়ে চালিয়ে যান
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 border border-[#e2e8f0] rounded-lg py-2.5 text-[14px] font-medium text-[#4a5568] hover:bg-gray-50 transition-colors"
            >
              <span className="text-black font-bold">
                <FaGithub />
              </span>{" "}
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          {/* Sign In Link */}
          <div className="text-center text-[14px] text-[#4a5568] mt-4">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/signin"
              className="text-green-600 font-medium hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </div>
        </form>
      </div>

      {/* Back to Home Link */}
      <Link
        href="/"
        className="mt-6 text-[14px] text-[#718096] hover:text-gray-900 flex items-center gap-1"
      >
        — হোম পেজে ফিরে যান
      </Link>
    </section>
  );
};

export default SignUpPage;
