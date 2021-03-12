import { v4 as uuidv4 } from 'uuid';

import { TSContents } from 'src/components/TableSaw';

export const emptyTestTableValues: TSContents = [];

export const testTableValues: TSContents = [
  {
    id: uuidv4(),
    data: {
      image: {
        value:
          'https://cdn11.bigcommerce.com/s-20frharu/images/stencil/640w/products/685/2543/6242-01_HERO1x_P__79431.1612374382.jpg?c=2',

        isPrice: false,
        menu: false,
      },
      product_sku: { value: '5960', isPrice: false, menu: false },
      product_name: {
        value: '5960 Littmann Classic III - Plum w/ Mirror Finish & Pink Stem',
        isPrice: false,
        menu: false,
      },
      price: { value: '194.40', isPrice: true, menu: false },
      action: { value: '', isPrice: false, menu: true },
    },
  },
  {
    id: uuidv4(),
    data: {
      image: {
        value:
          'https://cdn11.bigcommerce.com/s-20frharu/images/stencil/640w/products/684/2534/6240-01_HERO1x_P__63095.1612374162.jpg?c=2',

        isPrice: false,
        menu: false,
      },
      product_sku: { value: '6240', isPrice: false, menu: false },
      product_name: {
        value: '6240 Littmann Cardiology IV - Black w/ Rainbow & Smoke Stem',

        isPrice: false,
        menu: false,
      },
      price: { value: '187.39', isPrice: true, menu: false },
      action: { value: '', isPrice: false, menu: true },
    },
  },
  {
    id: uuidv4(),
    data: {
      image: {
        value:
          'https://cdn11.bigcommerce.com/s-20frharu/images/stencil/640w/products/677/2494/6176__88547.1608648056.jpg?c=2',

        isPrice: false,
        menu: false,
      },
      product_sku: { value: '6176', isPrice: false, menu: false },
      product_name: {
        value: '6176 Littmann Cardiology IV - Burgundy w/ Champagne Finish',

        isPrice: false,
        menu: false,
      },
      price: { value: '187.39', isPrice: true, menu: false },
      action: { value: '', isPrice: false, menu: true },
    },
  },
  {
    id: uuidv4(),
    data: {
      image: {
        value:
          'https://cdn11.bigcommerce.com/s-20frharu/images/stencil/640w/products/675/2477/6203__71688.1608646102.jpg?c=2',

        isPrice: false,
        menu: false,
      },
      product_sku: { value: '6203', isPrice: false, menu: false },
      product_name: {
        value: '6203 Littmann Cardiology IV - Black Edition w/ Violet Stem',

        isPrice: false,
        menu: false,
      },
      price: { value: '177.60', isPrice: true, menu: false },
      action: { value: '', isPrice: false, menu: true },
    },
  },
  {
    id: uuidv4(),
    data: {
      image: {
        value:
          'https://cdn11.bigcommerce.com/s-20frharu/images/stencil/640w/products/531/1893/6205_A__41177.1573664220.jpg?c=2',

        isPrice: false,
        menu: false,
      },
      product_sku: { value: '6205', isPrice: false, menu: false },
      product_name: {
        value: '6205 Littmann Cardiology IV - Plum w/ Rainbow Finish',

        isPrice: false,
        menu: false,
      },
      price: { value: '177.60', isPrice: true, menu: false },
      action: { value: '', isPrice: false, menu: true },
    },
  },
  {
    id: uuidv4(),
    data: {
      image: {
        value:
          'https://cdn11.bigcommerce.com/s-20frharu/images/stencil/640w/products/448/1294/6190a__17768.1534170448.jpg?c=2',

        isPrice: false,
        menu: false,
      },
      product_sku: { value: '6190', isPrice: false, menu: false },
      product_name: {
        value: '6190 Littmann Cardiology IV - Black Edition w/ Violet Stem',

        isPrice: false,
        menu: false,
      },
      price: { value: '177.60', isPrice: true, menu: false },
      action: { value: '', isPrice: false, menu: true },
    },
  },
];

export const testBundlesValues: TSContents = [
  {
    id: uuidv4(),
    data: {
      title: {
        value: 'Rutgers University Nursing Program',
        isPrice: false,
        menu: false,
      },
      total_sections: { value: '5', isPrice: false, menu: false },
      date_created: {
        value: '04-07-2020',
        isPrice: false,
        menu: false,
      },
      action: { value: '', isPrice: false, menu: true },
    },
  },
  {
    id: uuidv4(),
    data: {
      title: {
        value: 'Hudson County Community College Nursing Program',
        isPrice: false,
        menu: false,
      },
      total_sections: { value: '4', isPrice: false, menu: false },
      date_created: {
        value: '04-10-2020',
        isPrice: false,
        menu: false,
      },
      action: { value: '', isPrice: false, menu: true },
    },
  },
  {
    id: uuidv4(),
    data: {
      title: {
        value: 'Wayne University Nursing Program',
        isPrice: false,
        menu: false,
      },
      total_sections: { value: '4', isPrice: false, menu: false },
      date_created: {
        value: '02-19-2021',
        isPrice: false,
        menu: false,
      },
      action: { value: '', isPrice: false, menu: true },
    },
  },
];
