import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useDimensions } from "~/utils/useDimension";

export default function StackingAnimation() {
  const [isOpen, setIsOpen] = useState(false);

  const parentElement = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(parentElement);

  return (
    <motion.div
      className="h-screen bg-blue-600"
      animate={isOpen ? "open" : "closed"}
      ref={parentElement}
    >
      <motion.nav
        className="w-[350px] h-screen bg-white"
        variants={navigationVariants}
        custom={height}
        initial={false}
      >
        <button className="p-6 text-black" onClick={() => setIsOpen(!isOpen)}>
          <MenuButton />
        </button>
        <motion.div
          className="p-6 flex flex-col gap-y-6"
          variants={{
            open: {
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
            closed: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                staggerDirection: -1,
              },
            },
          }}
        >
          <motion.div
            className="h-[40px] w-full border-orange-600 border-2 rounded-md"
            variants={itemVariants}
            key="1"
          ></motion.div>
          <motion.div
            className="h-[40px] w-full border-blue-600 border-2 rounded-md"
            variants={itemVariants}
            key="2"
          ></motion.div>
          <motion.div
            className="h-[40px] w-full border-lime-600 border-2 rounded-md"
            variants={itemVariants}
            key="3"
          ></motion.div>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { stiffness: 1000, velocity: -100 },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { stiffness: 1000 },
  },
};

const navigationVariants = {
  open: (height: number) => {
    console.log(height);
    return {
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: { stiffness: 20, type: "spring", restDelta: 2 },
    };
  },
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: { velocity: 30, stiffness: 120 },
  },
};

function MenuButton() {
  return (
    <svg width="32px" viewBox="0 0 24 24">
      <g
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      >
        <motion.line
          x1="4"
          y1="7"
          x2="20"
          y2="7"
          variants={buttonVariants.first}
          initial={false}
        />
        <motion.line
          x1="4"
          y1="13"
          x2="20"
          y2="13"
          variants={buttonVariants.second}
          initial={false}
        />
        <motion.line
          x1="4"
          y1="19"
          x2="20"
          y2="19"
          variants={buttonVariants.third}
          initial={false}
        />
      </g>
    </svg>
  );
}

const buttonVariants = {
  first: {
    closed: {
      y: "0px",
      rotate: "0deg",
    },
    open: {
      y: ["6px", "6px"],
      rotate: ["0deg", "45deg"],
    },
  },

  second: {
    closed: {
      y: "0px",
      rotate: "0deg",
    },
    open: {
      y: ["0px", "0px"],
      rotate: ["0deg", "45deg"],
    },
  },

  third: {
    closed: {
      y: "0px",
      rotate: "0deg",
    },
    open: {
      y: ["-6px", "-6px"],
      rotate: ["0deg", "-45deg"],
    },
  },
};
