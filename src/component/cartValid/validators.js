export default function isValidCart(value) {
  return value.length >= 15 && value.length <= 16;
}




// Работает - выдает: "true", если цифр в номере 15 или 16 
// export default function isValidCart(value) {
//   return value.length >= 15 && value.length <= 16;
// }
