import { useState, useEffect } from "react";
import { Wrap } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

import { Section } from "src/types/schema";

interface PCProps {
  currentSection: number;
  sections: Section[];
  children?: React.ReactNode;
}

const ProductContainer = ({ currentSection, sections, ...props }: PCProps) => {
  const [wViewport, setWviewport] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWviewport(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [wViewport]);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={sections[currentSection].sectionName}
        initial={{ translateX: wViewport <= 700 ? 500 : 1100, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        exit={{ translateX: wViewport <= 700 ? -500 : -1100, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Wrap padding={[0, 0, 0, 0, 0]} justify="center" spacing="15px">
          {props.children}
        </Wrap>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductContainer;
