export default function SupplierValidation(values) {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name required!';
  } else if (values.name.length < 3) {
    errors.name = 'Minimal name 3 character!';
  }
  if (!values.address) {
    errors.address = 'Address required!';
  }
  if (!values.phone) {
    errors.phone = 'Phone required!';
  }
  return errors;
}
