'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import CopyLinkPopup from '../components/popup';
import ReciepientAddressModal from '../components/ReciepientAddressModal'; // Import recipient modal
import Link from 'next/link';

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
    if (wishlist.length > 0 && recipientAddress) { // Ensure recipient address is available
      const wishlistString = JSON.stringify(wishlist);
  
      // Add recipientAddress to the URL along with wishlist
      const link = `${window.location.origin}/Output?wishlist=${encodeURIComponent(wishlistString)}&recipient=${encodeURIComponent(recipientAddress)}`;
  
      setShareLink(link); // Store the generated link in state to display in popup
      setName('');
      setPrice(''); // Reset input fields after generating link
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

  const handleClosePopup = () => {
    setShareLink(null); // Close the popup
  };

  return (
    <div className="bg-[#F0FFE3] font-sans w-full min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-14 py-14">
      <div className="w-full flex justify-between items-center px-2 sm:px-5 mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold underline">Create Wishlist</h1>
        <button
          onClick={openModal}
          className="bg-blue-500 text-white py-2 px-3 sm:px-4 rounded hover:bg-blue-600"
        >
          Add Your Address
        </button>
      </div>
  
      <div className="flex flex-col lg:flex-row justify-between p-4">
        {/* Left Section - Input Fields */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <label className="font-[Domine] text-[16px] sm:text-[20px] text-[#111111] opacity-[90%]">Add unique wish items and experience.</label>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              placeholder="eg. Honeymoon fund, movie, coffee"
              className="border-none rounded py-3 pl-[27px] mb-4 w-full sm:w-[550px] placeholder:text-[12px]"
            />
          </div>
  
          <label className="font-[Domine] text-[16px] sm:text-[20px] text-[#111111] opacity-[90%]">Price</label>
          <div>
            <input
              type="number"
              value={price}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
              className="border-none rounded py-3 pl-[27px] mb-4 w-full sm:w-[550px] placeholder:text-[12px]"
              placeholder="Enter price"
            />
          </div>
  
          <label className="font-[Domine] text-[16px] sm:text-[20px] text-[#111111] opacity-[90%]">Allow crowd funding</label>
          <div className="relative mb-6">
            <input type="checkbox" className="absolute left-[1.2rem] top-[0.8rem] p-3" />
            <input
              type="text"
              placeholder="This allows your wishes to go live on Solwish platform"
              className="border-none rounded py-3 pl-[27px] w-full sm:w-[550px] placeholder:text-[12px] checked:underline"
              disabled
            />
          </div>
  
          <button
            onClick={handleAddToWishlist}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full sm:w-auto"
          >
            Add Wish
          </button>
        </div>
  
        {/* Right Section - Wishlist Display */}
        <div className="bg-[#FFF] w-full lg:w-[400px] shadow-sm p-8 sm:p-12 rounded-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 items-center">Your Wishlist</h2>
          <ul className="list-disc list-inside text-sm sm:text-base">
            {wishlist.map((item, index) => (
              <li key={index} className="mb-7 justify-between">
                {item.name}: {item.price} Sol
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mb-4">Total Price: {totalPrice.toFixed(2)} Sol</h3>
        </div>
      </div>
  
      {/* Recipient address modal */}
      <ReciepientAddressModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={saveRecipientAddress}
      />
  
      {/* Centered Buttons */}
      <div className="flex flex-col items-center justify-center mt-8">
        <button
          onClick={handleShare}
          className="bg-[#03E389] text-white py-2 px-6 rounded-[12px] shadow-slate-900 mb-4"
        >
          Generate Shareable Link
        </button>
  
        <button className="text-[#03E389] py-2 px-4">
          <Link href="/">Back</Link>
        </button>
      </div>
  
      {/* Display the Copy Link Popup if a link is generated */}
      {shareLink && <CopyLinkPopup link={shareLink} onClose={handleClosePopup} />}
    </div>
  );
};

export default Home;