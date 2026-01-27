"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { products } from "@/data/menu";
import ProductCard from "@/components/ProductCard";
import GallerySection from "@/components/GallerySection";
import { isUserInSiemReap } from "@/lib/location";
import { useTranslation } from "react-i18next";
import "@/i18n";

export default function Home() {
  const { t } = useTranslation();
  const [isSiemReap, setIsSiemReap] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const [locationStatus, setLocationStatus] = useState<
    "loading" | "success" | "error" | "denied"
  >("loading");
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    setMounted(true);
    if (!navigator.geolocation) {
      setLocationStatus("error");
      setErrorMsg("Geolocation is not supported by your browser.");
      return;
    }

    const handleSuccess = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      const inSiemReap = isUserInSiemReap(latitude, longitude);
      setIsSiemReap(inSiemReap);
      setLocationStatus("success");
    };

    const handleError = (error: GeolocationPositionError) => {
      console.error("Error getting location:", error);
      setLocationStatus("denied");
      if (error.code === error.PERMISSION_DENIED) {
        setErrorMsg("status.permission_denied_msg");
      } else {
        setErrorMsg("Unable to retrieve your location.");
      }
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  if (!mounted) {
    return null; // or a loading spinner to prevent hydration mismatch
  }

  return (
    <main className="min-h-screen bg-stone-50 pb-20">
      {/* Header/Hero Section */}
      {/* Header/Hero Section */}
      <header className="relative bg-amber-900 text-stone-50 py-24 px-4 shadow-md mb-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/logo.jpg"
            alt="BuyCofe Header Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md font-battambang">
            {t("header.title")}
          </h1>
          <p className="text-amber-100 text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-sm font-medium font-battambang">
            {t("header.subtitle")}
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4">
        {/* Location Status Message */}
        <div className="mb-8 flex justify-center font-battambang">
          {locationStatus === "loading" && (
            <div className="bg-blue-50 border border-blue-200 text-blue-800 px-6 py-4 rounded-xl shadow-sm flex items-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-800"></div>
              <span>{t("status.loading")}</span>
            </div>
          )}

          {locationStatus === "success" && isSiemReap && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl shadow-sm text-center">
              <span className="font-bold block text-lg mb-1">
                {t("status.success")}
              </span>
              <span>{t("status.success_detail")}</span>
            </div>
          )}

          {locationStatus === "success" && !isSiemReap && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl shadow-sm text-center max-w-lg">
              <span className="font-bold block text-lg mb-1">
                {t("status.outside")}
              </span>
              <span>{t("status.outside_detail")}</span>
            </div>
          )}

          {(locationStatus === "error" || locationStatus === "denied") && (
            <div className="bg-amber-50 border border-amber-200 text-amber-800 px-6 py-4 rounded-xl shadow-sm text-center max-w-lg">
              <span className="font-bold block text-lg mb-1">
                {t("status.denied")}
              </span>
              <span>{t(errorMsg)}</span>
            </div>
          )}
        </div>

        {/* Menu Grid */}
        <h2 className="text-3xl font-bold text-stone-800 mb-6 border-l-4 border-amber-700 pl-4 font-battambang">
          {t("menu.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isAllowedToOrder={isSiemReap}
            />
          ))}
        </div>
      </div>

      {/* Shop Location Section */}
      {/* Shop Location Section */}
      <div className="max-w-6xl mx-auto px-4 mt-24">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Map Placeholder or Decorative Image */}
          <div className="absolute inset-0 bg-stone-900">
            <Image
              src="/assets/coffeemilk.jpg"
              alt="Shop Background"
              fill
              className="object-cover opacity-30 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 to-stone-900/40" />
          </div>

          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight font-battambang">
                {t("shop.title")}
              </h2>
              <p className="text-stone-300 text-lg mb-6 leading-relaxed font-battambang">
                {t("shop.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-3 text-amber-400 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-stone-200 font-battambang">
                    {t("shop.open_daily")}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <a
                href="https://maps.app.goo.gl/GFwmJwySNDcbNqt26"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-3 bg-stone-900 hover:bg-stone-800 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 border border-stone-700"
              >
                <div className="bg-amber-600 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg font-battambang">
                  {t("shop.open_in_maps")}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <GallerySection />

      {/* Footer */}
      <footer className="mt-20 py-8 text-center text-stone-500 text-sm border-t border-stone-200 bg-white font-battambang">
        <p>
          © {new Date().getFullYear()} Phearsok Coffee. {t("footer.rights")}
        </p>
        <p className="mt-2">{t("footer.made_by")}</p>
        <a
          className="text-red-500 mt-2 hover:underline hover:text-blue-600"
          href="https://l.facebook.com/l.php?u=https%3A%2F%2Fphoeun-chhanna.onrender.com%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExRGFnS245Ym1zTUd5WWhxVnNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4l0jfCOLB8soNrlvhDVYBV9LbZMRxhd6SDwyu9GYkDEtQIiZ3e9AoDBmUoZA_aem_4je8etFsqibrkX0IU6bMOg&h=AT3LzGSd1Rc_zxh6w3tExtvrRclhG62keMUSnWn25UPSmSu6iMjoKeARv0szxoALd41JCmiUaaSOvgI5UFGFnUNI7fClSm4nGc6cSi8u_U-bxZE-ft34xZctaFPY8frg7VaP"
        >
          {t("footer.contact")}: +855 883140332
        </a>
      </footer>
    </main>
  );
}
