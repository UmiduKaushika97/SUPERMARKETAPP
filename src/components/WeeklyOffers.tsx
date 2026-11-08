import { ArrowUpRight } from "lucide-react";

const WeeklyOffers = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="grid min-h-[420px] grid-cols-1 lg:grid-cols-2 m-10">

        {/* IMAGE SIDE */}
        <div className="relative h-[420px] overflow-hidden sm:h-[500px] lg:h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85"
            alt="Woman shopping for groceries"
            className="
              absolute inset-0
              h-full w-full
              object-cover
              object-center
              transition-transform
              duration-700
              hover:scale-105
            "
          />

          {/* Soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/10" />
        </div>

        {/* CONTENT SIDE */}
        <div
          className="
            relative
            flex
            min-h-[420px]
            items-center
            overflow-hidden
            bg-gradient-to-br
            from-[#eafafa]
            via-[#c9edef]
            to-[#8ed7d9]
            px-7 py-14
            sm:px-12
            md:px-16
            lg:min-h-[450px]
            lg:px-14
            xl:px-20
            2xl:px-24
          "
        >

          {/* Decorative background circle */}
          <div
            className="
              absolute
              -right-32
              -top-32
              h-[420px]
              w-[420px]
              rounded-full
              bg-white/10
            "
          />

          <div className="relative z-10 w-full max-w-[620px]">

            {/* Main heading */}
            <h1
              className="
                text-[42px]
                font-light
                leading-[0.95]
                tracking-[-2px]
                text-[#252525]

                sm:text-[52px]
                md:text-[60px]
                lg:text-[52px]
                xl:text-[64px]
              "
            >
              WEEKLY{" "}
              <span className="font-extrabold text-[#e50909]">
                OFFERS
              </span>
            </h1>

            {/* Subtitle */}
            <h2
              className="
                mt-6
                text-[20px]
                font-bold
                leading-tight
                text-[#202020]

                sm:text-[22px]
                md:text-[24px]
              "
            >
              Special Offers Just for You
            </h2>

            {/* Description */}
            <p
              className="
                mt-3
                max-w-[520px]
                text-[14px]
                leading-6
                text-[#555]

                sm:text-[15px]
                md:text-[16px]
              "
            >
              Quality products, trusted service, and prices you'll love.
            </p>

            {/* CTA */}
            <button
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#ffe45c]
                px-9
                py-3.5
                text-[14px]
                font-semibold
                text-[#222]
                shadow-[0_5px_15px_rgba(0,0,0,0.12)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#ffdc28]
                hover:shadow-[0_8px_25px_rgba(0,0,0,0.18)]
              "
            >
              Explore Offers

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </button>
          </div>

          {/* Bottom-right floating button */}
          <button
            aria-label="Back to top"
            className="
              absolute
              bottom-5
              right-5
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-[#ffe45c]
              shadow-md
              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#ffdc28]
              hover:shadow-lg

              sm:bottom-7
              sm:right-7
              sm:h-16
              sm:w-16
            "
          >
            <ArrowUpRight
              size={25}
              strokeWidth={1.5}
              className="rotate-[-45deg]"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeeklyOffers;