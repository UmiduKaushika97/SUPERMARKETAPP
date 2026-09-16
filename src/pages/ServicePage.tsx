import React from "react";

import {
  Leaf,
  ShoppingCart,
  Search,
  BadgeDollarSign,
  Sparkles,
} from "lucide-react";

interface Feature {
  title: string;
  subtitle: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    icon: Leaf,
    title: "Fresh & Quality",
    subtitle: "Carefully Selected",
  },
  {
    icon: ShoppingCart,
    title: "Easy Shopping",
    subtitle: "Simple & Fast",
  },
  {
    icon: BadgeDollarSign,
    title: "Best Deals",
    subtitle: "Save More Everyday",
  },
  {
    icon: Search,
    title: "Wide Selection",
    subtitle: "Everything In One Place",
  },
  {
    icon: Sparkles,
    title: "Simple Experience",
    subtitle: "Clean & Easy To Use",
  },
];

const ServicePage = () => {
  return (
    <section className="w-full bg-white px-3 sm:px-5 lg:px-0">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1180px]
          grid-cols-2
          overflow-hidden
          rounded-xl
          border
          border-gray-100
          bg-white
          shadow-[0_2px_12px_rgba(0,0,0,0.03)]

          sm:grid-cols-2
          md:grid-cols-3
          lg:flex
          lg:items-center
          lg:px-3
          lg:py-4
        "
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <React.Fragment key={feature.title}>
              {/* Feature */}
              <div
                className={`
                  flex
                  min-w-0
                  items-center
                  justify-center
                  gap-2
                  px-3
                  py-4

                  sm:gap-3
                  sm:px-4
                  sm:py-5

                  md:px-5
                  md:py-6

                  lg:flex-1
                  lg:px-4
                  lg:py-0
                `}
              >
                {/* Icon */}
                <div className="flex shrink-0 items-center justify-center">
                  <Icon
                    className="
                      h-6
                      w-6
                      text-[#172631]

                      sm:h-7
                      sm:w-7

                      md:h-8
                      md:w-8

                      lg:h-[34px]
                      lg:w-[34px]
                    "
                    strokeWidth={1.8}
                  />
                </div>

                {/* Text */}
                <div className="min-w-0 leading-tight">
                  <p
                    className="
                      truncate
                      text-[10px]
                      font-semibold
                      text-[#172631]

                      sm:text-[11px]
                      md:text-[12px]
                      lg:text-[13px]
                    "
                  >
                    {feature.title}
                  </p>

                  <p
                    className="
                      mt-1
                      truncate
                      text-[9px]
                      font-medium
                      text-gray-500

                      sm:text-[10px]
                      md:text-[11px]
                      lg:text-[12px]
                    "
                  >
                    {feature.subtitle}
                  </p>
                </div>
              </div>

              {/* Desktop Divider */}
              {index !== features.length - 1 && (
                <div className="hidden h-10 w-px shrink-0 bg-gray-200 lg:block" />
              )}

              {/* Mobile/Tablet Horizontal Divider */}
              {index < 4 && (
                <div
                  className={`
                    ${
                      index === 1
                        ? "hidden md:block"
                        : ""
                    }

                    col-span-1
                    h-px
                    bg-gray-100
                    lg:hidden
                  `}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default ServicePage;