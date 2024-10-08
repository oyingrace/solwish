'use client'

import React from 'react'
import Link from 'next/link'
import Input from '../Input/page'
import Image from 'next/image'

function footer() {
  return (
    <div className="w-full h-auto px-[120px] py-[50px] bg-[#111111] text-white justify-center items-center">
        <div className='flex justify-between gap-4'>
            <div>
                <button><Link href="/Input">Create your wallet</Link></button>
            </div>
            <div>
                <h1>ABOUT SOLWISH</h1>
                <p>Solwish is a site that helps people write a customised wishlist, send the link to their friends, and get their wishes funded <span><Link href="/">Read more</Link></span></p>
            </div>
            <div>
                <h1>SUBSCRIBE</h1>
                <p>Sign Up for Gifts, Giveaways & Good News!</p>
                <input
                type="text"
                placeholder="Your email address"
                className="border-none rounded py-3 pl-[27px] mb-4 w-full sm:w-[550px] placeholder:text-[12px]"
                />
            </div>
        </div>
        <div className='flex justify-between px-[120px]'>
            <div><h1>Solwish</h1></div>
            <div>
                <div>
                    <ul className='flex gap-4'>
                        <li><Link href=""><Image src="" alt="" width={30} height={30}/></Link></li>
                        <li><Link href=""><Image src="" alt="" width={30} height={30}/></Link></li>
                        <li><Link href=""><Image src="" alt="" width={30} height={30}/></Link></li>
                        <li><Link href=""><Image src="" alt="" width={30} height={30}/></Link></li>
                        <li><Link href=""><Image src="" alt="" width={30} height={30}/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer