import {
  Car,
  Shield,
  Clock,
  Users,
  Star,
  Award,
  MapPin,
  Phone,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "10,000+", label: "Happy Customers", icon: Users },
    { number: "10+", label: "Vehicles Available", icon: Car },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Customer Support", icon: Clock },
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "All our vehicles undergo rigorous safety inspections and maintenance to ensure your peace of mind on every journey.",
    },
    {
      icon: Star,
      title: "Premium Quality",
      description:
        "We maintain a modern fleet of well-maintained vehicles from top manufacturers to provide you with the best driving experience.",
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description:
        "24/7 customer support and quick response times ensure you're never left stranded during your rental period.",
    },
    {
      icon: MapPin,
      title: "Convenient Locations",
      description:
        "Multiple pickup and drop-off locations across the city make it easy to rent and return your vehicle.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/api/placeholder/300/300",
      description:
        "With 20+ years in the automotive industry, Sarah founded our company with a vision to revolutionize car rentals.",
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      image: "/api/placeholder/300/300",
      description:
        "Michael ensures our fleet is always in top condition and our operations run smoothly across all locations.",
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Experience Lead",
      image: "/api/placeholder/300/300",
      description:
        "Emily leads our customer service team, ensuring every rental experience exceeds expectations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-blue-200">Auto-Explore</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Your trusted partner for premium car rentals. We're committed to
              making your journey smooth, safe, and unforgettable.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <Icon className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Founded in 2008 with a simple mission: to provide reliable,
                    affordable, and premium car rental services that exceed
                    customer expectations. What started as a small family
                    business with just 5 vehicles has grown into one of the
                    region's most trusted car rental companies.
                  </p>
                  <p>
                    Over the years, we've expanded our fleet to include over 500
                    vehicles ranging from economy cars to luxury SUVs, always
                    maintaining our commitment to quality, safety, and
                    exceptional customer service.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of customers annually,
                    from business travelers and tourists to locals who need
                    temporary transportation. Our success is built on the
                    foundation of trust, reliability, and genuine care for our
                    customers' needs.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 transform rotate-3">
                  <div className="bg-white rounded-2xl p-8 transform -rotate-6 shadow-2xl">
                    <Car className="w-20 h-20 text-blue-900 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Premium Fleet
                    </h3>
                    <p className="text-gray-600">
                      Modern vehicles from trusted brands, regularly maintained
                      and sanitized for your safety and comfort.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              These core principles guide everything we do and shape the
              experience we deliver to our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                    <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
