import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/menu";
import SocialOrderButtons from "./SocialOrderButtons";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  product: Product;
  isAllowedToOrder: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isAllowedToOrder,
}) => {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const formatPrice = (price: number) => {
    if (i18n.language === "km") {
      const riel = Math.round(price * 4000);
      const formatted = riel.toString();
      const khmerDigits = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
      return (
        formatted.replace(/[0-9]/g, (d) => khmerDigits[parseInt(d)]) + " ៛"
      );
    }
    return "$" + price.toFixed(2);
  };

  return (
    <>
      <div className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-stone-100/50">
        {/* Image Container with Zoom Effect */}
        <div
          className="relative h-64 w-full overflow-hidden cursor-zoom-in"
          onClick={toggleModal}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient Overlay for better text separation if needed, optional */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Zoom Icon Hint */}
          <div className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm shadow-sm pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-stone-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
              />
            </svg>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow relative bg-white">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-extrabold text-stone-800 tracking-tight group-hover:text-amber-700 transition-colors font-battambang">
              {t(`products.${product.id}.name`, product.name)}
            </h3>
            <span className="text-amber-700 font-bold bg-amber-50 px-3 py-1 rounded-full text-base shadow-sm font-battambang">
              {product.price ? formatPrice(product.price) : formatPrice(0)}
            </span>
          </div>

          <p className="text-stone-500 text-sm mb-6 flex-grow line-clamp-2 leading-relaxed font-medium font-battambang">
            {t(`products.${product.id}.description`, product.description)}
          </p>

          <div className="mt-auto">
            {/* Divider */}
            <div className="h-px w-full bg-stone-100 mb-4"></div>

            <p className="text-[10px] text-stone-400 mb-2 font-bold uppercase tracking-widest text-center font-battambang">
              {t("menu.tap_to_order")}
            </p>
            <SocialOrderButtons
              productName={product.name}
              enabled={isAllowedToOrder}
            />
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-200"
          onClick={toggleModal}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors z-[60] bg-black/50 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation();
              toggleModal();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain drop-shadow-2xl"
              sizes="100vw"
            />
          </div>

          <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none">
            <h2 className="text-white text-3xl font-bold drop-shadow-md mb-2 font-battambang">
              {t(`products.${product.id}.name`, product.name)}
            </h2>
            <p className="text-amber-400 text-xl font-bold bg-black/30 inline-block px-4 py-1 rounded-full backdrop-blur-md font-battambang">
              {product.price ? formatPrice(product.price) : formatPrice(0)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
