// I have hardcoded it in term of the task,
// In real prod app (with routes and atc.) it will be absolutely different
export const API_URL = 'http://5c35e7f96fc11c0014d32fcd.mockapi.io/compare/products';

export const EXCLUDED_FIELDS = [
    'salePrice',
    'manufacturerName',
    'grossPrice',
    'BUP_UOM',
    'BUP_Value',
    'uom',
    'productImage',
    'BUP_Conversion',
    'minQuantity',
    'manufacturerImage',
    'name',
    'sku',
    'listPrice',
    'channel',
    'display',
    'atp',
    'id',
];

export const FIELDS_DESCRIPTOR = {
  'badges': {
      isComparable: false,
      priority: true,
  }
};