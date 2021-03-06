import { createContext } from "react";

export const initialSchemeState: Builder.Grup.BuilderMap = {
  bundleName: "",
  layout: {
    layout_template: null,
    layout_bannerImg: null,
    layout_bgColor: "#ffffff",
    steps_template: null,
    steps_alternateBgColor: "#ffffff",
    steps_bgColor: "#121212",
    steps_borderColor: "#121212",
    steps_fontColor: "#ffffff",
  },
  content: {
    sections: [
      {
        sectionName: "",
        required: false,
        maxSelect: 0,
        minSelect: 0,
        specialNotes: [],
        products: [],
      },
    ],
  },
};

export default createContext<Builder.Grup.ContextCreator | Builder.Grup.BuilderMap>(
  initialSchemeState
);
