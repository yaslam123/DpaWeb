import React from "react";
import { useId, useState, useEffect } from "react";

export function FeaturesSectionWithCardGradient() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const grid = [
  {
    title: "Data Controllers",
    description:
      "In data protection, a data controller is an entity that decides why and how personal data is processed, bearing the main responsibility for compliance with data protection laws. They set the purpose and methods for data processing, ensuring legality and security, and handling individual data rights.",
  },
  {
    title: "Data Processors",
    description:
      "A data processor, on the other hand, is an entity that processes data on behalf of the controller. They act under the controller's instructions and have specific obligations, particularly regarding data security.",
  },
  {
    title: "Data Subjects",
    description:
      "People whose personal information are collected, stored and processed are called data subjects. Know your rights and learn how to protect your data privacy, online and offline.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const [p, setP] = useState<number[][]>([
    [7, 1], // Static fallback for SSR
    [8, 2],
    [9, 3],
  ]);

  useEffect(() => {
    // Randomize pattern after client hydration
    const randomPattern = [
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
    setP(randomPattern);
  }, []);

  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares.map(([x, y]: any, index: number) => (
        <rect
          strokeWidth="0"
          key={`${x}-${y}-${index}`} // Add index to make the key unique
          width={width + 1}
          height={height + 1}
          x={x * width}
          y={y * height}
        />
      ))}
    </svg>
  );
}
