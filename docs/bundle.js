var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/v-1/cellSettings.js
var defaultCell = {
  awareness: 0,
  curDirection: 0,
  hasMoved: false,
  movementType: "default",
  modifiers: {
    breathers: false
  },
  cyclesAlive: 0,
  hadFullAwareness: false,
  x: null,
  y: null
};
var cellSettingExplanations = {
  newEmotionSettings: {
    newEmotionChance: 0.5,
    awarenessChance: {
      0.25: 50,
      0.5: 0,
      0.75: 0,
      1: 1
    }
  },
  defaultCell: __spreadProps(__spreadValues({}, defaultCell), {
    movementType: "default",
    modifiers: {
      breathers: false
    },
    modulateSettingsChange: {
      chance: 0.1,
      isFormTwo: false,
      decay: {
        "0.25": 5,
        "0.5": 5,
        "0.75": 5,
        "1": 5,
        "recoverFromFull": 0
      }
    },
    decay: {
      "0.25": 1e3,
      "0.5": 2,
      "0.75": 2,
      "1": 5,
      "recoverFromFull": 0
    },
    growth: {
      "0.25": {
        cycle: 3,
        chance: 0.3
      },
      "0.5": {
        cycle: 3,
        chance: 0.5
      },
      "0.75": {
        cycle: 3,
        chance: 0.7
      }
    }
  }),
  movementSettings: {
    default: {
      forward: 0.7,
      left: 0.5,
      chance: 1
    },
    left: {
      forward: 0.3,
      left: 0.9,
      chance: 1
    },
    right: {
      forward: 0.3,
      left: 0.3,
      chance: 1
    },
    beeline: {
      forward: 0.95,
      left: 0.5,
      chance: 1
    },
    homing: {
      left: 0.5
    }
  },
  movementModifiersSettings: {
    breathers: {
      chance: 0.5,
      stop: 0.5
    },
    homing: {
      enabled: true,
      decrease: false,
      range: 5
    }
  }
};
var MIND_STATE_SETTINGS = [
  {
    newEmotionSettings: {
      newEmotionChance: 0,
      awarenessChance: {
        0.25: 10,
        0.5: 1,
        0.75: 1,
        1: 1
      }
    },
    defaultCell: __spreadProps(__spreadValues({}, defaultCell), {
      movementType: "default",
      modifiers: {
        breathers: false
      },
      decay: {
        "0.25": 20,
        "0.5": 3,
        "0.75": 3,
        "1": 3,
        "recoverFromFull": 0.7
      },
      growth: {
        "0.25": {
          cycle: 3,
          chance: 0.1
        },
        "0.5": {
          cycle: 2,
          chance: 0.1
        },
        "0.75": {
          cycle: 2,
          chance: 0.1
        }
      }
    }),
    movementSettings: {
      default: {
        forward: 0.7,
        left: 0.5
      },
      left: {
        forward: 0.3,
        left: 0.9
      },
      right: {
        forward: 0.3,
        left: 0.3
      },
      beeline: {
        forward: 0.95,
        left: 0.5
      }
    },
    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.5
      },
      homing: {
        enabled: true,
        decrease: true,
        range: 5
      }
    }
  },
  {
    newEmotionSettings: {
      newEmotionChance: 0.1,
      awarenessChance: {
        0.25: 10,
        0.5: 1,
        0.75: 1,
        1: 1
      }
    },
    defaultCell: __spreadProps(__spreadValues({}, defaultCell), {
      movementType: "default",
      modifiers: {
        breathers: false
      },
      decay: {
        "0.25": 20,
        "0.5": 3,
        "0.75": 3,
        "1": 3,
        "recoverFromFull": 0.7
      },
      growth: {
        "0.25": {
          cycle: 3,
          chance: 0.1
        },
        "0.5": {
          cycle: 2,
          chance: 0.1
        },
        "0.75": {
          cycle: 2,
          chance: 0.1
        }
      }
    }),
    movementSettings: {
      default: {
        forward: 0.7,
        left: 0.5
      },
      left: {
        forward: 0.3,
        left: 0.9
      },
      right: {
        forward: 0.3,
        left: 0.3
      },
      beeline: {
        forward: 0.95,
        left: 0.5
      }
    },
    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.5
      },
      homing: {
        enabled: true,
        decrease: true,
        range: 5
      }
    }
  },
  {
    newEmotionSettings: {
      newEmotionChance: 0.6,
      awarenessChance: {
        0.25: 4,
        0.5: 2,
        0.75: 1,
        1: 1
      }
    },
    defaultCell: __spreadProps(__spreadValues({}, defaultCell), {
      movementType: "randomise",
      modifiers: {
        breathers: false
      },
      decay: {
        "0.25": 5,
        "0.5": 3,
        "0.75": 3,
        "1": 3,
        "recoverFromFull": 0.5
      },
      growth: {
        "0.25": {
          cycle: 2,
          chance: 0.8
        },
        "0.5": {
          cycle: 2,
          chance: 0.8
        },
        "0.75": {
          cycle: 2,
          chance: 0.7
        }
      }
    }),
    movementSettings: {
      default: {
        forward: 0.7,
        left: 0.5,
        chance: 1
      },
      left: {
        forward: 0.3,
        left: 0.9,
        chance: 1
      },
      right: {
        forward: 0.3,
        left: 0.3,
        chance: 1
      },
      beeline: {
        forward: 0.95,
        left: 0.5,
        chance: 1
      }
    },
    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.5
      },
      homing: {
        enabled: false,
        decrease: true,
        range: 5
      }
    }
  },
  {
    newEmotionSettings: {
      newEmotionChance: 0.02,
      awarenessChance: {
        0.25: 10,
        0.5: 1,
        0.75: 1,
        1: 1
      }
    },
    defaultCell: __spreadProps(__spreadValues({}, defaultCell), {
      movementType: "randomise",
      decay: {
        "0.25": 50,
        "0.5": 10,
        "0.75": 10,
        "1": 5,
        "recoverFromFull": 0.5
      },
      growth: {
        "0.25": {
          cycle: 1,
          chance: 0.5
        },
        "0.5": {
          cycle: 1,
          chance: 0.4
        },
        "0.75": {
          cycle: 1,
          chance: 0.5
        }
      }
    }),
    movementSettings: {
      left: {
        forward: 0.1,
        left: 0.9,
        chance: 1
      },
      right: {
        forward: 0.1,
        left: 0.1,
        chance: 1
      }
    },
    movementModifiersSettings: {
      breathers: {
        chance: 0
      },
      homing: {
        enabled: false
      }
    }
  },
  {
    newEmotionSettings: {
      newEmotionChance: 0.5,
      awarenessChance: {
        0.25: 1,
        0.5: 1,
        0.75: 1,
        1: 1
      }
    },
    defaultCell: __spreadProps(__spreadValues({}, defaultCell), {
      movementType: "default",
      modifiers: {
        breathers: true
      },
      decay: {
        "0.25": 5,
        "0.5": 5,
        "0.75": 5,
        "1": 7,
        "recoverFromFull": 0.5
      },
      growth: {
        "0.25": {
          cycle: 3,
          chance: 0.5
        },
        "0.5": {
          cycle: 2,
          chance: 0.6
        },
        "0.75": {
          cycle: 2,
          chance: 0.7
        }
      }
    }),
    movementSettings: {
      default: {
        forward: 0.7,
        left: 0.5
      },
      left: {
        forward: 0.3,
        left: 0.9
      },
      right: {
        forward: 0.3,
        left: 0.3
      },
      beeline: {
        forward: 0.95,
        left: 0.5
      }
    },
    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.95
      },
      homing: {
        enabled: true,
        decrease: false,
        range: 5
      }
    }
  },
  {
    newEmotionSettings: {
      newEmotionChance: 0.5,
      awarenessChance: {
        0.25: 50,
        0.5: 0,
        0.75: 0,
        1: 1
      }
    },
    defaultCell: __spreadProps(__spreadValues({}, defaultCell), {
      movementType: "default",
      modifiers: {
        breathers: false
      },
      decay: {
        "0.25": 1e3,
        "0.5": 2,
        "0.75": 2,
        "1": 5,
        "recoverFromFull": 0
      }
    }),
    movementSettings: {
      default: {
        forward: 0.7,
        left: 0.5
      },
      left: {
        forward: 0.3,
        left: 0.9
      },
      right: {
        forward: 0.3,
        left: 0.3
      },
      beeline: {
        forward: 0.95,
        left: 0.5
      }
    },
    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.5
      },
      homing: {
        enabled: true,
        decrease: false,
        range: 5
      }
    }
  },
  {
    newEmotionSettings: {
      newEmotionChance: 1,
      awarenessChance: {
        0.25: 1,
        0.5: 1,
        0.75: 1,
        1: 1
      }
    },
    defaultCell: __spreadProps(__spreadValues({}, defaultCell), {
      movementType: "homing",
      modifiers: {
        breathers: false
      },
      decay: {
        "0.25": 5,
        "0.5": 5,
        "0.75": 5,
        "1": 5,
        "recoverFromFull": 0.25
      }
    }),
    movementSettings: {
      homing: {
        left: 0.5
      }
    },
    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.5
      },
      homing: {
        enabled: true,
        decrease: false,
        range: 5
      }
    }
  },
  {
    newEmotionSettings: {
      newEmotionChance: 0.1,
      awarenessChance: {
        0.25: 1,
        0.5: 1,
        0.75: 1,
        1: 1
      }
    },
    defaultCell: __spreadProps(__spreadValues({}, defaultCell), {
      movementType: "beeline",
      modifiers: {
        breathers: true
      },
      decay: {
        "0.25": 100,
        "0.5": 50,
        "0.75": 30,
        "1": 20,
        "recoverFromFull": 0
      }
    }),
    movementSettings: {
      default: {
        forward: 0.7,
        left: 0.5
      },
      left: {
        forward: 0.3,
        left: 0.9
      },
      right: {
        forward: 0.3,
        left: 0.3
      },
      beeline: {
        forward: 0.95,
        left: 0.5
      }
    },
    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.99
      },
      homing: {
        enabled: true,
        decrease: false,
        range: 5
      }
    }
  },
  {
    newEmotionSettings: {
      newEmotionChance: 0.1,
      awarenessChance: {
        0.25: 1,
        0.5: 1,
        0.75: 1,
        1: 1
      }
    },
    defaultCell: __spreadProps(__spreadValues({}, defaultCell), {
      movementType: "randomise",
      modulateSettingsChange: {
        chance: 0.1,
        isFormTwo: false,
        decay: {
          "0.25": 40,
          "0.5": 30,
          "0.75": 20,
          "1": 10,
          "recoverFromFull": 0
        }
      },
      decay: {
        "0.25": 3,
        "0.5": 2,
        "0.75": 2,
        "1": 1,
        "recoverFromFull": 0
      },
      growth: {
        "0.25": {
          cycle: 5,
          chance: 0.5
        },
        "0.5": {
          cycle: 5,
          chance: 0.3
        },
        "0.75": {
          cycle: 5,
          chance: 0.2
        }
      }
    }),
    movementSettings: {
      default: {
        forward: 0.75,
        left: 0.5
      },
      left: {
        forward: 0.05,
        left: 0.9
      },
      right: {
        forward: 0.2,
        left: 0.2
      },
      beeline: {
        forward: 0.95,
        left: 0.5
      }
    },
    movementModifiersSettings: {
      breathers: {
        chance: 0
      },
      homing: {
        enabled: false
      }
    }
  }
];
var text = [
  {
    title: ` `,
    part: [
      `Please turn your sound on.`
    ]
  },
  {
    title: `mind state`,
    part: [
      `I think you're underestimating <br/> 
      how deeply in love you can fall in <br/> 
      with the world`
    ]
  },
  {
    title: `overwhelmed`,
    part: [
      `to be breathless <br/> 
      at the wind-tickled leaves`,
      `to be gripped by tears<br/>
      watching <br/>
      the shimmering web`,
      `to be in awe at the boundless,`,
      `at the universe that exists within <br/>
      this`,
      `crack`,
      `on the pavement`
    ]
  },
  {
    title: `rumminating`,
    part: [
      `that all things <br/>
      contain an infinite <br/>
      no-thingness`,
      `that to deeply know`,
      `a sock`,
      `is to expand the kind of waves <br/>
      that we can even resonant with`
    ]
  },
  {
    title: `clenched`,
    part: [
      `to be giddy with excitement <br/>
      in the mornings`,
      `at the prospect of being able to see <br/>
      each and every one of the <br/>
      ten million <br/> 
      colours`,
      `at the whirls of the laptop fan`,
      `at the warmness in your <br/>
      belly button`
    ]
  },
  {
    title: `volatile`,
    part: [
      `that we have <br/>
      10 Richter scales of <br/>
      potential happiness`,
      `and we're told and conditioned<br/>
      to believe that only magnitude<br/>
      2, maybe 3, <br/>
      are not just <br/> 
      the only sane levels of happiness<br/>
      but also all that's possible`,
      `that...`,
      `is electrifying!`
    ]
  },
  {
    title: `anxious`,
    part: [
      `so many sunsets yet<br/>
      to be felt,<br/>
      profoundly`
    ]
  },
  {
    title: `stilted`,
    part: [
      `just imagine a life where <br/>
      with every passing day`,
      `your highschool crush <br/> 
      for the world <br/>
      ever expands`,
      `as your newborn love <br/> 
      for the world <br/>
      ever deepens`
    ]
  },
  {
    title: `mindful`,
    part: [
      `I wish for nothing more <br/>
      fervently`,
      `than for that to cultivate <br/>
      in the darkest corners of your <br/> 
      gut`,
      `so that the sparks of your mind roots <br/>
      cannot help but be in ecstasy`,
      `with this silly thing <br/>
      we call`,
      `existence.`
    ]
  }
];

