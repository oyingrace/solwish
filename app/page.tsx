"use client"

import Image from "next/image";
import Link from "next/link";
import Input from "./Input/page";


export default function Home() {
  return (
    <div className="min-h-min">
      <div>
        <Image
          src=""
          alt=""
          width={100}
          height={100}
        />
        <p>SolWish</p>
        <button><Link href="/Input">Create a Wishlist</Link></button>
        
      </div>
      <div>
      <div className="w-full h-full p-16 bg-[#e1f6ce] flex-col justify-start items-start inline-flex">
          <div className="self-stretch justify-center items-center gap-16 inline-flex">
              <Image className="w-[500px] h-[500px]" src="/house.png" alt="" width={700} height={700} />
              <div className="flex-col justify-start items-start gap-10 inline-flex">
                  <div className="w-[515px] text-black text-5xl font-normal font-[Domine] leading-[54.76px]">If you could fund one wish, what would it be?</div>
                  <div className="w-[727px] text-[#111111]/70 text-xl font-normal font-[Gotham] leading-loose">Imagine having the power to grant a single wish. What would yours be? Would it be a tangible item, a life-changing experience, or perhaps something more intangible? Share your dream family, and friends and lets explore the possibilities together</div>
              </div>
          </div>
      </div>
      <div className="absolute top-[37rem] left-0 w-full translate-y-6  justify-center items-start p-4">
        <div className="animate-bounce h-[200px] shadow pl-4 pr-[17px] pt-4 pb-[17px] rounded-[10px] gap-10  justify-center items-center inline-flex">
          <Image className="w-[167px] h-[167px] bg-[#f0ffe3] rounded-[10px]" src="/Gemini.png" alt="" width={200} height={200} /> 
          <Image className="w-[167px] h-[167px] bg-[#f0ffe3] rounded-[10px]" src="/Snowglobe.png" alt="" width={200} height={200} />
          <Image className="w-[167px] h-[167px] bg-[#f0ffe3] rounded-[10px]" src="/image.png" alt="" width={200} height={200} />
          <Image className="w-[167px] h-[167px] bg-[#f0ffe3] rounded-[10px]" src="/icon 2.png" alt="" width={200} height={200} />
          <Image className="w-[167px] h-[167px] bg-[#f0ffe3] rounded-[10px]" src="/Letter.png" alt="" width={200} height={200} />
          <Image className="w-[167px] h-[167px] bg-[#f0ffe3] rounded-[10px]" src="/Gemini.png" alt="" width={200} height={200} />
          <Image className="w-[167px] h-[167px] bg-[#f0ffe3] rounded-[10px]" src="/image.png" alt="" width={200} height={200} />
          <Image className="w-[167px] h-[167px] bg-[#f0ffe3] rounded-[10px]" src="/laptop.png" alt="" width={200} height={200} />
        </div>
      </div>
    </div>
    </div>
  );
}
