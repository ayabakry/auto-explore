"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Car, Menu, X, User, Settings } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
            <div className="container mx-auto px-4 lg:px-20">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                        <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-2 rounded-lg flex items-center justify-center">
                            <Car className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-blue-900">Explore Auto</span>
                    </Link>


                    <nav className="hidden md:flex items-center space-x-8">

                        <Link href="/about" className="text-muted-foreground hover:text-blue-900 transition-colors">
                            About
                        </Link>
                        <Link href="/contact-us" className="text-muted-foreground hover:text-blue-900 transition-colors">
                            Contact
                        </Link>
                        <Link href="/" className="text-muted-foreground hover:text-blue-900 transition-colors">
                            Privacy Policy
                        </Link>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" className="hover:bg-yellow-500 hover:text-white" size="lg">
                            <User className="h-4 w-4 mr-2 " />
                            Login
                        </Button>
                        <Button variant="default" size="lg" className="bg-blue-900 text-white ">
                            Sign Up
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
                        <nav className="py-4 space-y-2">

                            <Link
                                href="/about"
                                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                                onClick={toggleMenu}
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                                onClick={toggleMenu}
                            >
                                Contact
                            </Link>
                            <Link
                                href="/"
                                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                                onClick={toggleMenu}
                            >
                                Privacy Policy
                            </Link>
                            <div className="pt-4 space-y-2 border-t border-border">
                                <Button variant="ghost" size="sm">
                                    <User className="h-4 w-4 mr-2" />
                                    Login
                                </Button>
                                <Button variant="default" size="sm" className="bg-blue-900 text-white ">
                                    Sign Up
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;