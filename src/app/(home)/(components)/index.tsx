"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { shrinkString } from "@/utils";
import { ProfileCircle, Calendar, ArrowRight } from "iconsax-react";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  pauseOnHover: false,
};

const Herosection = () => {
  return (
    <section className="relative h-[500px] min-[800px]:h-[500px] lg:h-[650px] overflow-hidden w-full">
      <div className="w-full h-full max-h-[720px] hidden sm:block absolute top-0 left-0 ">
        <Slider {...settings}>
          {HeroImage.map((h) => (
            <Image
              key={h.id}
              src={`/hero${h.id}.jpg`}
              alt="heroimage"
              width={1280}
              height={960}
              priority
              loading="eager"
              className="w-full max-h-[650px] object-cover opacity-[70%]"
            />
          ))}
        </Slider>
      </div>
      <div className="w-full h-full max-h-[650px] sm:hidden absolute top-0 left-0 ">
        <Slider {...settings}>
          {HeroImage.map((h) => (
            <Image
              key={h.id}
              src={`/hero${h.id}.jpg`}
              alt="heroImage"
              width={1280}
              height={960}
              priority
              loading="eager"
              className="w-full min-h-[500px] object-cover opacity-[70%]"
            />
          ))}
        </Slider>
      </div>
      <div className="flex top-0 relative z-10 text-white h-full items-center w-full bg-black/70 justify-center px-2 sm:px-4 lg:px-8 transition-colors duration-500">
        <div className="flex flex-col justify-center gap-y-5 w-full max-w-[80%] md:max-w-[60%] items-center bg-[#052C42] bg-opacity-[30%] h-[400px] min-[800px]:h-[300px] lg:h-[400px] py-9 md:py-[40px] px-[3%]">
          <h2 className="font-medium text-4xl md:font-bold md:text-6xl text-center font-jaka">
            Center for the Study of Police and Policing
          </h2>
          {/* <p className="text-center text-lg font-worksans">
            providing opportunities to acquiring both basic and advanced
            knowledge about Police and policing aspects, stands as a giant
            approach to security policies perfection through networking
            research, symposiums, conferences, workshops and seminars
          </p> */}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center container p-10 max-md:px-5 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
      >
        <Slider {...settings}>
          {com.map((hm) => (
            <Image
              key={hm.id}
              src={hm.image ? hm.image : `/commandant_${hm.id}.jpg`}
              width={323}
              height={438}
              alt="Illustration Image"
              className="grow w-full max-h-[450px] max-w-[450px] rounded-2xl max-md:mt-10 max-md:max-w-full object-cover"
            />
          ))}
        </Slider>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
      >
        <div className="flex flex-col grow text-xl leading-6 text-gray-800 max-md:mt-10 max-md:max-w-full">
          <header className="flex gap-3 justify-between self-start text-2xl items-center tracking-wide">
            <div className="h-2 w-[40px] bg-blue-main" />
            <h1>About us</h1>
          </header>
          <h2 className="mt-2 text-xl md:text-4xl font-semibold leading-10 max-md:max-w-full">
            The Nigeria Police Academy
          </h2>
          <p className="mt-5 tracking-wide max-md:max-w-full">
            The origin of the Nigeria Police Academy dates back to the early 80s
            when the Government of Nigeria in 1981 requested the British
            Government to make available to Nigeria, some united Kingdom Police
            officers to assess the training needs of The Nigeria Police.
          </p>
          <Button
            asChild
            className=" bg-blue-main mt-5 hover:bg-blue-main/80 w-[152px] h-[56px] rounded-lg text-base"
          >
            <Link href="/about?path=about">Learn More</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

type ArticleCardProps = {
  imageSrc: string;
  author: string;
  date: string;
  title: string;
  description: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  imageSrc,
  author,
  date,
  title,
  description,
}) => (
  <article className="flex flex-col grow  text-gray-800 border border-solid border-slate- rounded-[32px] max-md:mt-6">
    <Image
      className="w-full h-64 object-cover object-center rounded-t-xl aspect-[1.33]"
      src={`/${imageSrc}`}
      alt=""
      width={400}
      height={360}
    />
    <div className="p-4">
      <div className="flex gap-2 justify-between mt-6 w-full text-sm">
        <div className="flex gap-2">
          <ProfileCircle className="shrink-0 aspect-square w-[17px]" />
          <span>{author}</span>
        </div>
        <div className="flex gap-2">
          <Calendar className="shrink-0 aspect-square w-[17px]" />
          <time>{date}</time>
        </div>
      </div>
      <h1 className="block mt-2 text-xl font-semibold text-zinc-800">
        {shrinkString({ str: title, len: 40 })}
      </h1>
      <p className="text-sm">{shrinkString({ str: description, len: 80 })}</p>
      <div className="flex justify-center items-center px-16 mt-6 text-xl max-md:px-5">
        <div className="flex gap-4">
          <span>Read more</span>
          <ArrowRight />
        </div>
      </div>
    </div>
  </article>
);

const NewsSection = () => {
  const articles: ArticleCardProps[] = [
    {
      imageSrc: "wireless.jpg",
      author: "Ict Directorate",
      date: "Feb 23, 2024",
      title: "installation of wireless network.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam commodi doloremque error, autem odit recusandae voluptatibus accusantium sit sint fugiat ducimus, non omnis corrupti iste dolor id quam, aperiam consectetur quo maiores quis perspiciatis voluptate et quaerat. Molestiae, recusandae! Atque culpa quidem repellat voluptatum illo corporis ad a, suscipit consequatur aperiam deserunt perspiciatis inventore iste sed. In perferendis nemo officiis alias. Quam distinctio laboriosam nobis cupiditate ullam doloremque, voluptatem alias placeat mollitia voluptates voluptas et iste sed sapiente ab ipsa dolorem? At assumenda sed repellendus numquam sint quo pariatur, enim non qui sit dignissimos temporibus consectetur soluta, fugit distinctio hic magni laborum! Atque et totam natus iste deleniti eligendi ab sed accusamus modi placeat distinctio reiciendis, beatae eum, repellendus eveniet harum, nam similique perferendis labore minima porro voluptatum! Ratione asperiores pariatur praesentium incidunt facilis quod fugit. Recusandae suscipit assumenda eligendi. Nam vero maiores a ipsa, voluptate nostrum modi magni cupiditate!",
    },
    {
      imageSrc: "exam.jpeg",
      author: "Ict Editors",
      date: "Feb 23, 2024",
      title: "RC 11 Exams.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam commodi doloremque error, autem odit recusandae voluptatibus accusantium sit sint fugiat ducimus, non omnis corrupti iste dolor id quam, aperiam consectetur quo maiores quis perspiciatis voluptate et quaerat. Molestiae, recusandae! Atque culpa quidem repellat voluptatum illo corporis ad a, suscipit consequatur aperiam deserunt perspiciatis inventore iste sed. In perferendis nemo officiis alias. Quam distinctio laboriosam nobis cupiditate ullam doloremque, voluptatem alias placeat mollitia voluptates voluptas et iste sed sapiente ab ipsa dolorem? At assumenda sed repellendus numquam sint quo pariatur, enim non qui sit dignissimos temporibus consectetur soluta, fugit distinctio hic magni laborum! Atque et totam natus iste deleniti eligendi ab sed accusamus modi placeat distinctio reiciendis, beatae eum, repellendus eveniet harum, nam similique perferendis labore minima porro voluptatum! Ratione asperiores pariatur praesentium incidunt facilis quod fugit. Recusandae suscipit assumenda eligendi. Nam vero maiores a ipsa, voluptate nostrum modi magni cupiditate!",
    },
    {
      imageSrc: "exam.jpeg",
      author: "Ict directorates",
      date: "Feb 23, 2024",
      title: "Launch Of The Center for Policing and Policy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam commodi doloremque error, autem odit recusandae voluptatibus accusantium sit sint fugiat ducimus, non omnis corrupti iste dolor id quam, aperiam consectetur quo maiores quis perspiciatis voluptate et quaerat. Molestiae, recusandae! Atque culpa quidem repellat voluptatum illo corporis ad a, suscipit consequatur aperiam deserunt perspiciatis inventore iste sed. In perferendis nemo officiis alias. Quam distinctio laboriosam nobis cupiditate ullam doloremque, voluptatem alias placeat mollitia voluptates voluptas et iste sed sapiente ab ipsa dolorem? At assumenda sed repellendus numquam sint quo pariatur, enim non qui sit dignissimos temporibus consectetur soluta, fugit distinctio hic magni laborum! Atque et totam natus iste deleniti eligendi ab sed accusamus modi placeat distinctio reiciendis, beatae eum, repellendus eveniet harum, nam similique perferendis labore minima porro voluptatum! Ratione asperiores pariatur praesentium incidunt facilis quod fugit. Recusandae suscipit assumenda eligendi. Nam vero maiores a ipsa, voluptate nostrum modi magni cupiditate!",
    },
  ];

  return (
    <section className="flex flex-col items-center container">
      <div className="flex flex-col items-center p-20  max-md:px-5">
        <header className="flex gap-5 justify-between items-center text-2xl tracking-wide leading-7 text-gray-800 whitespace-nowrap">
          <div className="h-2 w-[40px] bg-blue-main" />
          <h1>News</h1>
        </header>
        <h2 className="mt-4 text-4xl font-semibold leading-10 text-center text-gray-800">
          Browse News letters
        </h2>
      </div>
      <section className="self-stretch mt-2 max-md:mt-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export { Herosection, AboutSection, NewsSection };

interface image {
  image: string;
  id: number;
}

export const HeroImage: image[] = [
  {
    id: 1,
    image: "",
  },
  {
    id: 2,
    image: "",
  },
  {
    id: 3,
    image: "",
  },
];

export const com: image[] = [
  {
    id: 1,
    image: "",
  },
  {
    id: 2,
    image: "",
  },
  {
    id: 3,
    image: "",
  },
  {
    id: 4,
    image: "/hero1.jpg",
  },
  {
    id: 5,
    image: "/hero2.jpg",
  },
];
