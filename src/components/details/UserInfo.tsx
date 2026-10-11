"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowReturnLeft } from "react-icons/bs";
import { FaCaretDown, FaUser } from "react-icons/fa";

const UserInfo = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div>
      {user ? (
        <div className="dropdown dropdown-hover dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer select-none"
          >
            {user?.image ? (
              <Image
                src={user.image}
                alt={user.name || "User"}
                width={32}
                height={32}
                className="rounded-full object-cover border border-gray-200"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </div>
            )}
            <span className="text-sm font-medium text-gray-700 hidden sm:inline">
              {user?.name?.split(" ")[0]}
            </span>
            <FaCaretDown className="text-gray-400 text-xs" />
          </div>

          <div
            tabIndex={0}
            className="dropdown-content z-999 card card-compact w-64 p-2 shadow-xl bg-white border border-gray-100 mt-1"
          >
            <div className="card-body gap-0.5 p-3">
              <h4 className="font-semibold text-gray-800 text-sm">
                {user?.name || "ইউজার"}
              </h4>
              <p className="text-xs text-gray-400 break-all">
                {user?.email || "email@example.com"}
              </p>

              <hr className="border-gray-100 my-2" />

              <ul className="menu menu-sm p-0 gap-1">
                <li>
                  <Link
                    href="/profile"
                    className="flex items-center gap-2.5 py-2 px-3 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors active:bg-gray-100"
                  >
                    <FaUser className="text-blue-500 text-xs" />
                    <span className="text-sm">আমার প্রোফাইল</span>
                  </Link>
                </li>

                <li>
                  <button
                    onClick={() => handleLogout()}
                    className="w-full flex items-center gap-2.5 py-2 px-3 text-red-500 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors active:bg-red-100"
                  >
                    <BsArrowReturnLeft className="text-xs" />
                    <span className="text-sm font-medium">সাইন আউট</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row items-center gap-3 w-full lg:w-auto justify-center border-t border-gray-100 lg:border-none pt-3 lg:pt-0">
          <Link href={"/signin"} className="w-full lg:w-auto text-center">
            <button className="w-full lg:w-auto py-2 px-4 hover:bg-gray-50 rounded-md">
              সাইন ইন
            </button>
          </Link>
          <Link href={"/signup"} className="w-full lg:w-auto text-center">
            <button className="w-full lg:w-auto btn btn-success bg-[#008744] hover:bg-green-800 text-white font-medium py-2 px-4 rounded-xl transition-colors">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
