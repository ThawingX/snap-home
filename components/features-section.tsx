import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import ExpandableCardStandard from "./expandable-card-standard";

export function FeaturesSection() {
  const features = [
    {
      title: "Our Flagship Product",
      description:
        "Check out SnapSeeker, our competitive research tool designed to give you a market edge.",
      skeleton: <ExpandableCardStandard />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Latest Community Article",
      description:
        "Discover our newest community post featuring insights and trends in AI photography.",
      skeleton: <SkeletonArticle />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Watch ToneTone on bilibili",
      description:
        "You can get to know about ToneTone product on bilibili",
      skeleton: <SkeletonVedio />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "SnapSnap WeChat Miniprogram",
      description:
        "SnapSnap WeChat Miniprogram is a AI tool.",
      skeleton: <SkeletonOther />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with thousands of features
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};


export const SkeletonVedio = () => {
  return (
    <iframe
      src="//player.bilibili.com/player.html?isOutside=true&aid=112703532173412&bvid=BV11mhGe7EKy&cid=500001600395573&p=1"
      scrolling="no"
      width="100%"
      height={400}
      frameBorder="no"
      style={{ border: 0 }}
      allowFullScreen={true}
    ></iframe>
  );
};

export const SkeletonArticle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [rotations, setRotations] = useState<number[]>([]);

  const imageLinks = [
    {
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
      alt: "Xiaohongshu Homepage"
    },
    {
      image: "/images/snapsnap_articleA.jpg",
      link: "https://www.xiaohongshu.com/discovery/item/67f693cf000000000f03068d?source=webshare&xhsshare=pc_web&xsec_token=ABYrxiIHHYlH7fNxCTMHcTIk2Tw43y-TR1yj67nG9-G18=&xsec_source=pc_share",
      alt: "Revealing the Pain Points of Product Managers in Competitive Research"
    },
    {
      image: "/images/articleA.jpg",
      link: "https://www.xiaohongshu.com/discovery/item/67f693cf000000000f03068d?source=webshare&xhsshare=pc_web&xsec_token=ABYrxiIHHYlH7fNxCTMHcTIk2Tw43y-TR1yj67nG9-G18=&xsec_source=pc_share",
      alt: "Hello, I'm Dylan_Long"
    },
  ];

  // Generate random rotations after component mounts to prevent hydration mismatch
  useEffect(() => {
    const randomRotations = imageLinks.map(() => Math.random() * 20 - 10);
    setRotations(randomRotations);
    setIsMounted(true);
  }, []);

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  // Show a placeholder during server-side rendering
  if (!isMounted) {
    return (
      <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
        <div className="flex flex-row -ml-20">
          {imageLinks.map((_, idx) => (
            <div
              key={idx}
              className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
            >
              <div className="rounded-lg h-20 w-20 md:h-40 md:w-40 bg-gray-200 dark:bg-neutral-700 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {imageLinks.map((item, idx) => (
          item.link && item.link !== "#" ? (
            <Link
              key={"link-" + idx}
              href={item.link}
              target="_blank"
              className="z-10"
            >
              <motion.div
                variants={imageVariants}
                key={"images-first" + idx}
                style={{
                  rotate: rotations[idx] || 0,
                }}
                whileHover="whileHover"
                whileTap="whileTap"
                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                />
              </motion.div>
            </Link>
          ) : (
            <motion.div
              key={"images-first" + idx}
              variants={imageVariants}
              style={{
                rotate: rotations[idx] || 0,
              }}
              whileHover="whileHover"
              whileTap="whileTap"
              className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width="500"
                height="500"
                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
              />
            </motion.div>
          )
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonOther = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center relative bg-transparent dark:bg-transparent">
      <Image
        src="https://placehold.co/300x300?text=WeChat+Mini+Program"
        alt="WeChat Mini Program QR Code"
        width={300}
        height={300}
        className="rounded-lg shadow-lg object-contain"
      />
    </div>
  );
};
