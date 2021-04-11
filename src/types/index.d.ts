import { FlexProps } from '@chakra-ui/react';
import { Product } from './schema';

declare namespace Grup {
  type LayoutTemplate = 'G1_HORICOL' | 'G1_VERTROW';

  type StepsTemplate = 'STEP_CM' | 'STEP_CCM' | 'STEP_NM' | 'STEP_CNM';

  type StepsShapeTemplate = 'CRL' | 'SQR' | 'DMD' | 'RDSQR' | 'RDDMD' | 'BRST';

  type Message = { path: string; message?: string };

  type ValidationOptions = Message;

  type Validation = Message[];

  type SvgAttributes = {
    alternateBgColor?: string;
    bgColor?: string;
    borderColor?: string;
    fontColor?: string;
  };

  interface StepSvgInput {
    id: string;
    generate: (svgAttrs: Builder.Grup.SvgAttributes) => any;
  }

  type StepProduct = Product;

  type StepContent = {
    instructions: string;
    section: number;
    limit: number;
    required: boolean;
    specialNotes: string[];
    products: StepProduct[];
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
