/* 'use client'

import { useEffect, useState, Suspense, lazy } from 'react';
import { useSearchParams } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import SolanaWalletProvider from '../components/WalletProvider'; // Import the custom wallet provider
import Lazyload from '../components/lazyload';

const Payment = lazy(() => import('../components/payment'));

interface WishlistItem {
  name: string;
  price: number;
}

const Page = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [recipientAddress, setRecipientAddress] = useState<string>(''); // State for recipient address
  const searchParams = useSearchParams();
  const { publicKey } = useWallet(); // Use wallet context

  useEffect(() => {
    const encodedWishlist = searchParams.get('wishlist');
    const recipient = searchParams.get('recipient'); // Get recipient address from query params

    if (encodedWishlist) {
      try {
        const decodedWishlist = decodeURIComponent(encodedWishlist as string);
        const parsedWishlist = JSON.parse(decodedWishlist);

        if (Array.isArray(parsedWishlist)) {
          setWishlist(parsedWishlist);
          calculateTotal(parsedWishlist, new Set());
        } else {
          setError('Invalid wishlist data.');
        }
      } catch (err) {
        setError('Error decoding or parsing wishlist.');
      }
    }

    if (recipient) {
      setRecipientAddress(recipient); // Set the recipient address
    }
  }, [searchParams]);

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedItems = new Set(checkedItems);
    if (updatedCheckedItems.has(index)) {
      updatedCheckedItems.delete(index);
    } else {
      updatedCheckedItems.add(index);
    }
    setCheckedItems(updatedCheckedItems);
    calculateTotal(wishlist, updatedCheckedItems);
  };

  const calculateTotal = (items: WishlistItem[], checkedItems: Set<number>) => {
    const total = items
      .filter((_, index) => !checkedItems.has(index))
      .reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  return (
    <SolanaWalletProvider> 
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
        <div className='w-full flex flex-col md:flex-row justify-between'>
          <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-0">Solwish</h1>
          
          <div className="w-full md:w-auto flex justify-end p-4">
            <WalletMultiButton />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
          <h1 className="text-xl md:text-2xl font-bold mb-6">Shared Wishlist</h1>

          <ul className="list-none p-0">
            {wishlist.map((item, index) => (
              <li
                key={index}
                className={`flex items-center mb-2 ${checkedItems.has(index) ? 'line-through text-gray-500' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={checkedItems.has(index)}
                  onChange={() => handleCheckboxChange(index)}
                  className="mr-2"
                />
                <span className="flex-1">{item.name}: {item.price} Sol</span>
              </li>
            ))}
          </ul>

          <h2 className="text-lg md:text-xl font-semibold mb-2">Total Price: {totalPrice.toFixed(2)} Sol</h2>
          
          <Suspense fallback={<Lazyload />}>
            <div className="flex justify-center mt-6">
              <Payment totalPrice={totalPrice} recipientAddress={recipientAddress} /> {
            </div>
          </Suspense>
        </div>
      </div>
    </SolanaWalletProvider>
  );
};

export default Page; */


'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import dynamic from 'next/dynamic';
import SolanaWalletProvider from '../components/WalletProvider';
import Lazyload from '../components/lazyload';

const Payment = dynamic(() => import('../components/payment'), { ssr: false });

interface WishlistItem {
  name: string;
  price: number;
}

const Page = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [recipientAddress, setRecipientAddress] = useState<string>('');
  const searchParams = typeof window !== 'undefined' ? useSearchParams() : null;
  const { publicKey } = useWallet();

  useEffect(() => {
    if (searchParams) {
      const encodedWishlist = searchParams.get('wishlist');
      const recipient = searchParams.get('recipient');

      if (encodedWishlist) {
        try {
          const decodedWishlist = decodeURIComponent(encodedWishlist as string);
          const parsedWishlist = JSON.parse(decodedWishlist);

          if (Array.isArray(parsedWishlist)) {
            setWishlist(parsedWishlist);
            calculateTotal(parsedWishlist, new Set());
          } else {
            setError('Invalid wishlist data.');
          }
        } catch (err) {
          setError('Error decoding or parsing wishlist.');
        }
      }

      if (recipient) {
        setRecipientAddress(recipient);
      }
    }
  }, [searchParams]);

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedItems = new Set(checkedItems);
    if (updatedCheckedItems.has(index)) {
      updatedCheckedItems.delete(index);
    } else {
      updatedCheckedItems.add(index);
    }
    setCheckedItems(updatedCheckedItems);
    calculateTotal(wishlist, updatedCheckedItems);
  };

  const calculateTotal = (items: WishlistItem[], checkedItems: Set<number>) => {
    const total = items
      .filter((_, index) => !checkedItems.has(index))
      .reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  return (
    <SolanaWalletProvider>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
        <div className='w-full flex flex-col md:flex-row justify-between'>
          <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-0">Solwish</h1>
          <div className="w-full md:w-auto flex justify-end p-4">
            <WalletMultiButton />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
          <h1 className="text-xl md:text-2xl font-bold mb-6">Shared Wishlist</h1>

          <ul className="list-none p-0">
            {wishlist.map((item, index) => (
              <li
                key={index}
                className={`flex items-center mb-2 ${checkedItems.has(index) ? 'line-through text-gray-500' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={checkedItems.has(index)}
                  onChange={() => handleCheckboxChange(index)}
                  className="mr-2"
                />
                <span className="flex-1">{item.name}: {item.price} Sol</span>
              </li>
            ))}
          </ul>

          <h2 className="text-lg md:text-xl font-semibold mb-2">Total Price: {totalPrice.toFixed(2)} Sol</h2>

          <Suspense fallback={<Lazyload />}>
            <div className="flex justify-center mt-6">
              <Payment totalPrice={totalPrice} recipientAddress={recipientAddress} />
            </div>
          </Suspense>
        </div>
      </div>
    </SolanaWalletProvider>
  );
};

export default Page;
