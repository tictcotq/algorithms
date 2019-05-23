const {findMaxIndex, constructMaximumBinaryTree} = require('./problem.js')

describe('Leetcode 654: Maximum Binary Tree', () => {
  
  it('findMaxIndex([3, 2, 1, 6, 0, 5] => 3', () => {
    expect(findMaxIndex([3, 2, 1, 6, 0, 5], 0, 5)).toEqual(3);
  })
  
  it('should pass the example', () => {
    const input = [3,2,1,6,0,5]
    
    const output = constructMaximumBinaryTree(input)
    
    expect(output).toMatchObject({
      val: 6,
      left: {
        val: 3,
        right: {
          val: 2,
          right: {
            val: 1,
          }
        }
      },
      right: {
        val: 5,
        left: {
          val: 0,
        }
      }
    })
  })
  
  it('[] => undefined', () => {
    expect(constructMaximumBinaryTree([])).toEqual(undefined)
  })
  
  it('[1] => {val: 1}', () => {
    expect(constructMaximumBinaryTree([1])).toMatchObject({
      val: 1,
    })
  })
  
  it('[1, 2] => {val: 2, left: { val: 1}', () => {
    expect(constructMaximumBinaryTree([1, 2])).toMatchObject({
      val: 2,
      left: {
        val: 1
      }
    })
  })
  
  it('[2, 1] => {val: 2, right: { val: 1}', () => {
    expect(constructMaximumBinaryTree([2, 1])).toMatchObject({
      val: 2,
      right: {
        val: 1
      }
    })
  })
  
})
