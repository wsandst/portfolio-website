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
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/gb_emulator_web_bg.wasm":"fc4ca6f6c5245ed93b46"}[wasmModuleId] + ".module.wasm");
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

eval("const canvas = document.getElementById(\"screen-canvas\");\nvar FileSaver = __webpack_require__(/*! file-saver */ \"./node_modules/file-saver/dist/FileSaver.min.js\");\nvar LZString = __webpack_require__(/*! lz-string */ \"./node_modules/lz-string/libs/lz-string.js\");\n\nconst enableCachedSaveCompression = false;\n\ncanvas.height = 144;\ncanvas.width = 160;\n\nconst ctx = canvas.getContext('2d');\n\nemulator = null;\nemulatorPaused = false;\nemulatorSpeedup = false;\nemulatorAudio = true;\nemulatorRunning = false;\ndisplayDebugInfo = true;\nbootRomData = null;\nromFilename = null;\n\nmostRecentSaveExists = window.localStorage.getItem('mostRecentSave') != null;\n\n// Init the emulator and load from WASM\nconst startEmulator = (data, isRomfile, isSavefile) => {\n  __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./node_modules/gb-emulator-web/gb_emulator_web.js */ \"../pkg/gb_emulator_web.js\")).then((em) => {\n    const ctx = canvas.getContext('2d');\n\n    emulator = em.EmulatorWrapper.new();\n    // Use bootrom if loaded\n    if (bootRomData != null) {\n      console.log(\"Trying to load: \", bootRomData);\n      emulator.load_bootrom(bootRomData);\n    }\n    if (isRomfile) {\n      console.log(\"Trying to load rom\");\n      emulator.load_rom(data);\n    }\n    else if (isSavefile) {\n      emulator.load_save(data);\n    }\n\n    // If the emulator is already running we just overwrite the emulator object\n    // We don't need to reinit everything\n    if (!emulatorRunning) {\n      initAudio();\n      initInputs();\n      console.log(\"Starting to render\");\n      emulatorRunning = true;\n      renderLoop(emulator)\n    }\n  });\n}\n\n// Main render loop\nconst renderLoop = () => {\n  var framesRun = 0;\n  if (!emulatorPaused) {\n    if (!emulatorSpeedup) {\n      while (emulator.run_until_frontend_event() != 0) {\n        if (emulatorAudio) {\n          buffer = emulator.get_sound_queue();\n          pushAudioSamples(buffer);\n        }\n      }\n      framesRun++;\n    }\n    else {\n      // Run in speedup mode.\n      // Allow emulator to run as much as it can during one frametime\n      const start = performance.now();\n      var delta = 0;\n      while (delta <= (1.0/60.0)*1000) {\n        emulator.run_until_frontend_event();\n        delta = (performance.now() - start);\n        framesRun++;\n      }\n    }\n\n    pixels = new Uint8ClampedArray(emulator.get_screen_bitmap());\n    const imageData = new ImageData(pixels, canvas.width, canvas.height);\n    ctx.putImageData(imageData, 0, 0);\n\n  }\n  requestAnimationFrame(renderLoop);\n  debugInfo.update(framesRun);\n};\n\n// Inputs\nfunction initInputs() {\n  // Add keypress listeners\n  window.addEventListener(\"keydown\", keyDownInputEvent, true);\n  window.addEventListener(\"keyup\", keyUpInputEvent, true);\n  // Add mobile button listeners\n  // Gameboy keys\n  buttonBindings = [\n    [\"btn-arrow-left\", \"KeyA\"], \n    [\"btn-arrow-right\", \"KeyD\"], \n    [\"btn-arrow-up\", \"KeyW\"],\n    [\"btn-arrow-down\", \"KeyS\"], \n    [\"btn-a\", \"Space\"], \n    [\"btn-b\", \"ShiftLeft\"], \n    [\"btn-start\", \"Enter\"], \n    [\"btn-select\", \"Backspace\"]\n  ];\n  for (const buttonBinding of buttonBindings) {\n    const buttonId = buttonBinding[0];\n    const buttonKeycode = buttonBinding[1];\n    // These are all needed for nice mobile controls\n    document.getElementById(buttonId).addEventListener(\"mousedown\", (event) => keyDownMobileEvent(event, buttonKeycode));\n    document.getElementById(buttonId).addEventListener(\"mouseup\", (event) => keyUpMobileEvent(event, buttonKeycode));\n    document.getElementById(buttonId).addEventListener(\"touchstart\", (event) => keyDownMobileEvent(event, buttonKeycode));\n    document.getElementById(buttonId).addEventListener(\"touchmove\", (event) => keyDownMobileEvent(event, buttonKeycode));\n    document.getElementById(buttonId).addEventListener(\"touchend\", (event) => keyUpMobileEvent(event, buttonKeycode));\n    document.getElementById(buttonId).addEventListener(\"touchcancel\", (event) => keyUpMobileEvent(event, buttonKeycode));\n  }\n  // Top row of other emulator control buttons\n  document.getElementById(\"btn-turbo\").addEventListener(\"click\", (event) => emulatorSpeedup = !emulatorSpeedup);\n  document.getElementById(\"btn-pauseplay\").addEventListener(\"click\", (event) => emulatorPaused = !emulatorPaused);\n  document.getElementById(\"btn-save\").addEventListener(\"click\", (event) => saveEmulatorToFile(romFilename));\n  document.getElementById(\"btn-audio\").addEventListener(\"click\", (event) => emulatorAudio = !emulatorAudio);\n}\n\nfunction keyDownInputEvent(event) {\n    if (event.defaultPrevented) {\n      return; // Do nothing if event already handled\n    }\n\n    handleKeyDown(event.code)\n  \n    // Consume the event so it doesn't get handled twice\n    event.preventDefault();\n}\n\nfunction keyDownMobileEvent(event, keycode) {\n  if (event.defaultPrevented) {\n    return; // Do nothing if event already handled\n  }\n\n  handleKeyDown(keycode)\n\n  // Consume the event so it doesn't get handled twice\n  event.preventDefault();\n}\n\nfunction handleKeyDown(keycode) {\n  //console.log(\"Keydown: \", keycode);\n  switch(keycode) {\n    // Gameboy controls\n    case \"KeyS\":\n    case \"ArrowDown\":\n      emulator.press_key_down();\n      break;\n    case \"KeyW\":\n    case \"ArrowUp\":\n      emulator.press_key_up();\n      break;\n    case \"KeyA\":\n    case \"ArrowLeft\":\n      emulator.press_key_left();\n      break;\n    case \"KeyD\":\n    case \"ArrowRight\":\n      emulator.press_key_right();\n      break;\n    case \"KeyZ\":\n    case \"Space\":\n      emulator.press_key_a();\n      break;\n    case \"KeyX\":\n    case \"ShiftLeft\":\n      emulator.press_key_b();\n      break;\n    case \"Enter\":\n      emulator.press_key_start();\n      break;\n    case \"Backspace\":\n      emulator.press_key_start();\n      break;\n    // Emulator state controls\n    case \"KeyP\":\n      emulatorPaused = !emulatorPaused;\n      break;\n    case \"KeyM\":\n      toggleDebugDisplay();\n      break;\n    case \"ControlLeft\":\n      emulatorSpeedup = !emulatorSpeedup;\n      break;\n    case \"KeyN\":\n      emulatorPaused = true;\n      saveEmulatorToFile('gbsave');\n      emulatorPaused = false;\n      break;\n  }\n}\n\nfunction toggleDebugDisplay() {\n  displayDebugInfo = !displayDebugInfo;\n  if (displayDebugInfo) {\n    document.getElementById(\"debug-info\").style.display = \"block\";\n  }\n  else {\n    document.getElementById(\"debug-info\").style.display = \"none\";\n  }\n}\n\nfunction keyUpInputEvent(event) {\n  if (event.defaultPrevented) {\n    return; // Do nothing if event already handled\n  }\n\n  handleKeyUp(event.code)\n\n  // Consume the event so it doesn't get handled twice\n  event.preventDefault();\n}\n\nfunction keyUpMobileEvent(event, keycode) {\n  if (event.defaultPrevented) {\n    return; // Do nothing if event already handled\n  }\n\n  handleKeyUp(keycode)\n\n  // Consume the event so it doesn't get handled twice\n  event.preventDefault();\n}\n\nfunction handleKeyUp(keycode) {\n  //console.log(\"Keyup: \", keycode);\n  switch(keycode) {\n    case \"KeyS\":\n    case \"ArrowDown\":\n      emulator.clear_key_down();\n      break;\n    case \"KeyW\":\n    case \"ArrowUp\":\n      emulator.clear_key_up();\n      break;\n    case \"KeyA\":\n    case \"ArrowLeft\":\n      emulator.clear_key_left();\n      break;\n    case \"KeyD\":\n    case \"ArrowRight\":\n      emulator.clear_key_right();\n      break;\n    case \"KeyZ\":\n    case \"Space\":\n      emulator.clear_key_a();\n      break;\n    case \"KeyX\":\n    case \"ControlLeft\":\n      emulator.clear_key_b();\n      break;\n    case \"Enter\":\n      emulator.clear_key_start();\n      break;\n    case \"Backspace\":\n      emulator.clear_key_start();\n      break;\n  }\n}\n\n// File related code\nfunction loadFileToEmulator(file) {\n  // Check that extension is .gb or .bin\n  var isRomfile = file.name.endsWith('.gb') || file.name.endsWith('.bin');\n  var isSavefile = file.name.endsWith('.save');\n  if (!isRomfile && !isSavefile){ \n    console.log(\"Error: File type is not .gb or .save\")\n    return; \n  }\n\n  fileData = new Blob([file]);\n  var promise = new Promise(getFileBuffer(fileData));\n  promise.then(function(data) {\n    romFilename = file.name.split(\".\")[0];\n    startEmulator(data, isRomfile, isSavefile);\n  }).catch(function(err) {\n    console.log('Error: ',err);\n  });\n  // access files via fileList\n}\n\nfunction loadBootRomToEmulator(file) {\n    // Check that extension is .gb or .bin\n    var isRomfile = file.name.endsWith('.gb') || file.name.endsWith('.bin') || file.name.endsWith('.boot') || file.name.endsWith('.bootrom');\n  \n    fileData = new Blob([file]);\n    var promise = new Promise(getFileBuffer(fileData));\n    promise.then(function(data) {\n      if (data.length == 256) {\n        bootRomData = data;\n        displayPopupMessage(\"✔️ BootROM loaded\", 3000);\n      }\n      else {\n        displayPopupMessage(\"❌ Error loading BootROM: Invalid size!\", 3000);\n      }\n    }).catch(function(err) {\n      console.log('Error: ',err);\n    });\n}\n\nfunction dropFile(event) {\n  event.stopPropagation();\n  event.preventDefault();\n\n  var fileList = event.dataTransfer.files;\n  const file = fileList[0];\n  loadFileToEmulator(file);\n}\n\nfunction dragOverFile(event) {\n  event.stopPropagation();\n  event.preventDefault();\n  event.dataTransfer.dropEffect = 'copy';\n}\n\nfunction getFileBuffer(fileData) {\n  return function(resolve) {\n      var reader = new FileReader();\n      reader.readAsArrayBuffer(fileData);\n      reader.onload = function() {\n        var arrayBuffer = reader.result\n        var bytes = new Uint8Array(arrayBuffer);\n        resolve(bytes);\n    }\n  }\n}\n\nvar dropZone = document.getElementById(\"main\");\ndropZone.addEventListener(\"dragover\", dragOverFile, false);\ndropZone.addEventListener(\"drop\"    , dropFile, false);\n\ndropZone.addEventListener(\"drop\"    , dropFile, false);\n\n\n// Map file loading buttons to correct functions\n\nvar romInput = document.getElementById('file-rom-input');\n\nromInput.onchange = e => { \n   var file = e.target.files[0]; \n   loadFileToEmulator(file);\n}\n\nvar saveInput = document.getElementById('file-save-input');\n\nsaveInput.onchange = e => { \n   var file = e.target.files[0]; \n   loadFileToEmulator(file);\n}\n\nvar bootromInput = document.getElementById('file-bootrom-input');\n\nbootromInput.onchange = e => { \n   var file = e.target.files[0]; \n   loadBootRomToEmulator(file);\n}\n\ndocument.getElementById('load-rom-button').addEventListener(\"click\", () => romInput.click());\ndocument.getElementById('load-save-button').addEventListener(\"click\", () => saveInput.click());\ndocument.getElementById('load-bootrom-button').addEventListener(\"click\", () => bootromInput.click());\n\nfunction saveEmulatorToFile(filename) {\n  var shouldUnpauseEmulator = emulator;\n  emulatorPaused = true;\n  var isoDateString = new Date().toISOString().split(\".\")[0];\n  data = new Uint8ClampedArray(emulator.save());\n  var blob = new Blob([data], {type: \"data:application/octet-stream\"});\n  FileSaver.saveAs(blob, filename+isoDateString+\".save\");\n\n  // Keep most recent save as local storage on user\n  // Convert to string because for some reason you can only save strings\n  var dataStr = JSON.stringify(data);\n  // Optionally compress string to save space, this is very slow\n  if (enableCachedSaveCompression) {\n    console.log(\"Compressing cached save file\")\n    dataStr = LZString.compressToUTF16(dataStr);\n    console.log(\"Finished compression\");\n  }\n  window.localStorage.setItem('mostRecentSave', dataStr);\n\n  displayPopupMessage(\"✔️ Game saved\", 1500);\n  if (shouldUnpauseEmulator) {\n    emulatorPaused = false;\n  }\n}\n\n// Enable menu option for most recent save if local memory exists\nif (mostRecentSaveExists) {\n  var localSaveMenuOption = document.getElementById(\"load-local-save\");\n  localSaveMenuOption.className = \"dropdown-content-btn\";\n  localSaveMenuOption.addEventListener(\"click\", () => loadMostRecentSave());\n}\n\n// Load the most recent save from local user storage\n// This is updated everytime the user saves\nfunction loadMostRecentSave() {\n  saveStr = window.localStorage.getItem('mostRecentSave');\n  if (enableCachedSaveCompression) {\n    saveStr = LZString.decompressFromUTF16(saveStr);\n  }\n  saveData = Object.values(JSON.parse(saveStr));\n  startEmulator(saveData, false, true);\n}\n\n// Audio related code\n\nlet audioContext = null;\nlet audioStartTimestamp = null;\nlet audioDelay = 0.05;\nlet i = 0;\nlet currentSampleIndex = 0;\n\n// Push audio samples to the audio queue\n// This uses AudioNodeBuffers\nfunction pushAudioSamples(sampleBuffer) {\n  var audioBuffer = audioContext.createBuffer(1, 1024, 48000);\n  var pcmBuffer = audioBuffer.getChannelData(0);\n  for (let i = 0; i < audioBuffer.length; i++) {\n    pcmBuffer[i] = sampleBuffer[i]\n  }\n  var source = audioContext.createBufferSource();\n  source.buffer = audioBuffer;\n  source.connect(audioContext.destination);\n  // start the source playing\n  currentTime = performance.now();\n  playbackTime = currentSampleIndex * 1024/48000.0 + audioDelay;\n  actualTime = performance.now() - audioStartTimestamp;\n  if (actualTime > playbackTime*1000) {\n    console.log(\"Audio falling behind! Creating audio gap\");\n    var offset = actualTime/1000.0 - playbackTime + 0.1;\n    audioDelay += offset;\n    playbackTime += offset;\n  }\n  source.start(playbackTime);\n  source.stop(playbackTime+1024/48000.0);\n  currentSampleIndex += 1;\n}\n\n// Init the audio context\nfunction initAudio() {\n  audioContext = new AudioContext();\n  audioStartTimestamp = performance.now();\n  console.log(\"Audio Latency: \", audioContext.baseLatency);\n}\n\n// Class for displaying various debug info\nconst debugInfo = new class {\n  constructor() {\n    this.fps = document.getElementById(\"debug-info\");\n    this.frames = [];\n    this.lastFrameTimeStamp = performance.now();\n    this.audioDelay = 0;\n  }\n\n  update(multiplier) {\n    if (displayDebugInfo) {\n      // Convert the delta time since the last frame render into a measure\n      // of frames per second.\n      const now = performance.now();\n      const delta = now - this.lastFrameTimeStamp;\n      this.lastFrameTimeStamp = now;\n      const fps = 1 / delta * 1000;\n\n      // Save only the latest 100 timings.\n      this.frames.push(fps);\n      if (this.frames.length > 100) {\n        this.frames.shift();\n      }\n\n      let sum = 0;\n      for (let i = 0; i < this.frames.length; i++) {\n        sum += this.frames[i];\n      }\n      let mean = sum / this.frames.length;\n\n      if (currentSampleIndex % 30 == 0) {\n        currentTime = performance.now();\n        playbackTime = currentSampleIndex * 1024/48000.0 + audioDelay;\n        actualTime = performance.now() - audioStartTimestamp;\n        this.audioDelay = playbackTime*1000 - actualTime;\n      }\n\n      // Render the statistics.\n      this.fps.textContent = `FPS: ${Math.round(fps)*multiplier}, mean: ${Math.round(mean)*multiplier}. Audio delay: ${Math.round(this.audioDelay)}`.trim();\n      }\n      else {\n        this.fps.textContent = \"\";\n      }\n    }\n};\n\n// Functions for displaying small popup message\nfunction displayPopupMessage(message, duration) {\n  console.log(\"Displaying popup message: \", message);\n  document.getElementById(\"popup-message\").style.visibility = 'visible';\n  document.getElementById(\"popup-message\").style.opacity = '1';\n  document.getElementById(\"popup-message-content\").textContent = message;\n  setTimeout(fadeOutPopupMessage, duration);\n}\n\nfunction fadeOutPopupMessage() {\n  document.getElementById(\"popup-message\").style.visibility = 'hidden';\n  document.getElementById(\"popup-message\").style.opacity = '0';\n}\n\n//document.getElementById(\"load-local-save\").style.\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){\"use strict\";function b(a,b){return\"undefined\"==typeof b?b={autoBom:!1}:\"object\"!=typeof b&&(console.warn(\"Deprecated: Expected third argument to be a object\"),b={autoBom:!b}),b.autoBom&&/^\\s*(?:text\\/\\S*|application\\/xml|\\S*\\/\\S*\\+xml)\\s*;.*charset\\s*=\\s*utf-8/i.test(a.type)?new Blob([\"\\uFEFF\",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open(\"GET\",a),d.responseType=\"blob\",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error(\"could not download file\")},d.send()}function d(a){var b=new XMLHttpRequest;b.open(\"HEAD\",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent(\"click\"))}catch(c){var b=document.createEvent(\"MouseEvents\");b.initMouseEvent(\"click\",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f=\"object\"==typeof window&&window.window===window?window:\"object\"==typeof self&&self.self===self?self:\"object\"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||(\"object\"!=typeof window||window!==f?function(){}:\"download\"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement(\"a\");g=g||b.name||\"download\",j.download=g,j.rel=\"noopener\",\"string\"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target=\"_blank\")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:\"msSaveOrOpenBlob\"in navigator?function(f,g,h){if(g=g||f.name||\"download\",\"string\"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement(\"a\");i.href=f,i.target=\"_blank\",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open(\"\",\"_blank\"),g&&(g.document.title=g.document.body.innerText=\"downloading...\"),\"string\"==typeof b)return c(b,d,e);var h=\"application/octet-stream\"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\\/[\\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&\"undefined\"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,\"data:attachment/file;\"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});\n\n//# sourceMappingURL=FileSaver.min.js.map\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/file-saver/dist/FileSaver.min.js?");

