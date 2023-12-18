import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo.svg'

export default function Logo() {
  return (
    <Link className="block" href="/" aria-label="Cruip">
      <Image src={LogoImg} width={284} height={96} priority alt="logo" className="max-w-[100px]" />
    </Link>
  )
}