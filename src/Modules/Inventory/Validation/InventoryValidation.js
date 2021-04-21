export default function InventoryValidation(values) {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name required!';
  } else if (values.name.length < 3) {
    errors.name = 'Minimal name 3 character!';
  }
  if (!values.costPrice) {
    errors.costPrice = 'Cost Price required!';
  }
  if (!values.retailPrice) {
    errors.retailPrice = 'Retail Price required!';
  }
  if (!values.qty) {
    errors.qty = 'Quantity required!';
  }
  if (!values.marginPercentage) {
    errors.marginPercentage = 'Margin Percentage required!';
  }
  if (!values.sku) {
    errors.sku = 'SKU required!';
  }
  if (!values.supplier) {
    errors.supplier = 'Supplier required!';
  }
  return errors;
}
