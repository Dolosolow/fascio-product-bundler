import LayoutHoriCol from 'src/images/svg/layout-hori-col.svg';
import LayoutVertRow from 'src/images/svg/layout-vert-row.svg';
import burstSteps from './burstSteps';
import circleLayout from './CircleSteps';
import diamondSteps from './DiamondSteps';
import rndDiamondSteps from './RndDiamondSteps';
import rndSquareSteps from './RndSquareSteps';
import squareLayout from './SquareSteps';

/**
 *  Main Layout Templates
 */

const getLayoutTemplate = (layout: Builder.Grup.LayoutTemplate) => {
  switch (layout) {
    case 'G1_VERTROW':
      return LayoutHoriCol;
    case 'G1_HORICOL':
      return LayoutVertRow;
    default:
      return null;
  }
};

/**
 *  Steps Templates
 */

const getStepsTemplate = (shape: Builder.Grup.StepsShapeTemplate): Builder.Grup.StepSvgInput[] => {
  switch (shape) {
    case 'CRL':
      return circleLayout;
    case 'SQR':
      return squareLayout;
    case 'DMD':
      return diamondSteps;
    case 'RDSQR':
      return rndSquareSteps;
    case 'RDDMD':
      return rndDiamondSteps;
    case 'BRST':
      return burstSteps;
    default:
      return circleLayout;
  }
};

const getSelectedStepLayout = (
  layout: string,
  layoutAttr: Builder.Grup.SvgAttributes,
  shape: Builder.Grup.StepsShapeTemplate
) => {
  const svgs = getStepsTemplate(shape);
  const selectedLayout = svgs.find((svg) => svg.id === layout)!;

  return selectedLayout.generate(layoutAttr);
};

const getStepsLayout = (layout: string, layoutAttr: Builder.Grup.SvgAttributes) => {
  const shape = layout.split('-')[2].toUpperCase();

  return getSelectedStepLayout(layout, layoutAttr, shape as Builder.Grup.StepsShapeTemplate);
};

export { getLayoutTemplate, getStepsTemplate, getStepsLayout };
