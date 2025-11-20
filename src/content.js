if (typeof browser === "undefined") {
    var browser = chrome;
}

// Load the main extension script
const script = document.createElement("script");
script.src = browser.runtime.getURL("bettervlr.js");
document.documentElement.append(script);

// Load the trophies script
const trophiesScript = document.createElement("script");
trophiesScript.src = browser.runtime.getURL("trophies.js");
document.documentElement.append(trophiesScript);