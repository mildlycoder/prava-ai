"use client";

import Header from "@/components/layout-components/Header";
import Link from "next/link";
import Card from "@/components/home-components/Card";
export default function Home() {

  return (
    <main className="min-h-screen bg-white text-white bg-[radial-gradient(circle,_#fbfbfb_0%,_#2d2d2d_23%,_#000000_36%,_#f2f2f2_60%,_#f4e7e7_76%,_#000000_86%,_#f2f2f2_100%)]">
      <div style={{
        backgroundImage: `url('/noise.svg')`,
        backgroundSize: 'cover'
      }}>
        <Header />
        <section className="mx-auto grid grid-col-1 md:grid-cols-12 grid-rows-1 items-center min-h-fit md:min-h-screen">
          <div className="hidden md:flex col-span-1 min-h-full mr-[1px] bg-black bg-blend-color"></div>
          <div className="hidden md:flex col-span-1 min-h-full mr-[1px] bg-black bg-blend-color"></div>
          <div className="col-span-8 py-20 min-h-full  bg-black bg-blend-color flex flex-col items-center justify-start md:p-5">
            <img className="w-[95%] md:w-[70%]" src="/hero.svg" />
            <section className="w-[95%] md:w-[60%] text-center flex flex-col gap-4">
              <h1 className="font-bold text-xl md:text-2xl md:leading-[36px]">Unlock a New Power for Your AI Agents: Autonomous Payments</h1>
              <h2 className="text-md md:text-xl opacity-50 leading-[16px] md:leading-[24px] w-[90%] md:w-[60%] mx-auto">Join the Waitlist and Experience the Future of Sending Money Home.</h2>
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
      </div>

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
        <div className="col-span-8 bg-black min-h-full bg-blend-color flex flex-col items-center justify-center pb-20 md:py-28">

          <img src="/coins.svg" />
          <section className="w-[95%] md:w-[60%] text-center flex flex-col gap-4">
            <h1 className="font-bold texl-2xl md:text-3xl leading-[32px] md:leading-[42px]">Integrate Autonomous Payments with Just a Few Lines of Code</h1>
            <h2 className="text-md md:text-lg opacity-50 leading-[24px] md:leading-[24px] w-[80%] md:w-[60%] mx-auto">Unlock secure, seamless financial transactions for your AI agents without exposing sensitive bank details.</h2>
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

      <section className="mx-auto grid grid-col-1 md:grid-cols-12 grid-rows-1 mt-[1px] items-center">
        <div className="hidden md:flex col-span-1 min-h-full mr-[1px] bg-black bg-blend-color"></div>
        <div className="hidden md:flex col-span-1 min-h-full mr-[1px] bg-black bg-blend-color"></div>
        <div className="col-span-8 min-h-full bg-black bg-blend-color p-5 flex flex-col items-center justify-center py-12 md:py-28">
          <section className="w-full text-center flex flex-col gap-6">
            <h1 className="font-bold text-3xl leading-[42px]">Use Cases</h1>
            <h2 className="text-lg opacity-50 leading-[24px] w-[70%] mx-auto">Unlock the Future of AI-Driven Payments</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-[90%] mx-auto md:p-5 gap-5 md:gap-5">
              <Card bot={"Autonomous Shopping"} link={"/"} desc={"Let your AI agent shop and pay on behalf of users, all while maintaining strict budgetary controls."} />
              <Card bot={"Controlled Spendings"} link={"/"} desc={"Set limits for your AI agent to make payments only within certain parameters, ensuring safe and predictable spending"} />
              <Card bot={"Instant Transactions"} link={"/"} desc={"AI agents can process real-time payments across borders, optimizing both speed and cost-efficiency."} />
              <Card bot={"Transaction Verification"} link={"/"} desc={"an automated flagging and rollback system. Suspicious transactions are flagged and paused for review. You can approve legitimate transactions or automatically roll back flagged ones, ensuring security and accuracy in all payments."} />
            </div>
          </section>
        </div>
        <div className="hidden md:flex col-span-1 min-h-full ml-[1px] bg-black bg-blend-color"></div>
        <div className="hidden md:flex col-span-1 min-h-full ml-[1px] bg-black bg-blend-color"></div>
      </section>

    </main>
  )
}
