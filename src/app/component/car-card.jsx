"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, Users, Fuel, Settings, MessageCircle } from "lucide-react"
import autoo from "../Imgs/auto.png"

function CarCard() {
    const handleViewDetails = (id) => {
        console.log("View details for car:", id)
    }

    const handleWhatsApp = (carName) => {
        const phoneNumber = "201117110818"; // <-- put your WhatsApp number here (with country code, no +)
        const message = `Hello, I'm interested in renting the ${carName}. Can you provide more details?`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank"); // opens in new tab
    };
    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-8 px-4">
            {/* Section Heading */}
            <div className="text-center max-w-2xl">
                <h2 className="text-3xl font-bold text-gray-900">
                    Our Premium Fleet
                </h2>
                <p className="mt-2 text-gray-600 text-lg">
                    Choose from our wide selection of luxury vehicles,
                    from compact cars to spacious SUVs
                </p>
            </div>

            {/* Car Card */}
            <div className="bg-gradient-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:scale-105 overflow-hidden border border-border w-full max-w-sm">
                {/* Image with Badges */}
                <div className="relative overflow-hidden h-48">
                    <Image
                        src={autoo}
                        alt="Mercedes-Benz E-Class"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute top-4 left-4">
                        <Badge className="bg-background/90 text-foreground">Available</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-background/90 text-foreground border-border">
                            Sedan
                        </Badge>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Mercedes-Benz E-Class</h3>

                    <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-blue-900">
                            $599 <span className="text-sm text-muted-foreground font-normal">/day</span>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>5 seats</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Settings className="h-4 w-4" />
                            <span>Automatic</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Fuel className="h-4 w-4" />
                            <span>Petrol</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                        <Button className="flex-1 bg-blue-900" onClick={() => handleViewDetails("car-1")}>
                            <Car className="h-4 w-4 mr-2" /> View Details
                        </Button>
                        <Button
                            size="icon"
                            onClick={() => handleWhatsApp("Mercedes-Benz E-Class")}
                            className="shrink-0 bg-yellow-500"
                        >
                            <MessageCircle className="h-4 w-4" />
                        </Button>

                    </div>
                </div>
            </div>

            {/* View All Cars Button */}
            <Button asChild className="bg-blue-900 text-white px-6 py-2 rounded-lg">
                <Link href="/cars">View All Cars</Link>
            </Button>
            <br></br>
        </div>
    )
}

export default CarCard
