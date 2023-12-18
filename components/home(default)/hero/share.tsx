import Figure3 from "@/public/images/figure3.svg";
import Image from "next/image";

export default function Share(){
    return (
        <div className="flex flex-col-reverse items-center justify-center gap-5 text-center md:text-left xl:grid xl:grid-cols-5 md:py-32">
        <div className=" xl:col-span-3">
          <h4 className="mb-5 h4">Wondering what to share?</h4>
          <p className="max-w-3xl">
            No sharing of financial advice needed! Simply help us find
            SCOM DAD, our dev’s dad who go kidnapped. Every three days,
            we'll post updates on our site with his last whereabouts or
            any news we receive about him. Just share them, and you'll be
            rewarded for your support. Read more about rewards in the
            rewards page
          </p>
        </div>
        <div className=" xl:col-span-2">
          <Image src={Figure3} alt="board" width={600} height={800} />
        </div>
      </div>
    )
}