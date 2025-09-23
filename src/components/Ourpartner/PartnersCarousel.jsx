// PartnersCarousel.jsx
import React from "react";
import PartnerCard from "./PartnerCard";

const PartnersCarousel = ({ partners, totalSlides, partnersPerSlide }) => {
  return (
    <>
      {Array.from({ length: totalSlides }).map((_, slideIndex) => (
        <div key={slideIndex} className="w-full flex-shrink-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners
              .slice(
                slideIndex * partnersPerSlide,
                (slideIndex + 1) * partnersPerSlide
              )
              .map((partner) => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PartnersCarousel;
