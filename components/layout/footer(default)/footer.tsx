"use client"

import { discordLink, instagramLink, telegramLink, tiktokLink, twitterLink } from "@/components/utils/links";
import LogoImg from '@/public/images/logo.svg'
import IconTwitter from '@/public/images/twitter.svg'
import IconTiktok from '@/public/images/tiktok.svg'
import IconInstagram from '@/public/images/instagram.svg'
import IconTelegram from '@/public/images/telegram.svg'
import IconDiscord from '@/public/images/discord.svg'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

export default function FooterDefault() {
  const currentPath = usePathname();


  return (
  <footer className="relative">
    <div className="relative z-[1] h-full px-4 mx-auto sm:px-8 lg:px-12">
      <div  className="flex flex-col items-center justify-center gap-5 tracking-wide lg:gap-14 lg:flex-row lg:text-lg">                                
        <Link href={'/'} className={` ${currentPath === '/'? "text-primary link-active" : " text-secondary"} block uppercase transition link hover:text-primary`}>
          <span >Home</span>
        </Link>
        <Link href={'/profile'} className={` ${currentPath === '/profile'? "text-primary link-active" : " text-secondary"} block uppercase transition link hover:text-primary`}>
          <span >Profile</span>
        </Link>
        <div className="flex flex-col items-center justify-center gap-5">
          <Link href={'/'} className="block uppercase transition text-secondary hover:text-primary">
            <Image src={LogoImg} width={264} height={96} alt='Logo' className="h-12" />
          </Link>
          <div className="flex items-center justify-center gap-5">                                
            <Link href={twitterLink} target="_blank" className="block uppercase transition text-secondary hover:text-primary hover:scale-90 target:scale-75">
              <Image src={IconTwitter} width={28} height={28} alt='icon twitter' />
            </Link>
            <Link href={tiktokLink} target="_blank" className="block uppercase transition text-secondary hover:text-primary hover:scale-90 target:scale-75">
              <Image src={IconTiktok} width={28} height={28} alt='icon tiktok' />
            </Link>
            <Link href={instagramLink} target="_blank" className="block uppercase transition text-secondary hover:text-primary hover:scale-90 target:scale-75">
              <Image src={IconInstagram} width={28} height={28} alt='icon instagram' />
            </Link>
            <Link href={telegramLink} target="_blank" className="block uppercase transition text-secondary hover:text-primary hover:scale-90 target:scale-75">
              <Image src={IconTelegram} width={28} height={28} alt='icon telegram' />
            </Link>
            <Link href={discordLink} target="_blank" className="block uppercase transition text-secondary hover:text-primary hover:scale-90 target:scale-75">
              <Image src={IconDiscord} width={28} height={28} alt='icon discord' />
            </Link>
          </div> 
        </div>
        <Link href={'/tokenomics'} className={` ${currentPath === '/tokenomics'? "text-primary link-active" : " text-secondary"} block uppercase transition link hover:text-primary`}>
          <span >Tokenomics</span>
        </Link>
        <Link href={'/rewards'} className={` ${currentPath === '/rewards'? "text-primary link-active" : " text-secondary"} block uppercase transition link hover:text-primary`}>
          <span >Rewards</span>
        </Link>
      </div>
      <div className="flex justify-center w-full pt-1 md:justify-end">
        <p className="text-sm text-secondary md:-translate-y-7">© Scom 2023. All rights reserved.</p>
      </div>
    </div>
    <div className="absolute z-[0] w-full h-[120px] bottom-0 bg-header bg-no-repeat bg-cover rotate-180 lg:scale-[2] scale-[8] md:scale-[7]" />
  </footer>
  )
}
