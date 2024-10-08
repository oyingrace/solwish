import { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Solwish?",
      answer: "A Solana-powered wishlist platform",
    },
    {
      question: "How do I create a wishlist on Solwish?",
      answer: "To create a wishlist on Solwish, simply sign up for an account and start adding items. You can customize your wishlist by adding descriptions, images, and desired amounts for each item.",
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes, it's safe to share your wishlist on Solwish. We prioritize user privacy and security, ensuring that your personal information and transactions are protected.",
    },
    {
      question: "Does it have the ability to convert my funding?",
      answer: ""
    },
    {
      question: "Does it have payment type restrictions?",
      answer: `No, Solwish does not have payment type restrictions. As a Solana-based platform, all transactions are conducted using Solana cryptocurrency. This means you can only use a Solana wallet to contribute to wishlists or withdraw funds.
      If you dont have a Solana wallet, you can easily create one using a supported wallet provider.`,
    },
    {
      question: "Can I withdraw funds from my Solwish account?",
      answer: "Yes, you can withdraw funds from your Solwish account. Simply log in to your account and initiate a withdrawal."
    },
  ];

  return (
    <div className="bg-green-100 min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-green-900 mb-6">
          Have Questions? We have Got Answers
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-green-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-4 text-left"
              >
                <span className="text-lg font-semibold text-green-800">
                  {faq.question}
                </span>
                <span>
                  {activeIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 transform rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <div className="pb-4 text-green-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;