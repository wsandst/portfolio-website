/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/gb_emulator_web_bg.wasm": function() {
/******/ 			return {
/******/ 				"./gb_emulator_web_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/gb_emulator_web_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_buffer_ebc6c8e75510eae3": function(p0i32) {
/******/ 						return installedModules["../pkg/gb_emulator_web_bg.js"].exports["__wbg_buffer_ebc6c8e75510eae3"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_ab2b53c614369e0e": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/gb_emulator_web_bg.js"].exports["__wbg_newwithbyteoffsetandlength_ab2b53c614369e0e"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_cc5264f47906c023": function(p0i32) {
/******/ 						return installedModules["../pkg/gb_emulator_web_bg.js"].exports["__wbg_new_cc5264f47906c023"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/gb_emulator_web_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["../pkg/gb_emulator_web_bg.js"].exports["__wbindgen_memory"]();
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/gb_emulator_web_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/gb_emulator_web_bg.wasm":"765de713515893f53314"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const canvas = document.getElementById(\"screen-canvas\");\nvar FileSaver = __webpack_require__(/*! file-saver */ \"./node_modules/file-saver/dist/FileSaver.min.js\");\n\nconst enableCachedSaveCompression = false;\n\ncanvas.height = 144;\ncanvas.width = 160;\n\nconst ctx = canvas.getContext('2d');\n\nemulator = null;\nemulatorPaused = false;\nemulatorSpeedup = false;\nemulatorAudio = true;\nemulatorRunning = false;\ndisplayDebugInfo = false;\nbootRomData = null;\nromFilename = null;\naudioInitiated = false;\n\n// Compatability stuff\nvar AudioContext = window.AudioContext // Default\n    || window.webkitAudioContext; // IOs\n\n\nlet isIOS = /iPad|iPhone|iPod/.test(navigator.platform)\n|| (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)\n\n// Fix to make divs and such clickable on Safari on Iphone\nif (isIOS) {\n  document.querySelector('html').classList.add('is-ios');\n}\n\nmostRecentSaveExists = window.localStorage.getItem('mostRecentSave') != null;\n\n// Init the emulator and load from WASM\nconst startEmulator = (data, isRomfile, isSavefile, isStrSavefile) => {\n  if (!audioInitiated) {\n    initAudio();\n  }\n  __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./node_modules/gb-emulator-web/gb_emulator_web.js */ \"../pkg/gb_emulator_web.js\")).then((em) => {\n    const ctx = canvas.getContext('2d');\n\n    emulator = em.EmulatorWrapper.new();\n    // Use bootrom if loaded\n    if (bootRomData != null) {\n      console.log(\"Trying to load: \", bootRomData);\n      emulator.load_bootrom(bootRomData);\n    }\n    if (isRomfile) {\n      console.log(\"Trying to load rom\");\n      emulator.load_rom(data);\n      emulator.set_rom_name(romFilename);\n\n    }\n    else if (isSavefile) {\n      if (isStrSavefile) { // Format used by local cache saves\n        emulator.load_save_str(data)\n      }\n      else {\n        emulator.load_save(data);\n      }\n    }\n\n    // If the emulator is already running we just overwrite the emulator object\n    // We don't need to reinit everything\n    if (!emulatorRunning) {\n      console.log(\"Starting emulator\");\n      initInputs();\n      console.log(\"Starting to render\");\n      emulatorRunning = true;\n      renderLoop(emulator)\n    }\n  });\n}\n\n// Main render loop\nconst renderLoop = () => {\n  var framesRun = 0;\n  if (!emulatorPaused) {\n    if (!emulatorSpeedup) {\n      while (emulator.run_until_frontend_event() != 0) {\n        if (emulatorAudio) {\n          buffer = emulator.get_sound_queue();\n          pushAudioSamples(buffer);\n        }\n      }\n      framesRun++;\n    }\n    else {\n      // Run in speedup mode.\n      // Allow emulator to run as much as it can during one frametime\n      const start = performance.now();\n      var delta = 0;\n      while (delta <= (1.0/60.0)*1000) {\n        emulator.run_until_frontend_event();\n        delta = (performance.now() - start);\n        framesRun++;\n      }\n    }\n\n    pixels = new Uint8ClampedArray(emulator.get_screen_bitmap());\n    const imageData = new ImageData(pixels, canvas.width, canvas.height);\n    ctx.putImageData(imageData, 0, 0);\n\n  }\n  requestAnimationFrame(renderLoop);\n  debugInfo.update(framesRun);\n};\n\n// Inputs\nfunction initInputs() {\n  // Add keypress listeners\n  window.addEventListener(\"keydown\", keyDownInputEvent, true);\n  window.addEventListener(\"keyup\", keyUpInputEvent, true);\n  // Add mobile button listeners\n  // Gameboy keys\n  buttonBindings = [\n    [\"btn-arrow-left\", \"KeyA\"], \n    [\"btn-arrow-right\", \"KeyD\"], \n    [\"btn-arrow-up\", \"KeyW\"],\n    [\"btn-arrow-down\", \"KeyS\"], \n    [\"btn-a\", \"Space\"], \n    [\"btn-b\", \"ShiftLeft\"], \n    [\"btn-start\", \"Enter\"], \n    [\"btn-select\", \"Backspace\"]\n  ];\n  for (const buttonBinding of buttonBindings) {\n    const buttonId = buttonBinding[0];\n    const buttonKeycode = buttonBinding[1];\n    // These are all needed for nice mobile controls\n    document.getElementById(buttonId).addEventListener(\"mousedown\", (event) => keyDownMobileEvent(event, buttonKeycode));\n    document.getElementById(buttonId).addEventListener(\"mouseup\", (event) => keyUpMobileEvent(event, buttonKeycode));\n    document.getElementById(buttonId).addEventListener(\"touchstart\", (event) => keyDownMobileEvent(event, buttonKeycode));\n    document.getElementById(buttonId).addEventListener(\"touchmove\", (event) => keyDownMobileEvent(event, buttonKeycode));\n    document.getElementById(buttonId).addEventListener(\"touchend\", (event) => keyUpMobileEvent(event, buttonKeycode));\n    document.getElementById(buttonId).addEventListener(\"touchcancel\", (event) => keyUpMobileEvent(event, buttonKeycode));\n  }\n  // Top row of other emulator control buttons\n  document.getElementById(\"btn-turbo\").addEventListener(\"click\", (event) => emulatorSpeedup = !emulatorSpeedup);\n  document.getElementById(\"btn-pauseplay\").addEventListener(\"click\", (event) => emulatorPaused = !emulatorPaused);\n  document.getElementById(\"btn-save\").addEventListener(\"click\", (event) => saveEmulatorToFile());\n  document.getElementById(\"btn-audio\").addEventListener(\"click\", (event) => emulatorAudio = !emulatorAudio);\n  console.log(\"Initiated inputs\")\n}\n\nfunction keyDownInputEvent(event) {\n    if (event.defaultPrevented) {\n      return; // Do nothing if event already handled\n    }\n\n    handleKeyDown(event.code)\n  \n    // Consume the event so it doesn't get handled twice\n    event.preventDefault();\n}\n\nfunction keyDownMobileEvent(event, keycode) {\n  if (event.defaultPrevented) {\n    return; // Do nothing if event already handled\n  }\n\n  handleKeyDown(keycode)\n\n  // Consume the event so it doesn't get handled twice\n  event.preventDefault();\n}\n\nfunction handleKeyDown(keycode) {\n  //console.log(\"Keydown: \", keycode);\n  switch(keycode) {\n    // Gameboy controls\n    case \"KeyS\":\n    case \"ArrowDown\":\n      emulator.press_key_down();\n      break;\n    case \"KeyW\":\n    case \"ArrowUp\":\n      emulator.press_key_up();\n      break;\n    case \"KeyA\":\n    case \"ArrowLeft\":\n      emulator.press_key_left();\n      break;\n    case \"KeyD\":\n    case \"ArrowRight\":\n      emulator.press_key_right();\n      break;\n    case \"KeyZ\":\n    case \"Space\":\n      emulator.press_key_a();\n      break;\n    case \"KeyX\":\n    case \"ShiftLeft\":\n      emulator.press_key_b();\n      break;\n    case \"Enter\":\n      emulator.press_key_start();\n      break;\n    case \"Backspace\":\n      emulator.press_key_select();\n      break;\n    // Emulator state controls\n    case \"KeyP\":\n      emulatorPaused = !emulatorPaused;\n      break;\n    case \"KeyM\":\n      toggleDebugDisplay();\n      break;\n    case \"ControlLeft\":\n      emulatorSpeedup = !emulatorSpeedup;\n      break;\n    case \"KeyN\":\n      emulatorPaused = true;\n      saveEmulatorToFile();\n      emulatorPaused = false;\n      break;\n  }\n}\n\nfunction toggleDebugDisplay() {\n  displayDebugInfo = !displayDebugInfo;\n  if (displayDebugInfo) {\n    document.getElementById(\"debug-info\").style.display = \"block\";\n  }\n  else {\n    document.getElementById(\"debug-info\").style.display = \"none\";\n  }\n}\n\nfunction keyUpInputEvent(event) {\n  if (event.defaultPrevented) {\n    return; // Do nothing if event already handled\n  }\n\n  handleKeyUp(event.code)\n\n  // Consume the event so it doesn't get handled twice\n  event.preventDefault();\n}\n\nfunction keyUpMobileEvent(event, keycode) {\n  if (event.defaultPrevented) {\n    return; // Do nothing if event already handled\n  }\n\n  handleKeyUp(keycode)\n\n  // Consume the event so it doesn't get handled twice\n  event.preventDefault();\n}\n\nfunction handleKeyUp(keycode) {\n  //console.log(\"Keyup: \", keycode);\n  switch(keycode) {\n    case \"KeyS\":\n    case \"ArrowDown\":\n      emulator.clear_key_down();\n      break;\n    case \"KeyW\":\n    case \"ArrowUp\":\n      emulator.clear_key_up();\n      break;\n    case \"KeyA\":\n    case \"ArrowLeft\":\n      emulator.clear_key_left();\n      break;\n    case \"KeyD\":\n    case \"ArrowRight\":\n      emulator.clear_key_right();\n      break;\n    case \"KeyZ\":\n    case \"Space\":\n      emulator.clear_key_a();\n      break;\n    case \"KeyX\":\n    case \"ControlLeft\":\n      emulator.clear_key_b();\n      break;\n    case \"Enter\":\n      emulator.clear_key_start();\n      break;\n    case \"Backspace\":\n      emulator.clear_key_start();\n      break;\n  }\n}\n\n// File related code\nfunction loadFileToEmulator(file) {\n  // Check that extension is .gb or .bin\n  var isRomfile = file.name.endsWith('.gb') || file.name.endsWith('.bin');\n  var isSavefile = file.name.endsWith('.save');\n  if (!isRomfile && !isSavefile){ \n    console.log(\"Error: File type is not .gb or .save\")\n    return; \n  }\n\n  romFilename = file.name.split(\".\")[0];\n\n  fileData = new Blob([file]);\n  loadRomDataToEmulator(fileData, isRomfile, isSavefile);\n}\n\n// Takes a blob input\nfunction loadRomDataToEmulator(fileData, isRomfile, isSavefile) {\n  var promise = new Promise(getFileBuffer(fileData));\n  promise.then(function(data) {\n    startEmulator(data, isRomfile, isSavefile, false);\n  }).catch(function(err) {\n    console.log('Error: ',err);\n  });\n}\n\nfunction loadBootRomToEmulator(file) {\n    // Check that extension is .gb or .bin\n    var isRomfile = file.name.endsWith('.gb') || file.name.endsWith('.bin') || file.name.endsWith('.boot') || file.name.endsWith('.bootrom');\n  \n    fileData = new Blob([file]);\n    var promise = new Promise(getFileBuffer(fileData));\n    promise.then(function(data) {\n      if (data.length == 256) {\n        bootRomData = data;\n        displayPopupMessage(\"✔️ BootROM loaded\", 3000);\n      }\n      else {\n        displayPopupMessage(\"❌ Error loading BootROM: Invalid size!\", 3000);\n      }\n    }).catch(function(err) {\n      console.log('Error: ',err);\n    });\n}\n\nfunction loadServersideRomFile(romname) {\n  hideDropdownMobile();\n  const url = \"roms/\"+romname;\n  fetch(url).then(function(response) {\n    response.blob().then(function(data) {\n      romFilename = romname.split(\".\")[0];\n      loadRomDataToEmulator(data, true, false);\n    });\n  });\n}\n\nfunction dropFile(event) {\n  event.stopPropagation();\n  event.preventDefault();\n\n  var fileList = event.dataTransfer.files;\n  const file = fileList[0];\n  loadFileToEmulator(file);\n}\n\nfunction dragOverFile(event) {\n  event.stopPropagation();\n  event.preventDefault();\n  event.dataTransfer.dropEffect = 'copy';\n}\n\nfunction getFileBuffer(fileData) {\n  return function(resolve) {\n      var reader = new FileReader();\n      reader.readAsArrayBuffer(fileData);\n      reader.onload = function() {\n        var arrayBuffer = reader.result\n        var bytes = new Uint8Array(arrayBuffer);\n        resolve(bytes);\n    }\n  }\n}\n\nvar dropZone = document.getElementById(\"main\");\ndropZone.addEventListener(\"dragover\", dragOverFile, false);\ndropZone.addEventListener(\"drop\"    , dropFile, false);\n\ndropZone.addEventListener(\"drop\"    , dropFile, false);\n\n\n// Map file loading buttons to correct functions\n\nvar romInput = document.getElementById('file-rom-input');\n\nromInput.onchange = e => { \n  hideDropdownMobile()\n  var file = e.target.files[0]; \n  loadFileToEmulator(file);\n}\n\nvar saveInput = document.getElementById('file-save-input');\n\nsaveInput.onchange = e =>  {\n  hideDropdownMobile()\n  var file = e.target.files[0]; \n  loadFileToEmulator(file);\n}\n\nvar bootromInput = document.getElementById('file-bootrom-input');\n\nbootromInput.onchange = e => { \n  hideDropdownMobile();\n  var file = e.target.files[0]; \n  loadBootRomToEmulator(file);\n}\n\ndocument.getElementById('load-demo-blargg-cpu-instrs')\n\n// Functinality for making dropdown menu work on mobile\n// Enable dropdown through a click, then disable by placing\n// a click handler on the main document and disable dropdown\n// if click is outside dropdown\n\n// Is click event inside or outside the dropdown?\nconst outsideDropdownClickListener = event => {\n  var element = document.getElementById(\"dropdown\");\n  if (!element.contains(event.target)) {\n    hideDropdownMobile();\n  }\n}\n\n\n// Hide the dropdown\nfunction hideDropdownMobile() {\n  let hasHover = window.matchMedia(\"(hover: hover)\").matches;\n  if (!hasHover) {\n    for (elem of document.getElementsByClassName(\"dropdown-hide\")) {\n      elem.style.display = \"none\";\n    }\n    document.removeEventListener('click', outsideDropdownClickListener);\n  }\n}\n\n// Show the dropdown\nfunction showDropdownMobile(dropdownID) {\n  let hasHover = window.matchMedia(\"(hover: hover)\").matches;\n  display = document.getElementById(dropdownID).style.display;\n  if (!hasHover && (display === \"none\" || display === \"\")) {\n    // Hide other subdropdowns\n    for (elem of document.getElementsByClassName(\"sub-dropdown-content\")) {\n      elem.style.display = \"none\";\n    }\n    //document.getElementById(dropdownID).classList.remove(\"dropdown-hide\");\n    document.getElementById(dropdownID).style.display = \"inline-block\";\n    document.addEventListener('click', outsideDropdownClickListener);\n  }\n}\n\ndocument.getElementById('dropbtn').addEventListener(\"click\", () => showDropdownMobile(\"dropdown-content\"));\ndocument.getElementById('sub-dropdown1').addEventListener(\"click\", () => showDropdownMobile(\"sub-dropdown1-content\"));\ndocument.getElementById('sub-dropdown2').addEventListener(\"click\", () => showDropdownMobile(\"sub-dropdown2-content\"));\n\ndocument.getElementById('load-rom-button').addEventListener(\"click\", () => romInput.click());\ndocument.getElementById('load-save-button').addEventListener(\"click\", () => saveInput.click());\ndocument.getElementById('load-bootrom-button').addEventListener(\"click\", () => bootromInput.click());\n\n// Submenu 1, load serverside demo roms\ndocument.getElementById('load-demo-flappy-boy').addEventListener(\"click\", \n  () => loadServersideRomFile(\"flappy_boy.gb\"));\n\ndocument.getElementById('load-demo-rex-run').addEventListener(\"click\", \n  () => loadServersideRomFile(\"rex-run.gb\"));\n\ndocument.getElementById('load-demo-pocket').addEventListener(\"click\", \n  () => loadServersideRomFile(\"pocket.gb\"));\n\ndocument.getElementById('load-demo-dmgp').addEventListener(\"click\", \n  () => loadServersideRomFile(\"dmgp-01.gb \"));\n\n// Submenu 2, load serverside test roms\ndocument.getElementById('load-test-blargg-cpu-instrs').addEventListener(\"click\", \n  () => loadServersideRomFile(\"blargg_cpu_instrs.gb\"));\n\ndocument.getElementById('load-test-blargg-instr-timings').addEventListener(\"click\", \n  () => loadServersideRomFile(\"blargg_instr_timing.gb\"));\n  \ndocument.getElementById('load-test-acid2').addEventListener(\"click\", \n  () => loadServersideRomFile(\"acid2.gb\"));\n\n\nfunction saveEmulatorToFile(filename) {\n  var shouldUnpauseEmulator = emulator;\n  emulatorPaused = true;\n  var filename = emulator.get_rom_name();\n  var isoDateString = new Date().toISOString().split(\".\")[0];\n  data = new Uint8ClampedArray(emulator.save());\n  var blob = new Blob([data], {type: \"data:application/octet-stream\"});\n  FileSaver.saveAs(blob, filename+isoDateString+\".save\");\n\n  // Keep most recent save as local storage on user\n  // Convert to string because for some reason you can only save strings\n  var dataStr = emulator.save_as_str();\n  console.log(\"Saved most recent save to user cache with size of \", dataStr.length, \" characters\");\n  window.localStorage.setItem('mostRecentSave', dataStr);\n\n  displayPopupMessage(\"✔️ Game saved\", 1500);\n  if (shouldUnpauseEmulator) {\n    emulatorPaused = false;\n  }\n}\n\n// Enable menu option for most recent save if local memory exists\nif (mostRecentSaveExists) {\n  var localSaveMenuOption = document.getElementById(\"load-local-save\");\n  localSaveMenuOption.className = \"dropdown-content-btn\";\n  localSaveMenuOption.addEventListener(\"click\", () => loadMostRecentSave());\n}\n\n// Load the most recent save from local user storage\n// This is updated everytime the user saves\nfunction loadMostRecentSave() {\n  hideDropdownMobile();\n  saveStr = window.localStorage.getItem('mostRecentSave');\n  startEmulator(saveStr, false, true, true);\n}\n\n// Audio related code\n\nvar audioContext = null;\nvar audioFilterNode = null;\nvar audioStartTimestamp = null;\nvar audioDelay = 0.05;\nvar currentSampleIndex = 0;\nvar previousAudioNode = null;\nvar i = 0;\n\nvar queuedNodes = []\n\n// Push audio samples to the audio queue\n// This uses AudioNodeBuffers\nfunction pushAudioSamples(sampleBuffer) {\n  var audioBuffer = audioContext.createBuffer(2, 1024, 48000);\n  var leftPcmBuffer = audioBuffer.getChannelData(0);\n  var rightPcmBuffer = audioBuffer.getChannelData(1);\n  for (let i = 0; i < audioBuffer.length; i++) {\n    leftPcmBuffer[i] = sampleBuffer[i*2+0];\n    rightPcmBuffer[i] = sampleBuffer[i*2+1];\n  }\n  var source = audioContext.createBufferSource();\n  source.buffer = audioBuffer;\n  source.connect(audioFilterNode);\n  // start the source playing\n  currentTime = performance.now();\n  playbackTime = currentSampleIndex * 1024/48000.0 + audioDelay;\n  actualTime = performance.now() - audioStartTimestamp;\n  const actualAudioDelay = playbackTime*1000-actualTime;\n  if (actualAudioDelay <= 0) {\n    console.log(\"Audio falling behind! Creating audio gap\");\n    var offset = actualTime/1000.0 - playbackTime + 0.1;\n    audioDelay += offset;\n    playbackTime += offset;\n  }\n  else if (actualAudioDelay > 150) {\n    console.log(\"Audio too fast! Skipping audio\");\n    audioDelay -= 0.1;\n    playbackTime -= 0.1;\n  }\n  queuedNodes.push(source);\n  //previousAudioNode.onended = startNextNodeClosure(playbackTime, currentSampleIndex);\n  source.start(playbackTime); \n  source.stop(playbackTime+1024/48000.0)\n  previousAudioNode = source;\n  currentSampleIndex += 1;\n  //console.log(audioContext.state);\n}\n\n// Used to chain nodes using onended\n// This might be required for iOS, but sounds terrible for some reason\nfunction startNextNodeClosure(playbackTime, i) {\n  return function(e) {\n    var node = queuedNodes.shift();\n    node.start(playbackTime); \n    //node.stop(playbackTime+1024/48000.0)\n  }\n}\n\n// Push silence to the audio\nfunction pushAudioSilence(length) {\n  var audioBuffer = audioContext.createBuffer(1, length, 48000);\n  var pcmBuffer = audioBuffer.getChannelData(0);\n  for (let i = 0; i < audioBuffer.length; i++) {\n    pcmBuffer[i] = 0;\n  }\n  var source = audioContext.createBufferSource();\n  source.buffer = audioBuffer;\n  source.connect(audioFilterNode);\n  playbackTime = currentSampleIndex * 1024/48000.0 + audioDelay;\n  source.start(playbackTime);\n  //source.stop(playbackTime+length/48000.0);\n  previousAudioNode = source;\n  currentSampleIndex += 1;\n}\n\n// Init the audio context\nfunction initAudio() {\n  audioContext = new AudioContext();\n  audioStartTimestamp = performance.now();\n\n  // Apply lowpass filter ontop\n  audioFilterNode = audioContext.createBiquadFilter();\n  audioFilterNode.connect(audioContext.destination);\n  audioFilterNode.type = \"highpass\";\n  audioFilterNode.frequency.value = 200;\n\n  pushAudioSilence(1024);\n  audioInitiated = true;\n  console.log(\"Audio Latency: \", audioContext.baseLatency);\n  console.log(\"Initiated audio\")\n}\n\n// Class for displaying various debug info\nconst debugInfo = new class {\n  constructor() {\n    this.fps = document.getElementById(\"debug-info\");\n    this.frames = [];\n    this.lastFrameTimeStamp = performance.now();\n    this.audioDelay = 0;\n  }\n\n  update(multiplier) {\n    if (displayDebugInfo) {\n      // Convert the delta time since the last frame render into a measure\n      // of frames per second.\n      const now = performance.now();\n      const delta = now - this.lastFrameTimeStamp;\n      this.lastFrameTimeStamp = now;\n      const fps = 1 / delta * 1000;\n\n      // Save only the latest 100 timings.\n      this.frames.push(fps);\n      if (this.frames.length > 100) {\n        this.frames.shift();\n      }\n\n      let sum = 0;\n      for (let i = 0; i < this.frames.length; i++) {\n        sum += this.frames[i];\n      }\n      let mean = sum / this.frames.length;\n\n      var currentTime, playbackTime, actualTime;\n      if (currentSampleIndex % 30 == 0) {\n        currentTime = performance.now();\n        playbackTime = currentSampleIndex * 1024/48000.0 + audioDelay;\n        actualTime = performance.now() - audioStartTimestamp;\n        this.audioDelay = playbackTime*1000 - actualTime;\n      }\n\n      // Render the statistics.\n      this.fps.textContent = `FPS: ${Math.round(fps)*multiplier}, mean: ${Math.round(mean)*multiplier}. Audio delay: ${Math.round(this.audioDelay)}`.trim();\n      }\n      else {\n        this.fps.textContent = \"\";\n      }\n    }\n};\n\n// Functions for displaying small popup message\nfunction displayPopupMessage(message, duration) {\n  console.log(\"Displaying popup message: \", message);\n  document.getElementById(\"popup-message\").style.visibility = 'visible';\n  document.getElementById(\"popup-message\").style.opacity = '1';\n  document.getElementById(\"popup-message-content\").textContent = message;\n  setTimeout(fadeOutPopupMessage, duration);\n}\n\nfunction fadeOutPopupMessage() {\n  document.getElementById(\"popup-message\").style.visibility = 'hidden';\n  document.getElementById(\"popup-message\").style.opacity = '0';\n}\n\n//document.getElementById(\"load-local-save\").style.\n\n// Log console output to screen\n/*(function () {\n  displayPopupMessage(\"\", 10000000);\n  var old = console.log;\n  var logger = document.getElementById('popup-message-content');\n  console.log = function (message) {\n      if (typeof message == 'object') {\n          logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';\n      } else {\n          logger.innerHTML += message + '<br />';\n      }\n  }\n})();*/\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){\"use strict\";function b(a,b){return\"undefined\"==typeof b?b={autoBom:!1}:\"object\"!=typeof b&&(console.warn(\"Deprecated: Expected third argument to be a object\"),b={autoBom:!b}),b.autoBom&&/^\\s*(?:text\\/\\S*|application\\/xml|\\S*\\/\\S*\\+xml)\\s*;.*charset\\s*=\\s*utf-8/i.test(a.type)?new Blob([\"\\uFEFF\",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open(\"GET\",a),d.responseType=\"blob\",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error(\"could not download file\")},d.send()}function d(a){var b=new XMLHttpRequest;b.open(\"HEAD\",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent(\"click\"))}catch(c){var b=document.createEvent(\"MouseEvents\");b.initMouseEvent(\"click\",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f=\"object\"==typeof window&&window.window===window?window:\"object\"==typeof self&&self.self===self?self:\"object\"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||(\"object\"!=typeof window||window!==f?function(){}:\"download\"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement(\"a\");g=g||b.name||\"download\",j.download=g,j.rel=\"noopener\",\"string\"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target=\"_blank\")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:\"msSaveOrOpenBlob\"in navigator?function(f,g,h){if(g=g||f.name||\"download\",\"string\"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement(\"a\");i.href=f,i.target=\"_blank\",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open(\"\",\"_blank\"),g&&(g.document.title=g.document.body.innerText=\"downloading...\"),\"string\"==typeof b)return c(b,d,e);var h=\"application/octet-stream\"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\\/[\\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&\"undefined\"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,\"data:attachment/file;\"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});\n\n//# sourceMappingURL=FileSaver.min.js.map\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/file-saver/dist/FileSaver.min.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ })

/******/ });