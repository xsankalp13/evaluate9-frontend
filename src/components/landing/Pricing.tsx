"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for testing the platform and small interviews.",
      price: "Free",
      period: "/ forever",
      features: [
        { name: "5 Candidates per month", included: true },
        { name: "1 Active Test", included: true },
        { name: "Basic AI Evaluation", included: true },
        { name: "Real-time Chat Interface", included: true },
        { name: "PDF Reports", included: false },
        { name: "Custom Branding", included: false },
        { name: "Early Access to New Features", included: false },
      ],
      cta: "Get Started",
      ctaLink: "/auth/register",
      popular: false,
    },
    {
      name: "Enterprise",
      description: "For scaling teams requiring robust reporting and volume.",
      price: "Custom",
      period: "",
      features: [
        { name: "Unlimited Candidates", included: true },
        { name: "Unlimited Active Tests", included: true },
        { name: "Advanced AI Insights", included: true },
        { name: "Real-time Chat Interface", included: true },
        { name: "Export Candidate Reports (PDF)", included: true },
        { name: "Dedicated Support", included: true },
        { name: "Early Access to New Features", included: true },
      ],
      cta: "Get a Quote",
      ctaLink: "mailto:sales@evaluateix.com",
      popular: true,
    },
  ];

  return (
    <section className="min-h-screen py-32 bg-black relative overflow-hidden flex flex-col justify-center">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container px-4 mx-auto z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Start for free to test our AI capabilities. Upgrade when you are ready
            to scale your hiring process.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className={`relative h-full flex flex-col border-slate-800 bg-slate-950/50 backdrop-blur-sm ${
                  plan.popular
                    ? "border-indigo-500/50 shadow-2xl shadow-indigo-500/10"
                    : "hover:border-slate-700 transition-colors"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                    RECOMMENDED
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                  <CardDescription className="text-slate-400">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4 flex items-baseline text-white">
                    <span className="text-4xl font-bold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-slate-400 text-sm font-medium">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature.name} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-indigo-400 shrink-0 mr-3" />
                        ) : (
                          <X className="h-5 w-5 text-slate-700 shrink-0 mr-3" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? "text-slate-300" : "text-slate-600"
                          }`}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                        : "bg-slate-800 hover:bg-slate-700 text-white"
                    }`}
                    size="lg"
                  >
                    <Link href={plan.ctaLink}>{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};