"use client"

import Image from "next/image";
import Link from "next/link";
import Input from "./Input/page";
import HeroSection from "./components/heroSection";
import Footer from "./components/footer"


export default function Home() {
  return (
    <div className="w-full">
      {/* Hero section */}
      <div>
        <HeroSection />
      </div>
      <div>
        <div className=" h-full p-16 bg-[#e1f6ce] flex-col justify-start items-start inline-flex">
            <div className="self-stretch justify-center items-center gap-16 inline-flex">
                <Image className="w-[500px] h-[600px]" src="/house.png" alt="" width={700} height={700} />
                <div className="flex-col justify-start items-start gap-10 inline-flex">
                    <div className="w-[515px] text-black text-5xl font-normal font-[Domine] leading-[54.76px]">If you could fund one wish, what would it be?</div>
                    <div className="w-[727px] text-[#111111]/70 text-[20px] font-[Gotham] font-[400] leading-[32px] tracking-[-0.2px]">Imagine having the power to grant a single wish. What would yours be? Would it be a tangible item, a life-changing experience, or perhaps something more intangible? Share your dream family, and friends and lets explore the possibilities together</div>
                </div>
            </div>
        </div>
        <div className="absolute top-[39rem] left-0 justify-center gap-10 items-start p-4">
            <div className="w-full pl-4 pr-[17px] pt-4 pb-[17px] gap-10  justify-center items-center inline-flex">
            <div className="mx-auto rounded-[10px]">
                <Image className="w-[167px] h-[167px] bg-[#f0ffe3] rounded-[10px] shadow" src="/Gemini.png" alt="" width={200} height={200} /> 
                </div>
                <div className="mx-auto rounded-[10px]">
                <Image className="w-[167px] h-[167px] bg-[#f0ffe3] rounded-[10px] shadow" src="/Snowglobe.png" alt="" width={200} height={200} />
                </div>
                <div className="mx-auto rounded-[10px]">
                <Image className="w-[167px] h-[167px] bg-[#f0ffe3] rounded-[10px] shadow" src="/image.png" alt="" width={200} height={200} />
                </div>
                <div className="mx-auto rounded-[10px]">
                <Image className="w-[167px] h-[167px] bg-[#f0ffe3] rounded-[10px] shadow" src="/icon 2.png" alt="" width={200} height={200} />
                </div>
                <div className="mx-auto rounded-[10px]">
                <Image className="w-[167px] h-[167px] bg-[#f0ffe3] rounded-[10px] shadow" src="/Letter.png" alt="" width={200} height={200} />
                </div>
                <div className="mx-auto rounded-[10px]">
                <Image className="w-[167px] h-[167px] bg-[#f0ffe3] rounded-[10px] shadow" src="/Gemini.png" alt="" width={200} height={200} />
                </div>
                <div className="mx-auto rounded-[10px]">
                <Image className="w-[167px] h-[167px] bg-[#f0ffe3] rounded-[10px] shadow" src="/image.png" alt="" width={200} height={200} />
                </div>
                {/* <div className="mx-auto rounded-[10px]">
                <Image className="w-[167px] h-[167px] bg-[#f0ffe3] rounded-[10px] shadow" src="/laptop.png" alt="" width={200} height={200} />
                </div> */}
            </div>
            </div>
        </div>
        <div className="w-full h-full">
            <div className="w-full h-[2040px] px-[120px] py-20 bg-[#e1f6ce] flex-col justify-center items-center gap-[180px] inline-flex">
                    <div className="self-stretch h-[274px] justify-center items-center gap-20 inline-flex">
                        <div className="grow shrink basis-0 h-64 justify-start items-start gap-3 flex">
                            <div className="h-[86px] flex-col justify-center items-center gap-1 inline-flex">
                                <div className="w-[54px] grow shrink basis-0 text-[#ed8149] text-[40px] font-medium font-['Gotham']">01</div>
                                <div className="w-[30px] h-[0px] origin-top-left rotate-90 border-4 border-[#ed8149]"></div>
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
                                <div className="self-stretch justify-start items-start gap-[22px] inline-flex">
                                    <div className="w-[423px] pr-[31px] justify-start items-center flex">
                                        <div className="w-[392px] text-[#111111]/80 text-[40px] font-bold font-['Gotham']">Customizable Wishlist</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-[120px] flex-col justify-start items-start gap-3 flex">
                                    <div className="self-stretch"><span className="text-[#111111]/70 text-base font-normal font-['Gotham'] leading-normal">Here at </span><span className="text-[#9b0600] text-base font-normal font-['Gotham'] leading-normal">SOLWISH</span><span className="text-[#111111]/70 text-base font-normal font-['Gotham'] leading-normal">, you get the chance of bringing your deepest wishes to life. No more awkward gifts, you get exactly what you want. Involving loved ones in your journey not only helps you achieve your dreams but also builds a legacy of collaboration and mutual support. Solwish empowers you to create custom wishlists that reflect your unique desires and aspirations</span></div>
                                </div>
                            </div>
                        </div>
                        <Image className="w-[200px] h-[200px] shadow" src="/Sleigh.png" alt="" width={200} height={200}/>
                    </div>
                    <div className="self-stretch h-[274px] justify-center items-center gap-20 inline-flex">
                        <div className="w-[200px] h-[200px] relative">
                            <Image className="w-[200px] h-[196.15px] left-0 top-0 absolute shadow" src="/Gemini.png" alt="" width={200} height={200} />
                        </div>
                        <div className="grow shrink basis-0 h-64 justify-start items-start gap-3 flex">
                            <div className="h-[86px] flex-col justify-center items-center gap-1 inline-flex">
                                <div className="w-[54px] grow shrink basis-0 text-[#ed8149] text-[40px] font-medium font-['Gotham']">02</div>
                                <div className="w-[30px] h-[0px] origin-top-left rotate-90 border-4 border-[#ed8149]"></div>
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
                                <div className="self-stretch justify-start items-start gap-[22px] inline-flex">
                                    <div className="w-[423px] pr-[31px] justify-start items-center flex">
                                        <div className="w-[392px] text-[#111111]/80 text-[40px] font-bold font-['Gotham']">Secure Transactions</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-[120px] flex-col justify-start items-start gap-3 flex">
                                    <div className="self-stretch text-[#111111]/70 text-base font-normal font-['Gotham'] leading-normal">Enjoy secure and efficient transactions powered by Solana. Our platform makes it easy for supporters to contribute to your wishes, ensuring a seamless and transparent experience for everyone involved. Solana blockchain technology provides a secure and reliable way to handle transactions, giving you peace of mind and confidence in the process.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[274px] justify-center items-center gap-20 inline-flex">
                        <div className="grow shrink basis-0 h-64 justify-start items-start gap-3 flex">
                            <div className="h-[86px] flex-col justify-start items-center gap-1 inline-flex">
                                <div className="w-[54px] grow shrink basis-0 text-[#ed8149] text-[40px] font-medium font-['Gotham']">03</div>
                                <div className="w-[30px] h-[0px] origin-top-left rotate-90 border-4 border-[#ed8149]"></div>
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
                                <div className="self-stretch justify-start items-start gap-[22px] inline-flex">
                                    <div className="pr-[74px] justify-start items-center flex">
                                        <div className="w-[540px] text-[#111111]/80 text-[40px] font-bold font-['Gotham']">Community-Driven Support</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-[120px] flex-col justify-start items-start gap-3 flex">
                                    <div className="self-stretch text-[#111111]/70 text-base font-normal font-['Gotham'] leading-normal">Connect with a supportive community of like-minded individuals who share your passion for dreams and aspirations. Engage in meaningful conversations, offer support to others, and find inspiration within our vibrant community. Join discussions, share your experiences, and forge lasting connections with people who understand your dreams.</div>
                                </div>
                            </div>
                        </div>
                        <Image className="w-[200px] h-[200px] shadow" src="/Wallet.png" alt="" width={200} height={200} />
                    </div>
                    <div className="self-stretch h-[274px] justify-center items-center gap-20 inline-flex">
                        <Image className="w-[200px] h-[200px] shadow" src="/Wallet.png" alt="" width={200} height={200} />
                        <div className="grow shrink basis-0 h-52 justify-start items-start gap-3 flex">
                            <div className="h-[86px] flex-col justify-start items-center gap-1 inline-flex">
                                <div className="w-16 grow shrink basis-0 text-[#ed8149] text-[40px] font-medium font-['Gotham']">04</div>
                                <div className="w-[30px] h-[0px] origin-top-left rotate-90 border-4 border-[#ed8149]"></div>
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
                                <div className="self-stretch justify-start items-start gap-[22px] inline-flex">
                                    <div className="pr-[169px] justify-start items-center flex">
                                        <div className="w-[435px] text-[#111111]/80 text-[40px] font-bold font-['Gotham']">Secure Wish Sharing</div>
                                    </div>
                                </div>
                                <div className="self-stretch h-[120px] flex-col justify-start items-start gap-3 flex">
                                    <div className="self-stretch text-[#111111]/70 text-base font-normal font-['Gotham'] leading-normal">Easily share your wishlist with friends, family, and social media followers. Our platform ensures privacy and security, allowing you to share your wishes confidently without worrying about your personal information. You can choose to make your wishlist public or private, depending on your preferences.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-80 h-16 px-2.5 py-5 bg-[#ed8149] rounded-lg shadow justify-center items-center gap-2.5 inline-flex">
                        <div className="text-white text-xl font-normal font-['Gotham'] cursor-pointer">Start now</div>
                    </div>
            </div>
      </div>
      <div className="w-full h-[661px] p-20 bg-[#e1f6ce] flex-col justify-center items-center gap-6 inline-flex">
            <div className="flex-col justify-start items-center flex">
                <div className="w-[100px] h-[118px] relative">
                </div>
                <div className="justify-center items-center gap-[100px] inline-flex" />
            </div>
            <div className="justify-start items-center gap-[50px] inline-flex" />
            <div className="w-[1108px] justify-between items-center inline-flex">
                <div className="h-[59px] justify-between items-start flex">
                    <div className="w-[50px] h-[59px] relative">
                        <div className="w-6 h-6 left-[13px] top-[18px] absolute mix-blend-overlay" />
                    </div>
                    <div className="w-[50px] h-[59px] relative">
                        <div className="w-6 h-6 left-[13px] top-[18px] absolute mix-blend-overlay" />
                    </div>
                </div>
                <div className="justify-start items-center gap-[236px] flex">
                    <div className="w-[50px] h-[59px] relative" />
                    <div className="w-[50px] h-[59px] relative">
                        <div className="w-6 h-6 left-[13px] top-[18px] absolute mix-blend-overlay" />
                    </div>
                </div>
            </div>
            <div className="w-[1199px] grow shrink basis-0 justify-between items-center inline-flex">
                <div className="justify-start items-center gap-[104px] flex">
                    <div className="text-[#111111]/70 text-base font-normal font-['Gotham Office'] leading-loose">Create Your Wishlist</div>
                    <div className="text-[#111111]/70 text-base font-normal font-['Gotham Office'] leading-loose">Share with Friends</div>
                </div>
                <div className="h-8 justify-center items-center gap-[180px] flex">
                    <div className="text-[#111111]/70 text-base font-normal font-['Gotham Office'] leading-loose">Get Funded</div>
                    <div className="text-[#111111]/70 text-base font-normal font-['Gotham Office'] leading-loose">Track Progress</div>
                </div>
            </div>
            <div className="self-stretch grow shrink basis-0 justify-center items-center gap-[273px] inline-flex">
                <div className="h-[120px] justify-start items-center gap-16 flex">
                    <div className="grow shrink basis-0 h-[120px] p-6 bg-white rounded-2xl shadow justify-center items-center gap-2.5 flex">
                        <div className="w-[177px] text-center text-[#111111]/70 text-xs font-normal font-['Gotham'] leading-[18px]">Add your heart desires, with details and prices. <br/>Remember- No dream is impossible nor unattainable</div>
                    </div>
                    <div className="grow shrink basis-0 h-[120px] p-6 bg-white rounded-2xl shadow justify-center items-center gap-2.5 flex">
                        <div className="grow shrink basis-0 text-center text-[#111111]/70 text-xs font-normal font-['Gotham'] leading-[18px]">Generate a unique link. Send the link to your, friends, family, and followers. And let them fund your wishes</div>
                    </div>
                </div>
                <div className="grow shrink basis-0 h-[120px] justify-start items-center gap-[62px] flex">
                    <div className="grow shrink basis-0 h-[120px] p-6 bg-white rounded-2xl shadow justify-center items-center gap-2.5 flex">
                        <div className="grow shrink basis-0 text-center text-[#111111]/70 text-xs font-normal font-['Gotham'] leading-[18px]">As people discover your wishlist, they can contribute Solana to support specific items or the overall goal</div>
                    </div>
                    <div className="grow shrink basis-0 h-[120px] p-6 bg-white rounded-2xl shadow justify-center items-center gap-2.5 flex">
                        <div className="w-[172px] text-center text-[#111111]/70 text-xs font-normal font-['Gotham'] leading-[18px]">Monitor the progress of your wishlist and your can start enjoying the fulfillment of your dreams</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[1440px] h-[1032px] relative bg-[#f0ffe3]">
            <div className="w-[2160px] h-60 left-[-360px] top-[-120px] absolute bg-[#e1f6ce] rounded-full" />
            <div className="w-[2160px] h-60 left-[-360px] top-[912px] absolute bg-[#e1f6ce] rounded-full" />
            <div className="left-[437px] top-[176px] absolute flex-col justify-start items-center gap-4 inline-flex">
                <div className="w-[565px] text-center text-[#111111] text-5xl font-normal font-['Domine'] leading-[88px]">Everything you need to know</div>
            </div>
            <div className="left-[163px] top-[437px] absolute justify-start items-center gap-[120px] inline-flex">
                <div className="w-[465px] flex-col justify-start items-start gap-4 inline-flex">
                    <div className="text-[#111111] text-[32px] font-normal font-['Domine'] leading-10">Personalized wish fulfillment</div>
                    <div className="self-stretch text-neutral-900/60 text-base font-normal font-['Gotham'] leading-normal">Solwish empowers individuals to create unique wishlists that reflect their personal aspirations, allowing for a truly customized experience.</div>
                </div>
                <div className="w-[528px] h-32 flex-col justify-start items-start gap-4 inline-flex">
                    <div className="text-[#111111] text-[32px] font-normal font-['Domine'] leading-10">Secure and Transparent Platform</div>
                    <div className="self-stretch text-[#111111]/60 text-base font-normal font-['Gotham'] leading-normal">leveraging solana blockchain, our platform prioritizes the security of your data and transactions. We provide a transparent environment where you can track the progress of your wishes and interact with supporters.</div>
                </div>
            </div>
            <div className="left-[163px] top-[645px] absolute justify-start items-center gap-[89px] inline-flex">
                <div className="w-[496.50px] h-32 flex-col justify-start items-start gap-4 inline-flex">
                    <div className="text-[#111111] text-[32px] font-normal font-['Domine'] leading-10">Supportive Community</div>
                    <div className="self-stretch text-neutral-900/60 text-base font-normal font-['Gotham'] leading-normal">Join a vibrant community of like-minded individuals who share your passion for dreams and aspirations. Connect with others, offer support, and find inspiration.</div>
                </div>
                <div className="w-[496.50px] h-32 flex-col justify-start items-start gap-4 inline-flex">
                    <div className="text-[#111111] text-[32px] font-normal font-['Domine'] leading-10">Easy to Use</div>
                    <div className="self-stretch text-[#111111]/60 text-base font-normal font-['Gotham'] leading-normal">Solwish is designed with simplicity in mind. Our user-friendly interface makes it easy to create, share, and track your wishes, ensuring a seamless experience.</div>
                </div>
            </div>
        </div>
        <div className="w-full h-[792px] px-[120px] py-16 bg-[#e1f6ce] justify-between items-start inline-flex">
            <div className="flex-col justify-start items-center gap-4 inline-flex">
                <div className="w-[680px] text-[#111111] text-[40px] font-normal font-['Domine'] uppercase leading-[64px]">HAVE QUESTIONS? WE’VE GOT ANSWERS</div>
            </div>
            <div className="w-[496px] pt-2 flex-col justify-start items-start gap-6 inline-flex">
                <div className="h-24 pb-6 border-b border-black/20 flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch justify-center items-start gap-4 inline-flex">
                        <div className="grow shrink basis-0 text-[#111111] text-2xl font-normal font-['Gotham'] uppercase leading-loose">What is SOLWISH?</div>
                        <div className="py-1 justify-center items-center flex">
                            <div className="w-6 h-6 relative origin-top-left -rotate-180" />
                        </div>
                    </div>
                    <div className="self-stretch text-[#111111]/60 text-base font-normal font-['Inter'] leading-normal"> A Solana-powered wishlist platform</div>
                </div>
                <div className="pb-6 border-b border-black/20 flex-col justify-start items-start gap-4 flex">
                    <div className="w-[496px] justify-center items-start gap-4 inline-flex">
                        <div className="grow shrink basis-0 text-[#111111] text-2xl font-normal font-['Gotham'] uppercase leading-loose">How do I create a wishlist on Solwish?</div>
                        <div className="py-1 justify-center items-center flex">
                            <div className="w-6 h-6 relative" />
                        </div>
                    </div>
                </div>
                <div className="pb-6 border-b border-black/20 flex-col justify-start items-start gap-4 flex">
                    <div className="w-[496px] justify-center items-start gap-4 inline-flex">
                        <div className="grow shrink basis-0 text-[#111111] text-2xl font-normal font-['Gotham'] uppercase leading-loose">Is my payment information secure?</div>
                        <div className="py-1 justify-center items-center flex">
                            <div className="w-6 h-6 relative" />
                        </div>
                    </div>
                </div>
                <div className="h-[88px] pb-6 border-b border-black/20 flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch justify-center items-start gap-4 inline-flex">
                        <div className="grow shrink basis-0 text-[#111111] text-2xl font-normal font-['Gotham'] uppercase leading-loose">does it have the ability to convert my funding?</div>
                        <div className="py-1 justify-center items-center flex">
                            <div className="w-6 h-6 relative" />
                        </div>
                    </div>
                </div>
                <div className="h-[88px] pb-6 border-b border-black/20 flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch justify-center items-start gap-4 inline-flex">
                        <div className="grow shrink basis-0 text-[#111111] text-2xl font-normal font-['Gotham'] uppercase leading-loose">does it have payment type restrictions?</div>
                        <div className="py-1 justify-center items-center flex">
                            <div className="w-6 h-6 relative" />
                        </div>
                    </div>
                </div>
                <div className="h-[88px] pb-6 border-b border-black/20 flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch justify-center items-start gap-4 inline-flex">
                        <div className="grow shrink basis-0 text-[#111111] text-2xl font-normal font-['Gotham'] uppercase leading-loose">Can I withdraw funds from my Solwish account?</div>
                        <div className="py-1 justify-center items-center flex">
                            <div className="w-6 h-6 relative" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}
