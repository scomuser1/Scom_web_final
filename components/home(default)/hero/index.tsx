import Hero from "./hero";
import Hunt from "./hunt";
import Share from "./share";
import Why from "./why";
import VideoGrid from "./videoGrid";

export default function HeroDefault() {
  return (
    <>
      <section id="hero" className="relative">
{/*         <div className="absolute left-0 z-10 pointer-events-none top-10">
          <Image src={Airplane} alt="airplane" width={300} height={400} />
        </div> */}
        <div className="relative z-10 max-w-6xl ">
          <div className="flex flex-col gap-[15vh] lg:gap-2 pt-12 pb-16  md:pt-52 md:pb-32">
            <Hero />
            <Hunt />
            <Share />
            <Why />
            <VideoGrid />
          </div>
        </div>
      </section>
    </>
  );
}
