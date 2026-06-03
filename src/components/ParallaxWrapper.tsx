import type { ReactNode } from "react";

interface Props {
  depth: number;
  children: ReactNode;
}

export default function ParallaxWrapper({ depth, children }: Props) {
  return (
    <div
      className="will-change-transform"
      style={{
        transform: `translate(calc(var(--warp-x, 0px) * ${depth}), calc(var(--warp-y, 0px) * ${depth}))`,
        transition: "transform 200ms ease-out",
      }}
    >
      {children}
    </div>
  );
}
