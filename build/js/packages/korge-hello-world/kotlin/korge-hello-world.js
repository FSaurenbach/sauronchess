(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './korge-root-korge-core.js', './korge-root-korge.js', './korge-root-korge-foundation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./korge-root-korge-core.js'), require('./korge-root-korge.js'), require('./korge-root-korge-foundation.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'korge-hello-world'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'korge-hello-world'.");
    }
    if (typeof this['korge-root-korge-core'] === 'undefined') {
      throw new Error("Error loading module 'korge-hello-world'. Its dependency 'korge-root-korge-core' was not found. Please, check whether 'korge-root-korge-core' is loaded prior to 'korge-hello-world'.");
    }
    if (typeof this['korge-root-korge'] === 'undefined') {
      throw new Error("Error loading module 'korge-hello-world'. Its dependency 'korge-root-korge' was not found. Please, check whether 'korge-root-korge' is loaded prior to 'korge-hello-world'.");
    }
    if (typeof this['korge-root-korge-foundation'] === 'undefined') {
      throw new Error("Error loading module 'korge-hello-world'. Its dependency 'korge-root-korge-foundation' was not found. Please, check whether 'korge-root-korge-foundation' is loaded prior to 'korge-hello-world'.");
    }
    root['korge-hello-world'] = factory(typeof this['korge-hello-world'] === 'undefined' ? {} : this['korge-hello-world'], this['kotlin-kotlin-stdlib'], this['korge-root-korge-core'], this['korge-root-korge'], this['korge-root-korge-foundation']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_soywiz_korge_korge_core, kotlin_com_soywiz_korge_korge, kotlin_com_soywiz_korge_korge_foundation) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ag;
  var THROW_CCE = kotlin_kotlin.$_$.zk;
  var getStringHashCode = kotlin_kotlin.$_$.ve;
  var Annotation = kotlin_kotlin.$_$.jk;
  var classMeta = kotlin_kotlin.$_$.ie;
  var setMetadataFor = kotlin_kotlin.$_$.bg;
  var VOID = kotlin_kotlin.$_$.h;
  var readTtfFont = kotlin_com_soywiz_korge_korge_core.$_$.b;
  var readBitmap = kotlin_com_soywiz_korge_korge_core.$_$.e;
  var readBitmapSlice = kotlin_com_soywiz_korge_korge_core.$_$.c;
  var readSound = kotlin_com_soywiz_korge_korge_core.$_$.a;
  var interfaceMeta = kotlin_kotlin.$_$.ye;
  var objectMeta = kotlin_kotlin.$_$.zf;
  var get_resourcesVfs = kotlin_com_soywiz_korge_korge_core.$_$.a5;
  var println = kotlin_kotlin.$_$.wd;
  var Pair = kotlin_kotlin.$_$.wk;
  var Container = kotlin_com_soywiz_korge_korge.$_$.o;
  var Size2D_init_$Create$ = kotlin_com_soywiz_korge_korge_foundation.$_$.z1;
  var Colors_getInstance = kotlin_com_soywiz_korge_korge_core.$_$.z1;
  var Korge = kotlin_com_soywiz_korge_korge.$_$.b;
  var Unit_getInstance = kotlin_kotlin.$_$.c6;
  var PixelatedScene = kotlin_com_soywiz_korge_korge.$_$.l;
  var get_isEven = kotlin_com_soywiz_korge_korge_foundation.$_$.zf;
  var onMouseDrag = kotlin_com_soywiz_korge_korge.$_$.j;
  var draggableCloseable = kotlin_com_soywiz_korge_korge.$_$.h;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yl;
  var FixedSizeContainer = kotlin_com_soywiz_korge_korge.$_$.p;
  var CoroutineImpl = kotlin_kotlin.$_$.od;
  var Stage = kotlin_com_soywiz_korge_korge.$_$.q;
  var get_AlphaTransition = kotlin_com_soywiz_korge_korge.$_$.k;
  var Companion_getInstance = kotlin_com_soywiz_korge_korge_foundation.$_$.j6;
  var withEasing = kotlin_com_soywiz_korge_korge.$_$.n;
  var Companion_getInstance_0 = kotlin_com_soywiz_korge_korge_foundation.$_$.h6;
  var views = kotlin_com_soywiz_korge_korge.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.vc;
  var findFirstAscendant = kotlin_com_soywiz_korge_korge.$_$.t;
  var Size2D = kotlin_com_soywiz_korge_korge_foundation.$_$.ce;
  var SceneContainer = kotlin_com_soywiz_korge_korge.$_$.m;
  var addTo = kotlin_com_soywiz_korge_korge.$_$.s;
  var DurationUnit_SECONDS_getInstance = kotlin_kotlin.$_$.q;
  var toDuration = kotlin_kotlin.$_$.hk;
  var getKClass = kotlin_kotlin.$_$.f;
  var Resources = kotlin_com_soywiz_korge_korge_core.$_$.z5;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var KClass = kotlin_kotlin.$_$.ah;
  var isInterface = kotlin_kotlin.$_$.if;
  var Companion_getInstance_1 = kotlin_com_soywiz_korge_korge.$_$.e;
  var Level_INFO_getInstance = kotlin_com_soywiz_korge_korge_foundation.$_$.c;
  var fillArrayVal = kotlin_kotlin.$_$.oe;
  var Companion_getInstance_2 = kotlin_com_soywiz_korge_korge.$_$.f;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var SuspendFunction1 = kotlin_kotlin.$_$.qd;
  var get_EmptyContinuation = kotlin_kotlin.$_$.zc;
  var THROW_IAE = kotlin_kotlin.$_$.al;
  var enumEntries = kotlin_kotlin.$_$.ud;
  var Enum = kotlin_kotlin.$_$.ok;
  var numberToInt = kotlin_kotlin.$_$.vf;
  var Vector2D = kotlin_com_soywiz_korge_korge_foundation.$_$.ge;
  var get_mouse = kotlin_com_soywiz_korge_korge.$_$.i;
  var MouseEvents = kotlin_com_soywiz_korge_korge.$_$.g;
  var ensureNotNull = kotlin_kotlin.$_$.sl;
  var launchImmediately = kotlin_com_soywiz_korge_korge_core.$_$.o4;
  var View = kotlin_com_soywiz_korge_korge.$_$.r;
  var View_init_$Init$ = kotlin_com_soywiz_korge_korge.$_$.d;
  var Image_init_$Create$ = kotlin_com_soywiz_korge_korge.$_$.c;
  var size = kotlin_com_soywiz_korge_korge.$_$.u;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.dm;
  var numberToDouble = kotlin_kotlin.$_$.uf;
  var xy = kotlin_com_soywiz_korge_korge.$_$.v;
  var KProperty1 = kotlin_kotlin.$_$.eh;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ue;
  var SuspendFunction0 = kotlin_kotlin.$_$.pd;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ResourceVfsPath, 'ResourceVfsPath', classMeta, VOID, [Annotation]);
  setMetadataFor(TypedVfsFile, 'TypedVfsFile', classMeta);
  setMetadataFor(TypedVfsFileTTF, 'TypedVfsFileTTF', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(TypedVfsFileBitmap, 'TypedVfsFileBitmap', classMeta, VOID, VOID, VOID, VOID, VOID, [0, 2]);
  setMetadataFor(TypedVfsFileSound, 'TypedVfsFileSound', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(TypedAtlas, 'TypedAtlas', interfaceMeta);
  function get___file() {
    return get_resourcesVfs().get_6bo4tg_k$('');
  }
  function get_bBishop() {
    return _TypedVfsFileBitmap___init__impl__r6h9ul(get_resourcesVfs().get_6bo4tg_k$('b_bishop.png'));
  }
  function get_bKing() {
    return _TypedVfsFileBitmap___init__impl__r6h9ul(get_resourcesVfs().get_6bo4tg_k$('b_king.png'));
  }
  function get_bKnight() {
    return _TypedVfsFileBitmap___init__impl__r6h9ul(get_resourcesVfs().get_6bo4tg_k$('b_knight.png'));
  }
  function get_bPawn() {
    return _TypedVfsFileBitmap___init__impl__r6h9ul(get_resourcesVfs().get_6bo4tg_k$('b_pawn.png'));
  }
  function get_bQueen() {
    return _TypedVfsFileBitmap___init__impl__r6h9ul(get_resourcesVfs().get_6bo4tg_k$('b_queen.png'));
  }
  function get_bRook() {
    return _TypedVfsFileBitmap___init__impl__r6h9ul(get_resourcesVfs().get_6bo4tg_k$('b_rook.png'));
  }
  function get_korge() {
    return _TypedVfsFileBitmap___init__impl__r6h9ul(get_resourcesVfs().get_6bo4tg_k$('korge.png'));
  }
  function get_squareBrownDark() {
    return _TypedVfsFileBitmap___init__impl__r6h9ul(get_resourcesVfs().get_6bo4tg_k$('square_brown_dark.png'));
  }
  function get_squareBrownLight() {
    return _TypedVfsFileBitmap___init__impl__r6h9ul(get_resourcesVfs().get_6bo4tg_k$('square_brown_light.png'));
  }
  function get_squareGrayDark() {
    return _TypedVfsFileBitmap___init__impl__r6h9ul(get_resourcesVfs().get_6bo4tg_k$('square_gray_dark.png'));
  }
  function get_squareGrayLight() {
    return _TypedVfsFileBitmap___init__impl__r6h9ul(get_resourcesVfs().get_6bo4tg_k$('square_gray_light.png'));
  }
  function get_wBishop() {
    return _TypedVfsFileBitmap___init__impl__r6h9ul(get_resourcesVfs().get_6bo4tg_k$('w_bishop.png'));
  }
  function get_wKing() {
    return _TypedVfsFileBitmap___init__impl__r6h9ul(get_resourcesVfs().get_6bo4tg_k$('w_king.png'));
  }
  function get_wKnight() {
    return _TypedVfsFileBitmap___init__impl__r6h9ul(get_resourcesVfs().get_6bo4tg_k$('w_knight.png'));
  }
  function get_wPawn() {
    return _TypedVfsFileBitmap___init__impl__r6h9ul(get_resourcesVfs().get_6bo4tg_k$('w_pawn.png'));
  }
  function get_wQueen() {
    return _TypedVfsFileBitmap___init__impl__r6h9ul(get_resourcesVfs().get_6bo4tg_k$('w_queen.png'));
  }
  function get_wRook() {
    return _TypedVfsFileBitmap___init__impl__r6h9ul(get_resourcesVfs().get_6bo4tg_k$('w_rook.png'));
  }
  setMetadataFor(KR_0, 'KR', interfaceMeta);
  setMetadataFor(KR, 'KR', objectMeta, VOID, [KR_0]);
  setMetadataFor(__KR, '__KR', objectMeta);
  setMetadataFor(Cell, 'Cell', classMeta, Container);
  setMetadataFor(GameScene, 'GameScene', classMeta, PixelatedScene, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(main$slambda, 'main$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(PieceKind, 'PieceKind', classMeta, Enum);
  setMetadataFor(Piece$clickListener$slambda, 'Piece$clickListener$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(Piece$clickListener$lambda$slambda, 'Piece$clickListener$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [0]);
  setMetadataFor(Piece, 'Piece', classMeta, View);
  //endregion
  function ResourceVfsPath(path) {
    this.path_1 = path;
  }
  protoOf(ResourceVfsPath).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(ResourceVfsPath).equals = function (other) {
    if (!(other instanceof ResourceVfsPath))
      return false;
    var tmp0_other_with_cast = other instanceof ResourceVfsPath ? other : THROW_CCE();
    if (!(this.path_1 === tmp0_other_with_cast.path_1))
      return false;
    return true;
  };
  protoOf(ResourceVfsPath).hashCode = function () {
    return imul(getStringHashCode('path'), 127) ^ getStringHashCode(this.path_1);
  };
  protoOf(ResourceVfsPath).toString = function () {
    return '@ResourceVfsPath(path=' + this.path_1 + ')';
  };
  function _TypedVfsFile___init__impl__9s3ct0(__file) {
    return __file;
  }
  function _TypedVfsFile___get___file__impl__4pua7j($this) {
    return $this;
  }
  function TypedVfsFile__toString_impl_nh61uc($this) {
    return 'TypedVfsFile(__file=' + $this + ')';
  }
  function TypedVfsFile__hashCode_impl_pss3bx($this) {
    return $this.hashCode();
  }
  function TypedVfsFile__equals_impl_hjr7nr($this, other) {
    if (!(other instanceof TypedVfsFile))
      return false;
    var tmp0_other_with_cast = other instanceof TypedVfsFile ? other.__file_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TypedVfsFile(__file) {
    this.__file_1 = __file;
  }
  protoOf(TypedVfsFile).toString = function () {
    return TypedVfsFile__toString_impl_nh61uc(this.__file_1);
  };
  protoOf(TypedVfsFile).hashCode = function () {
    return TypedVfsFile__hashCode_impl_pss3bx(this.__file_1);
  };
  protoOf(TypedVfsFile).equals = function (other) {
    return TypedVfsFile__equals_impl_hjr7nr(this.__file_1, other);
  };
  function _TypedVfsFileTTF___init__impl__pvwvu0(__file) {
    return __file;
  }
  function _TypedVfsFileTTF___get___file__impl__1z4zrp($this) {
    return $this;
  }
  function TypedVfsFileTTF__read_impl_q2ozy2($this, $completion) {
    return readTtfFont(_TypedVfsFileTTF___get___file__impl__1z4zrp($this), VOID, VOID, $completion);
  }
  function TypedVfsFileTTF__toString_impl_p9x2mo($this) {
    return 'TypedVfsFileTTF(__file=' + $this + ')';
  }
  function TypedVfsFileTTF__hashCode_impl_o012jl($this) {
    return $this.hashCode();
  }
  function TypedVfsFileTTF__equals_impl_vtdhdv($this, other) {
    if (!(other instanceof TypedVfsFileTTF))
      return false;
    var tmp0_other_with_cast = other instanceof TypedVfsFileTTF ? other.__file_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TypedVfsFileTTF(__file) {
    this.__file_1 = __file;
  }
  protoOf(TypedVfsFileTTF).toString = function () {
    return TypedVfsFileTTF__toString_impl_p9x2mo(this.__file_1);
  };
  protoOf(TypedVfsFileTTF).hashCode = function () {
    return TypedVfsFileTTF__hashCode_impl_o012jl(this.__file_1);
  };
  protoOf(TypedVfsFileTTF).equals = function (other) {
    return TypedVfsFileTTF__equals_impl_vtdhdv(this.__file_1, other);
  };
  function _TypedVfsFileBitmap___init__impl__r6h9ul(__file) {
    return __file;
  }
  function _TypedVfsFileBitmap___get___file__impl__pbsgf4($this) {
    return $this;
  }
  function TypedVfsFileBitmap__read_impl_d2bmel($this, $completion) {
    return readBitmap(_TypedVfsFileBitmap___get___file__impl__pbsgf4($this), VOID, $completion);
  }
  function TypedVfsFileBitmap__readSlice_impl_1lnqgb($this, atlas, name, $completion) {
    return readBitmapSlice(_TypedVfsFileBitmap___get___file__impl__pbsgf4($this), name, atlas, VOID, $completion);
  }
  function TypedVfsFileBitmap__readSlice$default_impl_emzgt4($this, atlas, name, $completion, $super) {
    atlas = atlas === VOID ? null : atlas;
    name = name === VOID ? null : name;
    var tmp;
    if ($super === VOID) {
      tmp = TypedVfsFileBitmap__readSlice_impl_1lnqgb($this, atlas, name, $completion);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new TypedVfsFileBitmap(tmp_0)).readSlice_dbk4y1_k$.call(new TypedVfsFileBitmap($this), atlas, name, $completion);
    }
    return tmp;
  }
  function TypedVfsFileBitmap__toString_impl_ok04zn($this) {
    return 'TypedVfsFileBitmap(__file=' + $this + ')';
  }
  function TypedVfsFileBitmap__hashCode_impl_opy06m($this) {
    return $this.hashCode();
  }
  function TypedVfsFileBitmap__equals_impl_uc4o8m($this, other) {
    if (!(other instanceof TypedVfsFileBitmap))
      return false;
    var tmp0_other_with_cast = other instanceof TypedVfsFileBitmap ? other.__file_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TypedVfsFileBitmap(__file) {
    this.__file_1 = __file;
  }
  protoOf(TypedVfsFileBitmap).toString = function () {
    return TypedVfsFileBitmap__toString_impl_ok04zn(this.__file_1);
  };
  protoOf(TypedVfsFileBitmap).hashCode = function () {
    return TypedVfsFileBitmap__hashCode_impl_opy06m(this.__file_1);
  };
  protoOf(TypedVfsFileBitmap).equals = function (other) {
    return TypedVfsFileBitmap__equals_impl_uc4o8m(this.__file_1, other);
  };
  function _TypedVfsFileSound___init__impl__fldxfl(__file) {
    return __file;
  }
  function _TypedVfsFileSound___get___file__impl__q31num($this) {
    return $this;
  }
  function TypedVfsFileSound__read_impl_ta2l8j($this, $completion) {
    return readSound(_TypedVfsFileSound___get___file__impl__q31num($this), VOID, VOID, $completion);
  }
  function TypedVfsFileSound__toString_impl_ax5bs7($this) {
    return 'TypedVfsFileSound(__file=' + $this + ')';
  }
  function TypedVfsFileSound__hashCode_impl_au0l0o($this) {
    return $this.hashCode();
  }
  function TypedVfsFileSound__equals_impl_dlrkz8($this, other) {
    if (!(other instanceof TypedVfsFileSound))
      return false;
    var tmp0_other_with_cast = other instanceof TypedVfsFileSound ? other.__file_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TypedVfsFileSound(__file) {
    this.__file_1 = __file;
  }
  protoOf(TypedVfsFileSound).toString = function () {
    return TypedVfsFileSound__toString_impl_ax5bs7(this.__file_1);
  };
  protoOf(TypedVfsFileSound).hashCode = function () {
    return TypedVfsFileSound__hashCode_impl_au0l0o(this.__file_1);
  };
  protoOf(TypedVfsFileSound).equals = function (other) {
    return TypedVfsFileSound__equals_impl_dlrkz8(this.__file_1, other);
  };
  function TypedAtlas() {
  }
  function KR() {
    KR_instance = this;
  }
  var KR_instance;
  function KR_getInstance() {
    if (KR_instance == null)
      new KR();
    return KR_instance;
  }
  function KR_0() {
  }
  function __KR() {
    __KR_instance = this;
  }
  var __KR_instance;
  function __KR_getInstance() {
    if (__KR_instance == null)
      new __KR();
    return __KR_instance;
  }
  function isPiece(i, cy) {
    var piss = null;
    var tmp0_iterator = get_pieces().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var pPos = decodePosition(element.get_piece_iwvl51_k$().get_pos_18iyad_k$());
      println('nigg');
      println(pPos);
      if (pPos.equals(new Pair(i, cy))) {
        println('ndfsaaaaaaaaaaaaaa');
        piss = element;
      }
    }
    return piss;
  }
  function Cell(color, cx, cy, cont) {
    Container.call(this);
    this.cx_1 = cx;
    this.cy_1 = cy;
    var cell = get_board()[this.cx_1][this.cy_1];
    cell.set_x_scd9vp_k$(imul(this.cy_1, 64));
    cell.set_y_lelkme_k$(imul(this.cx_1, 64));
    cell.set_color_ltfudu_k$(color);
    cont.addChild_4pft8c_k$(cell);
  }
  protoOf(Cell).set_cx_fsjmqe_k$ = function (_set____db54di) {
    this.cx_1 = _set____db54di;
  };
  protoOf(Cell).get_cx_knto1u_k$ = function () {
    return this.cx_1;
  };
  protoOf(Cell).set_cy_j349qj_k$ = function (_set____db54di) {
    this.cy_1 = _set____db54di;
  };
  protoOf(Cell).get_cy_knto1t_k$ = function () {
    return this.cy_1;
  };
  function get_board() {
    _init_properties_Main_kt__xi25uv();
    return board;
  }
  var board;
  function set_whitePawn(_set____db54di) {
    _init_properties_Main_kt__xi25uv();
    whitePawn = _set____db54di;
  }
  function get_whitePawn() {
    _init_properties_Main_kt__xi25uv();
    return whitePawn;
  }
  var whitePawn;
  function set_blackPawn(_set____db54di) {
    _init_properties_Main_kt__xi25uv();
    blackPawn = _set____db54di;
  }
  function get_blackPawn() {
    _init_properties_Main_kt__xi25uv();
    return blackPawn;
  }
  var blackPawn;
  function set_lastClicked(_set____db54di) {
    _init_properties_Main_kt__xi25uv();
    lastClicked = _set____db54di;
  }
  function get_lastClicked() {
    _init_properties_Main_kt__xi25uv();
    return lastClicked;
  }
  var lastClicked;
  function set_pieces(_set____db54di) {
    _init_properties_Main_kt__xi25uv();
    pieces = _set____db54di;
  }
  function get_pieces() {
    _init_properties_Main_kt__xi25uv();
    return pieces;
  }
  var pieces;
  function main($completion) {
    var tmp = Size2D_init_$Create$(512, 512);
    var tmp_0 = Colors_getInstance().get_4ig539_k$('#2b2b2b');
    return Korge(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp_0, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, main$slambda_0(null), $completion);
  }
  function _get_cont__d4zd5l($this) {
    return $this.cont_1;
  }
  function GameScene$sceneMain$lambda($newPositionZ, $currentPosZ) {
    return function ($this$onMouseDrag, it) {
      $newPositionZ._v = decodePosition($this$onMouseDrag.get_globalMousePos_si87y3_k$());
      println('Old Position ' + $currentPosZ._v);
      println('New Position ' + $newPositionZ._v);
      return Unit_getInstance();
    };
  }
  function GameScene$sceneMain$lambda_0($currentPosZ, $newPositionZ, $z) {
    return function (info) {
      info.get_view_wow8a6_k$().set_x_scd9vp_k$(info.get_viewNextXY_hgu6ki_k$().get_x_1mhr67_k$());
      var tmp;
      if (info.get_end_18j6ha_k$()) {
        println('End');
        var tmp_0;
        if (moveChecker($currentPosZ._v, $newPositionZ._v, $z._v.get_pieceKind_ae3sop_k$())) {
          $z._v.moveTo_tor82s_k$($newPositionZ._v.get_first_irdx8n_k$(), $newPositionZ._v.get_second_jf7fjx_k$());
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function GameScene$sceneMain$lambda_1($newPositionP, $currentPosP) {
    return function ($this$onMouseDrag, it) {
      $newPositionP._v = decodePosition($this$onMouseDrag.get_globalMousePos_si87y3_k$());
      println('Old Position ' + $currentPosP._v);
      println('New Position ' + $newPositionP._v);
      return Unit_getInstance();
    };
  }
  function GameScene$sceneMain$lambda_2($currentPosP, $newPositionP, $p) {
    return function (info) {
      info.get_view_wow8a6_k$().set_x_scd9vp_k$(info.get_viewNextXY_hgu6ki_k$().get_x_1mhr67_k$());
      var tmp;
      if (info.get_end_18j6ha_k$()) {
        println('End');
        var tmp_0;
        if (moveChecker($currentPosP._v, $newPositionP._v, $p._v.get_pieceKind_ae3sop_k$())) {
          $p._v.moveTo_tor82s_k$($newPositionP._v.get_first_irdx8n_k$(), $newPositionP._v.get_second_jf7fjx_k$());
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function GameScene(cont) {
    PixelatedScene.call(this, 512, 512);
    this.cont_1 = cont;
  }
  protoOf(GameScene).sceneMain_ezje91_k$ = function (_this__u8e3s4, $completion) {
    var d = 0;
    var inductionVariable = 0;
    if (inductionVariable < 8)
      do {
        var cx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < 8)
          do {
            var cy = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (get_isEven(d)) {
              new Cell(Colors_getInstance().get_WHITE_2x68tz_k$(), cx, cy, this.cont_1);
            } else {
              new Cell(Colors_getInstance().get_BLACK_k2cofn_k$(), cx, cy, this.cont_1);
            }
            d = d + 1 | 0;
          }
           while (inductionVariable_0 < 8);
        d = d + 1 | 0;
      }
       while (inductionVariable < 8);
    var p = {_v: new Piece(PieceKind_whitePawn_getInstance(), Colors_getInstance().get_WHITE_2x68tz_k$(), 1, 2, this.cont_1)};
    var z = {_v: new Piece(PieceKind_blackPawn_getInstance(), Colors_getInstance().get_BLACK_k2cofn_k$(), 5, 6, this.cont_1)};
    get_pieces().add_utx5q5_k$(p._v);
    get_pieces().add_utx5q5_k$(z._v);
    var newPositionZ = {_v: decodePosition(z._v.get_position_jfponi_k$())};
    var currentPosZ = {_v: decodePosition(z._v.get_position_jfponi_k$())};
    var tmp = z._v;
    var tmp_0 = onMouseDrag(_this__u8e3s4, VOID, VOID, GameScene$sceneMain$lambda(newPositionZ, currentPosZ));
    draggableCloseable(tmp, tmp_0, false, GameScene$sceneMain$lambda_0(currentPosZ, newPositionZ, z));
    var newPositionP = {_v: decodePosition(p._v.get_position_jfponi_k$())};
    var currentPosP = {_v: decodePosition(p._v.get_position_jfponi_k$())};
    var tmp_1 = p._v;
    var tmp_2 = onMouseDrag(_this__u8e3s4, VOID, VOID, GameScene$sceneMain$lambda_1(newPositionP, currentPosP));
    draggableCloseable(tmp_1, tmp_2, false, GameScene$sceneMain$lambda_2(currentPosP, newPositionP, p));
    return Unit_getInstance();
  };
  function moveChecker(oldPos, newPos, kind) {
    _init_properties_Main_kt__xi25uv();
    switch (kind.get_ordinal_ip24qg_k$()) {
      case 1:
        if (oldPos.get_second_jf7fjx_k$() === 6 ? newPos.get_second_jf7fjx_k$() === 4 : false) {
          return true;
        } else if ((oldPos.get_second_jf7fjx_k$() - newPos.get_second_jf7fjx_k$() | 0) === 1) {
          return true;
        } else {
          return false;
        }

      case 0:
        if (oldPos.get_second_jf7fjx_k$() === 1 ? newPos.get_second_jf7fjx_k$() === 3 : false) {
          return true;
        } else if ((newPos.get_second_jf7fjx_k$() - oldPos.get_second_jf7fjx_k$() | 0) === 1) {
          return true;
        } else {
          return false;
        }

      default:
        noWhenBranchMatchedException();
        break;
    }
    return false;
  }
  function main$slambda$lambda(it) {
    return it instanceof FixedSizeContainer;
  }
  function main$slambda$lambda_0($sceneInjector, $sceneContainer) {
    return function ($this$mapPrototype) {
      // Inline function 'main.<anonymous>.<anonymous>' call
      return new GameScene($sceneContainer);
    };
  }
  function main$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda).invoke_56l5mm_k$ = function ($this$Korge, $completion) {
    var tmp = this.create_el74xq_k$($this$Korge, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(main$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_56l5mm_k$(p1 instanceof Stage ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this.$this$Korge_1;
            var tmp_1 = this;
            tmp_1.defaultTransition1__1 = withEasing(get_AlphaTransition(), Companion_getInstance().get_EASE_IN_OUT_QUAD_v5l1my_k$());
            var tmp_2 = this;
            tmp_2.name2__1 = 'sceneContainer';
            var tmp_3 = this;
            tmp_3.size3__1 = Companion_getInstance_0().get_ZERO_wodlgx_k$();
            var tmp_4 = this;
            tmp_4.this4__1 = this.this0__1;
            this.set_state_rjd8d0_k$(1);
            suspendResult = views(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.views5__1 = suspendResult;
            var tmp_5 = this;
            tmp_5.defaultTransition6__1 = this.defaultTransition1__1;
            var tmp_6 = this;
            tmp_6.name7__1 = this.name2__1;
            var tmp_7 = this;
            tmp_7.size8__1 = this.size3__1;
            this.tmp0_container9__1 = this.size8__1;
            this.width10__1 = this.tmp0_container9__1.component1_7eebsc_k$();
            this.height11__1 = this.tmp0_container9__1.component2_7eebsb_k$();
            this.rwidth12__1 = this.width10__1;
            this.rheight13__1 = this.height11__1;
            if (this.width10__1 === 0.0 ? this.height11__1 === 0.0 : false) {
              var tmp_8 = findFirstAscendant(this.this4__1, main$slambda$lambda);
              var base = (tmp_8 == null ? true : tmp_8 instanceof FixedSizeContainer) ? tmp_8 : null;
              var tmp_9 = this;
              var tmp2_elvis_lhs = base == null ? null : base.get_width_j0q4yl_k$();
              tmp_9.rwidth12__1 = tmp2_elvis_lhs == null ? this.views5__1.get_stage_iypwwl_k$().get_width_j0q4yl_k$() : tmp2_elvis_lhs;
              var tmp_10 = this;
              var tmp4_elvis_lhs = base == null ? null : base.get_height_e7t92o_k$();
              tmp_10.rheight13__1 = tmp4_elvis_lhs == null ? this.views5__1.get_stage_iypwwl_k$().get_height_e7t92o_k$() : tmp4_elvis_lhs;
            }

            var tmp_11 = this;
            var this_0 = new SceneContainer(this.views5__1, this.defaultTransition6__1, this.name7__1, new Size2D(this.rwidth12__1, this.rheight13__1));
            var instance = this.this4__1;
            tmp_11.sceneContainer14__1 = addTo(this_0, instance);
            this.set_state_rjd8d0_k$(2);
            suspendResult = readBitmap(get_resourcesVfs().get_6bo4tg_k$('w_pawn.png'), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ARGUMENT15__1 = suspendResult;
            set_whitePawn(this.ARGUMENT15__1);
            this.set_state_rjd8d0_k$(3);
            suspendResult = readBitmap(get_resourcesVfs().get_6bo4tg_k$('b_pawn.png'), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.ARGUMENT16__1 = suspendResult;
            set_blackPawn(this.ARGUMENT16__1);
            var tmp_12 = this;
            tmp_12.this17__1 = this.sceneContainer14__1;
            var tmp_13 = this;
            tmp_13.injects18__1 = [];
            var tmp_14 = this;
            tmp_14.time19__1 = toDuration(0, DurationUnit_SECONDS_getInstance());
            var tmp_15 = this;
            tmp_15.transition20__1 = this.this17__1.get_defaultTransition_ir9wwd_k$();
            var tmp_16 = this;
            tmp_16.this21__1 = this.this17__1;
            var tmp_17 = this;
            tmp_17.clazz22__1 = getKClass(GameScene);
            var tmp_18 = this;
            tmp_18.injects23__1 = this.injects18__1.slice();
            var tmp_19 = this;
            tmp_19.time24__1 = this.time19__1;
            var tmp_20 = this;
            tmp_20.transition25__1 = this.transition20__1;
            var tmp_21 = this;
            tmp_21.remap26__1 = true;
            this.sceneInjector27__1 = this.this21__1.get_views_j06d6t_k$().get_injector_r41iwz_k$().child_1kc9wc_k$().mapInstance_jnahoa_k$(getKClass(SceneContainer), this.this21__1).mapInstance_jnahoa_k$(getKClass(Resources), new Resources(this.this21__1.get_coroutineContext_115oqo_k$(), this.this21__1.get_views_j06d6t_k$().get_globalResources_b5z86f_k$().get_root_wott0r_k$(), this.this21__1.get_views_j06d6t_k$().get_globalResources_b5z86f_k$()));
            var this_1 = this.injects23__1;
            var n = 0;
            while (n < this_1.length) {
              var tmp0 = n;
              n = tmp0 + 1 | 0;
              var inject = this_1[tmp0];
              var tmp_22 = getKClassFromExpression(inject);
              this.sceneInjector27__1.mapInstance_jnahoa_k$(isInterface(tmp_22, KClass) ? tmp_22 : THROW_CCE(), inject);
            }

            var tmp_23 = this;
            this.sceneInjector27__1;
            tmp_23.newScene28__1 = new GameScene(this.sceneContainer14__1);
            var this_2 = Companion_getInstance_1().get_logger_g9gejd_k$();
            var level = Level_INFO_getInstance();
            if (this_2.isEnabled_481qtp_k$(level)) {
              this_2.actualLog_lo63kr_k$(level, 'Changing scene to... ' + this.clazz22__1 + ' ... ' + this.newScene28__1);
            }

            if (this.remap26__1) {
              this.newScene28__1.init_7bmq0t_k$(this.sceneInjector27__1);
              var tmp_24 = this.this21__1.get_views_j06d6t_k$().get_injector_r41iwz_k$();
              var tmp_25 = getKClassFromExpression(this.newScene28__1);
              var tmp_26 = isInterface(tmp_25, KClass) ? tmp_25 : THROW_CCE();
              tmp_24.mapPrototype_6b3ef5_k$(tmp_26, main$slambda$lambda_0(this.sceneInjector27__1, this.sceneContainer14__1));
            }

            this.set_state_rjd8d0_k$(4);
            suspendResult = this.this21__1._changeTo_minxkl_k$(this.newScene28__1, this.time24__1, this.transition25__1, this);
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
  protoOf(main$slambda).create_el74xq_k$ = function ($this$Korge, completion) {
    var i = new main$slambda(completion);
    i.$this$Korge_1 = $this$Korge;
    return i;
  };
  protoOf(main$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_el74xq_k$(value instanceof Stage ? value : THROW_CCE(), completion);
  };
  function main$slambda_0(resultContinuation) {
    var i = new main$slambda(resultContinuation);
    var l = function ($this$Korge, $completion) {
      return i.invoke_56l5mm_k$($this$Korge, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_Main_kt_gqj46d;
  function _init_properties_Main_kt__xi25uv() {
    if (!properties_initialized_Main_kt_gqj46d) {
      properties_initialized_Main_kt_gqj46d = true;
      var tmp = 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_0 = fillArrayVal(Array(8), null);
      while (tmp < 8) {
        var tmp_1 = tmp;
        var tmp_2 = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_3 = fillArrayVal(Array(8), null);
        while (tmp_2 < 8) {
          tmp_3[tmp_2] = Companion_getInstance_2().invoke$default_yqwvhs_k$(64, 64);
          tmp_2 = tmp_2 + 1 | 0;
        }
        tmp_0[tmp_1] = tmp_3;
        tmp = tmp + 1 | 0;
      }
      board = tmp_0;
      whitePawn = null;
      blackPawn = null;
      lastClicked = null;
      pieces = ArrayList_init_$Create$();
    }
  }
  var PieceKind_whitePawn_instance;
  var PieceKind_blackPawn_instance;
  function values() {
    return [PieceKind_whitePawn_getInstance(), PieceKind_blackPawn_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'whitePawn':
        return PieceKind_whitePawn_getInstance();
      case 'blackPawn':
        return PieceKind_blackPawn_getInstance();
      default:
        PieceKind_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var PieceKind_entriesInitialized;
  function PieceKind_initEntries() {
    if (PieceKind_entriesInitialized)
      return Unit_getInstance();
    PieceKind_entriesInitialized = true;
    PieceKind_whitePawn_instance = new PieceKind('whitePawn', 0, 'wP');
    PieceKind_blackPawn_instance = new PieceKind('blackPawn', 1, 'bP');
  }
  var $ENTRIES;
  function PieceKind(name, ordinal, kind) {
    Enum.call(this, name, ordinal);
  }
  function decodePosition(cxy) {
    var x = cxy.get_x_1mhr67_k$() / 64;
    var y = cxy.get_y_1mhr68_k$() / 64;
    return new Pair(numberToInt(x), numberToInt(y));
  }
  function decode2(cx, cy) {
    var x = cx / 64;
    var y = cy / 64;
    return new Vector2D(x, y);
  }
  function clickListener($this, cx, cy) {
    // Inline function 'korlibs.korge.input.onClick' call
    var this_0 = $this.get_piece_iwvl51_k$();
    var handler = Piece$clickListener$slambda_0($this, cx, cy, null);
    // Inline function 'korlibs.korge.input.doMouseEvent' call
    var prop = click$factory();
    var tmp1_safe_receiver = this_0 == null ? null : get_mouse(this_0);
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'korlibs.korge.input.doMouseEvent.<anonymous>' call
      var tmp = prop.get(tmp1_safe_receiver);
      tmp.add_n00ifk_k$(Piece$clickListener$lambda(tmp1_safe_receiver, handler));
    }
  }
  function Piece$clickListener$slambda(this$0, $cx, $cy, resultContinuation) {
    this.this$0__1 = this$0;
    this.$cx_1 = $cx;
    this.$cy_1 = $cy;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Piece$clickListener$slambda).invoke_20f6i8_k$ = function (it, $completion) {
    var tmp = this.create_njb9r8_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Piece$clickListener$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_20f6i8_k$(p1 instanceof MouseEvents ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Piece$clickListener$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          println(this.this$0__1.pieceKind_1);
          println('pair');
          set_lastClicked(get_board()[this.$cx_1][this.$cy_1].get_pos_18iyad_k$());
          println(decodePosition(ensureNotNull(get_lastClicked())));
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
  protoOf(Piece$clickListener$slambda).create_njb9r8_k$ = function (it, completion) {
    var i = new Piece$clickListener$slambda(this.this$0__1, this.$cx_1, this.$cy_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(Piece$clickListener$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_njb9r8_k$(value instanceof MouseEvents ? value : THROW_CCE(), completion);
  };
  function Piece$clickListener$slambda_0(this$0, $cx, $cy, resultContinuation) {
    var i = new Piece$clickListener$slambda(this$0, $cx, $cy, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_20f6i8_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Piece$clickListener$lambda$slambda($handler, $it, resultContinuation) {
    this.$handler_1 = $handler;
    this.$it_1 = $it;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Piece$clickListener$lambda$slambda).invoke_h7udsx_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Piece$clickListener$lambda$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_h7udsx_k$($completion);
  };
  protoOf(Piece$clickListener$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$handler_1(this.$it_1, this);
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
  protoOf(Piece$clickListener$lambda$slambda).create_d196fn_k$ = function (completion) {
    return new Piece$clickListener$lambda$slambda(this.$handler_1, this.$it_1, completion);
  };
  function Piece$clickListener$lambda$slambda_0($handler, $it, resultContinuation) {
    var i = new Piece$clickListener$lambda$slambda($handler, $it, resultContinuation);
    var l = function ($completion) {
      return i.invoke_h7udsx_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Piece$clickListener$lambda($mouse, $handler) {
    return function (it) {
      var tmp = $mouse.get_coroutineContext_115oqo_k$();
      launchImmediately(tmp, Piece$clickListener$lambda$slambda_0($handler, it, null));
      return Unit_getInstance();
    };
  }
  function Piece(kind, color, cx, cy, cont) {
    View_init_$Init$(this);
    this.pieceKind_1 = kind;
    this.position_1 = get_board()[cx][cy].get_pos_18iyad_k$();
    if (color === Colors_getInstance().get_WHITE_2x68tz_k$()) {
      if (kind.equals(PieceKind_whitePawn_getInstance())) {
        this.piece_1 = Image_init_$Create$(ensureNotNull(get_whitePawn()));
        size(this.get_piece_iwvl51_k$(), Size2D_init_$Create$(64, 64));
        addTo(this.get_piece_iwvl51_k$(), cont);
        this.moveTo_tor82s_k$(cx, cy);
      }
    }
    if (color === Colors_getInstance().get_BLACK_k2cofn_k$()) {
      if (kind.equals(PieceKind_blackPawn_getInstance())) {
        this.piece_1 = Image_init_$Create$(ensureNotNull(get_blackPawn()));
        size(this.get_piece_iwvl51_k$(), Size2D_init_$Create$(64, 64));
        addTo(this.get_piece_iwvl51_k$(), cont);
        this.moveTo_tor82s_k$(cx, cy);
      }
    }
  }
  protoOf(Piece).set_pieceKind_wy3ns9_k$ = function (_set____db54di) {
    this.pieceKind_1 = _set____db54di;
  };
  protoOf(Piece).get_pieceKind_ae3sop_k$ = function () {
    return this.pieceKind_1;
  };
  protoOf(Piece).set_piece_d4yok7_k$ = function (_set____db54di) {
    this.piece_1 = _set____db54di;
  };
  protoOf(Piece).get_piece_iwvl51_k$ = function () {
    var tmp = this.piece_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('piece');
    }
  };
  protoOf(Piece).set_position_ayerke_k$ = function (_set____db54di) {
    this.position_1 = _set____db54di;
  };
  protoOf(Piece).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(Piece).moveTo_tor82s_k$ = function (cx, cy) {
    // Inline function 'korlibs.korge.view.position' call
    var this_0 = this.get_piece_iwvl51_k$();
    var x = imul(cx, 64);
    var y = imul(cy, 64);
    xy(this_0, numberToDouble(x), numberToDouble(y));
    this.position_1 = get_board()[cy][cx].get_pos_18iyad_k$();
  };
  protoOf(Piece).renderInternal_q0pc4n_k$ = function (ctx) {
  };
  function PieceKind_whitePawn_getInstance() {
    PieceKind_initEntries();
    return PieceKind_whitePawn_instance;
  }
  function PieceKind_blackPawn_getInstance() {
    PieceKind_initEntries();
    return PieceKind_blackPawn_instance;
  }
  function click$factory() {
    return getPropertyCallableRef('click', 1, KProperty1, function (receiver) {
      return receiver.get_click_ips9cv_k$();
    }, null);
  }
  //region block: post-declaration
  protoOf(KR).get___file_9v20kl_k$ = get___file;
  protoOf(KR).get_bBishop_f8odkp_k$ = get_bBishop;
  protoOf(KR).get_bKing_w09y75_k$ = get_bKing;
  protoOf(KR).get_bKnight_bcif_k$ = get_bKnight;
  protoOf(KR).get_bPawn_30k3ma_k$ = get_bPawn;
  protoOf(KR).get_bQueen_hl6gf2_k$ = get_bQueen;
  protoOf(KR).get_bRook_w2gs6b_k$ = get_bRook;
  protoOf(KR).get_korge_lc7wss_k$ = get_korge;
  protoOf(KR).get_squareBrownDark_7n0hft_k$ = get_squareBrownDark;
  protoOf(KR).get_squareBrownLight_oor9l5_k$ = get_squareBrownLight;
  protoOf(KR).get_squareGrayDark_126cs0_k$ = get_squareGrayDark;
  protoOf(KR).get_squareGrayLight_vwsl7i_k$ = get_squareGrayLight;
  protoOf(KR).get_wBishop_zgwfac_k$ = get_wBishop;
  protoOf(KR).get_wKing_bef762_k$ = get_wKing;
  protoOf(KR).get_wKnight_k7wp78_k$ = get_wKnight;
  protoOf(KR).get_wPawn_umz087_k$ = get_wPawn;
  protoOf(KR).get_wQueen_dnp18z_k$ = get_wQueen;
  protoOf(KR).get_wRook_bc8d6w_k$ = get_wRook;
  //endregion
  //region block: exports
  kotlin_com_soywiz_korge_korge_core.$jsExportAll$(_);
  //endregion
  main(get_EmptyContinuation());
  return _;
}));
