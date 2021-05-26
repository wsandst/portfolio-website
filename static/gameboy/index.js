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
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/gb_emulator_web_bg.wasm":"482eb03e3446fc0d1e01"}[wasmModuleId] + ".module.wasm");
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

eval("const canvas = document.getElementById(\"screen-canvas\");\nvar FileSaver = __webpack_require__(/*! file-saver */ \"./node_modules/file-saver/dist/FileSaver.min.js\");\ncanvas.height = 144;\ncanvas.width = 160;\n\nconst ctx = canvas.getContext('2d');\n\nemulator = null;\nemulatorPaused = false;\nemulatorSpeedup = false;\ndisplayDebugInfo = true;\n\n// Class for displaying various debug info\nconst debugInfo = new class {\n  constructor() {\n    this.fps = document.getElementById(\"debug-info\");\n    this.frames = [];\n    this.lastFrameTimeStamp = performance.now();\n  }\n\n  update(multiplier) {\n    if (displayDebugInfo) {\n      // Convert the delta time since the last frame render into a measure\n      // of frames per second.\n      const now = performance.now();\n      const delta = now - this.lastFrameTimeStamp;\n      this.lastFrameTimeStamp = now;\n      const fps = 1 / delta * 1000;\n\n      // Save only the latest 100 timings.\n      this.frames.push(fps);\n      if (this.frames.length > 100) {\n        this.frames.shift();\n      }\n\n      let sum = 0;\n      for (let i = 0; i < this.frames.length; i++) {\n        sum += this.frames[i];\n      }\n      let mean = sum / this.frames.length;\n\n      // Render the statistics.\n      this.fps.textContent = `FPS: ${Math.round(fps)*multiplier}, mean: ${Math.round(mean)*multiplier}`.trim();\n      }\n      else {\n        this.fps.textContent = \"\";\n      }\n    }\n};\n\n// Init the emulator and load from WASM\nconst runEmulator = (data, isRomfile, isSavefile) => {\n  __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./node_modules/gb-emulator-web/gb_emulator_web.js */ \"../pkg/gb_emulator_web.js\")).then((em) => {\n    const ctx = canvas.getContext('2d');\n\n    emulator = em.EmulatorWrapper.new();\n    if (isRomfile) {\n      emulator.load_rom(data);\n    }\n    else if (isSavefile) {\n      emulator.load_save(data);\n    }\n\n    window.addEventListener(\"keydown\", keyDownInput, true);\n    window.addEventListener(\"keyup\", keyUpInput, true);\n\n    initAudio();\n    renderLoop(emulator)\n  });\n}\n\n// Main render loop\nconst renderLoop = () => {\n  var framesRun = 0;\n  if (!emulatorPaused) {\n    if (!emulatorSpeedup) {\n      while (emulator.run_until_frontend_event() != 0) {\n        buffer = emulator.get_sound_queue();\n        pushAudioSamples(buffer);\n      }\n      framesRun++;\n    }\n    else {\n      // Run in speedup mode.\n      // Allow emulator to run as much as it can during one frametime\n      const start = performance.now();\n      var delta = 0;\n      while (delta <= (1.0/60.0)*1000) {\n        emulator.run_until_frontend_event();\n        delta = (performance.now() - start);\n        framesRun++;\n      }\n    }\n\n    pixels = new Uint8ClampedArray(emulator.get_screen_bitmap());\n    const imageData = new ImageData(pixels, canvas.width, canvas.height);\n    ctx.putImageData(imageData, 0, 0);\n\n  }\n  requestAnimationFrame(renderLoop);\n  debugInfo.update(framesRun);\n};\n\nfunction keyDownInput(event) {\n    if (event.defaultPrevented) {\n      return; // Do nothing if event already handled\n    }\n\n    switch(event.code) {\n      // Gameboy controls\n      case \"KeyS\":\n      case \"ArrowDown\":\n        emulator.press_key_down();\n        break;\n      case \"KeyW\":\n      case \"ArrowUp\":\n        emulator.press_key_up();\n        break;\n      case \"KeyA\":\n      case \"ArrowLeft\":\n        emulator.press_key_left();\n        break;\n      case \"KeyD\":\n      case \"ArrowRight\":\n        emulator.press_key_right();\n        break;\n      case \"KeyZ\":\n      case \"Space\":\n        emulator.press_key_a();\n        break;\n      case \"KeyX\":\n      case \"ShiftLeft\":\n        emulator.press_key_b();\n        break;\n      case \"Enter\":\n        emulator.press_key_start();\n        break;\n      case \"Backspace\":\n        emulator.press_key_start();\n        break;\n      // Emulator state controls\n      case \"KeyP\":\n        emulatorPaused = !emulatorPaused;\n        break;\n      case \"KeyM\":\n        displayDebugInfo = !displayDebugInfo;\n        break;\n      case \"ControlLeft\":\n        emulatorSpeedup = !emulatorSpeedup;\n        break;\n      case \"KeyN\":\n        emulatorPaused = true;\n        saveEmulatorToFile('gbsave');\n        emulatorPaused = false;\n        break;\n    }\n  \n    // Consume the event so it doesn't get handled twice\n    event.preventDefault();\n}\n\nfunction keyUpInput(event) {\n  if (event.defaultPrevented) {\n    return; // Do nothing if event already handled\n  }\n  switch(event.code) {\n    case \"KeyS\":\n    case \"ArrowDown\":\n      emulator.clear_key_down();\n      break;\n    case \"KeyW\":\n    case \"ArrowUp\":\n      emulator.clear_key_up();\n      break;\n    case \"KeyA\":\n    case \"ArrowLeft\":\n      emulator.clear_key_left();\n      break;\n    case \"KeyD\":\n    case \"ArrowRight\":\n      emulator.clear_key_right();\n      break;\n    case \"KeyZ\":\n    case \"Space\":\n      emulator.clear_key_a();\n      break;\n    case \"KeyX\":\n    case \"ControlLeft\":\n      emulator.clear_key_b();\n      break;\n    case \"Enter\":\n      emulator.clear_key_start();\n      break;\n    case \"Backspace\":\n      emulator.clear_key_start();\n      break;\n  }\n\n  // Consume the event so it doesn't get handled twice\n  event.preventDefault();\n}\n\nfunction loadFileToEmulator(file) {\n  // Check that extension is .gb or .bin\n  var isRomfile = file.name.endsWith('.gb') || file.name.endsWith('.bin');\n  var isSavefile = file.name.endsWith('.save');\n  if (!isRomfile && !isSavefile){ \n    console.log(\"Error: File type is not .gb or .save\")\n    return; \n  }\n\n  fileData = new Blob([file]);\n  var promise = new Promise(getFileBuffer(fileData));\n  promise.then(function(data) {\n    runEmulator(data, isRomfile, isSavefile);\n  }).catch(function(err) {\n    console.log('Error: ',err);\n  });\n  // access files via fileList\n}\n\n// File related code\n\nfunction dropFile(event) {\n  event.stopPropagation();\n  event.preventDefault();\n\n  var fileList = event.dataTransfer.files;\n  const file = fileList[0];\n  loadFileToEmulator(file);\n}\n\nfunction dragOverFile(event) {\n  event.stopPropagation();\n  event.preventDefault();\n  event.dataTransfer.dropEffect = 'copy';\n}\n\nfunction getFileBuffer(fileData) {\n  return function(resolve) {\n      var reader = new FileReader();\n      reader.readAsArrayBuffer(fileData);\n      reader.onload = function() {\n        var arrayBuffer = reader.result\n        var bytes = new Uint8Array(arrayBuffer);\n        resolve(bytes);\n    }\n  }\n}\n\nvar dropZone = document.getElementById(\"main\");\ndropZone.addEventListener(\"dragover\", dragOverFile, false);\ndropZone.addEventListener(\"drop\"    , dropFile, false);\n\ndropZone.addEventListener(\"drop\"    , dropFile, false);\n\nvar input = document.getElementById('file-input');\n\ninput.onchange = e => { \n   var file = e.target.files[0]; \n   loadFileToEmulator(file);\n}\n\nfunction saveEmulatorToFile(filename) {\n  var isoDateString = new Date().toISOString().split(\".\")[0];\n  data = new Uint8ClampedArray(emulator.save());\n  var blob = new Blob([data], {type: \"data:application/octet-stream\"});\n  FileSaver.saveAs(blob, filename+isoDateString+\".save\");\n}\n\n// Audio related code\n\nlet audioContext = null;\nlet audioStartTimestamp = null;\nlet audioDelay = 0.05;\nlet i = 0;\nlet currentSampleIndex = 0;\n\n\n// Push audio samples to the audio queue\n// This uses AudioNodeBuffers\nfunction pushAudioSamples(sampleBuffer) {\n  var audioBuffer = audioContext.createBuffer(1, 1024, 48000);\n  var pcmBuffer = audioBuffer.getChannelData(0);\n  for (let i = 0; i < audioBuffer.length; i++) {\n    pcmBuffer[i] = sampleBuffer[i]\n  }\n  var source = audioContext.createBufferSource();\n  source.buffer = audioBuffer;\n  source.connect(audioContext.destination);\n  // start the source playing\n  currentTime = performance.now();\n  playbackTime = currentSampleIndex * 1024/48000.0 + audioDelay;\n  actualTime = performance.now() - audioStartTimestamp;\n  if (actualTime > playbackTime*1000) {\n    console.log(\"Audio falling behind! Creating audio gap\");\n    var offset = actualTime/1000.0 - playbackTime + 0.1;\n    audioDelay += offset;\n    playbackTime += offset;\n  }\n  source.start(playbackTime);\n  source.stop(playbackTime+1024/48000.0);\n  currentSampleIndex += 1;\n}\n\n// Init the audio context\nfunction initAudio() {\n  audioContext = new AudioContext();\n  audioStartTimestamp = performance.now();\n  console.log(\"Audio Latency: \", audioContext.baseLatency);\n}\n\n//# sourceURL=webpack:///./index.js?");

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