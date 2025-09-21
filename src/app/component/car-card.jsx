"use client";

import { useState } from 'react';
import Image from "next/image";
import { Car, Users, Fuel, Settings, MessageCircle } from "lucide-react";
import autoo from "../Imgs/auto.png"; // Import your car image

function CarCard() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Sample car data - using your imported image
    const cars = [
        {
            id: 1,
            name: "Mercedes-Benz E-Class",
            price: 599,
            image: autoo,
            category: "Sedan",
            seats: 5,
            transmission: "Automatic",
            fuel: "Petrol",
            available: true
        },
        {
            id: 2,
            name: "BMW X5",
            price: 789,
            image: autoo,
            category: "SUV",
            seats: 7,
            transmission: "Automatic",
            fuel: "Petrol",
            available: true
        },
        {
            id: 3,
            name: "Toyota Camry",
            price: 399,
            image: autoo,
            category: "Sedan",
            seats: 5,
            transmission: "Automatic",
            fuel: "Hybrid",
            available: true
        },
        {
            id: 4,
            name: "Range Rover Sport",
            price: 999,
            image: autoo,
            category: "SUV",
            seats: 7,
            transmission: "Automatic",
            fuel: "Petrol",
            available: true
        },
        {
            id: 5,
            name: "Volkswagen Golf",
            price: 299,
            image: autoo,
            category: "Hatchback",
            seats: 5,
            transmission: "Manual",
            fuel: "Petrol",
            available: true
        }
    ];

    const categories = ['All', 'Sedan', 'SUV', 'Hatchback'];

    const handleViewDetails = (id) => {
        console.log("View details for car:", id);
    };

    const handleWhatsApp = (carName) => {
        const phoneNumber = "201117110818";
        const message = `Hello, I'm interested in renting the ${carName}. Can you provide more details?`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    // Filter cars based on selected category
    const filteredCars = cars.filter(car => {
        return selectedCategory === 'All' || car.category === selectedCategory;
    });

    // Get current car to display (first filtered car or first car if no filters match)
    const currentCar = filteredCars.length > 0 ? filteredCars[0] : cars[0];

    return (
        <div className="flex flex-col justify-center mt-8 items-center min-h-screen gap-8 px-4">
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

            {/* Type Filter Buttons */}
            <div className="w-full max-w-2xl mb-6">
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                selectedCategory === category
                                    ? 'bg-blue-900 text-white shadow-lg'
                                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-900 hover:text-blue-900'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                
                {/* Results Counter */}
                <div className="text-center mt-4 text-sm text-gray-600">
                    {filteredCars.length} available vehicle{filteredCars.length !== 1 ? 's' : ''}
                </div>
            </div>

            {/* Car Card */}
            {currentCar ? (
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-200 w-full max-w-sm">
                    {/* Image with Badges */}
                    <div className="relative overflow-hidden h-48">
                        <Image
                            src={currentCar.image}
                            alt={currentCar.name}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute top-4 left-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                currentCar.available 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-red-100 text-red-800'
                            }`}>
                                {currentCar.available ? 'Available' : 'Rented'}
                            </span>
                        </div>
                        <div className="absolute top-4 right-4">
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-700 border border-gray-200">
                                {currentCar.category}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{currentCar.name}</h3>

                        <div className="flex items-center justify-between mb-4">
                            <div className="text-2xl font-bold text-blue-900">
                                ${currentCar.price} <span className="text-sm text-gray-500 font-normal">/day</span>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                <span>{currentCar.seats} seats</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Settings className="h-4 w-4" />
                                <span>{currentCar.transmission}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Fuel className="h-4 w-4" />
                                <span>{currentCar.fuel}</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                            <button 
                                className="flex-1 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center gap-2"
                                onClick={() => handleViewDetails(currentCar.id)}
                            >
                                <Car className="h-4 w-4" /> View Details
                            </button>
                            <button
                                onClick={() => handleWhatsApp(currentCar.name)}
                                className="shrink-0 bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors duration-200"
                            >
                                <MessageCircle className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-12">
                    <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No cars found</h3>
                    <p className="text-gray-600">Try adjusting your filter criteria</p>
                </div>
            )}

            {/* Navigation for filtered results */}
            {filteredCars.length > 1 && (
                <div className="flex gap-2">
                    {filteredCars.map((car, index) => (
                        <div
                            key={car.id}
                            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-200 ${
                                car.id === currentCar.id ? 'bg-blue-900' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            )}

            {/* View All Cars Button */}
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200">
                View All Cars
            </button>
            <br />
        </div>
    );
}

export default CarCard;