import React from "react";

interface contentType {
  content: string;
}

export const Heading1: React.FC<contentType> = (props) => {
  const { content } = props;
  return (
    <div>
      <p className="mt-2 font-lemon text-42 text-white text-shadow-pink">{content}</p>
    </div>
  );
};

export const SubHeading: React.FC<contentType> = (props) => {
  const { content } = props;
  return (
    <div>
      <p className="mt-[-0.5rem] mb-10 font-lobster text-20 text-pink-600">{content}</p>
    </div>
  );
};

export const SectionHeading: React.FC<contentType> = (props) => {
  const { content } = props;
  return (
    <div className="">
      <p className="text-20">{content}</p>
    </div>
  );
};

export const DonutTitle: React.FC<contentType> = (props) => {
  const { content } = props;
  return (
    <div>
      <p className="text-14 mt-2 font-lemonada font-semibold">{content}</p>
    </div>
  );
};