// src/v-1/main.js
if (window.location.pathname === "/v-1/") {
  runPoem();
}
function runPoem() {
  const canvas = document.getElementById("canvas");
  canvas.height = window.innerHeight - 100;
  canvas.width = window.innerWidth;
  const ctx = canvas.getContext("2d");
  let isStart = false;
  let gridIndex = 0;
  let textPartIndex = 0;
  let attempts = 0;
  let gameInterval;
  let isAudioPlaying = false;
  const AWARENESS_INCREMENT = 0.25;
  const ROWS_NUM = 20;
  const COLUMNS_NUM = 20;
  const GRID_NUM = text.length;
  let tickRate = 50;
  const GREY_300 = "#e7e2d6";
  const GREY_500 = "#cdc3bd";
  const BLACK = "#252424";
  const BLUE_800 = "#1223A3";
  const BLUE_600 = "#0D58CB";
  const BLUE_400 = "#1F8BED";
  const BLUE_200 = "#91DAFB";
  const MARGIN_TOP = 10;
  const MARGIN_LEFT = 140;
  const MARGIN_RIGHT = 100;
  const MARGIN_GRID_LEFT = 20;
  const MARGIN_GRID_TOP = 250;
  const SCROLLBAR_WIDTH = 20;
  const NUM_OF_GRID_IN_ONE_ROW = 3;
  const GRID_WIDTH = 100;
  const GRID_HEIGHT = GRID_WIDTH;
  const CELL_SIZE = GRID_WIDTH / ROWS_NUM;
  const NUM_OF_GRID_ROWS = Math.ceil(GRID_NUM / NUM_OF_GRID_IN_ONE_ROW);
  const PARAGRAPH_WIDTH = 400;
  const TEXT_MARGIN_TOP = 50;
  const STATE_TEXT_Y = window.innerHeight * 0.25 + GRID_HEIGHT + TEXT_MARGIN_TOP;
  const STATE_TEXT_X = window.innerWidth / 2 - GRID_WIDTH - PARAGRAPH_WIDTH / 2 - MARGIN_RIGHT;
  const STROKE_COLOUR = BLACK;
  const FILL_COLOUR = GREY_500;
  ctx.strokeStyle = STROKE_COLOUR;
  ctx.lineWidth = 1;
  const grid = Array.from(Array(GRID_NUM), () => []);
  initGrid();
  function initGrid() {
    for (let a = 0; a < GRID_NUM; a++) {
      for (let i = 0; i < ROWS_NUM; i++) {
        grid[a].push([]);
        for (let j = 0; j < COLUMNS_NUM; j++) {
          const y = window.innerHeight * 0.25 + i * CELL_SIZE;
          const x = window.innerWidth / 2 - GRID_WIDTH - PARAGRAPH_WIDTH / 2 - MARGIN_RIGHT + j * CELL_SIZE;
          grid[a][i].push(__spreadProps(__spreadValues({}, MIND_STATE_SETTINGS[a].defaultCell), {
            x,
            y
          }));
        }
      }
      ctx.strokeStyle = STROKE_COLOUR;
    }
    document.getElementById("left").classList.add("hide");
    ctx.fillStyle = "#454545";
    ctx.font = "21px Cormorant Upright";
    ctx.fillText(text[0].title, STATE_TEXT_X, STATE_TEXT_Y, 400);
    const textEl2 = document.getElementById("text");
    textEl2.innerHTML = text[0].part[0];
    toggleGame();
  }
  function stepGrid() {
    stepPosition();
    stepAttribute();
    addRandomEmotion();
    ctx.strokeRect(window.innerWidth / 2 - GRID_WIDTH - PARAGRAPH_WIDTH / 2 - MARGIN_RIGHT, window.innerHeight * 0.25, GRID_WIDTH, GRID_HEIGHT);
  }
  function stepPosition() {
    for (let i = 0; i < ROWS_NUM; i++) {
      for (let j = 0; j < COLUMNS_NUM; j++) {
        moveCells(i, j);
      }
    }
    updateValues();
  }
  function stepAttribute() {
    const gridCopy = JSON.parse(JSON.stringify(grid[gridIndex]));
    for (let i = 0; i < ROWS_NUM; i++) {
      for (let j = 0; j < COLUMNS_NUM; j++) {
        emotionCheck(i, j, gridCopy);
        drawCell(i, j, grid[gridIndex][i][j].x, grid[gridIndex][i][j].y);
      }
    }
  }
  function drawCell(i, j, x, y) {
    const curCell = grid[gridIndex][i][j];
    ctx.clearRect(x, y, CELL_SIZE, CELL_SIZE);
    if (curCell.awareness > 0) {
      determineFill(curCell.awareness);
      ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
    }
  }
  function moveCells(curRowIndex, curColIndex) {
    const curCell = grid[gridIndex][curRowIndex][curColIndex];
    if (curCell.hasMoved || curCell.awareness == 0)
      return;
    const availableDirections = [];
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        examinedRow = curRowIndex + i;
        examinedCol = curColIndex + j;
        if (examinedRow < 0 || examinedRow > ROWS_NUM - 1 || examinedCol < 0 || examinedCol > COLUMNS_NUM - 1) {
          continue;
        }
        if (examinedRow == curRowIndex && examinedCol == curColIndex)
          continue;
        if (grid[gridIndex][examinedRow][examinedCol].awareness !== 0)
          continue;
        availableDirections.push(translateDeltaToDirection(j, i));
      }
    }
    if (availableDirections.length == 0)
      return;
    let nextDirection;
    if (curCell.modifiers.breathers) {
      if (Math.random() < MIND_STATE_SETTINGS[gridIndex].movementModifiersSettings.breathers.stop) {
        curCell.hasMoved = true;
        return;
      }
    }
    if (curCell.movementType == "homing") {
      nextDirection = homingMovement();
    } else {
      if (curCell.awareness !== 1) {
        nextDirection = determineForwardDirection();
      } else if (curCell.awareness == 1) {
        if (MIND_STATE_SETTINGS[gridIndex].movementModifiersSettings.homing.enabled) {
          nextDirection = homingMovement();
        } else {
          nextDirection = determineForwardDirection();
        }
      }
    }
    function homingMovement() {
      let min = -2;
      let max = 3;
      let checkedCells = {};
      for (let i = min; i < max; i++) {
        if (!checkedCells[i])
          checkedCells[i] = {};
        for (let j = min; j < max; j++) {
          examinedRow = curRowIndex + i;
          examinedCol = curColIndex + j;
          if (checkedCells[i][j]) {
            continue;
          }
          checkedCells[i][j] = true;
          if (i == max - 1 && j == max - 1) {
            if (!isCellAvailable(examinedRow, examinedCol, curRowIndex, curColIndex)) {
              if (max !== MIND_STATE_SETTINGS[gridIndex].movementModifiersSettings.homing.range + 1 && examinedRow !== ROWS_NUM - 1 && examinedCol !== COLUMNS_NUM - 1) {
                min--;
                max++;
                i = min - 1;
                j = min - 1;
                break;
              } else {
                return determineForwardDirection();
              }
            }
          } else {
            if (!isCellAvailable(examinedRow, examinedCol, curRowIndex, curColIndex))
              continue;
          }
          nextDirection = translateDeltaToDirection(j, i);
          if (!availableDirections.includes(nextDirection))
            return randomDirection();
          else
            return nextDirection;
        }
      }
      function isCellAvailable(examinedRow2, examinedCol2, curRowIndex2, curColIndex2) {
        if (examinedRow2 < 0 || examinedRow2 > ROWS_NUM - 1 || examinedCol2 < 0 || examinedCol2 > COLUMNS_NUM - 1) {
          return false;
        }
        if (examinedRow2 == curRowIndex2 && examinedCol2 == curColIndex2)
          return false;
        if (grid[gridIndex][examinedRow2][examinedCol2].awareness == 0)
          return false;
        if (grid[gridIndex][examinedRow2][examinedCol2].awareness == 1)
          return false;
        return true;
      }
      determineForwardDirection();
    }
    function determineForwardDirection() {
      if (curCell.curDirection) {
        let forward = curCell.curDirection;
        let left = curCell.curDirection - 1;
        let right = curCell.curDirection + 1;
        if (left < 1) {
          left = 8;
        } else if (left > 8) {
          left = 1;
        }
        if (right < 1) {
          right = 8;
        } else if (right > 8) {
          right = 1;
        }
        let forwardDirection = checkForward(forward);
        let sideDirection = checkSide(left, right);
        if (Math.random() < MIND_STATE_SETTINGS[gridIndex].movementSettings[curCell.movementType].forward) {
          if (!forwardDirection) {
            if (!sideDirection) {
              return randomDirection();
            } else {
              return sideDirection;
            }
          } else {
            return forwardDirection;
          }
        } else {
          if (!sideDirection) {
            if (!forwardDirection) {
              return randomDirection();
            } else {
              return forwardDirection;
            }
          } else {
            return sideDirection;
          }
        }
      } else {
        return randomDirection();
      }
    }
    function checkForward(forward) {
      if (availableDirections.includes(forward)) {
        return forward;
      } else
        return false;
    }
    function checkSide(left, right) {
      if (Math.random() < MIND_STATE_SETTINGS[gridIndex].movementSettings[curCell.movementType].left) {
        if (availableDirections.includes(left)) {
          return left;
        } else if (availableDirections.includes(right)) {
          return right;
        } else {
          return null;
        }
      } else {
        if (availableDirections.includes(right)) {
          return right;
        } else if (availableDirections.includes(left)) {
          return left;
        } else {
          return null;
        }
      }
    }
    function randomDirection() {
      const MAX = availableDirections.length;
      const MIN = 0;
      const ranNum = Math.floor(Math.random() * MAX);
      return availableDirections[ranNum];
    }
    const [deltaX, deltaY] = translateDirectionToDelta(nextDirection);
    const nextCellValues = grid[gridIndex][curRowIndex + deltaY][curColIndex + deltaX];
    grid[gridIndex][curRowIndex + deltaY][curColIndex + deltaX] = __spreadProps(__spreadValues({}, curCell), {
      curDirection: nextDirection,
      hasMoved: true,
      modifiers: __spreadValues({}, curCell.modifiers),
      x: nextCellValues.x,
      y: nextCellValues.y
    });
    curCell.awareness = 0;
    curCell.curDirection = 0;
    curCell.hasMoved = false;
    curCell.cyclesAlive = 0;
    curCell.modifiers = {
      breathers: MIND_STATE_SETTINGS[gridIndex].defaultCell.modifiers.breathers
    };
    if (curCell.modulateSettingsChange) {
      if (grid[gridIndex][curRowIndex + deltaY][curColIndex + deltaX].modulateSettingsChange.isFormTwo) {
        grid[gridIndex][curRowIndex + deltaY][curColIndex + deltaX].modulateSettingsChange = __spreadProps(__spreadValues({}, grid[gridIndex][curRowIndex + deltaY][curColIndex + deltaX].modulateSettingsChange), {
          isFormTwo: true
        });
        curCell.modulateSettingsChange.isFormTwo = false;
      }
    }
    function translateDeltaToDirection(x, y) {
      let direction;
      if (x <= -1 && y <= -1)
        direction = 8;
      else if (x == 0 && y <= -1)
        direction = 1;
      else if (x >= 1 && y <= -1)
        direction = 2;
      else if (x <= -1 && y == 0)
        direction = 7;
      else if (x >= 1 && y == 0)
        direction = 3;
      else if (x <= -1 && y >= 1)
        direction = 6;
      else if (x == 0 && y >= 1)
        direction = 5;
      else if (x >= 1 && y >= 1)
        direction = 4;
      return direction;
    }
    function translateDirectionToDelta(direction) {
      let x, y;
      switch (direction) {
        case 1:
          x = 0;
          y = -1;
          break;
        case 2:
          x = 1;
          y = -1;
          break;
        case 3:
          x = 1;
          y = 0;
          break;
        case 4:
          x = 1;
          y = 1;
          break;
        case 5:
          x = 0;
          y = 1;
          break;
        case 6:
          x = -1;
          y = 1;
          break;
        case 7:
          x = -1;
          y = 0;
          break;
        case 8:
          x = -1;
          y = -1;
          break;
        default:
          console.log("something went wrong in direction switch");
      }
      return [x, y];
    }
  }
  function emotionCheck(curRowIndex, curColIndex, gridCopy) {
    const curCell = grid[gridIndex][curRowIndex][curColIndex];
    if (curCell.awareness == 0)
      return;
    modulateAwareness();
    if (curCell.awareness === 1 || curCell.awareness === 0 || curCell.hadFullAwareness) {
    } else {
      checkNeighbours();
    }
    function modulateAwareness() {
      curCell.cyclesAlive--;
      if (curCell.awareness !== 1 && curCell.growth) {
        if (curCell.cyclesAlive === curCell.growth[curCell.awareness].cycle) {
          if (Math.random() < curCell.growth[curCell.awareness].chance) {
            curCell.awareness += AWARENESS_INCREMENT;
            setCyclesSettings(curCell);
          }
        }
      }
      if (curCell.cyclesAlive <= 0) {
        curCell.awareness -= AWARENESS_INCREMENT;
        if (curCell.awareness !== 0) {
          setCyclesSettings(curCell);
        } else {
          resetCell(curCell);
          return;
        }
      }
    }
    function checkNeighbours() {
      let moreAwareNeighbours = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          examinedRow = curRowIndex + i;
          examinedCol = curColIndex + j;
          if (examinedRow == curRowIndex && examinedCol == curColIndex)
            continue;
          if (examinedRow < 0 || examinedRow > ROWS_NUM - 1 || examinedCol < 0 || examinedCol > COLUMNS_NUM - 1) {
            continue;
          }
          let examinedCell = gridCopy[examinedRow][examinedCol];
          if (examinedCell.awareness > grid[gridIndex][curRowIndex][curColIndex].awareness)
            moreAwareNeighbours++;
          if (examinedCell.awareness == 1) {
            if (MIND_STATE_SETTINGS[gridIndex].movementModifiersSettings.homing.decrease) {
              let curLiveCell = grid[gridIndex][examinedRow][examinedCol];
              curLiveCell.awareness = 0.5;
              curLiveCell.cyclesAlive = curLiveCell.decay[0.5];
              if (curLiveCell.movementModifiersSettings)
                curLiveCell.cyclesAlive = curLiveCell.modulateSettingsChange.decay[0.5];
            }
          }
        }
      }
      if (moreAwareNeighbours > 0) {
        const increasedAwarenessAmount = moreAwareNeighbours * AWARENESS_INCREMENT;
        curCell.awareness += increasedAwarenessAmount;
        if (curCell.awareness >= 1)
          curCell.awareness = 1;
        setCyclesSettings(curCell);
      }
    }
  }
  function updateValues() {
    grid[gridIndex].forEach((row) => {
      row.forEach((cell) => {
        cell.hasMoved = false;
      });
    });
  }
  function addRandomEmotion() {
    attempts++;
    if (Math.random() < MIND_STATE_SETTINGS[gridIndex].newEmotionSettings.newEmotionChance) {
      const randomRow = Math.floor(Math.random() * ROWS_NUM);
      const randomCol = Math.floor(Math.random() * COLUMNS_NUM);
      if (grid[gridIndex][randomRow][randomCol].awareness !== 0) {
        if (attempts > 10) {
          attempts = 0;
          return;
        }
        addRandomEmotion();
      } else {
        let curCell = grid[gridIndex][randomRow][randomCol];
        resetCell(curCell);
        let awarenessChance = MIND_STATE_SETTINGS[gridIndex].newEmotionSettings.awarenessChance;
        let awarenessProbability = [];
        for (const awarenessAmount in awarenessChance) {
          awarenessProbability.push(Array(awarenessChance[awarenessAmount]).fill(awarenessAmount));
        }
        awarenessProbability = awarenessProbability.reduce((prevValue, curValue) => prevValue.concat(curValue));
        let selectedAwarenessAmount = awarenessProbability[Math.floor(Math.random() * awarenessProbability.length)] * 1;
        let selectedMovementType = MIND_STATE_SETTINGS[gridIndex].defaultCell.movementType;
        if (selectedMovementType === "randomise") {
          let movementSettings = MIND_STATE_SETTINGS[gridIndex].movementSettings;
          let movementProbability = [];
          for (const movementType in movementSettings) {
            movementProbability.push(Array(movementSettings[movementType].chance).fill(movementType));
          }
          movementProbability = movementProbability.reduce((prevValue, curValue) => prevValue.concat(curValue));
          selectedMovementType = movementProbability[Math.floor(Math.random() * movementProbability.length)];
        }
        curCell.movementType = selectedMovementType;
        if (Math.random() < MIND_STATE_SETTINGS[gridIndex].movementModifiersSettings.breathers.chance) {
          grid[gridIndex][randomRow][randomCol].modifiers.breathers = true;
        }
        if (curCell.modulateSettingsChange) {
          if (Math.random() < curCell.modulateSettingsChange.chance)
            curCell.modulateSettingsChange.isFormTwo = true;
        }
        determineFill(selectedAwarenessAmount);
        ctx.fillRect(curCell.x, curCell.y, CELL_SIZE, CELL_SIZE);
        curCell.awareness = selectedAwarenessAmount;
        setCyclesSettings(curCell);
        attempts = 0;
        return;
      }
    }
  }
  function determineFill(value) {
    switch (value) {
      case 0:
        break;
      case 0.25:
        ctx.fillStyle = BLUE_200;
        break;
      case 0.5:
        ctx.fillStyle = BLUE_400;
        break;
      case 0.75:
        ctx.fillStyle = BLUE_600;
        break;
      case 1:
        ctx.fillStyle = BLUE_800;
        break;
      default:
        console.log("something went wrong in cell awareness switch", value);
    }
  }
  function setCyclesSettings(cell) {
    let decaySettings = __spreadValues({}, cell.decay);
    if (cell.modulateSettingsChange) {
      if (cell.modulateSettingsChange.isFormTwo)
        decaySettings = __spreadValues({}, cell.modulateSettingsChange.decay);
    }
    switch (cell.awareness) {
      case 0.25:
        cell.cyclesAlive = decaySettings[0.25];
        if (cell.hadFullAwareness) {
          if (Math.random() < decaySettings.recoverFromFull) {
            cell.hadFullAwareness = false;
          } else {
            cell.cyclesAlive = 1;
          }
        }
        break;
      case 0.5:
        cell.cyclesAlive = decaySettings[0.5];
        break;
      case 0.75:
        cell.cyclesAlive = decaySettings[0.75];
        break;
      case 1:
        cell.cyclesAlive = decaySettings[1];
        cell.hadFullAwareness = true;
        break;
      default:
        console.log("something went wrong in set cycles");
    }
  }
  function resetCell(cell) {
    ctx.strokeStyle = STROKE_COLOUR;
    ctx.clearRect(cell.x, cell.y, CELL_SIZE, CELL_SIZE);
    cell.awareness = 0;
    cell.curDirection = 0;
    cell.hadFullAwareness = false;
    cell.modifiers = __spreadValues({}, MIND_STATE_SETTINGS[gridIndex].defaultCell.modifiers);
    if (cell.modulateSettingsChange)
      cell.modulateSettingsChange.isFormTwo = false;
  }
  const startButton = document.getElementById("start");
  startButton.addEventListener("click", toggleGame);
  function toggleGame() {
    if (!isStart) {
      isStart = true;
      gameInterval = setInterval(() => {
        stepGrid();
      }, tickRate);
    } else {
      isStart = false;
      clearInterval(gameInterval);
    }
  }
  document.getElementById("left").addEventListener("click", (e) => {
    changeText("left");
  });
  document.getElementById("right").addEventListener("click", (e) => {
    changeText("right");
  });
  const textEl = document.getElementById("text");
  const TRANSITION_TIME = 250;
  let isTransitioning = false;
  function changeText(direction) {
    if (isTransitioning)
      return;
    if (direction == "left") {
      textPartIndex--;
      if (textPartIndex < 0) {
        textEl.classList.add("fadeOut");
        canvas.classList.add("fadeOut");
        gridIndex--;
        textPartIndex = text[gridIndex].part.length - 1;
        isTransitioning = true;
        setTimeout(() => {
          isTransitioning = false;
          reset();
          ctx.fillStyle = "#454545";
          ctx.font = "21px Cormorant Upright";
          ctx.fillText(text[gridIndex].title, STATE_TEXT_X, STATE_TEXT_Y, 400);
          textEl.innerHTML = text[gridIndex].part[textPartIndex];
          textEl.classList.remove("fadeOut");
          canvas.classList.remove("fadeOut");
        }, TRANSITION_TIME);
      } else {
        textEl.innerHTML = text[gridIndex].part[textPartIndex];
      }
      if (gridIndex == text.length - 2 || gridIndex == text.length - 1 && textPartIndex !== text[gridIndex].part.length - 1) {
        document.getElementById("right").classList.remove("hide");
      }
      if (gridIndex == 0 && textPartIndex == 0) {
        document.getElementById("left").classList.add("hide");
      }
    } else if (direction == "right") {
      textPartIndex++;
      if (textPartIndex >= text[gridIndex].part.length) {
        textEl.classList.add("fadeOut");
        canvas.classList.add("fadeOut");
        isTransitioning = true;
        textPartIndex = 0;
        document.getElementById("right").classList.add("hide");
        setTimeout(() => {
          isTransitioning = false;
          reset();
          gridIndex++;
          ctx.fillStyle = "#454545";
          ctx.font = "21px Cormorant Upright";
          ctx.fillText(text[gridIndex].title, STATE_TEXT_X, STATE_TEXT_Y, 400);
          textEl.innerHTML = text[gridIndex].part[textPartIndex];
          textEl.classList.remove("fadeOut");
          canvas.classList.remove("fadeOut");
          document.getElementById(gridIndex).play();
          isAudioPlaying = true;
          if (textPartIndex >= text[gridIndex].part.length - 1) {
            document.getElementById("right").classList.add("hide");
          } else if (gridIndex !== text.length - 1 && textPartIndex < text[gridIndex].part.length - 1) {
            document.getElementById("right").classList.remove("hide");
          }
        }, TRANSITION_TIME);
      } else {
        textEl.innerHTML = text[gridIndex].part[textPartIndex];
      }
      if (gridIndex == 1 || gridIndex == 0 && textPartIndex == 1) {
      }
      if (gridIndex == text.length - 1 && textPartIndex >= text[gridIndex].part.length - 1) {
        document.getElementById("right").classList.add("hide");
      }
      if (textPartIndex >= text[gridIndex].part.length - 1 && !isTransitioning) {
        document.getElementById("right").classList.add("hide");
      }
    }
    function reset() {
      grid[gridIndex].forEach((row) => {
        row.forEach((cell) => {
          resetCell(cell);
        });
      });
      ctx.clearRect(0, 0, canvas.height, canvas.width);
    }
  }
  function audioHasEndedCallback() {
    isAudioPlaying = false;
    document.getElementById("right").classList.remove("hide");
  }
  document.getElementById("1").addEventListener("ended", audioHasEndedCallback);
  document.getElementById("2").addEventListener("ended", audioHasEndedCallback);
  document.getElementById("3").addEventListener("ended", audioHasEndedCallback);
  document.getElementById("4").addEventListener("ended", audioHasEndedCallback);
  document.getElementById("5").addEventListener("ended", audioHasEndedCallback);
  document.getElementById("6").addEventListener("ended", audioHasEndedCallback);
  document.getElementById("7").addEventListener("ended", audioHasEndedCallback);
  document.getElementById("8").addEventListener("ended", audioHasEndedCallback);
}

