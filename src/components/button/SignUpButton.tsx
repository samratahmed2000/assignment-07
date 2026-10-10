"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUpButton = () => {
  const router = useRouter();

  const handleSignUp = () => {};
  return (
    <div className="flex flex-col lg:flex-row items-center gap-3 text-sm">
      <Link href={"/signup"}>
        <button>সাইন ইন</button>
      </Link>
      <Link href={"signup"}>
        <button className="btn btn-success bg-green-700/80 text-white">
          সাইন আপ
        </button>
      </Link>
    </div>
  );
};

export default SignUpButton;
