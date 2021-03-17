import burstSteps from './burstSteps';
import circleLayout from './CircleSteps';
import diamondSteps from './DiamondSteps';
import rndDiamondSteps from './RndDiamondSteps';
import rndSquareSteps from './RndSquareSteps';
import squareLayout from './SquareSteps';

export const getStepsLayout = (
  shape: Builder.Grup.StepsShapeTemplate
): Builder.Grup.StepSvgInput[] => {
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
