import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorElement: React.FC = () => {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <div className="flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-6xl font-bold text-[#4CA771] mb-4">Oops!</h1>
      <p className="text-lg mb-2">Something went wrong.</p>
      <p className="text-gray-600 mb-6">
        {error?.statusText || error?.message || "An unexpected error occurred."}
      </p>

      <Link
        to="/board"
        className="px-5 py-3 bg-[#4CA771] text-white rounded-lg shadow hover:scale-105 transition"
      >
        Go Back to Board
      </Link>
    </div>
  );
};

export default ErrorElement;
