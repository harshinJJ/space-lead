import Link from "@/utils/CustomLink";
import React from "react";

export default function NotFound({ url="/" }) {
  return (
    <div className="min-h-screen [background-size:200%] md:[background-size:100%] bg-center text-center bg-gradient-to-br from-indigo  via-primary to-indigo flex flex-col items-center justify-center text-white  px-4">
      <h1 className="xs:text-[8rem] text-6xl font-azonix font-extrabold text-secondary drop-shadow-lg shadow-black tracking-widest leading-none select-none">
        404
      </h1>
      <div className="text-2xl md:text-3xl font-azonix font-bold mb-2 drop-shadow-sm">
        Page Not Found
      </div>
      <p className="text-white/80 max-w-xl text-xl mb-8 font-semibold">
        Whoops! You wandered off. <br />
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href={url}
        className="bg-secondary block hover:bg-tertiary hover:text-secondary transition-colors font-bold uppercase px-8 py-3 leading-[1] rounded-full font-gilroy-bold shadow-lg text-lg"
      >
        Go Home
      </Link>
      {/* <div className="mt-16 text-2xl font-black opacity-30 tracking-widest select-none">
        we<span className="text-primary">.</span>
      </div> */}
    </div>
  );
}
