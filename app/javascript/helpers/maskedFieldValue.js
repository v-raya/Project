export const maskedPhoneRaw = (value) => {
  // return value.replace(/[()_-]/g, '')
  return value.replace(/\D/g, '')
}
