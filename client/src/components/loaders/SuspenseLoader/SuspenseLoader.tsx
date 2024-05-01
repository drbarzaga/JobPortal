const SuspenseLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-8 h-8 border-2 border-t-4 border-gray-200 rounded-full animate-spin"></div>

      <div className="ml-2 text-sm text-gray-700">Loading...</div>
    </div>
  );
};

export default SuspenseLoader;