// src/v-2/cellSettings.js
var defaultCell2 = {
  awareness: 0,
  curDirection: 0,
  hasMoved: false,
  movementType: "default",
  modifiers: {
    breathers: false
  },
  cyclesAlive: 0,
  hadFullAwareness: false,
  x: null,
  y: null
};
var cellSettingExplanations2 = {
  newEmotionSettings: {
    newEmotionChance: 0.5,
    awarenessChance: {
      0.25: 50,
      0.5: 0,
      0.75: 0,
      1: 1
    }
  },
  defaultCell: __spreadProps(__spreadValues({}, defaultCell2), {
    movementType: "default",
    modifiers: {
      breathers: false
    },
    modulateSettingsChange: {
      chance: 0.1,
      isFormTwo: false,
      decay: {
        "0.25": 5,
        "0.5": 5,
        "0.75": 5,
        "1": 5,
        "recoverFromFull": 0
      }
    },
    decay: {
      "0.25": 1e3,
      "0.5": 2,
      "0.75": 2,
      "1": 5,
      "recoverFromFull": 0
    },
    growth: {
      "0.25": {
        cycle: 3,
        chance: 0.3
      },
      "0.5": {
        cycle: 3,
        chance: 0.5
      },
      "0.75": {
        cycle: 3,
        chance: 0.7
      }
    }
  }),
  movementSettings: {
    default: {
      forward: 0.7,
      left: 0.5,
      chance: 1
    },
    left: {
      forward: 0.3,
      left: 0.9,
      chance: 1
    },
    right: {
      forward: 0.3,
      left: 0.3,
      chance: 1
    },
    beeline: {
      forward: 0.95,
      left: 0.5,
      chance: 1
    },
    homing: {
      left: 0.5
    }
  },
  movementModifiersSettings: {
    breathers: {
      chance: 0.5,
      stop: 0.5
    },
    homing: {
      enabled: true,
      decrease: false,
      range: 5
    }
  }
};
var MIND_STATE_SETTINGS2 = [
  {
    newEmotionSettings: {
      newEmotionChance: 0.1,
      awarenessChance: {
        0.25: 10,
        0.5: 1,
        0.75: 1,
        1: 1
      }
    },
    defaultCell: __spreadProps(__spreadValues({}, defaultCell2), {
      movementType: "default",
      modifiers: {
        breathers: false
      },
      decay: {
        "0.25": 20,
        "0.5": 3,
        "0.75": 3,
        "1": 3,
        "recoverFromFull": 0.7
      },
      growth: {
        "0.25": {
          cycle: 3,
          chance: 0.1
        },
        "0.5": {
          cycle: 2,
          chance: 0.1
        },
        "0.75": {
          cycle: 2,
          chance: 0.1
        }
      }
    }),
    movementSettings: {
      default: {
        forward: 0.7,
        left: 0.5
      },
      left: {
        forward: 0.3,
        left: 0.9
      },
      right: {
        forward: 0.3,
        left: 0.3
      },
      beeline: {
        forward: 0.95,
        left: 0.5
      }
    },
    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.5
      },
      homing: {
        enabled: true,
        decrease: true,
        range: 5
      }
    }
  },
  {
    newEmotionSettings: {
      newEmotionChance: 0.6,
      awarenessChance: {
        0.25: 4,
        0.5: 2,
        0.75: 1,
        1: 1
      }
    },
    defaultCell: __spreadProps(__spreadValues({}, defaultCell2), {
      movementType: "randomise",
      modifiers: {
        breathers: false
      },
      decay: {
        "0.25": 5,
        "0.5": 3,
        "0.75": 3,
        "1": 3,
        "recoverFromFull": 0.5
      },
      growth: {
        "0.25": {
          cycle: 2,
          chance: 0.8
        },
        "0.5": {
          cycle: 2,
          chance: 0.8
        },
        "0.75": {
          cycle: 2,
          chance: 0.7
        }
      }
    }),
    movementSettings: {
      default: {
        forward: 0.7,
        left: 0.5,
        chance: 1
      },
      left: {
        forward: 0.3,
        left: 0.9,
        chance: 1
      },
      right: {
        forward: 0.3,
        left: 0.3,
        chance: 1
      },
      beeline: {
        forward: 0.95,
        left: 0.5,
        chance: 1
      }
    },
    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.5
      },
      homing: {
        enabled: false,
        decrease: true,
        range: 5
      }
    }
  },
  {
    newEmotionSettings: {
      newEmotionChance: 0.02,
      awarenessChance: {
        0.25: 10,
        0.5: 1,
        0.75: 1,
        1: 1
      }
    },
    defaultCell: __spreadProps(__spreadValues({}, defaultCell2), {
      movementType: "randomise",
      decay: {
        "0.25": 50,
        "0.5": 10,
        "0.75": 10,
        "1": 5,
        "recoverFromFull": 0.5
      },
      growth: {
        "0.25": {
          cycle: 1,
          chance: 0.5
        },
        "0.5": {
          cycle: 1,
          chance: 0.4
        },
        "0.75": {
          cycle: 1,
          chance: 0.5
        }
      }
    }),
    movementSettings: {
      left: {
        forward: 0.1,
        left: 0.9,
        chance: 1
      },
      right: {
        forward: 0.1,
        left: 0.1,
        chance: 1
      }
    },
    movementModifiersSettings: {
      breathers: {
        chance: 0
      },
      homing: {
        enabled: false
      }
    }
  },
  {
    newEmotionSettings: {
      newEmotionChance: 0.5,
      awarenessChance: {
        0.25: 1,
        0.5: 1,
        0.75: 1,
        1: 1
      }
    },
    defaultCell: __spreadProps(__spreadValues({}, defaultCell2), {
      movementType: "default",
      modifiers: {
        breathers: true
      },
      decay: {
        "0.25": 5,
        "0.5": 5,
        "0.75": 5,
        "1": 7,
        "recoverFromFull": 0.5
      },
      growth: {
        "0.25": {
          cycle: 3,
          chance: 0.5
        },
        "0.5": {
          cycle: 2,
          chance: 0.6
        },
        "0.75": {
          cycle: 2,
          chance: 0.7
        }
      }
    }),
    movementSettings: {
      default: {
        forward: 0.7,
        left: 0.5
      },
      left: {
        forward: 0.3,
        left: 0.9
      },
      right: {
        forward: 0.3,
        left: 0.3
      },
      beeline: {
        forward: 0.95,
        left: 0.5
      }
    },
    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.95
      },
      homing: {
        enabled: true,
        decrease: false,
        range: 5
      }
    }
  },
  {
    newEmotionSettings: {
      newEmotionChance: 0.5,
      awarenessChance: {
        0.25: 50,
        0.5: 0,
        0.75: 0,
        1: 1
      }
    },
    defaultCell: __spreadProps(__spreadValues({}, defaultCell2), {
      movementType: "default",
      modifiers: {
        breathers: false
      },
      decay: {
        "0.25": 1e3,
        "0.5": 2,
        "0.75": 2,
        "1": 5,
        "recoverFromFull": 0
      }
    }),
    movementSettings: {
      default: {
        forward: 0.7,
        left: 0.5
      },
      left: {
        forward: 0.3,
        left: 0.9
      },
      right: {
        forward: 0.3,
        left: 0.3
      },
      beeline: {
        forward: 0.95,
        left: 0.5
      }
    },
    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.5
      },
      homing: {
        enabled: true,
        decrease: false,
        range: 5
      }
    }
  },
  {
    newEmotionSettings: {
      newEmotionChance: 1,
      awarenessChance: {
        0.25: 1,
        0.5: 1,
        0.75: 1,
        1: 1
      }
    },
    defaultCell: __spreadProps(__spreadValues({}, defaultCell2), {
      movementType: "homing",
      modifiers: {
        breathers: false
      },
      decay: {
        "0.25": 5,
        "0.5": 5,
        "0.75": 5,
        "1": 5,
        "recoverFromFull": 0.25
      }
    }),
    movementSettings: {
      homing: {
        left: 0.5
      }
    },
    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.5
      },
      homing: {
        enabled: true,
        decrease: false,
        range: 5
      }
    }
  },
  {
    newEmotionSettings: {
      newEmotionChance: 0.1,
      awarenessChance: {
        0.25: 1,
        0.5: 1,
        0.75: 1,
        1: 1
      }
    },
    defaultCell: __spreadProps(__spreadValues({}, defaultCell2), {
      movementType: "beeline",
      modifiers: {
        breathers: true
      },
      decay: {
        "0.25": 100,
        "0.5": 50,
        "0.75": 30,
        "1": 20,
        "recoverFromFull": 0
      }
    }),
    movementSettings: {
      default: {
        forward: 0.7,
        left: 0.5
      },
      left: {
        forward: 0.3,
        left: 0.9
      },
      right: {
        forward: 0.3,
        left: 0.3
      },
      beeline: {
        forward: 0.95,
        left: 0.5
      }
    },
    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.99
      },
      homing: {
        enabled: true,
        decrease: false,
        range: 5
      }
    }
  },
  {
    newEmotionSettings: {
      newEmotionChance: 0.1,
      awarenessChance: {
        0.25: 1,
        0.5: 1,
        0.75: 1,
        1: 1
      }
    },
    defaultCell: __spreadProps(__spreadValues({}, defaultCell2), {
      movementType: "randomise",
      modulateSettingsChange: {
        chance: 0.1,
        isFormTwo: false,
        decay: {
          "0.25": 40,
          "0.5": 30,
          "0.75": 20,
          "1": 10,
          "recoverFromFull": 0
        }
      },
      decay: {
        "0.25": 3,
        "0.5": 2,
        "0.75": 2,
        "1": 1,
        "recoverFromFull": 0
      },
      growth: {
        "0.25": {
          cycle: 5,
          chance: 0.5
        },
        "0.5": {
          cycle: 5,
          chance: 0.3
        },
        "0.75": {
          cycle: 5,
          chance: 0.2
        }
      }
    }),
    movementSettings: {
      default: {
        forward: 0.75,
        left: 0.5
      },
      left: {
        forward: 0.05,
        left: 0.9
      },
      right: {
        forward: 0.2,
        left: 0.2
      },
      beeline: {
        forward: 0.95,
        left: 0.5
      }
    },
    movementModifiersSettings: {
      breathers: {
        chance: 0
      },
      homing: {
        enabled: false
      }
    }
  }
];
var text2 = [
  {
    title: `mind state`,
    part: [
      `I think you're underestimating <br/> 
      how deeply in love you can fall in <br/> 
      with the world`
    ],
    waitTime: 2e3
  },
  {
    title: `overwhelmed`,
    part: [
      `
      to be breathless <br/> 
      at the wind-tickled leaves <br/><br/>
      
      to be gripped by tears<br/>
      watching <br/>
      the shimmering web <br/><br/>
      
      to be in awe at the boundless, <br/><br/>
      
      at the universe that exists within <br/>
      this <br/><br/>
      
      crack <br/><br/>
      
      on the pavement
      <br/><br/><br/><br/><br/>
      `
    ],
    waitTime: 5e3
  },
  {
    title: `rumminating`,
    part: [
      `that all things <br/>
      contain an infinite <br/>
      
      no-thingness <br/><br/>
      
      that to deeply know <br/><br/>
      
      a sock <br/><br/>
      
      is to expand the kind of waves <br/>
      that we can even resonant with 
      <br/><br/><br/><br/><br/>`
    ],
    waitTime: 1e4
  },
  {
    title: `clenched`,
    part: [
      `to be giddy with excitement <br/>
      in the mornings <br/><br/>
      
      at the prospect of being able to see <br/>
      each and every one of the <br/>
      ten million <br/> 
      colours <br/><br/>
      
      at the whirls of the laptop fan <br/><br/>

      at the warmness in your <br/>
      belly button
      <br/><br/><br/><br/><br/>`
    ],
    waitTime: 5e3
  },
  {
    title: `volatile`,
    part: [
      `that we have <br/>
      10 Richter scales of <br/>
      potential happiness <br/><br/>

      and we're told and conditioned<br/>
      to believe that only magnitude<br/>
      2, maybe 3, <br/>
      are not just <br/> 
      the only sane levels of happiness<br/>
      but also all that's possible <br/><br/>

      that... <br/><br/>

      is electrifying!
      <br/><br/><br/><br/><br/>`
    ],
    waitTime: 1e4
  },
  {
    title: `anxious`,
    part: [
      `so many sunsets yet<br/>
      to be felt,<br/>
      profoundly`
    ],
    waitTime: 5e3
  },
  {
    title: `stilted`,
    part: [
      `just imagine a life where <br/>
      with every passing day <br/><br/>

      your highschool crush <br/> 
      for the world <br/>
      ever expands <br/><br/>

      as your newborn love <br/> 
      for the world <br/>
      ever deepens
      <br/><br/><br/><br/><br/>`
    ],
    waitTime: 5e3
  },
  {
    title: `mindful`,
    part: [
      `I wish for nothing more <br/>
      fervently <br/><br/>
      than for that to cultivate <br/>
      in the darkest corners of your <br/> 
      gut <br/><br/>
      so that the sparks of your mind roots <br/>
      cannot help but be in ecstasy <br/><br/>
      with this silly thing <br/>
      we call <br/><br/>
      existence.
      <br/><br/><br/><br/><br/>`
    ],
    waitTime: 5e3
  }
];

