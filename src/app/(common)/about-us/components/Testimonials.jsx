"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CircularButton from "@/components/buttons/CircularButton";

// Assuming CircularButton is your custom component

const TestimonialsSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Anjelina Watson",
      role: "Business Expert",
      rating: 4.7,
      img: "/images/speaker2.png",
      feedback:
        "Completely procrastinate inexpensive leadership before Seamlessly innovate state of the functionalities through the art infomediaries. Assertively recapitulate resource network competitive internal",
    },
    {
      name: "John Smith",
      role: "Marketing Head",
      rating: 5,
      img: "/images/speaker1.png",
      feedback:
        "Outstanding event management! The level of detail and care taken in execution was truly impressive. Highly recommend.",
    },
    {
      name: "Sophia Lee",
      role: "Entrepreneur",
      rating: 4.8,
      img: "/images/speaker3.png",
      feedback:
        "A great networking platform with insightful sessions. Looking forward to more events like this!",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // Attach refs after initialization
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex; // for loop mode
          setActiveIndex(realIndex);
        }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-primary/19 xl:p-10.5 lg:p-9 p-5 rounded-[1.25rem] relative">
              <div className="flex items-center justify-between mb-5">
                <div id="rating" className="flex items-center mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.71004 17.545C4.47004 17.625 4.26004 17.595 4.08004 17.455C3.90004 17.315 3.83004 17.105 3.87004 16.825L4.77004 11.545L0.810043 7.76499C0.650044 7.56499 0.600044 7.34499 0.660044 7.10499C0.720044 6.86499 0.890043 6.72499 1.17004 6.68499L6.63004 5.90499L9.09004 1.04499C9.21004 0.804987 9.39004 0.684988 9.63004 0.684988C9.87004 0.684988 10.05 0.804987 10.17 1.04499L12.63 5.90499L18.15 6.68499C18.39 6.72499 18.54 6.86499 18.6 7.10499C18.66 7.34499 18.61 7.56499 18.45 7.76499L14.49 11.545L15.39 16.825C15.43 17.105 15.36 17.315 15.18 17.455C15 17.595 14.79 17.625 14.55 17.545L9.63004 14.965L4.71004 17.545Z"
                          fill="#FF9A23"
                        />
                      </svg>
                    ))}
                    <p className="text-secondary">(4.7)</p>
                  </div>
                </div>
                <svg
                  width="40"
                  height="38"
                  viewBox="0 0 40 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.99 18.0899C39.99 21.2899 39.1011 24.2233 37.3233 26.8899C35.5455 29.5566 33.1233 31.6677 30.0567 33.2233C26.99 34.7788 23.6344 35.5566 19.99 35.5566C18.0344 35.5566 16.0789 35.3344 14.1233 34.8899C11.4567 36.2233 7.98999 37.2455 3.72332 37.9566C3.45666 37.9566 3.23443 37.8455 3.05666 37.6233C2.87888 37.401 2.83443 37.201 2.92332 37.0233C3.98999 34.5344 4.65666 32.0455 4.92332 29.5566C3.32332 28.0455 2.1011 26.2899 1.25666 24.2899C0.412212 22.2899 -0.0100098 20.2233 -0.0100098 18.0899C-0.0100098 14.8899 0.878879 11.9566 2.65666 9.28994C4.43443 6.62327 6.85666 4.51216 9.92332 2.9566C12.99 1.40105 16.3455 0.623268 19.99 0.623268C23.6344 0.623268 26.99 1.40105 30.0567 2.9566C33.1233 4.51216 35.5455 6.62327 37.3233 9.28994C39.1011 11.9566 39.99 14.8899 39.99 18.0899ZM17.99 15.0233C17.8122 14.7566 17.59 14.4899 17.3233 14.2233C17.0567 13.9566 16.7011 13.7344 16.2567 13.5566C15.6344 13.201 15.0122 13.0233 14.39 13.0233C13.1455 13.0233 12.1011 13.4455 11.2567 14.2899C10.4122 15.1344 9.98999 16.1344 9.98999 17.2899C9.98999 18.4455 10.4122 19.4233 11.2567 20.2233C12.1011 21.0233 13.1455 21.4233 14.39 21.4233C15.19 21.4233 15.9455 21.201 16.6567 20.7566C16.3011 21.8233 15.6344 22.8455 14.6567 23.8233C14.39 24.001 14.2789 24.2455 14.3233 24.5566C14.3678 24.8677 14.4789 25.1122 14.6567 25.2899C14.8344 25.4677 15.0789 25.5566 15.39 25.5566C15.7011 25.5566 15.9455 25.4677 16.1233 25.2899C17.7233 23.7788 18.7011 22.0899 19.0567 20.2233C19.3233 18.7122 19.1455 17.2899 18.5233 15.9566C18.3455 15.601 18.1678 15.2899 17.99 15.0233ZM27.4567 20.7566C27.1011 21.8233 26.4344 22.8455 25.4567 23.8233C25.2789 24.001 25.19 24.2455 25.19 24.5566C25.19 24.8677 25.3011 25.1122 25.5233 25.2899C25.7455 25.4677 25.99 25.5566 26.2567 25.5566C26.5233 25.5566 26.79 25.4677 27.0567 25.2899C28.5678 23.7788 29.5011 22.0899 29.8567 20.2233C30.1233 18.7122 29.9455 17.2899 29.3233 15.9566C29.2344 15.601 29.0789 15.2899 28.8567 15.0233C28.6344 14.7566 28.39 14.4899 28.1233 14.2233C27.8567 13.9566 27.5011 13.7344 27.0567 13.5566C26.4344 13.2899 25.8122 13.1122 25.19 13.0233C23.9455 13.0233 22.9011 13.4455 22.0567 14.2899C21.2122 15.1344 20.79 16.1344 20.79 17.2899C20.79 18.4455 21.2122 19.4233 22.0567 20.2233C22.9011 21.0233 23.9455 21.4233 25.19 21.4233C25.99 21.4233 26.7455 21.201 27.4567 20.7566Z"
                    fill="#7F529F"
                  />
                </svg>
              </div>
              <p className="text-lg  leading-[1.8]">
                Completely procrastinate inexpensive leadership before
                Seamlessly innovate state of the functionalities through the art
                infomediaries. Assertively recapitulate resource network
                competitive internal
              </p>
            </div>
          </SwiperSlide>
        ))}

        <div className="flex  flex-col lg:flex-row justify-between items-center mt-7.5">
          <div
            className={`flex items-center gap-5  p-[0.65625rem] sm:pe-9 rounded-full text-xs `}
          >
            <div className="w-17.5 aspect-square rounded-full overflow-hidden border-1 border-white/19">
              <img
                className="w-full h-full object-cover"
                src={testimonials[activeIndex]?.img||"/images/user_placeholder.jpeg"}
                alt={testimonials[activeIndex]?.name}
              />
            </div>
            <div className="flex flex-col gap-1.25 justify-between ">
              <span className="text-2xl font-semibold">
                {testimonials[activeIndex]?.name}
              </span>
              <span className=" text-secondary">{testimonials[activeIndex]?.role}</span>
            </div>
          </div>

          <div className="flex lg:relative gap-2 items-center">
            <CircularButton
              ref={prevRef}
              className="p-3.5 !bg-primary hover:!bg-white !text-white hover:!text-primary transition-colors duration-300"
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.7333 10.6495C18.7333 10.4717 18.6778 10.3273 18.5667 10.2162C18.4556 10.1051 18.3111 10.0495 18.1333 10.0495H3.4L7.33333 6.11618C7.46666 5.98284 7.53333 5.82729 7.53333 5.64951C7.53333 5.47173 7.46666 5.32729 7.33333 5.21618C7.2 5.10507 7.04444 5.04951 6.86666 5.04951C6.68889 5.04951 6.53333 5.09396 6.4 5.18284L1.4 10.1828C1.31111 10.3162 1.26666 10.4717 1.26666 10.6495C1.26666 10.8273 1.31111 10.9828 1.4 11.1162L6.4 16.1162C6.53333 16.2051 6.68889 16.2495 6.86666 16.2495C7.04444 16.2495 7.2 16.194 7.33333 16.0828C7.46666 15.9717 7.53333 15.8273 7.53333 15.6495C7.53333 15.4717 7.46666 15.3162 7.33333 15.1828L3.4 11.2495H18.1333C18.3111 11.2495 18.4556 11.194 18.5667 11.0828C18.6778 10.9717 18.7333 10.8273 18.7333 10.6495Z"
                  fill="currentColor"
                />
              </svg>
            </CircularButton>
            <CircularButton
              ref={nextRef}
              className="p-3.5 !bg-primary hover:!bg-white !text-white hover:!text-primary transition-colors duration-300"
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.26666 10.6495C1.26666 10.4717 1.32222 10.3273 1.43333 10.2162C1.54444 10.1051 1.68888 10.0495 1.86666 10.0495H16.6L12.6667 6.11618C12.5333 5.98284 12.4667 5.82729 12.4667 5.64951C12.4667 5.47173 12.5333 5.32729 12.6667 5.21618C12.8 5.10507 12.9556 5.04951 13.1333 5.04951C13.3111 5.04951 13.4667 5.09396 13.6 5.18284L18.6 10.1828C18.6889 10.3162 18.7333 10.4717 18.7333 10.6495C18.7333 10.8273 18.6889 10.9828 18.6 11.1162L13.6 16.1162C13.4667 16.2051 13.3111 16.2495 13.1333 16.2495C12.9556 16.2495 12.8 16.194 12.6667 16.0828C12.5333 15.9717 12.4667 15.8273 12.4667 15.6495C12.4667 15.4717 12.5333 15.3162 12.6667 15.1828L16.6 11.2495H1.86666C1.68888 11.2495 1.54444 11.194 1.43333 11.0828C1.32222 10.9717 1.26666 10.8273 1.26666 10.6495Z"
                  fill="currentColor"
                />
              </svg>
            </CircularButton>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default TestimonialsSlider;
