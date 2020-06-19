const luaMessage = `
**Enter a command to get defination of function and example**.
Heres a list:
\`-LuaCURL\`
\`-LuaSocket\`
\`-LuaSec\`
\`-LuaSqlite3\`
\`-json\`
\`-Plist\`
\`-Penlight\`
\`-LuaFileSystem\`
\`-WebSocket\`
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
\`-getOrientation\`
\`-getScreenResolution\`
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
\`-isLicensed\`
\`-setAutoLaunch\`
\`-listAutoLaunch\`
`

const apis = {
    luacurl: `
*curl* is used in command lines or scripts to transfer data. Do -LuaCURL Support to see what it supports.
Example:
https://pastebin.com/1hhuWhPS`,
    luasocket: `
**LuaSocket** is a Lua extension library which supported TCP, UDP, SMTP, HTTP, FTP protocols.`,
    luasec: `
**LuaSec** is a binding for OpenSSL library to provide TLS/SSL communication. It takes an already established TCP connection and creates a secure session between the peers.`,
    Luasqlite3: `
**LuaSQLite 3** is a thin wrapper around the public domain SQLite3 database engine.`,
    json: `
**json.lua** provides operation methods on json.
Example:
https://pastebin.com/ELTzWUW4`,
    plist: `
**Plist** Plist library provides a batch of methods to operate on plist files.
**Example:**
https://pastebin.com/NNNcCm66`,
    plist: `
**Plist** Plist library provides a batch of methods to operate on plist files.
**Example:**
https://pastebin.com/NNNcCm66`,
    penlight: `
A set of pure Lua libraries focusing on input data handling (such as reading configuration files), functional programming (such as map, reduce, placeholder expressions,etc), and OS path management.
Modules:
https://pastebin.com/rUMrgEqq`,
    penlight: `
A set of pure Lua libraries focusing on input data handling (such as reading configuration files), functional programming (such as map, reduce, placeholder expressions,etc), and OS path management.
Modules:
https://pastebin.com/rUMrgEqq`,
    luafilesystem: `
LuaFileSystem is a Lua library developed to complement the set of functions related to file systems offered by the standard Lua distribution.
LuaFileSystem offers a portable way to access the underlying directory structure and file attributes.`,
    luafilesystem: `
LuaFileSystem is a Lua library developed to complement the set of functions related to file systems offered by the standard Lua distribution.
LuaFileSystem offers a portable way to access the underlying directory structure and file attributes.`,
    websocket: `
This module provides Lua modules for Websocket Version 13 conformant clients and servers.
**Example:**
https://pastebin.com/EZ6D9Epr`,
    websocket: `
This module provides Lua modules for Websocket Version 13 conformant clients and servers.
**Example:**
https://pastebin.com/EZ6D9Epr`,
    touchdown: `
\`touchDown(id, x, y)\`

Press the coordinate (x,y) on the screen.

\`Examples(Lua):\`
\`\`\`lua
-- Press by one finger at coordinate (100,200).
touchDown(0, 100, 200); 

-- Press by three fingers at three locations on the screen.
touchDown(0, 100, 200);
touchDown(1, 200, 300);
touchDown(2, 300, 400);

-- Implement a tap function
function tap(x, y)
    touchDown(0, x, y);
    usleep(16000);
    touchUp(0, x, y);
end

-- Tap at (100, 200)
tap(100, 200);
\`\`\`
`,
    touchmove: `
\`touchMove(id, x, y)\`

Move the finger to coordinate (x,y).

\`Examples(Lua):\`
\`\`\`lua
-- Press by one finger at coordinate (100,200) and move the finger to coordinate (200,200).
touchDown(0, 100, 200);
usleep(16000);
touchMove(0, 200, 200);

-- Press by three fingers at three locations on the screen and move to new location.
touchDown(0, 100, 200);
touchDown(1, 200, 300);
touchDown(2, 300, 400);
usleep(16000);
touchMove(0, 150, 250);
touchMove(1, 250, 350);
touchMove(2, 350, 450);
\`\`\`
`,
    touchup: `
\`touchUp(id, x, y)\`

Lift the finger from coordinate (x,y)

\`Examples(Lua):\`
\`\`\`lua
-- Click the screen once by one finger at coordinate (100,200).
touchDown(0, 100, 200);
usleep(16000);
touchUp(0, 100, 200);

-- Press by three fingers at three locations on the screen, move to new location, and then lift the finger.
touchDown(0, 100, 200);
touchDown(1, 200, 300);
touchDown(2, 300, 400);
usleep(16000);
touchMove(0, 150, 250);
touchMove(1, 250, 350);
touchMove(2, 350, 450);
usleep(16000);
touchUp(0, 150, 250);
touchUp(1, 250, 350);
touchUp(2, 350, 450);
\`\`\`
`,
    keydown: `
\`keyDown(keyType)\`

Simulate the pressing of physical key.

\`Examples(Lua):\`
\`\`\`lua
-- Simulate the pressing of Home Key.
keyDown(KEY_TYPE.HOME_BUTTON);

-- How to simulate a key pressing?
function keyPress(keyType)
    keyDown(keyType);
    usleep(10000);
    keyUp(keyType);
end
keyPress(KEY_TYPE.HOME_BUTTON);

-- How to simulate a screen lock function?
function lockScreen()
    keyDown(KEY_TYPE.POWER_BUTTON);
    keyUp(KEY_TYPE.POWER_BUTTON);
end

-- How to simulate a screen unlock function?
function unlockScreen()
    keyDown(KEY_TYPE.POWER_BUTTON);
    keyUp(KEY_TYPE.POWER_BUTTON);

    usleep(1000000);

    local w, h = getScreenResolution();

    local x = 10;
    local gap = 120;
    touchDown(0, x, 200);
    while x < w do
        x = x + gap;
        usleep(16000);
        touchMove(0, x, 200);
    end
    touchUp(0, x, 200);
end
\`\`\`
`,
    keyup: `
\`keyUp(keyType)\`

Simulate the lifting of physical key.

\`Examples(Lua):\`
\`\`\`lua
-- Simulate the action of pressing and lifting Home Key.
keyDown(KEY_TYPE.HOME_BUTTON);
usleep(10000);
keyUp(KEY_TYPE.HOME_BUTTON);
\`\`\`
`,
    getcolor: `
\`getColor(x, y)\`

Get the color value of the pixel point of the specified coordinate on current screen.

\`Examples(Lua):\`
\`\`\`lua
local color = getColor(100, 200)
alert(string.format("Pixel color is :%d", color))
-- Pop up color: 16777215

-- Keep gettting color of a location until it matches a specify color
local color
repeat
    color = getColor(100, 200)
    usleep(50000) -- Wait a while
until( color == 123456 )
-- Continue to do what's next
\`\`\`
`,
    findcolor: `
\`findColor(color, count, region, debug)\`

Search the coordinates of the pixel points matching the specified color on current screen.

\`Examples(Lua):\`
\`\`\`lua
-- Example 1:
local result = findColor(0x0000ff, 2, nil);
for i, v in pairs(result) do
    log(string.format("Found pixel: x:%f, y:%f", v[1], v[2]));
end

-- Example 2:
local result = findColor(0x00ddff, 0, {100, 50, 200, 200});
for i, v in pairs(result) do
    log(string.format("Found pixel: x:%f, y:%f", v[1], v[2]));
end

-- Example 3:
local region = {100, 50, 200, 200};
local result = findColor(0x00ddff, 0, region);
for i, v in pairs(result) do
    log(string.format("Found pixel: x:%f, y:%f", v[1], v[2]));
end

-- Example 4:
-- Keep finding a speficied color until it's found.
local locations
repeat
    local locations = findColor(0x0000ff, 2, nil);
    usleep(50000) -- Wait a while
until(#locations > 0)
-- Log the locations if found
for i, v in pairs(locations) do
    log(string.format("Found pixel: x:%f, y:%f", v[1], v[2]));
end
\`\`\`
`,
    findcolors: `
\`findColors(colors, count, region, debug)\`

Search all rectangular areas matching “specified color and their corresponding location and return the coordinate of the pixel point matching the first color in the rectangular area. This function has the search efficiency and availability far beyond findImage. For example, you need not match the whole key picture, but only match the anchors’ color and their corresponding location on the key. You can specify the number of the results by count parameter. 0 refers to all, 1 refers to the first one, and 2 refers to the first tow. region parameter can specify the search area, which is the table type {x,y,width, height}. You only input nil if no data is specified. 
This function can use the "HELPER" tool in the “Extension Function” of the script-editing interface to select the anchors’ colors from the screenshot and get their corresponding location to the function’s parameter automatically.
The coordinate of the pixel point pointed by the arrow is the coordinate of the return value.

\`Examples(Lua):\`
\`\`\`lua
-- Example 1:
local result = findColors({ {0x00ddff,0,0}, {0x00eeff,10,10}, {0x0000ff,0,20} }, 2, nil, true);
for i, v in pairs(result) do
    log(string.format("Found rect at: x:%f, y:%f", v[1], v[2]));
end

-- Example 2:
local colors = { {0x00ddff,0,0}, {0x00eeff,10,10}, {0x0000ff,0,20} };
local result = findColors(colors, 0, nil, true);
for i, v in pairs(result) do
    log(string.format("Found rect at: x:%f, y:%f", v[1], v[2]));
end

-- Example 3:
local colors = { {0x00ddff,0,0}, {0x00eeff,10,10}, {0x0000ff,0,20} };
local region = {100, 50, 200, 200};
local result = findColors(colors, 0, region);
for i, v in pairs(result) do
    log(string.format("Found rect at: x:%f, y:%f", v[1], v[2]));
end
\`\`\`

\`Internal Implementation\`
\`\`\`lua
function findColor(color, count, region)
    return findColors({ {color,0,0} }, count, region);
end
\`\`\`
`,
    findimage: `
\`findImage(targetImagePath, count, threshold, region, debug, method)\`

Search areas matching the specified image on current screen and return the center coordinates. It supports any format of target images. It also provides a debug mode which will produce an image marked the matching areas.

\`Examples(Lua):\`
\`\`\`lua
-- Example 1:
local result = findImage("images/Gold.PNG", 5, 0.99, nil, true)
for i, v in pairs(result) do
    log(string.format("Found rect at: x:%f, y:%f", v[1], v[2]));
end

-- Example 2:
local result = findImage("images/Gold.PNG", nil, nil, nil, true)
for i, v in pairs(result) do
    log(string.format("Found rect at: x:%f, y:%f", v[1], v[2]));
end

-- Example 3:
local result = findImage("images/Gold.PNG", 3)
for i, v in pairs(result) do
    log(string.format("Found rect at: x:%f, y:%f", v[1], v[2]));
end

-- Example 4:
local imagePath = "images/spirit.PNG";
local region = {100, 100, 300, 300};
local result = findImage(imagePath, 2, 0.98, region, true)
for i, v in pairs(result) do
    local x = v[1], y = v[2];

    log(string.format("Found rect at: x:%f, y:%f", x, y));
    
    -- Click the found location once.
    tap(x, y);
    usleep(16000);
end

-- Example 5:
local imagePath = "images/spirit.PNG";
local region = {100, 100, 300, 300};
-- Use method 2 to find image
local result = findImage(imagePath, 2, 0.98, region, true, 2)
\`\`\`
`,
    screenshot: `
\`screenshot(filePath, region)\`

Take a screenshot for the whole screen or specified area.
It will save the screenshot image as an PNG into "AutoTouch" album of iOS Photo Library if the filePath parameter is nill, and will save the PNG to the speficied path if filePath is not nil.
If region parameter is nil, it will take shot of the whole screen.
By Clicking "+" button at top-right of AutoTouch view, then "Copy Image Here", you are able to copy an image from iOS Photo Library to AutoTouch scripts directory.

\`Examples(Lua):\`
\`\`\`lua
-- Take shot of the whole screen and save into  "AutoTouch" album of iOS Photo Library.
screenshot();

-- Take a screenshot of the whole screen and save to the specified path, if no PNG as path extension, .PNG will automatically added.
screenshot ("images/screenshot1");

-- Take a screenshot of the specified area and save.
screenshot ("images/screenshot2.PNG", {100, 100, 200, 200});

-- Take a screenshot of the specified area and save into  "AutoTouch" album of iOS Photo Library.
screenshot (nil, {100, 100, 200, 200});
\`\`\`
`,
    apprun: `
\`appRun(appIdentifier)\`

Run specified application.

\`Example:\`
\`\`\`lua
-- Run Safari
appRun("com.apple.mobilesafari");
\`\`\`
`,
    appkill: `
\`appKill(appIdentifier)\`

Kill specified application.

\`Example:\`
\`\`\`lua
-- Kill the running Safari
appKill("com.apple.mobilesafari");
\`\`\`
`,
    appstate: `
\`appState(appIdentifier)\`

Get the running state of the specified application

\`Examples(Lua):\`
\`\`\`lua
-- Get the state of Safari.
local state = appState("com.apple.mobilesafari");
alert(string.format("State of Safari: %s", state));
-- Pop up the state of Safari: "ACTIVATED"
\`\`\`
`,
    rootdir: `
\`rootDir()\`

Get the default directory address of the saved script. This is the default saving address of scripts and screenshots: "/var/mobile/Library/AutoTouch/Scripts/".

\`Examples(Lua):\`
\`\`\`lua
local dirPath = rootDir();
alert(dirPath);
-- Popup "/var/mobile/Library/AutoTouch/Scripts/"
\`\`\`
`,
    usleep: `
\`usleep(microseconds)\`

Sleep several microseconds (1/1000000 second)

\`Examples(Lua):\`
\`\`\`lua
-- Sleep 1 second.
usleep(1000000);
\`\`\`
`,
    log: `
\`log(content)\`

Record log, can be seen in the log interface.

\`Examples(Lua):\`
\`\`\`lua
log("play here...");
\`\`\`
`,
    alert: `
\`alert(message)\`

Pop up the dialog box to show specified content.

\`Examples(Lua):\`
\`\`\`lua
alert("Hello World!");
\`\`\`
`,
    toast: `
\`toast(message, delay)\`

Show messages with Toast style and delay for some seconds.

\`Examples(Lua):\`
\`\`\`lua
toast("Hello I'm a toast!", 5); -- Show message for 5 seconds.
toast("Hello again!"); -- Show message for 2 seconds.
\`\`\`
`,
    vibrate: `
\`vibrate()\`

Vibrate once。

\`Examples(Lua):\`
\`\`\`lua
-- Vibrate once.
vibrate();
\`\`\`
`,
    playaudio: `
\`playAudio(audioFile, times)\`

Play audio document at specified location.

\`Examples(Lua):\`
\`\`\`lua
-- Play audio infinitely.
playAudio("/var/audio.mp3", 0);
\`\`\`
`,
    stopaudio: `
\`stopAudio()\`

Stop playing audio.

\`Examples(Lua):\`
\`\`\`lua
-- Stop playing audio.
stopAudio();
\`\`\`
`,
    getorientation: `
\`getOrientation()\`

Get orientation of the screen. Return the integer value. Please refer to the “Orientation Type of Screen” for specific correspondence relation.

\`Examples(Lua):\`
\`\`\`lua
local o = getOrientation();
alert(string.format("Screen orientation is : %d", 0))
-- Pop up the orientation 2 of the screen, and mark the reversed screen.
\`\`\`
`,
    getscreenresolution: `
\`getScreenResolution()\`

Get screen resolution bese on pixels.

\`Examples(Lua):\`
\`\`\`lua
local w, h = getScreenResolution();
alert(string.format("Resolution of iPhone 6 Plus: width:%d, height:%d", w, h));
-- iPhone 6 Plus’s resolution width is 1242 and resolution height is 2208.
\`\`\`
`,
    getsn: `
\`getSN()\`

Get Serial Number of the device.

\`Examples(Lua):\`
\`\`\`lua
local sn = getSN();
alert(string.format("SN is : %s", sn));
-- Popup shows the SN of the device: C15NFK32TWD2
\`\`\`
`,
    getversion: `
\`getVersion()\`

Get version of AutoTouch.

\`Examples\`
\`\`\`lua
local version = getVersion();
alert(string.format("Current version of AutoTouch is : %s", version));
-- Pop up shows current version of AutoTouch: 3.5.3-4
\`\`\`
`,
    frontmostappid: `
\`frontMostAppId()\`

Get identifier of current front most App.

\`Examples\`
\`\`\`lua
local appId = frontMostAppId();
alert(string.format("Current front most App is : %s", appId));
\`\`\`
`,
    frontmostapporientation: `
\`frontMostAppOrientation()\`

Get orientation of current front most App. See the [Types of orientations](#types-of-screen-orientations)

\`Examples(Lua):\`
\`\`\`lua
local orientation = frontMostAppOrientation();
alert(string.format("Orientation of current front most App is : %d", orientation));
\`\`\`
`,
    inttorgb: `
\`intToRgb(intColor)\`

Transit integer color to independent values of R,G,B.

\`Examples\`
\`\`\`lua
local r, g, b = intToRgb(0x2b2b2b);
alert(string.format("R:%d, G:%d, B:%d", r, g, b));
\`\`\`
`,
    rgbtoint: `
\`rgbToInt(r, g, b)\`

Transit values of R,G,B to integer color value.

\`Examples(Lua):\`
\`\`\`lua
local intColor = rgbToInt(200, 255, 100);
alert(string.format("Int type color: %d", intColor));
\`\`\`
`,
    copytext: `
\`copyText(text)\`

Copy specified text to clipboard.

\`Examples(Lua):\`
\`\`\`lua
copyText("This is a copied text!");
\`\`\`
`,
    cliptext: `
\`clipText()\`

Get the text in the clipboard.

\`Examples(Lua):\`
\`\`\`lua
local text = clipText();
alert(text);
-- Popup shows the text to be copied: "This is a copied text!";
\`\`\`
`,
    inputtext: `
\`inputText(text)\`

Input text to the input box selected now. You can delete a character backspace by inputText("\b").

\`Examples(Lua):\`
\`\`\`lua
inputText("Let's input some text automatically without tapping the keyboard!");
--  Delete 3 character by inputing 3 backspaces.
inputText("\b\b\b"); 
\`\`\`
`,
    dialog: `
\`dialog(controls, enableRemember)\`

Pop up self-defined dialog box to accept the user input. Please refer to the example for specific usage.

\`Examples(Lua):\`
\`\`\`lua
local label = {type=CONTROLLER_TYPE.LABEL, text="Would you mind to provide some personal informations?"}
local nameInput = {type=CONTROLLER_TYPE.INPUT, title="Name:", key="Name", value="Bob"}
local positionPicker = {type=CONTROLLER_TYPE.PICKER, title="Position:", key="Position", value="CEO", options={"CEO", "CTO", "CFO", "CXO"}}
local developerSwitch = {type=CONTROLLER_TYPE.SWITCH, title="A Developer:", key="ADeveloper", value=1}

local controls = {label, nameInput, positionPicker, developerSwitch}
local enableRemember = true;

-- Pop up the dialog box. After the popup, the script will suspend for user input until the user click “confirm” or “cancel”.
dialog(controls, enableRemember);

-- Then get the input value of user.
alert(string.format("name:%s, birthday:%s, gender:%d", nameInput.value, positionPicker.value, developerSwitch.value))
\`\`\`
`,
    cleardialogvalues: `
\`clearDialogValues(script)\`

Clear the remembered values of the dialog created by the function dialog.

\`Examples(Lua):\`
\`\`\`lua
-- There is a dialog.lua script in the scripts list
clearDialogValues("dialog.lua");
\`\`\`
`,
    openurl: `
\`openURL(urlString)\`

Open url, or open other apps' url scheme. Look at [Always-Updated List of iOS App URL Scheme Names](https://ios.gadgethacks.com/news/always-updated-list-ios-app-url-scheme-names-0184033/) and example: [Google Maps URL Scheme for iOS](https://developers.google.com/maps/documentation/urls/ios-urlscheme)

\`Examples(Lua):\`
\`\`\`lua
openURL("https://autotouch.net")
openURL("prefs:root=General&path=About")
openURL("musics://")
openURL("itms-apps://itunes.apple.com")
openURL("tel://+1123456")
openURL("clashofclans://")
\`\`\`
`,
    islicensed: `
\`isLicensed()\`
Check if the current device is running licensed AutoTouch

\`Examples(Lua):\`
\`\`\`lua
if isLicensed() then
    alert("Your device is licensed by AutoTouch!");
end
\`\`\`
`,
    setautolaunch: `
\`setAutoLaunch(scriptPath, on)\`
Switch on/off a script as auto launch.

\`Examples(Lua):\`
\`\`\`lua
setAutoLaunch("/Records/test.lua", on);
\`\`\`
`,
    listautolaunch: `
\`listAutoLaunch()\`
List all auto lanuch scripts
\`Examples(Lua):\`
\`\`\`lua
local scripts = listAutoLaunch()
for i, v in pairs(scripts) do
    alert(v);
end
\`\`\`
`
}

function apiMessage(key) {
    return apis[key]
}

module.exports = {
    luaMessage, apiMessage
}