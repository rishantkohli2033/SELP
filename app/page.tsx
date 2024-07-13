import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className="flex justify-center min-w-[28rem]">
    <div className="text-center p-10 text-xl leading-10 text-emerald">
      <div className="flex justify-center">
      <Image className="pointer-events-none" src="/image.png" alt="image" width={170} height={20} />  
      </div>
      
      <h2 className="font-light text-2xl pt-8">Click Below to become a reviewer for 7-Eleven</h2>
      
      <div className="flex flex-col justify-text text-lg leading-8 font-light pt-8 p-4 items-center">
        <p>1. Click the link given below</p>
        <p className="pr-1">2. Enter your email & basic info</p>
        <p>3. Complete the product survey</p>
        <p className="pl-3">4. Complete recommended deals</p>
        <p>5. Receive your $500 gift card</p>
        <Link href={'https://glitchy.go2cloud.org/aff_c?offer_id=76&aff_id=2431&source=jobs'} target="_blank">
        <button className="pl-8 pr-8 pt-4 pb-4 mt-12 text-3xl font-normal bg-emerald text-white rounded transition w-fit">Start Review</button>
        </Link>
      </div>
    </div>
    </div>
  );
}