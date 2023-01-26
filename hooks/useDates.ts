const getDates = () => {
  const m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const mod = (n: number) => {
    return ((n % 12) + 12) % 12;
  }

  const d = new Date()
  // get month #s in array
  const mNums = Array.from(new Array(12), (x, i) => i + (d.getMonth()-5) )
  const months = mNums.map((n) => m[mod(n)])

  const y = d.getFullYear()
  const years = mNums.map((n) => n < 0 ? y-1 : y)

  return months.map((m, i) => `${m} ${years[i]}`)
}

export default getDates