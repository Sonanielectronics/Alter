import React from "react";
import { auth, googleProvider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";

const GoogleSignIn = () => {
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Successfully signed in!");
    } catch (error) {
      console.error(error.message);
      alert("Sign-in failed. Please try again.");
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-30"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-noise.png')] opacity-20"></div>

      {/* Glassmorphism Container */}
      <div className="relative z-10 p-6 max-w-lg w-full bg-white/20 backdrop-blur-md rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          SignIn 
        </h2>
        <p className="text-center text-white/70 mb-6">
          Click the button below to sign in using your Google account.
        </p>
        <button
          onClick={handleSignIn}
          className="w-full py-3 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition duration-300"
        >
          <div className="flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="#EA4335"
                d="M12 2c2.1 0 4.2.8 5.8 2.2l-2.5 2.5C14.4 6 13.2 5.6 12 5.6 9.7 5.6 7.8 7.1 7.1 9.3H4.3v2.8H7c.4 2.3 2.3 3.8 5 3.8 1.3 0 2.5-.5 3.4-1.3l2.5 2.5c-1.7 1.4-3.8 2.2-5.9 2.2-4.4 0-8-3.6-8-8S7.6 2 12 2z"
              />
              <path
                fill="#34A853"
                d="M4.3 12.1C4 13.1 4 14.1 4 15.1 4 18.5 7 21 10.5 21c1.6 0 3-.5 4.2-1.3l-2.5-2.5c-.8.5-1.8.8-2.8.8-2.3 0-4.3-1.5-4.8-3.7H4.3z"
              />
              <path
                fill="#FBBC05"
                d="M19.6 12c0-.8-.2-1.6-.4-2.3H12v3.1h4.4c-.2 1.1-.8 2.1-1.6 2.8l2.5 2.5c1.2-1.1 2.2-2.8 2.3-5.1z"
              />
              <path
                fill="#4285F4"
                d="M19.6 12c0-.8-.2-1.6-.4-2.3H12v3.1h4.4c-.2 1.1-.8 2.1-1.6 2.8l2.5 2.5c1.2-1.1 2.2-2.8 2.3-5.1z"
              />
            </svg>
            Sign in with Google
          </div>
        </button>
        <p className="text-center text-white mt-4">
          Don't have an account?{" "}
          <a
            href="/Registration"
            className="text-yellow-300 hover:text-yellow-400 underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default GoogleSignIn;
