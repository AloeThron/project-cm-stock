import React from "react";

type Props = {
  params: { slug: string[] };
};

export default function User({ params }: Props) {
  return (
    <div>
      User:{" "}
      {params.slug.map((v) => (
        <span key={v}>{v}</span>
      ))}
    </div>
  );
}
