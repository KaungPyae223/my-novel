import React from 'react'

const PageLoading = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="p-8 bg-white rounded-xl shadow-lg w-80 animate-fadeIn">
        {/* Logo Section */}
        <div className="flex flex-row gap-3 pb-5 border-b border-gray-200 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-blue-700 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
          <p className="text-3xl font-bold text-blue-600 tracking-wide">
            My Novel
          </p>
        </div>

        {/* Loading animation */}
        <div className="mt-6 flex flex-col items-center space-y-3">
          <div className="w-10 h-10 rounded-full border-4 border-blue-300 border-t-blue-600 animate-spin"></div>
          <p className="text-gray-600 font-medium animate-pulse">Loading...</p>
        </div>
      </div>
    </div>
  );
}

export default PageLoading