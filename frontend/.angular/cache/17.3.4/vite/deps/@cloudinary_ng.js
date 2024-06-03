import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  VERSION,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener
} from "./chunk-G5XZC5CZ.js";
import "./chunk-J4B6MK7R.js";

// node_modules/@cloudinary/html/index.esm.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var lodash_clonedeep = { exports: {} };
(function(module2, exports2) {
  var LARGE_ARRAY_SIZE3 = 200;
  var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag3 = "[object Arguments]", arrayTag3 = "[object Array]", boolTag3 = "[object Boolean]", dateTag3 = "[object Date]", errorTag3 = "[object Error]", funcTag3 = "[object Function]", genTag3 = "[object GeneratorFunction]", mapTag3 = "[object Map]", numberTag3 = "[object Number]", objectTag3 = "[object Object]", promiseTag3 = "[object Promise]", regexpTag3 = "[object RegExp]", setTag3 = "[object Set]", stringTag3 = "[object String]", symbolTag4 = "[object Symbol]", weakMapTag3 = "[object WeakMap]";
  var arrayBufferTag3 = "[object ArrayBuffer]", dataViewTag3 = "[object DataView]", float32Tag3 = "[object Float32Array]", float64Tag3 = "[object Float64Array]", int8Tag3 = "[object Int8Array]", int16Tag3 = "[object Int16Array]", int32Tag3 = "[object Int32Array]", uint8Tag3 = "[object Uint8Array]", uint8ClampedTag3 = "[object Uint8ClampedArray]", uint16Tag3 = "[object Uint16Array]", uint32Tag3 = "[object Uint32Array]";
  var reRegExpChar3 = /[\\^$.*+?()[\]{}|]/g;
  var reFlags = /\w*$/;
  var reIsHostCtor3 = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var cloneableTags3 = {};
  cloneableTags3[argsTag3] = cloneableTags3[arrayTag3] = cloneableTags3[arrayBufferTag3] = cloneableTags3[dataViewTag3] = cloneableTags3[boolTag3] = cloneableTags3[dateTag3] = cloneableTags3[float32Tag3] = cloneableTags3[float64Tag3] = cloneableTags3[int8Tag3] = cloneableTags3[int16Tag3] = cloneableTags3[int32Tag3] = cloneableTags3[mapTag3] = cloneableTags3[numberTag3] = cloneableTags3[objectTag3] = cloneableTags3[regexpTag3] = cloneableTags3[setTag3] = cloneableTags3[stringTag3] = cloneableTags3[symbolTag4] = cloneableTags3[uint8Tag3] = cloneableTags3[uint8ClampedTag3] = cloneableTags3[uint16Tag3] = cloneableTags3[uint32Tag3] = true;
  cloneableTags3[errorTag3] = cloneableTags3[funcTag3] = cloneableTags3[weakMapTag3] = false;
  var freeGlobal4 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf4 = typeof self == "object" && self && self.Object === Object && self;
  var root4 = freeGlobal4 || freeSelf4 || Function("return this")();
  var freeExports3 = exports2 && !exports2.nodeType && exports2;
  var freeModule3 = freeExports3 && true && module2 && !module2.nodeType && module2;
  var moduleExports3 = freeModule3 && freeModule3.exports === freeExports3;
  function addMapEntry(map, pair) {
    map.set(pair[0], pair[1]);
    return map;
  }
  function addSetEntry(set, value) {
    set.add(value);
    return set;
  }
  function arrayEach(array, iteratee) {
    var index = -1, length = array ? array.length : 0;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }
  function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1, length = array ? array.length : 0;
    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function getValue3(object, key) {
    return object == null ? void 0 : object[key];
  }
  function isHostObject3(value) {
    var result = false;
    if (value != null && typeof value.toString != "function") {
      try {
        result = !!(value + "");
      } catch (e) {
      }
    }
    return result;
  }
  function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  function overArg3(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var arrayProto3 = Array.prototype, funcProto3 = Function.prototype, objectProto4 = Object.prototype;
  var coreJsData3 = root4["__core-js_shared__"];
  var maskSrcKey3 = function() {
    var uid = /[^.]+$/.exec(coreJsData3 && coreJsData3.keys && coreJsData3.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  var funcToString3 = funcProto3.toString;
  var hasOwnProperty3 = objectProto4.hasOwnProperty;
  var objectToString4 = objectProto4.toString;
  var reIsNative3 = RegExp(
    "^" + funcToString3.call(hasOwnProperty3).replace(reRegExpChar3, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  var Buffer3 = moduleExports3 ? root4.Buffer : void 0, Symbol4 = root4.Symbol, Uint8Array3 = root4.Uint8Array, getPrototype3 = overArg3(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable3 = objectProto4.propertyIsEnumerable, splice3 = arrayProto3.splice;
  var nativeGetSymbols3 = Object.getOwnPropertySymbols, nativeIsBuffer3 = Buffer3 ? Buffer3.isBuffer : void 0, nativeKeys3 = overArg3(Object.keys, Object);
  var DataView3 = getNative3(root4, "DataView"), Map4 = getNative3(root4, "Map"), Promise4 = getNative3(root4, "Promise"), Set3 = getNative3(root4, "Set"), WeakMap3 = getNative3(root4, "WeakMap"), nativeCreate3 = getNative3(Object, "create");
  var dataViewCtorString3 = toSource3(DataView3), mapCtorString3 = toSource3(Map4), promiseCtorString3 = toSource3(Promise4), setCtorString3 = toSource3(Set3), weakMapCtorString3 = toSource3(WeakMap3);
  var symbolProto3 = Symbol4 ? Symbol4.prototype : void 0, symbolValueOf3 = symbolProto3 ? symbolProto3.valueOf : void 0;
  function Hash3(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function hashClear3() {
    this.__data__ = nativeCreate3 ? nativeCreate3(null) : {};
  }
  function hashDelete3(key) {
    return this.has(key) && delete this.__data__[key];
  }
  function hashGet3(key) {
    var data = this.__data__;
    if (nativeCreate3) {
      var result = data[key];
      return result === HASH_UNDEFINED3 ? void 0 : result;
    }
    return hasOwnProperty3.call(data, key) ? data[key] : void 0;
  }
  function hashHas3(key) {
    var data = this.__data__;
    return nativeCreate3 ? data[key] !== void 0 : hasOwnProperty3.call(data, key);
  }
  function hashSet3(key, value) {
    var data = this.__data__;
    data[key] = nativeCreate3 && value === void 0 ? HASH_UNDEFINED3 : value;
    return this;
  }
  Hash3.prototype.clear = hashClear3;
  Hash3.prototype["delete"] = hashDelete3;
  Hash3.prototype.get = hashGet3;
  Hash3.prototype.has = hashHas3;
  Hash3.prototype.set = hashSet3;
  function ListCache3(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function listCacheClear3() {
    this.__data__ = [];
  }
  function listCacheDelete3(key) {
    var data = this.__data__, index = assocIndexOf3(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice3.call(data, index, 1);
    }
    return true;
  }
  function listCacheGet3(key) {
    var data = this.__data__, index = assocIndexOf3(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  function listCacheHas3(key) {
    return assocIndexOf3(this.__data__, key) > -1;
  }
  function listCacheSet3(key, value) {
    var data = this.__data__, index = assocIndexOf3(data, key);
    if (index < 0) {
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  ListCache3.prototype.clear = listCacheClear3;
  ListCache3.prototype["delete"] = listCacheDelete3;
  ListCache3.prototype.get = listCacheGet3;
  ListCache3.prototype.has = listCacheHas3;
  ListCache3.prototype.set = listCacheSet3;
  function MapCache3(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function mapCacheClear3() {
    this.__data__ = {
      "hash": new Hash3(),
      "map": new (Map4 || ListCache3)(),
      "string": new Hash3()
    };
  }
  function mapCacheDelete3(key) {
    return getMapData3(this, key)["delete"](key);
  }
  function mapCacheGet3(key) {
    return getMapData3(this, key).get(key);
  }
  function mapCacheHas3(key) {
    return getMapData3(this, key).has(key);
  }
  function mapCacheSet3(key, value) {
    getMapData3(this, key).set(key, value);
    return this;
  }
  MapCache3.prototype.clear = mapCacheClear3;
  MapCache3.prototype["delete"] = mapCacheDelete3;
  MapCache3.prototype.get = mapCacheGet3;
  MapCache3.prototype.has = mapCacheHas3;
  MapCache3.prototype.set = mapCacheSet3;
  function Stack3(entries) {
    this.__data__ = new ListCache3(entries);
  }
  function stackClear3() {
    this.__data__ = new ListCache3();
  }
  function stackDelete3(key) {
    return this.__data__["delete"](key);
  }
  function stackGet3(key) {
    return this.__data__.get(key);
  }
  function stackHas3(key) {
    return this.__data__.has(key);
  }
  function stackSet3(key, value) {
    var cache = this.__data__;
    if (cache instanceof ListCache3) {
      var pairs = cache.__data__;
      if (!Map4 || pairs.length < LARGE_ARRAY_SIZE3 - 1) {
        pairs.push([key, value]);
        return this;
      }
      cache = this.__data__ = new MapCache3(pairs);
    }
    cache.set(key, value);
    return this;
  }
  Stack3.prototype.clear = stackClear3;
  Stack3.prototype["delete"] = stackDelete3;
  Stack3.prototype.get = stackGet3;
  Stack3.prototype.has = stackHas3;
  Stack3.prototype.set = stackSet3;
  function arrayLikeKeys(value, inherited) {
    var result = isArray3(value) || isArguments(value) ? baseTimes(value.length, String) : [];
    var length = result.length, skipIndexes = !!length;
    for (var key in value) {
      if ((inherited || hasOwnProperty3.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty3.call(object, key) && eq3(objValue, value)) || value === void 0 && !(key in object)) {
      object[key] = value;
    }
  }
  function assocIndexOf3(array, key) {
    var length = array.length;
    while (length--) {
      if (eq3(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  function baseAssign(object, source3) {
    return object && copyObject(source3, keys(source3), object);
  }
  function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
    var result;
    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== void 0) {
      return result;
    }
    if (!isObject6(value)) {
      return value;
    }
    var isArr = isArray3(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag3(value), isFunc = tag == funcTag3 || tag == genTag3;
      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag3 || tag == argsTag3 || isFunc && !object) {
        if (isHostObject3(value)) {
          return object ? value : {};
        }
        result = initCloneObject(isFunc ? {} : value);
        if (!isDeep) {
          return copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags3[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, baseClone, isDeep);
      }
    }
    stack || (stack = new Stack3());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (!isArr) {
      var props = isFull ? getAllKeys(value) : keys(value);
    }
    arrayEach(props || value, function(subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value[key2];
      }
      assignValue(result, key2, baseClone(subValue, isDeep, isFull, customizer, key2, value, stack));
    });
    return result;
  }
  function baseCreate(proto) {
    return isObject6(proto) ? objectCreate(proto) : {};
  }
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray3(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  function baseGetTag3(value) {
    return objectToString4.call(value);
  }
  function baseIsNative3(value) {
    if (!isObject6(value) || isMasked3(value)) {
      return false;
    }
    var pattern = isFunction5(value) || isHostObject3(value) ? reIsNative3 : reIsHostCtor3;
    return pattern.test(toSource3(value));
  }
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys3(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty3.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var result = new buffer.constructor(buffer.length);
    buffer.copy(result);
    return result;
  }
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array3(result).set(new Uint8Array3(arrayBuffer));
    return result;
  }
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  function cloneMap(map, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
    return arrayReduce(array, addMapEntry, new map.constructor());
  }
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  function cloneSet(set, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
    return arrayReduce(array, addSetEntry, new set.constructor());
  }
  function cloneSymbol(symbol) {
    return symbolValueOf3 ? Object(symbolValueOf3.call(symbol)) : {};
  }
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  function copyArray(source3, array) {
    var index = -1, length = source3.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source3[index];
    }
    return array;
  }
  function copyObject(source3, props, object, customizer) {
    object || (object = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source3[key], key, object, source3) : void 0;
      assignValue(object, key, newValue === void 0 ? source3[key] : newValue);
    }
    return object;
  }
  function copySymbols(source3, object) {
    return copyObject(source3, getSymbols3(source3), object);
  }
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols3);
  }
  function getMapData3(map, key) {
    var data = map.__data__;
    return isKeyable3(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function getNative3(object, key) {
    var value = getValue3(object, key);
    return baseIsNative3(value) ? value : void 0;
  }
  var getSymbols3 = nativeGetSymbols3 ? overArg3(nativeGetSymbols3, Object) : stubArray3;
  var getTag3 = baseGetTag3;
  if (DataView3 && getTag3(new DataView3(new ArrayBuffer(1))) != dataViewTag3 || Map4 && getTag3(new Map4()) != mapTag3 || Promise4 && getTag3(Promise4.resolve()) != promiseTag3 || Set3 && getTag3(new Set3()) != setTag3 || WeakMap3 && getTag3(new WeakMap3()) != weakMapTag3) {
    getTag3 = function(value) {
      var result = objectToString4.call(value), Ctor = result == objectTag3 ? value.constructor : void 0, ctorString = Ctor ? toSource3(Ctor) : void 0;
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString3:
            return dataViewTag3;
          case mapCtorString3:
            return mapTag3;
          case promiseCtorString3:
            return promiseTag3;
          case setCtorString3:
            return setTag3;
          case weakMapCtorString3:
            return weakMapTag3;
        }
      }
      return result;
    };
  }
  function initCloneArray(array) {
    var length = array.length, result = array.constructor(length);
    if (length && typeof array[0] == "string" && hasOwnProperty3.call(array, "index")) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype3(object)) : {};
  }
  function initCloneByTag(object, tag, cloneFunc, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag3:
        return cloneArrayBuffer(object);
      case boolTag3:
      case dateTag3:
        return new Ctor(+object);
      case dataViewTag3:
        return cloneDataView(object, isDeep);
      case float32Tag3:
      case float64Tag3:
      case int8Tag3:
      case int16Tag3:
      case int32Tag3:
      case uint8Tag3:
      case uint8ClampedTag3:
      case uint16Tag3:
      case uint32Tag3:
        return cloneTypedArray(object, isDeep);
      case mapTag3:
        return cloneMap(object, isDeep, cloneFunc);
      case numberTag3:
      case stringTag3:
        return new Ctor(object);
      case regexpTag3:
        return cloneRegExp(object);
      case setTag3:
        return cloneSet(object, isDeep, cloneFunc);
      case symbolTag4:
        return cloneSymbol(object);
    }
  }
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function isKeyable3(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function isMasked3(func) {
    return !!maskSrcKey3 && maskSrcKey3 in func;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto4;
    return value === proto;
  }
  function toSource3(func) {
    if (func != null) {
      try {
        return funcToString3.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  function cloneDeep4(value) {
    return baseClone(value, true, true);
  }
  function eq3(value, other) {
    return value === other || value !== value && other !== other;
  }
  function isArguments(value) {
    return isArrayLikeObject(value) && hasOwnProperty3.call(value, "callee") && (!propertyIsEnumerable3.call(value, "callee") || objectToString4.call(value) == argsTag3);
  }
  var isArray3 = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction5(value);
  }
  function isArrayLikeObject(value) {
    return isObjectLike2(value) && isArrayLike(value);
  }
  var isBuffer = nativeIsBuffer3 || stubFalse;
  function isFunction5(value) {
    var tag = isObject6(value) ? objectToString4.call(value) : "";
    return tag == funcTag3 || tag == genTag3;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject6(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
  }
  function isObjectLike2(value) {
    return !!value && typeof value == "object";
  }
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  function stubArray3() {
    return [];
  }
  function stubFalse() {
    return false;
  }
  module2.exports = cloneDeep4;
})(lodash_clonedeep, lodash_clonedeep.exports);
var cloneDeep = lodash_clonedeep.exports;
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function render(element, pluginCloudinaryAsset, plugins, pluginState, analyticsOptions) {
  return __awaiter(this, void 0, void 0, function() {
    var response, i;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (plugins === void 0)
            return [
              2
              /*return*/
            ];
          i = 0;
          _a.label = 1;
        case 1:
          if (!(i < plugins.length))
            return [3, 4];
          return [4, plugins[i](element, pluginCloudinaryAsset, pluginState, analyticsOptions, plugins)];
        case 2:
          response = _a.sent();
          if (response === "canceled") {
            return [3, 4];
          }
          _a.label = 3;
        case 3:
          i++;
          return [3, 1];
        case 4:
          if (response !== "canceled") {
            return [2, response];
          }
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
var getAnalyticsOptions = function(options, features) {
  if (features === void 0) {
    features = {};
  }
  return options ? {
    trackedAnalytics: __assign({ sdkCode: options.sdkCode, sdkSemver: options.sdkSemver, techVersion: options.techVersion }, features)
  } : null;
};
var HtmlImageLayer = (
  /** @class */
  function() {
    function HtmlImageLayer2(element, userCloudinaryImage, plugins, baseAnalyticsOptions) {
      var _this = this;
      this.isMounted = true;
      this.imgElement = element;
      this.htmlPluginState = { cleanupCallbacks: [], pluginEventSubscription: [] };
      var pluginCloudinaryImage = cloneDeep(userCloudinaryImage);
      render(element, pluginCloudinaryImage, plugins, this.htmlPluginState, baseAnalyticsOptions).then(function(pluginResponse) {
        if (!_this.isMounted) {
          return;
        }
        _this.htmlPluginState.pluginEventSubscription.forEach(function(fn) {
          fn();
        });
        var analyticsOptions = getAnalyticsOptions(baseAnalyticsOptions, pluginResponse);
        _this.imgElement.setAttribute("src", pluginCloudinaryImage.toURL(analyticsOptions));
      });
    }
    HtmlImageLayer2.prototype.update = function(userCloudinaryImage, plugins, baseAnalyticsOptions) {
      var _this = this;
      var pluginCloudinaryImage = cloneDeep(userCloudinaryImage);
      render(this.imgElement, pluginCloudinaryImage, plugins, this.htmlPluginState).then(function(pluginResponse) {
        if (!_this.isMounted) {
          return;
        }
        var featuredAnalyticsOptions = getAnalyticsOptions(baseAnalyticsOptions, pluginResponse);
        _this.imgElement.setAttribute("src", pluginCloudinaryImage.toURL(featuredAnalyticsOptions));
      });
    };
    HtmlImageLayer2.prototype.unmount = function() {
      this.isMounted = false;
    };
    return HtmlImageLayer2;
  }()
);
var QualifierValue = class {
  /**
   *
   * @param {QualifierValue | QualifierValue[] | any[] | string | number}qualifierValue
   */
  constructor(qualifierValue) {
    this.values = [];
    this.delimiter = ":";
    if (this.hasValue(qualifierValue)) {
      this.addValue(qualifierValue);
    }
  }
  /**
   * @description Joins the provided values with the provided delimiter
   */
  toString() {
    return this.values.join(this.delimiter);
  }
  /**
   * @description Checks if the provided argument has a value
   * @param {any} v
   * @private
   * @return {boolean}
   */
  hasValue(v) {
    return typeof v !== "undefined" && v !== null && v !== "";
  }
  /**
   * @desc Adds a value for the this qualifier instance
   * @param {any} value
   * @return {this}
   */
  addValue(value) {
    if (Array.isArray(value)) {
      this.values = this.values.concat(value);
    } else {
      this.values.push(value);
    }
    this.values = this.values.filter((v) => this.hasValue(v));
    return this;
  }
  /**
   * @description Sets the delimiter for this instance
   * @param delimiter
   */
  setDelimiter(delimiter) {
    this.delimiter = delimiter;
    return this;
  }
};
var UnsupportedError = class extends Error {
  constructor(message = "Unsupported") {
    super(message);
  }
};
function createUnsupportedError(message) {
  return new UnsupportedError(message);
}
function qualifierToJson() {
  return this._qualifierModel || { error: createUnsupportedError(`unsupported qualifier ${this.constructor.name}`) };
}
var QualifierModel = class {
  constructor() {
    this._qualifierModel = {};
  }
  toJson() {
    return qualifierToJson.apply(this);
  }
};
var Qualifier = class extends QualifierModel {
  constructor(key, qualifierValue) {
    super();
    this.delimiter = "_";
    this.key = key;
    if (qualifierValue instanceof QualifierValue) {
      this.qualifierValue = qualifierValue;
    } else {
      this.qualifierValue = new QualifierValue();
      this.qualifierValue.addValue(qualifierValue);
    }
  }
  toString() {
    const { key, delimiter, qualifierValue } = this;
    return `${key}${delimiter}${qualifierValue.toString()}`;
  }
  addValue(value) {
    this.qualifierValue.addValue(value);
    return this;
  }
};
var FlagQualifier = class extends Qualifier {
  constructor(flagType, flagValue) {
    let qualifierValue;
    if (flagValue) {
      qualifierValue = new QualifierValue([flagType, `${flagValue}`]).setDelimiter(":");
    } else {
      qualifierValue = flagType;
    }
    super("fl", qualifierValue);
    this.flagValue = flagValue;
  }
  toString() {
    return super.toString().replace(/\./, "%2E");
  }
  getFlagValue() {
    return this.flagValue;
  }
};
function mapToSortedArray(map, flags) {
  const array = Array.from(map.entries());
  flags.forEach((flag) => {
    array.push(["fl", flag]);
  });
  return array.sort().map((v) => v[1]);
}
function actionToJson() {
  var _a, _b, _c;
  const actionModelIsNotEmpty = this._actionModel && Object.keys(this._actionModel).length;
  const sourceTransformationError = (_c = (_b = (_a = this._actionModel) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.transformation) === null || _c === void 0 ? void 0 : _c.error;
  if (sourceTransformationError && sourceTransformationError instanceof Error) {
    return { error: sourceTransformationError };
  }
  if (actionModelIsNotEmpty) {
    return this._actionModel;
  }
  return { error: createUnsupportedError(`unsupported action ${this.constructor.name}`) };
}
var ActionModel = class {
  constructor() {
    this._actionModel = {};
  }
  toJson() {
    return actionToJson.apply(this);
  }
};
var Action = class extends ActionModel {
  constructor() {
    super(...arguments);
    this.qualifiers = /* @__PURE__ */ new Map();
    this.flags = [];
    this.delimiter = ",";
    this.actionTag = "";
  }
  prepareQualifiers() {
  }
  /**
   * @description Returns the custom name tag that was given to this action
   * @return {string}
   */
  getActionTag() {
    return this.actionTag;
  }
  /**
   * @description Sets the custom name tag for this action
   * @return {this}
   */
  setActionTag(tag) {
    this.actionTag = tag;
    return this;
  }
  /**
   * @description Calls toString() on all child qualifiers (implicitly by using .join()).
   * @return {string}
   */
  toString() {
    this.prepareQualifiers();
    return mapToSortedArray(this.qualifiers, this.flags).join(this.delimiter);
  }
  /**
   * @description Adds the parameter to the action.
   * @param {SDK.Qualifier} qualifier
   * @return {this}
   */
  addQualifier(qualifier) {
    if (typeof qualifier === "string") {
      const [key, value] = qualifier.toLowerCase().split("_");
      if (key === "fl") {
        this.flags.push(new FlagQualifier(value));
      } else {
        this.qualifiers.set(key, new Qualifier(key, value));
      }
    } else {
      this.qualifiers.set(qualifier.key, qualifier);
    }
    return this;
  }
  /**
   * @description Adds a flag to the current action.
   * @param {Qualifiers.Flag} flag
   * @return {this}
   */
  addFlag(flag) {
    if (typeof flag === "string") {
      this.flags.push(new FlagQualifier(flag));
    } else {
      if (flag instanceof FlagQualifier) {
        this.flags.push(flag);
      }
    }
    return this;
  }
  addValueToQualifier(qualifierKey, qualifierValue) {
    this.qualifiers.get(qualifierKey).addValue(qualifierValue);
    return this;
  }
};
var NamedRegion = class extends Action {
  constructor(type) {
    super();
    this.regionType = type;
    this._actionModel.regionType = type;
  }
};
var CustomRegion = class _CustomRegion extends NamedRegion {
  constructor() {
    super("custom");
  }
  /**
   * @description The x position in pixels.
   * @param {number | string} x
   */
  x(x) {
    this._actionModel.x = x;
    this.addQualifier(new Qualifier("x", x));
    return this;
  }
  /**
   * @description The y position in pixels.
   * @param {number | string} y
   */
  y(y) {
    this._actionModel.y = y;
    this.addQualifier(new Qualifier("y", y));
    return this;
  }
  /**
   * @description The width of the region in pixels.
   * @param {number | string} width
   */
  width(width) {
    this._actionModel.width = width;
    this.addQualifier(new Qualifier("w", width));
    return this;
  }
  /**
   * @description The height of the region in pixels.
   * @param {number | string} height
   */
  height(height) {
    this._actionModel.height = height;
    this.addQualifier(new Qualifier("h", height));
    return this;
  }
  static fromJson(model) {
    const customRegion = new _CustomRegion();
    if (model.width) {
      customRegion.width(model.width);
    }
    if (model.height) {
      customRegion.height(model.height);
    }
    if (model.x) {
      customRegion.x(model.x);
    }
    if (model.y) {
      customRegion.y(model.y);
    }
    return customRegion;
  }
};
function custom() {
  return new CustomRegion();
}
function faces() {
  return new NamedRegion("faces");
}
function ocr$1() {
  return new NamedRegion("ocr_text");
}
var BlurAction = class extends Action {
  constructor(strength) {
    super();
    this._actionModel = {};
    this._strength = strength;
    this._actionModel.actionType = "blur";
    this._actionModel.strength = strength;
  }
  /**
   * @description Specifies the region to blur.
   * @param {NamedRegion} blurRegion
   */
  region(blurRegion) {
    this._region = blurRegion;
    this._actionModel.region = blurRegion.toJson();
    return this;
  }
  /**
   * @description Sets the strength of the blur effect.
   * @param {number | string} strength
   */
  strength(strength) {
    this._strength = strength;
    this._actionModel.strength = strength;
    return this;
  }
  prepareQualifiers() {
    const strength = this._strength ? `:${this._strength}` : "";
    if ("_region" in this) {
      const qualifiers = this._region.qualifiers;
      qualifiers.forEach((q) => this.addQualifier(q));
      if (this._region.regionType === "custom") {
        this.addQualifier(new Qualifier("e", `blur_region${strength}`));
      }
      if (this._region.regionType === "ocr_text") {
        this.addQualifier(new Qualifier("e", `blur_region${strength}`));
        this.addQualifier(new Qualifier("g", `ocr_text`));
      }
      if (this._region.regionType === "faces") {
        this.addQualifier(new Qualifier("e", `blur_faces${strength}`));
      }
    } else {
      this.addQualifier(new Qualifier("e", `blur${strength}`));
    }
  }
  static fromJson(actionModel) {
    const { strength, region } = actionModel;
    const result = new this(strength);
    strength && result.strength(strength);
    if (region && region.regionType === "faces") {
      result.region(faces());
    }
    if (region && region.regionType === "ocr_text") {
      result.region(ocr$1());
    }
    if (region && region.regionType === "custom") {
      result.region(CustomRegion.fromJson(region));
    }
    return result;
  }
};
function objectFlip(obj) {
  const result = {};
  Object.keys(obj).forEach((key) => {
    result[obj[key]] = key;
  });
  return result;
}
var ACTION_TYPE_TO_CROP_MODE_MAP = {
  limitFit: "limit",
  limitFill: "lfill",
  minimumFit: "mfit",
  thumbnail: "thumb",
  limitPad: "lpad",
  minimumPad: "mpad"
};
var ACTION_TYPE_TO_DELIVERY_MODE_MAP = {
  colorSpace: "cs",
  dpr: "dpr",
  density: "dn",
  defaultImage: "d",
  format: "f",
  quality: "q"
};
var ACTION_TYPE_TO_EFFECT_MODE_MAP = {
  redEye: "redeye",
  advancedRedEye: "adv_redeye",
  oilPaint: "oil_paint",
  unsharpMask: "unsharp_mask",
  makeTransparent: "make_transparent",
  generativeRestore: "gen_restore",
  upscale: "upscale"
};
var ACTION_TYPE_TO_QUALITY_MODE_MAP = {
  autoBest: "auto:best",
  autoEco: "auto:eco",
  autoGood: "auto:good",
  autoLow: "auto:low",
  jpegminiHigh: "jpegmini:1",
  jpegminiMedium: "jpegmini:2",
  jpegminiBest: "jpegmini:0"
};
var ACTION_TYPE_TO_STREAMING_PROFILE_MODE_MAP = {
  fullHd: "full_hd",
  fullHdWifi: "full_hd_wifi",
  fullHdLean: "full_hd_lean",
  hdLean: "hd_lean"
};
var CHROMA_VALUE_TO_CHROMA_MODEL_ENUM = {
  444: "CHROMA_444",
  420: "CHROMA_420"
};
var COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP = {
  "noCmyk": "no_cmyk",
  "keepCmyk": "keep_cmyk",
  "tinySrgb": "tinysrgb",
  "srgbTrueColor": "srgb:truecolor"
};
var CHROMA_MODEL_ENUM_TO_CHROMA_VALUE = objectFlip(CHROMA_VALUE_TO_CHROMA_MODEL_ENUM);
objectFlip(COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP);
var CROP_MODE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_CROP_MODE_MAP);
var DELIVERY_MODE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_DELIVERY_MODE_MAP);
var EFFECT_MODE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_EFFECT_MODE_MAP);
objectFlip(ACTION_TYPE_TO_QUALITY_MODE_MAP);
objectFlip(ACTION_TYPE_TO_STREAMING_PROFILE_MODE_MAP);
var SimpleEffectAction = class extends Action {
  constructor(effectType, level) {
    super();
    this._actionModel = {};
    this._actionModel.actionType = EFFECT_MODE_TO_ACTION_TYPE_MAP[effectType] || effectType;
    const qualifierEffect = this.createEffectQualifier(effectType, level);
    this.addQualifier(qualifierEffect);
  }
  createEffectQualifier(effectType, level) {
    let qualifierValue;
    if (level) {
      qualifierValue = new QualifierValue([effectType, `${level}`]).setDelimiter(":");
    } else {
      qualifierValue = new QualifierValue(effectType);
    }
    return new Qualifier("e", qualifierValue);
  }
  static fromJson(actionModel) {
    const { actionType, level, strength } = actionModel;
    const effectType = ACTION_TYPE_TO_EFFECT_MODE_MAP[actionType] || actionType;
    const result = new this(effectType, level ? level : strength);
    return result;
  }
};
var LeveledEffectAction = class extends SimpleEffectAction {
  constructor(effectType, level) {
    super(effectType, level);
    this.LEVEL_NAME = "level";
    this._actionModel = {};
    this.effectType = effectType;
    this._actionModel.actionType = EFFECT_MODE_TO_ACTION_TYPE_MAP[effectType] || effectType;
    if (level) {
      this.setLevel(level);
    }
  }
  /**
   *
   * @description Sets the effect level for the action
   * @param {string | number} level - The strength of the effect
   * @protected
   */
  setLevel(level) {
    this._actionModel[this.LEVEL_NAME] = level;
    const qualifierEffect = this.createEffectQualifier(this.effectType, level);
    this.addQualifier(qualifierEffect);
    return this;
  }
};
function prepareColor(color3) {
  if (color3) {
    return color3.match(/^#/) ? `rgb:${color3.substr(1)}` : color3;
  } else {
    return color3;
  }
}
var VectorizeEffectAction = class extends Action {
  constructor() {
    super();
    this._actionModel = {};
    this._actionModel.actionType = "vectorize";
  }
  /**
   * @description The number of colors. (Range: 2 to 30, Server default: 10)
   * @param {number | string} num
   * @return {this}
   */
  numOfColors(num2) {
    this._actionModel.numOfColors = num2;
    this._numOfColors = num2;
    return this;
  }
  /**
   * @description The level of detail. Specify either a percentage of the original image (Range: 0.0 to 1.0) or an absolute number of pixels (Range: 0 to 1000). (Server default: 300)
   * @param {number | string} num
   * @return {this}
   */
  detailsLevel(num2) {
    this._actionModel.detailLevel = num2;
    this._detailsLevel = num2;
    return this;
  }
  /**
   * @description The size of speckles to suppress. Specify either a percentage of the original image (Range: 0.0 to 1.0) or an absolute number of pixels (Range: 0 to 100, Server default: 2)
   * @param {number | string} num
   * @return {this}
   */
  despeckleLevel(num2) {
    this._actionModel.despeckleLevel = num2;
    this._despeckleLevel = num2;
    return this;
  }
  /**
   * @description The corner threshold. Specify 100 for no smoothing (polygon corners), 0 for completely smooth corners. (Range: 0 to 100, Default: 25)
   * @param {number | string} num
   * @return {this}
   */
  cornersLevel(num2) {
    this._actionModel.cornersLevel = num2;
    this._cornersLevel = num2;
    return this;
  }
  /**
   * @description The optimization value. Specify 100 for least optimization and the largest file. (Range: 0 to 100, Server default: 100).
   * @param {number} num
   * @return {this}
   */
  paths(num2) {
    this._actionModel.paths = num2;
    this._paths = num2;
    return this;
  }
  prepareQualifiers() {
    let str = "vectorize";
    if (this._numOfColors) {
      str += `:${new QualifierValue(`colors:${this._numOfColors}`).toString()}`;
    }
    if (this._detailsLevel) {
      str += `:${new QualifierValue(`detail:${this._detailsLevel}`).toString()}`;
    }
    if (this._despeckleLevel) {
      str += `:${new QualifierValue(`despeckle:${this._despeckleLevel}`).toString()}`;
    }
    if (this._paths) {
      str += `:${new QualifierValue(`paths:${this._paths}`).toString()}`;
    }
    if (this._cornersLevel) {
      str += `:${new QualifierValue(`corners:${this._cornersLevel}`).toString()}`;
    }
    this.addQualifier(new Qualifier("e", str));
  }
  static fromJson(actionModel) {
    const { actionType, paths, cornersLevel, despeckleLevel, detailLevel, numOfColors } = actionModel;
    const result = new this();
    paths && result.paths(paths);
    cornersLevel && result.cornersLevel(cornersLevel);
    despeckleLevel && result.despeckleLevel(despeckleLevel);
    detailLevel && result.detailsLevel(detailLevel);
    numOfColors && result.numOfColors(numOfColors);
    return result;
  }
};
var EffectActionWithLevel = class extends LeveledEffectAction {
  level(value) {
    this._actionModel.level = value;
    return this.setLevel(value);
  }
};
var AssistColorBlindEffectAction = class extends Action {
  constructor() {
    super();
    this._actionModel = {};
    this._actionModel.actionType = "assistColorblind";
    this.addQualifier(new Qualifier("e", new QualifierValue("assist_colorblind")));
  }
  /**
   * @description Replaces problematic colors with colors that are easier to differentiate.
   * @return {this}
   */
  xray() {
    this._actionModel.type = "xray";
    return this.addQualifier(new Qualifier("e", new QualifierValue(["assist_colorblind", "xray"]).setDelimiter(":")));
  }
  /**
   * @description Applies stripes of the specified intensity to help people with common color blind conditions to differentiate between colors that are similar for them.
   * @param {number | string} strength The intensity of the stripes. (Range: 1 to 100, Server default: 10)
   * @return {this}
   */
  stripesStrength(strength) {
    this._actionModel.type = "stripes";
    this._actionModel.stripesStrength = strength;
    return this.addQualifier(new Qualifier("e", new QualifierValue(["assist_colorblind", strength]).setDelimiter(":")));
  }
  static fromJson(actionModel) {
    const { actionType, type, stripesStrength } = actionModel;
    const result = new this();
    if (type === "xray") {
      result.xray();
    }
    if (type === "stripes") {
      stripesStrength && result.stripesStrength(stripesStrength);
    }
    return result;
  }
};
var ColorizeEffectAction = class extends EffectActionWithLevel {
  /**
   * @description The color to use for colorization. Specify HTML name or RGB hex code. (Server default: gray)
   * @param {string} color HTML name(red, green, etc.) or RGB hex code. (Server default: gray)
   * @return {this}
   */
  color(color3) {
    this._actionModel.color = color3;
    return this.addQualifier(new Qualifier("co", new QualifierValue(prepareColor(color3))));
  }
  static fromJson(actionModel) {
    const { actionType, level, color: color3 } = actionModel;
    const result = new this(actionType, level);
    color3 && result.color(color3);
    return result;
  }
};
var Pixelate = class extends Action {
  constructor(squareSize) {
    super();
    this._actionModel = {};
    this._squareSize = squareSize;
    this._actionModel.actionType = "pixelate";
    this._actionModel.squareSize = squareSize;
  }
  /**
   * @description Specifies the region to piexlate.
   * @param {NamedRegion} pixelateRegion
   */
  region(pixelateRegion) {
    this._region = pixelateRegion;
    this._actionModel.region = { regionType: this._region.regionType };
    return this;
  }
  /**
   * @description Sets the squareSize of the pixelate effect.
   * @param {number | string} squareSize
   */
  squareSize(squareSize) {
    this._squareSize = squareSize;
    this._actionModel.squareSize = squareSize;
    return this;
  }
  prepareQualifiers() {
    const str = this._squareSize ? `:${this._squareSize}` : "";
    if ("_region" in this) {
      const qualifiers = this._region.qualifiers;
      qualifiers.forEach((q) => this.addQualifier(q));
      if (this._region.regionType === "custom") {
        this.addQualifier(new Qualifier("e", `pixelate_region${str}`));
      }
      if (this._region.regionType === "ocr_text") {
        this.addQualifier(new Qualifier("e", `pixelate_region${str}`));
        this.addQualifier(new Qualifier("g", `ocr_text`));
      }
      if (this._region.regionType === "faces") {
        this.addQualifier(new Qualifier("e", `pixelate_faces${str}`));
      }
    } else {
      this.addQualifier(new Qualifier("e", `pixelate${str}`));
    }
  }
  static fromJson(actionModel) {
    const { region, squareSize } = actionModel;
    const result = new this(squareSize);
    squareSize && result.squareSize(squareSize);
    if (region && region.regionType === "faces") {
      result.region(faces());
    }
    if (region && region.regionType === "custom") {
      result.region(custom());
    }
    return result;
  }
};
function blur(blurLevel) {
  return new BlurAction(blurLevel);
}
function grayscale() {
  return new SimpleEffectAction("grayscale");
}
function colorize(colorizeLevel) {
  return new ColorizeEffectAction("colorize", colorizeLevel);
}
function vectorize() {
  return new VectorizeEffectAction();
}
function assistColorBlind() {
  return new AssistColorBlindEffectAction();
}
function pixelate(squareSize) {
  return new Pixelate(squareSize);
}
var BackgroundColor = class extends Action {
  constructor(color3) {
    super();
    this._actionModel = {};
    this.addQualifier(new Qualifier("b", new QualifierValue(prepareColor(color3)).setDelimiter("_")));
    this._actionModel.color = color3;
    this._actionModel.actionType = "backgroundColor";
  }
  static fromJson(actionModel) {
    const { color: color3 } = actionModel;
    const result = new this(color3);
    return result;
  }
};
var RawAction = class {
  constructor(raw) {
    this.raw = raw;
  }
  toString() {
    return this.raw;
  }
  toJson() {
    return { error: createUnsupportedError(`unsupported action ${this.constructor.name}`) };
  }
};
function isErrorObject(obj) {
  const errorObj = obj;
  return "error" in errorObj && !!errorObj.error;
}
function ignoreInitialAspectRatio() {
  return new FlagQualifier("ignore_aspect_ratio");
}
function lossy() {
  return new FlagQualifier("lossy");
}
function preserveTransparency() {
  return new FlagQualifier("preserve_transparency");
}
function progressive(mode2) {
  return new FlagQualifier("progressive", mode2);
}
function regionRelative() {
  return new FlagQualifier("region_relative");
}
function relative() {
  return new FlagQualifier("relative");
}
var FormatQualifier = class extends QualifierValue {
  constructor(val) {
    super(val);
    this.val = val;
  }
  getValue() {
    return this.val;
  }
};
var DeliveryAction = class extends Action {
  /**
   * @param {string} deliveryKey A generic Delivery Action Key (such as q, f, dn, etc.)
   * @param {string} deliveryType A Format Qualifiers for the action, such as Quality.auto()
   * @param {string} modelProperty internal model property of the action, for example quality uses `level` while dpr uses `density`
   * @see Visit {@link Actions.Delivery|Delivery} for an example
   */
  constructor(deliveryKey, deliveryType, modelProperty) {
    super();
    this._actionModel = {};
    let deliveryTypeValue;
    if (deliveryType instanceof FormatQualifier) {
      deliveryTypeValue = deliveryType.getValue();
    } else {
      deliveryTypeValue = deliveryType;
    }
    this._actionModel.actionType = DELIVERY_MODE_TO_ACTION_TYPE_MAP[deliveryKey];
    this._actionModel[modelProperty] = deliveryTypeValue;
    this.addQualifier(new Qualifier(deliveryKey, deliveryType));
  }
};
var ProgressiveQualifier = class extends FlagQualifier {
  constructor(mode2) {
    super("progressive", mode2);
  }
};
var DeliveryFormatAction = class extends DeliveryAction {
  constructor(deliveryKey, deliveryType) {
    super(deliveryKey, deliveryType, "formatType");
  }
  /**
   * @description Uses lossy compression when delivering animated GIF files.
   * @return {this}
   */
  lossy() {
    this._actionModel.lossy = true;
    this.addFlag(lossy());
    return this;
  }
  /**
   * @description Uses progressive compression when delivering JPG file format.
   * @return {this}
   */
  progressive(mode2) {
    if (mode2 instanceof ProgressiveQualifier) {
      this._actionModel.progressive = { mode: mode2.getFlagValue() };
      this.addFlag(mode2);
    } else {
      this._actionModel.progressive = { mode: mode2 };
      this.addFlag(progressive(mode2));
    }
    return this;
  }
  /**
   * @description Ensures that images with a transparency channel are delivered in PNG format.
   */
  preserveTransparency() {
    this._actionModel.preserveTransparency = true;
    this.addFlag(preserveTransparency());
    return this;
  }
  static fromJson(actionModel) {
    const { formatType, lossy: lossy3, progressive: progressive3, preserveTransparency: preserveTransparency3 } = actionModel;
    let result;
    if (formatType) {
      result = new this("f", formatType);
    } else {
      result = new this("f");
    }
    if (progressive3) {
      if (progressive3.mode) {
        result.progressive(progressive3.mode);
      } else {
        result.progressive();
      }
    }
    lossy3 && result.lossy();
    preserveTransparency3 && result.preserveTransparency();
    return result;
  }
};
var Transformation = class _Transformation {
  constructor() {
    this.actions = [];
  }
  /**
   * @param {SDK.Action | string} action
   * @return {this}
   */
  addAction(action) {
    let actionToAdd;
    if (typeof action === "string") {
      if (action.indexOf("/") >= 0) {
        throw "addAction cannot accept a string with a forward slash in it - /, use .addTransformation() instead";
      } else {
        actionToAdd = new RawAction(action);
      }
    } else {
      actionToAdd = action;
    }
    this.actions.push(actionToAdd);
    return this;
  }
  /**
   * @description Allows the injection of a raw transformation as a string into the transformation, or a Transformation instance that was previously created
   * @param {string | SDK.Transformation} tx
   * @example
   * import {Transformation} from "@cloudinary/url-gen";
   *
   * const transformation = new Transformation();
   * transformation.addTransformation('w_100/w_200/w_300');
   * @return {this}
   */
  addTransformation(tx) {
    if (tx instanceof _Transformation) {
      this.actions = this.actions.concat(tx.actions);
    } else {
      this.actions.push(new RawAction(tx));
    }
    return this;
  }
  /**
   * @return {string}
   */
  toString() {
    return this.actions.map((action) => {
      return action.toString();
    }).filter((a) => a).join("/");
  }
  /**
   * @description Delivers an animated GIF.
   * @param {AnimatedAction} animatedAction
   * @return {this}
   */
  animated(animatedAction) {
    return this.addAction(animatedAction);
  }
  /**
   * @description Adds a border around the image.
   * @param {Border} borderAction
   * @return {this}
   */
  border(borderAction) {
    return this.addAction(borderAction);
  }
  /**
   * @description Adjusts the shape of the delivered image. </br>
   * <b>Learn more:</b> {@link https://cloudinary.com/documentation/effects_and_artistic_enhancements#distort|Shape changes and distortion effects}
   * @param {IReshape} reshapeAction
   * @return {this}
   */
  reshape(reshapeAction) {
    return this.addAction(reshapeAction);
  }
  /**
   * @description Resize the asset using provided resize action
   * @param {ResizeSimpleAction} resizeAction
   * @return {this}
   */
  resize(resizeAction) {
    return this.addAction(resizeAction);
  }
  /**
   * @desc An alias to Action Delivery.quality
   * @param {string|number} quality
   * @return {this}
   */
  quality(quality3) {
    this.addAction(new DeliveryFormatAction("q", quality3));
    return this;
  }
  /**
   * @desc An alias to Action Delivery.format
   * @param {string} format
   * @return {this}
   */
  format(format3) {
    this.addAction(new DeliveryFormatAction("f", format3));
    return this;
  }
  /**
   * @description Rounds the specified corners of an image.
   * @param roundCornersAction
   * @return {this}
   */
  roundCorners(roundCornersAction) {
    return this.addAction(roundCornersAction);
  }
  /**
   * @description Adds an overlay over the base image.
   * @param {LayerAction} overlayAction
   * @return {this}
   */
  overlay(overlayAction) {
    return this.addAction(overlayAction);
  }
  /**
   * @description Adds an underlay under the base image.
   * @param {LayerAction} underlayAction
   * @return {this}
   */
  underlay(underlayAction) {
    underlayAction.setLayerType("u");
    return this.addAction(underlayAction);
  }
  /**
   * @description Defines an new user variable.
   * @param {VariableAction} variableAction
   * @return {this}
   */
  addVariable(variableAction) {
    return this.addAction(variableAction);
  }
  /**
   * @description Specifies a condition to be met before applying a transformation.
   * @param {ConditionalAction} conditionAction
   * @return {this}
   */
  conditional(conditionAction) {
    return this.addAction(conditionAction);
  }
  /**
   * @description Applies a filter or an effect on an asset.
   * @param {SimpleEffectAction} effectAction
   * @return {this}
   */
  effect(effectAction) {
    return this.addAction(effectAction);
  }
  /**
   * @description Applies adjustment effect on an asset.
   * @param action
   * @return {this}
   */
  adjust(action) {
    return this.addAction(action);
  }
  /**
   * @description Rotates the asset by the given angle.
   * @param {RotateAction} rotateAction
   * @return {this}
   */
  rotate(rotateAction) {
    return this.addAction(rotateAction);
  }
  /**
   * @description Applies a pre-defined named transformation of the given name.
   * @param {NamedTransformation} namedTransformation
   * @return {this}
   */
  namedTransformation(namedTransformation) {
    return this.addAction(namedTransformation);
  }
  /**
   * @description Applies delivery action.
   * @param deliveryAction
   * @return {this}
   */
  delivery(deliveryAction) {
    return this.addAction(deliveryAction);
  }
  /**
   * @description Sets the color of the background.
   * @param {Qualifiers.Color} color
   * @return {this}
   */
  backgroundColor(color3) {
    return this.addAction(new BackgroundColor(color3));
  }
  /**
   * @description Adds a layer in a Photoshop document.
   * @param action
   * @return {this}
   */
  psdTools(action) {
    return this.addAction(action);
  }
  /**
   * @description Extracts an image or a page using an index, a range, or a name from a layered media asset.
   * @param action
   * @return {this}
   */
  extract(action) {
    return this.addAction(action);
  }
  /**
   * @description Adds a flag as a separate action.
   * @param {Qualifiers.Flag | string} flagQualifier
   * @return {this}
   */
  addFlag(flagQualifier) {
    const action = new Action();
    let flagToAdd = flagQualifier;
    if (typeof flagQualifier === "string") {
      flagToAdd = new FlagQualifier(flagQualifier);
    }
    action.addQualifier(flagToAdd);
    return this.addAction(action);
  }
  /**
   * @description Inject a custom function into the image transformation pipeline.
   * @return {this}
   */
  customFunction(customFunction) {
    return this.addAction(customFunction);
  }
  /**
   * Transcodes the video (or audio) to another format.
   * @param {Action} action
   * @return {this}
   */
  transcode(action) {
    return this.addAction(action);
  }
  /**
   * Applies the specified video edit action.
   *
   * @param {videoEditType} action
   * @return {this}
   */
  videoEdit(action) {
    return this.addAction(action);
  }
  toJson() {
    const actions = [];
    for (const action of this.actions) {
      const json = action.toJson();
      if (isErrorObject(json)) {
        return json;
      }
      actions.push(json);
    }
    return { actions };
  }
};
function toFloatAsString(value) {
  const returnValue = value.toString();
  if (returnValue.match(/[A-Z]/gi)) {
    return returnValue;
  }
  if (returnValue.length > 1 && returnValue[0] === "0") {
    return returnValue;
  }
  const isNumberLike3 = !isNaN(parseFloat(returnValue)) && returnValue.indexOf(":") === -1;
  if (isNumberLike3 && returnValue.indexOf(".") === -1) {
    return `${returnValue}.0`;
  } else {
    return returnValue;
  }
}
var AspectRatioQualifierValue = class extends QualifierValue {
};
var ResizeSimpleAction = class extends Action {
  /**
   * @param {string} cropType
   * @param {number | string} cropWidth The required width of a transformed asset.
   * @param {number | string} cropHeight The required height of a transformed asset.
   */
  constructor(cropType, cropWidth, cropHeight) {
    super();
    this._actionModel = { dimensions: {} };
    this._actionModel.actionType = CROP_MODE_TO_ACTION_TYPE_MAP[cropType] || cropType;
    this.addQualifier(new Qualifier("c", cropType));
    cropWidth && this.width(cropWidth);
    cropHeight && this.height(cropHeight);
  }
  /**
   * @description Sets the height of the resize
   * @param {string | number} x The height in pixels (if an integer is specified) or as a percentage (if a float is specified).
   */
  height(x) {
    this._actionModel.dimensions.height = x;
    return this.addQualifier(new Qualifier("h", x));
  }
  /**
   * @description Sets the width of the resize
   * @param {string | number} x The width in pixels (if an integer is specified) or as a percentage (if a float is specified).
   */
  width(x) {
    this._actionModel.dimensions.width = x;
    return this.addQualifier(new Qualifier("w", x));
  }
  /**
   * @description Sets the aspect ratio of the asset.
   * For a list of supported types see {@link Qualifiers.AspectRatio|
    * AspectRatio values}
   * @param {AspectRatioType|number|string} ratio The new aspect ratio, specified as a percentage or ratio.
   * @return {this}
   */
  aspectRatio(ratio) {
    if (ratio instanceof AspectRatioQualifierValue) {
      this._actionModel.dimensions.aspectRatio = `${ratio}`;
      return this.addQualifier(new Qualifier("ar", ratio));
    }
    if (typeof ratio === "number" || typeof ratio === "string") {
      this._actionModel.dimensions.aspectRatio = toFloatAsString(ratio);
      return this.addQualifier(new Qualifier("ar", toFloatAsString(ratio)));
    }
    if (ratio instanceof FlagQualifier) {
      this._actionModel.dimensions.aspectRatio = `${ratio.qualifierValue}`;
      return this.addFlag(ratio);
    }
  }
  /**
   * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the containing image instead of the added layer.
   * @return {this}
   */
  relative() {
    this._actionModel.relative = true;
    return this.addFlag(relative());
  }
  /**
   * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the overlaid region
   * @return {this}
   */
  regionRelative() {
    this._actionModel.regionRelative = true;
    return this.addFlag(regionRelative());
  }
  static fromJson(actionModel) {
    const { actionType, dimensions, relative: relative3, regionRelative: regionRelative3 } = actionModel;
    const { aspectRatio, width, height } = dimensions;
    const cropMode = ACTION_TYPE_TO_CROP_MODE_MAP[actionType] || actionType;
    const result = new this(cropMode, width, height);
    aspectRatio && result.aspectRatio(aspectRatio === "ignore_aspect_ratio" ? ignoreInitialAspectRatio() : aspectRatio);
    relative3 && result.relative();
    regionRelative3 && result.regionRelative();
    return result;
  }
};
var GravityQualifier = class extends Qualifier {
  /**
   * @param value, an array containing (GravityObject | AutoGravity | string) or a string;
   */
  constructor(value) {
    super("g", new QualifierValue(value));
  }
};
var AutoGravity = class extends GravityQualifier {
  constructor() {
    super("auto");
  }
  /**
   * @description Autofocuses on objects, allowing their priority within the algorithm to be configured.
   * @param {AutoFocus} AutoFocusObjects
   */
  autoFocus(...AutoFocusObjects) {
    this.addValue(AutoFocusObjects);
    return this;
  }
};
var FocusOnGravity = class extends GravityQualifier {
  constructor(FocusOnObjects) {
    super(FocusOnObjects);
  }
  /**
   * @description Specifies the gravity to use if none of the other gravity objects are found.
   * @param {Qualifiers.Gravity.AutoGravity} val
   */
  fallbackGravity(val) {
    this.addValue(val.qualifierValue);
    return this;
  }
};
var CompassGravity = class extends GravityQualifier {
  constructor(dir) {
    super(dir);
  }
};
function compass(direction) {
  return new CompassGravity(direction);
}
function focusOn(...args) {
  const res = [...args];
  return new FocusOnGravity(res);
}
function autoGravity() {
  return new AutoGravity();
}
var FocusOnValue = class extends QualifierValue {
  constructor(name2) {
    super();
    this.name = name2;
  }
  toString() {
    return this.name;
  }
};
function ocr() {
  return new FocusOnValue("ocr_text");
}
function isIAutoGravityString(gravity) {
  return gravity && `${gravity}`.split(":")[0] === "auto";
}
function isCompassGravity(gravity) {
  const gravityValue = getGravityValue(gravity);
  return ["north", "center", "east", "west", "south", "north_west", "south_east", "south_west", "north_east"].includes(gravityValue);
}
function getGravityValue(gravity) {
  return `${gravity}`.replace("g_", "");
}
function createCompassGravityModel(gravity) {
  return {
    compass: getGravityValue(gravity),
    gravityType: "direction"
  };
}
function isOcrGravity(gravity) {
  return getGravityValue(gravity) === "ocr_text";
}
function createOcrGravityModel() {
  return {
    gravityType: "ocr"
  };
}
function isAutoGravity(gravity) {
  return `${gravity.qualifierValue}`.split(":")[0] === "auto";
}
function createIAutoFocusObject(gravity) {
  const gravityString = gravity.toString();
  const values = gravityString.split("_");
  const result = {
    object: values[0]
  };
  if (values.length > 1) {
    if (values[1] === "avoid") {
      result.avoid = true;
    } else {
      result.weight = +values[1];
    }
  }
  return result;
}
function createAutoGravityModel(gravity) {
  let values;
  const gravityQualifier = gravity === "auto" ? new AutoGravity() : gravity;
  if (`${gravity}`.startsWith("auto:")) {
    values = `${gravity}`.split(":").filter((v) => v !== "auto");
  } else {
    values = gravityQualifier.qualifierValue.values.filter((v) => v !== "auto");
  }
  const autoFocus = values.map(createIAutoFocusObject);
  return {
    gravityType: "auto",
    autoFocus
  };
}
function createFocusOnGravityModel(gravity) {
  const hasAutoGravity = `${gravity}`.split(":").includes("auto");
  const values = gravity.qualifierValue.values;
  const focusOnValues = hasAutoGravity ? values.slice(0, values.length - 1) : values;
  const result = {
    gravityType: "object",
    focusOnObjects: focusOnValues.map((v) => `${v}`)
  };
  if (hasAutoGravity) {
    const autoFocusObjects = values[values.length - 1].values.slice(1);
    const autoGravityInstance = autoGravity().autoFocus(...autoFocusObjects);
    result.fallbackGravity = createAutoGravityModel(autoGravityInstance);
  }
  return result;
}
function createFocusOnGravity(gravity) {
  const values = gravity.split(":");
  const focusOnValues = values.map((g) => new FocusOnValue(g));
  return new FocusOnGravity(focusOnValues);
}
function createGravityModel(gravity) {
  if (isCompassGravity(gravity)) {
    return createCompassGravityModel(gravity);
  }
  if (isOcrGravity(gravity)) {
    return createOcrGravityModel();
  }
  if (isIAutoGravityString(gravity) || isAutoGravity(gravity)) {
    return createAutoGravityModel(gravity);
  }
  return createFocusOnGravityModel(typeof gravity === "string" ? createFocusOnGravity(gravity) : gravity);
}
var AutoFocus = class _AutoFocus extends QualifierValue {
  constructor(focusOn4, weight) {
    super();
    this._weight = weight;
    this.focusOn = focusOn4;
    this.shouldAvoid = false;
  }
  /**
   * @summary qualifier
   * @description Specifies the object to focus on automatically
   * Accepts an AutoFocusObject (which is just a wrapper for a FocusOn object, but with extra method: avoid, weight)
   * @param {Qualifiers.FocusOn} obj The object to focus on.
   * @param {number} weight
   */
  static focusOn(obj, weight) {
    return new _AutoFocus(obj, weight);
  }
  shouldAddWeight() {
    return typeof this._weight === "number" || typeof this._weight === "string" || this.shouldAvoid;
  }
  /**
   * @summary qualifier
   * @desc Get the name of the of the object
   */
  getName() {
    return this.focusOn.name;
  }
  /**
   * @summary qualifier
   * @desc Get the weight for the object
   */
  getWeight() {
    if (this.shouldAvoid) {
      return "avoid";
    } else {
      return this._weight;
    }
  }
  /**
   * @summary qualifier
   * @desc Return the string representation of this QualifierValue
   */
  toString() {
    if (this.shouldAddWeight()) {
      return `${this.getName()}_${this.getWeight()}`;
    } else {
      return `${this.getName()}`;
    }
  }
  /**
   * @summary qualifier
   * @description Sets the importance level of the object within the automatic gravity algorithm
   * @param {numebr} w The focus weight for the object
   * @return {this}
   */
  weight(w) {
    this._weight = w;
    return this;
  }
  /**
   * @summary qualifier
   * @description Attempts to avoid the detected object in the image
   * @return {this}
   */
  avoid() {
    this.shouldAvoid = true;
    return this;
  }
};
var CompassQualifier = class extends QualifierValue {
  constructor(val) {
    super();
    this.val = val;
  }
  toString() {
    return this.val;
  }
};
function isCompassGravityModel(gravityModel) {
  return gravityModel.gravityType === "direction";
}
function isOcrGravityModel(gravityModel) {
  return gravityModel.gravityType === "ocr";
}
function isAutoGravityModel(gravityModel) {
  return gravityModel.gravityType === "auto";
}
function createAutoFocusFromModel(autoGravityObjectModel) {
  const { object, weight, avoid } = autoGravityObjectModel;
  const autoFocus = new AutoFocus(new FocusOnValue(object));
  (weight || weight === 0) && autoFocus.weight(weight);
  avoid && autoFocus.avoid();
  return autoFocus;
}
function createAutoGravityFromModel(gravityModel) {
  const autoFocusModel = gravityModel.autoFocus || [];
  const autoFocus = autoFocusModel.map(createAutoFocusFromModel);
  return autoGravity().autoFocus(...autoFocus);
}
function createFocusOnGravityFromModel(gravityModel) {
  const focusOnObjects = (gravityModel.focusOnObjects || []).map((str) => new FocusOnValue(str));
  const result = focusOn(...focusOnObjects);
  if (gravityModel.fallbackGravity) {
    const autoGravity3 = createAutoGravityFromModel(gravityModel.fallbackGravity);
    result.fallbackGravity(autoGravity3);
  }
  return result;
}
function createGravityFromModel(gravityModel) {
  if (isCompassGravityModel(gravityModel)) {
    return new CompassGravity(new CompassQualifier(gravityModel.compass));
  }
  if (isOcrGravityModel(gravityModel)) {
    return focusOn(ocr());
  }
  if (isAutoGravityModel(gravityModel)) {
    return createAutoGravityFromModel(gravityModel);
  }
  return createFocusOnGravityFromModel(gravityModel);
}
var ResizeAdvancedAction = class extends ResizeSimpleAction {
  /**
   * @description Which part of the original image to include.
   * @param {Qualifiers.Gravity} gravity
   */
  gravity(gravity) {
    this._actionModel.gravity = createGravityModel(gravity);
    const gravityQualifier = typeof gravity === "string" ? new Qualifier("g", gravity) : gravity;
    return this.addQualifier(gravityQualifier);
  }
  static fromJson(actionModel) {
    const result = super.fromJson.apply(this, [actionModel]);
    if (actionModel.gravity) {
      result.gravity(createGravityFromModel(actionModel.gravity));
    }
    return result;
  }
};
var BackgroundQualifier = class extends Qualifier {
  constructor(backgroundValue) {
    super("b");
    if (backgroundValue) {
      this.addValue(backgroundValue);
    }
  }
};
var DEFAULT_INTENSITY = 100;
var DEFAULT_BRIGHTNESS = 0;
var BlurredBackgroundAction = class extends BackgroundQualifier {
  /**
   * @description Sets the intensity of the blur.
   * @param {number} value - The intensity of the blur.
   */
  intensity(value) {
    this.intensityLevel = value;
    return this;
  }
  /**
   * @description Sets the brightness of the background.
   * @param {number} value - The brightness of the background.
   */
  brightness(value) {
    this.brightnessLevel = value;
    return this;
  }
  /**
   * @description
   * Stringify the qualifier
   * BackgroundQualifiers don't have a value, but instead override the toString() function
   */
  toString() {
    const intensity = this.intensityLevel !== void 0 ? `:${this.intensityLevel}` : "";
    const brightness2 = this.brightnessLevel !== void 0 ? this.intensityLevel !== void 0 ? `:${this.brightnessLevel}` : `:${DEFAULT_INTENSITY}:${this.brightnessLevel}` : "";
    return `b_blurred${intensity}${brightness2}`;
  }
};
var BlurredBackgroundAction$1 = BlurredBackgroundAction;
var BaseCommonBackground = class extends BackgroundQualifier {
  constructor() {
    super();
    this._palette = [];
  }
  /**
   * @description Selects the strongest contrasting color to use for padding.
   * @return {this}
   */
  contrast() {
    this._contrast = true;
    return this;
  }
  /**
   * @description Defines the custom colors to use when resizing using content-aware padding.
   * @param {...string} colors One or more colors - Example: palette('green', 'red', blue')
   * @return {this}
   */
  palette(...colors) {
    this._palette = colors.map((color3) => {
      return prepareColor(color3);
    });
    return this;
  }
};
var BackgroundAutoBorderQualifier = class extends BaseCommonBackground {
  /**
   * @description
   * Stringify the qualifier
   * BackgroundQualifiers don't have a value, but instead override the toString() function.
   */
  toString() {
    return `
    b_auto:border
    ${this._contrast ? "_contrast" : ""}
    ${this._palette.length ? `:palette_${this._palette.join("_")}` : ""}
    `.replace(/\s+/g, "");
  }
};
var BaseGradientBackground = class extends BaseCommonBackground {
  /**
   *
   * @description Sets the number of predominant colors to use (2 or 4).
   * @param {number} num
   * @return {this}
   */
  gradientColors(num2) {
    this._gradientColors = num2;
    return this;
  }
  /**
   * @description Sets the direction for a background gradient fade effect.
   * @param {Qualifiers.GradientDirection | GradientDirectionType | string} direction Use one of these functions
   * provided by {@link Qualifiers.GradientDirection|GradientDirection}
   * @return {this}
   */
  gradientDirection(direction) {
    this._gradientDirection = direction;
    return this;
  }
};
var BackgroundBorderGradientQualifier = class extends BaseGradientBackground {
  /**
   * @description
   * Stringify the qualifier
   * BackgroundQualifiers don't have a value, but instead override the toString() function.
   */
  toString() {
    return `
    b_auto:border_gradient
    ${this._contrast ? "_contrast" : ""}
    ${this._gradientColors ? `:${this._gradientColors}` : ""}
    ${this._gradientDirection ? `:${this._gradientDirection}` : ""}
    ${this._palette.length ? `:palette_${this._palette.join("_")}` : ""}
    `.replace(/\s+/g, "");
  }
};
var BackgroundPredominantGradientQualifier = class extends BaseGradientBackground {
  /**
   * @description
   * Stringify the qualifier
   * BackgroundQualifiers don't have a value, but instead override the toString() function.
   */
  toString() {
    return `
    b_auto:predominant_gradient
    ${this._contrast ? "_contrast" : ""}
    ${this._gradientColors ? `:${this._gradientColors}` : ""}
    ${this._gradientDirection ? `:${this._gradientDirection}` : ""}
    ${this._palette.length ? `:palette_${this._palette.join("_")}` : ""}
    `.replace(/\s+/g, "");
  }
};
var BackgroundAutoPredominantQualifier = class extends BaseCommonBackground {
  /**
   * @description
   * Stringify the qualifier
   * BackgroundQualifiers don't have a value, but instead override the toString() function.
   */
  toString() {
    return `
    b_auto:predominant
    ${this._contrast ? "_contrast" : ""}
    ${this._palette.length ? `:palette_${this._palette.join("_")}` : ""}
    `.replace(/\s+/g, "");
  }
};
var BackgroundGenerativeFillQualifier = class extends BackgroundQualifier {
  constructor() {
    super("gen_fill");
    this._backgroundType = "generativeFill";
  }
  prompt(prompt) {
    this._prompt = prompt;
    return this;
  }
  getPrompt() {
    return this._prompt;
  }
  getBackgroundType() {
    return this._backgroundType;
  }
  /**
   * @description
   * Override the toString() function to explicitly stringify the qualifier.
   */
  toString() {
    return `b_gen_fill${this._prompt ? `:prompt_${this._prompt}` : ""}`;
  }
};
function getBackgroundValue(background) {
  return `${background}`.replace("b_", "");
}
function createAutoBackgroundModel() {
  return { backgroundType: "auto" };
}
function createBlurredBackgroundModel(background) {
  const { intensityLevel, brightnessLevel } = background;
  const result = {
    backgroundType: "blurred"
  };
  if (intensityLevel || intensityLevel === 0) {
    result.intensity = intensityLevel;
  }
  if (brightnessLevel || brightnessLevel === 0) {
    result.brightness = brightnessLevel;
  }
  return result;
}
function createContrastPaletteBackgroundModel(background) {
  const contrast2 = background._contrast;
  const palette = background._palette;
  const result = {
    backgroundType: ""
  };
  if (contrast2) {
    result.contrast = true;
  }
  if (palette) {
    result.palette = palette;
  }
  return result;
}
function createBorderBackgroundModel(background) {
  return Object.assign(Object.assign({}, createContrastPaletteBackgroundModel(background)), { backgroundType: "border" });
}
function createBaseGradientBackgroundModel(background) {
  const gradientColors = background._gradientColors;
  const gradientDirection = `${background._gradientDirection}`;
  const result = createContrastPaletteBackgroundModel(background);
  if (gradientColors) {
    result.gradientColors = gradientColors;
  }
  if (gradientDirection) {
    result.gradientDirection = gradientDirection;
  }
  return result;
}
function createBorderGradientBackgroundModel(background) {
  return Object.assign(Object.assign({}, createBaseGradientBackgroundModel(background)), { backgroundType: "borderGradient" });
}
function createColorBackgroundModel(background) {
  return {
    backgroundType: "color",
    color: getBackgroundValue(background)
  };
}
function createPredominantBackgroundModel(background) {
  return Object.assign(Object.assign({}, createContrastPaletteBackgroundModel(background)), { backgroundType: "predominant" });
}
function createPredominantGradientBackgroundModel(background) {
  return Object.assign(Object.assign({}, createBaseGradientBackgroundModel(background)), { backgroundType: "predominantGradient" });
}
function createGenerativeFillBackgroundModel(background) {
  return Object.assign({ backgroundType: background.getBackgroundType() }, background.getPrompt() ? { prompt: background.getPrompt() } : {});
}
function createBackgroundModel(background) {
  if (getBackgroundValue(background) === "auto") {
    return createAutoBackgroundModel();
  }
  if (background instanceof BlurredBackgroundAction$1) {
    return createBlurredBackgroundModel(background);
  }
  if (background instanceof BackgroundAutoBorderQualifier) {
    return createBorderBackgroundModel(background);
  }
  if (background instanceof BackgroundBorderGradientQualifier) {
    return createBorderGradientBackgroundModel(background);
  }
  if (background instanceof BackgroundAutoPredominantQualifier) {
    return createPredominantBackgroundModel(background);
  }
  if (background instanceof BackgroundPredominantGradientQualifier) {
    return createPredominantGradientBackgroundModel(background);
  }
  if (background instanceof BackgroundGenerativeFillQualifier) {
    return createGenerativeFillBackgroundModel(background);
  }
  return createColorBackgroundModel(background);
}
function svg() {
  return new FormatQualifier("svg");
}
function auto$1() {
  return new FormatQualifier("auto");
}
function border() {
  return new BackgroundAutoBorderQualifier();
}
function auto() {
  return new BackgroundQualifier("auto");
}
function borderGradient() {
  return new BackgroundBorderGradientQualifier();
}
function predominantGradient() {
  return new BackgroundPredominantGradientQualifier();
}
function predominant() {
  return new BackgroundAutoPredominantQualifier();
}
function color(colorStr) {
  return new BackgroundQualifier(prepareColor(colorStr));
}
function blurred() {
  return new BlurredBackgroundAction$1();
}
function generativeFill() {
  return new BackgroundGenerativeFillQualifier();
}
var Background = {
  auto,
  border,
  borderGradient,
  predominantGradient,
  predominant,
  color,
  blurred,
  generativeFill
};
function createBlurredBackground(backgroundModel) {
  const { brightness: brightness2, intensity } = backgroundModel;
  const result = Background.blurred();
  result.brightness(brightness2 !== null && brightness2 !== void 0 ? brightness2 : DEFAULT_BRIGHTNESS);
  result.intensity(intensity !== null && intensity !== void 0 ? intensity : DEFAULT_INTENSITY);
  return result;
}
function createGradientBackground(background, backgroundModel) {
  const { gradientColors, gradientDirection, contrast: contrast2, palette } = backgroundModel;
  if (contrast2) {
    background.contrast();
  }
  if (palette) {
    background.palette(...palette);
  }
  if (gradientColors) {
    background.gradientColors(+gradientColors);
  }
  if (gradientDirection) {
    background.gradientDirection(gradientDirection);
  }
  return background;
}
function createContrastPaletteBackground(background, backgroundModel) {
  const { contrast: contrast2, palette } = backgroundModel;
  if (contrast2) {
    background.contrast();
  }
  if (palette) {
    background.palette(...palette);
  }
  return background;
}
function createGenerativeFillBackground(background, backgroundModel) {
  const { prompt } = backgroundModel;
  if (prompt) {
    background.prompt(prompt);
  }
  return background;
}
function createBackgroundFromModel(backgroundModel) {
  const { backgroundType } = backgroundModel;
  switch (backgroundType) {
    case "auto":
      return auto();
    case "blurred":
      return createBlurredBackground(backgroundModel);
    case "border":
      return createContrastPaletteBackground(border(), backgroundModel);
    case "borderGradient":
      return createGradientBackground(borderGradient(), backgroundModel);
    case "predominant":
      return createContrastPaletteBackground(predominant(), backgroundModel);
    case "predominantGradient":
      return createGradientBackground(predominantGradient(), backgroundModel);
    case "generativeFill":
      return createGenerativeFillBackground(generativeFill(), backgroundModel);
    default:
      return color(backgroundModel.color);
  }
}
var ResizePadAction = class extends ResizeAdvancedAction {
  /**
   * @description Sets the background.
   * @param {Qualifiers.Background} backgroundQualifier Defines the background color to use instead of
   * transparent background areas or when resizing with padding.
   */
  background(backgroundQualifier) {
    this._actionModel.background = createBackgroundModel(backgroundQualifier);
    return this.addQualifier(backgroundQualifier);
  }
  /**
   * @description Horizontal position for custom-coordinates based padding.
   * @param {number} x The x position.
   */
  offsetX(x) {
    this._actionModel.x = x;
    return this.addQualifier(new Qualifier("x", x));
  }
  /**
   * @description Vertical position for custom-coordinates based padding
   * @param {number} y The y position.
   */
  offsetY(y) {
    this._actionModel.y = y;
    return this.addQualifier(new Qualifier("y", y));
  }
  static fromJson(actionModel) {
    const result = super.fromJson.apply(this, [actionModel]);
    actionModel.background && result.background(createBackgroundFromModel(actionModel.background));
    actionModel.x && result.offsetX(actionModel.x);
    actionModel.y && result.offsetY(actionModel.y);
    actionModel.zoom && result.zoom(actionModel.zoom);
    return result;
  }
};
var ResizeScaleAction = class extends ResizeSimpleAction {
  /**
   * @description Changes the aspect ratio of an image while retaining all important content and avoiding unnatural
   * distortions.
   * @return {this}
   */
  liquidRescaling() {
    return this.addQualifier(new GravityQualifier("liquid"));
  }
};
var ResizeCropAction = class extends ResizeAdvancedAction {
  /**
   * @description Horizontal position for custom-coordinates based cropping.
   * @param {number} x The x position.
   */
  x(x) {
    this._actionModel.x = x;
    return this.addQualifier(new Qualifier("x", x));
  }
  /**
   * @description Vertical position for custom-coordinates based cropping
   * @param {number} y The y position.
   */
  y(y) {
    this._actionModel.y = y;
    return this.addQualifier(new Qualifier("y", y));
  }
  /**
   * @description Controls how much of the original image surrounding the face to keep when using either the 'crop' or 'thumb' cropping modes with face detection.
   * @param {number | string} z The zoom factor. (Default: 1.0)
   */
  zoom(z) {
    this._actionModel.zoom = z;
    return this.addQualifier(new Qualifier("z", z));
  }
  static fromJson(actionModel) {
    const result = super.fromJson.apply(this, [actionModel]);
    actionModel.x && result.x(actionModel.x);
    actionModel.y && result.y(actionModel.y);
    actionModel.zoom && result.zoom(actionModel.zoom);
    return result;
  }
};
var ResizeFillAction = class extends ResizeAdvancedAction {
  /**
   * @description Absolute X position when used with Gravity.xyCenter {@link Qualifiers.Gravity.GravityQualifier}}
   * @param {number} x The x position.
   */
  x(x) {
    this._actionModel.x = x;
    return this.addQualifier(new Qualifier("x", x));
  }
  /**
   * @description Absolute Y position when used with Gravity.xyCenter {@link Qualifiers.Gravity.GravityQualifier}}
   * @param {number} y The y position.
   */
  y(y) {
    this._actionModel.y = y;
    return this.addQualifier(new Qualifier("y", y));
  }
  static fromJson(actionModel) {
    const result = super.fromJson.apply(this, [actionModel]);
    actionModel.x && result.x(actionModel.x);
    actionModel.y && result.y(actionModel.y);
    return result;
  }
};
function scale(width, height) {
  return new ResizeScaleAction("scale", width, height);
}
function crop(width, height) {
  return new ResizeCropAction("crop", width, height);
}
function fill(width, height) {
  return new ResizeFillAction("fill", width, height);
}
function pad(width, height) {
  return new ResizePadAction("pad", width, height);
}
var DeliveryQualityAction = class extends DeliveryAction {
  /**
   * @param {Qualifiers.Quality} qualityValue a Quality value
   */
  constructor(qualityValue) {
    super("q", qualityValue.toString(), "level");
  }
  /**
   * Selet the Chroma sub sampling</br>
   * <b>Learn more</b>: {@link https://cloudinary.com/documentation/image_optimization#toggle_chroma_subsampling|Toggling chroma subsampling}
   * @param {420 | 444 | number} type The chroma sub sampling type
   */
  chromaSubSampling(type) {
    this._actionModel.chromaSubSampling = CHROMA_VALUE_TO_CHROMA_MODEL_ENUM[type];
    const qualityWithSubSampling = new QualifierValue([this._actionModel.level, type]);
    qualityWithSubSampling.setDelimiter(":");
    return this.addQualifier(new Qualifier("q", qualityWithSubSampling));
  }
  /**
   * Controls the final quality by setting a maximum quantization percentage
   * @param {number} val
   */
  quantization(val) {
    this._actionModel.quantization = val;
    const qualityWithQuantization = new QualifierValue([this._actionModel.level, `qmax_${val}`]).setDelimiter(":");
    return this.addQualifier(new Qualifier("q", qualityWithQuantization));
  }
  static fromJson(actionModel) {
    const { level, chromaSubSampling, quantization } = actionModel;
    const levelType = ACTION_TYPE_TO_QUALITY_MODE_MAP[level] || level;
    const result = new this(levelType);
    if (chromaSubSampling) {
      const chromaValue = CHROMA_MODEL_ENUM_TO_CHROMA_VALUE[chromaSubSampling.toUpperCase()];
      chromaValue && result.chromaSubSampling(+chromaValue);
    }
    quantization && result.quantization(quantization);
    return result;
  }
};
function format(format3) {
  return new DeliveryFormatAction("f", format3);
}
function quality(qualityType) {
  return new DeliveryQualityAction(qualityType);
}
function northEast() {
  return new CompassQualifier("north_east");
}
var ACCESSIBILITY_MODES = {
  "darkmode": colorize(70).color("black"),
  "brightmode": colorize(40).color("white"),
  "monochrome": grayscale(),
  "colorblind": assistColorBlind()
};
var VECTORIZE = new Transformation().effect(vectorize()).delivery(quality("auto")).delivery(format(svg()));
var PIXELATE = new Transformation().effect(pixelate()).delivery(quality("auto")).delivery(format(auto$1()));
var BLUR = new Transformation().effect(blur(2e3)).delivery(quality("auto")).delivery(format(auto$1()));
var PREDOMINANT_COLOR_TRANSFORM = new Transformation().resize(pad("iw_div_2").aspectRatio(1).background(Background.auto())).resize(crop(1, 1).gravity(compass(northEast()))).resize(fill().height("ih").width("iw")).delivery(quality("auto")).delivery(format(auto$1()));
var PLACEHOLDER_IMAGE_OPTIONS = {
  "vectorize": VECTORIZE,
  "pixelate": PIXELATE,
  "blur": BLUR,
  "predominant-color": PREDOMINANT_COLOR_TRANSFORM
};
var singleTransparentPixel = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
var VIDEO_MIME_TYPES = {
  "flv": "x-flv",
  "3gp": "3gpp",
  "mov": "quicktime",
  "mpg": "mpeg",
  "avi": "x-msvideo",
  "wmv": "x-ms-wmv",
  "ogv": "ogg",
  "webm": "webm",
  "mp4": "mp4"
};
var ANALYTICS_DELIMITER = "?_a=";
var HtmlVideoLayer = (
  /** @class */
  function() {
    function HtmlVideoLayer2(element, userCloudinaryVideo, sources, plugins, videoAttributes, userCloudinaryPoster, videoOptions) {
      var _this = this;
      this.mimeType = "video";
      this.mimeSubTypes = VIDEO_MIME_TYPES;
      this.videoElement = element;
      this.originalVideo = userCloudinaryVideo;
      this.videoOptions = videoOptions;
      this.htmlPluginState = { cleanupCallbacks: [], pluginEventSubscription: [] };
      var pluginCloudinaryVideo = cloneDeep(userCloudinaryVideo);
      render(element, userCloudinaryVideo, plugins, this.htmlPluginState).then(function() {
        _this.htmlPluginState.pluginEventSubscription.forEach(function(fn) {
          fn();
        });
        _this.setVideoAttributes(videoAttributes, userCloudinaryPoster);
        _this.handleSourceToVideo(pluginCloudinaryVideo, sources);
      });
    }
    HtmlVideoLayer2.prototype.handleSourceToVideo = function(userCloudinaryVideo, sources) {
      var _this = this;
      if (sources) {
        this.generateUserSources(userCloudinaryVideo, sources);
      } else {
        var defaultTypes = ["webm", "mp4", "ogv"];
        defaultTypes.forEach(function(type) {
          _this.appendSourceTag(cloneDeep(userCloudinaryVideo), type);
        });
      }
    };
    HtmlVideoLayer2.prototype.generateUserSources = function(userCloudinaryVideo, sources) {
      var _this = this;
      sources.map(function(_a) {
        var type = _a.type, codecs = _a.codecs, transcode = _a.transcode;
        return _this.appendSourceTag(cloneDeep(userCloudinaryVideo).transcode(transcode), type, _this.buildMimeType(type, codecs));
      });
    };
    HtmlVideoLayer2.prototype.appendSourceTag = function(userCloudinaryVideo, type, mimeType) {
      var _a;
      var source3 = document.createElement("source");
      var shouldUseFetchFormat = (_a = this.videoOptions) === null || _a === void 0 ? void 0 : _a.useFetchFormat;
      if (shouldUseFetchFormat) {
        userCloudinaryVideo.format(type);
      }
      var url = userCloudinaryVideo.toURL();
      var srcParts = url.split(ANALYTICS_DELIMITER);
      var analyticsStr = srcParts[1] ? "".concat(ANALYTICS_DELIMITER).concat(srcParts[1]) : "";
      var ext = shouldUseFetchFormat ? "" : ".".concat(type);
      source3.src = "".concat(srcParts[0]).concat(ext).concat(analyticsStr);
      source3.type = mimeType ? mimeType : "video/".concat(VIDEO_MIME_TYPES[type] || type);
      this.videoElement.appendChild(source3);
    };
    HtmlVideoLayer2.prototype.buildMimeType = function(type, codecs) {
      var mimeType = "".concat(this.mimeType, "/").concat(this.mimeSubTypes[type] || type);
      if (codecs) {
        mimeType += "; codecs=" + (Array.isArray(codecs) ? codecs.join(", ") : codecs);
      }
      return mimeType;
    };
    HtmlVideoLayer2.prototype.setVideoAttributes = function(videoAttributes, userCloudinaryPoster) {
      var _a;
      if (videoAttributes === void 0) {
        videoAttributes = {};
      }
      if (userCloudinaryPoster === "auto") {
        var posterCloudinaryVideo = cloneDeep(this.originalVideo);
        videoAttributes["poster"] = posterCloudinaryVideo.quality("auto").format("jpg").addTransformation("so_auto").toURL();
      } else if (userCloudinaryPoster) {
        videoAttributes["poster"] = (_a = userCloudinaryPoster.toURL) === null || _a === void 0 ? void 0 : _a.call(userCloudinaryPoster);
      }
      for (var _i = 0, _b = Object.entries(videoAttributes); _i < _b.length; _i++) {
        var _c = _b[_i], key = _c[0], value = _c[1];
        value && this.videoElement.setAttribute(key, key === "poster" ? value : "");
      }
    };
    HtmlVideoLayer2.prototype.update = function(updatedCloudinaryVideo, sources, plugins, videoAttributes, userCloudinaryPoster) {
      var _this = this;
      if (updatedCloudinaryVideo !== this.originalVideo) {
        var sourcesToDelete = this.videoElement.getElementsByTagName("SOURCE");
        while (sourcesToDelete[0])
          sourcesToDelete[0].parentNode.removeChild(sourcesToDelete[0]);
        render(this.videoElement, updatedCloudinaryVideo, plugins, this.htmlPluginState).then(function() {
          _this.setVideoAttributes(videoAttributes, userCloudinaryPoster);
          _this.handleSourceToVideo(updatedCloudinaryVideo, sources);
          _this.videoElement.load();
        });
      }
    };
    return HtmlVideoLayer2;
  }()
);
var FUNC_ERROR_TEXT = "Expected a function";
var NAN = 0 / 0;
var symbolTag = "[object Symbol]";
var reTrim = /^\s+|\s+$/g;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
var nativeMax = Math.max;
var nativeMin = Math.min;
var now = function() {
  return root.Date.now();
};
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
    return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function isObject(value) {
  var type = typeof value;
  return !!value && (type == "object" || type == "function");
}
function isObjectLike(value) {
  return !!value && typeof value == "object";
}
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, "");
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var lodash_debounce = debounce;
function isNum(value) {
  return typeof value === "number";
}
function isBrowser() {
  return typeof window !== "undefined";
}
function isImage(i) {
  return i instanceof HTMLImageElement;
}
var initialPlugins = {
  accessibility: false,
  lazyload: false,
  placeholder: false,
  responsive: false
};
var getPluginType = function(name2) {
  return name2.replace("bound ", "").replace("Plugin", "");
};
var isPluginUsed = function(plugins, pluginType) {
  if (plugins === void 0) {
    plugins = [];
  }
  var usedPlugins = plugins.reduce(function(used, _a) {
    var _b;
    var name2 = _a.name;
    return __assign(__assign({}, used), (_b = {}, _b[getPluginType(name2)] = true, _b));
  }, initialPlugins);
  return usedPlugins[pluginType];
};
function responsive(_a) {
  var _b = _a === void 0 ? {} : _a, steps = _b.steps;
  return responsivePlugin.bind(null, steps);
}
function responsivePlugin(steps, element, responsiveImage, htmlPluginState, baseAnalyticsOptions, plugins) {
  if (!isBrowser())
    return true;
  if (!isImage(element))
    return;
  return new Promise(function(resolve) {
    htmlPluginState.cleanupCallbacks.push(function() {
      window.removeEventListener("resize", resizeRef);
      resolve("canceled");
    });
    var analyticsOptions = getAnalyticsOptions(baseAnalyticsOptions, { responsive: true });
    responsiveImage.addAction(new Action().setActionTag("responsive"));
    var shouldRunImmediately = !isPluginUsed(plugins, "placeholder");
    if (shouldRunImmediately) {
      onResize(steps, element, responsiveImage, analyticsOptions);
    } else {
      updateByContainerWidth(steps, element, responsiveImage);
    }
    var resizeRef;
    htmlPluginState.pluginEventSubscription.push(function() {
      window.addEventListener("resize", resizeRef = lodash_debounce(function() {
        onResize(steps, element, responsiveImage, analyticsOptions);
      }, 100));
    });
    resolve({ responsive: true });
  });
}
function onResize(steps, element, responsiveImage, analyticsOptions) {
  updateByContainerWidth(steps, element, responsiveImage);
  element.src = responsiveImage.toURL(analyticsOptions);
}
function updateByContainerWidth(steps, element, responsiveImage) {
  var responsiveImgWidth = element.parentElement.clientWidth;
  if (isNum(steps)) {
    var WIDTH_INTERVALS = steps;
    responsiveImgWidth = Math.ceil(responsiveImgWidth / WIDTH_INTERVALS) * WIDTH_INTERVALS;
  } else if (Array.isArray(steps)) {
    responsiveImgWidth = steps.reduce(function(prev, curr) {
      return Math.abs(curr - responsiveImgWidth) < Math.abs(prev - responsiveImgWidth) ? curr : prev;
    });
  }
  responsiveImage.transformation.actions.forEach(function(action, index) {
    if (action instanceof Action && action.getActionTag() === "responsive") {
      responsiveImage.transformation.actions[index] = scale(responsiveImgWidth).setActionTag("responsive");
    }
  });
}
function lazyload(_a) {
  var _b = _a === void 0 ? {} : _a, _c = _b.rootMargin, rootMargin = _c === void 0 ? "0px" : _c, _d = _b.threshold, threshold = _d === void 0 ? 0.1 : _d;
  return lazyloadPlugin.bind(null, rootMargin, threshold);
}
function lazyloadPlugin(rootMargin, threshold, element, cloudinaryImage, htmlPluginState, plugins) {
  if (rootMargin === void 0) {
    rootMargin = "0px";
  }
  if (threshold === void 0) {
    threshold = 0.1;
  }
  if (!isBrowser())
    return false;
  return new Promise(function(resolve) {
    var onIntersect = function() {
      return resolve({ lazyload: true });
    };
    var unobserve = detectIntersection(element, onIntersect, rootMargin, threshold);
    htmlPluginState.cleanupCallbacks.push(function() {
      unobserve();
      resolve("canceled");
    });
  });
}
function isIntersectionObserverSupported() {
  return window && "IntersectionObserver" in window;
}
function detectIntersection(el, onIntersect, rootMargin, threshold) {
  try {
    if (!isIntersectionObserverSupported()) {
      onIntersect();
      return function() {
      };
    }
    var observer_1 = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          observer_1.unobserve(entry.target);
          onIntersect();
        }
      });
    }, { rootMargin, threshold });
    observer_1.observe(el);
    return function() {
      el && observer_1.observe(el);
    };
  } catch (e) {
    onIntersect();
  }
}
function accessibility(_a) {
  var _b = _a === void 0 ? {} : _a, _c = _b.mode, mode2 = _c === void 0 ? "darkmode" : _c;
  return accessibilityPlugin.bind(null, mode2);
}
function accessibilityPlugin(mode2, element, pluginCloudinaryImage, htmlPluginState, plugins) {
  if (isBrowser()) {
    if (!isImage(element))
      return;
    return new Promise(function(resolve) {
      htmlPluginState.cleanupCallbacks.push(function() {
        resolve("canceled");
      });
      if (!ACCESSIBILITY_MODES[mode2]) {
        mode2 = "darkmode";
      }
      pluginCloudinaryImage.effect(ACCESSIBILITY_MODES[mode2]);
      resolve({ accessibility: true });
    });
  } else {
    pluginCloudinaryImage.effect(ACCESSIBILITY_MODES[mode2]);
    return true;
  }
}
function placeholder(_a) {
  var _b = _a === void 0 ? {} : _a, _c = _b.mode, mode2 = _c === void 0 ? "vectorize" : _c;
  return placeholderPlugin.bind(null, mode2);
}
function placeholderPlugin(mode2, element, pluginCloudinaryImage, htmlPluginState, baseAnalyticsOptions, plugins) {
  if (!PLACEHOLDER_IMAGE_OPTIONS[mode2]) {
    mode2 = "vectorize";
  }
  var PLACEHOLDER_ACTIONS = PLACEHOLDER_IMAGE_OPTIONS[mode2].actions;
  var placeholderClonedImage = cloneDeep(pluginCloudinaryImage);
  PLACEHOLDER_ACTIONS.forEach(function(transformation) {
    placeholderClonedImage.addAction(transformation);
  });
  if (!isBrowser()) {
    pluginCloudinaryImage.transformation = placeholderClonedImage.transformation;
    return true;
  }
  if (!isImage(element))
    return;
  placeholderClonedImage.transformation.actions.forEach(function(action, index) {
    if (action instanceof Action && action.getActionTag() === "responsive") {
      delete placeholderClonedImage.transformation.actions[index];
    }
  });
  var analyticsOptions = getAnalyticsOptions(baseAnalyticsOptions, { placeholder: true });
  element.src = placeholderClonedImage.toURL(analyticsOptions);
  element.onerror = function() {
    element.src = singleTransparentPixel;
  };
  return new Promise(function(resolve) {
    element.onload = function() {
      resolve();
    };
  }).then(function() {
    return new Promise(function(resolve) {
      htmlPluginState.cleanupCallbacks.push(function() {
        element.src = singleTransparentPixel;
        resolve("canceled");
      });
      var largeImage = new Image();
      largeImage.src = pluginCloudinaryImage.toURL(analyticsOptions);
      largeImage.onload = function() {
        resolve({ placeholder: true });
      };
      largeImage.onerror = function() {
        resolve({ placeholder: true });
      };
    });
  });
}
function cancelCurrentlyRunningPlugins(pluginState) {
  pluginState.cleanupCallbacks.forEach(function(fn) {
    fn();
  });
}

// node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/QualifierValue.js
var QualifierValue2 = class {
  /**
   *
   * @param {QualifierValue | QualifierValue[] | any[] | string | number}qualifierValue
   */
  constructor(qualifierValue) {
    this.values = [];
    this.delimiter = ":";
    if (this.hasValue(qualifierValue)) {
      this.addValue(qualifierValue);
    }
  }
  /**
   * @description Joins the provided values with the provided delimiter
   */
  toString() {
    return this.values.join(this.delimiter);
  }
  /**
   * @description Checks if the provided argument has a value
   * @param {any} v
   * @private
   * @return {boolean}
   */
  hasValue(v) {
    return typeof v !== "undefined" && v !== null && v !== "";
  }
  /**
   * @desc Adds a value for the this qualifier instance
   * @param {any} value
   * @return {this}
   */
  addValue(value) {
    if (Array.isArray(value)) {
      this.values = this.values.concat(value);
    } else {
      this.values.push(value);
    }
    this.values = this.values.filter((v) => this.hasValue(v));
    return this;
  }
  /**
   * @description Sets the delimiter for this instance
   * @param delimiter
   */
  setDelimiter(delimiter) {
    this.delimiter = delimiter;
    return this;
  }
};

// node_modules/@cloudinary/transformation-builder-sdk/internal/utils/unsupportedError.js
var UnsupportedError2 = class extends Error {
  constructor(message = "Unsupported") {
    super(message);
  }
};
function createUnsupportedError2(message) {
  return new UnsupportedError2(message);
}

// node_modules/@cloudinary/transformation-builder-sdk/internal/models/qualifierToJson.js
function qualifierToJson2() {
  return this._qualifierModel || { error: createUnsupportedError2(`unsupported qualifier ${this.constructor.name}`) };
}

// node_modules/@cloudinary/transformation-builder-sdk/internal/models/QualifierModel.js
var QualifierModel2 = class {
  constructor() {
    this._qualifierModel = {};
  }
  toJson() {
    return qualifierToJson2.apply(this);
  }
};

// node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js
var Qualifier2 = class extends QualifierModel2 {
  constructor(key, qualifierValue) {
    super();
    this.delimiter = "_";
    this.key = key;
    if (qualifierValue instanceof QualifierValue2) {
      this.qualifierValue = qualifierValue;
    } else {
      this.qualifierValue = new QualifierValue2();
      this.qualifierValue.addValue(qualifierValue);
    }
  }
  toString() {
    const { key, delimiter, qualifierValue } = this;
    return `${key}${delimiter}${qualifierValue.toString()}`;
  }
  addValue(value) {
    this.qualifierValue.addValue(value);
    return this;
  }
};

// node_modules/@cloudinary/transformation-builder-sdk/internal/utils/objectFlip.js
function objectFlip2(obj) {
  const result = {};
  Object.keys(obj).forEach((key) => {
    result[obj[key]] = key;
  });
  return result;
}

// node_modules/@cloudinary/transformation-builder-sdk/internal/internalConstants.js
var ACTION_TYPE_TO_CROP_MODE_MAP2 = {
  limitFit: "limit",
  limitFill: "lfill",
  minimumFit: "mfit",
  thumbnail: "thumb",
  limitPad: "lpad",
  minimumPad: "mpad",
  autoPad: "auto_pad"
};
var ACTION_TYPE_TO_DELIVERY_MODE_MAP2 = {
  colorSpace: "cs",
  dpr: "dpr",
  density: "dn",
  defaultImage: "d",
  format: "f",
  quality: "q"
};
var ACTION_TYPE_TO_EFFECT_MODE_MAP2 = {
  redEye: "redeye",
  advancedRedEye: "adv_redeye",
  oilPaint: "oil_paint",
  unsharpMask: "unsharp_mask",
  makeTransparent: "make_transparent",
  generativeRestore: "gen_restore",
  upscale: "upscale"
};
var ACTION_TYPE_TO_QUALITY_MODE_MAP2 = {
  autoBest: "auto:best",
  autoEco: "auto:eco",
  autoGood: "auto:good",
  autoLow: "auto:low",
  jpegminiHigh: "jpegmini:1",
  jpegminiMedium: "jpegmini:2",
  jpegminiBest: "jpegmini:0"
};
var ACTION_TYPE_TO_STREAMING_PROFILE_MODE_MAP2 = {
  fullHd: "full_hd",
  fullHdWifi: "full_hd_wifi",
  fullHdLean: "full_hd_lean",
  hdLean: "hd_lean"
};
var CHROMA_VALUE_TO_CHROMA_MODEL_ENUM2 = {
  444: "CHROMA_444",
  420: "CHROMA_420"
};
var COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP2 = {
  "noCmyk": "no_cmyk",
  "keepCmyk": "keep_cmyk",
  "tinySrgb": "tinysrgb",
  "srgbTrueColor": "srgb:truecolor"
};
var CHROMA_MODEL_ENUM_TO_CHROMA_VALUE2 = objectFlip2(CHROMA_VALUE_TO_CHROMA_MODEL_ENUM2);
var COLOR_SPACE_MODE_TO_COLOR_SPACE_MODEL_MODE_MAP = objectFlip2(COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP2);
var CROP_MODE_TO_ACTION_TYPE_MAP2 = objectFlip2(ACTION_TYPE_TO_CROP_MODE_MAP2);
var DELIVERY_MODE_TO_ACTION_TYPE_MAP2 = objectFlip2(ACTION_TYPE_TO_DELIVERY_MODE_MAP2);
var EFFECT_MODE_TO_ACTION_TYPE_MAP2 = objectFlip2(ACTION_TYPE_TO_EFFECT_MODE_MAP2);
var QUALITY_MODE_TO_ACTION_TYPE_MAP = objectFlip2(ACTION_TYPE_TO_QUALITY_MODE_MAP2);
var STREAMING_PROFILE_TO_ACTION_TYPE_MAP = objectFlip2(ACTION_TYPE_TO_STREAMING_PROFILE_MODE_MAP2);

// node_modules/@cloudinary/url-gen/sdkAnalytics/stringPad.js
function stringPad(value, _targetLength, _padString) {
  let targetLength = _targetLength >> 0;
  let padString = String(typeof _padString !== "undefined" ? _padString : " ");
  if (value.length > targetLength) {
    return String(value);
  } else {
    targetLength = targetLength - value.length;
    if (targetLength > padString.length) {
      padString += repeatStringNumTimes(padString, targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + String(value);
  }
}
function repeatStringNumTimes(string, _times) {
  let times = _times;
  let repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}

// node_modules/@cloudinary/url-gen/sdkAnalytics/base64Map.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64Map = {};
var num = 0;
chars.split("").forEach((char) => {
  let key = num.toString(2);
  key = stringPad(key, 6, "0");
  base64Map[key] = char;
  num++;
});

// node_modules/@cloudinary/transformation-builder-sdk/backwards/consts.js
var NUMBER_PATTERN = "([0-9]*)\\.([0-9]+)|([0-9]+)";
var OFFSET_ANY_PATTERN = `(${NUMBER_PATTERN})([%pP])?`;
var RANGE_VALUE_RE = RegExp(`^${OFFSET_ANY_PATTERN}$`);
var OFFSET_ANY_PATTERN_RE = RegExp(`(${OFFSET_ANY_PATTERN})\\.\\.(${OFFSET_ANY_PATTERN})`);

// node_modules/@cloudinary/transformation-builder-sdk/backwards/utils/snakeCase.js
var snakeCase = (str) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

// node_modules/@cloudinary/transformation-builder-sdk/internal/utils/cloneDeep.js
var LARGE_ARRAY_SIZE = 200;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var argsTag = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag = "[object Object]";
var promiseTag = "[object Promise]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var symbolTag2 = "[object Symbol]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag2] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
var freeGlobal2 = typeof global == "object" && global && global.Object === Object && global;
var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
var root2 = freeGlobal2 || freeSelf2 || Function("return this")();
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function isHostObject(value) {
  var result = false;
  if (value != null && typeof value.toString != "function") {
    try {
      result = !!`${value}`;
    } catch (e) {
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var arrayProto = Array.prototype;
var funcProto = Function.prototype;
var objectProto2 = Object.prototype;
var coreJsData = root2["__core-js_shared__"];
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? `Symbol(src)_1.${uid}` : "";
}();
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto2.hasOwnProperty;
var objectToString2 = objectProto2.toString;
var reIsNative = RegExp(`^${funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?")}$`);
var Buffer = moduleExports ? root2.Buffer : void 0;
var Symbol2 = root2.Symbol;
var Uint8Array = root2.Uint8Array;
var getPrototype = overArg(Object.getPrototypeOf, Object);
var propertyIsEnumerable = objectProto2.propertyIsEnumerable;
var splice = arrayProto.splice;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
var nativeKeys = overArg(Object.keys, Object);
var DataView = getNative(root2, "DataView");
var Map2 = getNative(root2, "Map");
var Promise2 = getNative(root2, "Promise");
var Set = getNative(root2, "Set");
var WeakMap = getNative(root2, "WeakMap");
var nativeCreate = getNative(Object, "create");
var dataViewCtorString = toSource(DataView);
var mapCtorString = toSource(Map2);
var promiseCtorString = toSource(Promise2);
var setCtorString = toSource(Set);
var weakMapCtorString = toSource(WeakMap);
var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function Hash(entries) {
  var index = -1, length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : void 0;
}
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
}
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
Hash.prototype.clear = hashClear;
Hash.prototype.delete = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function ListCache(entries) {
  var index = -1, length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function listCacheClear() {
  this.__data__ = [];
}
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype.delete = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function MapCache(entries) {
  var index = -1, length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function mapCacheClear() {
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map2 || ListCache)(),
    "string": new Hash()
  };
}
function mapCacheDelete(key) {
  return getMapData(this, key).delete(key);
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype.delete = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}
function stackClear() {
  this.__data__ = new ListCache();
}
function stackDelete(key) {
  return this.__data__.delete(key);
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}
Stack.prototype.clear = stackClear;
Stack.prototype.delete = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
function baseGetTag(value) {
  return objectToString2.call(value);
}
function baseIsNative(value) {
  if (!isObject3(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
var getTag = baseGetTag;
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function(value) {
    var result = objectToString2.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return `${func}`;
    } catch (e) {
    }
  }
  return "";
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var isArray = Array.isArray;
function isFunction(value) {
  var tag = isObject3(value) ? objectToString2.call(value) : "";
  return tag == funcTag || tag == genTag;
}
function isObject3(value) {
  var type = typeof value;
  return !!value && (type == "object" || type == "function");
}
function stubArray() {
  return [];
}

// node_modules/@cloudinary/transformation-builder-sdk/backwards/configuration.js
var DEFAULT_CONFIGURATION_PARAMS = {
  responsive_class: "cld-responsive",
  responsive_use_breakpoints: true,
  round_dpr: true,
  secure: (typeof window !== "undefined" && window !== null ? window.location ? window.location.protocol : void 0 : void 0) === "https:"
};
var CONFIG_PARAMS = [
  "api_key",
  "api_secret",
  "callback",
  "cdn_subdomain",
  "cloud_name",
  "cname",
  "private_cdn",
  "protocol",
  "resource_type",
  "responsive",
  "responsive_class",
  "responsive_use_breakpoints",
  "responsive_width",
  "round_dpr",
  "secure",
  "secure_cdn_subdomain",
  "secure_distribution",
  "shorten",
  "type",
  "upload_preset",
  "url_suffix",
  "use_root_path",
  "version",
  "externalLibraries",
  "max_timeout_ms"
];

// node_modules/@cloudinary/transformation-builder-sdk/backwards/utils/legacyBaseUtil.js
var reWords = function() {
  var lower, upper;
  upper = "[A-Z]";
  lower = "[a-z]+";
  return RegExp(upper + "+(?=" + upper + lower + ")|" + upper + "?" + lower + "|" + upper + "+|[0-9]+", "g");
}();

// node_modules/@cloudinary/transformation-builder-sdk/backwards/transformation.js
var number_pattern = "([0-9]*)\\.([0-9]+)|([0-9]+)";
var offset_any_pattern = "(" + number_pattern + ")([%pP])?";
var methods = [
  "angle",
  "audioCodec",
  "audioFrequency",
  "aspectRatio",
  "background",
  "bitRate",
  "border",
  "color",
  "colorSpace",
  "crop",
  "customFunction",
  "customPreFunction",
  "defaultImage",
  "delay",
  "density",
  "duration",
  "dpr",
  "effect",
  "else",
  "endIf",
  "endOffset",
  "fallbackContent",
  "fetchFormat",
  "format",
  "flags",
  "gravity",
  "fps",
  "height",
  "htmlHeight",
  "htmlWidth",
  "if",
  "keyframeInterval",
  "ocr",
  "offset",
  "opacity",
  "overlay",
  "page",
  "poster",
  "prefix",
  "quality",
  "radius",
  "rawTransformation",
  "size",
  "sourceTypes",
  "sourceTransformation",
  "startOffset",
  "streamingProfile",
  "transformation",
  "underlay",
  "variable",
  "variables",
  "videoCodec",
  "videoSampling",
  "width",
  "x",
  "y",
  "zoom"
];
var PARAM_NAMES = methods.map(snakeCase).concat(CONFIG_PARAMS);

// node_modules/@cloudinary/transformation-builder-sdk/qualifiers/autoFocus.js
var AutoFocus2 = class _AutoFocus extends QualifierValue2 {
  constructor(focusOn4, weight) {
    super();
    this._weight = weight;
    this.focusOn = focusOn4;
    this.shouldAvoid = false;
  }
  /**
   * @summary qualifier
   * @description Specifies the object to focus on automatically
   * Accepts an AutoFocusObject (which is just a wrapper for a FocusOn object, but with extra method: avoid, weight)
   * @param {Qualifiers.FocusOn} obj The object to focus on.
   * @param {number} weight
   */
  static focusOn(obj, weight) {
    return new _AutoFocus(obj, weight);
  }
  shouldAddWeight() {
    return typeof this._weight === "number" || typeof this._weight === "string" || this.shouldAvoid;
  }
  /**
   * @summary qualifier
   * @desc Get the name of the of the object
   */
  getName() {
    return this.focusOn.name;
  }
  /**
   * @summary qualifier
   * @desc Get the weight for the object
   */
  getWeight() {
    if (this.shouldAvoid) {
      return "avoid";
    } else {
      return this._weight;
    }
  }
  /**
   * @summary qualifier
   * @desc Return the string representation of this QualifierValue
   */
  toString() {
    if (this.shouldAddWeight()) {
      return `${this.getName()}_${this.getWeight()}`;
    } else {
      return `${this.getName()}`;
    }
  }
  /**
   * @summary qualifier
   * @description Sets the importance level of the object within the automatic gravity algorithm
   * @param {numebr} w The focus weight for the object
   * @return {this}
   */
  weight(w) {
    this._weight = w;
    return this;
  }
  /**
   * @summary qualifier
   * @description Attempts to avoid the detected object in the image
   * @return {this}
   */
  avoid() {
    this.shouldAvoid = true;
    return this;
  }
};
var focusOn2 = AutoFocus2.focusOn;

// node_modules/@cloudinary/transformation-builder-sdk/qualifiers/videoCodecType/VideoCodecType.js
var VideoCodecType = class extends Qualifier2 {
  constructor(type) {
    super("vc");
    this._type = type;
    this.addValue(type);
  }
  getType() {
    return this._type;
  }
};
var AdvVideoCodecType = class extends Qualifier2 {
  constructor(type) {
    super("vc");
    this._type = type;
  }
  getType() {
    return this._type;
  }
  /**
   * @description Specifies the profile to use with the h264 codec.
   * @param {Qualifiers.VideoCodecProfile | string} profile Sets the profile of the video codec
   * @example new AdvVideoCodecType('h264').profile(VideoCodecProfile.baseline())
   * @return this;
   */
  profile(profile) {
    this._prof = profile;
    return this;
  }
  getProfile() {
    return this._prof;
  }
  /**
   * @description Specifies the level to use with the h264 codec and specified profile.
   * @param {Qualifiers.VideoCodecLevel | number | string} lvl
   * @example new AdvVideoCodecType('h264').profile(VideoCodecLevel.baseline())
   * @return this;
   */
  level(lvl) {
    this._lvl = lvl;
    return this;
  }
  getLevel() {
    return this._lvl;
  }
  /**
   * @description returns a toString representation of this qualifier
   * @return string;
   */
  toString() {
    return `vc_${this._type}:${this._prof}:${this._lvl}`;
  }
};

// node_modules/@cloudinary/transformation-builder-sdk/qualifiers/videoCodec.js
function auto3() {
  return new VideoCodecType("auto");
}
function h264() {
  return new AdvVideoCodecType("h264");
}
function h265() {
  return new VideoCodecType("h265");
}
function proRes() {
  return new VideoCodecType("prores");
}
function theora() {
  return new VideoCodecType("theora");
}
function vp8() {
  return new VideoCodecType("vp8");
}
function vp9() {
  return new VideoCodecType("vp9");
}
var VIDEO_CODEC_TO_TRANSFORMATION = {
  "auto": auto3(),
  "h264": h264(),
  "h265": h265(),
  "prores": proRes(),
  "theora": theora(),
  "vp8": vp8(),
  "vp9": vp9()
};

// node_modules/@cloudinary/url-gen/internal/utils/cloneDeep.js
var LARGE_ARRAY_SIZE2 = 200;
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
var argsTag2 = "[object Arguments]";
var arrayTag2 = "[object Array]";
var boolTag2 = "[object Boolean]";
var dateTag2 = "[object Date]";
var errorTag2 = "[object Error]";
var funcTag2 = "[object Function]";
var genTag2 = "[object GeneratorFunction]";
var mapTag2 = "[object Map]";
var numberTag2 = "[object Number]";
var objectTag2 = "[object Object]";
var promiseTag2 = "[object Promise]";
var regexpTag2 = "[object RegExp]";
var setTag2 = "[object Set]";
var stringTag2 = "[object String]";
var symbolTag3 = "[object Symbol]";
var weakMapTag2 = "[object WeakMap]";
var arrayBufferTag2 = "[object ArrayBuffer]";
var dataViewTag2 = "[object DataView]";
var float32Tag2 = "[object Float32Array]";
var float64Tag2 = "[object Float64Array]";
var int8Tag2 = "[object Int8Array]";
var int16Tag2 = "[object Int16Array]";
var int32Tag2 = "[object Int32Array]";
var uint8Tag2 = "[object Uint8Array]";
var uint8ClampedTag2 = "[object Uint8ClampedArray]";
var uint16Tag2 = "[object Uint16Array]";
var uint32Tag2 = "[object Uint32Array]";
var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor2 = /^\[object .+?Constructor\]$/;
var cloneableTags2 = {};
cloneableTags2[argsTag2] = cloneableTags2[arrayTag2] = cloneableTags2[arrayBufferTag2] = cloneableTags2[dataViewTag2] = cloneableTags2[boolTag2] = cloneableTags2[dateTag2] = cloneableTags2[float32Tag2] = cloneableTags2[float64Tag2] = cloneableTags2[int8Tag2] = cloneableTags2[int16Tag2] = cloneableTags2[int32Tag2] = cloneableTags2[mapTag2] = cloneableTags2[numberTag2] = cloneableTags2[objectTag2] = cloneableTags2[regexpTag2] = cloneableTags2[setTag2] = cloneableTags2[stringTag2] = cloneableTags2[symbolTag3] = cloneableTags2[uint8Tag2] = cloneableTags2[uint8ClampedTag2] = cloneableTags2[uint16Tag2] = cloneableTags2[uint32Tag2] = true;
cloneableTags2[errorTag2] = cloneableTags2[funcTag2] = cloneableTags2[weakMapTag2] = false;
var freeGlobal3 = typeof global == "object" && global && global.Object === Object && global;
var freeSelf3 = typeof self == "object" && self && self.Object === Object && self;
var root3 = freeGlobal3 || freeSelf3 || Function("return this")();
var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
function getValue2(object, key) {
  return object == null ? void 0 : object[key];
}
function isHostObject2(value) {
  var result = false;
  if (value != null && typeof value.toString != "function") {
    try {
      result = !!`${value}`;
    } catch (e) {
    }
  }
  return result;
}
function overArg2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var arrayProto2 = Array.prototype;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var coreJsData2 = root3["__core-js_shared__"];
var maskSrcKey2 = function() {
  var uid = /[^.]+$/.exec(coreJsData2 && coreJsData2.keys && coreJsData2.keys.IE_PROTO || "");
  return uid ? `Symbol(src)_1.${uid}` : "";
}();
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var objectToString3 = objectProto3.toString;
var reIsNative2 = RegExp(`^${funcToString2.call(hasOwnProperty2).replace(reRegExpChar2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?")}$`);
var Buffer2 = moduleExports2 ? root3.Buffer : void 0;
var Symbol3 = root3.Symbol;
var Uint8Array2 = root3.Uint8Array;
var getPrototype2 = overArg2(Object.getPrototypeOf, Object);
var propertyIsEnumerable2 = objectProto3.propertyIsEnumerable;
var splice2 = arrayProto2.splice;
var nativeGetSymbols2 = Object.getOwnPropertySymbols;
var nativeIsBuffer2 = Buffer2 ? Buffer2.isBuffer : void 0;
var nativeKeys2 = overArg2(Object.keys, Object);
var DataView2 = getNative2(root3, "DataView");
var Map3 = getNative2(root3, "Map");
var Promise3 = getNative2(root3, "Promise");
var Set2 = getNative2(root3, "Set");
var WeakMap2 = getNative2(root3, "WeakMap");
var nativeCreate2 = getNative2(Object, "create");
var dataViewCtorString2 = toSource2(DataView2);
var mapCtorString2 = toSource2(Map3);
var promiseCtorString2 = toSource2(Promise3);
var setCtorString2 = toSource2(Set2);
var weakMapCtorString2 = toSource2(WeakMap2);
var symbolProto2 = Symbol3 ? Symbol3.prototype : void 0;
var symbolValueOf2 = symbolProto2 ? symbolProto2.valueOf : void 0;
function Hash2(entries) {
  var index = -1, length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function hashClear2() {
  this.__data__ = nativeCreate2 ? nativeCreate2(null) : {};
}
function hashDelete2(key) {
  return this.has(key) && delete this.__data__[key];
}
function hashGet2(key) {
  var data = this.__data__;
  if (nativeCreate2) {
    var result = data[key];
    return result === HASH_UNDEFINED2 ? void 0 : result;
  }
  return hasOwnProperty2.call(data, key) ? data[key] : void 0;
}
function hashHas2(key) {
  var data = this.__data__;
  return nativeCreate2 ? data[key] !== void 0 : hasOwnProperty2.call(data, key);
}
function hashSet2(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate2 && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
Hash2.prototype.clear = hashClear2;
Hash2.prototype.delete = hashDelete2;
Hash2.prototype.get = hashGet2;
Hash2.prototype.has = hashHas2;
Hash2.prototype.set = hashSet2;
function ListCache2(entries) {
  var index = -1, length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function listCacheClear2() {
  this.__data__ = [];
}
function listCacheDelete2(key) {
  var data = this.__data__, index = assocIndexOf2(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice2.call(data, index, 1);
  }
  return true;
}
function listCacheGet2(key) {
  var data = this.__data__, index = assocIndexOf2(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas2(key) {
  return assocIndexOf2(this.__data__, key) > -1;
}
function listCacheSet2(key, value) {
  var data = this.__data__, index = assocIndexOf2(data, key);
  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
ListCache2.prototype.clear = listCacheClear2;
ListCache2.prototype.delete = listCacheDelete2;
ListCache2.prototype.get = listCacheGet2;
ListCache2.prototype.has = listCacheHas2;
ListCache2.prototype.set = listCacheSet2;
function MapCache2(entries) {
  var index = -1, length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function mapCacheClear2() {
  this.__data__ = {
    "hash": new Hash2(),
    "map": new (Map3 || ListCache2)(),
    "string": new Hash2()
  };
}
function mapCacheDelete2(key) {
  return getMapData2(this, key).delete(key);
}
function mapCacheGet2(key) {
  return getMapData2(this, key).get(key);
}
function mapCacheHas2(key) {
  return getMapData2(this, key).has(key);
}
function mapCacheSet2(key, value) {
  getMapData2(this, key).set(key, value);
  return this;
}
MapCache2.prototype.clear = mapCacheClear2;
MapCache2.prototype.delete = mapCacheDelete2;
MapCache2.prototype.get = mapCacheGet2;
MapCache2.prototype.has = mapCacheHas2;
MapCache2.prototype.set = mapCacheSet2;
function Stack2(entries) {
  this.__data__ = new ListCache2(entries);
}
function stackClear2() {
  this.__data__ = new ListCache2();
}
function stackDelete2(key) {
  return this.__data__.delete(key);
}
function stackGet2(key) {
  return this.__data__.get(key);
}
function stackHas2(key) {
  return this.__data__.has(key);
}
function stackSet2(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache2) {
    var pairs = cache.__data__;
    if (!Map3 || pairs.length < LARGE_ARRAY_SIZE2 - 1) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache2(pairs);
  }
  cache.set(key, value);
  return this;
}
Stack2.prototype.clear = stackClear2;
Stack2.prototype.delete = stackDelete2;
Stack2.prototype.get = stackGet2;
Stack2.prototype.has = stackHas2;
Stack2.prototype.set = stackSet2;
function assocIndexOf2(array, key) {
  var length = array.length;
  while (length--) {
    if (eq2(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
function baseGetTag2(value) {
  return objectToString3.call(value);
}
function baseIsNative2(value) {
  if (!isObject4(value) || isMasked2(value)) {
    return false;
  }
  var pattern = isFunction3(value) || isHostObject2(value) ? reIsNative2 : reIsHostCtor2;
  return pattern.test(toSource2(value));
}
function getMapData2(map, key) {
  var data = map.__data__;
  return isKeyable2(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function getNative2(object, key) {
  var value = getValue2(object, key);
  return baseIsNative2(value) ? value : void 0;
}
var getSymbols2 = nativeGetSymbols2 ? overArg2(nativeGetSymbols2, Object) : stubArray2;
var getTag2 = baseGetTag2;
if (DataView2 && getTag2(new DataView2(new ArrayBuffer(1))) != dataViewTag2 || Map3 && getTag2(new Map3()) != mapTag2 || Promise3 && getTag2(Promise3.resolve()) != promiseTag2 || Set2 && getTag2(new Set2()) != setTag2 || WeakMap2 && getTag2(new WeakMap2()) != weakMapTag2) {
  getTag2 = function(value) {
    var result = objectToString3.call(value), Ctor = result == objectTag2 ? value.constructor : void 0, ctorString = Ctor ? toSource2(Ctor) : void 0;
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString2:
          return dataViewTag2;
        case mapCtorString2:
          return mapTag2;
        case promiseCtorString2:
          return promiseTag2;
        case setCtorString2:
          return setTag2;
        case weakMapCtorString2:
          return weakMapTag2;
      }
    }
    return result;
  };
}
function isKeyable2(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function isMasked2(func) {
  return !!maskSrcKey2 && maskSrcKey2 in func;
}
function toSource2(func) {
  if (func != null) {
    try {
      return funcToString2.call(func);
    } catch (e) {
    }
    try {
      return `${func}`;
    } catch (e) {
    }
  }
  return "";
}
function eq2(value, other) {
  return value === other || value !== value && other !== other;
}
var isArray2 = Array.isArray;
function isFunction3(value) {
  var tag = isObject4(value) ? objectToString3.call(value) : "";
  return tag == funcTag2 || tag == genTag2;
}
function isObject4(value) {
  var type = typeof value;
  return !!value && (type == "object" || type == "function");
}
function stubArray2() {
  return [];
}

// node_modules/@cloudinary/url-gen/backwards/consts.js
var NUMBER_PATTERN2 = "([0-9]*)\\.([0-9]+)|([0-9]+)";
var OFFSET_ANY_PATTERN2 = `(${NUMBER_PATTERN2})([%pP])?`;
var RANGE_VALUE_RE2 = RegExp(`^${OFFSET_ANY_PATTERN2}$`);
var OFFSET_ANY_PATTERN_RE2 = RegExp(`(${OFFSET_ANY_PATTERN2})\\.\\.(${OFFSET_ANY_PATTERN2})`);

// node_modules/@cloudinary/url-gen/backwards/utils/snakeCase.js
var snakeCase2 = (str) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

// node_modules/@cloudinary/url-gen/backwards/configuration.js
var DEFAULT_CONFIGURATION_PARAMS2 = {
  responsive_class: "cld-responsive",
  responsive_use_breakpoints: true,
  round_dpr: true,
  secure: (typeof window !== "undefined" && window !== null ? window.location ? window.location.protocol : void 0 : void 0) === "https:"
};
var CONFIG_PARAMS2 = [
  "api_key",
  "api_secret",
  "callback",
  "cdn_subdomain",
  "cloud_name",
  "cname",
  "private_cdn",
  "protocol",
  "resource_type",
  "responsive",
  "responsive_class",
  "responsive_use_breakpoints",
  "responsive_width",
  "round_dpr",
  "secure",
  "secure_cdn_subdomain",
  "secure_distribution",
  "shorten",
  "type",
  "upload_preset",
  "url_suffix",
  "use_root_path",
  "version",
  "externalLibraries",
  "max_timeout_ms"
];

// node_modules/@cloudinary/url-gen/backwards/utils/legacyBaseUtil.js
var reWords2 = function() {
  var lower, upper;
  upper = "[A-Z]";
  lower = "[a-z]+";
  return RegExp(upper + "+(?=" + upper + lower + ")|" + upper + "?" + lower + "|" + upper + "+|[0-9]+", "g");
}();

// node_modules/@cloudinary/url-gen/backwards/transformation.js
var number_pattern2 = "([0-9]*)\\.([0-9]+)|([0-9]+)";
var offset_any_pattern2 = "(" + number_pattern2 + ")([%pP])?";
var methods2 = [
  "angle",
  "audioCodec",
  "audioFrequency",
  "aspectRatio",
  "background",
  "bitRate",
  "border",
  "color",
  "colorSpace",
  "crop",
  "customFunction",
  "customPreFunction",
  "defaultImage",
  "delay",
  "density",
  "duration",
  "dpr",
  "effect",
  "else",
  "endIf",
  "endOffset",
  "fallbackContent",
  "fetchFormat",
  "format",
  "flags",
  "gravity",
  "fps",
  "height",
  "htmlHeight",
  "htmlWidth",
  "if",
  "keyframeInterval",
  "ocr",
  "offset",
  "opacity",
  "overlay",
  "page",
  "poster",
  "prefix",
  "quality",
  "radius",
  "rawTransformation",
  "size",
  "sourceTypes",
  "sourceTransformation",
  "startOffset",
  "streamingProfile",
  "transformation",
  "underlay",
  "variable",
  "variables",
  "videoCodec",
  "videoSampling",
  "width",
  "x",
  "y",
  "zoom"
];
var PARAM_NAMES2 = methods2.map(snakeCase2).concat(CONFIG_PARAMS2);

// node_modules/@cloudinary/ng/fesm2015/cloudinary-ng.js
var APP_VERSION = "2.0.2";
var SDKAnalyticsConstants = {
  sdkSemver: APP_VERSION,
  techVersion: VERSION.full,
  sdkCode: "K"
};
var CloudinaryImageComponent = class {
  constructor(el) {
    this.el = el;
  }
  /**
   * On init creates a new HTMLLayer instance and initializes with ref to img element,
   * user generated cloudinaryImage and the plugins to be used.
   */
  ngOnInit() {
    this.htmlLayerInstance = new HtmlImageLayer(this.el.nativeElement.children[0], this.cldImg, this.plugins, SDKAnalyticsConstants);
    this.addAttributes();
  }
  /**
   * On update, we cancel running plugins and update the image instance with the state of user
   * cloudinaryImage and the state of plugins.
   */
  ngOnChanges() {
    if (this.htmlLayerInstance) {
      cancelCurrentlyRunningPlugins(this.htmlLayerInstance.htmlPluginState);
      this.htmlLayerInstance.update(this.cldImg, this.plugins, SDKAnalyticsConstants);
    }
  }
  /**
   * On destroy, we cancel the currently running plugins.
   */
  ngOnDestroy() {
    cancelCurrentlyRunningPlugins(this.htmlLayerInstance.htmlPluginState);
  }
  /**
   * Add attributes to img element.
   */
  addAttributes() {
    ["alt", "width", "height", "loading"].forEach((attr) => {
      if (this[attr]) {
        this.el.nativeElement.children[0].setAttribute(attr, this[attr]);
        this.el.nativeElement.removeAttribute(attr);
      }
    });
  }
};
CloudinaryImageComponent.ɵfac = function CloudinaryImageComponent_Factory(t) {
  return new (t || CloudinaryImageComponent)(ɵɵdirectiveInject(ElementRef));
};
CloudinaryImageComponent.ɵcmp = ɵɵdefineComponent({
  type: CloudinaryImageComponent,
  selectors: [["advanced-image"]],
  inputs: {
    cldImg: "cldImg",
    plugins: "plugins",
    alt: "alt",
    width: "width",
    height: "height",
    loading: "loading"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 0,
  template: function CloudinaryImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "img");
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloudinaryImageComponent, [{
    type: Component,
    args: [{
      selector: "advanced-image",
      template: `
    <img />
  `,
      styleUrls: ["./cloudinary-image.component.css"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    cldImg: [{
      type: Input,
      args: ["cldImg"]
    }],
    plugins: [{
      type: Input,
      args: ["plugins"]
    }],
    alt: [{
      type: Input,
      args: ["alt"]
    }],
    width: [{
      type: Input,
      args: ["width"]
    }],
    height: [{
      type: Input,
      args: ["height"]
    }],
    loading: [{
      type: Input,
      args: ["loading"]
    }]
  });
})();
var CloudinaryVideoComponent = class {
  constructor(el) {
    this.el = el;
    this.play = new EventEmitter();
    this.loadstart = new EventEmitter();
    this.playing = new EventEmitter();
    this.error = new EventEmitter();
    this.ended = new EventEmitter();
    this.controls = this.el.nativeElement.attributes.controls;
    this.loop = this.el.nativeElement.attributes.loop;
    this.muted = this.el.nativeElement.attributes.muted;
    this.preload = this.el.nativeElement.attributes.preload;
    this.autoPlay = this.el.nativeElement.attributes.autoplay;
    this.playsInline = this.el.nativeElement.attributes.playsInline;
  }
  /**
   * On init creates a new HTMLVideoLayer instance and initializes with ref to video element,
   * user generated cloudinaryVideo and the plugins to be used.
   */
  ngOnInit() {
    this.htmlVideoLayerInstance = new HtmlVideoLayer(this.el.nativeElement.children[0], this.cldVid, this.sources, this.plugins, this.getVideoAttributes(), this.cldPoster);
    if (this.muted) {
      this.el.nativeElement.children[0].muted = true;
    }
    this.attachRef();
  }
  /**
   * On update, we cancel running plugins and update the video instance if the src
   * was changed.
   */
  ngOnChanges() {
    if (this.htmlVideoLayerInstance) {
      cancelCurrentlyRunningPlugins(this.htmlVideoLayerInstance.htmlPluginState);
      this.htmlVideoLayerInstance.update(this.cldVid, this.sources, this.plugins, this.getVideoAttributes(), this.cldPoster);
    }
  }
  /**
   * On destroy, we cancel the currently running plugins.
   */
  ngOnDestroy() {
    cancelCurrentlyRunningPlugins(this.htmlVideoLayerInstance.htmlPluginState);
  }
  /**
   * Returns video attributes.
   */
  getVideoAttributes() {
    return {
      controls: this.controls,
      loop: this.loop,
      muted: this.muted,
      poster: this.poster,
      preload: this.preload,
      autoplay: this.autoPlay,
      playsinline: this.playsInline
    };
  }
  emitPlayEvent() {
    this.play.emit();
  }
  emitLoadstartEvent() {
    this.loadstart.emit();
  }
  emitPlayingEvent() {
    this.playing.emit();
  }
  emitErrorEvent() {
    this.error.emit();
  }
  emitEndedEvent() {
    this.ended.emit();
  }
  /**
   * Attach both this.videoRef and props.innerRef as ref to the given element.
   */
  attachRef() {
    if (this.innerRef) {
      this.innerRef.nativeElement = this.el.nativeElement.children[0];
    }
  }
};
CloudinaryVideoComponent.ɵfac = function CloudinaryVideoComponent_Factory(t) {
  return new (t || CloudinaryVideoComponent)(ɵɵdirectiveInject(ElementRef));
};
CloudinaryVideoComponent.ɵcmp = ɵɵdefineComponent({
  type: CloudinaryVideoComponent,
  selectors: [["advanced-video"]],
  inputs: {
    cldVid: "cldVid",
    cldPoster: "cldPoster",
    sources: "sources",
    plugins: "plugins",
    poster: "poster",
    innerRef: "innerRef"
  },
  outputs: {
    play: "play",
    loadstart: "loadstart",
    playing: "playing",
    error: "error",
    ended: "ended"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 0,
  consts: [[3, "play", "loadstart", "playing", "error", "ended"]],
  template: function CloudinaryVideoComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "video", 0);
      ɵɵlistener("play", function CloudinaryVideoComponent_Template_video_play_0_listener() {
        return ctx.emitPlayEvent();
      })("loadstart", function CloudinaryVideoComponent_Template_video_loadstart_0_listener() {
        return ctx.emitLoadstartEvent();
      })("playing", function CloudinaryVideoComponent_Template_video_playing_0_listener() {
        return ctx.emitPlayingEvent();
      })("error", function CloudinaryVideoComponent_Template_video_error_0_listener() {
        return ctx.emitErrorEvent;
      })("ended", function CloudinaryVideoComponent_Template_video_ended_0_listener() {
        return ctx.emitEndedEvent;
      });
      ɵɵelementEnd();
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloudinaryVideoComponent, [{
    type: Component,
    args: [{
      // tslint:disable-next-line:component-selector
      selector: "advanced-video",
      template: `<video (play)="emitPlayEvent()"
                    (loadstart)="emitLoadstartEvent()"
                    (playing)="emitPlayingEvent()"
                    (error)="emitErrorEvent"
                    (ended)="emitEndedEvent">
            </video>`
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    cldVid: [{
      type: Input,
      args: ["cldVid"]
    }],
    cldPoster: [{
      type: Input,
      args: ["cldPoster"]
    }],
    sources: [{
      type: Input,
      args: ["sources"]
    }],
    plugins: [{
      type: Input,
      args: ["plugins"]
    }],
    poster: [{
      type: Input,
      args: ["poster"]
    }],
    innerRef: [{
      type: Input,
      args: ["innerRef"]
    }],
    play: [{
      type: Output
    }],
    loadstart: [{
      type: Output
    }],
    playing: [{
      type: Output
    }],
    error: [{
      type: Output
    }],
    ended: [{
      type: Output
    }]
  });
})();
var CloudinaryModule = class {
};
CloudinaryModule.ɵfac = function CloudinaryModule_Factory(t) {
  return new (t || CloudinaryModule)();
};
CloudinaryModule.ɵmod = ɵɵdefineNgModule({
  type: CloudinaryModule,
  declarations: [CloudinaryImageComponent, CloudinaryVideoComponent],
  exports: [CloudinaryImageComponent, CloudinaryVideoComponent]
});
CloudinaryModule.ɵinj = ɵɵdefineInjector({
  imports: [[]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloudinaryModule, [{
    type: NgModule,
    args: [{
      imports: [],
      declarations: [CloudinaryImageComponent, CloudinaryVideoComponent],
      exports: [CloudinaryImageComponent, CloudinaryVideoComponent]
    }]
  }], null, null);
})();
export {
  CloudinaryImageComponent,
  CloudinaryModule,
  CloudinaryVideoComponent,
  accessibility,
  lazyload,
  placeholder,
  responsive
};
//# sourceMappingURL=@cloudinary_ng.js.map
