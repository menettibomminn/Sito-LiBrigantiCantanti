import { useEffect, useState } from "react";

import photo1 from "@/assets/home-slideshow/499477497_122128505342673824_5118418016492496917_n.jpg.asset.json";
import photo2 from "@/assets/home-slideshow/598665573_122146194206673824_8385830021388440407_n.jpg.asset.json";
import photo3 from "@/assets/home-slideshow/600297091_122146194278673824_3531927934391442180_n.jpg.asset.json";
import photo4 from "@/assets/home-slideshow/753169794_122159950388673824_7160905717264988326_n.jpg.asset.json";
import photo5 from "@/assets/home-slideshow/495151267_122126696354673824_225870033842213120_n.jpg.asset.json";
import photo6 from "@/assets/home-slideshow/470210057_122108327528673824_7479418759054142036_n.jpg.asset.json";
import photo7 from "@/assets/home-slideshow/470581792_122108326952673824_1931967575035056131_n.jpg.asset.json";
import photo8 from "@/assets/home-slideshow/470221150_122108320430673824_5096076463744832033_n.jpg.asset.json";
import photo9 from "@/assets/home-slideshow/470224472_122108319986673824_2628010466217924672_n.jpg.asset.json";
import photo10 from "@/assets/home-slideshow/470228897_122108317052673824_622827731600481493_n.jpg.asset.json";

const slides = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10];

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
          key={photo.asset_id}
          src={photo.url}
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