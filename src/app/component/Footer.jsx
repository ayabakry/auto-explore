import Link from "next/link";
import { Car, Menu, X, User, Settings } from "lucide-react";

function Footer (){
    return(
        

<footer className="bg-blue-900   ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
             <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                                    <div className="bg-gradient-primary p-2 rounded-lg">
                                        <Car className="h-6 w-6 text-white" />
                                    </div>
                                    <span className="text-xl font-bold text-white">Explore Auto</span>
                                </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
                <li>
                    <Link href="#" className="me-4 md:me-6">About</Link>
                </li>
                <li>
                    <Link href="#" className="me-4 md:me-6">Contact</Link>
                </li>
                <li>
                    <Link href="#" className="me-4 md:me-6">Privacy Policy</Link>
                </li>
                
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">explore-auto</a>. All Rights Reserved.</span>
    </div>
</footer>


    );
}
export default Footer