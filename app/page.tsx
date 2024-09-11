// import React from 'react';
// import { HelpCircle } from 'lucide-react'; // Removed Bell
// // import { Button } from "@/components/ui/button";

'use client'

import React from 'react'
import Image from 'next/image'
import { HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BookingApp() {
  return (
    <div className="min-h-screen bg-[#003580] text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Booking.com</h1>
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
         
          <Button variant="outline" className="text-white border-white hover:bg-blue-700">Register</Button>
          <Button variant="outline" className="text-white border-white hover:bg-blue-700">Sign in</Button>
        </div>
      </header>

      <nav className="flex justify-start space-x-6 p-4 bg-[#003580] border-t border-b border-blue-400">
        <Button variant="ghost" className="text-white hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Stays
        </Button>
        <Button variant="ghost" className="text-white hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
          Flights
        </Button>
        <Button variant="ghost" className="text-white hover:bg-blue-700">Flight + Hotel</Button>
        <Button variant="ghost" className="text-white hover:bg-blue-700">Car rentals</Button>
        <Button variant="ghost" className="text-white hover:bg-blue-700">Attractions</Button>
        <Button variant="ghost" className="text-white hover:bg-blue-700">Airport taxis</Button>
      </nav>

      <main className="p-8 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4">Compare and book flights with ease</h2>
        <p className="text-2xl mb-8">Discover your next dream destination</p>

        <div className="bg-yellow-400 p-6 rounded-lg text-black mb-8">
          <RadioGroup defaultValue="round-trip" className="flex space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="round-trip" id="round-trip" />
              <Label htmlFor="round-trip">Round-trip</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="one-way" id="one-way" />
              <Label htmlFor="one-way">One-way</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="multi-city" id="multi-city" />
              <Label htmlFor="multi-city">Multi-city</Label>
            </div>
          </RadioGroup>

          <div className="flex space-x-4 mb-4">
            <Select>
              <option>Economy</option>
            </Select>
            <div className="flex items-center">
              <Checkbox id="direct-flights" />
              <Label htmlFor="direct-flights" className="ml-2">Direct flights only</Label>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <Input placeholder="PAT Jay Prakash Narayan Airport" className="bg-white" />
            <Input placeholder="Where to?" className="bg-white" />
            <Input type="date" placeholder="Sat, Oct 12 - Sat, Oct ..." className="bg-white" />
            <select defaultValue="1 adult" className="bg-white p-2 border rounded-md">
  <option>1 adult</option>
  <option>2 adults</option>
  <option>3 adults</option>
</select>

          </div>

          <Button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white text-lg py-6">Search</Button>
        </div>

        <div className="bg-white text-black p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-2">Popular flights near you</h3>
          <p className="text-gray-600 mb-4">Find deals on domestic and international flights</p>
          
          <Tabs defaultValue="international">
            <TabsList>
              <TabsTrigger value="international">International</TabsTrigger>
              <TabsTrigger value="domestic">Domestic</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {['Bangkok', 'Dubai', 'Doha', 'Frankfurt'].map((city, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                <Image src={`/placeholder.svg?height=200&width=300`} alt={city} width={300} height={200} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold">Patna to {city}</h4>
                  <p className="text-sm text-gray-600">Sep 16 - Sep 23 · Round-trip</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white text-black p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-2">Trending cities</h3>
          <p className="text-gray-600 mb-4">Book flights to a destination popular with travelers from India</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['New Delhi', 'Bangalore', 'Mumbai', 'Kolkata'].map((city, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                <Image src={`/placeholder.svg?height=200&width=300`} alt={city} width={300} height={200} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold">{city}, India</h4>
                  <p className="text-sm text-gray-600">Flights from Jay Prakash Narayan Airport</p>
                  <p className="text-sm text-gray-600">Sep 16 - Sep 23 · Round-trip</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white text-black p-6 rounded-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-2xl font-bold">Your account, your travel</h3>
              <p className="text-gray-600">All your trip details in one place</p>
            </div>
            <Image src="/placeholder.svg?height=100&width=100" alt="Genius" width={100} height={100} />
          </div>
          <p className="mb-4">Sign in to book faster and manage your trip with ease</p>
          <div className="flex space-x-4">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Sign in</Button>
            <Button variant="outline" className="text-blue-500 border-blue-500">Register</Button>
          </div>
        </div>

        <div className="bg-white text-black p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Fly worldwide with Booking.com</h3>
          <p className="text-gray-600 mb-4">Flights from wherever you are to wherever you want to go</p>

          <Tabs defaultValue="asia">
            <TabsList>
              <TabsTrigger value="asia">Asia</TabsTrigger>
              <TabsTrigger value="north-america">North America</TabsTrigger>
              <TabsTrigger value="europe">Europe</TabsTrigger>
              <TabsTrigger value="south-america">South America</TabsTrigger>
              <TabsTrigger value="oceania">Oceania</TabsTrigger>
              <TabsTrigger value="middle-east">Middle East</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {['New Delhi', 'Bangalore', 'Mumbai', 'Kolkata', 'Pune', 'Hyderabad', 'Panaji', 'Chennai', 'Chandigarh'].map((city, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Image src={`/placeholder.svg?height=50&width=50`} alt={city} width={50} height={50} className="rounded-md" />
                <div>
                  <h4 className="font-bold">Patna to {city}</h4>
                  <p className="text-sm text-gray-600">Shortest flight time: 2h 19m</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 text-black p-8 mt-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-4">Search a huge selection</h4>
            <p>Easily compare flights, airlines, and prices – all in one place</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Pay no hidden fees</h4>
            <p>Get a clear price breakdown every step of the way</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Get more flexibility</h4>
            <p>Change your travel dates with the Flexible ticket option*</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-8">*Flexible plane tickets are available for an additional cost on select airfares</p>
      </footer>
    </div>
  )
}