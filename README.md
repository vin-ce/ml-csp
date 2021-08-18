`grid` is an array that stores all of the grid patterns, which are themselves an array of arrays (representing the row with the columns nested within).

`initGrid` fills in the individual grids. The settings for the grids come from `cellSettings.js`, which has within it a `defaultCell` object which is used as a base template for the settings in the `MIND_STATE_SETTINGS` array. Each object in that array is a grid 'pattern' that represents a particular 'mood' or 'mind state'. Explanations for what each settings does is in the `cellSettingExplanations` array that is there for explanatory purposes.

`cellSettings.js` also contain the text for the poem, as well as the grid's 'mind state'.

Each individual cell contains all the settings in the `defaultCell`.

Once `initGrid` is completed, it creates the 'mind state' text as well as sets the first bit of poem text. The grid is then started with `toggleGame()`.

The `stepGrid()` function is what steps the grid through. 

First the position is stepped (position set depending on what kind of movement a cell has) via `stepPosition()`, then the attributes like decay, growth are set via `stepAttribute()`. `addRandomEmotion()` is what 'spawns' the cells. 

`stepPosition()` goes through eah cell and calls `moveCells()`, which is where the direction is decided and movement is executed.

In `moveCells()`, it first figures out what cells are available to be moved in, and the directions are stored in `availableDirections`. The next direction is then set depending on the `movementType` setting in each cell, which then draws on the `movementSettings` object in each cell for the specifics of how much (what % chance) to move forward, left or right. Some additional modifier settings exist like `homing` (tracks down the nearest cell and moves towards that) as well as `breathers`, which has some % chance to stop moving for that time step.

`stepAttribute()` has `emotionCheck()` and `drawCell()`. `drawCell()` sets the visuals for the cells and grid itself (applying appropriate fills etc). 

`emotionCheck()` maintains the `cyclesAlive` state. Each cell has a particular amount of cycles that it stays alive at its particular awareness level (0.25, 0.5, 0.75, 1). This is recorded in the `decay` object that's in each cell. The `growth` object has the cell awareness move upwards by 0.25 based on chance. The neighbours are then checked (`checkNeighbours()`) where each surrounding cell that has a higher awareness value increases the central cell's awareness up by `moreAwareNeighbours` * 0.25 (up to awareness 1).

`addRandomEmotion()` has a whole bunch of random chance things going on. Based on the grid's settings, it randomly sets the cell's awareness, the cell's movement type, if the cell randomly has a `breather` modifier, and also whether or not the cell has a 'second form' where that cell runs by totally different decay and growth settings.

Which particular grid is deployed on the website is kept track by the `gridIndex` state (all the way at the top of `main.js`).

---

the font: https://fonts.google.com/specimen/Cormorant+Upright?preview.text_type=custom&query=cormorant#standard-styles

---
