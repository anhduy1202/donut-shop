import Image from "next/image";
import React from "react";
import { menuType } from "../../interface";
import Slider from "react-slick";
import { DonutTitle, SectionHeading } from "../Heading/Heading";

interface featuredProps {
  data: menuType[];
}

const Featured: React.FC<featuredProps> = (props) => {
  const { data } = props;
  return (
    <section className="overflow-hidden">
      <SectionHeading content="Featured" />
      <Carousel data={data} />
    </section>
  );
};

export const Carousel: React.FC<featuredProps> = (props) => {
  const { data } = props;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {data.map((donut) => {
        return <Donut key={donut.id} image={donut.image} title={donut.title} />;
      })}
    </Slider>
  );
};

export interface donutType {
  image: string;
  title: string;
}

export const Donut: React.FC<donutType> = (props) => {
  const { image, title } = props;
  return (
    <div className="mt-4 mr-4 flex flex-col text-center bg-pink-400 rounded-xl p-2  ">
      <Image src={image} alt={title} width={150} height={100} />
      <DonutTitle content={title} />
    </div>
  );
};

export default Featured;
