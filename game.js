const stage = document.getElementById('stage')
const ouput = document.getElementById('output')

const map = [
  [0, 2, 0, 0, 0, 3],
  [0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 4, 0],
  [4, 0, 0, 0, 2, 0],
  [0, 2, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 4]
]

const gameObjects = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0]
]
const LAND = 0
const OASIS = 1
const MAN = 2
const HOME = 3
const CACTUS = 4
const SHIP = 5

const SIZE = 64

const ROWS = map.length
const COLUMNS = map[0].length

let shipRow
let shipColumn

render()

function render () {
  /* if (stage.hasChildNodes()) {
    for (let i = 0; i < ROWS * COLUMNS; i++) {
      stage.removeChild(stage.firstChild)
    }
  } */
  for (let row = 0; row < ROWS; row++) {
    for (let column = 0; column < COLUMNS; column++) {
      if (gameObjects[row][column] === SHIP) {
        shipRow = row
        shipColumn=column
      }
    }
  }
  for (let row = 0; row < ROWS; row++) {
    for (let column = 0; column < COLUMNS; column++) {
      const cell = document.createElement('img')
      cell.setAttribute('class', 'cell')
      stage.appendChild(cell)

      switch (map[row][column]) {
        case LAND:
          cell.src = 'images/land.png'
          break
        case OASIS:
          cell.src = 'images/oasis.png'
          break
        case MAN:
          cell.src = 'images/man.png'
          break
        case HOME:
          cell.src = 'images/home.png'
          break
        case CACTUS:
          cell.src = 'images/cactus.png'
          break
      }
      switch (gameObjects[row][column]) {
        case (SHIP):
          cell.src = 'images/ship.png'
          break
      }

      cell.style.top = row * SIZE + 'px'
      cell.style.left = column * SIZE + 'px'
    }
  }
}
