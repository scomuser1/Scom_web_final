import Image from "next/image";
import Figure1 from "@/public/images/figure1.svg";
import Logo from "../../../public/images/logo.svg";

export default function Hero() {
  return (
    <div className="relative z-[999] min-h-screen text-center flex flex-col items-center justify-center pt-40 md:pt-0">
      <div className="flex flex-col items-center justify-center h-full min-h-screen gap-5 md:pb-32 md:flex-row">
        <div className="max-w-sm md:max-w-prose">
          <div className="flex flex-col items-center justify-center font-extrabold text-7xl md:text-9xl text-primary">
            <Image
              src={Logo}
              alt="SCOM"
              width={300}
              height={300}
              className="w-full"
            />
            <h1>
              <span className="hidden">SCOM</span>
              COIN
            </h1>
          </div>
          <h4 className="mb-5 h4">
            Not just a meme; <br /> A cryptocurrency movement and organization!
          </h4>
          <div>
            <p className="hidden max-w-3xl md:flex">
              During the last bull run, Jeets didn't behave well. Developers
              made false promises, there was no consistent marketing, and crypto
              influencers became overpriced, milking the situation. It was
              absolute chaos. In this bull run, SCOM COIN aims to change the
              game by introducing SCOM BOT. What is SCOM BOT?
            </p>
          </div>
        </div>

        <Image
          src={Figure1}
          alt="bull"
          width={600}
          height={800}
          className="w-auto max-h-[50vh]"
        />
        <div className="md:hidden">
          <p className="max-w-3xl">
            During the last bull run, Jeets didn't behave well. Developers made
            false promises, there was no consistent marketing, and crypto
            influencers became overpriced, milking the situation. It was
            absolute chaos. In this bull run, SCOM COIN aims to change the game
            by introducing SCOM BOT. What is SCOM BOT?
          </p>
        </div>
      </div>
    </div>
  );
}
