import Header from "@/components/layout-components/Header";

export default function Home() {

  return (
    <main className="min-h-screen bg-white text-white bg-[radial-gradient(circle,_rgba(255,255,255,1)_0%,_rgba(11,10,30,1)_16%,_rgba(0,0,0,1)_52%,_rgba(222,222,222,1)_87%,_rgba(255,255,255,1)_100%)]">
      <Header />
      <section className="mx-auto grid grid-col-1 md:grid-cols-12 grid-rows-1 items-center min-h-screen">
        <div className="hidden md:flex col-span-1 min-h-full mr-[1px] bg-black bg-blend-color"></div>
        <div className="hidden md:flex col-span-1 min-h-full mr-[1px] bg-black bg-blend-color"></div>
        <div className="col-span-12 md:col-span-8 md:col-start-3 min-h-full bg-black bg-blend-color">
        <iframe class="airtable-embed" src="https://airtable.com/embed/appU8b6VzPQngKBko/pag5mVWLEXtE9YG7m/form" frameborder="0" onmousewheel=""
            style={{
              height: "100vh",
              background: "black"
            }}
            width="100%" height={"100vh"} ></iframe>
        </div>
        <div className="hidden md:flex col-span-1 min-h-full mr-[1px] bg-black bg-blend-color"></div>
        <div className="hidden md:flex col-span-1 min-h-full mr-[1px] bg-black bg-blend-color"></div>
      </section>
    </main>
  );
}
