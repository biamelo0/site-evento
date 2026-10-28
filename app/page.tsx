"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventPackages from "@/components/EventPackages";
import EventPlannerChecklist from "@/components/EventPlannerChecklist";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import WhyUs from "@/components/WhyUs";
import MenuSection from "@/components/MenuSection";
import BudgetCalculator from "@/components/BudgetCalculator";
import OrderOnlineBanner from "@/components/OrderOnlineBanner";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fbf9f5] text-[#24211d] flex flex-col">
      {/* Navigation Bar */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Ready-to-go All-Inclusive Packages (Super Attractive!) */}
      <EventPackages
        onSelectPackage={() => setIsBookingOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Interactive 1-Minute Event Planner Checklist */}
      <EventPlannerChecklist />

      {/* About Us Section */}
      <About onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Core Services (Buffet, Decor, Som & DJ, Bar) - Layout 1 */}
      <Experiences onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Why Choose Us / Trust Badges */}
      <WhyUs onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Delicious & Fartos Menu Showcase - Layout 2 */}
      <MenuSection onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Real-time Interactive Budget Calculator */}
      <BudgetCalculator onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Order Online / Home Delivery Banner - Layout 1 Bottom */}
      <OrderOnlineBanner onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Instagram & Real Moments Gallery - Layout 2 */}
      <GallerySection />

      {/* Real Customer Testimonials */}
      <Testimonials />

      {/* Complete Footer */}
      <Footer />

      {/* Contact / Free Tasting Booking Modal */}
      <ContactModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
