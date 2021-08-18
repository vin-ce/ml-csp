
const defaultCell = {
  awareness: 0, // 0.25, 0.5, 0.75, 1 

  // 0 is not moving, 1 is N, 2 is NE etc. 
  curDirection: 0,
  hasMoved: false, // prevents cell from moving again
  movementType: 'default',

  // keeps track of active modifiers
  modifiers: {
    breathers: false
  },


  // how many cycles alive in this current awareness
  // different mindstates might have quicker timeAlive cycles for high awareness emotions but takes a long while for the low awareness ones to go away, or the opposite, or emotions overall just cycle out quickly
  cyclesAlive: 0,

  // the below values are set in particular settings themselves
  // decay is what determines how much cyclesAlive should be
  // at each awareness increment
  // growth: {},
  // decay: {},


  // tracks if it has hit 1 awareness before
  // setCyclesSettings function is where I set when this gets turned on and off
  hadFullAwareness: false,

  x: null,
  y: null,
}

// this explains what all the cell settings are for
const cellSettingExplanations = {

  // randomly adds an emotion every once in a while
  newEmotionSettings: {
    newEmotionChance: 0.5,
    // right is chance, calculated by chance/total, e.g 
    // 0.25:7, 7/(7+1+1+1) = 0.7, or 70% chance 
    awarenessChance: {
      0.25: 50,
      0.5: 0,
      0.75: 0,
      1: 1,
    }
  },


  defaultCell: {
    ...defaultCell,

    // setting the below to 'randomise' will determine 
    // movement settings through the chance property in movementSettings
    // includes all of the movement types in movementSettings 
    // as well as 'randomise'
    movementType: 'default',

    // add active modifiers
    modifiers: {
      breathers: false
    },

    modulateSettingsChange: {
      // possibility that below will change to this second form
      chance: 0.1,

      // the below keeps track of if using the modulated settings
      // for this particular cell
      isFormTwo: false,

      decay: {
        '0.25': 5,
        '0.5': 5,
        '0.75': 5,
        '1': 5,
        'recoverFromFull': 0,
      },
      // growth settings remain default for now
    },

    // each cell potentially has its own growth/ decay rate
    // cycles alive for each awareness stage
    decay: {
      '0.25': 1000,
      '0.5': 2,
      '0.75': 2,
      '1': 5,
      // chance of being able to grow again after hadFullAwareness = true
      'recoverFromFull': 0,
    },

    // cycles for each cycle upwards
    // triggers when cyclesAlive = cycle (set below)
    growth: {
      '0.25': {
        cycle: 3,
        chance: 0.3
      },
      '0.5': {
        cycle: 3,
        chance: 0.5
      },
      '0.75': {
        cycle: 3,
        chance: 0.7
      },
    },

  },


  movementSettings: {
    default: {
      // chance of going these directions
      forward: 0.7, // left & right will have `1 - forward` chance
      left: 0.5, // right has `1 - left` chance

      // chances of spawning any particular cell type. 
      // Works in the same way as newEmotion awareness chance
      chance: 1,
    },
    left: {
      forward: 0.3,
      left: 0.9,
      chance: 1,
    },
    right: {
      forward: 0.3,
      left: 0.3,
      chance: 1,
    },
    beeline: {
      forward: 0.95,
      left: 0.5,
      chance: 1,
    },
    // only needed if movementType = 'homing'
    homing: {
      left: 0.5,
    }
  },

  movementModifiersSettings: {
    breathers: {
      // chance of having a breather modifier randomly added
      chance: 0.5,
      // chance movement stopped (e.g 50% time it stops moving)
      stop: 0.5,

    },

    homing: {
      enabled: true, // is homing active

      // determines if homing cell decreases awareness upon meeting another cell
      decrease: false,

      // how wide does a homing cell search for a target
      range: 5,
    }
  },
}


