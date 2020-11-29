export default function isNumber (num: unknown): num is number {
    if (typeof num === 'number') {
      return num - num === 0
    }
    if (typeof num === 'string' && num.trim() !== '') {
      return Number.isFinite ? Number.isFinite(+num) : isFinite(+num)
    }
    return false
  }
  