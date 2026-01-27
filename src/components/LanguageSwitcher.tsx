"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "@/i18n"; // Ensure i18n is initialized

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "km" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-md shadow-lg border border-stone-200 rounded-full px-4 py-2 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
    >
      <div className="relative w-6 h-6 rounded-full overflow-hidden shadow-sm">
        <Image
          src={
            i18n.language === "en"
              ? "/assets/flags/us.png"
              : "/assets/flags/kh.png"
          }
          alt={i18n.language === "en" ? "English" : "Khmer"}
          fill
          className="object-cover"
        />
      </div>
      <span className="font-bold text-stone-800 text-sm">
        {i18n.language === "en" ? "English" : "ភាសាខ្មែរ"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
