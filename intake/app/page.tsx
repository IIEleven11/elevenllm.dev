'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "../../app/ui/button";
import { Label } from "../../app/ui/label";
import { Input } from "../../app/ui/input";
import { Textarea } from "../../app/ui/textarea";
import { useRouter } from "next/navigation";
import { create } from "../../app/mailing";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-[#111827] pb-5 min-h-screen flex flex-col items-center justify-center text-white">
      <nav className="w-full py-5 px-10 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-xl">elevenllm</span>
        </div>
        <div className="flex items-center space-x-6">
          <Link className="hover:text-gray-300 transition-colors" href="#">
            Home
          </Link>
          <Button onClick={() => router.push('#client-intake-form')} className="bg-yellow-500 hover:bg-yellow-600 text-black transition-colors">Order</Button>
        </div>
      </nav>
      <header className="flex flex-col items-center justify-center text-center space-y-8">
        <h1 className="text-6xl font-bold leading-none">Jake Mottola</h1>
        <p className="text-3xl font-semibold">AI/ML Engineer & Developer</p>
      </header>
      <section className="mt-10 w-full max-w-4xl mx-auto p-8 bg-[#1F2937] rounded-lg shadow-lg" id="client-intake">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="text-gray-400">
            I am a freelance AI/ML Engineer and Developer with a passion for building intelligent systems. With a
            background in computer science, I leverage a unique perspective to solve complex problems.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Services</h2>
          <ul className="text-gray-400 list-disc pl-6">
            <li>Custom AI Solutions</li>
            <li>Data Analysis and Visualization</li>
            <li>Machine Learning Model Development</li>
          </ul>
        </div>
        <div className="mt-8 space-y-4">
          <h2 id="client-intake-form" className="text-2xl font-bold">Client Intake Form</h2>
          <form action={create} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input className="bg-gray-100 text-gray-300" id="first-name" name="first-name" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input className="bg-gray-100 text-gray-300" id="last-name" name="last-name" placeholder="Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  className="bg-gray-100 text-gray-300"
                  id="email"
                  name="email"
                  placeholder="johndoe@example.com"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone <span className="text-red-500">*</span>
                </Label>
                <Input
                  className="bg-gray-100 text-gray-300"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                  type="tel"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deadline">
                  Deadline <span className="text-red-500">*</span>
                </Label>
                <Input
                  className="bg-gray-100 text-gray-300"
                  id="deadline"
                  name="deadline"
                  placeholder="Select a deadline"
                  required
                  type="date"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">
                  Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  className="bg-gray-100 text-gray-300"
                  id="description"
                  name="description"
                  placeholder="Enter a description"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="references">References</label>
                <Textarea className="bg-gray-100 text-gray-300" id="references" name="references" placeholder="Enter any references" />
              </div>
            </div>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black transition-colors" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
