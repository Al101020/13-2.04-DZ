// export default function isValidCard(value) {
//   if(value.length = 16) {
//     number
//   } else { return false; };
// }

// Работает - выдает: "true", если цифр в номере 15 или 16
export default function isValidCard(value) {
  return value.length >= 15 && value.length <= 16;
}
