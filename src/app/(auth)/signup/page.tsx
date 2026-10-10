"use client";

import { signUp } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub, FaLongArrowAltLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { data, error } = await signUp.email({
      ...user,
      callbackURL: "/signin",
    });

    if (data) {
      console.log(data);
      router.push("/signin");
    }

    if (error) {
      console.log(error);
    }
  };

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
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
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
              name="name"
              required
              minLength={3}
              maxLength={32}
              placeholder="যেমন: সম্রাট আহমেদ"
              className="input validator w-full px-4 py-2.5 border border-[#e2e8f0] rounded-lg text-[14px] placeholder-[#a0aec0] focus:outline-none focus:border-green-600"
            />
            <span className="validator-hint">Must be 3 characters</span>
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
              name="email"
              required
              placeholder="ahmed@mail.com"
              className="input validator w-full px-4 py-2.5 border border-[#e2e8f0] rounded-lg text-[14px] placeholder-[#a0aec0] focus:outline-none focus:border-green-600"
            />
            <div className="validator-hint">Enter valid email address</div>
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
              name="password"
              required
              minLength={8}
              maxLength={32}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              placeholder="কমপক্ষে ৮ অক্ষর"
              className="input validator w-full px-4 py-2.5 border border-[#e2e8f0] rounded-lg text-[14px] placeholder-[#a0aec0] focus:outline-none focus:border-green-600"
            />
            <span className="validator-hint">
              8 Characters, 1 Number, 1 Lowercase, 1 Uppercase
            </span>
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
              name="confirm-password"
              required
              minLength={8}
              maxLength={32}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              placeholder="আবার লিখুন"
              className="input validator w-full px-4 py-2.5 border border-[#e2e8f0] rounded-lg text-[14px] placeholder-[#a0aec0] focus:outline-none focus:border-green-600"
            />
            <span className="validator-hint">
              8 Characters, 1 Number, 1 Lowercase, 1 Uppercase
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#008744] hover:bg-[#007038] text-white font-medium py-3 px-4 rounded-lg transition-colors text-[15px] mt-2"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>

          {/* Divider */}
          <div className="relative flex py-1 items-center">
            <div className="grow border-t border-[#e2e8f0]"></div>
            <span className="shrink mx-4 text-[#718096] text-[12px]">অথবা</span>
            <div className="grow border-t border-[#e2e8f0]"></div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 border border-[#e2e8f0] rounded-lg py-2.5 text-[14px] font-medium text-[#4a5568]  transition-colors hover:bg-white hover:border hover:border-[#008744]"
            >
              {/* Substitute with an actual SVG if icons are needed */}
              <span className="text-red-500 font-bold">
                <FcGoogle />
              </span>
              <span>Google দিয়ে চালিয়ে যান</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 border border-[#e2e8f0] rounded-lg py-2.5 text-[14px] font-medium text-[#4a5568] transition-colors hover:bg-white hover:border hover:border-[#008744]"
            >
              <span className="text-black font-bold">
                <FaGithub />
              </span>
              <span>GitHub দিয়ে চালিয়ে যান</span>
            </button>
          </div>

          {/* Sign In Link */}
          <div className="text-center text-[14px] text-[#4a5568] mt-4">
            <span>অ্যাকাউন্ট আছে?</span>
            <Link
              href="/signin"
              className="text-green-600 mx-1 font-medium hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </div>
        </form>
      </div>

      {/* Back to Home Link */}
      <Link
        href="/"
        className="mt-6 text-[14px] text-[#718096] hover:text-green-800 flex items-center gap-1"
      >
        <div>
          <span>
            <FaLongArrowAltLeft />
          </span>
        </div>
        <span>হোম পেজে ফিরে যান</span>
      </Link>
    </section>
  );
};

export default SignUpPage;
