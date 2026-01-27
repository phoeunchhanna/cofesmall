"use client";

import React from "react";
import { FaTelegram, FaFacebook, FaTiktok } from "react-icons/fa";

const SocialFloatingButtons = () => {
    const socialLinks = [
        {
            name: "Telegram",
            icon: <FaTelegram className="w-6 h-6 text-sky-500" />,
            url: "https://t.me/Chhanna_phoeun", // Replace with actual username
            bgColor: "bg-white/90",
        },
        {
            name: "Facebook",
            icon: <FaFacebook className="w-6 h-6 text-blue-600" />,
            url: "https://www.facebook.com/profile.php?id=100067382019868", // Replace with actual page
            bgColor: "bg-white/90",
        },
        {
            name: "TikTok",
            icon: <FaTiktok className="w-6 h-6 text-black" />,
            url: "https://www.tiktok.com/@phearsokcoffee?is_from_webapp=1&sender_device=pc", // Replace with actual handle
            bgColor: "bg-white/90",
        },
    ];

    return (
        <div className="fixed top-20 right-4 z-40 flex flex-col gap-3 md:hidden">
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.bgColor} backdrop-blur-md shadow-lg border border-stone-200 rounded-full p-3 flex items-center justify-center transition-transform hover:scale-110 active:scale-95`}
                    aria-label={`Visit our ${social.name}`}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialFloatingButtons;
