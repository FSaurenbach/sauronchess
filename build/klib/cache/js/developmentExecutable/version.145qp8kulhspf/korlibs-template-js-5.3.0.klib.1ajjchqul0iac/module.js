(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korlibs-template'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'korge-root-korlibs-template'.");
    }
    root['korge-root-korlibs-template'] = factory(typeof this['korge-root-korlibs-template'] === 'undefined' ? {} : this['korge-root-korlibs-template'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var CoroutineImpl = kotlin_kotlin.$_$.od;
  var Unit_getInstance = kotlin_kotlin.$_$.c6;
  var protoOf = kotlin_kotlin.$_$.ag;
  var THROW_CCE = kotlin_kotlin.$_$.zk;
  var classMeta = kotlin_kotlin.$_$.ie;
  var setMetadataFor = kotlin_kotlin.$_$.bg;
  var VOID = kotlin_kotlin.$_$.h;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.vc;
  var emptyList = kotlin_kotlin.$_$.q8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var plus = kotlin_kotlin.$_$.ua;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.y;
  var hashCode = kotlin_kotlin.$_$.we;
  var equals = kotlin_kotlin.$_$.me;
  var getStringHashCode = kotlin_kotlin.$_$.ve;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.em;
  var objectMeta = kotlin_kotlin.$_$.zf;
  var zip = kotlin_kotlin.$_$.qc;
  var ensureNotNull = kotlin_kotlin.$_$.sl;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q1;
  var hashMapOf = kotlin_kotlin.$_$.j9;
  var interfaceMeta = kotlin_kotlin.$_$.ye;
  var Exception = kotlin_kotlin.$_$.qk;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.u1;
  var captureStack = kotlin_kotlin.$_$.ce;
  var listOf = kotlin_kotlin.$_$.ga;
  var toMap = kotlin_kotlin.$_$.ec;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var toList = kotlin_kotlin.$_$.ac;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var emptySet = kotlin_kotlin.$_$.s8;
  var listOf_0 = kotlin_kotlin.$_$.fa;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.k3;
  var charArrayOf = kotlin_kotlin.$_$.de;
  var split = kotlin_kotlin.$_$.xi;
  var drop = kotlin_kotlin.$_$.o8;
  var until = kotlin_kotlin.$_$.zg;
  var slice = kotlin_kotlin.$_$.gb;
  var joinToString = kotlin_kotlin.$_$.r9;
  var Map = kotlin_kotlin.$_$.q6;
  var isInterface = kotlin_kotlin.$_$.if;
  var startsWith = kotlin_kotlin.$_$.zi;
  var lastOrNull = kotlin_kotlin.$_$.z9;
  var charSequenceLength = kotlin_kotlin.$_$.ge;
  var lazy = kotlin_kotlin.$_$.yl;
  var charSequenceGet = kotlin_kotlin.$_$.fe;
  var indexOf = kotlin_kotlin.$_$.ei;
  var isCharSequence = kotlin_kotlin.$_$.df;
  var trim = kotlin_kotlin.$_$.dk;
  var toString = kotlin_kotlin.$_$.fg;
  var substring = kotlin_kotlin.$_$.gj;
  var get_lastIndex = kotlin_kotlin.$_$.v9;
  var getOrNull = kotlin_kotlin.$_$.g9;
  var trimEnd = kotlin_kotlin.$_$.yj;
  var trimStart = kotlin_kotlin.$_$.ak;
  var split_0 = kotlin_kotlin.$_$.yi;
  var RuntimeException = kotlin_kotlin.$_$.yk;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.p2;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.n2;
  var defineProp = kotlin_kotlin.$_$.ke;
  var KProperty1 = kotlin_kotlin.$_$.eh;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ue;
  var SuspendFunction1 = kotlin_kotlin.$_$.qd;
  var SuspendFunction2 = kotlin_kotlin.$_$.rd;
  var SuspendFunction0 = kotlin_kotlin.$_$.pd;
  var List = kotlin_kotlin.$_$.o6;
  var isNumber = kotlin_kotlin.$_$.kf;
  var toString_0 = kotlin_kotlin.$_$.hm;
  var NotImplementedError = kotlin_kotlin.$_$.vk;
  var numberRangeToNumber = kotlin_kotlin.$_$.rf;
  var step = kotlin_kotlin.$_$.xg;
  var compareValues = kotlin_kotlin.$_$.rc;
  var Comparator = kotlin_kotlin.$_$.nk;
  var capitalize = kotlin_kotlin.$_$.ph;
  var firstOrNull = kotlin_kotlin.$_$.z8;
  var replace = kotlin_kotlin.$_$.ti;
  var reversed = kotlin_kotlin.$_$.vi;
  var reversed_0 = kotlin_kotlin.$_$.bb;
  var coerceIn = kotlin_kotlin.$_$.tg;
  var slice_0 = kotlin_kotlin.$_$.wi;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.h7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var sortedWith = kotlin_kotlin.$_$.jb;
  var to = kotlin_kotlin.$_$.im;
  var copyToArray = kotlin_kotlin.$_$.k8;
  var isArray = kotlin_kotlin.$_$.ze;
  var chunked = kotlin_kotlin.$_$.g7;
  var last = kotlin_kotlin.$_$.ba;
  var distinct = kotlin_kotlin.$_$.m8;
  var abs = kotlin_kotlin.$_$.ig;
  var Long = kotlin_kotlin.$_$.tk;
  var abs_0 = kotlin_kotlin.$_$.hg;
  var numberToDouble = kotlin_kotlin.$_$.uf;
  var round = kotlin_kotlin.$_$.kg;
  var first = kotlin_kotlin.$_$.b9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var contains = kotlin_kotlin.$_$.sh;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var setOf = kotlin_kotlin.$_$.fb;
  var setOf_0 = kotlin_kotlin.$_$.eb;
  var takeLast = kotlin_kotlin.$_$.mb;
  var Pair = kotlin_kotlin.$_$.wk;
  var mapCapacity = kotlin_kotlin.$_$.ha;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var toMutableMap = kotlin_kotlin.$_$.ic;
  var CancellationException = kotlin_kotlin.$_$.uc;
  var println = kotlin_kotlin.$_$.wd;
  var KMutableProperty1 = kotlin_kotlin.$_$.ch;
  var toMap_0 = kotlin_kotlin.$_$.fc;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var toDouble = kotlin_kotlin.$_$.kj;
  var toIntOrNull = kotlin_kotlin.$_$.mj;
  var toLongOrNull = kotlin_kotlin.$_$.rj;
  var toDoubleOrNull = kotlin_kotlin.$_$.jj;
  var isDigit = kotlin_kotlin.$_$.hi;
  var toString_1 = kotlin_kotlin.$_$.s3;
  var withIndex = kotlin_kotlin.$_$.oc;
  var addAll = kotlin_kotlin.$_$.z6;
  var joinToString_0 = kotlin_kotlin.$_$.s9;
  var contains_0 = kotlin_kotlin.$_$.k7;
  var Iterable = kotlin_kotlin.$_$.j6;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var KClass = kotlin_kotlin.$_$.ah;
  var MutableList = kotlin_kotlin.$_$.t6;
  var MutableMap = kotlin_kotlin.$_$.u6;
  var plus_0 = kotlin_kotlin.$_$.ta;
  var contains_1 = kotlin_kotlin.$_$.i7;
  var Set = kotlin_kotlin.$_$.x6;
  var compareTo = kotlin_kotlin.$_$.je;
  var isComparable = kotlin_kotlin.$_$.ef;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.k5;
  var numberToInt = kotlin_kotlin.$_$.vf;
  var numberToLong = kotlin_kotlin.$_$.wf;
  var count = kotlin_kotlin.$_$.l8;
  var toList_0 = kotlin_kotlin.$_$.yb;
  var toList_1 = kotlin_kotlin.$_$.pj;
  var toList_2 = kotlin_kotlin.$_$.bc;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.p1;
  var removeLast = kotlin_kotlin.$_$.za;
  var Char = kotlin_kotlin.$_$.lk;
  var Char__hashCode_impl_otmys = kotlin_kotlin.$_$.m3;
  var repeat = kotlin_kotlin.$_$.si;
  var contains_2 = kotlin_kotlin.$_$.th;
  var isBlank = kotlin_kotlin.$_$.gi;
  var isWhitespace = kotlin_kotlin.$_$.ji;
  var isLetterOrDigit = kotlin_kotlin.$_$.ii;
  var toInt = kotlin_kotlin.$_$.oj;
  var numberToChar = kotlin_kotlin.$_$.tf;
  var RuntimeException_init_$Create$_0 = kotlin_kotlin.$_$.o2;
  var endsWith = kotlin_kotlin.$_$.yh;
  var startsWith_0 = kotlin_kotlin.$_$.aj;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.r3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.p4;
  var toString_2 = kotlin_kotlin.$_$.wj;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.h4;
  var toString_3 = kotlin_kotlin.$_$.tj;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.n1;
  var Continuation = kotlin_kotlin.$_$.gd;
  var startCoroutine = kotlin_kotlin.$_$.sd;
  var intercepted = kotlin_kotlin.$_$.yc;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.m1;
  var returnIfSuspended = kotlin_kotlin.$_$.s;
  var Result = kotlin_kotlin.$_$.xk;
  var Companion_getInstance = kotlin_kotlin.$_$.x5;
  var createFailure = kotlin_kotlin.$_$.rl;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.t3;
  //endregion
  //region block: pre-declaration
  setMetadataFor(KorteTemplateConfig$_init_$slambda_o32qcx, 'KorteTemplateConfig$<init>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteTemplateConfig$variableProcessor$slambda, 'KorteTemplateConfig$variableProcessor$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor(KorteTemplateConfig$replaceVariablePocessor$slambda, 'KorteTemplateConfig$replaceVariablePocessor$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor(KorteTemplateConfig$writeBlockExpressionResult$slambda, 'KorteTemplateConfig$writeBlockExpressionResult$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor(KorteTemplateConfig$replaceWriteBlockExpressionResult$slambda, 'KorteTemplateConfig$replaceWriteBlockExpressionResult$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor(KorteTemplateConfig, 'KorteTemplateConfig', classMeta, VOID, VOID, KorteTemplateConfig);
  setMetadataFor(Part, 'Part', classMeta);
  setMetadataFor(BuildContext, 'BuildContext', classMeta);
  function compareTo_0(_this__u8e3s4, other) {
    return compareTo(numberToDouble(_this__u8e3s4), numberToDouble(other));
  }
  function combineTypes(a, b) {
    if (a == null ? true : b == null)
      return null;
    var tmp;
    if (isNumber(a)) {
      tmp = isNumber(b);
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp_0;
      if (!(a == null) ? typeof a === 'number' : false) {
        tmp_0 = true;
      } else {
        tmp_0 = !(b == null) ? typeof b === 'number' : false;
      }
      if (tmp_0)
        return 0.0;
      var tmp_1;
      if (!(a == null) ? typeof a === 'number' : false) {
        tmp_1 = true;
      } else {
        tmp_1 = !(b == null) ? typeof b === 'number' : false;
      }
      if (tmp_1)
        return 0.0;
      var tmp_2;
      if (a instanceof Long) {
        tmp_2 = true;
      } else {
        tmp_2 = b instanceof Long;
      }
      if (tmp_2)
        return new Long(0, 0);
      var tmp_3;
      if (!(a == null) ? typeof a === 'number' : false) {
        tmp_3 = true;
      } else {
        tmp_3 = !(b == null) ? typeof b === 'number' : false;
      }
      if (tmp_3)
        return 0;
      return 0.0;
    }
    return a;
  }
  function toDynamicCastToType(_this__u8e3s4, other) {
    var tmp;
    if (!(other == null) ? typeof other === 'boolean' : false) {
      tmp = this.toDynamicBool_bp1ztv_k$(_this__u8e3s4);
    } else {
      if (!(other == null) ? typeof other === 'number' : false) {
        tmp = this.toDynamicInt_6gqvkq_k$(_this__u8e3s4);
      } else {
        if (other instanceof Long) {
          tmp = this.toDynamicLong_8oqsup_k$(_this__u8e3s4);
        } else {
          if (!(other == null) ? typeof other === 'number' : false) {
            tmp = this.toDynamicDouble_6mw6ws_k$(_this__u8e3s4);
          } else {
            if (!(other == null) ? typeof other === 'number' : false) {
              tmp = this.toDynamicDouble_6mw6ws_k$(_this__u8e3s4);
            } else {
              if (!(other == null) ? typeof other === 'string' : false) {
                tmp = this.toDynamicString_9srrng_k$(_this__u8e3s4);
              } else {
                tmp = _this__u8e3s4;
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function toDynamicString(_this__u8e3s4) {
    return KorteDynamic2_getInstance().toString_drfd65_k$(_this__u8e3s4);
  }
  function toDynamicBool(_this__u8e3s4) {
    return KorteDynamic2_getInstance().toBool_cifx52_k$(_this__u8e3s4);
  }
  function toDynamicInt(_this__u8e3s4) {
    return KorteDynamic2_getInstance().toInt_uwnlaj_k$(_this__u8e3s4);
  }
  function toDynamicLong(_this__u8e3s4) {
    return KorteDynamic2_getInstance().toLong_vqdvrs_k$(_this__u8e3s4);
  }
  function toDynamicDouble(_this__u8e3s4) {
    return KorteDynamic2_getInstance().toDouble_o85fbn_k$(_this__u8e3s4);
  }
  function toDynamicNumber(_this__u8e3s4) {
    return KorteDynamic2_getInstance().toNumber_85n0dh_k$(_this__u8e3s4);
  }
  function toDynamicList(_this__u8e3s4) {
    return KorteDynamic2_getInstance().toList_9ni47a_k$(_this__u8e3s4);
  }
  function dynamicLength(_this__u8e3s4) {
    return KorteDynamic2_getInstance().length_xgn8k9_k$(_this__u8e3s4);
  }
  function dynamicGet(_this__u8e3s4, key, mapper, $completion) {
    return KorteDynamic2_getInstance().accessAny_aov4i6_k$(_this__u8e3s4, key, mapper, $completion);
  }
  function dynamicSet(_this__u8e3s4, key, value, mapper, $completion) {
    return KorteDynamic2_getInstance().setAny_6duv_k$(_this__u8e3s4, key, value, mapper, $completion);
  }
  function dynamicCall(_this__u8e3s4, args, mapper, $completion) {
    return KorteDynamic2_getInstance().callAny_n32b5j_k$(_this__u8e3s4, toList_2(args), mapper, $completion);
  }
  function dynamicCallMethod(_this__u8e3s4, methodName, args, mapper, $completion) {
    return KorteDynamic2_getInstance().callAny_5ey320_k$(_this__u8e3s4, methodName, toList_2(args), mapper, $completion);
  }
  setMetadataFor(KorteDynamicContext, 'KorteDynamicContext', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [2, 3]);
  setMetadataFor(KorteTag, 'KorteTag', classMeta, VOID, [KorteDynamicContext], VOID, VOID, VOID, [2, 3]);
  setMetadataFor(Ctx, 'Ctx', classMeta, VOID, [KorteDynamicContext], Ctx, VOID, VOID, [2, 3]);
  setMetadataFor(KorteFilter, 'KorteFilter', classMeta);
  setMetadataFor(KorteFunction, 'KorteFunction', classMeta, VOID, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(KorteAutoEscapeMode, 'KorteAutoEscapeMode', classMeta);
  setMetadataFor($getCOROUTINE$1, '$getCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(KorteTemplate$Macro$invoke$slambda, 'KorteTemplate$Macro$invoke$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($invokeCOROUTINE$2, '$invokeCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor($evalCOROUTINE$3, '$evalCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor($writeCOROUTINE$4, '$writeCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(KorteAsyncTextWriterContainer, 'KorteAsyncTextWriterContainer', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(WithArgs, 'WithArgs', classMeta, VOID, [KorteAsyncTextWriterContainer], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteTemplate$TemplateEvalContext$exec$slambda, 'KorteTemplate$TemplateEvalContext$exec$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($exec2COROUTINE$5, '$exec2COROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor($execCOROUTINE$6, '$execCOROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor($invokeCOROUTINE$7, '$invokeCOROUTINE$7', classMeta, CoroutineImpl);
  setMetadataFor($invokeCOROUTINE$8, '$invokeCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor($evalCOROUTINE$9, '$evalCOROUTINE$9', classMeta, CoroutineImpl);
  setMetadataFor(KorteTemplate$EvalContext$capture$slambda, 'KorteTemplate$EvalContext$capture$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteTemplate$EvalContext$captureRaw$slambda, 'KorteTemplate$EvalContext$captureRaw$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(ParseContext, 'ParseContext', classMeta);
  setMetadataFor(Scope, 'Scope', classMeta, VOID, [KorteDynamicContext], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(ExecResult, 'ExecResult', classMeta);
  setMetadataFor(DynamicInvokable, 'DynamicInvokable', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Macro, 'Macro', classMeta, VOID, [DynamicInvokable], VOID, VOID, VOID, [2]);
  setMetadataFor(BlockInTemplateEval, 'BlockInTemplateEval', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(TemplateEvalContext, 'TemplateEvalContext', classMeta, VOID, VOID, VOID, VOID, VOID, [4, 3, 1]);
  setMetadataFor(StopEvaluatingException, 'StopEvaluatingException', classMeta, Exception, VOID, StopEvaluatingException);
  setMetadataFor(EvalContext, 'EvalContext', classMeta, VOID, [KorteDynamicContext], VOID, VOID, VOID, [2, 3]);
  setMetadataFor($initCOROUTINE$0, '$initCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($invokeCOROUTINE$10, '$invokeCOROUTINE$10', classMeta, CoroutineImpl);
  setMetadataFor($invokeCOROUTINE$11, '$invokeCOROUTINE$11', classMeta, CoroutineImpl);
  setMetadataFor($prenderCOROUTINE$12, '$prenderCOROUTINE$12', classMeta, CoroutineImpl);
  setMetadataFor($prenderCOROUTINE$13, '$prenderCOROUTINE$13', classMeta, CoroutineImpl);
  setMetadataFor(KorteTemplate, 'KorteTemplate', classMeta, VOID, VOID, VOID, VOID, VOID, [0, 2]);
  setMetadataFor(KorteRawString, 'KorteRawString', classMeta);
  setMetadataFor($handleCOROUTINE$14, '$handleCOROUTINE$14', classMeta, CoroutineImpl);
  setMetadataFor(Parse, 'Parse', classMeta, VOID, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Companion_0, 'Companion', objectMeta, VOID, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(KorteBlock, 'KorteBlock', interfaceMeta, VOID, [KorteDynamicContext], VOID, VOID, VOID, [1, 2, 3]);
  function get_posContext() {
    return new KorteFilePosContext(this.get_file_wom0n9_k$(), this.get_pos_18iyad_k$());
  }
  function exception(msg) {
    this.get_posContext_avexqc_k$().exception_kh9cqz_k$(msg);
  }
  setMetadataFor(KorteTokenContext, 'KorteTokenContext', interfaceMeta);
  setMetadataFor(KorteToken, 'KorteToken', classMeta, VOID, [KorteTokenContext]);
  setMetadataFor(TLiteral, 'TLiteral', classMeta, KorteToken, [KorteToken, KorteTokenContext]);
  setMetadataFor(TExpr, 'TExpr', classMeta, KorteToken, [KorteToken, KorteTokenContext]);
  setMetadataFor(TTag, 'TTag', classMeta, KorteToken, [KorteToken, KorteTokenContext]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(KorteTemplates$cache$slambda, 'KorteTemplates$cache$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [0]);
  setMetadataFor(KorteTemplates$getInclude$slambda, 'KorteTemplates$getInclude$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [0]);
  setMetadataFor(KorteTemplates$getLayout$slambda, 'KorteTemplates$getLayout$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [0]);
  setMetadataFor(KorteTemplates$get$slambda, 'KorteTemplates$get$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [0]);
  setMetadataFor($cacheCOROUTINE$15, '$cacheCOROUTINE$15', classMeta, CoroutineImpl);
  setMetadataFor($renderCOROUTINE$16, '$renderCOROUTINE$16', classMeta, CoroutineImpl);
  setMetadataFor($renderCOROUTINE$17, '$renderCOROUTINE$17', classMeta, CoroutineImpl);
  setMetadataFor($prenderCOROUTINE$18, '$prenderCOROUTINE$18', classMeta, CoroutineImpl);
  setMetadataFor($prenderCOROUTINE$19, '$prenderCOROUTINE$19', classMeta, CoroutineImpl);
  setMetadataFor(KorteTemplates, 'KorteTemplates', classMeta, VOID, VOID, VOID, VOID, VOID, [2, 1]);
  setMetadataFor(KorteTemplateContent, 'KorteTemplateContent', classMeta);
  setMetadataFor(KorteFilePosContext, 'KorteFilePosContext', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(KorteFileContext, 'KorteFileContext', classMeta);
  setMetadataFor(Mixin, 'Mixin', classMeta, VOID, [KorteTokenContext], Mixin);
  setMetadataFor(KorteNewTemplateProvider, 'KorteNewTemplateProvider', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(NotFoundException, 'NotFoundException', classMeta, RuntimeException);
  setMetadataFor($newGetCOROUTINE$21, '$newGetCOROUTINE$21', classMeta, CoroutineImpl);
  function newGet(template, $completion) {
    var tmp = new $newGetCOROUTINE$21(this, template, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  setMetadataFor(KorteTemplateProvider, 'KorteTemplateProvider', interfaceMeta, VOID, [KorteNewTemplateProvider], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteException, 'KorteException', classMeta, RuntimeException);
  setMetadataFor($newGetSureCOROUTINE$20, '$newGetSureCOROUTINE$20', classMeta, CoroutineImpl);
  setMetadataFor(KorteDefaultFunctions$Parent$slambda$slambda, 'KorteDefaultFunctions$Parent$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFunctions$Cycle$slambda, 'KorteDefaultFunctions$Cycle$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor(KorteDefaultFunctions$Range$slambda, 'KorteDefaultFunctions$Range$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor(KorteDefaultFunctions$Parent$slambda, 'KorteDefaultFunctions$Parent$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor(KorteDefaultFunctions, 'KorteDefaultFunctions', objectMeta);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(KorteDefaultFilters$Capitalize$slambda, 'KorteDefaultFilters$Capitalize$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Join$slambda, 'KorteDefaultFilters$Join$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$First$slambda, 'KorteDefaultFilters$First$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Last$slambda, 'KorteDefaultFilters$Last$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Split$slambda, 'KorteDefaultFilters$Split$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Concat$slambda, 'KorteDefaultFilters$Concat$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Length$slambda, 'KorteDefaultFilters$Length$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Quote$slambda, 'KorteDefaultFilters$Quote$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Raw$slambda, 'KorteDefaultFilters$Raw$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Replace$slambda, 'KorteDefaultFilters$Replace$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Reverse$slambda, 'KorteDefaultFilters$Reverse$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Slice$slambda, 'KorteDefaultFilters$Slice$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Sort$slambda, 'KorteDefaultFilters$Sort$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Trim$slambda, 'KorteDefaultFilters$Trim$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Lower$slambda, 'KorteDefaultFilters$Lower$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Upper$slambda, 'KorteDefaultFilters$Upper$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Downcase$slambda, 'KorteDefaultFilters$Downcase$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Upcase$slambda, 'KorteDefaultFilters$Upcase$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Merge$slambda, 'KorteDefaultFilters$Merge$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$JsonEncode$slambda, 'KorteDefaultFilters$JsonEncode$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Format$slambda, 'KorteDefaultFilters$Format$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Chunked$slambda, 'KorteDefaultFilters$Chunked$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$WhereExp$slambda, 'KorteDefaultFilters$WhereExp$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Where$slambda, 'KorteDefaultFilters$Where$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Map$slambda, 'KorteDefaultFilters$Map$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Size$slambda, 'KorteDefaultFilters$Size$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Uniq$slambda, 'KorteDefaultFilters$Uniq$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Abs$slambda, 'KorteDefaultFilters$Abs$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$AtMost$slambda, 'KorteDefaultFilters$AtMost$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$AtLeast$slambda, 'KorteDefaultFilters$AtLeast$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Ceil$slambda, 'KorteDefaultFilters$Ceil$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Floor$slambda, 'KorteDefaultFilters$Floor$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Round$slambda, 'KorteDefaultFilters$Round$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Times$slambda, 'KorteDefaultFilters$Times$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Modulo$slambda, 'KorteDefaultFilters$Modulo$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$DividedBy$slambda, 'KorteDefaultFilters$DividedBy$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Minus$slambda, 'KorteDefaultFilters$Minus$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Plus$slambda, 'KorteDefaultFilters$Plus$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters$Default$slambda, 'KorteDefaultFilters$Default$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultFilters, 'KorteDefaultFilters', objectMeta);
  setMetadataFor($evalCOROUTINE$22, '$evalCOROUTINE$22', classMeta, CoroutineImpl);
  setMetadataFor(KorteDefaultTags$Switch$1$1, VOID, classMeta, VOID, [KorteBlock], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(KorteDefaultTags$BlockTag$slambda, 'KorteDefaultTags$BlockTag$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultTags$Capture$slambda, 'KorteDefaultTags$Capture$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultTags$Debug$slambda, 'KorteDefaultTags$Debug$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultTags$Empty$slambda, 'KorteDefaultTags$Empty$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultTags$Extends$slambda, 'KorteDefaultTags$Extends$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultTags$For$slambda, 'KorteDefaultTags$For$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultTags$BuildIf$Branch, 'Branch', classMeta);
  setMetadataFor(KorteDefaultTags$If$slambda, 'KorteDefaultTags$If$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultTags$Unless$slambda, 'KorteDefaultTags$Unless$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultTags$Import$slambda, 'KorteDefaultTags$Import$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultTags$Include$slambda, 'KorteDefaultTags$Include$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultTags$Macro$slambda, 'KorteDefaultTags$Macro$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultTags$Set$slambda, 'KorteDefaultTags$Set$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultTags$Assign$slambda, 'KorteDefaultTags$Assign$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultTags$Switch$slambda, 'KorteDefaultTags$Switch$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDefaultTags, 'KorteDefaultTags', objectMeta);
  setMetadataFor(DefaultBlocks$BlockCapture$eval$slambda, 'DefaultBlocks$BlockCapture$eval$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($evalCOROUTINE$23, '$evalCOROUTINE$23', classMeta, CoroutineImpl);
  setMetadataFor($evalCOROUTINE$24, '$evalCOROUTINE$24', classMeta, CoroutineImpl);
  setMetadataFor($evalCOROUTINE$25, '$evalCOROUTINE$25', classMeta, CoroutineImpl);
  setMetadataFor($evalCOROUTINE$26, '$evalCOROUTINE$26', classMeta, CoroutineImpl);
  setMetadataFor($evalCOROUTINE$27, '$evalCOROUTINE$27', classMeta, CoroutineImpl);
  setMetadataFor($evalCOROUTINE$28, '$evalCOROUTINE$28', classMeta, CoroutineImpl);
  setMetadataFor($evalCOROUTINE$29, '$evalCOROUTINE$29', classMeta, CoroutineImpl);
  setMetadataFor($evalCOROUTINE$30, '$evalCOROUTINE$30', classMeta, CoroutineImpl);
  setMetadataFor($evalCOROUTINE$31, '$evalCOROUTINE$31', classMeta, CoroutineImpl);
  setMetadataFor($evalCOROUTINE$32, '$evalCOROUTINE$32', classMeta, CoroutineImpl);
  setMetadataFor(BlockBlock, 'BlockBlock', classMeta, VOID, [KorteBlock], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(BlockCapture, 'BlockCapture', classMeta, VOID, [KorteBlock], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(BlockDebug, 'BlockDebug', classMeta, VOID, [KorteBlock], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(BlockExpr, 'BlockExpr', classMeta, VOID, [KorteBlock], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(BlockExtends, 'BlockExtends', classMeta, VOID, [KorteBlock], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(BlockFor, 'BlockFor', classMeta, VOID, [KorteBlock], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(BlockGroup, 'BlockGroup', classMeta, VOID, [KorteBlock], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(BlockIf, 'BlockIf', classMeta, VOID, [KorteBlock], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(BlockImport, 'BlockImport', classMeta, VOID, [KorteBlock], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(BlockInclude, 'BlockInclude', classMeta, VOID, [KorteBlock], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(BlockMacro, 'BlockMacro', classMeta, VOID, [KorteBlock], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(BlockSet, 'BlockSet', classMeta, VOID, [KorteBlock], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(BlockText, 'BlockText', classMeta, VOID, [KorteBlock], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(DefaultBlocks, 'DefaultBlocks', objectMeta);
  setMetadataFor($evalCOROUTINE$33, '$evalCOROUTINE$33', classMeta, CoroutineImpl);
  setMetadataFor($evalCOROUTINE$34, '$evalCOROUTINE$34', classMeta, CoroutineImpl);
  setMetadataFor($evalCOROUTINE$35, '$evalCOROUTINE$35', classMeta, CoroutineImpl);
  setMetadataFor($evalCOROUTINE$36, '$evalCOROUTINE$36', classMeta, CoroutineImpl);
  setMetadataFor($evalCOROUTINE$37, '$evalCOROUTINE$37', classMeta, CoroutineImpl);
  setMetadataFor($evalCOROUTINE$38, '$evalCOROUTINE$38', classMeta, CoroutineImpl);
  setMetadataFor($evalCOROUTINE$39, '$evalCOROUTINE$39', classMeta, CoroutineImpl);
  setMetadataFor($evalCOROUTINE$40, '$evalCOROUTINE$40', classMeta, CoroutineImpl);
  setMetadataFor(Token, 'Token', interfaceMeta, VOID, [KorteTokenContext]);
  setMetadataFor(TId, 'TId', classMeta, VOID, [Token, KorteTokenContext]);
  setMetadataFor(TNumber, 'TNumber', classMeta, VOID, [Token, KorteTokenContext]);
  setMetadataFor(TString, 'TString', classMeta, VOID, [Token, KorteTokenContext]);
  setMetadataFor(TOperator, 'TOperator', classMeta, VOID, [Token, KorteTokenContext]);
  setMetadataFor(TEnd, 'TEnd', classMeta, VOID, [Token, KorteTokenContext], TEnd);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(KorteExprNode, 'KorteExprNode', interfaceMeta, VOID, [KorteDynamicContext], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(VAR, 'VAR', classMeta, VOID, [KorteExprNode], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(LIT, 'LIT', classMeta, VOID, [KorteExprNode], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(ARRAY_LIT, 'ARRAY_LIT', classMeta, VOID, [KorteExprNode], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(OBJECT_LIT, 'OBJECT_LIT', classMeta, VOID, [KorteExprNode], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(FILTER, 'FILTER', classMeta, VOID, [KorteExprNode], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(ACCESS, 'ACCESS', classMeta, VOID, [KorteExprNode], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(CALL, 'CALL', classMeta, VOID, [KorteExprNode], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(BINOP, 'BINOP', classMeta, VOID, [KorteExprNode], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(TERNARY, 'TERNARY', classMeta, VOID, [KorteExprNode], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(UNOP, 'UNOP', classMeta, VOID, [KorteExprNode], VOID, VOID, VOID, [1, 2, 3]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor($invokeAsyncCOROUTINE$41, '$invokeAsyncCOROUTINE$41', classMeta, CoroutineImpl);
  setMetadataFor($accessAnyCOROUTINE$42, '$accessAnyCOROUTINE$42', classMeta, CoroutineImpl);
  setMetadataFor($accessAnyObjectCOROUTINE$43, '$accessAnyObjectCOROUTINE$43', classMeta, CoroutineImpl);
  function get_dynamicShape(_this__u8e3s4) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.dynamic.KorteObjectMapper2.<get-dynamicShape>.<anonymous>' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.dynamic.KorteObjectMapper2.<get-dynamicShape>.<anonymous>.<anonymous>' call
    var $this$run = KorteDynamicTypeScope_getInstance();
    var tmp = _this__u8e3s4.get___dynamicShape_ssrp3f_k$($this$run);
    return tmp instanceof KorteDynamicShape ? tmp : THROW_CCE();
  }
  function hasProperty(instance, key) {
    if (isInterface(instance, KorteDynamicType))
      return this.get_dynamicShape_xh1qkn_k$(instance).hasProp_e0nl19_k$(key);
    return false;
  }
  function hasMethod(instance, key) {
    if (isInterface(instance, KorteDynamicType))
      return this.get_dynamicShape_xh1qkn_k$(instance).hasMethod_y4kbcv_k$(key);
    return false;
  }
  function invokeAsync(type, instance, key, args, $completion) {
    var tmp = new $invokeAsyncCOROUTINE$41(this, type, instance, key, args, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function set(instance, key, value, $completion) {
    if (isInterface(instance, KorteDynamicType)) {
      this.get_dynamicShape_xh1qkn_k$(instance).setProp_ydkkso_k$(instance, key, value);
      return Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function get(instance, key, $completion) {
    if (isInterface(instance, KorteDynamicType))
      return this.get_dynamicShape_xh1qkn_k$(instance).getProp_m33n2j_k$(instance, key);
    return null;
  }
  function accessAny(instance, key, $completion) {
    var tmp = new $accessAnyCOROUTINE$42(this, instance, key, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function accessAnyObject(instance, key, $completion) {
    var tmp = new $accessAnyObjectCOROUTINE$43(this, instance, key, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  setMetadataFor(KorteObjectMapper2, 'KorteObjectMapper2', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [4, 3, 2]);
  setMetadataFor(KorteDynamicType, 'KorteDynamicType', interfaceMeta);
  setMetadataFor($callMethodCOROUTINE$44, '$callMethodCOROUTINE$44', classMeta, CoroutineImpl);
  function register(items) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.dynamic.KorteDynamicShapeRegister.register.<anonymous>' call
    var inductionVariable = 0;
    var last = items.length;
    while (inductionVariable < last) {
      var item = items[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.register_5ayukv_k$(item);
    }
    return this;
  }
  function register_0(items, dummy) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.dynamic.KorteDynamicShapeRegister.register.<anonymous>' call
    var inductionVariable = 0;
    var last = items.length;
    while (inductionVariable < last) {
      var item = items[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.register_4h3a0e_k$(item);
    }
    return this;
  }
  function register$default(items, dummy, $super) {
    dummy = dummy === VOID ? Unit_getInstance() : dummy;
    return $super === VOID ? this.register_ghhcv8_k$(items, dummy) : register_0(items, dummy);
  }
  setMetadataFor(KorteDynamicShapeRegister, 'KorteDynamicShapeRegister', interfaceMeta);
  setMetadataFor(KorteDynamicShape, 'KorteDynamicShape', classMeta, VOID, [KorteDynamicShapeRegister], KorteDynamicShape, VOID, VOID, [3]);
  setMetadataFor($setAnyCOROUTINE$45, '$setAnyCOROUTINE$45', classMeta, CoroutineImpl);
  setMetadataFor($callAnyCOROUTINE$46, '$callAnyCOROUTINE$46', classMeta, CoroutineImpl);
  setMetadataFor(KorteDynamic2, 'KorteDynamic2', objectMeta, VOID, VOID, VOID, VOID, VOID, [3, 4]);
  setMetadataFor(KorteDynamicContext$Companion$Instance$1, VOID, classMeta, VOID, [KorteDynamicContext], VOID, VOID, VOID, [2, 3]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(KorteDynamicTypeScope, 'KorteDynamicTypeScope', objectMeta);
  setMetadataFor(KorteDynamic2Gettable, 'KorteDynamic2Gettable', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(KorteDynamic2Settable, 'KorteDynamic2Settable', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(KorteDynamic2Callable, 'KorteDynamic2Callable', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(korteExtraProperty, 'korteExtraProperty', classMeta);
  setMetadataFor(Pool, 'Pool', classMeta);
  function get_ustr() {
    return this.get_str_18ivy0_k$();
  }
  setMetadataFor(Token_0, 'Token', interfaceMeta);
  setMetadataFor(EOF, 'EOF', objectMeta, VOID, [Token_0]);
  setMetadataFor(LINE, 'LINE', classMeta, VOID, [Token_0]);
  setMetadataFor(ID, 'ID', classMeta, VOID, [Token_0]);
  setMetadataFor(STR, 'STR', classMeta, VOID, [Token_0]);
  setMetadataFor(SYMBOL, 'SYMBOL', classMeta, VOID, [Token_0]);
  setMetadataFor(Yaml, 'Yaml', objectMeta);
  setMetadataFor(KorteAsyncCache$invoke$slambda, 'KorteAsyncCache$invoke$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [0]);
  setMetadataFor(KorteAsyncCache, 'KorteAsyncCache', classMeta, VOID, VOID, KorteAsyncCache, VOID, VOID, [2]);
  setMetadataFor(KorteStrReader, 'KorteStrReader', classMeta);
  setMetadataFor(OutOfBoundsException, 'OutOfBoundsException', classMeta, RuntimeException);
  setMetadataFor(ListReader, 'ListReader', classMeta);
  setMetadataFor(StrReader, 'StrReader', classMeta);
  setMetadataFor(OutOfBoundsException_0, 'OutOfBoundsException', classMeta, RuntimeException);
  setMetadataFor(KorteListReader, 'KorteListReader', classMeta);
  setMetadataFor(KorteDeferred$Companion$asyncImmediately$1$1, VOID, classMeta, VOID, [Continuation]);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(KorteDeferred$toContinuation$1, VOID, classMeta, VOID, [Continuation]);
  setMetadataFor($awaitCOROUTINE$47, '$awaitCOROUTINE$47', classMeta, CoroutineImpl);
  setMetadataFor(KorteDeferred, 'KorteDeferred', classMeta, VOID, VOID, KorteDeferred, VOID, VOID, [0]);
  setMetadataFor($invokeAsyncCOROUTINE$48, '$invokeAsyncCOROUTINE$48', classMeta, CoroutineImpl);
  setMetadataFor(JsObjectMapper2, 'JsObjectMapper2', classMeta, VOID, [KorteObjectMapper2], JsObjectMapper2, VOID, VOID, [4, 3, 2]);
  //endregion
  function _get_allFunctions__cl1qpb($this) {
    return $this.allFunctions_1;
  }
  function _get_allTags__6b2zgp($this) {
    return $this.allTags_1;
  }
  function _get_allFilters__us71rl($this) {
    return $this.allFilters_1;
  }
  function KorteTemplateConfig$_init_$slambda_o32qcx(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteTemplateConfig$_init_$slambda_o32qcx).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplateConfig$_init_$slambda_o32qcx).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteTemplateConfig$_init_$slambda_o32qcx).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.$this$$receiver_1.get_tok_18ivbt_k$().exception_kh9cqz_k$("Unknown filter '" + this.$this$$receiver_1.get_name_woqyms_k$() + "'");
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteTemplateConfig$_init_$slambda_o32qcx).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteTemplateConfig$_init_$slambda_o32qcx(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteTemplateConfig$_init_$slambda_o32qcx).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteTemplateConfig$_init_$slambda_o32qcx_0(resultContinuation) {
    var i = new KorteTemplateConfig$_init_$slambda_o32qcx(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteTemplateConfig$_init_$lambda_1vsdf4(content, _anonymous_parameter_1__qggqgd) {
    return content;
  }
  function KorteTemplateConfig$variableProcessor$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteTemplateConfig$variableProcessor$slambda).invoke_aqgljd_k$ = function ($this$null, name, $completion) {
    var tmp = this.create_fftceh_k$($this$null, name, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplateConfig$variableProcessor$slambda).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = p1 instanceof EvalContext ? p1 : THROW_CCE();
    return this.invoke_aqgljd_k$(tmp, (!(p2 == null) ? typeof p2 === 'string' : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(KorteTemplateConfig$variableProcessor$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$this$null_1.scope_1.get_4obwy_k$(this.name_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(KorteTemplateConfig$variableProcessor$slambda).create_fftceh_k$ = function ($this$null, name, completion) {
    var i = new KorteTemplateConfig$variableProcessor$slambda(completion);
    i.$this$null_1 = $this$null;
    i.name_1 = name;
    return i;
  };
  function KorteTemplateConfig$variableProcessor$slambda_0(resultContinuation) {
    var i = new KorteTemplateConfig$variableProcessor$slambda(resultContinuation);
    var l = function ($this$null, name, $completion) {
      return i.invoke_aqgljd_k$($this$null, name, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function KorteTemplateConfig$replaceVariablePocessor$slambda($func, $previous, resultContinuation) {
    this.$func_1 = $func;
    this.$previous_1 = $previous;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteTemplateConfig$replaceVariablePocessor$slambda).invoke_aqgljd_k$ = function ($this$null, eval_0, $completion) {
    var tmp = this.create_fftceh_k$($this$null, eval_0, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplateConfig$replaceVariablePocessor$slambda).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = p1 instanceof EvalContext ? p1 : THROW_CCE();
    return this.invoke_aqgljd_k$(tmp, (!(p2 == null) ? typeof p2 === 'string' : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(KorteTemplateConfig$replaceVariablePocessor$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$func_1(this.$this$null_1, this.eval_1, this.$previous_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(KorteTemplateConfig$replaceVariablePocessor$slambda).create_fftceh_k$ = function ($this$null, eval_0, completion) {
    var i = new KorteTemplateConfig$replaceVariablePocessor$slambda(this.$func_1, this.$previous_1, completion);
    i.$this$null_1 = $this$null;
    i.eval_1 = eval_0;
    return i;
  };
  function KorteTemplateConfig$replaceVariablePocessor$slambda_0($func, $previous, resultContinuation) {
    var i = new KorteTemplateConfig$replaceVariablePocessor$slambda($func, $previous, resultContinuation);
    var l = function ($this$null, eval_0, $completion) {
      return i.invoke_aqgljd_k$($this$null, eval_0, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function KorteTemplateConfig$writeBlockExpressionResult$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteTemplateConfig$writeBlockExpressionResult$slambda).invoke_76dfs8_k$ = function ($this$null, value, $completion) {
    var tmp = this.create_ltk7g4_k$($this$null, value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplateConfig$writeBlockExpressionResult$slambda).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = p1 instanceof EvalContext ? p1 : THROW_CCE();
    return this.invoke_76dfs8_k$(tmp, (p2 == null ? true : !(p2 == null)) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(KorteTemplateConfig$writeBlockExpressionResult$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = this.$this$null_1.write_1;
            var tmp_1;
            if (this.value_1 instanceof KorteRawString) {
              tmp_1 = this.this$0__1.contentTypeProcessor_1(this.value_1.str_1, this.value_1.contentType_1);
            } else {
              tmp_1 = this.this$0__1.autoEscapeMode_1.transform_1(this.this$0__1.contentTypeProcessor_1(KorteDynamic2_getInstance().toString_drfd65_k$(this.value_1), null));
            }

            suspendResult = tmp_0(tmp_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(KorteTemplateConfig$writeBlockExpressionResult$slambda).create_ltk7g4_k$ = function ($this$null, value, completion) {
    var i = new KorteTemplateConfig$writeBlockExpressionResult$slambda(this.this$0__1, completion);
    i.$this$null_1 = $this$null;
    i.value_1 = value;
    return i;
  };
  function KorteTemplateConfig$writeBlockExpressionResult$slambda_0(this$0, resultContinuation) {
    var i = new KorteTemplateConfig$writeBlockExpressionResult$slambda(this$0, resultContinuation);
    var l = function ($this$null, value, $completion) {
      return i.invoke_76dfs8_k$($this$null, value, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function KorteTemplateConfig$replaceWriteBlockExpressionResult$slambda($func, $previous, resultContinuation) {
    this.$func_1 = $func;
    this.$previous_1 = $previous;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteTemplateConfig$replaceWriteBlockExpressionResult$slambda).invoke_76dfs8_k$ = function ($this$null, eval_0, $completion) {
    var tmp = this.create_ltk7g4_k$($this$null, eval_0, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplateConfig$replaceWriteBlockExpressionResult$slambda).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = p1 instanceof EvalContext ? p1 : THROW_CCE();
    return this.invoke_76dfs8_k$(tmp, (p2 == null ? true : !(p2 == null)) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(KorteTemplateConfig$replaceWriteBlockExpressionResult$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$func_1(this.$this$null_1, this.eval_1, this.$previous_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(KorteTemplateConfig$replaceWriteBlockExpressionResult$slambda).create_ltk7g4_k$ = function ($this$null, eval_0, completion) {
    var i = new KorteTemplateConfig$replaceWriteBlockExpressionResult$slambda(this.$func_1, this.$previous_1, completion);
    i.$this$null_1 = $this$null;
    i.eval_1 = eval_0;
    return i;
  };
  function KorteTemplateConfig$replaceWriteBlockExpressionResult$slambda_0($func, $previous, resultContinuation) {
    var i = new KorteTemplateConfig$replaceWriteBlockExpressionResult$slambda($func, $previous, resultContinuation);
    var l = function ($this$null, eval_0, $completion) {
      return i.invoke_76dfs8_k$($this$null, eval_0, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function KorteTemplateConfig(extraTags, extraFilters, extraFunctions, unknownFilter, autoEscapeMode, contentTypeProcessor) {
    var tmp;
    if (extraTags === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = extraTags;
    }
    extraTags = tmp;
    var tmp_0;
    if (extraFilters === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = extraFilters;
    }
    extraFilters = tmp_0;
    var tmp_1;
    if (extraFunctions === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_1 = emptyList();
    } else {
      tmp_1 = extraFunctions;
    }
    extraFunctions = tmp_1;
    var tmp_2;
    if (unknownFilter === VOID) {
      tmp_2 = new KorteFilter('unknown', KorteTemplateConfig$_init_$slambda_o32qcx_0(null));
    } else {
      tmp_2 = unknownFilter;
    }
    unknownFilter = tmp_2;
    autoEscapeMode = autoEscapeMode === VOID ? Companion_getInstance_0().HTML_1 : autoEscapeMode;
    var tmp_3;
    if (contentTypeProcessor === VOID) {
      tmp_3 = KorteTemplateConfig$_init_$lambda_1vsdf4;
    } else {
      tmp_3 = contentTypeProcessor;
    }
    contentTypeProcessor = tmp_3;
    this.unknownFilter_1 = unknownFilter;
    this.autoEscapeMode_1 = autoEscapeMode;
    this.contentTypeProcessor_1 = contentTypeProcessor;
    this.extra_1 = LinkedHashMap_init_$Create$();
    this.integratedFunctions_1 = KorteDefaultFunctions_getInstance().get_ALL_18jy08_k$();
    this.integratedFilters_1 = KorteDefaultFilters_getInstance().get_ALL_18jy08_k$();
    this.integratedTags_1 = KorteDefaultTags_getInstance().get_ALL_18jy08_k$();
    this.allFunctions_1 = plus(this.integratedFunctions_1, extraFunctions);
    this.allTags_1 = plus(this.integratedTags_1, extraTags);
    this.allFilters_1 = plus(this.integratedFilters_1, extraFilters);
    var tmp_4 = this;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.hashMapOf' call
    var this_0 = HashMap_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.KorteTemplateConfig.tags.<anonymous>' call
    var tmp0_iterator = this.allTags_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var tag = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.set' call
      var key = tag.name_1;
      this_0.put_4fpzoq_k$(key, tag);
      var tmp1_iterator = tag.aliases_1.iterator_jk1svi_k$();
      while (tmp1_iterator.hasNext_bitz1p_k$()) {
        var alias = tmp1_iterator.next_20eer_k$();
        // Inline function 'kotlin.collections.set' call
        this_0.put_4fpzoq_k$(alias, tag);
      }
    }
    tmp_4.tags_1 = this_0;
    var tmp_5 = this;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.hashMapOf' call
    var this_1 = HashMap_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.KorteTemplateConfig.filters.<anonymous>' call
    var tmp0_iterator_0 = this.allFilters_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var filter = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'kotlin.collections.set' call
      var key_0 = filter.name_1;
      this_1.put_4fpzoq_k$(key_0, filter);
    }
    tmp_5.filters_1 = this_1;
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.hashMapOf' call
    var this_2 = HashMap_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.KorteTemplateConfig.functions.<anonymous>' call
    var tmp0_iterator_1 = this.allFunctions_1.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var func = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'kotlin.collections.set' call
      var key_1 = func.name_1;
      this_2.put_4fpzoq_k$(key_1, func);
    }
    tmp_6.functions_1 = this_2;
    var tmp_7 = this;
    tmp_7.variableProcessor_1 = KorteTemplateConfig$variableProcessor$slambda_0(null);
    var tmp_8 = this;
    tmp_8.writeBlockExpressionResult_1 = KorteTemplateConfig$writeBlockExpressionResult$slambda_0(this, null);
  }
  protoOf(KorteTemplateConfig).set_unknownFilter_3gbjdw_k$ = function (_set____db54di) {
    this.unknownFilter_1 = _set____db54di;
  };
  protoOf(KorteTemplateConfig).get_unknownFilter_kpyud5_k$ = function () {
    return this.unknownFilter_1;
  };
  protoOf(KorteTemplateConfig).get_autoEscapeMode_wvt6w4_k$ = function () {
    return this.autoEscapeMode_1;
  };
  protoOf(KorteTemplateConfig).get_contentTypeProcessor_ph6czc_k$ = function () {
    return this.contentTypeProcessor_1;
  };
  protoOf(KorteTemplateConfig).get_extra_ir3qw7_k$ = function () {
    return this.extra_1;
  };
  protoOf(KorteTemplateConfig).get_integratedFunctions_amz5lr_k$ = function () {
    return this.integratedFunctions_1;
  };
  protoOf(KorteTemplateConfig).get_integratedFilters_dljji7_k$ = function () {
    return this.integratedFilters_1;
  };
  protoOf(KorteTemplateConfig).get_integratedTags_bmj8k5_k$ = function () {
    return this.integratedTags_1;
  };
  protoOf(KorteTemplateConfig).get_tags_wousf6_k$ = function () {
    return this.tags_1;
  };
  protoOf(KorteTemplateConfig).get_filters_cv7yzy_k$ = function () {
    return this.filters_1;
  };
  protoOf(KorteTemplateConfig).get_functions_66tuk2_k$ = function () {
    return this.functions_1;
  };
  protoOf(KorteTemplateConfig).register_rq0bj8_k$ = function (its) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.KorteTemplateConfig.register.<anonymous>' call
    var inductionVariable = 0;
    var last = its.length;
    while (inductionVariable < last) {
      var it = its[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.tags_1;
      var key = it.name_1;
      this_0.put_4fpzoq_k$(key, it);
    }
    return this;
  };
  protoOf(KorteTemplateConfig).register_1ex7ds_k$ = function (its) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.KorteTemplateConfig.register.<anonymous>' call
    var inductionVariable = 0;
    var last = its.length;
    while (inductionVariable < last) {
      var it = its[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.filters_1;
      var key = it.name_1;
      this_0.put_4fpzoq_k$(key, it);
    }
    return this;
  };
  protoOf(KorteTemplateConfig).register_w977cw_k$ = function (its) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.KorteTemplateConfig.register.<anonymous>' call
    var inductionVariable = 0;
    var last = its.length;
    while (inductionVariable < last) {
      var it = its[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.functions_1;
      var key = it.name_1;
      this_0.put_4fpzoq_k$(key, it);
    }
    return this;
  };
  protoOf(KorteTemplateConfig).set_variableProcessor_lvvyct_k$ = function (_set____db54di) {
    this.variableProcessor_1 = _set____db54di;
  };
  protoOf(KorteTemplateConfig).get_variableProcessor_qu4ldf_k$ = function () {
    return this.variableProcessor_1;
  };
  protoOf(KorteTemplateConfig).replaceVariablePocessor_proiwz_k$ = function (func) {
    var previous = this.variableProcessor_1;
    var tmp = this;
    tmp.variableProcessor_1 = KorteTemplateConfig$replaceVariablePocessor$slambda_0(func, previous, null);
  };
  protoOf(KorteTemplateConfig).set_writeBlockExpressionResult_hvb160_k$ = function (_set____db54di) {
    this.writeBlockExpressionResult_1 = _set____db54di;
  };
  protoOf(KorteTemplateConfig).get_writeBlockExpressionResult_qls6zw_k$ = function () {
    return this.writeBlockExpressionResult_1;
  };
  protoOf(KorteTemplateConfig).replaceWriteBlockExpressionResult_voh890_k$ = function (func) {
    var previous = this.writeBlockExpressionResult_1;
    var tmp = this;
    tmp.writeBlockExpressionResult_1 = KorteTemplateConfig$replaceWriteBlockExpressionResult$slambda_0(func, previous, null);
  };
  function Part(tag, body) {
    this.tag_1 = tag;
    this.body_1 = body;
  }
  protoOf(Part).get_tag_18ivnz_k$ = function () {
    return this.tag_1;
  };
  protoOf(Part).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(Part).component1_7eebsc_k$ = function () {
    return this.tag_1;
  };
  protoOf(Part).component2_7eebsb_k$ = function () {
    return this.body_1;
  };
  protoOf(Part).copy_77i8c3_k$ = function (tag, body) {
    return new Part(tag, body);
  };
  protoOf(Part).copy$default_ymfv71_k$ = function (tag, body, $super) {
    tag = tag === VOID ? this.tag_1 : tag;
    body = body === VOID ? this.body_1 : body;
    return $super === VOID ? this.copy_77i8c3_k$(tag, body) : $super.copy_77i8c3_k$.call(this, tag, body);
  };
  protoOf(Part).toString = function () {
    return 'Part(tag=' + this.tag_1 + ', body=' + this.body_1 + ')';
  };
  protoOf(Part).hashCode = function () {
    var result = this.tag_1.hashCode();
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    return result;
  };
  protoOf(Part).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Part))
      return false;
    var tmp0_other_with_cast = other instanceof Part ? other : THROW_CCE();
    if (!this.tag_1.equals(tmp0_other_with_cast.tag_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    return true;
  };
  function BuildContext(context, chunks) {
    this.context_1 = context;
    this.chunks_1 = chunks;
  }
  protoOf(BuildContext).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(BuildContext).get_chunks_bwgbzj_k$ = function () {
    return this.chunks_1;
  };
  protoOf(BuildContext).component1_7eebsc_k$ = function () {
    return this.context_1;
  };
  protoOf(BuildContext).component2_7eebsb_k$ = function () {
    return this.chunks_1;
  };
  protoOf(BuildContext).copy_2cjtcc_k$ = function (context, chunks) {
    return new BuildContext(context, chunks);
  };
  protoOf(BuildContext).copy$default_lb8bpa_k$ = function (context, chunks, $super) {
    context = context === VOID ? this.context_1 : context;
    chunks = chunks === VOID ? this.chunks_1 : chunks;
    return $super === VOID ? this.copy_2cjtcc_k$(context, chunks) : $super.copy_2cjtcc_k$.call(this, context, chunks);
  };
  protoOf(BuildContext).toString = function () {
    return 'BuildContext(context=' + this.context_1 + ', chunks=' + this.chunks_1 + ')';
  };
  protoOf(BuildContext).hashCode = function () {
    var result = hashCode(this.context_1);
    result = imul(result, 31) + hashCode(this.chunks_1) | 0;
    return result;
  };
  protoOf(BuildContext).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BuildContext))
      return false;
    var tmp0_other_with_cast = other instanceof BuildContext ? other : THROW_CCE();
    if (!equals(this.context_1, tmp0_other_with_cast.context_1))
      return false;
    if (!equals(this.chunks_1, tmp0_other_with_cast.chunks_1))
      return false;
    return true;
  };
  function KorteTag(name, nextList, end, aliases, buildNode) {
    var tmp;
    if (aliases === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = aliases;
    }
    aliases = tmp;
    this.name_1 = name;
    this.nextList_1 = nextList;
    this.end_1 = end;
    this.aliases_1 = aliases;
    this.buildNode_1 = buildNode;
  }
  protoOf(KorteTag).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(KorteTag).get_nextList_890zye_k$ = function () {
    return this.nextList_1;
  };
  protoOf(KorteTag).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(KorteTag).get_aliases_duxpez_k$ = function () {
    return this.aliases_1;
  };
  protoOf(KorteTag).get_buildNode_enow7t_k$ = function () {
    return this.buildNode_1;
  };
  protoOf(KorteTag).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(KorteTag).component2_7eebsb_k$ = function () {
    return this.nextList_1;
  };
  protoOf(KorteTag).component3_7eebsa_k$ = function () {
    return this.end_1;
  };
  protoOf(KorteTag).component4_7eebs9_k$ = function () {
    return this.aliases_1;
  };
  protoOf(KorteTag).component5_7eebs8_k$ = function () {
    return this.buildNode_1;
  };
  protoOf(KorteTag).copy_wsnxb5_k$ = function (name, nextList, end, aliases, buildNode) {
    return new KorteTag(name, nextList, end, aliases, buildNode);
  };
  protoOf(KorteTag).copy$default_n74p0h_k$ = function (name, nextList, end, aliases, buildNode, $super) {
    name = name === VOID ? this.name_1 : name;
    nextList = nextList === VOID ? this.nextList_1 : nextList;
    end = end === VOID ? this.end_1 : end;
    aliases = aliases === VOID ? this.aliases_1 : aliases;
    buildNode = buildNode === VOID ? this.buildNode_1 : buildNode;
    return $super === VOID ? this.copy_wsnxb5_k$(name, nextList, end, aliases, buildNode) : $super.copy_wsnxb5_k$.call(this, name, nextList, end, aliases, buildNode);
  };
  protoOf(KorteTag).toString = function () {
    return 'KorteTag(name=' + this.name_1 + ', nextList=' + this.nextList_1 + ', end=' + this.end_1 + ', aliases=' + this.aliases_1 + ', buildNode=' + this.buildNode_1 + ')';
  };
  protoOf(KorteTag).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.nextList_1) | 0;
    result = imul(result, 31) + (this.end_1 == null ? 0 : hashCode(this.end_1)) | 0;
    result = imul(result, 31) + hashCode(this.aliases_1) | 0;
    result = imul(result, 31) + hashCode(this.buildNode_1) | 0;
    return result;
  };
  protoOf(KorteTag).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KorteTag))
      return false;
    var tmp0_other_with_cast = other instanceof KorteTag ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.nextList_1, tmp0_other_with_cast.nextList_1))
      return false;
    if (!equals(this.end_1, tmp0_other_with_cast.end_1))
      return false;
    if (!equals(this.aliases_1, tmp0_other_with_cast.aliases_1))
      return false;
    if (!equals(this.buildNode_1, tmp0_other_with_cast.buildNode_1))
      return false;
    return true;
  };
  function Ctx() {
    this.subject_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.listOf' call
    tmp.args_1 = emptyList();
  }
  protoOf(Ctx).set_context_hkk6jc_k$ = function (_set____db54di) {
    this.context_1 = _set____db54di;
  };
  protoOf(Ctx).get_context_h02k06_k$ = function () {
    var tmp = this.context_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('context');
    }
  };
  protoOf(Ctx).set_tok_2m11ng_k$ = function (_set____db54di) {
    this.tok_1 = _set____db54di;
  };
  protoOf(Ctx).get_tok_18ivbt_k$ = function () {
    var tmp = this.tok_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('tok');
    }
  };
  protoOf(Ctx).set_name_aqnlwe_k$ = function (_set____db54di) {
    this.name_1 = _set____db54di;
  };
  protoOf(Ctx).get_name_woqyms_k$ = function () {
    var tmp = this.name_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('name');
    }
  };
  protoOf(Ctx).get_mapper_giyu6i_k$ = function () {
    return this.get_context_h02k06_k$().mapper_1;
  };
  protoOf(Ctx).set_subject_2vr8jk_k$ = function (_set____db54di) {
    this.subject_1 = _set____db54di;
  };
  protoOf(Ctx).get_subject_tmjbgd_k$ = function () {
    return this.subject_1;
  };
  protoOf(Ctx).set_args_f0zwy2_k$ = function (_set____db54di) {
    this.args_1 = _set____db54di;
  };
  protoOf(Ctx).get_args_woj09y_k$ = function () {
    return this.args_1;
  };
  function KorteFilter(name, eval_0) {
    this.name_1 = name;
    this.eval_1 = eval_0;
  }
  protoOf(KorteFilter).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(KorteFilter).get_eval_woln1h_k$ = function () {
    return this.eval_1;
  };
  protoOf(KorteFilter).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(KorteFilter).component2_7eebsb_k$ = function () {
    return this.eval_1;
  };
  protoOf(KorteFilter).copy_rehrqu_k$ = function (name, eval_0) {
    return new KorteFilter(name, eval_0);
  };
  protoOf(KorteFilter).copy$default_or42gb_k$ = function (name, eval_0, $super) {
    name = name === VOID ? this.name_1 : name;
    eval_0 = eval_0 === VOID ? this.eval_1 : eval_0;
    return $super === VOID ? this.copy_rehrqu_k$(name, eval_0) : $super.copy_rehrqu_k$.call(this, name, eval_0);
  };
  protoOf(KorteFilter).toString = function () {
    return 'KorteFilter(name=' + this.name_1 + ', eval=' + this.eval_1 + ')';
  };
  protoOf(KorteFilter).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.eval_1) | 0;
    return result;
  };
  protoOf(KorteFilter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KorteFilter))
      return false;
    var tmp0_other_with_cast = other instanceof KorteFilter ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.eval_1, tmp0_other_with_cast.eval_1))
      return false;
    return true;
  };
  function KorteFunction(name, eval_0) {
    this.name_1 = name;
    this.eval_1 = eval_0;
  }
  protoOf(KorteFunction).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(KorteFunction).get_eval_woln1h_k$ = function () {
    return this.eval_1;
  };
  protoOf(KorteFunction).eval_bab7dp_k$ = function (args, context, $completion) {
    return this.eval_1(context, args, $completion);
  };
  protoOf(KorteFunction).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(KorteFunction).component2_7eebsb_k$ = function () {
    return this.eval_1;
  };
  protoOf(KorteFunction).copy_6tjcwz_k$ = function (name, eval_0) {
    return new KorteFunction(name, eval_0);
  };
  protoOf(KorteFunction).copy$default_ql7uy2_k$ = function (name, eval_0, $super) {
    name = name === VOID ? this.name_1 : name;
    eval_0 = eval_0 === VOID ? this.eval_1 : eval_0;
    return $super === VOID ? this.copy_6tjcwz_k$(name, eval_0) : $super.copy_6tjcwz_k$.call(this, name, eval_0);
  };
  protoOf(KorteFunction).toString = function () {
    return 'KorteFunction(name=' + this.name_1 + ', eval=' + this.eval_1 + ')';
  };
  protoOf(KorteFunction).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.eval_1) | 0;
    return result;
  };
  protoOf(KorteFunction).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KorteFunction))
      return false;
    var tmp0_other_with_cast = other instanceof KorteFunction ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.eval_1, tmp0_other_with_cast.eval_1))
      return false;
    return true;
  };
  function KorteAutoEscapeMode$Companion$HTML$lambda(it) {
    return htmlspecialchars(it);
  }
  function KorteAutoEscapeMode$Companion$RAW$lambda(it) {
    return it;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.HTML_1 = new KorteAutoEscapeMode(KorteAutoEscapeMode$Companion$HTML$lambda);
    var tmp_0 = this;
    tmp_0.RAW_1 = new KorteAutoEscapeMode(KorteAutoEscapeMode$Companion$RAW$lambda);
  }
  protoOf(Companion).get_HTML_wo2epg_k$ = function () {
    return this.HTML_1;
  };
  protoOf(Companion).get_RAW_18jlnl_k$ = function () {
    return this.RAW_1;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function KorteAutoEscapeMode(transform) {
    Companion_getInstance_0();
    this.transform_1 = transform;
  }
  protoOf(KorteAutoEscapeMode).get_transform_px941v_k$ = function () {
    return this.transform_1;
  };
  function $getCOROUTINE$1(_this__u8e3s4, key, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.key_1 = key;
  }
  protoOf($getCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            suspendResult = KorteDynamic2_getInstance().accessAny_aov4i6_k$(this._this__u8e3s4__1.map_1, this.key_1, this._this__u8e3s4__1.mapper_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tmp1_elvis_lhs0__1 = suspendResult;
            if (this.tmp1_elvis_lhs0__1 == null) {
              this.tmp0_safe_receiver2__1 = this._this__u8e3s4__1.parent_1;
              if (this.tmp0_safe_receiver2__1 == null) {
                this.WHEN_RESULT3__1 = null;
                this.set_state_rjd8d0_k$(3);
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(2);
                suspendResult = this.tmp0_safe_receiver2__1.get_4obwy_k$(this.key_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.WHEN_RESULT1__1 = this.tmp1_elvis_lhs0__1;
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 2:
            this.WHEN_RESULT3__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.WHEN_RESULT1__1 = this.WHEN_RESULT3__1;
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            return this.WHEN_RESULT1__1;
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function KorteTemplate$Macro$invoke$slambda($out, resultContinuation) {
    this.$out_1 = $out;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteTemplate$Macro$invoke$slambda).invoke_hafcq3_k$ = function (it, $completion) {
    var tmp = this.create_99ct7z_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplate$Macro$invoke$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_hafcq3_k$((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteTemplate$Macro$invoke$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.$out_1._v = this.$out_1._v + this.it_1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteTemplate$Macro$invoke$slambda).create_99ct7z_k$ = function (it, completion) {
    var i = new KorteTemplate$Macro$invoke$slambda(this.$out_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(KorteTemplate$Macro$invoke$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_99ct7z_k$((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE(), completion);
  };
  function KorteTemplate$Macro$invoke$slambda_0($out, resultContinuation) {
    var i = new KorteTemplate$Macro$invoke$slambda($out, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_hafcq3_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $invokeCOROUTINE$2(_this__u8e3s4, ctx, args, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.ctx_1 = ctx;
    this.args_1 = args;
  }
  protoOf($invokeCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(15);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.this1__1 = this.ctx_1;
            var tmp_1 = this;
            tmp_1.content2__1 = LinkedHashMap_init_$Create$();
            this.old3__1 = this.this1__1.scope_1;
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(14);
            this.this1__1.scope_1 = new Scope(this.content2__1, this.this1__1.mapper_1, this.old3__1);
            this.tmp0_iterator6__1 = zip(this._this__u8e3s4__1.argNames_1, this.args_1).iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            if (!this.tmp0_iterator6__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

            this.tmp1_loop_parameter7__1 = this.tmp0_iterator6__1.next_20eer_k$();
            this.key8__1 = this.tmp1_loop_parameter7__1.component1_7eebsc_k$();
            this.value9__1 = this.tmp1_loop_parameter7__1.component2_7eebsb_k$();
            this.set_state_rjd8d0_k$(5);
            suspendResult = this.ctx_1.scope_1.set_6km9f_k$(this.key8__1, this.value9__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 6:
            var tmp_2 = this;
            tmp_2.this10__1 = this.ctx_1;
            var tmp_3 = this;
            tmp_3.this11__1 = this.this10__1;
            var tmp_4 = this;
            tmp_4.$this$run12__1 = this.this11__1;
            this.out13__1 = {_v: ''};
            this.old14__1 = this.$this$run12__1.write_1;
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            this.set_exceptionState_fex74n_k$(13);
            var tmp_5 = this.$this$run12__1;
            tmp_5.write_1 = KorteTemplate$Macro$invoke$slambda_0(this.out13__1, null);
            this.set_state_rjd8d0_k$(8);
            suspendResult = this._this__u8e3s4__1.code_1.eval_vdy2zv_k$(this.ctx_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.tmp$ret$015__1 = suspendResult;
            this.set_state_rjd8d0_k$(9);
            continue $sm;
          case 9:
            this.set_exceptionState_fex74n_k$(14);
            this.$this$run12__1.write_1 = this.old14__1;
            var ARGUMENT = this.out13__1._v;
            this.tmp$ret$25__1 = new KorteRawString(ARGUMENT);
            this.set_exceptionState_fex74n_k$(15);
            this.set_state_rjd8d0_k$(10);
            var tmp_6 = this;
            continue $sm;
          case 10:
            var tmp_7 = this.tmp$ret$25__1;
            this.set_exceptionState_fex74n_k$(15);
            this.this1__1.scope_1 = this.old3__1;
            this.tmp$ret$60__1 = tmp_7;
            this.set_state_rjd8d0_k$(12);
            continue $sm;
          case 11:
            this.set_exceptionState_fex74n_k$(15);
            this.this1__1.scope_1 = this.old3__1;
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(12);
            continue $sm;
          case 12:
            return this.tmp$ret$60__1;
          case 13:
            this.set_exceptionState_fex74n_k$(14);
            var t = this.get_exception_x0n6w6_k$();
            this.$this$run12__1.write_1 = this.old14__1;
            throw t;
          case 14:
            this.set_exceptionState_fex74n_k$(15);
            var t_0 = this.get_exception_x0n6w6_k$();
            this.this1__1.scope_1 = this.old3__1;
            throw t_0;
          case 15:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 15) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $evalCOROUTINE$3(_this__u8e3s4, ctx, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.ctx_1 = ctx;
  }
  protoOf($evalCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(16);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.this1__1 = this.ctx_1;
            var tmp_1 = this;
            tmp_1.template2__1 = this._this__u8e3s4__1.template_1;
            this.oldTemplate3__1 = this.this1__1.currentTemplate_1;
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(15);
            this.this1__1.currentTemplate_1 = this.template2__1;
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.oldBlock7__1 = this.ctx_1.currentBlock_1;
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            this.set_exceptionState_fex74n_k$(14);
            this.ctx_1.currentBlock_1 = this._this__u8e3s4__1;
            this.set_state_rjd8d0_k$(7);
            suspendResult = this._this__u8e3s4__1.block_1.eval_vdy2zv_k$(this.ctx_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.tmp$ret$09__1 = suspendResult;
            this.set_state_rjd8d0_k$(8);
            var tmp_2 = this;
            continue $sm;
          case 8:
            this.set_exceptionState_fex74n_k$(15);
            var tmp_3 = this;
            this.ctx_1.currentBlock_1 = this.oldBlock7__1;
            tmp_3.tmp$ret$46__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(10);
            continue $sm;
          case 9:
            this.set_exceptionState_fex74n_k$(15);
            this.ctx_1.currentBlock_1 = this.oldBlock7__1;
            if (false) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(10);
            continue $sm;
          case 10:
            this.tmp$ret$65__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(16);
            this.set_state_rjd8d0_k$(11);
            var tmp_4 = this;
            continue $sm;
          case 11:
            this.set_exceptionState_fex74n_k$(16);
            var tmp_5 = this;
            this.this1__1.currentTemplate_1 = this.oldTemplate3__1;
            tmp_5.tmp$ret$100__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(13);
            continue $sm;
          case 12:
            this.set_exceptionState_fex74n_k$(16);
            this.this1__1.currentTemplate_1 = this.oldTemplate3__1;
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(13);
            continue $sm;
          case 13:
            return Unit_getInstance();
          case 14:
            this.set_exceptionState_fex74n_k$(15);
            var t = this.get_exception_x0n6w6_k$();
            this.ctx_1.currentBlock_1 = this.oldBlock7__1;
            throw t;
          case 15:
            this.set_exceptionState_fex74n_k$(16);
            var t_0 = this.get_exception_x0n6w6_k$();
            this.this1__1.currentTemplate_1 = this.oldTemplate3__1;
            throw t_0;
          case 16:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 16) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $writeCOROUTINE$4(_this__u8e3s4, writer, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.writer_1 = writer;
  }
  protoOf($writeCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.context_1.exec2_q70v1r_k$(this._this__u8e3s4__1.args_1, this._this__u8e3s4__1.mapper_1, this._this__u8e3s4__1.parentScope_1, this.writer_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function WithArgs(context, args, mapper, parentScope) {
    parentScope = parentScope === VOID ? null : parentScope;
    this.context_1 = context;
    this.args_1 = args;
    this.mapper_1 = mapper;
    this.parentScope_1 = parentScope;
  }
  protoOf(WithArgs).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(WithArgs).get_args_woj09y_k$ = function () {
    return this.args_1;
  };
  protoOf(WithArgs).get_mapper_giyu6i_k$ = function () {
    return this.mapper_1;
  };
  protoOf(WithArgs).get_parentScope_uhqfz5_k$ = function () {
    return this.parentScope_1;
  };
  protoOf(WithArgs).write_1oqgsd_k$ = function (writer, $completion) {
    var tmp = new $writeCOROUTINE$4(this, writer, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function KorteTemplate$TemplateEvalContext$exec$slambda($str, resultContinuation) {
    this.$str_1 = $str;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteTemplate$TemplateEvalContext$exec$slambda).invoke_hafcq3_k$ = function (it, $completion) {
    var tmp = this.create_99ct7z_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplate$TemplateEvalContext$exec$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_hafcq3_k$((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteTemplate$TemplateEvalContext$exec$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.$str_1.append_22ad7x_k$(this.it_1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteTemplate$TemplateEvalContext$exec$slambda).create_99ct7z_k$ = function (it, completion) {
    var i = new KorteTemplate$TemplateEvalContext$exec$slambda(this.$str_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(KorteTemplate$TemplateEvalContext$exec$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_99ct7z_k$((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE(), completion);
  };
  function KorteTemplate$TemplateEvalContext$exec$slambda_0($str, resultContinuation) {
    var i = new KorteTemplate$TemplateEvalContext$exec$slambda($str, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_hafcq3_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $exec2COROUTINE$5(_this__u8e3s4, args, mapper, parentScope, writer, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.args_1 = args;
    this.mapper_1 = mapper;
    this.parentScope_1 = parentScope;
    this.writer_1 = writer;
  }
  protoOf($exec2COROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.scope0__1 = new Scope(this.args_1, this.mapper_1, this.parentScope_1);
            if (!(this._this__u8e3s4__1.template_1.frontMatter_1 == null)) {
              var tmp_0 = this;
              tmp_0.tmp0_iterator1__1 = ensureNotNull(this._this__u8e3s4__1.template_1.frontMatter_1).get_entries_p20ztl_k$().iterator_jk1svi_k$();
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 1:
            if (!this.tmp0_iterator1__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.tmp1_loop_parameter2__1 = this.tmp0_iterator1__1.next_20eer_k$();
            var tmp_1 = this;
            tmp_1.k3__1 = this.tmp1_loop_parameter2__1.get_key_18j28a_k$();
            var tmp_2 = this;
            tmp_2.v4__1 = this.tmp1_loop_parameter2__1.get_value_j01efc_k$();
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.scope0__1.set_6km9f_k$(this.k3__1, this.v4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.context5__1 = new EvalContext(this._this__u8e3s4__1, this.scope0__1, this._this__u8e3s4__1.template_1.config_1, this.mapper_1, this.writer_1);
            this.set_state_rjd8d0_k$(5);
            suspendResult = this._this__u8e3s4__1.eval_vdy2zv_k$(this.context5__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            return this.context5__1;
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $execCOROUTINE$6(_this__u8e3s4, args, mapper, parentScope, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.args_1 = args;
    this.mapper_1 = mapper;
    this.parentScope_1 = parentScope;
  }
  protoOf($execCOROUTINE$6).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.str0__1 = StringBuilder_init_$Create$();
            this.scope1__1 = new Scope(this.args_1, this.mapper_1, this.parentScope_1);
            if (!(this._this__u8e3s4__1.template_1.frontMatter_1 == null)) {
              var tmp_0 = this;
              tmp_0.tmp0_iterator2__1 = ensureNotNull(this._this__u8e3s4__1.template_1.frontMatter_1).get_entries_p20ztl_k$().iterator_jk1svi_k$();
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 1:
            if (!this.tmp0_iterator2__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.tmp1_loop_parameter3__1 = this.tmp0_iterator2__1.next_20eer_k$();
            var tmp_1 = this;
            tmp_1.k4__1 = this.tmp1_loop_parameter3__1.get_key_18j28a_k$();
            var tmp_2 = this;
            tmp_2.v5__1 = this.tmp1_loop_parameter3__1.get_value_j01efc_k$();
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.scope1__1.set_6km9f_k$(this.k4__1, this.v5__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            var tmp_3 = this;
            tmp_3.context6__1 = new EvalContext(this._this__u8e3s4__1, this.scope1__1, this._this__u8e3s4__1.template_1.config_1, this.mapper_1, KorteTemplate$TemplateEvalContext$exec$slambda_0(this.str0__1, null));
            this.set_state_rjd8d0_k$(5);
            suspendResult = this._this__u8e3s4__1.eval_vdy2zv_k$(this.context6__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            return new ExecResult(this.context6__1, this.str0__1.toString());
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $invokeCOROUTINE$7(_this__u8e3s4, args, mapper, parentScope, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.args_1 = args;
    this.mapper_1 = mapper;
    this.parentScope_1 = parentScope;
  }
  protoOf($invokeCOROUTINE$7).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.exec_gh9ux_k$(this.args_1, this.mapper_1, this.parentScope_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return ARGUMENT.str_1;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $invokeCOROUTINE$8(_this__u8e3s4, args, mapper, parentScope, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.args_1 = args;
    this.mapper_1 = mapper;
    this.parentScope_1 = parentScope;
  }
  protoOf($invokeCOROUTINE$8).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.exec_gh9ux_k$(hashMapOf(this.args_1.slice()), this.mapper_1, this.parentScope_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return ARGUMENT.str_1;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $evalCOROUTINE$9(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$9).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(17);
            this.set_exceptionState_fex74n_k$(16);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.this1__1 = this.context_1;
            var tmp_1 = this;
            tmp_1.template2__1 = this._this__u8e3s4__1;
            this.oldTemplate3__1 = this.this1__1.currentTemplate_1;
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(15);
            this.this1__1.currentTemplate_1 = this.template2__1;
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            var tmp_2 = this;
            tmp_2.this7__1 = this.context_1;
            var tmp_3 = this;
            tmp_3.content8__1 = LinkedHashMap_init_$Create$();
            this.old9__1 = this.this7__1.scope_1;
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            this.set_exceptionState_fex74n_k$(14);
            this.this7__1.scope_1 = new Scope(this.content8__1, this.this7__1.mapper_1, this.old9__1);
            this.set_state_rjd8d0_k$(7);
            suspendResult = this._this__u8e3s4__1.template_1.get_rootNode_ykdovn_k$().eval_vdy2zv_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.tmp$ret$011__1 = suspendResult;
            this.set_state_rjd8d0_k$(8);
            var tmp_4 = this;
            continue $sm;
          case 8:
            this.set_exceptionState_fex74n_k$(15);
            var tmp_5 = this;
            this.this7__1.scope_1 = this.old9__1;
            tmp_5.tmp$ret$46__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(10);
            continue $sm;
          case 9:
            this.set_exceptionState_fex74n_k$(15);
            this.this7__1.scope_1 = this.old9__1;
            if (false) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(10);
            continue $sm;
          case 10:
            this.tmp$ret$65__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(11);
            var tmp_6 = this;
            continue $sm;
          case 11:
            this.set_exceptionState_fex74n_k$(16);
            var tmp_7 = this;
            this.this1__1.currentTemplate_1 = this.oldTemplate3__1;
            tmp_7.tmp$ret$100__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(13);
            continue $sm;
          case 12:
            this.set_exceptionState_fex74n_k$(16);
            this.this1__1.currentTemplate_1 = this.oldTemplate3__1;
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(13);
            continue $sm;
          case 13:
            this.set_exceptionState_fex74n_k$(17);
            this.set_state_rjd8d0_k$(18);
            continue $sm;
          case 14:
            this.set_exceptionState_fex74n_k$(15);
            var t = this.get_exception_x0n6w6_k$();
            this.this7__1.scope_1 = this.old9__1;
            throw t;
          case 15:
            this.set_exceptionState_fex74n_k$(16);
            var t_0 = this.get_exception_x0n6w6_k$();
            this.this1__1.currentTemplate_1 = this.oldTemplate3__1;
            throw t_0;
          case 16:
            this.set_exceptionState_fex74n_k$(17);
            var tmp_8 = this.get_exception_x0n6w6_k$();
            if (tmp_8 instanceof StopEvaluatingException) {
              var e = this.get_exception_x0n6w6_k$();
              this.set_state_rjd8d0_k$(18);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 17:
            throw this.get_exception_x0n6w6_k$();
          case 18:
            this.set_exceptionState_fex74n_k$(17);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 17) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function KorteTemplate$EvalContext$filterCtxPool$lambda() {
    return new Ctx();
  }
  function KorteTemplate$EvalContext$capture$slambda($out, resultContinuation) {
    this.$out_1 = $out;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteTemplate$EvalContext$capture$slambda).invoke_hafcq3_k$ = function (it, $completion) {
    var tmp = this.create_99ct7z_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplate$EvalContext$capture$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_hafcq3_k$((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteTemplate$EvalContext$capture$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.$out_1._v = this.$out_1._v + this.it_1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteTemplate$EvalContext$capture$slambda).create_99ct7z_k$ = function (it, completion) {
    var i = new KorteTemplate$EvalContext$capture$slambda(this.$out_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(KorteTemplate$EvalContext$capture$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_99ct7z_k$((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE(), completion);
  };
  function KorteTemplate$EvalContext$capture$slambda_0($out, resultContinuation) {
    var i = new KorteTemplate$EvalContext$capture$slambda($out, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_hafcq3_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteTemplate$EvalContext$captureRaw$slambda($out, resultContinuation) {
    this.$out_1 = $out;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteTemplate$EvalContext$captureRaw$slambda).invoke_hafcq3_k$ = function (it, $completion) {
    var tmp = this.create_99ct7z_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplate$EvalContext$captureRaw$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_hafcq3_k$((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteTemplate$EvalContext$captureRaw$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.$out_1._v = this.$out_1._v + this.it_1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteTemplate$EvalContext$captureRaw$slambda).create_99ct7z_k$ = function (it, completion) {
    var i = new KorteTemplate$EvalContext$captureRaw$slambda(this.$out_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(KorteTemplate$EvalContext$captureRaw$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_99ct7z_k$((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE(), completion);
  };
  function KorteTemplate$EvalContext$captureRaw$slambda_0($out, resultContinuation) {
    var i = new KorteTemplate$EvalContext$captureRaw$slambda($out, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_hafcq3_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_rootNode__mpirf7($this, _set____db54di) {
    $this.rootNode_1 = _set____db54di;
  }
  function ParseContext(template, config) {
    this.template_1 = template;
    this.config_1 = config;
  }
  protoOf(ParseContext).get_template_hdczer_k$ = function () {
    return this.template_1;
  };
  protoOf(ParseContext).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(ParseContext).get_templates_tqpy0g_k$ = function () {
    return this.template_1.templates_1;
  };
  function Scope(map, mapper, parent) {
    parent = parent === VOID ? null : parent;
    this.map_1 = map;
    this.mapper_1 = mapper;
    this.parent_1 = parent;
  }
  protoOf(Scope).get_map_18j0ul_k$ = function () {
    return this.map_1;
  };
  protoOf(Scope).get_mapper_giyu6i_k$ = function () {
    return this.mapper_1;
  };
  protoOf(Scope).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(Scope).get_4obwy_k$ = function (key, $completion) {
    var tmp = new $getCOROUTINE$1(this, key, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Scope).set_6km9f_k$ = function (key, value, $completion) {
    return KorteDynamic2_getInstance().setAny_6duv_k$(this.map_1, key, value, this.mapper_1, $completion);
  };
  function ExecResult(context, str) {
    this.context_1 = context;
    this.str_1 = str;
  }
  protoOf(ExecResult).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(ExecResult).get_str_18ivy0_k$ = function () {
    return this.str_1;
  };
  protoOf(ExecResult).component1_7eebsc_k$ = function () {
    return this.context_1;
  };
  protoOf(ExecResult).component2_7eebsb_k$ = function () {
    return this.str_1;
  };
  protoOf(ExecResult).copy_eeezi7_k$ = function (context, str) {
    return new ExecResult(context, str);
  };
  protoOf(ExecResult).copy$default_a6d0za_k$ = function (context, str, $super) {
    context = context === VOID ? this.context_1 : context;
    str = str === VOID ? this.str_1 : str;
    return $super === VOID ? this.copy_eeezi7_k$(context, str) : $super.copy_eeezi7_k$.call(this, context, str);
  };
  protoOf(ExecResult).toString = function () {
    return 'ExecResult(context=' + this.context_1 + ', str=' + this.str_1 + ')';
  };
  protoOf(ExecResult).hashCode = function () {
    var result = hashCode(this.context_1);
    result = imul(result, 31) + getStringHashCode(this.str_1) | 0;
    return result;
  };
  protoOf(ExecResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ExecResult))
      return false;
    var tmp0_other_with_cast = other instanceof ExecResult ? other : THROW_CCE();
    if (!equals(this.context_1, tmp0_other_with_cast.context_1))
      return false;
    if (!(this.str_1 === tmp0_other_with_cast.str_1))
      return false;
    return true;
  };
  function DynamicInvokable() {
  }
  function Macro(name, argNames, code) {
    this.name_1 = name;
    this.argNames_1 = argNames;
    this.code_1 = code;
  }
  protoOf(Macro).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Macro).get_argNames_cc2f6j_k$ = function () {
    return this.argNames_1;
  };
  protoOf(Macro).get_code_wok7xy_k$ = function () {
    return this.code_1;
  };
  protoOf(Macro).invoke_gwkxz_k$ = function (ctx, args, $completion) {
    var tmp = new $invokeCOROUTINE$2(this, ctx, args, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function BlockInTemplateEval(name, block, template) {
    this.name_1 = name;
    this.block_1 = block;
    this.template_1 = template;
  }
  protoOf(BlockInTemplateEval).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(BlockInTemplateEval).get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  protoOf(BlockInTemplateEval).get_template_hdczer_k$ = function () {
    return this.template_1;
  };
  protoOf(BlockInTemplateEval).get_parent_hy4reb_k$ = function () {
    var tmp0_safe_receiver = this.template_1.parent_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getBlockOrNull_cn3od5_k$(this.name_1);
  };
  protoOf(BlockInTemplateEval).eval_vdy2zv_k$ = function (ctx, $completion) {
    var tmp = new $evalCOROUTINE$3(this, ctx, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlockInTemplateEval).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(BlockInTemplateEval).component2_7eebsb_k$ = function () {
    return this.block_1;
  };
  protoOf(BlockInTemplateEval).component3_7eebsa_k$ = function () {
    return this.template_1;
  };
  protoOf(BlockInTemplateEval).copy_fx3wtp_k$ = function (name, block, template) {
    return new BlockInTemplateEval(name, block, template);
  };
  protoOf(BlockInTemplateEval).copy$default_abepib_k$ = function (name, block, template, $super) {
    name = name === VOID ? this.name_1 : name;
    block = block === VOID ? this.block_1 : block;
    template = template === VOID ? this.template_1 : template;
    return $super === VOID ? this.copy_fx3wtp_k$(name, block, template) : $super.copy_fx3wtp_k$.call(this, name, block, template);
  };
  protoOf(BlockInTemplateEval).toString = function () {
    return 'BlockInTemplateEval(name=' + this.name_1 + ', block=' + this.block_1 + ', template=' + this.template_1 + ')';
  };
  protoOf(BlockInTemplateEval).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.block_1) | 0;
    result = imul(result, 31) + hashCode(this.template_1) | 0;
    return result;
  };
  protoOf(BlockInTemplateEval).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlockInTemplateEval))
      return false;
    var tmp0_other_with_cast = other instanceof BlockInTemplateEval ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.block_1, tmp0_other_with_cast.block_1))
      return false;
    if (!equals(this.template_1, tmp0_other_with_cast.template_1))
      return false;
    return true;
  };
  function TemplateEvalContext(template) {
    this.template_1 = template;
    this.name_1 = this.template_1.name_1;
    this.parent_1 = null;
  }
  protoOf(TemplateEvalContext).get_template_hdczer_k$ = function () {
    return this.template_1;
  };
  protoOf(TemplateEvalContext).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(TemplateEvalContext).get_templates_tqpy0g_k$ = function () {
    return this.template_1.templates_1;
  };
  protoOf(TemplateEvalContext).set_parent_l3p4fi_k$ = function (_set____db54di) {
    this.parent_1 = _set____db54di;
  };
  protoOf(TemplateEvalContext).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(TemplateEvalContext).get_root_wott0r_k$ = function () {
    var tmp0_safe_receiver = this.parent_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_root_wott0r_k$();
    return tmp1_elvis_lhs == null ? this : tmp1_elvis_lhs;
  };
  protoOf(TemplateEvalContext).getBlockOrNull_cn3od5_k$ = function (name) {
    var tmp0_safe_receiver = this.template_1.blocks_1.get_wei43m_k$(name);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'korlibs.template.TemplateEvalContext.getBlockOrNull.<anonymous>' call
      tmp = new BlockInTemplateEval(name, tmp0_safe_receiver, this);
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = this.parent_1;
      tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.getBlockOrNull_cn3od5_k$(name);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(TemplateEvalContext).getBlock_nbf2o3_k$ = function (name) {
    var tmp0_elvis_lhs = this.getBlockOrNull_cn3od5_k$(name);
    return tmp0_elvis_lhs == null ? new BlockInTemplateEval(name, new BlockText(''), this) : tmp0_elvis_lhs;
  };
  protoOf(TemplateEvalContext).withArgs_ee2hzv_k$ = function (args, mapper, parentScope) {
    return new WithArgs(this, args, mapper, parentScope);
  };
  protoOf(TemplateEvalContext).withArgs$default_f32yv5_k$ = function (args, mapper, parentScope, $super) {
    mapper = mapper === VOID ? get_KorteMapper2() : mapper;
    parentScope = parentScope === VOID ? null : parentScope;
    return $super === VOID ? this.withArgs_ee2hzv_k$(args, mapper, parentScope) : $super.withArgs_ee2hzv_k$.call(this, args, mapper, parentScope);
  };
  protoOf(TemplateEvalContext).exec2_q70v1r_k$ = function (args, mapper, parentScope, writer, $completion) {
    var tmp = new $exec2COROUTINE$5(this, args, mapper, parentScope, writer, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(TemplateEvalContext).exec2$default_cocr3k_k$ = function (args, mapper, parentScope, writer, $completion, $super) {
    parentScope = parentScope === VOID ? null : parentScope;
    return $super === VOID ? this.exec2_q70v1r_k$(args, mapper, parentScope, writer, $completion) : $super.exec2_q70v1r_k$.call(this, args, mapper, parentScope, writer, $completion);
  };
  protoOf(TemplateEvalContext).exec_gh9ux_k$ = function (args, mapper, parentScope, $completion) {
    var tmp = new $execCOROUTINE$6(this, args, mapper, parentScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(TemplateEvalContext).exec$default_66mnbn_k$ = function (args, mapper, parentScope, $completion, $super) {
    mapper = mapper === VOID ? get_KorteMapper2() : mapper;
    parentScope = parentScope === VOID ? null : parentScope;
    return $super === VOID ? this.exec_gh9ux_k$(args, mapper, parentScope, $completion) : $super.exec_gh9ux_k$.call(this, args, mapper, parentScope, $completion);
  };
  protoOf(TemplateEvalContext).exec_fbzc9c_k$ = function (args, mapper, parentScope, $completion) {
    return this.exec_gh9ux_k$(hashMapOf(args.slice()), mapper, parentScope, $completion);
  };
  protoOf(TemplateEvalContext).exec$default_qebzak_k$ = function (args, mapper, parentScope, $completion, $super) {
    mapper = mapper === VOID ? get_KorteMapper2() : mapper;
    parentScope = parentScope === VOID ? null : parentScope;
    return $super === VOID ? this.exec_fbzc9c_k$(args, mapper, parentScope, $completion) : $super.exec_fbzc9c_k$.call(this, args, mapper, parentScope, $completion);
  };
  protoOf(TemplateEvalContext).invoke_pcxxl_k$ = function (args, mapper, parentScope, $completion) {
    var tmp = new $invokeCOROUTINE$7(this, args, mapper, parentScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(TemplateEvalContext).invoke$default_n268sb_k$ = function (args, mapper, parentScope, $completion, $super) {
    mapper = mapper === VOID ? get_KorteMapper2() : mapper;
    parentScope = parentScope === VOID ? null : parentScope;
    return $super === VOID ? this.invoke_pcxxl_k$(args, mapper, parentScope, $completion) : $super.invoke_pcxxl_k$.call(this, args, mapper, parentScope, $completion);
  };
  protoOf(TemplateEvalContext).invoke_q7eoqm_k$ = function (args, mapper, parentScope, $completion) {
    var tmp = new $invokeCOROUTINE$8(this, args, mapper, parentScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(TemplateEvalContext).invoke$default_c2w19a_k$ = function (args, mapper, parentScope, $completion, $super) {
    mapper = mapper === VOID ? get_KorteMapper2() : mapper;
    parentScope = parentScope === VOID ? null : parentScope;
    return $super === VOID ? this.invoke_q7eoqm_k$(args, mapper, parentScope, $completion) : $super.invoke_q7eoqm_k$.call(this, args, mapper, parentScope, $completion);
  };
  protoOf(TemplateEvalContext).eval_vdy2zv_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$9(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function StopEvaluatingException() {
    Exception_init_$Init$(this);
    captureStack(this, StopEvaluatingException);
  }
  function EvalContext(currentTemplate, scope, config, mapper, write) {
    this.currentTemplate_1 = currentTemplate;
    this.scope_1 = scope;
    this.config_1 = config;
    this.mapper_1 = mapper;
    this.write_1 = write;
    this.leafTemplate_1 = this.currentTemplate_1;
    this.templates_1 = this.currentTemplate_1.get_templates_tqpy0g_k$();
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.macros_1 = HashMap_init_$Create$();
    this.currentBlock_1 = null;
    var tmp_0 = this;
    tmp_0.filterCtxPool_1 = new Pool(KorteTemplate$EvalContext$filterCtxPool$lambda);
  }
  protoOf(EvalContext).set_currentTemplate_jeh4yg_k$ = function (_set____db54di) {
    this.currentTemplate_1 = _set____db54di;
  };
  protoOf(EvalContext).get_currentTemplate_fvs4pi_k$ = function () {
    return this.currentTemplate_1;
  };
  protoOf(EvalContext).set_scope_wjtu18_k$ = function (_set____db54di) {
    this.scope_1 = _set____db54di;
  };
  protoOf(EvalContext).get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  protoOf(EvalContext).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(EvalContext).get_mapper_giyu6i_k$ = function () {
    return this.mapper_1;
  };
  protoOf(EvalContext).set_write_xvrr5r_k$ = function (_set____db54di) {
    this.write_1 = _set____db54di;
  };
  protoOf(EvalContext).get_write_j0vzjq_k$ = function () {
    return this.write_1;
  };
  protoOf(EvalContext).get_leafTemplate_s83lmp_k$ = function () {
    return this.leafTemplate_1;
  };
  protoOf(EvalContext).get_templates_tqpy0g_k$ = function () {
    return this.templates_1;
  };
  protoOf(EvalContext).get_macros_giql2o_k$ = function () {
    return this.macros_1;
  };
  protoOf(EvalContext).set_currentBlock_gr8zjh_k$ = function (_set____db54di) {
    this.currentBlock_1 = _set____db54di;
  };
  protoOf(EvalContext).get_currentBlock_se15nh_k$ = function () {
    return this.currentBlock_1;
  };
  protoOf(EvalContext).get_filterCtxPool_5gjvoi_k$ = function () {
    return this.filterCtxPool_1;
  };
  protoOf(EvalContext).setTempTemplate_uzpmqg_k$ = function (template, callback) {
    var oldTemplate = this.currentTemplate_1;
    try {
      this.currentTemplate_1 = template;
      return callback();
    }finally {
      this.currentTemplate_1 = oldTemplate;
    }
  };
  protoOf(EvalContext).capture_goewv6_k$ = function (callback) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.EvalContext.capture.<anonymous>' call
    var out = {_v: ''};
    var old = this.write_1;
    try {
      var tmp = this;
      tmp.write_1 = KorteTemplate$EvalContext$capture$slambda_0(out, null);
      callback();
    }finally {
      this.write_1 = old;
    }
    return out._v;
  };
  protoOf(EvalContext).captureRaw_ulj1i_k$ = function (callback) {
    // Inline function 'korlibs.template.EvalContext.capture' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.EvalContext.capture.<anonymous>' call
    var out = {_v: ''};
    var old = this.write_1;
    try {
      var tmp = this;
      tmp.write_1 = KorteTemplate$EvalContext$captureRaw$slambda_0(out, null);
      callback();
    }finally {
      this.write_1 = old;
    }
    var tmp$ret$2 = out._v;
    return new KorteRawString(tmp$ret$2);
  };
  protoOf(EvalContext).createScope_1v7liq_k$ = function (content, callback) {
    var old = this.scope_1;
    try {
      this.scope_1 = new Scope(content, this.mapper_1, old);
      return callback();
    }finally {
      this.scope_1 = old;
    }
  };
  function $initCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($initCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = Companion_getInstance_1().parse_4fltit_k$(this._this__u8e3s4__1.templateTokens_1, this._this__u8e3s4__1.parseContext_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this._this__u8e3s4__1.rootNode_1 = ARGUMENT;
            if (!(this._this__u8e3s4__1.frontMatter_1 == null)) {
              var tmp0_safe_receiver = this._this__u8e3s4__1.frontMatter_1;
              var layout = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_wei43m_k$('layout');
              if (!(layout == null)) {
                this._this__u8e3s4__1.rootNode_1 = new BlockGroup(listOf([new BlockCapture('content', this._this__u8e3s4__1.get_rootNode_ykdovn_k$(), this._this__u8e3s4__1.templateContent_1.contentType_1), new BlockExtends(new LIT(layout))]));
              }
            }

            return this._this__u8e3s4__1;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $invokeCOROUTINE$10(_this__u8e3s4, hashMap, mapper, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.hashMap_1 = hashMap;
    this.mapper_1 = mapper;
  }
  protoOf($invokeCOROUTINE$10).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.createEvalContext_y1rs3m_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.ARGUMENT0__1.invoke$default_n268sb_k$(this.hashMap_1, this.mapper_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $invokeCOROUTINE$11(_this__u8e3s4, args, mapper, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.args_1 = args;
    this.mapper_1 = mapper;
  }
  protoOf($invokeCOROUTINE$11).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.createEvalContext_y1rs3m_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.ARGUMENT0__1.invoke$default_c2w19a_k$(this.args_1.slice(), this.mapper_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $prenderCOROUTINE$12(_this__u8e3s4, args, mapper, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.args_1 = args;
    this.mapper_1 = mapper;
  }
  protoOf($prenderCOROUTINE$12).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.createEvalContext_y1rs3m_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return ARGUMENT.withArgs$default_f32yv5_k$(HashMap_init_$Create$_0(toMap(this.args_1)), this.mapper_1);
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $prenderCOROUTINE$13(_this__u8e3s4, args, mapper, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.args_1 = args;
    this.mapper_1 = mapper;
  }
  protoOf($prenderCOROUTINE$13).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.createEvalContext_y1rs3m_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return ARGUMENT.withArgs$default_f32yv5_k$(this.args_1, this.mapper_1);
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function KorteTemplate(name, templates, templateContent, config) {
    config = config === VOID ? new KorteTemplateConfig() : config;
    this.name_1 = name;
    this.templates_1 = templates;
    this.templateContent_1 = templateContent;
    this.config_1 = config;
    this.frontMatter_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.blocks_1 = HashMap_init_$Create$();
    this.parseContext_1 = new ParseContext(this, this.config_1);
    this.templateTokens_1 = Companion_getInstance_2().tokenize_8a1bzl_k$(this.get_template_hdczer_k$(), new KorteFilePosContext(new KorteFileContext(this.name_1, this.get_template_hdczer_k$()), 0));
  }
  protoOf(KorteTemplate).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(KorteTemplate).get_templates_tqpy0g_k$ = function () {
    return this.templates_1;
  };
  protoOf(KorteTemplate).get_templateContent_wo12nq_k$ = function () {
    return this.templateContent_1;
  };
  protoOf(KorteTemplate).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(KorteTemplate).get_template_hdczer_k$ = function () {
    return this.templateContent_1.text_1;
  };
  protoOf(KorteTemplate).set_frontMatter_2djetg_k$ = function (_set____db54di) {
    this.frontMatter_1 = _set____db54di;
  };
  protoOf(KorteTemplate).get_frontMatter_iz7ndr_k$ = function () {
    return this.frontMatter_1;
  };
  protoOf(KorteTemplate).get_blocks_bhhtvz_k$ = function () {
    return this.blocks_1;
  };
  protoOf(KorteTemplate).get_parseContext_c7s9iz_k$ = function () {
    return this.parseContext_1;
  };
  protoOf(KorteTemplate).get_templateTokens_6t5inx_k$ = function () {
    return this.templateTokens_1;
  };
  protoOf(KorteTemplate).get_rootNode_ykdovn_k$ = function () {
    var tmp = this.rootNode_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('rootNode');
    }
  };
  protoOf(KorteTemplate).init_h7qz2s_k$ = function ($completion) {
    var tmp = new $initCOROUTINE$0(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplate).addBlock_krezv6_k$ = function (name, body) {
    // Inline function 'kotlin.collections.set' call
    this.blocks_1.put_4fpzoq_k$(name, body);
  };
  protoOf(KorteTemplate).createEvalContext_y1rs3m_k$ = function ($completion) {
    return new TemplateEvalContext(this);
  };
  protoOf(KorteTemplate).invoke_6hzt4v_k$ = function (hashMap, mapper, $completion) {
    var tmp = new $invokeCOROUTINE$10(this, hashMap, mapper, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplate).invoke$default_ies3u7_k$ = function (hashMap, mapper, $completion, $super) {
    mapper = mapper === VOID ? get_KorteMapper2() : mapper;
    return $super === VOID ? this.invoke_6hzt4v_k$(hashMap, mapper, $completion) : $super.invoke_6hzt4v_k$.call(this, hashMap, mapper, $completion);
  };
  protoOf(KorteTemplate).invoke_7xlmze_k$ = function (args, mapper, $completion) {
    var tmp = new $invokeCOROUTINE$11(this, args, mapper, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplate).invoke$default_igo7bq_k$ = function (args, mapper, $completion, $super) {
    mapper = mapper === VOID ? get_KorteMapper2() : mapper;
    return $super === VOID ? this.invoke_7xlmze_k$(args, mapper, $completion) : $super.invoke_7xlmze_k$.call(this, args, mapper, $completion);
  };
  protoOf(KorteTemplate).prender_re8re7_k$ = function (args, mapper, $completion) {
    var tmp = new $prenderCOROUTINE$12(this, args, mapper, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplate).prender$default_nnzdrr_k$ = function (args, mapper, $completion, $super) {
    mapper = mapper === VOID ? get_KorteMapper2() : mapper;
    return $super === VOID ? this.prender_re8re7_k$(args, mapper, $completion) : $super.prender_re8re7_k$.call(this, args, mapper, $completion);
  };
  protoOf(KorteTemplate).prender_uvph3c_k$ = function (args, mapper, $completion) {
    var tmp = new $prenderCOROUTINE$13(this, args, mapper, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplate).prender$default_1gjvaa_k$ = function (args, mapper, $completion, $super) {
    mapper = mapper === VOID ? get_KorteMapper2() : mapper;
    return $super === VOID ? this.prender_uvph3c_k$(args, mapper, $completion) : $super.prender_uvph3c_k$.call(this, args, mapper, $completion);
  };
  function KorteRawString(str, contentType) {
    contentType = contentType === VOID ? null : contentType;
    this.str_1 = str;
    this.contentType_1 = contentType;
  }
  protoOf(KorteRawString).get_str_18ivy0_k$ = function () {
    return this.str_1;
  };
  protoOf(KorteRawString).get_contentType_7git4a_k$ = function () {
    return this.contentType_1;
  };
  protoOf(KorteRawString).toString = function () {
    return this.str_1;
  };
  function handle$emitPart(parts, currentToken, children) {
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new Part(currentToken._v, Companion_getInstance_1().group_mstilr_k$(toList(children)));
    parts.add_utx5q5_k$(element);
  }
  function $handleCOROUTINE$14(_this__u8e3s4, tag, token, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.tag_1 = tag;
    this.token_1 = token;
  }
  protoOf($handleCOROUTINE$14).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            var tmp_0 = this;
            tmp_0.parts0__1 = ArrayList_init_$Create$();
            this.currentToken1__1 = {_v: this.token_1};
            var tmp_1 = this;
            tmp_1.children2__1 = ArrayList_init_$Create$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!!this._this__u8e3s4__1.tr_1.get_eof_18j6gd_k$()) {
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            }

            this.it3__1 = this._this__u8e3s4__1.tr_1.read_22xsm_k$();
            this.tmp0_subject4__1 = this.it3__1;
            var tmp_2 = this.tmp0_subject4__1;
            if (tmp_2 instanceof TLiteral) {
              var text = this.it3__1.content_1;
              if (this.children2__1.isEmpty_y1axqb_k$() ? startsWith(this.it3__1.content_1, '---') : false) {
                var lines = split(this.it3__1.content_1, charArrayOf([_Char___init__impl__6a9atx(10)]));
                if (lines.get_c1px32_k$(0) === '---') {
                  var slines = drop(lines, 1);
                  var index = slines.indexOf_si1fv9_k$('---');
                  if (index >= 0) {
                    var yamlLines = slice(slines, until(0, index));
                    var outside = slice(slines, until(index + 1 | 0, slines.get_size_woubt6_k$()));
                    var yamlText = joinToString(yamlLines, '\n');
                    var yaml = Yaml_getInstance().read_ierm78_k$(yamlText);
                    if (!(yaml == null) ? isInterface(yaml, Map) : false) {
                      var tmp_3 = this._this__u8e3s4__1.parseContext_1.template_1;
                      tmp_3.frontMatter_1 = (!(yaml == null) ? isInterface(yaml, Map) : false) ? yaml : THROW_CCE();
                    }
                    text = joinToString(outside, '\n');
                  }
                }
              }
              var this_0 = this.children2__1;
              var element = new BlockText(this._this__u8e3s4__1.parseContext_1.template_1.templateContent_1.chunkProcessor_1(text));
              this_0.add_utx5q5_k$(element);
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            } else {
              var tmp_4 = this.tmp0_subject4__1;
              if (tmp_4 instanceof TExpr) {
                var this_1 = this.children2__1;
                var element_0 = new BlockExpr(Companion_getInstance_5().parse_cgmbyv_k$(this.it3__1.content_1, this.it3__1.get_posContext_avexqc_k$()));
                this_1.add_utx5q5_k$(element_0);
                this.set_state_rjd8d0_k$(6);
                continue $sm;
              } else {
                var tmp_5 = this.tmp0_subject4__1;
                if (tmp_5 instanceof TTag) {
                  this.tmp1_subject5__1 = this.it3__1.name_1;
                  var tmp2_elvis_lhs = this.tag_1.end_1;
                  var tmp_6;
                  if (tmp2_elvis_lhs == null) {
                    tmp_6 = emptySet();
                  } else {
                    tmp_6 = tmp2_elvis_lhs;
                  }
                  if (tmp_6.contains_aljjnj_k$(this.tmp1_subject5__1)) {
                    this.set_state_rjd8d0_k$(7);
                    continue $sm;
                  } else {
                    if (this.tag_1.nextList_1.contains_aljjnj_k$(this.tmp1_subject5__1)) {
                      handle$emitPart(this.parts0__1, this.currentToken1__1, this.children2__1);
                      this.currentToken1__1._v = this.it3__1;
                      this.children2__1.clear_j9egeb_k$();
                      this.set_state_rjd8d0_k$(5);
                      continue $sm;
                    } else {
                      var tmp_7 = this;
                      var tmp3_elvis_lhs = this._this__u8e3s4__1.parseContext_1.config_1.tags_1.get_wei43m_k$(this.it3__1.name_1);
                      var tmp_8;
                      if (tmp3_elvis_lhs == null) {
                        this.it3__1.exception_kh9cqz_k$("Can't find tag " + this.it3__1.name_1 + ' with content ' + this.it3__1.content_1);
                      } else {
                        tmp_8 = tmp3_elvis_lhs;
                      }
                      tmp_7.newtag6__1 = tmp_8;
                      var tmp_9 = this;
                      tmp_9.this7__1 = this.children2__1;
                      if (!(this.newtag6__1.end_1 == null)) {
                        this.set_state_rjd8d0_k$(3);
                        suspendResult = this._this__u8e3s4__1.handle_uriz4e_k$(this.newtag6__1, this.it3__1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.set_state_rjd8d0_k$(2);
                        suspendResult = this.newtag6__1.buildNode_1(new BuildContext(this._this__u8e3s4__1.parseContext_1, listOf_0(new Part(this.it3__1, new BlockText('')))), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      }
                    }
                  }
                } else {
                  this.set_state_rjd8d0_k$(7);
                  continue $sm;
                }
              }
            }

          case 2:
            this.WHEN_RESULT8__1 = suspendResult;
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 3:
            this.WHEN_RESULT8__1 = suspendResult;
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.element9__1 = this.WHEN_RESULT8__1;
            this.this7__1.add_utx5q5_k$(this.element9__1);
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 7:
            handle$emitPart(this.parts0__1, this.currentToken1__1, this.children2__1);
            this.set_state_rjd8d0_k$(8);
            suspendResult = this.tag_1.buildNode_1(new BuildContext(this._this__u8e3s4__1.parseContext_1, this.parts0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return suspendResult;
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function Parse(tokens, parseContext) {
    this.tokens_1 = tokens;
    this.parseContext_1 = parseContext;
    this.tr_1 = new KorteListReader(this.tokens_1, lastOrNull(this.tokens_1));
  }
  protoOf(Parse).get_tokens_k1vwdf_k$ = function () {
    return this.tokens_1;
  };
  protoOf(Parse).get_parseContext_c7s9iz_k$ = function () {
    return this.parseContext_1;
  };
  protoOf(Parse).get_tr_kntnnd_k$ = function () {
    return this.tr_1;
  };
  protoOf(Parse).handle_uriz4e_k$ = function (tag, token, $completion) {
    var tmp = new $handleCOROUTINE$14(this, tag, token, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).group_mstilr_k$ = function (children) {
    return children.get_size_woubt6_k$() === 1 ? children.get_c1px32_k$(0) : new BlockGroup(children);
  };
  protoOf(Companion_0).parse_4fltit_k$ = function (tokens, parseContext, $completion) {
    return (new Parse(tokens, parseContext)).handle_uriz4e_k$(KorteDefaultTags_getInstance().get_Empty_i9b85g_k$(), new TTag('', ''), $completion);
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function KorteBlock() {
  }
  function KorteToken$TTag$tokens$delegate$lambda(this$0) {
    return function () {
      return Companion_getInstance_4().tokenize_8a1bzl_k$(this$0.content_1, this$0.get_posContext_avexqc_k$());
    };
  }
  function KorteToken$TTag$expr$delegate$lambda(this$0) {
    return function () {
      return Companion_getInstance_5().parse_308sm3_k$(this$0);
    };
  }
  function tokenize$emit(out, $context, token, pos) {
    var tmp;
    if (token instanceof TLiteral) {
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = token.content_1;
      tmp = charSequenceLength(this_0) === 0;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_getInstance();
    // Inline function 'kotlin.collections.plusAssign' call
    out.add_utx5q5_k$(token);
    token.set_file_aztlmr_k$($context.file_1);
    token.set_pos_tfwdvz_k$($context.pos_1 + pos | 0);
  }
  function TLiteral(content) {
    KorteToken.call(this);
    this.content_1 = content;
    this.$$delegate_0__1 = new Mixin();
  }
  protoOf(TLiteral).get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  protoOf(TLiteral).set_file_aztlmr_k$ = function (_set____db54di) {
    this.$$delegate_0__1.file_1 = _set____db54di;
  };
  protoOf(TLiteral).get_file_wom0n9_k$ = function () {
    return this.$$delegate_0__1.file_1;
  };
  protoOf(TLiteral).set_pos_tfwdvz_k$ = function (_set____db54di) {
    this.$$delegate_0__1.pos_1 = _set____db54di;
  };
  protoOf(TLiteral).get_pos_18iyad_k$ = function () {
    return this.$$delegate_0__1.pos_1;
  };
  protoOf(TLiteral).get_posContext_avexqc_k$ = function () {
    return this.$$delegate_0__1.get_posContext_avexqc_k$();
  };
  protoOf(TLiteral).exception_kh9cqz_k$ = function (msg) {
    this.$$delegate_0__1.exception_kh9cqz_k$(msg);
  };
  protoOf(TLiteral).component1_7eebsc_k$ = function () {
    return this.content_1;
  };
  protoOf(TLiteral).copy_a35qlh_k$ = function (content) {
    return new TLiteral(content);
  };
  protoOf(TLiteral).copy$default_x7kzqt_k$ = function (content, $super) {
    content = content === VOID ? this.content_1 : content;
    return $super === VOID ? this.copy_a35qlh_k$(content) : $super.copy_a35qlh_k$.call(this, content);
  };
  protoOf(TLiteral).toString = function () {
    return 'TLiteral(content=' + this.content_1 + ')';
  };
  protoOf(TLiteral).hashCode = function () {
    return getStringHashCode(this.content_1);
  };
  protoOf(TLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TLiteral))
      return false;
    var tmp0_other_with_cast = other instanceof TLiteral ? other : THROW_CCE();
    if (!(this.content_1 === tmp0_other_with_cast.content_1))
      return false;
    return true;
  };
  function TExpr(content) {
    KorteToken.call(this);
    this.content_1 = content;
    this.$$delegate_0__1 = new Mixin();
  }
  protoOf(TExpr).get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  protoOf(TExpr).set_file_aztlmr_k$ = function (_set____db54di) {
    this.$$delegate_0__1.file_1 = _set____db54di;
  };
  protoOf(TExpr).get_file_wom0n9_k$ = function () {
    return this.$$delegate_0__1.file_1;
  };
  protoOf(TExpr).set_pos_tfwdvz_k$ = function (_set____db54di) {
    this.$$delegate_0__1.pos_1 = _set____db54di;
  };
  protoOf(TExpr).get_pos_18iyad_k$ = function () {
    return this.$$delegate_0__1.pos_1;
  };
  protoOf(TExpr).get_posContext_avexqc_k$ = function () {
    return this.$$delegate_0__1.get_posContext_avexqc_k$();
  };
  protoOf(TExpr).exception_kh9cqz_k$ = function (msg) {
    this.$$delegate_0__1.exception_kh9cqz_k$(msg);
  };
  protoOf(TExpr).component1_7eebsc_k$ = function () {
    return this.content_1;
  };
  protoOf(TExpr).copy_a35qlh_k$ = function (content) {
    return new TExpr(content);
  };
  protoOf(TExpr).copy$default_rddxg1_k$ = function (content, $super) {
    content = content === VOID ? this.content_1 : content;
    return $super === VOID ? this.copy_a35qlh_k$(content) : $super.copy_a35qlh_k$.call(this, content);
  };
  protoOf(TExpr).toString = function () {
    return 'TExpr(content=' + this.content_1 + ')';
  };
  protoOf(TExpr).hashCode = function () {
    return getStringHashCode(this.content_1);
  };
  protoOf(TExpr).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TExpr))
      return false;
    var tmp0_other_with_cast = other instanceof TExpr ? other : THROW_CCE();
    if (!(this.content_1 === tmp0_other_with_cast.content_1))
      return false;
    return true;
  };
  function TTag(name, content) {
    KorteToken.call(this);
    this.name_1 = name;
    this.content_1 = content;
    this.$$delegate_0__1 = new Mixin();
    var tmp = this;
    tmp.tokens$delegate_1 = lazy(KorteToken$TTag$tokens$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.expr$delegate_1 = lazy(KorteToken$TTag$expr$delegate$lambda(this));
  }
  protoOf(TTag).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(TTag).get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  protoOf(TTag).set_file_aztlmr_k$ = function (_set____db54di) {
    this.$$delegate_0__1.file_1 = _set____db54di;
  };
  protoOf(TTag).get_file_wom0n9_k$ = function () {
    return this.$$delegate_0__1.file_1;
  };
  protoOf(TTag).set_pos_tfwdvz_k$ = function (_set____db54di) {
    this.$$delegate_0__1.pos_1 = _set____db54di;
  };
  protoOf(TTag).get_pos_18iyad_k$ = function () {
    return this.$$delegate_0__1.pos_1;
  };
  protoOf(TTag).get_posContext_avexqc_k$ = function () {
    return this.$$delegate_0__1.get_posContext_avexqc_k$();
  };
  protoOf(TTag).exception_kh9cqz_k$ = function (msg) {
    this.$$delegate_0__1.exception_kh9cqz_k$(msg);
  };
  protoOf(TTag).get_tokens_k1vwdf_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.tokens$delegate_1;
    tokens$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(TTag).get_expr_wolovy_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.expr$delegate_1;
    expr$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(TTag).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(TTag).component2_7eebsb_k$ = function () {
    return this.content_1;
  };
  protoOf(TTag).copy_plwnsl_k$ = function (name, content) {
    return new TTag(name, content);
  };
  protoOf(TTag).copy$default_tdwflx_k$ = function (name, content, $super) {
    name = name === VOID ? this.name_1 : name;
    content = content === VOID ? this.content_1 : content;
    return $super === VOID ? this.copy_plwnsl_k$(name, content) : $super.copy_plwnsl_k$.call(this, name, content);
  };
  protoOf(TTag).toString = function () {
    return 'TTag(name=' + this.name_1 + ', content=' + this.content_1 + ')';
  };
  protoOf(TTag).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + getStringHashCode(this.content_1) | 0;
    return result;
  };
  protoOf(TTag).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TTag))
      return false;
    var tmp0_other_with_cast = other instanceof TTag ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!(this.content_1 === tmp0_other_with_cast.content_1))
      return false;
    return true;
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).tokenize_8a1bzl_k$ = function (str, context) {
    // Inline function 'kotlin.collections.arrayListOf' call
    var out = ArrayList_init_$Create$();
    var lastPos = 0;
    var pos = 0;
    loop: while (pos < str.length) {
      var tmp0 = pos;
      pos = tmp0 + 1 | 0;
      var c = charSequenceGet(str, tmp0);
      if (c === _Char___init__impl__6a9atx(123)) {
        if (pos >= str.length)
          break loop;
        var tmp1 = pos;
        pos = tmp1 + 1 | 0;
        var c2 = charSequenceGet(str, tmp1);
        if (c2 === _Char___init__impl__6a9atx(35)) {
          var startPos = pos - 2 | 0;
          if (!(lastPos === startPos)) {
            tokenize$emit(out, context, new TLiteral(substring(str, until(lastPos, startPos))), startPos);
          }
          var endCommentP1 = indexOf(str, '#}', pos);
          var endComment = endCommentP1 >= 0 ? endCommentP1 + 2 | 0 : str.length;
          lastPos = endComment;
          pos = endComment;
        } else if (c2 === _Char___init__impl__6a9atx(123) ? true : c2 === _Char___init__impl__6a9atx(37)) {
          var startPos_0 = pos - 2 | 0;
          var pos2 = c2 === _Char___init__impl__6a9atx(123) ? indexOf(str, '}}', pos) : indexOf(str, '%}', pos);
          if (pos2 < 0)
            break loop;
          var trimLeft = charSequenceGet(str, pos) === _Char___init__impl__6a9atx(45);
          var trimRight = charSequenceGet(str, pos2 - 1 | 0) === _Char___init__impl__6a9atx(45);
          var p1 = trimLeft ? pos + 1 | 0 : pos;
          var p2 = trimRight ? pos2 - 1 | 0 : pos2;
          // Inline function 'kotlin.text.trim' call
          // Inline function 'kotlin.text.substring' call
          // Inline function 'kotlin.js.asDynamic' call
          var this_0 = str.substring(p1, p2);
          var content = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
          if (!(lastPos === startPos_0)) {
            tokenize$emit(out, context, new TLiteral(substring(str, until(lastPos, startPos_0))), startPos_0);
          }
          var tmp;
          if (c2 === _Char___init__impl__6a9atx(123)) {
            tmp = new TExpr(content);
          } else {
            var parts = split(content, charArrayOf([_Char___init__impl__6a9atx(32)]), VOID, 2);
            var tmp_0 = parts.get_c1px32_k$(0);
            // Inline function 'kotlin.collections.getOrElse' call
            var tmp_1;
            if (1 >= 0 ? 1 <= get_lastIndex(parts) : false) {
              tmp_1 = parts.get_c1px32_k$(1);
            } else {
              // Inline function 'korlibs.template.Companion.tokenize.<anonymous>' call
              tmp_1 = '';
            }
            var tmp$ret$5 = tmp_1;
            tmp = new TTag(tmp_0, tmp$ret$5);
          }
          var token = tmp;
          token.trimLeft_1 = trimLeft;
          token.trimRight_1 = trimRight;
          tokenize$emit(out, context, token, p1);
          pos = pos2 + 2 | 0;
          lastPos = pos;
        }
      }
    }
    // Inline function 'kotlin.text.substring' call
    var startIndex = lastPos;
    var endIndex = str.length;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = str.substring(startIndex, endIndex);
    tokenize$emit(out, context, new TLiteral(tmp$ret$7), lastPos);
    var iterator = out.iterator_jk1svi_k$();
    var index = 0;
    while (iterator.hasNext_bitz1p_k$()) {
      var n = index;
      index = index + 1 | 0;
      var cur = iterator.next_20eer_k$();
      if (cur instanceof TLiteral) {
        var tmp6_safe_receiver = getOrNull(out, n - 1 | 0);
        var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.trimRight_1;
        var trimStart_0 = tmp7_elvis_lhs == null ? false : tmp7_elvis_lhs;
        var tmp8_safe_receiver = getOrNull(out, n + 1 | 0);
        var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.trimLeft_1;
        var trimEnd_0 = tmp9_elvis_lhs == null ? false : tmp9_elvis_lhs;
        var tmp_2;
        if (trimStart_0 ? trimEnd_0 : false) {
          // Inline function 'kotlin.text.trim' call
          var this_1 = cur.content_1;
          var tmp$ret$8 = toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE()));
          tmp_2 = new TLiteral(tmp$ret$8);
        } else if (trimStart_0) {
          // Inline function 'kotlin.text.trimStart' call
          var this_2 = cur.content_1;
          var tmp$ret$9 = toString(trimStart(isCharSequence(this_2) ? this_2 : THROW_CCE()));
          tmp_2 = new TLiteral(tmp$ret$9);
        } else if (trimEnd_0) {
          // Inline function 'kotlin.text.trimEnd' call
          var this_3 = cur.content_1;
          var tmp$ret$10 = toString(trimEnd(isCharSequence(this_3) ? this_3 : THROW_CCE()));
          tmp_2 = new TLiteral(tmp$ret$10);
        } else {
          tmp_2 = cur;
        }
        out.set_82063s_k$(n, tmp_2);
      }
    }
    return out;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function KorteToken() {
    Companion_getInstance_2();
    this.trimLeft_1 = false;
    this.trimRight_1 = false;
  }
  protoOf(KorteToken).set_trimLeft_mr7h0x_k$ = function (_set____db54di) {
    this.trimLeft_1 = _set____db54di;
  };
  protoOf(KorteToken).get_trimLeft_6v7pwu_k$ = function () {
    return this.trimLeft_1;
  };
  protoOf(KorteToken).set_trimRight_poahvc_k$ = function (_set____db54di) {
    this.trimRight_1 = _set____db54di;
  };
  protoOf(KorteToken).get_trimRight_b26pd_k$ = function () {
    return this.trimRight_1;
  };
  function KorteTemplates$cache$slambda($callback, resultContinuation) {
    this.$callback_1 = $callback;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteTemplates$cache$slambda).invoke_qawe5o_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplates$cache$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_qawe5o_k$($completion);
  };
  protoOf(KorteTemplates$cache$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$callback_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(KorteTemplates$cache$slambda).create_d196fn_k$ = function (completion) {
    return new KorteTemplates$cache$slambda(this.$callback_1, completion);
  };
  function KorteTemplates$cache$slambda_0($callback, resultContinuation) {
    var i = new KorteTemplates$cache$slambda($callback, resultContinuation);
    var l = function ($completion) {
      return i.invoke_qawe5o_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function KorteTemplates$getInclude$slambda($name, this$0, resultContinuation) {
    this.$name_1 = $name;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteTemplates$getInclude$slambda).invoke_qawe5o_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplates$getInclude$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_qawe5o_k$($completion);
  };
  protoOf(KorteTemplates$getInclude$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = newGetSure(this.this$0__1.includes_1, this.$name_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.ARGUMENT1__1 = new KorteTemplate(this.$name_1, this.this$0__1, this.ARGUMENT0__1, this.this$0__1.config_1);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.ARGUMENT1__1.init_h7qz2s_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(KorteTemplates$getInclude$slambda).create_d196fn_k$ = function (completion) {
    return new KorteTemplates$getInclude$slambda(this.$name_1, this.this$0__1, completion);
  };
  function KorteTemplates$getInclude$slambda_0($name, this$0, resultContinuation) {
    var i = new KorteTemplates$getInclude$slambda($name, this$0, resultContinuation);
    var l = function ($completion) {
      return i.invoke_qawe5o_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function KorteTemplates$getLayout$slambda($name, this$0, resultContinuation) {
    this.$name_1 = $name;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteTemplates$getLayout$slambda).invoke_qawe5o_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplates$getLayout$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_qawe5o_k$($completion);
  };
  protoOf(KorteTemplates$getLayout$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = newGetSure(this.this$0__1.layouts_1, this.$name_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.ARGUMENT1__1 = new KorteTemplate(this.$name_1, this.this$0__1, this.ARGUMENT0__1, this.this$0__1.config_1);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.ARGUMENT1__1.init_h7qz2s_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(KorteTemplates$getLayout$slambda).create_d196fn_k$ = function (completion) {
    return new KorteTemplates$getLayout$slambda(this.$name_1, this.this$0__1, completion);
  };
  function KorteTemplates$getLayout$slambda_0($name, this$0, resultContinuation) {
    var i = new KorteTemplates$getLayout$slambda($name, this$0, resultContinuation);
    var l = function ($completion) {
      return i.invoke_qawe5o_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function KorteTemplates$get$slambda($name, this$0, resultContinuation) {
    this.$name_1 = $name;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteTemplates$get$slambda).invoke_qawe5o_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplates$get$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_qawe5o_k$($completion);
  };
  protoOf(KorteTemplates$get$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = newGetSure(this.this$0__1.root_1, this.$name_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.ARGUMENT1__1 = new KorteTemplate(this.$name_1, this.this$0__1, this.ARGUMENT0__1, this.this$0__1.config_1);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.ARGUMENT1__1.init_h7qz2s_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(KorteTemplates$get$slambda).create_d196fn_k$ = function (completion) {
    return new KorteTemplates$get$slambda(this.$name_1, this.this$0__1, completion);
  };
  function KorteTemplates$get$slambda_0($name, this$0, resultContinuation) {
    var i = new KorteTemplates$get$slambda($name, this$0, resultContinuation);
    var l = function ($completion) {
      return i.invoke_qawe5o_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $cacheCOROUTINE$15(_this__u8e3s4, name, callback, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.name_1 = name;
    this.callback_1 = callback;
  }
  protoOf($cacheCOROUTINE$15).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            if (this._this__u8e3s4__1.cache_1) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this._this__u8e3s4__1.tcache_1.call_5p9ooh_k$(this.name_1, KorteTemplates$cache$slambda_0(this.callback_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.callback_1(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT0__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $renderCOROUTINE$16(_this__u8e3s4, name, args, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.name_1 = name;
    this.args_1 = args;
  }
  protoOf($renderCOROUTINE$16).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.get_7615j4_k$(this.name_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.ARGUMENT0__1.invoke$default_igo7bq_k$(this.args_1.slice(), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $renderCOROUTINE$17(_this__u8e3s4, name, args, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.name_1 = name;
    this.args_1 = args;
  }
  protoOf($renderCOROUTINE$17).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.get_7615j4_k$(this.name_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.template0__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.template0__1.invoke$default_ies3u7_k$(this.args_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var renderered = suspendResult;
            return renderered;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $prenderCOROUTINE$18(_this__u8e3s4, name, args, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.name_1 = name;
    this.args_1 = args;
  }
  protoOf($prenderCOROUTINE$18).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.get_7615j4_k$(this.name_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.ARGUMENT0__1.prender$default_nnzdrr_k$(this.args_1.slice(), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $prenderCOROUTINE$19(_this__u8e3s4, name, args, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.name_1 = name;
    this.args_1 = args;
  }
  protoOf($prenderCOROUTINE$19).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.get_7615j4_k$(this.name_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.ARGUMENT0__1.prender$default_1gjvaa_k$(this.args_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function KorteTemplates(root, includes, layouts, config, cache) {
    includes = includes === VOID ? root : includes;
    layouts = layouts === VOID ? root : layouts;
    config = config === VOID ? new KorteTemplateConfig() : config;
    cache = cache === VOID ? true : cache;
    this.root_1 = root;
    this.includes_1 = includes;
    this.layouts_1 = layouts;
    this.config_1 = config;
    this.cache_1 = cache;
    this.tcache_1 = new KorteAsyncCache();
  }
  protoOf(KorteTemplates).set_root_7dayjp_k$ = function (_set____db54di) {
    this.root_1 = _set____db54di;
  };
  protoOf(KorteTemplates).get_root_wott0r_k$ = function () {
    return this.root_1;
  };
  protoOf(KorteTemplates).set_includes_91vl2c_k$ = function (_set____db54di) {
    this.includes_1 = _set____db54di;
  };
  protoOf(KorteTemplates).get_includes_ub75v0_k$ = function () {
    return this.includes_1;
  };
  protoOf(KorteTemplates).set_layouts_z17tdk_k$ = function (_set____db54di) {
    this.layouts_1 = _set____db54di;
  };
  protoOf(KorteTemplates).get_layouts_kr5wg_k$ = function () {
    return this.layouts_1;
  };
  protoOf(KorteTemplates).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(KorteTemplates).set_cache_fiz0nk_k$ = function (_set____db54di) {
    this.cache_1 = _set____db54di;
  };
  protoOf(KorteTemplates).get_cache_ipl461_k$ = function () {
    return this.cache_1;
  };
  protoOf(KorteTemplates).get_tcache_jv3xqv_k$ = function () {
    return this.tcache_1;
  };
  protoOf(KorteTemplates).invalidateCache_fgoy4p_k$ = function () {
    this.tcache_1.invalidateAll_yol1g6_k$();
  };
  protoOf(KorteTemplates).cache_hfy5pr_k$ = function (name, callback, $completion) {
    var tmp = new $cacheCOROUTINE$15(this, name, callback, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplates).getInclude_c4y4ik_k$ = function (name, $completion) {
    var tmp = 'include/' + name;
    return this.cache_hfy5pr_k$(tmp, KorteTemplates$getInclude$slambda_0(name, this, null), $completion);
  };
  protoOf(KorteTemplates).getLayout_xcha5y_k$ = function (name, $completion) {
    var tmp = 'layout/' + name;
    return this.cache_hfy5pr_k$(tmp, KorteTemplates$getLayout$slambda_0(name, this, null), $completion);
  };
  protoOf(KorteTemplates).get_7615j4_k$ = function (name, $completion) {
    var tmp = 'base/' + name;
    return this.cache_hfy5pr_k$(tmp, KorteTemplates$get$slambda_0(name, this, null), $completion);
  };
  protoOf(KorteTemplates).render_tt9p1z_k$ = function (name, args, $completion) {
    var tmp = new $renderCOROUTINE$16(this, name, args, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplates).render_mvnv4u_k$ = function (name, args, $completion) {
    var tmp = new $renderCOROUTINE$17(this, name, args, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplates).prender_8d1jb2_k$ = function (name, args, $completion) {
    var tmp = new $prenderCOROUTINE$18(this, name, args, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteTemplates).prender_40bzt5_k$ = function (name, args, $completion) {
    var tmp = new $prenderCOROUTINE$19(this, name, args, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function KorteTemplateContent$_init_$lambda_ilnnsb(it) {
    return it;
  }
  function KorteTemplateContent(text, contentType, chunkProcessor) {
    contentType = contentType === VOID ? null : contentType;
    var tmp;
    if (chunkProcessor === VOID) {
      tmp = KorteTemplateContent$_init_$lambda_ilnnsb;
    } else {
      tmp = chunkProcessor;
    }
    chunkProcessor = tmp;
    this.text_1 = text;
    this.contentType_1 = contentType;
    this.chunkProcessor_1 = chunkProcessor;
  }
  protoOf(KorteTemplateContent).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(KorteTemplateContent).get_contentType_7git4a_k$ = function () {
    return this.contentType_1;
  };
  protoOf(KorteTemplateContent).get_chunkProcessor_xytu1e_k$ = function () {
    return this.chunkProcessor_1;
  };
  function KorteFilePosContext$row0$delegate$lambda(this$0) {
    return function () {
      return this$0.file_1.findRow0At_i3cm7e_k$(this$0.pos_1);
    };
  }
  function KorteFilePosContext(file, pos) {
    this.file_1 = file;
    this.pos_1 = pos;
    var tmp = this;
    tmp.row0$delegate_1 = lazy(KorteFilePosContext$row0$delegate$lambda(this));
  }
  protoOf(KorteFilePosContext).get_file_wom0n9_k$ = function () {
    return this.file_1;
  };
  protoOf(KorteFilePosContext).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(KorteFilePosContext).get_fileName_r258mo_k$ = function () {
    return this.file_1.fileName_1;
  };
  protoOf(KorteFilePosContext).get_fileContent_9zx8gc_k$ = function () {
    return this.file_1.fileContent_1;
  };
  protoOf(KorteFilePosContext).get_row0_wott5r_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.row0$delegate_1;
    row0$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(KorteFilePosContext).get_row_18iwsv_k$ = function () {
    return this.get_row0_wott5r_k$() + 1 | 0;
  };
  protoOf(KorteFilePosContext).get_column0_gyzrg1_k$ = function () {
    return this.pos_1 - this.file_1.get_lineOffsets_5b8trx_k$().get_c1px32_k$(this.get_row0_wott5r_k$()) | 0;
  };
  protoOf(KorteFilePosContext).get_column_c05ahr_k$ = function () {
    return this.get_column0_gyzrg1_k$() + 1 | 0;
  };
  protoOf(KorteFilePosContext).withPosAdd_pw7gnv_k$ = function (add) {
    return this.copy$default_fbx5md_k$(VOID, this.pos_1 + add | 0);
  };
  protoOf(KorteFilePosContext).exception_kh9cqz_k$ = function (msg) {
    korteException(msg, this);
  };
  protoOf(KorteFilePosContext).toString = function () {
    return this.get_fileName_r258mo_k$() + ':' + this.get_row_18iwsv_k$() + ':' + this.get_column_c05ahr_k$();
  };
  protoOf(KorteFilePosContext).component1_7eebsc_k$ = function () {
    return this.file_1;
  };
  protoOf(KorteFilePosContext).component2_7eebsb_k$ = function () {
    return this.pos_1;
  };
  protoOf(KorteFilePosContext).copy_qz363l_k$ = function (file, pos) {
    return new KorteFilePosContext(file, pos);
  };
  protoOf(KorteFilePosContext).copy$default_fbx5md_k$ = function (file, pos, $super) {
    file = file === VOID ? this.file_1 : file;
    pos = pos === VOID ? this.pos_1 : pos;
    return $super === VOID ? this.copy_qz363l_k$(file, pos) : $super.copy_qz363l_k$.call(this, file, pos);
  };
  protoOf(KorteFilePosContext).hashCode = function () {
    var result = this.file_1.hashCode();
    result = imul(result, 31) + this.pos_1 | 0;
    return result;
  };
  protoOf(KorteFilePosContext).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KorteFilePosContext))
      return false;
    var tmp0_other_with_cast = other instanceof KorteFilePosContext ? other : THROW_CCE();
    if (!this.file_1.equals(tmp0_other_with_cast.file_1))
      return false;
    if (!(this.pos_1 === tmp0_other_with_cast.pos_1))
      return false;
    return true;
  };
  function Companion_2() {
    Companion_instance_2 = this;
    this.DUMMY_1 = new KorteFileContext('unknown', '');
  }
  protoOf(Companion_2).get_DUMMY_i8bcyn_k$ = function () {
    return this.DUMMY_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function KorteFileContext$lines$delegate$lambda(this$0) {
    return function () {
      return split_0(this$0.fileContent_1, ['\n']);
    };
  }
  function KorteFileContext$lineOffsets$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.apply' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'korlibs.template.KorteFileContext.lineOffsets$delegate.<anonymous>.<anonymous>' call
      var offset = 0;
      var tmp0_iterator = this$0.get_lines_iuolhy_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var line = tmp0_iterator.next_20eer_k$();
        this_0.add_utx5q5_k$(offset);
        offset = offset + line.length | 0;
      }
      this_0.add_utx5q5_k$(this$0.fileContent_1.length);
      return this_0;
    };
  }
  function KorteFileContext(fileName, fileContent) {
    Companion_getInstance_3();
    this.fileName_1 = fileName;
    this.fileContent_1 = fileContent;
    var tmp = this;
    tmp.lines$delegate_1 = lazy(KorteFileContext$lines$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.lineOffsets$delegate_1 = lazy(KorteFileContext$lineOffsets$delegate$lambda(this));
  }
  protoOf(KorteFileContext).get_fileName_r258mo_k$ = function () {
    return this.fileName_1;
  };
  protoOf(KorteFileContext).get_fileContent_9zx8gc_k$ = function () {
    return this.fileContent_1;
  };
  protoOf(KorteFileContext).get_lines_iuolhy_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.lines$delegate_1;
    lines$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(KorteFileContext).get_lineOffsets_5b8trx_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.lineOffsets$delegate_1;
    lineOffsets$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(KorteFileContext).findRow0At_i3cm7e_k$ = function (pos) {
    var inductionVariable = 0;
    var last = this.get_lineOffsets_5b8trx_k$().get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable < last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var start = this.get_lineOffsets_5b8trx_k$().get_c1px32_k$(n);
        var end = this.get_lineOffsets_5b8trx_k$().get_c1px32_k$(n + 1 | 0);
        if (start <= pos ? pos < end : false)
          return n;
      }
       while (inductionVariable < last);
    return -1;
  };
  protoOf(KorteFileContext).component1_7eebsc_k$ = function () {
    return this.fileName_1;
  };
  protoOf(KorteFileContext).component2_7eebsb_k$ = function () {
    return this.fileContent_1;
  };
  protoOf(KorteFileContext).copy_plwnsl_k$ = function (fileName, fileContent) {
    return new KorteFileContext(fileName, fileContent);
  };
  protoOf(KorteFileContext).copy$default_ej5lvt_k$ = function (fileName, fileContent, $super) {
    fileName = fileName === VOID ? this.fileName_1 : fileName;
    fileContent = fileContent === VOID ? this.fileContent_1 : fileContent;
    return $super === VOID ? this.copy_plwnsl_k$(fileName, fileContent) : $super.copy_plwnsl_k$.call(this, fileName, fileContent);
  };
  protoOf(KorteFileContext).toString = function () {
    return 'KorteFileContext(fileName=' + this.fileName_1 + ', fileContent=' + this.fileContent_1 + ')';
  };
  protoOf(KorteFileContext).hashCode = function () {
    var result = getStringHashCode(this.fileName_1);
    result = imul(result, 31) + getStringHashCode(this.fileContent_1) | 0;
    return result;
  };
  protoOf(KorteFileContext).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KorteFileContext))
      return false;
    var tmp0_other_with_cast = other instanceof KorteFileContext ? other : THROW_CCE();
    if (!(this.fileName_1 === tmp0_other_with_cast.fileName_1))
      return false;
    if (!(this.fileContent_1 === tmp0_other_with_cast.fileContent_1))
      return false;
    return true;
  };
  function Mixin() {
    this.file_1 = Companion_getInstance_3().DUMMY_1;
    this.pos_1 = -1;
  }
  protoOf(Mixin).set_file_aztlmr_k$ = function (_set____db54di) {
    this.file_1 = _set____db54di;
  };
  protoOf(Mixin).get_file_wom0n9_k$ = function () {
    return this.file_1;
  };
  protoOf(Mixin).set_pos_tfwdvz_k$ = function (_set____db54di) {
    this.pos_1 = _set____db54di;
  };
  protoOf(Mixin).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  function KorteTokenContext() {
  }
  function KorteNewTemplateProvider() {
  }
  function newGetSure(_this__u8e3s4, template, $completion) {
    var tmp = new $newGetSureCOROUTINE$20(_this__u8e3s4, template, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function korteException(msg, context) {
    throw new KorteException(msg, context);
  }
  function NotFoundException(template) {
    RuntimeException_init_$Init$("Can't find template '" + template + "'", this);
    captureStack(this, NotFoundException);
    this.template_1 = template;
  }
  protoOf(NotFoundException).get_template_hdczer_k$ = function () {
    return this.template_1;
  };
  function $newGetCOROUTINE$21(_this__u8e3s4, template, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.template_1 = template;
  }
  protoOf($newGetCOROUTINE$21).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.get_3l5a7q_k$(this.template_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              tmp_0 = new KorteTemplateContent(tmp0_safe_receiver);
            }

            return tmp_0;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function KorteTemplateProvider() {
  }
  function KorteException(msg, context) {
    RuntimeException_init_$Init$_0(this);
    captureStack(this, KorteException);
    this.msg_1 = msg;
    this.context_1 = context;
  }
  protoOf(KorteException).get_msg_18j0fc_k$ = function () {
    return this.msg_1;
  };
  protoOf(KorteException).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(KorteException).get_message_h23axq_k$ = function () {
    return this.msg_1 + ' at ' + this.context_1;
  };
  function $newGetSureCOROUTINE$20(_this__u8e3s4, template, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.template_1 = template;
  }
  protoOf($newGetSureCOROUTINE$20).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.newGet_qfpvju_k$(this.template_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              throw new NotFoundException(this.template_1);
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            return tmp_0;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function tokens$factory() {
    return getPropertyCallableRef('tokens', 1, KProperty1, function (receiver) {
      return receiver.get_tokens_k1vwdf_k$();
    }, null);
  }
  function expr$factory() {
    return getPropertyCallableRef('expr', 1, KProperty1, function (receiver) {
      return receiver.get_expr_wolovy_k$();
    }, null);
  }
  function row0$factory() {
    return getPropertyCallableRef('row0', 1, KProperty1, function (receiver) {
      return receiver.get_row0_wott5r_k$();
    }, null);
  }
  function lines$factory() {
    return getPropertyCallableRef('lines', 1, KProperty1, function (receiver) {
      return receiver.get_lines_iuolhy_k$();
    }, null);
  }
  function lineOffsets$factory() {
    return getPropertyCallableRef('lineOffsets', 1, KProperty1, function (receiver) {
      return receiver.get_lineOffsets_5b8trx_k$();
    }, null);
  }
  function set_debugPrintln(_this__u8e3s4, _set____db54di) {
    _init_properties_KorteDefaults_kt__icmku9();
    var this_0 = debugPrintln$delegate;
    var property = debugPrintln$factory();
    var this_1 = this_0.get_getExtraMap_ic4f21_k$()(_this__u8e3s4);
    var tmp0_elvis_lhs = this_0.get_name_woqyms_k$();
    var key = tmp0_elvis_lhs == null ? property.callableName : tmp0_elvis_lhs;
    this_1.put_4fpzoq_k$(key, _set____db54di);
    return Unit_getInstance();
  }
  function get_debugPrintln(_this__u8e3s4) {
    _init_properties_KorteDefaults_kt__icmku9();
    // Inline function 'korlibs.template.internal.korteExtraProperty.getValue' call
    var this_0 = debugPrintln$delegate;
    var property = debugPrintln$factory_0();
    var tmp = this_0.get_getExtraMap_ic4f21_k$()(_this__u8e3s4);
    var tmp0_elvis_lhs = this_0.get_name_woqyms_k$();
    var tmp_0 = tmp.get_wei43m_k$(tmp0_elvis_lhs == null ? property.callableName : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    return tmp1_elvis_lhs == null ? this_0.get_default_qtagd4_k$()() : tmp1_elvis_lhs;
  }
  var debugPrintln$delegate;
  function KorteDefaultFunctions$Parent$slambda$slambda($out, resultContinuation) {
    this.$out_1 = $out;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFunctions$Parent$slambda$slambda).invoke_hafcq3_k$ = function (it, $completion) {
    var tmp = this.create_99ct7z_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFunctions$Parent$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_hafcq3_k$((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFunctions$Parent$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.$out_1._v = this.$out_1._v + this.it_1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFunctions$Parent$slambda$slambda).create_99ct7z_k$ = function (it, completion) {
    var i = new KorteDefaultFunctions$Parent$slambda$slambda(this.$out_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(KorteDefaultFunctions$Parent$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_99ct7z_k$((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFunctions$Parent$slambda$slambda_0($out, resultContinuation) {
    var i = new KorteDefaultFunctions$Parent$slambda$slambda($out, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_hafcq3_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFunctions$Cycle$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFunctions$Cycle$slambda).invoke_gwkxz_k$ = function ($this$$receiver, args, $completion) {
    var tmp = this.create_33su0d_k$($this$$receiver, args, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFunctions$Cycle$slambda).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = p1 instanceof EvalContext ? p1 : THROW_CCE();
    return this.invoke_gwkxz_k$(tmp, (!(p2 == null) ? isInterface(p2, List) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFunctions$Cycle$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var list = this.$this$$receiver_1.toDynamicList_34vdgv_k$(getOrNull(this.args_1, 0));
          var index = this.$this$$receiver_1.toDynamicInt_6gqvkq_k$(getOrNull(this.args_1, 1));
          return list.get_c1px32_k$(umod(index, list.get_size_woubt6_k$()));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFunctions$Cycle$slambda).create_33su0d_k$ = function ($this$$receiver, args, completion) {
    var i = new KorteDefaultFunctions$Cycle$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    i.args_1 = args;
    return i;
  };
  function KorteDefaultFunctions$Cycle$slambda_0(resultContinuation) {
    var i = new KorteDefaultFunctions$Cycle$slambda(resultContinuation);
    var l = function ($this$$receiver, args, $completion) {
      return i.invoke_gwkxz_k$($this$$receiver, args, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function KorteDefaultFunctions$Range$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFunctions$Range$slambda).invoke_gwkxz_k$ = function ($this$$receiver, args, $completion) {
    var tmp = this.create_33su0d_k$($this$$receiver, args, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFunctions$Range$slambda).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = p1 instanceof EvalContext ? p1 : THROW_CCE();
    return this.invoke_gwkxz_k$(tmp, (!(p2 == null) ? isInterface(p2, List) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFunctions$Range$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var left = getOrNull(this.args_1, 0);
          var right = getOrNull(this.args_1, 1);
          var tmp0_elvis_lhs = getOrNull(this.args_1, 2);
          var step_0 = this.$this$$receiver_1.toDynamicInt_6gqvkq_k$(tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs);
          var tmp_0;
          var tmp_1;
          if (isNumber(left)) {
            tmp_1 = true;
          } else {
            tmp_1 = isNumber(right);
          }
          if (tmp_1) {
            var l = this.$this$$receiver_1.toDynamicInt_6gqvkq_k$(left);
            var r = this.$this$$receiver_1.toDynamicInt_6gqvkq_k$(right);
            tmp_0 = toList(step(numberRangeToNumber(l, r), step_0));
          } else {
            var reason = "Unsupported '" + toString_0(left) + "'/'" + toString_0(right) + "' for ranges";
            throw new NotImplementedError('An operation is not implemented: ' + reason);
          }
          return tmp_0;
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFunctions$Range$slambda).create_33su0d_k$ = function ($this$$receiver, args, completion) {
    var i = new KorteDefaultFunctions$Range$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    i.args_1 = args;
    return i;
  };
  function KorteDefaultFunctions$Range$slambda_0(resultContinuation) {
    var i = new KorteDefaultFunctions$Range$slambda(resultContinuation);
    var l = function ($this$$receiver, args, $completion) {
      return i.invoke_gwkxz_k$($this$$receiver, args, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function KorteDefaultFunctions$Parent$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFunctions$Parent$slambda).invoke_gwkxz_k$ = function ($this$$receiver, it, $completion) {
    var tmp = this.create_33su0d_k$($this$$receiver, it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFunctions$Parent$slambda).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = p1 instanceof EvalContext ? p1 : THROW_CCE();
    return this.invoke_gwkxz_k$(tmp, (!(p2 == null) ? isInterface(p2, List) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFunctions$Parent$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(7);
            var tmp_0 = this;
            var tmp0_safe_receiver = this.$this$$receiver_1.get_currentBlock_se15nh_k$();
            tmp_0.blockName0__1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_name_woqyms_k$();
            if (!(this.blockName0__1 == null)) {
              var tmp_1 = this;
              tmp_1.this2__1 = this.$this$$receiver_1;
              var tmp_2 = this;
              tmp_2.this3__1 = this.this2__1;
              var tmp_3 = this;
              tmp_3.this4__1 = this.this3__1;
              var tmp_4 = this;
              tmp_4.$this$run5__1 = this.this4__1;
              this.out6__1 = {_v: ''};
              this.old7__1 = this.$this$run5__1.get_write_j0vzjq_k$();
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            } else {
              var tmp_5 = this;
              tmp_5.WHEN_RESULT1__1 = '';
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

          case 1:
            this.set_exceptionState_fex74n_k$(6);
            this.$this$run5__1.set_write_xvrr5r_k$(KorteDefaultFunctions$Parent$slambda$slambda_0(this.out6__1, null));
            var tmp_6 = this;
            var tmp0_safe_receiver_0 = this.$this$$receiver_1.get_currentBlock_se15nh_k$();
            tmp_6.tmp1_safe_receiver9__1 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.get_parent_hy4reb_k$();
            if (this.tmp1_safe_receiver9__1 == null) {
              this.WHEN_RESULT10__1 = null;
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this.tmp1_safe_receiver9__1.eval_vdy2zv_k$(this.$this$$receiver_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            var tmp_7 = this;
            tmp_7.WHEN_RESULT10__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            var tmp_8 = this;
            tmp_8.tmp$ret$08__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(7);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.set_exceptionState_fex74n_k$(7);
            this.$this$run5__1.set_write_xvrr5r_k$(this.old7__1);
            var ARGUMENT = this.out6__1._v;
            this.WHEN_RESULT1__1 = new KorteRawString(ARGUMENT);
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            return this.WHEN_RESULT1__1;
          case 6:
            this.set_exceptionState_fex74n_k$(7);
            var t = this.get_exception_x0n6w6_k$();
            this.$this$run5__1.set_write_xvrr5r_k$(this.old7__1);
            throw t;
          case 7:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(KorteDefaultFunctions$Parent$slambda).create_33su0d_k$ = function ($this$$receiver, it, completion) {
    var i = new KorteDefaultFunctions$Parent$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    i.it_1 = it;
    return i;
  };
  function KorteDefaultFunctions$Parent$slambda_0(resultContinuation) {
    var i = new KorteDefaultFunctions$Parent$slambda(resultContinuation);
    var l = function ($this$$receiver, it, $completion) {
      return i.invoke_gwkxz_k$($this$$receiver, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function KorteDefaultFunctions() {
    KorteDefaultFunctions_instance = this;
    var tmp = this;
    tmp.Cycle_1 = new KorteFunction('cycle', KorteDefaultFunctions$Cycle$slambda_0(null));
    var tmp_0 = this;
    tmp_0.Range_1 = new KorteFunction('range', KorteDefaultFunctions$Range$slambda_0(null));
    var tmp_1 = this;
    tmp_1.Parent_1 = new KorteFunction('parent', KorteDefaultFunctions$Parent$slambda_0(null));
    this.ALL_1 = listOf([this.Cycle_1, this.Range_1, this.Parent_1]);
  }
  protoOf(KorteDefaultFunctions).get_Cycle_i8f0yl_k$ = function () {
    return this.Cycle_1;
  };
  protoOf(KorteDefaultFunctions).get_Range_ig8u7o_k$ = function () {
    return this.Range_1;
  };
  protoOf(KorteDefaultFunctions).get_Parent_2sous3_k$ = function () {
    return this.Parent_1;
  };
  protoOf(KorteDefaultFunctions).get_ALL_18jy08_k$ = function () {
    return this.ALL_1;
  };
  var KorteDefaultFunctions_instance;
  function KorteDefaultFunctions_getInstance() {
    if (KorteDefaultFunctions_instance == null)
      new KorteDefaultFunctions();
    return KorteDefaultFunctions_instance;
  }
  function KorteDefaultFilters$Join$slambda$lambda($this_$receiver) {
    return function (it) {
      return $this_$receiver.toDynamicString_9srrng_k$(it);
    };
  }
  function KorteDefaultFilters$Sort$slambda$lambda($this_$receiver) {
    return function (a, b) {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      // Inline function 'korlibs.template.KorteDefaultFilters.Sort.<anonymous>.<anonymous>' call
      var tmp = $this_$receiver.toDynamicString_9srrng_k$(a);
      // Inline function 'korlibs.template.KorteDefaultFilters.Sort.<anonymous>.<anonymous>' call
      var tmp$ret$1 = $this_$receiver.toDynamicString_9srrng_k$(b);
      return compareValues(tmp, tmp$ret$1);
    };
  }
  function KorteDefaultFilters$Sort$slambda$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'korlibs.template.KorteDefaultFilters.Sort.<anonymous>.<anonymous>' call
    var tmp = a.get_second_jf7fjx_k$();
    // Inline function 'korlibs.template.KorteDefaultFilters.Sort.<anonymous>.<anonymous>' call
    var tmp$ret$1 = b.get_second_jf7fjx_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  function KorteDefaultFilters$Capitalize$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Capitalize$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Capitalize$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Capitalize$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var this_0 = this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$());
          return capitalize(this_0.toLowerCase());
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Capitalize$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Capitalize$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Capitalize$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Capitalize$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Capitalize$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Join$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Join$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Join$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Join$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp_0 = this.$this$$receiver_1.toDynamicList_34vdgv_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$());
          var tmp_1 = this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0));
          return joinToString(tmp_0, tmp_1, VOID, VOID, VOID, VOID, KorteDefaultFilters$Join$slambda$lambda(this.$this$$receiver_1));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Join$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Join$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Join$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Join$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Join$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$First$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$First$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$First$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$First$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return firstOrNull(this.$this$$receiver_1.toDynamicList_34vdgv_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$First$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$First$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$First$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$First$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$First$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Last$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Last$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Last$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Last$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return lastOrNull(this.$this$$receiver_1.toDynamicList_34vdgv_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Last$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Last$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Last$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Last$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Last$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Split$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Split$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Split$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Split$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return split_0(this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()), [this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0))]);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Split$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Split$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Split$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Split$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Split$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Concat$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Concat$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Concat$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Concat$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()) + this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Concat$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Concat$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Concat$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Concat$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Concat$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Length$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Length$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Length$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Length$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return this.$this$$receiver_1.dynamicLength_vf561g_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$());
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Length$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Length$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Length$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Length$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Length$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Quote$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Quote$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Quote$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Quote$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return quote(this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Quote$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Quote$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Quote$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Quote$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Quote$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Raw$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Raw$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Raw$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Raw$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return new KorteRawString(this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Raw$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Raw$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Raw$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Raw$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Raw$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Replace$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Replace$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Replace$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Replace$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return replace(this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()), this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0)), this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(1)));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Replace$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Replace$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Replace$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Replace$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Replace$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Reverse$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Reverse$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Reverse$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Reverse$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp_0 = this.$this$$receiver_1.get_subject_tmjbgd_k$();
          var tmp0_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : null;
          var tmp_1;
          if (tmp0_safe_receiver == null) {
            tmp_1 = null;
          } else {
            tmp_1 = toString(reversed(isCharSequence(tmp0_safe_receiver) ? tmp0_safe_receiver : THROW_CCE()));
          }
          var tmp1_elvis_lhs = tmp_1;
          return tmp1_elvis_lhs == null ? reversed_0(this.$this$$receiver_1.toDynamicList_34vdgv_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$())) : tmp1_elvis_lhs;
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Reverse$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Reverse$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Reverse$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Reverse$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Reverse$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Slice$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Slice$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Slice$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Slice$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var lengthArg = getOrNull(this.$this$$receiver_1.get_args_woj09y_k$(), 1);
          var start = this.$this$$receiver_1.toDynamicInt_6gqvkq_k$(getOrNull(this.$this$$receiver_1.get_args_woj09y_k$(), 0));
          var tmp1_elvis_lhs = lengthArg == null ? null : this.$this$$receiver_1.toDynamicInt_6gqvkq_k$(lengthArg);
          var length = tmp1_elvis_lhs == null ? this.$this$$receiver_1.dynamicLength_vf561g_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()) : tmp1_elvis_lhs;
          var tmp_0;
          var tmp_1 = this.$this$$receiver_1.get_subject_tmjbgd_k$();
          if (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) {
            var str = this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$());
            tmp_0 = slice_0(str, until(coerceIn(start, 0, str.length), coerceIn(start + length | 0, 0, str.length)));
          } else {
            var list = this.$this$$receiver_1.toDynamicList_34vdgv_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$());
            tmp_0 = slice(list, until(coerceIn(start, 0, list.get_size_woubt6_k$()), coerceIn(start + length | 0, 0, list.get_size_woubt6_k$())));
          }
          return tmp_0;
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Slice$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Slice$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Slice$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Slice$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Slice$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Sort$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Sort$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Sort$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Sort$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            if (this.$this$$receiver_1.get_args_woj09y_k$().isEmpty_y1axqb_k$()) {
              var tmp_0 = this;
              var this_0 = this.$this$$receiver_1.toDynamicList_34vdgv_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$());
              var tmp_1 = KorteDefaultFilters$Sort$slambda$lambda(this.$this$$receiver_1);
              tmp_0.WHEN_RESULT0__1 = sortedWith(this_0, new sam$kotlin_Comparator$0(tmp_1));
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              var tmp_2 = this;
              tmp_2.this1__1 = this.$this$$receiver_1.toDynamicList_34vdgv_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$());
              var tmp_3 = this;
              tmp_3.this2__1 = this.this1__1;
              var tmp_4 = this;
              tmp_4.destination3__1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.this1__1, 10));
              this.tmp0_iterator4__1 = this.this2__1.iterator_jk1svi_k$();
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

          case 1:
            if (!this.tmp0_iterator4__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.item5__1 = this.tmp0_iterator4__1.next_20eer_k$();
            var tmp_5 = this;
            tmp_5.it6__1 = this.item5__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = KorteDynamic2_getInstance().accessAny_aov4i6_k$(this.it6__1, this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0), this.$this$$receiver_1.get_mapper_giyu6i_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = this.$this$$receiver_1.toDynamicString_9srrng_k$(ARGUMENT);
            var ARGUMENT_1 = to(this.it6__1, ARGUMENT_0);
            this.destination3__1.add_utx5q5_k$(ARGUMENT_1);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            var this_1 = this.destination3__1;
            var tmp_6 = KorteDefaultFilters$Sort$slambda$lambda_0;
            var this_2 = sortedWith(this_1, new sam$kotlin_Comparator$0(tmp_6));
            var tmp_7 = this;
            var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
            var tmp0_iterator = this_2.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var item = tmp0_iterator.next_20eer_k$();
              destination.add_utx5q5_k$(item.get_first_irdx8n_k$());
            }

            tmp_7.WHEN_RESULT0__1 = destination;
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            return this.WHEN_RESULT0__1;
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Sort$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Sort$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Sort$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Sort$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Sort$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Trim$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Trim$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Trim$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Trim$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var this_0 = this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$());
          return toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Trim$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Trim$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Trim$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Trim$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Trim$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Lower$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Lower$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Lower$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Lower$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()).toLowerCase();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Lower$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Lower$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Lower$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Lower$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Lower$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Upper$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Upper$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Upper$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Upper$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()).toUpperCase();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Upper$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Upper$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Upper$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Upper$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Upper$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Downcase$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Downcase$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Downcase$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Downcase$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()).toLowerCase();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Downcase$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Downcase$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Downcase$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Downcase$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Downcase$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Upcase$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Upcase$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Upcase$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Upcase$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()).toUpperCase();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Upcase$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Upcase$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Upcase$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Upcase$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Upcase$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Merge$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Merge$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Merge$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Merge$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var arg = getOrNull(this.$this$$receiver_1.get_args_woj09y_k$(), 0);
          return plus(this.$this$$receiver_1.toDynamicList_34vdgv_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()), this.$this$$receiver_1.toDynamicList_34vdgv_k$(arg));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Merge$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Merge$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Merge$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Merge$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Merge$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$JsonEncode$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$JsonEncode$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$JsonEncode$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$JsonEncode$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return Json_stringify(this.$this$$receiver_1.get_subject_tmjbgd_k$());
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$JsonEncode$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$JsonEncode$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$JsonEncode$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$JsonEncode$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$JsonEncode$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Format$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Format$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Format$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Format$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp_0 = this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$());
          var this_0 = this.$this$$receiver_1.get_args_woj09y_k$();
          var tmp_1 = copyToArray(this_0);
          return format(tmp_0, (isArray(tmp_1) ? tmp_1 : THROW_CCE()).slice());
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Format$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Format$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Format$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Format$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Format$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Chunked$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Chunked$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Chunked$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Chunked$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return chunked(this.$this$$receiver_1.toDynamicList_34vdgv_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()), this.$this$$receiver_1.toDynamicInt_6gqvkq_k$(this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0)));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Chunked$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Chunked$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Chunked$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Chunked$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Chunked$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$WhereExp$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$WhereExp$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$WhereExp$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$WhereExp$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(13);
            this.ctx0__1 = this.$this$$receiver_1.get_context_h02k06_k$();
            this.list1__1 = this.$this$$receiver_1.toDynamicList_34vdgv_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$());
            this.itemName2__1 = this.$this$$receiver_1.get_args_woj09y_k$().get_size_woubt6_k$() >= 2 ? this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0)) : 'it';
            this.itemExprStr3__1 = this.$this$$receiver_1.toDynamicString_9srrng_k$(last(this.$this$$receiver_1.get_args_woj09y_k$()));
            this.itemExpr4__1 = Companion_getInstance_5().parse_cgmbyv_k$(this.itemExprStr3__1, new KorteFilePosContext(new KorteFileContext('', this.itemExprStr3__1), 0));
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.this6__1 = this.ctx0__1;
            var tmp_1 = this;
            tmp_1.content7__1 = LinkedHashMap_init_$Create$();
            this.old8__1 = this.this6__1.get_scope_iyfcq3_k$();
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(12);
            this.this6__1.set_scope_wjtu18_k$(new Scope(this.content7__1, this.this6__1.get_mapper_giyu6i_k$(), this.old8__1));
            var tmp_2 = this;
            tmp_2.this11__1 = this.list1__1;
            var tmp_3 = this;
            tmp_3.this12__1 = this.this11__1;
            var tmp_4 = this;
            tmp_4.destination13__1 = ArrayList_init_$Create$();
            this.tmp0_iterator14__1 = this.this12__1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            if (!this.tmp0_iterator14__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            }

            this.element15__1 = this.tmp0_iterator14__1.next_20eer_k$();
            var tmp_5 = this;
            tmp_5.it16__1 = this.element15__1;
            this.set_state_rjd8d0_k$(5);
            suspendResult = this.ctx0__1.get_scope_iyfcq3_k$().set_6km9f_k$(this.itemName2__1, this.it16__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.set_state_rjd8d0_k$(6);
            suspendResult = this.itemExpr4__1.eval_pei61v_k$(this.ctx0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            if (this.$this$$receiver_1.toDynamicBool_bp1ztv_k$(ARGUMENT)) {
              this.destination13__1.add_utx5q5_k$(this.element15__1);
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            }

          case 7:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 8:
            this.tmp$ret$010__1 = this.destination13__1;
            this.set_exceptionState_fex74n_k$(13);
            this.set_state_rjd8d0_k$(9);
            var tmp_6 = this;
            continue $sm;
          case 9:
            var tmp_7 = this.tmp$ret$010__1;
            this.set_exceptionState_fex74n_k$(13);
            this.this6__1.set_scope_wjtu18_k$(this.old8__1);
            this.tmp$ret$45__1 = tmp_7;
            this.set_state_rjd8d0_k$(11);
            continue $sm;
          case 10:
            this.set_exceptionState_fex74n_k$(13);
            this.this6__1.set_scope_wjtu18_k$(this.old8__1);
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(11);
            continue $sm;
          case 11:
            return this.tmp$ret$45__1;
          case 12:
            this.set_exceptionState_fex74n_k$(13);
            var t = this.get_exception_x0n6w6_k$();
            this.this6__1.set_scope_wjtu18_k$(this.old8__1);
            throw t;
          case 13:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 13) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$WhereExp$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$WhereExp$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$WhereExp$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$WhereExp$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$WhereExp$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Where$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Where$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Where$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Where$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.itemName0__1 = this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0);
            this.itemValue1__1 = this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(1);
            var tmp_0 = this;
            tmp_0.this2__1 = this.$this$$receiver_1.toDynamicList_34vdgv_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$());
            var tmp_1 = this;
            tmp_1.this3__1 = this.this2__1;
            var tmp_2 = this;
            tmp_2.destination4__1 = ArrayList_init_$Create$();
            this.tmp0_iterator5__1 = this.this3__1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator5__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.element6__1 = this.tmp0_iterator5__1.next_20eer_k$();
            var tmp_3 = this;
            tmp_3.it7__1 = this.element6__1;
            this.ARGUMENT8__1 = KorteDynamic2_getInstance();
            this.set_state_rjd8d0_k$(2);
            suspendResult = KorteDynamic2_getInstance().accessAny_aov4i6_k$(this.it7__1, this.itemName0__1, this.$this$$receiver_1.get_mapper_giyu6i_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            if (this.ARGUMENT8__1.contains_4q3vs1_k$(ARGUMENT, this.itemValue1__1)) {
              this.destination4__1.add_utx5q5_k$(this.element6__1);
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 4:
            return this.destination4__1;
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Where$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Where$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Where$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Where$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Where$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Map$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Map$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Map$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Map$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.key0__1 = this.$this$$receiver_1.toDynamicString_9srrng_k$(this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0));
            var tmp_0 = this;
            tmp_0.this1__1 = this.$this$$receiver_1.toDynamicList_34vdgv_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$());
            var tmp_1 = this;
            tmp_1.this2__1 = this.this1__1;
            var tmp_2 = this;
            tmp_2.destination3__1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.this1__1, 10));
            this.tmp0_iterator4__1 = this.this2__1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator4__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.item5__1 = this.tmp0_iterator4__1.next_20eer_k$();
            var tmp_3 = this;
            tmp_3.it6__1 = this.item5__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = KorteDynamic2_getInstance().accessAny_aov4i6_k$(this.it6__1, this.key0__1, this.$this$$receiver_1.get_mapper_giyu6i_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.destination3__1.add_utx5q5_k$(ARGUMENT);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            return this.destination3__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Map$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Map$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Map$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Map$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Map$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Size$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Size$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Size$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Size$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return this.$this$$receiver_1.dynamicLength_vf561g_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$());
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Size$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Size$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Size$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Size$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Size$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Uniq$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Uniq$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Uniq$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Uniq$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return distinct(this.$this$$receiver_1.toDynamicList_34vdgv_k$(this.$this$$receiver_1));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Uniq$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Uniq$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Uniq$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Uniq$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Uniq$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Abs$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Abs$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Abs$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Abs$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var subject = this.$this$$receiver_1.get_subject_tmjbgd_k$();
          var tmp_0;
          if (!(subject == null) ? typeof subject === 'number' : false) {
            tmp_0 = abs_0(subject);
          } else {
            if (!(subject == null) ? typeof subject === 'number' : false) {
              tmp_0 = Math.abs(subject);
            } else {
              if (subject instanceof Long) {
                tmp_0 = abs(subject);
              } else {
                var this_0 = this.$this$$receiver_1.toDynamicDouble_6mw6ws_k$(subject);
                tmp_0 = Math.abs(this_0);
              }
            }
          }
          return tmp_0;
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Abs$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Abs$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Abs$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Abs$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Abs$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$AtMost$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$AtMost$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$AtMost$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$AtMost$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var l = this.$this$$receiver_1.toDynamicNumber_1xut8c_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$());
          var r = this.$this$$receiver_1.toDynamicNumber_1xut8c_k$(this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0));
          return this.$this$$receiver_1.compareTo_ncwzf6_k$(l, r) >= 0 ? r : l;
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$AtMost$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$AtMost$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$AtMost$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$AtMost$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$AtMost$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$AtLeast$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$AtLeast$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$AtLeast$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$AtLeast$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var l = this.$this$$receiver_1.toDynamicNumber_1xut8c_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$());
          var r = this.$this$$receiver_1.toDynamicNumber_1xut8c_k$(this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0));
          return this.$this$$receiver_1.compareTo_ncwzf6_k$(l, r) <= 0 ? r : l;
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$AtLeast$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$AtLeast$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$AtLeast$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$AtLeast$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$AtLeast$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Ceil$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Ceil$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Ceil$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Ceil$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var x = numberToDouble(this.$this$$receiver_1.toDynamicNumber_1xut8c_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()));
          return this.$this$$receiver_1.toDynamicCastToType_jtn3mg_k$(Math.ceil(x), this.$this$$receiver_1.get_subject_tmjbgd_k$());
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Ceil$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Ceil$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Ceil$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Ceil$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Ceil$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Floor$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Floor$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Floor$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Floor$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var x = numberToDouble(this.$this$$receiver_1.toDynamicNumber_1xut8c_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()));
          return this.$this$$receiver_1.toDynamicCastToType_jtn3mg_k$(Math.floor(x), this.$this$$receiver_1.get_subject_tmjbgd_k$());
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Floor$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Floor$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Floor$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Floor$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Floor$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Round$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Round$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Round$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Round$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return this.$this$$receiver_1.toDynamicCastToType_jtn3mg_k$(round(numberToDouble(this.$this$$receiver_1.toDynamicNumber_1xut8c_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()))), this.$this$$receiver_1.get_subject_tmjbgd_k$());
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Round$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Round$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Round$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Round$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Round$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Times$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Times$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Times$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Times$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return this.$this$$receiver_1.toDynamicCastToType_jtn3mg_k$(this.$this$$receiver_1.toDynamicDouble_6mw6ws_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()) * this.$this$$receiver_1.toDynamicDouble_6mw6ws_k$(this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0)), this.$this$$receiver_1.combineTypes_d2e0as_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$(), this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0)));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Times$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Times$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Times$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Times$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Times$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Modulo$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Modulo$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Modulo$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Modulo$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return this.$this$$receiver_1.toDynamicCastToType_jtn3mg_k$(this.$this$$receiver_1.toDynamicDouble_6mw6ws_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()) % this.$this$$receiver_1.toDynamicDouble_6mw6ws_k$(this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0)), this.$this$$receiver_1.combineTypes_d2e0as_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$(), this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0)));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Modulo$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Modulo$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Modulo$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Modulo$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Modulo$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$DividedBy$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$DividedBy$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$DividedBy$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$DividedBy$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return this.$this$$receiver_1.toDynamicCastToType_jtn3mg_k$(this.$this$$receiver_1.toDynamicDouble_6mw6ws_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()) / this.$this$$receiver_1.toDynamicDouble_6mw6ws_k$(this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0)), this.$this$$receiver_1.combineTypes_d2e0as_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$(), this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0)));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$DividedBy$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$DividedBy$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$DividedBy$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$DividedBy$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$DividedBy$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Minus$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Minus$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Minus$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Minus$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return this.$this$$receiver_1.toDynamicCastToType_jtn3mg_k$(this.$this$$receiver_1.toDynamicDouble_6mw6ws_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()) - this.$this$$receiver_1.toDynamicDouble_6mw6ws_k$(this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0)), this.$this$$receiver_1.combineTypes_d2e0as_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$(), this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0)));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Minus$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Minus$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Minus$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Minus$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Minus$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Plus$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Plus$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Plus$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Plus$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return this.$this$$receiver_1.toDynamicCastToType_jtn3mg_k$(this.$this$$receiver_1.toDynamicDouble_6mw6ws_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$()) + this.$this$$receiver_1.toDynamicDouble_6mw6ws_k$(this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0)), this.$this$$receiver_1.combineTypes_d2e0as_k$(this.$this$$receiver_1.get_subject_tmjbgd_k$(), this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0)));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Plus$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Plus$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Plus$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Plus$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Plus$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters$Default$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultFilters$Default$slambda).invoke_bdib2f_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_3bm9jz_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultFilters$Default$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_bdib2f_k$(p1 instanceof Ctx ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultFilters$Default$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return ((this.$this$$receiver_1.get_subject_tmjbgd_k$() == null ? true : equals(this.$this$$receiver_1.get_subject_tmjbgd_k$(), false)) ? true : equals(this.$this$$receiver_1.get_subject_tmjbgd_k$(), '')) ? this.$this$$receiver_1.get_args_woj09y_k$().get_c1px32_k$(0) : this.$this$$receiver_1.get_subject_tmjbgd_k$();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultFilters$Default$slambda).create_3bm9jz_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultFilters$Default$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultFilters$Default$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3bm9jz_k$(value instanceof Ctx ? value : THROW_CCE(), completion);
  };
  function KorteDefaultFilters$Default$slambda_0(resultContinuation) {
    var i = new KorteDefaultFilters$Default$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_bdib2f_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultFilters() {
    KorteDefaultFilters_instance = this;
    var tmp = this;
    tmp.Capitalize_1 = new KorteFilter('capitalize', KorteDefaultFilters$Capitalize$slambda_0(null));
    var tmp_0 = this;
    tmp_0.Join_1 = new KorteFilter('join', KorteDefaultFilters$Join$slambda_0(null));
    var tmp_1 = this;
    tmp_1.First_1 = new KorteFilter('first', KorteDefaultFilters$First$slambda_0(null));
    var tmp_2 = this;
    tmp_2.Last_1 = new KorteFilter('last', KorteDefaultFilters$Last$slambda_0(null));
    var tmp_3 = this;
    tmp_3.Split_1 = new KorteFilter('split', KorteDefaultFilters$Split$slambda_0(null));
    var tmp_4 = this;
    tmp_4.Concat_1 = new KorteFilter('concat', KorteDefaultFilters$Concat$slambda_0(null));
    var tmp_5 = this;
    tmp_5.Length_1 = new KorteFilter('length', KorteDefaultFilters$Length$slambda_0(null));
    var tmp_6 = this;
    tmp_6.Quote_1 = new KorteFilter('quote', KorteDefaultFilters$Quote$slambda_0(null));
    var tmp_7 = this;
    tmp_7.Raw_1 = new KorteFilter('raw', KorteDefaultFilters$Raw$slambda_0(null));
    var tmp_8 = this;
    tmp_8.Replace_1 = new KorteFilter('replace', KorteDefaultFilters$Replace$slambda_0(null));
    var tmp_9 = this;
    tmp_9.Reverse_1 = new KorteFilter('reverse', KorteDefaultFilters$Reverse$slambda_0(null));
    var tmp_10 = this;
    tmp_10.Slice_1 = new KorteFilter('slice', KorteDefaultFilters$Slice$slambda_0(null));
    var tmp_11 = this;
    tmp_11.Sort_1 = new KorteFilter('sort', KorteDefaultFilters$Sort$slambda_0(null));
    var tmp_12 = this;
    tmp_12.Trim_1 = new KorteFilter('trim', KorteDefaultFilters$Trim$slambda_0(null));
    var tmp_13 = this;
    tmp_13.Lower_1 = new KorteFilter('lower', KorteDefaultFilters$Lower$slambda_0(null));
    var tmp_14 = this;
    tmp_14.Upper_1 = new KorteFilter('upper', KorteDefaultFilters$Upper$slambda_0(null));
    var tmp_15 = this;
    tmp_15.Downcase_1 = new KorteFilter('downcase', KorteDefaultFilters$Downcase$slambda_0(null));
    var tmp_16 = this;
    tmp_16.Upcase_1 = new KorteFilter('upcase', KorteDefaultFilters$Upcase$slambda_0(null));
    var tmp_17 = this;
    tmp_17.Merge_1 = new KorteFilter('merge', KorteDefaultFilters$Merge$slambda_0(null));
    var tmp_18 = this;
    tmp_18.JsonEncode_1 = new KorteFilter('json_encode', KorteDefaultFilters$JsonEncode$slambda_0(null));
    var tmp_19 = this;
    tmp_19.Format_1 = new KorteFilter('format', KorteDefaultFilters$Format$slambda_0(null));
    var tmp_20 = this;
    tmp_20.Chunked_1 = new KorteFilter('chunked', KorteDefaultFilters$Chunked$slambda_0(null));
    var tmp_21 = this;
    tmp_21.WhereExp_1 = new KorteFilter('where_exp', KorteDefaultFilters$WhereExp$slambda_0(null));
    var tmp_22 = this;
    tmp_22.Where_1 = new KorteFilter('where', KorteDefaultFilters$Where$slambda_0(null));
    var tmp_23 = this;
    tmp_23.Map_1 = new KorteFilter('map', KorteDefaultFilters$Map$slambda_0(null));
    var tmp_24 = this;
    tmp_24.Size_1 = new KorteFilter('size', KorteDefaultFilters$Size$slambda_0(null));
    var tmp_25 = this;
    tmp_25.Uniq_1 = new KorteFilter('uniq', KorteDefaultFilters$Uniq$slambda_0(null));
    var tmp_26 = this;
    tmp_26.Abs_1 = new KorteFilter('abs', KorteDefaultFilters$Abs$slambda_0(null));
    var tmp_27 = this;
    tmp_27.AtMost_1 = new KorteFilter('at_most', KorteDefaultFilters$AtMost$slambda_0(null));
    var tmp_28 = this;
    tmp_28.AtLeast_1 = new KorteFilter('at_least', KorteDefaultFilters$AtLeast$slambda_0(null));
    var tmp_29 = this;
    tmp_29.Ceil_1 = new KorteFilter('ceil', KorteDefaultFilters$Ceil$slambda_0(null));
    var tmp_30 = this;
    tmp_30.Floor_1 = new KorteFilter('floor', KorteDefaultFilters$Floor$slambda_0(null));
    var tmp_31 = this;
    tmp_31.Round_1 = new KorteFilter('round', KorteDefaultFilters$Round$slambda_0(null));
    var tmp_32 = this;
    tmp_32.Times_1 = new KorteFilter('times', KorteDefaultFilters$Times$slambda_0(null));
    var tmp_33 = this;
    tmp_33.Modulo_1 = new KorteFilter('modulo', KorteDefaultFilters$Modulo$slambda_0(null));
    var tmp_34 = this;
    tmp_34.DividedBy_1 = new KorteFilter('divided_by', KorteDefaultFilters$DividedBy$slambda_0(null));
    var tmp_35 = this;
    tmp_35.Minus_1 = new KorteFilter('minus', KorteDefaultFilters$Minus$slambda_0(null));
    var tmp_36 = this;
    tmp_36.Plus_1 = new KorteFilter('plus', KorteDefaultFilters$Plus$slambda_0(null));
    var tmp_37 = this;
    tmp_37.Default_1 = new KorteFilter('default', KorteDefaultFilters$Default$slambda_0(null));
    this.ALL_1 = listOf([this.Capitalize_1, this.Lower_1, this.Upper_1, this.Downcase_1, this.Upcase_1, this.Quote_1, this.Raw_1, this.Replace_1, this.Trim_1, this.Join_1, this.Split_1, this.Concat_1, this.WhereExp_1, this.Where_1, this.First_1, this.Last_1, this.Map_1, this.Size_1, this.Uniq_1, this.Length_1, this.Chunked_1, this.Sort_1, this.Merge_1, this.Reverse_1, this.Slice_1, this.Abs_1, this.AtMost_1, this.AtLeast_1, this.Ceil_1, this.Floor_1, this.Round_1, this.Times_1, this.Modulo_1, this.DividedBy_1, this.Minus_1, this.Plus_1, this.JsonEncode_1, this.Format_1]);
  }
  protoOf(KorteDefaultFilters).get_Capitalize_gelyln_k$ = function () {
    return this.Capitalize_1;
  };
  protoOf(KorteDefaultFilters).get_Join_wo49eb_k$ = function () {
    return this.Join_1;
  };
  protoOf(KorteDefaultFilters).get_First_i9si93_k$ = function () {
    return this.First_1;
  };
  protoOf(KorteDefaultFilters).get_Last_wo598f_k$ = function () {
    return this.Last_1;
  };
  protoOf(KorteDefaultFilters).get_Split_ih266p_k$ = function () {
    return this.Split_1;
  };
  protoOf(KorteDefaultFilters).get_Concat_359ps3_k$ = function () {
    return this.Concat_1;
  };
  protoOf(KorteDefaultFilters).get_Length_yn18v_k$ = function () {
    return this.Length_1;
  };
  protoOf(KorteDefaultFilters).get_Quote_ig1uer_k$ = function () {
    return this.Quote_1;
  };
  protoOf(KorteDefaultFilters).get_Raw_18jkv5_k$ = function () {
    return this.Raw_1;
  };
  protoOf(KorteDefaultFilters).get_Replace_o4txzp_k$ = function () {
    return this.Replace_1;
  };
  protoOf(KorteDefaultFilters).get_Reverse_o1nacn_k$ = function () {
    return this.Reverse_1;
  };
  protoOf(KorteDefaultFilters).get_Slice_igzjux_k$ = function () {
    return this.Slice_1;
  };
  protoOf(KorteDefaultFilters).get_Sort_woa0hz_k$ = function () {
    return this.Sort_1;
  };
  protoOf(KorteDefaultFilters).get_Trim_woaphn_k$ = function () {
    return this.Trim_1;
  };
  protoOf(KorteDefaultFilters).get_Lower_id773s_k$ = function () {
    return this.Lower_1;
  };
  protoOf(KorteDefaultFilters).get_Upper_ii5u8p_k$ = function () {
    return this.Upper_1;
  };
  protoOf(KorteDefaultFilters).get_Downcase_74j3ut_k$ = function () {
    return this.Downcase_1;
  };
  protoOf(KorteDefaultFilters).get_Upcase_5dw7zo_k$ = function () {
    return this.Upcase_1;
  };
  protoOf(KorteDefaultFilters).get_Merge_idki5r_k$ = function () {
    return this.Merge_1;
  };
  protoOf(KorteDefaultFilters).get_JsonEncode_djipqf_k$ = function () {
    return this.JsonEncode_1;
  };
  protoOf(KorteDefaultFilters).get_Format_1q238g_k$ = function () {
    return this.Format_1;
  };
  protoOf(KorteDefaultFilters).get_Chunked_tpiptp_k$ = function () {
    return this.Chunked_1;
  };
  protoOf(KorteDefaultFilters).get_WhereExp_34a9i7_k$ = function () {
    return this.WhereExp_1;
  };
  protoOf(KorteDefaultFilters).get_Where_ij43oe_k$ = function () {
    return this.Where_1;
  };
  protoOf(KorteDefaultFilters).get_Map_18jokt_k$ = function () {
    return this.Map_1;
  };
  protoOf(KorteDefaultFilters).get_Size_wo9w8a_k$ = function () {
    return this.Size_1;
  };
  protoOf(KorteDefaultFilters).get_Uniq_wob9ii_k$ = function () {
    return this.Uniq_1;
  };
  protoOf(KorteDefaultFilters).get_Abs_18jxg7_k$ = function () {
    return this.Abs_1;
  };
  protoOf(KorteDefaultFilters).get_AtMost_416su9_k$ = function () {
    return this.AtMost_1;
  };
  protoOf(KorteDefaultFilters).get_AtLeast_h0mq5p_k$ = function () {
    return this.AtLeast_1;
  };
  protoOf(KorteDefaultFilters).get_Ceil_wnzl2m_k$ = function () {
    return this.Ceil_1;
  };
  protoOf(KorteDefaultFilters).get_Floor_i9ucw3_k$ = function () {
    return this.Floor_1;
  };
  protoOf(KorteDefaultFilters).get_Round_ighxdx_k$ = function () {
    return this.Round_1;
  };
  protoOf(KorteDefaultFilters).get_Times_ihhiil_k$ = function () {
    return this.Times_1;
  };
  protoOf(KorteDefaultFilters).get_Modulo_1l0hwf_k$ = function () {
    return this.Modulo_1;
  };
  protoOf(KorteDefaultFilters).get_DividedBy_fbgsft_k$ = function () {
    return this.DividedBy_1;
  };
  protoOf(KorteDefaultFilters).get_Minus_idmzhj_k$ = function () {
    return this.Minus_1;
  };
  protoOf(KorteDefaultFilters).get_Plus_wo81dv_k$ = function () {
    return this.Plus_1;
  };
  protoOf(KorteDefaultFilters).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  protoOf(KorteDefaultFilters).get_ALL_18jy08_k$ = function () {
    return this.ALL_1;
  };
  var KorteDefaultFilters_instance;
  function KorteDefaultFilters_getInstance() {
    if (KorteDefaultFilters_instance == null)
      new KorteDefaultFilters();
    return KorteDefaultFilters_instance;
  }
  function $evalCOROUTINE$22(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$22).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.$subject_1._v.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.subjectValue0__1 = suspendResult;
            this.tmp0_iterator1__1 = this._this__u8e3s4__1.$cases_1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (!this.tmp0_iterator1__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

            this.tmp1_loop_parameter2__1 = this.tmp0_iterator1__1.next_20eer_k$();
            this.case3__1 = this.tmp1_loop_parameter2__1.component1_7eebsc_k$();
            this.block4__1 = this.tmp1_loop_parameter2__1.component2_7eebsb_k$();
            this.set_state_rjd8d0_k$(3);
            suspendResult = this.case3__1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.ARGUMENT5__1 = suspendResult;
            if (equals(this.subjectValue0__1, this.ARGUMENT5__1)) {
              this.set_state_rjd8d0_k$(5);
              suspendResult = this.block4__1.eval_vdy2zv_k$(this.context_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 4:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            this.tmp2_safe_receiver6__1 = this._this__u8e3s4__1.$defaultCase_1._v;
            if (this.tmp2_safe_receiver6__1 == null) {
              this.WHEN_RESULT7__1 = null;
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(7);
              suspendResult = this.tmp2_safe_receiver6__1.eval_vdy2zv_k$(this.context_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 7:
            var tmp_0 = this;
            tmp_0.WHEN_RESULT7__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 8:
            return Unit_getInstance();
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function KorteDefaultTags$Switch$1$1($subject, $cases, $defaultCase) {
    this.$subject_1 = $subject;
    this.$cases_1 = $cases;
    this.$defaultCase_1 = $defaultCase;
  }
  protoOf(KorteDefaultTags$Switch$1$1).eval_vdy2zv_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$22(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function KorteDefaultTags$BlockTag$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultTags$BlockTag$slambda).invoke_u43smj_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_q8iw67_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultTags$BlockTag$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_u43smj_k$(p1 instanceof BuildContext ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultTags$BlockTag$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var part = first(this.$this$$receiver_1.get_chunks_bwgbzj_k$());
          var tr = part.get_tag_18ivnz_k$().get_tokens_k1vwdf_k$();
          var name = Companion_getInstance_5().parseId_c4d9wk_k$(tr);
          if (charSequenceLength(name) === 0)
            throw IllegalArgumentException_init_$Create$('block without name');
          var contentType = tr.get_hasMore_csdhd2_k$() ? Companion_getInstance_5().parseId_c4d9wk_k$(tr) : null;
          expectEnd(tr);
          this.$this$$receiver_1.get_context_h02k06_k$().get_template_hdczer_k$().addBlock_krezv6_k$(name, part.get_body_wojkyz_k$());
          return new BlockBlock(name, contentType == null ? this.$this$$receiver_1.get_context_h02k06_k$().get_template_hdczer_k$().get_templateContent_wo12nq_k$().get_contentType_7git4a_k$() : contentType);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultTags$BlockTag$slambda).create_q8iw67_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultTags$BlockTag$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultTags$BlockTag$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_q8iw67_k$(value instanceof BuildContext ? value : THROW_CCE(), completion);
  };
  function KorteDefaultTags$BlockTag$slambda_0(resultContinuation) {
    var i = new KorteDefaultTags$BlockTag$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_u43smj_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultTags$Capture$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultTags$Capture$slambda).invoke_u43smj_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_q8iw67_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultTags$Capture$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_u43smj_k$(p1 instanceof BuildContext ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultTags$Capture$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var main = this.$this$$receiver_1.get_chunks_bwgbzj_k$().get_c1px32_k$(0);
          var tr = main.get_tag_18ivnz_k$().get_tokens_k1vwdf_k$();
          var varname = Companion_getInstance_5().parseId_c4d9wk_k$(tr);
          var contentType = tr.get_hasMore_csdhd2_k$() ? Companion_getInstance_5().parseId_c4d9wk_k$(tr) : null;
          expectEnd(tr);
          return new BlockCapture(varname, main.get_body_wojkyz_k$(), contentType);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultTags$Capture$slambda).create_q8iw67_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultTags$Capture$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultTags$Capture$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_q8iw67_k$(value instanceof BuildContext ? value : THROW_CCE(), completion);
  };
  function KorteDefaultTags$Capture$slambda_0(resultContinuation) {
    var i = new KorteDefaultTags$Capture$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_u43smj_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultTags$Debug$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultTags$Debug$slambda).invoke_u43smj_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_q8iw67_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultTags$Debug$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_u43smj_k$(p1 instanceof BuildContext ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultTags$Debug$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return new BlockDebug(this.$this$$receiver_1.get_chunks_bwgbzj_k$().get_c1px32_k$(0).get_tag_18ivnz_k$().get_expr_wolovy_k$());
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultTags$Debug$slambda).create_q8iw67_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultTags$Debug$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultTags$Debug$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_q8iw67_k$(value instanceof BuildContext ? value : THROW_CCE(), completion);
  };
  function KorteDefaultTags$Debug$slambda_0(resultContinuation) {
    var i = new KorteDefaultTags$Debug$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_u43smj_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultTags$Empty$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultTags$Empty$slambda).invoke_u43smj_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_q8iw67_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultTags$Empty$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_u43smj_k$(p1 instanceof BuildContext ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultTags$Empty$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp_0 = Companion_getInstance_1();
          var this_0 = this.$this$$receiver_1.get_chunks_bwgbzj_k$();
          var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
          var tmp0_iterator = this_0.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator.next_20eer_k$();
            destination.add_utx5q5_k$(item.get_body_wojkyz_k$());
          }
          return tmp_0.group_mstilr_k$(destination);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultTags$Empty$slambda).create_q8iw67_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultTags$Empty$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultTags$Empty$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_q8iw67_k$(value instanceof BuildContext ? value : THROW_CCE(), completion);
  };
  function KorteDefaultTags$Empty$slambda_0(resultContinuation) {
    var i = new KorteDefaultTags$Empty$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_u43smj_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultTags$Extends$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultTags$Extends$slambda).invoke_u43smj_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_q8iw67_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultTags$Extends$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_u43smj_k$(p1 instanceof BuildContext ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultTags$Extends$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var part = first(this.$this$$receiver_1.get_chunks_bwgbzj_k$());
          var parent = Companion_getInstance_5().parseExpr_vzogji_k$(part.get_tag_18ivnz_k$().get_tokens_k1vwdf_k$());
          return new BlockExtends(parent);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultTags$Extends$slambda).create_q8iw67_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultTags$Extends$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultTags$Extends$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_q8iw67_k$(value instanceof BuildContext ? value : THROW_CCE(), completion);
  };
  function KorteDefaultTags$Extends$slambda_0(resultContinuation) {
    var i = new KorteDefaultTags$Extends$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_u43smj_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultTags$For$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultTags$For$slambda).invoke_u43smj_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_q8iw67_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultTags$For$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_u43smj_k$(p1 instanceof BuildContext ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultTags$For$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var main = this.$this$$receiver_1.get_chunks_bwgbzj_k$().get_c1px32_k$(0);
          var tmp0_safe_receiver = getOrNull(this.$this$$receiver_1.get_chunks_bwgbzj_k$(), 1);
          var elseTag = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_body_wojkyz_k$();
          var tr = main.get_tag_18ivnz_k$().get_tokens_k1vwdf_k$();
          var varnames = ArrayList_init_$Create$();
          do {
            var element = Companion_getInstance_5().parseId_c4d9wk_k$(tr);
            varnames.add_utx5q5_k$(element);
          }
           while (!(tryRead(tr, [',']) == null));
          Companion_getInstance_5().expect_bdcqcf_k$(tr, ['in']);
          var expr = Companion_getInstance_5().parseExpr_vzogji_k$(tr);
          expectEnd(tr);
          return new BlockFor(varnames, expr, main.get_body_wojkyz_k$(), elseTag);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultTags$For$slambda).create_q8iw67_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultTags$For$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultTags$For$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_q8iw67_k$(value instanceof BuildContext ? value : THROW_CCE(), completion);
  };
  function KorteDefaultTags$For$slambda_0(resultContinuation) {
    var i = new KorteDefaultTags$For$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_u43smj_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultTags$BuildIf$Branch(part) {
    this.part_1 = part;
  }
  protoOf(KorteDefaultTags$BuildIf$Branch).get_part_wos8qk_k$ = function () {
    return this.part_1;
  };
  protoOf(KorteDefaultTags$BuildIf$Branch).get_expr_wolovy_k$ = function () {
    return this.part_1.get_tag_18ivnz_k$().get_expr_wolovy_k$();
  };
  protoOf(KorteDefaultTags$BuildIf$Branch).get_body_wojkyz_k$ = function () {
    return this.part_1.get_body_wojkyz_k$();
  };
  protoOf(KorteDefaultTags$BuildIf$Branch).get_realExpr_ozt0n0_k$ = function () {
    var tmp;
    if (contains(this.part_1.get_tag_18ivnz_k$().get_name_woqyms_k$(), 'unless')) {
      tmp = new UNOP(this.get_expr_wolovy_k$(), '!');
    } else {
      tmp = this.get_expr_wolovy_k$();
    }
    return tmp;
  };
  function KorteDefaultTags$If$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultTags$If$slambda).invoke_u43smj_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_q8iw67_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultTags$If$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_u43smj_k$(p1 instanceof BuildContext ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultTags$If$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return KorteDefaultTags_getInstance().BuildIf_1umn0m_k$(this.$this$$receiver_1, true);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultTags$If$slambda).create_q8iw67_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultTags$If$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultTags$If$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_q8iw67_k$(value instanceof BuildContext ? value : THROW_CCE(), completion);
  };
  function KorteDefaultTags$If$slambda_0(resultContinuation) {
    var i = new KorteDefaultTags$If$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_u43smj_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultTags$Unless$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultTags$Unless$slambda).invoke_u43smj_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_q8iw67_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultTags$Unless$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_u43smj_k$(p1 instanceof BuildContext ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultTags$Unless$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return KorteDefaultTags_getInstance().BuildIf_1umn0m_k$(this.$this$$receiver_1, true);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultTags$Unless$slambda).create_q8iw67_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultTags$Unless$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultTags$Unless$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_q8iw67_k$(value instanceof BuildContext ? value : THROW_CCE(), completion);
  };
  function KorteDefaultTags$Unless$slambda_0(resultContinuation) {
    var i = new KorteDefaultTags$Unless$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_u43smj_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultTags$Import$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultTags$Import$slambda).invoke_u43smj_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_q8iw67_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultTags$Import$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_u43smj_k$(p1 instanceof BuildContext ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultTags$Import$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var part = first(this.$this$$receiver_1.get_chunks_bwgbzj_k$());
          var s = part.get_tag_18ivnz_k$().get_tokens_k1vwdf_k$();
          var file = parseExpr(s);
          expect(s, ['as']);
          var name = s.read_22xsm_k$().get_text_wouvsm_k$();
          expectEnd(s);
          return new BlockImport(file, name);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultTags$Import$slambda).create_q8iw67_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultTags$Import$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultTags$Import$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_q8iw67_k$(value instanceof BuildContext ? value : THROW_CCE(), completion);
  };
  function KorteDefaultTags$Import$slambda_0(resultContinuation) {
    var i = new KorteDefaultTags$Import$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_u43smj_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultTags$Include$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultTags$Include$slambda).invoke_u43smj_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_q8iw67_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultTags$Include$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_u43smj_k$(p1 instanceof BuildContext ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultTags$Include$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var main = first(this.$this$$receiver_1.get_chunks_bwgbzj_k$());
          var tr = main.get_tag_18ivnz_k$().get_tokens_k1vwdf_k$();
          var expr = Companion_getInstance_5().parseExpr_vzogji_k$(tr);
          var params = LinkedHashMap_init_$Create$();
          while (tr.get_hasMore_csdhd2_k$()) {
            var id = Companion_getInstance_5().parseId_c4d9wk_k$(tr);
            expect(tr, ['=']);
            var expr_0 = Companion_getInstance_5().parseExpr_vzogji_k$(tr);
            params.put_4fpzoq_k$(id, expr_0);
          }
          expectEnd(tr);
          return new BlockInclude(expr, params, main.get_tag_18ivnz_k$().get_posContext_avexqc_k$(), main.get_tag_18ivnz_k$().get_content_h02jrk_k$());
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultTags$Include$slambda).create_q8iw67_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultTags$Include$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultTags$Include$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_q8iw67_k$(value instanceof BuildContext ? value : THROW_CCE(), completion);
  };
  function KorteDefaultTags$Include$slambda_0(resultContinuation) {
    var i = new KorteDefaultTags$Include$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_u43smj_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultTags$Macro$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultTags$Macro$slambda).invoke_u43smj_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_q8iw67_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultTags$Macro$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_u43smj_k$(p1 instanceof BuildContext ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultTags$Macro$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var part = this.$this$$receiver_1.get_chunks_bwgbzj_k$().get_c1px32_k$(0);
          var s = part.get_tag_18ivnz_k$().get_tokens_k1vwdf_k$();
          var funcname = parseId(s);
          expect(s, ['(']);
          var params = parseIdList(s);
          expect(s, [')']);
          expectEnd(s);
          return new BlockMacro(funcname, params, part.get_body_wojkyz_k$());
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultTags$Macro$slambda).create_q8iw67_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultTags$Macro$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultTags$Macro$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_q8iw67_k$(value instanceof BuildContext ? value : THROW_CCE(), completion);
  };
  function KorteDefaultTags$Macro$slambda_0(resultContinuation) {
    var i = new KorteDefaultTags$Macro$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_u43smj_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultTags$Set$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultTags$Set$slambda).invoke_u43smj_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_q8iw67_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultTags$Set$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_u43smj_k$(p1 instanceof BuildContext ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultTags$Set$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var main = this.$this$$receiver_1.get_chunks_bwgbzj_k$().get_c1px32_k$(0);
          var tr = main.get_tag_18ivnz_k$().get_tokens_k1vwdf_k$();
          var varname = Companion_getInstance_5().parseId_c4d9wk_k$(tr);
          Companion_getInstance_5().expect_bdcqcf_k$(tr, ['=']);
          var expr = Companion_getInstance_5().parseExpr_vzogji_k$(tr);
          expectEnd(tr);
          return new BlockSet(varname, expr);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultTags$Set$slambda).create_q8iw67_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultTags$Set$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultTags$Set$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_q8iw67_k$(value instanceof BuildContext ? value : THROW_CCE(), completion);
  };
  function KorteDefaultTags$Set$slambda_0(resultContinuation) {
    var i = new KorteDefaultTags$Set$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_u43smj_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultTags$Assign$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultTags$Assign$slambda).invoke_u43smj_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_q8iw67_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultTags$Assign$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_u43smj_k$(p1 instanceof BuildContext ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultTags$Assign$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = KorteDefaultTags_getInstance().Set_1.get_buildNode_enow7t_k$()(this.$this$$receiver_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(KorteDefaultTags$Assign$slambda).create_q8iw67_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultTags$Assign$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultTags$Assign$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_q8iw67_k$(value instanceof BuildContext ? value : THROW_CCE(), completion);
  };
  function KorteDefaultTags$Assign$slambda_0(resultContinuation) {
    var i = new KorteDefaultTags$Assign$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_u43smj_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultTags$Switch$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteDefaultTags$Switch$slambda).invoke_u43smj_k$ = function ($this$$receiver, $completion) {
    var tmp = this.create_q8iw67_k$($this$$receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDefaultTags$Switch$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_u43smj_k$(p1 instanceof BuildContext ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KorteDefaultTags$Switch$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var subject = {_v: null};
          var cases = ArrayList_init_$Create$();
          var defaultCase = {_v: null};
          var tmp0_iterator = this.$this$$receiver_1.get_chunks_bwgbzj_k$().iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var part = tmp0_iterator.next_20eer_k$();
            var body = part.get_body_wojkyz_k$();
            switch (part.get_tag_18ivnz_k$().get_name_woqyms_k$()) {
              case 'switch':
                subject._v = part.get_tag_18ivnz_k$().get_expr_wolovy_k$();
                break;
              case 'case':
                var element = to(part.get_tag_18ivnz_k$().get_expr_wolovy_k$(), body);
                cases.add_utx5q5_k$(element);
                break;
              case 'default':
                defaultCase._v = body;
                break;
            }
          }
          if (subject._v == null) {
            var message = 'No subject set in switch';
            throw IllegalStateException_init_$Create$(toString(message));
          }
          return new KorteDefaultTags$Switch$1$1(subject, cases, defaultCase);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KorteDefaultTags$Switch$slambda).create_q8iw67_k$ = function ($this$$receiver, completion) {
    var i = new KorteDefaultTags$Switch$slambda(completion);
    i.$this$$receiver_1 = $this$$receiver;
    return i;
  };
  protoOf(KorteDefaultTags$Switch$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_q8iw67_k$(value instanceof BuildContext ? value : THROW_CCE(), completion);
  };
  function KorteDefaultTags$Switch$slambda_0(resultContinuation) {
    var i = new KorteDefaultTags$Switch$slambda(resultContinuation);
    var l = function ($this$$receiver, $completion) {
      return i.invoke_u43smj_k$($this$$receiver, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KorteDefaultTags() {
    KorteDefaultTags_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.setOf' call
    var tmp_0 = emptySet();
    var tmp_1 = setOf(['end', 'endblock']);
    tmp.BlockTag_1 = new KorteTag('block', tmp_0, tmp_1, VOID, KorteDefaultTags$BlockTag$slambda_0(null));
    var tmp_2 = this;
    // Inline function 'kotlin.collections.setOf' call
    var tmp_3 = emptySet();
    var tmp_4 = setOf(['end', 'endcapture']);
    tmp_2.Capture_1 = new KorteTag('capture', tmp_3, tmp_4, VOID, KorteDefaultTags$Capture$slambda_0(null));
    var tmp_5 = this;
    // Inline function 'kotlin.collections.setOf' call
    var tmp_6 = emptySet();
    tmp_5.Debug_1 = new KorteTag('debug', tmp_6, null, VOID, KorteDefaultTags$Debug$slambda_0(null));
    var tmp_7 = this;
    var tmp_8 = setOf_0('');
    tmp_7.Empty_1 = new KorteTag('', tmp_8, null, VOID, KorteDefaultTags$Empty$slambda_0(null));
    var tmp_9 = this;
    // Inline function 'kotlin.collections.setOf' call
    var tmp_10 = emptySet();
    tmp_9.Extends_1 = new KorteTag('extends', tmp_10, null, VOID, KorteDefaultTags$Extends$slambda_0(null));
    var tmp_11 = this;
    var tmp_12 = setOf_0('else');
    var tmp_13 = setOf(['end', 'endfor']);
    tmp_11.For_1 = new KorteTag('for', tmp_12, tmp_13, VOID, KorteDefaultTags$For$slambda_0(null));
    var tmp_14 = this;
    var tmp_15 = setOf(['else', 'elseif', 'elseunless']);
    var tmp_16 = setOf(['end', 'endif']);
    tmp_14.If_1 = new KorteTag('if', tmp_15, tmp_16, VOID, KorteDefaultTags$If$slambda_0(null));
    var tmp_17 = this;
    var tmp_18 = setOf(['else', 'elseif', 'elseunless']);
    var tmp_19 = setOf(['end', 'endunless']);
    tmp_17.Unless_1 = new KorteTag('unless', tmp_18, tmp_19, VOID, KorteDefaultTags$Unless$slambda_0(null));
    var tmp_20 = this;
    // Inline function 'kotlin.collections.setOf' call
    var tmp_21 = emptySet();
    tmp_20.Import_1 = new KorteTag('import', tmp_21, null, VOID, KorteDefaultTags$Import$slambda_0(null));
    var tmp_22 = this;
    // Inline function 'kotlin.collections.setOf' call
    var tmp_23 = emptySet();
    tmp_22.Include_1 = new KorteTag('include', tmp_23, null, VOID, KorteDefaultTags$Include$slambda_0(null));
    var tmp_24 = this;
    // Inline function 'kotlin.collections.setOf' call
    var tmp_25 = emptySet();
    var tmp_26 = setOf(['end', 'endmacro']);
    tmp_24.Macro_1 = new KorteTag('macro', tmp_25, tmp_26, VOID, KorteDefaultTags$Macro$slambda_0(null));
    var tmp_27 = this;
    // Inline function 'kotlin.collections.setOf' call
    var tmp_28 = emptySet();
    tmp_27.Set_1 = new KorteTag('set', tmp_28, null, VOID, KorteDefaultTags$Set$slambda_0(null));
    var tmp_29 = this;
    // Inline function 'kotlin.collections.setOf' call
    var tmp_30 = emptySet();
    tmp_29.Assign_1 = new KorteTag('assign', tmp_30, null, VOID, KorteDefaultTags$Assign$slambda_0(null));
    var tmp_31 = this;
    var tmp_32 = setOf(['case', 'default']);
    var tmp_33 = setOf(['end', 'endswitch']);
    tmp_31.Switch_1 = new KorteTag('switch', tmp_32, tmp_33, VOID, KorteDefaultTags$Switch$slambda_0(null));
    this.ALL_1 = listOf([this.BlockTag_1, this.Capture_1, this.Debug_1, this.Empty_1, this.Extends_1, this.For_1, this.If_1, this.Unless_1, this.Switch_1, this.Import_1, this.Include_1, this.Macro_1, this.Set_1, this.Assign_1]);
  }
  protoOf(KorteDefaultTags).get_BlockTag_tazbg6_k$ = function () {
    return this.BlockTag_1;
  };
  protoOf(KorteDefaultTags).get_Capture_x3gzwj_k$ = function () {
    return this.Capture_1;
  };
  protoOf(KorteDefaultTags).get_Debug_i8m1ai_k$ = function () {
    return this.Debug_1;
  };
  protoOf(KorteDefaultTags).get_Empty_i9b85g_k$ = function () {
    return this.Empty_1;
  };
  protoOf(KorteDefaultTags).get_Extends_77abo0_k$ = function () {
    return this.Extends_1;
  };
  protoOf(KorteDefaultTags).get_For_18jtfk_k$ = function () {
    return this.For_1;
  };
  protoOf(KorteDefaultTags).BuildIf_1umn0m_k$ = function (_this__u8e3s4, isIf) {
    // Inline function 'kotlin.collections.arrayListOf' call
    var branches = ArrayList_init_$Create$();
    var elseBranch = null;
    var tmp0_iterator = _this__u8e3s4.get_chunks_bwgbzj_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var part = tmp0_iterator.next_20eer_k$();
      switch (part.get_tag_18ivnz_k$().get_name_woqyms_k$()) {
        case 'if':
        case 'elseif':
        case 'unless':
        case 'elseunless':
          // Inline function 'kotlin.collections.plusAssign' call

          var element = new KorteDefaultTags$BuildIf$Branch(part);
          branches.add_utx5q5_k$(element);
          break;
        case 'else':
          elseBranch = part.get_body_wojkyz_k$();
          break;
      }
    }
    var branchesRev = reversed_0(branches);
    var firstBranch = first(branchesRev);
    var node = new BlockIf(firstBranch.get_realExpr_ozt0n0_k$(), firstBranch.get_body_wojkyz_k$(), elseBranch);
    var tmp2_iterator = takeLast(branchesRev, branchesRev.get_size_woubt6_k$() - 1 | 0).iterator_jk1svi_k$();
    while (tmp2_iterator.hasNext_bitz1p_k$()) {
      var branch = tmp2_iterator.next_20eer_k$();
      node = new BlockIf(branch.get_realExpr_ozt0n0_k$(), branch.get_body_wojkyz_k$(), node);
    }
    return node;
  };
  protoOf(KorteDefaultTags).get_If_kntooq_k$ = function () {
    return this.If_1;
  };
  protoOf(KorteDefaultTags).get_Unless_5cygnv_k$ = function () {
    return this.Unless_1;
  };
  protoOf(KorteDefaultTags).get_Import_c21bm_k$ = function () {
    return this.Import_1;
  };
  protoOf(KorteDefaultTags).get_Include_a3wpcx_k$ = function () {
    return this.Include_1;
  };
  protoOf(KorteDefaultTags).get_Macro_idhncz_k$ = function () {
    return this.Macro_1;
  };
  protoOf(KorteDefaultTags).get_Set_18jk13_k$ = function () {
    return this.Set_1;
  };
  protoOf(KorteDefaultTags).get_Assign_412go8_k$ = function () {
    return this.Assign_1;
  };
  protoOf(KorteDefaultTags).get_Switch_4jrqzh_k$ = function () {
    return this.Switch_1;
  };
  protoOf(KorteDefaultTags).get_ALL_18jy08_k$ = function () {
    return this.ALL_1;
  };
  var KorteDefaultTags_instance;
  function KorteDefaultTags_getInstance() {
    if (KorteDefaultTags_instance == null)
      new KorteDefaultTags();
    return KorteDefaultTags_instance;
  }
  function DefaultBlocks$BlockCapture$eval$slambda($out, resultContinuation) {
    this.$out_1 = $out;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultBlocks$BlockCapture$eval$slambda).invoke_hafcq3_k$ = function (it, $completion) {
    var tmp = this.create_99ct7z_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DefaultBlocks$BlockCapture$eval$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_hafcq3_k$((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultBlocks$BlockCapture$eval$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.$out_1._v = this.$out_1._v + this.it_1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(DefaultBlocks$BlockCapture$eval$slambda).create_99ct7z_k$ = function (it, completion) {
    var i = new DefaultBlocks$BlockCapture$eval$slambda(this.$out_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(DefaultBlocks$BlockCapture$eval$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_99ct7z_k$((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE(), completion);
  };
  function DefaultBlocks$BlockCapture$eval$slambda_0($out, resultContinuation) {
    var i = new DefaultBlocks$BlockCapture$eval$slambda($out, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_hafcq3_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $evalCOROUTINE$23(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$23).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_0 = this;
            tmp_0.this0__1 = this.context_1;
            var tmp_1 = this;
            tmp_1.this1__1 = this.this0__1;
            var tmp_2 = this;
            tmp_2.$this$run2__1 = this.this1__1;
            this.out3__1 = {_v: ''};
            this.old4__1 = this.$this$run2__1.get_write_j0vzjq_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(5);
            this.$this$run2__1.set_write_xvrr5r_k$(DefaultBlocks$BlockCapture$eval$slambda_0(this.out3__1, null));
            this.set_state_rjd8d0_k$(2);
            suspendResult = this._this__u8e3s4__1.content_1.eval_vdy2zv_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$05__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(6);
            this.$this$run2__1.set_write_xvrr5r_k$(this.old4__1);
            this.result6__1 = this.out3__1._v;
            this.set_state_rjd8d0_k$(4);
            suspendResult = this.context_1.get_scope_iyfcq3_k$().set_6km9f_k$(this._this__u8e3s4__1.varname_1, new KorteRawString(this.result6__1, this._this__u8e3s4__1.contentType_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var t = this.get_exception_x0n6w6_k$();
            this.$this$run2__1.set_write_xvrr5r_k$(this.old4__1);
            throw t;
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $evalCOROUTINE$24(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$24).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.ARGUMENT0__1 = get_debugPrintln(this.context_1.get_config_c0698r_k$());
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.expr_1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.ARGUMENT0__1(ARGUMENT);
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $evalCOROUTINE$25(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$25).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.ARGUMENT0__1 = this.context_1.get_config_c0698r_k$().get_writeBlockExpressionResult_qls6zw_k$();
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.expr_1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.ARGUMENT0__1(this.context_1, this.ARGUMENT1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $evalCOROUTINE$26(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$26).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.expr_1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.result0__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.context_1.get_templates_tqpy0g_k$().getLayout_xcha5y_k$(this._this__u8e3s4__1.toDynamicString_9srrng_k$(this.result0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ARGUMENT1__1 = suspendResult;
            this.parentTemplate2__1 = new TemplateEvalContext(this.ARGUMENT1__1);
            this.context_1.get_currentTemplate_fvs4pi_k$().set_parent_l3p4fi_k$(this.parentTemplate2__1);
            this.set_state_rjd8d0_k$(3);
            suspendResult = this.parentTemplate2__1.eval_vdy2zv_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            throw new StopEvaluatingException();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $evalCOROUTINE$27(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$27).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(20);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.this1__1 = this.context_1;
            var tmp_1 = this;
            tmp_1.content2__1 = LinkedHashMap_init_$Create$();
            this.old3__1 = this.this1__1.get_scope_iyfcq3_k$();
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(19);
            this.this1__1.set_scope_wjtu18_k$(new Scope(this.content2__1, this.this1__1.get_mapper_giyu6i_k$(), this.old3__1));
            this.index6__1 = 0;
            this.set_state_rjd8d0_k$(4);
            suspendResult = this._this__u8e3s4__1.expr_1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.ARGUMENT7__1 = suspendResult;
            this.items8__1 = this._this__u8e3s4__1.toDynamicList_34vdgv_k$(this.ARGUMENT7__1);
            var tmp_2 = this;
            tmp_2.loopValue9__1 = HashMap_init_$Create$();
            this.set_state_rjd8d0_k$(5);
            suspendResult = this.context_1.get_scope_iyfcq3_k$().set_6km9f_k$('loop', this.loopValue9__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var this_0 = this.loopValue9__1;
            var value = this.items8__1.get_size_woubt6_k$();
            this_0.put_4fpzoq_k$('length', value);
            this.tmp0_iterator10__1 = this.items8__1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            if (!this.tmp0_iterator10__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(12);
              continue $sm;
            }

            this.v11__1 = this.tmp0_iterator10__1.next_20eer_k$();
            var tmp_3;
            var tmp_4 = this.v11__1;
            if (tmp_4 instanceof Pair) {
              tmp_3 = this._this__u8e3s4__1.varnames_1.get_size_woubt6_k$() >= 2;
            } else {
              tmp_3 = false;
            }

            if (tmp_3) {
              this.set_state_rjd8d0_k$(8);
              suspendResult = this.context_1.get_scope_iyfcq3_k$().set_6km9f_k$(this._this__u8e3s4__1.varnames_1.get_c1px32_k$(0), this.v11__1.get_first_irdx8n_k$(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(7);
              suspendResult = this.context_1.get_scope_iyfcq3_k$().set_6km9f_k$(this._this__u8e3s4__1.varnames_1.get_c1px32_k$(0), this.v11__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 7:
            this.set_state_rjd8d0_k$(10);
            continue $sm;
          case 8:
            this.set_state_rjd8d0_k$(9);
            suspendResult = this.context_1.get_scope_iyfcq3_k$().set_6km9f_k$(this._this__u8e3s4__1.varnames_1.get_c1px32_k$(1), this.v11__1.get_second_jf7fjx_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.set_state_rjd8d0_k$(10);
            continue $sm;
          case 10:
            var this_1 = this.loopValue9__1;
            var value_0 = this.index6__1 + 1 | 0;
            this_1.put_4fpzoq_k$('index', value_0);
            var this_2 = this.loopValue9__1;
            var value_1 = this.index6__1;
            this_2.put_4fpzoq_k$('index0', value_1);
            var this_3 = this.loopValue9__1;
            var key = 'revindex';
            var value_2 = (this.items8__1.get_size_woubt6_k$() - this.index6__1 | 0) - 1 | 0;
            this_3.put_4fpzoq_k$(key, value_2);
            var this_4 = this.loopValue9__1;
            var key_0 = 'revindex0';
            var value_3 = this.items8__1.get_size_woubt6_k$() - this.index6__1 | 0;
            this_4.put_4fpzoq_k$(key_0, value_3);
            var this_5 = this.loopValue9__1;
            var value_4 = this.index6__1 === 0;
            this_5.put_4fpzoq_k$('first', value_4);
            var this_6 = this.loopValue9__1;
            var value_5 = this.index6__1 === (this.items8__1.get_size_woubt6_k$() - 1 | 0);
            this_6.put_4fpzoq_k$('last', value_5);
            this.set_state_rjd8d0_k$(11);
            suspendResult = this._this__u8e3s4__1.loop_1.eval_vdy2zv_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            this.index6__1 = this.index6__1 + 1 | 0;
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 12:
            if (this.index6__1 === 0) {
              this.tmp2_safe_receiver12__1 = this._this__u8e3s4__1.elseNode_1;
              if (this.tmp2_safe_receiver12__1 == null) {
                this.WHEN_RESULT13__1 = null;
                this.set_state_rjd8d0_k$(14);
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(13);
                suspendResult = this.tmp2_safe_receiver12__1.eval_vdy2zv_k$(this.context_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.set_state_rjd8d0_k$(15);
              continue $sm;
            }

          case 13:
            var tmp_5 = this;
            tmp_5.WHEN_RESULT13__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(14);
            continue $sm;
          case 14:
            this.set_state_rjd8d0_k$(15);
            continue $sm;
          case 15:
            this.tmp$ret$05__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(20);
            this.set_state_rjd8d0_k$(16);
            var tmp_6 = this;
            continue $sm;
          case 16:
            this.set_exceptionState_fex74n_k$(20);
            var tmp_7 = this;
            this.this1__1.set_scope_wjtu18_k$(this.old3__1);
            tmp_7.tmp$ret$40__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(18);
            continue $sm;
          case 17:
            this.set_exceptionState_fex74n_k$(20);
            this.this1__1.set_scope_wjtu18_k$(this.old3__1);
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(18);
            continue $sm;
          case 18:
            return Unit_getInstance();
          case 19:
            this.set_exceptionState_fex74n_k$(20);
            var t = this.get_exception_x0n6w6_k$();
            this.this1__1.set_scope_wjtu18_k$(this.old3__1);
            throw t;
          case 20:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 20) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $evalCOROUTINE$28(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$28).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.tmp0_iterator0__1 = this._this__u8e3s4__1.children_1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator0__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.n1__1 = this.tmp0_iterator0__1.next_20eer_k$();
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.n1__1.eval_vdy2zv_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $evalCOROUTINE$29(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$29).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.cond_1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            if (this._this__u8e3s4__1.toDynamicBool_bp1ztv_k$(this.ARGUMENT0__1)) {
              this.set_state_rjd8d0_k$(4);
              suspendResult = this._this__u8e3s4__1.trueContent_1.eval_vdy2zv_k$(this.context_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.tmp0_safe_receiver1__1 = this._this__u8e3s4__1.falseContent_1;
              if (this.tmp0_safe_receiver1__1 == null) {
                this.WHEN_RESULT2__1 = null;
                this.set_state_rjd8d0_k$(3);
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(2);
                suspendResult = this.tmp0_safe_receiver1__1.eval_vdy2zv_k$(this.context_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

          case 2:
            var tmp_0 = this;
            tmp_0.WHEN_RESULT2__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $evalCOROUTINE$30(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$30).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.ARGUMENT0__1 = this.context_1.get_templates_tqpy0g_k$();
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.fileExpr_1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT1__1 = suspendResult;
            this.ARGUMENT2__1 = toString_0(this.ARGUMENT1__1);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.ARGUMENT0__1.getInclude_c4y4ik_k$(this.ARGUMENT2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ARGUMENT3__1 = suspendResult;
            this.ARGUMENT4__1 = new TemplateEvalContext(this.ARGUMENT3__1);
            this.set_state_rjd8d0_k$(3);
            suspendResult = this.ARGUMENT4__1.exec$default_qebzak_k$([], VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.ARGUMENT5__1 = suspendResult;
            this.ctx6__1 = this.ARGUMENT5__1.get_context_h02k06_k$();
            this.set_state_rjd8d0_k$(4);
            suspendResult = this.context_1.get_scope_iyfcq3_k$().set_6km9f_k$(this._this__u8e3s4__1.exportName_1, this.ctx6__1.get_macros_giql2o_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $evalCOROUTINE$31(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$31).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(17);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.fileNameExpr_1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.fileName1__1 = this._this__u8e3s4__1.toDynamicString_9srrng_k$(this.ARGUMENT0__1);
            var tmp_0 = this;
            tmp_0.this2__1 = this._this__u8e3s4__1.params_1;
            var tmp_1 = this;
            tmp_1.this3__1 = this.this2__1;
            var tmp_2 = this;
            tmp_2.destination4__1 = LinkedHashMap_init_$Create$_0(mapCapacity(this.this2__1.get_size_woubt6_k$()));
            var tmp_3 = this;
            tmp_3.this5__1 = this.this3__1.get_entries_p20ztl_k$();
            var tmp_4 = this;
            tmp_4.destination6__1 = this.destination4__1;
            this.tmp0_iterator7__1 = this.this5__1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (!this.tmp0_iterator7__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.element8__1 = this.tmp0_iterator7__1.next_20eer_k$();
            var tmp_5 = this;
            tmp_5.ARGUMENT9__1 = this.element8__1.get_key_18j28a_k$();
            var tmp_6 = this;
            tmp_6.it10__1 = this.element8__1;
            this.set_state_rjd8d0_k$(3);
            suspendResult = this.it10__1.get_value_j01efc_k$().eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.ARGUMENT11__1 = suspendResult;
            this.destination6__1.put_4fpzoq_k$(this.ARGUMENT9__1, this.ARGUMENT11__1);
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 4:
            this.ARGUMENT12__1 = this.destination6__1;
            this.evalParams13__1 = toMutableMap(this.ARGUMENT12__1);
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            var tmp_7 = this;
            tmp_7.this15__1 = this.context_1;
            var tmp_8 = this;
            tmp_8.content16__1 = LinkedHashMap_init_$Create$();
            this.old17__1 = this.this15__1.get_scope_iyfcq3_k$();
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            this.set_exceptionState_fex74n_k$(16);
            this.this15__1.set_scope_wjtu18_k$(new Scope(this.content16__1, this.this15__1.get_mapper_giyu6i_k$(), this.old17__1));
            this.set_state_rjd8d0_k$(8);
            suspendResult = this.context_1.get_scope_iyfcq3_k$().set_6km9f_k$('include', this.evalParams13__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.set_exceptionState_fex74n_k$(10);
            this.set_state_rjd8d0_k$(9);
            suspendResult = this.context_1.get_templates_tqpy0g_k$().getInclude_c4y4ik_k$(this.fileName1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.TRY_RESULT20__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(16);
            this.set_state_rjd8d0_k$(11);
            continue $sm;
          case 10:
            this.set_exceptionState_fex74n_k$(16);
            var tmp_9 = this.get_exception_x0n6w6_k$();
            if (tmp_9 instanceof Error) {
              this.e21__1 = this.get_exception_x0n6w6_k$();
              var tmp_10 = this;
              var tmp_11 = this.e21__1;
              if (tmp_11 instanceof CancellationException)
                throw this.e21__1;
              korteException("Can't include template (" + this._this__u8e3s4__1.tagContent_1 + '): ' + this.e21__1.message, this._this__u8e3s4__1.filePos_1);
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 11:
            this.set_exceptionState_fex74n_k$(16);
            this.includeTemplate22__1 = this.TRY_RESULT20__1;
            this.set_state_rjd8d0_k$(12);
            suspendResult = (new TemplateEvalContext(this.includeTemplate22__1)).eval_vdy2zv_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 12:
            this.tmp$ret$019__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(17);
            this.set_state_rjd8d0_k$(13);
            var tmp_12 = this;
            continue $sm;
          case 13:
            this.set_exceptionState_fex74n_k$(17);
            var tmp_13 = this;
            this.this15__1.set_scope_wjtu18_k$(this.old17__1);
            tmp_13.tmp$ret$414__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(15);
            continue $sm;
          case 14:
            this.set_exceptionState_fex74n_k$(17);
            this.this15__1.set_scope_wjtu18_k$(this.old17__1);
            if (false) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(15);
            continue $sm;
          case 15:
            return Unit_getInstance();
          case 16:
            this.set_exceptionState_fex74n_k$(17);
            var t = this.get_exception_x0n6w6_k$();
            this.this15__1.set_scope_wjtu18_k$(this.old17__1);
            throw t;
          case 17:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 17) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $evalCOROUTINE$32(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$32).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.ARGUMENT0__1 = this.context_1.get_scope_iyfcq3_k$();
            this.ARGUMENT1__1 = this._this__u8e3s4__1.varname_1;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.expr_1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT2__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.ARGUMENT0__1.set_6km9f_k$(this.ARGUMENT1__1, this.ARGUMENT2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function BlockBlock(name, contentType) {
    this.name_1 = name;
    this.contentType_1 = contentType;
  }
  protoOf(BlockBlock).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(BlockBlock).get_contentType_7git4a_k$ = function () {
    return this.contentType_1;
  };
  protoOf(BlockBlock).eval_vdy2zv_k$ = function (context, $completion) {
    return context.get_leafTemplate_s83lmp_k$().getBlock_nbf2o3_k$(this.name_1).eval_vdy2zv_k$(context, $completion);
  };
  protoOf(BlockBlock).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(BlockBlock).component2_7eebsb_k$ = function () {
    return this.contentType_1;
  };
  protoOf(BlockBlock).copy_9ze9y6_k$ = function (name, contentType) {
    return new BlockBlock(name, contentType);
  };
  protoOf(BlockBlock).copy$default_9o0oya_k$ = function (name, contentType, $super) {
    name = name === VOID ? this.name_1 : name;
    contentType = contentType === VOID ? this.contentType_1 : contentType;
    return $super === VOID ? this.copy_9ze9y6_k$(name, contentType) : $super.copy_9ze9y6_k$.call(this, name, contentType);
  };
  protoOf(BlockBlock).toString = function () {
    return 'BlockBlock(name=' + this.name_1 + ', contentType=' + this.contentType_1 + ')';
  };
  protoOf(BlockBlock).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + (this.contentType_1 == null ? 0 : getStringHashCode(this.contentType_1)) | 0;
    return result;
  };
  protoOf(BlockBlock).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlockBlock))
      return false;
    var tmp0_other_with_cast = other instanceof BlockBlock ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!(this.contentType_1 == tmp0_other_with_cast.contentType_1))
      return false;
    return true;
  };
  function BlockCapture(varname, content, contentType) {
    contentType = contentType === VOID ? null : contentType;
    this.varname_1 = varname;
    this.content_1 = content;
    this.contentType_1 = contentType;
  }
  protoOf(BlockCapture).get_varname_56ma15_k$ = function () {
    return this.varname_1;
  };
  protoOf(BlockCapture).get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  protoOf(BlockCapture).get_contentType_7git4a_k$ = function () {
    return this.contentType_1;
  };
  protoOf(BlockCapture).eval_vdy2zv_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$23(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlockCapture).component1_7eebsc_k$ = function () {
    return this.varname_1;
  };
  protoOf(BlockCapture).component2_7eebsb_k$ = function () {
    return this.content_1;
  };
  protoOf(BlockCapture).component3_7eebsa_k$ = function () {
    return this.contentType_1;
  };
  protoOf(BlockCapture).copy_40u5b8_k$ = function (varname, content, contentType) {
    return new BlockCapture(varname, content, contentType);
  };
  protoOf(BlockCapture).copy$default_66y7d4_k$ = function (varname, content, contentType, $super) {
    varname = varname === VOID ? this.varname_1 : varname;
    content = content === VOID ? this.content_1 : content;
    contentType = contentType === VOID ? this.contentType_1 : contentType;
    return $super === VOID ? this.copy_40u5b8_k$(varname, content, contentType) : $super.copy_40u5b8_k$.call(this, varname, content, contentType);
  };
  protoOf(BlockCapture).toString = function () {
    return 'BlockCapture(varname=' + this.varname_1 + ', content=' + this.content_1 + ', contentType=' + this.contentType_1 + ')';
  };
  protoOf(BlockCapture).hashCode = function () {
    var result = getStringHashCode(this.varname_1);
    result = imul(result, 31) + hashCode(this.content_1) | 0;
    result = imul(result, 31) + (this.contentType_1 == null ? 0 : getStringHashCode(this.contentType_1)) | 0;
    return result;
  };
  protoOf(BlockCapture).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlockCapture))
      return false;
    var tmp0_other_with_cast = other instanceof BlockCapture ? other : THROW_CCE();
    if (!(this.varname_1 === tmp0_other_with_cast.varname_1))
      return false;
    if (!equals(this.content_1, tmp0_other_with_cast.content_1))
      return false;
    if (!(this.contentType_1 == tmp0_other_with_cast.contentType_1))
      return false;
    return true;
  };
  function BlockDebug(expr) {
    this.expr_1 = expr;
  }
  protoOf(BlockDebug).get_expr_wolovy_k$ = function () {
    return this.expr_1;
  };
  protoOf(BlockDebug).eval_vdy2zv_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$24(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlockDebug).component1_7eebsc_k$ = function () {
    return this.expr_1;
  };
  protoOf(BlockDebug).copy_ktfcgt_k$ = function (expr) {
    return new BlockDebug(expr);
  };
  protoOf(BlockDebug).copy$default_8tj69w_k$ = function (expr, $super) {
    expr = expr === VOID ? this.expr_1 : expr;
    return $super === VOID ? this.copy_ktfcgt_k$(expr) : $super.copy_ktfcgt_k$.call(this, expr);
  };
  protoOf(BlockDebug).toString = function () {
    return 'BlockDebug(expr=' + this.expr_1 + ')';
  };
  protoOf(BlockDebug).hashCode = function () {
    return hashCode(this.expr_1);
  };
  protoOf(BlockDebug).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlockDebug))
      return false;
    var tmp0_other_with_cast = other instanceof BlockDebug ? other : THROW_CCE();
    if (!equals(this.expr_1, tmp0_other_with_cast.expr_1))
      return false;
    return true;
  };
  function BlockExpr(expr) {
    this.expr_1 = expr;
  }
  protoOf(BlockExpr).get_expr_wolovy_k$ = function () {
    return this.expr_1;
  };
  protoOf(BlockExpr).eval_vdy2zv_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$25(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlockExpr).component1_7eebsc_k$ = function () {
    return this.expr_1;
  };
  protoOf(BlockExpr).copy_ktfcgt_k$ = function (expr) {
    return new BlockExpr(expr);
  };
  protoOf(BlockExpr).copy$default_h8bo7m_k$ = function (expr, $super) {
    expr = expr === VOID ? this.expr_1 : expr;
    return $super === VOID ? this.copy_ktfcgt_k$(expr) : $super.copy_ktfcgt_k$.call(this, expr);
  };
  protoOf(BlockExpr).toString = function () {
    return 'BlockExpr(expr=' + this.expr_1 + ')';
  };
  protoOf(BlockExpr).hashCode = function () {
    return hashCode(this.expr_1);
  };
  protoOf(BlockExpr).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlockExpr))
      return false;
    var tmp0_other_with_cast = other instanceof BlockExpr ? other : THROW_CCE();
    if (!equals(this.expr_1, tmp0_other_with_cast.expr_1))
      return false;
    return true;
  };
  function BlockExtends(expr) {
    this.expr_1 = expr;
  }
  protoOf(BlockExtends).get_expr_wolovy_k$ = function () {
    return this.expr_1;
  };
  protoOf(BlockExtends).eval_vdy2zv_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$26(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlockExtends).component1_7eebsc_k$ = function () {
    return this.expr_1;
  };
  protoOf(BlockExtends).copy_ktfcgt_k$ = function (expr) {
    return new BlockExtends(expr);
  };
  protoOf(BlockExtends).copy$default_5tvvna_k$ = function (expr, $super) {
    expr = expr === VOID ? this.expr_1 : expr;
    return $super === VOID ? this.copy_ktfcgt_k$(expr) : $super.copy_ktfcgt_k$.call(this, expr);
  };
  protoOf(BlockExtends).toString = function () {
    return 'BlockExtends(expr=' + this.expr_1 + ')';
  };
  protoOf(BlockExtends).hashCode = function () {
    return hashCode(this.expr_1);
  };
  protoOf(BlockExtends).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlockExtends))
      return false;
    var tmp0_other_with_cast = other instanceof BlockExtends ? other : THROW_CCE();
    if (!equals(this.expr_1, tmp0_other_with_cast.expr_1))
      return false;
    return true;
  };
  function BlockFor(varnames, expr, loop, elseNode) {
    this.varnames_1 = varnames;
    this.expr_1 = expr;
    this.loop_1 = loop;
    this.elseNode_1 = elseNode;
  }
  protoOf(BlockFor).get_varnames_imyj4a_k$ = function () {
    return this.varnames_1;
  };
  protoOf(BlockFor).get_expr_wolovy_k$ = function () {
    return this.expr_1;
  };
  protoOf(BlockFor).get_loop_wopz3h_k$ = function () {
    return this.loop_1;
  };
  protoOf(BlockFor).get_elseNode_pg2st8_k$ = function () {
    return this.elseNode_1;
  };
  protoOf(BlockFor).eval_vdy2zv_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$27(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlockFor).component1_7eebsc_k$ = function () {
    return this.varnames_1;
  };
  protoOf(BlockFor).component2_7eebsb_k$ = function () {
    return this.expr_1;
  };
  protoOf(BlockFor).component3_7eebsa_k$ = function () {
    return this.loop_1;
  };
  protoOf(BlockFor).component4_7eebs9_k$ = function () {
    return this.elseNode_1;
  };
  protoOf(BlockFor).copy_xd2p8i_k$ = function (varnames, expr, loop, elseNode) {
    return new BlockFor(varnames, expr, loop, elseNode);
  };
  protoOf(BlockFor).copy$default_azjhka_k$ = function (varnames, expr, loop, elseNode, $super) {
    varnames = varnames === VOID ? this.varnames_1 : varnames;
    expr = expr === VOID ? this.expr_1 : expr;
    loop = loop === VOID ? this.loop_1 : loop;
    elseNode = elseNode === VOID ? this.elseNode_1 : elseNode;
    return $super === VOID ? this.copy_xd2p8i_k$(varnames, expr, loop, elseNode) : $super.copy_xd2p8i_k$.call(this, varnames, expr, loop, elseNode);
  };
  protoOf(BlockFor).toString = function () {
    return 'BlockFor(varnames=' + this.varnames_1 + ', expr=' + this.expr_1 + ', loop=' + this.loop_1 + ', elseNode=' + this.elseNode_1 + ')';
  };
  protoOf(BlockFor).hashCode = function () {
    var result = hashCode(this.varnames_1);
    result = imul(result, 31) + hashCode(this.expr_1) | 0;
    result = imul(result, 31) + hashCode(this.loop_1) | 0;
    result = imul(result, 31) + (this.elseNode_1 == null ? 0 : hashCode(this.elseNode_1)) | 0;
    return result;
  };
  protoOf(BlockFor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlockFor))
      return false;
    var tmp0_other_with_cast = other instanceof BlockFor ? other : THROW_CCE();
    if (!equals(this.varnames_1, tmp0_other_with_cast.varnames_1))
      return false;
    if (!equals(this.expr_1, tmp0_other_with_cast.expr_1))
      return false;
    if (!equals(this.loop_1, tmp0_other_with_cast.loop_1))
      return false;
    if (!equals(this.elseNode_1, tmp0_other_with_cast.elseNode_1))
      return false;
    return true;
  };
  function BlockGroup(children) {
    this.children_1 = children;
  }
  protoOf(BlockGroup).get_children_4cwbp4_k$ = function () {
    return this.children_1;
  };
  protoOf(BlockGroup).eval_vdy2zv_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$28(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlockGroup).component1_7eebsc_k$ = function () {
    return this.children_1;
  };
  protoOf(BlockGroup).copy_jodp0l_k$ = function (children) {
    return new BlockGroup(children);
  };
  protoOf(BlockGroup).copy$default_56pvte_k$ = function (children, $super) {
    children = children === VOID ? this.children_1 : children;
    return $super === VOID ? this.copy_jodp0l_k$(children) : $super.copy_jodp0l_k$.call(this, children);
  };
  protoOf(BlockGroup).toString = function () {
    return 'BlockGroup(children=' + this.children_1 + ')';
  };
  protoOf(BlockGroup).hashCode = function () {
    return hashCode(this.children_1);
  };
  protoOf(BlockGroup).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlockGroup))
      return false;
    var tmp0_other_with_cast = other instanceof BlockGroup ? other : THROW_CCE();
    if (!equals(this.children_1, tmp0_other_with_cast.children_1))
      return false;
    return true;
  };
  function BlockIf(cond, trueContent, falseContent) {
    this.cond_1 = cond;
    this.trueContent_1 = trueContent;
    this.falseContent_1 = falseContent;
  }
  protoOf(BlockIf).get_cond_wok86j_k$ = function () {
    return this.cond_1;
  };
  protoOf(BlockIf).get_trueContent_e0t8im_k$ = function () {
    return this.trueContent_1;
  };
  protoOf(BlockIf).get_falseContent_e2bdnl_k$ = function () {
    return this.falseContent_1;
  };
  protoOf(BlockIf).eval_vdy2zv_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$29(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlockIf).component1_7eebsc_k$ = function () {
    return this.cond_1;
  };
  protoOf(BlockIf).component2_7eebsb_k$ = function () {
    return this.trueContent_1;
  };
  protoOf(BlockIf).component3_7eebsa_k$ = function () {
    return this.falseContent_1;
  };
  protoOf(BlockIf).copy_o7jitc_k$ = function (cond, trueContent, falseContent) {
    return new BlockIf(cond, trueContent, falseContent);
  };
  protoOf(BlockIf).copy$default_hy5vo7_k$ = function (cond, trueContent, falseContent, $super) {
    cond = cond === VOID ? this.cond_1 : cond;
    trueContent = trueContent === VOID ? this.trueContent_1 : trueContent;
    falseContent = falseContent === VOID ? this.falseContent_1 : falseContent;
    return $super === VOID ? this.copy_o7jitc_k$(cond, trueContent, falseContent) : $super.copy_o7jitc_k$.call(this, cond, trueContent, falseContent);
  };
  protoOf(BlockIf).toString = function () {
    return 'BlockIf(cond=' + this.cond_1 + ', trueContent=' + this.trueContent_1 + ', falseContent=' + this.falseContent_1 + ')';
  };
  protoOf(BlockIf).hashCode = function () {
    var result = hashCode(this.cond_1);
    result = imul(result, 31) + hashCode(this.trueContent_1) | 0;
    result = imul(result, 31) + (this.falseContent_1 == null ? 0 : hashCode(this.falseContent_1)) | 0;
    return result;
  };
  protoOf(BlockIf).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlockIf))
      return false;
    var tmp0_other_with_cast = other instanceof BlockIf ? other : THROW_CCE();
    if (!equals(this.cond_1, tmp0_other_with_cast.cond_1))
      return false;
    if (!equals(this.trueContent_1, tmp0_other_with_cast.trueContent_1))
      return false;
    if (!equals(this.falseContent_1, tmp0_other_with_cast.falseContent_1))
      return false;
    return true;
  };
  function BlockImport(fileExpr, exportName) {
    this.fileExpr_1 = fileExpr;
    this.exportName_1 = exportName;
  }
  protoOf(BlockImport).get_fileExpr_r1zyvu_k$ = function () {
    return this.fileExpr_1;
  };
  protoOf(BlockImport).get_exportName_gptjx4_k$ = function () {
    return this.exportName_1;
  };
  protoOf(BlockImport).eval_vdy2zv_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$30(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlockImport).component1_7eebsc_k$ = function () {
    return this.fileExpr_1;
  };
  protoOf(BlockImport).component2_7eebsb_k$ = function () {
    return this.exportName_1;
  };
  protoOf(BlockImport).copy_onjn93_k$ = function (fileExpr, exportName) {
    return new BlockImport(fileExpr, exportName);
  };
  protoOf(BlockImport).copy$default_tfb109_k$ = function (fileExpr, exportName, $super) {
    fileExpr = fileExpr === VOID ? this.fileExpr_1 : fileExpr;
    exportName = exportName === VOID ? this.exportName_1 : exportName;
    return $super === VOID ? this.copy_onjn93_k$(fileExpr, exportName) : $super.copy_onjn93_k$.call(this, fileExpr, exportName);
  };
  protoOf(BlockImport).toString = function () {
    return 'BlockImport(fileExpr=' + this.fileExpr_1 + ', exportName=' + this.exportName_1 + ')';
  };
  protoOf(BlockImport).hashCode = function () {
    var result = hashCode(this.fileExpr_1);
    result = imul(result, 31) + getStringHashCode(this.exportName_1) | 0;
    return result;
  };
  protoOf(BlockImport).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlockImport))
      return false;
    var tmp0_other_with_cast = other instanceof BlockImport ? other : THROW_CCE();
    if (!equals(this.fileExpr_1, tmp0_other_with_cast.fileExpr_1))
      return false;
    if (!(this.exportName_1 === tmp0_other_with_cast.exportName_1))
      return false;
    return true;
  };
  function BlockInclude(fileNameExpr, params, filePos, tagContent) {
    this.fileNameExpr_1 = fileNameExpr;
    this.params_1 = params;
    this.filePos_1 = filePos;
    this.tagContent_1 = tagContent;
  }
  protoOf(BlockInclude).get_fileNameExpr_e06cxx_k$ = function () {
    return this.fileNameExpr_1;
  };
  protoOf(BlockInclude).get_params_hy4oen_k$ = function () {
    return this.params_1;
  };
  protoOf(BlockInclude).get_filePos_cvhzg1_k$ = function () {
    return this.filePos_1;
  };
  protoOf(BlockInclude).get_tagContent_jmdbs_k$ = function () {
    return this.tagContent_1;
  };
  protoOf(BlockInclude).eval_vdy2zv_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$31(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlockInclude).component1_7eebsc_k$ = function () {
    return this.fileNameExpr_1;
  };
  protoOf(BlockInclude).component2_7eebsb_k$ = function () {
    return this.params_1;
  };
  protoOf(BlockInclude).component3_7eebsa_k$ = function () {
    return this.filePos_1;
  };
  protoOf(BlockInclude).component4_7eebs9_k$ = function () {
    return this.tagContent_1;
  };
  protoOf(BlockInclude).copy_xpp6jh_k$ = function (fileNameExpr, params, filePos, tagContent) {
    return new BlockInclude(fileNameExpr, params, filePos, tagContent);
  };
  protoOf(BlockInclude).copy$default_3tqj7y_k$ = function (fileNameExpr, params, filePos, tagContent, $super) {
    fileNameExpr = fileNameExpr === VOID ? this.fileNameExpr_1 : fileNameExpr;
    params = params === VOID ? this.params_1 : params;
    filePos = filePos === VOID ? this.filePos_1 : filePos;
    tagContent = tagContent === VOID ? this.tagContent_1 : tagContent;
    return $super === VOID ? this.copy_xpp6jh_k$(fileNameExpr, params, filePos, tagContent) : $super.copy_xpp6jh_k$.call(this, fileNameExpr, params, filePos, tagContent);
  };
  protoOf(BlockInclude).toString = function () {
    return 'BlockInclude(fileNameExpr=' + this.fileNameExpr_1 + ', params=' + this.params_1 + ', filePos=' + this.filePos_1 + ', tagContent=' + this.tagContent_1 + ')';
  };
  protoOf(BlockInclude).hashCode = function () {
    var result = hashCode(this.fileNameExpr_1);
    result = imul(result, 31) + this.params_1.hashCode() | 0;
    result = imul(result, 31) + this.filePos_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.tagContent_1) | 0;
    return result;
  };
  protoOf(BlockInclude).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlockInclude))
      return false;
    var tmp0_other_with_cast = other instanceof BlockInclude ? other : THROW_CCE();
    if (!equals(this.fileNameExpr_1, tmp0_other_with_cast.fileNameExpr_1))
      return false;
    if (!this.params_1.equals(tmp0_other_with_cast.params_1))
      return false;
    if (!this.filePos_1.equals(tmp0_other_with_cast.filePos_1))
      return false;
    if (!(this.tagContent_1 === tmp0_other_with_cast.tagContent_1))
      return false;
    return true;
  };
  function BlockMacro(funcname, args, body) {
    this.funcname_1 = funcname;
    this.args_1 = args;
    this.body_1 = body;
  }
  protoOf(BlockMacro).get_funcname_8yvffs_k$ = function () {
    return this.funcname_1;
  };
  protoOf(BlockMacro).get_args_woj09y_k$ = function () {
    return this.args_1;
  };
  protoOf(BlockMacro).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(BlockMacro).eval_vdy2zv_k$ = function (context, $completion) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = context.get_macros_giql2o_k$();
    var key = this.funcname_1;
    var value = new Macro(this.funcname_1, this.args_1, this.body_1);
    this_0.put_4fpzoq_k$(key, value);
    return Unit_getInstance();
  };
  protoOf(BlockMacro).component1_7eebsc_k$ = function () {
    return this.funcname_1;
  };
  protoOf(BlockMacro).component2_7eebsb_k$ = function () {
    return this.args_1;
  };
  protoOf(BlockMacro).component3_7eebsa_k$ = function () {
    return this.body_1;
  };
  protoOf(BlockMacro).copy_2vdj2r_k$ = function (funcname, args, body) {
    return new BlockMacro(funcname, args, body);
  };
  protoOf(BlockMacro).copy$default_dh3hqh_k$ = function (funcname, args, body, $super) {
    funcname = funcname === VOID ? this.funcname_1 : funcname;
    args = args === VOID ? this.args_1 : args;
    body = body === VOID ? this.body_1 : body;
    return $super === VOID ? this.copy_2vdj2r_k$(funcname, args, body) : $super.copy_2vdj2r_k$.call(this, funcname, args, body);
  };
  protoOf(BlockMacro).toString = function () {
    return 'BlockMacro(funcname=' + this.funcname_1 + ', args=' + this.args_1 + ', body=' + this.body_1 + ')';
  };
  protoOf(BlockMacro).hashCode = function () {
    var result = getStringHashCode(this.funcname_1);
    result = imul(result, 31) + hashCode(this.args_1) | 0;
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    return result;
  };
  protoOf(BlockMacro).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlockMacro))
      return false;
    var tmp0_other_with_cast = other instanceof BlockMacro ? other : THROW_CCE();
    if (!(this.funcname_1 === tmp0_other_with_cast.funcname_1))
      return false;
    if (!equals(this.args_1, tmp0_other_with_cast.args_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    return true;
  };
  function BlockSet(varname, expr) {
    this.varname_1 = varname;
    this.expr_1 = expr;
  }
  protoOf(BlockSet).get_varname_56ma15_k$ = function () {
    return this.varname_1;
  };
  protoOf(BlockSet).get_expr_wolovy_k$ = function () {
    return this.expr_1;
  };
  protoOf(BlockSet).eval_vdy2zv_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$32(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BlockSet).component1_7eebsc_k$ = function () {
    return this.varname_1;
  };
  protoOf(BlockSet).component2_7eebsb_k$ = function () {
    return this.expr_1;
  };
  protoOf(BlockSet).copy_k9ntyl_k$ = function (varname, expr) {
    return new BlockSet(varname, expr);
  };
  protoOf(BlockSet).copy$default_s2dqwe_k$ = function (varname, expr, $super) {
    varname = varname === VOID ? this.varname_1 : varname;
    expr = expr === VOID ? this.expr_1 : expr;
    return $super === VOID ? this.copy_k9ntyl_k$(varname, expr) : $super.copy_k9ntyl_k$.call(this, varname, expr);
  };
  protoOf(BlockSet).toString = function () {
    return 'BlockSet(varname=' + this.varname_1 + ', expr=' + this.expr_1 + ')';
  };
  protoOf(BlockSet).hashCode = function () {
    var result = getStringHashCode(this.varname_1);
    result = imul(result, 31) + hashCode(this.expr_1) | 0;
    return result;
  };
  protoOf(BlockSet).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlockSet))
      return false;
    var tmp0_other_with_cast = other instanceof BlockSet ? other : THROW_CCE();
    if (!(this.varname_1 === tmp0_other_with_cast.varname_1))
      return false;
    if (!equals(this.expr_1, tmp0_other_with_cast.expr_1))
      return false;
    return true;
  };
  function BlockText(content) {
    this.content_1 = content;
  }
  protoOf(BlockText).get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  protoOf(BlockText).eval_vdy2zv_k$ = function (context, $completion) {
    return context.get_write_j0vzjq_k$()(this.content_1, $completion);
  };
  protoOf(BlockText).component1_7eebsc_k$ = function () {
    return this.content_1;
  };
  protoOf(BlockText).copy_a35qlh_k$ = function (content) {
    return new BlockText(content);
  };
  protoOf(BlockText).copy$default_ub9uj2_k$ = function (content, $super) {
    content = content === VOID ? this.content_1 : content;
    return $super === VOID ? this.copy_a35qlh_k$(content) : $super.copy_a35qlh_k$.call(this, content);
  };
  protoOf(BlockText).toString = function () {
    return 'BlockText(content=' + this.content_1 + ')';
  };
  protoOf(BlockText).hashCode = function () {
    return getStringHashCode(this.content_1);
  };
  protoOf(BlockText).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlockText))
      return false;
    var tmp0_other_with_cast = other instanceof BlockText ? other : THROW_CCE();
    if (!(this.content_1 === tmp0_other_with_cast.content_1))
      return false;
    return true;
  };
  function DefaultBlocks() {
    DefaultBlocks_instance = this;
  }
  var DefaultBlocks_instance;
  function DefaultBlocks_getInstance() {
    if (DefaultBlocks_instance == null)
      new DefaultBlocks();
    return DefaultBlocks_instance;
  }
  function debugPrintln$delegate$lambda($this$$receiver) {
    _init_properties_KorteDefaults_kt__icmku9();
    return $this$$receiver.get_extra_ir3qw7_k$();
  }
  function debugPrintln$delegate$lambda_0() {
    _init_properties_KorteDefaults_kt__icmku9();
    return debugPrintln$delegate$lambda$lambda;
  }
  function debugPrintln$delegate$lambda$lambda(v) {
    _init_properties_KorteDefaults_kt__icmku9();
    println(v);
    return Unit_getInstance();
  }
  function debugPrintln$factory() {
    return getPropertyCallableRef('debugPrintln', 1, KMutableProperty1, function (receiver) {
      return get_debugPrintln(receiver);
    }, function (receiver, value) {
      return set_debugPrintln(receiver, value);
    });
  }
  function debugPrintln$factory_0() {
    return getPropertyCallableRef('debugPrintln', 1, KMutableProperty1, function (receiver) {
      return get_debugPrintln(receiver);
    }, function (receiver, value) {
      return set_debugPrintln(receiver, value);
    });
  }
  var properties_initialized_KorteDefaults_kt_5euytd;
  function _init_properties_KorteDefaults_kt__icmku9() {
    if (!properties_initialized_KorteDefaults_kt_5euytd) {
      properties_initialized_KorteDefaults_kt_5euytd = true;
      var tmp = debugPrintln$delegate$lambda;
      debugPrintln$delegate = new korteExtraProperty(tmp, VOID, debugPrintln$delegate$lambda_0);
    }
  }
  function $evalCOROUTINE$33(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$33).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1.items_1;
            var tmp_1 = this;
            tmp_1.this1__1 = this.this0__1;
            var tmp_2 = this;
            tmp_2.destination2__1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.this0__1, 10));
            this.tmp0_iterator3__1 = this.this1__1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator3__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.item4__1 = this.tmp0_iterator3__1.next_20eer_k$();
            var tmp_3 = this;
            tmp_3.it5__1 = this.item4__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.it5__1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.destination2__1.add_utx5q5_k$(ARGUMENT);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            return this.destination2__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $evalCOROUTINE$34(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$34).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1.items_1;
            var tmp_1 = this;
            tmp_1.this1__1 = this.this0__1;
            var tmp_2 = this;
            tmp_2.destination2__1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.this0__1, 10));
            this.tmp0_iterator3__1 = this.this1__1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator3__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.item4__1 = this.tmp0_iterator3__1.next_20eer_k$();
            var tmp_3 = this;
            tmp_3.it5__1 = this.item4__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.it5__1.get_first_irdx8n_k$().eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ARGUMENT6__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            suspendResult = this.it5__1.get_second_jf7fjx_k$().eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = to(this.ARGUMENT6__1, ARGUMENT);
            this.destination2__1.add_utx5q5_k$(ARGUMENT_0);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 4:
            var ARGUMENT_1 = this.destination2__1;
            return toMap_0(ARGUMENT_1);
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $evalCOROUTINE$35(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$35).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(13);
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.context_1.get_config_c0698r_k$().get_filters_cv7yzy_k$().get_wei43m_k$(this._this__u8e3s4__1.name_1);
            var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this.context_1.get_config_c0698r_k$().get_filters_cv7yzy_k$().get_wei43m_k$('unknown') : tmp0_elvis_lhs;
            tmp_0.filter0__1 = tmp1_elvis_lhs == null ? this.context_1.get_config_c0698r_k$().get_unknownFilter_kpyud5_k$() : tmp1_elvis_lhs;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            var tmp_1 = this;
            tmp_1.this2__1 = this.context_1.get_filterCtxPool_5gjvoi_k$();
            this.v3__1 = this.this2__1.alloc_1jbayd_k$();
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(12);
            var tmp_2 = this;
            tmp_2.it6__1 = this.v3__1;
            this.it6__1.set_tok_2m11ng_k$(this._this__u8e3s4__1.tok_1);
            this.it6__1.set_name_aqnlwe_k$(this._this__u8e3s4__1.name_1);
            this.it6__1.set_context_hkk6jc_k$(this.context_1);
            this.set_state_rjd8d0_k$(4);
            suspendResult = this._this__u8e3s4__1.expr_1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.ARGUMENT7__1 = suspendResult;
            this.it6__1.set_subject_2vr8jk_k$(this.ARGUMENT7__1);
            var tmp_3 = this;
            tmp_3.this8__1 = this._this__u8e3s4__1.params_1;
            var tmp_4 = this;
            tmp_4.this9__1 = this.this8__1;
            var tmp_5 = this;
            tmp_5.destination10__1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.this8__1, 10));
            this.tmp0_iterator11__1 = this.this9__1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            if (!this.tmp0_iterator11__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            }

            this.item12__1 = this.tmp0_iterator11__1.next_20eer_k$();
            var tmp_6 = this;
            tmp_6.it13__1 = this.item12__1;
            this.set_state_rjd8d0_k$(6);
            suspendResult = this.it13__1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.ARGUMENT14__1 = suspendResult;
            this.destination10__1.add_utx5q5_k$(this.ARGUMENT14__1);
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 7:
            this.ARGUMENT15__1 = this.destination10__1;
            this.it6__1.set_args_f0zwy2_k$(this.ARGUMENT15__1);
            this.set_state_rjd8d0_k$(8);
            suspendResult = this.filter0__1.get_eval_woln1h_k$()(this.it6__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.tmp$ret$05__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(13);
            this.set_state_rjd8d0_k$(9);
            var tmp_7 = this;
            continue $sm;
          case 9:
            var tmp_8 = this.tmp$ret$05__1;
            this.set_exceptionState_fex74n_k$(13);
            this.this2__1.free_3owydp_k$(this.v3__1);
            this.tmp$ret$41__1 = tmp_8;
            this.set_state_rjd8d0_k$(11);
            continue $sm;
          case 10:
            this.set_exceptionState_fex74n_k$(13);
            this.this2__1.free_3owydp_k$(this.v3__1);
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(11);
            continue $sm;
          case 11:
            return this.tmp$ret$41__1;
          case 12:
            this.set_exceptionState_fex74n_k$(13);
            var t = this.get_exception_x0n6w6_k$();
            this.this2__1.free_3owydp_k$(this.v3__1);
            throw t;
          case 13:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 13) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $evalCOROUTINE$36(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$36).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.expr_1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.obj0__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this._this__u8e3s4__1.name_1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.key1__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(3);
            suspendResult = KorteDynamic2_getInstance().accessAny_aov4i6_k$(this.obj0__1, this.key1__1, this.context_1.get_mapper_giyu6i_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var tmp_0 = this;
            return suspendResult;
          case 4:
            this.set_exceptionState_fex74n_k$(9);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Error) {
              this.e3__1 = this.get_exception_x0n6w6_k$();
              var tmp_2 = this.e3__1;
              if (tmp_2 instanceof CancellationException)
                throw this.e3__1;
              this.set_exceptionState_fex74n_k$(6);
              this.set_state_rjd8d0_k$(5);
              suspendResult = KorteDynamic2_getInstance().callAny_5ey320_k$(this.obj0__1, 'invoke', listOf_0(this.key1__1), this.context_1.get_mapper_giyu6i_k$(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 5:
            this.TRY_RESULT4__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 6:
            this.set_exceptionState_fex74n_k$(9);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_4 = this;
              if (e instanceof CancellationException)
                throw e;
              tmp_4.TRY_RESULT4__1 = null;
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 7:
            this.set_exceptionState_fex74n_k$(9);
            this.TRY_RESULT2__1 = this.TRY_RESULT4__1;
            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 8:
            this.set_exceptionState_fex74n_k$(9);
            return this.TRY_RESULT2__1;
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function $evalCOROUTINE$37(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$37).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(15);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1.args_1;
            var tmp_1 = this;
            tmp_1.this1__1 = this.this0__1;
            var tmp_2 = this;
            tmp_2.destination2__1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.this0__1, 10));
            this.tmp0_iterator3__1 = this.this1__1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator3__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.item4__1 = this.tmp0_iterator3__1.next_20eer_k$();
            var tmp_3 = this;
            tmp_3.it5__1 = this.item4__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.it5__1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ARGUMENT6__1 = suspendResult;
            this.destination2__1.add_utx5q5_k$(this.ARGUMENT6__1);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            this.processedArgs7__1 = this.destination2__1;
            this.tmp0_subject8__1 = this._this__u8e3s4__1.method_1;
            var tmp_4 = this.tmp0_subject8__1;
            if (tmp_4 instanceof ACCESS) {
              this.set_state_rjd8d0_k$(9);
              suspendResult = this._this__u8e3s4__1.method_1.expr_1.eval_pei61v_k$(this.context_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_5 = this.tmp0_subject8__1;
              if (tmp_5 instanceof VAR) {
                this.func9__1 = this.context_1.get_config_c0698r_k$().get_functions_66tuk2_k$().get_wei43m_k$(this._this__u8e3s4__1.method_1.name_1);
                if (!(this.func9__1 == null)) {
                  this.set_state_rjd8d0_k$(8);
                  suspendResult = this.func9__1.eval_bab7dp_k$(this.processedArgs7__1, this.context_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.set_state_rjd8d0_k$(4);
                  continue $sm;
                }
              } else {
                this.set_state_rjd8d0_k$(5);
                continue $sm;
              }
            }

          case 4:
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            this.ARGUMENT10__1 = KorteDynamic2_getInstance();
            this.set_state_rjd8d0_k$(6);
            suspendResult = this._this__u8e3s4__1.method_1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.ARGUMENT11__1 = suspendResult;
            this.set_state_rjd8d0_k$(7);
            suspendResult = this.ARGUMENT10__1.callAny_n32b5j_k$(this.ARGUMENT11__1, toList(this.processedArgs7__1), this.context_1.get_mapper_giyu6i_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            return suspendResult;
          case 8:
            return suspendResult;
          case 9:
            this.obj12__1 = suspendResult;
            this.set_state_rjd8d0_k$(10);
            suspendResult = this._this__u8e3s4__1.method_1.name_1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.methodName13__1 = suspendResult;
            var tmp_6 = this.obj12__1;
            if (!(tmp_6 == null) ? isInterface(tmp_6, Map) : false) {
              var tmp_7 = this;
              var this_0 = this.obj12__1;
              var key = this.methodName13__1;
              tmp_7.k14__1 = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).get_wei43m_k$(key);
              var tmp_8 = this.k14__1;
              if (!(tmp_8 == null) ? isInterface(tmp_8, DynamicInvokable) : false) {
                this.set_state_rjd8d0_k$(14);
                suspendResult = this.k14__1.invoke_gwkxz_k$(this.context_1, this.processedArgs7__1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(11);
                continue $sm;
              }
            } else {
              this.set_state_rjd8d0_k$(12);
              continue $sm;
            }

          case 11:
            this.set_state_rjd8d0_k$(12);
            continue $sm;
          case 12:
            this.set_state_rjd8d0_k$(13);
            suspendResult = KorteDynamic2_getInstance().callAny_5ey320_k$(this.obj12__1, this.methodName13__1, toList(this.processedArgs7__1), this.context_1.get_mapper_giyu6i_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            return suspendResult;
          case 14:
            return suspendResult;
          case 15:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 15) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $evalCOROUTINE$38(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$38).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.l_1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.lr0__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this._this__u8e3s4__1.r_1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.rr1__1 = suspendResult;
            this.tmp0_subject2__1 = this._this__u8e3s4__1.op_1;
            if (this.tmp0_subject2__1 === '~') {
              this.WHEN_RESULT3__1 = this._this__u8e3s4__1.toDynamicString_9srrng_k$(this.lr0__1) + this._this__u8e3s4__1.toDynamicString_9srrng_k$(this.rr1__1);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              if (this.tmp0_subject2__1 === '..') {
                this.set_state_rjd8d0_k$(3);
                suspendResult = KorteDefaultFunctions_getInstance().get_Range_ig8u7o_k$().eval_bab7dp_k$(listOf([this.lr0__1, this.rr1__1]), this.context_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.WHEN_RESULT3__1 = KorteDynamic2_getInstance().binop_k30s4w_k$(this.lr0__1, this.rr1__1, this._this__u8e3s4__1.op_1);
                this.set_state_rjd8d0_k$(4);
                continue $sm;
              }
            }

          case 3:
            this.WHEN_RESULT3__1 = suspendResult;
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            return this.WHEN_RESULT3__1;
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $evalCOROUTINE$39(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$39).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.cond_1.eval_pei61v_k$(this.context_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT1__1 = suspendResult;
            if (this._this__u8e3s4__1.toDynamicBool_bp1ztv_k$(this.ARGUMENT1__1)) {
              this.set_state_rjd8d0_k$(3);
              suspendResult = this._this__u8e3s4__1.etrue_1.eval_pei61v_k$(this.context_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this._this__u8e3s4__1.efalse_1.eval_pei61v_k$(this.context_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 3:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            return this.WHEN_RESULT0__1;
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $evalCOROUTINE$40(_this__u8e3s4, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.context_1 = context;
  }
  protoOf($evalCOROUTINE$40).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.tmp0_subject0__1 = this._this__u8e3s4__1.op_1;
            if (this.tmp0_subject0__1 === '' ? true : this.tmp0_subject0__1 === '+') {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this._this__u8e3s4__1.r_1.eval_pei61v_k$(this.context_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.ARGUMENT2__1 = KorteDynamic2_getInstance();
              this.set_state_rjd8d0_k$(1);
              suspendResult = this._this__u8e3s4__1.r_1.eval_pei61v_k$(this.context_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var ARGUMENT = suspendResult;
            this.WHEN_RESULT1__1 = this.ARGUMENT2__1.unop_castr5_k$(ARGUMENT, this._this__u8e3s4__1.op_1);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT1__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function _get_BINOPS_PRIORITIES_LIST__rky1ek($this) {
    return $this.BINOPS_PRIORITIES_LIST_1;
  }
  function _get_BINOPS__n58u74($this) {
    return $this.BINOPS_1;
  }
  function parseFinal($this, r) {
    if (!r.get_hasMore_csdhd2_k$()) {
      r.prevOrContext_icuisn_k$().exception_kh9cqz_k$('Expected expression');
    }
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tok = r.peek_21nx7_k$().get_text_wouvsm_k$().toUpperCase();
    var tmp;
    switch (tok) {
      case '!':
      case '~':
      case '-':
      case '+':
      case 'NOT':
        var op = tok;
        r.skip$default_4cz5fh_k$();
        var tmp_0 = parseFinal($this, r);
        tmp = new UNOP(tmp_0, op === 'NOT' ? '!' : op);
        break;
      case '(':
        r.read_22xsm_k$();
        var result = Companion_getInstance_5().parseExpr_vzogji_k$(r);
        if (!(r.read_22xsm_k$().get_text_wouvsm_k$() === ')'))
          throw RuntimeException_init_$Create$("Expected ')'");
        tmp = new UNOP(result, '');
        break;
      case '[':
        r.read_22xsm_k$();
        // Inline function 'kotlin.collections.arrayListOf' call

        var items = ArrayList_init_$Create$();
        loop: while (r.get_hasMore_csdhd2_k$() ? !(r.peek_21nx7_k$().get_text_wouvsm_k$() === ']') : false) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = Companion_getInstance_5().parseExpr_vzogji_k$(r);
          items.add_utx5q5_k$(element);
          switch (r.peek_21nx7_k$().get_text_wouvsm_k$()) {
            case ',':
              r.read_22xsm_k$();
              break;
            case ']':
              continue loop;
            default:
              r.peek_21nx7_k$().exception_kh9cqz_k$('Expected , or ]');
              break;
          }
        }

        expect(r, [']']);
        tmp = new ARRAY_LIT(items);
        break;
      case '{':
        r.read_22xsm_k$();
        // Inline function 'kotlin.collections.arrayListOf' call

        var items_0 = ArrayList_init_$Create$();
        loop_0: while (r.get_hasMore_csdhd2_k$() ? !(r.peek_21nx7_k$().get_text_wouvsm_k$() === '}') : false) {
          var k = parseFinal(Companion_getInstance_5(), r);
          expect(r, [':']);
          var v = Companion_getInstance_5().parseExpr_vzogji_k$(r);
          // Inline function 'kotlin.collections.plusAssign' call
          var element_0 = to(k, v);
          items_0.add_utx5q5_k$(element_0);
          switch (r.peek_21nx7_k$().get_text_wouvsm_k$()) {
            case ',':
              r.read_22xsm_k$();
              break;
            case '}':
              continue loop_0;
            default:
              r.peek_21nx7_k$().exception_kh9cqz_k$('Expected , or }');
              break;
          }
        }

        expect(r, ['}']);
        tmp = new OBJECT_LIT(items_0);
        break;
      default:
        var tmp_1;
        var tmp_2 = r.peek_21nx7_k$();
        if (tmp_2 instanceof TNumber) {
          var ntext = r.read_22xsm_k$().get_text_wouvsm_k$();
          var tmp4_subject = toDouble(ntext);
          var tmp_3;
          var tmp5_safe_receiver = toIntOrNull(ntext);
          if (tmp4_subject === (tmp5_safe_receiver == null ? null : tmp5_safe_receiver)) {
            var tmp6_elvis_lhs = toIntOrNull(ntext);
            tmp_3 = new LIT(tmp6_elvis_lhs == null ? 0 : tmp6_elvis_lhs);
          } else {
            var tmp7_safe_receiver = toLongOrNull(ntext);
            if (tmp4_subject === (tmp7_safe_receiver == null ? null : tmp7_safe_receiver.toDouble_ygsx0s_k$())) {
              var tmp8_elvis_lhs = toLongOrNull(ntext);
              tmp_3 = new LIT(tmp8_elvis_lhs == null ? new Long(0, 0) : tmp8_elvis_lhs);
            } else {
              var tmp9_elvis_lhs = toDoubleOrNull(ntext);
              tmp_3 = new LIT(tmp9_elvis_lhs == null ? 0.0 : tmp9_elvis_lhs);
            }
          }
          tmp_1 = tmp_3;
        } else {
          var tmp_4 = r.peek_21nx7_k$();
          if (tmp_4 instanceof TString) {
            var tmp_5 = r.read_22xsm_k$();
            tmp_1 = new LIT((tmp_5 instanceof TString ? tmp_5 : THROW_CCE()).processedValue_1);
          } else {
            var str = r.read_22xsm_k$().get_text_wouvsm_k$();
            switch (str) {
              case 'true':
                tmp_1 = new LIT(true);
                break;
              case 'false':
                tmp_1 = new LIT(false);
                break;
              case 'null':
              case 'nil':
                tmp_1 = new LIT(null);
                break;
              default:
                tmp_1 = new VAR(str);
                break;
            }
          }
        }

        tmp = tmp_1;
        break;
    }
    var construct = tmp;
    loop_1: while (r.get_hasMore_csdhd2_k$()) {
      switch (r.peek_21nx7_k$().get_text_wouvsm_k$()) {
        case '.':
          r.read_22xsm_k$();
          var id = r.read_22xsm_k$().get_text_wouvsm_k$();
          construct = new ACCESS(construct, new LIT(id));
          continue loop_1;
        case '[':
          r.read_22xsm_k$();
          var expr = Companion_getInstance_5().parseExpr_vzogji_k$(r);
          construct = new ACCESS(construct, expr);
          var end = r.read_22xsm_k$();
          if (!(end.get_text_wouvsm_k$() === ']')) {
            end.exception_kh9cqz_k$("Expected ']' but found " + end);
          }

          break;
        case '|':
          var tok_0 = r.read_22xsm_k$();
          var tmp12_safe_receiver = r.tryRead_halwjz_k$();
          var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.get_text_wouvsm_k$();
          var name = tmp13_elvis_lhs == null ? '' : tmp13_elvis_lhs;
          // Inline function 'kotlin.collections.arrayListOf' call

          var args = ArrayList_init_$Create$();
          // Inline function 'kotlin.text.isEmpty' call

          if (charSequenceLength(name) === 0) {
            tok_0.exception_kh9cqz_k$('Missing filter name');
          }

          if (r.get_hasMore_csdhd2_k$()) {
            var tmp14_subject = r.peek_21nx7_k$().get_text_wouvsm_k$();
            if (tmp14_subject === ':') {
              r.read_22xsm_k$();
              callargsloop: while (r.get_hasMore_csdhd2_k$()) {
                // Inline function 'kotlin.collections.plusAssign' call
                var element_1 = Companion_getInstance_5().parseExpr_vzogji_k$(r);
                args.add_utx5q5_k$(element_1);
                if (r.get_hasMore_csdhd2_k$() ? r.peek_21nx7_k$().get_text_wouvsm_k$() === ',' : false) {
                  r.read_22xsm_k$();
                }
              }
            } else if (tmp14_subject === '(') {
              r.read_22xsm_k$();
              callargsloop_0: while (r.get_hasMore_csdhd2_k$() ? !(r.peek_21nx7_k$().get_text_wouvsm_k$() === ')') : false) {
                // Inline function 'kotlin.collections.plusAssign' call
                var element_2 = Companion_getInstance_5().parseExpr_vzogji_k$(r);
                args.add_utx5q5_k$(element_2);
                var tmp15_subject = expectPeek(r, [',', ')']).get_text_wouvsm_k$();
                if (tmp15_subject === ',') {
                  r.read_22xsm_k$();
                } else if (tmp15_subject === ')')
                  break callargsloop_0;
              }
              expect(r, [')']);
            }
          }

          construct = new FILTER(name, construct, args, tok_0);
          break;
        case '(':
          r.read_22xsm_k$();
          // Inline function 'kotlin.collections.arrayListOf' call

          var args_0 = ArrayList_init_$Create$();
          callargsloop_1: while (r.get_hasMore_csdhd2_k$() ? !(r.peek_21nx7_k$().get_text_wouvsm_k$() === ')') : false) {
            // Inline function 'kotlin.collections.plusAssign' call
            var element_3 = Companion_getInstance_5().parseExpr_vzogji_k$(r);
            args_0.add_utx5q5_k$(element_3);
            var tmp16_subject = expectPeek(r, [',', ')']).get_text_wouvsm_k$();
            if (tmp16_subject === ',') {
              r.read_22xsm_k$();
            } else if (tmp16_subject === ')')
              break callargsloop_1;
          }

          expect(r, [')']);
          construct = new CALL(construct, args_0);
          break;
        default:
          break loop_1;
      }
    }
    return construct;
  }
  function _get_OPERATORS__dj7cvy($this) {
    return $this.OPERATORS_1;
  }
  function tokenize$emit_0($context, out, str, tpos) {
    Companion_getInstance_4().annotate_ypgrcl_k$(str, $context, tpos);
    // Inline function 'kotlin.collections.plusAssign' call
    out.add_utx5q5_k$(str);
  }
  function isLetterDigitOrUnderscore$ref() {
    var l = function (p0) {
      return isLetterDigitOrUnderscore(p0.value_1);
    };
    l.callableName = 'isLetterDigitOrUnderscore';
    return l;
  }
  function isLetterDigitOrUnderscore$ref_0() {
    var l = function (p0) {
      return isLetterDigitOrUnderscore(p0.value_1);
    };
    l.callableName = 'isLetterDigitOrUnderscore';
    return l;
  }
  function TId(text) {
    this.text_1 = text;
    this.$$delegate_0__1 = new Mixin();
  }
  protoOf(TId).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(TId).set_file_aztlmr_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_file_aztlmr_k$(_set____db54di);
  };
  protoOf(TId).get_file_wom0n9_k$ = function () {
    return this.$$delegate_0__1.get_file_wom0n9_k$();
  };
  protoOf(TId).set_pos_tfwdvz_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_pos_tfwdvz_k$(_set____db54di);
  };
  protoOf(TId).get_pos_18iyad_k$ = function () {
    return this.$$delegate_0__1.get_pos_18iyad_k$();
  };
  protoOf(TId).get_posContext_avexqc_k$ = function () {
    return this.$$delegate_0__1.get_posContext_avexqc_k$();
  };
  protoOf(TId).exception_kh9cqz_k$ = function (msg) {
    this.$$delegate_0__1.exception_kh9cqz_k$(msg);
  };
  protoOf(TId).component1_7eebsc_k$ = function () {
    return this.text_1;
  };
  protoOf(TId).copy_a35qlh_k$ = function (text) {
    return new TId(text);
  };
  protoOf(TId).copy$default_t9fwgb_k$ = function (text, $super) {
    text = text === VOID ? this.text_1 : text;
    return $super === VOID ? this.copy_a35qlh_k$(text) : $super.copy_a35qlh_k$.call(this, text);
  };
  protoOf(TId).toString = function () {
    return 'TId(text=' + this.text_1 + ')';
  };
  protoOf(TId).hashCode = function () {
    return getStringHashCode(this.text_1);
  };
  protoOf(TId).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TId))
      return false;
    var tmp0_other_with_cast = other instanceof TId ? other : THROW_CCE();
    if (!(this.text_1 === tmp0_other_with_cast.text_1))
      return false;
    return true;
  };
  function TNumber(text) {
    this.text_1 = text;
    this.$$delegate_0__1 = new Mixin();
  }
  protoOf(TNumber).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(TNumber).set_file_aztlmr_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_file_aztlmr_k$(_set____db54di);
  };
  protoOf(TNumber).get_file_wom0n9_k$ = function () {
    return this.$$delegate_0__1.get_file_wom0n9_k$();
  };
  protoOf(TNumber).set_pos_tfwdvz_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_pos_tfwdvz_k$(_set____db54di);
  };
  protoOf(TNumber).get_pos_18iyad_k$ = function () {
    return this.$$delegate_0__1.get_pos_18iyad_k$();
  };
  protoOf(TNumber).get_posContext_avexqc_k$ = function () {
    return this.$$delegate_0__1.get_posContext_avexqc_k$();
  };
  protoOf(TNumber).exception_kh9cqz_k$ = function (msg) {
    this.$$delegate_0__1.exception_kh9cqz_k$(msg);
  };
  protoOf(TNumber).component1_7eebsc_k$ = function () {
    return this.text_1;
  };
  protoOf(TNumber).copy_a35qlh_k$ = function (text) {
    return new TNumber(text);
  };
  protoOf(TNumber).copy$default_6ipasj_k$ = function (text, $super) {
    text = text === VOID ? this.text_1 : text;
    return $super === VOID ? this.copy_a35qlh_k$(text) : $super.copy_a35qlh_k$.call(this, text);
  };
  protoOf(TNumber).toString = function () {
    return 'TNumber(text=' + this.text_1 + ')';
  };
  protoOf(TNumber).hashCode = function () {
    return getStringHashCode(this.text_1);
  };
  protoOf(TNumber).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TNumber))
      return false;
    var tmp0_other_with_cast = other instanceof TNumber ? other : THROW_CCE();
    if (!(this.text_1 === tmp0_other_with_cast.text_1))
      return false;
    return true;
  };
  function TString(text, processedValue) {
    this.text_1 = text;
    this.processedValue_1 = processedValue;
    this.$$delegate_0__1 = new Mixin();
  }
  protoOf(TString).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(TString).get_processedValue_r3icz8_k$ = function () {
    return this.processedValue_1;
  };
  protoOf(TString).set_file_aztlmr_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_file_aztlmr_k$(_set____db54di);
  };
  protoOf(TString).get_file_wom0n9_k$ = function () {
    return this.$$delegate_0__1.get_file_wom0n9_k$();
  };
  protoOf(TString).set_pos_tfwdvz_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_pos_tfwdvz_k$(_set____db54di);
  };
  protoOf(TString).get_pos_18iyad_k$ = function () {
    return this.$$delegate_0__1.get_pos_18iyad_k$();
  };
  protoOf(TString).get_posContext_avexqc_k$ = function () {
    return this.$$delegate_0__1.get_posContext_avexqc_k$();
  };
  protoOf(TString).exception_kh9cqz_k$ = function (msg) {
    this.$$delegate_0__1.exception_kh9cqz_k$(msg);
  };
  protoOf(TString).component1_7eebsc_k$ = function () {
    return this.text_1;
  };
  protoOf(TString).component2_7eebsb_k$ = function () {
    return this.processedValue_1;
  };
  protoOf(TString).copy_plwnsl_k$ = function (text, processedValue) {
    return new TString(text, processedValue);
  };
  protoOf(TString).copy$default_vzummy_k$ = function (text, processedValue, $super) {
    text = text === VOID ? this.text_1 : text;
    processedValue = processedValue === VOID ? this.processedValue_1 : processedValue;
    return $super === VOID ? this.copy_plwnsl_k$(text, processedValue) : $super.copy_plwnsl_k$.call(this, text, processedValue);
  };
  protoOf(TString).toString = function () {
    return 'TString(text=' + this.text_1 + ', processedValue=' + this.processedValue_1 + ')';
  };
  protoOf(TString).hashCode = function () {
    var result = getStringHashCode(this.text_1);
    result = imul(result, 31) + getStringHashCode(this.processedValue_1) | 0;
    return result;
  };
  protoOf(TString).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TString))
      return false;
    var tmp0_other_with_cast = other instanceof TString ? other : THROW_CCE();
    if (!(this.text_1 === tmp0_other_with_cast.text_1))
      return false;
    if (!(this.processedValue_1 === tmp0_other_with_cast.processedValue_1))
      return false;
    return true;
  };
  function TOperator(text) {
    this.text_1 = text;
    this.$$delegate_0__1 = new Mixin();
  }
  protoOf(TOperator).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(TOperator).set_file_aztlmr_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_file_aztlmr_k$(_set____db54di);
  };
  protoOf(TOperator).get_file_wom0n9_k$ = function () {
    return this.$$delegate_0__1.get_file_wom0n9_k$();
  };
  protoOf(TOperator).set_pos_tfwdvz_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_pos_tfwdvz_k$(_set____db54di);
  };
  protoOf(TOperator).get_pos_18iyad_k$ = function () {
    return this.$$delegate_0__1.get_pos_18iyad_k$();
  };
  protoOf(TOperator).get_posContext_avexqc_k$ = function () {
    return this.$$delegate_0__1.get_posContext_avexqc_k$();
  };
  protoOf(TOperator).exception_kh9cqz_k$ = function (msg) {
    this.$$delegate_0__1.exception_kh9cqz_k$(msg);
  };
  protoOf(TOperator).component1_7eebsc_k$ = function () {
    return this.text_1;
  };
  protoOf(TOperator).copy_a35qlh_k$ = function (text) {
    return new TOperator(text);
  };
  protoOf(TOperator).copy$default_61egde_k$ = function (text, $super) {
    text = text === VOID ? this.text_1 : text;
    return $super === VOID ? this.copy_a35qlh_k$(text) : $super.copy_a35qlh_k$.call(this, text);
  };
  protoOf(TOperator).toString = function () {
    return 'TOperator(text=' + this.text_1 + ')';
  };
  protoOf(TOperator).hashCode = function () {
    return getStringHashCode(this.text_1);
  };
  protoOf(TOperator).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TOperator))
      return false;
    var tmp0_other_with_cast = other instanceof TOperator ? other : THROW_CCE();
    if (!(this.text_1 === tmp0_other_with_cast.text_1))
      return false;
    return true;
  };
  function TEnd(text) {
    text = text === VOID ? '' : text;
    this.text_1 = text;
    this.$$delegate_0__1 = new Mixin();
  }
  protoOf(TEnd).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(TEnd).set_file_aztlmr_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_file_aztlmr_k$(_set____db54di);
  };
  protoOf(TEnd).get_file_wom0n9_k$ = function () {
    return this.$$delegate_0__1.get_file_wom0n9_k$();
  };
  protoOf(TEnd).set_pos_tfwdvz_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_pos_tfwdvz_k$(_set____db54di);
  };
  protoOf(TEnd).get_pos_18iyad_k$ = function () {
    return this.$$delegate_0__1.get_pos_18iyad_k$();
  };
  protoOf(TEnd).get_posContext_avexqc_k$ = function () {
    return this.$$delegate_0__1.get_posContext_avexqc_k$();
  };
  protoOf(TEnd).exception_kh9cqz_k$ = function (msg) {
    this.$$delegate_0__1.exception_kh9cqz_k$(msg);
  };
  protoOf(TEnd).component1_7eebsc_k$ = function () {
    return this.text_1;
  };
  protoOf(TEnd).copy_a35qlh_k$ = function (text) {
    return new TEnd(text);
  };
  protoOf(TEnd).copy$default_ybnlqd_k$ = function (text, $super) {
    text = text === VOID ? this.text_1 : text;
    return $super === VOID ? this.copy_a35qlh_k$(text) : $super.copy_a35qlh_k$.call(this, text);
  };
  protoOf(TEnd).toString = function () {
    return 'TEnd(text=' + this.text_1 + ')';
  };
  protoOf(TEnd).hashCode = function () {
    return getStringHashCode(this.text_1);
  };
  protoOf(TEnd).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TEnd))
      return false;
    var tmp0_other_with_cast = other instanceof TEnd ? other : THROW_CCE();
    if (!(this.text_1 === tmp0_other_with_cast.text_1))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.OPERATORS_1 = setOf(['(', ')', '[', ']', '{', '}', '&&', '||', '&', '|', '^', '==', '===', '!=', '!==', '<', '>', '<=', '>=', '<=>', '?:', '..', '+', '-', '*', '/', '%', '**', '!', '~', '.', ',', ';', ':', '?', '=']);
  }
  protoOf(Companion_3).annotate_ypgrcl_k$ = function (_this__u8e3s4, context, tpos) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.Companion.annotate.<anonymous>' call
    _this__u8e3s4.set_pos_tfwdvz_k$(context.get_pos_18iyad_k$() + tpos | 0);
    _this__u8e3s4.set_file_aztlmr_k$(context.get_file_wom0n9_k$());
    return _this__u8e3s4;
  };
  protoOf(Companion_3).tokenize_8a1bzl_k$ = function (str, context) {
    var r = new KorteStrReader(str);
    // Inline function 'kotlin.collections.arrayListOf' call
    var out = ArrayList_init_$Create$();
    while (r.get_hasMore_csdhd2_k$()) {
      var start = r.get_pos_18iyad_k$();
      r.skipSpaces_kdzwp0_k$();
      var dstart = r.get_pos_18iyad_k$();
      var id = r.readWhile_aeez89_k$(isLetterDigitOrUnderscore$ref());
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(id) > 0) {
        if (isDigit(charSequenceGet(id, 0))) {
          if (r.peekChar_2c2lw3_k$() === _Char___init__impl__6a9atx(46) ? isDigit(charSequenceGet(r.peek_6g603_k$(2), 1)) : false) {
            r.skip_23pfj_k$();
            var decimalPart = r.readWhile_aeez89_k$(isLetterDigitOrUnderscore$ref_0());
            tokenize$emit_0(context, out, new TNumber(id + '.' + decimalPart), dstart);
          } else {
            tokenize$emit_0(context, out, new TNumber(id), dstart);
          }
        } else {
          tokenize$emit_0(context, out, new TId(id), dstart);
        }
      }
      r.skipSpaces_kdzwp0_k$();
      var dstart2 = r.get_pos_18iyad_k$();
      if (this.OPERATORS_1.contains_aljjnj_k$(r.peek_6g603_k$(3))) {
        tokenize$emit_0(context, out, new TOperator(r.read_yyte66_k$(3)), dstart2);
      }
      if (this.OPERATORS_1.contains_aljjnj_k$(r.peek_6g603_k$(2))) {
        tokenize$emit_0(context, out, new TOperator(r.read_yyte66_k$(2)), dstart2);
      }
      if (this.OPERATORS_1.contains_aljjnj_k$(r.peek_6g603_k$(1))) {
        tokenize$emit_0(context, out, new TOperator(r.read_yyte66_k$(1)), dstart2);
      }
      if (r.peekChar_2c2lw3_k$() === _Char___init__impl__6a9atx(39) ? true : r.peekChar_2c2lw3_k$() === _Char___init__impl__6a9atx(34)) {
        var dstart3 = r.get_pos_18iyad_k$();
        var strStart = r.read_8wmrfs_k$();
        var tmp0_elvis_lhs = r.readUntil_l8xim3_k$(strStart);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          context.withPosAdd_pw7gnv_k$(dstart3).exception_kh9cqz_k$('String literal not closed');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var strBody = tmp;
        var strEnd = r.read_8wmrfs_k$();
        // Inline function 'kotlin.text.plus' call
        var tmp$ret$2 = toString_1(strStart) + strBody;
        tokenize$emit_0(context, out, new TString(tmp$ret$2 + toString_1(strEnd), unescape(strBody)), dstart3);
      }
      var end = r.get_pos_18iyad_k$();
      if (end === start) {
        context.withPosAdd_pw7gnv_k$(end).exception_kh9cqz_k$("Don't know how to handle '" + toString_1(r.peekChar_2c2lw3_k$()) + "'");
      }
    }
    var dstart_0 = r.get_pos_18iyad_k$();
    return new KorteListReader(out, this.annotate_ypgrcl_k$(new TEnd(), context, dstart_0));
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function VAR(name) {
    this.name_1 = name;
  }
  protoOf(VAR).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(VAR).eval_pei61v_k$ = function (context, $completion) {
    return context.get_config_c0698r_k$().get_variableProcessor_qu4ldf_k$()(context, this.name_1, $completion);
  };
  protoOf(VAR).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(VAR).copy_a35qlh_k$ = function (name) {
    return new VAR(name);
  };
  protoOf(VAR).copy$default_g18j1q_k$ = function (name, $super) {
    name = name === VOID ? this.name_1 : name;
    return $super === VOID ? this.copy_a35qlh_k$(name) : $super.copy_a35qlh_k$.call(this, name);
  };
  protoOf(VAR).toString = function () {
    return 'VAR(name=' + this.name_1 + ')';
  };
  protoOf(VAR).hashCode = function () {
    return getStringHashCode(this.name_1);
  };
  protoOf(VAR).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VAR))
      return false;
    var tmp0_other_with_cast = other instanceof VAR ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    return true;
  };
  function LIT(value) {
    this.value_1 = value;
  }
  protoOf(LIT).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(LIT).eval_pei61v_k$ = function (context, $completion) {
    return this.value_1;
  };
  protoOf(LIT).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(LIT).copy_ec15o6_k$ = function (value) {
    return new LIT(value);
  };
  protoOf(LIT).copy$default_746ma1_k$ = function (value, $super) {
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_ec15o6_k$(value) : $super.copy_ec15o6_k$.call(this, value);
  };
  protoOf(LIT).toString = function () {
    return 'LIT(value=' + toString_0(this.value_1) + ')';
  };
  protoOf(LIT).hashCode = function () {
    return this.value_1 == null ? 0 : hashCode(this.value_1);
  };
  protoOf(LIT).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LIT))
      return false;
    var tmp0_other_with_cast = other instanceof LIT ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function ARRAY_LIT(items) {
    this.items_1 = items;
  }
  protoOf(ARRAY_LIT).get_items_it823b_k$ = function () {
    return this.items_1;
  };
  protoOf(ARRAY_LIT).eval_pei61v_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$33(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ARRAY_LIT).component1_7eebsc_k$ = function () {
    return this.items_1;
  };
  protoOf(ARRAY_LIT).copy_b7yxjd_k$ = function (items) {
    return new ARRAY_LIT(items);
  };
  protoOf(ARRAY_LIT).copy$default_2a80vw_k$ = function (items, $super) {
    items = items === VOID ? this.items_1 : items;
    return $super === VOID ? this.copy_b7yxjd_k$(items) : $super.copy_b7yxjd_k$.call(this, items);
  };
  protoOf(ARRAY_LIT).toString = function () {
    return 'ARRAY_LIT(items=' + this.items_1 + ')';
  };
  protoOf(ARRAY_LIT).hashCode = function () {
    return hashCode(this.items_1);
  };
  protoOf(ARRAY_LIT).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ARRAY_LIT))
      return false;
    var tmp0_other_with_cast = other instanceof ARRAY_LIT ? other : THROW_CCE();
    if (!equals(this.items_1, tmp0_other_with_cast.items_1))
      return false;
    return true;
  };
  function OBJECT_LIT(items) {
    this.items_1 = items;
  }
  protoOf(OBJECT_LIT).get_items_it823b_k$ = function () {
    return this.items_1;
  };
  protoOf(OBJECT_LIT).eval_pei61v_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$34(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(OBJECT_LIT).component1_7eebsc_k$ = function () {
    return this.items_1;
  };
  protoOf(OBJECT_LIT).copy_qosed_k$ = function (items) {
    return new OBJECT_LIT(items);
  };
  protoOf(OBJECT_LIT).copy$default_xwsdlg_k$ = function (items, $super) {
    items = items === VOID ? this.items_1 : items;
    return $super === VOID ? this.copy_qosed_k$(items) : $super.copy_qosed_k$.call(this, items);
  };
  protoOf(OBJECT_LIT).toString = function () {
    return 'OBJECT_LIT(items=' + this.items_1 + ')';
  };
  protoOf(OBJECT_LIT).hashCode = function () {
    return hashCode(this.items_1);
  };
  protoOf(OBJECT_LIT).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OBJECT_LIT))
      return false;
    var tmp0_other_with_cast = other instanceof OBJECT_LIT ? other : THROW_CCE();
    if (!equals(this.items_1, tmp0_other_with_cast.items_1))
      return false;
    return true;
  };
  function FILTER(name, expr, params, tok) {
    this.name_1 = name;
    this.expr_1 = expr;
    this.params_1 = params;
    this.tok_1 = tok;
  }
  protoOf(FILTER).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(FILTER).get_expr_wolovy_k$ = function () {
    return this.expr_1;
  };
  protoOf(FILTER).get_params_hy4oen_k$ = function () {
    return this.params_1;
  };
  protoOf(FILTER).get_tok_18ivbt_k$ = function () {
    return this.tok_1;
  };
  protoOf(FILTER).eval_pei61v_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$35(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FILTER).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(FILTER).component2_7eebsb_k$ = function () {
    return this.expr_1;
  };
  protoOf(FILTER).component3_7eebsa_k$ = function () {
    return this.params_1;
  };
  protoOf(FILTER).component4_7eebs9_k$ = function () {
    return this.tok_1;
  };
  protoOf(FILTER).copy_qrbonw_k$ = function (name, expr, params, tok) {
    return new FILTER(name, expr, params, tok);
  };
  protoOf(FILTER).copy$default_p4a2fd_k$ = function (name, expr, params, tok, $super) {
    name = name === VOID ? this.name_1 : name;
    expr = expr === VOID ? this.expr_1 : expr;
    params = params === VOID ? this.params_1 : params;
    tok = tok === VOID ? this.tok_1 : tok;
    return $super === VOID ? this.copy_qrbonw_k$(name, expr, params, tok) : $super.copy_qrbonw_k$.call(this, name, expr, params, tok);
  };
  protoOf(FILTER).toString = function () {
    return 'FILTER(name=' + this.name_1 + ', expr=' + this.expr_1 + ', params=' + this.params_1 + ', tok=' + this.tok_1 + ')';
  };
  protoOf(FILTER).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.expr_1) | 0;
    result = imul(result, 31) + hashCode(this.params_1) | 0;
    result = imul(result, 31) + hashCode(this.tok_1) | 0;
    return result;
  };
  protoOf(FILTER).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FILTER))
      return false;
    var tmp0_other_with_cast = other instanceof FILTER ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.expr_1, tmp0_other_with_cast.expr_1))
      return false;
    if (!equals(this.params_1, tmp0_other_with_cast.params_1))
      return false;
    if (!equals(this.tok_1, tmp0_other_with_cast.tok_1))
      return false;
    return true;
  };
  function ACCESS(expr, name) {
    this.expr_1 = expr;
    this.name_1 = name;
  }
  protoOf(ACCESS).get_expr_wolovy_k$ = function () {
    return this.expr_1;
  };
  protoOf(ACCESS).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(ACCESS).eval_pei61v_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$36(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ACCESS).component1_7eebsc_k$ = function () {
    return this.expr_1;
  };
  protoOf(ACCESS).component2_7eebsb_k$ = function () {
    return this.name_1;
  };
  protoOf(ACCESS).copy_afol3l_k$ = function (expr, name) {
    return new ACCESS(expr, name);
  };
  protoOf(ACCESS).copy$default_rofqgm_k$ = function (expr, name, $super) {
    expr = expr === VOID ? this.expr_1 : expr;
    name = name === VOID ? this.name_1 : name;
    return $super === VOID ? this.copy_afol3l_k$(expr, name) : $super.copy_afol3l_k$.call(this, expr, name);
  };
  protoOf(ACCESS).toString = function () {
    return 'ACCESS(expr=' + this.expr_1 + ', name=' + this.name_1 + ')';
  };
  protoOf(ACCESS).hashCode = function () {
    var result = hashCode(this.expr_1);
    result = imul(result, 31) + hashCode(this.name_1) | 0;
    return result;
  };
  protoOf(ACCESS).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ACCESS))
      return false;
    var tmp0_other_with_cast = other instanceof ACCESS ? other : THROW_CCE();
    if (!equals(this.expr_1, tmp0_other_with_cast.expr_1))
      return false;
    if (!equals(this.name_1, tmp0_other_with_cast.name_1))
      return false;
    return true;
  };
  function CALL(method, args) {
    this.method_1 = method;
    this.args_1 = args;
  }
  protoOf(CALL).get_method_gl8esq_k$ = function () {
    return this.method_1;
  };
  protoOf(CALL).get_args_woj09y_k$ = function () {
    return this.args_1;
  };
  protoOf(CALL).eval_pei61v_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$37(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(CALL).component1_7eebsc_k$ = function () {
    return this.method_1;
  };
  protoOf(CALL).component2_7eebsb_k$ = function () {
    return this.args_1;
  };
  protoOf(CALL).copy_ex6h7p_k$ = function (method, args) {
    return new CALL(method, args);
  };
  protoOf(CALL).copy$default_k8dmya_k$ = function (method, args, $super) {
    method = method === VOID ? this.method_1 : method;
    args = args === VOID ? this.args_1 : args;
    return $super === VOID ? this.copy_ex6h7p_k$(method, args) : $super.copy_ex6h7p_k$.call(this, method, args);
  };
  protoOf(CALL).toString = function () {
    return 'CALL(method=' + this.method_1 + ', args=' + this.args_1 + ')';
  };
  protoOf(CALL).hashCode = function () {
    var result = hashCode(this.method_1);
    result = imul(result, 31) + hashCode(this.args_1) | 0;
    return result;
  };
  protoOf(CALL).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CALL))
      return false;
    var tmp0_other_with_cast = other instanceof CALL ? other : THROW_CCE();
    if (!equals(this.method_1, tmp0_other_with_cast.method_1))
      return false;
    if (!equals(this.args_1, tmp0_other_with_cast.args_1))
      return false;
    return true;
  };
  function BINOP(l, r, op) {
    this.l_1 = l;
    this.r_1 = r;
    this.op_1 = op;
  }
  protoOf(BINOP).get_l_1mhr5v_k$ = function () {
    return this.l_1;
  };
  protoOf(BINOP).get_r_1mhr61_k$ = function () {
    return this.r_1;
  };
  protoOf(BINOP).get_op_kntnrq_k$ = function () {
    return this.op_1;
  };
  protoOf(BINOP).eval_pei61v_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$38(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BINOP).component1_7eebsc_k$ = function () {
    return this.l_1;
  };
  protoOf(BINOP).component2_7eebsb_k$ = function () {
    return this.r_1;
  };
  protoOf(BINOP).component3_7eebsa_k$ = function () {
    return this.op_1;
  };
  protoOf(BINOP).copy_jpouev_k$ = function (l, r, op) {
    return new BINOP(l, r, op);
  };
  protoOf(BINOP).copy$default_obpiy9_k$ = function (l, r, op, $super) {
    l = l === VOID ? this.l_1 : l;
    r = r === VOID ? this.r_1 : r;
    op = op === VOID ? this.op_1 : op;
    return $super === VOID ? this.copy_jpouev_k$(l, r, op) : $super.copy_jpouev_k$.call(this, l, r, op);
  };
  protoOf(BINOP).toString = function () {
    return 'BINOP(l=' + this.l_1 + ', r=' + this.r_1 + ', op=' + this.op_1 + ')';
  };
  protoOf(BINOP).hashCode = function () {
    var result = hashCode(this.l_1);
    result = imul(result, 31) + hashCode(this.r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.op_1) | 0;
    return result;
  };
  protoOf(BINOP).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BINOP))
      return false;
    var tmp0_other_with_cast = other instanceof BINOP ? other : THROW_CCE();
    if (!equals(this.l_1, tmp0_other_with_cast.l_1))
      return false;
    if (!equals(this.r_1, tmp0_other_with_cast.r_1))
      return false;
    if (!(this.op_1 === tmp0_other_with_cast.op_1))
      return false;
    return true;
  };
  function TERNARY(cond, etrue, efalse) {
    this.cond_1 = cond;
    this.etrue_1 = etrue;
    this.efalse_1 = efalse;
  }
  protoOf(TERNARY).get_cond_wok86j_k$ = function () {
    return this.cond_1;
  };
  protoOf(TERNARY).get_etrue_ir15je_k$ = function () {
    return this.etrue_1;
  };
  protoOf(TERNARY).get_efalse_ct36jr_k$ = function () {
    return this.efalse_1;
  };
  protoOf(TERNARY).eval_pei61v_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$39(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(TERNARY).component1_7eebsc_k$ = function () {
    return this.cond_1;
  };
  protoOf(TERNARY).component2_7eebsb_k$ = function () {
    return this.etrue_1;
  };
  protoOf(TERNARY).component3_7eebsa_k$ = function () {
    return this.efalse_1;
  };
  protoOf(TERNARY).copy_157iwv_k$ = function (cond, etrue, efalse) {
    return new TERNARY(cond, etrue, efalse);
  };
  protoOf(TERNARY).copy$default_xmyp22_k$ = function (cond, etrue, efalse, $super) {
    cond = cond === VOID ? this.cond_1 : cond;
    etrue = etrue === VOID ? this.etrue_1 : etrue;
    efalse = efalse === VOID ? this.efalse_1 : efalse;
    return $super === VOID ? this.copy_157iwv_k$(cond, etrue, efalse) : $super.copy_157iwv_k$.call(this, cond, etrue, efalse);
  };
  protoOf(TERNARY).toString = function () {
    return 'TERNARY(cond=' + this.cond_1 + ', etrue=' + this.etrue_1 + ', efalse=' + this.efalse_1 + ')';
  };
  protoOf(TERNARY).hashCode = function () {
    var result = hashCode(this.cond_1);
    result = imul(result, 31) + hashCode(this.etrue_1) | 0;
    result = imul(result, 31) + hashCode(this.efalse_1) | 0;
    return result;
  };
  protoOf(TERNARY).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TERNARY))
      return false;
    var tmp0_other_with_cast = other instanceof TERNARY ? other : THROW_CCE();
    if (!equals(this.cond_1, tmp0_other_with_cast.cond_1))
      return false;
    if (!equals(this.etrue_1, tmp0_other_with_cast.etrue_1))
      return false;
    if (!equals(this.efalse_1, tmp0_other_with_cast.efalse_1))
      return false;
    return true;
  };
  function UNOP(r, op) {
    this.r_1 = r;
    this.op_1 = op;
  }
  protoOf(UNOP).get_r_1mhr61_k$ = function () {
    return this.r_1;
  };
  protoOf(UNOP).get_op_kntnrq_k$ = function () {
    return this.op_1;
  };
  protoOf(UNOP).eval_pei61v_k$ = function (context, $completion) {
    var tmp = new $evalCOROUTINE$40(this, context, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(UNOP).component1_7eebsc_k$ = function () {
    return this.r_1;
  };
  protoOf(UNOP).component2_7eebsb_k$ = function () {
    return this.op_1;
  };
  protoOf(UNOP).copy_onjn93_k$ = function (r, op) {
    return new UNOP(r, op);
  };
  protoOf(UNOP).copy$default_k6t4mq_k$ = function (r, op, $super) {
    r = r === VOID ? this.r_1 : r;
    op = op === VOID ? this.op_1 : op;
    return $super === VOID ? this.copy_onjn93_k$(r, op) : $super.copy_onjn93_k$.call(this, r, op);
  };
  protoOf(UNOP).toString = function () {
    return 'UNOP(r=' + this.r_1 + ', op=' + this.op_1 + ')';
  };
  protoOf(UNOP).hashCode = function () {
    var result = hashCode(this.r_1);
    result = imul(result, 31) + getStringHashCode(this.op_1) | 0;
    return result;
  };
  protoOf(UNOP).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UNOP))
      return false;
    var tmp0_other_with_cast = other instanceof UNOP ? other : THROW_CCE();
    if (!equals(this.r_1, tmp0_other_with_cast.r_1))
      return false;
    if (!(this.op_1 === tmp0_other_with_cast.op_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_4 = this;
    this.BINOPS_PRIORITIES_LIST_1 = listOf([listOf(['*', '/', '%']), listOf(['+', '-', '~']), listOf(['==', '===', '!=', '!==', '<', '>', '<=', '>=', '<=>']), listOf_0('&&'), listOf_0('||'), listOf_0('and'), listOf_0('or'), listOf_0('in'), listOf_0('contains'), listOf_0('..'), listOf_0('?:')]);
    var tmp = this;
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_0 = withIndex(this.BINOPS_PRIORITIES_LIST_1);
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'korlibs.template.Companion.BINOPS.<anonymous>' call
      var index = element.component1_7eebsc_k$();
      var ops = element.component2_7eebsb_k$();
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(ops, 10));
      var tmp0_iterator_0 = ops.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'korlibs.template.Companion.BINOPS.<anonymous>.<anonymous>' call
        var tmp$ret$0 = to(item, index);
        destination_0.add_utx5q5_k$(tmp$ret$0);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    tmp.BINOPS_1 = toMap_0(destination);
  }
  protoOf(Companion_4).parse_308sm3_k$ = function (tag) {
    return this.parse_cgmbyv_k$(tag.get_content_h02jrk_k$(), tag.get_posContext_avexqc_k$());
  };
  protoOf(Companion_4).parse_cgmbyv_k$ = function (str, context) {
    var tokens = Companion_getInstance_4().tokenize_8a1bzl_k$(str, context);
    if (tokens.get_list_wopuqv_k$().isEmpty_y1axqb_k$()) {
      context.exception_kh9cqz_k$('No expression');
    }
    // Inline function 'kotlin.also' call
    var this_0 = Companion_getInstance_5().parseFullExpr_llh6lv_k$(tokens);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.Companion.parse.<anonymous>' call
    expectEnd(tokens);
    return this_0;
  };
  protoOf(Companion_4).parse_2uyqq5_k$ = function (str, fileName) {
    return Companion_getInstance_5().parse_cgmbyv_k$(str, new KorteFilePosContext(new KorteFileContext(fileName, str), 1));
  };
  protoOf(Companion_4).parse$default_a5uyh2_k$ = function (str, fileName, $super) {
    fileName = fileName === VOID ? 'expression' : fileName;
    return $super === VOID ? this.parse_2uyqq5_k$(str, fileName) : $super.parse_2uyqq5_k$.call(this, str, fileName);
  };
  protoOf(Companion_4).parseId_c4d9wk_k$ = function (r) {
    var tmp0_safe_receiver = r.tryRead_halwjz_k$();
    var tmp3_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_text_wouvsm_k$();
    var tmp;
    if (tmp3_elvis_lhs == null) {
      var tmp1_elvis_lhs = r.tryPrev_hamws2_k$();
      var tmp2_safe_receiver = tmp1_elvis_lhs == null ? r.get_ctx_18j7sy_k$() : tmp1_elvis_lhs;
      var tmp_0;
      if (tmp2_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp2_safe_receiver.exception_kh9cqz_k$('Expected id');
      }
      tmp = tmp_0;
    } else {
      tmp = tmp3_elvis_lhs;
    }
    var tmp4_elvis_lhs = tmp;
    var tmp_1;
    if (tmp4_elvis_lhs == null) {
      throw new NotImplementedError();
    } else {
      tmp_1 = tmp4_elvis_lhs;
    }
    return tmp_1;
  };
  protoOf(Companion_4).expect_bdcqcf_k$ = function (r, tokens) {
    var tmp0_elvis_lhs = r.tryRead_halwjz_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      r.prevOrContext_icuisn_k$().exception_kh9cqz_k$('Expected ' + joinToString_0(tokens, ', ') + ' but found end');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    if (!contains_0(tokens, token.get_text_wouvsm_k$())) {
      token.exception_kh9cqz_k$('Expected ' + joinToString_0(tokens, ', ') + ' but found ' + token);
    }
  };
  protoOf(Companion_4).parseFullExpr_llh6lv_k$ = function (r) {
    try {
      var result = Companion_getInstance_5().parseExpr_vzogji_k$(r);
      if (r.get_hasMore_csdhd2_k$()) {
        var tmp = r.peek_21nx7_k$();
        var tmp_0 = 'Expected expression at ' + r.peek_21nx7_k$() + ' :: ';
        // Inline function 'kotlin.collections.map' call
        var this_0 = r.get_list_wopuqv_k$();
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator.next_20eer_k$();
          // Inline function 'korlibs.template.Companion.parseFullExpr.<anonymous>' call
          var tmp$ret$0 = item.get_text_wouvsm_k$();
          destination.add_utx5q5_k$(tmp$ret$0);
        }
        tmp.exception_kh9cqz_k$(tmp_0 + joinToString(destination, ''));
      }
      return result;
    } catch ($p) {
      if ($p instanceof OutOfBoundsException_0) {
        var e = $p;
        last(r.get_list_wopuqv_k$()).exception_kh9cqz_k$('Incomplete expression');
      } else {
        throw $p;
      }
    }
  };
  protoOf(Companion_4).binopPr_mk6ak0_k$ = function (str) {
    var tmp0_elvis_lhs = this.BINOPS_1.get_wei43m_k$(str);
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  protoOf(Companion_4).parseBinExpr_1d4r9d_k$ = function (r) {
    var result = parseFinal(this, r);
    $l$loop_0: while (r.get_hasMore_csdhd2_k$()) {
      // Inline function 'kotlin.collections.contains' call
      var this_0 = Companion_getInstance_5().BINOPS_1;
      // Inline function 'kotlin.collections.containsKey' call
      var key = r.peek_21nx7_k$().get_text_wouvsm_k$();
      if (!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(key))
        break $l$loop_0;
      var operator = r.read_22xsm_k$().get_text_wouvsm_k$();
      var right = parseFinal(this, r);
      if (result instanceof BINOP) {
        var a = result.l_1;
        var lop = result.op_1;
        var b = result.r_1;
        var rop = operator;
        var c = right;
        var lopPr = this.binopPr_mk6ak0_k$(lop);
        var ropPr = this.binopPr_mk6ak0_k$(rop);
        if (lopPr > ropPr) {
          result = new BINOP(a, new BINOP(b, c, rop), lop);
          continue $l$loop_0;
        }
      }
      result = new BINOP(result, right, operator);
    }
    return result;
  };
  protoOf(Companion_4).parseTernaryExpr_a0uac3_k$ = function (r) {
    var left = this.parseBinExpr_1d4r9d_k$(r);
    if (r.get_hasMore_csdhd2_k$()) {
      if (r.peek_21nx7_k$().get_text_wouvsm_k$() === '?') {
        r.skip$default_4cz5fh_k$();
        var middle = this.parseExpr_vzogji_k$(r);
        expect(r, [':']);
        var right = this.parseExpr_vzogji_k$(r);
        left = new TERNARY(left, middle, right);
      }
    }
    return left;
  };
  protoOf(Companion_4).parseExpr_vzogji_k$ = function (r) {
    return this.parseTernaryExpr_a0uac3_k$(r);
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Token() {
  }
  function KorteExprNode() {
  }
  function expectEnd(_this__u8e3s4) {
    if (_this__u8e3s4.get_hasMore_csdhd2_k$()) {
      _this__u8e3s4.peek_21nx7_k$().exception_kh9cqz_k$("Unexpected token '" + _this__u8e3s4.peek_21nx7_k$().get_text_wouvsm_k$() + "'");
    }
  }
  function expect(_this__u8e3s4, types) {
    var token = _this__u8e3s4.read_22xsm_k$();
    if (!contains_0(types, token.get_text_wouvsm_k$()))
      throw RuntimeException_init_$Create$('Expected ' + joinToString_0(types, ', '));
    return token;
  }
  function expectPeek(_this__u8e3s4, types) {
    var token = _this__u8e3s4.peek_21nx7_k$();
    if (!contains_0(types, token.get_text_wouvsm_k$()))
      throw RuntimeException_init_$Create$('Expected ' + joinToString_0(types, ', ') + " but found '" + token.get_text_wouvsm_k$() + "'");
    return token;
  }
  function tryRead(_this__u8e3s4, types) {
    var token = _this__u8e3s4.peek_21nx7_k$();
    if (contains_0(types, token.get_text_wouvsm_k$())) {
      _this__u8e3s4.read_22xsm_k$();
      return token;
    } else {
      return null;
    }
  }
  function parseExpr(_this__u8e3s4) {
    return Companion_getInstance_5().parseExpr_vzogji_k$(_this__u8e3s4);
  }
  function parseId(_this__u8e3s4) {
    return Companion_getInstance_5().parseId_c4d9wk_k$(_this__u8e3s4);
  }
  function parseIdList(_this__u8e3s4) {
    // Inline function 'kotlin.collections.arrayListOf' call
    var ids = ArrayList_init_$Create$();
    do {
      // Inline function 'kotlin.collections.plusAssign' call
      var element = parseId(_this__u8e3s4);
      ids.add_utx5q5_k$(element);
    }
     while (!(tryRead(_this__u8e3s4, [',']) == null));
    return ids;
  }
  function $invokeAsyncCOROUTINE$41(_this__u8e3s4, type, instance, key, args, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.type_1 = type;
    this.instance_1 = instance;
    this.key_1 = key;
    this.args_1 = args;
  }
  protoOf($invokeAsyncCOROUTINE$41).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.instance_1;
            if (!(tmp_0 == null) ? isInterface(tmp_0, KorteDynamicType) : false) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this._this__u8e3s4__1.get_dynamicShape_xh1qkn_k$(this.instance_1).callMethod_9nlnas_k$(this.instance_1, this.key_1, this.args_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

          case 1:
            return null;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $accessAnyCOROUTINE$42(_this__u8e3s4, instance, key, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.instance_1 = instance;
    this.key_1 = key;
  }
  protoOf($accessAnyCOROUTINE$42).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.tmp0_subject0__1 = this.instance_1;
            if (this.tmp0_subject0__1 == null) {
              this.WHEN_RESULT1__1 = null;
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              var tmp_0 = this.tmp0_subject0__1;
              if (!(tmp_0 == null) ? isInterface(tmp_0, KorteDynamic2Gettable) : false) {
                this.set_state_rjd8d0_k$(2);
                suspendResult = this.instance_1.dynamic2Get_nbfm3j_k$(this.key_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_1 = this.tmp0_subject0__1;
                if (!(tmp_1 == null) ? isInterface(tmp_1, Map) : false) {
                  var tmp_2 = this;
                  var this_0 = this.instance_1;
                  var key = this.key_1;
                  tmp_2.WHEN_RESULT1__1 = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).get_wei43m_k$(key);
                  this.set_state_rjd8d0_k$(3);
                  continue $sm;
                } else {
                  var tmp_3 = this.tmp0_subject0__1;
                  if (!(tmp_3 == null) ? isInterface(tmp_3, Iterable) : false) {
                    this.WHEN_RESULT1__1 = toList(this.instance_1).get_c1px32_k$(KorteDynamic2_getInstance().toInt_uwnlaj_k$(this.key_1));
                    this.set_state_rjd8d0_k$(3);
                    continue $sm;
                  } else {
                    this.set_state_rjd8d0_k$(1);
                    suspendResult = this._this__u8e3s4__1.accessAnyObject_ifsv7o_k$(this.instance_1, this.key_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  }
                }
              }
            }

          case 1:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT1__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $accessAnyObjectCOROUTINE$43(_this__u8e3s4, instance, key, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.instance_1 = instance;
    this.key_1 = key;
  }
  protoOf($accessAnyObjectCOROUTINE$43).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            if (this.instance_1 == null)
              return null;
            var tmp_0 = this;
            tmp_0.keyStr0__1 = Companion_getInstance_6().Instance_1.toDynamicString_9srrng_k$(this.key_1);
            if (this._this__u8e3s4__1.hasProperty_vjbg1h_k$(this.instance_1, this.keyStr0__1)) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this._this__u8e3s4__1.get_ypu2as_k$(this.instance_1, this.key_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this._this__u8e3s4__1.hasMethod_zgn0rb_k$(this.instance_1, this.keyStr0__1)) {
                this.set_state_rjd8d0_k$(1);
                var tmp_1 = getKClassFromExpression(this.instance_1);
                var tmp_2 = isInterface(tmp_1, KClass) ? tmp_1 : THROW_CCE();
                var tmp_3 = this.instance_1;
                var tmp_4 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
                suspendResult = this._this__u8e3s4__1.invokeAsync_eic2jd_k$(tmp_2, tmp_4, this.keyStr0__1, emptyList(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_5 = this;
                tmp_5.WHEN_RESULT1__1 = null;
                this.set_state_rjd8d0_k$(3);
                continue $sm;
              }
            }

          case 1:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT1__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function KorteObjectMapper2() {
  }
  function KorteDynamicType() {
  }
  function _get_propertiesByName__4677bq($this) {
    return $this.propertiesByName_1;
  }
  function _get_methodsByName__njtn5p($this) {
    return $this.methodsByName_1;
  }
  function _get_smethodsByName__q0rgtm($this) {
    return $this.smethodsByName_1;
  }
  function $callMethodCOROUTINE$44(_this__u8e3s4, instance, key, args, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.instance_1 = instance;
    this.key_1 = key;
    this.args_1 = args;
  }
  protoOf($callMethodCOROUTINE$44).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this;
            var this_0 = this._this__u8e3s4__1.smethodsByName_1;
            var key = this.key_1;
            tmp_0.smethod0__1 = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).get_wei43m_k$(key);
            if (!(this.smethod0__1 == null)) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this.smethod0__1(this.instance_1, this.args_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

          case 1:
            var this_1 = this._this__u8e3s4__1.methodsByName_1;
            var key_0 = this.key_1;
            var method = (isInterface(this_1, Map) ? this_1 : THROW_CCE()).get_wei43m_k$(key_0);
            if (!(method == null)) {
              var tmp_1;
              if (typeof method === 'function') {
                tmp_1 = method();
              } else {
                if (typeof method === 'function') {
                  tmp_1 = ((!(method == null) ? typeof method === 'function' : false) ? method : THROW_CCE())(this.instance_1);
                } else {
                  if (typeof method === 'function') {
                    tmp_1 = ((!(method == null) ? typeof method === 'function' : false) ? method : THROW_CCE())(this.instance_1, this.args_1.get_c1px32_k$(0));
                  } else {
                    if (typeof method === 'function') {
                      tmp_1 = ((!(method == null) ? typeof method === 'function' : false) ? method : THROW_CCE())(this.instance_1, this.args_1.get_c1px32_k$(0), this.args_1.get_c1px32_k$(1));
                    } else {
                      if (typeof method === 'function') {
                        tmp_1 = ((!(method == null) ? typeof method === 'function' : false) ? method : THROW_CCE())(this.instance_1, this.args_1.get_c1px32_k$(0), this.args_1.get_c1px32_k$(1), this.args_1.get_c1px32_k$(2));
                      } else {
                        var message = 'TYPE not a KFunction';
                        throw IllegalStateException_init_$Create$(toString(message));
                      }
                    }
                  }
                }
              }
              return tmp_1;
            }

            return null;
          case 2:
            return suspendResult;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function KorteDynamicShape() {
    this.propertiesByName_1 = LinkedHashMap_init_$Create$();
    this.methodsByName_1 = LinkedHashMap_init_$Create$();
    this.smethodsByName_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(KorteDynamicShape).register_5ayukv_k$ = function (prop) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.dynamic.KorteDynamicShape.register.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.propertiesByName_1;
    var key = prop.callableName;
    this_0.put_4fpzoq_k$(key, prop);
    return this;
  };
  protoOf(KorteDynamicShape).register_uxyto9_k$ = function (name, callback) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.dynamic.KorteDynamicShape.register.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    this.smethodsByName_1.put_4fpzoq_k$(name, callback);
    return this;
  };
  protoOf(KorteDynamicShape).register_4h3a0e_k$ = function (callable) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.dynamic.KorteDynamicShape.register.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.methodsByName_1;
    var key = callable.callableName;
    this_0.put_4fpzoq_k$(key, callable);
    return this;
  };
  protoOf(KorteDynamicShape).hasProp_e0nl19_k$ = function (key) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.propertiesByName_1;
    return (isInterface(this_0, Map) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(key);
  };
  protoOf(KorteDynamicShape).hasMethod_y4kbcv_k$ = function (key) {
    var tmp;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.methodsByName_1;
    if ((isInterface(this_0, Map) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(key)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_1 = this.smethodsByName_1;
      tmp = (isInterface(this_1, Map) ? this_1 : THROW_CCE()).containsKey_aw81wo_k$(key);
    }
    return tmp;
  };
  protoOf(KorteDynamicShape).getProp_m33n2j_k$ = function (instance, key) {
    // Inline function 'kotlin.collections.get' call
    var this_0 = this.propertiesByName_1;
    var tmp = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).get_wei43m_k$(key);
    var tmp0_safe_receiver = (tmp == null ? true : isInterface(tmp, KProperty1)) ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get(instance);
  };
  protoOf(KorteDynamicShape).setProp_ydkkso_k$ = function (instance, key, value) {
    // Inline function 'kotlin.collections.get' call
    var this_0 = this.propertiesByName_1;
    var tmp = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).get_wei43m_k$(key);
    var tmp0_safe_receiver = (tmp == null ? true : isInterface(tmp, KMutableProperty1)) ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.set(instance, value);
    }
  };
  protoOf(KorteDynamicShape).callMethod_9nlnas_k$ = function (instance, key, args, $completion) {
    var tmp = new $callMethodCOROUTINE$44(this, instance, key, args, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function $setAnyCOROUTINE$45(_this__u8e3s4, instance, key, value, mapper, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.instance_1 = instance;
    this.key_1 = key;
    this.value_1 = value;
    this.mapper_1 = mapper;
  }
  protoOf($setAnyCOROUTINE$45).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.tmp0_subject0__1 = this.instance_1;
            if (this.tmp0_subject0__1 == null) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            } else {
              var tmp_0 = this.tmp0_subject0__1;
              if (!(tmp_0 == null) ? isInterface(tmp_0, KorteDynamic2Settable) : false) {
                this.set_state_rjd8d0_k$(4);
                suspendResult = this.instance_1.dynamic2Set_44hct6_k$(this.key_1, this.value_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_1 = this.tmp0_subject0__1;
                if (!(tmp_1 == null) ? isInterface(tmp_1, MutableMap) : false) {
                  var tmp_2 = this.instance_1;
                  var this_0 = (!(tmp_2 == null) ? isInterface(tmp_2, MutableMap) : false) ? tmp_2 : THROW_CCE();
                  var key = this.key_1;
                  var value = this.value_1;
                  this_0.put_4fpzoq_k$(key, value);
                  this.set_state_rjd8d0_k$(5);
                  continue $sm;
                } else {
                  var tmp_3 = this.tmp0_subject0__1;
                  if (!(tmp_3 == null) ? isInterface(tmp_3, MutableList) : false) {
                    var tmp_4 = this.instance_1;
                    ((!(tmp_4 == null) ? isInterface(tmp_4, MutableList) : false) ? tmp_4 : THROW_CCE()).set_82063s_k$(this._this__u8e3s4__1.toInt_uwnlaj_k$(this.key_1), this.value_1);
                    this.set_state_rjd8d0_k$(5);
                    continue $sm;
                  } else {
                    var tmp_5 = this;
                    tmp_5.this1__1 = Companion_getInstance_6();
                    var tmp_6 = this;
                    tmp_6.$this$invoke2__1 = this.this1__1.Instance_1;
                    if (this.mapper_1.hasProperty_vjbg1h_k$(this.instance_1, this.$this$invoke2__1.toDynamicString_9srrng_k$(this.key_1))) {
                      this.set_state_rjd8d0_k$(2);
                      suspendResult = this.mapper_1.set_xioigp_k$(this.instance_1, this.key_1, this.value_1, this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (this.mapper_1.hasMethod_zgn0rb_k$(this.instance_1, this.$this$invoke2__1.toDynamicString_9srrng_k$(this.key_1))) {
                        this.set_state_rjd8d0_k$(1);
                        var tmp_7 = getKClassFromExpression(this.instance_1);
                        var tmp_8 = isInterface(tmp_7, KClass) ? tmp_7 : THROW_CCE();
                        var tmp_9 = this.instance_1;
                        suspendResult = this.mapper_1.invokeAsync_eic2jd_k$(tmp_8, (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE(), this.$this$invoke2__1.toDynamicString_9srrng_k$(this.key_1), listOf_0(this.value_1), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.set_state_rjd8d0_k$(3);
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 1:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $callAnyCOROUTINE$46(_this__u8e3s4, any, methodName, args, mapper, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.any_1 = any;
    this.methodName_1 = methodName;
    this.args_1 = args;
    this.mapper_1 = mapper;
  }
  protoOf($callAnyCOROUTINE$46).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.tmp0_subject0__1 = this.any_1;
            if (this.tmp0_subject0__1 == null) {
              this.WHEN_RESULT1__1 = null;
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              var tmp_0 = this.any_1;
              if (equals(this.tmp0_subject0__1, !(tmp_0 == null) ? isInterface(tmp_0, KorteDynamic2Callable) : false)) {
                this.set_state_rjd8d0_k$(2);
                var tmp_1 = this.any_1;
                suspendResult = ((!(tmp_1 == null) ? isInterface(tmp_1, KorteDynamic2Callable) : false) ? tmp_1 : THROW_CCE()).dynamic2Call_jfxi8j_k$(this.methodName_1, this.args_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(1);
                var tmp_2 = getKClassFromExpression(this.any_1);
                var tmp_3 = isInterface(tmp_2, KClass) ? tmp_2 : THROW_CCE();
                var $this$invoke = Companion_getInstance_6().Instance_1;
                suspendResult = this.mapper_1.invokeAsync_eic2jd_k$(tmp_3, this.any_1, $this$invoke.toDynamicString_9srrng_k$(this.methodName_1), this.args_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

          case 1:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT1__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function KorteDynamic2() {
    KorteDynamic2_instance = this;
  }
  protoOf(KorteDynamic2).binop_k30s4w_k$ = function (l, r, op) {
    var tmp;
    switch (op) {
      case '+':
        var tmp_0;
        if (!(l == null) ? typeof l === 'string' : false) {
          tmp_0 = toString(l) + this.toString_drfd65_k$(r);
        } else {
          if (!(l == null) ? isInterface(l, Iterable) : false) {
            tmp_0 = plus_0(this.toIterable_as2p9u_k$(l), this.toIterable_as2p9u_k$(r));
          } else {
            tmp_0 = this.toDouble_o85fbn_k$(l) + this.toDouble_o85fbn_k$(r);
          }
        }

        tmp = tmp_0;
        break;
      case '-':
        tmp = this.toDouble_o85fbn_k$(l) - this.toDouble_o85fbn_k$(r);
        break;
      case '*':
        tmp = this.toDouble_o85fbn_k$(l) * this.toDouble_o85fbn_k$(r);
        break;
      case '/':
        tmp = this.toDouble_o85fbn_k$(l) / this.toDouble_o85fbn_k$(r);
        break;
      case '%':
        tmp = this.toDouble_o85fbn_k$(l) % this.toDouble_o85fbn_k$(r);
        break;
      case '**':
        // Inline function 'kotlin.math.pow' call

        var this_0 = this.toDouble_o85fbn_k$(l);
        var x = this.toDouble_o85fbn_k$(r);
        tmp = Math.pow(this_0, x);
        break;
      case '&':
        tmp = this.toInt_uwnlaj_k$(l) & this.toInt_uwnlaj_k$(r);
        break;
      case '|':
        tmp = this.toInt_uwnlaj_k$(l) | this.toInt_uwnlaj_k$(r);
        break;
      case '^':
        tmp = this.toInt_uwnlaj_k$(l) ^ this.toInt_uwnlaj_k$(r);
        break;
      case '&&':
        tmp = this.toBool_cifx52_k$(l) ? this.toBool_cifx52_k$(r) : false;
        break;
      case '||':
        tmp = this.toBool_cifx52_k$(l) ? true : this.toBool_cifx52_k$(r);
        break;
      case 'and':
        tmp = this.toBool_cifx52_k$(l) ? this.toBool_cifx52_k$(r) : false;
        break;
      case 'or':
        tmp = this.toBool_cifx52_k$(l) ? true : this.toBool_cifx52_k$(r);
        break;
      case '==':
        var tmp_1;
        var tmp_2;
        if (isNumber(l)) {
          tmp_2 = isNumber(r);
        } else {
          tmp_2 = false;
        }

        if (tmp_2) {
          tmp_1 = numberToDouble(l) === numberToDouble(r);
        } else {
          var tmp_3;
          if (!(l == null) ? typeof l === 'string' : false) {
            tmp_3 = true;
          } else {
            tmp_3 = !(r == null) ? typeof r === 'string' : false;
          }
          if (tmp_3) {
            tmp_1 = toString_0(l) === toString_0(r);
          } else {
            tmp_1 = equals(l, r);
          }
        }

        tmp = tmp_1;
        break;
      case '!=':
        var tmp_4;
        var tmp_5;
        if (isNumber(l)) {
          tmp_5 = isNumber(r);
        } else {
          tmp_5 = false;
        }

        if (tmp_5) {
          tmp_4 = !(numberToDouble(l) === numberToDouble(r));
        } else {
          var tmp_6;
          if (!(l == null) ? typeof l === 'string' : false) {
            tmp_6 = true;
          } else {
            tmp_6 = !(r == null) ? typeof r === 'string' : false;
          }
          if (tmp_6) {
            tmp_4 = !(toString_0(l) === toString_0(r));
          } else {
            tmp_4 = !equals(l, r);
          }
        }

        tmp = tmp_4;
        break;
      case '===':
        tmp = l === r;
        break;
      case '!==':
        tmp = !(l === r);
        break;
      case '<':
        tmp = this.compare_t8zofb_k$(l, r) < 0;
        break;
      case '<=':
        tmp = this.compare_t8zofb_k$(l, r) <= 0;
        break;
      case '>':
        tmp = this.compare_t8zofb_k$(l, r) > 0;
        break;
      case '>=':
        tmp = this.compare_t8zofb_k$(l, r) >= 0;
        break;
      case 'in':
        tmp = this.contains_4q3vs1_k$(r, l);
        break;
      case 'contains':
        tmp = this.contains_4q3vs1_k$(l, r);
        break;
      case '?:':
        tmp = this.toBool_cifx52_k$(l) ? l : r;
        break;
      default:
        var message = "Not implemented binary operator '" + op + "'";
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  };
  protoOf(KorteDynamic2).unop_castr5_k$ = function (r, op) {
    var tmp;
    switch (op) {
      case '+':
        tmp = r;
        break;
      case '-':
        tmp = -this.toDouble_o85fbn_k$(r);
        break;
      case '~':
        tmp = ~this.toInt_uwnlaj_k$(r);
        break;
      case '!':
        tmp = !this.toBool_cifx52_k$(r);
        break;
      default:
        var message = 'Not implemented unary operator ' + op;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  };
  protoOf(KorteDynamic2).contains_4q3vs1_k$ = function (collection, element) {
    if (equals(collection, element))
      return true;
    var tmp;
    if (!(collection == null) ? typeof collection === 'string' : false) {
      tmp = contains(collection, toString_0(element));
    } else {
      if (!(collection == null) ? isInterface(collection, Set) : false) {
        tmp = collection.contains_aljjnj_k$(element);
      } else {
        tmp = contains_1(this.toList_9ni47a_k$(collection), element);
      }
    }
    return tmp;
  };
  protoOf(KorteDynamic2).compare_t8zofb_k$ = function (l, r) {
    var tmp;
    if (isNumber(l)) {
      tmp = isNumber(r);
    } else {
      tmp = false;
    }
    if (tmp) {
      return compareTo(numberToDouble(l), numberToDouble(r));
    }
    var lc = this.toComparable_hvguru_k$(l);
    var rc = this.toComparable_hvguru_k$(r);
    if (getKClassFromExpression(lc).isInstance_6tn68w_k$(rc)) {
      return compareTo(lc, rc);
    } else {
      return -1;
    }
  };
  protoOf(KorteDynamic2).toComparable_hvguru_k$ = function (it) {
    var tmp;
    if (it == null) {
      tmp = isComparable(0) ? 0 : THROW_CCE();
    } else {
      if (!(it == null) ? isComparable(it) : false) {
        tmp = (!(it == null) ? isComparable(it) : false) ? it : THROW_CCE();
      } else {
        var tmp_0 = toString(it);
        tmp = isComparable(tmp_0) ? tmp_0 : THROW_CCE();
      }
    }
    return tmp;
  };
  protoOf(KorteDynamic2).toBool_cifx52_k$ = function (it) {
    var tmp;
    if (it == null) {
      tmp = false;
    } else {
      var tmp1_elvis_lhs = this.toBoolOrNull_vr5gq8_k$(it);
      tmp = tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(KorteDynamic2).toBoolOrNull_vr5gq8_k$ = function (it) {
    var tmp;
    if (it == null) {
      tmp = null;
    } else {
      if (!(it == null) ? typeof it === 'boolean' : false) {
        tmp = it;
      } else {
        if (isNumber(it)) {
          tmp = !(numberToDouble(it) === 0.0);
        } else {
          if (!(it == null) ? typeof it === 'string' : false) {
            var tmp_0;
            var tmp_1;
            // Inline function 'kotlin.text.isNotEmpty' call
            if (charSequenceLength(it) > 0) {
              tmp_1 = !equals(it, '0');
            } else {
              tmp_1 = false;
            }
            if (tmp_1) {
              tmp_0 = !equals(it, 'false');
            } else {
              tmp_0 = false;
            }
            tmp = tmp_0;
          } else {
            tmp = null;
          }
        }
      }
    }
    return tmp;
  };
  protoOf(KorteDynamic2).toNumber_85n0dh_k$ = function (it) {
    var tmp;
    if (it == null) {
      tmp = 0.0;
    } else {
      if (isNumber(it)) {
        tmp = it;
      } else {
        tmp = this.toNumber_84m6mg_k$(toString(it));
      }
    }
    return tmp;
  };
  protoOf(KorteDynamic2).toNumber_84m6mg_k$ = function (_this__u8e3s4) {
    var tmp = toIntOrNull(_this__u8e3s4);
    var tmp0_elvis_lhs = (tmp == null ? true : isNumber(tmp)) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? toDoubleOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
    return tmp1_elvis_lhs == null ? DoubleCompanionObject_getInstance().get_NaN_18jnv2_k$() : tmp1_elvis_lhs;
  };
  protoOf(KorteDynamic2).toInt_uwnlaj_k$ = function (it) {
    return numberToInt(this.toNumber_85n0dh_k$(it));
  };
  protoOf(KorteDynamic2).toLong_vqdvrs_k$ = function (it) {
    return numberToLong(this.toNumber_85n0dh_k$(it));
  };
  protoOf(KorteDynamic2).toDouble_o85fbn_k$ = function (it) {
    return numberToDouble(this.toNumber_85n0dh_k$(it));
  };
  protoOf(KorteDynamic2).toString_drfd65_k$ = function (value) {
    var tmp;
    if (value == null) {
      tmp = '';
    } else {
      if (!(value == null) ? typeof value === 'string' : false) {
        tmp = value;
      } else {
        if (!(value == null) ? typeof value === 'number' : false) {
          var tmp_0;
          if (value === numberToInt(value)) {
            tmp_0 = numberToInt(value).toString();
          } else {
            tmp_0 = toString(value);
          }
          tmp = tmp_0;
        } else {
          if (!(value == null) ? isInterface(value, Iterable) : false) {
            // Inline function 'kotlin.collections.map' call
            // Inline function 'kotlin.collections.mapTo' call
            var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(value, 10));
            var tmp0_iterator = value.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var item = tmp0_iterator.next_20eer_k$();
              // Inline function 'korlibs.template.dynamic.KorteDynamic2.toString.<anonymous>' call
              var tmp$ret$0 = KorteDynamic2_getInstance().toString_drfd65_k$(item);
              destination.add_utx5q5_k$(tmp$ret$0);
            }
            tmp = '[' + joinToString(destination, ', ') + ']';
          } else {
            if (!(value == null) ? isInterface(value, Map) : false) {
              // Inline function 'kotlin.collections.map' call
              // Inline function 'kotlin.collections.mapTo' call
              var destination_0 = ArrayList_init_$Create$_0(value.get_size_woubt6_k$());
              // Inline function 'kotlin.collections.iterator' call
              var tmp0_iterator_0 = value.get_entries_p20ztl_k$().iterator_jk1svi_k$();
              while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
                var item_0 = tmp0_iterator_0.next_20eer_k$();
                // Inline function 'korlibs.template.dynamic.KorteDynamic2.toString.<anonymous>' call
                var tmp$ret$4 = quote(KorteDynamic2_getInstance().toString_drfd65_k$(item_0.get_key_18j28a_k$())) + ': ' + KorteDynamic2_getInstance().toString_drfd65_k$(item_0.get_value_j01efc_k$());
                destination_0.add_utx5q5_k$(tmp$ret$4);
              }
              tmp = '{' + joinToString(destination_0, ', ') + '}';
            } else {
              tmp = toString(value);
            }
          }
        }
      }
    }
    return tmp;
  };
  protoOf(KorteDynamic2).length_xgn8k9_k$ = function (subject) {
    var tmp;
    if (subject == null) {
      tmp = 0;
    } else {
      if (!(subject == null) ? isArray(subject) : false) {
        tmp = subject.length;
      } else {
        if (!(subject == null) ? isInterface(subject, List) : false) {
          tmp = subject.get_size_woubt6_k$();
        } else {
          if (!(subject == null) ? isInterface(subject, Map) : false) {
            tmp = subject.get_size_woubt6_k$();
          } else {
            if (!(subject == null) ? isInterface(subject, Iterable) : false) {
              tmp = count(subject);
            } else {
              tmp = toString(subject).length;
            }
          }
        }
      }
    }
    return tmp;
  };
  protoOf(KorteDynamic2).toList_9ni47a_k$ = function (it) {
    return toList(this.toIterable_as2p9u_k$(it));
  };
  protoOf(KorteDynamic2).toIterable_as2p9u_k$ = function (it) {
    var tmp;
    if (it == null) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      if (!(it == null) ? isInterface(it, Iterable) : false) {
        tmp = it;
      } else {
        if (!(it == null) ? isCharSequence(it) : false) {
          tmp = toList_1(it);
        } else {
          if (!(it == null) ? isInterface(it, Map) : false) {
            tmp = toList_0(it);
          } else {
            // Inline function 'kotlin.collections.listOf' call
            tmp = emptyList();
          }
        }
      }
    }
    return tmp;
  };
  protoOf(KorteDynamic2).accessAny_aov4i6_k$ = function (instance, key, mapper, $completion) {
    return mapper.accessAny_pjmbp_k$(instance, key, $completion);
  };
  protoOf(KorteDynamic2).setAny_6duv_k$ = function (instance, key, value, mapper, $completion) {
    var tmp = new $setAnyCOROUTINE$45(this, instance, key, value, mapper, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDynamic2).callAny_n32b5j_k$ = function (any, args, mapper, $completion) {
    return this.callAny_5ey320_k$(any, 'invoke', args, mapper, $completion);
  };
  protoOf(KorteDynamic2).callAny_5ey320_k$ = function (any, methodName, args, mapper, $completion) {
    var tmp = new $callAnyCOROUTINE$46(this, any, methodName, args, mapper, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  var KorteDynamic2_instance;
  function KorteDynamic2_getInstance() {
    if (KorteDynamic2_instance == null)
      new KorteDynamic2();
    return KorteDynamic2_instance;
  }
  function KorteDynamicContext$Companion$Instance$1() {
  }
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    tmp.Instance_1 = new KorteDynamicContext$Companion$Instance$1();
  }
  protoOf(Companion_5).get_Instance_ljxvgi_k$ = function () {
    return this.Instance_1;
  };
  protoOf(Companion_5).invoke_q2u8eg_k$ = function (callback) {
    return callback(this.Instance_1);
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function KorteDynamicContext() {
  }
  function KorteDynamicTypeScope() {
    KorteDynamicTypeScope_instance = this;
  }
  var KorteDynamicTypeScope_instance;
  function KorteDynamicTypeScope_getInstance() {
    if (KorteDynamicTypeScope_instance == null)
      new KorteDynamicTypeScope();
    return KorteDynamicTypeScope_instance;
  }
  function KorteDynamic2Gettable() {
  }
  function KorteDynamicShapeRegister() {
  }
  function KorteDynamic2Settable() {
  }
  function KorteDynamic2Callable() {
  }
  function get_formatRegex() {
    _init_properties__Template_internal_kt__x3hwry();
    return formatRegex;
  }
  var formatRegex;
  function korteExtraProperty(getExtraMap, name, default_0) {
    name = name === VOID ? null : name;
    this.getExtraMap_1 = getExtraMap;
    this.name_1 = name;
    this.default_1 = default_0;
  }
  protoOf(korteExtraProperty).get_getExtraMap_ic4f21_k$ = function () {
    return this.getExtraMap_1;
  };
  protoOf(korteExtraProperty).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(korteExtraProperty).get_default_qtagd4_k$ = function () {
    return this.default_1;
  };
  protoOf(korteExtraProperty).getValue_czf9iw_k$ = function (thisRef, property) {
    var tmp = this.getExtraMap_1(thisRef);
    var tmp0_elvis_lhs = this.name_1;
    var tmp_0 = tmp.get_wei43m_k$(tmp0_elvis_lhs == null ? property.callableName : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    return tmp1_elvis_lhs == null ? this.default_1() : tmp1_elvis_lhs;
  };
  protoOf(korteExtraProperty).setValue_3kclaq_k$ = function (thisRef, property, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.getExtraMap_1(thisRef);
    var tmp0_elvis_lhs = this.name_1;
    var key = tmp0_elvis_lhs == null ? property.callableName : tmp0_elvis_lhs;
    this_0.put_4fpzoq_k$(key, value);
  };
  function htmlspecialchars(_this__u8e3s4) {
    _init_properties__Template_internal_kt__x3hwry();
    // Inline function 'kotlin.text.buildString' call
    var capacity = _this__u8e3s4.length + 16 | 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0(capacity);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.internal.htmlspecialchars.<anonymous>' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var it = charSequenceGet(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (it === _Char___init__impl__6a9atx(34)) {
        this_0.append_22ad7x_k$('&quot;');
      } else if (it === _Char___init__impl__6a9atx(39)) {
        this_0.append_22ad7x_k$('&apos;');
      } else if (it === _Char___init__impl__6a9atx(60)) {
        this_0.append_22ad7x_k$('&lt;');
      } else if (it === _Char___init__impl__6a9atx(62)) {
        this_0.append_22ad7x_k$('&gt;');
      } else if (it === _Char___init__impl__6a9atx(38)) {
        this_0.append_22ad7x_k$('&amp;');
      } else {
        this_0.append_am5a4z_k$(it);
      }
    }
    return this_0.toString();
  }
  function _get_allocated__hrvcyy($this) {
    return $this.allocated_1;
  }
  function Pool(gen) {
    this.gen_1 = gen;
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.allocated_1 = ArrayList_init_$Create$();
  }
  protoOf(Pool).get_gen_18j57d_k$ = function () {
    return this.gen_1;
  };
  protoOf(Pool).alloc_1jbayd_k$ = function () {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.allocated_1.isEmpty_y1axqb_k$()) {
      tmp = removeLast(this.allocated_1);
    } else {
      tmp = this.gen_1();
    }
    return tmp;
  };
  protoOf(Pool).free_3owydp_k$ = function (value) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    this.allocated_1.add_utx5q5_k$(value);
    return Unit_getInstance();
  };
  protoOf(Pool).alloc_uk7szc_k$ = function (block) {
    var v = this.alloc_1jbayd_k$();
    try {
      return block(v);
    }finally {
      this.free_3owydp_k$(v);
    }
  };
  function EOF() {
    EOF_instance = this;
    this.str_1 = '';
  }
  protoOf(EOF).get_str_18ivy0_k$ = function () {
    return this.str_1;
  };
  var EOF_instance;
  function EOF_getInstance() {
    if (EOF_instance == null)
      new EOF();
    return EOF_instance;
  }
  function LINE(str, level) {
    this.str_1 = str;
    this.level_1 = level;
  }
  protoOf(LINE).get_str_18ivy0_k$ = function () {
    return this.str_1;
  };
  protoOf(LINE).get_level_ium7h7_k$ = function () {
    return this.level_1;
  };
  protoOf(LINE).toString = function () {
    return 'LINE(' + this.level_1 + ')';
  };
  protoOf(LINE).component1_7eebsc_k$ = function () {
    return this.str_1;
  };
  protoOf(LINE).component2_7eebsb_k$ = function () {
    return this.level_1;
  };
  protoOf(LINE).copy_1yzwer_k$ = function (str, level) {
    return new LINE(str, level);
  };
  protoOf(LINE).copy$default_s42xk6_k$ = function (str, level, $super) {
    str = str === VOID ? this.str_1 : str;
    level = level === VOID ? this.level_1 : level;
    return $super === VOID ? this.copy_1yzwer_k$(str, level) : $super.copy_1yzwer_k$.call(this, str, level);
  };
  protoOf(LINE).hashCode = function () {
    var result = getStringHashCode(this.str_1);
    result = imul(result, 31) + this.level_1 | 0;
    return result;
  };
  protoOf(LINE).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LINE))
      return false;
    var tmp0_other_with_cast = other instanceof LINE ? other : THROW_CCE();
    if (!(this.str_1 === tmp0_other_with_cast.str_1))
      return false;
    if (!(this.level_1 === tmp0_other_with_cast.level_1))
      return false;
    return true;
  };
  function ID(str) {
    this.str_1 = str;
  }
  protoOf(ID).get_str_18ivy0_k$ = function () {
    return this.str_1;
  };
  protoOf(ID).component1_7eebsc_k$ = function () {
    return this.str_1;
  };
  protoOf(ID).copy_a35qlh_k$ = function (str) {
    return new ID(str);
  };
  protoOf(ID).copy$default_6icgpm_k$ = function (str, $super) {
    str = str === VOID ? this.str_1 : str;
    return $super === VOID ? this.copy_a35qlh_k$(str) : $super.copy_a35qlh_k$.call(this, str);
  };
  protoOf(ID).toString = function () {
    return 'ID(str=' + this.str_1 + ')';
  };
  protoOf(ID).hashCode = function () {
    return getStringHashCode(this.str_1);
  };
  protoOf(ID).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ID))
      return false;
    var tmp0_other_with_cast = other instanceof ID ? other : THROW_CCE();
    if (!(this.str_1 === tmp0_other_with_cast.str_1))
      return false;
    return true;
  };
  function STR(str) {
    this.str_1 = str;
    this.ustr_1 = unquote(this.str_1);
  }
  protoOf(STR).get_str_18ivy0_k$ = function () {
    return this.str_1;
  };
  protoOf(STR).get_ustr_wovt2d_k$ = function () {
    return this.ustr_1;
  };
  protoOf(STR).component1_7eebsc_k$ = function () {
    return this.str_1;
  };
  protoOf(STR).copy_a35qlh_k$ = function (str) {
    return new STR(str);
  };
  protoOf(STR).copy$default_7pc0fg_k$ = function (str, $super) {
    str = str === VOID ? this.str_1 : str;
    return $super === VOID ? this.copy_a35qlh_k$(str) : $super.copy_a35qlh_k$.call(this, str);
  };
  protoOf(STR).toString = function () {
    return 'STR(str=' + this.str_1 + ')';
  };
  protoOf(STR).hashCode = function () {
    return getStringHashCode(this.str_1);
  };
  protoOf(STR).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof STR))
      return false;
    var tmp0_other_with_cast = other instanceof STR ? other : THROW_CCE();
    if (!(this.str_1 === tmp0_other_with_cast.str_1))
      return false;
    return true;
  };
  function SYMBOL(str, next) {
    this.str_1 = str;
    this.next_1 = next;
  }
  protoOf(SYMBOL).get_str_18ivy0_k$ = function () {
    return this.str_1;
  };
  protoOf(SYMBOL).get_next_hxr6ta_k$ = function () {
    return this.next_1;
  };
  protoOf(SYMBOL).get_isNextWhite_hn7ud9_k$ = function () {
    return ((this.next_1 === _Char___init__impl__6a9atx(32) ? true : this.next_1 === _Char___init__impl__6a9atx(9)) ? true : this.next_1 === _Char___init__impl__6a9atx(10)) ? true : this.next_1 === _Char___init__impl__6a9atx(13);
  };
  protoOf(SYMBOL).component1_7eebsc_k$ = function () {
    return this.str_1;
  };
  protoOf(SYMBOL).component2_kpctgp_k$ = function () {
    return this.next_1;
  };
  protoOf(SYMBOL).copy_jn8f88_k$ = function (str, next) {
    return new SYMBOL(str, next);
  };
  protoOf(SYMBOL).copy$default_allyaz_k$ = function (str, next, $super) {
    str = str === VOID ? this.str_1 : str;
    next = next === VOID ? this.next_1 : next;
    return $super === VOID ? this.copy_jn8f88_k$(str, next) : $super.copy_jn8f88_k$.call(this, str, new Char(next));
  };
  protoOf(SYMBOL).toString = function () {
    return 'SYMBOL(str=' + this.str_1 + ', next=' + toString_1(this.next_1) + ')';
  };
  protoOf(SYMBOL).hashCode = function () {
    var result = getStringHashCode(this.str_1);
    result = imul(result, 31) + Char__hashCode_impl_otmys(this.next_1) | 0;
    return result;
  };
  protoOf(SYMBOL).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SYMBOL))
      return false;
    var tmp0_other_with_cast = other instanceof SYMBOL ? other : THROW_CCE();
    if (!(this.str_1 === tmp0_other_with_cast.str_1))
      return false;
    if (!(this.next_1 === tmp0_other_with_cast.next_1))
      return false;
    return true;
  };
  function parseStr($this, toks) {
    var tmp;
    if (toks.get_size_woubt6_k$() === 1) {
      var tmp_0 = toks.get_c1px32_k$(0);
      tmp = tmp_0 instanceof STR;
    } else {
      tmp = false;
    }
    if (tmp)
      return toks.get_c1px32_k$(0).get_ustr_wovt2d_k$();
    return parseStr_0($this, joinToString(toks, '', VOID, VOID, VOID, VOID, Yaml$parseStr$lambda));
  }
  function parseStr_0($this, str) {
    var tmp;
    switch (str) {
      case 'null':
        tmp = null;
        break;
      case 'true':
        tmp = true;
        break;
      case 'false':
        tmp = false;
        break;
      default:
        var tmp1_elvis_lhs = toIntOrNull(str);
        var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? toDoubleOrNull(str) : tmp1_elvis_lhs;
        tmp = tmp2_elvis_lhs == null ? str : tmp2_elvis_lhs;
        break;
    }
    return tmp;
  }
  function _get_EMPTY_SET__umt9zz($this) {
    return $this.EMPTY_SET_1;
  }
  function _get_SET_COMMA_END_ARRAY__8t6fmr($this) {
    return $this.SET_COMMA_END_ARRAY_1;
  }
  function read($this, s, level) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var list = null;
    var map = null;
    var lastMapKey = null;
    var lastMapValue = null;
    var levelStr = false ? repeat('  ', level) : '';
    linehandle: while (s.get_hasMore_csdhd2_k$()) {
      var token = s.peek_21nx7_k$();
      var line = token instanceof LINE ? token : null;
      var lineLevel = line == null ? null : line.level_1;
      if (false ? !(line == null) : false) {
        println(levelStr + 'LINE(' + lineLevel + ')');
      }
      if (!(lineLevel == null) ? lineLevel > level : false) {
        var res = read(Yaml_getInstance(), s, lineLevel);
        if (!(list == null)) {
          if (false) {
            println(levelStr + 'CHILD.list.add: ' + toString_0(res));
          }
          list.add_utx5q5_k$(res);
        } else {
          if (false) {
            println(levelStr + 'CHILD.return: ' + toString_0(res));
          }
          return res;
        }
      } else if (!(lineLevel == null) ? lineLevel < level : false) {
        if (false) {
          println(levelStr + 'PARENT: level < line.level');
        }
        break linehandle;
      } else {
        if (!(line == null)) {
          s.read_22xsm_k$();
        }
        if (s.get_eof_18j6gd_k$())
          break linehandle;
        var item = s.peek_21nx7_k$();
        switch (item.get_str_18ivy0_k$()) {
          case '-':
            if (!(s.read_22xsm_k$().get_str_18ivy0_k$() === '-')) {
              get_invalidOp();
            }

            if (list == null) {
              // Inline function 'kotlin.collections.arrayListOf' call
              list = ArrayList_init_$Create$();
              if ((!(map == null) ? !(lastMapKey == null) : false) ? lastMapValue == null : false) {
                // Inline function 'kotlin.collections.set' call
                var this_0 = map;
                var key = lastMapKey;
                var value = list;
                this_0.put_4fpzoq_k$(key, value);
              }
            }

            if (false) {
              println(levelStr + 'LIST_ITEM...');
            }

            var res_0 = read(Yaml_getInstance(), s, level + 1 | 0);
            if (false) {
              println(levelStr + 'LIST_ITEM: ' + toString_0(res_0));
            }

            list.add_utx5q5_k$(res_0);
            break;
          case '[':
            if (!(s.read_22xsm_k$().get_str_18ivy0_k$() === '[')) {
              get_invalidOp();
            }

            // Inline function 'kotlin.collections.arrayListOf' call

            var olist = ArrayList_init_$Create$();
            array: while (!(s.peek_21nx7_k$().get_str_18ivy0_k$() === ']')) {
              // Inline function 'kotlin.collections.plusAssign' call
              var element = readOrString(Yaml_getInstance(), s, level, Yaml_getInstance().SET_COMMA_END_ARRAY_1, false);
              olist.add_utx5q5_k$(element);
              var p = s.peek_21nx7_k$().get_str_18ivy0_k$();
              switch (p) {
                case ',':
                  s.read_22xsm_k$();
                  continue array;
                case ']':
                  break array;
                default:
                  invalidOp("Unexpected '" + p + "'");
                  break;
              }
            }

            if (!(s.read_22xsm_k$().get_str_18ivy0_k$() === ']')) {
              get_invalidOp();
            }

            return olist;
          default:
            var keyIds = readId(s, Yaml_getInstance());
            var tmp3_elvis_lhs = s.peekOrNull_187wat_k$();
            var sp = tmp3_elvis_lhs == null ? EOF_getInstance() : tmp3_elvis_lhs;
            var tmp;
            if (s.get_eof_18j6gd_k$()) {
              tmp = true;
            } else {
              var tmp_0;
              if (!(sp.get_str_18ivy0_k$() === ':')) {
                tmp_0 = true;
              } else {
                var tmp_1;
                if (sp instanceof SYMBOL) {
                  tmp_1 = !sp.get_isNextWhite_hn7ud9_k$();
                } else {
                  tmp_1 = false;
                }
                tmp_0 = tmp_1;
              }
              tmp = tmp_0;
            }

            if (tmp) {
              var key_0 = parseStr(Yaml_getInstance(), keyIds);
              if (false) {
                println(levelStr + 'LIT: ' + toString_0(key_0));
              }
              return key_0;
            } else {
              var key_1 = toString_0(parseStr(Yaml_getInstance(), keyIds));
              if (map == null)
                map = LinkedHashMap_init_$Create$();
              if (!(s.read_22xsm_k$().get_str_18ivy0_k$() === ':')) {
                get_invalidOp();
              }
              if (false) {
                println(levelStr + 'MAP[' + key_1 + ']...');
              }
              var next = s.peekOrNull_187wat_k$();
              var nextStr = next == null ? null : next.get_str_18ivy0_k$();
              var tmp_2;
              if (next instanceof SYMBOL) {
                tmp_2 = next.get_isNextWhite_hn7ud9_k$();
              } else {
                tmp_2 = false;
              }
              var hasSpaces = tmp_2;
              var nextIsSpecialSymbol;
              switch (nextStr) {
                case '[':
                case '{':
                  nextIsSpecialSymbol = true;
                  break;
                default:
                  nextIsSpecialSymbol = nextStr === '-' ? hasSpaces : false;
                  break;
              }
              var value_0 = readOrString(Yaml_getInstance(), s, level, Yaml_getInstance().EMPTY_SET_1, !nextIsSpecialSymbol);
              lastMapKey = key_1;
              lastMapValue = value_0;
              // Inline function 'kotlin.collections.set' call
              map.put_4fpzoq_k$(key_1, value_0);
              list = null;
              if (false) {
                println(levelStr + 'MAP[' + key_1 + ']: ' + toString_0(value_0));
              }
            }

            break;
        }
      }
    }
    if (false) {
      println(levelStr + 'RETURN: list=' + list + ', map=' + map);
    }
    var tmp5_elvis_lhs = map;
    return tmp5_elvis_lhs == null ? list : tmp5_elvis_lhs;
  }
  function readId(_this__u8e3s4, $this) {
    // Inline function 'kotlin.collections.arrayListOf' call
    var tokens = ArrayList_init_$Create$();
    $l$loop: while (_this__u8e3s4.get_hasMore_csdhd2_k$()) {
      var token = _this__u8e3s4.peek_21nx7_k$();
      var tmp;
      var tmp_0;
      var tmp_1;
      if (token instanceof ID) {
        tmp_1 = true;
      } else {
        tmp_1 = token instanceof STR;
      }
      if (tmp_1) {
        tmp_0 = true;
      } else {
        var tmp_2;
        if (token instanceof SYMBOL) {
          tmp_2 = token.get_str_18ivy0_k$() === '-';
        } else {
          tmp_2 = false;
        }
        tmp_0 = tmp_2;
      }
      if (tmp_0) {
        tmp = true;
      } else {
        var tmp_3;
        var tmp_4;
        if (token instanceof SYMBOL) {
          tmp_4 = token.get_str_18ivy0_k$() === ':';
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          tmp_3 = !token.get_isNextWhite_hn7ud9_k$();
        } else {
          tmp_3 = false;
        }
        tmp = tmp_3;
      }
      if (tmp) {
        tokens.add_utx5q5_k$(token);
        _this__u8e3s4.read_22xsm_k$();
      } else {
        break $l$loop;
      }
    }
    return tokens;
  }
  function readOrString($this, s, level, delimiters, supportNonSpaceSymbols) {
    var sp = s.peek_21nx7_k$();
    var tmp;
    var tmp_0;
    if (sp instanceof ID) {
      tmp_0 = true;
    } else {
      var tmp_1;
      var tmp_2;
      if (supportNonSpaceSymbols) {
        tmp_2 = sp instanceof SYMBOL;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = !sp.get_isNextWhite_hn7ud9_k$();
      } else {
        tmp_1 = false;
      }
      tmp_0 = tmp_1;
    }
    if (tmp_0) {
      var str = '';
      str: while (s.get_hasMore_csdhd2_k$()) {
        var p = s.peek_21nx7_k$();
        if (p instanceof LINE)
          break str;
        if (delimiters.contains_aljjnj_k$(p.get_str_18ivy0_k$()))
          break str;
        str = str + s.read_22xsm_k$().get_str_18ivy0_k$();
      }
      tmp = parseStr_0($this, str);
    } else {
      tmp = read($this, s, level + 1 | 0);
    }
    return tmp;
  }
  function tokenize(_this__u8e3s4, $this) {
    // Inline function 'kotlin.collections.arrayListOf' call
    var out = ArrayList_init_$Create$();
    var s = _this__u8e3s4;
    var str = {_v: ''};
    var indents = ArrayList_init_$Create$();
    linestart: while (_this__u8e3s4.get_hasMore_csdhd2_k$()) {
      tokenize$flush(str, out);
      var indentStr = replace(_this__u8e3s4.readWhile_aeez89_k$(isWhitespace$ref()), '\t', '     ');
      if (contains_2(indentStr, _Char___init__impl__6a9atx(10)))
        continue linestart;
      var indent = indentStr.length;
      if (indents.isEmpty_y1axqb_k$() ? true : indent > last(indents)) {
        // Inline function 'kotlin.collections.plusAssign' call
        indents.add_utx5q5_k$(indent);
      } else {
        $l$loop: while (true) {
          var tmp;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!indents.isEmpty_y1axqb_k$()) {
            tmp = indent < last(indents);
          } else {
            tmp = false;
          }
          if (!tmp) {
            break $l$loop;
          }
          indents.removeAt_6niowx_k$(indents.get_size_woubt6_k$() - 1 | 0);
        }
        if (indents.isEmpty_y1axqb_k$()) {
          get_invalidOp();
        }
      }
      var indentLevel = indents.get_size_woubt6_k$() - 1 | 0;
      $l$loop_0: while (true) {
        var tmp_0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!out.isEmpty_y1axqb_k$()) {
          var tmp_1 = last(out);
          tmp_0 = tmp_1 instanceof LINE;
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          break $l$loop_0;
        }
        out.removeAt_6niowx_k$(out.get_size_woubt6_k$() - 1 | 0);
      }
      // Inline function 'kotlin.collections.plusAssign' call
      var element = new LINE(indentStr, indentLevel);
      out.add_utx5q5_k$(element);
      while (_this__u8e3s4.get_hasMore_csdhd2_k$()) {
        var c = _this__u8e3s4.read_8wmrfs_k$();
        if ((((c === _Char___init__impl__6a9atx(58) ? true : c === _Char___init__impl__6a9atx(45)) ? true : c === _Char___init__impl__6a9atx(91)) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(44)) {
          tokenize$flush(str, out);
          // Inline function 'kotlin.collections.plusAssign' call
          var element_0 = new SYMBOL(toString_1(c), _this__u8e3s4.peek_oam7h9_k$());
          out.add_utx5q5_k$(element_0);
        } else if (c === _Char___init__impl__6a9atx(35)) {
          tokenize$flush(str, out);
          readUntilLineEnd(_this__u8e3s4, $this);
          _this__u8e3s4.skip_23pfj_k$();
          continue linestart;
        } else if (c === _Char___init__impl__6a9atx(10)) {
          tokenize$flush(str, out);
          continue linestart;
        } else if (c === _Char___init__impl__6a9atx(34) ? true : c === _Char___init__impl__6a9atx(39)) {
          tokenize$flush(str, out);
          s.unread_dw9ys1_k$();
          // Inline function 'kotlin.collections.plusAssign' call
          var element_1 = new STR(readStringLit(s));
          out.add_utx5q5_k$(element_1);
        } else {
          str._v = str._v + toString_1(c);
        }
      }
    }
    tokenize$flush(str, out);
    return out;
  }
  function Token_0() {
  }
  function readUntilLineEnd(_this__u8e3s4, $this) {
    return _this__u8e3s4.readUntil_hvfuo6_k$(Yaml$readUntilLineEnd$lambda);
  }
  function tokenize$flush(str, out) {
    var tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = str._v;
    if (!isBlank(this_0)) {
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_1 = str._v;
      tmp = charSequenceLength(this_1) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'kotlin.collections.plusAssign' call
      // Inline function 'kotlin.text.trim' call
      var this_2 = str._v;
      var tmp$ret$2 = toString(trim(isCharSequence(this_2) ? this_2 : THROW_CCE()));
      var element = new ID(tmp$ret$2);
      out.add_utx5q5_k$(element);
      str._v = '';
    }
  }
  function Yaml$parseStr$lambda(it) {
    return it.get_ustr_wovt2d_k$();
  }
  function isWhitespace$ref() {
    var l = function (p0) {
      return isWhitespace(p0.value_1);
    };
    l.callableName = 'isWhitespace';
    return l;
  }
  function Yaml$readUntilLineEnd$lambda(it) {
    return equals(it, new Char(_Char___init__impl__6a9atx(10)));
  }
  function Yaml() {
    Yaml_instance = this;
    this.TRACE_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.setOf' call
    tmp.EMPTY_SET_1 = emptySet();
    this.SET_COMMA_END_ARRAY_1 = setOf([',', ']']);
  }
  protoOf(Yaml).decode_gmof1w_k$ = function (str) {
    return read(this, new ListReader(this.tokenize_iah49r_k$(str)), 0);
  };
  protoOf(Yaml).read_ierm78_k$ = function (str) {
    return read(this, new ListReader(this.tokenize_iah49r_k$(str)), 0);
  };
  protoOf(Yaml).get_TRACE_ih1wcc_k$ = function () {
    return this.TRACE_1;
  };
  protoOf(Yaml).tokenize_iah49r_k$ = function (str) {
    return tokenize(new StrReader(replace(str, '\r\n', '\n')), this);
  };
  var Yaml_instance;
  function Yaml_getInstance() {
    if (Yaml_instance == null)
      new Yaml();
    return Yaml_instance;
  }
  function _get_lock__d9xa4g($this) {
    return $this.lock_1;
  }
  function KorteAsyncCache$invoke$slambda($gen, resultContinuation) {
    this.$gen_1 = $gen;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KorteAsyncCache$invoke$slambda).invoke_8lqry9_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteAsyncCache$invoke$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_8lqry9_k$($completion);
  };
  protoOf(KorteAsyncCache$invoke$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$gen_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(KorteAsyncCache$invoke$slambda).create_d196fn_k$ = function (completion) {
    return new KorteAsyncCache$invoke$slambda(this.$gen_1, completion);
  };
  function KorteAsyncCache$invoke$slambda_0($gen, resultContinuation) {
    var i = new KorteAsyncCache$invoke$slambda($gen, resultContinuation);
    var l = function ($completion) {
      return i.invoke_8lqry9_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function KorteAsyncCache() {
    this.lock_1 = new Object();
    this.deferreds_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(KorteAsyncCache).get_deferreds_eh6dyt_k$ = function () {
    return this.deferreds_1;
  };
  protoOf(KorteAsyncCache).invalidateAll_yol1g6_k$ = function () {
    // Inline function 'korlibs.template.internal.invoke' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    // Inline function 'korlibs.template.internal.invoke.<anonymous>' call
    this.deferreds_1.clear_j9egeb_k$();
  };
  protoOf(KorteAsyncCache).invoke_c2vvjd_k$ = function (key, gen, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var ctx = $completion.get_context_h02k06_k$();
    // Inline function 'korlibs.template.internal.invoke' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    // Inline function 'korlibs.template.internal.invoke.<anonymous>' call
    // Inline function 'korlibs.template.internal.KorteAsyncCache.invoke.<anonymous>' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.deferreds_1;
    var value = this_0.get_wei43m_k$(key);
    var tmp;
    if (value == null) {
      // Inline function 'korlibs.template.internal.KorteAsyncCache.invoke.<anonymous>.<anonymous>' call
      var tmp_0 = Companion_getInstance_7();
      var answer = tmp_0.asyncImmediately_cfp6xv_k$(ctx, KorteAsyncCache$invoke$slambda_0(gen, null));
      this_0.put_4fpzoq_k$(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var tmp_1 = tmp;
    var deferred = tmp_1 instanceof KorteDeferred ? tmp_1 : THROW_CCE();
    return deferred.await_4rdzbx_k$($completion);
  };
  protoOf(KorteAsyncCache).call_5p9ooh_k$ = function (key, gen, $completion) {
    return this.invoke_c2vvjd_k$(key, gen, $completion);
  };
  function quote(_this__u8e3s4) {
    _init_properties__Template_internal_kt__x3hwry();
    return !(_this__u8e3s4 == null) ? '"' + escape(_this__u8e3s4) + '"' : 'null';
  }
  function posSkip($this, count) {
    var out = $this.pos_1;
    $this.pos_1 = $this.pos_1 + count | 0;
    return out;
  }
  function readBlock($this, callback) {
    var start = $this.pos_1;
    callback();
    var end = $this.pos_1;
    return $this.substr_vqw9pt_k$(start, end - start | 0);
  }
  function KorteStrReader$readUntil$lambda($v) {
    return function (it) {
      return equals(it, new Char($v));
    };
  }
  function KorteStrReader(str, pos) {
    pos = pos === VOID ? 0 : pos;
    this.str_1 = str;
    this.pos_1 = pos;
  }
  protoOf(KorteStrReader).get_str_18ivy0_k$ = function () {
    return this.str_1;
  };
  protoOf(KorteStrReader).set_pos_tfwdvz_k$ = function (_set____db54di) {
    this.pos_1 = _set____db54di;
  };
  protoOf(KorteStrReader).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(KorteStrReader).get_length_g42xv3_k$ = function () {
    return this.str_1.length;
  };
  protoOf(KorteStrReader).get_hasMore_csdhd2_k$ = function () {
    return this.pos_1 < this.get_length_g42xv3_k$();
  };
  protoOf(KorteStrReader).skipWhile_mixydc_k$ = function (f) {
    while (this.get_hasMore_csdhd2_k$() ? f(new Char(this.peek_oam7h9_k$())) : false) {
      this.skip_23pfj_k$();
    }
  };
  protoOf(KorteStrReader).skipUntil_ju2fbn_k$ = function (f) {
    $l$loop: while (true) {
      var tmp;
      if (this.get_hasMore_csdhd2_k$()) {
        // Inline function 'korlibs.template.internal.KorteStrReader.skipUntil.<anonymous>' call
        var it = this.peek_oam7h9_k$();
        tmp = !f(new Char(it));
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.skip_23pfj_k$();
    }
    return Unit_getInstance();
  };
  protoOf(KorteStrReader).skip_23pfj_k$ = function () {
    return this.skip_7luint_k$(1);
  };
  protoOf(KorteStrReader).peekChar_2c2lw3_k$ = function () {
    return this.get_hasMore_csdhd2_k$() ? charSequenceGet(this.str_1, this.pos_1) : _Char___init__impl__6a9atx(0);
  };
  protoOf(KorteStrReader).peek_oam7h9_k$ = function () {
    return this.get_hasMore_csdhd2_k$() ? charSequenceGet(this.str_1, this.pos_1) : _Char___init__impl__6a9atx(0);
  };
  protoOf(KorteStrReader).read_8wmrfs_k$ = function () {
    return this.get_hasMore_csdhd2_k$() ? charSequenceGet(this.str_1, posSkip(this, 1)) : _Char___init__impl__6a9atx(0);
  };
  protoOf(KorteStrReader).unread_dw9ys1_k$ = function () {
    return this.skip_7luint_k$(-1);
  };
  protoOf(KorteStrReader).substr_vqw9pt_k$ = function (start, len) {
    var start_0 = coerceIn(start, 0, this.get_length_g42xv3_k$());
    var end = coerceIn(start_0 + len | 0, 0, this.get_length_g42xv3_k$());
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.str_1.substring(start_0, end);
  };
  protoOf(KorteStrReader).substr$default_wakw8n_k$ = function (start, len, $super) {
    len = len === VOID ? this.get_length_g42xv3_k$() - this.pos_1 | 0 : len;
    return $super === VOID ? this.substr_vqw9pt_k$(start, len) : $super.substr_vqw9pt_k$.call(this, start, len);
  };
  protoOf(KorteStrReader).skip_7luint_k$ = function (count) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.internal.KorteStrReader.skip.<anonymous>' call
    this.pos_1 = this.pos_1 + count | 0;
    return this;
  };
  protoOf(KorteStrReader).peek_6g603_k$ = function (count) {
    return this.substr_vqw9pt_k$(this.pos_1, count);
  };
  protoOf(KorteStrReader).read_yyte66_k$ = function (count) {
    // Inline function 'kotlin.also' call
    var this_0 = this.peek_6g603_k$(count);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.internal.KorteStrReader.read.<anonymous>' call
    this.skip_7luint_k$(count);
    return this_0;
  };
  protoOf(KorteStrReader).readUntil_l8xim3_k$ = function (v) {
    var start = this.pos_1;
    this.skipUntil_ju2fbn_k$(KorteStrReader$readUntil$lambda(v));
    var end = this.pos_1;
    var tmp;
    if (this.get_hasMore_csdhd2_k$()) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = this.str_1.substring(start, end);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(KorteStrReader).skipSpaces_kdzwp0_k$ = function () {
    $l$loop: while (true) {
      var tmp;
      if (this.get_hasMore_csdhd2_k$()) {
        // Inline function 'korlibs.template.internal.KorteStrReader.skipSpaces.<anonymous>' call
        var it = this.peek_oam7h9_k$();
        tmp = isWhitespaceFast(it);
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.skip_23pfj_k$();
    }
    return Unit_getInstance();
  };
  protoOf(KorteStrReader).readWhile_aeez89_k$ = function (f) {
    // Inline function 'korlibs.template.internal.KorteStrReader.readBlock' call
    var start = this.pos_1;
    // Inline function 'korlibs.template.internal.KorteStrReader.readWhile.<anonymous>' call
    // Inline function 'korlibs.template.internal.KorteStrReader.skipWhile' call
    while (this.get_hasMore_csdhd2_k$() ? f(new Char(this.peek_oam7h9_k$())) : false) {
      this.skip_23pfj_k$();
    }
    var end = this.pos_1;
    return this.substr_vqw9pt_k$(start, end - start | 0);
  };
  protoOf(KorteStrReader).readUntil_hvfuo6_k$ = function (f) {
    // Inline function 'korlibs.template.internal.KorteStrReader.readBlock' call
    var start = this.pos_1;
    // Inline function 'korlibs.template.internal.KorteStrReader.readUntil.<anonymous>' call
    this.skipUntil_ju2fbn_k$(f);
    var end = this.pos_1;
    return this.substr_vqw9pt_k$(start, end - start | 0);
  };
  function isLetterDigitOrUnderscore(_this__u8e3s4) {
    _init_properties__Template_internal_kt__x3hwry();
    return (isLetterOrDigit(_this__u8e3s4) ? true : _this__u8e3s4 === _Char___init__impl__6a9atx(95)) ? true : _this__u8e3s4 === _Char___init__impl__6a9atx(36);
  }
  function unescape(_this__u8e3s4) {
    _init_properties__Template_internal_kt__x3hwry();
    var out = StringBuilder_init_$Create$_0(_this__u8e3s4.length);
    var n = 0;
    while (n < _this__u8e3s4.length) {
      var tmp0 = n;
      n = tmp0 + 1 | 0;
      var c = charSequenceGet(_this__u8e3s4, tmp0);
      if (c === _Char___init__impl__6a9atx(92)) {
        var tmp2 = n;
        n = tmp2 + 1 | 0;
        var c2 = charSequenceGet(_this__u8e3s4, tmp2);
        if (c2 === _Char___init__impl__6a9atx(92)) {
          out.append_am5a4z_k$(_Char___init__impl__6a9atx(92));
        } else if (c2 === _Char___init__impl__6a9atx(34)) {
          out.append_am5a4z_k$(_Char___init__impl__6a9atx(34));
        } else if (c2 === _Char___init__impl__6a9atx(110)) {
          out.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
        } else if (c2 === _Char___init__impl__6a9atx(114)) {
          out.append_am5a4z_k$(_Char___init__impl__6a9atx(13));
        } else if (c2 === _Char___init__impl__6a9atx(116)) {
          out.append_am5a4z_k$(_Char___init__impl__6a9atx(9));
        } else if (c2 === _Char___init__impl__6a9atx(120) ? true : c2 === _Char___init__impl__6a9atx(117)) {
          var N = c2 === _Char___init__impl__6a9atx(117) ? 4 : 2;
          // Inline function 'kotlin.text.substring' call
          var startIndex = n;
          var endIndex = n + N | 0;
          // Inline function 'kotlin.js.asDynamic' call
          var chars = _this__u8e3s4.substring(startIndex, endIndex);
          n = n + N | 0;
          out.append_am5a4z_k$(numberToChar(toInt(chars, 16)));
        } else {
          out.append_22ad7x_k$('\\' + toString_1(c2));
        }
      } else {
        out.append_am5a4z_k$(c);
      }
    }
    return out.toString();
  }
  function umod(_this__u8e3s4, other) {
    _init_properties__Template_internal_kt__x3hwry();
    var rm = _this__u8e3s4 % other | 0;
    var remainder = rm === 0 ? 0 : rm;
    return remainder < 0 ? remainder + other | 0 : remainder;
  }
  function Json_stringify(value) {
    _init_properties__Template_internal_kt__x3hwry();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0(128);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.internal.Json_stringify.<anonymous>' call
    jsonStringify(this_0, value);
    return this_0.toString();
  }
  function format(_this__u8e3s4, params) {
    _init_properties__Template_internal_kt__x3hwry();
    var paramIndex = {_v: 0};
    var tmp = get_formatRegex();
    return tmp.replace_dbivij_k$(_this__u8e3s4, format$lambda(params, paramIndex));
  }
  function OutOfBoundsException(list, pos) {
    RuntimeException_init_$Init$_0(this);
    captureStack(this, OutOfBoundsException);
    this.list_1 = list;
    this.pos_1 = pos;
  }
  protoOf(OutOfBoundsException).get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  protoOf(OutOfBoundsException).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  function ListReader(list, ctx) {
    ctx = ctx === VOID ? null : ctx;
    this.list_1 = list;
    this.ctx_1 = ctx;
    this.position_1 = 0;
  }
  protoOf(ListReader).get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  protoOf(ListReader).get_ctx_18j7sy_k$ = function () {
    return this.ctx_1;
  };
  protoOf(ListReader).set_position_h4ktwi_k$ = function (_set____db54di) {
    this.position_1 = _set____db54di;
  };
  protoOf(ListReader).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(ListReader).get_size_woubt6_k$ = function () {
    return this.list_1.get_size_woubt6_k$();
  };
  protoOf(ListReader).get_eof_18j6gd_k$ = function () {
    return this.position_1 >= this.list_1.get_size_woubt6_k$();
  };
  protoOf(ListReader).get_hasMore_csdhd2_k$ = function () {
    return this.position_1 < this.list_1.get_size_woubt6_k$();
  };
  protoOf(ListReader).peekOrNull_187wat_k$ = function () {
    return getOrNull(this.list_1, this.position_1);
  };
  protoOf(ListReader).peek_21nx7_k$ = function () {
    var tmp0_elvis_lhs = getOrNull(this.list_1, this.position_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new OutOfBoundsException(this, this.position_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListReader).tryPeek_30xee6_k$ = function (ahead) {
    return getOrNull(this.list_1, this.position_1 + ahead | 0);
  };
  protoOf(ListReader).skip_7luint_k$ = function (count) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.internal.ListReader.skip.<anonymous>' call
    this.position_1 = this.position_1 + count | 0;
    return this;
  };
  protoOf(ListReader).skip$default_jxpl2p_k$ = function (count, $super) {
    count = count === VOID ? 1 : count;
    return $super === VOID ? this.skip_7luint_k$(count) : $super.skip_7luint_k$.call(this, count);
  };
  protoOf(ListReader).read_22xsm_k$ = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = this.peek_21nx7_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.internal.ListReader.read.<anonymous>' call
    this.skip_7luint_k$(1);
    return this_0;
  };
  protoOf(ListReader).tryPrev_hamws2_k$ = function () {
    return getOrNull(this.list_1, this.position_1 - 1 | 0);
  };
  protoOf(ListReader).prev_21xkj_k$ = function () {
    var tmp0_elvis_lhs = this.tryPrev_hamws2_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new OutOfBoundsException(this, this.position_1 - 1 | 0);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListReader).tryRead_halwjz_k$ = function () {
    return this.get_hasMore_csdhd2_k$() ? this.read_22xsm_k$() : null;
  };
  protoOf(ListReader).prevOrContext_icuisn_k$ = function () {
    var tmp0_elvis_lhs = this.tryPrev_hamws2_k$();
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this.ctx_1 : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var reason = 'Context not defined';
      throw new NotImplementedError('An operation is not implemented: ' + reason);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListReader).toString = function () {
    return 'ListReader(' + this.list_1 + ')';
  };
  function get_invalidOp() {
    _init_properties__Template_internal_kt__x3hwry();
    throw RuntimeException_init_$Create$_0();
  }
  function invalidOp(msg) {
    _init_properties__Template_internal_kt__x3hwry();
    throw RuntimeException_init_$Create$(msg);
  }
  function posSkip_0($this, count) {
    var out = $this.pos_1;
    $this.pos_1 = $this.pos_1 + count | 0;
    return out;
  }
  function readBlock_0($this, callback) {
    var start = $this.pos_1;
    callback();
    var end = $this.pos_1;
    return $this.substr_vqw9pt_k$(start, end - start | 0);
  }
  function StrReader$readUntil$lambda($v) {
    return function (it) {
      return equals(it, new Char($v));
    };
  }
  function StrReader(str, pos) {
    pos = pos === VOID ? 0 : pos;
    this.str_1 = str;
    this.pos_1 = pos;
  }
  protoOf(StrReader).get_str_18ivy0_k$ = function () {
    return this.str_1;
  };
  protoOf(StrReader).set_pos_tfwdvz_k$ = function (_set____db54di) {
    this.pos_1 = _set____db54di;
  };
  protoOf(StrReader).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  protoOf(StrReader).get_length_g42xv3_k$ = function () {
    return this.str_1.length;
  };
  protoOf(StrReader).get_hasMore_csdhd2_k$ = function () {
    return this.pos_1 < this.get_length_g42xv3_k$();
  };
  protoOf(StrReader).skipWhile_mixydc_k$ = function (f) {
    while (this.get_hasMore_csdhd2_k$() ? f(new Char(this.peek_oam7h9_k$())) : false) {
      this.skip_23pfj_k$();
    }
  };
  protoOf(StrReader).skipUntil_ju2fbn_k$ = function (f) {
    $l$loop: while (true) {
      var tmp;
      if (this.get_hasMore_csdhd2_k$()) {
        // Inline function 'korlibs.template.internal.StrReader.skipUntil.<anonymous>' call
        var it = this.peek_oam7h9_k$();
        tmp = !f(new Char(it));
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.skip_23pfj_k$();
    }
    return Unit_getInstance();
  };
  protoOf(StrReader).skip_23pfj_k$ = function () {
    return this.skip_7luint_k$(1);
  };
  protoOf(StrReader).peek_oam7h9_k$ = function () {
    return this.get_hasMore_csdhd2_k$() ? charSequenceGet(this.str_1, this.pos_1) : _Char___init__impl__6a9atx(0);
  };
  protoOf(StrReader).read_8wmrfs_k$ = function () {
    return this.get_hasMore_csdhd2_k$() ? charSequenceGet(this.str_1, posSkip_0(this, 1)) : _Char___init__impl__6a9atx(0);
  };
  protoOf(StrReader).unread_dw9ys1_k$ = function () {
    return this.skip_7luint_k$(-1);
  };
  protoOf(StrReader).substr_vqw9pt_k$ = function (start, len) {
    var start_0 = coerceIn(start, 0, this.get_length_g42xv3_k$());
    var end = coerceIn(start_0 + len | 0, 0, this.get_length_g42xv3_k$());
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.str_1.substring(start_0, end);
  };
  protoOf(StrReader).substr$default_y6dtfe_k$ = function (start, len, $super) {
    len = len === VOID ? this.get_length_g42xv3_k$() - this.pos_1 | 0 : len;
    return $super === VOID ? this.substr_vqw9pt_k$(start, len) : $super.substr_vqw9pt_k$.call(this, start, len);
  };
  protoOf(StrReader).skip_7luint_k$ = function (count) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.internal.StrReader.skip.<anonymous>' call
    this.pos_1 = this.pos_1 + count | 0;
    return this;
  };
  protoOf(StrReader).peek_6g603_k$ = function (count) {
    return this.substr_vqw9pt_k$(this.pos_1, count);
  };
  protoOf(StrReader).read_yyte66_k$ = function (count) {
    // Inline function 'kotlin.also' call
    var this_0 = this.peek_6g603_k$(count);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.internal.StrReader.read.<anonymous>' call
    this.skip_7luint_k$(count);
    return this_0;
  };
  protoOf(StrReader).readUntil_l8xim3_k$ = function (v) {
    var start = this.pos_1;
    this.skipUntil_ju2fbn_k$(StrReader$readUntil$lambda(v));
    var end = this.pos_1;
    var tmp;
    if (this.get_hasMore_csdhd2_k$()) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = this.str_1.substring(start, end);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(StrReader).skipSpaces_kdzwp0_k$ = function () {
    $l$loop: while (true) {
      var tmp;
      if (this.get_hasMore_csdhd2_k$()) {
        // Inline function 'korlibs.template.internal.StrReader.skipSpaces.<anonymous>' call
        var it = this.peek_oam7h9_k$();
        tmp = isWhitespaceFast(it);
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.skip_23pfj_k$();
    }
    return Unit_getInstance();
  };
  protoOf(StrReader).readWhile_aeez89_k$ = function (f) {
    // Inline function 'korlibs.template.internal.StrReader.readBlock' call
    var start = this.pos_1;
    // Inline function 'korlibs.template.internal.StrReader.readWhile.<anonymous>' call
    // Inline function 'korlibs.template.internal.StrReader.skipWhile' call
    while (this.get_hasMore_csdhd2_k$() ? f(new Char(this.peek_oam7h9_k$())) : false) {
      this.skip_23pfj_k$();
    }
    var end = this.pos_1;
    return this.substr_vqw9pt_k$(start, end - start | 0);
  };
  protoOf(StrReader).readUntil_hvfuo6_k$ = function (f) {
    // Inline function 'korlibs.template.internal.StrReader.readBlock' call
    var start = this.pos_1;
    // Inline function 'korlibs.template.internal.StrReader.readUntil.<anonymous>' call
    this.skipUntil_ju2fbn_k$(f);
    var end = this.pos_1;
    return this.substr_vqw9pt_k$(start, end - start | 0);
  };
  function readStringLit(_this__u8e3s4, reportErrors) {
    reportErrors = reportErrors === VOID ? true : reportErrors;
    _init_properties__Template_internal_kt__x3hwry();
    var out = StringBuilder_init_$Create$();
    var quotec = _this__u8e3s4.read_8wmrfs_k$();
    if (!(quotec === _Char___init__impl__6a9atx(34) ? true : quotec === _Char___init__impl__6a9atx(39)))
      throw RuntimeException_init_$Create$('Invalid string literal');
    var closed = false;
    $l$loop: while (_this__u8e3s4.get_hasMore_csdhd2_k$()) {
      var c = _this__u8e3s4.read_8wmrfs_k$();
      if (c === _Char___init__impl__6a9atx(92)) {
        var cc = _this__u8e3s4.read_8wmrfs_k$();
        var tmp;
        if (cc === _Char___init__impl__6a9atx(92)) {
          tmp = _Char___init__impl__6a9atx(92);
        } else if (cc === _Char___init__impl__6a9atx(47)) {
          tmp = _Char___init__impl__6a9atx(47);
        } else if (cc === _Char___init__impl__6a9atx(39)) {
          tmp = _Char___init__impl__6a9atx(39);
        } else if (cc === _Char___init__impl__6a9atx(34)) {
          tmp = _Char___init__impl__6a9atx(34);
        } else if (cc === _Char___init__impl__6a9atx(98)) {
          tmp = _Char___init__impl__6a9atx(8);
        } else if (cc === _Char___init__impl__6a9atx(102)) {
          tmp = _Char___init__impl__6a9atx(12);
        } else if (cc === _Char___init__impl__6a9atx(110)) {
          tmp = _Char___init__impl__6a9atx(10);
        } else if (cc === _Char___init__impl__6a9atx(114)) {
          tmp = _Char___init__impl__6a9atx(13);
        } else if (cc === _Char___init__impl__6a9atx(116)) {
          tmp = _Char___init__impl__6a9atx(9);
        } else if (cc === _Char___init__impl__6a9atx(117)) {
          tmp = numberToChar(toInt(_this__u8e3s4.read_yyte66_k$(4), 16));
        } else {
          throw RuntimeException_init_$Create$("Invalid char '" + toString_1(cc) + "'");
        }
        out.append_am5a4z_k$(tmp);
      } else if (c === quotec) {
        closed = true;
        break $l$loop;
      } else {
        out.append_am5a4z_k$(c);
      }
    }
    if (!closed ? reportErrors : false) {
      throw RuntimeException_init_$Create$("String literal not closed! '" + _this__u8e3s4.str_1 + "'");
    }
    return out.toString();
  }
  function unquote(_this__u8e3s4) {
    _init_properties__Template_internal_kt__x3hwry();
    var tmp;
    if (isQuoted(_this__u8e3s4)) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = _this__u8e3s4.length - 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = _this__u8e3s4.substring(1, endIndex);
      tmp = unescape(tmp$ret$1);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function invoke(_this__u8e3s4, block) {
    _init_properties__Template_internal_kt__x3hwry();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'korlibs.template.internal.invoke.<anonymous>' call
    return block();
  }
  function escape(_this__u8e3s4) {
    _init_properties__Template_internal_kt__x3hwry();
    return _escape(_this__u8e3s4, false);
  }
  function isWhitespaceFast(_this__u8e3s4) {
    _init_properties__Template_internal_kt__x3hwry();
    return ((_this__u8e3s4 === _Char___init__impl__6a9atx(32) ? true : _this__u8e3s4 === _Char___init__impl__6a9atx(9)) ? true : _this__u8e3s4 === _Char___init__impl__6a9atx(13)) ? true : _this__u8e3s4 === _Char___init__impl__6a9atx(10);
  }
  function jsonStringify(_this__u8e3s4, value) {
    _init_properties__Template_internal_kt__x3hwry();
    if (value == null) {
      _this__u8e3s4.append_22ad7x_k$('null');
    } else {
      if (!(value == null) ? typeof value === 'boolean' : false) {
        _this__u8e3s4.append_g4kq45_k$(equals(value, true));
      } else {
        if (isNumber(value)) {
          _this__u8e3s4.append_t8pm91_k$(value);
        } else {
          if (!(value == null) ? typeof value === 'string' : false) {
            _this__u8e3s4.append_am5a4z_k$(_Char___init__impl__6a9atx(34)).append_22ad7x_k$(escapeUnicode(value)).append_am5a4z_k$(_Char___init__impl__6a9atx(34));
          } else {
            if (!(value == null) ? isInterface(value, Iterable) : false) {
              _this__u8e3s4.append_am5a4z_k$(_Char___init__impl__6a9atx(91));
              var first = true;
              var tmp1_iterator = value.iterator_jk1svi_k$();
              while (tmp1_iterator.hasNext_bitz1p_k$()) {
                var v = tmp1_iterator.next_20eer_k$();
                if (!first) {
                  _this__u8e3s4.append_am5a4z_k$(_Char___init__impl__6a9atx(44));
                }
                jsonStringify(_this__u8e3s4, v);
                first = false;
              }
              _this__u8e3s4.append_am5a4z_k$(_Char___init__impl__6a9atx(93));
            } else {
              if (!(value == null) ? isInterface(value, Map) : false) {
                _this__u8e3s4.append_am5a4z_k$(_Char___init__impl__6a9atx(123));
                var first_0 = true;
                // Inline function 'kotlin.collections.iterator' call
                var tmp2_iterator = value.get_entries_p20ztl_k$().iterator_jk1svi_k$();
                while (tmp2_iterator.hasNext_bitz1p_k$()) {
                  var tmp3_loop_parameter = tmp2_iterator.next_20eer_k$();
                  // Inline function 'kotlin.collections.component1' call
                  var k = tmp3_loop_parameter.get_key_18j28a_k$();
                  // Inline function 'kotlin.collections.component2' call
                  var v_0 = tmp3_loop_parameter.get_value_j01efc_k$();
                  if (!first_0) {
                    _this__u8e3s4.append_am5a4z_k$(_Char___init__impl__6a9atx(44));
                  }
                  jsonStringify(_this__u8e3s4, toString_0(k));
                  _this__u8e3s4.append_am5a4z_k$(_Char___init__impl__6a9atx(58));
                  jsonStringify(_this__u8e3s4, v_0);
                  first_0 = false;
                }
                _this__u8e3s4.append_am5a4z_k$(_Char___init__impl__6a9atx(125));
              } else {
                throw new NotImplementedError();
              }
            }
          }
        }
      }
    }
  }
  function isQuoted(_this__u8e3s4) {
    _init_properties__Template_internal_kt__x3hwry();
    return startsWith_0(_this__u8e3s4, _Char___init__impl__6a9atx(34)) ? endsWith(_this__u8e3s4, _Char___init__impl__6a9atx(34)) : false;
  }
  function _escape(_this__u8e3s4, unicode) {
    _init_properties__Template_internal_kt__x3hwry();
    var out = StringBuilder_init_$Create$_0(_this__u8e3s4.length + 16 | 0);
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var c = charSequenceGet(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (c === _Char___init__impl__6a9atx(92)) {
        out.append_22ad7x_k$('\\\\');
      } else if (c === _Char___init__impl__6a9atx(34)) {
        out.append_22ad7x_k$('\\"');
      } else if (c === _Char___init__impl__6a9atx(10)) {
        out.append_22ad7x_k$('\\n');
      } else if (c === _Char___init__impl__6a9atx(13)) {
        out.append_22ad7x_k$('\\r');
      } else if (c === _Char___init__impl__6a9atx(9)) {
        out.append_22ad7x_k$('\\t');
      } else if (!unicode ? _Char___init__impl__6a9atx(0) <= c ? c <= _Char___init__impl__6a9atx(31) : false : false) {
        out.append_22ad7x_k$('\\x');
        // Inline function 'kotlin.code' call
        var tmp$ret$0 = Char__toInt_impl_vasixd(c);
        out.append_am5a4z_k$(charSequenceGet('0123456789abcdef', (tmp$ret$0 >>> 4 | 0) & 15));
        // Inline function 'kotlin.code' call
        var tmp$ret$1 = Char__toInt_impl_vasixd(c);
        out.append_am5a4z_k$(charSequenceGet('0123456789abcdef', (tmp$ret$1 >>> 0 | 0) & 15));
      } else if (unicode ? !isPrintable(c) : false) {
        out.append_22ad7x_k$('\\u');
        // Inline function 'kotlin.code' call
        var tmp$ret$2 = Char__toInt_impl_vasixd(c);
        out.append_am5a4z_k$(charSequenceGet('0123456789abcdef', (tmp$ret$2 >>> 12 | 0) & 15));
        // Inline function 'kotlin.code' call
        var tmp$ret$3 = Char__toInt_impl_vasixd(c);
        out.append_am5a4z_k$(charSequenceGet('0123456789abcdef', (tmp$ret$3 >>> 8 | 0) & 15));
        // Inline function 'kotlin.code' call
        var tmp$ret$4 = Char__toInt_impl_vasixd(c);
        out.append_am5a4z_k$(charSequenceGet('0123456789abcdef', (tmp$ret$4 >>> 4 | 0) & 15));
        // Inline function 'kotlin.code' call
        var tmp$ret$5 = Char__toInt_impl_vasixd(c);
        out.append_am5a4z_k$(charSequenceGet('0123456789abcdef', (tmp$ret$5 >>> 0 | 0) & 15));
      } else {
        out.append_am5a4z_k$(c);
      }
    }
    return out.toString();
  }
  function escapeUnicode(_this__u8e3s4) {
    _init_properties__Template_internal_kt__x3hwry();
    return _escape(_this__u8e3s4, true);
  }
  function get_HEX_DIGITS_LOWER() {
    return HEX_DIGITS_LOWER;
  }
  var HEX_DIGITS_LOWER;
  function isPrintable(_this__u8e3s4) {
    _init_properties__Template_internal_kt__x3hwry();
    return (_Char___init__impl__6a9atx(32) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(126) : false) ? true : _Char___init__impl__6a9atx(161) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(255) : false;
  }
  function format$lambda($params, $paramIndex) {
    return function (mr) {
      var tmp0 = $paramIndex._v;
      $paramIndex._v = tmp0 + 1 | 0;
      var param = $params[tmp0];
      var size = mr.get_groupValues_rkv314_k$().get_c1px32_k$(1);
      var type = mr.get_groupValues_rkv314_k$().get_c1px32_k$(2);
      var tmp;
      switch (type) {
        case 'd':
          tmp = numberToLong(isNumber(param) ? param : THROW_CCE()).toString();
          break;
        case 'X':
        case 'x':
          var tmp_0;
          if (typeof param === 'number') {
            // Inline function 'kotlin.toUInt' call
            var tmp$ret$0 = _UInt___init__impl__l7qpdl(param);
            tmp_0 = toString_3(tmp$ret$0, 16);
          } else {
            // Inline function 'kotlin.toULong' call
            var this_0 = numberToLong(isNumber(param) ? param : THROW_CCE());
            var tmp$ret$1 = _ULong___init__impl__c78o9k(this_0);
            tmp_0 = toString_2(tmp$ret$1, 16);
          }

          var res = tmp_0;
          var tmp_1;
          if (type === 'X') {
            // Inline function 'kotlin.text.uppercase' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp_1 = res.toUpperCase();
          } else {
            // Inline function 'kotlin.text.lowercase' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp_1 = res.toLowerCase();
          }

          tmp = tmp_1;
          break;
        default:
          tmp = toString(param);
          break;
      }
      var str = tmp;
      var prefix = startsWith_0(size, _Char___init__impl__6a9atx(48)) ? _Char___init__impl__6a9atx(48) : _Char___init__impl__6a9atx(32);
      var asize = toIntOrNull(size);
      var str2 = str;
      var tmp_2;
      if (!(asize == null)) {
        while (str2.length < asize) {
          // Inline function 'kotlin.text.plus' call
          var other = str2;
          str2 = toString_1(prefix) + other;
        }
        tmp_2 = Unit_getInstance();
      }
      return str2;
    };
  }
  var properties_initialized__Template_internal_kt_un5fsk;
  function _init_properties__Template_internal_kt__x3hwry() {
    if (!properties_initialized__Template_internal_kt_un5fsk) {
      properties_initialized__Template_internal_kt_un5fsk = true;
      formatRegex = Regex_init_$Create$('%([-]?\\d+)?(\\w)');
    }
  }
  function KorteAsyncTextWriterContainer() {
  }
  function OutOfBoundsException_0(list, pos) {
    RuntimeException_init_$Init$_0(this);
    captureStack(this, OutOfBoundsException_0);
    this.list_1 = list;
    this.pos_1 = pos;
  }
  protoOf(OutOfBoundsException_0).get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  protoOf(OutOfBoundsException_0).get_pos_18iyad_k$ = function () {
    return this.pos_1;
  };
  function KorteListReader(list, ctx) {
    ctx = ctx === VOID ? null : ctx;
    this.list_1 = list;
    this.ctx_1 = ctx;
    this.position_1 = 0;
  }
  protoOf(KorteListReader).get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  protoOf(KorteListReader).get_ctx_18j7sy_k$ = function () {
    return this.ctx_1;
  };
  protoOf(KorteListReader).set_position_h4ktwi_k$ = function (_set____db54di) {
    this.position_1 = _set____db54di;
  };
  protoOf(KorteListReader).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(KorteListReader).get_size_woubt6_k$ = function () {
    return this.list_1.get_size_woubt6_k$();
  };
  protoOf(KorteListReader).get_eof_18j6gd_k$ = function () {
    return this.position_1 >= this.list_1.get_size_woubt6_k$();
  };
  protoOf(KorteListReader).get_hasMore_csdhd2_k$ = function () {
    return this.position_1 < this.list_1.get_size_woubt6_k$();
  };
  protoOf(KorteListReader).peekOrNull_187wat_k$ = function () {
    return getOrNull(this.list_1, this.position_1);
  };
  protoOf(KorteListReader).peek_21nx7_k$ = function () {
    var tmp0_elvis_lhs = getOrNull(this.list_1, this.position_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new OutOfBoundsException_0(this, this.position_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(KorteListReader).tryPeek_30xee6_k$ = function (ahead) {
    return getOrNull(this.list_1, this.position_1 + ahead | 0);
  };
  protoOf(KorteListReader).skip_7luint_k$ = function (count) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.util.KorteListReader.skip.<anonymous>' call
    this.position_1 = this.position_1 + count | 0;
    return this;
  };
  protoOf(KorteListReader).skip$default_4cz5fh_k$ = function (count, $super) {
    count = count === VOID ? 1 : count;
    return $super === VOID ? this.skip_7luint_k$(count) : $super.skip_7luint_k$.call(this, count);
  };
  protoOf(KorteListReader).read_22xsm_k$ = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = this.peek_21nx7_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.util.KorteListReader.read.<anonymous>' call
    this.skip_7luint_k$(1);
    return this_0;
  };
  protoOf(KorteListReader).tryPrev_hamws2_k$ = function () {
    return getOrNull(this.list_1, this.position_1 - 1 | 0);
  };
  protoOf(KorteListReader).prev_21xkj_k$ = function () {
    var tmp0_elvis_lhs = this.tryPrev_hamws2_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new OutOfBoundsException_0(this, this.position_1 - 1 | 0);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(KorteListReader).tryRead_halwjz_k$ = function () {
    return this.get_hasMore_csdhd2_k$() ? this.read_22xsm_k$() : null;
  };
  protoOf(KorteListReader).prevOrContext_icuisn_k$ = function () {
    var tmp0_elvis_lhs = this.tryPrev_hamws2_k$();
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this.ctx_1 : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var reason = 'Context not defined';
      throw new NotImplementedError('An operation is not implemented: ' + reason);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(KorteListReader).toString = function () {
    return 'ListReader(' + this.list_1 + ')';
  };
  function KorteDeferred$Companion$asyncImmediately$1$1($coroutineContext, $deferred) {
    this.$deferred_1 = $deferred;
    this.context_1 = $coroutineContext;
  }
  protoOf(KorteDeferred$Companion$asyncImmediately$1$1).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(KorteDeferred$Companion$asyncImmediately$1$1).resumeWith_dtxwbr_k$ = function (result) {
    return this.$deferred_1.completeWith_raa87h_k$(result);
  };
  function _get_lock__d9xa4g_0($this) {
    return $this.lock_1;
  }
  function _set_result__gjrnty($this, _set____db54di) {
    $this.result_1 = _set____db54di;
  }
  function _get_result__f31376($this) {
    return $this.result_1;
  }
  function _get_continuations__8h2ci3($this) {
    return $this.continuations_1;
  }
  function resolveIfRequired($this) {
    // Inline function 'korlibs.template.internal.invoke' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.lock_1;
    // Inline function 'korlibs.template.internal.invoke.<anonymous>' call
    // Inline function 'korlibs.template.util.KorteDeferred.resolveIfRequired.<anonymous>' call
    var result = $this.result_1;
    if (!(result == null)) {
      // Inline function 'korlibs.template.internal.invoke' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      $this.lock_1;
      // Inline function 'korlibs.template.internal.invoke.<anonymous>' call
      // Inline function 'korlibs.template.util.KorteDeferred.resolveIfRequired.<anonymous>' call
      var tmp;
      if ($this.continuations_1.isEmpty_y1axqb_k$()) {
        tmp = emptyList();
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = toList($this.continuations_1);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'korlibs.template.util.KorteDeferred.resolveIfRequired.<anonymous>.<anonymous>' call
        $this.continuations_1.clear_j9egeb_k$();
        tmp = this_0;
      }
      var tmp0_iterator = tmp.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var v = tmp0_iterator.next_20eer_k$();
        v.resumeWith_dtxwbr_k$(result.value_1);
      }
    }
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).asyncImmediately_cfp6xv_k$ = function (coroutineContext, callback) {
    // Inline function 'kotlin.also' call
    var this_0 = new KorteDeferred();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'korlibs.template.util.Companion.asyncImmediately.<anonymous>' call
    startCoroutine(callback, new KorteDeferred$Companion$asyncImmediately$1$1(coroutineContext, this_0));
    return this_0;
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function KorteDeferred$toContinuation$1($coroutineContext, this$0) {
    this.this$0__1 = this$0;
    this.context_1 = $coroutineContext;
  }
  protoOf(KorteDeferred$toContinuation$1).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(KorteDeferred$toContinuation$1).resumeWith_dtxwbr_k$ = function (result) {
    return this.this$0__1.completeWith_raa87h_k$(result);
  };
  function $awaitCOROUTINE$47(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$47).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            this._this__u8e3s4__1.lock_1;
            this._this__u8e3s4__1.continuations_1.add_utx5q5_k$(safe);
            resolveIfRequired(this._this__u8e3s4__1);
            suspendResult = returnIfSuspended(safe.getOrThrow_323tdf_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function KorteDeferred() {
    Companion_getInstance_7();
    this.lock_1 = new Object();
    this.result_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.continuations_1 = ArrayList_init_$Create$();
  }
  protoOf(KorteDeferred).completeWith_raa87h_k$ = function (result) {
    // Inline function 'korlibs.template.internal.invoke' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    // Inline function 'korlibs.template.internal.invoke.<anonymous>' call
    this.result_1 = new Result(result);
    resolveIfRequired(this);
  };
  protoOf(KorteDeferred).completeExceptionally_gn5nwx_k$ = function (t) {
    // Inline function 'kotlin.Companion.failure' call
    Companion_getInstance();
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(t));
    return this.completeWith_raa87h_k$(tmp$ret$0);
  };
  protoOf(KorteDeferred).complete_jlcwdi_k$ = function (value) {
    // Inline function 'kotlin.Companion.success' call
    Companion_getInstance();
    var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
    return this.completeWith_raa87h_k$(tmp$ret$0);
  };
  protoOf(KorteDeferred).await_4rdzbx_k$ = function ($completion) {
    var tmp = new $awaitCOROUTINE$47(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KorteDeferred).toContinuation_540fi1_k$ = function (coroutineContext) {
    return new KorteDeferred$toContinuation$1(coroutineContext, this);
  };
  function get_KorteMapper2() {
    _init_properties__Template_dynamic_js_kt__k243u5();
    return KorteMapper2;
  }
  var KorteMapper2;
  function $invokeAsyncCOROUTINE$48(_this__u8e3s4, type, instance, key, args, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.type_1 = type;
    this.instance_1 = instance;
    this.key_1 = key;
    this.args_1 = args;
  }
  protoOf($invokeAsyncCOROUTINE$48).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_0 = this.instance_1;
            if (!(tmp_0 == null) ? isInterface(tmp_0, KorteDynamicType) : false) {
              this.set_state_rjd8d0_k$(5);
              suspendResult = this._this__u8e3s4__1.get_dynamicShape_xh1qkn_k$(this.instance_1).callMethod_9nlnas_k$(this.instance_1, this.key_1, this.args_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

          case 1:
            var tmp_1 = this;
            tmp_1.tmp0_elvis_lhs0__1 = this.instance_1[this.key_1];
            if (this.tmp0_elvis_lhs0__1 == null) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = invokeAsync.call(this._this__u8e3s4__1, this.type_1, this.instance_1, this.key_1, this.args_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.WHEN_RESULT1__1 = this.tmp0_elvis_lhs0__1;
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 2:
            var tmp_2 = this;
            return suspendResult;
          case 3:
            this.function2__1 = this.WHEN_RESULT1__1;
            this.set_state_rjd8d0_k$(4);
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var arity = this.function2__1.length;
            var rargs = !(this.args_1.get_size_woubt6_k$() === arity) ? plus(this.args_1, listOf_0(safe)) : this.args_1;
            try {
              var result = this.function2__1.apply(this.instance_1, copyToArray(rargs));
              if (result != get_COROUTINE_SUSPENDED()) {
                Companion_getInstance();
                safe.resumeWith_dtxwbr_k$(_Result___init__impl__xyqfz8(result));
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                Companion_getInstance();
                safe.resumeWith_dtxwbr_k$(_Result___init__impl__xyqfz8(createFailure(e)));
              } else {
                throw $p;
              }
            }

            suspendResult = returnIfSuspended(safe.getOrThrow_323tdf_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return suspendResult;
          case 5:
            return suspendResult;
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function JsObjectMapper2() {
  }
  protoOf(JsObjectMapper2).hasProperty_vjbg1h_k$ = function (instance, key) {
    if (isInterface(instance, KorteDynamicType))
      return this.get_dynamicShape_xh1qkn_k$(instance).hasProp_e0nl19_k$(key);
    // Inline function 'kotlin.js.asDynamic' call
    var tof = typeof instance[key];
    return !(tof === 'undefined') ? !(tof === 'function') : false;
  };
  protoOf(JsObjectMapper2).hasMethod_zgn0rb_k$ = function (instance, key) {
    if (isInterface(instance, KorteDynamicType))
      return this.get_dynamicShape_xh1qkn_k$(instance).hasMethod_y4kbcv_k$(key);
    // Inline function 'kotlin.js.asDynamic' call
    return !(typeof instance[key] === 'undefined');
  };
  protoOf(JsObjectMapper2).invokeAsync_eic2jd_k$ = function (type, instance, key, args, $completion) {
    var tmp = new $invokeAsyncCOROUTINE$48(this, type, instance, key, args, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(JsObjectMapper2).set_xioigp_k$ = function (instance, key, value, $completion) {
    if (isInterface(instance, KorteDynamicType)) {
      this.get_dynamicShape_xh1qkn_k$(instance).setProp_ydkkso_k$(instance, key, value);
      return Unit_getInstance();
    }
    // Inline function 'kotlin.js.asDynamic' call
    instance[key] = value;
    return Unit_getInstance();
  };
  protoOf(JsObjectMapper2).get_ypu2as_k$ = function (instance, key, $completion) {
    if (isInterface(instance, KorteDynamicType))
      return this.get_dynamicShape_xh1qkn_k$(instance).getProp_m33n2j_k$(instance, key);
    // Inline function 'kotlin.js.asDynamic' call
    return instance[key];
  };
  var properties_initialized__Template_dynamic_js_kt_8zeskv;
  function _init_properties__Template_dynamic_js_kt__k243u5() {
    if (!properties_initialized__Template_dynamic_js_kt_8zeskv) {
      properties_initialized__Template_dynamic_js_kt_8zeskv = true;
      KorteMapper2 = new JsObjectMapper2();
    }
  }
  //region block: post-declaration
  protoOf(KorteTag).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(KorteTag).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(KorteTag).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(KorteTag).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(KorteTag).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(KorteTag).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(KorteTag).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(KorteTag).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(KorteTag).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(KorteTag).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(KorteTag).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(KorteTag).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(KorteTag).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(KorteTag).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(KorteTag).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(Ctx).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(Ctx).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(Ctx).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(Ctx).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(Ctx).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(Ctx).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(Ctx).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(Ctx).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(Ctx).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(Ctx).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(Ctx).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(Ctx).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(Ctx).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(Ctx).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(Ctx).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(Scope).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(Scope).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(Scope).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(Scope).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(Scope).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(Scope).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(Scope).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(Scope).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(Scope).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(Scope).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(Scope).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(Scope).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(Scope).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(Scope).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(Scope).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(EvalContext).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(EvalContext).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(EvalContext).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(EvalContext).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(EvalContext).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(EvalContext).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(EvalContext).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(EvalContext).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(EvalContext).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(EvalContext).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(EvalContext).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(EvalContext).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(EvalContext).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(EvalContext).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(EvalContext).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(KorteToken).get_posContext_avexqc_k$ = get_posContext;
  protoOf(KorteToken).exception_kh9cqz_k$ = exception;
  protoOf(Mixin).get_posContext_avexqc_k$ = get_posContext;
  protoOf(Mixin).exception_kh9cqz_k$ = exception;
  defineProp(protoOf(KorteException), 'message', function () {
    return this.get_message_h23axq_k$();
  });
  protoOf(KorteDefaultTags$Switch$1$1).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(KorteDefaultTags$Switch$1$1).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(KorteDefaultTags$Switch$1$1).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(KorteDefaultTags$Switch$1$1).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(KorteDefaultTags$Switch$1$1).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(KorteDefaultTags$Switch$1$1).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(KorteDefaultTags$Switch$1$1).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(KorteDefaultTags$Switch$1$1).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(KorteDefaultTags$Switch$1$1).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(KorteDefaultTags$Switch$1$1).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(KorteDefaultTags$Switch$1$1).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(KorteDefaultTags$Switch$1$1).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(KorteDefaultTags$Switch$1$1).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(KorteDefaultTags$Switch$1$1).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(KorteDefaultTags$Switch$1$1).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(BlockBlock).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(BlockBlock).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(BlockBlock).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(BlockBlock).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(BlockBlock).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(BlockBlock).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(BlockBlock).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(BlockBlock).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(BlockBlock).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(BlockBlock).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(BlockBlock).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(BlockBlock).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(BlockBlock).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(BlockBlock).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(BlockBlock).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(BlockCapture).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(BlockCapture).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(BlockCapture).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(BlockCapture).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(BlockCapture).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(BlockCapture).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(BlockCapture).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(BlockCapture).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(BlockCapture).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(BlockCapture).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(BlockCapture).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(BlockCapture).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(BlockCapture).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(BlockCapture).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(BlockCapture).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(BlockDebug).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(BlockDebug).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(BlockDebug).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(BlockDebug).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(BlockDebug).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(BlockDebug).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(BlockDebug).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(BlockDebug).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(BlockDebug).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(BlockDebug).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(BlockDebug).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(BlockDebug).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(BlockDebug).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(BlockDebug).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(BlockDebug).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(BlockExpr).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(BlockExpr).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(BlockExpr).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(BlockExpr).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(BlockExpr).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(BlockExpr).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(BlockExpr).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(BlockExpr).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(BlockExpr).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(BlockExpr).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(BlockExpr).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(BlockExpr).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(BlockExpr).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(BlockExpr).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(BlockExpr).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(BlockExtends).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(BlockExtends).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(BlockExtends).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(BlockExtends).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(BlockExtends).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(BlockExtends).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(BlockExtends).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(BlockExtends).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(BlockExtends).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(BlockExtends).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(BlockExtends).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(BlockExtends).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(BlockExtends).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(BlockExtends).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(BlockExtends).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(BlockFor).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(BlockFor).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(BlockFor).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(BlockFor).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(BlockFor).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(BlockFor).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(BlockFor).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(BlockFor).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(BlockFor).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(BlockFor).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(BlockFor).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(BlockFor).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(BlockFor).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(BlockFor).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(BlockFor).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(BlockGroup).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(BlockGroup).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(BlockGroup).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(BlockGroup).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(BlockGroup).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(BlockGroup).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(BlockGroup).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(BlockGroup).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(BlockGroup).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(BlockGroup).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(BlockGroup).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(BlockGroup).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(BlockGroup).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(BlockGroup).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(BlockGroup).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(BlockIf).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(BlockIf).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(BlockIf).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(BlockIf).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(BlockIf).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(BlockIf).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(BlockIf).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(BlockIf).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(BlockIf).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(BlockIf).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(BlockIf).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(BlockIf).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(BlockIf).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(BlockIf).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(BlockIf).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(BlockImport).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(BlockImport).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(BlockImport).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(BlockImport).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(BlockImport).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(BlockImport).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(BlockImport).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(BlockImport).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(BlockImport).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(BlockImport).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(BlockImport).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(BlockImport).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(BlockImport).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(BlockImport).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(BlockImport).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(BlockInclude).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(BlockInclude).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(BlockInclude).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(BlockInclude).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(BlockInclude).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(BlockInclude).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(BlockInclude).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(BlockInclude).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(BlockInclude).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(BlockInclude).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(BlockInclude).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(BlockInclude).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(BlockInclude).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(BlockInclude).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(BlockInclude).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(BlockMacro).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(BlockMacro).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(BlockMacro).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(BlockMacro).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(BlockMacro).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(BlockMacro).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(BlockMacro).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(BlockMacro).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(BlockMacro).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(BlockMacro).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(BlockMacro).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(BlockMacro).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(BlockMacro).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(BlockMacro).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(BlockMacro).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(BlockSet).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(BlockSet).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(BlockSet).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(BlockSet).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(BlockSet).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(BlockSet).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(BlockSet).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(BlockSet).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(BlockSet).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(BlockSet).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(BlockSet).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(BlockSet).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(BlockSet).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(BlockSet).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(BlockSet).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(BlockText).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(BlockText).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(BlockText).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(BlockText).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(BlockText).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(BlockText).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(BlockText).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(BlockText).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(BlockText).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(BlockText).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(BlockText).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(BlockText).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(BlockText).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(BlockText).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(BlockText).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(VAR).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(VAR).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(VAR).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(VAR).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(VAR).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(VAR).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(VAR).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(VAR).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(VAR).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(VAR).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(VAR).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(VAR).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(VAR).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(VAR).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(VAR).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(LIT).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(LIT).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(LIT).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(LIT).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(LIT).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(LIT).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(LIT).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(LIT).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(LIT).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(LIT).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(LIT).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(LIT).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(LIT).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(LIT).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(LIT).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(ARRAY_LIT).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(ARRAY_LIT).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(ARRAY_LIT).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(ARRAY_LIT).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(ARRAY_LIT).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(ARRAY_LIT).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(ARRAY_LIT).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(ARRAY_LIT).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(ARRAY_LIT).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(ARRAY_LIT).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(ARRAY_LIT).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(ARRAY_LIT).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(ARRAY_LIT).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(ARRAY_LIT).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(ARRAY_LIT).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(OBJECT_LIT).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(OBJECT_LIT).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(OBJECT_LIT).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(OBJECT_LIT).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(OBJECT_LIT).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(OBJECT_LIT).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(OBJECT_LIT).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(OBJECT_LIT).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(OBJECT_LIT).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(OBJECT_LIT).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(OBJECT_LIT).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(OBJECT_LIT).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(OBJECT_LIT).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(OBJECT_LIT).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(OBJECT_LIT).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(FILTER).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(FILTER).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(FILTER).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(FILTER).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(FILTER).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(FILTER).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(FILTER).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(FILTER).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(FILTER).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(FILTER).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(FILTER).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(FILTER).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(FILTER).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(FILTER).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(FILTER).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(ACCESS).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(ACCESS).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(ACCESS).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(ACCESS).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(ACCESS).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(ACCESS).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(ACCESS).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(ACCESS).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(ACCESS).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(ACCESS).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(ACCESS).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(ACCESS).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(ACCESS).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(ACCESS).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(ACCESS).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(CALL).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(CALL).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(CALL).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(CALL).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(CALL).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(CALL).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(CALL).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(CALL).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(CALL).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(CALL).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(CALL).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(CALL).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(CALL).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(CALL).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(CALL).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(BINOP).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(BINOP).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(BINOP).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(BINOP).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(BINOP).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(BINOP).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(BINOP).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(BINOP).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(BINOP).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(BINOP).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(BINOP).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(BINOP).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(BINOP).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(BINOP).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(BINOP).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(TERNARY).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(TERNARY).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(TERNARY).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(TERNARY).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(TERNARY).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(TERNARY).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(TERNARY).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(TERNARY).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(TERNARY).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(TERNARY).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(TERNARY).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(TERNARY).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(TERNARY).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(TERNARY).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(TERNARY).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(UNOP).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(UNOP).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(UNOP).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(UNOP).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(UNOP).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(UNOP).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(UNOP).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(UNOP).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(UNOP).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(UNOP).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(UNOP).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(UNOP).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(UNOP).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(UNOP).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(UNOP).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(KorteDynamicShape).register_a0qgxd_k$ = register;
  protoOf(KorteDynamicShape).register_ghhcv8_k$ = register_0;
  protoOf(KorteDynamicShape).register$default_hhhj9z_k$ = register$default;
  protoOf(KorteDynamicContext$Companion$Instance$1).compareTo_ncwzf6_k$ = compareTo_0;
  protoOf(KorteDynamicContext$Companion$Instance$1).combineTypes_d2e0as_k$ = combineTypes;
  protoOf(KorteDynamicContext$Companion$Instance$1).toDynamicCastToType_jtn3mg_k$ = toDynamicCastToType;
  protoOf(KorteDynamicContext$Companion$Instance$1).toDynamicString_9srrng_k$ = toDynamicString;
  protoOf(KorteDynamicContext$Companion$Instance$1).toDynamicBool_bp1ztv_k$ = toDynamicBool;
  protoOf(KorteDynamicContext$Companion$Instance$1).toDynamicInt_6gqvkq_k$ = toDynamicInt;
  protoOf(KorteDynamicContext$Companion$Instance$1).toDynamicLong_8oqsup_k$ = toDynamicLong;
  protoOf(KorteDynamicContext$Companion$Instance$1).toDynamicDouble_6mw6ws_k$ = toDynamicDouble;
  protoOf(KorteDynamicContext$Companion$Instance$1).toDynamicNumber_1xut8c_k$ = toDynamicNumber;
  protoOf(KorteDynamicContext$Companion$Instance$1).toDynamicList_34vdgv_k$ = toDynamicList;
  protoOf(KorteDynamicContext$Companion$Instance$1).dynamicLength_vf561g_k$ = dynamicLength;
  protoOf(KorteDynamicContext$Companion$Instance$1).dynamicGet_whxagf_k$ = dynamicGet;
  protoOf(KorteDynamicContext$Companion$Instance$1).dynamicSet_gezniq_k$ = dynamicSet;
  protoOf(KorteDynamicContext$Companion$Instance$1).dynamicCall_1yw0v6_k$ = dynamicCall;
  protoOf(KorteDynamicContext$Companion$Instance$1).dynamicCallMethod_uezick_k$ = dynamicCallMethod;
  protoOf(EOF).get_ustr_wovt2d_k$ = get_ustr;
  protoOf(LINE).get_ustr_wovt2d_k$ = get_ustr;
  protoOf(ID).get_ustr_wovt2d_k$ = get_ustr;
  protoOf(SYMBOL).get_ustr_wovt2d_k$ = get_ustr;
  protoOf(JsObjectMapper2).get_dynamicShape_xh1qkn_k$ = get_dynamicShape;
  protoOf(JsObjectMapper2).accessAny_pjmbp_k$ = accessAny;
  protoOf(JsObjectMapper2).accessAnyObject_ifsv7o_k$ = accessAnyObject;
  //endregion
  //region block: init
  HEX_DIGITS_LOWER = '0123456789abcdef';
  //endregion
  return _;
}));
