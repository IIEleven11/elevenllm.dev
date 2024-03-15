import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export const revalidate = 60;

export default async function ProjectsPage() {
  // Assuming allProjects is an array of project data you still want to display
const excludeSlugs = ["unkey", "coming soon", "another slug"];
const sorted = allProjects
  .filter((p) => p.published && !excludeSlugs.includes(p.slug))
  .sort(
    (a, b) =>
      new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
      new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
  );

  return (
    <div className="relative pb-16">
      <Navigation />
      {/* Your page content here, adjusted to not use Redis data */}
    </div>
  );
}