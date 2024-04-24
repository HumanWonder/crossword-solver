// File that test the crosswordSolver.
// Import the crossword solver.
const { crosswordSolver } = require("../crosswordSolver")

const puzzle = '2001\n0..0\n1000\n0..0'
const words = ['aaab', 'aaac', 'aaad', 'aaae']

// Function that solve the crossword and set board and words.
const crosswordSolution = crosswordSolver(puzzle, words)
console.log (crosswordSolution)

// if the puzzle can't be solved :
if (crosswordSolution instanceof Error) {
  console.log("Error")
} 