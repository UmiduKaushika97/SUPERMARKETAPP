import React, { useEffect, useState } from 'react'



const slides = [
  {
    title: "Fresh Groceries",
    highlight: "For a Healthier You",
    description:
      "Shop fresh produce, quality essentials and more — all in one place.",
    button: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop",
    badge: "Fresh Deals\nEvery Day",
  },
  {
    title: "Fresh Fruits",
    highlight: "Packed With Goodness",
    description:
      "Discover fresh, delicious and healthy fruits delivered to your door.",
    button: "Explore Fruits",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1600&auto=format&fit=crop",
    badge: "Healthy\nChoices",
  },
  {
    title: "Daily Essentials",
    highlight: "Everything You Need",
    description:
      "Quality groceries and everyday essentials at great prices.",
    button: "Shop Essentials",
    image:
     "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop",
    badge: "Best Prices\nEvery Day",
  },
];

const MainCarousel = () => {

    const [current, setCurrent] = useState(0);

     useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };
    
  return (
    <>
      <section className="w-full px-3 md:px-6 lg:px-10 py-4">
      <div className="relative mx-auto max-w-[1450px] overflow-hidden rounded-xl">

        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative min-w-full h-[230px] md:h-[300px] lg:h-[360px] overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Left Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="w-full max-w-xl px-6 md:px-10 lg:px-12">

                  {/* Small Heading */}
                  <p className="mb-2 text-[9px] md:text-xs font-semibold tracking-[3px] text-slate-700">
                    FRESHNESS • QUALITY • EVERYDAY
                  </p>

                  {/* Main Heading */}
                  <h1 className="text-2xl font-extrabold leading-tight text-slate-800 md:text-4xl lg:text-5xl">
                    {slide.title}
                  </h1>

                  {/* Green Highlight */}
                  <h2 className="text-2xl font-extrabold leading-tight text-green-700 md:text-4xl lg:text-5xl">
                    {slide.highlight}
                  </h2>

                  {/* Description */}
                  <p className="mt-2 max-w-md text-xs leading-relaxed text-slate-700 md:text-sm lg:text-base">
                    {slide.description}
                  </p>

                  {/* Button */}
                  <button
                    className="mt-4 flex items-center gap-3 rounded-full bg-yellow-400
                    px-5 py-2.5 text-xs font-bold text-slate-900
                    shadow-md transition-all duration-300
                    hover:bg-yellow-500 hover:shadow-lg md:text-sm"
                  >
                    {slide.button}

                    <span className="text-lg">→</span>
                  </button>
                </div>
              </div>

              {/* Deal Badge */}
              <div
                className="absolute right-5 top-1/2 z-20 hidden
                -translate-y-1/2 rotate-[-6deg]
                md:flex h-28 w-28 items-center justify-center
                rounded-full bg-yellow-400 shadow-lg"
              >
                <span className="whitespace-pre-line text-center text-lg font-bold leading-tight text-green-800">
                  {slide.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 z-30 hidden
          h-9 w-9 -translate-y-1/2 items-center justify-center
          rounded-full bg-white/80 text-xl shadow-md
          transition hover:bg-white md:flex"
        >
          ‹
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 z-30 hidden
          h-9 w-9 -translate-y-1/2 items-center justify-center
          rounded-full bg-white/80 text-xl shadow-md
          transition hover:bg-white md:flex"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-7 bg-yellow-400"
                  : "w-2.5 bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default MainCarousel
