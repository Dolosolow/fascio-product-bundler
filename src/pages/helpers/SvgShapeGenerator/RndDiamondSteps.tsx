export const rndDiamondStepCCM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 120 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M19 18.1206H120" stroke={svgAttrs.steps_borderColor} strokeWidth="1.75886" />
    <circle
      cx="94"
      cy="20"
      r="14.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <rect
      x="-0.87868"
      y="18.2129"
      width="27"
      height="27"
      rx="7.5"
      transform="rotate(-45 -0.87868 18.2129)"
      fill={svgAttrs.steps_bgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <path
      d="M15.2925 21.8921L12.0842 18.6837C11.7267 18.3262 11.1583 18.3262 10.8008 18.6837C10.4433 19.0412 10.4433 19.6096 10.8008 19.9671L14.6417 23.8079C14.9992 24.1654 15.5767 24.1654 15.9342 23.8079L25.6508 14.1004C26.0083 13.7429 26.0083 13.1746 25.6508 12.8171C25.2933 12.4596 24.725 12.4596 24.3675 12.8171L15.2925 21.8921Z"
      fill={svgAttrs.steps_fontColor}
    />
  </svg>
);

export const rndDiamondStepCM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 120 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M19 18.1206H120" stroke={svgAttrs.steps_borderColor} strokeWidth="1.75886" />
    <circle
      cx="94"
      cy="20"
      r="14.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <rect
      x="-0.87868"
      y="18.2129"
      width="27"
      height="27"
      rx="7.5"
      transform="rotate(-45 -0.87868 18.2129)"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <path
      d="M15.2925 21.8921L12.0842 18.6837C11.7267 18.3262 11.1583 18.3262 10.8008 18.6837C10.4433 19.0412 10.4433 19.6096 10.8008 19.9671L14.6417 23.8079C14.9992 24.1654 15.5767 24.1654 15.9342 23.8079L25.6508 14.1004C26.0083 13.7429 26.0083 13.1746 25.6508 12.8171C25.2933 12.4596 24.725 12.4596 24.3675 12.8171L15.2925 21.8921Z"
      fill={svgAttrs.steps_borderColor}
    />
  </svg>
);

export const rndDiamondStepCNM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 120 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M19 18.1206H120" stroke={svgAttrs.steps_borderColor} strokeWidth="1.75886" />
    <circle
      cx="94"
      cy="20"
      r="14.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <rect
      x="-0.87868"
      y="18.2129"
      width="27"
      height="27"
      rx="7.5"
      transform="rotate(-45 -0.87868 18.2129)"
      fill={svgAttrs.steps_bgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <path
      d="M19.7412 25H17.6143V14.7256L14.4766 15.7979V13.9961L19.4688 12.1592H19.7412V25Z"
      fill={svgAttrs.steps_fontColor}
    />
  </svg>
);

export const rndDiamondStepNM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 120 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M19 18.1206H120" stroke={svgAttrs.steps_borderColor} strokeWidth="1.75886" />
    <circle
      cx="94"
      cy="20"
      r="14.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <rect
      x="-0.87868"
      y="18.2129"
      width="27"
      height="27"
      rx="7.5"
      transform="rotate(-45 -0.87868 18.2129)"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <path
      d="M19.7412 25H17.6143V14.7256L14.4766 15.7979V13.9961L19.4688 12.1592H19.7412V25Z"
      fill={svgAttrs.steps_borderColor}
    />
  </svg>
);

const svgs: Builder.Grup.StepSvgInput[] = [
  {
    id: 'step-ccm-rddmd',
    generate: rndDiamondStepCCM,
  },
  {
    id: 'step-cm-rddmd',
    generate: rndDiamondStepCM,
  },
  {
    id: 'step-cnm-rddmd',
    generate: rndDiamondStepCNM,
  },
  {
    id: 'step-nm-rddmd',
    generate: rndDiamondStepNM,
  },
];

export default svgs;
