"use client"

// inputPage.tsx
import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import ReciepientAddressModal from '../components/ReciepientAddressModal';

interface WishlistItem {
  name: string;
  price: number;
}

const InputPage = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [shareLink, setShareLink] = useState<string | null>(null);
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
    if (wishlist.length > 0 && recipientAddress) {
      const wishlistString = JSON.stringify(wishlist);

      const link = `${window.location.origin}/SharedPage?wishlist=${encodeURIComponent(
        wishlistString
      )}&recipient=${recipientAddress}`;
      setShareLink(link); // Store the generated link in state
    } else {
      alert('Your wishlist or recipient address is missing!');
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
        placeholder="0"
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
        onClick={openModal}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add Recipient Address
      </button>

      <button
        onClick={handleShare}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Generate Shareable Link
      </button>

      {isModalOpen && (
        <ReciepientAddressModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSave={saveRecipientAddress}
        />
      )}

      {shareLink && (
        <div className="mt-4">
          <p>Share this link:</p>
          <a href={shareLink} target="_blank" className="text-blue-500 underline">
            {shareLink}
          </a>
        </div>
      )}
    </div>
  );
};

export default InputPage;