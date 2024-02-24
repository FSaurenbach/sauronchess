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
  var VOID = kotlin_kotlin.$_$.h;
  var protoOf = kotlin_kotlin.$_$.ag;
  var charSequenceGet = kotlin_kotlin.$_$.fe;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.r3;
  var toByte = kotlin_kotlin.$_$.cg;
  var copyOf = kotlin_kotlin.$_$.f8;
  var replace = kotlin_kotlin.$_$.ti;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.k3;
  var objectMeta = kotlin_kotlin.$_$.zf;
  var setMetadataFor = kotlin_kotlin.$_$.bg;
  var charSequenceLength = kotlin_kotlin.$_$.ge;
  var toString = kotlin_kotlin.$_$.s3;
  var toString_0 = kotlin_kotlin.$_$.fg;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.n3;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.o3;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.q1;
  var Unit_getInstance = kotlin_kotlin.$_$.c6;
  var KProperty0 = kotlin_kotlin.$_$.dh;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ue;
  var lazy = kotlin_kotlin.$_$.xl;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Base64, 'Base64', objectMeta);
  setMetadataFor(Hex, 'Hex', objectMeta);
  //endregion
  function fromBase64(_this__u8e3s4, ignoreSpaces, url) {
    ignoreSpaces = ignoreSpaces === VOID ? false : ignoreSpaces;
    url = url === VOID ? false : url;
    return Base64_getInstance().decode_nylj6q_k$(ignoreSpaces, _this__u8e3s4, url);
  }
  function toBase64(_this__u8e3s4, url, doPadding) {
    url = url === VOID ? false : url;
    doPadding = doPadding === VOID ? false : doPadding;
    return Base64_getInstance().encode_md5vrq_k$(_this__u8e3s4, url, doPadding);
  }
  function _get_TABLE__qpzs4d($this) {
    return $this.TABLE_1;
  }
  function _get_TABLE_URL__x17wer($this) {
    return $this.TABLE_URL_1;
  }
  function _get_DECODE__45b8wt($this) {
    return $this.DECODE_1;
  }
  function _get_DECODE_URL__omxadp($this) {
    return $this.DECODE_URL_1;
  }
  function readU8(_this__u8e3s4, $this, index) {
    return _this__u8e3s4[index] & 255;
  }
  function readU24BE(_this__u8e3s4, $this, index) {
    return readU8(_this__u8e3s4, $this, index + 0 | 0) << 16 | readU8(_this__u8e3s4, $this, index + 1 | 0) << 8 | readU8(_this__u8e3s4, $this, index + 2 | 0) << 0;
  }
  function Base64() {
    Base64_instance = this;
    this.TABLE_1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    this.TABLE_URL_1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=';
    this.DECODE_1 = toDecodeArray(this.TABLE_1);
    this.DECODE_URL_1 = toDecodeArray(this.TABLE_URL_1);
  }
  protoOf(Base64).invoke_3oeyhp_k$ = function (v, url) {
    return this.decodeIgnoringSpaces_24yl0r_k$(v, url);
  };
  protoOf(Base64).invoke$default_bkadgc_k$ = function (v, url, $super) {
    url = url === VOID ? false : url;
    return $super === VOID ? this.invoke_3oeyhp_k$(v, url) : $super.invoke_3oeyhp_k$.call(this, v, url);
  };
  protoOf(Base64).invoke_tmcgqb_k$ = function (v, url) {
    return this.encode$default_7u5mos_k$(v, url);
  };
  protoOf(Base64).invoke$default_txnfm4_k$ = function (v, url, $super) {
    url = url === VOID ? false : url;
    return $super === VOID ? this.invoke_tmcgqb_k$(v, url) : $super.invoke_tmcgqb_k$.call(this, v, url);
  };
  protoOf(Base64).decode_w29spz_k$ = function (str, url) {
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
    return copyOf(dst, this.decode_rvcgg9_k$(src, dst, url));
  };
  protoOf(Base64).decode$default_l35ali_k$ = function (str, url, $super) {
    url = url === VOID ? false : url;
    return $super === VOID ? this.decode_w29spz_k$(str, url) : $super.decode_w29spz_k$.call(this, str, url);
  };
  protoOf(Base64).decode_nylj6q_k$ = function (ignoreSpaces, str, url) {
    return ignoreSpaces ? Base64_getInstance().decodeIgnoringSpaces_24yl0r_k$(str, url) : Base64_getInstance().decode_w29spz_k$(str, url);
  };
  protoOf(Base64).decode$default_qich5j_k$ = function (ignoreSpaces, str, url, $super) {
    url = url === VOID ? false : url;
    return $super === VOID ? this.decode_nylj6q_k$(ignoreSpaces, str, url) : $super.decode_nylj6q_k$.call(this, ignoreSpaces, str, url);
  };
  protoOf(Base64).decodeIgnoringSpaces_24yl0r_k$ = function (str, url) {
    return this.decode_w29spz_k$(replace(replace(replace(replace(str, ' ', ''), '\n', ''), '\r', ''), '\t', ''), url);
  };
  protoOf(Base64).decodeIgnoringSpaces$default_5z8eom_k$ = function (str, url, $super) {
    url = url === VOID ? false : url;
    return $super === VOID ? this.decodeIgnoringSpaces_24yl0r_k$(str, url) : $super.decodeIgnoringSpaces_24yl0r_k$.call(this, str, url);
  };
  protoOf(Base64).decode_rvcgg9_k$ = function (src, dst, url) {
    var tmp;
    if (url) {
      tmp = this.DECODE_URL_1;
    } else {
      tmp = this.DECODE_1;
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
  protoOf(Base64).decode$default_n4qggu_k$ = function (src, dst, url, $super) {
    url = url === VOID ? false : url;
    return $super === VOID ? this.decode_rvcgg9_k$(src, dst, url) : $super.decode_rvcgg9_k$.call(this, src, dst, url);
  };
  protoOf(Base64).encode_md5vrq_k$ = function (src, url, doPadding) {
    var tmp;
    if (url) {
      tmp = this.TABLE_URL_1;
    } else {
      tmp = this.TABLE_1;
    }
    var encodeTable = tmp;
    var out = StringBuilder_init_$Create$((imul(src.length, 4) / 3 | 0) + 4 | 0);
    var ipos = 0;
    var extraBytes = src.length % 3 | 0;
    while (ipos < (src.length - 2 | 0)) {
      var num = readU24BE(src, this, ipos);
      ipos = ipos + 3 | 0;
      out.append_am5a4z_k$(charSequenceGet(encodeTable, (num >>> 18 | 0) & 63));
      out.append_am5a4z_k$(charSequenceGet(encodeTable, (num >>> 12 | 0) & 63));
      out.append_am5a4z_k$(charSequenceGet(encodeTable, (num >>> 6 | 0) & 63));
      out.append_am5a4z_k$(charSequenceGet(encodeTable, (num >>> 0 | 0) & 63));
    }
    if (extraBytes === 1) {
      var tmp0 = ipos;
      ipos = tmp0 + 1 | 0;
      var num_0 = readU8(src, this, tmp0);
      out.append_am5a4z_k$(charSequenceGet(encodeTable, num_0 >>> 2 | 0));
      out.append_am5a4z_k$(charSequenceGet(encodeTable, num_0 << 4 & 63));
      if (!url ? true : url ? doPadding : false) {
        out.append_am5a4z_k$(_Char___init__impl__6a9atx(61));
        out.append_am5a4z_k$(_Char___init__impl__6a9atx(61));
      }
    } else if (extraBytes === 2) {
      var tmp2 = ipos;
      ipos = tmp2 + 1 | 0;
      var tmp_0 = readU8(src, this, tmp2) << 8;
      var tmp1 = ipos;
      ipos = tmp1 + 1 | 0;
      var tmp_1 = tmp_0 | readU8(src, this, tmp1);
      out.append_am5a4z_k$(charSequenceGet(encodeTable, tmp_1 >>> 10 | 0));
      out.append_am5a4z_k$(charSequenceGet(encodeTable, (tmp_1 >>> 4 | 0) & 63));
      out.append_am5a4z_k$(charSequenceGet(encodeTable, tmp_1 << 2 & 63));
      if (!url ? true : url ? doPadding : false) {
        out.append_am5a4z_k$(_Char___init__impl__6a9atx(61));
      }
    }
    return out.toString();
  };
  protoOf(Base64).encode$default_7u5mos_k$ = function (src, url, doPadding, $super) {
    url = url === VOID ? false : url;
    doPadding = doPadding === VOID ? false : doPadding;
    return $super === VOID ? this.encode_md5vrq_k$(src, url, doPadding) : $super.encode_md5vrq_k$.call(this, src, url, doPadding);
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
    return Hex_getInstance().encodeLower_d4cnor_k$(_this__u8e3s4);
  }
  function get_shex(_this__u8e3s4) {
    return Hex_getInstance().shex_6nie7k_k$(_this__u8e3s4);
  }
  function appendHexByte(_this__u8e3s4, value) {
    return Hex_getInstance().appendHexByte_yluetf_k$(_this__u8e3s4, value);
  }
  function get_hex_0(_this__u8e3s4) {
    return '0x' + get_shex(_this__u8e3s4);
  }
  function encode($this, src, dst, digits) {
    var inductionVariable = 0;
    var last = src.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var v = src[n] & 255;
        dst.append_am5a4z_k$(digits((v >>> 4 | 0) & 15).value_1);
        dst.append_am5a4z_k$(digits((v >>> 0 | 0) & 15).value_1);
      }
       while (inductionVariable <= last);
  }
  function encodeBase($this, data, digits) {
    // Inline function 'kotlin.text.buildString' call
    var capacity = imul(data.length, 2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.encoding.Hex.encodeBase.<anonymous>' call
    // Inline function 'korlibs.encoding.Hex.encode' call
    Hex_getInstance();
    var inductionVariable = 0;
    var last = data.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var v = data[n] & 255;
        this_0.append_am5a4z_k$(digits((v >>> 4 | 0) & 15).value_1);
        this_0.append_am5a4z_k$(digits((v >>> 0 | 0) & 15).value_1);
      }
       while (inductionVariable <= last);
    return this_0.toString();
  }
  function Hex() {
    Hex_instance = this;
  }
  protoOf(Hex).isHexDigit_uxb61d_k$ = function (c) {
    return this.decodeChar_apk45l_k$(c) >= 0;
  };
  protoOf(Hex).decodeHexDigit_qackxf_k$ = function (c) {
    var result = this.decodeChar_apk45l_k$(c);
    if (result < 0) {
      // Inline function 'kotlin.error' call
      var message = "Invalid hex digit '" + toString(c) + "'";
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return result;
  };
  protoOf(Hex).decodeChar_apk45l_k$ = function (c) {
    return (_Char___init__impl__6a9atx(48) <= c ? c <= _Char___init__impl__6a9atx(57) : false) ? Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(48)) : (_Char___init__impl__6a9atx(97) <= c ? c <= _Char___init__impl__6a9atx(102) : false) ? Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(97)) + 10 | 0 : (_Char___init__impl__6a9atx(65) <= c ? c <= _Char___init__impl__6a9atx(70) : false) ? Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(65)) + 10 | 0 : -1;
  };
  protoOf(Hex).encodeCharLower_1xwumz_k$ = function (v) {
    return v >= 10 ? Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(97), v - 10 | 0) : Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(48), v);
  };
  protoOf(Hex).encodeCharUpper_fza4m4_k$ = function (v) {
    return v >= 10 ? Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(65), v - 10 | 0) : Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(48), v);
  };
  protoOf(Hex).invoke_lt562m_k$ = function (v) {
    return this.decode$default_sfv8l_k$(v);
  };
  protoOf(Hex).invoke_wkjtm0_k$ = function (v) {
    return this.encode_wot3p2_k$(v);
  };
  protoOf(Hex).appendHexByte_yluetf_k$ = function (appender, value) {
    appender.append_am5a4z_k$(this.encodeCharLower_1xwumz_k$((value >>> 4 | 0) & 15));
    appender.append_am5a4z_k$(this.encodeCharLower_1xwumz_k$((value >>> 0 | 0) & 15));
  };
  protoOf(Hex).decode_5c9ju4_k$ = function (str, out) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.encoding.Hex.decode.<anonymous>' call
    // Inline function 'korlibs.encoding.Hex.decode' call
    var this_0 = Hex_getInstance();
    var inductionVariable = 0;
    var last = str.length / 2 | 0;
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c0 = this_0.decodeHexDigit_qackxf_k$(charSequenceGet(str, imul(n, 2) + 0 | 0));
        var c1 = this_0.decodeHexDigit_qackxf_k$(charSequenceGet(str, imul(n, 2) + 1 | 0));
        // Inline function 'korlibs.encoding.Hex.decode.<anonymous>.<anonymous>' call
        out[n] = toByte(c0 << 4 | c1);
      }
       while (inductionVariable < last);
    return out;
  };
  protoOf(Hex).decode$default_sfv8l_k$ = function (str, out, $super) {
    out = out === VOID ? new Int8Array(str.length / 2 | 0) : out;
    return $super === VOID ? this.decode_5c9ju4_k$(str, out) : $super.decode_5c9ju4_k$.call(this, str, out);
  };
  protoOf(Hex).decodeIgnoreSpaces_j9a8q5_k$ = function (str) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.encoding.Hex.decodeIgnoreSpaces.<anonymous>' call
    var inductionVariable = 0;
    var last = str.length;
    while (inductionVariable < last) {
      var element = charSequenceGet(str, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var c = element;
      if (((!(c === _Char___init__impl__6a9atx(32)) ? !(c === _Char___init__impl__6a9atx(9)) : false) ? !(c === _Char___init__impl__6a9atx(10)) : false) ? !(c === _Char___init__impl__6a9atx(13)) : false) {
        this_0.append_am5a4z_k$(c);
      }
    }
    var tmp$ret$1 = this_0.toString();
    return get_unhex(tmp$ret$1);
  };
  protoOf(Hex).decode_cxazmv_k$ = function (str, out) {
    var inductionVariable = 0;
    var last = str.length / 2 | 0;
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c0 = this.decodeHexDigit_qackxf_k$(charSequenceGet(str, imul(n, 2) + 0 | 0));
        var c1 = this.decodeHexDigit_qackxf_k$(charSequenceGet(str, imul(n, 2) + 1 | 0));
        out(n, toByte(c0 << 4 | c1));
      }
       while (inductionVariable < last);
  };
  protoOf(Hex).encode_wot3p2_k$ = function (src) {
    return this.encodeLower_d4cnor_k$(src);
  };
  protoOf(Hex).encodeLower_d4cnor_k$ = function (src) {
    // Inline function 'korlibs.encoding.Hex.encodeBase' call
    // Inline function 'kotlin.text.buildString' call
    var capacity = imul(src.length, 2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.encoding.Hex.encodeBase.<anonymous>' call
    // Inline function 'korlibs.encoding.Hex.encode' call
    Hex_getInstance();
    var inductionVariable = 0;
    var last = src.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var v = src[n] & 255;
        // Inline function 'korlibs.encoding.Hex.encodeLower.<anonymous>' call
        var it = (v >>> 4 | 0) & 15;
        var tmp$ret$0 = Hex_getInstance().encodeCharLower_1xwumz_k$(it);
        this_0.append_am5a4z_k$(tmp$ret$0);
        // Inline function 'korlibs.encoding.Hex.encodeLower.<anonymous>' call
        var it_0 = (v >>> 0 | 0) & 15;
        var tmp$ret$1 = Hex_getInstance().encodeCharLower_1xwumz_k$(it_0);
        this_0.append_am5a4z_k$(tmp$ret$1);
      }
       while (inductionVariable <= last);
    return this_0.toString();
  };
  protoOf(Hex).encodeUpper_ulskc4_k$ = function (src) {
    // Inline function 'korlibs.encoding.Hex.encodeBase' call
    // Inline function 'kotlin.text.buildString' call
    var capacity = imul(src.length, 2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.encoding.Hex.encodeBase.<anonymous>' call
    // Inline function 'korlibs.encoding.Hex.encode' call
    Hex_getInstance();
    var inductionVariable = 0;
    var last = src.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var v = src[n] & 255;
        // Inline function 'korlibs.encoding.Hex.encodeUpper.<anonymous>' call
        var it = (v >>> 4 | 0) & 15;
        var tmp$ret$0 = Hex_getInstance().encodeCharUpper_fza4m4_k$(it);
        this_0.append_am5a4z_k$(tmp$ret$0);
        // Inline function 'korlibs.encoding.Hex.encodeUpper.<anonymous>' call
        var it_0 = (v >>> 0 | 0) & 15;
        var tmp$ret$1 = Hex_getInstance().encodeCharUpper_fza4m4_k$(it_0);
        this_0.append_am5a4z_k$(tmp$ret$1);
      }
       while (inductionVariable <= last);
    return this_0.toString();
  };
  protoOf(Hex).encode_fx4gsi_k$ = function (src, dst) {
    return this.encodeLower_ryn06v_k$(src, dst);
  };
  protoOf(Hex).encodeLower_ryn06v_k$ = function (src, dst) {
    var inductionVariable = 0;
    var last = src.length - 1 | 0;
    var tmp;
    if (inductionVariable <= last) {
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var v = src[n] & 255;
        // Inline function 'korlibs.encoding.Hex.encodeLower.<anonymous>' call
        var it = (v >>> 4 | 0) & 15;
        var tmp$ret$0 = Hex_getInstance().encodeCharLower_1xwumz_k$(it);
        dst.append_am5a4z_k$(tmp$ret$0);
        // Inline function 'korlibs.encoding.Hex.encodeLower.<anonymous>' call
        var it_0 = (v >>> 0 | 0) & 15;
        var tmp$ret$1 = Hex_getInstance().encodeCharLower_1xwumz_k$(it_0);
        dst.append_am5a4z_k$(tmp$ret$1);
      }
       while (inductionVariable <= last);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Hex).encodeUpper_n64l94_k$ = function (src, dst) {
    var inductionVariable = 0;
    var last = src.length - 1 | 0;
    var tmp;
    if (inductionVariable <= last) {
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var v = src[n] & 255;
        // Inline function 'korlibs.encoding.Hex.encodeUpper.<anonymous>' call
        var it = (v >>> 4 | 0) & 15;
        var tmp$ret$0 = Hex_getInstance().encodeCharUpper_fza4m4_k$(it);
        dst.append_am5a4z_k$(tmp$ret$0);
        // Inline function 'korlibs.encoding.Hex.encodeUpper.<anonymous>' call
        var it_0 = (v >>> 0 | 0) & 15;
        var tmp$ret$1 = Hex_getInstance().encodeCharUpper_fza4m4_k$(it_0);
        dst.append_am5a4z_k$(tmp$ret$1);
      }
       while (inductionVariable <= last);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Hex).shex_317oeo_k$ = function (v) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.encoding.Hex.shex.<anonymous>' call
    this_0.append_am5a4z_k$(Hex_getInstance().encodeCharUpper_fza4m4_k$((v >>> 4 | 0) & 15));
    this_0.append_am5a4z_k$(Hex_getInstance().encodeCharUpper_fza4m4_k$((v >>> 0 | 0) & 15));
    return this_0.toString();
  };
  protoOf(Hex).shex_6nie7k_k$ = function (v) {
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
        this_0.append_am5a4z_k$(Hex_getInstance().encodeCharUpper_fza4m4_k$(v_0));
      }
       while (inductionVariable < 8);
    return this_0.toString();
  };
  var Hex_instance;
  function Hex_getInstance() {
    if (Hex_instance == null)
      new Hex();
    return Hex_instance;
  }
  function get_hex_1(_this__u8e3s4) {
    return '0x' + get_shex_0(_this__u8e3s4);
  }
  function get_unhex(_this__u8e3s4) {
    return Hex_getInstance().decode$default_sfv8l_k$(_this__u8e3s4);
  }
  function get_shex_0(_this__u8e3s4) {
    return Hex_getInstance().shex_317oeo_k$(_this__u8e3s4);
  }
  function get_isNodeJs() {
    _init_properties_SecureRandomJs_kt__5cgizh();
    // Inline function 'kotlin.getValue' call
    var this_0 = isNodeJs$delegate;
    isNodeJs$factory();
    return this_0.get_value_j01efc_k$();
  }
  var isNodeJs$delegate;
  function get__global() {
    _init_properties_SecureRandomJs_kt__5cgizh();
    return _global;
  }
  var _global;
  function isNodeJs$delegate$lambda() {
    _init_properties_SecureRandomJs_kt__5cgizh();
    // Inline function 'kotlin.js.unsafeCast' call
    return typeof process === 'object' && typeof require === 'function';
  }
  function isNodeJs$factory() {
    return getPropertyCallableRef('isNodeJs', 0, KProperty0, function () {
      return get_isNodeJs();
    }, null);
  }
  var properties_initialized_SecureRandomJs_kt_ve9k7v;
  function _init_properties_SecureRandomJs_kt__5cgizh() {
    if (!properties_initialized_SecureRandomJs_kt_ve9k7v) {
      properties_initialized_SecureRandomJs_kt_ve9k7v = true;
      isNodeJs$delegate = lazy(isNodeJs$delegate$lambda);
      _global = typeof global !== 'undefined' ? global : self;
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Hex_getInstance;
  _.$_$.b = appendHexByte;
  _.$_$.c = fromBase64;
  _.$_$.d = get_hex;
  _.$_$.e = get_hex_1;
  _.$_$.f = get_hex_0;
  _.$_$.g = get_shex;
  _.$_$.h = toBase64;
  _.$_$.i = get_unhex;
  //endregion
  return _;
}));
