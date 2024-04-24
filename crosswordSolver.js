// Function that solve the crossword.
function crosswordSolver(crossword, words) {

    // Validate input crossword.
    const invalidCrossword = typeof crossword !== "string" || !/^[.\n012]+$/.test(crossword)
    // Validate input words.
    const invalidWords = words.length < 3 || !Array.isArray(words) ||
        words.some((word) => typeof word !== "string")

    if (Array.isArray(words) && hasDuplicates(words)) {
        return 'Error';
    }
    // Check if the number of starts is the same as the number of words
    let startWord = 0;
    for (let i = 0; i < crossword.length; i++) {
        if (crossword[i] > '0' && crossword[i] != '.'){
            startWord += parseInt(crossword[i]);
        }
    }
   // console.log(startWord, words.length);
    if (startWord !== words.length){
        return 'Error';
    }

    // Return error if crossword or words are invalid.
    if (invalidCrossword || invalidWords) {
        return 'Error';
    }

    // Func to convert into a simple array
    function lookIntoCrossword(input) {
        // Split the input string into rows
        const rows = input.trim().split("\n")

        // Convert each row to an array of numbers
        const cross = rows.map((row) => {
            // Split each row into individual characters (chars)
            const chars = row.split("")

            // Convert each char to a number, using -1 for "."
            const numbers = chars.map((char) => {
                return char === "." ? -1 : parseInt(char);
            })

            // The array of numbers for the current row
            return numbers
        })

        return cross
    }

    // Parse the input crossword into a simple array
    const grid = lookIntoCrossword(crossword)

    // Create a simple array to store the words in the puzzle
    const puzzleWords = grid.map((row) => row.map((char) => (char === -1 ? "." : "")))


    // Function to add words to the crossword
    const addWords = (words, currentInd = 0) => {
        
        // If all words are added, return true
        if (currentInd === words.length) {
            return true
        }

        // Get the current word to be added
        const word = words[currentInd]
        // Look for all the chars in the crossword
        // To look for rows
        for (let rowInd = 0; rowInd < grid.length; rowInd++) {
            // Look for colums
            for (let colInd = 0; colInd < grid[0].length; colInd++) {
                // If there is a zero, skip it on the crossword
                if (grid[rowInd][colInd] === 0) {
                    continue
                }

                const char = {
                    row: rowInd,
                    col: colInd,
                }

                // Function to try adding a word in a direction (horizontal or vertical)
                function directOfWord(direction) {
                    // if the word doesn't fit in a direction, insert here
                    const otherschars = []

                    // Range other each character of a word
                    for (let i = 0; i < word.length; i++) {
                        // Calculate row and col indices for the current character based on the direction
                        const row = direction === "horizontal" ? char.row : char.row + i
                        const col = direction === "horizontal" ? char.col + i : char.col

                        // If the current character doesn't fit in a direction, go over another word
                        if (
                            row >= grid.length ||
                            col >= grid[0].length ||
                            (puzzleWords[row][col] !== "" && puzzleWords[row][col] !== word[i])
                        ) {
                            break
                        }

                        // Add the current character to the puzzle and store the char in the otherschars array
                        otherschars.push({ row, col, value: puzzleWords[row][col] })
                        puzzleWords[row][col] = word[i]
                    }

                    // If the entire word fits, try adding the remaining words recursively
                    if (otherschars.length === word.length && addWords(words, currentInd + 1)) {
                        return true
                    }

                    // If the word doesn't fit, take back the word and try in another direction
                    otherschars.forEach((otherchar) => {
                        puzzleWords[otherchar.row][otherchar.col] = otherchar.value
                    })

                    return false
                }

                // Try adding the word horizontally and vertically
                if (directOfWord("horizontal") || directOfWord("vertical")) {
                    return true
                }


            }
        }
        // If the word cannot be added, return false
        return false
    }
    // Try to add all words to the puzzle
    if (!addWords(words)) {
        return "Error"
    }
    // Convert the puzzleWords array to a string and return the result
    const result = puzzleWords.map((row) => row.join("")).join("\n")
    return result
}

function hasDuplicates(arr) {
    return (new Set(arr)).size !== arr.length
}

module.exports = { crosswordSolver }