// File that test the crosswordSolver.
// Import the crossword solver.
const { crosswordSolver } = require("../crosswordSolver")

const puzzle = '2001\n0..0\n1000\n0..0'
const words = ['casa', 'alan', 'ciao', 'anta']

// Function that solve the crossword and set board and words.
const crosswordSolution = crosswordSolver(puzzle, words)
console.log (crosswordSolution)

// if the puzzle can't be solved :
if (crosswordSolution instanceof Error) {
  console.log("Error")
} 

// !!! Errors that need to be displayed :
// Test mismatch between number of input words and puzzle starting cells
// Test words repetition
// Test multiple solutions