const luaMessage = `
**Enter a command to get defination of \`JavaScript\` function and example**.
Heres a list:
\`-touchDown\`
\`-touchMove\`
\`-touchUp\`
\`-keyDown\`
\`-keyUp\`
\`-getColor\`
\`-findColor\`
\`-findImage\`
\`-screenshot\`
\`-appRun\`
\`-appKill\`
\`-appState\`
\`-rootDir\`
\`-usleep\`
\`-log\`
\`-alert\`
\`-toast\`
\`-vibrate\`
\`-playAudio\`
\`-stopAudio\`
\`-getDeviceOrientation\`
\`-getScreenInfo\`
\`-getSN\`
\`-getVersion\`
\`-frontMostAppId\`
\`-frontMostAppOrientation\`
\`-intToRgb\`
\`-copyText\`
\`-clipText\`
\`-inputText\`
\`-clearDialogValues\`
\`-openURL\`
\`-setAutoLaunch\`
\`-listAutoLaunch\`
`

const apis = {
    touchdown: `
\`touchDown(id, x, y)\`

Press the coordinate (x,y) on the screen.

\`Examples(JavaScript):\`
\`\`\`js
// import
const { touchDown, touchMove, touchUp, usleep } = at

// Click the screen once by one finger at coordinate (100,200).
touchDown(0, 100, 200)
usleep(16000)
touchUp(0, 100, 200)

// Press by three fingers at three locations on the screen.
touchDown(0, 100, 200)
touchDown(1, 200, 300)
touchDown(2, 300, 400)

// Press by three fingers at three locations on the screen, move to new location, and then lift the finger.
touchDown(0, 100, 200)
touchDown(1, 200, 300)
touchDown(2, 300, 400)
usleep(16000)
touchMove(0, 150, 250)
touchMove(1, 250, 350)
touchMove(2, 350, 450)
usleep(16000)
touchUp(0, 150, 250)
touchUp(1, 250, 350)
touchUp(2, 350, 450)

// Implement a tap function
function tap(x, y) {
    touchDown(0, x, y)
    usleep(16000)
    touchUp(0, x, y)
}

// Tap at (100, 200)
tap(100, 200)
\`\`\`
`,
    touchmove: `
\`touchMove(id, x, y)\`

Move the finger to coordinate (x,y).

\`Examples(JavaScript):\`
\`\`\`js
// import
const { touchDown, touchMove, touchUp, usleep } = at

// Click the screen once by one finger at coordinate (100,200).
touchDown(0, 100, 200)
usleep(16000)
touchUp(0, 100, 200)

// Press by three fingers at three locations on the screen.
touchDown(0, 100, 200)
touchDown(1, 200, 300)
touchDown(2, 300, 400)

// Press by three fingers at three locations on the screen, move to new location, and then lift the finger.
touchDown(0, 100, 200)
touchDown(1, 200, 300)
touchDown(2, 300, 400)
usleep(16000)
touchMove(0, 150, 250)
touchMove(1, 250, 350)
touchMove(2, 350, 450)
usleep(16000)
touchUp(0, 150, 250)
touchUp(1, 250, 350)
touchUp(2, 350, 450)

// Implement a tap function
function tap(x, y) {
    touchDown(0, x, y)
    usleep(16000)
    touchUp(0, x, y)
}

// Tap at (100, 200)
tap(100, 200)
\`\`\`
`,
    touchup: `
\`touchUp(id, x, y)\`

Lift the finger from coordinate (x,y)

\`Examples(JavaScript):\`
\`\`\`js
// import
const { touchDown, touchMove, touchUp, usleep } = at

// Click the screen once by one finger at coordinate (100,200).
touchDown(0, 100, 200)
usleep(16000)
touchUp(0, 100, 200)

// Press by three fingers at three locations on the screen.
touchDown(0, 100, 200)
touchDown(1, 200, 300)
touchDown(2, 300, 400)

// Press by three fingers at three locations on the screen, move to new location, and then lift the finger.
touchDown(0, 100, 200)
touchDown(1, 200, 300)
touchDown(2, 300, 400)
usleep(16000)
touchMove(0, 150, 250)
touchMove(1, 250, 350)
touchMove(2, 350, 450)
usleep(16000)
touchUp(0, 150, 250)
touchUp(1, 250, 350)
touchUp(2, 350, 450)

// Implement a tap function
function tap(x, y) {
    touchDown(0, x, y)
    usleep(16000)
    touchUp(0, x, y)
}

// Tap at (100, 200)
tap(100, 200)
\`\`\`
`,
    usleep: `
\`usleep(microseconds)\`

Sleep several microseconds (1/1000000 second)

\`Examples(JavaScript):\`
\`\`\`js
// Sleep 1 second.
at.usleep(1000000)

// OR import first
const { usleep } = at
usleep(1000000)
\`\`\`
`,
    keydown: `
\`keyDown(keyType)\`

Simulate the pressing of physical key.

\`Examples(JavaScript):\`
\`\`\`js
const { keyDown, keyUp, usleep, getScreeninfo } = at;

// Simulate the pressing of Home Key.
keyDown(KEY_TYPE.HOME_BUTTON)

// How to simulate a key pressing?
function keyPress(keyType) {
    keyDown(keyType)
    usleep(10000)
    keyUp(keyType)
}

keyPress(KEY_TYPE.HOME_BUTTON)

// How to simulate a screen lock function?
function lockScreen() {
    keyDown(KEY_TYPE.POWER_BUTTON)
    keyUp(KEY_TYPE.POWER_BUTTON)
}

// How to simulate a screen unlock function?
function unlockScreen() {
    keyDown(KEY_TYPE.POWER_BUTTON)
    keyUp(KEY_TYPE.POWER_BUTTON)

    usleep(1000000)

    // deconstruct result of getScreeninfo
    const { width, height } = getScreeninfo()

    let x = 10;
    const gap = 120;
    touchDown(0, x, 200)
    while(x < width) {
        x = x + gap;
        usleep(16000)
        touchMove(0, x, 200)
    }
    touchUp(0, x, 200)
}
\`\`\`
`,
    keyup: `
\`keyUp(keyType)\`

Simulate the lifting of physical key.

\`Examples(JavaScript):\`
\`\`\`js
const { keyDown, keyUp, usleep, getScreeninfo } = at;

// Simulate the pressing of Home Key.
keyDown(KEY_TYPE.HOME_BUTTON)

// How to simulate a key pressing?
function keyPress(keyType) {
    keyDown(keyType)
    usleep(10000)
    keyUp(keyType)
}

keyPress(KEY_TYPE.HOME_BUTTON)

// How to simulate a screen lock function?
function lockScreen() {
    keyDown(KEY_TYPE.POWER_BUTTON)
    keyUp(KEY_TYPE.POWER_BUTTON)
}

// How to simulate a screen unlock function?
function unlockScreen() {
    keyDown(KEY_TYPE.POWER_BUTTON)
    keyUp(KEY_TYPE.POWER_BUTTON)

    usleep(1000000)

    // deconstruct result of getScreeninfo
    const { width, height } = getScreeninfo()

    let x = 10;
    const gap = 120;
    touchDown(0, x, 200)
    while(x < width) {
        x = x + gap;
        usleep(16000)
        touchMove(0, x, 200)
    }
    touchUp(0, x, 200)
}
\`\`\`
`,
    getcolor: `
\`getColor(x, y)\`

Get the color value of the pixel point of the specified coordinate on current screen.

\`Examples(JavaScript):\`
\`\`\`js
const { getColor, getColor, usleep } = at

//---------------------------------------------------
const [result, error] = getColor(100, 200)
if (error) {
    alert('Failed to get color, error: %s', error)
} else {
    alert('Got result by getColor', result)
}

//---------------------------------------------------
// or ignore the error
const [color] = getColor(100, 200)
alert('Got color \$\{color\} at point 100, 200')

//---------------------------------------------------
// Keep getting color of a location until it matches a specify color
let color;
while (color != 123456) {
    const [c, error] = getColor(100, 200)
    if (error) {
        console.log('Failed to getColor, error: %s', error)
    }
    color = c
    usleep(50000) // Wait a while
}
// Go on to do next

//---------------------------------------------------
// gete colors of several points
// getColors([{x: x1, y: y1}, {x: x2, y: y2}, ...])
const [result, error] = getColors([
    {x: 100, y: 100},
    {x: 200, y: 200},
    {x: 300, y: 300},
    {x: 400, y: 400},
])
if (error) {
    alert('Failed to get colors, error: %s', error)
} else {
    // print the result by looping
    result.forEach(item => console.log(\`Got color: \$\{item\}\`))
    // alert the result
    alert('getColors result1:', result1)
}
\`\`\`
`,
    findcolor: `
\`findColor\`

Search the coordinates of the pixel points matching the specified color on current screen.

\`Examples(JavaScript):\`
\`\`\`js
//---------------------------------------------------
// find a specified color synchronously from the screen, 
// synchronous means it will block here until it returns
const [result, error] = at.findColor({ color: 0xFFFFFF, count: 3 })
if (error) {
    alert('Failed to find colors, error: %s', error)
} else {
    result.forEach(item => console.log('>>>>>>> found color 0xFFFFFF at: %j', item))
    alert('Got result of findColors: ', result)
}

//---------------------------------------------------
// options for findColors
const options = {
    colors: [ // REQUIRED, colors and their relative positions
        { color: 16661296, x: 0, y: 0 },
        { color: 1751033, x: -53, y: 67 },
    ],
    count: 3, // OPTIONAL, default is 0, 0 means no limitation
    region: null, // OPTIONAL, default is null, null means the whole screen
    debug: true, // OPTIONAL, default is false, true means turn on the debug mode which will produce an image showing the finding process
    rightToLeft: false, // OPTIONAL, default is false, true means do the finding from right to left of the screen
    bottomToTop: false // OPTIONAL, default is false, true means do the finding from bottom to top of the screen
}

//------------------------------------------------
/**
 * METHOD 1: keep doing findColors continually for specified times or specified long time or till a specified time
 * at.findColors(params)
 * @param {object} params - object of params
 */
at.findColors({
    options, // OPTIONAL, options for finding colors.
    duration: 10, // OPTIONAL, how long time you want it to keep finding? Three formats are supported: 1. \`duration: 10\` means repeat finding 10 times, the value must be a number, can't be a string; 2. \`duration: '60s'\` means keep finding for 60 seconds, the value must be seconds + a character 's'; 3. \`duration: '2020-05-30 12:00:00'\` means keep finding till 2020-05-30 12:00:00. Default is \`duration: 10\` means repeat 10 times, the value must be a string.
    interval: 1000, // OPTIONAL, interval between loops in milliseconds, default is 1000 milliseconds.
    exitIfFound: true, // OPTIONAL, if exit findColors if got a result successfully, default is true.
    eachFindingCallback: () => { // OPTIONAL, will call this function after each finding loop.
        console.log(\`------Did a time of findColors at \$\{new Date().toLocaleString()\}-------\`)
    },
    foundCallback: result => { // OPTIONAL, will call this function while getting matched result, returns the rectangle coordinate matching the action you specified through \`matchMethod\`.
        console.log(\`Got result of findColors:\n\$\{JSON.stringify(result, null, '    ')\}\`)
    },
    errorCallback: error => { // OPTIONAL, handle any error, will exit findColors if got error, if no errorCallback provide, it will alert while getting error.
        alert(error)
    },
    completedCallback: () => { // OPTIONAL, callback when all finding completed
        console.log('findColors compeleted!')
    },
    block: false, // OPTIONAL, you want to run findColors asynchronously or synchronously, block=true means it will run synchronously and block here till completed, default is false, doesn't block here.
})

//------------------------------------------------
/**
 * METHOD 2: do findColors a single time synchronously
 * at.findColors(options)
 * @param {object} options - find image options
 * @returns {array} - array of [result, error]
 */
const [result, error] = at.findColors(options)
if (error) {
    alert('Failed to find colors, error: %s', error)
} else {
    console.log('Got result by findColors synchronously', result);
}

//------------------------------------------------
/**
 * METHOD 3: do findColors a single time asynchronously
 * at.findColors(options, callback)
 * @param {object} options - find image options
 * @param {function} callback - callback function for handling the result or error
 */
at.findColors(options, (result, error) => {
    if (error) {
        alert('Failed to find colors, error: %s', error)
        return
    }
    console.log('Got result by findColors asynchronously', result);
})
\`\`\`
`,
    findcolors: `
\`findColors(colors, count, region, debug)\`

Search all rectangular areas matching “specified color and their corresponding location and return the coordinate of the pixel point matching the first color in the rectangular area. This function has the search efficiency and availability far beyond findImage. For example, you need not match the whole key picture, but only match the anchors’ color and their corresponding location on the key. You can specify the number of the results by count parameter. 0 refers to all, 1 refers to the first one, and 2 refers to the first tow. region parameter can specify the search area, which is the table type {x,y,width, height}. You only input nil if no data is specified. 
This function can use the "HELPER" tool in the “Extension Function” of the script-editing interface to select the anchors’ colors from the screenshot and get their corresponding location to the function’s parameter automatically.
The coordinate of the pixel point pointed by the arrow is the coordinate of the return value.

\`Examples(JavaScript):\`
\`\`\`js
//---------------------------------------------------
// find a specified color synchronously from the screen, 
// synchronous means it will block here until it returns
const [result, error] = at.findColor({ color: 0xFFFFFF, count: 3 })
if (error) {
    alert('Failed to find colors, error: %s', error)
} else {
    result.forEach(item => console.log('>>>>>>> found color 0xFFFFFF at: %j', item))
    alert('Got result of findColors: ', result)
}

//---------------------------------------------------
// options for findColors
const options = {
    colors: [ // REQUIRED, colors and their relative positions
        { color: 16661296, x: 0, y: 0 },
        { color: 1751033, x: -53, y: 67 },
    ],
    count: 3, // OPTIONAL, default is 0, 0 means no limitation
    region: null, // OPTIONAL, default is null, null means the whole screen
    debug: true, // OPTIONAL, default is false, true means turn on the debug mode which will produce an image showing the finding process
    rightToLeft: false, // OPTIONAL, default is false, true means do the finding from right to left of the screen
    bottomToTop: false // OPTIONAL, default is false, true means do the finding from bottom to top of the screen
}

//------------------------------------------------
/**
 * METHOD 1: keep doing findColors continually for specified times or specified long time or till a specified time
 * at.findColors(params)
 * @param {object} params - object of params
 */
at.findColors({
    options, // OPTIONAL, options for finding colors.
    duration: 10, // OPTIONAL, how long time you want it to keep finding? Three formats are supported: 1. \`duration: 10\` means repeat finding 10 times, the value must be a number, can't be a string; 2. \`duration: '60s'\` means keep finding for 60 seconds, the value must be seconds + a character 's'; 3. \`duration: '2020-05-30 12:00:00'\` means keep finding till 2020-05-30 12:00:00. Default is \`duration: 10\` means repeat 10 times, the value must be a string.
    interval: 1000, // OPTIONAL, interval between loops in milliseconds, default is 1000 milliseconds.
    exitIfFound: true, // OPTIONAL, if exit findColors if got a result successfully, default is true.
    eachFindingCallback: () => { // OPTIONAL, will call this function after each finding loop.
        console.log(\`------Did a time of findColors at \$\{new Date().toLocaleString()\}-------\`)
    },
    foundCallback: result => { // OPTIONAL, will call this function while getting matched result, returns the rectangle coordinate matching the action you specified through \`matchMethod\`.
        console.log(\`Got result of findColors:\n\$\{JSON.stringify(result, null, '    ')\}\`)
    },
    errorCallback: error => { // OPTIONAL, handle any error, will exit findColors if got error, if no errorCallback provide, it will alert while getting error.
        alert(error)
    },
    completedCallback: () => { // OPTIONAL, callback when all finding completed
        console.log('findColors compeleted!')
    },
    block: false, // OPTIONAL, you want to run findColors asynchronously or synchronously, block=true means it will run synchronously and block here till completed, default is false, doesn't block here.
})

//------------------------------------------------
/**
 * METHOD 2: do findColors a single time synchronously
 * at.findColors(options)
 * @param {object} options - find image options
 * @returns {array} - array of [result, error]
 */
const [result, error] = at.findColors(options)
if (error) {
    alert('Failed to find colors, error: %s', error)
} else {
    console.log('Got result by findColors synchronously', result);
}

//------------------------------------------------
/**
 * METHOD 3: do findColors a single time asynchronously
 * at.findColors(options, callback)
 * @param {object} options - find image options
 * @param {function} callback - callback function for handling the result or error
 */
at.findColors(options, (result, error) => {
    if (error) {
        alert('Failed to find colors, error: %s', error)
        return
    }
    console.log('Got result by findColors asynchronously', result);
})
\`\`\`
`,
    findimage: `
\`findImage(targetImagePath, count, threshold, region, debug, method)\`

Search areas matching the specified image on current screen and return the center coordinates. It supports any format of target images. It also provides a debug mode which will produce an image marked the matching areas.

\`Examples(JavaScript):\`
\`\`\`js
const targetImagePath = 'images/test_finding_image.png'

const region = {
    x: 20,
    y: 50,
    width: 200,
    height: 300
}

// Capture specified area from the current screen
at.screenshot(targetImagePath, region)

// Prepare parameters
const options = {
    targetImagePath: targetImagePath,
    count: 3, // OPTIONAL, default is 0, 0 means no limitation
    threshold: 0.9, // OPTIONAL, default is 0.9
    region: null, // OPTIONAL, default is null, null means the whole screen
    debug: true, // OPTIONAL, default is false, true means turn on the debug mode which will produce an image showing the finding process
    method: 1, // OPTIONAL, default is 1, 2 means a more intelligent method
}

//------------------------------------------------
/**
 * METHOD 1: keep doing findImage continually for specified times or specified long time or till a specified time
 * at.findImage(params)
 * @param {object} params - object of params
 */
at.findImage({
    options, // OPTIONAL, options for finding image.
    duration: 10, // OPTIONAL, how long time you want it to keep finding? Three formats are supported: 1. \`duration: 10\` means repeat finding 10 times, the value must be a number, can't be a string; 2. \`duration: '60s'\` means keep finding for 60 seconds, the value must be seconds + a character 's'; 3. \`duration: '2020-05-30 12:00:00'\` means keep finding till 2020-05-30 12:00:00. Default is \`duration: 10\` means repeat 10 times, the value must be a string.
    interval: 1000, // OPTIONAL, interval between loops in milliseconds, default is 1000 milliseconds.
    exitIfFound: true, // OPTIONAL, if exit findImage if got a result successfully, default is true.
    eachFindingCallback: () => { // OPTIONAL, will call this function after each finding loop.
        console.log(\`------Did a time of findImage at \$\{new Date().toLocaleString()\}-------\`)
    },
    foundCallback: result => { // OPTIONAL, will call this function while getting matched result, returns the rectangle coordinate matching the action you specified through \`matchMethod\`.
        console.log(\`Got result of findImage:\n\$\{JSON.stringify(result, null, '    ')\}\`)
    },
    errorCallback: error => { // OPTIONAL, handle any error, will exit findImage if got error, if no errorCallback provide, it will alert while getting error.
        alert(error)
    },
    completedCallback: () => { // OPTIONAL, callback when all finding completed
        console.log('findImage compeleted!')
    },
    block: false, // OPTIONAL, you want to run findImage asynchronously or synchronously, block=true means it will run synchronously and block here till completed, default is false, doesn't block here.
})

//------------------------------------------------
/**
 * METHOD 2: do findImage a single time synchronously
 * at.findImage(options)
 * @param {object} options - find image options
 * @returns {array} - array of [result, error]
 */
const [result, error] = at.findImage(options)
if (error) {
    alert('Failed to findImage, error: %s', error)
} else {
    console.log('Got result by findImage synchronously', result);
}

//------------------------------------------------
/**
 * METHOD 3: do findImage a single time asynchronously
 * at.findImage(options, callback)
 * @param {object} options - find image options
 * @param {function} callback - callback function for handling the result or error
 */
at.findImage(options, (result, error) => {
    if (error) {
        alert('Failed to findImage, error: %s', error)
        return
    }
    console.log('Got result by findImage asynchronously', result);
})

//------------------------------------------------
\`\`\`
`,
    screenshot: `
\`screenshot(filePath, region)\`

Take a screenshot for the whole screen or specified area.
It will save the screenshot image as an PNG into "AutoTouch" album of iOS Photo Library if the filePath parameter is nill, and will save the PNG to the speficied path if filePath is not nil.
If region parameter is nil, it will take shot of the whole screen.
By Clicking "+" button at top-right of AutoTouch view, then "Copy Image Here", you are able to copy an image from iOS Photo Library to AutoTouch scripts directory.

\`Examples(JavaScript):\`
\`\`\`js
// import screenshot function from module at
const { screenshot } = at

// Take screenshot without parameters.
// Without parameter \`savePath\`, it will save the image to your iOS Album
screenshot()
// or
at.screenshot()

// Specify savePath parameter to take scsreenshot. 
// If the savePath doesn't start with character '/', means it's a relative path, the image will be saved to the relative path of current script
// If the savePath starts with character '/', means it's a absolute path, the image will be saved to the absolute path
screenshot(\`images/\$\{new Date().toISOString()}.png\`)

// Specify savePath and region, region means the rect area of the screen you want to capture screenshot
screenshot(\`images/\$\{new Date().toISOString()}.png\`, { x: 0, y: 0, width: 100, height: 200 })

// Prepare parameters before using
const savePath = \`images/\$\{new Date().toISOString()}.png\`
const region = { x: 0, y: 0, width: 300, height: 500 }
screenshot(savePath, region)
\`\`\`
`,
    apprun: `
\`appRun(appIdentifier)\`

Run specified application.

\`Example:\`
\`\`\`js
const { appRun, appKill, appState, appInfo } = at

//---------------------------------------------------
// Run Safari
appRun("com.apple.mobilesafari")

//---------------------------------------------------
// Kill the running Safari
appKill("com.apple.mobilesafari")

//---------------------------------------------------
// Get the state of Safari.
const state = appState("com.apple.mobilesafari")
alert(\`State of Safari is: \$\{state\}\`)
// Pop up the state of Safari: "ACTIVATED"

//---------------------------------------------------
const result = appInfo("com.microsoft.Office.Outlook")
alert('Informations of Outlook are: %j', result)
\`\`\`
`,
    appkill: `
\`appKill(appIdentifier)\`

Kill specified application.

\`Example:\`
\`\`\`js
const { appRun, appKill, appState, appInfo } = at

//---------------------------------------------------
// Run Safari
appRun("com.apple.mobilesafari")

//---------------------------------------------------
// Kill the running Safari
appKill("com.apple.mobilesafari")

//---------------------------------------------------
// Get the state of Safari.
const state = appState("com.apple.mobilesafari")
alert(\`State of Safari is: \$\{state\}\`)
// Pop up the state of Safari: "ACTIVATED"

//---------------------------------------------------
const result = appInfo("com.microsoft.Office.Outlook")
alert('Informations of Outlook are: %j', result)
\`\`\`
`,
    appstate: `
\`appState(appIdentifier)\`

Get the running state of the specified application

\`Examples(JavaScript):\`
\`\`\`js
const { appRun, appKill, appState, appInfo } = at

//---------------------------------------------------
// Run Safari
appRun("com.apple.mobilesafari")

//---------------------------------------------------
// Kill the running Safari
appKill("com.apple.mobilesafari")

//---------------------------------------------------
// Get the state of Safari.
const state = appState("com.apple.mobilesafari")
alert(\`State of Safari is: \$\{state\}\`)
// Pop up the state of Safari: "ACTIVATED"

//---------------------------------------------------
const result = appInfo("com.microsoft.Office.Outlook")
alert('Informations of Outlook are: %j', result)
\`\`\`
`,
    rootdir: `
\`rootDir()\`

Get the default directory address of the saved script. This is the default saving address of scripts and screenshots: "/var/mobile/Library/AutoTouch/Scripts/".

\`Examples(JavaScript):\`
\`\`\`js
const dirPath = rootDir();
alert(dirPath);
-- Popup "/var/mobile/Library/AutoTouch/Scripts/"
\`\`\`
`,
    log: `
\`console.log\`

Record log, can be seen in the log interface.

\`Examples(JavaScript):\`
\`\`\`js
console.log('What a funny one!')

// 
const something = {
    color: 0xd6e8s9,
    point: {
        x: 100,
        y: 100
    },
    appName: 'IDK'
}
// How to format a string with parameters?
// %s means a String
// %d means a Number
// %j will stringify it as a formated JSON
console.log('I am a log of something interesting: %j', something)

// You can also just use the power feature of JS:

console.log(\`I am a log of something interesting: \$\{ JSON.stringify(something)\}\`)

// Show a message with alert
at.alert('I am a log of something interesting: %j', something)

at.alert(\`I am a log of something interesting: \$\{ JSON.stringify(something )\}\`)
\`\`\`
`,
    alert: `
\`alert(message)\`

Pop up the dialog box to show specified content.

\`Examples(JavaScript):\`
\`\`\`js
console.log('What a funny one!')

// 
const something = {
    color: 0xd6e8s9,
    point: {
        x: 100,
        y: 100
    },
    appName: 'IDK'
}
// How to format a string with parameters?
// %s means a String
// %d means a Number
// %j will stringify it as a formated JSON
console.log('I am a log of something interesting: %j', something)

// You can also just use the power feature of JS:

console.log(\`I am a log of something interesting: \$\{ JSON.stringify(something)\}\`)

// Show a message with alert
at.alert('I am a log of something interesting: %j', something)

at.alert(\`I am a log of something interesting: \$\{ JSON.stringify(something )\}\`)
\`\`\`
`,
    toast: `
\`toast(message, delay)\`

Show messages with Toast style and delay for some seconds.

\`Examples(JavaScript):\`
\`\`\`js
// Show message and hold for 5 seconds.
at.toast("Hello I'm a toast!", 5)
// Show message and hold for default 2 seconds.
at.toast("Hello again!")
\`\`\`
`,
    vibrate: `
\`vibrate()\`

Vibrate once。

\`Examples(JavaScript):\`
\`\`\`js
-- Vibrate once.
at.vibrate()
\`\`\`
`,
    getdeviceorientation: `
\`getDeviceOrientation()\`

Get orientation of the screen. Return the integer value. Please refer to the “Orientation Type of Screen” for specific correspondence relation.

\`Examples(JavaScript):\`
\`\`\`js
// Get device orientation
at.alert(\`Current device orientation is : \$\{at.getDeviceOrientation()\}\`)
\`\`\`
`,
    getscreeninfo: `
\`getScreenInfo()\`

Get screen informations.

\`Examples(JavaScript):\`
\`\`\`js
at.alert(\`Current device screen info : \$\{at.getScreenInfo()\}\`)
\`\`\`
`,
    getsn: `
\`getSN()\`

Get Serial Number of the device.

\`Examples(JavaScript):\`
\`\`\`js
// Get device SN
at.alert(\`Serial Number of current device is \$\{at.getSN()\}\`)
\`\`\`
`,
    getversion: `
\`getVersion()\`

Get version of AutoTouch.

\`Examples\`
\`\`\`js
// get AutoTouch license of current device
at.alert(\`AutoTouch license of current device is \$\{at.getLicense()\}\`)
\`\`\`
`,
    frontmostappid: `
\`frontMostAppId()\`

Get identifier of current front most App.

\`Examples\`
\`\`\`js
// Get identifier of the current front most app
at.alert(\`Current front most app is : \$\{at.frontMostAppId()\}\`)
\`\`\`
`,
    frontmostapporientation: `
\`frontMostAppOrientation()\`

Get orientation of current front most App. See the [Types of orientations](https://docs.autotouch.net/js/api.html#types-of-device-orientations)

\`Examples(JavaScript):\`
\`\`\`js
// get orientation of current front most app
at.alert(\`App interface orientation of current front most app is : \$\{frontMostAppOrientation()\}\`)
\`\`\`
`,
    inttorgb: `
\`intToRgb(intColor)\`

Transit integer color to independent values of R,G,B.

\`Examples\`
\`\`\`js
const { intToRgb, rgbToInt } = utils

//---------------------------------------------------
const color = 0x2B2B2B
const { red, green, blue }  = intToRgb()
alert(\`rgb values of \$\{color.toString(16)\} is red: \$\{red\}, green: \$\{green\}, blue: \$\{blue\}\`)

//---------------------------------------------------
const [r, g, b] = [200, 255, 100]
const intColor = rgbToInt(r, g, b)
alert(\`Integer value of rgb(\$\{r\}, \$\{g\}, \$\{b\}) is \$\{intColor\}\`)
alert(\`Hex format of color rgb(\$\{r\}, \$\{g\}, \$\{b\}) is \$\{intColor.toString(16)\}\`)
\`\`\`
`,
    rgbtoint: `
\`rgbToInt(r, g, b)\`

Transit values of R,G,B to integer color value.

\`Examples(JavaScript):\`
\`\`\`js
const { intToRgb, rgbToInt } = utils

//---------------------------------------------------
const color = 0x2B2B2B
const { red, green, blue }  = intToRgb()
alert(\`rgb values of \$\{color.toString(16)\} is red: \$\{red\}, green: \$\{green\}, blue: \$\{blue\}\`)

//---------------------------------------------------
const [r, g, b] = [200, 255, 100]
const intColor = rgbToInt(r, g, b)
alert(\`Integer value of rgb(\$\{r\}, \$\{g\}, \$\{b\}) is \$\{intColor\}\`)
alert(\`Hex format of color rgb(\$\{r\}, \$\{g\}, \$\{b\}) is \$\{intColor.toString(16)\}\`)
\`\`\`
`,
    copytext: `
\`copyText(text)\`

Copy specified text to clipboard.

\`Examples(JavaScript):\`
\`\`\`js
const { copyText, clipText, inputText } = at 
//---------------------------------------------------
// Copy specified text to clipboard
copyText("This is a copied text!")

//---------------------------------------------------
// Get the text from the clipboard
const text = clipText()
alert(text)
//Popup shows the text to be copied: "This is a copied text!";
\`\`\`
`,
    cliptext: `
\`clipText()\`

Get the text in the clipboard.

\`Examples(JavaScript):\`
\`\`\`js
const { copyText, clipText, inputText } = at 
//---------------------------------------------------
// Copy specified text to clipboard
copyText("This is a copied text!")

//---------------------------------------------------
// Get the text from the clipboard
const text = clipText()
alert(text)
//Popup shows the text to be copied: "This is a copied text!";
\`\`\`
`,
    inputtext: `
\`inputText(text)\`

Input text to the input box selected now. You can delete a character backspace by inputText("\b").

\`Examples(JavaScript):\`
\`\`\`js
//---------------------------------------------------
// input text to the current input field, this function only works on \`AutoTouch inputText\` specifal version
at.inputText("Let's input some text automatically without tapping the keyboard!")
// Delete 3 character by inputing 3 backspaces.
at.inputText("\b\b\b") 
\`\`\`
`,
    dialog: `
\`dialog(controls, enableRemember)\`

Pop up self-defined dialog box to accept the user input. Please refer to the example for specific usage.

\`Examples(JavaScript):\`
\`\`\`js
const label = { type: CONTROLLER_TYPE.LABEL, text: "Would you mind to provide some personal informations?" }
const nameInput = { type: CONTROLLER_TYPE.INPUT, title: "Name:", key: "Name", value: "Bob" }
const positionPicker = { type: CONTROLLER_TYPE.PICKER, title: "Position:", key: "Position", value: "CEO", options: ["CEO", "CTO", "CFO", "CXO"] }
const developerSwitch = { type: CONTROLLER_TYPE.SWITCH, title: "A Developer:", key: "ADeveloper", value: 1 }

// It's an option for users to determine weather the inputs should be remembered, if you use this control in the dialog.
const remember = { type: CONTROLLER_TYPE.REMEMBER, on: false }

/*
Define buttons:
type = CONTROLLER_TYPE.BUTTON
title = Button text
color = Button background color, it's optional, the default value is 0x428BCA
width = Button width upon percentage of the dialog width, it's optional, the default value is 0.5, max value is 1.0.
flag = Integer type of button flag for identifying which button is tapped.
collectInputs = Boolean type specifying wheather the dialog should collect the inputs while this button is tapped.
*/
const btn1 = { type: CONTROLLER_TYPE.BUTTON, title: "Button 1", color: 0x71C69E, width: 0.8, flag: 1, collectInputs: false }
const btn2 = { type: CONTROLLER_TYPE.BUTTON, title: "Button 2", color: 0xFF5733, flag: 2, collectInputs: true }
const btn3 = { type: CONTROLLER_TYPE.BUTTON, title: "Button 3", color: 0xFFB7D0, width: 1.0, flag: 3, collectInputs: false }
const btn4 = { type: CONTROLLER_TYPE.BUTTON, title: "Button 4", width: 1.0, flag: 4, collectInputs: true }

const controls = [label, nameInput, positionPicker, developerSwitch, btn1, btn2, remember, btn3, btn4]

// Pop up the dialog. After popping, the script will suspend waiting for user input until any button is tapped, then returns the flag of tapped button.

// What orientations the dialog could be, it's optional
const orientations = [INTERFACE_ORIENTATION_TYPE.LANDSCAPE_LEFT, INTERFACE_ORIENTATION_TYPE.LANDSCAPE_RIGHT];

const result = at.dialog({ controls, orientations });

if (result == 1) {
    alert("name:%s, birthday:%s, gender:%d", nameInput.value, positionPicker.value, developerSwitch.value)
} else {
    alert("Dialog returned: %s", result)
}
\`\`\`
`,
    cleardialogvalues: `
\`clearDialogValues(script)\`

Clear the remembered values of the dialog created by the function dialog.

\`Examples(JavaScript):\`
\`\`\`js
// clear the remembered dialog values
clearDialogValues("dialog.js");
\`\`\`
`,
    openurl: `
\`openURL(urlString)\`

Open url, or open other apps' url scheme. Look at [Always-Updated List of iOS App URL Scheme Names](https://ios.gadgethacks.com/news/always-updated-list-ios-app-url-scheme-names-0184033/) and example: [Google Maps URL Scheme for iOS](https://developers.google.com/maps/documentation/urls/ios-urlscheme)

\`Examples(JavaScript):\`
\`\`\`js
// Open url, or open other apps' url scheme. Look at [Always-Updated List of iOS App URL Scheme Names](https://ios.gadgethacks.com/news/always-updated-list-ios-app-url-scheme-names-0184033/) and example: [Google Maps URL Scheme for iOS](https://developers.google.com/maps/documentation/urls/ios-urlscheme)
at.openURL("https://autotouch.net")
at.openURL("prefs:root=General&path=About")
at.openURL("musics://")
at.openURL("itms-apps://itunes.apple.com")
at.openURL("tel://+1123456")
at.openURL("clashofclans://")
\`\`\`
`,
    setautolaunch: `
\`setAutoLaunch(scriptPath, on)\`

Switch on/off a script as auto launch.

\`Examples(JavaScript):\`
\`\`\`js
const { setAutoLaunch, listAutoLaunch } = at

//---------------------------------------------------
// Set the specified script to auto launch
// First parameter is relative path of a script inside script directory of AutoTouch, 
// such as "/Records/test.js" actually is at \`/var/mobile/Library/AutoTouch/Scripts/Records/test.js\`.
setAutoLaunch("/Records/test.js", true)

//---------------------------------------------------
// Set the specified script off auto launch
setAutoLaunch("/Records/test.js", false)

const autoLaunchScripts = listAutoLaunch()
if (!autoLaunchScripts) {
    alert('No auto launch scripts!')
}
autoLaunchScripts.forEach(item => console.log(\`Got a auto launch script: \$\{item\}\`))
\`\`\`
`,
    listautolaunch: `
\`listAutoLaunch()\`

List all auto lanuch scripts

\`Examples(JavaScript):\`
\`\`\`js
const { setAutoLaunch, listAutoLaunch } = at

//---------------------------------------------------
// Set the specified script to auto launch
// First parameter is relative path of a script inside script directory of AutoTouch, 
// such as "/Records/test.js" actually is at \`/var/mobile/Library/AutoTouch/Scripts/Records/test.js\`.
setAutoLaunch("/Records/test.js", true)

//---------------------------------------------------
// Set the specified script off auto launch
setAutoLaunch("/Records/test.js", false)

const autoLaunchScripts = listAutoLaunch()
if (!autoLaunchScripts) {
    alert('No auto launch scripts!')
}
autoLaunchScripts.forEach(item => console.log(\`Got a auto launch script: \$\{item\}\`))
\`\`\`
`
}

function apiMessage(key) {
    return apis[key]
}

module.exports = {
    luaMessage, apiMessage
}