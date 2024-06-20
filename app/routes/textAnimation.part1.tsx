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
  const charLength = useMemo(() => words.join("").length, [words]);

  const [allCharAnimation] = useSprings(charLength, (i) => {
    return {
      from: { y: 15, opacity: 0, rotate: 1.25 },
      to: { y: 0, opacity: 1, rotate: 0 },
      config: {
        tension: 100,
      },
      delay: i * 17,
    };
  });

  return (
    <p className="text-5xl">
      {words.map((word, wordIndex) => {
        return (
          <React.Fragment key={wordIndex}>
            <div className="inline-block">
              {word.split("").map((char, charIndex) => {
                const charAnimationIndex =
                  previousIndex(wordIndex, words) + charIndex;

                const animatioStyle = allCharAnimation[charAnimationIndex];

                return (
                  <React.Fragment key={charIndex}>
                    <a.div className="inline-block" style={animatioStyle}>
                      {char}
                    </a.div>
                  </React.Fragment>
                );
              })}
            </div>{" "}
          </React.Fragment>
        );
      })}
    </p>
  );
}

function previousIndex(currentIndex: number, words: string[]) {
  if (currentIndex === 0) {
    return currentIndex;
  }

  const allChars = words.slice(0, currentIndex).join("");

  return allChars.length;
}
