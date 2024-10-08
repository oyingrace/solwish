// components/RecipientAddressModal.tsx
import { FC, useState } from 'react';

interface RecipientAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (address: string) => void;
}

const RecipientAddressModal: FC<RecipientAddressModalProps> = ({ isOpen, onClose, onSave }) => {
  const [address, setAddress] = useState<string>('');

  const handleSave = () => {
    if (address) {
      onSave(address);
      onClose(); // Close modal after saving
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Enter Wallet Address</h2>
        <input
          type="text"
          placeholder="Enter Solana Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-4 bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipientAddressModal;