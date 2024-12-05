export default function isValidCart(value) {
  return value.length >= 10 && value.length <= 16;
}
