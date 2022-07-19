import React, { useState } from "react";
import { locationType } from "../../interface";
import { SectionHeading } from "../Heading/Heading";
import { SectionSpacing } from "../Spacing/Spacing";

interface locationProps {
  data: locationType[];
}

const Locations: React.FC<locationProps> = (props) => {
  const { data } = props;

  return (
    <SectionSpacing>
      <SectionHeading content="Locations" />
      <section className="mt-4 flex justify-between flex-nowrap items-start">
        {data.map((location) => {
          return (
            <div className="mr-3" key={location.id}>
              <LocationCard
                title={location.title}
                address={location.address}
                hours={location.hours}
              />
            </div>
          );
        })}
      </section>
    </SectionSpacing>
  );
};

interface cardProps {
  title: string;
  hours: string;
  address: string;
}

const LocationCard: React.FC<cardProps> = (props) => {
  const { title, hours, address } = props;

  return (
    <>
      <div className="text-center">
        <p className="font-lemonada rounded-lg text-14 bg-pink-400 text-pink-500 p-2">
          {title}
        </p>
        <div className="mt-2 font-lexend rounded-lg bg-pink-400 p-2 text-center mb-3">
          <p className="text-12 text-pink-500 font-medium">{address}</p>
          <p className="mt-2 text-12 text-pink-500 font-bold">{hours}</p>
        </div>
      </div>
    </>
  );
};

export default Locations;
