import "./styles.styl"
import { MIND_STATE_SETTINGS, text } from './cellSettings'

// to avoid JS conflict between versions
// if (window.location.pathname === "/ml-csp/v-1/") {
if (window.location.pathname === "/v-1/") {
  runPoem()
}

function runPoem () {

  const canvas = document.getElementById('canvas')
  canvas.height = window.innerHeight - 100
  canvas.width = window.innerWidth
  const ctx = canvas.getContext('2d')

  // ======
  // STATES
  // ======

  let isStart = false

  // keeping track of text and grid indicies.
  let gridIndex = 0
  let textPartIndex = 0

  let attempts = 0
  let gameInterval
  let isAudioPlaying = false

  // =============
  // GAME SETTINGS
  // =============
  const AWARENESS_INCREMENT = 0.25
  const ROWS_NUM = 20
  const COLUMNS_NUM = 20
  const GRID_NUM = text.length

  // how fast each step
  let tickRate = 50


  // ==========
  // BUILD GRID
  // ==========

  const GREY_300 = "#e7e2d6"
  const GREY_500 = "#cdc3bd"
  const BLACK = "#252424"

  const BLUE_800 = '#1223A3'
  const BLUE_600 = '#0D58CB'
  const BLUE_400 = '#1F8BED'
  const BLUE_200 = '#91DAFB'

  // from edge of screen
  const MARGIN_TOP = 10
  const MARGIN_LEFT = 140 // space for controls
  const MARGIN_RIGHT = 100

  const MARGIN_GRID_LEFT = 20
  const MARGIN_GRID_TOP = 250

  const SCROLLBAR_WIDTH = 20

  const NUM_OF_GRID_IN_ONE_ROW = 3

  // grid width would determine itself
  // const GRID_HEIGHT = canvas.height - MARGIN_TOP * 2
  // don't really understand why MARGIN_GRID_LEFT * 2, but it works?
  // const GRID_WIDTH = (window.innerWidth - MARGIN_LEFT - MARGIN_RIGHT - SCROLLBAR_WIDTH - MARGIN_GRID_LEFT * 2) / NUM_OF_GRID_IN_ONE_ROW

  const GRID_WIDTH = 100
  // const GRID_WIDTH = 400
  const GRID_HEIGHT = GRID_WIDTH
  const CELL_SIZE = GRID_WIDTH / ROWS_NUM // assuming landscape screen 

  // number of rows of entire grids
  const NUM_OF_GRID_ROWS = Math.ceil(GRID_NUM / NUM_OF_GRID_IN_ONE_ROW)
  // canvas.height = MARGIN_TOP + GRID_HEIGHT * NUM_OF_GRID_ROWS + MARGIN_GRID_TOP * NUM_OF_GRID_ROWS


  // text settings
  const PARAGRAPH_WIDTH = 400

  const TEXT_MARGIN_TOP = 50
  const STATE_TEXT_Y = window.innerHeight * 0.25 + GRID_HEIGHT + TEXT_MARGIN_TOP
  const STATE_TEXT_X = (window.innerWidth / 2) - GRID_WIDTH - (PARAGRAPH_WIDTH / 2) - MARGIN_RIGHT



  // ----------------
  // grid cell styles
  // ----------------

  // const STROKE_COLOUR = '#2b2b2b'
  const STROKE_COLOUR = BLACK
  // const STROKE_COLOUR = BLACK
  const FILL_COLOUR = GREY_500

  ctx.strokeStyle = STROKE_COLOUR
  ctx.lineWidth = 1


  // contains all grid cells
  // https://code.likeagirl.io/create-an-array-of-empty-arrays-7ec77edea546
  const grid = Array.from(Array(GRID_NUM), () => [])


  initGrid()

  function initGrid () {

    // let gridRowNum = 0
    // a is grid index
    for (let a = 0; a < GRID_NUM; a++) {

      // let gridRowNum = Math.floor(a / NUM_OF_GRID_IN_ONE_ROW)

      for (let i = 0; i < ROWS_NUM; i++) {

        // an array for each row
        grid[ a ].push([])

        for (let j = 0; j < COLUMNS_NUM; j++) {

          // x is horizontal, y is vertical
          // const y = MARGIN_TOP + gridRowNum * GRID_HEIGHT + gridRowNum * MARGIN_GRID_TOP + i * CELL_SIZE
          // const x = MARGIN_LEFT + (a % NUM_OF_GRID_IN_ONE_ROW) * GRID_WIDTH + MARGIN_GRID_LEFT * (a % NUM_OF_GRID_IN_ONE_ROW) + j * CELL_SIZE
          const y = (window.innerHeight * 0.25) + i * CELL_SIZE
          const x = ((window.innerWidth / 2) - GRID_WIDTH - (PARAGRAPH_WIDTH / 2) - MARGIN_RIGHT) + j * CELL_SIZE

          // strokes each individual cell
          // ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE)
          // ctx.strokeRect(x, y, CELL_SIZE, CELL_SIZE)

          grid[ a ][ i ].push({
            ...MIND_STATE_SETTINGS[ a ].defaultCell,
            x: x,
            y: y,
          })
        }
      }

      // makes a outline stroke around the entire grid
      ctx.strokeStyle = STROKE_COLOUR
      // ctx.strokeRect(((window.innerWidth / 2) - GRID_WIDTH - (PARAGRAPH_WIDTH / 2) - MARGIN_RIGHT), (window.innerHeight * 0.25), GRID_WIDTH, GRID_HEIGHT)

    }

    // when gridIndex = 0 and textPartIndex = 0
    // initialise as left arrow hidden
    document.getElementById('left').classList.add('hide')

    // initialise first text bit
    ctx.fillStyle = '#454545'
    ctx.font = '21px Cormorant Upright'
    ctx.fillText(text[ 0 ].title, STATE_TEXT_X, STATE_TEXT_Y, 400)

    const textEl = document.getElementById('text')
    textEl.innerHTML = text[ 0 ].part[ 0 ]

    toggleGame()
  }


  function stepGrid () {
    stepPosition()
    stepAttribute()
    addRandomEmotion()

    // cleans up grid border stroke styling
    ctx.strokeRect(((window.innerWidth / 2) - GRID_WIDTH - (PARAGRAPH_WIDTH / 2) - MARGIN_RIGHT), (window.innerHeight * 0.25), GRID_WIDTH, GRID_HEIGHT)
  }

  function stepPosition () {
    for (let i = 0; i < ROWS_NUM; i++) {
      for (let j = 0; j < COLUMNS_NUM; j++) {
        moveCells(i, j)
      }
    }
    updateValues()
  }

  function stepAttribute () {
    // deep clone trick from here: https://dev.to/samanthaming/how-to-deep-clone-an-array-in-javascript-3cig
    const gridCopy = JSON.parse(JSON.stringify(grid[ gridIndex ]))
    // let cellsAlive = 0

    for (let i = 0; i < ROWS_NUM; i++) {
      for (let j = 0; j < COLUMNS_NUM; j++) {

        emotionCheck(i, j, gridCopy)
        drawCell(i, j, grid[ gridIndex ][ i ][ j ].x, grid[ gridIndex ][ i ][ j ].y)

        // if (grid[ gridIndex ][ i ][ j ].awareness !== 0) cellsAlive++

      }
    }

    // modulates how many cells are 'spawned' based on amount of cells in grid
    // if (cellsAlive / (ROWS_NUM * COLUMNS_NUM) >= 0.75 &&
    //   MIND_STATE_SETTINGS[ gridIndex ].newEmotionSettings.newEmotionChance == 0.5) MIND_STATE_SETTINGS[ gridIndex ].newEmotionSettings.newEmotionChance = 0.25

    // if (cellsAlive / (ROWS_NUM * COLUMNS_NUM) < 0.75 &&
    //   MIND_STATE_SETTINGS[ gridIndex ].newEmotionSettings.newEmotionChance == 0.25) MIND_STATE_SETTINGS[ gridIndex ].newEmotionSettings.newEmotionChance = 0.5

    // console.log(cellsAlive)

  }


  function drawCell (i, j, x, y) {
    // draws the cells
    const curCell = grid[ gridIndex ][ i ][ j ]
    ctx.clearRect(x, y, CELL_SIZE, CELL_SIZE)

    if (curCell.awareness > 0) {

      determineFill(curCell.awareness)

      ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE)

    }
  }


  // =============
  // AWARENESS SIM
  // =============

  function moveCells (curRowIndex, curColIndex) {

    // console.log('grid', gridIndex, grid)
    const curCell = grid[ gridIndex ][ curRowIndex ][ curColIndex ]

    if (curCell.hasMoved || curCell.awareness == 0) return

    // ------------------------------------------------------
    // check surrounding available cells

    const availableDirections = []

    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {

        examinedRow = curRowIndex + i
        examinedCol = curColIndex + j

        // if edge skip
        if (examinedRow < 0 || examinedRow > ROWS_NUM - 1
          || examinedCol < 0 || examinedCol > COLUMNS_NUM - 1) {
          continue
        }

        // if cur cell skip
        if (examinedRow == curRowIndex && examinedCol == curColIndex) continue

        // if cell is occupied skip
        if (grid[ gridIndex ][ examinedRow ][ examinedCol ].awareness !== 0) continue

        // j is x, i is y
        availableDirections.push(translateDeltaToDirection(j, i))

      }
    }

    // if no available slot, do nothing
    if (availableDirections.length == 0) return

    // console.log('available directions', availableDirections)

    // ------------------------------------------------------
    // determines next direction


    let nextDirection;

    if (curCell.modifiers.breathers) {

      if (Math.random() < MIND_STATE_SETTINGS[ gridIndex ].movementModifiersSettings.breathers.stop) {
        curCell.hasMoved = true
        return
      }

    }

    if (curCell.movementType == 'homing') {

      nextDirection = homingMovement()

    } else {
      // for all other movement types

      if (curCell.awareness !== 1) {
        // if (curCell.awareness === 0.25) {

        nextDirection = determineForwardDirection()

      } else if (curCell.awareness == 1) {

        // nextDirection = determineForwardDirection()
        if (MIND_STATE_SETTINGS[ gridIndex ].movementModifiersSettings.homing.enabled) {
          nextDirection = homingMovement()
        } else {
          nextDirection = determineForwardDirection()
        }
      }

    }

    // if (curCell.movementType == 'default' || curCell.movementType == 'left' || curCell.movementType == 'right') {
    // } else if (curCell.movementType == 'homing') {
    //   nextDirection = homingMovement()
    // }


    // -------------------------
    // FUNCTIONS FOR MOVING


    function homingMovement () {

      let min = -2
      let max = 3

      // range 2:
      // 2 2 2 2 2
      // 2 1 1 1 2
      // 2 1 0 1 2
      // 2 1 1 1 2
      // 2 2 2 2 2

      // object keeping track of seen cells
      let checkedCells = {}

      // an example of the checkedCells struture
      // here, it has all of the neighbouring cells 
      // as 'checked'
      // let neighbourCells = {
      //   '-1': {
      //     '-1': true,
      //     '0': true,
      //     '1': true,
      //   },
      //   '0': {
      //     '-1': true,
      //     '0': true,
      //     '1': true,
      //   },
      //   '1': {
      //     '-1': true,
      //     '0': true,
      //     '1': true,
      //   }
      // }

      // progressively searches the outer ring for other cells
      for (let i = min; i < max; i++) {

        if (!checkedCells[ i ]) checkedCells[ i ] = {}

        for (let j = min; j < max; j++) {

          examinedRow = curRowIndex + i
          examinedCol = curColIndex + j


          // if cell already checked
          if (checkedCells[ i ][ j ]) {
            continue
          }

          checkedCells[ i ][ j ] = true

          // if it's the last checked cell
          if (i == max - 1 && j == max - 1) {


            if (!isCellAvailable(examinedRow, examinedCol, curRowIndex, curColIndex)) {

              // first check looks at if the grid is going over the range search limit
              // second and third checks are for not going over grid limit
              if (max !== MIND_STATE_SETTINGS[ gridIndex ].movementModifiersSettings.homing.range + 1 && examinedRow !== ROWS_NUM - 1 && examinedCol !== COLUMNS_NUM - 1) {

                min--
                max++

                // resets loop
                i = min - 1
                j = min - 1

                break

              } else {
                // if hit range and have not found another cell yet
                return determineForwardDirection()

              }

            }

          } else {

            if (!isCellAvailable(examinedRow, examinedCol, curRowIndex, curColIndex))
              continue

          }

          // if there's a cell that's right beside it, don't move
          // if (neighbourCells[ i ][ j ]) break

          nextDirection = translateDeltaToDirection(j, i)
          if (!availableDirections.includes(nextDirection))
            return randomDirection()
          else
            return nextDirection


        }

      }

      function isCellAvailable (examinedRow, examinedCol, curRowIndex, curColIndex) {
        // if edge, skip
        if (examinedRow < 0 || examinedRow > ROWS_NUM - 1
          || examinedCol < 0 || examinedCol > COLUMNS_NUM - 1) {
          return false
        }

        // if cur cell, skip
        if (examinedRow == curRowIndex && examinedCol == curColIndex) return false

        // if grid is empty, skip
        if (grid[ gridIndex ][ examinedRow ][ examinedCol ].awareness == 0) return false

        // if grid is another 100% awareness, skip
        if (grid[ gridIndex ][ examinedRow ][ examinedCol ].awareness == 1) return false

        return true
      }


      // if there's no cell in vicinity
      determineForwardDirection()

    }



    function determineForwardDirection () {

      // if there is already a previous direction
      // cell tries to move in forward, left or right directions
      if (curCell.curDirection) {

        let forward = curCell.curDirection
        let left = curCell.curDirection - 1
        let right = curCell.curDirection + 1

        if (left < 1) {
          left = 8
        } else if (left > 8) {
          left = 1
        }

        if (right < 1) {
          right = 8
        } else if (right > 8) {
          right = 1
        }

        let forwardDirection = checkForward(forward)
        let sideDirection = checkSide(left, right)

        if (Math.random() < MIND_STATE_SETTINGS[ gridIndex ].movementSettings[ curCell.movementType ].forward) {
          // keep on going in same direction

          // checks returns true if next direction successfully set
          // if forward direction is not available, check sides
          if (!forwardDirection) {
            // if sides are not available, assign a random direction
            if (!sideDirection) {
              return randomDirection()

            } else {
              return sideDirection
            }

          } else {
            return forwardDirection
          }

        } else {
          // go towards a side direction
          if (!sideDirection) {
            if (!forwardDirection) {
              return randomDirection()

            } else {
              return forwardDirection
            }

          } else {
            return sideDirection
          }
        }


      } else {
        // if it's a new cell, move it in a random direction
        return randomDirection()
      }
    }


    function checkForward (forward) {
      if (availableDirections.includes(forward)) {
        return forward
      }
      else
        return false
    }

    function checkSide (left, right) {

      if (Math.random() < MIND_STATE_SETTINGS[ gridIndex ].movementSettings[ curCell.movementType ].left) {
        // go left if possible
        if (availableDirections.includes(left)) {
          return left
        } else if (availableDirections.includes(right)) {
          return right
        } else {
          return null
        }
      } else {
        // go right if possible
        if (availableDirections.includes(right)) {
          return right
        } else if (availableDirections.includes(left)) {
          return left
        } else {
          return null
        }
      }
    }

    function randomDirection () {
      // if curCell does not have a direction yet

      // randomise function in range from: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
      const MAX = availableDirections.length
      const MIN = 0
      // const ranNum = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
      const ranNum = Math.floor(Math.random() * MAX)
      return availableDirections[ ranNum ]
    }

    // console.log("next direction", nextDirection)




    // ------------------------------------------------------
    // moves cell

    const [ deltaX, deltaY ] = translateDirectionToDelta(nextDirection)


    const nextCellValues = grid[ gridIndex ][ curRowIndex + deltaY ][ curColIndex + deltaX ]

    // still have to change the grid itself, not the copy of the values above
    grid[ gridIndex ][ curRowIndex + deltaY ][ curColIndex + deltaX ] = {
      ...curCell,
      curDirection: nextDirection,
      hasMoved: true,
      modifiers: {
        ...curCell.modifiers
      },
      x: nextCellValues.x,
      y: nextCellValues.y,
    }

    // console.log(deltaX, deltaY, grid[ curRowIndex + deltaY ][ curColIndex + deltaX ])

    curCell.awareness = 0
    curCell.curDirection = 0
    curCell.hasMoved = false
    curCell.cyclesAlive = 0
    curCell.modifiers = {
      breathers: MIND_STATE_SETTINGS[ gridIndex ].defaultCell.modifiers.breathers
    }

    // console.log('mindstate', gridIndex, MIND_STATE_SETTINGS[ gridIndex ].defaultCell.modifiers)

    if (curCell.modulateSettingsChange) {
      if (grid[ gridIndex ][ curRowIndex + deltaY ][ curColIndex + deltaX ].modulateSettingsChange.isFormTwo) {
        // grid[ gridIndex ][ curRowIndex + deltaY ][ curColIndex + deltaX ].modulateSettingsChange.isFormTwo = true
        // don't know why above form doesn't work
        grid[ gridIndex ][ curRowIndex + deltaY ][ curColIndex + deltaX ].modulateSettingsChange = {
          ...grid[ gridIndex ][ curRowIndex + deltaY ][ curColIndex + deltaX ].modulateSettingsChange,
          isFormTwo: true
        }
        curCell.modulateSettingsChange.isFormTwo = false
      }
    }



    // directions:
    // 812
    // 7a3
    // 654

    // translates deltas into a direction
    function translateDeltaToDirection (x, y) {

      let direction

      if (x <= -1 && y <= -1)
        direction = 8
      else if (x == 0 && y <= -1)
        direction = 1
      else if (x >= 1 && y <= -1)
        direction = 2
      else if (x <= -1 && y == 0)
        direction = 7
      else if (x >= 1 && y == 0)
        direction = 3
      else if (x <= -1 && y >= 1)
        direction = 6
      else if (x == 0 && y >= 1)
        direction = 5
      else if (x >= 1 && y >= 1)
        direction = 4

      return direction

    }

    // translates direction into how many x and y delta
    function translateDirectionToDelta (direction) {

      let x, y

      switch (direction) {
        case 1:
          x = 0
          y = -1
          break

        case 2:
          x = 1
          y = -1
          break

        case 3:
          x = 1
          y = 0
          break

        case 4:
          x = 1
          y = 1
          break

        case 5:
          x = 0
          y = 1
          break

        case 6:
          x = -1
          y = 1
          break

        case 7:
          x = -1
          y = 0
          break

        case 8:
          x = -1
          y = -1
          break

        default:
          console.log('something went wrong in direction switch')
      }
      return [ x, y ]
    }


  }




  // checks surrounding cells' previous values 
  // to determine the next value

  // i is row, j is col 
  function emotionCheck (curRowIndex, curColIndex, gridCopy) {

    const curCell = grid[ gridIndex ][ curRowIndex ][ curColIndex ]
    if (curCell.awareness == 0) return
    // console.log(curCell.hadFullAwareness, curRowIndex, curColIndex)

    modulateAwareness() // biases cell dying / growing 

    if (curCell.awareness === 1 || curCell.awareness === 0 || curCell.hadFullAwareness) {

    } else {
      checkNeighbours()
    }

    // for decaying and growing
    function modulateAwareness () {

      curCell.cyclesAlive--

      // if there are growth settings
      if (curCell.awareness !== 1 && curCell.growth) {
        // should probably implement hadFullAwareness check
        // if (curCell.awareness !== 1 && curCell.growth && !curCell.hadFullAwareness) {

        // if the cycles matches growth settings
        if (curCell.cyclesAlive === curCell.growth[ curCell.awareness ].cycle) {
          // if chance is hit
          if (Math.random() < curCell.growth[ curCell.awareness ].chance) {

            // grow cell
            curCell.awareness += AWARENESS_INCREMENT

            setCyclesSettings(curCell)
          }
        }

      }


      if (curCell.cyclesAlive <= 0) {

        curCell.awareness -= AWARENESS_INCREMENT

        if (curCell.awareness !== 0) {

          // if cell awareness is 0.25 and it's already hadFullAwareness, allow it to live for only one cycle

          setCyclesSettings(curCell)

        } else {
          // resetting cell
          resetCell(curCell)

          // curCell.curDirection = 0
          // curCell.hadFullAwareness = false

          // // not sure if the below properly resets. Should check
          // curCell.modifiers = {
          //   ...MIND_STATE_SETTINGS[ gridIndex ].defaultCell.modifiers
          // }

          // if (curCell.modulateSettingsChange)
          //   curCell.modulateSettingsChange.isFormTwo = false

          return
        }
      }
    }


    function checkNeighbours () {
      // neighbours check
      let moreAwareNeighbours = 0

      // checks 3x3 grid for neighbour status
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          // uses i and j values as addition values
          examinedRow = curRowIndex + i
          examinedCol = curColIndex + j

          // if is center cell, skip
          if (examinedRow == curRowIndex && examinedCol == curColIndex) continue

          // if edge skip
          if (examinedRow < 0 || examinedRow > ROWS_NUM - 1
            || examinedCol < 0 || examinedCol > COLUMNS_NUM - 1) {
            continue
          }

          let examinedCell = gridCopy[ examinedRow ][ examinedCol ]
          if (examinedCell.awareness > grid[ gridIndex ][ curRowIndex ][ curColIndex ].awareness) moreAwareNeighbours++

          // the full awareness cell is reset down to 0.75 
          if (examinedCell.awareness == 1) {
            if (MIND_STATE_SETTINGS[ gridIndex ].movementModifiersSettings.homing.decrease) {
              let curLiveCell = grid[ gridIndex ][ examinedRow ][ examinedCol ]
              curLiveCell.awareness = 0.5
              curLiveCell.cyclesAlive = curLiveCell.decay[ 0.5 ]

              if (curLiveCell.movementModifiersSettings)
                curLiveCell.cyclesAlive = curLiveCell.modulateSettingsChange.decay[ 0.5 ]

              // grid[ gridIndex ][ examinedRow ][ examinedCol ].awareness = 0.75
              // grid[ gridIndex ][ examinedRow ][ examinedCol ].cyclesAlive = grid[ gridIndex ][ examinedRow ][ examinedCol ].decay[ 0.75 ]
            }
          }

          // if (gridCopy[ examinedRow ][ examinedCol ].awareness !== 0) console.log('examining: ', examinedRow, examinedCol, gridCopy[ examinedRow ][ examinedCol ].awareness)
        }
      }
      // console.log('3x3 examination complete. Num of live neighbours: ', moreAwareNeighbours)
      // console.log('for: ', curCell.awareness)

      if (moreAwareNeighbours > 0) {
        // each neighbour that has greater awareness 
        // than cur cell increases it by the awareness increment (e.g 0.25)
        const increasedAwarenessAmount = moreAwareNeighbours * AWARENESS_INCREMENT
        curCell.awareness += increasedAwarenessAmount

        if (curCell.awareness >= 1) curCell.awareness = 1

        setCyclesSettings(curCell)

      }
    }


  }



  // if no version control, will have to have
  // an extra loop through all cells to move
  // new value to old value
  function updateValues () {
    grid[ gridIndex ].forEach((row) => {
      row.forEach((cell) => {
        cell.hasMoved = false
      })
    })
  }



  // let attempts = 0

  function addRandomEmotion () {

    attempts++

    if (Math.random() < MIND_STATE_SETTINGS[ gridIndex ].newEmotionSettings.newEmotionChance) {
      const randomRow = Math.floor(Math.random() * ROWS_NUM)
      const randomCol = Math.floor(Math.random() * COLUMNS_NUM)

      if (grid[ gridIndex ][ randomRow ][ randomCol ].awareness !== 0) {
        // just so it doesn't recursively loop forever
        if (attempts > 10) {
          attempts = 0
          return
        }
        addRandomEmotion()

      } else {
        let curCell = grid[ gridIndex ][ randomRow ][ randomCol ]

        resetCell(curCell)

        // different probabilities
        // https://stackoverflow.com/questions/49164635/javascript-get-random-result-with-probability-for-specific-array

        // -------------------------------------
        // sets different awareness amounts 
        // based on probability

        let awarenessChance = MIND_STATE_SETTINGS[ gridIndex ].newEmotionSettings.awarenessChance

        let awarenessProbability = []

        for (const awarenessAmount in awarenessChance) {
          awarenessProbability.push(Array(awarenessChance[ awarenessAmount ]).fill(awarenessAmount))
        }

        awarenessProbability = awarenessProbability.reduce((prevValue, curValue) => prevValue.concat(curValue))


        // multiply 1 at end to convert string -> int
        let selectedAwarenessAmount = (awarenessProbability[ Math.floor((Math.random() * awarenessProbability.length)) ] * 1)



        let selectedMovementType = MIND_STATE_SETTINGS[ gridIndex ].defaultCell.movementType

        // -----------------------
        // if random movement

        if (selectedMovementType === 'randomise') {

          let movementSettings = MIND_STATE_SETTINGS[ gridIndex ].movementSettings

          // sets different movement types based on probability for each individual cell
          let movementProbability = []

          for (const movementType in movementSettings) {
            movementProbability.push(Array(movementSettings[ movementType ].chance).fill(movementType))
          }

          movementProbability = movementProbability.reduce((prevValue, curValue) => prevValue.concat(curValue))

          selectedMovementType = (movementProbability[ Math.floor((Math.random() * movementProbability.length)) ])
        }

        curCell.movementType = selectedMovementType

        // --------------------------------------------
        // enabling breather based on chance value
        if (Math.random() < MIND_STATE_SETTINGS[ gridIndex ].movementModifiersSettings.breathers.chance) {

          // console.log(gridIndex, curCell)
          grid[ gridIndex ][ randomRow ][ randomCol ].modifiers.breathers = true
          // for some reason below is influencing all cells in both grid 0 and grid 1

        }

        // -----------------------------
        // modulate settings chance
        if (curCell.modulateSettingsChange)
          if (Math.random() < curCell.modulateSettingsChange.chance)
            curCell.modulateSettingsChange.isFormTwo = true




        determineFill(selectedAwarenessAmount)

        ctx.fillRect(curCell.x, curCell.y, CELL_SIZE, CELL_SIZE)
        curCell.awareness = selectedAwarenessAmount
        setCyclesSettings(curCell)

        attempts = 0

        return
      }

    }


  }

  // ==========
  // MISC FUNCS
  // ==========

  function determineFill (value) {

    switch (value) {
      case 0:
        break
      case 0.25:
        ctx.fillStyle = BLUE_200
        break
      case 0.5:
        ctx.fillStyle = BLUE_400
        break
      case 0.75:
        ctx.fillStyle = BLUE_600
        break
      case 1:
        ctx.fillStyle = BLUE_800
        break
      default:
        console.log("something went wrong in cell awareness switch", value)
    }

  }


  function setCyclesSettings (cell) {

    let decaySettings = { ...cell.decay }

    if (cell.modulateSettingsChange)
      if (cell.modulateSettingsChange.isFormTwo)
        decaySettings = { ...cell.modulateSettingsChange.decay }

    switch (cell.awareness) {
      case 0.25:

        cell.cyclesAlive = decaySettings[ 0.25 ]

        if (cell.hadFullAwareness) {

          if (Math.random() < decaySettings.recoverFromFull) {
            cell.hadFullAwareness = false
          } else {
            cell.cyclesAlive = 1
          }

        }

        break

      case 0.5:
        cell.cyclesAlive = decaySettings[ 0.5 ]
        break
      case 0.75:
        cell.cyclesAlive = decaySettings[ 0.75 ]
        break
      case 1:
        cell.cyclesAlive = decaySettings[ 1 ]
        cell.hadFullAwareness = true
        break
      default:
        console.log('something went wrong in set cycles')
    }
  }

  function resetCell (cell) {

    ctx.strokeStyle = STROKE_COLOUR
    ctx.clearRect(cell.x, cell.y, CELL_SIZE, CELL_SIZE)
    cell.awareness = 0
    cell.curDirection = 0
    cell.hadFullAwareness = false

    // not sure if the below properly resets. Should check
    cell.modifiers = {
      ...MIND_STATE_SETTINGS[ gridIndex ].defaultCell.modifiers
    }

    if (cell.modulateSettingsChange)
      cell.modulateSettingsChange.isFormTwo = false

  }

  // ====================
  // CANVAS INTERACTIVITY
  // ====================


  // start game
  const startButton = document.getElementById('start')
  startButton.addEventListener('click', toggleGame)

  function toggleGame () {
    if (!isStart) {
      isStart = true
      // startButton.innerText = 'stop'
      // startButton.classList = 'stop'

      gameInterval = setInterval(() => {
        stepGrid()
      }, tickRate)

    }
    else {
      isStart = false
      // startButton.innerText = 'start'
      // startButton.classList = 'start'
      clearInterval(gameInterval)
    }
  }

  // ------------------
  // text settings


  document.getElementById('left')
    .addEventListener('click', e => {
      changeText('left')
    })

  document.getElementById('right')
    .addEventListener('click', e => {
      changeText('right')
    })


  const textEl = document.getElementById('text')
  const TRANSITION_TIME = 250
  let isTransitioning = false

  function changeText (direction) {
    if (isTransitioning) return

    if (direction == 'left') {
      textPartIndex--



      if (textPartIndex < 0) {

        // transitions canvas and text
        textEl.classList.add('fadeOut')
        canvas.classList.add('fadeOut')

        gridIndex--
        textPartIndex = text[ gridIndex ].part.length - 1

        isTransitioning = true
        setTimeout(() => {
          isTransitioning = false

          reset()

          // grid pattern text
          ctx.fillStyle = '#454545'
          ctx.font = '21px Cormorant Upright'
          ctx.fillText(text[ gridIndex ].title, STATE_TEXT_X, STATE_TEXT_Y, 400)

          textEl.innerHTML = text[ gridIndex ].part[ textPartIndex ]

          textEl.classList.remove('fadeOut')
          canvas.classList.remove('fadeOut')

        }, TRANSITION_TIME)

      } else {
        textEl.innerHTML = text[ gridIndex ].part[ textPartIndex ]
      }

      if (gridIndex == text.length - 2 || gridIndex == text.length - 1 && textPartIndex !== text[ gridIndex ].part.length - 1) {
        document.getElementById('right').classList.remove('hide')
      }

      if (gridIndex == 0 && textPartIndex == 0) {
        document.getElementById('left').classList.add('hide')
      }


    } else if (direction == 'right') {
      textPartIndex++


      // new grid pattern
      if (textPartIndex >= text[ gridIndex ].part.length) {

        textEl.classList.add('fadeOut')
        canvas.classList.add('fadeOut')

        isTransitioning = true

        textPartIndex = 0

        document.getElementById('right').classList.add('hide')

        setTimeout(() => {
          isTransitioning = false

          reset()
          gridIndex++

          // grid pattern text
          ctx.fillStyle = '#454545'
          ctx.font = '21px Cormorant Upright'
          ctx.fillText(text[ gridIndex ].title, STATE_TEXT_X, STATE_TEXT_Y, 400)

          textEl.innerHTML = text[ gridIndex ].part[ textPartIndex ]

          textEl.classList.remove('fadeOut')
          canvas.classList.remove('fadeOut')

          document.getElementById(gridIndex).play()
          isAudioPlaying = true

          if ((textPartIndex >= text[ gridIndex ].part.length - 1)) {
            document.getElementById('right').classList.add('hide')
          } else if (textPartIndex < text[ gridIndex ].part.length - 1) {
            document.getElementById('right').classList.remove('hide')
          }

        }, TRANSITION_TIME)

      } else {
        textEl.innerHTML = text[ gridIndex ].part[ textPartIndex ]
      }

      // if last bit of text of the poem, hide right
      if (gridIndex == text.length - 1 && textPartIndex >= text[ gridIndex ].part.length - 1) {
        document.getElementById('right').classList.add('hide')
      }

      // if reached end of text section but audio is still playing and you're not transitioning, hide the right
      if ((textPartIndex >= text[ gridIndex ].part.length - 1) && !isTransitioning && isAudioPlaying) {
        document.getElementById('right').classList.add('hide')
      }

    }


    // resets all cell grids
    function reset () {
      grid[ gridIndex ].forEach((row) => {
        row.forEach((cell) => {
          resetCell(cell)
        })
      })

      ctx.clearRect(0, 0, canvas.height, canvas.width)
    }


    // console.log(gridIndex, textPartIndex)

  }

  function audioHasEndedCallback () {
    isAudioPlaying = false
    document.getElementById('right').classList.remove('hide')
  }

  document.getElementById('1').addEventListener('ended', audioHasEndedCallback)
  document.getElementById('2').addEventListener('ended', audioHasEndedCallback)
  document.getElementById('3').addEventListener('ended', audioHasEndedCallback)
  document.getElementById('4').addEventListener('ended', audioHasEndedCallback)
  document.getElementById('5').addEventListener('ended', audioHasEndedCallback)
  document.getElementById('6').addEventListener('ended', audioHasEndedCallback)
  document.getElementById('7').addEventListener('ended', audioHasEndedCallback)
  document.getElementById('8').addEventListener('ended', audioHasEndedCallback)


  // examine button for debugging
  // document.getElementById('examine')
  //   .addEventListener('click', e => {

  //     grid.forEach((row) => {
  //       row.forEach((cell) => {
  //         console.log(cell)
  //       })
  //     })

  //   })

}