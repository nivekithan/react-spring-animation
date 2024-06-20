import { useSprings, a } from "@react-spring/web";
import React, { useMemo } from "react";

export function loader() {
  return null;
}

export default function Page() {
  return (
    <div>
      <div className="h-[720px] grid place-items-center">
        <TextAnimation content="Refresh the page to see the animation" />
      </div>
    </div>
  );
}

function TextAnimation({ content }: { content: string }) {
  const words = useMemo(() => content.split(" "), [content]);
  const [allWordAnimation] = useSprings(words.length, (i) => {
    return {
      from: { y: 40, opacity: 0, rotate: 3 },
      to: { y: 0, opacity: 1, rotate: 0 },
      config: {
        tension: 130,
      },
      delay: i * 30,
      // delay: i * 75,
    };
  });

  return (
    <p className="text-5xl">
      {content.split(" ").map((word, wordIndex) => {
        return (
          <React.Fragment key={wordIndex}>
            <a.div
              className="inline-block origin-bottom-left"
              key={wordIndex}
              style={allWordAnimation[wordIndex]}
            >
              {word}
            </a.div>{" "}
          </React.Fragment>
        );
      })}
    </p>
  );
}
