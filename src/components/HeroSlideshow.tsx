import { useEffect, useState } from "react";

const slides = [
  "/assets/home-slideshow/499477497_122128505342673824_5118418016492496917_n.jpg",
  "/assets/home-slideshow/598665573_122146194206673824_8385830021388440407_n.jpg",
  "/assets/home-slideshow/600297091_122146194278673824_3531927934391442180_n.jpg",
  "/assets/home-slideshow/753169794_122159950388673824_7160905717264988326_n.jpg",
  "/assets/home-slideshow/495151267_122126696354673824_225870033842213120_n.jpg",
  "/assets/home-slideshow/470210057_122108327528673824_7479418759054142036_n.jpg",
  "/assets/home-slideshow/470581792_122108326952673824_1931967575035056131_n.jpg",
  "/assets/home-slideshow/470221150_122108320430673824_5096076463744832033_n.jpg",
  "/assets/home-slideshow/470224472_122108319986673824_2628010466217924672_n.jpg",
  "/assets/home-slideshow/470228897_122108317052673824_622827731600481493_n.jpg",
];

/** Sfondo fotografico della home con dissolvenza automatica. */
export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {slides.map((photo, index) => (
        <img
          key={photo}
          src={photo}
          alt=""
          width={1920}
          height={1080}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 motion-reduce:transition-none ${
            index === activeIndex ? "opacity-80" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}