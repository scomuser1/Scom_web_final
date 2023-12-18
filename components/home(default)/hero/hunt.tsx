import Image from "next/image"
import HuntGif from "@/public/images/scom-hunt-gif.gif";

export default function Hunt() {
    return (
        <div className="flex flex-col items-center justify-center gap-12 text-center md:text-left xl:grid xl:grid-cols-5 md:py-32">
        <div className="xl:col-span-2">
          <Image src={HuntGif} alt="map" width={600} height={800} />
        </div>
        <div className="xl:col-span-3 justify-self-end">
          <h4 className="mb-5 h4">
            SCOM Bot: Join the Hunt for SCOM Dad
          </h4>
          <p className="max-w-3xl mb-5">
            Be an influencer: Post about SCOM DAD, spread the word, and
            let SCOM Bot track your efforts with precision! Our tech
            scours the social media landscape and identifies your posts in
            the quest to find SCOM Dad. Your mission? Help locate SCOM Dad
            and earn exciting rewards!
          </p>
          <p>SCOM COIN offers hassle free registration</p>
          <ul className="px-12 text-left list-disc md:px-0">
            <li>Create an account</li>
            <li>Fill up the information required by the bot</li>
            <li>Post us, Claim your money!</li>
          </ul>
        </div>
      </div>
    )
}