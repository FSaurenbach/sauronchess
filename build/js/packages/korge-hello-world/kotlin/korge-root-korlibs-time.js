(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korlibs-time'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'korge-root-korlibs-time'.");
    }
    root['korge-root-korlibs-time'] = factory(typeof this['korge-root-korlibs-time'] === 'undefined' ? {} : this['korge-root-korlibs-time'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Long = kotlin_kotlin.$_$.sb;
  var protoOf = kotlin_kotlin.$_$.s8;
  var numberToLong = kotlin_kotlin.$_$.p8;
  var objectMeta = kotlin_kotlin.$_$.r8;
  var setMetadataFor = kotlin_kotlin.$_$.t8;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.f;
  var toDuration = kotlin_kotlin.$_$.kb;
  var compareTo = kotlin_kotlin.$_$.s7;
  var THROW_CCE = kotlin_kotlin.$_$.wb;
  var getNumberHashCode = kotlin_kotlin.$_$.x7;
  var equals = kotlin_kotlin.$_$.t7;
  var Comparable = kotlin_kotlin.$_$.nb;
  var classMeta = kotlin_kotlin.$_$.r7;
  var VOID = kotlin_kotlin.$_$.d;
  var interfaceMeta = kotlin_kotlin.$_$.c8;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.y1;
  var _Duration___get_inWholeMicroseconds__impl__8oe8vv = kotlin_kotlin.$_$.x1;
  var Companion_getInstance = kotlin_kotlin.$_$.y2;
  var round = kotlin_kotlin.$_$.b9;
  var Duration__compareTo_impl_pchp0f = kotlin_kotlin.$_$.t1;
  var DurationUnit_NANOSECONDS_getInstance = kotlin_kotlin.$_$.g;
  var toDuration_0 = kotlin_kotlin.$_$.lb;
  var listOf = kotlin_kotlin.$_$.g5;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(DateTime, 'DateTime', classMeta, VOID, [Comparable]);
  setMetadataFor(PerformanceCounter, 'PerformanceCounter', objectMeta);
  setMetadataFor(TimeProvider, 'TimeProvider', interfaceMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta, VOID, [TimeProvider]);
  setMetadataFor(IntTimedCache, 'IntTimedCache', classMeta);
  setMetadataFor(KlockInternal, 'KlockInternal', objectMeta);
  //endregion
  function _DateTime___init__impl__ifgty2(unixMillis) {
    return unixMillis;
  }
  function _DateTime___get_unixMillis__impl__ofxkzp($this) {
    return $this;
  }
  function Companion() {
    Companion_instance = this;
    this.vh_1 = new Long(1, 0);
    this.wh_1 = _DateTime___init__impl__ifgty2(0.0);
    this.xh_1 = 6.21355968E13;
  }
  protoOf(Companion).yh = function (unix) {
    return _DateTime___init__impl__ifgty2(unix);
  };
  protoOf(Companion).zh = function (unix) {
    return this.yh(unix.h6());
  };
  protoOf(Companion).ai = function () {
    return _DateTime___init__impl__ifgty2(KlockInternal_instance.bi());
  };
  protoOf(Companion).ci = function () {
    return numberToLong(KlockInternal_instance.bi());
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _DateTime___get_unixMillisDouble__impl__3dzlsc($this) {
    return _DateTime___get_unixMillis__impl__ofxkzp($this);
  }
  function _DateTime___get_unixMillisLong__impl__sdx9bd($this) {
    return numberToLong(_DateTime___get_unixMillisDouble__impl__3dzlsc($this));
  }
  function DateTime__minus_impl_10njw8($this, other) {
    // Inline function 'korlibs.time.milliseconds' call
    var this_0 = _DateTime___get_unixMillisDouble__impl__3dzlsc($this) - _DateTime___get_unixMillisDouble__impl__3dzlsc(other);
    return toDuration(this_0, DurationUnit_MILLISECONDS_getInstance());
  }
  function DateTime__compareTo_impl_geo3bs($this, other) {
    return compareTo(_DateTime___get_unixMillis__impl__ofxkzp($this), _DateTime___get_unixMillis__impl__ofxkzp(other));
  }
  function DateTime__compareTo_impl_geo3bs_0($this, other) {
    return DateTime__compareTo_impl_geo3bs($this.di_1, other instanceof DateTime ? other.di_1 : THROW_CCE());
  }
  function DateTime__toString_impl_cnueje($this) {
    return 'DateTime(' + _DateTime___get_unixMillisLong__impl__sdx9bd($this).toString() + ')';
  }
  function DateTime__hashCode_impl_yf0bc9($this) {
    return getNumberHashCode($this);
  }
  function DateTime__equals_impl_qd7s8j($this, other) {
    if (!(other instanceof DateTime))
      return false;
    var tmp0_other_with_cast = other instanceof DateTime ? other.di_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function DateTime(unixMillis) {
    Companion_getInstance_0();
    this.di_1 = unixMillis;
  }
  protoOf(DateTime).ei = function (other) {
    return DateTime__compareTo_impl_geo3bs(this.di_1, other);
  };
  protoOf(DateTime).d = function (other) {
    return DateTime__compareTo_impl_geo3bs_0(this, other);
  };
  protoOf(DateTime).toString = function () {
    return DateTime__toString_impl_cnueje(this.di_1);
  };
  protoOf(DateTime).hashCode = function () {
    return DateTime__hashCode_impl_yf0bc9(this.di_1);
  };
  protoOf(DateTime).equals = function (other) {
    return DateTime__equals_impl_qd7s8j(this.di_1, other);
  };
  function _Frequency___init__impl__upasnx(hertz) {
    return hertz;
  }
  function _Frequency___get_hertz__impl__9m7k6x($this) {
    return $this;
  }
  function toFrequency(_this__u8e3s4) {
    return get_timesPerSecond(_this__u8e3s4);
  }
  function get_timesPerSecond(_this__u8e3s4) {
    return _Frequency___init__impl__upasnx(1.0 / get_seconds(_this__u8e3s4));
  }
  var KlockLocale_default;
  function PerformanceCounter() {
  }
  protoOf(PerformanceCounter).fi = function () {
    return get_microseconds(KlockInternal_instance.gi());
  };
  protoOf(PerformanceCounter).hi = function () {
    return KlockInternal_instance.gi();
  };
  var PerformanceCounter_instance;
  function PerformanceCounter_getInstance() {
    return PerformanceCounter_instance;
  }
  function Companion_0() {
  }
  protoOf(Companion_0).ai = function () {
    return Companion_getInstance_0().ai();
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function TimeProvider() {
  }
  function get_DURATION_NIL() {
    _init_properties_TimeSpan_kt__xworpz();
    return DURATION_NIL;
  }
  var DURATION_NIL;
  var timeSteps;
  function get_milliseconds(_this__u8e3s4) {
    _init_properties_TimeSpan_kt__xworpz();
    return _Duration___get_inWholeNanoseconds__impl__r5x4mr(_this__u8e3s4).h6() / 1000000.0;
  }
  function fromMilliseconds(_this__u8e3s4, value) {
    _init_properties_TimeSpan_kt__xworpz();
    // Inline function 'kotlin.time.Companion.milliseconds' call
    return toDuration(value, DurationUnit_MILLISECONDS_getInstance());
  }
  function get_seconds(_this__u8e3s4) {
    _init_properties_TimeSpan_kt__xworpz();
    return get_milliseconds(_this__u8e3s4) / get_MILLIS_PER_SECOND();
  }
  function get_microseconds(_this__u8e3s4) {
    _init_properties_TimeSpan_kt__xworpz();
    return _Duration___get_inWholeMicroseconds__impl__8oe8vv(_this__u8e3s4).h6();
  }
  function get_NIL(_this__u8e3s4) {
    _init_properties_TimeSpan_kt__xworpz();
    return get_DURATION_NIL();
  }
  function get_isNil(_this__u8e3s4) {
    _init_properties_TimeSpan_kt__xworpz();
    return equals(_this__u8e3s4, get_DURATION_NIL());
  }
  function max(a, b) {
    _init_properties_TimeSpan_kt__xworpz();
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    // Inline function 'kotlin.math.max' call
    var a_0 = get_milliseconds(a);
    var b_0 = get_milliseconds(b);
    var this_0 = Math.max(a_0, b_0);
    return toDuration(this_0, DurationUnit_MILLISECONDS_getInstance());
  }
  function roundMilliseconds(_this__u8e3s4) {
    _init_properties_TimeSpan_kt__xworpz();
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    var this_0 = round(get_milliseconds(_this__u8e3s4));
    return toDuration(this_0, DurationUnit_MILLISECONDS_getInstance());
  }
  function get_nanoseconds(_this__u8e3s4) {
    _init_properties_TimeSpan_kt__xworpz();
    return _Duration___get_inWholeNanoseconds__impl__r5x4mr(_this__u8e3s4).h6();
  }
  function get_microsecondsInt(_this__u8e3s4) {
    _init_properties_TimeSpan_kt__xworpz();
    return _Duration___get_inWholeMicroseconds__impl__8oe8vv(_this__u8e3s4).qa();
  }
  function clamp(_this__u8e3s4, min, max) {
    _init_properties_TimeSpan_kt__xworpz();
    return Duration__compareTo_impl_pchp0f(_this__u8e3s4, min) < 0 ? min : Duration__compareTo_impl_pchp0f(_this__u8e3s4, max) > 0 ? max : _this__u8e3s4;
  }
  function get_millisecondsLong(_this__u8e3s4) {
    _init_properties_TimeSpan_kt__xworpz();
    return numberToLong(get_milliseconds(_this__u8e3s4));
  }
  var properties_initialized_TimeSpan_kt_fytdnd;
  function _init_properties_TimeSpan_kt__xworpz() {
    if (!properties_initialized_TimeSpan_kt_fytdnd) {
      properties_initialized_TimeSpan_kt_fytdnd = true;
      DURATION_NIL = toDuration_0(new Long(13, -2097152), DurationUnit_NANOSECONDS_getInstance());
      timeSteps = listOf([60, 60, 24]);
    }
  }
  function IntTimedCache(ttl, timeProvider, gen) {
    timeProvider = timeProvider === VOID ? Companion_instance_0 : timeProvider;
    this.ii_1 = ttl;
    this.ji_1 = timeProvider;
    this.ki_1 = gen;
    this.li_1 = Companion_getInstance_0().wh_1;
    this.mi_1 = 0;
  }
  protoOf(IntTimedCache).ag = function (obj, property) {
    // Inline function 'korlibs.time.IntTimedCache.get' call
    var now = this.ji_1.ai();
    if (equals(this.li_1, Companion_getInstance_0().wh_1) ? true : Duration__compareTo_impl_pchp0f(DateTime__minus_impl_10njw8(now, this.li_1), this.ii_1) >= 0) {
      this.li_1 = now;
      this.mi_1 = this.ki_1();
    }
    return this.mi_1;
  };
  function get_MILLIS_PER_SECOND() {
    return MILLIS_PER_SECOND;
  }
  var MILLIS_PER_SECOND;
  var ExtendedTimezoneNamesOrNull;
  function KlockInternal() {
  }
  protoOf(KlockInternal).bi = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    return Date.now();
  };
  protoOf(KlockInternal).gi = function () {
    return fromMilliseconds(Companion_getInstance(), globalThis.performance.now());
  };
  var KlockInternal_instance;
  function KlockInternal_getInstance() {
    return KlockInternal_instance;
  }
  //region block: init
  KlockLocale_default = null;
  PerformanceCounter_instance = new PerformanceCounter();
  Companion_instance_0 = new Companion_0();
  MILLIS_PER_SECOND = 1000;
  ExtendedTimezoneNamesOrNull = null;
  KlockInternal_instance = new KlockInternal();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DateTime__hashCode_impl_yf0bc9;
  _.$_$.b = DateTime__minus_impl_10njw8;
  _.$_$.c = _Frequency___get_hertz__impl__9m7k6x;
  _.$_$.d = Companion_getInstance_0;
  _.$_$.e = PerformanceCounter_instance;
  _.$_$.f = Companion_instance_0;
  _.$_$.g = DateTime;
  _.$_$.h = IntTimedCache;
  _.$_$.i = get_NIL;
  _.$_$.j = TimeProvider;
  _.$_$.k = clamp;
  _.$_$.l = get_isNil;
  _.$_$.m = max;
  _.$_$.n = get_microsecondsInt;
  _.$_$.o = get_milliseconds;
  _.$_$.p = get_millisecondsLong;
  _.$_$.q = get_nanoseconds;
  _.$_$.r = roundMilliseconds;
  _.$_$.s = toFrequency;
  //endregion
  return _;
}));
