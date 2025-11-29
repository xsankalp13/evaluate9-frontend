"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Message sent successfully!");
    setLoading(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-indigo-400" />,
      title: "Email",
      details: "hello@evaluateix.com",
      description: "Sales & inquiries",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-purple-400" />,
      title: "Chat",
      details: "Mon-Fri, 9am - 5pm",
      description: "Technical support",
    },
    {
      icon: <MapPin className="w-5 h-5 text-pink-400" />,
      title: "Office",
      details: "Remote, IN",
      description: "",
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 bg-black relative overflow-hidden flex items-center justify-center">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center h-full"
          >
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's talk <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                    hiring.
                </span>
                </h1>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md">
                Have questions about our AI metrics or need a custom enterprise quote? 
                Our engineering team is ready to help.
                </p>
            </div>

            {/* Compact Cards Grid */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="group flex items-center gap-4 p-3 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:bg-slate-800/60 hover:border-indigo-500/30 transition-all duration-300">
                    <div className="shrink-0 p-2 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-indigo-500/50 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2">
                         <span className="text-indigo-300 text-xs font-medium">
                            {item.details}
                         </span>
                         <span className="text-slate-600 text-[10px] hidden sm:inline-block">
                             • {item.description}
                         </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name" className="text-xs text-slate-400 uppercase tracking-wider">First name</Label>
                  <Input 
                    id="first-name" 
                    placeholder="Jane" 
                    className="bg-slate-950 border-slate-800 text-white h-10 text-sm focus:border-indigo-500"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name" className="text-xs text-slate-400 uppercase tracking-wider">Last name</Label>
                  <Input 
                    id="last-name" 
                    placeholder="Doe" 
                    className="bg-slate-950 border-slate-800 text-white h-10 text-sm focus:border-indigo-500"
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs text-slate-400 uppercase tracking-wider">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="jane@company.com" 
                  className="bg-slate-950 border-slate-800 text-white h-10 text-sm focus:border-indigo-500"
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-xs text-slate-400 uppercase tracking-wider">Subject</Label>
                <Select>
                  <SelectTrigger className="bg-slate-950 border-slate-800 text-white h-10 text-sm focus:border-indigo-500">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-950 border-slate-800 text-white">
                    <SelectItem value="sales">Sales & Enterprise</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="demo">Request a Demo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs text-slate-400 uppercase tracking-wider">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="How can we help?" 
                  className="min-h-[120px] bg-slate-950 border-slate-800 text-white text-sm focus:border-indigo-500 resize-none"
                  required 
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium h-10"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};