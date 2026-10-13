"use client";

import { updateUser, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [userName, setUserName] = useState<string | undefined>();
  const displayedName = userName ?? user?.name ?? "";

  const handleUpdate = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await updateUser({
        name: displayedName,
      });

      toast.success("প্রোফাইল সফলভাবে আপডেট করা হয়েছে!", {});
    } catch (error) {
      console.error(error);
      toast.error("আপডেট করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।", {});
    }
  };

  return (
    <section className="min-h-screen bg-[#F4F6F6] py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased text-[#1A1A1A]">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            আমার প্রোফাইল
          </h2>
          <p className="text-sm text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">তথ্য</h3>

          <form onSubmit={handleUpdate} className="space-y-5">
            <div className="form-control w-full">
              <label className="label cp-0 mb-2" htmlFor="name">
                <span className="label-text font-bold text-gray-700 text-sm">
                  নাম
                </span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={displayedName}
                onChange={(e) => setUserName(e.target.value)}
                className="input input-bordered w-full h-12 bg-white border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                placeholder="আপনার নাম লিখুন"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 btn btn-success bg-[#00875A] text-white font-semibold rounded-lg hover:bg-[#00754e] transition-all flex items-center justify-center text-base shadow-sm active:scale-[0.99]"
            >
              আপডেট
            </button>
          </form>

          <Link href={"/profile"}>
            <button className="w-full  btn  bg-white border-[#ff0004] font-bold py-2 px-4 rounded-xl">
              প্রোফাইল
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
