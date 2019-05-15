module.exports = (arr) => {
  let max = 0;
  
  for (let i=0; i<arr.length; i++) {
    
    if (arr[i+1] <= arr[i])
      continue
    
    let start = i
    do {
      i++
    } while (arr[i+1] > arr[i])
    
    if (arr[i+1] === arr[i] || i === arr.length - 1) {
      continue
    }
    
    do {
      i++
    } while (arr[i+1] < arr[i])
    
    max = Math.max(i - start + 1, max)
    i--
  }
  
  return max
}