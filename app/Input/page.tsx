'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import CopyLinkPopup from '../components/popup';
import ReciepientAddressModal from '../components/ReciepientAddressModal'; // Import recipient modal

interface WishlistItem {
  name: string;
  price: number;
}

const Home = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>(''); // Changed to string for better input handling
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [shareLink, setShareLink] = useState<string | null>(null); // State to store the generated link
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [recipientAddress, setRecipientAddress] = useState<string>(''); // Store recipient address
  const router = useRouter();

  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      calculateTotal(wishlist);
    }
  }, [wishlist]);

  const handleAddToWishlist = () => {
    if (name && price && parseFloat(price) > 0) {
      const newItem: WishlistItem = { name, price: parseFloat(price) };
      setWishlist((prev) => [...prev, newItem]);
      setName('');
      setPrice(''); // Reset price after adding
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
      setPrice(''); // Reset input fields after generating link
    } else {
      alert('Your wishlist is empty!');
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveRecipientAddress = (address: string) => {
    setRecipientAddress(address);
    closeModal();
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
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
        placeholder="Enter price"
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

      {/* Recipient address modal */}
      <ReciepientAddressModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={saveRecipientAddress}
      />

      <button
        onClick={openModal}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
      >
        Add Recipient Address
      </button>

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