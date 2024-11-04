import React from "react";

type Props = {
  color: string;
  label: string;
  colorLabel?: string;
};

export type HeadBannerProps = Props;
export const HeadBanner: React.FC<Props> = ({
  color,
  label,
  colorLabel = "#ffffff",
}) => {
  return (
    <section style={{ backgroundColor: color }}>
      <span style={{ color: colorLabel }}>{label}</span>
    </section>
  );
};
