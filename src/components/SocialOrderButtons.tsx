"use client";

import React from "react";
import { FaTelegram, FaFacebook, FaTiktok } from "react-icons/fa";

interface SocialOrderButtonsProps {
  productName: string;
  enabled: boolean;
}

const SocialOrderButtons: React.FC<SocialOrderButtonsProps> = ({
  productName,
  enabled,
}) => {
  const handleOrder = (platform: string, url: string) => {
    if (!enabled) {
      alert(
        "Sorry, ordering is only available within Siem Reap and Banteay Meanchey provinces.",
      );
      return;
    }
    // In a real app, you might encode the message
    // For now, we just redirect to the platform
    window.open(url, "_blank");
  };

  // Mock links - replace with actual shop links
  // You can include a pre-filled message for Telegram/WhatsApp if supported
  const telegramLink = `https://t.me/Chhanna_phoeun`;
  const facebookLink = `https://www.facebook.com/profile.php?id=100067382019868`; // Facebook Messenger
  const tiktokLink = `https://www.tiktok.com/@phearsokcoffee?is_from_webapp=1&sender_device=pc`;

  return (
    <div className="flex gap-2 mt-3">
      <button
        onClick={() => handleOrder("Telegram", telegramLink)}
        className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center text-white transition-colors ${enabled
          ? "bg-blue-500 hover:bg-blue-600"
          : "bg-gray-400 cursor-not-allowed"
          }`}
        title={enabled ? "Order via Telegram" : "Not available in your area"}
      >
        {/* Simple Text or SVG Icon */}
        <FaTelegram className="text-xl" />
      </button>

      <button
        onClick={() => handleOrder("Facebook", facebookLink)}
        className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center text-white transition-colors ${enabled
          ? "bg-blue-700 hover:bg-blue-800"
          : "bg-gray-400 cursor-not-allowed"
          }`}
        title={enabled ? "Order via Facebook" : "Not available in your area"}
      >
        <FaFacebook className="text-xl" />
      </button>

      <button
        onClick={() => handleOrder("TikTok", tiktokLink)}
        className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center text-white transition-colors ${enabled ? "bg-black hover:gray-900" : "bg-gray-400 cursor-not-allowed"
          }`}
        title={enabled ? "Order via TikTok" : "Not available in your area"}
      >
        <FaTiktok className="text-xl" />
      </button>
    </div>
  );
};

export default SocialOrderButtons;
