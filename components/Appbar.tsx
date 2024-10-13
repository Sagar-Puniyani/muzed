"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";

export function Appbar() {
  const { data: session } = useSession();
  const isAuthenticated = Boolean(session?.user);

  return (
      <div>
        {isAuthenticated ? (
          <Button
            type="button"
            className="py-2 bg-orange-500 px-4 text-lg text-white rounded hover:bg-orange-700 "
            onClick={() => signOut()}
          >
            Logout
          </Button>
        ) : (
          <Button
            type="button"
            className=" py-2 bg-orange-500 px-4 text-lg text-white rounded hover:bg-orange-700 cursor-pointer"
            onClick={() => signIn()}
          >
            LogIn
          </Button>
        )}
      </div>
  );
}
