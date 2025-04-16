"use client";

import { NavbarResize } from "@/components/navbar-resize";

export default function About() {
  return (
    <div>
      <NavbarResize />
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About SnapSnap</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              SnapSnap is dedicated to helping product managers and entrepreneurs validate their concepts
              efficiently. We understand the challenges of the product validation stage and provide tools
              to overcome common pitfalls.
            </p>
            <p className="text-lg">
              Our platform streamlines competitive research, market analysis, and user feedback collection,
              enabling teams to make data-driven decisions with confidence.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg mb-4">
              Founded in 2023, SnapSnap emerged from our founding team's frustration with the existing
              product validation tools. After experiencing the challenges firsthand, we set out to build
              a solution that addresses the real needs of product teams.
            </p>
            <p className="text-lg">
              Today, SnapSnap helps thousands of teams validate their ideas faster and with greater confidence,
              reducing the risk of building products that don't meet market needs.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc pl-6 text-lg space-y-3">
              <li><strong>Data-Driven Decisions:</strong> We believe in letting market evidence guide product development.</li>
              <li><strong>Efficiency:</strong> We help teams do more with less, focusing resources on what truly matters.</li>
              <li><strong>Transparency:</strong> We provide clear insights without obscuring critical information.</li>
              <li><strong>Continuous Improvement:</strong> We constantly refine our tools based on user feedback.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 