export const diamondStepCCM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 121 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M20 19.1206H121" stroke={svgAttrs.steps_borderColor} strokeWidth="1.75886" />
    <circle
      cx="95"
      cy="21"
      r="14.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <rect
      x="2.12132"
      y="19.4023"
      width="24.44"
      height="24.44"
      transform="rotate(-45 2.12132 19.4023)"
      fill={svgAttrs.steps_bgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <path
      d="M16.2925 22.8921L13.0842 19.6837C12.7267 19.3262 12.1583 19.3262 11.8008 19.6837C11.4433 20.0412 11.4433 20.6096 11.8008 20.9671L15.6417 24.8079C15.9992 25.1654 16.5767 25.1654 16.9342 24.8079L26.6508 15.1004C27.0083 14.7429 27.0083 14.1746 26.6508 13.8171C26.2933 13.4596 25.725 13.4596 25.3675 13.8171L16.2925 22.8921Z"
      fill={svgAttrs.steps_fontColor}
    />
  </svg>
);

export const diamondStepCM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 121 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M20 19.1206H121" stroke={svgAttrs.steps_borderColor} strokeWidth="1.75886" />
    <circle
      cx="95"
      cy="21"
      r="14.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <rect
      x="2.12132"
      y="19.4023"
      width="24.44"
      height="24.44"
      transform="rotate(-45 2.12132 19.4023)"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <path
      d="M16.2925 22.8921L13.0842 19.6837C12.7267 19.3262 12.1583 19.3262 11.8008 19.6837C11.4433 20.0412 11.4433 20.6096 11.8008 20.9671L15.6417 24.8079C15.9992 25.1654 16.5767 25.1654 16.9342 24.8079L26.6508 15.1004C27.0083 14.7429 27.0083 14.1746 26.6508 13.8171C26.2933 13.4596 25.725 13.4596 25.3675 13.8171L16.2925 22.8921Z"
      fill={svgAttrs.steps_borderColor}
    />
  </svg>
);

export const diamondStepCNM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 121 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M20 19.1206H121" stroke={svgAttrs.steps_borderColor} strokeWidth="1.75886" />
    <circle
      cx="95"
      cy="21"
      r="14.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <rect
      x="2.12132"
      y="19.4023"
      width="24.44"
      height="24.44"
      transform="rotate(-45 2.12132 19.4023)"
      fill={svgAttrs.steps_bgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <path
      d="M20.7412 26H18.6143V15.7256L15.4766 16.7979V14.9961L20.4688 13.1592H20.7412V26Z"
      fill={svgAttrs.steps_fontColor}
    />
  </svg>
);

export const diamondStepNM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 121 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M20 19.1206H121" stroke={svgAttrs.steps_borderColor} strokeWidth="1.75886" />
    <circle
      cx="95"
      cy="21"
      r="14.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <rect
      x="2.12132"
      y="19.4023"
      width="24.44"
      height="24.44"
      transform="rotate(-45 2.12132 19.4023)"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <path
      d="M20.7412 26H18.6143V15.7256L15.4766 16.7979V14.9961L20.4688 13.1592H20.7412V26Z"
      fill={svgAttrs.steps_borderColor}
    />
  </svg>
);

const svgs: Builder.Grup.StepSvgInput[] = [
  {
    id: 'step-ccm-dmd',
    generate: diamondStepCCM,
  },
  {
    id: 'step-cm-dmd',
    generate: diamondStepCM,
  },
  {
    id: 'step-cnm-dmd',
    generate: diamondStepCNM,
  },
  {
    id: 'step-nm-dmd',
    generate: diamondStepNM,
  },
];

export default svgs;
