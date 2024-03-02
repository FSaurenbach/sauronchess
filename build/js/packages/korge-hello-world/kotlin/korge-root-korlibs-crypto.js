(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korlibs-crypto'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'korge-root-korlibs-crypto'.");
    }
    root['korge-root-korlibs-crypto'] = factory(typeof this['korge-root-korlibs-crypto'] === 'undefined' ? {} : this['korge-root-korlibs-crypto'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.d;
  var charSequenceGet = kotlin_kotlin.$_$.p7;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.k2;
  var toByte = kotlin_kotlin.$_$.u8;
  var copyOf = kotlin_kotlin.$_$.d4;
  var protoOf = kotlin_kotlin.$_$.s8;
  var replace = kotlin_kotlin.$_$.ma;
  var Unit_instance = kotlin_kotlin.$_$.c3;
  var objectMeta = kotlin_kotlin.$_$.r8;
  var setMetadataFor = kotlin_kotlin.$_$.t8;
  var charSequenceLength = kotlin_kotlin.$_$.q7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.i2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.y;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Base64, 'Base64', objectMeta);
  setMetadataFor(Hex, 'Hex', objectMeta);
  //endregion
  function fromBase64(_this__u8e3s4, ignoreSpaces, url) {
    ignoreSpaces = ignoreSpaces === VOID ? false : ignoreSpaces;
    url = url === VOID ? false : url;
    return Base64_getInstance().ri(ignoreSpaces, _this__u8e3s4, url);
  }
  function readU8(_this__u8e3s4, $this, index) {
    return _this__u8e3s4[index] & 255;
  }
  function Base64() {
    Base64_instance = this;
    this.ni_1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    this.oi_1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=';
    this.pi_1 = toDecodeArray(this.ni_1);
    this.qi_1 = toDecodeArray(this.oi_1);
  }
  protoOf(Base64).si = function (str, url) {
    var tmp = 0;
    var tmp_0 = str.length;
    var tmp_1 = new Int8Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.code' call
      var this_0 = charSequenceGet(str, tmp_2);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp_1[tmp_2] = toByte(tmp$ret$0);
      tmp = tmp + 1 | 0;
    }
    var src = tmp_1;
    var dst = new Int8Array(src.length);
    return copyOf(dst, this.ti(src, dst, url));
  };
  protoOf(Base64).ri = function (ignoreSpaces, str, url) {
    return ignoreSpaces ? Base64_getInstance().ui(str, url) : Base64_getInstance().si(str, url);
  };
  protoOf(Base64).ui = function (str, url) {
    return this.si(replace(replace(replace(replace(str, ' ', ''), '\n', ''), '\r', ''), '\t', ''), url);
  };
  protoOf(Base64).ti = function (src, dst, url) {
    var tmp;
    if (url) {
      tmp = this.qi_1;
    } else {
      tmp = this.pi_1;
    }
    var decodeArray = tmp;
    var m = 0;
    var n = 0;
    $l$loop: while (n < src.length) {
      var d = decodeArray[readU8(src, this, n)];
      if (d < 0) {
        n = n + 1 | 0;
        continue $l$loop;
      }
      var tmp_0;
      if (n < src.length) {
        var tmp1 = n;
        n = tmp1 + 1 | 0;
        tmp_0 = decodeArray[readU8(src, this, tmp1)];
      } else {
        tmp_0 = 64;
      }
      var b0 = tmp_0;
      var tmp_1;
      if (n < src.length) {
        var tmp2 = n;
        n = tmp2 + 1 | 0;
        tmp_1 = decodeArray[readU8(src, this, tmp2)];
      } else {
        tmp_1 = 64;
      }
      var b1 = tmp_1;
      var tmp_2;
      if (n < src.length) {
        var tmp3 = n;
        n = tmp3 + 1 | 0;
        tmp_2 = decodeArray[readU8(src, this, tmp3)];
      } else {
        tmp_2 = 64;
      }
      var b2 = tmp_2;
      var tmp_3;
      if (n < src.length) {
        var tmp4 = n;
        n = tmp4 + 1 | 0;
        tmp_3 = decodeArray[readU8(src, this, tmp4)];
      } else {
        tmp_3 = 64;
      }
      var b3 = tmp_3;
      var tmp5 = m;
      m = tmp5 + 1 | 0;
      dst[tmp5] = toByte(b0 << 2 | b1 >> 4);
      if (b2 < 64) {
        var tmp6 = m;
        m = tmp6 + 1 | 0;
        dst[tmp6] = toByte(b1 << 4 | b2 >> 2);
        if (b3 < 64) {
          var tmp7 = m;
          m = tmp7 + 1 | 0;
          dst[tmp7] = toByte(b2 << 6 | b3);
        }
      }
    }
    return m;
  };
  var Base64_instance;
  function Base64_getInstance() {
    if (Base64_instance == null)
      new Base64();
    return Base64_instance;
  }
  function toDecodeArray(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var this_0 = new Int32Array(256);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.encoding.toDecodeArray.<anonymous>' call
    var inductionVariable = 0;
    if (inductionVariable <= 255)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this_0[n] = -1;
      }
       while (inductionVariable <= 255);
    var inductionVariable_0 = 0;
    var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
    if (inductionVariable_0 <= last)
      do {
        var n_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_1 = charSequenceGet(_this__u8e3s4, n_0);
        this_0[Char__toInt_impl_vasixd(this_1)] = n_0;
      }
       while (inductionVariable_0 <= last);
    return this_0;
  }
  function get_hex(_this__u8e3s4) {
    return Hex_instance.vi(_this__u8e3s4);
  }
  function get_shex(_this__u8e3s4) {
    return Hex_instance.wi(_this__u8e3s4);
  }
  function appendHexByte(_this__u8e3s4, value) {
    return Hex_instance.xi(_this__u8e3s4, value);
  }
  function get_hex_0(_this__u8e3s4) {
    return '0x' + get_shex(_this__u8e3s4);
  }
  function Hex() {
  }
  protoOf(Hex).yi = function (v) {
    return v >= 10 ? Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(97), v - 10 | 0) : Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(48), v);
  };
  protoOf(Hex).zi = function (v) {
    return v >= 10 ? Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(65), v - 10 | 0) : Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(48), v);
  };
  protoOf(Hex).xi = function (appender, value) {
    appender.g5(this.yi((value >>> 4 | 0) & 15));
    appender.g5(this.yi((value >>> 0 | 0) & 15));
  };
  protoOf(Hex).vi = function (src) {
    // Inline function 'korlibs.encoding.Hex.encodeBase' call
    // Inline function 'kotlin.text.buildString' call
    var capacity = imul(src.length, 2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.encoding.Hex.encodeBase.<anonymous>' call
    // Inline function 'korlibs.encoding.Hex.encode' call
    var inductionVariable = 0;
    var last = src.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var v = src[n] & 255;
        // Inline function 'korlibs.encoding.Hex.encodeLower.<anonymous>' call
        var it = (v >>> 4 | 0) & 15;
        var tmp$ret$0 = Hex_instance.yi(it);
        this_0.g5(tmp$ret$0);
        // Inline function 'korlibs.encoding.Hex.encodeLower.<anonymous>' call
        var it_0 = (v >>> 0 | 0) & 15;
        var tmp$ret$1 = Hex_instance.yi(it_0);
        this_0.g5(tmp$ret$1);
      }
       while (inductionVariable <= last);
    return this_0.toString();
  };
  protoOf(Hex).wi = function (v) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(8);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.encoding.Hex.shex.<anonymous>' call
    var inductionVariable = 0;
    if (inductionVariable < 8)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var v_0 = (v >>> imul(7 - n | 0, 4) | 0) & 15;
        this_0.g5(Hex_instance.zi(v_0));
      }
       while (inductionVariable < 8);
    return this_0.toString();
  };
  var Hex_instance;
  function Hex_getInstance() {
    return Hex_instance;
  }
  //region block: init
  Hex_instance = new Hex();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = appendHexByte;
  _.$_$.b = fromBase64;
  _.$_$.c = get_hex;
  _.$_$.d = get_hex_0;
  //endregion
  return _;
}));
