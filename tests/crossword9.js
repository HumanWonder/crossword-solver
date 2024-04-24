// File that test the crosswordSolver.
// Import the crossword solver.
const { crosswordSolver } = require("../crosswordSolver")

const puzzle = 123
const words = ['casa', 'alan', 'ciao', 'anta']

// Function that solve the crossword and set board and words.
const crosswordSolution = crosswordSolver(puzzle, words)
console.log (crosswordSolution)

// if the puzzle can't be solved :
if (crosswordSolution instanceof Error) {
  console.log("Error")
} 