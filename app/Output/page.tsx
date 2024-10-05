"use client"

// pages/sharedpage.tsx
import { useEffect, useState, Suspense, lazy } from 'react';
import { useSearchParams } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import SolanaWalletProvider from '../components/WalletProvider'; // Import the custom wallet provider

const Payment = lazy(() => import('../components/payment'));
const SolwishSkeleton = lazy(() => import('../components/lazyload'));

interface WishlistItem {
  name: string;
  price: number;
}

const SharedPage = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const { publicKey } = useWallet(); // Use wallet context

  useEffect(() => {
    const encodedWishlist = searchParams.get('wishlist');
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
    <SolanaWalletProvider> {/* Wrap the page with the wallet provider */}
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        {/* Wallet connection button for User B */}
        <div className="w-full flex justify-end p-4">
          <WalletMultiButton />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
          <h1 className="text-2xl font-bold mb-6">Shared Wishlist</h1>

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
                <span className="flex-1">{item.name}: ${item.price}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-lg font-semibold mb-2">Total Price: ${totalPrice}</h2>

          {/* Lazy-loaded payment component */}
          <Suspense fallback={<SolwishSkeleton />}>
            <Payment totalPrice={totalPrice} />
          </Suspense>
        </div>
      </div>
    </SolanaWalletProvider>
  );
};

export default SharedPage;