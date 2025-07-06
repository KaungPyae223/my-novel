import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1562232573-0305012a8818?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
      className="flex-1 bg-cover bg-center"
    >
      <div className="flex bg-gradient-to-b from-gray-100/5 to-gray-800/30 flex-col items-start justify-end p-6 h-full">
        <p className="text-white text-2xl font-semibold">
          &quot;Begin your journey as a writer. Share your stories with the
          world.&quot;
        </p>
      </div>
    </div>
  );
};

export default Banner;
