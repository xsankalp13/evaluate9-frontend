"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, ShieldCheck, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AboutUs = () => {
  const stats = [
    { label: "Interviews Conducted", value: "10k+" },
    { label: "Hours Saved", value: "500+" },
    { label: "Accuracy Rate", value: "98%" },
  ];

  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
      title: "Unbiased Fairness",
      description: "We believe talent should be judged solely on ability. Our AI strips away unconscious bias from the hiring process."
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: "Radical Efficiency",
      description: "Recruiting shouldn't take months. We automate the repetitive screening layer so humans can focus on the final decision."
    },
    {
      icon: <Code2 className="w-6 h-6 text-pink-400" />,
      title: "Built by Engineers",
      description: "We know the pain of technical interviews. We built EvaluateIX to be the tool we wished we had."
    }
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 bg-black overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 z-10">
        
        {/* HEADER SECTION */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
          >
            We are democratizing <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
              Technical Assessment
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed"
          >
            EvaluateIX was born from a simple observation: The best engineers are often missed because traditional hiring is manual, biased, and slow. We are using RAG-powered AI to change that.
          </motion.p>
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 border-y border-white/10 py-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* MISSION & VALUES GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left: The Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <div className="prose prose-invert text-slate-400 space-y-4">
              <p>
                In min 2025, we realized that while software development had evolved with AI, 
                hiring for it remained stuck in the past. Resumes are poor proxies for skill, 
                and manual screening burns countless engineering hours.
              </p>
              <p>
                We built EvaluateIX to solve the <strong>"False Negative"</strong> problem. 
                Our platform doesn't just check syntax; it evaluates problem-solving approaches, 
                system design thinking, and code efficiency—just like a senior engineer would.
              </p>
              <p>
                Today, we are helping companies scale their teams with confidence, ensuring 
                that every candidate gets a fair, standardized, and deep technical review.
              </p>
            </div>
            
            {/* Tech Stack Callout */}
            <div className="mt-8 p-6 bg-slate-900/50 rounded-xl border border-white/10">
              <h3 className="text-white font-semibold flex items-center gap-2 mb-3">
                <Cpu className="w-5 h-5 text-indigo-400" />
                Powered by Hybrid Architecture
              </h3>
              <p className="text-sm text-slate-400">
                We practice what we preach. Our platform runs on a high-performance 
                Node.js real-time engine coupled with a secure Spring Boot core, 
                handling thousands of concurrent socket connections for seamless proctoring.
              </p>
            </div>
          </motion.div>

          {/* Right: The Values Cards */}
          <div className="space-y-6">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-slate-950 border-slate-800 hover:border-indigo-500/50 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="mb-4 inline-block p-3 rounded-lg bg-slate-900">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};