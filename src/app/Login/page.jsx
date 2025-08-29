"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Car, Mail, Lock } from "lucide-react";
import ImageLogin from "@/app/Imgs/carLogin.jpg";

function Login  () {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, rememberMe });
  };

  return (
    <>
     <div className="min-h-screen bg-gradient-to-br from-automotive-blue via-automotive-blue-light to-automotive-blue">
      <div className="min-h-screen flex">
        {/* Hero Section */}
        <div className="flex-1 relative overflow-hidden hidden lg:block">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${ImageLogin.src})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220deg_75%_25%_/_90%)] via-[hsl(220deg_75%_25%_/_70%)] to-transparent" />
          <div className="relative h-full flex flex-col justify-center px-12 xl:px-16">
            <div className="max-w-lg">
              <h1 className="text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
                Premium Car Rental
                <span className="block text-yellow-500">Experience</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Access luxury vehicles, seamless booking, and exceptional service. 
                Your journey begins with the perfect ride.
              </p>
              
            </div>
          </div>
        </div>

        {/* Login Section */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-12 bg-white/95 backdrop-blur-sm">
          <div className="w-full max-w-md">
          <Card className="w-full max-w-md shadow-[var(--shadow-automotive)] border-automotive-gray-light/20">
      <CardHeader className="space-y-4 text-center">
                    <div className="bg-blue-900 p-3 mt-6 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
          <Car className="h-6 w-6 text-white bg-blue-900" />
        </div>
        <div>
          <CardTitle className="text-2xl font-bold text-blue-900">Welcome Back</CardTitle>
          <CardDescription className="text-automotive-gray">
            Sign in to access your car rental account
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-blue-900  font-medium">
              Email Address
            </Label>
            <div className="relative mt-4">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-automotive-gray" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 border-automotive-gray-light focus:border-automotive-gold focus:ring-automotive-gold/20"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-blue-900 font-medium">
              Password
            </Label>
            <div className="relative mt-4" >
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-automotive-gray" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10 border-automotive-gray-light focus:border-automotive-gold focus:ring-automotive-gold/20"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-automotive-gray hover:text-automotive-blue transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

   

          <Button
            type="submit"
            className="w-full bg-yellow-500   text-white font-semibold py-3   transition-all duration-300"
          >
            Sign In
          </Button>

          <div className="text-center mb-6">
            <p className="text-sm text-automotive-gray">
              Don't have an account?
              <button
                type="button"
                className="text-yellow-500 ml-2 transition-colors font-medium"
              >
                Sign up here
              </button>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
          </div>
        </div>
      </div>

      {/* Mobile Hero Header - Only visible on mobile */}
      <div className="lg:hidden absolute top-0 left-0 right-0 z-10">
        <div 
          className="h-40 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${ImageLogin.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-automotive-blue/80 to-automotive-blue/60" />
          <div className="relative h-full flex items-center justify-center">
            <h1 className="text-2xl font-bold text-white text-center">
              Premium Car Rental
              <span className="block text-yellow-500 text-lg">Experience</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
 
    </>
  );
};
export default Login
