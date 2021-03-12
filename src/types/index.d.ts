import { FlexProps } from '@chakra-ui/react';

declare namespace Grup {
  type Message = { path: string; message?: string };

  type ValidationOptions = Message;

  type Validation = Message[];

  type LayoutTemplate = 'G1_HORICOL' | 'G1_VERTROW';

  type StepsTemplate = 'STEP_CM' | 'STEP_COLOR_CM' | 'STEP_NM' | 'STEP_COLOR_NM';

  type StepContent = {
    instructions: string;
    limit: number | null;
    section: number;
    specialNotes: string[];
    products: any[];
  };

  interface BuilderMap {
    layout: {
      bannerImg?: string | null;
      bgColor: string;
      template: LayoutTemplate | null;
    };
    steps: {
      template: StepsTemplate | null;
      alternateBgColor: string;
      bgColor: string;
      borderColor: string;
      fontColor: string;
    };
    content: {
      steps: StepContent[];
    };
  }

  interface ContextCreator {
    scheme: Builder.Grup.BuilderMap;
    setScheme: React.Dispatch<React.SetStateAction<Builder.Grup.BuilderMap>>;
  }
}

interface BuilderTools extends FlexProps {
  children?: ReactNode | ReactChildren;
  error?: Grup.Validation<Grup.Message>[];
  required?: boolean;
  responsiveDirection?: boolean;
  showAlternateBgClr?: boolean;
  success?: Grup.Validation<Grup.Message>[];
  value?: any;
  wrapChildren?: boolean;
  changeLayoutColorScheme?: (key: string, color: string) => void;
  changeStepsColorScheme?: (key: string, color: string) => void;
  toggleShow?: (value: React.SetStateAction<boolean>) => void;
}

export as namespace Builder;
