import { FlexProps } from '@chakra-ui/react';
import { Product } from './schema';

declare namespace Grup {
  type LayoutTemplate = 'G1_HORICOL' | 'G1_VERTROW';

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
    generate: (svgAttrs: Builder.Grup.SvgAttributes) => JSX.Element;
  }

  type StepProduct = Product;

  type SectionContent = {
    section_name: string;
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
      template: string | null;
      alternateBgColor: string;
      bgColor: string;
      borderColor: string;
      fontColor: string;
    };
    content: {
      sections: SectionContent[];
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
