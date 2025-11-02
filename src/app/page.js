'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Shield,
  Building2,
  FileText,
  FileSignature,
  TrendingUp,
  UserIcon,
  ComputerIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import Image from "next/image";
import LightRays from "@/components/LightRays";
import Link from "next/link";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black flex flex-col overflow-x-auto scro">
        <div className="fixed w-full z-1 h-full">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1.5}
            fadeDistance={2}
            lightSpread={2}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>

        <div className="flex flex-col z-2 items-center justify-start w-full text-white">
          {/* HEADER */}
          <header
            className={`relative mt-6 flex items-center justify-between rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_8px_rgba(255,255,255,0.3),inset_0_-1px_6px_rgba(0,0,0,0.2)]  hover:border-white/30 hover:scale-[1.03] text-white overflow-hidden px-6 py-4 transition-transform duration-500 mx-6 md:w-[750px] w-80 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <ComputerIcon/>
                </div>
                <span className="text-2xl font-semibold font">DevOps Demo</span>
              </div>
            </div>
          </header>

          {/* MAIN CONTENT */}
          <main className="max-w-6xl mx-auto px-6 py-16 w-full">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-4 opacity-0 scale-95"
              }`}
            >
              <ScrollFadeIn>
                <section className="text-center mb-20">
                  <h1 className="text-5xl font-bold mb-6">
                    CI/CD. Docker. Cloud Deployment.
                  </h1>
                  <p className="text-lg text-zinc-200 max-w-2xl mx-auto mb-8">
                    A minimal Next.js frontend project to demonstrate a complete
                    DevOps pipeline — from Dockerization to continuous
                    deployment using GitHub Actions and Jenkins.
                  </p>
                  <Link href="https://github.com/ctrl-nikunj/devops-proj">
                    <Button
                      className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 text-lg"
                    >
                      View on GitHub
                    </Button>
                  </Link>
                </section>
              </ScrollFadeIn>

              {/* FEATURES */}
              <section className="grid md:grid-cols-3 gap-8 mb-20">
                {[
                  {
                    icon: <Building2 className="w-6 h-6 text-white" />,
                    title: "Next.js Frontend",
                    desc: "A simple, responsive UI to showcase modern frontend workflows.",
                  },
                  {
                    icon: <FileSignature className="w-6 h-6 text-white" />,
                    title: "Docker Integration",
                    desc: "Containerized build setup for consistent development and testing.",
                  },
                  {
                    icon: <Shield className="w-6 h-6 text-white" />,
                    title: "Automated Testing",
                    desc: "Unit and lint checks triggered on every commit or PR.",
                  },
                  {
                    icon: <FileText className="w-6 h-6 text-white" />,
                    title: "Jenkins Pipeline",
                    desc: "End-to-end CI/CD pipeline configured with multi-stage builds.",
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6 text-white" />,
                    title: "GitHub Actions",
                    desc: "Workflow automation for testing, building, and deploying to Vercel.",
                  },
                  {
                    icon: <BarChart3 className="w-6 h-6 text-white" />,
                    title: "Vercel Deployment",
                    desc: "Zero-downtime production deployments powered by Vercel.",
                  },
                ].map((f, idx) => (
                  <ScrollFadeIn key={idx}>
                    <Card className="relative h-[250px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[inset_0_1px_8px_rgba(255,255,255,0.3),inset_0_-1px_6px_rgba(0,0,0,0.2)] hover:border-white/30 hover:scale-[1.03] transition-transform duration-300 text-white overflow-hidden">
                      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-linear-to-tr from-white/20 via-transparent to-white/5 opacity-70" />
                      <CardContent className="relative my-6 px-4 text-center">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-4 shadow-inner">
                          {f.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {f.title}
                        </h3>
                        <p className="text-zinc-100 text-sm">{f.desc}</p>
                      </CardContent>
                    </Card>
                  </ScrollFadeIn>
                ))}
              </section>

              {/* PIPELINE DEMO SECTION */}
              <ScrollFadeIn>
                <section className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[inset_0_1px_8px_rgba(255,255,255,0.3),inset_0_-1px_6px_rgba(0,0,0,0.2)] hover:border-white/30 hover:scale-[1.03] transition-transform duration-300 text-white overflow-hidden p-8 mb-20">
                  <div className="absolute inset-0 rounded-2xl pointer-events-none bg-linear-to-tr from-white/20 via-transparent to-white/5 opacity-70" />
                  <h2 className="text-2xl font-semibold mb-6 text-center">
                    DevOps Pipeline Snapshot
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
                    {[
                      { label: "Docker Build Time", value: "42s" },
                      { label: "CI Test Duration", value: "1m 10s" },
                      { label: "Deployment Time", value: "15s" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-white/10 border border-white/20 rounded-lg p-6"
                      >
                        <div className="text-xl font-bold mb-1">
                          {item.value}
                        </div>
                        <div className="text-sm text-zinc-200">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 bg-white/10 rounded-lg p-4 border border-white/20">
                    <div className="flex justify-between mb-3">
                      <span className="text-sm font-medium">
                        Recent Workflow Runs
                      </span>
                      <span className="text-xs text-zinc-300">Last 5 Builds</span>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Build #27 - GitHub Actions</span>
                        <span className="font-medium text-green-400">Passed</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Build #26 - Jenkins CI</span>
                        <span className="font-medium text-green-400">Passed</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Build #25 - Docker Lint</span>
                        <span className="font-medium text-yellow-400">Warning</span>
                      </div>
                    </div>
                  </div>
                </section>
              </ScrollFadeIn>

              {/* CTA SECTION */}
              <ScrollFadeIn>
                <section className="text-center mb-16 text-white">
                  <h2 className="text-3xl font-semibold mb-4">
                    Learn, Build, Automate
                  </h2>
                  <p className="text-zinc-200 text-lg max-w-2xl mx-auto mb-8">
                    This project demonstrates a practical DevOps workflow — a
                    fully automated pipeline using Docker, GitHub Actions,
                    Jenkins, and Vercel. Ideal for students, developers, and
                    DevOps beginners.
                  </p>
                  <Button
                    onClick={() => router.push("/docs")}
                    className="bg-white/20 hover:bg-white/30 text-white text-md px-8 py-3"
                  >
                    Explore Documentation
                  </Button>
                </section>
              </ScrollFadeIn>
            </div>
          </main>

          {/* FOOTER */}
          <footer className="backdrop-blur-xl bg-white/10 border-t border-white/20 text-zinc-200 w-full">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center text-sm">
              <div className="flex items-center gap-1 mb-4 sm:mb-0">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <Image
                    src="/Logo-White.png"
                    alt="Logo"
                    width={160}
                    height={50}
                  />
                </div>
                <span>DevOps Demo © 2025</span>
              </div>
              <div>Built with Next.js · Docker · GitHub Actions · Jenkins · Vercel</div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
