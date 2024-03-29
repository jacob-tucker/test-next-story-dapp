"use client";
import "viem/window";
import Navbar from "../components/Navbar";
import Introduction from "@/components/sections/Introduction";
import RegisterIPA from "@/components/sections/RegisterIPA";
import { VerticalLine } from "@/components/atoms/VerticalLine";
import AttachTerms from "@/components/sections/AttachTerms";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Introduction />
      <RegisterIPA />
      <VerticalLine />
      <AttachTerms />
      <VerticalLine />
      <RegisterIPA />
      <VerticalLine />
    </main>
  );
}
