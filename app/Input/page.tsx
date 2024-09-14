'use client'

// pages/index.tsx
import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import CopyLinkPopup from '../components/popup';

interface WishlistItem {
  name: string;
  price: number;
}

const Home = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [shareLink, setShareLink] = useState<string | null>(null); // State to store the generated link
  const router = useRouter();

  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      calculateTotal(wishlist);
    }
  }, [wishlist]);

  const handleAddToWishlist = () => {
    if (name && price > 0) {
      const newItem: WishlistItem = { name, price };
      setWishlist((prev) => [...prev, newItem]);
      setName('');
      setPrice(0);
    } else {
      alert('Please enter a valid name and price');
    }
  };

  const calculateTotal = (wishlist: WishlistItem[]) => {
    const total = wishlist.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  const handleShare = () => {
    if (wishlist.length > 0) {
      const wishlistString = JSON.stringify(wishlist);

      const link = `${window.location.origin}/Output?wishlist=${encodeURIComponent(wishlistString)}`;
      setShareLink(link); // Store the generated link in state to display in popup
      setName('');
      setPrice(0)
    } else {
      alert('Your wishlist is empty!');
    }
  };

  const handleClosePopup = () => {
    setShareLink(null); // Close the popup
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Create Wishlist</h1>
      <input
        type="text"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        placeholder="Item name"
        className="border p-2 mb-2 w-full"
      />
      <input
        type="number"
        value={price}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))}
        placeholder="Item price"
        className="border p-2 mb-2 w-full"
      />
      <button
        onClick={handleAddToWishlist}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-4"
      >
        Add to Wishlist
      </button>

      <h2 className="text-xl font-semibold mb-2">Your Wishlist</h2>
      <ul className="list-disc list-inside mb-4">
        {wishlist.map((item, index) => (
          <li key={index}>
            {item.name}: ${item.price}
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-semibold mb-4">Total Price: ${totalPrice}</h3>

      <button
        onClick={handleShare}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Generate Shareable Link
      </button>

      {/* Display the Copy Link Popup if a link is generated */}
      {shareLink && <CopyLinkPopup link={shareLink} onClose={handleClosePopup} />}
    </div>
  );
};

export default Home;