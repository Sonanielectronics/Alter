import React, { useState } from "react";
import axios from "axios";
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";

import { BASE_URL } from "../main";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    Mail: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const response = await axios.post(`${BASE_URL}/Registration`, {
        Mail: formData.Mail,
      });

      setSuccess("Registration successful!");
      setFormData({
        Mail: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
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
            Registration
        </h2>
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4">
            {success}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            {/* <FaEnvelope className="absolute left-4 top-3 text-white/70" /> */}
            <input
              type="Mail"
              name="Mail"
              placeholder="Email Address"
              value={formData.Mail}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-white/60"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 text-lg font-semibold text-white rounded-lg transition duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500"
            }`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-white mt-4">
          Already have an account?{" "}
          <a
            href="/SignIn"
            className="text-yellow-300 hover:text-yellow-400 underline"
          >
            SignIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
