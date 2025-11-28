"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ShieldAlert, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// 1. Isolate the component that uses useSearchParams
function TerminatedContent() {
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason") || "Policy Violation";

  return (
    <div className="max-w-md w-full text-center space-y-6 animate-in fade-in zoom-in duration-300">
        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto ring-1 ring-red-500/30">
            <ShieldAlert className="w-10 h-10 text-red-500" />
        </div>
        
        <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">Session Terminated</h1>
            <p className="text-red-400 font-medium">{reason}</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg text-sm text-zinc-400">
            <p>Our proctoring system detected multiple violations of the assessment integrity policy.</p>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-500">
                <Lock className="w-3 h-3" />
                <span>Logs have been sent to the administrator.</span>
            </div>
        </div>

        <Button asChild variant="outline" className="w-full border-zinc-800 text-zinc-400 hover:text-white">
            <Link href="/">Return Home</Link>
        </Button>
    </div>
  );
}

// 2. Wrap it in Suspense in the Page Component
export default function ExamTerminated() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Suspense fallback={
          <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-8 h-8 text-red-500 animate-spin" />
              <p className="text-zinc-500 text-sm">Processing session termination...</p>
          </div>
      }>
        <TerminatedContent />
      </Suspense>
    </div>
  );
}