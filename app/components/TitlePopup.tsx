import React from 'react'

function TitlePopup() {
  return (
    <div className="w-[480px] h-[1020px] px-10 py-20 bg-[#f0ffe3] rounded-2xl flex-col justify-center items-center gap-10 inline-flex">
    <div className="w-3.5 h-3.5 relative" />
    <div className="self-stretch h-[700px] flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch h-[50px] flex-col justify-center items-center gap-0.5 flex">
            <div className="text-[#111111]/60 text-base font-medium font-['Gotham']">New wishlist</div>
            <div className="text-[#111111] text-2xl font-bold font-['Gotham']">List details</div>
        </div>
        <div className="flex-col justify-start items-start gap-3 flex">
            <div className="flex-col justify-start items-start gap-6 flex">
                <div className="flex-col justify-start items-start gap-6 flex">
                    <div className="flex-col justify-start items-start gap-1 flex">
                        <div className="text-center text-[#111111]/90 text-sm font-normal font-['Domine'] leading-normal">Title*</div>
                        <div className="px-6 bg-white rounded border border-[#cccccc]" />
                        <div className="flex-col justify-start items-start gap-0.5 flex">
                            <div className="text-[#111111]/10 text-xs font-normal font-['Gotham']">eg. My birthday 2024</div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-1 flex">
                        <div className="text-center text-[#111111]/90 text-sm font-normal font-['Domine'] leading-normal">Event date</div>
                        <div className="px-6 bg-white rounded border border-[#cccccc]" />
                        <div className="text-[#111111]/80 text-xs font-normal font-['Gotham']">4/09/2024</div>
                    </div>
                    <div className="flex-col justify-start items-start gap-1 flex">
                        <div className="text-center text-[#111111]/90 text-sm font-normal font-['Domine'] leading-normal">Description</div>
                        <div className="h-[72px] p-6 bg-white rounded border border-[#cccccc] flex-col justify-start items-start flex">
                            <div className="w-2 h-2 relative">
                                <div className="w-2 h-2 left-0 top-0 absolute">
                                    <div className="w-px h-px left-[7px] top-0 absolute bg-[#666666]" />
                                    <div className="w-px h-px left-[6px] top-[1px] absolute bg-[#666666]" />
                                    <div className="w-px h-px left-[5px] top-[2px] absolute bg-[#666666]" />
                                    <div className="w-px h-px left-[4px] top-[3px] absolute bg-[#666666]" />
                                    <div className="w-px h-px left-[3px] top-[4px] absolute bg-[#666666]" />
                                    <div className="w-px h-px left-[2px] top-[5px] absolute bg-[#666666]" />
                                    <div className="w-px h-px left-[1px] top-[6px] absolute bg-[#666666]" />
                                    <div className="w-px h-px left-0 top-[7px] absolute bg-[#666666]" />
                                </div>
                                <div className="w-1 h-1 left-[4px] top-[4px] absolute">
                                    <div className="w-px h-px left-[3px] top-0 absolute bg-[#666666]" />
                                    <div className="w-px h-px left-[2px] top-[1px] absolute bg-[#666666]" />
                                    <div className="w-px h-px left-[1px] top-[2px] absolute bg-[#666666]" />
                                    <div className="w-px h-px left-0 top-[3px] absolute bg-[#666666]" />
                                </div>
                            </div>
                        </div>
                        <div className="w-2 h-2 relative">
                            <div className="w-2 h-2 left-0 top-0 absolute">
                                <div className="w-px h-px left-[7px] top-0 absolute bg-[#666666]" />
                                <div className="w-px h-px left-[6px] top-[1px] absolute bg-[#666666]" />
                                <div className="w-px h-px left-[5px] top-[2px] absolute bg-[#666666]" />
                                <div className="w-px h-px left-[4px] top-[3px] absolute bg-[#666666]" />
                                <div className="w-px h-px left-[3px] top-[4px] absolute bg-[#666666]" />
                                <div className="w-px h-px left-[2px] top-[5px] absolute bg-[#666666]" />
                                <div className="w-px h-px left-[1px] top-[6px] absolute bg-[#666666]" />
                                <div className="w-px h-px left-0 top-[7px] absolute bg-[#666666]" />
                            </div>
                            <div className="w-1 h-1 left-[4px] top-[4px] absolute">
                                <div className="w-px h-px left-[3px] top-0 absolute bg-[#666666]" />
                                <div className="w-px h-px left-[2px] top-[1px] absolute bg-[#666666]" />
                                <div className="w-px h-px left-[1px] top-[2px] absolute bg-[#666666]" />
                                <div className="w-px h-px left-0 top-[3px] absolute bg-[#666666]" />
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[76px] flex-col justify-start items-start gap-3 flex">
                        <div className="self-stretch h-[76px] flex-col justify-start items-start gap-1 flex">
                            <div className="text-center text-[#111111]/90 text-sm font-normal font-['Domine'] leading-normal">Items on this list are for</div>
                            <div className="self-stretch justify-start items-start gap-10 inline-flex">
                                <div className="w-[180px] h-12 p-3 bg-[#02e289] rounded shadow justify-center items-center gap-2.5 flex">
                                    <div className="text-white text-base font-normal font-['Gotham']">Me</div>
                                </div>
                                <div className="w-[180px] h-12 p-3 rounded shadow border border-[#cccccc] justify-center items-center gap-2.5 flex">
                                    <div className="text-[#111111]/80 text-base font-normal font-['Gotham']">Someone else</div>
                                </div>
                                <div className="w-[180px] h-12 p-3 rounded border border-[#cccccc] justify-center items-center gap-2.5 flex">
                                    <div className="text-[#111111]/80 text-base font-normal font-['Gotham']">Me</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="flex-col justify-center items-start gap-2.5 flex">
                        <div className="self-stretch justify-start items-center gap-[5px] inline-flex">
                            <div className="w-4 h-4 relative" />
                            <div className="text-center text-[#111111]/50 text-sm font-normal font-['Domine'] leading-normal">Privacy and sharing</div>
                        </div>
                    </div>
                    <div className="h-[94px] justify-start items-center inline-flex">
                        <div className="flex-col justify-start items-start gap-[11px] inline-flex">
                            <div className="justify-start items-center gap-3 inline-flex">
                                <div className="w-6 h-6 relative" />
                                <div className="text-center text-[#111111]/80 text-sm font-normal font-['Gotham'] leading-normal">Private Wishlist </div>
                                <div className="w-4 h-4 relative">
                                    <div className="w-3 h-3 left-[2px] top-[2px] absolute bg-[#03e389] rounded-full" />
                                    <div className="w-4 h-4 left-0 top-0 absolute" />
                                </div>
                            </div>
                            <div className="justify-start items-center gap-3 inline-flex">
                                <div className="w-6 h-6 relative" />
                                <div className="text-center text-[#111111]/80 text-sm font-normal font-['Gotham'] leading-normal">Collaborative wishlist</div>
                                <div className="w-4 h-4 relative">
                                    <div className="w-3 h-3 left-[2px] top-[2px] absolute bg-[#03e389] rounded-full" />
                                    <div className="w-4 h-4 left-0 top-0 absolute" />
                                </div>
                            </div>
                            <div className="self-stretch justify-start items-center gap-3 inline-flex">
                                <div className="w-6 h-6 relative" />
                                <div className="text-center text-[#111111]/80 text-sm font-normal font-['Gotham'] leading-normal">Anyone with the link can view</div>
                                <div className="w-4 h-4 relative">
                                    <div className="w-3 h-3 left-[2px] top-[2px] absolute bg-[#03e389] rounded-full" />
                                    <div className="w-4 h-4 left-0 top-0 absolute" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-6 bg-white rounded border border-[#cccccc]" />
            <div className="flex-col justify-start items-start gap-0.5 flex">
                <div className="text-[#111111]/25 text-xs font-medium font-['Gotham']">Add collaborators</div>
            </div>
        </div>
    </div>
    <div className="flex-col justify-start items-start gap-6 flex">
        <div className="w-[180px] h-12 p-3 bg-[#02e289] rounded-3xl shadow justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-base font-medium font-['Gotham']">Next</div>
        </div>
        <div className="w-[180px] h-12 p-3 rounded-3xl justify-center items-center gap-2.5 inline-flex">
            <div className="text-[#03e389] text-base font-medium font-['Gotham']">Back</div>
        </div>
    </div>
</div>
  )
}

export default TitlePopup