// src/v-2/main.js
if (window.location.pathname === "/v-2/") {
  runPoem2();
}
function runPoem2() {
  const canvas = document.getElementById("canvas");
  canvas.height = window.innerHeight - 100;
  canvas.width = window.innerWidth;
  const ctx = canvas.getContext("2d");
  let isStart = false;
  let gridIndex = 0;
  let partIndex = 0;
  let attempts = 0;
  let gameInterval;
  const AWARENESS_INCREMENT = 0.25;
  const ROWS_NUM = 20;
  const COLUMNS_NUM = 20;
  const GRID_NUM = text2.length;
  let tickRate = 50;
  const GREY_300 = "#e7e2d6";
  const GREY_500 = "#cdc3bd";
  const BLACK = "#252424";
  const BLUE_800 = "#1223A3";
  const BLUE_600 = "#0D58CB";
  const BLUE_400 = "#1F8BED";
  const BLUE_200 = "#91DAFB";
  const MARGIN_RIGHT = 100;
  const GRID_WIDTH = 350;
  const GRID_HEIGHT = GRID_WIDTH;
  const CELL_SIZE = GRID_WIDTH / ROWS_NUM;
  const GRID_X_POSITION = window.innerWidth / 2 - GRID_WIDTH / 2;
  const GRID_Y_POSITION = window.innerHeight * 0.25;
  const STROKE_COLOUR = BLACK;
  const FILL_COLOUR = GREY_500;
  ctx.strokeStyle = STROKE_COLOUR;
  ctx.lineWidth = 1;
  const grid = Array.from(Array(GRID_NUM), () => []);
  initGrid();
  function initGrid() {
    for (let a = 0; a < GRID_NUM; a++) {
      for (let i = 0; i < ROWS_NUM; i++) {
        grid[a].push([]);
        for (let j = 0; j < COLUMNS_NUM; j++) {
          const y = GRID_Y_POSITION + i * CELL_SIZE;
          const x = GRID_X_POSITION + j * CELL_SIZE;
          grid[a][i].push(__spreadProps(__spreadValues({}, MIND_STATE_SETTINGS2[a].defaultCell), {
            x,
            y
          }));
        }
      }
      ctx.strokeStyle = STROKE_COLOUR;
    }
    const textEl2 = document.getElementById("text");
    textEl2.innerHTML = text2[0].title;
    startProgressBar();
    document.getElementById("right").classList.add("hide");
    toggleGame();
  }
  function stepGrid() {
    stepPosition();
    stepAttribute();
    addRandomEmotion();
    ctx.strokeRect(GRID_X_POSITION, GRID_Y_POSITION, GRID_WIDTH, GRID_HEIGHT);
  }
  function stepPosition() {
    for (let i = 0; i < ROWS_NUM; i++) {
      for (let j = 0; j < COLUMNS_NUM; j++) {
        moveCells(i, j);
      }
    }
    updateValues();
  }
  function stepAttribute() {
    const gridCopy = JSON.parse(JSON.stringify(grid[gridIndex]));
    for (let i = 0; i < ROWS_NUM; i++) {
      for (let j = 0; j < COLUMNS_NUM; j++) {
        emotionCheck(i, j, gridCopy);
        drawCell(i, j, grid[gridIndex][i][j].x, grid[gridIndex][i][j].y);
      }
    }
  }
  function drawCell(i, j, x, y) {
    const curCell = grid[gridIndex][i][j];
    ctx.clearRect(x, y, CELL_SIZE, CELL_SIZE);
    if (curCell.awareness > 0) {
      determineFill(curCell.awareness);
      ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
    }
  }
  function moveCells(curRowIndex, curColIndex) {
    const curCell = grid[gridIndex][curRowIndex][curColIndex];
    if (curCell.hasMoved || curCell.awareness == 0)
      return;
    const availableDirections = [];
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        examinedRow = curRowIndex + i;
        examinedCol = curColIndex + j;
        if (examinedRow < 0 || examinedRow > ROWS_NUM - 1 || examinedCol < 0 || examinedCol > COLUMNS_NUM - 1) {
          continue;
        }
        if (examinedRow == curRowIndex && examinedCol == curColIndex)
          continue;
        if (grid[gridIndex][examinedRow][examinedCol].awareness !== 0)
          continue;
        availableDirections.push(translateDeltaToDirection(j, i));
      }
    }
    if (availableDirections.length == 0)
      return;
    let nextDirection;
    if (curCell.modifiers.breathers) {
      if (Math.random() < MIND_STATE_SETTINGS2[gridIndex].movementModifiersSettings.breathers.stop) {
        curCell.hasMoved = true;
        return;
      }
    }
    if (curCell.movementType == "homing") {
      nextDirection = homingMovement();
    } else {
      if (curCell.awareness !== 1) {
        nextDirection = determineForwardDirection();
      } else if (curCell.awareness == 1) {
        if (MIND_STATE_SETTINGS2[gridIndex].movementModifiersSettings.homing.enabled) {
          nextDirection = homingMovement();
        } else {
          nextDirection = determineForwardDirection();
        }
      }
    }
    function homingMovement() {
      let min = -2;
      let max = 3;
      let checkedCells = {};
      for (let i = min; i < max; i++) {
        if (!checkedCells[i])
          checkedCells[i] = {};
        for (let j = min; j < max; j++) {
          examinedRow = curRowIndex + i;
          examinedCol = curColIndex + j;
          if (checkedCells[i][j]) {
            continue;
          }
          checkedCells[i][j] = true;
          if (i == max - 1 && j == max - 1) {
            if (!isCellAvailable(examinedRow, examinedCol, curRowIndex, curColIndex)) {
              if (max !== MIND_STATE_SETTINGS2[gridIndex].movementModifiersSettings.homing.range + 1 && examinedRow !== ROWS_NUM - 1 && examinedCol !== COLUMNS_NUM - 1) {
                min--;
                max++;
                i = min - 1;
                j = min - 1;
                break;
              } else {
                return determineForwardDirection();
              }
            }
          } else {
            if (!isCellAvailable(examinedRow, examinedCol, curRowIndex, curColIndex))
              continue;
          }
          nextDirection = translateDeltaToDirection(j, i);
          if (!availableDirections.includes(nextDirection))
            return randomDirection();
          else
            return nextDirection;
        }
      }
      function isCellAvailable(examinedRow2, examinedCol2, curRowIndex2, curColIndex2) {
        if (examinedRow2 < 0 || examinedRow2 > ROWS_NUM - 1 || examinedCol2 < 0 || examinedCol2 > COLUMNS_NUM - 1) {
          return false;
        }
        if (examinedRow2 == curRowIndex2 && examinedCol2 == curColIndex2)
          return false;
        if (grid[gridIndex][examinedRow2][examinedCol2].awareness == 0)
          return false;
        if (grid[gridIndex][examinedRow2][examinedCol2].awareness == 1)
          return false;
        return true;
      }
      determineForwardDirection();
    }
    function determineForwardDirection() {
      if (curCell.curDirection) {
        let forward = curCell.curDirection;
        let left = curCell.curDirection - 1;
        let right = curCell.curDirection + 1;
        if (left < 1) {
          left = 8;
        } else if (left > 8) {
          left = 1;
        }
        if (right < 1) {
          right = 8;
        } else if (right > 8) {
          right = 1;
        }
        let forwardDirection = checkForward(forward);
        let sideDirection = checkSide(left, right);
        if (Math.random() < MIND_STATE_SETTINGS2[gridIndex].movementSettings[curCell.movementType].forward) {
          if (!forwardDirection) {
            if (!sideDirection) {
              return randomDirection();
            } else {
              return sideDirection;
            }
          } else {
            return forwardDirection;
          }
        } else {
          if (!sideDirection) {
            if (!forwardDirection) {
              return randomDirection();
            } else {
              return forwardDirection;
            }
          } else {
            return sideDirection;
          }
        }
      } else {
        return randomDirection();
      }
    }
    function checkForward(forward) {
      if (availableDirections.includes(forward)) {
        return forward;
      } else
        return false;
    }
    function checkSide(left, right) {
      if (Math.random() < MIND_STATE_SETTINGS2[gridIndex].movementSettings[curCell.movementType].left) {
        if (availableDirections.includes(left)) {
          return left;
        } else if (availableDirections.includes(right)) {
          return right;
        } else {
          return null;
        }
      } else {
        if (availableDirections.includes(right)) {
          return right;
        } else if (availableDirections.includes(left)) {
          return left;
        } else {
          return null;
        }
      }
    }
    function randomDirection() {
      const MAX = availableDirections.length;
      const MIN = 0;
      const ranNum = Math.floor(Math.random() * MAX);
      return availableDirections[ranNum];
    }
    const [deltaX, deltaY] = translateDirectionToDelta(nextDirection);
    const nextCellValues = grid[gridIndex][curRowIndex + deltaY][curColIndex + deltaX];
    grid[gridIndex][curRowIndex + deltaY][curColIndex + deltaX] = __spreadProps(__spreadValues({}, curCell), {
      curDirection: nextDirection,
      hasMoved: true,
      modifiers: __spreadValues({}, curCell.modifiers),
      x: nextCellValues.x,
      y: nextCellValues.y
    });
    curCell.awareness = 0;
    curCell.curDirection = 0;
    curCell.hasMoved = false;
    curCell.cyclesAlive = 0;
    curCell.modifiers = {
      breathers: MIND_STATE_SETTINGS2[gridIndex].defaultCell.modifiers.breathers
    };
    if (curCell.modulateSettingsChange) {
      if (grid[gridIndex][curRowIndex + deltaY][curColIndex + deltaX].modulateSettingsChange.isFormTwo) {
        grid[gridIndex][curRowIndex + deltaY][curColIndex + deltaX].modulateSettingsChange = __spreadProps(__spreadValues({}, grid[gridIndex][curRowIndex + deltaY][curColIndex + deltaX].modulateSettingsChange), {
          isFormTwo: true
        });
        curCell.modulateSettingsChange.isFormTwo = false;
      }
    }
    function translateDeltaToDirection(x, y) {
      let direction;
      if (x <= -1 && y <= -1)
        direction = 8;
      else if (x == 0 && y <= -1)
        direction = 1;
      else if (x >= 1 && y <= -1)
        direction = 2;
      else if (x <= -1 && y == 0)
        direction = 7;
      else if (x >= 1 && y == 0)
        direction = 3;
      else if (x <= -1 && y >= 1)
        direction = 6;
      else if (x == 0 && y >= 1)
        direction = 5;
      else if (x >= 1 && y >= 1)
        direction = 4;
      return direction;
    }
    function translateDirectionToDelta(direction) {
      let x, y;
      switch (direction) {
        case 1:
          x = 0;
          y = -1;
          break;
        case 2:
          x = 1;
          y = -1;
          break;
        case 3:
          x = 1;
          y = 0;
          break;
        case 4:
          x = 1;
          y = 1;
          break;
        case 5:
          x = 0;
          y = 1;
          break;
        case 6:
          x = -1;
          y = 1;
          break;
        case 7:
          x = -1;
          y = 0;
          break;
        case 8:
          x = -1;
          y = -1;
          break;
        default:
          console.log("something went wrong in direction switch");
      }
      return [x, y];
    }
  }
  function emotionCheck(curRowIndex, curColIndex, gridCopy) {
    const curCell = grid[gridIndex][curRowIndex][curColIndex];
    if (curCell.awareness == 0)
      return;
    modulateAwareness();
    if (curCell.awareness === 1 || curCell.awareness === 0 || curCell.hadFullAwareness) {
    } else {
      checkNeighbours();
    }
    function modulateAwareness() {
      curCell.cyclesAlive--;
      if (curCell.awareness !== 1 && curCell.growth) {
        if (curCell.cyclesAlive === curCell.growth[curCell.awareness].cycle) {
          if (Math.random() < curCell.growth[curCell.awareness].chance) {
            curCell.awareness += AWARENESS_INCREMENT;
            setCyclesSettings(curCell);
          }
        }
      }
      if (curCell.cyclesAlive <= 0) {
        curCell.awareness -= AWARENESS_INCREMENT;
        if (curCell.awareness !== 0) {
          setCyclesSettings(curCell);
        } else {
          resetCell(curCell);
          return;
        }
      }
    }
    function checkNeighbours() {
      let moreAwareNeighbours = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          examinedRow = curRowIndex + i;
          examinedCol = curColIndex + j;
          if (examinedRow == curRowIndex && examinedCol == curColIndex)
            continue;
          if (examinedRow < 0 || examinedRow > ROWS_NUM - 1 || examinedCol < 0 || examinedCol > COLUMNS_NUM - 1) {
            continue;
          }
          let examinedCell = gridCopy[examinedRow][examinedCol];
          if (examinedCell.awareness > grid[gridIndex][curRowIndex][curColIndex].awareness)
            moreAwareNeighbours++;
          if (examinedCell.awareness == 1) {
            if (MIND_STATE_SETTINGS2[gridIndex].movementModifiersSettings.homing.decrease) {
              let curLiveCell = grid[gridIndex][examinedRow][examinedCol];
              curLiveCell.awareness = 0.5;
              curLiveCell.cyclesAlive = curLiveCell.decay[0.5];
              if (curLiveCell.movementModifiersSettings)
                curLiveCell.cyclesAlive = curLiveCell.modulateSettingsChange.decay[0.5];
            }
          }
        }
      }
      if (moreAwareNeighbours > 0) {
        const increasedAwarenessAmount = moreAwareNeighbours * AWARENESS_INCREMENT;
        curCell.awareness += increasedAwarenessAmount;
        if (curCell.awareness >= 1)
          curCell.awareness = 1;
        setCyclesSettings(curCell);
      }
    }
  }
  function updateValues() {
    grid[gridIndex].forEach((row) => {
      row.forEach((cell) => {
        cell.hasMoved = false;
      });
    });
  }
  function addRandomEmotion() {
    attempts++;
    if (Math.random() < MIND_STATE_SETTINGS2[gridIndex].newEmotionSettings.newEmotionChance) {
      const randomRow = Math.floor(Math.random() * ROWS_NUM);
      const randomCol = Math.floor(Math.random() * COLUMNS_NUM);
      if (grid[gridIndex][randomRow][randomCol].awareness !== 0) {
        if (attempts > 10) {
          attempts = 0;
          return;
        }
        addRandomEmotion();
      } else {
        let curCell = grid[gridIndex][randomRow][randomCol];
        resetCell(curCell);
        let awarenessChance = MIND_STATE_SETTINGS2[gridIndex].newEmotionSettings.awarenessChance;
        let awarenessProbability = [];
        for (const awarenessAmount in awarenessChance) {
          awarenessProbability.push(Array(awarenessChance[awarenessAmount]).fill(awarenessAmount));
        }
        awarenessProbability = awarenessProbability.reduce((prevValue, curValue) => prevValue.concat(curValue));
        let selectedAwarenessAmount = awarenessProbability[Math.floor(Math.random() * awarenessProbability.length)] * 1;
        let selectedMovementType = MIND_STATE_SETTINGS2[gridIndex].defaultCell.movementType;
        if (selectedMovementType === "randomise") {
          let movementSettings = MIND_STATE_SETTINGS2[gridIndex].movementSettings;
          let movementProbability = [];
          for (const movementType in movementSettings) {
            movementProbability.push(Array(movementSettings[movementType].chance).fill(movementType));
          }
          movementProbability = movementProbability.reduce((prevValue, curValue) => prevValue.concat(curValue));
          selectedMovementType = movementProbability[Math.floor(Math.random() * movementProbability.length)];
        }
        curCell.movementType = selectedMovementType;
        if (Math.random() < MIND_STATE_SETTINGS2[gridIndex].movementModifiersSettings.breathers.chance) {
          grid[gridIndex][randomRow][randomCol].modifiers.breathers = true;
        }
        if (curCell.modulateSettingsChange) {
          if (Math.random() < curCell.modulateSettingsChange.chance)
            curCell.modulateSettingsChange.isFormTwo = true;
        }
        determineFill(selectedAwarenessAmount);
        ctx.fillRect(curCell.x, curCell.y, CELL_SIZE, CELL_SIZE);
        curCell.awareness = selectedAwarenessAmount;
        setCyclesSettings(curCell);
        attempts = 0;
        return;
      }
    }
  }
  function determineFill(value) {
    switch (value) {
      case 0:
        break;
      case 0.25:
        ctx.fillStyle = BLUE_200;
        break;
      case 0.5:
        ctx.fillStyle = BLUE_400;
        break;
      case 0.75:
        ctx.fillStyle = BLUE_600;
        break;
      case 1:
        ctx.fillStyle = BLUE_800;
        break;
      default:
        console.log("something went wrong in cell awareness switch", value);
    }
  }
  function setCyclesSettings(cell) {
    let decaySettings = __spreadValues({}, cell.decay);
    if (cell.modulateSettingsChange) {
      if (cell.modulateSettingsChange.isFormTwo)
        decaySettings = __spreadValues({}, cell.modulateSettingsChange.decay);
    }
    switch (cell.awareness) {
      case 0.25:
        cell.cyclesAlive = decaySettings[0.25];
        if (cell.hadFullAwareness) {
          if (Math.random() < decaySettings.recoverFromFull) {
            cell.hadFullAwareness = false;
          } else {
            cell.cyclesAlive = 1;
          }
        }
        break;
      case 0.5:
        cell.cyclesAlive = decaySettings[0.5];
        break;
      case 0.75:
        cell.cyclesAlive = decaySettings[0.75];
        break;
      case 1:
        cell.cyclesAlive = decaySettings[1];
        cell.hadFullAwareness = true;
        break;
      default:
        console.log("something went wrong in set cycles");
    }
  }
  function resetCell(cell) {
    ctx.strokeStyle = STROKE_COLOUR;
    ctx.clearRect(cell.x, cell.y, CELL_SIZE, CELL_SIZE);
    cell.awareness = 0;
    cell.curDirection = 0;
    cell.hadFullAwareness = false;
    cell.modifiers = __spreadValues({}, MIND_STATE_SETTINGS2[gridIndex].defaultCell.modifiers);
    if (cell.modulateSettingsChange)
      cell.modulateSettingsChange.isFormTwo = false;
  }
  function toggleGame() {
    if (!isStart) {
      isStart = true;
      gameInterval = setInterval(() => {
        stepGrid();
      }, tickRate);
    } else {
      isStart = false;
      clearInterval(gameInterval);
    }
  }
  document.getElementById("right").addEventListener("click", (e) => {
    changeText("right");
  });
  const textEl = document.getElementById("text");
  const TRANSITION_TIME = 250;
  let isTransitioning = false;
  function changeText() {
    if (isTransitioning)
      return;
    partIndex++;
    if (partIndex == 1) {
      canvas.classList.add("fadeOut");
      isTransitioning = true;
      setTimeout(() => {
        isTransitioning = false;
        textEl.innerHTML = text2[gridIndex].title;
        textEl.style.fontStyle = "italic";
        textEl.classList.remove("fadeOut");
      }, TRANSITION_TIME);
    }
    if (partIndex == 2) {
      textEl.classList.add("fadeOut");
      isTransitioning = true;
      setTimeout(() => {
        isTransitioning = false;
        textEl.innerHTML = text2[gridIndex].part[0];
        textEl.style.fontStyle = "normal";
        textEl.classList.remove("fadeOut");
      }, TRANSITION_TIME);
    }
    if (partIndex == 3) {
      textEl.classList.add("fadeOut");
      document.getElementById("right").classList.add("hide");
      isTransitioning = true;
      setTimeout(() => {
        isTransitioning = false;
        reset();
        gridIndex++;
        partIndex = 0;
        window.scrollTo(0, 0);
        startProgressBar();
        textEl.innerHTML = " ";
        canvas.classList.remove("fadeOut");
      }, TRANSITION_TIME);
    }
    if (gridIndex == text2.length - 1 && partIndex == 2) {
      document.getElementById("right").classList.add("hide");
    }
    function reset() {
      grid[gridIndex].forEach((row) => {
        row.forEach((cell) => {
          resetCell(cell);
        });
      });
      ctx.clearRect(0, 0, canvas.height, canvas.width);
    }
  }
  const progressBarEl = document.querySelector(".bar");
  function startProgressBar() {
    const INCREMENT = text2[gridIndex].waitTime / 100;
    let height = 0;
    const interval = setInterval(() => {
      height += 1;
      progressBarEl.style.height = `${height}%`;
      if (height >= 100) {
        clearInterval(interval);
        document.getElementById("right").classList.remove("hide");
      }
    }, INCREMENT);
  }
}
//# sourceMappingURL=bundle.js.map
