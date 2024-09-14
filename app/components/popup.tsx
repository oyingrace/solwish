// components/CopyLinkPopup.tsx
import { FC, useState } from 'react';

interface CopyLinkPopupProps {
  link: string;
  onClose: () => void;
}

const CopyLinkPopup: FC<CopyLinkPopupProps> = ({ link, onClose }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000); // Hide success message after 3 seconds
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Shareable Link</h2>
        <p className="mb-4 text-gray-700 break-all">{link}</p>
        <button
          onClick={handleCopy}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Copy Link
        </button>
        {isCopied && (
          <p className="text-green-600 mt-2">Link copied to clipboard!</p>
        )}
        <button
          onClick={onClose}
          className="bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CopyLinkPopup;