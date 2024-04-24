<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://cdn.vectorstock.com/i/preview-1x/43/46/crossword-icon-to-solve-vector-45854346.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Crossword</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-done-success.svg)]()

</div>

---

<p align="center"> 
Create the function "crosswordSolver" that is able to solve an empty crossword puzzle. 
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Built Using](#built_using)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

<p>
The function takes two arguments:

  - an empty puzzle, passed as a string and
  - a list of words to fill in the puzzle (no double words allowed)

The function must print on the console a string representing the puzzle filled with the input words.

The empty puzzle will be a string with the following rules:

  - each character will be either a **number**, a **.** or a **\\n**;
  - a number represents the number of words starting from the specific position and a . represents a space that does not need to be filled.

If the puzzle or list of words provided as inputs does not guarantee a unique solution, or any other conditions stated above are not met, the function must print **'Error'**.
</p>

## 🏁 Getting Started <a name = "getting_started"></a>

Clone the project : 
```
git clone https://zone01normandie.org/git/agrenier/crossword.git
```


### Prerequisites

You might need nodejs installed to run the program.
> **Ubuntu :** https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjOttqOiPOCAxXzRKQEHelJD4UQFnoECBkQAQ&url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fhow-to-install-node-js-on-ubuntu-20-04&usg=AOvVaw1W8iG92q3MNkqPjfdhvTP6&opi=89978449
<br>
> **Windows :** https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwinyraciPOCAxWSRaQEHfbYCdEQFnoECBMQAQ&url=https%3A%2F%2Fnodejs.org%2Fen%2Fdownload&usg=AOvVaw1KKGKc_Mgv9UPW5EWXuSiV&opi=89978449

You're good to go if you have this output :
```
npm --version
```

```
-> 10.1.0
```

### Installing

input example:
```
const emptyPuzzle = `2001
0..0
1000
0..0`
const words = ['casa', 'alan', 'ciao', 'anta']

```

> node tests/crossword<version>.js

output example:
```
`casa
i..l
anta
o..n`

```


## 🔧 Running the tests <a name = "tests"></a>

There is an existing bash file to test some crosswords. You access it with this command :
```
./testfile.sh
```
If you have a permission issue, go the the file properties and tick the box that allows the file to be used as a program.


## ⛏️ Built Using <a name = "built_using"></a>

- [Javascript]
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@agrenier]
- [@afouquem]
- [@cescriva]

Project initiated by 01-edu.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

_Hat tip to anyone whose code was used, inspiration and references :_
 - https://github.com/eferhatg/Hackerrank-Crossword-Puzzle-Javascript-Solution/blob/master/index.js
