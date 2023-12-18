import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";

export default function AuthLogo() {
  return (
    <div className="mb-5">
      <Link className="inline-flex" href="/">
        <div className="relative flex flex-col items-center justify-center text-5xl ">
          <h1>
            Welcome to <span className="sr-only">Scom</span>
          </h1>
          <Image
            className="relative"
            src={Logo}
            width={284}
            height={96}
            alt="Scom"
          />
        </div>
      </Link>
    </div>
  );
}
