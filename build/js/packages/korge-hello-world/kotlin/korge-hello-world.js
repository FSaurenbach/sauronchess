(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './korge-root-korge.js', './korge-root-korge-foundation.js', './kotlin-kotlin-stdlib.js', './korge-root-korge-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./korge-root-korge.js'), require('./korge-root-korge-foundation.js'), require('./kotlin-kotlin-stdlib.js'), require('./korge-root-korge-core.js'));
  else {
    if (typeof this['korge-root-korge'] === 'undefined') {
      throw new Error("Error loading module 'korge-hello-world'. Its dependency 'korge-root-korge' was not found. Please, check whether 'korge-root-korge' is loaded prior to 'korge-hello-world'.");
    }
    if (typeof this['korge-root-korge-foundation'] === 'undefined') {
      throw new Error("Error loading module 'korge-hello-world'. Its dependency 'korge-root-korge-foundation' was not found. Please, check whether 'korge-root-korge-foundation' is loaded prior to 'korge-hello-world'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'korge-hello-world'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'korge-hello-world'.");
    }
    if (typeof this['korge-root-korge-core'] === 'undefined') {
      throw new Error("Error loading module 'korge-hello-world'. Its dependency 'korge-root-korge-core' was not found. Please, check whether 'korge-root-korge-core' is loaded prior to 'korge-hello-world'.");
    }
    root['korge-hello-world'] = factory(typeof this['korge-hello-world'] === 'undefined' ? {} : this['korge-hello-world'], this['korge-root-korge'], this['korge-root-korge-foundation'], this['kotlin-kotlin-stdlib'], this['korge-root-korge-core']);
  }
}(this, function (_, kotlin_com_soywiz_korge_korge, kotlin_com_soywiz_korge_korge_foundation, kotlin_kotlin, kotlin_com_soywiz_korge_korge_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Container = kotlin_com_soywiz_korge_korge.$_$.o;
  var Vector2D = kotlin_com_soywiz_korge_korge_foundation.$_$.s4;
  var Unit_instance = kotlin_kotlin.$_$.c3;
  var protoOf = kotlin_kotlin.$_$.s8;
  var classMeta = kotlin_kotlin.$_$.r7;
  var setMetadataFor = kotlin_kotlin.$_$.t8;
  var Size2D_init_$Create$ = kotlin_com_soywiz_korge_korge_foundation.$_$.t;
  var Colors_getInstance = kotlin_com_soywiz_korge_korge_core.$_$.r;
  var VOID = kotlin_kotlin.$_$.d;
  var Korge = kotlin_com_soywiz_korge_korge.$_$.b;
  var println = kotlin_kotlin.$_$.j7;
  var Pair = kotlin_kotlin.$_$.ub;
  var ensureNotNull = kotlin_kotlin.$_$.dc;
  var PixelatedScene = kotlin_com_soywiz_korge_korge.$_$.j;
  var get_isEven = kotlin_com_soywiz_korge_korge_foundation.$_$.n5;
  var onMouseDrag = kotlin_com_soywiz_korge_korge.$_$.h;
  var draggableCloseable = kotlin_com_soywiz_korge_korge.$_$.g;
  var BlurFilter = kotlin_com_soywiz_korge_korge.$_$.m;
  var set_filter = kotlin_com_soywiz_korge_korge.$_$.n;
  var FixedSizeContainer = kotlin_com_soywiz_korge_korge.$_$.p;
  var CoroutineImpl = kotlin_kotlin.$_$.g7;
  var THROW_CCE = kotlin_kotlin.$_$.wb;
  var Stage = kotlin_com_soywiz_korge_korge.$_$.q;
  var get_AlphaTransition = kotlin_com_soywiz_korge_korge.$_$.i;
  var Companion_getInstance = kotlin_com_soywiz_korge_korge_foundation.$_$.n2;
  var withEasing = kotlin_com_soywiz_korge_korge.$_$.l;
  var Companion_getInstance_0 = kotlin_com_soywiz_korge_korge_foundation.$_$.l2;
  var views = kotlin_com_soywiz_korge_korge.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.q6;
  var findFirstAscendant = kotlin_com_soywiz_korge_korge.$_$.t;
  var Size2D = kotlin_com_soywiz_korge_korge_foundation.$_$.q4;
  var SceneContainer = kotlin_com_soywiz_korge_korge.$_$.k;
  var addTo = kotlin_com_soywiz_korge_korge.$_$.s;
  var get_resourcesVfs = kotlin_com_soywiz_korge_korge_core.$_$.i2;
  var readBitmap = kotlin_com_soywiz_korge_korge_core.$_$.c;
  var DurationUnit_SECONDS_getInstance = kotlin_kotlin.$_$.h;
  var toDuration = kotlin_kotlin.$_$.kb;
  var getKClass = kotlin_kotlin.$_$.b;
  var Resources = kotlin_com_soywiz_korge_korge_core.$_$.v2;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var KClass = kotlin_kotlin.$_$.o9;
  var isInterface = kotlin_kotlin.$_$.j8;
  var Companion_getInstance_1 = kotlin_com_soywiz_korge_korge.$_$.e;
  var Level_INFO_getInstance = kotlin_com_soywiz_korge_korge_foundation.$_$.c;
  var fillArrayVal = kotlin_kotlin.$_$.v7;
  var Companion_instance = kotlin_com_soywiz_korge_korge.$_$.f;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var get_EmptyContinuation = kotlin_kotlin.$_$.t6;
  var Enum = kotlin_kotlin.$_$.pb;
  var numberToInt = kotlin_kotlin.$_$.o8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.mc;
  var View = kotlin_com_soywiz_korge_korge.$_$.r;
  var View_init_$Init$ = kotlin_com_soywiz_korge_korge.$_$.d;
  var Image_init_$Create$ = kotlin_com_soywiz_korge_korge.$_$.c;
  var size = kotlin_com_soywiz_korge_korge.$_$.u;
  var numberToDouble = kotlin_kotlin.$_$.n8;
  var xy = kotlin_com_soywiz_korge_korge.$_$.v;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Cell, 'Cell', classMeta, Container);
  setMetadataFor(GameScene, 'GameScene', classMeta, PixelatedScene, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(main$slambda, 'main$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(PieceKind, 'PieceKind', classMeta, Enum);
  setMetadataFor(Piece, 'Piece', classMeta, View);
  //endregion
  function Cell(color, cx, cy, cont) {
    Container.call(this);
    this.w8j_1 = cx;
    this.x8j_1 = cy;
    var cell = get_board()[this.w8j_1][this.x8j_1];
    cell.b7z(imul(this.x8j_1, 64));
    cell.c7z(imul(this.w8j_1, 64));
    this.y8j_1 = new Vector2D(cell.y42(), cell.z42());
    cell.m81(color);
    cont.d7c(cell);
  }
  function get_board() {
    _init_properties_Main_kt__xi25uv();
    return board;
  }
  var board;
  function get_cells() {
    _init_properties_Main_kt__xi25uv();
    return cells;
  }
  var cells;
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
  function set_whiteRook(_set____db54di) {
    _init_properties_Main_kt__xi25uv();
    whiteRook = _set____db54di;
  }
  function get_whiteRook() {
    _init_properties_Main_kt__xi25uv();
    return whiteRook;
  }
  var whiteRook;
  function set_blackRook(_set____db54di) {
    _init_properties_Main_kt__xi25uv();
    blackRook = _set____db54di;
  }
  function get_blackRook() {
    _init_properties_Main_kt__xi25uv();
    return blackRook;
  }
  var blackRook;
  var lastClicked;
  function get_pieces() {
    _init_properties_Main_kt__xi25uv();
    return pieces;
  }
  var pieces;
  function set_whiteTurn(_set____db54di) {
    _init_properties_Main_kt__xi25uv();
    whiteTurn = _set____db54di;
  }
  function get_whiteTurn() {
    _init_properties_Main_kt__xi25uv();
    return whiteTurn;
  }
  var whiteTurn;
  function get_markedCells() {
    _init_properties_Main_kt__xi25uv();
    return markedCells;
  }
  var markedCells;
  function main($completion) {
    var tmp = Size2D_init_$Create$(512, 512);
    var tmp_0 = Colors_getInstance().k2a('#2b2b2b');
    return Korge(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp_0, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, main$slambda_0(null), $completion);
  }
  function GameScene$sceneMain$lambda($newPosition) {
    return function ($this$onMouseDrag, it) {
      $newPosition._v = decodePosition($this$onMouseDrag.g6h());
      return Unit_instance;
    };
  }
  function GameScene$sceneMain$lambda_0($newPosition, $currentPos, $piss) {
    return function (info) {
      var tmp;
      if (info.r6c_1) {
        var tmp0_iterator = get_pieces().s();
        while (tmp0_iterator.t()) {
          var piece = tmp0_iterator.u();
          if (piece.c8m_1.equals(get_board()[ensureNotNull($newPosition._v).qe_1][ensureNotNull($newPosition._v).pe_1].l3m())) {
            println('' + piece.a8m_1);
            $currentPos._v = $newPosition._v;
            $piss._v = piece;
            var tmp1_iterator = get_cells().s();
            while (tmp1_iterator.t()) {
              var cell = tmp1_iterator.u();
              var clx = cell.w8j_1;
              var cly = cell.x8j_1;
              var clxy = new Pair(clx, cly);
              if (ensureNotNull($newPosition._v).equals(new Pair(clx, cly))) {
                println('Found Cell where piece is located: ' + clx + ', ' + cly);
              }
              if (ensureNotNull($piss._v).d8m(ensureNotNull($newPosition._v), clxy, false)) {
                println('Can move to: ' + clx + ', ' + cly);
                changeColor(cly, clx, false);
                get_markedCells().p(cell);
              }
            }
          }
        }
        tmp = Unit_instance;
      }
      var tmp_0;
      if (info.s6c_1 ? !($piss._v == null) : false) {
        println('pieceKind: ' + ensureNotNull($piss._v).a8m_1 + ' location: ' + decodePosition(ensureNotNull($piss._v).c8m_1));
        println('End \n \n \n \n \n');
        if (ensureNotNull($piss._v).d8m(ensureNotNull($currentPos._v), ensureNotNull($newPosition._v), true)) {
          ensureNotNull($piss._v).e8m(ensureNotNull($newPosition._v).pe_1, ensureNotNull($newPosition._v).qe_1);
        } else {
          ensureNotNull($piss._v).e8m(ensureNotNull($currentPos._v).pe_1, ensureNotNull($currentPos._v).qe_1);
        }
        var tmp2_iterator = get_markedCells().s();
        while (tmp2_iterator.t()) {
          var cell_0 = tmp2_iterator.u();
          changeColor(cell_0.x8j_1, cell_0.w8j_1, true);
        }
        get_markedCells().n2();
        $piss._v = null;
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GameScene(cont) {
    PixelatedScene.call(this, 512, 512);
    this.u8m_1 = cont;
  }
  protoOf(GameScene).c6x = function (_this__u8e3s4, $completion) {
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
              var cl = new Cell(Colors_getInstance().d20_1, cx, cy, this.u8m_1);
              get_cells().p(cl);
            } else {
              var cl_0 = new Cell(Colors_getInstance().e20_1, cx, cy, this.u8m_1);
              get_cells().p(cl_0);
            }
            d = d + 1 | 0;
          }
           while (inductionVariable_0 < 8);
        d = d + 1 | 0;
      }
       while (inductionVariable < 8);
    var pw1 = new Piece(PieceKind_WhitePawn_getInstance(), Colors_getInstance().d20_1, 0, 1, this.u8m_1);
    var pb1 = new Piece(PieceKind_BlackPawn_getInstance(), Colors_getInstance().e20_1, 0, 6, this.u8m_1);
    var pw2 = new Piece(PieceKind_WhitePawn_getInstance(), Colors_getInstance().d20_1, 1, 1, this.u8m_1);
    var pb2 = new Piece(PieceKind_BlackPawn_getInstance(), Colors_getInstance().e20_1, 1, 6, this.u8m_1);
    var pw3 = new Piece(PieceKind_WhitePawn_getInstance(), Colors_getInstance().d20_1, 2, 1, this.u8m_1);
    var pb3 = new Piece(PieceKind_BlackPawn_getInstance(), Colors_getInstance().e20_1, 2, 6, this.u8m_1);
    var pw4 = new Piece(PieceKind_WhitePawn_getInstance(), Colors_getInstance().d20_1, 3, 1, this.u8m_1);
    var pb4 = new Piece(PieceKind_BlackPawn_getInstance(), Colors_getInstance().e20_1, 3, 6, this.u8m_1);
    var pw5 = new Piece(PieceKind_WhitePawn_getInstance(), Colors_getInstance().d20_1, 4, 1, this.u8m_1);
    var pb5 = new Piece(PieceKind_BlackPawn_getInstance(), Colors_getInstance().e20_1, 4, 6, this.u8m_1);
    var pw6 = new Piece(PieceKind_WhitePawn_getInstance(), Colors_getInstance().d20_1, 5, 1, this.u8m_1);
    var pb6 = new Piece(PieceKind_BlackPawn_getInstance(), Colors_getInstance().e20_1, 5, 6, this.u8m_1);
    var pw7 = new Piece(PieceKind_WhitePawn_getInstance(), Colors_getInstance().d20_1, 6, 1, this.u8m_1);
    var pb7 = new Piece(PieceKind_BlackPawn_getInstance(), Colors_getInstance().e20_1, 6, 6, this.u8m_1);
    var pw8 = new Piece(PieceKind_WhitePawn_getInstance(), Colors_getInstance().d20_1, 7, 1, this.u8m_1);
    var pb8 = new Piece(PieceKind_BlackPawn_getInstance(), Colors_getInstance().e20_1, 7, 6, this.u8m_1);
    var rw1 = new Piece(PieceKind_WhiteRook_getInstance(), Colors_getInstance().d20_1, 5, 5, this.u8m_1);
    var rb1 = new Piece(PieceKind_BlackRook_getInstance(), Colors_getInstance().e20_1, 3, 3, this.u8m_1);
    get_pieces().p(pw1);
    get_pieces().p(pb1);
    get_pieces().p(pw2);
    get_pieces().p(pb2);
    get_pieces().p(pw3);
    get_pieces().p(pb3);
    get_pieces().p(pw4);
    get_pieces().p(pb4);
    get_pieces().p(pw5);
    get_pieces().p(pb5);
    get_pieces().p(pw6);
    get_pieces().p(pb6);
    get_pieces().p(pw7);
    get_pieces().p(pb7);
    get_pieces().p(pw8);
    get_pieces().p(pb8);
    get_pieces().p(rw1);
    get_pieces().p(rb1);
    var newPosition = {_v: null};
    var currentPos = {_v: null};
    var piss = {_v: null};
    var tmp = onMouseDrag(_this__u8e3s4, VOID, VOID, GameScene$sceneMain$lambda(newPosition));
    draggableCloseable(_this__u8e3s4, tmp, VOID, GameScene$sceneMain$lambda_0(newPosition, currentPos, piss));
    return Unit_instance;
  };
  function changeColor(cly, clx, back) {
    _init_properties_Main_kt__xi25uv();
    if (back) {
      var tmp0_iterator = get_cells().s();
      while (tmp0_iterator.t()) {
        var cell = tmp0_iterator.u();
        if (cell.w8j_1 === clx ? cell.x8j_1 === cly : false) {
          set_filter(get_board()[cly][clx], null);
        }
      }
    } else {
      set_filter(get_board()[cly][clx], new BlurFilter(20.0));
    }
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
  protoOf(main$slambda).x5m = function ($this$Korge, $completion) {
    var tmp = this.y5m($this$Korge, $completion);
    tmp.dc_1 = Unit_instance;
    tmp.ec_1 = null;
    return tmp.mc();
  };
  protoOf(main$slambda).jd = function (p1, $completion) {
    return this.x5m(p1 instanceof Stage ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$slambda).mc = function () {
    var suspendResult = this.dc_1;
    $sm: do
      try {
        var tmp = this.bc_1;
        switch (tmp) {
          case 0:
            this.cc_1 = 7;
            var tmp_0 = this;
            tmp_0.e8n_1 = this.d8n_1;
            var tmp_1 = this;
            tmp_1.f8n_1 = withEasing(get_AlphaTransition(), Companion_getInstance().j18());
            var tmp_2 = this;
            tmp_2.g8n_1 = 'sceneContainer';
            var tmp_3 = this;
            tmp_3.h8n_1 = Companion_getInstance_0().a1l_1;
            var tmp_4 = this;
            tmp_4.i8n_1 = this.e8n_1;
            this.bc_1 = 1;
            suspendResult = views(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j8n_1 = suspendResult;
            var tmp_5 = this;
            tmp_5.k8n_1 = this.f8n_1;
            var tmp_6 = this;
            tmp_6.l8n_1 = this.g8n_1;
            var tmp_7 = this;
            tmp_7.m8n_1 = this.h8n_1;
            this.n8n_1 = this.m8n_1;
            this.o8n_1 = this.n8n_1.re();
            this.p8n_1 = this.n8n_1.se();
            this.q8n_1 = this.o8n_1;
            this.r8n_1 = this.p8n_1;
            if (this.o8n_1 === 0.0 ? this.p8n_1 === 0.0 : false) {
              var tmp_8 = findFirstAscendant(this.i8n_1, main$slambda$lambda);
              var base = (tmp_8 == null ? true : tmp_8 instanceof FixedSizeContainer) ? tmp_8 : null;
              var tmp_9 = this;
              var tmp2_elvis_lhs = base == null ? null : base.ex();
              tmp_9.q8n_1 = tmp2_elvis_lhs == null ? this.j8n_1.i5s_1.ex() : tmp2_elvis_lhs;
              var tmp_10 = this;
              var tmp4_elvis_lhs = base == null ? null : base.fx();
              tmp_10.r8n_1 = tmp4_elvis_lhs == null ? this.j8n_1.i5s_1.fx() : tmp4_elvis_lhs;
            }

            var tmp_11 = this;
            var this_0 = new SceneContainer(this.j8n_1, this.k8n_1, this.l8n_1, new Size2D(this.q8n_1, this.r8n_1));
            var instance = this.i8n_1;
            tmp_11.s8n_1 = addTo(this_0, instance);
            this.bc_1 = 2;
            suspendResult = readBitmap(get_resourcesVfs().e15('w_pawn.png'), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.t8n_1 = suspendResult;
            set_whitePawn(this.t8n_1);
            this.bc_1 = 3;
            suspendResult = readBitmap(get_resourcesVfs().e15('b_pawn.png'), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.u8n_1 = suspendResult;
            set_blackPawn(this.u8n_1);
            this.bc_1 = 4;
            suspendResult = readBitmap(get_resourcesVfs().e15('w_rook.png'), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.v8n_1 = suspendResult;
            set_whiteRook(this.v8n_1);
            this.bc_1 = 5;
            suspendResult = readBitmap(get_resourcesVfs().e15('b_rook.png'), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.w8n_1 = suspendResult;
            set_blackRook(this.w8n_1);
            var tmp_12 = this;
            tmp_12.x8n_1 = this.s8n_1;
            var tmp_13 = this;
            tmp_13.y8n_1 = [];
            var tmp_14 = this;
            tmp_14.z8n_1 = toDuration(0, DurationUnit_SECONDS_getInstance());
            var tmp_15 = this;
            tmp_15.a8o_1 = this.x8n_1.a5y_1;
            var tmp_16 = this;
            tmp_16.b8o_1 = this.x8n_1;
            var tmp_17 = this;
            tmp_17.c8o_1 = getKClass(GameScene);
            var tmp_18 = this;
            tmp_18.d8o_1 = this.y8n_1.slice();
            var tmp_19 = this;
            tmp_19.e8o_1 = this.z8n_1;
            var tmp_20 = this;
            tmp_20.f8o_1 = this.a8o_1;
            var tmp_21 = this;
            tmp_21.g8o_1 = true;
            this.h8o_1 = this.b8o_1.z5x_1.x5q_1.w15().u15(getKClass(SceneContainer), this.b8o_1).u15(getKClass(Resources), new Resources(this.b8o_1.gj(), this.b8o_1.z5x_1.x66().m3c_1, this.b8o_1.z5x_1.x66()));
            var this_1 = this.d8o_1;
            var n = 0;
            while (n < this_1.length) {
              var tmp0 = n;
              n = tmp0 + 1 | 0;
              var inject = this_1[tmp0];
              var tmp_22 = getKClassFromExpression(inject);
              this.h8o_1.u15(isInterface(tmp_22, KClass) ? tmp_22 : THROW_CCE(), inject);
            }

            var tmp_23 = this;
            this.h8o_1;
            tmp_23.i8o_1 = new GameScene(this.s8n_1);
            var this_2 = Companion_getInstance_1().n6z_1;
            var level = Level_INFO_getInstance();
            if (this_2.w17(level)) {
              this_2.x17(level, 'Changing scene to... ' + this.c8o_1 + ' ... ' + this.i8o_1);
            }

            if (this.g8o_1) {
              this.i8o_1.f16(this.h8o_1);
              var tmp_24 = getKClassFromExpression(this.i8o_1);
              var tmp_25 = isInterface(tmp_24, KClass) ? tmp_24 : THROW_CCE();
              this.b8o_1.z5x_1.x5q_1.y15(tmp_25, main$slambda$lambda_0(this.h8o_1, this.s8n_1));
            }

            this.bc_1 = 6;
            suspendResult = this.b8o_1.l70(this.i8o_1, this.e8o_1, this.f8o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.ec_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.cc_1 === 7) {
          throw e;
        } else {
          this.bc_1 = this.cc_1;
          this.ec_1 = e;
        }
      }
     while (true);
  };
  protoOf(main$slambda).y5m = function ($this$Korge, completion) {
    var i = new main$slambda(completion);
    i.d8n_1 = $this$Korge;
    return i;
  };
  function main$slambda_0(resultContinuation) {
    var i = new main$slambda(resultContinuation);
    var l = function ($this$Korge, $completion) {
      return i.x5m($this$Korge, $completion);
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
          tmp_3[tmp_2] = Companion_instance.e7z(64, 64);
          tmp_2 = tmp_2 + 1 | 0;
        }
        tmp_0[tmp_1] = tmp_3;
        tmp = tmp + 1 | 0;
      }
      board = tmp_0;
      cells = ArrayList_init_$Create$();
      whitePawn = null;
      blackPawn = null;
      whiteRook = null;
      blackRook = null;
      lastClicked = null;
      pieces = ArrayList_init_$Create$();
      whiteTurn = true;
      markedCells = ArrayList_init_$Create$();
    }
  }
  var PieceKind_WhitePawn_instance;
  var PieceKind_BlackPawn_instance;
  var PieceKind_WhiteRook_instance;
  var PieceKind_BlackRook_instance;
  var PieceKind_entriesInitialized;
  function PieceKind_initEntries() {
    if (PieceKind_entriesInitialized)
      return Unit_instance;
    PieceKind_entriesInitialized = true;
    PieceKind_WhitePawn_instance = new PieceKind('WhitePawn', 0);
    PieceKind_BlackPawn_instance = new PieceKind('BlackPawn', 1);
    PieceKind_WhiteRook_instance = new PieceKind('WhiteRook', 2);
    PieceKind_BlackRook_instance = new PieceKind('BlackRook', 3);
  }
  function PieceKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function decodePosition(cxy) {
    var x = cxy.f18_1 / 64;
    var y = cxy.g18_1 / 64;
    return new Pair(numberToInt(x), numberToInt(y));
  }
  function _get_piece__cu3qzh($this) {
    var tmp = $this.b8m_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('piece');
    }
  }
  function Piece(kind, color, cx, cy, cont) {
    View_init_$Init$(this);
    this.z8l_1 = color;
    this.a8m_1 = kind;
    this.c8m_1 = get_board()[cx][cy].l3m();
    if (this.z8l_1 === Colors_getInstance().d20_1) {
      if (kind.equals(PieceKind_WhitePawn_getInstance())) {
        this.b8m_1 = Image_init_$Create$(ensureNotNull(get_whitePawn()));
        size(_get_piece__cu3qzh(this), Size2D_init_$Create$(64, 64));
        addTo(_get_piece__cu3qzh(this), cont);
        this.e8m(cx, cy);
      }
      if (kind.equals(PieceKind_WhiteRook_getInstance())) {
        this.b8m_1 = Image_init_$Create$(ensureNotNull(get_whiteRook()));
        size(_get_piece__cu3qzh(this), Size2D_init_$Create$(64, 64));
        addTo(_get_piece__cu3qzh(this), cont);
        this.e8m(cx, cy);
      }
    }
    if (this.z8l_1 === Colors_getInstance().e20_1) {
      if (kind.equals(PieceKind_BlackPawn_getInstance())) {
        this.b8m_1 = Image_init_$Create$(ensureNotNull(get_blackPawn()));
        size(_get_piece__cu3qzh(this), Size2D_init_$Create$(64, 64));
        addTo(_get_piece__cu3qzh(this), cont);
        this.e8m(cx, cy);
      }
      if (kind.equals(PieceKind_BlackRook_getInstance())) {
        this.b8m_1 = Image_init_$Create$(ensureNotNull(get_blackRook()));
        size(_get_piece__cu3qzh(this), Size2D_init_$Create$(64, 64));
        addTo(_get_piece__cu3qzh(this), cont);
        this.e8m(cx, cy);
      }
    }
  }
  protoOf(Piece).e8m = function (cx, cy) {
    // Inline function 'korlibs.korge.view.position' call
    var this_0 = _get_piece__cu3qzh(this);
    var x = imul(cx, 64);
    var y = imul(cy, 64);
    xy(this_0, numberToDouble(x), numberToDouble(y));
    this.c8m_1 = get_board()[cy][cx].l3m();
  };
  protoOf(Piece).d8m = function (oldPos, newPos, withCheck) {
    var kind = this.a8m_1;
    // Inline function 'kotlin.collections.find' call
    var this_0 = get_pieces();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.s();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.u();
        // Inline function 'Piece.moveChecker.<anonymous>' call
        if (element.c8m_1.equals(get_board()[newPos.qe_1][newPos.pe_1].l3m())) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var pieceOnNewPos = tmp$ret$1;
    if (get_whiteTurn()) {
      switch (kind.q9_1) {
        case 0:
          if (((newPos.qe_1 - oldPos.qe_1 | 0) === 1 ? oldPos.pe_1 === newPos.pe_1 : false) ? true : (oldPos.qe_1 === 1 ? newPos.qe_1 === 3 : false) ? oldPos.pe_1 === newPos.pe_1 : false) {
            if (pieceOnNewPos == null) {
              if (withCheck) {
                set_whiteTurn(false);
              }
              return true;
            }
          } else if ((newPos.qe_1 - oldPos.qe_1 | 0) === 1 ? (newPos.pe_1 - oldPos.pe_1 | 0) === 1 ? true : (newPos.pe_1 - oldPos.pe_1 | 0) === -1 : false) {
            println('Destiny: ' + pieceOnNewPos);
            if (!(pieceOnNewPos == null) ? pieceOnNewPos.a8m_1.equals(PieceKind_BlackPawn_getInstance()) : false) {
              if (withCheck) {
                get_pieces().m2(pieceOnNewPos);
                _get_piece__cu3qzh(pieceOnNewPos).l7e();
                set_whiteTurn(false);
              }
              return true;
            }
          }

          break;
        case 2:
          if (!(oldPos.pe_1 === newPos.pe_1) ? !(oldPos.qe_1 === newPos.qe_1) : false) {
            return false;
          }

          // Inline function 'kotlin.comparisons.minOf' call

          var a = oldPos.pe_1;
          var b = newPos.pe_1;
          var minRow = Math.min(a, b);
          // Inline function 'kotlin.comparisons.maxOf' call

          var a_0 = oldPos.pe_1;
          var b_0 = newPos.pe_1;
          var maxRow = Math.max(a_0, b_0);
          // Inline function 'kotlin.comparisons.minOf' call

          var a_1 = oldPos.qe_1;
          var b_1 = newPos.qe_1;
          var minCol = Math.min(a_1, b_1);
          // Inline function 'kotlin.comparisons.maxOf' call

          var a_2 = oldPos.qe_1;
          var b_2 = newPos.qe_1;
          var maxCol = Math.max(a_2, b_2);
          var tmp1_iterator = get_pieces().s();
          $l$loop_0: while (tmp1_iterator.t()) {
            var piece = tmp1_iterator.u();
            var row = decodePosition(piece.c8m_1).pe_1;
            var col = decodePosition(piece.c8m_1).qe_1;
            if (row === oldPos.pe_1 ? col === oldPos.qe_1 : false)
              continue $l$loop_0;
            if (row === newPos.pe_1 ? col === newPos.qe_1 : false)
              continue $l$loop_0;
            if (((row === oldPos.pe_1 ? true : col === oldPos.qe_1) ? minRow <= row ? row <= maxRow : false : false) ? minCol <= col ? col <= maxCol : false : false) {
              return false;
            }
          }

          if ((withCheck ? !(pieceOnNewPos == null) : false) ? pieceOnNewPos.z8l_1 === Colors_getInstance().e20_1 : false) {
            set_whiteTurn(false);
            get_pieces().m2(pieceOnNewPos);
            _get_piece__cu3qzh(pieceOnNewPos).l7e();
            return true;
          }

          if (pieceOnNewPos == null) {
            return true;
          }

          break;
        default:
          return false;
      }
    }
    if (!get_whiteTurn()) {
      switch (kind.q9_1) {
        case 1:
          if (((newPos.qe_1 - oldPos.qe_1 | 0) === -1 ? oldPos.pe_1 === newPos.pe_1 : false) ? true : (oldPos.qe_1 === 6 ? newPos.qe_1 === 4 : false) ? oldPos.pe_1 === newPos.pe_1 : false) {
            if (pieceOnNewPos == null) {
              if (withCheck) {
                set_whiteTurn(true);
              }
              return true;
            }
          } else if ((newPos.qe_1 - oldPos.qe_1 | 0) === -1 ? (newPos.pe_1 - oldPos.pe_1 | 0) === 1 ? true : (newPos.pe_1 - oldPos.pe_1 | 0) === -1 : false) {
            if (!(pieceOnNewPos == null) ? pieceOnNewPos.a8m_1.equals(PieceKind_WhitePawn_getInstance()) : false) {
              if (withCheck) {
                set_whiteTurn(true);
                get_pieces().m2(pieceOnNewPos);
                _get_piece__cu3qzh(pieceOnNewPos).l7e();
              }
              return true;
            }
          }

          break;
        case 3:
          if (!(oldPos.pe_1 === newPos.pe_1) ? !(oldPos.qe_1 === newPos.qe_1) : false) {
            return false;
          }

          // Inline function 'kotlin.comparisons.minOf' call

          var a_3 = oldPos.pe_1;
          var b_3 = newPos.pe_1;
          var minRow_0 = Math.min(a_3, b_3);
          // Inline function 'kotlin.comparisons.maxOf' call

          var a_4 = oldPos.pe_1;
          var b_4 = newPos.pe_1;
          var maxRow_0 = Math.max(a_4, b_4);
          // Inline function 'kotlin.comparisons.minOf' call

          var a_5 = oldPos.qe_1;
          var b_5 = newPos.qe_1;
          var minCol_0 = Math.min(a_5, b_5);
          // Inline function 'kotlin.comparisons.maxOf' call

          var a_6 = oldPos.qe_1;
          var b_6 = newPos.qe_1;
          var maxCol_0 = Math.max(a_6, b_6);
          var tmp3_iterator = get_pieces().s();
          $l$loop_2: while (tmp3_iterator.t()) {
            var piece_0 = tmp3_iterator.u();
            var row_0 = decodePosition(piece_0.c8m_1).pe_1;
            var col_0 = decodePosition(piece_0.c8m_1).qe_1;
            if (row_0 === oldPos.pe_1 ? col_0 === oldPos.qe_1 : false)
              continue $l$loop_2;
            if (row_0 === newPos.pe_1 ? col_0 === newPos.qe_1 : false)
              continue $l$loop_2;
            if (((row_0 === oldPos.pe_1 ? true : col_0 === oldPos.qe_1) ? minRow_0 <= row_0 ? row_0 <= maxRow_0 : false : false) ? minCol_0 <= col_0 ? col_0 <= maxCol_0 : false : false) {
              return false;
            }
          }

          if ((withCheck ? !(pieceOnNewPos == null) : false) ? pieceOnNewPos.z8l_1 === Colors_getInstance().d20_1 : false) {
            set_whiteTurn(true);
            get_pieces().m2(pieceOnNewPos);
            _get_piece__cu3qzh(pieceOnNewPos).l7e();
            return true;
          }

          if (pieceOnNewPos == null) {
            return true;
          }

          break;
        default:
          return false;
      }
    }
    return false;
  };
  protoOf(Piece).b79 = function (ctx) {
  };
  function PieceKind_WhitePawn_getInstance() {
    PieceKind_initEntries();
    return PieceKind_WhitePawn_instance;
  }
  function PieceKind_BlackPawn_getInstance() {
    PieceKind_initEntries();
    return PieceKind_BlackPawn_instance;
  }
  function PieceKind_WhiteRook_getInstance() {
    PieceKind_initEntries();
    return PieceKind_WhiteRook_instance;
  }
  function PieceKind_BlackRook_getInstance() {
    PieceKind_initEntries();
    return PieceKind_BlackRook_instance;
  }
  //region block: exports
  kotlin_com_soywiz_korge_korge_core.$jsExportAll$(_);
  //endregion
  main(get_EmptyContinuation());
  return _;
}));
