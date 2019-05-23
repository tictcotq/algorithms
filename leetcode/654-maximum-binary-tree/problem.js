function constructMaximumBinaryTree(arr) {
  return step(arr, 0, arr.length - 1)
}

function step(arr, start, end) {
  if (start > end)
    return
  
  const maxIndex = findMaxIndex(arr, start, end)
  return {
    val: arr[maxIndex],
    left: step(arr, start, maxIndex - 1),
    right: step(arr, maxIndex + 1, end),
  }
}

function findMaxIndex(arr, start, end) {
  let index = start
  for (let i = start; i <= end; i++) {
    index = arr[index] > arr[i] ? index : i
  }
  
  return index
}

module.exports = {
  constructMaximumBinaryTree,
  findMaxIndex,
  step,
}