import Link from 'next/link'
import React from 'react'
import Input from "../../app/Input/page"

function heroSection() {
  return (
    <div>
      <div>
        <nav>
            <h1>SOLWISH</h1>
            <ul>
                <li><Link href="/">Service</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">How it works</Link></li>
                <li><Link href="/">FAQ</Link></li>
            </ul>
        </nav>
      </div>
      <div><Link href="/Input">Make a wish</Link></div>
    </div>
  )
}

export default heroSection