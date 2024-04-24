// File that test the crosswordSolver.
// Import the crossword solver.
const { crosswordSolver } = require("../crosswordSolver")

const puzzle = `...1...........
..1000001000...
...0....0......
.1......0...1..
.0....100000000
100000..0...0..
.0.....1001000.
.0.1....0.0....
.10000000.0....
.0.0......0....
.0.0.....100...
...0......0....
..........0....`
const words = [
  'sun',
  'sunglasses',
  'suncream',
  'swimming',
  'bikini',
  'beach',
  'icecream',
  'tan',
  'deckchair',
  'sand',
  'seaside',
  'sandals',
].reverse()

// Function that solve the crossword and set board and words.
const crosswordSolution = crosswordSolver(puzzle, words)
console.log (crosswordSolution)

// if the puzzle can't be solved :
if (crosswordSolution instanceof Error) {
  console.log("Error")
} 