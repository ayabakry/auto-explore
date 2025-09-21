import {
  Shield,
  Clock,
  CreditCard,
  Car,
  FileText,
  AlertTriangle,
  Users,
  MapPin,
} from "lucide-react";

export default function policy() {
  const policies = [
    {
      icon: Users,
      title: "Age & License Requirements",
      content: [
        "Minimum age: 21 years old (additional fees apply for drivers under 25)",
        "Valid driver's license required (held for at least 1 year)",
        "International driving permit required for foreign licenses",
        "Maximum age: No upper limit with valid license",
      ],
    },
    {
      icon: CreditCard,
      title: "Payment & Deposits",
      content: [
        "Major credit cards accepted (Visa, MasterCard, American Express)",
        "Security deposit required at pickup (varies by vehicle class)",
        "Debit cards accepted with additional verification",
        "Prepayment options available for extended rentals",
      ],
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      content: [
        "Basic liability insurance included in all rentals",
        "Collision Damage Waiver (CDW) available for additional fee",
        "Personal Accident Insurance (PAI) optional coverage",
        "Third-party insurance accepted (proof required)",
      ],
    },
    {
      icon: Car,
      title: "Vehicle Conditions",
      content: [
        "All vehicles inspected before and after rental",
        "Fuel tank must be returned at same level as pickup",
        "Smoking prohibited in all vehicles",
        "Pet policy: Small pets allowed with additional cleaning fee",
      ],
    },
    {
      icon: Clock,
      title: "Rental Duration & Extensions",
      content: [
        "Minimum rental period: 24 hours",
        "Grace period: 29 minutes after scheduled return",
        "Late return fees apply after grace period",
        "Extensions must be approved in advance",
      ],
    },
    {
      icon: MapPin,
      title: "Pickup & Return",
      content: [
        "Valid ID required at pickup",
        "Vehicle inspection completed at pickup and return",
        "After-hours return available at select locations",
        "Different return location subject to additional fees",
      ],
    },
  ];

  const restrictions = [
    "No off-road driving or racing",
    "Maximum occupancy as specified for each vehicle",
    "No towing or pushing other vehicles",
    "No transportation of illegal substances",
    "No subletting or unauthorized use by third parties",
    "No driving under the influence of alcohol or drugs",
  ];

  const cancellationPolicy = [
    {
      timeframe: "48+ hours before pickup",
      fee: "Free cancellation",
      description: "Full refund of prepaid amounts",
    },
    {
      timeframe: "24-48 hours before pickup",
      fee: "$25 cancellation fee",
      description: "Refund minus cancellation fee",
    },
    {
      timeframe: "Less than 24 hours",
      fee: "50% of rental fee",
      description: "Partial refund available",
    },
    {
      timeframe: "No-show",
      fee: "Full rental fee charged",
      description: "No refund for no-show reservations",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Rental Policies & Terms
            </h1>
            <p className="text-xl text-blue-100">
              Everything you need to know about renting with DriveEasy
            </p>
          </div>
        </div>
      </section>

      {/* Main Policies */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Rental Requirements & Policies
              </h2>
              <p className="text-lg text-gray-600">
                Please review these important policies before making your
                reservation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {policies.map((policy, index) => {
                const Icon = policy.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-50 rounded-full p-3 mr-4">
                        <Icon className="w-6 h-6 text-blue-900" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {policy.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {policy.content.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-600 flex items-start"
                        >
                          <span className="w-2 h-2 bg-blue-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cancellation Policy
              </h2>
              <p className="text-lg text-gray-600">
                Cancellation fees vary based on when you cancel your reservation
              </p>
            </div>

            <div className="space-y-4">
              {cancellationPolicy.map((policy, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {policy.timeframe}
                    </h4>
                    <p className="text-gray-600">{policy.description}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-lg font-bold ${
                        policy.fee === "Free cancellation"
                          ? "text-green-600"
                          : "text-blue-900"
                      }`}
                    >
                      {policy.fee}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Restrictions */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Important Restrictions
                </h2>
              </div>
              <p className="text-lg text-gray-600">
                Please note these restrictions to avoid additional charges or
                policy violations
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                {restrictions.map((restriction, index) => (
                  <div key={index} className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{restriction}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Additional Information
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-blue-900 mr-2" />
                  Documentation Required
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Valid driver's license</li>
                  <li>• Major credit card in driver's name</li>
                  <li>• Government-issued photo ID</li>
                  <li>• Proof of insurance (if using own coverage)</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-6 h-6 text-blue-900 mr-2" />
                  Operating Hours
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Monday - Friday: 8:00 AM - 8:00 PM</li>
                  <li>• Saturday: 8:00 AM - 6:00 PM</li>
                  <li>• Sunday: 10:00 AM - 6:00 PM</li>
                  <li>• After-hours pickup/return available</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 rounded-xl p-6 border-l-4 border-blue-900">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Questions About Our Policies?
              </h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about our rental policies or need
                clarification on any terms, our customer service team is here to
                help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300">
                  Contact Support
                </button>
                <button className="border border-blue-900 text-blue-900 px-6 py-2 rounded-lg hover:bg-blue-900 hover:text-white transition-colors duration-300">
                  View FAQ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-300">
            These policies are subject to change. Last updated: September 2025
          </p>
        </div>
      </section>
    </div>
  );
}
