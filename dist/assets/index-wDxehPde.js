function Dp(i, s) {
	for (var a = 0; a < s.length; a++) {
		const l = s[a];
		if (typeof l != "string" && !Array.isArray(l)) {
			for (const c in l)
				if (c !== "default" && !(c in i)) {
					const u = Object.getOwnPropertyDescriptor(l, c);
					u &&
						Object.defineProperty(
							i,
							c,
							u.get ? u : { enumerable: !0, get: () => l[c] },
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
	);
}
(function () {
	const s = document.createElement("link").relList;
	if (s && s.supports && s.supports("modulepreload")) return;
	for (const c of document.querySelectorAll('link[rel="modulepreload"]')) l(c);
	new MutationObserver((c) => {
		for (const u of c)
			if (u.type === "childList")
				for (const h of u.addedNodes)
					h.tagName === "LINK" && h.rel === "modulepreload" && l(h);
	}).observe(document, { childList: !0, subtree: !0 });
	function a(c) {
		const u = {};
		return (
			c.integrity && (u.integrity = c.integrity),
			c.referrerPolicy && (u.referrerPolicy = c.referrerPolicy),
			c.crossOrigin === "use-credentials"
				? (u.credentials = "include")
				: c.crossOrigin === "anonymous"
				? (u.credentials = "omit")
				: (u.credentials = "same-origin"),
			u
		);
	}
	function l(c) {
		if (c.ep) return;
		c.ep = !0;
		const u = a(c);
		fetch(c.href, u);
	}
})();
function Xh(i) {
	return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
		? i.default
		: i;
}
function Up(i) {
	if (Object.prototype.hasOwnProperty.call(i, "__esModule")) return i;
	var s = i.default;
	if (typeof s == "function") {
		var a = function l() {
			var c = !1;
			try {
				c = this instanceof l;
			} catch {}
			return c
				? Reflect.construct(s, arguments, this.constructor)
				: s.apply(this, arguments);
		};
		a.prototype = s.prototype;
	} else a = {};
	return (
		Object.defineProperty(a, "__esModule", { value: !0 }),
		Object.keys(i).forEach(function (l) {
			var c = Object.getOwnPropertyDescriptor(i, l);
			Object.defineProperty(
				a,
				l,
				c.get
					? c
					: {
							enumerable: !0,
							get: function () {
								return i[l];
							},
					  },
			);
		}),
		a
	);
}
var bo = { exports: {} },
	Dn = {},
	jo = { exports: {} },
	_e = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zd;
function Fp() {
	if (Zd) return _e;
	Zd = 1;
	var i = Symbol.for("react.element"),
		s = Symbol.for("react.portal"),
		a = Symbol.for("react.fragment"),
		l = Symbol.for("react.strict_mode"),
		c = Symbol.for("react.profiler"),
		u = Symbol.for("react.provider"),
		h = Symbol.for("react.context"),
		f = Symbol.for("react.forward_ref"),
		p = Symbol.for("react.suspense"),
		y = Symbol.for("react.memo"),
		g = Symbol.for("react.lazy"),
		v = Symbol.iterator;
	function w(_) {
		return _ === null || typeof _ != "object"
			? null
			: ((_ = (v && _[v]) || _["@@iterator"]),
			  typeof _ == "function" ? _ : null);
	}
	var T = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		D = Object.assign,
		U = {};
	function A(_, k, q) {
		(this.props = _),
			(this.context = k),
			(this.refs = U),
			(this.updater = q || T);
	}
	(A.prototype.isReactComponent = {}),
		(A.prototype.setState = function (_, k) {
			if (typeof _ != "object" && typeof _ != "function" && _ != null)
				throw Error(
					"setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
				);
			this.updater.enqueueSetState(this, _, k, "setState");
		}),
		(A.prototype.forceUpdate = function (_) {
			this.updater.enqueueForceUpdate(this, _, "forceUpdate");
		});
	function z() {}
	z.prototype = A.prototype;
	function ee(_, k, q) {
		(this.props = _),
			(this.context = k),
			(this.refs = U),
			(this.updater = q || T);
	}
	var N = (ee.prototype = new z());
	(N.constructor = ee), D(N, A.prototype), (N.isPureReactComponent = !0);
	var G = Array.isArray,
		X = Object.prototype.hasOwnProperty,
		ne = { current: null },
		le = { key: !0, ref: !0, __self: !0, __source: !0 };
	function ie(_, k, q) {
		var R,
			$ = {},
			C = null,
			F = null;
		if (k != null)
			for (R in (k.ref !== void 0 && (F = k.ref),
			k.key !== void 0 && (C = "" + k.key),
			k))
				X.call(k, R) && !le.hasOwnProperty(R) && ($[R] = k[R]);
		var Q = arguments.length - 2;
		if (Q === 1) $.children = q;
		else if (1 < Q) {
			for (var se = Array(Q), be = 0; be < Q; be++) se[be] = arguments[be + 2];
			$.children = se;
		}
		if (_ && _.defaultProps)
			for (R in ((Q = _.defaultProps), Q)) $[R] === void 0 && ($[R] = Q[R]);
		return {
			$$typeof: i,
			type: _,
			key: C,
			ref: F,
			props: $,
			_owner: ne.current,
		};
	}
	function Y(_, k) {
		return {
			$$typeof: i,
			type: _.type,
			key: k,
			ref: _.ref,
			props: _.props,
			_owner: _._owner,
		};
	}
	function J(_) {
		return typeof _ == "object" && _ !== null && _.$$typeof === i;
	}
	function Ee(_) {
		var k = { "=": "=0", ":": "=2" };
		return (
			"$" +
			_.replace(/[=:]/g, function (q) {
				return k[q];
			})
		);
	}
	var Se = /\/+/g;
	function Pe(_, k) {
		return typeof _ == "object" && _ !== null && _.key != null
			? Ee("" + _.key)
			: k.toString(36);
	}
	function I(_, k, q, R, $) {
		var C = typeof _;
		(C === "undefined" || C === "boolean") && (_ = null);
		var F = !1;
		if (_ === null) F = !0;
		else
			switch (C) {
				case "string":
				case "number":
					F = !0;
					break;
				case "object":
					switch (_.$$typeof) {
						case i:
						case s:
							F = !0;
					}
			}
		if (F)
			return (
				(F = _),
				($ = $(F)),
				(_ = R === "" ? "." + Pe(F, 0) : R),
				G($)
					? ((q = ""),
					  _ != null && (q = _.replace(Se, "$&/") + "/"),
					  I($, k, q, "", function (be) {
							return be;
					  }))
					: $ != null &&
					  (J($) &&
							($ = Y(
								$,
								q +
									(!$.key || (F && F.key === $.key)
										? ""
										: ("" + $.key).replace(Se, "$&/") + "/") +
									_,
							)),
					  k.push($)),
				1
			);
		if (((F = 0), (R = R === "" ? "." : R + ":"), G(_)))
			for (var Q = 0; Q < _.length; Q++) {
				C = _[Q];
				var se = R + Pe(C, Q);
				F += I(C, k, q, se, $);
			}
		else if (((se = w(_)), typeof se == "function"))
			for (_ = se.call(_), Q = 0; !(C = _.next()).done; )
				(C = C.value), (se = R + Pe(C, Q++)), (F += I(C, k, q, se, $));
		else if (C === "object")
			throw (
				((k = String(_)),
				Error(
					"Objects are not valid as a React child (found: " +
						(k === "[object Object]"
							? "object with keys {" + Object.keys(_).join(", ") + "}"
							: k) +
						"). If you meant to render a collection of children, use an array instead.",
				))
			);
		return F;
	}
	function ve(_, k, q) {
		if (_ == null) return _;
		var R = [],
			$ = 0;
		return (
			I(_, R, "", "", function (C) {
				return k.call(q, C, $++);
			}),
			R
		);
	}
	function re(_) {
		if (_._status === -1) {
			var k = _._result;
			(k = k()),
				k.then(
					function (q) {
						(_._status === 0 || _._status === -1) &&
							((_._status = 1), (_._result = q));
					},
					function (q) {
						(_._status === 0 || _._status === -1) &&
							((_._status = 2), (_._result = q));
					},
				),
				_._status === -1 && ((_._status = 0), (_._result = k));
		}
		if (_._status === 1) return _._result.default;
		throw _._result;
	}
	var xe = { current: null },
		j = { transition: null },
		V = {
			ReactCurrentDispatcher: xe,
			ReactCurrentBatchConfig: j,
			ReactCurrentOwner: ne,
		};
	function B() {
		throw Error("act(...) is not supported in production builds of React.");
	}
	return (
		(_e.Children = {
			map: ve,
			forEach: function (_, k, q) {
				ve(
					_,
					function () {
						k.apply(this, arguments);
					},
					q,
				);
			},
			count: function (_) {
				var k = 0;
				return (
					ve(_, function () {
						k++;
					}),
					k
				);
			},
			toArray: function (_) {
				return (
					ve(_, function (k) {
						return k;
					}) || []
				);
			},
			only: function (_) {
				if (!J(_))
					throw Error(
						"React.Children.only expected to receive a single React element child.",
					);
				return _;
			},
		}),
		(_e.Component = A),
		(_e.Fragment = a),
		(_e.Profiler = c),
		(_e.PureComponent = ee),
		(_e.StrictMode = l),
		(_e.Suspense = p),
		(_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V),
		(_e.act = B),
		(_e.cloneElement = function (_, k, q) {
			if (_ == null)
				throw Error(
					"React.cloneElement(...): The argument must be a React element, but you passed " +
						_ +
						".",
				);
			var R = D({}, _.props),
				$ = _.key,
				C = _.ref,
				F = _._owner;
			if (k != null) {
				if (
					(k.ref !== void 0 && ((C = k.ref), (F = ne.current)),
					k.key !== void 0 && ($ = "" + k.key),
					_.type && _.type.defaultProps)
				)
					var Q = _.type.defaultProps;
				for (se in k)
					X.call(k, se) &&
						!le.hasOwnProperty(se) &&
						(R[se] = k[se] === void 0 && Q !== void 0 ? Q[se] : k[se]);
			}
			var se = arguments.length - 2;
			if (se === 1) R.children = q;
			else if (1 < se) {
				Q = Array(se);
				for (var be = 0; be < se; be++) Q[be] = arguments[be + 2];
				R.children = Q;
			}
			return { $$typeof: i, type: _.type, key: $, ref: C, props: R, _owner: F };
		}),
		(_e.createContext = function (_) {
			return (
				(_ = {
					$$typeof: h,
					_currentValue: _,
					_currentValue2: _,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
					_defaultValue: null,
					_globalName: null,
				}),
				(_.Provider = { $$typeof: u, _context: _ }),
				(_.Consumer = _)
			);
		}),
		(_e.createElement = ie),
		(_e.createFactory = function (_) {
			var k = ie.bind(null, _);
			return (k.type = _), k;
		}),
		(_e.createRef = function () {
			return { current: null };
		}),
		(_e.forwardRef = function (_) {
			return { $$typeof: f, render: _ };
		}),
		(_e.isValidElement = J),
		(_e.lazy = function (_) {
			return { $$typeof: g, _payload: { _status: -1, _result: _ }, _init: re };
		}),
		(_e.memo = function (_, k) {
			return { $$typeof: y, type: _, compare: k === void 0 ? null : k };
		}),
		(_e.startTransition = function (_) {
			var k = j.transition;
			j.transition = {};
			try {
				_();
			} finally {
				j.transition = k;
			}
		}),
		(_e.unstable_act = B),
		(_e.useCallback = function (_, k) {
			return xe.current.useCallback(_, k);
		}),
		(_e.useContext = function (_) {
			return xe.current.useContext(_);
		}),
		(_e.useDebugValue = function () {}),
		(_e.useDeferredValue = function (_) {
			return xe.current.useDeferredValue(_);
		}),
		(_e.useEffect = function (_, k) {
			return xe.current.useEffect(_, k);
		}),
		(_e.useId = function () {
			return xe.current.useId();
		}),
		(_e.useImperativeHandle = function (_, k, q) {
			return xe.current.useImperativeHandle(_, k, q);
		}),
		(_e.useInsertionEffect = function (_, k) {
			return xe.current.useInsertionEffect(_, k);
		}),
		(_e.useLayoutEffect = function (_, k) {
			return xe.current.useLayoutEffect(_, k);
		}),
		(_e.useMemo = function (_, k) {
			return xe.current.useMemo(_, k);
		}),
		(_e.useReducer = function (_, k, q) {
			return xe.current.useReducer(_, k, q);
		}),
		(_e.useRef = function (_) {
			return xe.current.useRef(_);
		}),
		(_e.useState = function (_) {
			return xe.current.useState(_);
		}),
		(_e.useSyncExternalStore = function (_, k, q) {
			return xe.current.useSyncExternalStore(_, k, q);
		}),
		(_e.useTransition = function () {
			return xe.current.useTransition();
		}),
		(_e.version = "18.3.1"),
		_e
	);
}
var eh;
function ec() {
	return eh || ((eh = 1), (jo.exports = Fp())), jo.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var th;
function Bp() {
	if (th) return Dn;
	th = 1;
	var i = ec(),
		s = Symbol.for("react.element"),
		a = Symbol.for("react.fragment"),
		l = Object.prototype.hasOwnProperty,
		c = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
		u = { key: !0, ref: !0, __self: !0, __source: !0 };
	function h(f, p, y) {
		var g,
			v = {},
			w = null,
			T = null;
		y !== void 0 && (w = "" + y),
			p.key !== void 0 && (w = "" + p.key),
			p.ref !== void 0 && (T = p.ref);
		for (g in p) l.call(p, g) && !u.hasOwnProperty(g) && (v[g] = p[g]);
		if (f && f.defaultProps)
			for (g in ((p = f.defaultProps), p)) v[g] === void 0 && (v[g] = p[g]);
		return {
			$$typeof: s,
			type: f,
			key: w,
			ref: T,
			props: v,
			_owner: c.current,
		};
	}
	return (Dn.Fragment = a), (Dn.jsx = h), (Dn.jsxs = h), Dn;
}
var rh;
function $p() {
	return rh || ((rh = 1), (bo.exports = Bp())), bo.exports;
}
var e = $p(),
	S = ec();
const Vp = Xh(S),
	Wp = Dp({ __proto__: null, default: Vp }, [S]);
var ci = {},
	wo = { exports: {} },
	xt = {},
	No = { exports: {} },
	ko = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sh;
function qp() {
	return (
		sh ||
			((sh = 1),
			(function (i) {
				function s(j, V) {
					var B = j.length;
					j.push(V);
					e: for (; 0 < B; ) {
						var _ = (B - 1) >>> 1,
							k = j[_];
						if (0 < c(k, V)) (j[_] = V), (j[B] = k), (B = _);
						else break e;
					}
				}
				function a(j) {
					return j.length === 0 ? null : j[0];
				}
				function l(j) {
					if (j.length === 0) return null;
					var V = j[0],
						B = j.pop();
					if (B !== V) {
						j[0] = B;
						e: for (var _ = 0, k = j.length, q = k >>> 1; _ < q; ) {
							var R = 2 * (_ + 1) - 1,
								$ = j[R],
								C = R + 1,
								F = j[C];
							if (0 > c($, B))
								C < k && 0 > c(F, $)
									? ((j[_] = F), (j[C] = B), (_ = C))
									: ((j[_] = $), (j[R] = B), (_ = R));
							else if (C < k && 0 > c(F, B)) (j[_] = F), (j[C] = B), (_ = C);
							else break e;
						}
					}
					return V;
				}
				function c(j, V) {
					var B = j.sortIndex - V.sortIndex;
					return B !== 0 ? B : j.id - V.id;
				}
				if (
					typeof performance == "object" &&
					typeof performance.now == "function"
				) {
					var u = performance;
					i.unstable_now = function () {
						return u.now();
					};
				} else {
					var h = Date,
						f = h.now();
					i.unstable_now = function () {
						return h.now() - f;
					};
				}
				var p = [],
					y = [],
					g = 1,
					v = null,
					w = 3,
					T = !1,
					D = !1,
					U = !1,
					A = typeof setTimeout == "function" ? setTimeout : null,
					z = typeof clearTimeout == "function" ? clearTimeout : null,
					ee = typeof setImmediate < "u" ? setImmediate : null;
				typeof navigator < "u" &&
					navigator.scheduling !== void 0 &&
					navigator.scheduling.isInputPending !== void 0 &&
					navigator.scheduling.isInputPending.bind(navigator.scheduling);
				function N(j) {
					for (var V = a(y); V !== null; ) {
						if (V.callback === null) l(y);
						else if (V.startTime <= j)
							l(y), (V.sortIndex = V.expirationTime), s(p, V);
						else break;
						V = a(y);
					}
				}
				function G(j) {
					if (((U = !1), N(j), !D))
						if (a(p) !== null) (D = !0), re(X);
						else {
							var V = a(y);
							V !== null && xe(G, V.startTime - j);
						}
				}
				function X(j, V) {
					(D = !1), U && ((U = !1), z(ie), (ie = -1)), (T = !0);
					var B = w;
					try {
						for (
							N(V), v = a(p);
							v !== null && (!(v.expirationTime > V) || (j && !Ee()));

						) {
							var _ = v.callback;
							if (typeof _ == "function") {
								(v.callback = null), (w = v.priorityLevel);
								var k = _(v.expirationTime <= V);
								(V = i.unstable_now()),
									typeof k == "function"
										? (v.callback = k)
										: v === a(p) && l(p),
									N(V);
							} else l(p);
							v = a(p);
						}
						if (v !== null) var q = !0;
						else {
							var R = a(y);
							R !== null && xe(G, R.startTime - V), (q = !1);
						}
						return q;
					} finally {
						(v = null), (w = B), (T = !1);
					}
				}
				var ne = !1,
					le = null,
					ie = -1,
					Y = 5,
					J = -1;
				function Ee() {
					return !(i.unstable_now() - J < Y);
				}
				function Se() {
					if (le !== null) {
						var j = i.unstable_now();
						J = j;
						var V = !0;
						try {
							V = le(!0, j);
						} finally {
							V ? Pe() : ((ne = !1), (le = null));
						}
					} else ne = !1;
				}
				var Pe;
				if (typeof ee == "function")
					Pe = function () {
						ee(Se);
					};
				else if (typeof MessageChannel < "u") {
					var I = new MessageChannel(),
						ve = I.port2;
					(I.port1.onmessage = Se),
						(Pe = function () {
							ve.postMessage(null);
						});
				} else
					Pe = function () {
						A(Se, 0);
					};
				function re(j) {
					(le = j), ne || ((ne = !0), Pe());
				}
				function xe(j, V) {
					ie = A(function () {
						j(i.unstable_now());
					}, V);
				}
				(i.unstable_IdlePriority = 5),
					(i.unstable_ImmediatePriority = 1),
					(i.unstable_LowPriority = 4),
					(i.unstable_NormalPriority = 3),
					(i.unstable_Profiling = null),
					(i.unstable_UserBlockingPriority = 2),
					(i.unstable_cancelCallback = function (j) {
						j.callback = null;
					}),
					(i.unstable_continueExecution = function () {
						D || T || ((D = !0), re(X));
					}),
					(i.unstable_forceFrameRate = function (j) {
						0 > j || 125 < j
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
							  )
							: (Y = 0 < j ? Math.floor(1e3 / j) : 5);
					}),
					(i.unstable_getCurrentPriorityLevel = function () {
						return w;
					}),
					(i.unstable_getFirstCallbackNode = function () {
						return a(p);
					}),
					(i.unstable_next = function (j) {
						switch (w) {
							case 1:
							case 2:
							case 3:
								var V = 3;
								break;
							default:
								V = w;
						}
						var B = w;
						w = V;
						try {
							return j();
						} finally {
							w = B;
						}
					}),
					(i.unstable_pauseExecution = function () {}),
					(i.unstable_requestPaint = function () {}),
					(i.unstable_runWithPriority = function (j, V) {
						switch (j) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								j = 3;
						}
						var B = w;
						w = j;
						try {
							return V();
						} finally {
							w = B;
						}
					}),
					(i.unstable_scheduleCallback = function (j, V, B) {
						var _ = i.unstable_now();
						switch (
							(typeof B == "object" && B !== null
								? ((B = B.delay),
								  (B = typeof B == "number" && 0 < B ? _ + B : _))
								: (B = _),
							j)
						) {
							case 1:
								var k = -1;
								break;
							case 2:
								k = 250;
								break;
							case 5:
								k = 1073741823;
								break;
							case 4:
								k = 1e4;
								break;
							default:
								k = 5e3;
						}
						return (
							(k = B + k),
							(j = {
								id: g++,
								callback: V,
								priorityLevel: j,
								startTime: B,
								expirationTime: k,
								sortIndex: -1,
							}),
							B > _
								? ((j.sortIndex = B),
								  s(y, j),
								  a(p) === null &&
										j === a(y) &&
										(U ? (z(ie), (ie = -1)) : (U = !0), xe(G, B - _)))
								: ((j.sortIndex = k), s(p, j), D || T || ((D = !0), re(X))),
							j
						);
					}),
					(i.unstable_shouldYield = Ee),
					(i.unstable_wrapCallback = function (j) {
						var V = w;
						return function () {
							var B = w;
							w = V;
							try {
								return j.apply(this, arguments);
							} finally {
								w = B;
							}
						};
					});
			})(ko)),
		ko
	);
}
var nh;
function Hp() {
	return nh || ((nh = 1), (No.exports = qp())), No.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ah;
function Gp() {
	if (ah) return xt;
	ah = 1;
	var i = ec(),
		s = Hp();
	function a(t) {
		for (
			var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t,
				n = 1;
			n < arguments.length;
			n++
		)
			r += "&args[]=" + encodeURIComponent(arguments[n]);
		return (
			"Minified React error #" +
			t +
			"; visit " +
			r +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	var l = new Set(),
		c = {};
	function u(t, r) {
		h(t, r), h(t + "Capture", r);
	}
	function h(t, r) {
		for (c[t] = r, t = 0; t < r.length; t++) l.add(r[t]);
	}
	var f = !(
			typeof window > "u" ||
			typeof window.document > "u" ||
			typeof window.document.createElement > "u"
		),
		p = Object.prototype.hasOwnProperty,
		y =
			/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
		g = {},
		v = {};
	function w(t) {
		return p.call(v, t)
			? !0
			: p.call(g, t)
			? !1
			: y.test(t)
			? (v[t] = !0)
			: ((g[t] = !0), !1);
	}
	function T(t, r, n, o) {
		if (n !== null && n.type === 0) return !1;
		switch (typeof r) {
			case "function":
			case "symbol":
				return !0;
			case "boolean":
				return o
					? !1
					: n !== null
					? !n.acceptsBooleans
					: ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
			default:
				return !1;
		}
	}
	function D(t, r, n, o) {
		if (r === null || typeof r > "u" || T(t, r, n, o)) return !0;
		if (o) return !1;
		if (n !== null)
			switch (n.type) {
				case 3:
					return !r;
				case 4:
					return r === !1;
				case 5:
					return isNaN(r);
				case 6:
					return isNaN(r) || 1 > r;
			}
		return !1;
	}
	function U(t, r, n, o, d, m, x) {
		(this.acceptsBooleans = r === 2 || r === 3 || r === 4),
			(this.attributeName = o),
			(this.attributeNamespace = d),
			(this.mustUseProperty = n),
			(this.propertyName = t),
			(this.type = r),
			(this.sanitizeURL = m),
			(this.removeEmptyString = x);
	}
	var A = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
		.split(" ")
		.forEach(function (t) {
			A[t] = new U(t, 0, !1, t, null, !1, !1);
		}),
		[
			["acceptCharset", "accept-charset"],
			["className", "class"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
		].forEach(function (t) {
			var r = t[0];
			A[r] = new U(r, 1, !1, t[1], null, !1, !1);
		}),
		["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
			t,
		) {
			A[t] = new U(t, 2, !1, t.toLowerCase(), null, !1, !1);
		}),
		[
			"autoReverse",
			"externalResourcesRequired",
			"focusable",
			"preserveAlpha",
		].forEach(function (t) {
			A[t] = new U(t, 2, !1, t, null, !1, !1);
		}),
		"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
			.split(" ")
			.forEach(function (t) {
				A[t] = new U(t, 3, !1, t.toLowerCase(), null, !1, !1);
			}),
		["checked", "multiple", "muted", "selected"].forEach(function (t) {
			A[t] = new U(t, 3, !0, t, null, !1, !1);
		}),
		["capture", "download"].forEach(function (t) {
			A[t] = new U(t, 4, !1, t, null, !1, !1);
		}),
		["cols", "rows", "size", "span"].forEach(function (t) {
			A[t] = new U(t, 6, !1, t, null, !1, !1);
		}),
		["rowSpan", "start"].forEach(function (t) {
			A[t] = new U(t, 5, !1, t.toLowerCase(), null, !1, !1);
		});
	var z = /[\-:]([a-z])/g;
	function ee(t) {
		return t[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
		.split(" ")
		.forEach(function (t) {
			var r = t.replace(z, ee);
			A[r] = new U(r, 1, !1, t, null, !1, !1);
		}),
		"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
			.split(" ")
			.forEach(function (t) {
				var r = t.replace(z, ee);
				A[r] = new U(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
			}),
		["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
			var r = t.replace(z, ee);
			A[r] = new U(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
		}),
		["tabIndex", "crossOrigin"].forEach(function (t) {
			A[t] = new U(t, 1, !1, t.toLowerCase(), null, !1, !1);
		}),
		(A.xlinkHref = new U(
			"xlinkHref",
			1,
			!1,
			"xlink:href",
			"http://www.w3.org/1999/xlink",
			!0,
			!1,
		)),
		["src", "href", "action", "formAction"].forEach(function (t) {
			A[t] = new U(t, 1, !1, t.toLowerCase(), null, !0, !0);
		});
	function N(t, r, n, o) {
		var d = A.hasOwnProperty(r) ? A[r] : null;
		(d !== null
			? d.type !== 0
			: o ||
			  !(2 < r.length) ||
			  (r[0] !== "o" && r[0] !== "O") ||
			  (r[1] !== "n" && r[1] !== "N")) &&
			(D(r, n, d, o) && (n = null),
			o || d === null
				? w(r) &&
				  (n === null ? t.removeAttribute(r) : t.setAttribute(r, "" + n))
				: d.mustUseProperty
				? (t[d.propertyName] = n === null ? (d.type === 3 ? !1 : "") : n)
				: ((r = d.attributeName),
				  (o = d.attributeNamespace),
				  n === null
						? t.removeAttribute(r)
						: ((d = d.type),
						  (n = d === 3 || (d === 4 && n === !0) ? "" : "" + n),
						  o ? t.setAttributeNS(o, r, n) : t.setAttribute(r, n))));
	}
	var G = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
		X = Symbol.for("react.element"),
		ne = Symbol.for("react.portal"),
		le = Symbol.for("react.fragment"),
		ie = Symbol.for("react.strict_mode"),
		Y = Symbol.for("react.profiler"),
		J = Symbol.for("react.provider"),
		Ee = Symbol.for("react.context"),
		Se = Symbol.for("react.forward_ref"),
		Pe = Symbol.for("react.suspense"),
		I = Symbol.for("react.suspense_list"),
		ve = Symbol.for("react.memo"),
		re = Symbol.for("react.lazy"),
		xe = Symbol.for("react.offscreen"),
		j = Symbol.iterator;
	function V(t) {
		return t === null || typeof t != "object"
			? null
			: ((t = (j && t[j]) || t["@@iterator"]),
			  typeof t == "function" ? t : null);
	}
	var B = Object.assign,
		_;
	function k(t) {
		if (_ === void 0)
			try {
				throw Error();
			} catch (n) {
				var r = n.stack.trim().match(/\n( *(at )?)/);
				_ = (r && r[1]) || "";
			}
		return (
			`
` +
			_ +
			t
		);
	}
	var q = !1;
	function R(t, r) {
		if (!t || q) return "";
		q = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (r)
				if (
					((r = function () {
						throw Error();
					}),
					Object.defineProperty(r.prototype, "props", {
						set: function () {
							throw Error();
						},
					}),
					typeof Reflect == "object" && Reflect.construct)
				) {
					try {
						Reflect.construct(r, []);
					} catch (M) {
						var o = M;
					}
					Reflect.construct(t, [], r);
				} else {
					try {
						r.call();
					} catch (M) {
						o = M;
					}
					t.call(r.prototype);
				}
			else {
				try {
					throw Error();
				} catch (M) {
					o = M;
				}
				t();
			}
		} catch (M) {
			if (M && o && typeof M.stack == "string") {
				for (
					var d = M.stack.split(`
`),
						m = o.stack.split(`
`),
						x = d.length - 1,
						b = m.length - 1;
					1 <= x && 0 <= b && d[x] !== m[b];

				)
					b--;
				for (; 1 <= x && 0 <= b; x--, b--)
					if (d[x] !== m[b]) {
						if (x !== 1 || b !== 1)
							do
								if ((x--, b--, 0 > b || d[x] !== m[b])) {
									var E =
										`
` + d[x].replace(" at new ", " at ");
									return (
										t.displayName &&
											E.includes("<anonymous>") &&
											(E = E.replace("<anonymous>", t.displayName)),
										E
									);
								}
							while (1 <= x && 0 <= b);
						break;
					}
			}
		} finally {
			(q = !1), (Error.prepareStackTrace = n);
		}
		return (t = t ? t.displayName || t.name : "") ? k(t) : "";
	}
	function $(t) {
		switch (t.tag) {
			case 5:
				return k(t.type);
			case 16:
				return k("Lazy");
			case 13:
				return k("Suspense");
			case 19:
				return k("SuspenseList");
			case 0:
			case 2:
			case 15:
				return (t = R(t.type, !1)), t;
			case 11:
				return (t = R(t.type.render, !1)), t;
			case 1:
				return (t = R(t.type, !0)), t;
			default:
				return "";
		}
	}
	function C(t) {
		if (t == null) return null;
		if (typeof t == "function") return t.displayName || t.name || null;
		if (typeof t == "string") return t;
		switch (t) {
			case le:
				return "Fragment";
			case ne:
				return "Portal";
			case Y:
				return "Profiler";
			case ie:
				return "StrictMode";
			case Pe:
				return "Suspense";
			case I:
				return "SuspenseList";
		}
		if (typeof t == "object")
			switch (t.$$typeof) {
				case Ee:
					return (t.displayName || "Context") + ".Consumer";
				case J:
					return (t._context.displayName || "Context") + ".Provider";
				case Se:
					var r = t.render;
					return (
						(t = t.displayName),
						t ||
							((t = r.displayName || r.name || ""),
							(t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
						t
					);
				case ve:
					return (
						(r = t.displayName || null), r !== null ? r : C(t.type) || "Memo"
					);
				case re:
					(r = t._payload), (t = t._init);
					try {
						return C(t(r));
					} catch {}
			}
		return null;
	}
	function F(t) {
		var r = t.type;
		switch (t.tag) {
			case 24:
				return "Cache";
			case 9:
				return (r.displayName || "Context") + ".Consumer";
			case 10:
				return (r._context.displayName || "Context") + ".Provider";
			case 18:
				return "DehydratedFragment";
			case 11:
				return (
					(t = r.render),
					(t = t.displayName || t.name || ""),
					r.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
				);
			case 7:
				return "Fragment";
			case 5:
				return r;
			case 4:
				return "Portal";
			case 3:
				return "Root";
			case 6:
				return "Text";
			case 16:
				return C(r);
			case 8:
				return r === ie ? "StrictMode" : "Mode";
			case 22:
				return "Offscreen";
			case 12:
				return "Profiler";
			case 21:
				return "Scope";
			case 13:
				return "Suspense";
			case 19:
				return "SuspenseList";
			case 25:
				return "TracingMarker";
			case 1:
			case 0:
			case 17:
			case 2:
			case 14:
			case 15:
				if (typeof r == "function") return r.displayName || r.name || null;
				if (typeof r == "string") return r;
		}
		return null;
	}
	function Q(t) {
		switch (typeof t) {
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return t;
			case "object":
				return t;
			default:
				return "";
		}
	}
	function se(t) {
		var r = t.type;
		return (
			(t = t.nodeName) &&
			t.toLowerCase() === "input" &&
			(r === "checkbox" || r === "radio")
		);
	}
	function be(t) {
		var r = se(t) ? "checked" : "value",
			n = Object.getOwnPropertyDescriptor(t.constructor.prototype, r),
			o = "" + t[r];
		if (
			!t.hasOwnProperty(r) &&
			typeof n < "u" &&
			typeof n.get == "function" &&
			typeof n.set == "function"
		) {
			var d = n.get,
				m = n.set;
			return (
				Object.defineProperty(t, r, {
					configurable: !0,
					get: function () {
						return d.call(this);
					},
					set: function (x) {
						(o = "" + x), m.call(this, x);
					},
				}),
				Object.defineProperty(t, r, { enumerable: n.enumerable }),
				{
					getValue: function () {
						return o;
					},
					setValue: function (x) {
						o = "" + x;
					},
					stopTracking: function () {
						(t._valueTracker = null), delete t[r];
					},
				}
			);
		}
	}
	function He(t) {
		t._valueTracker || (t._valueTracker = be(t));
	}
	function $t(t) {
		if (!t) return !1;
		var r = t._valueTracker;
		if (!r) return !0;
		var n = r.getValue(),
			o = "";
		return (
			t && (o = se(t) ? (t.checked ? "true" : "false") : t.value),
			(t = o),
			t !== n ? (r.setValue(t), !0) : !1
		);
	}
	function Tt(t) {
		if (
			((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
		)
			return null;
		try {
			return t.activeElement || t.body;
		} catch {
			return t.body;
		}
	}
	function Qs(t, r) {
		var n = r.checked;
		return B({}, r, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: n ?? t._wrapperState.initialChecked,
		});
	}
	function ea(t, r) {
		var n = r.defaultValue == null ? "" : r.defaultValue,
			o = r.checked != null ? r.checked : r.defaultChecked;
		(n = Q(r.value != null ? r.value : n)),
			(t._wrapperState = {
				initialChecked: o,
				initialValue: n,
				controlled:
					r.type === "checkbox" || r.type === "radio"
						? r.checked != null
						: r.value != null,
			});
	}
	function Xs(t, r) {
		(r = r.checked), r != null && N(t, "checked", r, !1);
	}
	function as(t, r) {
		Xs(t, r);
		var n = Q(r.value),
			o = r.type;
		if (n != null)
			o === "number"
				? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
				: t.value !== "" + n && (t.value = "" + n);
		else if (o === "submit" || o === "reset") {
			t.removeAttribute("value");
			return;
		}
		r.hasOwnProperty("value")
			? W(t, r.type, n)
			: r.hasOwnProperty("defaultValue") && W(t, r.type, Q(r.defaultValue)),
			r.checked == null &&
				r.defaultChecked != null &&
				(t.defaultChecked = !!r.defaultChecked);
	}
	function is(t, r, n) {
		if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
			var o = r.type;
			if (
				!(
					(o !== "submit" && o !== "reset") ||
					(r.value !== void 0 && r.value !== null)
				)
			)
				return;
			(r = "" + t._wrapperState.initialValue),
				n || r === t.value || (t.value = r),
				(t.defaultValue = r);
		}
		(n = t.name),
			n !== "" && (t.name = ""),
			(t.defaultChecked = !!t._wrapperState.initialChecked),
			n !== "" && (t.name = n);
	}
	function W(t, r, n) {
		(r !== "number" || Tt(t.ownerDocument) !== t) &&
			(n == null
				? (t.defaultValue = "" + t._wrapperState.initialValue)
				: t.defaultValue !== "" + n && (t.defaultValue = "" + n));
	}
	var pe = Array.isArray;
	function we(t, r, n, o) {
		if (((t = t.options), r)) {
			r = {};
			for (var d = 0; d < n.length; d++) r["$" + n[d]] = !0;
			for (n = 0; n < t.length; n++)
				(d = r.hasOwnProperty("$" + t[n].value)),
					t[n].selected !== d && (t[n].selected = d),
					d && o && (t[n].defaultSelected = !0);
		} else {
			for (n = "" + Q(n), r = null, d = 0; d < t.length; d++) {
				if (t[d].value === n) {
					(t[d].selected = !0), o && (t[d].defaultSelected = !0);
					return;
				}
				r !== null || t[d].disabled || (r = t[d]);
			}
			r !== null && (r.selected = !0);
		}
	}
	function Fe(t, r) {
		if (r.dangerouslySetInnerHTML != null) throw Error(a(91));
		return B({}, r, {
			value: void 0,
			defaultValue: void 0,
			children: "" + t._wrapperState.initialValue,
		});
	}
	function Vt(t, r) {
		var n = r.value;
		if (n == null) {
			if (((n = r.children), (r = r.defaultValue), n != null)) {
				if (r != null) throw Error(a(92));
				if (pe(n)) {
					if (1 < n.length) throw Error(a(93));
					n = n[0];
				}
				r = n;
			}
			r == null && (r = ""), (n = r);
		}
		t._wrapperState = { initialValue: Q(n) };
	}
	function ls(t, r) {
		var n = Q(r.value),
			o = Q(r.defaultValue);
		n != null &&
			((n = "" + n),
			n !== t.value && (t.value = n),
			r.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
			o != null && (t.defaultValue = "" + o);
	}
	function dc(t) {
		var r = t.textContent;
		r === t._wrapperState.initialValue &&
			r !== "" &&
			r !== null &&
			(t.value = r);
	}
	function hc(t) {
		switch (t) {
			case "svg":
				return "http://www.w3.org/2000/svg";
			case "math":
				return "http://www.w3.org/1998/Math/MathML";
			default:
				return "http://www.w3.org/1999/xhtml";
		}
	}
	function Ti(t, r) {
		return t == null || t === "http://www.w3.org/1999/xhtml"
			? hc(r)
			: t === "http://www.w3.org/2000/svg" && r === "foreignObject"
			? "http://www.w3.org/1999/xhtml"
			: t;
	}
	var ta,
		mc = (function (t) {
			return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
				? function (r, n, o, d) {
						MSApp.execUnsafeLocalFunction(function () {
							return t(r, n, o, d);
						});
				  }
				: t;
		})(function (t, r) {
			if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
				t.innerHTML = r;
			else {
				for (
					ta = ta || document.createElement("div"),
						ta.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>",
						r = ta.firstChild;
					t.firstChild;

				)
					t.removeChild(t.firstChild);
				for (; r.firstChild; ) t.appendChild(r.firstChild);
			}
		});
	function Zs(t, r) {
		if (r) {
			var n = t.firstChild;
			if (n && n === t.lastChild && n.nodeType === 3) {
				n.nodeValue = r;
				return;
			}
		}
		t.textContent = r;
	}
	var en = {
			animationIterationCount: !0,
			aspectRatio: !0,
			borderImageOutset: !0,
			borderImageSlice: !0,
			borderImageWidth: !0,
			boxFlex: !0,
			boxFlexGroup: !0,
			boxOrdinalGroup: !0,
			columnCount: !0,
			columns: !0,
			flex: !0,
			flexGrow: !0,
			flexPositive: !0,
			flexShrink: !0,
			flexNegative: !0,
			flexOrder: !0,
			gridArea: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowSpan: !0,
			gridRowStart: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnSpan: !0,
			gridColumnStart: !0,
			fontWeight: !0,
			lineClamp: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			tabSize: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
			fillOpacity: !0,
			floodOpacity: !0,
			stopOpacity: !0,
			strokeDasharray: !0,
			strokeDashoffset: !0,
			strokeMiterlimit: !0,
			strokeOpacity: !0,
			strokeWidth: !0,
		},
		Bm = ["Webkit", "ms", "Moz", "O"];
	Object.keys(en).forEach(function (t) {
		Bm.forEach(function (r) {
			(r = r + t.charAt(0).toUpperCase() + t.substring(1)), (en[r] = en[t]);
		});
	});
	function fc(t, r, n) {
		return r == null || typeof r == "boolean" || r === ""
			? ""
			: n || typeof r != "number" || r === 0 || (en.hasOwnProperty(t) && en[t])
			? ("" + r).trim()
			: r + "px";
	}
	function pc(t, r) {
		t = t.style;
		for (var n in r)
			if (r.hasOwnProperty(n)) {
				var o = n.indexOf("--") === 0,
					d = fc(n, r[n], o);
				n === "float" && (n = "cssFloat"), o ? t.setProperty(n, d) : (t[n] = d);
			}
	}
	var $m = B(
		{ menuitem: !0 },
		{
			area: !0,
			base: !0,
			br: !0,
			col: !0,
			embed: !0,
			hr: !0,
			img: !0,
			input: !0,
			keygen: !0,
			link: !0,
			meta: !0,
			param: !0,
			source: !0,
			track: !0,
			wbr: !0,
		},
	);
	function Ai(t, r) {
		if (r) {
			if ($m[t] && (r.children != null || r.dangerouslySetInnerHTML != null))
				throw Error(a(137, t));
			if (r.dangerouslySetInnerHTML != null) {
				if (r.children != null) throw Error(a(60));
				if (
					typeof r.dangerouslySetInnerHTML != "object" ||
					!("__html" in r.dangerouslySetInnerHTML)
				)
					throw Error(a(61));
			}
			if (r.style != null && typeof r.style != "object") throw Error(a(62));
		}
	}
	function Ri(t, r) {
		if (t.indexOf("-") === -1) return typeof r.is == "string";
		switch (t) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0;
		}
	}
	var Li = null;
	function Oi(t) {
		return (
			(t = t.target || t.srcElement || window),
			t.correspondingUseElement && (t = t.correspondingUseElement),
			t.nodeType === 3 ? t.parentNode : t
		);
	}
	var Ii = null,
		os = null,
		cs = null;
	function xc(t) {
		if ((t = Nn(t))) {
			if (typeof Ii != "function") throw Error(a(280));
			var r = t.stateNode;
			r && ((r = ka(r)), Ii(t.stateNode, t.type, r));
		}
	}
	function gc(t) {
		os ? (cs ? cs.push(t) : (cs = [t])) : (os = t);
	}
	function yc() {
		if (os) {
			var t = os,
				r = cs;
			if (((cs = os = null), xc(t), r)) for (t = 0; t < r.length; t++) xc(r[t]);
		}
	}
	function vc(t, r) {
		return t(r);
	}
	function bc() {}
	var zi = !1;
	function jc(t, r, n) {
		if (zi) return t(r, n);
		zi = !0;
		try {
			return vc(t, r, n);
		} finally {
			(zi = !1), (os !== null || cs !== null) && (bc(), yc());
		}
	}
	function tn(t, r) {
		var n = t.stateNode;
		if (n === null) return null;
		var o = ka(n);
		if (o === null) return null;
		n = o[r];
		e: switch (r) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(o = !o.disabled) ||
					((t = t.type),
					(o = !(
						t === "button" ||
						t === "input" ||
						t === "select" ||
						t === "textarea"
					))),
					(t = !o);
				break e;
			default:
				t = !1;
		}
		if (t) return null;
		if (n && typeof n != "function") throw Error(a(231, r, typeof n));
		return n;
	}
	var Mi = !1;
	if (f)
		try {
			var rn = {};
			Object.defineProperty(rn, "passive", {
				get: function () {
					Mi = !0;
				},
			}),
				window.addEventListener("test", rn, rn),
				window.removeEventListener("test", rn, rn);
		} catch {
			Mi = !1;
		}
	function Vm(t, r, n, o, d, m, x, b, E) {
		var M = Array.prototype.slice.call(arguments, 3);
		try {
			r.apply(n, M);
		} catch (K) {
			this.onError(K);
		}
	}
	var sn = !1,
		ra = null,
		sa = !1,
		Di = null,
		Wm = {
			onError: function (t) {
				(sn = !0), (ra = t);
			},
		};
	function qm(t, r, n, o, d, m, x, b, E) {
		(sn = !1), (ra = null), Vm.apply(Wm, arguments);
	}
	function Hm(t, r, n, o, d, m, x, b, E) {
		if ((qm.apply(this, arguments), sn)) {
			if (sn) {
				var M = ra;
				(sn = !1), (ra = null);
			} else throw Error(a(198));
			sa || ((sa = !0), (Di = M));
		}
	}
	function Dr(t) {
		var r = t,
			n = t;
		if (t.alternate) for (; r.return; ) r = r.return;
		else {
			t = r;
			do (r = t), (r.flags & 4098) !== 0 && (n = r.return), (t = r.return);
			while (t);
		}
		return r.tag === 3 ? n : null;
	}
	function wc(t) {
		if (t.tag === 13) {
			var r = t.memoizedState;
			if (
				(r === null && ((t = t.alternate), t !== null && (r = t.memoizedState)),
				r !== null)
			)
				return r.dehydrated;
		}
		return null;
	}
	function Nc(t) {
		if (Dr(t) !== t) throw Error(a(188));
	}
	function Gm(t) {
		var r = t.alternate;
		if (!r) {
			if (((r = Dr(t)), r === null)) throw Error(a(188));
			return r !== t ? null : t;
		}
		for (var n = t, o = r; ; ) {
			var d = n.return;
			if (d === null) break;
			var m = d.alternate;
			if (m === null) {
				if (((o = d.return), o !== null)) {
					n = o;
					continue;
				}
				break;
			}
			if (d.child === m.child) {
				for (m = d.child; m; ) {
					if (m === n) return Nc(d), t;
					if (m === o) return Nc(d), r;
					m = m.sibling;
				}
				throw Error(a(188));
			}
			if (n.return !== o.return) (n = d), (o = m);
			else {
				for (var x = !1, b = d.child; b; ) {
					if (b === n) {
						(x = !0), (n = d), (o = m);
						break;
					}
					if (b === o) {
						(x = !0), (o = d), (n = m);
						break;
					}
					b = b.sibling;
				}
				if (!x) {
					for (b = m.child; b; ) {
						if (b === n) {
							(x = !0), (n = m), (o = d);
							break;
						}
						if (b === o) {
							(x = !0), (o = m), (n = d);
							break;
						}
						b = b.sibling;
					}
					if (!x) throw Error(a(189));
				}
			}
			if (n.alternate !== o) throw Error(a(190));
		}
		if (n.tag !== 3) throw Error(a(188));
		return n.stateNode.current === n ? t : r;
	}
	function kc(t) {
		return (t = Gm(t)), t !== null ? Sc(t) : null;
	}
	function Sc(t) {
		if (t.tag === 5 || t.tag === 6) return t;
		for (t = t.child; t !== null; ) {
			var r = Sc(t);
			if (r !== null) return r;
			t = t.sibling;
		}
		return null;
	}
	var Ec = s.unstable_scheduleCallback,
		_c = s.unstable_cancelCallback,
		Km = s.unstable_shouldYield,
		Ym = s.unstable_requestPaint,
		$e = s.unstable_now,
		Jm = s.unstable_getCurrentPriorityLevel,
		Ui = s.unstable_ImmediatePriority,
		Cc = s.unstable_UserBlockingPriority,
		na = s.unstable_NormalPriority,
		Qm = s.unstable_LowPriority,
		Pc = s.unstable_IdlePriority,
		aa = null,
		Wt = null;
	function Xm(t) {
		if (Wt && typeof Wt.onCommitFiberRoot == "function")
			try {
				Wt.onCommitFiberRoot(aa, t, void 0, (t.current.flags & 128) === 128);
			} catch {}
	}
	var At = Math.clz32 ? Math.clz32 : tf,
		Zm = Math.log,
		ef = Math.LN2;
	function tf(t) {
		return (t >>>= 0), t === 0 ? 32 : (31 - ((Zm(t) / ef) | 0)) | 0;
	}
	var ia = 64,
		la = 4194304;
	function nn(t) {
		switch (t & -t) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t & 4194240;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864:
				return t & 130023424;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 1073741824;
			default:
				return t;
		}
	}
	function oa(t, r) {
		var n = t.pendingLanes;
		if (n === 0) return 0;
		var o = 0,
			d = t.suspendedLanes,
			m = t.pingedLanes,
			x = n & 268435455;
		if (x !== 0) {
			var b = x & ~d;
			b !== 0 ? (o = nn(b)) : ((m &= x), m !== 0 && (o = nn(m)));
		} else (x = n & ~d), x !== 0 ? (o = nn(x)) : m !== 0 && (o = nn(m));
		if (o === 0) return 0;
		if (
			r !== 0 &&
			r !== o &&
			(r & d) === 0 &&
			((d = o & -o), (m = r & -r), d >= m || (d === 16 && (m & 4194240) !== 0))
		)
			return r;
		if (((o & 4) !== 0 && (o |= n & 16), (r = t.entangledLanes), r !== 0))
			for (t = t.entanglements, r &= o; 0 < r; )
				(n = 31 - At(r)), (d = 1 << n), (o |= t[n]), (r &= ~d);
		return o;
	}
	function rf(t, r) {
		switch (t) {
			case 1:
			case 2:
			case 4:
				return r + 250;
			case 8:
			case 16:
			case 32:
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return r + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864:
				return -1;
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function sf(t, r) {
		for (
			var n = t.suspendedLanes,
				o = t.pingedLanes,
				d = t.expirationTimes,
				m = t.pendingLanes;
			0 < m;

		) {
			var x = 31 - At(m),
				b = 1 << x,
				E = d[x];
			E === -1
				? ((b & n) === 0 || (b & o) !== 0) && (d[x] = rf(b, r))
				: E <= r && (t.expiredLanes |= b),
				(m &= ~b);
		}
	}
	function Fi(t) {
		return (
			(t = t.pendingLanes & -1073741825),
			t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
		);
	}
	function Tc() {
		var t = ia;
		return (ia <<= 1), (ia & 4194240) === 0 && (ia = 64), t;
	}
	function Bi(t) {
		for (var r = [], n = 0; 31 > n; n++) r.push(t);
		return r;
	}
	function an(t, r, n) {
		(t.pendingLanes |= r),
			r !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
			(t = t.eventTimes),
			(r = 31 - At(r)),
			(t[r] = n);
	}
	function nf(t, r) {
		var n = t.pendingLanes & ~r;
		(t.pendingLanes = r),
			(t.suspendedLanes = 0),
			(t.pingedLanes = 0),
			(t.expiredLanes &= r),
			(t.mutableReadLanes &= r),
			(t.entangledLanes &= r),
			(r = t.entanglements);
		var o = t.eventTimes;
		for (t = t.expirationTimes; 0 < n; ) {
			var d = 31 - At(n),
				m = 1 << d;
			(r[d] = 0), (o[d] = -1), (t[d] = -1), (n &= ~m);
		}
	}
	function $i(t, r) {
		var n = (t.entangledLanes |= r);
		for (t = t.entanglements; n; ) {
			var o = 31 - At(n),
				d = 1 << o;
			(d & r) | (t[o] & r) && (t[o] |= r), (n &= ~d);
		}
	}
	var Re = 0;
	function Ac(t) {
		return (
			(t &= -t),
			1 < t ? (4 < t ? ((t & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
		);
	}
	var Rc,
		Vi,
		Lc,
		Oc,
		Ic,
		Wi = !1,
		ca = [],
		ur = null,
		dr = null,
		hr = null,
		ln = new Map(),
		on = new Map(),
		mr = [],
		af =
			"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
				" ",
			);
	function zc(t, r) {
		switch (t) {
			case "focusin":
			case "focusout":
				ur = null;
				break;
			case "dragenter":
			case "dragleave":
				dr = null;
				break;
			case "mouseover":
			case "mouseout":
				hr = null;
				break;
			case "pointerover":
			case "pointerout":
				ln.delete(r.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				on.delete(r.pointerId);
		}
	}
	function cn(t, r, n, o, d, m) {
		return t === null || t.nativeEvent !== m
			? ((t = {
					blockedOn: r,
					domEventName: n,
					eventSystemFlags: o,
					nativeEvent: m,
					targetContainers: [d],
			  }),
			  r !== null && ((r = Nn(r)), r !== null && Vi(r)),
			  t)
			: ((t.eventSystemFlags |= o),
			  (r = t.targetContainers),
			  d !== null && r.indexOf(d) === -1 && r.push(d),
			  t);
	}
	function lf(t, r, n, o, d) {
		switch (r) {
			case "focusin":
				return (ur = cn(ur, t, r, n, o, d)), !0;
			case "dragenter":
				return (dr = cn(dr, t, r, n, o, d)), !0;
			case "mouseover":
				return (hr = cn(hr, t, r, n, o, d)), !0;
			case "pointerover":
				var m = d.pointerId;
				return ln.set(m, cn(ln.get(m) || null, t, r, n, o, d)), !0;
			case "gotpointercapture":
				return (
					(m = d.pointerId), on.set(m, cn(on.get(m) || null, t, r, n, o, d)), !0
				);
		}
		return !1;
	}
	function Mc(t) {
		var r = Ur(t.target);
		if (r !== null) {
			var n = Dr(r);
			if (n !== null) {
				if (((r = n.tag), r === 13)) {
					if (((r = wc(n)), r !== null)) {
						(t.blockedOn = r),
							Ic(t.priority, function () {
								Lc(n);
							});
						return;
					}
				} else if (r === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		t.blockedOn = null;
	}
	function ua(t) {
		if (t.blockedOn !== null) return !1;
		for (var r = t.targetContainers; 0 < r.length; ) {
			var n = Hi(t.domEventName, t.eventSystemFlags, r[0], t.nativeEvent);
			if (n === null) {
				n = t.nativeEvent;
				var o = new n.constructor(n.type, n);
				(Li = o), n.target.dispatchEvent(o), (Li = null);
			} else return (r = Nn(n)), r !== null && Vi(r), (t.blockedOn = n), !1;
			r.shift();
		}
		return !0;
	}
	function Dc(t, r, n) {
		ua(t) && n.delete(r);
	}
	function of() {
		(Wi = !1),
			ur !== null && ua(ur) && (ur = null),
			dr !== null && ua(dr) && (dr = null),
			hr !== null && ua(hr) && (hr = null),
			ln.forEach(Dc),
			on.forEach(Dc);
	}
	function un(t, r) {
		t.blockedOn === r &&
			((t.blockedOn = null),
			Wi ||
				((Wi = !0),
				s.unstable_scheduleCallback(s.unstable_NormalPriority, of)));
	}
	function dn(t) {
		function r(d) {
			return un(d, t);
		}
		if (0 < ca.length) {
			un(ca[0], t);
			for (var n = 1; n < ca.length; n++) {
				var o = ca[n];
				o.blockedOn === t && (o.blockedOn = null);
			}
		}
		for (
			ur !== null && un(ur, t),
				dr !== null && un(dr, t),
				hr !== null && un(hr, t),
				ln.forEach(r),
				on.forEach(r),
				n = 0;
			n < mr.length;
			n++
		)
			(o = mr[n]), o.blockedOn === t && (o.blockedOn = null);
		for (; 0 < mr.length && ((n = mr[0]), n.blockedOn === null); )
			Mc(n), n.blockedOn === null && mr.shift();
	}
	var us = G.ReactCurrentBatchConfig,
		da = !0;
	function cf(t, r, n, o) {
		var d = Re,
			m = us.transition;
		us.transition = null;
		try {
			(Re = 1), qi(t, r, n, o);
		} finally {
			(Re = d), (us.transition = m);
		}
	}
	function uf(t, r, n, o) {
		var d = Re,
			m = us.transition;
		us.transition = null;
		try {
			(Re = 4), qi(t, r, n, o);
		} finally {
			(Re = d), (us.transition = m);
		}
	}
	function qi(t, r, n, o) {
		if (da) {
			var d = Hi(t, r, n, o);
			if (d === null) cl(t, r, o, ha, n), zc(t, o);
			else if (lf(d, t, r, n, o)) o.stopPropagation();
			else if ((zc(t, o), r & 4 && -1 < af.indexOf(t))) {
				for (; d !== null; ) {
					var m = Nn(d);
					if (
						(m !== null && Rc(m),
						(m = Hi(t, r, n, o)),
						m === null && cl(t, r, o, ha, n),
						m === d)
					)
						break;
					d = m;
				}
				d !== null && o.stopPropagation();
			} else cl(t, r, o, null, n);
		}
	}
	var ha = null;
	function Hi(t, r, n, o) {
		if (((ha = null), (t = Oi(o)), (t = Ur(t)), t !== null))
			if (((r = Dr(t)), r === null)) t = null;
			else if (((n = r.tag), n === 13)) {
				if (((t = wc(r)), t !== null)) return t;
				t = null;
			} else if (n === 3) {
				if (r.stateNode.current.memoizedState.isDehydrated)
					return r.tag === 3 ? r.stateNode.containerInfo : null;
				t = null;
			} else r !== t && (t = null);
		return (ha = t), null;
	}
	function Uc(t) {
		switch (t) {
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart":
				return 1;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "toggle":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 4;
			case "message":
				switch (Jm()) {
					case Ui:
						return 1;
					case Cc:
						return 4;
					case na:
					case Qm:
						return 16;
					case Pc:
						return 536870912;
					default:
						return 16;
				}
			default:
				return 16;
		}
	}
	var fr = null,
		Gi = null,
		ma = null;
	function Fc() {
		if (ma) return ma;
		var t,
			r = Gi,
			n = r.length,
			o,
			d = "value" in fr ? fr.value : fr.textContent,
			m = d.length;
		for (t = 0; t < n && r[t] === d[t]; t++);
		var x = n - t;
		for (o = 1; o <= x && r[n - o] === d[m - o]; o++);
		return (ma = d.slice(t, 1 < o ? 1 - o : void 0));
	}
	function fa(t) {
		var r = t.keyCode;
		return (
			"charCode" in t
				? ((t = t.charCode), t === 0 && r === 13 && (t = 13))
				: (t = r),
			t === 10 && (t = 13),
			32 <= t || t === 13 ? t : 0
		);
	}
	function pa() {
		return !0;
	}
	function Bc() {
		return !1;
	}
	function vt(t) {
		function r(n, o, d, m, x) {
			(this._reactName = n),
				(this._targetInst = d),
				(this.type = o),
				(this.nativeEvent = m),
				(this.target = x),
				(this.currentTarget = null);
			for (var b in t)
				t.hasOwnProperty(b) && ((n = t[b]), (this[b] = n ? n(m) : m[b]));
			return (
				(this.isDefaultPrevented = (
					m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1
				)
					? pa
					: Bc),
				(this.isPropagationStopped = Bc),
				this
			);
		}
		return (
			B(r.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var n = this.nativeEvent;
					n &&
						(n.preventDefault
							? n.preventDefault()
							: typeof n.returnValue != "unknown" && (n.returnValue = !1),
						(this.isDefaultPrevented = pa));
				},
				stopPropagation: function () {
					var n = this.nativeEvent;
					n &&
						(n.stopPropagation
							? n.stopPropagation()
							: typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
						(this.isPropagationStopped = pa));
				},
				persist: function () {},
				isPersistent: pa,
			}),
			r
		);
	}
	var ds = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (t) {
				return t.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		Ki = vt(ds),
		hn = B({}, ds, { view: 0, detail: 0 }),
		df = vt(hn),
		Yi,
		Ji,
		mn,
		xa = B({}, hn, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: Xi,
			button: 0,
			buttons: 0,
			relatedTarget: function (t) {
				return t.relatedTarget === void 0
					? t.fromElement === t.srcElement
						? t.toElement
						: t.fromElement
					: t.relatedTarget;
			},
			movementX: function (t) {
				return "movementX" in t
					? t.movementX
					: (t !== mn &&
							(mn && t.type === "mousemove"
								? ((Yi = t.screenX - mn.screenX), (Ji = t.screenY - mn.screenY))
								: (Ji = Yi = 0),
							(mn = t)),
					  Yi);
			},
			movementY: function (t) {
				return "movementY" in t ? t.movementY : Ji;
			},
		}),
		$c = vt(xa),
		hf = B({}, xa, { dataTransfer: 0 }),
		mf = vt(hf),
		ff = B({}, hn, { relatedTarget: 0 }),
		Qi = vt(ff),
		pf = B({}, ds, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		xf = vt(pf),
		gf = B({}, ds, {
			clipboardData: function (t) {
				return "clipboardData" in t ? t.clipboardData : window.clipboardData;
			},
		}),
		yf = vt(gf),
		vf = B({}, ds, { data: 0 }),
		Vc = vt(vf),
		bf = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified",
		},
		jf = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta",
		},
		wf = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey",
		};
	function Nf(t) {
		var r = this.nativeEvent;
		return r.getModifierState
			? r.getModifierState(t)
			: (t = wf[t])
			? !!r[t]
			: !1;
	}
	function Xi() {
		return Nf;
	}
	var kf = B({}, hn, {
			key: function (t) {
				if (t.key) {
					var r = bf[t.key] || t.key;
					if (r !== "Unidentified") return r;
				}
				return t.type === "keypress"
					? ((t = fa(t)), t === 13 ? "Enter" : String.fromCharCode(t))
					: t.type === "keydown" || t.type === "keyup"
					? jf[t.keyCode] || "Unidentified"
					: "";
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: Xi,
			charCode: function (t) {
				return t.type === "keypress" ? fa(t) : 0;
			},
			keyCode: function (t) {
				return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
			},
			which: function (t) {
				return t.type === "keypress"
					? fa(t)
					: t.type === "keydown" || t.type === "keyup"
					? t.keyCode
					: 0;
			},
		}),
		Sf = vt(kf),
		Ef = B({}, xa, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0,
		}),
		Wc = vt(Ef),
		_f = B({}, hn, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: Xi,
		}),
		Cf = vt(_f),
		Pf = B({}, ds, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		Tf = vt(Pf),
		Af = B({}, xa, {
			deltaX: function (t) {
				return "deltaX" in t
					? t.deltaX
					: "wheelDeltaX" in t
					? -t.wheelDeltaX
					: 0;
			},
			deltaY: function (t) {
				return "deltaY" in t
					? t.deltaY
					: "wheelDeltaY" in t
					? -t.wheelDeltaY
					: "wheelDelta" in t
					? -t.wheelDelta
					: 0;
			},
			deltaZ: 0,
			deltaMode: 0,
		}),
		Rf = vt(Af),
		Lf = [9, 13, 27, 32],
		Zi = f && "CompositionEvent" in window,
		fn = null;
	f && "documentMode" in document && (fn = document.documentMode);
	var Of = f && "TextEvent" in window && !fn,
		qc = f && (!Zi || (fn && 8 < fn && 11 >= fn)),
		Hc = " ",
		Gc = !1;
	function Kc(t, r) {
		switch (t) {
			case "keyup":
				return Lf.indexOf(r.keyCode) !== -1;
			case "keydown":
				return r.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1;
		}
	}
	function Yc(t) {
		return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
	}
	var hs = !1;
	function If(t, r) {
		switch (t) {
			case "compositionend":
				return Yc(r);
			case "keypress":
				return r.which !== 32 ? null : ((Gc = !0), Hc);
			case "textInput":
				return (t = r.data), t === Hc && Gc ? null : t;
			default:
				return null;
		}
	}
	function zf(t, r) {
		if (hs)
			return t === "compositionend" || (!Zi && Kc(t, r))
				? ((t = Fc()), (ma = Gi = fr = null), (hs = !1), t)
				: null;
		switch (t) {
			case "paste":
				return null;
			case "keypress":
				if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
					if (r.char && 1 < r.char.length) return r.char;
					if (r.which) return String.fromCharCode(r.which);
				}
				return null;
			case "compositionend":
				return qc && r.locale !== "ko" ? null : r.data;
			default:
				return null;
		}
	}
	var Mf = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0,
	};
	function Jc(t) {
		var r = t && t.nodeName && t.nodeName.toLowerCase();
		return r === "input" ? !!Mf[t.type] : r === "textarea";
	}
	function Qc(t, r, n, o) {
		gc(o),
			(r = ja(r, "onChange")),
			0 < r.length &&
				((n = new Ki("onChange", "change", null, n, o)),
				t.push({ event: n, listeners: r }));
	}
	var pn = null,
		xn = null;
	function Df(t) {
		pu(t, 0);
	}
	function ga(t) {
		var r = gs(t);
		if ($t(r)) return t;
	}
	function Uf(t, r) {
		if (t === "change") return r;
	}
	var Xc = !1;
	if (f) {
		var el;
		if (f) {
			var tl = "oninput" in document;
			if (!tl) {
				var Zc = document.createElement("div");
				Zc.setAttribute("oninput", "return;"),
					(tl = typeof Zc.oninput == "function");
			}
			el = tl;
		} else el = !1;
		Xc = el && (!document.documentMode || 9 < document.documentMode);
	}
	function eu() {
		pn && (pn.detachEvent("onpropertychange", tu), (xn = pn = null));
	}
	function tu(t) {
		if (t.propertyName === "value" && ga(xn)) {
			var r = [];
			Qc(r, xn, t, Oi(t)), jc(Df, r);
		}
	}
	function Ff(t, r, n) {
		t === "focusin"
			? (eu(), (pn = r), (xn = n), pn.attachEvent("onpropertychange", tu))
			: t === "focusout" && eu();
	}
	function Bf(t) {
		if (t === "selectionchange" || t === "keyup" || t === "keydown")
			return ga(xn);
	}
	function $f(t, r) {
		if (t === "click") return ga(r);
	}
	function Vf(t, r) {
		if (t === "input" || t === "change") return ga(r);
	}
	function Wf(t, r) {
		return (t === r && (t !== 0 || 1 / t === 1 / r)) || (t !== t && r !== r);
	}
	var Rt = typeof Object.is == "function" ? Object.is : Wf;
	function gn(t, r) {
		if (Rt(t, r)) return !0;
		if (
			typeof t != "object" ||
			t === null ||
			typeof r != "object" ||
			r === null
		)
			return !1;
		var n = Object.keys(t),
			o = Object.keys(r);
		if (n.length !== o.length) return !1;
		for (o = 0; o < n.length; o++) {
			var d = n[o];
			if (!p.call(r, d) || !Rt(t[d], r[d])) return !1;
		}
		return !0;
	}
	function ru(t) {
		for (; t && t.firstChild; ) t = t.firstChild;
		return t;
	}
	function su(t, r) {
		var n = ru(t);
		t = 0;
		for (var o; n; ) {
			if (n.nodeType === 3) {
				if (((o = t + n.textContent.length), t <= r && o >= r))
					return { node: n, offset: r - t };
				t = o;
			}
			e: {
				for (; n; ) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break e;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = ru(n);
		}
	}
	function nu(t, r) {
		return t && r
			? t === r
				? !0
				: t && t.nodeType === 3
				? !1
				: r && r.nodeType === 3
				? nu(t, r.parentNode)
				: "contains" in t
				? t.contains(r)
				: t.compareDocumentPosition
				? !!(t.compareDocumentPosition(r) & 16)
				: !1
			: !1;
	}
	function au() {
		for (var t = window, r = Tt(); r instanceof t.HTMLIFrameElement; ) {
			try {
				var n = typeof r.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) t = r.contentWindow;
			else break;
			r = Tt(t.document);
		}
		return r;
	}
	function rl(t) {
		var r = t && t.nodeName && t.nodeName.toLowerCase();
		return (
			r &&
			((r === "input" &&
				(t.type === "text" ||
					t.type === "search" ||
					t.type === "tel" ||
					t.type === "url" ||
					t.type === "password")) ||
				r === "textarea" ||
				t.contentEditable === "true")
		);
	}
	function qf(t) {
		var r = au(),
			n = t.focusedElem,
			o = t.selectionRange;
		if (
			r !== n &&
			n &&
			n.ownerDocument &&
			nu(n.ownerDocument.documentElement, n)
		) {
			if (o !== null && rl(n)) {
				if (
					((r = o.start),
					(t = o.end),
					t === void 0 && (t = r),
					"selectionStart" in n)
				)
					(n.selectionStart = r),
						(n.selectionEnd = Math.min(t, n.value.length));
				else if (
					((t = ((r = n.ownerDocument || document) && r.defaultView) || window),
					t.getSelection)
				) {
					t = t.getSelection();
					var d = n.textContent.length,
						m = Math.min(o.start, d);
					(o = o.end === void 0 ? m : Math.min(o.end, d)),
						!t.extend && m > o && ((d = o), (o = m), (m = d)),
						(d = su(n, m));
					var x = su(n, o);
					d &&
						x &&
						(t.rangeCount !== 1 ||
							t.anchorNode !== d.node ||
							t.anchorOffset !== d.offset ||
							t.focusNode !== x.node ||
							t.focusOffset !== x.offset) &&
						((r = r.createRange()),
						r.setStart(d.node, d.offset),
						t.removeAllRanges(),
						m > o
							? (t.addRange(r), t.extend(x.node, x.offset))
							: (r.setEnd(x.node, x.offset), t.addRange(r)));
				}
			}
			for (r = [], t = n; (t = t.parentNode); )
				t.nodeType === 1 &&
					r.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
			for (typeof n.focus == "function" && n.focus(), n = 0; n < r.length; n++)
				(t = r[n]),
					(t.element.scrollLeft = t.left),
					(t.element.scrollTop = t.top);
		}
	}
	var Hf = f && "documentMode" in document && 11 >= document.documentMode,
		ms = null,
		sl = null,
		yn = null,
		nl = !1;
	function iu(t, r, n) {
		var o =
			n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		nl ||
			ms == null ||
			ms !== Tt(o) ||
			((o = ms),
			"selectionStart" in o && rl(o)
				? (o = { start: o.selectionStart, end: o.selectionEnd })
				: ((o = (
						(o.ownerDocument && o.ownerDocument.defaultView) ||
						window
				  ).getSelection()),
				  (o = {
						anchorNode: o.anchorNode,
						anchorOffset: o.anchorOffset,
						focusNode: o.focusNode,
						focusOffset: o.focusOffset,
				  })),
			(yn && gn(yn, o)) ||
				((yn = o),
				(o = ja(sl, "onSelect")),
				0 < o.length &&
					((r = new Ki("onSelect", "select", null, r, n)),
					t.push({ event: r, listeners: o }),
					(r.target = ms))));
	}
	function ya(t, r) {
		var n = {};
		return (
			(n[t.toLowerCase()] = r.toLowerCase()),
			(n["Webkit" + t] = "webkit" + r),
			(n["Moz" + t] = "moz" + r),
			n
		);
	}
	var fs = {
			animationend: ya("Animation", "AnimationEnd"),
			animationiteration: ya("Animation", "AnimationIteration"),
			animationstart: ya("Animation", "AnimationStart"),
			transitionend: ya("Transition", "TransitionEnd"),
		},
		al = {},
		lu = {};
	f &&
		((lu = document.createElement("div").style),
		"AnimationEvent" in window ||
			(delete fs.animationend.animation,
			delete fs.animationiteration.animation,
			delete fs.animationstart.animation),
		"TransitionEvent" in window || delete fs.transitionend.transition);
	function va(t) {
		if (al[t]) return al[t];
		if (!fs[t]) return t;
		var r = fs[t],
			n;
		for (n in r) if (r.hasOwnProperty(n) && n in lu) return (al[t] = r[n]);
		return t;
	}
	var ou = va("animationend"),
		cu = va("animationiteration"),
		uu = va("animationstart"),
		du = va("transitionend"),
		hu = new Map(),
		mu =
			"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
				" ",
			);
	function pr(t, r) {
		hu.set(t, r), u(r, [t]);
	}
	for (var il = 0; il < mu.length; il++) {
		var ll = mu[il],
			Gf = ll.toLowerCase(),
			Kf = ll[0].toUpperCase() + ll.slice(1);
		pr(Gf, "on" + Kf);
	}
	pr(ou, "onAnimationEnd"),
		pr(cu, "onAnimationIteration"),
		pr(uu, "onAnimationStart"),
		pr("dblclick", "onDoubleClick"),
		pr("focusin", "onFocus"),
		pr("focusout", "onBlur"),
		pr(du, "onTransitionEnd"),
		h("onMouseEnter", ["mouseout", "mouseover"]),
		h("onMouseLeave", ["mouseout", "mouseover"]),
		h("onPointerEnter", ["pointerout", "pointerover"]),
		h("onPointerLeave", ["pointerout", "pointerover"]),
		u(
			"onChange",
			"change click focusin focusout input keydown keyup selectionchange".split(
				" ",
			),
		),
		u(
			"onSelect",
			"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
				" ",
			),
		),
		u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
		u(
			"onCompositionEnd",
			"compositionend focusout keydown keypress keyup mousedown".split(" "),
		),
		u(
			"onCompositionStart",
			"compositionstart focusout keydown keypress keyup mousedown".split(" "),
		),
		u(
			"onCompositionUpdate",
			"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
		);
	var vn =
			"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
				" ",
			),
		Yf = new Set(
			"cancel close invalid load scroll toggle".split(" ").concat(vn),
		);
	function fu(t, r, n) {
		var o = t.type || "unknown-event";
		(t.currentTarget = n), Hm(o, r, void 0, t), (t.currentTarget = null);
	}
	function pu(t, r) {
		r = (r & 4) !== 0;
		for (var n = 0; n < t.length; n++) {
			var o = t[n],
				d = o.event;
			o = o.listeners;
			e: {
				var m = void 0;
				if (r)
					for (var x = o.length - 1; 0 <= x; x--) {
						var b = o[x],
							E = b.instance,
							M = b.currentTarget;
						if (((b = b.listener), E !== m && d.isPropagationStopped()))
							break e;
						fu(d, b, M), (m = E);
					}
				else
					for (x = 0; x < o.length; x++) {
						if (
							((b = o[x]),
							(E = b.instance),
							(M = b.currentTarget),
							(b = b.listener),
							E !== m && d.isPropagationStopped())
						)
							break e;
						fu(d, b, M), (m = E);
					}
			}
		}
		if (sa) throw ((t = Di), (sa = !1), (Di = null), t);
	}
	function Ie(t, r) {
		var n = r[pl];
		n === void 0 && (n = r[pl] = new Set());
		var o = t + "__bubble";
		n.has(o) || (xu(r, t, 2, !1), n.add(o));
	}
	function ol(t, r, n) {
		var o = 0;
		r && (o |= 4), xu(n, t, o, r);
	}
	var ba = "_reactListening" + Math.random().toString(36).slice(2);
	function bn(t) {
		if (!t[ba]) {
			(t[ba] = !0),
				l.forEach(function (n) {
					n !== "selectionchange" && (Yf.has(n) || ol(n, !1, t), ol(n, !0, t));
				});
			var r = t.nodeType === 9 ? t : t.ownerDocument;
			r === null || r[ba] || ((r[ba] = !0), ol("selectionchange", !1, r));
		}
	}
	function xu(t, r, n, o) {
		switch (Uc(r)) {
			case 1:
				var d = cf;
				break;
			case 4:
				d = uf;
				break;
			default:
				d = qi;
		}
		(n = d.bind(null, r, n, t)),
			(d = void 0),
			!Mi ||
				(r !== "touchstart" && r !== "touchmove" && r !== "wheel") ||
				(d = !0),
			o
				? d !== void 0
					? t.addEventListener(r, n, { capture: !0, passive: d })
					: t.addEventListener(r, n, !0)
				: d !== void 0
				? t.addEventListener(r, n, { passive: d })
				: t.addEventListener(r, n, !1);
	}
	function cl(t, r, n, o, d) {
		var m = o;
		if ((r & 1) === 0 && (r & 2) === 0 && o !== null)
			e: for (;;) {
				if (o === null) return;
				var x = o.tag;
				if (x === 3 || x === 4) {
					var b = o.stateNode.containerInfo;
					if (b === d || (b.nodeType === 8 && b.parentNode === d)) break;
					if (x === 4)
						for (x = o.return; x !== null; ) {
							var E = x.tag;
							if (
								(E === 3 || E === 4) &&
								((E = x.stateNode.containerInfo),
								E === d || (E.nodeType === 8 && E.parentNode === d))
							)
								return;
							x = x.return;
						}
					for (; b !== null; ) {
						if (((x = Ur(b)), x === null)) return;
						if (((E = x.tag), E === 5 || E === 6)) {
							o = m = x;
							continue e;
						}
						b = b.parentNode;
					}
				}
				o = o.return;
			}
		jc(function () {
			var M = m,
				K = Oi(n),
				Z = [];
			e: {
				var H = hu.get(t);
				if (H !== void 0) {
					var oe = Ki,
						ue = t;
					switch (t) {
						case "keypress":
							if (fa(n) === 0) break e;
						case "keydown":
						case "keyup":
							oe = Sf;
							break;
						case "focusin":
							(ue = "focus"), (oe = Qi);
							break;
						case "focusout":
							(ue = "blur"), (oe = Qi);
							break;
						case "beforeblur":
						case "afterblur":
							oe = Qi;
							break;
						case "click":
							if (n.button === 2) break e;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							oe = $c;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							oe = mf;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							oe = Cf;
							break;
						case ou:
						case cu:
						case uu:
							oe = xf;
							break;
						case du:
							oe = Tf;
							break;
						case "scroll":
							oe = df;
							break;
						case "wheel":
							oe = Rf;
							break;
						case "copy":
						case "cut":
						case "paste":
							oe = yf;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							oe = Wc;
					}
					var de = (r & 4) !== 0,
						Ve = !de && t === "scroll",
						L = de ? (H !== null ? H + "Capture" : null) : H;
					de = [];
					for (var P = M, O; P !== null; ) {
						O = P;
						var te = O.stateNode;
						if (
							(O.tag === 5 &&
								te !== null &&
								((O = te),
								L !== null &&
									((te = tn(P, L)), te != null && de.push(jn(P, te, O)))),
							Ve)
						)
							break;
						P = P.return;
					}
					0 < de.length &&
						((H = new oe(H, ue, null, n, K)),
						Z.push({ event: H, listeners: de }));
				}
			}
			if ((r & 7) === 0) {
				e: {
					if (
						((H = t === "mouseover" || t === "pointerover"),
						(oe = t === "mouseout" || t === "pointerout"),
						H &&
							n !== Li &&
							(ue = n.relatedTarget || n.fromElement) &&
							(Ur(ue) || ue[Qt]))
					)
						break e;
					if (
						(oe || H) &&
						((H =
							K.window === K
								? K
								: (H = K.ownerDocument)
								? H.defaultView || H.parentWindow
								: window),
						oe
							? ((ue = n.relatedTarget || n.toElement),
							  (oe = M),
							  (ue = ue ? Ur(ue) : null),
							  ue !== null &&
									((Ve = Dr(ue)),
									ue !== Ve || (ue.tag !== 5 && ue.tag !== 6)) &&
									(ue = null))
							: ((oe = null), (ue = M)),
						oe !== ue)
					) {
						if (
							((de = $c),
							(te = "onMouseLeave"),
							(L = "onMouseEnter"),
							(P = "mouse"),
							(t === "pointerout" || t === "pointerover") &&
								((de = Wc),
								(te = "onPointerLeave"),
								(L = "onPointerEnter"),
								(P = "pointer")),
							(Ve = oe == null ? H : gs(oe)),
							(O = ue == null ? H : gs(ue)),
							(H = new de(te, P + "leave", oe, n, K)),
							(H.target = Ve),
							(H.relatedTarget = O),
							(te = null),
							Ur(K) === M &&
								((de = new de(L, P + "enter", ue, n, K)),
								(de.target = O),
								(de.relatedTarget = Ve),
								(te = de)),
							(Ve = te),
							oe && ue)
						)
							t: {
								for (de = oe, L = ue, P = 0, O = de; O; O = ps(O)) P++;
								for (O = 0, te = L; te; te = ps(te)) O++;
								for (; 0 < P - O; ) (de = ps(de)), P--;
								for (; 0 < O - P; ) (L = ps(L)), O--;
								for (; P--; ) {
									if (de === L || (L !== null && de === L.alternate)) break t;
									(de = ps(de)), (L = ps(L));
								}
								de = null;
							}
						else de = null;
						oe !== null && gu(Z, H, oe, de, !1),
							ue !== null && Ve !== null && gu(Z, Ve, ue, de, !0);
					}
				}
				e: {
					if (
						((H = M ? gs(M) : window),
						(oe = H.nodeName && H.nodeName.toLowerCase()),
						oe === "select" || (oe === "input" && H.type === "file"))
					)
						var me = Uf;
					else if (Jc(H))
						if (Xc) me = Vf;
						else {
							me = Bf;
							var ge = Ff;
						}
					else
						(oe = H.nodeName) &&
							oe.toLowerCase() === "input" &&
							(H.type === "checkbox" || H.type === "radio") &&
							(me = $f);
					if (me && (me = me(t, M))) {
						Qc(Z, me, n, K);
						break e;
					}
					ge && ge(t, H, M),
						t === "focusout" &&
							(ge = H._wrapperState) &&
							ge.controlled &&
							H.type === "number" &&
							W(H, "number", H.value);
				}
				switch (((ge = M ? gs(M) : window), t)) {
					case "focusin":
						(Jc(ge) || ge.contentEditable === "true") &&
							((ms = ge), (sl = M), (yn = null));
						break;
					case "focusout":
						yn = sl = ms = null;
						break;
					case "mousedown":
						nl = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						(nl = !1), iu(Z, n, K);
						break;
					case "selectionchange":
						if (Hf) break;
					case "keydown":
					case "keyup":
						iu(Z, n, K);
				}
				var ye;
				if (Zi)
					e: {
						switch (t) {
							case "compositionstart":
								var je = "onCompositionStart";
								break e;
							case "compositionend":
								je = "onCompositionEnd";
								break e;
							case "compositionupdate":
								je = "onCompositionUpdate";
								break e;
						}
						je = void 0;
					}
				else
					hs
						? Kc(t, n) && (je = "onCompositionEnd")
						: t === "keydown" &&
						  n.keyCode === 229 &&
						  (je = "onCompositionStart");
				je &&
					(qc &&
						n.locale !== "ko" &&
						(hs || je !== "onCompositionStart"
							? je === "onCompositionEnd" && hs && (ye = Fc())
							: ((fr = K),
							  (Gi = "value" in fr ? fr.value : fr.textContent),
							  (hs = !0))),
					(ge = ja(M, je)),
					0 < ge.length &&
						((je = new Vc(je, t, null, n, K)),
						Z.push({ event: je, listeners: ge }),
						ye
							? (je.data = ye)
							: ((ye = Yc(n)), ye !== null && (je.data = ye)))),
					(ye = Of ? If(t, n) : zf(t, n)) &&
						((M = ja(M, "onBeforeInput")),
						0 < M.length &&
							((K = new Vc("onBeforeInput", "beforeinput", null, n, K)),
							Z.push({ event: K, listeners: M }),
							(K.data = ye)));
			}
			pu(Z, r);
		});
	}
	function jn(t, r, n) {
		return { instance: t, listener: r, currentTarget: n };
	}
	function ja(t, r) {
		for (var n = r + "Capture", o = []; t !== null; ) {
			var d = t,
				m = d.stateNode;
			d.tag === 5 &&
				m !== null &&
				((d = m),
				(m = tn(t, n)),
				m != null && o.unshift(jn(t, m, d)),
				(m = tn(t, r)),
				m != null && o.push(jn(t, m, d))),
				(t = t.return);
		}
		return o;
	}
	function ps(t) {
		if (t === null) return null;
		do t = t.return;
		while (t && t.tag !== 5);
		return t || null;
	}
	function gu(t, r, n, o, d) {
		for (var m = r._reactName, x = []; n !== null && n !== o; ) {
			var b = n,
				E = b.alternate,
				M = b.stateNode;
			if (E !== null && E === o) break;
			b.tag === 5 &&
				M !== null &&
				((b = M),
				d
					? ((E = tn(n, m)), E != null && x.unshift(jn(n, E, b)))
					: d || ((E = tn(n, m)), E != null && x.push(jn(n, E, b)))),
				(n = n.return);
		}
		x.length !== 0 && t.push({ event: r, listeners: x });
	}
	var Jf = /\r\n?/g,
		Qf = /\u0000|\uFFFD/g;
	function yu(t) {
		return (typeof t == "string" ? t : "" + t)
			.replace(
				Jf,
				`
`,
			)
			.replace(Qf, "");
	}
	function wa(t, r, n) {
		if (((r = yu(r)), yu(t) !== r && n)) throw Error(a(425));
	}
	function Na() {}
	var ul = null,
		dl = null;
	function hl(t, r) {
		return (
			t === "textarea" ||
			t === "noscript" ||
			typeof r.children == "string" ||
			typeof r.children == "number" ||
			(typeof r.dangerouslySetInnerHTML == "object" &&
				r.dangerouslySetInnerHTML !== null &&
				r.dangerouslySetInnerHTML.__html != null)
		);
	}
	var ml = typeof setTimeout == "function" ? setTimeout : void 0,
		Xf = typeof clearTimeout == "function" ? clearTimeout : void 0,
		vu = typeof Promise == "function" ? Promise : void 0,
		Zf =
			typeof queueMicrotask == "function"
				? queueMicrotask
				: typeof vu < "u"
				? function (t) {
						return vu.resolve(null).then(t).catch(ep);
				  }
				: ml;
	function ep(t) {
		setTimeout(function () {
			throw t;
		});
	}
	function fl(t, r) {
		var n = r,
			o = 0;
		do {
			var d = n.nextSibling;
			if ((t.removeChild(n), d && d.nodeType === 8))
				if (((n = d.data), n === "/$")) {
					if (o === 0) {
						t.removeChild(d), dn(r);
						return;
					}
					o--;
				} else (n !== "$" && n !== "$?" && n !== "$!") || o++;
			n = d;
		} while (n);
		dn(r);
	}
	function xr(t) {
		for (; t != null; t = t.nextSibling) {
			var r = t.nodeType;
			if (r === 1 || r === 3) break;
			if (r === 8) {
				if (((r = t.data), r === "$" || r === "$!" || r === "$?")) break;
				if (r === "/$") return null;
			}
		}
		return t;
	}
	function bu(t) {
		t = t.previousSibling;
		for (var r = 0; t; ) {
			if (t.nodeType === 8) {
				var n = t.data;
				if (n === "$" || n === "$!" || n === "$?") {
					if (r === 0) return t;
					r--;
				} else n === "/$" && r++;
			}
			t = t.previousSibling;
		}
		return null;
	}
	var xs = Math.random().toString(36).slice(2),
		qt = "__reactFiber$" + xs,
		wn = "__reactProps$" + xs,
		Qt = "__reactContainer$" + xs,
		pl = "__reactEvents$" + xs,
		tp = "__reactListeners$" + xs,
		rp = "__reactHandles$" + xs;
	function Ur(t) {
		var r = t[qt];
		if (r) return r;
		for (var n = t.parentNode; n; ) {
			if ((r = n[Qt] || n[qt])) {
				if (
					((n = r.alternate),
					r.child !== null || (n !== null && n.child !== null))
				)
					for (t = bu(t); t !== null; ) {
						if ((n = t[qt])) return n;
						t = bu(t);
					}
				return r;
			}
			(t = n), (n = t.parentNode);
		}
		return null;
	}
	function Nn(t) {
		return (
			(t = t[qt] || t[Qt]),
			!t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3)
				? null
				: t
		);
	}
	function gs(t) {
		if (t.tag === 5 || t.tag === 6) return t.stateNode;
		throw Error(a(33));
	}
	function ka(t) {
		return t[wn] || null;
	}
	var xl = [],
		ys = -1;
	function gr(t) {
		return { current: t };
	}
	function ze(t) {
		0 > ys || ((t.current = xl[ys]), (xl[ys] = null), ys--);
	}
	function Le(t, r) {
		ys++, (xl[ys] = t.current), (t.current = r);
	}
	var yr = {},
		nt = gr(yr),
		dt = gr(!1),
		Fr = yr;
	function vs(t, r) {
		var n = t.type.contextTypes;
		if (!n) return yr;
		var o = t.stateNode;
		if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
			return o.__reactInternalMemoizedMaskedChildContext;
		var d = {},
			m;
		for (m in n) d[m] = r[m];
		return (
			o &&
				((t = t.stateNode),
				(t.__reactInternalMemoizedUnmaskedChildContext = r),
				(t.__reactInternalMemoizedMaskedChildContext = d)),
			d
		);
	}
	function ht(t) {
		return (t = t.childContextTypes), t != null;
	}
	function Sa() {
		ze(dt), ze(nt);
	}
	function ju(t, r, n) {
		if (nt.current !== yr) throw Error(a(168));
		Le(nt, r), Le(dt, n);
	}
	function wu(t, r, n) {
		var o = t.stateNode;
		if (((r = r.childContextTypes), typeof o.getChildContext != "function"))
			return n;
		o = o.getChildContext();
		for (var d in o) if (!(d in r)) throw Error(a(108, F(t) || "Unknown", d));
		return B({}, n, o);
	}
	function Ea(t) {
		return (
			(t =
				((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) ||
				yr),
			(Fr = nt.current),
			Le(nt, t),
			Le(dt, dt.current),
			!0
		);
	}
	function Nu(t, r, n) {
		var o = t.stateNode;
		if (!o) throw Error(a(169));
		n
			? ((t = wu(t, r, Fr)),
			  (o.__reactInternalMemoizedMergedChildContext = t),
			  ze(dt),
			  ze(nt),
			  Le(nt, t))
			: ze(dt),
			Le(dt, n);
	}
	var Xt = null,
		_a = !1,
		gl = !1;
	function ku(t) {
		Xt === null ? (Xt = [t]) : Xt.push(t);
	}
	function sp(t) {
		(_a = !0), ku(t);
	}
	function vr() {
		if (!gl && Xt !== null) {
			gl = !0;
			var t = 0,
				r = Re;
			try {
				var n = Xt;
				for (Re = 1; t < n.length; t++) {
					var o = n[t];
					do o = o(!0);
					while (o !== null);
				}
				(Xt = null), (_a = !1);
			} catch (d) {
				throw (Xt !== null && (Xt = Xt.slice(t + 1)), Ec(Ui, vr), d);
			} finally {
				(Re = r), (gl = !1);
			}
		}
		return null;
	}
	var bs = [],
		js = 0,
		Ca = null,
		Pa = 0,
		kt = [],
		St = 0,
		Br = null,
		Zt = 1,
		er = "";
	function $r(t, r) {
		(bs[js++] = Pa), (bs[js++] = Ca), (Ca = t), (Pa = r);
	}
	function Su(t, r, n) {
		(kt[St++] = Zt), (kt[St++] = er), (kt[St++] = Br), (Br = t);
		var o = Zt;
		t = er;
		var d = 32 - At(o) - 1;
		(o &= ~(1 << d)), (n += 1);
		var m = 32 - At(r) + d;
		if (30 < m) {
			var x = d - (d % 5);
			(m = (o & ((1 << x) - 1)).toString(32)),
				(o >>= x),
				(d -= x),
				(Zt = (1 << (32 - At(r) + d)) | (n << d) | o),
				(er = m + t);
		} else (Zt = (1 << m) | (n << d) | o), (er = t);
	}
	function yl(t) {
		t.return !== null && ($r(t, 1), Su(t, 1, 0));
	}
	function vl(t) {
		for (; t === Ca; )
			(Ca = bs[--js]), (bs[js] = null), (Pa = bs[--js]), (bs[js] = null);
		for (; t === Br; )
			(Br = kt[--St]),
				(kt[St] = null),
				(er = kt[--St]),
				(kt[St] = null),
				(Zt = kt[--St]),
				(kt[St] = null);
	}
	var bt = null,
		jt = null,
		Me = !1,
		Lt = null;
	function Eu(t, r) {
		var n = Pt(5, null, null, 0);
		(n.elementType = "DELETED"),
			(n.stateNode = r),
			(n.return = t),
			(r = t.deletions),
			r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
	}
	function _u(t, r) {
		switch (t.tag) {
			case 5:
				var n = t.type;
				return (
					(r =
						r.nodeType !== 1 || n.toLowerCase() !== r.nodeName.toLowerCase()
							? null
							: r),
					r !== null
						? ((t.stateNode = r), (bt = t), (jt = xr(r.firstChild)), !0)
						: !1
				);
			case 6:
				return (
					(r = t.pendingProps === "" || r.nodeType !== 3 ? null : r),
					r !== null ? ((t.stateNode = r), (bt = t), (jt = null), !0) : !1
				);
			case 13:
				return (
					(r = r.nodeType !== 8 ? null : r),
					r !== null
						? ((n = Br !== null ? { id: Zt, overflow: er } : null),
						  (t.memoizedState = {
								dehydrated: r,
								treeContext: n,
								retryLane: 1073741824,
						  }),
						  (n = Pt(18, null, null, 0)),
						  (n.stateNode = r),
						  (n.return = t),
						  (t.child = n),
						  (bt = t),
						  (jt = null),
						  !0)
						: !1
				);
			default:
				return !1;
		}
	}
	function bl(t) {
		return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
	}
	function jl(t) {
		if (Me) {
			var r = jt;
			if (r) {
				var n = r;
				if (!_u(t, r)) {
					if (bl(t)) throw Error(a(418));
					r = xr(n.nextSibling);
					var o = bt;
					r && _u(t, r)
						? Eu(o, n)
						: ((t.flags = (t.flags & -4097) | 2), (Me = !1), (bt = t));
				}
			} else {
				if (bl(t)) throw Error(a(418));
				(t.flags = (t.flags & -4097) | 2), (Me = !1), (bt = t);
			}
		}
	}
	function Cu(t) {
		for (
			t = t.return;
			t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;

		)
			t = t.return;
		bt = t;
	}
	function Ta(t) {
		if (t !== bt) return !1;
		if (!Me) return Cu(t), (Me = !0), !1;
		var r;
		if (
			((r = t.tag !== 3) &&
				!(r = t.tag !== 5) &&
				((r = t.type),
				(r = r !== "head" && r !== "body" && !hl(t.type, t.memoizedProps))),
			r && (r = jt))
		) {
			if (bl(t)) throw (Pu(), Error(a(418)));
			for (; r; ) Eu(t, r), (r = xr(r.nextSibling));
		}
		if ((Cu(t), t.tag === 13)) {
			if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
				throw Error(a(317));
			e: {
				for (t = t.nextSibling, r = 0; t; ) {
					if (t.nodeType === 8) {
						var n = t.data;
						if (n === "/$") {
							if (r === 0) {
								jt = xr(t.nextSibling);
								break e;
							}
							r--;
						} else (n !== "$" && n !== "$!" && n !== "$?") || r++;
					}
					t = t.nextSibling;
				}
				jt = null;
			}
		} else jt = bt ? xr(t.stateNode.nextSibling) : null;
		return !0;
	}
	function Pu() {
		for (var t = jt; t; ) t = xr(t.nextSibling);
	}
	function ws() {
		(jt = bt = null), (Me = !1);
	}
	function wl(t) {
		Lt === null ? (Lt = [t]) : Lt.push(t);
	}
	var np = G.ReactCurrentBatchConfig;
	function kn(t, r, n) {
		if (
			((t = n.ref),
			t !== null && typeof t != "function" && typeof t != "object")
		) {
			if (n._owner) {
				if (((n = n._owner), n)) {
					if (n.tag !== 1) throw Error(a(309));
					var o = n.stateNode;
				}
				if (!o) throw Error(a(147, t));
				var d = o,
					m = "" + t;
				return r !== null &&
					r.ref !== null &&
					typeof r.ref == "function" &&
					r.ref._stringRef === m
					? r.ref
					: ((r = function (x) {
							var b = d.refs;
							x === null ? delete b[m] : (b[m] = x);
					  }),
					  (r._stringRef = m),
					  r);
			}
			if (typeof t != "string") throw Error(a(284));
			if (!n._owner) throw Error(a(290, t));
		}
		return t;
	}
	function Aa(t, r) {
		throw (
			((t = Object.prototype.toString.call(r)),
			Error(
				a(
					31,
					t === "[object Object]"
						? "object with keys {" + Object.keys(r).join(", ") + "}"
						: t,
				),
			))
		);
	}
	function Tu(t) {
		var r = t._init;
		return r(t._payload);
	}
	function Au(t) {
		function r(L, P) {
			if (t) {
				var O = L.deletions;
				O === null ? ((L.deletions = [P]), (L.flags |= 16)) : O.push(P);
			}
		}
		function n(L, P) {
			if (!t) return null;
			for (; P !== null; ) r(L, P), (P = P.sibling);
			return null;
		}
		function o(L, P) {
			for (L = new Map(); P !== null; )
				P.key !== null ? L.set(P.key, P) : L.set(P.index, P), (P = P.sibling);
			return L;
		}
		function d(L, P) {
			return (L = _r(L, P)), (L.index = 0), (L.sibling = null), L;
		}
		function m(L, P, O) {
			return (
				(L.index = O),
				t
					? ((O = L.alternate),
					  O !== null
							? ((O = O.index), O < P ? ((L.flags |= 2), P) : O)
							: ((L.flags |= 2), P))
					: ((L.flags |= 1048576), P)
			);
		}
		function x(L) {
			return t && L.alternate === null && (L.flags |= 2), L;
		}
		function b(L, P, O, te) {
			return P === null || P.tag !== 6
				? ((P = fo(O, L.mode, te)), (P.return = L), P)
				: ((P = d(P, O)), (P.return = L), P);
		}
		function E(L, P, O, te) {
			var me = O.type;
			return me === le
				? K(L, P, O.props.children, te, O.key)
				: P !== null &&
				  (P.elementType === me ||
						(typeof me == "object" &&
							me !== null &&
							me.$$typeof === re &&
							Tu(me) === P.type))
				? ((te = d(P, O.props)), (te.ref = kn(L, P, O)), (te.return = L), te)
				: ((te = ti(O.type, O.key, O.props, null, L.mode, te)),
				  (te.ref = kn(L, P, O)),
				  (te.return = L),
				  te);
		}
		function M(L, P, O, te) {
			return P === null ||
				P.tag !== 4 ||
				P.stateNode.containerInfo !== O.containerInfo ||
				P.stateNode.implementation !== O.implementation
				? ((P = po(O, L.mode, te)), (P.return = L), P)
				: ((P = d(P, O.children || [])), (P.return = L), P);
		}
		function K(L, P, O, te, me) {
			return P === null || P.tag !== 7
				? ((P = Jr(O, L.mode, te, me)), (P.return = L), P)
				: ((P = d(P, O)), (P.return = L), P);
		}
		function Z(L, P, O) {
			if ((typeof P == "string" && P !== "") || typeof P == "number")
				return (P = fo("" + P, L.mode, O)), (P.return = L), P;
			if (typeof P == "object" && P !== null) {
				switch (P.$$typeof) {
					case X:
						return (
							(O = ti(P.type, P.key, P.props, null, L.mode, O)),
							(O.ref = kn(L, null, P)),
							(O.return = L),
							O
						);
					case ne:
						return (P = po(P, L.mode, O)), (P.return = L), P;
					case re:
						var te = P._init;
						return Z(L, te(P._payload), O);
				}
				if (pe(P) || V(P))
					return (P = Jr(P, L.mode, O, null)), (P.return = L), P;
				Aa(L, P);
			}
			return null;
		}
		function H(L, P, O, te) {
			var me = P !== null ? P.key : null;
			if ((typeof O == "string" && O !== "") || typeof O == "number")
				return me !== null ? null : b(L, P, "" + O, te);
			if (typeof O == "object" && O !== null) {
				switch (O.$$typeof) {
					case X:
						return O.key === me ? E(L, P, O, te) : null;
					case ne:
						return O.key === me ? M(L, P, O, te) : null;
					case re:
						return (me = O._init), H(L, P, me(O._payload), te);
				}
				if (pe(O) || V(O)) return me !== null ? null : K(L, P, O, te, null);
				Aa(L, O);
			}
			return null;
		}
		function oe(L, P, O, te, me) {
			if ((typeof te == "string" && te !== "") || typeof te == "number")
				return (L = L.get(O) || null), b(P, L, "" + te, me);
			if (typeof te == "object" && te !== null) {
				switch (te.$$typeof) {
					case X:
						return (
							(L = L.get(te.key === null ? O : te.key) || null), E(P, L, te, me)
						);
					case ne:
						return (
							(L = L.get(te.key === null ? O : te.key) || null), M(P, L, te, me)
						);
					case re:
						var ge = te._init;
						return oe(L, P, O, ge(te._payload), me);
				}
				if (pe(te) || V(te))
					return (L = L.get(O) || null), K(P, L, te, me, null);
				Aa(P, te);
			}
			return null;
		}
		function ue(L, P, O, te) {
			for (
				var me = null, ge = null, ye = P, je = (P = 0), Qe = null;
				ye !== null && je < O.length;
				je++
			) {
				ye.index > je ? ((Qe = ye), (ye = null)) : (Qe = ye.sibling);
				var Ae = H(L, ye, O[je], te);
				if (Ae === null) {
					ye === null && (ye = Qe);
					break;
				}
				t && ye && Ae.alternate === null && r(L, ye),
					(P = m(Ae, P, je)),
					ge === null ? (me = Ae) : (ge.sibling = Ae),
					(ge = Ae),
					(ye = Qe);
			}
			if (je === O.length) return n(L, ye), Me && $r(L, je), me;
			if (ye === null) {
				for (; je < O.length; je++)
					(ye = Z(L, O[je], te)),
						ye !== null &&
							((P = m(ye, P, je)),
							ge === null ? (me = ye) : (ge.sibling = ye),
							(ge = ye));
				return Me && $r(L, je), me;
			}
			for (ye = o(L, ye); je < O.length; je++)
				(Qe = oe(ye, L, je, O[je], te)),
					Qe !== null &&
						(t &&
							Qe.alternate !== null &&
							ye.delete(Qe.key === null ? je : Qe.key),
						(P = m(Qe, P, je)),
						ge === null ? (me = Qe) : (ge.sibling = Qe),
						(ge = Qe));
			return (
				t &&
					ye.forEach(function (Cr) {
						return r(L, Cr);
					}),
				Me && $r(L, je),
				me
			);
		}
		function de(L, P, O, te) {
			var me = V(O);
			if (typeof me != "function") throw Error(a(150));
			if (((O = me.call(O)), O == null)) throw Error(a(151));
			for (
				var ge = (me = null), ye = P, je = (P = 0), Qe = null, Ae = O.next();
				ye !== null && !Ae.done;
				je++, Ae = O.next()
			) {
				ye.index > je ? ((Qe = ye), (ye = null)) : (Qe = ye.sibling);
				var Cr = H(L, ye, Ae.value, te);
				if (Cr === null) {
					ye === null && (ye = Qe);
					break;
				}
				t && ye && Cr.alternate === null && r(L, ye),
					(P = m(Cr, P, je)),
					ge === null ? (me = Cr) : (ge.sibling = Cr),
					(ge = Cr),
					(ye = Qe);
			}
			if (Ae.done) return n(L, ye), Me && $r(L, je), me;
			if (ye === null) {
				for (; !Ae.done; je++, Ae = O.next())
					(Ae = Z(L, Ae.value, te)),
						Ae !== null &&
							((P = m(Ae, P, je)),
							ge === null ? (me = Ae) : (ge.sibling = Ae),
							(ge = Ae));
				return Me && $r(L, je), me;
			}
			for (ye = o(L, ye); !Ae.done; je++, Ae = O.next())
				(Ae = oe(ye, L, je, Ae.value, te)),
					Ae !== null &&
						(t &&
							Ae.alternate !== null &&
							ye.delete(Ae.key === null ? je : Ae.key),
						(P = m(Ae, P, je)),
						ge === null ? (me = Ae) : (ge.sibling = Ae),
						(ge = Ae));
			return (
				t &&
					ye.forEach(function (Mp) {
						return r(L, Mp);
					}),
				Me && $r(L, je),
				me
			);
		}
		function Ve(L, P, O, te) {
			if (
				(typeof O == "object" &&
					O !== null &&
					O.type === le &&
					O.key === null &&
					(O = O.props.children),
				typeof O == "object" && O !== null)
			) {
				switch (O.$$typeof) {
					case X:
						e: {
							for (var me = O.key, ge = P; ge !== null; ) {
								if (ge.key === me) {
									if (((me = O.type), me === le)) {
										if (ge.tag === 7) {
											n(L, ge.sibling),
												(P = d(ge, O.props.children)),
												(P.return = L),
												(L = P);
											break e;
										}
									} else if (
										ge.elementType === me ||
										(typeof me == "object" &&
											me !== null &&
											me.$$typeof === re &&
											Tu(me) === ge.type)
									) {
										n(L, ge.sibling),
											(P = d(ge, O.props)),
											(P.ref = kn(L, ge, O)),
											(P.return = L),
											(L = P);
										break e;
									}
									n(L, ge);
									break;
								} else r(L, ge);
								ge = ge.sibling;
							}
							O.type === le
								? ((P = Jr(O.props.children, L.mode, te, O.key)),
								  (P.return = L),
								  (L = P))
								: ((te = ti(O.type, O.key, O.props, null, L.mode, te)),
								  (te.ref = kn(L, P, O)),
								  (te.return = L),
								  (L = te));
						}
						return x(L);
					case ne:
						e: {
							for (ge = O.key; P !== null; ) {
								if (P.key === ge)
									if (
										P.tag === 4 &&
										P.stateNode.containerInfo === O.containerInfo &&
										P.stateNode.implementation === O.implementation
									) {
										n(L, P.sibling),
											(P = d(P, O.children || [])),
											(P.return = L),
											(L = P);
										break e;
									} else {
										n(L, P);
										break;
									}
								else r(L, P);
								P = P.sibling;
							}
							(P = po(O, L.mode, te)), (P.return = L), (L = P);
						}
						return x(L);
					case re:
						return (ge = O._init), Ve(L, P, ge(O._payload), te);
				}
				if (pe(O)) return ue(L, P, O, te);
				if (V(O)) return de(L, P, O, te);
				Aa(L, O);
			}
			return (typeof O == "string" && O !== "") || typeof O == "number"
				? ((O = "" + O),
				  P !== null && P.tag === 6
						? (n(L, P.sibling), (P = d(P, O)), (P.return = L), (L = P))
						: (n(L, P), (P = fo(O, L.mode, te)), (P.return = L), (L = P)),
				  x(L))
				: n(L, P);
		}
		return Ve;
	}
	var Ns = Au(!0),
		Ru = Au(!1),
		Ra = gr(null),
		La = null,
		ks = null,
		Nl = null;
	function kl() {
		Nl = ks = La = null;
	}
	function Sl(t) {
		var r = Ra.current;
		ze(Ra), (t._currentValue = r);
	}
	function El(t, r, n) {
		for (; t !== null; ) {
			var o = t.alternate;
			if (
				((t.childLanes & r) !== r
					? ((t.childLanes |= r), o !== null && (o.childLanes |= r))
					: o !== null && (o.childLanes & r) !== r && (o.childLanes |= r),
				t === n)
			)
				break;
			t = t.return;
		}
	}
	function Ss(t, r) {
		(La = t),
			(Nl = ks = null),
			(t = t.dependencies),
			t !== null &&
				t.firstContext !== null &&
				((t.lanes & r) !== 0 && (mt = !0), (t.firstContext = null));
	}
	function Et(t) {
		var r = t._currentValue;
		if (Nl !== t)
			if (((t = { context: t, memoizedValue: r, next: null }), ks === null)) {
				if (La === null) throw Error(a(308));
				(ks = t), (La.dependencies = { lanes: 0, firstContext: t });
			} else ks = ks.next = t;
		return r;
	}
	var Vr = null;
	function _l(t) {
		Vr === null ? (Vr = [t]) : Vr.push(t);
	}
	function Lu(t, r, n, o) {
		var d = r.interleaved;
		return (
			d === null ? ((n.next = n), _l(r)) : ((n.next = d.next), (d.next = n)),
			(r.interleaved = n),
			tr(t, o)
		);
	}
	function tr(t, r) {
		t.lanes |= r;
		var n = t.alternate;
		for (n !== null && (n.lanes |= r), n = t, t = t.return; t !== null; )
			(t.childLanes |= r),
				(n = t.alternate),
				n !== null && (n.childLanes |= r),
				(n = t),
				(t = t.return);
		return n.tag === 3 ? n.stateNode : null;
	}
	var br = !1;
	function Cl(t) {
		t.updateQueue = {
			baseState: t.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, interleaved: null, lanes: 0 },
			effects: null,
		};
	}
	function Ou(t, r) {
		(t = t.updateQueue),
			r.updateQueue === t &&
				(r.updateQueue = {
					baseState: t.baseState,
					firstBaseUpdate: t.firstBaseUpdate,
					lastBaseUpdate: t.lastBaseUpdate,
					shared: t.shared,
					effects: t.effects,
				});
	}
	function rr(t, r) {
		return {
			eventTime: t,
			lane: r,
			tag: 0,
			payload: null,
			callback: null,
			next: null,
		};
	}
	function jr(t, r, n) {
		var o = t.updateQueue;
		if (o === null) return null;
		if (((o = o.shared), (Te & 2) !== 0)) {
			var d = o.pending;
			return (
				d === null ? (r.next = r) : ((r.next = d.next), (d.next = r)),
				(o.pending = r),
				tr(t, n)
			);
		}
		return (
			(d = o.interleaved),
			d === null ? ((r.next = r), _l(o)) : ((r.next = d.next), (d.next = r)),
			(o.interleaved = r),
			tr(t, n)
		);
	}
	function Oa(t, r, n) {
		if (
			((r = r.updateQueue), r !== null && ((r = r.shared), (n & 4194240) !== 0))
		) {
			var o = r.lanes;
			(o &= t.pendingLanes), (n |= o), (r.lanes = n), $i(t, n);
		}
	}
	function Iu(t, r) {
		var n = t.updateQueue,
			o = t.alternate;
		if (o !== null && ((o = o.updateQueue), n === o)) {
			var d = null,
				m = null;
			if (((n = n.firstBaseUpdate), n !== null)) {
				do {
					var x = {
						eventTime: n.eventTime,
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: n.callback,
						next: null,
					};
					m === null ? (d = m = x) : (m = m.next = x), (n = n.next);
				} while (n !== null);
				m === null ? (d = m = r) : (m = m.next = r);
			} else d = m = r;
			(n = {
				baseState: o.baseState,
				firstBaseUpdate: d,
				lastBaseUpdate: m,
				shared: o.shared,
				effects: o.effects,
			}),
				(t.updateQueue = n);
			return;
		}
		(t = n.lastBaseUpdate),
			t === null ? (n.firstBaseUpdate = r) : (t.next = r),
			(n.lastBaseUpdate = r);
	}
	function Ia(t, r, n, o) {
		var d = t.updateQueue;
		br = !1;
		var m = d.firstBaseUpdate,
			x = d.lastBaseUpdate,
			b = d.shared.pending;
		if (b !== null) {
			d.shared.pending = null;
			var E = b,
				M = E.next;
			(E.next = null), x === null ? (m = M) : (x.next = M), (x = E);
			var K = t.alternate;
			K !== null &&
				((K = K.updateQueue),
				(b = K.lastBaseUpdate),
				b !== x &&
					(b === null ? (K.firstBaseUpdate = M) : (b.next = M),
					(K.lastBaseUpdate = E)));
		}
		if (m !== null) {
			var Z = d.baseState;
			(x = 0), (K = M = E = null), (b = m);
			do {
				var H = b.lane,
					oe = b.eventTime;
				if ((o & H) === H) {
					K !== null &&
						(K = K.next =
							{
								eventTime: oe,
								lane: 0,
								tag: b.tag,
								payload: b.payload,
								callback: b.callback,
								next: null,
							});
					e: {
						var ue = t,
							de = b;
						switch (((H = r), (oe = n), de.tag)) {
							case 1:
								if (((ue = de.payload), typeof ue == "function")) {
									Z = ue.call(oe, Z, H);
									break e;
								}
								Z = ue;
								break e;
							case 3:
								ue.flags = (ue.flags & -65537) | 128;
							case 0:
								if (
									((ue = de.payload),
									(H = typeof ue == "function" ? ue.call(oe, Z, H) : ue),
									H == null)
								)
									break e;
								Z = B({}, Z, H);
								break e;
							case 2:
								br = !0;
						}
					}
					b.callback !== null &&
						b.lane !== 0 &&
						((t.flags |= 64),
						(H = d.effects),
						H === null ? (d.effects = [b]) : H.push(b));
				} else
					(oe = {
						eventTime: oe,
						lane: H,
						tag: b.tag,
						payload: b.payload,
						callback: b.callback,
						next: null,
					}),
						K === null ? ((M = K = oe), (E = Z)) : (K = K.next = oe),
						(x |= H);
				if (((b = b.next), b === null)) {
					if (((b = d.shared.pending), b === null)) break;
					(H = b),
						(b = H.next),
						(H.next = null),
						(d.lastBaseUpdate = H),
						(d.shared.pending = null);
				}
			} while (!0);
			if (
				(K === null && (E = Z),
				(d.baseState = E),
				(d.firstBaseUpdate = M),
				(d.lastBaseUpdate = K),
				(r = d.shared.interleaved),
				r !== null)
			) {
				d = r;
				do (x |= d.lane), (d = d.next);
				while (d !== r);
			} else m === null && (d.shared.lanes = 0);
			(Hr |= x), (t.lanes = x), (t.memoizedState = Z);
		}
	}
	function zu(t, r, n) {
		if (((t = r.effects), (r.effects = null), t !== null))
			for (r = 0; r < t.length; r++) {
				var o = t[r],
					d = o.callback;
				if (d !== null) {
					if (((o.callback = null), (o = n), typeof d != "function"))
						throw Error(a(191, d));
					d.call(o);
				}
			}
	}
	var Sn = {},
		Ht = gr(Sn),
		En = gr(Sn),
		_n = gr(Sn);
	function Wr(t) {
		if (t === Sn) throw Error(a(174));
		return t;
	}
	function Pl(t, r) {
		switch ((Le(_n, r), Le(En, t), Le(Ht, Sn), (t = r.nodeType), t)) {
			case 9:
			case 11:
				r = (r = r.documentElement) ? r.namespaceURI : Ti(null, "");
				break;
			default:
				(t = t === 8 ? r.parentNode : r),
					(r = t.namespaceURI || null),
					(t = t.tagName),
					(r = Ti(r, t));
		}
		ze(Ht), Le(Ht, r);
	}
	function Es() {
		ze(Ht), ze(En), ze(_n);
	}
	function Mu(t) {
		Wr(_n.current);
		var r = Wr(Ht.current),
			n = Ti(r, t.type);
		r !== n && (Le(En, t), Le(Ht, n));
	}
	function Tl(t) {
		En.current === t && (ze(Ht), ze(En));
	}
	var De = gr(0);
	function za(t) {
		for (var r = t; r !== null; ) {
			if (r.tag === 13) {
				var n = r.memoizedState;
				if (
					n !== null &&
					((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
				)
					return r;
			} else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
				if ((r.flags & 128) !== 0) return r;
			} else if (r.child !== null) {
				(r.child.return = r), (r = r.child);
				continue;
			}
			if (r === t) break;
			for (; r.sibling === null; ) {
				if (r.return === null || r.return === t) return null;
				r = r.return;
			}
			(r.sibling.return = r.return), (r = r.sibling);
		}
		return null;
	}
	var Al = [];
	function Rl() {
		for (var t = 0; t < Al.length; t++)
			Al[t]._workInProgressVersionPrimary = null;
		Al.length = 0;
	}
	var Ma = G.ReactCurrentDispatcher,
		Ll = G.ReactCurrentBatchConfig,
		qr = 0,
		Ue = null,
		Ge = null,
		Ye = null,
		Da = !1,
		Cn = !1,
		Pn = 0,
		ap = 0;
	function at() {
		throw Error(a(321));
	}
	function Ol(t, r) {
		if (r === null) return !1;
		for (var n = 0; n < r.length && n < t.length; n++)
			if (!Rt(t[n], r[n])) return !1;
		return !0;
	}
	function Il(t, r, n, o, d, m) {
		if (
			((qr = m),
			(Ue = r),
			(r.memoizedState = null),
			(r.updateQueue = null),
			(r.lanes = 0),
			(Ma.current = t === null || t.memoizedState === null ? cp : up),
			(t = n(o, d)),
			Cn)
		) {
			m = 0;
			do {
				if (((Cn = !1), (Pn = 0), 25 <= m)) throw Error(a(301));
				(m += 1),
					(Ye = Ge = null),
					(r.updateQueue = null),
					(Ma.current = dp),
					(t = n(o, d));
			} while (Cn);
		}
		if (
			((Ma.current = Ba),
			(r = Ge !== null && Ge.next !== null),
			(qr = 0),
			(Ye = Ge = Ue = null),
			(Da = !1),
			r)
		)
			throw Error(a(300));
		return t;
	}
	function zl() {
		var t = Pn !== 0;
		return (Pn = 0), t;
	}
	function Gt() {
		var t = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return Ye === null ? (Ue.memoizedState = Ye = t) : (Ye = Ye.next = t), Ye;
	}
	function _t() {
		if (Ge === null) {
			var t = Ue.alternate;
			t = t !== null ? t.memoizedState : null;
		} else t = Ge.next;
		var r = Ye === null ? Ue.memoizedState : Ye.next;
		if (r !== null) (Ye = r), (Ge = t);
		else {
			if (t === null) throw Error(a(310));
			(Ge = t),
				(t = {
					memoizedState: Ge.memoizedState,
					baseState: Ge.baseState,
					baseQueue: Ge.baseQueue,
					queue: Ge.queue,
					next: null,
				}),
				Ye === null ? (Ue.memoizedState = Ye = t) : (Ye = Ye.next = t);
		}
		return Ye;
	}
	function Tn(t, r) {
		return typeof r == "function" ? r(t) : r;
	}
	function Ml(t) {
		var r = _t(),
			n = r.queue;
		if (n === null) throw Error(a(311));
		n.lastRenderedReducer = t;
		var o = Ge,
			d = o.baseQueue,
			m = n.pending;
		if (m !== null) {
			if (d !== null) {
				var x = d.next;
				(d.next = m.next), (m.next = x);
			}
			(o.baseQueue = d = m), (n.pending = null);
		}
		if (d !== null) {
			(m = d.next), (o = o.baseState);
			var b = (x = null),
				E = null,
				M = m;
			do {
				var K = M.lane;
				if ((qr & K) === K)
					E !== null &&
						(E = E.next =
							{
								lane: 0,
								action: M.action,
								hasEagerState: M.hasEagerState,
								eagerState: M.eagerState,
								next: null,
							}),
						(o = M.hasEagerState ? M.eagerState : t(o, M.action));
				else {
					var Z = {
						lane: K,
						action: M.action,
						hasEagerState: M.hasEagerState,
						eagerState: M.eagerState,
						next: null,
					};
					E === null ? ((b = E = Z), (x = o)) : (E = E.next = Z),
						(Ue.lanes |= K),
						(Hr |= K);
				}
				M = M.next;
			} while (M !== null && M !== m);
			E === null ? (x = o) : (E.next = b),
				Rt(o, r.memoizedState) || (mt = !0),
				(r.memoizedState = o),
				(r.baseState = x),
				(r.baseQueue = E),
				(n.lastRenderedState = o);
		}
		if (((t = n.interleaved), t !== null)) {
			d = t;
			do (m = d.lane), (Ue.lanes |= m), (Hr |= m), (d = d.next);
			while (d !== t);
		} else d === null && (n.lanes = 0);
		return [r.memoizedState, n.dispatch];
	}
	function Dl(t) {
		var r = _t(),
			n = r.queue;
		if (n === null) throw Error(a(311));
		n.lastRenderedReducer = t;
		var o = n.dispatch,
			d = n.pending,
			m = r.memoizedState;
		if (d !== null) {
			n.pending = null;
			var x = (d = d.next);
			do (m = t(m, x.action)), (x = x.next);
			while (x !== d);
			Rt(m, r.memoizedState) || (mt = !0),
				(r.memoizedState = m),
				r.baseQueue === null && (r.baseState = m),
				(n.lastRenderedState = m);
		}
		return [m, o];
	}
	function Du() {}
	function Uu(t, r) {
		var n = Ue,
			o = _t(),
			d = r(),
			m = !Rt(o.memoizedState, d);
		if (
			(m && ((o.memoizedState = d), (mt = !0)),
			(o = o.queue),
			Ul($u.bind(null, n, o, t), [t]),
			o.getSnapshot !== r || m || (Ye !== null && Ye.memoizedState.tag & 1))
		) {
			if (
				((n.flags |= 2048),
				An(9, Bu.bind(null, n, o, d, r), void 0, null),
				Je === null)
			)
				throw Error(a(349));
			(qr & 30) !== 0 || Fu(n, r, d);
		}
		return d;
	}
	function Fu(t, r, n) {
		(t.flags |= 16384),
			(t = { getSnapshot: r, value: n }),
			(r = Ue.updateQueue),
			r === null
				? ((r = { lastEffect: null, stores: null }),
				  (Ue.updateQueue = r),
				  (r.stores = [t]))
				: ((n = r.stores), n === null ? (r.stores = [t]) : n.push(t));
	}
	function Bu(t, r, n, o) {
		(r.value = n), (r.getSnapshot = o), Vu(r) && Wu(t);
	}
	function $u(t, r, n) {
		return n(function () {
			Vu(r) && Wu(t);
		});
	}
	function Vu(t) {
		var r = t.getSnapshot;
		t = t.value;
		try {
			var n = r();
			return !Rt(t, n);
		} catch {
			return !0;
		}
	}
	function Wu(t) {
		var r = tr(t, 1);
		r !== null && Mt(r, t, 1, -1);
	}
	function qu(t) {
		var r = Gt();
		return (
			typeof t == "function" && (t = t()),
			(r.memoizedState = r.baseState = t),
			(t = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Tn,
				lastRenderedState: t,
			}),
			(r.queue = t),
			(t = t.dispatch = op.bind(null, Ue, t)),
			[r.memoizedState, t]
		);
	}
	function An(t, r, n, o) {
		return (
			(t = { tag: t, create: r, destroy: n, deps: o, next: null }),
			(r = Ue.updateQueue),
			r === null
				? ((r = { lastEffect: null, stores: null }),
				  (Ue.updateQueue = r),
				  (r.lastEffect = t.next = t))
				: ((n = r.lastEffect),
				  n === null
						? (r.lastEffect = t.next = t)
						: ((o = n.next), (n.next = t), (t.next = o), (r.lastEffect = t))),
			t
		);
	}
	function Hu() {
		return _t().memoizedState;
	}
	function Ua(t, r, n, o) {
		var d = Gt();
		(Ue.flags |= t),
			(d.memoizedState = An(1 | r, n, void 0, o === void 0 ? null : o));
	}
	function Fa(t, r, n, o) {
		var d = _t();
		o = o === void 0 ? null : o;
		var m = void 0;
		if (Ge !== null) {
			var x = Ge.memoizedState;
			if (((m = x.destroy), o !== null && Ol(o, x.deps))) {
				d.memoizedState = An(r, n, m, o);
				return;
			}
		}
		(Ue.flags |= t), (d.memoizedState = An(1 | r, n, m, o));
	}
	function Gu(t, r) {
		return Ua(8390656, 8, t, r);
	}
	function Ul(t, r) {
		return Fa(2048, 8, t, r);
	}
	function Ku(t, r) {
		return Fa(4, 2, t, r);
	}
	function Yu(t, r) {
		return Fa(4, 4, t, r);
	}
	function Ju(t, r) {
		if (typeof r == "function")
			return (
				(t = t()),
				r(t),
				function () {
					r(null);
				}
			);
		if (r != null)
			return (
				(t = t()),
				(r.current = t),
				function () {
					r.current = null;
				}
			);
	}
	function Qu(t, r, n) {
		return (
			(n = n != null ? n.concat([t]) : null), Fa(4, 4, Ju.bind(null, r, t), n)
		);
	}
	function Fl() {}
	function Xu(t, r) {
		var n = _t();
		r = r === void 0 ? null : r;
		var o = n.memoizedState;
		return o !== null && r !== null && Ol(r, o[1])
			? o[0]
			: ((n.memoizedState = [t, r]), t);
	}
	function Zu(t, r) {
		var n = _t();
		r = r === void 0 ? null : r;
		var o = n.memoizedState;
		return o !== null && r !== null && Ol(r, o[1])
			? o[0]
			: ((t = t()), (n.memoizedState = [t, r]), t);
	}
	function ed(t, r, n) {
		return (qr & 21) === 0
			? (t.baseState && ((t.baseState = !1), (mt = !0)), (t.memoizedState = n))
			: (Rt(n, r) ||
					((n = Tc()), (Ue.lanes |= n), (Hr |= n), (t.baseState = !0)),
			  r);
	}
	function ip(t, r) {
		var n = Re;
		(Re = n !== 0 && 4 > n ? n : 4), t(!0);
		var o = Ll.transition;
		Ll.transition = {};
		try {
			t(!1), r();
		} finally {
			(Re = n), (Ll.transition = o);
		}
	}
	function td() {
		return _t().memoizedState;
	}
	function lp(t, r, n) {
		var o = Sr(t);
		if (
			((n = {
				lane: o,
				action: n,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			rd(t))
		)
			sd(r, n);
		else if (((n = Lu(t, r, n, o)), n !== null)) {
			var d = ct();
			Mt(n, t, o, d), nd(n, r, o);
		}
	}
	function op(t, r, n) {
		var o = Sr(t),
			d = {
				lane: o,
				action: n,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			};
		if (rd(t)) sd(r, d);
		else {
			var m = t.alternate;
			if (
				t.lanes === 0 &&
				(m === null || m.lanes === 0) &&
				((m = r.lastRenderedReducer), m !== null)
			)
				try {
					var x = r.lastRenderedState,
						b = m(x, n);
					if (((d.hasEagerState = !0), (d.eagerState = b), Rt(b, x))) {
						var E = r.interleaved;
						E === null
							? ((d.next = d), _l(r))
							: ((d.next = E.next), (E.next = d)),
							(r.interleaved = d);
						return;
					}
				} catch {
				} finally {
				}
			(n = Lu(t, r, d, o)),
				n !== null && ((d = ct()), Mt(n, t, o, d), nd(n, r, o));
		}
	}
	function rd(t) {
		var r = t.alternate;
		return t === Ue || (r !== null && r === Ue);
	}
	function sd(t, r) {
		Cn = Da = !0;
		var n = t.pending;
		n === null ? (r.next = r) : ((r.next = n.next), (n.next = r)),
			(t.pending = r);
	}
	function nd(t, r, n) {
		if ((n & 4194240) !== 0) {
			var o = r.lanes;
			(o &= t.pendingLanes), (n |= o), (r.lanes = n), $i(t, n);
		}
	}
	var Ba = {
			readContext: Et,
			useCallback: at,
			useContext: at,
			useEffect: at,
			useImperativeHandle: at,
			useInsertionEffect: at,
			useLayoutEffect: at,
			useMemo: at,
			useReducer: at,
			useRef: at,
			useState: at,
			useDebugValue: at,
			useDeferredValue: at,
			useTransition: at,
			useMutableSource: at,
			useSyncExternalStore: at,
			useId: at,
			unstable_isNewReconciler: !1,
		},
		cp = {
			readContext: Et,
			useCallback: function (t, r) {
				return (Gt().memoizedState = [t, r === void 0 ? null : r]), t;
			},
			useContext: Et,
			useEffect: Gu,
			useImperativeHandle: function (t, r, n) {
				return (
					(n = n != null ? n.concat([t]) : null),
					Ua(4194308, 4, Ju.bind(null, r, t), n)
				);
			},
			useLayoutEffect: function (t, r) {
				return Ua(4194308, 4, t, r);
			},
			useInsertionEffect: function (t, r) {
				return Ua(4, 2, t, r);
			},
			useMemo: function (t, r) {
				var n = Gt();
				return (
					(r = r === void 0 ? null : r),
					(t = t()),
					(n.memoizedState = [t, r]),
					t
				);
			},
			useReducer: function (t, r, n) {
				var o = Gt();
				return (
					(r = n !== void 0 ? n(r) : r),
					(o.memoizedState = o.baseState = r),
					(t = {
						pending: null,
						interleaved: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: t,
						lastRenderedState: r,
					}),
					(o.queue = t),
					(t = t.dispatch = lp.bind(null, Ue, t)),
					[o.memoizedState, t]
				);
			},
			useRef: function (t) {
				var r = Gt();
				return (t = { current: t }), (r.memoizedState = t);
			},
			useState: qu,
			useDebugValue: Fl,
			useDeferredValue: function (t) {
				return (Gt().memoizedState = t);
			},
			useTransition: function () {
				var t = qu(!1),
					r = t[0];
				return (t = ip.bind(null, t[1])), (Gt().memoizedState = t), [r, t];
			},
			useMutableSource: function () {},
			useSyncExternalStore: function (t, r, n) {
				var o = Ue,
					d = Gt();
				if (Me) {
					if (n === void 0) throw Error(a(407));
					n = n();
				} else {
					if (((n = r()), Je === null)) throw Error(a(349));
					(qr & 30) !== 0 || Fu(o, r, n);
				}
				d.memoizedState = n;
				var m = { value: n, getSnapshot: r };
				return (
					(d.queue = m),
					Gu($u.bind(null, o, m, t), [t]),
					(o.flags |= 2048),
					An(9, Bu.bind(null, o, m, n, r), void 0, null),
					n
				);
			},
			useId: function () {
				var t = Gt(),
					r = Je.identifierPrefix;
				if (Me) {
					var n = er,
						o = Zt;
					(n = (o & ~(1 << (32 - At(o) - 1))).toString(32) + n),
						(r = ":" + r + "R" + n),
						(n = Pn++),
						0 < n && (r += "H" + n.toString(32)),
						(r += ":");
				} else (n = ap++), (r = ":" + r + "r" + n.toString(32) + ":");
				return (t.memoizedState = r);
			},
			unstable_isNewReconciler: !1,
		},
		up = {
			readContext: Et,
			useCallback: Xu,
			useContext: Et,
			useEffect: Ul,
			useImperativeHandle: Qu,
			useInsertionEffect: Ku,
			useLayoutEffect: Yu,
			useMemo: Zu,
			useReducer: Ml,
			useRef: Hu,
			useState: function () {
				return Ml(Tn);
			},
			useDebugValue: Fl,
			useDeferredValue: function (t) {
				var r = _t();
				return ed(r, Ge.memoizedState, t);
			},
			useTransition: function () {
				var t = Ml(Tn)[0],
					r = _t().memoizedState;
				return [t, r];
			},
			useMutableSource: Du,
			useSyncExternalStore: Uu,
			useId: td,
			unstable_isNewReconciler: !1,
		},
		dp = {
			readContext: Et,
			useCallback: Xu,
			useContext: Et,
			useEffect: Ul,
			useImperativeHandle: Qu,
			useInsertionEffect: Ku,
			useLayoutEffect: Yu,
			useMemo: Zu,
			useReducer: Dl,
			useRef: Hu,
			useState: function () {
				return Dl(Tn);
			},
			useDebugValue: Fl,
			useDeferredValue: function (t) {
				var r = _t();
				return Ge === null ? (r.memoizedState = t) : ed(r, Ge.memoizedState, t);
			},
			useTransition: function () {
				var t = Dl(Tn)[0],
					r = _t().memoizedState;
				return [t, r];
			},
			useMutableSource: Du,
			useSyncExternalStore: Uu,
			useId: td,
			unstable_isNewReconciler: !1,
		};
	function Ot(t, r) {
		if (t && t.defaultProps) {
			(r = B({}, r)), (t = t.defaultProps);
			for (var n in t) r[n] === void 0 && (r[n] = t[n]);
			return r;
		}
		return r;
	}
	function Bl(t, r, n, o) {
		(r = t.memoizedState),
			(n = n(o, r)),
			(n = n == null ? r : B({}, r, n)),
			(t.memoizedState = n),
			t.lanes === 0 && (t.updateQueue.baseState = n);
	}
	var $a = {
		isMounted: function (t) {
			return (t = t._reactInternals) ? Dr(t) === t : !1;
		},
		enqueueSetState: function (t, r, n) {
			t = t._reactInternals;
			var o = ct(),
				d = Sr(t),
				m = rr(o, d);
			(m.payload = r),
				n != null && (m.callback = n),
				(r = jr(t, m, d)),
				r !== null && (Mt(r, t, d, o), Oa(r, t, d));
		},
		enqueueReplaceState: function (t, r, n) {
			t = t._reactInternals;
			var o = ct(),
				d = Sr(t),
				m = rr(o, d);
			(m.tag = 1),
				(m.payload = r),
				n != null && (m.callback = n),
				(r = jr(t, m, d)),
				r !== null && (Mt(r, t, d, o), Oa(r, t, d));
		},
		enqueueForceUpdate: function (t, r) {
			t = t._reactInternals;
			var n = ct(),
				o = Sr(t),
				d = rr(n, o);
			(d.tag = 2),
				r != null && (d.callback = r),
				(r = jr(t, d, o)),
				r !== null && (Mt(r, t, o, n), Oa(r, t, o));
		},
	};
	function ad(t, r, n, o, d, m, x) {
		return (
			(t = t.stateNode),
			typeof t.shouldComponentUpdate == "function"
				? t.shouldComponentUpdate(o, m, x)
				: r.prototype && r.prototype.isPureReactComponent
				? !gn(n, o) || !gn(d, m)
				: !0
		);
	}
	function id(t, r, n) {
		var o = !1,
			d = yr,
			m = r.contextType;
		return (
			typeof m == "object" && m !== null
				? (m = Et(m))
				: ((d = ht(r) ? Fr : nt.current),
				  (o = r.contextTypes),
				  (m = (o = o != null) ? vs(t, d) : yr)),
			(r = new r(n, m)),
			(t.memoizedState =
				r.state !== null && r.state !== void 0 ? r.state : null),
			(r.updater = $a),
			(t.stateNode = r),
			(r._reactInternals = t),
			o &&
				((t = t.stateNode),
				(t.__reactInternalMemoizedUnmaskedChildContext = d),
				(t.__reactInternalMemoizedMaskedChildContext = m)),
			r
		);
	}
	function ld(t, r, n, o) {
		(t = r.state),
			typeof r.componentWillReceiveProps == "function" &&
				r.componentWillReceiveProps(n, o),
			typeof r.UNSAFE_componentWillReceiveProps == "function" &&
				r.UNSAFE_componentWillReceiveProps(n, o),
			r.state !== t && $a.enqueueReplaceState(r, r.state, null);
	}
	function $l(t, r, n, o) {
		var d = t.stateNode;
		(d.props = n), (d.state = t.memoizedState), (d.refs = {}), Cl(t);
		var m = r.contextType;
		typeof m == "object" && m !== null
			? (d.context = Et(m))
			: ((m = ht(r) ? Fr : nt.current), (d.context = vs(t, m))),
			(d.state = t.memoizedState),
			(m = r.getDerivedStateFromProps),
			typeof m == "function" && (Bl(t, r, m, n), (d.state = t.memoizedState)),
			typeof r.getDerivedStateFromProps == "function" ||
				typeof d.getSnapshotBeforeUpdate == "function" ||
				(typeof d.UNSAFE_componentWillMount != "function" &&
					typeof d.componentWillMount != "function") ||
				((r = d.state),
				typeof d.componentWillMount == "function" && d.componentWillMount(),
				typeof d.UNSAFE_componentWillMount == "function" &&
					d.UNSAFE_componentWillMount(),
				r !== d.state && $a.enqueueReplaceState(d, d.state, null),
				Ia(t, n, d, o),
				(d.state = t.memoizedState)),
			typeof d.componentDidMount == "function" && (t.flags |= 4194308);
	}
	function _s(t, r) {
		try {
			var n = "",
				o = r;
			do (n += $(o)), (o = o.return);
			while (o);
			var d = n;
		} catch (m) {
			d =
				`
Error generating stack: ` +
				m.message +
				`
` +
				m.stack;
		}
		return { value: t, source: r, stack: d, digest: null };
	}
	function Vl(t, r, n) {
		return { value: t, source: null, stack: n ?? null, digest: r ?? null };
	}
	function Wl(t, r) {
		try {
			console.error(r.value);
		} catch (n) {
			setTimeout(function () {
				throw n;
			});
		}
	}
	var hp = typeof WeakMap == "function" ? WeakMap : Map;
	function od(t, r, n) {
		(n = rr(-1, n)), (n.tag = 3), (n.payload = { element: null });
		var o = r.value;
		return (
			(n.callback = function () {
				Ya || ((Ya = !0), (ao = o)), Wl(t, r);
			}),
			n
		);
	}
	function cd(t, r, n) {
		(n = rr(-1, n)), (n.tag = 3);
		var o = t.type.getDerivedStateFromError;
		if (typeof o == "function") {
			var d = r.value;
			(n.payload = function () {
				return o(d);
			}),
				(n.callback = function () {
					Wl(t, r);
				});
		}
		var m = t.stateNode;
		return (
			m !== null &&
				typeof m.componentDidCatch == "function" &&
				(n.callback = function () {
					Wl(t, r),
						typeof o != "function" &&
							(Nr === null ? (Nr = new Set([this])) : Nr.add(this));
					var x = r.stack;
					this.componentDidCatch(r.value, {
						componentStack: x !== null ? x : "",
					});
				}),
			n
		);
	}
	function ud(t, r, n) {
		var o = t.pingCache;
		if (o === null) {
			o = t.pingCache = new hp();
			var d = new Set();
			o.set(r, d);
		} else (d = o.get(r)), d === void 0 && ((d = new Set()), o.set(r, d));
		d.has(n) || (d.add(n), (t = Ep.bind(null, t, r, n)), r.then(t, t));
	}
	function dd(t) {
		do {
			var r;
			if (
				((r = t.tag === 13) &&
					((r = t.memoizedState),
					(r = r !== null ? r.dehydrated !== null : !0)),
				r)
			)
				return t;
			t = t.return;
		} while (t !== null);
		return null;
	}
	function hd(t, r, n, o, d) {
		return (t.mode & 1) === 0
			? (t === r
					? (t.flags |= 65536)
					: ((t.flags |= 128),
					  (n.flags |= 131072),
					  (n.flags &= -52805),
					  n.tag === 1 &&
							(n.alternate === null
								? (n.tag = 17)
								: ((r = rr(-1, 1)), (r.tag = 2), jr(n, r, 1))),
					  (n.lanes |= 1)),
			  t)
			: ((t.flags |= 65536), (t.lanes = d), t);
	}
	var mp = G.ReactCurrentOwner,
		mt = !1;
	function ot(t, r, n, o) {
		r.child = t === null ? Ru(r, null, n, o) : Ns(r, t.child, n, o);
	}
	function md(t, r, n, o, d) {
		n = n.render;
		var m = r.ref;
		return (
			Ss(r, d),
			(o = Il(t, r, n, o, m, d)),
			(n = zl()),
			t !== null && !mt
				? ((r.updateQueue = t.updateQueue),
				  (r.flags &= -2053),
				  (t.lanes &= ~d),
				  sr(t, r, d))
				: (Me && n && yl(r), (r.flags |= 1), ot(t, r, o, d), r.child)
		);
	}
	function fd(t, r, n, o, d) {
		if (t === null) {
			var m = n.type;
			return typeof m == "function" &&
				!mo(m) &&
				m.defaultProps === void 0 &&
				n.compare === null &&
				n.defaultProps === void 0
				? ((r.tag = 15), (r.type = m), pd(t, r, m, o, d))
				: ((t = ti(n.type, null, o, r, r.mode, d)),
				  (t.ref = r.ref),
				  (t.return = r),
				  (r.child = t));
		}
		if (((m = t.child), (t.lanes & d) === 0)) {
			var x = m.memoizedProps;
			if (
				((n = n.compare), (n = n !== null ? n : gn), n(x, o) && t.ref === r.ref)
			)
				return sr(t, r, d);
		}
		return (
			(r.flags |= 1),
			(t = _r(m, o)),
			(t.ref = r.ref),
			(t.return = r),
			(r.child = t)
		);
	}
	function pd(t, r, n, o, d) {
		if (t !== null) {
			var m = t.memoizedProps;
			if (gn(m, o) && t.ref === r.ref)
				if (((mt = !1), (r.pendingProps = o = m), (t.lanes & d) !== 0))
					(t.flags & 131072) !== 0 && (mt = !0);
				else return (r.lanes = t.lanes), sr(t, r, d);
		}
		return ql(t, r, n, o, d);
	}
	function xd(t, r, n) {
		var o = r.pendingProps,
			d = o.children,
			m = t !== null ? t.memoizedState : null;
		if (o.mode === "hidden")
			if ((r.mode & 1) === 0)
				(r.memoizedState = {
					baseLanes: 0,
					cachePool: null,
					transitions: null,
				}),
					Le(Ps, wt),
					(wt |= n);
			else {
				if ((n & 1073741824) === 0)
					return (
						(t = m !== null ? m.baseLanes | n : n),
						(r.lanes = r.childLanes = 1073741824),
						(r.memoizedState = {
							baseLanes: t,
							cachePool: null,
							transitions: null,
						}),
						(r.updateQueue = null),
						Le(Ps, wt),
						(wt |= t),
						null
					);
				(r.memoizedState = {
					baseLanes: 0,
					cachePool: null,
					transitions: null,
				}),
					(o = m !== null ? m.baseLanes : n),
					Le(Ps, wt),
					(wt |= o);
			}
		else
			m !== null ? ((o = m.baseLanes | n), (r.memoizedState = null)) : (o = n),
				Le(Ps, wt),
				(wt |= o);
		return ot(t, r, d, n), r.child;
	}
	function gd(t, r) {
		var n = r.ref;
		((t === null && n !== null) || (t !== null && t.ref !== n)) &&
			((r.flags |= 512), (r.flags |= 2097152));
	}
	function ql(t, r, n, o, d) {
		var m = ht(n) ? Fr : nt.current;
		return (
			(m = vs(r, m)),
			Ss(r, d),
			(n = Il(t, r, n, o, m, d)),
			(o = zl()),
			t !== null && !mt
				? ((r.updateQueue = t.updateQueue),
				  (r.flags &= -2053),
				  (t.lanes &= ~d),
				  sr(t, r, d))
				: (Me && o && yl(r), (r.flags |= 1), ot(t, r, n, d), r.child)
		);
	}
	function yd(t, r, n, o, d) {
		if (ht(n)) {
			var m = !0;
			Ea(r);
		} else m = !1;
		if ((Ss(r, d), r.stateNode === null))
			Wa(t, r), id(r, n, o), $l(r, n, o, d), (o = !0);
		else if (t === null) {
			var x = r.stateNode,
				b = r.memoizedProps;
			x.props = b;
			var E = x.context,
				M = n.contextType;
			typeof M == "object" && M !== null
				? (M = Et(M))
				: ((M = ht(n) ? Fr : nt.current), (M = vs(r, M)));
			var K = n.getDerivedStateFromProps,
				Z =
					typeof K == "function" ||
					typeof x.getSnapshotBeforeUpdate == "function";
			Z ||
				(typeof x.UNSAFE_componentWillReceiveProps != "function" &&
					typeof x.componentWillReceiveProps != "function") ||
				((b !== o || E !== M) && ld(r, x, o, M)),
				(br = !1);
			var H = r.memoizedState;
			(x.state = H),
				Ia(r, o, x, d),
				(E = r.memoizedState),
				b !== o || H !== E || dt.current || br
					? (typeof K == "function" && (Bl(r, n, K, o), (E = r.memoizedState)),
					  (b = br || ad(r, n, b, o, H, E, M))
							? (Z ||
									(typeof x.UNSAFE_componentWillMount != "function" &&
										typeof x.componentWillMount != "function") ||
									(typeof x.componentWillMount == "function" &&
										x.componentWillMount(),
									typeof x.UNSAFE_componentWillMount == "function" &&
										x.UNSAFE_componentWillMount()),
							  typeof x.componentDidMount == "function" &&
									(r.flags |= 4194308))
							: (typeof x.componentDidMount == "function" &&
									(r.flags |= 4194308),
							  (r.memoizedProps = o),
							  (r.memoizedState = E)),
					  (x.props = o),
					  (x.state = E),
					  (x.context = M),
					  (o = b))
					: (typeof x.componentDidMount == "function" && (r.flags |= 4194308),
					  (o = !1));
		} else {
			(x = r.stateNode),
				Ou(t, r),
				(b = r.memoizedProps),
				(M = r.type === r.elementType ? b : Ot(r.type, b)),
				(x.props = M),
				(Z = r.pendingProps),
				(H = x.context),
				(E = n.contextType),
				typeof E == "object" && E !== null
					? (E = Et(E))
					: ((E = ht(n) ? Fr : nt.current), (E = vs(r, E)));
			var oe = n.getDerivedStateFromProps;
			(K =
				typeof oe == "function" ||
				typeof x.getSnapshotBeforeUpdate == "function") ||
				(typeof x.UNSAFE_componentWillReceiveProps != "function" &&
					typeof x.componentWillReceiveProps != "function") ||
				((b !== Z || H !== E) && ld(r, x, o, E)),
				(br = !1),
				(H = r.memoizedState),
				(x.state = H),
				Ia(r, o, x, d);
			var ue = r.memoizedState;
			b !== Z || H !== ue || dt.current || br
				? (typeof oe == "function" && (Bl(r, n, oe, o), (ue = r.memoizedState)),
				  (M = br || ad(r, n, M, o, H, ue, E) || !1)
						? (K ||
								(typeof x.UNSAFE_componentWillUpdate != "function" &&
									typeof x.componentWillUpdate != "function") ||
								(typeof x.componentWillUpdate == "function" &&
									x.componentWillUpdate(o, ue, E),
								typeof x.UNSAFE_componentWillUpdate == "function" &&
									x.UNSAFE_componentWillUpdate(o, ue, E)),
						  typeof x.componentDidUpdate == "function" && (r.flags |= 4),
						  typeof x.getSnapshotBeforeUpdate == "function" &&
								(r.flags |= 1024))
						: (typeof x.componentDidUpdate != "function" ||
								(b === t.memoizedProps && H === t.memoizedState) ||
								(r.flags |= 4),
						  typeof x.getSnapshotBeforeUpdate != "function" ||
								(b === t.memoizedProps && H === t.memoizedState) ||
								(r.flags |= 1024),
						  (r.memoizedProps = o),
						  (r.memoizedState = ue)),
				  (x.props = o),
				  (x.state = ue),
				  (x.context = E),
				  (o = M))
				: (typeof x.componentDidUpdate != "function" ||
						(b === t.memoizedProps && H === t.memoizedState) ||
						(r.flags |= 4),
				  typeof x.getSnapshotBeforeUpdate != "function" ||
						(b === t.memoizedProps && H === t.memoizedState) ||
						(r.flags |= 1024),
				  (o = !1));
		}
		return Hl(t, r, n, o, m, d);
	}
	function Hl(t, r, n, o, d, m) {
		gd(t, r);
		var x = (r.flags & 128) !== 0;
		if (!o && !x) return d && Nu(r, n, !1), sr(t, r, m);
		(o = r.stateNode), (mp.current = r);
		var b =
			x && typeof n.getDerivedStateFromError != "function" ? null : o.render();
		return (
			(r.flags |= 1),
			t !== null && x
				? ((r.child = Ns(r, t.child, null, m)), (r.child = Ns(r, null, b, m)))
				: ot(t, r, b, m),
			(r.memoizedState = o.state),
			d && Nu(r, n, !0),
			r.child
		);
	}
	function vd(t) {
		var r = t.stateNode;
		r.pendingContext
			? ju(t, r.pendingContext, r.pendingContext !== r.context)
			: r.context && ju(t, r.context, !1),
			Pl(t, r.containerInfo);
	}
	function bd(t, r, n, o, d) {
		return ws(), wl(d), (r.flags |= 256), ot(t, r, n, o), r.child;
	}
	var Gl = { dehydrated: null, treeContext: null, retryLane: 0 };
	function Kl(t) {
		return { baseLanes: t, cachePool: null, transitions: null };
	}
	function jd(t, r, n) {
		var o = r.pendingProps,
			d = De.current,
			m = !1,
			x = (r.flags & 128) !== 0,
			b;
		if (
			((b = x) ||
				(b = t !== null && t.memoizedState === null ? !1 : (d & 2) !== 0),
			b
				? ((m = !0), (r.flags &= -129))
				: (t === null || t.memoizedState !== null) && (d |= 1),
			Le(De, d & 1),
			t === null)
		)
			return (
				jl(r),
				(t = r.memoizedState),
				t !== null && ((t = t.dehydrated), t !== null)
					? ((r.mode & 1) === 0
							? (r.lanes = 1)
							: t.data === "$!"
							? (r.lanes = 8)
							: (r.lanes = 1073741824),
					  null)
					: ((x = o.children),
					  (t = o.fallback),
					  m
							? ((o = r.mode),
							  (m = r.child),
							  (x = { mode: "hidden", children: x }),
							  (o & 1) === 0 && m !== null
									? ((m.childLanes = 0), (m.pendingProps = x))
									: (m = ri(x, o, 0, null)),
							  (t = Jr(t, o, n, null)),
							  (m.return = r),
							  (t.return = r),
							  (m.sibling = t),
							  (r.child = m),
							  (r.child.memoizedState = Kl(n)),
							  (r.memoizedState = Gl),
							  t)
							: Yl(r, x))
			);
		if (((d = t.memoizedState), d !== null && ((b = d.dehydrated), b !== null)))
			return fp(t, r, x, o, b, d, n);
		if (m) {
			(m = o.fallback), (x = r.mode), (d = t.child), (b = d.sibling);
			var E = { mode: "hidden", children: o.children };
			return (
				(x & 1) === 0 && r.child !== d
					? ((o = r.child),
					  (o.childLanes = 0),
					  (o.pendingProps = E),
					  (r.deletions = null))
					: ((o = _r(d, E)), (o.subtreeFlags = d.subtreeFlags & 14680064)),
				b !== null ? (m = _r(b, m)) : ((m = Jr(m, x, n, null)), (m.flags |= 2)),
				(m.return = r),
				(o.return = r),
				(o.sibling = m),
				(r.child = o),
				(o = m),
				(m = r.child),
				(x = t.child.memoizedState),
				(x =
					x === null
						? Kl(n)
						: {
								baseLanes: x.baseLanes | n,
								cachePool: null,
								transitions: x.transitions,
						  }),
				(m.memoizedState = x),
				(m.childLanes = t.childLanes & ~n),
				(r.memoizedState = Gl),
				o
			);
		}
		return (
			(m = t.child),
			(t = m.sibling),
			(o = _r(m, { mode: "visible", children: o.children })),
			(r.mode & 1) === 0 && (o.lanes = n),
			(o.return = r),
			(o.sibling = null),
			t !== null &&
				((n = r.deletions),
				n === null ? ((r.deletions = [t]), (r.flags |= 16)) : n.push(t)),
			(r.child = o),
			(r.memoizedState = null),
			o
		);
	}
	function Yl(t, r) {
		return (
			(r = ri({ mode: "visible", children: r }, t.mode, 0, null)),
			(r.return = t),
			(t.child = r)
		);
	}
	function Va(t, r, n, o) {
		return (
			o !== null && wl(o),
			Ns(r, t.child, null, n),
			(t = Yl(r, r.pendingProps.children)),
			(t.flags |= 2),
			(r.memoizedState = null),
			t
		);
	}
	function fp(t, r, n, o, d, m, x) {
		if (n)
			return r.flags & 256
				? ((r.flags &= -257), (o = Vl(Error(a(422)))), Va(t, r, x, o))
				: r.memoizedState !== null
				? ((r.child = t.child), (r.flags |= 128), null)
				: ((m = o.fallback),
				  (d = r.mode),
				  (o = ri({ mode: "visible", children: o.children }, d, 0, null)),
				  (m = Jr(m, d, x, null)),
				  (m.flags |= 2),
				  (o.return = r),
				  (m.return = r),
				  (o.sibling = m),
				  (r.child = o),
				  (r.mode & 1) !== 0 && Ns(r, t.child, null, x),
				  (r.child.memoizedState = Kl(x)),
				  (r.memoizedState = Gl),
				  m);
		if ((r.mode & 1) === 0) return Va(t, r, x, null);
		if (d.data === "$!") {
			if (((o = d.nextSibling && d.nextSibling.dataset), o)) var b = o.dgst;
			return (
				(o = b), (m = Error(a(419))), (o = Vl(m, o, void 0)), Va(t, r, x, o)
			);
		}
		if (((b = (x & t.childLanes) !== 0), mt || b)) {
			if (((o = Je), o !== null)) {
				switch (x & -x) {
					case 4:
						d = 2;
						break;
					case 16:
						d = 8;
						break;
					case 64:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
					case 67108864:
						d = 32;
						break;
					case 536870912:
						d = 268435456;
						break;
					default:
						d = 0;
				}
				(d = (d & (o.suspendedLanes | x)) !== 0 ? 0 : d),
					d !== 0 &&
						d !== m.retryLane &&
						((m.retryLane = d), tr(t, d), Mt(o, t, d, -1));
			}
			return ho(), (o = Vl(Error(a(421)))), Va(t, r, x, o);
		}
		return d.data === "$?"
			? ((r.flags |= 128),
			  (r.child = t.child),
			  (r = _p.bind(null, t)),
			  (d._reactRetry = r),
			  null)
			: ((t = m.treeContext),
			  (jt = xr(d.nextSibling)),
			  (bt = r),
			  (Me = !0),
			  (Lt = null),
			  t !== null &&
					((kt[St++] = Zt),
					(kt[St++] = er),
					(kt[St++] = Br),
					(Zt = t.id),
					(er = t.overflow),
					(Br = r)),
			  (r = Yl(r, o.children)),
			  (r.flags |= 4096),
			  r);
	}
	function wd(t, r, n) {
		t.lanes |= r;
		var o = t.alternate;
		o !== null && (o.lanes |= r), El(t.return, r, n);
	}
	function Jl(t, r, n, o, d) {
		var m = t.memoizedState;
		m === null
			? (t.memoizedState = {
					isBackwards: r,
					rendering: null,
					renderingStartTime: 0,
					last: o,
					tail: n,
					tailMode: d,
			  })
			: ((m.isBackwards = r),
			  (m.rendering = null),
			  (m.renderingStartTime = 0),
			  (m.last = o),
			  (m.tail = n),
			  (m.tailMode = d));
	}
	function Nd(t, r, n) {
		var o = r.pendingProps,
			d = o.revealOrder,
			m = o.tail;
		if ((ot(t, r, o.children, n), (o = De.current), (o & 2) !== 0))
			(o = (o & 1) | 2), (r.flags |= 128);
		else {
			if (t !== null && (t.flags & 128) !== 0)
				e: for (t = r.child; t !== null; ) {
					if (t.tag === 13) t.memoizedState !== null && wd(t, n, r);
					else if (t.tag === 19) wd(t, n, r);
					else if (t.child !== null) {
						(t.child.return = t), (t = t.child);
						continue;
					}
					if (t === r) break e;
					for (; t.sibling === null; ) {
						if (t.return === null || t.return === r) break e;
						t = t.return;
					}
					(t.sibling.return = t.return), (t = t.sibling);
				}
			o &= 1;
		}
		if ((Le(De, o), (r.mode & 1) === 0)) r.memoizedState = null;
		else
			switch (d) {
				case "forwards":
					for (n = r.child, d = null; n !== null; )
						(t = n.alternate),
							t !== null && za(t) === null && (d = n),
							(n = n.sibling);
					(n = d),
						n === null
							? ((d = r.child), (r.child = null))
							: ((d = n.sibling), (n.sibling = null)),
						Jl(r, !1, d, n, m);
					break;
				case "backwards":
					for (n = null, d = r.child, r.child = null; d !== null; ) {
						if (((t = d.alternate), t !== null && za(t) === null)) {
							r.child = d;
							break;
						}
						(t = d.sibling), (d.sibling = n), (n = d), (d = t);
					}
					Jl(r, !0, n, null, m);
					break;
				case "together":
					Jl(r, !1, null, null, void 0);
					break;
				default:
					r.memoizedState = null;
			}
		return r.child;
	}
	function Wa(t, r) {
		(r.mode & 1) === 0 &&
			t !== null &&
			((t.alternate = null), (r.alternate = null), (r.flags |= 2));
	}
	function sr(t, r, n) {
		if (
			(t !== null && (r.dependencies = t.dependencies),
			(Hr |= r.lanes),
			(n & r.childLanes) === 0)
		)
			return null;
		if (t !== null && r.child !== t.child) throw Error(a(153));
		if (r.child !== null) {
			for (
				t = r.child, n = _r(t, t.pendingProps), r.child = n, n.return = r;
				t.sibling !== null;

			)
				(t = t.sibling),
					(n = n.sibling = _r(t, t.pendingProps)),
					(n.return = r);
			n.sibling = null;
		}
		return r.child;
	}
	function pp(t, r, n) {
		switch (r.tag) {
			case 3:
				vd(r), ws();
				break;
			case 5:
				Mu(r);
				break;
			case 1:
				ht(r.type) && Ea(r);
				break;
			case 4:
				Pl(r, r.stateNode.containerInfo);
				break;
			case 10:
				var o = r.type._context,
					d = r.memoizedProps.value;
				Le(Ra, o._currentValue), (o._currentValue = d);
				break;
			case 13:
				if (((o = r.memoizedState), o !== null))
					return o.dehydrated !== null
						? (Le(De, De.current & 1), (r.flags |= 128), null)
						: (n & r.child.childLanes) !== 0
						? jd(t, r, n)
						: (Le(De, De.current & 1),
						  (t = sr(t, r, n)),
						  t !== null ? t.sibling : null);
				Le(De, De.current & 1);
				break;
			case 19:
				if (((o = (n & r.childLanes) !== 0), (t.flags & 128) !== 0)) {
					if (o) return Nd(t, r, n);
					r.flags |= 128;
				}
				if (
					((d = r.memoizedState),
					d !== null &&
						((d.rendering = null), (d.tail = null), (d.lastEffect = null)),
					Le(De, De.current),
					o)
				)
					break;
				return null;
			case 22:
			case 23:
				return (r.lanes = 0), xd(t, r, n);
		}
		return sr(t, r, n);
	}
	var kd, Ql, Sd, Ed;
	(kd = function (t, r) {
		for (var n = r.child; n !== null; ) {
			if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
			else if (n.tag !== 4 && n.child !== null) {
				(n.child.return = n), (n = n.child);
				continue;
			}
			if (n === r) break;
			for (; n.sibling === null; ) {
				if (n.return === null || n.return === r) return;
				n = n.return;
			}
			(n.sibling.return = n.return), (n = n.sibling);
		}
	}),
		(Ql = function () {}),
		(Sd = function (t, r, n, o) {
			var d = t.memoizedProps;
			if (d !== o) {
				(t = r.stateNode), Wr(Ht.current);
				var m = null;
				switch (n) {
					case "input":
						(d = Qs(t, d)), (o = Qs(t, o)), (m = []);
						break;
					case "select":
						(d = B({}, d, { value: void 0 })),
							(o = B({}, o, { value: void 0 })),
							(m = []);
						break;
					case "textarea":
						(d = Fe(t, d)), (o = Fe(t, o)), (m = []);
						break;
					default:
						typeof d.onClick != "function" &&
							typeof o.onClick == "function" &&
							(t.onclick = Na);
				}
				Ai(n, o);
				var x;
				n = null;
				for (M in d)
					if (!o.hasOwnProperty(M) && d.hasOwnProperty(M) && d[M] != null)
						if (M === "style") {
							var b = d[M];
							for (x in b) b.hasOwnProperty(x) && (n || (n = {}), (n[x] = ""));
						} else
							M !== "dangerouslySetInnerHTML" &&
								M !== "children" &&
								M !== "suppressContentEditableWarning" &&
								M !== "suppressHydrationWarning" &&
								M !== "autoFocus" &&
								(c.hasOwnProperty(M)
									? m || (m = [])
									: (m = m || []).push(M, null));
				for (M in o) {
					var E = o[M];
					if (
						((b = d?.[M]),
						o.hasOwnProperty(M) && E !== b && (E != null || b != null))
					)
						if (M === "style")
							if (b) {
								for (x in b)
									!b.hasOwnProperty(x) ||
										(E && E.hasOwnProperty(x)) ||
										(n || (n = {}), (n[x] = ""));
								for (x in E)
									E.hasOwnProperty(x) &&
										b[x] !== E[x] &&
										(n || (n = {}), (n[x] = E[x]));
							} else n || (m || (m = []), m.push(M, n)), (n = E);
						else
							M === "dangerouslySetInnerHTML"
								? ((E = E ? E.__html : void 0),
								  (b = b ? b.__html : void 0),
								  E != null && b !== E && (m = m || []).push(M, E))
								: M === "children"
								? (typeof E != "string" && typeof E != "number") ||
								  (m = m || []).push(M, "" + E)
								: M !== "suppressContentEditableWarning" &&
								  M !== "suppressHydrationWarning" &&
								  (c.hasOwnProperty(M)
										? (E != null && M === "onScroll" && Ie("scroll", t),
										  m || b === E || (m = []))
										: (m = m || []).push(M, E));
				}
				n && (m = m || []).push("style", n);
				var M = m;
				(r.updateQueue = M) && (r.flags |= 4);
			}
		}),
		(Ed = function (t, r, n, o) {
			n !== o && (r.flags |= 4);
		});
	function Rn(t, r) {
		if (!Me)
			switch (t.tailMode) {
				case "hidden":
					r = t.tail;
					for (var n = null; r !== null; )
						r.alternate !== null && (n = r), (r = r.sibling);
					n === null ? (t.tail = null) : (n.sibling = null);
					break;
				case "collapsed":
					n = t.tail;
					for (var o = null; n !== null; )
						n.alternate !== null && (o = n), (n = n.sibling);
					o === null
						? r || t.tail === null
							? (t.tail = null)
							: (t.tail.sibling = null)
						: (o.sibling = null);
			}
	}
	function it(t) {
		var r = t.alternate !== null && t.alternate.child === t.child,
			n = 0,
			o = 0;
		if (r)
			for (var d = t.child; d !== null; )
				(n |= d.lanes | d.childLanes),
					(o |= d.subtreeFlags & 14680064),
					(o |= d.flags & 14680064),
					(d.return = t),
					(d = d.sibling);
		else
			for (d = t.child; d !== null; )
				(n |= d.lanes | d.childLanes),
					(o |= d.subtreeFlags),
					(o |= d.flags),
					(d.return = t),
					(d = d.sibling);
		return (t.subtreeFlags |= o), (t.childLanes = n), r;
	}
	function xp(t, r, n) {
		var o = r.pendingProps;
		switch ((vl(r), r.tag)) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return it(r), null;
			case 1:
				return ht(r.type) && Sa(), it(r), null;
			case 3:
				return (
					(o = r.stateNode),
					Es(),
					ze(dt),
					ze(nt),
					Rl(),
					o.pendingContext &&
						((o.context = o.pendingContext), (o.pendingContext = null)),
					(t === null || t.child === null) &&
						(Ta(r)
							? (r.flags |= 4)
							: t === null ||
							  (t.memoizedState.isDehydrated && (r.flags & 256) === 0) ||
							  ((r.flags |= 1024), Lt !== null && (oo(Lt), (Lt = null)))),
					Ql(t, r),
					it(r),
					null
				);
			case 5:
				Tl(r);
				var d = Wr(_n.current);
				if (((n = r.type), t !== null && r.stateNode != null))
					Sd(t, r, n, o, d),
						t.ref !== r.ref && ((r.flags |= 512), (r.flags |= 2097152));
				else {
					if (!o) {
						if (r.stateNode === null) throw Error(a(166));
						return it(r), null;
					}
					if (((t = Wr(Ht.current)), Ta(r))) {
						(o = r.stateNode), (n = r.type);
						var m = r.memoizedProps;
						switch (((o[qt] = r), (o[wn] = m), (t = (r.mode & 1) !== 0), n)) {
							case "dialog":
								Ie("cancel", o), Ie("close", o);
								break;
							case "iframe":
							case "object":
							case "embed":
								Ie("load", o);
								break;
							case "video":
							case "audio":
								for (d = 0; d < vn.length; d++) Ie(vn[d], o);
								break;
							case "source":
								Ie("error", o);
								break;
							case "img":
							case "image":
							case "link":
								Ie("error", o), Ie("load", o);
								break;
							case "details":
								Ie("toggle", o);
								break;
							case "input":
								ea(o, m), Ie("invalid", o);
								break;
							case "select":
								(o._wrapperState = { wasMultiple: !!m.multiple }),
									Ie("invalid", o);
								break;
							case "textarea":
								Vt(o, m), Ie("invalid", o);
						}
						Ai(n, m), (d = null);
						for (var x in m)
							if (m.hasOwnProperty(x)) {
								var b = m[x];
								x === "children"
									? typeof b == "string"
										? o.textContent !== b &&
										  (m.suppressHydrationWarning !== !0 &&
												wa(o.textContent, b, t),
										  (d = ["children", b]))
										: typeof b == "number" &&
										  o.textContent !== "" + b &&
										  (m.suppressHydrationWarning !== !0 &&
												wa(o.textContent, b, t),
										  (d = ["children", "" + b]))
									: c.hasOwnProperty(x) &&
									  b != null &&
									  x === "onScroll" &&
									  Ie("scroll", o);
							}
						switch (n) {
							case "input":
								He(o), is(o, m, !0);
								break;
							case "textarea":
								He(o), dc(o);
								break;
							case "select":
							case "option":
								break;
							default:
								typeof m.onClick == "function" && (o.onclick = Na);
						}
						(o = d), (r.updateQueue = o), o !== null && (r.flags |= 4);
					} else {
						(x = d.nodeType === 9 ? d : d.ownerDocument),
							t === "http://www.w3.org/1999/xhtml" && (t = hc(n)),
							t === "http://www.w3.org/1999/xhtml"
								? n === "script"
									? ((t = x.createElement("div")),
									  (t.innerHTML = "<script></script>"),
									  (t = t.removeChild(t.firstChild)))
									: typeof o.is == "string"
									? (t = x.createElement(n, { is: o.is }))
									: ((t = x.createElement(n)),
									  n === "select" &&
											((x = t),
											o.multiple
												? (x.multiple = !0)
												: o.size && (x.size = o.size)))
								: (t = x.createElementNS(t, n)),
							(t[qt] = r),
							(t[wn] = o),
							kd(t, r, !1, !1),
							(r.stateNode = t);
						e: {
							switch (((x = Ri(n, o)), n)) {
								case "dialog":
									Ie("cancel", t), Ie("close", t), (d = o);
									break;
								case "iframe":
								case "object":
								case "embed":
									Ie("load", t), (d = o);
									break;
								case "video":
								case "audio":
									for (d = 0; d < vn.length; d++) Ie(vn[d], t);
									d = o;
									break;
								case "source":
									Ie("error", t), (d = o);
									break;
								case "img":
								case "image":
								case "link":
									Ie("error", t), Ie("load", t), (d = o);
									break;
								case "details":
									Ie("toggle", t), (d = o);
									break;
								case "input":
									ea(t, o), (d = Qs(t, o)), Ie("invalid", t);
									break;
								case "option":
									d = o;
									break;
								case "select":
									(t._wrapperState = { wasMultiple: !!o.multiple }),
										(d = B({}, o, { value: void 0 })),
										Ie("invalid", t);
									break;
								case "textarea":
									Vt(t, o), (d = Fe(t, o)), Ie("invalid", t);
									break;
								default:
									d = o;
							}
							Ai(n, d), (b = d);
							for (m in b)
								if (b.hasOwnProperty(m)) {
									var E = b[m];
									m === "style"
										? pc(t, E)
										: m === "dangerouslySetInnerHTML"
										? ((E = E ? E.__html : void 0), E != null && mc(t, E))
										: m === "children"
										? typeof E == "string"
											? (n !== "textarea" || E !== "") && Zs(t, E)
											: typeof E == "number" && Zs(t, "" + E)
										: m !== "suppressContentEditableWarning" &&
										  m !== "suppressHydrationWarning" &&
										  m !== "autoFocus" &&
										  (c.hasOwnProperty(m)
												? E != null && m === "onScroll" && Ie("scroll", t)
												: E != null && N(t, m, E, x));
								}
							switch (n) {
								case "input":
									He(t), is(t, o, !1);
									break;
								case "textarea":
									He(t), dc(t);
									break;
								case "option":
									o.value != null && t.setAttribute("value", "" + Q(o.value));
									break;
								case "select":
									(t.multiple = !!o.multiple),
										(m = o.value),
										m != null
											? we(t, !!o.multiple, m, !1)
											: o.defaultValue != null &&
											  we(t, !!o.multiple, o.defaultValue, !0);
									break;
								default:
									typeof d.onClick == "function" && (t.onclick = Na);
							}
							switch (n) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									o = !!o.autoFocus;
									break e;
								case "img":
									o = !0;
									break e;
								default:
									o = !1;
							}
						}
						o && (r.flags |= 4);
					}
					r.ref !== null && ((r.flags |= 512), (r.flags |= 2097152));
				}
				return it(r), null;
			case 6:
				if (t && r.stateNode != null) Ed(t, r, t.memoizedProps, o);
				else {
					if (typeof o != "string" && r.stateNode === null) throw Error(a(166));
					if (((n = Wr(_n.current)), Wr(Ht.current), Ta(r))) {
						if (
							((o = r.stateNode),
							(n = r.memoizedProps),
							(o[qt] = r),
							(m = o.nodeValue !== n) && ((t = bt), t !== null))
						)
							switch (t.tag) {
								case 3:
									wa(o.nodeValue, n, (t.mode & 1) !== 0);
									break;
								case 5:
									t.memoizedProps.suppressHydrationWarning !== !0 &&
										wa(o.nodeValue, n, (t.mode & 1) !== 0);
							}
						m && (r.flags |= 4);
					} else
						(o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o)),
							(o[qt] = r),
							(r.stateNode = o);
				}
				return it(r), null;
			case 13:
				if (
					(ze(De),
					(o = r.memoizedState),
					t === null ||
						(t.memoizedState !== null && t.memoizedState.dehydrated !== null))
				) {
					if (Me && jt !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)
						Pu(), ws(), (r.flags |= 98560), (m = !1);
					else if (((m = Ta(r)), o !== null && o.dehydrated !== null)) {
						if (t === null) {
							if (!m) throw Error(a(318));
							if (
								((m = r.memoizedState),
								(m = m !== null ? m.dehydrated : null),
								!m)
							)
								throw Error(a(317));
							m[qt] = r;
						} else
							ws(),
								(r.flags & 128) === 0 && (r.memoizedState = null),
								(r.flags |= 4);
						it(r), (m = !1);
					} else Lt !== null && (oo(Lt), (Lt = null)), (m = !0);
					if (!m) return r.flags & 65536 ? r : null;
				}
				return (r.flags & 128) !== 0
					? ((r.lanes = n), r)
					: ((o = o !== null),
					  o !== (t !== null && t.memoizedState !== null) &&
							o &&
							((r.child.flags |= 8192),
							(r.mode & 1) !== 0 &&
								(t === null || (De.current & 1) !== 0
									? Ke === 0 && (Ke = 3)
									: ho())),
					  r.updateQueue !== null && (r.flags |= 4),
					  it(r),
					  null);
			case 4:
				return (
					Es(),
					Ql(t, r),
					t === null && bn(r.stateNode.containerInfo),
					it(r),
					null
				);
			case 10:
				return Sl(r.type._context), it(r), null;
			case 17:
				return ht(r.type) && Sa(), it(r), null;
			case 19:
				if ((ze(De), (m = r.memoizedState), m === null)) return it(r), null;
				if (((o = (r.flags & 128) !== 0), (x = m.rendering), x === null))
					if (o) Rn(m, !1);
					else {
						if (Ke !== 0 || (t !== null && (t.flags & 128) !== 0))
							for (t = r.child; t !== null; ) {
								if (((x = za(t)), x !== null)) {
									for (
										r.flags |= 128,
											Rn(m, !1),
											o = x.updateQueue,
											o !== null && ((r.updateQueue = o), (r.flags |= 4)),
											r.subtreeFlags = 0,
											o = n,
											n = r.child;
										n !== null;

									)
										(m = n),
											(t = o),
											(m.flags &= 14680066),
											(x = m.alternate),
											x === null
												? ((m.childLanes = 0),
												  (m.lanes = t),
												  (m.child = null),
												  (m.subtreeFlags = 0),
												  (m.memoizedProps = null),
												  (m.memoizedState = null),
												  (m.updateQueue = null),
												  (m.dependencies = null),
												  (m.stateNode = null))
												: ((m.childLanes = x.childLanes),
												  (m.lanes = x.lanes),
												  (m.child = x.child),
												  (m.subtreeFlags = 0),
												  (m.deletions = null),
												  (m.memoizedProps = x.memoizedProps),
												  (m.memoizedState = x.memoizedState),
												  (m.updateQueue = x.updateQueue),
												  (m.type = x.type),
												  (t = x.dependencies),
												  (m.dependencies =
														t === null
															? null
															: {
																	lanes: t.lanes,
																	firstContext: t.firstContext,
															  })),
											(n = n.sibling);
									return Le(De, (De.current & 1) | 2), r.child;
								}
								t = t.sibling;
							}
						m.tail !== null &&
							$e() > Ts &&
							((r.flags |= 128), (o = !0), Rn(m, !1), (r.lanes = 4194304));
					}
				else {
					if (!o)
						if (((t = za(x)), t !== null)) {
							if (
								((r.flags |= 128),
								(o = !0),
								(n = t.updateQueue),
								n !== null && ((r.updateQueue = n), (r.flags |= 4)),
								Rn(m, !0),
								m.tail === null &&
									m.tailMode === "hidden" &&
									!x.alternate &&
									!Me)
							)
								return it(r), null;
						} else
							2 * $e() - m.renderingStartTime > Ts &&
								n !== 1073741824 &&
								((r.flags |= 128), (o = !0), Rn(m, !1), (r.lanes = 4194304));
					m.isBackwards
						? ((x.sibling = r.child), (r.child = x))
						: ((n = m.last),
						  n !== null ? (n.sibling = x) : (r.child = x),
						  (m.last = x));
				}
				return m.tail !== null
					? ((r = m.tail),
					  (m.rendering = r),
					  (m.tail = r.sibling),
					  (m.renderingStartTime = $e()),
					  (r.sibling = null),
					  (n = De.current),
					  Le(De, o ? (n & 1) | 2 : n & 1),
					  r)
					: (it(r), null);
			case 22:
			case 23:
				return (
					uo(),
					(o = r.memoizedState !== null),
					t !== null && (t.memoizedState !== null) !== o && (r.flags |= 8192),
					o && (r.mode & 1) !== 0
						? (wt & 1073741824) !== 0 &&
						  (it(r), r.subtreeFlags & 6 && (r.flags |= 8192))
						: it(r),
					null
				);
			case 24:
				return null;
			case 25:
				return null;
		}
		throw Error(a(156, r.tag));
	}
	function gp(t, r) {
		switch ((vl(r), r.tag)) {
			case 1:
				return (
					ht(r.type) && Sa(),
					(t = r.flags),
					t & 65536 ? ((r.flags = (t & -65537) | 128), r) : null
				);
			case 3:
				return (
					Es(),
					ze(dt),
					ze(nt),
					Rl(),
					(t = r.flags),
					(t & 65536) !== 0 && (t & 128) === 0
						? ((r.flags = (t & -65537) | 128), r)
						: null
				);
			case 5:
				return Tl(r), null;
			case 13:
				if (
					(ze(De), (t = r.memoizedState), t !== null && t.dehydrated !== null)
				) {
					if (r.alternate === null) throw Error(a(340));
					ws();
				}
				return (
					(t = r.flags), t & 65536 ? ((r.flags = (t & -65537) | 128), r) : null
				);
			case 19:
				return ze(De), null;
			case 4:
				return Es(), null;
			case 10:
				return Sl(r.type._context), null;
			case 22:
			case 23:
				return uo(), null;
			case 24:
				return null;
			default:
				return null;
		}
	}
	var qa = !1,
		lt = !1,
		yp = typeof WeakSet == "function" ? WeakSet : Set,
		ce = null;
	function Cs(t, r) {
		var n = t.ref;
		if (n !== null)
			if (typeof n == "function")
				try {
					n(null);
				} catch (o) {
					Be(t, r, o);
				}
			else n.current = null;
	}
	function Xl(t, r, n) {
		try {
			n();
		} catch (o) {
			Be(t, r, o);
		}
	}
	var _d = !1;
	function vp(t, r) {
		if (((ul = da), (t = au()), rl(t))) {
			if ("selectionStart" in t)
				var n = { start: t.selectionStart, end: t.selectionEnd };
			else
				e: {
					n = ((n = t.ownerDocument) && n.defaultView) || window;
					var o = n.getSelection && n.getSelection();
					if (o && o.rangeCount !== 0) {
						n = o.anchorNode;
						var d = o.anchorOffset,
							m = o.focusNode;
						o = o.focusOffset;
						try {
							n.nodeType, m.nodeType;
						} catch {
							n = null;
							break e;
						}
						var x = 0,
							b = -1,
							E = -1,
							M = 0,
							K = 0,
							Z = t,
							H = null;
						t: for (;;) {
							for (
								var oe;
								Z !== n || (d !== 0 && Z.nodeType !== 3) || (b = x + d),
									Z !== m || (o !== 0 && Z.nodeType !== 3) || (E = x + o),
									Z.nodeType === 3 && (x += Z.nodeValue.length),
									(oe = Z.firstChild) !== null;

							)
								(H = Z), (Z = oe);
							for (;;) {
								if (Z === t) break t;
								if (
									(H === n && ++M === d && (b = x),
									H === m && ++K === o && (E = x),
									(oe = Z.nextSibling) !== null)
								)
									break;
								(Z = H), (H = Z.parentNode);
							}
							Z = oe;
						}
						n = b === -1 || E === -1 ? null : { start: b, end: E };
					} else n = null;
				}
			n = n || { start: 0, end: 0 };
		} else n = null;
		for (
			dl = { focusedElem: t, selectionRange: n }, da = !1, ce = r;
			ce !== null;

		)
			if (
				((r = ce), (t = r.child), (r.subtreeFlags & 1028) !== 0 && t !== null)
			)
				(t.return = r), (ce = t);
			else
				for (; ce !== null; ) {
					r = ce;
					try {
						var ue = r.alternate;
						if ((r.flags & 1024) !== 0)
							switch (r.tag) {
								case 0:
								case 11:
								case 15:
									break;
								case 1:
									if (ue !== null) {
										var de = ue.memoizedProps,
											Ve = ue.memoizedState,
											L = r.stateNode,
											P = L.getSnapshotBeforeUpdate(
												r.elementType === r.type ? de : Ot(r.type, de),
												Ve,
											);
										L.__reactInternalSnapshotBeforeUpdate = P;
									}
									break;
								case 3:
									var O = r.stateNode.containerInfo;
									O.nodeType === 1
										? (O.textContent = "")
										: O.nodeType === 9 &&
										  O.documentElement &&
										  O.removeChild(O.documentElement);
									break;
								case 5:
								case 6:
								case 4:
								case 17:
									break;
								default:
									throw Error(a(163));
							}
					} catch (te) {
						Be(r, r.return, te);
					}
					if (((t = r.sibling), t !== null)) {
						(t.return = r.return), (ce = t);
						break;
					}
					ce = r.return;
				}
		return (ue = _d), (_d = !1), ue;
	}
	function Ln(t, r, n) {
		var o = r.updateQueue;
		if (((o = o !== null ? o.lastEffect : null), o !== null)) {
			var d = (o = o.next);
			do {
				if ((d.tag & t) === t) {
					var m = d.destroy;
					(d.destroy = void 0), m !== void 0 && Xl(r, n, m);
				}
				d = d.next;
			} while (d !== o);
		}
	}
	function Ha(t, r) {
		if (
			((r = r.updateQueue), (r = r !== null ? r.lastEffect : null), r !== null)
		) {
			var n = (r = r.next);
			do {
				if ((n.tag & t) === t) {
					var o = n.create;
					n.destroy = o();
				}
				n = n.next;
			} while (n !== r);
		}
	}
	function Zl(t) {
		var r = t.ref;
		if (r !== null) {
			var n = t.stateNode;
			switch (t.tag) {
				case 5:
					t = n;
					break;
				default:
					t = n;
			}
			typeof r == "function" ? r(t) : (r.current = t);
		}
	}
	function Cd(t) {
		var r = t.alternate;
		r !== null && ((t.alternate = null), Cd(r)),
			(t.child = null),
			(t.deletions = null),
			(t.sibling = null),
			t.tag === 5 &&
				((r = t.stateNode),
				r !== null &&
					(delete r[qt],
					delete r[wn],
					delete r[pl],
					delete r[tp],
					delete r[rp])),
			(t.stateNode = null),
			(t.return = null),
			(t.dependencies = null),
			(t.memoizedProps = null),
			(t.memoizedState = null),
			(t.pendingProps = null),
			(t.stateNode = null),
			(t.updateQueue = null);
	}
	function Pd(t) {
		return t.tag === 5 || t.tag === 3 || t.tag === 4;
	}
	function Td(t) {
		e: for (;;) {
			for (; t.sibling === null; ) {
				if (t.return === null || Pd(t.return)) return null;
				t = t.return;
			}
			for (
				t.sibling.return = t.return, t = t.sibling;
				t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

			) {
				if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
				(t.child.return = t), (t = t.child);
			}
			if (!(t.flags & 2)) return t.stateNode;
		}
	}
	function eo(t, r, n) {
		var o = t.tag;
		if (o === 5 || o === 6)
			(t = t.stateNode),
				r
					? n.nodeType === 8
						? n.parentNode.insertBefore(t, r)
						: n.insertBefore(t, r)
					: (n.nodeType === 8
							? ((r = n.parentNode), r.insertBefore(t, n))
							: ((r = n), r.appendChild(t)),
					  (n = n._reactRootContainer),
					  n != null || r.onclick !== null || (r.onclick = Na));
		else if (o !== 4 && ((t = t.child), t !== null))
			for (eo(t, r, n), t = t.sibling; t !== null; )
				eo(t, r, n), (t = t.sibling);
	}
	function to(t, r, n) {
		var o = t.tag;
		if (o === 5 || o === 6)
			(t = t.stateNode), r ? n.insertBefore(t, r) : n.appendChild(t);
		else if (o !== 4 && ((t = t.child), t !== null))
			for (to(t, r, n), t = t.sibling; t !== null; )
				to(t, r, n), (t = t.sibling);
	}
	var et = null,
		It = !1;
	function wr(t, r, n) {
		for (n = n.child; n !== null; ) Ad(t, r, n), (n = n.sibling);
	}
	function Ad(t, r, n) {
		if (Wt && typeof Wt.onCommitFiberUnmount == "function")
			try {
				Wt.onCommitFiberUnmount(aa, n);
			} catch {}
		switch (n.tag) {
			case 5:
				lt || Cs(n, r);
			case 6:
				var o = et,
					d = It;
				(et = null),
					wr(t, r, n),
					(et = o),
					(It = d),
					et !== null &&
						(It
							? ((t = et),
							  (n = n.stateNode),
							  t.nodeType === 8
									? t.parentNode.removeChild(n)
									: t.removeChild(n))
							: et.removeChild(n.stateNode));
				break;
			case 18:
				et !== null &&
					(It
						? ((t = et),
						  (n = n.stateNode),
						  t.nodeType === 8
								? fl(t.parentNode, n)
								: t.nodeType === 1 && fl(t, n),
						  dn(t))
						: fl(et, n.stateNode));
				break;
			case 4:
				(o = et),
					(d = It),
					(et = n.stateNode.containerInfo),
					(It = !0),
					wr(t, r, n),
					(et = o),
					(It = d);
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (
					!lt &&
					((o = n.updateQueue), o !== null && ((o = o.lastEffect), o !== null))
				) {
					d = o = o.next;
					do {
						var m = d,
							x = m.destroy;
						(m = m.tag),
							x !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && Xl(n, r, x),
							(d = d.next);
					} while (d !== o);
				}
				wr(t, r, n);
				break;
			case 1:
				if (
					!lt &&
					(Cs(n, r),
					(o = n.stateNode),
					typeof o.componentWillUnmount == "function")
				)
					try {
						(o.props = n.memoizedProps),
							(o.state = n.memoizedState),
							o.componentWillUnmount();
					} catch (b) {
						Be(n, r, b);
					}
				wr(t, r, n);
				break;
			case 21:
				wr(t, r, n);
				break;
			case 22:
				n.mode & 1
					? ((lt = (o = lt) || n.memoizedState !== null), wr(t, r, n), (lt = o))
					: wr(t, r, n);
				break;
			default:
				wr(t, r, n);
		}
	}
	function Rd(t) {
		var r = t.updateQueue;
		if (r !== null) {
			t.updateQueue = null;
			var n = t.stateNode;
			n === null && (n = t.stateNode = new yp()),
				r.forEach(function (o) {
					var d = Cp.bind(null, t, o);
					n.has(o) || (n.add(o), o.then(d, d));
				});
		}
	}
	function zt(t, r) {
		var n = r.deletions;
		if (n !== null)
			for (var o = 0; o < n.length; o++) {
				var d = n[o];
				try {
					var m = t,
						x = r,
						b = x;
					e: for (; b !== null; ) {
						switch (b.tag) {
							case 5:
								(et = b.stateNode), (It = !1);
								break e;
							case 3:
								(et = b.stateNode.containerInfo), (It = !0);
								break e;
							case 4:
								(et = b.stateNode.containerInfo), (It = !0);
								break e;
						}
						b = b.return;
					}
					if (et === null) throw Error(a(160));
					Ad(m, x, d), (et = null), (It = !1);
					var E = d.alternate;
					E !== null && (E.return = null), (d.return = null);
				} catch (M) {
					Be(d, r, M);
				}
			}
		if (r.subtreeFlags & 12854)
			for (r = r.child; r !== null; ) Ld(r, t), (r = r.sibling);
	}
	function Ld(t, r) {
		var n = t.alternate,
			o = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if ((zt(r, t), Kt(t), o & 4)) {
					try {
						Ln(3, t, t.return), Ha(3, t);
					} catch (de) {
						Be(t, t.return, de);
					}
					try {
						Ln(5, t, t.return);
					} catch (de) {
						Be(t, t.return, de);
					}
				}
				break;
			case 1:
				zt(r, t), Kt(t), o & 512 && n !== null && Cs(n, n.return);
				break;
			case 5:
				if (
					(zt(r, t),
					Kt(t),
					o & 512 && n !== null && Cs(n, n.return),
					t.flags & 32)
				) {
					var d = t.stateNode;
					try {
						Zs(d, "");
					} catch (de) {
						Be(t, t.return, de);
					}
				}
				if (o & 4 && ((d = t.stateNode), d != null)) {
					var m = t.memoizedProps,
						x = n !== null ? n.memoizedProps : m,
						b = t.type,
						E = t.updateQueue;
					if (((t.updateQueue = null), E !== null))
						try {
							b === "input" && m.type === "radio" && m.name != null && Xs(d, m),
								Ri(b, x);
							var M = Ri(b, m);
							for (x = 0; x < E.length; x += 2) {
								var K = E[x],
									Z = E[x + 1];
								K === "style"
									? pc(d, Z)
									: K === "dangerouslySetInnerHTML"
									? mc(d, Z)
									: K === "children"
									? Zs(d, Z)
									: N(d, K, Z, M);
							}
							switch (b) {
								case "input":
									as(d, m);
									break;
								case "textarea":
									ls(d, m);
									break;
								case "select":
									var H = d._wrapperState.wasMultiple;
									d._wrapperState.wasMultiple = !!m.multiple;
									var oe = m.value;
									oe != null
										? we(d, !!m.multiple, oe, !1)
										: H !== !!m.multiple &&
										  (m.defaultValue != null
												? we(d, !!m.multiple, m.defaultValue, !0)
												: we(d, !!m.multiple, m.multiple ? [] : "", !1));
							}
							d[wn] = m;
						} catch (de) {
							Be(t, t.return, de);
						}
				}
				break;
			case 6:
				if ((zt(r, t), Kt(t), o & 4)) {
					if (t.stateNode === null) throw Error(a(162));
					(d = t.stateNode), (m = t.memoizedProps);
					try {
						d.nodeValue = m;
					} catch (de) {
						Be(t, t.return, de);
					}
				}
				break;
			case 3:
				if (
					(zt(r, t), Kt(t), o & 4 && n !== null && n.memoizedState.isDehydrated)
				)
					try {
						dn(r.containerInfo);
					} catch (de) {
						Be(t, t.return, de);
					}
				break;
			case 4:
				zt(r, t), Kt(t);
				break;
			case 13:
				zt(r, t),
					Kt(t),
					(d = t.child),
					d.flags & 8192 &&
						((m = d.memoizedState !== null),
						(d.stateNode.isHidden = m),
						!m ||
							(d.alternate !== null && d.alternate.memoizedState !== null) ||
							(no = $e())),
					o & 4 && Rd(t);
				break;
			case 22:
				if (
					((K = n !== null && n.memoizedState !== null),
					t.mode & 1 ? ((lt = (M = lt) || K), zt(r, t), (lt = M)) : zt(r, t),
					Kt(t),
					o & 8192)
				) {
					if (
						((M = t.memoizedState !== null),
						(t.stateNode.isHidden = M) && !K && (t.mode & 1) !== 0)
					)
						for (ce = t, K = t.child; K !== null; ) {
							for (Z = ce = K; ce !== null; ) {
								switch (((H = ce), (oe = H.child), H.tag)) {
									case 0:
									case 11:
									case 14:
									case 15:
										Ln(4, H, H.return);
										break;
									case 1:
										Cs(H, H.return);
										var ue = H.stateNode;
										if (typeof ue.componentWillUnmount == "function") {
											(o = H), (n = H.return);
											try {
												(r = o),
													(ue.props = r.memoizedProps),
													(ue.state = r.memoizedState),
													ue.componentWillUnmount();
											} catch (de) {
												Be(o, n, de);
											}
										}
										break;
									case 5:
										Cs(H, H.return);
										break;
									case 22:
										if (H.memoizedState !== null) {
											zd(Z);
											continue;
										}
								}
								oe !== null ? ((oe.return = H), (ce = oe)) : zd(Z);
							}
							K = K.sibling;
						}
					e: for (K = null, Z = t; ; ) {
						if (Z.tag === 5) {
							if (K === null) {
								K = Z;
								try {
									(d = Z.stateNode),
										M
											? ((m = d.style),
											  typeof m.setProperty == "function"
													? m.setProperty("display", "none", "important")
													: (m.display = "none"))
											: ((b = Z.stateNode),
											  (E = Z.memoizedProps.style),
											  (x =
													E != null && E.hasOwnProperty("display")
														? E.display
														: null),
											  (b.style.display = fc("display", x)));
								} catch (de) {
									Be(t, t.return, de);
								}
							}
						} else if (Z.tag === 6) {
							if (K === null)
								try {
									Z.stateNode.nodeValue = M ? "" : Z.memoizedProps;
								} catch (de) {
									Be(t, t.return, de);
								}
						} else if (
							((Z.tag !== 22 && Z.tag !== 23) ||
								Z.memoizedState === null ||
								Z === t) &&
							Z.child !== null
						) {
							(Z.child.return = Z), (Z = Z.child);
							continue;
						}
						if (Z === t) break e;
						for (; Z.sibling === null; ) {
							if (Z.return === null || Z.return === t) break e;
							K === Z && (K = null), (Z = Z.return);
						}
						K === Z && (K = null),
							(Z.sibling.return = Z.return),
							(Z = Z.sibling);
					}
				}
				break;
			case 19:
				zt(r, t), Kt(t), o & 4 && Rd(t);
				break;
			case 21:
				break;
			default:
				zt(r, t), Kt(t);
		}
	}
	function Kt(t) {
		var r = t.flags;
		if (r & 2) {
			try {
				e: {
					for (var n = t.return; n !== null; ) {
						if (Pd(n)) {
							var o = n;
							break e;
						}
						n = n.return;
					}
					throw Error(a(160));
				}
				switch (o.tag) {
					case 5:
						var d = o.stateNode;
						o.flags & 32 && (Zs(d, ""), (o.flags &= -33));
						var m = Td(t);
						to(t, m, d);
						break;
					case 3:
					case 4:
						var x = o.stateNode.containerInfo,
							b = Td(t);
						eo(t, b, x);
						break;
					default:
						throw Error(a(161));
				}
			} catch (E) {
				Be(t, t.return, E);
			}
			t.flags &= -3;
		}
		r & 4096 && (t.flags &= -4097);
	}
	function bp(t, r, n) {
		(ce = t), Od(t);
	}
	function Od(t, r, n) {
		for (var o = (t.mode & 1) !== 0; ce !== null; ) {
			var d = ce,
				m = d.child;
			if (d.tag === 22 && o) {
				var x = d.memoizedState !== null || qa;
				if (!x) {
					var b = d.alternate,
						E = (b !== null && b.memoizedState !== null) || lt;
					b = qa;
					var M = lt;
					if (((qa = x), (lt = E) && !M))
						for (ce = d; ce !== null; )
							(x = ce),
								(E = x.child),
								x.tag === 22 && x.memoizedState !== null
									? Md(d)
									: E !== null
									? ((E.return = x), (ce = E))
									: Md(d);
					for (; m !== null; ) (ce = m), Od(m), (m = m.sibling);
					(ce = d), (qa = b), (lt = M);
				}
				Id(t);
			} else
				(d.subtreeFlags & 8772) !== 0 && m !== null
					? ((m.return = d), (ce = m))
					: Id(t);
		}
	}
	function Id(t) {
		for (; ce !== null; ) {
			var r = ce;
			if ((r.flags & 8772) !== 0) {
				var n = r.alternate;
				try {
					if ((r.flags & 8772) !== 0)
						switch (r.tag) {
							case 0:
							case 11:
							case 15:
								lt || Ha(5, r);
								break;
							case 1:
								var o = r.stateNode;
								if (r.flags & 4 && !lt)
									if (n === null) o.componentDidMount();
									else {
										var d =
											r.elementType === r.type
												? n.memoizedProps
												: Ot(r.type, n.memoizedProps);
										o.componentDidUpdate(
											d,
											n.memoizedState,
											o.__reactInternalSnapshotBeforeUpdate,
										);
									}
								var m = r.updateQueue;
								m !== null && zu(r, m, o);
								break;
							case 3:
								var x = r.updateQueue;
								if (x !== null) {
									if (((n = null), r.child !== null))
										switch (r.child.tag) {
											case 5:
												n = r.child.stateNode;
												break;
											case 1:
												n = r.child.stateNode;
										}
									zu(r, x, n);
								}
								break;
							case 5:
								var b = r.stateNode;
								if (n === null && r.flags & 4) {
									n = b;
									var E = r.memoizedProps;
									switch (r.type) {
										case "button":
										case "input":
										case "select":
										case "textarea":
											E.autoFocus && n.focus();
											break;
										case "img":
											E.src && (n.src = E.src);
									}
								}
								break;
							case 6:
								break;
							case 4:
								break;
							case 12:
								break;
							case 13:
								if (r.memoizedState === null) {
									var M = r.alternate;
									if (M !== null) {
										var K = M.memoizedState;
										if (K !== null) {
											var Z = K.dehydrated;
											Z !== null && dn(Z);
										}
									}
								}
								break;
							case 19:
							case 17:
							case 21:
							case 22:
							case 23:
							case 25:
								break;
							default:
								throw Error(a(163));
						}
					lt || (r.flags & 512 && Zl(r));
				} catch (H) {
					Be(r, r.return, H);
				}
			}
			if (r === t) {
				ce = null;
				break;
			}
			if (((n = r.sibling), n !== null)) {
				(n.return = r.return), (ce = n);
				break;
			}
			ce = r.return;
		}
	}
	function zd(t) {
		for (; ce !== null; ) {
			var r = ce;
			if (r === t) {
				ce = null;
				break;
			}
			var n = r.sibling;
			if (n !== null) {
				(n.return = r.return), (ce = n);
				break;
			}
			ce = r.return;
		}
	}
	function Md(t) {
		for (; ce !== null; ) {
			var r = ce;
			try {
				switch (r.tag) {
					case 0:
					case 11:
					case 15:
						var n = r.return;
						try {
							Ha(4, r);
						} catch (E) {
							Be(r, n, E);
						}
						break;
					case 1:
						var o = r.stateNode;
						if (typeof o.componentDidMount == "function") {
							var d = r.return;
							try {
								o.componentDidMount();
							} catch (E) {
								Be(r, d, E);
							}
						}
						var m = r.return;
						try {
							Zl(r);
						} catch (E) {
							Be(r, m, E);
						}
						break;
					case 5:
						var x = r.return;
						try {
							Zl(r);
						} catch (E) {
							Be(r, x, E);
						}
				}
			} catch (E) {
				Be(r, r.return, E);
			}
			if (r === t) {
				ce = null;
				break;
			}
			var b = r.sibling;
			if (b !== null) {
				(b.return = r.return), (ce = b);
				break;
			}
			ce = r.return;
		}
	}
	var jp = Math.ceil,
		Ga = G.ReactCurrentDispatcher,
		ro = G.ReactCurrentOwner,
		Ct = G.ReactCurrentBatchConfig,
		Te = 0,
		Je = null,
		We = null,
		tt = 0,
		wt = 0,
		Ps = gr(0),
		Ke = 0,
		On = null,
		Hr = 0,
		Ka = 0,
		so = 0,
		In = null,
		ft = null,
		no = 0,
		Ts = 1 / 0,
		nr = null,
		Ya = !1,
		ao = null,
		Nr = null,
		Ja = !1,
		kr = null,
		Qa = 0,
		zn = 0,
		io = null,
		Xa = -1,
		Za = 0;
	function ct() {
		return (Te & 6) !== 0 ? $e() : Xa !== -1 ? Xa : (Xa = $e());
	}
	function Sr(t) {
		return (t.mode & 1) === 0
			? 1
			: (Te & 2) !== 0 && tt !== 0
			? tt & -tt
			: np.transition !== null
			? (Za === 0 && (Za = Tc()), Za)
			: ((t = Re),
			  t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Uc(t.type))),
			  t);
	}
	function Mt(t, r, n, o) {
		if (50 < zn) throw ((zn = 0), (io = null), Error(a(185)));
		an(t, n, o),
			((Te & 2) === 0 || t !== Je) &&
				(t === Je && ((Te & 2) === 0 && (Ka |= n), Ke === 4 && Er(t, tt)),
				pt(t, o),
				n === 1 &&
					Te === 0 &&
					(r.mode & 1) === 0 &&
					((Ts = $e() + 500), _a && vr()));
	}
	function pt(t, r) {
		var n = t.callbackNode;
		sf(t, r);
		var o = oa(t, t === Je ? tt : 0);
		if (o === 0)
			n !== null && _c(n), (t.callbackNode = null), (t.callbackPriority = 0);
		else if (((r = o & -o), t.callbackPriority !== r)) {
			if ((n != null && _c(n), r === 1))
				t.tag === 0 ? sp(Ud.bind(null, t)) : ku(Ud.bind(null, t)),
					Zf(function () {
						(Te & 6) === 0 && vr();
					}),
					(n = null);
			else {
				switch (Ac(o)) {
					case 1:
						n = Ui;
						break;
					case 4:
						n = Cc;
						break;
					case 16:
						n = na;
						break;
					case 536870912:
						n = Pc;
						break;
					default:
						n = na;
				}
				n = Gd(n, Dd.bind(null, t));
			}
			(t.callbackPriority = r), (t.callbackNode = n);
		}
	}
	function Dd(t, r) {
		if (((Xa = -1), (Za = 0), (Te & 6) !== 0)) throw Error(a(327));
		var n = t.callbackNode;
		if (As() && t.callbackNode !== n) return null;
		var o = oa(t, t === Je ? tt : 0);
		if (o === 0) return null;
		if ((o & 30) !== 0 || (o & t.expiredLanes) !== 0 || r) r = ei(t, o);
		else {
			r = o;
			var d = Te;
			Te |= 2;
			var m = Bd();
			(Je !== t || tt !== r) && ((nr = null), (Ts = $e() + 500), Kr(t, r));
			do
				try {
					kp();
					break;
				} catch (b) {
					Fd(t, b);
				}
			while (!0);
			kl(),
				(Ga.current = m),
				(Te = d),
				We !== null ? (r = 0) : ((Je = null), (tt = 0), (r = Ke));
		}
		if (r !== 0) {
			if (
				(r === 2 && ((d = Fi(t)), d !== 0 && ((o = d), (r = lo(t, d)))),
				r === 1)
			)
				throw ((n = On), Kr(t, 0), Er(t, o), pt(t, $e()), n);
			if (r === 6) Er(t, o);
			else {
				if (
					((d = t.current.alternate),
					(o & 30) === 0 &&
						!wp(d) &&
						((r = ei(t, o)),
						r === 2 && ((m = Fi(t)), m !== 0 && ((o = m), (r = lo(t, m)))),
						r === 1))
				)
					throw ((n = On), Kr(t, 0), Er(t, o), pt(t, $e()), n);
				switch (((t.finishedWork = d), (t.finishedLanes = o), r)) {
					case 0:
					case 1:
						throw Error(a(345));
					case 2:
						Yr(t, ft, nr);
						break;
					case 3:
						if (
							(Er(t, o),
							(o & 130023424) === o && ((r = no + 500 - $e()), 10 < r))
						) {
							if (oa(t, 0) !== 0) break;
							if (((d = t.suspendedLanes), (d & o) !== o)) {
								ct(), (t.pingedLanes |= t.suspendedLanes & d);
								break;
							}
							t.timeoutHandle = ml(Yr.bind(null, t, ft, nr), r);
							break;
						}
						Yr(t, ft, nr);
						break;
					case 4:
						if ((Er(t, o), (o & 4194240) === o)) break;
						for (r = t.eventTimes, d = -1; 0 < o; ) {
							var x = 31 - At(o);
							(m = 1 << x), (x = r[x]), x > d && (d = x), (o &= ~m);
						}
						if (
							((o = d),
							(o = $e() - o),
							(o =
								(120 > o
									? 120
									: 480 > o
									? 480
									: 1080 > o
									? 1080
									: 1920 > o
									? 1920
									: 3e3 > o
									? 3e3
									: 4320 > o
									? 4320
									: 1960 * jp(o / 1960)) - o),
							10 < o)
						) {
							t.timeoutHandle = ml(Yr.bind(null, t, ft, nr), o);
							break;
						}
						Yr(t, ft, nr);
						break;
					case 5:
						Yr(t, ft, nr);
						break;
					default:
						throw Error(a(329));
				}
			}
		}
		return pt(t, $e()), t.callbackNode === n ? Dd.bind(null, t) : null;
	}
	function lo(t, r) {
		var n = In;
		return (
			t.current.memoizedState.isDehydrated && (Kr(t, r).flags |= 256),
			(t = ei(t, r)),
			t !== 2 && ((r = ft), (ft = n), r !== null && oo(r)),
			t
		);
	}
	function oo(t) {
		ft === null ? (ft = t) : ft.push.apply(ft, t);
	}
	function wp(t) {
		for (var r = t; ; ) {
			if (r.flags & 16384) {
				var n = r.updateQueue;
				if (n !== null && ((n = n.stores), n !== null))
					for (var o = 0; o < n.length; o++) {
						var d = n[o],
							m = d.getSnapshot;
						d = d.value;
						try {
							if (!Rt(m(), d)) return !1;
						} catch {
							return !1;
						}
					}
			}
			if (((n = r.child), r.subtreeFlags & 16384 && n !== null))
				(n.return = r), (r = n);
			else {
				if (r === t) break;
				for (; r.sibling === null; ) {
					if (r.return === null || r.return === t) return !0;
					r = r.return;
				}
				(r.sibling.return = r.return), (r = r.sibling);
			}
		}
		return !0;
	}
	function Er(t, r) {
		for (
			r &= ~so,
				r &= ~Ka,
				t.suspendedLanes |= r,
				t.pingedLanes &= ~r,
				t = t.expirationTimes;
			0 < r;

		) {
			var n = 31 - At(r),
				o = 1 << n;
			(t[n] = -1), (r &= ~o);
		}
	}
	function Ud(t) {
		if ((Te & 6) !== 0) throw Error(a(327));
		As();
		var r = oa(t, 0);
		if ((r & 1) === 0) return pt(t, $e()), null;
		var n = ei(t, r);
		if (t.tag !== 0 && n === 2) {
			var o = Fi(t);
			o !== 0 && ((r = o), (n = lo(t, o)));
		}
		if (n === 1) throw ((n = On), Kr(t, 0), Er(t, r), pt(t, $e()), n);
		if (n === 6) throw Error(a(345));
		return (
			(t.finishedWork = t.current.alternate),
			(t.finishedLanes = r),
			Yr(t, ft, nr),
			pt(t, $e()),
			null
		);
	}
	function co(t, r) {
		var n = Te;
		Te |= 1;
		try {
			return t(r);
		} finally {
			(Te = n), Te === 0 && ((Ts = $e() + 500), _a && vr());
		}
	}
	function Gr(t) {
		kr !== null && kr.tag === 0 && (Te & 6) === 0 && As();
		var r = Te;
		Te |= 1;
		var n = Ct.transition,
			o = Re;
		try {
			if (((Ct.transition = null), (Re = 1), t)) return t();
		} finally {
			(Re = o), (Ct.transition = n), (Te = r), (Te & 6) === 0 && vr();
		}
	}
	function uo() {
		(wt = Ps.current), ze(Ps);
	}
	function Kr(t, r) {
		(t.finishedWork = null), (t.finishedLanes = 0);
		var n = t.timeoutHandle;
		if ((n !== -1 && ((t.timeoutHandle = -1), Xf(n)), We !== null))
			for (n = We.return; n !== null; ) {
				var o = n;
				switch ((vl(o), o.tag)) {
					case 1:
						(o = o.type.childContextTypes), o != null && Sa();
						break;
					case 3:
						Es(), ze(dt), ze(nt), Rl();
						break;
					case 5:
						Tl(o);
						break;
					case 4:
						Es();
						break;
					case 13:
						ze(De);
						break;
					case 19:
						ze(De);
						break;
					case 10:
						Sl(o.type._context);
						break;
					case 22:
					case 23:
						uo();
				}
				n = n.return;
			}
		if (
			((Je = t),
			(We = t = _r(t.current, null)),
			(tt = wt = r),
			(Ke = 0),
			(On = null),
			(so = Ka = Hr = 0),
			(ft = In = null),
			Vr !== null)
		) {
			for (r = 0; r < Vr.length; r++)
				if (((n = Vr[r]), (o = n.interleaved), o !== null)) {
					n.interleaved = null;
					var d = o.next,
						m = n.pending;
					if (m !== null) {
						var x = m.next;
						(m.next = d), (o.next = x);
					}
					n.pending = o;
				}
			Vr = null;
		}
		return t;
	}
	function Fd(t, r) {
		do {
			var n = We;
			try {
				if ((kl(), (Ma.current = Ba), Da)) {
					for (var o = Ue.memoizedState; o !== null; ) {
						var d = o.queue;
						d !== null && (d.pending = null), (o = o.next);
					}
					Da = !1;
				}
				if (
					((qr = 0),
					(Ye = Ge = Ue = null),
					(Cn = !1),
					(Pn = 0),
					(ro.current = null),
					n === null || n.return === null)
				) {
					(Ke = 1), (On = r), (We = null);
					break;
				}
				e: {
					var m = t,
						x = n.return,
						b = n,
						E = r;
					if (
						((r = tt),
						(b.flags |= 32768),
						E !== null && typeof E == "object" && typeof E.then == "function")
					) {
						var M = E,
							K = b,
							Z = K.tag;
						if ((K.mode & 1) === 0 && (Z === 0 || Z === 11 || Z === 15)) {
							var H = K.alternate;
							H
								? ((K.updateQueue = H.updateQueue),
								  (K.memoizedState = H.memoizedState),
								  (K.lanes = H.lanes))
								: ((K.updateQueue = null), (K.memoizedState = null));
						}
						var oe = dd(x);
						if (oe !== null) {
							(oe.flags &= -257),
								hd(oe, x, b, m, r),
								oe.mode & 1 && ud(m, M, r),
								(r = oe),
								(E = M);
							var ue = r.updateQueue;
							if (ue === null) {
								var de = new Set();
								de.add(E), (r.updateQueue = de);
							} else ue.add(E);
							break e;
						} else {
							if ((r & 1) === 0) {
								ud(m, M, r), ho();
								break e;
							}
							E = Error(a(426));
						}
					} else if (Me && b.mode & 1) {
						var Ve = dd(x);
						if (Ve !== null) {
							(Ve.flags & 65536) === 0 && (Ve.flags |= 256),
								hd(Ve, x, b, m, r),
								wl(_s(E, b));
							break e;
						}
					}
					(m = E = _s(E, b)),
						Ke !== 4 && (Ke = 2),
						In === null ? (In = [m]) : In.push(m),
						(m = x);
					do {
						switch (m.tag) {
							case 3:
								(m.flags |= 65536), (r &= -r), (m.lanes |= r);
								var L = od(m, E, r);
								Iu(m, L);
								break e;
							case 1:
								b = E;
								var P = m.type,
									O = m.stateNode;
								if (
									(m.flags & 128) === 0 &&
									(typeof P.getDerivedStateFromError == "function" ||
										(O !== null &&
											typeof O.componentDidCatch == "function" &&
											(Nr === null || !Nr.has(O))))
								) {
									(m.flags |= 65536), (r &= -r), (m.lanes |= r);
									var te = cd(m, b, r);
									Iu(m, te);
									break e;
								}
						}
						m = m.return;
					} while (m !== null);
				}
				Vd(n);
			} catch (me) {
				(r = me), We === n && n !== null && (We = n = n.return);
				continue;
			}
			break;
		} while (!0);
	}
	function Bd() {
		var t = Ga.current;
		return (Ga.current = Ba), t === null ? Ba : t;
	}
	function ho() {
		(Ke === 0 || Ke === 3 || Ke === 2) && (Ke = 4),
			Je === null ||
				((Hr & 268435455) === 0 && (Ka & 268435455) === 0) ||
				Er(Je, tt);
	}
	function ei(t, r) {
		var n = Te;
		Te |= 2;
		var o = Bd();
		(Je !== t || tt !== r) && ((nr = null), Kr(t, r));
		do
			try {
				Np();
				break;
			} catch (d) {
				Fd(t, d);
			}
		while (!0);
		if ((kl(), (Te = n), (Ga.current = o), We !== null)) throw Error(a(261));
		return (Je = null), (tt = 0), Ke;
	}
	function Np() {
		for (; We !== null; ) $d(We);
	}
	function kp() {
		for (; We !== null && !Km(); ) $d(We);
	}
	function $d(t) {
		var r = Hd(t.alternate, t, wt);
		(t.memoizedProps = t.pendingProps),
			r === null ? Vd(t) : (We = r),
			(ro.current = null);
	}
	function Vd(t) {
		var r = t;
		do {
			var n = r.alternate;
			if (((t = r.return), (r.flags & 32768) === 0)) {
				if (((n = xp(n, r, wt)), n !== null)) {
					We = n;
					return;
				}
			} else {
				if (((n = gp(n, r)), n !== null)) {
					(n.flags &= 32767), (We = n);
					return;
				}
				if (t !== null)
					(t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
				else {
					(Ke = 6), (We = null);
					return;
				}
			}
			if (((r = r.sibling), r !== null)) {
				We = r;
				return;
			}
			We = r = t;
		} while (r !== null);
		Ke === 0 && (Ke = 5);
	}
	function Yr(t, r, n) {
		var o = Re,
			d = Ct.transition;
		try {
			(Ct.transition = null), (Re = 1), Sp(t, r, n, o);
		} finally {
			(Ct.transition = d), (Re = o);
		}
		return null;
	}
	function Sp(t, r, n, o) {
		do As();
		while (kr !== null);
		if ((Te & 6) !== 0) throw Error(a(327));
		n = t.finishedWork;
		var d = t.finishedLanes;
		if (n === null) return null;
		if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
			throw Error(a(177));
		(t.callbackNode = null), (t.callbackPriority = 0);
		var m = n.lanes | n.childLanes;
		if (
			(nf(t, m),
			t === Je && ((We = Je = null), (tt = 0)),
			((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
				Ja ||
				((Ja = !0),
				Gd(na, function () {
					return As(), null;
				})),
			(m = (n.flags & 15990) !== 0),
			(n.subtreeFlags & 15990) !== 0 || m)
		) {
			(m = Ct.transition), (Ct.transition = null);
			var x = Re;
			Re = 1;
			var b = Te;
			(Te |= 4),
				(ro.current = null),
				vp(t, n),
				Ld(n, t),
				qf(dl),
				(da = !!ul),
				(dl = ul = null),
				(t.current = n),
				bp(n),
				Ym(),
				(Te = b),
				(Re = x),
				(Ct.transition = m);
		} else t.current = n;
		if (
			(Ja && ((Ja = !1), (kr = t), (Qa = d)),
			(m = t.pendingLanes),
			m === 0 && (Nr = null),
			Xm(n.stateNode),
			pt(t, $e()),
			r !== null)
		)
			for (o = t.onRecoverableError, n = 0; n < r.length; n++)
				(d = r[n]), o(d.value, { componentStack: d.stack, digest: d.digest });
		if (Ya) throw ((Ya = !1), (t = ao), (ao = null), t);
		return (
			(Qa & 1) !== 0 && t.tag !== 0 && As(),
			(m = t.pendingLanes),
			(m & 1) !== 0 ? (t === io ? zn++ : ((zn = 0), (io = t))) : (zn = 0),
			vr(),
			null
		);
	}
	function As() {
		if (kr !== null) {
			var t = Ac(Qa),
				r = Ct.transition,
				n = Re;
			try {
				if (((Ct.transition = null), (Re = 16 > t ? 16 : t), kr === null))
					var o = !1;
				else {
					if (((t = kr), (kr = null), (Qa = 0), (Te & 6) !== 0))
						throw Error(a(331));
					var d = Te;
					for (Te |= 4, ce = t.current; ce !== null; ) {
						var m = ce,
							x = m.child;
						if ((ce.flags & 16) !== 0) {
							var b = m.deletions;
							if (b !== null) {
								for (var E = 0; E < b.length; E++) {
									var M = b[E];
									for (ce = M; ce !== null; ) {
										var K = ce;
										switch (K.tag) {
											case 0:
											case 11:
											case 15:
												Ln(8, K, m);
										}
										var Z = K.child;
										if (Z !== null) (Z.return = K), (ce = Z);
										else
											for (; ce !== null; ) {
												K = ce;
												var H = K.sibling,
													oe = K.return;
												if ((Cd(K), K === M)) {
													ce = null;
													break;
												}
												if (H !== null) {
													(H.return = oe), (ce = H);
													break;
												}
												ce = oe;
											}
									}
								}
								var ue = m.alternate;
								if (ue !== null) {
									var de = ue.child;
									if (de !== null) {
										ue.child = null;
										do {
											var Ve = de.sibling;
											(de.sibling = null), (de = Ve);
										} while (de !== null);
									}
								}
								ce = m;
							}
						}
						if ((m.subtreeFlags & 2064) !== 0 && x !== null)
							(x.return = m), (ce = x);
						else
							e: for (; ce !== null; ) {
								if (((m = ce), (m.flags & 2048) !== 0))
									switch (m.tag) {
										case 0:
										case 11:
										case 15:
											Ln(9, m, m.return);
									}
								var L = m.sibling;
								if (L !== null) {
									(L.return = m.return), (ce = L);
									break e;
								}
								ce = m.return;
							}
					}
					var P = t.current;
					for (ce = P; ce !== null; ) {
						x = ce;
						var O = x.child;
						if ((x.subtreeFlags & 2064) !== 0 && O !== null)
							(O.return = x), (ce = O);
						else
							e: for (x = P; ce !== null; ) {
								if (((b = ce), (b.flags & 2048) !== 0))
									try {
										switch (b.tag) {
											case 0:
											case 11:
											case 15:
												Ha(9, b);
										}
									} catch (me) {
										Be(b, b.return, me);
									}
								if (b === x) {
									ce = null;
									break e;
								}
								var te = b.sibling;
								if (te !== null) {
									(te.return = b.return), (ce = te);
									break e;
								}
								ce = b.return;
							}
					}
					if (
						((Te = d),
						vr(),
						Wt && typeof Wt.onPostCommitFiberRoot == "function")
					)
						try {
							Wt.onPostCommitFiberRoot(aa, t);
						} catch {}
					o = !0;
				}
				return o;
			} finally {
				(Re = n), (Ct.transition = r);
			}
		}
		return !1;
	}
	function Wd(t, r, n) {
		(r = _s(n, r)),
			(r = od(t, r, 1)),
			(t = jr(t, r, 1)),
			(r = ct()),
			t !== null && (an(t, 1, r), pt(t, r));
	}
	function Be(t, r, n) {
		if (t.tag === 3) Wd(t, t, n);
		else
			for (; r !== null; ) {
				if (r.tag === 3) {
					Wd(r, t, n);
					break;
				} else if (r.tag === 1) {
					var o = r.stateNode;
					if (
						typeof r.type.getDerivedStateFromError == "function" ||
						(typeof o.componentDidCatch == "function" &&
							(Nr === null || !Nr.has(o)))
					) {
						(t = _s(n, t)),
							(t = cd(r, t, 1)),
							(r = jr(r, t, 1)),
							(t = ct()),
							r !== null && (an(r, 1, t), pt(r, t));
						break;
					}
				}
				r = r.return;
			}
	}
	function Ep(t, r, n) {
		var o = t.pingCache;
		o !== null && o.delete(r),
			(r = ct()),
			(t.pingedLanes |= t.suspendedLanes & n),
			Je === t &&
				(tt & n) === n &&
				(Ke === 4 || (Ke === 3 && (tt & 130023424) === tt && 500 > $e() - no)
					? Kr(t, 0)
					: (so |= n)),
			pt(t, r);
	}
	function qd(t, r) {
		r === 0 &&
			((t.mode & 1) === 0
				? (r = 1)
				: ((r = la), (la <<= 1), (la & 130023424) === 0 && (la = 4194304)));
		var n = ct();
		(t = tr(t, r)), t !== null && (an(t, r, n), pt(t, n));
	}
	function _p(t) {
		var r = t.memoizedState,
			n = 0;
		r !== null && (n = r.retryLane), qd(t, n);
	}
	function Cp(t, r) {
		var n = 0;
		switch (t.tag) {
			case 13:
				var o = t.stateNode,
					d = t.memoizedState;
				d !== null && (n = d.retryLane);
				break;
			case 19:
				o = t.stateNode;
				break;
			default:
				throw Error(a(314));
		}
		o !== null && o.delete(r), qd(t, n);
	}
	var Hd;
	Hd = function (t, r, n) {
		if (t !== null)
			if (t.memoizedProps !== r.pendingProps || dt.current) mt = !0;
			else {
				if ((t.lanes & n) === 0 && (r.flags & 128) === 0)
					return (mt = !1), pp(t, r, n);
				mt = (t.flags & 131072) !== 0;
			}
		else (mt = !1), Me && (r.flags & 1048576) !== 0 && Su(r, Pa, r.index);
		switch (((r.lanes = 0), r.tag)) {
			case 2:
				var o = r.type;
				Wa(t, r), (t = r.pendingProps);
				var d = vs(r, nt.current);
				Ss(r, n), (d = Il(null, r, o, t, d, n));
				var m = zl();
				return (
					(r.flags |= 1),
					typeof d == "object" &&
					d !== null &&
					typeof d.render == "function" &&
					d.$$typeof === void 0
						? ((r.tag = 1),
						  (r.memoizedState = null),
						  (r.updateQueue = null),
						  ht(o) ? ((m = !0), Ea(r)) : (m = !1),
						  (r.memoizedState =
								d.state !== null && d.state !== void 0 ? d.state : null),
						  Cl(r),
						  (d.updater = $a),
						  (r.stateNode = d),
						  (d._reactInternals = r),
						  $l(r, o, t, n),
						  (r = Hl(null, r, o, !0, m, n)))
						: ((r.tag = 0), Me && m && yl(r), ot(null, r, d, n), (r = r.child)),
					r
				);
			case 16:
				o = r.elementType;
				e: {
					switch (
						(Wa(t, r),
						(t = r.pendingProps),
						(d = o._init),
						(o = d(o._payload)),
						(r.type = o),
						(d = r.tag = Tp(o)),
						(t = Ot(o, t)),
						d)
					) {
						case 0:
							r = ql(null, r, o, t, n);
							break e;
						case 1:
							r = yd(null, r, o, t, n);
							break e;
						case 11:
							r = md(null, r, o, t, n);
							break e;
						case 14:
							r = fd(null, r, o, Ot(o.type, t), n);
							break e;
					}
					throw Error(a(306, o, ""));
				}
				return r;
			case 0:
				return (
					(o = r.type),
					(d = r.pendingProps),
					(d = r.elementType === o ? d : Ot(o, d)),
					ql(t, r, o, d, n)
				);
			case 1:
				return (
					(o = r.type),
					(d = r.pendingProps),
					(d = r.elementType === o ? d : Ot(o, d)),
					yd(t, r, o, d, n)
				);
			case 3:
				e: {
					if ((vd(r), t === null)) throw Error(a(387));
					(o = r.pendingProps),
						(m = r.memoizedState),
						(d = m.element),
						Ou(t, r),
						Ia(r, o, null, n);
					var x = r.memoizedState;
					if (((o = x.element), m.isDehydrated))
						if (
							((m = {
								element: o,
								isDehydrated: !1,
								cache: x.cache,
								pendingSuspenseBoundaries: x.pendingSuspenseBoundaries,
								transitions: x.transitions,
							}),
							(r.updateQueue.baseState = m),
							(r.memoizedState = m),
							r.flags & 256)
						) {
							(d = _s(Error(a(423)), r)), (r = bd(t, r, o, n, d));
							break e;
						} else if (o !== d) {
							(d = _s(Error(a(424)), r)), (r = bd(t, r, o, n, d));
							break e;
						} else
							for (
								jt = xr(r.stateNode.containerInfo.firstChild),
									bt = r,
									Me = !0,
									Lt = null,
									n = Ru(r, null, o, n),
									r.child = n;
								n;

							)
								(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
					else {
						if ((ws(), o === d)) {
							r = sr(t, r, n);
							break e;
						}
						ot(t, r, o, n);
					}
					r = r.child;
				}
				return r;
			case 5:
				return (
					Mu(r),
					t === null && jl(r),
					(o = r.type),
					(d = r.pendingProps),
					(m = t !== null ? t.memoizedProps : null),
					(x = d.children),
					hl(o, d) ? (x = null) : m !== null && hl(o, m) && (r.flags |= 32),
					gd(t, r),
					ot(t, r, x, n),
					r.child
				);
			case 6:
				return t === null && jl(r), null;
			case 13:
				return jd(t, r, n);
			case 4:
				return (
					Pl(r, r.stateNode.containerInfo),
					(o = r.pendingProps),
					t === null ? (r.child = Ns(r, null, o, n)) : ot(t, r, o, n),
					r.child
				);
			case 11:
				return (
					(o = r.type),
					(d = r.pendingProps),
					(d = r.elementType === o ? d : Ot(o, d)),
					md(t, r, o, d, n)
				);
			case 7:
				return ot(t, r, r.pendingProps, n), r.child;
			case 8:
				return ot(t, r, r.pendingProps.children, n), r.child;
			case 12:
				return ot(t, r, r.pendingProps.children, n), r.child;
			case 10:
				e: {
					if (
						((o = r.type._context),
						(d = r.pendingProps),
						(m = r.memoizedProps),
						(x = d.value),
						Le(Ra, o._currentValue),
						(o._currentValue = x),
						m !== null)
					)
						if (Rt(m.value, x)) {
							if (m.children === d.children && !dt.current) {
								r = sr(t, r, n);
								break e;
							}
						} else
							for (m = r.child, m !== null && (m.return = r); m !== null; ) {
								var b = m.dependencies;
								if (b !== null) {
									x = m.child;
									for (var E = b.firstContext; E !== null; ) {
										if (E.context === o) {
											if (m.tag === 1) {
												(E = rr(-1, n & -n)), (E.tag = 2);
												var M = m.updateQueue;
												if (M !== null) {
													M = M.shared;
													var K = M.pending;
													K === null
														? (E.next = E)
														: ((E.next = K.next), (K.next = E)),
														(M.pending = E);
												}
											}
											(m.lanes |= n),
												(E = m.alternate),
												E !== null && (E.lanes |= n),
												El(m.return, n, r),
												(b.lanes |= n);
											break;
										}
										E = E.next;
									}
								} else if (m.tag === 10) x = m.type === r.type ? null : m.child;
								else if (m.tag === 18) {
									if (((x = m.return), x === null)) throw Error(a(341));
									(x.lanes |= n),
										(b = x.alternate),
										b !== null && (b.lanes |= n),
										El(x, n, r),
										(x = m.sibling);
								} else x = m.child;
								if (x !== null) x.return = m;
								else
									for (x = m; x !== null; ) {
										if (x === r) {
											x = null;
											break;
										}
										if (((m = x.sibling), m !== null)) {
											(m.return = x.return), (x = m);
											break;
										}
										x = x.return;
									}
								m = x;
							}
					ot(t, r, d.children, n), (r = r.child);
				}
				return r;
			case 9:
				return (
					(d = r.type),
					(o = r.pendingProps.children),
					Ss(r, n),
					(d = Et(d)),
					(o = o(d)),
					(r.flags |= 1),
					ot(t, r, o, n),
					r.child
				);
			case 14:
				return (
					(o = r.type),
					(d = Ot(o, r.pendingProps)),
					(d = Ot(o.type, d)),
					fd(t, r, o, d, n)
				);
			case 15:
				return pd(t, r, r.type, r.pendingProps, n);
			case 17:
				return (
					(o = r.type),
					(d = r.pendingProps),
					(d = r.elementType === o ? d : Ot(o, d)),
					Wa(t, r),
					(r.tag = 1),
					ht(o) ? ((t = !0), Ea(r)) : (t = !1),
					Ss(r, n),
					id(r, o, d),
					$l(r, o, d, n),
					Hl(null, r, o, !0, t, n)
				);
			case 19:
				return Nd(t, r, n);
			case 22:
				return xd(t, r, n);
		}
		throw Error(a(156, r.tag));
	};
	function Gd(t, r) {
		return Ec(t, r);
	}
	function Pp(t, r, n, o) {
		(this.tag = t),
			(this.key = n),
			(this.sibling =
				this.child =
				this.return =
				this.stateNode =
				this.type =
				this.elementType =
					null),
			(this.index = 0),
			(this.ref = null),
			(this.pendingProps = r),
			(this.dependencies =
				this.memoizedState =
				this.updateQueue =
				this.memoizedProps =
					null),
			(this.mode = o),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null);
	}
	function Pt(t, r, n, o) {
		return new Pp(t, r, n, o);
	}
	function mo(t) {
		return (t = t.prototype), !(!t || !t.isReactComponent);
	}
	function Tp(t) {
		if (typeof t == "function") return mo(t) ? 1 : 0;
		if (t != null) {
			if (((t = t.$$typeof), t === Se)) return 11;
			if (t === ve) return 14;
		}
		return 2;
	}
	function _r(t, r) {
		var n = t.alternate;
		return (
			n === null
				? ((n = Pt(t.tag, r, t.key, t.mode)),
				  (n.elementType = t.elementType),
				  (n.type = t.type),
				  (n.stateNode = t.stateNode),
				  (n.alternate = t),
				  (t.alternate = n))
				: ((n.pendingProps = r),
				  (n.type = t.type),
				  (n.flags = 0),
				  (n.subtreeFlags = 0),
				  (n.deletions = null)),
			(n.flags = t.flags & 14680064),
			(n.childLanes = t.childLanes),
			(n.lanes = t.lanes),
			(n.child = t.child),
			(n.memoizedProps = t.memoizedProps),
			(n.memoizedState = t.memoizedState),
			(n.updateQueue = t.updateQueue),
			(r = t.dependencies),
			(n.dependencies =
				r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
			(n.sibling = t.sibling),
			(n.index = t.index),
			(n.ref = t.ref),
			n
		);
	}
	function ti(t, r, n, o, d, m) {
		var x = 2;
		if (((o = t), typeof t == "function")) mo(t) && (x = 1);
		else if (typeof t == "string") x = 5;
		else
			e: switch (t) {
				case le:
					return Jr(n.children, d, m, r);
				case ie:
					(x = 8), (d |= 8);
					break;
				case Y:
					return (
						(t = Pt(12, n, r, d | 2)), (t.elementType = Y), (t.lanes = m), t
					);
				case Pe:
					return (t = Pt(13, n, r, d)), (t.elementType = Pe), (t.lanes = m), t;
				case I:
					return (t = Pt(19, n, r, d)), (t.elementType = I), (t.lanes = m), t;
				case xe:
					return ri(n, d, m, r);
				default:
					if (typeof t == "object" && t !== null)
						switch (t.$$typeof) {
							case J:
								x = 10;
								break e;
							case Ee:
								x = 9;
								break e;
							case Se:
								x = 11;
								break e;
							case ve:
								x = 14;
								break e;
							case re:
								(x = 16), (o = null);
								break e;
						}
					throw Error(a(130, t == null ? t : typeof t, ""));
			}
		return (
			(r = Pt(x, n, r, d)), (r.elementType = t), (r.type = o), (r.lanes = m), r
		);
	}
	function Jr(t, r, n, o) {
		return (t = Pt(7, t, o, r)), (t.lanes = n), t;
	}
	function ri(t, r, n, o) {
		return (
			(t = Pt(22, t, o, r)),
			(t.elementType = xe),
			(t.lanes = n),
			(t.stateNode = { isHidden: !1 }),
			t
		);
	}
	function fo(t, r, n) {
		return (t = Pt(6, t, null, r)), (t.lanes = n), t;
	}
	function po(t, r, n) {
		return (
			(r = Pt(4, t.children !== null ? t.children : [], t.key, r)),
			(r.lanes = n),
			(r.stateNode = {
				containerInfo: t.containerInfo,
				pendingChildren: null,
				implementation: t.implementation,
			}),
			r
		);
	}
	function Ap(t, r, n, o, d) {
		(this.tag = r),
			(this.containerInfo = t),
			(this.finishedWork =
				this.pingCache =
				this.current =
				this.pendingChildren =
					null),
			(this.timeoutHandle = -1),
			(this.callbackNode = this.pendingContext = this.context = null),
			(this.callbackPriority = 0),
			(this.eventTimes = Bi(0)),
			(this.expirationTimes = Bi(-1)),
			(this.entangledLanes =
				this.finishedLanes =
				this.mutableReadLanes =
				this.expiredLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = Bi(0)),
			(this.identifierPrefix = o),
			(this.onRecoverableError = d),
			(this.mutableSourceEagerHydrationData = null);
	}
	function xo(t, r, n, o, d, m, x, b, E) {
		return (
			(t = new Ap(t, r, n, b, E)),
			r === 1 ? ((r = 1), m === !0 && (r |= 8)) : (r = 0),
			(m = Pt(3, null, null, r)),
			(t.current = m),
			(m.stateNode = t),
			(m.memoizedState = {
				element: o,
				isDehydrated: n,
				cache: null,
				transitions: null,
				pendingSuspenseBoundaries: null,
			}),
			Cl(m),
			t
		);
	}
	function Rp(t, r, n) {
		var o =
			3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: ne,
			key: o == null ? null : "" + o,
			children: t,
			containerInfo: r,
			implementation: n,
		};
	}
	function Kd(t) {
		if (!t) return yr;
		t = t._reactInternals;
		e: {
			if (Dr(t) !== t || t.tag !== 1) throw Error(a(170));
			var r = t;
			do {
				switch (r.tag) {
					case 3:
						r = r.stateNode.context;
						break e;
					case 1:
						if (ht(r.type)) {
							r = r.stateNode.__reactInternalMemoizedMergedChildContext;
							break e;
						}
				}
				r = r.return;
			} while (r !== null);
			throw Error(a(171));
		}
		if (t.tag === 1) {
			var n = t.type;
			if (ht(n)) return wu(t, n, r);
		}
		return r;
	}
	function Yd(t, r, n, o, d, m, x, b, E) {
		return (
			(t = xo(n, o, !0, t, d, m, x, b, E)),
			(t.context = Kd(null)),
			(n = t.current),
			(o = ct()),
			(d = Sr(n)),
			(m = rr(o, d)),
			(m.callback = r ?? null),
			jr(n, m, d),
			(t.current.lanes = d),
			an(t, d, o),
			pt(t, o),
			t
		);
	}
	function si(t, r, n, o) {
		var d = r.current,
			m = ct(),
			x = Sr(d);
		return (
			(n = Kd(n)),
			r.context === null ? (r.context = n) : (r.pendingContext = n),
			(r = rr(m, x)),
			(r.payload = { element: t }),
			(o = o === void 0 ? null : o),
			o !== null && (r.callback = o),
			(t = jr(d, r, x)),
			t !== null && (Mt(t, d, x, m), Oa(t, d, x)),
			x
		);
	}
	function ni(t) {
		if (((t = t.current), !t.child)) return null;
		switch (t.child.tag) {
			case 5:
				return t.child.stateNode;
			default:
				return t.child.stateNode;
		}
	}
	function Jd(t, r) {
		if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
			var n = t.retryLane;
			t.retryLane = n !== 0 && n < r ? n : r;
		}
	}
	function go(t, r) {
		Jd(t, r), (t = t.alternate) && Jd(t, r);
	}
	function Lp() {
		return null;
	}
	var Qd =
		typeof reportError == "function"
			? reportError
			: function (t) {
					console.error(t);
			  };
	function yo(t) {
		this._internalRoot = t;
	}
	(ai.prototype.render = yo.prototype.render =
		function (t) {
			var r = this._internalRoot;
			if (r === null) throw Error(a(409));
			si(t, r, null, null);
		}),
		(ai.prototype.unmount = yo.prototype.unmount =
			function () {
				var t = this._internalRoot;
				if (t !== null) {
					this._internalRoot = null;
					var r = t.containerInfo;
					Gr(function () {
						si(null, t, null, null);
					}),
						(r[Qt] = null);
				}
			});
	function ai(t) {
		this._internalRoot = t;
	}
	ai.prototype.unstable_scheduleHydration = function (t) {
		if (t) {
			var r = Oc();
			t = { blockedOn: null, target: t, priority: r };
			for (var n = 0; n < mr.length && r !== 0 && r < mr[n].priority; n++);
			mr.splice(n, 0, t), n === 0 && Mc(t);
		}
	};
	function vo(t) {
		return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
	}
	function ii(t) {
		return !(
			!t ||
			(t.nodeType !== 1 &&
				t.nodeType !== 9 &&
				t.nodeType !== 11 &&
				(t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
		);
	}
	function Xd() {}
	function Op(t, r, n, o, d) {
		if (d) {
			if (typeof o == "function") {
				var m = o;
				o = function () {
					var M = ni(x);
					m.call(M);
				};
			}
			var x = Yd(r, o, t, 0, null, !1, !1, "", Xd);
			return (
				(t._reactRootContainer = x),
				(t[Qt] = x.current),
				bn(t.nodeType === 8 ? t.parentNode : t),
				Gr(),
				x
			);
		}
		for (; (d = t.lastChild); ) t.removeChild(d);
		if (typeof o == "function") {
			var b = o;
			o = function () {
				var M = ni(E);
				b.call(M);
			};
		}
		var E = xo(t, 0, !1, null, null, !1, !1, "", Xd);
		return (
			(t._reactRootContainer = E),
			(t[Qt] = E.current),
			bn(t.nodeType === 8 ? t.parentNode : t),
			Gr(function () {
				si(r, E, n, o);
			}),
			E
		);
	}
	function li(t, r, n, o, d) {
		var m = n._reactRootContainer;
		if (m) {
			var x = m;
			if (typeof d == "function") {
				var b = d;
				d = function () {
					var E = ni(x);
					b.call(E);
				};
			}
			si(r, x, t, d);
		} else x = Op(n, r, t, d, o);
		return ni(x);
	}
	(Rc = function (t) {
		switch (t.tag) {
			case 3:
				var r = t.stateNode;
				if (r.current.memoizedState.isDehydrated) {
					var n = nn(r.pendingLanes);
					n !== 0 &&
						($i(r, n | 1),
						pt(r, $e()),
						(Te & 6) === 0 && ((Ts = $e() + 500), vr()));
				}
				break;
			case 13:
				Gr(function () {
					var o = tr(t, 1);
					if (o !== null) {
						var d = ct();
						Mt(o, t, 1, d);
					}
				}),
					go(t, 1);
		}
	}),
		(Vi = function (t) {
			if (t.tag === 13) {
				var r = tr(t, 134217728);
				if (r !== null) {
					var n = ct();
					Mt(r, t, 134217728, n);
				}
				go(t, 134217728);
			}
		}),
		(Lc = function (t) {
			if (t.tag === 13) {
				var r = Sr(t),
					n = tr(t, r);
				if (n !== null) {
					var o = ct();
					Mt(n, t, r, o);
				}
				go(t, r);
			}
		}),
		(Oc = function () {
			return Re;
		}),
		(Ic = function (t, r) {
			var n = Re;
			try {
				return (Re = t), r();
			} finally {
				Re = n;
			}
		}),
		(Ii = function (t, r, n) {
			switch (r) {
				case "input":
					if ((as(t, n), (r = n.name), n.type === "radio" && r != null)) {
						for (n = t; n.parentNode; ) n = n.parentNode;
						for (
							n = n.querySelectorAll(
								"input[name=" + JSON.stringify("" + r) + '][type="radio"]',
							),
								r = 0;
							r < n.length;
							r++
						) {
							var o = n[r];
							if (o !== t && o.form === t.form) {
								var d = ka(o);
								if (!d) throw Error(a(90));
								$t(o), as(o, d);
							}
						}
					}
					break;
				case "textarea":
					ls(t, n);
					break;
				case "select":
					(r = n.value), r != null && we(t, !!n.multiple, r, !1);
			}
		}),
		(vc = co),
		(bc = Gr);
	var Ip = { usingClientEntryPoint: !1, Events: [Nn, gs, ka, gc, yc, co] },
		Mn = {
			findFiberByHostInstance: Ur,
			bundleType: 0,
			version: "18.3.1",
			rendererPackageName: "react-dom",
		},
		zp = {
			bundleType: Mn.bundleType,
			version: Mn.version,
			rendererPackageName: Mn.rendererPackageName,
			rendererConfig: Mn.rendererConfig,
			overrideHookState: null,
			overrideHookStateDeletePath: null,
			overrideHookStateRenamePath: null,
			overrideProps: null,
			overridePropsDeletePath: null,
			overridePropsRenamePath: null,
			setErrorHandler: null,
			setSuspenseHandler: null,
			scheduleUpdate: null,
			currentDispatcherRef: G.ReactCurrentDispatcher,
			findHostInstanceByFiber: function (t) {
				return (t = kc(t)), t === null ? null : t.stateNode;
			},
			findFiberByHostInstance: Mn.findFiberByHostInstance || Lp,
			findHostInstancesForRefresh: null,
			scheduleRefresh: null,
			scheduleRoot: null,
			setRefreshHandler: null,
			getCurrentFiber: null,
			reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
		};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!oi.isDisabled && oi.supportsFiber)
			try {
				(aa = oi.inject(zp)), (Wt = oi);
			} catch {}
	}
	return (
		(xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ip),
		(xt.createPortal = function (t, r) {
			var n =
				2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!vo(r)) throw Error(a(200));
			return Rp(t, r, null, n);
		}),
		(xt.createRoot = function (t, r) {
			if (!vo(t)) throw Error(a(299));
			var n = !1,
				o = "",
				d = Qd;
			return (
				r != null &&
					(r.unstable_strictMode === !0 && (n = !0),
					r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
					r.onRecoverableError !== void 0 && (d = r.onRecoverableError)),
				(r = xo(t, 1, !1, null, null, n, !1, o, d)),
				(t[Qt] = r.current),
				bn(t.nodeType === 8 ? t.parentNode : t),
				new yo(r)
			);
		}),
		(xt.findDOMNode = function (t) {
			if (t == null) return null;
			if (t.nodeType === 1) return t;
			var r = t._reactInternals;
			if (r === void 0)
				throw typeof t.render == "function"
					? Error(a(188))
					: ((t = Object.keys(t).join(",")), Error(a(268, t)));
			return (t = kc(r)), (t = t === null ? null : t.stateNode), t;
		}),
		(xt.flushSync = function (t) {
			return Gr(t);
		}),
		(xt.hydrate = function (t, r, n) {
			if (!ii(r)) throw Error(a(200));
			return li(null, t, r, !0, n);
		}),
		(xt.hydrateRoot = function (t, r, n) {
			if (!vo(t)) throw Error(a(405));
			var o = (n != null && n.hydratedSources) || null,
				d = !1,
				m = "",
				x = Qd;
			if (
				(n != null &&
					(n.unstable_strictMode === !0 && (d = !0),
					n.identifierPrefix !== void 0 && (m = n.identifierPrefix),
					n.onRecoverableError !== void 0 && (x = n.onRecoverableError)),
				(r = Yd(r, null, t, 1, n ?? null, d, !1, m, x)),
				(t[Qt] = r.current),
				bn(t),
				o)
			)
				for (t = 0; t < o.length; t++)
					(n = o[t]),
						(d = n._getVersion),
						(d = d(n._source)),
						r.mutableSourceEagerHydrationData == null
							? (r.mutableSourceEagerHydrationData = [n, d])
							: r.mutableSourceEagerHydrationData.push(n, d);
			return new ai(r);
		}),
		(xt.render = function (t, r, n) {
			if (!ii(r)) throw Error(a(200));
			return li(null, t, r, !1, n);
		}),
		(xt.unmountComponentAtNode = function (t) {
			if (!ii(t)) throw Error(a(40));
			return t._reactRootContainer
				? (Gr(function () {
						li(null, null, t, !1, function () {
							(t._reactRootContainer = null), (t[Qt] = null);
						});
				  }),
				  !0)
				: !1;
		}),
		(xt.unstable_batchedUpdates = co),
		(xt.unstable_renderSubtreeIntoContainer = function (t, r, n, o) {
			if (!ii(n)) throw Error(a(200));
			if (t == null || t._reactInternals === void 0) throw Error(a(38));
			return li(t, r, n, !1, o);
		}),
		(xt.version = "18.3.1-next-f1338f8080-20240426"),
		xt
	);
}
var ih;
function Zh() {
	if (ih) return wo.exports;
	ih = 1;
	function i() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
			} catch (s) {
				console.error(s);
			}
	}
	return i(), (wo.exports = Gp()), wo.exports;
}
var lh;
function Kp() {
	if (lh) return ci;
	lh = 1;
	var i = Zh();
	return (ci.createRoot = i.createRoot), (ci.hydrateRoot = i.hydrateRoot), ci;
}
var Yp = Kp();
Zh();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function qn() {
	return (
		(qn = Object.assign
			? Object.assign.bind()
			: function (i) {
					for (var s = 1; s < arguments.length; s++) {
						var a = arguments[s];
						for (var l in a)
							Object.prototype.hasOwnProperty.call(a, l) && (i[l] = a[l]);
					}
					return i;
			  }),
		qn.apply(this, arguments)
	);
}
var Lr;
(function (i) {
	(i.Pop = "POP"), (i.Push = "PUSH"), (i.Replace = "REPLACE");
})(Lr || (Lr = {}));
const oh = "popstate";
function Jp(i) {
	i === void 0 && (i = {});
	function s(l, c) {
		let { pathname: u, search: h, hash: f } = l.location;
		return Ro(
			"",
			{ pathname: u, search: h, hash: f },
			(c.state && c.state.usr) || null,
			(c.state && c.state.key) || "default",
		);
	}
	function a(l, c) {
		return typeof c == "string" ? c : bi(c);
	}
	return Xp(s, a, null, i);
}
function qe(i, s) {
	if (i === !1 || i === null || typeof i > "u") throw new Error(s);
}
function em(i, s) {
	if (!i) {
		typeof console < "u" && console.warn(s);
		try {
			throw new Error(s);
		} catch {}
	}
}
function Qp() {
	return Math.random().toString(36).substr(2, 8);
}
function ch(i, s) {
	return { usr: i.state, key: i.key, idx: s };
}
function Ro(i, s, a, l) {
	return (
		a === void 0 && (a = null),
		qn(
			{ pathname: typeof i == "string" ? i : i.pathname, search: "", hash: "" },
			typeof s == "string" ? Ks(s) : s,
			{ state: a, key: (s && s.key) || l || Qp() },
		)
	);
}
function bi(i) {
	let { pathname: s = "/", search: a = "", hash: l = "" } = i;
	return (
		a && a !== "?" && (s += a.charAt(0) === "?" ? a : "?" + a),
		l && l !== "#" && (s += l.charAt(0) === "#" ? l : "#" + l),
		s
	);
}
function Ks(i) {
	let s = {};
	if (i) {
		let a = i.indexOf("#");
		a >= 0 && ((s.hash = i.substr(a)), (i = i.substr(0, a)));
		let l = i.indexOf("?");
		l >= 0 && ((s.search = i.substr(l)), (i = i.substr(0, l))),
			i && (s.pathname = i);
	}
	return s;
}
function Xp(i, s, a, l) {
	l === void 0 && (l = {});
	let { window: c = document.defaultView, v5Compat: u = !1 } = l,
		h = c.history,
		f = Lr.Pop,
		p = null,
		y = g();
	y == null && ((y = 0), h.replaceState(qn({}, h.state, { idx: y }), ""));
	function g() {
		return (h.state || { idx: null }).idx;
	}
	function v() {
		f = Lr.Pop;
		let A = g(),
			z = A == null ? null : A - y;
		(y = A), p && p({ action: f, location: U.location, delta: z });
	}
	function w(A, z) {
		f = Lr.Push;
		let ee = Ro(U.location, A, z);
		y = g() + 1;
		let N = ch(ee, y),
			G = U.createHref(ee);
		try {
			h.pushState(N, "", G);
		} catch (X) {
			if (X instanceof DOMException && X.name === "DataCloneError") throw X;
			c.location.assign(G);
		}
		u && p && p({ action: f, location: U.location, delta: 1 });
	}
	function T(A, z) {
		f = Lr.Replace;
		let ee = Ro(U.location, A, z);
		y = g();
		let N = ch(ee, y),
			G = U.createHref(ee);
		h.replaceState(N, "", G),
			u && p && p({ action: f, location: U.location, delta: 0 });
	}
	function D(A) {
		let z = c.location.origin !== "null" ? c.location.origin : c.location.href,
			ee = typeof A == "string" ? A : bi(A);
		return (
			(ee = ee.replace(/ $/, "%20")),
			qe(
				z,
				"No window.location.(origin|href) available to create URL for href: " +
					ee,
			),
			new URL(ee, z)
		);
	}
	let U = {
		get action() {
			return f;
		},
		get location() {
			return i(c, h);
		},
		listen(A) {
			if (p) throw new Error("A history only accepts one active listener");
			return (
				c.addEventListener(oh, v),
				(p = A),
				() => {
					c.removeEventListener(oh, v), (p = null);
				}
			);
		},
		createHref(A) {
			return s(c, A);
		},
		createURL: D,
		encodeLocation(A) {
			let z = D(A);
			return { pathname: z.pathname, search: z.search, hash: z.hash };
		},
		push: w,
		replace: T,
		go(A) {
			return h.go(A);
		},
	};
	return U;
}
var uh;
(function (i) {
	(i.data = "data"),
		(i.deferred = "deferred"),
		(i.redirect = "redirect"),
		(i.error = "error");
})(uh || (uh = {}));
function Zp(i, s, a) {
	return a === void 0 && (a = "/"), ex(i, s, a);
}
function ex(i, s, a, l) {
	let c = typeof s == "string" ? Ks(s) : s,
		u = tc(c.pathname || "/", a);
	if (u == null) return null;
	let h = tm(i);
	tx(h);
	let f = null;
	for (let p = 0; f == null && p < h.length; ++p) {
		let y = mx(u);
		f = ux(h[p], y);
	}
	return f;
}
function tm(i, s, a, l) {
	s === void 0 && (s = []), a === void 0 && (a = []), l === void 0 && (l = "");
	let c = (u, h, f) => {
		let p = {
			relativePath: f === void 0 ? u.path || "" : f,
			caseSensitive: u.caseSensitive === !0,
			childrenIndex: h,
			route: u,
		};
		p.relativePath.startsWith("/") &&
			(qe(
				p.relativePath.startsWith(l),
				'Absolute route path "' +
					p.relativePath +
					'" nested under path ' +
					('"' + l + '" is not valid. An absolute child route path ') +
					"must start with the combined path of all its parent routes.",
			),
			(p.relativePath = p.relativePath.slice(l.length)));
		let y = Or([l, p.relativePath]),
			g = a.concat(p);
		u.children &&
			u.children.length > 0 &&
			(qe(
				u.index !== !0,
				"Index routes must not have child routes. Please remove " +
					('all child routes from route path "' + y + '".'),
			),
			tm(u.children, s, g, y)),
			!(u.path == null && !u.index) &&
				s.push({ path: y, score: ox(y, u.index), routesMeta: g });
	};
	return (
		i.forEach((u, h) => {
			var f;
			if (u.path === "" || !((f = u.path) != null && f.includes("?"))) c(u, h);
			else for (let p of rm(u.path)) c(u, h, p);
		}),
		s
	);
}
function rm(i) {
	let s = i.split("/");
	if (s.length === 0) return [];
	let [a, ...l] = s,
		c = a.endsWith("?"),
		u = a.replace(/\?$/, "");
	if (l.length === 0) return c ? [u, ""] : [u];
	let h = rm(l.join("/")),
		f = [];
	return (
		f.push(...h.map((p) => (p === "" ? u : [u, p].join("/")))),
		c && f.push(...h),
		f.map((p) => (i.startsWith("/") && p === "" ? "/" : p))
	);
}
function tx(i) {
	i.sort((s, a) =>
		s.score !== a.score
			? a.score - s.score
			: cx(
					s.routesMeta.map((l) => l.childrenIndex),
					a.routesMeta.map((l) => l.childrenIndex),
			  ),
	);
}
const rx = /^:[\w-]+$/,
	sx = 3,
	nx = 2,
	ax = 1,
	ix = 10,
	lx = -2,
	dh = (i) => i === "*";
function ox(i, s) {
	let a = i.split("/"),
		l = a.length;
	return (
		a.some(dh) && (l += lx),
		s && (l += nx),
		a
			.filter((c) => !dh(c))
			.reduce((c, u) => c + (rx.test(u) ? sx : u === "" ? ax : ix), l)
	);
}
function cx(i, s) {
	return i.length === s.length && i.slice(0, -1).every((l, c) => l === s[c])
		? i[i.length - 1] - s[s.length - 1]
		: 0;
}
function ux(i, s, a) {
	let { routesMeta: l } = i,
		c = {},
		u = "/",
		h = [];
	for (let f = 0; f < l.length; ++f) {
		let p = l[f],
			y = f === l.length - 1,
			g = u === "/" ? s : s.slice(u.length) || "/",
			v = dx(
				{ path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
				g,
			),
			w = p.route;
		if (!v) return null;
		Object.assign(c, v.params),
			h.push({
				params: c,
				pathname: Or([u, v.pathname]),
				pathnameBase: gx(Or([u, v.pathnameBase])),
				route: w,
			}),
			v.pathnameBase !== "/" && (u = Or([u, v.pathnameBase]));
	}
	return h;
}
function dx(i, s) {
	typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
	let [a, l] = hx(i.path, i.caseSensitive, i.end),
		c = s.match(a);
	if (!c) return null;
	let u = c[0],
		h = u.replace(/(.)\/+$/, "$1"),
		f = c.slice(1);
	return {
		params: l.reduce((y, g, v) => {
			let { paramName: w, isOptional: T } = g;
			if (w === "*") {
				let U = f[v] || "";
				h = u.slice(0, u.length - U.length).replace(/(.)\/+$/, "$1");
			}
			const D = f[v];
			return (
				T && !D ? (y[w] = void 0) : (y[w] = (D || "").replace(/%2F/g, "/")), y
			);
		}, {}),
		pathname: u,
		pathnameBase: h,
		pattern: i,
	};
}
function hx(i, s, a) {
	s === void 0 && (s = !1),
		a === void 0 && (a = !0),
		em(
			i === "*" || !i.endsWith("*") || i.endsWith("/*"),
			'Route path "' +
				i +
				'" will be treated as if it were ' +
				('"' + i.replace(/\*$/, "/*") + '" because the `*` character must ') +
				"always follow a `/` in the pattern. To get rid of this warning, " +
				('please change the route path to "' + i.replace(/\*$/, "/*") + '".'),
		);
	let l = [],
		c =
			"^" +
			i
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(h, f, p) => (
						l.push({ paramName: f, isOptional: p != null }),
						p ? "/?([^\\/]+)?" : "/([^\\/]+)"
					),
				);
	return (
		i.endsWith("*")
			? (l.push({ paramName: "*" }),
			  (c += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: a
			? (c += "\\/*$")
			: i !== "" && i !== "/" && (c += "(?:(?=\\/|$))"),
		[new RegExp(c, s ? void 0 : "i"), l]
	);
}
function mx(i) {
	try {
		return i
			.split("/")
			.map((s) => decodeURIComponent(s).replace(/\//g, "%2F"))
			.join("/");
	} catch (s) {
		return (
			em(
				!1,
				'The URL path "' +
					i +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					("encoding (" + s + ")."),
			),
			i
		);
	}
}
function tc(i, s) {
	if (s === "/") return i;
	if (!i.toLowerCase().startsWith(s.toLowerCase())) return null;
	let a = s.endsWith("/") ? s.length - 1 : s.length,
		l = i.charAt(a);
	return l && l !== "/" ? null : i.slice(a) || "/";
}
function fx(i, s) {
	s === void 0 && (s = "/");
	let {
		pathname: a,
		search: l = "",
		hash: c = "",
	} = typeof i == "string" ? Ks(i) : i;
	return {
		pathname: a ? (a.startsWith("/") ? a : px(a, s)) : s,
		search: yx(l),
		hash: vx(c),
	};
}
function px(i, s) {
	let a = s.replace(/\/+$/, "").split("/");
	return (
		i.split("/").forEach((c) => {
			c === ".." ? a.length > 1 && a.pop() : c !== "." && a.push(c);
		}),
		a.length > 1 ? a.join("/") : "/"
	);
}
function So(i, s, a, l) {
	return (
		"Cannot include a '" +
		i +
		"' character in a manually specified " +
		("`to." +
			s +
			"` field [" +
			JSON.stringify(l) +
			"].  Please separate it out to the ") +
		("`to." + a + "` field. Alternatively you may provide the full path as ") +
		'a string in <Link to="..."> and the router will parse it for you.'
	);
}
function xx(i) {
	return i.filter(
		(s, a) => a === 0 || (s.route.path && s.route.path.length > 0),
	);
}
function sm(i, s) {
	let a = xx(i);
	return s
		? a.map((l, c) => (c === a.length - 1 ? l.pathname : l.pathnameBase))
		: a.map((l) => l.pathnameBase);
}
function nm(i, s, a, l) {
	l === void 0 && (l = !1);
	let c;
	typeof i == "string"
		? (c = Ks(i))
		: ((c = qn({}, i)),
		  qe(
				!c.pathname || !c.pathname.includes("?"),
				So("?", "pathname", "search", c),
		  ),
		  qe(
				!c.pathname || !c.pathname.includes("#"),
				So("#", "pathname", "hash", c),
		  ),
		  qe(!c.search || !c.search.includes("#"), So("#", "search", "hash", c)));
	let u = i === "" || c.pathname === "",
		h = u ? "/" : c.pathname,
		f;
	if (h == null) f = a;
	else {
		let v = s.length - 1;
		if (!l && h.startsWith("..")) {
			let w = h.split("/");
			for (; w[0] === ".."; ) w.shift(), (v -= 1);
			c.pathname = w.join("/");
		}
		f = v >= 0 ? s[v] : "/";
	}
	let p = fx(c, f),
		y = h && h !== "/" && h.endsWith("/"),
		g = (u || h === ".") && a.endsWith("/");
	return !p.pathname.endsWith("/") && (y || g) && (p.pathname += "/"), p;
}
const Or = (i) => i.join("/").replace(/\/\/+/g, "/"),
	gx = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
	yx = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
	vx = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i);
function bx(i) {
	return (
		i != null &&
		typeof i.status == "number" &&
		typeof i.statusText == "string" &&
		typeof i.internal == "boolean" &&
		"data" in i
	);
}
const am = ["post", "put", "patch", "delete"];
new Set(am);
const jx = ["get", ...am];
new Set(jx);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Hn() {
	return (
		(Hn = Object.assign
			? Object.assign.bind()
			: function (i) {
					for (var s = 1; s < arguments.length; s++) {
						var a = arguments[s];
						for (var l in a)
							Object.prototype.hasOwnProperty.call(a, l) && (i[l] = a[l]);
					}
					return i;
			  }),
		Hn.apply(this, arguments)
	);
}
const rc = S.createContext(null),
	wx = S.createContext(null),
	rs = S.createContext(null),
	Si = S.createContext(null),
	zr = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	im = S.createContext(null);
function Nx(i, s) {
	let { relative: a } = s === void 0 ? {} : s;
	Jn() || qe(!1);
	let { basename: l, navigator: c } = S.useContext(rs),
		{ hash: u, pathname: h, search: f } = om(i, { relative: a }),
		p = h;
	return (
		l !== "/" && (p = h === "/" ? l : Or([l, h])),
		c.createHref({ pathname: p, search: f, hash: u })
	);
}
function Jn() {
	return S.useContext(Si) != null;
}
function Jt() {
	return Jn() || qe(!1), S.useContext(Si).location;
}
function lm(i) {
	S.useContext(rs).static || S.useLayoutEffect(i);
}
function Nt() {
	let { isDataRoute: i } = S.useContext(zr);
	return i ? zx() : kx();
}
function kx() {
	Jn() || qe(!1);
	let i = S.useContext(rc),
		{ basename: s, future: a, navigator: l } = S.useContext(rs),
		{ matches: c } = S.useContext(zr),
		{ pathname: u } = Jt(),
		h = JSON.stringify(sm(c, a.v7_relativeSplatPath)),
		f = S.useRef(!1);
	return (
		lm(() => {
			f.current = !0;
		}),
		S.useCallback(
			function (y, g) {
				if ((g === void 0 && (g = {}), !f.current)) return;
				if (typeof y == "number") {
					l.go(y);
					return;
				}
				let v = nm(y, JSON.parse(h), u, g.relative === "path");
				i == null &&
					s !== "/" &&
					(v.pathname = v.pathname === "/" ? s : Or([s, v.pathname])),
					(g.replace ? l.replace : l.push)(v, g.state, g);
			},
			[s, l, h, u, i],
		)
	);
}
function sc() {
	let { matches: i } = S.useContext(zr),
		s = i[i.length - 1];
	return s ? s.params : {};
}
function om(i, s) {
	let { relative: a } = s === void 0 ? {} : s,
		{ future: l } = S.useContext(rs),
		{ matches: c } = S.useContext(zr),
		{ pathname: u } = Jt(),
		h = JSON.stringify(sm(c, l.v7_relativeSplatPath));
	return S.useMemo(() => nm(i, JSON.parse(h), u, a === "path"), [i, h, u, a]);
}
function Sx(i, s) {
	return Ex(i, s);
}
function Ex(i, s, a, l) {
	Jn() || qe(!1);
	let { navigator: c } = S.useContext(rs),
		{ matches: u } = S.useContext(zr),
		h = u[u.length - 1],
		f = h ? h.params : {};
	h && h.pathname;
	let p = h ? h.pathnameBase : "/";
	h && h.route;
	let y = Jt(),
		g;
	if (s) {
		var v;
		let A = typeof s == "string" ? Ks(s) : s;
		p === "/" || ((v = A.pathname) != null && v.startsWith(p)) || qe(!1),
			(g = A);
	} else g = y;
	let w = g.pathname || "/",
		T = w;
	if (p !== "/") {
		let A = p.replace(/^\//, "").split("/");
		T = "/" + w.replace(/^\//, "").split("/").slice(A.length).join("/");
	}
	let D = Zp(i, { pathname: T }),
		U = Ax(
			D &&
				D.map((A) =>
					Object.assign({}, A, {
						params: Object.assign({}, f, A.params),
						pathname: Or([
							p,
							c.encodeLocation
								? c.encodeLocation(A.pathname).pathname
								: A.pathname,
						]),
						pathnameBase:
							A.pathnameBase === "/"
								? p
								: Or([
										p,
										c.encodeLocation
											? c.encodeLocation(A.pathnameBase).pathname
											: A.pathnameBase,
								  ]),
					}),
				),
			u,
			a,
			l,
		);
	return s && U
		? S.createElement(
				Si.Provider,
				{
					value: {
						location: Hn(
							{
								pathname: "/",
								search: "",
								hash: "",
								state: null,
								key: "default",
							},
							g,
						),
						navigationType: Lr.Pop,
					},
				},
				U,
		  )
		: U;
}
function _x() {
	let i = Ix(),
		s = bx(i)
			? i.status + " " + i.statusText
			: i instanceof Error
			? i.message
			: JSON.stringify(i),
		a = i instanceof Error ? i.stack : null,
		c = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
	return S.createElement(
		S.Fragment,
		null,
		S.createElement("h2", null, "Unexpected Application Error!"),
		S.createElement("h3", { style: { fontStyle: "italic" } }, s),
		a ? S.createElement("pre", { style: c }, a) : null,
		null,
	);
}
const Cx = S.createElement(_x, null);
class Px extends S.Component {
	constructor(s) {
		super(s),
			(this.state = {
				location: s.location,
				revalidation: s.revalidation,
				error: s.error,
			});
	}
	static getDerivedStateFromError(s) {
		return { error: s };
	}
	static getDerivedStateFromProps(s, a) {
		return a.location !== s.location ||
			(a.revalidation !== "idle" && s.revalidation === "idle")
			? { error: s.error, location: s.location, revalidation: s.revalidation }
			: {
					error: s.error !== void 0 ? s.error : a.error,
					location: a.location,
					revalidation: s.revalidation || a.revalidation,
			  };
	}
	componentDidCatch(s, a) {
		console.error(
			"React Router caught the following error during render",
			s,
			a,
		);
	}
	render() {
		return this.state.error !== void 0
			? S.createElement(
					zr.Provider,
					{ value: this.props.routeContext },
					S.createElement(im.Provider, {
						value: this.state.error,
						children: this.props.component,
					}),
			  )
			: this.props.children;
	}
}
function Tx(i) {
	let { routeContext: s, match: a, children: l } = i,
		c = S.useContext(rc);
	return (
		c &&
			c.static &&
			c.staticContext &&
			(a.route.errorElement || a.route.ErrorBoundary) &&
			(c.staticContext._deepestRenderedBoundaryId = a.route.id),
		S.createElement(zr.Provider, { value: s }, l)
	);
}
function Ax(i, s, a, l) {
	var c;
	if (
		(s === void 0 && (s = []),
		a === void 0 && (a = null),
		l === void 0 && (l = null),
		i == null)
	) {
		var u;
		if (!a) return null;
		if (a.errors) i = a.matches;
		else if (
			(u = l) != null &&
			u.v7_partialHydration &&
			s.length === 0 &&
			!a.initialized &&
			a.matches.length > 0
		)
			i = a.matches;
		else return null;
	}
	let h = i,
		f = (c = a) == null ? void 0 : c.errors;
	if (f != null) {
		let g = h.findIndex((v) => v.route.id && f?.[v.route.id] !== void 0);
		g >= 0 || qe(!1), (h = h.slice(0, Math.min(h.length, g + 1)));
	}
	let p = !1,
		y = -1;
	if (a && l && l.v7_partialHydration)
		for (let g = 0; g < h.length; g++) {
			let v = h[g];
			if (
				((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (y = g),
				v.route.id)
			) {
				let { loaderData: w, errors: T } = a,
					D =
						v.route.loader &&
						w[v.route.id] === void 0 &&
						(!T || T[v.route.id] === void 0);
				if (v.route.lazy || D) {
					(p = !0), y >= 0 ? (h = h.slice(0, y + 1)) : (h = [h[0]]);
					break;
				}
			}
		}
	return h.reduceRight((g, v, w) => {
		let T,
			D = !1,
			U = null,
			A = null;
		a &&
			((T = f && v.route.id ? f[v.route.id] : void 0),
			(U = v.route.errorElement || Cx),
			p &&
				(y < 0 && w === 0
					? (Mx("route-fallback"), (D = !0), (A = null))
					: y === w &&
					  ((D = !0), (A = v.route.hydrateFallbackElement || null))));
		let z = s.concat(h.slice(0, w + 1)),
			ee = () => {
				let N;
				return (
					T
						? (N = U)
						: D
						? (N = A)
						: v.route.Component
						? (N = S.createElement(v.route.Component, null))
						: v.route.element
						? (N = v.route.element)
						: (N = g),
					S.createElement(Tx, {
						match: v,
						routeContext: { outlet: g, matches: z, isDataRoute: a != null },
						children: N,
					})
				);
			};
		return a && (v.route.ErrorBoundary || v.route.errorElement || w === 0)
			? S.createElement(Px, {
					location: a.location,
					revalidation: a.revalidation,
					component: U,
					error: T,
					children: ee(),
					routeContext: { outlet: null, matches: z, isDataRoute: !0 },
			  })
			: ee();
	}, null);
}
var cm = (function (i) {
		return (
			(i.UseBlocker = "useBlocker"),
			(i.UseRevalidator = "useRevalidator"),
			(i.UseNavigateStable = "useNavigate"),
			i
		);
	})(cm || {}),
	um = (function (i) {
		return (
			(i.UseBlocker = "useBlocker"),
			(i.UseLoaderData = "useLoaderData"),
			(i.UseActionData = "useActionData"),
			(i.UseRouteError = "useRouteError"),
			(i.UseNavigation = "useNavigation"),
			(i.UseRouteLoaderData = "useRouteLoaderData"),
			(i.UseMatches = "useMatches"),
			(i.UseRevalidator = "useRevalidator"),
			(i.UseNavigateStable = "useNavigate"),
			(i.UseRouteId = "useRouteId"),
			i
		);
	})(um || {});
function Rx(i) {
	let s = S.useContext(rc);
	return s || qe(!1), s;
}
function Lx(i) {
	let s = S.useContext(wx);
	return s || qe(!1), s;
}
function Ox(i) {
	let s = S.useContext(zr);
	return s || qe(!1), s;
}
function dm(i) {
	let s = Ox(),
		a = s.matches[s.matches.length - 1];
	return a.route.id || qe(!1), a.route.id;
}
function Ix() {
	var i;
	let s = S.useContext(im),
		a = Lx(),
		l = dm();
	return s !== void 0 ? s : (i = a.errors) == null ? void 0 : i[l];
}
function zx() {
	let { router: i } = Rx(cm.UseNavigateStable),
		s = dm(um.UseNavigateStable),
		a = S.useRef(!1);
	return (
		lm(() => {
			a.current = !0;
		}),
		S.useCallback(
			function (c, u) {
				u === void 0 && (u = {}),
					a.current &&
						(typeof c == "number"
							? i.navigate(c)
							: i.navigate(c, Hn({ fromRouteId: s }, u)));
			},
			[i, s],
		)
	);
}
const hh = {};
function Mx(i, s, a) {
	hh[i] || (hh[i] = !0);
}
function Dx(i, s) {
	i?.v7_startTransition, i?.v7_relativeSplatPath;
}
function rt(i) {
	qe(!1);
}
function Ux(i) {
	let {
		basename: s = "/",
		children: a = null,
		location: l,
		navigationType: c = Lr.Pop,
		navigator: u,
		static: h = !1,
		future: f,
	} = i;
	Jn() && qe(!1);
	let p = s.replace(/^\/*/, "/"),
		y = S.useMemo(
			() => ({
				basename: p,
				navigator: u,
				static: h,
				future: Hn({ v7_relativeSplatPath: !1 }, f),
			}),
			[p, f, u, h],
		);
	typeof l == "string" && (l = Ks(l));
	let {
			pathname: g = "/",
			search: v = "",
			hash: w = "",
			state: T = null,
			key: D = "default",
		} = l,
		U = S.useMemo(() => {
			let A = tc(g, p);
			return A == null
				? null
				: {
						location: { pathname: A, search: v, hash: w, state: T, key: D },
						navigationType: c,
				  };
		}, [p, g, v, w, T, D, c]);
	return U == null
		? null
		: S.createElement(
				rs.Provider,
				{ value: y },
				S.createElement(Si.Provider, { children: a, value: U }),
		  );
}
function Fx(i) {
	let { children: s, location: a } = i;
	return Sx(Lo(s), a);
}
new Promise(() => {});
function Lo(i, s) {
	s === void 0 && (s = []);
	let a = [];
	return (
		S.Children.forEach(i, (l, c) => {
			if (!S.isValidElement(l)) return;
			let u = [...s, c];
			if (l.type === S.Fragment) {
				a.push.apply(a, Lo(l.props.children, u));
				return;
			}
			l.type !== rt && qe(!1), !l.props.index || !l.props.children || qe(!1);
			let h = {
				id: l.props.id || u.join("-"),
				caseSensitive: l.props.caseSensitive,
				element: l.props.element,
				Component: l.props.Component,
				index: l.props.index,
				path: l.props.path,
				loader: l.props.loader,
				action: l.props.action,
				errorElement: l.props.errorElement,
				ErrorBoundary: l.props.ErrorBoundary,
				hasErrorBoundary:
					l.props.ErrorBoundary != null || l.props.errorElement != null,
				shouldRevalidate: l.props.shouldRevalidate,
				handle: l.props.handle,
				lazy: l.props.lazy,
			};
			l.props.children && (h.children = Lo(l.props.children, u)), a.push(h);
		}),
		a
	);
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Oo() {
	return (
		(Oo = Object.assign
			? Object.assign.bind()
			: function (i) {
					for (var s = 1; s < arguments.length; s++) {
						var a = arguments[s];
						for (var l in a)
							Object.prototype.hasOwnProperty.call(a, l) && (i[l] = a[l]);
					}
					return i;
			  }),
		Oo.apply(this, arguments)
	);
}
function Bx(i, s) {
	if (i == null) return {};
	var a = {},
		l = Object.keys(i),
		c,
		u;
	for (u = 0; u < l.length; u++)
		(c = l[u]), !(s.indexOf(c) >= 0) && (a[c] = i[c]);
	return a;
}
function $x(i) {
	return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function Vx(i, s) {
	return i.button === 0 && (!s || s === "_self") && !$x(i);
}
function Io(i) {
	return (
		i === void 0 && (i = ""),
		new URLSearchParams(
			typeof i == "string" || Array.isArray(i) || i instanceof URLSearchParams
				? i
				: Object.keys(i).reduce((s, a) => {
						let l = i[a];
						return s.concat(Array.isArray(l) ? l.map((c) => [a, c]) : [[a, l]]);
				  }, []),
		)
	);
}
function Wx(i, s) {
	let a = Io(i);
	return (
		s &&
			s.forEach((l, c) => {
				a.has(c) ||
					s.getAll(c).forEach((u) => {
						a.append(c, u);
					});
			}),
		a
	);
}
const qx = [
		"onClick",
		"relative",
		"reloadDocument",
		"replace",
		"state",
		"target",
		"to",
		"preventScrollReset",
		"viewTransition",
	],
	Hx = "6";
try {
	window.__reactRouterVersion = Hx;
} catch {}
const Gx = "startTransition",
	mh = Wp[Gx];
function Kx(i) {
	let { basename: s, children: a, future: l, window: c } = i,
		u = S.useRef();
	u.current == null && (u.current = Jp({ window: c, v5Compat: !0 }));
	let h = u.current,
		[f, p] = S.useState({ action: h.action, location: h.location }),
		{ v7_startTransition: y } = l || {},
		g = S.useCallback(
			(v) => {
				y && mh ? mh(() => p(v)) : p(v);
			},
			[p, y],
		);
	return (
		S.useLayoutEffect(() => h.listen(g), [h, g]),
		S.useEffect(() => Dx(l), [l]),
		S.createElement(Ux, {
			basename: s,
			children: a,
			location: f.location,
			navigationType: f.action,
			navigator: h,
			future: l,
		})
	);
}
const Yx =
		typeof window < "u" &&
		typeof window.document < "u" &&
		typeof window.document.createElement < "u",
	Jx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	ke = S.forwardRef(function (s, a) {
		let {
				onClick: l,
				relative: c,
				reloadDocument: u,
				replace: h,
				state: f,
				target: p,
				to: y,
				preventScrollReset: g,
				viewTransition: v,
			} = s,
			w = Bx(s, qx),
			{ basename: T } = S.useContext(rs),
			D,
			U = !1;
		if (typeof y == "string" && Jx.test(y) && ((D = y), Yx))
			try {
				let N = new URL(window.location.href),
					G = y.startsWith("//") ? new URL(N.protocol + y) : new URL(y),
					X = tc(G.pathname, T);
				G.origin === N.origin && X != null
					? (y = X + G.search + G.hash)
					: (U = !0);
			} catch {}
		let A = Nx(y, { relative: c }),
			z = Qx(y, {
				replace: h,
				state: f,
				target: p,
				preventScrollReset: g,
				relative: c,
				viewTransition: v,
			});
		function ee(N) {
			l && l(N), N.defaultPrevented || z(N);
		}
		return S.createElement(
			"a",
			Oo({}, w, { href: D || A, onClick: U || u ? l : ee, ref: a, target: p }),
		);
	});
var fh;
(function (i) {
	(i.UseScrollRestoration = "useScrollRestoration"),
		(i.UseSubmit = "useSubmit"),
		(i.UseSubmitFetcher = "useSubmitFetcher"),
		(i.UseFetcher = "useFetcher"),
		(i.useViewTransitionState = "useViewTransitionState");
})(fh || (fh = {}));
var ph;
(function (i) {
	(i.UseFetcher = "useFetcher"),
		(i.UseFetchers = "useFetchers"),
		(i.UseScrollRestoration = "useScrollRestoration");
})(ph || (ph = {}));
function Qx(i, s) {
	let {
			target: a,
			replace: l,
			state: c,
			preventScrollReset: u,
			relative: h,
			viewTransition: f,
		} = s === void 0 ? {} : s,
		p = Nt(),
		y = Jt(),
		g = om(i, { relative: h });
	return S.useCallback(
		(v) => {
			if (Vx(v, a)) {
				v.preventDefault();
				let w = l !== void 0 ? l : bi(y) === bi(g);
				p(i, {
					replace: w,
					state: c,
					preventScrollReset: u,
					relative: h,
					viewTransition: f,
				});
			}
		},
		[y, p, g, l, c, a, i, u, h, f],
	);
}
function Xx(i) {
	let s = S.useRef(Io(i)),
		a = S.useRef(!1),
		l = Jt(),
		c = S.useMemo(() => Wx(l.search, a.current ? null : s.current), [l.search]),
		u = Nt(),
		h = S.useCallback(
			(f, p) => {
				const y = Io(typeof f == "function" ? f(c) : f);
				(a.current = !0), u("?" + y, p);
			},
			[u, c],
		);
	return [c, h];
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Zx = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eg = (i) =>
		i
			.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
			.toLowerCase()
			.trim(),
	fe = (i, s) => {
		const a = S.forwardRef(
			(
				{
					color: l = "currentColor",
					size: c = 24,
					strokeWidth: u = 2,
					absoluteStrokeWidth: h,
					className: f = "",
					children: p,
					...y
				},
				g,
			) =>
				S.createElement(
					"svg",
					{
						ref: g,
						...Zx,
						width: c,
						height: c,
						stroke: l,
						strokeWidth: h ? (Number(u) * 24) / Number(c) : u,
						className: ["lucide", `lucide-${eg(i)}`, f].join(" "),
						...y,
					},
					[
						...s.map(([v, w]) => S.createElement(v, w)),
						...(Array.isArray(p) ? p : [p]),
					],
				),
		);
		return (a.displayName = `${i}`), a;
	};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const he = fe("AlertTriangle", [
	[
		"path",
		{
			d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
			key: "c3ski4",
		},
	],
	["path", { d: "M12 9v4", key: "juzpu7" }],
	["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tg = fe("ArrowLeft", [
	["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
	["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rg = fe("ArrowRight", [
	["path", { d: "M5 12h14", key: "1ays0h" }],
	["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hm = fe("Award", [
	["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
	["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xh = fe("BarChart3", [
	["path", { d: "M3 3v18h18", key: "1s2lah" }],
	["path", { d: "M18 17V9", key: "2bz60n" }],
	["path", { d: "M13 17V5", key: "1frdt8" }],
	["path", { d: "M8 17v-3", key: "17ska0" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hs = fe("Building", [
	[
		"rect",
		{
			width: "16",
			height: "20",
			x: "4",
			y: "2",
			rx: "2",
			ry: "2",
			key: "76otgf",
		},
	],
	["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
	["path", { d: "M8 6h.01", key: "1dz90k" }],
	["path", { d: "M16 6h.01", key: "1x0f13" }],
	["path", { d: "M12 6h.01", key: "1vi96p" }],
	["path", { d: "M12 10h.01", key: "1nrarc" }],
	["path", { d: "M12 14h.01", key: "1etili" }],
	["path", { d: "M16 10h.01", key: "1m94wz" }],
	["path", { d: "M16 14h.01", key: "1gbofw" }],
	["path", { d: "M8 10h.01", key: "19clt8" }],
	["path", { d: "M8 14h.01", key: "6423bh" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vs = fe("Calendar", [
	["path", { d: "M8 2v4", key: "1cmpym" }],
	["path", { d: "M16 2v4", key: "4m81vk" }],
	[
		"rect",
		{ width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
	],
	["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nc = fe("Camera", [
	[
		"path",
		{
			d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
			key: "1tc9qg",
		},
	],
	["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sg = fe("Car", [
	[
		"path",
		{
			d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
			key: "5owen",
		},
	],
	["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
	["path", { d: "M9 17h6", key: "r8uit2" }],
	["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ng = fe("CheckCircle2", [
	["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
	["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yt = fe("CheckCircle", [
	["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
	["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ts = fe("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mm = fe("ChevronDown", [
	["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zo = fe("ChevronLeft", [
	["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gi = fe("ChevronRight", [
	["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yt = fe("Clock", [
	["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
	["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ag = fe("Code", [
	["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
	["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ig = fe("Cog", [
	["path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z", key: "sobvz5" }],
	["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", key: "11i496" }],
	["path", { d: "M12 2v2", key: "tus03m" }],
	["path", { d: "M12 22v-2", key: "1osdcq" }],
	["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }],
	["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }],
	["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }],
	["path", { d: "m3.34 7 1.73 1", key: "1ulond" }],
	["path", { d: "M14 12h8", key: "4f43i9" }],
	["path", { d: "M2 12h2", key: "1t8f8n" }],
	["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }],
	["path", { d: "m3.34 17 1.73-1", key: "nuk764" }],
	["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }],
	["path", { d: "m11 13.73-4 6.93", key: "794ttg" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mo = fe("Cookie", [
	[
		"path",
		{ d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5", key: "laymnq" },
	],
	["path", { d: "M8.5 8.5v.01", key: "ue8clq" }],
	["path", { d: "M16 15.5v.01", key: "14dtrp" }],
	["path", { d: "M12 12v.01", key: "u5ubse" }],
	["path", { d: "M11 17v.01", key: "1hyl5a" }],
	["path", { d: "M7 14v.01", key: "uct60s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Do = fe("Database", [
	["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
	["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
	["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ji = fe("ExternalLink", [
	["path", { d: "M15 3h6v6", key: "1q9fwt" }],
	["path", { d: "M10 14 21 3", key: "gplh6r" }],
	[
		"path",
		{
			d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
			key: "a6xqqp",
		},
	],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uo = fe("EyeOff", [
	["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
	[
		"path",
		{
			d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
			key: "9wicm4",
		},
	],
	[
		"path",
		{
			d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
			key: "1jreej",
		},
	],
	["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const or = fe("Eye", [
	[
		"path",
		{ d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
	],
	["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lg = fe("Facebook", [
	[
		"path",
		{
			d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
			key: "1jg4f8",
		},
	],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const og = fe("FileText", [
	[
		"path",
		{
			d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
			key: "1rqfz7",
		},
	],
	["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
	["path", { d: "M10 9H8", key: "b1mrlr" }],
	["path", { d: "M16 13H8", key: "t4e002" }],
	["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gh = fe("Filter", [
	[
		"polygon",
		{ points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" },
	],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cg = fe("Fuel", [
	["line", { x1: "3", x2: "15", y1: "22", y2: "22", key: "xegly4" }],
	["line", { x1: "4", x2: "14", y1: "9", y2: "9", key: "xcnuvu" }],
	["path", { d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18", key: "16j0yd" }],
	[
		"path",
		{
			d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",
			key: "8ur5zv",
		},
	],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fm = fe("Gauge", [
	["path", { d: "m12 14 4-4", key: "9kzdfg" }],
	["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ug = fe("Gavel", [
	["path", { d: "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8", key: "15492f" }],
	["path", { d: "m16 16 6-6", key: "vzrcl6" }],
	["path", { d: "m8 8 6-6", key: "18bi4p" }],
	["path", { d: "m9 7 8 8", key: "5jnvq1" }],
	["path", { d: "m21 11-8-8", key: "z4y7zo" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wi = fe("Home", [
	[
		"path",
		{ d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "y5dka4" },
	],
	["polyline", { points: "9 22 9 12 15 12 15 22", key: "e2us08" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dg = fe("Instagram", [
	[
		"rect",
		{
			width: "20",
			height: "20",
			x: "2",
			y: "2",
			rx: "5",
			ry: "5",
			key: "2e1cvw",
		},
	],
	[
		"path",
		{ d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
	],
	["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ir = fe("Lock", [
	[
		"rect",
		{
			width: "18",
			height: "11",
			x: "3",
			y: "11",
			rx: "2",
			ry: "2",
			key: "1w4ew1",
		},
	],
	["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fo = fe("LogIn", [
	["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
	["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
	["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yh = fe("LogOut", [
	["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
	["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
	["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ys = fe("Mail", [
	[
		"rect",
		{ width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
	],
	["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lr = fe("MapPin", [
	[
		"path",
		{ d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" },
	],
	["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hg = fe("Menu", [
	["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
	["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
	["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bo = fe("Package", [
	["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
	[
		"path",
		{
			d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
			key: "hh9hay",
		},
	],
	["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
	["path", { d: "M12 22V12", key: "d0xqtd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mg = fe("Palette", [
	[
		"circle",
		{ cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" },
	],
	[
		"circle",
		{ cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" },
	],
	[
		"circle",
		{ cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" },
	],
	[
		"circle",
		{ cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" },
	],
	[
		"path",
		{
			d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
			key: "12rzf8",
		},
	],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ss = fe("Phone", [
	[
		"path",
		{
			d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
			key: "foiqr5",
		},
	],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vh = fe("Plus", [
	["path", { d: "M5 12h14", key: "1ays0h" }],
	["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cr = fe("RefreshCw", [
	[
		"path",
		{ d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
	],
	["path", { d: "M21 3v5h-5", key: "1q7to0" }],
	[
		"path",
		{ d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
	],
	["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $o = fe("Search", [
	["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
	["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fg = fe("Send", [
	["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
	["path", { d: "M22 2 11 13", key: "nzbqef" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const es = fe("Settings", [
	[
		"path",
		{
			d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
			key: "1qme2f",
		},
	],
	["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pg = fe("Share2", [
	["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
	["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
	["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
	[
		"line",
		{ x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" },
	],
	["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gn = fe("Shield", [
	[
		"path",
		{
			d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
			key: "oel41y",
		},
	],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bh = fe("SlidersHorizontal", [
	["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
	["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
	["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
	["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
	["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
	["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
	["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
	["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
	["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yi = fe("SquarePen", [
	[
		"path",
		{
			d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
			key: "1m0v6g",
		},
	],
	[
		"path",
		{ d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z", key: "1lpok0" },
	],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ei = fe("Store", [
	[
		"path",
		{
			d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",
			key: "ztvudi",
		},
	],
	["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
	["path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4", key: "2ebpfo" }],
	["path", { d: "M2 7h20", key: "1fcdvo" }],
	[
		"path",
		{
			d: "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",
			key: "jon5kx",
		},
	],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jh = fe("Target", [
	["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
	["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
	["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vo = fe("Trash2", [
	["path", { d: "M3 6h18", key: "d0wm0j" }],
	["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
	["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
	["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
	["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pm = fe("UserCheck", [
	["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
	["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
	["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xg = fe("UserX", [
	["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
	["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
	["line", { x1: "17", x2: "22", y1: "8", y2: "13", key: "3nzzx3" }],
	["line", { x1: "22", x2: "17", y1: "8", y2: "13", key: "1swrse" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qn = fe("User", [
	["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
	["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kn = fe("Users", [
	["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
	["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
	["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
	["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gg = fe("WifiOff", [
	["path", { d: "M12 20h.01", key: "zekei9" }],
	["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
	["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
	["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
	["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
	["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
	["path", { d: "m2 2 20 20", key: "1ooewy" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yg = fe("Wrench", [
	[
		"path",
		{
			d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
			key: "cbrjhi",
		},
	],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ws = fe("XCircle", [
	["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
	["path", { d: "m15 9-6 6", key: "1uzhvr" }],
	["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ft = fe("X", [
		["path", { d: "M18 6 6 18", key: "1bl5f8" }],
		["path", { d: "m6 6 12 12", key: "d8bk6v" }],
	]),
	vg = "modulepreload",
	bg = function (i) {
		return "/" + i;
	},
	wh = {},
	Xn = function (s, a, l) {
		let c = Promise.resolve();
		if (a && a.length > 0) {
			let y = function (g) {
				return Promise.all(
					g.map((v) =>
						Promise.resolve(v).then(
							(w) => ({ status: "fulfilled", value: w }),
							(w) => ({ status: "rejected", reason: w }),
						),
					),
				);
			};
			var h = y;
			document.getElementsByTagName("link");
			const f = document.querySelector("meta[property=csp-nonce]"),
				p = f?.nonce || f?.getAttribute("nonce");
			c = y(
				a.map((g) => {
					if (((g = bg(g)), g in wh)) return;
					wh[g] = !0;
					const v = g.endsWith(".css"),
						w = v ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${g}"]${w}`)) return;
					const T = document.createElement("link");
					if (
						((T.rel = v ? "stylesheet" : vg),
						v || (T.as = "script"),
						(T.crossOrigin = ""),
						(T.href = g),
						p && T.setAttribute("nonce", p),
						document.head.appendChild(T),
						v)
					)
						return new Promise((D, U) => {
							T.addEventListener("load", D),
								T.addEventListener("error", () =>
									U(new Error(`Unable to preload CSS for ${g}`)),
								);
						});
				}),
			);
		}
		function u(f) {
			const p = new Event("vite:preloadError", { cancelable: !0 });
			if (((p.payload = f), window.dispatchEvent(p), !p.defaultPrevented))
				throw f;
		}
		return c.then((f) => {
			for (const p of f || []) p.status === "rejected" && u(p.reason);
			return s().catch(u);
		});
	},
	jg = (i) => {
		let s;
		return (
			i
				? (s = i)
				: typeof fetch > "u"
				? (s = (...a) =>
						Xn(async () => {
							const { default: l } = await Promise.resolve().then(() => Js);
							return { default: l };
						}, void 0).then(({ default: l }) => l(...a)))
				: (s = fetch),
			(...a) => s(...a)
		);
	};
class ac extends Error {
	constructor(s, a = "FunctionsError", l) {
		super(s), (this.name = a), (this.context = l);
	}
}
class wg extends ac {
	constructor(s) {
		super(
			"Failed to send a request to the Edge Function",
			"FunctionsFetchError",
			s,
		);
	}
}
class Ng extends ac {
	constructor(s) {
		super("Relay Error invoking the Edge Function", "FunctionsRelayError", s);
	}
}
class kg extends ac {
	constructor(s) {
		super(
			"Edge Function returned a non-2xx status code",
			"FunctionsHttpError",
			s,
		);
	}
}
var Wo;
(function (i) {
	(i.Any = "any"),
		(i.ApNortheast1 = "ap-northeast-1"),
		(i.ApNortheast2 = "ap-northeast-2"),
		(i.ApSouth1 = "ap-south-1"),
		(i.ApSoutheast1 = "ap-southeast-1"),
		(i.ApSoutheast2 = "ap-southeast-2"),
		(i.CaCentral1 = "ca-central-1"),
		(i.EuCentral1 = "eu-central-1"),
		(i.EuWest1 = "eu-west-1"),
		(i.EuWest2 = "eu-west-2"),
		(i.EuWest3 = "eu-west-3"),
		(i.SaEast1 = "sa-east-1"),
		(i.UsEast1 = "us-east-1"),
		(i.UsWest1 = "us-west-1"),
		(i.UsWest2 = "us-west-2");
})(Wo || (Wo = {}));
var Sg = function (i, s, a, l) {
	function c(u) {
		return u instanceof a
			? u
			: new a(function (h) {
					h(u);
			  });
	}
	return new (a || (a = Promise))(function (u, h) {
		function f(g) {
			try {
				y(l.next(g));
			} catch (v) {
				h(v);
			}
		}
		function p(g) {
			try {
				y(l.throw(g));
			} catch (v) {
				h(v);
			}
		}
		function y(g) {
			g.done ? u(g.value) : c(g.value).then(f, p);
		}
		y((l = l.apply(i, s || [])).next());
	});
};
class Eg {
	constructor(s, { headers: a = {}, customFetch: l, region: c = Wo.Any } = {}) {
		(this.url = s), (this.headers = a), (this.region = c), (this.fetch = jg(l));
	}
	setAuth(s) {
		this.headers.Authorization = `Bearer ${s}`;
	}
	invoke(s, a = {}) {
		var l;
		return Sg(this, void 0, void 0, function* () {
			try {
				const { headers: c, method: u, body: h } = a;
				let f = {},
					{ region: p } = a;
				p || (p = this.region), p && p !== "any" && (f["x-region"] = p);
				let y;
				h &&
					((c && !Object.prototype.hasOwnProperty.call(c, "Content-Type")) ||
						!c) &&
					((typeof Blob < "u" && h instanceof Blob) || h instanceof ArrayBuffer
						? ((f["Content-Type"] = "application/octet-stream"), (y = h))
						: typeof h == "string"
						? ((f["Content-Type"] = "text/plain"), (y = h))
						: typeof FormData < "u" && h instanceof FormData
						? (y = h)
						: ((f["Content-Type"] = "application/json"),
						  (y = JSON.stringify(h))));
				const g = yield this.fetch(`${this.url}/${s}`, {
						method: u || "POST",
						headers: Object.assign(
							Object.assign(Object.assign({}, f), this.headers),
							c,
						),
						body: y,
					}).catch((D) => {
						throw new wg(D);
					}),
					v = g.headers.get("x-relay-error");
				if (v && v === "true") throw new Ng(g);
				if (!g.ok) throw new kg(g);
				let w = (
						(l = g.headers.get("Content-Type")) !== null && l !== void 0
							? l
							: "text/plain"
					)
						.split(";")[0]
						.trim(),
					T;
				return (
					w === "application/json"
						? (T = yield g.json())
						: w === "application/octet-stream"
						? (T = yield g.blob())
						: w === "text/event-stream"
						? (T = g)
						: w === "multipart/form-data"
						? (T = yield g.formData())
						: (T = yield g.text()),
					{ data: T, error: null }
				);
			} catch (c) {
				return { data: null, error: c };
			}
		});
	}
}
var Xe = {},
	Rs = {},
	Ls = {},
	Os = {},
	Is = {},
	zs = {},
	_g = function () {
		if (typeof self < "u") return self;
		if (typeof window < "u") return window;
		if (typeof global < "u") return global;
		throw new Error("unable to locate global object");
	},
	Gs = _g();
const Cg = Gs.fetch,
	xm = Gs.fetch.bind(Gs),
	gm = Gs.Headers,
	Pg = Gs.Request,
	Tg = Gs.Response,
	Js = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				Headers: gm,
				Request: Pg,
				Response: Tg,
				default: xm,
				fetch: Cg,
			},
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	Ag = Up(Js);
var ui = {},
	Nh;
function ym() {
	if (Nh) return ui;
	(Nh = 1), Object.defineProperty(ui, "__esModule", { value: !0 });
	class i extends Error {
		constructor(a) {
			super(a.message),
				(this.name = "PostgrestError"),
				(this.details = a.details),
				(this.hint = a.hint),
				(this.code = a.code);
		}
	}
	return (ui.default = i), ui;
}
var kh;
function vm() {
	if (kh) return zs;
	kh = 1;
	var i =
		(zs && zs.__importDefault) ||
		function (c) {
			return c && c.__esModule ? c : { default: c };
		};
	Object.defineProperty(zs, "__esModule", { value: !0 });
	const s = i(Ag),
		a = i(ym());
	class l {
		constructor(u) {
			(this.shouldThrowOnError = !1),
				(this.method = u.method),
				(this.url = u.url),
				(this.headers = u.headers),
				(this.schema = u.schema),
				(this.body = u.body),
				(this.shouldThrowOnError = u.shouldThrowOnError),
				(this.signal = u.signal),
				(this.isMaybeSingle = u.isMaybeSingle),
				u.fetch
					? (this.fetch = u.fetch)
					: typeof fetch > "u"
					? (this.fetch = s.default)
					: (this.fetch = fetch);
		}
		throwOnError() {
			return (this.shouldThrowOnError = !0), this;
		}
		setHeader(u, h) {
			return (
				(this.headers = Object.assign({}, this.headers)),
				(this.headers[u] = h),
				this
			);
		}
		then(u, h) {
			this.schema === void 0 ||
				(["GET", "HEAD"].includes(this.method)
					? (this.headers["Accept-Profile"] = this.schema)
					: (this.headers["Content-Profile"] = this.schema)),
				this.method !== "GET" &&
					this.method !== "HEAD" &&
					(this.headers["Content-Type"] = "application/json");
			const f = this.fetch;
			let p = f(this.url.toString(), {
				method: this.method,
				headers: this.headers,
				body: JSON.stringify(this.body),
				signal: this.signal,
			}).then(async (y) => {
				var g, v, w;
				let T = null,
					D = null,
					U = null,
					A = y.status,
					z = y.statusText;
				if (y.ok) {
					if (this.method !== "HEAD") {
						const X = await y.text();
						X === "" ||
							(this.headers.Accept === "text/csv" ||
							(this.headers.Accept &&
								this.headers.Accept.includes("application/vnd.pgrst.plan+text"))
								? (D = X)
								: (D = JSON.parse(X)));
					}
					const N =
							(g = this.headers.Prefer) === null || g === void 0
								? void 0
								: g.match(/count=(exact|planned|estimated)/),
						G =
							(v = y.headers.get("content-range")) === null || v === void 0
								? void 0
								: v.split("/");
					N && G && G.length > 1 && (U = parseInt(G[1])),
						this.isMaybeSingle &&
							this.method === "GET" &&
							Array.isArray(D) &&
							(D.length > 1
								? ((T = {
										code: "PGRST116",
										details: `Results contain ${D.length} rows, application/vnd.pgrst.object+json requires 1 row`,
										hint: null,
										message:
											"JSON object requested, multiple (or no) rows returned",
								  }),
								  (D = null),
								  (U = null),
								  (A = 406),
								  (z = "Not Acceptable"))
								: D.length === 1
								? (D = D[0])
								: (D = null));
				} else {
					const N = await y.text();
					try {
						(T = JSON.parse(N)),
							Array.isArray(T) &&
								y.status === 404 &&
								((D = []), (T = null), (A = 200), (z = "OK"));
					} catch {
						y.status === 404 && N === ""
							? ((A = 204), (z = "No Content"))
							: (T = { message: N });
					}
					if (
						(T &&
							this.isMaybeSingle &&
							!((w = T?.details) === null || w === void 0) &&
							w.includes("0 rows") &&
							((T = null), (A = 200), (z = "OK")),
						T && this.shouldThrowOnError)
					)
						throw new a.default(T);
				}
				return { error: T, data: D, count: U, status: A, statusText: z };
			});
			return (
				this.shouldThrowOnError ||
					(p = p.catch((y) => {
						var g, v, w;
						return {
							error: {
								message: `${
									(g = y?.name) !== null && g !== void 0 ? g : "FetchError"
								}: ${y?.message}`,
								details: `${(v = y?.stack) !== null && v !== void 0 ? v : ""}`,
								hint: "",
								code: `${(w = y?.code) !== null && w !== void 0 ? w : ""}`,
							},
							data: null,
							count: null,
							status: 0,
							statusText: "",
						};
					})),
				p.then(u, h)
			);
		}
		returns() {
			return this;
		}
		overrideTypes() {
			return this;
		}
	}
	return (zs.default = l), zs;
}
var Sh;
function bm() {
	if (Sh) return Is;
	Sh = 1;
	var i =
		(Is && Is.__importDefault) ||
		function (l) {
			return l && l.__esModule ? l : { default: l };
		};
	Object.defineProperty(Is, "__esModule", { value: !0 });
	const s = i(vm());
	class a extends s.default {
		select(c) {
			let u = !1;
			const h = (c ?? "*")
				.split("")
				.map((f) => (/\s/.test(f) && !u ? "" : (f === '"' && (u = !u), f)))
				.join("");
			return (
				this.url.searchParams.set("select", h),
				this.headers.Prefer && (this.headers.Prefer += ","),
				(this.headers.Prefer += "return=representation"),
				this
			);
		}
		order(
			c,
			{
				ascending: u = !0,
				nullsFirst: h,
				foreignTable: f,
				referencedTable: p = f,
			} = {},
		) {
			const y = p ? `${p}.order` : "order",
				g = this.url.searchParams.get(y);
			return (
				this.url.searchParams.set(
					y,
					`${g ? `${g},` : ""}${c}.${u ? "asc" : "desc"}${
						h === void 0 ? "" : h ? ".nullsfirst" : ".nullslast"
					}`,
				),
				this
			);
		}
		limit(c, { foreignTable: u, referencedTable: h = u } = {}) {
			const f = typeof h > "u" ? "limit" : `${h}.limit`;
			return this.url.searchParams.set(f, `${c}`), this;
		}
		range(c, u, { foreignTable: h, referencedTable: f = h } = {}) {
			const p = typeof f > "u" ? "offset" : `${f}.offset`,
				y = typeof f > "u" ? "limit" : `${f}.limit`;
			return (
				this.url.searchParams.set(p, `${c}`),
				this.url.searchParams.set(y, `${u - c + 1}`),
				this
			);
		}
		abortSignal(c) {
			return (this.signal = c), this;
		}
		single() {
			return (this.headers.Accept = "application/vnd.pgrst.object+json"), this;
		}
		maybeSingle() {
			return (
				this.method === "GET"
					? (this.headers.Accept = "application/json")
					: (this.headers.Accept = "application/vnd.pgrst.object+json"),
				(this.isMaybeSingle = !0),
				this
			);
		}
		csv() {
			return (this.headers.Accept = "text/csv"), this;
		}
		geojson() {
			return (this.headers.Accept = "application/geo+json"), this;
		}
		explain({
			analyze: c = !1,
			verbose: u = !1,
			settings: h = !1,
			buffers: f = !1,
			wal: p = !1,
			format: y = "text",
		} = {}) {
			var g;
			const v = [
					c ? "analyze" : null,
					u ? "verbose" : null,
					h ? "settings" : null,
					f ? "buffers" : null,
					p ? "wal" : null,
				]
					.filter(Boolean)
					.join("|"),
				w =
					(g = this.headers.Accept) !== null && g !== void 0
						? g
						: "application/json";
			return (
				(this.headers.Accept = `application/vnd.pgrst.plan+${y}; for="${w}"; options=${v};`),
				y === "json" ? this : this
			);
		}
		rollback() {
			var c;
			return (
				((c = this.headers.Prefer) !== null && c !== void 0 ? c : "").trim()
					.length > 0
					? (this.headers.Prefer += ",tx=rollback")
					: (this.headers.Prefer = "tx=rollback"),
				this
			);
		}
		returns() {
			return this;
		}
	}
	return (Is.default = a), Is;
}
var Eh;
function ic() {
	if (Eh) return Os;
	Eh = 1;
	var i =
		(Os && Os.__importDefault) ||
		function (l) {
			return l && l.__esModule ? l : { default: l };
		};
	Object.defineProperty(Os, "__esModule", { value: !0 });
	const s = i(bm());
	class a extends s.default {
		eq(c, u) {
			return this.url.searchParams.append(c, `eq.${u}`), this;
		}
		neq(c, u) {
			return this.url.searchParams.append(c, `neq.${u}`), this;
		}
		gt(c, u) {
			return this.url.searchParams.append(c, `gt.${u}`), this;
		}
		gte(c, u) {
			return this.url.searchParams.append(c, `gte.${u}`), this;
		}
		lt(c, u) {
			return this.url.searchParams.append(c, `lt.${u}`), this;
		}
		lte(c, u) {
			return this.url.searchParams.append(c, `lte.${u}`), this;
		}
		like(c, u) {
			return this.url.searchParams.append(c, `like.${u}`), this;
		}
		likeAllOf(c, u) {
			return (
				this.url.searchParams.append(c, `like(all).{${u.join(",")}}`), this
			);
		}
		likeAnyOf(c, u) {
			return (
				this.url.searchParams.append(c, `like(any).{${u.join(",")}}`), this
			);
		}
		ilike(c, u) {
			return this.url.searchParams.append(c, `ilike.${u}`), this;
		}
		ilikeAllOf(c, u) {
			return (
				this.url.searchParams.append(c, `ilike(all).{${u.join(",")}}`), this
			);
		}
		ilikeAnyOf(c, u) {
			return (
				this.url.searchParams.append(c, `ilike(any).{${u.join(",")}}`), this
			);
		}
		is(c, u) {
			return this.url.searchParams.append(c, `is.${u}`), this;
		}
		in(c, u) {
			const h = Array.from(new Set(u))
				.map((f) =>
					typeof f == "string" && new RegExp("[,()]").test(f)
						? `"${f}"`
						: `${f}`,
				)
				.join(",");
			return this.url.searchParams.append(c, `in.(${h})`), this;
		}
		contains(c, u) {
			return (
				typeof u == "string"
					? this.url.searchParams.append(c, `cs.${u}`)
					: Array.isArray(u)
					? this.url.searchParams.append(c, `cs.{${u.join(",")}}`)
					: this.url.searchParams.append(c, `cs.${JSON.stringify(u)}`),
				this
			);
		}
		containedBy(c, u) {
			return (
				typeof u == "string"
					? this.url.searchParams.append(c, `cd.${u}`)
					: Array.isArray(u)
					? this.url.searchParams.append(c, `cd.{${u.join(",")}}`)
					: this.url.searchParams.append(c, `cd.${JSON.stringify(u)}`),
				this
			);
		}
		rangeGt(c, u) {
			return this.url.searchParams.append(c, `sr.${u}`), this;
		}
		rangeGte(c, u) {
			return this.url.searchParams.append(c, `nxl.${u}`), this;
		}
		rangeLt(c, u) {
			return this.url.searchParams.append(c, `sl.${u}`), this;
		}
		rangeLte(c, u) {
			return this.url.searchParams.append(c, `nxr.${u}`), this;
		}
		rangeAdjacent(c, u) {
			return this.url.searchParams.append(c, `adj.${u}`), this;
		}
		overlaps(c, u) {
			return (
				typeof u == "string"
					? this.url.searchParams.append(c, `ov.${u}`)
					: this.url.searchParams.append(c, `ov.{${u.join(",")}}`),
				this
			);
		}
		textSearch(c, u, { config: h, type: f } = {}) {
			let p = "";
			f === "plain"
				? (p = "pl")
				: f === "phrase"
				? (p = "ph")
				: f === "websearch" && (p = "w");
			const y = h === void 0 ? "" : `(${h})`;
			return this.url.searchParams.append(c, `${p}fts${y}.${u}`), this;
		}
		match(c) {
			return (
				Object.entries(c).forEach(([u, h]) => {
					this.url.searchParams.append(u, `eq.${h}`);
				}),
				this
			);
		}
		not(c, u, h) {
			return this.url.searchParams.append(c, `not.${u}.${h}`), this;
		}
		or(c, { foreignTable: u, referencedTable: h = u } = {}) {
			const f = h ? `${h}.or` : "or";
			return this.url.searchParams.append(f, `(${c})`), this;
		}
		filter(c, u, h) {
			return this.url.searchParams.append(c, `${u}.${h}`), this;
		}
	}
	return (Os.default = a), Os;
}
var _h;
function jm() {
	if (_h) return Ls;
	_h = 1;
	var i =
		(Ls && Ls.__importDefault) ||
		function (l) {
			return l && l.__esModule ? l : { default: l };
		};
	Object.defineProperty(Ls, "__esModule", { value: !0 });
	const s = i(ic());
	class a {
		constructor(c, { headers: u = {}, schema: h, fetch: f }) {
			(this.url = c), (this.headers = u), (this.schema = h), (this.fetch = f);
		}
		select(c, { head: u = !1, count: h } = {}) {
			const f = u ? "HEAD" : "GET";
			let p = !1;
			const y = (c ?? "*")
				.split("")
				.map((g) => (/\s/.test(g) && !p ? "" : (g === '"' && (p = !p), g)))
				.join("");
			return (
				this.url.searchParams.set("select", y),
				h && (this.headers.Prefer = `count=${h}`),
				new s.default({
					method: f,
					url: this.url,
					headers: this.headers,
					schema: this.schema,
					fetch: this.fetch,
					allowEmpty: !1,
				})
			);
		}
		insert(c, { count: u, defaultToNull: h = !0 } = {}) {
			const f = "POST",
				p = [];
			if (
				(this.headers.Prefer && p.push(this.headers.Prefer),
				u && p.push(`count=${u}`),
				h || p.push("missing=default"),
				(this.headers.Prefer = p.join(",")),
				Array.isArray(c))
			) {
				const y = c.reduce((g, v) => g.concat(Object.keys(v)), []);
				if (y.length > 0) {
					const g = [...new Set(y)].map((v) => `"${v}"`);
					this.url.searchParams.set("columns", g.join(","));
				}
			}
			return new s.default({
				method: f,
				url: this.url,
				headers: this.headers,
				schema: this.schema,
				body: c,
				fetch: this.fetch,
				allowEmpty: !1,
			});
		}
		upsert(
			c,
			{
				onConflict: u,
				ignoreDuplicates: h = !1,
				count: f,
				defaultToNull: p = !0,
			} = {},
		) {
			const y = "POST",
				g = [`resolution=${h ? "ignore" : "merge"}-duplicates`];
			if (
				(u !== void 0 && this.url.searchParams.set("on_conflict", u),
				this.headers.Prefer && g.push(this.headers.Prefer),
				f && g.push(`count=${f}`),
				p || g.push("missing=default"),
				(this.headers.Prefer = g.join(",")),
				Array.isArray(c))
			) {
				const v = c.reduce((w, T) => w.concat(Object.keys(T)), []);
				if (v.length > 0) {
					const w = [...new Set(v)].map((T) => `"${T}"`);
					this.url.searchParams.set("columns", w.join(","));
				}
			}
			return new s.default({
				method: y,
				url: this.url,
				headers: this.headers,
				schema: this.schema,
				body: c,
				fetch: this.fetch,
				allowEmpty: !1,
			});
		}
		update(c, { count: u } = {}) {
			const h = "PATCH",
				f = [];
			return (
				this.headers.Prefer && f.push(this.headers.Prefer),
				u && f.push(`count=${u}`),
				(this.headers.Prefer = f.join(",")),
				new s.default({
					method: h,
					url: this.url,
					headers: this.headers,
					schema: this.schema,
					body: c,
					fetch: this.fetch,
					allowEmpty: !1,
				})
			);
		}
		delete({ count: c } = {}) {
			const u = "DELETE",
				h = [];
			return (
				c && h.push(`count=${c}`),
				this.headers.Prefer && h.unshift(this.headers.Prefer),
				(this.headers.Prefer = h.join(",")),
				new s.default({
					method: u,
					url: this.url,
					headers: this.headers,
					schema: this.schema,
					fetch: this.fetch,
					allowEmpty: !1,
				})
			);
		}
	}
	return (Ls.default = a), Ls;
}
var Un = {},
	Fn = {},
	Ch;
function Rg() {
	return (
		Ch ||
			((Ch = 1),
			Object.defineProperty(Fn, "__esModule", { value: !0 }),
			(Fn.version = void 0),
			(Fn.version = "0.0.0-automated")),
		Fn
	);
}
var Ph;
function Lg() {
	if (Ph) return Un;
	(Ph = 1),
		Object.defineProperty(Un, "__esModule", { value: !0 }),
		(Un.DEFAULT_HEADERS = void 0);
	const i = Rg();
	return (
		(Un.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${i.version}` }), Un
	);
}
var Th;
function Og() {
	if (Th) return Rs;
	Th = 1;
	var i =
		(Rs && Rs.__importDefault) ||
		function (u) {
			return u && u.__esModule ? u : { default: u };
		};
	Object.defineProperty(Rs, "__esModule", { value: !0 });
	const s = i(jm()),
		a = i(ic()),
		l = Lg();
	class c {
		constructor(h, { headers: f = {}, schema: p, fetch: y } = {}) {
			(this.url = h),
				(this.headers = Object.assign(Object.assign({}, l.DEFAULT_HEADERS), f)),
				(this.schemaName = p),
				(this.fetch = y);
		}
		from(h) {
			const f = new URL(`${this.url}/${h}`);
			return new s.default(f, {
				headers: Object.assign({}, this.headers),
				schema: this.schemaName,
				fetch: this.fetch,
			});
		}
		schema(h) {
			return new c(this.url, {
				headers: this.headers,
				schema: h,
				fetch: this.fetch,
			});
		}
		rpc(h, f = {}, { head: p = !1, get: y = !1, count: g } = {}) {
			let v;
			const w = new URL(`${this.url}/rpc/${h}`);
			let T;
			p || y
				? ((v = p ? "HEAD" : "GET"),
				  Object.entries(f)
						.filter(([U, A]) => A !== void 0)
						.map(([U, A]) => [
							U,
							Array.isArray(A) ? `{${A.join(",")}}` : `${A}`,
						])
						.forEach(([U, A]) => {
							w.searchParams.append(U, A);
						}))
				: ((v = "POST"), (T = f));
			const D = Object.assign({}, this.headers);
			return (
				g && (D.Prefer = `count=${g}`),
				new a.default({
					method: v,
					url: w,
					headers: D,
					schema: this.schemaName,
					body: T,
					fetch: this.fetch,
					allowEmpty: !1,
				})
			);
		}
	}
	return (Rs.default = c), Rs;
}
var Ah;
function Ig() {
	if (Ah) return Xe;
	Ah = 1;
	var i =
		(Xe && Xe.__importDefault) ||
		function (f) {
			return f && f.__esModule ? f : { default: f };
		};
	Object.defineProperty(Xe, "__esModule", { value: !0 }),
		(Xe.PostgrestError =
			Xe.PostgrestBuilder =
			Xe.PostgrestTransformBuilder =
			Xe.PostgrestFilterBuilder =
			Xe.PostgrestQueryBuilder =
			Xe.PostgrestClient =
				void 0);
	const s = i(Og());
	Xe.PostgrestClient = s.default;
	const a = i(jm());
	Xe.PostgrestQueryBuilder = a.default;
	const l = i(ic());
	Xe.PostgrestFilterBuilder = l.default;
	const c = i(bm());
	Xe.PostgrestTransformBuilder = c.default;
	const u = i(vm());
	Xe.PostgrestBuilder = u.default;
	const h = i(ym());
	return (
		(Xe.PostgrestError = h.default),
		(Xe.default = {
			PostgrestClient: s.default,
			PostgrestQueryBuilder: a.default,
			PostgrestFilterBuilder: l.default,
			PostgrestTransformBuilder: c.default,
			PostgrestBuilder: u.default,
			PostgrestError: h.default,
		}),
		Xe
	);
}
var zg = Ig();
const Mg = Xh(zg),
	{
		PostgrestClient: Dg,
		PostgrestQueryBuilder: Qy,
		PostgrestFilterBuilder: Xy,
		PostgrestTransformBuilder: Zy,
		PostgrestBuilder: ev,
		PostgrestError: tv,
	} = Mg;
let qo;
typeof window > "u" ? (qo = require("ws")) : (qo = window.WebSocket);
const Ug = "2.11.10",
	Fg = { "X-Client-Info": `realtime-js/${Ug}` },
	Bg = "1.0.0",
	wm = 1e4,
	$g = 1e3;
var qs;
(function (i) {
	(i[(i.connecting = 0)] = "connecting"),
		(i[(i.open = 1)] = "open"),
		(i[(i.closing = 2)] = "closing"),
		(i[(i.closed = 3)] = "closed");
})(qs || (qs = {}));
var ut;
(function (i) {
	(i.closed = "closed"),
		(i.errored = "errored"),
		(i.joined = "joined"),
		(i.joining = "joining"),
		(i.leaving = "leaving");
})(ut || (ut = {}));
var Ut;
(function (i) {
	(i.close = "phx_close"),
		(i.error = "phx_error"),
		(i.join = "phx_join"),
		(i.reply = "phx_reply"),
		(i.leave = "phx_leave"),
		(i.access_token = "access_token");
})(Ut || (Ut = {}));
var Ho;
(function (i) {
	i.websocket = "websocket";
})(Ho || (Ho = {}));
var Zr;
(function (i) {
	(i.Connecting = "connecting"),
		(i.Open = "open"),
		(i.Closing = "closing"),
		(i.Closed = "closed");
})(Zr || (Zr = {}));
class Vg {
	constructor() {
		this.HEADER_LENGTH = 1;
	}
	decode(s, a) {
		return s.constructor === ArrayBuffer
			? a(this._binaryDecode(s))
			: a(typeof s == "string" ? JSON.parse(s) : {});
	}
	_binaryDecode(s) {
		const a = new DataView(s),
			l = new TextDecoder();
		return this._decodeBroadcast(s, a, l);
	}
	_decodeBroadcast(s, a, l) {
		const c = a.getUint8(1),
			u = a.getUint8(2);
		let h = this.HEADER_LENGTH + 2;
		const f = l.decode(s.slice(h, h + c));
		h = h + c;
		const p = l.decode(s.slice(h, h + u));
		h = h + u;
		const y = JSON.parse(l.decode(s.slice(h, s.byteLength)));
		return { ref: null, topic: f, event: p, payload: y };
	}
}
class Nm {
	constructor(s, a) {
		(this.callback = s),
			(this.timerCalc = a),
			(this.timer = void 0),
			(this.tries = 0),
			(this.callback = s),
			(this.timerCalc = a);
	}
	reset() {
		(this.tries = 0), clearTimeout(this.timer);
	}
	scheduleTimeout() {
		clearTimeout(this.timer),
			(this.timer = setTimeout(() => {
				(this.tries = this.tries + 1), this.callback();
			}, this.timerCalc(this.tries + 1)));
	}
}
var Oe;
(function (i) {
	(i.abstime = "abstime"),
		(i.bool = "bool"),
		(i.date = "date"),
		(i.daterange = "daterange"),
		(i.float4 = "float4"),
		(i.float8 = "float8"),
		(i.int2 = "int2"),
		(i.int4 = "int4"),
		(i.int4range = "int4range"),
		(i.int8 = "int8"),
		(i.int8range = "int8range"),
		(i.json = "json"),
		(i.jsonb = "jsonb"),
		(i.money = "money"),
		(i.numeric = "numeric"),
		(i.oid = "oid"),
		(i.reltime = "reltime"),
		(i.text = "text"),
		(i.time = "time"),
		(i.timestamp = "timestamp"),
		(i.timestamptz = "timestamptz"),
		(i.timetz = "timetz"),
		(i.tsrange = "tsrange"),
		(i.tstzrange = "tstzrange");
})(Oe || (Oe = {}));
const Rh = (i, s, a = {}) => {
		var l;
		const c = (l = a.skipTypes) !== null && l !== void 0 ? l : [];
		return Object.keys(s).reduce((u, h) => ((u[h] = Wg(h, i, s, c)), u), {});
	},
	Wg = (i, s, a, l) => {
		const c = s.find((f) => f.name === i),
			u = c?.type,
			h = a[i];
		return u && !l.includes(u) ? km(u, h) : Go(h);
	},
	km = (i, s) => {
		if (i.charAt(0) === "_") {
			const a = i.slice(1, i.length);
			return Kg(s, a);
		}
		switch (i) {
			case Oe.bool:
				return qg(s);
			case Oe.float4:
			case Oe.float8:
			case Oe.int2:
			case Oe.int4:
			case Oe.int8:
			case Oe.numeric:
			case Oe.oid:
				return Hg(s);
			case Oe.json:
			case Oe.jsonb:
				return Gg(s);
			case Oe.timestamp:
				return Yg(s);
			case Oe.abstime:
			case Oe.date:
			case Oe.daterange:
			case Oe.int4range:
			case Oe.int8range:
			case Oe.money:
			case Oe.reltime:
			case Oe.text:
			case Oe.time:
			case Oe.timestamptz:
			case Oe.timetz:
			case Oe.tsrange:
			case Oe.tstzrange:
				return Go(s);
			default:
				return Go(s);
		}
	},
	Go = (i) => i,
	qg = (i) => {
		switch (i) {
			case "t":
				return !0;
			case "f":
				return !1;
			default:
				return i;
		}
	},
	Hg = (i) => {
		if (typeof i == "string") {
			const s = parseFloat(i);
			if (!Number.isNaN(s)) return s;
		}
		return i;
	},
	Gg = (i) => {
		if (typeof i == "string")
			try {
				return JSON.parse(i);
			} catch (s) {
				return console.log(`JSON parse error: ${s}`), i;
			}
		return i;
	},
	Kg = (i, s) => {
		if (typeof i != "string") return i;
		const a = i.length - 1,
			l = i[a];
		if (i[0] === "{" && l === "}") {
			let u;
			const h = i.slice(1, a);
			try {
				u = JSON.parse("[" + h + "]");
			} catch {
				u = h ? h.split(",") : [];
			}
			return u.map((f) => km(s, f));
		}
		return i;
	},
	Yg = (i) => (typeof i == "string" ? i.replace(" ", "T") : i),
	Sm = (i) => {
		let s = i;
		return (
			(s = s.replace(/^ws/i, "http")),
			(s = s.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")),
			s.replace(/\/+$/, "")
		);
	};
class Eo {
	constructor(s, a, l = {}, c = wm) {
		(this.channel = s),
			(this.event = a),
			(this.payload = l),
			(this.timeout = c),
			(this.sent = !1),
			(this.timeoutTimer = void 0),
			(this.ref = ""),
			(this.receivedResp = null),
			(this.recHooks = []),
			(this.refEvent = null);
	}
	resend(s) {
		(this.timeout = s),
			this._cancelRefEvent(),
			(this.ref = ""),
			(this.refEvent = null),
			(this.receivedResp = null),
			(this.sent = !1),
			this.send();
	}
	send() {
		this._hasReceived("timeout") ||
			(this.startTimeout(),
			(this.sent = !0),
			this.channel.socket.push({
				topic: this.channel.topic,
				event: this.event,
				payload: this.payload,
				ref: this.ref,
				join_ref: this.channel._joinRef(),
			}));
	}
	updatePayload(s) {
		this.payload = Object.assign(Object.assign({}, this.payload), s);
	}
	receive(s, a) {
		var l;
		return (
			this._hasReceived(s) &&
				a(
					(l = this.receivedResp) === null || l === void 0
						? void 0
						: l.response,
				),
			this.recHooks.push({ status: s, callback: a }),
			this
		);
	}
	startTimeout() {
		if (this.timeoutTimer) return;
		(this.ref = this.channel.socket._makeRef()),
			(this.refEvent = this.channel._replyEventName(this.ref));
		const s = (a) => {
			this._cancelRefEvent(),
				this._cancelTimeout(),
				(this.receivedResp = a),
				this._matchReceive(a);
		};
		this.channel._on(this.refEvent, {}, s),
			(this.timeoutTimer = setTimeout(() => {
				this.trigger("timeout", {});
			}, this.timeout));
	}
	trigger(s, a) {
		this.refEvent &&
			this.channel._trigger(this.refEvent, { status: s, response: a });
	}
	destroy() {
		this._cancelRefEvent(), this._cancelTimeout();
	}
	_cancelRefEvent() {
		this.refEvent && this.channel._off(this.refEvent, {});
	}
	_cancelTimeout() {
		clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
	}
	_matchReceive({ status: s, response: a }) {
		this.recHooks.filter((l) => l.status === s).forEach((l) => l.callback(a));
	}
	_hasReceived(s) {
		return this.receivedResp && this.receivedResp.status === s;
	}
}
var Lh;
(function (i) {
	(i.SYNC = "sync"), (i.JOIN = "join"), (i.LEAVE = "leave");
})(Lh || (Lh = {}));
class $n {
	constructor(s, a) {
		(this.channel = s),
			(this.state = {}),
			(this.pendingDiffs = []),
			(this.joinRef = null),
			(this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
		const l = a?.events || { state: "presence_state", diff: "presence_diff" };
		this.channel._on(l.state, {}, (c) => {
			const { onJoin: u, onLeave: h, onSync: f } = this.caller;
			(this.joinRef = this.channel._joinRef()),
				(this.state = $n.syncState(this.state, c, u, h)),
				this.pendingDiffs.forEach((p) => {
					this.state = $n.syncDiff(this.state, p, u, h);
				}),
				(this.pendingDiffs = []),
				f();
		}),
			this.channel._on(l.diff, {}, (c) => {
				const { onJoin: u, onLeave: h, onSync: f } = this.caller;
				this.inPendingSyncState()
					? this.pendingDiffs.push(c)
					: ((this.state = $n.syncDiff(this.state, c, u, h)), f());
			}),
			this.onJoin((c, u, h) => {
				this.channel._trigger("presence", {
					event: "join",
					key: c,
					currentPresences: u,
					newPresences: h,
				});
			}),
			this.onLeave((c, u, h) => {
				this.channel._trigger("presence", {
					event: "leave",
					key: c,
					currentPresences: u,
					leftPresences: h,
				});
			}),
			this.onSync(() => {
				this.channel._trigger("presence", { event: "sync" });
			});
	}
	static syncState(s, a, l, c) {
		const u = this.cloneDeep(s),
			h = this.transformState(a),
			f = {},
			p = {};
		return (
			this.map(u, (y, g) => {
				h[y] || (p[y] = g);
			}),
			this.map(h, (y, g) => {
				const v = u[y];
				if (v) {
					const w = g.map((A) => A.presence_ref),
						T = v.map((A) => A.presence_ref),
						D = g.filter((A) => T.indexOf(A.presence_ref) < 0),
						U = v.filter((A) => w.indexOf(A.presence_ref) < 0);
					D.length > 0 && (f[y] = D), U.length > 0 && (p[y] = U);
				} else f[y] = g;
			}),
			this.syncDiff(u, { joins: f, leaves: p }, l, c)
		);
	}
	static syncDiff(s, a, l, c) {
		const { joins: u, leaves: h } = {
			joins: this.transformState(a.joins),
			leaves: this.transformState(a.leaves),
		};
		return (
			l || (l = () => {}),
			c || (c = () => {}),
			this.map(u, (f, p) => {
				var y;
				const g = (y = s[f]) !== null && y !== void 0 ? y : [];
				if (((s[f] = this.cloneDeep(p)), g.length > 0)) {
					const v = s[f].map((T) => T.presence_ref),
						w = g.filter((T) => v.indexOf(T.presence_ref) < 0);
					s[f].unshift(...w);
				}
				l(f, g, p);
			}),
			this.map(h, (f, p) => {
				let y = s[f];
				if (!y) return;
				const g = p.map((v) => v.presence_ref);
				(y = y.filter((v) => g.indexOf(v.presence_ref) < 0)),
					(s[f] = y),
					c(f, y, p),
					y.length === 0 && delete s[f];
			}),
			s
		);
	}
	static map(s, a) {
		return Object.getOwnPropertyNames(s).map((l) => a(l, s[l]));
	}
	static transformState(s) {
		return (
			(s = this.cloneDeep(s)),
			Object.getOwnPropertyNames(s).reduce((a, l) => {
				const c = s[l];
				return (
					"metas" in c
						? (a[l] = c.metas.map(
								(u) => (
									(u.presence_ref = u.phx_ref),
									delete u.phx_ref,
									delete u.phx_ref_prev,
									u
								),
						  ))
						: (a[l] = c),
					a
				);
			}, {})
		);
	}
	static cloneDeep(s) {
		return JSON.parse(JSON.stringify(s));
	}
	onJoin(s) {
		this.caller.onJoin = s;
	}
	onLeave(s) {
		this.caller.onLeave = s;
	}
	onSync(s) {
		this.caller.onSync = s;
	}
	inPendingSyncState() {
		return !this.joinRef || this.joinRef !== this.channel._joinRef();
	}
}
var Oh;
(function (i) {
	(i.ALL = "*"),
		(i.INSERT = "INSERT"),
		(i.UPDATE = "UPDATE"),
		(i.DELETE = "DELETE");
})(Oh || (Oh = {}));
var Ih;
(function (i) {
	(i.BROADCAST = "broadcast"),
		(i.PRESENCE = "presence"),
		(i.POSTGRES_CHANGES = "postgres_changes"),
		(i.SYSTEM = "system");
})(Ih || (Ih = {}));
var ir;
(function (i) {
	(i.SUBSCRIBED = "SUBSCRIBED"),
		(i.TIMED_OUT = "TIMED_OUT"),
		(i.CLOSED = "CLOSED"),
		(i.CHANNEL_ERROR = "CHANNEL_ERROR");
})(ir || (ir = {}));
class lc {
	constructor(s, a = { config: {} }, l) {
		(this.topic = s),
			(this.params = a),
			(this.socket = l),
			(this.bindings = {}),
			(this.state = ut.closed),
			(this.joinedOnce = !1),
			(this.pushBuffer = []),
			(this.subTopic = s.replace(/^realtime:/i, "")),
			(this.params.config = Object.assign(
				{
					broadcast: { ack: !1, self: !1 },
					presence: { key: "" },
					private: !1,
				},
				a.config,
			)),
			(this.timeout = this.socket.timeout),
			(this.joinPush = new Eo(this, Ut.join, this.params, this.timeout)),
			(this.rejoinTimer = new Nm(
				() => this._rejoinUntilConnected(),
				this.socket.reconnectAfterMs,
			)),
			this.joinPush.receive("ok", () => {
				(this.state = ut.joined),
					this.rejoinTimer.reset(),
					this.pushBuffer.forEach((c) => c.send()),
					(this.pushBuffer = []);
			}),
			this._onClose(() => {
				this.rejoinTimer.reset(),
					this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
					(this.state = ut.closed),
					this.socket._remove(this);
			}),
			this._onError((c) => {
				this._isLeaving() ||
					this._isClosed() ||
					(this.socket.log("channel", `error ${this.topic}`, c),
					(this.state = ut.errored),
					this.rejoinTimer.scheduleTimeout());
			}),
			this.joinPush.receive("timeout", () => {
				this._isJoining() &&
					(this.socket.log(
						"channel",
						`timeout ${this.topic}`,
						this.joinPush.timeout,
					),
					(this.state = ut.errored),
					this.rejoinTimer.scheduleTimeout());
			}),
			this._on(Ut.reply, {}, (c, u) => {
				this._trigger(this._replyEventName(u), c);
			}),
			(this.presence = new $n(this)),
			(this.broadcastEndpointURL = Sm(this.socket.endPoint) + "/api/broadcast"),
			(this.private = this.params.config.private || !1);
	}
	subscribe(s, a = this.timeout) {
		var l, c;
		if ((this.socket.isConnected() || this.socket.connect(), this.joinedOnce))
			throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
		{
			const {
				config: { broadcast: u, presence: h, private: f },
			} = this.params;
			this._onError((g) => s?.(ir.CHANNEL_ERROR, g)),
				this._onClose(() => s?.(ir.CLOSED));
			const p = {},
				y = {
					broadcast: u,
					presence: h,
					postgres_changes:
						(c =
							(l = this.bindings.postgres_changes) === null || l === void 0
								? void 0
								: l.map((g) => g.filter)) !== null && c !== void 0
							? c
							: [],
					private: f,
				};
			this.socket.accessTokenValue &&
				(p.access_token = this.socket.accessTokenValue),
				this.updateJoinPayload(Object.assign({ config: y }, p)),
				(this.joinedOnce = !0),
				this._rejoin(a),
				this.joinPush
					.receive("ok", async ({ postgres_changes: g }) => {
						var v;
						if ((this.socket.setAuth(), g === void 0)) {
							s?.(ir.SUBSCRIBED);
							return;
						} else {
							const w = this.bindings.postgres_changes,
								T = (v = w?.length) !== null && v !== void 0 ? v : 0,
								D = [];
							for (let U = 0; U < T; U++) {
								const A = w[U],
									{
										filter: { event: z, schema: ee, table: N, filter: G },
									} = A,
									X = g && g[U];
								if (
									X &&
									X.event === z &&
									X.schema === ee &&
									X.table === N &&
									X.filter === G
								)
									D.push(Object.assign(Object.assign({}, A), { id: X.id }));
								else {
									this.unsubscribe(),
										(this.state = ut.errored),
										s?.(
											ir.CHANNEL_ERROR,
											new Error(
												"mismatch between server and client bindings for postgres changes",
											),
										);
									return;
								}
							}
							(this.bindings.postgres_changes = D), s && s(ir.SUBSCRIBED);
							return;
						}
					})
					.receive("error", (g) => {
						(this.state = ut.errored),
							s?.(
								ir.CHANNEL_ERROR,
								new Error(
									JSON.stringify(Object.values(g).join(", ") || "error"),
								),
							);
					})
					.receive("timeout", () => {
						s?.(ir.TIMED_OUT);
					});
		}
		return this;
	}
	presenceState() {
		return this.presence.state;
	}
	async track(s, a = {}) {
		return await this.send(
			{ type: "presence", event: "track", payload: s },
			a.timeout || this.timeout,
		);
	}
	async untrack(s = {}) {
		return await this.send({ type: "presence", event: "untrack" }, s);
	}
	on(s, a, l) {
		return this._on(s, a, l);
	}
	async send(s, a = {}) {
		var l, c;
		if (!this._canPush() && s.type === "broadcast") {
			const { event: u, payload: h } = s,
				p = {
					method: "POST",
					headers: {
						Authorization: this.socket.accessTokenValue
							? `Bearer ${this.socket.accessTokenValue}`
							: "",
						apikey: this.socket.apiKey ? this.socket.apiKey : "",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						messages: [
							{
								topic: this.subTopic,
								event: u,
								payload: h,
								private: this.private,
							},
						],
					}),
				};
			try {
				const y = await this._fetchWithTimeout(
					this.broadcastEndpointURL,
					p,
					(l = a.timeout) !== null && l !== void 0 ? l : this.timeout,
				);
				return (
					await ((c = y.body) === null || c === void 0 ? void 0 : c.cancel()),
					y.ok ? "ok" : "error"
				);
			} catch (y) {
				return y.name === "AbortError" ? "timed out" : "error";
			}
		} else
			return new Promise((u) => {
				var h, f, p;
				const y = this._push(s.type, s, a.timeout || this.timeout);
				s.type === "broadcast" &&
					!(
						!(
							(p =
								(f =
									(h = this.params) === null || h === void 0
										? void 0
										: h.config) === null || f === void 0
									? void 0
									: f.broadcast) === null || p === void 0
						) && p.ack
					) &&
					u("ok"),
					y.receive("ok", () => u("ok")),
					y.receive("error", () => u("error")),
					y.receive("timeout", () => u("timed out"));
			});
	}
	updateJoinPayload(s) {
		this.joinPush.updatePayload(s);
	}
	unsubscribe(s = this.timeout) {
		this.state = ut.leaving;
		const a = () => {
			this.socket.log("channel", `leave ${this.topic}`),
				this._trigger(Ut.close, "leave", this._joinRef());
		};
		return (
			this.joinPush.destroy(),
			new Promise((l) => {
				const c = new Eo(this, Ut.leave, {}, s);
				c
					.receive("ok", () => {
						a(), l("ok");
					})
					.receive("timeout", () => {
						a(), l("timed out");
					})
					.receive("error", () => {
						l("error");
					}),
					c.send(),
					this._canPush() || c.trigger("ok", {});
			})
		);
	}
	teardown() {
		this.pushBuffer.forEach((s) => s.destroy()),
			this.rejoinTimer && clearTimeout(this.rejoinTimer.timer),
			this.joinPush.destroy();
	}
	async _fetchWithTimeout(s, a, l) {
		const c = new AbortController(),
			u = setTimeout(() => c.abort(), l),
			h = await this.socket.fetch(
				s,
				Object.assign(Object.assign({}, a), { signal: c.signal }),
			);
		return clearTimeout(u), h;
	}
	_push(s, a, l = this.timeout) {
		if (!this.joinedOnce)
			throw `tried to push '${s}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
		let c = new Eo(this, s, a, l);
		return (
			this._canPush() ? c.send() : (c.startTimeout(), this.pushBuffer.push(c)),
			c
		);
	}
	_onMessage(s, a, l) {
		return a;
	}
	_isMember(s) {
		return this.topic === s;
	}
	_joinRef() {
		return this.joinPush.ref;
	}
	_trigger(s, a, l) {
		var c, u;
		const h = s.toLocaleLowerCase(),
			{ close: f, error: p, leave: y, join: g } = Ut;
		if (l && [f, p, y, g].indexOf(h) >= 0 && l !== this._joinRef()) return;
		let w = this._onMessage(h, a, l);
		if (a && !w)
			throw "channel onMessage callbacks must return the payload, modified or unmodified";
		["insert", "update", "delete"].includes(h)
			? (c = this.bindings.postgres_changes) === null ||
			  c === void 0 ||
			  c
					.filter((T) => {
						var D, U, A;
						return (
							((D = T.filter) === null || D === void 0 ? void 0 : D.event) ===
								"*" ||
							((A =
								(U = T.filter) === null || U === void 0 ? void 0 : U.event) ===
								null || A === void 0
								? void 0
								: A.toLocaleLowerCase()) === h
						);
					})
					.map((T) => T.callback(w, l))
			: (u = this.bindings[h]) === null ||
			  u === void 0 ||
			  u
					.filter((T) => {
						var D, U, A, z, ee, N;
						if (["broadcast", "presence", "postgres_changes"].includes(h))
							if ("id" in T) {
								const G = T.id,
									X =
										(D = T.filter) === null || D === void 0 ? void 0 : D.event;
								return (
									G &&
									((U = a.ids) === null || U === void 0
										? void 0
										: U.includes(G)) &&
									(X === "*" ||
										X?.toLocaleLowerCase() ===
											((A = a.data) === null || A === void 0
												? void 0
												: A.type.toLocaleLowerCase()))
								);
							} else {
								const G =
									(ee =
										(z = T?.filter) === null || z === void 0
											? void 0
											: z.event) === null || ee === void 0
										? void 0
										: ee.toLocaleLowerCase();
								return (
									G === "*" ||
									G ===
										((N = a?.event) === null || N === void 0
											? void 0
											: N.toLocaleLowerCase())
								);
							}
						else return T.type.toLocaleLowerCase() === h;
					})
					.map((T) => {
						if (typeof w == "object" && "ids" in w) {
							const D = w.data,
								{
									schema: U,
									table: A,
									commit_timestamp: z,
									type: ee,
									errors: N,
								} = D;
							w = Object.assign(
								Object.assign(
									{},
									{
										schema: U,
										table: A,
										commit_timestamp: z,
										eventType: ee,
										new: {},
										old: {},
										errors: N,
									},
								),
								this._getPayloadRecords(D),
							);
						}
						T.callback(w, l);
					});
	}
	_isClosed() {
		return this.state === ut.closed;
	}
	_isJoined() {
		return this.state === ut.joined;
	}
	_isJoining() {
		return this.state === ut.joining;
	}
	_isLeaving() {
		return this.state === ut.leaving;
	}
	_replyEventName(s) {
		return `chan_reply_${s}`;
	}
	_on(s, a, l) {
		const c = s.toLocaleLowerCase(),
			u = { type: c, filter: a, callback: l };
		return (
			this.bindings[c] ? this.bindings[c].push(u) : (this.bindings[c] = [u]),
			this
		);
	}
	_off(s, a) {
		const l = s.toLocaleLowerCase();
		return (
			(this.bindings[l] = this.bindings[l].filter((c) => {
				var u;
				return !(
					((u = c.type) === null || u === void 0
						? void 0
						: u.toLocaleLowerCase()) === l && lc.isEqual(c.filter, a)
				);
			})),
			this
		);
	}
	static isEqual(s, a) {
		if (Object.keys(s).length !== Object.keys(a).length) return !1;
		for (const l in s) if (s[l] !== a[l]) return !1;
		return !0;
	}
	_rejoinUntilConnected() {
		this.rejoinTimer.scheduleTimeout(),
			this.socket.isConnected() && this._rejoin();
	}
	_onClose(s) {
		this._on(Ut.close, {}, s);
	}
	_onError(s) {
		this._on(Ut.error, {}, (a) => s(a));
	}
	_canPush() {
		return this.socket.isConnected() && this._isJoined();
	}
	_rejoin(s = this.timeout) {
		this._isLeaving() ||
			(this.socket._leaveOpenTopic(this.topic),
			(this.state = ut.joining),
			this.joinPush.resend(s));
	}
	_getPayloadRecords(s) {
		const a = { new: {}, old: {} };
		return (
			(s.type === "INSERT" || s.type === "UPDATE") &&
				(a.new = Rh(s.columns, s.record)),
			(s.type === "UPDATE" || s.type === "DELETE") &&
				(a.old = Rh(s.columns, s.old_record)),
			a
		);
	}
}
const zh = () => {},
	Jg = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Qg {
	constructor(s, a) {
		var l;
		(this.accessTokenValue = null),
			(this.apiKey = null),
			(this.channels = new Array()),
			(this.endPoint = ""),
			(this.httpEndpoint = ""),
			(this.headers = Fg),
			(this.params = {}),
			(this.timeout = wm),
			(this.heartbeatIntervalMs = 25e3),
			(this.heartbeatTimer = void 0),
			(this.pendingHeartbeatRef = null),
			(this.heartbeatCallback = zh),
			(this.ref = 0),
			(this.logger = zh),
			(this.conn = null),
			(this.sendBuffer = []),
			(this.serializer = new Vg()),
			(this.stateChangeCallbacks = {
				open: [],
				close: [],
				error: [],
				message: [],
			}),
			(this.accessToken = null),
			(this._resolveFetch = (u) => {
				let h;
				return (
					u
						? (h = u)
						: typeof fetch > "u"
						? (h = (...f) =>
								Xn(async () => {
									const { default: p } = await Promise.resolve().then(() => Js);
									return { default: p };
								}, void 0).then(({ default: p }) => p(...f)))
						: (h = fetch),
					(...f) => h(...f)
				);
			}),
			(this.endPoint = `${s}/${Ho.websocket}`),
			(this.httpEndpoint = Sm(s)),
			a?.transport ? (this.transport = a.transport) : (this.transport = null),
			a?.params && (this.params = a.params),
			a?.headers &&
				(this.headers = Object.assign(
					Object.assign({}, this.headers),
					a.headers,
				)),
			a?.timeout && (this.timeout = a.timeout),
			a?.logger && (this.logger = a.logger),
			(a?.logLevel || a?.log_level) &&
				((this.logLevel = a.logLevel || a.log_level),
				(this.params = Object.assign(Object.assign({}, this.params), {
					log_level: this.logLevel,
				}))),
			a?.heartbeatIntervalMs &&
				(this.heartbeatIntervalMs = a.heartbeatIntervalMs);
		const c = (l = a?.params) === null || l === void 0 ? void 0 : l.apikey;
		if (
			(c && ((this.accessTokenValue = c), (this.apiKey = c)),
			(this.reconnectAfterMs = a?.reconnectAfterMs
				? a.reconnectAfterMs
				: (u) => [1e3, 2e3, 5e3, 1e4][u - 1] || 1e4),
			(this.encode = a?.encode ? a.encode : (u, h) => h(JSON.stringify(u))),
			(this.decode = a?.decode
				? a.decode
				: this.serializer.decode.bind(this.serializer)),
			(this.reconnectTimer = new Nm(async () => {
				this.disconnect(), this.connect();
			}, this.reconnectAfterMs)),
			(this.fetch = this._resolveFetch(a?.fetch)),
			a?.worker)
		) {
			if (typeof window < "u" && !window.Worker)
				throw new Error("Web Worker is not supported");
			(this.worker = a?.worker || !1), (this.workerUrl = a?.workerUrl);
		}
		this.accessToken = a?.accessToken || null;
	}
	connect() {
		if (!this.conn) {
			if ((this.transport || (this.transport = qo), this.transport)) {
				typeof window < "u" && this.transport === window.WebSocket
					? (this.conn = new this.transport(this.endpointURL()))
					: (this.conn = new this.transport(this.endpointURL(), void 0, {
							headers: this.headers,
					  })),
					this.setupConnection();
				return;
			}
			this.conn = new Xg(this.endpointURL(), void 0, {
				close: () => {
					this.conn = null;
				},
			});
		}
	}
	endpointURL() {
		return this._appendParams(
			this.endPoint,
			Object.assign({}, this.params, { vsn: Bg }),
		);
	}
	disconnect(s, a) {
		this.conn &&
			((this.conn.onclose = function () {}),
			s ? this.conn.close(s, a ?? "") : this.conn.close(),
			(this.conn = null),
			this.heartbeatTimer && clearInterval(this.heartbeatTimer),
			this.reconnectTimer.reset(),
			this.channels.forEach((l) => l.teardown()));
	}
	getChannels() {
		return this.channels;
	}
	async removeChannel(s) {
		const a = await s.unsubscribe();
		return (
			(this.channels = this.channels.filter((l) => l._joinRef !== s._joinRef)),
			this.channels.length === 0 && this.disconnect(),
			a
		);
	}
	async removeAllChannels() {
		const s = await Promise.all(this.channels.map((a) => a.unsubscribe()));
		return (this.channels = []), this.disconnect(), s;
	}
	log(s, a, l) {
		this.logger(s, a, l);
	}
	connectionState() {
		switch (this.conn && this.conn.readyState) {
			case qs.connecting:
				return Zr.Connecting;
			case qs.open:
				return Zr.Open;
			case qs.closing:
				return Zr.Closing;
			default:
				return Zr.Closed;
		}
	}
	isConnected() {
		return this.connectionState() === Zr.Open;
	}
	channel(s, a = { config: {} }) {
		const l = `realtime:${s}`,
			c = this.getChannels().find((u) => u.topic === l);
		if (c) return c;
		{
			const u = new lc(`realtime:${s}`, a, this);
			return this.channels.push(u), u;
		}
	}
	push(s) {
		const { topic: a, event: l, payload: c, ref: u } = s,
			h = () => {
				this.encode(s, (f) => {
					var p;
					(p = this.conn) === null || p === void 0 || p.send(f);
				});
			};
		this.log("push", `${a} ${l} (${u})`, c),
			this.isConnected() ? h() : this.sendBuffer.push(h);
	}
	async setAuth(s = null) {
		let a =
			s ||
			(this.accessToken && (await this.accessToken())) ||
			this.accessTokenValue;
		this.accessTokenValue != a &&
			((this.accessTokenValue = a),
			this.channels.forEach((l) => {
				a &&
					l.updateJoinPayload({
						access_token: a,
						version: this.headers && this.headers["X-Client-Info"],
					}),
					l.joinedOnce &&
						l._isJoined() &&
						l._push(Ut.access_token, { access_token: a });
			}));
	}
	async sendHeartbeat() {
		var s;
		if (!this.isConnected()) {
			this.heartbeatCallback("disconnected");
			return;
		}
		if (this.pendingHeartbeatRef) {
			(this.pendingHeartbeatRef = null),
				this.log(
					"transport",
					"heartbeat timeout. Attempting to re-establish connection",
				),
				this.heartbeatCallback("timeout"),
				(s = this.conn) === null ||
					s === void 0 ||
					s.close($g, "hearbeat timeout");
			return;
		}
		(this.pendingHeartbeatRef = this._makeRef()),
			this.push({
				topic: "phoenix",
				event: "heartbeat",
				payload: {},
				ref: this.pendingHeartbeatRef,
			}),
			this.heartbeatCallback("sent"),
			await this.setAuth();
	}
	onHeartbeat(s) {
		this.heartbeatCallback = s;
	}
	flushSendBuffer() {
		this.isConnected() &&
			this.sendBuffer.length > 0 &&
			(this.sendBuffer.forEach((s) => s()), (this.sendBuffer = []));
	}
	_makeRef() {
		let s = this.ref + 1;
		return (
			s === this.ref ? (this.ref = 0) : (this.ref = s), this.ref.toString()
		);
	}
	_leaveOpenTopic(s) {
		let a = this.channels.find(
			(l) => l.topic === s && (l._isJoined() || l._isJoining()),
		);
		a &&
			(this.log("transport", `leaving duplicate topic "${s}"`),
			a.unsubscribe());
	}
	_remove(s) {
		this.channels = this.channels.filter((a) => a.topic !== s.topic);
	}
	setupConnection() {
		this.conn &&
			((this.conn.binaryType = "arraybuffer"),
			(this.conn.onopen = () => this._onConnOpen()),
			(this.conn.onerror = (s) => this._onConnError(s)),
			(this.conn.onmessage = (s) => this._onConnMessage(s)),
			(this.conn.onclose = (s) => this._onConnClose(s)));
	}
	_onConnMessage(s) {
		this.decode(s.data, (a) => {
			let { topic: l, event: c, payload: u, ref: h } = a;
			l === "phoenix" &&
				c === "phx_reply" &&
				this.heartbeatCallback(a.payload.status == "ok" ? "ok" : "error"),
				h &&
					h === this.pendingHeartbeatRef &&
					(this.pendingHeartbeatRef = null),
				this.log(
					"receive",
					`${u.status || ""} ${l} ${c} ${(h && "(" + h + ")") || ""}`,
					u,
				),
				Array.from(this.channels)
					.filter((f) => f._isMember(l))
					.forEach((f) => f._trigger(c, u, h)),
				this.stateChangeCallbacks.message.forEach((f) => f(a));
		});
	}
	_onConnOpen() {
		if (
			(this.log("transport", `connected to ${this.endpointURL()}`),
			this.flushSendBuffer(),
			this.reconnectTimer.reset(),
			!this.worker)
		)
			this.heartbeatTimer && clearInterval(this.heartbeatTimer),
				(this.heartbeatTimer = setInterval(
					() => this.sendHeartbeat(),
					this.heartbeatIntervalMs,
				));
		else {
			this.workerUrl
				? this.log("worker", `starting worker for from ${this.workerUrl}`)
				: this.log("worker", "starting default worker");
			const s = this._workerObjectUrl(this.workerUrl);
			(this.workerRef = new Worker(s)),
				(this.workerRef.onerror = (a) => {
					this.log("worker", "worker error", a.message),
						this.workerRef.terminate();
				}),
				(this.workerRef.onmessage = (a) => {
					a.data.event === "keepAlive" && this.sendHeartbeat();
				}),
				this.workerRef.postMessage({
					event: "start",
					interval: this.heartbeatIntervalMs,
				});
		}
		this.stateChangeCallbacks.open.forEach((s) => s());
	}
	_onConnClose(s) {
		this.log("transport", "close", s),
			this._triggerChanError(),
			this.heartbeatTimer && clearInterval(this.heartbeatTimer),
			this.reconnectTimer.scheduleTimeout(),
			this.stateChangeCallbacks.close.forEach((a) => a(s));
	}
	_onConnError(s) {
		this.log("transport", s.message),
			this._triggerChanError(),
			this.stateChangeCallbacks.error.forEach((a) => a(s));
	}
	_triggerChanError() {
		this.channels.forEach((s) => s._trigger(Ut.error));
	}
	_appendParams(s, a) {
		if (Object.keys(a).length === 0) return s;
		const l = s.match(/\?/) ? "&" : "?",
			c = new URLSearchParams(a);
		return `${s}${l}${c}`;
	}
	_workerObjectUrl(s) {
		let a;
		if (s) a = s;
		else {
			const l = new Blob([Jg], { type: "application/javascript" });
			a = URL.createObjectURL(l);
		}
		return a;
	}
}
class Xg {
	constructor(s, a, l) {
		(this.binaryType = "arraybuffer"),
			(this.onclose = () => {}),
			(this.onerror = () => {}),
			(this.onmessage = () => {}),
			(this.onopen = () => {}),
			(this.readyState = qs.connecting),
			(this.send = () => {}),
			(this.url = null),
			(this.url = s),
			(this.close = l.close);
	}
}
class oc extends Error {
	constructor(s) {
		super(s), (this.__isStorageError = !0), (this.name = "StorageError");
	}
}
function Ze(i) {
	return typeof i == "object" && i !== null && "__isStorageError" in i;
}
class Zg extends oc {
	constructor(s, a) {
		super(s), (this.name = "StorageApiError"), (this.status = a);
	}
	toJSON() {
		return { name: this.name, message: this.message, status: this.status };
	}
}
class Ko extends oc {
	constructor(s, a) {
		super(s), (this.name = "StorageUnknownError"), (this.originalError = a);
	}
}
var e0 = function (i, s, a, l) {
	function c(u) {
		return u instanceof a
			? u
			: new a(function (h) {
					h(u);
			  });
	}
	return new (a || (a = Promise))(function (u, h) {
		function f(g) {
			try {
				y(l.next(g));
			} catch (v) {
				h(v);
			}
		}
		function p(g) {
			try {
				y(l.throw(g));
			} catch (v) {
				h(v);
			}
		}
		function y(g) {
			g.done ? u(g.value) : c(g.value).then(f, p);
		}
		y((l = l.apply(i, s || [])).next());
	});
};
const Em = (i) => {
		let s;
		return (
			i
				? (s = i)
				: typeof fetch > "u"
				? (s = (...a) =>
						Xn(async () => {
							const { default: l } = await Promise.resolve().then(() => Js);
							return { default: l };
						}, void 0).then(({ default: l }) => l(...a)))
				: (s = fetch),
			(...a) => s(...a)
		);
	},
	t0 = () =>
		e0(void 0, void 0, void 0, function* () {
			return typeof Response > "u"
				? (yield Xn(() => Promise.resolve().then(() => Js), void 0)).Response
				: Response;
		}),
	Yo = (i) => {
		if (Array.isArray(i)) return i.map((a) => Yo(a));
		if (typeof i == "function" || i !== Object(i)) return i;
		const s = {};
		return (
			Object.entries(i).forEach(([a, l]) => {
				const c = a.replace(/([-_][a-z])/gi, (u) =>
					u.toUpperCase().replace(/[-_]/g, ""),
				);
				s[c] = Yo(l);
			}),
			s
		);
	};
var ns = function (i, s, a, l) {
	function c(u) {
		return u instanceof a
			? u
			: new a(function (h) {
					h(u);
			  });
	}
	return new (a || (a = Promise))(function (u, h) {
		function f(g) {
			try {
				y(l.next(g));
			} catch (v) {
				h(v);
			}
		}
		function p(g) {
			try {
				y(l.throw(g));
			} catch (v) {
				h(v);
			}
		}
		function y(g) {
			g.done ? u(g.value) : c(g.value).then(f, p);
		}
		y((l = l.apply(i, s || [])).next());
	});
};
const _o = (i) =>
		i.msg || i.message || i.error_description || i.error || JSON.stringify(i),
	r0 = (i, s, a) =>
		ns(void 0, void 0, void 0, function* () {
			const l = yield t0();
			i instanceof l && !a?.noResolveJson
				? i
						.json()
						.then((c) => {
							s(new Zg(_o(c), i.status || 500));
						})
						.catch((c) => {
							s(new Ko(_o(c), c));
						})
				: s(new Ko(_o(i), i));
		}),
	s0 = (i, s, a, l) => {
		const c = { method: i, headers: s?.headers || {} };
		return i === "GET"
			? c
			: ((c.headers = Object.assign(
					{ "Content-Type": "application/json" },
					s?.headers,
			  )),
			  l && (c.body = JSON.stringify(l)),
			  Object.assign(Object.assign({}, c), a));
	};
function Zn(i, s, a, l, c, u) {
	return ns(this, void 0, void 0, function* () {
		return new Promise((h, f) => {
			i(a, s0(s, l, c, u))
				.then((p) => {
					if (!p.ok) throw p;
					return l?.noResolveJson ? p : p.json();
				})
				.then((p) => h(p))
				.catch((p) => r0(p, f, l));
		});
	});
}
function Ni(i, s, a, l) {
	return ns(this, void 0, void 0, function* () {
		return Zn(i, "GET", s, a, l);
	});
}
function Tr(i, s, a, l, c) {
	return ns(this, void 0, void 0, function* () {
		return Zn(i, "POST", s, l, c, a);
	});
}
function n0(i, s, a, l, c) {
	return ns(this, void 0, void 0, function* () {
		return Zn(i, "PUT", s, l, c, a);
	});
}
function a0(i, s, a, l) {
	return ns(this, void 0, void 0, function* () {
		return Zn(
			i,
			"HEAD",
			s,
			Object.assign(Object.assign({}, a), { noResolveJson: !0 }),
			l,
		);
	});
}
function _m(i, s, a, l, c) {
	return ns(this, void 0, void 0, function* () {
		return Zn(i, "DELETE", s, l, c, a);
	});
}
var gt = function (i, s, a, l) {
	function c(u) {
		return u instanceof a
			? u
			: new a(function (h) {
					h(u);
			  });
	}
	return new (a || (a = Promise))(function (u, h) {
		function f(g) {
			try {
				y(l.next(g));
			} catch (v) {
				h(v);
			}
		}
		function p(g) {
			try {
				y(l.throw(g));
			} catch (v) {
				h(v);
			}
		}
		function y(g) {
			g.done ? u(g.value) : c(g.value).then(f, p);
		}
		y((l = l.apply(i, s || [])).next());
	});
};
const i0 = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
	Mh = {
		cacheControl: "3600",
		contentType: "text/plain;charset=UTF-8",
		upsert: !1,
	};
class l0 {
	constructor(s, a = {}, l, c) {
		(this.url = s),
			(this.headers = a),
			(this.bucketId = l),
			(this.fetch = Em(c));
	}
	uploadOrUpdate(s, a, l, c) {
		return gt(this, void 0, void 0, function* () {
			try {
				let u;
				const h = Object.assign(Object.assign({}, Mh), c);
				let f = Object.assign(
					Object.assign({}, this.headers),
					s === "POST" && { "x-upsert": String(h.upsert) },
				);
				const p = h.metadata;
				typeof Blob < "u" && l instanceof Blob
					? ((u = new FormData()),
					  u.append("cacheControl", h.cacheControl),
					  p && u.append("metadata", this.encodeMetadata(p)),
					  u.append("", l))
					: typeof FormData < "u" && l instanceof FormData
					? ((u = l),
					  u.append("cacheControl", h.cacheControl),
					  p && u.append("metadata", this.encodeMetadata(p)))
					: ((u = l),
					  (f["cache-control"] = `max-age=${h.cacheControl}`),
					  (f["content-type"] = h.contentType),
					  p && (f["x-metadata"] = this.toBase64(this.encodeMetadata(p)))),
					c?.headers && (f = Object.assign(Object.assign({}, f), c.headers));
				const y = this._removeEmptyFolders(a),
					g = this._getFinalPath(y),
					v = yield this.fetch(
						`${this.url}/object/${g}`,
						Object.assign(
							{ method: s, body: u, headers: f },
							h?.duplex ? { duplex: h.duplex } : {},
						),
					),
					w = yield v.json();
				return v.ok
					? { data: { path: y, id: w.Id, fullPath: w.Key }, error: null }
					: { data: null, error: w };
			} catch (u) {
				if (Ze(u)) return { data: null, error: u };
				throw u;
			}
		});
	}
	upload(s, a, l) {
		return gt(this, void 0, void 0, function* () {
			return this.uploadOrUpdate("POST", s, a, l);
		});
	}
	uploadToSignedUrl(s, a, l, c) {
		return gt(this, void 0, void 0, function* () {
			const u = this._removeEmptyFolders(s),
				h = this._getFinalPath(u),
				f = new URL(this.url + `/object/upload/sign/${h}`);
			f.searchParams.set("token", a);
			try {
				let p;
				const y = Object.assign({ upsert: Mh.upsert }, c),
					g = Object.assign(Object.assign({}, this.headers), {
						"x-upsert": String(y.upsert),
					});
				typeof Blob < "u" && l instanceof Blob
					? ((p = new FormData()),
					  p.append("cacheControl", y.cacheControl),
					  p.append("", l))
					: typeof FormData < "u" && l instanceof FormData
					? ((p = l), p.append("cacheControl", y.cacheControl))
					: ((p = l),
					  (g["cache-control"] = `max-age=${y.cacheControl}`),
					  (g["content-type"] = y.contentType));
				const v = yield this.fetch(f.toString(), {
						method: "PUT",
						body: p,
						headers: g,
					}),
					w = yield v.json();
				return v.ok
					? { data: { path: u, fullPath: w.Key }, error: null }
					: { data: null, error: w };
			} catch (p) {
				if (Ze(p)) return { data: null, error: p };
				throw p;
			}
		});
	}
	createSignedUploadUrl(s, a) {
		return gt(this, void 0, void 0, function* () {
			try {
				let l = this._getFinalPath(s);
				const c = Object.assign({}, this.headers);
				a?.upsert && (c["x-upsert"] = "true");
				const u = yield Tr(
						this.fetch,
						`${this.url}/object/upload/sign/${l}`,
						{},
						{ headers: c },
					),
					h = new URL(this.url + u.url),
					f = h.searchParams.get("token");
				if (!f) throw new oc("No token returned by API");
				return {
					data: { signedUrl: h.toString(), path: s, token: f },
					error: null,
				};
			} catch (l) {
				if (Ze(l)) return { data: null, error: l };
				throw l;
			}
		});
	}
	update(s, a, l) {
		return gt(this, void 0, void 0, function* () {
			return this.uploadOrUpdate("PUT", s, a, l);
		});
	}
	move(s, a, l) {
		return gt(this, void 0, void 0, function* () {
			try {
				return {
					data: yield Tr(
						this.fetch,
						`${this.url}/object/move`,
						{
							bucketId: this.bucketId,
							sourceKey: s,
							destinationKey: a,
							destinationBucket: l?.destinationBucket,
						},
						{ headers: this.headers },
					),
					error: null,
				};
			} catch (c) {
				if (Ze(c)) return { data: null, error: c };
				throw c;
			}
		});
	}
	copy(s, a, l) {
		return gt(this, void 0, void 0, function* () {
			try {
				return {
					data: {
						path: (yield Tr(
							this.fetch,
							`${this.url}/object/copy`,
							{
								bucketId: this.bucketId,
								sourceKey: s,
								destinationKey: a,
								destinationBucket: l?.destinationBucket,
							},
							{ headers: this.headers },
						)).Key,
					},
					error: null,
				};
			} catch (c) {
				if (Ze(c)) return { data: null, error: c };
				throw c;
			}
		});
	}
	createSignedUrl(s, a, l) {
		return gt(this, void 0, void 0, function* () {
			try {
				let c = this._getFinalPath(s),
					u = yield Tr(
						this.fetch,
						`${this.url}/object/sign/${c}`,
						Object.assign(
							{ expiresIn: a },
							l?.transform ? { transform: l.transform } : {},
						),
						{ headers: this.headers },
					);
				const h = l?.download
					? `&download=${l.download === !0 ? "" : l.download}`
					: "";
				return (
					(u = { signedUrl: encodeURI(`${this.url}${u.signedURL}${h}`) }),
					{ data: u, error: null }
				);
			} catch (c) {
				if (Ze(c)) return { data: null, error: c };
				throw c;
			}
		});
	}
	createSignedUrls(s, a, l) {
		return gt(this, void 0, void 0, function* () {
			try {
				const c = yield Tr(
						this.fetch,
						`${this.url}/object/sign/${this.bucketId}`,
						{ expiresIn: a, paths: s },
						{ headers: this.headers },
					),
					u = l?.download
						? `&download=${l.download === !0 ? "" : l.download}`
						: "";
				return {
					data: c.map((h) =>
						Object.assign(Object.assign({}, h), {
							signedUrl: h.signedURL
								? encodeURI(`${this.url}${h.signedURL}${u}`)
								: null,
						}),
					),
					error: null,
				};
			} catch (c) {
				if (Ze(c)) return { data: null, error: c };
				throw c;
			}
		});
	}
	download(s, a) {
		return gt(this, void 0, void 0, function* () {
			const c =
					typeof a?.transform < "u" ? "render/image/authenticated" : "object",
				u = this.transformOptsToQueryString(a?.transform || {}),
				h = u ? `?${u}` : "";
			try {
				const f = this._getFinalPath(s);
				return {
					data: yield (yield Ni(this.fetch, `${this.url}/${c}/${f}${h}`, {
						headers: this.headers,
						noResolveJson: !0,
					})).blob(),
					error: null,
				};
			} catch (f) {
				if (Ze(f)) return { data: null, error: f };
				throw f;
			}
		});
	}
	info(s) {
		return gt(this, void 0, void 0, function* () {
			const a = this._getFinalPath(s);
			try {
				const l = yield Ni(this.fetch, `${this.url}/object/info/${a}`, {
					headers: this.headers,
				});
				return { data: Yo(l), error: null };
			} catch (l) {
				if (Ze(l)) return { data: null, error: l };
				throw l;
			}
		});
	}
	exists(s) {
		return gt(this, void 0, void 0, function* () {
			const a = this._getFinalPath(s);
			try {
				return (
					yield a0(this.fetch, `${this.url}/object/${a}`, {
						headers: this.headers,
					}),
					{ data: !0, error: null }
				);
			} catch (l) {
				if (Ze(l) && l instanceof Ko) {
					const c = l.originalError;
					if ([400, 404].includes(c?.status)) return { data: !1, error: l };
				}
				throw l;
			}
		});
	}
	getPublicUrl(s, a) {
		const l = this._getFinalPath(s),
			c = [],
			u = a?.download ? `download=${a.download === !0 ? "" : a.download}` : "";
		u !== "" && c.push(u);
		const f = typeof a?.transform < "u" ? "render/image" : "object",
			p = this.transformOptsToQueryString(a?.transform || {});
		p !== "" && c.push(p);
		let y = c.join("&");
		return (
			y !== "" && (y = `?${y}`),
			{ data: { publicUrl: encodeURI(`${this.url}/${f}/public/${l}${y}`) } }
		);
	}
	remove(s) {
		return gt(this, void 0, void 0, function* () {
			try {
				return {
					data: yield _m(
						this.fetch,
						`${this.url}/object/${this.bucketId}`,
						{ prefixes: s },
						{ headers: this.headers },
					),
					error: null,
				};
			} catch (a) {
				if (Ze(a)) return { data: null, error: a };
				throw a;
			}
		});
	}
	list(s, a, l) {
		return gt(this, void 0, void 0, function* () {
			try {
				const c = Object.assign(Object.assign(Object.assign({}, i0), a), {
					prefix: s || "",
				});
				return {
					data: yield Tr(
						this.fetch,
						`${this.url}/object/list/${this.bucketId}`,
						c,
						{ headers: this.headers },
						l,
					),
					error: null,
				};
			} catch (c) {
				if (Ze(c)) return { data: null, error: c };
				throw c;
			}
		});
	}
	encodeMetadata(s) {
		return JSON.stringify(s);
	}
	toBase64(s) {
		return typeof Buffer < "u" ? Buffer.from(s).toString("base64") : btoa(s);
	}
	_getFinalPath(s) {
		return `${this.bucketId}/${s}`;
	}
	_removeEmptyFolders(s) {
		return s.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
	}
	transformOptsToQueryString(s) {
		const a = [];
		return (
			s.width && a.push(`width=${s.width}`),
			s.height && a.push(`height=${s.height}`),
			s.resize && a.push(`resize=${s.resize}`),
			s.format && a.push(`format=${s.format}`),
			s.quality && a.push(`quality=${s.quality}`),
			a.join("&")
		);
	}
}
const o0 = "2.7.1",
	c0 = { "X-Client-Info": `storage-js/${o0}` };
var Ms = function (i, s, a, l) {
	function c(u) {
		return u instanceof a
			? u
			: new a(function (h) {
					h(u);
			  });
	}
	return new (a || (a = Promise))(function (u, h) {
		function f(g) {
			try {
				y(l.next(g));
			} catch (v) {
				h(v);
			}
		}
		function p(g) {
			try {
				y(l.throw(g));
			} catch (v) {
				h(v);
			}
		}
		function y(g) {
			g.done ? u(g.value) : c(g.value).then(f, p);
		}
		y((l = l.apply(i, s || [])).next());
	});
};
class u0 {
	constructor(s, a = {}, l) {
		(this.url = s),
			(this.headers = Object.assign(Object.assign({}, c0), a)),
			(this.fetch = Em(l));
	}
	listBuckets() {
		return Ms(this, void 0, void 0, function* () {
			try {
				return {
					data: yield Ni(this.fetch, `${this.url}/bucket`, {
						headers: this.headers,
					}),
					error: null,
				};
			} catch (s) {
				if (Ze(s)) return { data: null, error: s };
				throw s;
			}
		});
	}
	getBucket(s) {
		return Ms(this, void 0, void 0, function* () {
			try {
				return {
					data: yield Ni(this.fetch, `${this.url}/bucket/${s}`, {
						headers: this.headers,
					}),
					error: null,
				};
			} catch (a) {
				if (Ze(a)) return { data: null, error: a };
				throw a;
			}
		});
	}
	createBucket(s, a = { public: !1 }) {
		return Ms(this, void 0, void 0, function* () {
			try {
				return {
					data: yield Tr(
						this.fetch,
						`${this.url}/bucket`,
						{
							id: s,
							name: s,
							public: a.public,
							file_size_limit: a.fileSizeLimit,
							allowed_mime_types: a.allowedMimeTypes,
						},
						{ headers: this.headers },
					),
					error: null,
				};
			} catch (l) {
				if (Ze(l)) return { data: null, error: l };
				throw l;
			}
		});
	}
	updateBucket(s, a) {
		return Ms(this, void 0, void 0, function* () {
			try {
				return {
					data: yield n0(
						this.fetch,
						`${this.url}/bucket/${s}`,
						{
							id: s,
							name: s,
							public: a.public,
							file_size_limit: a.fileSizeLimit,
							allowed_mime_types: a.allowedMimeTypes,
						},
						{ headers: this.headers },
					),
					error: null,
				};
			} catch (l) {
				if (Ze(l)) return { data: null, error: l };
				throw l;
			}
		});
	}
	emptyBucket(s) {
		return Ms(this, void 0, void 0, function* () {
			try {
				return {
					data: yield Tr(
						this.fetch,
						`${this.url}/bucket/${s}/empty`,
						{},
						{ headers: this.headers },
					),
					error: null,
				};
			} catch (a) {
				if (Ze(a)) return { data: null, error: a };
				throw a;
			}
		});
	}
	deleteBucket(s) {
		return Ms(this, void 0, void 0, function* () {
			try {
				return {
					data: yield _m(
						this.fetch,
						`${this.url}/bucket/${s}`,
						{},
						{ headers: this.headers },
					),
					error: null,
				};
			} catch (a) {
				if (Ze(a)) return { data: null, error: a };
				throw a;
			}
		});
	}
}
class d0 extends u0 {
	constructor(s, a = {}, l) {
		super(s, a, l);
	}
	from(s) {
		return new l0(this.url, this.headers, s, this.fetch);
	}
}
const h0 = "2.50.0";
let Bn = "";
typeof Deno < "u"
	? (Bn = "deno")
	: typeof document < "u"
	? (Bn = "web")
	: typeof navigator < "u" && navigator.product === "ReactNative"
	? (Bn = "react-native")
	: (Bn = "node");
const m0 = { "X-Client-Info": `supabase-js-${Bn}/${h0}` },
	f0 = { headers: m0 },
	p0 = { schema: "public" },
	x0 = {
		autoRefreshToken: !0,
		persistSession: !0,
		detectSessionInUrl: !0,
		flowType: "implicit",
	},
	g0 = {};
var y0 = function (i, s, a, l) {
	function c(u) {
		return u instanceof a
			? u
			: new a(function (h) {
					h(u);
			  });
	}
	return new (a || (a = Promise))(function (u, h) {
		function f(g) {
			try {
				y(l.next(g));
			} catch (v) {
				h(v);
			}
		}
		function p(g) {
			try {
				y(l.throw(g));
			} catch (v) {
				h(v);
			}
		}
		function y(g) {
			g.done ? u(g.value) : c(g.value).then(f, p);
		}
		y((l = l.apply(i, s || [])).next());
	});
};
const v0 = (i) => {
		let s;
		return (
			i ? (s = i) : typeof fetch > "u" ? (s = xm) : (s = fetch),
			(...a) => s(...a)
		);
	},
	b0 = () => (typeof Headers > "u" ? gm : Headers),
	j0 = (i, s, a) => {
		const l = v0(a),
			c = b0();
		return (u, h) =>
			y0(void 0, void 0, void 0, function* () {
				var f;
				const p = (f = yield s()) !== null && f !== void 0 ? f : i;
				let y = new c(h?.headers);
				return (
					y.has("apikey") || y.set("apikey", i),
					y.has("Authorization") || y.set("Authorization", `Bearer ${p}`),
					l(u, Object.assign(Object.assign({}, h), { headers: y }))
				);
			});
	};
var w0 = function (i, s, a, l) {
	function c(u) {
		return u instanceof a
			? u
			: new a(function (h) {
					h(u);
			  });
	}
	return new (a || (a = Promise))(function (u, h) {
		function f(g) {
			try {
				y(l.next(g));
			} catch (v) {
				h(v);
			}
		}
		function p(g) {
			try {
				y(l.throw(g));
			} catch (v) {
				h(v);
			}
		}
		function y(g) {
			g.done ? u(g.value) : c(g.value).then(f, p);
		}
		y((l = l.apply(i, s || [])).next());
	});
};
function N0(i) {
	return i.endsWith("/") ? i : i + "/";
}
function k0(i, s) {
	var a, l;
	const { db: c, auth: u, realtime: h, global: f } = i,
		{ db: p, auth: y, realtime: g, global: v } = s,
		w = {
			db: Object.assign(Object.assign({}, p), c),
			auth: Object.assign(Object.assign({}, y), u),
			realtime: Object.assign(Object.assign({}, g), h),
			global: Object.assign(Object.assign(Object.assign({}, v), f), {
				headers: Object.assign(
					Object.assign({}, (a = v?.headers) !== null && a !== void 0 ? a : {}),
					(l = f?.headers) !== null && l !== void 0 ? l : {},
				),
			}),
			accessToken: () =>
				w0(this, void 0, void 0, function* () {
					return "";
				}),
		};
	return (
		i.accessToken ? (w.accessToken = i.accessToken) : delete w.accessToken, w
	);
}
const Cm = "2.70.0",
	Bs = 30 * 1e3,
	Jo = 3,
	Co = Jo * Bs,
	S0 = "http://localhost:9999",
	E0 = "supabase.auth.token",
	_0 = { "X-Client-Info": `gotrue-js/${Cm}` },
	Qo = "X-Supabase-Api-Version",
	Pm = {
		"2024-01-01": {
			timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
			name: "2024-01-01",
		},
	},
	C0 = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
	P0 = 6e5;
class cc extends Error {
	constructor(s, a, l) {
		super(s),
			(this.__isAuthError = !0),
			(this.name = "AuthError"),
			(this.status = a),
			(this.code = l);
	}
}
function Ne(i) {
	return typeof i == "object" && i !== null && "__isAuthError" in i;
}
class T0 extends cc {
	constructor(s, a, l) {
		super(s, a, l),
			(this.name = "AuthApiError"),
			(this.status = a),
			(this.code = l);
	}
}
function A0(i) {
	return Ne(i) && i.name === "AuthApiError";
}
class Tm extends cc {
	constructor(s, a) {
		super(s), (this.name = "AuthUnknownError"), (this.originalError = a);
	}
}
class Mr extends cc {
	constructor(s, a, l, c) {
		super(s, l, c), (this.name = a), (this.status = l);
	}
}
class Pr extends Mr {
	constructor() {
		super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
	}
}
function R0(i) {
	return Ne(i) && i.name === "AuthSessionMissingError";
}
class di extends Mr {
	constructor() {
		super(
			"Auth session or user missing",
			"AuthInvalidTokenResponseError",
			500,
			void 0,
		);
	}
}
class hi extends Mr {
	constructor(s) {
		super(s, "AuthInvalidCredentialsError", 400, void 0);
	}
}
class mi extends Mr {
	constructor(s, a = null) {
		super(s, "AuthImplicitGrantRedirectError", 500, void 0),
			(this.details = null),
			(this.details = a);
	}
	toJSON() {
		return {
			name: this.name,
			message: this.message,
			status: this.status,
			details: this.details,
		};
	}
}
function L0(i) {
	return Ne(i) && i.name === "AuthImplicitGrantRedirectError";
}
class Dh extends Mr {
	constructor(s, a = null) {
		super(s, "AuthPKCEGrantCodeExchangeError", 500, void 0),
			(this.details = null),
			(this.details = a);
	}
	toJSON() {
		return {
			name: this.name,
			message: this.message,
			status: this.status,
			details: this.details,
		};
	}
}
class Xo extends Mr {
	constructor(s, a) {
		super(s, "AuthRetryableFetchError", a, void 0);
	}
}
function Po(i) {
	return Ne(i) && i.name === "AuthRetryableFetchError";
}
class Uh extends Mr {
	constructor(s, a, l) {
		super(s, "AuthWeakPasswordError", a, "weak_password"), (this.reasons = l);
	}
}
class Vn extends Mr {
	constructor(s) {
		super(s, "AuthInvalidJwtError", 400, "invalid_jwt");
	}
}
const ki =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
			"",
		),
	Fh = ` 	
\r=`.split(""),
	O0 = (() => {
		const i = new Array(128);
		for (let s = 0; s < i.length; s += 1) i[s] = -1;
		for (let s = 0; s < Fh.length; s += 1) i[Fh[s].charCodeAt(0)] = -2;
		for (let s = 0; s < ki.length; s += 1) i[ki[s].charCodeAt(0)] = s;
		return i;
	})();
function Bh(i, s, a) {
	if (i !== null)
		for (s.queue = (s.queue << 8) | i, s.queuedBits += 8; s.queuedBits >= 6; ) {
			const l = (s.queue >> (s.queuedBits - 6)) & 63;
			a(ki[l]), (s.queuedBits -= 6);
		}
	else if (s.queuedBits > 0)
		for (
			s.queue = s.queue << (6 - s.queuedBits), s.queuedBits = 6;
			s.queuedBits >= 6;

		) {
			const l = (s.queue >> (s.queuedBits - 6)) & 63;
			a(ki[l]), (s.queuedBits -= 6);
		}
}
function Am(i, s, a) {
	const l = O0[i];
	if (l > -1)
		for (s.queue = (s.queue << 6) | l, s.queuedBits += 6; s.queuedBits >= 8; )
			a((s.queue >> (s.queuedBits - 8)) & 255), (s.queuedBits -= 8);
	else {
		if (l === -2) return;
		throw new Error(`Invalid Base64-URL character "${String.fromCharCode(i)}"`);
	}
}
function $h(i) {
	const s = [],
		a = (h) => {
			s.push(String.fromCodePoint(h));
		},
		l = { utf8seq: 0, codepoint: 0 },
		c = { queue: 0, queuedBits: 0 },
		u = (h) => {
			M0(h, l, a);
		};
	for (let h = 0; h < i.length; h += 1) Am(i.charCodeAt(h), c, u);
	return s.join("");
}
function I0(i, s) {
	if (i <= 127) {
		s(i);
		return;
	} else if (i <= 2047) {
		s(192 | (i >> 6)), s(128 | (i & 63));
		return;
	} else if (i <= 65535) {
		s(224 | (i >> 12)), s(128 | ((i >> 6) & 63)), s(128 | (i & 63));
		return;
	} else if (i <= 1114111) {
		s(240 | (i >> 18)),
			s(128 | ((i >> 12) & 63)),
			s(128 | ((i >> 6) & 63)),
			s(128 | (i & 63));
		return;
	}
	throw new Error(`Unrecognized Unicode codepoint: ${i.toString(16)}`);
}
function z0(i, s) {
	for (let a = 0; a < i.length; a += 1) {
		let l = i.charCodeAt(a);
		if (l > 55295 && l <= 56319) {
			const c = ((l - 55296) * 1024) & 65535;
			(l = (((i.charCodeAt(a + 1) - 56320) & 65535) | c) + 65536), (a += 1);
		}
		I0(l, s);
	}
}
function M0(i, s, a) {
	if (s.utf8seq === 0) {
		if (i <= 127) {
			a(i);
			return;
		}
		for (let l = 1; l < 6; l += 1)
			if (((i >> (7 - l)) & 1) === 0) {
				s.utf8seq = l;
				break;
			}
		if (s.utf8seq === 2) s.codepoint = i & 31;
		else if (s.utf8seq === 3) s.codepoint = i & 15;
		else if (s.utf8seq === 4) s.codepoint = i & 7;
		else throw new Error("Invalid UTF-8 sequence");
		s.utf8seq -= 1;
	} else if (s.utf8seq > 0) {
		if (i <= 127) throw new Error("Invalid UTF-8 sequence");
		(s.codepoint = (s.codepoint << 6) | (i & 63)),
			(s.utf8seq -= 1),
			s.utf8seq === 0 && a(s.codepoint);
	}
}
function D0(i) {
	const s = [],
		a = { queue: 0, queuedBits: 0 },
		l = (c) => {
			s.push(c);
		};
	for (let c = 0; c < i.length; c += 1) Am(i.charCodeAt(c), a, l);
	return new Uint8Array(s);
}
function U0(i) {
	const s = [];
	return z0(i, (a) => s.push(a)), new Uint8Array(s);
}
function F0(i) {
	const s = [],
		a = { queue: 0, queuedBits: 0 },
		l = (c) => {
			s.push(c);
		};
	return i.forEach((c) => Bh(c, a, l)), Bh(null, a, l), s.join("");
}
function B0(i) {
	return Math.round(Date.now() / 1e3) + i;
}
function $0() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (i) {
		const s = (Math.random() * 16) | 0;
		return (i == "x" ? s : (s & 3) | 8).toString(16);
	});
}
const Dt = () => typeof window < "u" && typeof document < "u",
	Qr = { tested: !1, writable: !1 },
	Wn = () => {
		if (!Dt()) return !1;
		try {
			if (typeof globalThis.localStorage != "object") return !1;
		} catch {
			return !1;
		}
		if (Qr.tested) return Qr.writable;
		const i = `lswt-${Math.random()}${Math.random()}`;
		try {
			globalThis.localStorage.setItem(i, i),
				globalThis.localStorage.removeItem(i),
				(Qr.tested = !0),
				(Qr.writable = !0);
		} catch {
			(Qr.tested = !0), (Qr.writable = !1);
		}
		return Qr.writable;
	};
function V0(i) {
	const s = {},
		a = new URL(i);
	if (a.hash && a.hash[0] === "#")
		try {
			new URLSearchParams(a.hash.substring(1)).forEach((c, u) => {
				s[u] = c;
			});
		} catch {}
	return (
		a.searchParams.forEach((l, c) => {
			s[c] = l;
		}),
		s
	);
}
const Rm = (i) => {
		let s;
		return (
			i
				? (s = i)
				: typeof fetch > "u"
				? (s = (...a) =>
						Xn(async () => {
							const { default: l } = await Promise.resolve().then(() => Js);
							return { default: l };
						}, void 0).then(({ default: l }) => l(...a)))
				: (s = fetch),
			(...a) => s(...a)
		);
	},
	W0 = (i) =>
		typeof i == "object" &&
		i !== null &&
		"status" in i &&
		"ok" in i &&
		"json" in i &&
		typeof i.json == "function",
	Lm = async (i, s, a) => {
		await i.setItem(s, JSON.stringify(a));
	},
	fi = async (i, s) => {
		const a = await i.getItem(s);
		if (!a) return null;
		try {
			return JSON.parse(a);
		} catch {
			return a;
		}
	},
	pi = async (i, s) => {
		await i.removeItem(s);
	};
class _i {
	constructor() {
		this.promise = new _i.promiseConstructor((s, a) => {
			(this.resolve = s), (this.reject = a);
		});
	}
}
_i.promiseConstructor = Promise;
function To(i) {
	const s = i.split(".");
	if (s.length !== 3) throw new Vn("Invalid JWT structure");
	for (let l = 0; l < s.length; l++)
		if (!C0.test(s[l])) throw new Vn("JWT not in base64url format");
	return {
		header: JSON.parse($h(s[0])),
		payload: JSON.parse($h(s[1])),
		signature: D0(s[2]),
		raw: { header: s[0], payload: s[1] },
	};
}
async function q0(i) {
	return await new Promise((s) => {
		setTimeout(() => s(null), i);
	});
}
function H0(i, s) {
	return new Promise((l, c) => {
		(async () => {
			for (let u = 0; u < 1 / 0; u++)
				try {
					const h = await i(u);
					if (!s(u, null, h)) {
						l(h);
						return;
					}
				} catch (h) {
					if (!s(u, h)) {
						c(h);
						return;
					}
				}
		})();
	});
}
function G0(i) {
	return ("0" + i.toString(16)).substr(-2);
}
function K0() {
	const s = new Uint32Array(56);
	if (typeof crypto > "u") {
		const a =
				"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
			l = a.length;
		let c = "";
		for (let u = 0; u < 56; u++) c += a.charAt(Math.floor(Math.random() * l));
		return c;
	}
	return crypto.getRandomValues(s), Array.from(s, G0).join("");
}
async function Y0(i) {
	const a = new TextEncoder().encode(i),
		l = await crypto.subtle.digest("SHA-256", a),
		c = new Uint8Array(l);
	return Array.from(c)
		.map((u) => String.fromCharCode(u))
		.join("");
}
async function J0(i) {
	if (
		!(
			typeof crypto < "u" &&
			typeof crypto.subtle < "u" &&
			typeof TextEncoder < "u"
		)
	)
		return (
			console.warn(
				"WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.",
			),
			i
		);
	const a = await Y0(i);
	return btoa(a).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Ds(i, s, a = !1) {
	const l = K0();
	let c = l;
	a && (c += "/PASSWORD_RECOVERY"), await Lm(i, `${s}-code-verifier`, c);
	const u = await J0(l);
	return [u, l === u ? "plain" : "s256"];
}
const Q0 = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function X0(i) {
	const s = i.headers.get(Qo);
	if (!s || !s.match(Q0)) return null;
	try {
		return new Date(`${s}T00:00:00.0Z`);
	} catch {
		return null;
	}
}
function Z0(i) {
	if (!i) throw new Error("Missing exp claim");
	const s = Math.floor(Date.now() / 1e3);
	if (i <= s) throw new Error("JWT has expired");
}
function ey(i) {
	switch (i) {
		case "RS256":
			return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
		case "ES256":
			return { name: "ECDSA", namedCurve: "P-256", hash: { name: "SHA-256" } };
		default:
			throw new Error("Invalid alg claim");
	}
}
const ty = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Us(i) {
	if (!ty.test(i))
		throw new Error(
			"@supabase/auth-js: Expected parameter to be UUID but is not",
		);
}
var ry = function (i, s) {
	var a = {};
	for (var l in i)
		Object.prototype.hasOwnProperty.call(i, l) &&
			s.indexOf(l) < 0 &&
			(a[l] = i[l]);
	if (i != null && typeof Object.getOwnPropertySymbols == "function")
		for (var c = 0, l = Object.getOwnPropertySymbols(i); c < l.length; c++)
			s.indexOf(l[c]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(i, l[c]) &&
				(a[l[c]] = i[l[c]]);
	return a;
};
const Xr = (i) =>
		i.msg || i.message || i.error_description || i.error || JSON.stringify(i),
	sy = [502, 503, 504];
async function Vh(i) {
	var s;
	if (!W0(i)) throw new Xo(Xr(i), 0);
	if (sy.includes(i.status)) throw new Xo(Xr(i), i.status);
	let a;
	try {
		a = await i.json();
	} catch (u) {
		throw new Tm(Xr(u), u);
	}
	let l;
	const c = X0(i);
	if (
		(c &&
		c.getTime() >= Pm["2024-01-01"].timestamp &&
		typeof a == "object" &&
		a &&
		typeof a.code == "string"
			? (l = a.code)
			: typeof a == "object" &&
			  a &&
			  typeof a.error_code == "string" &&
			  (l = a.error_code),
		l)
	) {
		if (l === "weak_password")
			throw new Uh(
				Xr(a),
				i.status,
				((s = a.weak_password) === null || s === void 0 ? void 0 : s.reasons) ||
					[],
			);
		if (l === "session_not_found") throw new Pr();
	} else if (
		typeof a == "object" &&
		a &&
		typeof a.weak_password == "object" &&
		a.weak_password &&
		Array.isArray(a.weak_password.reasons) &&
		a.weak_password.reasons.length &&
		a.weak_password.reasons.reduce((u, h) => u && typeof h == "string", !0)
	)
		throw new Uh(Xr(a), i.status, a.weak_password.reasons);
	throw new T0(Xr(a), i.status || 500, l);
}
const ny = (i, s, a, l) => {
	const c = { method: i, headers: s?.headers || {} };
	return i === "GET"
		? c
		: ((c.headers = Object.assign(
				{ "Content-Type": "application/json;charset=UTF-8" },
				s?.headers,
		  )),
		  (c.body = JSON.stringify(l)),
		  Object.assign(Object.assign({}, c), a));
};
async function Ce(i, s, a, l) {
	var c;
	const u = Object.assign({}, l?.headers);
	u[Qo] || (u[Qo] = Pm["2024-01-01"].name),
		l?.jwt && (u.Authorization = `Bearer ${l.jwt}`);
	const h = (c = l?.query) !== null && c !== void 0 ? c : {};
	l?.redirectTo && (h.redirect_to = l.redirectTo);
	const f = Object.keys(h).length
			? "?" + new URLSearchParams(h).toString()
			: "",
		p = await ay(
			i,
			s,
			a + f,
			{ headers: u, noResolveJson: l?.noResolveJson },
			{},
			l?.body,
		);
	return l?.xform ? l?.xform(p) : { data: Object.assign({}, p), error: null };
}
async function ay(i, s, a, l, c, u) {
	const h = ny(s, l, c, u);
	let f;
	try {
		f = await i(a, Object.assign({}, h));
	} catch (p) {
		throw (console.error(p), new Xo(Xr(p), 0));
	}
	if ((f.ok || (await Vh(f)), l?.noResolveJson)) return f;
	try {
		return await f.json();
	} catch (p) {
		await Vh(p);
	}
}
function ar(i) {
	var s;
	let a = null;
	cy(i) &&
		((a = Object.assign({}, i)),
		i.expires_at || (a.expires_at = B0(i.expires_in)));
	const l = (s = i.user) !== null && s !== void 0 ? s : i;
	return { data: { session: a, user: l }, error: null };
}
function Wh(i) {
	const s = ar(i);
	return (
		!s.error &&
			i.weak_password &&
			typeof i.weak_password == "object" &&
			Array.isArray(i.weak_password.reasons) &&
			i.weak_password.reasons.length &&
			i.weak_password.message &&
			typeof i.weak_password.message == "string" &&
			i.weak_password.reasons.reduce((a, l) => a && typeof l == "string", !0) &&
			(s.data.weak_password = i.weak_password),
		s
	);
}
function Ar(i) {
	var s;
	return {
		data: { user: (s = i.user) !== null && s !== void 0 ? s : i },
		error: null,
	};
}
function iy(i) {
	return { data: i, error: null };
}
function ly(i) {
	const {
			action_link: s,
			email_otp: a,
			hashed_token: l,
			redirect_to: c,
			verification_type: u,
		} = i,
		h = ry(i, [
			"action_link",
			"email_otp",
			"hashed_token",
			"redirect_to",
			"verification_type",
		]),
		f = {
			action_link: s,
			email_otp: a,
			hashed_token: l,
			redirect_to: c,
			verification_type: u,
		},
		p = Object.assign({}, h);
	return { data: { properties: f, user: p }, error: null };
}
function oy(i) {
	return i;
}
function cy(i) {
	return i.access_token && i.refresh_token && i.expires_in;
}
const Ao = ["global", "local", "others"];
var uy = function (i, s) {
	var a = {};
	for (var l in i)
		Object.prototype.hasOwnProperty.call(i, l) &&
			s.indexOf(l) < 0 &&
			(a[l] = i[l]);
	if (i != null && typeof Object.getOwnPropertySymbols == "function")
		for (var c = 0, l = Object.getOwnPropertySymbols(i); c < l.length; c++)
			s.indexOf(l[c]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(i, l[c]) &&
				(a[l[c]] = i[l[c]]);
	return a;
};
class dy {
	constructor({ url: s = "", headers: a = {}, fetch: l }) {
		(this.url = s),
			(this.headers = a),
			(this.fetch = Rm(l)),
			(this.mfa = {
				listFactors: this._listFactors.bind(this),
				deleteFactor: this._deleteFactor.bind(this),
			});
	}
	async signOut(s, a = Ao[0]) {
		if (Ao.indexOf(a) < 0)
			throw new Error(
				`@supabase/auth-js: Parameter scope must be one of ${Ao.join(", ")}`,
			);
		try {
			return (
				await Ce(this.fetch, "POST", `${this.url}/logout?scope=${a}`, {
					headers: this.headers,
					jwt: s,
					noResolveJson: !0,
				}),
				{ data: null, error: null }
			);
		} catch (l) {
			if (Ne(l)) return { data: null, error: l };
			throw l;
		}
	}
	async inviteUserByEmail(s, a = {}) {
		try {
			return await Ce(this.fetch, "POST", `${this.url}/invite`, {
				body: { email: s, data: a.data },
				headers: this.headers,
				redirectTo: a.redirectTo,
				xform: Ar,
			});
		} catch (l) {
			if (Ne(l)) return { data: { user: null }, error: l };
			throw l;
		}
	}
	async generateLink(s) {
		try {
			const { options: a } = s,
				l = uy(s, ["options"]),
				c = Object.assign(Object.assign({}, l), a);
			return (
				"newEmail" in l && ((c.new_email = l?.newEmail), delete c.newEmail),
				await Ce(this.fetch, "POST", `${this.url}/admin/generate_link`, {
					body: c,
					headers: this.headers,
					xform: ly,
					redirectTo: a?.redirectTo,
				})
			);
		} catch (a) {
			if (Ne(a)) return { data: { properties: null, user: null }, error: a };
			throw a;
		}
	}
	async createUser(s) {
		try {
			return await Ce(this.fetch, "POST", `${this.url}/admin/users`, {
				body: s,
				headers: this.headers,
				xform: Ar,
			});
		} catch (a) {
			if (Ne(a)) return { data: { user: null }, error: a };
			throw a;
		}
	}
	async listUsers(s) {
		var a, l, c, u, h, f, p;
		try {
			const y = { nextPage: null, lastPage: 0, total: 0 },
				g = await Ce(this.fetch, "GET", `${this.url}/admin/users`, {
					headers: this.headers,
					noResolveJson: !0,
					query: {
						page:
							(l =
								(a = s?.page) === null || a === void 0
									? void 0
									: a.toString()) !== null && l !== void 0
								? l
								: "",
						per_page:
							(u =
								(c = s?.perPage) === null || c === void 0
									? void 0
									: c.toString()) !== null && u !== void 0
								? u
								: "",
					},
					xform: oy,
				});
			if (g.error) throw g.error;
			const v = await g.json(),
				w =
					(h = g.headers.get("x-total-count")) !== null && h !== void 0 ? h : 0,
				T =
					(p =
						(f = g.headers.get("link")) === null || f === void 0
							? void 0
							: f.split(",")) !== null && p !== void 0
						? p
						: [];
			return (
				T.length > 0 &&
					(T.forEach((D) => {
						const U = parseInt(D.split(";")[0].split("=")[1].substring(0, 1)),
							A = JSON.parse(D.split(";")[1].split("=")[1]);
						y[`${A}Page`] = U;
					}),
					(y.total = parseInt(w))),
				{ data: Object.assign(Object.assign({}, v), y), error: null }
			);
		} catch (y) {
			if (Ne(y)) return { data: { users: [] }, error: y };
			throw y;
		}
	}
	async getUserById(s) {
		Us(s);
		try {
			return await Ce(this.fetch, "GET", `${this.url}/admin/users/${s}`, {
				headers: this.headers,
				xform: Ar,
			});
		} catch (a) {
			if (Ne(a)) return { data: { user: null }, error: a };
			throw a;
		}
	}
	async updateUserById(s, a) {
		Us(s);
		try {
			return await Ce(this.fetch, "PUT", `${this.url}/admin/users/${s}`, {
				body: a,
				headers: this.headers,
				xform: Ar,
			});
		} catch (l) {
			if (Ne(l)) return { data: { user: null }, error: l };
			throw l;
		}
	}
	async deleteUser(s, a = !1) {
		Us(s);
		try {
			return await Ce(this.fetch, "DELETE", `${this.url}/admin/users/${s}`, {
				headers: this.headers,
				body: { should_soft_delete: a },
				xform: Ar,
			});
		} catch (l) {
			if (Ne(l)) return { data: { user: null }, error: l };
			throw l;
		}
	}
	async _listFactors(s) {
		Us(s.userId);
		try {
			const { data: a, error: l } = await Ce(
				this.fetch,
				"GET",
				`${this.url}/admin/users/${s.userId}/factors`,
				{
					headers: this.headers,
					xform: (c) => ({ data: { factors: c }, error: null }),
				},
			);
			return { data: a, error: l };
		} catch (a) {
			if (Ne(a)) return { data: null, error: a };
			throw a;
		}
	}
	async _deleteFactor(s) {
		Us(s.userId), Us(s.id);
		try {
			return {
				data: await Ce(
					this.fetch,
					"DELETE",
					`${this.url}/admin/users/${s.userId}/factors/${s.id}`,
					{ headers: this.headers },
				),
				error: null,
			};
		} catch (a) {
			if (Ne(a)) return { data: null, error: a };
			throw a;
		}
	}
}
const hy = {
	getItem: (i) => (Wn() ? globalThis.localStorage.getItem(i) : null),
	setItem: (i, s) => {
		Wn() && globalThis.localStorage.setItem(i, s);
	},
	removeItem: (i) => {
		Wn() && globalThis.localStorage.removeItem(i);
	},
};
function qh(i = {}) {
	return {
		getItem: (s) => i[s] || null,
		setItem: (s, a) => {
			i[s] = a;
		},
		removeItem: (s) => {
			delete i[s];
		},
	};
}
function my() {
	if (typeof globalThis != "object")
		try {
			Object.defineProperty(Object.prototype, "__magic__", {
				get: function () {
					return this;
				},
				configurable: !0,
			}),
				(__magic__.globalThis = __magic__),
				delete Object.prototype.__magic__;
		} catch {
			typeof self < "u" && (self.globalThis = self);
		}
}
const Fs = {
	debug: !!(
		globalThis &&
		Wn() &&
		globalThis.localStorage &&
		globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
	),
};
class Om extends Error {
	constructor(s) {
		super(s), (this.isAcquireTimeout = !0);
	}
}
class fy extends Om {}
async function py(i, s, a) {
	Fs.debug &&
		console.log("@supabase/gotrue-js: navigatorLock: acquire lock", i, s);
	const l = new globalThis.AbortController();
	return (
		s > 0 &&
			setTimeout(() => {
				l.abort(),
					Fs.debug &&
						console.log(
							"@supabase/gotrue-js: navigatorLock acquire timed out",
							i,
						);
			}, s),
		await Promise.resolve().then(() =>
			globalThis.navigator.locks.request(
				i,
				s === 0
					? { mode: "exclusive", ifAvailable: !0 }
					: { mode: "exclusive", signal: l.signal },
				async (c) => {
					if (c) {
						Fs.debug &&
							console.log(
								"@supabase/gotrue-js: navigatorLock: acquired",
								i,
								c.name,
							);
						try {
							return await a();
						} finally {
							Fs.debug &&
								console.log(
									"@supabase/gotrue-js: navigatorLock: released",
									i,
									c.name,
								);
						}
					} else {
						if (s === 0)
							throw (
								(Fs.debug &&
									console.log(
										"@supabase/gotrue-js: navigatorLock: not immediately available",
										i,
									),
								new fy(
									`Acquiring an exclusive Navigator LockManager lock "${i}" immediately failed`,
								))
							);
						if (Fs.debug)
							try {
								const u = await globalThis.navigator.locks.query();
								console.log(
									"@supabase/gotrue-js: Navigator LockManager state",
									JSON.stringify(u, null, "  "),
								);
							} catch (u) {
								console.warn(
									"@supabase/gotrue-js: Error when querying Navigator LockManager state",
									u,
								);
							}
						return (
							console.warn(
								"@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request",
							),
							await a()
						);
					}
				},
			),
		)
	);
}
my();
const xy = {
	url: S0,
	storageKey: E0,
	autoRefreshToken: !0,
	persistSession: !0,
	detectSessionInUrl: !0,
	headers: _0,
	flowType: "implicit",
	debug: !1,
	hasCustomAuthorizationHeader: !1,
};
async function Hh(i, s, a) {
	return await a();
}
class Yn {
	constructor(s) {
		var a, l;
		(this.memoryStorage = null),
			(this.stateChangeEmitters = new Map()),
			(this.autoRefreshTicker = null),
			(this.visibilityChangedCallback = null),
			(this.refreshingDeferred = null),
			(this.initializePromise = null),
			(this.detectSessionInUrl = !0),
			(this.hasCustomAuthorizationHeader = !1),
			(this.suppressGetSessionWarning = !1),
			(this.lockAcquired = !1),
			(this.pendingInLock = []),
			(this.broadcastChannel = null),
			(this.logger = console.log),
			(this.instanceID = Yn.nextInstanceID),
			(Yn.nextInstanceID += 1),
			this.instanceID > 0 &&
				Dt() &&
				console.warn(
					"Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.",
				);
		const c = Object.assign(Object.assign({}, xy), s);
		if (
			((this.logDebugMessages = !!c.debug),
			typeof c.debug == "function" && (this.logger = c.debug),
			(this.persistSession = c.persistSession),
			(this.storageKey = c.storageKey),
			(this.autoRefreshToken = c.autoRefreshToken),
			(this.admin = new dy({ url: c.url, headers: c.headers, fetch: c.fetch })),
			(this.url = c.url),
			(this.headers = c.headers),
			(this.fetch = Rm(c.fetch)),
			(this.lock = c.lock || Hh),
			(this.detectSessionInUrl = c.detectSessionInUrl),
			(this.flowType = c.flowType),
			(this.hasCustomAuthorizationHeader = c.hasCustomAuthorizationHeader),
			c.lock
				? (this.lock = c.lock)
				: Dt() &&
				  !((a = globalThis?.navigator) === null || a === void 0) &&
				  a.locks
				? (this.lock = py)
				: (this.lock = Hh),
			(this.jwks = { keys: [] }),
			(this.jwks_cached_at = Number.MIN_SAFE_INTEGER),
			(this.mfa = {
				verify: this._verify.bind(this),
				enroll: this._enroll.bind(this),
				unenroll: this._unenroll.bind(this),
				challenge: this._challenge.bind(this),
				listFactors: this._listFactors.bind(this),
				challengeAndVerify: this._challengeAndVerify.bind(this),
				getAuthenticatorAssuranceLevel:
					this._getAuthenticatorAssuranceLevel.bind(this),
			}),
			this.persistSession
				? c.storage
					? (this.storage = c.storage)
					: Wn()
					? (this.storage = hy)
					: ((this.memoryStorage = {}), (this.storage = qh(this.memoryStorage)))
				: ((this.memoryStorage = {}), (this.storage = qh(this.memoryStorage))),
			Dt() &&
				globalThis.BroadcastChannel &&
				this.persistSession &&
				this.storageKey)
		) {
			try {
				this.broadcastChannel = new globalThis.BroadcastChannel(
					this.storageKey,
				);
			} catch (u) {
				console.error(
					"Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
					u,
				);
			}
			(l = this.broadcastChannel) === null ||
				l === void 0 ||
				l.addEventListener("message", async (u) => {
					this._debug(
						"received broadcast notification from other tab or client",
						u,
					),
						await this._notifyAllSubscribers(u.data.event, u.data.session, !1);
				});
		}
		this.initialize();
	}
	_debug(...s) {
		return (
			this.logDebugMessages &&
				this.logger(
					`GoTrueClient@${this.instanceID} (${Cm}) ${new Date().toISOString()}`,
					...s,
				),
			this
		);
	}
	async initialize() {
		return this.initializePromise
			? await this.initializePromise
			: ((this.initializePromise = (async () =>
					await this._acquireLock(-1, async () => await this._initialize()))()),
			  await this.initializePromise);
	}
	async _initialize() {
		var s;
		try {
			const a = V0(window.location.href);
			let l = "none";
			if (
				(this._isImplicitGrantCallback(a)
					? (l = "implicit")
					: (await this._isPKCECallback(a)) && (l = "pkce"),
				Dt() && this.detectSessionInUrl && l !== "none")
			) {
				const { data: c, error: u } = await this._getSessionFromURL(a, l);
				if (u) {
					if (
						(this._debug(
							"#_initialize()",
							"error detecting session from URL",
							u,
						),
						L0(u))
					) {
						const p =
							(s = u.details) === null || s === void 0 ? void 0 : s.code;
						if (
							p === "identity_already_exists" ||
							p === "identity_not_found" ||
							p === "single_identity_not_deletable"
						)
							return { error: u };
					}
					return await this._removeSession(), { error: u };
				}
				const { session: h, redirectType: f } = c;
				return (
					this._debug(
						"#_initialize()",
						"detected session in URL",
						h,
						"redirect type",
						f,
					),
					await this._saveSession(h),
					setTimeout(async () => {
						f === "recovery"
							? await this._notifyAllSubscribers("PASSWORD_RECOVERY", h)
							: await this._notifyAllSubscribers("SIGNED_IN", h);
					}, 0),
					{ error: null }
				);
			}
			return await this._recoverAndRefresh(), { error: null };
		} catch (a) {
			return Ne(a)
				? { error: a }
				: { error: new Tm("Unexpected error during initialization", a) };
		} finally {
			await this._handleVisibilityChange(),
				this._debug("#_initialize()", "end");
		}
	}
	async signInAnonymously(s) {
		var a, l, c;
		try {
			const u = await Ce(this.fetch, "POST", `${this.url}/signup`, {
					headers: this.headers,
					body: {
						data:
							(l =
								(a = s?.options) === null || a === void 0 ? void 0 : a.data) !==
								null && l !== void 0
								? l
								: {},
						gotrue_meta_security: {
							captcha_token:
								(c = s?.options) === null || c === void 0
									? void 0
									: c.captchaToken,
						},
					},
					xform: ar,
				}),
				{ data: h, error: f } = u;
			if (f || !h) return { data: { user: null, session: null }, error: f };
			const p = h.session,
				y = h.user;
			return (
				h.session &&
					(await this._saveSession(h.session),
					await this._notifyAllSubscribers("SIGNED_IN", p)),
				{ data: { user: y, session: p }, error: null }
			);
		} catch (u) {
			if (Ne(u)) return { data: { user: null, session: null }, error: u };
			throw u;
		}
	}
	async signUp(s) {
		var a, l, c;
		try {
			let u;
			if ("email" in s) {
				const { email: g, password: v, options: w } = s;
				let T = null,
					D = null;
				this.flowType === "pkce" &&
					([T, D] = await Ds(this.storage, this.storageKey)),
					(u = await Ce(this.fetch, "POST", `${this.url}/signup`, {
						headers: this.headers,
						redirectTo: w?.emailRedirectTo,
						body: {
							email: g,
							password: v,
							data: (a = w?.data) !== null && a !== void 0 ? a : {},
							gotrue_meta_security: { captcha_token: w?.captchaToken },
							code_challenge: T,
							code_challenge_method: D,
						},
						xform: ar,
					}));
			} else if ("phone" in s) {
				const { phone: g, password: v, options: w } = s;
				u = await Ce(this.fetch, "POST", `${this.url}/signup`, {
					headers: this.headers,
					body: {
						phone: g,
						password: v,
						data: (l = w?.data) !== null && l !== void 0 ? l : {},
						channel: (c = w?.channel) !== null && c !== void 0 ? c : "sms",
						gotrue_meta_security: { captcha_token: w?.captchaToken },
					},
					xform: ar,
				});
			} else
				throw new hi(
					"You must provide either an email or phone number and a password",
				);
			const { data: h, error: f } = u;
			if (f || !h) return { data: { user: null, session: null }, error: f };
			const p = h.session,
				y = h.user;
			return (
				h.session &&
					(await this._saveSession(h.session),
					await this._notifyAllSubscribers("SIGNED_IN", p)),
				{ data: { user: y, session: p }, error: null }
			);
		} catch (u) {
			if (Ne(u)) return { data: { user: null, session: null }, error: u };
			throw u;
		}
	}
	async signInWithPassword(s) {
		try {
			let a;
			if ("email" in s) {
				const { email: u, password: h, options: f } = s;
				a = await Ce(
					this.fetch,
					"POST",
					`${this.url}/token?grant_type=password`,
					{
						headers: this.headers,
						body: {
							email: u,
							password: h,
							gotrue_meta_security: { captcha_token: f?.captchaToken },
						},
						xform: Wh,
					},
				);
			} else if ("phone" in s) {
				const { phone: u, password: h, options: f } = s;
				a = await Ce(
					this.fetch,
					"POST",
					`${this.url}/token?grant_type=password`,
					{
						headers: this.headers,
						body: {
							phone: u,
							password: h,
							gotrue_meta_security: { captcha_token: f?.captchaToken },
						},
						xform: Wh,
					},
				);
			} else
				throw new hi(
					"You must provide either an email or phone number and a password",
				);
			const { data: l, error: c } = a;
			return c
				? { data: { user: null, session: null }, error: c }
				: !l || !l.session || !l.user
				? { data: { user: null, session: null }, error: new di() }
				: (l.session &&
						(await this._saveSession(l.session),
						await this._notifyAllSubscribers("SIGNED_IN", l.session)),
				  {
						data: Object.assign(
							{ user: l.user, session: l.session },
							l.weak_password ? { weakPassword: l.weak_password } : null,
						),
						error: c,
				  });
		} catch (a) {
			if (Ne(a)) return { data: { user: null, session: null }, error: a };
			throw a;
		}
	}
	async signInWithOAuth(s) {
		var a, l, c, u;
		return await this._handleProviderSignIn(s.provider, {
			redirectTo:
				(a = s.options) === null || a === void 0 ? void 0 : a.redirectTo,
			scopes: (l = s.options) === null || l === void 0 ? void 0 : l.scopes,
			queryParams:
				(c = s.options) === null || c === void 0 ? void 0 : c.queryParams,
			skipBrowserRedirect:
				(u = s.options) === null || u === void 0
					? void 0
					: u.skipBrowserRedirect,
		});
	}
	async exchangeCodeForSession(s) {
		return (
			await this.initializePromise,
			this._acquireLock(-1, async () => this._exchangeCodeForSession(s))
		);
	}
	async signInWithWeb3(s) {
		const { chain: a } = s;
		if (a === "solana") return await this.signInWithSolana(s);
		throw new Error(`@supabase/auth-js: Unsupported chain "${a}"`);
	}
	async signInWithSolana(s) {
		var a, l, c, u, h, f, p, y, g, v, w, T;
		let D, U;
		if ("message" in s) (D = s.message), (U = s.signature);
		else {
			const { chain: A, wallet: z, statement: ee, options: N } = s;
			let G;
			if (Dt())
				if (typeof z == "object") G = z;
				else {
					const ne = window;
					if (
						"solana" in ne &&
						typeof ne.solana == "object" &&
						(("signIn" in ne.solana && typeof ne.solana.signIn == "function") ||
							("signMessage" in ne.solana &&
								typeof ne.solana.signMessage == "function"))
					)
						G = ne.solana;
					else
						throw new Error(
							"@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.",
						);
				}
			else {
				if (typeof z != "object" || !N?.url)
					throw new Error(
						"@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
					);
				G = z;
			}
			const X = new URL(
				(a = N?.url) !== null && a !== void 0 ? a : window.location.href,
			);
			if ("signIn" in G && G.signIn) {
				const ne = await G.signIn(
					Object.assign(
						Object.assign(
							Object.assign(
								{ issuedAt: new Date().toISOString() },
								N?.signInWithSolana,
							),
							{ version: "1", domain: X.host, uri: X.href },
						),
						ee ? { statement: ee } : null,
					),
				);
				let le;
				if (Array.isArray(ne) && ne[0] && typeof ne[0] == "object") le = ne[0];
				else if (
					ne &&
					typeof ne == "object" &&
					"signedMessage" in ne &&
					"signature" in ne
				)
					le = ne;
				else
					throw new Error(
						"@supabase/auth-js: Wallet method signIn() returned unrecognized value",
					);
				if (
					"signedMessage" in le &&
					"signature" in le &&
					(typeof le.signedMessage == "string" ||
						le.signedMessage instanceof Uint8Array) &&
					le.signature instanceof Uint8Array
				)
					(D =
						typeof le.signedMessage == "string"
							? le.signedMessage
							: new TextDecoder().decode(le.signedMessage)),
						(U = le.signature);
				else
					throw new Error(
						"@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields",
					);
			} else {
				if (
					!("signMessage" in G) ||
					typeof G.signMessage != "function" ||
					!("publicKey" in G) ||
					typeof G != "object" ||
					!G.publicKey ||
					!("toBase58" in G.publicKey) ||
					typeof G.publicKey.toBase58 != "function"
				)
					throw new Error(
						"@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API",
					);
				D = [
					`${X.host} wants you to sign in with your Solana account:`,
					G.publicKey.toBase58(),
					...(ee ? ["", ee, ""] : [""]),
					"Version: 1",
					`URI: ${X.href}`,
					`Issued At: ${
						(c =
							(l = N?.signInWithSolana) === null || l === void 0
								? void 0
								: l.issuedAt) !== null && c !== void 0
							? c
							: new Date().toISOString()
					}`,
					...(!((u = N?.signInWithSolana) === null || u === void 0) &&
					u.notBefore
						? [`Not Before: ${N.signInWithSolana.notBefore}`]
						: []),
					...(!((h = N?.signInWithSolana) === null || h === void 0) &&
					h.expirationTime
						? [`Expiration Time: ${N.signInWithSolana.expirationTime}`]
						: []),
					...(!((f = N?.signInWithSolana) === null || f === void 0) && f.chainId
						? [`Chain ID: ${N.signInWithSolana.chainId}`]
						: []),
					...(!((p = N?.signInWithSolana) === null || p === void 0) && p.nonce
						? [`Nonce: ${N.signInWithSolana.nonce}`]
						: []),
					...(!((y = N?.signInWithSolana) === null || y === void 0) &&
					y.requestId
						? [`Request ID: ${N.signInWithSolana.requestId}`]
						: []),
					...(!(
						(v =
							(g = N?.signInWithSolana) === null || g === void 0
								? void 0
								: g.resources) === null || v === void 0
					) && v.length
						? [
								"Resources",
								...N.signInWithSolana.resources.map((le) => `- ${le}`),
						  ]
						: []),
				].join(`
`);
				const ne = await G.signMessage(new TextEncoder().encode(D), "utf8");
				if (!ne || !(ne instanceof Uint8Array))
					throw new Error(
						"@supabase/auth-js: Wallet signMessage() API returned an recognized value",
					);
				U = ne;
			}
		}
		try {
			const { data: A, error: z } = await Ce(
				this.fetch,
				"POST",
				`${this.url}/token?grant_type=web3`,
				{
					headers: this.headers,
					body: Object.assign(
						{ chain: "solana", message: D, signature: F0(U) },
						!((w = s.options) === null || w === void 0) && w.captchaToken
							? {
									gotrue_meta_security: {
										captcha_token:
											(T = s.options) === null || T === void 0
												? void 0
												: T.captchaToken,
									},
							  }
							: null,
					),
					xform: ar,
				},
			);
			if (z) throw z;
			return !A || !A.session || !A.user
				? { data: { user: null, session: null }, error: new di() }
				: (A.session &&
						(await this._saveSession(A.session),
						await this._notifyAllSubscribers("SIGNED_IN", A.session)),
				  { data: Object.assign({}, A), error: z });
		} catch (A) {
			if (Ne(A)) return { data: { user: null, session: null }, error: A };
			throw A;
		}
	}
	async _exchangeCodeForSession(s) {
		const a = await fi(this.storage, `${this.storageKey}-code-verifier`),
			[l, c] = (a ?? "").split("/");
		try {
			const { data: u, error: h } = await Ce(
				this.fetch,
				"POST",
				`${this.url}/token?grant_type=pkce`,
				{
					headers: this.headers,
					body: { auth_code: s, code_verifier: l },
					xform: ar,
				},
			);
			if ((await pi(this.storage, `${this.storageKey}-code-verifier`), h))
				throw h;
			return !u || !u.session || !u.user
				? {
						data: { user: null, session: null, redirectType: null },
						error: new di(),
				  }
				: (u.session &&
						(await this._saveSession(u.session),
						await this._notifyAllSubscribers("SIGNED_IN", u.session)),
				  {
						data: Object.assign(Object.assign({}, u), {
							redirectType: c ?? null,
						}),
						error: h,
				  });
		} catch (u) {
			if (Ne(u))
				return {
					data: { user: null, session: null, redirectType: null },
					error: u,
				};
			throw u;
		}
	}
	async signInWithIdToken(s) {
		try {
			const {
					options: a,
					provider: l,
					token: c,
					access_token: u,
					nonce: h,
				} = s,
				f = await Ce(
					this.fetch,
					"POST",
					`${this.url}/token?grant_type=id_token`,
					{
						headers: this.headers,
						body: {
							provider: l,
							id_token: c,
							access_token: u,
							nonce: h,
							gotrue_meta_security: { captcha_token: a?.captchaToken },
						},
						xform: ar,
					},
				),
				{ data: p, error: y } = f;
			return y
				? { data: { user: null, session: null }, error: y }
				: !p || !p.session || !p.user
				? { data: { user: null, session: null }, error: new di() }
				: (p.session &&
						(await this._saveSession(p.session),
						await this._notifyAllSubscribers("SIGNED_IN", p.session)),
				  { data: p, error: y });
		} catch (a) {
			if (Ne(a)) return { data: { user: null, session: null }, error: a };
			throw a;
		}
	}
	async signInWithOtp(s) {
		var a, l, c, u, h;
		try {
			if ("email" in s) {
				const { email: f, options: p } = s;
				let y = null,
					g = null;
				this.flowType === "pkce" &&
					([y, g] = await Ds(this.storage, this.storageKey));
				const { error: v } = await Ce(this.fetch, "POST", `${this.url}/otp`, {
					headers: this.headers,
					body: {
						email: f,
						data: (a = p?.data) !== null && a !== void 0 ? a : {},
						create_user:
							(l = p?.shouldCreateUser) !== null && l !== void 0 ? l : !0,
						gotrue_meta_security: { captcha_token: p?.captchaToken },
						code_challenge: y,
						code_challenge_method: g,
					},
					redirectTo: p?.emailRedirectTo,
				});
				return { data: { user: null, session: null }, error: v };
			}
			if ("phone" in s) {
				const { phone: f, options: p } = s,
					{ data: y, error: g } = await Ce(
						this.fetch,
						"POST",
						`${this.url}/otp`,
						{
							headers: this.headers,
							body: {
								phone: f,
								data: (c = p?.data) !== null && c !== void 0 ? c : {},
								create_user:
									(u = p?.shouldCreateUser) !== null && u !== void 0 ? u : !0,
								gotrue_meta_security: { captcha_token: p?.captchaToken },
								channel: (h = p?.channel) !== null && h !== void 0 ? h : "sms",
							},
						},
					);
				return {
					data: { user: null, session: null, messageId: y?.message_id },
					error: g,
				};
			}
			throw new hi("You must provide either an email or phone number.");
		} catch (f) {
			if (Ne(f)) return { data: { user: null, session: null }, error: f };
			throw f;
		}
	}
	async verifyOtp(s) {
		var a, l;
		try {
			let c, u;
			"options" in s &&
				((c = (a = s.options) === null || a === void 0 ? void 0 : a.redirectTo),
				(u =
					(l = s.options) === null || l === void 0 ? void 0 : l.captchaToken));
			const { data: h, error: f } = await Ce(
				this.fetch,
				"POST",
				`${this.url}/verify`,
				{
					headers: this.headers,
					body: Object.assign(Object.assign({}, s), {
						gotrue_meta_security: { captcha_token: u },
					}),
					redirectTo: c,
					xform: ar,
				},
			);
			if (f) throw f;
			if (!h) throw new Error("An error occurred on token verification.");
			const p = h.session,
				y = h.user;
			return (
				p?.access_token &&
					(await this._saveSession(p),
					await this._notifyAllSubscribers(
						s.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
						p,
					)),
				{ data: { user: y, session: p }, error: null }
			);
		} catch (c) {
			if (Ne(c)) return { data: { user: null, session: null }, error: c };
			throw c;
		}
	}
	async signInWithSSO(s) {
		var a, l, c;
		try {
			let u = null,
				h = null;
			return (
				this.flowType === "pkce" &&
					([u, h] = await Ds(this.storage, this.storageKey)),
				await Ce(this.fetch, "POST", `${this.url}/sso`, {
					body: Object.assign(
						Object.assign(
							Object.assign(
								Object.assign(
									Object.assign(
										{},
										"providerId" in s ? { provider_id: s.providerId } : null,
									),
									"domain" in s ? { domain: s.domain } : null,
								),
								{
									redirect_to:
										(l =
											(a = s.options) === null || a === void 0
												? void 0
												: a.redirectTo) !== null && l !== void 0
											? l
											: void 0,
								},
							),
							!((c = s?.options) === null || c === void 0) && c.captchaToken
								? {
										gotrue_meta_security: {
											captcha_token: s.options.captchaToken,
										},
								  }
								: null,
						),
						{
							skip_http_redirect: !0,
							code_challenge: u,
							code_challenge_method: h,
						},
					),
					headers: this.headers,
					xform: iy,
				})
			);
		} catch (u) {
			if (Ne(u)) return { data: null, error: u };
			throw u;
		}
	}
	async reauthenticate() {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => await this._reauthenticate())
		);
	}
	async _reauthenticate() {
		try {
			return await this._useSession(async (s) => {
				const {
					data: { session: a },
					error: l,
				} = s;
				if (l) throw l;
				if (!a) throw new Pr();
				const { error: c } = await Ce(
					this.fetch,
					"GET",
					`${this.url}/reauthenticate`,
					{ headers: this.headers, jwt: a.access_token },
				);
				return { data: { user: null, session: null }, error: c };
			});
		} catch (s) {
			if (Ne(s)) return { data: { user: null, session: null }, error: s };
			throw s;
		}
	}
	async resend(s) {
		try {
			const a = `${this.url}/resend`;
			if ("email" in s) {
				const { email: l, type: c, options: u } = s,
					{ error: h } = await Ce(this.fetch, "POST", a, {
						headers: this.headers,
						body: {
							email: l,
							type: c,
							gotrue_meta_security: { captcha_token: u?.captchaToken },
						},
						redirectTo: u?.emailRedirectTo,
					});
				return { data: { user: null, session: null }, error: h };
			} else if ("phone" in s) {
				const { phone: l, type: c, options: u } = s,
					{ data: h, error: f } = await Ce(this.fetch, "POST", a, {
						headers: this.headers,
						body: {
							phone: l,
							type: c,
							gotrue_meta_security: { captcha_token: u?.captchaToken },
						},
					});
				return {
					data: { user: null, session: null, messageId: h?.message_id },
					error: f,
				};
			}
			throw new hi(
				"You must provide either an email or phone number and a type",
			);
		} catch (a) {
			if (Ne(a)) return { data: { user: null, session: null }, error: a };
			throw a;
		}
	}
	async getSession() {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => this._useSession(async (a) => a))
		);
	}
	async _acquireLock(s, a) {
		this._debug("#_acquireLock", "begin", s);
		try {
			if (this.lockAcquired) {
				const l = this.pendingInLock.length
						? this.pendingInLock[this.pendingInLock.length - 1]
						: Promise.resolve(),
					c = (async () => (await l, await a()))();
				return (
					this.pendingInLock.push(
						(async () => {
							try {
								await c;
							} catch {}
						})(),
					),
					c
				);
			}
			return await this.lock(`lock:${this.storageKey}`, s, async () => {
				this._debug(
					"#_acquireLock",
					"lock acquired for storage key",
					this.storageKey,
				);
				try {
					this.lockAcquired = !0;
					const l = a();
					for (
						this.pendingInLock.push(
							(async () => {
								try {
									await l;
								} catch {}
							})(),
						),
							await l;
						this.pendingInLock.length;

					) {
						const c = [...this.pendingInLock];
						await Promise.all(c), this.pendingInLock.splice(0, c.length);
					}
					return await l;
				} finally {
					this._debug(
						"#_acquireLock",
						"lock released for storage key",
						this.storageKey,
					),
						(this.lockAcquired = !1);
				}
			});
		} finally {
			this._debug("#_acquireLock", "end");
		}
	}
	async _useSession(s) {
		this._debug("#_useSession", "begin");
		try {
			const a = await this.__loadSession();
			return await s(a);
		} finally {
			this._debug("#_useSession", "end");
		}
	}
	async __loadSession() {
		this._debug("#__loadSession()", "begin"),
			this.lockAcquired ||
				this._debug(
					"#__loadSession()",
					"used outside of an acquired lock!",
					new Error().stack,
				);
		try {
			let s = null;
			const a = await fi(this.storage, this.storageKey);
			if (
				(this._debug("#getSession()", "session from storage", a),
				a !== null &&
					(this._isValidSession(a)
						? (s = a)
						: (this._debug(
								"#getSession()",
								"session from storage is not valid",
						  ),
						  await this._removeSession())),
				!s)
			)
				return { data: { session: null }, error: null };
			const l = s.expires_at ? s.expires_at * 1e3 - Date.now() < Co : !1;
			if (
				(this._debug(
					"#__loadSession()",
					`session has${l ? "" : " not"} expired`,
					"expires_at",
					s.expires_at,
				),
				!l)
			) {
				if (this.storage.isServer) {
					let h = this.suppressGetSessionWarning;
					s = new Proxy(s, {
						get: (p, y, g) => (
							!h &&
								y === "user" &&
								(console.warn(
									"Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.",
								),
								(h = !0),
								(this.suppressGetSessionWarning = !0)),
							Reflect.get(p, y, g)
						),
					});
				}
				return { data: { session: s }, error: null };
			}
			const { session: c, error: u } = await this._callRefreshToken(
				s.refresh_token,
			);
			return u
				? { data: { session: null }, error: u }
				: { data: { session: c }, error: null };
		} finally {
			this._debug("#__loadSession()", "end");
		}
	}
	async getUser(s) {
		return s
			? await this._getUser(s)
			: (await this.initializePromise,
			  await this._acquireLock(-1, async () => await this._getUser()));
	}
	async _getUser(s) {
		try {
			return s
				? await Ce(this.fetch, "GET", `${this.url}/user`, {
						headers: this.headers,
						jwt: s,
						xform: Ar,
				  })
				: await this._useSession(async (a) => {
						var l, c, u;
						const { data: h, error: f } = a;
						if (f) throw f;
						return !(
							!((l = h.session) === null || l === void 0) && l.access_token
						) && !this.hasCustomAuthorizationHeader
							? { data: { user: null }, error: new Pr() }
							: await Ce(this.fetch, "GET", `${this.url}/user`, {
									headers: this.headers,
									jwt:
										(u =
											(c = h.session) === null || c === void 0
												? void 0
												: c.access_token) !== null && u !== void 0
											? u
											: void 0,
									xform: Ar,
							  });
				  });
		} catch (a) {
			if (Ne(a))
				return (
					R0(a) &&
						(await this._removeSession(),
						await pi(this.storage, `${this.storageKey}-code-verifier`)),
					{ data: { user: null }, error: a }
				);
			throw a;
		}
	}
	async updateUser(s, a = {}) {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => await this._updateUser(s, a))
		);
	}
	async _updateUser(s, a = {}) {
		try {
			return await this._useSession(async (l) => {
				const { data: c, error: u } = l;
				if (u) throw u;
				if (!c.session) throw new Pr();
				const h = c.session;
				let f = null,
					p = null;
				this.flowType === "pkce" &&
					s.email != null &&
					([f, p] = await Ds(this.storage, this.storageKey));
				const { data: y, error: g } = await Ce(
					this.fetch,
					"PUT",
					`${this.url}/user`,
					{
						headers: this.headers,
						redirectTo: a?.emailRedirectTo,
						body: Object.assign(Object.assign({}, s), {
							code_challenge: f,
							code_challenge_method: p,
						}),
						jwt: h.access_token,
						xform: Ar,
					},
				);
				if (g) throw g;
				return (
					(h.user = y.user),
					await this._saveSession(h),
					await this._notifyAllSubscribers("USER_UPDATED", h),
					{ data: { user: h.user }, error: null }
				);
			});
		} catch (l) {
			if (Ne(l)) return { data: { user: null }, error: l };
			throw l;
		}
	}
	async setSession(s) {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => await this._setSession(s))
		);
	}
	async _setSession(s) {
		try {
			if (!s.access_token || !s.refresh_token) throw new Pr();
			const a = Date.now() / 1e3;
			let l = a,
				c = !0,
				u = null;
			const { payload: h } = To(s.access_token);
			if ((h.exp && ((l = h.exp), (c = l <= a)), c)) {
				const { session: f, error: p } = await this._callRefreshToken(
					s.refresh_token,
				);
				if (p) return { data: { user: null, session: null }, error: p };
				if (!f) return { data: { user: null, session: null }, error: null };
				u = f;
			} else {
				const { data: f, error: p } = await this._getUser(s.access_token);
				if (p) throw p;
				(u = {
					access_token: s.access_token,
					refresh_token: s.refresh_token,
					user: f.user,
					token_type: "bearer",
					expires_in: l - a,
					expires_at: l,
				}),
					await this._saveSession(u),
					await this._notifyAllSubscribers("SIGNED_IN", u);
			}
			return { data: { user: u.user, session: u }, error: null };
		} catch (a) {
			if (Ne(a)) return { data: { session: null, user: null }, error: a };
			throw a;
		}
	}
	async refreshSession(s) {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => await this._refreshSession(s))
		);
	}
	async _refreshSession(s) {
		try {
			return await this._useSession(async (a) => {
				var l;
				if (!s) {
					const { data: h, error: f } = a;
					if (f) throw f;
					s = (l = h.session) !== null && l !== void 0 ? l : void 0;
				}
				if (!s?.refresh_token) throw new Pr();
				const { session: c, error: u } = await this._callRefreshToken(
					s.refresh_token,
				);
				return u
					? { data: { user: null, session: null }, error: u }
					: c
					? { data: { user: c.user, session: c }, error: null }
					: { data: { user: null, session: null }, error: null };
			});
		} catch (a) {
			if (Ne(a)) return { data: { user: null, session: null }, error: a };
			throw a;
		}
	}
	async _getSessionFromURL(s, a) {
		try {
			if (!Dt()) throw new mi("No browser detected.");
			if (s.error || s.error_description || s.error_code)
				throw new mi(
					s.error_description ||
						"Error in URL with unspecified error_description",
					{
						error: s.error || "unspecified_error",
						code: s.error_code || "unspecified_code",
					},
				);
			switch (a) {
				case "implicit":
					if (this.flowType === "pkce")
						throw new Dh("Not a valid PKCE flow url.");
					break;
				case "pkce":
					if (this.flowType === "implicit")
						throw new mi("Not a valid implicit grant flow url.");
					break;
				default:
			}
			if (a === "pkce") {
				if (
					(this._debug("#_initialize()", "begin", "is PKCE flow", !0), !s.code)
				)
					throw new Dh("No code detected.");
				const { data: ee, error: N } = await this._exchangeCodeForSession(
					s.code,
				);
				if (N) throw N;
				const G = new URL(window.location.href);
				return (
					G.searchParams.delete("code"),
					window.history.replaceState(window.history.state, "", G.toString()),
					{ data: { session: ee.session, redirectType: null }, error: null }
				);
			}
			const {
				provider_token: l,
				provider_refresh_token: c,
				access_token: u,
				refresh_token: h,
				expires_in: f,
				expires_at: p,
				token_type: y,
			} = s;
			if (!u || !f || !h || !y) throw new mi("No session defined in URL");
			const g = Math.round(Date.now() / 1e3),
				v = parseInt(f);
			let w = g + v;
			p && (w = parseInt(p));
			const T = w - g;
			T * 1e3 <= Bs &&
				console.warn(
					`@supabase/gotrue-js: Session as retrieved from URL expires in ${T}s, should have been closer to ${v}s`,
				);
			const D = w - v;
			g - D >= 120
				? console.warn(
						"@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
						D,
						w,
						g,
				  )
				: g - D < 0 &&
				  console.warn(
						"@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
						D,
						w,
						g,
				  );
			const { data: U, error: A } = await this._getUser(u);
			if (A) throw A;
			const z = {
				provider_token: l,
				provider_refresh_token: c,
				access_token: u,
				expires_in: v,
				expires_at: w,
				refresh_token: h,
				token_type: y,
				user: U.user,
			};
			return (
				(window.location.hash = ""),
				this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
				{ data: { session: z, redirectType: s.type }, error: null }
			);
		} catch (l) {
			if (Ne(l))
				return { data: { session: null, redirectType: null }, error: l };
			throw l;
		}
	}
	_isImplicitGrantCallback(s) {
		return !!(s.access_token || s.error_description);
	}
	async _isPKCECallback(s) {
		const a = await fi(this.storage, `${this.storageKey}-code-verifier`);
		return !!(s.code && a);
	}
	async signOut(s = { scope: "global" }) {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => await this._signOut(s))
		);
	}
	async _signOut({ scope: s } = { scope: "global" }) {
		return await this._useSession(async (a) => {
			var l;
			const { data: c, error: u } = a;
			if (u) return { error: u };
			const h =
				(l = c.session) === null || l === void 0 ? void 0 : l.access_token;
			if (h) {
				const { error: f } = await this.admin.signOut(h, s);
				if (
					f &&
					!(A0(f) && (f.status === 404 || f.status === 401 || f.status === 403))
				)
					return { error: f };
			}
			return (
				s !== "others" &&
					(await this._removeSession(),
					await pi(this.storage, `${this.storageKey}-code-verifier`)),
				{ error: null }
			);
		});
	}
	onAuthStateChange(s) {
		const a = $0(),
			l = {
				id: a,
				callback: s,
				unsubscribe: () => {
					this._debug(
						"#unsubscribe()",
						"state change callback with id removed",
						a,
					),
						this.stateChangeEmitters.delete(a);
				},
			};
		return (
			this._debug("#onAuthStateChange()", "registered callback with id", a),
			this.stateChangeEmitters.set(a, l),
			(async () => (
				await this.initializePromise,
				await this._acquireLock(-1, async () => {
					this._emitInitialSession(a);
				})
			))(),
			{ data: { subscription: l } }
		);
	}
	async _emitInitialSession(s) {
		return await this._useSession(async (a) => {
			var l, c;
			try {
				const {
					data: { session: u },
					error: h,
				} = a;
				if (h) throw h;
				await ((l = this.stateChangeEmitters.get(s)) === null || l === void 0
					? void 0
					: l.callback("INITIAL_SESSION", u)),
					this._debug("INITIAL_SESSION", "callback id", s, "session", u);
			} catch (u) {
				await ((c = this.stateChangeEmitters.get(s)) === null || c === void 0
					? void 0
					: c.callback("INITIAL_SESSION", null)),
					this._debug("INITIAL_SESSION", "callback id", s, "error", u),
					console.error(u);
			}
		});
	}
	async resetPasswordForEmail(s, a = {}) {
		let l = null,
			c = null;
		this.flowType === "pkce" &&
			([l, c] = await Ds(this.storage, this.storageKey, !0));
		try {
			return await Ce(this.fetch, "POST", `${this.url}/recover`, {
				body: {
					email: s,
					code_challenge: l,
					code_challenge_method: c,
					gotrue_meta_security: { captcha_token: a.captchaToken },
				},
				headers: this.headers,
				redirectTo: a.redirectTo,
			});
		} catch (u) {
			if (Ne(u)) return { data: null, error: u };
			throw u;
		}
	}
	async getUserIdentities() {
		var s;
		try {
			const { data: a, error: l } = await this.getUser();
			if (l) throw l;
			return {
				data: {
					identities: (s = a.user.identities) !== null && s !== void 0 ? s : [],
				},
				error: null,
			};
		} catch (a) {
			if (Ne(a)) return { data: null, error: a };
			throw a;
		}
	}
	async linkIdentity(s) {
		var a;
		try {
			const { data: l, error: c } = await this._useSession(async (u) => {
				var h, f, p, y, g;
				const { data: v, error: w } = u;
				if (w) throw w;
				const T = await this._getUrlForProvider(
					`${this.url}/user/identities/authorize`,
					s.provider,
					{
						redirectTo:
							(h = s.options) === null || h === void 0 ? void 0 : h.redirectTo,
						scopes:
							(f = s.options) === null || f === void 0 ? void 0 : f.scopes,
						queryParams:
							(p = s.options) === null || p === void 0 ? void 0 : p.queryParams,
						skipBrowserRedirect: !0,
					},
				);
				return await Ce(this.fetch, "GET", T, {
					headers: this.headers,
					jwt:
						(g =
							(y = v.session) === null || y === void 0
								? void 0
								: y.access_token) !== null && g !== void 0
							? g
							: void 0,
				});
			});
			if (c) throw c;
			return (
				Dt() &&
					!(
						!((a = s.options) === null || a === void 0) && a.skipBrowserRedirect
					) &&
					window.location.assign(l?.url),
				{ data: { provider: s.provider, url: l?.url }, error: null }
			);
		} catch (l) {
			if (Ne(l)) return { data: { provider: s.provider, url: null }, error: l };
			throw l;
		}
	}
	async unlinkIdentity(s) {
		try {
			return await this._useSession(async (a) => {
				var l, c;
				const { data: u, error: h } = a;
				if (h) throw h;
				return await Ce(
					this.fetch,
					"DELETE",
					`${this.url}/user/identities/${s.identity_id}`,
					{
						headers: this.headers,
						jwt:
							(c =
								(l = u.session) === null || l === void 0
									? void 0
									: l.access_token) !== null && c !== void 0
								? c
								: void 0,
					},
				);
			});
		} catch (a) {
			if (Ne(a)) return { data: null, error: a };
			throw a;
		}
	}
	async _refreshAccessToken(s) {
		const a = `#_refreshAccessToken(${s.substring(0, 5)}...)`;
		this._debug(a, "begin");
		try {
			const l = Date.now();
			return await H0(
				async (c) => (
					c > 0 && (await q0(200 * Math.pow(2, c - 1))),
					this._debug(a, "refreshing attempt", c),
					await Ce(
						this.fetch,
						"POST",
						`${this.url}/token?grant_type=refresh_token`,
						{ body: { refresh_token: s }, headers: this.headers, xform: ar },
					)
				),
				(c, u) => {
					const h = 200 * Math.pow(2, c);
					return u && Po(u) && Date.now() + h - l < Bs;
				},
			);
		} catch (l) {
			if ((this._debug(a, "error", l), Ne(l)))
				return { data: { session: null, user: null }, error: l };
			throw l;
		} finally {
			this._debug(a, "end");
		}
	}
	_isValidSession(s) {
		return (
			typeof s == "object" &&
			s !== null &&
			"access_token" in s &&
			"refresh_token" in s &&
			"expires_at" in s
		);
	}
	async _handleProviderSignIn(s, a) {
		const l = await this._getUrlForProvider(`${this.url}/authorize`, s, {
			redirectTo: a.redirectTo,
			scopes: a.scopes,
			queryParams: a.queryParams,
		});
		return (
			this._debug(
				"#_handleProviderSignIn()",
				"provider",
				s,
				"options",
				a,
				"url",
				l,
			),
			Dt() && !a.skipBrowserRedirect && window.location.assign(l),
			{ data: { provider: s, url: l }, error: null }
		);
	}
	async _recoverAndRefresh() {
		var s;
		const a = "#_recoverAndRefresh()";
		this._debug(a, "begin");
		try {
			const l = await fi(this.storage, this.storageKey);
			if (
				(this._debug(a, "session from storage", l), !this._isValidSession(l))
			) {
				this._debug(a, "session is not valid"),
					l !== null && (await this._removeSession());
				return;
			}
			const c =
				((s = l.expires_at) !== null && s !== void 0 ? s : 1 / 0) * 1e3 -
					Date.now() <
				Co;
			if (
				(this._debug(
					a,
					`session has${c ? "" : " not"} expired with margin of ${Co}s`,
				),
				c)
			) {
				if (this.autoRefreshToken && l.refresh_token) {
					const { error: u } = await this._callRefreshToken(l.refresh_token);
					u &&
						(console.error(u),
						Po(u) ||
							(this._debug(
								a,
								"refresh failed with a non-retryable error, removing the session",
								u,
							),
							await this._removeSession()));
				}
			} else await this._notifyAllSubscribers("SIGNED_IN", l);
		} catch (l) {
			this._debug(a, "error", l), console.error(l);
			return;
		} finally {
			this._debug(a, "end");
		}
	}
	async _callRefreshToken(s) {
		var a, l;
		if (!s) throw new Pr();
		if (this.refreshingDeferred) return this.refreshingDeferred.promise;
		const c = `#_callRefreshToken(${s.substring(0, 5)}...)`;
		this._debug(c, "begin");
		try {
			this.refreshingDeferred = new _i();
			const { data: u, error: h } = await this._refreshAccessToken(s);
			if (h) throw h;
			if (!u.session) throw new Pr();
			await this._saveSession(u.session),
				await this._notifyAllSubscribers("TOKEN_REFRESHED", u.session);
			const f = { session: u.session, error: null };
			return this.refreshingDeferred.resolve(f), f;
		} catch (u) {
			if ((this._debug(c, "error", u), Ne(u))) {
				const h = { session: null, error: u };
				return (
					Po(u) || (await this._removeSession()),
					(a = this.refreshingDeferred) === null ||
						a === void 0 ||
						a.resolve(h),
					h
				);
			}
			throw (
				((l = this.refreshingDeferred) === null || l === void 0 || l.reject(u),
				u)
			);
		} finally {
			(this.refreshingDeferred = null), this._debug(c, "end");
		}
	}
	async _notifyAllSubscribers(s, a, l = !0) {
		const c = `#_notifyAllSubscribers(${s})`;
		this._debug(c, "begin", a, `broadcast = ${l}`);
		try {
			this.broadcastChannel &&
				l &&
				this.broadcastChannel.postMessage({ event: s, session: a });
			const u = [],
				h = Array.from(this.stateChangeEmitters.values()).map(async (f) => {
					try {
						await f.callback(s, a);
					} catch (p) {
						u.push(p);
					}
				});
			if ((await Promise.all(h), u.length > 0)) {
				for (let f = 0; f < u.length; f += 1) console.error(u[f]);
				throw u[0];
			}
		} finally {
			this._debug(c, "end");
		}
	}
	async _saveSession(s) {
		this._debug("#_saveSession()", s),
			(this.suppressGetSessionWarning = !0),
			await Lm(this.storage, this.storageKey, s);
	}
	async _removeSession() {
		this._debug("#_removeSession()"),
			await pi(this.storage, this.storageKey),
			await this._notifyAllSubscribers("SIGNED_OUT", null);
	}
	_removeVisibilityChangedCallback() {
		this._debug("#_removeVisibilityChangedCallback()");
		const s = this.visibilityChangedCallback;
		this.visibilityChangedCallback = null;
		try {
			s &&
				Dt() &&
				window?.removeEventListener &&
				window.removeEventListener("visibilitychange", s);
		} catch (a) {
			console.error("removing visibilitychange callback failed", a);
		}
	}
	async _startAutoRefresh() {
		await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
		const s = setInterval(() => this._autoRefreshTokenTick(), Bs);
		(this.autoRefreshTicker = s),
			s && typeof s == "object" && typeof s.unref == "function"
				? s.unref()
				: typeof Deno < "u" &&
				  typeof Deno.unrefTimer == "function" &&
				  Deno.unrefTimer(s),
			setTimeout(async () => {
				await this.initializePromise, await this._autoRefreshTokenTick();
			}, 0);
	}
	async _stopAutoRefresh() {
		this._debug("#_stopAutoRefresh()");
		const s = this.autoRefreshTicker;
		(this.autoRefreshTicker = null), s && clearInterval(s);
	}
	async startAutoRefresh() {
		this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
	}
	async stopAutoRefresh() {
		this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
	}
	async _autoRefreshTokenTick() {
		this._debug("#_autoRefreshTokenTick()", "begin");
		try {
			await this._acquireLock(0, async () => {
				try {
					const s = Date.now();
					try {
						return await this._useSession(async (a) => {
							const {
								data: { session: l },
							} = a;
							if (!l || !l.refresh_token || !l.expires_at) {
								this._debug("#_autoRefreshTokenTick()", "no session");
								return;
							}
							const c = Math.floor((l.expires_at * 1e3 - s) / Bs);
							this._debug(
								"#_autoRefreshTokenTick()",
								`access token expires in ${c} ticks, a tick lasts ${Bs}ms, refresh threshold is ${Jo} ticks`,
							),
								c <= Jo && (await this._callRefreshToken(l.refresh_token));
						});
					} catch (a) {
						console.error(
							"Auto refresh tick failed with error. This is likely a transient error.",
							a,
						);
					}
				} finally {
					this._debug("#_autoRefreshTokenTick()", "end");
				}
			});
		} catch (s) {
			if (s.isAcquireTimeout || s instanceof Om)
				this._debug("auto refresh token tick lock not available");
			else throw s;
		}
	}
	async _handleVisibilityChange() {
		if (
			(this._debug("#_handleVisibilityChange()"),
			!Dt() || !window?.addEventListener)
		)
			return this.autoRefreshToken && this.startAutoRefresh(), !1;
		try {
			(this.visibilityChangedCallback = async () =>
				await this._onVisibilityChanged(!1)),
				window?.addEventListener(
					"visibilitychange",
					this.visibilityChangedCallback,
				),
				await this._onVisibilityChanged(!0);
		} catch (s) {
			console.error("_handleVisibilityChange", s);
		}
	}
	async _onVisibilityChanged(s) {
		const a = `#_onVisibilityChanged(${s})`;
		this._debug(a, "visibilityState", document.visibilityState),
			document.visibilityState === "visible"
				? (this.autoRefreshToken && this._startAutoRefresh(),
				  s ||
						(await this.initializePromise,
						await this._acquireLock(-1, async () => {
							if (document.visibilityState !== "visible") {
								this._debug(
									a,
									"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting",
								);
								return;
							}
							await this._recoverAndRefresh();
						})))
				: document.visibilityState === "hidden" &&
				  this.autoRefreshToken &&
				  this._stopAutoRefresh();
	}
	async _getUrlForProvider(s, a, l) {
		const c = [`provider=${encodeURIComponent(a)}`];
		if (
			(l?.redirectTo &&
				c.push(`redirect_to=${encodeURIComponent(l.redirectTo)}`),
			l?.scopes && c.push(`scopes=${encodeURIComponent(l.scopes)}`),
			this.flowType === "pkce")
		) {
			const [u, h] = await Ds(this.storage, this.storageKey),
				f = new URLSearchParams({
					code_challenge: `${encodeURIComponent(u)}`,
					code_challenge_method: `${encodeURIComponent(h)}`,
				});
			c.push(f.toString());
		}
		if (l?.queryParams) {
			const u = new URLSearchParams(l.queryParams);
			c.push(u.toString());
		}
		return (
			l?.skipBrowserRedirect &&
				c.push(`skip_http_redirect=${l.skipBrowserRedirect}`),
			`${s}?${c.join("&")}`
		);
	}
	async _unenroll(s) {
		try {
			return await this._useSession(async (a) => {
				var l;
				const { data: c, error: u } = a;
				return u
					? { data: null, error: u }
					: await Ce(
							this.fetch,
							"DELETE",
							`${this.url}/factors/${s.factorId}`,
							{
								headers: this.headers,
								jwt:
									(l = c?.session) === null || l === void 0
										? void 0
										: l.access_token,
							},
					  );
			});
		} catch (a) {
			if (Ne(a)) return { data: null, error: a };
			throw a;
		}
	}
	async _enroll(s) {
		try {
			return await this._useSession(async (a) => {
				var l, c;
				const { data: u, error: h } = a;
				if (h) return { data: null, error: h };
				const f = Object.assign(
						{ friendly_name: s.friendlyName, factor_type: s.factorType },
						s.factorType === "phone"
							? { phone: s.phone }
							: { issuer: s.issuer },
					),
					{ data: p, error: y } = await Ce(
						this.fetch,
						"POST",
						`${this.url}/factors`,
						{
							body: f,
							headers: this.headers,
							jwt:
								(l = u?.session) === null || l === void 0
									? void 0
									: l.access_token,
						},
					);
				return y
					? { data: null, error: y }
					: (s.factorType === "totp" &&
							!((c = p?.totp) === null || c === void 0) &&
							c.qr_code &&
							(p.totp.qr_code = `data:image/svg+xml;utf-8,${p.totp.qr_code}`),
					  { data: p, error: null });
			});
		} catch (a) {
			if (Ne(a)) return { data: null, error: a };
			throw a;
		}
	}
	async _verify(s) {
		return this._acquireLock(-1, async () => {
			try {
				return await this._useSession(async (a) => {
					var l;
					const { data: c, error: u } = a;
					if (u) return { data: null, error: u };
					const { data: h, error: f } = await Ce(
						this.fetch,
						"POST",
						`${this.url}/factors/${s.factorId}/verify`,
						{
							body: { code: s.code, challenge_id: s.challengeId },
							headers: this.headers,
							jwt:
								(l = c?.session) === null || l === void 0
									? void 0
									: l.access_token,
						},
					);
					return f
						? { data: null, error: f }
						: (await this._saveSession(
								Object.assign(
									{ expires_at: Math.round(Date.now() / 1e3) + h.expires_in },
									h,
								),
						  ),
						  await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", h),
						  { data: h, error: f });
				});
			} catch (a) {
				if (Ne(a)) return { data: null, error: a };
				throw a;
			}
		});
	}
	async _challenge(s) {
		return this._acquireLock(-1, async () => {
			try {
				return await this._useSession(async (a) => {
					var l;
					const { data: c, error: u } = a;
					return u
						? { data: null, error: u }
						: await Ce(
								this.fetch,
								"POST",
								`${this.url}/factors/${s.factorId}/challenge`,
								{
									body: { channel: s.channel },
									headers: this.headers,
									jwt:
										(l = c?.session) === null || l === void 0
											? void 0
											: l.access_token,
								},
						  );
				});
			} catch (a) {
				if (Ne(a)) return { data: null, error: a };
				throw a;
			}
		});
	}
	async _challengeAndVerify(s) {
		const { data: a, error: l } = await this._challenge({
			factorId: s.factorId,
		});
		return l
			? { data: null, error: l }
			: await this._verify({
					factorId: s.factorId,
					challengeId: a.id,
					code: s.code,
			  });
	}
	async _listFactors() {
		const {
			data: { user: s },
			error: a,
		} = await this.getUser();
		if (a) return { data: null, error: a };
		const l = s?.factors || [],
			c = l.filter((h) => h.factor_type === "totp" && h.status === "verified"),
			u = l.filter((h) => h.factor_type === "phone" && h.status === "verified");
		return { data: { all: l, totp: c, phone: u }, error: null };
	}
	async _getAuthenticatorAssuranceLevel() {
		return this._acquireLock(
			-1,
			async () =>
				await this._useSession(async (s) => {
					var a, l;
					const {
						data: { session: c },
						error: u,
					} = s;
					if (u) return { data: null, error: u };
					if (!c)
						return {
							data: {
								currentLevel: null,
								nextLevel: null,
								currentAuthenticationMethods: [],
							},
							error: null,
						};
					const { payload: h } = To(c.access_token);
					let f = null;
					h.aal && (f = h.aal);
					let p = f;
					((l =
						(a = c.user.factors) === null || a === void 0
							? void 0
							: a.filter((v) => v.status === "verified")) !== null &&
					l !== void 0
						? l
						: []
					).length > 0 && (p = "aal2");
					const g = h.amr || [];
					return {
						data: {
							currentLevel: f,
							nextLevel: p,
							currentAuthenticationMethods: g,
						},
						error: null,
					};
				}),
		);
	}
	async fetchJwk(s, a = { keys: [] }) {
		let l = a.keys.find((h) => h.kid === s);
		if (
			l ||
			((l = this.jwks.keys.find((h) => h.kid === s)),
			l && this.jwks_cached_at + P0 > Date.now())
		)
			return l;
		const { data: c, error: u } = await Ce(
			this.fetch,
			"GET",
			`${this.url}/.well-known/jwks.json`,
			{ headers: this.headers },
		);
		if (u) throw u;
		if (!c.keys || c.keys.length === 0) throw new Vn("JWKS is empty");
		if (
			((this.jwks = c),
			(this.jwks_cached_at = Date.now()),
			(l = c.keys.find((h) => h.kid === s)),
			!l)
		)
			throw new Vn("No matching signing key found in JWKS");
		return l;
	}
	async getClaims(s, a = { keys: [] }) {
		try {
			let l = s;
			if (!l) {
				const { data: T, error: D } = await this.getSession();
				if (D || !T.session) return { data: null, error: D };
				l = T.session.access_token;
			}
			const {
				header: c,
				payload: u,
				signature: h,
				raw: { header: f, payload: p },
			} = To(l);
			if (
				(Z0(u.exp),
				!c.kid ||
					c.alg === "HS256" ||
					!("crypto" in globalThis && "subtle" in globalThis.crypto))
			) {
				const { error: T } = await this.getUser(l);
				if (T) throw T;
				return { data: { claims: u, header: c, signature: h }, error: null };
			}
			const y = ey(c.alg),
				g = await this.fetchJwk(c.kid, a),
				v = await crypto.subtle.importKey("jwk", g, y, !0, ["verify"]);
			if (!(await crypto.subtle.verify(y, v, h, U0(`${f}.${p}`))))
				throw new Vn("Invalid JWT signature");
			return { data: { claims: u, header: c, signature: h }, error: null };
		} catch (l) {
			if (Ne(l)) return { data: null, error: l };
			throw l;
		}
	}
}
Yn.nextInstanceID = 0;
const gy = Yn;
class yy extends gy {
	constructor(s) {
		super(s);
	}
}
var vy = function (i, s, a, l) {
	function c(u) {
		return u instanceof a
			? u
			: new a(function (h) {
					h(u);
			  });
	}
	return new (a || (a = Promise))(function (u, h) {
		function f(g) {
			try {
				y(l.next(g));
			} catch (v) {
				h(v);
			}
		}
		function p(g) {
			try {
				y(l.throw(g));
			} catch (v) {
				h(v);
			}
		}
		function y(g) {
			g.done ? u(g.value) : c(g.value).then(f, p);
		}
		y((l = l.apply(i, s || [])).next());
	});
};
class by {
	constructor(s, a, l) {
		var c, u, h;
		if (((this.supabaseUrl = s), (this.supabaseKey = a), !s))
			throw new Error("supabaseUrl is required.");
		if (!a) throw new Error("supabaseKey is required.");
		const f = N0(s),
			p = new URL(f);
		(this.realtimeUrl = new URL("realtime/v1", p)),
			(this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
				"http",
				"ws",
			)),
			(this.authUrl = new URL("auth/v1", p)),
			(this.storageUrl = new URL("storage/v1", p)),
			(this.functionsUrl = new URL("functions/v1", p));
		const y = `sb-${p.hostname.split(".")[0]}-auth-token`,
			g = {
				db: p0,
				realtime: g0,
				auth: Object.assign(Object.assign({}, x0), { storageKey: y }),
				global: f0,
			},
			v = k0(l ?? {}, g);
		(this.storageKey =
			(c = v.auth.storageKey) !== null && c !== void 0 ? c : ""),
			(this.headers = (u = v.global.headers) !== null && u !== void 0 ? u : {}),
			v.accessToken
				? ((this.accessToken = v.accessToken),
				  (this.auth = new Proxy(
						{},
						{
							get: (w, T) => {
								throw new Error(
									`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(
										T,
									)} is not possible`,
								);
							},
						},
				  )))
				: (this.auth = this._initSupabaseAuthClient(
						(h = v.auth) !== null && h !== void 0 ? h : {},
						this.headers,
						v.global.fetch,
				  )),
			(this.fetch = j0(a, this._getAccessToken.bind(this), v.global.fetch)),
			(this.realtime = this._initRealtimeClient(
				Object.assign(
					{
						headers: this.headers,
						accessToken: this._getAccessToken.bind(this),
					},
					v.realtime,
				),
			)),
			(this.rest = new Dg(new URL("rest/v1", p).href, {
				headers: this.headers,
				schema: v.db.schema,
				fetch: this.fetch,
			})),
			v.accessToken || this._listenForAuthEvents();
	}
	get functions() {
		return new Eg(this.functionsUrl.href, {
			headers: this.headers,
			customFetch: this.fetch,
		});
	}
	get storage() {
		return new d0(this.storageUrl.href, this.headers, this.fetch);
	}
	from(s) {
		return this.rest.from(s);
	}
	schema(s) {
		return this.rest.schema(s);
	}
	rpc(s, a = {}, l = {}) {
		return this.rest.rpc(s, a, l);
	}
	channel(s, a = { config: {} }) {
		return this.realtime.channel(s, a);
	}
	getChannels() {
		return this.realtime.getChannels();
	}
	removeChannel(s) {
		return this.realtime.removeChannel(s);
	}
	removeAllChannels() {
		return this.realtime.removeAllChannels();
	}
	_getAccessToken() {
		var s, a;
		return vy(this, void 0, void 0, function* () {
			if (this.accessToken) return yield this.accessToken();
			const { data: l } = yield this.auth.getSession();
			return (a =
				(s = l.session) === null || s === void 0 ? void 0 : s.access_token) !==
				null && a !== void 0
				? a
				: null;
		});
	}
	_initSupabaseAuthClient(
		{
			autoRefreshToken: s,
			persistSession: a,
			detectSessionInUrl: l,
			storage: c,
			storageKey: u,
			flowType: h,
			lock: f,
			debug: p,
		},
		y,
		g,
	) {
		const v = {
			Authorization: `Bearer ${this.supabaseKey}`,
			apikey: `${this.supabaseKey}`,
		};
		return new yy({
			url: this.authUrl.href,
			headers: Object.assign(Object.assign({}, v), y),
			storageKey: u,
			autoRefreshToken: s,
			persistSession: a,
			detectSessionInUrl: l,
			storage: c,
			flowType: h,
			lock: f,
			debug: p,
			fetch: g,
			hasCustomAuthorizationHeader: "Authorization" in this.headers,
		});
	}
	_initRealtimeClient(s) {
		return new Qg(
			this.realtimeUrl.href,
			Object.assign(Object.assign({}, s), {
				params: Object.assign({ apikey: this.supabaseKey }, s?.params),
			}),
		);
	}
	_listenForAuthEvents() {
		return this.auth.onAuthStateChange((a, l) => {
			this._handleTokenChanged(a, "CLIENT", l?.access_token);
		});
	}
	_handleTokenChanged(s, a, l) {
		(s === "TOKEN_REFRESHED" || s === "SIGNED_IN") &&
		this.changedAccessToken !== l
			? (this.changedAccessToken = l)
			: s === "SIGNED_OUT" &&
			  (this.realtime.setAuth(),
			  a == "STORAGE" && this.auth.signOut(),
			  (this.changedAccessToken = void 0));
	}
}
const Zo = (i, s, a) => new by(i, s, a);
let xi;
const jy = new Uint8Array(16);
function wy() {
	if (
		!xi &&
		((xi =
			typeof crypto < "u" &&
			crypto.getRandomValues &&
			crypto.getRandomValues.bind(crypto)),
		!xi)
	)
		throw new Error(
			"crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
		);
	return xi(jy);
}
const st = [];
for (let i = 0; i < 256; ++i) st.push((i + 256).toString(16).slice(1));
function Ny(i, s = 0) {
	return (
		st[i[s + 0]] +
		st[i[s + 1]] +
		st[i[s + 2]] +
		st[i[s + 3]] +
		"-" +
		st[i[s + 4]] +
		st[i[s + 5]] +
		"-" +
		st[i[s + 6]] +
		st[i[s + 7]] +
		"-" +
		st[i[s + 8]] +
		st[i[s + 9]] +
		"-" +
		st[i[s + 10]] +
		st[i[s + 11]] +
		st[i[s + 12]] +
		st[i[s + 13]] +
		st[i[s + 14]] +
		st[i[s + 15]]
	);
}
const ky =
		typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
	Gh = { randomUUID: ky };
function vi(i, s, a) {
	if (Gh.randomUUID && !i) return Gh.randomUUID();
	i = i || {};
	const l = i.random || (i.rng || wy)();
	return (l[6] = (l[6] & 15) | 64), (l[8] = (l[8] & 63) | 128), Ny(l);
}
const Sy = "https://tidnmzsivsthwwcfdzyo.supabase.co",
	Ey =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpZG5tenNpdnN0aHd3Y2ZkenlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3MjE5NTgsImV4cCI6MjA2NjI5Nzk1OH0.Sr1gSZ2qtoff7gmulkT8uIzB8eL7gqKUUNVj82OqHog",
	ae = Zo(Sy, Ey, {
		auth: {
			autoRefreshToken: !0,
			persistSession: !0,
			detectSessionInUrl: !0,
			flowType: "pkce",
		},
	}),
	Bt = [
		"București S1",
		"București S2",
		"București S3",
		"București S4",
		"București S5",
		"București S6",
		"Abrud",
		"Adjud",
		"Agnita",
		"Aiud",
		"Alba Iulia",
		"Aleșd",
		"Alexandria",
		"Amara",
		"Anina",
		"Arad",
		"Ardud",
		"Avrig",
		"Azuga",
		"Bacău",
		"Baia de Aramă",
		"Baia de Arieș",
		"Baia Mare",
		"Baia Sprie",
		"Băbeni",
		"Băicoi",
		"Băile Felix",
		"Băile Govora",
		"Băile Herculane",
		"Băile Olănești",
		"Băile Tușnad",
		"Bălan",
		"Bălcești",
		"Bălți",
		"Balș",
		"Băneasa",
		"Baraolt",
		"Bârlad",
		"Bechet",
		"Beclean",
		"Beiuș",
		"Bistrița",
		"Bistrița Bârgăului",
		"Blaj",
		"Bocșa",
		"Bolintin-Vale",
		"Borșa",
		"Botoșani",
		"Brad",
		"Brăila",
		"Bragadiru",
		"Breaza",
		"Brezoi",
		"Broșteni",
		"Buftea",
		"Buhusi",
		"Bumbești-Jiu",
		"Buzău",
		"Bușteni",
		"Călan",
		"Călărași",
		"Câmpeni",
		"Câmpia Turzii",
		"Câmpina",
		"Câmpulung",
		"Câmpulung Moldovenesc",
		"Caracal",
		"Caransebeș",
		"Carei",
		"Cărbunești",
		"Cavnic",
		"Cehu Silvaniei",
		"Cernavodă",
		"Cernica",
		"Chitila",
		"Chișineu-Criș",
		"Ciurea",
		"Cluj-Napoca",
		"Codlea",
		"Comănești",
		"Constanța",
		"Copșa Mică",
		"Corabia",
		"Corbeanca",
		"Costești",
		"Costinești",
		"Covasna",
		"Craiova",
		"Cristuru Secuiesc",
		"Curtea de Argeș",
		"Curtici",
		"Dăbuleni",
		"Darabani",
		"Dărmănești",
		"Dej",
		"Deta",
		"Deva",
		"Domnești",
		"Dorohoi",
		"Drobeta-Turnu Severin",
		"Dumbrăvița",
		"Dumbrăveni",
		"Eforie",
		"Eforie Nord",
		"Eforie Sud",
		"Făgăraș",
		"Făget",
		"Fălticeni",
		"Făurei",
		"Feleacu",
		"Fetești",
		"Filiași",
		"Florești",
		"Focșani",
		"Fundulea",
		"Galați",
		"Găești",
		"Gătaia",
		"Geoagiu",
		"Gherla",
		"Gheorgheni",
		"Ghimbav",
		"Ghiroda",
		"Gilău",
		"Giurgiu",
		"Glina",
		"Giroc",
		"Gura Humorului",
		"Hațeg",
		"Horezu",
		"Huedin",
		"Hunedoara",
		"Huși",
		"Iași",
		"Ineu",
		"Însurăței",
		"Întorsura Buzăului",
		"Isaccea",
		"Jibou",
		"Jimbolia",
		"Jilava",
		"Jucu",
		"Kolozsvar",
		"Lehliu-Gară",
		"Luduș",
		"Lugoj",
		"Lupeni",
		"Măgurele",
		"Mamaia",
		"Mangalia",
		"Marghita",
		"Mediaș",
		"Medgidia",
		"Miercurea Ciuc",
		"Miercurea Nirajului",
		"Mihăilești",
		"Miroslava",
		"Mioveni",
		"Mizil",
		"Moinești",
		"Mogoșoaia",
		"Moșnița Nouă",
		"Moldova Nouă",
		"Motru",
		"Murgeni",
		"Murfatlar",
		"Nădlac",
		"Năsăud",
		"Năvodari",
		"Negrești",
		"Negrești-Oaș",
		"Nehoiu",
		"Neptun",
		"Nucet",
		"Ocna Mureș",
		"Ocna Sibiului",
		"Odobești",
		"Odorheiu Secuiesc",
		"Olimp",
		"Oltenița",
		"Onești",
		"Oradea",
		"Orăștie",
		"Oravița",
		"Orșova",
		"Otopeni",
		"Pașcani",
		"Pătârlagele",
		"Pâncota",
		"Peris",
		"Piatra Neamț",
		"Piatra-Olt",
		"Pișchia",
		"Pitești",
		"Plopeni",
		"Podu Iloaiei",
		"Popeci-Leordeni",
		"Popricani",
		"Predeal",
		"Pucioasa",
		"Răcari",
		"Rădăuți",
		"Râmnicu Sărat",
		"Râmnicu Vâlcea",
		"Rășinari",
		"Recaș",
		"Reghin",
		"Remetea",
		"Remetea Mare",
		"Reșița",
		"Rediu",
		"Roman",
		"Roșiorii de Vede",
		"Rovinari",
		"Rupea",
		"Săcele",
		"Săcueni",
		"Salonta",
		"Sângeorgiu de Pădure",
		"Sânnicolau Mare",
		"Sărmașu",
		"Satu Mare",
		"Săveni",
		"Scornicești",
		"Sebeș",
		"Sebiș",
		"Segarcea",
		"Sfântu Gheorghe",
		"Sibiu",
		"Sighetu Marmației",
		"Sighișoara",
		"Simeria",
		"Șimleu Silvaniei",
		"Ștefănești",
		"Sinaia",
		"Slănic",
		"Slănic Moldova",
		"Slatina",
		"Slobozia",
		"Snagov",
		"Solca",
		"Sovata",
		"Spătaru",
		"Strehaia",
		"Ștefanestii de Jos",
		"Suceava",
		"Sulina",
		"Tălmaciu",
		"Tășnad",
		"Târgu Cărbunești",
		"Târgu Frumos",
		"Târgu Jiu",
		"Târgu Lăpuș",
		"Târgu Mureș",
		"Târgu Neamț",
		"Târgu Ocna",
		"Târgu Secuiesc",
		"Târnăveni",
		"Târgoviște",
		"Tecuci",
		"Techirghiol",
		"Teiuș",
		"Timișoara",
		"Tismana",
		"Titu",
		"Tomești",
		"Toplița",
		"Tulcea",
		"Tunari",
		"Turda",
		"Turnu Măgurele",
		"Turnu Roșu",
		"Țăndărei",
		"Țicleni",
		"Țintea",
		"Țureni",
		"Uricani",
		"Urlați",
		"Urziceni",
		"Valea Lupului",
		"Valea lui Mihai",
		"Vaslui",
		"Vălenii de Munte",
		"Vatra Dornei",
		"Victoria",
		"Videle",
		"Vicovu de Sus",
		"Viișoara",
		"Vulcan",
		"Vânju Mare",
		"Zalău",
		"Zărnești",
		"Zimnicea",
		"Zlatna",
	],
	Kh = async (i, s) => {
		try {
			console.log("🔍 Checking if profile exists for user:", i.email);
			const { data: a, error: l } = await ae
				.from("profiles")
				.select("*")
				.eq("user_id", i.id)
				.single();
			if (a && !l)
				return console.log("✅ Profile already exists for user:", i.email), a;
			console.log("❌ Profile not found, creating new profile for:", i.email);
			const c = {
				user_id: i.id,
				name:
					s?.name ||
					i.user_metadata?.name ||
					i.email?.split("@")[0] ||
					"Utilizator",
				email: i.email,
				phone: s?.phone || i.user_metadata?.phone || "",
				location: s?.location || i.user_metadata?.location || "",
				seller_type:
					s?.sellerType || i.user_metadata?.sellerType || "individual",
				verified: !1,
				is_admin: i.email === "admin@nexar.ro",
			};
			console.log("📝 Creating profile with data:", c);
			const { data: u, error: h } = await ae
				.from("profiles")
				.insert([c])
				.select()
				.single();
			if (h) throw (console.error("❌ Error creating profile:", h), h);
			return console.log("✅ Profile created successfully:", u), u;
		} catch (a) {
			throw (console.error("💥 Error in ensureProfileExists:", a), a);
		}
	},
	$s = {
		signUp: async (i, s, a) => {
			try {
				console.log("🚀 Starting signup process for:", i);
				const { data: l, error: c } = await ae.auth.signUp({
					email: i,
					password: s,
					options: {
						data: a,
						emailRedirectTo: `${window.location.origin}/auth/confirm`,
					},
				});
				if (c)
					return console.error("❌ Signup error:", c), { data: l, error: c };
				if (l.user) {
					console.log("👤 User created, ensuring profile exists...");
					try {
						await Kh(l.user, a);
					} catch (u) {
						console.error("⚠️ Profile creation failed during signup:", u);
					}
				}
				return { data: l, error: c };
			} catch (l) {
				return console.error("💥 SignUp error:", l), { data: null, error: l };
			}
		},
		signIn: async (i, s) => {
			try {
				console.log("🔐 Starting signin process for:", i),
					await ae.auth.signOut();
				const { data: a, error: l } = await ae.auth.signInWithPassword({
					email: i,
					password: s,
				});
				if (l)
					return console.error("❌ Signin error:", l), { data: a, error: l };
				if (a.user) {
					console.log("✅ User signed in successfully:", a.user.email);
					try {
						const c = await Kh(a.user);
						if (c) {
							const u = {
								id: a.user.id,
								name: c.name,
								email: c.email,
								sellerType: c.seller_type,
								isAdmin: c.is_admin || a.user.email === "admin@nexar.ro",
								isLoggedIn: !0,
							};
							localStorage.setItem("user", JSON.stringify(u)),
								console.log("💾 User data saved to localStorage:", u);
						}
					} catch (c) {
						console.error("⚠️ Profile handling failed during signin:", c);
						const u = {
							id: a.user.id,
							name: a.user.email?.split("@")[0] || "Utilizator",
							email: a.user.email,
							sellerType: "individual",
							isAdmin: a.user.email === "admin@nexar.ro",
							isLoggedIn: !0,
						};
						localStorage.setItem("user", JSON.stringify(u));
					}
				}
				return { data: a, error: l };
			} catch (a) {
				return console.error("💥 SignIn error:", a), { data: null, error: a };
			}
		},
		signOut: async () => {
			console.log("👋 Signing out user..."), localStorage.removeItem("user");
			try {
				const { error: i } = await ae.auth.signOut();
				return (
					i &&
						(console.error("❌ Error during signOut:", i),
						localStorage.clear(),
						sessionStorage.clear()),
					setTimeout(() => {
						window.location.reload();
					}, 100),
					{ error: i }
				);
			} catch (i) {
				return (
					console.error("💥 Error in signOut:", i),
					localStorage.clear(),
					sessionStorage.clear(),
					{ error: i }
				);
			}
		},
		getCurrentUser: async () => {
			try {
				const {
					data: { user: i },
					error: s,
				} = await ae.auth.getUser();
				return s
					? (console.error("❌ Error getting current user:", s),
					  (s.message.includes("refresh") || s.message.includes("token")) &&
							(localStorage.removeItem("user"), sessionStorage.clear()),
					  null)
					: i;
			} catch (i) {
				return console.error("💥 Error in getCurrentUser:", i), null;
			}
		},
		resetPassword: async (i) => {
			console.log("🔑 Sending password reset email to:", i);
			try {
				const { data: s, error: a } = await ae.auth.resetPasswordForEmail(i, {
					redirectTo: `${window.location.origin}/auth/reset-password`,
				});
				return a
					? (console.error("❌ Error sending password reset email:", a),
					  { data: null, error: a })
					: (console.log("✅ Password reset email sent successfully"),
					  { data: s, error: null });
			} catch (s) {
				return (
					console.error("💥 Error sending password reset email:", s),
					{ data: null, error: s }
				);
			}
		},
		updatePassword: async (i) => {
			try {
				console.log("🔐 Updating password...");
				const { data: s, error: a } = await ae.auth.updateUser({ password: i });
				return a
					? (console.error("❌ Error updating password:", a),
					  { data: null, error: a })
					: (console.log("✅ Password updated successfully"),
					  { data: s, error: null });
			} catch (s) {
				return (
					console.error("💥 Error updating password:", s),
					{ data: null, error: s }
				);
			}
		},
		verifyEmailToken: async (i) => {
			try {
				console.log("🔍 Verifying email confirmation token");
				const { data: s, error: a } = await ae.auth.getSession();
				return a
					? (console.error("❌ Error verifying email token:", a),
					  { success: !1, error: a })
					: s?.session
					? (console.log("✅ Email confirmed successfully"),
					  { success: !0, user: s.session.user })
					: (console.error("❌ No session found after email confirmation"),
					  { success: !1, error: new Error("No session found") });
			} catch (s) {
				return (
					console.error("💥 Error in verifyEmailToken:", s),
					{ success: !1, error: s }
				);
			}
		},
	},
	Ci = {
		getAll: async (i) => {
			try {
				console.log("🔍 Fetching all listings from Supabase...");
				let s = ae
					.from("listings")
					.select("*")
					.eq("status", "active")
					.order("created_at", { ascending: !1 });
				i &&
					(i.category && (s = s.eq("category", i.category.toLowerCase())),
					i.brand && (s = s.eq("brand", i.brand)),
					i.priceMin && (s = s.gte("price", i.priceMin)),
					i.priceMax && (s = s.lte("price", i.priceMax)),
					i.yearMin && (s = s.gte("year", i.yearMin)),
					i.yearMax && (s = s.lte("year", i.yearMax)),
					i.location && (s = s.ilike("location", `%${i.location}%`)),
					i.sellerType && (s = s.eq("seller_type", i.sellerType)),
					i.condition && (s = s.eq("condition", i.condition)),
					i.fuel && (s = s.eq("fuel_type", i.fuel)),
					i.transmission && (s = s.eq("transmission", i.transmission)),
					i.engineMin && (s = s.gte("engine_capacity", i.engineMin)),
					i.engineMax && (s = s.lte("engine_capacity", i.engineMax)),
					i.mileageMax && (s = s.lte("mileage", i.mileageMax)),
					i.availability && (s = s.eq("availability", i.availability)));
				const { data: a, error: l } = await s;
				return l
					? (console.error("❌ Error fetching listings:", l),
					  { data: null, error: l })
					: (console.log(`✅ Successfully fetched ${a?.length || 0} listings`),
					  { data: a, error: null });
			} catch (s) {
				return (
					console.error("💥 Error in listings.getAll:", s),
					{ data: null, error: s }
				);
			}
		},
		getUserListings: async (i) => {
			try {
				console.log("🔍 Fetching user listings from Supabase...");
				const { data: s, error: a } = await ae
					.from("profiles")
					.select("id")
					.eq("user_id", i)
					.single();
				if (a || !s)
					return (
						console.error("❌ Error fetching user profile:", a),
						{ data: null, error: a || new Error("User profile not found") }
					);
				const { data: l, error: c } = await ae
					.from("listings")
					.select("*")
					.eq("seller_id", s.id)
					.order("created_at", { ascending: !1 });
				return c
					? (console.error("❌ Error fetching user listings:", c),
					  { data: null, error: c })
					: (console.log(
							`✅ Successfully fetched ${l?.length || 0} user listings`,
					  ),
					  { data: l, error: null });
			} catch (s) {
				return (
					console.error("💥 Error in listings.getUserListings:", s),
					{ data: null, error: s }
				);
			}
		},
		getAllForAdmin: async () => {
			try {
				console.log("🔍 Fetching ALL listings for admin...");
				const { data: i, error: s } = await ae
					.from("listings")
					.select(
						`
          *,
          profiles!listings_seller_id_fkey (
            name,
            email,
            seller_type,
            verified
          )
        `,
					)
					.order("created_at", { ascending: !1 });
				return s
					? (console.error("❌ Error fetching admin listings:", s),
					  { data: null, error: s })
					: (console.log(
							`✅ Successfully fetched ${i?.length || 0} listings for admin`,
					  ),
					  { data: i, error: null });
			} catch (i) {
				return (
					console.error("💥 Error in listings.getAllForAdmin:", i),
					{ data: null, error: i }
				);
			}
		},
		getById: async (i) => {
			try {
				const { data: s, error: a } = await ae
					.from("listings")
					.select("*")
					.eq("id", i)
					.single();
				return (
					s &&
						!a &&
						(await ae
							.from("listings")
							.update({ views_count: (s.views_count || 0) + 1 })
							.eq("id", i)),
					{ data: s, error: a }
				);
			} catch (s) {
				return (
					console.error("Error fetching listing:", s), { data: null, error: s }
				);
			}
		},
		create: async (i, s) => {
			try {
				console.log("🚀 Starting listing creation process...");
				const {
					data: { user: a },
				} = await ae.auth.getUser();
				if (!a) throw new Error("Utilizatorul nu este autentificat");
				console.log("👤 Current user:", a.email);
				const { data: l, error: c } = await ae
					.from("profiles")
					.select("id, name, seller_type")
					.eq("user_id", a.id)
					.single();
				if (c || !l)
					throw (
						(console.error("❌ Profile not found:", c),
						new Error(
							"Profilul utilizatorului nu a fost găsit. Te rugăm să-ți completezi profilul mai întâi.",
						))
					);
				console.log("✅ Profile found:", l);
				const u = [];
				if (s && s.length > 0) {
					console.log(`📸 Uploading ${s.length} images...`);
					for (const y of s) {
						const g = y.name.split(".").pop(),
							v = `${vi()}.${g}`,
							w = `${l.id}/${v}`;
						console.log(`📤 Uploading image: ${v}`);
						const { error: T, data: D } = await ae.storage
							.from("listing-images")
							.upload(w, y, { cacheControl: "3600", upsert: !1 });
						if (T) {
							console.error("❌ Error uploading image:", T);
							continue;
						}
						console.log("✅ Image uploaded:", D.path);
						const {
							data: { publicUrl: U },
						} = ae.storage.from("listing-images").getPublicUrl(w);
						console.log("🔗 Public URL:", U), u.push(U);
					}
					console.log(`✅ Uploaded ${u.length} images successfully`);
				}
				const h = {
					...i,
					id: vi(),
					seller_id: l.id,
					seller_name: l.name,
					seller_type: l.seller_type,
					images: u,
					status: "pending",
					views_count: 0,
					favorites_count: 0,
					featured: !1,
				};
				console.log("📝 Creating listing with data:", {
					...h,
					images: `${u.length} images`,
				});
				const { data: f, error: p } = await ae
					.from("listings")
					.insert([h])
					.select()
					.single();
				if (p)
					throw (
						(console.error("❌ Error creating listing:", p),
						new Error(`Eroare la crearea anunțului: ${p.message}`))
					);
				return (
					console.log("✅ Listing created successfully:", f.id),
					{ data: f, error: null }
				);
			} catch (a) {
				return (
					console.error("💥 Error in listings.create:", a),
					{ data: null, error: a }
				);
			}
		},
		update: async (i, s, a, l) => {
			try {
				console.log("🔄 Starting listing update process...");
				const { data: c, error: u } = await ae
					.from("listings")
					.select(
						"images, seller_id, seller_name, status, seller_type, availability",
					)
					.eq("id", i)
					.single();
				if (u || !c)
					throw (
						(console.error("❌ Error fetching current listing:", u),
						new Error(
							`Eroare la obținerea anunțului: ${
								u?.message || "Anunțul nu a fost găsit"
							}`,
						))
					);
				let h = [...(c.images || [])];
				if (l && l.length > 0) {
					console.log(`🗑️ Removing ${l.length} images...`),
						(h = h.filter((g) => !l.includes(g)));
					for (const g of l)
						try {
							const v = g.split("/"),
								w = v[v.length - 1],
								D = `${v[v.length - 2]}/${w}`;
							await ae.storage.from("listing-images").remove([D]),
								console.log(`✅ Removed image from storage: ${D}`);
						} catch (v) {
							console.error("⚠️ Error removing image from storage:", v);
						}
				}
				if (a && a.length > 0) {
					console.log(`📸 Uploading ${a.length} new images...`);
					for (const g of a) {
						const v = g.name.split(".").pop(),
							w = `${vi()}.${v}`,
							T = `${c.seller_id}/${w}`;
						console.log(`📤 Uploading image: ${w}`);
						const { error: D, data: U } = await ae.storage
							.from("listing-images")
							.upload(T, g, { cacheControl: "3600", upsert: !1 });
						if (D) {
							console.error("❌ Error uploading image:", D);
							continue;
						}
						console.log("✅ Image uploaded:", U.path);
						const {
							data: { publicUrl: A },
						} = ae.storage.from("listing-images").getPublicUrl(T);
						console.log("🔗 Public URL:", A), h.push(A);
					}
				}
				const f = {
					...s,
					images: h,
					updated_at: new Date().toISOString(),
					status: s.status || "pending",
				};
				if (
					(console.log("📝 Updating listing with data:", {
						...f,
						images: `${h.length} images`,
					}),
					!s.seller_name)
				)
					try {
						const {
							data: { user: g },
						} = await ae.auth.getUser();
						if (g) {
							const { data: v } = await ae
								.from("profiles")
								.select("name")
								.eq("id", c.seller_id)
								.single();
							v &&
								v.name !== c.seller_name &&
								((f.seller_name = v.name),
								console.log("✅ Updated seller name to:", v.name));
						}
					} catch (g) {
						console.error("⚠️ Error updating seller name:", g);
					}
				const { data: p, error: y } = await ae
					.from("listings")
					.update(f)
					.eq("id", i)
					.select();
				if (y)
					throw (
						(console.error("❌ Error updating listing:", y),
						new Error(`Eroare la actualizarea anunțului: ${y.message}`))
					);
				return (
					console.log("✅ Listing updated successfully:", i),
					{ data: p, error: null }
				);
			} catch (c) {
				return (
					console.error("💥 Error in listings.update:", c),
					{ data: null, error: c }
				);
			}
		},
		delete: async (i) => {
			try {
				const { data: s } = await ae
					.from("listings")
					.select("images")
					.eq("id", i)
					.single();
				if (s && s.images)
					for (const l of s.images)
						try {
							const c = l.split("/"),
								u = c[c.length - 1],
								f = `${c[c.length - 2]}/${u}`;
							await ae.storage.from("listing-images").remove([f]),
								console.log(`✅ Removed image from storage: ${f}`);
						} catch (c) {
							console.error("Error removing image:", c);
						}
				const { error: a } = await ae.from("listings").delete().eq("id", i);
				return { error: a };
			} catch (s) {
				return console.error("Error deleting listing:", s), { error: s };
			}
		},
	},
	Yh = {
		getById: async (i) => {
			try {
				const { data: s, error: a } = await ae
					.from("profiles")
					.select("*")
					.eq("user_id", i)
					.single();
				return { data: s, error: a };
			} catch (s) {
				return (
					console.error("Error fetching profile:", s), { data: null, error: s }
				);
			}
		},
		update: async (i, s) => {
			try {
				const { data: a, error: l } = await ae
					.from("profiles")
					.update(s)
					.eq("user_id", i)
					.select();
				if (l)
					return (
						console.error("Error updating profile:", l), { data: a, error: l }
					);
				if (s.name && a && a.length > 0) {
					const c = a[0],
						{ error: u } = await ae
							.from("listings")
							.update({ seller_name: c.name })
							.eq("seller_id", c.id);
					u
						? console.error("Error updating seller name in listings:", u)
						: console.log("✅ Updated seller name in all listings");
				}
				return { data: a, error: l };
			} catch (a) {
				return (
					console.error("Error updating profile:", a), { data: null, error: a }
				);
			}
		},
		uploadAvatar: async (i, s) => {
			try {
				const a = s.name.split(".").pop(),
					l = `${vi()}.${a}`,
					c = `${i}/${l}`,
					{ error: u } = await ae.storage.from("profile-images").upload(c, s);
				if (u) return { error: u };
				const {
						data: { publicUrl: h },
					} = ae.storage.from("profile-images").getPublicUrl(c),
					{ data: f, error: p } = await ae
						.from("profiles")
						.update({ avatar_url: h })
						.eq("user_id", i)
						.select();
				return { data: f, error: p };
			} catch (a) {
				return (
					console.error("Error uploading avatar:", a), { data: null, error: a }
				);
			}
		},
	},
	Rr = {
		isAdmin: async () => {
			try {
				console.log("🔍 Checking admin status...");
				const i = localStorage.getItem("user");
				if (i)
					try {
						const a = JSON.parse(i);
						if (a && a.isAdmin)
							return console.log("✅ User is admin based on localStorage"), !0;
					} catch (a) {
						console.error("Error parsing user from localStorage:", a);
					}
				const {
					data: { user: s },
				} = await ae.auth.getUser();
				if (!s) return console.log("❌ No authenticated user"), !1;
				if (
					(console.log("👤 Checking admin status for user:", s.email),
					s.email === "admin@nexar.ro")
				) {
					console.log("✅ User is admin based on email");
					try {
						const a = localStorage.getItem("user");
						if (a) {
							const l = JSON.parse(a);
							(l.isAdmin = !0), localStorage.setItem("user", JSON.stringify(l));
						}
					} catch (a) {
						console.error("Error updating localStorage:", a);
					}
					return !0;
				}
				try {
					const { data: a, error: l } = await ae
						.from("profiles")
						.select("is_admin")
						.eq("user_id", s.id)
						.single();
					if (!l && a) {
						console.log("✅ Profile found, is_admin:", a.is_admin);
						try {
							const c = localStorage.getItem("user");
							if (c) {
								const u = JSON.parse(c);
								(u.isAdmin = a.is_admin),
									localStorage.setItem("user", JSON.stringify(u));
							}
						} catch (c) {
							console.error("Error updating localStorage:", c);
						}
						return a.is_admin || !1;
					} else
						return (
							console.log("⚠️ Profile not found or error:", l),
							s.email === "admin@nexar.ro"
						);
				} catch (a) {
					return (
						console.error(
							"⚠️ Error checking profile, using email fallback:",
							a,
						),
						s.email === "admin@nexar.ro"
					);
				}
			} catch (i) {
				return console.error("💥 Error checking admin status:", i), !1;
			}
		},
		getAllListings: async () => {
			try {
				console.log("🔍 Fetching ALL listings for admin...");
				const { data: i, error: s } = await ae
					.from("listings")
					.select(
						`
          *,
          profiles!listings_seller_id_fkey (
            name,
            email,
            seller_type,
            verified
          )
        `,
					)
					.order("created_at", { ascending: !1 });
				return s
					? (console.error("❌ Error fetching admin listings:", s),
					  { data: null, error: s })
					: (console.log(
							`✅ Successfully fetched ${i?.length || 0} listings for admin`,
					  ),
					  { data: i, error: null });
			} catch (i) {
				return (
					console.error("💥 Error in listings.getAllForAdmin:", i),
					{ data: null, error: i }
				);
			}
		},
		updateListingStatus: async (i, s) => {
			try {
				console.log("📝 Updating listing status:", i, "to", s);
				const { data: a, error: l } = await ae
					.from("listings")
					.update({ status: s })
					.eq("id", i)
					.select();
				return l
					? (console.error("❌ Error updating listing status:", l),
					  { data: null, error: l })
					: (console.log("✅ Listing status updated successfully"),
					  { data: a, error: null });
			} catch (a) {
				return (
					console.error("💥 Error in updateListingStatus:", a),
					{ data: null, error: a }
				);
			}
		},
		deleteListing: async (i) => {
			try {
				console.log("🗑️ Deleting listing:", i);
				const { data: s } = await ae
					.from("listings")
					.select("images")
					.eq("id", i)
					.single();
				if (s && s.images)
					for (const l of s.images)
						try {
							const c = l.split("/"),
								u = c[c.length - 1],
								f = `${c[c.length - 2]}/${u}`;
							await ae.storage.from("listing-images").remove([f]),
								console.log(`✅ Removed image from storage: ${f}`);
						} catch (c) {
							console.error("Error removing image:", c);
						}
				const { error: a } = await ae.from("listings").delete().eq("id", i);
				return a
					? (console.error("❌ Error deleting listing:", a), { error: a })
					: (console.log("✅ Listing deleted successfully"), { error: null });
			} catch (s) {
				return console.error("💥 Error in deleteListing:", s), { error: s };
			}
		},
		getAllUsers: async () => {
			try {
				const { data: i, error: s } = await ae
					.from("profiles")
					.select("*")
					.order("created_at", { ascending: !1 });
				return { data: i, error: s };
			} catch (i) {
				return (
					console.error("Error fetching users:", i), { data: null, error: i }
				);
			}
		},
		toggleUserStatus: async (i, s) => {
			try {
				const { data: a, error: l } = await ae
					.from("profiles")
					.update({ suspended: s })
					.eq("user_id", i)
					.select();
				return { data: a, error: l };
			} catch (a) {
				return (
					console.error("Error toggling user status:", a),
					{ data: null, error: a }
				);
			}
		},
		deleteUser: async (i) => {
			try {
				const { data: s, error: a } = await ae.rpc("delete_user_complete", {
					user_id_to_delete: i,
				});
				return a
					? (console.error("Error deleting user:", a), { error: a })
					: s
					? (console.log(
							`Successfully deleted user ${i} and all associated data`,
					  ),
					  { error: null })
					: { error: new Error("Failed to delete user") };
			} catch (s) {
				return console.error("Error deleting user:", s), { error: s };
			}
		},
	},
	Im = async () => {
		try {
			const {
				data: { user: i },
			} = await ae.auth.getUser();
			return !!i;
		} catch (i) {
			return console.error("Error checking authentication:", i), !1;
		}
	},
	_y = async () => {
		try {
			const { error: i } = await ae
				.from("profiles")
				.select("count", { count: "exact", head: !0 });
			return !i;
		} catch (i) {
			return console.error("Supabase connection error:", i), !1;
		}
	},
	Cy = () => {
		const [i, s] = S.useState(!1),
			[a, l] = S.useState(!1),
			[c, u] = S.useState(null),
			[h, f] = S.useState(null),
			[p, y] = S.useState(!0),
			[g, v] = S.useState(!1),
			w = Jt(),
			T = Nt();
		S.useEffect(() => {
			D();
		}, []);
		const D = async () => {
				try {
					y(!0);
					const ee = await _y();
					if ((f(ee), !ee)) {
						console.warn("⚠️ Supabase connection failed"), y(!1);
						return;
					}
					const {
						data: { user: N },
					} = await ae.auth.getUser();
					if (N) {
						console.log("👤 Found authenticated user:", N.email);
						const G = await Rr.isAdmin();
						v(G);
						const { data: X, error: ne } = await ae
							.from("profiles")
							.select("*")
							.eq("user_id", N.id)
							.single();
						if (!ne && X) {
							console.log("✅ Profile found:", X.name);
							const le = {
								id: N.id,
								name: X.name,
								email: X.email,
								sellerType: X.seller_type,
								isAdmin: X.is_admin || N.email === "admin@nexar.ro",
								isLoggedIn: !0,
							};
							u(le), localStorage.setItem("user", JSON.stringify(le));
						} else {
							console.warn("⚠️ Profile not found for authenticated user");
							try {
								const { data: le } = await ae
									.from("profiles")
									.insert([
										{
											user_id: N.id,
											name: N.email?.split("@")[0] || "Utilizator",
											email: N.email,
											seller_type: "individual",
											is_admin: N.email === "admin@nexar.ro",
										},
									])
									.select()
									.single();
								if (le) {
									const ie = {
										id: N.id,
										name: le.name,
										email: le.email,
										sellerType: le.seller_type,
										isAdmin: le.is_admin || N.email === "admin@nexar.ro",
										isLoggedIn: !0,
									};
									u(ie), localStorage.setItem("user", JSON.stringify(ie));
								} else
									u({
										id: N.id,
										email: N.email,
										isAdmin: N.email === "admin@nexar.ro",
										isLoggedIn: !0,
									});
							} catch (le) {
								console.error("❌ Error creating profile:", le),
									u({
										id: N.id,
										email: N.email,
										isAdmin: N.email === "admin@nexar.ro",
										isLoggedIn: !0,
									});
							}
						}
					} else
						console.log("👤 No authenticated user"),
							u(null),
							localStorage.removeItem("user");
				} catch (ee) {
					console.error("💥 Error checking auth state:", ee),
						u(null),
						localStorage.removeItem("user");
				} finally {
					y(!1);
				}
				const {
					data: { subscription: z },
				} = ae.auth.onAuthStateChange(async (ee, N) => {
					if (
						(console.log("🔄 Auth state changed:", ee, N?.user?.email),
						ee === "SIGNED_IN" && N?.user)
					) {
						const G = await Rr.isAdmin();
						v(G);
						const { data: X, error: ne } = await ae
							.from("profiles")
							.select("*")
							.eq("user_id", N.user.id)
							.single();
						if (!ne && X) {
							const le = {
								id: N.user.id,
								name: X.name,
								email: X.email,
								sellerType: X.seller_type,
								isAdmin: X.is_admin || N.user.email === "admin@nexar.ro",
								isLoggedIn: !0,
							};
							u(le),
								localStorage.setItem("user", JSON.stringify(le)),
								w.pathname === "/auth" && T("/");
						} else
							try {
								const { data: le } = await ae
									.from("profiles")
									.insert([
										{
											user_id: N.user.id,
											name: N.user.email?.split("@")[0] || "Utilizator",
											email: N.user.email,
											seller_type: "individual",
											is_admin: N.user.email === "admin@nexar.ro",
										},
									])
									.select()
									.single();
								if (le) {
									const ie = {
										id: N.user.id,
										name: le.name,
										email: le.email,
										sellerType: le.seller_type,
										isAdmin: le.is_admin || N.user.email === "admin@nexar.ro",
										isLoggedIn: !0,
									};
									u(ie),
										localStorage.setItem("user", JSON.stringify(ie)),
										w.pathname === "/auth" && T("/");
								} else
									u({
										id: N.user.id,
										email: N.user.email,
										isAdmin: N.user.email === "admin@nexar.ro",
										isLoggedIn: !0,
									});
							} catch (le) {
								console.error("❌ Error creating profile:", le),
									u({
										id: N.user.id,
										email: N.user.email,
										isAdmin: N.user.email === "admin@nexar.ro",
										isLoggedIn: !0,
									});
							}
						y(!1);
					} else
						ee === "SIGNED_OUT" &&
							(u(null), v(!1), localStorage.removeItem("user"), y(!1));
				});
				return () => {
					z.unsubscribe();
				};
			},
			U = async () => {
				try {
					y(!0),
						console.log("🔄 Logging out user..."),
						localStorage.removeItem("user");
					const { error: z } = await $s.signOut();
					z
						? (console.error("❌ Error during logout:", z),
						  alert(`Eroare la deconectare: ${z.message}`))
						: (console.log("✅ User logged out successfully"),
						  u(null),
						  v(!1),
						  l(!1),
						  T("/"));
				} catch (z) {
					console.error("💥 Unexpected error during logout:", z),
						alert(
							"A apărut o eroare la deconectare. Te rugăm să încerci din nou.",
						);
				} finally {
					y(!1);
				}
			},
			A = () =>
				p
					? e.jsx("div", {
							className: "w-7 h-7 bg-gray-200 rounded-full animate-pulse",
					  })
					: c
					? e.jsx("button", {
							onClick: () => l(!a),
							className:
								"flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors",
							children: e.jsxs("div", {
								className: "flex items-center space-x-2",
								children: [
									e.jsx("div", {
										className:
											"w-7 h-7 bg-nexar-accent rounded-full flex items-center justify-center text-white font-semibold text-xs",
										children: c.name ? c.name.charAt(0).toUpperCase() : "U",
									}),
									e.jsxs("span", {
										className:
											"text-sm font-medium text-gray-700 hidden xl:inline",
										children: ["Bună, ", c.name || "Utilizator"],
									}),
								],
							}),
					  })
					: e.jsx("button", {
							onClick: () => l(!a),
							className:
								"flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors",
							children: e.jsx(Qn, { className: "h-5 w-5 text-gray-700" }),
					  });
		return e.jsx("header", {
			className:
				"bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50",
			children: e.jsxs("div", {
				className: "max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",
				children: [
					e.jsxs("div", {
						className: "flex justify-between items-center h-14 sm:h-16",
						children: [
							e.jsxs(ke, {
								to: "/",
								className: "flex items-center group min-w-0",
								onClick: (z) => {
									z.preventDefault(),
										window.scrollTo(0, 0),
										(window.location.href = "/");
								},
								children: [
									e.jsx("img", {
										src: "/Nexar - logo_black & red.png",
										alt: "Nexar",
										className: "h-20 sm:h-24 w-auto flex-shrink-0",
										onError: (z) => {
											const ee = z.currentTarget;
											if (ee.src.includes("Nexar - logo_black & red.png"))
												ee.src = "/nexar-logo.jpg";
											else if (ee.src.includes("nexar-logo.jpg"))
												ee.src = "/nexar-logo.png";
											else if (ee.src.includes("nexar-logo.png"))
												ee.src = "/image.png";
											else {
												ee.style.display = "none";
												const N = ee.nextElementSibling;
												N && (N.style.display = "block");
											}
										},
									}),
									e.jsx("div", {
										className:
											"hidden text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-nexar-accent",
										children: "NEXAR",
									}),
								],
							}),
							e.jsxs("nav", {
								className: "hidden lg:flex items-center space-x-1",
								children: [
									e.jsxs(ke, {
										to: "/adauga-anunt",
										className:
											"flex items-center space-x-2 bg-nexar-accent text-white px-3 xl:px-4 py-2 rounded-lg font-medium hover:bg-nexar-gold transition-all duration-200 text-sm",
										children: [
											e.jsx(vh, { className: "h-4 w-4" }),
											e.jsx("span", {
												className: "hidden xl:inline",
												children: "Adaugă Anunț",
											}),
											e.jsx("span", {
												className: "xl:hidden",
												children: "Adaugă",
											}),
										],
									}),
									e.jsxs("div", {
										className: "relative",
										children: [
											A(),
											a &&
												!p &&
												e.jsx("div", {
													className:
														"absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200 py-2 animate-scale-in",
													children: c
														? e.jsxs(e.Fragment, {
																children: [
																	e.jsx(ke, {
																		to: "/profil",
																		className:
																			"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors",
																		onClick: () => l(!1),
																		children: "Profilul Meu",
																	}),
																	g &&
																		e.jsx(ke, {
																			to: "/admin",
																			className:
																				"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors",
																			onClick: () => l(!1),
																			children: "Admin Panel",
																		}),
																	e.jsx("hr", { className: "my-2" }),
																	e.jsxs("button", {
																		onClick: U,
																		className:
																			"flex items-center space-x-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors",
																		disabled: p,
																		children: [
																			e.jsx(yh, { className: "h-4 w-4" }),
																			e.jsx("span", {
																				children: "Deconectează-te",
																			}),
																		],
																	}),
																],
														  })
														: e.jsx(ke, {
																to: "/auth",
																className:
																	"block px-4 py-2 text-sm text-gray-900 font-medium hover:bg-gray-50 transition-colors",
																onClick: () => l(!1),
																children: "Conectează-te",
														  }),
												}),
										],
									}),
								],
							}),
							e.jsx("button", {
								onClick: () => s(!i),
								className:
									"lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors",
								children: i
									? e.jsx(Ft, { className: "h-5 w-5" })
									: e.jsx(hg, { className: "h-5 w-5" }),
							}),
						],
					}),
					i &&
						e.jsx("div", {
							className:
								"lg:hidden py-4 border-t border-gray-200 animate-slide-up bg-white/95 backdrop-blur-md",
							children: e.jsxs("div", {
								className: "space-y-2",
								children: [
									e.jsxs(ke, {
										to: "/adauga-anunt",
										className:
											"flex items-center space-x-2 px-4 py-3 bg-nexar-accent text-white rounded-lg font-medium mx-0",
										onClick: () => s(!1),
										children: [
											e.jsx(vh, { className: "h-4 w-4" }),
											e.jsx("span", { children: "Adaugă Anunț" }),
										],
									}),
									p
										? e.jsx("div", {
												className:
													"px-4 py-3 text-gray-700 font-medium border-t border-gray-200 mt-2 pt-4",
												children: "Se încarcă...",
										  })
										: c
										? e.jsxs(e.Fragment, {
												children: [
													e.jsxs("div", {
														className:
															"px-4 py-3 text-gray-700 font-medium border-t border-gray-200 mt-2 pt-4",
														children: ["Bună, ", c.name || "Utilizator"],
													}),
													e.jsx(ke, {
														to: "/profil",
														className:
															"block px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors",
														onClick: () => s(!1),
														children: "Profilul Meu",
													}),
													g &&
														e.jsx(ke, {
															to: "/admin",
															className:
																"block px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors",
															onClick: () => s(!1),
															children: "Admin Panel",
														}),
													e.jsxs("button", {
														onClick: () => {
															U(), s(!1);
														},
														className:
															"flex items-center space-x-2 w-full text-left px-4 py-3 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-colors",
														disabled: p,
														children: [
															e.jsx(yh, { className: "h-4 w-4" }),
															e.jsx("span", { children: "Deconectează-te" }),
														],
													}),
												],
										  })
										: e.jsx(ke, {
												to: "/auth",
												className:
													"block px-4 py-3 rounded-lg font-medium text-gray-900 hover:bg-gray-100 transition-colors",
												onClick: () => s(!1),
												children: "Conectează-te",
										  }),
								],
							}),
						}),
				],
			}),
		});
	},
	Py = () => {
		const i = Nt(),
			s = () => {
				window.scrollTo(0, 0);
			},
			a = (l) => {
				i(`/?categorie=${l.toLowerCase()}`), window.scrollTo(0, 0);
			};
		return e.jsx("footer", {
			className: "bg-gray-900 text-white",
			children: e.jsxs("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",
				children: [
					e.jsxs("div", {
						className:
							"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8",
						children: [
							e.jsxs("div", {
								className: "space-y-4",
								children: [
									e.jsxs("div", {
										className: "flex items-center space-x-3",
										children: [
											e.jsx(ke, {
												to: "/",
												onClick: s,
												children: e.jsx("img", {
													loading: "lazy",
													src: "/Nexar - logo_white & red.png",
													alt: "Nexar Logo",
													className:
														"h-28 sm:h-32 md:h-36 w-auto hover:scale-105 transition-transform duration-300",
													onError: (l) => {
														const c = l.currentTarget;
														if (c.src.includes("Nexar - logo_white & red.png"))
															c.src = "/nexar-logo.png";
														else if (c.src.includes("nexar-logo.png"))
															c.src = "/image.png";
														else {
															c.style.display = "none";
															const u = c.nextElementSibling;
															u && (u.style.display = "block");
														}
													},
												}),
											}),
											e.jsx("div", {
												className:
													"hidden text-3xl font-bold text-nexar-accent",
												children: "NEXAR",
											}),
										],
									}),
									e.jsx("p", {
										className: "text-gray-300 leading-relaxed text-sm",
										children:
											"Cel mai premium marketplace pentru motociclete din România. Găsește sau vinde motocicleta perfectă cu încredere și siguranță.",
									}),
									e.jsxs("div", {
										className: "flex space-x-4",
										children: [
											e.jsx("a", {
												href: "https://www.facebook.com/nnexar.ro",
												target: "_blank",
												rel: "noopener noreferrer",
												className:
													"text-gray-300 hover:text-nexar-accent transition-colors",
												children: e.jsx(lg, { className: "h-5 w-5" }),
											}),
											e.jsx("a", {
												href: "https://www.instagram.com/nexar.ro/",
												target: "_blank",
												rel: "noopener noreferrer",
												className:
													"text-gray-300 hover:text-nexar-accent transition-colors",
												children: e.jsx(dg, { className: "h-5 w-5" }),
											}),
											e.jsx("a", {
												href: "https://www.tiktok.com/@nexar.ro",
												target: "_blank",
												rel: "noopener noreferrer",
												className:
													"text-gray-300 hover:text-nexar-accent transition-colors",
												children: e.jsx("svg", {
													className: "h-5 w-5",
													fill: "currentColor",
													viewBox: "0 0 24 24",
													children: e.jsx("path", {
														d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z",
													}),
												}),
											}),
										],
									}),
								],
							}),
							e.jsxs("div", {
								className: "space-y-4",
								children: [
									e.jsx("h3", {
										className: "text-lg font-semibold",
										children: "Navigare Rapidă",
									}),
									e.jsxs("ul", {
										className: "space-y-2",
										children: [
											e.jsx("li", {
												children: e.jsx(ke, {
													to: "/",
													className:
														"text-gray-300 hover:text-white transition-colors text-sm",
													onClick: s,
													children: "Toate Anunțurile",
												}),
											}),
											e.jsx("li", {
												children: e.jsx(ke, {
													to: "/adauga-anunt",
													className:
														"text-gray-300 hover:text-white transition-colors text-sm",
													onClick: s,
													children: "Adaugă Anunț",
												}),
											}),
											e.jsx("li", {
												children: e.jsx(ke, {
													to: "/despre",
													className:
														"text-gray-300 hover:text-white transition-colors text-sm",
													onClick: s,
													children: "Despre Noi",
												}),
											}),
											e.jsx("li", {
												children: e.jsx(ke, {
													to: "/contact",
													className:
														"text-gray-300 hover:text-white transition-colors text-sm",
													onClick: s,
													children: "Contact",
												}),
											}),
										],
									}),
								],
							}),
							e.jsxs("div", {
								className: "space-y-4",
								children: [
									e.jsx("h3", {
										className: "text-lg font-semibold",
										children: "Categorii Populare",
									}),
									e.jsxs("ul", {
										className: "space-y-2",
										children: [
											e.jsx("li", {
												children: e.jsx("button", {
													onClick: () => a("sport"),
													className:
														"text-gray-300 hover:text-white transition-colors text-sm text-left",
													children: "Motociclete Sport",
												}),
											}),
											e.jsx("li", {
												children: e.jsx("button", {
													onClick: () => a("touring"),
													className:
														"text-gray-300 hover:text-white transition-colors text-sm text-left",
													children: "Touring",
												}),
											}),
											e.jsx("li", {
												children: e.jsx("button", {
													onClick: () => a("cruiser"),
													className:
														"text-gray-300 hover:text-white transition-colors text-sm text-left",
													children: "Cruiser",
												}),
											}),
											e.jsx("li", {
												children: e.jsx("button", {
													onClick: () => a("adventure"),
													className:
														"text-gray-300 hover:text-white transition-colors text-sm text-left",
													children: "Adventure",
												}),
											}),
										],
									}),
								],
							}),
							e.jsxs("div", {
								className: "space-y-4",
								children: [
									e.jsx("h3", {
										className: "text-lg font-semibold",
										children: "Contact",
									}),
									e.jsxs("div", {
										className: "space-y-3",
										children: [
											e.jsxs("div", {
												className: "flex items-center space-x-3",
												children: [
													e.jsx(ss, { className: "h-4 w-4 text-nexar-accent" }),
													e.jsx("span", {
														className: "text-gray-300 text-sm",
														children: "0790 454 647",
													}),
												],
											}),
											e.jsxs("div", {
												className: "flex items-center space-x-3",
												children: [
													e.jsx(Ys, { className: "h-4 w-4 text-nexar-accent" }),
													e.jsx("span", {
														className: "text-gray-300 text-sm",
														children: "contact@nexar.ro",
													}),
												],
											}),
											e.jsxs("div", {
												className: "flex items-start space-x-3",
												children: [
													e.jsx(lr, {
														className: "h-4 w-4 text-nexar-accent mt-0.5",
													}),
													e.jsx("span", {
														className: "text-gray-300 text-sm",
														children:
															"Bulevardul Dem Radulescu 24, Râmnicu Vâlcea",
													}),
												],
											}),
											e.jsxs("div", {
												className: "flex items-start space-x-3",
												children: [
													e.jsx(Yt, {
														className: "h-4 w-4 text-nexar-accent mt-0.5",
													}),
													e.jsxs("div", {
														className: "text-gray-300 text-sm",
														children: [
															e.jsx("div", {
																children: "Luni - Vineri: 09:00 - 17:00",
															}),
															e.jsx("div", { children: "Weekend: Închis" }),
														],
													}),
												],
											}),
										],
									}),
								],
							}),
						],
					}),
					e.jsx("div", {
						className: "border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8",
						children: e.jsxs("div", {
							className: "flex flex-col space-y-4",
							children: [
								e.jsxs("div", {
									className:
										"flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0",
									children: [
										e.jsx("p", {
											className:
												"text-gray-300 text-sm text-center sm:text-left",
											children: "© 2024 Nexar.ro. Toate drepturile rezervate.",
										}),
										e.jsxs("div", {
											className:
												"flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2 text-sm",
											children: [
												e.jsx(ke, {
													to: "/termeni",
													className:
														"text-gray-300 hover:text-white transition-colors",
													onClick: s,
													children: "Termeni și Condiții",
												}),
												e.jsx(ke, {
													to: "/confidentialitate",
													className:
														"text-gray-300 hover:text-white transition-colors",
													onClick: s,
													children: "Politica de Confidențialitate",
												}),
												e.jsx(ke, {
													to: "/cookies",
													className:
														"text-gray-300 hover:text-white transition-colors",
													onClick: s,
													children: "Cookies",
												}),
											],
										}),
									],
								}),
								e.jsx("div", {
									className: "flex justify-center sm:justify-start",
									children: e.jsxs("a", {
										href: "https://nextsoft-it.com/",
										target: "_blank",
										rel: "noopener noreferrer",
										className:
											"inline-flex items-center space-x-2 group transition-all duration-500 ease-out transform-gpu relative",
										style: {
											filter: "drop-shadow(0 0 0px transparent)",
											transition:
												"all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
										},
										onMouseEnter: (l) => {
											const c = l.currentTarget;
											(c.style.filter =
												"drop-shadow(0 4px 20px rgba(215, 58, 48, 0.4))"),
												(c.style.transform = "translateY(-2px) scale(1.05)");
										},
										onMouseLeave: (l) => {
											const c = l.currentTarget;
											(c.style.filter = "drop-shadow(0 0 0px transparent)"),
												(c.style.transform = "translateY(0px) scale(1)");
										},
										onClick: (l) => {
											const c = l.currentTarget;
											(c.style.transform = "translateY(0px) scale(0.98)"),
												(c.style.filter =
													"drop-shadow(0 2px 15px rgba(215, 58, 48, 0.6))"),
												setTimeout(() => {
													(c.style.transform = "translateY(-3px) scale(1.08)"),
														(c.style.filter =
															"drop-shadow(0 6px 25px rgba(215, 58, 48, 0.5))");
												}, 150),
												setTimeout(() => {
													(c.style.transform = "translateY(0px) scale(1)"),
														(c.style.filter =
															"drop-shadow(0 0 0px transparent)");
												}, 300);
										},
										children: [
											e.jsx("span", {
												className:
													"text-gray-400 text-sm group-hover:text-nexar-accent transition-all duration-500 group-hover:font-semibold",
												children: "Dezvoltat de",
											}),
											e.jsxs("div", {
												className: "flex items-center space-x-2",
												children: [
													e.jsxs("span", {
														className:
															"text-gray-400 text-sm font-bold tracking-wide group-hover:text-nexar-accent transition-all duration-500 group-hover:tracking-wider relative",
														children: [
															"NEXT SOFT",
															e.jsx("span", {
																className:
																	"absolute bottom-0 left-0 w-0 h-0.5 bg-nexar-accent group-hover:w-full transition-all duration-500 ease-out",
															}),
														],
													}),
													e.jsx("img", {
														loading: "lazy",
														src: "/Next Soft Logo - ALB.png",
														alt: "NEXT SOFT",
														className:
															"h-12 w-12 sm:h-14 sm:w-14 object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 transform-gpu",
														style: {
															filter: "brightness(0.8) saturate(0.8)",
															transition:
																"all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
														},
														onMouseEnter: (l) => {
															(l.currentTarget.style.filter =
																"brightness(1.2) saturate(1.2)"),
																(l.currentTarget.style.transform =
																	"scale(1.15)");
														},
														onMouseLeave: (l) => {
															(l.currentTarget.style.filter =
																"brightness(0.8) saturate(0.8)"),
																(l.currentTarget.style.transform = "scale(1)");
														},
														onError: (l) => {
															l.currentTarget.style.display = "none";
														},
													}),
												],
											}),
											e.jsx("div", {
												className:
													"absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-nexar-accent/20 to-transparent blur-xl -z-10",
											}),
										],
									}),
								}),
							],
						}),
					}),
				],
			}),
		});
	},
	Ty = () => {
		const [i] = Xx(),
			[s, a] = S.useState(window.innerWidth >= 1024),
			[l, c] = S.useState(1),
			[u, h] = S.useState(""),
			[f, p] = S.useState({
				priceMin: "",
				priceMax: "",
				category: i.get("categorie") || "",
				brand: "",
				yearMin: "",
				yearMax: "",
				location: "",
			}),
			[y, g] = S.useState([]),
			[v, w] = S.useState(!0),
			[T, D] = S.useState(null),
			[U, A] = S.useState(!1),
			z = Nt(),
			ee = 10;
		S.useEffect(() => {
			N();
		}, [f, u, l]),
			S.useEffect(() => {
				const I = i.get("categorie");
				I && p((ve) => ({ ...ve, category: I }));
			}, [i]),
			S.useEffect(() => {
				const I = () => {
					A(!0);
				};
				return (
					window.addEventListener("scroll", I),
					() => window.removeEventListener("scroll", I)
				);
			}, []);
		const N = async () => {
			try {
				w(!0), D(null), console.log("🔄 Loading listings from Supabase...");
				const { data: I, error: ve } = await Ci.getAll();
				if (ve) {
					console.error("❌ Error loading listings:", ve),
						D("Nu s-au putut încărca anunțurile: " + ve.message),
						g([]);
					return;
				}
				console.log("✅ Loaded listings:", I?.length || 0);
				const re = (I || []).map((xe) => ({
					id: xe.id,
					title: xe.title,
					price: xe.price,
					year: xe.year,
					mileage: xe.mileage,
					location: xe.location,
					images: xe.images || [],
					category: xe.category,
					brand: xe.brand,
					model: xe.model,
					seller: xe.seller_name,
					sellerId: xe.seller_id,
					sellerType: xe.seller_type,
					featured: xe.featured || !1,
				}));
				g(re);
			} catch (I) {
				console.error("💥 Error in loadListings (catch block):", I),
					D(
						"A apărut o eroare neașteptată la încărcarea anunțurilor: " +
							I.message,
					),
					g([]);
			} finally {
				w(!1);
			}
		};
		S.useEffect(() => {
			const I = () => {
				window.innerWidth >= 1024 && a(!0);
			};
			return (
				window.addEventListener("resize", I),
				() => window.removeEventListener("resize", I)
			);
		}, []);
		const G = S.useMemo(
				() =>
					y.filter((I) => {
						const ve = u.toLowerCase(),
							re =
								!u ||
								I.title.toLowerCase().includes(ve) ||
								I.brand.toLowerCase().includes(ve) ||
								I.model.toLowerCase().includes(ve) ||
								I.category.toLowerCase().includes(ve) ||
								I.location.toLowerCase().includes(ve) ||
								I.seller.toLowerCase().includes(ve),
							xe =
								(!f.priceMin || I.price >= parseInt(f.priceMin)) &&
								(!f.priceMax || I.price <= parseInt(f.priceMax)),
							j =
								!f.category ||
								I.category.toLowerCase() === f.category.toLowerCase(),
							V = !f.brand || I.brand.toLowerCase() === f.brand.toLowerCase(),
							B =
								(!f.yearMin || I.year >= parseInt(f.yearMin)) &&
								(!f.yearMax || I.year <= parseInt(f.yearMax)),
							_ =
								!f.location ||
								I.location.toLowerCase().includes(f.location.toLowerCase());
						return re && xe && j && V && B && _;
					}),
				[u, f, y],
			),
			X = Math.ceil(G.length / ee),
			ne = (l - 1) * ee,
			le = ne + ee,
			ie = G.slice(ne, le),
			Y = (I, ve) => {
				p((re) => ({ ...re, [I]: ve })), c(1);
			},
			J = () => {
				p({
					priceMin: "",
					priceMax: "",
					category: "",
					brand: "",
					yearMin: "",
					yearMax: "",
					location: "",
				}),
					h(""),
					c(1),
					z("/", { replace: !0 });
			},
			Ee = (I) => {
				c(I), window.scrollTo({ top: 0, behavior: "smooth" });
			},
			Se = [
				{
					name: "Sport",
					image:
						"https://images.pexels.com/photos/595807/pexels-photo-595807.jpeg",
				},
				{
					name: "Touring",
					image:
						"https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg",
				},
				{
					name: "Cruiser",
					image:
						"https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg",
				},
				{
					name: "Adventure",
					image:
						"https://www.advpulse.com/wp-content/uploads/2016/04/Honda-XRE-300-a-561x373.jpg",
				},
				{
					name: "Naked",
					image:
						"https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg",
				},
				{
					name: "Enduro",
					image:
						"https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg",
				},
				{
					name: "Scooter",
					image:
						"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExMWFRUXGBcYGBgYGBoXFxcVGBgaGBUYFxcYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0tLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKEBOQMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgEABwj/xABKEAACAAQDAwoDBAcGBAYDAAABAgADESEEEjEFQVEGEyIyYXGBkbHBQqHRFFJy8CMzYoKSsuEHFVOTosIkQ9LxNGNzdIPiFkRU/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAMREAAgIABAQEBAUFAAAAAAAAAAECEQMSIUETMTJRBGGRsSJxoeEzYoHR8BQjUsHx/9oADAMBAAIRAxEAPwD55QQy2KlsR/6Ez2heBcwx2V1cR/7eZ7Q2iLApY4W7ovl4qYNJjj95vrFEuLlEIYUu1sQP+c3jQ+ohrsnGzTOlrMZCxmIMvNoTlYVLB1FB8Ipr0uyEaiGGwgPtEm3xr6wgDP7/AJikpzMllVmABXdmMEyOUqrrhEH4GyH5CM/iv1j/AI3/AJjEUUsSdw0gCzcYXlZhvjkT/wDMLjyZqQ82JtbBTWdJQmKzS5lay0AC5bklVBPdWPmkpKClfeNRyFB+0PX/AAZvpDC2BpsXCEDLjpf76OnsYKfk3mNJWJw7r8NZoDEbq1AvSM8ZdgBwHoILw2q27PlCsS5WMpnJPGE1VVYfsTEb0aHM7ZGJXZ6oZT5xiCxGUk5ebIrbdWMfMoOINd0aeVimXZaukx1P2oioYg0Es0Fa6QwEows0GkxWQXNSjagWFKb9Kw45FOTPYEU6B9oAkco8WtAMTM7ia+sONg8o8S8wq8wNY/AldeOWKRDRotlj/iJf4fZoTyT1Pwn1MNtkbUd8TKQpL6VellowADG1D2fOF8vass0zYdRSoGV2G/trFWTWhKX1k7j7RzBdZfxxcmPw5K/onBHBweHFRHcI+HqtDNF7AopvXSzQWKiOOHTm/wDrN/MYrmC694g7aCyOdmLzwVucJIKvrU7wCN8Q5hCRSdKNCPjp/MBAOme2P/4lPxf7TClZf85jQbMwjCcrVUrmBqHU2pTcYBbZ80Fqy3pnr1TpWAKdADS7n87o0PJVP1nhCxMFMZmAQnwoBbeTYQx2bikkFr84zUAWXcDvc9HyrEyaS1HBNsjyql1w83fWW481NIQbMwLy0VpgWXVFFWYgmnSUhKVzA0Oh8Kw9lbaZ5ktQVAZrqgqacWdvQDSFE+bMD1qEHFrs1z0atcihJ9453ipao6lht8zzZLOFacXNnmWSwJ/Vy7kW+M+Ucxjl5SitQHcUUKq0FCOiDloK6GtaawHjhmrQACtfvVU8XGm404VEXoqcystgKCY9VoK0OUgjs13XjLiN2aZEqBUaurALUk0qhII6PS3+fGtSYHRycioAACScgBG/UDQm+lRTdEjNlIWBpVq0FBUChAAQXOuojnOzmrklkL+30R2218wIzruXfYJqBJZWpmLIw62Y26RIp0Tup2dpgKdjJag5mCkgWIHWGpXvPjFy7Lc9ead9k6I87t5GLpWAlITlQVqL6nxJvFWTQnTGndLdu5X9W1iRxlfgnAj/AMuo9YczfcQPJa/iYLARqZhIt0DVTUFWoCTYE2NzfsgpAMyUuKEdw/Ji7HHTvPka/WIy6ZkHY3tDsRHFyxQroK3890DfZzxMFzkBJO8VHhW/yj1B+RFkowplwfsxaLiP/bzPVYrXZ+IBqZczuy29YZYXCOFn1RhWQ4Fjc1Fo6mzmQklCLiYqlSpgN0Yd6kR1mPCJGWZ4P2BX7TJ/GvrCtXhlsF64mT+NfWACjGGjzDwd/UxHCOSteMQ2m4zON5dh/qMSlsAAIBhWHtv/AKxpOQcyuJa//LmAd2WMkkxQRWt/LgfaHfJbHLLmTX0pKm0O+pWi/MiGDBcGcwJi3L0l74qwJyqAd94IdhUX3E/KJXIWxCahJteptGiRCNlUI/8A2/WWYQFo0MmZm2YRXTEqfOWR7GGhboUMoDCgtaHPJeUDiiKbm9YTLr3H+sP+Sgpij3N6iCI9jRbIkgYmUabreIeEk3Diqj8XqYe7Gmhp0lhoQKf6xCqc4Dqu8858j/WNTMoTDXUca+0d2an6SWa/Gv8AMIKA6Sdx9or2fYof2h6iACzbEj9LOO/nPUwI0gi2tafOC8a1cVixWwmS7cKiphjLmZZQYGhLEE6GgA+ICo8xrEuaUbKjHM6F2zdlsk1GmAIisD0us3cgufKC8kuXOamYnMxJdiqi5JyouvifCKJc4E6GlQQQTXTQ311+sS2mhDkdFQXJJFDUVOq8TpHNLGbWh0RwUnqFyMe0xwCzMSr0qRloUOksWtx+ZrAknOBWoYgaX1IuaaVBrqK9sByNqKhIRQzXFhmJBFKEKPUiK5cifMI6Ky9bnUDXqr9Yxk21qbLTkMJc8S2TOQSrVzZQSBW4G8V7PlCfHYxCSLtXRT0m6uXS507hDRNiKOu7P2dVd+5ddN5MFS8IiABFVRfQU4wvIBDKlTWYKqZQbZnNLDsFWPiRHjsklenMY30XoDTs6RHeYegdJe8wPN6te32MPYW4NgMKiL0VArXQXrXfxi2YNe5vWOyDYePtHZhue5okplVLREb+FQYtP19opBvFEg08a7tIGlDpecFYtr+FPGBWF/OFYAmLF/l84jLHSXvPpE8V539DEJa3XvPpAB2bW/57454R6e1Knu+YiPO9nzjWLJowv95Nm1Ydxp6RouSmJZ3cFmIyb2O9h2xk8sabkT+smfgH8wjpZzINO36E1VrV+N93jEpfKKuqP/HX1EZfETjmYV3n1iwFgaEEUtfdBQszNUu3kOqN5IfVYP2Ti5U1+ilGWjXSXx3ELWMSwPGNFyM/WP8AhHrBQKQdjsXg5cwpMly81AxPMg631BF4rXFbObUS/wDLcejwl5WIDijU06CekLDKAvWHQNm0ly9lkXyD96YvuYC5R4bCJIDYYglnCmjs4pQnQjjl3wqkzpVOklj1SFFR9LxQKsVVRWpBp20/pEvkFmi2fsuS015M4lQlgQ6qcwoDdhQ74O2hyawsuW82XMmFkRiAXlEGgNjQ18ozm1p7TCZosWfMaGlCa1gGfMfMK3EC5C2LkmEuFlKWYmlDrm9KRstgbInzJMzDzVSSWaW6EEzA2XMHFFBIpmXzhVyalSwOcyZXVmXNuatwfxUNIe7MxWWcEzzCWSeBmNQehmtwpl3RjGdzo7JYSWFmQowuzSzykDKDNDEVrQFSwKk016O7iI02xthzJWIzu8qhDWz9KlRehAtGAl4p6owdgcoZbnot8VOG6HOzdrzTNLtNfMoYAkk0U3IrwtGqZyXoabkiG59lJH6OZS7CwqwtU3FeHGKtrYR0nyCV60yYg0+PT0inkhjD9tmBzUzFJqd7ijg+WaJ8vcY6zpYBFFyOth1qHz7oduhaUHPgpoZaS2oAb0PZAcjCTRlrLfUaqeIiMrlHNqbSzr8A7OEHbL5Ru01EdUAYmtKg0AJ49kaWxUgCc4OKxpF/0q6fs29jBszGAIJYQu9a2BNARTXQabzGV2djmVJxI6M5WJNT94movc9Kl42Oxdpc/KEymXdSpNgNamOeUrgaYXUAfZZxoKCWulScx7iF7zvMXytjpSrlnPaaLr91aDzrBbPUrrcGJ5uj4+8cx1FWCRVAoAABu7zE11/PCISzpTt946jX/PCEUETmv+eBipzp4+8edvz4RXXTx94AogxuIpmHo+I94k0c+Hy9TFrkSymRdR4xZM1Pj6RXh+qO8+8WzPf2iEUykn8+AiqlovUevtFTC3lDECzkvWB2F/GC53tAtL+UJggfGaeI9YoK3T8V/wCE2gzGaHsgdB1fxa+cVsTuemqCaU/NoGyQcV6Xh7COVWLiSz5qqxpeRn6yZ+AfzCESKOMP+SApMf8ACP5hHUzmTtmfmIczW3n1hhMxyMzMZB6RJFJmlTW9r/KJYfA5sxrTpH6xxcDWt9OyNVhtqzln4jDi6kwbFzgzkohRaCgJzEcb0EP+QxPOzK/dH80LFwN6V3V0h1yQlkTXB+77iHKDSKwseE3UWLOVv/iT+FPSEuc5aRrNv7OV5+YsR0V+QjPYzBBFqCT0qRSwnlsl+LwuJw71uiWaiiulIP5LSQ2JlDcc3zQ0hdiahadhI8hD/kcoOJDfdSvdcDd2NHN2+Z1Cx+oK7iK+Biqa4vnBC2uDe19OEdZw6EaZjanfWEe1sQqlUzEmt6EGg3mggitxpGgwG1jKzVUzEbrAAilOqQSMpNN1fKkS5P7TYz8zE0SZUCukpyRWm4gVB7oCw2IMpVNA6FQwAoWyk0YV7Beh94FYos5CpBlzLKeKPp4hgPKL4ceaHKcqUdhrcFCTYZh86iGOxa86V+9mA7ypp33MUJNC561oVK9+alD8oLwGK6WHX7sytexiLesYXqZqSaCsPi+bxEmZWnRkse7qv8gYecv/ANaDSvQHyrGLxE2rJ2KV+bH3jUcpcRzkqS51aTLJ79D86w70YPRFLPTmv2h/tBiufNKIXFiAb94p7xQ039Fhm7FB8qe0Sx7jIw4sg+X9ItypMmzu1pJl4bDftyp3+lyQfIiH/JU5cOo3X79Yxu2sJNkFVYVV0ExSDqrJVrbiCQD3iNTyamf8Ove3yYxnNVE3wuoehgSsdbQ8K284ESZTL4eUFfCfH3jmfM6kQk/X3iam4gebiElirsFFSPG8cwuNlOwCzASa2rc+Bgyurodqw3+npEB7j1iz6D0EVV0hDKqeo9o4Rb8/eMec3p3GOubfn70XHkQweQbDv9jFrbvzuinDt6+xi4/D4ehiEUyKe/tFR08osl+/sYrOkUIonwHWDX1HdAJhMEV4+9oolvQD8Qi7GHUjUAQPINVFRvWGuRNahOJpXwI9Ij9nXhFeIJJ/PjFmcRaCj56qRouSo6b/AIfeFUvDCgOYUhtycFHcA16OvlHU2cUeYAswZSMt8xNd1KC3y+cWS8Xa6sdb0juAQnPQV6QHidBEcKpEvLlYkVGkXBu3RhixjSzKzql8oatjQacT3Q45Lg889TXo+4hKXbm0sKVFL9sOuTB/TN+A+ojaXSc3h9MWqXN9iW3yQ5P7A30PlCCarBRU6NvuIdcpG/SGzdRaUpTt3woxc2qgZSL1vT2MVm+HXt7kLD/uuqfxX8qBcVWq2BrX5n5RpORqU59uCKPMn/pjOzfhI4/WHewMWUZkpUTAFPYaGh8zHEtj1NTMyJDOrgE5l6o7KcO20W8nOSP2nK0ybzRYEhdWpW1Bu366xXMGVg614NSgOgrQ04ekbDk9gObRJrzCKtVLdKh0BKjQ318YrNFJWaRjKXSA7U5JnDSy8l+cVVBINmy6Eilj3UEYna+F5pM6m2YMo4VN6cLgR9rxMuiF2PQysDX7p1+EaG4j4zylYKJsoGqq4y9lq09vCNJONaEpPc0cmbziseKqf9I94nh3o0sk6Mp8v+0CbDaqy675SfJRX1gnCqG6J4Ed3b845XpI53Gn+v8At/uc2hZ/328gYcNOzYeWp1TMp/zMw+TCE8hhnkFrqXWvaCamvhBckkGeh+E1t5W/hikaS5F88EYaV+zf/UYsxcvnJ0uUDTnGUCulSFUHwLCKOc/QEcGoBSvxZr/OK8Q9RJcEggVqDQgqgOo0uvyhPYEtTQ/2jMueUEoSistKi1QoAPC0BbO29KkSDzmYBLsaVoGagqNdTwjLTscsxy8tFByqCzF3mTn0ZixJpWnygqbgMqqoJEyYCHC25tb3qRWoF7Rbim9TZaam82LteTPFZMxZgVlzU1WulQdNPWGOIxKoDWpJJCqoqzG+g9zYbzGC2FLk4P8ASJKZ5mXLZsqsSQaFWNAtbjhFGH5S46XNVsXKIyK4NEI6+U1qCVPVAFDaprGMsJ2bLEVDzbOxcfiWDiZJk0LBUOZyF1qzUpm7hwvHOS/JGZh8QJ8+eJrAEIACArNYtfsqLDfBmC5XYcqhm5pJa/TVgpr91iOlDuTOVsrAgqSCpFwVNwQeERKU0q2Liot2GE+g9opO6IvNBsN4FO+K2Y2PafLd7RjZpROcd4vERofzvjk5qiK1cgGvaPEUrXxjRMhlcs+sWu1AL8IFlubkjUj1/rFzYautxb5xFlEWmgA30MV86CDQ7vS0WrJoT+d5gebhRwpr+fSDUWhWhJ18PIfLWB3P0i0YniLg/wDaIyltU60hrXQT01B8UKeQ94rkS+iD2rBOJHoIGW8rgap8iPrFRWhLepKf1vzwMA8/+yPlBc49K/Z9IjlH3YbQ00uZlZCkDTjuhjyfUjNUEW9xDGVKYXYgDgLn6QcrClFWp4n2/IjrtnIoJMR7IwzqwrLa7qa0Og390EyJMwK4yNcvS3EmGhnuKWX5/WJypznUKPOHGWV2RiYKmqZnRgpvNqvNtUEaC9tYZ8n8HNWczOjKMpFx2iHOFQNXMorxBII7qGC50iXlGaWppxLediIp4jaoiHhYxlmM7tvZ82Y5KIWGUC3HhCHG4WZzqyihExhRVNKmpt7xu5Cy75Zad1CfG5rDnZeHQggohFd6g926E8RySQ4+FjGbnu7+p8dz0TtDUP8AF/WHezJRUhiKBkZ17QM1DrxEfVZOxcKRbDYe+v6GXr/DBkvZkgaSZItT9VL04dXSM8ptR8DcDmzmoVJOu+gFe7SOT9sYuXh1yc2ZfSXOScxyUqMoO4Mt98foJcBJGkqV/lp/0wFyj2Os7CT5KIgZ5bhTlUUenRuBa4EGRPmXGUo8mfmzCbZxiDKs+bQm4Jqmv3WrQdwgXFVo7PcsxNRWhNyYJlruNe7f22gwWTTQgg0tUEa1jZQshyG+xJQzgBqosqW1dOgVUbzrcAjsg3ALd3qMquUNxWrVItru1jcciMBI+24nESUdUPOUzbjMmlytNBvoOFI3iiMKUtRzwqevzPzvLxIEmWwYVFL1GoDKPQQ12U+dm6S5mlM2oFadIgcTQmPu4J4xNWpvMPKJxs+DSwSxVQaVY2BO4QtxEwsol06IJJ3VrXU8OyPtX9pOMnLgXWQTnmHKTmpSWAXm34lVK/vR8TWa3NK4UKppSgBJrU7jff5QKNAkNJODMlFmvMEtm6iAKDTiS1aeVYsloQSTWp1Jue76/wBIDw0mZPmtPmAsJQWhNTTMSFN7fCx01pB7EAVi0q1Y7Kp72pvj6BySwM2ZhELS3NiFJB6SiyN3U9IyXI/YZxuJyH9UlGnEbk3LXcWpTuDHdGz2n/aXJluZeHlK8tOjnrlU0tSWoHV3A74mUM+hSllCk5MsGtKOVq1S3N/iym1T84nP2M65RRUC0F3RQFFaCldKUjG7V5Wz8STmmMqHREOVadtDVvGsJ3noLmD+lW4+Mz6aySais/DilP8Ampr4GL8PskOejNlN+Fs3A7hHyJMdMepkyHmKCAWAtUmgFeNx5xPFtiZZTnEl4dm6mdszmhpVVSpJB4Q/6aAuNI+vTeTRJBzgU4A9vdHRyZF6zDfgv/2hlsTG87JBF8vQLVDZitAWDDrX38awcYlYUUHEbEP/AOMyt7OdOA0Ne2CP7olftHxHsIZsYi0Phx7Cc2BSdiYc16JrwzGJTeT0gimUjtDGvzi1moaxfKxIOtj8jA4R7ApMw+2uTzSTmFXStc1Lg0tmppuvpCsSxaPprTlpQ0I3/wBYyu1djSFJdSyrvUXAJ4V3dkZ8JF52ZaenDhAJw75ctKad1qRpjIk8WPh/WItLkfteQ+sHCQZzNysLMdiqoxpT83i/+7Z3+Ef4l+sOzhJNS2Y3pwoNdPP5RH7PJ++flDyBmMZLmj7xPgYulleJiSy4IReyKskjLYaXgyWkDGx7/wA8IKkTKQAEYVqNTsiybOqAOyA5c79KddNd26OTZlDSAAzAv0jGi2KdYyuDm9KNFsifSsEQY1wE2q+Jg9W7Yy8jZCD4m7dBfyg2Xs1OLfxEekUKh8rDjEudX7w84TJsqVwb+NvrFq7Olfd8yfrAB8H5aYAYfaOIlr1c+ZfwuA9B2AsR4Qqx0482QNSKeP13+Eb3+2HZcqXNkT0oCwKMu85bq1PEivdGKwGG52bIlUvMnylp+yxOb5V8o1iyGfoXD4qUiKi5VAAFqC4AG7uiTbXlDVx84HbDSgT0E8hEkaSKdSvhGDlXM0Jjbcn74Pdr5RxtvSh949ymJMZZIJCW00t3RYMQn3l8xDAxv9o3KSXzCrRxmE1RUU6TJRd+gv5xlMTt7BzFAeTqFIoFcJTNmFqa27vGGP8AbZLac2GEvphFmlgKEKSUy14VFfKPlgkGWkxyzK4oqJe5Y3PDKFDeLLFE1rZ9Yk4lZcxkNDKaXLlmlxlC9EinC0Zja2LEvONcpIHadIUckNozCzynGYEBs3DRekeBqoHbENrPXN2ufUw7BKj6skwYbYU77KCzTJReZOFRmZqLNatLZVqAK1GUb4+M4HaPSubbobbG2vkltImEmU27XKeIG7v/ACPNJwVagPXsX6iGo+YWQ/vkDfEZc9px1og6x9hxJjxSU7UlhhvJbLlA3k0NfDfFvOgUVRRRpXUneT2n5aQ22KkFScabqpKhaKqgmiilSR+1pfvh5yY2fMxE0SlYit2a5yrvY3vuFN5IjGnEsGYKubef4RX5CNjyR5TYVJcuWZM158wgnoqahuqVv1Rp2GpPGJtjpH2fZPNYaRLkBqhFpVqAsdSTS1ySYum7Ykj41/iX6xlklrY5aW0oAR2GkStwibHQ/wD75kamYtO8H0iL7dw/369ysfQQow8yhpF7NDsKL5m3ZH3m/wAuZ/0wvxfKbDLbnVroAbNXtU3ETeZA817qeB9jBYqK/wC/Ee6MGG7L0vSITscWUihoeKkeogn7ZAuNxFVMSUCmbHC0UmZETNhiJTDwiFDEedvEqwhiVZ44/MRNZv5rAizDFiuYkYVWusczb9fE/WKlYx2hgAvV9DpFWKnXMRaTXWsUzMCT8bf6fpC1GXYDEgvD/CNMr0CAPeMxh8Hkaqm/aa1+doeYHFulOgWqadAg+pFIcRMdyhOIGZ79gjuLnvKltMZzRRWFcrbTAkFRY07Relx5QedrYZ0KThVW6LXIBG/S9e6G+WghAeUUyxLmpvlFgB20hPtH+0R0BSVdvvEmg7RxjVcouTcibgJgwcsGaQGVi1XahBK5mNqiopaPmWF5GzakYiYsigstQ7nQ0bKaKL61J7IjDwMrzSYOV6ITYzGPPcvMcux6zE1MOuT7Krq9QTKOZDW4Jre276w52psvApgGlyRmnqVcvlHSp11rqRQmla34Qn5DYqSuIJnIrrlqK1oHBGWoBAIpXW0bSuUHRK0ZpdrbamNQZ7EA2tZqW8Kwpl4s1rU17T3/AEjWbSOGxGuEykUFRMKm1KWW1LUiOF2FhKBlRwaEZucYkEggih6O86jfHGsFm2ZE5W3MmGluRV3LAE6UWgr26gQDP5RvlJzAW3Ure3nWGszZ0vmvs+QFFbMrNdyfxClB2CkYnlHMlrNZJahVTWhN2PSOtbCtPAxXAbatiz9gLC8oJuEoWmc8psedAY1OrKda99Yr2zjDOBLUNqigA8oA2hstzLkz845yYwMuV8Sya9GYddTQ90Qw1aGUxBZa76Eg3Gv50jqszpFvJ0ZDLGYAzZydGxqktWNa1+84txXsie05ZIJGoYmnHWFRxhl4hadWUaDgStnPmWhoJ1ekN8FjoXLMNIklSaDWLcRhj11FibjgfpHkIUUqK7z7DshiL1IUZRpqT94/TgIraaTZbt4W7aaxFHDEAXJsP++gja7I2PKloUcKxfrEqHAO6imlQO8QAYrDyFJmrNd5ZEpnl9GzzAK5GNiCd3fBnJTZ5mM+JmHLIwsvMSb1YqciDvoSRv03xpdj7MkZcTKms81OcCXCrmCy0PVFQtCTSnCL57IhlyZMt1Vp8kVJXK1ZgmOFUINAp32ywCGfIiWyAM2cCYq0ltUZCKk0B7/KkatpsBGf2xznhElDGQ16xa8yF8rErSgiL4iAAubMgWZNuO+AJ2PXey+YgU7Vlj4142Nd/ZAA4LxRiGsYTTuUUoUpmbuWn81IFxPKCo6CEntIUfKtYVMBkXiBeEyYzEP1Za+Z/pHv+K3mWPL6mEMco94t52M6wnb56L3X9ojmm/8A9P8Ap/pDAISb2RMTIoWWYmJR4iGSWAxNB3+cQRKb4vQwAdCnjFijjeOAx1RABNJYi1V4RBQYsEpjxgGSSWu+3aNfEb4oxuGZh0CDvI0PGCBhW4H0jnMnioP4qGEIa8jGeUSk0UVuoag0a9VsbVFD4Qn27s+Y2KmgADNRgSwuCALDXju3QRIxBU3cfxH8mKsVPlN0mKki4qSaC9QIbbCgVOTTlQpdVqKGgqaanWlb2j59J2fPlYsSFSs1WplAzFr1BAB0Iv3GPo6cqpNBQubbkHvDjkdNwT4lsWWAnsvNUdgCEBBqErvtfshxYpAmK2a0t6MJhAAzZFBYHhSpO8aA6GDJOAVrpnA1C0Iymt7MK6WvGp5U8zzRcTpct1FRmfKG/ZJ7eN+6MCm3MQ10kH/U3oIlpIa1Hy4DSoNragV118x5CPiu3JxMydxaY414ud8fUFx+OPVk5e9SL+JEfLOVeDeXPmpMGUsTM3UIck1FCeJHhAmu5VMZbV2Zi8Mf+KZHYyzkKZQFFArUIC3AC30hls/JJwUzEcyVu0tWZtZgCHMlKZgiK1a2q0Z+Ztxp06U+IZgiSilQM9WpSlALVPHjCvGYlpvQUFZQaqpxY78ugJhiJ7A2BNxXOGWVGQLXNUAlq2BAN7QVitnz8P8ArEopsGBDLXvGnjGj2NhcJIkKsyY5c9JwoFAx3VY3ppWnGL5uLwJBXm5jqdczKoPksKx0ZOZjhlCjTf2xQu0kFhKWv53RqBicDLumBVuBZnmR6dyjopVMGiAgj9UQbilix17YSk1t7A4oDweEd5azDNWWTRgolZhTUZixEK9s7TxUl8rTXobqRQKR2WrY2oSYc4TlBiZaJJlKtFUAHKtaDiSK9kVbU+1YpQs9wwBqLdU8V0pFXJipCZ8fNbLRnFQS7A0Bc2zUWtQAF7TQ1h5yM2RPL/arMFzKjTGABY2YjMw0FRbj2QHh+TlLF2I4W+kOJODIoKm1h2Q8r2FaNG3PnrT5CfvqfQGOFfvYxf3VY+iiEwk9piQlQsr7jtdhoVk78TObuWnq0QP2X7s5u9lHsYACx6sGTzDMHc7hxph/4pjH0pHRjEGkiUO8E+rQurHqw8i/jDMxkNqMOqste6WnuI8dtT/8QjuoPQQrLREtBw49hZn3DJuLZjVmLHtJMUmYIoLRWWiqFYQ0yI84IHLRzPBQWG/ak+8fKPHHyxqfSKZOBYgUwTE/tFte5oKl7Ln7sJJXtbL/ANUZW+3sXS7lP98ShvHnFkvbAJoqk9ysfSDE2difvYeX3AV/lMXrs2cetiwPwp9KRLk129fsNRXn6Ai4ycerJf8AgI/mi5WxX+Fl/EyL7wQ2yZY/WYmafEL6mIfY8AOs5b8UwewhZ/Ne48vkU559806Qv/y3H8IvHjO+9ipQ7lmP9IKSfs5fgU9+dv6Rcm3MGvVkL4Sl/wBxhW/P0/cdLy9RZz0nfiXY/sSaHwLGJokptBjJncFFf4VMNRyuA6kmngq+gMVvy0nblA72+gEHxdn9ELTy+oPL2cT1cDiG/FMmD0AglNiT/h2eg/HMLfzPERyhxr9VK/hR29zFittN9EmD/wCML/MIMsu3rJjtd/ogiXsTFf4GETvAPuYqxOGxiGglyz2y0lkfMVHjEk2PtNtSy98xR/KYsHJPFt156DvmMfaDI969xZl5gnM47Xq+MtfSITJOJ+PEqO+cfQGGacih8eJXwUt/ugGdyWmq1FKOPvVK+YI+sL4VuvT7j1ez9QCbIX48Sh7szwq2vszCzVo01ywrlKyyKH943HZGhPJ9h15slf3j9I4NkyB1sSn7or7w8y/yf6L7Blfb+ep8zTYOIBoMpG4moNO4Vp5wywGx8l3UO3ZVad0bsYTBjWbMbuWnqI6PsY0lTG/E1PQxTkns/YVNboyi4QDSVL8RmPzi0S24qO5VjT/bZA6uFT945vUR0bZYdWVKXuX+sKvy+r/6F/mM2mHmN8Tnu/8ArBKbGmt8Dn8RP+4w2m7YnH4gO5VHtAszGTTq7eZHpDSnskgbju2VyeSswX5tV33YelTFo2GR15slf3qmBZjV1Ne819YlLlMeqjHuUn0EXU939Cfh2RzFYMJpMlv3Vr8xT5xRlEHLs2adJZ8aD1MXS9izTrlHjX0EHEilqwySfJCoiImHDbJVevOUeQ9TFU3C4UD9c1ewV9B7wcWO3sHDe4qJjlRFs9VB6LFh2jL7mKSY0TsijhMRJjpIiBpDEdJiJMRaIGsAEmMVkxxjFZaADpaI5zES0RrABvsdofGAJMej0ceNyOjDLVgXafVPdHo9HLHqN5dJl118YsGkdj0equRxbliwQsej0ICxt8b3kb+rWPR6ExmtbSPR6PRIAGO0gGX+fnHo9Hl+I/EZ3YPQWrGc5T6juj0eh4H4iFi9JncP7H3izdHo9HrHCeiY0j0egAqfSOiPR6ADh0j0dj0ADjYGp74dNHo9Hn43WdmF0kWhHyj0HcY7HoMLrQYvSzOJE2j0ej0TiK4gI9HoAK5kVmOx6ADgiLR2PQAVvFRj0ehgQMcj0ehAf//Z",
				},
				{
					name: "Chopper",
					image:
						"https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg",
				},
			],
			Pe = ({ listing: I }) => {
				const [ve, re] = S.useState(0),
					xe = S.useRef(0),
					j = S.useRef(0),
					V = S.useRef(null),
					[B, _] = S.useState(null);
				S.useEffect(() => {
					(async () => {
						try {
							const { data: be, error: He } = await ae
								.from("profiles")
								.select("avatar_url")
								.eq("id", I.sellerId)
								.single();
							!He && be && _(be.avatar_url);
						} catch (be) {
							console.error("Error fetching seller avatar:", be);
						}
					})();
				}, [I.sellerId]);
				const k = (se) => {
						xe.current = se.targetTouches[0].clientX;
					},
					q = (se) => {
						j.current = se.targetTouches[0].clientX;
					},
					R = (se) => {
						if (
							(se.preventDefault(),
							se.stopPropagation(),
							!xe.current || !j.current)
						)
							return;
						const be = xe.current - j.current,
							He = be > 50,
							$t = be < -50;
						He && ve < I.images.length - 1 && re((Tt) => Tt + 1),
							$t && ve > 0 && re((Tt) => Tt - 1);
					},
					$ = (se) => {
						se.preventDefault(),
							se.stopPropagation(),
							re((be) => (be === I.images.length - 1 ? 0 : be + 1));
					},
					C = (se) => {
						se.preventDefault(),
							se.stopPropagation(),
							re((be) => (be === 0 ? I.images.length - 1 : be - 1));
					},
					F = (se) => {
						se.preventDefault(),
							se.stopPropagation(),
							z(`/profil/${I.sellerId}`);
					},
					Q = () =>
						I.images && I.images.length > 0 && I.images[ve]
							? I.images[ve]
							: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg";
				return e.jsx(ke, {
					to: `/anunt/${I.id}`,
					className:
						"bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100 block",
					children: e.jsxs("div", {
						className: "flex flex-col sm:flex-row",
						children: [
							e.jsxs("div", {
								ref: V,
								className: "relative w-full sm:w-64 flex-shrink-0",
								onTouchStart: k,
								onTouchMove: q,
								onTouchEnd: R,
								children: [
									e.jsx("img", {
										loading: "lazy",
										src: Q(),
										alt: I.title,
										className:
											"w-full h-48 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300",
										onError: (se) => {
											const be = se.currentTarget;
											be.src =
												"https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg";
										},
									}),
									I.images &&
										I.images.length > 1 &&
										e.jsxs(e.Fragment, {
											children: [
												e.jsx("button", {
													onClick: C,
													className:
														"absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-1.5 hover:bg-white transition-colors opacity-0 group-hover:opacity-100 hidden sm:block",
													children: e.jsx(zo, {
														className: "h-4 w-4 text-gray-600",
													}),
												}),
												e.jsx("button", {
													onClick: $,
													className:
														"absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-1.5 hover:bg-white transition-colors opacity-0 group-hover:opacity-100 hidden sm:block",
													children: e.jsx(gi, {
														className: "h-4 w-4 text-gray-600",
													}),
												}),
												e.jsx("div", {
													className:
														"absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1",
													children: I.images.map((se, be) =>
														e.jsx(
															"div",
															{
																className: `w-1.5 h-1.5 rounded-full transition-colors ${
																	be === ve ? "bg-white" : "bg-white/50"
																}`,
															},
															be,
														),
													),
												}),
											],
										}),
									e.jsx("div", {
										className: "absolute top-3 left-3",
										children: e.jsx("span", {
											className:
												"bg-nexar-accent text-white px-3 py-1 rounded-full text-xs font-semibold",
											children: I.category,
										}),
									}),
								],
							}),
							e.jsxs("div", {
								className: "flex-1 p-4 sm:p-6",
								children: [
									e.jsx("div", {
										className:
											"flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3",
										children: e.jsxs("div", {
											children: [
												e.jsx("h3", {
													className:
														"text-lg sm:text-xl font-bold text-gray-900 group-hover:text-nexar-accent transition-colors mb-2",
													children: I.title,
												}),
												e.jsxs("div", {
													className:
														"text-xl sm:text-2xl font-bold text-gray-900 mb-2",
													children: ["€", I.price.toLocaleString()],
												}),
												e.jsxs("div", {
													className:
														"flex flex-col sm:flex-row sm:items-center gap-2 mb-2",
													children: [
														e.jsxs("div", {
															className:
																"flex items-center space-x-2 text-sm text-gray-600",
															children: [
																e.jsx("div", {
																	className:
																		"flex-shrink-0 w-8 h-8 rounded-full overflow-hidden border border-gray-200",
																	children: B
																		? e.jsx("img", {
																				loading: "lazy",
																				src: B,
																				alt: I.seller,
																				className: "w-full h-full object-cover",
																				onError: (se) => {
																					const be = se.currentTarget;
																					be.style.display = "none";
																					const He = be.parentElement;
																					He &&
																						(He.innerHTML = `<div class="w-full h-full bg-nexar-accent flex items-center justify-center text-white text-xs font-bold">${I.seller
																							.charAt(0)
																							.toUpperCase()}</div>`);
																				},
																		  })
																		: e.jsx("div", {
																				className:
																					"w-full h-full bg-nexar-accent flex items-center justify-center text-white text-xs font-bold",
																				children: I.seller
																					.charAt(0)
																					.toUpperCase(),
																		  }),
																}),
																e.jsx("button", {
																	onClick: F,
																	className:
																		"font-semibold text-nexar-accent hover:text-nexar-gold transition-colors underline",
																	children: I.seller,
																}),
															],
														}),
														I.sellerType === "dealer"
															? e.jsxs("div", {
																	className:
																		"inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-3 py-1.5 rounded-full shadow-md border border-emerald-400",
																	children: [
																		e.jsx(Hs, { className: "h-3 w-3" }),
																		e.jsx("span", {
																			className:
																				"font-bold text-xs tracking-wide",
																			children: "DEALER PREMIUM",
																		}),
																		e.jsx("div", {
																			className:
																				"w-1.5 h-1.5 bg-white rounded-full animate-pulse",
																		}),
																	],
															  })
															: e.jsxs("div", {
																	className:
																		"inline-flex items-center space-x-2 bg-gradient-to-r from-slate-500 to-slate-600 text-white px-3 py-1.5 rounded-full shadow-md",
																	children: [
																		e.jsx(Qn, { className: "h-3 w-3" }),
																		e.jsx("span", {
																			className: "font-semibold text-xs",
																			children: "PRIVAT",
																		}),
																	],
															  }),
													],
												}),
											],
										}),
									}),
									e.jsxs("div", {
										className: "grid grid-cols-3 gap-3 sm:gap-6 mb-4",
										children: [
											e.jsxs("div", {
												className: "flex items-center space-x-2 text-gray-600",
												children: [
													e.jsx(Vs, { className: "h-4 w-4" }),
													e.jsx("span", {
														className: "text-sm font-medium",
														children: I.year,
													}),
												],
											}),
											e.jsxs("div", {
												className: "flex items-center space-x-2 text-gray-600",
												children: [
													e.jsx(fm, { className: "h-4 w-4" }),
													e.jsxs("span", {
														className: "text-sm font-medium",
														children: [I.mileage.toLocaleString(), " km"],
													}),
												],
											}),
											e.jsxs("div", {
												className: "flex items-center space-x-2 text-gray-600",
												children: [
													e.jsx(lr, { className: "h-4 w-4" }),
													e.jsx("span", {
														className: "text-sm font-medium",
														children: I.location,
													}),
												],
											}),
										],
									}),
									e.jsxs("div", {
										className:
											"bg-nexar-accent text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-nexar-gold transition-colors inline-flex items-center space-x-2",
										children: [
											e.jsx("span", { children: "Vezi Detalii" }),
											e.jsx(gi, { className: "h-4 w-4" }),
										],
									}),
								],
							}),
						],
					}),
				});
			};
		return e.jsxs("div", {
			className: "animate-fade-in",
			children: [
				e.jsxs("section", {
					className:
						"relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden",
					children: [
						e.jsx("div", { className: "absolute inset-0 bg-black opacity-40" }),
						e.jsx("div", {
							className:
								"relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",
							children: e.jsxs("div", {
								className: "text-center text-white",
								children: [
									e.jsxs("h1", {
										className:
											"text-2xl sm:text-3xl font-bold mb-6 leading-tight",
										children: [
											"Cumpără și Vinde Motociclete",
											e.jsx("span", {
												className:
													"block text-nexar-accent text-xl sm:text-2xl",
												children: "GRATUIT",
											}),
										],
									}),
									e.jsx("div", {
										className: "max-w-md mx-auto mb-6",
										children: e.jsxs("div", {
											className:
												"relative backdrop-blur-md bg-white/10 rounded-xl p-1 border border-white/20",
											children: [
												e.jsx("input", {
													type: "text",
													value: u,
													onChange: (I) => h(I.target.value),
													placeholder: "Caută după marcă, model sau tip...",
													className:
														"w-full pl-4 pr-16 py-2.5 text-sm rounded-lg border-0 bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-nexar-accent shadow-lg text-gray-900 placeholder-gray-600",
												}),
												e.jsx("button", {
													className:
														"absolute right-2 top-1/2 transform -translate-y-1/2 bg-nexar-accent text-white px-3 py-1.5 rounded-lg font-semibold hover:bg-nexar-gold transition-colors text-xs shadow-lg",
													children: "Caută",
												}),
											],
										}),
									}),
									e.jsx("div", {
										className: "flex flex-col sm:flex-row gap-3 justify-center",
										children: e.jsx(ke, {
											to: "/adauga-anunt",
											className:
												"bg-white/90 backdrop-blur-sm text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-white transition-all duration-200 transform hover:scale-105 shadow-lg border border-white/30 text-sm",
											children: "Vinde Motocicleta Ta",
										}),
									}),
								],
							}),
						}),
					],
				}),
				e.jsx("section", {
					className: "py-8 sm:py-16 bg-gray-50",
					children: e.jsxs("div", {
						className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
						children: [
							e.jsxs("div", {
								className: "block lg:hidden mb-6",
								children: [
									e.jsxs("button", {
										onClick: () => a(!s),
										className:
											"w-full flex items-center justify-center space-x-2 bg-white text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-gray-200 mb-4",
										children: [
											e.jsx(bh, { className: "h-4 w-4" }),
											e.jsxs("span", {
												children: [s ? "Ascunde" : "Arată", " Filtrele"],
											}),
										],
									}),
									s &&
										e.jsxs("div", {
											className:
												"bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-100",
											children: [
												e.jsxs("div", {
													className: "flex items-center justify-between mb-6",
													children: [
														e.jsxs("h3", {
															className:
																"text-lg font-semibold text-gray-900 flex items-center space-x-2",
															children: [
																e.jsx(gh, { className: "h-5 w-5" }),
																e.jsx("span", {
																	children: "Filtrează Rezultatele",
																}),
															],
														}),
														e.jsx("button", {
															onClick: () => a(!1),
															className:
																"p-1 hover:bg-gray-100 rounded-lg transition-colors",
															children: e.jsx(Ft, { className: "h-4 w-4" }),
														}),
													],
												}),
												e.jsxs("div", {
													className: "space-y-6",
													children: [
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-3",
																	children: "Preț (EUR)",
																}),
																e.jsxs("div", {
																	className: "grid grid-cols-2 gap-2",
																	children: [
																		e.jsx("input", {
																			type: "number",
																			placeholder: "Min",
																			value: f.priceMin,
																			onChange: (I) =>
																				Y("priceMin", I.target.value),
																			className:
																				"w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																		}),
																		e.jsx("input", {
																			type: "number",
																			placeholder: "Max",
																			value: f.priceMax,
																			onChange: (I) =>
																				Y("priceMax", I.target.value),
																			className:
																				"w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																		}),
																	],
																}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-3",
																	children: "Categorie",
																}),
																e.jsxs("select", {
																	value: f.category,
																	onChange: (I) =>
																		Y("category", I.target.value),
																	className:
																		"w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																	children: [
																		e.jsx("option", {
																			value: "",
																			children: "Toate categoriile",
																		}),
																		e.jsx("option", {
																			value: "sport",
																			children: "Sport",
																		}),
																		e.jsx("option", {
																			value: "touring",
																			children: "Touring",
																		}),
																		e.jsx("option", {
																			value: "cruiser",
																			children: "Cruiser",
																		}),
																		e.jsx("option", {
																			value: "adventure",
																			children: "Adventure",
																		}),
																		e.jsx("option", {
																			value: "naked",
																			children: "Naked",
																		}),
																		e.jsx("option", {
																			value: "scooter",
																			children: "Scooter",
																		}),
																		e.jsx("option", {
																			value: "enduro",
																			children: "Enduro",
																		}),
																		e.jsx("option", {
																			value: "chopper",
																			children: "Chopper",
																		}),
																	],
																}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-3",
																	children: "Marcă",
																}),
																e.jsxs("select", {
																	value: f.brand,
																	onChange: (I) => Y("brand", I.target.value),
																	className:
																		"w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																	children: [
																		e.jsx("option", {
																			value: "",
																			children: "Toate mărcile",
																		}),
																		e.jsx("option", {
																			value: "Yamaha",
																			children: "Yamaha",
																		}),
																		e.jsx("option", {
																			value: "Honda",
																			children: "Honda",
																		}),
																		e.jsx("option", {
																			value: "BMW",
																			children: "BMW",
																		}),
																		e.jsx("option", {
																			value: "Ducati",
																			children: "Ducati",
																		}),
																		e.jsx("option", {
																			value: "KTM",
																			children: "KTM",
																		}),
																		e.jsx("option", {
																			value: "Suzuki",
																			children: "Suzuki",
																		}),
																		e.jsx("option", {
																			value: "Harley-Davidson",
																			children: "Harley-Davidson",
																		}),
																		e.jsx("option", {
																			value: "Kawasaki",
																			children: "Kawasaki",
																		}),
																		e.jsx("option", {
																			value: "Triumph",
																			children: "Triumph",
																		}),
																		e.jsx("option", {
																			value: "Aprilia",
																			children: "Aprilia",
																		}),
																	],
																}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-3",
																	children: "An fabricație",
																}),
																e.jsxs("div", {
																	className: "grid grid-cols-2 gap-2",
																	children: [
																		e.jsx("input", {
																			type: "number",
																			placeholder: "De la",
																			value: f.yearMin,
																			onChange: (I) =>
																				Y("yearMin", I.target.value),
																			className:
																				"w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																		}),
																		e.jsx("input", {
																			type: "number",
																			placeholder: "Până la",
																			value: f.yearMax,
																			onChange: (I) =>
																				Y("yearMax", I.target.value),
																			className:
																				"w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																		}),
																	],
																}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-3",
																	children: "Locația",
																}),
																e.jsxs("select", {
																	value: f.location,
																	onChange: (I) =>
																		Y("location", I.target.value),
																	className:
																		"w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																	children: [
																		e.jsx("option", {
																			value: "",
																			children: "Toate locațiile",
																		}),
																		e.jsx("option", {
																			value: "București S1",
																			children: "București S1",
																		}),
																		e.jsx("option", {
																			value: "București S2",
																			children: "București S2",
																		}),
																		e.jsx("option", {
																			value: "București S3",
																			children: "București S3",
																		}),
																		e.jsx("option", {
																			value: "București S4",
																			children: "București S4",
																		}),
																		e.jsx("option", {
																			value: "București S5",
																			children: "București S5",
																		}),
																		e.jsx("option", {
																			value: "București S6",
																			children: "București S6",
																		}),
																		e.jsx("option", {
																			value: "Cluj-Napoca",
																			children: "Cluj-Napoca",
																		}),
																		e.jsx("option", {
																			value: "Timișoara",
																			children: "Timișoara",
																		}),
																		e.jsx("option", {
																			value: "Iași",
																			children: "Iași",
																		}),
																		e.jsx("option", {
																			value: "Constanța",
																			children: "Constanța",
																		}),
																		e.jsx("option", {
																			value: "Brașov",
																			children: "Brașov",
																		}),
																		e.jsx("option", {
																			value: "Craiova",
																			children: "Craiova",
																		}),
																		e.jsx("option", {
																			value: "Galați",
																			children: "Galați",
																		}),
																		e.jsx("option", {
																			value: "Oradea",
																			children: "Oradea",
																		}),
																		e.jsx("option", {
																			value: "Ploiești",
																			children: "Ploiești",
																		}),
																		e.jsx("option", {
																			value: "Sibiu",
																			children: "Sibiu",
																		}),
																		e.jsx("option", {
																			value: "Bacău",
																			children: "Bacău",
																		}),
																		e.jsx("option", {
																			value: "Râmnicu Vâlcea",
																			children: "Râmnicu Vâlcea",
																		}),
																		Bt.map(
																			(I) =>
																				!I.startsWith("București") &&
																				I !== "Râmnicu Vâlcea" &&
																				I !== "Rm. Vâlcea" &&
																				e.jsx(
																					"option",
																					{ value: I, children: I },
																					I,
																				),
																		),
																	],
																}),
															],
														}),
														e.jsxs("button", {
															onClick: J,
															className:
																"w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2",
															children: [
																e.jsx(Ft, { className: "h-4 w-4" }),
																e.jsx("span", { children: "Șterge Filtrele" }),
															],
														}),
													],
												}),
											],
										}),
								],
							}),
							e.jsxs("div", {
								className: "hidden lg:flex gap-6",
								children: [
									e.jsx("div", {
										className: `${
											s ? "w-80" : "w-0"
										} transition-all duration-300 overflow-hidden`,
										children: e.jsxs("div", {
											className:
												"bg-white rounded-xl shadow-sm p-6 sticky top-24 border border-gray-100",
											children: [
												e.jsxs("div", {
													className: "flex items-center justify-between mb-6",
													children: [
														e.jsxs("h3", {
															className:
																"text-lg font-semibold text-gray-900 flex items-center space-x-2",
															children: [
																e.jsx(gh, { className: "h-5 w-5" }),
																e.jsx("span", {
																	children: "Filtrează Rezultatele",
																}),
															],
														}),
														e.jsx("button", {
															onClick: () => a(!1),
															className:
																"p-1 hover:bg-gray-100 rounded-lg transition-colors",
															children: e.jsx(Ft, { className: "h-4 w-4" }),
														}),
													],
												}),
												e.jsxs("div", {
													className:
														"space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto",
													children: [
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-3",
																	children: "Preț (EUR)",
																}),
																e.jsxs("div", {
																	className: "grid grid-cols-2 gap-2",
																	children: [
																		e.jsx("input", {
																			type: "number",
																			placeholder: "Min",
																			value: f.priceMin,
																			onChange: (I) =>
																				Y("priceMin", I.target.value),
																			className:
																				"w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																		}),
																		e.jsx("input", {
																			type: "number",
																			placeholder: "Max",
																			value: f.priceMax,
																			onChange: (I) =>
																				Y("priceMax", I.target.value),
																			className:
																				"w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																		}),
																	],
																}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-3",
																	children: "Categorie",
																}),
																e.jsxs("select", {
																	value: f.category,
																	onChange: (I) =>
																		Y("category", I.target.value),
																	className:
																		"w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																	children: [
																		e.jsx("option", {
																			value: "",
																			children: "Toate categoriile",
																		}),
																		e.jsx("option", {
																			value: "sport",
																			children: "Sport",
																		}),
																		e.jsx("option", {
																			value: "touring",
																			children: "Touring",
																		}),
																		e.jsx("option", {
																			value: "cruiser",
																			children: "Cruiser",
																		}),
																		e.jsx("option", {
																			value: "adventure",
																			children: "Adventure",
																		}),
																		e.jsx("option", {
																			value: "naked",
																			children: "Naked",
																		}),
																		e.jsx("option", {
																			value: "scooter",
																			children: "Scooter",
																		}),
																		e.jsx("option", {
																			value: "enduro",
																			children: "Enduro",
																		}),
																		e.jsx("option", {
																			value: "chopper",
																			children: "Chopper",
																		}),
																	],
																}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-3",
																	children: "Marcă",
																}),
																e.jsxs("select", {
																	value: f.brand,
																	onChange: (I) => Y("brand", I.target.value),
																	className:
																		"w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																	children: [
																		e.jsx("option", {
																			value: "",
																			children: "Toate mărcile",
																		}),
																		e.jsx("option", {
																			value: "Yamaha",
																			children: "Yamaha",
																		}),
																		e.jsx("option", {
																			value: "Honda",
																			children: "Honda",
																		}),
																		e.jsx("option", {
																			value: "BMW",
																			children: "BMW",
																		}),
																		e.jsx("option", {
																			value: "Ducati",
																			children: "Ducati",
																		}),
																		e.jsx("option", {
																			value: "KTM",
																			children: "KTM",
																		}),
																		e.jsx("option", {
																			value: "Suzuki",
																			children: "Suzuki",
																		}),
																		e.jsx("option", {
																			value: "Harley-Davidson",
																			children: "Harley-Davidson",
																		}),
																		e.jsx("option", {
																			value: "Kawasaki",
																			children: "Kawasaki",
																		}),
																		e.jsx("option", {
																			value: "Triumph",
																			children: "Triumph",
																		}),
																		e.jsx("option", {
																			value: "Aprilia",
																			children: "Aprilia",
																		}),
																	],
																}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-3",
																	children: "An fabricație",
																}),
																e.jsxs("div", {
																	className: "grid grid-cols-2 gap-2",
																	children: [
																		e.jsx("input", {
																			type: "number",
																			placeholder: "De la",
																			value: f.yearMin,
																			onChange: (I) =>
																				Y("yearMin", I.target.value),
																			className:
																				"w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																		}),
																		e.jsx("input", {
																			type: "number",
																			placeholder: "Până la",
																			value: f.yearMax,
																			onChange: (I) =>
																				Y("yearMax", I.target.value),
																			className:
																				"w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																		}),
																	],
																}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-3",
																	children: "Locația",
																}),
																e.jsxs("select", {
																	value: f.location,
																	onChange: (I) =>
																		Y("location", I.target.value),
																	className:
																		"w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																	children: [
																		e.jsx("option", {
																			value: "",
																			children: "Toate locațiile",
																		}),
																		e.jsx("option", {
																			value: "București S1",
																			children: "București S1",
																		}),
																		e.jsx("option", {
																			value: "București S2",
																			children: "București S2",
																		}),
																		e.jsx("option", {
																			value: "București S3",
																			children: "București S3",
																		}),
																		e.jsx("option", {
																			value: "București S4",
																			children: "București S4",
																		}),
																		e.jsx("option", {
																			value: "București S5",
																			children: "București S5",
																		}),
																		e.jsx("option", {
																			value: "București S6",
																			children: "București S6",
																		}),
																		e.jsx("option", {
																			value: "Cluj-Napoca",
																			children: "Cluj-Napoca",
																		}),
																		e.jsx("option", {
																			value: "Timișoara",
																			children: "Timișoara",
																		}),
																		e.jsx("option", {
																			value: "Iași",
																			children: "Iași",
																		}),
																		e.jsx("option", {
																			value: "Constanța",
																			children: "Constanța",
																		}),
																		e.jsx("option", {
																			value: "Brașov",
																			children: "Brașov",
																		}),
																		e.jsx("option", {
																			value: "Craiova",
																			children: "Craiova",
																		}),
																		e.jsx("option", {
																			value: "Galați",
																			children: "Galați",
																		}),
																		e.jsx("option", {
																			value: "Oradea",
																			children: "Oradea",
																		}),
																		e.jsx("option", {
																			value: "Ploiești",
																			children: "Ploiești",
																		}),
																		e.jsx("option", {
																			value: "Sibiu",
																			children: "Sibiu",
																		}),
																		e.jsx("option", {
																			value: "Bacău",
																			children: "Bacău",
																		}),
																		e.jsx("option", {
																			value: "Râmnicu Vâlcea",
																			children: "Râmnicu Vâlcea",
																		}),
																		Bt.map(
																			(I) =>
																				!I.startsWith("București") &&
																				I !== "Râmnicu Vâlcea" &&
																				I !== "Rm. Vâlcea" &&
																				e.jsx(
																					"option",
																					{ value: I, children: I },
																					I,
																				),
																		),
																	],
																}),
															],
														}),
														e.jsxs("button", {
															onClick: J,
															className:
																"w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2",
															children: [
																e.jsx(Ft, { className: "h-4 w-4" }),
																e.jsx("span", { children: "Șterge Filtrele" }),
															],
														}),
													],
												}),
											],
										}),
									}),
									e.jsxs("div", {
										className: "flex-1",
										children: [
											e.jsxs("div", {
												className: "mb-6 flex justify-between items-center",
												children: [
													e.jsxs("button", {
														onClick: () => a(!s),
														className:
															"flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-gray-200",
														children: [
															e.jsx(bh, { className: "h-4 w-4" }),
															e.jsxs("span", {
																children: [
																	s ? "Ascunde" : "Arată",
																	" Filtrele",
																],
															}),
														],
													}),
													e.jsxs("p", {
														className: "text-gray-600",
														children: [
															G.length,
															" rezultate găsite",
															u &&
																e.jsxs("span", {
																	className: "ml-2 text-nexar-accent",
																	children: ['pentru "', u, '"'],
																}),
														],
													}),
												],
											}),
											v &&
												e.jsxs("div", {
													className:
														"bg-white rounded-xl shadow-sm p-12 text-center border border-gray-100",
													children: [
														e.jsx("div", {
															className:
																"w-16 h-16 border-4 border-nexar-accent border-t-transparent rounded-full animate-spin mx-auto mb-4",
														}),
														e.jsx("h3", {
															className:
																"text-xl font-semibold text-gray-900 mb-2",
															children: "Se încarcă anunțurile...",
														}),
														e.jsx("p", {
															className: "text-gray-600",
															children: "Te rugăm să aștepți",
														}),
													],
												}),
											T &&
												!v &&
												e.jsxs("div", {
													className:
														"bg-white rounded-xl shadow-sm p-12 text-center border border-gray-100",
													children: [
														e.jsx("div", {
															className:
																"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",
															children: e.jsx(Ft, {
																className: "h-8 w-8 text-red-500",
															}),
														}),
														e.jsx("h3", {
															className:
																"text-xl font-semibold text-gray-900 mb-2",
															children: "Eroare la încărcare",
														}),
														e.jsx("p", {
															className: "text-gray-600 mb-6",
															children: T,
														}),
														e.jsx("div", {
															className:
																"flex flex-col sm:flex-row gap-4 justify-center",
															children: e.jsxs("button", {
																onClick: N,
																className:
																	"bg-nexar-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors flex items-center justify-center space-x-2",
																children: [
																	e.jsx(cr, { className: "h-5 w-5" }),
																	e.jsx("span", {
																		children: "Încearcă din nou",
																	}),
																],
															}),
														}),
													],
												}),
											!v &&
												!T &&
												G.length === 0 &&
												e.jsxs("div", {
													className:
														"bg-white rounded-xl shadow-sm p-12 text-center border border-gray-100",
													children: [
														e.jsx($o, {
															className: "h-16 w-16 text-gray-400 mx-auto mb-4",
														}),
														e.jsx("h3", {
															className:
																"text-xl font-semibold text-gray-900 mb-2",
															children: "Nu am găsit rezultate",
														}),
														e.jsx("p", {
															className: "text-gray-600 mb-6",
															children:
																y.length === 0
																	? "Nu există anunțuri publicate încă. Fii primul care adaugă un anunț!"
																	: "Încearcă să modifici criteriile de căutare sau filtrele pentru a găsi mai multe rezultate.",
														}),
														y.length === 0
															? e.jsx(ke, {
																	to: "/adauga-anunt",
																	className:
																		"bg-nexar-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors",
																	children: "Adaugă primul anunț",
															  })
															: e.jsx("button", {
																	onClick: J,
																	className:
																		"bg-nexar-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors",
																	children: "Șterge Toate Filtrele",
															  }),
													],
												}),
											!v &&
												!T &&
												G.length > 0 &&
												e.jsx("div", {
													className: "space-y-4",
													children: ie.map((I) =>
														e.jsx(Pe, { listing: I }, I.id),
													),
												}),
										],
									}),
								],
							}),
							e.jsxs("div", {
								className: "block lg:hidden",
								children: [
									v &&
										e.jsxs("div", {
											className:
												"bg-white rounded-xl shadow-sm p-8 text-center border border-gray-100",
											children: [
												e.jsx("div", {
													className:
														"w-12 h-12 border-4 border-nexar-accent border-t-transparent rounded-full animate-spin mx-auto mb-4",
												}),
												e.jsx("p", {
													className: "text-gray-600",
													children: "Se încarcă anunțurile...",
												}),
											],
										}),
									T &&
										!v &&
										e.jsxs("div", {
											className:
												"bg-white rounded-xl shadow-sm p-8 text-center border border-gray-100",
											children: [
												e.jsx("div", {
													className:
														"w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",
													children: e.jsx(Ft, {
														className: "h-6 w-6 text-red-500",
													}),
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold text-gray-900 mb-2",
													children: "Eroare la încărcare",
												}),
												e.jsx("p", {
													className: "text-gray-600 mb-6 text-sm",
													children: T,
												}),
												e.jsx("div", {
													className: "flex flex-col gap-3",
													children: e.jsxs("button", {
														onClick: N,
														className:
															"bg-nexar-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors flex items-center justify-center space-x-2",
														children: [
															e.jsx(cr, { className: "h-5 w-5" }),
															e.jsx("span", { children: "Încearcă din nou" }),
														],
													}),
												}),
											],
										}),
									!v &&
										!T &&
										G.length === 0 &&
										e.jsxs("div", {
											className:
												"bg-white rounded-xl shadow-sm p-8 text-center border border-gray-100",
											children: [
												e.jsx($o, {
													className: "h-12 w-12 text-gray-400 mx-auto mb-4",
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold text-gray-900 mb-2",
													children: "Nu am găsit rezultate",
												}),
												e.jsx("p", {
													className: "text-gray-600 mb-6 text-sm",
													children:
														y.length === 0
															? "Nu există anunțuri publicate încă. Fii primul care adaugă un anunț!"
															: "Încearcă să modifici criteriile de căutare sau filtrele pentru a găsi mai multe rezultate.",
												}),
												y.length === 0
													? e.jsx(ke, {
															to: "/adauga-anunt",
															className:
																"bg-nexar-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors",
															children: "Adaugă primul anunț",
													  })
													: e.jsx("button", {
															onClick: J,
															className:
																"bg-nexar-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors",
															children: "Șterge Toate Filtrele",
													  }),
											],
										}),
									!v &&
										!T &&
										G.length > 0 &&
										e.jsx("div", {
											className: "space-y-4",
											children: ie.map((I) => e.jsx(Pe, { listing: I }, I.id)),
										}),
								],
							}),
							!v &&
								!T &&
								G.length > 0 &&
								X > 1 &&
								e.jsx("div", {
									className: "mt-8 flex justify-center",
									children: e.jsxs("div", {
										className: "flex items-center space-x-2",
										children: [
											e.jsxs("button", {
												onClick: () => Ee(Math.max(1, l - 1)),
												disabled: l === 1,
												className:
													"flex items-center space-x-1 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
												children: [
													e.jsx(zo, { className: "h-4 w-4" }),
													e.jsx("span", {
														className: "hidden sm:inline",
														children: "Anterior",
													}),
												],
											}),
											[...Array(X)].map((I, ve) => {
												const re = ve + 1;
												return X <= 5 ||
													re === 1 ||
													re === X ||
													(re >= l - 1 && re <= l + 1)
													? e.jsx(
															"button",
															{
																onClick: () => Ee(re),
																className: `px-3 py-2 rounded-lg transition-colors ${
																	l === re
																		? "bg-nexar-accent text-white"
																		: "border border-gray-200 hover:bg-gray-50"
																}`,
																children: re,
															},
															re,
													  )
													: re === l - 2 || re === l + 2
													? e.jsx(
															"span",
															{
																className: "px-2 py-2 text-gray-400",
																children: "...",
															},
															re,
													  )
													: null;
											}),
											e.jsxs("button", {
												onClick: () => Ee(Math.min(X, l + 1)),
												disabled: l === X,
												className:
													"flex items-center space-x-1 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
												children: [
													e.jsx("span", {
														className: "hidden sm:inline",
														children: "Următorul",
													}),
													e.jsx(gi, { className: "h-4 w-4" }),
												],
											}),
										],
									}),
								}),
						],
					}),
				}),
				e.jsx("section", {
					className: "py-16 bg-white",
					children: e.jsxs("div", {
						className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
						children: [
							e.jsxs("div", {
								className: "text-center mb-10",
								children: [
									e.jsx("h2", {
										className:
											"text-2xl md:text-3xl font-bold text-gray-900 mb-3",
										children: "Categorii Populare",
									}),
									e.jsx("p", {
										className: "text-lg text-gray-600",
										children:
											"Găsește exact tipul de motocicletă pe care îl cauți",
									}),
								],
							}),
							e.jsx("div", {
								className:
									"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
								children: Se.map((I, ve) =>
									e.jsxs(
										ke,
										{
											to: `/?categorie=${I.name.toLowerCase()}`,
											className:
												"group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-200",
											onClick: () => {
												p((re) => ({ ...re, category: I.name.toLowerCase() })),
													window.scrollTo(0, 0);
											},
											children: [
												e.jsx("img", {
													loading: "lazy",
													src: I.image,
													alt: I.name,
													className:
														"w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300",
												}),
												e.jsx("div", {
													className:
														"absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent",
												}),
												e.jsx("div", {
													className:
														"absolute bottom-0 left-0 right-0 p-3 text-white",
													children: e.jsx("h3", {
														className: "font-bold mb-1",
														children: I.name,
													}),
												}),
											],
										},
										ve,
									),
								),
							}),
						],
					}),
				}),
				e.jsx("section", {
					className: "py-16 bg-gray-50",
					children: e.jsxs("div", {
						className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
						children: [
							e.jsxs("div", {
								className: "text-center mb-10",
								children: [
									e.jsx("h2", {
										className:
											"text-2xl md:text-3xl font-bold text-gray-900 mb-3",
										children: "De Ce Să Alegi Nexar?",
									}),
									e.jsx("p", {
										className: "text-lg text-gray-600 max-w-xl mx-auto",
										children:
											"Oferim cea mai sigură și eficientă platformă pentru cumpărarea și vânzarea motocicletelor",
									}),
								],
							}),
							e.jsxs("div", {
								className:
									"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
								children: [
									e.jsxs("div", {
										className:
											"bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow border border-gray-200",
										children: [
											e.jsx("div", {
												className:
													"inline-flex items-center justify-center w-12 h-12 bg-nexar-accent/10 rounded-lg mb-4",
												children: e.jsx(ts, {
													className: "h-6 w-6 text-nexar-accent",
												}),
											}),
											e.jsx("h3", {
												className: "text-lg font-bold text-gray-900 mb-3",
												children: "Siguranță Garantată",
											}),
											e.jsx("p", {
												className: "text-gray-600 leading-relaxed text-sm",
												children:
													"Toate anunțurile sunt verificate manual. Sistem de rating și recenzii pentru fiecare vânzător.",
											}),
										],
									}),
									e.jsxs("div", {
										className:
											"bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow border border-gray-200",
										children: [
											e.jsx("div", {
												className:
													"inline-flex items-center justify-center w-12 h-12 bg-nexar-accent/10 rounded-lg mb-4",
												children: e.jsx(ts, {
													className: "h-6 w-6 text-nexar-accent",
												}),
											}),
											e.jsx("h3", {
												className: "text-lg font-bold text-gray-900 mb-3",
												children: "Proces Simplificat",
											}),
											e.jsx("p", {
												className: "text-gray-600 leading-relaxed text-sm",
												children:
													"Interfață intuitivă și proces de listare simplu. Publică anunțul tău în doar câteva minute.",
											}),
										],
									}),
									e.jsxs("div", {
										className:
											"bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow border border-gray-200",
										children: [
											e.jsx("div", {
												className:
													"inline-flex items-center justify-center w-12 h-12 bg-nexar-accent/10 rounded-lg mb-4",
												children: e.jsx(Kn, {
													className: "h-6 w-6 text-nexar-accent",
												}),
											}),
											e.jsx("h3", {
												className: "text-lg font-bold text-gray-900 mb-3",
												children: "Comunitate Activă",
											}),
											e.jsx("p", {
												className: "text-gray-600 leading-relaxed text-sm",
												children:
													"Peste 15,000 de pasionați de motociclete. Găsește sfaturi și recomandări de la experți.",
											}),
										],
									}),
								],
							}),
						],
					}),
				}),
			],
		});
	};
class Ay {
	supabaseUrl;
	supabaseAnonKey;
	testClient;
	constructor() {
		(this.supabaseUrl = "https://tidnmzsivsthwwcfdzyo.supabase.co"),
			(this.supabaseAnonKey =
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpZG5tenNpdnN0aHd3Y2ZkenlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3MjE5NTgsImV4cCI6MjA2NjI5Nzk1OH0.Sr1gSZ2qtoff7gmulkT8uIzB8eL7gqKUUNVj82OqHog"),
			(this.testClient = Zo(this.supabaseUrl, this.supabaseAnonKey, {
				auth: {
					autoRefreshToken: !1,
					persistSession: !1,
					detectSessionInUrl: !1,
				},
			}));
	}
	async testBasicConnectivity() {
		try {
			console.log("🔍 Testing basic connectivity to Supabase...");
			const s = await fetch(`${this.supabaseUrl}/rest/v1/`, {
				method: "GET",
				headers: {
					apikey: this.supabaseAnonKey,
					Authorization: `Bearer ${this.supabaseAnonKey}`,
					"Content-Type": "application/json",
				},
			});
			if (!s.ok) throw new Error(`HTTP ${s.status}: ${s.statusText}`);
			return console.log("✅ Basic connectivity test passed"), { success: !0 };
		} catch (s) {
			return (
				console.error("❌ Basic connectivity test failed:", s),
				{
					success: !1,
					error: s.message,
					details: {
						url: this.supabaseUrl,
						errorType: s.name,
						message: s.message,
					},
				}
			);
		}
	}
	async testDatabaseAccess() {
		try {
			console.log("🔍 Testing database access...");
			const { data: s, error: a } = await this.testClient
				.from("profiles")
				.select("count", { count: "exact", head: !0 });
			if (a) throw a;
			return (
				console.log("✅ Database access test passed"),
				{ success: !0, details: { count: s } }
			);
		} catch (s) {
			return (
				console.error("❌ Database access test failed:", s),
				{
					success: !1,
					error: s.message,
					details: { errorCode: s.code, errorMessage: s.message, hint: s.hint },
				}
			);
		}
	}
	async testCORSConfiguration() {
		try {
			console.log("🔍 Testing CORS configuration...");
			const s = await fetch(`${this.supabaseUrl}/rest/v1/profiles`, {
					method: "OPTIONS",
					headers: {
						Origin: window.location.origin,
						"Access-Control-Request-Method": "GET",
						"Access-Control-Request-Headers":
							"apikey, authorization, content-type",
					},
				}),
				a = {
					"Access-Control-Allow-Origin": s.headers.get(
						"Access-Control-Allow-Origin",
					),
					"Access-Control-Allow-Methods": s.headers.get(
						"Access-Control-Allow-Methods",
					),
					"Access-Control-Allow-Headers": s.headers.get(
						"Access-Control-Allow-Headers",
					),
				};
			return (
				console.log("✅ CORS test completed", a),
				{
					success: !0,
					details: {
						corsHeaders: a,
						origin: window.location.origin,
						status: s.status,
					},
				}
			);
		} catch (s) {
			return (
				console.error("❌ CORS test failed:", s),
				{
					success: !1,
					error: s.message,
					details: { origin: window.location.origin, errorType: s.name },
				}
			);
		}
	}
	async runComprehensiveDiagnosis() {
		console.log("🚀 Starting comprehensive Supabase connection diagnosis...");
		const s = {
				connectivity: await this.testBasicConnectivity(),
				database: await this.testDatabaseAccess(),
				cors: await this.testCORSConfiguration(),
			},
			a = [];
		s.connectivity.success ||
			(a.push(
				"❌ Basic connectivity failed - Check if Supabase project is active and not paused",
			),
			a.push(
				"🔧 Verify project URL and API key in Supabase Dashboard → Settings → API",
			),
			a.push("🌐 Check your internet connection and firewall settings")),
			s.database.success ||
				(a.push(
					"❌ Database access failed - Check RLS policies and table permissions",
				),
				a.push("🔧 Ensure tables exist and are properly configured"),
				a.push("📋 Run the SQL migration script to fix database structure")),
			s.cors.success ||
				(a.push("❌ CORS configuration issue detected"),
				a.push(
					`🔧 Add ${window.location.origin} to CORS allowed origins in Supabase Dashboard`,
				),
				a.push("🌐 Go to Settings → API → CORS and add your domain"));
		const l = s.connectivity.success && s.database.success;
		return (
			l
				? a.push("✅ All tests passed! Connection is working properly")
				: (a.push("⚠️ Some tests failed - follow the recommendations above"),
				  a.push("🔄 After making changes, refresh the page and test again")),
			console.log("📊 Diagnosis complete:", {
				overall: l,
				tests: s,
				recommendations: a,
			}),
			{ overall: l, tests: s, recommendations: a }
		);
	}
	async attemptAutomaticFixes() {
		try {
			console.log("🔧 Attempting automatic fixes..."),
				localStorage.removeItem("supabase.auth.token"),
				sessionStorage.clear();
			const s = Zo(this.supabaseUrl, this.supabaseAnonKey, {
					auth: {
						autoRefreshToken: !0,
						persistSession: !0,
						detectSessionInUrl: !1,
					},
				}),
				{ data: a, error: l } = await s
					.from("profiles")
					.select("count", { count: "exact", head: !0 });
			if (l) throw l;
			return (
				console.log("✅ Automatic fix successful"),
				{
					success: !0,
					message: "Connection restored successfully!",
					details: { count: a },
				}
			);
		} catch (s) {
			return (
				console.error("❌ Automatic fix failed:", s),
				{
					success: !1,
					message: `Automatic fix failed: ${s.message}`,
					details: s,
				}
			);
		}
	}
}
const Jh = new Ay(),
	uc = ({ error: i, onRetry: s, onDiagnose: a }) => {
		const [l, c] = S.useState(!1),
			[u, h] = S.useState(null),
			[f, p] = S.useState(!1),
			y =
				i?.message?.includes("NetworkError") ||
				i?.message?.includes("fetch") ||
				i?.message?.includes("Failed to fetch"),
			g = async () => {
				c(!0), h(null);
				try {
					const w = await Jh.runComprehensiveDiagnosis();
					h(w);
				} catch (w) {
					console.error("Diagnosis failed:", w),
						h({
							overall: !1,
							tests: {},
							recommendations: [
								"Failed to run diagnosis - please check manually",
							],
						});
				} finally {
					c(!1);
				}
			},
			v = async () => {
				p(!0);
				try {
					(await Jh.attemptAutomaticFixes()).success &&
						setTimeout(() => {
							s();
						}, 1e3);
				} catch (w) {
					console.error("Quick fix failed:", w);
				} finally {
					p(!1);
				}
			};
		return y
			? e.jsxs("div", {
					className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6",
					children: [
						e.jsxs("div", {
							className: "text-center mb-6",
							children: [
								e.jsx("div", {
									className:
										"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",
									children: e.jsx(gg, { className: "h-8 w-8 text-red-600" }),
								}),
								e.jsx("h3", {
									className: "text-xl font-semibold text-gray-900 mb-2",
									children: "Problemă de Conectivitate",
								}),
								e.jsx("p", {
									className: "text-gray-600",
									children:
										"Nu ne putem conecta la serverul Supabase. Acest lucru poate fi cauzat de:",
								}),
							],
						}),
						e.jsxs("div", {
							className: "bg-gray-50 rounded-lg p-4 mb-6",
							children: [
								e.jsx("h4", {
									className: "font-semibold text-gray-900 mb-3",
									children: "Cauze posibile:",
								}),
								e.jsxs("ul", {
									className: "space-y-2 text-sm text-gray-700",
									children: [
										e.jsxs("li", {
											className: "flex items-start space-x-2",
											children: [
												e.jsx("span", {
													className: "text-red-500",
													children: "•",
												}),
												e.jsx("span", {
													children:
														"Proiectul Supabase este în pauză sau inactiv",
												}),
											],
										}),
										e.jsxs("li", {
											className: "flex items-start space-x-2",
											children: [
												e.jsx("span", {
													className: "text-red-500",
													children: "•",
												}),
												e.jsx("span", {
													children: "Configurare CORS incorectă",
												}),
											],
										}),
										e.jsxs("li", {
											className: "flex items-start space-x-2",
											children: [
												e.jsx("span", {
													className: "text-red-500",
													children: "•",
												}),
												e.jsx("span", {
													children: "Credențiale API incorecte",
												}),
											],
										}),
										e.jsxs("li", {
											className: "flex items-start space-x-2",
											children: [
												e.jsx("span", {
													className: "text-red-500",
													children: "•",
												}),
												e.jsx("span", {
													children: "Probleme de rețea sau firewall",
												}),
											],
										}),
									],
								}),
							],
						}),
						e.jsxs("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",
							children: [
								e.jsx("button", {
									onClick: g,
									disabled: l,
									className:
										"flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
									children: l
										? e.jsxs(e.Fragment, {
												children: [
													e.jsx("div", {
														className:
															"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin",
													}),
													e.jsx("span", { children: "Diagnosticare..." }),
												],
										  })
										: e.jsxs(e.Fragment, {
												children: [
													e.jsx(es, { className: "h-5 w-5" }),
													e.jsx("span", { children: "Rulează Diagnosticul" }),
												],
										  }),
								}),
								e.jsx("button", {
									onClick: v,
									disabled: f,
									className:
										"flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
									children: f
										? e.jsxs(e.Fragment, {
												children: [
													e.jsx("div", {
														className:
															"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin",
													}),
													e.jsx("span", { children: "Se repară..." }),
												],
										  })
										: e.jsxs(e.Fragment, {
												children: [
													e.jsx(cr, { className: "h-5 w-5" }),
													e.jsx("span", { children: "Încearcă Repararea" }),
												],
										  }),
								}),
							],
						}),
						u &&
							e.jsxs("div", {
								className: "bg-gray-50 rounded-lg p-4 mb-6",
								children: [
									e.jsx("h4", {
										className: "font-semibold text-gray-900 mb-3",
										children: "Rezultatul Diagnosticului:",
									}),
									e.jsxs("div", {
										className: "space-y-3 mb-4",
										children: [
											e.jsxs("div", {
												className: "flex items-center space-x-2",
												children: [
													e.jsx("div", {
														className: `w-3 h-3 rounded-full ${
															u.tests.connectivity?.success
																? "bg-green-500"
																: "bg-red-500"
														}`,
													}),
													e.jsxs("span", {
														className: "text-sm",
														children: [
															"Conectivitate de bază: ",
															u.tests.connectivity?.success ? "OK" : "EȘUAT",
														],
													}),
												],
											}),
											e.jsxs("div", {
												className: "flex items-center space-x-2",
												children: [
													e.jsx("div", {
														className: `w-3 h-3 rounded-full ${
															u.tests.database?.success
																? "bg-green-500"
																: "bg-red-500"
														}`,
													}),
													e.jsxs("span", {
														className: "text-sm",
														children: [
															"Acces bază de date: ",
															u.tests.database?.success ? "OK" : "EȘUAT",
														],
													}),
												],
											}),
											e.jsxs("div", {
												className: "flex items-center space-x-2",
												children: [
													e.jsx("div", {
														className: `w-3 h-3 rounded-full ${
															u.tests.cors?.success
																? "bg-green-500"
																: "bg-red-500"
														}`,
													}),
													e.jsxs("span", {
														className: "text-sm",
														children: [
															"Configurare CORS: ",
															u.tests.cors?.success ? "OK" : "EȘUAT",
														],
													}),
												],
											}),
										],
									}),
									e.jsxs("div", {
										className: "space-y-2",
										children: [
											e.jsx("h5", {
												className: "font-medium text-gray-800",
												children: "Recomandări:",
											}),
											u.recommendations.map((w, T) =>
												e.jsx(
													"p",
													{ className: "text-sm text-gray-700", children: w },
													T,
												),
											),
										],
									}),
								],
							}),
						e.jsxs("div", {
							className: "border-t border-gray-200 pt-4",
							children: [
								e.jsx("h4", {
									className: "font-semibold text-gray-900 mb-3",
									children: "Soluții Manuale:",
								}),
								e.jsxs("div", {
									className: "space-y-3",
									children: [
										e.jsxs("a", {
											href: "https://supabase.com/dashboard",
											target: "_blank",
											rel: "noopener noreferrer",
											className:
												"flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors",
											children: [
												e.jsx(ji, { className: "h-4 w-4" }),
												e.jsx("span", {
													children: "Verifică Supabase Dashboard",
												}),
											],
										}),
										e.jsxs("div", {
											className: "text-sm text-gray-600",
											children: [
												e.jsx("p", {
													className: "mb-2",
													children: e.jsx("strong", {
														children: "Pași de verificare:",
													}),
												}),
												e.jsxs("ol", {
													className: "list-decimal list-inside space-y-1 ml-4",
													children: [
														e.jsxs("li", {
															children: [
																"Verifică dacă proiectul ",
																e.jsx("code", {
																	className: "bg-gray-200 px-1 rounded",
																	children: "tidnmzsivsthwwcfdzyo",
																}),
																" este activ",
															],
														}),
														e.jsx("li", {
															children:
																"Mergi la Settings → API și verifică credențialele",
														}),
														e.jsxs("li", {
															children: [
																"Mergi la Settings → API → CORS și adaugă ",
																e.jsx("code", {
																	className: "bg-gray-200 px-1 rounded",
																	children: window.location.origin,
																}),
															],
														}),
														e.jsx("li", {
															children:
																"Salvează modificările și așteaptă câteva minute",
														}),
													],
												}),
											],
										}),
									],
								}),
							],
						}),
						e.jsx("div", {
							className: "flex justify-center mt-6",
							children: e.jsxs("button", {
								onClick: s,
								className:
									"flex items-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors",
								children: [
									e.jsx(cr, { className: "h-5 w-5" }),
									e.jsx("span", { children: "Încearcă Din Nou" }),
								],
							}),
						}),
					],
			  })
			: e.jsx("div", {
					className: "bg-red-50 border border-red-200 rounded-lg p-6",
					children: e.jsxs("div", {
						className: "flex items-start space-x-3",
						children: [
							e.jsx(he, { className: "h-6 w-6 text-red-600 mt-0.5" }),
							e.jsxs("div", {
								className: "flex-1",
								children: [
									e.jsx("h3", {
										className: "font-semibold text-red-800 mb-2",
										children: "A apărut o eroare",
									}),
									e.jsx("p", {
										className: "text-red-700 mb-4",
										children: i?.message || "Eroare necunoscută",
									}),
									e.jsx("button", {
										onClick: s,
										className:
											"bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors",
										children: "Încearcă din nou",
									}),
								],
							}),
						],
					}),
			  });
	},
	Ry = () => {
		const { id: i } = sc(),
			s = Nt(),
			[a, l] = S.useState(0),
			c = S.useRef(null),
			u = S.useRef(null),
			[h, f] = S.useState(null),
			[p, y] = S.useState(!0),
			[g, v] = S.useState(null),
			[w, T] = S.useState(null);
		S.useEffect(() => {
			window.scrollTo(0, 0), i && D(i);
		}, [i]);
		const D = async (ie) => {
				try {
					y(!0),
						v(null),
						T(null),
						console.log("🔄 Loading listing details for ID:", ie);
					const { data: Y, error: J } = await Ci.getById(ie);
					if (J) {
						console.error("❌ Error loading listing:", J),
							J.message?.includes("fetch") || J.message?.includes("network")
								? T(J)
								: v("Nu s-a putut încărca anunțul");
						return;
					}
					if (!Y) {
						console.error("❌ Listing not found"), v("Anunțul nu a fost găsit");
						return;
					}
					console.log("✅ Listing loaded successfully:", Y);
					const { data: Ee, error: Se } = await ae
						.from("profiles")
						.select("*")
						.eq("id", Y.seller_id)
						.single();
					Se && console.error("❌ Error loading seller profile:", Se);
					const Pe = {
						id: Y.id,
						title: Y.title,
						price: `€${Y.price.toLocaleString()}`,
						year: Y.year,
						mileage: `${Y.mileage.toLocaleString()} km`,
						location: Y.location,
						images:
							Y.images && Y.images.length > 0
								? Y.images
								: [
										"https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
								  ],
						seller: {
							id: Y.seller_id,
							name: Y.seller_name,
							verified: Ee?.verified || !1,
							phone: Ee?.phone || "0790 454 647",
							email: Ee?.email || "contact@nexar.ro",
							avatar:
								Ee?.avatar_url ||
								"https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
							type: Y.seller_type,
						},
						category: Y.category,
						brand: Y.brand,
						model: Y.model,
						engine: `${Y.engine_capacity}cc`,
						fuel: Y.fuel_type,
						transmission: Y.transmission,
						color: Y.color,
						condition: Y.condition,
						features: Y.features || [
							"ABS",
							"Control tracțiune",
							"Suspensie reglabilă",
							"Frâne Brembo",
						],
						description: Y.description || "Descriere indisponibilă",
						posted: U(Y.created_at),
						views: Y.views_count || 0,
						featured: Y.featured || !1,
						availability: Y.availability || "pe_stoc",
					};
					f(Pe);
				} catch (Y) {
					console.error("💥 Error in loadListing:", Y),
						Y.message?.includes("fetch") || Y.message?.includes("network")
							? T(Y)
							: v("A apărut o eroare la încărcarea anunțului");
				} finally {
					y(!1);
				}
			},
			U = (ie) => {
				const Y = new Date(ie),
					Ee = Math.abs(new Date().getTime() - Y.getTime()),
					Se = Math.ceil(Ee / (1e3 * 60 * 60 * 24));
				return Se === 0
					? "Astăzi"
					: Se === 1
					? "Ieri"
					: Se < 7
					? `Acum ${Se} zile`
					: Se < 30
					? `Acum ${Math.floor(Se / 7)} săptămâni`
					: Se < 365
					? `Acum ${Math.floor(Se / 30)} luni`
					: `Acum ${Math.floor(Se / 365)} ani`;
			},
			A = (ie) => {
				c.current = ie.targetTouches[0].clientX;
			},
			z = (ie) => {
				u.current = ie.targetTouches[0].clientX;
			},
			ee = () => {
				if (!c.current || !u.current || !h) return;
				const ie = c.current - u.current,
					Y = ie > 50,
					J = ie < -50;
				Y && a < h.images.length - 1 && l((Ee) => Ee + 1),
					J && a > 0 && l((Ee) => Ee - 1),
					(c.current = null),
					(u.current = null);
			},
			N = () => {
				h && l((ie) => (ie === h.images.length - 1 ? 0 : ie + 1));
			},
			G = () => {
				h && l((ie) => (ie === 0 ? h.images.length - 1 : ie - 1));
			},
			X = () => {
				if (!h) return;
				const ie = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
					h.location + ", Romania",
				)}`;
				window.open(ie, "_blank");
			},
			ne = () => {
				h && s(`/profil/${h.seller.id}`);
			};
		if (p)
			return e.jsx("div", {
				className: "min-h-screen bg-gray-50 flex items-center justify-center",
				children: e.jsxs("div", {
					className: "bg-white p-8 rounded-2xl shadow-lg text-center",
					children: [
						e.jsx("div", {
							className:
								"w-16 h-16 border-4 border-nexar-accent border-t-transparent rounded-full animate-spin mx-auto mb-4",
						}),
						e.jsx("p", {
							className: "text-gray-600",
							children: "Se încarcă anunțul...",
						}),
					],
				}),
			});
		if (w)
			return e.jsx("div", {
				className:
					"min-h-screen bg-gray-50 flex items-center justify-center p-4",
				children: e.jsx(uc, { error: w, onRetry: () => i && D(i) }),
			});
		if (g || !h)
			return e.jsx("div", {
				className: "min-h-screen bg-gray-50 flex items-center justify-center",
				children: e.jsxs("div", {
					className: "bg-white p-8 rounded-2xl shadow-lg text-center max-w-md",
					children: [
						e.jsx(he, { className: "h-16 w-16 text-red-500 mx-auto mb-4" }),
						e.jsx("h2", {
							className: "text-2xl font-bold text-gray-900 mb-2",
							children: g || "Anunț negăsit",
						}),
						e.jsx("p", {
							className: "text-gray-600 mb-6",
							children: g || "Anunțul căutat nu există sau a fost șters.",
						}),
						e.jsx("div", {
							className: "flex flex-col sm:flex-row gap-4",
							children: e.jsx(ke, {
								to: "/",
								className:
									"bg-nexar-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors",
								children: "Vezi toate anunțurile",
							}),
						}),
					],
				}),
			});
		const le = [
			{
				icon: Vs,
				label: "Categorie",
				value: h.category,
				color: "text-blue-600",
			},
			{
				icon: ig,
				label: "Transmisie",
				value: h.transmission,
				color: "text-green-600",
			},
			{ icon: mg, label: "Culoare", value: h.color, color: "text-purple-600" },
			{
				icon: hm,
				label: "Stare",
				value: h.condition,
				color: "text-emerald-600",
			},
			{ icon: lr, label: "Locație", value: h.location, color: "text-red-600" },
		];
		return e.jsx("div", {
			className: "min-h-screen bg-gray-50 py-4 sm:py-8",
			children: e.jsx("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: e.jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8",
					children: [
						e.jsxs("div", {
							className: "lg:col-span-2 space-y-6 sm:space-y-8",
							children: [
								e.jsxs("div", {
									className: "bg-white rounded-2xl shadow-lg overflow-hidden",
									children: [
										e.jsxs("div", {
											className: "relative",
											onTouchStart: A,
											onTouchMove: z,
											onTouchEnd: ee,
											children: [
												e.jsx("img", {
													src: h.imagesThumbs?.[a] || h.images[a],
													alt: h.title,
													className: "w-full h-64 sm:h-96 object-cover",
													onError: (ie) => {
														const Y = ie.currentTarget;
														Y.src =
															"https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg";
													},
												}),
												h.featured &&
													e.jsx("div", {
														className:
															"absolute top-3 sm:top-4 left-3 sm:left-4",
														children: e.jsx("span", {
															className:
																"bg-nexar-accent text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold text-sm",
															children: "Premium",
														}),
													}),
												e.jsx("div", {
													className:
														"absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-2",
													children: e.jsx("button", {
														className:
															"bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white transition-colors",
														children: e.jsx(pg, {
															className: "h-4 w-4 sm:h-5 sm:w-5 text-gray-600",
														}),
													}),
												}),
												e.jsx("button", {
													onClick: G,
													className:
														"absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors",
													children: e.jsx(zo, {
														className: "h-5 w-5 sm:h-6 sm:w-6 text-gray-600",
													}),
												}),
												e.jsx("button", {
													onClick: N,
													className:
														"absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors",
													children: e.jsx(gi, {
														className: "h-5 w-5 sm:h-6 sm:w-6 text-gray-600",
													}),
												}),
												e.jsx("div", {
													className:
														"absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2",
													children: h.images.map((ie, Y) =>
														e.jsx(
															"button",
															{
																onClick: () => l(Y),
																className: `w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
																	Y === a ? "bg-white" : "bg-white/50"
																}`,
															},
															Y,
														),
													),
												}),
											],
										}),
										e.jsx("div", {
											className: "p-4 hidden sm:block",
											children: e.jsx("div", {
												className: "flex space-x-2 overflow-x-auto",
												children: h.images.map((ie, Y) =>
													e.jsx(
														"button",
														{
															onClick: () => l(Y),
															className: `flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-colors ${
																Y === a
																	? "border-nexar-accent"
																	: "border-gray-200"
															}`,
															children: e.jsx("img", {
																src: ie,
																alt: `${h.brand} ${h.model} ${Y + 1}`,
																className: "w-full h-full object-cover",
																onError: (J) => {
																	const Ee = J.currentTarget;
																	Ee.src =
																		"https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg";
																},
															}),
														},
														Y,
													),
												),
											}),
										}),
									],
								}),
								e.jsxs("div", {
									className: "bg-white rounded-2xl shadow-lg p-4 sm:p-8",
									children: [
										e.jsxs("div", {
											className:
												"flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6",
											children: [
												e.jsxs("div", {
													className: "mb-4 sm:mb-0",
													children: [
														e.jsx("h1", {
															className:
																"text-2xl sm:text-3xl font-bold text-gray-900 mb-2",
															children: h.title,
														}),
														e.jsxs("h2", {
															className:
																"text-xl sm:text-2xl font-bold text-gray-800 mb-2",
															children: [h.brand, " ", h.model],
														}),
														e.jsxs("div", {
															className:
																"flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 text-sm",
															children: [
																e.jsxs("span", {
																	className: "flex items-center space-x-1",
																	children: [
																		e.jsx(Vs, { className: "h-4 w-4" }),
																		e.jsxs("span", {
																			children: ["Publicat ", h.posted],
																		}),
																	],
																}),
																e.jsxs("span", {
																	children: [h.views, " vizualizări"],
																}),
															],
														}),
													],
												}),
												e.jsx("div", {
													className: "text-left sm:text-right",
													children: e.jsx("div", {
														className:
															"text-3xl sm:text-4xl font-bold text-nexar-accent mb-2",
														children: h.price,
													}),
												}),
											],
										}),
										h.seller.type === "dealer" &&
											e.jsxs("div", {
												className:
													"mb-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4 rounded-xl shadow-lg border border-emerald-400 flex items-center justify-between",
												children: [
													e.jsxs("div", {
														className: "flex items-center space-x-3",
														children: [
															e.jsx(Hs, { className: "h-6 w-6" }),
															e.jsxs("div", {
																children: [
																	e.jsx("div", {
																		className: "font-bold text-lg",
																		children: "DEALER VERIFICAT",
																	}),
																	e.jsxs("button", {
																		onClick: ne,
																		className:
																			"text-white underline hover:text-emerald-100 transition-colors text-sm",
																		children: ["Vândut de ", h.seller.name],
																	}),
																],
															}),
														],
													}),
													e.jsx("div", {
														className:
															"w-3 h-3 bg-white rounded-full animate-pulse",
													}),
												],
											}),
										h.seller.type === "dealer" &&
											e.jsx("div", {
												className: "mb-4 flex justify-start",
												children: e.jsx("div", {
													className: `inline-flex items-center space-x-2 px-4 py-2 rounded-lg ${
														h.availability === "pe_stoc"
															? "bg-green-100 text-green-800 border border-green-200"
															: "bg-blue-100 text-blue-800 border border-blue-200"
													}`,
													children:
														h.availability === "pe_stoc"
															? e.jsxs(e.Fragment, {
																	children: [
																		e.jsx(Ei, { className: "h-4 w-4" }),
																		e.jsx("span", {
																			className: "font-medium",
																			children: "Pe stoc",
																		}),
																	],
															  })
															: e.jsxs(e.Fragment, {
																	children: [
																		e.jsx(Yt, { className: "h-4 w-4" }),
																		e.jsx("span", {
																			className: "font-medium",
																			children: "La comandă",
																		}),
																	],
															  }),
												}),
											}),
										e.jsxs("div", {
											className:
												"grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8",
											children: [
												e.jsxs("div", {
													className:
														"text-center p-3 sm:p-4 bg-gray-50 rounded-xl",
													children: [
														e.jsx(Vs, {
															className:
																"h-6 w-6 sm:h-8 sm:w-8 text-nexar-accent mx-auto mb-2",
														}),
														e.jsx("div", {
															className:
																"font-semibold text-gray-900 text-sm sm:text-base",
															children: h.year,
														}),
														e.jsx("div", {
															className: "text-xs sm:text-sm text-gray-600",
															children: "An fabricație",
														}),
													],
												}),
												e.jsxs("div", {
													className:
														"text-center p-3 sm:p-4 bg-gray-50 rounded-xl",
													children: [
														e.jsx(fm, {
															className:
																"h-6 w-6 sm:h-8 sm:w-8 text-nexar-accent mx-auto mb-2",
														}),
														e.jsx("div", {
															className:
																"font-semibold text-gray-900 text-sm sm:text-base",
															children: h.mileage,
														}),
														e.jsx("div", {
															className: "text-xs sm:text-sm text-gray-600",
															children: "Kilometraj",
														}),
													],
												}),
												e.jsxs("div", {
													className:
														"text-center p-3 sm:p-4 bg-gray-50 rounded-xl",
													children: [
														e.jsx(es, {
															className:
																"h-6 w-6 sm:h-8 sm:w-8 text-nexar-accent mx-auto mb-2",
														}),
														e.jsx("div", {
															className:
																"font-semibold text-gray-900 text-sm sm:text-base",
															children: h.engine,
														}),
														e.jsx("div", {
															className: "text-xs sm:text-sm text-gray-600",
															children: "Capacitate motor",
														}),
													],
												}),
												e.jsxs("div", {
													className:
														"text-center p-3 sm:p-4 bg-gray-50 rounded-xl",
													children: [
														e.jsx(cg, {
															className:
																"h-6 w-6 sm:h-8 sm:w-8 text-nexar-accent mx-auto mb-2",
														}),
														e.jsx("div", {
															className:
																"font-semibold text-gray-900 text-sm sm:text-base",
															children: h.fuel,
														}),
														e.jsx("div", {
															className: "text-xs sm:text-sm text-gray-600",
															children: "Combustibil",
														}),
													],
												}),
											],
										}),
										e.jsxs("div", {
											className:
												"grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8",
											children: [
												e.jsxs("div", {
													className:
														"bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 sm:p-6",
													children: [
														e.jsxs("h3", {
															className:
																"text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center space-x-2",
															children: [
																e.jsx(sg, {
																	className:
																		"h-5 w-5 sm:h-6 sm:w-6 text-nexar-accent",
																}),
																e.jsx("span", { children: "Detalii Tehnice" }),
															],
														}),
														e.jsx("div", {
															className: "space-y-3 sm:space-y-4",
															children: le.map((ie, Y) =>
																e.jsxs(
																	"div",
																	{
																		className:
																			"flex items-center justify-between p-2 sm:p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow",
																		children: [
																			e.jsxs("div", {
																				className:
																					"flex items-center space-x-2 sm:space-x-3",
																				children: [
																					e.jsx("div", {
																						className: `p-1.5 sm:p-2 rounded-lg bg-gray-50 ${ie.color}`,
																						children: e.jsx(ie.icon, {
																							className:
																								"h-4 w-4 sm:h-5 sm:w-5",
																						}),
																					}),
																					e.jsx("span", {
																						className:
																							"font-medium text-gray-700 text-sm sm:text-base",
																						children: ie.label,
																					}),
																				],
																			}),
																			e.jsx("span", {
																				className:
																					"font-bold text-gray-900 text-sm sm:text-base",
																				children: ie.value,
																			}),
																		],
																	},
																	Y,
																),
															),
														}),
													],
												}),
												e.jsxs("div", {
													className:
														"bg-gradient-to-br from-nexar-accent/5 to-nexar-gold/5 rounded-2xl p-4 sm:p-6",
													children: [
														e.jsxs("h3", {
															className:
																"text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center space-x-2",
															children: [
																e.jsx(es, {
																	className:
																		"h-5 w-5 sm:h-6 sm:w-6 text-nexar-accent",
																}),
																e.jsx("span", { children: "Dotări" }),
															],
														}),
														e.jsx("div", {
															className: "grid grid-cols-1 gap-2 sm:gap-3",
															children: h.features.map((ie, Y) =>
																e.jsxs(
																	"div",
																	{
																		className:
																			"flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105",
																		children: [
																			e.jsx("div", {
																				className:
																					"flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-nexar-accent/10 rounded-full flex items-center justify-center",
																				children: e.jsx(ts, {
																					className:
																						"h-3 w-3 sm:h-4 sm:w-4 text-nexar-accent",
																				}),
																			}),
																			e.jsx("span", {
																				className:
																					"font-medium text-gray-800 text-sm sm:text-base",
																				children: ie,
																			}),
																		],
																	},
																	Y,
																),
															),
														}),
													],
												}),
											],
										}),
										e.jsxs("div", {
											className:
												"bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6",
											children: [
												e.jsxs("h3", {
													className:
														"text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center space-x-2",
													children: [
														e.jsx(es, {
															className: "h-5 w-5 sm:h-6 sm:w-6 text-blue-600",
														}),
														e.jsx("span", { children: "Descriere Detaliată" }),
													],
												}),
												e.jsx("div", {
													className:
														"prose max-w-none text-gray-700 leading-relaxed text-sm sm:text-base",
													children: e.jsx("div", {
														className: "whitespace-pre-wrap break-words",
														children: h.description,
													}),
												}),
											],
										}),
									],
								}),
							],
						}),
						e.jsx("div", {
							className: "space-y-4 sm:space-y-6",
							children: e.jsxs("div", {
								className: "bg-white rounded-2xl shadow-lg p-4 sm:p-6",
								children: [
									e.jsxs("div", {
										className:
											"flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6",
										children: [
											e.jsx("img", {
												loading: "lazy",
												src: h.seller.avatar,
												alt: h.seller.name,
												className:
													"w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover",
												onError: (ie) => {
													const Y = ie.currentTarget;
													Y.src =
														"https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg";
												},
											}),
											e.jsx("div", {
												children: e.jsx("div", {
													className: "flex items-center space-x-2",
													children: e.jsx("button", {
														onClick: ne,
														className:
															"text-base sm:text-lg font-semibold text-nexar-accent hover:text-nexar-gold transition-colors",
														children: h.seller.name,
													}),
												}),
											}),
										],
									}),
									h.seller.type === "dealer" &&
										e.jsxs("div", {
											className:
												"mb-4 p-3 bg-emerald-100 text-emerald-800 rounded-lg flex items-center justify-between lg:hidden",
											children: [
												e.jsxs("div", {
													className: "flex items-center space-x-2",
													children: [
														e.jsx(Hs, { className: "h-5 w-5" }),
														e.jsx("span", {
															className: "font-bold",
															children: "DEALER VERIFICAT",
														}),
													],
												}),
												e.jsx("div", {
													className:
														"w-2 h-2 bg-emerald-600 rounded-full animate-pulse",
												}),
											],
										}),
									e.jsxs("div", {
										className: "space-y-2 sm:space-y-3",
										children: [
											e.jsxs("a", {
												href: `tel:${h.seller.phone}`,
												className:
													"w-full bg-nexar-accent text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-nexar-gold transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base",
												children: [
													e.jsx(ss, { className: "h-4 w-4 sm:h-5 sm:w-5" }),
													e.jsx("span", { children: "Sună Acum" }),
												],
											}),
											e.jsxs("button", {
												onClick: X,
												className:
													"w-full border-2 border-gray-900 text-gray-900 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base",
												children: [
													e.jsx(ji, { className: "h-4 w-4 sm:h-5 sm:w-5" }),
													e.jsx("span", { children: "Vezi pe Hartă" }),
												],
											}),
										],
									}),
								],
							}),
						}),
					],
				}),
			}),
		});
	},
	zm = ({
		isOpen: i,
		onClose: s,
		onGoHome: a,
		onViewListing: l,
		title: c = "Felicitări!",
		message: u = "Anunțul a fost publicat cu succes!",
		showViewButton: h = !1,
	}) =>
		i
			? e.jsx("div", {
					className:
						"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
					children: e.jsxs("div", {
						className:
							"bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 animate-scale-in",
						children: [
							e.jsxs("div", {
								className: "text-center p-8 pb-6",
								children: [
									e.jsx("div", {
										className:
											"w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce",
										children: e.jsx(yt, {
											className: "h-12 w-12 text-green-500",
										}),
									}),
									e.jsx("h2", {
										className: "text-2xl font-bold text-gray-900 mb-3",
										children: c,
									}),
									e.jsx("p", {
										className: "text-gray-600 leading-relaxed",
										children: u,
									}),
								],
							}),
							e.jsx("div", {
								className: "px-8 pb-8",
								children: e.jsxs("div", {
									className: "space-y-3",
									children: [
										e.jsxs("button", {
											onClick: a,
											className:
												"w-full bg-nexar-accent text-white py-4 rounded-xl font-semibold hover:bg-nexar-gold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg",
											children: [
												e.jsx(wi, { className: "h-5 w-5" }),
												e.jsx("span", {
													children: "Mergi la Pagina Principală",
												}),
											],
										}),
										h &&
											l &&
											e.jsxs("button", {
												onClick: l,
												className:
													"w-full bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center justify-center space-x-2",
												children: [
													e.jsx(or, { className: "h-5 w-5" }),
													e.jsx("span", { children: "Vezi Anunțul" }),
												],
											}),
										e.jsx("button", {
											onClick: s,
											className:
												"w-full text-gray-500 py-2 rounded-xl font-medium hover:text-gray-700 transition-colors",
											children: "Închide",
										}),
									],
								}),
							}),
							e.jsx("div", {
								className:
									"absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full animate-ping",
							}),
							e.jsx("div", {
								className:
									"absolute top-6 right-6 w-1 h-1 bg-green-300 rounded-full animate-pulse",
							}),
							e.jsx("div", {
								className:
									"absolute bottom-8 left-6 w-1.5 h-1.5 bg-green-200 rounded-full animate-bounce",
							}),
						],
					}),
			  })
			: null,
	Mm = async () => {
		try {
			console.log("🔍 Verificare conexiune Supabase...");
			const { error: i } = await ae
				.from("profiles")
				.select("count", { count: "exact", head: !0 });
			if (i) {
				console.error("❌ Eroare la testarea conexiunii:", i), await Ly();
				const { error: s } = await ae
					.from("profiles")
					.select("count", { count: "exact", head: !0 });
				return s
					? (console.error(
							"❌ Conexiunea tot nu funcționează după reparare:",
							s,
					  ),
					  !1)
					: (console.log("✅ Conexiunea a fost reparată cu succes!"), !0);
			}
			return console.log("✅ Conexiunea la Supabase funcționează corect"), !0;
		} catch (i) {
			return console.error("💥 Eroare la verificarea conexiunii:", i), !1;
		}
	},
	Ly = async () => {
		try {
			console.log("🔧 Încercare de reparare a politicilor RLS...");
			const { error: i } = await ae.rpc("fix_rls_policies");
			i
				? (console.error("❌ Eroare la repararea politicilor RLS:", i),
				  console.log(
						"ℹ️ Contactează administratorul pentru a rula script-ul de reparare",
				  ))
				: console.log("✅ Politicile RLS au fost reparate cu succes!");
		} catch (i) {
			console.error("💥 Eroare la repararea politicilor RLS:", i);
		}
	},
	Dm = async () => {
		try {
			console.log(
				"🔧 Încercare de reparare a profilului utilizatorului curent...",
			);
			const {
				data: { user: i },
				error: s,
			} = await ae.auth.getUser();
			if (s || !i)
				return (
					console.error("❌ Utilizatorul nu este autentificat:", s),
					{ success: !1, error: "Utilizatorul nu este autentificat" }
				);
			const { data: a, error: l } = await ae
				.from("profiles")
				.select("*")
				.eq("user_id", i.id)
				.single();
			if (a && !l)
				return (
					console.log("✅ Profilul există deja, nu este necesară repararea"),
					{ success: !0, message: "Profilul există deja" }
				);
			const { data: c, error: u } = await ae
				.from("profiles")
				.insert([
					{
						user_id: i.id,
						name:
							i.user_metadata?.name || i.email?.split("@")[0] || "Utilizator",
						email: i.email,
						phone: i.user_metadata?.phone || "",
						location: i.user_metadata?.location || "",
						seller_type: i.user_metadata?.sellerType || "individual",
						is_admin: i.email === "admin@nexar.ro",
					},
				])
				.select()
				.single();
			return u
				? (console.error("❌ Eroare la crearea profilului:", u),
				  { success: !1, error: u })
				: (console.log("✅ Profilul a fost creat cu succes:", c),
				  { success: !0, message: "Profilul a fost creat cu succes" });
		} catch (i) {
			return (
				console.error("💥 Eroare la repararea profilului:", i),
				{ success: !1, error: i }
			);
		}
	},
	Oy = async () => {
		try {
			if (
				(console.log("🔧 Începere reparare completă Supabase..."),
				!(await Mm()))
			)
				return {
					success: !1,
					message:
						"Nu s-a putut repara conexiunea la Supabase. Contactează administratorul.",
				};
			const s = await Dm();
			return s.success
				? (await Iy(),
				  {
						success: !0,
						message: "Toate problemele au fost reparate cu succes!",
				  })
				: {
						success: !1,
						message: `Conexiunea a fost reparată, dar profilul nu: ${s.error}`,
				  };
		} catch (i) {
			return (
				console.error("💥 Eroare la repararea completă:", i),
				{ success: !1, error: i }
			);
		}
	},
	Iy = async () => {
		try {
			console.log("🔧 Verificare și reparare bucket-uri storage...");
			const { data: i, error: s } = await ae.storage.listBuckets();
			if (s) {
				console.error("❌ Eroare la listarea bucket-urilor:", s);
				return;
			}
			const a = i?.map((l) => l.name) || [];
			if (!a.includes("listing-images")) {
				console.log("🔧 Creăm bucket-ul listing-images...");
				try {
					const { error: l } = await ae.storage.createBucket("listing-images", {
						public: !0,
						fileSizeLimit: 5242880,
						allowedMimeTypes: ["image/jpeg", "image/png", "image/webp"],
					});
					l
						? console.error(
								"❌ Eroare la crearea bucket-ului listing-images:",
								l,
						  )
						: console.log(
								"✅ Bucket-ul listing-images a fost creat cu succes!",
						  );
				} catch (l) {
					console.error("❌ Eroare la crearea bucket-ului listing-images:", l);
				}
			}
			if (!a.includes("profile-images")) {
				console.log("🔧 Creăm bucket-ul profile-images...");
				try {
					const { error: l } = await ae.storage.createBucket("profile-images", {
						public: !0,
						fileSizeLimit: 2097152,
						allowedMimeTypes: ["image/jpeg", "image/png", "image/webp"],
					});
					l
						? console.error(
								"❌ Eroare la crearea bucket-ului profile-images:",
								l,
						  )
						: console.log(
								"✅ Bucket-ul profile-images a fost creat cu succes!",
						  );
				} catch (l) {
					console.error("❌ Eroare la crearea bucket-ului profile-images:", l);
				}
			}
			await zy();
		} catch (i) {
			console.error("💥 Eroare la repararea bucket-urilor:", i);
		}
	},
	zy = async () => {
		try {
			console.log("🔧 Configurare politici storage...");
			const { error: i } = await ae.rpc("configure_storage_policies");
			i
				? (console.error("❌ Eroare la configurarea politicilor storage:", i),
				  console.log(
						"ℹ️ Contactează administratorul pentru a configura politicile storage",
				  ))
				: console.log("✅ Politicile storage au fost configurate cu succes!");
		} catch (i) {
			console.error("💥 Eroare la configurarea politicilor storage:", i);
		}
	},
	Um = () => {
		try {
			console.log("🧹 Curățare cache browser..."),
				localStorage.removeItem("supabase.auth.token");
			const i = ["user"];
			Object.keys(localStorage).forEach((s) => {
				i.includes(s) || localStorage.removeItem(s);
			}),
				console.log("✅ Cache-ul browser-ului a fost curățat cu succes!");
		} catch (i) {
			console.error("💥 Eroare la curățarea cache-ului:", i);
		}
	},
	Fm = () => {
		try {
			console.log("🔧 Reparare probleme cu cookie-uri..."),
				document.cookie.split(";").forEach((i) => {
					const [s] = i.trim().split("=");
					document.cookie = `${s}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
				}),
				console.log("✅ Cookie-urile au fost reparate cu succes!");
		} catch (i) {
			console.error("💥 Eroare la repararea cookie-urilor:", i);
		}
	},
	Pi = ({
		onSuccess: i,
		onError: s,
		buttonText: a = "Repară Conexiunea",
		className: l = "bg-nexar-accent text-white",
	}) => {
		const [c, u] = S.useState(!1),
			[h, f] = S.useState({}),
			p = async () => {
				u(!0), f({});
				try {
					Um(), Fm();
					const y = await Oy();
					f({ success: y.success, message: y.message }),
						y.success
							? i
								? setTimeout(i, 1500)
								: setTimeout(() => {
										window.location.reload();
								  }, 2e3)
							: s && s();
				} catch (y) {
					console.error("Eroare la repararea conexiunii:", y),
						f({ success: !1, message: "A apărut o eroare neașteptată" }),
						s && s();
				} finally {
					u(!1);
				}
			};
		return e.jsxs("div", {
			className: "flex flex-col items-center",
			children: [
				e.jsx("button", {
					onClick: p,
					disabled: c,
					className: `flex items-center space-x-2 ${l} px-4 py-2 rounded-lg font-semibold hover:bg-nexar-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed`,
					children: c
						? e.jsxs(e.Fragment, {
								children: [
									e.jsx("div", {
										className:
											"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin",
									}),
									e.jsx("span", { children: "Se repară..." }),
								],
						  })
						: e.jsxs(e.Fragment, {
								children: [
									e.jsx(cr, { className: "h-5 w-5" }),
									e.jsx("span", { children: a }),
								],
						  }),
				}),
				h.message &&
					e.jsx("div", {
						className: `mt-3 p-3 rounded-lg ${
							h.success
								? "bg-green-100 text-green-800"
								: "bg-red-100 text-red-800"
						}`,
						children: e.jsxs("div", {
							className: "flex items-center space-x-2",
							children: [
								h.success
									? e.jsx(yt, { className: "h-5 w-5" })
									: e.jsx(Ws, { className: "h-5 w-5" }),
								e.jsx("span", { children: h.message }),
							],
						}),
					}),
			],
		});
	},
	My = () => {
		const [i, s] = S.useState(1),
			[a, l] = S.useState([]),
			[c, u] = S.useState([]),
			[h, f] = S.useState({}),
			[p, y] = S.useState(!1),
			[g, v] = S.useState(null),
			[w, T] = S.useState(!0),
			[D, U] = S.useState(!1),
			[A, z] = S.useState(null),
			ee = Nt(),
			[N, G] = S.useState({
				title: "",
				category: "",
				brand: "",
				model: "",
				year: "",
				mileage: "",
				engine: "",
				fuel: "",
				transmission: "",
				color: "",
				condition: "",
				price: "",
				location: "",
				description: "",
				features: [],
				phone: "",
				email: "",
				availability: "pe_stoc",
			});
		S.useEffect(() => {
			X();
		}, []);
		const X = async () => {
				try {
					if ((T(!0), !(await Im()))) {
						ee("/auth");
						return;
					}
					const {
						data: { user: F },
					} = await ae.auth.getUser();
					if (!F) {
						ee("/auth");
						return;
					}
					const { data: Q, error: se } = await ae
						.from("profiles")
						.select("*")
						.eq("user_id", F.id)
						.single();
					if (se) {
						console.error("Error loading profile:", se), ee("/profil");
						return;
					}
					Q &&
						(v(Q),
						G((be) => ({
							...be,
							email: Q.email || "",
							phone: Q.phone || "",
							location: "",
						})));
				} catch (C) {
					console.error("Error checking auth and loading profile:", C),
						ee("/auth");
				} finally {
					T(!1);
				}
			},
			ne = [
				{
					id: 1,
					title: "Informații de bază",
					description: "Detalii despre motocicletă",
				},
				{ id: 2, title: "Fotografii", description: "Adaugă până la 5 poze" },
				{ id: 3, title: "Descriere și preț", description: "Detalii complete" },
				{ id: 4, title: "Contact", description: "Informații de contact" },
			],
			le = [
				"Sport",
				"Touring",
				"Cruiser",
				"Adventure",
				"Naked",
				"Scooter",
				"Enduro",
				"Chopper",
			],
			ie = [
				"Yamaha",
				"Honda",
				"Suzuki",
				"Kawasaki",
				"BMW",
				"Ducati",
				"KTM",
				"Aprilia",
				"Triumph",
				"Harley-Davidson",
				"MV Agusta",
				"Benelli",
				"Moto Guzzi",
				"Indian",
				"Zero",
				"Energica",
				"Husqvarna",
				"Beta",
				"Sherco",
				"GasGas",
			],
			Y = ["Benzină", "Electric", "Hibrid"],
			J = ["Manual", "Automat", "Semi-automat"],
			Ee = ["Nouă", "Excelentă", "Foarte bună", "Bună", "Satisfăcătoare"],
			Se = [
				{ value: "pe_stoc", label: "Pe stoc" },
				{ value: "la_comanda", label: "La comandă" },
			],
			Pe = [
				"ABS",
				"Control tracțiune",
				"Suspensie reglabilă",
				"Frâne Brembo",
				"Quickshifter",
				"Sistem de navigație",
				"Încălzire mânere",
				"LED complet",
				"Bluetooth",
				"USB",
				"Geantă laterală",
				"Parbriz reglabil",
				"Scaun încălzit",
				"Tempomat",
				"Sistem anti-furt",
				"Jante aliaj",
			],
			I = (C, F) => {
				switch (C) {
					case "category":
						return F.toLowerCase();
					case "fuel":
						return (
							{ Benzină: "benzina", Electric: "electric", Hibrid: "hibrid" }[
								F
							] || F.toLowerCase()
						);
					case "transmission":
						return (
							{
								Manual: "manuala",
								Automat: "automata",
								"Semi-automat": "semi-automata",
							}[F] || F.toLowerCase()
						);
					case "condition":
						return (
							{
								Nouă: "noua",
								Excelentă: "excelenta",
								"Foarte bună": "foarte_buna",
								Bună: "buna",
								Satisfăcătoare: "satisfacatoare",
							}[F] || F.toLowerCase()
						);
					default:
						return F;
				}
			},
			ve = (C) => {
				const F = {};
				switch (C) {
					case 1:
						if (
							(N.title.trim() || (F.title = "Titlul este obligatoriu"),
							N.title.length > 100 &&
								(F.title = "Titlul nu poate depăși 100 de caractere"),
							N.category || (F.category = "Categoria este obligatorie"),
							N.brand || (F.brand = "Marca este obligatorie"),
							N.model.trim() || (F.model = "Modelul este obligatoriu"),
							!N.year)
						)
							F.year = "Anul este obligatoriu";
						else {
							const Q = parseInt(N.year),
								se = new Date().getFullYear();
							(Q < 1990 || Q > se + 1) &&
								(F.year = `Anul trebuie să fie între 1990 și ${se + 1}`);
						}
						if (!N.mileage) F.mileage = "Kilometrajul este obligatoriu";
						else {
							const Q = parseInt(N.mileage);
							(Q < 0 || Q > 5e5) &&
								(F.mileage =
									"Kilometrajul trebuie să fie între 0 și 500,000 km");
						}
						if (!N.engine) F.engine = "Capacitatea motorului este obligatorie";
						else {
							const Q = parseInt(N.engine);
							(Q < 50 || Q > 3e3) &&
								(F.engine =
									"Capacitatea motorului trebuie să fie între 50 și 3000 cc");
						}
						N.fuel || (F.fuel = "Tipul de combustibil este obligatoriu"),
							N.transmission ||
								(F.transmission = "Transmisia este obligatorie"),
							N.color.trim() || (F.color = "Culoarea este obligatorie"),
							N.condition || (F.condition = "Starea este obligatorie"),
							N.location.trim()
								? Bt.includes(N.location.trim()) ||
								  (F.location =
										"Te rugăm să selectezi un oraș din lista disponibilă")
								: (F.location = "Locația este obligatorie"),
							g?.seller_type === "dealer" &&
								!N.availability &&
								(F.availability =
									"Disponibilitatea este obligatorie pentru dealeri");
						break;
					case 2:
						c.length === 0 &&
							(F.images = "Trebuie să adaugi cel puțin o fotografie");
						break;
					case 3:
						if (!N.price) F.price = "Prețul este obligatoriu";
						else {
							const Q = parseFloat(N.price);
							(Q < 100 || Q > 1e6) &&
								(F.price = "Prețul trebuie să fie între 100 și 1,000,000 EUR");
						}
						N.description.trim().length > 0 &&
							N.description.length > 2e3 &&
							(F.description = "Descrierea nu poate depăși 2000 de caractere");
						break;
					case 4:
						N.phone.trim()
							? /^[0-9+\-\s()]{10,15}$/.test(N.phone.replace(/\s/g, "")) ||
							  (F.phone = "Numărul de telefon nu este valid")
							: (F.phone = "Numărul de telefon este obligatoriu"),
							N.email.trim()
								? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(N.email) ||
								  (F.email = "Email-ul nu este valid")
								: (F.email = "Email-ul este obligatoriu");
						break;
				}
				return f(F), Object.keys(F).length === 0;
			},
			re = (C, F) => {
				G((Q) => ({ ...Q, [C]: F })), h[C] && f((Q) => ({ ...Q, [C]: "" }));
			},
			xe = (C) => {
				G((F) => ({
					...F,
					features: F.features.includes(C)
						? F.features.filter((Q) => Q !== C)
						: [...F.features, C],
				}));
			},
			j = (C) => {
				const F = C.target.files;
				if (F && c.length < 5) {
					const Q = Array.from(F).slice(0, 5 - c.length);
					for (const se of Q) {
						if (se.size > 5 * 1024 * 1024) {
							f((be) => ({ ...be, images: "Fișierul nu poate depăși 5MB" }));
							return;
						}
						if (!se.type.startsWith("image/")) {
							f((be) => ({
								...be,
								images: "Doar fișiere imagine sunt permise",
							}));
							return;
						}
					}
					u((se) => [...se, ...Q]),
						Q.forEach((se) => {
							const be = new FileReader();
							(be.onload = (He) => {
								He.target?.result &&
									(l(($t) => [...$t, He.target.result]),
									f(($t) => ({ ...$t, images: "" })));
							}),
								be.readAsDataURL(se);
						});
				}
			},
			V = (C) => {
				l((F) => F.filter((Q, se) => se !== C)),
					u((F) => F.filter((Q, se) => se !== C));
			},
			B = () => {
				ve(i) && i < 4 && s(i + 1);
			},
			_ = () => {
				i > 1 && s(i - 1);
			},
			k = async () => {
				if (ve(4)) {
					y(!0);
					try {
						if (!g) throw new Error("Profilul utilizatorului nu a fost găsit");
						console.log("🚀 Starting listing creation..."),
							console.log("📋 Form data before mapping:", N);
						const C = {
							title: N.title.trim(),
							description: N.description.trim() || "",
							price: parseFloat(N.price),
							year: parseInt(N.year),
							mileage: parseInt(N.mileage),
							location: N.location.trim(),
							category: I("category", N.category),
							brand: N.brand,
							model: N.model.trim(),
							engine_capacity: parseInt(N.engine),
							fuel_type: I("fuel", N.fuel),
							transmission: I("transmission", N.transmission),
							condition: I("condition", N.condition),
							color: N.color.trim(),
							features: N.features,
							seller_id: g.id,
							seller_name: g.name || "Utilizator",
							seller_type: g.seller_type,
							status: "pending",
							availability:
								g.seller_type === "dealer" ? N.availability : "pe_stoc",
						};
						console.log("📝 Mapped listing data:", C),
							console.log("📤 Trimit date către listings.create:", C, c);
						const F = await Ci.create(C, c);
						console.log("📬 Răspuns complet listings.create:", F);
						const { data: Q, error: se } = F;
						if ((console.log("📬 Răspuns de la server:", Q, se), se))
							throw (
								(console.error("❌ Error creating listing:", se),
								new Error(se.message || "Eroare la crearea anunțului"))
							);
						console.log("✅ Listing created successfully:", Q), z(Q.id), U(!0);
					} catch (C) {
						console.error("💥 Error creating listing:", C),
							f({
								submit:
									C.message ||
									"A apărut o eroare la publicarea anunțului. Te rog încearcă din nou.",
							});
					} finally {
						y(!1);
					}
				}
			},
			q = () => {
				U(!1);
			},
			R = () => {
				U(!1), ee("/");
			},
			$ = () => {
				A && (U(!1), ee(`/anunt/${A}`));
			};
		return w
			? e.jsx("div", {
					className: "min-h-screen bg-gray-50 flex items-center justify-center",
					children: e.jsxs("div", {
						className: "bg-white p-8 rounded-2xl shadow-lg text-center",
						children: [
							e.jsx("div", {
								className:
									"w-16 h-16 border-4 border-nexar-accent border-t-transparent rounded-full animate-spin mx-auto mb-4",
							}),
							e.jsx("p", {
								className: "text-gray-600",
								children: "Se încarcă datele profilului...",
							}),
						],
					}),
			  })
			: g
			? e.jsxs("div", {
					className: "min-h-screen bg-gray-50 py-8",
					children: [
						e.jsxs("div", {
							className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
							children: [
								e.jsxs("div", {
									className: "text-center mb-8",
									children: [
										e.jsx("h1", {
											className:
												"text-3xl md:text-4xl font-bold text-gray-900 mb-4",
											children: "Adaugă Anunț Nou",
										}),
										e.jsx("p", {
											className: "text-gray-600 text-lg",
											children:
												"Completează formularul pentru a-ți publica motocicleta",
										}),
										e.jsxs("div", {
											className:
												"mt-4 inline-flex items-center space-x-3 bg-white rounded-lg px-4 py-2 shadow-sm border",
											children: [
												e.jsx("div", {
													className:
														"w-8 h-8 bg-nexar-accent rounded-full flex items-center justify-center text-white font-semibold text-sm",
													children: g.name
														? g.name.charAt(0).toUpperCase()
														: "U",
												}),
												e.jsxs("div", {
													className: "text-left",
													children: [
														e.jsx("div", {
															className: "font-semibold text-gray-900",
															children: g.name,
														}),
														e.jsx("div", {
															className: "text-xs text-gray-600",
															children:
																g.seller_type === "dealer"
																	? "Dealer Verificat"
																	: "Vânzător Privat",
														}),
													],
												}),
											],
										}),
									],
								}),
								e.jsxs("div", {
									className: "mb-8",
									children: [
										e.jsx("div", {
											className: "flex items-center justify-between",
											children: ne.map((C, F) =>
												e.jsxs(
													"div",
													{
														className: "flex items-center",
														children: [
															e.jsx("div", {
																className: `flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
																	i >= C.id
																		? "bg-gray-900 border-gray-900 text-white"
																		: "border-gray-300 text-gray-400"
																}`,
																children:
																	i > C.id
																		? e.jsx(ts, { className: "h-5 w-5" })
																		: e.jsx("span", {
																				className: "font-semibold",
																				children: C.id,
																		  }),
															}),
															F < ne.length - 1 &&
																e.jsx("div", {
																	className: `w-full h-1 mx-4 transition-colors ${
																		i > C.id ? "bg-gray-900" : "bg-gray-300"
																	}`,
																}),
														],
													},
													C.id,
												),
											),
										}),
										e.jsxs("div", {
											className: "mt-4 text-center",
											children: [
												e.jsx("h2", {
													className: "text-xl font-semibold text-gray-900",
													children: ne[i - 1].title,
												}),
												e.jsx("p", {
													className: "text-gray-600",
													children: ne[i - 1].description,
												}),
											],
										}),
									],
								}),
								e.jsxs("div", {
									className: "bg-white rounded-2xl shadow-lg p-8",
									children: [
										i === 1 &&
											e.jsx("div", {
												className: "space-y-6 animate-fade-in",
												children: e.jsxs("div", {
													className: "grid grid-cols-1 md:grid-cols-2 gap-6",
													children: [
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-2",
																	children: "Titlu anunț *",
																}),
																e.jsx("input", {
																	type: "text",
																	value: N.title,
																	onChange: (C) => re("title", C.target.value),
																	className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
																		h.title
																			? "border-red-500"
																			: "border-gray-300"
																	}`,
																	placeholder: "ex: Yamaha YZF-R1 2023",
																	maxLength: 100,
																}),
																h.title &&
																	e.jsxs("p", {
																		className:
																			"mt-1 text-sm text-red-600 flex items-center",
																		children: [
																			e.jsx(he, { className: "h-4 w-4 mr-1" }),
																			h.title,
																		],
																	}),
																e.jsxs("p", {
																	className: "mt-1 text-xs text-gray-500",
																	children: [N.title.length, "/100 caractere"],
																}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-2",
																	children: "Categorie *",
																}),
																e.jsxs("select", {
																	value: N.category,
																	onChange: (C) =>
																		re("category", C.target.value),
																	className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
																		h.category
																			? "border-red-500"
																			: "border-gray-300"
																	}`,
																	children: [
																		e.jsx("option", {
																			value: "",
																			children: "Selectează categoria",
																		}),
																		le.map((C) =>
																			e.jsx(
																				"option",
																				{ value: C, children: C },
																				C,
																			),
																		),
																	],
																}),
																h.category &&
																	e.jsxs("p", {
																		className:
																			"mt-1 text-sm text-red-600 flex items-center",
																		children: [
																			e.jsx(he, { className: "h-4 w-4 mr-1" }),
																			h.category,
																		],
																	}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-2",
																	children: "Marcă *",
																}),
																e.jsxs("select", {
																	value: N.brand,
																	onChange: (C) => re("brand", C.target.value),
																	className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
																		h.brand
																			? "border-red-500"
																			: "border-gray-300"
																	}`,
																	children: [
																		e.jsx("option", {
																			value: "",
																			children: "Selectează marca",
																		}),
																		ie.map((C) =>
																			e.jsx(
																				"option",
																				{ value: C, children: C },
																				C,
																			),
																		),
																	],
																}),
																h.brand &&
																	e.jsxs("p", {
																		className:
																			"mt-1 text-sm text-red-600 flex items-center",
																		children: [
																			e.jsx(he, { className: "h-4 w-4 mr-1" }),
																			h.brand,
																		],
																	}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-2",
																	children: "Model *",
																}),
																e.jsx("input", {
																	type: "text",
																	value: N.model,
																	onChange: (C) => re("model", C.target.value),
																	className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
																		h.model
																			? "border-red-500"
																			: "border-gray-300"
																	}`,
																	placeholder: "ex: YZF-R1",
																}),
																h.model &&
																	e.jsxs("p", {
																		className:
																			"mt-1 text-sm text-red-600 flex items-center",
																		children: [
																			e.jsx(he, { className: "h-4 w-4 mr-1" }),
																			h.model,
																		],
																	}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-2",
																	children: "An fabricație *",
																}),
																e.jsx("input", {
																	type: "number",
																	value: N.year,
																	onChange: (C) => re("year", C.target.value),
																	className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
																		h.year
																			? "border-red-500"
																			: "border-gray-300"
																	}`,
																	placeholder: "2023",
																	min: "1990",
																	max: "2025",
																}),
																h.year &&
																	e.jsxs("p", {
																		className:
																			"mt-1 text-sm text-red-600 flex items-center",
																		children: [
																			e.jsx(he, { className: "h-4 w-4 mr-1" }),
																			h.year,
																		],
																	}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-2",
																	children: "Kilometraj *",
																}),
																e.jsx("input", {
																	type: "number",
																	value: N.mileage,
																	onChange: (C) =>
																		re("mileage", C.target.value),
																	className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
																		h.mileage
																			? "border-red-500"
																			: "border-gray-300"
																	}`,
																	placeholder: "25000",
																	min: "0",
																	max: "500000",
																}),
																h.mileage &&
																	e.jsxs("p", {
																		className:
																			"mt-1 text-sm text-red-600 flex items-center",
																		children: [
																			e.jsx(he, { className: "h-4 w-4 mr-1" }),
																			h.mileage,
																		],
																	}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-2",
																	children: "Capacitate motor (cc) *",
																}),
																e.jsx("input", {
																	type: "number",
																	value: N.engine,
																	onChange: (C) => re("engine", C.target.value),
																	className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
																		h.engine
																			? "border-red-500"
																			: "border-gray-300"
																	}`,
																	placeholder: "998",
																	min: "50",
																	max: "3000",
																}),
																h.engine &&
																	e.jsxs("p", {
																		className:
																			"mt-1 text-sm text-red-600 flex items-center",
																		children: [
																			e.jsx(he, { className: "h-4 w-4 mr-1" }),
																			h.engine,
																		],
																	}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-2",
																	children: "Combustibil *",
																}),
																e.jsxs("select", {
																	value: N.fuel,
																	onChange: (C) => re("fuel", C.target.value),
																	className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
																		h.fuel
																			? "border-red-500"
																			: "border-gray-300"
																	}`,
																	children: [
																		e.jsx("option", {
																			value: "",
																			children: "Selectează combustibilul",
																		}),
																		Y.map((C) =>
																			e.jsx(
																				"option",
																				{ value: C, children: C },
																				C,
																			),
																		),
																	],
																}),
																h.fuel &&
																	e.jsxs("p", {
																		className:
																			"mt-1 text-sm text-red-600 flex items-center",
																		children: [
																			e.jsx(he, { className: "h-4 w-4 mr-1" }),
																			h.fuel,
																		],
																	}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-2",
																	children: "Transmisie *",
																}),
																e.jsxs("select", {
																	value: N.transmission,
																	onChange: (C) =>
																		re("transmission", C.target.value),
																	className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
																		h.transmission
																			? "border-red-500"
																			: "border-gray-300"
																	}`,
																	children: [
																		e.jsx("option", {
																			value: "",
																			children: "Selectează transmisia",
																		}),
																		J.map((C) =>
																			e.jsx(
																				"option",
																				{ value: C, children: C },
																				C,
																			),
																		),
																	],
																}),
																h.transmission &&
																	e.jsxs("p", {
																		className:
																			"mt-1 text-sm text-red-600 flex items-center",
																		children: [
																			e.jsx(he, { className: "h-4 w-4 mr-1" }),
																			h.transmission,
																		],
																	}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-2",
																	children: "Culoare *",
																}),
																e.jsx("input", {
																	type: "text",
																	value: N.color,
																	onChange: (C) => re("color", C.target.value),
																	className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
																		h.color
																			? "border-red-500"
																			: "border-gray-300"
																	}`,
																	placeholder: "ex: Albastru Racing",
																}),
																h.color &&
																	e.jsxs("p", {
																		className:
																			"mt-1 text-sm text-red-600 flex items-center",
																		children: [
																			e.jsx(he, { className: "h-4 w-4 mr-1" }),
																			h.color,
																		],
																	}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-2",
																	children: "Starea *",
																}),
																e.jsxs("select", {
																	value: N.condition,
																	onChange: (C) =>
																		re("condition", C.target.value),
																	className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
																		h.condition
																			? "border-red-500"
																			: "border-gray-300"
																	}`,
																	children: [
																		e.jsx("option", {
																			value: "",
																			children: "Selectează starea",
																		}),
																		Ee.map((C) =>
																			e.jsx(
																				"option",
																				{ value: C, children: C },
																				C,
																			),
																		),
																	],
																}),
																h.condition &&
																	e.jsxs("p", {
																		className:
																			"mt-1 text-sm text-red-600 flex items-center",
																		children: [
																			e.jsx(he, { className: "h-4 w-4 mr-1" }),
																			h.condition,
																		],
																	}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-2",
																	children: "Locația *",
																}),
																e.jsxs("select", {
																	value: N.location,
																	onChange: (C) =>
																		re("location", C.target.value),
																	className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
																		h.location
																			? "border-red-500"
																			: "border-gray-300"
																	}`,
																	children: [
																		e.jsx("option", {
																			value: "",
																			children: "Selectează orașul",
																		}),
																		e.jsx("option", {
																			value: "București S1",
																			children: "București S1",
																		}),
																		e.jsx("option", {
																			value: "București S2",
																			children: "București S2",
																		}),
																		e.jsx("option", {
																			value: "București S3",
																			children: "București S3",
																		}),
																		e.jsx("option", {
																			value: "București S4",
																			children: "București S4",
																		}),
																		e.jsx("option", {
																			value: "București S5",
																			children: "București S5",
																		}),
																		e.jsx("option", {
																			value: "București S6",
																			children: "București S6",
																		}),
																		e.jsx("option", {
																			value: "Cluj-Napoca",
																			children: "Cluj-Napoca",
																		}),
																		e.jsx("option", {
																			value: "Timișoara",
																			children: "Timișoara",
																		}),
																		e.jsx("option", {
																			value: "Iași",
																			children: "Iași",
																		}),
																		e.jsx("option", {
																			value: "Constanța",
																			children: "Constanța",
																		}),
																		e.jsx("option", {
																			value: "Brașov",
																			children: "Brașov",
																		}),
																		e.jsx("option", {
																			value: "Craiova",
																			children: "Craiova",
																		}),
																		e.jsx("option", {
																			value: "Galați",
																			children: "Galați",
																		}),
																		e.jsx("option", {
																			value: "Oradea",
																			children: "Oradea",
																		}),
																		e.jsx("option", {
																			value: "Ploiești",
																			children: "Ploiești",
																		}),
																		e.jsx("option", {
																			value: "Sibiu",
																			children: "Sibiu",
																		}),
																		e.jsx("option", {
																			value: "Bacău",
																			children: "Bacău",
																		}),
																		e.jsx("option", {
																			value: "Râmnicu Vâlcea",
																			children: "Râmnicu Vâlcea",
																		}),
																		Bt.map(
																			(C) =>
																				!C.startsWith("București") &&
																				C !== "Râmnicu Vâlcea" &&
																				C !== "Rm. Vâlcea" &&
																				e.jsx(
																					"option",
																					{ value: C, children: C },
																					C,
																				),
																		),
																	],
																}),
																h.location &&
																	e.jsxs("p", {
																		className:
																			"mt-1 text-sm text-red-600 flex items-center",
																		children: [
																			e.jsx(he, { className: "h-4 w-4 mr-1" }),
																			h.location,
																		],
																	}),
															],
														}),
														g.seller_type === "dealer" &&
															e.jsxs("div", {
																children: [
																	e.jsx("label", {
																		className:
																			"block text-sm font-medium text-gray-700 mb-2",
																		children: "Disponibilitate *",
																	}),
																	e.jsx("div", {
																		className: "flex space-x-4",
																		children: Se.map((C) =>
																			e.jsxs(
																				"label",
																				{
																					className: `flex items-center space-x-2 border rounded-lg px-4 py-3 cursor-pointer transition-colors ${
																						N.availability === C.value
																							? "border-nexar-accent bg-nexar-accent/5"
																							: "border-gray-300 hover:bg-gray-50"
																					}`,
																					children: [
																						e.jsx("input", {
																							type: "radio",
																							name: "availability",
																							value: C.value,
																							checked:
																								N.availability === C.value,
																							onChange: (F) =>
																								re(
																									"availability",
																									F.target.value,
																								),
																							className: "sr-only",
																						}),
																						C.value === "pe_stoc"
																							? e.jsx(Ei, {
																									className: `h-5 w-5 ${
																										N.availability === C.value
																											? "text-nexar-accent"
																											: "text-gray-400"
																									}`,
																							  })
																							: e.jsx(Yt, {
																									className: `h-5 w-5 ${
																										N.availability === C.value
																											? "text-nexar-accent"
																											: "text-gray-400"
																									}`,
																							  }),
																						e.jsx("span", {
																							className:
																								N.availability === C.value
																									? "font-medium"
																									: "",
																							children: C.label,
																						}),
																					],
																				},
																				C.value,
																			),
																		),
																	}),
																	h.availability &&
																		e.jsxs("p", {
																			className:
																				"mt-1 text-sm text-red-600 flex items-center",
																			children: [
																				e.jsx(he, {
																					className: "h-4 w-4 mr-1",
																				}),
																				h.availability,
																			],
																		}),
																],
															}),
													],
												}),
											}),
										i === 2 &&
											e.jsxs("div", {
												className: "space-y-6 animate-fade-in",
												children: [
													e.jsx("div", {
														className: "text-center",
														children: e.jsx("p", {
															className: "text-gray-600 mb-6",
															children:
																"Adaugă până la 5 fotografii de calitate pentru a atrage mai mulți cumpărători",
														}),
													}),
													h.images &&
														e.jsx("div", {
															className:
																"bg-red-50 border border-red-200 rounded-lg p-4",
															children: e.jsxs("p", {
																className: "text-red-600 flex items-center",
																children: [
																	e.jsx(he, { className: "h-4 w-4 mr-2" }),
																	h.images,
																],
															}),
														}),
													e.jsxs("div", {
														className:
															"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
														children: [
															a.map((C, F) =>
																e.jsxs(
																	"div",
																	{
																		className: "relative group",
																		children: [
																			e.jsx("img", {
																				src: C,
																				alt: `Upload ${F + 1}`,
																				className:
																					"w-full h-48 object-cover rounded-lg",
																			}),
																			e.jsx("button", {
																				onClick: () => V(F),
																				className:
																					"absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity",
																				children: e.jsx(Ft, {
																					className: "h-4 w-4",
																				}),
																			}),
																			F === 0 &&
																				e.jsx("div", {
																					className:
																						"absolute bottom-2 left-2 bg-gray-900 text-white px-2 py-1 rounded text-xs font-semibold",
																					children: "Foto principală",
																				}),
																		],
																	},
																	F,
																),
															),
															a.length < 5 &&
																e.jsxs("label", {
																	className:
																		"border-2 border-dashed border-gray-300 rounded-lg h-48 flex flex-col items-center justify-center cursor-pointer hover:border-gray-900 transition-colors",
																	children: [
																		e.jsx(nc, {
																			className: "h-8 w-8 text-gray-400 mb-2",
																		}),
																		e.jsx("span", {
																			className: "text-gray-600",
																			children: "Adaugă fotografie",
																		}),
																		e.jsxs("span", {
																			className: "text-sm text-gray-400",
																			children: ["(", a.length, "/5)"],
																		}),
																		e.jsx("input", {
																			type: "file",
																			multiple: !0,
																			accept: "image/*",
																			onChange: j,
																			className: "hidden",
																		}),
																	],
																}),
														],
													}),
													e.jsxs("div", {
														className:
															"bg-blue-50 border border-blue-200 rounded-lg p-4",
														children: [
															e.jsx("h4", {
																className: "font-semibold text-blue-800 mb-2",
																children:
																	"Sfaturi pentru fotografii de calitate:",
															}),
															e.jsxs("ul", {
																className: "text-sm text-blue-700 space-y-1",
																children: [
																	e.jsx("li", {
																		children:
																			"• Fotografiază în lumină naturală",
																	}),
																	e.jsx("li", {
																		children:
																			"• Include imagini din toate unghiurile",
																	}),
																	e.jsx("li", {
																		children:
																			"• Arată detaliile importante și eventualele defecte",
																	}),
																	e.jsx("li", {
																		children:
																			"• Prima fotografie va fi cea principală",
																	}),
																	e.jsx("li", {
																		children: "• Limită de 5MB per imagine",
																	}),
																	e.jsx("li", {
																		children: "• Maxim 5 imagini per anunț",
																	}),
																],
															}),
														],
													}),
												],
											}),
										i === 3 &&
											e.jsxs("div", {
												className: "space-y-6 animate-fade-in",
												children: [
													e.jsxs("div", {
														children: [
															e.jsx("label", {
																className:
																	"block text-sm font-medium text-gray-700 mb-2",
																children: "Preț (EUR) *",
															}),
															e.jsx("input", {
																type: "number",
																value: N.price,
																onChange: (C) => re("price", C.target.value),
																className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent text-2xl font-bold ${
																	h.price ? "border-red-500" : "border-gray-300"
																}`,
																placeholder: "18500",
																min: "100",
																max: "1000000",
															}),
															h.price &&
																e.jsxs("p", {
																	className:
																		"mt-1 text-sm text-red-600 flex items-center",
																	children: [
																		e.jsx(he, { className: "h-4 w-4 mr-1" }),
																		h.price,
																	],
																}),
														],
													}),
													e.jsxs("div", {
														children: [
															e.jsx("label", {
																className:
																	"block text-sm font-medium text-gray-700 mb-2",
																children: "Descriere detaliată",
															}),
															e.jsx("textarea", {
																value: N.description,
																onChange: (C) =>
																	re("description", C.target.value),
																rows: 8,
																className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
																	h.description
																		? "border-red-500"
																		: "border-gray-300"
																}`,
																placeholder:
																	"Descrie motocicleta în detaliu: starea tehnică, istoricul, modificările, etc.",
															}),
															e.jsxs("div", {
																className:
																	"flex justify-between items-center mt-1",
																children: [
																	h.description
																		? e.jsxs("p", {
																				className:
																					"mt-1 text-sm text-red-600 flex items-center",
																				children: [
																					e.jsx(he, {
																						className: "h-4 w-4 mr-1",
																					}),
																					h.description,
																				],
																		  })
																		: e.jsx("p", {
																				className: "text-sm text-gray-500",
																				children: "Maxim 2000 caractere",
																		  }),
																	e.jsxs("span", {
																		className: `text-sm ${
																			N.description.length > 2e3
																				? "text-red-600"
																				: "text-green-600"
																		}`,
																		children: [N.description.length, "/2000"],
																	}),
																],
															}),
														],
													}),
													e.jsxs("div", {
														children: [
															e.jsx("label", {
																className:
																	"block text-sm font-medium text-gray-700 mb-4",
																children: "Dotări și caracteristici",
															}),
															e.jsx("div", {
																className:
																	"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",
																children: Pe.map((C) =>
																	e.jsxs(
																		"label",
																		{
																			className:
																				"flex items-center space-x-2 cursor-pointer",
																			children: [
																				e.jsx("input", {
																					type: "checkbox",
																					checked: N.features.includes(C),
																					onChange: () => xe(C),
																					className:
																						"rounded border-gray-300 text-gray-900 focus:ring-gray-900",
																				}),
																				e.jsx("span", {
																					className: "text-sm",
																					children: C,
																				}),
																			],
																		},
																		C,
																	),
																),
															}),
														],
													}),
												],
											}),
										i === 4 &&
											e.jsxs("div", {
												className: "space-y-6 animate-fade-in",
												children: [
													e.jsxs("div", {
														className: "text-center mb-6",
														children: [
															e.jsx("h3", {
																className:
																	"text-xl font-semibold text-gray-900 mb-2",
																children: "Informații de contact",
															}),
															e.jsx("p", {
																className: "text-gray-600",
																children:
																	"Aceste informații vor fi vizibile cumpărătorilor interesați",
															}),
														],
													}),
													e.jsxs("div", {
														className: "grid grid-cols-1 md:grid-cols-2 gap-6",
														children: [
															e.jsxs("div", {
																children: [
																	e.jsx("label", {
																		className:
																			"block text-sm font-medium text-gray-700 mb-2",
																		children: "Număr de telefon *",
																	}),
																	e.jsx("input", {
																		type: "tel",
																		value: N.phone,
																		onChange: (C) =>
																			re("phone", C.target.value),
																		className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
																			h.phone
																				? "border-red-500"
																				: "border-gray-300"
																		}`,
																		placeholder: "0790 45 46 47",
																	}),
																	h.phone &&
																		e.jsxs("p", {
																			className:
																				"mt-1 text-sm text-red-600 flex items-center",
																			children: [
																				e.jsx(he, {
																					className: "h-4 w-4 mr-1",
																				}),
																				h.phone,
																			],
																		}),
																],
															}),
															e.jsxs("div", {
																children: [
																	e.jsx("label", {
																		className:
																			"block text-sm font-medium text-gray-700 mb-2",
																		children: "Email *",
																	}),
																	e.jsx("input", {
																		type: "email",
																		value: N.email,
																		onChange: (C) =>
																			re("email", C.target.value),
																		className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
																			h.email
																				? "border-red-500"
																				: "border-gray-300"
																		}`,
																		placeholder: "contact@exemplu.com",
																	}),
																	h.email &&
																		e.jsxs("p", {
																			className:
																				"mt-1 text-sm text-red-600 flex items-center",
																			children: [
																				e.jsx(he, {
																					className: "h-4 w-4 mr-1",
																				}),
																				h.email,
																			],
																		}),
																],
															}),
														],
													}),
													e.jsxs("div", {
														className:
															"bg-yellow-50 border border-yellow-200 rounded-lg p-6",
														children: [
															e.jsx("h4", {
																className: "font-semibold text-yellow-800 mb-4",
																children: "Notă importantă:",
															}),
															e.jsx("p", {
																className: "text-yellow-700 mb-3",
																children:
																	"Anunțul tău va fi trimis spre aprobare administratorilor platformei. După verificare, acesta va fi publicat și va deveni vizibil pentru toți utilizatorii.",
															}),
															e.jsx("p", {
																className: "text-yellow-700",
																children:
																	'Vei putea vedea statusul anunțului tău în secțiunea "Anunțurile Mele" din profilul tău.',
															}),
														],
													}),
													e.jsxs("div", {
														className:
															"bg-green-50 border border-green-200 rounded-lg p-6",
														children: [
															e.jsx("h4", {
																className: "font-semibold text-green-800 mb-4",
																children: "Rezumat anunț:",
															}),
															e.jsxs("div", {
																className:
																	"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",
																children: [
																	e.jsxs("div", {
																		children: [
																			e.jsx("span", {
																				className: "text-green-700 font-medium",
																				children: "Titlu:",
																			}),
																			e.jsx("span", {
																				className: "ml-2",
																				children: N.title || "Necompletat",
																			}),
																		],
																	}),
																	e.jsxs("div", {
																		children: [
																			e.jsx("span", {
																				className: "text-green-700 font-medium",
																				children: "Preț:",
																			}),
																			e.jsxs("span", {
																				className: "ml-2",
																				children: ["€", N.price || "0"],
																			}),
																		],
																	}),
																	e.jsxs("div", {
																		children: [
																			e.jsx("span", {
																				className: "text-green-700 font-medium",
																				children: "Tip vânzător:",
																			}),
																			e.jsx("span", {
																				className: "ml-2",
																				children:
																					g.seller_type === "dealer"
																						? "Dealer Verificat"
																						: "Vânzător Privat",
																			}),
																		],
																	}),
																	e.jsxs("div", {
																		children: [
																			e.jsx("span", {
																				className: "text-green-700 font-medium",
																				children: "Fotografii:",
																			}),
																			e.jsxs("span", {
																				className: "ml-2",
																				children: [a.length, "/5"],
																			}),
																		],
																	}),
																	g.seller_type === "dealer" &&
																		e.jsxs("div", {
																			children: [
																				e.jsx("span", {
																					className:
																						"text-green-700 font-medium",
																					children: "Disponibilitate:",
																				}),
																				e.jsx("span", {
																					className: "ml-2",
																					children:
																						N.availability === "pe_stoc"
																							? "Pe stoc"
																							: "La comandă",
																				}),
																			],
																		}),
																],
															}),
														],
													}),
													h.submit &&
														e.jsx("div", {
															className:
																"bg-red-50 border border-red-200 rounded-lg p-4",
															children: e.jsxs("p", {
																className: "text-red-600 flex items-center",
																children: [
																	e.jsx(he, { className: "h-4 w-4 mr-2" }),
																	h.submit,
																],
															}),
														}),
												],
											}),
										e.jsxs("div", {
											className:
												"flex justify-between pt-8 border-t border-gray-200",
											children: [
												e.jsx("button", {
													onClick: _,
													disabled: i === 1,
													className: `px-6 py-3 rounded-xl font-semibold transition-colors ${
														i === 1
															? "bg-gray-100 text-gray-400 cursor-not-allowed"
															: "bg-gray-200 text-gray-700 hover:bg-gray-300"
													}`,
													children: "Înapoi",
												}),
												i < 4
													? e.jsx("button", {
															onClick: B,
															className:
																"px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors",
															children: "Continuă",
													  })
													: e.jsx("button", {
															onClick: k,
															disabled: p,
															className:
																"px-8 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed",
															children: p
																? e.jsxs(e.Fragment, {
																		children: [
																			e.jsx("div", {
																				className:
																					"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin",
																			}),
																			e.jsx("span", {
																				children: "Se trimite...",
																			}),
																		],
																  })
																: e.jsxs(e.Fragment, {
																		children: [
																			e.jsx("span", {
																				children: "Trimite spre aprobare",
																			}),
																			e.jsx(ts, { className: "h-5 w-5" }),
																		],
																  }),
													  }),
											],
										}),
									],
								}),
							],
						}),
						e.jsx(zm, {
							isOpen: D,
							onClose: q,
							onGoHome: R,
							onViewListing: $,
							title: "Anunț trimis spre aprobare!",
							message:
								"Anunțul tău a fost trimis cu succes și este în așteptare pentru aprobare. Vei fi notificat când acesta va fi aprobat și publicat pe platformă.",
							showViewButton: !0,
						}),
					],
			  })
			: e.jsx("div", {
					className: "min-h-screen bg-gray-50 flex items-center justify-center",
					children: e.jsxs("div", {
						className:
							"bg-white p-8 rounded-2xl shadow-lg text-center max-w-md",
						children: [
							e.jsx(he, { className: "h-16 w-16 text-red-500 mx-auto mb-4" }),
							e.jsx("h2", {
								className: "text-2xl font-bold text-gray-900 mb-2",
								children: "Profil incomplet",
							}),
							e.jsx("p", {
								className: "text-gray-600 mb-6",
								children:
									h.profile ||
									"Pentru a adăuga un anunț, trebuie să îți completezi profilul mai întâi.",
							}),
							e.jsxs("div", {
								className: "flex flex-col sm:flex-row gap-4",
								children: [
									e.jsx("button", {
										onClick: () => ee("/profil"),
										className:
											"bg-nexar-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors",
										children: "Completează Profilul",
									}),
									e.jsx(Pi, { buttonText: "Repară Conexiunea" }),
								],
							}),
						],
					}),
			  });
	},
	Dy = () => {
		const { id: i } = sc(),
			s = Nt(),
			[a, l] = S.useState(!0),
			[c, u] = S.useState(!1),
			[h, f] = S.useState(!1),
			[p, y] = S.useState(null),
			[g, v] = S.useState({}),
			[w, T] = S.useState([]),
			[D, U] = S.useState([]),
			[A, z] = S.useState([]),
			[ee, N] = S.useState(!1),
			[G, X] = S.useState([]),
			[ne, le] = S.useState(!1),
			[ie, Y] = S.useState(null),
			[J, Ee] = S.useState({
				title: "",
				price: "",
				description: "",
				mileage: "",
				year: "",
				location: "",
				condition: "",
				category: "",
				brand: "",
				model: "",
				engine_capacity: "",
				fuel_type: "",
				transmission: "",
				color: "",
				features: [],
				phone: "",
				email: "",
				status: "",
				availability: "pe_stoc",
			}),
			Se = [
				{ value: "pe_stoc", label: "Pe stoc", icon: Ei },
				{ value: "la_comanda", label: "La comandă", icon: Yt },
			];
		S.useEffect(() => {
			Pe();
		}, [i]);
		const Pe = async () => {
				try {
					l(!0), Y(null);
					const k = await Rr.isAdmin();
					if ((le(k), !(await Im()))) {
						s("/auth");
						return;
					}
					if (!i) {
						s("/profil");
						return;
					}
					const { data: R, error: $ } = await ae
						.from("listings")
						.select("*")
						.eq("id", i)
						.single();
					if ($) {
						console.error("Error loading listing:", $),
							$.message?.includes("fetch") || $.message?.includes("network")
								? Y($)
								: (alert("Anunțul nu a fost găsit"), s("/profil"));
						return;
					}
					if (!R) {
						alert("Anunțul nu a fost găsit"), s("/profil");
						return;
					}
					if (!k) {
						const {
								data: { user: be },
							} = await ae.auth.getUser(),
							{ data: He } = await ae
								.from("profiles")
								.select("*")
								.eq("user_id", be?.id)
								.single();
						if (!He || He.id !== R.seller_id) {
							alert("Nu poți edita acest anunț"), s("/profil");
							return;
						}
					}
					y(R), T(R.images || []);
					const C = I("condition", R.condition),
						F = I("fuel_type", R.fuel_type),
						Q = I("transmission", R.transmission),
						se = I("category", R.category);
					Ee({
						title: R.title || "",
						price: R.price?.toString() || "",
						description: R.description || "",
						mileage: R.mileage?.toString() || "",
						year: R.year?.toString() || "",
						location: R.location || "",
						condition: C,
						category: se,
						brand: R.brand || "",
						model: R.model || "",
						engine_capacity: R.engine_capacity?.toString() || "",
						fuel_type: F,
						transmission: Q,
						color: R.color || "",
						features: R.features || [],
						phone: "",
						email: "",
						status: R.status || "pending",
						availability: R.availability || "pe_stoc",
					});
				} catch (k) {
					console.error("Error:", k),
						k.message?.includes("fetch") || k.message?.includes("network")
							? Y(k)
							: s("/profil");
				} finally {
					l(!1);
				}
			},
			I = (k, q) => {
				if (!q) return "";
				switch (k) {
					case "category":
						return q.charAt(0).toUpperCase() + q.slice(1);
					case "fuel_type":
						return (
							{ benzina: "Benzină", electric: "Electric", hibrid: "Hibrid" }[
								q
							] || q
						);
					case "transmission":
						return (
							{
								manuala: "Manual",
								automata: "Automat",
								"semi-automata": "Semi-automat",
							}[q] || q
						);
					case "condition":
						return (
							{
								noua: "Nouă",
								excelenta: "Excelentă",
								foarte_buna: "Foarte bună",
								buna: "Bună",
								satisfacatoare: "Satisfăcătoare",
							}[q] || q
						);
					default:
						return q;
				}
			},
			ve = (k, q) => {
				switch (k) {
					case "category":
						return q.toLowerCase();
					case "fuel_type":
						return (
							{ Benzină: "benzina", Electric: "electric", Hibrid: "hibrid" }[
								q
							] || q.toLowerCase()
						);
					case "transmission":
						return (
							{
								Manual: "manuala",
								Automat: "automata",
								"Semi-automat": "semi-automata",
							}[q] || q.toLowerCase()
						);
					case "condition":
						return (
							{
								Nouă: "noua",
								Excelentă: "excelenta",
								"Foarte bună": "foarte_buna",
								Bună: "buna",
								Satisfăcătoare: "satisfacatoare",
							}[q] || q.toLowerCase()
						);
					default:
						return q;
				}
			},
			re = (k, q) => {
				Ee((R) => ({ ...R, [k]: q })), g[k] && v((R) => ({ ...R, [k]: "" }));
			},
			xe = (k) => {
				Ee((q) => ({
					...q,
					features: q.features.includes(k)
						? q.features.filter((R) => R !== k)
						: [...q.features, k],
				}));
			},
			j = (k) => {
				const q = k.target.files;
				if (q && w.length + D.length < 5) {
					const R = Array.from(q).slice(0, 5 - w.length - D.length);
					for (const $ of R) {
						if ($.size > 5 * 1024 * 1024) {
							v((C) => ({ ...C, images: "Fișierul nu poate depăși 5MB" }));
							return;
						}
						if (!$.type.startsWith("image/")) {
							v((C) => ({ ...C, images: "Doar fișiere imagine sunt permise" }));
							return;
						}
					}
					U(($) => [...$, ...R]),
						R.forEach(($) => {
							const C = new FileReader();
							(C.onload = (F) => {
								if (F.target?.result) {
									const Q = F.target.result;
									T((se) => [...se, Q]), v((se) => ({ ...se, images: "" }));
								}
							}),
								C.readAsDataURL($);
						});
				}
			},
			V = (k) => {
				const q = w[k];
				if (p && p.images && p.images.includes(q)) z((R) => [...R, q]);
				else {
					const $ = w.indexOf(q) - (p?.images?.length || 0);
					$ >= 0 && U((C) => C.filter((F, Q) => Q !== $));
				}
				T((R) => R.filter(($, C) => C !== k));
			},
			B = () => {
				const k = {};
				if (
					(J.title.trim() || (k.title = "Titlul este obligatoriu"),
					J.title.length > 100 &&
						(k.title = "Titlul nu poate depăși 100 de caractere"),
					J.price || (k.price = "Prețul este obligatoriu"),
					J.description.length > 2e3 &&
						(k.description = "Descrierea nu poate depăși 2000 de caractere"),
					J.category || (k.category = "Categoria este obligatorie"),
					J.brand || (k.brand = "Marca este obligatorie"),
					J.model.trim() || (k.model = "Modelul este obligatoriu"),
					!J.year)
				)
					k.year = "Anul este obligatoriu";
				else {
					const q = parseInt(J.year),
						R = new Date().getFullYear();
					(q < 1990 || q > R + 1) &&
						(k.year = `Anul trebuie să fie între 1990 și ${R + 1}`);
				}
				if (!J.mileage) k.mileage = "Kilometrajul este obligatoriu";
				else {
					const q = parseInt(J.mileage);
					(q < 0 || q > 5e5) &&
						(k.mileage = "Kilometrajul trebuie să fie între 0 și 500,000 km");
				}
				if (!J.engine_capacity)
					k.engine_capacity = "Capacitatea motorului este obligatorie";
				else {
					const q = parseInt(J.engine_capacity);
					(q < 50 || q > 3e3) &&
						(k.engine_capacity =
							"Capacitatea motorului trebuie să fie între 50 și 3000 cc");
				}
				return (
					J.fuel_type ||
						(k.fuel_type = "Tipul de combustibil este obligatoriu"),
					J.transmission || (k.transmission = "Transmisia este obligatorie"),
					J.color.trim() || (k.color = "Culoarea este obligatorie"),
					J.condition || (k.condition = "Starea este obligatorie"),
					J.location.trim()
						? Bt.includes(J.location.trim()) ||
						  (k.location =
								"Te rugăm să selectezi un oraș din lista disponibilă")
						: (k.location = "Locația este obligatorie"),
					w.length === 0 &&
						(k.images = "Trebuie să adaugi cel puțin o fotografie"),
					p?.seller_type === "dealer" &&
						!J.availability &&
						(k.availability =
							"Disponibilitatea este obligatorie pentru dealeri"),
					v(k),
					Object.keys(k).length === 0
				);
			},
			_ = async (k) => {
				if ((k.preventDefault(), !!B())) {
					u(!0);
					try {
						const q = {
								title: J.title.trim(),
								price: parseFloat(J.price),
								description: J.description.trim() || "",
								mileage: parseInt(J.mileage),
								year: parseInt(J.year),
								location: J.location.trim(),
								category: ve("category", J.category),
								brand: J.brand,
								model: J.model.trim(),
								engine_capacity: parseInt(J.engine_capacity),
								fuel_type: ve("fuel_type", J.fuel_type),
								transmission: ve("transmission", J.transmission),
								condition: ve("condition", J.condition),
								color: J.color.trim(),
								features: J.features,
								updated_at: new Date().toISOString(),
								status: ne ? J.status : "pending",
								availability:
									p.seller_type === "dealer" ? J.availability : "pe_stoc",
							},
							{ data: R, error: $ } = await Ci.update(
								i,
								q,
								D.length > 0 ? D : void 0,
								A.length > 0 ? A : void 0,
							);
						if ($) throw $;
						f(!0);
					} catch (q) {
						console.error("Error updating listing:", q),
							alert("Eroare la actualizarea anunțului: " + q.message);
					} finally {
						u(!1);
					}
				}
			};
		return a
			? e.jsx("div", {
					className: "min-h-screen bg-gray-50 flex items-center justify-center",
					children: e.jsx("div", {
						className:
							"w-16 h-16 border-4 border-nexar-accent border-t-transparent rounded-full animate-spin",
					}),
			  })
			: ie
			? e.jsx("div", {
					className:
						"min-h-screen bg-gray-50 flex items-center justify-center p-4",
					children: e.jsx(uc, { error: ie, onRetry: Pe }),
			  })
			: g.general
			? e.jsx("div", {
					className: "min-h-screen bg-gray-50 flex items-center justify-center",
					children: e.jsxs("div", {
						className:
							"bg-white p-8 rounded-2xl shadow-lg text-center max-w-md",
						children: [
							e.jsx(he, { className: "h-16 w-16 text-red-500 mx-auto mb-4" }),
							e.jsx("h2", {
								className: "text-2xl font-bold text-gray-900 mb-2",
								children: "Eroare la încărcare",
							}),
							e.jsx("p", {
								className: "text-gray-600 mb-6",
								children: g.general,
							}),
							e.jsxs("div", {
								className: "flex flex-col sm:flex-row gap-4",
								children: [
									e.jsx("button", {
										onClick: () => window.location.reload(),
										className:
											"bg-nexar-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors",
										children: "Reîncarcă pagina",
									}),
									e.jsx(Pi, { buttonText: "Repară Conexiunea" }),
								],
							}),
						],
					}),
			  })
			: e.jsxs("div", {
					className: "min-h-screen bg-gray-50 py-8",
					children: [
						e.jsxs("div", {
							className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
							children: [
								e.jsx("div", {
									className: "mb-6",
									children: e.jsxs("button", {
										onClick: () => s(ne ? "/admin" : "/profil"),
										className:
											"flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors",
										children: [
											e.jsx(tg, { className: "h-5 w-5" }),
											e.jsx("span", {
												children: ne
													? "Înapoi la Admin Panel"
													: "Înapoi la profil",
											}),
										],
									}),
								}),
								e.jsxs("div", {
									className: "bg-white rounded-2xl shadow-lg p-8",
									children: [
										e.jsx("h1", {
											className: "text-3xl font-bold text-gray-900 mb-8",
											children: "Editează Anunțul",
										}),
										e.jsxs("form", {
											onSubmit: _,
											className: "space-y-6",
											children: [
												e.jsxs("div", {
													className: "space-y-6",
													children: [
														e.jsx("h2", {
															className: "text-xl font-semibold text-gray-900",
															children: "Informații de bază",
														}),
														e.jsxs("div", {
															className:
																"grid grid-cols-1 md:grid-cols-2 gap-6",
															children: [
																e.jsxs("div", {
																	children: [
																		e.jsx("label", {
																			className:
																				"block text-sm font-medium text-gray-700 mb-2",
																			children: "Titlu anunț *",
																		}),
																		e.jsx("input", {
																			type: "text",
																			value: J.title,
																			onChange: (k) =>
																				re("title", k.target.value),
																			className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																				g.title
																					? "border-red-500"
																					: "border-gray-300"
																			}`,
																			placeholder: "ex: Yamaha YZF-R1 2023",
																			maxLength: 100,
																		}),
																		g.title &&
																			e.jsxs("p", {
																				className:
																					"mt-1 text-sm text-red-600 flex items-center",
																				children: [
																					e.jsx(he, {
																						className: "h-4 w-4 mr-1",
																					}),
																					g.title,
																				],
																			}),
																		e.jsxs("p", {
																			className: "mt-1 text-xs text-gray-500",
																			children: [
																				J.title.length,
																				"/100 caractere",
																			],
																		}),
																	],
																}),
																e.jsxs("div", {
																	children: [
																		e.jsx("label", {
																			className:
																				"block text-sm font-medium text-gray-700 mb-2",
																			children: "Categorie *",
																		}),
																		e.jsxs("select", {
																			value: J.category,
																			onChange: (k) =>
																				re("category", k.target.value),
																			className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																				g.category
																					? "border-red-500"
																					: "border-gray-300"
																			}`,
																			children: [
																				e.jsx("option", {
																					value: "",
																					children: "Selectează categoria",
																				}),
																				e.jsx("option", {
																					value: "Sport",
																					children: "Sport",
																				}),
																				e.jsx("option", {
																					value: "Touring",
																					children: "Touring",
																				}),
																				e.jsx("option", {
																					value: "Cruiser",
																					children: "Cruiser",
																				}),
																				e.jsx("option", {
																					value: "Adventure",
																					children: "Adventure",
																				}),
																				e.jsx("option", {
																					value: "Naked",
																					children: "Naked",
																				}),
																				e.jsx("option", {
																					value: "Scooter",
																					children: "Scooter",
																				}),
																				e.jsx("option", {
																					value: "Enduro",
																					children: "Enduro",
																				}),
																				e.jsx("option", {
																					value: "Chopper",
																					children: "Chopper",
																				}),
																			],
																		}),
																		g.category &&
																			e.jsxs("p", {
																				className:
																					"mt-1 text-sm text-red-600 flex items-center",
																				children: [
																					e.jsx(he, {
																						className: "h-4 w-4 mr-1",
																					}),
																					g.category,
																				],
																			}),
																	],
																}),
																e.jsxs("div", {
																	children: [
																		e.jsx("label", {
																			className:
																				"block text-sm font-medium text-gray-700 mb-2",
																			children: "Marcă *",
																		}),
																		e.jsxs("select", {
																			value: J.brand,
																			onChange: (k) =>
																				re("brand", k.target.value),
																			className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																				g.brand
																					? "border-red-500"
																					: "border-gray-300"
																			}`,
																			children: [
																				e.jsx("option", {
																					value: "",
																					children: "Selectează marca",
																				}),
																				e.jsx("option", {
																					value: "Yamaha",
																					children: "Yamaha",
																				}),
																				e.jsx("option", {
																					value: "Honda",
																					children: "Honda",
																				}),
																				e.jsx("option", {
																					value: "BMW",
																					children: "BMW",
																				}),
																				e.jsx("option", {
																					value: "Ducati",
																					children: "Ducati",
																				}),
																				e.jsx("option", {
																					value: "KTM",
																					children: "KTM",
																				}),
																				e.jsx("option", {
																					value: "Suzuki",
																					children: "Suzuki",
																				}),
																				e.jsx("option", {
																					value: "Harley-Davidson",
																					children: "Harley-Davidson",
																				}),
																				e.jsx("option", {
																					value: "Kawasaki",
																					children: "Kawasaki",
																				}),
																				e.jsx("option", {
																					value: "Triumph",
																					children: "Triumph",
																				}),
																				e.jsx("option", {
																					value: "Aprilia",
																					children: "Aprilia",
																				}),
																				e.jsx("option", {
																					value: "MV Agusta",
																					children: "MV Agusta",
																				}),
																				e.jsx("option", {
																					value: "Benelli",
																					children: "Benelli",
																				}),
																				e.jsx("option", {
																					value: "Moto Guzzi",
																					children: "Moto Guzzi",
																				}),
																				e.jsx("option", {
																					value: "Indian",
																					children: "Indian",
																				}),
																				e.jsx("option", {
																					value: "Zero",
																					children: "Zero",
																				}),
																				e.jsx("option", {
																					value: "Energica",
																					children: "Energica",
																				}),
																				e.jsx("option", {
																					value: "Husqvarna",
																					children: "Husqvarna",
																				}),
																				e.jsx("option", {
																					value: "Beta",
																					children: "Beta",
																				}),
																				e.jsx("option", {
																					value: "Sherco",
																					children: "Sherco",
																				}),
																				e.jsx("option", {
																					value: "GasGas",
																					children: "GasGas",
																				}),
																			],
																		}),
																		g.brand &&
																			e.jsxs("p", {
																				className:
																					"mt-1 text-sm text-red-600 flex items-center",
																				children: [
																					e.jsx(he, {
																						className: "h-4 w-4 mr-1",
																					}),
																					g.brand,
																				],
																			}),
																	],
																}),
																e.jsxs("div", {
																	children: [
																		e.jsx("label", {
																			className:
																				"block text-sm font-medium text-gray-700 mb-2",
																			children: "Model *",
																		}),
																		e.jsx("input", {
																			type: "text",
																			value: J.model,
																			onChange: (k) =>
																				re("model", k.target.value),
																			className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																				g.model
																					? "border-red-500"
																					: "border-gray-300"
																			}`,
																			placeholder: "ex: YZF-R1",
																		}),
																		g.model &&
																			e.jsxs("p", {
																				className:
																					"mt-1 text-sm text-red-600 flex items-center",
																				children: [
																					e.jsx(he, {
																						className: "h-4 w-4 mr-1",
																					}),
																					g.model,
																				],
																			}),
																	],
																}),
																e.jsxs("div", {
																	children: [
																		e.jsx("label", {
																			className:
																				"block text-sm font-medium text-gray-700 mb-2",
																			children: "An fabricație *",
																		}),
																		e.jsx("input", {
																			type: "number",
																			value: J.year,
																			onChange: (k) =>
																				re("year", k.target.value),
																			className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																				g.year
																					? "border-red-500"
																					: "border-gray-300"
																			}`,
																			placeholder: "2023",
																			min: "1990",
																			max: "2025",
																		}),
																		g.year &&
																			e.jsxs("p", {
																				className:
																					"mt-1 text-sm text-red-600 flex items-center",
																				children: [
																					e.jsx(he, {
																						className: "h-4 w-4 mr-1",
																					}),
																					g.year,
																				],
																			}),
																	],
																}),
																e.jsxs("div", {
																	children: [
																		e.jsx("label", {
																			className:
																				"block text-sm font-medium text-gray-700 mb-2",
																			children: "Kilometraj *",
																		}),
																		e.jsx("input", {
																			type: "number",
																			value: J.mileage,
																			onChange: (k) =>
																				re("mileage", k.target.value),
																			className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																				g.mileage
																					? "border-red-500"
																					: "border-gray-300"
																			}`,
																			placeholder: "25000",
																			min: "0",
																			max: "500000",
																		}),
																		g.mileage &&
																			e.jsxs("p", {
																				className:
																					"mt-1 text-sm text-red-600 flex items-center",
																				children: [
																					e.jsx(he, {
																						className: "h-4 w-4 mr-1",
																					}),
																					g.mileage,
																				],
																			}),
																	],
																}),
																e.jsxs("div", {
																	children: [
																		e.jsx("label", {
																			className:
																				"block text-sm font-medium text-gray-700 mb-2",
																			children: "Capacitate motor (cc) *",
																		}),
																		e.jsx("input", {
																			type: "number",
																			value: J.engine_capacity,
																			onChange: (k) =>
																				re("engine_capacity", k.target.value),
																			className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																				g.engine_capacity
																					? "border-red-500"
																					: "border-gray-300"
																			}`,
																			placeholder: "998",
																			min: "50",
																			max: "3000",
																		}),
																		g.engine_capacity &&
																			e.jsxs("p", {
																				className:
																					"mt-1 text-sm text-red-600 flex items-center",
																				children: [
																					e.jsx(he, {
																						className: "h-4 w-4 mr-1",
																					}),
																					g.engine_capacity,
																				],
																			}),
																	],
																}),
																e.jsxs("div", {
																	children: [
																		e.jsx("label", {
																			className:
																				"block text-sm font-medium text-gray-700 mb-2",
																			children: "Combustibil *",
																		}),
																		e.jsxs("select", {
																			value: J.fuel_type,
																			onChange: (k) =>
																				re("fuel_type", k.target.value),
																			className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																				g.fuel_type
																					? "border-red-500"
																					: "border-gray-300"
																			}`,
																			children: [
																				e.jsx("option", {
																					value: "",
																					children: "Selectează combustibilul",
																				}),
																				e.jsx("option", {
																					value: "Benzină",
																					children: "Benzină",
																				}),
																				e.jsx("option", {
																					value: "Electric",
																					children: "Electric",
																				}),
																				e.jsx("option", {
																					value: "Hibrid",
																					children: "Hibrid",
																				}),
																			],
																		}),
																		g.fuel_type &&
																			e.jsxs("p", {
																				className:
																					"mt-1 text-sm text-red-600 flex items-center",
																				children: [
																					e.jsx(he, {
																						className: "h-4 w-4 mr-1",
																					}),
																					g.fuel_type,
																				],
																			}),
																	],
																}),
																e.jsxs("div", {
																	children: [
																		e.jsx("label", {
																			className:
																				"block text-sm font-medium text-gray-700 mb-2",
																			children: "Transmisie *",
																		}),
																		e.jsxs("select", {
																			value: J.transmission,
																			onChange: (k) =>
																				re("transmission", k.target.value),
																			className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																				g.transmission
																					? "border-red-500"
																					: "border-gray-300"
																			}`,
																			children: [
																				e.jsx("option", {
																					value: "",
																					children: "Selectează transmisia",
																				}),
																				e.jsx("option", {
																					value: "Manual",
																					children: "Manual",
																				}),
																				e.jsx("option", {
																					value: "Automat",
																					children: "Automat",
																				}),
																				e.jsx("option", {
																					value: "Semi-automat",
																					children: "Semi-automat",
																				}),
																			],
																		}),
																		g.transmission &&
																			e.jsxs("p", {
																				className:
																					"mt-1 text-sm text-red-600 flex items-center",
																				children: [
																					e.jsx(he, {
																						className: "h-4 w-4 mr-1",
																					}),
																					g.transmission,
																				],
																			}),
																	],
																}),
																e.jsxs("div", {
																	children: [
																		e.jsx("label", {
																			className:
																				"block text-sm font-medium text-gray-700 mb-2",
																			children: "Culoare *",
																		}),
																		e.jsx("input", {
																			type: "text",
																			value: J.color,
																			onChange: (k) =>
																				re("color", k.target.value),
																			className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																				g.color
																					? "border-red-500"
																					: "border-gray-300"
																			}`,
																			placeholder: "ex: Albastru Racing",
																		}),
																		g.color &&
																			e.jsxs("p", {
																				className:
																					"mt-1 text-sm text-red-600 flex items-center",
																				children: [
																					e.jsx(he, {
																						className: "h-4 w-4 mr-1",
																					}),
																					g.color,
																				],
																			}),
																	],
																}),
																e.jsxs("div", {
																	children: [
																		e.jsx("label", {
																			className:
																				"block text-sm font-medium text-gray-700 mb-2",
																			children: "Starea *",
																		}),
																		e.jsxs("select", {
																			value: J.condition,
																			onChange: (k) =>
																				re("condition", k.target.value),
																			className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																				g.condition
																					? "border-red-500"
																					: "border-gray-300"
																			}`,
																			children: [
																				e.jsx("option", {
																					value: "",
																					children: "Selectează starea",
																				}),
																				e.jsx("option", {
																					value: "Nouă",
																					children: "Nouă",
																				}),
																				e.jsx("option", {
																					value: "Excelentă",
																					children: "Excelentă",
																				}),
																				e.jsx("option", {
																					value: "Foarte bună",
																					children: "Foarte bună",
																				}),
																				e.jsx("option", {
																					value: "Bună",
																					children: "Bună",
																				}),
																				e.jsx("option", {
																					value: "Satisfăcătoare",
																					children: "Satisfăcătoare",
																				}),
																			],
																		}),
																		g.condition &&
																			e.jsxs("p", {
																				className:
																					"mt-1 text-sm text-red-600 flex items-center",
																				children: [
																					e.jsx(he, {
																						className: "h-4 w-4 mr-1",
																					}),
																					g.condition,
																				],
																			}),
																	],
																}),
																e.jsxs("div", {
																	children: [
																		e.jsx("label", {
																			className:
																				"block text-sm font-medium text-gray-700 mb-2",
																			children: "Locația *",
																		}),
																		e.jsxs("select", {
																			value: J.location,
																			onChange: (k) =>
																				re("location", k.target.value),
																			className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																				g.location
																					? "border-red-500"
																					: "border-gray-300"
																			}`,
																			children: [
																				e.jsx("option", {
																					value: "",
																					children: "Selectează orașul",
																				}),
																				e.jsx("option", {
																					value: "București S1",
																					children: "București S1",
																				}),
																				e.jsx("option", {
																					value: "București S2",
																					children: "București S2",
																				}),
																				e.jsx("option", {
																					value: "București S3",
																					children: "București S3",
																				}),
																				e.jsx("option", {
																					value: "București S4",
																					children: "București S4",
																				}),
																				e.jsx("option", {
																					value: "București S5",
																					children: "București S5",
																				}),
																				e.jsx("option", {
																					value: "București S6",
																					children: "București S6",
																				}),
																				e.jsx("option", {
																					value: "Cluj-Napoca",
																					children: "Cluj-Napoca",
																				}),
																				e.jsx("option", {
																					value: "Timișoara",
																					children: "Timișoara",
																				}),
																				e.jsx("option", {
																					value: "Iași",
																					children: "Iași",
																				}),
																				e.jsx("option", {
																					value: "Constanța",
																					children: "Constanța",
																				}),
																				e.jsx("option", {
																					value: "Brașov",
																					children: "Brașov",
																				}),
																				e.jsx("option", {
																					value: "Craiova",
																					children: "Craiova",
																				}),
																				e.jsx("option", {
																					value: "Galați",
																					children: "Galați",
																				}),
																				e.jsx("option", {
																					value: "Oradea",
																					children: "Oradea",
																				}),
																				e.jsx("option", {
																					value: "Ploiești",
																					children: "Ploiești",
																				}),
																				e.jsx("option", {
																					value: "Sibiu",
																					children: "Sibiu",
																				}),
																				e.jsx("option", {
																					value: "Bacău",
																					children: "Bacău",
																				}),
																				e.jsx("option", {
																					value: "Râmnicu Vâlcea",
																					children: "Râmnicu Vâlcea",
																				}),
																				Bt.map(
																					(k) =>
																						!k.startsWith("București") &&
																						k !== "Râmnicu Vâlcea" &&
																						k !== "Rm. Vâlcea" &&
																						e.jsx(
																							"option",
																							{ value: k, children: k },
																							k,
																						),
																				),
																			],
																		}),
																		g.location &&
																			e.jsxs("p", {
																				className:
																					"mt-1 text-sm text-red-600 flex items-center",
																				children: [
																					e.jsx(he, {
																						className: "h-4 w-4 mr-1",
																					}),
																					g.location,
																				],
																			}),
																	],
																}),
																p?.seller_type === "dealer" &&
																	e.jsxs("div", {
																		children: [
																			e.jsx("label", {
																				className:
																					"block text-sm font-medium text-gray-700 mb-2",
																				children: "Disponibilitate *",
																			}),
																			e.jsx("div", {
																				className: "flex space-x-4",
																				children: Se.map((k) =>
																					e.jsxs(
																						"label",
																						{
																							className: `flex items-center space-x-2 border rounded-lg px-4 py-3 cursor-pointer transition-colors ${
																								J.availability === k.value
																									? "border-nexar-accent bg-nexar-accent/5"
																									: "border-gray-300 hover:bg-gray-50"
																							}`,
																							children: [
																								e.jsx("input", {
																									type: "radio",
																									name: "availability",
																									value: k.value,
																									checked:
																										J.availability === k.value,
																									onChange: (q) =>
																										re(
																											"availability",
																											q.target.value,
																										),
																									className: "sr-only",
																								}),
																								e.jsx(k.icon, {
																									className: `h-5 w-5 ${
																										J.availability === k.value
																											? "text-nexar-accent"
																											: "text-gray-400"
																									}`,
																								}),
																								e.jsx("span", {
																									className:
																										J.availability === k.value
																											? "font-medium"
																											: "",
																									children: k.label,
																								}),
																							],
																						},
																						k.value,
																					),
																				),
																			}),
																			g.availability &&
																				e.jsxs("p", {
																					className:
																						"mt-1 text-sm text-red-600 flex items-center",
																					children: [
																						e.jsx(he, {
																							className: "h-4 w-4 mr-1",
																						}),
																						g.availability,
																					],
																				}),
																		],
																	}),
																ne &&
																	e.jsxs("div", {
																		children: [
																			e.jsx("label", {
																				className:
																					"block text-sm font-medium text-gray-700 mb-2",
																				children: "Status *",
																			}),
																			e.jsxs("select", {
																				value: J.status,
																				onChange: (k) =>
																					re("status", k.target.value),
																				className:
																					"w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																				children: [
																					e.jsx("option", {
																						value: "active",
																						children: "Activ",
																					}),
																					e.jsx("option", {
																						value: "pending",
																						children: "În așteptare",
																					}),
																					e.jsx("option", {
																						value: "rejected",
																						children: "Respins",
																					}),
																					e.jsx("option", {
																						value: "sold",
																						children: "Vândut",
																					}),
																				],
																			}),
																		],
																	}),
															],
														}),
													],
												}),
												e.jsxs("div", {
													className: "space-y-6",
													children: [
														e.jsx("h2", {
															className: "text-xl font-semibold text-gray-900",
															children: "Fotografii",
														}),
														g.images &&
															e.jsx("div", {
																className:
																	"bg-red-50 border border-red-200 rounded-lg p-4",
																children: e.jsxs("p", {
																	className: "text-red-600 flex items-center",
																	children: [
																		e.jsx(he, { className: "h-4 w-4 mr-2" }),
																		g.images,
																	],
																}),
															}),
														e.jsxs("div", {
															className:
																"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
															children: [
																w.map((k, q) =>
																	e.jsxs(
																		"div",
																		{
																			className: "relative group",
																			children: [
																				e.jsx("img", {
																					src: k,
																					alt: `Upload ${q + 1}`,
																					className:
																						"w-full h-48 object-cover rounded-lg",
																					onError: (R) => {
																						const $ = R.currentTarget;
																						$.src =
																							"https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg";
																					},
																				}),
																				e.jsx("button", {
																					type: "button",
																					onClick: () => V(q),
																					className:
																						"absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity",
																					children: e.jsx(Vo, {
																						className: "h-4 w-4",
																					}),
																				}),
																				q === 0 &&
																					e.jsx("div", {
																						className:
																							"absolute bottom-2 left-2 bg-gray-900 text-white px-2 py-1 rounded text-xs font-semibold",
																						children: "Foto principală",
																					}),
																			],
																		},
																		q,
																	),
																),
																w.length < 5 &&
																	e.jsxs("label", {
																		className:
																			"border-2 border-dashed border-gray-300 rounded-lg h-48 flex flex-col items-center justify-center cursor-pointer hover:border-gray-900 transition-colors",
																		children: [
																			e.jsx(nc, {
																				className: "h-8 w-8 text-gray-400 mb-2",
																			}),
																			e.jsx("span", {
																				className: "text-gray-600",
																				children: "Adaugă fotografie",
																			}),
																			e.jsxs("span", {
																				className: "text-sm text-gray-400",
																				children: ["(", w.length, "/5)"],
																			}),
																			e.jsx("input", {
																				type: "file",
																				multiple: !0,
																				accept: "image/*",
																				onChange: j,
																				className: "hidden",
																			}),
																		],
																	}),
															],
														}),
														e.jsxs("div", {
															className:
																"bg-blue-50 border border-blue-200 rounded-lg p-4",
															children: [
																e.jsx("h4", {
																	className: "font-semibold text-blue-800 mb-2",
																	children:
																		"Sfaturi pentru fotografii de calitate:",
																}),
																e.jsxs("ul", {
																	className: "text-sm text-blue-700 space-y-1",
																	children: [
																		e.jsx("li", {
																			children:
																				"• Fotografiază în lumină naturală",
																		}),
																		e.jsx("li", {
																			children:
																				"• Include imagini din toate unghiurile",
																		}),
																		e.jsx("li", {
																			children:
																				"• Arată detaliile importante și eventualele defecte",
																		}),
																		e.jsx("li", {
																			children:
																				"• Prima fotografie va fi cea principală",
																		}),
																		e.jsx("li", {
																			children: "• Limită de 5MB per imagine",
																		}),
																		e.jsx("li", {
																			children: "• Maxim 5 imagini per anunț",
																		}),
																	],
																}),
															],
														}),
													],
												}),
												e.jsxs("div", {
													className: "space-y-6",
													children: [
														e.jsx("h2", {
															className: "text-xl font-semibold text-gray-900",
															children: "Preț și descriere",
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-2",
																	children: "Preț (EUR) *",
																}),
																e.jsx("input", {
																	type: "number",
																	value: J.price,
																	onChange: (k) => re("price", k.target.value),
																	className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent text-2xl font-bold ${
																		g.price
																			? "border-red-500"
																			: "border-gray-300"
																	}`,
																	placeholder: "18500",
																	min: "100",
																	max: "1000000",
																}),
																g.price &&
																	e.jsxs("p", {
																		className:
																			"mt-1 text-sm text-red-600 flex items-center",
																		children: [
																			e.jsx(he, { className: "h-4 w-4 mr-1" }),
																			g.price,
																		],
																	}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-2",
																	children: "Descriere detaliată",
																}),
																e.jsx("textarea", {
																	value: J.description,
																	onChange: (k) =>
																		re("description", k.target.value),
																	rows: 8,
																	className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																		g.description
																			? "border-red-500"
																			: "border-gray-300"
																	}`,
																	placeholder:
																		"Descrie motocicleta în detaliu: starea tehnică, istoricul, modificările, etc.",
																}),
																e.jsxs("div", {
																	className:
																		"flex justify-between items-center mt-1",
																	children: [
																		g.description
																			? e.jsxs("p", {
																					className:
																						"mt-1 text-sm text-red-600 flex items-center",
																					children: [
																						e.jsx(he, {
																							className: "h-4 w-4 mr-1",
																						}),
																						g.description,
																					],
																			  })
																			: e.jsx("p", {
																					className: "text-sm text-gray-500",
																					children: "Maxim 2000 caractere",
																			  }),
																		e.jsxs("span", {
																			className: `text-sm ${
																				J.description.length > 2e3
																					? "text-red-600"
																					: "text-green-600"
																			}`,
																			children: [J.description.length, "/2000"],
																		}),
																	],
																}),
															],
														}),
														e.jsxs("div", {
															children: [
																e.jsx("label", {
																	className:
																		"block text-sm font-medium text-gray-700 mb-4",
																	children: "Dotări și caracteristici",
																}),
																e.jsx("div", {
																	className:
																		"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",
																	children: [
																		"ABS",
																		"Control tracțiune",
																		"Suspensie reglabilă",
																		"Frâne Brembo",
																		"Quickshifter",
																		"Sistem de navigație",
																		"Încălzire mânere",
																		"LED complet",
																		"Bluetooth",
																		"USB",
																		"Geantă laterală",
																		"Parbriz reglabil",
																		"Scaun încălzit",
																		"Tempomat",
																		"Sistem anti-furt",
																		"Jante aliaj",
																	].map((k) =>
																		e.jsxs(
																			"label",
																			{
																				className:
																					"flex items-center space-x-2 cursor-pointer",
																				children: [
																					e.jsx("input", {
																						type: "checkbox",
																						checked: J.features.includes(k),
																						onChange: () => xe(k),
																						className:
																							"rounded border-gray-300 text-gray-900 focus:ring-gray-900",
																					}),
																					e.jsx("span", {
																						className: "text-sm",
																						children: k,
																					}),
																				],
																			},
																			k,
																		),
																	),
																}),
															],
														}),
													],
												}),
												e.jsxs("div", {
													className:
														"flex justify-end space-x-4 pt-6 border-t border-gray-200",
													children: [
														e.jsx("button", {
															type: "button",
															onClick: () => s(ne ? "/admin" : "/profil"),
															className:
																"px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors",
															children: "Anulează",
														}),
														e.jsx("button", {
															type: "submit",
															disabled: c,
															className:
																"px-8 py-3 bg-nexar-accent text-white rounded-lg font-semibold hover:bg-nexar-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2",
															children: c
																? e.jsxs(e.Fragment, {
																		children: [
																			e.jsx("div", {
																				className:
																					"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin",
																			}),
																			e.jsx("span", {
																				children: "Se salvează...",
																			}),
																		],
																  })
																: e.jsxs(e.Fragment, {
																		children: [
																			e.jsx("span", {
																				children: "Salvează Modificările",
																			}),
																			e.jsx(ts, { className: "h-5 w-5" }),
																		],
																  }),
														}),
													],
												}),
											],
										}),
									],
								}),
							],
						}),
						e.jsx(zm, {
							isOpen: h,
							onClose: () => f(!1),
							onGoHome: () => s(ne ? "/admin" : "/profil"),
							onViewListing: () => s(`/anunt/${i}`),
							title: "Succes!",
							message: ne
								? "Anunțul a fost actualizat cu succes!"
								: "Anunțul a fost actualizat cu succes și a fost trimis spre aprobare. Va fi vizibil după ce va fi aprobat de administratori.",
							showViewButton: !0,
						}),
					],
			  });
	},
	Qh = () => {
		const { id: i } = sc(),
			s = Nt(),
			[a, l] = S.useState(null),
			[c, u] = S.useState(!0),
			[h, f] = S.useState(null),
			[p, y] = S.useState(!1),
			[g, v] = S.useState(!1),
			[w, T] = S.useState({}),
			[D, U] = S.useState("listings"),
			[A, z] = S.useState([]),
			[ee, N] = S.useState([]),
			[G, X] = S.useState(!1),
			[ne, le] = S.useState(null),
			[ie, Y] = S.useState(null),
			[J, Ee] = S.useState(!1),
			[Se, Pe] = S.useState({
				currentPassword: "",
				newPassword: "",
				confirmPassword: "",
			}),
			[I, ve] = S.useState({}),
			[re, xe] = S.useState(!1),
			[j, V] = S.useState(!1),
			[B, _] = S.useState([]),
			[k, q] = S.useState(!1);
		S.useEffect(() => {
			R();
		}, [i]);
		const R = async () => {
				try {
					u(!0), f(null);
					const {
							data: { user: W },
						} = await ae.auth.getUser(),
						pe = i || W?.id;
					if (!pe) {
						s("/auth");
						return;
					}
					y(!!(!i || (W && i === W.id)));
					const { data: we, error: Fe } = await ae
						.from("profiles")
						.select("*")
						.eq(i ? "id" : "user_id", pe)
						.single();
					if (Fe) {
						console.error("❌ Eroare la încărcarea profilului:", Fe),
							f("Profilul nu a fost găsit.");
						return;
					}
					console.log("📥 Profil încărcat:", we), l(we), T(we), await $(we.id);
				} catch (W) {
					console.error("💥 Eroare la încărcarea profilului:", W),
						f("A apărut o eroare la încărcarea profilului.");
				} finally {
					u(!1), console.log("✅ Profilul a fost procesat complet.");
				}
			},
			$ = async (W) => {
				try {
					X(!0);
					const { data: pe, error: we } = await ae
						.from("listings")
						.select("*")
						.eq("seller_id", W)
						.order("created_at", { ascending: !1 });
					if (we) {
						console.error("Error loading user listings:", we);
						return;
					}
					const Fe = pe?.filter((ls) => ls.status === "active") || [],
						Vt = pe?.filter((ls) => ls.status === "pending") || [];
					z(Fe), N(Vt);
				} catch (pe) {
					console.error("Error loading user listings:", pe);
				} finally {
					X(!1);
				}
			},
			C = () => {
				v(!0);
			},
			F = () => {
				v(!1), T(a), le(null), Y(null);
			},
			Q = (W, pe) => {
				T((we) => ({ ...we, [W]: pe }));
			},
			se = (W) => {
				if ((Q("location", W), W.length > 0)) {
					const pe = Bt.filter((we) =>
						we.toLowerCase().includes(W.toLowerCase()),
					).slice(0, 10);
					_(pe), V(!0);
				} else _([]), V(!1);
			},
			be = (W) => {
				Q("location", W), V(!1), _([]);
			},
			He = (W) => {
				const pe = W.target.files?.[0];
				if (pe) {
					if (pe.size > 2 * 1024 * 1024) {
						alert("Imaginea nu poate depăși 2MB");
						return;
					}
					if (!pe.type.startsWith("image/")) {
						alert("Doar fișierele imagine sunt permise");
						return;
					}
					le(pe);
					const we = new FileReader();
					(we.onload = (Fe) => {
						Fe.target?.result && Y(Fe.target.result);
					}),
						we.readAsDataURL(pe);
				}
			},
			$t = async () => {
				try {
					if (!a || !p) return;
					if ((q(!0), !w.name.trim())) {
						alert("Numele este obligatoriu"), q(!1);
						return;
					}
					if (!w.email.trim()) {
						alert("Email-ul este obligatoriu"), q(!1);
						return;
					}
					const { data: W, error: pe } = await Yh.update(a.user_id, {
						name: w.name.trim(),
						phone: w.phone?.trim() || "",
						location: w.location?.trim() || "",
						description: w.description?.trim() || "",
						website: w.website?.trim() || "",
					});
					if (pe) {
						console.error("Error updating profile:", pe),
							alert("Eroare la actualizarea profilului"),
							q(!1);
						return;
					}
					if (ne) {
						const { data: we, error: Fe } = await Yh.uploadAvatar(
							a.user_id,
							ne,
						);
						Fe
							? (console.error("Error uploading avatar:", Fe),
							  alert("Eroare la încărcarea avatarului"))
							: we && we.length > 0 && we[0].avatar_url
							? l((Vt) => ({ ...Vt, avatar_url: we[0].avatar_url }))
							: (console.error("avatarData nu conține avatar_url:", we),
							  alert(
									"Avatarul a fost încărcat, dar nu s-a putut actualiza profilul.",
							  ));
					}
					W && W.length > 0
						? l(W[0])
						: l({
								...a,
								name: w.name.trim(),
								phone: w.phone?.trim() || "",
								location: w.location?.trim() || "",
								description: w.description?.trim() || "",
								website: w.website?.trim() || "",
						  }),
						v(!1),
						le(null),
						Y(null),
						await $(a.id),
						window.location.reload(),
						window.scrollTo(0, 0),
						alert("Profilul a fost actualizat cu succes!");
				} catch (W) {
					console.error("Error saving profile:", W),
						alert("A apărut o eroare la salvarea profilului");
				} finally {
					q(!1);
				}
			},
			Tt = (W, pe) => {
				Pe((we) => ({ ...we, [W]: pe })),
					I[W] && ve((we) => ({ ...we, [W]: "" }));
			},
			Qs = (W) =>
				W
					? W.length < 8
						? "Parola trebuie să aibă cel puțin 8 caractere"
						: /(?=.*[a-z])/.test(W)
						? /(?=.*[A-Z])/.test(W)
							? /(?=.*\d)/.test(W)
								? ""
								: "Parola trebuie să conțină cel puțin o cifră"
							: "Parola trebuie să conțină cel puțin o literă mare"
						: "Parola trebuie să conțină cel puțin o literă mică"
					: "Parola este obligatorie",
			ea = async () => {
				try {
					const W = {},
						pe = Qs(Se.newPassword);
					if (
						(pe && (W.newPassword = pe),
						Se.newPassword !== Se.confirmPassword &&
							(W.confirmPassword = "Parolele nu coincid"),
						Object.keys(W).length > 0)
					) {
						ve(W);
						return;
					}
					const { error: we } = await $s.updatePassword(Se.newPassword);
					if (we) {
						console.error("Error updating password:", we),
							alert(`Eroare la actualizarea parolei: ${we}`);
						return;
					}
					Pe({ currentPassword: "", newPassword: "", confirmPassword: "" }),
						xe(!0),
						setTimeout(() => {
							xe(!1), Ee(!1);
						}, 3e3);
				} catch (W) {
					console.error("Error saving password:", W),
						alert("A apărut o eroare la salvarea parolei");
				}
			},
			Xs = (W) => {
				const pe = A.find((we) => we.id === W) || ee.find((we) => we.id === W);
				if (!pe) {
					alert("Anunțul nu a fost găsit");
					return;
				}
				if (pe.seller_id !== a.id) {
					alert("Nu poți edita un anunț care nu îți aparține");
					return;
				}
				s(`/editeaza-anunt/${W}`);
			},
			as = async (W) => {
				if (confirm("Ești sigur că vrei să ștergi acest anunț?"))
					try {
						const pe =
							A.find((Fe) => Fe.id === W) || ee.find((Fe) => Fe.id === W);
						if (!pe) {
							alert("Anunțul nu a fost găsit");
							return;
						}
						if (pe.seller_id !== a.id) {
							alert("Nu poți șterge un anunț care nu îți aparține");
							return;
						}
						const { error: we } = await ae
							.from("listings")
							.delete()
							.eq("id", W);
						if (we) {
							console.error("Error deleting listing:", we),
								alert("Eroare la ștergerea anunțului");
							return;
						}
						z((Fe) => Fe.filter((Vt) => Vt.id !== W)),
							N((Fe) => Fe.filter((Vt) => Vt.id !== W)),
							alert("Anunțul a fost șters cu succes!");
					} catch (pe) {
						console.error("Error deleting listing:", pe),
							alert("A apărut o eroare la ștergerea anunțului");
					}
			},
			is = (W) => {
				s(`/anunt/${W}`);
			};
		return c
			? e.jsx("div", {
					className: "min-h-screen bg-gray-50 flex items-center justify-center",
					children: e.jsxs("div", {
						className: "bg-white p-8 rounded-2xl shadow-lg text-center",
						children: [
							e.jsx("div", {
								className:
									"w-16 h-16 border-4 border-nexar-accent border-t-transparent rounded-full animate-spin mx-auto mb-4",
							}),
							e.jsx("p", {
								className: "text-gray-600",
								children: "Se încarcă profilul...",
							}),
						],
					}),
			  })
			: h || !a
			? e.jsx("div", {
					className: "min-h-screen bg-gray-50 flex items-center justify-center",
					children: e.jsxs("div", {
						className:
							"bg-white p-8 rounded-2xl shadow-lg text-center max-w-md",
						children: [
							e.jsx(he, { className: "h-16 w-16 text-red-500 mx-auto mb-4" }),
							e.jsx("h2", {
								className: "text-2xl font-bold text-gray-900 mb-2",
								children: h || "Profil negăsit",
							}),
							e.jsx("p", {
								className: "text-gray-600 mb-6",
								children: h || "Profilul căutat nu există sau a fost șters.",
							}),
							e.jsxs("div", {
								className: "flex flex-col sm:flex-row gap-4",
								children: [
									e.jsx("button", {
										onClick: () => s("/"),
										className:
											"bg-nexar-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors",
										children: "Înapoi la pagina principală",
									}),
									e.jsx(Pi, { buttonText: "Repară Conexiunea" }),
								],
							}),
						],
					}),
			  })
			: e.jsx("div", {
					className: "min-h-screen bg-gray-50 py-8",
					children: e.jsx("div", {
						className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
						children: e.jsxs("div", {
							className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
							children: [
								e.jsxs("div", {
									className: "lg:col-span-1",
									children: [
										e.jsxs("div", {
											className:
												"bg-white rounded-2xl shadow-lg overflow-hidden",
											children: [
												e.jsxs("div", {
													className: "relative",
													children: [
														e.jsx("div", {
															className:
																"h-32 bg-gradient-to-r from-nexar-accent to-nexar-gold",
														}),
														e.jsx("div", {
															className:
																"absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2",
															children: e.jsxs("div", {
																className: "relative",
																children: [
																	e.jsx("div", {
																		className:
																			"w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-gray-200",
																		children: e.jsx("img", {
																			width: "96",
																			height: "96",
																			src:
																				ie ||
																				a.avatar_url ||
																				`https://ui-avatars.com/api/?name=${encodeURIComponent(
																					a.name,
																				)}&background=random`,
																			alt: a.name,
																			className: "w-full h-full object-cover",
																			onError: (W) => {
																				const pe = W.currentTarget;
																				pe.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
																					a.name,
																				)}&background=random`;
																			},
																		}),
																	}),
																	g &&
																		e.jsxs("label", {
																			className:
																				"absolute bottom-0 right-0 bg-nexar-accent text-white p-1 rounded-full cursor-pointer",
																			children: [
																				e.jsx(nc, { className: "h-4 w-4" }),
																				e.jsx("input", {
																					type: "file",
																					accept: "image/*",
																					className: "hidden",
																					onChange: He,
																				}),
																			],
																		}),
																],
															}),
														}),
													],
												}),
												e.jsxs("div", {
													className: "pt-16 px-6 pb-6",
													children: [
														e.jsxs("div", {
															className: "text-center mb-6",
															children: [
																e.jsx("h1", {
																	className:
																		"text-2xl font-bold text-gray-900 mb-1",
																	children: a.name,
																}),
																e.jsx("div", {
																	className: "mt-2",
																	children:
																		a.seller_type === "dealer"
																			? e.jsxs("div", {
																					className:
																						"inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-3 py-1.5 rounded-full shadow-md border border-emerald-400",
																					children: [
																						e.jsx(Hs, { className: "h-3 w-3" }),
																						e.jsx("span", {
																							className:
																								"font-bold text-xs tracking-wide",
																							children: "DEALER PREMIUM",
																						}),
																					],
																			  })
																			: e.jsxs("div", {
																					className:
																						"inline-flex items-center space-x-2 bg-gradient-to-r from-slate-500 to-slate-600 text-white px-3 py-1.5 rounded-full shadow-md",
																					children: [
																						e.jsx(Qn, { className: "h-3 w-3" }),
																						e.jsx("span", {
																							className:
																								"font-semibold text-xs",
																							children: "VÂNZĂTOR PRIVAT",
																						}),
																					],
																			  }),
																}),
															],
														}),
														g
															? e.jsxs("div", {
																	className: "space-y-4",
																	children: [
																		e.jsxs("div", {
																			children: [
																				e.jsx("label", {
																					className:
																						"block text-sm font-medium text-gray-700 mb-2",
																					children: "Nume",
																				}),
																				e.jsx("input", {
																					type: "text",
																					value: w.name,
																					onChange: (W) =>
																						Q("name", W.target.value),
																					className:
																						"w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																				}),
																			],
																		}),
																		e.jsxs("div", {
																			children: [
																				e.jsx("label", {
																					className:
																						"block text-sm font-medium text-gray-700 mb-2",
																					children: "Email",
																				}),
																				e.jsx("input", {
																					type: "email",
																					value: w.email,
																					disabled: !0,
																					className:
																						"w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 cursor-not-allowed",
																				}),
																				e.jsx("p", {
																					className:
																						"text-xs text-gray-500 mt-1",
																					children:
																						"Email-ul nu poate fi modificat",
																				}),
																			],
																		}),
																		e.jsxs("div", {
																			children: [
																				e.jsx("label", {
																					className:
																						"block text-sm font-medium text-gray-700 mb-2",
																					children: "Telefon",
																				}),
																				e.jsx("input", {
																					type: "tel",
																					value: w.phone || "",
																					onChange: (W) =>
																						Q("phone", W.target.value),
																					className:
																						"w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																					placeholder: "0790 45 46 47",
																				}),
																			],
																		}),
																		e.jsxs("div", {
																			className: "relative",
																			children: [
																				e.jsx("label", {
																					className:
																						"block text-sm font-medium text-gray-700 mb-2",
																					children: "Locația",
																				}),
																				e.jsxs("div", {
																					className: "relative",
																					children: [
																						e.jsx("input", {
																							type: "text",
																							value: w.location || "",
																							onChange: (W) =>
																								se(W.target.value),
																							onFocus: () => {
																								if (w.location.length > 0) {
																									const W = Bt.filter((pe) =>
																										pe
																											.toLowerCase()
																											.includes(
																												w.location.toLowerCase(),
																											),
																									).slice(0, 10);
																									_(W), V(!0);
																								}
																							},
																							onBlur: () => {
																								setTimeout(() => V(!1), 200);
																							},
																							className:
																								"w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																							placeholder:
																								"Începe să scrii orașul...",
																							autoComplete: "off",
																						}),
																						e.jsx(mm, {
																							className:
																								"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4",
																						}),
																						j &&
																							B.length > 0 &&
																							e.jsx("div", {
																								className:
																									"absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
																								children: B.map((W, pe) =>
																									e.jsx(
																										"button",
																										{
																											type: "button",
																											onClick: () => be(W),
																											className:
																												"w-full text-left px-4 py-2 hover:bg-nexar-accent hover:text-white transition-colors text-sm border-b border-gray-100 last:border-b-0",
																											children: W,
																										},
																										pe,
																									),
																								),
																							}),
																					],
																				}),
																			],
																		}),
																		e.jsxs("div", {
																			children: [
																				e.jsx("label", {
																					className:
																						"block text-sm font-medium text-gray-700 mb-2",
																					children: "Descriere",
																				}),
																				e.jsx("textarea", {
																					value: w.description || "",
																					onChange: (W) =>
																						Q("description", W.target.value),
																					rows: 4,
																					className:
																						"w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																					placeholder:
																						"Descriere despre tine...",
																				}),
																			],
																		}),
																		a.seller_type === "dealer" &&
																			e.jsxs("div", {
																				children: [
																					e.jsx("label", {
																						className:
																							"block text-sm font-medium text-gray-700 mb-2",
																						children: "Website",
																					}),
																					e.jsx("input", {
																						type: "url",
																						value: w.website || "",
																						onChange: (W) =>
																							Q("website", W.target.value),
																						className:
																							"w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
																						placeholder:
																							"https://www.exemplu.ro",
																					}),
																				],
																			}),
																		e.jsxs("div", {
																			className: "flex space-x-3 pt-4",
																			children: [
																				e.jsx("button", {
																					onClick: $t,
																					disabled: k,
																					className:
																						"flex-1 bg-nexar-accent text-white py-2 rounded-lg font-semibold hover:bg-nexar-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
																					children: k
																						? e.jsxs("div", {
																								className:
																									"flex items-center justify-center",
																								children: [
																									e.jsx("div", {
																										className:
																											"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2",
																									}),
																									e.jsx("span", {
																										children: "Se salvează...",
																									}),
																								],
																						  })
																						: "Salvează",
																				}),
																				e.jsx("button", {
																					onClick: F,
																					className:
																						"flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors",
																					children: "Anulează",
																				}),
																			],
																		}),
																	],
															  })
															: e.jsxs("div", {
																	className: "space-y-4",
																	children: [
																		e.jsxs("div", {
																			className: "flex items-center space-x-3",
																			children: [
																				e.jsx(Ys, {
																					className: "h-5 w-5 text-gray-400",
																				}),
																				e.jsx("span", {
																					className: "text-gray-700",
																					children: a.email,
																				}),
																			],
																		}),
																		a.phone &&
																			e.jsxs("div", {
																				className:
																					"flex items-center space-x-3",
																				children: [
																					e.jsx(ss, {
																						className: "h-5 w-5 text-gray-400",
																					}),
																					e.jsx("span", {
																						className: "text-gray-700",
																						children: a.phone,
																					}),
																				],
																			}),
																		a.location &&
																			e.jsxs("div", {
																				className:
																					"flex items-center space-x-3",
																				children: [
																					e.jsx(lr, {
																						className: "h-5 w-5 text-gray-400",
																					}),
																					e.jsx("span", {
																						className: "text-gray-700",
																						children: a.location,
																					}),
																				],
																			}),
																		a.description &&
																			e.jsx("div", {
																				className: "pt-2 text-gray-700",
																				children: e.jsx("p", {
																					children: a.description,
																				}),
																			}),
																		a.website &&
																			e.jsx("div", {
																				className: "pt-2",
																				children: e.jsx("a", {
																					href: a.website,
																					target: "_blank",
																					rel: "noopener noreferrer",
																					className:
																						"text-nexar-accent hover:text-nexar-gold transition-colors",
																					children: a.website,
																				}),
																			}),
																		p &&
																			e.jsxs("div", {
																				className: "pt-4 space-y-3",
																				children: [
																					e.jsxs("button", {
																						onClick: C,
																						className:
																							"w-full bg-nexar-accent text-white py-2 rounded-lg font-semibold hover:bg-nexar-gold transition-colors flex items-center justify-center space-x-2",
																						children: [
																							e.jsx(yi, {
																								className: "h-4 w-4",
																							}),
																							e.jsx("span", {
																								children: "Editează Profilul",
																							}),
																						],
																					}),
																					e.jsxs("button", {
																						onClick: () => Ee(!J),
																						className:
																							"w-full bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2",
																						children: [
																							e.jsx(Ir, {
																								className: "h-4 w-4",
																							}),
																							e.jsx("span", {
																								children: "Schimbă Parola",
																							}),
																						],
																					}),
																				],
																			}),
																		p &&
																			J &&
																			e.jsxs("div", {
																				className:
																					"mt-4 pt-4 border-t border-gray-200 animate-slide-up",
																				children: [
																					e.jsx("h3", {
																						className:
																							"text-lg font-semibold text-gray-900 mb-4",
																						children: "Schimbă Parola",
																					}),
																					re &&
																						e.jsx("div", {
																							className:
																								"mb-4 bg-green-50 border border-green-200 rounded-lg p-3",
																							children: e.jsxs("p", {
																								className:
																									"text-green-700 flex items-center text-sm",
																								children: [
																									e.jsx(yt, {
																										className: "h-4 w-4 mr-2",
																									}),
																									"Parola a fost schimbată cu succes!",
																								],
																							}),
																						}),
																					e.jsxs("div", {
																						className: "space-y-4",
																						children: [
																							e.jsxs("div", {
																								children: [
																									e.jsx("label", {
																										className:
																											"block text-sm font-medium text-gray-700 mb-2",
																										children: "Parolă Nouă",
																									}),
																									e.jsxs("div", {
																										className: "relative",
																										children: [
																											e.jsx("input", {
																												type: "password",
																												value: Se.newPassword,
																												onChange: (W) =>
																													Tt(
																														"newPassword",
																														W.target.value,
																													),
																												className: `w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																													I.newPassword
																														? "border-red-500"
																														: "border-gray-300"
																												}`,
																												placeholder:
																													"Minim 8 caractere",
																											}),
																											e.jsx(Ir, {
																												className:
																													"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4",
																											}),
																										],
																									}),
																									I.newPassword &&
																										e.jsxs("p", {
																											className:
																												"mt-1 text-sm text-red-600 flex items-center",
																											children: [
																												e.jsx(he, {
																													className:
																														"h-4 w-4 mr-1",
																												}),
																												I.newPassword,
																											],
																										}),
																								],
																							}),
																							e.jsxs("div", {
																								children: [
																									e.jsx("label", {
																										className:
																											"block text-sm font-medium text-gray-700 mb-2",
																										children: "Confirmă Parola",
																									}),
																									e.jsxs("div", {
																										className: "relative",
																										children: [
																											e.jsx("input", {
																												type: "password",
																												value:
																													Se.confirmPassword,
																												onChange: (W) =>
																													Tt(
																														"confirmPassword",
																														W.target.value,
																													),
																												className: `w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																													I.confirmPassword
																														? "border-red-500"
																														: "border-gray-300"
																												}`,
																												placeholder:
																													"Repetă parola nouă",
																											}),
																											e.jsx(Ir, {
																												className:
																													"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4",
																											}),
																										],
																									}),
																									I.confirmPassword &&
																										e.jsxs("p", {
																											className:
																												"mt-1 text-sm text-red-600 flex items-center",
																											children: [
																												e.jsx(he, {
																													className:
																														"h-4 w-4 mr-1",
																												}),
																												I.confirmPassword,
																											],
																										}),
																								],
																							}),
																							e.jsxs("div", {
																								className:
																									"flex space-x-3 pt-2",
																								children: [
																									e.jsx("button", {
																										onClick: ea,
																										className:
																											"flex-1 bg-nexar-accent text-white py-2 rounded-lg font-semibold hover:bg-nexar-gold transition-colors",
																										children: "Salvează Parola",
																									}),
																									e.jsx("button", {
																										onClick: () => {
																											Ee(!1),
																												Pe({
																													currentPassword: "",
																													newPassword: "",
																													confirmPassword: "",
																												}),
																												ve({});
																										},
																										className:
																											"flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors",
																										children: "Anulează",
																									}),
																								],
																							}),
																						],
																					}),
																				],
																			}),
																	],
															  }),
													],
												}),
											],
										}),
										e.jsxs("div", {
											className: "bg-white rounded-2xl shadow-lg p-6 mt-6",
											children: [
												e.jsx("h2", {
													className: "text-lg font-semibold text-gray-900 mb-4",
													children: "Statistici",
												}),
												e.jsxs("div", {
													className: "grid grid-cols-2 gap-4",
													children: [
														e.jsxs("div", {
															className:
																"bg-gray-50 rounded-xl p-4 text-center",
															children: [
																e.jsx("div", {
																	className:
																		"text-2xl font-bold text-nexar-accent",
																	children: A.length,
																}),
																e.jsx("div", {
																	className: "text-sm text-gray-600",
																	children: "Anunțuri Active",
																}),
															],
														}),
														p &&
															e.jsxs("div", {
																className:
																	"bg-yellow-50 rounded-xl p-4 text-center",
																children: [
																	e.jsx("div", {
																		className:
																			"text-2xl font-bold text-yellow-600",
																		children: ee.length,
																	}),
																	e.jsx("div", {
																		className: "text-sm text-gray-600",
																		children: "În Așteptare",
																	}),
																],
															}),
													],
												}),
											],
										}),
									],
								}),
								e.jsx("div", {
									className: "lg:col-span-2",
									children: e.jsxs("div", {
										className: "bg-white rounded-2xl shadow-lg overflow-hidden",
										children: [
											e.jsxs("div", {
												className: "flex border-b border-gray-200",
												children: [
													e.jsx("button", {
														onClick: () => U("listings"),
														className: `flex-1 py-4 px-6 text-center font-semibold transition-colors ${
															D === "listings"
																? "text-nexar-accent border-b-2 border-nexar-accent"
																: "text-gray-600 hover:text-gray-900"
														}`,
														children: "Anunțuri Active",
													}),
													p &&
														e.jsxs("button", {
															onClick: () => U("pending"),
															className: `flex-1 py-4 px-6 text-center font-semibold transition-colors ${
																D === "pending"
																	? "text-nexar-accent border-b-2 border-nexar-accent"
																	: "text-gray-600 hover:text-gray-900"
															}`,
															children: [
																"În Așteptare",
																" ",
																ee.length > 0 &&
																	e.jsx("span", {
																		className:
																			"ml-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full",
																		children: ee.length,
																	}),
															],
														}),
												],
											}),
											D === "listings" &&
												e.jsxs("div", {
													className: "p-6",
													children: [
														e.jsx("h2", {
															className:
																"text-xl font-semibold text-gray-900 mb-6",
															children: p
																? "Anunțurile Mele"
																: `Anunțurile lui ${a.name}`,
														}),
														G
															? e.jsxs("div", {
																	className: "text-center py-8",
																	children: [
																		e.jsx("div", {
																			className:
																				"w-12 h-12 border-4 border-nexar-accent border-t-transparent rounded-full animate-spin mx-auto mb-4",
																		}),
																		e.jsx("p", {
																			className: "text-gray-600",
																			children: "Se încarcă anunțurile...",
																		}),
																	],
															  })
															: A.length === 0
															? e.jsxs("div", {
																	className:
																		"text-center py-8 bg-gray-50 rounded-xl",
																	children: [
																		e.jsx(Bo, {
																			className:
																				"h-12 w-12 text-gray-400 mx-auto mb-4",
																		}),
																		e.jsx("h3", {
																			className:
																				"text-lg font-semibold text-gray-900 mb-2",
																			children: p
																				? "Nu ai anunțuri active"
																				: `${a.name} nu are anunțuri active`,
																		}),
																		p &&
																			e.jsx("button", {
																				onClick: () => s("/adauga-anunt"),
																				className:
																					"mt-4 bg-nexar-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-nexar-gold transition-colors",
																				children: "Adaugă Anunț",
																			}),
																	],
															  })
															: e.jsx("div", {
																	className: "space-y-4",
																	children: A.map((W) =>
																		e.jsx(
																			"div",
																			{
																				className:
																					"bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer",
																				onClick: () => is(W.id),
																				children: e.jsxs("div", {
																					className:
																						"flex flex-col sm:flex-row",
																					children: [
																						e.jsxs("div", {
																							className:
																								"relative w-full sm:w-48 h-40 sm:h-auto",
																							children: [
																								e.jsx("img", {
																									src:
																										W.imagesThumbs &&
																										W.imagesThumbs[0]
																											? W.imagesThumbs[0]
																											: W.images && W.images[0]
																											? W.images[0]
																											: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
																									alt: W.title,
																									className:
																										"w-full h-full object-cover",
																									onError: (pe) => {
																										const we = pe.currentTarget;
																										we.src =
																											"https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg";
																									},
																								}),
																								e.jsx("div", {
																									className:
																										"absolute top-2 left-2",
																									children: e.jsx("span", {
																										className:
																											"bg-nexar-accent text-white px-2 py-1 rounded-full text-xs font-semibold",
																										children: W.category,
																									}),
																								}),
																							],
																						}),
																						e.jsxs("div", {
																							className: "flex-1 p-4",
																							children: [
																								e.jsxs("div", {
																									className:
																										"flex justify-between items-start",
																									children: [
																										e.jsxs("div", {
																											children: [
																												e.jsx("h3", {
																													className:
																														"text-lg font-semibold text-gray-900 mb-2",
																													children: W.title,
																												}),
																												e.jsxs("div", {
																													className:
																														"text-xl font-bold text-nexar-accent mb-2",
																													children: [
																														"€",
																														W.price.toLocaleString(),
																													],
																												}),
																											],
																										}),
																										e.jsxs("div", {
																											className:
																												"flex items-center space-x-1 bg-gray-50 rounded-lg px-2 py-1",
																											children: [
																												e.jsx(or, {
																													className:
																														"h-4 w-4 text-gray-500",
																												}),
																												e.jsx("span", {
																													className:
																														"text-xs font-medium",
																													children:
																														W.views_count || 0,
																												}),
																											],
																										}),
																									],
																								}),
																								e.jsxs("div", {
																									className:
																										"grid grid-cols-3 gap-2 mb-4 text-sm",
																									children: [
																										e.jsxs("div", {
																											className:
																												"flex items-center space-x-1 text-gray-600",
																											children: [
																												e.jsx(Vs, {
																													className: "h-4 w-4",
																												}),
																												e.jsx("span", {
																													children: W.year,
																												}),
																											],
																										}),
																										e.jsxs("div", {
																											className:
																												"flex items-center space-x-1 text-gray-600",
																											children: [
																												e.jsx(lr, {
																													className: "h-4 w-4",
																												}),
																												e.jsx("span", {
																													children: W.location,
																												}),
																											],
																										}),
																									],
																								}),
																								p &&
																									e.jsxs("div", {
																										className: "flex space-x-2",
																										children: [
																											e.jsxs("button", {
																												onClick: (pe) => {
																													pe.stopPropagation(),
																														is(W.id);
																												},
																												className:
																													"bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center space-x-1",
																												children: [
																													e.jsx(or, {
																														className:
																															"h-4 w-4",
																													}),
																													e.jsx("span", {
																														children: "Vezi",
																													}),
																												],
																											}),
																											e.jsxs("button", {
																												onClick: (pe) => {
																													pe.stopPropagation(),
																														Xs(W.id);
																												},
																												className:
																													"bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition-colors flex items-center space-x-1",
																												children: [
																													e.jsx(yi, {
																														className:
																															"h-4 w-4",
																													}),
																													e.jsx("span", {
																														children:
																															"Editează",
																													}),
																												],
																											}),
																											e.jsxs("button", {
																												onClick: (pe) => {
																													pe.stopPropagation(),
																														as(W.id);
																												},
																												className:
																													"bg-red-100 text-red-700 px-4 py-2 rounded-lg font-medium hover:bg-red-200 transition-colors flex items-center space-x-1",
																												children: [
																													e.jsx(Ft, {
																														className:
																															"h-4 w-4",
																													}),
																													e.jsx("span", {
																														children: "Șterge",
																													}),
																												],
																											}),
																										],
																									}),
																							],
																						}),
																					],
																				}),
																			},
																			W.id,
																		),
																	),
															  }),
													],
												}),
											D === "pending" &&
												p &&
												e.jsxs("div", {
													className: "p-6",
													children: [
														e.jsxs("h2", {
															className:
																"text-xl font-semibold text-gray-900 mb-6 flex items-center",
															children: [
																e.jsx(Yt, {
																	className: "h-5 w-5 mr-2 text-yellow-600",
																}),
																"Anunțuri în Așteptare",
															],
														}),
														e.jsx("div", {
															className:
																"bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6",
															children: e.jsxs("p", {
																className: "text-yellow-700 flex items-start",
																children: [
																	e.jsx(he, {
																		className:
																			"h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
																	}),
																	e.jsx("span", {
																		children:
																			"Anunțurile tale sunt în curs de verificare de către administratori. Acest proces poate dura până la 24 de ore. Vei fi notificat când anunțurile tale vor fi aprobate.",
																	}),
																],
															}),
														}),
														G
															? e.jsxs("div", {
																	className: "text-center py-8",
																	children: [
																		e.jsx("div", {
																			className:
																				"w-12 h-12 border-4 border-nexar-accent border-t-transparent rounded-full animate-spin mx-auto mb-4",
																		}),
																		e.jsx("p", {
																			className: "text-gray-600",
																			children: "Se încarcă anunțurile...",
																		}),
																	],
															  })
															: ee.length === 0
															? e.jsxs("div", {
																	className:
																		"text-center py-8 bg-gray-50 rounded-xl",
																	children: [
																		e.jsx(ng, {
																			className:
																				"h-12 w-12 text-green-500 mx-auto mb-4",
																		}),
																		e.jsx("h3", {
																			className:
																				"text-lg font-semibold text-gray-900 mb-2",
																			children: "Nu ai anunțuri în așteptare",
																		}),
																		e.jsx("p", {
																			className: "text-gray-600 mb-4",
																			children:
																				"Toate anunțurile tale au fost procesate. Poți adăuga un anunț nou oricând.",
																		}),
																		e.jsx("button", {
																			onClick: () => s("/adauga-anunt"),
																			className:
																				"bg-nexar-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-nexar-gold transition-colors",
																			children: "Adaugă Anunț Nou",
																		}),
																	],
															  })
															: e.jsx("div", {
																	className: "space-y-4",
																	children: ee.map((W) =>
																		e.jsx(
																			"div",
																			{
																				className:
																					"bg-white border border-yellow-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer",
																				onClick: () => is(W.id),
																				children: e.jsxs("div", {
																					className:
																						"flex flex-col sm:flex-row",
																					children: [
																						e.jsxs("div", {
																							className:
																								"relative w-full sm:w-48 h-40 sm:h-auto",
																							children: [
																								e.jsx("img", {
																									src:
																										W.images && W.images[0]
																											? W.images[0]
																											: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
																									alt: W.title,
																									className:
																										"w-full h-full object-cover",
																									onError: (pe) => {
																										const we = pe.currentTarget;
																										we.src =
																											"https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg";
																									},
																								}),
																								e.jsx("div", {
																									className:
																										"absolute top-2 left-2",
																									children: e.jsx("span", {
																										className:
																											"bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold",
																										children: "În așteptare",
																									}),
																								}),
																							],
																						}),
																						e.jsxs("div", {
																							className: "flex-1 p-4",
																							children: [
																								e.jsxs("div", {
																									className:
																										"flex justify-between items-start",
																									children: [
																										e.jsxs("div", {
																											children: [
																												e.jsx("h3", {
																													className:
																														"text-lg font-semibold text-gray-900 mb-2",
																													children: W.title,
																												}),
																												e.jsxs("div", {
																													className:
																														"text-xl font-bold text-nexar-accent mb-2",
																													children: [
																														"€",
																														W.price.toLocaleString(),
																													],
																												}),
																											],
																										}),
																										e.jsxs("div", {
																											className:
																												"flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-lg",
																											children: [
																												e.jsx(Yt, {
																													className: "h-4 w-4",
																												}),
																												e.jsx("span", {
																													className:
																														"text-xs font-medium",
																													children:
																														"În așteptare",
																												}),
																											],
																										}),
																									],
																								}),
																								e.jsxs("div", {
																									className:
																										"grid grid-cols-3 gap-2 mb-4 text-sm",
																									children: [
																										e.jsxs("div", {
																											className:
																												"flex items-center space-x-1 text-gray-600",
																											children: [
																												e.jsx(Vs, {
																													className: "h-4 w-4",
																												}),
																												e.jsx("span", {
																													children: W.year,
																												}),
																											],
																										}),
																										e.jsxs("div", {
																											className:
																												"flex items-center space-x-1 text-gray-600",
																											children: [
																												e.jsx(lr, {
																													className: "h-4 w-4",
																												}),
																												e.jsx("span", {
																													children: W.location,
																												}),
																											],
																										}),
																									],
																								}),
																								e.jsxs("div", {
																									className: "flex space-x-2",
																									children: [
																										e.jsxs("button", {
																											onClick: (pe) => {
																												pe.stopPropagation(),
																													Xs(W.id);
																											},
																											className:
																												"bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition-colors flex items-center space-x-1",
																											children: [
																												e.jsx(yi, {
																													className: "h-4 w-4",
																												}),
																												e.jsx("span", {
																													children: "Editează",
																												}),
																											],
																										}),
																										e.jsxs("button", {
																											onClick: (pe) => {
																												pe.stopPropagation(),
																													as(W.id);
																											},
																											className:
																												"bg-red-100 text-red-700 px-4 py-2 rounded-lg font-medium hover:bg-red-200 transition-colors flex items-center space-x-1",
																											children: [
																												e.jsx(Ft, {
																													className: "h-4 w-4",
																												}),
																												e.jsx("span", {
																													children: "Șterge",
																												}),
																											],
																										}),
																									],
																								}),
																							],
																						}),
																					],
																				}),
																			},
																			W.id,
																		),
																	),
															  }),
													],
												}),
										],
									}),
								}),
							],
						}),
					}),
			  });
	},
	Uy = () => {
		const [i, s] = S.useState("listings"),
			[a, l] = S.useState([]),
			[c, u] = S.useState([]),
			[h, f] = S.useState(!0),
			[p, y] = S.useState(null),
			[g, v] = S.useState(!1),
			[w, T] = S.useState(""),
			[D, U] = S.useState("all"),
			[A, z] = S.useState({}),
			ee = Nt(),
			[N, G] = S.useState(null);
		S.useEffect(() => {
			X();
		}, []);
		const X = async () => {
				try {
					f(!0), y(null), G(null);
					const j = await Rr.isAdmin();
					if ((v(j), !j)) {
						y(
							"Nu ai permisiunea de a accesa această pagină. Doar administratorii pot vedea panoul de administrare.",
						),
							f(!1);
						return;
					}
					i === "listings" ? await ne() : i === "users" && (await le());
				} catch (j) {
					console.error("Error checking admin status:", j),
						j.message?.includes("fetch") || j.message?.includes("network")
							? G(j)
							: y(
									"A apărut o eroare la verificarea statusului de administrator.",
							  );
				} finally {
					f(!1);
				}
			},
			ne = async () => {
				try {
					f(!0), y(null), G(null);
					const { data: j, error: V } = await ae
						.from("listings")
						.select(
							`
          *,
          profiles!listings_seller_id_fkey (
            name,
            email,
            seller_type,
            verified
          )
        `,
						)
						.order("created_at", { ascending: !1 });
					if (V) {
						console.error("Error loading listings:", V),
							V.message?.includes("fetch") || V.message?.includes("network")
								? G(V)
								: y("Nu s-au putut încărca anunțurile.");
						return;
					}
					console.log("Loaded listings:", j?.length || 0, j), l(j || []);
				} catch (j) {
					console.error("Error loading listings:", j),
						j.message?.includes("fetch") || j.message?.includes("network")
							? G(j)
							: y("A apărut o eroare la încărcarea anunțurilor.");
				} finally {
					f(!1);
				}
			},
			le = async () => {
				try {
					f(!0), y(null), G(null);
					const { data: j, error: V } = await Rr.getAllUsers();
					if (V) {
						console.error("Error loading users:", V),
							V.message?.includes("fetch") || V.message?.includes("network")
								? G(V)
								: y("Nu s-au putut încărca utilizatorii.");
						return;
					}
					u(j || []);
				} catch (j) {
					console.error("Error loading users:", j),
						j.message?.includes("fetch") || j.message?.includes("network")
							? G(j)
							: y("A apărut o eroare la încărcarea utilizatorilor.");
				} finally {
					f(!1);
				}
			},
			ie = async (j) => {
				s(j),
					T(""),
					U("all"),
					j === "listings" && a.length === 0
						? await ne()
						: j === "users" && c.length === 0 && (await le());
			},
			Y = async (j, V) => {
				console.log("🔄 Încearcă să modifice statusul la:", j, V);
				try {
					z((_) => ({ ..._, [j]: !0 }));
					const { error: B } = await Rr.updateListingStatus(j, V);
					if (B) {
						console.error("Error updating listing status:", B),
							alert(
								`Eroare la actualizarea statusului: ${B?.message ?? String(B)}`,
							);
						return;
					}
					console.log("✅ Status actualizat cu succes în frontend"),
						l((_) => _.map((k) => (k.id === j ? { ...k, status: V } : k))),
						alert(`Statusul anunțului a fost actualizat la "${V}".`);
				} catch (B) {
					console.error("⚠️ Eroare în try/catch:", B),
						alert("A apărut o eroare la actualizarea statusului.");
				} finally {
					z((B) => ({ ...B, [j]: !1 }));
				}
			},
			J = async (j) => {
				if (confirm("Ești sigur că vrei să ștergi acest anunț?"))
					try {
						z((B) => ({ ...B, [j]: !0 }));
						const { error: V } = await Rr.deleteListing(j);
						if (V) {
							console.error("Error deleting listing:", V),
								alert(`Eroare la ștergerea anunțului: ${V.message}`);
							return;
						}
						l((B) => B.filter((_) => _.id !== j)),
							alert("Anunțul a fost șters cu succes!");
					} catch (V) {
						console.error("Error deleting listing:", V),
							alert("A apărut o eroare la ștergerea anunțului.");
					} finally {
						z((V) => ({ ...V, [j]: !1 }));
					}
			},
			Ee = async (j, V) => {
				try {
					z((_) => ({ ..._, [j]: !0 }));
					const { error: B } = await Rr.toggleUserStatus(j, V);
					if (B) {
						console.error("Error toggling user status:", B),
							alert(
								`Eroare la ${V ? "suspendarea" : "activarea"} utilizatorului: ${
									B.message
								}`,
							);
						return;
					}
					u((_) =>
						_.map((k) => (k.user_id === j ? { ...k, suspended: V } : k)),
					),
						alert(
							`Utilizatorul a fost ${V ? "suspendat" : "activat"} cu succes!`,
						);
				} catch (B) {
					console.error("Error toggling user status:", B),
						alert(
							`A apărut o eroare la ${
								V ? "suspendarea" : "activarea"
							} utilizatorului.`,
						);
				} finally {
					z((B) => ({ ...B, [j]: !1 }));
				}
			},
			Se = async (j) => {
				if (
					confirm(
						"ATENȚIE: Această acțiune va șterge utilizatorul și TOATE anunțurile asociate din baza de date. Contul de autentificare va rămâne activ din motive de securitate. Ești sigur că vrei să continui?",
					)
				)
					try {
						z((_) => ({ ..._, [j]: !0 }));
						const { data: V, error: B } = await ae.rpc("delete_user_complete", {
							user_id_to_delete: j,
						});
						if (B) {
							console.error("Error deleting user:", B),
								alert(`Eroare la ștergerea utilizatorului: ${B.message}`),
								z((_) => ({ ..._, [j]: !1 }));
							return;
						}
						if (!V) {
							alert(
								"Eroare la ștergerea utilizatorului: Nu s-a găsit profilul utilizatorului",
							),
								z((_) => ({ ..._, [j]: !1 }));
							return;
						}
						u((_) => _.filter((k) => k.user_id !== j)),
							await ne(),
							alert(
								"Utilizatorul și toate anunțurile asociate au fost șterse cu succes din baza de date!",
							);
					} catch (V) {
						console.error("Error deleting user:", V),
							alert("A apărut o eroare la ștergerea utilizatorului.");
					} finally {
						z((V) => ({ ...V, [j]: !1 }));
					}
			},
			Pe = (j) => {
				window.open(`/anunt/${j}`, "_blank");
			},
			I = (j) => {
				ee(`/editeaza-anunt/${j}`);
			},
			ve = (j) => {
				ee(`/profil/${j}`);
			},
			re = a.filter((j) => {
				const V =
						!w ||
						j.title?.toLowerCase().includes(w.toLowerCase()) ||
						j.seller_name?.toLowerCase().includes(w.toLowerCase()) ||
						j.brand?.toLowerCase().includes(w.toLowerCase()) ||
						j.model?.toLowerCase().includes(w.toLowerCase()),
					B = D === "all" || j.status === D;
				return V && B;
			}),
			xe = c.filter(
				(j) =>
					!w ||
					j.name?.toLowerCase().includes(w.toLowerCase()) ||
					j.email?.toLowerCase().includes(w.toLowerCase()),
			);
		return h && !a.length && !c.length
			? e.jsx("div", {
					className: "min-h-screen bg-gray-50 flex items-center justify-center",
					children: e.jsxs("div", {
						className: "bg-white p-8 rounded-2xl shadow-lg text-center",
						children: [
							e.jsx("div", {
								className:
									"w-16 h-16 border-4 border-nexar-accent border-t-transparent rounded-full animate-spin mx-auto mb-4",
							}),
							e.jsx("p", {
								className: "text-gray-600",
								children: "Se încarcă datele...",
							}),
						],
					}),
			  })
			: N
			? e.jsx("div", {
					className:
						"min-h-screen bg-gray-50 flex items-center justify-center p-4",
					children: e.jsx(uc, { error: N, onRetry: X }),
			  })
			: p && !g
			? e.jsx("div", {
					className: "min-h-screen bg-gray-50 flex items-center justify-center",
					children: e.jsxs("div", {
						className:
							"bg-white p-8 rounded-2xl shadow-lg text-center max-w-md",
						children: [
							e.jsx(he, { className: "h-16 w-16 text-red-500 mx-auto mb-4" }),
							e.jsx("h2", {
								className: "text-2xl font-bold text-gray-900 mb-2",
								children: "Acces Restricționat",
							}),
							e.jsx("p", { className: "text-gray-600 mb-6", children: p }),
							e.jsx("button", {
								onClick: () => ee("/"),
								className:
									"bg-nexar-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors",
								children: "Înapoi la pagina principală",
							}),
						],
					}),
			  })
			: e.jsx("div", {
					className: "min-h-screen bg-gray-50 py-8",
					children: e.jsx("div", {
						className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
						children: e.jsxs("div", {
							className: "bg-white rounded-2xl shadow-lg overflow-hidden",
							children: [
								e.jsxs("div", {
									className: "p-6 bg-gray-900 text-white",
									children: [
										e.jsx("h1", {
											className: "text-2xl font-bold",
											children: "Panou de Administrare",
										}),
										e.jsx("p", {
											className: "text-gray-300",
											children:
												"Gestionează anunțurile și utilizatorii platformei",
										}),
									],
								}),
								e.jsxs("div", {
									className: "flex border-b border-gray-200",
									children: [
										e.jsxs("button", {
											onClick: () => ie("listings"),
											className: `flex items-center space-x-2 px-6 py-4 font-semibold transition-colors ${
												i === "listings"
													? "text-nexar-accent border-b-2 border-nexar-accent"
													: "text-gray-600 hover:text-gray-900"
											}`,
											children: [
												e.jsx(Bo, { className: "h-5 w-5" }),
												e.jsx("span", { children: "Anunțuri" }),
											],
										}),
										e.jsxs("button", {
											onClick: () => ie("users"),
											className: `flex items-center space-x-2 px-6 py-4 font-semibold transition-colors ${
												i === "users"
													? "text-nexar-accent border-b-2 border-nexar-accent"
													: "text-gray-600 hover:text-gray-900"
											}`,
											children: [
												e.jsx(Kn, { className: "h-5 w-5" }),
												e.jsx("span", { children: "Utilizatori" }),
											],
										}),
									],
								}),
								e.jsx("div", {
									className: "p-6 border-b border-gray-200",
									children: e.jsxs("div", {
										className: "flex flex-col sm:flex-row gap-4",
										children: [
											e.jsxs("div", {
												className: "relative flex-grow",
												children: [
													e.jsx("input", {
														type: "text",
														value: w,
														onChange: (j) => T(j.target.value),
														placeholder: `Caută ${
															i === "listings" ? "anunțuri" : "utilizatori"
														}...`,
														className:
															"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
													}),
													e.jsx($o, {
														className:
															"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5",
													}),
												],
											}),
											i === "listings" &&
												e.jsxs("select", {
													value: D,
													onChange: (j) => U(j.target.value),
													className:
														"border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
													children: [
														e.jsx("option", {
															value: "all",
															children: "Toate statusurile",
														}),
														e.jsx("option", {
															value: "active",
															children: "Active",
														}),
														e.jsx("option", {
															value: "pending",
															children: "În așteptare",
														}),
														e.jsx("option", {
															value: "rejected",
															children: "Respinse",
														}),
														e.jsx("option", {
															value: "sold",
															children: "Vândute",
														}),
													],
												}),
										],
									}),
								}),
								p &&
									e.jsxs("div", {
										className: "p-6 bg-red-50 border-b border-red-200",
										children: [
											e.jsxs("div", {
												className: "flex items-center space-x-3",
												children: [
													e.jsx(he, { className: "h-6 w-6 text-red-500" }),
													e.jsxs("div", {
														children: [
															e.jsx("h3", {
																className: "font-semibold text-red-800",
																children: "Eroare",
															}),
															e.jsx("p", {
																className: "text-red-600",
																children: p,
															}),
														],
													}),
												],
											}),
											e.jsx("div", {
												className: "mt-4 flex space-x-4",
												children: e.jsxs("button", {
													onClick: X,
													className:
														"flex items-center space-x-2 bg-nexar-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-nexar-gold transition-colors",
													children: [
														e.jsx(cr, { className: "h-4 w-4" }),
														e.jsx("span", { children: "Reîncearcă" }),
													],
												}),
											}),
										],
									}),
								i === "listings" &&
									e.jsx("div", {
										className: "overflow-x-auto",
										children:
											h && a.length === 0
												? e.jsxs("div", {
														className: "p-8 text-center",
														children: [
															e.jsx("div", {
																className:
																	"w-12 h-12 border-4 border-nexar-accent border-t-transparent rounded-full animate-spin mx-auto mb-4",
															}),
															e.jsx("p", {
																className: "text-gray-600",
																children: "Se încarcă anunțurile...",
															}),
														],
												  })
												: re.length === 0
												? e.jsxs("div", {
														className: "p-8 text-center",
														children: [
															e.jsx(Bo, {
																className:
																	"h-12 w-12 text-gray-400 mx-auto mb-4",
															}),
															e.jsx("h3", {
																className:
																	"text-lg font-semibold text-gray-900 mb-2",
																children: w
																	? "Nu am găsit anunțuri care să corespundă căutării"
																	: "Nu există anunțuri",
															}),
															w &&
																e.jsx("button", {
																	onClick: () => T(""),
																	className:
																		"text-nexar-accent hover:text-nexar-gold transition-colors",
																	children: "Șterge filtrele",
																}),
														],
												  })
												: e.jsxs("table", {
														className: "min-w-full divide-y divide-gray-200",
														children: [
															e.jsx("thead", {
																className: "bg-gray-50",
																children: e.jsxs("tr", {
																	children: [
																		e.jsx("th", {
																			className:
																				"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
																			children: "Anunț",
																		}),
																		e.jsx("th", {
																			className:
																				"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
																			children: "Vânzător",
																		}),
																		e.jsx("th", {
																			className:
																				"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
																			children: "Status",
																		}),
																		e.jsx("th", {
																			className:
																				"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
																			children: "Preț",
																		}),
																		e.jsx("th", {
																			className:
																				"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
																			children: "Data",
																		}),
																		e.jsx("th", {
																			className:
																				"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
																			children: "Acțiuni",
																		}),
																	],
																}),
															}),
															e.jsx("tbody", {
																className: "bg-white divide-y divide-gray-200",
																children: re.map((j) =>
																	e.jsxs(
																		"tr",
																		{
																			className: `hover:bg-gray-50 ${
																				j.status === "pending"
																					? "bg-yellow-50"
																					: ""
																			}`,
																			children: [
																				e.jsx("td", {
																					className:
																						"px-6 py-4 whitespace-nowrap",
																					children: e.jsxs("div", {
																						className: "flex items-center",
																						children: [
																							e.jsx("div", {
																								className:
																									"h-10 w-10 flex-shrink-0",
																								children: e.jsx("img", {
																									className:
																										"h-10 w-10 rounded-md object-cover",
																									src:
																										j.images && j.images[0]
																											? j.images[0]
																											: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
																									alt: j.title,
																									onError: (V) => {
																										const B = V.currentTarget;
																										B.src =
																											"https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg";
																									},
																								}),
																							}),
																							e.jsxs("div", {
																								className: "ml-4",
																								children: [
																									e.jsx("div", {
																										className:
																											"text-sm font-medium text-gray-900 truncate max-w-xs",
																										children: j.title,
																									}),
																									e.jsxs("div", {
																										className:
																											"text-sm text-gray-500",
																										children: [
																											j.brand,
																											" ",
																											j.model,
																										],
																									}),
																								],
																							}),
																						],
																					}),
																				}),
																				e.jsxs("td", {
																					className:
																						"px-6 py-4 whitespace-nowrap",
																					children: [
																						e.jsxs("div", {
																							className: "flex items-center",
																							children: [
																								e.jsx("div", {
																									className:
																										"text-sm font-medium text-gray-900",
																									children: j.seller_name,
																								}),
																								e.jsx("div", {
																									className: "ml-2",
																									children:
																										j.seller_type === "dealer"
																											? e.jsx("span", {
																													className:
																														"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",
																													children:
																														"Dealer Verificat",
																											  })
																											: e.jsx("span", {
																													className:
																														"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800",
																													children: "Privat",
																											  }),
																								}),
																							],
																						}),
																						e.jsx("div", {
																							className:
																								"text-sm text-gray-500",
																							children: j.location,
																						}),
																						j.seller_type === "dealer" &&
																							j.availability &&
																							e.jsx("div", {
																								className: "mt-1",
																								children: e.jsx("span", {
																									className: `px-2 py-1 inline-flex text-xs leading-4 font-medium rounded-full ${
																										j.availability === "pe_stoc"
																											? "bg-green-100 text-green-800"
																											: "bg-blue-100 text-blue-800"
																									}`,
																									children:
																										j.availability === "pe_stoc"
																											? e.jsxs(e.Fragment, {
																													children: [
																														e.jsx(Ei, {
																															className:
																																"h-3 w-3 mr-1",
																														}),
																														"Pe stoc",
																													],
																											  })
																											: e.jsxs(e.Fragment, {
																													children: [
																														e.jsx(Yt, {
																															className:
																																"h-3 w-3 mr-1",
																														}),
																														"La comandă",
																													],
																											  }),
																								}),
																							}),
																					],
																				}),
																				e.jsxs("td", {
																					className:
																						"px-6 py-4 whitespace-nowrap",
																					children: [
																						e.jsx("span", {
																							className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
																								j.status === "active"
																									? "bg-green-100 text-green-800"
																									: j.status === "sold"
																									? "bg-blue-100 text-blue-800"
																									: j.status === "pending"
																									? "bg-yellow-100 text-yellow-800"
																									: "bg-red-100 text-red-800"
																							}`,
																							children:
																								j.status === "active"
																									? "Activ"
																									: j.status === "sold"
																									? "Vândut"
																									: j.status === "pending"
																									? "În așteptare"
																									: "Respins",
																						}),
																						e.jsx("div", {
																							className: "mt-2",
																							children: e.jsxs("select", {
																								className:
																									"text-xs border border-gray-300 rounded px-2 py-1",
																								value: j.status,
																								onChange: (V) =>
																									Y(j.id, V.target.value),
																								disabled: A[j.id],
																								children: [
																									e.jsx("option", {
																										value: "active",
																										children: "Activ",
																									}),
																									e.jsx("option", {
																										value: "pending",
																										children: "În așteptare",
																									}),
																									e.jsx("option", {
																										value: "rejected",
																										children: "Respins",
																									}),
																									e.jsx("option", {
																										value: "sold",
																										children: "Vândut",
																									}),
																								],
																							}),
																						}),
																					],
																				}),
																				e.jsxs("td", {
																					className:
																						"px-6 py-4 whitespace-nowrap text-sm text-gray-900",
																					children: [
																						"€",
																						j.price.toLocaleString(),
																					],
																				}),
																				e.jsx("td", {
																					className:
																						"px-6 py-4 whitespace-nowrap text-sm text-gray-500",
																					children: new Date(
																						j.created_at,
																					).toLocaleDateString("ro-RO"),
																				}),
																				e.jsx("td", {
																					className:
																						"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
																					children: e.jsxs("div", {
																						className:
																							"flex items-center justify-end space-x-2",
																						children: [
																							e.jsx("button", {
																								onClick: () => Pe(j.id),
																								className:
																									"text-gray-600 hover:text-gray-900",
																								title: "Vezi anunțul",
																								children: e.jsx(or, {
																									className: "h-5 w-5",
																								}),
																							}),
																							e.jsx("button", {
																								onClick: () => I(j.id),
																								className:
																									"text-blue-600 hover:text-blue-800",
																								title: "Editează anunțul",
																								children: e.jsx(yi, {
																									className: "h-5 w-5",
																								}),
																							}),
																							e.jsx("button", {
																								onClick: () => J(j.id),
																								disabled: A[j.id],
																								className:
																									"text-red-600 hover:text-red-800 disabled:opacity-50",
																								title: "Șterge anunțul",
																								children: A[j.id]
																									? e.jsx("div", {
																											className:
																												"h-5 w-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin",
																									  })
																									: e.jsx(Vo, {
																											className: "h-5 w-5",
																									  }),
																							}),
																							e.jsx("div", {
																								className:
																									"border-l border-gray-300 h-5 mx-2",
																							}),
																							e.jsxs("div", {
																								className: "flex space-x-1",
																								children: [
																									j.status === "pending" &&
																										e.jsx("button", {
																											onClick: () =>
																												Y(j.id, "active"),
																											disabled: A[j.id],
																											className:
																												"bg-green-100 text-green-800 p-1.5 rounded-lg hover:bg-green-200 transition-colors",
																											title: "Aprobă anunțul",
																											children: A[j.id]
																												? e.jsx("div", {
																														className:
																															"h-5 w-5 border-2 border-green-600 border-t-transparent rounded-full animate-spin",
																												  })
																												: e.jsx(yt, {
																														className:
																															"h-5 w-5",
																												  }),
																										}),
																									j.status === "pending" &&
																										e.jsx("button", {
																											onClick: () =>
																												Y(j.id, "rejected"),
																											disabled: A[j.id],
																											className:
																												"bg-red-100 text-red-800 p-1.5 rounded-lg hover:bg-red-200 transition-colors",
																											title: "Respinge anunțul",
																											children: A[j.id]
																												? e.jsx("div", {
																														className:
																															"h-5 w-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin",
																												  })
																												: e.jsx(Ws, {
																														className:
																															"h-5 w-5",
																												  }),
																										}),
																									j.status === "rejected" &&
																										e.jsx("button", {
																											onClick: () =>
																												Y(j.id, "active"),
																											disabled: A[j.id],
																											className:
																												"bg-green-100 text-green-800 p-1.5 rounded-lg hover:bg-green-200 transition-colors",
																											title:
																												"Activează anunțul",
																											children: A[j.id]
																												? e.jsx("div", {
																														className:
																															"h-5 w-5 border-2 border-green-600 border-t-transparent rounded-full animate-spin",
																												  })
																												: e.jsx(yt, {
																														className:
																															"h-5 w-5",
																												  }),
																										}),
																									j.status === "active" &&
																										e.jsx("button", {
																											onClick: () =>
																												Y(j.id, "rejected"),
																											disabled: A[j.id],
																											className:
																												"bg-red-100 text-red-800 p-1.5 rounded-lg hover:bg-red-200 transition-colors",
																											title:
																												"Dezactivează anunțul",
																											children: A[j.id]
																												? e.jsx("div", {
																														className:
																															"h-5 w-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin",
																												  })
																												: e.jsx(Ws, {
																														className:
																															"h-5 w-5",
																												  }),
																										}),
																								],
																							}),
																						],
																					}),
																				}),
																			],
																		},
																		j.id,
																	),
																),
															}),
														],
												  }),
									}),
								i === "users" &&
									e.jsx("div", {
										className: "overflow-x-auto",
										children:
											h && c.length === 0
												? e.jsxs("div", {
														className: "p-8 text-center",
														children: [
															e.jsx("div", {
																className:
																	"w-12 h-12 border-4 border-nexar-accent border-t-transparent rounded-full animate-spin mx-auto mb-4",
															}),
															e.jsx("p", {
																className: "text-gray-600",
																children: "Se încarcă utilizatorii...",
															}),
														],
												  })
												: xe.length === 0
												? e.jsxs("div", {
														className: "p-8 text-center",
														children: [
															e.jsx(Kn, {
																className:
																	"h-12 w-12 text-gray-400 mx-auto mb-4",
															}),
															e.jsx("h3", {
																className:
																	"text-lg font-semibold text-gray-900 mb-2",
																children: w
																	? "Nu am găsit utilizatori care să corespundă căutării"
																	: "Nu există utilizatori",
															}),
															w &&
																e.jsx("button", {
																	onClick: () => T(""),
																	className:
																		"text-nexar-accent hover:text-nexar-gold transition-colors",
																	children: "Șterge filtrele",
																}),
														],
												  })
												: e.jsxs("table", {
														className: "min-w-full divide-y divide-gray-200",
														children: [
															e.jsx("thead", {
																className: "bg-gray-50",
																children: e.jsxs("tr", {
																	children: [
																		e.jsx("th", {
																			className:
																				"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
																			children: "Utilizator",
																		}),
																		e.jsx("th", {
																			className:
																				"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
																			children: "Email",
																		}),
																		e.jsx("th", {
																			className:
																				"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
																			children: "Tip",
																		}),
																		e.jsx("th", {
																			className:
																				"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
																			children: "Status",
																		}),
																		e.jsx("th", {
																			className:
																				"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
																			children: "Data înregistrării",
																		}),
																		e.jsx("th", {
																			className:
																				"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
																			children: "Acțiuni",
																		}),
																	],
																}),
															}),
															e.jsx("tbody", {
																className: "bg-white divide-y divide-gray-200",
																children: xe.map((j) =>
																	e.jsxs(
																		"tr",
																		{
																			className: "hover:bg-gray-50",
																			children: [
																				e.jsx("td", {
																					className:
																						"px-6 py-4 whitespace-nowrap",
																					children: e.jsxs("div", {
																						className: "flex items-center",
																						children: [
																							e.jsx("div", {
																								className:
																									"h-10 w-10 flex-shrink-0",
																								children: j.avatar_url
																									? e.jsx("img", {
																											className:
																												"h-10 w-10 rounded-full object-cover",
																											src: j.avatar_url,
																											alt: j.name,
																											onError: (V) => {
																												const B =
																													V.currentTarget;
																												B.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
																													j.name,
																												)}&background=random`;
																											},
																									  })
																									: e.jsx("div", {
																											className:
																												"h-10 w-10 rounded-full bg-nexar-accent flex items-center justify-center text-white font-semibold text-xs",
																											children: j.name
																												? j.name
																														.charAt(0)
																														.toUpperCase()
																												: "U",
																									  }),
																							}),
																							e.jsxs("div", {
																								className: "ml-4",
																								children: [
																									e.jsx("div", {
																										className:
																											"text-sm font-medium text-gray-900",
																										children: j.name,
																									}),
																									e.jsx("div", {
																										className:
																											"text-sm text-gray-500",
																										children:
																											j.location ||
																											"Locație nespecificată",
																									}),
																								],
																							}),
																							j.is_admin &&
																								e.jsx("div", {
																									className: "ml-2",
																									children: e.jsx("span", {
																										className:
																											"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800",
																										children: "Admin",
																									}),
																								}),
																						],
																					}),
																				}),
																				e.jsx("td", {
																					className:
																						"px-6 py-4 whitespace-nowrap text-sm text-gray-500",
																					children: j.email,
																				}),
																				e.jsx("td", {
																					className:
																						"px-6 py-4 whitespace-nowrap",
																					children:
																						j.seller_type === "dealer"
																							? e.jsxs("div", {
																									className:
																										"flex items-center",
																									children: [
																										e.jsx(Hs, {
																											className:
																												"h-4 w-4 text-green-600 mr-1",
																										}),
																										e.jsx("span", {
																											className:
																												"text-sm text-green-800 font-medium",
																											children:
																												"Dealer Verificat",
																										}),
																									],
																							  })
																							: e.jsxs("div", {
																									className:
																										"flex items-center",
																									children: [
																										e.jsx(Qn, {
																											className:
																												"h-4 w-4 text-gray-600 mr-1",
																										}),
																										e.jsx("span", {
																											className:
																												"text-sm text-gray-800",
																											children: "Individual",
																										}),
																									],
																							  }),
																				}),
																				e.jsx("td", {
																					className:
																						"px-6 py-4 whitespace-nowrap",
																					children: e.jsx("span", {
																						className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
																							j.suspended
																								? "bg-red-100 text-red-800"
																								: "bg-green-100 text-green-800"
																						}`,
																						children: j.suspended
																							? "Suspendat"
																							: "Activ",
																					}),
																				}),
																				e.jsx("td", {
																					className:
																						"px-6 py-4 whitespace-nowrap text-sm text-gray-500",
																					children: new Date(
																						j.created_at,
																					).toLocaleDateString("ro-RO"),
																				}),
																				e.jsx("td", {
																					className:
																						"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
																					children: e.jsxs("div", {
																						className:
																							"flex items-center justify-end space-x-2",
																						children: [
																							e.jsx("button", {
																								onClick: () => ve(j.id),
																								className:
																									"text-gray-600 hover:text-gray-900",
																								title: "Vezi profilul",
																								children: e.jsx(or, {
																									className: "h-5 w-5",
																								}),
																							}),
																							!j.is_admin &&
																								e.jsxs(e.Fragment, {
																									children: [
																										e.jsx("button", {
																											onClick: () =>
																												Ee(
																													j.user_id,
																													!j.suspended,
																												),
																											disabled: A[j.user_id],
																											className: `${
																												j.suspended
																													? "text-green-600 hover:text-green-800"
																													: "text-red-600 hover:text-red-800"
																											} disabled:opacity-50`,
																											title: j.suspended
																												? "Activează utilizatorul"
																												: "Suspendă utilizatorul",
																											children: A[j.user_id]
																												? e.jsx("div", {
																														className:
																															"h-5 w-5 border-2 border-current border-t-transparent rounded-full animate-spin",
																												  })
																												: j.suspended
																												? e.jsx(pm, {
																														className:
																															"h-5 w-5",
																												  })
																												: e.jsx(xg, {
																														className:
																															"h-5 w-5",
																												  }),
																										}),
																										e.jsx("button", {
																											onClick: () =>
																												Se(j.user_id),
																											disabled:
																												A[j.user_id] ||
																												j.is_admin,
																											className:
																												"text-red-600 hover:text-red-800 disabled:opacity-50",
																											title: j.is_admin
																												? "Nu poți șterge un administrator"
																												: "Șterge utilizatorul",
																											children: A[j.user_id]
																												? e.jsx("div", {
																														className:
																															"h-5 w-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin",
																												  })
																												: e.jsx(Vo, {
																														className:
																															"h-5 w-5",
																												  }),
																										}),
																									],
																								}),
																						],
																					}),
																				}),
																			],
																		},
																		j.user_id,
																	),
																),
															}),
														],
												  }),
									}),
								e.jsx("div", {
									className: "p-6 bg-gray-50 border-t border-gray-200",
									children: e.jsxs("div", {
										className: "flex justify-between items-center",
										children: [
											e.jsx("div", {
												className: "text-sm text-gray-600",
												children:
													i === "listings"
														? `${re.length} anunțuri`
														: `${xe.length} utilizatori`,
											}),
											e.jsx("div", {
												className: "flex space-x-3",
												children: e.jsxs("button", {
													onClick: () => {
														i === "listings" ? ne() : le();
													},
													className:
														"flex items-center space-x-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors",
													children: [
														e.jsx(cr, { className: "h-4 w-4" }),
														e.jsx("span", { children: "Reîmprospătează" }),
													],
												}),
											}),
										],
									}),
								}),
							],
						}),
					}),
			  });
	},
	Fy = () => {
		const [i, s] = S.useState(!0),
			[a, l] = S.useState(!1),
			[c, u] = S.useState(!1),
			[h, f] = S.useState(!1),
			[p, y] = S.useState(!1),
			[g, v] = S.useState(""),
			[w, T] = S.useState(""),
			D = Nt(),
			U = Jt(),
			A = S.useRef(null),
			[z, ee] = S.useState({
				name: "",
				email: "",
				password: "",
				confirmPassword: "",
				phone: "",
				location: "",
				sellerType: "individual",
				agreeToTerms: !1,
			}),
			[N, G] = S.useState({}),
			[X, ne] = S.useState(!1),
			[le, ie] = S.useState(!1),
			[Y, J] = S.useState([]);
		S.useEffect(() => {
			(async () => {
				const {
					data: { user: C },
				} = await ae.auth.getUser();
				C && D("/");
			})();
			const $ = U.hash;
			($.includes("#access_token=") || $.includes("type=recovery")) && Ee();
		}, [D, U]);
		const Ee = async () => {
			try {
				const { data: R, error: $ } = await ae.auth.getSession();
				if ($) {
					console.error("Error handling auth redirect:", $),
						v(
							"A apărut o eroare la procesarea link-ului. Te rugăm să încerci din nou.",
						);
					return;
				}
				R?.session &&
					(U.hash.includes("type=recovery")
						? (u(!0),
						  s(!1),
						  l(!1),
						  T("Poți seta acum o nouă parolă pentru contul tău."))
						: D("/auth/confirm"));
			} catch (R) {
				console.error("Error in handleAuthRedirect:", R),
					v(
						"A apărut o eroare la procesarea link-ului. Te rugăm să încerci din nou.",
					);
			}
		};
		S.useEffect(() => {
			w &&
				A.current &&
				A.current.scrollIntoView({ behavior: "smooth", block: "center" });
		}, [w]);
		const Se = (R) =>
				R.trim()
					? R.trim().length < 2
						? "Numele trebuie să aibă cel puțin 2 caractere"
						: R.trim().length > 50
						? "Numele nu poate depăși 50 de caractere"
						: /^[a-zA-ZăâîșțĂÂÎȘȚ\s\-\.]+$/.test(R.trim())
						? ""
						: "Numele poate conține doar litere, spații, cratimă și punct"
					: "Numele este obligatoriu",
			Pe = (R) => {
				if (!R.trim()) return "Email-ul este obligatoriu";
				if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(R.trim()))
					return "Email-ul nu este valid";
				const C = R.trim().toLowerCase();
				if (C.startsWith(".") || C.endsWith("."))
					return "Email-ul nu poate începe sau se termina cu punct";
				if (C.includes(".."))
					return "Email-ul nu poate conține puncte consecutive";
				const F = C.split("@");
				return F.length !== 2 || F[0].length === 0 || F[1].length === 0
					? "Email-ul nu este valid"
					: "";
			},
			I = (R) => {
				if (!R.trim()) return "Numărul de telefon este obligatoriu";
				const $ = R.replace(/[\s\-\(\)]/g, "");
				if (!/^(\+4|0)[0-9]{9}$/.test($))
					return "Numărul de telefon nu este valid (ex: 0790454647 sau +40790454647)";
				const F = ["072", "073", "074", "075", "076", "077", "078", "079"];
				let Q = !1;
				if ($.startsWith("+4")) {
					const se = $.substring(2);
					Q = F.some((be) => se.startsWith(be.substring(1)));
				} else $.startsWith("0") && (Q = F.some((se) => $.startsWith(se)));
				return Q
					? ""
					: "Prefixul nu este valid pentru România (ex: 072, 073, 074, 075, 076, 077, 078, 079)";
			},
			ve = (R) =>
				R.trim()
					? Bt.some((C) => C.toLowerCase() === R.trim().toLowerCase())
						? ""
						: "Te rugăm să selectezi un oraș din lista disponibilă"
					: "Locația este obligatorie",
			re = (R) =>
				R
					? R.length < 8
						? "Parola trebuie să aibă cel puțin 8 caractere"
						: /(?=.*[a-z])/.test(R)
						? /(?=.*[A-Z])/.test(R)
							? /(?=.*\d)/.test(R)
								? ""
								: "Parola trebuie să conțină cel puțin o cifră"
							: "Parola trebuie să conțină cel puțin o literă mare"
						: "Parola trebuie să conțină cel puțin o literă mică"
					: "Parola este obligatorie",
			xe = (R) => {
				if ((B("location", R), R.length > 0)) {
					const $ = Bt.filter((C) =>
						C.toLowerCase().includes(R.toLowerCase()),
					).slice(0, 10);
					J($), ie(!0);
				} else J([]), ie(!1);
			},
			j = (R) => {
				B("location", R), ie(!1), J([]);
			},
			V = async () => {
				const R = {};
				if (c) {
					const $ = re(z.password);
					$ && (R.password = $),
						z.password !== z.confirmPassword &&
							(R.confirmPassword = "Parolele nu coincid");
				} else if (a) {
					const $ = Pe(z.email);
					$ && (R.email = $);
				} else if (i) {
					const $ = Pe(z.email);
					$ && (R.email = $),
						z.password || (R.password = "Parola este obligatorie");
				} else {
					const $ = Se(z.name);
					$ && (R.name = $);
					const C = Pe(z.email);
					C && (R.email = C);
					const F = I(z.phone);
					F && (R.phone = F);
					const Q = ve(z.location);
					Q && (R.location = Q);
					const se = re(z.password);
					se && (R.password = se),
						z.password !== z.confirmPassword &&
							(R.confirmPassword = "Parolele nu coincid"),
						z.agreeToTerms ||
							(R.agreeToTerms = "Trebuie să accepți termenii și condițiile");
				}
				return G(R), Object.keys(R).length === 0;
			},
			B = (R, $) => {
				ee((C) => ({ ...C, [R]: $ })),
					N[R] && G((C) => ({ ...C, [R]: "" })),
					g && v("");
			},
			_ = async (R) => {
				if ((R.preventDefault(), c)) {
					await q();
					return;
				}
				if (a) {
					await k();
					return;
				}
				if (
					(console.log("🚀 Starting authentication process..."),
					console.log("📧 Email being used:", z.email.trim()),
					!(await V()))
				) {
					console.log("❌ Form validation failed:", N);
					return;
				}
				y(!0), v(""), T("");
				try {
					if (i) {
						console.log("🔐 Attempting login...");
						const { data: C, error: F } = await $s.signIn(
							z.email.trim(),
							z.password,
						);
						if (F) {
							console.error("❌ Login error:", F);
							const Q = F.message;
							Q.includes("Invalid login credentials")
								? v("Email sau parolă incorectă")
								: Q.includes("Email not confirmed")
								? v("Te rugăm să-ți confirmi email-ul înainte de a te conecta")
								: Q.includes("Too many requests")
								? v("Prea multe încercări. Te rugăm să aștepți câteva minute")
								: v(Q);
						} else
							C?.user &&
								(console.log("✅ Login successful for:", C.user.email), D("/"));
					} else {
						console.log("📝 Attempting registration...");
						const { data: C, error: F } = await $s.signUp(
							z.email.trim(),
							z.password,
							{
								name: z.name.trim(),
								phone: z.phone.replace(/[\s\-\(\)]/g, ""),
								location: z.location.trim(),
								sellerType: z.sellerType,
							},
						);
						if (F) {
							console.error("❌ Registration error:", F);
							const Q = F.message;
							Q.includes("already registered") ||
							Q.includes("User already registered")
								? v(
										"Acest email este deja înregistrat. Încearcă să te conectezi în schimb.",
								  )
								: Q.includes("Password should be at least")
								? v("Parola trebuie să aibă cel puțin 6 caractere")
								: Q.includes("Unable to validate email") ||
								  Q.includes("invalid")
								? v(
										"Email-ul introdus nu este valid. Te rugăm să verifici formatul.",
								  )
								: Q.includes("signup_disabled")
								? v(
										"Înregistrarea este temporar dezactivată. Te rugăm să încerci mai târziu.",
								  )
								: v(`Eroare la înregistrare: ${Q}`);
						} else
							C?.user &&
								(console.log("✅ Registration successful for:", C.user.email),
								C.session
									? (T("Cont creat cu succes! Ești acum conectat."),
									  setTimeout(() => {
											D("/");
									  }, 288888e3))
									: (T(
											"Cont creat cu succes! Verifică-ți email-ul pentru a confirma contul înainte de a te conecta.",
									  ),
									  ee({
											name: "",
											email: "",
											password: "",
											confirmPassword: "",
											phone: "",
											location: "",
											sellerType: "individual",
											agreeToTerms: !1,
									  })));
					}
				} catch (C) {
					console.error("💥 Authentication error:", C),
						v("A apărut o eroare neașteptată. Te rugăm să încerci din nou.");
				} finally {
					y(!1);
				}
			},
			k = async () => {
				if (Pe(z.email)) {
					v("Introdu o adresă de email validă pentru a reseta parola");
					return;
				}
				y(!0);
				try {
					const { error: $ } = await $s.resetPassword(z.email.trim());
					if ($) {
						const C = $.message;
						v(C);
					} else
						T(
							"Un email pentru resetarea parolei a fost trimis. Verifică-ți căsuța de email.",
						);
				} catch ($) {
					console.error("Password reset error:", $),
						v("A apărut o eroare. Te rugăm să încerci din nou.");
				} finally {
					y(!1);
				}
			},
			q = async () => {
				const R = re(z.password);
				if (R) {
					G({ password: R });
					return;
				}
				if (z.password !== z.confirmPassword) {
					G({ confirmPassword: "Parolele nu coincid" });
					return;
				}
				y(!0);
				try {
					const { error: $ } = await $s.updatePassword(z.password);
					if ($) {
						console.error("Error setting new password:", $);
						const C = $.message;
						v(`Eroare la setarea noii parole: ${C}`);
					} else
						T(
							"Parola a fost actualizată cu succes! Te poți conecta acum cu noile credențiale.",
						),
							setTimeout(() => {
								u(!1), s(!0), ee({ ...z, password: "", confirmPassword: "" });
							}, 3e3);
				} catch ($) {
					console.error("Error setting new password:", $),
						v(
							"A apărut o eroare la setarea noii parole. Te rugăm să încerci din nou.",
						);
				} finally {
					y(!1);
				}
			};
		return e.jsx("div", {
			className:
				"min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8",
			children: e.jsx("div", {
				className: "max-w-md w-full space-y-6 sm:space-y-8",
				children: e.jsxs("div", {
					className: "bg-white rounded-2xl shadow-2xl p-6 sm:p-8",
					children: [
						e.jsxs("div", {
							className: "text-center mb-6 sm:mb-8",
							children: [
								e.jsxs("div", {
									className:
										"flex items-center justify-center space-x-2 sm:space-x-3 mb-6",
									children: [
										e.jsx("img", {
											loading: "lazy",
											src: "/Nexar - logo_black & red.png",
											alt: "Nexar Logo",
											className: "h-20 sm:h-24 md:h-28 w-auto",
											onError: (R) => {
												const $ = R.currentTarget;
												if ($.src.includes("Nexar - logo_black & red.png"))
													$.src = "/nexar-logo.png";
												else if ($.src.includes("nexar-logo.png"))
													$.src = "/image.png";
												else {
													$.style.display = "none";
													const C = $.nextElementSibling;
													C && (C.style.display = "block");
												}
											},
										}),
										e.jsx("div", {
											className:
												"hidden text-4xl sm:text-5xl font-bold text-nexar-accent",
											children: "NEXAR",
										}),
									],
								}),
								e.jsx("h2", {
									className: "text-xl sm:text-2xl font-bold text-gray-900",
									children: c
										? "Setează o nouă parolă"
										: a
										? "Resetare Parolă"
										: i
										? "Conectează-te"
										: "Creează Cont",
								}),
								e.jsx("p", {
									className: "text-gray-600 mt-2 text-sm sm:text-base",
									children: c
										? "Introdu noua parolă pentru contul tău"
										: a
										? "Introdu adresa de email pentru a primi un link de resetare a parolei"
										: i
										? "Bun venit înapoi! Conectează-te la contul tău."
										: "Alătură-te comunității și începe să vinzi sau să cumperi motociclete.",
								}),
							],
						}),
						w &&
							e.jsx("div", {
								ref: A,
								className:
									"mb-6 bg-green-50 border border-green-200 rounded-lg p-4",
								children: e.jsxs("p", {
									className: "text-green-700 flex items-center",
									children: [e.jsx(yt, { className: "h-5 w-5 mr-2" }), w],
								}),
							}),
						g &&
							e.jsx("div", {
								className:
									"mb-6 bg-red-50 border border-red-200 rounded-lg p-4",
								children: e.jsxs("p", {
									className: "text-red-700 flex items-center",
									children: [e.jsx(he, { className: "h-5 w-5 mr-2" }), g],
								}),
							}),
						!a &&
							!c &&
							e.jsxs("div", {
								className: "flex bg-gray-50 rounded-xl p-1 mb-6 sm:mb-8",
								children: [
									e.jsx("button", {
										onClick: () => {
											s(!0), l(!1), G({}), v(""), T("");
										},
										className: `flex-1 py-2.5 sm:py-3 px-4 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
											i
												? "bg-white text-gray-900 shadow-sm"
												: "text-gray-600 hover:text-gray-900"
										}`,
										children: "Conectare",
									}),
									e.jsx("button", {
										onClick: () => {
											s(!1), l(!1), G({}), v(""), T("");
										},
										className: `flex-1 py-2.5 sm:py-3 px-4 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
											i
												? "text-gray-600 hover:text-gray-900"
												: "bg-white text-gray-900 shadow-sm"
										}`,
										children: "Înregistrare",
									}),
								],
							}),
						e.jsxs("form", {
							onSubmit: _,
							className: "space-y-4 sm:space-y-6",
							children: [
								!i &&
									!a &&
									!c &&
									e.jsxs("div", {
										children: [
											e.jsx("label", {
												className:
													"block text-sm font-medium text-gray-700 mb-2",
												children: "Nume complet *",
											}),
											e.jsxs("div", {
												className: "relative",
												children: [
													e.jsx("input", {
														type: "text",
														value: z.name,
														onChange: (R) => B("name", R.target.value),
														className: `w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 border rounded-xl focus:ring-2 focus:ring-nexar-accent focus:border-transparent transition-colors text-sm sm:text-base ${
															N.name ? "border-red-500" : "border-gray-300"
														}`,
														placeholder: "Bogdan Popescu",
														required: !i && !a && !c,
													}),
													e.jsx(Qn, {
														className:
															"absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5",
													}),
												],
											}),
											N.name &&
												e.jsxs("p", {
													className:
														"mt-1 text-sm text-red-600 flex items-center",
													children: [
														e.jsx(he, { className: "h-4 w-4 mr-1" }),
														N.name,
													],
												}),
										],
									}),
								!c &&
									e.jsxs("div", {
										children: [
											e.jsx("label", {
												className:
													"block text-sm font-medium text-gray-700 mb-2",
												children: "Email *",
											}),
											e.jsxs("div", {
												className: "relative",
												children: [
													e.jsx("input", {
														type: "email",
														value: z.email,
														onChange: (R) => B("email", R.target.value),
														className: `w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 border rounded-xl focus:ring-2 focus:ring-nexar-accent focus:border-transparent transition-colors text-sm sm:text-base ${
															N.email ? "border-red-500" : "border-gray-300"
														}`,
														placeholder: "bogdan@exemplu.com",
														required: !0,
													}),
													e.jsx(Ys, {
														className:
															"absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5",
													}),
													X &&
														e.jsx("div", {
															className:
																"absolute right-3 top-1/2 transform -translate-y-1/2",
															children: e.jsx("div", {
																className:
																	"w-4 h-4 border-2 border-nexar-accent border-t-transparent rounded-full animate-spin",
															}),
														}),
												],
											}),
											N.email &&
												e.jsxs("p", {
													className:
														"mt-1 text-sm text-red-600 flex items-center",
													children: [
														e.jsx(he, { className: "h-4 w-4 mr-1" }),
														N.email,
													],
												}),
										],
									}),
								!i &&
									!a &&
									!c &&
									e.jsxs(e.Fragment, {
										children: [
											e.jsxs("div", {
												children: [
													e.jsx("label", {
														className:
															"block text-sm font-medium text-gray-700 mb-2",
														children: "Telefon *",
													}),
													e.jsxs("div", {
														className: "relative",
														children: [
															e.jsx("input", {
																type: "tel",
																value: z.phone,
																onChange: (R) => B("phone", R.target.value),
																className: `w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 border rounded-xl focus:ring-2 focus:ring-nexar-accent focus:border-transparent transition-colors text-sm sm:text-base ${
																	N.phone ? "border-red-500" : "border-gray-300"
																}`,
																placeholder: "0790 45 46 47",
																required: !i && !a && !c,
															}),
															e.jsx(ss, {
																className:
																	"absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5",
															}),
														],
													}),
													N.phone &&
														e.jsxs("p", {
															className:
																"mt-1 text-sm text-red-600 flex items-center",
															children: [
																e.jsx(he, { className: "h-4 w-4 mr-1" }),
																N.phone,
															],
														}),
												],
											}),
											e.jsxs("div", {
												className: "relative",
												children: [
													e.jsx("label", {
														className:
															"block text-sm font-medium text-gray-700 mb-2",
														children: "Locația *",
													}),
													e.jsxs("div", {
														className: "relative",
														children: [
															e.jsx("input", {
																type: "text",
																value: z.location,
																onChange: (R) => xe(R.target.value),
																onFocus: () => {
																	if (z.location.length > 0) {
																		const R = Bt.filter(($) =>
																			$.toLowerCase().includes(
																				z.location.toLowerCase(),
																			),
																		).slice(0, 10);
																		J(R), ie(!0);
																	}
																},
																onBlur: () => {
																	setTimeout(() => ie(!1), 200);
																},
																className: `w-full pl-10 sm:pl-12 pr-10 py-2.5 sm:py-3 border rounded-xl focus:ring-2 focus:ring-nexar-accent focus:border-transparent transition-colors text-sm sm:text-base ${
																	N.location
																		? "border-red-500"
																		: "border-gray-300"
																}`,
																placeholder: "Începe să scrii orașul...",
																required: !i && !a && !c,
																autoComplete: "off",
															}),
															e.jsx(lr, {
																className:
																	"absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5",
															}),
															e.jsx(mm, {
																className:
																	"absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5",
															}),
															le &&
																Y.length > 0 &&
																e.jsx("div", {
																	className:
																		"absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
																	children: Y.map((R, $) =>
																		e.jsx(
																			"button",
																			{
																				type: "button",
																				onClick: () => j(R),
																				className:
																					"w-full text-left px-4 py-2 hover:bg-nexar-accent hover:text-white transition-colors text-sm border-b border-gray-100 last:border-b-0",
																				children: R,
																			},
																			$,
																		),
																	),
																}),
														],
													}),
													N.location &&
														e.jsxs("p", {
															className:
																"mt-1 text-sm text-red-600 flex items-center",
															children: [
																e.jsx(he, { className: "h-4 w-4 mr-1" }),
																N.location,
															],
														}),
												],
											}),
											e.jsxs("div", {
												children: [
													e.jsx("label", {
														className:
															"block text-sm font-medium text-gray-700 mb-2",
														children: "Tip Vânzător *",
													}),
													e.jsxs("div", {
														className: "relative",
														children: [
															e.jsxs("select", {
																value: z.sellerType,
																onChange: (R) =>
																	B("sellerType", R.target.value),
																className:
																	"w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nexar-accent focus:border-transparent transition-colors appearance-none text-sm sm:text-base",
																required: !i && !a && !c,
																children: [
																	e.jsx("option", {
																		value: "individual",
																		children: "Vânzător Privat",
																	}),
																	e.jsx("option", {
																		value: "dealer",
																		children: "Dealer Autorizat",
																	}),
																],
															}),
															e.jsx(Hs, {
																className:
																	"absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5",
															}),
														],
													}),
												],
											}),
										],
									}),
								!a &&
									e.jsxs("div", {
										children: [
											e.jsx("label", {
												className:
													"block text-sm font-medium text-gray-700 mb-2",
												children: "Parolă *",
											}),
											e.jsxs("div", {
												className: "relative",
												children: [
													e.jsx("input", {
														type: h ? "text" : "password",
														value: z.password,
														onChange: (R) => B("password", R.target.value),
														className: `w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-2.5 sm:py-3 border rounded-xl focus:ring-2 focus:ring-nexar-accent focus:border-transparent transition-colors text-sm sm:text-base ${
															N.password ? "border-red-500" : "border-gray-300"
														}`,
														placeholder: "••••••••",
														required: !0,
													}),
													e.jsx(Ir, {
														className:
															"absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5",
													}),
													e.jsx("button", {
														type: "button",
														onClick: () => f(!h),
														className:
															"absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",
														children: h
															? e.jsx(Uo, {
																	className: "h-4 w-4 sm:h-5 sm:w-5",
															  })
															: e.jsx(or, {
																	className: "h-4 w-4 sm:h-5 sm:w-5",
															  }),
													}),
												],
											}),
											N.password &&
												e.jsxs("p", {
													className:
														"mt-1 text-sm text-red-600 flex items-center",
													children: [
														e.jsx(he, { className: "h-4 w-4 mr-1" }),
														N.password,
													],
												}),
										],
									}),
								((!i && !a) || c) &&
									e.jsxs("div", {
										children: [
											e.jsx("label", {
												className:
													"block text-sm font-medium text-gray-700 mb-2",
												children: "Confirmă parola *",
											}),
											e.jsxs("div", {
												className: "relative",
												children: [
													e.jsx("input", {
														type: "password",
														value: z.confirmPassword,
														onChange: (R) =>
															B("confirmPassword", R.target.value),
														className: `w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 border rounded-xl focus:ring-2 focus:ring-nexar-accent focus:border-transparent transition-colors text-sm sm:text-base ${
															N.confirmPassword
																? "border-red-500"
																: "border-gray-300"
														}`,
														placeholder: "••••••••",
														required: (!i && !a) || c,
													}),
													e.jsx(Ir, {
														className:
															"absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5",
													}),
												],
											}),
											N.confirmPassword &&
												e.jsxs("p", {
													className:
														"mt-1 text-sm text-red-600 flex items-center",
													children: [
														e.jsx(he, { className: "h-4 w-4 mr-1" }),
														N.confirmPassword,
													],
												}),
										],
									}),
								i &&
									!a &&
									!c &&
									e.jsxs("div", {
										className: "flex items-center justify-between",
										children: [
											e.jsxs("label", {
												className: "flex items-center",
												children: [
													e.jsx("input", {
														type: "checkbox",
														className:
															"rounded border-gray-300 text-nexar-accent focus:ring-nexar-accent",
													}),
													e.jsx("span", {
														className: "ml-2 text-sm text-gray-600",
														children: "Ține-mă conectat",
													}),
												],
											}),
											e.jsx("button", {
												type: "button",
												onClick: () => {
													l(!0), v(""), T("");
												},
												className:
													"text-sm text-nexar-accent hover:text-nexar-gold transition-colors",
												children: "Ai uitat parola?",
											}),
										],
									}),
								!i &&
									!a &&
									!c &&
									e.jsxs("div", {
										className: "flex items-start space-x-3",
										children: [
											e.jsx("input", {
												type: "checkbox",
												checked: z.agreeToTerms,
												onChange: (R) => B("agreeToTerms", R.target.checked),
												className:
													"mt-1 rounded border-gray-300 text-nexar-accent focus:ring-nexar-accent",
												required: !i && !a && !c,
											}),
											e.jsxs("span", {
												className: "text-sm text-gray-600",
												children: [
													"Sunt de acord cu",
													" ",
													e.jsx(ke, {
														to: "/termeni",
														target: "_blank",
														className:
															"text-nexar-accent hover:text-nexar-gold transition-colors",
														children: "Termenii și Condițiile",
													}),
													" ",
													"și",
													" ",
													e.jsx(ke, {
														to: "/confidentialitate",
														target: "_blank",
														className:
															"text-nexar-accent hover:text-nexar-gold transition-colors",
														children: "Politica de Confidențialitate",
													}),
												],
											}),
											N.agreeToTerms &&
												e.jsxs("p", {
													className: "text-sm text-red-600 flex items-center",
													children: [
														e.jsx(he, { className: "h-4 w-4 mr-1" }),
														N.agreeToTerms,
													],
												}),
										],
									}),
								e.jsx("button", {
									type: "submit",
									disabled: p || X,
									className:
										"w-full bg-nexar-accent text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-nexar-gold transition-colors transform hover:scale-105 duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base",
									children: p
										? "Se procesează..."
										: c
										? "Setează noua parolă"
										: a
										? "Trimite link de resetare"
										: i
										? "Conectează-te"
										: "Creează Cont",
								}),
							],
						}),
						e.jsx("div", {
							className: "mt-6 sm:mt-8 text-center",
							children:
								a || c
									? e.jsxs("p", {
											className: "text-sm text-gray-600",
											children: [
												"Ți-ai amintit parola?",
												" ",
												e.jsx("button", {
													onClick: () => {
														l(!1), u(!1), s(!0), v(""), T("");
													},
													className:
														"text-nexar-accent hover:text-nexar-gold font-semibold transition-colors",
													children: "Înapoi la conectare",
												}),
											],
									  })
									: e.jsxs("p", {
											className: "text-sm text-gray-600",
											children: [
												i ? "Nu ai cont?" : "Ai deja cont?",
												" ",
												e.jsx("button", {
													onClick: () => {
														s(!i), G({}), v(""), T("");
													},
													className:
														"text-nexar-accent hover:text-nexar-gold font-semibold transition-colors",
													children: i
														? "Înregistrează-te aici"
														: "Conectează-te aici",
												}),
											],
									  }),
						}),
					],
				}),
			}),
		});
	},
	By = () => (
		S.useEffect(() => {
			window.scrollTo(0, 0);
		}, []),
		e.jsx("div", {
			className: "min-h-screen bg-gray-50 py-8",
			children: e.jsx("div", {
				className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
				children: e.jsxs("div", {
					className: "bg-white rounded-2xl shadow-lg p-8",
					children: [
						e.jsxs("div", {
							className: "text-center mb-8",
							children: [
								e.jsx("div", {
									className:
										"w-16 h-16 bg-nexar-accent/10 rounded-full flex items-center justify-center mx-auto mb-4",
									children: e.jsx(og, {
										className: "h-8 w-8 text-nexar-accent",
									}),
								}),
								e.jsx("h1", {
									className: "text-3xl font-bold text-gray-900 mb-4",
									children: "Termeni și Condiții",
								}),
								e.jsx("p", {
									className: "text-gray-600",
									children: "Ultima actualizare: 18 Decembrie 2024",
								}),
							],
						}),
						e.jsxs("div", {
							className: "prose max-w-none",
							children: [
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsxs("div", {
											className: "flex items-center space-x-3 mb-4",
											children: [
												e.jsx(Gn, { className: "h-6 w-6 text-nexar-accent" }),
												e.jsx("h2", {
													className: "text-2xl font-bold text-gray-900",
													children: "1. Introducere",
												}),
											],
										}),
										e.jsx("p", {
											className: "text-gray-700 mb-4",
											children:
												'Bine ați venit pe Nexar.ro! Acești Termeni și Condiții ("Termeni") reglementează utilizarea platformei noastre de marketplace pentru motociclete. Prin accesarea și utilizarea serviciilor noastre, acceptați să respectați acești termeni.',
										}),
										e.jsx("div", {
											className:
												"bg-blue-50 border border-blue-200 rounded-lg p-4",
											children: e.jsxs("p", {
												className: "text-blue-800 text-sm",
												children: [
													e.jsx("strong", { children: "Important:" }),
													" Vă rugăm să citiți cu atenție acești termeni înainte de a utiliza platforma. Dacă nu sunteți de acord cu oricare dintre acești termeni, vă rugăm să nu utilizați serviciile noastre.",
												],
											}),
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsxs("div", {
											className: "flex items-center space-x-3 mb-4",
											children: [
												e.jsx(Kn, { className: "h-6 w-6 text-nexar-accent" }),
												e.jsx("h2", {
													className: "text-2xl font-bold text-gray-900",
													children: "2. Definiții",
												}),
											],
										}),
										e.jsxs("ul", {
											className: "space-y-3 text-gray-700",
											children: [
												e.jsxs("li", {
													children: [
														e.jsx("strong", { children: '"Platforma"' }),
														" - site-ul web Nexar.ro și toate serviciile asociate",
													],
												}),
												e.jsxs("li", {
													children: [
														e.jsx("strong", { children: '"Utilizator"' }),
														" - orice persoană care accesează sau utilizează platforma",
													],
												}),
												e.jsxs("li", {
													children: [
														e.jsx("strong", { children: '"Vânzător"' }),
														" - utilizator care publică anunțuri pentru vânzarea de motociclete",
													],
												}),
												e.jsxs("li", {
													children: [
														e.jsx("strong", { children: '"Cumpărător"' }),
														" - utilizator interesat să achiziționeze motociclete",
													],
												}),
												e.jsxs("li", {
													children: [
														e.jsx("strong", { children: '"Anunț"' }),
														" - listarea unei motociclete pentru vânzare pe platformă",
													],
												}),
												e.jsxs("li", {
													children: [
														e.jsx("strong", { children: '"Conținut"' }),
														" - toate informațiile, textele, imaginile și datele publicate pe platformă",
													],
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsxs("div", {
											className: "flex items-center space-x-3 mb-4",
											children: [
												e.jsx(yt, { className: "h-6 w-6 text-nexar-accent" }),
												e.jsx("h2", {
													className: "text-2xl font-bold text-gray-900",
													children: "3. Eligibilitate și Înregistrare",
												}),
											],
										}),
										e.jsxs("div", {
											className: "space-y-4 text-gray-700",
											children: [
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "3.1 Vârsta Minimă",
												}),
												e.jsx("p", {
													children:
														"Pentru a utiliza platforma, trebuie să aveți cel puțin 18 ani sau să aveți acordul părinților/tutorilor legali.",
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "3.2 Informații de Cont",
												}),
												e.jsx("p", {
													children:
														"La înregistrare, vă angajați să furnizați informații corecte, complete și actualizate. Sunteți responsabil pentru menținerea confidențialității contului dvs.",
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "3.3 Un Cont per Utilizator",
												}),
												e.jsx("p", {
													children:
														"Fiecare utilizator poate avea un singur cont activ. Conturile multiple sunt interzise și pot fi suspendate.",
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsxs("div", {
											className: "flex items-center space-x-3 mb-4",
											children: [
												e.jsx(ug, { className: "h-6 w-6 text-nexar-accent" }),
												e.jsx("h2", {
													className: "text-2xl font-bold text-gray-900",
													children: "4. Utilizarea Platformei",
												}),
											],
										}),
										e.jsxs("div", {
											className: "space-y-4 text-gray-700",
											children: [
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "4.1 Utilizare Permisă",
												}),
												e.jsxs("ul", {
													className: "list-disc list-inside space-y-2",
													children: [
														e.jsx("li", {
															children:
																"Publicarea de anunțuri legitime pentru motociclete",
														}),
														e.jsx("li", {
															children: "Căutarea și contactarea vânzătorilor",
														}),
														e.jsx("li", {
															children:
																"Utilizarea funcțiilor de mesagerie pentru comunicare",
														}),
														e.jsx("li", {
															children:
																"Lăsarea de recenzii oneste și constructive",
														}),
													],
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "4.2 Utilizare Interzisă",
												}),
												e.jsx("div", {
													className:
														"bg-red-50 border border-red-200 rounded-lg p-4",
													children: e.jsxs("ul", {
														className:
															"list-disc list-inside space-y-2 text-red-800",
														children: [
															e.jsx("li", {
																children:
																	"Publicarea de anunțuri false sau înșelătoare",
															}),
															e.jsx("li", {
																children:
																	"Vânzarea de vehicule furate sau cu probleme legale",
															}),
															e.jsx("li", {
																children:
																	"Hărțuirea sau amenințarea altor utilizatori",
															}),
															e.jsx("li", {
																children:
																	"Utilizarea de limbaj ofensator sau discriminatoriu",
															}),
															e.jsx("li", {
																children:
																	"Încercarea de a ocoli sistemele de securitate",
															}),
															e.jsx("li", {
																children:
																	"Spam-ul sau publicitatea neautorizată",
															}),
														],
													}),
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsxs("div", {
											className: "flex items-center space-x-3 mb-4",
											children: [
												e.jsx(he, { className: "h-6 w-6 text-nexar-accent" }),
												e.jsx("h2", {
													className: "text-2xl font-bold text-gray-900",
													children: "5. Anunțuri și Conținut",
												}),
											],
										}),
										e.jsxs("div", {
											className: "space-y-4 text-gray-700",
											children: [
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "5.1 Responsabilitatea Vânzătorului",
												}),
												e.jsx("p", {
													children: "Vânzătorii sunt responsabili pentru:",
												}),
												e.jsxs("ul", {
													className: "list-disc list-inside space-y-2 ml-4",
													children: [
														e.jsx("li", {
															children: "Acuratețea informațiilor din anunț",
														}),
														e.jsx("li", {
															children:
																"Calitatea și autenticitatea fotografiilor",
														}),
														e.jsx("li", {
															children: "Respectarea legislației în vigoare",
														}),
														e.jsx("li", {
															children:
																"Comunicarea promptă cu potențialii cumpărători",
														}),
													],
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "5.2 Moderarea Conținutului",
												}),
												e.jsx("p", {
													children:
														"Ne rezervăm dreptul de a modera, edita sau elimina orice conținut care încalcă acești termeni sau legislația aplicabilă.",
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "5.3 Proprietatea Intelectuală",
												}),
												e.jsx("p", {
													children:
														"Prin publicarea conținutului, acordați Nexar.ro o licență non-exclusivă de utilizare pentru afișarea pe platformă.",
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "6. Tranzacții și Plăți",
										}),
										e.jsxs("div", {
											className: "space-y-4 text-gray-700",
											children: [
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "6.1 Facilitarea Tranzacțiilor",
												}),
												e.jsx("p", {
													children:
														"Nexar.ro facilitează contactul între vânzători și cumpărători, dar nu este parte în tranzacțiile efectuate.",
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "6.2 Responsabilitatea Părților",
												}),
												e.jsx("p", {
													children:
														"Vânzătorii și cumpărătorii sunt responsabili pentru:",
												}),
												e.jsxs("ul", {
													className: "list-disc list-inside space-y-2 ml-4",
													children: [
														e.jsx("li", {
															children: "Negocierea prețului și condițiilor",
														}),
														e.jsx("li", {
															children: "Verificarea documentelor vehiculului",
														}),
														e.jsx("li", {
															children:
																"Efectuarea plăților și transferului de proprietate",
														}),
														e.jsx("li", {
															children: "Respectarea obligațiilor legale",
														}),
													],
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "6.3 Limitarea Răspunderii",
												}),
												e.jsx("div", {
													className:
														"bg-yellow-50 border border-yellow-200 rounded-lg p-4",
													children: e.jsx("p", {
														className: "text-yellow-800",
														children:
															"Nexar.ro nu este responsabil pentru disputele, fraudele sau problemele care apar în cadrul tranzacțiilor între utilizatori.",
													}),
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "7. Taxe și Comisioane",
										}),
										e.jsxs("div", {
											className: "space-y-4 text-gray-700",
											children: [
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "7.1 Servicii Gratuite",
												}),
												e.jsx("p", {
													children:
														"Înregistrarea și utilizarea de bază a platformei sunt gratuite pentru utilizatori.",
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "7.2 Servicii Premium",
												}),
												e.jsx("p", {
													children:
														"Anumite funcții premium (anunțuri evidențiate, promovare) pot fi supuse unor taxe care vor fi comunicate în avans.",
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "7.3 Modificarea Tarifelor",
												}),
												e.jsx("p", {
													children:
														"Ne rezervăm dreptul de a modifica structura tarifară cu o notificare prealabilă de 30 de zile.",
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "8. Confidențialitate și Protecția Datelor",
										}),
										e.jsxs("div", {
											className: "space-y-4 text-gray-700",
											children: [
												e.jsxs("p", {
													children: [
														"Colectarea și utilizarea datelor personale sunt reglementate de ",
														e.jsx(ke, {
															to: "/confidentialitate",
															className: "text-nexar-accent hover:underline",
															children: "Politica noastră de Confidențialitate",
														}),
														".",
													],
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "8.1 Consimțământul",
												}),
												e.jsx("p", {
													children:
														"Prin utilizarea platformei, consimțiți la colectarea și prelucrarea datelor conform politicii de confidențialitate.",
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "8.2 Securitatea Datelor",
												}),
												e.jsx("p", {
													children:
														"Implementăm măsuri de securitate pentru protejarea datelor dvs., dar nu putem garanta securitatea absolută.",
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "9. Suspendarea și Încetarea",
										}),
										e.jsxs("div", {
											className: "space-y-4 text-gray-700",
											children: [
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "9.1 Suspendarea Contului",
												}),
												e.jsx("p", {
													children:
														"Putem suspenda sau închide conturile care încalcă acești termeni, fără notificare prealabilă.",
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "9.2 Încetarea Voluntară",
												}),
												e.jsx("p", {
													children:
														"Puteți închide contul oricând prin contactarea serviciului clienți.",
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "9.3 Efectele Încetării",
												}),
												e.jsx("p", {
													children:
														"La închiderea contului, anunțurile vor fi eliminate, dar obligațiile contractuale rămân în vigoare.",
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "10. Limitarea Răspunderii",
										}),
										e.jsx("div", {
											className:
												"bg-gray-50 border border-gray-200 rounded-lg p-6",
											children: e.jsxs("div", {
												className: "space-y-4 text-gray-700",
												children: [
													e.jsxs("p", {
														children: [
															e.jsx("strong", { children: "10.1" }),
															' Nexar.ro furnizează platforma "ca atare" fără garanții de orice fel.',
														],
													}),
													e.jsxs("p", {
														children: [
															e.jsx("strong", { children: "10.2" }),
															" Nu garantăm acuratețea, completitudinea sau fiabilitatea conținutului publicat de utilizatori.",
														],
													}),
													e.jsxs("p", {
														children: [
															e.jsx("strong", { children: "10.3" }),
															" Răspunderea noastră este limitată la valoarea serviciilor plătite în ultimele 12 luni.",
														],
													}),
													e.jsxs("p", {
														children: [
															e.jsx("strong", { children: "10.4" }),
															" Nu suntem responsabili pentru daune indirecte, incidentale sau consecutive.",
														],
													}),
												],
											}),
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "11. Legea Aplicabilă și Jurisdicția",
										}),
										e.jsxs("div", {
											className: "space-y-4 text-gray-700",
											children: [
												e.jsx("p", {
													children:
														"Acești termeni sunt guvernați de legea română și se supun jurisdicției instanțelor din România.",
												}),
												e.jsx("p", {
													children:
														"Orice dispută va fi soluționată prin negociere amiabilă sau, în caz de eșec, prin instanțele competente din Râmnicu Vâlcea.",
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "12. Modificarea Termenilor",
										}),
										e.jsxs("div", {
											className: "space-y-4 text-gray-700",
											children: [
												e.jsx("p", {
													children:
														"Ne rezervăm dreptul de a modifica acești termeni oricând. Modificările vor fi comunicate prin:",
												}),
												e.jsxs("ul", {
													className: "list-disc list-inside space-y-2 ml-4",
													children: [
														e.jsx("li", {
															children: "Publicarea pe site-ul web",
														}),
														e.jsx("li", {
															children:
																"Notificare prin email (dacă este cazul)",
														}),
														e.jsx("li", {
															children: "Notificare în aplicație",
														}),
													],
												}),
												e.jsx("p", {
													children:
														"Continuarea utilizării platformei după modificări constituie acceptarea noilor termeni.",
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "13. Contact",
										}),
										e.jsxs("div", {
											className: "bg-nexar-accent/10 rounded-lg p-6",
											children: [
												e.jsx("p", {
													className: "text-gray-700 mb-4",
													children:
														"Pentru întrebări despre acești termeni, ne puteți contacta:",
												}),
												e.jsxs("div", {
													className: "space-y-2 text-gray-700",
													children: [
														e.jsxs("p", {
															children: [
																e.jsx("strong", { children: "Email:" }),
																" legal@nexar.ro",
															],
														}),
														e.jsxs("p", {
															children: [
																e.jsx("strong", { children: "Telefon:" }),
																" 0790 454 647",
															],
														}),
														e.jsxs("p", {
															children: [
																e.jsx("strong", { children: "Adresă:" }),
																" Bulevardul Dem Radulescu 24, Râmnicu Vâlcea, România",
															],
														}),
														e.jsxs("p", {
															children: [
																e.jsx("strong", { children: "Program:" }),
																" Luni - Vineri: 09:00 - 17:00",
															],
														}),
													],
												}),
											],
										}),
									],
								}),
							],
						}),
						e.jsx("div", {
							className: "border-t border-gray-200 pt-6 mt-8",
							children: e.jsxs("div", {
								className:
									"flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0",
								children: [
									e.jsx("p", {
										className: "text-sm text-gray-600",
										children: "Ultima actualizare: 18 Decembrie 2024",
									}),
									e.jsx(ke, {
										to: "/",
										className:
											"bg-nexar-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors",
										onClick: () => window.scrollTo(0, 0),
										children: "Înapoi la Nexar",
									}),
								],
							}),
						}),
					],
				}),
			}),
		})
	),
	$y = () => (
		S.useEffect(() => {
			window.scrollTo(0, 0);
		}, []),
		e.jsx("div", {
			className: "min-h-screen bg-gray-50 py-8",
			children: e.jsx("div", {
				className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
				children: e.jsxs("div", {
					className: "bg-white rounded-2xl shadow-lg p-8",
					children: [
						e.jsxs("div", {
							className: "text-center mb-8",
							children: [
								e.jsx("div", {
									className:
										"w-16 h-16 bg-nexar-accent/10 rounded-full flex items-center justify-center mx-auto mb-4",
									children: e.jsx(Gn, {
										className: "h-8 w-8 text-nexar-accent",
									}),
								}),
								e.jsx("h1", {
									className: "text-3xl font-bold text-gray-900 mb-4",
									children: "Politica de Confidențialitate",
								}),
								e.jsx("p", {
									className: "text-gray-600",
									children: "Ultima actualizare: 18 Decembrie 2024",
								}),
							],
						}),
						e.jsxs("div", {
							className: "prose max-w-none",
							children: [
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsxs("div", {
											className: "flex items-center space-x-3 mb-4",
											children: [
												e.jsx(or, { className: "h-6 w-6 text-nexar-accent" }),
												e.jsx("h2", {
													className: "text-2xl font-bold text-gray-900",
													children: "1. Introducere",
												}),
											],
										}),
										e.jsx("p", {
											className: "text-gray-700 mb-4",
											children:
												"La Nexar.ro, respectăm și protejăm confidențialitatea utilizatorilor noștri. Această Politică de Confidențialitate explică cum colectăm, utilizăm, stocăm și protejăm informațiile dvs. personale în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) și legislația română aplicabilă.",
										}),
										e.jsx("div", {
											className:
												"bg-blue-50 border border-blue-200 rounded-lg p-4",
											children: e.jsxs("p", {
												className: "text-blue-800 text-sm",
												children: [
													e.jsx("strong", { children: "Angajamentul nostru:" }),
													" Ne angajăm să procesăm datele dvs. personale în mod transparent, corect și legal, respectând drepturile dvs. de confidențialitate.",
												],
											}),
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsxs("div", {
											className: "flex items-center space-x-3 mb-4",
											children: [
												e.jsx(pm, { className: "h-6 w-6 text-nexar-accent" }),
												e.jsx("h2", {
													className: "text-2xl font-bold text-gray-900",
													children: "2. Operatorul de Date",
												}),
											],
										}),
										e.jsx("div", {
											className:
												"bg-gray-50 border border-gray-200 rounded-lg p-6",
											children: e.jsxs("div", {
												className: "space-y-2 text-gray-700",
												children: [
													e.jsxs("p", {
														children: [
															e.jsx("strong", { children: "Denumire:" }),
															" Nexar.ro",
														],
													}),
													e.jsxs("p", {
														children: [
															e.jsx("strong", { children: "Adresă:" }),
															" Bulevardul Dem Radulescu 24, Râmnicu Vâlcea, România",
														],
													}),
													e.jsxs("p", {
														children: [
															e.jsx("strong", { children: "Email contact:" }),
															" privacy@nexar.ro",
														],
													}),
													e.jsxs("p", {
														children: [
															e.jsx("strong", { children: "Telefon:" }),
															" 0790 454 647",
														],
													}),
													e.jsxs("p", {
														children: [
															e.jsx("strong", {
																children: "Responsabil Protecția Datelor:",
															}),
															" dpo@nexar.ro",
														],
													}),
												],
											}),
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsxs("div", {
											className: "flex items-center space-x-3 mb-4",
											children: [
												e.jsx(Do, { className: "h-6 w-6 text-nexar-accent" }),
												e.jsx("h2", {
													className: "text-2xl font-bold text-gray-900",
													children: "3. Datele pe care le Colectăm",
												}),
											],
										}),
										e.jsxs("div", {
											className: "space-y-6 text-gray-700",
											children: [
												e.jsxs("div", {
													children: [
														e.jsx("h3", {
															className: "text-lg font-semibold mb-3",
															children: "3.1 Date de Identificare",
														}),
														e.jsxs("ul", {
															className: "list-disc list-inside space-y-2 ml-4",
															children: [
																e.jsx("li", { children: "Nume și prenume" }),
																e.jsx("li", { children: "Adresă de email" }),
																e.jsx("li", { children: "Număr de telefon" }),
																e.jsx("li", {
																	children: "Adresă fizică/locația",
																}),
																e.jsx("li", {
																	children:
																		"Data nașterii (pentru verificarea vârstei)",
																}),
															],
														}),
													],
												}),
												e.jsxs("div", {
													children: [
														e.jsx("h3", {
															className: "text-lg font-semibold mb-3",
															children: "3.2 Date de Cont",
														}),
														e.jsxs("ul", {
															className: "list-disc list-inside space-y-2 ml-4",
															children: [
																e.jsx("li", {
																	children:
																		"Informații de autentificare (email și parolă criptată)",
																}),
																e.jsx("li", {
																	children: "Preferințe de cont și setări",
																}),
																e.jsx("li", {
																	children:
																		"Istoricul activității pe platformă",
																}),
																e.jsx("li", {
																	children:
																		"Tipul de utilizator (privat/dealer)",
																}),
															],
														}),
													],
												}),
												e.jsxs("div", {
													children: [
														e.jsx("h3", {
															className: "text-lg font-semibold mb-3",
															children: "3.3 Date despre Anunțuri",
														}),
														e.jsxs("ul", {
															className: "list-disc list-inside space-y-2 ml-4",
															children: [
																e.jsx("li", {
																	children:
																		"Informații despre motocicletele listate",
																}),
																e.jsx("li", {
																	children: "Fotografii și descrieri",
																}),
																e.jsx("li", {
																	children: "Prețuri și condiții de vânzare",
																}),
																e.jsx("li", {
																	children: "Istoricul anunțurilor",
																}),
															],
														}),
													],
												}),
												e.jsxs("div", {
													children: [
														e.jsx("h3", {
															className: "text-lg font-semibold mb-3",
															children: "3.4 Date Tehnice",
														}),
														e.jsxs("ul", {
															className: "list-disc list-inside space-y-2 ml-4",
															children: [
																e.jsx("li", {
																	children: "Adresa IP și locația aproximativă",
																}),
																e.jsx("li", {
																	children: "Tipul de browser și dispozitiv",
																}),
																e.jsx("li", {
																	children:
																		"Paginile vizitate și timpul petrecut",
																}),
																e.jsx("li", {
																	children: "Referrer și link-uri de ieșire",
																}),
															],
														}),
													],
												}),
												e.jsxs("div", {
													children: [
														e.jsx("h3", {
															className: "text-lg font-semibold mb-3",
															children: "3.5 Date de Comunicare",
														}),
														e.jsxs("ul", {
															className: "list-disc list-inside space-y-2 ml-4",
															children: [
																e.jsx("li", {
																	children: "Mesajele trimise prin platformă",
																}),
																e.jsx("li", {
																	children:
																		"Recenziile și rating-urile acordate",
																}),
																e.jsx("li", {
																	children: "Comunicările cu serviciul clienți",
																}),
															],
														}),
													],
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsxs("div", {
											className: "flex items-center space-x-3 mb-4",
											children: [
												e.jsx(Ir, { className: "h-6 w-6 text-nexar-accent" }),
												e.jsx("h2", {
													className: "text-2xl font-bold text-gray-900",
													children: "4. Scopurile Prelucrării Datelor",
												}),
											],
										}),
										e.jsx("div", {
											className: "space-y-6 text-gray-700",
											children: e.jsxs("div", {
												className: "grid grid-cols-1 md:grid-cols-2 gap-6",
												children: [
													e.jsxs("div", {
														className:
															"bg-green-50 border border-green-200 rounded-lg p-4",
														children: [
															e.jsx("h3", {
																className:
																	"text-lg font-semibold text-green-800 mb-2",
																children: "Servicii Esențiale",
															}),
															e.jsxs("ul", {
																className:
																	"list-disc list-inside space-y-1 text-green-700 text-sm",
																children: [
																	e.jsx("li", {
																		children:
																			"Crearea și gestionarea conturilor",
																	}),
																	e.jsx("li", {
																		children: "Facilitarea tranzacțiilor",
																	}),
																	e.jsx("li", {
																		children: "Comunicarea între utilizatori",
																	}),
																	e.jsx("li", { children: "Suportul tehnic" }),
																],
															}),
														],
													}),
													e.jsxs("div", {
														className:
															"bg-blue-50 border border-blue-200 rounded-lg p-4",
														children: [
															e.jsx("h3", {
																className:
																	"text-lg font-semibold text-blue-800 mb-2",
																children: "Îmbunătățiri",
															}),
															e.jsxs("ul", {
																className:
																	"list-disc list-inside space-y-1 text-blue-700 text-sm",
																children: [
																	e.jsx("li", {
																		children: "Personalizarea experienței",
																	}),
																	e.jsx("li", {
																		children: "Analize și statistici",
																	}),
																	e.jsx("li", {
																		children: "Îmbunătățirea serviciilor",
																	}),
																	e.jsx("li", {
																		children: "Dezvoltarea de noi funcții",
																	}),
																],
															}),
														],
													}),
													e.jsxs("div", {
														className:
															"bg-yellow-50 border border-yellow-200 rounded-lg p-4",
														children: [
															e.jsx("h3", {
																className:
																	"text-lg font-semibold text-yellow-800 mb-2",
																children: "Marketing",
															}),
															e.jsxs("ul", {
																className:
																	"list-disc list-inside space-y-1 text-yellow-700 text-sm",
																children: [
																	e.jsx("li", {
																		children:
																			"Newsletter-uri (cu consimțământ)",
																	}),
																	e.jsx("li", {
																		children: "Oferte personalizate",
																	}),
																	e.jsx("li", {
																		children: "Campanii promoționale",
																	}),
																	e.jsx("li", {
																		children: "Cercetări de piață",
																	}),
																],
															}),
														],
													}),
													e.jsxs("div", {
														className:
															"bg-red-50 border border-red-200 rounded-lg p-4",
														children: [
															e.jsx("h3", {
																className:
																	"text-lg font-semibold text-red-800 mb-2",
																children: "Securitate",
															}),
															e.jsxs("ul", {
																className:
																	"list-disc list-inside space-y-1 text-red-700 text-sm",
																children: [
																	e.jsx("li", {
																		children: "Prevenirea fraudelor",
																	}),
																	e.jsx("li", {
																		children: "Detectarea abuzurilor",
																	}),
																	e.jsx("li", {
																		children: "Respectarea legii",
																	}),
																	e.jsx("li", {
																		children: "Protejarea utilizatorilor",
																	}),
																],
															}),
														],
													}),
												],
											}),
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "5. Temeiurile Legale pentru Prelucrare",
										}),
										e.jsxs("div", {
											className: "space-y-4 text-gray-700",
											children: [
												e.jsxs("div", {
													className:
														"bg-gray-50 border border-gray-200 rounded-lg p-4",
													children: [
														e.jsx("h3", {
															className: "font-semibold mb-2",
															children: "5.1 Executarea Contractului",
														}),
														e.jsx("p", {
															className: "text-sm",
															children:
																"Prelucrăm datele pentru a vă furniza serviciile solicitate și pentru a executa obligațiile contractuale.",
														}),
													],
												}),
												e.jsxs("div", {
													className:
														"bg-gray-50 border border-gray-200 rounded-lg p-4",
													children: [
														e.jsx("h3", {
															className: "font-semibold mb-2",
															children: "5.2 Consimțământul",
														}),
														e.jsx("p", {
															className: "text-sm",
															children:
																"Pentru anumite activități (marketing, cookies non-esențiale), solicităm consimțământul dvs. explicit.",
														}),
													],
												}),
												e.jsxs("div", {
													className:
														"bg-gray-50 border border-gray-200 rounded-lg p-4",
													children: [
														e.jsx("h3", {
															className: "font-semibold mb-2",
															children: "5.3 Interesul Legitim",
														}),
														e.jsx("p", {
															className: "text-sm",
															children:
																"Pentru îmbunătățirea serviciilor, securitate și analize, ne bazăm pe interesul legitim.",
														}),
													],
												}),
												e.jsxs("div", {
													className:
														"bg-gray-50 border border-gray-200 rounded-lg p-4",
													children: [
														e.jsx("h3", {
															className: "font-semibold mb-2",
															children: "5.4 Obligația Legală",
														}),
														e.jsx("p", {
															className: "text-sm",
															children:
																"Când legea ne obligă să păstrăm sau să furnizăm anumite date autorităților.",
														}),
													],
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "6. Partajarea Datelor",
										}),
										e.jsxs("div", {
											className: "space-y-4 text-gray-700",
											children: [
												e.jsxs("div", {
													className:
														"bg-yellow-50 border border-yellow-200 rounded-lg p-4",
													children: [
														e.jsx("h3", {
															className: "font-semibold text-yellow-800 mb-2",
															children: "⚠️ Principiu Important",
														}),
														e.jsx("p", {
															className: "text-yellow-700 text-sm",
															children:
																"Nu vindem, nu închiriem și nu partajăm datele dvs. personale cu terți pentru scopuri comerciale fără consimțământul dvs.",
														}),
													],
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "6.1 Partajare Limitată",
												}),
												e.jsx("p", {
													children:
														"Partajăm datele doar în următoarele situații:",
												}),
												e.jsxs("ul", {
													className: "list-disc list-inside space-y-2 ml-4",
													children: [
														e.jsxs("li", {
															children: [
																e.jsx("strong", {
																	children: "Cu alți utilizatori:",
																}),
																" Informațiile din anunțuri sunt vizibile public",
															],
														}),
														e.jsxs("li", {
															children: [
																e.jsx("strong", {
																	children: "Furnizori de servicii:",
																}),
																" Pentru hosting, analize, plăți (cu acorduri de confidențialitate)",
															],
														}),
														e.jsxs("li", {
															children: [
																e.jsx("strong", { children: "Autorități:" }),
																" Când este cerut legal sau pentru prevenirea fraudelor",
															],
														}),
														e.jsxs("li", {
															children: [
																e.jsx("strong", {
																	children: "Transferuri de afaceri:",
																}),
																" În caz de fuziune sau achiziție (cu notificare prealabilă)",
															],
														}),
													],
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "6.2 Transferuri Internaționale",
												}),
												e.jsx("p", {
													children:
														"Dacă transferăm date în afara UE, ne asigurăm că există garanții adecvate (clauzele contractuale standard, decizii de adecvare).",
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "7. Perioada de Păstrare",
										}),
										e.jsx("div", {
											className: "space-y-4 text-gray-700",
											children: e.jsxs("div", {
												className: "grid grid-cols-1 md:grid-cols-2 gap-4",
												children: [
													e.jsxs("div", {
														className:
															"bg-blue-50 border border-blue-200 rounded-lg p-4",
														children: [
															e.jsx("h3", {
																className: "font-semibold text-blue-800 mb-2",
																children: "Conturi Active",
															}),
															e.jsx("p", {
																className: "text-blue-700 text-sm",
																children:
																	"Datele sunt păstrate cât timp contul este activ și pentru 3 ani după ultima activitate.",
															}),
														],
													}),
													e.jsxs("div", {
														className:
															"bg-green-50 border border-green-200 rounded-lg p-4",
														children: [
															e.jsx("h3", {
																className: "font-semibold text-green-800 mb-2",
																children: "Anunțuri",
															}),
															e.jsx("p", {
																className: "text-green-700 text-sm",
																children:
																	"Anunțurile sunt păstrate 2 ani după expirare pentru statistici și îmbunătățiri.",
															}),
														],
													}),
													e.jsxs("div", {
														className:
															"bg-purple-50 border border-purple-200 rounded-lg p-4",
														children: [
															e.jsx("h3", {
																className: "font-semibold text-purple-800 mb-2",
																children: "Comunicări",
															}),
															e.jsx("p", {
																className: "text-purple-700 text-sm",
																children:
																	"Mesajele sunt păstrate 1 an pentru rezolvarea disputelor și suport.",
															}),
														],
													}),
													e.jsxs("div", {
														className:
															"bg-orange-50 border border-orange-200 rounded-lg p-4",
														children: [
															e.jsx("h3", {
																className: "font-semibold text-orange-800 mb-2",
																children: "Date Legale",
															}),
															e.jsx("p", {
																className: "text-orange-700 text-sm",
																children:
																	"Datele necesare pentru obligații legale sunt păstrate conform legislației (5-10 ani).",
															}),
														],
													}),
												],
											}),
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "8. Drepturile Dvs. GDPR",
										}),
										e.jsxs("div", {
											className: "space-y-4 text-gray-700",
											children: [
												e.jsxs("div", {
													className:
														"bg-nexar-accent/10 border border-nexar-accent/20 rounded-lg p-6",
													children: [
														e.jsx("h3", {
															className: "font-semibold text-nexar-accent mb-4",
															children: "Aveți următoarele drepturi:",
														}),
														e.jsxs("div", {
															className:
																"grid grid-cols-1 md:grid-cols-2 gap-4",
															children: [
																e.jsxs("div", {
																	children: [
																		e.jsx("h4", {
																			className: "font-semibold mb-2",
																			children: "🔍 Dreptul de Acces",
																		}),
																		e.jsx("p", {
																			className: "text-sm",
																			children:
																				"Să știți ce date avem despre dvs.",
																		}),
																	],
																}),
																e.jsxs("div", {
																	children: [
																		e.jsx("h4", {
																			className: "font-semibold mb-2",
																			children: "✏️ Dreptul de Rectificare",
																		}),
																		e.jsx("p", {
																			className: "text-sm",
																			children:
																				"Să corectați datele incorecte.",
																		}),
																	],
																}),
																e.jsxs("div", {
																	children: [
																		e.jsx("h4", {
																			className: "font-semibold mb-2",
																			children: "🗑️ Dreptul de Ștergere",
																		}),
																		e.jsx("p", {
																			className: "text-sm",
																			children:
																				"Să solicitați ștergerea datelor.",
																		}),
																	],
																}),
																e.jsxs("div", {
																	children: [
																		e.jsx("h4", {
																			className: "font-semibold mb-2",
																			children: "⏸️ Dreptul de Restricționare",
																		}),
																		e.jsx("p", {
																			className: "text-sm",
																			children:
																				"Să limitați prelucrarea datelor.",
																		}),
																	],
																}),
																e.jsxs("div", {
																	children: [
																		e.jsx("h4", {
																			className: "font-semibold mb-2",
																			children: "📦 Dreptul la Portabilitate",
																		}),
																		e.jsx("p", {
																			className: "text-sm",
																			children:
																				"Să primiți datele într-un format utilizabil.",
																		}),
																	],
																}),
																e.jsxs("div", {
																	children: [
																		e.jsx("h4", {
																			className: "font-semibold mb-2",
																			children: "🚫 Dreptul de Opoziție",
																		}),
																		e.jsx("p", {
																			className: "text-sm",
																			children:
																				"Să vă opuneți anumitor prelucrări.",
																		}),
																	],
																}),
															],
														}),
													],
												}),
												e.jsxs("div", {
													className:
														"bg-blue-50 border border-blue-200 rounded-lg p-4",
													children: [
														e.jsx("h3", {
															className: "font-semibold text-blue-800 mb-2",
															children: "Cum să vă exercitați drepturile:",
														}),
														e.jsxs("ul", {
															className:
																"list-disc list-inside space-y-1 text-blue-700 text-sm",
															children: [
																e.jsxs("li", {
																	children: [
																		"Trimiteți un email la: ",
																		e.jsx("strong", {
																			children: "privacy@nexar.ro",
																		}),
																	],
																}),
																e.jsxs("li", {
																	children: [
																		"Contactați-ne telefonic: ",
																		e.jsx("strong", {
																			children: "0790 454 647",
																		}),
																	],
																}),
																e.jsx("li", {
																	children:
																		"Utilizați formularul de contact din cont",
																}),
																e.jsx("li", {
																	children: "Răspundem în maximum 30 de zile",
																}),
															],
														}),
													],
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "9. Securitatea Datelor",
										}),
										e.jsxs("div", {
											className: "space-y-4 text-gray-700",
											children: [
												e.jsx("p", {
													children:
														"Implementăm măsuri tehnice și organizatorice pentru protejarea datelor dvs.:",
												}),
												e.jsxs("div", {
													className: "grid grid-cols-1 md:grid-cols-2 gap-4",
													children: [
														e.jsxs("div", {
															className:
																"bg-green-50 border border-green-200 rounded-lg p-4",
															children: [
																e.jsx("h3", {
																	className:
																		"font-semibold text-green-800 mb-2",
																	children: "🔒 Măsuri Tehnice",
																}),
																e.jsxs("ul", {
																	className:
																		"list-disc list-inside space-y-1 text-green-700 text-sm",
																	children: [
																		e.jsx("li", {
																			children: "Criptarea datelor (SSL/TLS)",
																		}),
																		e.jsx("li", {
																			children: "Autentificare cu doi factori",
																		}),
																		e.jsx("li", {
																			children:
																				"Backup-uri regulate și securizate",
																		}),
																		e.jsx("li", {
																			children: "Monitorizarea sistemelor",
																		}),
																	],
																}),
															],
														}),
														e.jsxs("div", {
															className:
																"bg-blue-50 border border-blue-200 rounded-lg p-4",
															children: [
																e.jsx("h3", {
																	className: "font-semibold text-blue-800 mb-2",
																	children: "👥 Măsuri Organizatorice",
																}),
																e.jsxs("ul", {
																	className:
																		"list-disc list-inside space-y-1 text-blue-700 text-sm",
																	children: [
																		e.jsx("li", {
																			children: "Acces restricționat la date",
																		}),
																		e.jsx("li", {
																			children: "Instruirea personalului",
																		}),
																		e.jsx("li", {
																			children:
																				"Politici de securitate stricte",
																		}),
																		e.jsx("li", {
																			children: "Auditări regulate",
																		}),
																	],
																}),
															],
														}),
													],
												}),
												e.jsx("div", {
													className:
														"bg-red-50 border border-red-200 rounded-lg p-4",
													children: e.jsxs("div", {
														className: "flex items-start space-x-3",
														children: [
															e.jsx(he, {
																className: "h-5 w-5 text-red-600 mt-0.5",
															}),
															e.jsxs("div", {
																children: [
																	e.jsx("h3", {
																		className:
																			"font-semibold text-red-800 mb-2",
																		children: "Încălcări de Securitate",
																	}),
																	e.jsx("p", {
																		className: "text-red-700 text-sm",
																		children:
																			"În cazul unei încălcări de securitate care afectează datele dvs., vă vom notifica în termen de 72 de ore și vom lua măsurile necesare pentru limitarea impactului.",
																	}),
																],
															}),
														],
													}),
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "10. Cookies și Tehnologii Similare",
										}),
										e.jsxs("div", {
											className: "space-y-4 text-gray-700",
											children: [
												e.jsxs("p", {
													children: [
														"Utilizăm cookies pentru îmbunătățirea experienței dvs. Pentru detalii complete, consultați ",
														e.jsx(ke, {
															to: "/cookies",
															className: "text-nexar-accent hover:underline",
															children: "Politica noastră de Cookies",
														}),
														".",
													],
												}),
												e.jsxs("div", {
													className: "grid grid-cols-1 md:grid-cols-3 gap-4",
													children: [
														e.jsxs("div", {
															className:
																"bg-green-50 border border-green-200 rounded-lg p-4",
															children: [
																e.jsx("h3", {
																	className:
																		"font-semibold text-green-800 mb-2",
																	children: "Esențiale",
																}),
																e.jsx("p", {
																	className: "text-green-700 text-sm",
																	children:
																		"Necesare pentru funcționarea site-ului",
																}),
															],
														}),
														e.jsxs("div", {
															className:
																"bg-blue-50 border border-blue-200 rounded-lg p-4",
															children: [
																e.jsx("h3", {
																	className: "font-semibold text-blue-800 mb-2",
																	children: "Analize",
																}),
																e.jsx("p", {
																	className: "text-blue-700 text-sm",
																	children:
																		"Pentru înțelegerea utilizării site-ului",
																}),
															],
														}),
														e.jsxs("div", {
															className:
																"bg-purple-50 border border-purple-200 rounded-lg p-4",
															children: [
																e.jsx("h3", {
																	className:
																		"font-semibold text-purple-800 mb-2",
																	children: "Marketing",
																}),
																e.jsx("p", {
																	className: "text-purple-700 text-sm",
																	children:
																		"Pentru personalizarea conținutului",
																}),
															],
														}),
													],
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "11. Modificări ale Politicii",
										}),
										e.jsxs("div", {
											className: "space-y-4 text-gray-700",
											children: [
												e.jsx("p", {
													children:
														"Putem actualiza această politică pentru a reflecta schimbările în serviciile noastre sau în legislație.",
												}),
												e.jsxs("div", {
													className:
														"bg-yellow-50 border border-yellow-200 rounded-lg p-4",
													children: [
														e.jsx("h3", {
															className: "font-semibold text-yellow-800 mb-2",
															children: "Notificarea Modificărilor",
														}),
														e.jsxs("ul", {
															className:
																"list-disc list-inside space-y-1 text-yellow-700 text-sm",
															children: [
																e.jsx("li", {
																	children:
																		"Publicarea pe site cu evidențierea modificărilor",
																}),
																e.jsx("li", {
																	children:
																		"Notificare prin email pentru modificări importante",
																}),
																e.jsx("li", {
																	children:
																		"Notificare în aplicație la următoarea autentificare",
																}),
																e.jsx("li", {
																	children:
																		"Perioada de tranziție de 30 de zile pentru adaptare",
																}),
															],
														}),
													],
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "12. Contact și Reclamații",
										}),
										e.jsxs("div", {
											className: "grid grid-cols-1 md:grid-cols-2 gap-6",
											children: [
												e.jsxs("div", {
													className: "bg-nexar-accent/10 rounded-lg p-6",
													children: [
														e.jsxs("div", {
															className: "flex items-center space-x-3 mb-4",
															children: [
																e.jsx(Ys, {
																	className: "h-6 w-6 text-nexar-accent",
																}),
																e.jsx("h3", {
																	className: "font-semibold text-gray-900",
																	children: "Contactați-ne",
																}),
															],
														}),
														e.jsxs("div", {
															className: "space-y-2 text-gray-700 text-sm",
															children: [
																e.jsxs("p", {
																	children: [
																		e.jsx("strong", { children: "Email DPO:" }),
																		" dpo@nexar.ro",
																	],
																}),
																e.jsxs("p", {
																	children: [
																		e.jsx("strong", {
																			children: "Email general:",
																		}),
																		" privacy@nexar.ro",
																	],
																}),
																e.jsxs("p", {
																	children: [
																		e.jsx("strong", { children: "Telefon:" }),
																		" 0790 454 647",
																	],
																}),
																e.jsxs("p", {
																	children: [
																		e.jsx("strong", { children: "Adresă:" }),
																		" Bulevardul Dem Radulescu 24, Râmnicu Vâlcea",
																	],
																}),
															],
														}),
													],
												}),
												e.jsxs("div", {
													className: "bg-blue-50 rounded-lg p-6",
													children: [
														e.jsxs("div", {
															className: "flex items-center space-x-3 mb-4",
															children: [
																e.jsx(ss, {
																	className: "h-6 w-6 text-blue-600",
																}),
																e.jsx("h3", {
																	className: "font-semibold text-gray-900",
																	children: "Autoritatea de Supraveghere",
																}),
															],
														}),
														e.jsxs("div", {
															className: "space-y-2 text-gray-700 text-sm",
															children: [
																e.jsx("p", {
																	children: e.jsx("strong", {
																		children: "ANSPDCP",
																	}),
																}),
																e.jsx("p", {
																	children:
																		"Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal",
																}),
																e.jsxs("p", {
																	children: [
																		e.jsx("strong", { children: "Website:" }),
																		" dataprotection.ro",
																	],
																}),
																e.jsxs("p", {
																	children: [
																		e.jsx("strong", { children: "Email:" }),
																		" anspdcp@dataprotection.ro",
																	],
																}),
															],
														}),
													],
												}),
											],
										}),
									],
								}),
							],
						}),
						e.jsx("div", {
							className: "border-t border-gray-200 pt-6 mt-8",
							children: e.jsxs("div", {
								className:
									"flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0",
								children: [
									e.jsx("p", {
										className: "text-sm text-gray-600",
										children: "Ultima actualizare: 18 Decembrie 2024",
									}),
									e.jsx(ke, {
										to: "/",
										className:
											"bg-nexar-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors",
										onClick: () => window.scrollTo(0, 0),
										children: "Înapoi la Nexar",
									}),
								],
							}),
						}),
					],
				}),
			}),
		})
	),
	Vy = () => {
		const [i, s] = S.useState({
			essential: !0,
			analytics: !1,
			marketing: !1,
			functional: !1,
		});
		S.useEffect(() => {
			window.scrollTo(0, 0);
			const u = localStorage.getItem("cookiePreferences");
			u && s({ ...JSON.parse(u), essential: !0 });
		}, []);
		const a = (u, h) => {
				if (u === "essential") return;
				const f = { ...i, [u]: h };
				s(f), localStorage.setItem("cookiePreferences", JSON.stringify(f));
			},
			l = () => {
				const u = {
					essential: !0,
					analytics: !0,
					marketing: !0,
					functional: !0,
				};
				s(u), localStorage.setItem("cookiePreferences", JSON.stringify(u));
			},
			c = () => {
				const u = {
					essential: !0,
					analytics: !1,
					marketing: !1,
					functional: !1,
				};
				s(u), localStorage.setItem("cookiePreferences", JSON.stringify(u));
			};
		return e.jsx("div", {
			className: "min-h-screen bg-gray-50 py-8",
			children: e.jsx("div", {
				className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
				children: e.jsxs("div", {
					className: "bg-white rounded-2xl shadow-lg p-8",
					children: [
						e.jsxs("div", {
							className: "text-center mb-8",
							children: [
								e.jsx("div", {
									className:
										"w-16 h-16 bg-nexar-accent/10 rounded-full flex items-center justify-center mx-auto mb-4",
									children: e.jsx(Mo, {
										className: "h-8 w-8 text-nexar-accent",
									}),
								}),
								e.jsx("h1", {
									className: "text-3xl font-bold text-gray-900 mb-4",
									children: "Politica de Cookies",
								}),
								e.jsx("p", {
									className: "text-gray-600",
									children: "Ultima actualizare: 18 Decembrie 2024",
								}),
							],
						}),
						e.jsxs("div", {
							className:
								"bg-nexar-accent/5 border border-nexar-accent/20 rounded-xl p-6 mb-8",
							children: [
								e.jsxs("div", {
									className: "flex items-center space-x-3 mb-4",
									children: [
										e.jsx(es, { className: "h-6 w-6 text-nexar-accent" }),
										e.jsx("h2", {
											className: "text-xl font-bold text-gray-900",
											children: "Setările Cookie-urilor",
										}),
									],
								}),
								e.jsxs("div", {
									className: "space-y-4",
									children: [
										e.jsxs("div", {
											className:
												"flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200",
											children: [
												e.jsxs("div", {
													className: "flex-1",
													children: [
														e.jsxs("div", {
															className: "flex items-center space-x-3",
															children: [
																e.jsx(Gn, {
																	className: "h-5 w-5 text-green-600",
																}),
																e.jsx("h3", {
																	className: "font-semibold text-gray-900",
																	children: "Cookie-uri Esențiale",
																}),
															],
														}),
														e.jsx("p", {
															className: "text-sm text-gray-600 mt-1",
															children:
																"Necesare pentru funcționarea de bază a site-ului",
														}),
													],
												}),
												e.jsxs("div", {
													className: "flex items-center space-x-2",
													children: [
														e.jsx("span", {
															className: "text-sm text-green-600 font-medium",
															children: "Întotdeauna Active",
														}),
														e.jsx("div", {
															className:
																"w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1",
															children: e.jsx("div", {
																className: "w-4 h-4 bg-white rounded-full",
															}),
														}),
													],
												}),
											],
										}),
										e.jsxs("div", {
											className:
												"flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200",
											children: [
												e.jsxs("div", {
													className: "flex-1",
													children: [
														e.jsxs("div", {
															className: "flex items-center space-x-3",
															children: [
																e.jsx(xh, {
																	className: "h-5 w-5 text-blue-600",
																}),
																e.jsx("h3", {
																	className: "font-semibold text-gray-900",
																	children: "Cookie-uri de Analiză",
																}),
															],
														}),
														e.jsx("p", {
															className: "text-sm text-gray-600 mt-1",
															children:
																"Ne ajută să înțelegem cum utilizați site-ul",
														}),
													],
												}),
												e.jsx("button", {
													onClick: () => a("analytics", !i.analytics),
													className: `w-12 h-6 rounded-full flex items-center transition-colors ${
														i.analytics
															? "bg-nexar-accent justify-end"
															: "bg-gray-300 justify-start"
													} px-1`,
													children: e.jsx("div", {
														className: "w-4 h-4 bg-white rounded-full",
													}),
												}),
											],
										}),
										e.jsxs("div", {
											className:
												"flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200",
											children: [
												e.jsxs("div", {
													className: "flex-1",
													children: [
														e.jsxs("div", {
															className: "flex items-center space-x-3",
															children: [
																e.jsx(jh, {
																	className: "h-5 w-5 text-purple-600",
																}),
																e.jsx("h3", {
																	className: "font-semibold text-gray-900",
																	children: "Cookie-uri de Marketing",
																}),
															],
														}),
														e.jsx("p", {
															className: "text-sm text-gray-600 mt-1",
															children:
																"Pentru personalizarea reclamelor și conținutului",
														}),
													],
												}),
												e.jsx("button", {
													onClick: () => a("marketing", !i.marketing),
													className: `w-12 h-6 rounded-full flex items-center transition-colors ${
														i.marketing
															? "bg-nexar-accent justify-end"
															: "bg-gray-300 justify-start"
													} px-1`,
													children: e.jsx("div", {
														className: "w-4 h-4 bg-white rounded-full",
													}),
												}),
											],
										}),
										e.jsxs("div", {
											className:
												"flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200",
											children: [
												e.jsxs("div", {
													className: "flex-1",
													children: [
														e.jsxs("div", {
															className: "flex items-center space-x-3",
															children: [
																e.jsx(es, {
																	className: "h-5 w-5 text-orange-600",
																}),
																e.jsx("h3", {
																	className: "font-semibold text-gray-900",
																	children: "Cookie-uri Funcționale",
																}),
															],
														}),
														e.jsx("p", {
															className: "text-sm text-gray-600 mt-1",
															children:
																"Pentru funcții avansate și personalizare",
														}),
													],
												}),
												e.jsx("button", {
													onClick: () => a("functional", !i.functional),
													className: `w-12 h-6 rounded-full flex items-center transition-colors ${
														i.functional
															? "bg-nexar-accent justify-end"
															: "bg-gray-300 justify-start"
													} px-1`,
													children: e.jsx("div", {
														className: "w-4 h-4 bg-white rounded-full",
													}),
												}),
											],
										}),
									],
								}),
								e.jsxs("div", {
									className: "flex flex-col sm:flex-row gap-3 mt-6",
									children: [
										e.jsxs("button", {
											onClick: l,
											className:
												"flex-1 bg-nexar-accent text-white py-3 px-6 rounded-lg font-semibold hover:bg-nexar-gold transition-colors flex items-center justify-center space-x-2",
											children: [
												e.jsx(ts, { className: "h-4 w-4" }),
												e.jsx("span", { children: "Acceptă Toate" }),
											],
										}),
										e.jsxs("button", {
											onClick: c,
											className:
												"flex-1 bg-gray-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2",
											children: [
												e.jsx(Ft, { className: "h-4 w-4" }),
												e.jsx("span", { children: "Doar Esențiale" }),
											],
										}),
									],
								}),
							],
						}),
						e.jsxs("div", {
							className: "prose max-w-none",
							children: [
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "1. Ce sunt Cookie-urile?",
										}),
										e.jsx("p", {
											className: "text-gray-700 mb-4",
											children:
												"Cookie-urile sunt fișiere mici de text care sunt stocate pe dispozitivul dvs. (computer, telefon, tabletă) când vizitați un site web. Ele sunt utilizate pe scară largă pentru a face site-urile web să funcționeze mai eficient și pentru a furniza informații proprietarilor site-ului.",
										}),
										e.jsxs("div", {
											className:
												"bg-blue-50 border border-blue-200 rounded-lg p-4",
											children: [
												e.jsx("h3", {
													className: "font-semibold text-blue-800 mb-2",
													children: "Tipuri de Cookie-uri:",
												}),
												e.jsxs("ul", {
													className:
														"list-disc list-inside space-y-1 text-blue-700 text-sm",
													children: [
														e.jsxs("li", {
															children: [
																e.jsx("strong", {
																	children: "Cookie-uri de sesiune:",
																}),
																" Se șterg când închideți browser-ul",
															],
														}),
														e.jsxs("li", {
															children: [
																e.jsx("strong", {
																	children: "Cookie-uri persistente:",
																}),
																" Rămân pe dispozitiv pentru o perioadă determinată",
															],
														}),
														e.jsxs("li", {
															children: [
																e.jsx("strong", {
																	children: "Cookie-uri first-party:",
																}),
																" Setate de site-ul pe care îl vizitați",
															],
														}),
														e.jsxs("li", {
															children: [
																e.jsx("strong", {
																	children: "Cookie-uri third-party:",
																}),
																" Setate de alte site-uri (ex: Google Analytics)",
															],
														}),
													],
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "2. Cum Folosim Cookie-urile",
										}),
										e.jsxs("div", {
											className: "grid grid-cols-1 md:grid-cols-2 gap-6",
											children: [
												e.jsxs("div", {
													className:
														"bg-green-50 border border-green-200 rounded-lg p-6",
													children: [
														e.jsxs("div", {
															className: "flex items-center space-x-3 mb-3",
															children: [
																e.jsx(Gn, {
																	className: "h-6 w-6 text-green-600",
																}),
																e.jsx("h3", {
																	className:
																		"text-lg font-semibold text-green-800",
																	children: "Cookie-uri Esențiale",
																}),
															],
														}),
														e.jsx("p", {
															className: "text-green-700 text-sm mb-3",
															children:
																"Aceste cookie-uri sunt absolut necesare pentru funcționarea site-ului și nu pot fi dezactivate.",
														}),
														e.jsxs("ul", {
															className:
																"list-disc list-inside space-y-1 text-green-700 text-sm",
															children: [
																e.jsx("li", {
																	children: "Autentificare și securitate",
																}),
																e.jsx("li", {
																	children: "Preferințele de limbă",
																}),
																e.jsx("li", {
																	children: "Coșul de cumpărături",
																}),
																e.jsx("li", {
																	children: "Setările de confidențialitate",
																}),
															],
														}),
													],
												}),
												e.jsxs("div", {
													className:
														"bg-blue-50 border border-blue-200 rounded-lg p-6",
													children: [
														e.jsxs("div", {
															className: "flex items-center space-x-3 mb-3",
															children: [
																e.jsx(xh, {
																	className: "h-6 w-6 text-blue-600",
																}),
																e.jsx("h3", {
																	className:
																		"text-lg font-semibold text-blue-800",
																	children: "Cookie-uri de Analiză",
																}),
															],
														}),
														e.jsx("p", {
															className: "text-blue-700 text-sm mb-3",
															children:
																"Ne ajută să înțelegem cum interactionați cu site-ul nostru.",
														}),
														e.jsxs("ul", {
															className:
																"list-disc list-inside space-y-1 text-blue-700 text-sm",
															children: [
																e.jsx("li", { children: "Google Analytics" }),
																e.jsx("li", {
																	children: "Statistici de vizitare",
																}),
																e.jsx("li", {
																	children: "Comportamentul utilizatorilor",
																}),
																e.jsx("li", {
																	children: "Optimizarea performanței",
																}),
															],
														}),
													],
												}),
												e.jsxs("div", {
													className:
														"bg-purple-50 border border-purple-200 rounded-lg p-6",
													children: [
														e.jsxs("div", {
															className: "flex items-center space-x-3 mb-3",
															children: [
																e.jsx(jh, {
																	className: "h-6 w-6 text-purple-600",
																}),
																e.jsx("h3", {
																	className:
																		"text-lg font-semibold text-purple-800",
																	children: "Cookie-uri de Marketing",
																}),
															],
														}),
														e.jsx("p", {
															className: "text-purple-700 text-sm mb-3",
															children:
																"Pentru afișarea de reclame relevante și măsurarea eficacității campaniilor.",
														}),
														e.jsxs("ul", {
															className:
																"list-disc list-inside space-y-1 text-purple-700 text-sm",
															children: [
																e.jsx("li", { children: "Google Ads" }),
																e.jsx("li", { children: "Facebook Pixel" }),
																e.jsx("li", { children: "Retargeting" }),
																e.jsx("li", {
																	children: "Măsurarea conversiilor",
																}),
															],
														}),
													],
												}),
												e.jsxs("div", {
													className:
														"bg-orange-50 border border-orange-200 rounded-lg p-6",
													children: [
														e.jsxs("div", {
															className: "flex items-center space-x-3 mb-3",
															children: [
																e.jsx(es, {
																	className: "h-6 w-6 text-orange-600",
																}),
																e.jsx("h3", {
																	className:
																		"text-lg font-semibold text-orange-800",
																	children: "Cookie-uri Funcționale",
																}),
															],
														}),
														e.jsx("p", {
															className: "text-orange-700 text-sm mb-3",
															children:
																"Îmbunătățesc funcționalitatea și personalizarea site-ului.",
														}),
														e.jsxs("ul", {
															className:
																"list-disc list-inside space-y-1 text-orange-700 text-sm",
															children: [
																e.jsx("li", { children: "Chat-ul live" }),
																e.jsx("li", {
																	children: "Videoclipuri integrate",
																}),
																e.jsx("li", { children: "Hărți interactive" }),
																e.jsx("li", {
																	children: "Preferințele utilizatorului",
																}),
															],
														}),
													],
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "3. Cookie-uri de la Terțe Părți",
										}),
										e.jsx("p", {
											className: "text-gray-700 mb-4",
											children:
												"Utilizăm servicii de la terțe părți care pot seta propriile cookie-uri pe dispozitivul dvs.:",
										}),
										e.jsxs("div", {
											className: "space-y-4",
											children: [
												e.jsxs("div", {
													className:
														"bg-gray-50 border border-gray-200 rounded-lg p-4",
													children: [
														e.jsx("h3", {
															className: "font-semibold text-gray-900 mb-2",
															children: "Google Analytics",
														}),
														e.jsx("p", {
															className: "text-gray-700 text-sm mb-2",
															children:
																"Pentru analizarea traficului și comportamentului utilizatorilor.",
														}),
														e.jsx("a", {
															href: "https://policies.google.com/privacy",
															target: "_blank",
															rel: "noopener noreferrer",
															className:
																"text-nexar-accent hover:underline text-sm",
															children:
																"Politica de confidențialitate Google →",
														}),
													],
												}),
												e.jsxs("div", {
													className:
														"bg-gray-50 border border-gray-200 rounded-lg p-4",
													children: [
														e.jsx("h3", {
															className: "font-semibold text-gray-900 mb-2",
															children: "Google Ads",
														}),
														e.jsx("p", {
															className: "text-gray-700 text-sm mb-2",
															children:
																"Pentru afișarea de reclame relevante și măsurarea performanței.",
														}),
														e.jsx("a", {
															href: "https://policies.google.com/technologies/ads",
															target: "_blank",
															rel: "noopener noreferrer",
															className:
																"text-nexar-accent hover:underline text-sm",
															children: "Despre reclamele Google →",
														}),
													],
												}),
												e.jsxs("div", {
													className:
														"bg-gray-50 border border-gray-200 rounded-lg p-4",
													children: [
														e.jsx("h3", {
															className: "font-semibold text-gray-900 mb-2",
															children: "Facebook Pixel",
														}),
														e.jsx("p", {
															className: "text-gray-700 text-sm mb-2",
															children:
																"Pentru optimizarea campaniilor publicitare pe Facebook și Instagram.",
														}),
														e.jsx("a", {
															href: "https://www.facebook.com/privacy/explanation",
															target: "_blank",
															rel: "noopener noreferrer",
															className:
																"text-nexar-accent hover:underline text-sm",
															children:
																"Politica de confidențialitate Facebook →",
														}),
													],
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "4. Cum să Gestionați Cookie-urile",
										}),
										e.jsxs("div", {
											className: "space-y-4 text-gray-700",
											children: [
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "4.1 Prin Site-ul Nostru",
												}),
												e.jsx("p", {
													children:
														"Puteți gestiona preferințele cookie-urilor folosind panoul de setări de mai sus sau prin banner-ul de cookie-uri care apare la prima vizită.",
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children: "4.2 Prin Browser",
												}),
												e.jsx("p", {
													children:
														"Majoritatea browser-elor vă permit să controlați cookie-urile prin setările lor:",
												}),
												e.jsxs("div", {
													className: "grid grid-cols-1 md:grid-cols-2 gap-4",
													children: [
														e.jsxs("div", {
															className:
																"bg-blue-50 border border-blue-200 rounded-lg p-4",
															children: [
																e.jsx("h4", {
																	className: "font-semibold text-blue-800 mb-2",
																	children: "Chrome",
																}),
																e.jsx("p", {
																	className: "text-blue-700 text-sm",
																	children:
																		"Setări → Confidențialitate și securitate → Cookie-uri și alte date de site",
																}),
															],
														}),
														e.jsxs("div", {
															className:
																"bg-orange-50 border border-orange-200 rounded-lg p-4",
															children: [
																e.jsx("h4", {
																	className:
																		"font-semibold text-orange-800 mb-2",
																	children: "Firefox",
																}),
																e.jsx("p", {
																	className: "text-orange-700 text-sm",
																	children:
																		"Opțiuni → Confidențialitate și securitate → Cookie-uri și date de site",
																}),
															],
														}),
														e.jsxs("div", {
															className:
																"bg-blue-50 border border-blue-200 rounded-lg p-4",
															children: [
																e.jsx("h4", {
																	className: "font-semibold text-blue-800 mb-2",
																	children: "Safari",
																}),
																e.jsx("p", {
																	className: "text-blue-700 text-sm",
																	children:
																		"Preferințe → Confidențialitate → Gestionarea datelor site-ului web",
																}),
															],
														}),
														e.jsxs("div", {
															className:
																"bg-green-50 border border-green-200 rounded-lg p-4",
															children: [
																e.jsx("h4", {
																	className:
																		"font-semibold text-green-800 mb-2",
																	children: "Edge",
																}),
																e.jsx("p", {
																	className: "text-green-700 text-sm",
																	children:
																		"Setări → Cookie-uri și permisiuni de site → Gestionarea și ștergerea cookie-urilor",
																}),
															],
														}),
													],
												}),
												e.jsx("h3", {
													className: "text-lg font-semibold",
													children:
														"4.3 Opt-out din Publicitatea Comportamentală",
												}),
												e.jsx("p", {
													children:
														"Puteți renunța la publicitatea comportamentală prin:",
												}),
												e.jsxs("ul", {
													className: "list-disc list-inside space-y-1 ml-4",
													children: [
														e.jsx("li", {
															children: e.jsx("a", {
																href: "https://www.youronlinechoices.com/",
																target: "_blank",
																rel: "noopener noreferrer",
																className: "text-nexar-accent hover:underline",
																children: "Your Online Choices",
															}),
														}),
														e.jsx("li", {
															children: e.jsx("a", {
																href: "https://optout.networkadvertising.org/",
																target: "_blank",
																rel: "noopener noreferrer",
																className: "text-nexar-accent hover:underline",
																children: "Network Advertising Initiative",
															}),
														}),
														e.jsx("li", {
															children: e.jsx("a", {
																href: "https://optout.aboutads.info/",
																target: "_blank",
																rel: "noopener noreferrer",
																className: "text-nexar-accent hover:underline",
																children: "Digital Advertising Alliance",
															}),
														}),
													],
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "5. Impactul Dezactivării Cookie-urilor",
										}),
										e.jsxs("div", {
											className:
												"bg-yellow-50 border border-yellow-200 rounded-lg p-6",
											children: [
												e.jsx("h3", {
													className: "font-semibold text-yellow-800 mb-3",
													children: "⚠️ Atenție",
												}),
												e.jsx("p", {
													className: "text-yellow-700 mb-3",
													children:
														"Dezactivarea anumitor cookie-uri poate afecta funcționarea site-ului:",
												}),
												e.jsxs("ul", {
													className:
														"list-disc list-inside space-y-1 text-yellow-700 text-sm",
													children: [
														e.jsx("li", {
															children: "Nu vă veți putea autentifica în cont",
														}),
														e.jsx("li", {
															children: "Preferințele nu vor fi salvate",
														}),
														e.jsx("li", {
															children:
																"Anumite funcții interactive nu vor funcționa",
														}),
														e.jsx("li", {
															children:
																"Experiența de navigare poate fi afectată",
														}),
													],
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "6. Actualizări ale Politicii",
										}),
										e.jsxs("div", {
											className: "space-y-4 text-gray-700",
											children: [
												e.jsx("p", {
													children:
														"Această politică poate fi actualizată periodic pentru a reflecta schimbările în utilizarea cookie-urilor sau în legislație.",
												}),
												e.jsxs("div", {
													className:
														"bg-blue-50 border border-blue-200 rounded-lg p-4",
													children: [
														e.jsx("h3", {
															className: "font-semibold text-blue-800 mb-2",
															children: "Cum vă notificăm:",
														}),
														e.jsxs("ul", {
															className:
																"list-disc list-inside space-y-1 text-blue-700 text-sm",
															children: [
																e.jsx("li", {
																	children: "Actualizarea datei de modificare",
																}),
																e.jsx("li", {
																	children: "Banner de notificare pe site",
																}),
																e.jsx("li", {
																	children:
																		"Email pentru modificări importante",
																}),
															],
														}),
													],
												}),
											],
										}),
									],
								}),
								e.jsxs("section", {
									className: "mb-8",
									children: [
										e.jsx("h2", {
											className: "text-2xl font-bold text-gray-900 mb-4",
											children: "7. Contact",
										}),
										e.jsxs("div", {
											className: "bg-nexar-accent/10 rounded-lg p-6",
											children: [
												e.jsx("p", {
													className: "text-gray-700 mb-4",
													children:
														"Pentru întrebări despre utilizarea cookie-urilor:",
												}),
												e.jsxs("div", {
													className: "space-y-2 text-gray-700",
													children: [
														e.jsxs("p", {
															children: [
																e.jsx("strong", { children: "Email:" }),
																" cookies@nexar.ro",
															],
														}),
														e.jsxs("p", {
															children: [
																e.jsx("strong", { children: "Telefon:" }),
																" 0790 454 647",
															],
														}),
														e.jsxs("p", {
															children: [
																e.jsx("strong", { children: "Adresă:" }),
																" Bulevardul Dem Radulescu 24, Râmnicu Vâlcea, România",
															],
														}),
													],
												}),
											],
										}),
									],
								}),
							],
						}),
						e.jsx("div", {
							className: "border-t border-gray-200 pt-6 mt-8",
							children: e.jsxs("div", {
								className:
									"flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0",
								children: [
									e.jsx("p", {
										className: "text-sm text-gray-600",
										children: "Ultima actualizare: 18 Decembrie 2024",
									}),
									e.jsx(ke, {
										to: "/",
										className:
											"bg-nexar-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors",
										onClick: () => window.scrollTo(0, 0),
										children: "Înapoi la Nexar",
									}),
								],
							}),
						}),
					],
				}),
			}),
		});
	},
	Wy = () => {
		const [i, s] = S.useState(!1),
			[a, l] = S.useState(!1),
			[c, u] = S.useState(!1),
			[h, f] = S.useState({}),
			[p, y] = S.useState({}),
			[g, v] = S.useState({}),
			[w, T] = S.useState(!1),
			D = async () => {
				s(!0), f({});
				try {
					const z = await Mm();
					f({
						success: z,
						message: z
							? "Conexiunea la Supabase a fost reparată cu succes!"
							: "Nu s-a putut repara conexiunea la Supabase",
					});
				} catch (z) {
					console.error("Eroare la repararea conexiunii:", z),
						f({ success: !1, message: "A apărut o eroare neașteptată" });
				} finally {
					s(!1);
				}
			},
			U = async () => {
				l(!0), y({});
				try {
					const z = await Dm();
					y({
						success: z.success,
						message: z.success
							? "Profilul a fost reparat cu succes!"
							: `Eroare la repararea profilului: ${z.error}`,
					});
				} catch (z) {
					console.error("Eroare la repararea profilului:", z),
						y({ success: !1, message: "A apărut o eroare neașteptată" });
				} finally {
					l(!1);
				}
			},
			A = () => {
				u(!0), v({});
				try {
					Um(),
						Fm(),
						v({
							success: !0,
							message:
								"Cookie-urile și cache-ul au fost reparate cu succes! Reîncarcă pagina pentru a vedea efectele.",
						});
				} catch (z) {
					console.error("Eroare la repararea cookie-urilor:", z),
						v({
							success: !1,
							message: "A apărut o eroare la repararea cookie-urilor",
						});
				} finally {
					u(!1);
				}
			};
		return e.jsx("div", {
			className: "min-h-screen bg-gray-50 py-8",
			children: e.jsx("div", {
				className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
				children: e.jsxs("div", {
					className: "bg-white rounded-2xl shadow-lg p-8",
					children: [
						e.jsxs("div", {
							className: "text-center mb-8",
							children: [
								e.jsx("div", {
									className:
										"w-16 h-16 bg-nexar-accent/10 rounded-full flex items-center justify-center mx-auto mb-4",
									children: e.jsx(Do, {
										className: "h-8 w-8 text-nexar-accent",
									}),
								}),
								e.jsx("h1", {
									className: "text-3xl font-bold text-gray-900 mb-4",
									children: "Reparare Conexiune Supabase",
								}),
								e.jsx("p", {
									className: "text-gray-600",
									children:
										"Această pagină te ajută să repari problemele de conexiune la Supabase",
								}),
							],
						}),
						e.jsx("div", {
							className:
								"bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8",
							children: e.jsxs("div", {
								className: "flex items-start space-x-3",
								children: [
									e.jsx(he, { className: "h-6 w-6 text-yellow-600 mt-0.5" }),
									e.jsxs("div", {
										children: [
											e.jsx("h3", {
												className: "font-semibold text-yellow-800 mb-2",
												children: "Atenție",
											}),
											e.jsx("p", {
												className: "text-yellow-700",
												children:
													'Această pagină este destinată reparării conexiunii la Supabase și a profilului utilizatorului. Folosește-o doar dacă întâmpini probleme de conectare sau dacă vezi mesajul "Deconectat" în aplicație.',
											}),
										],
									}),
								],
							}),
						}),
						e.jsxs("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
							children: [
								e.jsxs("div", {
									className: "bg-gray-50 rounded-xl p-6",
									children: [
										e.jsxs("div", {
											className: "flex items-center space-x-3 mb-4",
											children: [
												e.jsx(Do, { className: "h-6 w-6 text-nexar-accent" }),
												e.jsx("h3", {
													className: "text-lg font-semibold text-gray-900",
													children: "Reparare Conexiune",
												}),
											],
										}),
										e.jsx("p", {
											className: "text-gray-600 mb-6",
											children:
												"Repară conexiunea la Supabase și politicile RLS care cauzează erori.",
										}),
										e.jsx("button", {
											onClick: D,
											disabled: i,
											className:
												"w-full flex items-center justify-center space-x-2 bg-nexar-accent text-white px-4 py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
											children: i
												? e.jsxs(e.Fragment, {
														children: [
															e.jsx("div", {
																className:
																	"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin",
															}),
															e.jsx("span", { children: "Se repară..." }),
														],
												  })
												: e.jsxs(e.Fragment, {
														children: [
															e.jsx(cr, { className: "h-5 w-5" }),
															e.jsx("span", { children: "Repară Conexiunea" }),
														],
												  }),
										}),
										h.message &&
											e.jsx("div", {
												className: `mt-4 p-3 rounded-lg ${
													h.success
														? "bg-green-100 text-green-800"
														: "bg-red-100 text-red-800"
												}`,
												children: e.jsxs("div", {
													className: "flex items-center space-x-2",
													children: [
														h.success
															? e.jsx(yt, { className: "h-5 w-5" })
															: e.jsx(Ws, { className: "h-5 w-5" }),
														e.jsx("span", { children: h.message }),
													],
												}),
											}),
									],
								}),
								e.jsxs("div", {
									className: "bg-gray-50 rounded-xl p-6",
									children: [
										e.jsxs("div", {
											className: "flex items-center space-x-3 mb-4",
											children: [
												e.jsx(Gn, { className: "h-6 w-6 text-nexar-accent" }),
												e.jsx("h3", {
													className: "text-lg font-semibold text-gray-900",
													children: "Reparare Profil",
												}),
											],
										}),
										e.jsx("p", {
											className: "text-gray-600 mb-6",
											children:
												"Repară profilul utilizatorului curent dacă lipsește sau este incomplet.",
										}),
										e.jsx("button", {
											onClick: U,
											disabled: a,
											className:
												"w-full flex items-center justify-center space-x-2 bg-nexar-accent text-white px-4 py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
											children: a
												? e.jsxs(e.Fragment, {
														children: [
															e.jsx("div", {
																className:
																	"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin",
															}),
															e.jsx("span", { children: "Se repară..." }),
														],
												  })
												: e.jsxs(e.Fragment, {
														children: [
															e.jsx(cr, { className: "h-5 w-5" }),
															e.jsx("span", { children: "Repară Profilul" }),
														],
												  }),
										}),
										p.message &&
											e.jsx("div", {
												className: `mt-4 p-3 rounded-lg ${
													p.success
														? "bg-green-100 text-green-800"
														: "bg-red-100 text-red-800"
												}`,
												children: e.jsxs("div", {
													className: "flex items-center space-x-2",
													children: [
														p.success
															? e.jsx(yt, { className: "h-5 w-5" })
															: e.jsx(Ws, { className: "h-5 w-5" }),
														e.jsx("span", { children: p.message }),
													],
												}),
											}),
									],
								}),
							],
						}),
						e.jsxs("div", {
							className: "bg-blue-50 rounded-xl p-6 mb-8",
							children: [
								e.jsxs("div", {
									className: "flex items-center space-x-3 mb-4",
									children: [
										e.jsx(Mo, { className: "h-6 w-6 text-blue-600" }),
										e.jsx("h3", {
											className: "text-lg font-semibold text-gray-900",
											children: "Reparare Cookie-uri",
										}),
									],
								}),
								e.jsx("p", {
									className: "text-gray-600 mb-6",
									children:
										"Rezolvă problemele cu cookie-urile și curăță cache-ul browserului pentru a elimina erorile de cookie.",
								}),
								e.jsx("button", {
									onClick: A,
									disabled: c,
									className:
										"w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
									children: c
										? e.jsxs(e.Fragment, {
												children: [
													e.jsx("div", {
														className:
															"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin",
													}),
													e.jsx("span", { children: "Se repară..." }),
												],
										  })
										: e.jsxs(e.Fragment, {
												children: [
													e.jsx(Mo, { className: "h-5 w-5" }),
													e.jsx("span", { children: "Repară Cookie-urile" }),
												],
										  }),
								}),
								g.message &&
									e.jsx("div", {
										className: `mt-4 p-3 rounded-lg ${
											g.success
												? "bg-green-100 text-green-800"
												: "bg-red-100 text-red-800"
										}`,
										children: e.jsxs("div", {
											className: "flex items-center space-x-2",
											children: [
												g.success
													? e.jsx(yt, { className: "h-5 w-5" })
													: e.jsx(Ws, { className: "h-5 w-5" }),
												e.jsx("span", { children: g.message }),
											],
										}),
									}),
							],
						}),
						e.jsxs("div", {
							className: "bg-nexar-accent/10 rounded-xl p-6 mb-8",
							children: [
								e.jsxs("div", {
									className: "flex items-center space-x-3 mb-4",
									children: [
										e.jsx(yg, { className: "h-6 w-6 text-nexar-accent" }),
										e.jsx("h3", {
											className: "text-lg font-semibold text-gray-900",
											children: "Reparare Completă",
										}),
									],
								}),
								e.jsx("p", {
									className: "text-gray-600 mb-6",
									children:
										"Repară toate problemele într-un singur pas: conexiunea la Supabase, profilul utilizatorului și cookie-urile.",
								}),
								e.jsx(Pi, {
									onSuccess: () => T(!0),
									buttonText: "Repară Toate Problemele",
								}),
							],
						}),
						w &&
							e.jsx("div", {
								className:
									"bg-green-50 border border-green-200 rounded-lg p-6 mb-8 animate-scale-in",
								children: e.jsxs("div", {
									className: "flex items-start space-x-3",
									children: [
										e.jsx(yt, { className: "h-6 w-6 text-green-600 mt-0.5" }),
										e.jsxs("div", {
											children: [
												e.jsx("h3", {
													className: "font-semibold text-green-800 mb-2",
													children: "Reparare Completă!",
												}),
												e.jsx("p", {
													className: "text-green-700 mb-4",
													children:
														"Conexiunea la Supabase, profilul utilizatorului și cookie-urile au fost reparate cu succes. Acum poți continua să folosești aplicația fără probleme.",
												}),
												e.jsxs(ke, {
													to: "/",
													className:
														"inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors",
													children: [
														e.jsx("span", {
															children: "Mergi la Pagina Principală",
														}),
														e.jsx(rg, { className: "h-4 w-4" }),
													],
												}),
											],
										}),
									],
								}),
							}),
						e.jsxs("div", {
							className: "border-t border-gray-200 pt-6 mt-8",
							children: [
								e.jsx("h3", {
									className: "text-lg font-semibold text-gray-900 mb-4",
									children: "Instrucțiuni pentru Administrator",
								}),
								e.jsxs("div", {
									className: "bg-blue-50 border border-blue-200 rounded-lg p-6",
									children: [
										e.jsxs("div", {
											className: "flex items-start space-x-3 mb-4",
											children: [
												e.jsx(ag, {
													className: "h-6 w-6 text-blue-600 mt-0.5",
												}),
												e.jsxs("div", {
													children: [
														e.jsx("h4", {
															className: "font-semibold text-blue-800 mb-2",
															children: "Script SQL pentru Reparare Completă",
														}),
														e.jsx("p", {
															className: "text-blue-700 mb-4",
															children:
																"Dacă ești administrator și vrei să repari problemele pentru toți utilizatorii, copiază și rulează următorul script în SQL Editor din Supabase Dashboard:",
														}),
													],
												}),
											],
										}),
										e.jsx("div", {
											className:
												"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto max-h-96 text-sm",
											children: e.jsx("pre", {
												children: `-- Funcție pentru repararea politicilor RLS
CREATE OR REPLACE FUNCTION fix_rls_policies()
RETURNS boolean AS $$
BEGIN
  -- Dezactivează temporar RLS pentru a opri recursiunea
  ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;
  ALTER TABLE listings DISABLE ROW LEVEL SECURITY;
  ALTER TABLE favorites DISABLE ROW LEVEL SECURITY;
  ALTER TABLE messages DISABLE ROW LEVEL SECURITY;
  ALTER TABLE reviews DISABLE ROW LEVEL SECURITY;

  -- Șterge TOATE politicile existente care cauzează probleme
  DO $$
  DECLARE
      r RECORD;
  BEGIN
      -- Șterge toate politicile pentru profiles
      FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'profiles' AND schemaname = 'public') LOOP
          EXECUTE 'DROP POLICY IF EXISTS "' || r.policyname || '" ON public.profiles';
      END LOOP;
      
      -- Șterge toate politicile pentru listings
      FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'listings' AND schemaname = 'public') LOOP
          EXECUTE 'DROP POLICY IF EXISTS "' || r.policyname || '" ON public.listings';
      END LOOP;
      
      -- Șterge toate politicile pentru favorites
      FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'favorites' AND schemaname = 'public') LOOP
          EXECUTE 'DROP POLICY IF EXISTS "' || r.policyname || '" ON public.favorites';
      END LOOP;
      
      -- Șterge toate politicile pentru messages
      FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'messages' AND schemaname = 'public') LOOP
          EXECUTE 'DROP POLICY IF EXISTS "' || r.policyname || '" ON public.messages';
      END LOOP;
      
      -- Șterge toate politicile pentru reviews
      FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'reviews' AND schemaname = 'public') LOOP
          EXECUTE 'DROP POLICY IF EXISTS "' || r.policyname || '" ON public.reviews';
      END LOOP;
  END $$;

  -- Reactivează RLS
  ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
  ALTER TABLE listings ENABLE ROW LEVEL SECURITY;
  ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
  ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
  ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

  -- Creează politici SIMPLE pentru PROFILES (FĂRĂ RECURSIUNE)
  CREATE POLICY "profiles_select" ON profiles
    FOR SELECT USING (true);

  CREATE POLICY "profiles_update" ON profiles
    FOR UPDATE USING (auth.uid() = user_id);

  CREATE POLICY "profiles_insert" ON profiles
    FOR INSERT WITH CHECK (auth.uid() = user_id);

  -- Creează politici SIMPLE pentru LISTINGS (FĂRĂ RECURSIUNE)
  CREATE POLICY "listings_select" ON listings
    FOR SELECT USING (status = 'active');

  -- FIXED: More permissive insert policy for authenticated users
  CREATE POLICY "listings_insert" ON listings
    FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

  CREATE POLICY "listings_update" ON listings
    FOR UPDATE USING (
      auth.uid() IS NOT NULL AND 
      seller_id IN (
        SELECT id FROM profiles 
        WHERE user_id = auth.uid() 
        LIMIT 1
      )
    );

  CREATE POLICY "listings_delete" ON listings
    FOR DELETE USING (
      auth.uid() IS NOT NULL AND 
      seller_id IN (
        SELECT id FROM profiles 
        WHERE user_id = auth.uid() 
        LIMIT 1
      )
    );

  -- Politici pentru admin
  CREATE POLICY "admin_select_listings" ON listings
    FOR SELECT USING (
      auth.email() = 'admin@nexar.ro'
    );

  CREATE POLICY "admin_update_listings" ON listings
    FOR UPDATE USING (
      auth.email() = 'admin@nexar.ro'
    );

  CREATE POLICY "admin_delete_listings" ON listings
    FOR DELETE USING (
      auth.email() = 'admin@nexar.ro'
    );

  -- Creează politici SIMPLE pentru FAVORITES
  CREATE POLICY "favorites_select" ON favorites
    FOR SELECT USING (auth.uid() = user_id);

  CREATE POLICY "favorites_insert" ON favorites
    FOR INSERT WITH CHECK (auth.uid() = user_id);

  CREATE POLICY "favorites_delete" ON favorites
    FOR DELETE USING (auth.uid() = user_id);

  -- Creează politici SIMPLE pentru MESSAGES
  CREATE POLICY "messages_select" ON messages
    FOR SELECT USING (auth.uid() = sender_id OR auth.uid() = receiver_id);

  CREATE POLICY "messages_insert" ON messages
    FOR INSERT WITH CHECK (auth.uid() = sender_id);

  -- Creează politici SIMPLE pentru REVIEWS
  CREATE POLICY "reviews_select" ON reviews
    FOR SELECT USING (true);

  CREATE POLICY "reviews_insert" ON reviews
    FOR INSERT WITH CHECK (auth.uid() = reviewer_id);

  RETURN true;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Funcție pentru configurarea politicilor de storage
CREATE OR REPLACE FUNCTION configure_storage_policies()
RETURNS boolean AS $$
BEGIN
  -- Creează bucket-urile dacă nu există
  INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
  VALUES 
    ('listing-images', 'listing-images', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp']),
    ('profile-images', 'profile-images', true, 2097152, ARRAY['image/jpeg', 'image/png', 'image/webp'])
  ON CONFLICT (id) DO NOTHING;

  -- Activează RLS pentru storage
  ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

  -- Șterge politicile existente pentru storage
  DO $$
  DECLARE
      r RECORD;
  BEGIN
      FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'objects' AND schemaname = 'storage') LOOP
          EXECUTE 'DROP POLICY IF EXISTS "' || r.policyname || '" ON storage.objects';
      END LOOP;
  END $$;

  -- Politici simple pentru storage
  CREATE POLICY "storage_select_listing_images" ON storage.objects
    FOR SELECT USING (bucket_id = 'listing-images');

  CREATE POLICY "storage_select_profile_images" ON storage.objects
    FOR SELECT USING (bucket_id = 'profile-images');

  CREATE POLICY "storage_insert_listing_images" ON storage.objects
    FOR INSERT WITH CHECK (
      bucket_id = 'listing-images' AND 
      auth.uid() IS NOT NULL
    );

  CREATE POLICY "storage_insert_profile_images" ON storage.objects
    FOR INSERT WITH CHECK (
      bucket_id = 'profile-images' AND 
      auth.uid() IS NOT NULL
    );

  CREATE POLICY "storage_delete_listing_images" ON storage.objects
    FOR DELETE USING (
      bucket_id = 'listing-images' AND 
      auth.uid()::text = (storage.foldername(name))[1]
    );

  CREATE POLICY "storage_delete_profile_images" ON storage.objects
    FOR DELETE USING (
      bucket_id = 'profile-images' AND 
      auth.uid()::text = (storage.foldername(name))[1]
    );

  RETURN true;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Repară profilurile utilizatorilor existenți
DO $$
DECLARE
    u RECORD;
BEGIN
    FOR u IN (
        SELECT id, email FROM auth.users
        WHERE id NOT IN (SELECT user_id FROM profiles)
    ) LOOP
        INSERT INTO profiles (
            user_id,
            name,
            email,
            seller_type,
            is_admin
        ) VALUES (
            u.id,
            split_part(u.email, '@', 1),
            u.email,
            'individual',
            u.email = 'admin@nexar.ro'
        );
        RAISE NOTICE 'Created missing profile for user %', u.email;
    END LOOP;
END $$;`,
											}),
										}),
									],
								}),
							],
						}),
					],
				}),
			}),
		});
	},
	qy = () => (
		S.useEffect(() => {
			window.scrollTo(0, 0);
		}, []),
		e.jsx("div", {
			className: "min-h-screen bg-gray-50 py-16",
			children: e.jsx("div", {
				className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
				children: e.jsxs("div", {
					className: "bg-white rounded-2xl shadow-lg p-8",
					children: [
						e.jsx("h1", {
							className: "text-3xl font-bold text-gray-900 mb-6",
							children: "Despre Nexar",
						}),
						e.jsxs("div", {
							className: "prose max-w-none",
							children: [
								e.jsx("p", {
									className: "text-lg text-gray-700 mb-6",
									children:
										"Nexar este cel mai premium marketplace pentru motociclete din România, dedicat pasionaților de două roți care caută excelența în fiecare detaliu.",
								}),
								e.jsx("h2", {
									className: "text-2xl font-bold text-gray-900 mb-4",
									children: "Misiunea Noastră",
								}),
								e.jsx("p", {
									className: "text-gray-700 mb-6",
									children:
										"Conectăm vânzătorii și cumpărătorii de motociclete într-un mediu sigur, transparent și profesional. Oferim o platformă unde calitatea și încrederea sunt prioritățile noastre principale.",
								}),
								e.jsx("h2", {
									className: "text-2xl font-bold text-gray-900 mb-4",
									children: "De Ce Nexar?",
								}),
								e.jsxs("ul", {
									className:
										"list-disc list-inside text-gray-700 mb-6 space-y-2",
									children: [
										e.jsx("li", {
											children:
												"Verificarea manuală a fiecărui anunț pentru siguranța maximă",
										}),
										e.jsx("li", {
											children:
												"Sistem de rating și recenzii pentru transparență completă",
										}),
										e.jsx("li", {
											children:
												"Interfață intuitivă și experiență de utilizare superioară",
										}),
										e.jsx("li", {
											children:
												"Suport dedicat pentru toți utilizatorii noștri",
										}),
										e.jsx("li", {
											children:
												"Comunitate activă de peste 15,000 de pasionați",
										}),
									],
								}),
								e.jsx("h2", {
									className: "text-2xl font-bold text-gray-900 mb-4",
									children: "Echipa Noastră",
								}),
								e.jsx("p", {
									className: "text-gray-700 mb-6",
									children:
										"Suntem o echipă de profesioniști pasionați de motociclete, cu experiență vastă în domeniul automotive și tehnologic. Înțelegem nevoile comunității și lucrăm constant pentru a oferi cea mai bună experiență.",
								}),
								e.jsxs("div", {
									className: "bg-nexar-accent/10 rounded-lg p-6 mt-8",
									children: [
										e.jsx("h3", {
											className: "text-xl font-bold text-gray-900 mb-4",
											children: "Contactează-ne",
										}),
										e.jsxs("div", {
											className: "space-y-2 text-gray-700",
											children: [
												e.jsxs("div", {
													className: "flex items-center space-x-2",
													children: [
														e.jsx(lr, {
															className: "h-5 w-5 text-nexar-accent",
														}),
														e.jsxs("p", {
															children: [
																e.jsx("strong", { children: "Adresă:" }),
																" Bulevardul Dem Radulescu 24, Râmnicu Vâlcea",
															],
														}),
													],
												}),
												e.jsxs("div", {
													className: "flex items-center space-x-2",
													children: [
														e.jsx(ss, {
															className: "h-5 w-5 text-nexar-accent",
														}),
														e.jsxs("p", {
															children: [
																e.jsx("strong", { children: "Telefon:" }),
																" 0790 454 647",
															],
														}),
													],
												}),
												e.jsxs("div", {
													className: "flex items-center space-x-2",
													children: [
														e.jsx(Ys, {
															className: "h-5 w-5 text-nexar-accent",
														}),
														e.jsxs("p", {
															children: [
																e.jsx("strong", { children: "Email:" }),
																" contact@nexar.ro",
															],
														}),
													],
												}),
												e.jsxs("div", {
													className: "flex items-center space-x-2",
													children: [
														e.jsx(Yt, {
															className: "h-5 w-5 text-nexar-accent",
														}),
														e.jsxs("p", {
															children: [
																e.jsx("strong", { children: "Program:" }),
																" Luni - Vineri: 09:00 - 17:00",
															],
														}),
													],
												}),
											],
										}),
									],
								}),
								e.jsx("h2", {
									className: "text-2xl font-bold text-gray-900 mt-8 mb-4",
									children: "Partenerii Noștri",
								}),
								e.jsxs("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-6",
									children: [
										e.jsxs("div", {
											className:
												"border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow",
											children: [
												e.jsx("h3", {
													className: "font-bold text-gray-900 mb-2",
													children: "Dealeri Autorizați",
												}),
												e.jsx("p", {
													className: "text-gray-700 text-sm mb-2",
													children:
														"Colaborăm cu cei mai buni dealeri de motociclete din România pentru a vă oferi cele mai bune oferte.",
												}),
												e.jsxs(ke, {
													to: "/anunturi?sellerType=dealer",
													className:
														"text-nexar-accent hover:text-nexar-gold transition-colors text-sm font-medium flex items-center",
													children: [
														"Vezi dealeri ",
														e.jsx(ji, { className: "h-4 w-4 ml-1" }),
													],
												}),
											],
										}),
										e.jsxs("div", {
											className:
												"border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow",
											children: [
												e.jsx("h3", {
													className: "font-bold text-gray-900 mb-2",
													children: "Service-uri Recomandate",
												}),
												e.jsx("p", {
													className: "text-gray-700 text-sm mb-2",
													children:
														"Rețeaua noastră de service-uri partenere vă asigură întreținerea optimă a motocicletei.",
												}),
												e.jsxs("a", {
													href: "#",
													className:
														"text-nexar-accent hover:text-nexar-gold transition-colors text-sm font-medium flex items-center",
													children: [
														"Vezi service-uri ",
														e.jsx(ji, { className: "h-4 w-4 ml-1" }),
													],
												}),
											],
										}),
									],
								}),
								e.jsx("h2", {
									className: "text-2xl font-bold text-gray-900 mt-8 mb-4",
									children: "Valorile Noastre",
								}),
								e.jsxs("div", {
									className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8",
									children: [
										e.jsxs("div", {
											className: "bg-gray-50 p-4 rounded-lg text-center",
											children: [
												e.jsx(hm, {
													className: "h-8 w-8 text-nexar-accent mx-auto mb-2",
												}),
												e.jsx("h3", {
													className: "font-bold text-gray-900 mb-1",
													children: "Calitate",
												}),
												e.jsx("p", {
													className: "text-gray-700 text-sm",
													children:
														"Promovăm doar anunțuri de calitate, verificate manual.",
												}),
											],
										}),
										e.jsxs("div", {
											className: "bg-gray-50 p-4 rounded-lg text-center",
											children: [
												e.jsx(Kn, {
													className: "h-8 w-8 text-nexar-accent mx-auto mb-2",
												}),
												e.jsx("h3", {
													className: "font-bold text-gray-900 mb-1",
													children: "Comunitate",
												}),
												e.jsx("p", {
													className: "text-gray-700 text-sm",
													children:
														"Construim o comunitate unită de pasionați de motociclete.",
												}),
											],
										}),
										e.jsxs("div", {
											className: "bg-gray-50 p-4 rounded-lg text-center",
											children: [
												e.jsx(Yt, {
													className: "h-8 w-8 text-nexar-accent mx-auto mb-2",
												}),
												e.jsx("h3", {
													className: "font-bold text-gray-900 mb-1",
													children: "Promptitudine",
												}),
												e.jsx("p", {
													className: "text-gray-700 text-sm",
													children:
														"Răspundem rapid la toate solicitările utilizatorilor.",
												}),
											],
										}),
									],
								}),
								e.jsx("div", {
									className: "border-t border-gray-200 pt-6 mt-8",
									children: e.jsx(ke, {
										to: "/",
										className:
											"bg-nexar-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors inline-flex items-center",
										children: "Înapoi la Pagina Principală",
									}),
								}),
							],
						}),
					],
				}),
			}),
		})
	),
	Hy = () => {
		S.useEffect(() => {
			window.scrollTo(0, 0);
		}, []);
		const [i, s] = S.useState({
				name: "",
				email: "",
				phone: "",
				subject: "",
				message: "",
			}),
			[a, l] = S.useState({}),
			[c, u] = S.useState(!1),
			[h, f] = S.useState(!1),
			[p, y] = S.useState(null),
			g = (T) => {
				const { name: D, value: U } = T.target;
				s((A) => ({ ...A, [D]: U })), a[D] && l((A) => ({ ...A, [D]: "" }));
			},
			v = () => {
				const T = {};
				return (
					i.name.trim() || (T.name = "Numele este obligatoriu"),
					i.email.trim()
						? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.email) ||
						  (T.email = "Email-ul nu este valid")
						: (T.email = "Email-ul este obligatoriu"),
					i.subject.trim() || (T.subject = "Subiectul este obligatoriu"),
					i.message.trim()
						? i.message.trim().length < 10 &&
						  (T.message = "Mesajul trebuie să aibă cel puțin 10 caractere")
						: (T.message = "Mesajul este obligatoriu"),
					l(T),
					Object.keys(T).length === 0
				);
			},
			w = (T) => {
				T.preventDefault(),
					v() &&
						(u(!0),
						y(null),
						setTimeout(() => {
							u(!1),
								f(!0),
								s({ name: "", email: "", phone: "", subject: "", message: "" }),
								setTimeout(() => {
									f(!1);
								}, 5e3);
						}, 1500));
			};
		return e.jsx("div", {
			className: "min-h-screen bg-gray-50 py-16",
			children: e.jsx("div", {
				className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
				children: e.jsxs("div", {
					className: "bg-white rounded-2xl shadow-lg p-8",
					children: [
						e.jsx("h1", {
							className: "text-3xl font-bold text-gray-900 mb-6",
							children: "Contact",
						}),
						e.jsxs("div", {
							className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
							children: [
								e.jsxs("div", {
									children: [
										e.jsx("h2", {
											className: "text-xl font-bold text-gray-900 mb-4",
											children: "Informații de Contact",
										}),
										e.jsxs("div", {
											className: "space-y-4",
											children: [
												e.jsxs("div", {
													className: "flex items-start space-x-3",
													children: [
														e.jsx(lr, {
															className: "h-5 w-5 text-nexar-accent mt-0.5",
														}),
														e.jsxs("div", {
															children: [
																e.jsx("h3", {
																	className: "font-semibold text-gray-900",
																	children: "Adresă",
																}),
																e.jsx("p", {
																	className: "text-gray-700",
																	children:
																		"Bulevardul Dem Radulescu 24, Râmnicu Vâlcea",
																}),
															],
														}),
													],
												}),
												e.jsxs("div", {
													className: "flex items-start space-x-3",
													children: [
														e.jsx(ss, {
															className: "h-5 w-5 text-nexar-accent mt-0.5",
														}),
														e.jsxs("div", {
															children: [
																e.jsx("h3", {
																	className: "font-semibold text-gray-900",
																	children: "Telefon",
																}),
																e.jsx("p", {
																	className: "text-gray-700",
																	children: "0790 454 647",
																}),
															],
														}),
													],
												}),
												e.jsxs("div", {
													className: "flex items-start space-x-3",
													children: [
														e.jsx(Ys, {
															className: "h-5 w-5 text-nexar-accent mt-0.5",
														}),
														e.jsxs("div", {
															children: [
																e.jsx("h3", {
																	className: "font-semibold text-gray-900",
																	children: "Email",
																}),
																e.jsx("p", {
																	className: "text-gray-700",
																	children: "contact@nexar.ro",
																}),
															],
														}),
													],
												}),
												e.jsxs("div", {
													className: "flex items-start space-x-3",
													children: [
														e.jsx(Yt, {
															className: "h-5 w-5 text-nexar-accent mt-0.5",
														}),
														e.jsxs("div", {
															children: [
																e.jsx("h3", {
																	className: "font-semibold text-gray-900",
																	children: "Program",
																}),
																e.jsxs("div", {
																	className: "text-gray-700",
																	children: [
																		e.jsx("p", {
																			children: "Luni - Vineri: 09:00 - 17:00",
																		}),
																		e.jsx("p", { children: "Weekend: Închis" }),
																	],
																}),
															],
														}),
													],
												}),
											],
										}),
										e.jsxs("div", {
											className: "mt-8",
											children: [
												e.jsx("h2", {
													className: "text-xl font-bold text-gray-900 mb-4",
													children: "Locația Noastră",
												}),
												e.jsx("div", {
													className:
														"bg-gray-200 rounded-lg h-64 overflow-hidden",
													children: e.jsx("iframe", {
														src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.368629856657!2d24.36612687678971!3d45.10300196280406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474d8a1a5a9e2bb9%3A0x7e5d9a3db1f73eac!2sBulevardul%20Dem%20R%C4%83dulescu%2C%20R%C3%A2mnicu%20V%C3%A2lcea!5e0!3m2!1sro!2sro!4v1687954611544!5m2!1sro!2sro",
														width: "100%",
														height: "100%",
														style: { border: 0 },
														allowFullScreen: !0,
														loading: "lazy",
														referrerPolicy: "no-referrer-when-downgrade",
													}),
												}),
											],
										}),
									],
								}),
								e.jsxs("div", {
									children: [
										e.jsx("h2", {
											className: "text-xl font-bold text-gray-900 mb-4",
											children: "Trimite-ne un Mesaj",
										}),
										h &&
											e.jsx("div", {
												className:
													"mb-6 bg-green-50 border border-green-200 rounded-lg p-4 animate-fade-in",
												children: e.jsxs("div", {
													className: "flex items-start space-x-3",
													children: [
														e.jsx(yt, {
															className: "h-5 w-5 text-green-500 mt-0.5",
														}),
														e.jsxs("div", {
															children: [
																e.jsx("h3", {
																	className: "font-semibold text-green-800",
																	children: "Mesaj trimis cu succes!",
																}),
																e.jsx("p", {
																	className: "text-green-700 text-sm",
																	children:
																		"Îți mulțumim pentru mesaj. Te vom contacta în cel mai scurt timp posibil.",
																}),
															],
														}),
													],
												}),
											}),
										p &&
											e.jsx("div", {
												className:
													"mb-6 bg-red-50 border border-red-200 rounded-lg p-4 animate-fade-in",
												children: e.jsxs("div", {
													className: "flex items-start space-x-3",
													children: [
														e.jsx(he, {
															className: "h-5 w-5 text-red-500 mt-0.5",
														}),
														e.jsxs("div", {
															children: [
																e.jsx("h3", {
																	className: "font-semibold text-red-800",
																	children: "Eroare la trimiterea mesajului",
																}),
																e.jsx("p", {
																	className: "text-red-700 text-sm",
																	children: p,
																}),
															],
														}),
													],
												}),
											}),
										e.jsxs("form", {
											onSubmit: w,
											className: "space-y-4",
											children: [
												e.jsxs("div", {
													children: [
														e.jsx("label", {
															className:
																"block text-sm font-medium text-gray-700 mb-2",
															children: "Nume complet *",
														}),
														e.jsx("input", {
															type: "text",
															name: "name",
															value: i.name,
															onChange: g,
															className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																a.name ? "border-red-500" : "border-gray-300"
															}`,
															placeholder: "Numele tău",
														}),
														a.name &&
															e.jsx("p", {
																className: "mt-1 text-sm text-red-600",
																children: a.name,
															}),
													],
												}),
												e.jsxs("div", {
													children: [
														e.jsx("label", {
															className:
																"block text-sm font-medium text-gray-700 mb-2",
															children: "Email *",
														}),
														e.jsx("input", {
															type: "email",
															name: "email",
															value: i.email,
															onChange: g,
															className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																a.email ? "border-red-500" : "border-gray-300"
															}`,
															placeholder: "email@exemplu.com",
														}),
														a.email &&
															e.jsx("p", {
																className: "mt-1 text-sm text-red-600",
																children: a.email,
															}),
													],
												}),
												e.jsxs("div", {
													children: [
														e.jsx("label", {
															className:
																"block text-sm font-medium text-gray-700 mb-2",
															children: "Telefon",
														}),
														e.jsx("input", {
															type: "tel",
															name: "phone",
															value: i.phone,
															onChange: g,
															className:
																"w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent",
															placeholder: "0790 45 46 47",
														}),
													],
												}),
												e.jsxs("div", {
													children: [
														e.jsx("label", {
															className:
																"block text-sm font-medium text-gray-700 mb-2",
															children: "Subiect *",
														}),
														e.jsxs("select", {
															name: "subject",
															value: i.subject,
															onChange: g,
															className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																a.subject ? "border-red-500" : "border-gray-300"
															}`,
															children: [
																e.jsx("option", {
																	value: "",
																	children: "Selectează un subiect",
																}),
																e.jsx("option", {
																	value: "Întrebare generală",
																	children: "Întrebare generală",
																}),
																e.jsx("option", {
																	value: "Suport tehnic",
																	children: "Suport tehnic",
																}),
																e.jsx("option", {
																	value: "Probleme cu contul",
																	children: "Probleme cu contul",
																}),
																e.jsx("option", {
																	value: "Probleme cu anunțurile",
																	children: "Probleme cu anunțurile",
																}),
																e.jsx("option", {
																	value: "Sugestii",
																	children: "Sugestii",
																}),
																e.jsx("option", {
																	value: "Altele",
																	children: "Altele",
																}),
															],
														}),
														a.subject &&
															e.jsx("p", {
																className: "mt-1 text-sm text-red-600",
																children: a.subject,
															}),
													],
												}),
												e.jsxs("div", {
													children: [
														e.jsx("label", {
															className:
																"block text-sm font-medium text-gray-700 mb-2",
															children: "Mesaj *",
														}),
														e.jsx("textarea", {
															name: "message",
															value: i.message,
															onChange: g,
															rows: 5,
															className: `w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-nexar-accent focus:border-transparent ${
																a.message ? "border-red-500" : "border-gray-300"
															}`,
															placeholder: "Scrie mesajul tău aici...",
														}),
														a.message &&
															e.jsx("p", {
																className: "mt-1 text-sm text-red-600",
																children: a.message,
															}),
													],
												}),
												e.jsx("button", {
													type: "submit",
													disabled: c,
													className:
														"w-full bg-nexar-accent text-white py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed",
													children: c
														? e.jsxs(e.Fragment, {
																children: [
																	e.jsx("div", {
																		className:
																			"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin",
																	}),
																	e.jsx("span", { children: "Se trimite..." }),
																],
														  })
														: e.jsxs(e.Fragment, {
																children: [
																	e.jsx(fg, { className: "h-5 w-5" }),
																	e.jsx("span", { children: "Trimite Mesaj" }),
																],
														  }),
												}),
											],
										}),
									],
								}),
							],
						}),
					],
				}),
			}),
		});
	},
	Gy = () => {
		const [i, s] = S.useState(!0),
			[a, l] = S.useState(!1),
			[c, u] = S.useState(null);
		Nt();
		const h = Jt();
		S.useEffect(() => {
			window.scrollTo(0, 0), f();
		}, []);
		const f = async () => {
			try {
				s(!0), u(null);
				const p = new URLSearchParams(h.search),
					y = p.get("token"),
					g = p.get("type");
				if (!y) {
					u(
						"Link invalid sau expirat. Te rugăm să soliciți un nou link de confirmare.",
					),
						s(!1);
					return;
				}
				const { error: v } = await ae.auth.verifyOtp({
					token_hash: y,
					type: g === "email_change" ? "email_change" : "signup",
				});
				if (v) {
					console.error("Error confirming email:", v),
						u(
							"A apărut o eroare la confirmarea email-ului. Te rugăm să încerci din nou sau să contactezi suportul.",
						),
						s(!1);
					return;
				}
				l(!0), s(!1);
			} catch (p) {
				console.error("Error in confirmEmail:", p),
					u(
						"A apărut o eroare neașteptată. Te rugăm să încerci din nou sau să contactezi suportul.",
					),
					s(!1);
			}
		};
		return e.jsx("div", {
			className:
				"min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
			children: e.jsx("div", {
				className: "max-w-md w-full space-y-8",
				children: e.jsxs("div", {
					className: "bg-white rounded-2xl shadow-2xl p-8",
					children: [
						e.jsx("div", {
							className: "flex justify-center mb-6",
							children: e.jsx("img", {
								src: "/Nexar - logo_black & red.png",
								alt: "Nexar Logo",
								className: "h-24 w-auto",
								onError: (p) => {
									const y = p.currentTarget;
									y.src.includes("Nexar - logo_black & red.png")
										? (y.src = "/nexar-logo.png")
										: y.src.includes("nexar-logo.png")
										? (y.src = "/image.png")
										: (y.style.display = "none");
								},
							}),
						}),
						i
							? e.jsxs("div", {
									className: "text-center",
									children: [
										e.jsx("div", {
											className:
												"w-16 h-16 border-4 border-nexar-accent border-t-transparent rounded-full animate-spin mx-auto mb-4",
										}),
										e.jsx("h2", {
											className: "text-xl font-bold text-gray-900 mb-2",
											children: "Se confirmă email-ul...",
										}),
										e.jsx("p", {
											className: "text-gray-600",
											children: "Te rugăm să aștepți câteva momente.",
										}),
									],
							  })
							: a
							? e.jsxs("div", {
									className: "text-center",
									children: [
										e.jsx("div", {
											className:
												"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",
											children: e.jsx(yt, {
												className: "h-8 w-8 text-green-500",
											}),
										}),
										e.jsx("h2", {
											className: "text-xl font-bold text-gray-900 mb-2",
											children: "Cont confirmat cu succes!",
										}),
										e.jsx("p", {
											className: "text-gray-600 mb-6",
											children:
												"Bine ai venit! Contul tău Nexar a fost confirmat cu succes. Te poți bucura acum de toate funcționalitățile platformei. Dacă ai nevoie de asistență sau ai întrebări, echipa noastră de suport îți stă la dispoziție.",
										}),
										e.jsxs("div", {
											className:
												"flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3",
											children: [
												e.jsxs(ke, {
													to: "/auth",
													className:
														"flex-1 bg-nexar-accent text-white py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors flex items-center justify-center space-x-2",
													children: [
														e.jsx(Fo, { className: "h-5 w-5" }),
														e.jsx("span", { children: "Conectează-te" }),
													],
												}),
												e.jsxs(ke, {
													to: "/",
													className:
														"flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2",
													children: [
														e.jsx(wi, { className: "h-5 w-5" }),
														e.jsx("span", { children: "Pagina Principală" }),
													],
												}),
											],
										}),
									],
							  })
							: e.jsxs("div", {
									className: "text-center",
									children: [
										e.jsx("div", {
											className:
												"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",
											children: e.jsx(he, {
												className: "h-8 w-8 text-red-500",
											}),
										}),
										e.jsx("h2", {
											className: "text-xl font-bold text-gray-900 mb-2",
											children: "Eroare la confirmarea contului",
										}),
										e.jsx("p", {
											className: "text-gray-600 mb-6",
											children:
												c ||
												"A apărut o eroare la confirmarea contului tău. Te rugăm să încerci din nou sau să contactezi suportul.",
										}),
										e.jsxs("div", {
											className:
												"flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3",
											children: [
												e.jsxs(ke, {
													to: "/auth",
													className:
														"flex-1 bg-nexar-accent text-white py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors flex items-center justify-center space-x-2",
													children: [
														e.jsx(Fo, { className: "h-5 w-5" }),
														e.jsx("span", {
															children: "Încearcă să te conectezi",
														}),
													],
												}),
												e.jsxs(ke, {
													to: "/",
													className:
														"flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2",
													children: [
														e.jsx(wi, { className: "h-5 w-5" }),
														e.jsx("span", { children: "Pagina Principală" }),
													],
												}),
											],
										}),
									],
							  }),
					],
				}),
			}),
		});
	},
	Ky = () => {
		const [i, s] = S.useState(""),
			[a, l] = S.useState(""),
			[c, u] = S.useState(!1),
			[h, f] = S.useState(!1),
			[p, y] = S.useState(!1),
			[g, v] = S.useState(!1),
			[w, T] = S.useState(null),
			[D, U] = S.useState({}),
			A = Nt(),
			z = Jt();
		S.useEffect(() => {
			window.scrollTo(0, 0);
			const X = new URLSearchParams(z.search),
				ne = X.get("token"),
				le = X.get("type");
			(!ne || le !== "recovery") &&
				T(
					"Link invalid sau expirat. Te rugăm să soliciți un nou link de resetare a parolei.",
				);
		}, [z]);
		const ee = (X) =>
				X
					? X.length < 8
						? "Parola trebuie să aibă cel puțin 8 caractere"
						: /(?=.*[a-z])/.test(X)
						? /(?=.*[A-Z])/.test(X)
							? /(?=.*\d)/.test(X)
								? ""
								: "Parola trebuie să conțină cel puțin o cifră"
							: "Parola trebuie să conțină cel puțin o literă mare"
						: "Parola trebuie să conțină cel puțin o literă mică"
					: "Parola este obligatorie",
			N = () => {
				const X = {},
					ne = ee(i);
				return (
					ne && (X.password = ne),
					i !== a && (X.confirmPassword = "Parolele nu coincid"),
					U(X),
					Object.keys(X).length === 0
				);
			},
			G = async (X) => {
				if ((X.preventDefault(), !!N()))
					try {
						if ((y(!0), T(null), !new URLSearchParams(z.search).get("token"))) {
							T(
								"Link invalid sau expirat. Te rugăm să soliciți un nou link de resetare a parolei.",
							),
								y(!1);
							return;
						}
						const { error: ie } = await ae.auth.updateUser({ password: i });
						if (ie) {
							console.error("Error resetting password:", ie),
								T(
									ie.message ||
										"A apărut o eroare la resetarea parolei. Te rugăm să încerci din nou.",
								),
								y(!1);
							return;
						}
						v(!0),
							y(!1),
							setTimeout(() => {
								A("/auth");
							}, 3e3);
					} catch (ne) {
						console.error("Error in handleResetPassword:", ne),
							T(
								"A apărut o eroare neașteptată. Te rugăm să încerci din nou sau să contactezi suportul.",
							),
							y(!1);
					}
			};
		return e.jsx("div", {
			className:
				"min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
			children: e.jsx("div", {
				className: "max-w-md w-full space-y-8",
				children: e.jsxs("div", {
					className: "bg-white rounded-2xl shadow-2xl p-8",
					children: [
						e.jsx("div", {
							className: "flex justify-center mb-6",
							children: e.jsx("img", {
								loading: "lazy",
								src: "/Nexar - logo_black & red.png",
								alt: "Nexar Logo",
								className: "h-24 w-auto",
								onError: (X) => {
									const ne = X.currentTarget;
									ne.src.includes("Nexar - logo_black & red.png")
										? (ne.src = "/nexar-logo.png")
										: ne.src.includes("nexar-logo.png")
										? (ne.src = "/image.png")
										: (ne.style.display = "none");
								},
							}),
						}),
						e.jsx("h2", {
							className: "text-2xl font-bold text-gray-900 mb-4 text-center",
							children: "Resetare Parolă",
						}),
						w &&
							e.jsx("div", {
								className:
									"mb-6 bg-red-50 border border-red-200 rounded-lg p-4",
								children: e.jsxs("div", {
									className: "flex items-start space-x-3",
									children: [
										e.jsx(he, { className: "h-5 w-5 text-red-500 mt-0.5" }),
										e.jsxs("div", {
											children: [
												e.jsx("p", { className: "text-red-700", children: w }),
												e.jsx(ke, {
													to: "/auth",
													className:
														"text-nexar-accent hover:text-nexar-gold transition-colors text-sm font-medium mt-2 inline-block",
													children: "Înapoi la pagina de autentificare",
												}),
											],
										}),
									],
								}),
							}),
						g
							? e.jsxs("div", {
									className: "text-center",
									children: [
										e.jsx("div", {
											className:
												"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",
											children: e.jsx(yt, {
												className: "h-8 w-8 text-green-500",
											}),
										}),
										e.jsx("h3", {
											className: "text-xl font-bold text-gray-900 mb-2",
											children: "Parolă resetată cu succes!",
										}),
										e.jsx("p", {
											className: "text-gray-600 mb-6",
											children:
												"Parola ta a fost actualizată. Vei fi redirecționat către pagina de autentificare în câteva secunde.",
										}),
										e.jsxs("div", {
											className:
												"flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3",
											children: [
												e.jsxs(ke, {
													to: "/auth",
													className:
														"flex-1 bg-nexar-accent text-white py-3 rounded-lg font-semibold hover:bg-nexar-gold transition-colors flex items-center justify-center space-x-2",
													children: [
														e.jsx(Fo, { className: "h-5 w-5" }),
														e.jsx("span", { children: "Conectează-te" }),
													],
												}),
												e.jsxs(ke, {
													to: "/",
													className:
														"flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2",
													children: [
														e.jsx(wi, { className: "h-5 w-5" }),
														e.jsx("span", { children: "Pagina Principală" }),
													],
												}),
											],
										}),
									],
							  })
							: e.jsxs("form", {
									onSubmit: G,
									className: "space-y-6",
									children: [
										e.jsxs("div", {
											children: [
												e.jsx("label", {
													className:
														"block text-sm font-medium text-gray-700 mb-2",
													children: "Parolă Nouă",
												}),
												e.jsxs("div", {
													className: "relative",
													children: [
														e.jsx("input", {
															type: c ? "text" : "password",
															value: i,
															onChange: (X) => s(X.target.value),
															className: `w-full pl-10 pr-10 py-3 border rounded-xl focus:ring-2 focus:ring-nexar-accent focus:border-transparent transition-colors ${
																D.password
																	? "border-red-500"
																	: "border-gray-300"
															}`,
															placeholder: "Minim 8 caractere",
														}),
														e.jsx(Ir, {
															className:
																"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5",
														}),
														e.jsx("button", {
															type: "button",
															onClick: () => u(!c),
															className:
																"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",
															children: c
																? e.jsx(Uo, { className: "h-5 w-5" })
																: e.jsx(or, { className: "h-5 w-5" }),
														}),
													],
												}),
												D.password &&
													e.jsxs("p", {
														className:
															"mt-1 text-sm text-red-600 flex items-center",
														children: [
															e.jsx(he, { className: "h-4 w-4 mr-1" }),
															D.password,
														],
													}),
												e.jsx("p", {
													className: "mt-1 text-xs text-gray-500",
													children:
														"Parola trebuie să aibă minim 8 caractere, o literă mare, o literă mică și o cifră.",
												}),
											],
										}),
										e.jsxs("div", {
											children: [
												e.jsx("label", {
													className:
														"block text-sm font-medium text-gray-700 mb-2",
													children: "Confirmă Parola",
												}),
												e.jsxs("div", {
													className: "relative",
													children: [
														e.jsx("input", {
															type: h ? "text" : "password",
															value: a,
															onChange: (X) => l(X.target.value),
															className: `w-full pl-10 pr-10 py-3 border rounded-xl focus:ring-2 focus:ring-nexar-accent focus:border-transparent transition-colors ${
																D.confirmPassword
																	? "border-red-500"
																	: "border-gray-300"
															}`,
															placeholder: "Repetă parola nouă",
														}),
														e.jsx(Ir, {
															className:
																"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5",
														}),
														e.jsx("button", {
															type: "button",
															onClick: () => f(!h),
															className:
																"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",
															children: h
																? e.jsx(Uo, { className: "h-5 w-5" })
																: e.jsx(or, { className: "h-5 w-5" }),
														}),
													],
												}),
												D.confirmPassword &&
													e.jsxs("p", {
														className:
															"mt-1 text-sm text-red-600 flex items-center",
														children: [
															e.jsx(he, { className: "h-4 w-4 mr-1" }),
															D.confirmPassword,
														],
													}),
											],
										}),
										e.jsx("button", {
											type: "submit",
											disabled: p,
											className:
												"w-full bg-nexar-accent text-white py-3 rounded-xl font-semibold hover:bg-nexar-gold transition-colors transform hover:scale-105 duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
											children: p
												? e.jsxs("div", {
														className:
															"flex items-center justify-center space-x-2",
														children: [
															e.jsx("div", {
																className:
																	"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin",
															}),
															e.jsx("span", { children: "Se procesează..." }),
														],
												  })
												: "Resetează Parola",
										}),
										e.jsx("div", {
											className: "text-center mt-4",
											children: e.jsx(ke, {
												to: "/auth",
												className:
													"text-nexar-accent hover:text-nexar-gold transition-colors text-sm",
												children: "Înapoi la pagina de autentificare",
											}),
										}),
									],
							  }),
					],
				}),
			}),
		});
	};
function Yy() {
	const { pathname: i } = Jt();
	return (
		S.useEffect(() => {
			window.scrollTo(0, 0);
		}, [i]),
		null
	);
}
function Jy() {
	return e.jsxs(Kx, {
		future: { v7_startTransition: !0, v7_relativeSplatPath: !0 },
		children: [
			e.jsx(Yy, {}),
			e.jsxs("div", {
				className: "min-h-screen bg-nexar-light flex flex-col",
				children: [
					e.jsx(Cy, {}),
					e.jsx("main", {
						className: "flex-1",
						children: e.jsxs(Fx, {
							children: [
								e.jsx(rt, { path: "/", element: e.jsx(Ty, {}) }),
								e.jsx(rt, { path: "/anunt/:id", element: e.jsx(Ry, {}) }),
								e.jsx(rt, { path: "/adauga-anunt", element: e.jsx(My, {}) }),
								e.jsx(rt, {
									path: "/editeaza-anunt/:id",
									element: e.jsx(Dy, {}),
								}),
								e.jsx(rt, { path: "/profil", element: e.jsx(Qh, {}) }),
								e.jsx(rt, { path: "/profil/:id", element: e.jsx(Qh, {}) }),
								e.jsx(rt, { path: "/admin", element: e.jsx(Uy, {}) }),
								e.jsx(rt, { path: "/auth", element: e.jsx(Fy, {}) }),
								e.jsx(rt, { path: "/auth/confirm", element: e.jsx(Gy, {}) }),
								e.jsx(rt, {
									path: "/auth/reset-password",
									element: e.jsx(Ky, {}),
								}),
								e.jsx(rt, { path: "/despre", element: e.jsx(qy, {}) }),
								e.jsx(rt, { path: "/contact", element: e.jsx(Hy, {}) }),
								e.jsx(rt, { path: "/termeni", element: e.jsx(By, {}) }),
								e.jsx(rt, {
									path: "/confidentialitate",
									element: e.jsx($y, {}),
								}),
								e.jsx(rt, { path: "/cookies", element: e.jsx(Vy, {}) }),
								e.jsx(rt, { path: "/fix-supabase", element: e.jsx(Wy, {}) }),
							],
						}),
					}),
					e.jsx(Py, {}),
				],
			}),
		],
	});
}
Yp.createRoot(document.getElementById("root")).render(
	e.jsx(S.StrictMode, { children: e.jsx(Jy, {}) }),
);
