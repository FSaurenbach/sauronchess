(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-foundation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'korge-root-korge-foundation'.");
    }
    root['korge-root-korge-foundation'] = factory(typeof this['korge-root-korge-foundation'] === 'undefined' ? {} : this['korge-root-korge-foundation'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var clz32 = Math.clz32;
  var log2 = Math.log2;
  var hypot = Math.hypot;
  var protoOf = kotlin_kotlin.$_$.s8;
  var objectMeta = kotlin_kotlin.$_$.r8;
  var setMetadataFor = kotlin_kotlin.$_$.t8;
  var Unit_instance = kotlin_kotlin.$_$.c3;
  var contentEquals = kotlin_kotlin.$_$.x3;
  var contentHashCode = kotlin_kotlin.$_$.y3;
  var intArrayIterator = kotlin_kotlin.$_$.b8;
  var classMeta = kotlin_kotlin.$_$.r7;
  var VOID = kotlin_kotlin.$_$.d;
  var toString = kotlin_kotlin.$_$.x8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var reverse = kotlin_kotlin.$_$.s5;
  var copyOf = kotlin_kotlin.$_$.e4;
  var THROW_CCE = kotlin_kotlin.$_$.wb;
  var isDoubleArray = kotlin_kotlin.$_$.h8;
  var take = kotlin_kotlin.$_$.z5;
  var equals = kotlin_kotlin.$_$.t7;
  var List = kotlin_kotlin.$_$.i3;
  var isInterface = kotlin_kotlin.$_$.j8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.y;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var Collection = kotlin_kotlin.$_$.g3;
  var isIntArray = kotlin_kotlin.$_$.i8;
  var copyOf_0 = kotlin_kotlin.$_$.g4;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var take_0 = kotlin_kotlin.$_$.y5;
  var compareTo = kotlin_kotlin.$_$.s7;
  var objectCreate = kotlin_kotlin.$_$.q8;
  var fillArrayVal = kotlin_kotlin.$_$.v7;
  var isArray = kotlin_kotlin.$_$.d8;
  var toList = kotlin_kotlin.$_$.a6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.s3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var to = kotlin_kotlin.$_$.oc;
  var Map_0 = kotlin_kotlin.$_$.j3;
  var hashCode = kotlin_kotlin.$_$.a8;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var MutableIterable = kotlin_kotlin.$_$.k3;
  var addAll = kotlin_kotlin.$_$.o3;
  var MutableList = kotlin_kotlin.$_$.l3;
  var interfaceMeta = kotlin_kotlin.$_$.c8;
  var AbstractMutableSet = kotlin_kotlin.$_$.e3;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.s;
  var until = kotlin_kotlin.$_$.n9;
  var joinToString = kotlin_kotlin.$_$.v4;
  var Iterable = kotlin_kotlin.$_$.h3;
  var copyOf_1 = kotlin_kotlin.$_$.f4;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var numberToInt = kotlin_kotlin.$_$.o8;
  var Comparator = kotlin_kotlin.$_$.ob;
  var reversed = kotlin_kotlin.$_$.o6;
  var NotImplementedError = kotlin_kotlin.$_$.tb;
  var toSet = kotlin_kotlin.$_$.i6;
  var contentEquals_0 = kotlin_kotlin.$_$.u3;
  var contentHashCode_0 = kotlin_kotlin.$_$.z3;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.mc;
  var Duration__minus_impl_q5cfm7 = kotlin_kotlin.$_$.z1;
  var Duration__plus_impl_yu9v8f = kotlin_kotlin.$_$.a2;
  var Duration__compareTo_impl_pchp0f = kotlin_kotlin.$_$.t1;
  var Comparable = kotlin_kotlin.$_$.nb;
  var Duration = kotlin_kotlin.$_$.jb;
  var ValueTimeMark__elapsedNow_impl_eonqvs = kotlin_kotlin.$_$.d2;
  var printStackTrace = kotlin_kotlin.$_$.kc;
  var Monotonic_instance = kotlin_kotlin.$_$.z2;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.k;
  var maxOf = kotlin_kotlin.$_$.n6;
  var KMutableProperty0 = kotlin_kotlin.$_$.p9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.y7;
  var toMutableList = kotlin_kotlin.$_$.e6;
  var mapCapacity = kotlin_kotlin.$_$.h5;
  var coerceAtLeast = kotlin_kotlin.$_$.f9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var toMutableMap = kotlin_kotlin.$_$.g6;
  var toMutableSet = kotlin_kotlin.$_$.h6;
  var MutableMap = kotlin_kotlin.$_$.m3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var step = kotlin_kotlin.$_$.l9;
  var RuntimeException = kotlin_kotlin.$_$.vb;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.n1;
  var captureStack = kotlin_kotlin.$_$.m7;
  var getKClass = kotlin_kotlin.$_$.b;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var ensureNotNull = kotlin_kotlin.$_$.dc;
  var get = kotlin_kotlin.$_$.b7;
  var fold = kotlin_kotlin.$_$.a7;
  var minusKey = kotlin_kotlin.$_$.c7;
  var plus = kotlin_kotlin.$_$.e7;
  var Element = kotlin_kotlin.$_$.d7;
  var Enum = kotlin_kotlin.$_$.pb;
  var println = kotlin_kotlin.$_$.j7;
  var joinTo = kotlin_kotlin.$_$.x4;
  var replace = kotlin_kotlin.$_$.na;
  var THROW_IAE = kotlin_kotlin.$_$.xb;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var round = kotlin_kotlin.$_$.b9;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.u2;
  var toLong = kotlin_kotlin.$_$.v8;
  var isInfinite = kotlin_kotlin.$_$.fc;
  var isNaN_0 = kotlin_kotlin.$_$.gc;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.v2;
  var toShort = kotlin_kotlin.$_$.w8;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.t2;
  var getNumberHashCode = kotlin_kotlin.$_$.x7;
  var toList_0 = kotlin_kotlin.$_$.b6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.hc;
  var get_PI = kotlin_kotlin.$_$.y8;
  var KProperty1 = kotlin_kotlin.$_$.s9;
  var coerceIn = kotlin_kotlin.$_$.h9;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.s2;
  var contentEquals_1 = kotlin_kotlin.$_$.v3;
  var contentHashCode_1 = kotlin_kotlin.$_$.b4;
  var primitiveArrayConcat = kotlin_kotlin.$_$.c;
  var lazy_0 = kotlin_kotlin.$_$.ic;
  var contentEquals_2 = kotlin_kotlin.$_$.w3;
  var contentHashCode_2 = kotlin_kotlin.$_$.a4;
  var contentToString = kotlin_kotlin.$_$.c4;
  var last = kotlin_kotlin.$_$.d5;
  var extendThrowable = kotlin_kotlin.$_$.u7;
  var listOf = kotlin_kotlin.$_$.g5;
  var getStringHashCode = kotlin_kotlin.$_$.z7;
  var getBooleanHashCode = kotlin_kotlin.$_$.w7;
  var isCharSequence = kotlin_kotlin.$_$.f8;
  var trimEnd = kotlin_kotlin.$_$.eb;
  var arrayCopy = kotlin_kotlin.$_$.q3;
  var fill = kotlin_kotlin.$_$.o4;
  var Long = kotlin_kotlin.$_$.sb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var toByte = kotlin_kotlin.$_$.u8;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var copyOf_2 = kotlin_kotlin.$_$.d4;
  var numberToLong = kotlin_kotlin.$_$.p8;
  var roundToInt = kotlin_kotlin.$_$.a9;
  var copyToArray = kotlin_kotlin.$_$.h4;
  var IndexOutOfBoundsException_init_$Create$_0 = kotlin_kotlin.$_$.l1;
  var AbstractMutableList = kotlin_kotlin.$_$.d3;
  var get_lastIndex = kotlin_kotlin.$_$.z4;
  var joinToString_0 = kotlin_kotlin.$_$.w4;
  var RandomAccess = kotlin_kotlin.$_$.n3;
  var toIntOrNull = kotlin_kotlin.$_$.za;
  var lines = kotlin_kotlin.$_$.ia;
  var charSequenceLength = kotlin_kotlin.$_$.q7;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.x;
  var substringAfterLast = kotlin_kotlin.$_$.sa;
  var substringBeforeLast = kotlin_kotlin.$_$.ua;
  var firstOrNull = kotlin_kotlin.$_$.q4;
  var lastOrNull = kotlin_kotlin.$_$.b5;
  var charArrayOf = kotlin_kotlin.$_$.n7;
  var trimEnd_0 = kotlin_kotlin.$_$.fb;
  var trim = kotlin_kotlin.$_$.ib;
  var split = kotlin_kotlin.$_$.pa;
  var contains = kotlin_kotlin.$_$.z9;
  var startsWith = kotlin_kotlin.$_$.qa;
  var arrayListOf = kotlin_kotlin.$_$.r3;
  var stackTraceToString = kotlin_kotlin.$_$.lc;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.e1;
  var split_0 = kotlin_kotlin.$_$.oa;
  var emptyMap = kotlin_kotlin.$_$.l4;
  var trimStart = kotlin_kotlin.$_$.gb;
  var toMap = kotlin_kotlin.$_$.d6;
  var KProperty0 = kotlin_kotlin.$_$.r9;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  function getAt(x, y) {
    return this.gx(index(this, x, y));
  }
  function asString() {
    var tmp = until(0, this.fx());
    return joinToString(tmp, '\n', VOID, VOID, VOID, VOID, IArray2$asString$lambda(this));
  }
  setMetadataFor(IArray2, 'IArray2', interfaceMeta, VOID, [Iterable]);
  setMetadataFor(IntArray2, 'IntArray2', classMeta, VOID, [IArray2]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(DoubleArrayList, 'DoubleArrayList', classMeta, VOID, [Collection], DoubleArrayList);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(IntArrayList, 'IntArrayList', classMeta, VOID, [Collection], IntArrayList);
  setMetadataFor(SortOps, 'SortOps', classMeta);
  setMetadataFor(DoubleArrayListSortOps, 'DoubleArrayListSortOps', objectMeta, SortOps);
  setMetadataFor(TGenDeque$iterator$1, VOID, classMeta);
  setMetadataFor(TGenDeque, 'TGenDeque', classMeta, VOID, [Collection, MutableIterable], TGenDeque_init_$Create$);
  setMetadataFor(IntDeque$iterator$1, VOID, classMeta);
  setMetadataFor(IntDeque, 'IntDeque', classMeta, VOID, [Collection, MutableIterable], IntDeque_init_$Create$);
  function setAddAll(index, elements, offset, size) {
    // Inline function 'kotlin.math.min' call
    var b = this.l() - index | 0;
    var setCount = Math.min(size, b);
    this.nz(index, elements, offset, setCount);
    this.oz(elements, offset + setCount | 0, size - setCount | 0);
  }
  function setAddAll$default(index, elements, offset, size, $super) {
    offset = offset === VOID ? 0 : offset;
    size = size === VOID ? elements.l() - offset | 0 : size;
    var tmp;
    if ($super === VOID) {
      this.mz(index, elements, offset, size);
      tmp = Unit_instance;
    } else {
      setAddAll(index, elements, offset, size);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function setAll(index, elements, offset, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.m(index + n | 0, elements.b1(offset + n | 0));
      }
       while (inductionVariable < size);
  }
  function addAll_0(elements, offset, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.p(elements.b1(offset + n | 0));
      }
       while (inductionVariable < size);
  }
  function removeToSize(size) {
    this.lz(size, this.l());
  }
  setMetadataFor(MutableListEx, 'MutableListEx', interfaceMeta, VOID, [MutableList]);
  setMetadataFor(FastSmallSet, 'FastSmallSet', classMeta, AbstractMutableSet, VOID, FastSmallSet);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(Iterator, 'Iterator', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [Iterable]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [Iterable]);
  setMetadataFor(IntMap, 'IntMap', classMeta, VOID, VOID, IntMap_init_$Create$);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(IntIntMap, 'IntIntMap', classMeta, VOID, VOID, IntIntMap_init_$Create$);
  setMetadataFor(Iterator$1, VOID, classMeta);
  setMetadataFor(Pool, 'Pool', classMeta);
  setMetadataFor(ConcurrentPool, 'ConcurrentPool', classMeta, Pool);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(ReturnablePool, 'ReturnablePool', classMeta);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(TGenPriorityQueue$iterator$1, VOID, classMeta);
  setMetadataFor(TGenPriorityQueue, 'TGenPriorityQueue', classMeta, VOID, [Collection, MutableIterable]);
  setMetadataFor(TGenQueue, 'TGenQueue', classMeta, VOID, [Collection], TGenQueue);
  setMetadataFor(Ref$2, VOID, classMeta);
  setMetadataFor(Ref$3, VOID, classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(TGenStack, 'TGenStack', classMeta, VOID, [Collection]);
  setMetadataFor(TimedTask, 'TimedTask', classMeta, VOID, [Comparable]);
  setMetadataFor(BaseEventLoop, 'BaseEventLoop', classMeta);
  setMetadataFor(SyncEventLoop, 'SyncEventLoop', classMeta, BaseEventLoop, VOID, SyncEventLoop);
  function notify$default(unit, $super) {
    unit = unit === VOID ? Unit_instance : unit;
    var tmp;
    if ($super === VOID) {
      this.r14(unit);
      tmp = Unit_instance;
    } else {
      var tmp_0 = $super.r14;
      tmp = tmp_0.call(this, Unit_instance);
    }
    return tmp;
  }
  setMetadataFor(BaseLock, 'BaseLock', interfaceMeta);
  setMetadataFor(SyncPauseable, 'SyncPauseable', classMeta, VOID, VOID, SyncPauseable);
  setMetadataFor(Mixin, 'Mixin', classMeta, VOID, VOID, Mixin);
  setMetadataFor(Property, 'Property', classMeta);
  setMetadataFor(PropertyThis, 'PropertyThis', classMeta);
  setMetadataFor(ExtraObject, 'ExtraObject', classMeta, VOID, [MutableMap], ExtraObject);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(RequestContext, 'RequestContext', classMeta);
  setMetadataFor(NotMappedException, 'NotMappedException', classMeta, RuntimeException);
  setMetadataFor(Injector, 'Injector', classMeta, VOID, VOID, Injector);
  setMetadataFor(InjectorDependency, 'InjectorDependency', interfaceMeta);
  setMetadataFor(ObjectProvider, 'ObjectProvider', interfaceMeta);
  setMetadataFor(InstanceObjectProvider, 'InstanceObjectProvider', classMeta, VOID, [ObjectProvider]);
  setMetadataFor(SingletonObjectProvider, 'SingletonObjectProvider', classMeta, VOID, [ObjectProvider]);
  setMetadataFor(PrototypeObjectProvider, 'PrototypeObjectProvider', classMeta, VOID, [ObjectProvider]);
  setMetadataFor(InjectorDestructor, 'InjectorDestructor', interfaceMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(InjectorContext, 'InjectorContext', classMeta, VOID, [Element]);
  setMetadataFor(Color, 'Color', classMeta, Enum);
  function appendAnsiScape(_this__u8e3s4, code, extra, char) {
    _this__u8e3s4.g5(_Char___init__impl__6a9atx(27));
    _this__u8e3s4.g5(_Char___init__impl__6a9atx(91));
    _this__u8e3s4.q7(code);
    if (!(extra == null)) {
      _this__u8e3s4.f5(extra);
    }
    _this__u8e3s4.g5(char);
    return _this__u8e3s4;
  }
  function appendAnsiScape$default(_this__u8e3s4, code, extra, char, $super) {
    extra = extra === VOID ? null : extra;
    char = char === VOID ? _Char___init__impl__6a9atx(109) : char;
    return $super === VOID ? this.p16(_this__u8e3s4, code, extra, char) : appendAnsiScape(_this__u8e3s4, code, extra, char);
  }
  function appendReset(_this__u8e3s4) {
    return this.q16(_this__u8e3s4, 0);
  }
  function appendFgColor(_this__u8e3s4, color, bright) {
    return this.q16(_this__u8e3s4, 30 + color.o16_1 | 0, bright ? ';1' : null);
  }
  function appendFgColor$default(_this__u8e3s4, color, bright, $super) {
    bright = bright === VOID ? false : bright;
    return $super === VOID ? this.s16(_this__u8e3s4, color, bright) : appendFgColor(_this__u8e3s4, color, bright);
  }
  setMetadataFor(AnsiEscape, 'AnsiEscape', interfaceMeta);
  setMetadataFor(Kind, 'Kind', classMeta, Enum);
  setMetadataFor(BaseConsole, 'BaseConsole', classMeta, VOID, [AnsiEscape], BaseConsole);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(Level, 'Level', classMeta, Enum);
  setMetadataFor(ConsoleLogOutput, 'ConsoleLogOutput', objectMeta);
  setMetadataFor(Logger, 'Logger', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(Ratio, 'Ratio', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  function invoke(it) {
    return this.k18(it);
  }
  function invoke_0(it) {
    return _Ratio___init__impl__9mwvn2(this.k18(Ratio__toFloat_impl_1ftup5(it)));
  }
  setMetadataFor(Easing, 'Easing', interfaceMeta);
  setMetadataFor(EasingCubic, 'EasingCubic', classMeta, VOID, [Easing]);
  setMetadataFor(Easings, 'Easings', classMeta, Enum, [Enum, Easing]);
  setMetadataFor(Easings$SMOOTH, 'SMOOTH', classMeta, Easings);
  setMetadataFor(Easings$EASE_IN_ELASTIC, 'EASE_IN_ELASTIC', classMeta, Easings);
  setMetadataFor(Easings$EASE_OUT_ELASTIC, 'EASE_OUT_ELASTIC', classMeta, Easings);
  setMetadataFor(Easings$EASE_OUT_BOUNCE, 'EASE_OUT_BOUNCE', classMeta, Easings);
  setMetadataFor(Easings$LINEAR, 'LINEAR', classMeta, Easings);
  setMetadataFor(Easings$EASE, 'EASE', classMeta, Easings);
  setMetadataFor(Easings$EASE_IN, 'EASE_IN', classMeta, Easings);
  setMetadataFor(Easings$EASE_OUT, 'EASE_OUT', classMeta, Easings);
  setMetadataFor(Easings$EASE_IN_OUT, 'EASE_IN_OUT', classMeta, Easings);
  setMetadataFor(Easings$EASE_IN_OLD, 'EASE_IN_OLD', classMeta, Easings);
  setMetadataFor(Easings$EASE_OUT_OLD, 'EASE_OUT_OLD', classMeta, Easings);
  setMetadataFor(Easings$EASE_IN_OUT_OLD, 'EASE_IN_OUT_OLD', classMeta, Easings);
  setMetadataFor(Easings$EASE_OUT_IN_OLD, 'EASE_OUT_IN_OLD', classMeta, Easings);
  setMetadataFor(Easings$EASE_IN_BACK, 'EASE_IN_BACK', classMeta, Easings);
  setMetadataFor(Easings$EASE_OUT_BACK, 'EASE_OUT_BACK', classMeta, Easings);
  setMetadataFor(Easings$EASE_IN_OUT_BACK, 'EASE_IN_OUT_BACK', classMeta, Easings);
  setMetadataFor(Easings$EASE_OUT_IN_BACK, 'EASE_OUT_IN_BACK', classMeta, Easings);
  setMetadataFor(Easings$EASE_IN_OUT_ELASTIC, 'EASE_IN_OUT_ELASTIC', classMeta, Easings);
  setMetadataFor(Easings$EASE_OUT_IN_ELASTIC, 'EASE_OUT_IN_ELASTIC', classMeta, Easings);
  setMetadataFor(Easings$EASE_IN_BOUNCE, 'EASE_IN_BOUNCE', classMeta, Easings);
  setMetadataFor(Easings$EASE_IN_OUT_BOUNCE, 'EASE_IN_OUT_BOUNCE', classMeta, Easings);
  setMetadataFor(Easings$EASE_OUT_IN_BOUNCE, 'EASE_OUT_IN_BOUNCE', classMeta, Easings);
  setMetadataFor(Easings$EASE_IN_QUAD, 'EASE_IN_QUAD', classMeta, Easings);
  setMetadataFor(Easings$EASE_OUT_QUAD, 'EASE_OUT_QUAD', classMeta, Easings);
  setMetadataFor(Easings$EASE_IN_OUT_QUAD, 'EASE_IN_OUT_QUAD', classMeta, Easings);
  setMetadataFor(Easings$EASE_SINE, 'EASE_SINE', classMeta, Easings);
  setMetadataFor(Easings$EASE_CLAMP_START, 'EASE_CLAMP_START', classMeta, Easings);
  setMetadataFor(Easings$EASE_CLAMP_END, 'EASE_CLAMP_END', classMeta, Easings);
  setMetadataFor(Easings$EASE_CLAMP_MIDDLE, 'EASE_CLAMP_MIDDLE', classMeta, Easings);
  setMetadataFor(IntSegmentSet, 'IntSegmentSet', classMeta, VOID, VOID, IntSegmentSet);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(Anchor2D, 'Anchor2D', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(Angle, 'Angle', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(Line2D, 'Line2D', classMeta, VOID, VOID, Line2D_init_$Create$);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(MarginInt, 'MarginInt', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(Matrix, 'Matrix', classMeta);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(MatrixTransform, 'MatrixTransform', classMeta);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(Matrix4, 'Matrix4', classMeta, VOID, VOID, Matrix4_init_$Create$_0);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(Orientation, 'Orientation', classMeta, Enum);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(RectangleD, 'RectangleD', classMeta);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(RectangleI, 'RectangleI', classMeta, VOID, VOID, RectangleI_init_$Create$);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(Scale, 'Scale', classMeta, VOID, VOID, Scale_init_$Create$);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(ScaleMode, 'ScaleMode', classMeta);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(Size2D, 'Size2D', classMeta, VOID, VOID, Size2D_init_$Create$);
  setMetadataFor(SizeInt, 'SizeInt', classMeta, VOID, VOID, SizeInt_init_$Create$);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor(Vector2D, 'Vector2D', classMeta, VOID, VOID, Vector2D_init_$Create$_1);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor(Vector2I, 'Vector2I', classMeta, VOID, VOID, Vector2I_init_$Create$);
  function getY(index) {
    return this.hx(index, 1);
  }
  function get_0(index) {
    return new Vector2D(this.hx(index, 0), this.hx(index, 1));
  }
  function getComponentList(component, out) {
    var inductionVariable = 0;
    var last = this.l();
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        out[n] = this.hx(n, component);
      }
       while (inductionVariable < last);
    return out;
  }
  function getComponentList$default(component, out, $super) {
    out = out === VOID ? new Float64Array(this.l()) : out;
    return $super === VOID ? this.p1l(component, out) : getComponentList(component, out);
  }
  function get_first() {
    return this.b1(0);
  }
  function get_last() {
    return this.b1(this.l() - 1 | 0);
  }
  setMetadataFor(PointList, 'PointList', interfaceMeta);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor(PointArrayList, 'PointArrayList', classMeta, VOID, [PointList], PointArrayList);
  setMetadataFor(Extrema, 'Extrema', classMeta);
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor(Bezier, 'Bezier', classMeta, VOID, VOID, Bezier_init_$Create$);
  setMetadataFor(CurveLUT, 'CurveLUT', classMeta);
  setMetadataFor(Arc, 'Arc', objectMeta);
  setMetadataFor(Companion_32, 'Companion', objectMeta);
  setMetadataFor(ImageDoNotFitException, 'ImageDoNotFitException', classMeta, Error);
  setMetadataFor(BinPacker, 'BinPacker', classMeta);
  setMetadataFor(MaxRects, 'MaxRects', classMeta);
  setMetadataFor(Companion_33, 'Companion', objectMeta);
  setMetadataFor(HitTestDirection, 'HitTestDirection', classMeta, Enum);
  setMetadataFor(AbstractShape2D, 'AbstractShape2D', classMeta);
  setMetadataFor(Companion_34, 'Companion', objectMeta);
  setMetadataFor(SliceRotation, 'SliceRotation', classMeta, Enum);
  setMetadataFor(Companion_35, 'Companion', objectMeta);
  setMetadataFor(SliceOrientation, 'SliceOrientation', classMeta);
  function x(index) {
    var tmp;
    switch (index) {
      case 0:
        tmp = this.f1q();
        break;
      case 1:
        tmp = this.h1q();
        break;
      case 2:
        tmp = this.j1q();
        break;
      case 3:
        tmp = this.l1q();
        break;
      default:
        tmp = NaN;
        break;
    }
    return tmp;
  }
  function y(index) {
    var tmp;
    switch (index) {
      case 0:
        tmp = this.g1q();
        break;
      case 1:
        tmp = this.i1q();
        break;
      case 2:
        tmp = this.k1q();
        break;
      case 3:
        tmp = this.m1q();
        break;
      default:
        tmp = NaN;
        break;
    }
    return tmp;
  }
  setMetadataFor(SliceCoords, 'SliceCoords', interfaceMeta);
  function get_frameOffsetX() {
    return this.w1p().g1e_1;
  }
  function get_frameOffsetY() {
    return this.w1p().d1e_1;
  }
  function get_frameWidth() {
    return this.ex() + this.w1p().i1e() | 0;
  }
  function get_frameHeight() {
    return this.fx() + this.w1p().j1e() | 0;
  }
  setMetadataFor(SliceCoordsWithBase, 'SliceCoordsWithBase', interfaceMeta, VOID, [SliceCoords]);
  function get_left() {
    return this.v1p().o1i();
  }
  function get_top() {
    return this.v1p().r1i();
  }
  function get_right() {
    return this.v1p().p1i();
  }
  function get_bottom() {
    return this.v1p().q1i();
  }
  function get_area() {
    return this.v1p().i1k();
  }
  setMetadataFor(SliceCoordsWithBaseAndRect, 'SliceCoordsWithBaseAndRect', interfaceMeta, VOID, [SliceCoordsWithBase]);
  setMetadataFor(RectSlice, 'RectSlice', classMeta, VOID, [SliceCoordsWithBaseAndRect]);
  setMetadataFor(Companion_36, 'Companion', objectMeta);
  setMetadataFor(SliceCoordsImpl, 'SliceCoordsImpl', classMeta, VOID, [SliceCoordsWithBase]);
  setMetadataFor(RectCoords, 'RectCoords', classMeta, VOID, [SliceCoords]);
  setMetadataFor(Bucket, 'Bucket', classMeta, VOID, VOID, Bucket);
  setMetadataFor(Buckets, 'Buckets', classMeta);
  setMetadataFor(AllBuckets, 'AllBuckets', classMeta, VOID, VOID, AllBuckets);
  setMetadataFor(XWithWind, 'XWithWind', classMeta, VOID, VOID, XWithWind);
  setMetadataFor(IntArrayListSort, 'IntArrayListSort', objectMeta, SortOps);
  setMetadataFor(RastScale, 'RastScale', classMeta, VOID, VOID, RastScale);
  setMetadataFor(PolygonScanline, 'PolygonScanline', classMeta, RastScale, VOID, PolygonScanline);
  setMetadataFor(Companion_37, 'Companion', objectMeta);
  setMetadataFor(Companion_38, 'Companion', objectMeta);
  setMetadataFor(MEdge, 'MEdge', classMeta, VOID, VOID, MEdge);
  function line(p0, p1) {
    this.g1n(p0);
    this.f1t(p1);
  }
  function isNotEmpty() {
    return !(this.f1u() === 0);
  }
  function rect(rect) {
    return this.i1u(rect.p1d_1, rect.q1d_1, rect.r1d_1, rect.s1d_1);
  }
  function rect_0(x, y, width, height) {
    this.g1n(new Vector2D(x, y));
    this.f1t(new Vector2D(x + width, y));
    this.f1t(new Vector2D(x + width, y + height));
    this.f1t(new Vector2D(x, y + height));
    this.r13();
  }
  function arc(center, r, start, end, counterclockwise) {
    return Arc_instance.f1n(this, center, r, start, end, counterclockwise);
  }
  function arc$default(center, r, start, end, counterclockwise, $super) {
    counterclockwise = counterclockwise === VOID ? false : counterclockwise;
    var tmp;
    if ($super === VOID) {
      this.j1u(center, r, start, end, counterclockwise);
      tmp = Unit_instance;
    } else {
      arc(center, r, start, end, counterclockwise);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function circle(center, radius) {
    return this.k1u(center, radius, Companion_getInstance_15().o1c_1, Companion_getInstance_15().s1c_1);
  }
  setMetadataFor(VectorBuilder, 'VectorBuilder', interfaceMeta);
  setMetadataFor(Companion_39, 'Companion', objectMeta);
  setMetadataFor(Command, 'Command', objectMeta);
  setMetadataFor(VectorPath, 'VectorPath', classMeta, AbstractShape2D, [AbstractShape2D, VectorBuilder], VectorPath);
  setMetadataFor(Companion_40, 'Companion', objectMeta);
  setMetadataFor(Winding, 'Winding', classMeta, Enum);
  setMetadataFor(Companion_41, 'Companion', objectMeta);
  setMetadataFor(MMatrix, 'MMatrix', classMeta, VOID, VOID, MMatrix);
  setMetadataFor(Companion_42, 'Companion', objectMeta);
  setMetadataFor(Companion_43, 'Companion', objectMeta);
  setMetadataFor(Circle, 'Circle', classMeta, AbstractShape2D);
  setMetadataFor(Companion_44, 'Companion', objectMeta);
  function get_size() {
    return this.z1v().s1v() / this.a1w() | 0;
  }
  setMetadataFor(TypedBuffer, 'TypedBuffer', interfaceMeta);
  setMetadataFor(Uint16Buffer, 'Uint16Buffer', classMeta, VOID, [TypedBuffer]);
  setMetadataFor(ByteArrayBuilder, 'ByteArrayBuilder', classMeta, VOID, VOID, ByteArrayBuilder_init_$Create$);
  setMetadataFor(Companion_45, 'Companion', objectMeta);
  setMetadataFor(ByteUnits, 'ByteUnits', classMeta);
  setMetadataFor(Companion_46, 'Companion', objectMeta);
  setMetadataFor(Arch, 'Arch', classMeta, Enum);
  setMetadataFor(Companion_47, 'Companion', objectMeta);
  setMetadataFor(Os, 'Os', classMeta, Enum);
  function get_isWindows() {
    return this.j1x().f1x();
  }
  function get_isLinux() {
    return this.j1x().g1x();
  }
  function get_isMac() {
    return this.j1x().h1x();
  }
  function get_isNative() {
    return this.k1x().m1x();
  }
  function get_isJsNodeJs() {
    return this.l1x() === 'js-node' ? true : this.l1x() === 'wasm-node';
  }
  function get_isJsBrowser() {
    return this.l1x() === 'js-web' ? true : this.l1x() === 'wasm-web';
  }
  setMetadataFor(Platform, 'Platform', interfaceMeta);
  setMetadataFor(Companion_48, 'Companion', objectMeta, VOID, [Platform]);
  setMetadataFor(Companion_49, 'Companion', objectMeta);
  setMetadataFor(Runtime, 'Runtime', classMeta, Enum);
  setMetadataFor(FastArrayList, 'FastArrayList', classMeta, AbstractMutableList, [AbstractMutableList, MutableListEx, RandomAccess], FastArrayList_init_$Create$);
  setMetadataFor(Lock, 'Lock', classMeta, VOID, [BaseLock], Lock);
  setMetadataFor(NonRecursiveLock, 'NonRecursiveLock', classMeta, VOID, [BaseLock], NonRecursiveLock);
  setMetadataFor(Entry_0, 'Entry', classMeta);
  setMetadataFor(Companion_50, 'Companion', objectMeta);
  setMetadataFor(JSStackTrace, 'JSStackTrace', classMeta);
  setMetadataFor(Console, 'Console', objectMeta, BaseConsole);
  setMetadataFor(DefaultLogOutput, 'DefaultLogOutput', objectMeta);
  setMetadataFor(Companion_51, 'Companion', objectMeta);
  setMetadataFor(Buffer, 'Buffer', classMeta);
  //endregion
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function IntArray2(width, height, data) {
    this.ax_1 = width;
    this.bx_1 = height;
    this.cx_1 = data;
    Companion_instance_2.dx(this.ax_1, this.bx_1, this.cx_1.length);
  }
  protoOf(IntArray2).ex = function () {
    return this.ax_1;
  };
  protoOf(IntArray2).fx = function () {
    return this.bx_1;
  };
  protoOf(IntArray2).gx = function (idx) {
    return this.cx_1[idx];
  };
  protoOf(IntArray2).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof IntArray2) {
      tmp_1 = this.ax_1 === other.ax_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.bx_1 === other.bx_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = contentEquals(this.cx_1, other.cx_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IntArray2).hx = function (x, y) {
    return this.cx_1[index(this, x, y)];
  };
  protoOf(IntArray2).ix = function (x, y, value) {
    this.cx_1[index(this, x, y)] = value;
  };
  protoOf(IntArray2).hashCode = function () {
    return (this.ax_1 + this.bx_1 | 0) + contentHashCode(this.cx_1) | 0;
  };
  protoOf(IntArray2).s = function () {
    return intArrayIterator(this.cx_1);
  };
  protoOf(IntArray2).toString = function () {
    return this.jx();
  };
  function swap(_this__u8e3s4, lIndex, rIndex) {
    var temp = _this__u8e3s4[lIndex];
    _this__u8e3s4[lIndex] = _this__u8e3s4[rIndex];
    _this__u8e3s4[rIndex] = temp;
  }
  function rotateRight(_this__u8e3s4, offset) {
    offset = offset === VOID ? 1 : offset;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'korlibs.datastructure._rotateRight' call
      var size = _this__u8e3s4.length;
      var offset_0 = umod_0(offset, size);
      if (offset_0 === 0) {
        tmp$ret$0 = Unit_instance;
        break $l$block;
      }
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(1 <= offset_0 ? offset_0 < size : false)) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'korlibs.datastructure.rotateRight.<anonymous>' call
      reverse(_this__u8e3s4, 0, size);
      // Inline function 'korlibs.datastructure.rotateRight.<anonymous>' call
      reverse(_this__u8e3s4, 0, offset_0);
      // Inline function 'korlibs.datastructure.rotateRight.<anonymous>' call
      reverse(_this__u8e3s4, offset_0, size);
    }
    return tmp$ret$0;
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function ensure($this, count) {
    if (($this.mx_1 + count | 0) > $this.lx_1.length) {
      var tmp = $this;
      var tmp_0 = $this.lx_1;
      // Inline function 'kotlin.math.max' call
      var a = $this.mx_1 + count | 0;
      var b = imul($this.lx_1.length, 3);
      var tmp$ret$0 = Math.max(a, b);
      var tmp_1 = copyOf(tmp_0, tmp$ret$0);
      tmp.lx_1 = isDoubleArray(tmp_1) ? tmp_1 : THROW_CCE();
    }
  }
  function DoubleArrayList(capacity) {
    capacity = capacity === VOID ? 7 : capacity;
    var tmp = this;
    var tmp_0 = new Float64Array(capacity);
    tmp.lx_1 = isDoubleArray(tmp_0) ? tmp_0 : THROW_CCE();
    this.mx_1 = 0;
  }
  protoOf(DoubleArrayList).nx = function (value) {
    ensure(this, value);
    this.mx_1 = value;
  };
  protoOf(DoubleArrayList).l = function () {
    return this.mx_1;
  };
  protoOf(DoubleArrayList).n2 = function () {
    this.mx_1 = 0;
  };
  protoOf(DoubleArrayList).ox = function (v0) {
    ensure(this, 1);
    var tmp = this.lx_1;
    var tmp1 = this.mx_1;
    this.mx_1 = tmp1 + 1 | 0;
    tmp[tmp1] = v0;
  };
  protoOf(DoubleArrayList).px = function (v0, v1) {
    ensure(this, 2);
    var tmp = this.lx_1;
    var tmp1 = this.mx_1;
    this.mx_1 = tmp1 + 1 | 0;
    tmp[tmp1] = v0;
    var tmp_0 = this.lx_1;
    var tmp3 = this.mx_1;
    this.mx_1 = tmp3 + 1 | 0;
    tmp_0[tmp3] = v1;
  };
  protoOf(DoubleArrayList).qx = function (v0, v1, v2, v3, v4, v5) {
    ensure(this, 6);
    var tmp = this.lx_1;
    var tmp1 = this.mx_1;
    this.mx_1 = tmp1 + 1 | 0;
    tmp[tmp1] = v0;
    var tmp_0 = this.lx_1;
    var tmp3 = this.mx_1;
    this.mx_1 = tmp3 + 1 | 0;
    tmp_0[tmp3] = v1;
    var tmp_1 = this.lx_1;
    var tmp5 = this.mx_1;
    this.mx_1 = tmp5 + 1 | 0;
    tmp_1[tmp5] = v2;
    var tmp_2 = this.lx_1;
    var tmp7 = this.mx_1;
    this.mx_1 = tmp7 + 1 | 0;
    tmp_2[tmp7] = v3;
    var tmp_3 = this.lx_1;
    var tmp9 = this.mx_1;
    this.mx_1 = tmp9 + 1 | 0;
    tmp_3[tmp9] = v4;
    var tmp_4 = this.lx_1;
    var tmp11 = this.mx_1;
    this.mx_1 = tmp11 + 1 | 0;
    tmp_4[tmp11] = v5;
  };
  protoOf(DoubleArrayList).rx = function (values, offset, length) {
    ensure(this, length);
    arraycopy(isDoubleArray(values) ? values : THROW_CCE(), offset, this.lx_1, this.l(), length);
    this.nx(this.l() + length | 0);
  };
  protoOf(DoubleArrayList).sx = function (values, offset, length, $super) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? values.length : length;
    var tmp;
    if ($super === VOID) {
      this.rx(values, offset, length);
      tmp = Unit_instance;
    } else {
      tmp = $super.rx.call(this, values, offset, length);
    }
    return tmp;
  };
  protoOf(DoubleArrayList).b1 = function (index) {
    return this.lx_1[index];
  };
  protoOf(DoubleArrayList).gx = function (index) {
    return this.lx_1[index];
  };
  protoOf(DoubleArrayList).tx = function (index, value) {
    if (index >= this.mx_1) {
      ensure(this, index + 1 | 0);
      this.mx_1 = index + 1 | 0;
    }
    this.lx_1[index] = value;
  };
  protoOf(DoubleArrayList).s = function () {
    return this.m1(0);
  };
  protoOf(DoubleArrayList).ux = function (element) {
    var inductionVariable = 0;
    var last = this.mx_1;
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.lx_1[n] === element)
          return true;
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(DoubleArrayList).vx = function (elements) {
    var tmp0_iterator = elements.s();
    while (tmp0_iterator.t()) {
      var e = tmp0_iterator.u();
      if (!this.ux(e))
        return false;
    }
    return true;
  };
  protoOf(DoubleArrayList).w = function (elements) {
    return this.vx(elements);
  };
  protoOf(DoubleArrayList).x = function () {
    return this.l() === 0;
  };
  protoOf(DoubleArrayList).wx = function () {
    return copyOf(this.lx_1, this.mx_1);
  };
  protoOf(DoubleArrayList).m1 = function (index) {
    return take(this.lx_1, this.mx_1).m1(index);
  };
  protoOf(DoubleArrayList).hashCode = function () {
    return contentHashCode_3(this.lx_1, 0, this.l());
  };
  protoOf(DoubleArrayList).equals = function (other) {
    if (other instanceof DoubleArrayList)
      return this.l() === other.l() ? contentEquals_3(this.lx_1, other.lx_1, 0, this.l()) : false;
    if (!(other == null) ? isInterface(other, List) : false)
      return equals(other, this);
    return false;
  };
  protoOf(DoubleArrayList).toString = function () {
    // Inline function 'kotlin.also' call
    var this_0 = StringBuilder_init_$Create$(2 + imul(5, this.l()) | 0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.datastructure.DoubleArrayList.toString.<anonymous>' call
    this_0.g5(_Char___init__impl__6a9atx(91));
    var inductionVariable = 0;
    var last = this.l();
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(n === 0)) {
          this_0.f5(', ');
        }
        this_0.t7(this.gx(n));
      }
       while (inductionVariable < last);
    this_0.g5(_Char___init__impl__6a9atx(93));
    return this_0.toString();
  };
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function IntArrayList(capacity) {
    capacity = capacity === VOID ? 7 : capacity;
    var tmp = this;
    var tmp_0 = new Int32Array(capacity);
    tmp.xx_1 = isIntArray(tmp_0) ? tmp_0 : THROW_CCE();
    this.yx_1 = 0;
  }
  protoOf(IntArrayList).l = function () {
    return this.yx_1;
  };
  protoOf(IntArrayList).zx = function (count) {
    if ((this.yx_1 + count | 0) > this.xx_1.length) {
      var tmp = this;
      var tmp_0 = this.xx_1;
      // Inline function 'kotlin.math.max' call
      var a = this.yx_1 + count | 0;
      var b = imul(this.xx_1.length, 3);
      var tmp$ret$0 = Math.max(a, b);
      var tmp_1 = copyOf_0(tmp_0, tmp$ret$0);
      tmp.xx_1 = isIntArray(tmp_1) ? tmp_1 : THROW_CCE();
    }
  };
  protoOf(IntArrayList).n2 = function () {
    this.yx_1 = 0;
  };
  protoOf(IntArrayList).ay = function (v0) {
    this.zx(1);
    var tmp = this.xx_1;
    var tmp1 = this.yx_1;
    this.yx_1 = tmp1 + 1 | 0;
    tmp[tmp1] = v0;
  };
  protoOf(IntArrayList).b1 = function (index) {
    return this.xx_1[index];
  };
  protoOf(IntArrayList).gx = function (index) {
    return this.xx_1[index];
  };
  protoOf(IntArrayList).by = function (index, value) {
    if (index >= this.yx_1) {
      this.zx(index + 1 | 0);
      this.yx_1 = index + 1 | 0;
    }
    this.xx_1[index] = value;
  };
  protoOf(IntArrayList).s = function () {
    return this.m1(0);
  };
  protoOf(IntArrayList).eg = function (element) {
    var inductionVariable = 0;
    var last = this.yx_1;
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.xx_1[n] === element)
          return true;
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(IntArrayList).cy = function (elements) {
    var tmp0_iterator = elements.s();
    while (tmp0_iterator.t()) {
      var e = tmp0_iterator.u();
      if (!this.eg(e))
        return false;
    }
    return true;
  };
  protoOf(IntArrayList).w = function (elements) {
    return this.cy(elements);
  };
  protoOf(IntArrayList).x = function () {
    return this.l() === 0;
  };
  protoOf(IntArrayList).dy = function () {
    return !(this.l() === 0);
  };
  protoOf(IntArrayList).ey = function () {
    var tmp;
    if (this.x()) {
      throw IndexOutOfBoundsException_init_$Create$();
    } else {
      tmp = this.xx_1[this.yx_1 - 1 | 0];
    }
    return tmp;
  };
  protoOf(IntArrayList).fy = function (index, value) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.datastructure.IntArrayList.insertAt.<anonymous>' call
    this.zx(1);
    if (this.dy()) {
      arraycopy_0(this.xx_1, index, this.xx_1, index + 1 | 0, this.yx_1 - index | 0);
    }
    this.xx_1[index] = value;
    this.yx_1 = this.yx_1 + 1 | 0;
    return this;
  };
  protoOf(IntArrayList).gy = function (indexA, indexB) {
    var l = this.gx(indexA);
    var r = this.gx(indexB);
    this.by(indexA, r);
    this.by(indexB, l);
  };
  protoOf(IntArrayList).hy = function (index, count) {
    if ((index < 0 ? true : index >= this.yx_1) ? true : (index + count | 0) > this.yx_1)
      throw IndexOutOfBoundsException_init_$Create$();
    var out = this.xx_1[index];
    if (count > 0) {
      if (index < (this.yx_1 - count | 0)) {
        arraycopy_0(this.xx_1, index + count | 0, this.xx_1, index, (this.yx_1 - index | 0) - count | 0);
      }
      this.yx_1 = this.yx_1 - count | 0;
    }
    return out;
  };
  protoOf(IntArrayList).m1 = function (index) {
    return take_0(this.xx_1, this.yx_1).m1(index);
  };
  protoOf(IntArrayList).hashCode = function () {
    return contentHashCode_4(this.xx_1, 0, this.l());
  };
  protoOf(IntArrayList).equals = function (other) {
    if (other instanceof IntArrayList)
      return this.l() === other.l() ? contentEquals_4(this.xx_1, other.xx_1, 0, this.l()) : false;
    if (!(other == null) ? isInterface(other, List) : false)
      return equals(other, this);
    return false;
  };
  protoOf(IntArrayList).toString = function () {
    // Inline function 'kotlin.also' call
    var this_0 = StringBuilder_init_$Create$(2 + imul(5, this.l()) | 0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.datastructure.IntArrayList.toString.<anonymous>' call
    this_0.g5(_Char___init__impl__6a9atx(91));
    var inductionVariable = 0;
    var last = this.l();
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(n === 0)) {
          this_0.f5(', ');
        }
        this_0.q7(this.gx(n));
      }
       while (inductionVariable < last);
    this_0.g5(_Char___init__impl__6a9atx(93));
    return this_0.toString();
  };
  function sort(_this__u8e3s4, start, end, reversed) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? _this__u8e3s4.l() : end;
    reversed = reversed === VOID ? false : reversed;
    return genericSort_0(_this__u8e3s4, start, end - 1 | 0, DoubleArrayListSortOps_getInstance(), reversed);
  }
  function DoubleArrayListSortOps() {
    DoubleArrayListSortOps_instance = this;
    SortOps.call(this);
  }
  protoOf(DoubleArrayListSortOps).iy = function (subject, l, r) {
    return compareTo(subject.gx(l), subject.gx(r));
  };
  protoOf(DoubleArrayListSortOps).jy = function (subject, l, r) {
    return this.iy(subject instanceof DoubleArrayList ? subject : THROW_CCE(), l, r);
  };
  protoOf(DoubleArrayListSortOps).ky = function (subject, indexL, indexR) {
    var l = subject.gx(indexL);
    var r = subject.gx(indexR);
    subject.tx(indexR, l);
    subject.tx(indexL, r);
  };
  protoOf(DoubleArrayListSortOps).ly = function (subject, indexL, indexR) {
    return this.ky(subject instanceof DoubleArrayList ? subject : THROW_CCE(), indexL, indexR);
  };
  var DoubleArrayListSortOps_instance;
  function DoubleArrayListSortOps_getInstance() {
    if (DoubleArrayListSortOps_instance == null)
      new DoubleArrayListSortOps();
    return DoubleArrayListSortOps_instance;
  }
  function _get__data__kyoi3c($this) {
    // Inline function 'korlibs.datastructure.fastCastTo' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return $this.py_1;
  }
  function _get_capacity__a9k9f3($this) {
    return $this.py_1.length;
  }
  function TGenDeque_init_$Init$($this) {
    TGenDeque.call($this, 16);
    return $this;
  }
  function TGenDeque_init_$Create$() {
    return TGenDeque_init_$Init$(objectCreate(protoOf(TGenDeque)));
  }
  function resizeIfRequiredFor($this, count) {
    if (($this.l() + count | 0) > _get_capacity__a9k9f3($this)) {
      var i = $this.py_1;
      var istart = $this.ny_1;
      // Inline function 'kotlin.arrayOfNulls' call
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = $this.py_1.length + 7 | 0;
      // Inline function 'kotlin.comparisons.maxOf' call
      var a_0 = $this.l() + count | 0;
      var b = imul($this.py_1.length, 2);
      var b_0 = Math.max(a_0, b);
      var size = Math.max(a, b_0);
      var _o = fillArrayVal(Array(size), null);
      var o = isArray(_o) ? _o : THROW_CCE();
      copyCyclic($this, i, istart, o, $this.oy_1);
      $this.py_1 = o;
      $this.ny_1 = 0;
    }
  }
  function copyCyclic($this, i, istart, o, count) {
    // Inline function 'kotlin.math.min' call
    var a = i.length - istart | 0;
    var size1 = Math.min(a, count);
    var size2 = count - size1 | 0;
    arraycopy_1(i, istart, o, 0, size1);
    if (size2 > 0) {
      arraycopy_1(i, 0, o, size1, size2);
    }
  }
  function _addLast($this, item) {
    $this.py_1[($this.ny_1 + $this.oy_1 | 0) % _get_capacity__a9k9f3($this) | 0] = item;
    $this.oy_1 = $this.oy_1 + 1 | 0;
  }
  function nullify($this, index) {
    _get__data__kyoi3c($this)[index] = null;
  }
  function internalIndex($this, index) {
    return umod_0($this.ny_1 + index | 0, _get_capacity__a9k9f3($this));
  }
  function TGenDeque$iterator$1($that, this$0) {
    this.ry_1 = $that;
    this.sy_1 = this$0;
    this.qy_1 = 0;
  }
  protoOf(TGenDeque$iterator$1).u = function () {
    var tmp1 = this.qy_1;
    this.qy_1 = tmp1 + 1 | 0;
    return this.ry_1.b1(tmp1);
  };
  protoOf(TGenDeque$iterator$1).t = function () {
    return this.qy_1 < this.sy_1.l();
  };
  protoOf(TGenDeque$iterator$1).c1 = function () {
    this.qy_1 = this.qy_1 - 1 | 0;
    this.sy_1.e1(this.qy_1);
  };
  function TGenDeque(initialCapacity) {
    this.ny_1 = 0;
    this.oy_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(initialCapacity), null);
    tmp.py_1 = isArray(tmp_0) ? tmp_0 : THROW_CCE();
  }
  protoOf(TGenDeque).l = function () {
    return this.oy_1;
  };
  protoOf(TGenDeque).x = function () {
    return this.l() === 0;
  };
  protoOf(TGenDeque).ty = function (item) {
    resizeIfRequiredFor(this, 1);
    _addLast(this, item);
  };
  protoOf(TGenDeque).uy = function (list) {
    // Inline function 'korlibs.datastructure.TGenDeque._addAll' call
    var count = list.l();
    resizeIfRequiredFor(this, count);
    var base = this.ny_1 + this.oy_1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.py_1;
        var tmp_0 = (base + n | 0) % _get_capacity__a9k9f3(this) | 0;
        // Inline function 'korlibs.datastructure.TGenDeque.addAll.<anonymous>' call
        tmp[tmp_0] = list.b1(n);
      }
       while (inductionVariable < count);
    this.oy_1 = this.oy_1 + count | 0;
    return true;
  };
  protoOf(TGenDeque).vy = function (elements) {
    return this.uy(toList(elements));
  };
  protoOf(TGenDeque).q = function (elements) {
    return this.vy(elements);
  };
  protoOf(TGenDeque).ae = function () {
    if (this.oy_1 <= 0)
      throw IndexOutOfBoundsException_init_$Create$();
    var out = this.wy();
    nullify(this, this.ny_1);
    this.ny_1 = (this.ny_1 + 1 | 0) % _get_capacity__a9k9f3(this) | 0;
    this.oy_1 = this.oy_1 - 1 | 0;
    return out;
  };
  protoOf(TGenDeque).ce = function () {
    if (this.oy_1 <= 0)
      throw IndexOutOfBoundsException_init_$Create$();
    var out = this.xy();
    nullify(this, internalIndex(this, this.l() - 1 | 0));
    this.oy_1 = this.oy_1 - 1 | 0;
    return out;
  };
  protoOf(TGenDeque).e1 = function (index) {
    if (index < 0 ? true : index >= this.l())
      throw IndexOutOfBoundsException_init_$Create$();
    if (index === 0)
      return this.ae();
    if (index === (this.l() - 1 | 0))
      return this.ce();
    var old = this.b1(index);
    if (index < (this.l() / 2 | 0)) {
      var inductionVariable = index;
      if (1 <= inductionVariable)
        do {
          var n = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          this.yy(n, this.b1(n - 1 | 0));
        }
         while (1 <= inductionVariable);
      this.ny_1 = umod_0(this.ny_1 + 1 | 0, _get_capacity__a9k9f3(this));
    } else {
      var inductionVariable_0 = index;
      var last = this.l() - 1 | 0;
      if (inductionVariable_0 < last)
        do {
          var n_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this.yy(n_0, this.b1(n_0 + 1 | 0));
        }
         while (inductionVariable_0 < last);
    }
    this.oy_1 = this.oy_1 - 1 | 0;
    return old;
  };
  protoOf(TGenDeque).zy = function (element) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.datastructure.TGenDeque.add.<anonymous>' call
    this.ty(element);
    return true;
  };
  protoOf(TGenDeque).p = function (element) {
    return this.zy((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(TGenDeque).wy = function () {
    return this.py_1[this.ny_1];
  };
  protoOf(TGenDeque).xy = function () {
    return this.py_1[internalIndex(this, this.l() - 1 | 0)];
  };
  protoOf(TGenDeque).yy = function (index, value) {
    this.py_1[internalIndex(this, index)] = value;
  };
  protoOf(TGenDeque).b1 = function (index) {
    return this.py_1[internalIndex(this, index)];
  };
  protoOf(TGenDeque).az = function (elements) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(elements, 10));
    var tmp0_iterator = elements.s();
    while (tmp0_iterator.t()) {
      var item = tmp0_iterator.u();
      // Inline function 'korlibs.datastructure.TGenDeque.containsAll.<anonymous>' call
      var tmp$ret$0 = to(item, 0);
      destination.p(tmp$ret$0);
    }
    var emap = toLinkedMap(destination);
    var inductionVariable = 0;
    var last = this.l();
    if (inductionVariable < last)
      do {
        var it = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var e = this.b1(it);
        // Inline function 'kotlin.collections.contains' call
        // Inline function 'kotlin.collections.containsKey' call
        if ((isInterface(emap, Map_0) ? emap : THROW_CCE()).a2(e)) {
          // Inline function 'kotlin.collections.set' call
          emap.x1(e, 1);
        }
      }
       while (inductionVariable < last);
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var this_0 = emap.w1();
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.x();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$5 = true;
        break $l$block_0;
      }
      var tmp0_iterator_0 = this_0.s();
      while (tmp0_iterator_0.t()) {
        var element = tmp0_iterator_0.u();
        // Inline function 'korlibs.datastructure.TGenDeque.containsAll.<anonymous>' call
        if (!(element === 1)) {
          tmp$ret$5 = false;
          break $l$block_0;
        }
      }
      tmp$ret$5 = true;
    }
    return tmp$ret$5;
  };
  protoOf(TGenDeque).w = function (elements) {
    return this.az(elements);
  };
  protoOf(TGenDeque).s = function () {
    var that = this;
    return new TGenDeque$iterator$1(that, this);
  };
  protoOf(TGenDeque).hashCode = function () {
    // Inline function 'korlibs.datastructure.internal.contentHashCode' call
    var size = this.l();
    var result = 1;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = imul(31, result);
        // Inline function 'kotlin.hashCode' call
        // Inline function 'korlibs.datastructure.TGenDeque.hashCode.<anonymous>' call
        var tmp0_safe_receiver = this.b1(n);
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
        result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
      }
       while (inductionVariable < size);
    return result;
  };
  protoOf(TGenDeque).equals = function (other) {
    if (!(other instanceof TGenDeque))
      return false;
    if (!(other.l() === this.l()))
      return false;
    var inductionVariable = 0;
    var last = this.l();
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(this.b1(n), other.b1(n)))
          return false;
      }
       while (inductionVariable < last);
    return true;
  };
  protoOf(TGenDeque).toString = function () {
    var sb = StringBuilder_init_$Create$_0();
    sb.g5(_Char___init__impl__6a9atx(91));
    var inductionVariable = 0;
    var last = this.l();
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        sb.e5(this.b1(n));
        if (!(n === (this.l() - 1 | 0))) {
          sb.f5(', ');
        }
      }
       while (inductionVariable < last);
    sb.g5(_Char___init__impl__6a9atx(93));
    return sb.toString();
  };
  function _get__data__kyoi3c_0($this) {
    // Inline function 'korlibs.datastructure.fastCastTo' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return $this.dz_1;
  }
  function _get_capacity__a9k9f3_0($this) {
    return $this.dz_1.length;
  }
  function IntDeque_init_$Init$($this) {
    IntDeque.call($this, 16);
    return $this;
  }
  function IntDeque_init_$Create$() {
    return IntDeque_init_$Init$(objectCreate(protoOf(IntDeque)));
  }
  function resizeIfRequiredFor_0($this, count) {
    if (($this.l() + count | 0) > _get_capacity__a9k9f3_0($this)) {
      var i = $this.dz_1;
      var istart = $this.bz_1;
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = $this.dz_1.length + 7 | 0;
      // Inline function 'kotlin.comparisons.maxOf' call
      var a_0 = $this.l() + count | 0;
      var b = imul($this.dz_1.length, 2);
      var b_0 = Math.max(a_0, b);
      var tmp$ret$1 = Math.max(a, b_0);
      var _o = new Int32Array(tmp$ret$1);
      var o = isIntArray(_o) ? _o : THROW_CCE();
      copyCyclic_0($this, i, istart, o, $this.cz_1);
      $this.dz_1 = o;
      $this.bz_1 = 0;
    }
  }
  function copyCyclic_0($this, i, istart, o, count) {
    // Inline function 'kotlin.math.min' call
    var a = i.length - istart | 0;
    var size1 = Math.min(a, count);
    var size2 = count - size1 | 0;
    arraycopy_0(i, istart, o, 0, size1);
    if (size2 > 0) {
      arraycopy_0(i, 0, o, size1, size2);
    }
  }
  function _addLast_0($this, item) {
    $this.dz_1[($this.bz_1 + $this.cz_1 | 0) % _get_capacity__a9k9f3_0($this) | 0] = item;
    $this.cz_1 = $this.cz_1 + 1 | 0;
  }
  function nullify_0($this, index) {
    _get__data__kyoi3c_0($this)[index] = 0;
  }
  function internalIndex_0($this, index) {
    return umod_0($this.bz_1 + index | 0, _get_capacity__a9k9f3_0($this));
  }
  function IntDeque$iterator$1($that, this$0) {
    this.fz_1 = $that;
    this.gz_1 = this$0;
    this.ez_1 = 0;
  }
  protoOf(IntDeque$iterator$1).u = function () {
    var tmp1 = this.ez_1;
    this.ez_1 = tmp1 + 1 | 0;
    return this.fz_1.b1(tmp1);
  };
  protoOf(IntDeque$iterator$1).t = function () {
    return this.ez_1 < this.gz_1.l();
  };
  protoOf(IntDeque$iterator$1).c1 = function () {
    this.ez_1 = this.ez_1 - 1 | 0;
    this.gz_1.e1(this.ez_1);
  };
  function IntDeque(initialCapacity) {
    this.bz_1 = 0;
    this.cz_1 = 0;
    var tmp = this;
    var tmp_0 = new Int32Array(initialCapacity);
    tmp.dz_1 = isIntArray(tmp_0) ? tmp_0 : THROW_CCE();
  }
  protoOf(IntDeque).l = function () {
    return this.cz_1;
  };
  protoOf(IntDeque).x = function () {
    return this.l() === 0;
  };
  protoOf(IntDeque).hz = function (item) {
    resizeIfRequiredFor_0(this, 1);
    _addLast_0(this, item);
  };
  protoOf(IntDeque).iz = function (list) {
    // Inline function 'korlibs.datastructure.IntDeque._addAll' call
    var count = list.l();
    resizeIfRequiredFor_0(this, count);
    var base = this.bz_1 + this.cz_1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.dz_1;
        var tmp_0 = (base + n | 0) % _get_capacity__a9k9f3_0(this) | 0;
        // Inline function 'korlibs.datastructure.IntDeque.addAll.<anonymous>' call
        tmp[tmp_0] = list.b1(n);
      }
       while (inductionVariable < count);
    this.cz_1 = this.cz_1 + count | 0;
    return true;
  };
  protoOf(IntDeque).jz = function (elements) {
    return this.iz(toList(elements));
  };
  protoOf(IntDeque).q = function (elements) {
    return this.jz(elements);
  };
  protoOf(IntDeque).ae = function () {
    if (this.cz_1 <= 0)
      throw IndexOutOfBoundsException_init_$Create$();
    var out = this.wy();
    nullify_0(this, this.bz_1);
    this.bz_1 = (this.bz_1 + 1 | 0) % _get_capacity__a9k9f3_0(this) | 0;
    this.cz_1 = this.cz_1 - 1 | 0;
    return out;
  };
  protoOf(IntDeque).ce = function () {
    if (this.cz_1 <= 0)
      throw IndexOutOfBoundsException_init_$Create$();
    var out = this.xy();
    nullify_0(this, internalIndex_0(this, this.l() - 1 | 0));
    this.cz_1 = this.cz_1 - 1 | 0;
    return out;
  };
  protoOf(IntDeque).e1 = function (index) {
    if (index < 0 ? true : index >= this.l())
      throw IndexOutOfBoundsException_init_$Create$();
    if (index === 0)
      return this.ae();
    if (index === (this.l() - 1 | 0))
      return this.ce();
    var old = this.b1(index);
    if (index < (this.l() / 2 | 0)) {
      var inductionVariable = index;
      if (1 <= inductionVariable)
        do {
          var n = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          this.by(n, this.b1(n - 1 | 0));
        }
         while (1 <= inductionVariable);
      this.bz_1 = umod_0(this.bz_1 + 1 | 0, _get_capacity__a9k9f3_0(this));
    } else {
      var inductionVariable_0 = index;
      var last = this.l() - 1 | 0;
      if (inductionVariable_0 < last)
        do {
          var n_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this.by(n_0, this.b1(n_0 + 1 | 0));
        }
         while (inductionVariable_0 < last);
    }
    this.cz_1 = this.cz_1 - 1 | 0;
    return old;
  };
  protoOf(IntDeque).kz = function (element) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.datastructure.IntDeque.add.<anonymous>' call
    this.hz(element);
    return true;
  };
  protoOf(IntDeque).p = function (element) {
    return this.kz((!(element == null) ? typeof element === 'number' : false) ? element : THROW_CCE());
  };
  protoOf(IntDeque).wy = function () {
    return this.dz_1[this.bz_1];
  };
  protoOf(IntDeque).xy = function () {
    return this.dz_1[internalIndex_0(this, this.l() - 1 | 0)];
  };
  protoOf(IntDeque).by = function (index, value) {
    this.dz_1[internalIndex_0(this, index)] = value;
  };
  protoOf(IntDeque).b1 = function (index) {
    return this.dz_1[internalIndex_0(this, index)];
  };
  protoOf(IntDeque).cy = function (elements) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(elements, 10));
    var tmp0_iterator = elements.s();
    while (tmp0_iterator.t()) {
      var item = tmp0_iterator.u();
      // Inline function 'korlibs.datastructure.IntDeque.containsAll.<anonymous>' call
      var tmp$ret$0 = to(item, 0);
      destination.p(tmp$ret$0);
    }
    var emap = toLinkedMap(destination);
    var inductionVariable = 0;
    var last = this.l();
    if (inductionVariable < last)
      do {
        var it = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var e = this.b1(it);
        // Inline function 'kotlin.collections.contains' call
        // Inline function 'kotlin.collections.containsKey' call
        if ((isInterface(emap, Map_0) ? emap : THROW_CCE()).a2(e)) {
          // Inline function 'kotlin.collections.set' call
          emap.x1(e, 1);
        }
      }
       while (inductionVariable < last);
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var this_0 = emap.w1();
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.x();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$5 = true;
        break $l$block_0;
      }
      var tmp0_iterator_0 = this_0.s();
      while (tmp0_iterator_0.t()) {
        var element = tmp0_iterator_0.u();
        // Inline function 'korlibs.datastructure.IntDeque.containsAll.<anonymous>' call
        if (!(element === 1)) {
          tmp$ret$5 = false;
          break $l$block_0;
        }
      }
      tmp$ret$5 = true;
    }
    return tmp$ret$5;
  };
  protoOf(IntDeque).w = function (elements) {
    return this.cy(elements);
  };
  protoOf(IntDeque).s = function () {
    var that = this;
    return new IntDeque$iterator$1(that, this);
  };
  protoOf(IntDeque).hashCode = function () {
    // Inline function 'korlibs.datastructure.internal.contentHashCode' call
    var size = this.l();
    var result = 1;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = imul(31, result);
        // Inline function 'kotlin.hashCode' call
        // Inline function 'korlibs.datastructure.IntDeque.hashCode.<anonymous>' call
        var tmp0_safe_receiver = this.b1(n);
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
        result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
      }
       while (inductionVariable < size);
    return result;
  };
  protoOf(IntDeque).equals = function (other) {
    if (!(other instanceof IntDeque))
      return false;
    if (!(other.l() === this.l()))
      return false;
    var inductionVariable = 0;
    var last = this.l();
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(this.b1(n) === other.b1(n)))
          return false;
      }
       while (inductionVariable < last);
    return true;
  };
  protoOf(IntDeque).toString = function () {
    var sb = StringBuilder_init_$Create$_0();
    sb.g5(_Char___init__impl__6a9atx(91));
    var inductionVariable = 0;
    var last = this.l();
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        sb.q7(this.b1(n));
        if (!(n === (this.l() - 1 | 0))) {
          sb.f5(', ');
        }
      }
       while (inductionVariable < last);
    sb.g5(_Char___init__impl__6a9atx(93));
    return sb.toString();
  };
  function fastArrayListOf(values) {
    // Inline function 'kotlin.also' call
    var this_0 = FastArrayList_init_$Create$_0(values.length);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.datastructure.fastArrayListOf.<anonymous>' call
    addAll(this_0, values);
    return this_0;
  }
  function MutableListEx() {
  }
  function toFastList(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var this_0 = FastArrayList_init_$Create$_0(_this__u8e3s4.length);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.datastructure.toFastList.<anonymous>' call
    // Inline function 'korlibs.datastructure.iterators.fastForEach' call
    var n = 0;
    while (n < _this__u8e3s4.length) {
      // Inline function 'korlibs.datastructure.toFastList.<anonymous>.<anonymous>' call
      var tmp0 = n;
      n = tmp0 + 1 | 0;
      var it = _this__u8e3s4[tmp0];
      this_0.p(it);
    }
    return this_0;
  }
  function toFastList_0(_this__u8e3s4, out) {
    out = out === VOID ? FastArrayList_init_$Create$() : out;
    out.pz(0, _this__u8e3s4);
    out.sz(_this__u8e3s4.l());
    return out;
  }
  function get_keys(_this__u8e3s4) {
    return keys(_this__u8e3s4);
  }
  function get_values(_this__u8e3s4) {
    return values(_this__u8e3s4);
  }
  function values(_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = keys(_this__u8e3s4);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.s();
    while (tmp0_iterator.t()) {
      var item = tmp0_iterator.u();
      // Inline function 'korlibs.datastructure.values.<anonymous>' call
      // Inline function 'korlibs.datastructure.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = _this__u8e3s4.get(item);
      destination.p(tmp$ret$2);
    }
    var tmp = destination;
    return isInterface(tmp, List) ? tmp : THROW_CCE();
  }
  function getAndRemove(_this__u8e3s4, key) {
    // Inline function 'kotlin.also' call
    var this_0 = get_1(_this__u8e3s4, key);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.datastructure.getAndRemove.<anonymous>' call
    remove(_this__u8e3s4, key);
    return this_0;
  }
  function get_keys_0(_this__u8e3s4) {
    return keys_0(_this__u8e3s4);
  }
  function FastSmallSet() {
    AbstractMutableSet.call(this);
    this.tz_1 = LinkedHashSet_init_$Create$();
    this.uz_1 = null;
    this.vz_1 = null;
    this.wz_1 = null;
  }
  protoOf(FastSmallSet).l = function () {
    return this.tz_1.l();
  };
  protoOf(FastSmallSet).s = function () {
    return this.tz_1.s();
  };
  protoOf(FastSmallSet).xz = function (element) {
    if (this.ie(element))
      return false;
    this.tz_1.p(element);
    return true;
  };
  protoOf(FastSmallSet).p = function (element) {
    return this.xz((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(FastSmallSet).yz = function (element) {
    this.uz_1 = null;
    this.vz_1 = null;
    this.wz_1 = null;
    this.tz_1.m2(element);
    return true;
  };
  protoOf(FastSmallSet).ie = function (element) {
    if ((element === this.uz_1 ? true : element === this.vz_1) ? true : element === this.uz_1)
      return true;
    var result = this.tz_1.v(element);
    if (result) {
      this.vz_1 = this.uz_1;
      this.wz_1 = this.vz_1;
      this.uz_1 = element;
    }
    return result;
  };
  protoOf(FastSmallSet).v = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.ie((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(FastSmallSet).n2 = function () {
    this.tz_1.n2();
    this.uz_1 = null;
    this.vz_1 = null;
    this.wz_1 = null;
  };
  function Companion_2() {
  }
  protoOf(Companion_2).dx = function (width, height, arraySize) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(arraySize >= imul(width, height))) {
      // Inline function 'korlibs.datastructure.Companion.checkArraySize.<anonymous>' call
      var message = 'backing array of size=' + arraySize + ', has less elements than ' + width + ' * ' + height;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function IArray2$asString$lambda(this$0) {
    return function (y) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = until(0, this$0.ex());
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.s();
      while (tmp0_iterator.t()) {
        var item = tmp0_iterator.u();
        // Inline function 'korlibs.datastructure.IArray2.asString.<anonymous>.<anonymous>' call
        var tmp$ret$0 = this$0.kx(item, y);
        destination.p(tmp$ret$0);
      }
      return joinToString(destination, ', ');
    };
  }
  function IArray2() {
  }
  function index(_this__u8e3s4, x, y) {
    if (!(0 <= x ? x < _this__u8e3s4.ex() : false) ? true : !(0 <= y ? y < _this__u8e3s4.fx() : false))
      throw IndexOutOfBoundsException_init_$Create$();
    return imul(y, _this__u8e3s4.ex()) + x | 0;
  }
  function currentKey($this) {
    switch ($this.a10_1) {
      case 2147483647:
      case 2147483646:
        return 0;
      default:
        return $this.zz_1.j10_1[$this.a10_1];
    }
  }
  function currentValue($this) {
    switch ($this.a10_1) {
      case 2147483647:
        return $this.zz_1.g10_1;
      case 2147483646:
        return null;
      default:
        return $this.zz_1.k10_1[$this.a10_1];
    }
  }
  function nextNonEmptyIndex($this, keys, offset) {
    var inductionVariable = offset;
    var last = keys.length;
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(keys[n] === 0))
          return n;
      }
       while (inductionVariable < last);
    return 2147483646;
  }
  function next($this) {
    if (!($this.a10_1 === 2147483646))
      $this.a10_1 = nextNonEmptyIndex($this, $this.zz_1.j10_1, $this.a10_1 === 2147483647 ? 0 : $this.a10_1 + 1 | 0);
  }
  function IntMap$_get_keys_$o$iterator$lambda_bn8atq($it) {
    return function () {
      return $it.t();
    };
  }
  function IntMap$_get_keys_$o$iterator$lambda_bn8atq_0($it) {
    return function () {
      return $it.n10();
    };
  }
  function IntMap$_get_values_$o$iterator$lambda_ggo058($it) {
    return function () {
      return $it.t();
    };
  }
  function IntMap$_get_values_$o$iterator$lambda_ggo058_0($it) {
    return function () {
      return $it.o10();
    };
  }
  function IntMap_init_$Init$(initialCapacity, loadFactor, $this) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    loadFactor = loadFactor === VOID ? 0.75 : loadFactor;
    // Inline function 'kotlin.math.max' call
    var b = ilog2Ceil(initialCapacity);
    var tmp$ret$0 = Math.max(4, b);
    IntMap.call($this, tmp$ret$0, loadFactor, true);
    return $this;
  }
  function IntMap_init_$Create$(initialCapacity, loadFactor) {
    return IntMap_init_$Init$(initialCapacity, loadFactor, objectCreate(protoOf(IntMap)));
  }
  function Companion_3() {
    this.p10_1 = 2147483646;
    this.q10_1 = 2147483647;
    this.r10_1 = 0;
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function _get_stashStart__3psegu($this) {
    return $this.j10_1.length - $this.i10_1 | 0;
  }
  function grow($this) {
    var inc = $this.c10_1 < 20 ? 3 : 1;
    var newnbits = $this.c10_1 + inc | 0;
    var new_0 = new IntMap(newnbits, $this.d10_1, true);
    var inductionVariable = 0;
    var last = $this.j10_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var k = $this.j10_1[n];
        if (!(k === 0)) {
          new_0.s10(k, $this.k10_1[n]);
        }
      }
       while (inductionVariable <= last);
    $this.c10_1 = new_0.c10_1;
    $this.e10_1 = new_0.e10_1;
    $this.h10_1 = new_0.h10_1;
    $this.i10_1 = new_0.i10_1;
    $this.j10_1 = new_0.j10_1;
    $this.k10_1 = new_0.k10_1;
    $this.l10_1 = new_0.l10_1;
  }
  function growStash($this) {
    $this.i10_1 = imul($this.i10_1, 2);
    $this.j10_1 = copyOf_0($this.j10_1, $this.t10());
    $this.k10_1 = copyOf_1($this.k10_1, $this.t10());
  }
  function _getKeyIndex($this, key) {
    if (key === 0)
      return $this.f10_1 ? 2147483647 : -1;
    var index1 = hash1($this, key);
    if ($this.j10_1[index1] === key)
      return index1;
    var index2 = hash2($this, key);
    if ($this.j10_1[index2] === key)
      return index2;
    var index3 = hash3($this, key);
    if ($this.j10_1[index3] === key)
      return index3;
    var inductionVariable = _get_stashStart__3psegu($this);
    var last = $this.j10_1.length;
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if ($this.j10_1[n] === key)
          return n;
      }
       while (inductionVariable < last);
    return -1;
  }
  function setEmptySlot($this, index, key, value) {
    if (!($this.j10_1[index] === 0))
      throw IllegalStateException_init_$Create$_0();
    $this.j10_1[index] = key;
    $this.k10_1[index] = value;
    $this.m10_1 = $this.m10_1 + 1 | 0;
    return null;
  }
  function hash1($this, key) {
    return _hash1(key, $this.h10_1);
  }
  function hash2($this, key) {
    return _hash2(key, $this.h10_1);
  }
  function hash3($this, key) {
    return _hash3(key, $this.h10_1);
  }
  function Entry(key, value) {
    this.u10_1 = key;
    this.v10_1 = value;
  }
  protoOf(Entry).toString = function () {
    return 'Entry(key=' + this.u10_1 + ', value=' + this.v10_1 + ')';
  };
  protoOf(Entry).hashCode = function () {
    var result = this.u10_1;
    result = imul(result, 31) + (this.v10_1 == null ? 0 : hashCode(this.v10_1)) | 0;
    return result;
  };
  protoOf(Entry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Entry))
      return false;
    var tmp0_other_with_cast = other instanceof Entry ? other : THROW_CCE();
    if (!(this.u10_1 === tmp0_other_with_cast.u10_1))
      return false;
    if (!equals(this.v10_1, tmp0_other_with_cast.v10_1))
      return false;
    return true;
  };
  function Iterator(map) {
    this.zz_1 = map;
    this.a10_1 = this.zz_1.f10_1 ? 2147483647 : nextNonEmptyIndex(this, this.zz_1.j10_1, 0);
    this.b10_1 = new Entry(0, null);
  }
  protoOf(Iterator).t = function () {
    return !(this.a10_1 === 2147483646);
  };
  protoOf(Iterator).n10 = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = currentKey(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.datastructure.Iterator.nextKey.<anonymous>' call
    next(this);
    return this_0;
  };
  protoOf(Iterator).o10 = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = currentValue(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.datastructure.Iterator.nextValue.<anonymous>' call
    next(this);
    return this_0;
  };
  function _no_name_provided__qut3iv(this$0) {
    this.w10_1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv).s = function () {
    // Inline function 'korlibs.datastructure.IntMap.<get-keys>.<anonymous>' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.datastructure.IntMap.<get-keys>.<anonymous>.<anonymous>' call
    var it = new Iterator(this.w10_1);
    var tmp = IntMap$_get_keys_$o$iterator$lambda_bn8atq(it);
    return Iterator_0(tmp, IntMap$_get_keys_$o$iterator$lambda_bn8atq_0(it));
  };
  function _no_name_provided__qut3iv_0(this$0) {
    this.x10_1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv_0).s = function () {
    // Inline function 'korlibs.datastructure.IntMap.<get-values>.<anonymous>' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.datastructure.IntMap.<get-values>.<anonymous>.<anonymous>' call
    var it = new Iterator(this.x10_1);
    var tmp = IntMap$_get_values_$o$iterator$lambda_ggo058(it);
    return Iterator_0(tmp, IntMap$_get_values_$o$iterator$lambda_ggo058_0(it));
  };
  function IntMap(nbits, loadFactor, dummy) {
    dummy = dummy === VOID ? false : dummy;
    this.c10_1 = nbits;
    this.d10_1 = loadFactor;
    this.e10_1 = 1 << this.c10_1;
    this.f10_1 = false;
    this.g10_1 = null;
    this.h10_1 = this.e10_1 - 1 | 0;
    this.i10_1 = 1 + imul(this.c10_1, this.c10_1) | 0;
    this.j10_1 = new Int32Array(this.t10());
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.t10();
    var tmp_0 = fillArrayVal(Array(size), null);
    tmp.k10_1 = isArray(tmp_0) ? tmp_0 : THROW_CCE();
    this.l10_1 = numberToInt(this.e10_1 * this.d10_1);
    this.m10_1 = 0;
  }
  protoOf(IntMap).t10 = function () {
    return this.e10_1 + this.i10_1 | 0;
  };
  protoOf(IntMap).b1 = function (key) {
    var index = _getKeyIndex(this, key);
    if (index < 0)
      return null;
    if (index === 2147483647)
      return this.g10_1;
    return this.k10_1[index];
  };
  protoOf(IntMap).s10 = function (key, value) {
    retry: while (true) {
      var index = _getKeyIndex(this, key);
      if (index < 0) {
        if (key === 0) {
          this.f10_1 = true;
          this.g10_1 = value;
          this.m10_1 = this.m10_1 + 1 | 0;
          return null;
        }
        if (this.m10_1 >= this.l10_1) {
          grow(this);
        }
        var index1 = hash1(this, key);
        if (this.j10_1[index1] === 0)
          return setEmptySlot(this, index1, key, value);
        var index2 = hash2(this, key);
        if (this.j10_1[index2] === 0)
          return setEmptySlot(this, index2, key, value);
        var index3 = hash3(this, key);
        if (this.j10_1[index3] === 0)
          return setEmptySlot(this, index3, key, value);
        var inductionVariable = _get_stashStart__3psegu(this);
        var last = this.j10_1.length;
        if (inductionVariable < last)
          do {
            var n = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (this.j10_1[n] === 0)
              return setEmptySlot(this, n, key, value);
          }
           while (inductionVariable < last);
        if (this.i10_1 > 512) {
          grow(this);
        } else {
          growStash(this);
        }
        continue retry;
      } else if (index === 2147483647) {
        // Inline function 'kotlin.apply' call
        var this_0 = this.g10_1;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'korlibs.datastructure.IntMap.set.<anonymous>' call
        this.g10_1 = value;
        return this_0;
      } else {
        // Inline function 'kotlin.apply' call
        var this_1 = this.k10_1[index];
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'korlibs.datastructure.IntMap.set.<anonymous>' call
        this.k10_1[index] = value;
        return this_1;
      }
    }
  };
  protoOf(IntMap).v1 = function () {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv(this);
  };
  protoOf(IntMap).w1 = function () {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv_0(this);
  };
  protoOf(IntMap).y10 = function (keys, offset) {
    var inductionVariable = offset;
    var last = keys.length;
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(keys[n] === 0))
          return n;
      }
       while (inductionVariable < last);
    return 2147483646;
  };
  protoOf(IntMap).equals = function (other) {
    if (!(other instanceof IntMap))
      return false;
    // Inline function 'korlibs.datastructure.IntMap.fastForEachNullable' call
    // Inline function 'korlibs.datastructure.IntMap.fastKeyForEach' call
    var index = this.f10_1 ? 2147483647 : this.y10(this.j10_1, 0);
    while (!(index === 2147483646)) {
      // Inline function 'korlibs.datastructure.IntMap.fastForEachNullable.<anonymous>' call
      var it;
      switch (index) {
        case 2147483647:
        case 2147483646:
          it = 0;
          break;
        default:
          it = this.j10_1[index];
          break;
      }
      // Inline function 'korlibs.datastructure.IntMap.equals.<anonymous>' call
      var key = it;
      var value = this.b1(it);
      if (!equals(other.b1(key), value))
        return false;
      index = this.y10(this.j10_1, index === 2147483647 ? 0 : index + 1 | 0);
    }
    return true;
  };
  protoOf(IntMap).hashCode = function () {
    var out = 0;
    // Inline function 'korlibs.datastructure.IntMap.fastForEachNullable' call
    // Inline function 'korlibs.datastructure.IntMap.fastKeyForEach' call
    var index = this.f10_1 ? 2147483647 : this.y10(this.j10_1, 0);
    while (!(index === 2147483646)) {
      // Inline function 'korlibs.datastructure.IntMap.fastForEachNullable.<anonymous>' call
      var it;
      switch (index) {
        case 2147483647:
        case 2147483646:
          it = 0;
          break;
        default:
          it = this.j10_1[index];
          break;
      }
      // Inline function 'korlibs.datastructure.IntMap.hashCode.<anonymous>' call
      var tmp = out;
      var tmp_0 = it;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = this.b1(it);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      out = tmp + (tmp_0 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0) | 0;
      index = this.y10(this.j10_1, index === 2147483647 ? 0 : index + 1 | 0);
    }
    return out;
  };
  function IntIntMap_init_$Init$(initialCapacity, loadFactor, $this) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    loadFactor = loadFactor === VOID ? 0.75 : loadFactor;
    // Inline function 'kotlin.math.max' call
    var b = ilog2Ceil(initialCapacity);
    var tmp$ret$0 = Math.max(4, b);
    IntIntMap.call($this, tmp$ret$0, loadFactor, true);
    return $this;
  }
  function IntIntMap_init_$Create$(initialCapacity, loadFactor) {
    return IntIntMap_init_$Init$(initialCapacity, loadFactor, objectCreate(protoOf(IntIntMap)));
  }
  function Companion_4() {
    this.z10_1 = 2147483646;
    this.a11_1 = 2147483647;
    this.b11_1 = 0;
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function _get_stashStart__3psegu_0($this) {
    return $this.j11_1.length - $this.i11_1 | 0;
  }
  function grow_0($this) {
    var inc = $this.c11_1 < 20 ? 3 : 1;
    var newnbits = $this.c11_1 + inc | 0;
    var new_0 = new IntIntMap(newnbits, $this.d11_1, true);
    var inductionVariable = 0;
    var last = $this.j11_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var k = $this.j11_1[n];
        if (!(k === 0)) {
          new_0.n11(k, $this.k11_1[n]);
        }
      }
       while (inductionVariable <= last);
    $this.c11_1 = new_0.c11_1;
    $this.e11_1 = new_0.e11_1;
    $this.h11_1 = new_0.h11_1;
    $this.i11_1 = new_0.i11_1;
    $this.j11_1 = new_0.j11_1;
    $this.k11_1 = new_0.k11_1;
    $this.l11_1 = new_0.l11_1;
  }
  function growStash_0($this) {
    $this.i11_1 = imul($this.i11_1, 2);
    $this.j11_1 = copyOf_0($this.j11_1, $this.t10());
    $this.k11_1 = copyOf_0($this.k11_1, $this.t10());
  }
  function _getKeyIndex_0($this, key) {
    if (key === 0)
      return $this.f11_1 ? 2147483647 : -1;
    var index1 = hash1_0($this, key);
    if ($this.j11_1[index1] === key)
      return index1;
    var index2 = hash2_0($this, key);
    if ($this.j11_1[index2] === key)
      return index2;
    var index3 = hash3_0($this, key);
    if ($this.j11_1[index3] === key)
      return index3;
    var inductionVariable = _get_stashStart__3psegu_0($this);
    var last = $this.j11_1.length;
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if ($this.j11_1[n] === key)
          return n;
      }
       while (inductionVariable < last);
    return -1;
  }
  function setEmptySlot_0($this, index, key, value) {
    if (!($this.j11_1[index] === 0))
      throw IllegalStateException_init_$Create$_0();
    $this.j11_1[index] = key;
    $this.k11_1[index] = value;
    $this.m11_1 = $this.m11_1 + 1 | 0;
    return 0;
  }
  function hash1_0($this, key) {
    return _hash1(key, $this.h11_1);
  }
  function hash2_0($this, key) {
    return _hash2(key, $this.h11_1);
  }
  function hash3_0($this, key) {
    return _hash3(key, $this.h11_1);
  }
  function IntIntMap(nbits, loadFactor, dummy) {
    this.c11_1 = nbits;
    this.d11_1 = loadFactor;
    this.e11_1 = 1 << this.c11_1;
    this.f11_1 = false;
    this.g11_1 = 0;
    this.h11_1 = this.e11_1 - 1 | 0;
    this.i11_1 = 1 + imul(this.c11_1, this.c11_1) | 0;
    this.j11_1 = new Int32Array(this.t10());
    this.k11_1 = new Int32Array(this.t10());
    this.l11_1 = numberToInt(this.e11_1 * this.d11_1);
    this.m11_1 = 0;
  }
  protoOf(IntIntMap).toString = function () {
    return toString(this.o11());
  };
  protoOf(IntIntMap).t10 = function () {
    return this.e11_1 + this.i11_1 | 0;
  };
  protoOf(IntIntMap).p11 = function (out) {
    // Inline function 'korlibs.datastructure.IntIntMap.fastForEach' call
    // Inline function 'korlibs.datastructure.IntIntMap.fastKeyForEach' call
    var index = this.f11_1 ? 2147483647 : this.y10(this.j11_1, 0);
    while (!(index === 2147483646)) {
      // Inline function 'korlibs.datastructure.IntIntMap.fastForEach.<anonymous>' call
      var it;
      switch (index) {
        case 2147483647:
        case 2147483646:
          it = 0;
          break;
        default:
          it = this.j11_1[index];
          break;
      }
      // Inline function 'korlibs.datastructure.IntIntMap.toMap.<anonymous>' call
      var key = it;
      // Inline function 'kotlin.collections.set' call
      var value = this.b1(it);
      out.x1(key, value);
      index = this.y10(this.j11_1, index === 2147483647 ? 0 : index + 1 | 0);
    }
    return out;
  };
  protoOf(IntIntMap).o11 = function (out, $super) {
    out = out === VOID ? linkedHashMapOf([]) : out;
    return $super === VOID ? this.p11(out) : $super.p11.call(this, out);
  };
  protoOf(IntIntMap).b1 = function (key) {
    var index = _getKeyIndex_0(this, key);
    if (index < 0)
      return 0;
    if (index === 2147483647)
      return this.g11_1;
    return this.k11_1[index];
  };
  protoOf(IntIntMap).n11 = function (key, value) {
    retry: while (true) {
      var index = _getKeyIndex_0(this, key);
      if (index < 0) {
        if (key === 0) {
          this.f11_1 = true;
          this.g11_1 = value;
          this.m11_1 = this.m11_1 + 1 | 0;
          return 0;
        }
        if (this.m11_1 >= this.l11_1) {
          grow_0(this);
        }
        var index1 = hash1_0(this, key);
        if (this.j11_1[index1] === 0)
          return setEmptySlot_0(this, index1, key, value);
        var index2 = hash2_0(this, key);
        if (this.j11_1[index2] === 0)
          return setEmptySlot_0(this, index2, key, value);
        var index3 = hash3_0(this, key);
        if (this.j11_1[index3] === 0)
          return setEmptySlot_0(this, index3, key, value);
        var inductionVariable = _get_stashStart__3psegu_0(this);
        var last = this.j11_1.length;
        if (inductionVariable < last)
          do {
            var n = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (this.j11_1[n] === 0)
              return setEmptySlot_0(this, n, key, value);
          }
           while (inductionVariable < last);
        if (this.i11_1 > 512) {
          grow_0(this);
        } else {
          growStash_0(this);
        }
        continue retry;
      } else if (index === 2147483647) {
        // Inline function 'kotlin.apply' call
        var this_0 = this.g11_1;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'korlibs.datastructure.IntIntMap.set.<anonymous>' call
        this.g11_1 = value;
        return this_0;
      } else {
        // Inline function 'kotlin.apply' call
        var this_1 = this.k11_1[index];
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'korlibs.datastructure.IntIntMap.set.<anonymous>' call
        this.k11_1[index] = value;
        return this_1;
      }
    }
  };
  protoOf(IntIntMap).y10 = function (keys, offset) {
    var inductionVariable = offset;
    var last = keys.length;
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(keys[n] === 0))
          return n;
      }
       while (inductionVariable < last);
    return 2147483646;
  };
  protoOf(IntIntMap).equals = function (other) {
    if (!(other instanceof IntIntMap))
      return false;
    // Inline function 'korlibs.datastructure.IntIntMap.fastForEach' call
    // Inline function 'korlibs.datastructure.IntIntMap.fastKeyForEach' call
    var index = this.f11_1 ? 2147483647 : this.y10(this.j11_1, 0);
    while (!(index === 2147483646)) {
      // Inline function 'korlibs.datastructure.IntIntMap.fastForEach.<anonymous>' call
      var it;
      switch (index) {
        case 2147483647:
        case 2147483646:
          it = 0;
          break;
        default:
          it = this.j11_1[index];
          break;
      }
      // Inline function 'korlibs.datastructure.IntIntMap.equals.<anonymous>' call
      var key = it;
      var value = this.b1(it);
      if (!(other.b1(key) === value))
        return false;
      index = this.y10(this.j11_1, index === 2147483647 ? 0 : index + 1 | 0);
    }
    return true;
  };
  protoOf(IntIntMap).hashCode = function () {
    var out = 0;
    // Inline function 'korlibs.datastructure.IntIntMap.fastForEach' call
    // Inline function 'korlibs.datastructure.IntIntMap.fastKeyForEach' call
    var index = this.f11_1 ? 2147483647 : this.y10(this.j11_1, 0);
    while (!(index === 2147483646)) {
      // Inline function 'korlibs.datastructure.IntIntMap.fastForEach.<anonymous>' call
      var it;
      switch (index) {
        case 2147483647:
        case 2147483646:
          it = 0;
          break;
        default:
          it = this.j11_1[index];
          break;
      }
      // Inline function 'korlibs.datastructure.IntIntMap.hashCode.<anonymous>' call
      out = out + (it + this.b1(it) | 0) | 0;
      index = this.y10(this.j11_1, index === 2147483647 ? 0 : index + 1 | 0);
    }
    return out;
  };
  function toIntMap(_this__u8e3s4) {
    var out = IntMap_init_$Create$(numberToInt(_this__u8e3s4.l() * 1.25));
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.e2().s();
    while (tmp0_iterator.t()) {
      var tmp1_loop_parameter = tmp0_iterator.u();
      // Inline function 'kotlin.collections.component1' call
      var k = tmp1_loop_parameter.l3();
      // Inline function 'kotlin.collections.component2' call
      var v = tmp1_loop_parameter.p3();
      out.s10(k, v);
    }
    return out;
  }
  function _hash1(key, mask) {
    return _mask(key, mask);
  }
  function _hash2(key, mask) {
    return _mask(imul(key, 1294968109), mask);
  }
  function _hash3(key, mask) {
    return _mask(imul(key, 294969449), mask);
  }
  function _mask(value, mask) {
    return (((value + ((value >>> 8 | 0) & 255) | 0) + ((value >>> 16 | 0) & 255) | 0) + (value >> 24 & 255) | 0) & mask;
  }
  function Iterator_0(hasNext, next) {
    return new Iterator$1(hasNext, next);
  }
  function Iterator$1($hasNext, $next) {
    this.q11_1 = $hasNext;
    this.r11_1 = $next;
  }
  protoOf(Iterator$1).t = function () {
    return this.q11_1();
  };
  protoOf(Iterator$1).u = function () {
    return this.r11_1();
  };
  function ConcurrentPool$_init_$lambda_gqhtk8(it) {
    return Unit_instance;
  }
  function ConcurrentPool(reset, preallocate, gen) {
    var tmp;
    if (reset === VOID) {
      tmp = ConcurrentPool$_init_$lambda_gqhtk8;
    } else {
      tmp = reset;
    }
    reset = tmp;
    preallocate = preallocate === VOID ? 0 : preallocate;
    Pool.call(this, reset, preallocate, gen);
    this.w11_1 = reset;
    this.x11_1 = gen;
    this.y11_1 = new NonRecursiveLock();
  }
  protoOf(ConcurrentPool).z11 = function () {
    // Inline function 'korlibs.datastructure.lock.NonRecursiveLock.invoke' call
    this.y11_1;
    // Inline function 'korlibs.datastructure.ConcurrentPool.alloc.<anonymous>' call
    return protoOf(Pool).z11.call(this);
  };
  protoOf(ConcurrentPool).n2 = function () {
    // Inline function 'korlibs.datastructure.lock.NonRecursiveLock.invoke' call
    this.y11_1;
    protoOf(Pool).n2.call(this);
  };
  protoOf(ConcurrentPool).e12 = function (element) {
    // Inline function 'korlibs.datastructure.lock.NonRecursiveLock.invoke' call
    this.y11_1;
    protoOf(Pool).e12.call(this, element);
  };
  function Companion_5() {
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function Pool_init_$Init$(preallocate, gen, $this) {
    preallocate = preallocate === VOID ? 0 : preallocate;
    Pool.call($this, Pool$_init_$lambda_q3cbhr_0, preallocate, gen);
    return $this;
  }
  function Pool_init_$Create$(preallocate, gen) {
    return Pool_init_$Init$(preallocate, gen, objectCreate(protoOf(Pool)));
  }
  function Pool$_init_$lambda_q3cbhr(it) {
    return Unit_instance;
  }
  function Pool$_init_$lambda_q3cbhr_0(it) {
    return Unit_instance;
  }
  function Pool(reset, preallocate, gen) {
    var tmp;
    if (reset === VOID) {
      tmp = Pool$_init_$lambda_q3cbhr;
    } else {
      tmp = reset;
    }
    reset = tmp;
    preallocate = preallocate === VOID ? 0 : preallocate;
    this.a12_1 = reset;
    this.b12_1 = gen;
    this.c12_1 = _TGenStack___init__impl__yynjgt();
    this.d12_1 = 0;
    var inductionVariable = 0;
    if (inductionVariable < preallocate)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp2 = this.d12_1;
        this.d12_1 = tmp2 + 1 | 0;
        TGenStack__push_impl_9yh33t(this.c12_1, this.b12_1(tmp2));
      }
       while (inductionVariable < preallocate);
  }
  protoOf(Pool).f12 = function () {
    return _TGenStack___get_size__impl__cvg66t(this.c12_1);
  };
  protoOf(Pool).z11 = function () {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!(new TGenStack(this.c12_1)).x()) {
      tmp = TGenStack__pop_impl_qisxa0(this.c12_1);
    } else {
      var tmp1 = this.d12_1;
      this.d12_1 = tmp1 + 1 | 0;
      tmp = this.b12_1(tmp1);
    }
    return tmp;
  };
  protoOf(Pool).n2 = function () {
    TGenStack__clear_impl_pali4s(this.c12_1);
    this.d12_1 = 0;
  };
  protoOf(Pool).e12 = function (element) {
    this.a12_1(element);
    TGenStack__push_impl_9yh33t(this.c12_1, element);
  };
  protoOf(Pool).h12 = function (element) {
    if (element == null)
      return Unit_instance;
    this.e12(element);
  };
  protoOf(Pool).g12 = function (elements) {
    var tmp0_iterator = elements.s();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.u();
      this.e12(element);
    }
  };
  protoOf(Pool).hashCode = function () {
    return TGenStack__hashCode_impl_l04zom(this.c12_1);
  };
  protoOf(Pool).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof Pool) {
      tmp_0 = equals(this.c12_1, other.c12_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.f12() === other.f12();
    } else {
      tmp = false;
    }
    return tmp;
  };
  function ReturnablePool$_init_$lambda_rsm60r(it) {
    return Unit_instance;
  }
  function ReturnablePool$list$lambda(this$0) {
    return function (it) {
      this$0.i12_1(it);
      return Unit_instance;
    };
  }
  function ReturnablePool$list$lambda_0(this$0) {
    return function (it) {
      return this$0.j12_1(it);
    };
  }
  function ReturnablePool(_reset, gen) {
    var tmp;
    if (_reset === VOID) {
      tmp = ReturnablePool$_init_$lambda_rsm60r;
    } else {
      tmp = _reset;
    }
    _reset = tmp;
    this.i12_1 = _reset;
    this.j12_1 = gen;
    this.k12_1 = fastArrayListOf([]);
    var tmp_0 = this;
    var tmp_1 = ReturnablePool$list$lambda(this);
    tmp_0.l12_1 = new Pool(tmp_1, VOID, ReturnablePool$list$lambda_0(this));
    this.m12_1 = this.l12_1.z11();
  }
  protoOf(ReturnablePool).u = function () {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.k12_1;
    var element = this.m12_1;
    this_0.p(element);
    this.m12_1 = this.l12_1.z11();
    return this.m12_1;
  };
  protoOf(ReturnablePool).n12 = function () {
    // Inline function 'korlibs.datastructure.FastArrayList.fastForEach' call
    // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var array = this.k12_1.rz_1;
    var n = 0;
    while (n < array.length) {
      // Inline function 'korlibs.datastructure.ReturnablePool.reset.<anonymous>' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'korlibs.js.get' call
      var tmp0 = n;
      n = tmp0 + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      var it = array[tmp0];
      this.l12_1.e12(it);
    }
    this.k12_1.n2();
  };
  function sam$kotlin_Comparator$0(function_0) {
    this.o12_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).g9 = function (a, b) {
    return this.o12_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.g9(a, b);
  };
  function Companion_6() {
  }
  protoOf(Companion_6).p12 = function (comparator, reversed_0) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp = fillArrayVal(Array(16), null);
    return new TGenPriorityQueue(isArray(tmp) ? tmp : THROW_CCE(), reversed_0 ? reversed(comparator) : comparator);
  };
  protoOf(Companion_6).q12 = function (reversed, comparator) {
    return Companion_instance_6.p12(new sam$kotlin_Comparator$0(comparator), reversed);
  };
  protoOf(Companion_6).r12 = function (reversed, comparator, $super) {
    reversed = reversed === VOID ? false : reversed;
    return $super === VOID ? this.q12(reversed, comparator) : $super.q12.call(this, reversed, comparator);
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function _set_value__lx0xdg(_this__u8e3s4, $this, value) {
    $this.s12_1[_PriorityQueueNode___get_index__impl__b6r7i5(_this__u8e3s4)] = value;
  }
  function _get_value__a43j40(_this__u8e3s4, $this) {
    return $this.s12_1[_PriorityQueueNode___get_index__impl__b6r7i5(_this__u8e3s4)];
  }
  function _get_isRoot__1006zj(_this__u8e3s4, $this) {
    return _PriorityQueueNode___get_index__impl__b6r7i5(_this__u8e3s4) === 0;
  }
  function _get_parent__oo9xup(_this__u8e3s4, $this) {
    return _PriorityQueueNode___init__impl__34dlfu((_PriorityQueueNode___get_index__impl__b6r7i5(_this__u8e3s4) - 1 | 0) / 2 | 0);
  }
  function _get_left__d9qyp0(_this__u8e3s4, $this) {
    return _PriorityQueueNode___init__impl__34dlfu(imul(2, _PriorityQueueNode___get_index__impl__b6r7i5(_this__u8e3s4)) + 1 | 0);
  }
  function _get_right__bvz45n(_this__u8e3s4, $this) {
    return _PriorityQueueNode___init__impl__34dlfu(imul(2, _PriorityQueueNode___get_index__impl__b6r7i5(_this__u8e3s4)) + 2 | 0);
  }
  function gt($this, a, b) {
    return $this.t12_1.compare(a, b) > 0;
  }
  function lt($this, a, b) {
    return $this.t12_1.compare(a, b) < 0;
  }
  function _get_capacity__a9k9f3_1($this) {
    return $this.s12_1.length;
  }
  function ensure_0($this, index) {
    if (index >= _get_capacity__a9k9f3_1($this)) {
      var tmp = $this;
      var tmp_0 = copyOf_1($this.s12_1, 2 + imul(_get_capacity__a9k9f3_1($this), 2) | 0);
      tmp.s12_1 = isArray(tmp_0) ? tmp_0 : THROW_CCE();
    }
  }
  function minHeapify($this, index) {
    var i = _PriorityQueueNode___init__impl__34dlfu(index);
    $l$loop: while (true) {
      var left = _get_left__d9qyp0(i, $this);
      var right = _get_right__bvz45n(i, $this);
      var smallest = i;
      if (_PriorityQueueNode___get_index__impl__b6r7i5(left) < $this.u12_1 ? lt($this, _get_value__a43j40(left, $this), _get_value__a43j40(i, $this)) : false)
        smallest = left;
      if (_PriorityQueueNode___get_index__impl__b6r7i5(right) < $this.u12_1 ? lt($this, _get_value__a43j40(right, $this), _get_value__a43j40(smallest, $this)) : false)
        smallest = right;
      if (!(smallest === i)) {
        swap_0($this, i, smallest);
        i = smallest;
      } else {
        break $l$loop;
      }
    }
  }
  function swap_0($this, l, r) {
    var temp = _get_value__a43j40(r, $this);
    _set_value__lx0xdg(r, $this, _get_value__a43j40(l, $this));
    _set_value__lx0xdg(l, $this, temp);
  }
  function TGenPriorityQueue$iterator$1($index, this$0) {
    this.v12_1 = $index;
    this.w12_1 = this$0;
  }
  protoOf(TGenPriorityQueue$iterator$1).t = function () {
    return this.v12_1._v < this.w12_1.u12_1;
  };
  protoOf(TGenPriorityQueue$iterator$1).u = function () {
    var tmp0 = this.v12_1._v;
    this.v12_1._v = tmp0 + 1 | 0;
    return _get_value__a43j40(_PriorityQueueNode___init__impl__34dlfu(tmp0), this.w12_1);
  };
  protoOf(TGenPriorityQueue$iterator$1).sq = function () {
    throw new NotImplementedError();
  };
  protoOf(TGenPriorityQueue$iterator$1).c1 = function () {
    return this.sq();
  };
  function TGenPriorityQueue(data, comparator) {
    this.s12_1 = data;
    this.t12_1 = comparator;
    this.u12_1 = 0;
  }
  protoOf(TGenPriorityQueue).l = function () {
    return this.u12_1;
  };
  protoOf(TGenPriorityQueue).x12 = function () {
    if (this.u12_1 <= 0)
      throw IndexOutOfBoundsException_init_$Create$();
    return this.s12_1[0];
  };
  protoOf(TGenPriorityQueue).zy = function (element) {
    this.u12_1 = this.u12_1 + 1 | 0;
    ensure_0(this, this.u12_1);
    var i = _PriorityQueueNode___init__impl__34dlfu(this.u12_1 - 1 | 0);
    _set_value__lx0xdg(i, this, element);
    while (!_get_isRoot__1006zj(i, this) ? gt(this, _get_value__a43j40(_get_parent__oo9xup(i, this), this), _get_value__a43j40(i, this)) : false) {
      swap_0(this, i, _get_parent__oo9xup(i, this));
      i = _get_parent__oo9xup(i, this);
    }
    return true;
  };
  protoOf(TGenPriorityQueue).p = function (element) {
    return this.zy((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(TGenPriorityQueue).y12 = function () {
    if (this.u12_1 <= 0)
      throw IndexOutOfBoundsException_init_$Create$();
    if (this.u12_1 === 1) {
      this.u12_1 = this.u12_1 - 1 | 0;
      return _get_value__a43j40(_PriorityQueueNode___init__impl__34dlfu(0), this);
    }
    var root = _get_value__a43j40(_PriorityQueueNode___init__impl__34dlfu(0), this);
    _set_value__lx0xdg(_PriorityQueueNode___init__impl__34dlfu(0), this, _get_value__a43j40(_PriorityQueueNode___init__impl__34dlfu(this.u12_1 - 1 | 0), this));
    this.u12_1 = this.u12_1 - 1 | 0;
    minHeapify(this, 0);
    return root;
  };
  protoOf(TGenPriorityQueue).z12 = function (element) {
    var inductionVariable = 0;
    var last = this.u12_1;
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.s12_1[n], element))
          return n;
      }
       while (inductionVariable < last);
    return -1;
  };
  protoOf(TGenPriorityQueue).a13 = function (element) {
    var index = this.z12(element);
    if (index >= 0) {
      this.b13(index);
    }
    return index >= 0;
  };
  protoOf(TGenPriorityQueue).b13 = function (index) {
    var i = _PriorityQueueNode___init__impl__34dlfu(index);
    while (!(_PriorityQueueNode___get_index__impl__b6r7i5(i) === 0)) {
      swap_0(this, i, _get_parent__oo9xup(i, this));
      i = _get_parent__oo9xup(i, this);
    }
    this.y12();
  };
  protoOf(TGenPriorityQueue).az = function (elements) {
    var thisSet = toSet(this);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.x();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.s();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.u();
        // Inline function 'korlibs.datastructure.TGenPriorityQueue.containsAll.<anonymous>' call
        if (!thisSet.v(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(TGenPriorityQueue).w = function (elements) {
    return this.az(elements);
  };
  protoOf(TGenPriorityQueue).x = function () {
    return this.u12_1 === 0;
  };
  protoOf(TGenPriorityQueue).vy = function (elements) {
    var tmp0_iterator = elements.s();
    while (tmp0_iterator.t()) {
      var e = tmp0_iterator.u();
      this.zy(e);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !elements.x();
  };
  protoOf(TGenPriorityQueue).q = function (elements) {
    return this.vy(elements);
  };
  protoOf(TGenPriorityQueue).s = function () {
    var index = {_v: 0};
    return new TGenPriorityQueue$iterator$1(index, this);
  };
  protoOf(TGenPriorityQueue).toString = function () {
    return toString(toList(this));
  };
  protoOf(TGenPriorityQueue).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof TGenPriorityQueue) {
      tmp_0 = contentEquals_0(this.s12_1, other.s12_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.t12_1, other.t12_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TGenPriorityQueue).hashCode = function () {
    return contentHashCode_0(this.s12_1);
  };
  function _PriorityQueueNode___init__impl__34dlfu(index) {
    return index;
  }
  function _PriorityQueueNode___get_index__impl__b6r7i5($this) {
    return $this;
  }
  function TGenQueue() {
    this.c13_1 = TGenDeque_init_$Create$();
  }
  protoOf(TGenQueue).l = function () {
    return this.c13_1.l();
  };
  protoOf(TGenQueue).x = function () {
    return this.l() === 0;
  };
  protoOf(TGenQueue).d13 = function (v) {
    this.c13_1.ty(v);
  };
  protoOf(TGenQueue).e13 = function () {
    return this.c13_1.ae();
  };
  protoOf(TGenQueue).az = function (elements) {
    return this.c13_1.az(elements);
  };
  protoOf(TGenQueue).w = function (elements) {
    return this.az(elements);
  };
  protoOf(TGenQueue).s = function () {
    return this.c13_1.s();
  };
  protoOf(TGenQueue).hashCode = function () {
    return this.c13_1.hashCode();
  };
  protoOf(TGenQueue).equals = function (other) {
    var tmp;
    if (other instanceof TGenQueue) {
      tmp = this.c13_1.equals(other.c13_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  function Ref(value) {
    // Inline function 'kotlin.also' call
    var this_0 = Ref_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.datastructure.Ref.<anonymous>' call
    this_0.f13(value);
    return this_0;
  }
  function toRef(_this__u8e3s4) {
    return Ref_1(_this__u8e3s4);
  }
  function Ref_0() {
    return new Ref$2();
  }
  function Ref_1(prop) {
    return new Ref$3(prop);
  }
  function Ref$2() {
  }
  protoOf(Ref$2).f13 = function (_set____db54di) {
    this.g13_1 = _set____db54di;
  };
  protoOf(Ref$2).p3 = function () {
    var tmp = this.g13_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('value');
    }
  };
  function Ref$3($prop) {
    this.h13_1 = $prop;
  }
  protoOf(Ref$3).f13 = function (value) {
    this.h13_1.set(value);
  };
  protoOf(Ref$3).p3 = function () {
    return this.h13_1.get();
  };
  function _TGenStack___init__impl__yynjgt(items) {
    items = items === VOID ? FastArrayList_init_$Create$() : items;
    return items;
  }
  function _get_items__fzd5gv($this) {
    return $this;
  }
  function _TGenStack___get_size__impl__cvg66t($this) {
    return _get_items__fzd5gv($this).l();
  }
  function TGenStack__isEmpty_impl_bsbpyi($this) {
    return _TGenStack___get_size__impl__cvg66t($this) === 0;
  }
  function Companion_7() {
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function TGenStack__push_impl_9yh33t($this, v) {
    _get_items__fzd5gv($this).p(v);
  }
  function TGenStack__pop_impl_qisxa0($this) {
    return _get_items__fzd5gv($this).e1(_get_items__fzd5gv($this).l() - 1 | 0);
  }
  function TGenStack__clear_impl_pali4s($this) {
    _get_items__fzd5gv($this).n2();
  }
  function TGenStack__containsAll_impl_ic9i7r($this, elements) {
    return _get_items__fzd5gv($this).w(elements);
  }
  function TGenStack__containsAll_impl_ic9i7r_0($this, elements) {
    return TGenStack__containsAll_impl_ic9i7r($this.i13_1, elements);
  }
  function TGenStack__iterator_impl_2pdia5($this) {
    return _get_items__fzd5gv($this).s();
  }
  function TGenStack__toString_impl_s9t5hn($this) {
    return 'TGenStack(items=' + $this + ')';
  }
  function TGenStack__hashCode_impl_l04zom($this) {
    return $this.hashCode();
  }
  function TGenStack__equals_impl_w9i35u($this, other) {
    if (!(other instanceof TGenStack))
      return false;
    var tmp0_other_with_cast = other instanceof TGenStack ? other.i13_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TGenStack(items) {
    this.i13_1 = items;
  }
  protoOf(TGenStack).l = function () {
    return _TGenStack___get_size__impl__cvg66t(this.i13_1);
  };
  protoOf(TGenStack).x = function () {
    return TGenStack__isEmpty_impl_bsbpyi(this.i13_1);
  };
  protoOf(TGenStack).az = function (elements) {
    return TGenStack__containsAll_impl_ic9i7r(this.i13_1, elements);
  };
  protoOf(TGenStack).w = function (elements) {
    return TGenStack__containsAll_impl_ic9i7r_0(this, elements);
  };
  protoOf(TGenStack).s = function () {
    return TGenStack__iterator_impl_2pdia5(this.i13_1);
  };
  protoOf(TGenStack).toString = function () {
    return TGenStack__toString_impl_s9t5hn(this.i13_1);
  };
  protoOf(TGenStack).hashCode = function () {
    return TGenStack__hashCode_impl_l04zom(this.i13_1);
  };
  protoOf(TGenStack).equals = function (other) {
    return TGenStack__equals_impl_w9i35u(this.i13_1, other);
  };
  function TimedTask(eventLoop, now, time, interval, callback) {
    this.j13_1 = eventLoop;
    this.k13_1 = now;
    this.l13_1 = time;
    this.m13_1 = interval;
    this.n13_1 = callback;
  }
  protoOf(TimedTask).o13 = function (value) {
    this.k13_1 = Duration__minus_impl_q5cfm7(value, this.l13_1);
  };
  protoOf(TimedTask).p13 = function () {
    return Duration__plus_impl_yu9v8f(this.k13_1, this.l13_1);
  };
  protoOf(TimedTask).q13 = function (other) {
    return Duration__compareTo_impl_pchp0f(this.p13(), other.p13());
  };
  protoOf(TimedTask).d = function (other) {
    return this.q13(other instanceof TimedTask ? other : THROW_CCE());
  };
  protoOf(TimedTask).r13 = function () {
    this.m13_1 = false;
    this.j13_1.c14_1.a13(this);
  };
  function _get_now__e6dlkr($this) {
    return $this.a14_1().eh_1;
  }
  function _queueAfter($this, time, interval, task) {
    // Inline function 'korlibs.datastructure.lock.NonRecursiveLock.invoke' call
    $this.x13_1;
    // Inline function 'korlibs.datastructure.event.SyncEventLoop._queueAfter.<anonymous>' call
    var task_0 = new TimedTask($this, _get_now__e6dlkr($this), time, interval, task);
    if ($this.y13_1) {
      $this.c14_1.zy(task_0);
    } else {
      Console_getInstance().f14(['WARNING: QUEUED TASK time=' + new Duration(time) + ' interval=' + interval + ' without running']);
    }
    $this.x13_1.g14();
    return task_0;
  }
  function SyncEventLoop$nowProvider$lambda(this$0) {
    return function () {
      return new Duration(ValueTimeMark__elapsedNow_impl_eonqvs(this$0.z13_1));
    };
  }
  function SyncEventLoop$timedTasks$lambda(a, b) {
    return a.q13(b);
  }
  function SyncEventLoop$uncatchedExceptionHandler$lambda(it) {
    printStackTrace(it);
    return Unit_instance;
  }
  function SyncEventLoop(precise, immediateRun) {
    precise = precise === VOID ? false : precise;
    immediateRun = immediateRun === VOID ? false : immediateRun;
    BaseEventLoop.call(this);
    this.t13_1 = precise;
    this.u13_1 = immediateRun;
    this.v13_1 = new SyncPauseable();
    this.w13_1 = paused$factory(this.v13_1);
    this.x13_1 = new NonRecursiveLock();
    this.y13_1 = true;
    this.z13_1 = Monotonic_instance.v9();
    var tmp = this;
    tmp.a14_1 = SyncEventLoop$nowProvider$lambda(this);
    this.b14_1 = ArrayDeque_init_$Create$();
    var tmp_0 = this;
    var tmp_1 = Companion_instance_6;
    tmp_0.c14_1 = tmp_1.r12(VOID, SyncEventLoop$timedTasks$lambda);
    var tmp_2 = this;
    tmp_2.d14_1 = SyncEventLoop$uncatchedExceptionHandler$lambda;
    this.e14_1 = null;
  }
  protoOf(SyncEventLoop).h14 = function (task) {
    // Inline function 'korlibs.datastructure.lock.NonRecursiveLock.invoke' call
    this.x13_1;
    this.b14_1.zd(task);
    this.x13_1.g14();
  };
  protoOf(SyncEventLoop).i14 = function (time, task) {
    return _queueAfter(this, time, false, task);
  };
  protoOf(SyncEventLoop).r13 = function () {
    var oldImmediateRun = this.u13_1;
    try {
      this.u13_1 = true;
      this.j14();
      this.y13_1 = false;
    }finally {
      this.u13_1 = oldImmediateRun;
    }
  };
  protoOf(SyncEventLoop).k14 = function (task) {
    if (this.u13_1)
      return true;
    return Duration__compareTo_impl_pchp0f(_get_now__e6dlkr(this), this.c14_1.x12().p13()) >= 0;
  };
  protoOf(SyncEventLoop).l14 = function (runTimers) {
    var count = 0;
    while (this.m14(runTimers)) {
      count = count + 1 | 0;
    }
    return count;
  };
  protoOf(SyncEventLoop).j14 = function (runTimers, $super) {
    runTimers = runTimers === VOID ? true : runTimers;
    return $super === VOID ? this.l14(runTimers) : $super.l14.call(this, runTimers);
  };
  protoOf(SyncEventLoop).m14 = function (runTimers) {
    // Inline function 'korlibs.datastructure.lock.NonRecursiveLock.invoke' call
    this.x13_1;
    // Inline function 'korlibs.datastructure.event.SyncEventLoop.runAvailableNextTask.<anonymous>' call
    var tmp;
    if (runTimers) {
      var tmp_0;
      var tmp_1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.c14_1.x()) {
        tmp_1 = this.k14(this.c14_1.x12());
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = this.c14_1.y12();
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    } else {
      tmp = null;
    }
    var timedTask = tmp;
    if (!(timedTask == null)) {
      // Inline function 'korlibs.datastructure.event.SyncEventLoop.runCatchingExceptions' call
      try {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        timedTask.n13_1();
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          this.d14_1(e);
        } else {
          throw $p;
        }
      }
      if (timedTask.m13_1 ? !this.u13_1 : false) {
        timedTask.o13(maxOf(new Duration(Duration__plus_impl_yu9v8f(timedTask.p13(), timedTask.l13_1)), new Duration(_get_now__e6dlkr(this))).eh_1);
        this.c14_1.zy(timedTask);
      }
    }
    // Inline function 'korlibs.datastructure.lock.NonRecursiveLock.invoke' call
    this.x13_1;
    // Inline function 'korlibs.datastructure.event.SyncEventLoop.runAvailableNextTask.<anonymous>' call
    var tmp_2;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.b14_1.x()) {
      tmp_2 = this.b14_1.ae();
    } else {
      tmp_2 = null;
    }
    var task = tmp_2;
    // Inline function 'korlibs.datastructure.event.SyncEventLoop.runCatchingExceptions' call
    try {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      if (task == null)
        null;
      else
        task();
    } catch ($p) {
      if ($p instanceof Error) {
        var e_0 = $p;
        this.d14_1(e_0);
      } else {
        throw $p;
      }
    }
    return !(task == null) ? true : !(timedTask == null);
  };
  function BaseEventLoop() {
    this.n14_1 = new Lock();
  }
  function paused$factory($b0) {
    return getPropertyCallableRef('paused', 0, KMutableProperty0, function () {
      return $b0.p14_1;
    }, function (value) {
      return $b0.q14(value);
    });
  }
  function contentHashCode_3(_this__u8e3s4, src, dst) {
    // Inline function 'korlibs.datastructure.internal.hashCoder' call
    var count = dst - src | 0;
    var out = 0;
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        out = imul(out, 7);
        var tmp = out;
        // Inline function 'korlibs.datastructure.internal.contentHashCode.<anonymous>' call
        out = tmp + numberToInt(_this__u8e3s4[src + n | 0]) | 0;
      }
       while (inductionVariable < count);
    return out;
  }
  function contentEquals_3(_this__u8e3s4, that, src, dst) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'korlibs.datastructure.internal.equaler' call
      var count = dst - src | 0;
      var inductionVariable = 0;
      if (inductionVariable < count)
        do {
          var n = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'korlibs.datastructure.internal.contentEquals.<anonymous>' call
          if (!(_this__u8e3s4[src + n | 0] === that[src + n | 0])) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable < count);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function contentHashCode_4(_this__u8e3s4, src, dst) {
    // Inline function 'korlibs.datastructure.internal.hashCoder' call
    var count = dst - src | 0;
    var out = 0;
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        out = imul(out, 7);
        var tmp = out;
        // Inline function 'korlibs.datastructure.internal.contentHashCode.<anonymous>' call
        out = tmp + _this__u8e3s4[src + n | 0] | 0;
      }
       while (inductionVariable < count);
    return out;
  }
  function contentEquals_4(_this__u8e3s4, that, src, dst) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'korlibs.datastructure.internal.equaler' call
      var count = dst - src | 0;
      var inductionVariable = 0;
      if (inductionVariable < count)
        do {
          var n = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'korlibs.datastructure.internal.contentEquals.<anonymous>' call
          if (!(_this__u8e3s4[src + n | 0] === that[src + n | 0])) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable < count);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function BaseLock() {
  }
  function SyncPauseable() {
    this.o14_1 = new Lock();
    this.p14_1 = false;
  }
  protoOf(SyncPauseable).q14 = function (value) {
    if (!(this.p14_1 === value)) {
      this.p14_1 = value;
      $l$block: {
        // Inline function 'korlibs.datastructure.lock.Lock.invoke' call
        var this_0 = this.o14_1;
        this_0.s14_1 = true;
        try {
          this.o14_1.g14();
          break $l$block;
        }finally {
          this_0.s14_1 = false;
        }
      }
    }
  };
  function Extra$PropertyThis$transform$lambda($this$null, it) {
    return it;
  }
  function Mixin(extra) {
    extra = extra === VOID ? null : extra;
    this.t14_1 = extra;
  }
  protoOf(Mixin).u14 = function (_set____db54di) {
    this.t14_1 = _set____db54di;
  };
  protoOf(Mixin).v14 = function () {
    return this.t14_1;
  };
  function Property(name, defaultGen) {
    name = name === VOID ? null : name;
    this.w14_1 = name;
    this.x14_1 = defaultGen;
  }
  function PropertyThis(name, defaultGen) {
    name = name === VOID ? null : name;
    this.y14_1 = name;
    this.z14_1 = defaultGen;
    var tmp = this;
    tmp.a15_1 = Extra$PropertyThis$transform$lambda;
  }
  function ExtraObject() {
    this.b15_1 = new Lock();
    this.c15_1 = FastStringMap();
    var tmp = this;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'korlibs.datastructure.lock.Lock.invoke' call
      var this_0 = this.b15_1;
      this_0.s14_1 = true;
      try {
        // Inline function 'korlibs.datastructure.ExtraObject.values.<anonymous>' call
        tmp$ret$1 = toMutableList(get_values(this.c15_1));
        break $l$block;
      }finally {
        this_0.s14_1 = false;
      }
    }
    tmp.d15_1 = tmp$ret$1;
  }
  protoOf(ExtraObject).l = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'korlibs.datastructure.lock.Lock.invoke' call
      var this_0 = this.b15_1;
      this_0.s14_1 = true;
      try {
        // Inline function 'korlibs.datastructure.ExtraObject.<get-size>.<anonymous>' call
        tmp$ret$1 = get_size_1(this.c15_1);
        break $l$block;
      }finally {
        this_0.s14_1 = false;
      }
    }
    return tmp$ret$1;
  };
  protoOf(ExtraObject).e2 = function () {
    var tmp$ret$6;
    $l$block: {
      // Inline function 'korlibs.datastructure.lock.Lock.invoke' call
      var this_0 = this.b15_1;
      this_0.s14_1 = true;
      try {
        // Inline function 'korlibs.datastructure.ExtraObject.<get-entries>.<anonymous>' call
        // Inline function 'kotlin.collections.associateWith' call
        var this_1 = get_keys(this.c15_1);
        var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_1, 10)), 16));
        // Inline function 'kotlin.collections.associateWithTo' call
        var tmp0_iterator = this_1.s();
        while (tmp0_iterator.t()) {
          var element = tmp0_iterator.u();
          // Inline function 'korlibs.datastructure.ExtraObject.<get-entries>.<anonymous>.<anonymous>' call
          // Inline function 'korlibs.datastructure.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$2 = this.c15_1.get(element);
          result.x1(element, tmp$ret$2);
        }
        tmp$ret$6 = toMutableSet(toMutableMap(result).e2());
        break $l$block;
      }finally {
        this_0.s14_1 = false;
      }
    }
    return tmp$ret$6;
  };
  protoOf(ExtraObject).v1 = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'korlibs.datastructure.lock.Lock.invoke' call
      var this_0 = this.b15_1;
      this_0.s14_1 = true;
      try {
        // Inline function 'korlibs.datastructure.ExtraObject.<get-keys>.<anonymous>' call
        tmp$ret$1 = toMutableSet(get_keys(this.c15_1));
        break $l$block;
      }finally {
        this_0.s14_1 = false;
      }
    }
    return tmp$ret$1;
  };
  protoOf(ExtraObject).e15 = function (key) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'korlibs.datastructure.lock.Lock.invoke' call
      var this_0 = this.b15_1;
      this_0.s14_1 = true;
      try {
        // Inline function 'korlibs.datastructure.ExtraObject.get.<anonymous>' call
        // Inline function 'korlibs.datastructure.get' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = this.c15_1.get(key);
        break $l$block;
      }finally {
        this_0.s14_1 = false;
      }
    }
    return tmp$ret$3;
  };
  protoOf(ExtraObject).d2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.e15((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(ExtraObject).f15 = function (key, value) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'korlibs.datastructure.lock.Lock.invoke' call
      var this_0 = this.b15_1;
      this_0.s14_1 = true;
      try {
        // Inline function 'korlibs.datastructure.set' call
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = this.c15_1.set(key, value);
        break $l$block;
      }finally {
        this_0.s14_1 = false;
      }
    }
    return tmp$ret$3;
  };
  protoOf(ExtraObject).g15 = function (key) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'korlibs.datastructure.lock.Lock.invoke' call
      var this_0 = this.b15_1;
      this_0.s14_1 = true;
      try {
        // Inline function 'korlibs.datastructure.ExtraObject.contains.<anonymous>' call
        // Inline function 'korlibs.datastructure.contains' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = this.c15_1.has(key);
        break $l$block;
      }finally {
        this_0.s14_1 = false;
      }
    }
    return tmp$ret$3;
  };
  protoOf(ExtraObject).x = function () {
    return this.l() === 0;
  };
  protoOf(ExtraObject).n2 = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'korlibs.datastructure.lock.Lock.invoke' call
      var this_0 = this.b15_1;
      this_0.s14_1 = true;
      try {
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = this.c15_1.clear();
        break $l$block;
      }finally {
        this_0.s14_1 = false;
      }
    }
    return tmp$ret$1;
  };
  protoOf(ExtraObject).h15 = function (key, value) {
    $l$block: {
      // Inline function 'korlibs.datastructure.lock.Lock.invoke' call
      var this_0 = this.b15_1;
      this_0.s14_1 = true;
      try {
        // Inline function 'korlibs.datastructure.set' call
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.js.asDynamic' call
        this.c15_1.set(key, value);
        break $l$block;
      }finally {
        this_0.s14_1 = false;
      }
    }
    return Unit_instance;
  };
  protoOf(ExtraObject).x1 = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.h15(tmp, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(ExtraObject).i15 = function (key) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'korlibs.datastructure.lock.Lock.invoke' call
      var this_0 = this.b15_1;
      this_0.s14_1 = true;
      try {
        // Inline function 'korlibs.datastructure.ExtraObject.containsKey.<anonymous>' call
        // Inline function 'korlibs.datastructure.contains' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = this.c15_1.has(key);
        break $l$block;
      }finally {
        this_0.s14_1 = false;
      }
    }
    return tmp$ret$3;
  };
  protoOf(ExtraObject).a2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.i15((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  function hasExtra(_this__u8e3s4, name) {
    var tmp0_safe_receiver = _this__u8e3s4.v14();
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g15(name)) === true;
  }
  function setExtra(_this__u8e3s4, name, value) {
    if (_this__u8e3s4.v14() == null) {
      if (value == null)
        return Unit_instance;
      _this__u8e3s4.u14(ExtraTypeCreate());
    }
    var tmp0_safe_receiver = _this__u8e3s4.v14();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.f15(name, value);
    }
  }
  function getExtraTyped(_this__u8e3s4, name) {
    // Inline function 'korlibs.datastructure.fastCastTo' call
    var tmp0_safe_receiver = _this__u8e3s4.v14();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e15(name);
  }
  function ExtraTypeCreate() {
    return new ExtraObject();
  }
  function getExtra(_this__u8e3s4, name) {
    var tmp0_safe_receiver = _this__u8e3s4.v14();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e15(name);
  }
  function _BSearchResult___init__impl__em6zam(raw) {
    return raw;
  }
  function _BSearchResult___get_raw__impl__uyuhf3($this) {
    return $this;
  }
  function _BSearchResult___get_found__impl__om04iz($this) {
    return _BSearchResult___get_raw__impl__uyuhf3($this) >= 0;
  }
  function toLinkedMap(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.datastructure.toLinkedMap.<anonymous>' call
    var tmp0_iterator = _this__u8e3s4.s();
    while (tmp0_iterator.t()) {
      var tmp1_loop_parameter = tmp0_iterator.u();
      var key = tmp1_loop_parameter.re();
      var value = tmp1_loop_parameter.se();
      // Inline function 'kotlin.collections.set' call
      this_0.x1(key, value);
    }
    return this_0;
  }
  function linkedHashMapOf(pairs) {
    // Inline function 'kotlin.also' call
    var this_0 = LinkedHashMap_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.datastructure.linkedHashMapOf.<anonymous>' call
    var inductionVariable = 0;
    var last = pairs.length;
    while (inductionVariable < last) {
      var tmp1_loop_parameter = pairs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = tmp1_loop_parameter.re();
      var value = tmp1_loop_parameter.se();
      // Inline function 'kotlin.collections.set' call
      this_0.x1(key, value);
    }
    return this_0;
  }
  function genericSort(subject, left, right, ops) {
    return genericSort_0(subject, left, right, ops, false);
  }
  function SortOps() {
  }
  protoOf(SortOps).my = function (subject, indexL, indexR) {
    var inductionVariable = indexR;
    var last = indexL + 1 | 0;
    if (last <= inductionVariable)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        this.ly(subject, n - 1 | 0, n);
      }
       while (!(n === last));
  };
  function genericSort_0(subject, left, right, ops, reversed) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.datastructure.genericSort.<anonymous>' call
    timSort(subject, left, right, ops, reversed);
    return subject;
  }
  function timSort(arr, l, r, ops, reversed, RUN) {
    RUN = RUN === VOID ? 32 : RUN;
    var n = (r - l | 0) + 1 | 0;
    var progression = step(until(0, n), RUN);
    var inductionVariable = progression.la_1;
    var last = progression.ma_1;
    var step_0 = progression.na_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        var tmp = l + i | 0;
        // Inline function 'kotlin.math.min' call
        var a = (i + RUN | 0) - 1 | 0;
        var b = n - 1 | 0;
        var tmp$ret$0 = Math.min(a, b);
        insertionSort(arr, tmp, l + tmp$ret$0 | 0, ops, reversed);
      }
       while (!(i === last));
    var size = RUN;
    while (size < n) {
      var progression_0 = step(until(0, n), imul(2, size));
      var inductionVariable_0 = progression_0.la_1;
      var last_0 = progression_0.ma_1;
      var step_1 = progression_0.na_1;
      if ((step_1 > 0 ? inductionVariable_0 <= last_0 : false) ? true : step_1 < 0 ? last_0 <= inductionVariable_0 : false)
        do {
          var left = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + step_1 | 0;
          // Inline function 'kotlin.math.min' call
          var a_0 = size;
          var b_0 = (n - left | 0) - 1 | 0;
          var rize = Math.min(a_0, b_0);
          var mid = (left + rize | 0) - 1 | 0;
          // Inline function 'kotlin.math.min' call
          var a_1 = (left + imul(2, rize) | 0) - 1 | 0;
          var b_1 = n - 1 | 0;
          var right = Math.min(a_1, b_1);
          merge(arr, l + left | 0, l + mid | 0, l + right | 0, ops, reversed);
        }
         while (!(left === last_0));
      size = imul(size, 2);
    }
  }
  function insertionSort(arr, left, right, ops, reversed) {
    var inductionVariable = left + 1 | 0;
    if (inductionVariable <= right)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var m = n - 1 | 0;
        $l$loop: while (m >= left && negateIf(ops.jy(arr, m, n), reversed) > 0) {
          m = m - 1 | 0;
        }
        m = m + 1 | 0;
        if (!(m === n)) {
          ops.my(arr, m, n);
        }
      }
       while (!(n === right));
  }
  function merge(arr, start, mid, end, ops, reversed) {
    var s = start;
    var m = mid;
    var s2 = m + 1 | 0;
    if (negateIf(ops.jy(arr, m, s2), reversed) <= 0)
      return Unit_instance;
    while (s <= m ? s2 <= end : false) {
      if (negateIf(ops.jy(arr, s, s2), reversed) <= 0) {
        s = s + 1 | 0;
      } else {
        ops.my(arr, s, s2);
        s = s + 1 | 0;
        m = m + 1 | 0;
        s2 = s2 + 1 | 0;
      }
    }
  }
  function negateIf(_this__u8e3s4, doNegate) {
    return doNegate ? -_this__u8e3s4 | 0 : _this__u8e3s4;
  }
  function Companion_8() {
  }
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function RequestContext(initialClazz) {
    this.j15_1 = initialClazz;
  }
  protoOf(RequestContext).toString = function () {
    return 'RequestContext(initialClazz=' + this.j15_1 + ')';
  };
  protoOf(RequestContext).hashCode = function () {
    return this.j15_1.hashCode();
  };
  protoOf(RequestContext).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RequestContext))
      return false;
    var tmp0_other_with_cast = other instanceof RequestContext ? other : THROW_CCE();
    if (!this.j15_1.equals(tmp0_other_with_cast.j15_1))
      return false;
    return true;
  };
  function NotMappedException(clazz, requestedByClass, ctx, msg) {
    msg = msg === VOID ? 'Not mapped ' + clazz + ' requested by ' + requestedByClass + ' in ' + ctx : msg;
    RuntimeException_init_$Init$(msg, this);
    captureStack(this, NotMappedException);
    this.k15_1 = clazz;
    this.l15_1 = requestedByClass;
    this.m15_1 = ctx;
    this.n15_1 = msg;
  }
  function Injector(parent, level) {
    parent = parent === VOID ? null : parent;
    level = level === VOID ? 0 : level;
    this.o15_1 = parent;
    this.p15_1 = level;
    this.q15_1 = null;
    this.r15_1 = LinkedHashMap_init_$Create$_0();
    var tmp = this;
    var tmp0_safe_receiver = this.o15_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s15_1;
    tmp.s15_1 = tmp1_elvis_lhs == null ? this : tmp1_elvis_lhs;
    this.u15(getKClass(Injector), this);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_0.t15_1 = ArrayList_init_$Create$_0();
  }
  protoOf(Injector).v15 = function () {
    var tmp1_elvis_lhs = this.q15_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = this.o15_1;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q15_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Injector).w15 = function () {
    return new Injector(this, this.p15_1 + 1 | 0);
  };
  protoOf(Injector).u15 = function (clazz, instance) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.inject.Injector.mapInstance.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.r15_1;
    var value = new InstanceObjectProvider(instance);
    this_0.x1(clazz, value);
    return this;
  };
  protoOf(Injector).x15 = function (clazz, gen) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.inject.Injector.mapSingleton.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.r15_1;
    var value = new SingletonObjectProvider(gen);
    this_0.x1(clazz, value);
    return this;
  };
  protoOf(Injector).y15 = function (clazz, gen) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.inject.Injector.mapPrototype.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.r15_1;
    var value = new PrototypeObjectProvider(gen);
    this_0.x1(clazz, value);
    return this;
  };
  protoOf(Injector).z15 = function (clazz, ctx) {
    var tmp1_elvis_lhs = this.r15_1.d2(clazz);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = this.o15_1;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z15(clazz, ctx);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp4_elvis_lhs = tmp;
    var tmp_0;
    if (tmp4_elvis_lhs == null) {
      var tmp2_safe_receiver = this.v15();
      var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver(clazz, ctx);
      var tmp_1;
      if (tmp3_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'korlibs.inject.Injector.getProviderOrNull.<anonymous>' call
        // Inline function 'kotlin.collections.set' call
        this.r15_1.x1(clazz, tmp3_safe_receiver);
        tmp_1 = tmp3_safe_receiver;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp4_elvis_lhs;
    }
    var tmp_2 = tmp_0;
    return (tmp_2 == null ? true : isInterface(tmp_2, ObjectProvider)) ? tmp_2 : null;
  };
  protoOf(Injector).a16 = function (clazz, ctx) {
    var tmp0_elvis_lhs = this.z15(clazz, ctx);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new NotMappedException(clazz, ctx.j15_1, ctx, "Class '" + clazz + "' doesn't have constructors " + ctx);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Injector).b16 = function (clazz, ctx) {
    return this.a16(clazz, ctx).c16(this);
  };
  protoOf(Injector).d16 = function (clazz, ctx, $super) {
    ctx = ctx === VOID ? new RequestContext(clazz) : ctx;
    return $super === VOID ? this.b16(clazz, ctx) : $super.b16.call(this, clazz, ctx);
  };
  protoOf(Injector).toString = function () {
    return 'Injector(level=' + this.p15_1 + ')';
  };
  protoOf(Injector).e16 = function (instance) {
    if (!(instance == null) ? isInterface(instance, InjectorDependency) : false) {
      instance.f16(this);
    }
    if (!(instance == null) ? isInterface(instance, InjectorDestructor) : false) {
      this.t15_1.p(instance);
    }
    return instance;
  };
  protoOf(Injector).g16 = function () {
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.r15_1.e2().s();
    while (tmp0_iterator.t()) {
      var pair = tmp0_iterator.u();
      pair.p3().g16();
    }
    var tmp1_iterator = this.t15_1.s();
    while (tmp1_iterator.t()) {
      var deinit = tmp1_iterator.u();
      deinit.g16();
    }
    this.t15_1.n2();
  };
  function InjectorDependency() {
  }
  function ObjectProvider() {
  }
  function InstanceObjectProvider(instance) {
    this.h16_1 = instance;
  }
  protoOf(InstanceObjectProvider).c16 = function (injector) {
    return this.h16_1;
  };
  protoOf(InstanceObjectProvider).g16 = function () {
    var tmp = this.h16_1;
    var tmp0_safe_receiver = (tmp == null ? true : isInterface(tmp, InjectorDestructor)) ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g16();
    }
  };
  protoOf(InstanceObjectProvider).toString = function () {
    return 'InstanceObjectProvider(' + this.h16_1 + ')';
  };
  function SingletonObjectProvider(generator) {
    this.i16_1 = generator;
    this.j16_1 = null;
  }
  protoOf(SingletonObjectProvider).c16 = function (injector) {
    if (this.j16_1 == null)
      this.j16_1 = injector.e16(this.i16_1(injector));
    return ensureNotNull(this.j16_1);
  };
  protoOf(SingletonObjectProvider).g16 = function () {
    var tmp = this.j16_1;
    var tmp0_safe_receiver = (tmp == null ? true : isInterface(tmp, InjectorDestructor)) ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g16();
    }
  };
  protoOf(SingletonObjectProvider).toString = function () {
    return 'SingletonObjectProvider(' + this.j16_1 + ')';
  };
  function PrototypeObjectProvider(generator) {
    this.k16_1 = generator;
  }
  protoOf(PrototypeObjectProvider).c16 = function (injector) {
    return injector.e16(this.k16_1(injector));
  };
  protoOf(PrototypeObjectProvider).g16 = function () {
    return Unit_instance;
  };
  protoOf(PrototypeObjectProvider).toString = function () {
    return 'PrototypeObjectProvider()';
  };
  function InjectorDestructor() {
  }
  function Companion_9() {
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function InjectorContext(injector) {
    this.l16_1 = injector;
  }
  protoOf(InjectorContext).l3 = function () {
    return Companion_instance_9;
  };
  function injector($completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp0_safe_receiver = $completion.b6().ic(Companion_instance_9);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l16_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var message = 'Injector not in the context, please call withInjector function';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  var Color_BLACK_instance;
  var Color_RED_instance;
  var Color_GREEN_instance;
  var Color_YELLOW_instance;
  var Color_BLUE_instance;
  var Color_PURPLE_instance;
  var Color_CYAN_instance;
  var Color_WHITE_instance;
  var Color_entriesInitialized;
  function Color_initEntries() {
    if (Color_entriesInitialized)
      return Unit_instance;
    Color_entriesInitialized = true;
    Color_BLACK_instance = new Color('BLACK', 0, 0);
    Color_RED_instance = new Color('RED', 1, 1);
    Color_GREEN_instance = new Color('GREEN', 2, 2);
    Color_YELLOW_instance = new Color('YELLOW', 3, 3);
    Color_BLUE_instance = new Color('BLUE', 4, 4);
    Color_PURPLE_instance = new Color('PURPLE', 5, 5);
    Color_CYAN_instance = new Color('CYAN', 6, 6);
    Color_WHITE_instance = new Color('WHITE', 7, 7);
  }
  function Color(name, ordinal, index) {
    Enum.call(this, name, ordinal);
    this.o16_1 = index;
  }
  function Color_RED_getInstance() {
    Color_initEntries();
    return Color_RED_instance;
  }
  function Color_GREEN_getInstance() {
    Color_initEntries();
    return Color_GREEN_instance;
  }
  function Color_YELLOW_getInstance() {
    Color_initEntries();
    return Color_YELLOW_instance;
  }
  function Color_BLUE_getInstance() {
    Color_initEntries();
    return Color_BLUE_instance;
  }
  function Color_CYAN_getInstance() {
    Color_initEntries();
    return Color_CYAN_instance;
  }
  function AnsiEscape() {
  }
  var baseConsoleHook;
  var Kind_ERROR_instance;
  var Kind_WARN_instance;
  var Kind_INFO_instance;
  var Kind_DEBUG_instance;
  var Kind_TRACE_instance;
  var Kind_LOG_instance;
  var Kind_entriesInitialized;
  function Kind_initEntries() {
    if (Kind_entriesInitialized)
      return Unit_instance;
    Kind_entriesInitialized = true;
    Kind_ERROR_instance = new Kind('ERROR', 0, 0, Color_RED_getInstance());
    Kind_WARN_instance = new Kind('WARN', 1, 1, Color_YELLOW_getInstance());
    Kind_INFO_instance = new Kind('INFO', 2, 2, Color_BLUE_getInstance());
    Kind_DEBUG_instance = new Kind('DEBUG', 3, 3, Color_CYAN_getInstance());
    Kind_TRACE_instance = new Kind('TRACE', 4, 4, Color_GREEN_getInstance());
    Kind_LOG_instance = new Kind('LOG', 5, 5, null);
  }
  function Kind(name, ordinal, level, color) {
    Enum.call(this, name, ordinal);
    this.w16_1 = level;
    this.x16_1 = color;
  }
  function BaseConsole$logInternal$ref($boundThis) {
    var l = function (p0, p1) {
      $boundThis.y16(p0, p1);
      return Unit_instance;
    };
    l.callableName = 'logInternal';
    return l;
  }
  function Kind_ERROR_getInstance() {
    Kind_initEntries();
    return Kind_ERROR_instance;
  }
  function Kind_WARN_getInstance() {
    Kind_initEntries();
    return Kind_WARN_instance;
  }
  function Kind_LOG_getInstance() {
    Kind_initEntries();
    return Kind_LOG_instance;
  }
  function BaseConsole() {
  }
  protoOf(BaseConsole).z16 = function (kind, msg) {
    var hook = baseConsoleHook;
    if (!(hook == null)) {
      hook(kind, msg, BaseConsole$logInternal$ref(this));
    } else {
      this.y16(kind, msg.slice());
    }
  };
  protoOf(BaseConsole).y16 = function (kind, msg) {
    println(this.a17(kind, msg.slice()));
  };
  protoOf(BaseConsole).a17 = function (kind, msg) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.logger.BaseConsole.logToString.<anonymous>' call
    var color = kind.x16_1;
    if (!(color == null)) {
      this.t16(this_0, color);
    }
    joinTo(msg, this_0, ', ');
    if (!(color == null)) {
      this.r16(this_0);
    }
    return this_0.toString();
  };
  protoOf(BaseConsole).b17 = function (msg) {
    return this.z16(Kind_LOG_getInstance(), msg.slice());
  };
  protoOf(BaseConsole).f14 = function (msg) {
    return this.z16(Kind_WARN_getInstance(), msg.slice());
  };
  protoOf(BaseConsole).c17 = function (msg) {
    return this.z16(Kind_ERROR_getInstance(), msg.slice());
  };
  var _miniEnvironmentVariablesUC;
  function normalizeName($this, name) {
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return replace(replace(name, _Char___init__impl__6a9atx(46), _Char___init__impl__6a9atx(95)), _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(95)).toUpperCase();
  }
  var Level_NONE_instance;
  var Level_FATAL_instance;
  var Level_ERROR_instance;
  var Level_WARN_instance;
  var Level_INFO_instance;
  var Level_DEBUG_instance;
  var Level_TRACE_instance;
  function Companion_10() {
    Companion_instance_10 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = values_0();
    var capacity = coerceAtLeast(mapCapacity(this_0.length), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var element = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'korlibs.logger.Companion.BY_NAME.<anonymous>' call
      var tmp$ret$0 = element.p9_1;
      destination.x1(tmp$ret$0, element);
    }
    tmp.d17_1 = destination;
  }
  protoOf(Companion_10).e15 = function (name) {
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = name.toUpperCase();
    var tmp0_elvis_lhs = this.d17_1.d2(tmp$ret$1);
    return tmp0_elvis_lhs == null ? Level_NONE_getInstance() : tmp0_elvis_lhs;
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    Level_initEntries();
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function values_0() {
    return [Level_NONE_getInstance(), Level_FATAL_getInstance(), Level_ERROR_getInstance(), Level_WARN_getInstance(), Level_INFO_getInstance(), Level_DEBUG_getInstance(), Level_TRACE_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'NONE':
        return Level_NONE_getInstance();
      case 'FATAL':
        return Level_FATAL_getInstance();
      case 'ERROR':
        return Level_ERROR_getInstance();
      case 'WARN':
        return Level_WARN_getInstance();
      case 'INFO':
        return Level_INFO_getInstance();
      case 'DEBUG':
        return Level_DEBUG_getInstance();
      case 'TRACE':
        return Level_TRACE_getInstance();
      default:
        Level_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Level_entriesInitialized;
  function Level_initEntries() {
    if (Level_entriesInitialized)
      return Unit_instance;
    Level_entriesInitialized = true;
    Level_NONE_instance = new Level('NONE', 0, 0);
    Level_FATAL_instance = new Level('FATAL', 1, 1);
    Level_ERROR_instance = new Level('ERROR', 2, 2);
    Level_WARN_instance = new Level('WARN', 3, 3);
    Level_INFO_instance = new Level('INFO', 4, 4);
    Level_DEBUG_instance = new Level('DEBUG', 5, 5);
    Level_TRACE_instance = new Level('TRACE', 6, 6);
    Companion_getInstance_10();
  }
  function Companion_11() {
    Companion_instance_11 = this;
    this.e17_1 = new Lock();
    this.f17_1 = HashMap_init_$Create$();
    this.g17_1 = null;
    this.h17_1 = DefaultLogOutput_instance;
  }
  protoOf(Companion_11).i17 = function (name) {
    // Inline function 'korlibs.datastructure.lock.Lock.invoke' call
    var this_0 = this.e17_1;
    this_0.s14_1 = true;
    try {
      var normalizedName = normalizeName(Companion_getInstance_11(), name);
      if (Companion_getInstance_11().f17_1.d2(normalizedName) == null) {
        var logger = new Logger(name, normalizedName, true);
        var tmp0_safe_receiver = get_miniEnvironmentVariablesUC().d2('LOG_' + normalizedName);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'korlibs.logger.Companion.invoke.<anonymous>.<anonymous>' call
          logger.p17(Companion_getInstance_10().e15(tmp0_safe_receiver));
        }
        if (Companion_getInstance_11().f17_1.x()) {
          var tmp1_safe_receiver = get_miniEnvironmentVariablesUC().d2('LOG_LEVEL');
          if (tmp1_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.also' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'korlibs.logger.Companion.invoke.<anonymous>.<anonymous>' call
            Companion_getInstance_11().g17_1 = Companion_getInstance_10().e15(tmp1_safe_receiver);
          }
        }
        // Inline function 'kotlin.collections.set' call
        Companion_getInstance_11().f17_1.x1(normalizedName, logger);
      }
      return ensureNotNull(Companion_getInstance_11().f17_1.d2(normalizedName));
    }finally {
      this_0.s14_1 = false;
    }
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function Level(name, ordinal, index) {
    Enum.call(this, name, ordinal);
    this.s17_1 = index;
  }
  function ConsoleLogOutput() {
  }
  protoOf(ConsoleLogOutput).t17 = function (logger, level, msg) {
    switch (level.q9_1) {
      case 2:
        Console_getInstance().c17([logger.j17_1, msg]);
        break;
      case 3:
        Console_getInstance().f14([logger.j17_1, msg]);
        break;
      default:
        Console_getInstance().b17([logger.j17_1, msg]);
        break;
    }
  };
  var ConsoleLogOutput_instance;
  function ConsoleLogOutput_getInstance() {
    return ConsoleLogOutput_instance;
  }
  function Level_NONE_getInstance() {
    Level_initEntries();
    return Level_NONE_instance;
  }
  function Level_FATAL_getInstance() {
    Level_initEntries();
    return Level_FATAL_instance;
  }
  function Level_ERROR_getInstance() {
    Level_initEntries();
    return Level_ERROR_instance;
  }
  function Level_WARN_getInstance() {
    Level_initEntries();
    return Level_WARN_instance;
  }
  function Level_INFO_getInstance() {
    Level_initEntries();
    return Level_INFO_instance;
  }
  function Level_DEBUG_getInstance() {
    Level_initEntries();
    return Level_DEBUG_instance;
  }
  function Level_TRACE_getInstance() {
    Level_initEntries();
    return Level_TRACE_instance;
  }
  function Logger(name, normalizedName, dummy) {
    Companion_getInstance_11();
    this.j17_1 = name;
    this.k17_1 = normalizedName;
    this.l17_1 = dummy;
    this.m17_1 = null;
    this.n17_1 = null;
    this.o17_1 = null;
  }
  protoOf(Logger).p17 = function (value) {
    this.n17_1 = value;
  };
  protoOf(Logger).u17 = function () {
    var tmp0_elvis_lhs = this.n17_1;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? Companion_getInstance_11().g17_1 : tmp0_elvis_lhs;
    return tmp1_elvis_lhs == null ? Level_WARN_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(Logger).v17 = function () {
    var tmp0_elvis_lhs = this.o17_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_11().h17_1 : tmp0_elvis_lhs;
  };
  protoOf(Logger).w17 = function (level) {
    return level.s17_1 <= this.u17().s17_1;
  };
  protoOf(Logger).x17 = function (level, msg) {
    this.v17().t17(this, level, msg);
  };
  function get_miniEnvironmentVariablesUC() {
    if (_miniEnvironmentVariablesUC == null) {
      // Inline function 'kotlin.collections.mapKeys' call
      var this_0 = get_miniEnvironmentVariables();
      // Inline function 'kotlin.collections.mapKeysTo' call
      var destination = LinkedHashMap_init_$Create$(mapCapacity(this_0.l()));
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_iterator = this_0.e2().s();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.u();
        // Inline function 'korlibs.logger.<get-miniEnvironmentVariablesUC>.<anonymous>' call
        // Inline function 'kotlin.text.uppercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = element.l3().toUpperCase();
        // Inline function 'kotlin.collections.mapKeysTo.<anonymous>' call
        var tmp$ret$3 = element.p3();
        destination.x1(tmp, tmp$ret$3);
      }
      _miniEnvironmentVariablesUC = destination;
    }
    return ensureNotNull(_miniEnvironmentVariablesUC);
  }
  var MINUS_ZERO_D;
  var MINUS_ZERO_F;
  function roundDecimalPlaces(_this__u8e3s4, places) {
    if (places < 0)
      return _this__u8e3s4;
    // Inline function 'kotlin.math.pow' call
    var placesFactor = Math.pow(10.0, places);
    return round(_this__u8e3s4 * placesFactor) / placesFactor;
  }
  function isAlmostEquals(_this__u8e3s4, other, epsilon) {
    epsilon = epsilon === VOID ? 1.0E-6 : epsilon;
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = _this__u8e3s4 - other;
    return Math.abs(this_0) < epsilon;
  }
  function isAlmostZero(_this__u8e3s4) {
    // Inline function 'kotlin.math.abs' call
    return Math.abs(_this__u8e3s4) <= 1.0E-19;
  }
  function convertRange(_this__u8e3s4, srcMin, srcMax, dstMin, dstMax) {
    return dstMin + (dstMax - dstMin) * ((_this__u8e3s4 - srcMin) / (srcMax - srcMin));
  }
  function normalizeZero(_this__u8e3s4) {
    return _this__u8e3s4 === MINUS_ZERO_D ? 0.0 : _this__u8e3s4;
  }
  function toIntRound(_this__u8e3s4) {
    return numberToInt(round(_this__u8e3s4));
  }
  function clamp(_this__u8e3s4, min, max) {
    return _this__u8e3s4 < min ? min : _this__u8e3s4 > max ? max : _this__u8e3s4;
  }
  function min(a, b, c, d) {
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.min' call
    var a_0 = Math.min(a, b);
    var a_1 = Math.min(a_0, c);
    return Math.min(a_1, d);
  }
  function max(a, b, c, d) {
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.max' call
    var a_0 = Math.max(a, b);
    var a_1 = Math.max(a_0, c);
    return Math.max(a_1, d);
  }
  function toIntCeil(_this__u8e3s4) {
    // Inline function 'kotlin.math.ceil' call
    var tmp$ret$0 = Math.ceil(_this__u8e3s4);
    return numberToInt(tmp$ret$0);
  }
  function clamp01(_this__u8e3s4) {
    return clamp(_this__u8e3s4, 0.0, 1.0);
  }
  function umod(_this__u8e3s4, other) {
    var rm = _this__u8e3s4 % other;
    var remainder = rm === -0.0 ? 0.0 : rm;
    return remainder < 0.0 ? remainder + other : remainder;
  }
  function roundDecimalPlaces_0(_this__u8e3s4, places) {
    if (places < 0)
      return _this__u8e3s4;
    // Inline function 'kotlin.math.pow' call
    var placesFactor = Math.pow(10.0, places);
    // Inline function 'kotlin.math.round' call
    var x = _this__u8e3s4 * placesFactor;
    return round(x) / placesFactor;
  }
  function isAlmostEquals_0(_this__u8e3s4, other, epsilon) {
    epsilon = epsilon === VOID ? 1.0E-5 : epsilon;
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = _this__u8e3s4 - other;
    return Math.abs(this_0) < epsilon;
  }
  function umod_0(_this__u8e3s4, other) {
    var rm = _this__u8e3s4 % other | 0;
    var remainder = rm === 0 ? 0 : rm;
    return remainder < 0 ? remainder + other | 0 : remainder;
  }
  function clamp_0(_this__u8e3s4, min, max) {
    return _this__u8e3s4 < min ? min : _this__u8e3s4 > max ? max : _this__u8e3s4;
  }
  function toIntCeil_0(_this__u8e3s4) {
    // Inline function 'kotlin.math.ceil' call
    var tmp$ret$0 = Math.ceil(_this__u8e3s4);
    return numberToInt(tmp$ret$0);
  }
  function ilog2(v) {
    var tmp;
    if (v === 0) {
      tmp = -1;
    } else {
      // Inline function 'korlibs.memory.countLeadingZeros' call
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp = 31 - clz32(v) | 0;
    }
    return tmp;
  }
  function clampUByte(_this__u8e3s4) {
    var n = _this__u8e3s4 & (-(_this__u8e3s4 >= 0 ? 1 : 0) | 0);
    return (n | (255 - n | 0) >> 31) & 255;
  }
  function clamp01_0(_this__u8e3s4) {
    return clamp_2(_this__u8e3s4, 0.0, 1.0);
  }
  function toIntRound_0(_this__u8e3s4) {
    // Inline function 'kotlin.math.round' call
    var tmp$ret$0 = round(_this__u8e3s4);
    return numberToInt(tmp$ret$0);
  }
  function get_nextPowerOfTwo(_this__u8e3s4) {
    var v = _this__u8e3s4;
    v = v - 1 | 0;
    v = v | v >> 1;
    v = v | v >> 2;
    v = v | v >> 4;
    v = v | v >> 8;
    v = v | v >> 16;
    v = v + 1 | 0;
    return v;
  }
  function toIntClamp(_this__u8e3s4, min, max) {
    min = min === VOID ? IntCompanionObject_instance.MIN_VALUE : min;
    max = max === VOID ? IntCompanionObject_instance.MAX_VALUE : max;
    if (_this__u8e3s4.g6(toLong(min)) < 0)
      return min;
    if (_this__u8e3s4.g6(toLong(max)) > 0)
      return max;
    return _this__u8e3s4.qa();
  }
  function clamp_1(_this__u8e3s4, min, max) {
    return _this__u8e3s4.g6(min) < 0 ? min : _this__u8e3s4.g6(max) > 0 ? max : _this__u8e3s4;
  }
  function nextAlignedTo(_this__u8e3s4, align) {
    return isAlignedTo(_this__u8e3s4, align) ? _this__u8e3s4 : imul((_this__u8e3s4 / align | 0) + 1 | 0, align);
  }
  function isNanOrInfinite(_this__u8e3s4) {
    return isNaN_0(_this__u8e3s4) ? true : isInfinite(_this__u8e3s4);
  }
  function clamp_2(_this__u8e3s4, min, max) {
    return _this__u8e3s4 < min ? min : _this__u8e3s4 > max ? max : _this__u8e3s4;
  }
  function toShortClamped(_this__u8e3s4) {
    return toShort(clamp_0(_this__u8e3s4, ShortCompanionObject_instance.MIN_VALUE, ShortCompanionObject_instance.MAX_VALUE));
  }
  function nextMultipleOf(_this__u8e3s4, multiple) {
    return isMultipleOf(_this__u8e3s4, multiple) ? _this__u8e3s4 : imul((_this__u8e3s4 / multiple | 0) + 1 | 0, multiple);
  }
  function get_isPowerOfTwo(_this__u8e3s4) {
    return get_nextPowerOfTwo(_this__u8e3s4) === _this__u8e3s4;
  }
  function convertRange_0(_this__u8e3s4, srcMin, srcMax, dstMin, dstMax) {
    return numberToInt(dstMin + (dstMax - dstMin | 0) * ((_this__u8e3s4 - srcMin | 0) / (srcMax - srcMin | 0)));
  }
  function get_isEven(_this__u8e3s4) {
    return (_this__u8e3s4 % 2 | 0) === 0;
  }
  function isAlignedTo(_this__u8e3s4, alignment) {
    return alignment === 0 ? true : (_this__u8e3s4 % alignment | 0) === 0;
  }
  function isMultipleOf(_this__u8e3s4, multiple) {
    return multiple === 0 ? true : (_this__u8e3s4 % multiple | 0) === 0;
  }
  function ilog2Ceil(v) {
    // Inline function 'kotlin.math.ceil' call
    // Inline function 'kotlin.math.log2' call
    var x = log2(v);
    var tmp$ret$1 = Math.ceil(x);
    return numberToInt(tmp$ret$1);
  }
  function _Ratio___init__impl__9mwvn2(value) {
    return value;
  }
  function _Ratio___get_value__impl__57cli6($this) {
    return $this;
  }
  function _Ratio___init__impl__9mwvn2_0(ratio) {
    return _Ratio___init__impl__9mwvn2(ratio);
  }
  function Ratio__toFloat_impl_1ftup5($this) {
    return _Ratio___get_value__impl__57cli6($this);
  }
  function Ratio__toDouble_impl_o7epze($this) {
    return _Ratio___get_value__impl__57cli6($this);
  }
  function Ratio__plus_impl_pm43pk($this, that) {
    return _Ratio___init__impl__9mwvn2(_Ratio___get_value__impl__57cli6($this) + _Ratio___get_value__impl__57cli6(that));
  }
  function Ratio__minus_impl_s1uwyg($this, that) {
    return _Ratio___init__impl__9mwvn2(_Ratio___get_value__impl__57cli6($this) - _Ratio___get_value__impl__57cli6(that));
  }
  function Ratio__times_impl_ucdh7y($this, that) {
    return _Ratio___init__impl__9mwvn2(_Ratio___get_value__impl__57cli6($this) * _Ratio___get_value__impl__57cli6(that));
  }
  function Ratio__times_impl_ucdh7y_0($this, that) {
    return _Ratio___get_value__impl__57cli6($this) * that;
  }
  function Ratio__compareTo_impl_z2ienc($this, other) {
    return compareTo(_Ratio___get_value__impl__57cli6($this), _Ratio___get_value__impl__57cli6(other));
  }
  function Ratio__compareTo_impl_z2ienc_0($this, other) {
    return Ratio__compareTo_impl_z2ienc($this.y17_1, other instanceof Ratio ? other.y17_1 : THROW_CCE());
  }
  function Ratio__toString_impl_mfgt3e($this) {
    return '' + _Ratio___get_value__impl__57cli6($this);
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.z17_1 = _Ratio___init__impl__9mwvn2(0.0);
    this.a18_1 = _Ratio___init__impl__9mwvn2(0.25);
    this.b18_1 = _Ratio___init__impl__9mwvn2(0.5);
    this.c18_1 = _Ratio___init__impl__9mwvn2(1.0);
    var tmp = this;
    tmp.d18_1 = _Ratio___init__impl__9mwvn2_0(NaN);
  }
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function Ratio__hashCode_impl_quhc2v($this) {
    return getNumberHashCode($this);
  }
  function Ratio__equals_impl_mfc2gt($this, other) {
    if (!(other instanceof Ratio))
      return false;
    var tmp0_other_with_cast = other instanceof Ratio ? other.y17_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Ratio(value) {
    Companion_getInstance_12();
    this.y17_1 = value;
  }
  protoOf(Ratio).e18 = function (other) {
    return Ratio__compareTo_impl_z2ienc(this.y17_1, other);
  };
  protoOf(Ratio).d = function (other) {
    return Ratio__compareTo_impl_z2ienc_0(this, other);
  };
  protoOf(Ratio).toString = function () {
    return Ratio__toString_impl_mfgt3e(this.y17_1);
  };
  protoOf(Ratio).hashCode = function () {
    return Ratio__hashCode_impl_quhc2v(this.y17_1);
  };
  protoOf(Ratio).equals = function (other) {
    return Ratio__equals_impl_mfc2gt(this.y17_1, other);
  };
  function toRatio(_this__u8e3s4) {
    return _Ratio___init__impl__9mwvn2(_this__u8e3s4);
  }
  function interpolate(_this__u8e3s4, l, r) {
    return new Vector2D(interpolate_1(_this__u8e3s4, l.f18_1, r.f18_1), interpolate_1(_this__u8e3s4, l.g18_1, r.g18_1));
  }
  function interpolate_0(_this__u8e3s4, l, r) {
    return Ratio__plus_impl_pm43pk(l, Ratio__times_impl_ucdh7y(Ratio__minus_impl_s1uwyg(r, l), _this__u8e3s4));
  }
  function interpolate_1(_this__u8e3s4, l, r) {
    return l + (r - l) * Ratio__toDouble_impl_o7epze(_this__u8e3s4);
  }
  function toRatio_0(_this__u8e3s4) {
    return _Ratio___init__impl__9mwvn2_0(_this__u8e3s4);
  }
  function _get__ALL_LIST__dej8hi($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.h18_1;
    _ALL_LIST$factory();
    return this_0.p3();
  }
  function Easing$Companion$_ALL_LIST$delegate$lambda() {
    return toList_0(values_1());
  }
  function Easing$Companion$ALL$delegate$lambda() {
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = _get__ALL_LIST__dej8hi(Companion_getInstance_13());
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator = this_0.s();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.u();
      // Inline function 'korlibs.math.interpolation.Companion.ALL$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = element.p9_1;
      destination.x1(tmp$ret$0, element);
    }
    return destination;
  }
  function Companion_13() {
    Companion_instance_13 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.h18_1 = lazy(tmp_0, Easing$Companion$_ALL_LIST$delegate$lambda);
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_1.i18_1 = lazy(tmp_2, Easing$Companion$ALL$delegate$lambda);
  }
  protoOf(Companion_13).j18 = function () {
    return Easings_EASE_IN_OUT_QUAD_getInstance();
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function Easing() {
  }
  function EasingCubic(x1, y1, x2, y2, name) {
    name = name === VOID ? null : name;
    this.n18_1 = x1;
    this.o18_1 = y1;
    this.p18_1 = x2;
    this.q18_1 = y2;
    this.r18_1 = name;
    this.s18_1 = Bezier_init_$Create$_0(Vector2D_init_$Create$(0.0, 0.0), Vector2D_init_$Create$(clamp_2(this.n18_1, 0.0, 1.0), this.o18_1), Vector2D_init_$Create$(clamp_2(this.p18_1, 0.0, 1.0), this.q18_1), new Vector2D(1.0, 1.0));
  }
  protoOf(EasingCubic).toString = function () {
    var tmp0_elvis_lhs = this.r18_1;
    return tmp0_elvis_lhs == null ? 'cubic-bezier(' + this.n18_1 + ', ' + this.o18_1 + ', ' + this.p18_1 + ', ' + this.q18_1 + ')' : tmp0_elvis_lhs;
  };
  protoOf(EasingCubic).k18 = function (it) {
    var pivotLeft = it < 0.0 ? it * 10.0 : 0.0;
    var pivotRight = it > 1.0 ? it * 10.0 : 1.0;
    var pivot = it;
    var lastX = 0.0;
    var lastY = 0.0;
    var steps = 0;
    var inductionVariable = 0;
    if (inductionVariable < 50)
      $l$loop_0: do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        steps = steps + 1 | 0;
        var res = this.s18_1.e19(toRatio_0(pivot));
        lastX = res.f18_1;
        lastY = res.g18_1;
        // Inline function 'kotlin.math.absoluteValue' call
        var this_0 = lastX - it;
        if (Math.abs(this_0) < 0.001)
          break $l$loop_0;
        if (it < lastX) {
          pivotRight = pivot;
          pivot = (pivotLeft + pivot) * 0.5;
        } else if (it > lastX) {
          pivotLeft = pivot;
          pivot = (pivotRight + pivot) * 0.5;
        } else {
          break $l$loop_0;
        }
      }
       while (inductionVariable < 50);
    return lastY;
  };
  function Easings$SMOOTH() {
    Easings.call(this, 'SMOOTH', 0);
    Easings_SMOOTH_instance = this;
  }
  protoOf(Easings$SMOOTH).k18 = function (it) {
    return it * it * (3 - 2 * it);
  };
  var Easings_SMOOTH_instance;
  function Easings$EASE_IN_ELASTIC() {
    Easings.call(this, 'EASE_IN_ELASTIC', 1);
    Easings_EASE_IN_ELASTIC_instance = this;
  }
  protoOf(Easings$EASE_IN_ELASTIC).k18 = function (it) {
    var tmp;
    switch (it) {
      case 0.0:
      case 1.0:
        tmp = it;
        break;
      default:
        var p = 0.3;
        var s = p / 4.0;
        var inv = it - 1;
        // Inline function 'kotlin.math.pow' call

        var x = 10.0 * inv;
        var tmp_0 = -1.0 * Math.pow(2.0, x);
        // Inline function 'kotlin.math.sin' call

        var x_0 = (inv - s) * (2.0 * get_PI()) / p;
        tmp = tmp_0 * Math.sin(x_0);
        break;
    }
    return tmp;
  };
  var Easings_EASE_IN_ELASTIC_instance;
  function Easings$EASE_OUT_ELASTIC() {
    Easings.call(this, 'EASE_OUT_ELASTIC', 2);
    Easings_EASE_OUT_ELASTIC_instance = this;
  }
  protoOf(Easings$EASE_OUT_ELASTIC).k18 = function (it) {
    var tmp;
    switch (it) {
      case 0.0:
      case 1.0:
        tmp = it;
        break;
      default:
        var p = 0.3;
        var s = p / 4.0;
        // Inline function 'kotlin.math.pow' call

        var x = -10.0 * it;
        var tmp_0 = Math.pow(2.0, x);
        // Inline function 'kotlin.math.sin' call

        var x_0 = (it - s) * (2.0 * get_PI()) / p;
        tmp = tmp_0 * Math.sin(x_0) + 1;
        break;
    }
    return tmp;
  };
  var Easings_EASE_OUT_ELASTIC_instance;
  function Easings$EASE_OUT_BOUNCE() {
    Easings.call(this, 'EASE_OUT_BOUNCE', 3);
    Easings_EASE_OUT_BOUNCE_instance = this;
  }
  protoOf(Easings$EASE_OUT_BOUNCE).k18 = function (it) {
    var s = 7.5625;
    var p = 2.75;
    var tmp;
    if (it < 1.0 / p) {
      // Inline function 'kotlin.math.pow' call
      tmp = s * Math.pow(it, 2.0);
    } else if (it < 2.0 / p) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = it - 1.5 / p;
      tmp = s * Math.pow(this_0, 2.0) + 0.75;
    } else if (it < 2.5 / p) {
      // Inline function 'kotlin.math.pow' call
      var this_1 = it - 2.25 / p;
      tmp = s * Math.pow(this_1, 2.0) + 0.9375;
    } else {
      // Inline function 'kotlin.math.pow' call
      var this_2 = it - 2.625 / p;
      tmp = s * Math.pow(this_2, 2.0) + 0.984375;
    }
    return tmp;
  };
  var Easings_EASE_OUT_BOUNCE_instance;
  function Easings$LINEAR() {
    Easings.call(this, 'LINEAR', 4);
    Easings_LINEAR_instance = this;
  }
  protoOf(Easings$LINEAR).k18 = function (it) {
    return it;
  };
  var Easings_LINEAR_instance;
  function Easings$EASE() {
    Easings.call(this, 'EASE', 5);
    Easings_EASE_instance = this;
    this.r19_1 = new EasingCubic(0.25, 0.1, 0.25, 1.0, 'ease');
  }
  protoOf(Easings$EASE).k18 = function (it) {
    return this.r19_1.k18(it);
  };
  var Easings_EASE_instance;
  function Easings$EASE_IN() {
    Easings.call(this, 'EASE_IN', 6);
    Easings_EASE_IN_instance = this;
    this.u19_1 = new EasingCubic(0.42, 0.0, 1.0, 1.0, 'ease-in');
  }
  protoOf(Easings$EASE_IN).k18 = function (it) {
    return this.u19_1.k18(it);
  };
  var Easings_EASE_IN_instance;
  function Easings$EASE_OUT() {
    Easings.call(this, 'EASE_OUT', 7);
    Easings_EASE_OUT_instance = this;
    this.x19_1 = new EasingCubic(0.0, 0.0, 0.58, 1.0, 'ease-out');
  }
  protoOf(Easings$EASE_OUT).k18 = function (it) {
    return this.x19_1.k18(it);
  };
  var Easings_EASE_OUT_instance;
  function Easings$EASE_IN_OUT() {
    Easings.call(this, 'EASE_IN_OUT', 8);
    Easings_EASE_IN_OUT_instance = this;
    this.a1a_1 = new EasingCubic(0.42, 0.0, 0.58, 1.0, 'ease-in-out');
  }
  protoOf(Easings$EASE_IN_OUT).k18 = function (it) {
    return this.a1a_1.k18(it);
  };
  var Easings_EASE_IN_OUT_instance;
  function Easings$EASE_IN_OLD() {
    Easings.call(this, 'EASE_IN_OLD', 9);
    Easings_EASE_IN_OLD_instance = this;
  }
  protoOf(Easings$EASE_IN_OLD).k18 = function (it) {
    return it * it * it;
  };
  var Easings_EASE_IN_OLD_instance;
  function Easings$EASE_OUT_OLD() {
    Easings.call(this, 'EASE_OUT_OLD', 10);
    Easings_EASE_OUT_OLD_instance = this;
  }
  protoOf(Easings$EASE_OUT_OLD).k18 = function (it) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.math.interpolation.EASE_OUT_OLD.invoke.<anonymous>' call
    var inv = it - 1.0;
    return inv * inv * inv + 1;
  };
  var Easings_EASE_OUT_OLD_instance;
  function Easings$EASE_IN_OUT_OLD() {
    Easings.call(this, 'EASE_IN_OUT_OLD', 11);
    Easings_EASE_IN_OUT_OLD_instance = this;
  }
  protoOf(Easings$EASE_IN_OUT_OLD).k18 = function (it) {
    // Inline function 'korlibs.math.interpolation.combine' call
    var start = Easings_EASE_IN_OLD_getInstance();
    var end = Easings_EASE_OUT_OLD_getInstance();
    return it < 0.5 ? 0.5 * start.k18(it * 2.0) : 0.5 * end.k18((it - 0.5) * 2.0) + 0.5;
  };
  var Easings_EASE_IN_OUT_OLD_instance;
  function Easings$EASE_OUT_IN_OLD() {
    Easings.call(this, 'EASE_OUT_IN_OLD', 12);
    Easings_EASE_OUT_IN_OLD_instance = this;
  }
  protoOf(Easings$EASE_OUT_IN_OLD).k18 = function (it) {
    // Inline function 'korlibs.math.interpolation.combine' call
    var start = Easings_EASE_OUT_OLD_getInstance();
    var end = Easings_EASE_IN_OLD_getInstance();
    return it < 0.5 ? 0.5 * start.k18(it * 2.0) : 0.5 * end.k18((it - 0.5) * 2.0) + 0.5;
  };
  var Easings_EASE_OUT_IN_OLD_instance;
  function Easings$EASE_IN_BACK() {
    Easings.call(this, 'EASE_IN_BACK', 13);
    Easings_EASE_IN_BACK_instance = this;
  }
  protoOf(Easings$EASE_IN_BACK).k18 = function (it) {
    // Inline function 'kotlin.math.pow' call
    return Math.pow(it, 2.0) * (2.70158 * it - 1.70158);
  };
  var Easings_EASE_IN_BACK_instance;
  function Easings$EASE_OUT_BACK() {
    Easings.call(this, 'EASE_OUT_BACK', 14);
    Easings_EASE_OUT_BACK_instance = this;
  }
  protoOf(Easings$EASE_OUT_BACK).k18 = function (it) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.math.interpolation.EASE_OUT_BACK.invoke.<anonymous>' call
    var inv = it - 1.0;
    // Inline function 'kotlin.math.pow' call
    return Math.pow(inv, 2.0) * (2.70158 * inv + 1.70158) + 1.0;
  };
  var Easings_EASE_OUT_BACK_instance;
  function Easings$EASE_IN_OUT_BACK() {
    Easings.call(this, 'EASE_IN_OUT_BACK', 15);
    Easings_EASE_IN_OUT_BACK_instance = this;
  }
  protoOf(Easings$EASE_IN_OUT_BACK).k18 = function (it) {
    // Inline function 'korlibs.math.interpolation.combine' call
    var start = Easings_EASE_IN_BACK_getInstance();
    var end = Easings_EASE_OUT_BACK_getInstance();
    return it < 0.5 ? 0.5 * start.k18(it * 2.0) : 0.5 * end.k18((it - 0.5) * 2.0) + 0.5;
  };
  var Easings_EASE_IN_OUT_BACK_instance;
  function Easings$EASE_OUT_IN_BACK() {
    Easings.call(this, 'EASE_OUT_IN_BACK', 16);
    Easings_EASE_OUT_IN_BACK_instance = this;
  }
  protoOf(Easings$EASE_OUT_IN_BACK).k18 = function (it) {
    // Inline function 'korlibs.math.interpolation.combine' call
    var start = Easings_EASE_OUT_BACK_getInstance();
    var end = Easings_EASE_IN_BACK_getInstance();
    return it < 0.5 ? 0.5 * start.k18(it * 2.0) : 0.5 * end.k18((it - 0.5) * 2.0) + 0.5;
  };
  var Easings_EASE_OUT_IN_BACK_instance;
  function Easings$EASE_IN_OUT_ELASTIC() {
    Easings.call(this, 'EASE_IN_OUT_ELASTIC', 17);
    Easings_EASE_IN_OUT_ELASTIC_instance = this;
  }
  protoOf(Easings$EASE_IN_OUT_ELASTIC).k18 = function (it) {
    // Inline function 'korlibs.math.interpolation.combine' call
    var start = Easings_EASE_IN_ELASTIC_getInstance();
    var end = Easings_EASE_OUT_ELASTIC_getInstance();
    return it < 0.5 ? 0.5 * start.k18(it * 2.0) : 0.5 * end.k18((it - 0.5) * 2.0) + 0.5;
  };
  var Easings_EASE_IN_OUT_ELASTIC_instance;
  function Easings$EASE_OUT_IN_ELASTIC() {
    Easings.call(this, 'EASE_OUT_IN_ELASTIC', 18);
    Easings_EASE_OUT_IN_ELASTIC_instance = this;
  }
  protoOf(Easings$EASE_OUT_IN_ELASTIC).k18 = function (it) {
    // Inline function 'korlibs.math.interpolation.combine' call
    var start = Easings_EASE_OUT_ELASTIC_getInstance();
    var end = Easings_EASE_IN_ELASTIC_getInstance();
    return it < 0.5 ? 0.5 * start.k18(it * 2.0) : 0.5 * end.k18((it - 0.5) * 2.0) + 0.5;
  };
  var Easings_EASE_OUT_IN_ELASTIC_instance;
  function Easings$EASE_IN_BOUNCE() {
    Easings.call(this, 'EASE_IN_BOUNCE', 19);
    Easings_EASE_IN_BOUNCE_instance = this;
  }
  protoOf(Easings$EASE_IN_BOUNCE).k18 = function (it) {
    return 1.0 - Easings_EASE_OUT_BOUNCE_getInstance().k18(1.0 - it);
  };
  var Easings_EASE_IN_BOUNCE_instance;
  function Easings$EASE_IN_OUT_BOUNCE() {
    Easings.call(this, 'EASE_IN_OUT_BOUNCE', 20);
    Easings_EASE_IN_OUT_BOUNCE_instance = this;
  }
  protoOf(Easings$EASE_IN_OUT_BOUNCE).k18 = function (it) {
    // Inline function 'korlibs.math.interpolation.combine' call
    var start = Easings_EASE_IN_BOUNCE_getInstance();
    var end = Easings_EASE_OUT_BOUNCE_getInstance();
    return it < 0.5 ? 0.5 * start.k18(it * 2.0) : 0.5 * end.k18((it - 0.5) * 2.0) + 0.5;
  };
  var Easings_EASE_IN_OUT_BOUNCE_instance;
  function Easings$EASE_OUT_IN_BOUNCE() {
    Easings.call(this, 'EASE_OUT_IN_BOUNCE', 21);
    Easings_EASE_OUT_IN_BOUNCE_instance = this;
  }
  protoOf(Easings$EASE_OUT_IN_BOUNCE).k18 = function (it) {
    // Inline function 'korlibs.math.interpolation.combine' call
    var start = Easings_EASE_OUT_BOUNCE_getInstance();
    var end = Easings_EASE_IN_BOUNCE_getInstance();
    return it < 0.5 ? 0.5 * start.k18(it * 2.0) : 0.5 * end.k18((it - 0.5) * 2.0) + 0.5;
  };
  var Easings_EASE_OUT_IN_BOUNCE_instance;
  function Easings$EASE_IN_QUAD() {
    Easings.call(this, 'EASE_IN_QUAD', 22);
    Easings_EASE_IN_QUAD_instance = this;
  }
  protoOf(Easings$EASE_IN_QUAD).k18 = function (it) {
    return 1.0 * it * it;
  };
  var Easings_EASE_IN_QUAD_instance;
  function Easings$EASE_OUT_QUAD() {
    Easings.call(this, 'EASE_OUT_QUAD', 23);
    Easings_EASE_OUT_QUAD_instance = this;
  }
  protoOf(Easings$EASE_OUT_QUAD).k18 = function (it) {
    return -1.0 * it * (it - 2);
  };
  var Easings_EASE_OUT_QUAD_instance;
  function Easings$EASE_IN_OUT_QUAD() {
    Easings.call(this, 'EASE_IN_OUT_QUAD', 24);
    Easings_EASE_IN_OUT_QUAD_instance = this;
  }
  protoOf(Easings$EASE_IN_OUT_QUAD).k18 = function (it) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.math.interpolation.EASE_IN_OUT_QUAD.invoke.<anonymous>' call
    var t = it * 2.0;
    var tmp;
    if (t < 1.0) {
      tmp = 0.5 * t * t;
    } else {
      tmp = -0.5 * ((t - 1) * (t - 1 - 2) - 1);
    }
    return tmp;
  };
  var Easings_EASE_IN_OUT_QUAD_instance;
  function Easings$EASE_SINE() {
    Easings.call(this, 'EASE_SINE', 25);
    Easings_EASE_SINE_instance = this;
  }
  protoOf(Easings$EASE_SINE).k18 = function (it) {
    // Inline function 'kotlin.math.sin' call
    var x = it * 1.5707964;
    return Math.sin(x);
  };
  var Easings_EASE_SINE_instance;
  function Easings$EASE_CLAMP_START() {
    Easings.call(this, 'EASE_CLAMP_START', 26);
    Easings_EASE_CLAMP_START_instance = this;
  }
  protoOf(Easings$EASE_CLAMP_START).k18 = function (it) {
    return it <= 0.0 ? 0.0 : 1.0;
  };
  var Easings_EASE_CLAMP_START_instance;
  function Easings$EASE_CLAMP_END() {
    Easings.call(this, 'EASE_CLAMP_END', 27);
    Easings_EASE_CLAMP_END_instance = this;
  }
  protoOf(Easings$EASE_CLAMP_END).k18 = function (it) {
    return it < 1.0 ? 0.0 : 1.0;
  };
  var Easings_EASE_CLAMP_END_instance;
  function Easings$EASE_CLAMP_MIDDLE() {
    Easings.call(this, 'EASE_CLAMP_MIDDLE', 28);
    Easings_EASE_CLAMP_MIDDLE_instance = this;
  }
  protoOf(Easings$EASE_CLAMP_MIDDLE).k18 = function (it) {
    return it < 0.5 ? 0.0 : 1.0;
  };
  var Easings_EASE_CLAMP_MIDDLE_instance;
  function values_1() {
    return [Easings_SMOOTH_getInstance(), Easings_EASE_IN_ELASTIC_getInstance(), Easings_EASE_OUT_ELASTIC_getInstance(), Easings_EASE_OUT_BOUNCE_getInstance(), Easings_LINEAR_getInstance(), Easings_EASE_getInstance(), Easings_EASE_IN_getInstance(), Easings_EASE_OUT_getInstance(), Easings_EASE_IN_OUT_getInstance(), Easings_EASE_IN_OLD_getInstance(), Easings_EASE_OUT_OLD_getInstance(), Easings_EASE_IN_OUT_OLD_getInstance(), Easings_EASE_OUT_IN_OLD_getInstance(), Easings_EASE_IN_BACK_getInstance(), Easings_EASE_OUT_BACK_getInstance(), Easings_EASE_IN_OUT_BACK_getInstance(), Easings_EASE_OUT_IN_BACK_getInstance(), Easings_EASE_IN_OUT_ELASTIC_getInstance(), Easings_EASE_OUT_IN_ELASTIC_getInstance(), Easings_EASE_IN_BOUNCE_getInstance(), Easings_EASE_IN_OUT_BOUNCE_getInstance(), Easings_EASE_OUT_IN_BOUNCE_getInstance(), Easings_EASE_IN_QUAD_getInstance(), Easings_EASE_OUT_QUAD_getInstance(), Easings_EASE_IN_OUT_QUAD_getInstance(), Easings_EASE_SINE_getInstance(), Easings_EASE_CLAMP_START_getInstance(), Easings_EASE_CLAMP_END_getInstance(), Easings_EASE_CLAMP_MIDDLE_getInstance()];
  }
  var Easings_entriesInitialized;
  function Easings_initEntries() {
    if (Easings_entriesInitialized)
      return Unit_instance;
    Easings_entriesInitialized = true;
    Easings_SMOOTH_instance = new Easings$SMOOTH();
    Easings_EASE_IN_ELASTIC_instance = new Easings$EASE_IN_ELASTIC();
    Easings_EASE_OUT_ELASTIC_instance = new Easings$EASE_OUT_ELASTIC();
    Easings_EASE_OUT_BOUNCE_instance = new Easings$EASE_OUT_BOUNCE();
    Easings_LINEAR_instance = new Easings$LINEAR();
    Easings_EASE_instance = new Easings$EASE();
    Easings_EASE_IN_instance = new Easings$EASE_IN();
    Easings_EASE_OUT_instance = new Easings$EASE_OUT();
    Easings_EASE_IN_OUT_instance = new Easings$EASE_IN_OUT();
    Easings_EASE_IN_OLD_instance = new Easings$EASE_IN_OLD();
    Easings_EASE_OUT_OLD_instance = new Easings$EASE_OUT_OLD();
    Easings_EASE_IN_OUT_OLD_instance = new Easings$EASE_IN_OUT_OLD();
    Easings_EASE_OUT_IN_OLD_instance = new Easings$EASE_OUT_IN_OLD();
    Easings_EASE_IN_BACK_instance = new Easings$EASE_IN_BACK();
    Easings_EASE_OUT_BACK_instance = new Easings$EASE_OUT_BACK();
    Easings_EASE_IN_OUT_BACK_instance = new Easings$EASE_IN_OUT_BACK();
    Easings_EASE_OUT_IN_BACK_instance = new Easings$EASE_OUT_IN_BACK();
    Easings_EASE_IN_OUT_ELASTIC_instance = new Easings$EASE_IN_OUT_ELASTIC();
    Easings_EASE_OUT_IN_ELASTIC_instance = new Easings$EASE_OUT_IN_ELASTIC();
    Easings_EASE_IN_BOUNCE_instance = new Easings$EASE_IN_BOUNCE();
    Easings_EASE_IN_OUT_BOUNCE_instance = new Easings$EASE_IN_OUT_BOUNCE();
    Easings_EASE_OUT_IN_BOUNCE_instance = new Easings$EASE_OUT_IN_BOUNCE();
    Easings_EASE_IN_QUAD_instance = new Easings$EASE_IN_QUAD();
    Easings_EASE_OUT_QUAD_instance = new Easings$EASE_OUT_QUAD();
    Easings_EASE_IN_OUT_QUAD_instance = new Easings$EASE_IN_OUT_QUAD();
    Easings_EASE_SINE_instance = new Easings$EASE_SINE();
    Easings_EASE_CLAMP_START_instance = new Easings$EASE_CLAMP_START();
    Easings_EASE_CLAMP_END_instance = new Easings$EASE_CLAMP_END();
    Easings_EASE_CLAMP_MIDDLE_instance = new Easings$EASE_CLAMP_MIDDLE();
  }
  function Easings(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Easings).toString = function () {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return replace(protoOf(Enum).toString.call(this), _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45)).toLowerCase();
  };
  function Easings_SMOOTH_getInstance() {
    Easings_initEntries();
    return Easings_SMOOTH_instance;
  }
  function Easings_EASE_IN_ELASTIC_getInstance() {
    Easings_initEntries();
    return Easings_EASE_IN_ELASTIC_instance;
  }
  function Easings_EASE_OUT_ELASTIC_getInstance() {
    Easings_initEntries();
    return Easings_EASE_OUT_ELASTIC_instance;
  }
  function Easings_EASE_OUT_BOUNCE_getInstance() {
    Easings_initEntries();
    return Easings_EASE_OUT_BOUNCE_instance;
  }
  function Easings_LINEAR_getInstance() {
    Easings_initEntries();
    return Easings_LINEAR_instance;
  }
  function Easings_EASE_getInstance() {
    Easings_initEntries();
    return Easings_EASE_instance;
  }
  function Easings_EASE_IN_getInstance() {
    Easings_initEntries();
    return Easings_EASE_IN_instance;
  }
  function Easings_EASE_OUT_getInstance() {
    Easings_initEntries();
    return Easings_EASE_OUT_instance;
  }
  function Easings_EASE_IN_OUT_getInstance() {
    Easings_initEntries();
    return Easings_EASE_IN_OUT_instance;
  }
  function Easings_EASE_IN_OLD_getInstance() {
    Easings_initEntries();
    return Easings_EASE_IN_OLD_instance;
  }
  function Easings_EASE_OUT_OLD_getInstance() {
    Easings_initEntries();
    return Easings_EASE_OUT_OLD_instance;
  }
  function Easings_EASE_IN_OUT_OLD_getInstance() {
    Easings_initEntries();
    return Easings_EASE_IN_OUT_OLD_instance;
  }
  function Easings_EASE_OUT_IN_OLD_getInstance() {
    Easings_initEntries();
    return Easings_EASE_OUT_IN_OLD_instance;
  }
  function Easings_EASE_IN_BACK_getInstance() {
    Easings_initEntries();
    return Easings_EASE_IN_BACK_instance;
  }
  function Easings_EASE_OUT_BACK_getInstance() {
    Easings_initEntries();
    return Easings_EASE_OUT_BACK_instance;
  }
  function Easings_EASE_IN_OUT_BACK_getInstance() {
    Easings_initEntries();
    return Easings_EASE_IN_OUT_BACK_instance;
  }
  function Easings_EASE_OUT_IN_BACK_getInstance() {
    Easings_initEntries();
    return Easings_EASE_OUT_IN_BACK_instance;
  }
  function Easings_EASE_IN_OUT_ELASTIC_getInstance() {
    Easings_initEntries();
    return Easings_EASE_IN_OUT_ELASTIC_instance;
  }
  function Easings_EASE_OUT_IN_ELASTIC_getInstance() {
    Easings_initEntries();
    return Easings_EASE_OUT_IN_ELASTIC_instance;
  }
  function Easings_EASE_IN_BOUNCE_getInstance() {
    Easings_initEntries();
    return Easings_EASE_IN_BOUNCE_instance;
  }
  function Easings_EASE_IN_OUT_BOUNCE_getInstance() {
    Easings_initEntries();
    return Easings_EASE_IN_OUT_BOUNCE_instance;
  }
  function Easings_EASE_OUT_IN_BOUNCE_getInstance() {
    Easings_initEntries();
    return Easings_EASE_OUT_IN_BOUNCE_instance;
  }
  function Easings_EASE_IN_QUAD_getInstance() {
    Easings_initEntries();
    return Easings_EASE_IN_QUAD_instance;
  }
  function Easings_EASE_OUT_QUAD_getInstance() {
    Easings_initEntries();
    return Easings_EASE_OUT_QUAD_instance;
  }
  function Easings_EASE_IN_OUT_QUAD_getInstance() {
    Easings_initEntries();
    return Easings_EASE_IN_OUT_QUAD_instance;
  }
  function Easings_EASE_SINE_getInstance() {
    Easings_initEntries();
    return Easings_EASE_SINE_instance;
  }
  function Easings_EASE_CLAMP_START_getInstance() {
    Easings_initEntries();
    return Easings_EASE_CLAMP_START_instance;
  }
  function Easings_EASE_CLAMP_END_getInstance() {
    Easings_initEntries();
    return Easings_EASE_CLAMP_END_instance;
  }
  function Easings_EASE_CLAMP_MIDDLE_getInstance() {
    Easings_initEntries();
    return Easings_EASE_CLAMP_MIDDLE_instance;
  }
  function _ALL_LIST$factory() {
    return getPropertyCallableRef('_ALL_LIST', 1, KProperty1, function (receiver) {
      return _get__ALL_LIST__dej8hi(receiver);
    }, null);
  }
  function insertAt($this, n, min, max) {
    $this.p1b_1.fy(n, min);
    $this.q1b_1.fy(n, max);
  }
  function removeAt($this, n, count) {
    $this.p1b_1.hy(n, count);
    $this.q1b_1.hy(n, count);
  }
  function IntSegmentSet() {
    this.p1b_1 = new IntArrayList(16);
    this.q1b_1 = new IntArrayList(16);
  }
  protoOf(IntSegmentSet).l = function () {
    return this.p1b_1.l();
  };
  protoOf(IntSegmentSet).x = function () {
    return this.l() === 0;
  };
  protoOf(IntSegmentSet).dy = function () {
    return this.l() > 0;
  };
  protoOf(IntSegmentSet).r1b = function () {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.math.segment.IntSegmentSet.clear.<anonymous>' call
    this.p1b_1.n2();
    this.q1b_1.n2();
    return this;
  };
  protoOf(IntSegmentSet).s1b = function () {
    return this.dy() ? this.p1b_1.gx(0) : 0;
  };
  protoOf(IntSegmentSet).t1b = function () {
    return this.dy() ? this.q1b_1.gx(this.q1b_1.l() - 1 | 0) : 0;
  };
  protoOf(IntSegmentSet).u1b = function (x) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'korlibs.datastructure.genericBinarySearch' call
      var low = 0;
      var high = this.l() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) / 2 | 0;
        // Inline function 'korlibs.math.segment.IntSegmentSet.findNearIndex.<anonymous>' call
        var min = this.p1b_1.gx(mid);
        var max = this.q1b_1.gx(mid);
        var mval = x < min ? 1 : x > max ? -1 : 0;
        if (mval < 0)
          low = mid + 1 | 0;
        else if (mval > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      // Inline function 'korlibs.datastructure.genericBinarySearch.<anonymous>' call
      tmp$ret$1 = (-low | 0) - 1 | 0;
    }
    return _BSearchResult___init__impl__em6zam(tmp$ret$1);
  };
  protoOf(IntSegmentSet).v1b = function (x) {
    // Inline function 'korlibs.math.segment.genericBinarySearchLeft' call
    var toIndex = this.l();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'korlibs.datastructure.genericBinarySearch' call
      var low = 0;
      var high = toIndex - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) / 2 | 0;
        // Inline function 'korlibs.math.segment.IntSegmentSet.findLeftBound.<anonymous>' call
        var mval = compareTo(this.p1b_1.gx(mid), x);
        if (mval < 0)
          low = mid + 1 | 0;
        else if (mval > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      // Inline function 'korlibs.math.segment.genericBinarySearchLeft.<anonymous>' call
      var low_0 = low;
      // Inline function 'kotlin.math.min' call
      var b = high;
      var tmp$ret$2 = Math.min(low_0, b);
      tmp$ret$1 = coerceIn(tmp$ret$2, 0, toIndex - 1 | 0);
    }
    var tmp$ret$4 = tmp$ret$1;
    return coerceIn(tmp$ret$4, 0, this.l() - 1 | 0);
  };
  protoOf(IntSegmentSet).w1b = function (x) {
    // Inline function 'korlibs.math.segment.genericBinarySearchRight' call
    var toIndex = this.l();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'korlibs.datastructure.genericBinarySearch' call
      var low = 0;
      var high = toIndex - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) / 2 | 0;
        // Inline function 'korlibs.math.segment.IntSegmentSet.findRightBound.<anonymous>' call
        var mval = compareTo(this.q1b_1.gx(mid), x);
        if (mval < 0)
          low = mid + 1 | 0;
        else if (mval > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      // Inline function 'korlibs.math.segment.genericBinarySearchRight.<anonymous>' call
      var low_0 = low;
      // Inline function 'kotlin.math.max' call
      var b = high;
      var tmp$ret$2 = Math.max(low_0, b);
      tmp$ret$1 = coerceIn(tmp$ret$2, 0, toIndex - 1 | 0);
    }
    var tmp$ret$4 = tmp$ret$1;
    return coerceIn(tmp$ret$4, 0, this.l() - 1 | 0);
  };
  protoOf(IntSegmentSet).x1b = function (min, max) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    $l$block_0: {
      // Inline function 'korlibs.math.segment.IntSegmentSet.add.<anonymous>' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(min <= max)) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      if (this.x()) {
        insertAt(this, this.l(), min, max);
      } else if (min === this.t1b()) {
        this.q1b_1.by(this.q1b_1.l() - 1 | 0, max);
      } else if (max === this.s1b()) {
        this.p1b_1.by(0, min);
      } else {
        var removeStart = -1;
        var removeCount = -1;
        $l$block: {
          // Inline function 'korlibs.math.segment.IntSegmentSet.fastForEachInterestingRange' call
          if (this.x()) {
            break $l$block;
          }
          var nmin = this.v1b(min);
          var nmax = this.w1b(max);
          var inductionVariable = nmin;
          if (inductionVariable <= nmax)
            do {
              var n = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'korlibs.math.segment.IntSegmentSet.add.<anonymous>.<anonymous>' call
              var n_0 = n;
              var x1 = this.p1b_1.gx(n);
              var x2 = this.q1b_1.gx(n);
              if (this.y1b(x1, x2, min, max)) {
                if (removeStart === -1)
                  removeStart = n_0;
                var tmp = removeStart;
                // Inline function 'kotlin.math.min' call
                var a = this.p1b_1.gx(removeStart);
                // Inline function 'kotlin.math.min' call
                var b = Math.min(x1, min);
                var tmp$ret$3 = Math.min(a, b);
                this.p1b_1.by(tmp, tmp$ret$3);
                var tmp_0 = removeStart;
                // Inline function 'kotlin.math.max' call
                var a_0 = this.q1b_1.gx(removeStart);
                // Inline function 'kotlin.math.max' call
                var b_0 = Math.max(x2, max);
                var tmp$ret$5 = Math.max(a_0, b_0);
                this.q1b_1.by(tmp_0, tmp$ret$5);
                removeCount = removeCount + 1 | 0;
              }
            }
             while (!(n === nmax));
        }
        if (removeCount !== 0)
          if (removeCount > 0) {
            removeAt(this, removeStart + 1 | 0, removeCount);
          } else if (max < this.s1b()) {
            insertAt(this, 0, min, max);
          } else if (min > this.t1b()) {
            insertAt(this, this.l(), min, max);
          } else {
            var inductionVariable_0 = coerceAtLeast(this.v1b(min), 1);
            var last = this.w1b(max);
            if (inductionVariable_0 <= last)
              do {
                var m = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var prevMax = this.q1b_1.gx(m - 1 | 0);
                var currMin = this.p1b_1.gx(m);
                if (min > prevMax ? max < currMin : false) {
                  insertAt(this, m, min, max);
                  break $l$block_0;
                }
              }
               while (!(m === last));
            // Inline function 'kotlin.error' call
            var message_0 = 'Unexpected';
            throw IllegalStateException_init_$Create$(toString(message_0));
          }
      }
    }
    return this;
  };
  protoOf(IntSegmentSet).eg = function (v) {
    return _BSearchResult___get_found__impl__om04iz(this.u1b(v));
  };
  protoOf(IntSegmentSet).y1b = function (x1, x2, y1, y2) {
    return x2 >= y1 ? y2 >= x1 : false;
  };
  protoOf(IntSegmentSet).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.math.segment.IntSegmentSet.toString.<anonymous>' call
    this_0.f5('[');
    // Inline function 'korlibs.math.segment.IntSegmentSet.fastForEach' call
    var inductionVariable = 0;
    var last = this.l();
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'korlibs.math.segment.IntSegmentSet.toString.<anonymous>.<anonymous>' call
        var min = this.p1b_1.gx(n);
        var max = this.q1b_1.gx(n);
        var first = n === 0;
        if (!first) {
          this_0.f5(', ');
        }
        this_0.f5('' + min + '-' + max);
      }
       while (inductionVariable < last);
    this_0.f5(']');
    return this_0.toString();
  };
  function Anchor2D_init_$Init$(sx, sy, $this) {
    Anchor2D.call($this, sx, sy);
    return $this;
  }
  function Anchor2D_init_$Create$(sx, sy) {
    return Anchor2D_init_$Init$(sx, sy, objectCreate(protoOf(Anchor2D)));
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.z1b_1 = Anchor2D_init_$Create$(0.0, 0.0);
    this.a1c_1 = Anchor2D_init_$Create$(0.5, 0.0);
    this.b1c_1 = Anchor2D_init_$Create$(1.0, 0.0);
    this.c1c_1 = Anchor2D_init_$Create$(0.0, 0.5);
    this.d1c_1 = Anchor2D_init_$Create$(0.5, 0.5);
    this.e1c_1 = Anchor2D_init_$Create$(1.0, 0.5);
    this.f1c_1 = Anchor2D_init_$Create$(0.0, 1.0);
    this.g1c_1 = Anchor2D_init_$Create$(0.5, 1.0);
    this.h1c_1 = Anchor2D_init_$Create$(1.0, 1.0);
  }
  protoOf(Companion_14).i1c = function () {
    return this.d1c_1;
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function Anchor2D(sx, sy) {
    Companion_getInstance_14();
    this.j1c_1 = sx;
    this.k1c_1 = sy;
  }
  protoOf(Anchor2D).l1c = function () {
    return new Vector2D(this.j1c_1, this.k1c_1);
  };
  protoOf(Anchor2D).toString = function () {
    return 'Anchor2D(sx=' + this.j1c_1 + ', sy=' + this.k1c_1 + ')';
  };
  protoOf(Anchor2D).hashCode = function () {
    var result = getNumberHashCode(this.j1c_1);
    result = imul(result, 31) + getNumberHashCode(this.k1c_1) | 0;
    return result;
  };
  protoOf(Anchor2D).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Anchor2D))
      return false;
    var tmp0_other_with_cast = other instanceof Anchor2D ? other : THROW_CCE();
    if (!equals(this.j1c_1, tmp0_other_with_cast.j1c_1))
      return false;
    if (!equals(this.k1c_1, tmp0_other_with_cast.k1c_1))
      return false;
    return true;
  };
  function times(_this__u8e3s4, anchor) {
    // Inline function 'korlibs.math.geom.Vector2D.times' call
    var this_0 = toVector(_this__u8e3s4);
    var that = anchor.l1c();
    return new Vector2D(this_0.f18_1 * that.f18_1, this_0.g18_1 * that.g18_1);
  }
  function _Angle___init__impl__g23q1m(radians) {
    return radians;
  }
  function _Angle___get_radians__impl__n00yt5($this) {
    return $this;
  }
  function _Angle___get_ratio__impl__ap3on4($this) {
    // Inline function 'korlibs.math.geom.Companion.radiansToRatio' call
    Companion_getInstance_15();
    var radians = _Angle___get_radians__impl__n00yt5($this);
    return _Ratio___init__impl__9mwvn2(radians / 6.283185307179586);
  }
  function _Angle___get_degrees__impl__qg56vw($this) {
    // Inline function 'korlibs.math.geom.Companion.radiansToDegrees' call
    Companion_getInstance_15();
    return _Angle___get_radians__impl__n00yt5($this) * 57.29577951308232;
  }
  function _Angle___get_cosine__impl__vprvmu($this) {
    // Inline function 'kotlin.math.cos' call
    var x = _Angle___get_radians__impl__n00yt5($this);
    return Math.cos(x);
  }
  function _Angle___get_sine__impl__15nmyi($this) {
    // Inline function 'kotlin.math.sin' call
    var x = _Angle___get_radians__impl__n00yt5($this);
    return Math.sin(x);
  }
  function _Angle___get_tangent__impl__vushdy($this) {
    // Inline function 'kotlin.math.tan' call
    var x = _Angle___get_radians__impl__n00yt5($this);
    return Math.tan(x);
  }
  function Angle__cosine_impl_bgvzun($this, up) {
    return _Angle___get_cosine__impl__vprvmu(adjustFromUp($this, up));
  }
  function Angle__sine_impl_3l11xv($this, up) {
    return _Angle___get_sine__impl__15nmyi(adjustFromUp($this, up));
  }
  function _Angle___get_absoluteValue__impl__4qoakv($this) {
    // Inline function 'kotlin.math.absoluteValue' call
    // Inline function 'korlibs.math.geom.Angle.internal' call
    var this_0 = _Angle___get_radians__impl__n00yt5($this);
    var tmp$ret$1 = Math.abs(this_0);
    return _Angle___init__impl__g23q1m(tmp$ret$1);
  }
  function Angle__div_impl_ut2btd($this, scale) {
    // Inline function 'korlibs.math.geom.Angle.internal' call
    var tmp$ret$0 = _Angle___get_radians__impl__n00yt5($this);
    return _Angle___init__impl__g23q1m(tmp$ret$0 / scale);
  }
  function Angle__times_impl_v3s9y2($this, scale) {
    // Inline function 'korlibs.math.geom.Angle.internal' call
    var tmp$ret$0 = _Angle___get_radians__impl__n00yt5($this);
    return _Angle___init__impl__g23q1m(tmp$ret$0 * scale);
  }
  function Angle__plus_impl_26v37k($this, other) {
    // Inline function 'korlibs.math.geom.Angle.internal' call
    var tmp = _Angle___get_radians__impl__n00yt5($this);
    // Inline function 'korlibs.math.geom.Angle.internal' call
    var tmp$ret$1 = _Angle___get_radians__impl__n00yt5(other);
    return _Angle___init__impl__g23q1m(tmp + tmp$ret$1);
  }
  function Angle__minus_impl_xeau7k($this, other) {
    // Inline function 'korlibs.math.geom.Angle.internal' call
    var tmp = _Angle___get_radians__impl__n00yt5($this);
    // Inline function 'korlibs.math.geom.Angle.internal' call
    var tmp$ret$1 = _Angle___get_radians__impl__n00yt5(other);
    return _Angle___init__impl__g23q1m(tmp - tmp$ret$1);
  }
  function Angle__unaryMinus_impl_7901fr($this) {
    // Inline function 'korlibs.math.geom.Angle.internal' call
    var tmp$ret$0 = _Angle___get_radians__impl__n00yt5($this);
    return _Angle___init__impl__g23q1m(-tmp$ret$0);
  }
  function _Angle___get_normalized__impl__9s30ys($this) {
    // Inline function 'korlibs.math.geom.Companion.fromRatio' call
    Companion_getInstance_15();
    var ratio = umod(Ratio__toDouble_impl_o7epze(_Angle___get_ratio__impl__ap3on4($this)), 1.0);
    // Inline function 'korlibs.math.geom.Companion.ratioToRadians' call
    var ratio_0 = toRatio(ratio);
    var tmp$ret$0 = Ratio__times_impl_ucdh7y_0(ratio_0, 6.283185307179586);
    return _Angle___init__impl__g23q1m(tmp$ret$0);
  }
  function Angle__compareTo_impl_a0hfds($this, other) {
    return Ratio__compareTo_impl_z2ienc(_Angle___get_ratio__impl__ap3on4($this), _Angle___get_ratio__impl__ap3on4(other));
  }
  function Angle__compareTo_impl_a0hfds_0($this, other) {
    return Angle__compareTo_impl_a0hfds($this.m1c_1, other instanceof Angle ? other.m1c_1 : THROW_CCE());
  }
  function Angle__toString_impl_786qky($this) {
    return get_niceStr(roundDecimalPlaces(_Angle___get_degrees__impl__qg56vw($this), 2)) + '.degrees';
  }
  function Companion_15() {
    Companion_instance_15 = this;
    var tmp = this;
    // Inline function 'korlibs.math.geom.Companion.fromRatio' call
    // Inline function 'korlibs.math.geom.Companion.ratioToRadians' call
    Companion_getInstance_15();
    var ratio = toRatio(1.0E-5);
    var tmp$ret$0 = Ratio__times_impl_ucdh7y_0(ratio, 6.283185307179586);
    tmp.n1c_1 = _Angle___init__impl__g23q1m(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'korlibs.math.geom.Companion.fromRatio' call
    // Inline function 'korlibs.math.geom.Companion.ratioToRadians' call
    Companion_getInstance_15();
    var ratio_0 = toRatio(0.0);
    var tmp$ret$2 = Ratio__times_impl_ucdh7y_0(ratio_0, 6.283185307179586);
    tmp_0.o1c_1 = _Angle___init__impl__g23q1m(tmp$ret$2);
    var tmp_1 = this;
    // Inline function 'korlibs.math.geom.Companion.fromRatio' call
    // Inline function 'korlibs.math.geom.Companion.ratioToRadians' call
    Companion_getInstance_15();
    var ratio_1 = toRatio(0.25);
    var tmp$ret$4 = Ratio__times_impl_ucdh7y_0(ratio_1, 6.283185307179586);
    tmp_1.p1c_1 = _Angle___init__impl__g23q1m(tmp$ret$4);
    var tmp_2 = this;
    // Inline function 'korlibs.math.geom.Companion.fromRatio' call
    // Inline function 'korlibs.math.geom.Companion.ratioToRadians' call
    Companion_getInstance_15();
    var ratio_2 = toRatio(0.5);
    var tmp$ret$6 = Ratio__times_impl_ucdh7y_0(ratio_2, 6.283185307179586);
    tmp_2.q1c_1 = _Angle___init__impl__g23q1m(tmp$ret$6);
    var tmp_3 = this;
    // Inline function 'korlibs.math.geom.Companion.fromRatio' call
    // Inline function 'korlibs.math.geom.Companion.ratioToRadians' call
    Companion_getInstance_15();
    var ratio_3 = toRatio(0.75);
    var tmp$ret$8 = Ratio__times_impl_ucdh7y_0(ratio_3, 6.283185307179586);
    tmp_3.r1c_1 = _Angle___init__impl__g23q1m(tmp$ret$8);
    var tmp_4 = this;
    // Inline function 'korlibs.math.geom.Companion.fromRatio' call
    // Inline function 'korlibs.math.geom.Companion.ratioToRadians' call
    Companion_getInstance_15();
    var ratio_4 = toRatio(1.0);
    var tmp$ret$10 = Ratio__times_impl_ucdh7y_0(ratio_4, 6.283185307179586);
    tmp_4.s1c_1 = _Angle___init__impl__g23q1m(tmp$ret$10);
  }
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function Angle__hashCode_impl_szcndt($this) {
    return getNumberHashCode($this);
  }
  function Angle__equals_impl_zcf5mt($this, other) {
    if (!(other instanceof Angle))
      return false;
    var tmp0_other_with_cast = other instanceof Angle ? other.m1c_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Angle(radians) {
    Companion_getInstance_15();
    this.m1c_1 = radians;
  }
  protoOf(Angle).t1c = function (other) {
    return Angle__compareTo_impl_a0hfds(this.m1c_1, other);
  };
  protoOf(Angle).d = function (other) {
    return Angle__compareTo_impl_a0hfds_0(this, other);
  };
  protoOf(Angle).toString = function () {
    return Angle__toString_impl_786qky(this.m1c_1);
  };
  protoOf(Angle).hashCode = function () {
    return Angle__hashCode_impl_szcndt(this.m1c_1);
  };
  protoOf(Angle).equals = function (other) {
    return Angle__equals_impl_zcf5mt(this.m1c_1, other);
  };
  function get_degrees(_this__u8e3s4) {
    // Inline function 'korlibs.math.geom.Companion.fromDegrees' call
    // Inline function 'korlibs.math.geom.Companion.degreesToRadians' call
    Companion_getInstance_15();
    var tmp$ret$0 = _this__u8e3s4 * 0.017453292519943295;
    return _Angle___init__impl__g23q1m(tmp$ret$0);
  }
  function get_radians(_this__u8e3s4) {
    // Inline function 'korlibs.math.geom.Companion.fromRadians' call
    Companion_getInstance_15();
    return _Angle___init__impl__g23q1m(_this__u8e3s4);
  }
  function get_radians_0(_this__u8e3s4) {
    // Inline function 'korlibs.math.geom.Companion.fromRadians' call
    Companion_getInstance_15();
    return _Angle___init__impl__g23q1m(_this__u8e3s4);
  }
  function adjustFromUp(_this__u8e3s4, up) {
    Companion_instance_22.v1c(up);
    return up.g18_1 > 0.0 ? _this__u8e3s4 : Angle__unaryMinus_impl_7901fr(_this__u8e3s4);
  }
  function Angle_between(x0, y0, x1, y1, up) {
    up = up === VOID ? Companion_getInstance_28().a1d_1 : up;
    // Inline function 'korlibs.math.geom.Companion.atan2' call
    Companion_getInstance_15();
    var x = y1 - y0;
    var y = x1 - x0;
    var up_0 = Companion_getInstance_28().a1d_1;
    // Inline function 'korlibs.math.geom.Companion.fromRadians' call
    // Inline function 'kotlin.math.atan2' call
    var radians = Math.atan2(x, y);
    var tmp$ret$1 = _Angle___init__impl__g23q1m(radians);
    var angle = adjustFromUp(tmp$ret$1, up_0);
    return adjustFromUp(Angle__compareTo_impl_a0hfds(angle, Companion_getInstance_15().o1c_1) < 0 ? Angle__plus_impl_26v37k(angle, Companion_getInstance_15().s1c_1) : angle, up);
  }
  function _BoundsBuilder___init__impl__g6dprh(bounds) {
    return bounds;
  }
  function _BoundsBuilder___get_bounds__impl__s1l1gx($this) {
    return $this;
  }
  function Companion_16() {
    Companion_instance_16 = this;
    this.e1d_1 = _BoundsBuilder___init__impl__g6dprh(Companion_getInstance_23().i1d());
  }
  protoOf(Companion_16).j1d = function () {
    return this.e1d_1;
  };
  protoOf(Companion_16).k1d = function (p1, p2, p3, p4) {
    return _BoundsBuilder___init__impl__g6dprh(Companion_getInstance_23().n1d(Companion_getInstance_28().l1d(p1, p2, p3, p4), Companion_getInstance_28().m1d(p1, p2, p3, p4)));
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function BoundsBuilder__plus_impl_cz7f7x($this, p) {
    if (_BoundsBuilder___get_bounds__impl__s1l1gx($this).t1d())
      return _BoundsBuilder___init__impl__g6dprh(Companion_getInstance_23().o1d(p, Size2D_init_$Create$_1(0, 0)));
    return _BoundsBuilder___init__impl__g6dprh(Companion_getInstance_23().n1d(Companion_getInstance_28().v1d(_BoundsBuilder___get_bounds__impl__s1l1gx($this).u1d(), p), Companion_getInstance_28().x1d(_BoundsBuilder___get_bounds__impl__s1l1gx($this).w1d(), p)));
  }
  function BoundsBuilder__plus_impl_cz7f7x_0($this, rect) {
    if (rect == null)
      return $this;
    if (rect.t1d())
      return $this;
    return BoundsBuilder__plus_impl_cz7f7x(BoundsBuilder__plus_impl_cz7f7x($this, rect.u1d()), rect.w1d());
  }
  function Line2D_init_$Init$($this) {
    Line2D.call($this, Vector2D_init_$Create$_1(), Vector2D_init_$Create$_1());
    return $this;
  }
  function Line2D_init_$Create$() {
    return Line2D_init_$Init$(objectCreate(protoOf(Line2D)));
  }
  function Line2D_init_$Init$_0(x0, y0, x1, y1, $this) {
    Line2D.call($this, Vector2D_init_$Create$_0(x0, y0), Vector2D_init_$Create$_0(x1, y1));
    return $this;
  }
  function Line2D_init_$Create$_0(x0, y0, x1, y1) {
    return Line2D_init_$Init$_0(x0, y0, x1, y1, objectCreate(protoOf(Line2D)));
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.y1d_1 = new Line2D(Companion_getInstance_28().w1c_1, Companion_getInstance_28().w1c_1);
    this.z1d_1 = new Line2D(Companion_getInstance_28().x1c_1, Companion_getInstance_28().x1c_1);
  }
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function Line2D(a, b) {
    Companion_getInstance_17();
    this.a1e_1 = a;
    this.b1e_1 = b;
  }
  protoOf(Line2D).toString = function () {
    return 'Line(' + this.a1e_1 + ', ' + this.b1e_1 + ')';
  };
  protoOf(Line2D).hashCode = function () {
    var result = this.a1e_1.hashCode();
    result = imul(result, 31) + this.b1e_1.hashCode() | 0;
    return result;
  };
  protoOf(Line2D).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Line2D))
      return false;
    var tmp0_other_with_cast = other instanceof Line2D ? other : THROW_CCE();
    if (!this.a1e_1.equals(tmp0_other_with_cast.a1e_1))
      return false;
    if (!this.b1e_1.equals(tmp0_other_with_cast.b1e_1))
      return false;
    return true;
  };
  function MarginInt_init_$Init$(vertical, horizontal, $this) {
    MarginInt.call($this, vertical, horizontal, vertical, horizontal);
    return $this;
  }
  function MarginInt_init_$Create$(vertical, horizontal) {
    return MarginInt_init_$Init$(vertical, horizontal, objectCreate(protoOf(MarginInt)));
  }
  function Companion_18() {
    Companion_instance_18 = this;
    this.c1e_1 = new MarginInt(0, 0, 0, 0);
  }
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function MarginInt(top, right, bottom, left) {
    Companion_getInstance_18();
    this.d1e_1 = top;
    this.e1e_1 = right;
    this.f1e_1 = bottom;
    this.g1e_1 = left;
  }
  protoOf(MarginInt).h1e = function () {
    return ((!(this.d1e_1 === 0) ? true : !(this.g1e_1 === 0)) ? true : !(this.e1e_1 === 0)) ? true : !(this.f1e_1 === 0);
  };
  protoOf(MarginInt).i1e = function () {
    return this.g1e_1 + this.e1e_1 | 0;
  };
  protoOf(MarginInt).j1e = function () {
    return this.d1e_1 + this.f1e_1 | 0;
  };
  protoOf(MarginInt).toString = function () {
    return 'MarginInt(top=' + this.d1e_1 + ', right=' + this.e1e_1 + ', bottom=' + this.f1e_1 + ', left=' + this.g1e_1 + ')';
  };
  protoOf(MarginInt).hashCode = function () {
    var result = this.d1e_1;
    result = imul(result, 31) + this.e1e_1 | 0;
    result = imul(result, 31) + this.f1e_1 | 0;
    result = imul(result, 31) + this.g1e_1 | 0;
    return result;
  };
  protoOf(MarginInt).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MarginInt))
      return false;
    var tmp0_other_with_cast = other instanceof MarginInt ? other : THROW_CCE();
    if (!(this.d1e_1 === tmp0_other_with_cast.d1e_1))
      return false;
    if (!(this.e1e_1 === tmp0_other_with_cast.e1e_1))
      return false;
    if (!(this.f1e_1 === tmp0_other_with_cast.f1e_1))
      return false;
    if (!(this.g1e_1 === tmp0_other_with_cast.g1e_1))
      return false;
    return true;
  };
  function Companion_19() {
    Companion_instance_19 = this;
    this.k1e_1 = new Matrix(1.0, 0.0, 0.0, 1.0, 0.0, 0.0);
    var tmp = this;
    tmp.l1e_1 = new Matrix(NaN, NaN, NaN, NaN, NaN, NaN);
    this.m1e_1 = this.l1e_1;
  }
  protoOf(Companion_19).n1e = function () {
    return this.k1e_1;
  };
  protoOf(Companion_19).o1e = function (l, r) {
    if (l.t1d())
      return r;
    if (r.t1d())
      return l;
    return new Matrix(l.p1e_1 * r.p1e_1 + l.q1e_1 * r.r1e_1, l.p1e_1 * r.q1e_1 + l.q1e_1 * r.s1e_1, l.r1e_1 * r.p1e_1 + l.s1e_1 * r.r1e_1, l.r1e_1 * r.q1e_1 + l.s1e_1 * r.s1e_1, l.t1e_1 * r.p1e_1 + l.u1e_1 * r.r1e_1 + r.t1e_1, l.t1e_1 * r.q1e_1 + l.u1e_1 * r.s1e_1 + r.u1e_1);
  };
  protoOf(Companion_19).v1e = function (x, y, rotation, scaleX, scaleY, skewX, skewY, pivotX, pivotY) {
    // Inline function 'korlibs.math.geom.cos' call
    var angle = Angle__plus_impl_26v37k(rotation, skewY);
    var up = Companion_getInstance_28().a1d_1;
    var a = Angle__cosine_impl_bgvzun(angle, up) * scaleX + 0.0;
    // Inline function 'korlibs.math.geom.sin' call
    var angle_0 = Angle__plus_impl_26v37k(rotation, skewY);
    var up_0 = Companion_getInstance_28().a1d_1;
    var b = Angle__sine_impl_3l11xv(angle_0, up_0) * scaleX + 0.0;
    // Inline function 'korlibs.math.geom.sin' call
    var angle_1 = Angle__minus_impl_xeau7k(rotation, skewX);
    var up_1 = Companion_getInstance_28().a1d_1;
    var c = -Angle__sine_impl_3l11xv(angle_1, up_1) * scaleY + 0.0;
    // Inline function 'korlibs.math.geom.cos' call
    var angle_2 = Angle__minus_impl_xeau7k(rotation, skewX);
    var up_2 = Companion_getInstance_28().a1d_1;
    var d = Angle__cosine_impl_bgvzun(angle_2, up_2) * scaleY + 0.0;
    var tx;
    var ty;
    if (pivotX === 0.0 ? pivotY === 0.0 : false) {
      tx = x;
      ty = y;
    } else {
      tx = x - (pivotX * a + pivotY * c);
      ty = y - (pivotX * b + pivotY * d);
    }
    return new Matrix(a, b, c, d, tx, ty);
  };
  protoOf(Companion_19).w1e = function (a, b, c, d, tx, ty, p) {
    return new Vector2D(a * p.f18_1 + c * p.g18_1 + tx, d * p.g18_1 + b * p.f18_1 + ty);
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function Matrix(a, b, c, d, tx, ty) {
    Companion_getInstance_19();
    tx = tx === VOID ? 0.0 : tx;
    ty = ty === VOID ? 0.0 : ty;
    this.p1e_1 = a;
    this.q1e_1 = b;
    this.r1e_1 = c;
    this.s1e_1 = d;
    this.t1e_1 = tx;
    this.u1e_1 = ty;
  }
  protoOf(Matrix).x1e = function (other) {
    return Companion_getInstance_19().o1e(this, other);
  };
  protoOf(Matrix).t1d = function () {
    return isNaN_0(this.p1e_1);
  };
  protoOf(Matrix).y1e = function () {
    return !this.t1d();
  };
  protoOf(Matrix).z1e = function () {
    return ((((this.p1e_1 === 1.0 ? this.q1e_1 === 0.0 : false) ? this.r1e_1 === 0.0 : false) ? this.s1e_1 === 1.0 : false) ? this.t1e_1 === 0.0 : false) ? this.u1e_1 === 0.0 : false;
  };
  protoOf(Matrix).a1f = function (x, y) {
    return this.b1f(x, y);
  };
  protoOf(Matrix).c1f = function (x, y) {
    return this.d1f(x, y);
  };
  protoOf(Matrix).b1f = function (x, y) {
    return this.p1e_1 * x + this.r1e_1 * y + this.t1e_1;
  };
  protoOf(Matrix).d1f = function (x, y) {
    return this.s1e_1 * y + this.q1e_1 * x + this.u1e_1;
  };
  protoOf(Matrix).e1f = function (scale) {
    return new Matrix(this.p1e_1 * scale.f1f_1, this.q1e_1 * scale.f1f_1, this.r1e_1 * scale.g1f_1, this.s1e_1 * scale.g1f_1, this.t1e_1 * scale.f1f_1, this.u1e_1 * scale.g1f_1);
  };
  protoOf(Matrix).h1f = function (scaleX, scaleY) {
    return this.e1f(new Scale(scaleX, scaleY));
  };
  protoOf(Matrix).i1f = function (scaleX, scaleY, $super) {
    scaleY = scaleY === VOID ? scaleX : scaleY;
    return $super === VOID ? this.h1f(scaleX, scaleY) : $super.h1f.call(this, scaleX, scaleY);
  };
  protoOf(Matrix).j1f = function (scale) {
    return new Matrix(this.p1e_1 * scale.f1f_1, this.q1e_1 * scale.f1f_1, this.r1e_1 * scale.g1f_1, this.s1e_1 * scale.g1f_1, this.t1e_1, this.u1e_1);
  };
  protoOf(Matrix).k1f = function (scaleX, scaleY) {
    return this.j1f(new Scale(scaleX, scaleY));
  };
  protoOf(Matrix).l1f = function (scaleX, scaleY, $super) {
    scaleY = scaleY === VOID ? scaleX : scaleY;
    return $super === VOID ? this.k1f(scaleX, scaleY) : $super.k1f.call(this, scaleX, scaleY);
  };
  protoOf(Matrix).m1f = function (delta) {
    return new Matrix(this.p1e_1, this.q1e_1, this.r1e_1, this.s1e_1, this.t1e_1 + delta.f18_1, this.u1e_1 + delta.g18_1);
  };
  protoOf(Matrix).n1f = function (x, y) {
    return this.m1f(Vector2D_init_$Create$_0(x, y));
  };
  protoOf(Matrix).o1f = function (x, y) {
    return this.m1f(new Vector2D(x, y));
  };
  protoOf(Matrix).p1f = function (delta) {
    return new Matrix(this.p1e_1, this.q1e_1, this.r1e_1, this.s1e_1, this.t1e_1 + (this.p1e_1 * delta.f18_1 + this.r1e_1 * delta.g18_1), this.u1e_1 + (this.q1e_1 * delta.f18_1 + this.s1e_1 * delta.g18_1));
  };
  protoOf(Matrix).q1f = function (deltaX, deltaY) {
    return this.p1f(Vector2D_init_$Create$_0(deltaX, deltaY));
  };
  protoOf(Matrix).r1f = function (deltaX, deltaY) {
    return this.p1f(new Vector2D(deltaX, deltaY));
  };
  protoOf(Matrix).s1f = function () {
    if (this.t1d())
      return Companion_getInstance_19().k1e_1;
    var m = this;
    var norm = m.p1e_1 * m.s1e_1 - m.q1e_1 * m.r1e_1;
    var tmp;
    if (norm === 0.0) {
      tmp = new Matrix(0.0, 0.0, 0.0, 0.0, -m.t1e_1, -m.u1e_1);
    } else {
      var inorm = 1.0 / norm;
      var d = m.p1e_1 * inorm;
      var a = m.s1e_1 * inorm;
      var b = m.q1e_1 * -inorm;
      var c = m.r1e_1 * -inorm;
      tmp = new Matrix(a, b, c, d, -a * m.t1e_1 - c * m.u1e_1, -b * m.t1e_1 - d * m.u1e_1);
    }
    return tmp;
  };
  protoOf(Matrix).t1f = function () {
    return this.u1f();
  };
  protoOf(Matrix).u1f = function () {
    return Companion_getInstance_20().w1f(this);
  };
  protoOf(Matrix).toString = function () {
    return 'Matrix(' + get_niceStr(this.p1e_1) + ', ' + get_niceStr(this.q1e_1) + ', ' + get_niceStr(this.r1e_1) + ', ' + get_niceStr(this.s1e_1) + ', ' + get_niceStr(this.t1e_1) + ', ' + get_niceStr(this.u1e_1) + ')';
  };
  protoOf(Matrix).hashCode = function () {
    var result = getNumberHashCode(this.p1e_1);
    result = imul(result, 31) + getNumberHashCode(this.q1e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r1e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s1e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.t1e_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u1e_1) | 0;
    return result;
  };
  protoOf(Matrix).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Matrix))
      return false;
    var tmp0_other_with_cast = other instanceof Matrix ? other : THROW_CCE();
    if (!equals(this.p1e_1, tmp0_other_with_cast.p1e_1))
      return false;
    if (!equals(this.q1e_1, tmp0_other_with_cast.q1e_1))
      return false;
    if (!equals(this.r1e_1, tmp0_other_with_cast.r1e_1))
      return false;
    if (!equals(this.s1e_1, tmp0_other_with_cast.s1e_1))
      return false;
    if (!equals(this.t1e_1, tmp0_other_with_cast.t1e_1))
      return false;
    if (!equals(this.u1e_1, tmp0_other_with_cast.u1e_1))
      return false;
    return true;
  };
  function MatrixTransform_init_$Init$($this) {
    MatrixTransform.call($this, 0.0, 0.0, 1.0, 1.0, Companion_getInstance_15().o1c_1, Companion_getInstance_15().o1c_1, Companion_getInstance_15().o1c_1);
    return $this;
  }
  function MatrixTransform_init_$Create$() {
    return MatrixTransform_init_$Init$(objectCreate(protoOf(MatrixTransform)));
  }
  function Companion_20() {
    Companion_instance_20 = this;
    this.v1f_1 = new MatrixTransform(0.0, 0.0, 1.0, 1.0, Companion_getInstance_15().o1c_1, Companion_getInstance_15().o1c_1, Companion_getInstance_15().o1c_1);
  }
  protoOf(Companion_20).x1f = function (matrix, pivotX, pivotY) {
    var a = matrix.p1e_1;
    var b = matrix.q1e_1;
    var c = matrix.r1e_1;
    var d = matrix.s1e_1;
    // Inline function 'kotlin.math.atan2' call
    var y = -c;
    var skewX = -Math.atan2(y, d);
    // Inline function 'kotlin.math.atan2' call
    var skewY = Math.atan2(b, a);
    // Inline function 'kotlin.math.abs' call
    var x = skewX + skewY;
    var delta = Math.abs(x);
    var trotation;
    var tskewX;
    var tskewY;
    var tx;
    var ty;
    var tmp;
    if (delta < 0.001) {
      tmp = true;
    } else {
      // Inline function 'kotlin.math.abs' call
      var x_0 = get_PI() * 2 - delta;
      tmp = Math.abs(x_0) < 0.001;
    }
    if (tmp) {
      trotation = get_radians_0(skewY);
      tskewX = get_radians_0(0.0);
      tskewY = get_radians_0(0.0);
    } else {
      trotation = get_radians(0);
      tskewX = get_radians_0(skewX);
      tskewY = get_radians_0(skewY);
    }
    // Inline function 'kotlin.math.hypot' call
    var tscaleX = hypot(a, b);
    // Inline function 'kotlin.math.hypot' call
    var tscaleY = hypot(c, d);
    if (pivotX === 0.0 ? pivotY === 0.0 : false) {
      tx = matrix.t1e_1;
      ty = matrix.u1e_1;
    } else {
      tx = matrix.t1e_1 + (pivotX * a + pivotY * c);
      ty = matrix.u1e_1 + (pivotX * b + pivotY * d);
    }
    return new MatrixTransform(tx, ty, tscaleX, tscaleY, tskewX, tskewY, trotation);
  };
  protoOf(Companion_20).w1f = function (matrix, pivotX, pivotY, $super) {
    pivotX = pivotX === VOID ? 0.0 : pivotX;
    pivotY = pivotY === VOID ? 0.0 : pivotY;
    return $super === VOID ? this.x1f(matrix, pivotX, pivotY) : $super.x1f.call(this, matrix, pivotX, pivotY);
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function MatrixTransform(x, y, scaleX, scaleY, skewX, skewY, rotation) {
    Companion_getInstance_20();
    x = x === VOID ? 0.0 : x;
    y = y === VOID ? 0.0 : y;
    scaleX = scaleX === VOID ? 1.0 : scaleX;
    scaleY = scaleY === VOID ? 1.0 : scaleY;
    skewX = skewX === VOID ? Companion_getInstance_15().o1c_1 : skewX;
    skewY = skewY === VOID ? Companion_getInstance_15().o1c_1 : skewY;
    rotation = rotation === VOID ? Companion_getInstance_15().o1c_1 : rotation;
    this.y1f_1 = x;
    this.z1f_1 = y;
    this.a1g_1 = scaleX;
    this.b1g_1 = scaleY;
    this.c1g_1 = skewX;
    this.d1g_1 = skewY;
    this.e1g_1 = rotation;
  }
  protoOf(MatrixTransform).f1g = function () {
    return new Scale(this.a1g_1, this.b1g_1);
  };
  protoOf(MatrixTransform).toString = function () {
    return 'MatrixTransform(x=' + get_niceStr(this.y1f_1) + ', y=' + get_niceStr(this.z1f_1) + ', scaleX=' + this.a1g_1 + ', scaleY=' + this.b1g_1 + ', skewX=' + new Angle(this.c1g_1) + ', skewY=' + new Angle(this.d1g_1) + ', rotation=' + new Angle(this.e1g_1) + ')';
  };
  protoOf(MatrixTransform).hashCode = function () {
    var result = getNumberHashCode(this.y1f_1);
    result = imul(result, 31) + getNumberHashCode(this.z1f_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.a1g_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b1g_1) | 0;
    result = imul(result, 31) + Angle__hashCode_impl_szcndt(this.c1g_1) | 0;
    result = imul(result, 31) + Angle__hashCode_impl_szcndt(this.d1g_1) | 0;
    result = imul(result, 31) + Angle__hashCode_impl_szcndt(this.e1g_1) | 0;
    return result;
  };
  protoOf(MatrixTransform).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MatrixTransform))
      return false;
    var tmp0_other_with_cast = other instanceof MatrixTransform ? other : THROW_CCE();
    if (!equals(this.y1f_1, tmp0_other_with_cast.y1f_1))
      return false;
    if (!equals(this.z1f_1, tmp0_other_with_cast.z1f_1))
      return false;
    if (!equals(this.a1g_1, tmp0_other_with_cast.a1g_1))
      return false;
    if (!equals(this.b1g_1, tmp0_other_with_cast.b1g_1))
      return false;
    if (!equals(this.c1g_1, tmp0_other_with_cast.c1g_1))
      return false;
    if (!equals(this.d1g_1, tmp0_other_with_cast.d1g_1))
      return false;
    if (!equals(this.e1g_1, tmp0_other_with_cast.e1g_1))
      return false;
    return true;
  };
  function Matrix4_init_$Init$(v00, v10, v20, v30, v01, v11, v21, v31, v02, v12, v22, v32, v03, v13, v23, v33, $this) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([v00, v10, v20, v30, v01, v11, v21, v31, v02, v12, v22, v32, v03, v13, v23, v33]);
    Matrix4.call($this, tmp$ret$0);
    return $this;
  }
  function Matrix4_init_$Create$(v00, v10, v20, v30, v01, v11, v21, v31, v02, v12, v22, v32, v03, v13, v23, v33) {
    return Matrix4_init_$Init$(v00, v10, v20, v30, v01, v11, v21, v31, v02, v12, v22, v32, v03, v13, v23, v33, objectCreate(protoOf(Matrix4)));
  }
  function Matrix4_init_$Init$_0($this) {
    Matrix4_init_$Init$(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, $this);
    return $this;
  }
  function Matrix4_init_$Create$_0() {
    return Matrix4_init_$Init$_0(objectCreate(protoOf(Matrix4)));
  }
  function Companion_21() {
    Companion_instance_21 = this;
    this.g1g_1 = 0;
    this.h1g_1 = 1;
    this.i1g_1 = 2;
    this.j1g_1 = 3;
    this.k1g_1 = 4;
    this.l1g_1 = 5;
    this.m1g_1 = 6;
    this.n1g_1 = 7;
    this.o1g_1 = 8;
    this.p1g_1 = 9;
    this.q1g_1 = 10;
    this.r1g_1 = 11;
    this.s1g_1 = 12;
    this.t1g_1 = 13;
    this.u1g_1 = 14;
    this.v1g_1 = 15;
    this.w1g_1 = Matrix4_init_$Create$_0();
  }
  protoOf(Companion_21).x1g = function () {
    return Companion_getInstance_42().o1h_1;
  };
  protoOf(Companion_21).s1h = function (v00, v01, v02, v03, v10, v11, v12, v13, v20, v21, v22, v23, v30, v31, v32, v33) {
    return Matrix4_init_$Create$(v00, v10, v20, v30, v01, v11, v21, v31, v02, v12, v22, v32, v03, v13, v23, v33);
  };
  protoOf(Companion_21).t1h = function (l, r) {
    return Companion_getInstance_21().s1h(l.v1h() * r.v1h() + l.w1h() * r.x1h() + l.y1h() * r.z1h() + l.a1i() * r.b1i(), l.v1h() * r.w1h() + l.w1h() * r.c1i() + l.y1h() * r.d1i() + l.a1i() * r.e1i(), l.v1h() * r.y1h() + l.w1h() * r.f1i() + l.y1h() * r.g1i() + l.a1i() * r.h1i(), l.v1h() * r.a1i() + l.w1h() * r.i1i() + l.y1h() * r.j1i() + l.a1i() * r.k1i(), l.x1h() * r.v1h() + l.c1i() * r.x1h() + l.f1i() * r.z1h() + l.i1i() * r.b1i(), l.x1h() * r.w1h() + l.c1i() * r.c1i() + l.f1i() * r.d1i() + l.i1i() * r.e1i(), l.x1h() * r.y1h() + l.c1i() * r.f1i() + l.f1i() * r.g1i() + l.i1i() * r.h1i(), l.x1h() * r.a1i() + l.c1i() * r.i1i() + l.f1i() * r.j1i() + l.i1i() * r.k1i(), l.z1h() * r.v1h() + l.d1i() * r.x1h() + l.g1i() * r.z1h() + l.j1i() * r.b1i(), l.z1h() * r.w1h() + l.d1i() * r.c1i() + l.g1i() * r.d1i() + l.j1i() * r.e1i(), l.z1h() * r.y1h() + l.d1i() * r.f1i() + l.g1i() * r.g1i() + l.j1i() * r.h1i(), l.z1h() * r.a1i() + l.d1i() * r.i1i() + l.g1i() * r.j1i() + l.j1i() * r.k1i(), l.b1i() * r.v1h() + l.e1i() * r.x1h() + l.h1i() * r.z1h() + l.k1i() * r.b1i(), l.b1i() * r.w1h() + l.e1i() * r.c1i() + l.h1i() * r.d1i() + l.k1i() * r.e1i(), l.b1i() * r.y1h() + l.e1i() * r.f1i() + l.h1i() * r.g1i() + l.k1i() * r.h1i(), l.b1i() * r.a1i() + l.e1i() * r.i1i() + l.h1i() * r.j1i() + l.k1i() * r.k1i());
  };
  protoOf(Companion_21).l1i = function (left, right, bottom, top, near, far) {
    var sx = 2.0 / (right - left);
    var sy = 2.0 / (top - bottom);
    var sz = -2.0 / (far - near);
    var tx = -(right + left) / (right - left);
    var ty = -(top + bottom) / (top - bottom);
    var tz = -(far + near) / (far - near);
    return Companion_getInstance_21().s1h(sx, 0.0, 0.0, tx, 0.0, sy, 0.0, ty, 0.0, 0.0, sz, tz, 0.0, 0.0, 0.0, 1.0);
  };
  protoOf(Companion_21).m1i = function (left, right, bottom, top, near, far) {
    return this.l1i(left, right, bottom, top, near, far);
  };
  protoOf(Companion_21).n1i = function (rect, near, far) {
    return this.m1i(rect.o1i(), rect.p1i(), rect.q1i(), rect.r1i(), near, far);
  };
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function Matrix4(data) {
    Companion_getInstance_21();
    this.u1h_1 = data;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.u1h_1.length === 16)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(Matrix4).v1h = function () {
    return this.u1h_1[0];
  };
  protoOf(Matrix4).x1h = function () {
    return this.u1h_1[1];
  };
  protoOf(Matrix4).z1h = function () {
    return this.u1h_1[2];
  };
  protoOf(Matrix4).b1i = function () {
    return this.u1h_1[3];
  };
  protoOf(Matrix4).w1h = function () {
    return this.u1h_1[4];
  };
  protoOf(Matrix4).c1i = function () {
    return this.u1h_1[5];
  };
  protoOf(Matrix4).d1i = function () {
    return this.u1h_1[6];
  };
  protoOf(Matrix4).e1i = function () {
    return this.u1h_1[7];
  };
  protoOf(Matrix4).y1h = function () {
    return this.u1h_1[8];
  };
  protoOf(Matrix4).f1i = function () {
    return this.u1h_1[9];
  };
  protoOf(Matrix4).g1i = function () {
    return this.u1h_1[10];
  };
  protoOf(Matrix4).h1i = function () {
    return this.u1h_1[11];
  };
  protoOf(Matrix4).a1i = function () {
    return this.u1h_1[12];
  };
  protoOf(Matrix4).i1i = function () {
    return this.u1h_1[13];
  };
  protoOf(Matrix4).j1i = function () {
    return this.u1h_1[14];
  };
  protoOf(Matrix4).k1i = function () {
    return this.u1h_1[15];
  };
  protoOf(Matrix4).equals = function (other) {
    var tmp;
    if (other instanceof Matrix4) {
      tmp = contentEquals_1(this.u1h_1, other.u1h_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Matrix4).hashCode = function () {
    return contentHashCode_1(this.u1h_1);
  };
  protoOf(Matrix4).s1i = function (that) {
    return Companion_getInstance_21().t1h(this, that);
  };
  protoOf(Matrix4).hx = function (row, column) {
    if (!(0 <= column ? column <= 3 : false) ? true : !(0 <= row ? row <= 3 : false)) {
      // Inline function 'kotlin.error' call
      var message = 'Invalid index ' + row + ',' + column;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.u1h_1[imul(row, 4) + column | 0];
  };
  protoOf(Matrix4).t1i = function (index) {
    if (!(0 <= index ? index <= (this.u1h_1.length - 1 | 0) : false)) {
      // Inline function 'kotlin.error' call
      var message = 'Invalid index ' + index;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.u1h_1[index];
  };
  protoOf(Matrix4).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.math.geom.Matrix4.toString.<anonymous>' call
    this_0.f5('Matrix4(\n');
    var inductionVariable = 0;
    if (inductionVariable < 4)
      do {
        var row = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this_0.f5('  [ ');
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < 4)
          do {
            var col = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (!(col === 0)) {
              this_0.f5(', ');
            }
            var v = this.hx(row, col);
            // Inline function 'kotlin.math.floor' call
            if (Math.floor(v) === v) {
              this_0.q7(numberToInt(v));
            } else {
              this_0.s7(v);
            }
          }
           while (inductionVariable_0 < 4);
        this_0.f5(' ],\n');
      }
       while (inductionVariable < 4);
    this_0.f5(')');
    return this_0.toString();
  };
  var Orientation_CLOCK_WISE_instance;
  var Orientation_COUNTER_CLOCK_WISE_instance;
  var Orientation_COLLINEAR_instance;
  function Companion_22() {
    this.u1c_1 = 1.0E-7;
  }
  protoOf(Companion_22).v1c = function (up) {
    // Inline function 'kotlin.check' call
    var tmp;
    if (up.f18_1 === 0.0) {
      // Inline function 'kotlin.math.absoluteValue' call
      var this_0 = up.g18_1;
      tmp = Math.abs(this_0) === 1.0;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'korlibs.math.geom.Companion.checkValidUpVector.<anonymous>' call
      var message = 'up vector only supports (0, -1) and (0, +1) for now';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    return Companion_instance_22;
  }
  var Orientation_entriesInitialized;
  function Orientation_initEntries() {
    if (Orientation_entriesInitialized)
      return Unit_instance;
    Orientation_entriesInitialized = true;
    Orientation_CLOCK_WISE_instance = new Orientation('CLOCK_WISE', 0, 1);
    Orientation_COUNTER_CLOCK_WISE_instance = new Orientation('COUNTER_CLOCK_WISE', 1, -1);
    Orientation_COLLINEAR_instance = new Orientation('COLLINEAR', 2, 0);
  }
  function Orientation(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.w1i_1 = value;
  }
  function Companion_23() {
    Companion_instance_23 = this;
    this.f1d_1 = Companion_getInstance_23().x1i(0, 0, 0, 0);
    var tmp = this;
    var tmp_0 = Companion_getInstance_23();
    tmp.g1d_1 = tmp_0.y1i(-Infinity, -Infinity, Infinity, Infinity);
    var tmp_1 = this;
    var tmp_2 = Companion_getInstance_23();
    tmp_1.h1d_1 = tmp_2.y1i(NaN, NaN, 0.0, 0.0);
  }
  protoOf(Companion_23).i1d = function () {
    return this.h1d_1;
  };
  protoOf(Companion_23).n1e = function () {
    return this.f1d_1;
  };
  protoOf(Companion_23).o1d = function (p, s) {
    return new RectangleD(p.f18_1, p.g18_1, s.z1i_1, s.a1j_1);
  };
  protoOf(Companion_23).x1i = function (x, y, width, height) {
    return Companion_getInstance_23().o1d(Vector2D_init_$Create$_0(x, y), Size2D_init_$Create$_1(width, height));
  };
  protoOf(Companion_23).y1i = function (x, y, width, height) {
    return Companion_getInstance_23().o1d(Vector2D_init_$Create$(x, y), Size2D_init_$Create$_0(width, height));
  };
  protoOf(Companion_23).b1j = function (left, top, right, bottom) {
    return new RectangleD(left, top, right - left, bottom - top);
  };
  protoOf(Companion_23).c1j = function (left, top, right, bottom) {
    return this.b1j(left, top, right, bottom);
  };
  protoOf(Companion_23).n1d = function (point1, point2) {
    var tmp = Companion_getInstance_23();
    // Inline function 'korlibs.math.geom.Vector2D.minus' call
    var tmp$ret$0 = new Vector2D(point2.f18_1 - point1.f18_1, point2.g18_1 - point1.g18_1);
    return tmp.o1d(point1, toSize(tmp$ret$0));
  };
  protoOf(Companion_23).d1j = function (a, b) {
    return ((a.p1d_1 >= b.p1d_1 ? a.q1d_1 >= b.q1d_1 : false) ? a.p1d_1 + a.r1d_1 <= b.p1d_1 + b.r1d_1 : false) ? a.q1d_1 + a.s1d_1 <= b.q1d_1 + b.s1d_1 : false;
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function RectangleD(x, y, width, height) {
    Companion_getInstance_23();
    this.p1d_1 = x;
    this.q1d_1 = y;
    this.r1d_1 = width;
    this.s1d_1 = height;
  }
  protoOf(RectangleD).l = function () {
    return new Size2D(this.r1d_1, this.s1d_1);
  };
  protoOf(RectangleD).e1j = function () {
    return isNaN_0(this.p1d_1);
  };
  protoOf(RectangleD).t1d = function () {
    return this.e1j();
  };
  protoOf(RectangleD).y1e = function () {
    return !this.t1d();
  };
  protoOf(RectangleD).toString = function () {
    return this.t1d() ? 'null' : 'Rectangle(x=' + get_niceStr(this.p1d_1) + ', y=' + get_niceStr(this.q1d_1) + ', width=' + get_niceStr(this.r1d_1) + ', height=' + get_niceStr(this.s1d_1) + ')';
  };
  protoOf(RectangleD).f1j = function (that) {
    return this.g1j(that.f18_1, that.g18_1);
  };
  protoOf(RectangleD).g1j = function (x, y) {
    return (x >= this.o1i() ? x < this.p1i() : false) ? y >= this.r1i() ? y < this.q1i() : false : false;
  };
  protoOf(RectangleD).o1i = function () {
    return this.p1d_1;
  };
  protoOf(RectangleD).r1i = function () {
    return this.q1d_1;
  };
  protoOf(RectangleD).p1i = function () {
    return this.p1d_1 + this.r1d_1;
  };
  protoOf(RectangleD).q1i = function () {
    return this.q1d_1 + this.s1d_1;
  };
  protoOf(RectangleD).u1d = function () {
    return new Vector2D(this.o1i(), this.r1i());
  };
  protoOf(RectangleD).h1j = function () {
    return new Vector2D(this.p1i(), this.r1i());
  };
  protoOf(RectangleD).i1j = function () {
    return new Vector2D(this.o1i(), this.q1i());
  };
  protoOf(RectangleD).w1d = function () {
    return new Vector2D(this.p1i(), this.q1i());
  };
  protoOf(RectangleD).j1j = function () {
    return (this.p1i() + this.o1i()) * 0.5;
  };
  protoOf(RectangleD).k1j = function () {
    return (this.q1i() + this.r1i()) * 0.5;
  };
  protoOf(RectangleD).l1j = function () {
    return new Vector2D(this.j1j(), this.k1j());
  };
  protoOf(RectangleD).m1j = function () {
    var centerX = this.j1j();
    var centerY = this.k1j();
    return new Circle(this.l1j(), Companion_getInstance_28().n1j(centerX, centerY, this.p1i(), this.r1i()));
  };
  protoOf(RectangleD).o1j = function (that) {
    return this.q1j(that) ? this.p1j(that) : false;
  };
  protoOf(RectangleD).q1j = function (that) {
    return that.o1i() <= this.p1i() ? that.p1i() >= this.o1i() : false;
  };
  protoOf(RectangleD).p1j = function (that) {
    return that.r1i() <= this.q1i() ? that.q1i() >= this.r1i() : false;
  };
  protoOf(RectangleD).r1j = function (that) {
    var tmp;
    if (this.o1j(that)) {
      // Inline function 'kotlin.math.max' call
      var a = this.o1i();
      var b = that.o1i();
      var tmp_0 = Math.max(a, b);
      // Inline function 'kotlin.math.max' call
      var a_0 = this.r1i();
      var b_0 = that.r1i();
      var tmp_1 = Math.max(a_0, b_0);
      // Inline function 'kotlin.math.min' call
      var a_1 = this.p1i();
      var b_1 = that.p1i();
      var tmp_2 = Math.min(a_1, b_1);
      // Inline function 'kotlin.math.min' call
      var a_2 = this.q1i();
      var b_2 = that.q1i();
      var tmp$ret$3 = Math.min(a_2, b_2);
      tmp = new RectangleD(tmp_0, tmp_1, tmp_2, tmp$ret$3);
    } else {
      tmp = Companion_getInstance_23().i1d();
    }
    return tmp;
  };
  protoOf(RectangleD).qa = function () {
    return new RectangleI(numberToInt(this.p1d_1), numberToInt(this.q1d_1), numberToInt(this.r1d_1), numberToInt(this.s1d_1));
  };
  protoOf(RectangleD).s1j = function (border) {
    return Companion_getInstance_23().b1j(this.o1i() - border.g1e_1, this.r1i() - border.d1e_1, this.p1i() + border.e1e_1, this.q1i() + border.f1e_1);
  };
  protoOf(RectangleD).m1f = function (delta) {
    return this.t1j(this.p1d_1 + delta.f18_1, this.q1d_1 + delta.g18_1);
  };
  protoOf(RectangleD).u1j = function (m) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'korlibs.math.geom.Matrix.transform' call
      var p = this.u1d();
      if (m.t1d()) {
        tmp$ret$0 = p;
        break $l$block;
      }
      tmp$ret$0 = new Vector2D(m.b1f(p.f18_1, p.g18_1), m.d1f(p.f18_1, p.g18_1));
    }
    var tl = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'korlibs.math.geom.Matrix.transform' call
      var p_0 = this.h1j();
      if (m.t1d()) {
        tmp$ret$1 = p_0;
        break $l$block_0;
      }
      tmp$ret$1 = new Vector2D(m.b1f(p_0.f18_1, p_0.g18_1), m.d1f(p_0.f18_1, p_0.g18_1));
    }
    var tr = tmp$ret$1;
    var tmp$ret$2;
    $l$block_1: {
      // Inline function 'korlibs.math.geom.Matrix.transform' call
      var p_1 = this.i1j();
      if (m.t1d()) {
        tmp$ret$2 = p_1;
        break $l$block_1;
      }
      tmp$ret$2 = new Vector2D(m.b1f(p_1.f18_1, p_1.g18_1), m.d1f(p_1.f18_1, p_1.g18_1));
    }
    var bl = tmp$ret$2;
    var tmp$ret$3;
    $l$block_2: {
      // Inline function 'korlibs.math.geom.Matrix.transform' call
      var p_2 = this.w1d();
      if (m.t1d()) {
        tmp$ret$3 = p_2;
        break $l$block_2;
      }
      tmp$ret$3 = new Vector2D(m.b1f(p_2.f18_1, p_2.g18_1), m.d1f(p_2.f18_1, p_2.g18_1));
    }
    var br = tmp$ret$3;
    var min = Companion_getInstance_28().l1d(tl, tr, bl, br);
    var max = Companion_getInstance_28().m1d(tl, tr, bl, br);
    return Companion_getInstance_23().n1d(min, max);
  };
  protoOf(RectangleD).v1j = function () {
    return Companion_getInstance_23().n1d(Companion_getInstance_28().v1d(this.u1d(), this.w1d()), Companion_getInstance_28().x1d(this.u1d(), this.w1d()));
  };
  protoOf(RectangleD).w1j = function (x, y, width, height) {
    return new RectangleD(x, y, width, height);
  };
  protoOf(RectangleD).t1j = function (x, y, width, height, $super) {
    x = x === VOID ? this.p1d_1 : x;
    y = y === VOID ? this.q1d_1 : y;
    width = width === VOID ? this.r1d_1 : width;
    height = height === VOID ? this.s1d_1 : height;
    return $super === VOID ? this.w1j(x, y, width, height) : $super.w1j.call(this, x, y, width, height);
  };
  protoOf(RectangleD).hashCode = function () {
    var result = getNumberHashCode(this.p1d_1);
    result = imul(result, 31) + getNumberHashCode(this.q1d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r1d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s1d_1) | 0;
    return result;
  };
  protoOf(RectangleD).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RectangleD))
      return false;
    var tmp0_other_with_cast = other instanceof RectangleD ? other : THROW_CCE();
    if (!equals(this.p1d_1, tmp0_other_with_cast.p1d_1))
      return false;
    if (!equals(this.q1d_1, tmp0_other_with_cast.q1d_1))
      return false;
    if (!equals(this.r1d_1, tmp0_other_with_cast.r1d_1))
      return false;
    if (!equals(this.s1d_1, tmp0_other_with_cast.s1d_1))
      return false;
    return true;
  };
  function RectangleI_init_$Init$($this) {
    RectangleI_init_$Init$_0(Vector2I_init_$Create$(), SizeInt_init_$Create$(), $this);
    return $this;
  }
  function RectangleI_init_$Create$() {
    return RectangleI_init_$Init$(objectCreate(protoOf(RectangleI)));
  }
  function RectangleI_init_$Init$_0(position, size, $this) {
    RectangleI.call($this, position.x1j_1, position.y1j_1, size.z1j_1, size.a1k_1);
    return $this;
  }
  function RectangleI_init_$Create$_0(position, size) {
    return RectangleI_init_$Init$_0(position, size, objectCreate(protoOf(RectangleI)));
  }
  function Companion_24() {
  }
  protoOf(Companion_24).b1k = function (a, b) {
    // Inline function 'kotlin.math.min' call
    var a_0 = a.o1i();
    var b_0 = b.o1i();
    var tmp = Math.min(a_0, b_0);
    // Inline function 'kotlin.math.min' call
    var a_1 = a.r1i();
    var b_1 = b.r1i();
    var tmp_0 = Math.min(a_1, b_1);
    // Inline function 'kotlin.math.max' call
    var a_2 = a.p1i();
    var b_2 = b.p1i();
    var tmp_1 = Math.max(a_2, b_2);
    // Inline function 'kotlin.math.max' call
    var a_3 = a.q1i();
    var b_3 = b.q1i();
    var tmp$ret$3 = Math.max(a_3, b_3);
    return this.c1j(tmp, tmp_0, tmp_1, tmp$ret$3);
  };
  protoOf(Companion_24).g1k = function (topLeft, bottomRight) {
    return RectangleI_init_$Create$_0(topLeft, toSize_0(bottomRight.h1k(topLeft)));
  };
  protoOf(Companion_24).c1j = function (left, top, right, bottom) {
    return this.g1k(new Vector2I(left, top), new Vector2I(right, bottom));
  };
  var Companion_instance_24;
  function Companion_getInstance_24() {
    return Companion_instance_24;
  }
  function RectangleI(x, y, width, height) {
    this.c1k_1 = x;
    this.d1k_1 = y;
    this.e1k_1 = width;
    this.f1k_1 = height;
  }
  protoOf(RectangleI).i1k = function () {
    return imul(this.e1k_1, this.f1k_1);
  };
  protoOf(RectangleI).o1i = function () {
    return this.c1k_1;
  };
  protoOf(RectangleI).r1i = function () {
    return this.d1k_1;
  };
  protoOf(RectangleI).p1i = function () {
    return this.c1k_1 + this.e1k_1 | 0;
  };
  protoOf(RectangleI).q1i = function () {
    return this.d1k_1 + this.f1k_1 | 0;
  };
  protoOf(RectangleI).j1k = function (left, top, right, bottom, clamped) {
    var left_0 = !clamped ? left : coerceIn(left, 0, this.e1k_1);
    var right_0 = !clamped ? right : coerceIn(right, 0, this.e1k_1);
    var top_0 = !clamped ? top : coerceIn(top, 0, this.f1k_1);
    var bottom_0 = !clamped ? bottom : coerceIn(bottom, 0, this.f1k_1);
    return Companion_instance_24.c1j(this.c1k_1 + left_0 | 0, this.d1k_1 + top_0 | 0, this.c1k_1 + right_0 | 0, this.d1k_1 + bottom_0 | 0);
  };
  protoOf(RectangleI).s1j = function (border) {
    return Companion_instance_24.c1j(this.o1i() - border.g1e_1 | 0, this.r1i() - border.d1e_1 | 0, this.p1i() + border.e1e_1 | 0, this.q1i() + border.f1e_1 | 0);
  };
  protoOf(RectangleI).toString = function () {
    return 'Rectangle(x=' + this.c1k_1 + ', y=' + this.d1k_1 + ', width=' + this.e1k_1 + ', height=' + this.f1k_1 + ')';
  };
  protoOf(RectangleI).hashCode = function () {
    var result = this.c1k_1;
    result = imul(result, 31) + this.d1k_1 | 0;
    result = imul(result, 31) + this.e1k_1 | 0;
    result = imul(result, 31) + this.f1k_1 | 0;
    return result;
  };
  protoOf(RectangleI).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RectangleI))
      return false;
    var tmp0_other_with_cast = other instanceof RectangleI ? other : THROW_CCE();
    if (!(this.c1k_1 === tmp0_other_with_cast.c1k_1))
      return false;
    if (!(this.d1k_1 === tmp0_other_with_cast.d1k_1))
      return false;
    if (!(this.e1k_1 === tmp0_other_with_cast.e1k_1))
      return false;
    if (!(this.f1k_1 === tmp0_other_with_cast.f1k_1))
      return false;
    return true;
  };
  function place(_this__u8e3s4, item, anchor, scale) {
    var outSize = scale.m1k(item, _this__u8e3s4.l());
    var p = times(_this__u8e3s4.l().n1k(outSize), anchor);
    return Companion_getInstance_23().o1d(p, outSize);
  }
  function Companion_25() {
    Companion_instance_25 = this;
    this.o1k_1 = Scale_init_$Create$_1(1.0, 1.0);
  }
  var Companion_instance_25;
  function Companion_getInstance_25() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function Scale_init_$Init$($this) {
    Scale_init_$Init$_2(1.0, 1.0, $this);
    return $this;
  }
  function Scale_init_$Create$() {
    return Scale_init_$Init$(objectCreate(protoOf(Scale)));
  }
  function Scale_init_$Init$_0(scale, $this) {
    Scale.call($this, scale, scale);
    return $this;
  }
  function Scale_init_$Init$_1(scale, $this) {
    Scale_init_$Init$_0(scale, $this);
    return $this;
  }
  function Scale_init_$Create$_0(scale) {
    return Scale_init_$Init$_1(scale, objectCreate(protoOf(Scale)));
  }
  function Scale_init_$Init$_2(scaleX, scaleY, $this) {
    Scale.call($this, scaleX, scaleY);
    return $this;
  }
  function Scale_init_$Create$_1(scaleX, scaleY) {
    return Scale_init_$Init$_2(scaleX, scaleY, objectCreate(protoOf(Scale)));
  }
  function Scale(scaleX, scaleY) {
    Companion_getInstance_25();
    this.f1f_1 = scaleX;
    this.g1f_1 = scaleY;
  }
  protoOf(Scale).p1k = function () {
    return this.f1f_1 * 0.5 + this.g1f_1 * 0.5;
  };
  protoOf(Scale).toString = function () {
    return 'Scale(scaleX=' + this.f1f_1 + ', scaleY=' + this.g1f_1 + ')';
  };
  protoOf(Scale).hashCode = function () {
    var result = getNumberHashCode(this.f1f_1);
    result = imul(result, 31) + getNumberHashCode(this.g1f_1) | 0;
    return result;
  };
  protoOf(Scale).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scale))
      return false;
    var tmp0_other_with_cast = other instanceof Scale ? other : THROW_CCE();
    if (!equals(this.f1f_1, tmp0_other_with_cast.f1f_1))
      return false;
    if (!equals(this.g1f_1, tmp0_other_with_cast.g1f_1))
      return false;
    return true;
  };
  function toVector2(_this__u8e3s4) {
    return new Vector2D(_this__u8e3s4.f1f_1, _this__u8e3s4.g1f_1);
  }
  function ScaleMode$Companion$COVER$lambda(i, c) {
    return i.s1k(toVector2(c.q1k(i)).r1k());
  }
  function ScaleMode$Companion$SHOW_ALL$lambda(i, c) {
    return i.s1k(toVector2(c.q1k(i)).t1k());
  }
  function ScaleMode$Companion$EXACT$lambda(i, c) {
    return c;
  }
  function ScaleMode$Companion$NO_SCALE$lambda(i, c) {
    return i;
  }
  function Companion_26() {
    Companion_instance_26 = this;
    var tmp = this;
    tmp.u1k_1 = new ScaleMode('COVER', ScaleMode$Companion$COVER$lambda);
    var tmp_0 = this;
    tmp_0.v1k_1 = new ScaleMode('SHOW_ALL', ScaleMode$Companion$SHOW_ALL$lambda);
    var tmp_1 = this;
    tmp_1.w1k_1 = new ScaleMode('EXACT', ScaleMode$Companion$EXACT$lambda);
    var tmp_2 = this;
    tmp_2.x1k_1 = new ScaleMode('NO_SCALE', ScaleMode$Companion$NO_SCALE$lambda);
  }
  protoOf(Companion_26).y1k = function () {
    return this.w1k_1;
  };
  var Companion_instance_26;
  function Companion_getInstance_26() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function ScaleMode(name, transform) {
    Companion_getInstance_26();
    name = name === VOID ? null : name;
    this.k1k_1 = name;
    this.l1k_1 = transform;
  }
  protoOf(ScaleMode).toString = function () {
    return 'ScaleMode(' + this.k1k_1 + ')';
  };
  protoOf(ScaleMode).m1k = function (item, container) {
    return this.l1k_1(item, container);
  };
  protoOf(ScaleMode).z1k = function (item, container) {
    return toInt(this.l1k_1(toFloat(item), toFloat(container)));
  };
  function Companion_27() {
    Companion_instance_27 = this;
    this.a1l_1 = new Size2D(0.0, 0.0);
  }
  var Companion_instance_27;
  function Companion_getInstance_27() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function Size2D_init_$Init$($this) {
    Size2D.call($this, 0.0, 0.0);
    return $this;
  }
  function Size2D_init_$Create$() {
    return Size2D_init_$Init$(objectCreate(protoOf(Size2D)));
  }
  function Size2D_init_$Init$_0(width, height, $this) {
    Size2D.call($this, width, height);
    return $this;
  }
  function Size2D_init_$Create$_0(width, height) {
    return Size2D_init_$Init$_0(width, height, objectCreate(protoOf(Size2D)));
  }
  function Size2D_init_$Init$_1(width, height, $this) {
    Size2D.call($this, width, height);
    return $this;
  }
  function Size2D_init_$Create$_1(width, height) {
    return Size2D_init_$Init$_1(width, height, objectCreate(protoOf(Size2D)));
  }
  function Size2D(width, height) {
    Companion_getInstance_27();
    this.z1i_1 = width;
    this.a1j_1 = height;
  }
  protoOf(Size2D).n1k = function (other) {
    return new Size2D(this.z1i_1 - other.z1i_1, this.a1j_1 - other.a1j_1);
  };
  protoOf(Size2D).b1l = function (s) {
    return new Size2D(this.z1i_1 * s, this.a1j_1 * s);
  };
  protoOf(Size2D).s1k = function (s) {
    return this.b1l(s);
  };
  protoOf(Size2D).q1k = function (other) {
    return new Scale(this.z1i_1 / other.z1i_1, this.a1j_1 / other.a1j_1);
  };
  protoOf(Size2D).toString = function () {
    return 'Size(width=' + get_niceStr(this.z1i_1) + ', height=' + get_niceStr(this.a1j_1) + ')';
  };
  protoOf(Size2D).re = function () {
    return this.z1i_1;
  };
  protoOf(Size2D).se = function () {
    return this.a1j_1;
  };
  protoOf(Size2D).hashCode = function () {
    var result = getNumberHashCode(this.z1i_1);
    result = imul(result, 31) + getNumberHashCode(this.a1j_1) | 0;
    return result;
  };
  protoOf(Size2D).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Size2D))
      return false;
    var tmp0_other_with_cast = other instanceof Size2D ? other : THROW_CCE();
    if (!equals(this.z1i_1, tmp0_other_with_cast.z1i_1))
      return false;
    if (!equals(this.a1j_1, tmp0_other_with_cast.a1j_1))
      return false;
    return true;
  };
  function SizeInt_init_$Init$($this) {
    SizeInt.call($this, 0, 0);
    return $this;
  }
  function SizeInt_init_$Create$() {
    return SizeInt_init_$Init$(objectCreate(protoOf(SizeInt)));
  }
  function SizeInt(width, height) {
    this.z1j_1 = width;
    this.a1k_1 = height;
  }
  protoOf(SizeInt).toString = function () {
    return '' + this.z1j_1 + 'x' + this.a1k_1;
  };
  protoOf(SizeInt).hashCode = function () {
    var result = this.z1j_1;
    result = imul(result, 31) + this.a1k_1 | 0;
    return result;
  };
  protoOf(SizeInt).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SizeInt))
      return false;
    var tmp0_other_with_cast = other instanceof SizeInt ? other : THROW_CCE();
    if (!(this.z1j_1 === tmp0_other_with_cast.z1j_1))
      return false;
    if (!(this.a1k_1 === tmp0_other_with_cast.a1k_1))
      return false;
    return true;
  };
  function toSize(_this__u8e3s4) {
    return new Size2D(_this__u8e3s4.f18_1, _this__u8e3s4.g18_1);
  }
  function toSize_0(_this__u8e3s4) {
    return new SizeInt(_this__u8e3s4.x1j_1, _this__u8e3s4.y1j_1);
  }
  function toInt(_this__u8e3s4) {
    return new SizeInt(numberToInt(_this__u8e3s4.z1i_1), numberToInt(_this__u8e3s4.a1j_1));
  }
  function toFloat(_this__u8e3s4) {
    return Size2D_init_$Create$_0(_this__u8e3s4.z1j_1, _this__u8e3s4.a1k_1);
  }
  function toVector(_this__u8e3s4) {
    return new Vector2D(_this__u8e3s4.z1i_1, _this__u8e3s4.a1j_1);
  }
  function Vector2D_init_$Init$(x, y, $this) {
    Vector2D.call($this, x, y);
    return $this;
  }
  function Vector2D_init_$Create$(x, y) {
    return Vector2D_init_$Init$(x, y, objectCreate(protoOf(Vector2D)));
  }
  function Vector2D_init_$Init$_0(x, y, $this) {
    Vector2D.call($this, x, y);
    return $this;
  }
  function Vector2D_init_$Create$_0(x, y) {
    return Vector2D_init_$Init$_0(x, y, objectCreate(protoOf(Vector2D)));
  }
  function Vector2D_init_$Init$_1($this) {
    Vector2D.call($this, 0.0, 0.0);
    return $this;
  }
  function Vector2D_init_$Create$_1() {
    return Vector2D_init_$Init$_1(objectCreate(protoOf(Vector2D)));
  }
  function Companion_28() {
    Companion_instance_28 = this;
    this.w1c_1 = new Vector2D(0.0, 0.0);
    var tmp = this;
    tmp.x1c_1 = new Vector2D(NaN, NaN);
    this.y1c_1 = new Vector2D(-1.0, 0.0);
    this.z1c_1 = new Vector2D(1.0, 0.0);
    this.a1d_1 = new Vector2D(0.0, 1.0);
    this.b1d_1 = new Vector2D(0.0, -1.0);
    this.c1d_1 = new Vector2D(0.0, -1.0);
    this.d1d_1 = new Vector2D(0.0, 1.0);
  }
  protoOf(Companion_28).n1j = function (x1, y1, x2, y2) {
    // Inline function 'kotlin.math.hypot' call
    var x = x1 - x2;
    var y = y1 - y2;
    return hypot(x, y);
  };
  protoOf(Companion_28).c1l = function (x1, y1, x2, y2) {
    // Inline function 'kotlin.math.hypot' call
    var x = x1 - x2;
    var y = y1 - y2;
    return hypot(x, y);
  };
  protoOf(Companion_28).d1l = function (a, b) {
    return this.n1j(a.f18_1, a.g18_1, b.f18_1, b.g18_1);
  };
  protoOf(Companion_28).v1d = function (p1, p2) {
    // Inline function 'kotlin.math.min' call
    var a = p1.f18_1;
    var b = p2.f18_1;
    var tmp = Math.min(a, b);
    // Inline function 'kotlin.math.min' call
    var a_0 = p1.g18_1;
    var b_0 = p2.g18_1;
    var tmp$ret$1 = Math.min(a_0, b_0);
    return new Vector2D(tmp, tmp$ret$1);
  };
  protoOf(Companion_28).l1d = function (p1, p2, p3, p4) {
    return new Vector2D(min(p1.f18_1, p2.f18_1, p3.f18_1, p4.f18_1), min(p1.g18_1, p2.g18_1, p3.g18_1, p4.g18_1));
  };
  protoOf(Companion_28).x1d = function (p1, p2) {
    // Inline function 'kotlin.math.max' call
    var a = p1.f18_1;
    var b = p2.f18_1;
    var tmp = Math.max(a, b);
    // Inline function 'kotlin.math.max' call
    var a_0 = p1.g18_1;
    var b_0 = p2.g18_1;
    var tmp$ret$1 = Math.max(a_0, b_0);
    return new Vector2D(tmp, tmp$ret$1);
  };
  protoOf(Companion_28).m1d = function (p1, p2, p3, p4) {
    return new Vector2D(max(p1.f18_1, p2.f18_1, p3.f18_1, p4.f18_1), max(p1.g18_1, p2.g18_1, p3.g18_1, p4.g18_1));
  };
  var Companion_instance_28;
  function Companion_getInstance_28() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function Vector2D(x, y) {
    Companion_getInstance_28();
    this.f18_1 = x;
    this.g18_1 = y;
  }
  protoOf(Vector2D).t1k = function () {
    // Inline function 'kotlin.math.min' call
    var a = this.f18_1;
    var b = this.g18_1;
    return Math.min(a, b);
  };
  protoOf(Vector2D).r1k = function () {
    // Inline function 'kotlin.math.max' call
    var a = this.f18_1;
    var b = this.g18_1;
    return Math.max(a, b);
  };
  protoOf(Vector2D).e1l = function (x, y) {
    // Inline function 'kotlin.math.hypot' call
    var x_0 = x - this.f18_1;
    var y_0 = y - this.g18_1;
    return hypot(x_0, y_0);
  };
  protoOf(Vector2D).f1l = function (that) {
    return this.e1l(that.f18_1, that.g18_1);
  };
  protoOf(Vector2D).g1l = function (m) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'korlibs.math.geom.Matrix.transform' call
      if (m.t1d()) {
        tmp$ret$0 = this;
        break $l$block;
      }
      tmp$ret$0 = new Vector2D(m.b1f(this.f18_1, this.g18_1), m.d1f(this.f18_1, this.g18_1));
    }
    return tmp$ret$0.f18_1;
  };
  protoOf(Vector2D).h1l = function (m) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'korlibs.math.geom.Matrix.transform' call
      if (m.t1d()) {
        tmp$ret$0 = this;
        break $l$block;
      }
      tmp$ret$0 = new Vector2D(m.b1f(this.f18_1, this.g18_1), m.d1f(this.f18_1, this.g18_1));
    }
    return tmp$ret$0.g18_1;
  };
  protoOf(Vector2D).a = function () {
    // Inline function 'kotlin.math.hypot' call
    var x = this.f18_1;
    var y = this.g18_1;
    return hypot(x, y);
  };
  protoOf(Vector2D).i1l = function () {
    var x = this.f18_1;
    var y = this.g18_1;
    return x * x + y * y;
  };
  protoOf(Vector2D).j1l = function () {
    // Inline function 'kotlin.math.hypot' call
    var x = this.f18_1;
    var y = this.g18_1;
    return hypot(x, y);
  };
  protoOf(Vector2D).k1l = function () {
    // Inline function 'korlibs.math.geom.Vector2D.times' call
    var scale = 1.0 / this.j1l();
    return new Vector2D(this.f18_1 * scale, this.g18_1 * scale);
  };
  protoOf(Vector2D).l1l = function () {
    return new Vector2D(-this.g18_1, this.f18_1);
  };
  protoOf(Vector2D).m1l = function () {
    return '(' + get_niceStr(this.f18_1) + ', ' + get_niceStr(this.g18_1) + ')';
  };
  protoOf(Vector2D).toString = function () {
    return this.m1l();
  };
  protoOf(Vector2D).re = function () {
    return this.f18_1;
  };
  protoOf(Vector2D).se = function () {
    return this.g18_1;
  };
  protoOf(Vector2D).hashCode = function () {
    var result = getNumberHashCode(this.f18_1);
    result = imul(result, 31) + getNumberHashCode(this.g18_1) | 0;
    return result;
  };
  protoOf(Vector2D).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Vector2D))
      return false;
    var tmp0_other_with_cast = other instanceof Vector2D ? other : THROW_CCE();
    if (!equals(this.f18_1, tmp0_other_with_cast.f18_1))
      return false;
    if (!equals(this.g18_1, tmp0_other_with_cast.g18_1))
      return false;
    return true;
  };
  function Companion_29() {
    Companion_instance_29 = this;
    this.n1l_1 = new Vector2I(0, 0);
  }
  var Companion_instance_29;
  function Companion_getInstance_29() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function Vector2I_init_$Init$($this) {
    Vector2I.call($this, 0, 0);
    return $this;
  }
  function Vector2I_init_$Create$() {
    return Vector2I_init_$Init$(objectCreate(protoOf(Vector2I)));
  }
  function Vector2I(x, y) {
    Companion_getInstance_29();
    this.x1j_1 = x;
    this.y1j_1 = y;
  }
  protoOf(Vector2I).h1k = function (that) {
    return new Vector2I(this.x1j_1 - that.x1j_1 | 0, this.y1j_1 - that.y1j_1 | 0);
  };
  protoOf(Vector2I).toString = function () {
    return '(' + this.x1j_1 + ', ' + this.y1j_1 + ')';
  };
  protoOf(Vector2I).hashCode = function () {
    var result = this.x1j_1;
    result = imul(result, 31) + this.y1j_1 | 0;
    return result;
  };
  protoOf(Vector2I).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Vector2I))
      return false;
    var tmp0_other_with_cast = other instanceof Vector2I ? other : THROW_CCE();
    if (!(this.x1j_1 === tmp0_other_with_cast.x1j_1))
      return false;
    if (!(this.y1j_1 === tmp0_other_with_cast.y1j_1))
      return false;
    return true;
  };
  function PointList() {
  }
  function Companion_30() {
  }
  var Companion_instance_30;
  function Companion_getInstance_30() {
    return Companion_instance_30;
  }
  function index_0($this, index, offset) {
    return imul(index, 2) + offset | 0;
  }
  function PointArrayList(capacity) {
    capacity = capacity === VOID ? 7 : capacity;
    this.r1l_1 = new Mixin();
    this.s1l_1 = false;
    this.t1l_1 = new DoubleArrayList(imul(capacity, 2));
  }
  protoOf(PointArrayList).u14 = function (_set____db54di) {
    this.r1l_1.u14(_set____db54di);
  };
  protoOf(PointArrayList).v14 = function () {
    return this.r1l_1.v14();
  };
  protoOf(PointArrayList).l = function () {
    return this.t1l_1.l() / 2 | 0;
  };
  protoOf(PointArrayList).hx = function (index, dim) {
    return this.t1l_1.gx(index_0(this, index, dim));
  };
  protoOf(PointArrayList).o1l = function (index) {
    return this.t1l_1.gx(index_0(this, index, 1));
  };
  protoOf(PointArrayList).b1 = function (index) {
    var i = index_0(this, index, 0);
    return new Vector2D(this.t1l_1.gx(i), this.t1l_1.gx(i + 1 | 0));
  };
  protoOf(PointArrayList).r1b = function () {
    this.t1l_1.n2();
    return this;
  };
  protoOf(PointArrayList).u1l = function (x, y) {
    this.t1l_1.px(x, y);
    return this;
  };
  protoOf(PointArrayList).v1l = function (p) {
    return this.u1l(p.f18_1, p.g18_1);
  };
  protoOf(PointArrayList).equals = function (other) {
    var tmp;
    if (other instanceof PointArrayList) {
      tmp = this.t1l_1.equals(other.t1l_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PointArrayList).hashCode = function () {
    return this.t1l_1.hashCode();
  };
  protoOf(PointArrayList).toString = function () {
    var sb = StringBuilder_init_$Create$_0();
    sb.g5(_Char___init__impl__6a9atx(91));
    var inductionVariable = 0;
    var last = this.l();
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_container = this.b1(n);
        var x = tmp1_container.re();
        var y = tmp1_container.se();
        if (!(n === 0)) {
          sb.f5(', ');
        }
        sb.g5(_Char___init__impl__6a9atx(40));
        if (x === round(x)) {
          sb.q7(numberToInt(x));
        } else {
          sb.t7(x);
        }
        sb.f5(', ');
        if (y === round(y)) {
          sb.q7(numberToInt(y));
        } else {
          sb.t7(y);
        }
        sb.g5(_Char___init__impl__6a9atx(41));
      }
       while (inductionVariable < last);
    sb.g5(_Char___init__impl__6a9atx(93));
    return sb.toString();
  };
  function pointArrayListOf(p0, p1) {
    return (new PointArrayList(2)).v1l(p0).v1l(p1);
  }
  function pointArrayListOf_0(p0, p1, p2, p3) {
    return (new PointArrayList(4)).v1l(p0).v1l(p1).v1l(p2).v1l(p3);
  }
  function Bezier$Extrema$allt$delegate$lambda(this$0) {
    return function () {
      return combineSmallDistinctSorted(Companion_getInstance_31(), this$0.w1l_1, this$0.x1l_1);
    };
  }
  function Bezier$Extrema$xt01$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.doubleArrayOf' call
      return primitiveArrayConcat([new Float64Array([0.0]), this$0.w1l_1, new Float64Array([1.0])]);
    };
  }
  function Bezier$Extrema$yt01$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.doubleArrayOf' call
      return primitiveArrayConcat([new Float64Array([0.0]), this$0.x1l_1, new Float64Array([1.0])]);
    };
  }
  function angle($this, o, v1, v2) {
    var dx1 = v1.f18_1 - o.f18_1;
    var dy1 = v1.g18_1 - o.g18_1;
    var dx2 = v2.f18_1 - o.f18_1;
    var dy2 = v2.g18_1 - o.g18_1;
    var cross = dx1 * dy2 - dy1 * dx2;
    var dot = dx1 * dx2 + dy1 * dy2;
    // Inline function 'kotlin.math.atan2' call
    return Math.atan2(cross, dot);
  }
  function compute($this, t, points) {
    var p = points;
    var order = p.l() - 1 | 0;
    if (equals(t, Companion_getInstance_12().z17_1))
      return p.b1(0);
    if (equals(t, Companion_getInstance_12().c18_1))
      return p.b1(order);
    if (order === 0)
      return p.b1(0);
    var mt = Ratio__toDouble_impl_o7epze(Ratio__minus_impl_s1uwyg(Companion_getInstance_12().c18_1, t));
    var mt2 = mt * mt;
    var t2 = Ratio__toDouble_impl_o7epze(Ratio__times_impl_ucdh7y(t, t));
    var tmp;
    switch (order) {
      case 1:
        // Inline function 'korlibs.math.geom.Vector2D.plus' call

        // Inline function 'korlibs.math.geom.Vector2D.times' call

        var this_0 = p.b1(0);
        var this_1 = new Vector2D(this_0.f18_1 * mt, this_0.g18_1 * mt);
        // Inline function 'korlibs.math.geom.Vector2D.times' call

        var this_2 = p.b1(1);
        var scale = Ratio__toDouble_impl_o7epze(t);
        var that = new Vector2D(this_2.f18_1 * scale, this_2.g18_1 * scale);
        tmp = new Vector2D(this_1.f18_1 + that.f18_1, this_1.g18_1 + that.g18_1);
        break;
      case 2:
        var a = mt2;
        // Inline function 'korlibs.math.interpolation.times' call

        var b = mt * _Ratio___get_value__impl__57cli6(t) * 2;
        var c = t2;
        // Inline function 'korlibs.math.geom.Vector2D.plus' call

        // Inline function 'korlibs.math.geom.Vector2D.plus' call

        // Inline function 'korlibs.math.geom.Vector2D.times' call

        var this_3 = p.b1(0);
        var this_4 = new Vector2D(this_3.f18_1 * a, this_3.g18_1 * a);
        // Inline function 'korlibs.math.geom.Vector2D.times' call

        var this_5 = p.b1(1);
        var that_0 = new Vector2D(this_5.f18_1 * b, this_5.g18_1 * b);
        var this_6 = new Vector2D(this_4.f18_1 + that_0.f18_1, this_4.g18_1 + that_0.g18_1);
        // Inline function 'korlibs.math.geom.Vector2D.times' call

        var this_7 = p.b1(2);
        var that_1 = new Vector2D(this_7.f18_1 * c, this_7.g18_1 * c);
        tmp = new Vector2D(this_6.f18_1 + that_1.f18_1, this_6.g18_1 + that_1.g18_1);
        break;
      case 3:
        var a_0 = mt2 * mt;
        // Inline function 'korlibs.math.interpolation.times' call

        var b_0 = mt2 * _Ratio___get_value__impl__57cli6(t) * 3;
        var c_0 = mt * t2 * 3;
        var d = Ratio__times_impl_ucdh7y_0(t, t2);
        // Inline function 'korlibs.math.geom.Vector2D.plus' call

        // Inline function 'korlibs.math.geom.Vector2D.plus' call

        // Inline function 'korlibs.math.geom.Vector2D.plus' call

        // Inline function 'korlibs.math.geom.Vector2D.times' call

        var this_8 = p.b1(0);
        var this_9 = new Vector2D(this_8.f18_1 * a_0, this_8.g18_1 * a_0);
        // Inline function 'korlibs.math.geom.Vector2D.times' call

        var this_10 = p.b1(1);
        var that_2 = new Vector2D(this_10.f18_1 * b_0, this_10.g18_1 * b_0);
        var this_11 = new Vector2D(this_9.f18_1 + that_2.f18_1, this_9.g18_1 + that_2.g18_1);
        // Inline function 'korlibs.math.geom.Vector2D.times' call

        var this_12 = p.b1(2);
        var that_3 = new Vector2D(this_12.f18_1 * c_0, this_12.g18_1 * c_0);
        var this_13 = new Vector2D(this_11.f18_1 + that_3.f18_1, this_11.g18_1 + that_3.g18_1);
        // Inline function 'korlibs.math.geom.Vector2D.times' call

        var this_14 = p.b1(3);
        var that_4 = new Vector2D(this_14.f18_1 * d, this_14.g18_1 * d);
        tmp = new Vector2D(this_13.f18_1 + that_4.f18_1, this_13.g18_1 + that_4.g18_1);
        break;
      default:
        var reason = 'higher order curves';
        throw new NotImplementedError('An operation is not implemented: ' + reason);
    }
    return tmp;
  }
  function derive($this, points) {
    // Inline function 'kotlin.collections.arrayListOf' call
    var out = ArrayList_init_$Create$_0();
    var current = points;
    while (current.l() >= 2) {
      var new_0 = new PointArrayList(current.l() - 1 | 0);
      var c = current.l() - 1 | 0;
      var inductionVariable = 0;
      var last = current.l() - 1 | 0;
      if (inductionVariable < last)
        do {
          var n = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'korlibs.math.geom.Vector2D.times' call
          // Inline function 'korlibs.math.geom.Vector2D.minus' call
          var this_0 = current.b1(n + 1 | 0);
          var that = current.b1(n);
          var this_1 = new Vector2D(this_0.f18_1 - that.f18_1, this_0.g18_1 - that.g18_1);
          var tmp$ret$2 = new Vector2D(this_1.f18_1 * c, this_1.g18_1 * c);
          new_0.v1l(tmp$ret$2);
        }
         while (inductionVariable < last);
      out.p(new_0);
      current = new_0;
    }
    return out;
  }
  function align($this, points, line, out) {
    var p1 = line.a1e_1;
    var p2 = line.b1e_1;
    var tx = p1.f18_1;
    var ty = p1.g18_1;
    // Inline function 'kotlin.math.atan2' call
    var y = p2.g18_1 - ty;
    var x = p2.f18_1 - tx;
    var a = -Math.atan2(y, x);
    // Inline function 'korlibs.math.geom.fastForEach' call
    var inductionVariable = 0;
    var last = points.l();
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'korlibs.math.geom.bezier.Companion.align.<anonymous>' call
        var name_for_destructuring_parameter_0_fjsvno = points.b1(n);
        var x_0 = name_for_destructuring_parameter_0_fjsvno.re();
        var y_0 = name_for_destructuring_parameter_0_fjsvno.se();
        var tmp = x_0 - tx;
        // Inline function 'kotlin.math.cos' call
        var tmp_0 = tmp * Math.cos(a);
        var tmp_1 = y_0 - ty;
        // Inline function 'kotlin.math.sin' call
        var tmp_2 = tmp_0 - tmp_1 * Math.sin(a);
        var tmp_3 = x_0 - tx;
        // Inline function 'kotlin.math.sin' call
        var tmp_4 = tmp_3 * Math.sin(a);
        var tmp_5 = y_0 - ty;
        // Inline function 'kotlin.math.cos' call
        var tmp$ret$4 = Math.cos(a);
        out.u1l(tmp_2, tmp_4 + tmp_5 * tmp$ret$4);
      }
       while (inductionVariable < last);
    return out;
  }
  function align$default($this, points, line, out, $super) {
    out = out === VOID ? new PointArrayList() : out;
    return align($this, points, line, out);
  }
  function droots($this, p) {
    switch (p.length) {
      case 3:
        var a = p[0];
        var b = p[1];
        var c = p[2];
        var d = a - 2 * b + c;
        if (!(d === 0.0)) {
          // Inline function 'kotlin.math.sqrt' call
          var x = b * b - a * c;
          var m1 = -Math.sqrt(x);
          var m2 = -a + b;
          var v1 = -(m1 + m2) / d;
          var v2 = -(-m1 + m2) / d;
          return doubleArrayOfValid01$default($this, v1, v2);
        } else if (!(b === c) ? d === 0.0 : false) {
          return doubleArrayOfValid01$default($this, (2.0 * b - c) / (2.0 * (b - c)));
        }

        break;
      case 2:
        var a_0 = p[0];
        var b_0 = p[1];
        if (!(a_0 === b_0))
          return doubleArrayOfValid01$default($this, a_0 / (a_0 - b_0));
        break;
      default:
        break;
    }
    return doubleArrayOfValid01$default($this);
  }
  function doubleArrayOfValid01($this, v1, v2, v3) {
    var v1Valid = 0.0 <= v1 ? v1 <= 1.0 : false;
    var v2Valid = 0.0 <= v2 ? v2 <= 1.0 : false;
    var v3Valid = 0.0 <= v3 ? v3 <= 1.0 : false;
    var validCount = 0;
    if (v1Valid) {
      validCount = validCount + 1 | 0;
    }
    if (v2Valid) {
      validCount = validCount + 1 | 0;
    }
    if (v3Valid) {
      validCount = validCount + 1 | 0;
    }
    if (validCount === 0)
      return $this.f1m_1;
    var index = 0;
    var out = new Float64Array(validCount);
    if (v1Valid) {
      var tmp3 = index;
      index = tmp3 + 1 | 0;
      out[tmp3] = normalizeZero(v1);
    }
    if (v2Valid) {
      var tmp4 = index;
      index = tmp4 + 1 | 0;
      out[tmp4] = normalizeZero(v2);
    }
    if (v3Valid) {
      var tmp5 = index;
      index = tmp5 + 1 | 0;
      out[tmp5] = normalizeZero(v3);
    }
    return out;
  }
  function doubleArrayOfValid01$default($this, v1, v2, v3, $super) {
    var tmp;
    if (v1 === VOID) {
      tmp = NaN;
    } else {
      tmp = v1;
    }
    v1 = tmp;
    var tmp_0;
    if (v2 === VOID) {
      tmp_0 = NaN;
    } else {
      tmp_0 = v2;
    }
    v2 = tmp_0;
    var tmp_1;
    if (v3 === VOID) {
      tmp_1 = NaN;
    } else {
      tmp_1 = v3;
    }
    v3 = tmp_1;
    return doubleArrayOfValid01($this, v1, v2, v3);
  }
  function combineSmallDistinctSorted($this, a, b) {
    var out = new DoubleArrayList(a.length + b.length | 0);
    out.sx(a);
    // Inline function 'korlibs.datastructure.iterators.fastForEach' call
    var n = 0;
    while (n < b.length) {
      // Inline function 'korlibs.math.geom.bezier.Companion.combineSmallDistinctSorted.<anonymous>' call
      var tmp0 = n;
      n = tmp0 + 1 | 0;
      var it = b[tmp0];
      if (!out.ux(it)) {
        out.ox(it);
      }
    }
    sort(out);
    return out.wx();
  }
  function Bezier_init_$Init$($this) {
    Bezier_init_$Init$_0(Vector2D_init_$Create$(0.0, 0.0), Vector2D_init_$Create$(0.0, 0.0), $this);
    return $this;
  }
  function Bezier_init_$Create$() {
    return Bezier_init_$Init$(objectCreate(protoOf(Bezier)));
  }
  function Bezier_init_$Init$_0(p0, p1, $this) {
    Bezier.call($this, pointArrayListOf(p0, p1), Unit_instance);
    return $this;
  }
  function Bezier_init_$Init$_1(p0, p1, p2, p3, $this) {
    Bezier.call($this, pointArrayListOf_0(p0, p1, p2, p3), Unit_instance);
    return $this;
  }
  function Bezier_init_$Create$_0(p0, p1, p2, p3) {
    return Bezier_init_$Init$_1(p0, p1, p2, p3, objectCreate(protoOf(Bezier)));
  }
  function _get_aligned__7fjidv($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.u18_1;
    aligned$factory();
    return this_0.p3();
  }
  function _getBoundingBox($this, m) {
    var xmin = 0.0;
    var ymin = 0.0;
    var xmax = 0.0;
    var ymax = 0.0;
    var inductionVariable = 0;
    if (inductionVariable <= 1)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ext = $this.g1m().h1m(n);
        var min = Infinity;
        var max = -Infinity;
        // Inline function 'korlibs.datastructure.iterators.fastForEach' call
        var n_0 = 0;
        while (n_0 < ext.length) {
          // Inline function 'korlibs.math.geom.bezier.Bezier._getBoundingBox.<anonymous>' call
          var tmp0 = n_0;
          n_0 = tmp0 + 1 | 0;
          var t = ext[tmp0];
          var p = $this.i1m(_Ratio___init__impl__9mwvn2(t));
          var value = n === 0 ? p.g1l(m) : p.h1l(m);
          // Inline function 'kotlin.math.min' call
          var a = min;
          min = Math.min(a, value);
          // Inline function 'kotlin.math.max' call
          var a_0 = max;
          max = Math.max(a_0, value);
        }
        if (n === 0) {
          xmin = min;
          xmax = max;
        } else {
          ymin = min;
          ymax = max;
        }
      }
       while (inductionVariable <= 1);
    return Companion_getInstance_23().b1j(xmin, ymin, xmax, ymax);
  }
  function Extrema(xt, yt) {
    this.w1l_1 = xt;
    this.x1l_1 = yt;
    var tmp = this;
    tmp.y1l_1 = lazy_0(Bezier$Extrema$allt$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.z1l_1 = lazy_0(Bezier$Extrema$xt01$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.a1m_1 = lazy_0(Bezier$Extrema$yt01$delegate$lambda(this));
  }
  protoOf(Extrema).j1m = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.z1l_1;
    xt01$factory();
    return this_0.p3();
  };
  protoOf(Extrema).k1m = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.a1m_1;
    yt01$factory();
    return this_0.p3();
  };
  protoOf(Extrema).h1m = function (index) {
    return index === 0 ? this.j1m() : this.k1m();
  };
  protoOf(Extrema).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof Extrema) {
      tmp_0 = contentEquals_2(this.w1l_1, other.w1l_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = contentEquals_2(this.x1l_1, other.x1l_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Extrema).hashCode = function () {
    return contentHashCode_2(this.w1l_1) + imul(contentHashCode_2(this.x1l_1), 7) | 0;
  };
  protoOf(Extrema).toString = function () {
    return 'Extrema(x=' + contentToString(this.w1l_1) + ', y=' + contentToString(this.x1l_1) + ')';
  };
  function Companion_31() {
    Companion_instance_31 = this;
    var tmp = this;
    // Inline function 'kotlin.doubleArrayOf' call
    tmp.b1m_1 = new Float64Array([-0.06405689286260563, 0.06405689286260563, -0.1911188674736163, 0.1911188674736163, -0.3150426796961634, 0.3150426796961634, -0.4337935076260451, 0.4337935076260451, -0.5454214713888396, 0.5454214713888396, -0.6480936519369755, 0.6480936519369755, -0.7401241915785544, 0.7401241915785544, -0.820001985973903, 0.820001985973903, -0.8864155270044011, 0.8864155270044011, -0.9382745520027328, 0.9382745520027328, -0.9747285559713095, 0.9747285559713095, -0.9951872199970213, 0.9951872199970213]);
    var tmp_0 = this;
    // Inline function 'kotlin.doubleArrayOf' call
    tmp_0.c1m_1 = new Float64Array([0.12793819534675216, 0.12793819534675216, 0.1258374563468283, 0.1258374563468283, 0.12167047292780339, 0.12167047292780339, 0.1155056680537256, 0.1155056680537256, 0.10744427011596563, 0.10744427011596563, 0.09761865210411388, 0.09761865210411388, 0.08619016153195327, 0.08619016153195327, 0.0733464814110803, 0.0733464814110803, 0.05929858491543678, 0.05929858491543678, 0.04427743881741981, 0.04427743881741981, 0.028531388628933663, 0.028531388628933663, 0.0123412297999872, 0.0123412297999872]);
    this.d1m_1 = 6.283185307179586;
    this.e1m_1 = Line2D_init_$Create$_0(0, 0, 1, 0);
    this.f1m_1 = new Float64Array(0);
  }
  protoOf(Companion_31).l1m = function (p0, p1, p2, p3, t) {
    var out;
    // Inline function 'korlibs.math.geom.bezier.Companion.cubicCalc' call
    var x0 = p0.f18_1;
    var y0 = p0.g18_1;
    var x1 = p1.f18_1;
    var y1 = p1.g18_1;
    var x2 = p2.f18_1;
    var y2 = p2.g18_1;
    // Inline function 'kotlin.contracts.contract' call
    var cx = 3.0 * (x1 - x0);
    var bx = 3.0 * (x2 - x1) - cx;
    var ax = p3.f18_1 - x0 - cx - bx;
    var cy = 3.0 * (y1 - y0);
    var by = 3.0 * (y2 - y1) - cy;
    var ay = p3.g18_1 - y0 - cy - by;
    var tSquared = Ratio__times_impl_ucdh7y(t, t);
    var tCubed = Ratio__times_impl_ucdh7y(tSquared, t);
    // Inline function 'korlibs.math.interpolation.times' call
    var tmp = ax * _Ratio___get_value__impl__57cli6(tCubed);
    // Inline function 'korlibs.math.interpolation.times' call
    var tmp_0 = tmp + bx * _Ratio___get_value__impl__57cli6(tSquared);
    // Inline function 'korlibs.math.interpolation.times' call
    var x = tmp_0 + cx * _Ratio___get_value__impl__57cli6(t) + x0;
    // Inline function 'korlibs.math.interpolation.times' call
    var tmp_1 = ay * _Ratio___get_value__impl__57cli6(tCubed);
    // Inline function 'korlibs.math.interpolation.times' call
    var tmp_2 = tmp_1 + by * _Ratio___get_value__impl__57cli6(tSquared);
    // Inline function 'korlibs.math.interpolation.times' call
    var y = tmp_2 + cy * _Ratio___get_value__impl__57cli6(t) + y0;
    out = new Vector2D(x, y);
    return out;
  };
  protoOf(Companion_31).m1m = function (p, c, a, t) {
    var out;
    // Inline function 'korlibs.math.geom.bezier.Companion.quadCalc' call
    var x0 = p.f18_1;
    var y0 = p.g18_1;
    var xc = c.f18_1;
    var yc = c.g18_1;
    var x1 = a.f18_1;
    var y1 = a.g18_1;
    // Inline function 'kotlin.contracts.contract' call
    var t1 = 1 - Ratio__toDouble_impl_o7epze(t);
    var a_0 = t1 * t1;
    var c_0 = Ratio__times_impl_ucdh7y(t, t);
    // Inline function 'korlibs.math.interpolation.times' call
    var b = 2 * t1 * _Ratio___get_value__impl__57cli6(t);
    var x = a_0 * x0 + b * xc + Ratio__times_impl_ucdh7y_0(c_0, x1);
    var y = a_0 * y0 + b * yc + Ratio__times_impl_ucdh7y_0(c_0, y1);
    out = new Vector2D(x, y);
    return out;
  };
  var Companion_instance_31;
  function Companion_getInstance_31() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function Bezier$aligned$delegate$lambda(this$0) {
    return function () {
      return align$default(Companion_getInstance_31(), this$0.t18_1, new Line2D(this$0.t18_1.wy(), this$0.t18_1.xy()));
    };
  }
  function Bezier$dpoints$delegate$lambda(this$0) {
    return function () {
      return derive(Companion_getInstance_31(), this$0.t18_1);
    };
  }
  function Bezier$direction$delegate$lambda(this$0) {
    return function () {
      // Inline function 'korlibs.math.geom.Companion.between' call
      Companion_getInstance_15();
      var p0 = this$0.t18_1.b1(0);
      var p1 = this$0.t18_1.b1(this$0.n1m());
      var up = this$0.t18_1.b1(1);
      // Inline function 'korlibs.math.geom.Companion.between' call
      var x0 = p0.f18_1;
      var y0 = p0.g18_1;
      var x1 = p1.f18_1;
      var y1 = p1.g18_1;
      var tmp$ret$1 = Angle_between(x0, y0, x1, y1, up);
      return new Angle(tmp$ret$1);
    };
  }
  function Bezier$extrema$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.collections.map' call
      var this_0 = until(0, this$0.o1m());
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.s();
      while (tmp0_iterator.t()) {
        var item = tmp0_iterator.u();
        // Inline function 'korlibs.math.geom.bezier.Bezier.extrema$delegate.<anonymous>.<anonymous>' call
        var tmp = Companion_getInstance_31();
        // Inline function 'korlibs.datastructure.mapDouble' call
        var this_1 = this$0.p1m().b1(0).q1l(item);
        // Inline function 'kotlin.also' call
        var this_2 = new Float64Array(this_1.length);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'korlibs.datastructure.mapDouble.<anonymous>' call
        var inductionVariable = 0;
        var last = this_1.length;
        if (inductionVariable < last)
          do {
            var n = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'korlibs.math.geom.bezier.Bezier.extrema$delegate.<anonymous>.<anonymous>.<anonymous>' call
            this_2[n] = this_1[n];
          }
           while (inductionVariable < last);
        var out = droots(tmp, this_2);
        if (this$0.n1m() === 3)
          out = combineSmallDistinctSorted(Companion_getInstance_31(), out, droots(Companion_getInstance_31(), this$0.p1m().b1(1).q1l(item)));
        var tmp$ret$3 = out;
        destination.p(tmp$ret$3);
      }
      var out_0 = destination;
      return new Extrema(out_0.b1(0), out_0.b1(1));
    };
  }
  function Bezier$outerCircle$delegate$lambda(this$0) {
    return function () {
      return this$0.q1m().m1j();
    };
  }
  function Bezier$boundingBox$delegate$lambda(this$0) {
    return function () {
      return _getBoundingBox(this$0, Companion_getInstance_19().l1e_1);
    };
  }
  function Bezier$length$delegate$lambda(this$0) {
    return function () {
      var z = 0.5;
      var sum = 0.0;
      var inductionVariable = 0;
      var last = Companion_getInstance_31().b1m_1.length - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var t = _Ratio___init__impl__9mwvn2(z * Companion_getInstance_31().b1m_1[i] + z);
          var temp = this$0.r1m(t);
          sum = sum + Companion_getInstance_31().c1m_1[i] * temp.a();
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return z * sum;
    };
  }
  function Bezier$lut$delegate$lambda(this$0) {
    return function () {
      return this$0.s1m();
    };
  }
  function Bezier$isLinear$delegate$lambda(this$0) {
    return function () {
      // Inline function 'korlibs.math.geom.Vector2D.minus' call
      var this_0 = this$0.t18_1.b1(this$0.n1m());
      var that = this$0.t18_1.b1(0);
      var baseLength = (new Vector2D(this_0.f18_1 - that.f18_1, this_0.g18_1 - that.g18_1)).a();
      // Inline function 'korlibs.datastructure.sumOfDouble' call
      var sum = 0.0;
      var tmp0_iterator = until(0, _get_aligned__7fjidv(this$0).l()).s();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.u();
        var tmp = sum;
        // Inline function 'korlibs.math.geom.bezier.Bezier.isLinear$delegate.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.math.absoluteValue' call
        var this_1 = _get_aligned__7fjidv(this$0).o1l(element);
        sum = tmp + Math.abs(this_1);
      }
      return sum < baseLength / 50.0;
    };
  }
  function Bezier$isSimple$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.n1m() === 3) {
        var a1 = angle(Companion_getInstance_31(), this$0.t18_1.b1(0), this$0.t18_1.b1(3), this$0.t18_1.b1(1));
        var a2 = angle(Companion_getInstance_31(), this$0.t18_1.b1(0), this$0.t18_1.b1(3), this$0.t18_1.b1(2));
        var tmp_0;
        if ((a1 > 0.0 ? a2 < 0.0 : false) ? true : a1 < 0.0 ? a2 > 0.0 : false) {
          return false;
        }
        tmp = tmp_0;
      }
      var n1 = this$0.t1m(Companion_getInstance_12().z17_1);
      var n2 = this$0.t1m(Companion_getInstance_12().c18_1);
      var s = n1.f18_1 * n2.f18_1 + n1.g18_1 * n2.g18_1;
      // Inline function 'kotlin.math.abs' call
      // Inline function 'kotlin.math.acos' call
      var x = Math.acos(s);
      return Math.abs(x) < get_PI() / 3.0;
    };
  }
  function Bezier(points, dummy) {
    Companion_getInstance_31();
    this.t18_1 = points;
    if (this.t18_1.l() > 4) {
      // Inline function 'kotlin.error' call
      var message = 'Only supports quad and cubic beziers';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp = this;
    tmp.u18_1 = lazy_0(Bezier$aligned$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.v18_1 = lazy_0(Bezier$dpoints$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.w18_1 = lazy_0(Bezier$direction$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.x18_1 = lazy_0(Bezier$extrema$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.y18_1 = lazy_0(Bezier$outerCircle$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.z18_1 = lazy_0(Bezier$boundingBox$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.a19_1 = lazy_0(Bezier$length$delegate$lambda(this));
    var tmp_6 = this;
    tmp_6.b19_1 = lazy_0(Bezier$lut$delegate$lambda(this));
    var tmp_7 = this;
    tmp_7.c19_1 = lazy_0(Bezier$isLinear$delegate$lambda(this));
    var tmp_8 = this;
    tmp_8.d19_1 = lazy_0(Bezier$isSimple$delegate$lambda(this));
  }
  protoOf(Bezier).i1m = function (t) {
    return this.u1m(t);
  };
  protoOf(Bezier).e19 = function (t) {
    return this.u1m(t);
  };
  protoOf(Bezier).equals = function (other) {
    var tmp;
    if (other instanceof Bezier) {
      tmp = equals(this.t18_1, other.t18_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Bezier).hashCode = function () {
    return hashCode(this.t18_1);
  };
  protoOf(Bezier).toString = function () {
    return 'Bezier(' + this.t18_1 + ')';
  };
  protoOf(Bezier).o1m = function () {
    return 2;
  };
  protoOf(Bezier).n1m = function () {
    return this.t18_1.l() - 1 | 0;
  };
  protoOf(Bezier).p1m = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.v18_1;
    dpoints$factory();
    return this_0.p3();
  };
  protoOf(Bezier).g1m = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.x18_1;
    extrema$factory();
    return this_0.p3();
  };
  protoOf(Bezier).q1m = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.z18_1;
    boundingBox$factory();
    return this_0.p3();
  };
  protoOf(Bezier).v1m = function (steps, out) {
    out.n2();
    // Inline function 'korlibs.math.interpolation.Companion.forEachRatio' call
    Companion_getInstance_12();
    var NS = (steps + 1 | 0) - 1 | 0;
    var NSd = NS;
    var start = true ? 0 : 1;
    var end = true ? NS : NS - 1 | 0;
    var inductionVariable = start;
    if (inductionVariable <= end)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ratio = n / NSd;
        // Inline function 'korlibs.math.geom.bezier.Bezier.getLUT.<anonymous>' call
        var t = toRatio(ratio);
        out.a1n(t, this.u1m(t));
      }
       while (!(n === end));
    return out;
  };
  protoOf(Bezier).s1m = function (steps, out, $super) {
    steps = steps === VOID ? 100 : steps;
    out = out === VOID ? CurveLUT_init_$Create$(this, steps + 1 | 0) : out;
    return $super === VOID ? this.v1m(steps, out) : $super.v1m.call(this, steps, out);
  };
  protoOf(Bezier).u1m = function (t) {
    return compute(Companion_getInstance_31(), t, this.t18_1);
  };
  protoOf(Bezier).b1n = function (t, normalize) {
    var out = compute(Companion_getInstance_31(), t, this.p1m().b1(0));
    if ((equals(t, Companion_getInstance_12().z17_1) ? true : equals(t, Companion_getInstance_12().c18_1)) ? isAlmostZero(out.i1l()) : false) {
      var inductionVariable = 0;
      if (inductionVariable < 10)
        $l$loop: do {
          var n = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.math.pow' call
          var n_0 = -(10 - n | 0) | 0;
          var newT = Math.pow(10.0, n_0);
          var nt = equals(t, Companion_getInstance_12().c18_1) ? 1.0 - newT : newT;
          out = compute(Companion_getInstance_31(), _Ratio___init__impl__9mwvn2(nt), this.p1m().b1(0));
          if (!isAlmostZero(out.i1l()))
            break $l$loop;
        }
         while (inductionVariable < 10);
    }
    if (normalize)
      out = out.k1l();
    return out;
  };
  protoOf(Bezier).r1m = function (t, normalize, $super) {
    normalize = normalize === VOID ? false : normalize;
    return $super === VOID ? this.b1n(t, normalize) : $super.b1n.call(this, new Ratio(t), normalize);
  };
  protoOf(Bezier).c1n = function (t, normalize) {
    return this.b1n(t, normalize).l1l();
  };
  protoOf(Bezier).t1m = function (t) {
    return this.c1n(t, true);
  };
  function CurveLUT_init_$Init$(curve, capacity, $this) {
    CurveLUT.call($this, curve, new PointArrayList(capacity), new DoubleArrayList(capacity), new DoubleArrayList(capacity));
    return $this;
  }
  function CurveLUT_init_$Create$(curve, capacity) {
    return CurveLUT_init_$Init$(curve, capacity, objectCreate(protoOf(CurveLUT)));
  }
  function CurveLUT$toString$lambda(this$0) {
    return function (it) {
      return '' + this$0.y1m_1.b1(it) + ',len=' + this$0.d1n().b1(it) + ': ' + this$0.x1m_1.b1(it);
    };
  }
  function CurveLUT(curve, points, ts, _estimatedLengths) {
    this.w1m_1 = curve;
    this.x1m_1 = points;
    this.y1m_1 = ts;
    this.z1m_1 = _estimatedLengths;
  }
  protoOf(CurveLUT).d1n = function () {
    if (this.z1m_1.x()) {
      this.z1m_1.ox(0.0);
    }
    while (this.z1m_1.l() < this.l()) {
      var pos = this.z1m_1.l();
      var prev = last(this.z1m_1);
      this.z1m_1.ox(prev + Companion_getInstance_28().d1l(this.x1m_1.b1(pos - 1 | 0), this.x1m_1.b1(pos)));
    }
    return this.z1m_1;
  };
  protoOf(CurveLUT).l = function () {
    return this.x1m_1.l();
  };
  protoOf(CurveLUT).n2 = function () {
    this.x1m_1.r1b();
    this.y1m_1.n2();
    this.z1m_1.n2();
  };
  protoOf(CurveLUT).a1n = function (t, p) {
    this.x1m_1.v1l(p);
    this.y1m_1.ox(Ratio__toDouble_impl_o7epze(t));
  };
  protoOf(CurveLUT).toString = function () {
    var tmp = until(0, this.l());
    return 'CurveLUT[' + this.w1m_1 + '](' + joinToString(tmp, ', ', VOID, VOID, VOID, VOID, CurveLUT$toString$lambda(this)) + ')';
  };
  protoOf(CurveLUT).hashCode = function () {
    var result = hashCode(this.w1m_1);
    result = imul(result, 31) + this.x1m_1.hashCode() | 0;
    result = imul(result, 31) + this.y1m_1.hashCode() | 0;
    result = imul(result, 31) + this.z1m_1.hashCode() | 0;
    return result;
  };
  protoOf(CurveLUT).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CurveLUT))
      return false;
    var tmp0_other_with_cast = other instanceof CurveLUT ? other : THROW_CCE();
    if (!equals(this.w1m_1, tmp0_other_with_cast.w1m_1))
      return false;
    if (!this.x1m_1.equals(tmp0_other_with_cast.x1m_1))
      return false;
    if (!this.y1m_1.equals(tmp0_other_with_cast.y1m_1))
      return false;
    if (!this.z1m_1.equals(tmp0_other_with_cast.z1m_1))
      return false;
    return true;
  };
  function Arc() {
    this.e1n_1 = 0.5522847498307933;
  }
  protoOf(Arc).f1n = function (out, center, r, start, end, counterclockwise) {
    var x = center.re();
    var y = center.se();
    var startAngle = _Angle___get_normalized__impl__9s30ys(start);
    var endAngle1 = _Angle___get_normalized__impl__9s30ys(end);
    var endAngle = Angle__compareTo_impl_a0hfds(endAngle1, startAngle) < 0 ? Angle__plus_impl_26v37k(endAngle1, Companion_getInstance_15().s1c_1) : endAngle1;
    // Inline function 'korlibs.math.geom.min' call
    var a = Companion_getInstance_15().s1c_1;
    // Inline function 'korlibs.math.geom.abs' call
    var angle = Angle__minus_impl_xeau7k(endAngle, startAngle);
    var b = _Angle___get_absoluteValue__impl__4qoakv(angle);
    // Inline function 'kotlin.math.min' call
    // Inline function 'korlibs.math.geom.Angle.internal' call
    var a_0 = _Angle___get_radians__impl__n00yt5(a);
    // Inline function 'korlibs.math.geom.Angle.internal' call
    var b_0 = _Angle___get_radians__impl__n00yt5(b);
    var tmp$ret$3 = Math.min(a_0, b_0);
    var remainingAngle = _Angle___init__impl__g23q1m(tmp$ret$3);
    if (Angle__compareTo_impl_a0hfds(_Angle___get_absoluteValue__impl__4qoakv(remainingAngle), Companion_getInstance_15().n1c_1) < 0 ? !equals(start, end) : false)
      remainingAngle = Companion_getInstance_15().s1c_1;
    var sgn1 = Angle__compareTo_impl_a0hfds(startAngle, endAngle) < 0 ? 1 : -1;
    var sgn = counterclockwise ? -sgn1 | 0 : sgn1;
    if (counterclockwise) {
      remainingAngle = Angle__minus_impl_xeau7k(Companion_getInstance_15().s1c_1, remainingAngle);
      if (Angle__compareTo_impl_a0hfds(_Angle___get_absoluteValue__impl__4qoakv(remainingAngle), Companion_getInstance_15().n1c_1) < 0 ? !equals(start, end) : false)
        remainingAngle = Companion_getInstance_15().s1c_1;
    }
    var a1 = startAngle;
    var index = 0;
    while (Angle__compareTo_impl_a0hfds(remainingAngle, Companion_getInstance_15().n1c_1) > 0) {
      var tmp = a1;
      // Inline function 'korlibs.math.geom.min' call
      var a_1 = remainingAngle;
      var b_1 = Companion_getInstance_15().p1c_1;
      // Inline function 'kotlin.math.min' call
      // Inline function 'korlibs.math.geom.Angle.internal' call
      var a_2 = _Angle___get_radians__impl__n00yt5(a_1);
      // Inline function 'korlibs.math.geom.Angle.internal' call
      var b_2 = _Angle___get_radians__impl__n00yt5(b_1);
      var tmp$ret$7 = Math.min(a_2, b_2);
      var tmp$ret$8 = _Angle___init__impl__g23q1m(tmp$ret$7);
      var a2 = Angle__plus_impl_26v37k(tmp, Angle__times_impl_v3s9y2(tmp$ret$8, sgn));
      var a_3 = Angle__div_impl_ut2btd(Angle__minus_impl_xeau7k(a2, a1), 2.0);
      var x4 = r * _Angle___get_cosine__impl__vprvmu(a_3);
      var y4 = r * _Angle___get_sine__impl__15nmyi(a_3);
      var x1 = x4;
      var y1 = -y4;
      var f = 0.5522847498307933 * _Angle___get_tangent__impl__vushdy(a_3);
      var x2 = x1 + f * y4;
      var y2 = y1 + f * x4;
      var x3 = x2;
      var y3 = -y2;
      var ar = Angle__plus_impl_26v37k(a_3, a1);
      var cos_ar = _Angle___get_cosine__impl__vprvmu(ar);
      var sin_ar = _Angle___get_sine__impl__15nmyi(ar);
      if (index === 0) {
        out.g1n(new Vector2D(x + r * _Angle___get_cosine__impl__vprvmu(a1), y + r * _Angle___get_sine__impl__15nmyi(a1)));
      }
      out.h1n(new Vector2D(x + x2 * cos_ar - y2 * sin_ar, y + x2 * sin_ar + y2 * cos_ar), new Vector2D(x + x3 * cos_ar - y3 * sin_ar, y + x3 * sin_ar + y3 * cos_ar), new Vector2D(x + r * _Angle___get_cosine__impl__vprvmu(a2), y + r * _Angle___get_sine__impl__15nmyi(a2)));
      index = index + 1 | 0;
      var tmp_0 = remainingAngle;
      // Inline function 'korlibs.math.geom.abs' call
      var angle_0 = Angle__minus_impl_xeau7k(a2, a1);
      var tmp$ret$9 = _Angle___get_absoluteValue__impl__4qoakv(angle_0);
      remainingAngle = Angle__minus_impl_xeau7k(tmp_0, tmp$ret$9);
      a1 = a2;
    }
    if (equals(startAngle, endAngle) ? !(index === 0) : false) {
      out.r13();
    }
  };
  var Arc_instance;
  function Arc_getInstance() {
    return Arc_instance;
  }
  function aligned$factory() {
    return getPropertyCallableRef('aligned', 1, KProperty1, function (receiver) {
      return _get_aligned__7fjidv(receiver);
    }, null);
  }
  function dpoints$factory() {
    return getPropertyCallableRef('dpoints', 1, KProperty1, function (receiver) {
      return receiver.p1m();
    }, null);
  }
  function extrema$factory() {
    return getPropertyCallableRef('extrema', 1, KProperty1, function (receiver) {
      return receiver.g1m();
    }, null);
  }
  function boundingBox$factory() {
    return getPropertyCallableRef('boundingBox', 1, KProperty1, function (receiver) {
      return receiver.q1m();
    }, null);
  }
  function xt01$factory() {
    return getPropertyCallableRef('xt01', 1, KProperty1, function (receiver) {
      return receiver.j1m();
    }, null);
  }
  function yt01$factory() {
    return getPropertyCallableRef('yt01', 1, KProperty1, function (receiver) {
      return receiver.k1m();
    }, null);
  }
  function Companion_32() {
  }
  protoOf(Companion_32).i1n = function (width, height, algo) {
    return new BinPacker(new Size2D(width, height), algo);
  };
  protoOf(Companion_32).j1n = function (width, height, algo) {
    return Companion_instance_32.i1n(width, height, algo);
  };
  protoOf(Companion_32).k1n = function (width, height, algo, $super) {
    algo = algo === VOID ? MaxRects_init_$Create$(width, height) : algo;
    return $super === VOID ? this.j1n(width, height, algo) : $super.j1n.call(this, width, height, algo);
  };
  var Companion_instance_32;
  function Companion_getInstance_32() {
    return Companion_instance_32;
  }
  function ImageDoNotFitException(width, height, packer) {
    extendThrowable(this, "Size '" + width + 'x' + height + "' doesn't fit in '" + packer.ex() + 'x' + packer.fx() + "'");
    captureStack(this, ImageDoNotFitException);
    this.o1n_1 = width;
    this.p1n_1 = height;
    this.q1n_1 = packer;
  }
  function BinPacker(size, algo) {
    algo = algo === VOID ? new MaxRects(size) : algo;
    this.l1n_1 = size;
    this.m1n_1 = algo;
    this.n1n_1 = FastArrayList_init_$Create$();
  }
  protoOf(BinPacker).ex = function () {
    return this.l1n_1.z1i_1;
  };
  protoOf(BinPacker).fx = function () {
    return this.l1n_1.a1j_1;
  };
  protoOf(BinPacker).u1l = function (width, height) {
    var tmp0_elvis_lhs = this.r1n(width, height);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new ImageDoNotFitException(width, height, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(BinPacker).r1n = function (width, height) {
    var tmp0_elvis_lhs = this.m1n_1.s1n(new Size2D(width, height));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var rect = tmp;
    // Inline function 'kotlin.collections.plusAssign' call
    this.n1n_1.p(rect);
    return rect;
  };
  function MaxRects_init_$Init$(width, height, $this) {
    MaxRects.call($this, new Size2D(width, height));
    return $this;
  }
  function MaxRects_init_$Create$(width, height) {
    return MaxRects_init_$Init$(width, height, objectCreate(protoOf(MaxRects)));
  }
  function quickFindPositionForNewNodeBestAreaFit($this, width, height) {
    var score = 1.7976931348623157E308;
    var areaFit;
    var bestNode = Companion_getInstance_23().n1e();
    var tmp0_iterator = $this.t1n_1.s();
    while (tmp0_iterator.t()) {
      var r = tmp0_iterator.u();
      if (r.r1d_1 >= width ? r.s1d_1 >= height : false) {
        areaFit = r.r1d_1 * r.s1d_1 - width * height;
        if (areaFit < score) {
          bestNode = new RectangleD(r.p1d_1, r.q1d_1, width, height);
          score = areaFit;
        }
      }
    }
    return bestNode;
  }
  function splitFreeNode($this, freeNode, usedNode) {
    var newNode;
    if (((usedNode.o1i() >= freeNode.p1i() ? true : usedNode.p1i() <= freeNode.p1d_1) ? true : usedNode.r1i() >= freeNode.q1i()) ? true : usedNode.q1i() <= freeNode.r1i()) {
      return false;
    }
    if (usedNode.p1d_1 < freeNode.p1i() ? usedNode.p1i() > freeNode.p1d_1 : false) {
      if (usedNode.q1d_1 > freeNode.q1d_1 ? usedNode.q1d_1 < freeNode.q1i() : false) {
        newNode = freeNode.t1j(VOID, VOID, VOID, usedNode.q1d_1 - freeNode.q1d_1);
        $this.t1n_1.p(newNode);
      }
      if (usedNode.q1i() < freeNode.q1i()) {
        newNode = freeNode.t1j(VOID, usedNode.q1i(), VOID, freeNode.q1i() - usedNode.q1i());
        $this.t1n_1.p(newNode);
      }
    }
    if (usedNode.q1d_1 < freeNode.q1i() ? usedNode.q1i() > freeNode.q1d_1 : false) {
      if (usedNode.p1d_1 > freeNode.p1d_1 ? usedNode.p1d_1 < freeNode.p1i() : false) {
        newNode = freeNode.t1j(VOID, VOID, usedNode.p1d_1 - freeNode.p1d_1);
        $this.t1n_1.p(newNode);
      }
      if (usedNode.p1i() < freeNode.p1i()) {
        newNode = freeNode.t1j(usedNode.p1i(), VOID, freeNode.p1i() - usedNode.p1i());
        $this.t1n_1.p(newNode);
      }
    }
    return true;
  }
  function pruneFreeList($this) {
    var len = $this.t1n_1.l();
    var i = 0;
    while (i < len) {
      var j = i + 1 | 0;
      var tmpRect = $this.t1n_1.b1(i);
      $l$loop: while (j < len) {
        var tmpRect2 = $this.t1n_1.b1(j);
        if (Companion_getInstance_23().d1j(tmpRect, tmpRect2)) {
          $this.t1n_1.e1(i);
          i = i - 1 | 0;
          len = len - 1 | 0;
          break $l$loop;
        }
        if (Companion_getInstance_23().d1j(tmpRect2, tmpRect)) {
          $this.t1n_1.e1(j);
          len = len - 1 | 0;
          j = j - 1 | 0;
        }
        j = j + 1 | 0;
      }
      i = i + 1 | 0;
    }
  }
  function MaxRects(maxSize) {
    this.t1n_1 = fastArrayListOf([Companion_getInstance_23().o1d(Companion_getInstance_28().w1c_1, maxSize)]);
  }
  protoOf(MaxRects).s1n = function (size) {
    return this.u1n(size);
  };
  protoOf(MaxRects).u1n = function (size) {
    var width = size.re();
    var height = size.se();
    if (width <= 0.0 ? height <= 0.0 : false)
      return Companion_getInstance_23().x1i(0, 0, 0, 0);
    var newNode = quickFindPositionForNewNodeBestAreaFit(this, width, height);
    if (newNode.s1d_1 === 0.0)
      return null;
    var numRectanglesToProcess = this.t1n_1.l();
    var i = 0;
    while (i < numRectanglesToProcess) {
      if (splitFreeNode(this, this.t1n_1.b1(i), newNode)) {
        this.t1n_1.e1(i);
        numRectanglesToProcess = numRectanglesToProcess - 1 | 0;
        i = i - 1 | 0;
      }
      i = i + 1 | 0;
    }
    pruneFreeList(this);
    return newNode;
  };
  var HitTestDirection_ANY_instance;
  var HitTestDirection_UP_instance;
  var HitTestDirection_RIGHT_instance;
  var HitTestDirection_DOWN_instance;
  var HitTestDirection_LEFT_instance;
  function Companion_33() {
  }
  var Companion_instance_33;
  function Companion_getInstance_33() {
    return Companion_instance_33;
  }
  var HitTestDirection_entriesInitialized;
  function HitTestDirection_initEntries() {
    if (HitTestDirection_entriesInitialized)
      return Unit_instance;
    HitTestDirection_entriesInitialized = true;
    HitTestDirection_ANY_instance = new HitTestDirection('ANY', 0);
    HitTestDirection_UP_instance = new HitTestDirection('UP', 1);
    HitTestDirection_RIGHT_instance = new HitTestDirection('RIGHT', 2);
    HitTestDirection_DOWN_instance = new HitTestDirection('DOWN', 3);
    HitTestDirection_LEFT_instance = new HitTestDirection('LEFT', 4);
  }
  function HitTestDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function HitTestDirection_ANY_getInstance() {
    HitTestDirection_initEntries();
    return HitTestDirection_ANY_instance;
  }
  function AbstractShape2D() {
  }
  var SliceRotation_R0_instance;
  var SliceRotation_R90_instance;
  var SliceRotation_R180_instance;
  var SliceRotation_R270_instance;
  function Companion_34() {
    Companion_instance_34 = this;
    this.v1n_1 = values_2();
  }
  protoOf(Companion_34).b1 = function (index) {
    return this.v1n_1[umod_0(index, 4)];
  };
  var Companion_instance_34;
  function Companion_getInstance_34() {
    SliceRotation_initEntries();
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function values_2() {
    return [SliceRotation_R0_getInstance(), SliceRotation_R90_getInstance(), SliceRotation_R180_getInstance(), SliceRotation_R270_getInstance()];
  }
  var SliceRotation_entriesInitialized;
  function SliceRotation_initEntries() {
    if (SliceRotation_entriesInitialized)
      return Unit_instance;
    SliceRotation_entriesInitialized = true;
    SliceRotation_R0_instance = new SliceRotation('R0', 0);
    SliceRotation_R90_instance = new SliceRotation('R90', 1);
    SliceRotation_R180_instance = new SliceRotation('R180', 2);
    SliceRotation_R270_instance = new SliceRotation('R270', 3);
    Companion_getInstance_34();
  }
  function SliceRotation(name, ordinal) {
    Enum.call(this, name, ordinal);
    this.y1n_1 = imul(this.q9_1, 90);
  }
  function _SliceOrientation___init__impl__ewylib(raw) {
    return raw;
  }
  function _SliceOrientation___get_raw__impl__tj3u8w($this) {
    return $this;
  }
  function _SliceOrientation___get_rotation__impl__m65r0o($this) {
    var tmp = Companion_getInstance_34();
    // Inline function 'korlibs.memory.extract2' call
    var tmp$ret$0 = (_SliceOrientation___get_raw__impl__tj3u8w($this) >>> 0 | 0) & 3;
    return tmp.b1(tmp$ret$0);
  }
  function _SliceOrientation___get_flipX__impl__lgb7bx($this) {
    // Inline function 'korlibs.memory.extractBool' call
    // Inline function 'korlibs.memory.extract1' call
    return !(((_SliceOrientation___get_raw__impl__tj3u8w($this) >>> 2 | 0) & 1) === 0);
  }
  function _SliceOrientation___init__impl__ewylib_0(rotation, flipX) {
    rotation = rotation === VOID ? SliceRotation_R0_getInstance() : rotation;
    flipX = flipX === VOID ? false : flipX;
    return _SliceOrientation___init__impl__ewylib(insert_0(insert2(0, rotation.q9_1, 0), flipX, 2));
  }
  function _SliceOrientation___get_indices__impl__km5on3($this) {
    var tmp = Companion_getInstance_35().z1n_1;
    // Inline function 'korlibs.memory.extract3' call
    return tmp[(_SliceOrientation___get_raw__impl__tj3u8w($this) >>> 0 | 0) & 7];
  }
  function _SliceOrientation___get_isRotatedDeg90CwOrCcw__impl__98v1vq($this) {
    return _SliceOrientation___get_rotation__impl__m65r0o($this).equals(SliceRotation_R90_getInstance()) ? true : _SliceOrientation___get_rotation__impl__m65r0o($this).equals(SliceRotation_R270_getInstance());
  }
  function SliceOrientation__toString_impl_tdph6r($this) {
    var tmp = Companion_getInstance_35().a1o_1;
    // Inline function 'korlibs.memory.extract3' call
    return tmp[(_SliceOrientation___get_raw__impl__tj3u8w($this) >>> 0 | 0) & 7];
  }
  function Companion_35() {
    Companion_instance_35 = this;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(8), null);
    while (tmp_0 < 8) {
      var tmp_2 = tmp_0;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.intArrayOf' call
      var this_0 = new Int32Array([0, 1, 2, 3]);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'korlibs.math.geom.slice.Companion.INDICES.<anonymous>' call
      var orientation = _SliceOrientation___init__impl__ewylib(tmp_2);
      if (_SliceOrientation___get_flipX__impl__lgb7bx(orientation)) {
        swap(this_0, 0, 1);
        swap(this_0, 3, 2);
      }
      rotateRight(this_0, _SliceOrientation___get_rotation__impl__m65r0o(orientation).q9_1);
      tmp_1[tmp_2] = this_0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.z1n_1 = tmp_1;
    var tmp_3 = this;
    var tmp_4 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_5 = fillArrayVal(Array(8), null);
    while (tmp_4 < 8) {
      var tmp_6 = tmp_4;
      var orientation_0 = _SliceOrientation___init__impl__ewylib(tmp_6);
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'korlibs.math.geom.slice.Companion.NAMES.<anonymous>' call
      this_1.f5(_SliceOrientation___get_flipX__impl__lgb7bx(orientation_0) ? 'MIRROR_HORIZONTAL_ROTATE_' : 'ROTATE_');
      this_1.q7(_SliceOrientation___get_rotation__impl__m65r0o(orientation_0).y1n_1);
      tmp_5[tmp_6] = this_1.toString();
      tmp_4 = tmp_4 + 1 | 0;
    }
    tmp_3.a1o_1 = tmp_5;
    var tmp_7 = this;
    var tmp0_rotation = SliceRotation_R0_getInstance();
    tmp_7.b1o_1 = _SliceOrientation___init__impl__ewylib_0(tmp0_rotation, false);
    var tmp_8 = this;
    var tmp0_rotation_0 = SliceRotation_R90_getInstance();
    tmp_8.c1o_1 = _SliceOrientation___init__impl__ewylib_0(tmp0_rotation_0, false);
    var tmp_9 = this;
    var tmp0_rotation_1 = SliceRotation_R180_getInstance();
    tmp_9.d1o_1 = _SliceOrientation___init__impl__ewylib_0(tmp0_rotation_1, false);
    var tmp_10 = this;
    var tmp0_rotation_2 = SliceRotation_R270_getInstance();
    tmp_10.e1o_1 = _SliceOrientation___init__impl__ewylib_0(tmp0_rotation_2, false);
    this.f1o_1 = _SliceOrientation___init__impl__ewylib_0(VOID, true);
    var tmp_11 = this;
    var tmp0_rotation_3 = SliceRotation_R90_getInstance();
    tmp_11.g1o_1 = _SliceOrientation___init__impl__ewylib_0(tmp0_rotation_3, true);
    var tmp_12 = this;
    var tmp0_rotation_4 = SliceRotation_R180_getInstance();
    tmp_12.h1o_1 = _SliceOrientation___init__impl__ewylib_0(tmp0_rotation_4, true);
    var tmp_13 = this;
    var tmp0_rotation_5 = SliceRotation_R270_getInstance();
    tmp_13.i1o_1 = _SliceOrientation___init__impl__ewylib_0(tmp0_rotation_5, true);
    this.j1o_1 = listOf([new SliceOrientation(this.b1o_1), new SliceOrientation(this.c1o_1), new SliceOrientation(this.d1o_1), new SliceOrientation(this.e1o_1), new SliceOrientation(this.f1o_1), new SliceOrientation(this.g1o_1), new SliceOrientation(this.h1o_1), new SliceOrientation(this.i1o_1)]);
  }
  var Companion_instance_35;
  function Companion_getInstance_35() {
    if (Companion_instance_35 == null)
      new Companion_35();
    return Companion_instance_35;
  }
  function SliceOrientation__hashCode_impl_7mjkdw($this) {
    return $this;
  }
  function SliceOrientation__equals_impl_h4gywg($this, other) {
    if (!(other instanceof SliceOrientation))
      return false;
    if (!($this === (other instanceof SliceOrientation ? other.k1o_1 : THROW_CCE())))
      return false;
    return true;
  }
  function SliceOrientation(raw) {
    Companion_getInstance_35();
    this.k1o_1 = raw;
  }
  protoOf(SliceOrientation).toString = function () {
    return SliceOrientation__toString_impl_tdph6r(this.k1o_1);
  };
  protoOf(SliceOrientation).hashCode = function () {
    return SliceOrientation__hashCode_impl_7mjkdw(this.k1o_1);
  };
  protoOf(SliceOrientation).equals = function (other) {
    return SliceOrientation__equals_impl_h4gywg(this.k1o_1, other);
  };
  function RectSlice(base, rect, orientation, padding, name) {
    orientation = orientation === VOID ? Companion_getInstance_35().b1o_1 : orientation;
    padding = padding === VOID ? Companion_getInstance_18().c1e_1 : padding;
    name = name === VOID ? null : name;
    this.l1o_1 = base;
    this.m1o_1 = rect;
    this.n1o_1 = orientation;
    this.o1o_1 = padding;
    this.p1o_1 = name;
    this.q1o_1 = this.l1o_1.l().z1j_1;
    this.r1o_1 = this.l1o_1.l().a1k_1;
    this.s1o_1 = this.m1o_1.e1k_1;
    this.t1o_1 = this.m1o_1.f1k_1;
    this.u1o_1 = !_SliceOrientation___get_isRotatedDeg90CwOrCcw__impl__98v1vq(this.n1o_1) ? this.m1o_1.e1k_1 : this.m1o_1.f1k_1;
    this.v1o_1 = !_SliceOrientation___get_isRotatedDeg90CwOrCcw__impl__98v1vq(this.n1o_1) ? this.m1o_1.f1k_1 : this.m1o_1.e1k_1;
    this.w1o_1 = this.u1o_1 + this.o1o_1.i1e() | 0;
    this.x1o_1 = this.v1o_1 + this.o1o_1.j1e() | 0;
    this.y1o_1 = this.m1o_1.o1i() / this.q1o_1;
    this.z1o_1 = this.m1o_1.p1i() / this.q1o_1;
    this.a1p_1 = this.m1o_1.r1i() / this.r1o_1;
    this.b1p_1 = this.m1o_1.q1i() / this.r1o_1;
    this.c1p_1 = new RectCoords(this.y1o_1, this.a1p_1, this.z1o_1, this.a1p_1, this.z1o_1, this.b1p_1, this.y1o_1, this.b1p_1);
    this.d1p_1 = transformed(this.c1p_1, this.n1o_1);
    this.e1p_1 = this.d1p_1.m1p_1;
    this.f1p_1 = this.d1p_1.n1p_1;
    this.g1p_1 = this.d1p_1.o1p_1;
    this.h1p_1 = this.d1p_1.p1p_1;
    this.i1p_1 = this.d1p_1.q1p_1;
    this.j1p_1 = this.d1p_1.r1p_1;
    this.k1p_1 = this.d1p_1.s1p_1;
    this.l1p_1 = this.d1p_1.t1p_1;
  }
  protoOf(RectSlice).u1p = function () {
    return this.l1o_1;
  };
  protoOf(RectSlice).v1p = function () {
    return this.m1o_1;
  };
  protoOf(RectSlice).w1p = function () {
    return this.o1o_1;
  };
  protoOf(RectSlice).ex = function () {
    return this.u1o_1;
  };
  protoOf(RectSlice).fx = function () {
    return this.v1o_1;
  };
  protoOf(RectSlice).x1p = function () {
    return this.w1o_1;
  };
  protoOf(RectSlice).y1p = function () {
    return this.x1o_1;
  };
  protoOf(RectSlice).z1p = function (left, top, right, bottom, name, clamped, orientation) {
    var tmp = this.m1o_1.j1k(left, top, right, bottom, clamped);
    return new RectSlice(this.l1o_1, tmp, orientation, this.o1o_1, name == null ? this.p1o_1 : name);
  };
  protoOf(RectSlice).a1q = function (left, top, right, bottom, name, clamped, orientation, $super) {
    name = name === VOID ? null : name;
    clamped = clamped === VOID ? true : clamped;
    orientation = orientation === VOID ? this.n1o_1 : orientation;
    return $super === VOID ? this.z1p(left, top, right, bottom, name, clamped, orientation) : $super.z1p.call(this, left, top, right, bottom, name, clamped, new SliceOrientation(orientation));
  };
  protoOf(RectSlice).b1q = function (x, y, width, height, name, clamped, orientation) {
    return this.z1p(x, y, x + width | 0, y + height | 0, name, clamped, orientation);
  };
  protoOf(RectSlice).c1q = function (x, y, width, height, name, clamped, orientation, $super) {
    name = name === VOID ? null : name;
    clamped = clamped === VOID ? true : clamped;
    orientation = orientation === VOID ? this.n1o_1 : orientation;
    return $super === VOID ? this.b1q(x, y, width, height, name, clamped, orientation) : $super.b1q.call(this, x, y, width, height, name, clamped, new SliceOrientation(orientation));
  };
  protoOf(RectSlice).d1q = function (rect, name, clamped, orientation) {
    return this.z1p(rect.o1i(), rect.r1i(), rect.p1i(), rect.q1i(), name, clamped, orientation);
  };
  protoOf(RectSlice).e1q = function (rect, name, clamped, orientation, $super) {
    name = name === VOID ? null : name;
    clamped = clamped === VOID ? true : clamped;
    orientation = orientation === VOID ? this.n1o_1 : orientation;
    return $super === VOID ? this.d1q(rect, name, clamped, orientation) : $super.d1q.call(this, rect, name, clamped, new SliceOrientation(orientation));
  };
  protoOf(RectSlice).f1q = function () {
    return this.e1p_1;
  };
  protoOf(RectSlice).g1q = function () {
    return this.f1p_1;
  };
  protoOf(RectSlice).h1q = function () {
    return this.g1p_1;
  };
  protoOf(RectSlice).i1q = function () {
    return this.h1p_1;
  };
  protoOf(RectSlice).j1q = function () {
    return this.i1p_1;
  };
  protoOf(RectSlice).k1q = function () {
    return this.j1p_1;
  };
  protoOf(RectSlice).l1q = function () {
    return this.k1p_1;
  };
  protoOf(RectSlice).m1q = function () {
    return this.l1p_1;
  };
  protoOf(RectSlice).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.math.geom.slice.RectSlice.toString.<anonymous>' call
    this_0.f5('RectSlice(');
    this_0.f5(this.p1o_1);
    this_0.f5(':');
    this_0.e5(this.m1o_1);
    if (!(this.n1o_1 === Companion_getInstance_35().b1o_1)) {
      this_0.f5(':');
      this_0.e5(new SliceOrientation(this.n1o_1));
    }
    if (this.o1o_1.h1e()) {
      this_0.f5(':');
      this_0.e5(this.o1o_1);
    }
    this_0.f5(')');
    return this_0.toString();
  };
  protoOf(RectSlice).hashCode = function () {
    var result = hashCode(this.l1o_1);
    result = imul(result, 31) + this.m1o_1.hashCode() | 0;
    result = imul(result, 31) + SliceOrientation__hashCode_impl_7mjkdw(this.n1o_1) | 0;
    result = imul(result, 31) + this.o1o_1.hashCode() | 0;
    result = imul(result, 31) + (this.p1o_1 == null ? 0 : getStringHashCode(this.p1o_1)) | 0;
    return result;
  };
  protoOf(RectSlice).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RectSlice))
      return false;
    var tmp0_other_with_cast = other instanceof RectSlice ? other : THROW_CCE();
    if (!equals(this.l1o_1, tmp0_other_with_cast.l1o_1))
      return false;
    if (!this.m1o_1.equals(tmp0_other_with_cast.m1o_1))
      return false;
    if (!(this.n1o_1 === tmp0_other_with_cast.n1o_1))
      return false;
    if (!this.o1o_1.equals(tmp0_other_with_cast.o1o_1))
      return false;
    if (!(this.p1o_1 == tmp0_other_with_cast.p1o_1))
      return false;
    return true;
  };
  function Companion_36() {
  }
  protoOf(Companion_36).r1q = function (base, coords, name, flippedWidthHeight) {
    return new SliceCoordsImpl(base, coords, name, flippedWidthHeight);
  };
  protoOf(Companion_36).s1q = function (base, coords, name, flippedWidthHeight, $super) {
    name = name === VOID ? null : name;
    flippedWidthHeight = flippedWidthHeight === VOID ? false : flippedWidthHeight;
    return $super === VOID ? this.r1q(base, coords, name, flippedWidthHeight) : $super.r1q.call(this, base, coords, name, flippedWidthHeight);
  };
  var Companion_instance_36;
  function Companion_getInstance_36() {
    return Companion_instance_36;
  }
  function SliceCoordsWithBase() {
  }
  function SliceCoords() {
  }
  function SliceCoordsImpl(base, coords, name, flippedWidthHeight) {
    name = name === VOID ? null : name;
    flippedWidthHeight = flippedWidthHeight === VOID ? false : flippedWidthHeight;
    this.t1q_1 = base;
    this.u1q_1 = coords;
    this.v1q_1 = name;
    this.w1q_1 = flippedWidthHeight;
    this.x1q_1 = Companion_getInstance_18().c1e_1;
    this.y1q_1 = !this.w1q_1 ? this.t1q_1.l().z1j_1 : this.t1q_1.l().a1k_1;
    this.z1q_1 = !this.w1q_1 ? this.t1q_1.l().a1k_1 : this.t1q_1.l().z1j_1;
    this.a1r_1 = numberToInt(Companion_getInstance_28().c1l(this.u1q_1.f1q(), this.u1q_1.g1q(), this.u1q_1.h1q(), this.u1q_1.i1q()) * this.y1q_1);
    this.b1r_1 = numberToInt(Companion_getInstance_28().c1l(this.u1q_1.f1q(), this.u1q_1.g1q(), this.u1q_1.l1q(), this.u1q_1.m1q()) * this.z1q_1);
    this.c1r_1 = this.a1r_1 + this.x1q_1.i1e() | 0;
    this.d1r_1 = this.b1r_1 + this.x1q_1.j1e() | 0;
  }
  protoOf(SliceCoordsImpl).u1p = function () {
    return this.t1q_1;
  };
  protoOf(SliceCoordsImpl).w1p = function () {
    return this.x1q_1;
  };
  protoOf(SliceCoordsImpl).ex = function () {
    return this.a1r_1;
  };
  protoOf(SliceCoordsImpl).fx = function () {
    return this.b1r_1;
  };
  protoOf(SliceCoordsImpl).x1p = function () {
    return this.c1r_1;
  };
  protoOf(SliceCoordsImpl).y1p = function () {
    return this.d1r_1;
  };
  protoOf(SliceCoordsImpl).f1q = function () {
    return this.u1q_1.f1q();
  };
  protoOf(SliceCoordsImpl).g1q = function () {
    return this.u1q_1.g1q();
  };
  protoOf(SliceCoordsImpl).h1q = function () {
    return this.u1q_1.h1q();
  };
  protoOf(SliceCoordsImpl).i1q = function () {
    return this.u1q_1.i1q();
  };
  protoOf(SliceCoordsImpl).j1q = function () {
    return this.u1q_1.j1q();
  };
  protoOf(SliceCoordsImpl).k1q = function () {
    return this.u1q_1.k1q();
  };
  protoOf(SliceCoordsImpl).l1q = function () {
    return this.u1q_1.l1q();
  };
  protoOf(SliceCoordsImpl).m1q = function () {
    return this.u1q_1.m1q();
  };
  protoOf(SliceCoordsImpl).toString = function () {
    return 'SliceCoordsImpl(base=' + this.t1q_1 + ', coords=' + this.u1q_1 + ', name=' + this.v1q_1 + ', flippedWidthHeight=' + this.w1q_1 + ')';
  };
  protoOf(SliceCoordsImpl).hashCode = function () {
    var result = hashCode(this.t1q_1);
    result = imul(result, 31) + hashCode(this.u1q_1) | 0;
    result = imul(result, 31) + (this.v1q_1 == null ? 0 : getStringHashCode(this.v1q_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.w1q_1) | 0;
    return result;
  };
  protoOf(SliceCoordsImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SliceCoordsImpl))
      return false;
    var tmp0_other_with_cast = other instanceof SliceCoordsImpl ? other : THROW_CCE();
    if (!equals(this.t1q_1, tmp0_other_with_cast.t1q_1))
      return false;
    if (!equals(this.u1q_1, tmp0_other_with_cast.u1q_1))
      return false;
    if (!(this.v1q_1 == tmp0_other_with_cast.v1q_1))
      return false;
    if (!(this.w1q_1 === tmp0_other_with_cast.w1q_1))
      return false;
    return true;
  };
  function SliceCoordsWithBaseAndRect() {
  }
  function RectCoords(tlX, tlY, trX, trY, brX, brY, blX, blY) {
    this.m1p_1 = tlX;
    this.n1p_1 = tlY;
    this.o1p_1 = trX;
    this.p1p_1 = trY;
    this.q1p_1 = brX;
    this.r1p_1 = brY;
    this.s1p_1 = blX;
    this.t1p_1 = blY;
  }
  protoOf(RectCoords).f1q = function () {
    return this.m1p_1;
  };
  protoOf(RectCoords).g1q = function () {
    return this.n1p_1;
  };
  protoOf(RectCoords).h1q = function () {
    return this.o1p_1;
  };
  protoOf(RectCoords).i1q = function () {
    return this.p1p_1;
  };
  protoOf(RectCoords).j1q = function () {
    return this.q1p_1;
  };
  protoOf(RectCoords).k1q = function () {
    return this.r1p_1;
  };
  protoOf(RectCoords).l1q = function () {
    return this.s1p_1;
  };
  protoOf(RectCoords).m1q = function () {
    return this.t1p_1;
  };
  protoOf(RectCoords).toString = function () {
    return 'RectCoords(tlX=' + this.m1p_1 + ', tlY=' + this.n1p_1 + ', trX=' + this.o1p_1 + ', trY=' + this.p1p_1 + ', brX=' + this.q1p_1 + ', brY=' + this.r1p_1 + ', blX=' + this.s1p_1 + ', blY=' + this.t1p_1 + ')';
  };
  protoOf(RectCoords).hashCode = function () {
    var result = getNumberHashCode(this.m1p_1);
    result = imul(result, 31) + getNumberHashCode(this.n1p_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.o1p_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p1p_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q1p_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r1p_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s1p_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.t1p_1) | 0;
    return result;
  };
  protoOf(RectCoords).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RectCoords))
      return false;
    var tmp0_other_with_cast = other instanceof RectCoords ? other : THROW_CCE();
    if (!equals(this.m1p_1, tmp0_other_with_cast.m1p_1))
      return false;
    if (!equals(this.n1p_1, tmp0_other_with_cast.n1p_1))
      return false;
    if (!equals(this.o1p_1, tmp0_other_with_cast.o1p_1))
      return false;
    if (!equals(this.p1p_1, tmp0_other_with_cast.p1p_1))
      return false;
    if (!equals(this.q1p_1, tmp0_other_with_cast.q1p_1))
      return false;
    if (!equals(this.r1p_1, tmp0_other_with_cast.r1p_1))
      return false;
    if (!equals(this.s1p_1, tmp0_other_with_cast.s1p_1))
      return false;
    if (!equals(this.t1p_1, tmp0_other_with_cast.t1p_1))
      return false;
    return true;
  };
  function transformed(_this__u8e3s4, orientation) {
    var i = _SliceOrientation___get_indices__impl__km5on3(orientation);
    return new RectCoords(_this__u8e3s4.p1q(i[0]), _this__u8e3s4.q1q(i[0]), _this__u8e3s4.p1q(i[1]), _this__u8e3s4.q1q(i[1]), _this__u8e3s4.p1q(i[2]), _this__u8e3s4.q1q(i[2]), _this__u8e3s4.p1q(i[3]), _this__u8e3s4.q1q(i[3]));
  }
  function SliceRotation_R0_getInstance() {
    SliceRotation_initEntries();
    return SliceRotation_R0_instance;
  }
  function SliceRotation_R90_getInstance() {
    SliceRotation_initEntries();
    return SliceRotation_R90_instance;
  }
  function SliceRotation_R180_getInstance() {
    SliceRotation_initEntries();
    return SliceRotation_R180_instance;
  }
  function SliceRotation_R270_getInstance() {
    SliceRotation_initEntries();
    return SliceRotation_R270_instance;
  }
  function PolygonScanline$AllBuckets$pool$lambda(it) {
    it.r1b();
    return Unit_instance;
  }
  function PolygonScanline$AllBuckets$pool$lambda_0(it) {
    return new Bucket();
  }
  function Bucket() {
    this.e1r_1 = FastArrayList_init_$Create$();
  }
  protoOf(Bucket).r1b = function () {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.math.geom.vector.Bucket.clear.<anonymous>' call
    this.e1r_1.n2();
    return this;
  };
  function Buckets(pool, ySize) {
    this.f1r_1 = pool;
    this.g1r_1 = ySize;
    this.h1r_1 = FastIntMap();
  }
  protoOf(Buckets).l = function () {
    return get_size_2(this.h1r_1);
  };
  protoOf(Buckets).i1r = function (y) {
    return y / this.g1r_1 | 0;
  };
  protoOf(Buckets).j1r = function (index) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'korlibs.datastructure.getOrPut' call
      var this_0 = this.h1r_1;
      // Inline function 'korlibs.datastructure.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var res = this_0.get(index);
      if (!(res == null)) {
        tmp$ret$2 = res;
        break $l$block;
      }
      // Inline function 'korlibs.math.geom.vector.Buckets.getForIndex.<anonymous>' call
      var out = this.f1r_1.z11();
      // Inline function 'korlibs.datastructure.set' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.set(index, out);
      tmp$ret$2 = out;
    }
    return tmp$ret$2;
  };
  protoOf(Buckets).k1r = function (y) {
    // Inline function 'korlibs.datastructure.get' call
    var this_0 = this.h1r_1;
    var key = this.i1r(y);
    // Inline function 'kotlin.js.asDynamic' call
    return this_0.get(key);
  };
  protoOf(Buckets).n2 = function () {
    // Inline function 'korlibs.datastructure.fastForEach' call
    var this_0 = this.h1r_1;
    // Inline function 'korlibs.datastructure.fastKeyForEach' call
    // Inline function 'kotlin.js.asDynamic' call
    var mapIterator = this_0.keys();
    $l$loop: while (true) {
      var v = mapIterator.next();
      if (v.done)
        break $l$loop;
      // Inline function 'korlibs.datastructure.fastForEach.<anonymous>' call
      var it = v.value;
      // Inline function 'korlibs.math.geom.vector.Buckets.clear.<anonymous>' call
      // Inline function 'korlibs.datastructure.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = this_0.get(it);
      var value = ensureNotNull(tmp$ret$2);
      this.f1r_1.e12(value.r1b());
    }
    // Inline function 'korlibs.datastructure.clear' call
    // Inline function 'kotlin.js.asDynamic' call
    this.h1r_1.clear();
  };
  protoOf(Buckets).l1r = function (edge, threshold) {
    var min = this.i1r(edge.w1r());
    var max = this.i1r(edge.x1r());
    if ((max - min | 0) < threshold) {
      var inductionVariable = min;
      if (inductionVariable <= max)
        do {
          var n = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.j1r(n).e1r_1.p(edge);
        }
         while (!(n === max));
      return true;
    }
    return false;
  };
  protoOf(Buckets).y1r = function (edge, threshold, $super) {
    threshold = threshold === VOID ? IntCompanionObject_instance.MAX_VALUE : threshold;
    return $super === VOID ? this.l1r(edge, threshold) : $super.l1r.call(this, edge, threshold);
  };
  function AllBuckets() {
    var tmp = this;
    var tmp_0 = PolygonScanline$AllBuckets$pool$lambda;
    tmp.z1r_1 = new Pool(tmp_0, VOID, PolygonScanline$AllBuckets$pool$lambda_0);
    this.a1s_1 = new Buckets(this.z1r_1, 80);
    this.b1s_1 = new Buckets(this.z1r_1, 320);
    this.c1s_1 = new Buckets(this.z1r_1, 1280);
  }
  protoOf(AllBuckets).d1s = function (edge) {
    if (this.a1s_1.l1r(edge, 4))
      return Unit_instance;
    if (this.b1s_1.l1r(edge, 4))
      return Unit_instance;
    this.c1s_1.y1r(edge);
  };
  protoOf(AllBuckets).n2 = function () {
    this.a1s_1.n2();
    this.b1s_1.n2();
    this.c1s_1.n2();
  };
  function addPoint($this, x, y) {
    $this.n1s_1.u1l(x, y);
  }
  function addEdge($this, ax, ay, bx, by) {
    if (ax === bx ? ay === by : false)
      return Unit_instance;
    var isHorizontal = ay === by;
    var iax = $this.w1s(ax);
    var ibx = $this.w1s(bx);
    var iay = $this.w1s(ay);
    var iby = $this.w1s(by);
    var edge = ay < by ? $this.h1s_1.z11().x1s(iax, iay, ibx, iby, 1) : $this.h1s_1.z11().x1s(ibx, iby, iax, iay, -1);
    $this.k1s_1.p(edge);
    if (isHorizontal) {
      $this.j1s_1.p(edge);
    } else {
      $this.i1s_1.p(edge);
      $this.l1s_1.d1s(edge);
    }
    $this.g1s_1 = BoundsBuilder__plus_impl_cz7f7x($this.g1s_1, new Vector2D(ax, ay));
    $this.g1s_1 = BoundsBuilder__plus_impl_cz7f7x($this.g1s_1, new Vector2D(bx, by));
  }
  function XWithWind() {
    this.y1s_1 = new IntArrayList(1024);
    this.z1s_1 = new IntArrayList(1024);
  }
  protoOf(XWithWind).l = function () {
    return this.y1s_1.l();
  };
  protoOf(XWithWind).a1t = function (x, wind) {
    this.y1s_1.ay(x);
    this.z1s_1.ay(wind);
  };
  protoOf(XWithWind).n2 = function () {
    this.y1s_1.n2();
    this.z1s_1.n2();
  };
  protoOf(XWithWind).toString = function () {
    return 'XWithWind(' + this.y1s_1 + ', ' + this.z1s_1 + ')';
  };
  function IntArrayListSort() {
    IntArrayListSort_instance = this;
    SortOps.call(this);
  }
  protoOf(IntArrayListSort).b1t = function (subject, l, r) {
    return compareTo(subject.y1s_1.gx(l), subject.y1s_1.gx(r));
  };
  protoOf(IntArrayListSort).jy = function (subject, l, r) {
    return this.b1t(subject instanceof XWithWind ? subject : THROW_CCE(), l, r);
  };
  protoOf(IntArrayListSort).c1t = function (subject, indexL, indexR) {
    subject.y1s_1.gy(indexL, indexR);
    subject.z1s_1.gy(indexL, indexR);
  };
  protoOf(IntArrayListSort).ly = function (subject, indexL, indexR) {
    return this.c1t(subject instanceof XWithWind ? subject : THROW_CCE(), indexL, indexR);
  };
  var IntArrayListSort_instance;
  function IntArrayListSort_getInstance() {
    if (IntArrayListSort_instance == null)
      new IntArrayListSort();
    return IntArrayListSort_instance;
  }
  function PolygonScanline$edgesPool$lambda(it) {
    return new MEdge();
  }
  function PolygonScanline() {
    RastScale.call(this);
    this.e1s_1 = -1;
    this.f1s_1 = Winding_NON_ZERO_getInstance();
    this.g1s_1 = Companion_getInstance_16().j1d();
    var tmp = this;
    tmp.h1s_1 = Pool_init_$Create$(VOID, PolygonScanline$edgesPool$lambda);
    this.i1s_1 = FastArrayList_init_$Create$();
    this.j1s_1 = FastArrayList_init_$Create$();
    this.k1s_1 = FastArrayList_init_$Create$();
    this.l1s_1 = new AllBuckets();
    this.m1s_1 = true;
    this.n1s_1 = new PointArrayList();
    this.o1s_1 = 0.0;
    this.p1s_1 = 0.0;
    this.q1s_1 = 0.0;
    this.r1s_1 = 0.0;
    this.s1s_1 = false;
    this.t1s_1 = new XWithWind();
    this.u1s_1 = 0;
    this.v1s_1 = new IntSegmentSet();
  }
  protoOf(PolygonScanline).n12 = function () {
    this.m1s_1 = true;
    this.g1s_1 = Companion_getInstance_16().e1d_1;
    // Inline function 'korlibs.datastructure.FastArrayList.fastForEach' call
    // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var array = this.i1s_1.rz_1;
    var n = 0;
    while (n < array.length) {
      // Inline function 'korlibs.math.geom.vector.PolygonScanline.reset.<anonymous>' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'korlibs.js.get' call
      var tmp0 = n;
      n = tmp0 + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      var it = array[tmp0];
      this.h1s_1.e12(it);
    }
    // Inline function 'korlibs.datastructure.FastArrayList.fastForEach' call
    // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var array_0 = this.j1s_1.rz_1;
    var n_0 = 0;
    while (n_0 < array_0.length) {
      // Inline function 'korlibs.math.geom.vector.PolygonScanline.reset.<anonymous>' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'korlibs.js.get' call
      var tmp0_0 = n_0;
      n_0 = tmp0_0 + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      var it_0 = array_0[tmp0_0];
      this.h1s_1.e12(it_0);
    }
    this.i1s_1.n2();
    this.j1s_1.n2();
    this.k1s_1.n2();
    this.n1s_1.r1b();
    this.l1s_1.n2();
    this.o1s_1 = 0.0;
    this.p1s_1 = 0.0;
    this.q1s_1 = 0.0;
    this.r1s_1 = 0.0;
    this.s1s_1 = false;
  };
  protoOf(PolygonScanline).d1t = function (x, y) {
    this.q1s_1 = x;
    this.r1s_1 = y;
    this.o1s_1 = x;
    this.p1s_1 = y;
    this.s1s_1 = true;
  };
  protoOf(PolygonScanline).e1t = function (x, y) {
    if (this.s1s_1) {
      addPoint(this, this.q1s_1, this.r1s_1);
    }
    addEdge(this, this.q1s_1, this.r1s_1, x, y);
    addPoint(this, x, y);
    this.q1s_1 = x;
    this.r1s_1 = y;
    this.s1s_1 = false;
  };
  protoOf(PolygonScanline).g1n = function (p) {
    return this.d1t(p.f18_1, p.g18_1);
  };
  protoOf(PolygonScanline).f1t = function (p) {
    return this.e1t(p.f18_1, p.g18_1);
  };
  protoOf(PolygonScanline).g1t = function (path) {
    // Inline function 'korlibs.math.geom.shape.emitPoints2' call
    var i = Vector2D_init_$Create$_1();
    var l = Vector2D_init_$Create$_1();
    // Inline function 'korlibs.math.geom.vector.PolygonScanline.add.<anonymous>' call
    if (false) {
      this.r13();
    }
    // Inline function 'korlibs.math.geom.vector.VectorPath.visitCmds' call
    var n = 0;
    // Inline function 'korlibs.datastructure.iterators.fastForEach' call
    var this_0 = path.h1t_1;
    var n_0 = 0;
    while (n_0 < this_0.l()) {
      // Inline function 'korlibs.math.geom.vector.VectorPath.visitCmds.<anonymous>' call
      var tmp0 = n_0;
      n_0 = tmp0 + 1 | 0;
      var tmp0_subject = this_0.gx(tmp0);
      if (tmp0_subject === 0) {
        // Inline function 'korlibs.math.geom.shape.emitPoints2.<anonymous>' call
        var tmp1 = n;
        n = tmp1 + 1 | 0;
        var tmp = path.i1t_1.b1(tmp1);
        var tmp2 = n;
        n = tmp2 + 1 | 0;
        var it = new Vector2D(tmp, path.i1t_1.b1(tmp2));
        i = it;
        // Inline function 'korlibs.math.geom.vector.PolygonScanline.add.<anonymous>' call
        this.s1t(it, true);
        l = it;
      } else {
        if (tmp0_subject === 1) {
          // Inline function 'korlibs.math.geom.shape.emitPoints2.<anonymous>' call
          var tmp3 = n;
          n = tmp3 + 1 | 0;
          var tmp_0 = path.i1t_1.b1(tmp3);
          var tmp4 = n;
          n = tmp4 + 1 | 0;
          var it_0 = new Vector2D(tmp_0, path.i1t_1.b1(tmp4));
          // Inline function 'korlibs.math.geom.vector.PolygonScanline.add.<anonymous>' call
          this.s1t(it_0, false);
          l = it_0;
          // Inline function 'korlibs.math.geom.shape.emitPoints2.<anonymous>' call
        } else {
          if (tmp0_subject === 2) {
            // Inline function 'korlibs.math.geom.shape.emitPoints2.<anonymous>' call
            var tmp5 = n;
            n = tmp5 + 1 | 0;
            var tmp_1 = path.i1t_1.b1(tmp5);
            var tmp6 = n;
            n = tmp6 + 1 | 0;
            var c = new Vector2D(tmp_1, path.i1t_1.b1(tmp6));
            var tmp7 = n;
            n = tmp7 + 1 | 0;
            var tmp_2 = path.i1t_1.b1(tmp7);
            var tmp8 = n;
            n = tmp8 + 1 | 0;
            var a = new Vector2D(tmp_2, path.i1t_1.b1(tmp8));
            var sum = Companion_getInstance_28().d1l(l, c) + Companion_getInstance_28().d1l(c, a);
            // Inline function 'korlibs.math.geom.shape.approximateCurve' call
            // Inline function 'kotlin.math.max' call
            var a_0 = numberToInt(sum);
            var rcurveSteps = Math.max(a_0, 20);
            var dt = 1.0 / rcurveSteps;
            var lastPos = {_v: Vector2D_init_$Create$_1()};
            var prevPos = {_v: Vector2D_init_$Create$_1()};
            var emittedCount = {_v: 0};
            // Inline function 'korlibs.math.geom.shape.emitPoints2.<anonymous>.<anonymous>' call
            var ratio = Companion_getInstance_12().z17_1;
            // Inline function 'korlibs.math.geom.shape.approximateCurve.<anonymous>' call
            lastPos._v = Companion_getInstance_31().m1m(l, c, a, ratio);
            var nStart = false ? 0 : 1;
            var nEnd = true ? rcurveSteps : rcurveSteps - 1 | 0;
            var inductionVariable = nStart;
            if (inductionVariable <= nEnd)
              do {
                var n_1 = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var ratio_0 = _Ratio___init__impl__9mwvn2_0(n_1 * dt);
                // Inline function 'korlibs.math.geom.shape.emitPoints2.<anonymous>.<anonymous>' call
                // Inline function 'korlibs.math.geom.shape.approximateCurve.<anonymous>' call
                var it_1 = Companion_getInstance_31().m1m(l, c, a, ratio_0);
                // Inline function 'korlibs.math.geom.shape.emitPoints2.<anonymous>.<anonymous>' call
                // Inline function 'korlibs.math.geom.vector.PolygonScanline.add.<anonymous>' call
                this.s1t(it_1, false);
                emittedCount._v = emittedCount._v + 1 | 0;
                lastPos._v = prevPos._v;
                prevPos._v = it_1;
              }
               while (!(n_1 === nEnd));
            l = a;
            // Inline function 'korlibs.math.geom.shape.emitPoints2.<anonymous>' call
          } else {
            if (tmp0_subject === 3) {
              // Inline function 'korlibs.math.geom.shape.emitPoints2.<anonymous>' call
              var tmp9 = n;
              n = tmp9 + 1 | 0;
              var tmp_3 = path.i1t_1.b1(tmp9);
              var tmp10 = n;
              n = tmp10 + 1 | 0;
              var c0 = new Vector2D(tmp_3, path.i1t_1.b1(tmp10));
              var tmp11 = n;
              n = tmp11 + 1 | 0;
              var tmp_4 = path.i1t_1.b1(tmp11);
              var tmp12 = n;
              n = tmp12 + 1 | 0;
              var c1 = new Vector2D(tmp_4, path.i1t_1.b1(tmp12));
              var tmp13 = n;
              n = tmp13 + 1 | 0;
              var tmp_5 = path.i1t_1.b1(tmp13);
              var tmp14 = n;
              n = tmp14 + 1 | 0;
              var a_1 = new Vector2D(tmp_5, path.i1t_1.b1(tmp14));
              var sum_0 = Companion_getInstance_28().d1l(l, c0) + Companion_getInstance_28().d1l(c0, c1) + Companion_getInstance_28().d1l(c1, a_1);
              // Inline function 'korlibs.math.geom.shape.approximateCurve' call
              // Inline function 'kotlin.math.max' call
              var a_2 = numberToInt(sum_0);
              var rcurveSteps_0 = Math.max(a_2, 20);
              var dt_0 = 1.0 / rcurveSteps_0;
              var lastPos_0 = {_v: Vector2D_init_$Create$_1()};
              var prevPos_0 = {_v: Vector2D_init_$Create$_1()};
              var emittedCount_0 = {_v: 0};
              // Inline function 'korlibs.math.geom.shape.emitPoints2.<anonymous>.<anonymous>' call
              var ratio_1 = Companion_getInstance_12().z17_1;
              // Inline function 'korlibs.math.geom.shape.approximateCurve.<anonymous>' call
              lastPos_0._v = Companion_getInstance_31().l1m(l, c0, c1, a_1, ratio_1);
              var nStart_0 = false ? 0 : 1;
              var nEnd_0 = true ? rcurveSteps_0 : rcurveSteps_0 - 1 | 0;
              var inductionVariable_0 = nStart_0;
              if (inductionVariable_0 <= nEnd_0)
                do {
                  var n_2 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var ratio_2 = _Ratio___init__impl__9mwvn2_0(n_2 * dt_0);
                  // Inline function 'korlibs.math.geom.shape.emitPoints2.<anonymous>.<anonymous>' call
                  // Inline function 'korlibs.math.geom.shape.approximateCurve.<anonymous>' call
                  var it_2 = Companion_getInstance_31().l1m(l, c0, c1, a_1, ratio_2);
                  // Inline function 'korlibs.math.geom.shape.emitPoints2.<anonymous>.<anonymous>' call
                  // Inline function 'korlibs.math.geom.vector.PolygonScanline.add.<anonymous>' call
                  this.s1t(it_2, false);
                  emittedCount_0._v = emittedCount_0._v + 1 | 0;
                  lastPos_0._v = prevPos_0._v;
                  prevPos_0._v = it_2;
                }
                 while (!(n_2 === nEnd_0));
              l = a_1;
              // Inline function 'korlibs.math.geom.shape.emitPoints2.<anonymous>' call
            } else {
              if (tmp0_subject === 4) {
                // Inline function 'korlibs.math.geom.shape.emitPoints2.<anonymous>' call
                // Inline function 'korlibs.math.geom.vector.PolygonScanline.add.<anonymous>' call
                var p = i;
                this.s1t(p, false);
                // Inline function 'korlibs.math.geom.shape.emitPoints2.<anonymous>' call
                // Inline function 'korlibs.math.geom.vector.PolygonScanline.add.<anonymous>' call
                if (true) {
                  this.r13();
                }
              }
            }
          }
        }
      }
    }
    // Inline function 'korlibs.math.geom.vector.PolygonScanline.add.<anonymous>' call
    if (false) {
      this.r13();
    }
  };
  protoOf(PolygonScanline).s1t = function (p, move) {
    var tmp;
    if (move) {
      this.g1n(p);
      tmp = Unit_instance;
    } else {
      this.f1t(p);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(PolygonScanline).r13 = function () {
    this.e1t(this.o1s_1, this.p1s_1);
  };
  protoOf(PolygonScanline).t1t = function (y, winding, out) {
    this.u1s_1 = 0;
    this.t1s_1.n2();
    out.r1b();
    var tmp = this;
    var tmp_0 = this.u1s_1;
    // Inline function 'korlibs.math.geom.vector.PolygonScanline.forEachActiveEdgeAtY' call
    var edgesChecked = 0;
    // Inline function 'korlibs.math.geom.vector.AllBuckets.fastForEachY' call
    var this_0 = this.l1s_1;
    // Inline function 'korlibs.math.geom.vector.Buckets.fastForEachY' call
    var this_1 = this_0.a1s_1;
    if (this_1.l() > 0) {
      var tmp0_safe_receiver = this_1.k1r(y);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'korlibs.math.geom.vector.Bucket.fastForEach' call
        // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var array = tmp0_safe_receiver.e1r_1.rz_1;
        var n = 0;
        while (n < array.length) {
          // Inline function 'korlibs.math.geom.vector.AllBuckets.fastForEachY.<anonymous>' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'korlibs.js.get' call
          var tmp0 = n;
          n = tmp0 + 1 | 0;
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'korlibs.math.geom.vector.PolygonScanline.forEachActiveEdgeAtY.<anonymous>' call
          var edge = array[tmp0];
          edgesChecked = edgesChecked + 1 | 0;
          if (edge.v1t(y)) {
            // Inline function 'korlibs.math.geom.vector.PolygonScanline.scanline.<anonymous>' call
            if (!edge.t1r_1) {
              this.t1s_1.a1t(edge.u1t(y), edge.q1r_1);
            }
          }
        }
      }
    }
    // Inline function 'korlibs.math.geom.vector.Buckets.fastForEachY' call
    var this_2 = this_0.b1s_1;
    if (this_2.l() > 0) {
      var tmp0_safe_receiver_0 = this_2.k1r(y);
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'korlibs.math.geom.vector.Bucket.fastForEach' call
        // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var array_0 = tmp0_safe_receiver_0.e1r_1.rz_1;
        var n_0 = 0;
        while (n_0 < array_0.length) {
          // Inline function 'korlibs.math.geom.vector.AllBuckets.fastForEachY.<anonymous>' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'korlibs.js.get' call
          var tmp0_0 = n_0;
          n_0 = tmp0_0 + 1 | 0;
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'korlibs.math.geom.vector.PolygonScanline.forEachActiveEdgeAtY.<anonymous>' call
          var edge_0 = array_0[tmp0_0];
          edgesChecked = edgesChecked + 1 | 0;
          if (edge_0.v1t(y)) {
            // Inline function 'korlibs.math.geom.vector.PolygonScanline.scanline.<anonymous>' call
            if (!edge_0.t1r_1) {
              this.t1s_1.a1t(edge_0.u1t(y), edge_0.q1r_1);
            }
          }
        }
      }
    }
    // Inline function 'korlibs.math.geom.vector.Buckets.fastForEachY' call
    var this_3 = this_0.c1s_1;
    if (this_3.l() > 0) {
      var tmp0_safe_receiver_1 = this_3.k1r(y);
      if (tmp0_safe_receiver_1 == null)
        null;
      else {
        // Inline function 'korlibs.math.geom.vector.Bucket.fastForEach' call
        // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var array_1 = tmp0_safe_receiver_1.e1r_1.rz_1;
        var n_1 = 0;
        while (n_1 < array_1.length) {
          // Inline function 'korlibs.math.geom.vector.AllBuckets.fastForEachY.<anonymous>' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'korlibs.js.get' call
          var tmp0_1 = n_1;
          n_1 = tmp0_1 + 1 | 0;
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'korlibs.math.geom.vector.PolygonScanline.forEachActiveEdgeAtY.<anonymous>' call
          var edge_1 = array_1[tmp0_1];
          edgesChecked = edgesChecked + 1 | 0;
          if (edge_1.v1t(y)) {
            // Inline function 'korlibs.math.geom.vector.PolygonScanline.scanline.<anonymous>' call
            if (!edge_1.t1r_1) {
              this.t1s_1.a1t(edge_1.u1t(y), edge_1.q1r_1);
            }
          }
        }
      }
    }
    tmp.u1s_1 = tmp_0 + edgesChecked | 0;
    genericSort(this.t1s_1, 0, this.t1s_1.l() - 1 | 0, IntArrayListSort_getInstance());
    var tempX = this.t1s_1.y1s_1;
    var tempW = this.t1s_1.z1s_1;
    if (this.t1s_1.l() >= 2) {
      var tmp0_2 = winding.q9_1;
      if (tmp0_2 === 0) {
        var progression = step(until(0, tempX.l() - 1 | 0), 2);
        var inductionVariable = progression.la_1;
        var last = progression.ma_1;
        var step_0 = progression.na_1;
        if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + step_0 | 0;
            var a = tempX.gx(i);
            var b = tempX.gx(i + 1 | 0);
            out.x1b(a, b);
          }
           while (!(i === last));
      } else if (tmp0_2 === 1) {
        var count = 0;
        var startX = 0;
        var endX = 0;
        var pending = false;
        var inductionVariable_0 = 0;
        var last_0 = tempX.l() - 1 | 0;
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var a_0 = tempX.gx(i_0);
            count = count + tempW.gx(i_0) | 0;
            var b_0 = tempX.gx(i_0 + 1 | 0);
            if (!(count === 0)) {
              if (pending ? !(a_0 === endX) : false) {
                out.x1b(startX, endX);
                startX = a_0;
                endX = b_0;
              } else {
                if (!pending) {
                  startX = a_0;
                }
                endX = b_0;
              }
              pending = true;
            }
          }
           while (inductionVariable_0 < last_0);
        if (pending) {
          out.x1b(startX, endX);
        }
      }
    }
    return out;
  };
  protoOf(PolygonScanline).w1t = function (x, y, winding) {
    return this.x1t(this.w1s(x), this.w1s(y), winding);
  };
  protoOf(PolygonScanline).x1t = function (x, y, winding) {
    var ss = this.v1s_1;
    this.t1t(y, winding, ss.r1b());
    return ss.eg(x);
  };
  function Companion_37() {
    this.a1u_1 = 20;
    this.b1u_1 = 0;
    this.c1u_1 = 80;
    this.d1u_1 = 320;
    this.e1u_1 = 1280;
  }
  var Companion_instance_37;
  function Companion_getInstance_37() {
    return Companion_instance_37;
  }
  function RastScale() {
  }
  protoOf(RastScale).y1t = function () {
    return 20;
  };
  protoOf(RastScale).z1t = function () {
    return 0;
  };
  protoOf(RastScale).w1s = function (_this__u8e3s4) {
    return numberToInt(_this__u8e3s4 * this.y1t()) + this.z1t() | 0;
  };
  function Companion_38() {
  }
  var Companion_instance_38;
  function Companion_getInstance_38() {
    return Companion_instance_38;
  }
  function MEdge() {
    this.m1r_1 = 0;
    this.n1r_1 = 0;
    this.o1r_1 = 0;
    this.p1r_1 = 0;
    this.q1r_1 = 0;
    this.r1r_1 = 0;
    this.s1r_1 = 0;
    this.t1r_1 = false;
    this.u1r_1 = false;
    this.v1r_1 = 0;
  }
  protoOf(MEdge).x1s = function (ax, ay, bx, by, wind) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.math.geom.vector.MEdge.setTo.<anonymous>' call
    this.m1r_1 = ax;
    this.n1r_1 = ay;
    this.o1r_1 = bx;
    this.p1r_1 = by;
    this.s1r_1 = bx - ax | 0;
    this.r1r_1 = by - ay | 0;
    this.t1r_1 = ay === by;
    this.u1r_1 = ax === bx;
    this.q1r_1 = wind;
    this.v1r_1 = this.u1r_1 ? 0 : ay - (imul(ax, this.r1r_1) / this.s1r_1 | 0) | 0;
    return this;
  };
  protoOf(MEdge).w1r = function () {
    // Inline function 'kotlin.math.min' call
    var a = this.n1r_1;
    var b = this.p1r_1;
    return Math.min(a, b);
  };
  protoOf(MEdge).x1r = function () {
    // Inline function 'kotlin.math.max' call
    var a = this.n1r_1;
    var b = this.p1r_1;
    return Math.max(a, b);
  };
  protoOf(MEdge).v1t = function (y) {
    return y >= this.n1r_1 ? y < this.p1r_1 : false;
  };
  protoOf(MEdge).u1t = function (y) {
    return (this.u1r_1 ? true : this.r1r_1 === 0) ? this.m1r_1 : imul(y - this.v1r_1 | 0, this.s1r_1) / this.r1r_1 | 0;
  };
  protoOf(MEdge).toString = function () {
    return 'Edge([' + this.m1r_1 + ',' + this.n1r_1 + ']-[' + this.o1r_1 + ',' + this.p1r_1 + '])';
  };
  function VectorBuilder() {
  }
  function Companion_39() {
  }
  var Companion_instance_39;
  function Companion_getInstance_39() {
    return Companion_instance_39;
  }
  function ensureMoveTo($this, p) {
    if ($this.dy())
      return false;
    $this.g1n(p);
    return true;
  }
  function Command() {
    this.m1u_1 = 0;
    this.n1u_1 = 1;
    this.o1u_1 = 2;
    this.p1u_1 = 3;
    this.q1u_1 = 4;
  }
  var Command_instance;
  function Command_getInstance() {
    return Command_instance;
  }
  function VectorPath(commands, data, winding, optimize) {
    commands = commands === VOID ? new IntArrayList() : commands;
    data = data === VOID ? new DoubleArrayList() : data;
    winding = winding === VOID ? Companion_instance_40.r1u() : winding;
    optimize = optimize === VOID ? true : optimize;
    AbstractShape2D.call(this);
    this.h1t_1 = commands;
    this.i1t_1 = data;
    this.j1t_1 = winding;
    this.k1t_1 = optimize;
    this.l1t_1 = new Mixin();
    this.m1t_1 = false;
    this.n1t_1 = 0;
    this.o1t_1 = Vector2D_init_$Create$_1();
    this.p1t_1 = Vector2D_init_$Create$_1();
    this.q1t_1 = null;
    this.r1t_1 = null;
  }
  protoOf(VectorPath).u14 = function (_set____db54di) {
    this.l1t_1.u14(_set____db54di);
  };
  protoOf(VectorPath).v14 = function () {
    return this.l1t_1.v14();
  };
  protoOf(VectorPath).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof VectorPath) {
      tmp_1 = this.h1t_1.equals(other.h1t_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.i1t_1.equals(other.i1t_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.j1t_1.equals(other.j1t_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(VectorPath).hashCode = function () {
    return (this.h1t_1.hashCode() + imul(this.i1t_1.hashCode(), 13) | 0) + imul(this.j1t_1.q9_1, 111) | 0;
  };
  protoOf(VectorPath).g1n = function (p) {
    if (this.h1t_1.dy() ? this.h1t_1.ey() === 0 : false) {
      if (this.o1t_1.equals(p))
        return Unit_instance;
    }
    this.h1t_1.ay(0);
    this.i1t_1.px(p.f18_1, p.g18_1);
    this.o1t_1 = p;
    this.p1t_1 = p;
    this.n1t_1 = this.n1t_1 + 1 | 0;
  };
  protoOf(VectorPath).f1t = function (p) {
    if (ensureMoveTo(this, p) ? this.k1t_1 : false)
      return Unit_instance;
    if (p.equals(this.o1t_1) ? this.k1t_1 : false)
      return Unit_instance;
    this.h1t_1.ay(1);
    this.i1t_1.px(p.f18_1, p.g18_1);
    this.o1t_1 = p;
    this.n1t_1 = this.n1t_1 + 1 | 0;
  };
  protoOf(VectorPath).h1n = function (c1, c2, a) {
    ensureMoveTo(this, c1);
    this.h1t_1.ay(3);
    this.i1t_1.qx(c1.f18_1, c1.g18_1, c2.f18_1, c2.g18_1, a.f18_1, a.g18_1);
    this.o1t_1 = a;
    this.n1t_1 = this.n1t_1 + 1 | 0;
  };
  protoOf(VectorPath).r13 = function () {
    this.h1t_1.ay(4);
    this.o1t_1 = this.p1t_1;
    this.n1t_1 = this.n1t_1 + 1 | 0;
  };
  protoOf(VectorPath).f1u = function () {
    return this.i1t_1.l() / 2 | 0;
  };
  protoOf(VectorPath).s1u = function (p) {
    return this.w1t(p.f18_1, p.g18_1, this.j1t_1);
  };
  protoOf(VectorPath).t1u = function () {
    if (this.r1t_1 == null)
      this.r1t_1 = new PolygonScanline();
    var scanline = ensureNotNull(this.r1t_1);
    if (!(scanline.e1s_1 === this.n1t_1)) {
      scanline.n12();
      scanline.g1t(this);
      scanline.e1s_1 = this.n1t_1;
    }
    return ensureNotNull(this.r1t_1);
  };
  protoOf(VectorPath).w1t = function (x, y, winding) {
    return this.t1u().w1t(x, y, winding);
  };
  protoOf(VectorPath).u1u = function () {
    // Inline function 'kotlin.text.trimEnd' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.math.geom.vector.VectorPath.toSvgString.<anonymous>' call
    // Inline function 'korlibs.math.geom.vector.VectorPath.visitCmds' call
    var n = 0;
    // Inline function 'korlibs.datastructure.iterators.fastForEach' call
    var this_1 = this.h1t_1;
    var n_0 = 0;
    while (n_0 < this_1.l()) {
      // Inline function 'korlibs.math.geom.vector.VectorPath.visitCmds.<anonymous>' call
      var tmp0 = n_0;
      n_0 = tmp0 + 1 | 0;
      switch (this_1.gx(tmp0)) {
        case 0:
          // Inline function 'korlibs.math.geom.vector.VectorPath.toSvgString.<anonymous>.<anonymous>' call

          var tmp1 = n;
          n = tmp1 + 1 | 0;
          var tmp = this.i1t_1.b1(tmp1);
          var tmp2 = n;
          n = tmp2 + 1 | 0;
          var name_for_destructuring_parameter_0_fjsvno = new Vector2D(tmp, this.i1t_1.b1(tmp2));
          var x = name_for_destructuring_parameter_0_fjsvno.re();
          var y = name_for_destructuring_parameter_0_fjsvno.se();
          this_0.f5('M' + get_niceStr(x) + ',' + get_niceStr(y) + ' ');
          break;
        case 1:
          // Inline function 'korlibs.math.geom.vector.VectorPath.toSvgString.<anonymous>.<anonymous>' call

          var tmp3 = n;
          n = tmp3 + 1 | 0;
          var tmp_0 = this.i1t_1.b1(tmp3);
          var tmp4 = n;
          n = tmp4 + 1 | 0;
          var name_for_destructuring_parameter_0_fjsvno_0 = new Vector2D(tmp_0, this.i1t_1.b1(tmp4));
          var x_0 = name_for_destructuring_parameter_0_fjsvno_0.re();
          var y_0 = name_for_destructuring_parameter_0_fjsvno_0.se();
          this_0.f5('L' + get_niceStr(x_0) + ',' + get_niceStr(y_0) + ' ');
          break;
        case 2:
          // Inline function 'korlibs.math.geom.vector.VectorPath.toSvgString.<anonymous>.<anonymous>' call

          var tmp5 = n;
          n = tmp5 + 1 | 0;
          var tmp_1 = this.i1t_1.b1(tmp5);
          var tmp6 = n;
          n = tmp6 + 1 | 0;
          var name_for_destructuring_parameter_0_fjsvno_1 = new Vector2D(tmp_1, this.i1t_1.b1(tmp6));
          var tmp7 = n;
          n = tmp7 + 1 | 0;
          var tmp_2 = this.i1t_1.b1(tmp7);
          var tmp8 = n;
          n = tmp8 + 1 | 0;
          var name_for_destructuring_parameter_1_fjsvnn = new Vector2D(tmp_2, this.i1t_1.b1(tmp8));
          var x1 = name_for_destructuring_parameter_0_fjsvno_1.re();
          var y1 = name_for_destructuring_parameter_0_fjsvno_1.se();
          var x2 = name_for_destructuring_parameter_1_fjsvnn.re();
          var y2 = name_for_destructuring_parameter_1_fjsvnn.se();
          this_0.f5('Q' + get_niceStr(x1) + ',' + get_niceStr(y1) + ',' + get_niceStr(x2) + ',' + get_niceStr(y2) + ' ');
          break;
        case 3:
          // Inline function 'korlibs.math.geom.vector.VectorPath.toSvgString.<anonymous>.<anonymous>' call

          var tmp9 = n;
          n = tmp9 + 1 | 0;
          var tmp_3 = this.i1t_1.b1(tmp9);
          var tmp10 = n;
          n = tmp10 + 1 | 0;
          var name_for_destructuring_parameter_0_fjsvno_2 = new Vector2D(tmp_3, this.i1t_1.b1(tmp10));
          var tmp11 = n;
          n = tmp11 + 1 | 0;
          var tmp_4 = this.i1t_1.b1(tmp11);
          var tmp12 = n;
          n = tmp12 + 1 | 0;
          var name_for_destructuring_parameter_1_fjsvnn_0 = new Vector2D(tmp_4, this.i1t_1.b1(tmp12));
          var tmp13 = n;
          n = tmp13 + 1 | 0;
          var tmp_5 = this.i1t_1.b1(tmp13);
          var tmp14 = n;
          n = tmp14 + 1 | 0;
          var name_for_destructuring_parameter_2_fjsvnm = new Vector2D(tmp_5, this.i1t_1.b1(tmp14));
          var x1_0 = name_for_destructuring_parameter_0_fjsvno_2.re();
          var y1_0 = name_for_destructuring_parameter_0_fjsvno_2.se();
          var x2_0 = name_for_destructuring_parameter_1_fjsvnn_0.re();
          var y2_0 = name_for_destructuring_parameter_1_fjsvnn_0.se();
          var x3 = name_for_destructuring_parameter_2_fjsvnm.re();
          var y3 = name_for_destructuring_parameter_2_fjsvnm.se();
          this_0.f5('C' + get_niceStr(x1_0) + ',' + get_niceStr(y1_0) + ',' + get_niceStr(x2_0) + ',' + get_niceStr(y2_0) + ',' + get_niceStr(x3) + ',' + get_niceStr(y3) + ' ');
          break;
        case 4:
          // Inline function 'korlibs.math.geom.vector.VectorPath.toSvgString.<anonymous>.<anonymous>' call

          this_0.f5('Z ');
          break;
      }
    }
    var this_2 = this_0.toString();
    return toString(trimEnd(isCharSequence(this_2) ? this_2 : THROW_CCE()));
  };
  protoOf(VectorPath).toString = function () {
    return 'VectorPath(' + this.u1u() + ')';
  };
  var Winding_EVEN_ODD_instance;
  var Winding_NON_ZERO_instance;
  function Companion_40() {
  }
  protoOf(Companion_40).r1u = function () {
    return Winding_NON_ZERO_getInstance();
  };
  var Companion_instance_40;
  function Companion_getInstance_40() {
    return Companion_instance_40;
  }
  var Winding_entriesInitialized;
  function Winding_initEntries() {
    if (Winding_entriesInitialized)
      return Unit_instance;
    Winding_entriesInitialized = true;
    Winding_EVEN_ODD_instance = new Winding('EVEN_ODD', 0, 'evenOdd');
    Winding_NON_ZERO_instance = new Winding('NON_ZERO', 1, 'nonZero');
  }
  function Winding(name, ordinal, str) {
    Enum.call(this, name, ordinal);
    this.x1u_1 = str;
  }
  function Winding_NON_ZERO_getInstance() {
    Winding_initEntries();
    return Winding_NON_ZERO_instance;
  }
  function MMatrix$Companion$POOL$lambda(it) {
    it.e1v();
    return Unit_instance;
  }
  function MMatrix$Companion$POOL$lambda_0(it) {
    return new MMatrix();
  }
  function Companion_41() {
    Companion_instance_41 = this;
    var tmp = this;
    var tmp_0 = MMatrix$Companion$POOL$lambda;
    tmp.f1v_1 = new ConcurrentPool(tmp_0, VOID, MMatrix$Companion$POOL$lambda_0);
  }
  var Companion_instance_41;
  function Companion_getInstance_41() {
    if (Companion_instance_41 == null)
      new Companion_41();
    return Companion_instance_41;
  }
  function MMatrix(a, b, c, d, tx, ty) {
    Companion_getInstance_41();
    a = a === VOID ? 1.0 : a;
    b = b === VOID ? 0.0 : b;
    c = c === VOID ? 0.0 : c;
    d = d === VOID ? 1.0 : d;
    tx = tx === VOID ? 0.0 : tx;
    ty = ty === VOID ? 0.0 : ty;
    this.y1u_1 = a;
    this.z1u_1 = b;
    this.a1v_1 = c;
    this.b1v_1 = d;
    this.c1v_1 = tx;
    this.d1v_1 = ty;
  }
  protoOf(MMatrix).g1v = function (a, b, c, d, tx, ty) {
    this.y1u_1 = a;
    this.z1u_1 = b;
    this.a1v_1 = c;
    this.b1v_1 = d;
    this.c1v_1 = tx;
    this.d1v_1 = ty;
    return this;
  };
  protoOf(MMatrix).e1v = function () {
    return this.g1v(1.0, 0.0, 0.0, 1.0, 0.0, 0.0);
  };
  protoOf(MMatrix).toString = function () {
    return 'Matrix(a=' + this.y1u_1 + ', b=' + this.z1u_1 + ', c=' + this.a1v_1 + ', d=' + this.b1v_1 + ', tx=' + this.c1v_1 + ', ty=' + this.d1v_1 + ')';
  };
  protoOf(MMatrix).hashCode = function () {
    var result = getNumberHashCode(this.y1u_1);
    result = imul(result, 31) + getNumberHashCode(this.z1u_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.a1v_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b1v_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.c1v_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d1v_1) | 0;
    return result;
  };
  protoOf(MMatrix).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MMatrix))
      return false;
    var tmp0_other_with_cast = other instanceof MMatrix ? other : THROW_CCE();
    if (!equals(this.y1u_1, tmp0_other_with_cast.y1u_1))
      return false;
    if (!equals(this.z1u_1, tmp0_other_with_cast.z1u_1))
      return false;
    if (!equals(this.a1v_1, tmp0_other_with_cast.a1v_1))
      return false;
    if (!equals(this.b1v_1, tmp0_other_with_cast.b1v_1))
      return false;
    if (!equals(this.c1v_1, tmp0_other_with_cast.c1v_1))
      return false;
    if (!equals(this.d1v_1, tmp0_other_with_cast.d1v_1))
      return false;
    return true;
  };
  function get_immutable(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function toMatrix4(_this__u8e3s4) {
    if (_this__u8e3s4.t1d())
      return Companion_getInstance_21().w1g_1;
    return Companion_getInstance_21().s1h(_this__u8e3s4.p1e_1, _this__u8e3s4.r1e_1, 0.0, _this__u8e3s4.t1e_1, _this__u8e3s4.q1e_1, _this__u8e3s4.s1e_1, 0.0, _this__u8e3s4.u1e_1, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
  }
  function Companion_42() {
    Companion_instance_42 = this;
    this.y1g_1 = 0;
    this.z1g_1 = 1;
    this.a1h_1 = 2;
    this.b1h_1 = 3;
    this.c1h_1 = 4;
    this.d1h_1 = 5;
    this.e1h_1 = 6;
    this.f1h_1 = 7;
    this.g1h_1 = 8;
    this.h1h_1 = 9;
    this.i1h_1 = 10;
    this.j1h_1 = 11;
    this.k1h_1 = 12;
    this.l1h_1 = 13;
    this.m1h_1 = 14;
    this.n1h_1 = 15;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.o1h_1 = new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    var tmp_0 = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp_0.p1h_1 = new Int32Array([0, 4, 8, 12, 1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15]);
    var tmp_1 = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp_1.q1h_1 = new Int32Array([0, 1, 2, 4, 5, 6, 8, 9, 10]);
    var tmp_2 = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp_2.r1h_1 = new Int32Array([0, 4, 8, 1, 5, 9, 2, 6, 10]);
  }
  var Companion_instance_42;
  function Companion_getInstance_42() {
    if (Companion_instance_42 == null)
      new Companion_42();
    return Companion_instance_42;
  }
  function Companion_43() {
  }
  var Companion_instance_43;
  function Companion_getInstance_43() {
    return Companion_instance_43;
  }
  function Circle$lazyVectorPath$delegate$lambda(this$0) {
    return function () {
      // Inline function 'korlibs.math.geom.shape.buildVectorPath' call
      // Inline function 'kotlin.apply' call
      var this_0 = new VectorPath();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'korlibs.math.geom.Circle.lazyVectorPath$delegate.<anonymous>.<anonymous>' call
      this_0.l1u(this$0.h1v_1, this$0.i1v_1);
      return this_0;
    };
  }
  function Circle(center, radius) {
    AbstractShape2D.call(this);
    this.h1v_1 = center;
    this.i1v_1 = radius;
    var tmp = this;
    tmp.j1v_1 = lazy_0(Circle$lazyVectorPath$delegate$lambda(this));
  }
  protoOf(Circle).toString = function () {
    return 'Circle(center=' + this.h1v_1 + ', radius=' + this.i1v_1 + ')';
  };
  protoOf(Circle).hashCode = function () {
    var result = this.h1v_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.i1v_1) | 0;
    return result;
  };
  protoOf(Circle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Circle))
      return false;
    var tmp0_other_with_cast = other instanceof Circle ? other : THROW_CCE();
    if (!this.h1v_1.equals(tmp0_other_with_cast.h1v_1))
      return false;
    if (!equals(this.i1v_1, tmp0_other_with_cast.i1v_1))
      return false;
    return true;
  };
  function arraycopy(src, srcPos, dst, dstPos, size) {
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = srcPos + size | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstPos, srcPos, endIndex);
  }
  function arraycopy_0(src, srcPos, dst, dstPos, size) {
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = srcPos + size | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstPos, srcPos, endIndex);
  }
  function arraycopy_1(src, srcPos, dst, dstPos, size) {
    // Inline function 'kotlin.collections.copyInto' call
    var destination = isArray(dst) ? dst : THROW_CCE();
    var endIndex = srcPos + size | 0;
    arrayCopy(src, destination, dstPos, srcPos, endIndex);
  }
  function arraycopy_2(src, srcPos, dst, dstPos, size) {
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = srcPos + size | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstPos, srcPos, endIndex);
  }
  function arraycopy_3(src, srcPos, dst, dstPos, size) {
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = srcPos + size | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstPos, srcPos, endIndex);
  }
  function _UShortArrayInt___init__impl__kdofb8(data) {
    return data;
  }
  function _UShortArrayInt___get_data__impl__l4stnv($this) {
    return $this;
  }
  function arraycopy_4(src, srcPos, dst, dstPos, size) {
    Companion_instance_51.k1v(src, srcPos, dst, dstPos, size);
  }
  function arrayfill(array, value, start, end) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? get_size_0(array) : end;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        setUInt8(array, n, value);
      }
       while (inductionVariable < end);
  }
  function arrayequal(src, srcPos, dst, dstPos, size) {
    return Companion_instance_51.l1v(src, srcPos, dst, dstPos, size);
  }
  function arraycopy_5(src, srcPos, dst, dstPos, size) {
    Uint16Buffer__setArray_impl_x4uzt(dst, dstPos, src, srcPos, size);
  }
  function asUShortArrayInt(_this__u8e3s4) {
    return _UShortArrayInt___init__impl__kdofb8(_this__u8e3s4);
  }
  function arrayadd(array, value, start, end) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? (new Uint16Buffer(array)).l() : end;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        Uint16Buffer__set_impl_g0kliu(array, n, Uint16Buffer__get_impl_6qi0dm(array, n) + value | 0);
      }
       while (inductionVariable < end);
  }
  function arraycopy_6(src, srcPos, dst, dstPos, size) {
    return arraycopy_4(_Int32Buffer___get_buffer__impl__dnrimm(src), imul(srcPos, 4), _Int32Buffer___get_buffer__impl__dnrimm(dst), imul(dstPos, 4), imul(size, 4));
  }
  function arrayfill_0(array, value, start, end) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? array.length : end;
    return fill(array, value, start, end);
  }
  function arraycopy_7(src, srcPos, dst, dstPos, size) {
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = srcPos + size | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstPos, srcPos, endIndex);
  }
  function arraycopy_8(src, srcPos, dst, dstPos, size) {
    Int8Buffer__setArray_impl_oimleb(dst, dstPos, src, srcPos, size);
  }
  function arraycopy_9(src, srcPos, dst, dstPos, size) {
    Float32Buffer__setArray_impl_eosj51(dst, dstPos, src, srcPos, size);
  }
  function arraycopy_10(src, srcPos, dst, dstPos, size) {
    Int32Buffer__setArray_impl_eeeiw8(dst, dstPos, src, srcPos, size);
  }
  function arraycopy_11(src, srcPos, dst, dstPos, size) {
    dst.n1v(dstPos, src, srcPos, size, false);
  }
  function extract(_this__u8e3s4, offset, count) {
    return (_this__u8e3s4 >>> offset | 0) & mask(count);
  }
  function insert(_this__u8e3s4, value, offset, count) {
    var mask_0 = mask(count);
    var clearValue = _this__u8e3s4 & ~(mask_0 << offset);
    return clearValue | (value & mask_0) << offset;
  }
  function signExtend(_this__u8e3s4, bits) {
    return _this__u8e3s4 << (32 - bits | 0) >> (32 - bits | 0);
  }
  function fromLowHigh(_this__u8e3s4, low, high) {
    return toLong(low).wb(new Long(-1, 0)).xb(toLong(high).tb(32));
  }
  function get_low(_this__u8e3s4) {
    return _this__u8e3s4.qa();
  }
  function get_high(_this__u8e3s4) {
    return _this__u8e3s4.vb(32).qa();
  }
  function insert8(_this__u8e3s4, value, offset) {
    // Inline function 'korlibs.memory.insertMask' call
    return _this__u8e3s4 & ~(255 << offset) | (value & 255) << offset;
  }
  function insert_0(_this__u8e3s4, value, offset) {
    var ivalue = value ? 1 : 0;
    return _this__u8e3s4 & ~(1 << offset) | ivalue << offset;
  }
  function setBits(_this__u8e3s4, bits, set) {
    return set ? setBits_0(_this__u8e3s4, bits) : unsetBits(_this__u8e3s4, bits);
  }
  function insert5(_this__u8e3s4, value, offset) {
    // Inline function 'korlibs.memory.insertMask' call
    return _this__u8e3s4 & ~(31 << offset) | (value & 31) << offset;
  }
  function insert2(_this__u8e3s4, value, offset) {
    // Inline function 'korlibs.memory.insertMask' call
    return _this__u8e3s4 & ~(3 << offset) | (value & 3) << offset;
  }
  function insert4(_this__u8e3s4, value, offset) {
    // Inline function 'korlibs.memory.insertMask' call
    return _this__u8e3s4 & ~(15 << offset) | (value & 15) << offset;
  }
  function insert3(_this__u8e3s4, value, offset) {
    // Inline function 'korlibs.memory.insertMask' call
    return _this__u8e3s4 & ~(7 << offset) | (value & 7) << offset;
  }
  function insert14(_this__u8e3s4, value, offset) {
    // Inline function 'korlibs.memory.insertMask' call
    return _this__u8e3s4 & ~(16383 << offset) | (value & 16383) << offset;
  }
  function extractScaledf01(_this__u8e3s4, offset, count) {
    return extract(_this__u8e3s4, offset, count) / mask(count);
  }
  function insertScaledf01(_this__u8e3s4, value, offset, count) {
    return insert(_this__u8e3s4, numberToInt(clamp01_0(value) * mask(offset)), offset, count);
  }
  function mask(_this__u8e3s4) {
    return (1 << _this__u8e3s4) - 1 | 0;
  }
  function setBits_0(_this__u8e3s4, bits) {
    return _this__u8e3s4 | bits;
  }
  function unsetBits(_this__u8e3s4, bits) {
    return _this__u8e3s4 & ~bits;
  }
  function _Float32Buffer___init__impl__403k2m(buffer) {
    return buffer;
  }
  function _Float32Buffer___get_buffer__impl__x5nu9x($this) {
    return $this;
  }
  function Float32Buffer__get_impl_659lhu($this, index) {
    // Inline function 'korlibs.memory.getF32' call
    var this_0 = _Float32Buffer___get_buffer__impl__x5nu9x($this);
    var byteOffset = imul(index, 4);
    return true ? this_0.p1v(byteOffset) : this_0.o1v(byteOffset);
  }
  function Float32Buffer__set_impl_34szne($this, index, value) {
    // Inline function 'korlibs.memory.setF32' call
    var this_0 = _Float32Buffer___get_buffer__impl__x5nu9x($this);
    var byteOffset = imul(index, 4);
    var tmp;
    if (true) {
      this_0.r1v(byteOffset, value);
      tmp = Unit_instance;
    } else {
      this_0.q1v(byteOffset, value);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function Float32Buffer__setArray_impl_eosj51($this, index, inp, offset, size) {
    return setArray(_Float32Buffer___get_buffer__impl__x5nu9x($this), imul(index, 4), inp, offset, size);
  }
  function asFloat32(_this__u8e3s4) {
    return _Float32Buffer___init__impl__403k2m(_this__u8e3s4);
  }
  function copyOf_3(_this__u8e3s4, newSize) {
    var out = Buffer_init_$Create$(newSize);
    // Inline function 'kotlin.math.min' call
    var a = _this__u8e3s4.s1v();
    var tmp$ret$0 = Math.min(a, newSize);
    arraycopy_4(_this__u8e3s4, 0, out, 0, tmp$ret$0);
    return out;
  }
  function setInt32(_this__u8e3s4, index, value) {
    return _this__u8e3s4.t1v(imul(index, 4), value);
  }
  function getInt32(_this__u8e3s4, index) {
    return _this__u8e3s4.u1v(imul(index, 4));
  }
  function _Uint16Buffer___init__impl__4401ya(buffer) {
    return buffer;
  }
  function _Uint16Buffer___get_buffer__impl__rei8ax($this) {
    return $this;
  }
  function Companion_44() {
    this.v1v_1 = 2;
  }
  var Companion_instance_44;
  function Companion_getInstance_44() {
    return Companion_instance_44;
  }
  function _Uint16Buffer___get_elementSizeInBytes__impl__tcik7m($this) {
    return 2;
  }
  function Uint16Buffer__get_impl_6qi0dm($this, index) {
    // Inline function 'korlibs.memory.getU16' call
    var this_0 = _Uint16Buffer___get_buffer__impl__rei8ax($this);
    var byteOffset = imul(index, 2);
    return true ? getU16LE(this_0, byteOffset) : getU16BE(this_0, byteOffset);
  }
  function Uint16Buffer__set_impl_g0kliu($this, index, value) {
    // Inline function 'korlibs.memory.set16' call
    var this_0 = _Uint16Buffer___get_buffer__impl__rei8ax($this);
    var byteOffset = imul(index, 2);
    var value_0 = toShort(value);
    var tmp;
    if (true) {
      this_0.x1v(byteOffset, value_0);
      tmp = Unit_instance;
    } else {
      this_0.w1v(byteOffset, value_0);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function Uint16Buffer__setArray_impl_x4uzt($this, index, inp, offset, size) {
    return setArray_0(_Uint16Buffer___get_buffer__impl__rei8ax($this), imul(index, 2), _UShortArrayInt___get_data__impl__l4stnv(inp), offset, size);
  }
  function Uint16Buffer__toString_impl_rxffha($this) {
    return 'Uint16Buffer(buffer=' + $this + ')';
  }
  function Uint16Buffer__hashCode_impl_lcipoz($this) {
    return $this.hashCode();
  }
  function Uint16Buffer__equals_impl_u4cl2n($this, other) {
    if (!(other instanceof Uint16Buffer))
      return false;
    var tmp0_other_with_cast = other instanceof Uint16Buffer ? other.y1v_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Uint16Buffer(buffer) {
    this.y1v_1 = buffer;
  }
  protoOf(Uint16Buffer).z1v = function () {
    return _Uint16Buffer___get_buffer__impl__rei8ax(this.y1v_1);
  };
  protoOf(Uint16Buffer).a1w = function () {
    return _Uint16Buffer___get_elementSizeInBytes__impl__tcik7m(this.y1v_1);
  };
  protoOf(Uint16Buffer).toString = function () {
    return Uint16Buffer__toString_impl_rxffha(this.y1v_1);
  };
  protoOf(Uint16Buffer).hashCode = function () {
    return Uint16Buffer__hashCode_impl_lcipoz(this.y1v_1);
  };
  protoOf(Uint16Buffer).equals = function (other) {
    return Uint16Buffer__equals_impl_u4cl2n(this.y1v_1, other);
  };
  function get_u16(_this__u8e3s4) {
    return asUInt16(_this__u8e3s4);
  }
  function setFloat32(_this__u8e3s4, index, value) {
    return _this__u8e3s4.r1v(imul(index, 4), value);
  }
  function _Int32Buffer___init__impl__o98lxn(buffer) {
    return buffer;
  }
  function _Int32Buffer___get_buffer__impl__dnrimm($this) {
    return $this;
  }
  function Int32Buffer__setArray_impl_eeeiw8($this, index, inp, offset, size) {
    return setArray_1(_Int32Buffer___get_buffer__impl__dnrimm($this), imul(index, 4), inp, offset, size);
  }
  function get_i32(_this__u8e3s4) {
    return asInt32(_this__u8e3s4);
  }
  function get_f32(_this__u8e3s4) {
    return asFloat32(_this__u8e3s4);
  }
  function allocDirect(_this__u8e3s4, size) {
    return Buffer_init_$Create$(size, true);
  }
  function allocNoDirect(_this__u8e3s4, size) {
    return Buffer_init_$Create$(size, false);
  }
  function get_size_0(_this__u8e3s4) {
    return _this__u8e3s4.s1v();
  }
  function _Int8Buffer___init__impl__e20lvc(buffer) {
    return buffer;
  }
  function _Int8Buffer___get_buffer__impl__q0gulb($this) {
    return $this;
  }
  function _Int8Buffer___init__impl__e20lvc_0(data, offset, size) {
    offset = offset === VOID ? 0 : offset;
    size = size === VOID ? data.length - offset | 0 : size;
    // Inline function 'kotlin.also' call
    var this_0 = Buffer_init_$Create$(imul(size, 1));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.memory.Int8Buffer.<init>.<anonymous>' call
    setArray_2(this_0, 0, data, offset, size);
    return _Int8Buffer___init__impl__e20lvc(this_0);
  }
  function Int8Buffer__setArray_impl_oimleb($this, index, inp, offset, size) {
    return setArray_2(_Int8Buffer___get_buffer__impl__q0gulb($this), imul(index, 1), inp, offset, size);
  }
  function sliceWithSize(_this__u8e3s4, start, size) {
    return sliceBuffer(_this__u8e3s4, start, start + size | 0);
  }
  function clone(_this__u8e3s4, direct) {
    direct = direct === VOID ? false : direct;
    var out = Buffer_init_$Create$(get_size_0(_this__u8e3s4), direct);
    arraycopy_4(_this__u8e3s4, 0, out, 0, get_size_0(_this__u8e3s4));
    return out;
  }
  function sliceBuffer(_this__u8e3s4, start, end) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? _this__u8e3s4.s1v() : end;
    if ((start > end ? true : !(0 <= start ? start <= _this__u8e3s4.s1v() : false)) ? true : !(0 <= end ? end <= _this__u8e3s4.s1v() : false)) {
      throw IllegalArgumentException_init_$Create$('invalid slice start:' + start + ', end:' + end + ' not in 0..' + _this__u8e3s4.s1v());
    }
    return _this__u8e3s4.b1w(start, end);
  }
  function get_i8(_this__u8e3s4) {
    return asInt8(_this__u8e3s4);
  }
  function setInt8(_this__u8e3s4, index, value) {
    return _this__u8e3s4.x1v(index, toShort(value));
  }
  function getInt8(_this__u8e3s4, index) {
    return _this__u8e3s4.c1w(index);
  }
  function setUInt8(_this__u8e3s4, index, value) {
    return _this__u8e3s4.d1w(index, toByte(value));
  }
  function checkNBufferSize(size) {
    if (size < 0)
      throw IllegalArgumentException_init_$Create$('invalid size ' + size);
    return size;
  }
  function hashCodeCommon(_this__u8e3s4, buffer) {
    var h = 1;
    var len = buffer.s1v();
    var inductionVariable = 0;
    var last = len / 4 | 0;
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        h = imul(31, h) + buffer.u1v(imul(n, 4)) | 0;
      }
       while (inductionVariable < last);
    var offset = imul(len / 4 | 0, 4);
    var inductionVariable_0 = 0;
    var last_0 = len % 4 | 0;
    if (inductionVariable_0 < last_0)
      do {
        var n_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        h = imul(31, h) + buffer.c1w(offset + n_0 | 0) | 0;
      }
       while (inductionVariable_0 < last_0);
    return h;
  }
  function equalsCommon(_this__u8e3s4, that, other) {
    var tmp;
    if (!(other instanceof Buffer)) {
      tmp = true;
    } else {
      tmp = !(get_size_0(that) === get_size_0(other));
    }
    if (tmp)
      return false;
    return Companion_instance_51.l1v(that, 0, other, 0, that.s1v());
  }
  function NBuffer_toString(buffer) {
    return 'Buffer(size=' + get_size_0(buffer) + ')';
  }
  function equalsCommon_0(_this__u8e3s4, src, srcPosBytes, dst, dstPosBytes, sizeInBytes, use64) {
    use64 = use64 === VOID ? true : use64;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((srcPosBytes + sizeInBytes | 0) <= src.s1v())) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((dstPosBytes + sizeInBytes | 0) <= dst.s1v())) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message_0 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var offset = 0;
    var remaining = sizeInBytes;
    if (use64) {
      var WORD = 8;
      var words = remaining / WORD | 0;
      remaining = remaining % WORD | 0;
      var inductionVariable = 0;
      if (inductionVariable < words)
        do {
          var n = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var v0 = src.e1w((srcPosBytes + offset | 0) + imul(n, WORD) | 0);
          var v1 = dst.e1w((dstPosBytes + offset | 0) + imul(n, WORD) | 0);
          if (!v0.equals(v1)) {
            return false;
          }
        }
         while (inductionVariable < words);
      offset = offset + imul(words, WORD) | 0;
    }
    var WORD_0 = 4;
    var words_0 = remaining / WORD_0 | 0;
    remaining = remaining % WORD_0 | 0;
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < words_0)
      do {
        var n_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v0_0 = src.u1v((srcPosBytes + offset | 0) + imul(n_0, WORD_0) | 0);
        var v1_0 = dst.u1v((dstPosBytes + offset | 0) + imul(n_0, WORD_0) | 0);
        if (!(v0_0 === v1_0)) {
          return false;
        }
      }
       while (inductionVariable_0 < words_0);
    offset = offset + imul(words_0, WORD_0) | 0;
    var inductionVariable_1 = 0;
    var last = remaining;
    if (inductionVariable_1 < last)
      do {
        var n_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var v0_1 = src.c1w((srcPosBytes + offset | 0) + n_1 | 0);
        var v1_1 = dst.c1w((dstPosBytes + offset | 0) + n_1 | 0);
        if (!(v0_1 === v1_1)) {
          return false;
        }
      }
       while (inductionVariable_1 < last);
    return true;
  }
  function TypedBuffer() {
  }
  function setArray(_this__u8e3s4, byteOffset, data, start, size, littleEndian) {
    start = start === VOID ? 0 : start;
    size = size === VOID ? data.length - start | 0 : size;
    littleEndian = littleEndian === VOID ? true : littleEndian;
    var tmp;
    if (littleEndian) {
      setArrayLE(_this__u8e3s4, byteOffset, data, start, size);
      tmp = Unit_instance;
    } else {
      setArrayBE(_this__u8e3s4, byteOffset, data, start, size);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function setArray_0(_this__u8e3s4, byteOffset, data, start, size, littleEndian) {
    start = start === VOID ? 0 : start;
    size = size === VOID ? data.length - start | 0 : size;
    littleEndian = littleEndian === VOID ? true : littleEndian;
    var tmp;
    if (littleEndian) {
      setArrayLE_0(_this__u8e3s4, byteOffset, data, start, size);
      tmp = Unit_instance;
    } else {
      setArrayBE_0(_this__u8e3s4, byteOffset, data, start, size);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function asUInt16(_this__u8e3s4) {
    return _Uint16Buffer___init__impl__4401ya(_this__u8e3s4);
  }
  function setArray_1(_this__u8e3s4, byteOffset, data, start, size, littleEndian) {
    start = start === VOID ? 0 : start;
    size = size === VOID ? data.length - start | 0 : size;
    littleEndian = littleEndian === VOID ? true : littleEndian;
    var tmp;
    if (littleEndian) {
      setArrayLE_1(_this__u8e3s4, byteOffset, data, start, size);
      tmp = Unit_instance;
    } else {
      setArrayBE_1(_this__u8e3s4, byteOffset, data, start, size);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function asInt32(_this__u8e3s4) {
    return _Int32Buffer___init__impl__o98lxn(_this__u8e3s4);
  }
  function setArray_2(_this__u8e3s4, byteOffset, data, start, size) {
    start = start === VOID ? 0 : start;
    size = size === VOID ? data.length - start | 0 : size;
    arraycopy_11(data, start, _this__u8e3s4, byteOffset, size);
  }
  function asInt8(_this__u8e3s4) {
    return _Int8Buffer___init__impl__e20lvc(_this__u8e3s4);
  }
  function setArrayLE(_this__u8e3s4, byteOffset, data, start, size) {
    start = start === VOID ? 0 : start;
    size = size === VOID ? data.length - start | 0 : size;
    var inductionVariable = 0;
    var tmp;
    if (inductionVariable < size) {
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'korlibs.memory.setArrayLE.<anonymous>' call
        var offset = byteOffset + imul(n, 4) | 0;
        var index = start + n | 0;
        _this__u8e3s4.r1v(offset, data[index]);
      }
       while (inductionVariable < size);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function setArrayBE(_this__u8e3s4, byteOffset, data, start, size) {
    start = start === VOID ? 0 : start;
    size = size === VOID ? data.length - start | 0 : size;
    var inductionVariable = 0;
    var tmp;
    if (inductionVariable < size) {
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'korlibs.memory.setArrayBE.<anonymous>' call
        var offset = byteOffset + imul(n, 4) | 0;
        var index = start + n | 0;
        _this__u8e3s4.q1v(offset, data[index]);
      }
       while (inductionVariable < size);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function setArrayLE_0(_this__u8e3s4, byteOffset, data, start, size) {
    start = start === VOID ? 0 : start;
    size = size === VOID ? data.length - start | 0 : size;
    var inductionVariable = 0;
    var tmp;
    if (inductionVariable < size) {
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'korlibs.memory.setArrayLE.<anonymous>' call
        var offset = byteOffset + imul(n, 2) | 0;
        var index = start + n | 0;
        _this__u8e3s4.x1v(offset, data[index]);
      }
       while (inductionVariable < size);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function setArrayBE_0(_this__u8e3s4, byteOffset, data, start, size) {
    start = start === VOID ? 0 : start;
    size = size === VOID ? data.length - start | 0 : size;
    var inductionVariable = 0;
    var tmp;
    if (inductionVariable < size) {
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'korlibs.memory.setArrayBE.<anonymous>' call
        var offset = byteOffset + imul(n, 2) | 0;
        var index = start + n | 0;
        _this__u8e3s4.w1v(offset, data[index]);
      }
       while (inductionVariable < size);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function getU16LE(_this__u8e3s4, byteOffset) {
    // Inline function 'korlibs.math.unsigned' call
    return _this__u8e3s4.f1w(byteOffset) & 65535;
  }
  function getU16BE(_this__u8e3s4, byteOffset) {
    // Inline function 'korlibs.math.unsigned' call
    return _this__u8e3s4.g1w(byteOffset) & 65535;
  }
  function setArrayLE_1(_this__u8e3s4, byteOffset, data, start, size) {
    start = start === VOID ? 0 : start;
    size = size === VOID ? data.length - start | 0 : size;
    var inductionVariable = 0;
    var tmp;
    if (inductionVariable < size) {
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'korlibs.memory.setArrayLE.<anonymous>' call
        var offset = byteOffset + imul(n, 4) | 0;
        var index = start + n | 0;
        _this__u8e3s4.t1v(offset, data[index]);
      }
       while (inductionVariable < size);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function setArrayBE_1(_this__u8e3s4, byteOffset, data, start, size) {
    start = start === VOID ? 0 : start;
    size = size === VOID ? data.length - start | 0 : size;
    var inductionVariable = 0;
    var tmp;
    if (inductionVariable < size) {
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'korlibs.memory.setArrayBE.<anonymous>' call
        var offset = byteOffset + imul(n, 4) | 0;
        var index = start + n | 0;
        _this__u8e3s4.h1w(offset, data[index]);
      }
       while (inductionVariable < size);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function ByteArrayBuilder_init_$Init$(initialCapacity, $this) {
    initialCapacity = initialCapacity === VOID ? 4096 : initialCapacity;
    ByteArrayBuilder.call($this, new Int8Array(initialCapacity), 0);
    return $this;
  }
  function ByteArrayBuilder_init_$Create$(initialCapacity) {
    return ByteArrayBuilder_init_$Init$(initialCapacity, objectCreate(protoOf(ByteArrayBuilder)));
  }
  function ensure_1($this, expected) {
    if ($this.i1w_1.length < expected) {
      if (!$this.j1w_1)
        throw RuntimeException_init_$Create$('ByteArrayBuffer configured to not grow!');
      var newSize = imul($this.i1w_1.length + 7 | 0, 5);
      var realNewSize = newSize < 0 ? IntCompanionObject_instance.MAX_VALUE / 2 | 0 : newSize;
      if (newSize < 0 ? expected > realNewSize : false) {
        // Inline function 'kotlin.error' call
        var message = "ByteArrayBuffer can't grow that much";
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var tmp = $this;
      var tmp_0 = $this.i1w_1;
      // Inline function 'kotlin.math.max' call
      var tmp$ret$0 = Math.max(expected, realNewSize);
      tmp.i1w_1 = copyOf_2(tmp_0, tmp$ret$0);
    }
  }
  function ensureCount($this, count) {
    ensure_1($this, $this.k1w_1 + count | 0);
  }
  function ByteArrayBuilder(data, size, allowGrow) {
    size = size === VOID ? data.length : size;
    allowGrow = allowGrow === VOID ? true : allowGrow;
    this.i1w_1 = data;
    this.j1w_1 = allowGrow;
    this.k1w_1 = size;
  }
  protoOf(ByteArrayBuilder).l = function () {
    return this.k1w_1;
  };
  protoOf(ByteArrayBuilder).l1w = function (array, offset, len) {
    ensureCount(this, len);
    arraycopy_3(array, offset, this.i1w_1, this.k1w_1, len);
    this.k1w_1 = this.k1w_1 + len | 0;
  };
  protoOf(ByteArrayBuilder).m1w = function (v) {
    ensure_1(this, this.k1w_1 + 1 | 0);
    var tmp = this.i1w_1;
    var tmp1 = this.k1w_1;
    this.k1w_1 = tmp1 + 1 | 0;
    tmp[tmp1] = v;
  };
  protoOf(ByteArrayBuilder).n1w = function () {
    return copyOf_2(this.i1w_1, this.k1w_1);
  };
  function getS16LE(_this__u8e3s4, offset) {
    // Inline function 'korlibs.memory.get16LE' call
    var tmp$ret$0 = u8$accessor$2iqh4l(_this__u8e3s4, offset + 0 | 0) << 0 | u8$accessor$2iqh4l(_this__u8e3s4, offset + 1 | 0) << 8;
    return signExtend(tmp$ret$0, 16);
  }
  function getS16(_this__u8e3s4, offset, littleEndian) {
    return littleEndian ? getS16LE(_this__u8e3s4, offset) : getS16BE(_this__u8e3s4, offset);
  }
  function getS16BE(_this__u8e3s4, offset) {
    // Inline function 'korlibs.memory.get16BE' call
    var tmp$ret$0 = u8$accessor$2iqh4l(_this__u8e3s4, offset + 1 | 0) << 0 | u8$accessor$2iqh4l(_this__u8e3s4, offset + 0 | 0) << 8;
    return signExtend(tmp$ret$0, 16);
  }
  function u8(_this__u8e3s4, offset) {
    return _this__u8e3s4[offset] & 255;
  }
  function u8$accessor$2iqh4l(_this__u8e3s4, offset) {
    return u8(_this__u8e3s4, offset);
  }
  function _ByteUnits___init__impl__x795am(bytes) {
    return bytes;
  }
  function _ByteUnits___get_bytes__impl__leukoc($this) {
    return $this;
  }
  function _ByteUnits___get_bytesLong__impl__1lc1w0($this) {
    return numberToLong(_ByteUnits___get_bytes__impl__leukoc($this));
  }
  function _ByteUnits___get_kiloBytes__impl__jnym6r($this) {
    return _ByteUnits___get_bytes__impl__leukoc($this) / 1024.0;
  }
  function _ByteUnits___get_megaBytes__impl__qjjio2($this) {
    return _ByteUnits___get_bytes__impl__leukoc($this) / 1048576.0;
  }
  function _ByteUnits___get_gigaBytes__impl__i7s8s8($this) {
    return _ByteUnits___get_bytes__impl__leukoc($this) / 1.073741824E9;
  }
  function Companion_45() {
    Companion_instance_45 = this;
    this.o1w_1 = _ByteUnits___init__impl__x795am(0.0);
  }
  protoOf(Companion_45).p1w = function (bytes) {
    return _ByteUnits___init__impl__x795am(bytes);
  };
  protoOf(Companion_45).q1w = function (bytes) {
    return _ByteUnits___init__impl__x795am(bytes.h6());
  };
  var Companion_instance_45;
  function Companion_getInstance_45() {
    if (Companion_instance_45 == null)
      new Companion_45();
    return Companion_instance_45;
  }
  function roundToDigits(_this__u8e3s4, $this, digits) {
    // Inline function 'kotlin.math.pow' call
    var num = Math.pow(10.0, digits);
    return roundToInt(_this__u8e3s4 * num) / num;
  }
  function ByteUnits__toString_impl_ox2ku2($this) {
    return _ByteUnits___get_gigaBytes__impl__i7s8s8($this) >= 1.0 ? '' + roundToDigits(_ByteUnits___get_gigaBytes__impl__i7s8s8($this), $this, 1) + ' GB' : _ByteUnits___get_megaBytes__impl__qjjio2($this) >= 1.0 ? '' + roundToDigits(_ByteUnits___get_megaBytes__impl__qjjio2($this), $this, 1) + ' MB' : _ByteUnits___get_kiloBytes__impl__jnym6r($this) >= 1.0 ? '' + roundToDigits(_ByteUnits___get_kiloBytes__impl__jnym6r($this), $this, 1) + ' KB' : _ByteUnits___get_bytesLong__impl__1lc1w0($this).toString() + ' B';
  }
  function ByteUnits__hashCode_impl_35wo17($this) {
    return getNumberHashCode($this);
  }
  function ByteUnits__equals_impl_y9yptl($this, other) {
    if (!(other instanceof ByteUnits))
      return false;
    var tmp0_other_with_cast = other instanceof ByteUnits ? other.r1w_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ByteUnits(bytes) {
    Companion_getInstance_45();
    this.r1w_1 = bytes;
  }
  protoOf(ByteUnits).toString = function () {
    return ByteUnits__toString_impl_ox2ku2(this.r1w_1);
  };
  protoOf(ByteUnits).hashCode = function () {
    return ByteUnits__hashCode_impl_35wo17(this.r1w_1);
  };
  protoOf(ByteUnits).equals = function (other) {
    return ByteUnits__equals_impl_y9yptl(this.r1w_1, other);
  };
  function get_niceStr(_this__u8e3s4) {
    return niceStr(_this__u8e3s4, -1, false);
  }
  function niceStr(_this__u8e3s4, decimalPlaces, zeroSuffix) {
    zeroSuffix = zeroSuffix === VOID ? false : zeroSuffix;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.number.niceStr.<anonymous>' call
    appendNice(this_0, roundDecimalPlaces(_this__u8e3s4, decimalPlaces), zeroSuffix ? decimalPlaces > 0 : false);
    return this_0.toString();
  }
  function appendNice(_this__u8e3s4, value, zeroSuffix) {
    zeroSuffix = zeroSuffix === VOID ? false : zeroSuffix;
    if (isAlmostEquals(round(value), value))
      if (value >= IntCompanionObject_instance.MIN_VALUE ? value <= IntCompanionObject_instance.MAX_VALUE : false) {
        _this__u8e3s4.q7(numberToInt(round(value)));
      } else {
        _this__u8e3s4.r7(numberToLong(round(value)));
      }
     else {
      _this__u8e3s4.t7(value);
      return Unit_instance;
    }
    if (zeroSuffix) {
      _this__u8e3s4.f5('.0');
    }
  }
  function get_niceStr_0(_this__u8e3s4) {
    return niceStr_0(_this__u8e3s4, -1, false);
  }
  function niceStr_0(_this__u8e3s4, decimalPlaces, zeroSuffix) {
    zeroSuffix = zeroSuffix === VOID ? false : zeroSuffix;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.number.niceStr.<anonymous>' call
    appendNice_0(this_0, roundDecimalPlaces_0(_this__u8e3s4, decimalPlaces), zeroSuffix ? decimalPlaces > 0 : false);
    return this_0.toString();
  }
  function appendNice_0(_this__u8e3s4, value, zeroSuffix) {
    zeroSuffix = zeroSuffix === VOID ? false : zeroSuffix;
    // Inline function 'kotlin.math.round' call
    var tmp$ret$0 = round(value);
    if (isAlmostEquals_0(tmp$ret$0, value))
      if (value >= IntCompanionObject_instance.MIN_VALUE ? value <= IntCompanionObject_instance.MAX_VALUE : false) {
        _this__u8e3s4.q7(numberToInt(value));
      } else {
        _this__u8e3s4.r7(numberToLong(value));
      }
     else {
      _this__u8e3s4.s7(value);
      return Unit_instance;
    }
    if (zeroSuffix) {
      _this__u8e3s4.f5('.0');
    }
  }
  var Arch_UNKNOWN_instance;
  var Arch_X86_instance;
  var Arch_X64_instance;
  var Arch_ARM32_instance;
  var Arch_ARM64_instance;
  var Arch_MIPS32_instance;
  var Arch_MIPSEL32_instance;
  var Arch_MIPS64_instance;
  var Arch_MIPSEL64_instance;
  var Arch_WASM32_instance;
  var Arch_POWERPC64_instance;
  function Companion_46() {
  }
  protoOf(Companion_46).s1w = function () {
    return get_currentArch();
  };
  var Companion_instance_46;
  function Companion_getInstance_46() {
    return Companion_instance_46;
  }
  var Arch_entriesInitialized;
  function Arch_initEntries() {
    if (Arch_entriesInitialized)
      return Unit_instance;
    Arch_entriesInitialized = true;
    Arch_UNKNOWN_instance = new Arch('UNKNOWN', 0, -1);
    Arch_X86_instance = new Arch('X86', 1, 32, VOID, true);
    Arch_X64_instance = new Arch('X64', 2, 64, VOID, true);
    Arch_ARM32_instance = new Arch('ARM32', 3, 32, true);
    Arch_ARM64_instance = new Arch('ARM64', 4, 64, true);
    Arch_MIPS32_instance = new Arch('MIPS32', 5, 32, VOID, VOID, true);
    Arch_MIPSEL32_instance = new Arch('MIPSEL32', 6, 32, VOID, VOID, true);
    Arch_MIPS64_instance = new Arch('MIPS64', 7, 64, VOID, VOID, true);
    Arch_MIPSEL64_instance = new Arch('MIPSEL64', 8, 64, VOID, VOID, true);
    Arch_WASM32_instance = new Arch('WASM32', 9, 32, VOID, VOID, VOID, true);
    Arch_POWERPC64_instance = new Arch('POWERPC64', 10, 64, VOID, VOID, VOID, VOID, true);
  }
  function Arch(name, ordinal, bits, isArm, isX86OrX64, isMips, isWasm, isPowerPC) {
    isArm = isArm === VOID ? false : isArm;
    isX86OrX64 = isX86OrX64 === VOID ? false : isX86OrX64;
    isMips = isMips === VOID ? false : isMips;
    isWasm = isWasm === VOID ? false : isWasm;
    isPowerPC = isPowerPC === VOID ? false : isPowerPC;
    Enum.call(this, name, ordinal);
    this.v1w_1 = bits;
    this.w1w_1 = isArm;
    this.x1w_1 = isX86OrX64;
    this.y1w_1 = isMips;
    this.z1w_1 = isWasm;
    this.a1x_1 = isPowerPC;
  }
  protoOf(Arch).b1x = function () {
    return this.v1w_1 === 32;
  };
  function Arch_UNKNOWN_getInstance() {
    Arch_initEntries();
    return Arch_UNKNOWN_instance;
  }
  var Os_UNKNOWN_instance;
  var Os_MACOSX_instance;
  var Os_IOS_instance;
  var Os_LINUX_instance;
  var Os_WINDOWS_instance;
  var Os_ANDROID_instance;
  var Os_WASM_instance;
  var Os_TVOS_instance;
  function Companion_47() {
    Companion_instance_47 = this;
    this.c1x_1 = values_3();
  }
  protoOf(Companion_47).s1w = function () {
    return get_currentOs();
  };
  var Companion_instance_47;
  function Companion_getInstance_47() {
    Os_initEntries();
    if (Companion_instance_47 == null)
      new Companion_47();
    return Companion_instance_47;
  }
  function values_3() {
    return [Os_UNKNOWN_getInstance(), Os_MACOSX_getInstance(), Os_IOS_getInstance(), Os_LINUX_getInstance(), Os_WINDOWS_getInstance(), Os_ANDROID_getInstance(), Os_WASM_getInstance(), Os_TVOS_getInstance()];
  }
  var Os_entriesInitialized;
  function Os_initEntries() {
    if (Os_entriesInitialized)
      return Unit_instance;
    Os_entriesInitialized = true;
    Os_UNKNOWN_instance = new Os('UNKNOWN', 0);
    Os_MACOSX_instance = new Os('MACOSX', 1);
    Os_IOS_instance = new Os('IOS', 2);
    Os_LINUX_instance = new Os('LINUX', 3);
    Os_WINDOWS_instance = new Os('WINDOWS', 4);
    Os_ANDROID_instance = new Os('ANDROID', 5);
    Os_WASM_instance = new Os('WASM', 6);
    Os_TVOS_instance = new Os('TVOS', 7);
    Companion_getInstance_47();
  }
  function Os(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Os).f1x = function () {
    return this.equals(Os_WINDOWS_getInstance());
  };
  protoOf(Os).g1x = function () {
    return this.equals(Os_LINUX_getInstance());
  };
  protoOf(Os).h1x = function () {
    return this.equals(Os_MACOSX_getInstance());
  };
  function Os_UNKNOWN_getInstance() {
    Os_initEntries();
    return Os_UNKNOWN_instance;
  }
  function Os_MACOSX_getInstance() {
    Os_initEntries();
    return Os_MACOSX_instance;
  }
  function Os_IOS_getInstance() {
    Os_initEntries();
    return Os_IOS_instance;
  }
  function Os_LINUX_getInstance() {
    Os_initEntries();
    return Os_LINUX_instance;
  }
  function Os_WINDOWS_getInstance() {
    Os_initEntries();
    return Os_WINDOWS_instance;
  }
  function Os_ANDROID_getInstance() {
    Os_initEntries();
    return Os_ANDROID_instance;
  }
  function Os_WASM_getInstance() {
    Os_initEntries();
    return Os_WASM_instance;
  }
  function Os_TVOS_getInstance() {
    Os_initEntries();
    return Os_TVOS_instance;
  }
  function Companion_48() {
  }
  protoOf(Companion_48).i1x = function () {
    return Companion_instance_46.s1w();
  };
  protoOf(Companion_48).j1x = function () {
    return Companion_getInstance_47().s1w();
  };
  protoOf(Companion_48).k1x = function () {
    return Companion_instance_49.s1w();
  };
  protoOf(Companion_48).l1x = function () {
    return get_currentRawPlatformName();
  };
  var Companion_instance_48;
  function Companion_getInstance_48() {
    return Companion_instance_48;
  }
  function Platform() {
  }
  var Runtime_JS_instance;
  var Runtime_JVM_instance;
  var Runtime_ANDROID_instance;
  var Runtime_NATIVE_instance;
  var Runtime_WASM_instance;
  function Companion_49() {
  }
  protoOf(Companion_49).s1w = function () {
    return get_currentRuntime();
  };
  var Companion_instance_49;
  function Companion_getInstance_49() {
    return Companion_instance_49;
  }
  var Runtime_entriesInitialized;
  function Runtime_initEntries() {
    if (Runtime_entriesInitialized)
      return Unit_instance;
    Runtime_entriesInitialized = true;
    Runtime_JS_instance = new Runtime('JS', 0);
    Runtime_JVM_instance = new Runtime('JVM', 1);
    Runtime_ANDROID_instance = new Runtime('ANDROID', 2);
    Runtime_NATIVE_instance = new Runtime('NATIVE', 3);
    Runtime_WASM_instance = new Runtime('WASM', 4);
  }
  function Runtime(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Runtime).r1x = function () {
    return this.equals(Runtime_JVM_getInstance());
  };
  protoOf(Runtime).m1x = function () {
    return this.equals(Runtime_NATIVE_getInstance());
  };
  function Runtime_JS_getInstance() {
    Runtime_initEntries();
    return Runtime_JS_instance;
  }
  function Runtime_JVM_getInstance() {
    Runtime_initEntries();
    return Runtime_JVM_instance;
  }
  function Runtime_NATIVE_getInstance() {
    Runtime_initEntries();
    return Runtime_NATIVE_instance;
  }
  function FastStringMap() {
    // Inline function 'kotlin.js.asDynamic' call
    return new Map();
  }
  function get_size_1(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.size;
  }
  function FastArrayList_init_$Init$($this) {
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    FastArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function FastArrayList_init_$Create$() {
    return FastArrayList_init_$Init$(objectCreate(protoOf(FastArrayList)));
  }
  function FastArrayList_init_$Init$_0(initialCapacity, $this) {
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    FastArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function FastArrayList_init_$Create$_0(initialCapacity) {
    return FastArrayList_init_$Init$_0(initialCapacity, objectCreate(protoOf(FastArrayList)));
  }
  function FastArrayList_init_$Init$_1(elements, $this) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = copyToArray(elements);
    FastArrayList.call($this, tmp$ret$2);
    return $this;
  }
  function FastArrayList_init_$Create$_1(elements) {
    return FastArrayList_init_$Init$_1(elements, objectCreate(protoOf(FastArrayList)));
  }
  function _addAll($this, elements) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (elements.length === 0)
      return false;
    // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = $this.rz_1;
    (function () {
      var $externalVarargReceiverTmp = tmp$ret$3;
      return $externalVarargReceiverTmp.push.apply($externalVarargReceiverTmp, [].slice.call(elements.slice()));
    }.call(this));
    $this.d1_1 = $this.d1_1 + 1 | 0;
    return true;
  }
  function rangeCheck($this, index) {
    if (index < 0 ? true : index >= $this.l())
      throw IndexOutOfBoundsException_init_$Create$_0('index: ' + index + ', size: ' + $this.l());
    return index;
  }
  function insertionRangeCheck($this, index) {
    if (index < 0 ? true : index > $this.l())
      throw IndexOutOfBoundsException_init_$Create$_0('index: ' + index + ', size: ' + $this.l());
    return index;
  }
  function FastArrayList(__array) {
    AbstractMutableList.call(this);
    this.rz_1 = __array;
  }
  protoOf(FastArrayList).l = function () {
    // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.rz_1.length;
  };
  protoOf(FastArrayList).b1 = function (index) {
    // Inline function 'korlibs.js.get' call
    // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.rz_1[rangeCheck(this, index)];
  };
  protoOf(FastArrayList).m = function (index, element) {
    rangeCheck(this, index);
    // Inline function 'kotlin.apply' call
    // Inline function 'korlibs.js.get' call
    // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    var this_0 = this.rz_1[index];
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.datastructure.FastArrayList.set.<anonymous>' call
    // Inline function 'korlibs.js.set' call
    // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    this.rz_1[index] = element;
    return this_0;
  };
  protoOf(FastArrayList).p = function (element) {
    // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.rz_1.push(element);
    this.d1_1 = this.d1_1 + 1 | 0;
    return true;
  };
  protoOf(FastArrayList).k1 = function (index, element) {
    // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.rz_1.splice(insertionRangeCheck(this, index), 0, element);
    this.d1_1 = this.d1_1 + 1 | 0;
  };
  protoOf(FastArrayList).q = function (elements) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(elements);
    return _addAll(this, tmp$ret$0);
  };
  protoOf(FastArrayList).e1 = function (index) {
    rangeCheck(this, index);
    this.d1_1 = this.d1_1 + 1 | 0;
    var tmp;
    if (index === 0) {
      // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = this.rz_1.shift();
    } else if (index === get_lastIndex(this)) {
      // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = this.rz_1.pop();
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = this.rz_1.splice(index, 1)[0];
    }
    return tmp;
  };
  protoOf(FastArrayList).m2 = function (element) {
    // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var array = this.rz_1;
    var inductionVariable = 0;
    var last = array.length;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'korlibs.js.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$4 = array[index];
        if (equals(tmp$ret$4, element)) {
          array.splice(index, 1);
          this.d1_1 = this.d1_1 + 1 | 0;
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(FastArrayList).lz = function (fromIndex, toIndex) {
    // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.rz_1.splice(fromIndex, toIndex - fromIndex | 0);
    this.d1_1 = this.d1_1 + 1 | 0;
  };
  protoOf(FastArrayList).n2 = function () {
    // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.rz_1.length = 0;
    this.d1_1 = this.d1_1 + 1 | 0;
  };
  protoOf(FastArrayList).l1 = function (element) {
    // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.rz_1.indexOf(element);
  };
  protoOf(FastArrayList).toString = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$4 = this.rz_1;
    return '[' + joinToString_0(tmp$ret$4, ', ') + ']';
  };
  protoOf(FastArrayList).o2 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'korlibs.datastructure.FastArrayList.jsArray' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.rz_1.concat();
  };
  protoOf(FastArrayList).toArray = function () {
    return this.o2();
  };
  function FastIntMap() {
    // Inline function 'kotlin.js.asDynamic' call
    return new Map();
  }
  function get_size_2(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.size;
  }
  function keys(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = Array_from(_this__u8e3s4.keys());
    return toList_0(tmp$ret$2);
  }
  function FastIdentityMap() {
    // Inline function 'kotlin.js.asDynamic' call
    return new Map();
  }
  function clear(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.clear();
  }
  function get_size_3(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.size;
  }
  function contains_0(_this__u8e3s4, key) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.has(key);
  }
  function get_1(_this__u8e3s4, key) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.get(key);
  }
  function set(_this__u8e3s4, key, value) {
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.set(key, value);
  }
  function remove(_this__u8e3s4, key) {
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.delete(key);
  }
  function keys_0(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = Array_from(_this__u8e3s4.keys());
    return toList_0(tmp$ret$2);
  }
  var CONCURRENCY_COUNT;
  function Lock() {
    this.s14_1 = false;
  }
  protoOf(Lock).r14 = function (unit) {
    if (!this.s14_1) {
      // Inline function 'kotlin.error' call
      var message = 'Must lock before notifying';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  function NonRecursiveLock() {
  }
  protoOf(NonRecursiveLock).r14 = function (unit) {
  };
  function JSStackTrace$Companion$parse$lambda($numParts) {
    return function (it) {
      var tmp0_elvis_lhs = toIntOrNull(it.e9().b1(2));
      $numParts.k1(0, tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs);
      return it.e9().b1(1);
    };
  }
  function Entry_0(method, file, line, column) {
    column = column === VOID ? -1 : column;
    this.s1x_1 = method;
    this.t1x_1 = file;
    this.u1x_1 = line;
    this.v1x_1 = column;
  }
  protoOf(Entry_0).toString = function () {
    return 'Entry(method=' + this.s1x_1 + ', file=' + this.t1x_1 + ', line=' + this.u1x_1 + ', column=' + this.v1x_1 + ')';
  };
  protoOf(Entry_0).hashCode = function () {
    var result = getStringHashCode(this.s1x_1);
    result = imul(result, 31) + getStringHashCode(this.t1x_1) | 0;
    result = imul(result, 31) + this.u1x_1 | 0;
    result = imul(result, 31) + this.v1x_1 | 0;
    return result;
  };
  protoOf(Entry_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Entry_0))
      return false;
    var tmp0_other_with_cast = other instanceof Entry_0 ? other : THROW_CCE();
    if (!(this.s1x_1 === tmp0_other_with_cast.s1x_1))
      return false;
    if (!(this.t1x_1 === tmp0_other_with_cast.t1x_1))
      return false;
    if (!(this.u1x_1 === tmp0_other_with_cast.u1x_1))
      return false;
    if (!(this.v1x_1 === tmp0_other_with_cast.v1x_1))
      return false;
    return true;
  };
  function Companion_50() {
  }
  protoOf(Companion_50).w1x = function (stack, message) {
    // Inline function 'kotlin.collections.arrayListOf' call
    var entries = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.arrayListOf' call
    var messageLines = ArrayList_init_$Create$_0();
    var isChrome = false;
    var iterator = lines(stack).s();
    var index = 0;
    $l$loop: while (iterator.t()) {
      var index_0 = index;
      index = index + 1 | 0;
      var strLine = iterator.u();
      // Inline function 'kotlin.text.trimEnd' call
      var strLine_0 = toString(trimEnd(isCharSequence(strLine) ? strLine : THROW_CCE()));
      var tmp;
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(strLine_0) === 0) {
        tmp = !isChrome;
      } else {
        tmp = false;
      }
      if (tmp)
        continue $l$loop;
      if ((startsWith(strLine_0, 'Error: ') ? true : strLine_0 === 'Error') ? index_0 === 0 : false) {
        isChrome = true;
        var tmp_0 = messageLines;
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$5 = strLine_0.substring(7);
        tmp_0.p(tmp$ret$5);
      } else if (startsWith(strLine_0, '    at ')) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$7 = strLine_0.substring(7);
        var part = trimEnd_0(tmp$ret$7, charArrayOf([_Char___init__impl__6a9atx(41)]));
        var column = substringAfterLast(part, _Char___init__impl__6a9atx(58));
        var part0 = substringBeforeLast(part, _Char___init__impl__6a9atx(58));
        var line = substringAfterLast(part0, _Char___init__impl__6a9atx(58));
        var part1 = substringBeforeLast(part0, _Char___init__impl__6a9atx(58));
        var tmp_1;
        if (contains(part1, _Char___init__impl__6a9atx(40))) {
          // Inline function 'kotlin.collections.map' call
          var this_0 = split(part1, ['(']);
          // Inline function 'kotlin.collections.mapTo' call
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var tmp0_iterator = this_0.s();
          while (tmp0_iterator.t()) {
            var item = tmp0_iterator.u();
            // Inline function 'korlibs.js.Companion.parse.<anonymous>' call
            // Inline function 'kotlin.text.trim' call
            var tmp$ret$9 = toString(trim(isCharSequence(item) ? item : THROW_CCE()));
            destination.p(tmp$ret$9);
          }
          tmp_1 = destination;
        } else {
          // Inline function 'kotlin.text.trim' call
          var tmp$ret$12 = toString(trim(isCharSequence(part1) ? part1 : THROW_CCE()));
          tmp_1 = listOf(['', tmp$ret$12]);
        }
        var tmp2_container = tmp_1;
        // Inline function 'kotlin.collections.component1' call
        var method = tmp2_container.b1(0);
        // Inline function 'kotlin.collections.component2' call
        var file = tmp2_container.b1(1);
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp3_elvis_lhs = toIntOrNull(line);
        var tmp_2 = tmp3_elvis_lhs == null ? -1 : tmp3_elvis_lhs;
        var tmp4_elvis_lhs = toIntOrNull(column);
        var element = new Entry_0(method, file, tmp_2, tmp4_elvis_lhs == null ? -1 : tmp4_elvis_lhs);
        entries.p(element);
      } else if (isChrome) {
        messageLines.p(strLine_0);
      } else {
        var cline = strLine_0;
        // Inline function 'kotlin.collections.arrayListOf' call
        var numParts = ArrayList_init_$Create$_0();
        var inductionVariable = 0;
        if (inductionVariable < 2)
          do {
            var n = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp_3 = Regex_init_$Create$('^(.*):(\\d+)$');
            var tmp_4 = cline;
            cline = tmp_3.i8(tmp_4, JSStackTrace$Companion$parse$lambda(numParts));
          }
           while (inductionVariable < 2);
        var file_0 = substringAfterLast(cline, _Char___init__impl__6a9atx(64));
        var method_0 = substringBeforeLast(cline, _Char___init__impl__6a9atx(64));
        var tmp6_elvis_lhs = firstOrNull(numParts);
        var line_0 = tmp6_elvis_lhs == null ? -1 : tmp6_elvis_lhs;
        var tmp_5;
        if (numParts.l() >= 2) {
          var tmp7_elvis_lhs = lastOrNull(numParts);
          tmp_5 = tmp7_elvis_lhs == null ? -1 : tmp7_elvis_lhs;
        } else {
          tmp_5 = -1;
        }
        var column_0 = tmp_5;
        // Inline function 'kotlin.collections.plusAssign' call
        var element_0 = new Entry_0(method_0, file_0, line_0, column_0);
        entries.p(element_0);
      }
    }
    if (!isChrome) {
      messageLines = arrayListOf([message == null ? '' : message]);
    }
    if (entries.x()) {
      entries.p(new Entry_0('<unknown>', '<unknown>', -1));
    }
    return new JSStackTrace(joinToString(messageLines, '\n'), entries);
  };
  protoOf(Companion_50).x1x = function (e) {
    return this.w1x(stackTraceToString(e), e.message);
  };
  protoOf(Companion_50).y1x = function () {
    return this.x1x(Exception_init_$Create$(''));
  };
  var Companion_instance_50;
  function Companion_getInstance_50() {
    return Companion_instance_50;
  }
  function JSStackTrace(message, entries) {
    this.z1x_1 = message;
    this.a1y_1 = entries;
  }
  protoOf(JSStackTrace).toString = function () {
    return 'JSStackTrace(message=' + this.z1x_1 + ', entries=' + this.a1y_1 + ')';
  };
  protoOf(JSStackTrace).hashCode = function () {
    var result = getStringHashCode(this.z1x_1);
    result = imul(result, 31) + hashCode(this.a1y_1) | 0;
    return result;
  };
  protoOf(JSStackTrace).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JSStackTrace))
      return false;
    var tmp0_other_with_cast = other instanceof JSStackTrace ? other : THROW_CCE();
    if (!(this.z1x_1 === tmp0_other_with_cast.z1x_1))
      return false;
    if (!equals(this.a1y_1, tmp0_other_with_cast.a1y_1))
      return false;
    return true;
  };
  function Array_from(value) {
    return Array.from(value);
  }
  function get_miniEnvironmentVariables() {
    _init_properties_Logger_js_kt__qad3pn();
    // Inline function 'kotlin.getValue' call
    var this_0 = miniEnvironmentVariables$delegate;
    miniEnvironmentVariables$factory();
    return this_0.p3();
  }
  var miniEnvironmentVariables$delegate;
  function jsObjectToMap(obj) {
    _init_properties_Logger_js_kt__qad3pn();
    // Inline function 'kotlin.collections.associate' call
    var this_0 = jsObjectKeysArray(obj);
    var capacity = coerceAtLeast(mapCapacity(this_0.length), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var element = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.plusAssign' call
      // Inline function 'korlibs.logger.jsObjectToMap.<anonymous>' call
      var pair = to(element, obj[element]);
      destination.x1(pair.pe_1, pair.qe_1);
    }
    return destination;
  }
  function QueryString_decode(str) {
    _init_properties_Logger_js_kt__qad3pn();
    // Inline function 'kotlin.collections.linkedMapOf' call
    var out = LinkedHashMap_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = split_0(str, charArrayOf([_Char___init__impl__6a9atx(38)])).s();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.u();
      // Inline function 'korlibs.logger.QueryString_decode.<anonymous>' call
      var parts = split_0(element, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
      var key = parts.b1(0);
      // Inline function 'kotlin.collections.getOrElse' call
      var tmp;
      if (1 >= 0 ? 1 <= get_lastIndex(parts) : false) {
        tmp = parts.b1(1);
      } else {
        // Inline function 'korlibs.logger.QueryString_decode.<anonymous>.<anonymous>' call
        tmp = key;
      }
      var value = tmp;
      // Inline function 'kotlin.collections.getOrPut' call
      var value_0 = out.d2(key);
      var tmp_0;
      if (value_0 == null) {
        // Inline function 'korlibs.logger.QueryString_decode.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.arrayListOf' call
        var answer = ArrayList_init_$Create$_0();
        out.x1(key, answer);
        tmp_0 = answer;
      } else {
        tmp_0 = value_0;
      }
      var list = tmp_0;
      // Inline function 'kotlin.collections.plusAssign' call
      list.p(value);
    }
    return out;
  }
  function jsObjectKeysArray(obj) {
    _init_properties_Logger_js_kt__qad3pn();
    var tmp = jsToArray(jsObjectKeys(obj));
    return isArray(tmp) ? tmp : THROW_CCE();
  }
  function jsToArray(obj) {
    _init_properties_Logger_js_kt__qad3pn();
    var tmp = 0;
    var tmp_0 = obj.length;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = obj[tmp_2];
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function jsObjectKeys(obj) {
    _init_properties_Logger_js_kt__qad3pn();
    return Object.keys(obj);
  }
  function Console() {
    Console_instance = this;
    BaseConsole.call(this);
  }
  protoOf(Console).y16 = function (kind, msg) {
    switch (kind.q9_1) {
      case 0:
        (function () {
          var $externalVarargReceiverTmp = console;
          return $externalVarargReceiverTmp.error.apply($externalVarargReceiverTmp, [].slice.call(msg.slice()));
        }.call(this));
        break;
      case 1:
        (function () {
          var $externalVarargReceiverTmp = console;
          return $externalVarargReceiverTmp.warn.apply($externalVarargReceiverTmp, [].slice.call(msg.slice()));
        }.call(this));
        break;
      case 2:
        (function () {
          var $externalVarargReceiverTmp = console;
          return $externalVarargReceiverTmp.info.apply($externalVarargReceiverTmp, [].slice.call(msg.slice()));
        }.call(this));
        break;
      case 3:
        (function () {
          var $externalVarargReceiverTmp = console;
          return $externalVarargReceiverTmp.log.apply($externalVarargReceiverTmp, [].slice.call(msg.slice()));
        }.call(this));
        break;
      case 4:
        (function () {
          var $externalVarargReceiverTmp = console;
          return $externalVarargReceiverTmp.log.apply($externalVarargReceiverTmp, [].slice.call(msg.slice()));
        }.call(this));
        break;
      case 5:
        (function () {
          var $externalVarargReceiverTmp = console;
          return $externalVarargReceiverTmp.log.apply($externalVarargReceiverTmp, [].slice.call(msg.slice()));
        }.call(this));
        break;
    }
  };
  var Console_instance;
  function Console_getInstance() {
    if (Console_instance == null)
      new Console();
    return Console_instance;
  }
  function DefaultLogOutput() {
  }
  protoOf(DefaultLogOutput).t17 = function (logger, level, msg) {
    return ConsoleLogOutput_instance.t17(logger, level, msg);
  };
  var DefaultLogOutput_instance;
  function DefaultLogOutput_getInstance() {
    return DefaultLogOutput_instance;
  }
  function miniEnvironmentVariables$delegate$lambda() {
    _init_properties_Logger_js_kt__qad3pn();
    var tmp;
    if (get_isNodeJs()) {
      tmp = jsObjectToMap(process.env);
    } else if (get_isDenoJs()) {
      tmp = jsObjectToMap(Deno.env);
    } else if (typeof document !== 'undefined') {
      // Inline function 'kotlin.collections.map' call
      var tmp0_safe_receiver = document.location;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.search;
      var this_0 = QueryString_decode(trimStart(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs, charArrayOf([_Char___init__impl__6a9atx(63)])));
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(this_0.l());
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = this_0.e2().s();
      while (tmp0_iterator.t()) {
        var item = tmp0_iterator.u();
        // Inline function 'korlibs.logger.miniEnvironmentVariables$delegate.<anonymous>.<anonymous>' call
        var tmp_0 = item.l3();
        var tmp0_elvis_lhs = firstOrNull(item.p3());
        var tmp$ret$1 = to(tmp_0, tmp0_elvis_lhs == null ? item.l3() : tmp0_elvis_lhs);
        destination.p(tmp$ret$1);
      }
      tmp = toMap(destination);
    } else {
      // Inline function 'kotlin.collections.mapOf' call
      tmp = emptyMap();
    }
    return tmp;
  }
  function miniEnvironmentVariables$factory() {
    return getPropertyCallableRef('miniEnvironmentVariables', 0, KProperty0, function () {
      return get_miniEnvironmentVariables();
    }, null);
  }
  var properties_initialized_Logger_js_kt_6fk7m1;
  function _init_properties_Logger_js_kt__qad3pn() {
    if (!properties_initialized_Logger_js_kt_6fk7m1) {
      properties_initialized_Logger_js_kt_6fk7m1 = true;
      miniEnvironmentVariables$delegate = lazy_0(miniEnvironmentVariables$delegate$lambda);
    }
  }
  function Buffer_init_$Init$(size, direct, $this) {
    direct = direct === VOID ? false : direct;
    Buffer.call($this, new DataView(new ArrayBuffer(checkNBufferSize(size))));
    return $this;
  }
  function Buffer_init_$Create$(size, direct) {
    return Buffer_init_$Init$(size, direct, objectCreate(protoOf(Buffer)));
  }
  function Companion_51() {
  }
  protoOf(Companion_51).k1v = function (src, srcPosBytes, dst, dstPosBytes, sizeInBytes) {
    dst.b1y(dstPosBytes, sizeInBytes).set(src.b1y(srcPosBytes, sizeInBytes), 0);
  };
  protoOf(Companion_51).l1v = function (src, srcPosBytes, dst, dstPosBytes, sizeInBytes) {
    return equalsCommon_0(this, src, srcPosBytes, dst, dstPosBytes, sizeInBytes, false);
  };
  var Companion_instance_51;
  function Companion_getInstance_51() {
    return Companion_instance_51;
  }
  function Buffer(dataView) {
    this.m1v_1 = dataView;
  }
  protoOf(Buffer).c1y = function () {
    return this.m1v_1.byteOffset;
  };
  protoOf(Buffer).s1v = function () {
    return this.m1v_1.byteLength;
  };
  protoOf(Buffer).b1w = function (start, end) {
    return new Buffer(new DataView(get_buffer(this), this.c1y() + start | 0, end - start | 0));
  };
  protoOf(Buffer).b1y = function (offset, size) {
    return new Uint8Array(get_buffer(this), this.m1v_1.byteOffset + offset | 0, size);
  };
  protoOf(Buffer).n1v = function (bufferOffset, array, arrayOffset, len, toArray) {
    var bufferSlice = new Int8Array(this.m1v_1.buffer, this.m1v_1.byteOffset + bufferOffset | 0, len);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var arraySlice = array.subarray(arrayOffset, arrayOffset + len | 0);
    if (toArray) {
      arraySlice.set(bufferSlice, 0);
    } else {
      bufferSlice.set(arraySlice, 0);
    }
  };
  protoOf(Buffer).c1w = function (byteOffset) {
    return this.m1v_1.getInt8(byteOffset);
  };
  protoOf(Buffer).f1w = function (byteOffset) {
    return this.m1v_1.getInt16(byteOffset, true);
  };
  protoOf(Buffer).u1v = function (byteOffset) {
    return this.m1v_1.getInt32(byteOffset, true);
  };
  protoOf(Buffer).e1w = function (byteOffset) {
    var v0 = toLong(this.u1v(byteOffset)).wb(new Long(-1, 0));
    var v1 = toLong(this.u1v(byteOffset + 4 | 0)).wb(new Long(-1, 0));
    return get_currentIsLittleEndian() ? v1.tb(32).xb(v0) : v0.tb(32).xb(v1);
  };
  protoOf(Buffer).p1v = function (byteOffset) {
    return this.m1v_1.getFloat32(byteOffset, true);
  };
  protoOf(Buffer).g1w = function (byteOffset) {
    return this.m1v_1.getInt16(byteOffset, false);
  };
  protoOf(Buffer).o1v = function (byteOffset) {
    return this.m1v_1.getFloat32(byteOffset, false);
  };
  protoOf(Buffer).d1w = function (byteOffset, value) {
    return this.m1v_1.setInt8(byteOffset, value);
  };
  protoOf(Buffer).x1v = function (byteOffset, value) {
    return this.m1v_1.setInt16(byteOffset, value, true);
  };
  protoOf(Buffer).t1v = function (byteOffset, value) {
    return this.m1v_1.setInt32(byteOffset, value, true);
  };
  protoOf(Buffer).r1v = function (byteOffset, value) {
    return this.m1v_1.setFloat32(byteOffset, value, true);
  };
  protoOf(Buffer).w1v = function (byteOffset, value) {
    return this.m1v_1.setInt16(byteOffset, value, false);
  };
  protoOf(Buffer).h1w = function (byteOffset, value) {
    return this.m1v_1.setInt32(byteOffset, value, false);
  };
  protoOf(Buffer).q1v = function (byteOffset, value) {
    return this.m1v_1.setFloat32(byteOffset, value, false);
  };
  protoOf(Buffer).hashCode = function () {
    return hashCodeCommon(Companion_instance_51, this);
  };
  protoOf(Buffer).equals = function (other) {
    return equalsCommon(Companion_instance_51, this, other);
  };
  protoOf(Buffer).toString = function () {
    return NBuffer_toString(this);
  };
  function asInt32Array(_this__u8e3s4) {
    return new Int32Array(_this__u8e3s4);
  }
  function get_arrayUByte(_this__u8e3s4) {
    return new Uint8Array(get_buffer(_this__u8e3s4), _this__u8e3s4.c1y(), _this__u8e3s4.s1v());
  }
  function get_arrayInt(_this__u8e3s4) {
    return new Int32Array(get_buffer(_this__u8e3s4), _this__u8e3s4.c1y(), _this__u8e3s4.s1v() / 4 | 0);
  }
  function get_arrayFloat(_this__u8e3s4) {
    return new Float32Array(get_buffer(_this__u8e3s4), _this__u8e3s4.c1y(), _this__u8e3s4.s1v() / 4 | 0);
  }
  function get_buffer(_this__u8e3s4) {
    return _this__u8e3s4.m1v_1.buffer;
  }
  function get_isDenoJs() {
    _init_properties_Current_js_kt__w11d1e();
    // Inline function 'kotlin.getValue' call
    var this_0 = isDenoJs$delegate;
    isDenoJs$factory();
    return this_0.p3();
  }
  var isDenoJs$delegate;
  function get_isWeb() {
    _init_properties_Current_js_kt__w11d1e();
    // Inline function 'kotlin.getValue' call
    var this_0 = isWeb$delegate;
    isWeb$factory();
    return this_0.p3();
  }
  var isWeb$delegate;
  function get_isWorker() {
    _init_properties_Current_js_kt__w11d1e();
    // Inline function 'kotlin.getValue' call
    var this_0 = isWorker$delegate;
    isWorker$factory();
    return this_0.p3();
  }
  var isWorker$delegate;
  function get_isNodeJs() {
    _init_properties_Current_js_kt__w11d1e();
    // Inline function 'kotlin.getValue' call
    var this_0 = isNodeJs$delegate;
    isNodeJs$factory();
    return this_0.p3();
  }
  var isNodeJs$delegate;
  function get_currentArch() {
    _init_properties_Current_js_kt__w11d1e();
    return currentArch;
  }
  var currentArch;
  function get_currentRuntime() {
    _init_properties_Current_js_kt__w11d1e();
    return currentRuntime;
  }
  var currentRuntime;
  var currentIsDebug;
  function get_currentIsLittleEndian() {
    _init_properties_Current_js_kt__w11d1e();
    return currentIsLittleEndian;
  }
  var currentIsLittleEndian;
  var multithreadedSharedHeap;
  function get_currentRawPlatformName() {
    _init_properties_Current_js_kt__w11d1e();
    return currentRawPlatformName;
  }
  var currentRawPlatformName;
  var currentRawOsName;
  function get_isShell() {
    _init_properties_Current_js_kt__w11d1e();
    return (!get_isWeb() ? !get_isNodeJs() : false) ? !get_isWorker() : false;
  }
  function get_process() {
    _init_properties_Current_js_kt__w11d1e();
    if (typeof process === 'undefined') {
      try {
        // Inline function 'kotlin.error' call
        var message = "Not in NodeJS. Can't access process";
        throw IllegalStateException_init_$Create$(toString(message));
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          printStackTrace(e);
          throw e;
        } else {
          throw $p;
        }
      }
    }
    return process;
  }
  function get_jsGlobalThis() {
    _init_properties_Current_js_kt__w11d1e();
    return globalThis;
  }
  function get_currentOs() {
    _init_properties_Current_js_kt__w11d1e();
    var tmp;
    if (get_isDenoJs()) {
      switch (Deno.build.os) {
        case 'darwin':
          tmp = Os_MACOSX_getInstance();
          break;
        case 'linux':
          tmp = Os_LINUX_getInstance();
          break;
        case 'windows':
          tmp = Os_WINDOWS_getInstance();
          break;
        default:
          tmp = Os_UNKNOWN_getInstance();
          break;
      }
    } else {
      tmp = Os_UNKNOWN_getInstance();
    }
    return tmp;
  }
  function isDenoJs$delegate$lambda() {
    _init_properties_Current_js_kt__w11d1e();
    // Inline function 'kotlin.js.unsafeCast' call
    return typeof Deno === 'object' && Deno.statSync;
  }
  function isWeb$delegate$lambda() {
    _init_properties_Current_js_kt__w11d1e();
    // Inline function 'kotlin.js.unsafeCast' call
    return typeof window === 'object';
  }
  function isWorker$delegate$lambda() {
    _init_properties_Current_js_kt__w11d1e();
    // Inline function 'kotlin.js.unsafeCast' call
    return typeof importScripts === 'function';
  }
  function isNodeJs$delegate$lambda() {
    _init_properties_Current_js_kt__w11d1e();
    // Inline function 'kotlin.js.unsafeCast' call
    return typeof process !== 'undefined' && process.release && process.release.name.search(/node|io.js/) !== -1;
  }
  function isDenoJs$factory() {
    return getPropertyCallableRef('isDenoJs', 0, KProperty0, function () {
      return get_isDenoJs();
    }, null);
  }
  function isWeb$factory() {
    return getPropertyCallableRef('isWeb', 0, KProperty0, function () {
      return get_isWeb();
    }, null);
  }
  function isWorker$factory() {
    return getPropertyCallableRef('isWorker', 0, KProperty0, function () {
      return get_isWorker();
    }, null);
  }
  function isNodeJs$factory() {
    return getPropertyCallableRef('isNodeJs', 0, KProperty0, function () {
      return get_isNodeJs();
    }, null);
  }
  var properties_initialized_Current_js_kt_4h6d9c;
  function _init_properties_Current_js_kt__w11d1e() {
    if (!properties_initialized_Current_js_kt_4h6d9c) {
      properties_initialized_Current_js_kt_4h6d9c = true;
      isDenoJs$delegate = lazy_0(isDenoJs$delegate$lambda);
      isWeb$delegate = lazy_0(isWeb$delegate$lambda);
      isWorker$delegate = lazy_0(isWorker$delegate$lambda);
      isNodeJs$delegate = lazy_0(isNodeJs$delegate$lambda);
      currentArch = Arch_UNKNOWN_getInstance();
      currentRuntime = Runtime_JS_getInstance();
      currentIsDebug = false;
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [287454020];
      // Inline function 'kotlin.js.asDynamic' call
      currentIsLittleEndian = (new Uint8Array((new Uint32Array(tmp$ret$2)).buffer))[0] === 68;
      multithreadedSharedHeap = false;
      currentRawPlatformName = get_isDenoJs() ? 'js-deno' : get_isWeb() ? 'js-web' : get_isNodeJs() ? 'js-node' : get_isWorker() ? 'js-worker' : get_isShell() ? 'js-shell' : 'js';
      var tmp;
      if (get_isDenoJs()) {
        tmp = 'deno';
      } else if (get_isWeb() ? true : get_isWorker()) {
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = navigator.userAgent;
      } else {
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = get_process().platform;
      }
      currentRawOsName = tmp;
    }
  }
  //region block: post-declaration
  protoOf(IntArray2).kx = getAt;
  protoOf(IntArray2).jx = asString;
  protoOf(InjectorContext).ic = get;
  protoOf(InjectorContext).rf = fold;
  protoOf(InjectorContext).qf = minusKey;
  protoOf(InjectorContext).sf = plus;
  protoOf(BaseConsole).p16 = appendAnsiScape;
  protoOf(BaseConsole).q16 = appendAnsiScape$default;
  protoOf(BaseConsole).r16 = appendReset;
  protoOf(BaseConsole).s16 = appendFgColor;
  protoOf(BaseConsole).t16 = appendFgColor$default;
  protoOf(EasingCubic).l18 = invoke;
  protoOf(EasingCubic).m18 = invoke_0;
  protoOf(Easings).l18 = invoke;
  protoOf(Easings).m18 = invoke_0;
  protoOf(PointArrayList).p1l = getComponentList;
  protoOf(PointArrayList).q1l = getComponentList$default;
  protoOf(PointArrayList).wy = get_first;
  protoOf(PointArrayList).xy = get_last;
  protoOf(RectSlice).o1i = get_left;
  protoOf(RectSlice).r1i = get_top;
  protoOf(RectSlice).p1i = get_right;
  protoOf(RectSlice).q1i = get_bottom;
  protoOf(RectSlice).i1k = get_area;
  protoOf(RectSlice).n1q = get_frameOffsetX;
  protoOf(RectSlice).o1q = get_frameOffsetY;
  protoOf(RectSlice).p1q = x;
  protoOf(RectSlice).q1q = y;
  protoOf(SliceCoordsImpl).n1q = get_frameOffsetX;
  protoOf(SliceCoordsImpl).o1q = get_frameOffsetY;
  protoOf(SliceCoordsImpl).p1q = x;
  protoOf(SliceCoordsImpl).q1q = y;
  protoOf(RectCoords).p1q = x;
  protoOf(RectCoords).q1q = y;
  protoOf(VectorPath).g1u = line;
  protoOf(VectorPath).dy = isNotEmpty;
  protoOf(VectorPath).h1u = rect;
  protoOf(VectorPath).i1u = rect_0;
  protoOf(VectorPath).j1u = arc;
  protoOf(VectorPath).k1u = arc$default;
  protoOf(VectorPath).l1u = circle;
  protoOf(Uint16Buffer).l = get_size;
  protoOf(Companion_48).f1x = get_isWindows;
  protoOf(Companion_48).g1x = get_isLinux;
  protoOf(Companion_48).h1x = get_isMac;
  protoOf(Companion_48).m1x = get_isNative;
  protoOf(Companion_48).n1x = get_isJsNodeJs;
  protoOf(Companion_48).o1x = get_isJsBrowser;
  protoOf(FastArrayList).oz = addAll_0;
  protoOf(FastArrayList).mz = setAddAll;
  protoOf(FastArrayList).pz = setAddAll$default;
  protoOf(FastArrayList).nz = setAll;
  protoOf(FastArrayList).sz = removeToSize;
  protoOf(Lock).g14 = notify$default;
  protoOf(NonRecursiveLock).g14 = notify$default;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_5 = new Companion_5();
  Companion_instance_6 = new Companion_6();
  Companion_instance_7 = new Companion_7();
  Companion_instance_8 = new Companion_8();
  Companion_instance_9 = new Companion_9();
  baseConsoleHook = null;
  _miniEnvironmentVariablesUC = null;
  ConsoleLogOutput_instance = new ConsoleLogOutput();
  MINUS_ZERO_D = -0.0;
  MINUS_ZERO_F = -0.0;
  Companion_instance_22 = new Companion_22();
  Companion_instance_24 = new Companion_24();
  Companion_instance_30 = new Companion_30();
  Arc_instance = new Arc();
  Companion_instance_32 = new Companion_32();
  Companion_instance_33 = new Companion_33();
  Companion_instance_36 = new Companion_36();
  Companion_instance_37 = new Companion_37();
  Companion_instance_38 = new Companion_38();
  Companion_instance_39 = new Companion_39();
  Command_instance = new Command();
  Companion_instance_40 = new Companion_40();
  Companion_instance_43 = new Companion_43();
  Companion_instance_44 = new Companion_44();
  Companion_instance_46 = new Companion_46();
  Companion_instance_48 = new Companion_48();
  Companion_instance_49 = new Companion_49();
  CONCURRENCY_COUNT = 1;
  Companion_instance_50 = new Companion_50();
  DefaultLogOutput_instance = new DefaultLogOutput();
  Companion_instance_51 = new Companion_51();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Level_DEBUG_getInstance;
  _.$_$.b = Level_ERROR_getInstance;
  _.$_$.c = Level_INFO_getInstance;
  _.$_$.d = Level_TRACE_getInstance;
  _.$_$.e = Level_WARN_getInstance;
  _.$_$.f = HitTestDirection_ANY_getInstance;
  _.$_$.g = Os_UNKNOWN_getInstance;
  _.$_$.h = injector;
  _.$_$.i = FastArrayList_init_$Create$_0;
  _.$_$.j = FastArrayList_init_$Create$;
  _.$_$.k = FastArrayList_init_$Create$_1;
  _.$_$.l = IntIntMap_init_$Create$;
  _.$_$.m = IntMap_init_$Create$;
  _.$_$.n = Pool_init_$Create$;
  _.$_$.o = MarginInt_init_$Create$;
  _.$_$.p = Matrix4_init_$Create$_0;
  _.$_$.q = MatrixTransform_init_$Create$;
  _.$_$.r = RectangleI_init_$Create$;
  _.$_$.s = Scale_init_$Create$_0;
  _.$_$.t = Size2D_init_$Create$_1;
  _.$_$.u = Size2D_init_$Create$_0;
  _.$_$.v = SizeInt_init_$Create$;
  _.$_$.w = Vector2D_init_$Create$_1;
  _.$_$.x = Vector2D_init_$Create$_0;
  _.$_$.y = Vector2D_init_$Create$;
  _.$_$.z = Buffer_init_$Create$;
  _.$_$.a1 = ByteArrayBuilder_init_$Create$;
  _.$_$.b1 = _SliceOrientation___get_flipX__impl__lgb7bx;
  _.$_$.c1 = _SliceOrientation___get_isRotatedDeg90CwOrCcw__impl__98v1vq;
  _.$_$.d1 = _SliceOrientation___get_rotation__impl__m65r0o;
  _.$_$.e1 = _Angle___get_absoluteValue__impl__4qoakv;
  _.$_$.f1 = _Angle___get_cosine__impl__vprvmu;
  _.$_$.g1 = _Angle___get_degrees__impl__qg56vw;
  _.$_$.h1 = _Angle___get_sine__impl__15nmyi;
  _.$_$.i1 = Angle__times_impl_v3s9y2;
  _.$_$.j1 = _BoundsBuilder___get_bounds__impl__s1l1gx;
  _.$_$.k1 = BoundsBuilder__plus_impl_cz7f7x_0;
  _.$_$.l1 = _Ratio___init__impl__9mwvn2_0;
  _.$_$.m1 = Ratio__compareTo_impl_z2ienc;
  _.$_$.n1 = Ratio__toFloat_impl_1ftup5;
  _.$_$.o1 = Float32Buffer__get_impl_659lhu;
  _.$_$.p1 = Float32Buffer__set_impl_34szne;
  _.$_$.q1 = _Int8Buffer___init__impl__e20lvc_0;
  _.$_$.r1 = _Int8Buffer___get_buffer__impl__q0gulb;
  _.$_$.s1 = Uint16Buffer__set_impl_g0kliu;
  _.$_$.t1 = Companion_instance;
  _.$_$.u1 = Companion_instance_6;
  _.$_$.v1 = Companion_instance_50;
  _.$_$.w1 = Companion_getInstance_11;
  _.$_$.x1 = Companion_getInstance_31;
  _.$_$.y1 = Companion_instance_32;
  _.$_$.z1 = Companion_instance_36;
  _.$_$.a2 = Companion_getInstance_35;
  _.$_$.b2 = Command_instance;
  _.$_$.c2 = Companion_getInstance_14;
  _.$_$.d2 = Companion_getInstance_15;
  _.$_$.e2 = Companion_getInstance_16;
  _.$_$.f2 = Companion_getInstance_18;
  _.$_$.g2 = Companion_getInstance_19;
  _.$_$.h2 = Companion_getInstance_21;
  _.$_$.i2 = Companion_getInstance_23;
  _.$_$.j2 = Companion_instance_24;
  _.$_$.k2 = Companion_getInstance_26;
  _.$_$.l2 = Companion_getInstance_27;
  _.$_$.m2 = Companion_getInstance_28;
  _.$_$.n2 = Companion_getInstance_13;
  _.$_$.o2 = Companion_getInstance_12;
  _.$_$.p2 = Companion_getInstance_45;
  _.$_$.q2 = Companion_instance_51;
  _.$_$.r2 = Companion_getInstance_47;
  _.$_$.s2 = Companion_instance_48;
  _.$_$.t2 = SyncEventLoop;
  _.$_$.u2 = Lock;
  _.$_$.v2 = NonRecursiveLock;
  _.$_$.w2 = DoubleArrayList;
  _.$_$.x2 = Mixin;
  _.$_$.y2 = PropertyThis;
  _.$_$.z2 = Property;
  _.$_$.a3 = FastArrayList;
  _.$_$.b3 = FastIdentityMap;
  _.$_$.c3 = FastIntMap;
  _.$_$.d3 = FastSmallSet;
  _.$_$.e3 = FastStringMap;
  _.$_$.f3 = IntArray2;
  _.$_$.g3 = IntArrayList;
  _.$_$.h3 = IntDeque;
  _.$_$.i3 = Pool;
  _.$_$.j3 = Ref_0;
  _.$_$.k3 = Ref;
  _.$_$.l3 = ReturnablePool;
  _.$_$.m3 = TGenQueue;
  _.$_$.n3 = clear;
  _.$_$.o3 = contains_0;
  _.$_$.p3 = fastArrayListOf;
  _.$_$.q3 = getAndRemove;
  _.$_$.r3 = getExtraTyped;
  _.$_$.s3 = getExtra;
  _.$_$.t3 = get_1;
  _.$_$.u3 = hasExtra;
  _.$_$.v3 = get_keys_0;
  _.$_$.w3 = linkedHashMapOf;
  _.$_$.x3 = setExtra;
  _.$_$.y3 = set;
  _.$_$.z3 = get_size_3;
  _.$_$.a4 = toFastList_0;
  _.$_$.b4 = toFastList;
  _.$_$.c4 = toIntMap;
  _.$_$.d4 = toRef;
  _.$_$.e4 = InjectorContext;
  _.$_$.f4 = InjectorDependency;
  _.$_$.g4 = Injector;
  _.$_$.h4 = valueOf;
  _.$_$.i4 = RectSlice;
  _.$_$.j4 = VectorPath;
  _.$_$.k4 = Angle;
  _.$_$.l4 = MMatrix;
  _.$_$.m4 = MarginInt;
  _.$_$.n4 = RectangleD;
  _.$_$.o4 = RectangleI;
  _.$_$.p4 = Scale;
  _.$_$.q4 = Size2D;
  _.$_$.r4 = SizeInt;
  _.$_$.s4 = Vector2D;
  _.$_$.t4 = get_degrees;
  _.$_$.u4 = get_immutable;
  _.$_$.v4 = place;
  _.$_$.w4 = toFloat;
  _.$_$.x4 = toInt;
  _.$_$.y4 = toMatrix4;
  _.$_$.z4 = Ratio;
  _.$_$.a5 = interpolate;
  _.$_$.b5 = interpolate_0;
  _.$_$.c5 = toRatio;
  _.$_$.d5 = clamp01;
  _.$_$.e5 = clamp01_0;
  _.$_$.f5 = clampUByte;
  _.$_$.g5 = clamp_2;
  _.$_$.h5 = clamp_0;
  _.$_$.i5 = clamp;
  _.$_$.j5 = clamp_1;
  _.$_$.k5 = convertRange;
  _.$_$.l5 = convertRange_0;
  _.$_$.m5 = ilog2;
  _.$_$.n5 = get_isEven;
  _.$_$.o5 = isNanOrInfinite;
  _.$_$.p5 = get_isPowerOfTwo;
  _.$_$.q5 = nextAlignedTo;
  _.$_$.r5 = nextMultipleOf;
  _.$_$.s5 = roundDecimalPlaces;
  _.$_$.t5 = roundDecimalPlaces_0;
  _.$_$.u5 = toIntCeil;
  _.$_$.v5 = toIntCeil_0;
  _.$_$.w5 = toIntClamp;
  _.$_$.x5 = toIntRound;
  _.$_$.y5 = toIntRound_0;
  _.$_$.z5 = toShortClamped;
  _.$_$.a6 = ByteUnits;
  _.$_$.b6 = ByteArrayBuilder;
  _.$_$.c6 = allocDirect;
  _.$_$.d6 = allocNoDirect;
  _.$_$.e6 = get_arrayFloat;
  _.$_$.f6 = get_arrayInt;
  _.$_$.g6 = get_arrayUByte;
  _.$_$.h6 = arrayadd;
  _.$_$.i6 = arraycopy_3;
  _.$_$.j6 = arraycopy_0;
  _.$_$.k6 = arraycopy_2;
  _.$_$.l6 = arraycopy_8;
  _.$_$.m6 = arraycopy_6;
  _.$_$.n6 = arraycopy_10;
  _.$_$.o6 = arraycopy_9;
  _.$_$.p6 = arraycopy_4;
  _.$_$.q6 = arraycopy_5;
  _.$_$.r6 = arraycopy_7;
  _.$_$.s6 = arrayequal;
  _.$_$.t6 = arrayfill_0;
  _.$_$.u6 = arrayfill;
  _.$_$.v6 = asInt32Array;
  _.$_$.w6 = asUShortArrayInt;
  _.$_$.x6 = clone;
  _.$_$.y6 = copyOf_3;
  _.$_$.z6 = extractScaledf01;
  _.$_$.a7 = extract;
  _.$_$.b7 = get_f32;
  _.$_$.c7 = fromLowHigh;
  _.$_$.d7 = getInt32;
  _.$_$.e7 = getInt8;
  _.$_$.f7 = getS16;
  _.$_$.g7 = get_high;
  _.$_$.h7 = get_i32;
  _.$_$.i7 = get_i8;
  _.$_$.j7 = insert14;
  _.$_$.k7 = insert2;
  _.$_$.l7 = insert3;
  _.$_$.m7 = insert4;
  _.$_$.n7 = insert5;
  _.$_$.o7 = insert8;
  _.$_$.p7 = insertScaledf01;
  _.$_$.q7 = insert;
  _.$_$.r7 = insert_0;
  _.$_$.s7 = get_low;
  _.$_$.t7 = setBits;
  _.$_$.u7 = setFloat32;
  _.$_$.v7 = setInt32;
  _.$_$.w7 = setInt8;
  _.$_$.x7 = get_size_0;
  _.$_$.y7 = sliceBuffer;
  _.$_$.z7 = sliceWithSize;
  _.$_$.a8 = get_u16;
  _.$_$.b8 = get_niceStr;
  _.$_$.c8 = get_niceStr_0;
  _.$_$.d8 = niceStr;
  _.$_$.e8 = niceStr_0;
  _.$_$.f8 = get_jsGlobalThis;
  //endregion
  return _;
}));
