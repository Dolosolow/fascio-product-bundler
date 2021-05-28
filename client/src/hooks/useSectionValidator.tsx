import { useEffect, useState } from "react";
import { Fade, Text, chakra } from "@chakra-ui/react";

import { useQuery } from "src/hooks/useQuery";
import type { Section } from "src/types/schema";

interface ValidationStatus {
  type: "ERROR" | "SUCCESS" | "N/A";
  field: string;
  message: JSX.Element | undefined;
}

export const useSectionValidator = (cartState: Grupie.GrupCart, sections: Section[]) => {
  const querySection = useQuery("e_section");

  const [currentSection, setCurrentSection] = useState(0);
  const [sectionStatus, setSectionStatus] = useState<ValidationStatus>({
    type: "N/A",
    field: "",
    message: undefined,
  });

  useEffect(() => {
    if (querySection) {
      setCurrentSection(parseInt(querySection));
    }
  }, [querySection]);

  const validate = (idx: number) => {
    const sectionCartItems = cartState.items.filter((item) => item.sectionId === currentSection);
    const section = sections[currentSection];
    let message;

    let status: "ERROR" | "SUCCESS";

    if (section.required) {
      if (section.minSelect <= sectionCartItems.length) {
        status = "SUCCESS";
        setCurrentSection(idx);
      } else {
        status = "ERROR";
        message = `Please select ${section.minSelect} product.`;
      }
    } else {
      status = "SUCCESS";
      setCurrentSection(idx);
    }

    setSectionStatus({
      type: status,
      field: sections[currentSection].sectionName,
      message: (
        <Fade in={true}>
          <Text color="red.500" fontSize="sm" mb={1} textAlign="center">
            <chakra.strong mr={1}>{message}</chakra.strong>
          </Text>
        </Fade>
      ),
    });
  };

  const clampCartItems = () => {
    const sectionMaxItems = sections[currentSection].maxSelect;
    let totalItems = 0;

    cartState.items.forEach((item) => {
      if (item.sectionId === currentSection) {
        totalItems += item.quantity;
      }
    });

    return totalItems >= sectionMaxItems;
  };

  return {
    currentSection,
    sectionStatus,
    validate,
    clampCartItems,
  };
};
