import Image from "next/image";
import tokenomicsImage from "../../public/images/tokenomics.svg";

export default function Tokenomics() {
  return (
    <>
      <section className="flex flex-col items-center justify center">
        <div className="flex flex-col w-full max-w-4xl gap-2 py-[5vh] text-center">
          <h4 className="mb-5 leading-relaxed xl:leading-loose h4">
            Scomcoin's total supply is 1,000,000,000
          </h4>
          <p className="">
            The supply is split into 4 different categaries as shown below.
            Scomcoin contract charges 4% tax in which those taxes will be used
            to reward users who particapte in the Scom Dad Hunt.
          </p>
          <Image
            src={tokenomicsImage}
            alt="Tokenomics"
            width={300}
            height={400}
            className="object-contain w-full h-auto"
          />
        </div>
      </section>
    </>
  );
}
