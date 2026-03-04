import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] pt-32 pb-24 px-6">

      {/* ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.06),transparent_40%)] pointer-events-none" />


      {/* subtle grid pattern */}
      <div
        className="
  absolute inset-0
  bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
  bg-[size:120px_120px]
  mask-[radial-gradient(circle_at_center,black,transparent_75%)]
  pointer-events-none
  "
      />

      {/* LEFT accent lines */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 hidden lg:block w-[320px]">

        <div className="absolute left-[80px] top-[200px] w-[1px] h-[240px] bg-white/10" />
        <div className="absolute left-[140px] top-[260px] w-[1px] h-[200px] bg-white/10" />
        <div className="absolute left-[200px] top-[300px] w-[1px] h-[160px] bg-white/10" />

      </div>

      {/* RIGHT accent lines */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 hidden lg:block w-[320px]">

        <div className="absolute right-[80px] top-[240px] w-[1px] h-[240px] bg-white/10" />
        <div className="absolute right-[140px] top-[300px] w-[1px] h-[200px] bg-white/10" />
        <div className="absolute right-[200px] top-[340px] w-[1px] h-[160px] bg-white/10" />

      </div>


      <div className="max-w-[1200px] mx-auto text-center">

        {/* HEADLINE */}
        <h1 className="text-[48px] md:text-[68px] font-bold tracking-[-0.015em] leading-[1.05] text-white max-w-[20ch] mx-auto">
          Websites That Bring More Customers for Local Businesses
        </h1>

        {/* SUBTEXT */}
        <p className="mt-6 text-[18px] text-white/70 max-w-[600px] mx-auto leading-relaxed">
          I design fast, conversion-focused websites for dentists, travel agencies,
          law firms, and service businesses.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <Link
            href="#projects"
            className="px-8 py-4 bg-white text-black rounded-[12px] font-medium hover:bg-gray-200 transition-colors"
          >
            View My Work
          </Link>

          <Link
            href="#contact"
            className="px-8 py-4 border border-white/20 text-white rounded-[12px] font-medium hover:bg-white hover:text-black transition-all"
          >
            Start a Project
          </Link>

        </div>

      </div>


      {/* PRODUCT VISUAL */}
      <div className="relative mt-12 max-w-[1200px] mx-auto">

        {/* glow behind screen */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[900px] h-[400px] bg-white/10 blur-[140px] opacity-40" />
        </div>

        {/* browser frame */}
        <div className="relative mx-auto max-w-[1000px] rounded-[24px] border border-white/10 overflow-hidden bg-[#111] shadow-[0_80px_200px_rgba(0,0,0,0.9)]">

          {/* browser bar */}
          <div className="flex items-center gap-2 h-10 px-4 bg-[#1c1c1c] border-b border-white/10">

            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />

            <div className="ml-4 text-[12px] text-white/40">
              premiumindiantours.com
            </div>

          </div>

          {/* screenshot */}
          <div className="relative aspect-[2.27/1] w-full">

            <Image
              src="/images/hero.png"
              alt="Website preview of a travel agency landing page built by Mohit Singh"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 1000px"
              className="object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}