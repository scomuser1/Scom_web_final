import Image from "next/image";
import Figure1 from "@/public/images/figure1.svg";

export default function Hero() {
  return (
    <>
    <div className="flex flex-col-reverse items-center justify-center gap-5 text-center md:text-left xl:grid xl:grid-cols-5 md:pb-32">
      <div className="xl:col-span-3">
        <h4 className="mb-5 leading-relaxed xl:leading-loose h4">
          SCOM COIN is not just a meme; it's a <br className="hidden md:flex" /> cryptocurrency movement
          and organization!
        </h4>
        <p className="max-w-3xl">
          During the last bull run, Jeets didn't behave well. Developers made
          false promises, there was no consistent marketing, and crypto
          influencers became overpriced, milking the situation. It was absolute
          chaos. In this bull run, SCOM COIN aims to change the game by
          introducing SCOM BOT. What is SCOM BOT?
        </p>
      </div>
      <div className="xl:col-span-2">
        <Image src={Figure1} alt="bull" width={600} height={800} />
      </div>
    </div>
    </>
  );
}
