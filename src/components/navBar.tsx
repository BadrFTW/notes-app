"use client";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
    const { isSignedIn } = useUser();

    return (
        <nav className="border-b h-[8vh] flex items-center  w-full justify-evenly mx-10">
            <div className="container flex items-center justify-between ">
                <Link href="/">
                    <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#57ebde] to-[#aefb2a] ">TO DO APP</h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-5">
                {isSignedIn ? (
                    <>

                            <SignOutButton className={"cursor-pointer border py-1 px-2 rounded-full bg-gray-200 border-gray-500"}  />


                        <UserButton  />
                    </>
                ) : (
                    <div className="flex items-center gap-x-5">
                        <Link href="/sign-in">
                            <button className="w-[100px] text-black bg-gray-200 p-2 rounded-md text-center">
                                Sign in
                            </button>
                        </Link>
                        <Link href="/sign-up">
                            <button className="w-[100px] text-black bg-gray-200 p-2 rounded-md text-center">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;