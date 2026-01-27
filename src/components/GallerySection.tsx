import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const GallerySection = () => {
  const { t } = useTranslation();

  // Bento Grid Layout Configuration
  const galleryImages = [
    {
      src: "/gallary/boyboy.jpg",
      alt: "Iced Coffee",
      className: "md:col-span-1 md:row-span-1 h-64 md:h-72",
    },
    {
      src: "/gallary/babyboy.jpg",
      alt: "Matcha Special",
      className: "md:col-span-1 md:row-span-1 h-64 md:h-72",
    },
    {
      src: "/gallary/boyt.jpg",
      alt: "Blue Matcha",
      className: "md:col-span-1 md:row-span-2 h-64 md:h-auto",
    },
    {
      src: "/gallary/manke.jpg",
      alt: "Strawberry Soda",
      className: "md:col-span-2 md:row-span-1 h-64 md:h-72",
    },
    {
      src: "/gallary/matcha.jpg",
      alt: "Blue Italian Soda",
      className: "md:col-span-1 md:row-span-1 h-64 md:h-72",
    },
    {
      src: "/gallary/working.jpg",
      alt: "Matcha Latte",
      className: "md:col-span-2 md:row-span-1 h-64 md:h-72",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 mt-24 mb-24">
      <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-10 gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-800 tracking-tight font-battambang">
            {t("gallery.title")}
          </h2>
          <p className="text-stone-500 text-lg mt-2 font-medium font-battambang">
            {t("gallery.subtitle")}
          </p>
        </div>
        <a
          href="#"
          className="text-amber-700 font-bold hover:text-amber-900 transition-colors flex items-center gap-1 group font-battambang"
        >
          {t("gallery.view_instagram")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.5a.75.75 0 010 1.08l-5.5 5.5a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className={`relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-stone-100 ${img.className}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Hover Overlay with Icon */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/90 p-3 rounded-full backdrop-blur-sm transform scale-50 group-hover:scale-100 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-stone-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
