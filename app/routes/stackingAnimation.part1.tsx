import { useState } from "react";
import { motion } from "framer-motion";

export function loader() {
  return null;
}

export default function Page() {
  return (
    <div>
      <div className="h-[720px] grid place-items-center">
        <StackingAnimation />
      </div>
    </div>
  );
}

function StackingAnimation() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="">
      <MenuContent open={showMenu} />

      <div className="absolute bottom-8 right-8">
        <button
          type="button"
          className="px-6 py-4 bg-blue-600 text-white rounded-md text-2xl"
          onClick={() => setShowMenu(!showMenu)}
        >
          Show
        </button>
      </div>
    </div>
  );
}

function MenuContent({ open }: { open: boolean }) {
  return (
    <motion.div animate={open ? "open" : "closed"} initial={false}>
      <motion.div
        variants={{
          open: {
            y: "-10%",
            x: "-50%",
          },
          closed: {
            y: "100%",
            x: "-50%",
          },
        }}
        transition={{
          type: "spring",
          damping: 20,
          delayChildren: 0.3,
          staggerChildren: 0.2,
        }}
        className="absolute bottom-0 left-1/2"
      >
        <ul className="flex flex-col gap-12 p-12 bg-blue-600 rounded-xl text-white text-lg">
          <Link>Case Studies</Link>
          <Link>About Us</Link>
          <Link>Contact Us</Link>
          <motion.ul
            className="flex gap-4"
            variants={{
              open: { opacity: 1, transition: { type: "spring", damping: 20 } },
              closed: { opacity: 0 },
            }}
          >
            <li>EPYC labs</li>
            <li>Resources</li>
            <li>Webflow</li>
            <li>Privacy Policy</li>
          </motion.ul>
        </ul>
      </motion.div>
    </motion.div>
  );
}

function Link({ children }: { children: React.ReactNode }) {
  return (
    <motion.li
      variants={{
        open: { opacity: 1, transition: { type: "spring", damping: 20 } },
        closed: { opacity: 0 },
      }}
    >
      {children}
    </motion.li>
  );
}