/***/ }),

/***/ "./node_modules/lz-string/libs/lz-string.js":
/*!**************************************************!*\
  !*** ./node_modules/lz-string/libs/lz-string.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>\n// This work is free. You can redistribute it and/or modify it\n// under the terms of the WTFPL, Version 2\n// For more information see LICENSE.txt or http://www.wtfpl.net/\n//\n// For more information, the home page:\n// http://pieroxy.net/blog/pages/lz-string/testing.html\n//\n// LZ-based compression algorithm, version 1.4.4\nvar LZString = (function() {\n\n// private property\nvar f = String.fromCharCode;\nvar keyStrBase64 = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\";\nvar keyStrUriSafe = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$\";\nvar baseReverseDic = {};\n\nfunction getBaseValue(alphabet, character) {\n  if (!baseReverseDic[alphabet]) {\n    baseReverseDic[alphabet] = {};\n    for (var i=0 ; i<alphabet.length ; i++) {\n      baseReverseDic[alphabet][alphabet.charAt(i)] = i;\n    }\n  }\n  return baseReverseDic[alphabet][character];\n}\n\nvar LZString = {\n  compressToBase64 : function (input) {\n    if (input == null) return \"\";\n    var res = LZString._compress(input, 6, function(a){return keyStrBase64.charAt(a);});\n    switch (res.length % 4) { // To produce valid Base64\n    default: // When could this happen ?\n    case 0 : return res;\n    case 1 : return res+\"===\";\n    case 2 : return res+\"==\";\n    case 3 : return res+\"=\";\n    }\n  },\n\n  decompressFromBase64 : function (input) {\n    if (input == null) return \"\";\n    if (input == \"\") return null;\n    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrBase64, input.charAt(index)); });\n  },\n\n  compressToUTF16 : function (input) {\n    if (input == null) return \"\";\n    return LZString._compress(input, 15, function(a){return f(a+32);}) + \" \";\n  },\n\n  decompressFromUTF16: function (compressed) {\n    if (compressed == null) return \"\";\n    if (compressed == \"\") return null;\n    return LZString._decompress(compressed.length, 16384, function(index) { return compressed.charCodeAt(index) - 32; });\n  },\n\n  //compress into uint8array (UCS-2 big endian format)\n  compressToUint8Array: function (uncompressed) {\n    var compressed = LZString.compress(uncompressed);\n    var buf=new Uint8Array(compressed.length*2); // 2 bytes per character\n\n    for (var i=0, TotalLen=compressed.length; i<TotalLen; i++) {\n      var current_value = compressed.charCodeAt(i);\n      buf[i*2] = current_value >>> 8;\n      buf[i*2+1] = current_value % 256;\n    }\n    return buf;\n  },\n\n  //decompress from uint8array (UCS-2 big endian format)\n  decompressFromUint8Array:function (compressed) {\n    if (compressed===null || compressed===undefined){\n        return LZString.decompress(compressed);\n    } else {\n        var buf=new Array(compressed.length/2); // 2 bytes per character\n        for (var i=0, TotalLen=buf.length; i<TotalLen; i++) {\n          buf[i]=compressed[i*2]*256+compressed[i*2+1];\n        }\n\n        var result = [];\n        buf.forEach(function (c) {\n          result.push(f(c));\n        });\n        return LZString.decompress(result.join(''));\n\n    }\n\n  },\n\n\n  //compress into a string that is already URI encoded\n  compressToEncodedURIComponent: function (input) {\n    if (input == null) return \"\";\n    return LZString._compress(input, 6, function(a){return keyStrUriSafe.charAt(a);});\n  },\n\n  //decompress from an output of compressToEncodedURIComponent\n  decompressFromEncodedURIComponent:function (input) {\n    if (input == null) return \"\";\n    if (input == \"\") return null;\n    input = input.replace(/ /g, \"+\");\n    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrUriSafe, input.charAt(index)); });\n  },\n\n  compress: function (uncompressed) {\n    return LZString._compress(uncompressed, 16, function(a){return f(a);});\n  },\n  _compress: function (uncompressed, bitsPerChar, getCharFromInt) {\n    if (uncompressed == null) return \"\";\n    var i, value,\n        context_dictionary= {},\n        context_dictionaryToCreate= {},\n        context_c=\"\",\n        context_wc=\"\",\n        context_w=\"\",\n        context_enlargeIn= 2, // Compensate for the first entry which should not count\n        context_dictSize= 3,\n        context_numBits= 2,\n        context_data=[],\n        context_data_val=0,\n        context_data_position=0,\n        ii;\n\n    for (ii = 0; ii < uncompressed.length; ii += 1) {\n      context_c = uncompressed.charAt(ii);\n      if (!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)) {\n        context_dictionary[context_c] = context_dictSize++;\n        context_dictionaryToCreate[context_c] = true;\n      }\n\n      context_wc = context_w + context_c;\n      if (Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)) {\n        context_w = context_wc;\n      } else {\n        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {\n          if (context_w.charCodeAt(0)<256) {\n            for (i=0 ; i<context_numBits ; i++) {\n              context_data_val = (context_data_val << 1);\n              if (context_data_position == bitsPerChar-1) {\n                context_data_position = 0;\n                context_data.push(getCharFromInt(context_data_val));\n                context_data_val = 0;\n              } else {\n                context_data_position++;\n              }\n            }\n            value = context_w.charCodeAt(0);\n            for (i=0 ; i<8 ; i++) {\n              context_data_val = (context_data_val << 1) | (value&1);\n              if (context_data_position == bitsPerChar-1) {\n                context_data_position = 0;\n                context_data.push(getCharFromInt(context_data_val));\n                context_data_val = 0;\n              } else {\n                context_data_position++;\n              }\n              value = value >> 1;\n            }\n          } else {\n            value = 1;\n            for (i=0 ; i<context_numBits ; i++) {\n              context_data_val = (context_data_val << 1) | value;\n              if (context_data_position ==bitsPerChar-1) {\n                context_data_position = 0;\n                context_data.push(getCharFromInt(context_data_val));\n                context_data_val = 0;\n              } else {\n                context_data_position++;\n              }\n              value = 0;\n            }\n            value = context_w.charCodeAt(0);\n            for (i=0 ; i<16 ; i++) {\n              context_data_val = (context_data_val << 1) | (value&1);\n              if (context_data_position == bitsPerChar-1) {\n                context_data_position = 0;\n                context_data.push(getCharFromInt(context_data_val));\n                context_data_val = 0;\n              } else {\n                context_data_position++;\n              }\n              value = value >> 1;\n            }\n          }\n          context_enlargeIn--;\n          if (context_enlargeIn == 0) {\n            context_enlargeIn = Math.pow(2, context_numBits);\n            context_numBits++;\n          }\n          delete context_dictionaryToCreate[context_w];\n        } else {\n          value = context_dictionary[context_w];\n          for (i=0 ; i<context_numBits ; i++) {\n            context_data_val = (context_data_val << 1) | (value&1);\n            if (context_data_position == bitsPerChar-1) {\n              context_data_position = 0;\n              context_data.push(getCharFromInt(context_data_val));\n              context_data_val = 0;\n            } else {\n              context_data_position++;\n            }\n            value = value >> 1;\n          }\n\n\n        }\n        context_enlargeIn--;\n        if (context_enlargeIn == 0) {\n          context_enlargeIn = Math.pow(2, context_numBits);\n          context_numBits++;\n        }\n        // Add wc to the dictionary.\n        context_dictionary[context_wc] = context_dictSize++;\n        context_w = String(context_c);\n      }\n    }\n\n    // Output the code for w.\n    if (context_w !== \"\") {\n      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {\n        if (context_w.charCodeAt(0)<256) {\n          for (i=0 ; i<context_numBits ; i++) {\n            context_data_val = (context_data_val << 1);\n            if (context_data_position == bitsPerChar-1) {\n              context_data_position = 0;\n              context_data.push(getCharFromInt(context_data_val));\n              context_data_val = 0;\n            } else {\n              context_data_position++;\n            }\n          }\n          value = context_w.charCodeAt(0);\n          for (i=0 ; i<8 ; i++) {\n            context_data_val = (context_data_val << 1) | (value&1);\n            if (context_data_position == bitsPerChar-1) {\n              context_data_position = 0;\n              context_data.push(getCharFromInt(context_data_val));\n              context_data_val = 0;\n            } else {\n              context_data_position++;\n            }\n            value = value >> 1;\n          }\n        } else {\n          value = 1;\n          for (i=0 ; i<context_numBits ; i++) {\n            context_data_val = (context_data_val << 1) | value;\n            if (context_data_position == bitsPerChar-1) {\n              context_data_position = 0;\n              context_data.push(getCharFromInt(context_data_val));\n              context_data_val = 0;\n            } else {\n              context_data_position++;\n            }\n            value = 0;\n          }\n          value = context_w.charCodeAt(0);\n          for (i=0 ; i<16 ; i++) {\n            context_data_val = (context_data_val << 1) | (value&1);\n            if (context_data_position == bitsPerChar-1) {\n              context_data_position = 0;\n              context_data.push(getCharFromInt(context_data_val));\n              context_data_val = 0;\n            } else {\n              context_data_position++;\n            }\n            value = value >> 1;\n          }\n        }\n        context_enlargeIn--;\n        if (context_enlargeIn == 0) {\n          context_enlargeIn = Math.pow(2, context_numBits);\n          context_numBits++;\n        }\n        delete context_dictionaryToCreate[context_w];\n      } else {\n        value = context_dictionary[context_w];\n        for (i=0 ; i<context_numBits ; i++) {\n          context_data_val = (context_data_val << 1) | (value&1);\n          if (context_data_position == bitsPerChar-1) {\n            context_data_position = 0;\n            context_data.push(getCharFromInt(context_data_val));\n            context_data_val = 0;\n          } else {\n            context_data_position++;\n          }\n          value = value >> 1;\n        }\n\n\n      }\n      context_enlargeIn--;\n      if (context_enlargeIn == 0) {\n        context_enlargeIn = Math.pow(2, context_numBits);\n        context_numBits++;\n      }\n    }\n\n    // Mark the end of the stream\n    value = 2;\n    for (i=0 ; i<context_numBits ; i++) {\n      context_data_val = (context_data_val << 1) | (value&1);\n      if (context_data_position == bitsPerChar-1) {\n        context_data_position = 0;\n        context_data.push(getCharFromInt(context_data_val));\n        context_data_val = 0;\n      } else {\n        context_data_position++;\n      }\n      value = value >> 1;\n    }\n\n    // Flush the last char\n    while (true) {\n      context_data_val = (context_data_val << 1);\n      if (context_data_position == bitsPerChar-1) {\n        context_data.push(getCharFromInt(context_data_val));\n        break;\n      }\n      else context_data_position++;\n    }\n    return context_data.join('');\n  },\n\n  decompress: function (compressed) {\n    if (compressed == null) return \"\";\n    if (compressed == \"\") return null;\n    return LZString._decompress(compressed.length, 32768, function(index) { return compressed.charCodeAt(index); });\n  },\n\n  _decompress: function (length, resetValue, getNextValue) {\n    var dictionary = [],\n        next,\n        enlargeIn = 4,\n        dictSize = 4,\n        numBits = 3,\n        entry = \"\",\n        result = [],\n        i,\n        w,\n        bits, resb, maxpower, power,\n        c,\n        data = {val:getNextValue(0), position:resetValue, index:1};\n\n    for (i = 0; i < 3; i += 1) {\n      dictionary[i] = i;\n    }\n\n    bits = 0;\n    maxpower = Math.pow(2,2);\n    power=1;\n    while (power!=maxpower) {\n      resb = data.val & data.position;\n      data.position >>= 1;\n      if (data.position == 0) {\n        data.position = resetValue;\n        data.val = getNextValue(data.index++);\n      }\n      bits |= (resb>0 ? 1 : 0) * power;\n      power <<= 1;\n    }\n\n    switch (next = bits) {\n      case 0:\n          bits = 0;\n          maxpower = Math.pow(2,8);\n          power=1;\n          while (power!=maxpower) {\n            resb = data.val & data.position;\n            data.position >>= 1;\n            if (data.position == 0) {\n              data.position = resetValue;\n              data.val = getNextValue(data.index++);\n            }\n            bits |= (resb>0 ? 1 : 0) * power;\n            power <<= 1;\n          }\n        c = f(bits);\n        break;\n      case 1:\n          bits = 0;\n          maxpower = Math.pow(2,16);\n          power=1;\n          while (power!=maxpower) {\n            resb = data.val & data.position;\n            data.position >>= 1;\n            if (data.position == 0) {\n              data.position = resetValue;\n              data.val = getNextValue(data.index++);\n            }\n            bits |= (resb>0 ? 1 : 0) * power;\n            power <<= 1;\n          }\n        c = f(bits);\n        break;\n      case 2:\n        return \"\";\n    }\n    dictionary[3] = c;\n    w = c;\n    result.push(c);\n    while (true) {\n      if (data.index > length) {\n        return \"\";\n      }\n\n      bits = 0;\n      maxpower = Math.pow(2,numBits);\n      power=1;\n      while (power!=maxpower) {\n        resb = data.val & data.position;\n        data.position >>= 1;\n        if (data.position == 0) {\n          data.position = resetValue;\n          data.val = getNextValue(data.index++);\n        }\n        bits |= (resb>0 ? 1 : 0) * power;\n        power <<= 1;\n      }\n\n      switch (c = bits) {\n        case 0:\n          bits = 0;\n          maxpower = Math.pow(2,8);\n          power=1;\n          while (power!=maxpower) {\n            resb = data.val & data.position;\n            data.position >>= 1;\n            if (data.position == 0) {\n              data.position = resetValue;\n              data.val = getNextValue(data.index++);\n            }\n            bits |= (resb>0 ? 1 : 0) * power;\n            power <<= 1;\n          }\n\n          dictionary[dictSize++] = f(bits);\n          c = dictSize-1;\n          enlargeIn--;\n          break;\n        case 1:\n          bits = 0;\n          maxpower = Math.pow(2,16);\n          power=1;\n          while (power!=maxpower) {\n            resb = data.val & data.position;\n            data.position >>= 1;\n            if (data.position == 0) {\n              data.position = resetValue;\n              data.val = getNextValue(data.index++);\n            }\n            bits |= (resb>0 ? 1 : 0) * power;\n            power <<= 1;\n          }\n          dictionary[dictSize++] = f(bits);\n          c = dictSize-1;\n          enlargeIn--;\n          break;\n        case 2:\n          return result.join('');\n      }\n\n      if (enlargeIn == 0) {\n        enlargeIn = Math.pow(2, numBits);\n        numBits++;\n      }\n\n      if (dictionary[c]) {\n        entry = dictionary[c];\n      } else {\n        if (c === dictSize) {\n          entry = w + w.charAt(0);\n        } else {\n          return null;\n        }\n      }\n      result.push(entry);\n\n      // Add w+entry[0] to the dictionary.\n      dictionary[dictSize++] = w + entry.charAt(0);\n      enlargeIn--;\n\n      w = entry;\n\n      if (enlargeIn == 0) {\n        enlargeIn = Math.pow(2, numBits);\n        numBits++;\n      }\n\n    }\n  }\n};\n  return LZString;\n})();\n\nif (true) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return LZString; }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {}\n\n\n//# sourceURL=webpack:///./node_modules/lz-string/libs/lz-string.js?");

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