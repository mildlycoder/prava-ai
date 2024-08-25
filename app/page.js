"use client";

import Header from "@/components/layout-components/Header";
import Link from "next/link";
export default function Home() {

  return (
    <main className="min-h-screen bg-white text-white bg-[radial-gradient(circle,_rgba(255,255,255,1)_0%,_rgba(11,10,30,1)_16%,_rgba(0,0,0,1)_52%,_rgba(222,222,222,1)_87%,_rgba(255,255,255,1)_100%)]">
      <Header />
      <section className="mx-auto grid grid-col-1 md:grid-cols-12 grid-rows-1 items-center min-h-screen">
        <div className="hidden md:flex col-span-1 min-h-full mr-[1px] bg-black bg-blend-color"></div>
        <div className="hidden md:flex col-span-1 min-h-full mr-[1px] bg-black bg-blend-color"></div>
        <div className="col-span-8 min-h-full  bg-black bg-blend-color flex flex-col items-center justify-center md:p-10">
          <img src="/hero.svg" />
          <section className="w-[95%] md:w-[60%] text-center flex flex-col gap-4">
            <h1 className="font-bold text-xl md:text-3xl md:leading-[36px]">Prava makes it fast, easy and cheap</h1>
            <h2 className="text-md md:text-lg opacity-50 leading-[16px] md:leading-[24px] w-[90%] md:w-[50%] mx-auto">Join the Waitlist and Experience the Future of Sending Money Home.</h2>
            <Link href='/waitlist'>
              <button className="bg-white rounded-l-full rounded-r-full px-4 py-2 text-black w-[80%] md:w-[30%] mx-auto border-2 border-white hover:bg-black hover:text-white transition-all duration-500">
                Join Waitlist
              </button>
            </Link>
          </section>
        </div>
        <div className="hidden md:flex col-span-1 min-h-full ml-[1px] bg-black bg-blend-color"></div>
        <div className="hidden md:flex col-span-1 min-h-full ml-[1px] bg-black bg-blend-color"></div>
      </section>

      <section className="mx-auto grid grid-col-1 md:grid-cols-12 grid-rows-1 mt-[1px] items-start">
        <div className="hidden md:flex col-span-1 min-h-full mr-[1px] bg-black bg-blend-color"></div>
        <div className="hidden col-span-1 min-h-full md:flex flex-col">
          <div className="bg-black bg-blend-color basis-1/3 grow flex items-center m-[1px] justify-center aspect-square">
            <img src="/Money.svg" />
          </div>
          <div className="bg-black bg-blend-color basis-1/3 grow flex items-center m-[1px] justify-center aspect-square">
            <img src="/airplane.svg" />
          </div>
          <div className="bg-black bg-blend-color basis-1/3 grow flex items-center m-[1px] justify-center aspect-square">
            <img src="/file.svg" />
          </div>
        </div>
        <div className="col-span-8 bg-black min-h-full bg-blend-color flex flex-col items-center justify-center pb-20 md:p-10">

          <img src="/coins.svg" />
          <section className="w-[95%] md:w-[60%] text-center flex flex-col gap-4">
            <h1 className="font-bold texl-2xl md:text-3xl leading-[32px] md:leading-[42px]">Meet Prava- The Fintech Revolutionizing Remittances</h1>
            <h2 className="text-md md:text-lg opacity-50 leading-[24px] md:leading-[24px] w-[80%] md:w-[60%] mx-auto">Prava is a new kind of fintech which puts power in your hands. We are on mission to make cross border payments as seamless and affordable as possible</h2>
            <button className="bg-white rounded-l-full rounded-r-full px-4 py-2 text-black w-[90%] md:w-[30%] mx-auto border-2 border-white hover:bg-black hover:text-white transition-all duration-500">
              Know more
            </button>
          </section>
        </div>
        <div className="hidden col-span-1 min-h-full md:flex flex-col">
          <div className="bg-black bg-blend-color basis-1/3 grow flex items-center m-[1px] justify-center aspect-square">
            <img src="/breifcase.svg" />
          </div>
          <div className="bg-black bg-blend-color  basis-1/3 grow flex items-center m-[1px] justify-center aspect-square">
            <img src="/bird.svg" />
          </div>
          <div className="bg-black bg-blend-color  basis-1/3 grow flex items-center m-[1px] justify-center aspect-square">
            <img src="/currency.svg" />
          </div>
        </div>
        <div className="hidden md:flex col-span-1 min-h-full  ml-[1px] bg-black bg-blend-color"></div>
      </section>
    </main>
  )
}
