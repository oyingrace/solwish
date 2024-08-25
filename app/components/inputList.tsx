import Link from 'next/link';
import React, { useState } from 'react'
import Output from "../Output/page";

type Wish = {
    wish: string,
    amount: number
}

const InputList = () => {
    const [ wish, setWish ] = useState("");
    const [ wishList, setWishlist ] = useState<Wish[]>([]);
    const [ amount, setAmount ] = useState(0);


    const handleAddWish = () => {
        if (wish && amount) {
            const updatedWishlist = [...wishList, { wish, amount}]
            setWishlist(updatedWishlist);
            setWish('');
            setAmount(0);
        }
    };
    
    const caluculateTotalAmount = () => {
        return wishList.reduce((total: any, item: { amount: any; }) => total + item.amount, 0).toFixed(2);
    };

    const generateShareableLink = () => {
        const encodedWish = "https://solwish.vercel.app/output"
        alert(`Shareable Link: ${encodedWish}`);
    };
    
  return (
    <div>
        <h1>Wishlist</h1>
        <input 
          type='text'
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          placeholder='Add your wish'
        />
        <input 
          type='number'
          value={amount}
          onChange={(e) => setAmount(e.target.valueAsNumber)}
          placeholder='Add the price of the wish'
        />
        <button onClick={handleAddWish}>Add Wish</button>
      <div>
        <ul>
          {wishList.map((item: any, index: number) => (
            <li key={index}>
              {item.wish}: {item.amount} Sol
            </li>
          ))}
        </ul>
      </div>
      <h1>Total: {caluculateTotalAmount()} Sol</h1>
      <p><Link href="/Output"></Link></p>
      {wishList.length > 0 && (
        <div>
          <button onClick={generateShareableLink}>Generate Link</button>
        </div>
      )}
    </div>
  )
}

export default InputList