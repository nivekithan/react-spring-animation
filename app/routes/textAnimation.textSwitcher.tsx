import { a, useSprings } from "@react-spring/web";
import { useState } from "react";

export function loader() {
  return null;
}

export default function Index() {
  return (
    <div className="h-[720px] grid place-items-center">
      <TextSwitcher
        content={[
          "Hello World",
          "World is new",
          "Random words are wise",
          "Animation is looping",
        ]}
      />
    </div>
  );
}

function TextSwitcher({ content }: { content: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animateContent = content[currentIndex];

  const [styles] = useSprings(
    animateContent.length,
    (i) => ({
      from: { deg: 90, opacity: 0, transformOrigin: "bottom left", scale: 0.8 },
      to: async (next) => {
        await next({
          deg: 0,
          opacity: 1,
          transformOrigin: "bottom left",
          delay: i * 50,
          scale: 1,
        });
        await next({
          deg: -90,
          opacity: 0,
          transformOrigin: "top left",
          delay: 1000 + (animateContent.length - i - 1) * 75,
          scale: 0.6,
        });

        if (i !== 0) {
          return;
        }

        if (currentIndex === content.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex((i) => i + 1);
        }
      },
      config: {
        friction: 50,
        tension: 170,
      },
    }),
    [currentIndex]
  );

  return (
    <div className="overflow-hidden text-5xl w-[60vw] flex items-center justify-center">
      <div className="absolute">
        {animateContent.split("").map((char, index) => {
          const style = styles[index];
          return (
            <a.div
              key={index}
              className="inline-block"
              style={{
                ...style,
                transform: style.deg.to(
                  (i) => `perspective(800px) rotate3d(1, 0,0,${i}deg)`
                ),
              }}
            >
              {char === " " ? "\u00A0" : char}
            </a.div>
          );
        })}
      </div>
    </div>
  );
}
