"use client";

import { contextApi } from "@/context/ContextApi";
import { usePasswordToggle } from "@/helper/usePasswordToggle";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FaGithub, FaLongArrowAltLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";

const SignInPage = () => {
  const contextValue = useContext(contextApi);
  if (!contextValue) {
    throw new Error("Something went wrong");
  }

  const { showPassword, togglePasswordVisibility } = usePasswordToggle();

  const router = useRouter();

  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("সাইন ইন সফল হয়েছে! 🎉!");
      router.push("/");
    }

    if (error) {
      toast.error("সাইন ইন করতে সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন!");
    }
  };

  return (
    <section className="min-h-70 bg-[#f7f9f8] flex flex-col items-center justify-center px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-[28px] font-bold text-[#1a1a1a]">সাইন ইন</h1>
        <p className="text-[14px] text-[#5d665f]">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      {/* Main Card Container */}
      <div className="w-full max-w-115 bg-white border border-[#e2e8f0] rounded-xl p-8 shadow-sm">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
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
              className="input validator w-full px-4 py-2 border border-[#e2e8f0] rounded-lg text-[14px] placeholder-[#a0aec0] focus:outline-none focus:border-green-600"
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

            <div className="relative flex items-center w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                minLength={8}
                maxLength={32}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="input validator w-full px-4  py-2 border border-[#e2e8f0] rounded-lg text-[14px] placeholder-[#a0aec0] focus:outline-none focus:border-green-600"
              />

              <button
                type="button"
                onClick={() => togglePasswordVisibility()}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <IoEye size={20} /> : <IoEyeOff size={20} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#008744] hover:bg-[#007038] text-white font-medium py-3 px-4 rounded-lg transition-colors text-[15px] mt-2"
          >
            সাইন ইন
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
              {/* Substitute with an actual SVG */}
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
            <span>অ্যাকাউন্ট নেই?</span>
            <Link
              href="/signup"
              className="text-green-600 mx-1 font-medium hover:underline"
            >
              সাইন আপ করুন
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

export default SignInPage;
