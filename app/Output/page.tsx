'use client'

// pages/shared.tsx
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface WishlistItem {
  name: string;
  price: number;
}

const SharedPage = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set()); // Set of checked item indices
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

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
        };
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
      .filter((_, index) => !checkedItems.has(index)) // Filter out checked items
      .reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-100 text-red-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!wishlist.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-yellow-100 text-yellow-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">No Wishlist Found</h2>
          <p>It looks like there is no wishlist data to display. Please check your link and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <Suspense fallback={<div>Loading Wishlist...</div>}>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
          <h1 className="text-2xl font-bold mb-6">Shared Wishlist</h1>

          <ul className="list-none p-0">
            {wishlist.map((item, index) => (
              <li
                key={index}
                // className={flex items-center mb-2 ${checkedItems.has(index) ? 'line-through text-gray-500' : ''}}
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
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Proceed to Payment
          </button>
        </div>
      </Suspense>
    </div>
  );
};

export default SharedPage;