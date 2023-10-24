export default function getFormattedString(str: String): String {
  if (str.length <= 40) {
    return str
  } else {
    return `${str.slice(0, 35)} ...`
  }
}
