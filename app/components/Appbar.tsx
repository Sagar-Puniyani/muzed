"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export function Appbar() {
  const session = useSession();

  return (
    <div className="flex justify-between px-20 pt-4">
      <div className="text-lg font-bold flex flex-col justify-center text-black">
        Muzer
      </div>
      <div>
        {session.data?.user && (
          <button
            type="button"
            className="bg-orange-500 text-white hover:bg-orange-700 py-2 rounded-md px-5"
            onClick={() => signOut()}
          >
            Logout
          </button>
        )}
        {!session.data?.user && (
          <button
            type="button"
            className="bg-orange-500 text-white hover:bg-organge-700 px-5 py-2 rounded-md"
            onClick={() => signIn()}
          >
            Signin
          </button>
        )}
      </div>
    </div>
  );
}