export const MIND_STATE_SETTINGS = [
  {
    // --------------------
    // GRID 1 (default)

    newEmotionSettings: {
      newEmotionChance: 0.1,
      awarenessChance: {
        0.25: 10,
        0.5: 1,
        0.75: 1,
        1: 1,
      }
    },

    defaultCell: {
      ...defaultCell,
      movementType: 'default',

      modifiers: {
        breathers: false
      },

      decay: {
        '0.25': 20,
        '0.5': 3,
        '0.75': 3,
        '1': 3,
        'recoverFromFull': 0.7,
      },

      growth: {
        '0.25': {
          cycle: 3,
          chance: 0.1
        },
        '0.5': {
          cycle: 2,
          chance: 0.1
        },
        '0.75': {
          cycle: 2,
          chance: 0.1
        },
      },
    },

    movementSettings: {
      default: {
        forward: 0.7,
        left: 0.5,
      },
      left: {
        forward: 0.3,
        left: 0.9,
      },
      right: {
        forward: 0.3,
        left: 0.3,
      },
      beeline: {
        forward: 0.95,
        left: 0.5,
      },
    },

    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.5,
      },

      homing: {
        enabled: true,
        decrease: true,
        range: 5,
      }
    },

  },
  {

    // --------------------
    // GRID 2 (overwhelm)

    newEmotionSettings: {
      newEmotionChance: 0.6,
      awarenessChance: {
        0.25: 4,
        0.5: 2,
        0.75: 1,
        1: 1,
      }
    },

    defaultCell: {
      ...defaultCell,
      movementType: 'randomise',

      modifiers: {
        breathers: false
      },

      decay: {
        '0.25': 5,
        '0.5': 3,
        '0.75': 3,
        '1': 3,
        'recoverFromFull': 0.5,
      },

      growth: {
        '0.25': {
          cycle: 2,
          chance: 0.8
        },
        '0.5': {
          cycle: 2,
          chance: 0.8
        },
        '0.75': {
          cycle: 2,
          chance: 0.7
        },
      },
    },

    movementSettings: {
      default: {
        forward: 0.7,
        left: 0.5,
        chance: 1,
      },
      left: {
        forward: 0.3,
        left: 0.9,
        chance: 1,
      },
      right: {
        forward: 0.3,
        left: 0.3,
        chance: 1,
      },
      beeline: {
        forward: 0.95,
        left: 0.5,
        chance: 1,
      },
    },

    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.5,
      },

      homing: {
        enabled: false,
        decrease: true,
        range: 5,
      }
    },

  },
  {


    // --------------------
    // GRID 3 (rumminating)

    newEmotionSettings: {
      newEmotionChance: 0.02,
      awarenessChance: {
        0.25: 10,
        0.5: 1,
        0.75: 1,
        1: 1,
      }
    },

    defaultCell: {
      ...defaultCell,
      movementType: 'randomise',

      decay: {
        '0.25': 50,
        '0.5': 10,
        '0.75': 10,
        '1': 5,
        'recoverFromFull': 0.5,
      },

      growth: {
        '0.25': {
          cycle: 1,
          chance: 0.5
        },
        '0.5': {
          cycle: 1,
          chance: 0.4
        },
        '0.75': {
          cycle: 1,
          chance: 0.5
        },
      },
    },

    movementSettings: {
      left: {
        forward: 0.1,
        left: 0.9,
        chance: 1,
      },
      right: {
        forward: 0.1,
        left: 0.1,
        chance: 1,
      },
    },

    movementModifiersSettings: {
      breathers: {
        chance: 0,
      },

      homing: {
        enabled: false,
      }
    },



  },

  {
    // --------------------
    // GRID 4 (clenched, suppressed, simmering (anger))

    newEmotionSettings: {
      newEmotionChance: 0.5,
      awarenessChance: {
        0.25: 1,
        0.5: 1,
        0.75: 1,
        1: 1,
      }
    },

    defaultCell: {
      ...defaultCell,
      movementType: 'default',

      modifiers: {
        breathers: true
      },

      decay: {
        '0.25': 5,
        '0.5': 5,
        '0.75': 5,
        '1': 7,
        'recoverFromFull': 0.5,
      },

      growth: {
        '0.25': {
          cycle: 3,
          chance: 0.5
        },
        '0.5': {
          cycle: 2,
          chance: 0.6
        },
        '0.75': {
          cycle: 2,
          chance: 0.7
        },
      },
    },

    movementSettings: {
      default: {
        forward: 0.7,
        left: 0.5,
      },
      left: {
        forward: 0.3,
        left: 0.9,
      },
      right: {
        forward: 0.3,
        left: 0.3,
      },
      beeline: {
        forward: 0.95,
        left: 0.5,
      },
    },

    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.95,
      },

      homing: {
        enabled: true,
        decrease: false,
        range: 5,
      }
    },

  },
  {
    // --------------------
    // GRID 5 (volatile)

    newEmotionSettings: {
      newEmotionChance: 0.5,
      awarenessChance: {
        0.25: 50,
        0.5: 0,
        0.75: 0,
        1: 1,
      }
    },


    defaultCell: {
      ...defaultCell,

      movementType: 'default',

      modifiers: {
        breathers: false
      },

      decay: {
        '0.25': 1000,
        '0.5': 2,
        '0.75': 2,
        '1': 5,
        'recoverFromFull': 0,
      },
    },

    movementSettings: {
      default: {
        forward: 0.7,
        left: 0.5,
      },
      left: {
        forward: 0.3,
        left: 0.9,
      },
      right: {
        forward: 0.3,
        left: 0.3,
      },
      beeline: {
        forward: 0.95,
        left: 0.5,
      },

    },

    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.5,
      },

      homing: {
        enabled: true,
        decrease: false,
        range: 5,
      }
    },



  },
  {
    // --------------------
    // GRID 6 (anxiety)

    newEmotionSettings: {
      newEmotionChance: 1,
      awarenessChance: {
        0.25: 1,
        0.5: 1,
        0.75: 1,
        1: 1,
      }
    },

    defaultCell: {
      ...defaultCell,
      movementType: 'homing',

      modifiers: {
        breathers: false
      },

      decay: {
        '0.25': 5,
        '0.5': 5,
        '0.75': 5,
        '1': 5,
        'recoverFromFull': 0.25,
      },
    },

    movementSettings: {
      homing: {
        left: 0.5,
      }
    },

    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.5,
      },

      homing: {
        enabled: true,
        decrease: false,
        range: 5,
      }
    },

  },
  {
    // --------------------
    // GRID 7  (stilted)

    newEmotionSettings: {
      newEmotionChance: 0.1,
      awarenessChance: {
        0.25: 1,
        0.5: 1,
        0.75: 1,
        1: 1,
      }
    },

    defaultCell: {
      ...defaultCell,
      movementType: 'beeline',

      modifiers: {
        breathers: true
      },

      decay: {
        '0.25': 100,
        '0.5': 50,
        '0.75': 30,
        '1': 20,
        'recoverFromFull': 0,
      },

    },

    movementSettings: {
      default: {
        forward: 0.7,
        left: 0.5,
      },
      left: {
        forward: 0.3,
        left: 0.9,
      },
      right: {
        forward: 0.3,
        left: 0.3,
      },
      beeline: {
        forward: 0.95,
        left: 0.5,
      },
    },

    movementModifiersSettings: {
      breathers: {
        chance: 0,
        stop: 0.99,
      },

      homing: {
        enabled: true,
        decrease: false,
        range: 5,
      }
    },

  },
  {

    // --------------------
    // GRID 8 (mindful)

    newEmotionSettings: {
      newEmotionChance: 0.1,
      awarenessChance: {
        0.25: 1,
        0.5: 1,
        0.75: 1,
        1: 1,
      }
    },

    defaultCell: {
      ...defaultCell,
      movementType: 'randomise',

      modulateSettingsChange: {
        chance: 0.1,
        isFormTwo: false,
        decay: {
          '0.25': 40,
          '0.5': 30,
          '0.75': 20,
          '1': 10,
          'recoverFromFull': 0,
        },
      },

      decay: {
        '0.25': 3,
        '0.5': 2,
        '0.75': 2,
        '1': 1,
        'recoverFromFull': 0,
      },

      growth: {
        '0.25': {
          cycle: 5,
          chance: 0.5
        },
        '0.5': {
          cycle: 5,
          chance: 0.3
        },
        '0.75': {
          cycle: 5,
          chance: 0.2
        },
      },
    },

    movementSettings: {
      default: {
        forward: 0.75,
        left: 0.5,
      },
      left: {
        forward: 0.05,
        left: 0.9,
      },
      right: {
        forward: 0.2,
        left: 0.2,
      },
      beeline: {
        forward: 0.95,
        left: 0.5,
      },
    },

    movementModifiersSettings: {
      breathers: {
        chance: 0,
      },
      homing: {
        enabled: false,
      }
    },



  },
  // {
  //   // --------------------
  //   // GRID TEMPLATE

  //   newEmotionSettings: {
  //     newEmotionChance: 0.5,
  //     awarenessChance: {
  //       0.25: 50,
  //       0.5: 0,
  //       0.75: 0,
  //       1: 1,
  //     }
  //   },

  //   defaultCell: {
  //     ...defaultCell,
  //     movementType: 'default',

  //     modifiers: {
  //       breathers: false
  //     },

  //     modulateSettingsChange: {
  //       chance: 0.1,
  //       isFormTwo: false,
  //       decay: {
  //         '0.25': 5,
  //         '0.5': 5,
  //         '0.75': 5,
  //         '1': 5,
  //         'recoverFromFull': 0,
  //       },
  //     },

  //     decay: {
  //       '0.25': 1000,
  //       '0.5': 2,
  //       '0.75': 2,
  //       '1': 5,
  //       'recoverFromFull': 0,
  //     },

  //     growth: {
  //       '0.25': {
  //         cycle: 3,
  //         chance: 0.1
  //       },
  //       '0.5': {
  //         cycle: 2,
  //         chance: 0.1
  //       },
  //       '0.75': {
  //         cycle: 2,
  //         chance: 0.1
  //       },
  //     },
  //   },

  //   movementSettings: {
  //     default: {
  //       forward: 0.7,
  //       left: 0.5,
  //       // chance: 1,
  //     },
  //     left: {
  //       forward: 0.3,
  //       left: 0.9,
  //       // chance: 1,
  //     },
  //     right: {
  //       forward: 0.3,
  //       left: 0.3,
  //       // chance: 1,
  //     },
  //     beeline: {
  //       forward: 0.95,
  //       left: 0.5,
  //       // chance: 1,
  //     },
  //   },

  //   movementModifiersSettings: {
  //     breathers: {
  //       chance: 0,
  //       stop: 0.5,
  //     },

  //     homing: {
  //       enabled: true,
  //       decrease: false,
  //       range: 5,
  //     }
  //   },

  // },
]

export const text = [
  {
    title: `mind state`,
    part: [
      `I think you're underestimating <br/> 
      how deeply in love you can fall in <br/> 
      with the world`,
    ],
    waitTime: 2000
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
      `,
    ],
    waitTime: 5000
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
    waitTime: 10000
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
      <br/><br/><br/><br/><br/>`,
    ],
    waitTime: 5000
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
      <br/><br/><br/><br/><br/>`,
    ],
    waitTime: 10000
  },
  {
    title: `anxious`,
    part: [
      `so many sunsets yet<br/>
      to be felt,<br/>
      profoundly`,
    ],
    waitTime: 5000
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
    waitTime: 5000
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
    waitTime: 5000
  },
]