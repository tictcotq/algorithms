const find = require('./problem.js')

describe('Leetcode 845: Longest Mountain in Array', () => {

  it('[ ] => 0', () => {
    const input = [ ]
    
    const result = find(input)
    
    expect(result).toBe(0)
  })
  
  it('[ 2, 3 ] => 0', () => {
    const input = [ 2, 3 ]
    
    const result = find(input)
    
    expect(result).toBe(0)
  })
  
  it('[ 2, 3, 4 ] => 0', () => {
    const input = [ 2, 3, 4 ]
    
    const result = find(input)
    
    expect(result).toBe(0)
  })
  
  it('[ 1, 2, 1 ] => 3', () => {
    const input = [ 1, 2, 1 ]
    
    const result = find(input)
    
    expect(result).toBe(3)
  })
  
  it('[ 1, 2, 2, 1 ] => 0', () => {
    const input = [ 1, 2, 2, 1 ]
    
    const result = find(input)
    
    expect(result).toBe(0)
  })
  
  it('[ 2, 2, 2 ] => 0', () => {
    const input = [ 2, 2, 2 ]
    
    const result = find(input)
    
    expect(result).toBe(0)
  })
  
  it('[ 2, 1, 4, 7, 3, 2, 5 ] => 5 (single mountain)', () => {
    const input = [ 2, 1, 4, 7, 3, 2, 5 ]
    
    const result = find(input)
    
    expect(result).toBe(5)
  })
  
  it('[ 2, 3, 2, 4, 5, 6, 2 ] => 5 (double mountain)', () => {
    const input = [ 2, 3, 2, 4, 5, 6, 2 ]
    
    const result = find(input)
    
    expect(result).toBe(5)
  })
  
  it('[ 8, 9, 0, 4, 3, 2, ] => 4', () => {
    const input = [ 8, 9, 0, 4, 3, 2, ]
    
    const result = find(input)
    
    expect(result).toBe(4)
  })
  
})