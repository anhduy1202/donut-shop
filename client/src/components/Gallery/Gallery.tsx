import React, { Dispatch, SetStateAction } from "react";
import { urlFor } from "../../../lib/sanity";
import { galleryType } from "../../interface";
import { SectionHeading } from "../Heading/Heading";
import { SectionSpacing } from "../Spacing/Spacing";

interface galleryProps {
  data: galleryType[];
  setLoadMore: Dispatch<SetStateAction<boolean>>;
}

const Gallery: React.FC<galleryProps> = (props) => {
  const { data, setLoadMore } = props;
  return (
    <SectionSpacing>
      <SectionHeading content="Gallery" />
      <div className="mt-4 flex justify-center gap-3 flex-wrap">
        {data?.map((image) => {
          return (
            <div key={image._key} className="">
              <GalleryItem image={image} />
            </div>
          );
        })}
        <button
          onClick={() => setLoadMore(true)}
          className="mt-2 bg-button-pink transition-all duration-300 hover:bg-red-500  rounded-lg text-white text-14 font-lemonada p-2"
        >
          Load more
        </button>
      </div>
    </SectionSpacing>
  );
};

interface galleryItemProps {
  image: galleryType;
}

const GalleryItem: React.FC<galleryItemProps> = (props) => {
  const { image } = props;
  const url: any = urlFor(image.asset._ref);
  return (
    <>
      <img
        className="w-[164px] h-[240px] rounded-xl"
        src={url}
        alt="donut image"
      />
    </>
  );
};

export default Gallery;
