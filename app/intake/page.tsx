'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import { Label } from "@/app/ui/label";
import { Input } from "@/app/ui/input";
import { Textarea } from "@/app/ui/textarea";
import { useRouter } from "next/navigation";
import { create } from "@/app/mailing";
import Particles from "../components/particles";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          <Link
            href="https://www.elevenllm.dev/"
            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
          >
            Home
          </Link>
          <Link
            href="https://www.elevenllm.dev/projects"
            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
          >
            Projects
          </Link>
          <Link
            href="https://www.elevenllm.dev/contact"
            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
          >
            Contact
          </Link>
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <h1 className="z-10 text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-codebold sm:text-5xl md:text-7xl xl:text-8xl whitespace-nowrap bg-clip-text">
        Client Intake
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-10 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          What do you want to create?
        </h2>
      </div>
      <section className="mt-3 w-full max-w-4xl mx-auto p-8 bg-transparent rounded-lg shadow-lg" id="client-intake">
        <div className="space-y-3">
        </div>
        <div className="mt-8 space-y-4 text-center">
          <h2 className="text-2xl font-codebold text-zinc-300">Services</h2>
          <ul className="text-zinc-400 list-disc grid grid-cols-2 gap-4 place-items-start">
            <li className="text-left">Custom AI/ML Solutions</li>
            <li className="text-left">Custom Chatbots</li>
            <li className="text-left">Data Ingestion/Storage - Talk to your data!</li>
            <li className="text-left">AI Voice Models, Text Models, Image Models</li>
            <li className="text-left">Machine Learning Model Development</li>
          </ul>
        </div>
        <div className="mt-16 space-y-4 text-center">
          <h2 id="client-intake-form" className="text-2xl font-bold text-zinc-300 font-codebold">Client Intake Form</h2>
          <form action={create} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name" className="text-zinc-300">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input className="input-transparent-black" id="first-name" name="first-name" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name" className="text-zinc-300">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input className="input-transparent-black" id="last-name" name="last-name" placeholder="Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-300">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  className="input-transparent-black"
                  id="email"
                  name="email"
                  placeholder="johndoe@example.com"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-zinc-300">
                  Phone
                </Label>
                <Input
                  className="input-transparent-black"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  type="tel"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deadline" className="text-zinc-300">
                  Deadline
                </Label>
                <Input
                  className="input-transparent-black"
                  id="deadline"
                  name="deadline"
                  placeholder="Select a deadline"
                  type="date"
                />
              </div>
            </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-zinc-300">
                  Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  className="input-transparent-black"
                  id="description"
                  name="description"
                  placeholder="What would you like to make?"
                  required
                />
              </div>
            <Button className="w-full bg-black bg-opacity-50 hover:bg-slate-800 text-zinc-300 transition-colors" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
