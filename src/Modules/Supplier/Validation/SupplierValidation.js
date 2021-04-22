export default function SupplierValidation(values) {
  const errors = {};
  // const re = /^[0-9\b]+$/;

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
  } else if (values.phone?.length < 8 || values.phone?.length > 15) {
    errors.phone = 'Must be a valid number';
  }
  // else if (onlyNumberKey) {
  //   errors.phone = 'Only number is acceppted';
  // }
  return errors;
}

// function onlyNumberKey(evt) {
//   // Only ASCII charactar in that range allowed
//   const ASCIICode = evt.which ? evt.which : evt.keyCode;
//   if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
//   return true;
// }
