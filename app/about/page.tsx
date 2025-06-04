"use client";

import { NavbarResize } from "@/components/navbar-resize";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <NavbarResize />
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">About SnapSnap</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We are dedicated to helping product managers and entrepreneurs efficiently validate their concepts and make data-driven decisions.
            </p>
          </div>
          
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                SnapSnap is dedicated to helping product managers and entrepreneurs efficiently validate their concepts. We understand the challenges of the product validation phase and provide tools to overcome common pitfalls.
              </p>
              <p className="text-lg">
                Our platform simplifies competitive research, market analysis, and user feedback collection, enabling teams to make data-driven decisions with confidence.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                SnapSnap was founded in 2023, born from our founding team's frustration with existing product validation tools. After experiencing these challenges firsthand, we set out to build a solution that truly meets the needs of product teams.
              </p>
              <p className="text-lg">
                Today, SnapSnap helps thousands of teams validate their ideas faster and with more confidence, reducing the risk of building products that don't meet market needs.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">Data-Driven Decisions: </span>We believe in letting market evidence guide product development.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">Efficiency: </span>We help teams do more with less, focusing resources on what truly matters.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">Transparency: </span>We provide clear insights without obscuring critical information.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">Continuous Improvement: </span>We constantly refine our tools based on user feedback.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <div className="text-center pt-8">
            <Button size="lg" className="rounded-full px-8">
              Learn About Our Products
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}