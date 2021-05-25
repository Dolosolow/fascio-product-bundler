import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";
import _ from "lodash";

import StepMark from "src/components/StepProgress/StepMark";
import { Section } from "src/types/schema";

interface ValidationStatus {
  type: "ERROR" | "SUCCESS" | "N/A";
  field: string;
  message: JSX.Element | undefined;
}

interface SPProps extends FlexProps {
  sections: Section[];
  status: ValidationStatus;
  handleValidation: (idx: number) => void;
}

const StepProgress = (props: SPProps) => {
  const SPPropsStyles = { ..._.omit(props, ["sections", "status", "handleValidation"]) };

  const checkStepStatus = (type: "ERROR" | "SUCCESS" | "N/A", field: string) => {
    if (props.status.type === "SUCCESS" && props.status.field === field) {
      window.localStorage.setItem(field, "true");
    }

    return props.status.type === type && props.status.field === field;
  };

  const checkForCompletion = (type: "ERROR" | "SUCCESS" | "N/A", field: string) => {
    const isComplete = window.localStorage.getItem(field);

    if (isComplete) {
      return JSON.parse(isComplete);
    }

    return checkStepStatus(type, field);
  };

  return (
    <Flex
      display={window.location.pathname.includes("/cart") ? "none" : "inherit"}
      justify="center"
      align="center"
      flexDir="row"
      {...SPPropsStyles}
      position="relative"
    >
      {props.sections.map((section, idx) => {
        const isComplete = checkForCompletion("SUCCESS", section.sectionName);
        const hasError = checkStepStatus("ERROR", section.sectionName);
        return (
          <React.Fragment key={idx}>
            <StepMark
              stepIdx={idx + 1}
              stepBgColor={isComplete ? "red" : "#fff"}
              stepBorder="red"
              stepFontColor={isComplete ? "#fff" : "red"}
              title={section.sectionName}
              complete={isComplete}
              hasError={hasError}
              handleClick={() => props.handleValidation(idx)}
            />
            {props.sections && idx === props.sections.length - 1 ? null : (
              <Flex bg="red" h="2px" w="50%" />
            )}
          </React.Fragment>
        );
      })}
    </Flex>
  );
};

export default StepProgress;
