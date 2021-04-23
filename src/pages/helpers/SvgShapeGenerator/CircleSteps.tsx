export const circleStepCCM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M19 17.1206H120" stroke={svgAttrs.steps_borderColor} strokeWidth="1.75886" />
    <circle
      cx="94"
      cy="19"
      r="14.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <circle
      cx="19"
      cy="18"
      r="13.5"
      fill={svgAttrs.steps_bgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <path
      d="M16.25 21.85L13.0417 18.6416C12.6842 18.2841 12.1159 18.2841 11.7584 18.6416C11.4009 18.9991 11.4009 19.5675 11.7584 19.925L15.5992 23.7658C15.9567 24.1233 16.5342 24.1233 16.8917 23.7658L26.6084 14.0583C26.9659 13.7008 26.9659 13.1325 26.6084 12.775C26.2509 12.4175 25.6825 12.4175 25.325 12.775L16.25 21.85Z"
      fill={svgAttrs.steps_fontColor}
    />
  </svg>
);

export const circleStepCM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M19 17.1206H120" stroke={svgAttrs.steps_borderColor} strokeWidth="1.75886" />
    <circle
      cx="94"
      cy="19"
      r="14.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <circle
      cx="19"
      cy="18"
      r="13.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <path
      d="M16.25 21.85L13.0417 18.6416C12.6842 18.2841 12.1159 18.2841 11.7584 18.6416C11.4009 18.9991 11.4009 19.5675 11.7584 19.925L15.5992 23.7658C15.9567 24.1233 16.5342 24.1233 16.8917 23.7658L26.6084 14.0583C26.9659 13.7008 26.9659 13.1325 26.6084 12.775C26.2509 12.4175 25.6825 12.4175 25.325 12.775L16.25 21.85Z"
      fill={svgAttrs.steps_borderColor}
    />
  </svg>
);

export const circleStepCNM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M19 17.1206H120" stroke={svgAttrs.steps_borderColor} strokeWidth="1.75886" />
    <circle
      cx="94"
      cy="19"
      r="14.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <circle
      cx="18"
      cy="18"
      r="13.5"
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

export const circleStepNM = (svgAttrs: Builder.Grup.SvgAttributes) => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: '8px' }}
  >
    <path d="M19 17.1206H120" stroke={svgAttrs.steps_borderColor} strokeWidth="1.75886" />
    <circle
      cx="94"
      cy="19"
      r="14.5"
      fill={svgAttrs.steps_alternateBgColor}
      stroke={svgAttrs.steps_borderColor}
      strokeWidth="2.5"
    />
    <circle
      cx="18"
      cy="18"
      r="13.5"
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
    id: 'step-ccm-crl',
    generate: circleStepCCM,
  },
  {
    id: 'step-cm-crl',
    generate: circleStepCM,
  },
  {
    id: 'step-cnm-crl',
    generate: circleStepCNM,
  },
  {
    id: 'step-nm-crl',
    generate: circleStepNM,
  },
];

export default svgs;
