"use client";

import { useState } from "react";
import {
  Car,
  Users,
  Fuel,
  Settings,
  MessageCircle,
  ArrowLeft,
  Star,
  Shield,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";
import autoo from "../Imgs/auto.png";
import Image from "next/image";
export default function CarDetailsPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  // Sample car data - replace with actual data from your database/API
  const car = {
    id: 1,
    name: "Mercedes-Benz E-Class",
    price: 599,
    originalPrice: 699,
    images: [autoo, autoo, autoo, autoo],
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    available: true,
    rating: 4.8,
    reviews: 127,
    year: 2023,
    mileage: "12,500 km",
    location: "Downtown Cairo",
    description:
      "Experience luxury and comfort with our premium Mercedes-Benz E-Class. This elegant sedan combines sophisticated design with cutting-edge technology, making it perfect for business meetings, special occasions, or comfortable city driving.",
    features: [
      "Leather Interior",
      "GPS Navigation",
      "Bluetooth Connectivity",
      "Air Conditioning",
      "Power Windows",
      "ABS Brakes",
      "Airbags",
      "Cruise Control",
      "Sunroof",
      "Premium Sound System",
      "USB Charging Ports",
      "Keyless Entry",
    ],
    specifications: {
      Engine: "2.0L Turbo",
      Power: "255 HP",
      "Fuel Economy": "8.5L/100km",
      "Top Speed": "250 km/h",
      "0-100 km/h": "6.2 seconds",
      "Fuel Tank": "66 Liters",
    },
    policies: [
      "Minimum age: 25 years",
      "Valid driver's license required",
      "Security deposit: $500",
      "Free cancellation up to 24hrs",
      "Fuel: Return with same level",
      "Smoking not allowed",
    ],
  };

  const handleWhatsApp = (carName) => {
    const phoneNumber = "201017379236";
    const message = `Hello, I'm interested in renting the ${carName}. Can you provide more details?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleBookNow = () => {
    // Navigate to booking page or open booking modal
    console.log("Book now clicked for:", car.name);
  };

  const handleCall = () => {
    window.open("tel:+201017379236", "_self");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-blue-900 hover:text-blue-700 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Fleet</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl h-96 bg-gray-200">
              <Image
                src={car.images[selectedImage]}
                alt={car.name}
                className="w-full h-full object-cover"
              />
              {!car.available && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                    Currently Rented
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2 overflow-x-auto">
              {car.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-blue-900"
                      : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${car.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Car Information */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium">
                  {car.category}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    car.available
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {car.available ? "Available" : "Rented"}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {car.name}
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{car.rating}</span>
                  <span className="text-gray-500">({car.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{car.location}</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">{car.description}</p>
            </div>

            {/* Pricing */}
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-blue-900">
                  ${car.price}
                  <span className="text-lg font-normal text-gray-600">
                    /day
                  </span>
                </div>
                {car.originalPrice && (
                  <div className="text-lg text-gray-500 line-through">
                    ${car.originalPrice}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-900" />
                  <span>{car.seats} seats</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="h-4 w-4 text-blue-900" />
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Fuel className="h-4 w-4 text-blue-900" />
                  <span>{car.fuel}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleBookNow}
                  disabled={!car.available}
                  className="flex-1 bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Car className="h-5 w-5" />
                  {car.available ? "Book Now" : "Not Available"}
                </button>
                <button
                  onClick={() => handleWhatsApp(car.name)}
                  className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-3 gap-8 p-8">
            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-900" />
                Features
              </h3>
              <div className="space-y-2">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-900" />
                Specifications
              </h3>
              <div className="space-y-3">
                {Object.entries(car.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-600">{key}:</span>
                    <span className="font-medium text-gray-900">{value}</span>
                  </div>
                ))}
                <div className="flex justify-between">
                  <span className="text-gray-600">Year:</span>
                  <span className="font-medium text-gray-900">{car.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mileage:</span>
                  <span className="font-medium text-gray-900">
                    {car.mileage}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
