import React, { useRef } from 'react'


interface Category {
  title: string;
  subtitle: string;
  image: string;
}

const categories: Category[] = [
  {
    title: "Fresh Fruits & Vegetables",
    subtitle: "Up to 30% Off",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Dairy & Eggs",
    subtitle: "Save Big",
    image:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Bakery & Bread",
    subtitle: "Freshly Baked",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Meat & Seafood",
    subtitle: "Premium Quality",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Beverages",
    subtitle: "Cool & Refreshing",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Snacks",
    subtitle: "Tasty Deals",
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2aa1f5b8?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Frozen Foods",
    subtitle: "Easy & Delicious",
    image:
      "https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=600&auto=format&fit=crop",
  },
];

const CategorySlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "right" ? 300 : -300,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full px-4 py-5 md:px-6 lg:px-10">
      <div className="mx-auto max-w-[1450px]">

        {/* ================= HEADER ================= */}
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800 md:text-xl">
            Shop By Category
          </h2>

          <button
            type="button"
            className="text-xs font-medium text-yellow-600
            transition-colors duration-200 hover:text-yellow-700 md:text-sm"
          >
            View All →
          </button>
        </div>

        {/* ================= SLIDER ================= */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous categories"
            className="absolute left-[-14px] top-1/2 z-20
            hidden h-9 w-9 -translate-y-1/2
            items-center justify-center
            rounded-full border border-gray-200
            bg-white text-xl text-gray-700
            shadow-md transition-all duration-200
            hover:bg-yellow-400 hover:text-black
            md:flex"
          >
            ‹
          </button>

          {/* CATEGORY CONTAINER */}
          <div
            ref={sliderRef}
            className="flex gap-3 overflow-x-auto
            scroll-smooth scrollbar-hide"
          >
            {categories.map((category, index) => (
              <div
                key={`${category.title}-${index}`}
                className="group min-w-[230px] shrink-0
                overflow-hidden rounded-lg
                border border-gray-200 bg-white
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-md
                sm:min-w-[250px]
                lg:min-w-[280px]"
              >
                {/* ================= IMAGE ================= */}
                <div className="h-[100px] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    className="h-full w-full object-cover
                    transition-transform duration-500
                    group-hover:scale-105"
                  />
                </div>

                {/* ================= CONTENT ================= */}
                <div className="flex min-h-[58px] items-center
                justify-between gap-2 px-3 py-2">

                  {/* Text */}
                  <div className="min-w-0">
                    <h3
                      className="truncate text-xs font-semibold
                      text-slate-800 md:text-sm"
                    >
                      {category.title}
                    </h3>

                    <p
                      className="mt-0.5 text-[10px]
                      font-medium text-yellow-600 md:text-xs"
                    >
                      {category.subtitle}
                    </p>
                  </div>

                  {/* CARD ARROW */}
                  <button
                    type="button"
                    aria-label={`View ${category.title}`}
                    className="flex h-7 w-7 shrink-0
                    items-center justify-center
                    rounded-full bg-gray-100
                    text-sm text-gray-700
                    transition-all duration-200
                    group-hover:bg-yellow-400
                    group-hover:text-black"
                  >
                    →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next categories"
            className="absolute right-[-14px] top-1/2 z-20
            hidden h-9 w-9 -translate-y-1/2
            items-center justify-center
            rounded-full border border-gray-200
            bg-white text-xl text-gray-700
            shadow-md transition-all duration-200
            hover:bg-yellow-400 hover:text-black
            md:flex"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;