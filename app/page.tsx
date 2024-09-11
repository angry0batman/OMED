"use client";

import React from 'react';
import { Bell, HelpCircle } from 'lucide-react';

export default function BookingApp() {
  return (
    <div className="min-h-screen booking-blue text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Booking.com</h1>
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 booking-yellow rounded-full"></div>
          <HelpCircle className="w-6 h-6" />
          <button className="booking-button-secondary">Register</button>
          <button className="booking-button-secondary">Sign in</button>
        </div>
      </header>

      <nav className="flex justify-start space-x-6 p-4 bg-blue-800">
        <button className="booking-button-secondary">Stays</button>
        <button className="booking-button-secondary">Flights</button>
        <button className="booking-button-secondary">Flight + Hotel</button>
        <button className="booking-button-secondary">Car rentals</button>
        <button className="booking-button-secondary">Attractions</button>
        <button className="booking-button-secondary">Airport taxis</button>
      </nav>

      <main className="p-8">
        <h2 className="booking-heading">Compare and book flights with ease</h2>
        <p className="booking-subheading">Discover your next dream destination</p>

        <div className="booking-card p-6">
          <div className="flex space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              <input type="radio" id="round-trip" name="trip-type" className="booking-radio" defaultChecked />
              <label htmlFor="round-trip" className="booking-label">Round-trip</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" id="one-way" name="trip-type" className="booking-radio" />
              <label htmlFor="one-way" className="booking-label">One-way</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" id="multi-city" name="trip-type" className="booking-radio" />
              <label htmlFor="multi-city" className="booking-label">Multi-city</label>
            </div>
          </div>

          <div className="flex space-x-4 mb-4">
            <select className="booking-select">
              <option>Economy</option>
            </select>
            <div className="flex items-center">
              <input type="checkbox" id="direct-flights" className="booking-checkbox" />
              <label htmlFor="direct-flights" className="ml-2 booking-label">Direct flights only</label>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <input type="text" placeholder="PAT Jay Prakash Narayan Airport" className="booking-input" />
            <input type="text" placeholder="Where to?" className="booking-input" />
            <input type="date" className="booking-input" />
            <select className="booking-select">
              <option>1 adult</option>
            </select>
          </div>

          <button className="booking-button-primary mt-4 w-full">Search</button>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-2">Popular flights near you</h3>
          <p>Find deals on domestic and international flights</p>
        </div>
      </main>
    </div>
  );
}
