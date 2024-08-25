"use client";

import { useState } from "react";
import Header from "@/components/layout-components/Header";
import Airtable from "airtable";
var base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE }).base('appU8b6VzPQngKBko');

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    aiAgents: [],
  });

  const aiAgentOptions = [
    "Chatbots",
    "Virtual Assistants",
    "Task Automation Agents",
    "Data Analysis Agents",
    "Customer Service Agents",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, aiAgents: [...formData.aiAgents, value] });
    } else {
      setFormData({
        ...formData,
        aiAgents: formData.aiAgents.filter((agent) => agent !== value),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await base('prava-waitlist').create([
        {
          "fields": {
            "Name": formData.name,
            "Email": formData.email,
            "Phone": formData.phone || "N/A",  // If phone is optional, handle it accordingly
            "AI Agents": formData.aiAgents.join(", "),
          }
        }
      ]);
      alert('Successfully submitted!');
      setFormData({
        name: "",
        email: "",
        phone: "",
        aiAgents: [],
      });
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <main className="min-h-screen bg-white text-white bg-[radial-gradient(circle,_rgba(255,255,255,1)_0%,_rgba(11,10,30,1)_16%,_rgba(0,0,0,1)_52%,_rgba(222,222,222,1)_87%,_rgba(255,255,255,1)_100%)]">
      <Header />
      <section className="mx-auto grid grid-col-1 md:grid-cols-12 grid-rows-1 items-center min-h-screen">
        <div className="hidden md:flex col-span-1 min-h-full mr-[1px] bg-black bg-blend-color"></div>
        <div className="hidden md:flex col-span-1 min-h-full mr-[1px] bg-black bg-blend-color"></div>
        <div className="col-span-12 md:col-span-8 md:col-start-3 min-h-full bg-black bg-blend-color flex flex-col items-center justify-center p-4 md:p-10">
          <h1 className="font-bold text-2xl md:text-3xl mb-6 text-center">Join Our AI Agent Community</h1>
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 text-black rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 text-black rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2">Phone (optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-black rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">What kind of AI agents do you have?</label>
              {aiAgentOptions.map((option) => (
                <div key={option} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={option}
                    name="aiAgents"
                    value={option}
                    checked={formData.aiAgents.includes(option)}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
            <button type="submit" className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
              Submit
            </button>
          </form>
        </div>
        <div className="hidden md:flex col-span-1 min-h-full mr-[1px] bg-black bg-blend-color"></div>
        <div className="hidden md:flex col-span-1 min-h-full mr-[1px] bg-black bg-blend-color"></div>
      </section>
    </main>
  );
}
