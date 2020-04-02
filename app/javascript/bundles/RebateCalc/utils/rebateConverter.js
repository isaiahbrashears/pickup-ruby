function rebateConverter(value) {
  if (value === '') {
    return 0;
  } else if (value < 99999) {
    return '350';
  } else if (value < 149999) {
    return '600';
  } else if (value < 199999) {
    return '800';
  } else if (value < 249999) {
    return '1000';
  } else if (value < 299999) {
    return '1250';
  } else if (value < 349999) {
    return '1500';
  } else if (value < 399999) {
    return '1750';
  } else if (value < 449999) {
    return '2000';
  } else if (value < 499999) {
    return '2250';
  } else if (value < 599999) {
    return '3000';
  } else if (value < 699999) {
    return '3500';
  } else if (value < 799999) {
    return '4000';
  } else if (value < 899999) {
    return '4500';
  } else if (value < 999999) {
    return '5000';
  } else if (value < 1249999) {
    return '5500';
  } else if (value < 1499999) {
    return '6000';
  } else if (value < 1749999) {
    return '6500';
  } else if (value < 1999999) {
    return '7000';
  } else {
    return '7500';
  }
}

export default rebateConverter;
