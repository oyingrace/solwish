const Lazyload = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="animate-pulse w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        <div className="h-6 bg-gray-300 rounded w-32 mb-6"></div>
        <ul className="space-y-4">
          <li className="h-5 bg-gray-300 rounded w-full"></li>
          <li className="h-5 bg-gray-300 rounded w-full"></li>
          <li className="h-5 bg-gray-300 rounded w-full"></li>
        </ul>
        <div className="mt-6">
          <div className="h-6 bg-gray-300 rounded w-24 mb-2"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Lazyload;