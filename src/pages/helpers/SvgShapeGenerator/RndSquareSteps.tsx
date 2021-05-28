export const rndSqareStepCCM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 119 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M18 17.1206H119" stroke={svgAttrs.steps_borderColor} strokeWidth="1.75886" />
    <circle
      cx="93"
      cy="19"
      r="14.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <rect
      x="3.5"
      y="3.5"
      width="27"
      height="27"
      rx="7.5"
      fill={svgAttrs.steps_bgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <path
      d="M14.2925 20.8921L11.0842 17.6837C10.7267 17.3262 10.1583 17.3262 9.80084 17.6837C9.44334 18.0412 9.44334 18.6096 9.80084 18.9671L13.6417 22.8079C13.9992 23.1654 14.5767 23.1654 14.9342 22.8079L24.6508 13.1004C25.0083 12.7429 25.0083 12.1746 24.6508 11.8171C24.2933 11.4596 23.725 11.4596 23.3675 11.8171L14.2925 20.8921Z"
      fill={svgAttrs.steps_fontColor}
    />
  </svg>
);

export const rndSqareStepCM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 119 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M18 17.1206H119" stroke={svgAttrs.steps_borderColor} strokeWidth="1.75886" />
    <circle
      cx="93"
      cy="19"
      r="14.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <rect
      x="3.5"
      y="3.5"
      width="27"
      height="27"
      rx="7.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <path
      d="M14.2925 20.8921L11.0842 17.6837C10.7267 17.3262 10.1583 17.3262 9.80084 17.6837C9.44334 18.0412 9.44334 18.6096 9.80084 18.9671L13.6417 22.8079C13.9992 23.1654 14.5767 23.1654 14.9342 22.8079L24.6508 13.1004C25.0083 12.7429 25.0083 12.1746 24.6508 11.8171C24.2933 11.4596 23.725 11.4596 23.3675 11.8171L14.2925 20.8921Z"
      fill={svgAttrs.steps_borderColor}
    />
  </svg>
);

export const rndSqareStepCNM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 119 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M18 18.1206H119" stroke={svgAttrs.steps_borderColor} strokeWidth="1.75886" />
    <circle
      cx="93"
      cy="20"
      r="14.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <rect
      x="3.5"
      y="4.5"
      width="27"
      height="27"
      rx="7.5"
      fill={svgAttrs.steps_bgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <path
      d="M18.7412 25H16.6143V14.7256L13.4766 15.7979V13.9961L18.4688 12.1592H18.7412V25Z"
      fill={svgAttrs.steps_fontColor}
    />
  </svg>
);

export const rndSqareStepNM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 119 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M18 18.1206H119" stroke={svgAttrs.steps_borderColor} strokeWidth="1.75886" />
    <circle
      cx="93"
      cy="20"
      r="14.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <rect
      x="3.5"
      y="4.5"
      width="27"
      height="27"
      rx="7.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <path
      d="M18.7412 25H16.6143V14.7256L13.4766 15.7979V13.9961L18.4688 12.1592H18.7412V25Z"
      fill={svgAttrs.steps_borderColor}
    />
  </svg>
);

const svgs: Builder.Grup.StepSvgInput[] = [
  {
    id: 'step-ccm-rdsqr',
    generate: rndSqareStepCCM,
  },
  {
    id: 'step-cm-rdsqr',
    generate: rndSqareStepCM,
  },
  {
    id: 'step-cnm-rdsqr',
    generate: rndSqareStepCNM,
  },
  {
    id: 'step-nm-rdsqr',
    generate: rndSqareStepNM,
  },
];

export default svgs;
