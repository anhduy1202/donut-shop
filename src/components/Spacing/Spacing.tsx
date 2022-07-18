import React from "react";

type Spacing1Props = {
  children?: React.ReactNode;
};

export const SectionSpacing: React.FC<Spacing1Props> = (props) => {
  const { children } = props;
  return <div className="mt-8">{children}</div>;
};
