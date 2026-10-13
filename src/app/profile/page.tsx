"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsArrowReturnLeft } from "react-icons/bs";
import { toast } from "react-toastify";

const ProfileUpdatePage = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const [userName] = useState<string | undefined>();
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

  return (
    <section className=" max-w-lg lg:max-w-4xl mx-auto">
      <div className="bg-white my-12 min-h-40 rounded-xl shadow-sm border border-gray-200 hover:border hover:border-green-700 p-8 flex flex-col lg:flex-row items-center justify-between gap-8 transition-all ">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          <div className="w-22 h-22 lg:w-16 lg:h-16 rounded-xl overflow-hidden bg-gray-100  border border-gray-200">
            {user?.image ? (
              <Image
                src={user.image}
                alt={user?.name || "Profile"}
                width={18}
                height={18}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold bg-gray-200">
                {displayedName ? displayedName.charAt(0) : "U"}
              </div>
            )}
          </div>

          <div className="flex flex-col items-center lg:items-start justify-center">
            <span className="text-lg font-bold text-gray-800">
              {displayedName}
            </span>
            <span className="text-sm text-gray-400 font-normal">
              {user?.email}
            </span>
          </div>
        </div>

        <div className="sm:w-auto w-full flex flex-col lg:flex-row gap-4">
          <Link
            href={"/profile/update"}
            className="w-full lg:w-auto text-center"
          >
            <button className="w-full lg:w-auto btn btn-success bg-[#008744] hover:bg-green-800 text-white font-medium py-2 px-4 rounded-xl transition-colors">
              আপডেট প্রোফাইল
            </button>
          </Link>
          <button
            onClick={() => handleLogout()}
            className="flex items-center justify-center gap-2.5 py-2.5 px-4 text-[#fd0004] rounded-xl border border-[#ff0004] bg-white hover:bg-red-50 transition-all font-medium text-sm active:scale-[0.98]"
          >
            <BsArrowReturnLeft className="text-xs stroke-[0.5]" />
            <span>সাইন আউট</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileUpdatePage;
