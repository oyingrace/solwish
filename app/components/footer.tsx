import React from 'react'

function footer() {
  return (
    <div className="h-96 px-[120px] py-[50px] bg-[#111111] justify-center items-center gap-[370px] inline-flex">
        <div className="justify-start items-start flex">
            <div className="w-[280px] h-16 px-10 py-5 bg-[#e1f6ce] rounded-lg shadow justify-center items-center gap-2.5 flex">
                <div className="w-[230px] h-6 text-center text-[#111111] text-xl font-normal font-[Gotham] leading-10 tracking-wide">Create your wishlist</div>
            </div>
        </div>
        <div className="w-[1200px] h-12 pt-6 border-t border-white/20 justify-between items-end flex">
            <div className="grow shrink basis-0 h-6 justify-start items-end gap-2 flex" />
            <div className="justify-end items-end gap-10 flex">
                <div className="justify-center items-center gap-4 flex">
                    <div className="w-6 flex-col justify-center items-center inline-flex">
                        <div className="w-6 h-6 relative" />
                    </div>
                    <div className="w-6 flex-col justify-center items-center inline-flex">
                        <div className="w-6 h-6 relative" />
                    </div>
                    <div className="w-6 flex-col justify-center items-center inline-flex">
                        <div className="w-6 h-6 relative" />
                    </div>
                    <div className="w-6 flex-col justify-center items-center inline-flex">
                        <div className="w-6 h-6 relative" />
                    </div>
                    <div className="w-6 flex-col justify-center items-center inline-flex">
                        <div className="w-6 h-6 relative" />
                    </div>
                </div>
                <div className="rounded-xl border justify-center items-end gap-2 flex">
                    <div className="text-white text-base font-medium font-[Gotham] uppercase leading-normal tracking-wide">back to top</div>
                </div>
            </div>
        </div>
        <div className="grow shrink basis-0 h-[140px] justify-start items-start gap-[120px] flex">
            <div className="w-[238px] flex-col justify-start items-start gap-10 inline-flex">
                <div className="self-stretch text-white/80 text-sm font-medium font-['Gotham'] capitalize leading-none">ABOUT SOLWISH</div>
                <div className="self-stretch"><span className="text-white/60 text-xs font-normal font-[Gotham] leading-none tracking-tight">Solwish is a site that helps people write a customised wishlist, send the link to their friends, and get their wishes funded </span><span className="text-white text-xs font-normal font-[Gotham] underline leading-none tracking-tight">Read more</span></div>
            </div>
            <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-10 inline-flex">
                <div className="text-center text-white/80 text-sm font-medium font-[Gotham] capitalize leading-none">SUBSCRIBE</div>
                <div className="self-stretch h-[84px] flex-col justify-center items-center gap-3 flex">
                    <div className="self-stretch text-white/70 text-[10px] font-normal font-[Gotham] leading-none tracking-tight">Sign Up for Gifts, Giveaways & Good News!</div>
                    <div className="self-stretch h-10 p-3 bg-[#e1f6ce] rounded border justify-start items-center gap-10 inline-flex">
                        <div className="text-[#111111]/40 text-[11px] font-normal font-[Gotham] leading-none tracking-tight">Your email address</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer