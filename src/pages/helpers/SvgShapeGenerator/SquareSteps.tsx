export const squareStepCCM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 116 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M15 14.1206H116" stroke={svgAttrs.borderColor} strokeWidth="1.75886" />
    <circle
      cx="90"
      cy="16"
      r="14.5"
      fill={svgAttrs.alternateBgColor}
      stroke={svgAttrs.borderColor}
      strokeWidth="2.5"
    />
    <rect
      x="1.5"
      y="1.5"
      width="26.9965"
      height="26.9965"
      fill={svgAttrs.bgColor}
      stroke={svgAttrs.borderColor}
      strokeWidth="2.5"
    />
    <path
      d="M12.25 18.85L9.04169 15.6416C8.68419 15.2841 8.11586 15.2841 7.75836 15.6416C7.40086 15.9991 7.40086 16.5675 7.75836 16.925L11.5992 20.7658C11.9567 21.1233 12.5342 21.1233 12.8917 20.7658L22.6084 11.0583C22.9659 10.7008 22.9659 10.1325 22.6084 9.77496C22.2509 9.41746 21.6825 9.41746 21.325 9.77496L12.25 18.85Z"
      fill={svgAttrs.fontColor}
    />
  </svg>
);

export const squareStepCM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 116 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M15 14.1206H116" stroke={svgAttrs.borderColor} strokeWidth="1.75886" />
    <circle
      cx="90"
      cy="16"
      r="14.5"
      fill={svgAttrs.alternateBgColor}
      stroke={svgAttrs.borderColor}
      strokeWidth="2.5"
    />
    <rect
      x="1.5"
      y="1.5"
      width="26.9965"
      height="26.9965"
      fill={svgAttrs.alternateBgColor}
      stroke={svgAttrs.borderColor}
      strokeWidth="2.5"
    />
    <path
      d="M12.25 18.85L9.04169 15.6416C8.68419 15.2841 8.11586 15.2841 7.75836 15.6416C7.40086 15.9991 7.40086 16.5675 7.75836 16.925L11.5992 20.7658C11.9567 21.1233 12.5342 21.1233 12.8917 20.7658L22.6084 11.0583C22.9659 10.7008 22.9659 10.1325 22.6084 9.77496C22.2509 9.41746 21.6825 9.41746 21.325 9.77496L12.25 18.85Z"
      fill={svgAttrs.borderColor}
    />
  </svg>
);

export const squareStepCNM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 117 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M16 14.1206H117" stroke={svgAttrs.borderColor} strokeWidth="1.75886" />
    <circle
      cx="91"
      cy="16"
      r="14.5"
      fill={svgAttrs.alternateBgColor}
      stroke={svgAttrs.borderColor}
      strokeWidth="2.5"
    />
    <rect
      x="1.5"
      y="1.5"
      width="26.9965"
      height="26.9965"
      fill={svgAttrs.bgColor}
      stroke={svgAttrs.borderColor}
      strokeWidth="2.5"
    />
    <path
      d="M16.7412 22H14.6143V11.7256L11.4766 12.7979V10.9961L16.4688 9.15918H16.7412V22Z"
      fill={svgAttrs.fontColor}
    />
  </svg>
);

export const squareStepNM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 117 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M16 14.1206H117" stroke={svgAttrs.borderColor} strokeWidth="1.75886" />
    <circle
      cx="91"
      cy="16"
      r="14.5"
      fill={svgAttrs.alternateBgColor}
      stroke={svgAttrs.borderColor}
      strokeWidth="2.5"
    />
    <rect
      x="1.5"
      y="1.5"
      width="26.9965"
      height="26.9965"
      fill={svgAttrs.alternateBgColor}
      stroke={svgAttrs.borderColor}
      strokeWidth="2.5"
    />
    <path
      d="M16.7412 22H14.6143V11.7256L11.4766 12.7979V10.9961L16.4688 9.15918H16.7412V22Z"
      fill={svgAttrs.borderColor}
    />
  </svg>
);

const svgs: Builder.Grup.StepSvgInput[] = [
  {
    id: 'step-ccm-sqr',
    generate: squareStepCCM,
  },
  {
    id: 'step-cm-sqr',
    generate: squareStepCM,
  },
  {
    id: 'step-cnm-sqr',
    generate: squareStepCNM,
  },
  {
    id: 'step-nm-sqr',
    generate: squareStepNM,
  },
];

export default svgs;
