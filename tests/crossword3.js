// File that test the crosswordSolver.
// Import the crossword solver.
const { crosswordSolver } = require("../crosswordSolver")

const puzzle = `..1.1..1...
10000..1000
..0.0..0...
..1000000..
..0.0..0...
1000..10000
..0.1..0...
....0..0...
..100000...
....0..0...
....0......`
const words = [
  'popcorn',
  'fruit',
  'flour',
  'chicken',
  'eggs',
  'vegetables',
  'pasta',
  'pork',
  'steak',
  'cheese',
]

// Function that solve the crossword and set board and words.
const crosswordSolution = crosswordSolver(puzzle, words)
console.log (crosswordSolution)

// if the puzzle can't be solved :
if (crosswordSolution instanceof Error) {
  console.log("Error")
} 