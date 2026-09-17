import React from "react";

interface PromoBannerProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  badgeTop: string;
  badgeBottom: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({
  eyebrow,
  title,
  subtitle,
  image,
  badgeTop,
  badgeBottom,
}) => {
  return (
    <div className="relative h-[180px] w-full overflow-hidden rounded-xl bg-[#edf7df]">
      {/* Text */}
      <div className="relative z-20 flex h-full w-[48%] flex-col justify-center px-6 sm:px-8">
        <p className="mb-1 text-[9px] font-bold tracking-[0.25em] text-[#47703b]">
          {eyebrow}
        </p>

        <h2 className="text-[22px] font-extrabold leading-[1.05] tracking-tight text-[#102b24] sm:text-[25px]">
          {title}
        </h2>

        <p className="mt-1 text-[12px] font-medium text-[#28483c]">
          {subtitle}
        </p>

        <button className="mt-3 flex w-fit items-center gap-3 rounded-full bg-[#ffd21c] px-4 py-2 text-[10px] font-bold text-[#111] transition hover:bg-[#f4c400]">
          Shop Now
          <span className="text-sm leading-none">→</span>
        </button>
      </div>

      {/* Product Image */}
      <div className="absolute inset-y-0 right-0 z-10 w-[58%]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-left"
        />
      </div>

      {/* Badge */}
      <div className="absolute right-4 top-4 z-30 flex h-[58px] w-[58px] flex-col items-center justify-center rounded-full border-2 border-white bg-[#39833d] text-center text-white shadow-md">
        <span className="text-[10px] font-extrabold leading-none">
          {badgeTop}
        </span>
        <span className="mt-1 text-[8px] font-medium leading-none">
          {badgeBottom}
        </span>
      </div>
    </div>
  );
};

const PromoBanners: React.FC = () => {
  return (
    <section className="w-full px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Organic Vegetables */}
        <PromoBanner
          eyebrow="FRESH & HEALTHY"
          title="Organic Vegetables"
          subtitle="Straight from the Farm"
          image="/images/organic-vegetables.jpg"
          badgeTop="100%"
          badgeBottom="Organic"
        />

        {/* Dairy & Eggs */}
        <PromoBanner
          eyebrow="DAIRY & EGGS"
          title="Pure Goodness"
          subtitle="For Your Family"
          image="/images/dairy-eggs.jpg"
          badgeTop="100%"
          badgeBottom="Fresh"
        />
      </div>
    </section>
  );
};

export default PromoBanners;