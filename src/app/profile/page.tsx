"use client";

import { signOut, updateUser, useSession } from "@/lib/auth-client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsArrowReturnLeft } from "react-icons/bs";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const [userName, setUserName] = useState<string | undefined>();
  const displayedName = userName ?? user?.name ?? "";

  const handleLogout = async () => {
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("সফলভাবে সাইন আউট হয়েছে!");
            router.push("/signin");
          },
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("সাইন আউট করতে সমস্যা হয়েছে।");
    }
  };

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

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
              {user?.image ? (
                <Image
                  src={user.image}
                  alt={user?.name || "Profile"}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold bg-gray-200">
                  {displayedName ? displayedName.charAt(0) : "U"}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-800">
                {displayedName || "Rezwan Ahmed"}
              </span>
              <span className="text-sm text-gray-400 font-normal">
                {user?.email || "rezwanahmed@gmail.com"}
              </span>
            </div>
          </div>

          <div className="sm:w-auto w-full">
            <button
              onClick={() => handleLogout()}
              className="flex items-center justify-center gap-2.5 py-2.5 px-4 text-[#D9383A] rounded-xl border border-[#FCD4D5] bg-white hover:bg-red-50 transition-all font-medium text-sm active:scale-[0.98]"
            >
              <BsArrowReturnLeft className="text-xs stroke-[0.5]" />
              <span>সাইন আউট</span>
            </button>
          </div>
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
              className="w-full h-12 bg-[#00875A] text-white font-semibold rounded-lg hover:bg-[#00754e] transition-all flex items-center justify-center text-base shadow-sm active:scale-[0.99]"
            >
              আপডেট
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
