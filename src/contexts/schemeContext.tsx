import { createContext } from 'react';

export const initialSchemeState: Builder.Grup.BuilderMap = {
  layout: {
    bannerImg: null,
    bgColor: '#ffffff',
    template: null,
  },
  steps: {
    template: null,
    alternateBgColor: '#ffffff',
    bgColor: '#121212',
    borderColor: '#121212',
    fontColor: '#ffffff',
  },
  content: {
    steps: [
      {
        instructions: '',
        limit: null,
        section: 1,
        specialNotes: [],
        products: [],
      },
    ],
  },
};

export default createContext<Builder.Grup.ContextCreator | Builder.Grup.BuilderMap>(
  initialSchemeState
);
