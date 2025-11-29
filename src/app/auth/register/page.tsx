// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Lock, ArrowRight, ShieldAlert } from "lucide-react";

// export default function RegisterPage() {
//   return (
//     <div className="w-full max-w-md mx-auto">
//       <Card className="border-slate-800 bg-slate-950/50 backdrop-blur-sm shadow-2xl">
//         <CardHeader className="text-center space-y-2 pb-6">
//           <div className="mx-auto w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 ring-1 ring-indigo-500/30">
//             <Lock className="w-6 h-6 text-indigo-400" />
//           </div>
//           <CardTitle className="text-2xl font-bold text-white">
//             Access Restricted
//           </CardTitle>
//           <CardDescription className="text-slate-400 text-base">
//             EvaluateIX is currently in <span className="text-indigo-400 font-medium">Private Beta</span>.
//           </CardDescription>
//         </CardHeader>
        
//         <CardContent className="space-y-6">
//           <div className="rounded-lg bg-indigo-950/30 border border-indigo-500/20 p-4 flex gap-3 items-start">
//             <ShieldAlert className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
//             <p className="text-sm text-indigo-200/80 leading-relaxed">
//               To ensure the highest quality of service for our enterprise partners, 
//               public registration is currently paused. We are slowly rolling out 
//               access to new teams.
//             </p>
//           </div>

//           <div className="space-y-3">
//             <Button 
//               asChild 
//               className="w-full bg-white text-black hover:bg-slate-200 font-medium h-11"
//             >
//               <Link href="/contact" className="flex items-center justify-center gap-2">
//                 Request Early Access
//                 <ArrowRight className="w-4 h-4" />
//               </Link>
//             </Button>
            
//             <Button 
//               asChild 
//               variant="outline" 
//               className="w-full border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white h-11"
//             >
//               <Link href="/auth/login">
//                 I have an invite code
//               </Link>
//             </Button>
//           </div>

//           <div className="text-center pt-2">
//             <p className="text-xs text-slate-500">
//               Already have an account?{" "}
//               <Link href="/auth/login" className="text-indigo-400 hover:underline underline-offset-4">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

import React from "react";
import { AuthBranding } from "@/components/auth/auth-branding";
import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <div className="w-full min-h-screen flex font-sans bg-black">
      {/* Visual Side */}
      <AuthBranding />

      {/* Functional Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-24 relative animate-in fade-in slide-in-from-right-10 duration-500">
        <RegisterForm />
      </div>
    </div>
  );
}