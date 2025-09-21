"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+20 111 711 0818", "+1 (555) 987-6543"],
      description: "Call us anytime for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@wheeliebooked.com", "support@wheeliebooked.com"],
      description: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Premium Drive", "Downtown, City 12345"],
      description: "Visit our main location",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 8:00 AM - 8:00 PM", "Sat-Sun: 9:00 AM - 6:00 PM"],
      description: "24/7 emergency support available",
    },
  ];

  const locations = [
    "Downtown Office",
    "Airport Location",
    "Mall Branch",
    "Hotel Pickup",
    "Other",
  ];

  // Simple and reliable WhatsApp handler
  const handleWhatsApp = () => {
    const message = "Hi! I'd like to inquire about car rental services.";
    const phoneNumber = "20 10 17379236";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Direct navigation - most reliable method
    window.location.href = whatsappUrl;
  };

  // Alternative method using anchor element
  const handleWhatsAppAlt = () => {
    const message = "Hi! I'd like to inquire about car rental services.";
    const phoneNumber = "20 10 17379236";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    const anchor = document.createElement("a");
    anchor.href = whatsappUrl;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const copyNumber = () => {
    navigator.clipboard
      .writeText("+20 10 17379236")
      .then(() => {
        alert("Phone number copied!");
      })
      .catch(() => {
        alert("Please copy manually: +20 10 17379236");
      });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-primary-glow to-yellow-500 text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Get in touch with our friendly team. We're here to help you find the
            perfect rental car for your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={handleWhatsApp}
              className="text-primary bg-primary-foreground/90 hover:bg-primary-foreground"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>

          <p className="mt-4 text-sm opacity-75">
            Having trouble?{" "}
            <a
              href="https://wa.me/20 10 17379236?text=Hi!%20I'd%20like%20to%20inquire%20about%20car%20rental%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              Try this direct link
            </a>{" "}
            or call +20 10 17379236
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="text-center shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="bg-blue-900 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-primary font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-3xl text-blue-900 font-bold mt-6">
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Your Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="ahmed"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ahmed@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+201254789621" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your rental needs..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    onClick={handleSubmit}
                    variant="default"
                    size="lg"
                    className="w-full bg-blue-900"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="shadow-card">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-lg font-semibold">Interactive Map</p>
                      <p className="text-muted-foreground">
                        Find our locations near you
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
