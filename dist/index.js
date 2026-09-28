#!/usr/bin/env node
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/sisteransi@1.0.5/node_modules/sisteransi/src/index.js
var require_src = __commonJS({
  "node_modules/.pnpm/sisteransi@1.0.5/node_modules/sisteransi/src/index.js"(exports, module) {
    "use strict";
    var ESC2 = "\x1B";
    var CSI2 = `${ESC2}[`;
    var beep = "\x07";
    var cursor3 = {
      to(x4, y5) {
        if (!y5) return `${CSI2}${x4 + 1}G`;
        return `${CSI2}${y5 + 1};${x4 + 1}H`;
      },
      move(x4, y5) {
        let ret = "";
        if (x4 < 0) ret += `${CSI2}${-x4}D`;
        else if (x4 > 0) ret += `${CSI2}${x4}C`;
        if (y5 < 0) ret += `${CSI2}${-y5}A`;
        else if (y5 > 0) ret += `${CSI2}${y5}B`;
        return ret;
      },
      up: (count = 1) => `${CSI2}${count}A`,
      down: (count = 1) => `${CSI2}${count}B`,
      forward: (count = 1) => `${CSI2}${count}C`,
      backward: (count = 1) => `${CSI2}${count}D`,
      nextLine: (count = 1) => `${CSI2}E`.repeat(count),
      prevLine: (count = 1) => `${CSI2}F`.repeat(count),
      left: `${CSI2}G`,
      hide: `${CSI2}?25l`,
      show: `${CSI2}?25h`,
      save: `${ESC2}7`,
      restore: `${ESC2}8`
    };
    var scroll = {
      up: (count = 1) => `${CSI2}S`.repeat(count),
      down: (count = 1) => `${CSI2}T`.repeat(count)
    };
    var erase3 = {
      screen: `${CSI2}2J`,
      up: (count = 1) => `${CSI2}1J`.repeat(count),
      down: (count = 1) => `${CSI2}J`.repeat(count),
      line: `${CSI2}2K`,
      lineEnd: `${CSI2}K`,
      lineStart: `${CSI2}1K`,
      lines(count) {
        let clear = "";
        for (let i4 = 0; i4 < count; i4++)
          clear += this.line + (i4 < count - 1 ? cursor3.up() : "");
        if (count)
          clear += cursor3.left;
        return clear;
      }
    };
    module.exports = { cursor: cursor3, scroll, erase: erase3, beep };
  }
});

// node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.js
var require_picocolors = __commonJS({
  "node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.js"(exports, module) {
    var p3 = process || {};
    var argv = p3.argv || [];
    var env2 = p3.env || {};
    var isColorSupported = !(!!env2.NO_COLOR || argv.includes("--no-color")) && (!!env2.FORCE_COLOR || argv.includes("--color") || p3.platform === "win32" || (p3.stdout || {}).isTTY && env2.TERM !== "dumb" || !!env2.CI);
    var formatter = (open, close, replace = open) => (input) => {
      let string = "" + input, index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    var replaceClose = (string, close, replace, index) => {
      let result = "", cursor3 = 0;
      do {
        result += string.substring(cursor3, index) + replace;
        cursor3 = index + close.length;
        index = string.indexOf(close, cursor3);
      } while (~index);
      return result + string.substring(cursor3);
    };
    var createColors = (enabled = isColorSupported) => {
      let f3 = enabled ? formatter : () => String;
      return {
        isColorSupported: enabled,
        reset: f3("\x1B[0m", "\x1B[0m"),
        bold: f3("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
        dim: f3("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
        italic: f3("\x1B[3m", "\x1B[23m"),
        underline: f3("\x1B[4m", "\x1B[24m"),
        inverse: f3("\x1B[7m", "\x1B[27m"),
        hidden: f3("\x1B[8m", "\x1B[28m"),
        strikethrough: f3("\x1B[9m", "\x1B[29m"),
        black: f3("\x1B[30m", "\x1B[39m"),
        red: f3("\x1B[31m", "\x1B[39m"),
        green: f3("\x1B[32m", "\x1B[39m"),
        yellow: f3("\x1B[33m", "\x1B[39m"),
        blue: f3("\x1B[34m", "\x1B[39m"),
        magenta: f3("\x1B[35m", "\x1B[39m"),
        cyan: f3("\x1B[36m", "\x1B[39m"),
        white: f3("\x1B[37m", "\x1B[39m"),
        gray: f3("\x1B[90m", "\x1B[39m"),
        bgBlack: f3("\x1B[40m", "\x1B[49m"),
        bgRed: f3("\x1B[41m", "\x1B[49m"),
        bgGreen: f3("\x1B[42m", "\x1B[49m"),
        bgYellow: f3("\x1B[43m", "\x1B[49m"),
        bgBlue: f3("\x1B[44m", "\x1B[49m"),
        bgMagenta: f3("\x1B[45m", "\x1B[49m"),
        bgCyan: f3("\x1B[46m", "\x1B[49m"),
        bgWhite: f3("\x1B[47m", "\x1B[49m"),
        blackBright: f3("\x1B[90m", "\x1B[39m"),
        redBright: f3("\x1B[91m", "\x1B[39m"),
        greenBright: f3("\x1B[92m", "\x1B[39m"),
        yellowBright: f3("\x1B[93m", "\x1B[39m"),
        blueBright: f3("\x1B[94m", "\x1B[39m"),
        magentaBright: f3("\x1B[95m", "\x1B[39m"),
        cyanBright: f3("\x1B[96m", "\x1B[39m"),
        whiteBright: f3("\x1B[97m", "\x1B[39m"),
        bgBlackBright: f3("\x1B[100m", "\x1B[49m"),
        bgRedBright: f3("\x1B[101m", "\x1B[49m"),
        bgGreenBright: f3("\x1B[102m", "\x1B[49m"),
        bgYellowBright: f3("\x1B[103m", "\x1B[49m"),
        bgBlueBright: f3("\x1B[104m", "\x1B[49m"),
        bgMagentaBright: f3("\x1B[105m", "\x1B[49m"),
        bgCyanBright: f3("\x1B[106m", "\x1B[49m"),
        bgWhiteBright: f3("\x1B[107m", "\x1B[49m")
      };
    };
    module.exports = createColors();
    module.exports.createColors = createColors;
  }
});

// node_modules/.pnpm/degit@3.10.0/node_modules/degit/dist/utils-DTdqQ6KU.js
import { createRequire as e } from "module";
import t2 from "fs";
import n3 from "path";
import r2 from "os";
import i2 from "https";
import * as a2 from "url";
function A(e4, t4) {
  let r3 = n3.resolve(e4, t4), i4 = n3.relative(e4, r3);
  if (!(i4 === `` || i4.startsWith(`..`) || n3.isAbsolute(i4))) return r3;
}
function j(e4, n4) {
  try {
    let n5 = t2.lstatSync(e4);
    if (n5.isSymbolicLink()) throw new k(`destination is a symlink: ${e4}`, { code: `ENOTDIR` });
    if (!n5.isDirectory()) throw new k(`destination is not a directory: ${e4}`, { code: `ENOTDIR` });
    return true;
  } catch (e5) {
    if (e5 instanceof k) throw e5;
    if ((e5 instanceof Error ? e5.code : void 0) !== `ENOENT`) throw new k(`could not stat destination: ${e5 instanceof Error ? e5.message : String(e5)}`, { code: `COULD_NOT_STAT`, original: e5 });
  }
  if (!n4) throw new k(`destination does not exist: ${e4}`, { code: `MISSING_DEST` });
  return false;
}
function M(e4) {
  try {
    return JSON.parse(t2.readFileSync(e4, `utf8`));
  } catch {
    return null;
  }
}
function N(e4) {
  t2.mkdirSync(e4, { recursive: true });
}
function P(e4, n4, r3) {
  return new Promise((o3, s3) => {
    let c4 = e4;
    if (r3) {
      let t4 = a2.parse(e4);
      c4 = { agent: (0, D.default)(r3), hostname: t4.host, path: t4.path };
    }
    i2.get(c4, (e5) => {
      let i4 = e5.statusCode;
      i4 >= 400 ? (e5.resume(), s3({ code: i4, message: e5.statusMessage })) : i4 >= 300 ? (e5.resume(), P(e5.headers.location, n4, r3).then(o3, s3)) : e5.pipe(t2.createWriteStream(n4)).on(`finish`, () => o3()).on(`error`, s3);
    }).on(`error`, s3);
  });
}
function F(e4, r3) {
  let i4 = n3.join(e4, `tmp`);
  t2.rmSync(i4, { force: true, recursive: true }), N(i4);
  let a4 = [];
  for (let e5 of t2.readdirSync(r3)) {
    let o3 = n3.join(r3, e5), s3 = n3.join(i4, e5), c4 = t2.lstatSync(o3), l4 = c4.isDirectory();
    if (c4.isSymbolicLink()) {
      let e6 = t2.readlinkSync(o3), n4 = false;
      try {
        n4 = t2.statSync(o3).isDirectory();
      } catch {
      }
      t2.symlinkSync(e6, s3, n4 ? `dir` : `file`);
    } else l4 ? t2.cpSync(o3, s3, { recursive: true, dereference: false }) : t2.copyFileSync(o3, s3);
    a4.push({ filePath: o3, isDir: l4 });
  }
  return a4;
}
function I2(e4) {
  for (let { filePath: n4, isDir: r3 } of e4) t2.rmSync(n4, { force: true, recursive: r3 });
}
function L(e4, r3, i4 = true) {
  let a4 = n3.join(e4, `tmp`), o3 = new Set(t2.readdirSync(a4));
  if (!i4) for (let e5 of t2.readdirSync(r3)) o3.has(e5) || t2.rmSync(n3.join(r3, e5), { force: true, recursive: true });
  let s3 = !i4, c4 = [], l4 = [], u5 = [];
  for (let e5 of o3) {
    let r4 = t2.lstatSync(n3.join(a4, e5));
    r4.isDirectory() ? c4.push(e5) : r4.isSymbolicLink() ? l4.push(e5) : u5.push(e5);
  }
  for (let e5 of [...c4, ...l4, ...u5]) {
    let i5 = n3.join(a4, e5), o4 = n3.join(r3, e5);
    c4.includes(e5) ? (z(o4, true, false, s3), t2.cpSync(i5, o4, { force: true, recursive: true, dereference: false }), t2.rmSync(i5, { force: true, recursive: true })) : l4.includes(e5) ? R2(i5, o4, a4) : (z(o4, false, false, s3), t2.copyFileSync(i5, o4), t2.unlinkSync(i5));
  }
  t2.rmSync(a4, { force: true, recursive: true });
}
function R2(e4, r3, i4) {
  z(r3, false, true, false);
  let a4 = t2.readlinkSync(e4), o3 = n3.isAbsolute(a4) ? a4 : n3.resolve(n3.dirname(e4), a4), s3 = n3.isAbsolute(a4) ? a4 : n3.resolve(n3.dirname(r3), a4), c4 = n3.relative(i4, o3), l4 = !c4.startsWith(`..`) && !n3.isAbsolute(c4), u5 = false;
  try {
    u5 = t2.statSync(s3).isDirectory();
  } catch {
    if (l4) try {
      u5 = t2.statSync(o3).isDirectory();
    } catch {
    }
  }
  t2.symlinkSync(a4, r3, u5 ? `dir` : `file`), t2.unlinkSync(e4);
}
function z(e4, n4, r3 = false, i4 = false) {
  let a4 = false, o3 = false, s3 = false;
  try {
    let n5 = t2.lstatSync(e4);
    o3 = n5.isDirectory(), s3 = n5.isSymbolicLink(), a4 = true;
  } catch {
  }
  a4 && (i4 || s3 || o3 !== n4 || r3) && t2.rmSync(e4, { force: true, recursive: true });
}
function B({ env: e4 = process.env, homedir: t4 = r2.homedir(), platform: i4 = process.platform } = {}) {
  return i4 === `win32` ? n3.join(e4.LOCALAPPDATA ?? n3.join(t4, `AppData`, `Local`), `degit`) : i4 === `darwin` ? n3.join(t4, `Library`, `Caches`, `degit`) : n3.join(e4.XDG_CACHE_HOME ?? n3.join(t4, `.cache`), `degit`);
}
var o, s, c2, l2, u3, d, f, p, m, h2, g, _, v, y2, b, x, S, C2, w, T, E, D, O, k, V;
var init_utils_DTdqQ6KU = __esm({
  "node_modules/.pnpm/degit@3.10.0/node_modules/degit/dist/utils-DTdqQ6KU.js"() {
    o = Object.create;
    s = Object.defineProperty;
    c2 = Object.getOwnPropertyDescriptor;
    l2 = Object.getOwnPropertyNames;
    u3 = Object.getPrototypeOf;
    d = Object.prototype.hasOwnProperty;
    f = (e4, t4) => () => (t4 || (e4((t4 = { exports: {} }).exports, t4), e4 = null), t4.exports);
    p = (e4, t4, n4, r3) => {
      if (t4 && typeof t4 == `object` || typeof t4 == `function`) for (var i4 = l2(t4), a4 = 0, o3 = i4.length, u5; a4 < o3; a4++) u5 = i4[a4], !d.call(e4, u5) && u5 !== n4 && s(e4, u5, { get: ((e5) => t4[e5]).bind(null, u5), enumerable: !(r3 = c2(t4, u5)) || r3.enumerable });
      return e4;
    };
    m = (e4, t4, n4) => (n4 = e4 == null ? {} : o(u3(e4)), p(t4 || !e4 || !e4.__esModule ? s(n4, `default`, { value: e4, enumerable: true }) : n4, e4));
    h2 = e(import.meta.url);
    g = f(((e4, t4) => {
      var n4 = 1e3, r3 = n4 * 60, i4 = r3 * 60, a4 = i4 * 24, o3 = a4 * 7, s3 = a4 * 365.25;
      t4.exports = function(e5, t5) {
        t5 ||= {};
        var n5 = typeof e5;
        if (n5 === `string` && e5.length > 0) return c4(e5);
        if (n5 === `number` && isFinite(e5)) return t5.long ? u5(e5) : l4(e5);
        throw Error(`val is not a non-empty string or a valid number. val=` + JSON.stringify(e5));
      };
      function c4(e5) {
        if (e5 = String(e5), !(e5.length > 100)) {
          var t5 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e5);
          if (t5) {
            var c5 = parseFloat(t5[1]);
            switch ((t5[2] || `ms`).toLowerCase()) {
              case `years`:
              case `year`:
              case `yrs`:
              case `yr`:
              case `y`:
                return c5 * s3;
              case `weeks`:
              case `week`:
              case `w`:
                return c5 * o3;
              case `days`:
              case `day`:
              case `d`:
                return c5 * a4;
              case `hours`:
              case `hour`:
              case `hrs`:
              case `hr`:
              case `h`:
                return c5 * i4;
              case `minutes`:
              case `minute`:
              case `mins`:
              case `min`:
              case `m`:
                return c5 * r3;
              case `seconds`:
              case `second`:
              case `secs`:
              case `sec`:
              case `s`:
                return c5 * n4;
              case `milliseconds`:
              case `millisecond`:
              case `msecs`:
              case `msec`:
              case `ms`:
                return c5;
              default:
                return;
            }
          }
        }
      }
      function l4(e5) {
        var t5 = Math.abs(e5);
        return t5 >= a4 ? Math.round(e5 / a4) + `d` : t5 >= i4 ? Math.round(e5 / i4) + `h` : t5 >= r3 ? Math.round(e5 / r3) + `m` : t5 >= n4 ? Math.round(e5 / n4) + `s` : e5 + `ms`;
      }
      function u5(e5) {
        var t5 = Math.abs(e5);
        return t5 >= a4 ? d3(e5, t5, a4, `day`) : t5 >= i4 ? d3(e5, t5, i4, `hour`) : t5 >= r3 ? d3(e5, t5, r3, `minute`) : t5 >= n4 ? d3(e5, t5, n4, `second`) : e5 + ` ms`;
      }
      function d3(e5, t5, n5, r4) {
        var i5 = t5 >= n5 * 1.5;
        return Math.round(e5 / n5) + ` ` + r4 + (i5 ? `s` : ``);
      }
    }));
    _ = f(((e4, t4) => {
      function n4(e5) {
        n5.debug = n5, n5.default = n5, n5.coerce = c4, n5.disable = o3, n5.enable = i4, n5.enabled = s3, n5.humanize = g(), n5.destroy = l4, Object.keys(e5).forEach((t6) => {
          n5[t6] = e5[t6];
        }), n5.names = [], n5.skips = [], n5.formatters = {};
        function t5(e6) {
          let t6 = 0;
          for (let n6 = 0; n6 < e6.length; n6++) t6 = (t6 << 5) - t6 + e6.charCodeAt(n6), t6 |= 0;
          return n5.colors[Math.abs(t6) % n5.colors.length];
        }
        n5.selectColor = t5;
        function n5(e6) {
          let t6, i5 = null, a5, o4;
          function s4(...e7) {
            if (!s4.enabled) return;
            let r4 = s4, i6 = Number(/* @__PURE__ */ new Date());
            r4.diff = i6 - (t6 || i6), r4.prev = t6, r4.curr = i6, t6 = i6, e7[0] = n5.coerce(e7[0]), typeof e7[0] != `string` && e7.unshift(`%O`);
            let a6 = 0;
            e7[0] = e7[0].replace(/%([a-zA-Z%])/g, (t7, i7) => {
              if (t7 === `%%`) return `%`;
              a6++;
              let o5 = n5.formatters[i7];
              if (typeof o5 == `function`) {
                let n6 = e7[a6];
                t7 = o5.call(r4, n6), e7.splice(a6, 1), a6--;
              }
              return t7;
            }), n5.formatArgs.call(r4, e7), (r4.log || n5.log).apply(r4, e7);
          }
          return s4.namespace = e6, s4.useColors = n5.useColors(), s4.color = n5.selectColor(e6), s4.extend = r3, s4.destroy = n5.destroy, Object.defineProperty(s4, `enabled`, { enumerable: true, configurable: false, get: () => i5 === null ? (a5 !== n5.namespaces && (a5 = n5.namespaces, o4 = n5.enabled(e6)), o4) : i5, set: (e7) => {
            i5 = e7;
          } }), typeof n5.init == `function` && n5.init(s4), s4;
        }
        function r3(e6, t6) {
          let r4 = n5(this.namespace + (t6 === void 0 ? `:` : t6) + e6);
          return r4.log = this.log, r4;
        }
        function i4(e6) {
          n5.save(e6), n5.namespaces = e6, n5.names = [], n5.skips = [];
          let t6 = (typeof e6 == `string` ? e6 : ``).trim().replace(/\s+/g, `,`).split(`,`).filter(Boolean);
          for (let e7 of t6) e7[0] === `-` ? n5.skips.push(e7.slice(1)) : n5.names.push(e7);
        }
        function a4(e6, t6) {
          let n6 = 0, r4 = 0, i5 = -1, a5 = 0;
          for (; n6 < e6.length; ) if (r4 < t6.length && (t6[r4] === e6[n6] || t6[r4] === `*`)) t6[r4] === `*` ? (i5 = r4, a5 = n6, r4++) : (n6++, r4++);
          else if (i5 !== -1) r4 = i5 + 1, a5++, n6 = a5;
          else return false;
          for (; r4 < t6.length && t6[r4] === `*`; ) r4++;
          return r4 === t6.length;
        }
        function o3() {
          let e6 = [...n5.names, ...n5.skips.map((e7) => `-` + e7)].join(`,`);
          return n5.enable(``), e6;
        }
        function s3(e6) {
          for (let t6 of n5.skips) if (a4(e6, t6)) return false;
          for (let t6 of n5.names) if (a4(e6, t6)) return true;
          return false;
        }
        function c4(e6) {
          return e6 instanceof Error ? e6.stack || e6.message : e6;
        }
        function l4() {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        return n5.enable(n5.load()), n5;
      }
      t4.exports = n4;
    }));
    v = f(((e4, t4) => {
      e4.formatArgs = r3, e4.save = i4, e4.load = a4, e4.useColors = n4, e4.storage = o3(), e4.destroy = /* @__PURE__ */ (() => {
        let e5 = false;
        return () => {
          e5 || (e5 = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        };
      })(), e4.colors = `#0000CC.#0000FF.#0033CC.#0033FF.#0066CC.#0066FF.#0099CC.#0099FF.#00CC00.#00CC33.#00CC66.#00CC99.#00CCCC.#00CCFF.#3300CC.#3300FF.#3333CC.#3333FF.#3366CC.#3366FF.#3399CC.#3399FF.#33CC00.#33CC33.#33CC66.#33CC99.#33CCCC.#33CCFF.#6600CC.#6600FF.#6633CC.#6633FF.#66CC00.#66CC33.#9900CC.#9900FF.#9933CC.#9933FF.#99CC00.#99CC33.#CC0000.#CC0033.#CC0066.#CC0099.#CC00CC.#CC00FF.#CC3300.#CC3333.#CC3366.#CC3399.#CC33CC.#CC33FF.#CC6600.#CC6633.#CC9900.#CC9933.#CCCC00.#CCCC33.#FF0000.#FF0033.#FF0066.#FF0099.#FF00CC.#FF00FF.#FF3300.#FF3333.#FF3366.#FF3399.#FF33CC.#FF33FF.#FF6600.#FF6633.#FF9900.#FF9933.#FFCC00.#FFCC33`.split(`.`);
      function n4() {
        if (typeof window < `u` && window.process && (window.process.type === `renderer` || window.process.__nwjs)) return true;
        if (typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
        let e5;
        return typeof document < `u` && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < `u` && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < `u` && navigator.userAgent && (e5 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e5[1], 10) >= 31 || typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      function r3(e5) {
        if (e5[0] = (this.useColors ? `%c` : ``) + this.namespace + (this.useColors ? ` %c` : ` `) + e5[0] + (this.useColors ? `%c ` : ` `) + `+` + t4.exports.humanize(this.diff), !this.useColors) return;
        let n5 = `color: ` + this.color;
        e5.splice(1, 0, n5, `color: inherit`);
        let r4 = 0, i5 = 0;
        e5[0].replace(/%[a-zA-Z%]/g, (e6) => {
          e6 !== `%%` && (r4++, e6 === `%c` && (i5 = r4));
        }), e5.splice(i5, 0, n5);
      }
      e4.log = console.debug || console.log || (() => {
      });
      function i4(t5) {
        try {
          t5 ? e4.storage.setItem(`debug`, t5) : e4.storage.removeItem(`debug`);
        } catch {
        }
      }
      function a4() {
        let t5;
        try {
          t5 = e4.storage.getItem(`debug`) || e4.storage.getItem(`DEBUG`);
        } catch {
        }
        return !t5 && typeof process < `u` && `env` in process && (t5 = process.env.DEBUG), t5;
      }
      function o3() {
        try {
          return localStorage;
        } catch {
        }
      }
      t4.exports = _()(e4);
      let { formatters: s3 } = t4.exports;
      s3.j = function(e5) {
        try {
          return JSON.stringify(e5);
        } catch (e6) {
          return `[UnexpectedJSONParseError]: ` + e6.message;
        }
      };
    }));
    y2 = f(((e4, t4) => {
      t4.exports = (e5, t5 = process.argv) => {
        let n4 = e5.startsWith(`-`) ? `` : e5.length === 1 ? `-` : `--`, r3 = t5.indexOf(n4 + e5), i4 = t5.indexOf(`--`);
        return r3 !== -1 && (i4 === -1 || r3 < i4);
      };
    }));
    b = f(((e4, t4) => {
      let n4 = h2(`os`), r3 = h2(`tty`), i4 = y2(), { env: a4 } = process, o3;
      i4(`no-color`) || i4(`no-colors`) || i4(`color=false`) || i4(`color=never`) ? o3 = 0 : (i4(`color`) || i4(`colors`) || i4(`color=true`) || i4(`color=always`)) && (o3 = 1), `FORCE_COLOR` in a4 && (o3 = a4.FORCE_COLOR === `true` ? 1 : a4.FORCE_COLOR === `false` ? 0 : a4.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(a4.FORCE_COLOR, 10), 3));
      function s3(e5) {
        return e5 === 0 ? false : { level: e5, hasBasic: true, has256: e5 >= 2, has16m: e5 >= 3 };
      }
      function c4(e5, t5) {
        if (o3 === 0) return 0;
        if (i4(`color=16m`) || i4(`color=full`) || i4(`color=truecolor`)) return 3;
        if (i4(`color=256`)) return 2;
        if (e5 && !t5 && o3 === void 0) return 0;
        let r4 = o3 || 0;
        if (a4.TERM === `dumb`) return r4;
        if (process.platform === `win32`) {
          let e6 = n4.release().split(`.`);
          return Number(e6[0]) >= 10 && Number(e6[2]) >= 10586 ? Number(e6[2]) >= 14931 ? 3 : 2 : 1;
        }
        if (`CI` in a4) return [`TRAVIS`, `CIRCLECI`, `APPVEYOR`, `GITLAB_CI`, `GITHUB_ACTIONS`, `BUILDKITE`].some((e6) => e6 in a4) || a4.CI_NAME === `codeship` ? 1 : r4;
        if (`TEAMCITY_VERSION` in a4) return +!!/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(a4.TEAMCITY_VERSION);
        if (a4.COLORTERM === `truecolor`) return 3;
        if (`TERM_PROGRAM` in a4) {
          let e6 = parseInt((a4.TERM_PROGRAM_VERSION || ``).split(`.`)[0], 10);
          switch (a4.TERM_PROGRAM) {
            case `iTerm.app`:
              return e6 >= 3 ? 3 : 2;
            case `Apple_Terminal`:
              return 2;
          }
        }
        return /-256(color)?$/i.test(a4.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(a4.TERM) || `COLORTERM` in a4 ? 1 : r4;
      }
      function l4(e5) {
        return s3(c4(e5, e5 && e5.isTTY));
      }
      t4.exports = { supportsColor: l4, stdout: s3(c4(true, r3.isatty(1))), stderr: s3(c4(true, r3.isatty(2))) };
    }));
    x = f(((e4, t4) => {
      let n4 = h2(`tty`), r3 = h2(`util`);
      e4.init = u5, e4.log = s3, e4.formatArgs = a4, e4.save = c4, e4.load = l4, e4.useColors = i4, e4.destroy = r3.deprecate(() => {
      }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."), e4.colors = [6, 2, 3, 4, 5, 1];
      try {
        let t5 = b();
        t5 && (t5.stderr || t5).level >= 2 && (e4.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221]);
      } catch {
      }
      e4.inspectOpts = Object.keys(process.env).filter((e5) => /^debug_/i.test(e5)).reduce((e5, t5) => {
        let n5 = t5.substring(6).toLowerCase().replace(/_([a-z])/g, (e6, t6) => t6.toUpperCase()), r4 = process.env[t5];
        return r4 = /^(yes|on|true|enabled)$/i.test(r4) ? true : /^(no|off|false|disabled)$/i.test(r4) ? false : r4 === `null` ? null : Number(r4), e5[n5] = r4, e5;
      }, {});
      function i4() {
        return `colors` in e4.inspectOpts ? !!e4.inspectOpts.colors : n4.isatty(process.stderr.fd);
      }
      function a4(e5) {
        let { namespace: n5, useColors: r4 } = this;
        if (r4) {
          let r5 = this.color, i5 = `\x1B[3` + (r5 < 8 ? r5 : `8;5;` + r5), a5 = `  ${i5};1m${n5} \x1B[0m`;
          e5[0] = a5 + e5[0].split(`
`).join(`
` + a5), e5.push(i5 + `m+` + t4.exports.humanize(this.diff) + `\x1B[0m`);
        } else e5[0] = o3() + n5 + ` ` + e5[0];
      }
      function o3() {
        return e4.inspectOpts.hideDate ? `` : (/* @__PURE__ */ new Date()).toISOString() + ` `;
      }
      function s3(...t5) {
        return process.stderr.write(r3.formatWithOptions(e4.inspectOpts, ...t5) + `
`);
      }
      function c4(e5) {
        e5 ? process.env.DEBUG = e5 : delete process.env.DEBUG;
      }
      function l4() {
        return process.env.DEBUG;
      }
      function u5(t5) {
        t5.inspectOpts = {};
        let n5 = Object.keys(e4.inspectOpts);
        for (let r4 = 0; r4 < n5.length; r4++) t5.inspectOpts[n5[r4]] = e4.inspectOpts[n5[r4]];
      }
      t4.exports = _()(e4);
      let { formatters: d3 } = t4.exports;
      d3.o = function(e5) {
        return this.inspectOpts.colors = this.useColors, r3.inspect(e5, this.inspectOpts).split(`
`).map((e6) => e6.trim()).join(` `);
      }, d3.O = function(e5) {
        return this.inspectOpts.colors = this.useColors, r3.inspect(e5, this.inspectOpts);
      };
    }));
    S = f(((e4, t4) => {
      typeof process > `u` || process.type === `renderer` || process.browser === true || process.__nwjs ? t4.exports = v() : t4.exports = x();
    }));
    C2 = f(((e4) => {
      Object.defineProperty(e4, `__esModule`, { value: true });
      function t4(e5) {
        return function(t5, n4) {
          return new Promise((r3, i4) => {
            e5.call(this, t5, n4, (e6, t6) => {
              e6 ? i4(e6) : r3(t6);
            });
          });
        };
      }
      e4.default = t4;
    }));
    w = f(((e4, t4) => {
      var n4 = e4 && e4.__importDefault || function(e5) {
        return e5 && e5.__esModule ? e5 : { default: e5 };
      };
      let r3 = h2(`events`), i4 = n4(S()), a4 = n4(C2()), o3 = i4.default(`agent-base`);
      function s3(e5) {
        return !!e5 && typeof e5.addRequest == `function`;
      }
      function c4() {
        let { stack: e5 } = Error();
        return typeof e5 == `string` ? e5.split(`
`).some((e6) => e6.indexOf(`(https.js:`) !== -1 || e6.indexOf(`node:https:`) !== -1) : false;
      }
      function l4(e5, t5) {
        return new l4.Agent(e5, t5);
      }
      (function(e5) {
        class t5 extends r3.EventEmitter {
          constructor(e6, t6) {
            super();
            let n5 = t6;
            typeof e6 == `function` ? this.callback = e6 : e6 && (n5 = e6), this.timeout = null, n5 && typeof n5.timeout == `number` && (this.timeout = n5.timeout), this.maxFreeSockets = 1, this.maxSockets = 1, this.maxTotalSockets = 1 / 0, this.sockets = {}, this.freeSockets = {}, this.requests = {}, this.options = {};
          }
          get defaultPort() {
            return typeof this.explicitDefaultPort == `number` ? this.explicitDefaultPort : c4() ? 443 : 80;
          }
          set defaultPort(e6) {
            this.explicitDefaultPort = e6;
          }
          get protocol() {
            return typeof this.explicitProtocol == `string` ? this.explicitProtocol : c4() ? `https:` : `http:`;
          }
          set protocol(e6) {
            this.explicitProtocol = e6;
          }
          callback(e6, t6, n5) {
            throw Error('"agent-base" has no default implementation, you must subclass and override `callback()`');
          }
          addRequest(e6, t6) {
            let n5 = Object.assign({}, t6);
            typeof n5.secureEndpoint != `boolean` && (n5.secureEndpoint = c4()), n5.host ??= `localhost`, n5.port ??= n5.secureEndpoint ? 443 : 80, n5.protocol ??= n5.secureEndpoint ? `https:` : `http:`, n5.host && n5.path && delete n5.path, delete n5.agent, delete n5.hostname, delete n5._defaultAgent, delete n5.defaultPort, delete n5.createConnection, e6._last = true, e6.shouldKeepAlive = false;
            let r4 = false, i5 = null, l5 = n5.timeout || this.timeout, u5 = (t7) => {
              e6._hadError ||= (e6.emit(`error`, t7), true);
            }, d3 = () => {
              i5 = null, r4 = true;
              let e7 = Error(`A "socket" was not created for HTTP request before ${l5}ms`);
              e7.code = `ETIMEOUT`, u5(e7);
            }, f3 = (e7) => {
              r4 || (i5 !== null && (clearTimeout(i5), i5 = null), u5(e7));
            }, p3 = (t7) => {
              if (!r4) {
                if (i5 != null && (clearTimeout(i5), i5 = null), s3(t7)) {
                  o3(`Callback returned another Agent instance %o`, t7.constructor.name), t7.addRequest(e6, n5);
                  return;
                }
                if (t7) {
                  t7.once(`free`, () => {
                    this.freeSocket(t7, n5);
                  }), e6.onSocket(t7);
                  return;
                }
                u5(Error(`no Duplex stream was returned to agent-base for \`${e6.method} ${e6.path}\``));
              }
            };
            if (typeof this.callback != `function`) {
              u5(Error("`callback` is not defined"));
              return;
            }
            this.promisifiedCallback || (this.callback.length >= 3 ? (o3(`Converting legacy callback function to promise`), this.promisifiedCallback = a4.default(this.callback)) : this.promisifiedCallback = this.callback), typeof l5 == `number` && l5 > 0 && (i5 = setTimeout(d3, l5)), `port` in n5 && typeof n5.port != `number` && (n5.port = Number(n5.port));
            try {
              o3(`Resolving socket for %o request: %o`, n5.protocol, `${e6.method} ${e6.path}`), Promise.resolve(this.promisifiedCallback(e6, n5)).then(p3, f3);
            } catch (e7) {
              Promise.reject(e7).catch(f3);
            }
          }
          freeSocket(e6, t6) {
            o3(`Freeing socket %o %o`, e6.constructor.name, t6), e6.destroy();
          }
          destroy() {
            o3(`Destroying agent %o`, this.constructor.name);
          }
        }
        e5.Agent = t5, e5.prototype = e5.Agent.prototype;
      })(l4 ||= {}), t4.exports = l4;
    }));
    T = f(((e4) => {
      var t4 = e4 && e4.__importDefault || function(e5) {
        return e5 && e5.__esModule ? e5 : { default: e5 };
      };
      Object.defineProperty(e4, `__esModule`, { value: true });
      let n4 = t4(S()).default(`https-proxy-agent:parse-proxy-response`);
      function r3(e5) {
        return new Promise((t5, r4) => {
          let i4 = 0, a4 = [];
          function o3() {
            let t6 = e5.read();
            t6 ? d3(t6) : e5.once(`readable`, o3);
          }
          function s3() {
            e5.removeListener(`end`, l4), e5.removeListener(`error`, u5), e5.removeListener(`close`, c4), e5.removeListener(`readable`, o3);
          }
          function c4(e6) {
            n4(`onclose had error %o`, e6);
          }
          function l4() {
            n4(`onend`);
          }
          function u5(e6) {
            s3(), n4(`onerror %o`, e6), r4(e6);
          }
          function d3(e6) {
            a4.push(e6), i4 += e6.length;
            let r5 = Buffer.concat(a4, i4);
            if (r5.indexOf(`\r
\r
`) === -1) {
              n4(`have not received end of HTTP headers yet...`), o3();
              return;
            }
            let s4 = r5.toString(`ascii`, 0, r5.indexOf(`\r
`)), c5 = +s4.split(` `)[1];
            n4(`got proxy server response: %o`, s4), t5({ statusCode: c5, buffered: r5 });
          }
          e5.on(`error`, u5), e5.on(`close`, c4), e5.on(`end`, l4), o3();
        });
      }
      e4.default = r3;
    }));
    E = f(((e4) => {
      var t4 = e4 && e4.__awaiter || function(e5, t5, n5, r4) {
        function i5(e6) {
          return e6 instanceof n5 ? e6 : new n5(function(t6) {
            t6(e6);
          });
        }
        return new (n5 ||= Promise)(function(n6, a5) {
          function o4(e6) {
            try {
              c5(r4.next(e6));
            } catch (e7) {
              a5(e7);
            }
          }
          function s4(e6) {
            try {
              c5(r4.throw(e6));
            } catch (e7) {
              a5(e7);
            }
          }
          function c5(e6) {
            e6.done ? n6(e6.value) : i5(e6.value).then(o4, s4);
          }
          c5((r4 = r4.apply(e5, t5 || [])).next());
        });
      }, n4 = e4 && e4.__importDefault || function(e5) {
        return e5 && e5.__esModule ? e5 : { default: e5 };
      };
      Object.defineProperty(e4, `__esModule`, { value: true });
      let r3 = n4(h2(`net`)), i4 = n4(h2(`tls`)), a4 = n4(h2(`url`)), o3 = n4(h2(`assert`)), s3 = n4(S()), c4 = w(), l4 = n4(T()), u5 = s3.default(`https-proxy-agent:agent`);
      e4.default = class extends c4.Agent {
        constructor(e5) {
          let t5;
          if (t5 = typeof e5 == `string` ? a4.default.parse(e5) : e5, !t5) throw Error("an HTTP(S) proxy server `host` and `port` must be specified!");
          u5(`creating new HttpsProxyAgent instance: %o`, t5), super(t5);
          let n5 = Object.assign({}, t5);
          this.secureProxy = t5.secureProxy || p3(n5.protocol), n5.host = n5.hostname || n5.host, typeof n5.port == `string` && (n5.port = parseInt(n5.port, 10)), !n5.port && n5.host && (n5.port = this.secureProxy ? 443 : 80), this.secureProxy && !(`ALPNProtocols` in n5) && (n5.ALPNProtocols = [`http 1.1`]), n5.host && n5.path && (delete n5.path, delete n5.pathname), this.proxy = n5;
        }
        callback(e5, n5) {
          return t4(this, void 0, void 0, function* () {
            let { proxy: t5, secureProxy: a5 } = this, s4;
            a5 ? (u5("Creating `tls.Socket`: %o", t5), s4 = i4.default.connect(t5)) : (u5("Creating `net.Socket`: %o", t5), s4 = r3.default.connect(t5));
            let c5 = Object.assign({}, t5.headers), p4 = `CONNECT ${`${n5.host}:${n5.port}`} HTTP/1.1\r
`;
            t5.auth && (c5[`Proxy-Authorization`] = `Basic ${Buffer.from(t5.auth).toString(`base64`)}`);
            let { host: h5, port: g4, secureEndpoint: _4 } = n5;
            f3(g4, _4) || (h5 += `:${g4}`), c5.Host = h5, c5.Connection = `close`;
            for (let e6 of Object.keys(c5)) p4 += `${e6}: ${c5[e6]}\r
`;
            let v4 = l4.default(s4);
            s4.write(`${p4}\r
`);
            let { statusCode: y5, buffered: b4 } = yield v4;
            if (y5 === 200) {
              if (e5.once(`socket`, d3), n5.secureEndpoint) {
                let e6 = n5.servername || n5.host;
                if (!e6) throw Error(`Could not determine "servername"`);
                return u5(`Upgrading socket connection to TLS`), i4.default.connect(Object.assign(Object.assign({}, m4(n5, `host`, `hostname`, `path`, `port`)), { socket: s4, servername: e6 }));
              }
              return s4;
            }
            s4.destroy();
            let x4 = new r3.default.Socket();
            return x4.readable = true, e5.once(`socket`, (e6) => {
              u5(`replaying proxy buffer for failed request`), o3.default(e6.listenerCount(`data`) > 0), e6.push(b4), e6.push(null);
            }), x4;
          });
        }
      };
      function d3(e5) {
        e5.resume();
      }
      function f3(e5, t5) {
        return !!(!t5 && e5 === 80 || t5 && e5 === 443);
      }
      function p3(e5) {
        return typeof e5 == `string` ? /^https:?$/i.test(e5) : false;
      }
      function m4(e5, ...t5) {
        let n5 = {}, r4;
        for (r4 in e5) t5.includes(r4) || (n5[r4] = e5[r4]);
        return n5;
      }
    }));
    D = m(f(((e4, t4) => {
      let n4 = (e4 && e4.__importDefault || function(e5) {
        return e5 && e5.__esModule ? e5 : { default: e5 };
      })(E());
      function r3(e5) {
        return new n4.default(e5);
      }
      (function(e5) {
        e5.HttpsProxyAgent = n4.default, e5.prototype = n4.default.prototype;
      })(r3 ||= {}), t4.exports = r3;
    }))(), 1);
    O = `degit.json`;
    k = class extends Error {
      code;
      constructor(e4, t4 = {}) {
        super(e4), Object.assign(this, t4);
      }
    };
    V = B();
  }
});

// node_modules/.pnpm/degit@3.10.0/node_modules/degit/dist/client-8slZtdoy.js
var client_8slZtdoy_exports = {};
__export(client_8slZtdoy_exports, {
  defaultGitClient: () => Kt
});
import i3 from "fs";
import a3 from "path";
import { execFile as o2, spawn as s2 } from "child_process";
import { promisify as c3 } from "util";
function vt(e4) {
  let t4 = [e4];
  return { next() {
    return Promise.resolve({ done: t4.length === 0, value: t4.pop() });
  }, return() {
    return t4 = [], {};
  }, [Symbol.asyncIterator]() {
    return this;
  } };
}
function yt(e4) {
  return e4[Symbol.asyncIterator] ? e4[Symbol.asyncIterator]() : e4[Symbol.iterator] ? e4[Symbol.iterator]() : e4.next ? e4 : vt(e4);
}
async function bt(e4, t4) {
  let n4 = yt(e4);
  for (; ; ) {
    let { value: e5, done: r3 } = await n4.next();
    if (e5 && await t4(e5), r3) break;
  }
  n4.return && n4.return();
}
function xt(e4) {
  let { PassThrough: t4 } = ht(), n4 = new t4();
  return setTimeout(async () => {
    await bt(e4, (e5) => n4.write(e5)), n4.end();
  }, 1), n4;
}
async function St(e4) {
  let t4 = 0, n4 = [];
  await bt(e4, (e5) => {
    n4.push(e5), t4 += e5.byteLength;
  });
  let r3 = new Uint8Array(t4), i4 = 0;
  for (let e5 of n4) r3.set(e5, i4), i4 += e5.byteLength;
  return r3;
}
function Ct(e4) {
  let t4 = Object.getOwnPropertyDescriptor(e4, Symbol.asyncIterator);
  if (t4 && t4.enumerable) return e4;
  let n4 = false, r3 = [], i4 = {};
  return e4.on(`data`, (e5) => {
    r3.push(e5), i4.resolve && (i4.resolve({ value: r3.shift(), done: false }), i4 = {});
  }), e4.on(`error`, (e5) => {
    i4.reject && (i4.reject(e5), i4 = {});
  }), e4.on(`end`, () => {
    n4 = true, i4.resolve && (i4.resolve({ done: true }), i4 = {});
  }), { next() {
    return new Promise((e5, t5) => {
      if (r3.length === 0 && n4) return e5({ done: true });
      if (r3.length > 0) return e5({ value: r3.shift(), done: false });
      r3.length === 0 && !n4 && (i4 = { resolve: e5, reject: t5 });
    });
  }, return() {
    e4.removeAllListeners(), e4.destroy && e4.destroy();
  }, [Symbol.asyncIterator]() {
    return this;
  } };
}
async function wt({ onProgress: e4, url: t4, method: n4 = `GET`, headers: r3 = {}, agent: i4, body: a4 }) {
  return a4 && Array.isArray(a4) ? a4 = Buffer.from(await St(a4)) : a4 &&= xt(a4), new Promise((e5, o3) => {
    (0, _t.default)({ url: t4, method: n4, headers: r3, agent: i4, body: a4 }, (t5, n5) => {
      if (t5) return o3(t5);
      try {
        let t6 = Ct(n5);
        e5({ url: n5.url, method: n5.method, statusCode: n5.statusCode, statusMessage: n5.statusMessage, body: t6, headers: n5.headers });
      } catch (e6) {
        o3(e6);
      }
    });
  });
}
function Et(e4, t4 = e4.transport) {
  return t4 === `ssh` ? e4.ssh : e4.url;
}
function Dt(e4) {
  return /^[0-9a-f]{7,40}$/iu.test(e4);
}
function Ot(e4) {
  return e4.startsWith(`refs/heads/`) ? e4.slice(11) : e4.startsWith(`refs/tags/`) ? e4.slice(10) : e4;
}
function kt(e4) {
  if (!e4 || typeof e4 != `object`) return false;
  let t4 = `${e4.code || ``} ${e4.message || ``}`.toLowerCase();
  return t4.includes(`ssh`) && (t4.includes(`agent`) || t4.includes(`key`) || t4.includes(`identity`) || t4.includes(`publickey`) || t4.includes(`authentication`));
}
function At(e4) {
  return !e4 || typeof e4 != `object` ? false : e4.code === `ENOENT`;
}
function jt(e4, t4) {
  return new k(`SSH authentication failed for ${e4.url}. Start ssh-agent and add a key, or use the HTTPS source instead.`, { code: `SSH_NO_KEY`, original: t4, url: e4.url });
}
function Mt(e4, t4) {
  return new k(`git is not installed. Install git to clone ${e4.url}.`, { code: `GIT_NOT_FOUND`, original: t4, url: e4.url });
}
function Nt(e4, t4) {
  if (e4 === `HEAD`) return { hash: t4, type: `HEAD` };
  let n4 = /refs\/([^/]+)\/(.+)/u.exec(e4);
  if (!n4) throw new k(`could not parse ${e4}`, { code: `BAD_REF` });
  return { hash: t4, name: n4[2], type: n4[1] === `heads` ? `branch` : n4[1] === `refs` ? `ref` : n4[1] };
}
function Pt(e4) {
  let t4 = String(e4.ref || e4.name || ``), n4 = String(e4.oid || e4.hash || ``);
  if (!(!t4 || !n4)) return Nt(t4, n4);
}
function Ft(e4) {
  let t4 = /* @__PURE__ */ new Set();
  return e4.filter((e5) => {
    let n4 = e5.type === `HEAD` ? `HEAD` : e5.name ? `${e5.type}:${e5.name}` : e5.hash;
    return t4.has(n4) ? false : (t4.add(n4), true);
  });
}
function It(e4) {
  let t4 = /* @__PURE__ */ new Map(), n4 = /* @__PURE__ */ new Map();
  for (let r3 of e4.split(/\r?\n/u)) {
    let e5 = r3.trim();
    if (!e5) continue;
    let i4 = /^ref:\s+(.+)\t(.+)$/u.exec(e5);
    if (i4) {
      n4.set(i4[2], i4[1]);
      continue;
    }
    let a4 = e5.indexOf(`	`);
    if (a4 === -1) continue;
    let o3 = e5.slice(0, a4), s3 = e5.slice(a4 + 1);
    t4.set(s3, Nt(s3, o3));
  }
  for (let [e5, r3] of n4) {
    if (e5 !== `HEAD`) continue;
    let n5 = t4.get(r3);
    n5 && t4.set(`HEAD`, { hash: n5.hash, type: `HEAD` });
  }
  return Ft([...t4.values()]);
}
function Lt(e4) {
  return Ft(e4.flatMap((e5) => {
    let t4 = Pt(e5);
    return t4 ? [t4] : [];
  }));
}
function Rt(e4) {
  let t4 = Ot(e4);
  return t4 === `HEAD` ? {} : Dt(t4) ? { checkoutRef: t4 } : t4.startsWith(`refs/heads/`) ? { cloneRef: t4.slice(11), singleBranch: true } : t4.startsWith(`refs/tags/`) ? { cloneRef: t4.slice(10), singleBranch: true } : t4.startsWith(`refs/`) ? { checkoutRef: t4 } : { cloneRef: t4, checkoutRef: t4, singleBranch: true };
}
function Vt(e4) {
  return new Promise((t4, n4) => {
    let r3 = s2(`git`, [`ls-remote`, `--symref`, Et(e4)], { stdio: [`ignore`, `pipe`, `pipe`] }), i4 = r3.stdout, a4 = r3.stderr;
    if (!i4 || !a4) {
      n4(Error(`could not start git ls-remote`));
      return;
    }
    let o3 = ``, c4 = ``;
    i4.setEncoding(`utf8`), a4.setEncoding(`utf8`), i4.on(`data`, (e5) => {
      o3 += e5;
    }), a4.on(`data`, (e5) => {
      c4 += e5;
    }), r3.once(`error`, n4), r3.once(`close`, (e5) => {
      if (e5 !== 0) {
        let t5 = Error(c4.trim() || `git ls-remote exited with code ${e5}`);
        t5.code = e5 ?? `GIT_LS_REMOTE_FAILED`, n4(t5);
        return;
      }
      t4(It(o3));
    });
  });
}
async function Ht(e4) {
  let t4 = Et(e4);
  try {
    let e5 = Lt(await gt.listServerRefs({ http: Bt, peelTags: true, symrefs: true, url: t4 }));
    if (e5.length > 0) return e5;
  } catch {
  }
  try {
    let e5 = Lt((await gt.getRemoteInfo2({ http: Bt, protocolVersion: 1, url: t4 })).refs || []);
    if (e5.length > 0) return e5;
  } catch {
  }
  return Vt(e4);
}
async function Ut(e4, t4, n4, r3 = e4.transport) {
  let o3 = Rt(n4 || e4.ref), s3 = [`clone`, `--depth`, `1`];
  o3.cloneRef && (s3.push(`--branch`, o3.cloneRef), o3.singleBranch && s3.push(`--single-branch`)), s3.push(Et(e4, r3), t4), await zt(`git`, s3), o3.checkoutRef && await zt(`git`, [`-C`, t4, `checkout`, `--force`, o3.checkoutRef]), i3.rmSync(a3.join(t4, `.git`), { force: true, recursive: true });
}
async function Wt(e4, t4, n4, r3 = e4.transport) {
  let o3 = Et(e4, r3), s3 = Rt(n4 || e4.ref), c4 = s3.cloneRef && !Dt(s3.cloneRef) ? s3.cloneRef : void 0, l4 = s3.checkoutRef || (c4 ? void 0 : Ot(n4 || e4.ref));
  try {
    await gt.clone({ fs: i3, http: Bt, dir: t4, depth: 1, ref: c4, singleBranch: !!c4, url: o3 });
  } catch (i4) {
    if (r3 !== `https`) throw i4;
    await Ut(e4, t4, n4, r3);
    return;
  }
  l4 && l4 !== `HEAD` && await gt.checkout({ force: true, fs: i3, dir: t4, ref: l4 }), i3.rmSync(a3.join(t4, `.git`), { force: true, recursive: true });
}
function Gt(e4, t4, n4, i4) {
  throw n4 === `ssh` && At(t4) ? Mt(e4, t4) : n4 === `ssh` && kt(t4) ? jt(e4, t4) : new k(`could not ${i4} ${e4.url}`, { code: `COULD_NOT_FETCH`, original: t4, url: e4.url });
}
var l3, u4, d2, f2, p2, m2, h3, g2, _2, v2, y3, b2, x2, S2, C3, w2, T2, E2, D2, O2, k2, A2, j2, M2, N2, P2, F2, ee, I3, L2, R3, te, ne, z2, B2, V2, H, re, ie, ae, U2, W, oe, se, G, K, ce, le, q, ue, J, Y, X, Z, de, Q, fe, pe, $, me, he, ge, _e, ve, ye, be, xe, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, ut, dt, ft, pt, mt, ht, gt, _t, Tt, zt, Bt, Kt;
var init_client_8slZtdoy = __esm({
  "node_modules/.pnpm/degit@3.10.0/node_modules/degit/dist/client-8slZtdoy.js"() {
    init_utils_DTdqQ6KU();
    l3 = f(((e4, t4) => {
      var n4 = function(e5) {
        if (e5 ||= {}, this.Promise = e5.Promise || Promise, this.queues = /* @__PURE__ */ Object.create(null), this.domainReentrant = e5.domainReentrant || false, this.domainReentrant) {
          if (typeof process > `u` || process.domain === void 0) throw Error("Domain-reentrant locks require `process.domain` to exist. Please flip `opts.domainReentrant = false`, use a NodeJS version that still implements Domain, or install a browser polyfill.");
          this.domains = /* @__PURE__ */ Object.create(null);
        }
        this.timeout = e5.timeout || n4.DEFAULT_TIMEOUT, this.maxOccupationTime = e5.maxOccupationTime || n4.DEFAULT_MAX_OCCUPATION_TIME, this.maxExecutionTime = e5.maxExecutionTime || n4.DEFAULT_MAX_EXECUTION_TIME, e5.maxPending === 1 / 0 || Number.isInteger(e5.maxPending) && e5.maxPending >= 0 ? this.maxPending = e5.maxPending : this.maxPending = n4.DEFAULT_MAX_PENDING;
      };
      n4.DEFAULT_TIMEOUT = 0, n4.DEFAULT_MAX_OCCUPATION_TIME = 0, n4.DEFAULT_MAX_EXECUTION_TIME = 0, n4.DEFAULT_MAX_PENDING = 1e3, n4.prototype.acquire = function(e5, t5, n5, r3) {
        if (Array.isArray(e5)) return this._acquireBatch(e5, t5, n5, r3);
        if (typeof t5 != `function`) throw Error(`You must pass a function to execute`);
        var i4 = null, a4 = null, o3 = null;
        typeof n5 != `function` && (r3 = n5, n5 = null, o3 = new this.Promise(function(e6, t6) {
          i4 = e6, a4 = t6;
        })), r3 ||= {};
        var s3 = false, c4 = null, l4 = null, u5 = null, d3 = this, f3 = function(t6, r4, c5) {
          l4 &&= (clearTimeout(l4), null), u5 &&= (clearTimeout(u5), null), t6 && (d3.queues[e5] && d3.queues[e5].length === 0 && delete d3.queues[e5], d3.domainReentrant && delete d3.domains[e5]), s3 ||= (o3 ? r4 ? a4(r4) : i4(c5) : typeof n5 == `function` && n5(r4, c5), true), t6 && d3.queues[e5] && d3.queues[e5].length > 0 && d3.queues[e5].shift()();
        }, p3 = function(n6) {
          if (s3) return f3(n6);
          c4 &&= (clearTimeout(c4), null), d3.domainReentrant && n6 && (d3.domains[e5] = process.domain);
          var i5 = r3.maxExecutionTime || d3.maxExecutionTime;
          if (i5 && (u5 = setTimeout(function() {
            d3.queues[e5] && f3(n6, Error(`Maximum execution time is exceeded ` + e5));
          }, i5)), t5.length === 1) {
            var a5 = false;
            try {
              t5(function(e6, t6) {
                a5 || (a5 = true, f3(n6, e6, t6));
              });
            } catch (e6) {
              a5 || (a5 = true, f3(n6, e6));
            }
          } else d3._promiseTry(function() {
            return t5();
          }).then(function(e6) {
            f3(n6, void 0, e6);
          }, function(e6) {
            f3(n6, e6);
          });
        };
        d3.domainReentrant && process.domain && (p3 = process.domain.bind(p3));
        var m4 = r3.maxPending || d3.maxPending;
        if (!d3.queues[e5]) d3.queues[e5] = [], p3(true);
        else if (d3.domainReentrant && process.domain && process.domain === d3.domains[e5]) p3(false);
        else if (d3.queues[e5].length >= m4) f3(false, Error(`Too many pending tasks in queue ` + e5));
        else {
          var h5 = function() {
            p3(true);
          };
          r3.skipQueue ? d3.queues[e5].unshift(h5) : d3.queues[e5].push(h5);
          var g4 = r3.timeout || d3.timeout;
          g4 && (c4 = setTimeout(function() {
            c4 = null, f3(false, Error(`async-lock timed out in queue ` + e5));
          }, g4));
        }
        var _4 = r3.maxOccupationTime || d3.maxOccupationTime;
        if (_4 && (l4 = setTimeout(function() {
          d3.queues[e5] && f3(false, Error(`Maximum occupation time is exceeded in queue ` + e5));
        }, _4)), o3) return o3;
      }, n4.prototype._acquireBatch = function(e5, t5, n5, r3) {
        typeof n5 != `function` && (r3 = n5, n5 = null);
        var i4 = this, a4 = function(e6, t6) {
          return function(n6) {
            i4.acquire(e6, t6, n6, r3);
          };
        }, o3 = e5.reduceRight(function(e6, t6) {
          return a4(t6, e6);
        }, t5);
        if (typeof n5 == `function`) o3(n5);
        else return new this.Promise(function(e6, t6) {
          o3.length === 1 ? o3(function(n6, r4) {
            n6 ? t6(n6) : e6(r4);
          }) : e6(o3());
        });
      }, n4.prototype.isBusy = function(e5) {
        return e5 ? !!this.queues[e5] : Object.keys(this.queues).length > 0;
      }, n4.prototype._promiseTry = function(e5) {
        try {
          return this.Promise.resolve(e5());
        } catch (e6) {
          return this.Promise.reject(e6);
        }
      }, t4.exports = n4;
    }));
    u4 = f(((e4, t4) => {
      t4.exports = l3();
    }));
    d2 = f(((e4, t4) => {
      typeof Object.create == `function` ? t4.exports = function(e5, t5) {
        t5 && (e5.super_ = t5, e5.prototype = Object.create(t5.prototype, { constructor: { value: e5, enumerable: false, writable: true, configurable: true } }));
      } : t4.exports = function(e5, t5) {
        if (t5) {
          e5.super_ = t5;
          var n4 = function() {
          };
          n4.prototype = t5.prototype, e5.prototype = new n4(), e5.prototype.constructor = e5;
        }
      };
    }));
    f2 = f(((e4, t4) => {
      try {
        var r3 = h2(`util`);
        if (typeof r3.inherits != `function`) throw ``;
        t4.exports = r3.inherits;
      } catch {
        t4.exports = d2();
      }
    }));
    p2 = f(((e4, t4) => {
      var r3 = h2(`buffer`), i4 = r3.Buffer;
      function a4(e5, t5) {
        for (var n4 in e5) t5[n4] = e5[n4];
      }
      i4.from && i4.alloc && i4.allocUnsafe && i4.allocUnsafeSlow ? t4.exports = r3 : (a4(r3, e4), e4.Buffer = o3);
      function o3(e5, t5, n4) {
        return i4(e5, t5, n4);
      }
      o3.prototype = Object.create(i4.prototype), a4(i4, o3), o3.from = function(e5, t5, n4) {
        if (typeof e5 == `number`) throw TypeError(`Argument must not be a number`);
        return i4(e5, t5, n4);
      }, o3.alloc = function(e5, t5, n4) {
        if (typeof e5 != `number`) throw TypeError(`Argument must be a number`);
        var r4 = i4(e5);
        return t5 === void 0 ? r4.fill(0) : typeof n4 == `string` ? r4.fill(t5, n4) : r4.fill(t5), r4;
      }, o3.allocUnsafe = function(e5) {
        if (typeof e5 != `number`) throw TypeError(`Argument must be a number`);
        return i4(e5);
      }, o3.allocUnsafeSlow = function(e5) {
        if (typeof e5 != `number`) throw TypeError(`Argument must be a number`);
        return r3.SlowBuffer(e5);
      };
    }));
    m2 = f(((e4, t4) => {
      var n4 = {}.toString;
      t4.exports = Array.isArray || function(e5) {
        return n4.call(e5) == `[object Array]`;
      };
    }));
    h3 = f(((e4, t4) => {
      t4.exports = TypeError;
    }));
    g2 = f(((e4, t4) => {
      t4.exports = Object;
    }));
    _2 = f(((e4, t4) => {
      t4.exports = Error;
    }));
    v2 = f(((e4, t4) => {
      t4.exports = EvalError;
    }));
    y3 = f(((e4, t4) => {
      t4.exports = RangeError;
    }));
    b2 = f(((e4, t4) => {
      t4.exports = ReferenceError;
    }));
    x2 = f(((e4, t4) => {
      t4.exports = SyntaxError;
    }));
    S2 = f(((e4, t4) => {
      t4.exports = URIError;
    }));
    C3 = f(((e4, t4) => {
      t4.exports = Math.abs;
    }));
    w2 = f(((e4, t4) => {
      t4.exports = Math.floor;
    }));
    T2 = f(((e4, t4) => {
      t4.exports = Math.max;
    }));
    E2 = f(((e4, t4) => {
      t4.exports = Math.min;
    }));
    D2 = f(((e4, t4) => {
      t4.exports = Math.pow;
    }));
    O2 = f(((e4, t4) => {
      t4.exports = Math.round;
    }));
    k2 = f(((e4, t4) => {
      t4.exports = Number.isNaN || function(e5) {
        return e5 !== e5;
      };
    }));
    A2 = f(((e4, t4) => {
      var n4 = k2();
      t4.exports = function(e5) {
        return n4(e5) || e5 === 0 ? e5 : e5 < 0 ? -1 : 1;
      };
    }));
    j2 = f(((e4, t4) => {
      t4.exports = Object.getOwnPropertyDescriptor;
    }));
    M2 = f(((e4, t4) => {
      var n4 = j2();
      if (n4) try {
        n4([], `length`);
      } catch {
        n4 = null;
      }
      t4.exports = n4;
    }));
    N2 = f(((e4, t4) => {
      var n4 = Object.defineProperty || false;
      if (n4) try {
        n4({}, `a`, { value: 1 });
      } catch {
        n4 = false;
      }
      t4.exports = n4;
    }));
    P2 = f(((e4, t4) => {
      t4.exports = function() {
        if (typeof Symbol != `function` || typeof Object.getOwnPropertySymbols != `function`) return false;
        if (typeof Symbol.iterator == `symbol`) return true;
        var e5 = {}, t5 = /* @__PURE__ */ Symbol(`test`), n4 = Object(t5);
        if (typeof t5 == `string` || Object.prototype.toString.call(t5) !== `[object Symbol]` || Object.prototype.toString.call(n4) !== `[object Symbol]`) return false;
        var r3 = 42;
        for (var i4 in e5[t5] = r3, e5) return false;
        if (typeof Object.keys == `function` && Object.keys(e5).length !== 0 || typeof Object.getOwnPropertyNames == `function` && Object.getOwnPropertyNames(e5).length !== 0) return false;
        var a4 = Object.getOwnPropertySymbols(e5);
        if (a4.length !== 1 || a4[0] !== t5 || !Object.prototype.propertyIsEnumerable.call(e5, t5)) return false;
        if (typeof Object.getOwnPropertyDescriptor == `function`) {
          var o3 = Object.getOwnPropertyDescriptor(e5, t5);
          if (o3.value !== r3 || o3.enumerable !== true) return false;
        }
        return true;
      };
    }));
    F2 = f(((e4, t4) => {
      var n4 = typeof Symbol < `u` && Symbol, r3 = P2();
      t4.exports = function() {
        return typeof n4 != `function` || typeof Symbol != `function` || typeof n4(`foo`) != `symbol` || typeof /* @__PURE__ */ Symbol(`bar`) != `symbol` ? false : r3();
      };
    }));
    ee = f(((e4, t4) => {
      t4.exports = typeof Reflect < `u` && Reflect.getPrototypeOf || null;
    }));
    I3 = f(((e4, t4) => {
      t4.exports = g2().getPrototypeOf || null;
    }));
    L2 = f(((e4, t4) => {
      var n4 = `Function.prototype.bind called on incompatible `, r3 = Object.prototype.toString, i4 = Math.max, a4 = `[object Function]`, o3 = function(e5, t5) {
        for (var n5 = [], r4 = 0; r4 < e5.length; r4 += 1) n5[r4] = e5[r4];
        for (var i5 = 0; i5 < t5.length; i5 += 1) n5[i5 + e5.length] = t5[i5];
        return n5;
      }, s3 = function(e5, t5) {
        for (var n5 = [], r4 = t5 || 0, i5 = 0; r4 < e5.length; r4 += 1, i5 += 1) n5[i5] = e5[r4];
        return n5;
      }, c4 = function(e5, t5) {
        for (var n5 = ``, r4 = 0; r4 < e5.length; r4 += 1) n5 += e5[r4], r4 + 1 < e5.length && (n5 += t5);
        return n5;
      };
      t4.exports = function(e5) {
        var t5 = this;
        if (typeof t5 != `function` || r3.apply(t5) !== a4) throw TypeError(n4 + t5);
        for (var l4 = s3(arguments, 1), u5, d3 = function() {
          if (this instanceof u5) {
            var n5 = t5.apply(this, o3(l4, arguments));
            return Object(n5) === n5 ? n5 : this;
          }
          return t5.apply(e5, o3(l4, arguments));
        }, f3 = i4(0, t5.length - l4.length), p3 = [], m4 = 0; m4 < f3; m4++) p3[m4] = `$` + m4;
        if (u5 = Function(`binder`, `return function (` + c4(p3, `,`) + `){ return binder.apply(this,arguments); }`)(d3), t5.prototype) {
          var h5 = function() {
          };
          h5.prototype = t5.prototype, u5.prototype = new h5(), h5.prototype = null;
        }
        return u5;
      };
    }));
    R3 = f(((e4, t4) => {
      var n4 = L2();
      t4.exports = Function.prototype.bind || n4;
    }));
    te = f(((e4, t4) => {
      t4.exports = Function.prototype.call;
    }));
    ne = f(((e4, t4) => {
      t4.exports = Function.prototype.apply;
    }));
    z2 = f(((e4, t4) => {
      t4.exports = typeof Reflect < `u` && Reflect && Reflect.apply;
    }));
    B2 = f(((e4, t4) => {
      var n4 = R3(), r3 = ne(), i4 = te();
      t4.exports = z2() || n4.call(i4, r3);
    }));
    V2 = f(((e4, t4) => {
      var n4 = R3(), r3 = h3(), i4 = te(), a4 = B2();
      t4.exports = function(e5) {
        if (e5.length < 1 || typeof e5[0] != `function`) throw new r3(`a function is required`);
        return a4(n4, i4, e5);
      };
    }));
    H = f(((e4, t4) => {
      var n4 = V2(), r3 = M2(), i4;
      try {
        i4 = [].__proto__ === Array.prototype;
      } catch (e5) {
        if (!e5 || typeof e5 != `object` || !(`code` in e5) || e5.code !== `ERR_PROTO_ACCESS`) throw e5;
      }
      var a4 = !!i4 && r3 && r3(Object.prototype, `__proto__`), o3 = Object, s3 = o3.getPrototypeOf;
      t4.exports = a4 && typeof a4.get == `function` ? n4([a4.get]) : typeof s3 == `function` ? function(e5) {
        return s3(e5 == null ? e5 : o3(e5));
      } : false;
    }));
    re = f(((e4, t4) => {
      var n4 = ee(), r3 = I3(), i4 = H();
      t4.exports = n4 ? function(e5) {
        return n4(e5);
      } : r3 ? function(e5) {
        if (!e5 || typeof e5 != `object` && typeof e5 != `function`) throw TypeError(`getProto: not an object`);
        return r3(e5);
      } : i4 ? function(e5) {
        return i4(e5);
      } : null;
    }));
    ie = f(((e4, t4) => {
      var n4 = Function.prototype.call, r3 = Object.prototype.hasOwnProperty;
      t4.exports = R3().call(n4, r3);
    }));
    ae = f(((e4, t4) => {
      var n4, r3 = g2(), i4 = _2(), a4 = v2(), o3 = y3(), s3 = b2(), c4 = x2(), l4 = h3(), u5 = S2(), d3 = C3(), f3 = w2(), p3 = T2(), m4 = E2(), k4 = D2(), j4 = O2(), P4 = A2(), L4 = Function, z4 = function(e5) {
        try {
          return L4(`"use strict"; return (` + e5 + `).constructor;`)();
        } catch {
        }
      }, B4 = M2(), V4 = N2(), H3 = function() {
        throw new l4();
      }, ae3 = B4 ? (function() {
        try {
          return arguments.callee, H3;
        } catch {
          try {
            return B4(arguments, `callee`).get;
          } catch {
            return H3;
          }
        }
      })() : H3, U4 = F2()(), W3 = re(), oe3 = I3(), se3 = ee(), G3 = ne(), K3 = te(), ce3 = {}, le3 = typeof Uint8Array > `u` || !W3 ? n4 : W3(Uint8Array), q3 = { __proto__: null, "%AggregateError%": typeof AggregateError > `u` ? n4 : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > `u` ? n4 : ArrayBuffer, "%ArrayIteratorPrototype%": U4 && W3 ? W3([][Symbol.iterator]()) : n4, "%AsyncFromSyncIteratorPrototype%": n4, "%AsyncFunction%": ce3, "%AsyncGenerator%": ce3, "%AsyncGeneratorFunction%": ce3, "%AsyncIteratorPrototype%": ce3, "%Atomics%": typeof Atomics > `u` ? n4 : Atomics, "%BigInt%": typeof BigInt > `u` ? n4 : BigInt, "%BigInt64Array%": typeof BigInt64Array > `u` ? n4 : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array > `u` ? n4 : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView > `u` ? n4 : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": i4, "%eval%": eval, "%EvalError%": a4, "%Float16Array%": typeof Float16Array > `u` ? n4 : Float16Array, "%Float32Array%": typeof Float32Array > `u` ? n4 : Float32Array, "%Float64Array%": typeof Float64Array > `u` ? n4 : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > `u` ? n4 : FinalizationRegistry, "%Function%": L4, "%GeneratorFunction%": ce3, "%Int8Array%": typeof Int8Array > `u` ? n4 : Int8Array, "%Int16Array%": typeof Int16Array > `u` ? n4 : Int16Array, "%Int32Array%": typeof Int32Array > `u` ? n4 : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": U4 && W3 ? W3(W3([][Symbol.iterator]())) : n4, "%JSON%": typeof JSON == `object` ? JSON : n4, "%Map%": typeof Map > `u` ? n4 : Map, "%MapIteratorPrototype%": typeof Map > `u` || !U4 || !W3 ? n4 : W3((/* @__PURE__ */ new Map())[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": r3, "%Object.getOwnPropertyDescriptor%": B4, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > `u` ? n4 : Promise, "%Proxy%": typeof Proxy > `u` ? n4 : Proxy, "%RangeError%": o3, "%ReferenceError%": s3, "%Reflect%": typeof Reflect > `u` ? n4 : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > `u` ? n4 : Set, "%SetIteratorPrototype%": typeof Set > `u` || !U4 || !W3 ? n4 : W3((/* @__PURE__ */ new Set())[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > `u` ? n4 : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": U4 && W3 ? W3(``[Symbol.iterator]()) : n4, "%Symbol%": U4 ? Symbol : n4, "%SyntaxError%": c4, "%ThrowTypeError%": ae3, "%TypedArray%": le3, "%TypeError%": l4, "%Uint8Array%": typeof Uint8Array > `u` ? n4 : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > `u` ? n4 : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > `u` ? n4 : Uint16Array, "%Uint32Array%": typeof Uint32Array > `u` ? n4 : Uint32Array, "%URIError%": u5, "%WeakMap%": typeof WeakMap > `u` ? n4 : WeakMap, "%WeakRef%": typeof WeakRef > `u` ? n4 : WeakRef, "%WeakSet%": typeof WeakSet > `u` ? n4 : WeakSet, "%Function.prototype.call%": K3, "%Function.prototype.apply%": G3, "%Object.defineProperty%": V4, "%Object.getPrototypeOf%": oe3, "%Math.abs%": d3, "%Math.floor%": f3, "%Math.max%": p3, "%Math.min%": m4, "%Math.pow%": k4, "%Math.round%": j4, "%Math.sign%": P4, "%Reflect.getPrototypeOf%": se3 };
      if (W3) try {
        null.error;
      } catch (e5) {
        q3[`%Error.prototype%`] = W3(W3(e5));
      }
      var ue3 = function e5(t5) {
        var n5;
        if (t5 === `%AsyncFunction%`) n5 = z4(`async function () {}`);
        else if (t5 === `%GeneratorFunction%`) n5 = z4(`function* () {}`);
        else if (t5 === `%AsyncGeneratorFunction%`) n5 = z4(`async function* () {}`);
        else if (t5 === `%AsyncGenerator%`) {
          var r4 = e5(`%AsyncGeneratorFunction%`);
          r4 && (n5 = r4.prototype);
        } else if (t5 === `%AsyncIteratorPrototype%`) {
          var i5 = e5(`%AsyncGenerator%`);
          i5 && W3 && (n5 = W3(i5.prototype));
        }
        return q3[t5] = n5, n5;
      }, J3 = { __proto__: null, "%ArrayBufferPrototype%": [`ArrayBuffer`, `prototype`], "%ArrayPrototype%": [`Array`, `prototype`], "%ArrayProto_entries%": [`Array`, `prototype`, `entries`], "%ArrayProto_forEach%": [`Array`, `prototype`, `forEach`], "%ArrayProto_keys%": [`Array`, `prototype`, `keys`], "%ArrayProto_values%": [`Array`, `prototype`, `values`], "%AsyncFunctionPrototype%": [`AsyncFunction`, `prototype`], "%AsyncGenerator%": [`AsyncGeneratorFunction`, `prototype`], "%AsyncGeneratorPrototype%": [`AsyncGeneratorFunction`, `prototype`, `prototype`], "%BooleanPrototype%": [`Boolean`, `prototype`], "%DataViewPrototype%": [`DataView`, `prototype`], "%DatePrototype%": [`Date`, `prototype`], "%ErrorPrototype%": [`Error`, `prototype`], "%EvalErrorPrototype%": [`EvalError`, `prototype`], "%Float32ArrayPrototype%": [`Float32Array`, `prototype`], "%Float64ArrayPrototype%": [`Float64Array`, `prototype`], "%FunctionPrototype%": [`Function`, `prototype`], "%Generator%": [`GeneratorFunction`, `prototype`], "%GeneratorPrototype%": [`GeneratorFunction`, `prototype`, `prototype`], "%Int8ArrayPrototype%": [`Int8Array`, `prototype`], "%Int16ArrayPrototype%": [`Int16Array`, `prototype`], "%Int32ArrayPrototype%": [`Int32Array`, `prototype`], "%JSONParse%": [`JSON`, `parse`], "%JSONStringify%": [`JSON`, `stringify`], "%MapPrototype%": [`Map`, `prototype`], "%NumberPrototype%": [`Number`, `prototype`], "%ObjectPrototype%": [`Object`, `prototype`], "%ObjProto_toString%": [`Object`, `prototype`, `toString`], "%ObjProto_valueOf%": [`Object`, `prototype`, `valueOf`], "%PromisePrototype%": [`Promise`, `prototype`], "%PromiseProto_then%": [`Promise`, `prototype`, `then`], "%Promise_all%": [`Promise`, `all`], "%Promise_reject%": [`Promise`, `reject`], "%Promise_resolve%": [`Promise`, `resolve`], "%RangeErrorPrototype%": [`RangeError`, `prototype`], "%ReferenceErrorPrototype%": [`ReferenceError`, `prototype`], "%RegExpPrototype%": [`RegExp`, `prototype`], "%SetPrototype%": [`Set`, `prototype`], "%SharedArrayBufferPrototype%": [`SharedArrayBuffer`, `prototype`], "%StringPrototype%": [`String`, `prototype`], "%SymbolPrototype%": [`Symbol`, `prototype`], "%SyntaxErrorPrototype%": [`SyntaxError`, `prototype`], "%TypedArrayPrototype%": [`TypedArray`, `prototype`], "%TypeErrorPrototype%": [`TypeError`, `prototype`], "%Uint8ArrayPrototype%": [`Uint8Array`, `prototype`], "%Uint8ClampedArrayPrototype%": [`Uint8ClampedArray`, `prototype`], "%Uint16ArrayPrototype%": [`Uint16Array`, `prototype`], "%Uint32ArrayPrototype%": [`Uint32Array`, `prototype`], "%URIErrorPrototype%": [`URIError`, `prototype`], "%WeakMapPrototype%": [`WeakMap`, `prototype`], "%WeakSetPrototype%": [`WeakSet`, `prototype`] }, Y3 = R3(), X3 = ie(), Z3 = Y3.call(K3, Array.prototype.concat), de3 = Y3.call(G3, Array.prototype.splice), Q3 = Y3.call(K3, String.prototype.replace), fe3 = Y3.call(K3, String.prototype.slice), pe3 = Y3.call(K3, RegExp.prototype.exec), $3 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, me3 = /\\(\\)?/g, he3 = function(e5) {
        var t5 = fe3(e5, 0, 1), n5 = fe3(e5, -1);
        if (t5 === `%` && n5 !== `%`) throw new c4("invalid intrinsic syntax, expected closing `%`");
        if (n5 === `%` && t5 !== `%`) throw new c4("invalid intrinsic syntax, expected opening `%`");
        var r4 = [];
        return Q3(e5, $3, function(e6, t6, n6, i5) {
          r4[r4.length] = n6 ? Q3(i5, me3, `$1`) : t6 || e6;
        }), r4;
      }, ge3 = function(e5, t5) {
        var n5 = e5, r4;
        if (X3(J3, n5) && (r4 = J3[n5], n5 = `%` + r4[0] + `%`), X3(q3, n5)) {
          var i5 = q3[n5];
          if (i5 === ce3 && (i5 = ue3(n5)), i5 === void 0 && !t5) throw new l4(`intrinsic ` + e5 + ` exists, but is not available. Please file an issue!`);
          return { alias: r4, name: n5, value: i5 };
        }
        throw new c4(`intrinsic ` + e5 + ` does not exist!`);
      };
      t4.exports = function(e5, t5) {
        if (typeof e5 != `string` || e5.length === 0) throw new l4(`intrinsic name must be a non-empty string`);
        if (arguments.length > 1 && typeof t5 != `boolean`) throw new l4(`"allowMissing" argument must be a boolean`);
        if (pe3(/^%?[^%]*%?$/, e5) === null) throw new c4("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var n5 = he3(e5), r4 = n5.length > 0 ? n5[0] : ``, i5 = ge3(`%` + r4 + `%`, t5), a5 = i5.name, o4 = i5.value, s4 = false, u6 = i5.alias;
        u6 && (r4 = u6[0], de3(n5, Z3([0, 1], u6)));
        for (var d4 = 1, f4 = true; d4 < n5.length; d4 += 1) {
          var p4 = n5[d4], m5 = fe3(p4, 0, 1), h5 = fe3(p4, -1);
          if ((m5 === `"` || m5 === `'` || m5 === "`" || h5 === `"` || h5 === `'` || h5 === "`") && m5 !== h5) throw new c4(`property names with quotes must have matching quotes`);
          if ((p4 === `constructor` || !f4) && (s4 = true), r4 += `.` + p4, a5 = `%` + r4 + `%`, X3(q3, a5)) o4 = q3[a5];
          else if (o4 != null) {
            if (!(p4 in o4)) {
              if (!t5) throw new l4(`base intrinsic for ` + e5 + ` exists, but the property is not available.`);
              return;
            }
            if (B4 && d4 + 1 >= n5.length) {
              var g4 = B4(o4, p4);
              f4 = !!g4, o4 = f4 && `get` in g4 && !(`originalValue` in g4.get) ? g4.get : o4[p4];
            } else f4 = X3(o4, p4), o4 = o4[p4];
            f4 && !s4 && (q3[a5] = o4);
          }
        }
        return o4;
      };
    }));
    U2 = f(((e4, t4) => {
      var n4 = ae(), r3 = V2(), i4 = r3([n4(`%String.prototype.indexOf%`)]);
      t4.exports = function(e5, t5) {
        var a4 = n4(e5, !!t5);
        return typeof a4 == `function` && i4(e5, `.prototype.`) > -1 ? r3([a4]) : a4;
      };
    }));
    W = f(((e4, t4) => {
      var n4 = Function.prototype.toString, r3 = typeof Reflect == `object` && Reflect !== null && Reflect.apply, i4, a4;
      if (typeof r3 == `function` && typeof Object.defineProperty == `function`) try {
        i4 = Object.defineProperty({}, `length`, { get: function() {
          throw a4;
        } }), a4 = {}, r3(function() {
          throw 42;
        }, null, i4);
      } catch (e5) {
        e5 !== a4 && (r3 = null);
      }
      else r3 = null;
      var o3 = /^\s*class\b/, s3 = function(e5) {
        try {
          var t5 = n4.call(e5);
          return o3.test(t5);
        } catch {
          return false;
        }
      }, c4 = function(e5) {
        try {
          return s3(e5) ? false : (n4.call(e5), true);
        } catch {
          return false;
        }
      }, l4 = Object.prototype.toString, u5 = `[object Object]`, d3 = `[object Function]`, f3 = `[object GeneratorFunction]`, p3 = `[object HTMLAllCollection]`, m4 = `[object HTML document.all class]`, h5 = `[object HTMLCollection]`, g4 = typeof Symbol == `function` && !!Symbol.toStringTag, _4 = !(0 in [,]), v4 = function() {
        return false;
      };
      if (typeof document == `object`) {
        var y5 = document.all;
        l4.call(y5) === l4.call(document.all) && (v4 = function(e5) {
          if ((_4 || !e5) && (e5 === void 0 || typeof e5 == `object`)) try {
            var t5 = l4.call(e5);
            return (t5 === p3 || t5 === m4 || t5 === h5 || t5 === u5) && e5(``) == null;
          } catch {
          }
          return false;
        });
      }
      t4.exports = r3 ? function(e5) {
        if (v4(e5)) return true;
        if (!e5 || typeof e5 != `function` && typeof e5 != `object`) return false;
        try {
          r3(e5, null, i4);
        } catch (e6) {
          if (e6 !== a4) return false;
        }
        return !s3(e5) && c4(e5);
      } : function(e5) {
        if (v4(e5)) return true;
        if (!e5 || typeof e5 != `function` && typeof e5 != `object`) return false;
        if (g4) return c4(e5);
        if (s3(e5)) return false;
        var t5 = l4.call(e5);
        return t5 !== d3 && t5 !== f3 && !/^\[object HTML/.test(t5) ? false : c4(e5);
      };
    }));
    oe = f(((e4, t4) => {
      var n4 = W(), r3 = Object.prototype.toString, i4 = Object.prototype.hasOwnProperty, a4 = function(e5, t5, n5) {
        for (var r4 = 0, a5 = e5.length; r4 < a5; r4++) i4.call(e5, r4) && (n5 == null ? t5(e5[r4], r4, e5) : t5.call(n5, e5[r4], r4, e5));
      }, o3 = function(e5, t5, n5) {
        for (var r4 = 0, i5 = e5.length; r4 < i5; r4++) n5 == null ? t5(e5.charAt(r4), r4, e5) : t5.call(n5, e5.charAt(r4), r4, e5);
      }, s3 = function(e5, t5, n5) {
        for (var r4 in e5) i4.call(e5, r4) && (n5 == null ? t5(e5[r4], r4, e5) : t5.call(n5, e5[r4], r4, e5));
      };
      function c4(e5) {
        return r3.call(e5) === `[object Array]`;
      }
      t4.exports = function(e5, t5, r4) {
        if (!n4(t5)) throw TypeError(`iterator must be a function`);
        var i5;
        arguments.length >= 3 && (i5 = r4), c4(e5) ? a4(e5, t5, i5) : typeof e5 == `string` ? o3(e5, t5, i5) : s3(e5, t5, i5);
      };
    }));
    se = f(((e4, t4) => {
      t4.exports = [`Float16Array`, `Float32Array`, `Float64Array`, `Int8Array`, `Int16Array`, `Int32Array`, `Uint8Array`, `Uint8ClampedArray`, `Uint16Array`, `Uint32Array`, `BigInt64Array`, `BigUint64Array`];
    }));
    G = f(((e4, t4) => {
      var n4 = se(), r3 = typeof globalThis > `u` ? global : globalThis;
      t4.exports = function() {
        for (var e5 = [], t5 = 0; t5 < n4.length; t5++) typeof r3[n4[t5]] == `function` && (e5[e5.length] = n4[t5]);
        return e5;
      };
    }));
    K = f(((e4, t4) => {
      var n4 = N2(), r3 = x2(), i4 = h3(), a4 = M2();
      t4.exports = function(e5, t5, o3) {
        if (!e5 || typeof e5 != `object` && typeof e5 != `function`) throw new i4("`obj` must be an object or a function`");
        if (typeof t5 != `string` && typeof t5 != `symbol`) throw new i4("`property` must be a string or a symbol`");
        if (arguments.length > 3 && typeof arguments[3] != `boolean` && arguments[3] !== null) throw new i4("`nonEnumerable`, if provided, must be a boolean or null");
        if (arguments.length > 4 && typeof arguments[4] != `boolean` && arguments[4] !== null) throw new i4("`nonWritable`, if provided, must be a boolean or null");
        if (arguments.length > 5 && typeof arguments[5] != `boolean` && arguments[5] !== null) throw new i4("`nonConfigurable`, if provided, must be a boolean or null");
        if (arguments.length > 6 && typeof arguments[6] != `boolean`) throw new i4("`loose`, if provided, must be a boolean");
        var s3 = arguments.length > 3 ? arguments[3] : null, c4 = arguments.length > 4 ? arguments[4] : null, l4 = arguments.length > 5 ? arguments[5] : null, u5 = arguments.length > 6 ? arguments[6] : false, d3 = !!a4 && a4(e5, t5);
        if (n4) n4(e5, t5, { configurable: l4 === null && d3 ? d3.configurable : !l4, enumerable: s3 === null && d3 ? d3.enumerable : !s3, value: o3, writable: c4 === null && d3 ? d3.writable : !c4 });
        else if (u5 || !s3 && !c4 && !l4) e5[t5] = o3;
        else throw new r3(`This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.`);
      };
    }));
    ce = f(((e4, t4) => {
      var n4 = N2(), r3 = function() {
        return !!n4;
      };
      r3.hasArrayLengthDefineBug = function() {
        if (!n4) return null;
        try {
          return n4([], `length`, { value: 1 }).length !== 1;
        } catch {
          return true;
        }
      }, t4.exports = r3;
    }));
    le = f(((e4, t4) => {
      var n4 = ae(), r3 = K(), i4 = ce()(), a4 = M2(), o3 = h3(), s3 = n4(`%Math.floor%`);
      t4.exports = function(e5, t5) {
        if (typeof e5 != `function`) throw new o3("`fn` is not a function");
        if (typeof t5 != `number` || t5 < 0 || t5 > 4294967295 || s3(t5) !== t5) throw new o3("`length` must be a positive 32-bit integer");
        var n5 = arguments.length > 2 && !!arguments[2], c4 = true, l4 = true;
        if (`length` in e5 && a4) {
          var u5 = a4(e5, `length`);
          u5 && !u5.configurable && (c4 = false), u5 && !u5.writable && (l4 = false);
        }
        return (c4 || l4 || !n5) && (i4 ? r3(e5, `length`, t5, true, true) : r3(e5, `length`, t5)), e5;
      };
    }));
    q = f(((e4, t4) => {
      var n4 = R3(), r3 = ne(), i4 = B2();
      t4.exports = function() {
        return i4(n4, r3, arguments);
      };
    }));
    ue = f(((e4, t4) => {
      var n4 = le(), r3 = N2(), i4 = V2(), a4 = q();
      t4.exports = function(e5) {
        var t5 = i4(arguments), r4 = 1 + e5.length - (arguments.length - 1);
        return n4(t5, r4 > 0 ? r4 : 0, true);
      }, r3 ? r3(t4.exports, `apply`, { value: a4 }) : t4.exports.apply = a4;
    }));
    J = f(((e4, t4) => {
      var n4 = P2();
      t4.exports = function() {
        return n4() && !!Symbol.toStringTag;
      };
    }));
    Y = f(((e4, t4) => {
      var n4 = oe(), r3 = G(), i4 = ue(), a4 = U2(), o3 = M2(), s3 = re(), c4 = a4(`Object.prototype.toString`), l4 = J()(), u5 = typeof globalThis > `u` ? global : globalThis, d3 = r3(), f3 = a4(`String.prototype.slice`), p3 = a4(`Array.prototype.indexOf`, true) || function(e5, t5) {
        for (var n5 = 0; n5 < e5.length; n5 += 1) if (e5[n5] === t5) return n5;
        return -1;
      }, m4 = { __proto__: null };
      l4 && o3 && s3 ? n4(d3, function(e5) {
        var t5 = new u5[e5]();
        if (Symbol.toStringTag in t5 && s3) {
          var n5 = s3(t5), r4 = o3(n5, Symbol.toStringTag);
          if (!r4 && n5 && (r4 = o3(s3(n5), Symbol.toStringTag)), r4 && r4.get) {
            var a5 = i4(r4.get);
            m4[`$` + e5] = a5;
          }
        }
      }) : n4(d3, function(e5) {
        var t5 = new u5[e5](), n5 = t5.slice || t5.set;
        if (n5) {
          var r4 = i4(n5);
          m4[`$` + e5] = r4;
        }
      });
      var h5 = function(e5) {
        var t5 = false;
        return n4(m4, function(n5, r4) {
          if (!t5) try {
            `$` + n5(e5) === r4 && (t5 = f3(r4, 1));
          } catch {
          }
        }), t5;
      }, g4 = function(e5) {
        var t5 = false;
        return n4(m4, function(n5, r4) {
          if (!t5) try {
            n5(e5), t5 = f3(r4, 1);
          } catch {
          }
        }), t5;
      };
      t4.exports = function(e5) {
        if (!e5 || typeof e5 != `object`) return false;
        if (!l4) {
          var t5 = f3(c4(e5), 8, -1);
          return p3(d3, t5) > -1 ? t5 : t5 === `Object` ? g4(e5) : false;
        }
        return o3 ? h5(e5) : null;
      };
    }));
    X = f(((e4, t4) => {
      var n4 = Y();
      t4.exports = function(e5) {
        return !!n4(e5);
      };
    }));
    Z = f(((e4, t4) => {
      var n4 = h3(), r3 = U2()(`TypedArray.prototype.buffer`, true), i4 = X();
      t4.exports = r3 || function(e5) {
        if (!i4(e5)) throw new n4(`Not a Typed Array`);
        return e5.buffer;
      };
    }));
    de = f(((e4, t4) => {
      var n4 = p2().Buffer, r3 = m2(), i4 = Z(), a4 = ArrayBuffer.isView || function(e5) {
        try {
          return i4(e5), true;
        } catch {
          return false;
        }
      }, o3 = typeof Uint8Array < `u`, s3 = typeof ArrayBuffer < `u` && typeof Uint8Array < `u`, c4 = s3 && (n4.prototype instanceof Uint8Array || n4.TYPED_ARRAY_SUPPORT);
      t4.exports = function(e5, t5) {
        if (n4.isBuffer(e5)) return e5.constructor && !(`isBuffer` in e5) ? n4.from(e5) : e5;
        if (typeof e5 == `string`) return n4.from(e5, t5);
        if (s3 && a4(e5)) {
          if (e5.byteLength === 0) return n4.alloc(0);
          if (c4) {
            var i5 = n4.from(e5.buffer, e5.byteOffset, e5.byteLength);
            if (i5.byteLength === e5.byteLength) return i5;
          }
          var l4 = e5 instanceof Uint8Array ? e5 : new Uint8Array(e5.buffer, e5.byteOffset, e5.byteLength), u5 = n4.from(l4);
          if (u5.length === e5.byteLength) return u5;
        }
        if (o3 && e5 instanceof Uint8Array) return n4.from(e5);
        var d3 = r3(e5);
        if (d3) for (var f3 = 0; f3 < e5.length; f3 += 1) {
          var p3 = e5[f3];
          if (typeof p3 != `number` || p3 < 0 || p3 > 255 || ~~p3 !== p3) throw RangeError(`Array items must be numbers in the range 0-255.`);
        }
        if (d3 || n4.isBuffer(e5) && e5.constructor && typeof e5.constructor.isBuffer == `function` && e5.constructor.isBuffer(e5)) return n4.from(e5);
        throw TypeError(`The "data" argument must be a string, an Array, a Buffer, a Uint8Array, or a DataView.`);
      };
    }));
    Q = f(((e4, t4) => {
      var n4 = p2().Buffer, r3 = de();
      function i4(e5, t5) {
        this._block = n4.alloc(e5), this._finalSize = t5, this._blockSize = e5, this._len = 0;
      }
      i4.prototype.update = function(e5, t5) {
        e5 = r3(e5, t5 || `utf8`);
        for (var n5 = this._block, i5 = this._blockSize, a4 = e5.length, o3 = this._len, s3 = 0; s3 < a4; ) {
          for (var c4 = o3 % i5, l4 = Math.min(a4 - s3, i5 - c4), u5 = 0; u5 < l4; u5++) n5[c4 + u5] = e5[s3 + u5];
          o3 += l4, s3 += l4, o3 % i5 === 0 && this._update(n5);
        }
        return this._len += a4, this;
      }, i4.prototype.digest = function(e5) {
        var t5 = this._len % this._blockSize;
        this._block[t5] = 128, this._block.fill(0, t5 + 1), t5 >= this._finalSize && (this._update(this._block), this._block.fill(0));
        var n5 = this._len * 8;
        if (n5 <= 4294967295) this._block.writeUInt32BE(n5, this._blockSize - 4);
        else {
          var r4 = (n5 & 4294967295) >>> 0, i5 = (n5 - r4) / 4294967296;
          this._block.writeUInt32BE(i5, this._blockSize - 8), this._block.writeUInt32BE(r4, this._blockSize - 4);
        }
        this._update(this._block);
        var a4 = this._hash();
        return e5 ? a4.toString(e5) : a4;
      }, i4.prototype._update = function() {
        throw Error(`_update must be implemented by subclass`);
      }, t4.exports = i4;
    }));
    fe = f(((e4, t4) => {
      var n4 = f2(), r3 = Q(), i4 = p2().Buffer, a4 = [1518500249, 1859775393, -1894007588, -899497514], o3 = Array(80);
      function s3() {
        this.init(), this._w = o3, r3.call(this, 64, 56);
      }
      n4(s3, r3), s3.prototype.init = function() {
        return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
      };
      function c4(e5) {
        return e5 << 1 | e5 >>> 31;
      }
      function l4(e5) {
        return e5 << 5 | e5 >>> 27;
      }
      function u5(e5) {
        return e5 << 30 | e5 >>> 2;
      }
      function d3(e5, t5, n5, r4) {
        return e5 === 0 ? t5 & n5 | ~t5 & r4 : e5 === 2 ? t5 & n5 | t5 & r4 | n5 & r4 : t5 ^ n5 ^ r4;
      }
      s3.prototype._update = function(e5) {
        for (var t5 = this._w, n5 = this._a | 0, r4 = this._b | 0, i5 = this._c | 0, o4 = this._d | 0, s4 = this._e | 0, f3 = 0; f3 < 16; ++f3) t5[f3] = e5.readInt32BE(f3 * 4);
        for (; f3 < 80; ++f3) t5[f3] = c4(t5[f3 - 3] ^ t5[f3 - 8] ^ t5[f3 - 14] ^ t5[f3 - 16]);
        for (var p3 = 0; p3 < 80; ++p3) {
          var m4 = ~~(p3 / 20), h5 = l4(n5) + d3(m4, r4, i5, o4) + s4 + t5[p3] + a4[m4] | 0;
          s4 = o4, o4 = i5, i5 = u5(r4), r4 = n5, n5 = h5;
        }
        this._a = n5 + this._a | 0, this._b = r4 + this._b | 0, this._c = i5 + this._c | 0, this._d = o4 + this._d | 0, this._e = s4 + this._e | 0;
      }, s3.prototype._hash = function() {
        var e5 = i4.allocUnsafe(20);
        return e5.writeInt32BE(this._a | 0, 0), e5.writeInt32BE(this._b | 0, 4), e5.writeInt32BE(this._c | 0, 8), e5.writeInt32BE(this._d | 0, 12), e5.writeInt32BE(this._e | 0, 16), e5;
      }, t4.exports = s3;
    }));
    pe = f(((e4) => {
      (function(t4) {
        typeof DO_NOT_EXPORT_CRC > `u` ? typeof e4 == `object` ? t4(e4) : typeof define == `function` && define.amd ? define(function() {
          var e5 = {};
          return t4(e5), e5;
        }) : t4({}) : t4({});
      })(function(e5) {
        e5.version = `1.2.2`;
        function t4() {
          for (var e6 = 0, t5 = Array(256), n5 = 0; n5 != 256; ++n5) e6 = n5, e6 = e6 & 1 ? -306674912 ^ e6 >>> 1 : e6 >>> 1, e6 = e6 & 1 ? -306674912 ^ e6 >>> 1 : e6 >>> 1, e6 = e6 & 1 ? -306674912 ^ e6 >>> 1 : e6 >>> 1, e6 = e6 & 1 ? -306674912 ^ e6 >>> 1 : e6 >>> 1, e6 = e6 & 1 ? -306674912 ^ e6 >>> 1 : e6 >>> 1, e6 = e6 & 1 ? -306674912 ^ e6 >>> 1 : e6 >>> 1, e6 = e6 & 1 ? -306674912 ^ e6 >>> 1 : e6 >>> 1, e6 = e6 & 1 ? -306674912 ^ e6 >>> 1 : e6 >>> 1, t5[n5] = e6;
          return typeof Int32Array < `u` ? new Int32Array(t5) : t5;
        }
        var n4 = t4();
        function r3(e6) {
          var t5 = 0, n5 = 0, r4 = 0, i5 = typeof Int32Array < `u` ? new Int32Array(4096) : Array(4096);
          for (r4 = 0; r4 != 256; ++r4) i5[r4] = e6[r4];
          for (r4 = 0; r4 != 256; ++r4) for (n5 = e6[r4], t5 = 256 + r4; t5 < 4096; t5 += 256) n5 = i5[t5] = n5 >>> 8 ^ e6[n5 & 255];
          var a5 = [];
          for (r4 = 1; r4 != 16; ++r4) a5[r4 - 1] = typeof Int32Array < `u` ? i5.subarray(r4 * 256, r4 * 256 + 256) : i5.slice(r4 * 256, r4 * 256 + 256);
          return a5;
        }
        var i4 = r3(n4), a4 = i4[0], o3 = i4[1], s3 = i4[2], c4 = i4[3], l4 = i4[4], u5 = i4[5], d3 = i4[6], f3 = i4[7], p3 = i4[8], m4 = i4[9], h5 = i4[10], g4 = i4[11], _4 = i4[12], v4 = i4[13], y5 = i4[14];
        function b4(e6, t5) {
          for (var r4 = t5 ^ -1, i5 = 0, a5 = e6.length; i5 < a5; ) r4 = r4 >>> 8 ^ n4[(r4 ^ e6.charCodeAt(i5++)) & 255];
          return ~r4;
        }
        function x4(e6, t5) {
          for (var r4 = t5 ^ -1, i5 = e6.length - 15, b5 = 0; b5 < i5; ) r4 = y5[e6[b5++] ^ r4 & 255] ^ v4[e6[b5++] ^ r4 >> 8 & 255] ^ _4[e6[b5++] ^ r4 >> 16 & 255] ^ g4[e6[b5++] ^ r4 >>> 24] ^ h5[e6[b5++]] ^ m4[e6[b5++]] ^ p3[e6[b5++]] ^ f3[e6[b5++]] ^ d3[e6[b5++]] ^ u5[e6[b5++]] ^ l4[e6[b5++]] ^ c4[e6[b5++]] ^ s3[e6[b5++]] ^ o3[e6[b5++]] ^ a4[e6[b5++]] ^ n4[e6[b5++]];
          for (i5 += 15; b5 < i5; ) r4 = r4 >>> 8 ^ n4[(r4 ^ e6[b5++]) & 255];
          return ~r4;
        }
        function S4(e6, t5) {
          for (var r4 = t5 ^ -1, i5 = 0, a5 = e6.length, o4 = 0, s4 = 0; i5 < a5; ) o4 = e6.charCodeAt(i5++), o4 < 128 ? r4 = r4 >>> 8 ^ n4[(r4 ^ o4) & 255] : o4 < 2048 ? (r4 = r4 >>> 8 ^ n4[(r4 ^ (192 | o4 >> 6 & 31)) & 255], r4 = r4 >>> 8 ^ n4[(r4 ^ (128 | o4 & 63)) & 255]) : o4 >= 55296 && o4 < 57344 ? (o4 = (o4 & 1023) + 64, s4 = e6.charCodeAt(i5++) & 1023, r4 = r4 >>> 8 ^ n4[(r4 ^ (240 | o4 >> 8 & 7)) & 255], r4 = r4 >>> 8 ^ n4[(r4 ^ (128 | o4 >> 2 & 63)) & 255], r4 = r4 >>> 8 ^ n4[(r4 ^ (128 | s4 >> 6 & 15 | (o4 & 3) << 4)) & 255], r4 = r4 >>> 8 ^ n4[(r4 ^ (128 | s4 & 63)) & 255]) : (r4 = r4 >>> 8 ^ n4[(r4 ^ (224 | o4 >> 12 & 15)) & 255], r4 = r4 >>> 8 ^ n4[(r4 ^ (128 | o4 >> 6 & 63)) & 255], r4 = r4 >>> 8 ^ n4[(r4 ^ (128 | o4 & 63)) & 255]);
          return ~r4;
        }
        e5.table = n4, e5.bstr = b4, e5.buf = x4, e5.str = S4;
      });
    }));
    $ = f(((e4) => {
      var t4 = typeof Uint8Array < `u` && typeof Uint16Array < `u` && typeof Int32Array < `u`;
      function n4(e5, t5) {
        return Object.prototype.hasOwnProperty.call(e5, t5);
      }
      e4.assign = function(e5) {
        for (var t5 = Array.prototype.slice.call(arguments, 1); t5.length; ) {
          var r4 = t5.shift();
          if (r4) {
            if (typeof r4 != `object`) throw TypeError(r4 + `must be non-object`);
            for (var i5 in r4) n4(r4, i5) && (e5[i5] = r4[i5]);
          }
        }
        return e5;
      }, e4.shrinkBuf = function(e5, t5) {
        return e5.length === t5 ? e5 : e5.subarray ? e5.subarray(0, t5) : (e5.length = t5, e5);
      };
      var r3 = { arraySet: function(e5, t5, n5, r4, i5) {
        if (t5.subarray && e5.subarray) {
          e5.set(t5.subarray(n5, n5 + r4), i5);
          return;
        }
        for (var a4 = 0; a4 < r4; a4++) e5[i5 + a4] = t5[n5 + a4];
      }, flattenChunks: function(e5) {
        var t5, n5, r4 = 0, i5, a4, o3;
        for (t5 = 0, n5 = e5.length; t5 < n5; t5++) r4 += e5[t5].length;
        for (o3 = new Uint8Array(r4), i5 = 0, t5 = 0, n5 = e5.length; t5 < n5; t5++) a4 = e5[t5], o3.set(a4, i5), i5 += a4.length;
        return o3;
      } }, i4 = { arraySet: function(e5, t5, n5, r4, i5) {
        for (var a4 = 0; a4 < r4; a4++) e5[i5 + a4] = t5[n5 + a4];
      }, flattenChunks: function(e5) {
        return [].concat.apply([], e5);
      } };
      e4.setTyped = function(t5) {
        t5 ? (e4.Buf8 = Uint8Array, e4.Buf16 = Uint16Array, e4.Buf32 = Int32Array, e4.assign(e4, r3)) : (e4.Buf8 = Array, e4.Buf16 = Array, e4.Buf32 = Array, e4.assign(e4, i4));
      }, e4.setTyped(t4);
    }));
    me = f(((e4) => {
      var t4 = $(), n4 = 4, r3 = 0, i4 = 1, a4 = 2;
      function o3(e5) {
        for (var t5 = e5.length; --t5 >= 0; ) e5[t5] = 0;
      }
      var s3 = 0, c4 = 1, l4 = 2, u5 = 3, d3 = 258, f3 = 29, p3 = 256, m4 = p3 + 1 + f3, h5 = 30, g4 = 19, _4 = 2 * m4 + 1, v4 = 15, y5 = 16, b4 = 7, x4 = 256, S4 = 16, C5 = 17, w4 = 18, T4 = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], E4 = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], D4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], O4 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], k4 = 512, A4 = Array((m4 + 2) * 2);
      o3(A4);
      var j4 = Array(h5 * 2);
      o3(j4);
      var M4 = Array(k4);
      o3(M4);
      var N4 = Array(d3 - u5 + 1);
      o3(N4);
      var P4 = Array(f3);
      o3(P4);
      var F4 = Array(h5);
      o3(F4);
      function ee3(e5, t5, n5, r4, i5) {
        this.static_tree = e5, this.extra_bits = t5, this.extra_base = n5, this.elems = r4, this.max_length = i5, this.has_stree = e5 && e5.length;
      }
      var I5, L4, R5;
      function te3(e5, t5) {
        this.dyn_tree = e5, this.max_code = 0, this.stat_desc = t5;
      }
      function ne3(e5) {
        return e5 < 256 ? M4[e5] : M4[256 + (e5 >>> 7)];
      }
      function z4(e5, t5) {
        e5.pending_buf[e5.pending++] = t5 & 255, e5.pending_buf[e5.pending++] = t5 >>> 8 & 255;
      }
      function B4(e5, t5, n5) {
        e5.bi_valid > y5 - n5 ? (e5.bi_buf |= t5 << e5.bi_valid & 65535, z4(e5, e5.bi_buf), e5.bi_buf = t5 >> y5 - e5.bi_valid, e5.bi_valid += n5 - y5) : (e5.bi_buf |= t5 << e5.bi_valid & 65535, e5.bi_valid += n5);
      }
      function V4(e5, t5, n5) {
        B4(e5, n5[t5 * 2], n5[t5 * 2 + 1]);
      }
      function H3(e5, t5) {
        var n5 = 0;
        do
          n5 |= e5 & 1, e5 >>>= 1, n5 <<= 1;
        while (--t5 > 0);
        return n5 >>> 1;
      }
      function re3(e5) {
        e5.bi_valid === 16 ? (z4(e5, e5.bi_buf), e5.bi_buf = 0, e5.bi_valid = 0) : e5.bi_valid >= 8 && (e5.pending_buf[e5.pending++] = e5.bi_buf & 255, e5.bi_buf >>= 8, e5.bi_valid -= 8);
      }
      function ie3(e5, t5) {
        var n5 = t5.dyn_tree, r4 = t5.max_code, i5 = t5.stat_desc.static_tree, a5 = t5.stat_desc.has_stree, o4 = t5.stat_desc.extra_bits, s4 = t5.stat_desc.extra_base, c5 = t5.stat_desc.max_length, l5, u6, d4, f4, p4, m5, h6 = 0;
        for (f4 = 0; f4 <= v4; f4++) e5.bl_count[f4] = 0;
        for (n5[e5.heap[e5.heap_max] * 2 + 1] = 0, l5 = e5.heap_max + 1; l5 < _4; l5++) u6 = e5.heap[l5], f4 = n5[n5[u6 * 2 + 1] * 2 + 1] + 1, f4 > c5 && (f4 = c5, h6++), n5[u6 * 2 + 1] = f4, !(u6 > r4) && (e5.bl_count[f4]++, p4 = 0, u6 >= s4 && (p4 = o4[u6 - s4]), m5 = n5[u6 * 2], e5.opt_len += m5 * (f4 + p4), a5 && (e5.static_len += m5 * (i5[u6 * 2 + 1] + p4)));
        if (h6 !== 0) {
          do {
            for (f4 = c5 - 1; e5.bl_count[f4] === 0; ) f4--;
            e5.bl_count[f4]--, e5.bl_count[f4 + 1] += 2, e5.bl_count[c5]--, h6 -= 2;
          } while (h6 > 0);
          for (f4 = c5; f4 !== 0; f4--) for (u6 = e5.bl_count[f4]; u6 !== 0; ) d4 = e5.heap[--l5], !(d4 > r4) && (n5[d4 * 2 + 1] !== f4 && (e5.opt_len += (f4 - n5[d4 * 2 + 1]) * n5[d4 * 2], n5[d4 * 2 + 1] = f4), u6--);
        }
      }
      function ae3(e5, t5, n5) {
        var r4 = Array(v4 + 1), i5 = 0, a5, o4;
        for (a5 = 1; a5 <= v4; a5++) r4[a5] = i5 = i5 + n5[a5 - 1] << 1;
        for (o4 = 0; o4 <= t5; o4++) {
          var s4 = e5[o4 * 2 + 1];
          s4 !== 0 && (e5[o4 * 2] = H3(r4[s4]++, s4));
        }
      }
      function U4() {
        var e5, t5, n5, r4, i5, a5 = Array(v4 + 1);
        for (n5 = 0, r4 = 0; r4 < f3 - 1; r4++) for (P4[r4] = n5, e5 = 0; e5 < 1 << T4[r4]; e5++) N4[n5++] = r4;
        for (N4[n5 - 1] = r4, i5 = 0, r4 = 0; r4 < 16; r4++) for (F4[r4] = i5, e5 = 0; e5 < 1 << E4[r4]; e5++) M4[i5++] = r4;
        for (i5 >>= 7; r4 < h5; r4++) for (F4[r4] = i5 << 7, e5 = 0; e5 < 1 << E4[r4] - 7; e5++) M4[256 + i5++] = r4;
        for (t5 = 0; t5 <= v4; t5++) a5[t5] = 0;
        for (e5 = 0; e5 <= 143; ) A4[e5 * 2 + 1] = 8, e5++, a5[8]++;
        for (; e5 <= 255; ) A4[e5 * 2 + 1] = 9, e5++, a5[9]++;
        for (; e5 <= 279; ) A4[e5 * 2 + 1] = 7, e5++, a5[7]++;
        for (; e5 <= 287; ) A4[e5 * 2 + 1] = 8, e5++, a5[8]++;
        for (ae3(A4, m4 + 1, a5), e5 = 0; e5 < h5; e5++) j4[e5 * 2 + 1] = 5, j4[e5 * 2] = H3(e5, 5);
        I5 = new ee3(A4, T4, p3 + 1, m4, v4), L4 = new ee3(j4, E4, 0, h5, v4), R5 = new ee3([], D4, 0, g4, b4);
      }
      function W3(e5) {
        var t5;
        for (t5 = 0; t5 < m4; t5++) e5.dyn_ltree[t5 * 2] = 0;
        for (t5 = 0; t5 < h5; t5++) e5.dyn_dtree[t5 * 2] = 0;
        for (t5 = 0; t5 < g4; t5++) e5.bl_tree[t5 * 2] = 0;
        e5.dyn_ltree[x4 * 2] = 1, e5.opt_len = e5.static_len = 0, e5.last_lit = e5.matches = 0;
      }
      function oe3(e5) {
        e5.bi_valid > 8 ? z4(e5, e5.bi_buf) : e5.bi_valid > 0 && (e5.pending_buf[e5.pending++] = e5.bi_buf), e5.bi_buf = 0, e5.bi_valid = 0;
      }
      function se3(e5, n5, r4, i5) {
        oe3(e5), i5 && (z4(e5, r4), z4(e5, ~r4)), t4.arraySet(e5.pending_buf, e5.window, n5, r4, e5.pending), e5.pending += r4;
      }
      function G3(e5, t5, n5, r4) {
        var i5 = t5 * 2, a5 = n5 * 2;
        return e5[i5] < e5[a5] || e5[i5] === e5[a5] && r4[t5] <= r4[n5];
      }
      function K3(e5, t5, n5) {
        for (var r4 = e5.heap[n5], i5 = n5 << 1; i5 <= e5.heap_len && (i5 < e5.heap_len && G3(t5, e5.heap[i5 + 1], e5.heap[i5], e5.depth) && i5++, !G3(t5, r4, e5.heap[i5], e5.depth)); ) e5.heap[n5] = e5.heap[i5], n5 = i5, i5 <<= 1;
        e5.heap[n5] = r4;
      }
      function ce3(e5, t5, n5) {
        var r4, i5, a5 = 0, o4, s4;
        if (e5.last_lit !== 0) do
          r4 = e5.pending_buf[e5.d_buf + a5 * 2] << 8 | e5.pending_buf[e5.d_buf + a5 * 2 + 1], i5 = e5.pending_buf[e5.l_buf + a5], a5++, r4 === 0 ? V4(e5, i5, t5) : (o4 = N4[i5], V4(e5, o4 + p3 + 1, t5), s4 = T4[o4], s4 !== 0 && (i5 -= P4[o4], B4(e5, i5, s4)), r4--, o4 = ne3(r4), V4(e5, o4, n5), s4 = E4[o4], s4 !== 0 && (r4 -= F4[o4], B4(e5, r4, s4)));
        while (a5 < e5.last_lit);
        V4(e5, x4, t5);
      }
      function le3(e5, t5) {
        var n5 = t5.dyn_tree, r4 = t5.stat_desc.static_tree, i5 = t5.stat_desc.has_stree, a5 = t5.stat_desc.elems, o4, s4, c5 = -1, l5;
        for (e5.heap_len = 0, e5.heap_max = _4, o4 = 0; o4 < a5; o4++) n5[o4 * 2] === 0 ? n5[o4 * 2 + 1] = 0 : (e5.heap[++e5.heap_len] = c5 = o4, e5.depth[o4] = 0);
        for (; e5.heap_len < 2; ) l5 = e5.heap[++e5.heap_len] = c5 < 2 ? ++c5 : 0, n5[l5 * 2] = 1, e5.depth[l5] = 0, e5.opt_len--, i5 && (e5.static_len -= r4[l5 * 2 + 1]);
        for (t5.max_code = c5, o4 = e5.heap_len >> 1; o4 >= 1; o4--) K3(e5, n5, o4);
        l5 = a5;
        do
          o4 = e5.heap[1], e5.heap[1] = e5.heap[e5.heap_len--], K3(e5, n5, 1), s4 = e5.heap[1], e5.heap[--e5.heap_max] = o4, e5.heap[--e5.heap_max] = s4, n5[l5 * 2] = n5[o4 * 2] + n5[s4 * 2], e5.depth[l5] = (e5.depth[o4] >= e5.depth[s4] ? e5.depth[o4] : e5.depth[s4]) + 1, n5[o4 * 2 + 1] = n5[s4 * 2 + 1] = l5, e5.heap[1] = l5++, K3(e5, n5, 1);
        while (e5.heap_len >= 2);
        e5.heap[--e5.heap_max] = e5.heap[1], ie3(e5, t5), ae3(n5, c5, e5.bl_count);
      }
      function q3(e5, t5, n5) {
        var r4, i5 = -1, a5, o4 = t5[1], s4 = 0, c5 = 7, l5 = 4;
        for (o4 === 0 && (c5 = 138, l5 = 3), t5[(n5 + 1) * 2 + 1] = 65535, r4 = 0; r4 <= n5; r4++) a5 = o4, o4 = t5[(r4 + 1) * 2 + 1], !(++s4 < c5 && a5 === o4) && (s4 < l5 ? e5.bl_tree[a5 * 2] += s4 : a5 === 0 ? s4 <= 10 ? e5.bl_tree[C5 * 2]++ : e5.bl_tree[w4 * 2]++ : (a5 !== i5 && e5.bl_tree[a5 * 2]++, e5.bl_tree[S4 * 2]++), s4 = 0, i5 = a5, o4 === 0 ? (c5 = 138, l5 = 3) : a5 === o4 ? (c5 = 6, l5 = 3) : (c5 = 7, l5 = 4));
      }
      function ue3(e5, t5, n5) {
        var r4, i5 = -1, a5, o4 = t5[1], s4 = 0, c5 = 7, l5 = 4;
        for (o4 === 0 && (c5 = 138, l5 = 3), r4 = 0; r4 <= n5; r4++) if (a5 = o4, o4 = t5[(r4 + 1) * 2 + 1], !(++s4 < c5 && a5 === o4)) {
          if (s4 < l5) do
            V4(e5, a5, e5.bl_tree);
          while (--s4 !== 0);
          else a5 === 0 ? s4 <= 10 ? (V4(e5, C5, e5.bl_tree), B4(e5, s4 - 3, 3)) : (V4(e5, w4, e5.bl_tree), B4(e5, s4 - 11, 7)) : (a5 !== i5 && (V4(e5, a5, e5.bl_tree), s4--), V4(e5, S4, e5.bl_tree), B4(e5, s4 - 3, 2));
          s4 = 0, i5 = a5, o4 === 0 ? (c5 = 138, l5 = 3) : a5 === o4 ? (c5 = 6, l5 = 3) : (c5 = 7, l5 = 4);
        }
      }
      function J3(e5) {
        var t5;
        for (q3(e5, e5.dyn_ltree, e5.l_desc.max_code), q3(e5, e5.dyn_dtree, e5.d_desc.max_code), le3(e5, e5.bl_desc), t5 = g4 - 1; t5 >= 3 && e5.bl_tree[O4[t5] * 2 + 1] === 0; t5--) ;
        return e5.opt_len += 3 * (t5 + 1) + 5 + 5 + 4, t5;
      }
      function Y3(e5, t5, n5, r4) {
        var i5;
        for (B4(e5, t5 - 257, 5), B4(e5, n5 - 1, 5), B4(e5, r4 - 4, 4), i5 = 0; i5 < r4; i5++) B4(e5, e5.bl_tree[O4[i5] * 2 + 1], 3);
        ue3(e5, e5.dyn_ltree, t5 - 1), ue3(e5, e5.dyn_dtree, n5 - 1);
      }
      function X3(e5) {
        var t5 = 4093624447, n5;
        for (n5 = 0; n5 <= 31; n5++, t5 >>>= 1) if (t5 & 1 && e5.dyn_ltree[n5 * 2] !== 0) return r3;
        if (e5.dyn_ltree[18] !== 0 || e5.dyn_ltree[20] !== 0 || e5.dyn_ltree[26] !== 0) return i4;
        for (n5 = 32; n5 < p3; n5++) if (e5.dyn_ltree[n5 * 2] !== 0) return i4;
        return r3;
      }
      var Z3 = false;
      function de3(e5) {
        Z3 ||= (U4(), true), e5.l_desc = new te3(e5.dyn_ltree, I5), e5.d_desc = new te3(e5.dyn_dtree, L4), e5.bl_desc = new te3(e5.bl_tree, R5), e5.bi_buf = 0, e5.bi_valid = 0, W3(e5);
      }
      function Q3(e5, t5, n5, r4) {
        B4(e5, (s3 << 1) + +!!r4, 3), se3(e5, t5, n5, true);
      }
      function fe3(e5) {
        B4(e5, c4 << 1, 3), V4(e5, x4, A4), re3(e5);
      }
      function pe3(e5, t5, r4, i5) {
        var o4, s4, u6 = 0;
        e5.level > 0 ? (e5.strm.data_type === a4 && (e5.strm.data_type = X3(e5)), le3(e5, e5.l_desc), le3(e5, e5.d_desc), u6 = J3(e5), o4 = e5.opt_len + 3 + 7 >>> 3, s4 = e5.static_len + 3 + 7 >>> 3, s4 <= o4 && (o4 = s4)) : o4 = s4 = r4 + 5, r4 + 4 <= o4 && t5 !== -1 ? Q3(e5, t5, r4, i5) : e5.strategy === n4 || s4 === o4 ? (B4(e5, (c4 << 1) + +!!i5, 3), ce3(e5, A4, j4)) : (B4(e5, (l4 << 1) + +!!i5, 3), Y3(e5, e5.l_desc.max_code + 1, e5.d_desc.max_code + 1, u6 + 1), ce3(e5, e5.dyn_ltree, e5.dyn_dtree)), W3(e5), i5 && oe3(e5);
      }
      function me3(e5, t5, n5) {
        return e5.pending_buf[e5.d_buf + e5.last_lit * 2] = t5 >>> 8 & 255, e5.pending_buf[e5.d_buf + e5.last_lit * 2 + 1] = t5 & 255, e5.pending_buf[e5.l_buf + e5.last_lit] = n5 & 255, e5.last_lit++, t5 === 0 ? e5.dyn_ltree[n5 * 2]++ : (e5.matches++, t5--, e5.dyn_ltree[(N4[n5] + p3 + 1) * 2]++, e5.dyn_dtree[ne3(t5) * 2]++), e5.last_lit === e5.lit_bufsize - 1;
      }
      e4._tr_init = de3, e4._tr_stored_block = Q3, e4._tr_flush_block = pe3, e4._tr_tally = me3, e4._tr_align = fe3;
    }));
    he = f(((e4, t4) => {
      function n4(e5, t5, n5, r3) {
        for (var i4 = e5 & 65535 | 0, a4 = e5 >>> 16 & 65535 | 0, o3 = 0; n5 !== 0; ) {
          o3 = n5 > 2e3 ? 2e3 : n5, n5 -= o3;
          do
            i4 = i4 + t5[r3++] | 0, a4 = a4 + i4 | 0;
          while (--o3);
          i4 %= 65521, a4 %= 65521;
        }
        return i4 | a4 << 16 | 0;
      }
      t4.exports = n4;
    }));
    ge = f(((e4, t4) => {
      function n4() {
        for (var e5, t5 = [], n5 = 0; n5 < 256; n5++) {
          e5 = n5;
          for (var r4 = 0; r4 < 8; r4++) e5 = e5 & 1 ? 3988292384 ^ e5 >>> 1 : e5 >>> 1;
          t5[n5] = e5;
        }
        return t5;
      }
      var r3 = n4();
      function i4(e5, t5, n5, i5) {
        var a4 = r3, o3 = i5 + n5;
        e5 ^= -1;
        for (var s3 = i5; s3 < o3; s3++) e5 = e5 >>> 8 ^ a4[(e5 ^ t5[s3]) & 255];
        return e5 ^ -1;
      }
      t4.exports = i4;
    }));
    _e = f(((e4, t4) => {
      t4.exports = { 2: `need dictionary`, 1: `stream end`, 0: ``, "-1": `file error`, "-2": `stream error`, "-3": `data error`, "-4": `insufficient memory`, "-5": `buffer error`, "-6": `incompatible version` };
    }));
    ve = f(((e4) => {
      var t4 = $(), n4 = me(), r3 = he(), i4 = ge(), a4 = _e(), o3 = 0, s3 = 1, c4 = 3, l4 = 4, u5 = 5, d3 = 0, f3 = 1, p3 = -2, m4 = -3, h5 = -5, g4 = -1, _4 = 1, v4 = 2, y5 = 3, b4 = 4, x4 = 0, S4 = 2, C5 = 8, w4 = 9, T4 = 15, E4 = 8, D4 = 286, O4 = 30, k4 = 19, A4 = 2 * D4 + 1, j4 = 15, M4 = 3, N4 = 258, P4 = N4 + M4 + 1, F4 = 32, ee3 = 42, I5 = 69, L4 = 73, R5 = 91, te3 = 103, ne3 = 113, z4 = 666, B4 = 1, V4 = 2, H3 = 3, re3 = 4, ie3 = 3;
      function ae3(e5, t5) {
        return e5.msg = a4[t5], t5;
      }
      function U4(e5) {
        return (e5 << 1) - (e5 > 4 ? 9 : 0);
      }
      function W3(e5) {
        for (var t5 = e5.length; --t5 >= 0; ) e5[t5] = 0;
      }
      function oe3(e5) {
        var n5 = e5.state, r4 = n5.pending;
        r4 > e5.avail_out && (r4 = e5.avail_out), r4 !== 0 && (t4.arraySet(e5.output, n5.pending_buf, n5.pending_out, r4, e5.next_out), e5.next_out += r4, n5.pending_out += r4, e5.total_out += r4, e5.avail_out -= r4, n5.pending -= r4, n5.pending === 0 && (n5.pending_out = 0));
      }
      function se3(e5, t5) {
        n4._tr_flush_block(e5, e5.block_start >= 0 ? e5.block_start : -1, e5.strstart - e5.block_start, t5), e5.block_start = e5.strstart, oe3(e5.strm);
      }
      function G3(e5, t5) {
        e5.pending_buf[e5.pending++] = t5;
      }
      function K3(e5, t5) {
        e5.pending_buf[e5.pending++] = t5 >>> 8 & 255, e5.pending_buf[e5.pending++] = t5 & 255;
      }
      function ce3(e5, n5, a5, o4) {
        var s4 = e5.avail_in;
        return s4 > o4 && (s4 = o4), s4 === 0 ? 0 : (e5.avail_in -= s4, t4.arraySet(n5, e5.input, e5.next_in, s4, a5), e5.state.wrap === 1 ? e5.adler = r3(e5.adler, n5, s4, a5) : e5.state.wrap === 2 && (e5.adler = i4(e5.adler, n5, s4, a5)), e5.next_in += s4, e5.total_in += s4, s4);
      }
      function le3(e5, t5) {
        var n5 = e5.max_chain_length, r4 = e5.strstart, i5, a5, o4 = e5.prev_length, s4 = e5.nice_match, c5 = e5.strstart > e5.w_size - P4 ? e5.strstart - (e5.w_size - P4) : 0, l5 = e5.window, u6 = e5.w_mask, d4 = e5.prev, f4 = e5.strstart + N4, p4 = l5[r4 + o4 - 1], m5 = l5[r4 + o4];
        e5.prev_length >= e5.good_match && (n5 >>= 2), s4 > e5.lookahead && (s4 = e5.lookahead);
        do {
          if (i5 = t5, l5[i5 + o4] !== m5 || l5[i5 + o4 - 1] !== p4 || l5[i5] !== l5[r4] || l5[++i5] !== l5[r4 + 1]) continue;
          r4 += 2, i5++;
          do
            ;
          while (l5[++r4] === l5[++i5] && l5[++r4] === l5[++i5] && l5[++r4] === l5[++i5] && l5[++r4] === l5[++i5] && l5[++r4] === l5[++i5] && l5[++r4] === l5[++i5] && l5[++r4] === l5[++i5] && l5[++r4] === l5[++i5] && r4 < f4);
          if (a5 = N4 - (f4 - r4), r4 = f4 - N4, a5 > o4) {
            if (e5.match_start = t5, o4 = a5, a5 >= s4) break;
            p4 = l5[r4 + o4 - 1], m5 = l5[r4 + o4];
          }
        } while ((t5 = d4[t5 & u6]) > c5 && --n5 !== 0);
        return o4 <= e5.lookahead ? o4 : e5.lookahead;
      }
      function q3(e5) {
        var n5 = e5.w_size, r4, i5, a5, o4, s4;
        do {
          if (o4 = e5.window_size - e5.lookahead - e5.strstart, e5.strstart >= n5 + (n5 - P4)) {
            t4.arraySet(e5.window, e5.window, n5, n5, 0), e5.match_start -= n5, e5.strstart -= n5, e5.block_start -= n5, i5 = e5.hash_size, r4 = i5;
            do
              a5 = e5.head[--r4], e5.head[r4] = a5 >= n5 ? a5 - n5 : 0;
            while (--i5);
            i5 = n5, r4 = i5;
            do
              a5 = e5.prev[--r4], e5.prev[r4] = a5 >= n5 ? a5 - n5 : 0;
            while (--i5);
            o4 += n5;
          }
          if (e5.strm.avail_in === 0) break;
          if (i5 = ce3(e5.strm, e5.window, e5.strstart + e5.lookahead, o4), e5.lookahead += i5, e5.lookahead + e5.insert >= M4) for (s4 = e5.strstart - e5.insert, e5.ins_h = e5.window[s4], e5.ins_h = (e5.ins_h << e5.hash_shift ^ e5.window[s4 + 1]) & e5.hash_mask; e5.insert && (e5.ins_h = (e5.ins_h << e5.hash_shift ^ e5.window[s4 + M4 - 1]) & e5.hash_mask, e5.prev[s4 & e5.w_mask] = e5.head[e5.ins_h], e5.head[e5.ins_h] = s4, s4++, e5.insert--, !(e5.lookahead + e5.insert < M4)); ) ;
        } while (e5.lookahead < P4 && e5.strm.avail_in !== 0);
      }
      function ue3(e5, t5) {
        var n5 = 65535;
        for (n5 > e5.pending_buf_size - 5 && (n5 = e5.pending_buf_size - 5); ; ) {
          if (e5.lookahead <= 1) {
            if (q3(e5), e5.lookahead === 0 && t5 === o3) return B4;
            if (e5.lookahead === 0) break;
          }
          e5.strstart += e5.lookahead, e5.lookahead = 0;
          var r4 = e5.block_start + n5;
          if ((e5.strstart === 0 || e5.strstart >= r4) && (e5.lookahead = e5.strstart - r4, e5.strstart = r4, se3(e5, false), e5.strm.avail_out === 0) || e5.strstart - e5.block_start >= e5.w_size - P4 && (se3(e5, false), e5.strm.avail_out === 0)) return B4;
        }
        return e5.insert = 0, t5 === l4 ? (se3(e5, true), e5.strm.avail_out === 0 ? H3 : re3) : (e5.strstart > e5.block_start && (se3(e5, false), e5.strm.avail_out), B4);
      }
      function J3(e5, t5) {
        for (var r4, i5; ; ) {
          if (e5.lookahead < P4) {
            if (q3(e5), e5.lookahead < P4 && t5 === o3) return B4;
            if (e5.lookahead === 0) break;
          }
          if (r4 = 0, e5.lookahead >= M4 && (e5.ins_h = (e5.ins_h << e5.hash_shift ^ e5.window[e5.strstart + M4 - 1]) & e5.hash_mask, r4 = e5.prev[e5.strstart & e5.w_mask] = e5.head[e5.ins_h], e5.head[e5.ins_h] = e5.strstart), r4 !== 0 && e5.strstart - r4 <= e5.w_size - P4 && (e5.match_length = le3(e5, r4)), e5.match_length >= M4) if (i5 = n4._tr_tally(e5, e5.strstart - e5.match_start, e5.match_length - M4), e5.lookahead -= e5.match_length, e5.match_length <= e5.max_lazy_match && e5.lookahead >= M4) {
            e5.match_length--;
            do
              e5.strstart++, e5.ins_h = (e5.ins_h << e5.hash_shift ^ e5.window[e5.strstart + M4 - 1]) & e5.hash_mask, r4 = e5.prev[e5.strstart & e5.w_mask] = e5.head[e5.ins_h], e5.head[e5.ins_h] = e5.strstart;
            while (--e5.match_length !== 0);
            e5.strstart++;
          } else e5.strstart += e5.match_length, e5.match_length = 0, e5.ins_h = e5.window[e5.strstart], e5.ins_h = (e5.ins_h << e5.hash_shift ^ e5.window[e5.strstart + 1]) & e5.hash_mask;
          else i5 = n4._tr_tally(e5, 0, e5.window[e5.strstart]), e5.lookahead--, e5.strstart++;
          if (i5 && (se3(e5, false), e5.strm.avail_out === 0)) return B4;
        }
        return e5.insert = e5.strstart < M4 - 1 ? e5.strstart : M4 - 1, t5 === l4 ? (se3(e5, true), e5.strm.avail_out === 0 ? H3 : re3) : e5.last_lit && (se3(e5, false), e5.strm.avail_out === 0) ? B4 : V4;
      }
      function Y3(e5, t5) {
        for (var r4, i5, a5; ; ) {
          if (e5.lookahead < P4) {
            if (q3(e5), e5.lookahead < P4 && t5 === o3) return B4;
            if (e5.lookahead === 0) break;
          }
          if (r4 = 0, e5.lookahead >= M4 && (e5.ins_h = (e5.ins_h << e5.hash_shift ^ e5.window[e5.strstart + M4 - 1]) & e5.hash_mask, r4 = e5.prev[e5.strstart & e5.w_mask] = e5.head[e5.ins_h], e5.head[e5.ins_h] = e5.strstart), e5.prev_length = e5.match_length, e5.prev_match = e5.match_start, e5.match_length = M4 - 1, r4 !== 0 && e5.prev_length < e5.max_lazy_match && e5.strstart - r4 <= e5.w_size - P4 && (e5.match_length = le3(e5, r4), e5.match_length <= 5 && (e5.strategy === _4 || e5.match_length === M4 && e5.strstart - e5.match_start > 4096) && (e5.match_length = M4 - 1)), e5.prev_length >= M4 && e5.match_length <= e5.prev_length) {
            a5 = e5.strstart + e5.lookahead - M4, i5 = n4._tr_tally(e5, e5.strstart - 1 - e5.prev_match, e5.prev_length - M4), e5.lookahead -= e5.prev_length - 1, e5.prev_length -= 2;
            do
              ++e5.strstart <= a5 && (e5.ins_h = (e5.ins_h << e5.hash_shift ^ e5.window[e5.strstart + M4 - 1]) & e5.hash_mask, r4 = e5.prev[e5.strstart & e5.w_mask] = e5.head[e5.ins_h], e5.head[e5.ins_h] = e5.strstart);
            while (--e5.prev_length !== 0);
            if (e5.match_available = 0, e5.match_length = M4 - 1, e5.strstart++, i5 && (se3(e5, false), e5.strm.avail_out === 0)) return B4;
          } else if (e5.match_available) {
            if (i5 = n4._tr_tally(e5, 0, e5.window[e5.strstart - 1]), i5 && se3(e5, false), e5.strstart++, e5.lookahead--, e5.strm.avail_out === 0) return B4;
          } else e5.match_available = 1, e5.strstart++, e5.lookahead--;
        }
        return e5.match_available &&= (i5 = n4._tr_tally(e5, 0, e5.window[e5.strstart - 1]), 0), e5.insert = e5.strstart < M4 - 1 ? e5.strstart : M4 - 1, t5 === l4 ? (se3(e5, true), e5.strm.avail_out === 0 ? H3 : re3) : e5.last_lit && (se3(e5, false), e5.strm.avail_out === 0) ? B4 : V4;
      }
      function X3(e5, t5) {
        for (var r4, i5, a5, s4, c5 = e5.window; ; ) {
          if (e5.lookahead <= N4) {
            if (q3(e5), e5.lookahead <= N4 && t5 === o3) return B4;
            if (e5.lookahead === 0) break;
          }
          if (e5.match_length = 0, e5.lookahead >= M4 && e5.strstart > 0 && (a5 = e5.strstart - 1, i5 = c5[a5], i5 === c5[++a5] && i5 === c5[++a5] && i5 === c5[++a5])) {
            s4 = e5.strstart + N4;
            do
              ;
            while (i5 === c5[++a5] && i5 === c5[++a5] && i5 === c5[++a5] && i5 === c5[++a5] && i5 === c5[++a5] && i5 === c5[++a5] && i5 === c5[++a5] && i5 === c5[++a5] && a5 < s4);
            e5.match_length = N4 - (s4 - a5), e5.match_length > e5.lookahead && (e5.match_length = e5.lookahead);
          }
          if (e5.match_length >= M4 ? (r4 = n4._tr_tally(e5, 1, e5.match_length - M4), e5.lookahead -= e5.match_length, e5.strstart += e5.match_length, e5.match_length = 0) : (r4 = n4._tr_tally(e5, 0, e5.window[e5.strstart]), e5.lookahead--, e5.strstart++), r4 && (se3(e5, false), e5.strm.avail_out === 0)) return B4;
        }
        return e5.insert = 0, t5 === l4 ? (se3(e5, true), e5.strm.avail_out === 0 ? H3 : re3) : e5.last_lit && (se3(e5, false), e5.strm.avail_out === 0) ? B4 : V4;
      }
      function Z3(e5, t5) {
        for (var r4; ; ) {
          if (e5.lookahead === 0 && (q3(e5), e5.lookahead === 0)) {
            if (t5 === o3) return B4;
            break;
          }
          if (e5.match_length = 0, r4 = n4._tr_tally(e5, 0, e5.window[e5.strstart]), e5.lookahead--, e5.strstart++, r4 && (se3(e5, false), e5.strm.avail_out === 0)) return B4;
        }
        return e5.insert = 0, t5 === l4 ? (se3(e5, true), e5.strm.avail_out === 0 ? H3 : re3) : e5.last_lit && (se3(e5, false), e5.strm.avail_out === 0) ? B4 : V4;
      }
      function de3(e5, t5, n5, r4, i5) {
        this.good_length = e5, this.max_lazy = t5, this.nice_length = n5, this.max_chain = r4, this.func = i5;
      }
      var Q3 = [new de3(0, 0, 0, 0, ue3), new de3(4, 4, 8, 4, J3), new de3(4, 5, 16, 8, J3), new de3(4, 6, 32, 32, J3), new de3(4, 4, 16, 16, Y3), new de3(8, 16, 32, 32, Y3), new de3(8, 16, 128, 128, Y3), new de3(8, 32, 128, 256, Y3), new de3(32, 128, 258, 1024, Y3), new de3(32, 258, 258, 4096, Y3)];
      function fe3(e5) {
        e5.window_size = 2 * e5.w_size, W3(e5.head), e5.max_lazy_match = Q3[e5.level].max_lazy, e5.good_match = Q3[e5.level].good_length, e5.nice_match = Q3[e5.level].nice_length, e5.max_chain_length = Q3[e5.level].max_chain, e5.strstart = 0, e5.block_start = 0, e5.lookahead = 0, e5.insert = 0, e5.match_length = e5.prev_length = M4 - 1, e5.match_available = 0, e5.ins_h = 0;
      }
      function pe3() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = C5, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new t4.Buf16(A4 * 2), this.dyn_dtree = new t4.Buf16((2 * O4 + 1) * 2), this.bl_tree = new t4.Buf16((2 * k4 + 1) * 2), W3(this.dyn_ltree), W3(this.dyn_dtree), W3(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new t4.Buf16(j4 + 1), this.heap = new t4.Buf16(2 * D4 + 1), W3(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new t4.Buf16(2 * D4 + 1), W3(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function ve3(e5) {
        var t5;
        return !e5 || !e5.state ? ae3(e5, p3) : (e5.total_in = e5.total_out = 0, e5.data_type = S4, t5 = e5.state, t5.pending = 0, t5.pending_out = 0, t5.wrap < 0 && (t5.wrap = -t5.wrap), t5.status = t5.wrap ? ee3 : ne3, e5.adler = t5.wrap === 2 ? 0 : 1, t5.last_flush = o3, n4._tr_init(t5), d3);
      }
      function ye3(e5) {
        var t5 = ve3(e5);
        return t5 === d3 && fe3(e5.state), t5;
      }
      function be3(e5, t5) {
        return !e5 || !e5.state || e5.state.wrap !== 2 ? p3 : (e5.state.gzhead = t5, d3);
      }
      function xe3(e5, n5, r4, i5, a5, o4) {
        if (!e5) return p3;
        var s4 = 1;
        if (n5 === g4 && (n5 = 6), i5 < 0 ? (s4 = 0, i5 = -i5) : i5 > 15 && (s4 = 2, i5 -= 16), a5 < 1 || a5 > w4 || r4 !== C5 || i5 < 8 || i5 > 15 || n5 < 0 || n5 > 9 || o4 < 0 || o4 > b4) return ae3(e5, p3);
        i5 === 8 && (i5 = 9);
        var c5 = new pe3();
        return e5.state = c5, c5.strm = e5, c5.wrap = s4, c5.gzhead = null, c5.w_bits = i5, c5.w_size = 1 << c5.w_bits, c5.w_mask = c5.w_size - 1, c5.hash_bits = a5 + 7, c5.hash_size = 1 << c5.hash_bits, c5.hash_mask = c5.hash_size - 1, c5.hash_shift = ~~((c5.hash_bits + M4 - 1) / M4), c5.window = new t4.Buf8(c5.w_size * 2), c5.head = new t4.Buf16(c5.hash_size), c5.prev = new t4.Buf16(c5.w_size), c5.lit_bufsize = 1 << a5 + 6, c5.pending_buf_size = c5.lit_bufsize * 4, c5.pending_buf = new t4.Buf8(c5.pending_buf_size), c5.d_buf = 1 * c5.lit_bufsize, c5.l_buf = 3 * c5.lit_bufsize, c5.level = n5, c5.strategy = o4, c5.method = r4, ye3(e5);
      }
      function Se3(e5, t5) {
        return xe3(e5, t5, C5, T4, E4, x4);
      }
      function Ce3(e5, t5) {
        var r4, a5, m5, g5;
        if (!e5 || !e5.state || t5 > u5 || t5 < 0) return e5 ? ae3(e5, p3) : p3;
        if (a5 = e5.state, !e5.output || !e5.input && e5.avail_in !== 0 || a5.status === z4 && t5 !== l4) return ae3(e5, e5.avail_out === 0 ? h5 : p3);
        if (a5.strm = e5, r4 = a5.last_flush, a5.last_flush = t5, a5.status === ee3) if (a5.wrap === 2) e5.adler = 0, G3(a5, 31), G3(a5, 139), G3(a5, 8), a5.gzhead ? (G3(a5, +!!a5.gzhead.text + (a5.gzhead.hcrc ? 2 : 0) + (a5.gzhead.extra ? 4 : 0) + (a5.gzhead.name ? 8 : 0) + (a5.gzhead.comment ? 16 : 0)), G3(a5, a5.gzhead.time & 255), G3(a5, a5.gzhead.time >> 8 & 255), G3(a5, a5.gzhead.time >> 16 & 255), G3(a5, a5.gzhead.time >> 24 & 255), G3(a5, a5.level === 9 ? 2 : a5.strategy >= v4 || a5.level < 2 ? 4 : 0), G3(a5, a5.gzhead.os & 255), a5.gzhead.extra && a5.gzhead.extra.length && (G3(a5, a5.gzhead.extra.length & 255), G3(a5, a5.gzhead.extra.length >> 8 & 255)), a5.gzhead.hcrc && (e5.adler = i4(e5.adler, a5.pending_buf, a5.pending, 0)), a5.gzindex = 0, a5.status = I5) : (G3(a5, 0), G3(a5, 0), G3(a5, 0), G3(a5, 0), G3(a5, 0), G3(a5, a5.level === 9 ? 2 : a5.strategy >= v4 || a5.level < 2 ? 4 : 0), G3(a5, ie3), a5.status = ne3);
        else {
          var _5 = C5 + (a5.w_bits - 8 << 4) << 8, b5 = -1;
          b5 = a5.strategy >= v4 || a5.level < 2 ? 0 : a5.level < 6 ? 1 : a5.level === 6 ? 2 : 3, _5 |= b5 << 6, a5.strstart !== 0 && (_5 |= F4), _5 += 31 - _5 % 31, a5.status = ne3, K3(a5, _5), a5.strstart !== 0 && (K3(a5, e5.adler >>> 16), K3(a5, e5.adler & 65535)), e5.adler = 1;
        }
        if (a5.status === I5) if (a5.gzhead.extra) {
          for (m5 = a5.pending; a5.gzindex < (a5.gzhead.extra.length & 65535) && !(a5.pending === a5.pending_buf_size && (a5.gzhead.hcrc && a5.pending > m5 && (e5.adler = i4(e5.adler, a5.pending_buf, a5.pending - m5, m5)), oe3(e5), m5 = a5.pending, a5.pending === a5.pending_buf_size)); ) G3(a5, a5.gzhead.extra[a5.gzindex] & 255), a5.gzindex++;
          a5.gzhead.hcrc && a5.pending > m5 && (e5.adler = i4(e5.adler, a5.pending_buf, a5.pending - m5, m5)), a5.gzindex === a5.gzhead.extra.length && (a5.gzindex = 0, a5.status = L4);
        } else a5.status = L4;
        if (a5.status === L4) if (a5.gzhead.name) {
          m5 = a5.pending;
          do {
            if (a5.pending === a5.pending_buf_size && (a5.gzhead.hcrc && a5.pending > m5 && (e5.adler = i4(e5.adler, a5.pending_buf, a5.pending - m5, m5)), oe3(e5), m5 = a5.pending, a5.pending === a5.pending_buf_size)) {
              g5 = 1;
              break;
            }
            g5 = a5.gzindex < a5.gzhead.name.length ? a5.gzhead.name.charCodeAt(a5.gzindex++) & 255 : 0, G3(a5, g5);
          } while (g5 !== 0);
          a5.gzhead.hcrc && a5.pending > m5 && (e5.adler = i4(e5.adler, a5.pending_buf, a5.pending - m5, m5)), g5 === 0 && (a5.gzindex = 0, a5.status = R5);
        } else a5.status = R5;
        if (a5.status === R5) if (a5.gzhead.comment) {
          m5 = a5.pending;
          do {
            if (a5.pending === a5.pending_buf_size && (a5.gzhead.hcrc && a5.pending > m5 && (e5.adler = i4(e5.adler, a5.pending_buf, a5.pending - m5, m5)), oe3(e5), m5 = a5.pending, a5.pending === a5.pending_buf_size)) {
              g5 = 1;
              break;
            }
            g5 = a5.gzindex < a5.gzhead.comment.length ? a5.gzhead.comment.charCodeAt(a5.gzindex++) & 255 : 0, G3(a5, g5);
          } while (g5 !== 0);
          a5.gzhead.hcrc && a5.pending > m5 && (e5.adler = i4(e5.adler, a5.pending_buf, a5.pending - m5, m5)), g5 === 0 && (a5.status = te3);
        } else a5.status = te3;
        if (a5.status === te3 && (a5.gzhead.hcrc ? (a5.pending + 2 > a5.pending_buf_size && oe3(e5), a5.pending + 2 <= a5.pending_buf_size && (G3(a5, e5.adler & 255), G3(a5, e5.adler >> 8 & 255), e5.adler = 0, a5.status = ne3)) : a5.status = ne3), a5.pending !== 0) {
          if (oe3(e5), e5.avail_out === 0) return a5.last_flush = -1, d3;
        } else if (e5.avail_in === 0 && U4(t5) <= U4(r4) && t5 !== l4) return ae3(e5, h5);
        if (a5.status === z4 && e5.avail_in !== 0) return ae3(e5, h5);
        if (e5.avail_in !== 0 || a5.lookahead !== 0 || t5 !== o3 && a5.status !== z4) {
          var x5 = a5.strategy === v4 ? Z3(a5, t5) : a5.strategy === y5 ? X3(a5, t5) : Q3[a5.level].func(a5, t5);
          if ((x5 === H3 || x5 === re3) && (a5.status = z4), x5 === B4 || x5 === H3) return e5.avail_out === 0 && (a5.last_flush = -1), d3;
          if (x5 === V4 && (t5 === s3 ? n4._tr_align(a5) : t5 !== u5 && (n4._tr_stored_block(a5, 0, 0, false), t5 === c4 && (W3(a5.head), a5.lookahead === 0 && (a5.strstart = 0, a5.block_start = 0, a5.insert = 0))), oe3(e5), e5.avail_out === 0)) return a5.last_flush = -1, d3;
        }
        return t5 === l4 ? a5.wrap <= 0 ? f3 : (a5.wrap === 2 ? (G3(a5, e5.adler & 255), G3(a5, e5.adler >> 8 & 255), G3(a5, e5.adler >> 16 & 255), G3(a5, e5.adler >> 24 & 255), G3(a5, e5.total_in & 255), G3(a5, e5.total_in >> 8 & 255), G3(a5, e5.total_in >> 16 & 255), G3(a5, e5.total_in >> 24 & 255)) : (K3(a5, e5.adler >>> 16), K3(a5, e5.adler & 65535)), oe3(e5), a5.wrap > 0 && (a5.wrap = -a5.wrap), a5.pending === 0 ? f3 : d3) : d3;
      }
      function we3(e5) {
        var t5;
        return !e5 || !e5.state ? p3 : (t5 = e5.state.status, t5 !== ee3 && t5 !== I5 && t5 !== L4 && t5 !== R5 && t5 !== te3 && t5 !== ne3 && t5 !== z4 ? ae3(e5, p3) : (e5.state = null, t5 === ne3 ? ae3(e5, m4) : d3));
      }
      function Te3(e5, n5) {
        var i5 = n5.length, a5, o4, s4, c5, l5, u6, f4, m5;
        if (!e5 || !e5.state || (a5 = e5.state, c5 = a5.wrap, c5 === 2 || c5 === 1 && a5.status !== ee3 || a5.lookahead)) return p3;
        for (c5 === 1 && (e5.adler = r3(e5.adler, n5, i5, 0)), a5.wrap = 0, i5 >= a5.w_size && (c5 === 0 && (W3(a5.head), a5.strstart = 0, a5.block_start = 0, a5.insert = 0), m5 = new t4.Buf8(a5.w_size), t4.arraySet(m5, n5, i5 - a5.w_size, a5.w_size, 0), n5 = m5, i5 = a5.w_size), l5 = e5.avail_in, u6 = e5.next_in, f4 = e5.input, e5.avail_in = i5, e5.next_in = 0, e5.input = n5, q3(a5); a5.lookahead >= M4; ) {
          o4 = a5.strstart, s4 = a5.lookahead - (M4 - 1);
          do
            a5.ins_h = (a5.ins_h << a5.hash_shift ^ a5.window[o4 + M4 - 1]) & a5.hash_mask, a5.prev[o4 & a5.w_mask] = a5.head[a5.ins_h], a5.head[a5.ins_h] = o4, o4++;
          while (--s4);
          a5.strstart = o4, a5.lookahead = M4 - 1, q3(a5);
        }
        return a5.strstart += a5.lookahead, a5.block_start = a5.strstart, a5.insert = a5.lookahead, a5.lookahead = 0, a5.match_length = a5.prev_length = M4 - 1, a5.match_available = 0, e5.next_in = u6, e5.input = f4, e5.avail_in = l5, a5.wrap = c5, d3;
      }
      e4.deflateInit = Se3, e4.deflateInit2 = xe3, e4.deflateReset = ye3, e4.deflateResetKeep = ve3, e4.deflateSetHeader = be3, e4.deflate = Ce3, e4.deflateEnd = we3, e4.deflateSetDictionary = Te3, e4.deflateInfo = `pako deflate (from Nodeca project)`;
    }));
    ye = f(((e4) => {
      var t4 = $(), n4 = true, r3 = true;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        n4 = false;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        r3 = false;
      }
      for (var i4 = new t4.Buf8(256), a4 = 0; a4 < 256; a4++) i4[a4] = a4 >= 252 ? 6 : a4 >= 248 ? 5 : a4 >= 240 ? 4 : a4 >= 224 ? 3 : a4 >= 192 ? 2 : 1;
      i4[254] = i4[254] = 1, e4.string2buf = function(e5) {
        var n5, r4, i5, a5, o4, s3 = e5.length, c4 = 0;
        for (a5 = 0; a5 < s3; a5++) r4 = e5.charCodeAt(a5), (r4 & 64512) == 55296 && a5 + 1 < s3 && (i5 = e5.charCodeAt(a5 + 1), (i5 & 64512) == 56320 && (r4 = 65536 + (r4 - 55296 << 10) + (i5 - 56320), a5++)), c4 += r4 < 128 ? 1 : r4 < 2048 ? 2 : r4 < 65536 ? 3 : 4;
        for (n5 = new t4.Buf8(c4), o4 = 0, a5 = 0; o4 < c4; a5++) r4 = e5.charCodeAt(a5), (r4 & 64512) == 55296 && a5 + 1 < s3 && (i5 = e5.charCodeAt(a5 + 1), (i5 & 64512) == 56320 && (r4 = 65536 + (r4 - 55296 << 10) + (i5 - 56320), a5++)), r4 < 128 ? n5[o4++] = r4 : r4 < 2048 ? (n5[o4++] = 192 | r4 >>> 6, n5[o4++] = 128 | r4 & 63) : r4 < 65536 ? (n5[o4++] = 224 | r4 >>> 12, n5[o4++] = 128 | r4 >>> 6 & 63, n5[o4++] = 128 | r4 & 63) : (n5[o4++] = 240 | r4 >>> 18, n5[o4++] = 128 | r4 >>> 12 & 63, n5[o4++] = 128 | r4 >>> 6 & 63, n5[o4++] = 128 | r4 & 63);
        return n5;
      };
      function o3(e5, i5) {
        if (i5 < 65534 && (e5.subarray && r3 || !e5.subarray && n4)) return String.fromCharCode.apply(null, t4.shrinkBuf(e5, i5));
        for (var a5 = ``, o4 = 0; o4 < i5; o4++) a5 += String.fromCharCode(e5[o4]);
        return a5;
      }
      e4.buf2binstring = function(e5) {
        return o3(e5, e5.length);
      }, e4.binstring2buf = function(e5) {
        for (var n5 = new t4.Buf8(e5.length), r4 = 0, i5 = n5.length; r4 < i5; r4++) n5[r4] = e5.charCodeAt(r4);
        return n5;
      }, e4.buf2string = function(e5, t5) {
        var n5, r4, a5, s3, c4 = t5 || e5.length, l4 = Array(c4 * 2);
        for (r4 = 0, n5 = 0; n5 < c4; ) {
          if (a5 = e5[n5++], a5 < 128) {
            l4[r4++] = a5;
            continue;
          }
          if (s3 = i4[a5], s3 > 4) {
            l4[r4++] = 65533, n5 += s3 - 1;
            continue;
          }
          for (a5 &= s3 === 2 ? 31 : s3 === 3 ? 15 : 7; s3 > 1 && n5 < c4; ) a5 = a5 << 6 | e5[n5++] & 63, s3--;
          if (s3 > 1) {
            l4[r4++] = 65533;
            continue;
          }
          a5 < 65536 ? l4[r4++] = a5 : (a5 -= 65536, l4[r4++] = 55296 | a5 >> 10 & 1023, l4[r4++] = 56320 | a5 & 1023);
        }
        return o3(l4, r4);
      }, e4.utf8border = function(e5, t5) {
        var n5;
        for (t5 ||= e5.length, t5 > e5.length && (t5 = e5.length), n5 = t5 - 1; n5 >= 0 && (e5[n5] & 192) == 128; ) n5--;
        return n5 < 0 || n5 === 0 ? t5 : n5 + i4[e5[n5]] > t5 ? n5 : t5;
      };
    }));
    be = f(((e4, t4) => {
      function n4() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = ``, this.state = null, this.data_type = 2, this.adler = 0;
      }
      t4.exports = n4;
    }));
    xe = f(((e4) => {
      var t4 = ve(), n4 = $(), r3 = ye(), i4 = _e(), a4 = be(), o3 = Object.prototype.toString, s3 = 0, c4 = 4, l4 = 0, u5 = 1, d3 = 2, f3 = -1, p3 = 0, m4 = 8;
      function h5(e5) {
        if (!(this instanceof h5)) return new h5(e5);
        this.options = n4.assign({ level: f3, method: m4, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: p3, to: `` }, e5 || {});
        var s4 = this.options;
        s4.raw && s4.windowBits > 0 ? s4.windowBits = -s4.windowBits : s4.gzip && s4.windowBits > 0 && s4.windowBits < 16 && (s4.windowBits += 16), this.err = 0, this.msg = ``, this.ended = false, this.chunks = [], this.strm = new a4(), this.strm.avail_out = 0;
        var c5 = t4.deflateInit2(this.strm, s4.level, s4.method, s4.windowBits, s4.memLevel, s4.strategy);
        if (c5 !== l4) throw Error(i4[c5]);
        if (s4.header && t4.deflateSetHeader(this.strm, s4.header), s4.dictionary) {
          var u6 = typeof s4.dictionary == `string` ? r3.string2buf(s4.dictionary) : o3.call(s4.dictionary) === `[object ArrayBuffer]` ? new Uint8Array(s4.dictionary) : s4.dictionary;
          if (c5 = t4.deflateSetDictionary(this.strm, u6), c5 !== l4) throw Error(i4[c5]);
          this._dict_set = true;
        }
      }
      h5.prototype.push = function(e5, i5) {
        var a5 = this.strm, f4 = this.options.chunkSize, p4, m5;
        if (this.ended) return false;
        m5 = i5 === ~~i5 ? i5 : i5 === true ? c4 : s3, typeof e5 == `string` ? a5.input = r3.string2buf(e5) : o3.call(e5) === `[object ArrayBuffer]` ? a5.input = new Uint8Array(e5) : a5.input = e5, a5.next_in = 0, a5.avail_in = a5.input.length;
        do {
          if (a5.avail_out === 0 && (a5.output = new n4.Buf8(f4), a5.next_out = 0, a5.avail_out = f4), p4 = t4.deflate(a5, m5), p4 !== u5 && p4 !== l4) return this.onEnd(p4), this.ended = true, false;
          (a5.avail_out === 0 || a5.avail_in === 0 && (m5 === c4 || m5 === d3)) && (this.options.to === `string` ? this.onData(r3.buf2binstring(n4.shrinkBuf(a5.output, a5.next_out))) : this.onData(n4.shrinkBuf(a5.output, a5.next_out)));
        } while ((a5.avail_in > 0 || a5.avail_out === 0) && p4 !== u5);
        return m5 === c4 ? (p4 = t4.deflateEnd(this.strm), this.onEnd(p4), this.ended = true, p4 === l4) : m5 === d3 ? (this.onEnd(l4), a5.avail_out = 0, true) : true;
      }, h5.prototype.onData = function(e5) {
        this.chunks.push(e5);
      }, h5.prototype.onEnd = function(e5) {
        e5 === l4 && (this.options.to === `string` ? this.result = this.chunks.join(``) : this.result = n4.flattenChunks(this.chunks)), this.chunks = [], this.err = e5, this.msg = this.strm.msg;
      };
      function g4(e5, t5) {
        var n5 = new h5(t5);
        if (n5.push(e5, true), n5.err) throw n5.msg || i4[n5.err];
        return n5.result;
      }
      function _4(e5, t5) {
        return t5 ||= {}, t5.raw = true, g4(e5, t5);
      }
      function v4(e5, t5) {
        return t5 ||= {}, t5.gzip = true, g4(e5, t5);
      }
      e4.Deflate = h5, e4.deflate = g4, e4.deflateRaw = _4, e4.gzip = v4;
    }));
    Se = f(((e4, t4) => {
      var n4 = 30, r3 = 12;
      t4.exports = function(e5, t5) {
        var i4 = e5.state, a4 = e5.next_in, o3, s3, c4, l4, u5, d3, f3, p3, m4, h5, g4, _4, v4, y5, b4, x4, S4, C5, w4, T4, E4, D4 = e5.input, O4;
        o3 = a4 + (e5.avail_in - 5), s3 = e5.next_out, O4 = e5.output, c4 = s3 - (t5 - e5.avail_out), l4 = s3 + (e5.avail_out - 257), u5 = i4.dmax, d3 = i4.wsize, f3 = i4.whave, p3 = i4.wnext, m4 = i4.window, h5 = i4.hold, g4 = i4.bits, _4 = i4.lencode, v4 = i4.distcode, y5 = (1 << i4.lenbits) - 1, b4 = (1 << i4.distbits) - 1;
        top: do {
          g4 < 15 && (h5 += D4[a4++] << g4, g4 += 8, h5 += D4[a4++] << g4, g4 += 8), x4 = _4[h5 & y5];
          dolen: for (; ; ) {
            if (S4 = x4 >>> 24, h5 >>>= S4, g4 -= S4, S4 = x4 >>> 16 & 255, S4 === 0) O4[s3++] = x4 & 65535;
            else if (S4 & 16) {
              C5 = x4 & 65535, S4 &= 15, S4 && (g4 < S4 && (h5 += D4[a4++] << g4, g4 += 8), C5 += h5 & (1 << S4) - 1, h5 >>>= S4, g4 -= S4), g4 < 15 && (h5 += D4[a4++] << g4, g4 += 8, h5 += D4[a4++] << g4, g4 += 8), x4 = v4[h5 & b4];
              dodist: for (; ; ) {
                if (S4 = x4 >>> 24, h5 >>>= S4, g4 -= S4, S4 = x4 >>> 16 & 255, S4 & 16) {
                  if (w4 = x4 & 65535, S4 &= 15, g4 < S4 && (h5 += D4[a4++] << g4, g4 += 8, g4 < S4 && (h5 += D4[a4++] << g4, g4 += 8)), w4 += h5 & (1 << S4) - 1, w4 > u5) {
                    e5.msg = `invalid distance too far back`, i4.mode = n4;
                    break top;
                  }
                  if (h5 >>>= S4, g4 -= S4, S4 = s3 - c4, w4 > S4) {
                    if (S4 = w4 - S4, S4 > f3 && i4.sane) {
                      e5.msg = `invalid distance too far back`, i4.mode = n4;
                      break top;
                    }
                    if (T4 = 0, E4 = m4, p3 === 0) {
                      if (T4 += d3 - S4, S4 < C5) {
                        C5 -= S4;
                        do
                          O4[s3++] = m4[T4++];
                        while (--S4);
                        T4 = s3 - w4, E4 = O4;
                      }
                    } else if (p3 < S4) {
                      if (T4 += d3 + p3 - S4, S4 -= p3, S4 < C5) {
                        C5 -= S4;
                        do
                          O4[s3++] = m4[T4++];
                        while (--S4);
                        if (T4 = 0, p3 < C5) {
                          S4 = p3, C5 -= S4;
                          do
                            O4[s3++] = m4[T4++];
                          while (--S4);
                          T4 = s3 - w4, E4 = O4;
                        }
                      }
                    } else if (T4 += p3 - S4, S4 < C5) {
                      C5 -= S4;
                      do
                        O4[s3++] = m4[T4++];
                      while (--S4);
                      T4 = s3 - w4, E4 = O4;
                    }
                    for (; C5 > 2; ) O4[s3++] = E4[T4++], O4[s3++] = E4[T4++], O4[s3++] = E4[T4++], C5 -= 3;
                    C5 && (O4[s3++] = E4[T4++], C5 > 1 && (O4[s3++] = E4[T4++]));
                  } else {
                    T4 = s3 - w4;
                    do
                      O4[s3++] = O4[T4++], O4[s3++] = O4[T4++], O4[s3++] = O4[T4++], C5 -= 3;
                    while (C5 > 2);
                    C5 && (O4[s3++] = O4[T4++], C5 > 1 && (O4[s3++] = O4[T4++]));
                  }
                } else if (S4 & 64) {
                  e5.msg = `invalid distance code`, i4.mode = n4;
                  break top;
                } else {
                  x4 = v4[(x4 & 65535) + (h5 & (1 << S4) - 1)];
                  continue dodist;
                }
                break;
              }
            } else if (!(S4 & 64)) {
              x4 = _4[(x4 & 65535) + (h5 & (1 << S4) - 1)];
              continue dolen;
            } else if (S4 & 32) {
              i4.mode = r3;
              break top;
            } else {
              e5.msg = `invalid literal/length code`, i4.mode = n4;
              break top;
            }
            break;
          }
        } while (a4 < o3 && s3 < l4);
        C5 = g4 >> 3, a4 -= C5, g4 -= C5 << 3, h5 &= (1 << g4) - 1, e5.next_in = a4, e5.next_out = s3, e5.avail_in = a4 < o3 ? 5 + (o3 - a4) : 5 - (a4 - o3), e5.avail_out = s3 < l4 ? 257 + (l4 - s3) : 257 - (s3 - l4), i4.hold = h5, i4.bits = g4;
      };
    }));
    Ce = f(((e4, t4) => {
      var n4 = $(), r3 = 15, i4 = 852, a4 = 592, o3 = 0, s3 = 1, c4 = 2, l4 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], u5 = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], d3 = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], f3 = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      t4.exports = function(e5, t5, p3, m4, h5, g4, _4, v4) {
        var y5 = v4.bits, b4 = 0, x4 = 0, S4 = 0, C5 = 0, w4 = 0, T4 = 0, E4 = 0, D4 = 0, O4 = 0, k4 = 0, A4, j4, M4, N4, P4, F4 = null, ee3 = 0, I5, L4 = new n4.Buf16(r3 + 1), R5 = new n4.Buf16(r3 + 1), te3 = null, ne3 = 0, z4, B4, V4;
        for (b4 = 0; b4 <= r3; b4++) L4[b4] = 0;
        for (x4 = 0; x4 < m4; x4++) L4[t5[p3 + x4]]++;
        for (w4 = y5, C5 = r3; C5 >= 1 && L4[C5] === 0; C5--) ;
        if (w4 > C5 && (w4 = C5), C5 === 0) return h5[g4++] = 20971520, h5[g4++] = 20971520, v4.bits = 1, 0;
        for (S4 = 1; S4 < C5 && L4[S4] === 0; S4++) ;
        for (w4 < S4 && (w4 = S4), D4 = 1, b4 = 1; b4 <= r3; b4++) if (D4 <<= 1, D4 -= L4[b4], D4 < 0) return -1;
        if (D4 > 0 && (e5 === o3 || C5 !== 1)) return -1;
        for (R5[1] = 0, b4 = 1; b4 < r3; b4++) R5[b4 + 1] = R5[b4] + L4[b4];
        for (x4 = 0; x4 < m4; x4++) t5[p3 + x4] !== 0 && (_4[R5[t5[p3 + x4]]++] = x4);
        if (e5 === o3 ? (F4 = te3 = _4, I5 = 19) : e5 === s3 ? (F4 = l4, ee3 -= 257, te3 = u5, ne3 -= 257, I5 = 256) : (F4 = d3, te3 = f3, I5 = -1), k4 = 0, x4 = 0, b4 = S4, P4 = g4, T4 = w4, E4 = 0, M4 = -1, O4 = 1 << w4, N4 = O4 - 1, e5 === s3 && O4 > i4 || e5 === c4 && O4 > a4) return 1;
        for (; ; ) {
          z4 = b4 - E4, _4[x4] < I5 ? (B4 = 0, V4 = _4[x4]) : _4[x4] > I5 ? (B4 = te3[ne3 + _4[x4]], V4 = F4[ee3 + _4[x4]]) : (B4 = 96, V4 = 0), A4 = 1 << b4 - E4, j4 = 1 << T4, S4 = j4;
          do
            j4 -= A4, h5[P4 + (k4 >> E4) + j4] = z4 << 24 | B4 << 16 | V4 | 0;
          while (j4 !== 0);
          for (A4 = 1 << b4 - 1; k4 & A4; ) A4 >>= 1;
          if (A4 === 0 ? k4 = 0 : (k4 &= A4 - 1, k4 += A4), x4++, --L4[b4] === 0) {
            if (b4 === C5) break;
            b4 = t5[p3 + _4[x4]];
          }
          if (b4 > w4 && (k4 & N4) !== M4) {
            for (E4 === 0 && (E4 = w4), P4 += S4, T4 = b4 - E4, D4 = 1 << T4; T4 + E4 < C5 && (D4 -= L4[T4 + E4], !(D4 <= 0)); ) T4++, D4 <<= 1;
            if (O4 += 1 << T4, e5 === s3 && O4 > i4 || e5 === c4 && O4 > a4) return 1;
            M4 = k4 & N4, h5[M4] = w4 << 24 | T4 << 16 | P4 - g4 | 0;
          }
        }
        return k4 !== 0 && (h5[P4 + k4] = b4 - E4 << 24 | 4194304), v4.bits = w4, 0;
      };
    }));
    we = f(((e4) => {
      var t4 = $(), n4 = he(), r3 = ge(), i4 = Se(), a4 = Ce(), o3 = 0, s3 = 1, c4 = 2, l4 = 4, u5 = 5, d3 = 6, f3 = 0, p3 = 1, m4 = 2, h5 = -2, g4 = -3, _4 = -4, v4 = -5, y5 = 8, b4 = 1, x4 = 2, S4 = 3, C5 = 4, w4 = 5, T4 = 6, E4 = 7, D4 = 8, O4 = 9, k4 = 10, A4 = 11, j4 = 12, M4 = 13, N4 = 14, P4 = 15, F4 = 16, ee3 = 17, I5 = 18, L4 = 19, R5 = 20, te3 = 21, ne3 = 22, z4 = 23, B4 = 24, V4 = 25, H3 = 26, re3 = 27, ie3 = 28, ae3 = 29, U4 = 30, W3 = 31, oe3 = 32, se3 = 852, G3 = 592, K3 = 15;
      function ce3(e5) {
        return (e5 >>> 24 & 255) + (e5 >>> 8 & 65280) + ((e5 & 65280) << 8) + ((e5 & 255) << 24);
      }
      function le3() {
        this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new t4.Buf16(320), this.work = new t4.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function q3(e5) {
        var n5;
        return !e5 || !e5.state ? h5 : (n5 = e5.state, e5.total_in = e5.total_out = n5.total = 0, e5.msg = ``, n5.wrap && (e5.adler = n5.wrap & 1), n5.mode = b4, n5.last = 0, n5.havedict = 0, n5.dmax = 32768, n5.head = null, n5.hold = 0, n5.bits = 0, n5.lencode = n5.lendyn = new t4.Buf32(se3), n5.distcode = n5.distdyn = new t4.Buf32(G3), n5.sane = 1, n5.back = -1, f3);
      }
      function ue3(e5) {
        var t5;
        return !e5 || !e5.state ? h5 : (t5 = e5.state, t5.wsize = 0, t5.whave = 0, t5.wnext = 0, q3(e5));
      }
      function J3(e5, t5) {
        var n5, r4;
        return !e5 || !e5.state || (r4 = e5.state, t5 < 0 ? (n5 = 0, t5 = -t5) : (n5 = (t5 >> 4) + 1, t5 < 48 && (t5 &= 15)), t5 && (t5 < 8 || t5 > 15)) ? h5 : (r4.window !== null && r4.wbits !== t5 && (r4.window = null), r4.wrap = n5, r4.wbits = t5, ue3(e5));
      }
      function Y3(e5, t5) {
        var n5, r4;
        return e5 ? (r4 = new le3(), e5.state = r4, r4.window = null, n5 = J3(e5, t5), n5 !== f3 && (e5.state = null), n5) : h5;
      }
      function X3(e5) {
        return Y3(e5, K3);
      }
      var Z3 = true, de3, Q3;
      function fe3(e5) {
        if (Z3) {
          var n5;
          for (de3 = new t4.Buf32(512), Q3 = new t4.Buf32(32), n5 = 0; n5 < 144; ) e5.lens[n5++] = 8;
          for (; n5 < 256; ) e5.lens[n5++] = 9;
          for (; n5 < 280; ) e5.lens[n5++] = 7;
          for (; n5 < 288; ) e5.lens[n5++] = 8;
          for (a4(s3, e5.lens, 0, 288, de3, 0, e5.work, { bits: 9 }), n5 = 0; n5 < 32; ) e5.lens[n5++] = 5;
          a4(c4, e5.lens, 0, 32, Q3, 0, e5.work, { bits: 5 }), Z3 = false;
        }
        e5.lencode = de3, e5.lenbits = 9, e5.distcode = Q3, e5.distbits = 5;
      }
      function pe3(e5, n5, r4, i5) {
        var a5, o4 = e5.state;
        return o4.window === null && (o4.wsize = 1 << o4.wbits, o4.wnext = 0, o4.whave = 0, o4.window = new t4.Buf8(o4.wsize)), i5 >= o4.wsize ? (t4.arraySet(o4.window, n5, r4 - o4.wsize, o4.wsize, 0), o4.wnext = 0, o4.whave = o4.wsize) : (a5 = o4.wsize - o4.wnext, a5 > i5 && (a5 = i5), t4.arraySet(o4.window, n5, r4 - i5, a5, o4.wnext), i5 -= a5, i5 ? (t4.arraySet(o4.window, n5, r4 - i5, i5, 0), o4.wnext = i5, o4.whave = o4.wsize) : (o4.wnext += a5, o4.wnext === o4.wsize && (o4.wnext = 0), o4.whave < o4.wsize && (o4.whave += a5))), 0;
      }
      function me3(e5, se4) {
        var G4, K4, le4, q4, ue4, J4, Y4, X4, Z4, de4, Q4, $3, me4, he3, ge3 = 0, _e4, ve4, ye4, be3, xe3, Se3, Ce3, we3, Te3 = new t4.Buf8(4), Ee3, De3, Oe3 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!e5 || !e5.state || !e5.output || !e5.input && e5.avail_in !== 0) return h5;
        G4 = e5.state, G4.mode === j4 && (G4.mode = M4), ue4 = e5.next_out, le4 = e5.output, Y4 = e5.avail_out, q4 = e5.next_in, K4 = e5.input, J4 = e5.avail_in, X4 = G4.hold, Z4 = G4.bits, de4 = J4, Q4 = Y4, we3 = f3;
        inf_leave: for (; ; ) switch (G4.mode) {
          case b4:
            if (G4.wrap === 0) {
              G4.mode = M4;
              break;
            }
            for (; Z4 < 16; ) {
              if (J4 === 0) break inf_leave;
              J4--, X4 += K4[q4++] << Z4, Z4 += 8;
            }
            if (G4.wrap & 2 && X4 === 35615) {
              G4.check = 0, Te3[0] = X4 & 255, Te3[1] = X4 >>> 8 & 255, G4.check = r3(G4.check, Te3, 2, 0), X4 = 0, Z4 = 0, G4.mode = x4;
              break;
            }
            if (G4.flags = 0, G4.head && (G4.head.done = false), !(G4.wrap & 1) || (((X4 & 255) << 8) + (X4 >> 8)) % 31) {
              e5.msg = `incorrect header check`, G4.mode = U4;
              break;
            }
            if ((X4 & 15) !== y5) {
              e5.msg = `unknown compression method`, G4.mode = U4;
              break;
            }
            if (X4 >>>= 4, Z4 -= 4, Ce3 = (X4 & 15) + 8, G4.wbits === 0) G4.wbits = Ce3;
            else if (Ce3 > G4.wbits) {
              e5.msg = `invalid window size`, G4.mode = U4;
              break;
            }
            G4.dmax = 1 << Ce3, e5.adler = G4.check = 1, G4.mode = X4 & 512 ? k4 : j4, X4 = 0, Z4 = 0;
            break;
          case x4:
            for (; Z4 < 16; ) {
              if (J4 === 0) break inf_leave;
              J4--, X4 += K4[q4++] << Z4, Z4 += 8;
            }
            if (G4.flags = X4, (G4.flags & 255) !== y5) {
              e5.msg = `unknown compression method`, G4.mode = U4;
              break;
            }
            if (G4.flags & 57344) {
              e5.msg = `unknown header flags set`, G4.mode = U4;
              break;
            }
            G4.head && (G4.head.text = X4 >> 8 & 1), G4.flags & 512 && (Te3[0] = X4 & 255, Te3[1] = X4 >>> 8 & 255, G4.check = r3(G4.check, Te3, 2, 0)), X4 = 0, Z4 = 0, G4.mode = S4;
          case S4:
            for (; Z4 < 32; ) {
              if (J4 === 0) break inf_leave;
              J4--, X4 += K4[q4++] << Z4, Z4 += 8;
            }
            G4.head && (G4.head.time = X4), G4.flags & 512 && (Te3[0] = X4 & 255, Te3[1] = X4 >>> 8 & 255, Te3[2] = X4 >>> 16 & 255, Te3[3] = X4 >>> 24 & 255, G4.check = r3(G4.check, Te3, 4, 0)), X4 = 0, Z4 = 0, G4.mode = C5;
          case C5:
            for (; Z4 < 16; ) {
              if (J4 === 0) break inf_leave;
              J4--, X4 += K4[q4++] << Z4, Z4 += 8;
            }
            G4.head && (G4.head.xflags = X4 & 255, G4.head.os = X4 >> 8), G4.flags & 512 && (Te3[0] = X4 & 255, Te3[1] = X4 >>> 8 & 255, G4.check = r3(G4.check, Te3, 2, 0)), X4 = 0, Z4 = 0, G4.mode = w4;
          case w4:
            if (G4.flags & 1024) {
              for (; Z4 < 16; ) {
                if (J4 === 0) break inf_leave;
                J4--, X4 += K4[q4++] << Z4, Z4 += 8;
              }
              G4.length = X4, G4.head && (G4.head.extra_len = X4), G4.flags & 512 && (Te3[0] = X4 & 255, Te3[1] = X4 >>> 8 & 255, G4.check = r3(G4.check, Te3, 2, 0)), X4 = 0, Z4 = 0;
            } else G4.head && (G4.head.extra = null);
            G4.mode = T4;
          case T4:
            if (G4.flags & 1024 && ($3 = G4.length, $3 > J4 && ($3 = J4), $3 && (G4.head && (Ce3 = G4.head.extra_len - G4.length, G4.head.extra || (G4.head.extra = Array(G4.head.extra_len)), t4.arraySet(G4.head.extra, K4, q4, $3, Ce3)), G4.flags & 512 && (G4.check = r3(G4.check, K4, $3, q4)), J4 -= $3, q4 += $3, G4.length -= $3), G4.length)) break inf_leave;
            G4.length = 0, G4.mode = E4;
          case E4:
            if (G4.flags & 2048) {
              if (J4 === 0) break inf_leave;
              $3 = 0;
              do
                Ce3 = K4[q4 + $3++], G4.head && Ce3 && G4.length < 65536 && (G4.head.name += String.fromCharCode(Ce3));
              while (Ce3 && $3 < J4);
              if (G4.flags & 512 && (G4.check = r3(G4.check, K4, $3, q4)), J4 -= $3, q4 += $3, Ce3) break inf_leave;
            } else G4.head && (G4.head.name = null);
            G4.length = 0, G4.mode = D4;
          case D4:
            if (G4.flags & 4096) {
              if (J4 === 0) break inf_leave;
              $3 = 0;
              do
                Ce3 = K4[q4 + $3++], G4.head && Ce3 && G4.length < 65536 && (G4.head.comment += String.fromCharCode(Ce3));
              while (Ce3 && $3 < J4);
              if (G4.flags & 512 && (G4.check = r3(G4.check, K4, $3, q4)), J4 -= $3, q4 += $3, Ce3) break inf_leave;
            } else G4.head && (G4.head.comment = null);
            G4.mode = O4;
          case O4:
            if (G4.flags & 512) {
              for (; Z4 < 16; ) {
                if (J4 === 0) break inf_leave;
                J4--, X4 += K4[q4++] << Z4, Z4 += 8;
              }
              if (X4 !== (G4.check & 65535)) {
                e5.msg = `header crc mismatch`, G4.mode = U4;
                break;
              }
              X4 = 0, Z4 = 0;
            }
            G4.head && (G4.head.hcrc = G4.flags >> 9 & 1, G4.head.done = true), e5.adler = G4.check = 0, G4.mode = j4;
            break;
          case k4:
            for (; Z4 < 32; ) {
              if (J4 === 0) break inf_leave;
              J4--, X4 += K4[q4++] << Z4, Z4 += 8;
            }
            e5.adler = G4.check = ce3(X4), X4 = 0, Z4 = 0, G4.mode = A4;
          case A4:
            if (G4.havedict === 0) return e5.next_out = ue4, e5.avail_out = Y4, e5.next_in = q4, e5.avail_in = J4, G4.hold = X4, G4.bits = Z4, m4;
            e5.adler = G4.check = 1, G4.mode = j4;
          case j4:
            if (se4 === u5 || se4 === d3) break inf_leave;
          case M4:
            if (G4.last) {
              X4 >>>= Z4 & 7, Z4 -= Z4 & 7, G4.mode = re3;
              break;
            }
            for (; Z4 < 3; ) {
              if (J4 === 0) break inf_leave;
              J4--, X4 += K4[q4++] << Z4, Z4 += 8;
            }
            switch (G4.last = X4 & 1, X4 >>>= 1, --Z4, X4 & 3) {
              case 0:
                G4.mode = N4;
                break;
              case 1:
                if (fe3(G4), G4.mode = R5, se4 === d3) {
                  X4 >>>= 2, Z4 -= 2;
                  break inf_leave;
                }
                break;
              case 2:
                G4.mode = ee3;
                break;
              case 3:
                e5.msg = `invalid block type`, G4.mode = U4;
            }
            X4 >>>= 2, Z4 -= 2;
            break;
          case N4:
            for (X4 >>>= Z4 & 7, Z4 -= Z4 & 7; Z4 < 32; ) {
              if (J4 === 0) break inf_leave;
              J4--, X4 += K4[q4++] << Z4, Z4 += 8;
            }
            if ((X4 & 65535) != (X4 >>> 16 ^ 65535)) {
              e5.msg = `invalid stored block lengths`, G4.mode = U4;
              break;
            }
            if (G4.length = X4 & 65535, X4 = 0, Z4 = 0, G4.mode = P4, se4 === d3) break inf_leave;
          case P4:
            G4.mode = F4;
          case F4:
            if ($3 = G4.length, $3) {
              if ($3 > J4 && ($3 = J4), $3 > Y4 && ($3 = Y4), $3 === 0) break inf_leave;
              t4.arraySet(le4, K4, q4, $3, ue4), J4 -= $3, q4 += $3, Y4 -= $3, ue4 += $3, G4.length -= $3;
              break;
            }
            G4.mode = j4;
            break;
          case ee3:
            for (; Z4 < 14; ) {
              if (J4 === 0) break inf_leave;
              J4--, X4 += K4[q4++] << Z4, Z4 += 8;
            }
            if (G4.nlen = (X4 & 31) + 257, X4 >>>= 5, Z4 -= 5, G4.ndist = (X4 & 31) + 1, X4 >>>= 5, Z4 -= 5, G4.ncode = (X4 & 15) + 4, X4 >>>= 4, Z4 -= 4, G4.nlen > 286 || G4.ndist > 30) {
              e5.msg = `too many length or distance symbols`, G4.mode = U4;
              break;
            }
            G4.have = 0, G4.mode = I5;
          case I5:
            for (; G4.have < G4.ncode; ) {
              for (; Z4 < 3; ) {
                if (J4 === 0) break inf_leave;
                J4--, X4 += K4[q4++] << Z4, Z4 += 8;
              }
              G4.lens[Oe3[G4.have++]] = X4 & 7, X4 >>>= 3, Z4 -= 3;
            }
            for (; G4.have < 19; ) G4.lens[Oe3[G4.have++]] = 0;
            if (G4.lencode = G4.lendyn, G4.lenbits = 7, Ee3 = { bits: G4.lenbits }, we3 = a4(o3, G4.lens, 0, 19, G4.lencode, 0, G4.work, Ee3), G4.lenbits = Ee3.bits, we3) {
              e5.msg = `invalid code lengths set`, G4.mode = U4;
              break;
            }
            G4.have = 0, G4.mode = L4;
          case L4:
            for (; G4.have < G4.nlen + G4.ndist; ) {
              for (; ge3 = G4.lencode[X4 & (1 << G4.lenbits) - 1], _e4 = ge3 >>> 24, ve4 = ge3 >>> 16 & 255, ye4 = ge3 & 65535, !(_e4 <= Z4); ) {
                if (J4 === 0) break inf_leave;
                J4--, X4 += K4[q4++] << Z4, Z4 += 8;
              }
              if (ye4 < 16) X4 >>>= _e4, Z4 -= _e4, G4.lens[G4.have++] = ye4;
              else {
                if (ye4 === 16) {
                  for (De3 = _e4 + 2; Z4 < De3; ) {
                    if (J4 === 0) break inf_leave;
                    J4--, X4 += K4[q4++] << Z4, Z4 += 8;
                  }
                  if (X4 >>>= _e4, Z4 -= _e4, G4.have === 0) {
                    e5.msg = `invalid bit length repeat`, G4.mode = U4;
                    break;
                  }
                  Ce3 = G4.lens[G4.have - 1], $3 = 3 + (X4 & 3), X4 >>>= 2, Z4 -= 2;
                } else if (ye4 === 17) {
                  for (De3 = _e4 + 3; Z4 < De3; ) {
                    if (J4 === 0) break inf_leave;
                    J4--, X4 += K4[q4++] << Z4, Z4 += 8;
                  }
                  X4 >>>= _e4, Z4 -= _e4, Ce3 = 0, $3 = 3 + (X4 & 7), X4 >>>= 3, Z4 -= 3;
                } else {
                  for (De3 = _e4 + 7; Z4 < De3; ) {
                    if (J4 === 0) break inf_leave;
                    J4--, X4 += K4[q4++] << Z4, Z4 += 8;
                  }
                  X4 >>>= _e4, Z4 -= _e4, Ce3 = 0, $3 = 11 + (X4 & 127), X4 >>>= 7, Z4 -= 7;
                }
                if (G4.have + $3 > G4.nlen + G4.ndist) {
                  e5.msg = `invalid bit length repeat`, G4.mode = U4;
                  break;
                }
                for (; $3--; ) G4.lens[G4.have++] = Ce3;
              }
            }
            if (G4.mode === U4) break;
            if (G4.lens[256] === 0) {
              e5.msg = `invalid code -- missing end-of-block`, G4.mode = U4;
              break;
            }
            if (G4.lenbits = 9, Ee3 = { bits: G4.lenbits }, we3 = a4(s3, G4.lens, 0, G4.nlen, G4.lencode, 0, G4.work, Ee3), G4.lenbits = Ee3.bits, we3) {
              e5.msg = `invalid literal/lengths set`, G4.mode = U4;
              break;
            }
            if (G4.distbits = 6, G4.distcode = G4.distdyn, Ee3 = { bits: G4.distbits }, we3 = a4(c4, G4.lens, G4.nlen, G4.ndist, G4.distcode, 0, G4.work, Ee3), G4.distbits = Ee3.bits, we3) {
              e5.msg = `invalid distances set`, G4.mode = U4;
              break;
            }
            if (G4.mode = R5, se4 === d3) break inf_leave;
          case R5:
            G4.mode = te3;
          case te3:
            if (J4 >= 6 && Y4 >= 258) {
              e5.next_out = ue4, e5.avail_out = Y4, e5.next_in = q4, e5.avail_in = J4, G4.hold = X4, G4.bits = Z4, i4(e5, Q4), ue4 = e5.next_out, le4 = e5.output, Y4 = e5.avail_out, q4 = e5.next_in, K4 = e5.input, J4 = e5.avail_in, X4 = G4.hold, Z4 = G4.bits, G4.mode === j4 && (G4.back = -1);
              break;
            }
            for (G4.back = 0; ge3 = G4.lencode[X4 & (1 << G4.lenbits) - 1], _e4 = ge3 >>> 24, ve4 = ge3 >>> 16 & 255, ye4 = ge3 & 65535, !(_e4 <= Z4); ) {
              if (J4 === 0) break inf_leave;
              J4--, X4 += K4[q4++] << Z4, Z4 += 8;
            }
            if (ve4 && !(ve4 & 240)) {
              for (be3 = _e4, xe3 = ve4, Se3 = ye4; ge3 = G4.lencode[Se3 + ((X4 & (1 << be3 + xe3) - 1) >> be3)], _e4 = ge3 >>> 24, ve4 = ge3 >>> 16 & 255, ye4 = ge3 & 65535, !(be3 + _e4 <= Z4); ) {
                if (J4 === 0) break inf_leave;
                J4--, X4 += K4[q4++] << Z4, Z4 += 8;
              }
              X4 >>>= be3, Z4 -= be3, G4.back += be3;
            }
            if (X4 >>>= _e4, Z4 -= _e4, G4.back += _e4, G4.length = ye4, ve4 === 0) {
              G4.mode = H3;
              break;
            }
            if (ve4 & 32) {
              G4.back = -1, G4.mode = j4;
              break;
            }
            if (ve4 & 64) {
              e5.msg = `invalid literal/length code`, G4.mode = U4;
              break;
            }
            G4.extra = ve4 & 15, G4.mode = ne3;
          case ne3:
            if (G4.extra) {
              for (De3 = G4.extra; Z4 < De3; ) {
                if (J4 === 0) break inf_leave;
                J4--, X4 += K4[q4++] << Z4, Z4 += 8;
              }
              G4.length += X4 & (1 << G4.extra) - 1, X4 >>>= G4.extra, Z4 -= G4.extra, G4.back += G4.extra;
            }
            G4.was = G4.length, G4.mode = z4;
          case z4:
            for (; ge3 = G4.distcode[X4 & (1 << G4.distbits) - 1], _e4 = ge3 >>> 24, ve4 = ge3 >>> 16 & 255, ye4 = ge3 & 65535, !(_e4 <= Z4); ) {
              if (J4 === 0) break inf_leave;
              J4--, X4 += K4[q4++] << Z4, Z4 += 8;
            }
            if (!(ve4 & 240)) {
              for (be3 = _e4, xe3 = ve4, Se3 = ye4; ge3 = G4.distcode[Se3 + ((X4 & (1 << be3 + xe3) - 1) >> be3)], _e4 = ge3 >>> 24, ve4 = ge3 >>> 16 & 255, ye4 = ge3 & 65535, !(be3 + _e4 <= Z4); ) {
                if (J4 === 0) break inf_leave;
                J4--, X4 += K4[q4++] << Z4, Z4 += 8;
              }
              X4 >>>= be3, Z4 -= be3, G4.back += be3;
            }
            if (X4 >>>= _e4, Z4 -= _e4, G4.back += _e4, ve4 & 64) {
              e5.msg = `invalid distance code`, G4.mode = U4;
              break;
            }
            G4.offset = ye4, G4.extra = ve4 & 15, G4.mode = B4;
          case B4:
            if (G4.extra) {
              for (De3 = G4.extra; Z4 < De3; ) {
                if (J4 === 0) break inf_leave;
                J4--, X4 += K4[q4++] << Z4, Z4 += 8;
              }
              G4.offset += X4 & (1 << G4.extra) - 1, X4 >>>= G4.extra, Z4 -= G4.extra, G4.back += G4.extra;
            }
            if (G4.offset > G4.dmax) {
              e5.msg = `invalid distance too far back`, G4.mode = U4;
              break;
            }
            G4.mode = V4;
          case V4:
            if (Y4 === 0) break inf_leave;
            if ($3 = Q4 - Y4, G4.offset > $3) {
              if ($3 = G4.offset - $3, $3 > G4.whave && G4.sane) {
                e5.msg = `invalid distance too far back`, G4.mode = U4;
                break;
              }
              $3 > G4.wnext ? ($3 -= G4.wnext, me4 = G4.wsize - $3) : me4 = G4.wnext - $3, $3 > G4.length && ($3 = G4.length), he3 = G4.window;
            } else he3 = le4, me4 = ue4 - G4.offset, $3 = G4.length;
            $3 > Y4 && ($3 = Y4), Y4 -= $3, G4.length -= $3;
            do
              le4[ue4++] = he3[me4++];
            while (--$3);
            G4.length === 0 && (G4.mode = te3);
            break;
          case H3:
            if (Y4 === 0) break inf_leave;
            le4[ue4++] = G4.length, Y4--, G4.mode = te3;
            break;
          case re3:
            if (G4.wrap) {
              for (; Z4 < 32; ) {
                if (J4 === 0) break inf_leave;
                J4--, X4 |= K4[q4++] << Z4, Z4 += 8;
              }
              if (Q4 -= Y4, e5.total_out += Q4, G4.total += Q4, Q4 && (e5.adler = G4.check = G4.flags ? r3(G4.check, le4, Q4, ue4 - Q4) : n4(G4.check, le4, Q4, ue4 - Q4)), Q4 = Y4, (G4.flags ? X4 : ce3(X4)) !== G4.check) {
                e5.msg = `incorrect data check`, G4.mode = U4;
                break;
              }
              X4 = 0, Z4 = 0;
            }
            G4.mode = ie3;
          case ie3:
            if (G4.wrap && G4.flags) {
              for (; Z4 < 32; ) {
                if (J4 === 0) break inf_leave;
                J4--, X4 += K4[q4++] << Z4, Z4 += 8;
              }
              if (X4 !== (G4.total & 4294967295)) {
                e5.msg = `incorrect length check`, G4.mode = U4;
                break;
              }
              X4 = 0, Z4 = 0;
            }
            G4.mode = ae3;
          case ae3:
            we3 = p3;
            break inf_leave;
          case U4:
            we3 = g4;
            break inf_leave;
          case W3:
            return _4;
          case oe3:
          default:
            return h5;
        }
        return e5.next_out = ue4, e5.avail_out = Y4, e5.next_in = q4, e5.avail_in = J4, G4.hold = X4, G4.bits = Z4, (G4.wsize || Q4 !== e5.avail_out && G4.mode < U4 && (G4.mode < re3 || se4 !== l4)) && pe3(e5, e5.output, e5.next_out, Q4 - e5.avail_out) ? (G4.mode = W3, _4) : (de4 -= e5.avail_in, Q4 -= e5.avail_out, e5.total_in += de4, e5.total_out += Q4, G4.total += Q4, G4.wrap && Q4 && (e5.adler = G4.check = G4.flags ? r3(G4.check, le4, Q4, e5.next_out - Q4) : n4(G4.check, le4, Q4, e5.next_out - Q4)), e5.data_type = G4.bits + (G4.last ? 64 : 0) + (G4.mode === j4 ? 128 : 0) + (G4.mode === R5 || G4.mode === P4 ? 256 : 0), (de4 === 0 && Q4 === 0 || se4 === l4) && we3 === f3 && (we3 = v4), we3);
      }
      function _e3(e5) {
        if (!e5 || !e5.state) return h5;
        var t5 = e5.state;
        return t5.window &&= null, e5.state = null, f3;
      }
      function ve3(e5, t5) {
        var n5;
        return !e5 || !e5.state || (n5 = e5.state, !(n5.wrap & 2)) ? h5 : (n5.head = t5, t5.done = false, f3);
      }
      function ye3(e5, t5) {
        var r4 = t5.length, i5, a5, o4;
        return !e5 || !e5.state || (i5 = e5.state, i5.wrap !== 0 && i5.mode !== A4) ? h5 : i5.mode === A4 && (a5 = 1, a5 = n4(a5, t5, r4, 0), a5 !== i5.check) ? g4 : (o4 = pe3(e5, t5, r4, r4), o4 ? (i5.mode = W3, _4) : (i5.havedict = 1, f3));
      }
      e4.inflateReset = ue3, e4.inflateReset2 = J3, e4.inflateResetKeep = q3, e4.inflateInit = X3, e4.inflateInit2 = Y3, e4.inflate = me3, e4.inflateEnd = _e3, e4.inflateGetHeader = ve3, e4.inflateSetDictionary = ye3, e4.inflateInfo = `pako inflate (from Nodeca project)`;
    }));
    Te = f(((e4, t4) => {
      t4.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }));
    Ee = f(((e4, t4) => {
      function n4() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = ``, this.comment = ``, this.hcrc = 0, this.done = false;
      }
      t4.exports = n4;
    }));
    De = f(((e4) => {
      var t4 = we(), n4 = $(), r3 = ye(), i4 = Te(), a4 = _e(), o3 = be(), s3 = Ee(), c4 = Object.prototype.toString;
      function l4(e5) {
        if (!(this instanceof l4)) return new l4(e5);
        this.options = n4.assign({ chunkSize: 16384, windowBits: 0, to: `` }, e5 || {});
        var u6 = this.options;
        u6.raw && u6.windowBits >= 0 && u6.windowBits < 16 && (u6.windowBits = -u6.windowBits, u6.windowBits === 0 && (u6.windowBits = -15)), u6.windowBits >= 0 && u6.windowBits < 16 && !(e5 && e5.windowBits) && (u6.windowBits += 32), u6.windowBits > 15 && u6.windowBits < 48 && (u6.windowBits & 15 || (u6.windowBits |= 15)), this.err = 0, this.msg = ``, this.ended = false, this.chunks = [], this.strm = new o3(), this.strm.avail_out = 0;
        var d4 = t4.inflateInit2(this.strm, u6.windowBits);
        if (d4 !== i4.Z_OK || (this.header = new s3(), t4.inflateGetHeader(this.strm, this.header), u6.dictionary && (typeof u6.dictionary == `string` ? u6.dictionary = r3.string2buf(u6.dictionary) : c4.call(u6.dictionary) === `[object ArrayBuffer]` && (u6.dictionary = new Uint8Array(u6.dictionary)), u6.raw && (d4 = t4.inflateSetDictionary(this.strm, u6.dictionary), d4 !== i4.Z_OK)))) throw Error(a4[d4]);
      }
      l4.prototype.push = function(e5, a5) {
        var o4 = this.strm, s4 = this.options.chunkSize, l5 = this.options.dictionary, u6, d4, f3, p3, m4, h5 = false;
        if (this.ended) return false;
        d4 = a5 === ~~a5 ? a5 : a5 === true ? i4.Z_FINISH : i4.Z_NO_FLUSH, typeof e5 == `string` ? o4.input = r3.binstring2buf(e5) : c4.call(e5) === `[object ArrayBuffer]` ? o4.input = new Uint8Array(e5) : o4.input = e5, o4.next_in = 0, o4.avail_in = o4.input.length;
        do {
          if (o4.avail_out === 0 && (o4.output = new n4.Buf8(s4), o4.next_out = 0, o4.avail_out = s4), u6 = t4.inflate(o4, i4.Z_NO_FLUSH), u6 === i4.Z_NEED_DICT && l5 && (u6 = t4.inflateSetDictionary(this.strm, l5)), u6 === i4.Z_BUF_ERROR && h5 === true && (u6 = i4.Z_OK, h5 = false), u6 !== i4.Z_STREAM_END && u6 !== i4.Z_OK) return this.onEnd(u6), this.ended = true, false;
          o4.next_out && (o4.avail_out === 0 || u6 === i4.Z_STREAM_END || o4.avail_in === 0 && (d4 === i4.Z_FINISH || d4 === i4.Z_SYNC_FLUSH)) && (this.options.to === `string` ? (f3 = r3.utf8border(o4.output, o4.next_out), p3 = o4.next_out - f3, m4 = r3.buf2string(o4.output, f3), o4.next_out = p3, o4.avail_out = s4 - p3, p3 && n4.arraySet(o4.output, o4.output, f3, p3, 0), this.onData(m4)) : this.onData(n4.shrinkBuf(o4.output, o4.next_out))), o4.avail_in === 0 && o4.avail_out === 0 && (h5 = true);
        } while ((o4.avail_in > 0 || o4.avail_out === 0) && u6 !== i4.Z_STREAM_END);
        return u6 === i4.Z_STREAM_END && (d4 = i4.Z_FINISH), d4 === i4.Z_FINISH ? (u6 = t4.inflateEnd(this.strm), this.onEnd(u6), this.ended = true, u6 === i4.Z_OK) : d4 === i4.Z_SYNC_FLUSH ? (this.onEnd(i4.Z_OK), o4.avail_out = 0, true) : true;
      }, l4.prototype.onData = function(e5) {
        this.chunks.push(e5);
      }, l4.prototype.onEnd = function(e5) {
        e5 === i4.Z_OK && (this.options.to === `string` ? this.result = this.chunks.join(``) : this.result = n4.flattenChunks(this.chunks)), this.chunks = [], this.err = e5, this.msg = this.strm.msg;
      };
      function u5(e5, t5) {
        var n5 = new l4(t5);
        if (n5.push(e5, true), n5.err) throw n5.msg || a4[n5.err];
        return n5.result;
      }
      function d3(e5, t5) {
        return t5 ||= {}, t5.raw = true, u5(e5, t5);
      }
      e4.Inflate = l4, e4.inflate = u5, e4.inflateRaw = d3, e4.ungzip = u5;
    }));
    Oe = f(((e4, t4) => {
      var n4 = $().assign, r3 = xe(), i4 = De(), a4 = Te(), o3 = {};
      n4(o3, r3, i4, a4), t4.exports = o3;
    }));
    ke = f(((e4, t4) => {
      let n4 = (e5, t5) => function(...n5) {
        let r3 = t5.promiseModule;
        return new r3((r4, i4) => {
          t5.multiArgs ? n5.push((...e6) => {
            t5.errorFirst ? e6[0] ? i4(e6) : (e6.shift(), r4(e6)) : r4(e6);
          }) : t5.errorFirst ? n5.push((e6, t6) => {
            e6 ? i4(e6) : r4(t6);
          }) : n5.push(r4), e5.apply(this, n5);
        });
      };
      t4.exports = (e5, t5) => {
        t5 = Object.assign({ exclude: [/.+(Sync|Stream)$/], errorFirst: true, promiseModule: Promise }, t5);
        let r3 = typeof e5;
        if (!(e5 !== null && (r3 === `object` || r3 === `function`))) throw TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${e5 === null ? `null` : r3}\``);
        let i4 = (e6) => {
          let n5 = (t6) => typeof t6 == `string` ? e6 === t6 : t6.test(e6);
          return t5.include ? t5.include.some(n5) : !t5.exclude.some(n5);
        }, a4;
        a4 = r3 === `function` ? function(...r4) {
          return t5.excludeMain ? e5(...r4) : n4(e5, t5).apply(this, r4);
        } : Object.create(Object.getPrototypeOf(e5));
        for (let r4 in e5) {
          let o3 = e5[r4];
          a4[r4] = typeof o3 == `function` && i4(r4) ? n4(o3, t5) : o3;
        }
        return a4;
      };
    }));
    Ae = f(((e4, t4) => {
      function n4(e5) {
        return Array.isArray(e5) ? e5 : [e5];
      }
      let r3 = /^\s+$/, i4 = /(?:[^\\]|^)\\$/, a4 = /^\\!/, o3 = /^\\#/, s3 = /\r?\n/g, c4 = /^\.*\/|^\.+$/, l4 = `node-ignore`;
      typeof Symbol < `u` && (l4 = /* @__PURE__ */ Symbol.for(`node-ignore`));
      let u5 = l4, d3 = (e5, t5, n5) => Object.defineProperty(e5, t5, { value: n5 }), f3 = /([0-z])-([0-z])/g, p3 = () => false, m4 = (e5) => e5.replace(f3, (e6, t5, n5) => t5.charCodeAt(0) <= n5.charCodeAt(0) ? e6 : ``), h5 = (e5) => {
        let { length: t5 } = e5;
        return e5.slice(0, t5 - t5 % 2);
      }, g4 = [[/^\uFEFF/, () => ``], [/((?:\\\\)*?)(\\?\s+)$/, (e5, t5, n5) => t5 + (n5.indexOf(`\\`) === 0 ? ` ` : ``)], [/(\\+?)\s/g, (e5, t5) => {
        let { length: n5 } = t5;
        return t5.slice(0, n5 - n5 % 2) + ` `;
      }], [/[\\$.|*+(){^]/g, (e5) => `\\${e5}`], [/(?!\\)\?/g, () => `[^/]`], [/^\//, () => `^`], [/\//g, () => `\\/`], [/^\^*\\\*\\\*\\\//, () => `^(?:.*\\/)?`], [/^(?=[^^])/, function() {
        return /\/(?!$)/.test(this) ? `^` : `(?:^|\\/)`;
      }], [/\\\/\\\*\\\*(?=\\\/|$)/g, (e5, t5, n5) => t5 + 6 < n5.length ? `(?:\\/[^\\/]+)*` : `\\/.+`], [/(^|[^\\]+)(\\\*)+(?=.+)/g, (e5, t5, n5) => t5 + n5.replace(/\\\*/g, `[^\\/]*`)], [/\\\\\\(?=[$.|*+(){^])/g, () => `\\`], [/\\\\/g, () => `\\`], [/(\\)?\[([^\]/]*?)(\\*)($|\])/g, (e5, t5, n5, r4, i5) => t5 === `\\` ? `\\[${n5}${h5(r4)}${i5}` : i5 === `]` && r4.length % 2 == 0 ? `[${m4(n5)}${r4}]` : `[]`], [/(?:[^*])$/, (e5) => /\/$/.test(e5) ? `${e5}$` : `${e5}(?=$|\\/$)`], [/(\^|\\\/)?\\\*$/, (e5, t5) => `${t5 ? `${t5}[^/]+` : `[^/]*`}(?=$|\\/$)`]], _4 = /* @__PURE__ */ Object.create(null), v4 = (e5, t5) => {
        let n5 = _4[e5];
        return n5 || (n5 = g4.reduce((t6, [n6, r4]) => t6.replace(n6, r4.bind(e5)), e5), _4[e5] = n5), t5 ? new RegExp(n5, `i`) : new RegExp(n5);
      }, y5 = (e5) => typeof e5 == `string`, b4 = (e5) => e5 && y5(e5) && !r3.test(e5) && !i4.test(e5) && e5.indexOf(`#`) !== 0, x4 = (e5) => e5.split(s3);
      var S4 = class {
        constructor(e5, t5, n5, r4) {
          this.origin = e5, this.pattern = t5, this.negative = n5, this.regex = r4;
        }
      };
      let C5 = (e5, t5) => {
        let n5 = e5, r4 = false;
        e5.indexOf(`!`) === 0 && (r4 = true, e5 = e5.substr(1)), e5 = e5.replace(a4, `!`).replace(o3, `#`);
        let i5 = v4(e5, t5);
        return new S4(n5, e5, r4, i5);
      }, w4 = (e5, t5) => {
        throw new t5(e5);
      }, T4 = (e5, t5, n5) => y5(e5) ? e5 ? T4.isNotRelative(e5) ? n5(`path should be a \`path.relative()\`d string, but got "${t5}"`, RangeError) : true : n5(`path must not be empty`, TypeError) : n5(`path must be a string, but got \`${t5}\``, TypeError), E4 = (e5) => c4.test(e5);
      T4.isNotRelative = E4, T4.convert = (e5) => e5;
      var D4 = class {
        constructor({ ignorecase: e5 = true, ignoreCase: t5 = e5, allowRelativePaths: n5 = false } = {}) {
          d3(this, u5, true), this._rules = [], this._ignoreCase = t5, this._allowRelativePaths = n5, this._initCache();
        }
        _initCache() {
          this._ignoreCache = /* @__PURE__ */ Object.create(null), this._testCache = /* @__PURE__ */ Object.create(null);
        }
        _addPattern(e5) {
          if (e5 && e5[u5]) {
            this._rules = this._rules.concat(e5._rules), this._added = true;
            return;
          }
          if (b4(e5)) {
            let t5 = C5(e5, this._ignoreCase);
            this._added = true, this._rules.push(t5);
          }
        }
        add(e5) {
          return this._added = false, n4(y5(e5) ? x4(e5) : e5).forEach(this._addPattern, this), this._added && this._initCache(), this;
        }
        addPattern(e5) {
          return this.add(e5);
        }
        _testOne(e5, t5) {
          let n5 = false, r4 = false;
          return this._rules.forEach((i5) => {
            let { negative: a5 } = i5;
            r4 === a5 && n5 !== r4 || a5 && !n5 && !r4 && !t5 || i5.regex.test(e5) && (n5 = !a5, r4 = a5);
          }), { ignored: n5, unignored: r4 };
        }
        _test(e5, t5, n5, r4) {
          let i5 = e5 && T4.convert(e5);
          return T4(i5, e5, this._allowRelativePaths ? p3 : w4), this._t(i5, t5, n5, r4);
        }
        _t(e5, t5, n5, r4) {
          if (e5 in t5) return t5[e5];
          if (r4 ||= e5.split(`/`), r4.pop(), !r4.length) return t5[e5] = this._testOne(e5, n5);
          let i5 = this._t(r4.join(`/`) + `/`, t5, n5, r4);
          return t5[e5] = i5.ignored ? i5 : this._testOne(e5, n5);
        }
        ignores(e5) {
          return this._test(e5, this._ignoreCache, false).ignored;
        }
        createFilter() {
          return (e5) => !this.ignores(e5);
        }
        filter(e5) {
          return n4(e5).filter(this.createFilter());
        }
        test(e5) {
          return this._test(e5, this._testCache, true);
        }
      };
      let O4 = (e5) => new D4(e5);
      if (O4.isPathValid = (e5) => T4(e5 && T4.convert(e5), e5, p3), O4.default = O4, t4.exports = O4, typeof process < `u` && (process.env && process.env.IGNORE_TEST_WIN32 || process.platform === `win32`)) {
        T4.convert = (e6) => /^\\\\\?\\/.test(e6) || /["<>|\u0000-\u001F]+/u.test(e6) ? e6 : e6.replace(/\\/g, `/`);
        let e5 = /^[a-z]:\//i;
        T4.isNotRelative = (t5) => e5.test(t5) || E4(t5);
      }
    }));
    je = f(((e4, t4) => {
      function n4(e5) {
        return e5.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
      }
      function r3(e5, t5, r4) {
        return t5 = t5 instanceof RegExp ? t5 : new RegExp(n4(t5), `g`), e5.replace(t5, r4);
      }
      t4.exports = { clean: function(e5) {
        if (typeof e5 != `string`) throw Error(`Expected a string, received: ` + e5);
        return e5 = r3(e5, `./`, `/`), e5 = r3(e5, `..`, `.`), e5 = r3(e5, ` `, `-`), e5 = r3(e5, /^[~^:?*\\\-]/g, ``), e5 = r3(e5, /[~^:?*\\]/g, `-`), e5 = r3(e5, /[~^:?*\\\-]$/g, ``), e5 = r3(e5, `@{`, `-`), e5 = r3(e5, /\.$/g, ``), e5 = r3(e5, /\/$/g, ``), e5 = r3(e5, /\.lock$/g, ``), e5;
      } };
    }));
    Me = f(((e4, t4) => {
      t4.exports = function(e5, t5) {
        var n4 = e5, r3 = t5, i4 = n4.length, a4 = r3.length, o3 = false, s3 = null, c4 = i4 + 1, l4 = [], u5 = [], d3 = [], f3 = ``, p3 = -1, m4 = 0, h5 = 1, g4, _4, v4 = function() {
          i4 >= a4 && (g4 = n4, _4 = i4, n4 = r3, r3 = g4, i4 = a4, a4 = _4, o3 = true, c4 = i4 + 1);
        }, y5 = function(e6, t6, n5) {
          return { x: e6, y: t6, k: n5 };
        }, b4 = function(e6, t6) {
          return { elem: e6, t: t6 };
        }, x4 = function(e6, t6, o4) {
          var s4 = t6 > o4 ? l4[e6 - 1 + c4] : l4[e6 + 1 + c4], d4, f4 = Math.max(t6, o4);
          for (d4 = f4 - e6; d4 < i4 && f4 < a4 && n4[d4] === r3[f4]; ) ++d4, ++f4;
          return l4[e6 + c4] = u5.length, u5[u5.length] = new y5(d4, f4, s4), f4;
        }, S4 = function(e6) {
          var t6 = i5 = 1, i5, a5 = s4 = 0, s4, c5;
          for (c5 = e6.length - 1; c5 >= 0; --c5) for (; a5 < e6[c5].x || s4 < e6[c5].y; ) e6[c5].y - e6[c5].x > s4 - a5 ? (o3 ? d3[d3.length] = new b4(r3[s4], p3) : d3[d3.length] = new b4(r3[s4], h5), ++i5, ++s4) : e6[c5].y - e6[c5].x < s4 - a5 ? (o3 ? d3[d3.length] = new b4(n4[a5], h5) : d3[d3.length] = new b4(n4[a5], p3), ++t6, ++a5) : (d3[d3.length] = new b4(n4[a5], m4), f3 += n4[a5], ++t6, ++i5, ++a5, ++s4);
        };
        return v4(), { SES_DELETE: -1, SES_COMMON: 0, SES_ADD: 1, editdistance: function() {
          return s3;
        }, getlcs: function() {
          return f3;
        }, getses: function() {
          return d3;
        }, compose: function() {
          var e6 = a4 - i4, t6 = i4 + a4 + 3, n5 = {}, r4, o4, d4, f4, p4;
          for (f4 = 0; f4 < t6; ++f4) n5[f4] = -1, l4[f4] = -1;
          r4 = -1;
          do {
            for (++r4, p4 = -r4; p4 <= e6 - 1; ++p4) n5[p4 + c4] = x4(p4, n5[p4 - 1 + c4] + 1, n5[p4 + 1 + c4]);
            for (p4 = e6 + r4; p4 >= e6 + 1; --p4) n5[p4 + c4] = x4(p4, n5[p4 - 1 + c4] + 1, n5[p4 + 1 + c4]);
            n5[e6 + c4] = x4(e6, n5[e6 - 1 + c4] + 1, n5[e6 + 1 + c4]);
          } while (n5[e6 + c4] !== a4);
          for (s3 = e6 + 2 * r4, o4 = l4[e6 + c4], d4 = []; o4 !== -1; ) d4[d4.length] = new y5(u5[o4].x, u5[o4].y, null), o4 = u5[o4].k;
          S4(d4);
        } };
      };
    }));
    Ne = f(((e4, t4) => {
      var n4 = Me();
      function r3(e5, t5) {
        var r4 = new n4(e5, t5);
        r4.compose();
        for (var i5 = r4.getses(), a5, o4, s3 = e5.length - 1, c4 = t5.length - 1, l4 = i5.length - 1; l4 >= 0; --l4) i5[l4].t === r4.SES_COMMON ? (o4 ? (o4.chain = { file1index: s3, file2index: c4, chain: null }, o4 = o4.chain) : (a5 = { file1index: s3, file2index: c4, chain: null }, o4 = a5), s3--, c4--) : i5[l4].t === r4.SES_DELETE ? s3-- : i5[l4].t === r4.SES_ADD && c4--;
        var u5 = { file1index: -1, file2index: -1, chain: null };
        return o4 ? (o4.chain = u5, a5) : u5;
      }
      function i4(e5, t5) {
        for (var n5 = [], i5 = e5.length, a5 = t5.length, o4 = r3(e5, t5); o4 !== null; o4 = o4.chain) {
          var s3 = i5 - o4.file1index - 1, c4 = a5 - o4.file2index - 1;
          i5 = o4.file1index, a5 = o4.file2index, (s3 || c4) && n5.push({ file1: [i5 + 1, s3], file2: [a5 + 1, c4] });
        }
        return n5.reverse(), n5;
      }
      function a4(e5, t5, n5) {
        var r4, a5 = i4(t5, e5), o4 = i4(t5, n5), s3 = [];
        function c4(e6, t6) {
          s3.push([e6.file1[0], t6, e6.file1[1], e6.file2[0], e6.file2[1]]);
        }
        for (r4 = 0; r4 < a5.length; r4++) c4(a5[r4], 0);
        for (r4 = 0; r4 < o4.length; r4++) c4(o4[r4], 2);
        s3.sort(function(e6, t6) {
          return e6[0] - t6[0];
        });
        var l4 = [], u5 = 0;
        function d3(e6) {
          e6 > u5 && (l4.push([1, u5, e6 - u5]), u5 = e6);
        }
        for (var f3 = 0; f3 < s3.length; f3++) {
          for (var p3 = f3, m4 = s3[f3], h5 = m4[0], g4 = h5 + m4[2]; f3 < s3.length - 1; ) {
            var _4 = s3[f3 + 1], v4 = _4[0];
            if (v4 > g4) break;
            g4 = Math.max(g4, v4 + _4[2]), f3++;
          }
          if (d3(h5), p3 == f3) m4[4] > 0 && l4.push([m4[1], m4[3], m4[4]]);
          else {
            var y5 = { 0: [e5.length, -1, t5.length, -1], 2: [n5.length, -1, t5.length, -1] };
            for (r4 = p3; r4 <= f3; r4++) {
              m4 = s3[r4];
              var b4 = y5[m4[1]], x4 = m4[0], S4 = x4 + m4[2], C5 = m4[3], w4 = C5 + m4[4];
              b4[0] = Math.min(C5, b4[0]), b4[1] = Math.max(w4, b4[1]), b4[2] = Math.min(x4, b4[2]), b4[3] = Math.max(S4, b4[3]);
            }
            var T4 = y5[0][0] + (h5 - y5[0][2]), E4 = y5[0][1] + (g4 - y5[0][3]), D4 = y5[2][0] + (h5 - y5[2][2]), O4 = y5[2][1] + (g4 - y5[2][3]);
            l4.push([-1, T4, E4 - T4, h5, g4 - h5, D4, O4 - D4]);
          }
          u5 = g4;
        }
        return d3(t5.length), l4;
      }
      function o3(e5, t5, n5) {
        var r4 = [], i5 = [e5, t5, n5], o4 = a4(e5, t5, n5), s3 = [];
        function c4() {
          s3.length && r4.push({ ok: s3 }), s3 = [];
        }
        function l4(e6) {
          for (var t6 = 0; t6 < e6.length; t6++) s3.push(e6[t6]);
        }
        function u5(t6) {
          if (t6[2] != t6[6]) return true;
          for (var r5 = t6[1], i6 = t6[5], a5 = 0; a5 < t6[2]; a5++) if (e5[a5 + r5] != n5[a5 + i6]) return true;
          return false;
        }
        for (var d3 = 0; d3 < o4.length; d3++) {
          var f3 = o4[d3], p3 = f3[0];
          p3 == -1 ? u5(f3) ? (c4(), r4.push({ conflict: { a: e5.slice(f3[1], f3[1] + f3[2]), aIndex: f3[1], o: t5.slice(f3[3], f3[3] + f3[4]), oIndex: f3[3], b: n5.slice(f3[5], f3[5] + f3[6]), bIndex: f3[5] } })) : l4(i5[0].slice(f3[1], f3[1] + f3[2])) : l4(i5[p3].slice(f3[1], f3[1] + f3[2]));
        }
        return c4(), r4;
      }
      t4.exports = o3;
    }));
    Pe = f(((e4) => {
      Object.defineProperty(e4, `__esModule`, { value: true });
      function t4(e5) {
        return e5 && typeof e5 == `object` && `default` in e5 ? e5.default : e5;
      }
      var r3 = t4(u4()), i4 = t4(fe()), a4 = t4(pe()), o3 = t4(Oe()), s3 = h2(`crypto`), c4 = t4(ke());
      t4(Ae());
      var l4 = t4(je());
      t4(Ne());
      var d3 = class e5 extends Error {
        constructor(e6) {
          super(e6), this.caller = ``;
        }
        toJSON() {
          return { code: this.code, data: this.data, caller: this.caller, message: this.message, stack: this.stack };
        }
        fromJSON(t5) {
          let n4 = new e5(t5.message);
          return n4.code = t5.code, n4.data = t5.data, n4.caller = t5.caller, n4.stack = t5.stack, n4;
        }
        get isIsomorphicGitError() {
          return true;
        }
      }, f3 = class e5 extends d3 {
        constructor(t5) {
          super(`Modifying the index is not possible because you have unmerged files: ${t5.toString}. Fix them up in the work tree, and then use 'git add/rm as appropriate to mark resolution and make a commit.`), this.code = this.name = e5.code, this.data = { filepaths: t5 };
        }
      };
      f3.code = `UnmergedPathsError`;
      var p3 = class e5 extends d3 {
        constructor(t5) {
          super(`An internal error caused this command to fail.

If you're not a developer, report the bug to the developers of the application you're using. If this is a bug in isomorphic-git then you should create a proper bug yourselves. The bug should include a minimal reproduction and details about the version and environment.

Please file a bug report at https://github.com/isomorphic-git/isomorphic-git/issues with this error message: ${t5}`), this.code = this.name = e5.code, this.data = { message: t5 };
        }
      };
      p3.code = `InternalError`;
      var m4 = class e5 extends d3 {
        constructor(t5) {
          super(`The filepath "${t5}" contains unsafe character sequences`), this.code = this.name = e5.code, this.data = { filepath: t5 };
        }
      };
      m4.code = `UnsafeFilepathError`;
      var h5 = class {
        constructor(e5) {
          this.buffer = e5, this._start = 0;
        }
        eof() {
          return this._start >= this.buffer.length;
        }
        tell() {
          return this._start;
        }
        seek(e5) {
          this._start = e5;
        }
        slice(e5) {
          let t5 = this.buffer.slice(this._start, this._start + e5);
          return this._start += e5, t5;
        }
        toString(e5, t5) {
          let n4 = this.buffer.toString(e5, this._start, this._start + t5);
          return this._start += t5, n4;
        }
        write(e5, t5, n4) {
          let r4 = this.buffer.write(e5, this._start, t5, n4);
          return this._start += t5, r4;
        }
        copy(e5, t5, n4) {
          let r4 = e5.copy(this.buffer, this._start, t5, n4);
          return this._start += r4, r4;
        }
        readUInt8() {
          let e5 = this.buffer.readUInt8(this._start);
          return this._start += 1, e5;
        }
        writeUInt8(e5) {
          let t5 = this.buffer.writeUInt8(e5, this._start);
          return this._start += 1, t5;
        }
        readUInt16BE() {
          let e5 = this.buffer.readUInt16BE(this._start);
          return this._start += 2, e5;
        }
        writeUInt16BE(e5) {
          let t5 = this.buffer.writeUInt16BE(e5, this._start);
          return this._start += 2, t5;
        }
        readUInt32BE() {
          let e5 = this.buffer.readUInt32BE(this._start);
          return this._start += 4, e5;
        }
        writeUInt32BE(e5) {
          let t5 = this.buffer.writeUInt32BE(e5, this._start);
          return this._start += 4, t5;
        }
      };
      function g4(e5, t5) {
        return -(e5 < t5) || +(e5 > t5);
      }
      function _4(e5, t5) {
        return g4(e5.path, t5.path);
      }
      function v4(e5) {
        let t5 = e5 > 0 ? e5 >> 12 : 0;
        t5 !== 4 && t5 !== 8 && t5 !== 10 && t5 !== 14 && (t5 = 8);
        let n4 = e5 & 511;
        return n4 = n4 & 73 ? 493 : 420, t5 !== 8 && (n4 = 0), (t5 << 12) + n4;
      }
      let y5 = 2 ** 32;
      function b4(e5, t5, n4, r4) {
        if (e5 !== void 0 && t5 !== void 0) return [e5, t5];
        n4 === void 0 && (n4 = r4.valueOf());
        let i5 = Math.floor(n4 / 1e3);
        return [i5, (n4 - i5 * 1e3) * 1e6];
      }
      function x4(e5) {
        let [t5, n4] = b4(e5.ctimeSeconds, e5.ctimeNanoseconds, e5.ctimeMs, e5.ctime), [r4, i5] = b4(e5.mtimeSeconds, e5.mtimeNanoseconds, e5.mtimeMs, e5.mtime);
        return { ctimeSeconds: t5 % y5, ctimeNanoseconds: n4 % y5, mtimeSeconds: r4 % y5, mtimeNanoseconds: i5 % y5, dev: e5.dev % y5, ino: e5.ino % y5, mode: v4(e5.mode % y5), uid: e5.uid % y5, gid: e5.gid % y5, size: e5.size > -1 ? e5.size % y5 : 0 };
      }
      function S4(e5) {
        let t5 = ``;
        for (let n4 of new Uint8Array(e5)) n4 < 16 && (t5 += `0`), t5 += n4.toString(16);
        return t5;
      }
      let C5 = null;
      async function w4(e5) {
        return C5 === null && (C5 = await D4()), C5 ? E4(e5) : T4(e5);
      }
      function T4(e5) {
        return new i4().update(e5).digest(`hex`);
      }
      async function E4(e5) {
        return S4(await crypto.subtle.digest(`SHA-1`, e5));
      }
      async function D4() {
        try {
          return await E4(new Uint8Array([])) === `da39a3ee5e6b4b0d3255bfef95601890afd80709`;
        } catch {
        }
        return false;
      }
      function O4(e5) {
        return { assumeValid: !!(e5 & 32768), extended: !!(e5 & 16384), stage: (e5 & 12288) >> 12, nameLength: e5 & 4095 };
      }
      function k4(e5) {
        let t5 = e5.flags;
        return t5.extended = false, t5.nameLength = Math.min(Buffer.from(e5.path).length, 4095), (t5.assumeValid ? 32768 : 0) + (t5.extended ? 16384 : 0) + ((t5.stage & 3) << 12) + (t5.nameLength & 4095);
      }
      var A4 = class e5 {
        constructor(e6, t5) {
          this._dirty = false, this._unmergedPaths = t5 || /* @__PURE__ */ new Set(), this._entries = e6 || /* @__PURE__ */ new Map();
        }
        _addEntry(e6) {
          if (e6.flags.stage === 0) e6.stages = [e6], this._entries.set(e6.path, e6), this._unmergedPaths.delete(e6.path);
          else {
            let t5 = this._entries.get(e6.path);
            t5 ||= (this._entries.set(e6.path, e6), e6), t5.stages[e6.flags.stage] = e6, this._unmergedPaths.add(e6.path);
          }
        }
        static async from(t5) {
          if (Buffer.isBuffer(t5)) return e5.fromBuffer(t5);
          if (t5 === null) return new e5(null);
          throw new p3(`invalid type passed to GitIndex.from`);
        }
        static async fromBuffer(t5) {
          if (t5.length === 0) throw new p3(`Index file is empty (.git/index)`);
          let n4 = new e5(), r4 = new h5(t5), i5 = r4.toString(`utf8`, 4);
          if (i5 !== `DIRC`) throw new p3(`Invalid dircache magic file number: ${i5}`);
          let a5 = await w4(t5.slice(0, -20)), o4 = t5.slice(-20).toString(`hex`);
          if (o4 !== a5) throw new p3(`Invalid checksum in GitIndex buffer: expected ${o4} but saw ${a5}`);
          let s4 = r4.readUInt32BE();
          if (s4 !== 2) throw new p3(`Unsupported dircache version: ${s4}`);
          let c5 = r4.readUInt32BE(), l5 = 0;
          for (; !r4.eof() && l5 < c5; ) {
            let e6 = {};
            e6.ctimeSeconds = r4.readUInt32BE(), e6.ctimeNanoseconds = r4.readUInt32BE(), e6.mtimeSeconds = r4.readUInt32BE(), e6.mtimeNanoseconds = r4.readUInt32BE(), e6.dev = r4.readUInt32BE(), e6.ino = r4.readUInt32BE(), e6.mode = r4.readUInt32BE(), e6.uid = r4.readUInt32BE(), e6.gid = r4.readUInt32BE(), e6.size = r4.readUInt32BE(), e6.oid = r4.slice(20).toString(`hex`), e6.flags = O4(r4.readUInt16BE());
            let i6 = t5.indexOf(0, r4.tell() + 1) - r4.tell();
            if (i6 < 1) throw new p3(`Got a path length of: ${i6}`);
            if (e6.path = r4.toString(`utf8`, i6), e6.path.includes(`..\\`) || e6.path.includes(`../`)) throw new m4(e6.path);
            let a6 = 8 - (r4.tell() - 12) % 8;
            for (a6 === 0 && (a6 = 8); a6--; ) {
              let t6 = r4.readUInt8();
              if (t6 !== 0) throw new p3(`Expected 1-8 null characters but got '${t6}' after ${e6.path}`);
              if (r4.eof()) throw new p3(`Unexpected end of file`);
            }
            e6.stages = [], n4._addEntry(e6), l5++;
          }
          return n4;
        }
        get unmergedPaths() {
          return [...this._unmergedPaths];
        }
        get entries() {
          return [...this._entries.values()].sort(_4);
        }
        get entriesMap() {
          return this._entries;
        }
        get entriesFlat() {
          return [...this.entries].flatMap((e6) => e6.stages.length > 1 ? e6.stages.filter((e7) => e7) : e6);
        }
        *[Symbol.iterator]() {
          for (let e6 of this.entries) yield e6;
        }
        insert({ filepath: e6, stats: t5, oid: n4, stage: r4 = 0 }) {
          t5 ||= { ctimeSeconds: 0, ctimeNanoseconds: 0, mtimeSeconds: 0, mtimeNanoseconds: 0, dev: 0, ino: 0, mode: 0, uid: 0, gid: 0, size: 0 }, t5 = x4(t5);
          let i5 = Buffer.from(e6), a5 = { ctimeSeconds: t5.ctimeSeconds, ctimeNanoseconds: t5.ctimeNanoseconds, mtimeSeconds: t5.mtimeSeconds, mtimeNanoseconds: t5.mtimeNanoseconds, dev: t5.dev, ino: t5.ino, mode: t5.mode || 33188, uid: t5.uid, gid: t5.gid, size: t5.size, path: e6, oid: n4, flags: { assumeValid: false, extended: false, stage: r4, nameLength: i5.length < 4095 ? i5.length : 4095 }, stages: [] };
          this._addEntry(a5), this._dirty = true;
        }
        delete({ filepath: e6 }) {
          if (this._entries.has(e6)) this._entries.delete(e6);
          else for (let t5 of this._entries.keys()) t5.startsWith(e6 + `/`) && this._entries.delete(t5);
          this._unmergedPaths.has(e6) && this._unmergedPaths.delete(e6), this._dirty = true;
        }
        clear() {
          this._entries.clear(), this._dirty = true;
        }
        has({ filepath: e6 }) {
          return this._entries.has(e6);
        }
        render() {
          return this.entries.map((e6) => `${e6.mode.toString(8)} ${e6.oid}    ${e6.path}`).join(`
`);
        }
        static async _entryToBuffer(e6) {
          let t5 = Buffer.from(e6.path), n4 = Math.ceil((62 + t5.length + 1) / 8) * 8, r4 = Buffer.alloc(n4), i5 = new h5(r4), a5 = x4(e6);
          return i5.writeUInt32BE(a5.ctimeSeconds), i5.writeUInt32BE(a5.ctimeNanoseconds), i5.writeUInt32BE(a5.mtimeSeconds), i5.writeUInt32BE(a5.mtimeNanoseconds), i5.writeUInt32BE(a5.dev), i5.writeUInt32BE(a5.ino), i5.writeUInt32BE(a5.mode), i5.writeUInt32BE(a5.uid), i5.writeUInt32BE(a5.gid), i5.writeUInt32BE(a5.size), i5.write(e6.oid, 20, `hex`), i5.writeUInt16BE(k4(e6)), i5.write(e6.path, t5.length, `utf8`), r4;
        }
        async toObject() {
          let t5 = Buffer.alloc(12), n4 = new h5(t5);
          n4.write(`DIRC`, 4, `utf8`), n4.writeUInt32BE(2), n4.writeUInt32BE(this.entriesFlat.length);
          let r4 = [];
          for (let t6 of this.entries) if (r4.push(e5._entryToBuffer(t6)), t6.stages.length > 1) for (let n5 of t6.stages) n5 && n5 !== t6 && r4.push(e5._entryToBuffer(n5));
          r4 = await Promise.all(r4);
          let i5 = Buffer.concat(r4), a5 = Buffer.concat([t5, i5]), o4 = await w4(a5);
          return Buffer.concat([a5, Buffer.from(o4, `hex`)]);
        }
      };
      function j4(e5, t5, n4 = true, r4 = true) {
        let i5 = x4(e5), a5 = x4(t5);
        return n4 && i5.mode !== a5.mode || i5.mtimeSeconds !== a5.mtimeSeconds || i5.ctimeSeconds !== a5.ctimeSeconds || i5.uid !== a5.uid || i5.gid !== a5.gid || r4 && i5.ino !== a5.ino || i5.size !== a5.size;
      }
      let M4 = null, N4 = /* @__PURE__ */ Symbol(`IndexCache`);
      function P4() {
        return { map: /* @__PURE__ */ new Map(), stats: /* @__PURE__ */ new Map() };
      }
      async function F4(e5, t5, n4) {
        let [r4, i5] = await Promise.all([e5.lstat(t5), e5.read(t5)]), a5 = await A4.from(i5);
        n4.map.set(t5, a5), n4.stats.set(t5, r4);
      }
      async function ee3(e5, t5, n4) {
        let r4 = n4.stats.get(t5);
        if (r4 === void 0) return true;
        if (r4 === null) return false;
        let i5 = await e5.lstat(t5);
        return i5 === null ? false : j4(r4, i5);
      }
      var I5 = class {
        static async acquire({ fs: e5, gitdir: t5, cache: n4, allowUnmerged: i5 = true }, a5) {
          n4[N4] || (n4[N4] = P4());
          let o4 = `${t5}/index`;
          M4 === null && (M4 = new r3({ maxPending: 1 / 0 }));
          let s4, c5 = [];
          return await M4.acquire(o4, async () => {
            let t6 = n4[N4];
            await ee3(e5, o4, t6) && await F4(e5, o4, t6);
            let r4 = t6.map.get(o4);
            if (c5 = r4.unmergedPaths, c5.length && !i5) throw new f3(c5);
            if (s4 = await a5(r4), r4._dirty) {
              let n5 = await r4.toObject();
              await e5.write(o4, n5), t6.stats.set(o4, await e5.lstat(o4)), r4._dirty = false;
            }
          }), s4;
        }
      };
      function L4(e5) {
        let t5 = Math.max(e5.lastIndexOf(`/`), e5.lastIndexOf(`\\`));
        return t5 > -1 && (e5 = e5.slice(t5 + 1)), e5;
      }
      function R5(e5) {
        let t5 = Math.max(e5.lastIndexOf(`/`), e5.lastIndexOf(`\\`));
        return t5 === -1 ? `.` : t5 === 0 ? `/` : e5.slice(0, t5);
      }
      function te3(e5) {
        let t5 = /* @__PURE__ */ new Map(), n4 = function(e6) {
          if (!t5.has(e6)) {
            let r5 = { type: `tree`, fullpath: e6, basename: L4(e6), metadata: {}, children: [] };
            t5.set(e6, r5), r5.parent = n4(R5(e6)), r5.parent && r5.parent !== r5 && r5.parent.children.push(r5);
          }
          return t5.get(e6);
        }, r4 = function(e6, r5) {
          if (!t5.has(e6)) {
            let i5 = { type: `blob`, fullpath: e6, basename: L4(e6), metadata: r5, parent: n4(R5(e6)), children: [] };
            i5.parent && i5.parent.children.push(i5), t5.set(e6, i5);
          }
          return t5.get(e6);
        };
        n4(`.`);
        for (let t6 of e5) r4(t6.path, t6);
        return t5;
      }
      function ne3(e5) {
        switch (e5) {
          case 16384:
            return `tree`;
          case 33188:
            return `blob`;
          case 33261:
            return `blob`;
          case 40960:
            return `blob`;
          case 57344:
            return `commit`;
        }
        throw new p3(`Unexpected GitTree entry mode: ${e5.toString(8)}`);
      }
      var z4 = class {
        constructor({ fs: e5, gitdir: t5, cache: n4 }) {
          this.treePromise = I5.acquire({ fs: e5, gitdir: t5, cache: n4 }, async function(e6) {
            return te3(e6.entries);
          });
          let r4 = this;
          this.ConstructEntry = class {
            constructor(e6) {
              this._fullpath = e6, this._type = false, this._mode = false, this._stat = false, this._oid = false;
            }
            async type() {
              return r4.type(this);
            }
            async mode() {
              return r4.mode(this);
            }
            async stat() {
              return r4.stat(this);
            }
            async content() {
              return r4.content(this);
            }
            async oid() {
              return r4.oid(this);
            }
          };
        }
        async readdir(e5) {
          let t5 = e5._fullpath, n4 = (await this.treePromise).get(t5);
          if (!n4 || n4.type === `blob`) return null;
          if (n4.type !== `tree`) throw Error(`ENOTDIR: not a directory, scandir '${t5}'`);
          let r4 = n4.children.map((e6) => e6.fullpath);
          return r4.sort(g4), r4;
        }
        async type(e5) {
          return e5._type === false && await e5.stat(), e5._type;
        }
        async mode(e5) {
          return e5._mode === false && await e5.stat(), e5._mode;
        }
        async stat(e5) {
          if (e5._stat === false) {
            let t5 = (await this.treePromise).get(e5._fullpath);
            if (!t5) throw Error(`ENOENT: no such file or directory, lstat '${e5._fullpath}'`);
            let n4 = t5.type === `tree` ? {} : x4(t5.metadata);
            e5._type = t5.type === `tree` ? `tree` : ne3(n4.mode), e5._mode = n4.mode, t5.type === `tree` ? e5._stat = void 0 : e5._stat = n4;
          }
          return e5._stat;
        }
        async content(e5) {
        }
        async oid(e5) {
          return e5._oid === false && (e5._oid = (await this.treePromise).get(e5._fullpath).metadata.oid), e5._oid;
        }
      };
      let B4 = /* @__PURE__ */ Symbol(`GitWalkSymbol`);
      function V4() {
        let e5 = /* @__PURE__ */ Object.create(null);
        return Object.defineProperty(e5, B4, { value: function({ fs: e6, gitdir: t5, cache: n4 }) {
          return new z4({ fs: e6, gitdir: t5, cache: n4 });
        } }), Object.freeze(e5), e5;
      }
      var H3 = class e5 extends d3 {
        constructor(t5) {
          super(`Could not find ${t5}.`), this.code = this.name = e5.code, this.data = { what: t5 };
        }
      };
      H3.code = `NotFoundError`;
      var re3 = class e5 extends d3 {
        constructor(t5, n4, r4, i5) {
          super(`Object ${t5} ${i5 ? `at ${i5}` : ``}was anticipated to be a ${r4} but it is a ${n4}.`), this.code = this.name = e5.code, this.data = { oid: t5, actual: n4, expected: r4, filepath: i5 };
        }
      };
      re3.code = `ObjectTypeError`;
      var ie3 = class e5 extends d3 {
        constructor(t5) {
          super(`Expected a 40-char hex object id but saw "${t5}".`), this.code = this.name = e5.code, this.data = { value: t5 };
        }
      };
      ie3.code = `InvalidOidError`;
      var ae3 = class e5 extends d3 {
        constructor(t5) {
          super(`Could not find a fetch refspec for remote "${t5}". Make sure the config file has an entry like the following:
[remote "${t5}"]
	fetch = +refs/heads/*:refs/remotes/origin/*
`), this.code = this.name = e5.code, this.data = { remote: t5 };
        }
      };
      ae3.code = `NoRefspecError`;
      var U4 = class e5 {
        constructor(e6) {
          if (this.refs = /* @__PURE__ */ new Map(), this.parsedConfig = [], e6) {
            let t5 = null;
            this.parsedConfig = e6.trim().split(`
`).map((e7) => {
              if (/^\s*#/.test(e7)) return { line: e7, comment: true };
              let n4 = e7.indexOf(` `);
              if (e7.startsWith(`^`)) {
                let n5 = e7.slice(1);
                return this.refs.set(t5 + `^{}`, n5), { line: e7, ref: t5, peeled: n5 };
              } else {
                let r4 = e7.slice(0, n4);
                return t5 = e7.slice(n4 + 1), this.refs.set(t5, r4), { line: e7, ref: t5, oid: r4 };
              }
            });
          }
          return this;
        }
        static from(t5) {
          return new e5(t5);
        }
        delete(e6) {
          this.parsedConfig = this.parsedConfig.filter((t5) => t5.ref !== e6), this.refs.delete(e6);
        }
        toString() {
          return this.parsedConfig.map(({ line: e6 }) => e6).join(`
`) + `
`;
        }
      }, W3 = class e5 {
        constructor({ remotePath: e6, localPath: t5, force: n4, matchPrefix: r4 }) {
          Object.assign(this, { remotePath: e6, localPath: t5, force: n4, matchPrefix: r4 });
        }
        static from(t5) {
          let [n4, r4, i5, a5, o4] = t5.match(/^(\+?)(.*?)(\*?):(.*?)(\*?)$/).slice(1), s4 = n4 === `+`, c5 = i5 === `*`;
          if (c5 !== (o4 === `*`)) throw new p3(`Invalid refspec`);
          return new e5({ remotePath: r4, localPath: a5, force: s4, matchPrefix: c5 });
        }
        translate(e6) {
          if (this.matchPrefix) {
            if (e6.startsWith(this.remotePath)) return this.localPath + e6.replace(this.remotePath, ``);
          } else if (e6 === this.remotePath) return this.localPath;
          return null;
        }
        reverseTranslate(e6) {
          if (this.matchPrefix) {
            if (e6.startsWith(this.localPath)) return this.remotePath + e6.replace(this.localPath, ``);
          } else if (e6 === this.localPath) return this.remotePath;
          return null;
        }
      }, oe3 = class e5 {
        constructor(e6 = []) {
          this.rules = e6;
        }
        static from(t5) {
          let n4 = [];
          for (let e6 of t5) n4.push(W3.from(e6));
          return new e5(n4);
        }
        add(e6) {
          let t5 = W3.from(e6);
          this.rules.push(t5);
        }
        translate(e6) {
          let t5 = [];
          for (let n4 of this.rules) for (let r4 of e6) {
            let e7 = n4.translate(r4);
            e7 && t5.push([r4, e7]);
          }
          return t5;
        }
        translateOne(e6) {
          let t5 = null;
          for (let n4 of this.rules) {
            let r4 = n4.translate(e6);
            r4 && (t5 = r4);
          }
          return t5;
        }
        localNamespaces() {
          return this.rules.filter((e6) => e6.matchPrefix).map((e6) => e6.localPath.replace(/\/$/, ``));
        }
      };
      function se3(e5, t5) {
        let n4 = e5.replace(/\^\{\}$/, ``), r4 = t5.replace(/\^\{\}$/, ``), i5 = -(n4 < r4) || +(n4 > r4);
        return i5 === 0 ? e5.endsWith(`^{}`) ? 1 : -1 : i5;
      }
      function G3(e5, t5) {
        let n4 = ``, r4 = 0, i5 = -1, a5 = 0, o4 = `\0`;
        for (let s4 = 0; s4 <= e5.length; ++s4) {
          if (s4 < e5.length) o4 = e5[s4];
          else if (o4 === `/`) break;
          else o4 = `/`;
          if (o4 === `/`) {
            if (!(i5 === s4 - 1 || a5 === 1)) if (a5 === 2) {
              if (n4.length < 2 || r4 !== 2 || n4.at(-1) !== `.` || n4.at(-2) !== `.`) {
                if (n4.length > 2) {
                  let e6 = n4.lastIndexOf(`/`);
                  e6 === -1 ? (n4 = ``, r4 = 0) : (n4 = n4.slice(0, e6), r4 = n4.length - 1 - n4.lastIndexOf(`/`)), i5 = s4, a5 = 0;
                  continue;
                } else if (n4.length !== 0) {
                  n4 = ``, r4 = 0, i5 = s4, a5 = 0;
                  continue;
                }
              }
              t5 && (n4 += n4.length > 0 ? `/..` : `..`, r4 = 2);
            } else n4.length > 0 ? n4 += `/` + e5.slice(i5 + 1, s4) : n4 = e5.slice(i5 + 1, s4), r4 = s4 - i5 - 1;
            i5 = s4, a5 = 0;
          } else o4 === `.` && a5 !== -1 ? ++a5 : a5 = -1;
        }
        return n4;
      }
      function K3(e5) {
        if (!e5.length) return `.`;
        let t5 = e5[0] === `/`, n4 = e5.at(-1) === `/`;
        return e5 = G3(e5, !t5), e5.length ? (n4 && (e5 += `/`), t5 ? `/${e5}` : e5) : t5 ? `/` : n4 ? `./` : `.`;
      }
      function ce3(...e5) {
        if (e5.length === 0) return `.`;
        let t5;
        for (let n4 = 0; n4 < e5.length; ++n4) {
          let r4 = e5[n4];
          r4.length > 0 && (t5 === void 0 ? t5 = r4 : t5 += `/` + r4);
        }
        return t5 === void 0 ? `.` : K3(t5);
      }
      let le3 = (e5) => {
        if (typeof e5 == `number`) return e5;
        e5 = e5.toLowerCase();
        let t5 = parseInt(e5);
        return e5.endsWith(`k`) && (t5 *= 1024), e5.endsWith(`m`) && (t5 *= 1024 * 1024), e5.endsWith(`g`) && (t5 *= 1024 * 1024 * 1024), t5;
      }, q3 = (e5) => {
        if (typeof e5 == `boolean`) return e5;
        if (e5 = e5.trim().toLowerCase(), e5 === `true` || e5 === `yes` || e5 === `on`) return true;
        if (e5 === `false` || e5 === `no` || e5 === `off`) return false;
        throw Error(`Expected 'true', 'false', 'yes', 'no', 'on', or 'off', but got ${e5}`);
      }, ue3 = { core: { filemode: q3, bare: q3, logallrefupdates: q3, symlinks: q3, ignorecase: q3, bigFileThreshold: le3 } }, J3 = /^\[([A-Za-z0-9-.]+)(?: "(.*)")?\]$/, Y3 = /^[A-Za-z0-9-.]+$/, X3 = /^([A-Za-z][A-Za-z-]*)(?: *= *(.*))?$/, Z3 = /^[A-Za-z][A-Za-z-]*$/, de3 = /^(.*?)( *[#;].*)$/, Q3 = (e5) => {
        let t5 = J3.exec(e5);
        if (t5 != null) {
          let [e6, n4] = t5.slice(1);
          return [e6, n4];
        }
        return null;
      }, $3 = (e5) => {
        let t5 = X3.exec(e5);
        if (t5 != null) {
          let [e6, n4 = `true`] = t5.slice(1);
          return [e6, ge3(me3(n4))];
        }
        return null;
      }, me3 = (e5) => {
        let t5 = de3.exec(e5);
        if (t5 == null) return e5;
        let [n4, r4] = t5.slice(1);
        return he3(n4) && he3(r4) ? `${n4}${r4}` : n4;
      }, he3 = (e5) => (e5.match(/(?:^|[^\\])"/g) || []).length % 2 != 0, ge3 = (e5) => e5.split(``).reduce((e6, t5, n4, r4) => {
        let i5 = t5 === `"` && r4[n4 - 1] !== `\\`, a5 = t5 === `\\` && r4[n4 + 1] === `"`;
        return i5 || a5 ? e6 : e6 + t5;
      }, ``), _e3 = (e5) => e5 == null ? null : e5.toLowerCase(), ve3 = (e5, t5, n4) => [_e3(e5), t5, _e3(n4)].filter((e6) => e6 != null).join(`.`), ye3 = (e5) => {
        let t5 = e5.split(`.`), n4 = t5.shift(), r4 = t5.pop(), i5 = t5.length ? t5.join(`.`) : void 0;
        return { section: n4, subsection: i5, name: r4, path: ve3(n4, i5, r4), sectionPath: ve3(n4, i5, null), isSection: !!n4 };
      }, be3 = (e5, t5) => e5.reduce((e6, n4, r4) => t5(n4) ? r4 : e6, -1);
      var xe3 = class e5 {
        constructor(e6) {
          let t5 = null, n4 = null;
          this.parsedConfig = e6 ? e6.split(`
`).map((e7) => {
            let r4 = null, i5 = null, a5 = e7.trim(), o4 = Q3(a5), s4 = o4 != null;
            if (s4) [t5, n4] = o4;
            else {
              let e8 = $3(a5);
              e8 != null && ([r4, i5] = e8);
            }
            let c5 = ve3(t5, n4, r4);
            return { line: e7, isSection: s4, section: t5, subsection: n4, name: r4, value: i5, path: c5 };
          }) : [];
        }
        static from(t5) {
          return new e5(t5);
        }
        async get(e6, t5 = false) {
          let n4 = ye3(e6).path, r4 = this.parsedConfig.filter((e7) => e7.path === n4).map(({ section: e7, name: t6, value: n5 }) => {
            let r5 = ue3[e7] && ue3[e7][t6];
            return r5 ? r5(n5) : n5;
          });
          return t5 ? r4 : r4.pop();
        }
        async getall(e6) {
          return this.get(e6, true);
        }
        async getSubsections(e6) {
          return this.parsedConfig.filter((t5) => t5.isSection && t5.section === e6).map((e7) => e7.subsection);
        }
        async deleteSection(e6, t5) {
          this.parsedConfig = this.parsedConfig.filter((n4) => !(n4.section === e6 && n4.subsection === t5));
        }
        async append(e6, t5) {
          return this.set(e6, t5, true);
        }
        async set(e6, t5, n4 = false) {
          let { section: r4, subsection: i5, name: a5, path: o4, sectionPath: s4, isSection: c5 } = ye3(e6), l5 = be3(this.parsedConfig, (e7) => e7.path === o4);
          if (t5 == null) l5 !== -1 && this.parsedConfig.splice(l5, 1);
          else if (l5 !== -1) {
            let e7 = this.parsedConfig[l5], r5 = Object.assign({}, e7, { name: a5, value: t5, modified: true });
            n4 ? this.parsedConfig.splice(l5 + 1, 0, r5) : this.parsedConfig[l5] = r5;
          } else {
            let e7 = this.parsedConfig.findIndex((e8) => e8.path === s4), n5 = { section: r4, subsection: i5, name: a5, value: t5, modified: true, path: o4 };
            if (Y3.test(r4) && Z3.test(a5)) if (e7 >= 0) this.parsedConfig.splice(e7 + 1, 0, n5);
            else {
              let e8 = { isSection: c5, section: r4, subsection: i5, modified: true, path: s4 };
              this.parsedConfig.push(e8, n5);
            }
          }
        }
        toString() {
          return this.parsedConfig.map(({ line: e6, section: t5, subsection: n4, name: r4, value: i5, modified: a5 = false }) => a5 ? r4 != null && i5 != null ? typeof i5 == `string` && /[#;]/.test(i5) ? `	${r4} = "${i5}"` : `	${r4} = ${i5}` : n4 == null ? `[${t5}]` : `[${t5} "${n4}"]` : e6).join(`
`);
        }
      }, Se3 = class {
        static async get({ fs: e5, gitdir: t5 }) {
          let n4 = await e5.read(`${t5}/config`, { encoding: `utf8` });
          return xe3.from(n4);
        }
        static async save({ fs: e5, gitdir: t5, config: n4 }) {
          await e5.write(`${t5}/config`, n4.toString(), { encoding: `utf8` });
        }
      };
      let Ce3 = (e5) => [`${e5}`, `refs/${e5}`, `refs/tags/${e5}`, `refs/heads/${e5}`, `refs/remotes/${e5}`, `refs/remotes/${e5}/HEAD`], we3 = [`config`, `description`, `index`, `shallow`, `commondir`], Te3;
      async function Ee3(e5, t5) {
        return Te3 === void 0 && (Te3 = new r3()), Te3.acquire(e5, t5);
      }
      var De3 = class e5 {
        static async updateRemoteRefs({ fs: t5, gitdir: n4, remote: r4, refs: i5, symrefs: a5, tags: o4, refspecs: s4 = void 0, prune: c5 = false, pruneTags: l5 = false }) {
          for (let e6 of i5.values()) if (!e6.match(/[0-9a-f]{40}/)) throw new ie3(e6);
          let u5 = await Se3.get({ fs: t5, gitdir: n4 });
          if (!s4) {
            if (s4 = await u5.getall(`remote.${r4}.fetch`), s4.length === 0) throw new ae3(r4);
            s4.unshift(`+HEAD:refs/remotes/${r4}/HEAD`);
          }
          let d4 = oe3.from(s4), f4 = /* @__PURE__ */ new Map();
          if (l5) {
            let r5 = await e5.listRefs({ fs: t5, gitdir: n4, filepath: `refs/tags` });
            await e5.deleteRefs({ fs: t5, gitdir: n4, refs: r5.map((e6) => `refs/tags/${e6}`) });
          }
          if (o4) {
            for (let r5 of i5.keys()) if (r5.startsWith(`refs/tags`) && !r5.endsWith(`^{}`) && !await e5.exists({ fs: t5, gitdir: n4, ref: r5 })) {
              let e6 = i5.get(r5);
              f4.set(r5, e6);
            }
          }
          let p4 = d4.translate([...i5.keys()]);
          for (let [e6, t6] of p4) {
            let n5 = i5.get(e6);
            f4.set(t6, n5);
          }
          let m5 = d4.translate([...a5.keys()]);
          for (let [e6, t6] of m5) {
            let n5 = a5.get(e6), r5 = d4.translateOne(n5);
            r5 && f4.set(t6, `ref: ${r5}`);
          }
          let h6 = [];
          if (c5) {
            for (let r5 of d4.localNamespaces()) {
              let i6 = (await e5.listRefs({ fs: t5, gitdir: n4, filepath: r5 })).map((e6) => `${r5}/${e6}`);
              for (let e6 of i6) f4.has(e6) || h6.push(e6);
            }
            h6.length > 0 && await e5.deleteRefs({ fs: t5, gitdir: n4, refs: h6 });
          }
          for (let [e6, r5] of f4) await Ee3(e6, async () => t5.write(ce3(n4, e6), `${r5.trim()}
`, `utf8`));
          return { pruned: h6 };
        }
        static async writeRef({ fs: e6, gitdir: t5, ref: n4, value: r4 }) {
          if (!r4.match(/[0-9a-f]{40}/)) throw new ie3(r4);
          await Ee3(n4, async () => e6.write(ce3(t5, n4), `${r4.trim()}
`, `utf8`));
        }
        static async writeSymbolicRef({ fs: e6, gitdir: t5, ref: n4, value: r4 }) {
          await Ee3(n4, async () => e6.write(ce3(t5, n4), `ref: ${r4.trim()}
`, `utf8`));
        }
        static async deleteRef({ fs: t5, gitdir: n4, ref: r4 }) {
          return e5.deleteRefs({ fs: t5, gitdir: n4, refs: [r4] });
        }
        static async deleteRefs({ fs: e6, gitdir: t5, refs: n4 }) {
          await Promise.all(n4.map((n5) => e6.rm(ce3(t5, n5))));
          let r4 = await Ee3(`packed-refs`, async () => e6.read(`${t5}/packed-refs`, { encoding: `utf8` })), i5 = U4.from(r4), a5 = i5.refs.size;
          for (let e7 of n4) i5.refs.has(e7) && i5.delete(e7);
          i5.refs.size < a5 && (r4 = i5.toString(), await Ee3(`packed-refs`, async () => e6.write(`${t5}/packed-refs`, r4, { encoding: `utf8` })));
        }
        static async resolve({ fs: t5, gitdir: n4, ref: r4, depth: i5 = void 0 }) {
          if (i5 !== void 0 && (i5--, i5 === -1)) return r4;
          if (r4.startsWith(`ref: `)) return r4 = r4.slice(5), e5.resolve({ fs: t5, gitdir: n4, ref: r4, depth: i5 });
          if (r4.length === 40 && /[0-9a-f]{40}/.test(r4)) return r4;
          let a5 = await e5.packedRefs({ fs: t5, gitdir: n4 }), o4 = Ce3(r4).filter((e6) => !we3.includes(e6));
          for (let r5 of o4) {
            let o5 = await Ee3(r5, async () => await t5.read(`${n4}/${r5}`, { encoding: `utf8` }) || a5.get(r5));
            if (o5) return e5.resolve({ fs: t5, gitdir: n4, ref: o5.trim(), depth: i5 });
          }
          throw new H3(r4);
        }
        static async exists({ fs: t5, gitdir: n4, ref: r4 }) {
          try {
            return await e5.expand({ fs: t5, gitdir: n4, ref: r4 }), true;
          } catch {
            return false;
          }
        }
        static async expand({ fs: t5, gitdir: n4, ref: r4 }) {
          if (r4.length === 40 && /[0-9a-f]{40}/.test(r4)) return r4;
          let i5 = await e5.packedRefs({ fs: t5, gitdir: n4 }), a5 = Ce3(r4);
          for (let e6 of a5) if (await Ee3(e6, async () => t5.exists(`${n4}/${e6}`)) || i5.has(e6)) return e6;
          throw new H3(r4);
        }
        static async expandAgainstMap({ ref: e6, map: t5 }) {
          let n4 = Ce3(e6);
          for (let e7 of n4) if (await t5.has(e7)) return e7;
          throw new H3(e6);
        }
        static resolveAgainstMap({ ref: t5, fullref: n4 = t5, depth: r4 = void 0, map: i5 }) {
          if (r4 !== void 0 && (r4--, r4 === -1)) return { fullref: n4, oid: t5 };
          if (t5.startsWith(`ref: `)) return t5 = t5.slice(5), e5.resolveAgainstMap({ ref: t5, fullref: n4, depth: r4, map: i5 });
          if (t5.length === 40 && /[0-9a-f]{40}/.test(t5)) return { fullref: n4, oid: t5 };
          let a5 = Ce3(t5);
          for (let t6 of a5) {
            let n5 = i5.get(t6);
            if (n5) return e5.resolveAgainstMap({ ref: n5.trim(), fullref: t6, depth: r4, map: i5 });
          }
          throw new H3(t5);
        }
        static async packedRefs({ fs: e6, gitdir: t5 }) {
          let n4 = await Ee3(`packed-refs`, async () => e6.read(`${t5}/packed-refs`, { encoding: `utf8` }));
          return U4.from(n4).refs;
        }
        static async listRefs({ fs: t5, gitdir: n4, filepath: r4 }) {
          let i5 = e5.packedRefs({ fs: t5, gitdir: n4 }), a5 = null;
          try {
            a5 = await t5.readdirDeep(`${n4}/${r4}`), a5 = a5.map((e6) => e6.replace(`${n4}/${r4}/`, ``));
          } catch {
            a5 = [];
          }
          for (let e6 of (await i5).keys()) e6.startsWith(r4) && (e6 = e6.replace(r4 + `/`, ``), a5.includes(e6) || a5.push(e6));
          return a5.sort(se3), a5;
        }
        static async listBranches({ fs: t5, gitdir: n4, remote: r4 }) {
          return r4 ? e5.listRefs({ fs: t5, gitdir: n4, filepath: `refs/remotes/${r4}` }) : e5.listRefs({ fs: t5, gitdir: n4, filepath: `refs/heads` });
        }
        static async listTags({ fs: t5, gitdir: n4 }) {
          return (await e5.listRefs({ fs: t5, gitdir: n4, filepath: `refs/tags` })).filter((e6) => !e6.endsWith(`^{}`));
        }
      };
      function Me3(e5, t5) {
        return g4(Pe3(e5), Pe3(t5));
      }
      function Pe3(e5) {
        return e5.mode === `040000` ? e5.path + `/` : e5.path;
      }
      function Fe3(e5) {
        switch (e5) {
          case `040000`:
            return `tree`;
          case `100644`:
            return `blob`;
          case `100755`:
            return `blob`;
          case `120000`:
            return `blob`;
          case `160000`:
            return `commit`;
        }
        throw new p3(`Unexpected GitTree entry mode: ${e5}`);
      }
      function Ie3(e5) {
        let t5 = [], n4 = 0;
        for (; n4 < e5.length; ) {
          let r4 = e5.indexOf(32, n4);
          if (r4 === -1) throw new p3(`GitTree: Error parsing buffer at byte location ${n4}: Could not find the next space character.`);
          let i5 = e5.indexOf(0, n4);
          if (i5 === -1) throw new p3(`GitTree: Error parsing buffer at byte location ${n4}: Could not find the next null character.`);
          let a5 = e5.slice(n4, r4).toString(`utf8`);
          a5 === `40000` && (a5 = `040000`);
          let o4 = Fe3(a5), s4 = e5.slice(r4 + 1, i5).toString(`utf8`);
          if (s4.includes(`\\`) || s4.includes(`/`)) throw new m4(s4);
          let c5 = e5.slice(i5 + 1, i5 + 21).toString(`hex`);
          n4 = i5 + 21, t5.push({ mode: a5, path: s4, oid: c5, type: o4 });
        }
        return t5;
      }
      function Le3(e5) {
        if (typeof e5 == `number` && (e5 = e5.toString(8)), e5.match(/^0?4.*/)) return `040000`;
        if (e5.match(/^1006.*/)) return `100644`;
        if (e5.match(/^1007.*/)) return `100755`;
        if (e5.match(/^120.*/)) return `120000`;
        if (e5.match(/^160.*/)) return `160000`;
        throw new p3(`Could not understand file mode: ${e5}`);
      }
      function Re3(e5) {
        return !e5.oid && e5.sha && (e5.oid = e5.sha), e5.mode = Le3(e5.mode), e5.type ||= Fe3(e5.mode), e5;
      }
      var ze3 = class e5 {
        constructor(e6) {
          if (Buffer.isBuffer(e6)) this._entries = Ie3(e6);
          else if (Array.isArray(e6)) this._entries = e6.map(Re3);
          else throw new p3(`invalid type passed to GitTree constructor`);
          this._entries.sort(_4);
        }
        static from(t5) {
          return new e5(t5);
        }
        render() {
          return this._entries.map((e6) => `${e6.mode} ${e6.type} ${e6.oid}    ${e6.path}`).join(`
`);
        }
        toObject() {
          let e6 = [...this._entries];
          return e6.sort(Me3), Buffer.concat(e6.map((e7) => {
            let t5 = Buffer.from(e7.mode.replace(/^0/, ``)), n4 = Buffer.from(` `), r4 = Buffer.from(e7.path, `utf8`), i5 = Buffer.from([0]), a5 = Buffer.from(e7.oid, `hex`);
            return Buffer.concat([t5, n4, r4, i5, a5]);
          }));
        }
        entries() {
          return this._entries;
        }
        *[Symbol.iterator]() {
          for (let e6 of this._entries) yield e6;
        }
      }, Be3 = class {
        static wrap({ type: e5, object: t5 }) {
          let n4 = `${e5} ${t5.length}\0`, r4 = n4.length, i5 = r4 + t5.length, a5 = new Uint8Array(i5);
          for (let e6 = 0; e6 < r4; e6++) a5[e6] = n4.charCodeAt(e6);
          return a5.set(t5, r4), a5;
        }
        static unwrap(e5) {
          let t5 = e5.indexOf(32), n4 = e5.indexOf(0), r4 = e5.slice(0, t5).toString(`utf8`), i5 = e5.slice(t5 + 1, n4).toString(`utf8`), a5 = e5.length - (n4 + 1);
          if (parseInt(i5) !== a5) throw new p3(`Length mismatch: expected ${i5} bytes but got ${a5} instead.`);
          return { type: r4, object: Buffer.from(e5.slice(n4 + 1)) };
        }
      };
      async function Ve3({ fs: e5, gitdir: t5, oid: n4 }) {
        let r4 = `objects/${n4.slice(0, 2)}/${n4.slice(2)}`, i5 = await e5.read(`${t5}/${r4}`);
        return i5 ? { object: i5, format: `deflated`, source: r4 } : null;
      }
      function He3(e5, t5) {
        let n4 = new h5(e5), r4 = Ue3(n4);
        if (r4 !== t5.byteLength) throw new p3(`applyDelta expected source buffer to be ${r4} bytes but the provided buffer was ${t5.length} bytes`);
        let i5 = Ue3(n4), a5, o4 = Ge2(n4, t5);
        if (o4.byteLength === i5) a5 = o4;
        else {
          a5 = Buffer.alloc(i5);
          let e6 = new h5(a5);
          for (e6.copy(o4); !n4.eof(); ) e6.copy(Ge2(n4, t5));
          let r5 = e6.tell();
          if (i5 !== r5) throw new p3(`applyDelta expected target buffer to be ${i5} bytes but the resulting buffer was ${r5} bytes`);
        }
        return a5;
      }
      function Ue3(e5) {
        let t5 = 0, n4 = 0, r4 = null;
        do
          r4 = e5.readUInt8(), t5 |= (r4 & 127) << n4, n4 += 7;
        while (r4 & 128);
        return t5;
      }
      function We2(e5, t5, n4) {
        let r4 = 0, i5 = 0;
        for (; n4--; ) t5 & 1 && (r4 |= e5.readUInt8() << i5), t5 >>= 1, i5 += 8;
        return r4;
      }
      function Ge2(e5, t5) {
        let n4 = e5.readUInt8();
        if (n4 & 128) {
          let r4 = We2(e5, n4 & 15, 4), i5 = We2(e5, (n4 & 112) >> 4, 3);
          return i5 === 0 && (i5 = 65536), t5.slice(r4, r4 + i5);
        } else return e5.slice(n4);
      }
      function Ke3(e5) {
        let t5 = [e5];
        return { next() {
          return Promise.resolve({ done: t5.length === 0, value: t5.pop() });
        }, return() {
          return t5 = [], {};
        }, [Symbol.asyncIterator]() {
          return this;
        } };
      }
      function qe2(e5) {
        return e5[Symbol.asyncIterator] ? e5[Symbol.asyncIterator]() : e5[Symbol.iterator] ? e5[Symbol.iterator]() : e5.next ? e5 : Ke3(e5);
      }
      var Je2 = class {
        constructor(e5) {
          if (typeof Buffer > `u`) throw Error(`Missing Buffer dependency`);
          this.stream = qe2(e5), this.buffer = null, this.cursor = 0, this.undoCursor = 0, this.started = false, this._ended = false, this._discardedBytes = 0;
        }
        eof() {
          return this._ended && this.cursor === this.buffer.length;
        }
        tell() {
          return this._discardedBytes + this.cursor;
        }
        async byte() {
          if (!this.eof() && (this.started || await this._init(), !(this.cursor === this.buffer.length && (await this._loadnext(), this._ended)))) return this._moveCursor(1), this.buffer[this.undoCursor];
        }
        async chunk() {
          if (!this.eof() && (this.started || await this._init(), !(this.cursor === this.buffer.length && (await this._loadnext(), this._ended)))) return this._moveCursor(this.buffer.length), this.buffer.slice(this.undoCursor, this.cursor);
        }
        async read(e5) {
          if (!this.eof()) return this.started || await this._init(), this.cursor + e5 > this.buffer.length && (this._trim(), await this._accumulate(e5)), this._moveCursor(e5), this.buffer.slice(this.undoCursor, this.cursor);
        }
        async skip(e5) {
          this.eof() || (this.started || await this._init(), this.cursor + e5 > this.buffer.length && (this._trim(), await this._accumulate(e5)), this._moveCursor(e5));
        }
        async undo() {
          this.cursor = this.undoCursor;
        }
        async _next() {
          this.started = true;
          let { done: e5, value: t5 } = await this.stream.next();
          return e5 && (this._ended = true, !t5) ? Buffer.alloc(0) : (t5 &&= Buffer.from(t5), t5);
        }
        _trim() {
          this.buffer = this.buffer.slice(this.undoCursor), this.cursor -= this.undoCursor, this._discardedBytes += this.undoCursor, this.undoCursor = 0;
        }
        _moveCursor(e5) {
          this.undoCursor = this.cursor, this.cursor += e5, this.cursor > this.buffer.length && (this.cursor = this.buffer.length);
        }
        async _accumulate(e5) {
          if (this._ended) return;
          let t5 = [this.buffer];
          for (; this.cursor + e5 > Ye2(t5); ) {
            let e6 = await this._next();
            if (this._ended) break;
            t5.push(e6);
          }
          this.buffer = Buffer.concat(t5);
        }
        async _loadnext() {
          this._discardedBytes += this.buffer.length, this.undoCursor = 0, this.cursor = 0, this.buffer = await this._next();
        }
        async _init() {
          this.buffer = await this._next();
        }
      };
      function Ye2(e5) {
        return e5.reduce((e6, t5) => e6 + t5.length, 0);
      }
      async function Xe2(e5, t5) {
        let n4 = new Je2(e5), r4 = await n4.read(4);
        if (r4 = r4.toString(`utf8`), r4 !== `PACK`) throw new p3(`Invalid PACK header '${r4}'`);
        let i5 = await n4.read(4);
        if (i5 = i5.readUInt32BE(0), i5 !== 2) throw new p3(`Invalid packfile version: ${i5}`);
        let a5 = await n4.read(4);
        if (a5 = a5.readUInt32BE(0), !(a5 < 1)) for (; !n4.eof() && a5--; ) {
          let e6 = n4.tell(), { type: r5, length: i6, ofs: s4, reference: c5 } = await Ze2(n4), l5 = new o3.Inflate();
          for (; !l5.result; ) {
            let o4 = await n4.chunk();
            if (!o4) break;
            if (l5.push(o4, false), l5.err) throw new p3(`Pako error: ${l5.msg}`);
            if (l5.result) {
              if (l5.result.length !== i6) throw new p3(`Inflated object size is different from that stated in packfile.`);
              await n4.undo(), await n4.read(o4.length - l5.strm.avail_in);
              let u5 = n4.tell();
              await t5({ data: l5.result, type: r5, num: a5, offset: e6, end: u5, reference: c5, ofs: s4 });
            }
          }
        }
      }
      async function Ze2(e5) {
        let t5 = await e5.byte(), n4 = t5 >> 4 & 7, r4 = t5 & 15;
        if (t5 & 128) {
          let n5 = 4;
          do
            t5 = await e5.byte(), r4 |= (t5 & 127) << n5, n5 += 7;
          while (t5 & 128);
        }
        let i5, a5;
        if (n4 === 6) {
          let n5 = 0;
          i5 = 0;
          let r5 = [];
          do
            t5 = await e5.byte(), i5 |= (t5 & 127) << n5, n5 += 7, r5.push(t5);
          while (t5 & 128);
          a5 = Buffer.from(r5);
        }
        return n4 === 7 && (a5 = await e5.read(20)), { type: n4, length: r4, ofs: i5, reference: a5 };
      }
      let Qe3 = false;
      async function $e3(e5) {
        return Qe3 === null && (Qe3 = tt3()), Qe3 ? et3(e5) : o3.inflate(e5);
      }
      async function et3(e5) {
        let t5 = new DecompressionStream(`deflate`), n4 = new Blob([e5]).stream().pipeThrough(t5);
        return new Uint8Array(await new Response(n4).arrayBuffer());
      }
      function tt3() {
        try {
          if (new DecompressionStream(`deflate`)) return true;
        } catch {
        }
        return false;
      }
      function nt3(e5) {
        let t5 = [], n4 = 0, r4 = 0;
        do {
          n4 = e5.readUInt8();
          let i5 = n4 & 127;
          t5.push(i5), r4 = n4 & 128;
        } while (r4);
        return t5.reduce((e6, t6) => e6 + 1 << 7 | t6, -1);
      }
      function rt3(e5, t5) {
        let n4 = t5, r4 = 4, i5 = null;
        do
          i5 = e5.readUInt8(), n4 |= (i5 & 127) << r4, r4 += 7;
        while (i5 & 128);
        return n4;
      }
      var it3 = class e5 {
        constructor(e6) {
          Object.assign(this, e6), this.offsetCache = {};
        }
        static async fromIdx({ idx: t5, getExternalRefDelta: n4 }) {
          let r4 = new h5(t5);
          if (r4.slice(4).toString(`hex`) !== `ff744f63`) return;
          let i5 = r4.readUInt32BE();
          if (i5 !== 2) throw new p3(`Unable to read version ${i5} packfile IDX. (Only version 2 supported)`);
          if (t5.byteLength > 2048 * 1024 * 1024) throw new p3(`To keep implementation simple, I haven't implemented the layer 5 feature needed to support packfiles > 2GB in size.`);
          r4.seek(r4.tell() + 1020);
          let a5 = r4.readUInt32BE(), o4 = [];
          for (let e6 = 0; e6 < a5; e6++) o4[e6] = r4.slice(20).toString(`hex`);
          r4.seek(r4.tell() + 4 * a5);
          let s4 = /* @__PURE__ */ new Map();
          for (let e6 = 0; e6 < a5; e6++) s4.set(o4[e6], r4.readUInt32BE());
          return new e5({ hashes: o4, crcs: {}, offsets: s4, packfileSha: r4.slice(20).toString(`hex`), getExternalRefDelta: n4 });
        }
        static async fromPack({ pack: t5, getExternalRefDelta: n4, onProgress: r4 }) {
          let i5 = { 1: `commit`, 2: `tree`, 3: `blob`, 4: `tag`, 6: `ofs-delta`, 7: `ref-delta` }, o4 = {}, s4 = t5.slice(-20).toString(`hex`), c5 = [], l5 = {}, u5 = /* @__PURE__ */ new Map(), d4 = null, f4 = null;
          await Xe2([t5], async ({ data: e6, type: t6, reference: n5, offset: a5, num: s5 }) => {
            d4 === null && (d4 = s5);
            let c6 = Math.floor((d4 - s5) * 100 / d4);
            c6 !== f4 && r4 && await r4({ phase: `Receiving objects`, loaded: d4 - s5, total: d4 }), f4 = c6, t6 = i5[t6], ([`commit`, `tree`, `blob`, `tag`].includes(t6) || t6 === `ofs-delta` || t6 === `ref-delta`) && (o4[a5] = { type: t6, offset: a5 });
          });
          let p4 = Object.keys(o4).map(Number);
          for (let [e6, n5] of p4.entries()) {
            let r5 = e6 + 1 === p4.length ? t5.byteLength - 20 : p4[e6 + 1], i6 = o4[n5], s5 = a4.buf(t5.slice(n5, r5)) >>> 0;
            i6.end = r5, i6.crc = s5;
          }
          let m5 = new e5({ pack: Promise.resolve(t5), packfileSha: s4, crcs: l5, hashes: c5, offsets: u5, getExternalRefDelta: n4 });
          f4 = null;
          let h6 = 0, g5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (let e6 in o4) {
            e6 = Number(e6);
            let t6 = Math.floor(h6 * 100 / d4);
            t6 !== f4 && r4 && await r4({ phase: `Resolving deltas`, loaded: h6, total: d4 }), h6++, f4 = t6;
            let n5 = o4[e6];
            if (!n5.oid) try {
              m5.readDepth = 0, m5.externalReadDepth = 0;
              let { type: t7, object: r5 } = await m5.readSlice({ start: e6 });
              g5[m5.readDepth] += 1;
              let i6 = await w4(Be3.wrap({ type: t7, object: r5 }));
              n5.oid = i6, c5.push(i6), u5.set(i6, e6), l5[i6] = n5.crc;
            } catch {
              continue;
            }
          }
          return c5.sort(), m5;
        }
        async toBuffer() {
          let e6 = [], t5 = (t6, n5) => {
            e6.push(Buffer.from(t6, n5));
          };
          t5(`ff744f63`, `hex`), t5(`00000002`, `hex`);
          let n4 = new h5(Buffer.alloc(256 * 4));
          for (let e7 = 0; e7 < 256; e7++) {
            let t6 = 0;
            for (let n5 of this.hashes) parseInt(n5.slice(0, 2), 16) <= e7 && t6++;
            n4.writeUInt32BE(t6);
          }
          e6.push(n4.buffer);
          for (let e7 of this.hashes) t5(e7, `hex`);
          let r4 = new h5(Buffer.alloc(this.hashes.length * 4));
          for (let e7 of this.hashes) r4.writeUInt32BE(this.crcs[e7]);
          e6.push(r4.buffer);
          let i5 = new h5(Buffer.alloc(this.hashes.length * 4));
          for (let e7 of this.hashes) i5.writeUInt32BE(this.offsets.get(e7));
          e6.push(i5.buffer), t5(this.packfileSha, `hex`);
          let a5 = Buffer.concat(e6), o4 = await w4(a5), s4 = Buffer.alloc(20);
          return s4.write(o4, `hex`), Buffer.concat([a5, s4]);
        }
        async load({ pack: e6 }) {
          this.pack = e6;
        }
        async unload() {
          this.pack = null;
        }
        async read({ oid: e6 }) {
          if (!this.offsets.get(e6)) {
            if (this.getExternalRefDelta) return this.externalReadDepth++, this.getExternalRefDelta(e6);
            throw new p3(`Could not read object ${e6} from packfile`);
          }
          let t5 = this.offsets.get(e6);
          return this.readSlice({ start: t5 });
        }
        async readSlice({ start: e6 }) {
          if (this.offsetCache[e6]) return Object.assign({}, this.offsetCache[e6]);
          this.readDepth++;
          let t5 = { 16: `commit`, 32: `tree`, 48: `blob`, 64: `tag`, 96: `ofs_delta`, 112: `ref_delta` }, n4 = await this.pack;
          if (!n4) throw new p3(`Could not read packfile data. The packfile may be missing, corrupted, or too large to read into memory.`);
          let r4 = n4.slice(e6), i5 = new h5(r4), a5 = i5.readUInt8(), o4 = a5 & 112, s4 = t5[o4];
          if (s4 === void 0) throw new p3(`Unrecognized type: 0b` + o4.toString(2));
          let c5 = a5 & 15, l5 = c5;
          a5 & 128 && (l5 = rt3(i5, c5));
          let u5 = null, d4 = null;
          if (s4 === `ofs_delta`) {
            let t6 = e6 - nt3(i5);
            ({ object: u5, type: s4 } = await this.readSlice({ start: t6 }));
          }
          if (s4 === `ref_delta`) {
            let e7 = i5.slice(20).toString(`hex`);
            ({ object: u5, type: s4 } = await this.read({ oid: e7 }));
          }
          let f4 = r4.slice(i5.tell());
          if (d4 = Buffer.from(await $e3(f4)), d4.byteLength !== l5) throw new p3(`Packfile told us object would have length ${l5} but it had length ${d4.byteLength}`);
          return u5 && (d4 = Buffer.from(He3(d4, u5))), this.readDepth > 3 && (this.offsetCache[e6] = { type: s4, object: d4 }), { type: s4, format: `content`, object: d4 };
        }
      };
      let at3 = /* @__PURE__ */ Symbol(`PackfileCache`);
      async function ot3({ fs: e5, filename: t5, getExternalRefDelta: n4, emitter: r4, emitterPrefix: i5 }) {
        let a5 = await e5.read(t5);
        return it3.fromIdx({ idx: a5, getExternalRefDelta: n4 });
      }
      function st3({ fs: e5, cache: t5, filename: n4, getExternalRefDelta: r4, emitter: i5, emitterPrefix: a5 }) {
        t5[at3] || (t5[at3] = /* @__PURE__ */ new Map());
        let o4 = t5[at3].get(n4);
        return o4 || (o4 = ot3({ fs: e5, filename: n4, getExternalRefDelta: r4, emitter: i5, emitterPrefix: a5 }), t5[at3].set(n4, o4)), o4;
      }
      let ct3 = 8 * 1024 * 1024;
      async function lt3(e5, { start: t5 = 0, end: n4 = e5.length } = {}) {
        let r4 = s3.createHash(`sha1`);
        for (let i5 = t5; i5 < n4; i5 += ct3) r4.update(e5.subarray(i5, Math.min(i5 + ct3, n4)));
        return r4.digest(`hex`);
      }
      async function ut3({ fs: e5, cache: t5, gitdir: n4, oid: r4, format: i5 = `content`, getExternalRefDelta: a5 }) {
        let o4 = await e5.readdir(ce3(n4, `objects/pack`));
        o4 = o4.filter((e6) => e6.endsWith(`.idx`));
        for (let i6 of o4) {
          let o5 = `${n4}/objects/pack/${i6}`, s4 = await st3({ fs: e5, cache: t5, filename: o5, getExternalRefDelta: a5 });
          if (s4.error) throw new p3(s4.error);
          if (s4.offsets.has(r4)) {
            let t6 = o5.replace(/idx$/, `pack`);
            s4.pack ||= e5.read(t6);
            let n5 = await s4.pack;
            if (!n5) throw s4.pack = null, new p3(`Could not read packfile at ${t6}. The file may be missing, corrupted, or too large to read into memory.`);
            if (!s4._checksumVerified) {
              let e6 = s4.packfileSha, t7 = n5.subarray(-20), r5 = Array.from(t7).map((e7) => e7.toString(16).padStart(2, `0`)).join(``);
              if (r5 !== e6) throw new p3(`Packfile trailer mismatch: expected ${e6}, got ${r5}. The packfile may be corrupted.`);
              let i7 = await lt3(n5, { start: 0, end: n5.length - 20 });
              if (i7 !== e6) throw new p3(`Packfile payload corrupted: calculated ${i7} but expected ${e6}. The packfile may have been tampered with.`);
              s4._checksumVerified = true;
            }
            let c5 = await s4.read({ oid: r4, getExternalRefDelta: a5 });
            return c5.format = `content`, c5.source = `objects/pack/${i6.replace(/idx$/, `pack`)}`, c5;
          }
        }
        return null;
      }
      async function dt3({ fs: e5, cache: t5, gitdir: n4, oid: r4, format: i5 = `content` }) {
        let a5 = (r5) => dt3({ fs: e5, cache: t5, gitdir: n4, oid: r5 }), o4;
        if (r4 === `4b825dc642cb6eb9a060e54bf8d69288fbee4904` && (o4 = { format: `wrapped`, object: Buffer.from(`tree 0\0`) }), o4 ||= await Ve3({ fs: e5, gitdir: n4, oid: r4 }), !o4) {
          if (o4 = await ut3({ fs: e5, cache: t5, gitdir: n4, oid: r4, getExternalRefDelta: a5 }), !o4) throw new H3(r4);
          return o4;
        }
        if (i5 === `deflated` || (o4.format === `deflated` && (o4.object = Buffer.from(await $e3(o4.object)), o4.format = `wrapped`), i5 === `wrapped`)) return o4;
        let s4 = await w4(o4.object);
        if (s4 !== r4) throw new p3(`SHA check failed! Expected ${r4}, computed ${s4}`);
        let { object: c5, type: l5 } = Be3.unwrap(o4.object);
        if (o4.type = l5, o4.object = c5, o4.format = `content`, i5 === `content`) return o4;
        throw new p3(`invalid requested format "${i5}"`);
      }
      var ft3 = class e5 extends d3 {
        constructor(t5, n4, r4 = true) {
          super(`Failed to create ${t5} at ${n4} because it already exists.${r4 ? ` (Hint: use 'force: true' parameter to overwrite existing ${t5}.)` : ``}`), this.code = this.name = e5.code, this.data = { noun: t5, where: n4, canForce: r4 };
        }
      };
      ft3.code = `AlreadyExistsError`;
      var pt3 = class e5 extends d3 {
        constructor(t5, n4, r4) {
          super(`Found multiple ${t5} matching "${n4}" (${r4.join(`, `)}). Use a longer abbreviation length to disambiguate them.`), this.code = this.name = e5.code, this.data = { nouns: t5, short: n4, matches: r4 };
        }
      };
      pt3.code = `AmbiguousError`;
      var mt3 = class e5 extends d3 {
        constructor(t5) {
          super(`Your local changes to the following files would be overwritten by checkout: ${t5.join(`, `)}`), this.code = this.name = e5.code, this.data = { filepaths: t5 };
        }
      };
      mt3.code = `CheckoutConflictError`;
      var ht3 = class e5 extends d3 {
        constructor(t5, n4) {
          super(`Cannot cherry-pick merge commit ${t5}. Merge commits have ${n4} parents and require specifying which parent to use as the base.`), this.code = this.name = e5.code, this.data = { oid: t5, parentCount: n4 };
        }
      };
      ht3.code = `CherryPickMergeCommitError`;
      var gt3 = class e5 extends d3 {
        constructor(t5) {
          super(`Cannot cherry-pick root commit ${t5}. Root commits have no parents.`), this.code = this.name = e5.code, this.data = { oid: t5 };
        }
      };
      gt3.code = `CherryPickRootCommitError`;
      var _t3 = class e5 extends d3 {
        constructor(t5, n4) {
          super(`Failed to checkout "${t5}" because commit ${n4} is not available locally. Do a git fetch to make the branch available locally.`), this.code = this.name = e5.code, this.data = { ref: t5, oid: n4 };
        }
      };
      _t3.code = `CommitNotFetchedError`;
      var vt3 = class e5 extends d3 {
        constructor() {
          super(`Empty response from git server.`), this.code = this.name = e5.code, this.data = {};
        }
      };
      vt3.code = `EmptyServerResponseError`;
      var yt3 = class e5 extends d3 {
        constructor() {
          super(`A simple fast-forward merge was not possible.`), this.code = this.name = e5.code, this.data = {};
        }
      };
      yt3.code = `FastForwardError`;
      var bt3 = class e5 extends d3 {
        constructor(t5, n4) {
          super(`One or more branches were not updated: ${t5}`), this.code = this.name = e5.code, this.data = { prettyDetails: t5, result: n4 };
        }
      };
      bt3.code = `GitPushError`;
      var xt3 = class e5 extends d3 {
        constructor(t5, n4, r4) {
          super(`HTTP Error: ${t5} ${n4}`), this.code = this.name = e5.code, this.data = { statusCode: t5, statusMessage: n4, response: r4 };
        }
      };
      xt3.code = `HttpError`;
      var St3 = class e5 extends d3 {
        constructor(t5) {
          let n4 = `invalid filepath`;
          t5 === `leading-slash` || t5 === `trailing-slash` ? n4 = `"filepath" parameter should not include leading or trailing directory separators because these can cause problems on some platforms.` : t5 === `directory` && (n4 = `"filepath" should not be a directory.`), super(n4), this.code = this.name = e5.code, this.data = { reason: t5 };
        }
      };
      St3.code = `InvalidFilepathError`;
      var Ct3 = class e5 extends d3 {
        constructor(t5, n4) {
          super(`"${t5}" would be an invalid git reference. (Hint: a valid alternative would be "${n4}".)`), this.code = this.name = e5.code, this.data = { ref: t5, suggestion: n4 };
        }
      };
      Ct3.code = `InvalidRefNameError`;
      var wt3 = class e5 extends d3 {
        constructor(t5) {
          super(`Maximum search depth of ${t5} exceeded.`), this.code = this.name = e5.code, this.data = { depth: t5 };
        }
      };
      wt3.code = `MaxDepthError`;
      var Tt3 = class e5 extends d3 {
        constructor() {
          super(`Merges with conflicts are not supported yet.`), this.code = this.name = e5.code, this.data = {};
        }
      };
      Tt3.code = `MergeNotSupportedError`;
      var Et3 = class e5 extends d3 {
        constructor(t5, n4, r4, i5) {
          super(`Automatic merge failed with one or more merge conflicts in the following files: ${t5.toString()}. Fix conflicts then commit the result.`), this.code = this.name = e5.code, this.data = { filepaths: t5, bothModified: n4, deleteByUs: r4, deleteByTheirs: i5 };
        }
      };
      Et3.code = `MergeConflictError`;
      var Dt3 = class e5 extends d3 {
        constructor(t5) {
          super(`No name was provided for ${t5} in the argument or in the .git/config file.`), this.code = this.name = e5.code, this.data = { role: t5 };
        }
      };
      Dt3.code = `MissingNameError`;
      var Ot3 = class e5 extends d3 {
        constructor(t5) {
          super(`The function requires a "${t5}" parameter but none was provided.`), this.code = this.name = e5.code, this.data = { parameter: t5 };
        }
      };
      Ot3.code = `MissingParameterError`;
      var kt3 = class e5 extends d3 {
        constructor(t5) {
          super(`There are multiple errors that were thrown by the method. Please refer to the "errors" property to see more`), this.code = this.name = e5.code, this.data = { errors: t5 }, this.errors = t5;
        }
      };
      kt3.code = `MultipleGitError`;
      var At3 = class e5 extends d3 {
        constructor(t5, n4) {
          super(`Expected "${t5}" but received "${n4}".`), this.code = this.name = e5.code, this.data = { expected: t5, actual: n4 };
        }
      };
      At3.code = `ParseError`;
      var jt3 = class e5 extends d3 {
        constructor(t5) {
          let n4 = ``;
          t5 === `not-fast-forward` ? n4 = ` because it was not a simple fast-forward` : t5 === `tag-exists` && (n4 = ` because tag already exists`), super(`Push rejected${n4}. Use "force: true" to override.`), this.code = this.name = e5.code, this.data = { reason: t5 };
        }
      };
      jt3.code = `PushRejectedError`;
      var Mt3 = class e5 extends d3 {
        constructor(t5, n4) {
          super(`Remote does not support the "${t5}" so the "${n4}" parameter cannot be used.`), this.code = this.name = e5.code, this.data = { capability: t5, parameter: n4 };
        }
      };
      Mt3.code = `RemoteCapabilityError`;
      var Nt3 = class e5 extends d3 {
        constructor(t5, n4) {
          super(`Remote did not reply using the "smart" HTTP protocol. Expected "001e# service=git-upload-pack" but received: ${t5}`), this.code = this.name = e5.code, this.data = { preview: t5, response: n4 };
        }
      };
      Nt3.code = `SmartHttpError`;
      var Pt3 = class e5 extends d3 {
        constructor(t5, n4, r4) {
          super(`Git remote "${t5}" uses an unrecognized transport protocol: "${n4}"`), this.code = this.name = e5.code, this.data = { url: t5, transport: n4, suggestion: r4 };
        }
      };
      Pt3.code = `UnknownTransportError`;
      var Ft3 = class e5 extends d3 {
        constructor(t5) {
          super(`Cannot parse remote URL: "${t5}"`), this.code = this.name = e5.code, this.data = { url: t5 };
        }
      };
      Ft3.code = `UrlParseError`;
      var It3 = class e5 extends d3 {
        constructor() {
          super(`The operation was canceled.`), this.code = this.name = e5.code, this.data = {};
        }
      };
      It3.code = `UserCanceledError`;
      var Lt3 = class e5 extends d3 {
        constructor(t5) {
          super(`Could not merge index: Entry for '${t5}' is not up to date. Either reset the index entry to HEAD, or stage your unstaged changes.`), this.code = this.name = e5.code, this.data = { filepath: t5 };
        }
      };
      Lt3.code = `IndexResetError`;
      var Rt3 = class e5 extends d3 {
        constructor(t5) {
          super(`"${t5}" does not point to any commit. You're maybe working on a repository with no commits yet. `), this.code = this.name = e5.code, this.data = { ref: t5 };
        }
      };
      Rt3.code = `NoCommitError`;
      function zt3({ name: e5, email: t5, timestamp: n4, timezoneOffset: r4 }) {
        return r4 = Bt3(r4), `${e5} <${t5}> ${n4} ${r4}`;
      }
      function Bt3(e5) {
        let t5 = Vt3(Ht3(e5));
        e5 = Math.abs(e5);
        let n4 = Math.floor(e5 / 60);
        e5 -= n4 * 60;
        let r4 = String(n4), i5 = String(e5);
        return r4.length < 2 && (r4 = `0` + r4), i5.length < 2 && (i5 = `0` + i5), (t5 === -1 ? `-` : `+`) + r4 + i5;
      }
      function Vt3(e5) {
        return Math.sign(e5) || (Object.is(e5, -0) ? -1 : 1);
      }
      function Ht3(e5) {
        return e5 === 0 ? e5 : -e5;
      }
      function Ut3(e5) {
        return e5 = e5.replace(/\r/g, ``), e5 = e5.replace(/^\n+/, ``), e5 = e5.replace(/\n+$/, ``) + `
`, e5;
      }
      function Wt3(e5) {
        let [, t5, n4, r4, i5] = e5.match(/^(.*) <(.*)> (.*) (.*)$/);
        return { name: t5, email: n4, timestamp: Number(r4), timezoneOffset: Gt3(i5) };
      }
      function Gt3(e5) {
        let [, t5, n4, r4] = e5.match(/(\+|-)(\d\d)(\d\d)/);
        return r4 = (t5 === `+` ? 1 : -1) * (Number(n4) * 60 + Number(r4)), Kt3(r4);
      }
      function Kt3(e5) {
        return e5 === 0 ? e5 : -e5;
      }
      var qt2 = class e5 {
        constructor(t5) {
          if (typeof t5 == `string`) this._tag = t5;
          else if (Buffer.isBuffer(t5)) this._tag = t5.toString(`utf8`);
          else if (typeof t5 == `object`) this._tag = e5.render(t5);
          else throw new p3(`invalid type passed to GitAnnotatedTag constructor`);
        }
        static from(t5) {
          return new e5(t5);
        }
        static render(e6) {
          return `object ${e6.object}
type ${e6.type}
tag ${e6.tag}
tagger ${zt3(e6.tagger)}

${e6.message}
${e6.gpgsig ? e6.gpgsig : ``}`;
        }
        justHeaders() {
          return this._tag.slice(0, this._tag.indexOf(`

`));
        }
        message() {
          let e6 = this.withoutSignature();
          return e6.slice(e6.indexOf(`

`) + 2);
        }
        parse() {
          return Object.assign(this.headers(), { message: this.message(), gpgsig: this.gpgsig() });
        }
        render() {
          return this._tag;
        }
        headers() {
          let e6 = this.justHeaders().split(`
`), t5 = [];
          for (let n5 of e6) n5[0] === ` ` ? t5[t5.length - 1] += `
` + n5.slice(1) : t5.push(n5);
          let n4 = {};
          for (let e7 of t5) {
            let t6 = e7.slice(0, e7.indexOf(` `)), r4 = e7.slice(e7.indexOf(` `) + 1);
            Array.isArray(n4[t6]) ? n4[t6].push(r4) : n4[t6] = r4;
          }
          return n4.tagger &&= Wt3(n4.tagger), n4.committer &&= Wt3(n4.committer), n4;
        }
        withoutSignature() {
          let e6 = Ut3(this._tag);
          return e6.indexOf(`
-----BEGIN PGP SIGNATURE-----`) === -1 ? e6 : e6.slice(0, e6.lastIndexOf(`
-----BEGIN PGP SIGNATURE-----`));
        }
        gpgsig() {
          if (this._tag.indexOf(`
-----BEGIN PGP SIGNATURE-----`) !== -1) return Ut3(this._tag.slice(this._tag.indexOf(`-----BEGIN PGP SIGNATURE-----`), this._tag.indexOf(`-----END PGP SIGNATURE-----`) + 27));
        }
        payload() {
          return this.withoutSignature() + `
`;
        }
        toObject() {
          return Buffer.from(this._tag, `utf8`);
        }
        static async sign(t5, n4, r4) {
          let i5 = t5.payload(), { signature: a5 } = await n4({ payload: i5, secretKey: r4 });
          a5 = Ut3(a5);
          let o4 = i5 + a5;
          return e5.from(o4);
        }
      };
      function Jt2(e5) {
        return e5.trim().split(`
`).map((e6) => ` ` + e6).join(`
`) + `
`;
      }
      function Yt2(e5) {
        return e5.split(`
`).map((e6) => e6.replace(/^ /, ``)).join(`
`);
      }
      var Xt2 = class e5 {
        constructor(t5) {
          if (typeof t5 == `string`) this._commit = t5;
          else if (Buffer.isBuffer(t5)) this._commit = t5.toString(`utf8`);
          else if (typeof t5 == `object`) this._commit = e5.render(t5);
          else throw new p3(`invalid type passed to GitCommit constructor`);
        }
        static fromPayloadSignature({ payload: t5, signature: n4 }) {
          let r4 = e5.justHeaders(t5), i5 = e5.justMessage(t5);
          return new e5(Ut3(r4 + `
gpgsig` + Jt2(n4) + `
` + i5));
        }
        static from(t5) {
          return new e5(t5);
        }
        toObject() {
          return Buffer.from(this._commit, `utf8`);
        }
        headers() {
          return this.parseHeaders();
        }
        message() {
          return e5.justMessage(this._commit);
        }
        parse() {
          return Object.assign({ message: this.message() }, this.headers());
        }
        static justMessage(e6) {
          return Ut3(e6.slice(e6.indexOf(`

`) + 2));
        }
        static justHeaders(e6) {
          return e6.slice(0, e6.indexOf(`

`));
        }
        parseHeaders() {
          let t5 = e5.justHeaders(this._commit).split(`
`), n4 = [];
          for (let e6 of t5) e6[0] === ` ` ? n4[n4.length - 1] += `
` + e6.slice(1) : n4.push(e6);
          let r4 = { parent: [] };
          for (let e6 of n4) {
            let t6 = e6.slice(0, e6.indexOf(` `)), n5 = e6.slice(e6.indexOf(` `) + 1);
            Array.isArray(r4[t6]) ? r4[t6].push(n5) : r4[t6] = n5;
          }
          return r4.author &&= Wt3(r4.author), r4.committer &&= Wt3(r4.committer), r4;
        }
        static renderHeaders(e6) {
          let t5 = ``;
          if (e6.tree ? t5 += `tree ${e6.tree}
` : t5 += `tree 4b825dc642cb6eb9a060e54bf8d69288fbee4904
`, e6.parent) {
            if (e6.parent.length === void 0) throw new p3(`commit 'parent' property should be an array`);
            for (let n5 of e6.parent) t5 += `parent ${n5}
`;
          }
          let n4 = e6.author;
          t5 += `author ${zt3(n4)}
`;
          let r4 = e6.committer || e6.author;
          return t5 += `committer ${zt3(r4)}
`, e6.gpgsig && (t5 += `gpgsig` + Jt2(e6.gpgsig)), t5;
        }
        static render(t5) {
          return e5.renderHeaders(t5) + `
` + Ut3(t5.message);
        }
        render() {
          return this._commit;
        }
        withoutSignature() {
          let e6 = Ut3(this._commit);
          if (e6.indexOf(`
gpgsig`) === -1) return e6;
          let t5 = e6.slice(0, e6.indexOf(`
gpgsig`)), n4 = e6.slice(e6.indexOf(`-----END PGP SIGNATURE-----
`) + 28);
          return Ut3(t5 + `
` + n4);
        }
        isolateSignature() {
          return Yt2(this._commit.slice(this._commit.indexOf(`-----BEGIN PGP SIGNATURE-----`), this._commit.indexOf(`-----END PGP SIGNATURE-----`) + 27));
        }
        static async sign(t5, n4, r4) {
          let i5 = t5.withoutSignature(), a5 = e5.justMessage(t5._commit), { signature: o4 } = await n4({ payload: i5, secretKey: r4 });
          o4 = Ut3(o4);
          let s4 = e5.justHeaders(t5._commit) + `
gpgsig` + Jt2(o4) + `
` + a5;
          return e5.from(s4);
        }
      };
      async function Zt2({ fs: e5, cache: t5, gitdir: n4, oid: r4 }) {
        if (r4 === `4b825dc642cb6eb9a060e54bf8d69288fbee4904`) return { tree: ze3.from([]), oid: r4 };
        let { type: i5, object: a5 } = await dt3({ fs: e5, cache: t5, gitdir: n4, oid: r4 });
        if (i5 === `tag`) return r4 = qt2.from(a5).parse().object, Zt2({ fs: e5, cache: t5, gitdir: n4, oid: r4 });
        if (i5 === `commit`) return r4 = Xt2.from(a5).parse().tree, Zt2({ fs: e5, cache: t5, gitdir: n4, oid: r4 });
        if (i5 !== `tree`) throw new re3(r4, i5, `tree`);
        return { tree: ze3.from(a5), oid: r4 };
      }
      var Qt2 = class {
        constructor({ fs: e5, gitdir: t5, ref: n4, cache: r4 }) {
          this.fs = e5, this.cache = r4, this.gitdir = t5, this.mapPromise = (async () => {
            let r5 = /* @__PURE__ */ new Map(), i6;
            try {
              i6 = await De3.resolve({ fs: e5, gitdir: t5, ref: n4 });
            } catch (e6) {
              e6 instanceof H3 && (i6 = `4b825dc642cb6eb9a060e54bf8d69288fbee4904`);
            }
            let a5 = await Zt2({ fs: e5, cache: this.cache, gitdir: t5, oid: i6 });
            return a5.type = `tree`, a5.mode = `40000`, r5.set(`.`, a5), r5;
          })();
          let i5 = this;
          this.ConstructEntry = class {
            constructor(e6) {
              this._fullpath = e6, this._type = false, this._mode = false, this._stat = false, this._content = false, this._oid = false;
            }
            async type() {
              return i5.type(this);
            }
            async mode() {
              return i5.mode(this);
            }
            async stat() {
              return i5.stat(this);
            }
            async content() {
              return i5.content(this);
            }
            async oid() {
              return i5.oid(this);
            }
          };
        }
        async readdir(e5) {
          let t5 = e5._fullpath, { fs: n4, cache: r4, gitdir: i5 } = this, a5 = await this.mapPromise, o4 = a5.get(t5);
          if (!o4) throw Error(`No obj for ${t5}`);
          let s4 = o4.oid;
          if (!s4) throw Error(`No oid for obj ${JSON.stringify(o4)}`);
          if (o4.type !== `tree`) return null;
          let { type: c5, object: l5 } = await dt3({ fs: n4, cache: r4, gitdir: i5, oid: s4 });
          if (c5 !== o4.type) throw new re3(s4, c5, o4.type);
          let u5 = ze3.from(l5);
          for (let e6 of u5) a5.set(ce3(t5, e6.path), e6);
          return u5.entries().map((e6) => ce3(t5, e6.path));
        }
        async type(e5) {
          if (e5._type === false) {
            let { type: t5 } = (await this.mapPromise).get(e5._fullpath);
            e5._type = t5;
          }
          return e5._type;
        }
        async mode(e5) {
          if (e5._mode === false) {
            let { mode: t5 } = (await this.mapPromise).get(e5._fullpath);
            e5._mode = v4(parseInt(t5, 8));
          }
          return e5._mode;
        }
        async stat(e5) {
        }
        async content(e5) {
          if (e5._content === false) {
            let t5 = await this.mapPromise, { fs: n4, cache: r4, gitdir: i5 } = this, a5 = t5.get(e5._fullpath).oid, { type: o4, object: s4 } = await dt3({ fs: n4, cache: r4, gitdir: i5, oid: a5 });
            o4 === `blob` ? e5._content = new Uint8Array(s4) : e5._content = void 0;
          }
          return e5._content;
        }
        async oid(e5) {
          return e5._oid === false && (e5._oid = (await this.mapPromise).get(e5._fullpath).oid), e5._oid;
        }
      };
      function $t2({ ref: e5 = `HEAD` } = {}) {
        let t5 = /* @__PURE__ */ Object.create(null);
        return Object.defineProperty(t5, B4, { value: function({ fs: t6, gitdir: n4, cache: r4 }) {
          return new Qt2({ fs: t6, gitdir: n4, ref: e5, cache: r4 });
        } }), Object.freeze(t5), t5;
      }
      var en2 = class {
        constructor({ fs: e5, dir: t5, gitdir: n4, cache: r4, refresh: i5 = true }) {
          this.fs = e5, this.cache = r4, this.dir = t5, this.gitdir = n4, this.refresh = i5, this.config = null;
          let a5 = this;
          this.ConstructEntry = class {
            constructor(e6) {
              this._fullpath = e6, this._type = false, this._mode = false, this._stat = false, this._content = false, this._oid = false;
            }
            async type() {
              return a5.type(this);
            }
            async mode() {
              return a5.mode(this);
            }
            async stat() {
              return a5.stat(this);
            }
            async content() {
              return a5.content(this);
            }
            async oid() {
              return a5.oid(this);
            }
          };
        }
        async readdir(e5) {
          let t5 = e5._fullpath, { fs: n4, dir: r4 } = this, i5 = await n4.readdir(ce3(r4, t5));
          return i5 === null ? null : i5.map((e6) => ce3(t5, e6));
        }
        async type(e5) {
          return e5._type === false && await e5.stat(), e5._type;
        }
        async mode(e5) {
          return e5._mode === false && await e5.stat(), e5._mode;
        }
        async stat(e5) {
          if (e5._stat === false) {
            let { fs: t5, dir: n4 } = this, r4 = await t5.lstat(`${n4}/${e5._fullpath}`);
            if (!r4) throw Error(`ENOENT: no such file or directory, lstat '${e5._fullpath}'`);
            let i5 = r4.isDirectory() ? `tree` : `blob`;
            i5 === `blob` && !r4.isFile() && !r4.isSymbolicLink() && (i5 = `special`), e5._type = i5, r4 = x4(r4), e5._mode = r4.mode, r4.size === -1 && e5._actualSize && (r4.size = e5._actualSize), e5._stat = r4;
          }
          return e5._stat;
        }
        async content(e5) {
          if (e5._content === false) {
            let { fs: t5, dir: n4, gitdir: r4 } = this;
            if (await e5.type() === `tree`) e5._content = void 0;
            else {
              let i5;
              if (await e5.mode() >> 12 == 10) i5 = await t5.readlink(`${n4}/${e5._fullpath}`);
              else {
                let a5 = await (await this._getGitConfig(t5, r4)).get(`core.autocrlf`);
                i5 = await t5.read(`${n4}/${e5._fullpath}`, { autocrlf: a5 });
              }
              e5._actualSize = i5.length, e5._stat && e5._stat.size === -1 && (e5._stat.size = e5._actualSize), e5._content = new Uint8Array(i5);
            }
          }
          return e5._content;
        }
        async oid(e5) {
          if (e5._oid === false) {
            let t5 = this, { fs: n4, gitdir: r4, cache: i5 } = this, a5;
            await I5.acquire({ fs: n4, gitdir: r4, cache: i5 }, async function(i6) {
              let o4 = i6.entriesMap.get(e5._fullpath), s4 = await e5.stat(), c5 = await (await t5._getGitConfig(n4, r4)).get(`core.filemode`), l5 = typeof process < `u` ? process.platform !== `win32` : true;
              if (!o4 || j4(s4, o4, c5, l5)) {
                let n5 = await e5.content();
                n5 === void 0 ? a5 = void 0 : (a5 = await w4(Be3.wrap({ type: `blob`, object: n5 })), t5.refresh && o4 && a5 === o4.oid && (!c5 || s4.mode === o4.mode) && j4(s4, o4, c5, l5) && i6.insert({ filepath: e5._fullpath, stats: s4, oid: a5 }));
              } else a5 = o4.oid;
            }), e5._oid = a5;
          }
          return e5._oid;
        }
        async _getGitConfig(e5, t5) {
          return this.config ||= await Se3.get({ fs: e5, gitdir: t5 }), this.config;
        }
      };
      function tn2({ refresh: e5 = true } = {}) {
        let t5 = /* @__PURE__ */ Object.create(null);
        return Object.defineProperty(t5, B4, { value: function({ fs: t6, dir: n4, gitdir: r4, cache: i5 }) {
          return new en2({ fs: t6, dir: n4, gitdir: r4, cache: i5, refresh: e5 });
        } }), Object.freeze(t5), t5;
      }
      function nn2(e5, t5) {
        let n4 = t5 - e5;
        return Array.from({ length: n4 }, (t6, n5) => e5 + n5);
      }
      let rn2 = Array.prototype.flat === void 0 ? (e5) => e5.reduce((e6, t5) => e6.concat(t5), []) : (e5) => e5.flat();
      var an2 = class {
        constructor() {
          this.value = null;
        }
        consider(e5) {
          e5 != null && (this.value === null || e5 < this.value) && (this.value = e5);
        }
        reset() {
          this.value = null;
        }
      };
      function* on2(e5) {
        let t5 = new an2(), n4, r4 = [], i5 = e5.length;
        for (let n5 = 0; n5 < i5; n5++) r4[n5] = e5[n5].next().value, r4[n5] !== void 0 && t5.consider(r4[n5]);
        if (t5.value !== null) for (; ; ) {
          let a5 = [];
          n4 = t5.value, t5.reset();
          for (let o4 = 0; o4 < i5; o4++) r4[o4] !== void 0 && r4[o4] === n4 ? (a5[o4] = r4[o4], r4[o4] = e5[o4].next().value) : a5[o4] = null, r4[o4] !== void 0 && t5.consider(r4[o4]);
          if (yield a5, t5.value === null) return;
        }
      }
      async function sn2({ fs: e5, cache: t5, dir: n4, gitdir: r4, trees: i5, map: a5 = async (e6, t6) => t6, reduce: o4 = async (e6, t6) => {
        let n5 = rn2(t6);
        return e6 !== void 0 && n5.unshift(e6), n5;
      }, iterate: s4 = (e6, t6) => Promise.all([...t6].map(e6)) }) {
        let c5 = i5.map((i6) => i6[B4]({ fs: e5, dir: n4, gitdir: r4, cache: t5 })), l5 = Array(c5.length).fill(`.`), u5 = nn2(0, c5.length), d4 = async (e6) => (u5.forEach((t6) => {
          let n5 = e6[t6];
          e6[t6] = n5 && new c5[t6].ConstructEntry(n5);
        }), { entries: e6, children: on2((await Promise.all(u5.map((t6) => {
          let n5 = e6[t6];
          return n5 ? c5[t6].readdir(n5) : [];
        }))).map((e7) => (e7 === null ? [] : e7)[Symbol.iterator]())) }), f4 = async (e6) => {
          let { entries: t6, children: n5 } = await d4(e6), r5 = t6.find((e7) => e7 && e7._fullpath)._fullpath, i6 = await a5(r5, t6);
          if (i6 !== null) {
            let e7 = await s4(f4, n5);
            return e7 = e7.filter((e8) => e8 !== void 0), o4(i6, e7);
          }
        };
        return f4(l5);
      }
      async function cn2(e5, t5) {
        let n4 = await e5.readdir(t5);
        n4 == null ? await e5.rm(t5) : n4.length ? await Promise.all(n4.map((n5) => {
          let r4 = ce3(t5, n5);
          return e5.lstat(r4).then((t6) => {
            if (t6) return t6.isDirectory() ? cn2(e5, r4) : e5.rm(r4);
          });
        })).then(() => e5.rmdir(t5)) : await e5.rmdir(t5);
      }
      function ln2(e5) {
        return un2(e5) && dn2(e5.then) && dn2(e5.catch);
      }
      function un2(e5) {
        return e5 && typeof e5 == `object`;
      }
      function dn2(e5) {
        return typeof e5 == `function`;
      }
      function fn2(e5) {
        return ln2(((e6) => {
          try {
            return e6.readFile().catch((e7) => e7);
          } catch (e7) {
            return e7;
          }
        })(e5));
      }
      let pn2 = [`readFile`, `writeFile`, `mkdir`, `rmdir`, `unlink`, `stat`, `lstat`, `readdir`, `readlink`, `symlink`];
      function mn2(e5, t5) {
        if (fn2(t5)) for (let n4 of pn2) e5[`_${n4}`] = t5[n4].bind(t5);
        else for (let n4 of pn2) e5[`_${n4}`] = c4(t5[n4].bind(t5));
        fn2(t5) ? (t5.cp && (e5._cp = t5.cp.bind(t5)), t5.rm ? e5._rm = t5.rm.bind(t5) : t5.rmdir.length > 1 ? e5._rm = t5.rmdir.bind(t5) : e5._rm = cn2.bind(null, e5)) : (t5.cp && (e5._cp = c4(t5.cp.bind(t5))), t5.rm ? e5._rm = c4(t5.rm.bind(t5)) : t5.rmdir.length > 2 ? e5._rm = c4(t5.rmdir.bind(t5)) : e5._rm = cn2.bind(null, e5));
      }
      var hn2 = class {
        constructor(e5) {
          if (e5._original_unwrapped_fs !== void 0) return e5;
          let t5 = Object.getOwnPropertyDescriptor(e5, `promises`);
          t5 && t5.enumerable ? mn2(this, e5.promises) : mn2(this, e5), this._original_unwrapped_fs = e5;
        }
        async exists(e5, t5 = {}) {
          try {
            return await this._stat(e5), true;
          } catch (e6) {
            if (e6.code === `ENOENT` || e6.code === `ENOTDIR` || (e6.code || ``).includes(`ENS`)) return false;
            throw console.log(`Unhandled error in "FileSystem.exists()" function`, e6), e6;
          }
        }
        async read(e5, t5 = {}) {
          try {
            let n4 = await this._readFile(e5, t5);
            if (t5.autocrlf === `true`) try {
              n4 = new TextDecoder(`utf8`, { fatal: true }).decode(n4), n4 = n4.replace(/\r\n/g, `
`), n4 = new TextEncoder().encode(n4);
            } catch {
            }
            return typeof n4 != `string` && (n4 = Buffer.from(n4)), n4;
          } catch {
            return null;
          }
        }
        async write(e5, t5, n4 = {}) {
          try {
            await this._writeFile(e5, t5, n4);
          } catch {
            await this.mkdir(R5(e5)), await this._writeFile(e5, t5, n4);
          }
        }
        async mkdir(e5, t5 = false) {
          try {
            await this._mkdir(e5);
          } catch (n4) {
            if (n4 === null || n4.code === `EEXIST`) return;
            if (t5) throw n4;
            if (n4.code === `ENOENT`) {
              let t6 = R5(e5);
              if (t6 === `.` || t6 === `/` || t6 === e5) throw n4;
              await this.mkdir(t6), await this.mkdir(e5, true);
            }
          }
        }
        async rm(e5) {
          try {
            await this._unlink(e5);
          } catch (e6) {
            if (e6.code !== `ENOENT`) throw e6;
          }
        }
        async rmdir(e5, t5) {
          try {
            t5 && t5.recursive ? await this._rm(e5, t5) : await this._rmdir(e5);
          } catch (e6) {
            if (e6.code !== `ENOENT`) throw e6;
          }
        }
        async readdir(e5) {
          try {
            let t5 = await this._readdir(e5);
            return t5.sort(g4), t5;
          } catch (e6) {
            return e6.code === `ENOTDIR` ? null : [];
          }
        }
        async readdirDeep(e5) {
          let t5 = await this._readdir(e5);
          return (await Promise.all(t5.map(async (t6) => {
            let n4 = e5 + `/` + t6;
            return (await this._stat(n4)).isDirectory() ? this.readdirDeep(n4) : n4;
          }))).reduce((e6, t6) => e6.concat(t6), []);
        }
        async lstat(e5) {
          try {
            return await this._lstat(e5);
          } catch (e6) {
            if (e6.code === `ENOENT` || (e6.code || ``).includes(`ENS`)) return null;
            throw e6;
          }
        }
        async readlink(e5, t5 = { encoding: `buffer` }) {
          try {
            let n4 = await this._readlink(e5, t5);
            return Buffer.isBuffer(n4) ? n4 : Buffer.from(n4);
          } catch (e6) {
            if (e6.code === `ENOENT` || (e6.code || ``).includes(`ENS`)) return null;
            throw e6;
          }
        }
        async writelink(e5, t5) {
          return this._symlink(t5.toString(`utf8`), e5);
        }
      };
      function gn2(e5, t5) {
        if (t5 === void 0) throw new Ot3(e5);
      }
      function _n2(e5) {
        return e5.startsWith(`/`) || /^[a-zA-Z]:[\\/]/.test(e5);
      }
      async function vn2({ fsp: e5, dotgit: t5 }) {
        gn2(`fsp`, e5), gn2(`dotgit`, t5);
        let n4 = await e5._stat(t5).catch(() => ({ isFile: () => false, isDirectory: () => false }));
        return n4.isDirectory() ? t5 : n4.isFile() ? e5._readFile(t5, `utf8`).then((e6) => e6.trimRight().substr(8)).then((e6) => _n2(e6) ? e6 : ce3(R5(t5), e6)) : t5;
      }
      let yn2 = /(^|[/.])([/.]|$)|^@$|@{|[\x00-\x20\x7f~^:?*[\\]|\.lock(\/|$)/;
      function bn2(e5, t5) {
        if (typeof e5 != `string`) throw TypeError(`Reference name must be a string`);
        return !yn2.test(e5) && (!!t5 || e5.includes(`/`));
      }
      async function xn2({ fs: e5, gitdir: t5, remote: n4, url: r4, force: i5 }) {
        if (!bn2(n4, true)) throw new Ct3(n4, l4.clean(n4));
        let a5 = await Se3.get({ fs: e5, gitdir: t5 });
        if (!i5 && (await a5.getSubsections(`remote`)).includes(n4) && r4 !== await a5.get(`remote.${n4}.url`)) throw new ft3(`remote`, n4);
        await a5.set(`remote.${n4}.url`, r4), await a5.set(`remote.${n4}.fetch`, `+refs/heads/*:refs/remotes/${n4}/*`), await Se3.save({ fs: e5, gitdir: t5, config: a5 });
      }
      let Sn2 = (e5, t5) => e5 === `.` || t5 == null || t5.length === 0 || t5 === `.` ? true : t5.length >= e5.length ? t5.startsWith(e5) : e5.startsWith(t5);
      async function Cn2({ fs: e5, cache: t5, onProgress: n4, onPostCheckout: r4, dir: i5, gitdir: a5, remote: o4, ref: s4, filepaths: c5, noCheckout: l5, noUpdateHead: u5, dryRun: d4, force: f4, track: m5 = true, nonBlocking: h6 = false, batchSize: g5 = 100 }) {
        let _5;
        if (r4) try {
          _5 = await De3.resolve({ fs: e5, gitdir: a5, ref: `HEAD` });
        } catch {
          _5 = `0000000000000000000000000000000000000000`;
        }
        let v5;
        try {
          v5 = await De3.resolve({ fs: e5, gitdir: a5, ref: s4 });
        } catch (t6) {
          if (s4 === `HEAD`) throw t6;
          let n5 = `${o4}/${s4}`;
          if (v5 = await De3.resolve({ fs: e5, gitdir: a5, ref: n5 }), m5) {
            let t7 = await Se3.get({ fs: e5, gitdir: a5 });
            await t7.set(`branch.${s4}.remote`, o4), await t7.set(`branch.${s4}.merge`, `refs/heads/${s4}`), await Se3.save({ fs: e5, gitdir: a5, config: t7 });
          }
          await De3.writeRef({ fs: e5, gitdir: a5, ref: `refs/heads/${s4}`, value: v5 });
        }
        if (!l5) {
          let o5;
          try {
            o5 = await wn2({ fs: e5, cache: t5, onProgress: n4, dir: i5, gitdir: a5, ref: s4, force: f4, filepaths: c5 });
          } catch (e6) {
            throw e6 instanceof H3 && e6.data.what === v5 ? new _t3(s4, v5) : e6;
          }
          let l6 = o5.filter(([e6]) => e6 === `conflict`).map(([e6, t6]) => t6);
          if (l6.length > 0) throw new mt3(l6);
          let u6 = o5.filter(([e6]) => e6 === `error`).map(([e6, t6]) => t6);
          if (u6.length > 0) throw new p3(u6.join(`, `));
          if (d4) {
            r4 && await r4({ previousHead: _5, newHead: v5, type: c5 != null && c5.length > 0 ? `file` : `branch` });
            return;
          }
          let m6 = 0, y6 = o5.length;
          if (await I5.acquire({ fs: e5, gitdir: a5, cache: t5 }, async function(t6) {
            await Promise.all(o5.filter(([e6]) => e6 === `delete` || e6 === `delete-index`).map(async function([r5, a6]) {
              let o6 = `${i5}/${a6}`;
              r5 === `delete` && await e5.rm(o6), t6.delete({ filepath: a6 }), n4 && await n4({ phase: `Updating workdir`, loaded: ++m6, total: y6 });
            }));
          }), await I5.acquire({ fs: e5, gitdir: a5, cache: t5 }, async function(t6) {
            for (let [r5, a6] of o5) if (r5 === `rmdir` || r5 === `rmdir-index`) {
              let o6 = `${i5}/${a6}`;
              try {
                r5 === `rmdir` && await e5.rmdir(o6), t6.delete({ filepath: a6 }), n4 && await n4({ phase: `Updating workdir`, loaded: ++m6, total: y6 });
              } catch (e6) {
                if (e6.code === `ENOTEMPTY`) console.log(`Did not delete ${a6} because directory is not empty`);
                else throw e6;
              }
            }
          }), await Promise.all(o5.filter(([e6]) => e6 === `mkdir` || e6 === `mkdir-index`).map(async function([t6, r5]) {
            let a6 = `${i5}/${r5}`;
            await e5.mkdir(a6), n4 && await n4({ phase: `Updating workdir`, loaded: ++m6, total: y6 });
          })), h6) {
            let r5 = await Dn2(`Update Working Dir`, o5.filter(([e6]) => e6 === `create` || e6 === `create-index` || e6 === `update` || e6 === `mkdir-index`).map(([n5, r6, o6, s5, c6]) => () => En2({ fs: e5, cache: t5, gitdir: a5, dir: i5 }, [n5, r6, o6, s5, c6])), n4, g5);
            await I5.acquire({ fs: e5, gitdir: a5, cache: t5, allowUnmerged: true }, async function(e6) {
              await Dn2(`Update Index`, r5.map(([t6, n5, r6]) => () => Tn2({ index: e6, fullpath: t6, oid: n5, stats: r6 })), n4, g5);
            });
          } else await I5.acquire({ fs: e5, gitdir: a5, cache: t5, allowUnmerged: true }, async function(r5) {
            var _a4;
            let s5 = await Promise.allSettled(o5.filter(([e6]) => e6 === `create` || e6 === `create-index` || e6 === `update` || e6 === `mkdir-index`).map(async function([o6, s6, c7, l7, u7]) {
              let d5 = `${i5}/${s6}`;
              if (o6 !== `create-index` && o6 !== `mkdir-index`) {
                let { object: n5 } = await dt3({ fs: e5, cache: t5, gitdir: a5, oid: c7 });
                if (u7 && await e5.rm(d5), l7 === 33188) await e5.write(d5, n5);
                else if (l7 === 33261) await e5.write(d5, n5, { mode: 511 });
                else if (l7 === 40960) await e5.writelink(d5, n5);
                else throw new p3(`Invalid mode 0o${l7.toString(8)} detected in blob ${c7}`);
              }
              let f5 = await e5.lstat(d5);
              l7 === 33261 && (f5.mode = 493), o6 === `mkdir-index` && (f5.mode = 57344), r5.insert({ filepath: s6, stats: f5, oid: c7 }), n4 && await n4({ phase: `Updating workdir`, loaded: ++m6, total: y6 });
            })), c6 = [];
            for (let e6 of s5) e6.status === `rejected` && (c6.push(e6.reason), console.error(`[isomorphic-git checkout] task rejected:`, ((_a4 = e6.reason) == null ? void 0 : _a4.stack) ?? e6.reason));
            if (c6.length > 0) throw new kt3(c6);
          });
          r4 && await r4({ previousHead: _5, newHead: v5, type: c5 != null && c5.length > 0 ? `file` : `branch` });
        }
        if (!u5) {
          let t6 = await De3.expand({ fs: e5, gitdir: a5, ref: s4 });
          t6.startsWith(`refs/heads`) ? await De3.writeSymbolicRef({ fs: e5, gitdir: a5, ref: `HEAD`, value: t6 }) : await De3.writeRef({ fs: e5, gitdir: a5, ref: `HEAD`, value: v5 });
        }
      }
      async function wn2({ fs: e5, cache: t5, onProgress: n4, dir: r4, gitdir: i5, ref: a5, force: o4, filepaths: s4 }) {
        let c5 = 0;
        return sn2({ fs: e5, cache: t5, dir: r4, gitdir: i5, trees: [$t2({ ref: a5 }), tn2(), V4()], map: async function(e6, [t6, r5, i6]) {
          if (e6 !== `.`) {
            if (s4 && !s4.some((t7) => Sn2(e6, t7))) return null;
            switch (n4 && await n4({ phase: `Analyzing workdir`, loaded: ++c5 }), [!!i6, !!t6, !!r5].map(Number).join(``)) {
              case `000`:
                return;
              case `001`:
                return o4 && s4 && s4.includes(e6) ? [`delete`, e6] : void 0;
              case `010`:
                switch (await t6.type()) {
                  case `tree`:
                    return [`mkdir`, e6];
                  case `blob`:
                    return [`create`, e6, await t6.oid(), await t6.mode()];
                  case `commit`:
                    return [`mkdir-index`, e6, await t6.oid(), await t6.mode()];
                  default:
                    return [`error`, `new entry Unhandled type ${await t6.type()}`];
                }
              case `011`:
                switch (`${await t6.type()}-${await r5.type()}`) {
                  case `tree-tree`:
                    return;
                  case `tree-blob`:
                  case `blob-tree`:
                    return [`conflict`, e6];
                  case `blob-blob`:
                    return await t6.oid() === await r5.oid() ? await t6.mode() === await r5.mode() ? [`create-index`, e6, await t6.oid(), await t6.mode()] : o4 ? [`update`, e6, await t6.oid(), await t6.mode(), true] : [`conflict`, e6] : o4 ? [`update`, e6, await t6.oid(), await t6.mode(), await t6.mode() !== await r5.mode()] : [`conflict`, e6];
                  case `commit-tree`:
                    return;
                  case `commit-blob`:
                    return [`conflict`, e6];
                  default:
                    return [`error`, `new entry Unhandled type ${t6.type}`];
                }
              case `100`:
                return [`delete-index`, e6];
              case `101`:
                switch (await i6.type()) {
                  case `tree`:
                    return [`rmdir-index`, e6];
                  case `blob`:
                    return await i6.oid() === await r5.oid() || o4 ? [`delete`, e6] : [`conflict`, e6];
                  case `commit`:
                    return [`rmdir-index`, e6];
                  default:
                    return [`error`, `delete entry Unhandled type ${await i6.type()}`];
                }
              case `110`:
              case `111`:
                switch (`${await i6.type()}-${await t6.type()}`) {
                  case `tree-tree`:
                    return;
                  case `blob-blob`:
                    if (await i6.oid() === await t6.oid() && await i6.mode() === await t6.mode() && !o4) return;
                    if (r5) {
                      if (await r5.oid() !== await i6.oid() && await r5.oid() !== await t6.oid()) return o4 ? [`update`, e6, await t6.oid(), await t6.mode(), await t6.mode() !== await r5.mode()] : [`conflict`, e6];
                    } else if (o4) return [`update`, e6, await t6.oid(), await t6.mode(), await t6.mode() !== await i6.mode()];
                    return await t6.mode() === await i6.mode() ? await t6.oid() === await i6.oid() ? void 0 : [`update`, e6, await t6.oid(), await t6.mode(), false] : [`update`, e6, await t6.oid(), await t6.mode(), true];
                  case `tree-blob`:
                    return [`update-dir-to-blob`, e6, await t6.oid()];
                  case `blob-tree`:
                    return [`update-blob-to-tree`, e6];
                  case `commit-commit`:
                    return [`mkdir-index`, e6, await t6.oid(), await t6.mode()];
                  default:
                    return [`error`, `update entry Unhandled type ${await i6.type()}-${await t6.type()}`];
                }
            }
          }
        }, reduce: async function(e6, t6) {
          return t6 = rn2(t6), e6 ? e6 && e6[0] === `rmdir` ? (t6.push(e6), t6) : (t6.unshift(e6), t6) : t6;
        } });
      }
      async function Tn2({ index: e5, fullpath: t5, stats: n4, oid: r4 }) {
        try {
          e5.insert({ filepath: t5, stats: n4, oid: r4 });
        } catch (e6) {
          console.warn(`Error inserting ${t5} into index:`, e6);
        }
      }
      async function En2({ fs: e5, cache: t5, gitdir: n4, dir: r4 }, [i5, a5, o4, s4, c5]) {
        let l5 = `${r4}/${a5}`;
        if (i5 !== `create-index` && i5 !== `mkdir-index`) {
          let { object: r5 } = await dt3({ fs: e5, cache: t5, gitdir: n4, oid: o4 });
          if (c5 && await e5.rm(l5), s4 === 33188) await e5.write(l5, r5);
          else if (s4 === 33261) await e5.write(l5, r5, { mode: 511 });
          else if (s4 === 40960) await e5.writelink(l5, r5);
          else throw new p3(`Invalid mode 0o${s4.toString(8)} detected in blob ${o4}`);
        }
        let u5 = await e5.lstat(l5);
        return s4 === 33261 && (u5.mode = 493), i5 === `mkdir-index` && (u5.mode = 57344), [a5, o4, u5];
      }
      async function Dn2(e5, t5, n4, r4) {
        let i5 = [], a5 = [];
        for (let o4 = 0; o4 < t5.length; o4 += r4) {
          let s4 = t5.slice(o4, o4 + r4).map((e6) => e6());
          (await Promise.allSettled(s4)).forEach((t6) => {
            var _a4;
            t6.status === `fulfilled` ? i5.push(t6.value) : (a5.push(t6.reason), console.error(`[isomorphic-git ${e5}] task rejected:`, ((_a4 = t6.reason) == null ? void 0 : _a4.stack) ?? t6.reason));
          }), n4 && await n4({ phase: `Updating workdir`, loaded: o4 + s4.length, total: t5.length });
        }
        if (a5.length > 0) throw new kt3(a5);
        return i5;
      }
      async function On2({ fs: e5, onProgress: t5, onPostCheckout: n4, dir: r4, gitdir: i5 = ce3(r4, `.git`), remote: a5 = `origin`, ref: o4, filepaths: s4, noCheckout: c5 = false, noUpdateHead: l5 = o4 === void 0, dryRun: u5 = false, force: d4 = false, track: f4 = true, cache: p4 = {}, nonBlocking: m5 = false, batchSize: h6 = 100 }) {
        try {
          gn2(`fs`, e5), gn2(`dir`, r4), gn2(`gitdir`, i5);
          let g5 = o4 || `HEAD`, _5 = new hn2(e5);
          return await Cn2({ fs: _5, cache: p4, onProgress: t5, onPostCheckout: n4, dir: r4, gitdir: await vn2({ fsp: _5, dotgit: i5 }), remote: a5, ref: g5, filepaths: s4, noCheckout: c5, noUpdateHead: l5, dryRun: u5, force: d4, track: f4, nonBlocking: m5, batchSize: h6 });
        } catch (e6) {
          throw e6.caller = `git.checkout`, e6;
        }
      }
      let kn2 = /^refs\/(heads\/|tags\/|remotes\/)?(.*)/;
      function An2(e5) {
        let t5 = kn2.exec(e5);
        return t5 ? t5[1] === `remotes/` && e5.endsWith(`/HEAD`) ? t5[2].slice(0, -5) : t5[2] : e5;
      }
      async function jn2({ fs: e5, gitdir: t5, fullname: n4 = false, test: r4 = false }) {
        let i5 = await De3.resolve({ fs: e5, gitdir: t5, ref: `HEAD`, depth: 2 });
        if (r4) try {
          await De3.resolve({ fs: e5, gitdir: t5, ref: i5 });
        } catch {
          return;
        }
        if (i5.startsWith(`refs/`)) return n4 ? i5 : An2(i5);
      }
      function Mn2(e5) {
        return e5 = e5.replace(/^git@([^:]+):/, `https://$1/`), e5 = e5.replace(/^ssh:\/\//, `https://`), e5;
      }
      function Nn2({ username: e5 = ``, password: t5 = `` }) {
        return `Basic ${Buffer.from(`${e5}:${t5}`).toString(`base64`)}`;
      }
      async function Pn2(e5, t5) {
        let n4 = qe2(e5);
        for (; ; ) {
          let { value: e6, done: r4 } = await n4.next();
          if (e6 && await t5(e6), r4) break;
        }
        n4.return && n4.return();
      }
      async function Fn2(e5) {
        let t5 = 0, n4 = [];
        await Pn2(e5, (e6) => {
          n4.push(e6), t5 += e6.byteLength;
        });
        let r4 = new Uint8Array(t5), i5 = 0;
        for (let e6 of n4) r4.set(e6, i5), i5 += e6.byteLength;
        return r4;
      }
      function In2(e5) {
        let t5 = e5.match(/^https?:\/\/([^/]+)@/);
        if (t5 == null) return { url: e5, auth: {} };
        t5 = t5[1];
        let [n4, r4] = t5.split(`:`);
        return e5 = e5.replace(`${t5}@`, ``), { url: e5, auth: { username: n4, password: r4 } };
      }
      function Ln2(e5, t5) {
        let n4 = t5.toString(16);
        return `0`.repeat(e5 - n4.length) + n4;
      }
      var Rn2 = class {
        static flush() {
          return Buffer.from(`0000`, `utf8`);
        }
        static delim() {
          return Buffer.from(`0001`, `utf8`);
        }
        static encode(e5) {
          typeof e5 == `string` && (e5 = Buffer.from(e5));
          let t5 = Ln2(4, e5.length + 4);
          return Buffer.concat([Buffer.from(t5, `utf8`), e5]);
        }
        static streamReader(e5) {
          let t5 = new Je2(e5);
          return async function() {
            try {
              let e6 = await t5.read(4);
              return e6 == null ? true : (e6 = parseInt(e6.toString(`utf8`), 16), e6 === 0 || e6 === 1 ? null : await t5.read(e6 - 4) ?? true);
            } catch (t6) {
              return e5.error = t6, true;
            }
          };
        }
      };
      async function zn2(e5) {
        let t5 = {}, n4;
        for (; n4 = await e5(), n4 !== true; ) {
          if (n4 === null) continue;
          n4 = n4.toString(`utf8`).replace(/\n$/, ``);
          let e6 = n4.indexOf(`=`);
          if (e6 > -1) {
            let r4 = n4.slice(0, e6);
            t5[r4] = n4.slice(e6 + 1);
          } else t5[n4] = true;
        }
        return { protocolVersion: 2, capabilities2: t5 };
      }
      async function Bn2(e5, { service: t5 }) {
        let n4 = /* @__PURE__ */ new Set(), r4 = /* @__PURE__ */ new Map(), i5 = /* @__PURE__ */ new Map(), a5 = Rn2.streamReader(e5), o4 = await a5();
        for (; o4 === null; ) o4 = await a5();
        if (o4 === true) throw new vt3();
        if (o4.includes(`version 2`)) return zn2(a5);
        if (o4.toString(`utf8`).replace(/\n$/, ``) !== `# service=${t5}`) throw new At3(`# service=${t5}\\n`, o4.toString(`utf8`));
        let s4 = await a5();
        for (; s4 === null; ) s4 = await a5();
        if (s4 === true) return { capabilities: n4, refs: r4, symrefs: i5 };
        if (s4 = s4.toString(`utf8`), s4.includes(`version 2`)) return zn2(a5);
        let [c5, l5] = Vn2(s4, `\0`, `\\x00`);
        if (l5.split(` `).map((e6) => n4.add(e6)), c5 !== `0000000000000000000000000000000000000000 capabilities^{}`) {
          let [e6, t6] = Vn2(c5, ` `, ` `);
          for (r4.set(t6, e6); ; ) {
            let e7 = await a5();
            if (e7 === true) break;
            if (e7 !== null) {
              let [t7, n5] = Vn2(e7.toString(`utf8`), ` `, ` `);
              r4.set(n5, t7);
            }
          }
        }
        for (let e6 of n4) if (e6.startsWith(`symref=`)) {
          let t6 = e6.match(/symref=([^:]+):(.*)/);
          t6.length === 3 && i5.set(t6[1], t6[2]);
        }
        return { protocolVersion: 1, capabilities: n4, refs: r4, symrefs: i5 };
      }
      function Vn2(e5, t5, n4) {
        let r4 = e5.trim().split(t5);
        if (r4.length !== 2) throw new At3(`Two strings separated by '${n4}'`, e5.toString(`utf8`));
        return r4;
      }
      let Hn2 = (e5, t5) => e5.endsWith(`?`) ? `${e5}${t5}` : `${e5}/${t5.replace(/^https?:\/\//, ``)}`, Un2 = (e5, t5) => {
        (t5.username || t5.password) && (e5.Authorization = Nn2(t5)), t5.headers && Object.assign(e5, t5.headers);
      }, Wn2 = async (e5) => {
        try {
          let t5 = Buffer.from(await Fn2(e5.body)), n4 = t5.toString(`utf8`);
          return { preview: n4.length < 256 ? n4 : n4.slice(0, 256) + `...`, response: n4, data: t5 };
        } catch {
          return {};
        }
      };
      var Gn2 = class {
        static async capabilities() {
          return [`discover`, `connect`];
        }
        static async discover({ http: e5, onProgress: t5, onAuth: n4, onAuthSuccess: r4, onAuthFailure: i5, corsProxy: a5, service: o4, url: s4, headers: c5, protocolVersion: l5 }) {
          let { url: u5, auth: d4 } = In2(s4), f4 = a5 ? Hn2(a5, u5) : u5;
          (d4.username || d4.password) && (c5.Authorization = Nn2(d4)), l5 === 2 && (c5[`Git-Protocol`] = `version=2`);
          let p4, m5, h6 = false;
          do
            if (p4 = await e5.request({ onProgress: t5, method: `GET`, url: `${f4}/info/refs?service=${o4}`, headers: c5 }), m5 = false, p4.statusCode === 401 || p4.statusCode === 203) {
              let e6 = h6 ? i5 : n4;
              if (e6) {
                if (d4 = await e6(u5, { ...d4, headers: { ...c5 } }), d4 && d4.cancel) throw new It3();
                d4 && (Un2(c5, d4), h6 = true, m5 = true);
              }
            } else p4.statusCode === 200 && h6 && r4 && await r4(u5, d4);
          while (m5);
          if (p4.statusCode !== 200) {
            let { response: e6 } = await Wn2(p4);
            throw new xt3(p4.statusCode, p4.statusMessage, e6);
          }
          if (p4.headers[`content-type`] === `application/x-${o4}-advertisement`) {
            let e6 = await Bn2(p4.body, { service: o4 });
            return e6.auth = d4, e6;
          } else {
            let { preview: e6, response: t6, data: n5 } = await Wn2(p4);
            try {
              let e7 = await Bn2([n5], { service: o4 });
              return e7.auth = d4, e7;
            } catch {
              throw new Nt3(e6, t6);
            }
          }
        }
        static async connect({ http: e5, onProgress: t5, corsProxy: n4, service: r4, url: i5, auth: a5, body: o4, headers: s4 }) {
          let c5 = In2(i5);
          c5 && (i5 = c5.url), n4 && (i5 = Hn2(n4, i5)), s4[`content-type`] = `application/x-${r4}-request`, s4.accept = `application/x-${r4}-result`, Un2(s4, a5);
          let l5 = await e5.request({ onProgress: t5, method: `POST`, url: `${i5}/${r4}`, body: o4, headers: s4 });
          if (l5.statusCode !== 200) {
            let { response: e6 } = Wn2(l5);
            throw new xt3(l5.statusCode, l5.statusMessage, e6);
          }
          return l5;
        }
      }, Kn2 = class {
        static getRemoteHelperFor({ url: e5 }) {
          let t5 = /* @__PURE__ */ new Map();
          t5.set(`http`, Gn2), t5.set(`https`, Gn2);
          let n4 = qn2({ url: e5 });
          if (!n4) throw new Ft3(e5);
          if (t5.has(n4.transport)) return t5.get(n4.transport);
          throw new Pt3(e5, n4.transport, n4.transport === `ssh` ? Mn2(e5) : void 0);
        }
      };
      function qn2({ url: e5 }) {
        if (e5.startsWith(`git@`)) return { transport: `ssh`, address: e5 };
        let t5 = e5.match(/(\w+)(:\/\/|::)(.*)/);
        if (t5 !== null) {
          if (t5[2] === `://`) return { transport: t5[1], address: t5[0] };
          if (t5[2] === `::`) return { transport: t5[1], address: t5[3] };
        }
      }
      let Jn2 = null;
      var Yn2 = class {
        static async read({ fs: e5, gitdir: t5 }) {
          Jn2 === null && (Jn2 = new r3());
          let n4 = ce3(t5, `shallow`), i5 = /* @__PURE__ */ new Set();
          return await Jn2.acquire(n4, async function() {
            let t6 = await e5.read(n4, { encoding: `utf8` });
            if (t6 === null || t6.trim() === ``) return i5;
            t6.trim().split(`
`).map((e6) => i5.add(e6));
          }), i5;
        }
        static async write({ fs: e5, gitdir: t5, oids: n4 }) {
          Jn2 === null && (Jn2 = new r3());
          let i5 = ce3(t5, `shallow`);
          if (n4.size > 0) {
            let t6 = [...n4].join(`
`) + `
`;
            await Jn2.acquire(i5, async function() {
              await e5.write(i5, t6, { encoding: `utf8` });
            });
          } else await Jn2.acquire(i5, async function() {
            await e5.rm(i5);
          });
        }
      };
      async function Xn2({ fs: e5, gitdir: t5, oid: n4 }) {
        let r4 = `objects/${n4.slice(0, 2)}/${n4.slice(2)}`;
        return e5.exists(`${t5}/${r4}`);
      }
      async function Zn2({ fs: e5, cache: t5, gitdir: n4, oid: r4, getExternalRefDelta: i5 }) {
        let a5 = await e5.readdir(ce3(n4, `objects/pack`));
        a5 = a5.filter((e6) => e6.endsWith(`.idx`));
        for (let o4 of a5) {
          let a6 = await st3({ fs: e5, cache: t5, filename: `${n4}/objects/pack/${o4}`, getExternalRefDelta: i5 });
          if (a6.error) throw new p3(a6.error);
          if (a6.offsets.has(r4)) return true;
        }
        return false;
      }
      async function Qn2({ fs: e5, cache: t5, gitdir: n4, oid: r4, format: i5 = `content` }) {
        let a5 = (r5) => dt3({ fs: e5, cache: t5, gitdir: n4, oid: r5 }), o4 = await Xn2({ fs: e5, gitdir: n4, oid: r4 });
        return o4 ||= await Zn2({ fs: e5, cache: t5, gitdir: n4, oid: r4, getExternalRefDelta: a5 }), o4;
      }
      function $n2(e5) {
        return e5.slice(0, 12).toString(`hex`) === `5041434b0000000200000000`;
      }
      function er2(e5, t5) {
        let n4 = e5.map((e6) => e6.split(`=`, 1)[0]);
        return t5.filter((e6) => {
          let t6 = e6.split(`=`, 1)[0];
          return n4.includes(t6);
        });
      }
      let tr2 = { name: `isomorphic-git`, version: `1.38.1`, agent: `git/isomorphic-git@1.38.1` };
      var nr2 = class {
        constructor() {
          this._queue = [];
        }
        write(e5) {
          if (this._ended) throw Error(`You cannot write to a FIFO that has already been ended!`);
          if (this._waiting) {
            let t5 = this._waiting;
            this._waiting = null, t5({ value: e5 });
          } else this._queue.push(e5);
        }
        end() {
          if (this._ended = true, this._waiting) {
            let e5 = this._waiting;
            this._waiting = null, e5({ done: true });
          }
        }
        destroy(e5) {
          this.error = e5, this.end();
        }
        async next() {
          if (this._queue.length > 0) return { value: this._queue.shift() };
          if (this._ended) return { done: true };
          if (this._waiting) throw Error(`You cannot call read until the previous call to read has returned!`);
          return new Promise((e5) => {
            this._waiting = e5;
          });
        }
      };
      function rr2(e5) {
        let t5 = e5.indexOf(`\r`), n4 = e5.indexOf(`
`);
        return t5 === -1 && n4 === -1 ? -1 : t5 === -1 ? n4 + 1 : n4 === -1 ? t5 + 1 : n4 === t5 + 1 ? n4 + 1 : Math.min(t5, n4) + 1;
      }
      function ir2(e5) {
        let t5 = new nr2(), n4 = ``;
        return (async () => {
          await Pn2(e5, (e6) => {
            for (e6 = e6.toString(`utf8`), n4 += e6; ; ) {
              let e7 = rr2(n4);
              if (e7 === -1) break;
              t5.write(n4.slice(0, e7)), n4 = n4.slice(e7);
            }
          }), n4.length > 0 && t5.write(n4), t5.end();
        })(), t5;
      }
      var ar2 = class {
        static demux(e5) {
          let t5 = Rn2.streamReader(e5), n4 = new nr2(), r4 = new nr2(), i5 = new nr2(), a5 = async function() {
            let o4 = await t5();
            if (o4 === null) return a5();
            if (o4 === true) {
              n4.end(), i5.end(), e5.error ? r4.destroy(e5.error) : r4.end();
              return;
            }
            switch (o4[0]) {
              case 1:
                r4.write(o4.slice(1));
                break;
              case 2:
                i5.write(o4.slice(1));
                break;
              case 3: {
                let e6 = o4.slice(1);
                i5.write(e6), n4.end(), i5.end(), r4.destroy(Error(e6.toString(`utf8`)));
                return;
              }
              default:
                n4.write(o4);
            }
            a5();
          };
          return a5(), { packetlines: n4, packfile: r4, progress: i5 };
        }
      };
      async function or2(e5) {
        let { packetlines: t5, packfile: n4, progress: r4 } = ar2.demux(e5), i5 = [], a5 = [], o4 = [], s4 = false, c5 = false;
        return new Promise((l5, u5) => {
          Pn2(t5, (t6) => {
            let d4 = t6.toString(`utf8`).trim();
            if (d4.startsWith(`shallow`)) {
              let e6 = d4.slice(-41).trim();
              e6.length !== 40 && u5(new ie3(e6)), i5.push(e6);
            } else if (d4.startsWith(`unshallow`)) {
              let e6 = d4.slice(-41).trim();
              e6.length !== 40 && u5(new ie3(e6)), a5.push(e6);
            } else if (d4.startsWith(`ACK`)) {
              let [, e6, t7] = d4.split(` `);
              o4.push({ oid: e6, status: t7 }), t7 || (c5 = true);
            } else d4.startsWith(`NAK`) ? (s4 = true, c5 = true) : (c5 = true, s4 = true);
            c5 && (e5.error ? u5(e5.error) : l5({ shallows: i5, unshallows: a5, acks: o4, nak: s4, packfile: n4, progress: r4 }));
          }).finally(() => {
            c5 || (e5.error ? u5(e5.error) : l5({ shallows: i5, unshallows: a5, acks: o4, nak: s4, packfile: n4, progress: r4 }));
          });
        });
      }
      function sr2({ capabilities: e5 = [], wants: t5 = [], haves: n4 = [], shallows: r4 = [], depth: i5 = null, since: a5 = null, exclude: o4 = [] }) {
        let s4 = [];
        t5 = [...new Set(t5)];
        let c5 = ` ${e5.join(` `)}`;
        for (let e6 of t5) s4.push(Rn2.encode(`want ${e6}${c5}
`)), c5 = ``;
        for (let e6 of r4) s4.push(Rn2.encode(`shallow ${e6}
`));
        i5 !== null && s4.push(Rn2.encode(`deepen ${i5}
`)), a5 !== null && s4.push(Rn2.encode(`deepen-since ${Math.floor(a5.valueOf() / 1e3)}
`));
        for (let e6 of o4) s4.push(Rn2.encode(`deepen-not ${e6}
`));
        s4.push(Rn2.flush());
        for (let e6 of n4) s4.push(Rn2.encode(`have ${e6}
`));
        return s4.push(Rn2.encode(`done
`)), s4;
      }
      async function cr2({ fs: e5, cache: t5, http: n4, onProgress: r4, onMessage: i5, onAuth: a5, onAuthSuccess: o4, onAuthFailure: s4, gitdir: c5, ref: l5, remoteRef: u5, remote: d4, url: f4, corsProxy: p4, depth: m5 = null, since: h6 = null, exclude: g5 = [], relative: _5 = false, tags: v5 = false, singleBranch: y6 = false, headers: b5 = {}, prune: x5 = false, pruneTags: S5 = false }) {
        let C6 = l5 || await jn2({ fs: e5, gitdir: c5, test: true }), w5 = await Se3.get({ fs: e5, gitdir: c5 }), T5 = d4 || C6 && await w5.get(`branch.${C6}.remote`) || `origin`, E5 = f4 || await w5.get(`remote.${T5}.url`);
        if (E5 === void 0) throw new Ot3(`remote OR url`);
        let D5 = u5 || C6 && await w5.get(`branch.${C6}.merge`) || l5 || `HEAD`;
        p4 === void 0 && (p4 = await w5.get(`http.corsProxy`));
        let O5 = Kn2.getRemoteHelperFor({ url: E5 }), k5 = await O5.discover({ http: n4, onAuth: a5, onAuthSuccess: o4, onAuthFailure: s4, corsProxy: p4, service: `git-upload-pack`, url: E5, headers: b5, protocolVersion: 1 }), A5 = k5.auth, j5 = k5.refs;
        if (j5.size === 0) return { defaultBranch: null, fetchHead: null, fetchHeadDescription: null };
        if (m5 !== null && !k5.capabilities.has(`shallow`)) throw new Mt3(`shallow`, `depth`);
        if (h6 !== null && !k5.capabilities.has(`deepen-since`)) throw new Mt3(`deepen-since`, `since`);
        if (g5.length > 0 && !k5.capabilities.has(`deepen-not`)) throw new Mt3(`deepen-not`, `exclude`);
        if (_5 === true && !k5.capabilities.has(`deepen-relative`)) throw new Mt3(`deepen-relative`, `relative`);
        let { oid: M5, fullref: N5 } = De3.resolveAgainstMap({ ref: D5, map: j5 });
        for (let e6 of j5.keys()) e6 === N5 || e6 === `HEAD` || e6.startsWith(`refs/heads/`) || v5 && e6.startsWith(`refs/tags/`) || j5.delete(e6);
        let P5 = er2([...k5.capabilities], [`multi_ack_detailed`, `no-done`, `side-band-64k`, `ofs-delta`, `agent=${tr2.agent}`]);
        _5 && P5.push(`deepen-relative`);
        let F5 = y6 ? [M5] : j5.values(), ee4 = y6 ? [C6] : await De3.listRefs({ fs: e5, gitdir: c5, filepath: `refs` }), I6 = [];
        for (let n5 of ee4) try {
          n5 = await De3.expand({ fs: e5, gitdir: c5, ref: n5 });
          let r5 = await De3.resolve({ fs: e5, gitdir: c5, ref: n5 });
          await Qn2({ fs: e5, cache: t5, gitdir: c5, oid: r5 }) && I6.push(r5);
        } catch {
        }
        I6 = [...new Set(I6)];
        let L5 = await Yn2.read({ fs: e5, gitdir: c5 }), R6 = k5.capabilities.has(`shallow`) ? [...L5] : [], te4 = sr2({ capabilities: P5, wants: F5, haves: I6, shallows: R6, depth: m5, since: h6, exclude: g5 }), ne4 = Buffer.from(await Fn2(te4)), z5 = await O5.connect({ http: n4, onProgress: r4, corsProxy: p4, service: `git-upload-pack`, url: E5, auth: A5, body: [ne4], headers: b5 }), B5 = await or2(z5.body);
        z5.headers && (B5.headers = z5.headers);
        for (let n5 of B5.shallows) if (!L5.has(n5)) try {
          let { object: r5 } = await dt3({ fs: e5, cache: t5, gitdir: c5, oid: n5 }), i6 = new Xt2(r5), a6 = await Promise.all(i6.headers().parent.map((n6) => Qn2({ fs: e5, cache: t5, gitdir: c5, oid: n6 })));
          a6.length === 0 || a6.every((e6) => e6) || L5.add(n5);
        } catch {
          L5.add(n5);
        }
        for (let e6 of B5.unshallows) L5.delete(e6);
        if (await Yn2.write({ fs: e5, gitdir: c5, oids: L5 }), y6) {
          let t6 = /* @__PURE__ */ new Map([[N5, M5]]), n5 = /* @__PURE__ */ new Map(), r5 = 10, i6 = N5;
          for (; r5--; ) {
            let e6 = k5.symrefs.get(i6);
            if (e6 === void 0) break;
            n5.set(i6, e6), i6 = e6;
          }
          let a6 = j5.get(i6);
          a6 && t6.set(i6, a6);
          let { pruned: o5 } = await De3.updateRemoteRefs({ fs: e5, gitdir: c5, remote: T5, refs: t6, symrefs: n5, tags: v5, prune: x5 });
          x5 && (B5.pruned = o5);
        } else {
          let { pruned: t6 } = await De3.updateRemoteRefs({ fs: e5, gitdir: c5, remote: T5, refs: j5, symrefs: k5.symrefs, tags: v5, prune: x5, pruneTags: S5 });
          x5 && (B5.pruned = t6);
        }
        if (B5.HEAD = k5.symrefs.get(`HEAD`), B5.HEAD === void 0) {
          let { oid: e6 } = De3.resolveAgainstMap({ ref: `HEAD`, map: j5 });
          for (let [t6, n5] of j5.entries()) if (t6 !== `HEAD` && n5 === e6) {
            B5.HEAD = t6;
            break;
          }
        }
        B5.FETCH_HEAD = { oid: M5, description: `${N5.startsWith(`refs/tags`) ? `tag` : `branch`} '${An2(N5)}' of ${E5}` }, (r4 || i5) && Pn2(ir2(B5.progress), async (e6) => {
          if (i5 && await i5(e6), r4) {
            let t6 = e6.match(/([^:]*).*\((\d+?)\/(\d+?)\)/);
            t6 && await r4({ phase: t6[1].trim(), loaded: parseInt(t6[2], 10), total: parseInt(t6[3], 10) });
          }
        });
        let V5 = Buffer.from(await Fn2(B5.packfile));
        if (z5.body.error) throw z5.body.error;
        let H4 = V5.slice(-20).toString(`hex`), re4 = { defaultBranch: B5.HEAD, fetchHead: B5.FETCH_HEAD.oid, fetchHeadDescription: B5.FETCH_HEAD.description };
        if (B5.headers && (re4.headers = B5.headers), x5 && (re4.pruned = B5.pruned), H4 !== `` && !$n2(V5)) {
          re4.packfile = `objects/pack/pack-${H4}.pack`;
          let n5 = ce3(c5, re4.packfile);
          await e5.write(n5, V5);
          let i6 = await it3.fromPack({ pack: V5, getExternalRefDelta: (n6) => dt3({ fs: e5, cache: t5, gitdir: c5, oid: n6 }), onProgress: r4 });
          await e5.write(n5.replace(/\.pack$/, `.idx`), await i6.toBuffer());
        }
        return re4;
      }
      async function lr2({ fs: e5, bare: t5 = false, dir: n4, gitdir: r4 = t5 ? n4 : ce3(n4, `.git`), defaultBranch: i5 = `master` }) {
        if (await e5.exists(r4 + `/config`)) return;
        let a5 = [`hooks`, `info`, `objects/info`, `objects/pack`, `refs/heads`, `refs/tags`];
        a5 = a5.map((e6) => r4 + `/` + e6);
        for (let t6 of a5) await e5.mkdir(t6);
        await e5.write(r4 + `/config`, `[core]
	repositoryformatversion = 0
	filemode = false
	bare = ${t5}
` + (t5 ? `` : `	logallrefupdates = true
`) + `	symlinks = false
	ignorecase = true
`), await e5.write(r4 + `/HEAD`, `ref: refs/heads/${i5}
`);
      }
      async function ur2({ fs: e5, cache: t5, http: n4, onProgress: r4, onMessage: i5, onAuth: a5, onAuthSuccess: o4, onAuthFailure: s4, onPostCheckout: c5, dir: l5, gitdir: u5, url: d4, corsProxy: f4, ref: p4, remote: m5, depth: h6, since: g5, exclude: _5, relative: v5, singleBranch: y6, noCheckout: b5, noTags: x5, headers: S5, nonBlocking: C6, batchSize: w5 = 100 }) {
        try {
          if (await lr2({ fs: e5, gitdir: u5 }), await xn2({ fs: e5, gitdir: u5, remote: m5, url: d4, force: false }), f4) {
            let t6 = await Se3.get({ fs: e5, gitdir: u5 });
            await t6.set(`http.corsProxy`, f4), await Se3.save({ fs: e5, gitdir: u5, config: t6 });
          }
          let { defaultBranch: T5, fetchHead: E5 } = await cr2({ fs: e5, cache: t5, http: n4, onProgress: r4, onMessage: i5, onAuth: a5, onAuthSuccess: o4, onAuthFailure: s4, gitdir: u5, ref: p4, remote: m5, corsProxy: f4, depth: h6, since: g5, exclude: _5, relative: v5, singleBranch: y6, headers: S5, tags: !x5 });
          if (E5 === null) return;
          p4 ||= T5, p4 = p4.replace(`refs/heads/`, ``), await Cn2({ fs: e5, cache: t5, onProgress: r4, onPostCheckout: c5, dir: l5, gitdir: u5, ref: p4, remote: m5, noCheckout: b5, nonBlocking: C6, batchSize: w5 });
        } catch (t6) {
          throw await e5.rmdir(u5, { recursive: true, maxRetries: 10 }).catch(() => void 0), t6;
        }
      }
      async function dr2({ fs: e5, http: t5, onProgress: n4, onMessage: r4, onAuth: i5, onAuthSuccess: a5, onAuthFailure: o4, onPostCheckout: s4, dir: c5, gitdir: l5 = ce3(c5, `.git`), url: u5, corsProxy: d4 = void 0, ref: f4 = void 0, remote: p4 = `origin`, depth: m5 = void 0, since: h6 = void 0, exclude: g5 = [], relative: _5 = false, singleBranch: v5 = false, noCheckout: y6 = false, noTags: b5 = false, headers: x5 = {}, cache: S5 = {}, nonBlocking: C6 = false, batchSize: w5 = 100 }) {
        try {
          gn2(`fs`, e5), gn2(`http`, t5), gn2(`gitdir`, l5), y6 || gn2(`dir`, c5), gn2(`url`, u5);
          let T5 = new hn2(e5);
          return await ur2({ fs: T5, cache: S5, http: t5, onProgress: n4, onMessage: r4, onAuth: i5, onAuthSuccess: a5, onAuthFailure: o4, onPostCheckout: s4, dir: c5, gitdir: await vn2({ fsp: T5, dotgit: l5 }), url: u5, corsProxy: d4, ref: f4, remote: p4, depth: m5, since: h6, exclude: g5, relative: _5, singleBranch: v5, noCheckout: y6, noTags: b5, headers: x5, nonBlocking: C6, batchSize: w5 });
        } catch (e6) {
          throw e6.caller = `git.clone`, e6;
        }
      }
      function fr2(e5, t5, n4, r4) {
        let i5 = [];
        for (let [a5, o4] of e5.refs) {
          if (t5 && !a5.startsWith(t5)) continue;
          if (a5.endsWith(`^{}`)) {
            if (r4) {
              let e6 = a5.replace(`^{}`, ``), t6 = i5[i5.length - 1], n5 = t6.ref === e6 ? t6 : i5.find((t7) => t7.ref === e6);
              if (n5 === void 0) throw Error(`I did not expect this to happen`);
              n5.peeled = o4;
            }
            continue;
          }
          let s4 = { ref: a5, oid: o4 };
          n4 && e5.symrefs.has(a5) && (s4.target = e5.symrefs.get(a5)), i5.push(s4);
        }
        return i5;
      }
      async function pr2({ http: e5, onAuth: t5, onAuthSuccess: n4, onAuthFailure: r4, corsProxy: i5, url: a5, headers: o4 = {}, forPush: s4 = false, protocolVersion: c5 = 2 }) {
        try {
          gn2(`http`, e5), gn2(`url`, a5);
          let l5 = await Kn2.getRemoteHelperFor({ url: a5 }).discover({ http: e5, onAuth: t5, onAuthSuccess: n4, onAuthFailure: r4, corsProxy: i5, service: s4 ? `git-receive-pack` : `git-upload-pack`, url: a5, headers: o4, protocolVersion: c5 });
          if (l5.protocolVersion === 2) return { protocolVersion: l5.protocolVersion, capabilities: l5.capabilities2 };
          let u5 = {};
          for (let e6 of l5.capabilities) {
            let [t6, n5] = e6.split(`=`);
            n5 ? u5[t6] = n5 : u5[t6] = true;
          }
          return { protocolVersion: 1, capabilities: u5, refs: fr2(l5, void 0, true, true) };
        } catch (e6) {
          throw e6.caller = `git.getRemoteInfo2`, e6;
        }
      }
      async function mr2(e5) {
        let t5 = Rn2.streamReader(e5), n4 = [], r4;
        for (; r4 = await t5(), r4 !== true; ) {
          if (r4 === null) continue;
          r4 = r4.toString(`utf8`).replace(/\n$/, ``);
          let [e6, t6, ...i5] = r4.split(` `), a5 = { ref: t6, oid: e6 };
          for (let e7 of i5) {
            let [t7, n5] = e7.split(`:`);
            t7 === `symref-target` ? a5.target = n5 : t7 === `peeled` && (a5.peeled = n5);
          }
          n4.push(a5);
        }
        return n4;
      }
      async function hr2({ prefix: e5, symrefs: t5, peelTags: n4 }) {
        let r4 = [];
        return r4.push(Rn2.encode(`command=ls-refs
`)), r4.push(Rn2.encode(`agent=${tr2.agent}
`)), (n4 || t5 || e5) && r4.push(Rn2.delim()), n4 && r4.push(Rn2.encode(`peel`)), t5 && r4.push(Rn2.encode(`symrefs`)), e5 && r4.push(Rn2.encode(`ref-prefix ${e5}`)), r4.push(Rn2.flush()), r4;
      }
      async function gr2({ http: e5, onAuth: t5, onAuthSuccess: n4, onAuthFailure: r4, corsProxy: i5, url: a5, headers: o4 = {}, forPush: s4 = false, protocolVersion: c5 = 2, prefix: l5, symrefs: u5, peelTags: d4 }) {
        try {
          gn2(`http`, e5), gn2(`url`, a5);
          let f4 = await Gn2.discover({ http: e5, onAuth: t5, onAuthSuccess: n4, onAuthFailure: r4, corsProxy: i5, service: s4 ? `git-receive-pack` : `git-upload-pack`, url: a5, headers: o4, protocolVersion: c5 });
          if (f4.protocolVersion === 1) return fr2(f4, l5, u5, d4);
          let p4 = await hr2({ prefix: l5, symrefs: u5, peelTags: d4 });
          return mr2((await Gn2.connect({ http: e5, auth: f4.auth, headers: o4, corsProxy: i5, service: s4 ? `git-receive-pack` : `git-upload-pack`, url: a5, body: p4 })).body);
        } catch (e6) {
          throw e6.caller = `git.listServerRefs`, e6;
        }
      }
      e4.checkout = On2, e4.clone = dr2, e4.getRemoteInfo2 = pr2, e4.listServerRefs = gr2;
    }));
    Fe = f(((e4, t4) => {
      t4.exports = function(e5, t5) {
        var n4 = [];
        e5.on(`data`, function(e6) {
          n4.push(e6);
        }), e5.once(`end`, function() {
          t5 && t5(null, Buffer.concat(n4)), t5 = null;
        }), e5.once(`error`, function(e6) {
          t5 && t5(e6), t5 = null;
        });
      };
    }));
    Ie = f(((e4, t4) => {
      let n4 = [`aborted`, `complete`, `headers`, `httpVersion`, `httpVersionMinor`, `httpVersionMajor`, `method`, `rawHeaders`, `rawTrailers`, `setTimeout`, `socket`, `statusCode`, `statusMessage`, `trailers`, `url`];
      t4.exports = (e5, t5) => {
        if (t5._readableState.autoDestroy) throw Error("The second stream must have the `autoDestroy` option set to `false`");
        let r3 = new Set(Object.keys(e5).concat(n4)), i4 = {};
        for (let n5 of r3) n5 in t5 || (i4[n5] = { get() {
          let t6 = e5[n5];
          return typeof t6 == `function` ? t6.bind(e5) : t6;
        }, set(t6) {
          e5[n5] = t6;
        }, enumerable: true, configurable: false });
        return Object.defineProperties(t5, i4), e5.once(`aborted`, () => {
          t5.destroy(), t5.emit(`aborted`);
        }), e5.once(`close`, () => {
          e5.complete && t5.readable ? t5.once(`end`, () => {
            t5.emit(`close`);
          }) : t5.emit(`close`);
        }), t5;
      };
    }));
    Le = f(((e4, t4) => {
      let { Transform: r3, PassThrough: i4 } = h2(`stream`), a4 = h2(`zlib`), o3 = Ie();
      t4.exports = (e5) => {
        let t5 = (e5.headers[`content-encoding`] || ``).toLowerCase();
        if (![`gzip`, `deflate`, `br`].includes(t5)) return e5;
        let n4 = t5 === `br`;
        if (n4 && typeof a4.createBrotliDecompress != `function`) return e5.destroy(Error(`Brotli is not supported on Node.js < 12`)), e5;
        let s3 = true, c4 = new r3({ transform(e6, t6, n5) {
          s3 = false, n5(null, e6);
        }, flush(e6) {
          e6();
        } }), l4 = new i4({ autoDestroy: false, destroy(t6, n5) {
          e5.destroy(), n5(t6);
        } }), u5 = n4 ? a4.createBrotliDecompress() : a4.createUnzip();
        return u5.once(`error`, (t6) => {
          if (s3 && !e5.readable) {
            l4.end();
            return;
          }
          l4.destroy(t6);
        }), o3(e5, l4), e5.pipe(c4).pipe(u5).pipe(l4), l4;
      };
    }));
    Re = f(((e4, t4) => {
      t4.exports = n4;
      function n4(e5, t5) {
        if (e5 && t5) return n4(e5)(t5);
        if (typeof e5 != `function`) throw TypeError(`need wrapper function`);
        return Object.keys(e5).forEach(function(t6) {
          r3[t6] = e5[t6];
        }), r3;
        function r3() {
          for (var t6 = Array(arguments.length), n5 = 0; n5 < t6.length; n5++) t6[n5] = arguments[n5];
          var r4 = e5.apply(this, t6), i4 = t6[t6.length - 1];
          return typeof r4 == `function` && r4 !== i4 && Object.keys(i4).forEach(function(e6) {
            r4[e6] = i4[e6];
          }), r4;
        }
      }
    }));
    ze = f(((e4, t4) => {
      var n4 = Re();
      t4.exports = n4(r3), t4.exports.strict = n4(i4), r3.proto = r3(function() {
        Object.defineProperty(Function.prototype, `once`, { value: function() {
          return r3(this);
        }, configurable: true }), Object.defineProperty(Function.prototype, `onceStrict`, { value: function() {
          return i4(this);
        }, configurable: true });
      });
      function r3(e5) {
        var t5 = function() {
          return t5.called ? t5.value : (t5.called = true, t5.value = e5.apply(this, arguments));
        };
        return t5.called = false, t5;
      }
      function i4(e5) {
        var t5 = function() {
          if (t5.called) throw Error(t5.onceError);
          return t5.called = true, t5.value = e5.apply(this, arguments);
        };
        return t5.onceError = (e5.name || "Function wrapped with `once`") + ` shouldn't be called more than once`, t5.called = false, t5;
      }
    }));
    Be = f(((e4, t4) => {
      t4.exports = d3;
      let r3 = Fe(), i4 = Le(), a4 = h2(`http`), o3 = h2(`https`), s3 = ze(), c4 = h2(`querystring`), l4 = h2(`url`), u5 = (e5) => typeof e5 == `object` && !!e5 && typeof e5.pipe == `function`;
      function d3(e5, t5) {
        if (e5 = Object.assign({ maxRedirects: 10 }, typeof e5 == `string` ? { url: e5 } : e5), t5 = s3(t5), e5.url) {
          let { hostname: t6, port: n5, protocol: r5, auth: i5, path: a5 } = l4.parse(e5.url);
          delete e5.url, !t6 && !n5 && !r5 && !i5 ? e5.path = a5 : Object.assign(e5, { hostname: t6, port: n5, protocol: r5, auth: i5, path: a5 });
        }
        let n4 = { "accept-encoding": `gzip, deflate` };
        e5.headers && Object.keys(e5.headers).forEach((t6) => n4[t6.toLowerCase()] = e5.headers[t6]), e5.headers = n4;
        let r4;
        e5.body ? r4 = e5.json && !u5(e5.body) ? JSON.stringify(e5.body) : e5.body : e5.form && (r4 = typeof e5.form == `string` ? e5.form : c4.stringify(e5.form), e5.headers[`content-type`] = `application/x-www-form-urlencoded`), r4 && (e5.method ||= `POST`, u5(r4) || (e5.headers[`content-length`] = Buffer.byteLength(r4)), e5.json && !e5.form && (e5.headers[`content-type`] = `application/json`)), delete e5.body, delete e5.form, e5.json && (e5.headers.accept = `application/json`), e5.method &&= e5.method.toUpperCase();
        let f3 = e5.hostname, p3 = (e5.protocol === `https:` ? o3 : a4).request(e5, (n5) => {
          if (e5.followRedirects !== false && n5.statusCode >= 300 && n5.statusCode < 400 && n5.headers.location) {
            e5.url = n5.headers.location, delete e5.headers.host, n5.resume();
            let r6 = l4.parse(e5.url).hostname;
            return r6 !== null && r6 !== f3 && (delete e5.headers.cookie, delete e5.headers.authorization), e5.method === `POST` && [301, 302].includes(n5.statusCode) && (e5.method = `GET`, delete e5.headers[`content-length`], delete e5.headers[`content-type`]), e5.maxRedirects-- === 0 ? t5(Error(`too many redirects`)) : d3(e5, t5);
          }
          let r5 = typeof i4 == `function` && e5.method !== `HEAD`;
          t5(null, r5 ? i4(n5) : n5);
        });
        return p3.on(`timeout`, () => {
          p3.abort(), t5(Error(`Request timed out`));
        }), p3.on(`error`, t5), u5(r4) ? r4.on(`error`, t5).pipe(p3) : p3.end(r4), p3;
      }
      d3.concat = (e5, t5) => d3(e5, (n4, i5) => {
        if (n4) return t5(n4);
        r3(i5, (n5, r4) => {
          if (n5) return t5(n5);
          if (e5.json) try {
            r4 = JSON.parse(r4.toString());
          } catch (e6) {
            return t5(e6, i5, r4);
          }
          t5(null, i5, r4);
        });
      }), [`get`, `post`, `put`, `patch`, `head`, `delete`].forEach((e5) => {
        d3[e5] = (t5, n4) => (typeof t5 == `string` && (t5 = { url: t5 }), d3(Object.assign({ method: e5.toUpperCase() }, t5), n4));
      });
    }));
    Ve = f(((e4, t4) => {
      t4.exports = { AggregateError: class extends Error {
        constructor(e5) {
          if (!Array.isArray(e5)) throw TypeError(`Expected input to be an Array, got ${typeof e5}`);
          let t5 = ``;
          for (let n4 = 0; n4 < e5.length; n4++) t5 += `    ${e5[n4].stack}
`;
          super(t5), this.name = `AggregateError`, this.errors = e5;
        }
      }, ArrayIsArray(e5) {
        return Array.isArray(e5);
      }, ArrayPrototypeIncludes(e5, t5) {
        return e5.includes(t5);
      }, ArrayPrototypeIndexOf(e5, t5) {
        return e5.indexOf(t5);
      }, ArrayPrototypeJoin(e5, t5) {
        return e5.join(t5);
      }, ArrayPrototypeMap(e5, t5) {
        return e5.map(t5);
      }, ArrayPrototypePop(e5, t5) {
        return e5.pop(t5);
      }, ArrayPrototypePush(e5, t5) {
        return e5.push(t5);
      }, ArrayPrototypeSlice(e5, t5, n4) {
        return e5.slice(t5, n4);
      }, Error, FunctionPrototypeCall(e5, t5, ...n4) {
        return e5.call(t5, ...n4);
      }, FunctionPrototypeSymbolHasInstance(e5, t5) {
        return Function.prototype[Symbol.hasInstance].call(e5, t5);
      }, MathFloor: Math.floor, Number, NumberIsInteger: Number.isInteger, NumberIsNaN: Number.isNaN, NumberMAX_SAFE_INTEGER: 2 ** 53 - 1, NumberMIN_SAFE_INTEGER: -(2 ** 53 - 1), NumberParseInt: Number.parseInt, ObjectDefineProperties(e5, t5) {
        return Object.defineProperties(e5, t5);
      }, ObjectDefineProperty(e5, t5, n4) {
        return Object.defineProperty(e5, t5, n4);
      }, ObjectGetOwnPropertyDescriptor(e5, t5) {
        return Object.getOwnPropertyDescriptor(e5, t5);
      }, ObjectKeys(e5) {
        return Object.keys(e5);
      }, ObjectSetPrototypeOf(e5, t5) {
        return Object.setPrototypeOf(e5, t5);
      }, Promise, PromisePrototypeCatch(e5, t5) {
        return e5.catch(t5);
      }, PromisePrototypeThen(e5, t5, n4) {
        return e5.then(t5, n4);
      }, PromiseReject(e5) {
        return Promise.reject(e5);
      }, PromiseResolve(e5) {
        return Promise.resolve(e5);
      }, ReflectApply: Reflect.apply, RegExpPrototypeTest(e5, t5) {
        return e5.test(t5);
      }, SafeSet: Set, String, StringPrototypeSlice(e5, t5, n4) {
        return e5.slice(t5, n4);
      }, StringPrototypeToLowerCase(e5) {
        return e5.toLowerCase();
      }, StringPrototypeToUpperCase(e5) {
        return e5.toUpperCase();
      }, StringPrototypeTrim(e5) {
        return e5.trim();
      }, Symbol, SymbolFor: Symbol.for, SymbolAsyncIterator: Symbol.asyncIterator, SymbolHasInstance: Symbol.hasInstance, SymbolIterator: Symbol.iterator, SymbolDispose: Symbol.dispose || /* @__PURE__ */ Symbol(`Symbol.dispose`), SymbolAsyncDispose: Symbol.asyncDispose || /* @__PURE__ */ Symbol(`Symbol.asyncDispose`), TypedArrayPrototypeSet(e5, t5, n4) {
        return e5.set(t5, n4);
      }, Boolean, Uint8Array };
    }));
    He = f(((e4, t4) => {
      t4.exports = { format(e5, ...t5) {
        return e5.replace(/%([sdifj])/g, function(...[e6, n4]) {
          let r3 = t5.shift();
          return n4 === `f` ? r3.toFixed(6) : n4 === `j` ? JSON.stringify(r3) : n4 === `s` && typeof r3 == `object` ? `${r3.constructor === Object ? `` : r3.constructor.name} {}`.trim() : r3.toString();
        });
      }, inspect(e5) {
        switch (typeof e5) {
          case `string`:
            if (e5.includes(`'`)) {
              if (!e5.includes(`"`)) return `"${e5}"`;
              if (!e5.includes("`") && !e5.includes("${")) return `\`${e5}\``;
            }
            return `'${e5}'`;
          case `number`:
            return isNaN(e5) ? `NaN` : Object.is(e5, -0) ? String(e5) : e5;
          case `bigint`:
            return `${String(e5)}n`;
          case `boolean`:
          case `undefined`:
            return String(e5);
          case `object`:
            return `{}`;
        }
      } };
    }));
    Ue = f(((e4, t4) => {
      let { format: n4, inspect: r3 } = He(), { AggregateError: i4 } = Ve(), a4 = globalThis.AggregateError || i4, o3 = /* @__PURE__ */ Symbol(`kIsNodeError`), s3 = [`string`, `function`, `number`, `object`, `Function`, `Object`, `boolean`, `bigint`, `symbol`], c4 = /^([A-Z][a-z0-9]*)+$/, l4 = {};
      function u5(e5, t5) {
        if (!e5) throw new l4.ERR_INTERNAL_ASSERTION(t5);
      }
      function d3(e5) {
        let t5 = ``, n5 = e5.length, r4 = +(e5[0] === `-`);
        for (; n5 >= r4 + 4; n5 -= 3) t5 = `_${e5.slice(n5 - 3, n5)}${t5}`;
        return `${e5.slice(0, n5)}${t5}`;
      }
      function f3(e5, t5, r4) {
        if (typeof t5 == `function`) return u5(t5.length <= r4.length, `Code: ${e5}; The provided arguments length (${r4.length}) does not match the required ones (${t5.length}).`), t5(...r4);
        let i5 = (t5.match(/%[dfijoOs]/g) || []).length;
        return u5(i5 === r4.length, `Code: ${e5}; The provided arguments length (${r4.length}) does not match the required ones (${i5}).`), r4.length === 0 ? t5 : n4(t5, ...r4);
      }
      function p3(e5, t5, n5) {
        n5 ||= Error;
        class r4 extends n5 {
          constructor(...n6) {
            super(f3(e5, t5, n6));
          }
          toString() {
            return `${this.name} [${e5}]: ${this.message}`;
          }
        }
        Object.defineProperties(r4.prototype, { name: { value: n5.name, writable: true, enumerable: false, configurable: true }, toString: { value() {
          return `${this.name} [${e5}]: ${this.message}`;
        }, writable: true, enumerable: false, configurable: true } }), r4.prototype.code = e5, r4.prototype[o3] = true, l4[e5] = r4;
      }
      function m4(e5) {
        let t5 = `__node_internal_` + e5.name;
        return Object.defineProperty(e5, `name`, { value: t5 }), e5;
      }
      function h5(e5, t5) {
        if (e5 && t5 && e5 !== t5) {
          if (Array.isArray(t5.errors)) return t5.errors.push(e5), t5;
          let n5 = new a4([t5, e5], t5.message);
          return n5.code = t5.code, n5;
        }
        return e5 || t5;
      }
      var g4 = class extends Error {
        constructor(e5 = `The operation was aborted`, t5 = void 0) {
          if (t5 !== void 0 && typeof t5 != `object`) throw new l4.ERR_INVALID_ARG_TYPE(`options`, `Object`, t5);
          super(e5, t5), this.code = `ABORT_ERR`, this.name = `AbortError`;
        }
      };
      p3(`ERR_ASSERTION`, `%s`, Error), p3(`ERR_INVALID_ARG_TYPE`, (e5, t5, n5) => {
        u5(typeof e5 == `string`, `'name' must be a string`), Array.isArray(t5) || (t5 = [t5]);
        let i5 = `The `;
        e5.endsWith(` argument`) ? i5 += `${e5} ` : i5 += `"${e5}" ${e5.includes(`.`) ? `property` : `argument`} `, i5 += `must be `;
        let a5 = [], o4 = [], l5 = [];
        for (let e6 of t5) u5(typeof e6 == `string`, `All expected entries have to be of type string`), s3.includes(e6) ? a5.push(e6.toLowerCase()) : c4.test(e6) ? o4.push(e6) : (u5(e6 !== `object`, `The value "object" should be written as "Object"`), l5.push(e6));
        if (o4.length > 0) {
          let e6 = a5.indexOf(`object`);
          e6 !== -1 && (a5.splice(a5, e6, 1), o4.push(`Object`));
        }
        if (a5.length > 0) {
          switch (a5.length) {
            case 1:
              i5 += `of type ${a5[0]}`;
              break;
            case 2:
              i5 += `one of type ${a5[0]} or ${a5[1]}`;
              break;
            default: {
              let e6 = a5.pop();
              i5 += `one of type ${a5.join(`, `)}, or ${e6}`;
            }
          }
          (o4.length > 0 || l5.length > 0) && (i5 += ` or `);
        }
        if (o4.length > 0) {
          switch (o4.length) {
            case 1:
              i5 += `an instance of ${o4[0]}`;
              break;
            case 2:
              i5 += `an instance of ${o4[0]} or ${o4[1]}`;
              break;
            default: {
              let e6 = o4.pop();
              i5 += `an instance of ${o4.join(`, `)}, or ${e6}`;
            }
          }
          l5.length > 0 && (i5 += ` or `);
        }
        switch (l5.length) {
          case 0:
            break;
          case 1:
            l5[0].toLowerCase() !== l5[0] && (i5 += `an `), i5 += `${l5[0]}`;
            break;
          case 2:
            i5 += `one of ${l5[0]} or ${l5[1]}`;
            break;
          default: {
            let e6 = l5.pop();
            i5 += `one of ${l5.join(`, `)}, or ${e6}`;
          }
        }
        if (n5 == null) i5 += `. Received ${n5}`;
        else if (typeof n5 == `function` && n5.name) i5 += `. Received function ${n5.name}`;
        else if (typeof n5 == `object`) {
          var d4;
          if ((d4 = n5.constructor) != null && d4.name) i5 += `. Received an instance of ${n5.constructor.name}`;
          else {
            let e6 = r3(n5, { depth: -1 });
            i5 += `. Received ${e6}`;
          }
        } else {
          let e6 = r3(n5, { colors: false });
          e6.length > 25 && (e6 = `${e6.slice(0, 25)}...`), i5 += `. Received type ${typeof n5} (${e6})`;
        }
        return i5;
      }, TypeError), p3(`ERR_INVALID_ARG_VALUE`, (e5, t5, n5 = `is invalid`) => {
        let i5 = r3(t5);
        return i5.length > 128 && (i5 = i5.slice(0, 128) + `...`), `The ${e5.includes(`.`) ? `property` : `argument`} '${e5}' ${n5}. Received ${i5}`;
      }, TypeError), p3(`ERR_INVALID_RETURN_VALUE`, (e5, t5, n5) => {
        var r4;
        return `Expected ${e5} to be returned from the "${t5}" function but got ${n5 != null && (r4 = n5.constructor) != null && r4.name ? `instance of ${n5.constructor.name}` : `type ${typeof n5}`}.`;
      }, TypeError), p3(`ERR_MISSING_ARGS`, (...e5) => {
        u5(e5.length > 0, `At least one arg needs to be specified`);
        let t5, n5 = e5.length;
        switch (e5 = (Array.isArray(e5) ? e5 : [e5]).map((e6) => `"${e6}"`).join(` or `), n5) {
          case 1:
            t5 += `The ${e5[0]} argument`;
            break;
          case 2:
            t5 += `The ${e5[0]} and ${e5[1]} arguments`;
            break;
          default:
            {
              let n6 = e5.pop();
              t5 += `The ${e5.join(`, `)}, and ${n6} arguments`;
            }
            break;
        }
        return `${t5} must be specified`;
      }, TypeError), p3(`ERR_OUT_OF_RANGE`, (e5, t5, n5) => {
        u5(t5, `Missing "range" argument`);
        let i5;
        if (Number.isInteger(n5) && Math.abs(n5) > 2 ** 32) i5 = d3(String(n5));
        else if (typeof n5 == `bigint`) {
          i5 = String(n5);
          let e6 = BigInt(2) ** BigInt(32);
          (n5 > e6 || n5 < -e6) && (i5 = d3(i5)), i5 += `n`;
        } else i5 = r3(n5);
        return `The value of "${e5}" is out of range. It must be ${t5}. Received ${i5}`;
      }, RangeError), p3(`ERR_MULTIPLE_CALLBACK`, `Callback called multiple times`, Error), p3(`ERR_METHOD_NOT_IMPLEMENTED`, `The %s method is not implemented`, Error), p3(`ERR_STREAM_ALREADY_FINISHED`, `Cannot call %s after a stream was finished`, Error), p3(`ERR_STREAM_CANNOT_PIPE`, `Cannot pipe, not readable`, Error), p3(`ERR_STREAM_DESTROYED`, `Cannot call %s after a stream was destroyed`, Error), p3(`ERR_STREAM_NULL_VALUES`, `May not write null values to stream`, TypeError), p3(`ERR_STREAM_PREMATURE_CLOSE`, `Premature close`, Error), p3(`ERR_STREAM_PUSH_AFTER_EOF`, `stream.push() after EOF`, Error), p3(`ERR_STREAM_UNSHIFT_AFTER_END_EVENT`, `stream.unshift() after end event`, Error), p3(`ERR_STREAM_WRITE_AFTER_END`, `write after end`, Error), p3(`ERR_UNKNOWN_ENCODING`, `Unknown encoding: %s`, TypeError), t4.exports = { AbortError: g4, aggregateTwoErrors: m4(h5), hideStackFrames: m4, codes: l4 };
    }));
    We = f(((e4, t4) => {
      Object.defineProperty(e4, `__esModule`, { value: true });
      let n4 = /* @__PURE__ */ new WeakMap(), r3 = /* @__PURE__ */ new WeakMap();
      function i4(e5) {
        let t5 = n4.get(e5);
        return console.assert(t5 != null, `'this' is expected an Event object, but got`, e5), t5;
      }
      function a4(e5) {
        if (e5.passiveListener != null) {
          typeof console < `u` && typeof console.error == `function` && console.error(`Unable to preventDefault inside passive event listener invocation.`, e5.passiveListener);
          return;
        }
        e5.event.cancelable && (e5.canceled = true, typeof e5.event.preventDefault == `function` && e5.event.preventDefault());
      }
      function o3(e5, t5) {
        n4.set(this, { eventTarget: e5, event: t5, eventPhase: 2, currentTarget: e5, canceled: false, stopped: false, immediateStopped: false, passiveListener: null, timeStamp: t5.timeStamp || Date.now() }), Object.defineProperty(this, `isTrusted`, { value: false, enumerable: true });
        let r4 = Object.keys(t5);
        for (let e6 = 0; e6 < r4.length; ++e6) {
          let t6 = r4[e6];
          t6 in this || Object.defineProperty(this, t6, s3(t6));
        }
      }
      o3.prototype = { get type() {
        return i4(this).event.type;
      }, get target() {
        return i4(this).eventTarget;
      }, get currentTarget() {
        return i4(this).currentTarget;
      }, composedPath() {
        let e5 = i4(this).currentTarget;
        return e5 == null ? [] : [e5];
      }, get NONE() {
        return 0;
      }, get CAPTURING_PHASE() {
        return 1;
      }, get AT_TARGET() {
        return 2;
      }, get BUBBLING_PHASE() {
        return 3;
      }, get eventPhase() {
        return i4(this).eventPhase;
      }, stopPropagation() {
        let e5 = i4(this);
        e5.stopped = true, typeof e5.event.stopPropagation == `function` && e5.event.stopPropagation();
      }, stopImmediatePropagation() {
        let e5 = i4(this);
        e5.stopped = true, e5.immediateStopped = true, typeof e5.event.stopImmediatePropagation == `function` && e5.event.stopImmediatePropagation();
      }, get bubbles() {
        return !!i4(this).event.bubbles;
      }, get cancelable() {
        return !!i4(this).event.cancelable;
      }, preventDefault() {
        a4(i4(this));
      }, get defaultPrevented() {
        return i4(this).canceled;
      }, get composed() {
        return !!i4(this).event.composed;
      }, get timeStamp() {
        return i4(this).timeStamp;
      }, get srcElement() {
        return i4(this).eventTarget;
      }, get cancelBubble() {
        return i4(this).stopped;
      }, set cancelBubble(e5) {
        if (!e5) return;
        let t5 = i4(this);
        t5.stopped = true, typeof t5.event.cancelBubble == `boolean` && (t5.event.cancelBubble = true);
      }, get returnValue() {
        return !i4(this).canceled;
      }, set returnValue(e5) {
        e5 || a4(i4(this));
      }, initEvent() {
      } }, Object.defineProperty(o3.prototype, `constructor`, { value: o3, configurable: true, writable: true }), typeof window < `u` && window.Event !== void 0 && (Object.setPrototypeOf(o3.prototype, window.Event.prototype), r3.set(window.Event.prototype, o3));
      function s3(e5) {
        return { get() {
          return i4(this).event[e5];
        }, set(t5) {
          i4(this).event[e5] = t5;
        }, configurable: true, enumerable: true };
      }
      function c4(e5) {
        return { value() {
          let t5 = i4(this).event;
          return t5[e5].apply(t5, arguments);
        }, configurable: true, enumerable: true };
      }
      function l4(e5, t5) {
        let n5 = Object.keys(t5);
        if (n5.length === 0) return e5;
        function r4(t6, n6) {
          e5.call(this, t6, n6);
        }
        r4.prototype = Object.create(e5.prototype, { constructor: { value: r4, configurable: true, writable: true } });
        for (let i5 = 0; i5 < n5.length; ++i5) {
          let a5 = n5[i5];
          if (!(a5 in e5.prototype)) {
            let e6 = typeof Object.getOwnPropertyDescriptor(t5, a5).value == `function`;
            Object.defineProperty(r4.prototype, a5, e6 ? c4(a5) : s3(a5));
          }
        }
        return r4;
      }
      function u5(e5) {
        if (e5 == null || e5 === Object.prototype) return o3;
        let t5 = r3.get(e5);
        return t5 ?? (t5 = l4(u5(Object.getPrototypeOf(e5)), e5), r3.set(e5, t5)), t5;
      }
      function d3(e5, t5) {
        return new (u5(Object.getPrototypeOf(t5)))(e5, t5);
      }
      function f3(e5) {
        return i4(e5).immediateStopped;
      }
      function p3(e5, t5) {
        i4(e5).eventPhase = t5;
      }
      function m4(e5, t5) {
        i4(e5).currentTarget = t5;
      }
      function h5(e5, t5) {
        i4(e5).passiveListener = t5;
      }
      let g4 = /* @__PURE__ */ new WeakMap();
      function _4(e5) {
        return typeof e5 == `object` && !!e5;
      }
      function v4(e5) {
        let t5 = g4.get(e5);
        if (t5 == null) throw TypeError(`'this' is expected an EventTarget object, but got another value.`);
        return t5;
      }
      function y5(e5) {
        return { get() {
          let t5 = v4(this).get(e5);
          for (; t5 != null; ) {
            if (t5.listenerType === 3) return t5.listener;
            t5 = t5.next;
          }
          return null;
        }, set(t5) {
          typeof t5 != `function` && !_4(t5) && (t5 = null);
          let n5 = v4(this), r4 = null, i5 = n5.get(e5);
          for (; i5 != null; ) i5.listenerType === 3 ? r4 === null ? i5.next === null ? n5.delete(e5) : n5.set(e5, i5.next) : r4.next = i5.next : r4 = i5, i5 = i5.next;
          if (t5 !== null) {
            let i6 = { listener: t5, listenerType: 3, passive: false, once: false, next: null };
            r4 === null ? n5.set(e5, i6) : r4.next = i6;
          }
        }, configurable: true, enumerable: true };
      }
      function b4(e5, t5) {
        Object.defineProperty(e5, `on${t5}`, y5(t5));
      }
      function x4(e5) {
        function t5() {
          S4.call(this);
        }
        t5.prototype = Object.create(S4.prototype, { constructor: { value: t5, configurable: true, writable: true } });
        for (let n5 = 0; n5 < e5.length; ++n5) b4(t5.prototype, e5[n5]);
        return t5;
      }
      function S4() {
        if (this instanceof S4) {
          g4.set(this, /* @__PURE__ */ new Map());
          return;
        }
        if (arguments.length === 1 && Array.isArray(arguments[0])) return x4(arguments[0]);
        if (arguments.length > 0) {
          let e5 = Array(arguments.length);
          for (let t5 = 0; t5 < arguments.length; ++t5) e5[t5] = arguments[t5];
          return x4(e5);
        }
        throw TypeError(`Cannot call a class as a function`);
      }
      S4.prototype = { addEventListener(e5, t5, n5) {
        if (t5 == null) return;
        if (typeof t5 != `function` && !_4(t5)) throw TypeError(`'listener' should be a function or an object.`);
        let r4 = v4(this), i5 = _4(n5), a5 = (i5 ? n5.capture : n5) ? 1 : 2, o4 = { listener: t5, listenerType: a5, passive: i5 && !!n5.passive, once: i5 && !!n5.once, next: null }, s4 = r4.get(e5);
        if (s4 === void 0) {
          r4.set(e5, o4);
          return;
        }
        let c5 = null;
        for (; s4 != null; ) {
          if (s4.listener === t5 && s4.listenerType === a5) return;
          c5 = s4, s4 = s4.next;
        }
        c5.next = o4;
      }, removeEventListener(e5, t5, n5) {
        if (t5 == null) return;
        let r4 = v4(this), i5 = (_4(n5) ? n5.capture : n5) ? 1 : 2, a5 = null, o4 = r4.get(e5);
        for (; o4 != null; ) {
          if (o4.listener === t5 && o4.listenerType === i5) {
            a5 === null ? o4.next === null ? r4.delete(e5) : r4.set(e5, o4.next) : a5.next = o4.next;
            return;
          }
          a5 = o4, o4 = o4.next;
        }
      }, dispatchEvent(e5) {
        if (e5 == null || typeof e5.type != `string`) throw TypeError(`"event.type" should be a string.`);
        let t5 = v4(this), n5 = e5.type, r4 = t5.get(n5);
        if (r4 == null) return true;
        let i5 = d3(this, e5), a5 = null;
        for (; r4 != null; ) {
          if (r4.once ? a5 === null ? r4.next === null ? t5.delete(n5) : t5.set(n5, r4.next) : a5.next = r4.next : a5 = r4, h5(i5, r4.passive ? r4.listener : null), typeof r4.listener == `function`) try {
            r4.listener.call(this, i5);
          } catch (e6) {
            typeof console < `u` && typeof console.error == `function` && console.error(e6);
          }
          else r4.listenerType !== 3 && typeof r4.listener.handleEvent == `function` && r4.listener.handleEvent(i5);
          if (f3(i5)) break;
          r4 = r4.next;
        }
        return h5(i5, null), p3(i5, 0), m4(i5, null), !i5.defaultPrevented;
      } }, Object.defineProperty(S4.prototype, `constructor`, { value: S4, configurable: true, writable: true }), typeof window < `u` && window.EventTarget !== void 0 && Object.setPrototypeOf(S4.prototype, window.EventTarget.prototype), e4.defineEventAttribute = b4, e4.EventTarget = S4, e4.default = S4, t4.exports = S4, t4.exports.EventTarget = t4.exports.default = S4, t4.exports.defineEventAttribute = b4;
    }));
    Ge = f(((e4, t4) => {
      Object.defineProperty(e4, `__esModule`, { value: true });
      var n4 = We(), r3 = class extends n4.EventTarget {
        constructor() {
          throw super(), TypeError(`AbortSignal cannot be constructed directly`);
        }
        get aborted() {
          let e5 = o3.get(this);
          if (typeof e5 != `boolean`) throw TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? `null` : typeof this}`);
          return e5;
        }
      };
      n4.defineEventAttribute(r3.prototype, `abort`);
      function i4() {
        let e5 = Object.create(r3.prototype);
        return n4.EventTarget.call(e5), o3.set(e5, false), e5;
      }
      function a4(e5) {
        o3.get(e5) === false && (o3.set(e5, true), e5.dispatchEvent({ type: `abort` }));
      }
      let o3 = /* @__PURE__ */ new WeakMap();
      Object.defineProperties(r3.prototype, { aborted: { enumerable: true } }), typeof Symbol == `function` && typeof Symbol.toStringTag == `symbol` && Object.defineProperty(r3.prototype, Symbol.toStringTag, { configurable: true, value: `AbortSignal` });
      var s3 = class {
        constructor() {
          c4.set(this, i4());
        }
        get signal() {
          return l4(this);
        }
        abort() {
          a4(l4(this));
        }
      };
      let c4 = /* @__PURE__ */ new WeakMap();
      function l4(e5) {
        let t5 = c4.get(e5);
        if (t5 == null) throw TypeError(`Expected 'this' to be an 'AbortController' object, but got ${e5 === null ? `null` : typeof e5}`);
        return t5;
      }
      Object.defineProperties(s3.prototype, { signal: { enumerable: true }, abort: { enumerable: true } }), typeof Symbol == `function` && typeof Symbol.toStringTag == `symbol` && Object.defineProperty(s3.prototype, Symbol.toStringTag, { configurable: true, value: `AbortController` }), e4.AbortController = s3, e4.AbortSignal = r3, e4.default = s3, t4.exports = s3, t4.exports.AbortController = t4.exports.default = s3, t4.exports.AbortSignal = r3;
    }));
    Ke = f(((e4, t4) => {
      let r3 = h2(`buffer`), { format: i4, inspect: a4 } = He(), { codes: { ERR_INVALID_ARG_TYPE: o3 } } = Ue(), { kResistStopPropagation: s3, AggregateError: c4, SymbolDispose: l4 } = Ve(), u5 = globalThis.AbortSignal || Ge().AbortSignal, d3 = globalThis.AbortController || Ge().AbortController, f3 = Object.getPrototypeOf(async function() {
      }).constructor, p3 = globalThis.Blob || r3.Blob, m4 = p3 === void 0 ? function(e5) {
        return false;
      } : function(e5) {
        return e5 instanceof p3;
      }, h5 = (e5, t5) => {
        if (e5 !== void 0 && (typeof e5 != `object` || !e5 || !(`aborted` in e5))) throw new o3(t5, `AbortSignal`, e5);
      }, g4 = (e5, t5) => {
        if (typeof e5 != `function`) throw new o3(t5, `Function`, e5);
      };
      t4.exports = { AggregateError: c4, kEmptyObject: Object.freeze({}), once(e5) {
        let t5 = false;
        return function(...n4) {
          t5 || (t5 = true, e5.apply(this, n4));
        };
      }, createDeferredPromise: function() {
        let e5, t5;
        return { promise: new Promise((n4, r4) => {
          e5 = n4, t5 = r4;
        }), resolve: e5, reject: t5 };
      }, promisify(e5) {
        return new Promise((t5, n4) => {
          e5((e6, ...r4) => e6 ? n4(e6) : t5(...r4));
        });
      }, debuglog() {
        return function() {
        };
      }, format: i4, inspect: a4, types: { isAsyncFunction(e5) {
        return e5 instanceof f3;
      }, isArrayBufferView(e5) {
        return ArrayBuffer.isView(e5);
      } }, isBlob: m4, deprecate(e5, t5) {
        return e5;
      }, addAbortListener: h2(`events`).addAbortListener || function(e5, t5) {
        if (e5 === void 0) throw new o3(`signal`, `AbortSignal`, e5);
        h5(e5, `signal`), g4(t5, `listener`);
        let n4;
        return e5.aborted ? queueMicrotask(() => t5()) : (e5.addEventListener(`abort`, t5, { __proto__: null, once: true, [s3]: true }), n4 = () => {
          e5.removeEventListener(`abort`, t5);
        }), { __proto__: null, [l4]() {
          var e6;
          (e6 = n4) == null || e6();
        } };
      }, AbortSignalAny: u5.any || function(e5) {
        if (e5.length === 1) return e5[0];
        let t5 = new d3(), n4 = () => t5.abort();
        return e5.forEach((e6) => {
          h5(e6, `signals`), e6.addEventListener(`abort`, n4, { once: true });
        }), t5.signal.addEventListener(`abort`, () => {
          e5.forEach((e6) => e6.removeEventListener(`abort`, n4));
        }, { once: true }), t5.signal;
      } }, t4.exports.promisify.custom = /* @__PURE__ */ Symbol.for(`nodejs.util.promisify.custom`);
    }));
    qe = f(((e4, t4) => {
      let { ArrayIsArray: n4, ArrayPrototypeIncludes: r3, ArrayPrototypeJoin: i4, ArrayPrototypeMap: a4, NumberIsInteger: o3, NumberIsNaN: s3, NumberMAX_SAFE_INTEGER: c4, NumberMIN_SAFE_INTEGER: l4, NumberParseInt: u5, ObjectPrototypeHasOwnProperty: d3, RegExpPrototypeExec: f3, String: p3, StringPrototypeToUpperCase: m4, StringPrototypeTrim: h5 } = Ve(), { hideStackFrames: g4, codes: { ERR_SOCKET_BAD_PORT: _4, ERR_INVALID_ARG_TYPE: v4, ERR_INVALID_ARG_VALUE: y5, ERR_OUT_OF_RANGE: b4, ERR_UNKNOWN_SIGNAL: x4 } } = Ue(), { normalizeEncoding: S4 } = Ke(), { isAsyncFunction: C5, isArrayBufferView: w4 } = Ke().types, T4 = {};
      function E4(e5) {
        return e5 === (e5 | 0);
      }
      function D4(e5) {
        return e5 === e5 >>> 0;
      }
      let O4 = /^[0-7]+$/;
      function k4(e5, t5, n5) {
        if (e5 === void 0 && (e5 = n5), typeof e5 == `string`) {
          if (f3(O4, e5) === null) throw new y5(t5, e5, `must be a 32-bit unsigned integer or an octal string`);
          e5 = u5(e5, 8);
        }
        return M4(e5, t5), e5;
      }
      let A4 = g4((e5, t5, n5 = l4, r4 = c4) => {
        if (typeof e5 != `number`) throw new v4(t5, `number`, e5);
        if (!o3(e5)) throw new b4(t5, `an integer`, e5);
        if (e5 < n5 || e5 > r4) throw new b4(t5, `>= ${n5} && <= ${r4}`, e5);
      }), j4 = g4((e5, t5, n5 = -2147483648, r4 = 2147483647) => {
        if (typeof e5 != `number`) throw new v4(t5, `number`, e5);
        if (!o3(e5)) throw new b4(t5, `an integer`, e5);
        if (e5 < n5 || e5 > r4) throw new b4(t5, `>= ${n5} && <= ${r4}`, e5);
      }), M4 = g4((e5, t5, n5 = false) => {
        if (typeof e5 != `number`) throw new v4(t5, `number`, e5);
        if (!o3(e5)) throw new b4(t5, `an integer`, e5);
        let r4 = +!!n5, i5 = 4294967295;
        if (e5 < r4 || e5 > i5) throw new b4(t5, `>= ${r4} && <= ${i5}`, e5);
      });
      function N4(e5, t5) {
        if (typeof e5 != `string`) throw new v4(t5, `string`, e5);
      }
      function P4(e5, t5, n5 = void 0, r4) {
        if (typeof e5 != `number`) throw new v4(t5, `number`, e5);
        if (n5 != null && e5 < n5 || r4 != null && e5 > r4 || (n5 != null || r4 != null) && s3(e5)) throw new b4(t5, `${n5 == null ? `` : `>= ${n5}`}${n5 != null && r4 != null ? ` && ` : ``}${r4 == null ? `` : `<= ${r4}`}`, e5);
      }
      let F4 = g4((e5, t5, n5) => {
        if (!r3(n5, e5)) throw new y5(t5, e5, `must be one of: ` + i4(a4(n5, (e6) => typeof e6 == `string` ? `'${e6}'` : p3(e6)), `, `));
      });
      function ee3(e5, t5) {
        if (typeof e5 != `boolean`) throw new v4(t5, `boolean`, e5);
      }
      function I5(e5, t5, n5) {
        return e5 == null || !d3(e5, t5) ? n5 : e5[t5];
      }
      let L4 = g4((e5, t5, r4 = null) => {
        let i5 = I5(r4, `allowArray`, false), a5 = I5(r4, `allowFunction`, false);
        if (!I5(r4, `nullable`, false) && e5 === null || !i5 && n4(e5) || typeof e5 != `object` && (!a5 || typeof e5 != `function`)) throw new v4(t5, `Object`, e5);
      }), R5 = g4((e5, t5) => {
        if (e5 != null && typeof e5 != `object` && typeof e5 != `function`) throw new v4(t5, `a dictionary`, e5);
      }), te3 = g4((e5, t5, r4 = 0) => {
        if (!n4(e5)) throw new v4(t5, `Array`, e5);
        if (e5.length < r4) throw new y5(t5, e5, `must be longer than ${r4}`);
      });
      function ne3(e5, t5) {
        te3(e5, t5);
        for (let n5 = 0; n5 < e5.length; n5++) N4(e5[n5], `${t5}[${n5}]`);
      }
      function z4(e5, t5) {
        te3(e5, t5);
        for (let n5 = 0; n5 < e5.length; n5++) ee3(e5[n5], `${t5}[${n5}]`);
      }
      function B4(e5, t5) {
        te3(e5, t5);
        for (let n5 = 0; n5 < e5.length; n5++) {
          let r4 = e5[n5], i5 = `${t5}[${n5}]`;
          if (r4 == null) throw new v4(i5, `AbortSignal`, r4);
          ae3(r4, i5);
        }
      }
      function V4(e5, t5 = `signal`) {
        if (N4(e5, t5), T4[e5] === void 0) throw T4[m4(e5)] === void 0 ? new x4(e5) : new x4(e5 + ` (signals must use all capital letters)`);
      }
      let H3 = g4((e5, t5 = `buffer`) => {
        if (!w4(e5)) throw new v4(t5, [`Buffer`, `TypedArray`, `DataView`], e5);
      });
      function re3(e5, t5) {
        let n5 = S4(t5), r4 = e5.length;
        if (n5 === `hex` && r4 % 2 != 0) throw new y5(`encoding`, t5, `is invalid for data of length ${r4}`);
      }
      function ie3(e5, t5 = `Port`, n5 = true) {
        if (typeof e5 != `number` && typeof e5 != `string` || typeof e5 == `string` && h5(e5).length === 0 || +e5 != e5 >>> 0 || e5 > 65535 || e5 === 0 && !n5) throw new _4(t5, e5, n5);
        return e5 | 0;
      }
      let ae3 = g4((e5, t5) => {
        if (e5 !== void 0 && (typeof e5 != `object` || !e5 || !(`aborted` in e5))) throw new v4(t5, `AbortSignal`, e5);
      }), U4 = g4((e5, t5) => {
        if (typeof e5 != `function`) throw new v4(t5, `Function`, e5);
      }), W3 = g4((e5, t5) => {
        if (typeof e5 != `function` || C5(e5)) throw new v4(t5, `Function`, e5);
      }), oe3 = g4((e5, t5) => {
        if (e5 !== void 0) throw new v4(t5, `undefined`, e5);
      });
      function se3(e5, t5, n5) {
        if (!r3(n5, e5)) throw new v4(t5, `('${i4(n5, `|`)}')`, e5);
      }
      let G3 = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
      function K3(e5, t5) {
        if (e5 === void 0 || !f3(G3, e5)) throw new y5(t5, e5, `must be an array or string of format "</styles.css>; rel=preload; as=style"`);
      }
      function ce3(e5) {
        if (typeof e5 == `string`) return K3(e5, `hints`), e5;
        if (n4(e5)) {
          let t5 = e5.length, n5 = ``;
          if (t5 === 0) return n5;
          for (let r4 = 0; r4 < t5; r4++) {
            let i5 = e5[r4];
            K3(i5, `hints`), n5 += i5, r4 !== t5 - 1 && (n5 += `, `);
          }
          return n5;
        }
        throw new y5(`hints`, e5, `must be an array or string of format "</styles.css>; rel=preload; as=style"`);
      }
      t4.exports = { isInt32: E4, isUint32: D4, parseFileMode: k4, validateArray: te3, validateStringArray: ne3, validateBooleanArray: z4, validateAbortSignalArray: B4, validateBoolean: ee3, validateBuffer: H3, validateDictionary: R5, validateEncoding: re3, validateFunction: U4, validateInt32: j4, validateInteger: A4, validateNumber: P4, validateObject: L4, validateOneOf: F4, validatePlainFunction: W3, validatePort: ie3, validateSignalName: V4, validateString: N4, validateUint32: M4, validateUndefined: oe3, validateUnion: se3, validateAbortSignal: ae3, validateLinkHeaderValue: ce3 };
    }));
    Je = f(((e4, t4) => {
      t4.exports = global.process;
    }));
    Ye = f(((e4, t4) => {
      let { SymbolAsyncIterator: n4, SymbolIterator: r3, SymbolFor: i4 } = Ve(), a4 = i4(`nodejs.stream.destroyed`), o3 = i4(`nodejs.stream.errored`), s3 = i4(`nodejs.stream.readable`), c4 = i4(`nodejs.stream.writable`), l4 = i4(`nodejs.stream.disturbed`), u5 = i4(`nodejs.webstream.isClosedPromise`), d3 = i4(`nodejs.webstream.controllerErrorFunction`);
      function f3(e5, t5 = false) {
        var _a4;
        return !!(e5 && typeof e5.pipe == `function` && typeof e5.on == `function` && (!t5 || typeof e5.pause == `function` && typeof e5.resume == `function`) && (!e5._writableState || ((_a4 = e5._readableState) == null ? void 0 : _a4.readable) !== false) && (!e5._writableState || e5._readableState));
      }
      function p3(e5) {
        var _a4;
        return !!(e5 && typeof e5.write == `function` && typeof e5.on == `function` && (!e5._readableState || ((_a4 = e5._writableState) == null ? void 0 : _a4.writable) !== false));
      }
      function m4(e5) {
        return !!(e5 && typeof e5.pipe == `function` && e5._readableState && typeof e5.on == `function` && typeof e5.write == `function`);
      }
      function h5(e5) {
        return e5 && (e5._readableState || e5._writableState || typeof e5.write == `function` && typeof e5.on == `function` || typeof e5.pipe == `function` && typeof e5.on == `function`);
      }
      function g4(e5) {
        return !!(e5 && !h5(e5) && typeof e5.pipeThrough == `function` && typeof e5.getReader == `function` && typeof e5.cancel == `function`);
      }
      function _4(e5) {
        return !!(e5 && !h5(e5) && typeof e5.getWriter == `function` && typeof e5.abort == `function`);
      }
      function v4(e5) {
        return !!(e5 && !h5(e5) && typeof e5.readable == `object` && typeof e5.writable == `object`);
      }
      function y5(e5) {
        return g4(e5) || _4(e5) || v4(e5);
      }
      function b4(e5, t5) {
        return e5 == null ? false : t5 === true ? typeof e5[n4] == `function` : t5 === false ? typeof e5[r3] == `function` : typeof e5[n4] == `function` || typeof e5[r3] == `function`;
      }
      function x4(e5) {
        if (!h5(e5)) return null;
        let t5 = e5._writableState, n5 = e5._readableState, r4 = t5 || n5;
        return !!(e5.destroyed || e5[a4] || r4 != null && r4.destroyed);
      }
      function S4(e5) {
        if (!p3(e5)) return null;
        if (e5.writableEnded === true) return true;
        let t5 = e5._writableState;
        return t5 != null && t5.errored ? false : typeof (t5 == null ? void 0 : t5.ended) == `boolean` ? t5.ended : null;
      }
      function C5(e5, t5) {
        if (!p3(e5)) return null;
        if (e5.writableFinished === true) return true;
        let n5 = e5._writableState;
        return n5 != null && n5.errored ? false : typeof (n5 == null ? void 0 : n5.finished) == `boolean` ? !!(n5.finished || t5 === false && n5.ended === true && n5.length === 0) : null;
      }
      function w4(e5) {
        if (!f3(e5)) return null;
        if (e5.readableEnded === true) return true;
        let t5 = e5._readableState;
        return !t5 || t5.errored ? false : typeof (t5 == null ? void 0 : t5.ended) == `boolean` ? t5.ended : null;
      }
      function T4(e5, t5) {
        if (!f3(e5)) return null;
        let n5 = e5._readableState;
        return n5 != null && n5.errored ? false : typeof (n5 == null ? void 0 : n5.endEmitted) == `boolean` ? !!(n5.endEmitted || t5 === false && n5.ended === true && n5.length === 0) : null;
      }
      function E4(e5) {
        return e5 && e5[s3] != null ? e5[s3] : typeof (e5 == null ? void 0 : e5.readable) == `boolean` ? x4(e5) ? false : f3(e5) && e5.readable && !T4(e5) : null;
      }
      function D4(e5) {
        return e5 && e5[c4] != null ? e5[c4] : typeof (e5 == null ? void 0 : e5.writable) == `boolean` ? x4(e5) ? false : p3(e5) && e5.writable && !S4(e5) : null;
      }
      function O4(e5, t5) {
        return h5(e5) ? x4(e5) ? true : !((t5 == null ? void 0 : t5.readable) !== false && E4(e5) || (t5 == null ? void 0 : t5.writable) !== false && D4(e5)) : null;
      }
      function k4(e5) {
        var _a4;
        return h5(e5) ? e5.writableErrored ? e5.writableErrored : ((_a4 = e5._writableState) == null ? void 0 : _a4.errored) ?? null : null;
      }
      function A4(e5) {
        var _a4;
        return h5(e5) ? e5.readableErrored ? e5.readableErrored : ((_a4 = e5._readableState) == null ? void 0 : _a4.errored) ?? null : null;
      }
      function j4(e5) {
        if (!h5(e5)) return null;
        if (typeof e5.closed == `boolean`) return e5.closed;
        let t5 = e5._writableState, n5 = e5._readableState;
        return typeof (t5 == null ? void 0 : t5.closed) == `boolean` || typeof (n5 == null ? void 0 : n5.closed) == `boolean` ? (t5 == null ? void 0 : t5.closed) || (n5 == null ? void 0 : n5.closed) : typeof e5._closed == `boolean` && M4(e5) ? e5._closed : null;
      }
      function M4(e5) {
        return typeof e5._closed == `boolean` && typeof e5._defaultKeepAlive == `boolean` && typeof e5._removedConnection == `boolean` && typeof e5._removedContLen == `boolean`;
      }
      function N4(e5) {
        return typeof e5._sent100 == `boolean` && M4(e5);
      }
      function P4(e5) {
        var _a4;
        return typeof e5._consuming == `boolean` && typeof e5._dumped == `boolean` && ((_a4 = e5.req) == null ? void 0 : _a4.upgradeOrConnect) === void 0;
      }
      function F4(e5) {
        if (!h5(e5)) return null;
        let t5 = e5._writableState, n5 = e5._readableState, r4 = t5 || n5;
        return !r4 && N4(e5) || !!(r4 && r4.autoDestroy && r4.emitClose && r4.closed === false);
      }
      function ee3(e5) {
        return !!(e5 && (e5[l4] ?? (e5.readableDidRead || e5.readableAborted)));
      }
      function I5(e5) {
        var _a4, _b3, _c3, _d3;
        return !!(e5 && (e5[o3] ?? e5.readableErrored ?? e5.writableErrored ?? ((_a4 = e5._readableState) == null ? void 0 : _a4.errorEmitted) ?? ((_b3 = e5._writableState) == null ? void 0 : _b3.errorEmitted) ?? ((_c3 = e5._readableState) == null ? void 0 : _c3.errored) ?? ((_d3 = e5._writableState) == null ? void 0 : _d3.errored)));
      }
      t4.exports = { isDestroyed: x4, kIsDestroyed: a4, isDisturbed: ee3, kIsDisturbed: l4, isErrored: I5, kIsErrored: o3, isReadable: E4, kIsReadable: s3, kIsClosedPromise: u5, kControllerErrorFunction: d3, kIsWritable: c4, isClosed: j4, isDuplexNodeStream: m4, isFinished: O4, isIterable: b4, isReadableNodeStream: f3, isReadableStream: g4, isReadableEnded: w4, isReadableFinished: T4, isReadableErrored: A4, isNodeStream: h5, isWebStream: y5, isWritable: D4, isWritableNodeStream: p3, isWritableStream: _4, isWritableEnded: S4, isWritableFinished: C5, isWritableErrored: k4, isServerRequest: P4, isServerResponse: N4, willEmitClose: F4, isTransformStream: v4 };
    }));
    Xe = f(((e4, t4) => {
      let n4 = Je(), { AbortError: r3, codes: i4 } = Ue(), { ERR_INVALID_ARG_TYPE: a4, ERR_STREAM_PREMATURE_CLOSE: o3 } = i4, { kEmptyObject: s3, once: c4 } = Ke(), { validateAbortSignal: l4, validateFunction: u5, validateObject: d3, validateBoolean: f3 } = qe(), { Promise: p3, PromisePrototypeThen: m4, SymbolDispose: h5 } = Ve(), { isClosed: g4, isReadable: _4, isReadableNodeStream: v4, isReadableStream: y5, isReadableFinished: b4, isReadableErrored: x4, isWritable: S4, isWritableNodeStream: C5, isWritableStream: w4, isWritableFinished: T4, isWritableErrored: E4, isNodeStream: D4, willEmitClose: O4, kIsClosedPromise: k4 } = Ye(), A4;
      function j4(e5) {
        return e5.setHeader && typeof e5.abort == `function`;
      }
      let M4 = () => {
      };
      function N4(e5, t5, i5) {
        if (arguments.length === 2 ? (i5 = t5, t5 = s3) : t5 == null ? t5 = s3 : d3(t5, `options`), u5(i5, `callback`), l4(t5.signal, `options.signal`), i5 = c4(i5), y5(e5) || w4(e5)) return P4(e5, t5, i5);
        if (!D4(e5)) throw new a4(`stream`, [`ReadableStream`, `WritableStream`, `Stream`], e5);
        let f4 = t5.readable ?? v4(e5), p4 = t5.writable ?? C5(e5), m5 = e5._writableState, k5 = e5._readableState, N5 = () => {
          e5.writable || I5();
        }, F5 = O4(e5) && v4(e5) === f4 && C5(e5) === p4, ee3 = T4(e5, false), I5 = () => {
          ee3 = true, e5.destroyed && (F5 = false), !(F5 && (!e5.readable || f4)) && (!f4 || L4) && i5.call(e5);
        }, L4 = b4(e5, false), R5 = () => {
          L4 = true, e5.destroyed && (F5 = false), !(F5 && (!e5.writable || p4)) && (!p4 || ee3) && i5.call(e5);
        }, te3 = (t6) => {
          i5.call(e5, t6);
        }, ne3 = g4(e5), z4 = () => {
          ne3 = true;
          let t6 = E4(e5) || x4(e5);
          if (t6 && typeof t6 != `boolean`) return i5.call(e5, t6);
          if (f4 && !L4 && v4(e5, true) && !b4(e5, false) || p4 && !ee3 && !T4(e5, false)) return i5.call(e5, new o3());
          i5.call(e5);
        }, B4 = () => {
          ne3 = true;
          let t6 = E4(e5) || x4(e5);
          if (t6 && typeof t6 != `boolean`) return i5.call(e5, t6);
          i5.call(e5);
        }, V4 = () => {
          e5.req.on(`finish`, I5);
        };
        j4(e5) ? (e5.on(`complete`, I5), F5 || e5.on(`abort`, z4), e5.req ? V4() : e5.on(`request`, V4)) : p4 && !m5 && (e5.on(`end`, N5), e5.on(`close`, N5)), !F5 && typeof e5.aborted == `boolean` && e5.on(`aborted`, z4), e5.on(`end`, R5), e5.on(`finish`, I5), t5.error !== false && e5.on(`error`, te3), e5.on(`close`, z4), ne3 ? n4.nextTick(z4) : m5 != null && m5.errorEmitted || k5 != null && k5.errorEmitted ? F5 || n4.nextTick(B4) : (!f4 && (!F5 || _4(e5)) && (ee3 || S4(e5) === false) || !p4 && (!F5 || S4(e5)) && (L4 || _4(e5) === false) || k5 && e5.req && e5.aborted) && n4.nextTick(B4);
        let H3 = () => {
          i5 = M4, e5.removeListener(`aborted`, z4), e5.removeListener(`complete`, I5), e5.removeListener(`abort`, z4), e5.removeListener(`request`, V4), e5.req && e5.req.removeListener(`finish`, I5), e5.removeListener(`end`, N5), e5.removeListener(`close`, N5), e5.removeListener(`finish`, I5), e5.removeListener(`end`, R5), e5.removeListener(`error`, te3), e5.removeListener(`close`, z4);
        };
        if (t5.signal && !ne3) {
          let a5 = () => {
            let n5 = i5;
            H3(), n5.call(e5, new r3(void 0, { cause: t5.signal.reason }));
          };
          if (t5.signal.aborted) n4.nextTick(a5);
          else {
            A4 ||= Ke().addAbortListener;
            let n5 = A4(t5.signal, a5), r4 = i5;
            i5 = c4((...t6) => {
              n5[h5](), r4.apply(e5, t6);
            });
          }
        }
        return H3;
      }
      function P4(e5, t5, i5) {
        let a5 = false, o4 = M4;
        if (t5.signal) if (o4 = () => {
          a5 = true, i5.call(e5, new r3(void 0, { cause: t5.signal.reason }));
        }, t5.signal.aborted) n4.nextTick(o4);
        else {
          A4 ||= Ke().addAbortListener;
          let n5 = A4(t5.signal, o4), r4 = i5;
          i5 = c4((...t6) => {
            n5[h5](), r4.apply(e5, t6);
          });
        }
        let s4 = (...t6) => {
          a5 || n4.nextTick(() => i5.apply(e5, t6));
        };
        return m4(e5[k4].promise, s4, s4), M4;
      }
      function F4(e5, t5) {
        var n5;
        let r4 = false;
        return t5 === null && (t5 = s3), (n5 = t5) != null && n5.cleanup && (f3(t5.cleanup, `cleanup`), r4 = t5.cleanup), new p3((n6, i5) => {
          let a5 = N4(e5, t5, (e6) => {
            r4 && a5(), e6 ? i5(e6) : n6();
          });
        });
      }
      t4.exports = N4, t4.exports.finished = F4;
    }));
    Ze = f(((e4, t4) => {
      let n4 = Je(), { aggregateTwoErrors: r3, codes: { ERR_MULTIPLE_CALLBACK: i4 }, AbortError: a4 } = Ue(), { Symbol: o3 } = Ve(), { kIsDestroyed: s3, isDestroyed: c4, isFinished: l4, isServerRequest: u5 } = Ye(), d3 = o3(`kDestroy`), f3 = o3(`kConstruct`);
      function p3(e5, t5, n5) {
        e5 && (e5.stack, t5 && !t5.errored && (t5.errored = e5), n5 && !n5.errored && (n5.errored = e5));
      }
      function m4(e5, t5) {
        let n5 = this._readableState, i5 = this._writableState, a5 = i5 || n5;
        return i5 != null && i5.destroyed || n5 != null && n5.destroyed ? (typeof t5 == `function` && t5(), this) : (p3(e5, i5, n5), i5 && (i5.destroyed = true), n5 && (n5.destroyed = true), a5.constructed ? h5(this, e5, t5) : this.once(d3, function(n6) {
          h5(this, r3(n6, e5), t5);
        }), this);
      }
      function h5(e5, t5, r4) {
        let i5 = false;
        function a5(t6) {
          if (i5) return;
          i5 = true;
          let a6 = e5._readableState, o4 = e5._writableState;
          p3(t6, o4, a6), o4 && (o4.closed = true), a6 && (a6.closed = true), typeof r4 == `function` && r4(t6), t6 ? n4.nextTick(g4, e5, t6) : n4.nextTick(_4, e5);
        }
        try {
          e5._destroy(t5 || null, a5);
        } catch (e6) {
          a5(e6);
        }
      }
      function g4(e5, t5) {
        v4(e5, t5), _4(e5);
      }
      function _4(e5) {
        let t5 = e5._readableState, n5 = e5._writableState;
        n5 && (n5.closeEmitted = true), t5 && (t5.closeEmitted = true), (n5 != null && n5.emitClose || t5 != null && t5.emitClose) && e5.emit(`close`);
      }
      function v4(e5, t5) {
        let n5 = e5._readableState, r4 = e5._writableState;
        r4 != null && r4.errorEmitted || n5 != null && n5.errorEmitted || (r4 && (r4.errorEmitted = true), n5 && (n5.errorEmitted = true), e5.emit(`error`, t5));
      }
      function y5() {
        let e5 = this._readableState, t5 = this._writableState;
        e5 && (e5.constructed = true, e5.closed = false, e5.closeEmitted = false, e5.destroyed = false, e5.errored = null, e5.errorEmitted = false, e5.reading = false, e5.ended = e5.readable === false, e5.endEmitted = e5.readable === false), t5 && (t5.constructed = true, t5.destroyed = false, t5.closed = false, t5.closeEmitted = false, t5.errored = null, t5.errorEmitted = false, t5.finalCalled = false, t5.prefinished = false, t5.ended = t5.writable === false, t5.ending = t5.writable === false, t5.finished = t5.writable === false);
      }
      function b4(e5, t5, r4) {
        let i5 = e5._readableState, a5 = e5._writableState;
        if (a5 != null && a5.destroyed || i5 != null && i5.destroyed) return this;
        i5 != null && i5.autoDestroy || a5 != null && a5.autoDestroy ? e5.destroy(t5) : t5 && (t5.stack, a5 && !a5.errored && (a5.errored = t5), i5 && !i5.errored && (i5.errored = t5), r4 ? n4.nextTick(v4, e5, t5) : v4(e5, t5));
      }
      function x4(e5, t5) {
        if (typeof e5._construct != `function`) return;
        let r4 = e5._readableState, i5 = e5._writableState;
        r4 && (r4.constructed = false), i5 && (i5.constructed = false), e5.once(f3, t5), !(e5.listenerCount(f3) > 1) && n4.nextTick(S4, e5);
      }
      function S4(e5) {
        let t5 = false;
        function r4(r5) {
          if (t5) {
            b4(e5, r5 ?? new i4());
            return;
          }
          t5 = true;
          let a5 = e5._readableState, o4 = e5._writableState, s4 = o4 || a5;
          a5 && (a5.constructed = true), o4 && (o4.constructed = true), s4.destroyed ? e5.emit(d3, r5) : r5 ? b4(e5, r5, true) : n4.nextTick(C5, e5);
        }
        try {
          e5._construct((e6) => {
            n4.nextTick(r4, e6);
          });
        } catch (e6) {
          n4.nextTick(r4, e6);
        }
      }
      function C5(e5) {
        e5.emit(f3);
      }
      function w4(e5) {
        return (e5 == null ? void 0 : e5.setHeader) && typeof e5.abort == `function`;
      }
      function T4(e5) {
        e5.emit(`close`);
      }
      function E4(e5, t5) {
        e5.emit(`error`, t5), n4.nextTick(T4, e5);
      }
      function D4(e5, t5) {
        !e5 || c4(e5) || (!t5 && !l4(e5) && (t5 = new a4()), u5(e5) ? (e5.socket = null, e5.destroy(t5)) : w4(e5) ? e5.abort() : w4(e5.req) ? e5.req.abort() : typeof e5.destroy == `function` ? e5.destroy(t5) : typeof e5.close == `function` ? e5.close() : t5 ? n4.nextTick(E4, e5, t5) : n4.nextTick(T4, e5), e5.destroyed || (e5[s3] = true));
      }
      t4.exports = { construct: x4, destroyer: D4, destroy: m4, undestroy: y5, errorOrDestroy: b4 };
    }));
    Qe = f(((e4, t4) => {
      let { ArrayIsArray: r3, ObjectSetPrototypeOf: i4 } = Ve(), { EventEmitter: a4 } = h2(`events`);
      function o3(e5) {
        a4.call(this, e5);
      }
      i4(o3.prototype, a4.prototype), i4(o3, a4), o3.prototype.pipe = function(e5, t5) {
        let n4 = this;
        function r4(t6) {
          e5.writable && e5.write(t6) === false && n4.pause && n4.pause();
        }
        n4.on(`data`, r4);
        function i5() {
          n4.readable && n4.resume && n4.resume();
        }
        e5.on(`drain`, i5), !e5._isStdio && (!t5 || t5.end !== false) && (n4.on(`end`, c4), n4.on(`close`, l4));
        let o4 = false;
        function c4() {
          o4 || (o4 = true, e5.end());
        }
        function l4() {
          o4 || (o4 = true, typeof e5.destroy == `function` && e5.destroy());
        }
        function u5(e6) {
          d3(), a4.listenerCount(this, `error`) === 0 && this.emit(`error`, e6);
        }
        s3(n4, `error`, u5), s3(e5, `error`, u5);
        function d3() {
          n4.removeListener(`data`, r4), e5.removeListener(`drain`, i5), n4.removeListener(`end`, c4), n4.removeListener(`close`, l4), n4.removeListener(`error`, u5), e5.removeListener(`error`, u5), n4.removeListener(`end`, d3), n4.removeListener(`close`, d3), e5.removeListener(`close`, d3);
        }
        return n4.on(`end`, d3), n4.on(`close`, d3), e5.on(`close`, d3), e5.emit(`pipe`, n4), e5;
      };
      function s3(e5, t5, n4) {
        if (typeof e5.prependListener == `function`) return e5.prependListener(t5, n4);
        !e5._events || !e5._events[t5] ? e5.on(t5, n4) : r3(e5._events[t5]) ? e5._events[t5].unshift(n4) : e5._events[t5] = [n4, e5._events[t5]];
      }
      t4.exports = { Stream: o3, prependListener: s3 };
    }));
    $e = f(((e4, t4) => {
      let { SymbolDispose: n4 } = Ve(), { AbortError: r3, codes: i4 } = Ue(), { isNodeStream: a4, isWebStream: o3, kControllerErrorFunction: s3 } = Ye(), c4 = Xe(), { ERR_INVALID_ARG_TYPE: l4 } = i4, u5, d3 = (e5, t5) => {
        if (typeof e5 != `object` || !(`aborted` in e5)) throw new l4(t5, `AbortSignal`, e5);
      };
      t4.exports.addAbortSignal = function(e5, n5) {
        if (d3(e5, `signal`), !a4(n5) && !o3(n5)) throw new l4(`stream`, [`ReadableStream`, `WritableStream`, `Stream`], n5);
        return t4.exports.addAbortSignalNoValidate(e5, n5);
      }, t4.exports.addAbortSignalNoValidate = function(e5, t5) {
        if (typeof e5 != `object` || !(`aborted` in e5)) return t5;
        let i5 = a4(t5) ? () => {
          t5.destroy(new r3(void 0, { cause: e5.reason }));
        } : () => {
          t5[s3](new r3(void 0, { cause: e5.reason }));
        };
        return e5.aborted ? i5() : (u5 ||= Ke().addAbortListener, c4(t5, u5(e5, i5)[n4])), t5;
      };
    }));
    et = f(((e4, t4) => {
      let { StringPrototypeSlice: r3, SymbolIterator: i4, TypedArrayPrototypeSet: a4, Uint8Array: o3 } = Ve(), { Buffer: s3 } = h2(`buffer`), { inspect: c4 } = Ke();
      t4.exports = class {
        constructor() {
          this.head = null, this.tail = null, this.length = 0;
        }
        push(e5) {
          let t5 = { data: e5, next: null };
          this.length > 0 ? this.tail.next = t5 : this.head = t5, this.tail = t5, ++this.length;
        }
        unshift(e5) {
          let t5 = { data: e5, next: this.head };
          this.length === 0 && (this.tail = t5), this.head = t5, ++this.length;
        }
        shift() {
          if (this.length === 0) return;
          let e5 = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, e5;
        }
        clear() {
          this.head = this.tail = null, this.length = 0;
        }
        join(e5) {
          if (this.length === 0) return ``;
          let t5 = this.head, n4 = `` + t5.data;
          for (; (t5 = t5.next) !== null; ) n4 += e5 + t5.data;
          return n4;
        }
        concat(e5) {
          if (this.length === 0) return s3.alloc(0);
          let t5 = s3.allocUnsafe(e5 >>> 0), n4 = this.head, r4 = 0;
          for (; n4; ) a4(t5, n4.data, r4), r4 += n4.data.length, n4 = n4.next;
          return t5;
        }
        consume(e5, t5) {
          let n4 = this.head.data;
          if (e5 < n4.length) {
            let t6 = n4.slice(0, e5);
            return this.head.data = n4.slice(e5), t6;
          }
          return e5 === n4.length ? this.shift() : t5 ? this._getString(e5) : this._getBuffer(e5);
        }
        first() {
          return this.head.data;
        }
        *[i4]() {
          for (let e5 = this.head; e5; e5 = e5.next) yield e5.data;
        }
        _getString(e5) {
          let t5 = ``, n4 = this.head, i5 = 0;
          do {
            let a5 = n4.data;
            if (e5 > a5.length) t5 += a5, e5 -= a5.length;
            else {
              e5 === a5.length ? (t5 += a5, ++i5, n4.next ? this.head = n4.next : this.head = this.tail = null) : (t5 += r3(a5, 0, e5), this.head = n4, n4.data = r3(a5, e5));
              break;
            }
            ++i5;
          } while ((n4 = n4.next) !== null);
          return this.length -= i5, t5;
        }
        _getBuffer(e5) {
          let t5 = s3.allocUnsafe(e5), n4 = e5, r4 = this.head, i5 = 0;
          do {
            let s4 = r4.data;
            if (e5 > s4.length) a4(t5, s4, n4 - e5), e5 -= s4.length;
            else {
              e5 === s4.length ? (a4(t5, s4, n4 - e5), ++i5, r4.next ? this.head = r4.next : this.head = this.tail = null) : (a4(t5, new o3(s4.buffer, s4.byteOffset, e5), n4 - e5), this.head = r4, r4.data = s4.slice(e5));
              break;
            }
            ++i5;
          } while ((r4 = r4.next) !== null);
          return this.length -= i5, t5;
        }
        [/* @__PURE__ */ Symbol.for(`nodejs.util.inspect.custom`)](e5, t5) {
          return c4(this, { ...t5, depth: 0, customInspect: false });
        }
      };
    }));
    tt = f(((e4, t4) => {
      let { MathFloor: n4, NumberIsInteger: r3 } = Ve(), { validateInteger: i4 } = qe(), { ERR_INVALID_ARG_VALUE: a4 } = Ue().codes, o3 = 16 * 1024, s3 = 16;
      function c4(e5, t5, n5) {
        return e5.highWaterMark == null ? t5 ? e5[n5] : null : e5.highWaterMark;
      }
      function l4(e5) {
        return e5 ? s3 : o3;
      }
      function u5(e5, t5) {
        i4(t5, `value`, 0), e5 ? s3 = t5 : o3 = t5;
      }
      function d3(e5, t5, i5, o4) {
        let s4 = c4(t5, o4, i5);
        if (s4 != null) {
          if (!r3(s4) || s4 < 0) throw new a4(o4 ? `options.${i5}` : `options.highWaterMark`, s4);
          return n4(s4);
        }
        return l4(e5.objectMode);
      }
      t4.exports = { getHighWaterMark: d3, getDefaultHighWaterMark: l4, setDefaultHighWaterMark: u5 };
    }));
    nt = f(((e4) => {
      var t4 = p2().Buffer, n4 = t4.isEncoding || function(e5) {
        switch (e5 = `` + e5, e5 && e5.toLowerCase()) {
          case `hex`:
          case `utf8`:
          case `utf-8`:
          case `ascii`:
          case `binary`:
          case `base64`:
          case `ucs2`:
          case `ucs-2`:
          case `utf16le`:
          case `utf-16le`:
          case `raw`:
            return true;
          default:
            return false;
        }
      };
      function r3(e5) {
        if (!e5) return `utf8`;
        for (var t5; ; ) switch (e5) {
          case `utf8`:
          case `utf-8`:
            return `utf8`;
          case `ucs2`:
          case `ucs-2`:
          case `utf16le`:
          case `utf-16le`:
            return `utf16le`;
          case `latin1`:
          case `binary`:
            return `latin1`;
          case `base64`:
          case `ascii`:
          case `hex`:
            return e5;
          default:
            if (t5) return;
            e5 = (`` + e5).toLowerCase(), t5 = true;
        }
      }
      function i4(e5) {
        var i5 = r3(e5);
        if (typeof i5 != `string` && (t4.isEncoding === n4 || !n4(e5))) throw Error(`Unknown encoding: ` + e5);
        return i5 || e5;
      }
      e4.StringDecoder = a4;
      function a4(e5) {
        this.encoding = i4(e5);
        var n5;
        switch (this.encoding) {
          case `utf16le`:
            this.text = f3, this.end = m4, n5 = 4;
            break;
          case `utf8`:
            this.fillLast = l4, n5 = 4;
            break;
          case `base64`:
            this.text = h5, this.end = g4, n5 = 3;
            break;
          default:
            this.write = _4, this.end = v4;
            return;
        }
        this.lastNeed = 0, this.lastTotal = 0, this.lastChar = t4.allocUnsafe(n5);
      }
      a4.prototype.write = function(e5) {
        if (e5.length === 0) return ``;
        var t5, n5;
        if (this.lastNeed) {
          if (t5 = this.fillLast(e5), t5 === void 0) return ``;
          n5 = this.lastNeed, this.lastNeed = 0;
        } else n5 = 0;
        return n5 < e5.length ? t5 ? t5 + this.text(e5, n5) : this.text(e5, n5) : t5 || ``;
      }, a4.prototype.end = d3, a4.prototype.text = u5, a4.prototype.fillLast = function(e5) {
        if (this.lastNeed <= e5.length) return e5.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        e5.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e5.length), this.lastNeed -= e5.length;
      };
      function o3(e5) {
        return e5 <= 127 ? 0 : e5 >> 5 == 6 ? 2 : e5 >> 4 == 14 ? 3 : e5 >> 3 == 30 ? 4 : e5 >> 6 == 2 ? -1 : -2;
      }
      function s3(e5, t5, n5) {
        var r4 = t5.length - 1;
        if (r4 < n5) return 0;
        var i5 = o3(t5[r4]);
        return i5 >= 0 ? (i5 > 0 && (e5.lastNeed = i5 - 1), i5) : --r4 < n5 || i5 === -2 ? 0 : (i5 = o3(t5[r4]), i5 >= 0 ? (i5 > 0 && (e5.lastNeed = i5 - 2), i5) : --r4 < n5 || i5 === -2 ? 0 : (i5 = o3(t5[r4]), i5 >= 0 ? (i5 > 0 && (i5 === 2 ? i5 = 0 : e5.lastNeed = i5 - 3), i5) : 0));
      }
      function c4(e5, t5, n5) {
        if ((t5[0] & 192) != 128) return e5.lastNeed = 0, `\uFFFD`;
        if (e5.lastNeed > 1 && t5.length > 1) {
          if ((t5[1] & 192) != 128) return e5.lastNeed = 1, `\uFFFD`;
          if (e5.lastNeed > 2 && t5.length > 2 && (t5[2] & 192) != 128) return e5.lastNeed = 2, `\uFFFD`;
        }
      }
      function l4(e5) {
        var t5 = this.lastTotal - this.lastNeed, n5 = c4(this, e5, t5);
        if (n5 !== void 0) return n5;
        if (this.lastNeed <= e5.length) return e5.copy(this.lastChar, t5, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        e5.copy(this.lastChar, t5, 0, e5.length), this.lastNeed -= e5.length;
      }
      function u5(e5, t5) {
        var n5 = s3(this, e5, t5);
        if (!this.lastNeed) return e5.toString(`utf8`, t5);
        this.lastTotal = n5;
        var r4 = e5.length - (n5 - this.lastNeed);
        return e5.copy(this.lastChar, 0, r4), e5.toString(`utf8`, t5, r4);
      }
      function d3(e5) {
        var t5 = e5 && e5.length ? this.write(e5) : ``;
        return this.lastNeed ? t5 + `\uFFFD` : t5;
      }
      function f3(e5, t5) {
        if ((e5.length - t5) % 2 == 0) {
          var n5 = e5.toString(`utf16le`, t5);
          if (n5) {
            var r4 = n5.charCodeAt(n5.length - 1);
            if (r4 >= 55296 && r4 <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e5[e5.length - 2], this.lastChar[1] = e5[e5.length - 1], n5.slice(0, -1);
          }
          return n5;
        }
        return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e5[e5.length - 1], e5.toString(`utf16le`, t5, e5.length - 1);
      }
      function m4(e5) {
        var t5 = e5 && e5.length ? this.write(e5) : ``;
        if (this.lastNeed) {
          var n5 = this.lastTotal - this.lastNeed;
          return t5 + this.lastChar.toString(`utf16le`, 0, n5);
        }
        return t5;
      }
      function h5(e5, t5) {
        var n5 = (e5.length - t5) % 3;
        return n5 === 0 ? e5.toString(`base64`, t5) : (this.lastNeed = 3 - n5, this.lastTotal = 3, n5 === 1 ? this.lastChar[0] = e5[e5.length - 1] : (this.lastChar[0] = e5[e5.length - 2], this.lastChar[1] = e5[e5.length - 1]), e5.toString(`base64`, t5, e5.length - n5));
      }
      function g4(e5) {
        var t5 = e5 && e5.length ? this.write(e5) : ``;
        return this.lastNeed ? t5 + this.lastChar.toString(`base64`, 0, 3 - this.lastNeed) : t5;
      }
      function _4(e5) {
        return e5.toString(this.encoding);
      }
      function v4(e5) {
        return e5 && e5.length ? this.write(e5) : ``;
      }
    }));
    rt = f(((e4, t4) => {
      let r3 = Je(), { PromisePrototypeThen: i4, SymbolAsyncIterator: a4, SymbolIterator: o3 } = Ve(), { Buffer: s3 } = h2(`buffer`), { ERR_INVALID_ARG_TYPE: c4, ERR_STREAM_NULL_VALUES: l4 } = Ue().codes;
      function u5(e5, t5, n4) {
        let u6;
        if (typeof t5 == `string` || t5 instanceof s3) return new e5({ objectMode: true, ...n4, read() {
          this.push(t5), this.push(null);
        } });
        let d3;
        if (t5 && t5[a4]) d3 = true, u6 = t5[a4]();
        else if (t5 && t5[o3]) d3 = false, u6 = t5[o3]();
        else throw new c4(`iterable`, [`Iterable`], t5);
        let f3 = new e5({ objectMode: true, highWaterMark: 1, ...n4 }), p3 = false;
        f3._read = function() {
          p3 || (p3 = true, h5());
        }, f3._destroy = function(e6, t6) {
          i4(m4(e6), () => r3.nextTick(t6, e6), (n5) => r3.nextTick(t6, n5 || e6));
        };
        async function m4(e6) {
          let t6 = e6 != null, n5 = typeof u6.throw == `function`;
          if (t6 && n5) {
            let { value: t7, done: n6 } = await u6.throw(e6);
            if (await t7, n6) return;
          }
          if (typeof u6.return == `function`) {
            let { value: e7 } = await u6.return();
            await e7;
          }
        }
        async function h5() {
          for (; ; ) {
            try {
              let { value: e6, done: t6 } = d3 ? await u6.next() : u6.next();
              if (t6) f3.push(null);
              else {
                let t7 = e6 && typeof e6.then == `function` ? await e6 : e6;
                if (t7 === null) throw p3 = false, new l4();
                if (f3.push(t7)) continue;
                p3 = false;
              }
            } catch (e6) {
              f3.destroy(e6);
            }
            break;
          }
        }
        return f3;
      }
      t4.exports = u5;
    }));
    it = f(((e4, t4) => {
      let r3 = Je(), { ArrayPrototypeIndexOf: i4, NumberIsInteger: a4, NumberIsNaN: o3, NumberParseInt: s3, ObjectDefineProperties: c4, ObjectKeys: l4, ObjectSetPrototypeOf: u5, Promise: d3, SafeSet: f3, SymbolAsyncDispose: p3, SymbolAsyncIterator: m4, Symbol: h5 } = Ve();
      t4.exports = H3, H3.ReadableState = V4;
      let { EventEmitter: g4 } = h2(`events`), { Stream: _4, prependListener: v4 } = Qe(), { Buffer: y5 } = h2(`buffer`), { addAbortSignal: b4 } = $e(), x4 = Xe(), S4 = Ke().debuglog(`stream`, (e5) => {
        S4 = e5;
      }), C5 = et(), w4 = Ze(), { getHighWaterMark: T4, getDefaultHighWaterMark: E4 } = tt(), { aggregateTwoErrors: D4, codes: { ERR_INVALID_ARG_TYPE: O4, ERR_METHOD_NOT_IMPLEMENTED: k4, ERR_OUT_OF_RANGE: A4, ERR_STREAM_PUSH_AFTER_EOF: j4, ERR_STREAM_UNSHIFT_AFTER_END_EVENT: M4 }, AbortError: N4 } = Ue(), { validateObject: P4 } = qe(), F4 = h5(`kPaused`), { StringDecoder: ee3 } = nt(), I5 = rt();
      u5(H3.prototype, _4.prototype), u5(H3, _4);
      let L4 = () => {
      }, { errorOrDestroy: R5 } = w4, te3 = 2048, ne3 = 4096, z4 = 65536;
      function B4(e5) {
        return { enumerable: false, get() {
          return (this.state & e5) !== 0;
        }, set(t5) {
          t5 ? this.state |= e5 : this.state &= ~e5;
        } };
      }
      c4(V4.prototype, { objectMode: B4(1), ended: B4(2), endEmitted: B4(4), reading: B4(8), constructed: B4(16), sync: B4(32), needReadable: B4(64), emittedReadable: B4(128), readableListening: B4(256), resumeScheduled: B4(512), errorEmitted: B4(1024), emitClose: B4(te3), autoDestroy: B4(ne3), destroyed: B4(8192), closed: B4(16384), closeEmitted: B4(32768), multiAwaitDrain: B4(z4), readingMore: B4(131072), dataEmitted: B4(262144) });
      function V4(e5, t5, n4) {
        typeof n4 != `boolean` && (n4 = t5 instanceof st()), this.state = 6192, e5 && e5.objectMode && (this.state |= 1), n4 && e5 && e5.readableObjectMode && (this.state |= 1), this.highWaterMark = e5 ? T4(this, e5, `readableHighWaterMark`, n4) : E4(false), this.buffer = new C5(), this.length = 0, this.pipes = [], this.flowing = null, this[F4] = null, e5 && e5.emitClose === false && (this.state &= ~te3), e5 && e5.autoDestroy === false && (this.state &= ~ne3), this.errored = null, this.defaultEncoding = e5 && e5.defaultEncoding || `utf8`, this.awaitDrainWriters = null, this.decoder = null, this.encoding = null, e5 && e5.encoding && (this.decoder = new ee3(e5.encoding), this.encoding = e5.encoding);
      }
      function H3(e5) {
        if (!(this instanceof H3)) return new H3(e5);
        let t5 = this instanceof st();
        this._readableState = new V4(e5, this, t5), e5 && (typeof e5.read == `function` && (this._read = e5.read), typeof e5.destroy == `function` && (this._destroy = e5.destroy), typeof e5.construct == `function` && (this._construct = e5.construct), e5.signal && !t5 && b4(e5.signal, this)), _4.call(this, e5), w4.construct(this, () => {
          this._readableState.needReadable && G3(this, this._readableState);
        });
      }
      H3.prototype.destroy = w4.destroy, H3.prototype._undestroy = w4.undestroy, H3.prototype._destroy = function(e5, t5) {
        t5(e5);
      }, H3.prototype[g4.captureRejectionSymbol] = function(e5) {
        this.destroy(e5);
      }, H3.prototype[p3] = function() {
        let e5;
        return this.destroyed || (e5 = this.readableEnded ? null : new N4(), this.destroy(e5)), new d3((t5, n4) => x4(this, (r4) => r4 && r4 !== e5 ? n4(r4) : t5(null)));
      }, H3.prototype.push = function(e5, t5) {
        return re3(this, e5, t5, false);
      }, H3.prototype.unshift = function(e5, t5) {
        return re3(this, e5, t5, true);
      };
      function re3(e5, t5, n4, r4) {
        S4(`readableAddChunk`, t5);
        let i5 = e5._readableState, a5;
        if (i5.state & 1 || (typeof t5 == `string` ? (n4 ||= i5.defaultEncoding, i5.encoding !== n4 && (r4 && i5.encoding ? t5 = y5.from(t5, n4).toString(i5.encoding) : (t5 = y5.from(t5, n4), n4 = ``))) : t5 instanceof y5 ? n4 = `` : _4._isUint8Array(t5) ? (t5 = _4._uint8ArrayToBuffer(t5), n4 = ``) : t5 != null && (a5 = new O4(`chunk`, [`string`, `Buffer`, `Uint8Array`], t5))), a5) R5(e5, a5);
        else if (t5 === null) i5.state &= -9, W3(e5, i5);
        else if (i5.state & 1 || t5 && t5.length > 0) if (r4) if (i5.state & 4) R5(e5, new M4());
        else if (i5.destroyed || i5.errored) return false;
        else ie3(e5, i5, t5, true);
        else if (i5.ended) R5(e5, new j4());
        else if (i5.destroyed || i5.errored) return false;
        else i5.state &= -9, i5.decoder && !n4 ? (t5 = i5.decoder.write(t5), i5.objectMode || t5.length !== 0 ? ie3(e5, i5, t5, false) : G3(e5, i5)) : ie3(e5, i5, t5, false);
        else r4 || (i5.state &= -9, G3(e5, i5));
        return !i5.ended && (i5.length < i5.highWaterMark || i5.length === 0);
      }
      function ie3(e5, t5, n4, r4) {
        t5.flowing && t5.length === 0 && !t5.sync && e5.listenerCount(`data`) > 0 ? ((t5.state & z4) === 0 ? t5.awaitDrainWriters = null : t5.awaitDrainWriters.clear(), t5.dataEmitted = true, e5.emit(`data`, n4)) : (t5.length += t5.objectMode ? 1 : n4.length, r4 ? t5.buffer.unshift(n4) : t5.buffer.push(n4), t5.state & 64 && oe3(e5)), G3(e5, t5);
      }
      H3.prototype.isPaused = function() {
        let e5 = this._readableState;
        return e5[F4] === true || e5.flowing === false;
      }, H3.prototype.setEncoding = function(e5) {
        let t5 = new ee3(e5);
        this._readableState.decoder = t5, this._readableState.encoding = this._readableState.decoder.encoding;
        let n4 = this._readableState.buffer, r4 = ``;
        for (let e6 of n4) r4 += t5.write(e6);
        return n4.clear(), r4 !== `` && n4.push(r4), this._readableState.length = r4.length, this;
      };
      function ae3(e5) {
        if (e5 > 1073741824) throw new A4(`size`, `<= 1GiB`, e5);
        return e5--, e5 |= e5 >>> 1, e5 |= e5 >>> 2, e5 |= e5 >>> 4, e5 |= e5 >>> 8, e5 |= e5 >>> 16, e5++, e5;
      }
      function U4(e5, t5) {
        return e5 <= 0 || t5.length === 0 && t5.ended ? 0 : t5.state & 1 ? 1 : o3(e5) ? t5.flowing && t5.length ? t5.buffer.first().length : t5.length : e5 <= t5.length ? e5 : t5.ended ? t5.length : 0;
      }
      H3.prototype.read = function(e5) {
        S4(`read`, e5), e5 === void 0 ? e5 = NaN : a4(e5) || (e5 = s3(e5, 10));
        let t5 = this._readableState, n4 = e5;
        if (e5 > t5.highWaterMark && (t5.highWaterMark = ae3(e5)), e5 !== 0 && (t5.state &= -129), e5 === 0 && t5.needReadable && ((t5.highWaterMark === 0 ? t5.length > 0 : t5.length >= t5.highWaterMark) || t5.ended)) return S4(`read: emitReadable`, t5.length, t5.ended), t5.length === 0 && t5.ended ? Q3(this) : oe3(this), null;
        if (e5 = U4(e5, t5), e5 === 0 && t5.ended) return t5.length === 0 && Q3(this), null;
        let r4 = (t5.state & 64) != 0;
        if (S4(`need readable`, r4), (t5.length === 0 || t5.length - e5 < t5.highWaterMark) && (r4 = true, S4(`length less than watermark`, r4)), t5.ended || t5.reading || t5.destroyed || t5.errored || !t5.constructed) r4 = false, S4(`reading, ended or constructing`, r4);
        else if (r4) {
          S4(`do read`), t5.state |= 40, t5.length === 0 && (t5.state |= 64);
          try {
            this._read(t5.highWaterMark);
          } catch (e6) {
            R5(this, e6);
          }
          t5.state &= -33, t5.reading || (e5 = U4(n4, t5));
        }
        let i5;
        return i5 = e5 > 0 ? de3(e5, t5) : null, i5 === null ? (t5.needReadable = t5.length <= t5.highWaterMark, e5 = 0) : (t5.length -= e5, t5.multiAwaitDrain ? t5.awaitDrainWriters.clear() : t5.awaitDrainWriters = null), t5.length === 0 && (t5.ended || (t5.needReadable = true), n4 !== e5 && t5.ended && Q3(this)), i5 !== null && !t5.errorEmitted && !t5.closeEmitted && (t5.dataEmitted = true, this.emit(`data`, i5)), i5;
      };
      function W3(e5, t5) {
        if (S4(`onEofChunk`), !t5.ended) {
          if (t5.decoder) {
            let e6 = t5.decoder.end();
            e6 && e6.length && (t5.buffer.push(e6), t5.length += t5.objectMode ? 1 : e6.length);
          }
          t5.ended = true, t5.sync ? oe3(e5) : (t5.needReadable = false, t5.emittedReadable = true, se3(e5));
        }
      }
      function oe3(e5) {
        let t5 = e5._readableState;
        S4(`emitReadable`, t5.needReadable, t5.emittedReadable), t5.needReadable = false, t5.emittedReadable || (S4(`emitReadable`, t5.flowing), t5.emittedReadable = true, r3.nextTick(se3, e5));
      }
      function se3(e5) {
        let t5 = e5._readableState;
        S4(`emitReadable_`, t5.destroyed, t5.length, t5.ended), !t5.destroyed && !t5.errored && (t5.length || t5.ended) && (e5.emit(`readable`), t5.emittedReadable = false), t5.needReadable = !t5.flowing && !t5.ended && t5.length <= t5.highWaterMark, Y3(e5);
      }
      function G3(e5, t5) {
        !t5.readingMore && t5.constructed && (t5.readingMore = true, r3.nextTick(K3, e5, t5));
      }
      function K3(e5, t5) {
        for (; !t5.reading && !t5.ended && (t5.length < t5.highWaterMark || t5.flowing && t5.length === 0); ) {
          let n4 = t5.length;
          if (S4(`maybeReadMore read 0`), e5.read(0), n4 === t5.length) break;
        }
        t5.readingMore = false;
      }
      H3.prototype._read = function(e5) {
        throw new k4(`_read()`);
      }, H3.prototype.pipe = function(e5, t5) {
        let n4 = this, i5 = this._readableState;
        i5.pipes.length === 1 && (i5.multiAwaitDrain || (i5.multiAwaitDrain = true, i5.awaitDrainWriters = new f3(i5.awaitDrainWriters ? [i5.awaitDrainWriters] : []))), i5.pipes.push(e5), S4(`pipe count=%d opts=%j`, i5.pipes.length, t5);
        let a5 = (!t5 || t5.end !== false) && e5 !== r3.stdout && e5 !== r3.stderr ? s4 : _5;
        i5.endEmitted ? r3.nextTick(a5) : n4.once(`end`, a5), e5.on(`unpipe`, o4);
        function o4(e6, t6) {
          S4(`onunpipe`), e6 === n4 && t6 && t6.hasUnpiped === false && (t6.hasUnpiped = true, u6());
        }
        function s4() {
          S4(`onend`), e5.end();
        }
        let c5, l5 = false;
        function u6() {
          S4(`cleanup`), e5.removeListener(`close`, h6), e5.removeListener(`finish`, g5), c5 && e5.removeListener(`drain`, c5), e5.removeListener(`error`, m5), e5.removeListener(`unpipe`, o4), n4.removeListener(`end`, s4), n4.removeListener(`end`, _5), n4.removeListener(`data`, p4), l5 = true, c5 && i5.awaitDrainWriters && (!e5._writableState || e5._writableState.needDrain) && c5();
        }
        function d4() {
          l5 || (i5.pipes.length === 1 && i5.pipes[0] === e5 ? (S4(`false write response, pause`, 0), i5.awaitDrainWriters = e5, i5.multiAwaitDrain = false) : i5.pipes.length > 1 && i5.pipes.includes(e5) && (S4(`false write response, pause`, i5.awaitDrainWriters.size), i5.awaitDrainWriters.add(e5)), n4.pause()), c5 || (c5 = ce3(n4, e5), e5.on(`drain`, c5));
        }
        n4.on(`data`, p4);
        function p4(t6) {
          S4(`ondata`);
          let n5 = e5.write(t6);
          S4(`dest.write`, n5), n5 === false && d4();
        }
        function m5(t6) {
          if (S4(`onerror`, t6), _5(), e5.removeListener(`error`, m5), e5.listenerCount(`error`) === 0) {
            let n5 = e5._writableState || e5._readableState;
            n5 && !n5.errorEmitted ? R5(e5, t6) : e5.emit(`error`, t6);
          }
        }
        v4(e5, `error`, m5);
        function h6() {
          e5.removeListener(`finish`, g5), _5();
        }
        e5.once(`close`, h6);
        function g5() {
          S4(`onfinish`), e5.removeListener(`close`, h6), _5();
        }
        e5.once(`finish`, g5);
        function _5() {
          S4(`unpipe`), n4.unpipe(e5);
        }
        return e5.emit(`pipe`, n4), e5.writableNeedDrain === true ? d4() : i5.flowing || (S4(`pipe resume`), n4.resume()), e5;
      };
      function ce3(e5, t5) {
        return function() {
          let n4 = e5._readableState;
          n4.awaitDrainWriters === t5 ? (S4(`pipeOnDrain`, 1), n4.awaitDrainWriters = null) : n4.multiAwaitDrain && (S4(`pipeOnDrain`, n4.awaitDrainWriters.size), n4.awaitDrainWriters.delete(t5)), (!n4.awaitDrainWriters || n4.awaitDrainWriters.size === 0) && e5.listenerCount(`data`) && e5.resume();
        };
      }
      H3.prototype.unpipe = function(e5) {
        let t5 = this._readableState, n4 = { hasUnpiped: false };
        if (t5.pipes.length === 0) return this;
        if (!e5) {
          let e6 = t5.pipes;
          t5.pipes = [], this.pause();
          for (let t6 = 0; t6 < e6.length; t6++) e6[t6].emit(`unpipe`, this, { hasUnpiped: false });
          return this;
        }
        let r4 = i4(t5.pipes, e5);
        return r4 === -1 ? this : (t5.pipes.splice(r4, 1), t5.pipes.length === 0 && this.pause(), e5.emit(`unpipe`, this, n4), this);
      }, H3.prototype.on = function(e5, t5) {
        let n4 = _4.prototype.on.call(this, e5, t5), i5 = this._readableState;
        return e5 === `data` ? (i5.readableListening = this.listenerCount(`readable`) > 0, i5.flowing !== false && this.resume()) : e5 === `readable` && !i5.endEmitted && !i5.readableListening && (i5.readableListening = i5.needReadable = true, i5.flowing = false, i5.emittedReadable = false, S4(`on readable`, i5.length, i5.reading), i5.length ? oe3(this) : i5.reading || r3.nextTick(q3, this)), n4;
      }, H3.prototype.addListener = H3.prototype.on, H3.prototype.removeListener = function(e5, t5) {
        let n4 = _4.prototype.removeListener.call(this, e5, t5);
        return e5 === `readable` && r3.nextTick(le3, this), n4;
      }, H3.prototype.off = H3.prototype.removeListener, H3.prototype.removeAllListeners = function(e5) {
        let t5 = _4.prototype.removeAllListeners.apply(this, arguments);
        return (e5 === `readable` || e5 === void 0) && r3.nextTick(le3, this), t5;
      };
      function le3(e5) {
        let t5 = e5._readableState;
        t5.readableListening = e5.listenerCount(`readable`) > 0, t5.resumeScheduled && t5[F4] === false ? t5.flowing = true : e5.listenerCount(`data`) > 0 ? e5.resume() : t5.readableListening || (t5.flowing = null);
      }
      function q3(e5) {
        S4(`readable nexttick read 0`), e5.read(0);
      }
      H3.prototype.resume = function() {
        let e5 = this._readableState;
        return e5.flowing || (S4(`resume`), e5.flowing = !e5.readableListening, ue3(this, e5)), e5[F4] = false, this;
      };
      function ue3(e5, t5) {
        t5.resumeScheduled || (t5.resumeScheduled = true, r3.nextTick(J3, e5, t5));
      }
      function J3(e5, t5) {
        S4(`resume`, t5.reading), t5.reading || e5.read(0), t5.resumeScheduled = false, e5.emit(`resume`), Y3(e5), t5.flowing && !t5.reading && e5.read(0);
      }
      H3.prototype.pause = function() {
        return S4(`call pause flowing=%j`, this._readableState.flowing), this._readableState.flowing !== false && (S4(`pause`), this._readableState.flowing = false, this.emit(`pause`)), this._readableState[F4] = true, this;
      };
      function Y3(e5) {
        let t5 = e5._readableState;
        for (S4(`flow`, t5.flowing); t5.flowing && e5.read() !== null; ) ;
      }
      H3.prototype.wrap = function(e5) {
        let t5 = false;
        e5.on(`data`, (n5) => {
          !this.push(n5) && e5.pause && (t5 = true, e5.pause());
        }), e5.on(`end`, () => {
          this.push(null);
        }), e5.on(`error`, (e6) => {
          R5(this, e6);
        }), e5.on(`close`, () => {
          this.destroy();
        }), e5.on(`destroy`, () => {
          this.destroy();
        }), this._read = () => {
          t5 && e5.resume && (t5 = false, e5.resume());
        };
        let n4 = l4(e5);
        for (let t6 = 1; t6 < n4.length; t6++) {
          let r4 = n4[t6];
          this[r4] === void 0 && typeof e5[r4] == `function` && (this[r4] = e5[r4].bind(e5));
        }
        return this;
      }, H3.prototype[m4] = function() {
        return X3(this);
      }, H3.prototype.iterator = function(e5) {
        return e5 !== void 0 && P4(e5, `options`), X3(this, e5);
      };
      function X3(e5, t5) {
        typeof e5.read != `function` && (e5 = H3.wrap(e5, { objectMode: true }));
        let n4 = Z3(e5, t5);
        return n4.stream = e5, n4;
      }
      async function* Z3(e5, t5) {
        let n4 = L4;
        function r4(t6) {
          this === e5 ? (n4(), n4 = L4) : n4 = t6;
        }
        e5.on(`readable`, r4);
        let i5, a5 = x4(e5, { writable: false }, (e6) => {
          i5 = e6 ? D4(i5, e6) : null, n4(), n4 = L4;
        });
        try {
          for (; ; ) {
            let t6 = e5.destroyed ? null : e5.read();
            if (t6 !== null) yield t6;
            else if (i5) throw i5;
            else if (i5 === null) return;
            else await new d3(r4);
          }
        } catch (e6) {
          throw i5 = D4(i5, e6), i5;
        } finally {
          (i5 || (t5 == null ? void 0 : t5.destroyOnReturn) !== false) && (i5 === void 0 || e5._readableState.autoDestroy) ? w4.destroyer(e5, null) : (e5.off(`readable`, r4), a5());
        }
      }
      c4(H3.prototype, { readable: { __proto__: null, get() {
        let e5 = this._readableState;
        return !!e5 && e5.readable !== false && !e5.destroyed && !e5.errorEmitted && !e5.endEmitted;
      }, set(e5) {
        this._readableState && (this._readableState.readable = !!e5);
      } }, readableDidRead: { __proto__: null, enumerable: false, get: function() {
        return this._readableState.dataEmitted;
      } }, readableAborted: { __proto__: null, enumerable: false, get: function() {
        return !!(this._readableState.readable !== false && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
      } }, readableHighWaterMark: { __proto__: null, enumerable: false, get: function() {
        return this._readableState.highWaterMark;
      } }, readableBuffer: { __proto__: null, enumerable: false, get: function() {
        return this._readableState && this._readableState.buffer;
      } }, readableFlowing: { __proto__: null, enumerable: false, get: function() {
        return this._readableState.flowing;
      }, set: function(e5) {
        this._readableState && (this._readableState.flowing = e5);
      } }, readableLength: { __proto__: null, enumerable: false, get() {
        return this._readableState.length;
      } }, readableObjectMode: { __proto__: null, enumerable: false, get() {
        return this._readableState ? this._readableState.objectMode : false;
      } }, readableEncoding: { __proto__: null, enumerable: false, get() {
        return this._readableState ? this._readableState.encoding : null;
      } }, errored: { __proto__: null, enumerable: false, get() {
        return this._readableState ? this._readableState.errored : null;
      } }, closed: { __proto__: null, get() {
        return this._readableState ? this._readableState.closed : false;
      } }, destroyed: { __proto__: null, enumerable: false, get() {
        return this._readableState ? this._readableState.destroyed : false;
      }, set(e5) {
        this._readableState && (this._readableState.destroyed = e5);
      } }, readableEnded: { __proto__: null, enumerable: false, get() {
        return this._readableState ? this._readableState.endEmitted : false;
      } } }), c4(V4.prototype, { pipesCount: { __proto__: null, get() {
        return this.pipes.length;
      } }, paused: { __proto__: null, get() {
        return this[F4] !== false;
      }, set(e5) {
        this[F4] = !!e5;
      } } }), H3._fromList = de3;
      function de3(e5, t5) {
        if (t5.length === 0) return null;
        let n4;
        return t5.objectMode ? n4 = t5.buffer.shift() : !e5 || e5 >= t5.length ? (n4 = t5.decoder ? t5.buffer.join(``) : t5.buffer.length === 1 ? t5.buffer.first() : t5.buffer.concat(t5.length), t5.buffer.clear()) : n4 = t5.buffer.consume(e5, t5.decoder), n4;
      }
      function Q3(e5) {
        let t5 = e5._readableState;
        S4(`endReadable`, t5.endEmitted), t5.endEmitted || (t5.ended = true, r3.nextTick(fe3, t5, e5));
      }
      function fe3(e5, t5) {
        if (S4(`endReadableNT`, e5.endEmitted, e5.length), !e5.errored && !e5.closeEmitted && !e5.endEmitted && e5.length === 0) {
          if (e5.endEmitted = true, t5.emit(`end`), t5.writable && t5.allowHalfOpen === false) r3.nextTick(pe3, t5);
          else if (e5.autoDestroy) {
            let e6 = t5._writableState;
            (!e6 || e6.autoDestroy && (e6.finished || e6.writable === false)) && t5.destroy();
          }
        }
      }
      function pe3(e5) {
        e5.writable && !e5.writableEnded && !e5.destroyed && e5.end();
      }
      H3.from = function(e5, t5) {
        return I5(H3, e5, t5);
      };
      let $3;
      function me3() {
        return $3 === void 0 && ($3 = {}), $3;
      }
      H3.fromWeb = function(e5, t5) {
        return me3().newStreamReadableFromReadableStream(e5, t5);
      }, H3.toWeb = function(e5, t5) {
        return me3().newReadableStreamFromStreamReadable(e5, t5);
      }, H3.wrap = function(e5, t5) {
        return new H3({ objectMode: e5.readableObjectMode ?? e5.objectMode ?? true, ...t5, destroy(t6, n4) {
          w4.destroyer(e5, t6), n4(t6);
        } }).wrap(e5);
      };
    }));
    at = f(((e4, t4) => {
      let r3 = Je(), { ArrayPrototypeSlice: i4, Error: a4, FunctionPrototypeSymbolHasInstance: o3, ObjectDefineProperty: s3, ObjectDefineProperties: c4, ObjectSetPrototypeOf: l4, StringPrototypeToLowerCase: u5, Symbol: d3, SymbolHasInstance: f3 } = Ve();
      t4.exports = P4, P4.WritableState = M4;
      let { EventEmitter: p3 } = h2(`events`), m4 = Qe().Stream, { Buffer: h5 } = h2(`buffer`), g4 = Ze(), { addAbortSignal: _4 } = $e(), { getHighWaterMark: v4, getDefaultHighWaterMark: y5 } = tt(), { ERR_INVALID_ARG_TYPE: b4, ERR_METHOD_NOT_IMPLEMENTED: x4, ERR_MULTIPLE_CALLBACK: S4, ERR_STREAM_CANNOT_PIPE: C5, ERR_STREAM_DESTROYED: w4, ERR_STREAM_ALREADY_FINISHED: T4, ERR_STREAM_NULL_VALUES: E4, ERR_STREAM_WRITE_AFTER_END: D4, ERR_UNKNOWN_ENCODING: O4 } = Ue().codes, { errorOrDestroy: k4 } = g4;
      l4(P4.prototype, m4.prototype), l4(P4, m4);
      function A4() {
      }
      let j4 = d3(`kOnFinished`);
      function M4(e5, t5, n4) {
        typeof n4 != `boolean` && (n4 = t5 instanceof st()), this.objectMode = !!(e5 && e5.objectMode), n4 && (this.objectMode = this.objectMode || !!(e5 && e5.writableObjectMode)), this.highWaterMark = e5 ? v4(this, e5, `writableHighWaterMark`, n4) : y5(false), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
        let r4 = !!(e5 && e5.decodeStrings === false);
        this.decodeStrings = !r4, this.defaultEncoding = e5 && e5.defaultEncoding || `utf8`, this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = R5.bind(void 0, t5), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, N4(this), this.pendingcb = 0, this.constructed = true, this.prefinished = false, this.errorEmitted = false, this.emitClose = !e5 || e5.emitClose !== false, this.autoDestroy = !e5 || e5.autoDestroy !== false, this.errored = null, this.closed = false, this.closeEmitted = false, this[j4] = [];
      }
      function N4(e5) {
        e5.buffered = [], e5.bufferedIndex = 0, e5.allBuffers = true, e5.allNoop = true;
      }
      M4.prototype.getBuffer = function() {
        return i4(this.buffered, this.bufferedIndex);
      }, s3(M4.prototype, `bufferedRequestCount`, { __proto__: null, get() {
        return this.buffered.length - this.bufferedIndex;
      } });
      function P4(e5) {
        let t5 = this instanceof st();
        if (!t5 && !o3(P4, this)) return new P4(e5);
        this._writableState = new M4(e5, this, t5), e5 && (typeof e5.write == `function` && (this._write = e5.write), typeof e5.writev == `function` && (this._writev = e5.writev), typeof e5.destroy == `function` && (this._destroy = e5.destroy), typeof e5.final == `function` && (this._final = e5.final), typeof e5.construct == `function` && (this._construct = e5.construct), e5.signal && _4(e5.signal, this)), m4.call(this, e5), g4.construct(this, () => {
          let e6 = this._writableState;
          e6.writing || B4(this, e6), ie3(this, e6);
        });
      }
      s3(P4, f3, { __proto__: null, value: function(e5) {
        return o3(this, e5) ? true : this === P4 ? e5 && e5._writableState instanceof M4 : false;
      } }), P4.prototype.pipe = function() {
        k4(this, new C5());
      };
      function F4(e5, t5, n4, i5) {
        let a5 = e5._writableState;
        if (typeof n4 == `function`) i5 = n4, n4 = a5.defaultEncoding;
        else {
          if (!n4) n4 = a5.defaultEncoding;
          else if (n4 !== `buffer` && !h5.isEncoding(n4)) throw new O4(n4);
          typeof i5 != `function` && (i5 = A4);
        }
        if (t5 === null) throw new E4();
        if (!a5.objectMode) if (typeof t5 == `string`) a5.decodeStrings !== false && (t5 = h5.from(t5, n4), n4 = `buffer`);
        else if (t5 instanceof h5) n4 = `buffer`;
        else if (m4._isUint8Array(t5)) t5 = m4._uint8ArrayToBuffer(t5), n4 = `buffer`;
        else throw new b4(`chunk`, [`string`, `Buffer`, `Uint8Array`], t5);
        let o4;
        return a5.ending ? o4 = new D4() : a5.destroyed && (o4 = new w4(`write`)), o4 ? (r3.nextTick(i5, o4), k4(e5, o4, true), o4) : (a5.pendingcb++, ee3(e5, a5, t5, n4, i5));
      }
      P4.prototype.write = function(e5, t5, n4) {
        return F4(this, e5, t5, n4) === true;
      }, P4.prototype.cork = function() {
        this._writableState.corked++;
      }, P4.prototype.uncork = function() {
        let e5 = this._writableState;
        e5.corked && (e5.corked--, e5.writing || B4(this, e5));
      }, P4.prototype.setDefaultEncoding = function(e5) {
        if (typeof e5 == `string` && (e5 = u5(e5)), !h5.isEncoding(e5)) throw new O4(e5);
        return this._writableState.defaultEncoding = e5, this;
      };
      function ee3(e5, t5, n4, r4, i5) {
        let a5 = t5.objectMode ? 1 : n4.length;
        t5.length += a5;
        let o4 = t5.length < t5.highWaterMark;
        return o4 || (t5.needDrain = true), t5.writing || t5.corked || t5.errored || !t5.constructed ? (t5.buffered.push({ chunk: n4, encoding: r4, callback: i5 }), t5.allBuffers && r4 !== `buffer` && (t5.allBuffers = false), t5.allNoop && i5 !== A4 && (t5.allNoop = false)) : (t5.writelen = a5, t5.writecb = i5, t5.writing = true, t5.sync = true, e5._write(n4, r4, t5.onwrite), t5.sync = false), o4 && !t5.errored && !t5.destroyed;
      }
      function I5(e5, t5, n4, r4, i5, a5, o4) {
        t5.writelen = r4, t5.writecb = o4, t5.writing = true, t5.sync = true, t5.destroyed ? t5.onwrite(new w4(`write`)) : n4 ? e5._writev(i5, t5.onwrite) : e5._write(i5, a5, t5.onwrite), t5.sync = false;
      }
      function L4(e5, t5, n4, r4) {
        --t5.pendingcb, r4(n4), z4(t5), k4(e5, n4);
      }
      function R5(e5, t5) {
        let n4 = e5._writableState, i5 = n4.sync, a5 = n4.writecb;
        if (typeof a5 != `function`) {
          k4(e5, new S4());
          return;
        }
        n4.writing = false, n4.writecb = null, n4.length -= n4.writelen, n4.writelen = 0, t5 ? (t5.stack, n4.errored ||= t5, e5._readableState && !e5._readableState.errored && (e5._readableState.errored = t5), i5 ? r3.nextTick(L4, e5, n4, t5, a5) : L4(e5, n4, t5, a5)) : (n4.buffered.length > n4.bufferedIndex && B4(e5, n4), i5 ? n4.afterWriteTickInfo !== null && n4.afterWriteTickInfo.cb === a5 ? n4.afterWriteTickInfo.count++ : (n4.afterWriteTickInfo = { count: 1, cb: a5, stream: e5, state: n4 }, r3.nextTick(te3, n4.afterWriteTickInfo)) : ne3(e5, n4, 1, a5));
      }
      function te3({ stream: e5, state: t5, count: n4, cb: r4 }) {
        return t5.afterWriteTickInfo = null, ne3(e5, t5, n4, r4);
      }
      function ne3(e5, t5, n4, r4) {
        for (!t5.ending && !e5.destroyed && t5.length === 0 && t5.needDrain && (t5.needDrain = false, e5.emit(`drain`)); n4-- > 0; ) t5.pendingcb--, r4();
        t5.destroyed && z4(t5), ie3(e5, t5);
      }
      function z4(e5) {
        if (e5.writing) return;
        for (let t6 = e5.bufferedIndex; t6 < e5.buffered.length; ++t6) {
          let { chunk: n4, callback: r4 } = e5.buffered[t6], i5 = e5.objectMode ? 1 : n4.length;
          e5.length -= i5, r4(e5.errored ?? new w4(`write`));
        }
        let t5 = e5[j4].splice(0);
        for (let n4 = 0; n4 < t5.length; n4++) t5[n4](e5.errored ?? new w4(`end`));
        N4(e5);
      }
      function B4(e5, t5) {
        if (t5.corked || t5.bufferProcessing || t5.destroyed || !t5.constructed) return;
        let { buffered: n4, bufferedIndex: r4, objectMode: a5 } = t5, o4 = n4.length - r4;
        if (!o4) return;
        let s4 = r4;
        if (t5.bufferProcessing = true, o4 > 1 && e5._writev) {
          t5.pendingcb -= o4 - 1;
          let r5 = t5.allNoop ? A4 : (e6) => {
            for (let t6 = s4; t6 < n4.length; ++t6) n4[t6].callback(e6);
          }, a6 = t5.allNoop && s4 === 0 ? n4 : i4(n4, s4);
          a6.allBuffers = t5.allBuffers, I5(e5, t5, true, t5.length, a6, ``, r5), N4(t5);
        } else {
          do {
            let { chunk: r5, encoding: i5, callback: o5 } = n4[s4];
            n4[s4++] = null, I5(e5, t5, false, a5 ? 1 : r5.length, r5, i5, o5);
          } while (s4 < n4.length && !t5.writing);
          s4 === n4.length ? N4(t5) : s4 > 256 ? (n4.splice(0, s4), t5.bufferedIndex = 0) : t5.bufferedIndex = s4;
        }
        t5.bufferProcessing = false;
      }
      P4.prototype._write = function(e5, t5, n4) {
        if (this._writev) this._writev([{ chunk: e5, encoding: t5 }], n4);
        else throw new x4(`_write()`);
      }, P4.prototype._writev = null, P4.prototype.end = function(e5, t5, n4) {
        let i5 = this._writableState;
        typeof e5 == `function` ? (n4 = e5, e5 = null, t5 = null) : typeof t5 == `function` && (n4 = t5, t5 = null);
        let o4;
        if (e5 != null) {
          let n5 = F4(this, e5, t5);
          n5 instanceof a4 && (o4 = n5);
        }
        return i5.corked && (i5.corked = 1, this.uncork()), o4 || (!i5.errored && !i5.ending ? (i5.ending = true, ie3(this, i5, true), i5.ended = true) : i5.finished ? o4 = new T4(`end`) : i5.destroyed && (o4 = new w4(`end`))), typeof n4 == `function` && (o4 || i5.finished ? r3.nextTick(n4, o4) : i5[j4].push(n4)), this;
      };
      function V4(e5) {
        return e5.ending && !e5.destroyed && e5.constructed && e5.length === 0 && !e5.errored && e5.buffered.length === 0 && !e5.finished && !e5.writing && !e5.errorEmitted && !e5.closeEmitted;
      }
      function H3(e5, t5) {
        let n4 = false;
        function i5(i6) {
          if (n4) {
            k4(e5, i6 ?? S4());
            return;
          }
          if (n4 = true, t5.pendingcb--, i6) {
            let n5 = t5[j4].splice(0);
            for (let e6 = 0; e6 < n5.length; e6++) n5[e6](i6);
            k4(e5, i6, t5.sync);
          } else V4(t5) && (t5.prefinished = true, e5.emit(`prefinish`), t5.pendingcb++, r3.nextTick(ae3, e5, t5));
        }
        t5.sync = true, t5.pendingcb++;
        try {
          e5._final(i5);
        } catch (e6) {
          i5(e6);
        }
        t5.sync = false;
      }
      function re3(e5, t5) {
        !t5.prefinished && !t5.finalCalled && (typeof e5._final == `function` && !t5.destroyed ? (t5.finalCalled = true, H3(e5, t5)) : (t5.prefinished = true, e5.emit(`prefinish`)));
      }
      function ie3(e5, t5, n4) {
        V4(t5) && (re3(e5, t5), t5.pendingcb === 0 && (n4 ? (t5.pendingcb++, r3.nextTick((e6, t6) => {
          V4(t6) ? ae3(e6, t6) : t6.pendingcb--;
        }, e5, t5)) : V4(t5) && (t5.pendingcb++, ae3(e5, t5))));
      }
      function ae3(e5, t5) {
        t5.pendingcb--, t5.finished = true;
        let n4 = t5[j4].splice(0);
        for (let e6 = 0; e6 < n4.length; e6++) n4[e6]();
        if (e5.emit(`finish`), t5.autoDestroy) {
          let t6 = e5._readableState;
          (!t6 || t6.autoDestroy && (t6.endEmitted || t6.readable === false)) && e5.destroy();
        }
      }
      c4(P4.prototype, { closed: { __proto__: null, get() {
        return this._writableState ? this._writableState.closed : false;
      } }, destroyed: { __proto__: null, get() {
        return this._writableState ? this._writableState.destroyed : false;
      }, set(e5) {
        this._writableState && (this._writableState.destroyed = e5);
      } }, writable: { __proto__: null, get() {
        let e5 = this._writableState;
        return !!e5 && e5.writable !== false && !e5.destroyed && !e5.errored && !e5.ending && !e5.ended;
      }, set(e5) {
        this._writableState && (this._writableState.writable = !!e5);
      } }, writableFinished: { __proto__: null, get() {
        return this._writableState ? this._writableState.finished : false;
      } }, writableObjectMode: { __proto__: null, get() {
        return this._writableState ? this._writableState.objectMode : false;
      } }, writableBuffer: { __proto__: null, get() {
        return this._writableState && this._writableState.getBuffer();
      } }, writableEnded: { __proto__: null, get() {
        return this._writableState ? this._writableState.ending : false;
      } }, writableNeedDrain: { __proto__: null, get() {
        let e5 = this._writableState;
        return e5 ? !e5.destroyed && !e5.ending && e5.needDrain : false;
      } }, writableHighWaterMark: { __proto__: null, get() {
        return this._writableState && this._writableState.highWaterMark;
      } }, writableCorked: { __proto__: null, get() {
        return this._writableState ? this._writableState.corked : 0;
      } }, writableLength: { __proto__: null, get() {
        return this._writableState && this._writableState.length;
      } }, errored: { __proto__: null, enumerable: false, get() {
        return this._writableState ? this._writableState.errored : null;
      } }, writableAborted: { __proto__: null, enumerable: false, get: function() {
        return !!(this._writableState.writable !== false && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
      } } });
      let U4 = g4.destroy;
      P4.prototype.destroy = function(e5, t5) {
        let n4 = this._writableState;
        return !n4.destroyed && (n4.bufferedIndex < n4.buffered.length || n4[j4].length) && r3.nextTick(z4, n4), U4.call(this, e5, t5), this;
      }, P4.prototype._undestroy = g4.undestroy, P4.prototype._destroy = function(e5, t5) {
        t5(e5);
      }, P4.prototype[p3.captureRejectionSymbol] = function(e5) {
        this.destroy(e5);
      };
      let W3;
      function oe3() {
        return W3 === void 0 && (W3 = {}), W3;
      }
      P4.fromWeb = function(e5, t5) {
        return oe3().newStreamWritableFromWritableStream(e5, t5);
      }, P4.toWeb = function(e5) {
        return oe3().newWritableStreamFromStreamWritable(e5);
      };
    }));
    ot = f(((e4, t4) => {
      let r3 = Je(), i4 = h2(`buffer`), { isReadable: a4, isWritable: o3, isIterable: s3, isNodeStream: c4, isReadableNodeStream: l4, isWritableNodeStream: u5, isDuplexNodeStream: d3, isReadableStream: f3, isWritableStream: p3 } = Ye(), m4 = Xe(), { AbortError: h5, codes: { ERR_INVALID_ARG_TYPE: g4, ERR_INVALID_RETURN_VALUE: _4 } } = Ue(), { destroyer: v4 } = Ze(), y5 = st(), b4 = it(), x4 = at(), { createDeferredPromise: S4 } = Ke(), C5 = rt(), w4 = globalThis.Blob || i4.Blob, T4 = w4 === void 0 ? function(e5) {
        return false;
      } : function(e5) {
        return e5 instanceof w4;
      }, E4 = globalThis.AbortController || Ge().AbortController, { FunctionPrototypeCall: D4 } = Ve();
      var O4 = class extends y5 {
        constructor(e5) {
          super(e5), (e5 == null ? void 0 : e5.readable) === false && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), (e5 == null ? void 0 : e5.writable) === false && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true);
        }
      };
      t4.exports = function e5(t5, n4) {
        if (d3(t5)) return t5;
        if (l4(t5)) return A4({ readable: t5 });
        if (u5(t5)) return A4({ writable: t5 });
        if (c4(t5)) return A4({ writable: false, readable: false });
        if (f3(t5)) return A4({ readable: b4.fromWeb(t5) });
        if (p3(t5)) return A4({ writable: x4.fromWeb(t5) });
        if (typeof t5 == `function`) {
          let { value: e6, write: i6, final: a5, destroy: o4 } = k4(t5);
          if (s3(e6)) return C5(O4, e6, { objectMode: true, write: i6, final: a5, destroy: o4 });
          let c5 = e6 == null ? void 0 : e6.then;
          if (typeof c5 == `function`) {
            let t6, n5 = D4(c5, e6, (e7) => {
              if (e7 != null) throw new _4(`nully`, `body`, e7);
            }, (e7) => {
              v4(t6, e7);
            });
            return t6 = new O4({ objectMode: true, readable: false, write: i6, final(e7) {
              a5(async () => {
                try {
                  await n5, r3.nextTick(e7, null);
                } catch (t7) {
                  r3.nextTick(e7, t7);
                }
              });
            }, destroy: o4 });
          }
          throw new _4(`Iterable, AsyncIterable or AsyncFunction`, n4, e6);
        }
        if (T4(t5)) return e5(t5.arrayBuffer());
        if (s3(t5)) return C5(O4, t5, { objectMode: true, writable: false });
        if (f3(t5 == null ? void 0 : t5.readable) && p3(t5 == null ? void 0 : t5.writable)) return O4.fromWeb(t5);
        if (typeof (t5 == null ? void 0 : t5.writable) == `object` || typeof (t5 == null ? void 0 : t5.readable) == `object`) return A4({ readable: t5 != null && t5.readable ? l4(t5 == null ? void 0 : t5.readable) ? t5 == null ? void 0 : t5.readable : e5(t5.readable) : void 0, writable: t5 != null && t5.writable ? u5(t5 == null ? void 0 : t5.writable) ? t5 == null ? void 0 : t5.writable : e5(t5.writable) : void 0 });
        let i5 = t5 == null ? void 0 : t5.then;
        if (typeof i5 == `function`) {
          let e6;
          return D4(i5, t5, (t6) => {
            t6 != null && e6.push(t6), e6.push(null);
          }, (t6) => {
            v4(e6, t6);
          }), e6 = new O4({ objectMode: true, writable: false, read() {
          } });
        }
        throw new g4(n4, [`Blob`, `ReadableStream`, `WritableStream`, `Stream`, `Iterable`, `AsyncIterable`, `Function`, `{ readable, writable } pair`, `Promise`], t5);
      };
      function k4(e5) {
        let { promise: t5, resolve: n4 } = S4(), i5 = new E4(), a5 = i5.signal;
        return { value: e5((async function* () {
          for (; ; ) {
            let e6 = t5;
            t5 = null;
            let { chunk: i6, done: o4, cb: s4 } = await e6;
            if (r3.nextTick(s4), o4) return;
            if (a5.aborted) throw new h5(void 0, { cause: a5.reason });
            ({ promise: t5, resolve: n4 } = S4()), yield i6;
          }
        })(), { signal: a5 }), write(e6, t6, r4) {
          let i6 = n4;
          n4 = null, i6({ chunk: e6, done: false, cb: r4 });
        }, final(e6) {
          let t6 = n4;
          n4 = null, t6({ done: true, cb: e6 });
        }, destroy(e6, t6) {
          i5.abort(), t6(e6);
        } };
      }
      function A4(e5) {
        let t5 = e5.readable && typeof e5.readable.read != `function` ? b4.wrap(e5.readable) : e5.readable, n4 = e5.writable, r4 = !!a4(t5), i5 = !!o3(n4), s4, c5, l5, u6, d4;
        function f4(e6) {
          let t6 = u6;
          u6 = null, t6 ? t6(e6) : e6 && d4.destroy(e6);
        }
        return d4 = new O4({ readableObjectMode: !!(t5 != null && t5.readableObjectMode), writableObjectMode: !!(n4 != null && n4.writableObjectMode), readable: r4, writable: i5 }), i5 && (m4(n4, (e6) => {
          i5 = false, e6 && v4(t5, e6), f4(e6);
        }), d4._write = function(e6, t6, r5) {
          n4.write(e6, t6) ? r5() : s4 = r5;
        }, d4._final = function(e6) {
          n4.end(), c5 = e6;
        }, n4.on(`drain`, function() {
          if (s4) {
            let e6 = s4;
            s4 = null, e6();
          }
        }), n4.on(`finish`, function() {
          if (c5) {
            let e6 = c5;
            c5 = null, e6();
          }
        })), r4 && (m4(t5, (e6) => {
          r4 = false, e6 && v4(t5, e6), f4(e6);
        }), t5.on(`readable`, function() {
          if (l5) {
            let e6 = l5;
            l5 = null, e6();
          }
        }), t5.on(`end`, function() {
          d4.push(null);
        }), d4._read = function() {
          for (; ; ) {
            let e6 = t5.read();
            if (e6 === null) {
              l5 = d4._read;
              return;
            }
            if (!d4.push(e6)) return;
          }
        }), d4._destroy = function(e6, r5) {
          !e6 && u6 !== null && (e6 = new h5()), l5 = null, s4 = null, c5 = null, u6 === null ? r5(e6) : (u6 = r5, v4(n4, e6), v4(t5, e6));
        }, d4;
      }
    }));
    st = f(((e4, t4) => {
      let { ObjectDefineProperties: n4, ObjectGetOwnPropertyDescriptor: r3, ObjectKeys: i4, ObjectSetPrototypeOf: a4 } = Ve();
      t4.exports = c4;
      let o3 = it(), s3 = at();
      a4(c4.prototype, o3.prototype), a4(c4, o3);
      {
        let e5 = i4(s3.prototype);
        for (let t5 = 0; t5 < e5.length; t5++) {
          let n5 = e5[t5];
          c4.prototype[n5] || (c4.prototype[n5] = s3.prototype[n5]);
        }
      }
      function c4(e5) {
        if (!(this instanceof c4)) return new c4(e5);
        o3.call(this, e5), s3.call(this, e5), e5 ? (this.allowHalfOpen = e5.allowHalfOpen !== false, e5.readable === false && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), e5.writable === false && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true)) : this.allowHalfOpen = true;
      }
      n4(c4.prototype, { writable: { __proto__: null, ...r3(s3.prototype, `writable`) }, writableHighWaterMark: { __proto__: null, ...r3(s3.prototype, `writableHighWaterMark`) }, writableObjectMode: { __proto__: null, ...r3(s3.prototype, `writableObjectMode`) }, writableBuffer: { __proto__: null, ...r3(s3.prototype, `writableBuffer`) }, writableLength: { __proto__: null, ...r3(s3.prototype, `writableLength`) }, writableFinished: { __proto__: null, ...r3(s3.prototype, `writableFinished`) }, writableCorked: { __proto__: null, ...r3(s3.prototype, `writableCorked`) }, writableEnded: { __proto__: null, ...r3(s3.prototype, `writableEnded`) }, writableNeedDrain: { __proto__: null, ...r3(s3.prototype, `writableNeedDrain`) }, destroyed: { __proto__: null, get() {
        return this._readableState === void 0 || this._writableState === void 0 ? false : this._readableState.destroyed && this._writableState.destroyed;
      }, set(e5) {
        this._readableState && this._writableState && (this._readableState.destroyed = e5, this._writableState.destroyed = e5);
      } } });
      let l4;
      function u5() {
        return l4 === void 0 && (l4 = {}), l4;
      }
      c4.fromWeb = function(e5, t5) {
        return u5().newStreamDuplexFromReadableWritablePair(e5, t5);
      }, c4.toWeb = function(e5) {
        return u5().newReadableWritablePairFromDuplex(e5);
      };
      let d3;
      c4.from = function(e5) {
        return d3 ||= ot(), d3(e5, `body`);
      };
    }));
    ct = f(((e4, t4) => {
      let { ObjectSetPrototypeOf: n4, Symbol: r3 } = Ve();
      t4.exports = c4;
      let { ERR_METHOD_NOT_IMPLEMENTED: i4 } = Ue().codes, a4 = st(), { getHighWaterMark: o3 } = tt();
      n4(c4.prototype, a4.prototype), n4(c4, a4);
      let s3 = r3(`kCallback`);
      function c4(e5) {
        if (!(this instanceof c4)) return new c4(e5);
        let t5 = e5 ? o3(this, e5, `readableHighWaterMark`, true) : null;
        t5 === 0 && (e5 = { ...e5, highWaterMark: null, readableHighWaterMark: t5, writableHighWaterMark: e5.writableHighWaterMark || 0 }), a4.call(this, e5), this._readableState.sync = false, this[s3] = null, e5 && (typeof e5.transform == `function` && (this._transform = e5.transform), typeof e5.flush == `function` && (this._flush = e5.flush)), this.on(`prefinish`, u5);
      }
      function l4(e5) {
        typeof this._flush == `function` && !this.destroyed ? this._flush((t5, n5) => {
          if (t5) {
            e5 ? e5(t5) : this.destroy(t5);
            return;
          }
          n5 != null && this.push(n5), this.push(null), e5 && e5();
        }) : (this.push(null), e5 && e5());
      }
      function u5() {
        this._final !== l4 && l4.call(this);
      }
      c4.prototype._final = l4, c4.prototype._transform = function(e5, t5, n5) {
        throw new i4(`_transform()`);
      }, c4.prototype._write = function(e5, t5, n5) {
        let r4 = this._readableState, i5 = this._writableState, a5 = r4.length;
        this._transform(e5, t5, (e6, t6) => {
          if (e6) {
            n5(e6);
            return;
          }
          t6 != null && this.push(t6), i5.ended || a5 === r4.length || r4.length < r4.highWaterMark ? n5() : this[s3] = n5;
        });
      }, c4.prototype._read = function() {
        if (this[s3]) {
          let e5 = this[s3];
          this[s3] = null, e5();
        }
      };
    }));
    lt = f(((e4, t4) => {
      let { ObjectSetPrototypeOf: n4 } = Ve();
      t4.exports = i4;
      let r3 = ct();
      n4(i4.prototype, r3.prototype), n4(i4, r3);
      function i4(e5) {
        if (!(this instanceof i4)) return new i4(e5);
        r3.call(this, e5);
      }
      i4.prototype._transform = function(e5, t5, n5) {
        n5(null, e5);
      };
    }));
    ut = f(((e4, t4) => {
      let n4 = Je(), { ArrayIsArray: r3, Promise: i4, SymbolAsyncIterator: a4, SymbolDispose: o3 } = Ve(), s3 = Xe(), { once: c4 } = Ke(), l4 = Ze(), u5 = st(), { aggregateTwoErrors: d3, codes: { ERR_INVALID_ARG_TYPE: f3, ERR_INVALID_RETURN_VALUE: p3, ERR_MISSING_ARGS: m4, ERR_STREAM_DESTROYED: h5, ERR_STREAM_PREMATURE_CLOSE: g4 }, AbortError: _4 } = Ue(), { validateFunction: v4, validateAbortSignal: y5 } = qe(), { isIterable: b4, isReadable: x4, isReadableNodeStream: S4, isNodeStream: C5, isTransformStream: w4, isWebStream: T4, isReadableStream: E4, isReadableFinished: D4 } = Ye(), O4 = globalThis.AbortController || Ge().AbortController, k4, A4, j4;
      function M4(e5, t5, n5) {
        let r4 = false;
        return e5.on(`close`, () => {
          r4 = true;
        }), { destroy: (t6) => {
          r4 || (r4 = true, l4.destroyer(e5, t6 || new h5(`pipe`)));
        }, cleanup: s3(e5, { readable: t5, writable: n5 }, (e6) => {
          r4 = !e6;
        }) };
      }
      function N4(e5) {
        return v4(e5[e5.length - 1], `streams[stream.length - 1]`), e5.pop();
      }
      function P4(e5) {
        if (b4(e5)) return e5;
        if (S4(e5)) return F4(e5);
        throw new f3(`val`, [`Readable`, `Iterable`, `AsyncIterable`], e5);
      }
      async function* F4(e5) {
        A4 ||= it(), yield* A4.prototype[a4].call(e5);
      }
      async function ee3(e5, t5, n5, { end: r4 }) {
        let a5, o4 = null, c5 = (e6) => {
          if (e6 && (a5 = e6), o4) {
            let e7 = o4;
            o4 = null, e7();
          }
        }, l5 = () => new i4((e6, t6) => {
          a5 ? t6(a5) : o4 = () => {
            a5 ? t6(a5) : e6();
          };
        });
        t5.on(`drain`, c5);
        let u6 = s3(t5, { readable: false }, c5);
        try {
          t5.writableNeedDrain && await l5();
          for await (let n6 of e5) t5.write(n6) || await l5();
          r4 && (t5.end(), await l5()), n5();
        } catch (e6) {
          n5(a5 === e6 ? e6 : d3(a5, e6));
        } finally {
          u6(), t5.off(`drain`, c5);
        }
      }
      async function I5(e5, t5, n5, { end: r4 }) {
        w4(t5) && (t5 = t5.writable);
        let i5 = t5.getWriter();
        try {
          for await (let t6 of e5) await i5.ready, i5.write(t6).catch(() => {
          });
          await i5.ready, r4 && await i5.close(), n5();
        } catch (e6) {
          try {
            await i5.abort(e6), n5(e6);
          } catch (e7) {
            n5(e7);
          }
        }
      }
      function L4(...e5) {
        return R5(e5, c4(N4(e5)));
      }
      function R5(e5, t5, i5) {
        if (e5.length === 1 && r3(e5[0]) && (e5 = e5[0]), e5.length < 2) throw new m4(`streams`);
        let a5 = new O4(), s4 = a5.signal, c5 = i5 == null ? void 0 : i5.signal, l5 = [];
        y5(c5, `options.signal`);
        function d4() {
          F5(new _4());
        }
        j4 ||= Ke().addAbortListener;
        let h6;
        c5 && (h6 = j4(c5, d4));
        let g5, v5, D5 = [], A5 = 0;
        function N5(e6) {
          F5(e6, --A5 === 0);
        }
        function F5(e6, r4) {
          var i6;
          if (e6 && (!g5 || g5.code === `ERR_STREAM_PREMATURE_CLOSE`) && (g5 = e6), !(!g5 && !r4)) {
            for (; D5.length; ) D5.shift()(g5);
            (i6 = h6) == null || i6[o3](), a5.abort(), r4 && (g5 || l5.forEach((e7) => e7()), n4.nextTick(t5, g5, v5));
          }
        }
        let L5;
        for (let t6 = 0; t6 < e5.length; t6++) {
          let r4 = e5[t6], a6 = t6 < e5.length - 1, o4 = t6 > 0, c6 = a6 || (i5 == null ? void 0 : i5.end) !== false, d5 = t6 === e5.length - 1;
          if (C5(r4)) {
            let e6 = function(e7) {
              e7 && e7.name !== `AbortError` && e7.code !== `ERR_STREAM_PREMATURE_CLOSE` && N5(e7);
            };
            if (c6) {
              let { destroy: e7, cleanup: t7 } = M4(r4, a6, o4);
              D5.push(e7), x4(r4) && d5 && l5.push(t7);
            }
            r4.on(`error`, e6), x4(r4) && d5 && l5.push(() => {
              r4.removeListener(`error`, e6);
            });
          }
          if (t6 === 0) if (typeof r4 == `function`) {
            if (L5 = r4({ signal: s4 }), !b4(L5)) throw new p3(`Iterable, AsyncIterable or Stream`, `source`, L5);
          } else L5 = b4(r4) || S4(r4) || w4(r4) ? r4 : u5.from(r4);
          else if (typeof r4 == `function`) if (L5 = w4(L5) ? P4(L5 == null ? void 0 : L5.readable) : P4(L5), L5 = r4(L5, { signal: s4 }), a6) {
            if (!b4(L5, true)) throw new p3(`AsyncIterable`, `transform[${t6 - 1}]`, L5);
          } else {
            k4 ||= lt();
            let e6 = new k4({ objectMode: true }), t7 = L5 == null ? void 0 : L5.then;
            if (typeof t7 == `function`) A5++, t7.call(L5, (t8) => {
              v5 = t8, t8 != null && e6.write(t8), c6 && e6.end(), n4.nextTick(N5);
            }, (t8) => {
              e6.destroy(t8), n4.nextTick(N5, t8);
            });
            else if (b4(L5, true)) A5++, ee3(L5, e6, N5, { end: c6 });
            else if (E4(L5) || w4(L5)) {
              let t8 = L5.readable || L5;
              A5++, ee3(t8, e6, N5, { end: c6 });
            } else throw new p3(`AsyncIterable or Promise`, `destination`, L5);
            L5 = e6;
            let { destroy: r5, cleanup: i6 } = M4(L5, false, true);
            D5.push(r5), d5 && l5.push(i6);
          }
          else if (C5(r4)) {
            if (S4(L5)) {
              A5 += 2;
              let e6 = te3(L5, r4, N5, { end: c6 });
              x4(r4) && d5 && l5.push(e6);
            } else if (w4(L5) || E4(L5)) {
              let e6 = L5.readable || L5;
              A5++, ee3(e6, r4, N5, { end: c6 });
            } else if (b4(L5)) A5++, ee3(L5, r4, N5, { end: c6 });
            else throw new f3(`val`, [`Readable`, `Iterable`, `AsyncIterable`, `ReadableStream`, `TransformStream`], L5);
            L5 = r4;
          } else if (T4(r4)) {
            if (S4(L5)) A5++, I5(P4(L5), r4, N5, { end: c6 });
            else if (E4(L5) || b4(L5)) A5++, I5(L5, r4, N5, { end: c6 });
            else if (w4(L5)) A5++, I5(L5.readable, r4, N5, { end: c6 });
            else throw new f3(`val`, [`Readable`, `Iterable`, `AsyncIterable`, `ReadableStream`, `TransformStream`], L5);
            L5 = r4;
          } else L5 = u5.from(r4);
        }
        return (s4 != null && s4.aborted || c5 != null && c5.aborted) && n4.nextTick(d4), L5;
      }
      function te3(e5, t5, r4, { end: i5 }) {
        let a5 = false;
        if (t5.on(`close`, () => {
          a5 || r4(new g4());
        }), e5.pipe(t5, { end: false }), i5) {
          let r5 = function() {
            a5 = true, t5.end();
          };
          D4(e5) ? n4.nextTick(r5) : e5.once(`end`, r5);
        } else r4();
        return s3(e5, { readable: true, writable: false }, (t6) => {
          let n5 = e5._readableState;
          t6 && t6.code === `ERR_STREAM_PREMATURE_CLOSE` && n5 && n5.ended && !n5.errored && !n5.errorEmitted ? e5.once(`end`, r4).once(`error`, r4) : r4(t6);
        }), s3(t5, { readable: false, writable: true }, r4);
      }
      t4.exports = { pipelineImpl: R5, pipeline: L4 };
    }));
    dt = f(((e4, t4) => {
      let { pipeline: n4 } = ut(), r3 = st(), { destroyer: i4 } = Ze(), { isNodeStream: a4, isReadable: o3, isWritable: s3, isWebStream: c4, isTransformStream: l4, isWritableStream: u5, isReadableStream: d3 } = Ye(), { AbortError: f3, codes: { ERR_INVALID_ARG_VALUE: p3, ERR_MISSING_ARGS: m4 } } = Ue(), h5 = Xe();
      t4.exports = function(...e5) {
        if (e5.length === 0) throw new m4(`streams`);
        if (e5.length === 1) return r3.from(e5[0]);
        let t5 = [...e5];
        if (typeof e5[0] == `function` && (e5[0] = r3.from(e5[0])), typeof e5[e5.length - 1] == `function`) {
          let t6 = e5.length - 1;
          e5[t6] = r3.from(e5[t6]);
        }
        for (let n5 = 0; n5 < e5.length; ++n5) if (!(!a4(e5[n5]) && !c4(e5[n5]))) {
          if (n5 < e5.length - 1 && !(o3(e5[n5]) || d3(e5[n5]) || l4(e5[n5]))) throw new p3(`streams[${n5}]`, t5[n5], `must be readable`);
          if (n5 > 0 && !(s3(e5[n5]) || u5(e5[n5]) || l4(e5[n5]))) throw new p3(`streams[${n5}]`, t5[n5], `must be writable`);
        }
        let g4, _4, v4, y5, b4;
        function x4(e6) {
          let t6 = y5;
          y5 = null, t6 ? t6(e6) : e6 ? b4.destroy(e6) : !T4 && !w4 && b4.destroy();
        }
        let S4 = e5[0], C5 = n4(e5, x4), w4 = !!(s3(S4) || u5(S4) || l4(S4)), T4 = !!(o3(C5) || d3(C5) || l4(C5));
        if (b4 = new r3({ writableObjectMode: !!(S4 != null && S4.writableObjectMode), readableObjectMode: !!(C5 != null && C5.readableObjectMode), writable: w4, readable: T4 }), w4) {
          if (a4(S4)) b4._write = function(e6, t6, n5) {
            S4.write(e6, t6) ? n5() : g4 = n5;
          }, b4._final = function(e6) {
            S4.end(), _4 = e6;
          }, S4.on(`drain`, function() {
            if (g4) {
              let e6 = g4;
              g4 = null, e6();
            }
          });
          else if (c4(S4)) {
            let e6 = (l4(S4) ? S4.writable : S4).getWriter();
            b4._write = async function(t6, n5, r4) {
              try {
                await e6.ready, e6.write(t6).catch(() => {
                }), r4();
              } catch (e7) {
                r4(e7);
              }
            }, b4._final = async function(t6) {
              try {
                await e6.ready, e6.close().catch(() => {
                }), _4 = t6;
              } catch (e7) {
                t6(e7);
              }
            };
          }
          h5(l4(C5) ? C5.readable : C5, () => {
            if (_4) {
              let e6 = _4;
              _4 = null, e6();
            }
          });
        }
        if (T4) {
          if (a4(C5)) C5.on(`readable`, function() {
            if (v4) {
              let e6 = v4;
              v4 = null, e6();
            }
          }), C5.on(`end`, function() {
            b4.push(null);
          }), b4._read = function() {
            for (; ; ) {
              let e6 = C5.read();
              if (e6 === null) {
                v4 = b4._read;
                return;
              }
              if (!b4.push(e6)) return;
            }
          };
          else if (c4(C5)) {
            let e6 = (l4(C5) ? C5.readable : C5).getReader();
            b4._read = async function() {
              for (; ; ) try {
                let { value: t6, done: n5 } = await e6.read();
                if (!b4.push(t6)) return;
                if (n5) {
                  b4.push(null);
                  return;
                }
              } catch {
                return;
              }
            };
          }
        }
        return b4._destroy = function(e6, t6) {
          !e6 && y5 !== null && (e6 = new f3()), v4 = null, g4 = null, _4 = null, y5 === null ? t6(e6) : (y5 = t6, a4(C5) && i4(C5, e6));
        }, b4;
      };
    }));
    ft = f(((e4, t4) => {
      let n4 = globalThis.AbortController || Ge().AbortController, { codes: { ERR_INVALID_ARG_VALUE: r3, ERR_INVALID_ARG_TYPE: i4, ERR_MISSING_ARGS: a4, ERR_OUT_OF_RANGE: o3 }, AbortError: s3 } = Ue(), { validateAbortSignal: c4, validateInteger: l4, validateObject: u5 } = qe(), d3 = Ve().Symbol(`kWeak`), f3 = Ve().Symbol(`kResistStopPropagation`), { finished: p3 } = Xe(), m4 = dt(), { addAbortSignalNoValidate: h5 } = $e(), { isWritable: g4, isNodeStream: _4 } = Ye(), { deprecate: v4 } = Ke(), { ArrayPrototypePush: y5, Boolean: b4, MathFloor: x4, Number: S4, NumberIsNaN: C5, Promise: w4, PromiseReject: T4, PromiseResolve: E4, PromisePrototypeThen: D4, Symbol: O4 } = Ve(), k4 = O4(`kEmpty`), A4 = O4(`kEof`);
      function j4(e5, t5) {
        if (t5 != null && u5(t5, `options`), (t5 == null ? void 0 : t5.signal) != null && c4(t5.signal, `options.signal`), _4(e5) && !g4(e5)) throw new r3(`stream`, e5, `must be writable`);
        let n5 = m4(this, e5);
        return t5 != null && t5.signal && h5(t5.signal, n5), n5;
      }
      function M4(e5, t5) {
        if (typeof e5 != `function`) throw new i4(`fn`, [`Function`, `AsyncFunction`], e5);
        t5 != null && u5(t5, `options`), (t5 == null ? void 0 : t5.signal) != null && c4(t5.signal, `options.signal`);
        let n5 = 1;
        (t5 == null ? void 0 : t5.concurrency) != null && (n5 = x4(t5.concurrency));
        let r4 = n5 - 1;
        return (t5 == null ? void 0 : t5.highWaterMark) != null && (r4 = x4(t5.highWaterMark)), l4(n5, `options.concurrency`, 1), l4(r4, `options.highWaterMark`, 0), r4 += n5, async function* () {
          let i5 = Ke().AbortSignalAny([t5 == null ? void 0 : t5.signal].filter(b4)), a5 = this, o4 = [], c5 = { signal: i5 }, l5, u6, d4 = false, f4 = 0;
          function p4() {
            d4 = true, m5();
          }
          function m5() {
            --f4, h6();
          }
          function h6() {
            u6 && !d4 && f4 < n5 && o4.length < r4 && (u6(), u6 = null);
          }
          async function g5() {
            try {
              for await (let t6 of a5) {
                if (d4) return;
                if (i5.aborted) throw new s3();
                try {
                  if (t6 = e5(t6, c5), t6 === k4) continue;
                  t6 = E4(t6);
                } catch (e6) {
                  t6 = T4(e6);
                }
                f4 += 1, D4(t6, m5, p4), o4.push(t6), l5 &&= (l5(), null), !d4 && (o4.length >= r4 || f4 >= n5) && await new w4((e6) => {
                  u6 = e6;
                });
              }
              o4.push(A4);
            } catch (e6) {
              let t6 = T4(e6);
              D4(t6, m5, p4), o4.push(t6);
            } finally {
              d4 = true, l5 &&= (l5(), null);
            }
          }
          g5();
          try {
            for (; ; ) {
              for (; o4.length > 0; ) {
                let e6 = await o4[0];
                if (e6 === A4) return;
                if (i5.aborted) throw new s3();
                e6 !== k4 && (yield e6), o4.shift(), h6();
              }
              await new w4((e6) => {
                l5 = e6;
              });
            }
          } finally {
            d4 = true, u6 &&= (u6(), null);
          }
        }.call(this);
      }
      function N4(e5 = void 0) {
        return e5 != null && u5(e5, `options`), (e5 == null ? void 0 : e5.signal) != null && c4(e5.signal, `options.signal`), async function* () {
          let t5 = 0;
          for await (let r4 of this) {
            var n5;
            if (e5 != null && (n5 = e5.signal) != null && n5.aborted) throw new s3({ cause: e5.signal.reason });
            yield [t5++, r4];
          }
        }.call(this);
      }
      async function P4(e5, t5 = void 0) {
        for await (let n5 of L4.call(this, e5, t5)) return true;
        return false;
      }
      async function F4(e5, t5 = void 0) {
        if (typeof e5 != `function`) throw new i4(`fn`, [`Function`, `AsyncFunction`], e5);
        return !await P4.call(this, async (...t6) => !await e5(...t6), t5);
      }
      async function ee3(e5, t5) {
        for await (let n5 of L4.call(this, e5, t5)) return n5;
      }
      async function I5(e5, t5) {
        if (typeof e5 != `function`) throw new i4(`fn`, [`Function`, `AsyncFunction`], e5);
        async function n5(t6, n6) {
          return await e5(t6, n6), k4;
        }
        for await (let e6 of M4.call(this, n5, t5)) ;
      }
      function L4(e5, t5) {
        if (typeof e5 != `function`) throw new i4(`fn`, [`Function`, `AsyncFunction`], e5);
        async function n5(t6, n6) {
          return await e5(t6, n6) ? t6 : k4;
        }
        return M4.call(this, n5, t5);
      }
      var R5 = class extends a4 {
        constructor() {
          super(`reduce`), this.message = `Reduce of an empty stream requires an initial value`;
        }
      };
      async function te3(e5, t5, r4) {
        var a5;
        if (typeof e5 != `function`) throw new i4(`reducer`, [`Function`, `AsyncFunction`], e5);
        r4 != null && u5(r4, `options`), (r4 == null ? void 0 : r4.signal) != null && c4(r4.signal, `options.signal`);
        let o4 = arguments.length > 1;
        if (r4 != null && (a5 = r4.signal) != null && a5.aborted) {
          let e6 = new s3(void 0, { cause: r4.signal.reason });
          throw this.once(`error`, () => {
          }), await p3(this.destroy(e6)), e6;
        }
        let l5 = new n4(), m5 = l5.signal;
        if (r4 != null && r4.signal) {
          let e6 = { once: true, [d3]: this, [f3]: true };
          r4.signal.addEventListener(`abort`, () => l5.abort(), e6);
        }
        let h6 = false;
        try {
          for await (let n5 of this) {
            var g5;
            if (h6 = true, r4 != null && (g5 = r4.signal) != null && g5.aborted) throw new s3();
            o4 ? t5 = await e5(t5, n5, { signal: m5 }) : (t5 = n5, o4 = true);
          }
          if (!h6 && !o4) throw new R5();
        } finally {
          l5.abort();
        }
        return t5;
      }
      async function ne3(e5) {
        e5 != null && u5(e5, `options`), (e5 == null ? void 0 : e5.signal) != null && c4(e5.signal, `options.signal`);
        let t5 = [];
        for await (let r4 of this) {
          var n5;
          if (e5 != null && (n5 = e5.signal) != null && n5.aborted) throw new s3(void 0, { cause: e5.signal.reason });
          y5(t5, r4);
        }
        return t5;
      }
      function z4(e5, t5) {
        let n5 = M4.call(this, e5, t5);
        return async function* () {
          for await (let e6 of n5) yield* e6;
        }.call(this);
      }
      function B4(e5) {
        if (e5 = S4(e5), C5(e5)) return 0;
        if (e5 < 0) throw new o3(`number`, `>= 0`, e5);
        return e5;
      }
      function V4(e5, t5 = void 0) {
        return t5 != null && u5(t5, `options`), (t5 == null ? void 0 : t5.signal) != null && c4(t5.signal, `options.signal`), e5 = B4(e5), async function* () {
          var n5;
          if (t5 != null && (n5 = t5.signal) != null && n5.aborted) throw new s3();
          for await (let n6 of this) {
            var r4;
            if (t5 != null && (r4 = t5.signal) != null && r4.aborted) throw new s3();
            e5-- <= 0 && (yield n6);
          }
        }.call(this);
      }
      function H3(e5, t5 = void 0) {
        return t5 != null && u5(t5, `options`), (t5 == null ? void 0 : t5.signal) != null && c4(t5.signal, `options.signal`), e5 = B4(e5), async function* () {
          var n5;
          if (t5 != null && (n5 = t5.signal) != null && n5.aborted) throw new s3();
          for await (let n6 of this) {
            var r4;
            if (t5 != null && (r4 = t5.signal) != null && r4.aborted) throw new s3();
            if (e5-- > 0 && (yield n6), e5 <= 0) return;
          }
        }.call(this);
      }
      t4.exports.streamReturningOperators = { asIndexedPairs: v4(N4, `readable.asIndexedPairs will be removed in a future version.`), drop: V4, filter: L4, flatMap: z4, map: M4, take: H3, compose: j4 }, t4.exports.promiseReturningOperators = { every: F4, forEach: I5, reduce: te3, toArray: ne3, some: P4, find: ee3 };
    }));
    pt = f(((e4, t4) => {
      let { ArrayPrototypePop: n4, Promise: r3 } = Ve(), { isIterable: i4, isNodeStream: a4, isWebStream: o3 } = Ye(), { pipelineImpl: s3 } = ut(), { finished: c4 } = Xe();
      mt();
      function l4(...e5) {
        return new r3((t5, r4) => {
          let c5, l5, u5 = e5[e5.length - 1];
          if (u5 && typeof u5 == `object` && !a4(u5) && !i4(u5) && !o3(u5)) {
            let t6 = n4(e5);
            c5 = t6.signal, l5 = t6.end;
          }
          s3(e5, (e6, n5) => {
            e6 ? r4(e6) : t5(n5);
          }, { signal: c5, end: l5 });
        });
      }
      t4.exports = { finished: c4, pipeline: l4 };
    }));
    mt = f(((e4, t4) => {
      let { Buffer: r3 } = h2(`buffer`), { ObjectDefineProperty: i4, ObjectKeys: a4, ReflectApply: o3 } = Ve(), { promisify: { custom: s3 } } = Ke(), { streamReturningOperators: c4, promiseReturningOperators: l4 } = ft(), { codes: { ERR_ILLEGAL_CONSTRUCTOR: u5 } } = Ue(), d3 = dt(), { setDefaultHighWaterMark: f3, getDefaultHighWaterMark: p3 } = tt(), { pipeline: m4 } = ut(), { destroyer: h5 } = Ze(), g4 = Xe(), _4 = pt(), v4 = Ye(), y5 = t4.exports = Qe().Stream;
      y5.isDestroyed = v4.isDestroyed, y5.isDisturbed = v4.isDisturbed, y5.isErrored = v4.isErrored, y5.isReadable = v4.isReadable, y5.isWritable = v4.isWritable, y5.Readable = it();
      for (let e5 of a4(c4)) {
        let n4 = function(...e6) {
          if (new.target) throw u5();
          return y5.Readable.from(o3(t5, this, e6));
        };
        let t5 = c4[e5];
        i4(n4, `name`, { __proto__: null, value: t5.name }), i4(n4, `length`, { __proto__: null, value: t5.length }), i4(y5.Readable.prototype, e5, { __proto__: null, value: n4, enumerable: false, configurable: true, writable: true });
      }
      for (let e5 of a4(l4)) {
        let n4 = function(...e6) {
          if (new.target) throw u5();
          return o3(t5, this, e6);
        };
        let t5 = l4[e5];
        i4(n4, `name`, { __proto__: null, value: t5.name }), i4(n4, `length`, { __proto__: null, value: t5.length }), i4(y5.Readable.prototype, e5, { __proto__: null, value: n4, enumerable: false, configurable: true, writable: true });
      }
      y5.Writable = at(), y5.Duplex = st(), y5.Transform = ct(), y5.PassThrough = lt(), y5.pipeline = m4;
      let { addAbortSignal: b4 } = $e();
      y5.addAbortSignal = b4, y5.finished = g4, y5.destroy = h5, y5.compose = d3, y5.setDefaultHighWaterMark = f3, y5.getDefaultHighWaterMark = p3, i4(y5, `promises`, { __proto__: null, configurable: true, enumerable: true, get() {
        return _4;
      } }), i4(m4, s3, { __proto__: null, enumerable: true, get() {
        return _4.pipeline;
      } }), i4(g4, s3, { __proto__: null, enumerable: true, get() {
        return _4.finished;
      } }), y5.Stream = y5, y5._isUint8Array = function(e5) {
        return e5 instanceof Uint8Array;
      }, y5._uint8ArrayToBuffer = function(e5) {
        return r3.from(e5.buffer, e5.byteOffset, e5.byteLength);
      };
    }));
    ht = f(((e4, t4) => {
      let r3 = h2(`stream`);
      if (r3 && process.env.READABLE_STREAM === `disable`) {
        let e5 = r3.promises;
        t4.exports._uint8ArrayToBuffer = r3._uint8ArrayToBuffer, t4.exports._isUint8Array = r3._isUint8Array, t4.exports.isDisturbed = r3.isDisturbed, t4.exports.isErrored = r3.isErrored, t4.exports.isReadable = r3.isReadable, t4.exports.Readable = r3.Readable, t4.exports.Writable = r3.Writable, t4.exports.Duplex = r3.Duplex, t4.exports.Transform = r3.Transform, t4.exports.PassThrough = r3.PassThrough, t4.exports.addAbortSignal = r3.addAbortSignal, t4.exports.finished = r3.finished, t4.exports.destroy = r3.destroy, t4.exports.pipeline = r3.pipeline, t4.exports.compose = r3.compose, Object.defineProperty(r3, `promises`, { configurable: true, enumerable: true, get() {
          return e5;
        } }), t4.exports.Stream = r3.Stream;
      } else {
        let e5 = mt(), n4 = pt(), r4 = e5.Readable.destroy;
        t4.exports = e5.Readable, t4.exports._uint8ArrayToBuffer = e5._uint8ArrayToBuffer, t4.exports._isUint8Array = e5._isUint8Array, t4.exports.isDisturbed = e5.isDisturbed, t4.exports.isErrored = e5.isErrored, t4.exports.isReadable = e5.isReadable, t4.exports.Readable = e5.Readable, t4.exports.Writable = e5.Writable, t4.exports.Duplex = e5.Duplex, t4.exports.Transform = e5.Transform, t4.exports.PassThrough = e5.PassThrough, t4.exports.addAbortSignal = e5.addAbortSignal, t4.exports.finished = e5.finished, t4.exports.destroy = e5.destroy, t4.exports.destroy = r4, t4.exports.pipeline = e5.pipeline, t4.exports.compose = e5.compose, Object.defineProperty(e5, `promises`, { configurable: true, enumerable: true, get() {
          return n4;
        } }), t4.exports.Stream = e5.Stream;
      }
      t4.exports.default = t4.exports;
    }));
    gt = m(Pe(), 1);
    _t = m(Be(), 1);
    Tt = { request: wt };
    zt = c3(o2);
    Bt = Tt;
    Kt = { async fetchRefs(e4) {
      try {
        return e4.transport === `ssh` ? await Vt(e4) : await Ht(e4);
      } catch (t4) {
        Gt(e4, t4, e4.transport, `fetch`);
      }
    }, async clone(e4, t4, n4, r3 = e4.transport) {
      try {
        r3 === `ssh` ? await Ut(e4, t4, n4, r3) : await Wt(e4, t4, n4, r3);
      } catch (t5) {
        Gt(e4, t5, r3, `clone`);
      }
    } };
  }
});

// node_modules/.pnpm/@clack+core@1.5.1/node_modules/@clack/core/dist/index.mjs
import { styleText } from "util";
import { stdout, stdin } from "process";
import * as l from "readline";
import l__default from "readline";

// node_modules/.pnpm/fast-string-truncated-width@3.0.3/node_modules/fast-string-truncated-width/dist/utils.js
var getCodePointsLength = /* @__PURE__ */ (() => {
  const SURROGATE_PAIR_RE = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  return (input) => {
    let surrogatePairsNr = 0;
    SURROGATE_PAIR_RE.lastIndex = 0;
    while (SURROGATE_PAIR_RE.test(input)) {
      surrogatePairsNr += 1;
    }
    return input.length - surrogatePairsNr;
  };
})();
var isFullWidth = (x4) => {
  return x4 === 12288 || x4 >= 65281 && x4 <= 65376 || x4 >= 65504 && x4 <= 65510;
};
var isWideNotCJKTNotEmoji = (x4) => {
  return x4 === 8987 || x4 === 9001 || x4 >= 12272 && x4 <= 12287 || x4 >= 12289 && x4 <= 12350 || x4 >= 12441 && x4 <= 12543 || x4 >= 12549 && x4 <= 12591 || x4 >= 12593 && x4 <= 12686 || x4 >= 12688 && x4 <= 12771 || x4 >= 12783 && x4 <= 12830 || x4 >= 12832 && x4 <= 12871 || x4 >= 12880 && x4 <= 19903 || x4 >= 65040 && x4 <= 65049 || x4 >= 65072 && x4 <= 65106 || x4 >= 65108 && x4 <= 65126 || x4 >= 65128 && x4 <= 65131 || x4 >= 127488 && x4 <= 127490 || x4 >= 127504 && x4 <= 127547 || x4 >= 127552 && x4 <= 127560 || x4 >= 131072 && x4 <= 196605 || x4 >= 196608 && x4 <= 262141;
};

// node_modules/.pnpm/fast-string-truncated-width@3.0.3/node_modules/fast-string-truncated-width/dist/index.js
var ANSI_RE = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]|\u001b\]8;[^;]*;.*?(?:\u0007|\u001b\u005c)/y;
var CONTROL_RE = /[\x00-\x08\x0A-\x1F\x7F-\x9F]{1,1000}/y;
var CJKT_WIDE_RE = /(?:(?![\uFF61-\uFF9F\uFF00-\uFFEF])[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}\p{Script=Tangut}]){1,1000}/yu;
var TAB_RE = /\t{1,1000}/y;
var EMOJI_RE = new RegExp("[\\u{1F1E6}-\\u{1F1FF}]{2}|\\u{1F3F4}[\\u{E0061}-\\u{E007A}]{2}[\\u{E0030}-\\u{E0039}\\u{E0061}-\\u{E007A}]{1,3}\\u{E007F}|(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|\\p{Emoji_Presentation})(?:\\u200D(?:\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|\\p{Emoji_Presentation}|\\p{Emoji}\\uFE0F\\u20E3?))*", "yu");
var LATIN_RE = /(?:[\x20-\x7E\xA0-\xFF](?!\uFE0F)){1,1000}/y;
var MODIFIER_RE = new RegExp("\\p{M}+", "gu");
var NO_TRUNCATION = { limit: Infinity, ellipsis: "" };
var getStringTruncatedWidth = (input, truncationOptions = {}, widthOptions = {}) => {
  const LIMIT = truncationOptions.limit ?? Infinity;
  const ELLIPSIS = truncationOptions.ellipsis ?? "";
  const ELLIPSIS_WIDTH = (truncationOptions == null ? void 0 : truncationOptions.ellipsisWidth) ?? (ELLIPSIS ? getStringTruncatedWidth(ELLIPSIS, NO_TRUNCATION, widthOptions).width : 0);
  const ANSI_WIDTH = 0;
  const CONTROL_WIDTH = widthOptions.controlWidth ?? 0;
  const TAB_WIDTH = widthOptions.tabWidth ?? 8;
  const EMOJI_WIDTH = widthOptions.emojiWidth ?? 2;
  const FULL_WIDTH_WIDTH = 2;
  const REGULAR_WIDTH = widthOptions.regularWidth ?? 1;
  const WIDE_WIDTH = widthOptions.wideWidth ?? FULL_WIDTH_WIDTH;
  const PARSE_BLOCKS = [
    [LATIN_RE, REGULAR_WIDTH],
    [ANSI_RE, ANSI_WIDTH],
    [CONTROL_RE, CONTROL_WIDTH],
    [TAB_RE, TAB_WIDTH],
    [EMOJI_RE, EMOJI_WIDTH],
    [CJKT_WIDE_RE, WIDE_WIDTH]
  ];
  let indexPrev = 0;
  let index = 0;
  let length = input.length;
  let lengthExtra = 0;
  let truncationEnabled = false;
  let truncationIndex = length;
  let truncationLimit = Math.max(0, LIMIT - ELLIPSIS_WIDTH);
  let unmatchedStart = 0;
  let unmatchedEnd = 0;
  let width = 0;
  let widthExtra = 0;
  outer: while (true) {
    if (unmatchedEnd > unmatchedStart || index >= length && index > indexPrev) {
      const unmatched = input.slice(unmatchedStart, unmatchedEnd) || input.slice(indexPrev, index);
      lengthExtra = 0;
      for (const char of unmatched.replaceAll(MODIFIER_RE, "")) {
        const codePoint = char.codePointAt(0) || 0;
        if (isFullWidth(codePoint)) {
          widthExtra = FULL_WIDTH_WIDTH;
        } else if (isWideNotCJKTNotEmoji(codePoint)) {
          widthExtra = WIDE_WIDTH;
        } else {
          widthExtra = REGULAR_WIDTH;
        }
        if (width + widthExtra > truncationLimit) {
          truncationIndex = Math.min(truncationIndex, Math.max(unmatchedStart, indexPrev) + lengthExtra);
        }
        if (width + widthExtra > LIMIT) {
          truncationEnabled = true;
          break outer;
        }
        lengthExtra += char.length;
        width += widthExtra;
      }
      unmatchedStart = unmatchedEnd = 0;
    }
    if (index >= length) {
      break outer;
    }
    for (let i4 = 0, l4 = PARSE_BLOCKS.length; i4 < l4; i4++) {
      const [BLOCK_RE, BLOCK_WIDTH] = PARSE_BLOCKS[i4];
      BLOCK_RE.lastIndex = index;
      if (BLOCK_RE.test(input)) {
        lengthExtra = BLOCK_RE === CJKT_WIDE_RE ? getCodePointsLength(input.slice(index, BLOCK_RE.lastIndex)) : BLOCK_RE === EMOJI_RE ? 1 : BLOCK_RE.lastIndex - index;
        widthExtra = lengthExtra * BLOCK_WIDTH;
        if (width + widthExtra > truncationLimit) {
          truncationIndex = Math.min(truncationIndex, index + Math.floor((truncationLimit - width) / BLOCK_WIDTH));
        }
        if (width + widthExtra > LIMIT) {
          truncationEnabled = true;
          break outer;
        }
        width += widthExtra;
        unmatchedStart = indexPrev;
        unmatchedEnd = index;
        index = indexPrev = BLOCK_RE.lastIndex;
        continue outer;
      }
    }
    index += 1;
  }
  return {
    width: truncationEnabled ? truncationLimit : width,
    index: truncationEnabled ? truncationIndex : length,
    truncated: truncationEnabled,
    ellipsed: truncationEnabled && LIMIT >= ELLIPSIS_WIDTH
  };
};
var dist_default = getStringTruncatedWidth;

// node_modules/.pnpm/fast-string-width@3.0.2/node_modules/fast-string-width/dist/index.js
var NO_TRUNCATION2 = {
  limit: Infinity,
  ellipsis: "",
  ellipsisWidth: 0
};
var fastStringWidth = (input, options = {}) => {
  return dist_default(input, NO_TRUNCATION2, options).width;
};
var dist_default2 = fastStringWidth;

// node_modules/.pnpm/fast-wrap-ansi@0.2.2/node_modules/fast-wrap-ansi/lib/main.js
var ESC = "\x1B";
var CSI = "\x9B";
var END_CODE = 39;
var ANSI_ESCAPE_BELL = "\x07";
var ANSI_CSI = "[";
var ANSI_OSC = "]";
var ANSI_SGR_TERMINATOR = "m";
var ANSI_ESCAPE_LINK = `${ANSI_OSC}8;;`;
var GROUP_REGEX = new RegExp(`(?:\\${ANSI_CSI}(?<code>\\d+)m|\\${ANSI_ESCAPE_LINK}(?<uri>.*)${ANSI_ESCAPE_BELL})`, "y");
var getClosingCode = (openingCode) => {
  if (openingCode >= 30 && openingCode <= 37)
    return 39;
  if (openingCode >= 90 && openingCode <= 97)
    return 39;
  if (openingCode >= 40 && openingCode <= 47)
    return 49;
  if (openingCode >= 100 && openingCode <= 107)
    return 49;
  if (openingCode === 1 || openingCode === 2)
    return 22;
  if (openingCode === 3)
    return 23;
  if (openingCode === 4)
    return 24;
  if (openingCode === 7)
    return 27;
  if (openingCode === 8)
    return 28;
  if (openingCode === 9)
    return 29;
  if (openingCode === 0)
    return 0;
  return void 0;
};
var wrapAnsiCode = (code) => `${ESC}${ANSI_CSI}${code}${ANSI_SGR_TERMINATOR}`;
var wrapAnsiHyperlink = (url) => `${ESC}${ANSI_ESCAPE_LINK}${url}${ANSI_ESCAPE_BELL}`;
var wrapWord = (rows, word, columns) => {
  const characters = word[Symbol.iterator]();
  let isInsideEscape = false;
  let isInsideLinkEscape = false;
  let lastRow = rows.at(-1);
  let visible = lastRow === void 0 ? 0 : dist_default2(lastRow);
  let currentCharacter = characters.next();
  let nextCharacter = characters.next();
  let rawCharacterIndex = 0;
  while (!currentCharacter.done) {
    const character = currentCharacter.value;
    const characterLength = dist_default2(character);
    if (visible + characterLength <= columns) {
      rows[rows.length - 1] += character;
    } else {
      rows.push(character);
      visible = 0;
    }
    if (character === ESC || character === CSI) {
      isInsideEscape = true;
      isInsideLinkEscape = word.startsWith(ANSI_ESCAPE_LINK, rawCharacterIndex + 1);
    }
    if (isInsideEscape) {
      if (isInsideLinkEscape) {
        if (character === ANSI_ESCAPE_BELL) {
          isInsideEscape = false;
          isInsideLinkEscape = false;
        }
      } else if (character === ANSI_SGR_TERMINATOR) {
        isInsideEscape = false;
      }
    } else {
      visible += characterLength;
      if (visible === columns && !nextCharacter.done) {
        rows.push("");
        visible = 0;
      }
    }
    currentCharacter = nextCharacter;
    nextCharacter = characters.next();
    rawCharacterIndex += character.length;
  }
  lastRow = rows.at(-1);
  if (!visible && lastRow !== void 0 && lastRow.length && rows.length > 1) {
    rows[rows.length - 2] += rows.pop();
  }
};
var stringVisibleTrimSpacesRight = (string) => {
  const words = string.split(" ");
  let last = words.length;
  while (last) {
    if (dist_default2(words[last - 1])) {
      break;
    }
    last--;
  }
  if (last === words.length) {
    return string;
  }
  return words.slice(0, last).join(" ") + words.slice(last).join("");
};
var exec = (string, columns, options = {}) => {
  if (options.trim !== false && string.trim() === "") {
    return "";
  }
  let returnValue = "";
  let escapeCode;
  let escapeUrl;
  const words = string.split(" ");
  let rows = [""];
  let rowLength = 0;
  for (let index = 0; index < words.length; index++) {
    const word = words[index];
    if (options.trim !== false) {
      const row = rows.at(-1) ?? "";
      const trimmed = row.trimStart();
      if (row.length !== trimmed.length) {
        rows[rows.length - 1] = trimmed;
        rowLength = dist_default2(trimmed);
      }
    }
    if (index !== 0) {
      if (rowLength >= columns && (options.wordWrap === false || options.trim === false)) {
        rows.push("");
        rowLength = 0;
      }
      if (rowLength || options.trim === false) {
        rows[rows.length - 1] += " ";
        rowLength++;
      }
    }
    const wordLength = dist_default2(word);
    if (options.hard && wordLength > columns) {
      const remainingColumns = columns - rowLength;
      const breaksStartingThisLine = 1 + Math.floor((wordLength - remainingColumns - 1) / columns);
      const breaksStartingNextLine = Math.floor((wordLength - 1) / columns);
      if (breaksStartingNextLine < breaksStartingThisLine) {
        rows.push("");
      }
      wrapWord(rows, word, columns);
      rowLength = dist_default2(rows.at(-1) ?? "");
      continue;
    }
    if (rowLength + wordLength > columns && rowLength && wordLength) {
      if (options.wordWrap === false && rowLength < columns) {
        wrapWord(rows, word, columns);
        rowLength = dist_default2(rows.at(-1) ?? "");
        continue;
      }
      rows.push("");
      rowLength = 0;
    }
    if (rowLength + wordLength > columns && options.wordWrap === false) {
      wrapWord(rows, word, columns);
      rowLength = dist_default2(rows.at(-1) ?? "");
      continue;
    }
    rows[rows.length - 1] += word;
    rowLength += wordLength;
  }
  if (options.trim !== false) {
    rows = rows.map((row) => stringVisibleTrimSpacesRight(row));
  }
  const preString = rows.join("\n");
  let inSurrogate = false;
  for (let i4 = 0; i4 < preString.length; i4++) {
    const character = preString[i4];
    returnValue += character;
    if (!inSurrogate) {
      inSurrogate = character >= "\uD800" && character <= "\uDBFF";
      if (inSurrogate) {
        continue;
      }
    } else {
      inSurrogate = false;
    }
    if (character === ESC || character === CSI) {
      GROUP_REGEX.lastIndex = i4 + 1;
      const groupsResult = GROUP_REGEX.exec(preString);
      const groups = groupsResult == null ? void 0 : groupsResult.groups;
      if ((groups == null ? void 0 : groups.code) !== void 0) {
        const code = Number.parseFloat(groups.code);
        escapeCode = code === END_CODE ? void 0 : code;
      } else if ((groups == null ? void 0 : groups.uri) !== void 0) {
        escapeUrl = groups.uri.length === 0 ? void 0 : groups.uri;
      }
    }
    if (preString[i4 + 1] === "\n") {
      if (escapeUrl) {
        returnValue += wrapAnsiHyperlink("");
      }
      const closingCode = escapeCode ? getClosingCode(escapeCode) : void 0;
      if (escapeCode && closingCode) {
        returnValue += wrapAnsiCode(closingCode);
      }
    } else if (character === "\n") {
      if (escapeCode && getClosingCode(escapeCode)) {
        returnValue += wrapAnsiCode(escapeCode);
      }
      if (escapeUrl) {
        returnValue += wrapAnsiHyperlink(escapeUrl);
      }
    }
  }
  return returnValue;
};
var CRLF_OR_LF = /\r?\n/;
function wrapAnsi(string, columns, options) {
  return String(string).normalize().split(CRLF_OR_LF).map((line) => exec(line, columns, options)).join("\n");
}

// node_modules/.pnpm/@clack+core@1.5.1/node_modules/@clack/core/dist/index.mjs
var import_sisteransi = __toESM(require_src(), 1);
import { ReadStream } from "tty";
function findCursor(s3, o3, l4) {
  var _a4;
  if (!l4.some((r3) => !r3.disabled))
    return s3;
  const t4 = s3 + o3, n4 = Math.max(l4.length - 1, 0), e4 = t4 < 0 ? n4 : t4 > n4 ? 0 : t4;
  return ((_a4 = l4[e4]) == null ? void 0 : _a4.disabled) ? findCursor(e4, o3 < 0 ? -1 : 1, l4) : e4;
}
var a$1 = ["up", "down", "left", "right", "space", "enter", "cancel"];
var t = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var settings = {
  actions: new Set(a$1),
  aliases: /* @__PURE__ */ new Map([
    // vim support
    ["k", "up"],
    ["j", "down"],
    ["h", "left"],
    ["l", "right"],
    ["", "cancel"],
    // opinionated defaults!
    ["escape", "cancel"]
  ]),
  messages: {
    cancel: "Canceled",
    error: "Something went wrong"
  },
  withGuide: true,
  accessible: void 0,
  date: {
    monthNames: [...t],
    messages: {
      required: "Please enter a valid date",
      invalidMonth: "There are only 12 months in a year",
      invalidDay: (n4, e4) => `There are only ${n4} days in ${e4}`,
      afterMin: (n4) => `Date must be on or after ${n4.toISOString().slice(0, 10)}`,
      beforeMax: (n4) => `Date must be on or before ${n4.toISOString().slice(0, 10)}`
    }
  }
};
function isAccessible(n4) {
  if (n4 !== void 0) return n4;
  if (settings.accessible !== void 0) return settings.accessible;
  const e4 = process.env.ACCESSIBLE;
  return e4 !== void 0 && e4 !== "" && e4 !== "0" && e4 !== "false";
}
function isActionKey(n4, e4) {
  if (typeof n4 == "string")
    return settings.aliases.get(n4) === e4;
  for (const s3 of n4)
    if (s3 !== void 0 && isActionKey(s3, e4))
      return true;
  return false;
}
function diffLines(i4, s3) {
  if (i4 === s3) return;
  const e4 = i4.split(`
`), t4 = s3.split(`
`), r3 = Math.max(e4.length, t4.length), f3 = [];
  for (let n4 = 0; n4 < r3; n4++)
    e4[n4] !== t4[n4] && f3.push(n4);
  return {
    lines: f3,
    numLinesBefore: e4.length,
    numLinesAfter: t4.length,
    numLines: r3
  };
}
var R = globalThis.process.platform.startsWith("win");
var CANCEL_SYMBOL = /* @__PURE__ */ Symbol("clack:cancel");
function isCancel(e4) {
  return e4 === CANCEL_SYMBOL;
}
function setRawMode(e4, r3) {
  const o3 = e4;
  o3.isTTY && o3.setRawMode(r3);
}
var getColumns = (e4) => "columns" in e4 && typeof e4.columns == "number" ? e4.columns : 80;
var getRows = (e4) => "rows" in e4 && typeof e4.rows == "number" ? e4.rows : 20;
function wrapTextWithPrefix(e4, r3, o3, n4 = o3, s3 = o3, t4) {
  const f3 = getColumns(e4 ?? stdout);
  return wrapAnsi(r3, f3 - o3.length, {
    hard: true,
    trim: false
  }).split(`
`).map((c4, i4, m4) => {
    const d3 = t4 ? t4(c4, i4) : c4;
    return i4 === 0 ? `${n4}${d3}` : i4 === m4.length - 1 ? `${s3}${d3}` : `${o3}${d3}`;
  }).join(`
`);
}
function runValidation(e4, a4) {
  var _a4, _b3;
  if ("~standard" in e4) {
    const n4 = e4["~standard"].validate(a4);
    return n4 instanceof Promise ? n4.then((r3) => {
      var _a5, _b4;
      return (_b4 = (_a5 = r3.issues) == null ? void 0 : _a5.at(0)) == null ? void 0 : _b4.message;
    }) : (_b3 = (_a4 = n4.issues) == null ? void 0 : _a4.at(0)) == null ? void 0 : _b3.message;
  }
  return e4(a4);
}
var y = class {
  input;
  output;
  _abortSignal;
  rl;
  opts;
  _render;
  _track = false;
  _prevFrame = "";
  _subscribers = /* @__PURE__ */ new Map();
  _cursor = 0;
  state = "initial";
  error = "";
  value;
  userInput = "";
  /**
   * Whether accessible (static, screen-reader friendly) output is enabled for
   * this prompt, resolved from the `accessible` option, the global setting,
   * and the `ACCESSIBLE` env var.
   */
  get accessible() {
    return isAccessible(this.opts.accessible);
  }
  constructor(t4, e4 = true) {
    const { input: i4 = stdin, output: s3 = stdout, render: r3, signal: n4, ...o3 } = t4;
    this.opts = o3, this.onKeypress = this.onKeypress.bind(this), this.close = this.close.bind(this), this.render = this.render.bind(this), this._render = r3.bind(this), this._track = e4, this._abortSignal = n4, this.input = i4, this.output = s3;
  }
  /**
   * Unsubscribe all listeners
   */
  unsubscribe() {
    this._subscribers.clear();
  }
  /**
   * Set a subscriber with opts
   * @param event - The event name
   */
  setSubscriber(t4, e4) {
    const i4 = this._subscribers.get(t4) ?? [];
    i4.push(e4), this._subscribers.set(t4, i4);
  }
  /**
   * Subscribe to an event
   * @param event - The event name
   * @param cb - The callback
   */
  on(t4, e4) {
    this.setSubscriber(t4, { cb: e4 });
  }
  /**
   * Subscribe to an event once
   * @param event - The event name
   * @param cb - The callback
   */
  once(t4, e4) {
    this.setSubscriber(t4, { cb: e4, once: true });
  }
  /**
   * Emit an event with data
   * @param event - The event name
   * @param data - The data to pass to the callback
   */
  emit(t4, ...e4) {
    const i4 = this._subscribers.get(t4) ?? [], s3 = [];
    for (const r3 of i4)
      r3.cb(...e4), r3.once && s3.push(() => i4.splice(i4.indexOf(r3), 1));
    for (const r3 of s3)
      r3();
  }
  prompt() {
    return new Promise((t4) => {
      if (this._abortSignal) {
        if (this._abortSignal.aborted)
          return this.state = "cancel", this.close(), t4(CANCEL_SYMBOL);
        this._abortSignal.addEventListener(
          "abort",
          () => {
            this.state = "cancel", this.close();
          },
          { once: true }
        );
      }
      this.rl = l__default.createInterface({
        input: this.input,
        tabSize: 2,
        prompt: "",
        escapeCodeTimeout: 50,
        terminal: true
      }), this.rl.prompt(), this.opts.initialUserInput !== void 0 && this._setUserInput(this.opts.initialUserInput, true), this.input.on("keypress", this.onKeypress), setRawMode(this.input, true), this.output.on("resize", this.render), this.render(), this.once("submit", () => {
        this.output.write(import_sisteransi.cursor.show), this.output.off("resize", this.render), setRawMode(this.input, false), t4(this.value);
      }), this.once("cancel", () => {
        this.output.write(import_sisteransi.cursor.show), this.output.off("resize", this.render), setRawMode(this.input, false), t4(CANCEL_SYMBOL);
      });
    });
  }
  _isActionKey(t4, e4) {
    return t4 === "	";
  }
  _shouldSubmit(t4, e4) {
    return true;
  }
  _setValue(t4) {
    this.value = t4, this.emit("value", this.value);
  }
  _setUserInput(t4, e4) {
    this.userInput = t4 ?? "", this.emit("userInput", this.userInput), e4 && this._track && this.rl && (this.rl.write(this.userInput), this._cursor = this.rl.cursor);
  }
  _clearUserInput() {
    var _a4;
    (_a4 = this.rl) == null ? void 0 : _a4.write(null, { ctrl: true, name: "u" }), this._setUserInput("");
  }
  async onKeypress(t4, e4) {
    var _a4, _b3, _c3, _d3;
    if (this.state !== "validating") {
      if (this._track && e4.name !== "return" && (e4.name && this._isActionKey(t4, e4) && ((_a4 = this.rl) == null ? void 0 : _a4.write(null, { ctrl: true, name: "h" })), this._cursor = ((_b3 = this.rl) == null ? void 0 : _b3.cursor) ?? 0, this._setUserInput((_c3 = this.rl) == null ? void 0 : _c3.line)), this.state === "error" && (this.state = "active"), (e4 == null ? void 0 : e4.name) && (!this._track && settings.aliases.has(e4.name) && this.emit("cursor", settings.aliases.get(e4.name)), settings.actions.has(e4.name) && this.emit("cursor", e4.name)), t4 && (t4.toLowerCase() === "y" || t4.toLowerCase() === "n") && this.emit("confirm", t4.toLowerCase() === "y"), this.emit("key", t4, e4), (e4 == null ? void 0 : e4.name) === "return" && this._shouldSubmit(t4, e4)) {
        if (this.opts.validate) {
          const i4 = runValidation(this.opts.validate, this.value);
          let s3;
          i4 instanceof Promise ? (this.state = "validating", this.render(), s3 = await i4) : s3 = i4, s3 && (this.error = s3 instanceof Error ? s3.message : s3, this.state = "error", (_d3 = this.rl) == null ? void 0 : _d3.write(this.userInput));
        }
        this.state !== "error" && (this.state = "submit");
      }
      isActionKey([t4, e4 == null ? void 0 : e4.name, e4 == null ? void 0 : e4.sequence], "cancel") && (this.state = "cancel"), (this.state === "submit" || this.state === "cancel") && this.emit("finalize"), this.render(), (this.state === "submit" || this.state === "cancel") && this.close();
    }
  }
  close() {
    var _a4;
    this.input.unpipe(), this.input.removeListener("keypress", this.onKeypress), this.output.write(`
`), setRawMode(this.input, false), (_a4 = this.rl) == null ? void 0 : _a4.close(), this.rl = void 0, this.emit(`${this.state}`, this.value), this.unsubscribe();
  }
  restoreCursor() {
    const t4 = wrapAnsi(this._prevFrame, process.stdout.columns, { hard: true, trim: false }).split(`
`).length - 1;
    this.output.write(import_sisteransi.cursor.move(-999, t4 * -1));
  }
  render() {
    const t4 = wrapAnsi(this._render(this) ?? "", process.stdout.columns, {
      hard: true,
      trim: false
    });
    if (t4 !== this._prevFrame) {
      if (this.state === "initial")
        this.output.write(import_sisteransi.cursor.hide);
      else {
        const e4 = diffLines(this._prevFrame, t4), i4 = getRows(this.output);
        if (this.restoreCursor(), e4) {
          const s3 = Math.max(0, e4.numLinesAfter - i4), r3 = Math.max(0, e4.numLinesBefore - i4);
          let n4 = e4.lines.find((o3) => o3 >= s3);
          if (n4 === void 0) {
            this._prevFrame = t4;
            return;
          }
          if (e4.lines.length === 1) {
            this.output.write(import_sisteransi.cursor.move(0, n4 - r3)), this.output.write(import_sisteransi.erase.lines(1));
            const o3 = t4.split(`
`);
            this.output.write(o3[n4]), this._prevFrame = t4, this.output.write(import_sisteransi.cursor.move(0, o3.length - n4 - 1));
            return;
          } else if (e4.lines.length > 1) {
            if (s3 < r3)
              n4 = s3;
            else {
              const h5 = n4 - r3;
              h5 > 0 && this.output.write(import_sisteransi.cursor.move(0, h5));
            }
            this.output.write(import_sisteransi.erase.down());
            const f3 = t4.split(`
`).slice(n4);
            this.output.write(f3.join(`
`)), this._prevFrame = t4;
            return;
          }
        }
        this.output.write(import_sisteransi.erase.down());
      }
      this.output.write(t4), this.state === "initial" && (this.state = "active"), this._prevFrame = t4;
    }
  }
};
var n$1 = class n extends y {
  options;
  cursor = 0;
  get _selectedValue() {
    return this.options[this.cursor];
  }
  changeValue() {
    const e4 = this._selectedValue;
    this.value = e4 === void 0 ? void 0 : e4.value;
  }
  constructor(e4) {
    var _a4;
    super(e4, false), this.options = e4.options;
    const o3 = this.options.findIndex(({ value: s3 }) => s3 === e4.initialValue), t4 = o3 === -1 ? 0 : o3;
    this.cursor = ((_a4 = this.options[t4]) == null ? void 0 : _a4.disabled) ? findCursor(t4, 1, this.options) : t4, this.changeValue(), this.on("cursor", (s3) => {
      switch (s3) {
        case "left":
        case "up":
          this.cursor = findCursor(this.cursor, -1, this.options);
          break;
        case "down":
        case "right":
          this.cursor = findCursor(this.cursor, 1, this.options);
          break;
      }
      this.changeValue();
    });
  }
};
var n2 = class extends y {
  get userInputWithCursor() {
    if (this.state === "submit")
      return this.userInput;
    const t4 = this.userInput;
    if (this.cursor >= t4.length)
      return `${this.userInput}\u2588`;
    const r3 = t4.slice(0, this.cursor), s3 = t4.slice(this.cursor, this.cursor + 1), e4 = t4.slice(this.cursor + 1);
    return `${r3}${styleText("inverse", s3)}${e4}`;
  }
  get cursor() {
    return this._cursor;
  }
  constructor(t4) {
    super({
      ...t4,
      initialUserInput: t4.initialUserInput ?? t4.initialValue
    }), this.on("userInput", (r3) => {
      this._setValue(r3);
    }), this.on("finalize", () => {
      this.value || (this.value = t4.defaultValue), this.value === void 0 && (this.value = "");
    });
  }
};

// node_modules/.pnpm/@clack+prompts@1.8.1/node_modules/@clack/prompts/dist/index.mjs
import { styleText as styleText2, stripVTControlCharacters } from "util";
import process$1 from "process";
var import_sisteransi2 = __toESM(require_src(), 1);
import { existsSync, lstatSync, readdirSync } from "fs";
import { dirname, join } from "path";
function isUnicodeSupported() {
  if (process$1.platform !== "win32") {
    return process$1.env.TERM !== "linux";
  }
  return Boolean(process$1.env.CI) || Boolean(process$1.env.WT_SESSION) || Boolean(process$1.env.TERMINUS_SUBLIME) || process$1.env.ConEmuTask === "{cmd::Cmder}" || process$1.env.TERM_PROGRAM === "Terminus-Sublime" || process$1.env.TERM_PROGRAM === "vscode" || process$1.env.TERM === "xterm-256color" || process$1.env.TERM === "alacritty" || process$1.env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
var unicode = isUnicodeSupported();
var unicodeOr = (o3, e4) => unicode ? o3 : e4;
var S_STEP_ACTIVE = unicodeOr("\u25C6", "*");
var S_STEP_CANCEL = unicodeOr("\u25A0", "x");
var S_STEP_ERROR = unicodeOr("\u25B2", "x");
var S_STEP_SUBMIT = unicodeOr("\u25C7", "o");
var S_BAR_START = unicodeOr("\u250C", "T");
var S_BAR = unicodeOr("\u2502", "|");
var S_BAR_END = unicodeOr("\u2514", "\u2014");
var S_BAR_START_RIGHT = unicodeOr("\u2510", "T");
var S_BAR_END_RIGHT = unicodeOr("\u2518", "\u2014");
var S_RADIO_ACTIVE = unicodeOr("\u25CF", ">");
var S_RADIO_INACTIVE = unicodeOr("\u25CB", " ");
var S_CHECKBOX_ACTIVE = unicodeOr("\u25FB", "[\u2022]");
var S_CHECKBOX_SELECTED = unicodeOr("\u25FC", "[+]");
var S_CHECKBOX_INACTIVE = unicodeOr("\u25FB", "[ ]");
var S_PASSWORD_MASK = unicodeOr("\u25AA", "\u2022");
var S_BAR_H = unicodeOr("\u2500", "-");
var S_CORNER_TOP_RIGHT = unicodeOr("\u256E", "+");
var S_CONNECT_LEFT = unicodeOr("\u251C", "+");
var S_CORNER_BOTTOM_RIGHT = unicodeOr("\u256F", "+");
var S_CORNER_BOTTOM_LEFT = unicodeOr("\u2570", "+");
var S_CORNER_TOP_LEFT = unicodeOr("\u256D", "+");
var S_INFO = unicodeOr("\u25CF", "\u2022");
var S_SUCCESS = unicodeOr("\u25C6", "*");
var S_WARN = unicodeOr("\u25B2", "!");
var S_ERROR = unicodeOr("\u25A0", "x");
var symbol = (o3) => {
  switch (o3) {
    case "initial":
    case "active":
      return styleText2("cyan", S_STEP_ACTIVE);
    case "cancel":
      return styleText2("red", S_STEP_CANCEL);
    case "error":
      return styleText2("yellow", S_STEP_ERROR);
    case "submit":
      return styleText2("green", S_STEP_SUBMIT);
    case "validating":
      return styleText2("dim", S_STEP_ACTIVE);
  }
};
var symbolBar = (o3) => {
  switch (o3) {
    case "initial":
    case "active":
      return styleText2("cyan", S_BAR);
    case "cancel":
      return styleText2("red", S_BAR);
    case "error":
      return styleText2("yellow", S_BAR);
    case "submit":
      return styleText2("green", S_BAR);
  }
};
function formatInstructionFooter(o3, e4) {
  const r3 = [`${e4 ? `${styleText2("cyan", S_BAR)}  ` : ""}${o3.join(" \u2022 ")}`];
  return e4 && r3.push(styleText2("cyan", S_BAR_END)), r3;
}
var I = (l4, e4, w4, p3, b4, C5 = false) => {
  let r3 = e4, O4 = 0;
  if (C5)
    for (let i4 = p3 - 1; i4 >= w4; i4--) {
      const m4 = l4[i4];
      if (m4 && (r3 -= m4.length), O4++, r3 <= b4) break;
    }
  else
    for (let i4 = w4; i4 < p3; i4++) {
      const m4 = l4[i4];
      if (m4 && (r3 -= m4.length), O4++, r3 <= b4) break;
    }
  return { lineCount: r3, removals: O4 };
};
var limitOptions = ({
  cursor: l4,
  options: e4,
  style: w4,
  output: p3 = process.stdout,
  maxItems: b4 = Number.POSITIVE_INFINITY,
  columnPadding: C5 = 0,
  rowPadding: r3 = 4
}) => {
  const i4 = getColumns(p3) - C5, m4 = getRows(p3), M4 = styleText2("dim", "..."), v4 = Math.max(m4 - r3, 0), a4 = Math.max(Math.min(b4, v4), 5);
  let f3 = 0;
  l4 >= a4 - 3 && (f3 = Math.max(
    Math.min(l4 - a4 + 3, e4.length - a4),
    0
  ));
  let d3 = a4 < e4.length && f3 > 0, c4 = a4 < e4.length && f3 + a4 < e4.length;
  const W3 = Math.min(
    f3 + a4,
    e4.length
  ), s3 = [];
  let g4 = 0;
  d3 && g4++, c4 && g4++;
  const T4 = f3 + (d3 ? 1 : 0), y5 = W3 - (c4 ? 1 : 0);
  for (let t4 = T4; t4 < y5; t4++) {
    const n4 = e4[t4], o3 = n4 ? w4(n4, t4 === l4) : "", h5 = wrapAnsi(o3, i4, {
      hard: true,
      trim: false
    }).split(`
`);
    s3.push(h5), g4 += h5.length;
  }
  if (g4 > v4) {
    let t4 = 0, n4 = 0, o3 = g4;
    const h5 = l4 - T4;
    let u5 = v4;
    const L4 = () => I(s3, o3, 0, h5, u5), E4 = () => I(
      s3,
      o3,
      h5 + 1,
      s3.length,
      u5,
      true
    );
    d3 ? ({ lineCount: o3, removals: t4 } = L4(), o3 > u5 && (c4 || (u5 -= 1), { lineCount: o3, removals: n4 } = E4())) : (c4 || (u5 -= 1), { lineCount: o3, removals: n4 } = E4(), o3 > u5 && (u5 -= 1, { lineCount: o3, removals: t4 } = L4())), t4 > 0 && (d3 = true, s3.splice(0, t4)), n4 > 0 && (c4 = true, s3.splice(s3.length - n4, n4));
  }
  const x4 = [];
  d3 && x4.push(M4);
  for (const t4 of s3)
    for (const n4 of t4)
      x4.push(n4);
  return c4 && x4.push(M4), x4;
};
var MULTISELECT_INSTRUCTIONS = [
  `${styleText2("dim", "\u2191/\u2193")} to navigate`,
  `${styleText2("dim", "Space:")} select`,
  `${styleText2("dim", "Enter:")} confirm`
];
var log = {
  message: (s3 = [], {
    symbol: e4 = styleText2("gray", S_BAR),
    secondarySymbol: r3 = styleText2("gray", S_BAR),
    output: m4 = process.stdout,
    spacing: l4 = 1,
    withGuide: c4
  } = {}) => {
    const t4 = [], o3 = c4 ?? settings.withGuide, f3 = o3 ? r3 : "", O4 = o3 ? `${e4}  ` : "", u5 = o3 ? `${r3}  ` : "";
    for (let i4 = 0; i4 < l4; i4++)
      t4.push(f3);
    const g4 = Array.isArray(s3) ? s3 : s3.split(`
`);
    if (g4.length > 0) {
      const [i4, ...y5] = g4;
      i4.length > 0 ? t4.push(`${O4}${i4}`) : t4.push(o3 ? e4 : "");
      for (const p3 of y5)
        p3.length > 0 ? t4.push(`${u5}${p3}`) : t4.push(o3 ? r3 : "");
    }
    m4.write(`${t4.join(`
`)}
`);
  },
  info: (s3, e4) => {
    log.message(s3, { ...e4, symbol: styleText2("blue", S_INFO) });
  },
  success: (s3, e4) => {
    log.message(s3, { ...e4, symbol: styleText2("green", S_SUCCESS) });
  },
  step: (s3, e4) => {
    log.message(s3, { ...e4, symbol: styleText2("green", S_STEP_SUBMIT) });
  },
  warn: (s3, e4) => {
    log.message(s3, { ...e4, symbol: styleText2("yellow", S_WARN) });
  },
  /** alias for `log.warn()`. */
  warning: (s3, e4) => {
    log.warn(s3, e4);
  },
  error: (s3, e4) => {
    log.message(s3, { ...e4, symbol: styleText2("red", S_ERROR) });
  }
};
var cancel = (o3 = "", t4) => {
  const i4 = (t4 == null ? void 0 : t4.output) ?? process.stdout, e4 = (t4 == null ? void 0 : t4.withGuide) ?? settings.withGuide ? `${styleText2("gray", S_BAR_END)}  ` : "";
  i4.write(`${e4}${styleText2("red", o3)}

`);
};
var intro = (o3 = "", t4) => {
  const i4 = (t4 == null ? void 0 : t4.output) ?? process.stdout, e4 = (t4 == null ? void 0 : t4.withGuide) ?? settings.withGuide ? `${styleText2("gray", S_BAR_START)}  ` : "";
  i4.write(`${e4}${o3}
`);
};
var outro = (o3 = "", t4) => {
  const i4 = (t4 == null ? void 0 : t4.output) ?? process.stdout, e4 = (t4 == null ? void 0 : t4.withGuide) ?? settings.withGuide ? `${styleText2("gray", S_BAR)}
${styleText2("gray", S_BAR_END)}  ` : "";
  i4.write(`${e4}${o3}

`);
};
var W$1 = (o3) => o3;
var C = (o3, e4, s3) => {
  const a4 = {
    hard: true,
    trim: false
  }, i4 = wrapAnsi(o3, e4, a4).split(`
`), c4 = i4.reduce((n4, t4) => Math.max(dist_default2(t4), n4), 0), u5 = i4.map(s3).reduce((n4, t4) => Math.max(dist_default2(t4), n4), 0), g4 = e4 - (u5 - c4);
  return wrapAnsi(o3, g4, a4);
};
var note = (o3 = "", e4 = "", s3) => {
  const a4 = (s3 == null ? void 0 : s3.output) ?? process$1.stdout, i4 = (s3 == null ? void 0 : s3.withGuide) ?? settings.withGuide, c4 = (s3 == null ? void 0 : s3.format) ?? W$1, g4 = ["", ...C(o3, getColumns(a4) - 6, c4).split(`
`).map(c4), ""], n4 = dist_default2(e4), t4 = Math.max(
    g4.reduce((m4, F4) => {
      const O4 = dist_default2(F4);
      return O4 > m4 ? O4 : m4;
    }, 0),
    n4
  ) + 2, h5 = g4.map(
    (m4) => `${styleText2("gray", S_BAR)}  ${m4}${" ".repeat(t4 - dist_default2(m4))}${styleText2("gray", S_BAR)}`
  ).join(`
`), T4 = i4 ? `${styleText2("gray", S_BAR)}
` : "", l$1 = i4 ? S_CONNECT_LEFT : S_CORNER_BOTTOM_LEFT;
  a4.write(
    `${T4}${styleText2("green", S_STEP_SUBMIT)}  ${styleText2("reset", e4)} ${styleText2(
      "gray",
      S_BAR_H.repeat(Math.max(t4 - n4 - 1, 1)) + S_CORNER_TOP_RIGHT
    )}
${h5}
${styleText2("gray", l$1 + S_BAR_H.repeat(t4 + 2) + S_CORNER_BOTTOM_RIGHT)}
`
  );
};
var u2 = {
  light: unicodeOr("\u2500", "-"),
  heavy: unicodeOr("\u2501", "="),
  block: unicodeOr("\u2588", "#")
};
var SELECT_INSTRUCTIONS = [
  `${styleText2("dim", "\u2191/\u2193")} to navigate`,
  `${styleText2("dim", "Enter:")} confirm`
];
var c = (t4, o3) => t4.includes(`
`) ? t4.split(`
`).map((d3) => o3(d3)).join(`
`) : o3(t4);
var select = (t4) => {
  const o3 = (n4, m4) => {
    if (n4 === void 0)
      return "";
    const s3 = n4.label ?? String(n4.value);
    switch (m4) {
      case "disabled":
        return `${styleText2("gray", S_RADIO_INACTIVE)} ${c(s3, (i4) => styleText2("gray", i4))}${n4.hint ? ` ${styleText2("dim", `(${n4.hint ?? "disabled"})`)}` : ""}`;
      case "selected":
        return `${c(s3, (i4) => styleText2("dim", i4))}`;
      case "active":
        return `${styleText2("green", S_RADIO_ACTIVE)} ${s3}${n4.hint ? ` ${styleText2("dim", `(${n4.hint})`)}` : ""}`;
      case "cancelled":
        return `${c(s3, (i4) => styleText2(["strikethrough", "dim"], i4))}`;
      default:
        return `${styleText2("dim", S_RADIO_INACTIVE)} ${c(s3, (i4) => styleText2("dim", i4))}`;
    }
  }, d3 = t4.showInstructions ?? true;
  return new n$1({
    options: t4.options,
    signal: t4.signal,
    input: t4.input,
    output: t4.output,
    initialValue: t4.initialValue,
    render() {
      const n4 = t4.withGuide ?? settings.withGuide, m4 = `${symbol(this.state)}  `, s3 = `${symbolBar(this.state)}  `, i4 = wrapTextWithPrefix(
        t4.output,
        t4.message,
        s3,
        m4
      ), u5 = `${n4 ? `${styleText2("gray", S_BAR)}
` : ""}${i4}
`;
      switch (this.state) {
        case "submit": {
          const r3 = n4 ? `${styleText2("gray", S_BAR)}  ` : "", a4 = wrapTextWithPrefix(
            t4.output,
            o3(this.options[this.cursor], "selected"),
            r3
          );
          return `${u5}${a4}`;
        }
        case "cancel": {
          const r3 = n4 ? `${styleText2("gray", S_BAR)}  ` : "", a4 = wrapTextWithPrefix(
            t4.output,
            o3(this.options[this.cursor], "cancelled"),
            r3
          );
          return `${u5}${a4}${n4 ? `
${styleText2("gray", S_BAR)}` : ""}`;
        }
        default: {
          const r3 = n4 ? `${styleText2("cyan", S_BAR)}  ` : "", a4 = u5.split(`
`).length, p3 = d3 ? formatInstructionFooter(SELECT_INSTRUCTIONS, n4) : n4 ? [styleText2("cyan", S_BAR_END)] : [], f3 = p3.join(`
`), b4 = p3.length + 1;
          return `${u5}${r3}${limitOptions({
            output: t4.output,
            cursor: this.cursor,
            options: this.options,
            maxItems: t4.maxItems,
            columnPadding: r3.length,
            rowPadding: a4 + b4,
            style: (g4, x4) => o3(g4, g4.disabled ? "disabled" : x4 ? "active" : "inactive")
          }).join(`
${r3}`)}
${f3}
`;
        }
      }
    }
  }).prompt();
};
var i = `${styleText2("gray", S_BAR)}  `;
var text = (t4) => new n2({
  validate: t4.validate,
  placeholder: t4.placeholder,
  defaultValue: t4.defaultValue,
  initialValue: t4.initialValue,
  output: t4.output,
  signal: t4.signal,
  input: t4.input,
  render() {
    const r3 = (t4 == null ? void 0 : t4.withGuide) ?? settings.withGuide, l4 = `${`${r3 ? `${styleText2("gray", S_BAR)}
` : ""}${symbol(this.state)}  `}${t4.message}
`, d3 = t4.placeholder && t4.placeholder.length > 0 ? (
      // biome-ignore lint/style/noNonNullAssertion: guarded by placeholder.length > 0
      styleText2("inverse", t4.placeholder[0]) + styleText2("dim", t4.placeholder.slice(1))
    ) : styleText2(["inverse", "hidden"], "_"), o3 = this.userInput ? this.userInputWithCursor : d3, s3 = this.value ?? "";
    switch (this.state) {
      case "validating": {
        const n4 = r3 ? `${styleText2("cyan", S_BAR)}  ` : "", i4 = r3 ? styleText2("cyan", S_BAR_END) : "", c4 = styleText2("dim", o3), $3 = styleText2("dim", "Validating...");
        return `${l4}${n4}${c4}
${i4}  ${$3}
`;
      }
      case "error": {
        const n4 = this.error ? `  ${styleText2("yellow", this.error)}` : "", i4 = r3 ? `${styleText2("yellow", S_BAR)}  ` : "", c4 = r3 ? styleText2("yellow", S_BAR_END) : "";
        return `${l4.trim()}
${i4}${o3}
${c4}${n4}
`;
      }
      case "submit": {
        const n4 = s3 ? `${r3 ? "  " : ""}${styleText2("dim", s3)}` : "", i4 = r3 ? styleText2("gray", S_BAR) : "";
        return `${l4}${i4}${n4}`;
      }
      case "cancel": {
        const n4 = s3 ? `  ${styleText2(["strikethrough", "dim"], s3)}` : "", i4 = r3 ? styleText2("gray", S_BAR) : "";
        return `${l4}${i4}${n4}${s3.trim() ? `
${i4}` : ""}`;
      }
      default: {
        const n4 = r3 ? `${styleText2("cyan", S_BAR)}  ` : "", i4 = r3 ? styleText2("cyan", S_BAR_END) : "";
        return `${l4}${n4}${o3}
${i4}
`;
      }
    }
  }
}).prompt();

// node_modules/.pnpm/ora@9.4.1/node_modules/ora/index.js
import process8 from "process";
import { stripVTControlCharacters as stripVTControlCharacters2 } from "util";

// node_modules/.pnpm/chalk@5.6.2/node_modules/chalk/source/vendor/ansi-styles/index.js
var ANSI_BACKGROUND_OFFSET = 10;
var wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
var wrapAnsi16m = (offset = 0) => (red2, green2, blue2) => `\x1B[${38 + offset};2;${red2};${green2};${blue2}m`;
var styles = {
  modifier: {
    reset: [0, 0],
    // 21 isn't widely supported and 22 does the same thing
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29]
  },
  color: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    // Bright color
    blackBright: [90, 39],
    gray: [90, 39],
    // Alias of `blackBright`
    grey: [90, 39],
    // Alias of `blackBright`
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39]
  },
  bgColor: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    // Bright color
    bgBlackBright: [100, 49],
    bgGray: [100, 49],
    // Alias of `bgBlackBright`
    bgGrey: [100, 49],
    // Alias of `bgBlackBright`
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49]
  }
};
var modifierNames = Object.keys(styles.modifier);
var foregroundColorNames = Object.keys(styles.color);
var backgroundColorNames = Object.keys(styles.bgColor);
var colorNames = [...foregroundColorNames, ...backgroundColorNames];
function assembleStyles() {
  const codes = /* @__PURE__ */ new Map();
  for (const [groupName, group] of Object.entries(styles)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles[styleName] = {
        open: `\x1B[${style[0]}m`,
        close: `\x1B[${style[1]}m`
      };
      group[styleName] = styles[styleName];
      codes.set(style[0], style[1]);
    }
    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
  }
  Object.defineProperty(styles, "codes", {
    value: codes,
    enumerable: false
  });
  styles.color.close = "\x1B[39m";
  styles.bgColor.close = "\x1B[49m";
  styles.color.ansi = wrapAnsi16();
  styles.color.ansi256 = wrapAnsi256();
  styles.color.ansi16m = wrapAnsi16m();
  styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
  Object.defineProperties(styles, {
    rgbToAnsi256: {
      value(red2, green2, blue2) {
        if (red2 === green2 && green2 === blue2) {
          if (red2 < 8) {
            return 16;
          }
          if (red2 > 248) {
            return 231;
          }
          return Math.round((red2 - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(red2 / 255 * 5) + 6 * Math.round(green2 / 255 * 5) + Math.round(blue2 / 255 * 5);
      },
      enumerable: false
    },
    hexToRgb: {
      value(hex) {
        const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
        if (!matches) {
          return [0, 0, 0];
        }
        let [colorString] = matches;
        if (colorString.length === 3) {
          colorString = [...colorString].map((character) => character + character).join("");
        }
        const integer = Number.parseInt(colorString, 16);
        return [
          /* eslint-disable no-bitwise */
          integer >> 16 & 255,
          integer >> 8 & 255,
          integer & 255
          /* eslint-enable no-bitwise */
        ];
      },
      enumerable: false
    },
    hexToAnsi256: {
      value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
      enumerable: false
    },
    ansi256ToAnsi: {
      value(code) {
        if (code < 8) {
          return 30 + code;
        }
        if (code < 16) {
          return 90 + (code - 8);
        }
        let red2;
        let green2;
        let blue2;
        if (code >= 232) {
          red2 = ((code - 232) * 10 + 8) / 255;
          green2 = red2;
          blue2 = red2;
        } else {
          code -= 16;
          const remainder = code % 36;
          red2 = Math.floor(code / 36) / 5;
          green2 = Math.floor(remainder / 6) / 5;
          blue2 = remainder % 6 / 5;
        }
        const value = Math.max(red2, green2, blue2) * 2;
        if (value === 0) {
          return 30;
        }
        let result = 30 + (Math.round(blue2) << 2 | Math.round(green2) << 1 | Math.round(red2));
        if (value === 2) {
          result += 60;
        }
        return result;
      },
      enumerable: false
    },
    rgbToAnsi: {
      value: (red2, green2, blue2) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red2, green2, blue2)),
      enumerable: false
    },
    hexToAnsi: {
      value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
      enumerable: false
    }
  });
  return styles;
}
var ansiStyles = assembleStyles();
var ansi_styles_default = ansiStyles;

// node_modules/.pnpm/chalk@5.6.2/node_modules/chalk/source/vendor/supports-color/index.js
import process2 from "process";
import os from "os";
import tty from "tty";
function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : process2.argv) {
  const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
  const position = argv.indexOf(prefix + flag);
  const terminatorPosition = argv.indexOf("--");
  return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}
var { env } = process2;
var flagForceColor;
if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
  flagForceColor = 0;
} else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
  flagForceColor = 1;
}
function envForceColor() {
  if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
      return 1;
    }
    if (env.FORCE_COLOR === "false") {
      return 0;
    }
    return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
  }
}
function translateLevel(level) {
  if (level === 0) {
    return false;
  }
  return {
    level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3
  };
}
function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
  const noFlagForceColor = envForceColor();
  if (noFlagForceColor !== void 0) {
    flagForceColor = noFlagForceColor;
  }
  const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
  if (forceColor === 0) {
    return 0;
  }
  if (sniffFlags) {
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
  }
  if ("TF_BUILD" in env && "AGENT_NAME" in env) {
    return 1;
  }
  if (haveStream && !streamIsTTY && forceColor === void 0) {
    return 0;
  }
  const min = forceColor || 0;
  if (env.TERM === "dumb") {
    return min;
  }
  if (process2.platform === "win32") {
    const osRelease = os.release().split(".");
    if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }
    return 1;
  }
  if ("CI" in env) {
    if (["GITHUB_ACTIONS", "GITEA_ACTIONS", "CIRCLECI"].some((key) => key in env)) {
      return 3;
    }
    if (["TRAVIS", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
      return 1;
    }
    return min;
  }
  if ("TEAMCITY_VERSION" in env) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
  }
  if (env.COLORTERM === "truecolor") {
    return 3;
  }
  if (env.TERM === "xterm-kitty") {
    return 3;
  }
  if (env.TERM === "xterm-ghostty") {
    return 3;
  }
  if (env.TERM === "wezterm") {
    return 3;
  }
  if ("TERM_PROGRAM" in env) {
    const version = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (env.TERM_PROGRAM) {
      case "iTerm.app": {
        return version >= 3 ? 3 : 2;
      }
      case "Apple_Terminal": {
        return 2;
      }
    }
  }
  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }
  if ("COLORTERM" in env) {
    return 1;
  }
  return min;
}
function createSupportsColor(stream, options = {}) {
  const level = _supportsColor(stream, {
    streamIsTTY: stream && stream.isTTY,
    ...options
  });
  return translateLevel(level);
}
var supportsColor = {
  stdout: createSupportsColor({ isTTY: tty.isatty(1) }),
  stderr: createSupportsColor({ isTTY: tty.isatty(2) })
};
var supports_color_default = supportsColor;

// node_modules/.pnpm/chalk@5.6.2/node_modules/chalk/source/utilities.js
function stringReplaceAll(string, substring, replacer) {
  let index = string.indexOf(substring);
  if (index === -1) {
    return string;
  }
  const substringLength = substring.length;
  let endIndex = 0;
  let returnValue = "";
  do {
    returnValue += string.slice(endIndex, index) + substring + replacer;
    endIndex = index + substringLength;
    index = string.indexOf(substring, endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}
function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
  let endIndex = 0;
  let returnValue = "";
  do {
    const gotCR = string[index - 1] === "\r";
    returnValue += string.slice(endIndex, gotCR ? index - 1 : index) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
    endIndex = index + 1;
    index = string.indexOf("\n", endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}

// node_modules/.pnpm/chalk@5.6.2/node_modules/chalk/source/index.js
var { stdout: stdoutColor, stderr: stderrColor } = supports_color_default;
var GENERATOR = /* @__PURE__ */ Symbol("GENERATOR");
var STYLER = /* @__PURE__ */ Symbol("STYLER");
var IS_EMPTY = /* @__PURE__ */ Symbol("IS_EMPTY");
var levelMapping = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
];
var styles2 = /* @__PURE__ */ Object.create(null);
var applyOptions = (object, options = {}) => {
  if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
    throw new Error("The `level` option should be an integer from 0 to 3");
  }
  const colorLevel = stdoutColor ? stdoutColor.level : 0;
  object.level = options.level === void 0 ? colorLevel : options.level;
};
var chalkFactory = (options) => {
  const chalk2 = (...strings) => strings.join(" ");
  applyOptions(chalk2, options);
  Object.setPrototypeOf(chalk2, createChalk.prototype);
  return chalk2;
};
function createChalk(options) {
  return chalkFactory(options);
}
Object.setPrototypeOf(createChalk.prototype, Function.prototype);
for (const [styleName, style] of Object.entries(ansi_styles_default)) {
  styles2[styleName] = {
    get() {
      const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
      Object.defineProperty(this, styleName, { value: builder });
      return builder;
    }
  };
}
styles2.visible = {
  get() {
    const builder = createBuilder(this, this[STYLER], true);
    Object.defineProperty(this, "visible", { value: builder });
    return builder;
  }
};
var getModelAnsi = (model, level, type, ...arguments_) => {
  if (model === "rgb") {
    if (level === "ansi16m") {
      return ansi_styles_default[type].ansi16m(...arguments_);
    }
    if (level === "ansi256") {
      return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
    }
    return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
  }
  if (model === "hex") {
    return getModelAnsi("rgb", level, type, ...ansi_styles_default.hexToRgb(...arguments_));
  }
  return ansi_styles_default[type][model](...arguments_);
};
var usedModels = ["rgb", "hex", "ansi256"];
for (const model of usedModels) {
  styles2[model] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
  const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
  styles2[bgModel] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
}
var proto = Object.defineProperties(() => {
}, {
  ...styles2,
  level: {
    enumerable: true,
    get() {
      return this[GENERATOR].level;
    },
    set(level) {
      this[GENERATOR].level = level;
    }
  }
});
var createStyler = (open, close, parent) => {
  let openAll;
  let closeAll;
  if (parent === void 0) {
    openAll = open;
    closeAll = close;
  } else {
    openAll = parent.openAll + open;
    closeAll = close + parent.closeAll;
  }
  return {
    open,
    close,
    openAll,
    closeAll,
    parent
  };
};
var createBuilder = (self, _styler, _isEmpty) => {
  const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
  Object.setPrototypeOf(builder, proto);
  builder[GENERATOR] = self;
  builder[STYLER] = _styler;
  builder[IS_EMPTY] = _isEmpty;
  return builder;
};
var applyStyle = (self, string) => {
  if (self.level <= 0 || !string) {
    return self[IS_EMPTY] ? "" : string;
  }
  let styler = self[STYLER];
  if (styler === void 0) {
    return string;
  }
  const { openAll, closeAll } = styler;
  if (string.includes("\x1B")) {
    while (styler !== void 0) {
      string = stringReplaceAll(string, styler.close, styler.open);
      styler = styler.parent;
    }
  }
  const lfIndex = string.indexOf("\n");
  if (lfIndex !== -1) {
    string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
  }
  return openAll + string + closeAll;
};
Object.defineProperties(createChalk.prototype, styles2);
var chalk = createChalk();
var chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
var source_default = chalk;

// node_modules/.pnpm/cli-cursor@5.0.0/node_modules/cli-cursor/index.js
import process5 from "process";

// node_modules/.pnpm/restore-cursor@5.1.0/node_modules/restore-cursor/index.js
import process4 from "process";

// node_modules/.pnpm/mimic-function@5.0.1/node_modules/mimic-function/index.js
var copyProperty = (to2, from, property, ignoreNonConfigurable) => {
  if (property === "length" || property === "prototype") {
    return;
  }
  if (property === "arguments" || property === "caller") {
    return;
  }
  const toDescriptor = Object.getOwnPropertyDescriptor(to2, property);
  const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
  if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
    return;
  }
  Object.defineProperty(to2, property, fromDescriptor);
};
var canCopyProperty = function(toDescriptor, fromDescriptor) {
  return toDescriptor === void 0 || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};
var changePrototype = (to2, from) => {
  const fromPrototype = Object.getPrototypeOf(from);
  if (fromPrototype === Object.getPrototypeOf(to2)) {
    return;
  }
  Object.setPrototypeOf(to2, fromPrototype);
};
var wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/
${fromBody}`;
var toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
var toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
var changeToString = (to2, from, name) => {
  const withName = name === "" ? "" : `with ${name.trim()}() `;
  const newToString = wrappedToString.bind(null, withName, from.toString());
  Object.defineProperty(newToString, "name", toStringName);
  const { writable, enumerable, configurable } = toStringDescriptor;
  Object.defineProperty(to2, "toString", { value: newToString, writable, enumerable, configurable });
};
function mimicFunction(to2, from, { ignoreNonConfigurable = false } = {}) {
  const { name } = to2;
  for (const property of Reflect.ownKeys(from)) {
    copyProperty(to2, from, property, ignoreNonConfigurable);
  }
  changePrototype(to2, from);
  changeToString(to2, from, name);
  return to2;
}

// node_modules/.pnpm/onetime@7.0.0/node_modules/onetime/index.js
var calledFunctions = /* @__PURE__ */ new WeakMap();
var onetime = (function_, options = {}) => {
  if (typeof function_ !== "function") {
    throw new TypeError("Expected a function");
  }
  let returnValue;
  let callCount = 0;
  const functionName = function_.displayName || function_.name || "<anonymous>";
  const onetime2 = function(...arguments_) {
    calledFunctions.set(onetime2, ++callCount);
    if (callCount === 1) {
      returnValue = function_.apply(this, arguments_);
      function_ = void 0;
    } else if (options.throw === true) {
      throw new Error(`Function \`${functionName}\` can only be called once`);
    }
    return returnValue;
  };
  mimicFunction(onetime2, function_);
  calledFunctions.set(onetime2, callCount);
  return onetime2;
};
onetime.callCount = (function_) => {
  if (!calledFunctions.has(function_)) {
    throw new Error(`The given function \`${function_.name}\` is not wrapped by the \`onetime\` package`);
  }
  return calledFunctions.get(function_);
};
var onetime_default = onetime;

// node_modules/.pnpm/signal-exit@4.1.0/node_modules/signal-exit/dist/mjs/signals.js
var signals = [];
signals.push("SIGHUP", "SIGINT", "SIGTERM");
if (process.platform !== "win32") {
  signals.push(
    "SIGALRM",
    "SIGABRT",
    "SIGVTALRM",
    "SIGXCPU",
    "SIGXFSZ",
    "SIGUSR2",
    "SIGTRAP",
    "SIGSYS",
    "SIGQUIT",
    "SIGIOT"
    // should detect profiler and enable/disable accordingly.
    // see #21
    // 'SIGPROF'
  );
}
if (process.platform === "linux") {
  signals.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
}

// node_modules/.pnpm/signal-exit@4.1.0/node_modules/signal-exit/dist/mjs/index.js
var processOk = (process9) => !!process9 && typeof process9 === "object" && typeof process9.removeListener === "function" && typeof process9.emit === "function" && typeof process9.reallyExit === "function" && typeof process9.listeners === "function" && typeof process9.kill === "function" && typeof process9.pid === "number" && typeof process9.on === "function";
var kExitEmitter = /* @__PURE__ */ Symbol.for("signal-exit emitter");
var global2 = globalThis;
var ObjectDefineProperty = Object.defineProperty.bind(Object);
var Emitter = class {
  emitted = {
    afterExit: false,
    exit: false
  };
  listeners = {
    afterExit: [],
    exit: []
  };
  count = 0;
  id = Math.random();
  constructor() {
    if (global2[kExitEmitter]) {
      return global2[kExitEmitter];
    }
    ObjectDefineProperty(global2, kExitEmitter, {
      value: this,
      writable: false,
      enumerable: false,
      configurable: false
    });
  }
  on(ev, fn2) {
    this.listeners[ev].push(fn2);
  }
  removeListener(ev, fn2) {
    const list = this.listeners[ev];
    const i4 = list.indexOf(fn2);
    if (i4 === -1) {
      return;
    }
    if (i4 === 0 && list.length === 1) {
      list.length = 0;
    } else {
      list.splice(i4, 1);
    }
  }
  emit(ev, code, signal) {
    if (this.emitted[ev]) {
      return false;
    }
    this.emitted[ev] = true;
    let ret = false;
    for (const fn2 of this.listeners[ev]) {
      ret = fn2(code, signal) === true || ret;
    }
    if (ev === "exit") {
      ret = this.emit("afterExit", code, signal) || ret;
    }
    return ret;
  }
};
var SignalExitBase = class {
};
var signalExitWrap = (handler) => {
  return {
    onExit(cb, opts) {
      return handler.onExit(cb, opts);
    },
    load() {
      return handler.load();
    },
    unload() {
      return handler.unload();
    }
  };
};
var SignalExitFallback = class extends SignalExitBase {
  onExit() {
    return () => {
    };
  }
  load() {
  }
  unload() {
  }
};
var SignalExit = class extends SignalExitBase {
  // "SIGHUP" throws an `ENOSYS` error on Windows,
  // so use a supported signal instead
  /* c8 ignore start */
  #hupSig = process3.platform === "win32" ? "SIGINT" : "SIGHUP";
  /* c8 ignore stop */
  #emitter = new Emitter();
  #process;
  #originalProcessEmit;
  #originalProcessReallyExit;
  #sigListeners = {};
  #loaded = false;
  constructor(process9) {
    super();
    this.#process = process9;
    this.#sigListeners = {};
    for (const sig of signals) {
      this.#sigListeners[sig] = () => {
        const listeners = this.#process.listeners(sig);
        let { count } = this.#emitter;
        const p3 = process9;
        if (typeof p3.__signal_exit_emitter__ === "object" && typeof p3.__signal_exit_emitter__.count === "number") {
          count += p3.__signal_exit_emitter__.count;
        }
        if (listeners.length === count) {
          this.unload();
          const ret = this.#emitter.emit("exit", null, sig);
          const s3 = sig === "SIGHUP" ? this.#hupSig : sig;
          if (!ret)
            process9.kill(process9.pid, s3);
        }
      };
    }
    this.#originalProcessReallyExit = process9.reallyExit;
    this.#originalProcessEmit = process9.emit;
  }
  onExit(cb, opts) {
    if (!processOk(this.#process)) {
      return () => {
      };
    }
    if (this.#loaded === false) {
      this.load();
    }
    const ev = (opts == null ? void 0 : opts.alwaysLast) ? "afterExit" : "exit";
    this.#emitter.on(ev, cb);
    return () => {
      this.#emitter.removeListener(ev, cb);
      if (this.#emitter.listeners["exit"].length === 0 && this.#emitter.listeners["afterExit"].length === 0) {
        this.unload();
      }
    };
  }
  load() {
    if (this.#loaded) {
      return;
    }
    this.#loaded = true;
    this.#emitter.count += 1;
    for (const sig of signals) {
      try {
        const fn2 = this.#sigListeners[sig];
        if (fn2)
          this.#process.on(sig, fn2);
      } catch (_4) {
      }
    }
    this.#process.emit = (ev, ...a4) => {
      return this.#processEmit(ev, ...a4);
    };
    this.#process.reallyExit = (code) => {
      return this.#processReallyExit(code);
    };
  }
  unload() {
    if (!this.#loaded) {
      return;
    }
    this.#loaded = false;
    signals.forEach((sig) => {
      const listener = this.#sigListeners[sig];
      if (!listener) {
        throw new Error("Listener not defined for signal: " + sig);
      }
      try {
        this.#process.removeListener(sig, listener);
      } catch (_4) {
      }
    });
    this.#process.emit = this.#originalProcessEmit;
    this.#process.reallyExit = this.#originalProcessReallyExit;
    this.#emitter.count -= 1;
  }
  #processReallyExit(code) {
    if (!processOk(this.#process)) {
      return 0;
    }
    this.#process.exitCode = code || 0;
    this.#emitter.emit("exit", this.#process.exitCode, null);
    return this.#originalProcessReallyExit.call(this.#process, this.#process.exitCode);
  }
  #processEmit(ev, ...args) {
    const og = this.#originalProcessEmit;
    if (ev === "exit" && processOk(this.#process)) {
      if (typeof args[0] === "number") {
        this.#process.exitCode = args[0];
      }
      const ret = og.call(this.#process, ev, ...args);
      this.#emitter.emit("exit", this.#process.exitCode, null);
      return ret;
    } else {
      return og.call(this.#process, ev, ...args);
    }
  }
};
var process3 = globalThis.process;
var {
  /**
   * Called when the process is exiting, whether via signal, explicit
   * exit, or running out of stuff to do.
   *
   * If the global process object is not suitable for instrumentation,
   * then this will be a no-op.
   *
   * Returns a function that may be used to unload signal-exit.
   */
  onExit,
  /**
   * Load the listeners.  Likely you never need to call this, unless
   * doing a rather deep integration with signal-exit functionality.
   * Mostly exposed for the benefit of testing.
   *
   * @internal
   */
  load,
  /**
   * Unload the listeners.  Likely you never need to call this, unless
   * doing a rather deep integration with signal-exit functionality.
   * Mostly exposed for the benefit of testing.
   *
   * @internal
   */
  unload
} = signalExitWrap(processOk(process3) ? new SignalExit(process3) : new SignalExitFallback());

// node_modules/.pnpm/restore-cursor@5.1.0/node_modules/restore-cursor/index.js
var terminal = process4.stderr.isTTY ? process4.stderr : process4.stdout.isTTY ? process4.stdout : void 0;
var restoreCursor = terminal ? onetime_default(() => {
  onExit(() => {
    terminal.write("\x1B[?25h");
  }, { alwaysLast: true });
}) : () => {
};
var restore_cursor_default = restoreCursor;

// node_modules/.pnpm/cli-cursor@5.0.0/node_modules/cli-cursor/index.js
var isHidden = false;
var cliCursor = {};
cliCursor.show = (writableStream = process5.stderr) => {
  if (!writableStream.isTTY) {
    return;
  }
  isHidden = false;
  writableStream.write("\x1B[?25h");
};
cliCursor.hide = (writableStream = process5.stderr) => {
  if (!writableStream.isTTY) {
    return;
  }
  restore_cursor_default();
  isHidden = true;
  writableStream.write("\x1B[?25l");
};
cliCursor.toggle = (force, writableStream) => {
  if (force !== void 0) {
    isHidden = force;
  }
  if (isHidden) {
    cliCursor.show(writableStream);
  } else {
    cliCursor.hide(writableStream);
  }
};
var cli_cursor_default = cliCursor;

// node_modules/.pnpm/cli-spinners@3.4.0/node_modules/cli-spinners/spinners.json
var spinners_default = {
  dots: {
    interval: 80,
    frames: [
      "\u280B",
      "\u2819",
      "\u2839",
      "\u2838",
      "\u283C",
      "\u2834",
      "\u2826",
      "\u2827",
      "\u2807",
      "\u280F"
    ]
  },
  dots2: {
    interval: 80,
    frames: [
      "\u28FE",
      "\u28FD",
      "\u28FB",
      "\u28BF",
      "\u287F",
      "\u28DF",
      "\u28EF",
      "\u28F7"
    ]
  },
  dots3: {
    interval: 80,
    frames: [
      "\u280B",
      "\u2819",
      "\u281A",
      "\u281E",
      "\u2816",
      "\u2826",
      "\u2834",
      "\u2832",
      "\u2833",
      "\u2813"
    ]
  },
  dots4: {
    interval: 80,
    frames: [
      "\u2804",
      "\u2806",
      "\u2807",
      "\u280B",
      "\u2819",
      "\u2838",
      "\u2830",
      "\u2820",
      "\u2830",
      "\u2838",
      "\u2819",
      "\u280B",
      "\u2807",
      "\u2806"
    ]
  },
  dots5: {
    interval: 80,
    frames: [
      "\u280B",
      "\u2819",
      "\u281A",
      "\u2812",
      "\u2802",
      "\u2802",
      "\u2812",
      "\u2832",
      "\u2834",
      "\u2826",
      "\u2816",
      "\u2812",
      "\u2810",
      "\u2810",
      "\u2812",
      "\u2813",
      "\u280B"
    ]
  },
  dots6: {
    interval: 80,
    frames: [
      "\u2801",
      "\u2809",
      "\u2819",
      "\u281A",
      "\u2812",
      "\u2802",
      "\u2802",
      "\u2812",
      "\u2832",
      "\u2834",
      "\u2824",
      "\u2804",
      "\u2804",
      "\u2824",
      "\u2834",
      "\u2832",
      "\u2812",
      "\u2802",
      "\u2802",
      "\u2812",
      "\u281A",
      "\u2819",
      "\u2809",
      "\u2801"
    ]
  },
  dots7: {
    interval: 80,
    frames: [
      "\u2808",
      "\u2809",
      "\u280B",
      "\u2813",
      "\u2812",
      "\u2810",
      "\u2810",
      "\u2812",
      "\u2816",
      "\u2826",
      "\u2824",
      "\u2820",
      "\u2820",
      "\u2824",
      "\u2826",
      "\u2816",
      "\u2812",
      "\u2810",
      "\u2810",
      "\u2812",
      "\u2813",
      "\u280B",
      "\u2809",
      "\u2808"
    ]
  },
  dots8: {
    interval: 80,
    frames: [
      "\u2801",
      "\u2801",
      "\u2809",
      "\u2819",
      "\u281A",
      "\u2812",
      "\u2802",
      "\u2802",
      "\u2812",
      "\u2832",
      "\u2834",
      "\u2824",
      "\u2804",
      "\u2804",
      "\u2824",
      "\u2820",
      "\u2820",
      "\u2824",
      "\u2826",
      "\u2816",
      "\u2812",
      "\u2810",
      "\u2810",
      "\u2812",
      "\u2813",
      "\u280B",
      "\u2809",
      "\u2808",
      "\u2808"
    ]
  },
  dots9: {
    interval: 80,
    frames: [
      "\u28B9",
      "\u28BA",
      "\u28BC",
      "\u28F8",
      "\u28C7",
      "\u2867",
      "\u2857",
      "\u284F"
    ]
  },
  dots10: {
    interval: 80,
    frames: [
      "\u2884",
      "\u2882",
      "\u2881",
      "\u2841",
      "\u2848",
      "\u2850",
      "\u2860"
    ]
  },
  dots11: {
    interval: 100,
    frames: [
      "\u2801",
      "\u2802",
      "\u2804",
      "\u2840",
      "\u2880",
      "\u2820",
      "\u2810",
      "\u2808"
    ]
  },
  dots12: {
    interval: 80,
    frames: [
      "\u2880\u2800",
      "\u2840\u2800",
      "\u2804\u2800",
      "\u2882\u2800",
      "\u2842\u2800",
      "\u2805\u2800",
      "\u2883\u2800",
      "\u2843\u2800",
      "\u280D\u2800",
      "\u288B\u2800",
      "\u284B\u2800",
      "\u280D\u2801",
      "\u288B\u2801",
      "\u284B\u2801",
      "\u280D\u2809",
      "\u280B\u2809",
      "\u280B\u2809",
      "\u2809\u2819",
      "\u2809\u2819",
      "\u2809\u2829",
      "\u2808\u2899",
      "\u2808\u2859",
      "\u2888\u2829",
      "\u2840\u2899",
      "\u2804\u2859",
      "\u2882\u2829",
      "\u2842\u2898",
      "\u2805\u2858",
      "\u2883\u2828",
      "\u2843\u2890",
      "\u280D\u2850",
      "\u288B\u2820",
      "\u284B\u2880",
      "\u280D\u2841",
      "\u288B\u2801",
      "\u284B\u2801",
      "\u280D\u2809",
      "\u280B\u2809",
      "\u280B\u2809",
      "\u2809\u2819",
      "\u2809\u2819",
      "\u2809\u2829",
      "\u2808\u2899",
      "\u2808\u2859",
      "\u2808\u2829",
      "\u2800\u2899",
      "\u2800\u2859",
      "\u2800\u2829",
      "\u2800\u2898",
      "\u2800\u2858",
      "\u2800\u2828",
      "\u2800\u2890",
      "\u2800\u2850",
      "\u2800\u2820",
      "\u2800\u2880",
      "\u2800\u2840"
    ]
  },
  dots13: {
    interval: 80,
    frames: [
      "\u28FC",
      "\u28F9",
      "\u28BB",
      "\u283F",
      "\u285F",
      "\u28CF",
      "\u28E7",
      "\u28F6"
    ]
  },
  dots14: {
    interval: 80,
    frames: [
      "\u2809\u2809",
      "\u2808\u2819",
      "\u2800\u2839",
      "\u2800\u28B8",
      "\u2800\u28F0",
      "\u2880\u28E0",
      "\u28C0\u28C0",
      "\u28C4\u2840",
      "\u28C6\u2800",
      "\u2847\u2800",
      "\u280F\u2800",
      "\u280B\u2801"
    ]
  },
  dots8Bit: {
    interval: 80,
    frames: [
      "\u2800",
      "\u2801",
      "\u2802",
      "\u2803",
      "\u2804",
      "\u2805",
      "\u2806",
      "\u2807",
      "\u2840",
      "\u2841",
      "\u2842",
      "\u2843",
      "\u2844",
      "\u2845",
      "\u2846",
      "\u2847",
      "\u2808",
      "\u2809",
      "\u280A",
      "\u280B",
      "\u280C",
      "\u280D",
      "\u280E",
      "\u280F",
      "\u2848",
      "\u2849",
      "\u284A",
      "\u284B",
      "\u284C",
      "\u284D",
      "\u284E",
      "\u284F",
      "\u2810",
      "\u2811",
      "\u2812",
      "\u2813",
      "\u2814",
      "\u2815",
      "\u2816",
      "\u2817",
      "\u2850",
      "\u2851",
      "\u2852",
      "\u2853",
      "\u2854",
      "\u2855",
      "\u2856",
      "\u2857",
      "\u2818",
      "\u2819",
      "\u281A",
      "\u281B",
      "\u281C",
      "\u281D",
      "\u281E",
      "\u281F",
      "\u2858",
      "\u2859",
      "\u285A",
      "\u285B",
      "\u285C",
      "\u285D",
      "\u285E",
      "\u285F",
      "\u2820",
      "\u2821",
      "\u2822",
      "\u2823",
      "\u2824",
      "\u2825",
      "\u2826",
      "\u2827",
      "\u2860",
      "\u2861",
      "\u2862",
      "\u2863",
      "\u2864",
      "\u2865",
      "\u2866",
      "\u2867",
      "\u2828",
      "\u2829",
      "\u282A",
      "\u282B",
      "\u282C",
      "\u282D",
      "\u282E",
      "\u282F",
      "\u2868",
      "\u2869",
      "\u286A",
      "\u286B",
      "\u286C",
      "\u286D",
      "\u286E",
      "\u286F",
      "\u2830",
      "\u2831",
      "\u2832",
      "\u2833",
      "\u2834",
      "\u2835",
      "\u2836",
      "\u2837",
      "\u2870",
      "\u2871",
      "\u2872",
      "\u2873",
      "\u2874",
      "\u2875",
      "\u2876",
      "\u2877",
      "\u2838",
      "\u2839",
      "\u283A",
      "\u283B",
      "\u283C",
      "\u283D",
      "\u283E",
      "\u283F",
      "\u2878",
      "\u2879",
      "\u287A",
      "\u287B",
      "\u287C",
      "\u287D",
      "\u287E",
      "\u287F",
      "\u2880",
      "\u2881",
      "\u2882",
      "\u2883",
      "\u2884",
      "\u2885",
      "\u2886",
      "\u2887",
      "\u28C0",
      "\u28C1",
      "\u28C2",
      "\u28C3",
      "\u28C4",
      "\u28C5",
      "\u28C6",
      "\u28C7",
      "\u2888",
      "\u2889",
      "\u288A",
      "\u288B",
      "\u288C",
      "\u288D",
      "\u288E",
      "\u288F",
      "\u28C8",
      "\u28C9",
      "\u28CA",
      "\u28CB",
      "\u28CC",
      "\u28CD",
      "\u28CE",
      "\u28CF",
      "\u2890",
      "\u2891",
      "\u2892",
      "\u2893",
      "\u2894",
      "\u2895",
      "\u2896",
      "\u2897",
      "\u28D0",
      "\u28D1",
      "\u28D2",
      "\u28D3",
      "\u28D4",
      "\u28D5",
      "\u28D6",
      "\u28D7",
      "\u2898",
      "\u2899",
      "\u289A",
      "\u289B",
      "\u289C",
      "\u289D",
      "\u289E",
      "\u289F",
      "\u28D8",
      "\u28D9",
      "\u28DA",
      "\u28DB",
      "\u28DC",
      "\u28DD",
      "\u28DE",
      "\u28DF",
      "\u28A0",
      "\u28A1",
      "\u28A2",
      "\u28A3",
      "\u28A4",
      "\u28A5",
      "\u28A6",
      "\u28A7",
      "\u28E0",
      "\u28E1",
      "\u28E2",
      "\u28E3",
      "\u28E4",
      "\u28E5",
      "\u28E6",
      "\u28E7",
      "\u28A8",
      "\u28A9",
      "\u28AA",
      "\u28AB",
      "\u28AC",
      "\u28AD",
      "\u28AE",
      "\u28AF",
      "\u28E8",
      "\u28E9",
      "\u28EA",
      "\u28EB",
      "\u28EC",
      "\u28ED",
      "\u28EE",
      "\u28EF",
      "\u28B0",
      "\u28B1",
      "\u28B2",
      "\u28B3",
      "\u28B4",
      "\u28B5",
      "\u28B6",
      "\u28B7",
      "\u28F0",
      "\u28F1",
      "\u28F2",
      "\u28F3",
      "\u28F4",
      "\u28F5",
      "\u28F6",
      "\u28F7",
      "\u28B8",
      "\u28B9",
      "\u28BA",
      "\u28BB",
      "\u28BC",
      "\u28BD",
      "\u28BE",
      "\u28BF",
      "\u28F8",
      "\u28F9",
      "\u28FA",
      "\u28FB",
      "\u28FC",
      "\u28FD",
      "\u28FE",
      "\u28FF"
    ]
  },
  dotsCircle: {
    interval: 80,
    frames: [
      "\u288E ",
      "\u280E\u2801",
      "\u280A\u2811",
      "\u2808\u2831",
      " \u2871",
      "\u2880\u2870",
      "\u2884\u2860",
      "\u2886\u2840"
    ]
  },
  sand: {
    interval: 80,
    frames: [
      "\u2801",
      "\u2802",
      "\u2804",
      "\u2840",
      "\u2848",
      "\u2850",
      "\u2860",
      "\u28C0",
      "\u28C1",
      "\u28C2",
      "\u28C4",
      "\u28CC",
      "\u28D4",
      "\u28E4",
      "\u28E5",
      "\u28E6",
      "\u28EE",
      "\u28F6",
      "\u28F7",
      "\u28FF",
      "\u287F",
      "\u283F",
      "\u289F",
      "\u281F",
      "\u285B",
      "\u281B",
      "\u282B",
      "\u288B",
      "\u280B",
      "\u280D",
      "\u2849",
      "\u2809",
      "\u2811",
      "\u2821",
      "\u2881"
    ]
  },
  line: {
    interval: 130,
    frames: [
      "-",
      "\\",
      "|",
      "/"
    ]
  },
  line2: {
    interval: 100,
    frames: [
      "\u2802",
      "-",
      "\u2013",
      "\u2014",
      "\u2013",
      "-"
    ]
  },
  rollingLine: {
    interval: 80,
    frames: [
      "/  ",
      " - ",
      " \\ ",
      "  |",
      "  |",
      " \\ ",
      " - ",
      "/  "
    ]
  },
  pipe: {
    interval: 100,
    frames: [
      "\u2524",
      "\u2518",
      "\u2534",
      "\u2514",
      "\u251C",
      "\u250C",
      "\u252C",
      "\u2510"
    ]
  },
  simpleDots: {
    interval: 400,
    frames: [
      ".  ",
      ".. ",
      "...",
      "   "
    ]
  },
  simpleDotsScrolling: {
    interval: 200,
    frames: [
      ".  ",
      ".. ",
      "...",
      " ..",
      "  .",
      "   "
    ]
  },
  star: {
    interval: 70,
    frames: [
      "\u2736",
      "\u2738",
      "\u2739",
      "\u273A",
      "\u2739",
      "\u2737"
    ]
  },
  star2: {
    interval: 80,
    frames: [
      "+",
      "x",
      "*"
    ]
  },
  flip: {
    interval: 70,
    frames: [
      "_",
      "_",
      "_",
      "-",
      "`",
      "`",
      "'",
      "\xB4",
      "-",
      "_",
      "_",
      "_"
    ]
  },
  hamburger: {
    interval: 100,
    frames: [
      "\u2631",
      "\u2632",
      "\u2634"
    ]
  },
  growVertical: {
    interval: 120,
    frames: [
      "\u2581",
      "\u2583",
      "\u2584",
      "\u2585",
      "\u2586",
      "\u2587",
      "\u2586",
      "\u2585",
      "\u2584",
      "\u2583"
    ]
  },
  growHorizontal: {
    interval: 120,
    frames: [
      "\u258F",
      "\u258E",
      "\u258D",
      "\u258C",
      "\u258B",
      "\u258A",
      "\u2589",
      "\u258A",
      "\u258B",
      "\u258C",
      "\u258D",
      "\u258E"
    ]
  },
  balloon: {
    interval: 140,
    frames: [
      " ",
      ".",
      "o",
      "O",
      "@",
      "*",
      " "
    ]
  },
  balloon2: {
    interval: 120,
    frames: [
      ".",
      "o",
      "O",
      "\xB0",
      "O",
      "o",
      "."
    ]
  },
  noise: {
    interval: 100,
    frames: [
      "\u2593",
      "\u2592",
      "\u2591"
    ]
  },
  bounce: {
    interval: 120,
    frames: [
      "\u2801",
      "\u2802",
      "\u2804",
      "\u2802"
    ]
  },
  boxBounce: {
    interval: 120,
    frames: [
      "\u2596",
      "\u2598",
      "\u259D",
      "\u2597"
    ]
  },
  boxBounce2: {
    interval: 100,
    frames: [
      "\u258C",
      "\u2580",
      "\u2590",
      "\u2584"
    ]
  },
  triangle: {
    interval: 50,
    frames: [
      "\u25E2",
      "\u25E3",
      "\u25E4",
      "\u25E5"
    ]
  },
  binary: {
    interval: 80,
    frames: [
      "010010",
      "001100",
      "100101",
      "111010",
      "111101",
      "010111",
      "101011",
      "111000",
      "110011",
      "110101"
    ]
  },
  arc: {
    interval: 100,
    frames: [
      "\u25DC",
      "\u25E0",
      "\u25DD",
      "\u25DE",
      "\u25E1",
      "\u25DF"
    ]
  },
  circle: {
    interval: 120,
    frames: [
      "\u25E1",
      "\u2299",
      "\u25E0"
    ]
  },
  squareCorners: {
    interval: 180,
    frames: [
      "\u25F0",
      "\u25F3",
      "\u25F2",
      "\u25F1"
    ]
  },
  circleQuarters: {
    interval: 120,
    frames: [
      "\u25F4",
      "\u25F7",
      "\u25F6",
      "\u25F5"
    ]
  },
  circleHalves: {
    interval: 50,
    frames: [
      "\u25D0",
      "\u25D3",
      "\u25D1",
      "\u25D2"
    ]
  },
  squish: {
    interval: 100,
    frames: [
      "\u256B",
      "\u256A"
    ]
  },
  toggle: {
    interval: 250,
    frames: [
      "\u22B6",
      "\u22B7"
    ]
  },
  toggle2: {
    interval: 80,
    frames: [
      "\u25AB",
      "\u25AA"
    ]
  },
  toggle3: {
    interval: 120,
    frames: [
      "\u25A1",
      "\u25A0"
    ]
  },
  toggle4: {
    interval: 100,
    frames: [
      "\u25A0",
      "\u25A1",
      "\u25AA",
      "\u25AB"
    ]
  },
  toggle5: {
    interval: 100,
    frames: [
      "\u25AE",
      "\u25AF"
    ]
  },
  toggle6: {
    interval: 300,
    frames: [
      "\u101D",
      "\u1040"
    ]
  },
  toggle7: {
    interval: 80,
    frames: [
      "\u29BE",
      "\u29BF"
    ]
  },
  toggle8: {
    interval: 100,
    frames: [
      "\u25CD",
      "\u25CC"
    ]
  },
  toggle9: {
    interval: 100,
    frames: [
      "\u25C9",
      "\u25CE"
    ]
  },
  toggle10: {
    interval: 100,
    frames: [
      "\u3282",
      "\u3280",
      "\u3281"
    ]
  },
  toggle11: {
    interval: 50,
    frames: [
      "\u29C7",
      "\u29C6"
    ]
  },
  toggle12: {
    interval: 120,
    frames: [
      "\u2617",
      "\u2616"
    ]
  },
  toggle13: {
    interval: 80,
    frames: [
      "=",
      "*",
      "-"
    ]
  },
  arrow: {
    interval: 100,
    frames: [
      "\u2190",
      "\u2196",
      "\u2191",
      "\u2197",
      "\u2192",
      "\u2198",
      "\u2193",
      "\u2199"
    ]
  },
  arrow2: {
    interval: 80,
    frames: [
      "\u2B06\uFE0F ",
      "\u2197\uFE0F ",
      "\u27A1\uFE0F ",
      "\u2198\uFE0F ",
      "\u2B07\uFE0F ",
      "\u2199\uFE0F ",
      "\u2B05\uFE0F ",
      "\u2196\uFE0F "
    ]
  },
  arrow3: {
    interval: 120,
    frames: [
      "\u25B9\u25B9\u25B9\u25B9\u25B9",
      "\u25B8\u25B9\u25B9\u25B9\u25B9",
      "\u25B9\u25B8\u25B9\u25B9\u25B9",
      "\u25B9\u25B9\u25B8\u25B9\u25B9",
      "\u25B9\u25B9\u25B9\u25B8\u25B9",
      "\u25B9\u25B9\u25B9\u25B9\u25B8"
    ]
  },
  bouncingBar: {
    interval: 80,
    frames: [
      "[    ]",
      "[=   ]",
      "[==  ]",
      "[=== ]",
      "[====]",
      "[ ===]",
      "[  ==]",
      "[   =]",
      "[    ]",
      "[   =]",
      "[  ==]",
      "[ ===]",
      "[====]",
      "[=== ]",
      "[==  ]",
      "[=   ]"
    ]
  },
  bouncingBall: {
    interval: 80,
    frames: [
      "( \u25CF    )",
      "(  \u25CF   )",
      "(   \u25CF  )",
      "(    \u25CF )",
      "(     \u25CF)",
      "(    \u25CF )",
      "(   \u25CF  )",
      "(  \u25CF   )",
      "( \u25CF    )",
      "(\u25CF     )"
    ]
  },
  smiley: {
    interval: 200,
    frames: [
      "\u{1F604} ",
      "\u{1F61D} "
    ]
  },
  monkey: {
    interval: 300,
    frames: [
      "\u{1F648} ",
      "\u{1F648} ",
      "\u{1F649} ",
      "\u{1F64A} "
    ]
  },
  hearts: {
    interval: 100,
    frames: [
      "\u{1F49B} ",
      "\u{1F499} ",
      "\u{1F49C} ",
      "\u{1F49A} ",
      "\u{1F497} "
    ]
  },
  clock: {
    interval: 100,
    frames: [
      "\u{1F55B} ",
      "\u{1F550} ",
      "\u{1F551} ",
      "\u{1F552} ",
      "\u{1F553} ",
      "\u{1F554} ",
      "\u{1F555} ",
      "\u{1F556} ",
      "\u{1F557} ",
      "\u{1F558} ",
      "\u{1F559} ",
      "\u{1F55A} "
    ]
  },
  earth: {
    interval: 180,
    frames: [
      "\u{1F30D} ",
      "\u{1F30E} ",
      "\u{1F30F} "
    ]
  },
  material: {
    interval: 17,
    frames: [
      "\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
      "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
      "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
      "\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581",
      "\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
      "\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
      "\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581",
      "\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588",
      "\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588",
      "\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
      "\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
      "\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
      "\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588",
      "\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
      "\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
      "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
      "\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
      "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581"
    ]
  },
  moon: {
    interval: 80,
    frames: [
      "\u{1F311} ",
      "\u{1F312} ",
      "\u{1F313} ",
      "\u{1F314} ",
      "\u{1F315} ",
      "\u{1F316} ",
      "\u{1F317} ",
      "\u{1F318} "
    ]
  },
  runner: {
    interval: 140,
    frames: [
      "\u{1F6B6} ",
      "\u{1F3C3} "
    ]
  },
  pong: {
    interval: 80,
    frames: [
      "\u2590\u2802       \u258C",
      "\u2590\u2808       \u258C",
      "\u2590 \u2802      \u258C",
      "\u2590 \u2820      \u258C",
      "\u2590  \u2840     \u258C",
      "\u2590  \u2820     \u258C",
      "\u2590   \u2802    \u258C",
      "\u2590   \u2808    \u258C",
      "\u2590    \u2802   \u258C",
      "\u2590    \u2820   \u258C",
      "\u2590     \u2840  \u258C",
      "\u2590     \u2820  \u258C",
      "\u2590      \u2802 \u258C",
      "\u2590      \u2808 \u258C",
      "\u2590       \u2802\u258C",
      "\u2590       \u2820\u258C",
      "\u2590       \u2840\u258C",
      "\u2590      \u2820 \u258C",
      "\u2590      \u2802 \u258C",
      "\u2590     \u2808  \u258C",
      "\u2590     \u2802  \u258C",
      "\u2590    \u2820   \u258C",
      "\u2590    \u2840   \u258C",
      "\u2590   \u2820    \u258C",
      "\u2590   \u2802    \u258C",
      "\u2590  \u2808     \u258C",
      "\u2590  \u2802     \u258C",
      "\u2590 \u2820      \u258C",
      "\u2590 \u2840      \u258C",
      "\u2590\u2820       \u258C"
    ]
  },
  shark: {
    interval: 120,
    frames: [
      "\u2590|\\____________\u258C",
      "\u2590_|\\___________\u258C",
      "\u2590__|\\__________\u258C",
      "\u2590___|\\_________\u258C",
      "\u2590____|\\________\u258C",
      "\u2590_____|\\_______\u258C",
      "\u2590______|\\______\u258C",
      "\u2590_______|\\_____\u258C",
      "\u2590________|\\____\u258C",
      "\u2590_________|\\___\u258C",
      "\u2590__________|\\__\u258C",
      "\u2590___________|\\_\u258C",
      "\u2590____________|\\\u258C",
      "\u2590____________/|\u258C",
      "\u2590___________/|_\u258C",
      "\u2590__________/|__\u258C",
      "\u2590_________/|___\u258C",
      "\u2590________/|____\u258C",
      "\u2590_______/|_____\u258C",
      "\u2590______/|______\u258C",
      "\u2590_____/|_______\u258C",
      "\u2590____/|________\u258C",
      "\u2590___/|_________\u258C",
      "\u2590__/|__________\u258C",
      "\u2590_/|___________\u258C",
      "\u2590/|____________\u258C"
    ]
  },
  dqpb: {
    interval: 100,
    frames: [
      "d",
      "q",
      "p",
      "b"
    ]
  },
  weather: {
    interval: 100,
    frames: [
      "\u2600\uFE0F ",
      "\u2600\uFE0F ",
      "\u2600\uFE0F ",
      "\u{1F324} ",
      "\u26C5\uFE0F ",
      "\u{1F325} ",
      "\u2601\uFE0F ",
      "\u{1F327} ",
      "\u{1F328} ",
      "\u{1F327} ",
      "\u{1F328} ",
      "\u{1F327} ",
      "\u{1F328} ",
      "\u26C8 ",
      "\u{1F328} ",
      "\u{1F327} ",
      "\u{1F328} ",
      "\u2601\uFE0F ",
      "\u{1F325} ",
      "\u26C5\uFE0F ",
      "\u{1F324} ",
      "\u2600\uFE0F ",
      "\u2600\uFE0F "
    ]
  },
  christmas: {
    interval: 400,
    frames: [
      "\u{1F332}",
      "\u{1F384}"
    ]
  },
  grenade: {
    interval: 80,
    frames: [
      "\u060C  ",
      "\u2032  ",
      " \xB4 ",
      " \u203E ",
      "  \u2E0C",
      "  \u2E0A",
      "  |",
      "  \u204E",
      "  \u2055",
      " \u0DF4 ",
      "  \u2053",
      "   ",
      "   ",
      "   "
    ]
  },
  point: {
    interval: 125,
    frames: [
      "\u2219\u2219\u2219",
      "\u25CF\u2219\u2219",
      "\u2219\u25CF\u2219",
      "\u2219\u2219\u25CF",
      "\u2219\u2219\u2219"
    ]
  },
  layer: {
    interval: 150,
    frames: [
      "-",
      "=",
      "\u2261"
    ]
  },
  betaWave: {
    interval: 80,
    frames: [
      "\u03C1\u03B2\u03B2\u03B2\u03B2\u03B2\u03B2",
      "\u03B2\u03C1\u03B2\u03B2\u03B2\u03B2\u03B2",
      "\u03B2\u03B2\u03C1\u03B2\u03B2\u03B2\u03B2",
      "\u03B2\u03B2\u03B2\u03C1\u03B2\u03B2\u03B2",
      "\u03B2\u03B2\u03B2\u03B2\u03C1\u03B2\u03B2",
      "\u03B2\u03B2\u03B2\u03B2\u03B2\u03C1\u03B2",
      "\u03B2\u03B2\u03B2\u03B2\u03B2\u03B2\u03C1"
    ]
  },
  fingerDance: {
    interval: 160,
    frames: [
      "\u{1F918} ",
      "\u{1F91F} ",
      "\u{1F596} ",
      "\u270B ",
      "\u{1F91A} ",
      "\u{1F446} "
    ]
  },
  fistBump: {
    interval: 80,
    frames: [
      "\u{1F91C}\u3000\u3000\u3000\u3000\u{1F91B} ",
      "\u{1F91C}\u3000\u3000\u3000\u3000\u{1F91B} ",
      "\u{1F91C}\u3000\u3000\u3000\u3000\u{1F91B} ",
      "\u3000\u{1F91C}\u3000\u3000\u{1F91B}\u3000 ",
      "\u3000\u3000\u{1F91C}\u{1F91B}\u3000\u3000 ",
      "\u3000\u{1F91C}\u2728\u{1F91B}\u3000\u3000 ",
      "\u{1F91C}\u3000\u2728\u3000\u{1F91B}\u3000 "
    ]
  },
  soccerHeader: {
    interval: 80,
    frames: [
      " \u{1F9D1}\u26BD\uFE0F       \u{1F9D1} ",
      "\u{1F9D1}  \u26BD\uFE0F      \u{1F9D1} ",
      "\u{1F9D1}   \u26BD\uFE0F     \u{1F9D1} ",
      "\u{1F9D1}    \u26BD\uFE0F    \u{1F9D1} ",
      "\u{1F9D1}     \u26BD\uFE0F   \u{1F9D1} ",
      "\u{1F9D1}      \u26BD\uFE0F  \u{1F9D1} ",
      "\u{1F9D1}       \u26BD\uFE0F\u{1F9D1}  ",
      "\u{1F9D1}      \u26BD\uFE0F  \u{1F9D1} ",
      "\u{1F9D1}     \u26BD\uFE0F   \u{1F9D1} ",
      "\u{1F9D1}    \u26BD\uFE0F    \u{1F9D1} ",
      "\u{1F9D1}   \u26BD\uFE0F     \u{1F9D1} ",
      "\u{1F9D1}  \u26BD\uFE0F      \u{1F9D1} "
    ]
  },
  mindblown: {
    interval: 160,
    frames: [
      "\u{1F610} ",
      "\u{1F610} ",
      "\u{1F62E} ",
      "\u{1F62E} ",
      "\u{1F626} ",
      "\u{1F626} ",
      "\u{1F627} ",
      "\u{1F627} ",
      "\u{1F92F} ",
      "\u{1F4A5} ",
      "\u2728 ",
      "\u3000 ",
      "\u3000 ",
      "\u3000 "
    ]
  },
  speaker: {
    interval: 160,
    frames: [
      "\u{1F508} ",
      "\u{1F509} ",
      "\u{1F50A} ",
      "\u{1F509} "
    ]
  },
  orangePulse: {
    interval: 100,
    frames: [
      "\u{1F538} ",
      "\u{1F536} ",
      "\u{1F7E0} ",
      "\u{1F7E0} ",
      "\u{1F536} "
    ]
  },
  bluePulse: {
    interval: 100,
    frames: [
      "\u{1F539} ",
      "\u{1F537} ",
      "\u{1F535} ",
      "\u{1F535} ",
      "\u{1F537} "
    ]
  },
  orangeBluePulse: {
    interval: 100,
    frames: [
      "\u{1F538} ",
      "\u{1F536} ",
      "\u{1F7E0} ",
      "\u{1F7E0} ",
      "\u{1F536} ",
      "\u{1F539} ",
      "\u{1F537} ",
      "\u{1F535} ",
      "\u{1F535} ",
      "\u{1F537} "
    ]
  },
  timeTravel: {
    interval: 100,
    frames: [
      "\u{1F55B} ",
      "\u{1F55A} ",
      "\u{1F559} ",
      "\u{1F558} ",
      "\u{1F557} ",
      "\u{1F556} ",
      "\u{1F555} ",
      "\u{1F554} ",
      "\u{1F553} ",
      "\u{1F552} ",
      "\u{1F551} ",
      "\u{1F550} "
    ]
  },
  aesthetic: {
    interval: 80,
    frames: [
      "\u25B0\u25B1\u25B1\u25B1\u25B1\u25B1\u25B1",
      "\u25B0\u25B0\u25B1\u25B1\u25B1\u25B1\u25B1",
      "\u25B0\u25B0\u25B0\u25B1\u25B1\u25B1\u25B1",
      "\u25B0\u25B0\u25B0\u25B0\u25B1\u25B1\u25B1",
      "\u25B0\u25B0\u25B0\u25B0\u25B0\u25B1\u25B1",
      "\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B1",
      "\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0",
      "\u25B0\u25B1\u25B1\u25B1\u25B1\u25B1\u25B1"
    ]
  },
  dwarfFortress: {
    interval: 80,
    frames: [
      " \u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "\u263A\u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "\u263A\u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "\u263A\u2593\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "\u263A\u2593\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "\u263A\u2592\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "\u263A\u2592\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "\u263A\u2591\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "\u263A\u2591\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "\u263A \u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      " \u263A\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      " \u263A\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      " \u263A\u2593\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      " \u263A\u2593\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      " \u263A\u2592\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      " \u263A\u2592\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      " \u263A\u2591\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      " \u263A\u2591\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      " \u263A \u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "  \u263A\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "  \u263A\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "  \u263A\u2593\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "  \u263A\u2593\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "  \u263A\u2592\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "  \u263A\u2592\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "  \u263A\u2591\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "  \u263A\u2591\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "  \u263A \u2588\u2588\u2588\xA3\xA3\xA3  ",
      "   \u263A\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "   \u263A\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "   \u263A\u2593\u2588\u2588\xA3\xA3\xA3  ",
      "   \u263A\u2593\u2588\u2588\xA3\xA3\xA3  ",
      "   \u263A\u2592\u2588\u2588\xA3\xA3\xA3  ",
      "   \u263A\u2592\u2588\u2588\xA3\xA3\xA3  ",
      "   \u263A\u2591\u2588\u2588\xA3\xA3\xA3  ",
      "   \u263A\u2591\u2588\u2588\xA3\xA3\xA3  ",
      "   \u263A \u2588\u2588\xA3\xA3\xA3  ",
      "    \u263A\u2588\u2588\xA3\xA3\xA3  ",
      "    \u263A\u2588\u2588\xA3\xA3\xA3  ",
      "    \u263A\u2593\u2588\xA3\xA3\xA3  ",
      "    \u263A\u2593\u2588\xA3\xA3\xA3  ",
      "    \u263A\u2592\u2588\xA3\xA3\xA3  ",
      "    \u263A\u2592\u2588\xA3\xA3\xA3  ",
      "    \u263A\u2591\u2588\xA3\xA3\xA3  ",
      "    \u263A\u2591\u2588\xA3\xA3\xA3  ",
      "    \u263A \u2588\xA3\xA3\xA3  ",
      "     \u263A\u2588\xA3\xA3\xA3  ",
      "     \u263A\u2588\xA3\xA3\xA3  ",
      "     \u263A\u2593\xA3\xA3\xA3  ",
      "     \u263A\u2593\xA3\xA3\xA3  ",
      "     \u263A\u2592\xA3\xA3\xA3  ",
      "     \u263A\u2592\xA3\xA3\xA3  ",
      "     \u263A\u2591\xA3\xA3\xA3  ",
      "     \u263A\u2591\xA3\xA3\xA3  ",
      "     \u263A \xA3\xA3\xA3  ",
      "      \u263A\xA3\xA3\xA3  ",
      "      \u263A\xA3\xA3\xA3  ",
      "      \u263A\u2593\xA3\xA3  ",
      "      \u263A\u2593\xA3\xA3  ",
      "      \u263A\u2592\xA3\xA3  ",
      "      \u263A\u2592\xA3\xA3  ",
      "      \u263A\u2591\xA3\xA3  ",
      "      \u263A\u2591\xA3\xA3  ",
      "      \u263A \xA3\xA3  ",
      "       \u263A\xA3\xA3  ",
      "       \u263A\xA3\xA3  ",
      "       \u263A\u2593\xA3  ",
      "       \u263A\u2593\xA3  ",
      "       \u263A\u2592\xA3  ",
      "       \u263A\u2592\xA3  ",
      "       \u263A\u2591\xA3  ",
      "       \u263A\u2591\xA3  ",
      "       \u263A \xA3  ",
      "        \u263A\xA3  ",
      "        \u263A\xA3  ",
      "        \u263A\u2593  ",
      "        \u263A\u2593  ",
      "        \u263A\u2592  ",
      "        \u263A\u2592  ",
      "        \u263A\u2591  ",
      "        \u263A\u2591  ",
      "        \u263A   ",
      "        \u263A  &",
      "        \u263A \u263C&",
      "       \u263A \u263C &",
      "       \u263A\u263C  &",
      "      \u263A\u263C  & ",
      "      \u203C   & ",
      "     \u263A   &  ",
      "    \u203C    &  ",
      "   \u263A    &   ",
      "  \u203C     &   ",
      " \u263A     &    ",
      "\u203C      &    ",
      "      &     ",
      "      &     ",
      "     &   \u2591  ",
      "     &   \u2592  ",
      "    &    \u2593  ",
      "    &    \xA3  ",
      "   &    \u2591\xA3  ",
      "   &    \u2592\xA3  ",
      "  &     \u2593\xA3  ",
      "  &     \xA3\xA3  ",
      " &     \u2591\xA3\xA3  ",
      " &     \u2592\xA3\xA3  ",
      "&      \u2593\xA3\xA3  ",
      "&      \xA3\xA3\xA3  ",
      "      \u2591\xA3\xA3\xA3  ",
      "      \u2592\xA3\xA3\xA3  ",
      "      \u2593\xA3\xA3\xA3  ",
      "      \u2588\xA3\xA3\xA3  ",
      "     \u2591\u2588\xA3\xA3\xA3  ",
      "     \u2592\u2588\xA3\xA3\xA3  ",
      "     \u2593\u2588\xA3\xA3\xA3  ",
      "     \u2588\u2588\xA3\xA3\xA3  ",
      "    \u2591\u2588\u2588\xA3\xA3\xA3  ",
      "    \u2592\u2588\u2588\xA3\xA3\xA3  ",
      "    \u2593\u2588\u2588\xA3\xA3\xA3  ",
      "    \u2588\u2588\u2588\xA3\xA3\xA3  ",
      "   \u2591\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "   \u2592\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "   \u2593\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "   \u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "  \u2591\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "  \u2592\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "  \u2593\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      "  \u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      " \u2591\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      " \u2592\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      " \u2593\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      " \u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
      " \u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  "
    ]
  },
  fish: {
    interval: 80,
    frames: [
      "~~~~~~~~~~~~~~~~~~~~",
      "> ~~~~~~~~~~~~~~~~~~",
      "\xBA> ~~~~~~~~~~~~~~~~~",
      "(\xBA> ~~~~~~~~~~~~~~~~",
      "((\xBA> ~~~~~~~~~~~~~~~",
      "<((\xBA> ~~~~~~~~~~~~~~",
      "><((\xBA> ~~~~~~~~~~~~~",
      " ><((\xBA> ~~~~~~~~~~~~",
      "~ ><((\xBA> ~~~~~~~~~~~",
      "~~ <>((\xBA> ~~~~~~~~~~",
      "~~~ ><((\xBA> ~~~~~~~~~",
      "~~~~ <>((\xBA> ~~~~~~~~",
      "~~~~~ ><((\xBA> ~~~~~~~",
      "~~~~~~ <>((\xBA> ~~~~~~",
      "~~~~~~~ ><((\xBA> ~~~~~",
      "~~~~~~~~ <>((\xBA> ~~~~",
      "~~~~~~~~~ ><((\xBA> ~~~",
      "~~~~~~~~~~ <>((\xBA> ~~",
      "~~~~~~~~~~~ ><((\xBA> ~",
      "~~~~~~~~~~~~ <>((\xBA> ",
      "~~~~~~~~~~~~~ ><((\xBA>",
      "~~~~~~~~~~~~~~ <>((\xBA",
      "~~~~~~~~~~~~~~~ ><((",
      "~~~~~~~~~~~~~~~~ <>(",
      "~~~~~~~~~~~~~~~~~ ><",
      "~~~~~~~~~~~~~~~~~~ <",
      "~~~~~~~~~~~~~~~~~~~~"
    ]
  }
};

// node_modules/.pnpm/cli-spinners@3.4.0/node_modules/cli-spinners/index.js
var cli_spinners_default = spinners_default;
var spinnersList = Object.keys(spinners_default);

// node_modules/.pnpm/log-symbols@7.0.1/node_modules/log-symbols/symbols.js
var symbols_exports = {};
__export(symbols_exports, {
  error: () => error,
  info: () => info,
  success: () => success,
  warning: () => warning
});

// node_modules/.pnpm/yoctocolors@2.2.0/node_modules/yoctocolors/base.js
import tty2 from "tty";
var _a, _b, _c, _d;
var hasColors = ((_d = (_c = (_b = (_a = tty2) == null ? void 0 : _a.WriteStream) == null ? void 0 : _b.prototype) == null ? void 0 : _c.hasColors) == null ? void 0 : _d.call(_c)) ?? false;
var format = (open, close) => {
  if (!hasColors) {
    return (input) => input;
  }
  const openCode = `\x1B[${open}m`;
  const closeCode = `\x1B[${close}m`;
  return (input) => {
    const string = input + "";
    let index = string.indexOf(closeCode);
    if (index === -1) {
      return openCode + string + closeCode;
    }
    let result = openCode;
    let lastIndex = 0;
    const reopenOnNestedClose = close === 22;
    const replaceCode = (reopenOnNestedClose ? closeCode : "") + openCode;
    while (index !== -1) {
      result += string.slice(lastIndex, index) + replaceCode;
      lastIndex = index + closeCode.length;
      index = string.indexOf(closeCode, lastIndex);
    }
    result += string.slice(lastIndex) + closeCode;
    return result;
  };
};
var reset = format(0, 0);
var bold = format(1, 22);
var dim = format(2, 22);
var italic = format(3, 23);
var underline = format(4, 24);
var underlineDouble = format("4:2", 24);
var underlineCurly = format("4:3", 24);
var underlineDotted = format("4:4", 24);
var underlineDashed = format("4:5", 24);
var overline = format(53, 55);
var inverse = format(7, 27);
var hidden = format(8, 28);
var strikethrough = format(9, 29);
var black = format(30, 39);
var red = format(31, 39);
var green = format(32, 39);
var yellow = format(33, 39);
var blue = format(34, 39);
var magenta = format(35, 39);
var cyan = format(36, 39);
var white = format(37, 39);
var gray = format(90, 39);
var bgBlack = format(40, 49);
var bgRed = format(41, 49);
var bgGreen = format(42, 49);
var bgYellow = format(43, 49);
var bgBlue = format(44, 49);
var bgMagenta = format(45, 49);
var bgCyan = format(46, 49);
var bgWhite = format(47, 49);
var bgGray = format(100, 49);
var redBright = format(91, 39);
var greenBright = format(92, 39);
var yellowBright = format(93, 39);
var blueBright = format(94, 39);
var magentaBright = format(95, 39);
var cyanBright = format(96, 39);
var whiteBright = format(97, 39);
var bgRedBright = format(101, 49);
var bgGreenBright = format(102, 49);
var bgYellowBright = format(103, 49);
var bgBlueBright = format(104, 49);
var bgMagentaBright = format(105, 49);
var bgCyanBright = format(106, 49);
var bgWhiteBright = format(107, 49);
var underlineBlack = format("58;5;0", 59);
var underlineRed = format("58;5;1", 59);
var underlineGreen = format("58;5;2", 59);
var underlineYellow = format("58;5;3", 59);
var underlineBlue = format("58;5;4", 59);
var underlineMagenta = format("58;5;5", 59);
var underlineCyan = format("58;5;6", 59);
var underlineWhite = format("58;5;7", 59);
var underlineGray = format("58;5;8", 59);
var underlineRedBright = format("58;5;9", 59);
var underlineGreenBright = format("58;5;10", 59);
var underlineYellowBright = format("58;5;11", 59);
var underlineBlueBright = format("58;5;12", 59);
var underlineMagentaBright = format("58;5;13", 59);
var underlineCyanBright = format("58;5;14", 59);
var underlineWhiteBright = format("58;5;15", 59);

// node_modules/.pnpm/is-unicode-supported@2.1.0/node_modules/is-unicode-supported/index.js
import process6 from "process";
function isUnicodeSupported2() {
  const { env: env2 } = process6;
  const { TERM, TERM_PROGRAM } = env2;
  if (process6.platform !== "win32") {
    return TERM !== "linux";
  }
  return Boolean(env2.WT_SESSION) || Boolean(env2.TERMINUS_SUBLIME) || env2.ConEmuTask === "{cmd::Cmder}" || TERM_PROGRAM === "Terminus-Sublime" || TERM_PROGRAM === "vscode" || TERM === "xterm-256color" || TERM === "alacritty" || TERM === "rxvt-unicode" || TERM === "rxvt-unicode-256color" || env2.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}

// node_modules/.pnpm/log-symbols@7.0.1/node_modules/log-symbols/symbols.js
var _isUnicodeSupported = isUnicodeSupported2();
var info = blue(_isUnicodeSupported ? "\u2139" : "i");
var success = green(_isUnicodeSupported ? "\u2714" : "\u221A");
var warning = yellow(_isUnicodeSupported ? "\u26A0" : "\u203C");
var error = red(_isUnicodeSupported ? "\u2716" : "\xD7");

// node_modules/.pnpm/ansi-regex@6.3.0/node_modules/ansi-regex/index.js
function ansiRegex({ onlyFirst = false } = {}) {
  const ST = "(?:\\u0007|\\u001B\\u005C|\\u009C)";
  const osc = `(?:\\u001B\\][^\\u0007\\u001B\\u009C]*${ST})`;
  const csi = "[\\u001B\\u009B][[\\]()#;?]*(?:\\d{1,4}(?:[;:]\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]";
  const pattern = `${osc}|${csi}`;
  return new RegExp(pattern, onlyFirst ? void 0 : "g");
}

// node_modules/.pnpm/strip-ansi@7.2.0/node_modules/strip-ansi/index.js
var regex = ansiRegex();
function stripAnsi(string) {
  if (typeof string !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
  }
  if (!string.includes("\x1B") && !string.includes("\x9B")) {
    return string;
  }
  return string.replace(regex, "");
}

// node_modules/.pnpm/get-east-asian-width@1.7.0/node_modules/get-east-asian-width/lookup-data.js
var ambiguousMinimalCodePoint = 161;
var ambiguousMaximumCodePoint = 1114109;
var ambiguousRanges = [161, 161, 164, 164, 167, 168, 170, 170, 173, 174, 176, 180, 182, 186, 188, 191, 198, 198, 208, 208, 215, 216, 222, 225, 230, 230, 232, 234, 236, 237, 240, 240, 242, 243, 247, 250, 252, 252, 254, 254, 257, 257, 273, 273, 275, 275, 283, 283, 294, 295, 299, 299, 305, 307, 312, 312, 319, 322, 324, 324, 328, 331, 333, 333, 338, 339, 358, 359, 363, 363, 462, 462, 464, 464, 466, 466, 468, 468, 470, 470, 472, 472, 474, 474, 476, 476, 593, 593, 609, 609, 708, 708, 711, 711, 713, 715, 717, 717, 720, 720, 728, 731, 733, 733, 735, 735, 768, 879, 913, 929, 931, 937, 945, 961, 963, 969, 1025, 1025, 1040, 1103, 1105, 1105, 8208, 8208, 8211, 8214, 8216, 8217, 8220, 8221, 8224, 8226, 8228, 8231, 8240, 8240, 8242, 8243, 8245, 8245, 8251, 8251, 8254, 8254, 8308, 8308, 8319, 8319, 8321, 8324, 8364, 8364, 8451, 8451, 8453, 8453, 8457, 8457, 8467, 8467, 8470, 8470, 8481, 8482, 8486, 8486, 8491, 8491, 8531, 8532, 8539, 8542, 8544, 8555, 8560, 8569, 8585, 8585, 8592, 8601, 8632, 8633, 8658, 8658, 8660, 8660, 8679, 8679, 8704, 8704, 8706, 8707, 8711, 8712, 8715, 8715, 8719, 8719, 8721, 8721, 8725, 8725, 8730, 8730, 8733, 8736, 8739, 8739, 8741, 8741, 8743, 8748, 8750, 8750, 8756, 8759, 8764, 8765, 8776, 8776, 8780, 8780, 8786, 8786, 8800, 8801, 8804, 8807, 8810, 8811, 8814, 8815, 8834, 8835, 8838, 8839, 8853, 8853, 8857, 8857, 8869, 8869, 8895, 8895, 8978, 8978, 9312, 9449, 9451, 9547, 9552, 9587, 9600, 9615, 9618, 9621, 9632, 9633, 9635, 9641, 9650, 9651, 9654, 9655, 9660, 9661, 9664, 9665, 9670, 9672, 9675, 9675, 9678, 9681, 9698, 9701, 9711, 9711, 9733, 9734, 9737, 9737, 9742, 9743, 9756, 9756, 9758, 9758, 9792, 9792, 9794, 9794, 9824, 9825, 9827, 9829, 9831, 9834, 9836, 9837, 9839, 9839, 9886, 9887, 9919, 9919, 9926, 9933, 9935, 9939, 9941, 9953, 9955, 9955, 9960, 9961, 9963, 9969, 9972, 9972, 9974, 9977, 9979, 9980, 9982, 9983, 10045, 10045, 10102, 10111, 11094, 11097, 12872, 12879, 57344, 63743, 65024, 65039, 65533, 65533, 127232, 127242, 127248, 127277, 127280, 127337, 127344, 127373, 127375, 127376, 127387, 127404, 917760, 917999, 983040, 1048573, 1048576, 1114109];
var fullwidthMinimalCodePoint = 12288;
var fullwidthMaximumCodePoint = 65510;
var fullwidthRanges = [12288, 12288, 65281, 65376, 65504, 65510];
var wideMinimalCodePoint = 4352;
var wideMaximumCodePoint = 262141;
var wideRanges = [4352, 4447, 8986, 8987, 9001, 9002, 9193, 9196, 9200, 9200, 9203, 9203, 9725, 9726, 9748, 9749, 9776, 9783, 9800, 9811, 9855, 9855, 9866, 9871, 9875, 9875, 9889, 9889, 9898, 9899, 9917, 9918, 9924, 9925, 9934, 9934, 9940, 9940, 9962, 9962, 9970, 9971, 9973, 9973, 9978, 9978, 9981, 9981, 9989, 9989, 9994, 9995, 10024, 10024, 10060, 10060, 10062, 10062, 10067, 10069, 10071, 10071, 10133, 10135, 10160, 10160, 10175, 10175, 11035, 11036, 11088, 11088, 11093, 11093, 11904, 11929, 11931, 12019, 12032, 12245, 12272, 12287, 12289, 12350, 12353, 12438, 12441, 12543, 12549, 12591, 12593, 12686, 12688, 12773, 12783, 12830, 12832, 12871, 12880, 42124, 42128, 42182, 43360, 43388, 44032, 55203, 63744, 64255, 65040, 65049, 65072, 65106, 65108, 65126, 65128, 65131, 94176, 94180, 94192, 94198, 94208, 101594, 101631, 101664, 101760, 101874, 101888, 102801, 102816, 102866, 110576, 110579, 110581, 110587, 110589, 110590, 110592, 110888, 110898, 110898, 110928, 110930, 110933, 110933, 110948, 110952, 110960, 111355, 119552, 119638, 119648, 119670, 126980, 126980, 127183, 127183, 127374, 127374, 127377, 127386, 127406, 127406, 127488, 127490, 127504, 127547, 127552, 127560, 127568, 127569, 127584, 127589, 127744, 127776, 127789, 127797, 127799, 127868, 127870, 127891, 127904, 127946, 127951, 127955, 127968, 127984, 127988, 127988, 127992, 128062, 128064, 128064, 128066, 128252, 128255, 128317, 128331, 128334, 128336, 128359, 128378, 128378, 128405, 128406, 128420, 128420, 128507, 128591, 128640, 128709, 128716, 128716, 128720, 128722, 128725, 128729, 128732, 128735, 128747, 128748, 128756, 128764, 128986, 128986, 128992, 129003, 129008, 129008, 129292, 129338, 129340, 129349, 129351, 129535, 129648, 129660, 129664, 129734, 129736, 129736, 129740, 129757, 129759, 129771, 129775, 129786, 131072, 196605, 196608, 262141];

// node_modules/.pnpm/get-east-asian-width@1.7.0/node_modules/get-east-asian-width/utilities.js
var isInRange = (ranges, codePoint) => {
  let low = 0;
  let high = Math.floor(ranges.length / 2) - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const i4 = mid * 2;
    if (codePoint < ranges[i4]) {
      high = mid - 1;
    } else if (codePoint > ranges[i4 + 1]) {
      low = mid + 1;
    } else {
      return true;
    }
  }
  return false;
};

// node_modules/.pnpm/get-east-asian-width@1.7.0/node_modules/get-east-asian-width/lookup.js
var commonCjkCodePoint = 19968;
var [wideFastPathStart, wideFastPathEnd] = /* @__PURE__ */ findWideFastPathRange(wideRanges);
function findWideFastPathRange(ranges) {
  let fastPathStart = ranges[0];
  let fastPathEnd = ranges[1];
  for (let index = 0; index < ranges.length; index += 2) {
    const start = ranges[index];
    const end = ranges[index + 1];
    if (commonCjkCodePoint >= start && commonCjkCodePoint <= end) {
      return [start, end];
    }
    if (end - start > fastPathEnd - fastPathStart) {
      fastPathStart = start;
      fastPathEnd = end;
    }
  }
  return [fastPathStart, fastPathEnd];
}
var isAmbiguous = (codePoint) => {
  if (codePoint < ambiguousMinimalCodePoint || codePoint > ambiguousMaximumCodePoint) {
    return false;
  }
  return isInRange(ambiguousRanges, codePoint);
};
var isFullwidth = (codePoint) => {
  if (codePoint < fullwidthMinimalCodePoint || codePoint > fullwidthMaximumCodePoint) {
    return false;
  }
  return isInRange(fullwidthRanges, codePoint);
};
var isWide = (codePoint) => {
  if (codePoint >= wideFastPathStart && codePoint <= wideFastPathEnd) {
    return true;
  }
  if (codePoint < wideMinimalCodePoint || codePoint > wideMaximumCodePoint) {
    return false;
  }
  return isInRange(wideRanges, codePoint);
};

// node_modules/.pnpm/get-east-asian-width@1.7.0/node_modules/get-east-asian-width/index.js
function validate(codePoint) {
  if (!Number.isSafeInteger(codePoint)) {
    throw new TypeError(`Expected a code point, got \`${typeof codePoint}\`.`);
  }
}
function eastAsianWidth(codePoint, { ambiguousAsWide = false } = {}) {
  validate(codePoint);
  if (isFullwidth(codePoint) || isWide(codePoint) || ambiguousAsWide && isAmbiguous(codePoint)) {
    return 2;
  }
  return 1;
}

// node_modules/.pnpm/string-width@8.2.2/node_modules/string-width/index.js
var segmenter = new Intl.Segmenter();
var zeroWidthClusterRegex = new RegExp("^(?:\\p{Default_Ignorable_Code_Point}|\\p{Control}|\\p{Format}|\\p{Nonspacing_Mark}|\\p{Enclosing_Mark}|\\p{Surrogate})+$", "v");
var leadingNonPrintingRegex = new RegExp("^[\\p{Default_Ignorable_Code_Point}\\p{Control}\\p{Format}\\p{Nonspacing_Mark}\\p{Enclosing_Mark}\\p{Surrogate}]+", "v");
var spacingMarkRegex = new RegExp("\\p{Spacing_Mark}", "v");
var rgiEmojiRegex = new RegExp("^\\p{RGI_Emoji}$", "v");
var unqualifiedKeycapRegex = /^[\d#*]\u20E3$/;
var extendedPictographicRegex = new RegExp("\\p{Extended_Pictographic}", "gu");
function isDoubleWidthNonRgiEmojiSequence(segment) {
  if (segment.length > 50) {
    return false;
  }
  if (unqualifiedKeycapRegex.test(segment)) {
    return true;
  }
  if (segment.includes("\u200D")) {
    const pictographics = segment.match(extendedPictographicRegex);
    return pictographics !== null && pictographics.length >= 2;
  }
  return false;
}
function baseVisible(segment) {
  return segment.replace(leadingNonPrintingRegex, "");
}
function isZeroWidthCluster(segment) {
  return zeroWidthClusterRegex.test(segment);
}
function isHangulLeadingJamo(codePoint) {
  return codePoint >= 4352 && codePoint <= 4447 || codePoint >= 43360 && codePoint <= 43388;
}
function isHangulVowelJamo(codePoint) {
  return codePoint >= 4448 && codePoint <= 4519 || codePoint >= 55216 && codePoint <= 55238;
}
function isHangulTrailingJamo(codePoint) {
  return codePoint >= 4520 && codePoint <= 4607 || codePoint >= 55243 && codePoint <= 55291;
}
function isHangulJamo(codePoint) {
  return isHangulLeadingJamo(codePoint) || isHangulVowelJamo(codePoint) || isHangulTrailingJamo(codePoint);
}
function hangulClusterWidth(visibleSegment, eastAsianWidthOptions) {
  const codePoints = [];
  for (const character of visibleSegment) {
    if (zeroWidthClusterRegex.test(character)) {
      continue;
    }
    codePoints.push(character.codePointAt(0));
  }
  if (codePoints.length === 0) {
    return void 0;
  }
  let width = 0;
  for (let index = 0; index < codePoints.length; index++) {
    const codePoint = codePoints[index];
    if (!isHangulJamo(codePoint)) {
      if (width === 0) {
        return void 0;
      }
      for (let remaining = index; remaining < codePoints.length; remaining++) {
        width += eastAsianWidth(codePoints[remaining], eastAsianWidthOptions);
      }
      return width;
    }
    if (isHangulLeadingJamo(codePoint) && isHangulVowelJamo(codePoints[index + 1])) {
      width += 2;
      index += isHangulTrailingJamo(codePoints[index + 2]) ? 2 : 1;
      continue;
    }
    width += eastAsianWidth(codePoint, eastAsianWidthOptions);
  }
  return width;
}
function trailingWidth(visibleSegment, eastAsianWidthOptions) {
  let extra = 0;
  let first = true;
  for (const character of visibleSegment) {
    if (first) {
      first = false;
      continue;
    }
    if (spacingMarkRegex.test(character) || character >= "\uFF00" && character <= "\uFFEF") {
      extra += eastAsianWidth(character.codePointAt(0), eastAsianWidthOptions);
    }
  }
  return extra;
}
function stringWidth(input, options = {}) {
  if (typeof input !== "string" || input.length === 0) {
    return 0;
  }
  const {
    ambiguousIsNarrow = true,
    countAnsiEscapeCodes = false
  } = options;
  let string = input;
  if (!countAnsiEscapeCodes && (string.includes("\x1B") || string.includes("\x9B"))) {
    string = stripAnsi(string);
  }
  if (string.length === 0) {
    return 0;
  }
  if (/^[\u0020-\u007E]*$/.test(string)) {
    return string.length;
  }
  let width = 0;
  const eastAsianWidthOptions = { ambiguousAsWide: !ambiguousIsNarrow };
  for (const { segment } of segmenter.segment(string)) {
    if (isZeroWidthCluster(segment)) {
      continue;
    }
    if (rgiEmojiRegex.test(segment) || isDoubleWidthNonRgiEmojiSequence(segment)) {
      width += 2;
      continue;
    }
    const visibleSegment = baseVisible(segment);
    const hangulWidth = hangulClusterWidth(visibleSegment, eastAsianWidthOptions);
    if (hangulWidth !== void 0) {
      width += hangulWidth;
      continue;
    }
    const codePoint = visibleSegment.codePointAt(0);
    width += eastAsianWidth(codePoint, eastAsianWidthOptions);
    width += trailingWidth(visibleSegment, eastAsianWidthOptions);
  }
  return width;
}

// node_modules/.pnpm/is-interactive@2.0.0/node_modules/is-interactive/index.js
function isInteractive({ stream = process.stdout } = {}) {
  return Boolean(
    stream && stream.isTTY && process.env.TERM !== "dumb" && !("CI" in process.env)
  );
}

// node_modules/.pnpm/stdin-discarder@0.3.2/node_modules/stdin-discarder/index.js
import process7 from "process";
var ASCII_ETX_CODE = 3;
var StdinDiscarder = class {
  #activeCount = 0;
  #stdin;
  #stdinWasPaused = false;
  #stdinWasRaw = false;
  #handleInputBound = (chunk) => {
    if (!(chunk == null ? void 0 : chunk.length)) {
      return;
    }
    const code = typeof chunk === "string" ? chunk.codePointAt(0) : chunk[0];
    if (code === ASCII_ETX_CODE) {
      process7.kill(process7.pid, "SIGINT");
    }
  };
  start() {
    this.#activeCount++;
    if (this.#activeCount === 1) {
      this.#realStart();
    }
  }
  stop() {
    if (this.#activeCount === 0) {
      return;
    }
    if (--this.#activeCount === 0) {
      this.#realStop();
    }
  }
  #realStart() {
    const { stdin: stdin2 } = process7;
    if (process7.platform === "win32" || !(stdin2 == null ? void 0 : stdin2.isTTY) || typeof stdin2.setRawMode !== "function") {
      this.#stdin = void 0;
      return;
    }
    this.#stdin = stdin2;
    this.#stdinWasPaused = stdin2.isPaused();
    this.#stdinWasRaw = Boolean(stdin2.isRaw);
    stdin2.setRawMode(true);
    stdin2.prependListener("data", this.#handleInputBound);
    if (this.#stdinWasPaused) {
      stdin2.resume();
    }
  }
  #realStop() {
    var _a4;
    if (!this.#stdin) {
      return;
    }
    const stdin2 = this.#stdin;
    stdin2.off("data", this.#handleInputBound);
    if (stdin2.isTTY) {
      (_a4 = stdin2.setRawMode) == null ? void 0 : _a4.call(stdin2, this.#stdinWasRaw);
    }
    if (this.#stdinWasPaused) {
      stdin2.pause();
    }
    this.#stdin = void 0;
    this.#stdinWasPaused = false;
    this.#stdinWasRaw = false;
  }
};
var stdinDiscarder = new StdinDiscarder();
var stdin_discarder_default = Object.freeze(stdinDiscarder);

// node_modules/.pnpm/ora@9.4.1/node_modules/ora/index.js
var RENDER_DEFERRAL_TIMEOUT = 200;
var SYNCHRONIZED_OUTPUT_ENABLE = "\x1B[?2026h";
var SYNCHRONIZED_OUTPUT_DISABLE = "\x1B[?2026l";
var activeHooksPerStream = /* @__PURE__ */ new Map();
var validColors = /* @__PURE__ */ new Set(["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white", "gray"]);
var Ora = class {
  #linesToClear = 0;
  #frameIndex = -1;
  #lastFrameTime = 0;
  #options;
  #spinner;
  #stream;
  #id;
  #hookedStreams = /* @__PURE__ */ new Map();
  #isInternalWrite = false;
  #drainHandler;
  #deferRenderTimer;
  #isDiscardingStdin = false;
  #color;
  // Helper to execute writes while preventing hook recursion
  #internalWrite(fn2) {
    this.#isInternalWrite = true;
    try {
      return fn2();
    } finally {
      this.#isInternalWrite = false;
    }
  }
  // Helper to render if still spinning
  #tryRender() {
    if (this.isSpinning) {
      this.render();
    }
  }
  #stringifyChunk(chunk, encoding) {
    if (chunk === void 0 || chunk === null) {
      return "";
    }
    if (typeof chunk === "string") {
      return chunk;
    }
    if (Buffer.isBuffer(chunk) || ArrayBuffer.isView(chunk)) {
      const normalizedEncoding = typeof encoding === "string" && encoding && encoding !== "buffer" ? encoding : "utf8";
      return Buffer.from(chunk).toString(normalizedEncoding);
    }
    return String(chunk);
  }
  #chunkTerminatesLine(chunkString) {
    if (!chunkString) {
      return false;
    }
    const lastCharacter = chunkString.at(-1);
    return lastCharacter === "\n" || lastCharacter === "\r";
  }
  #scheduleRenderDeferral() {
    var _a4;
    if (this.#deferRenderTimer) {
      return;
    }
    this.#deferRenderTimer = setTimeout(() => {
      this.#deferRenderTimer = void 0;
      if (this.isSpinning) {
        this.#tryRender();
      }
    }, RENDER_DEFERRAL_TIMEOUT);
    if (typeof ((_a4 = this.#deferRenderTimer) == null ? void 0 : _a4.unref) === "function") {
      this.#deferRenderTimer.unref();
    }
  }
  #clearRenderDeferral() {
    if (this.#deferRenderTimer) {
      clearTimeout(this.#deferRenderTimer);
      this.#deferRenderTimer = void 0;
    }
  }
  // Helper to build complete line with symbol, text, prefix, and suffix
  #buildOutputLine(symbol2, text2, prefixText, suffixText) {
    const fullPrefixText = this.#getFullPrefixText(prefixText, " ");
    const separatorText = symbol2 ? " " : "";
    const fullText = typeof text2 === "string" ? separatorText + text2 : "";
    const fullSuffixText = this.#getFullSuffixText(suffixText, " ");
    return fullPrefixText + symbol2 + fullText + fullSuffixText;
  }
  constructor(options) {
    if (typeof options === "string") {
      options = {
        text: options
      };
    }
    this.#options = {
      color: "cyan",
      stream: process8.stderr,
      discardStdin: true,
      hideCursor: true,
      ...options
    };
    this.color = this.#options.color;
    this.#stream = this.#options.stream;
    if (typeof this.#options.isEnabled !== "boolean") {
      this.#options.isEnabled = isInteractive({ stream: this.#stream });
    }
    if (typeof this.#options.isSilent !== "boolean") {
      this.#options.isSilent = false;
    }
    if (this.#options.interval !== void 0 && !(Number.isInteger(this.#options.interval) && this.#options.interval > 0)) {
      throw new Error("The `interval` option must be a positive integer");
    }
    const userInterval = this.#options.interval;
    this.spinner = this.#options.spinner;
    this.#options.interval = userInterval;
    this.text = this.#options.text;
    this.prefixText = this.#options.prefixText;
    this.suffixText = this.#options.suffixText;
    this.indent = this.#options.indent;
    if (process8.env.NODE_ENV === "test") {
      this._stream = this.#stream;
      this._isEnabled = this.#options.isEnabled;
      Object.defineProperty(this, "_linesToClear", {
        get() {
          return this.#linesToClear;
        },
        set(newValue) {
          this.#linesToClear = newValue;
        }
      });
      Object.defineProperty(this, "_frameIndex", {
        get() {
          return this.#frameIndex;
        }
      });
      Object.defineProperty(this, "_lineCount", {
        get() {
          const columns = this.#stream.columns ?? 80;
          const prefixText = typeof this.#options.prefixText === "function" ? "" : this.#options.prefixText;
          const suffixText = typeof this.#options.suffixText === "function" ? "" : this.#options.suffixText;
          const fullPrefixText = typeof prefixText === "string" && prefixText !== "" ? prefixText + " " : "";
          const fullSuffixText = typeof suffixText === "string" && suffixText !== "" ? " " + suffixText : "";
          const spinnerChar = "-";
          const fullText = " ".repeat(this.#options.indent) + fullPrefixText + spinnerChar + (typeof this.#options.text === "string" ? " " + this.#options.text : "") + fullSuffixText;
          return this.#computeLineCountFrom(fullText, columns);
        }
      });
    }
  }
  get indent() {
    return this.#options.indent;
  }
  set indent(indent = 0) {
    if (!(indent >= 0 && Number.isInteger(indent))) {
      throw new Error("The `indent` option must be an integer from 0 and up");
    }
    this.#options.indent = indent;
  }
  get interval() {
    return this.#options.interval ?? this.#spinner.interval ?? 100;
  }
  get spinner() {
    return this.#spinner;
  }
  set spinner(spinner) {
    this.#frameIndex = -1;
    this.#options.interval = void 0;
    if (typeof spinner === "object") {
      if (!Array.isArray(spinner.frames) || spinner.frames.length === 0 || spinner.frames.some((frame) => typeof frame !== "string")) {
        throw new Error("The given spinner must have a non-empty `frames` array of strings");
      }
      if (spinner.interval !== void 0 && !(Number.isInteger(spinner.interval) && spinner.interval > 0)) {
        throw new Error("`spinner.interval` must be a positive integer if provided");
      }
      this.#spinner = spinner;
    } else if (!isUnicodeSupported2()) {
      this.#spinner = cli_spinners_default.line;
    } else if (spinner === void 0) {
      this.#spinner = cli_spinners_default.dots;
    } else if (spinner !== "default" && cli_spinners_default[spinner]) {
      this.#spinner = cli_spinners_default[spinner];
    } else {
      throw new Error(`There is no built-in spinner named '${spinner}'. See https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json for a full list.`);
    }
  }
  get text() {
    return this.#options.text;
  }
  set text(value = "") {
    this.#options.text = value;
  }
  get prefixText() {
    return this.#options.prefixText;
  }
  set prefixText(value = "") {
    this.#options.prefixText = value;
  }
  get suffixText() {
    return this.#options.suffixText;
  }
  set suffixText(value = "") {
    this.#options.suffixText = value;
  }
  get isSpinning() {
    return this.#id !== void 0;
  }
  #formatAffix(value, separator, placeBefore = false) {
    const resolved = typeof value === "function" ? value() : value;
    if (typeof resolved === "string" && resolved !== "") {
      return placeBefore ? separator + resolved : resolved + separator;
    }
    return "";
  }
  #getFullPrefixText(prefixText = this.#options.prefixText, postfix = " ") {
    return this.#formatAffix(prefixText, postfix, false);
  }
  #getFullSuffixText(suffixText = this.#options.suffixText, prefix = " ") {
    return this.#formatAffix(suffixText, prefix, true);
  }
  #computeLineCountFrom(text2, columns) {
    let count = 0;
    for (const line of stripVTControlCharacters2(text2).split("\n")) {
      count += Math.max(1, Math.ceil(stringWidth(line) / columns));
    }
    return count;
  }
  get color() {
    return this.#color;
  }
  set color(value) {
    if (value !== void 0 && value !== false && !validColors.has(value)) {
      throw new Error("The `color` option must be a valid color or `false` to disable");
    }
    this.#color = value;
  }
  get isEnabled() {
    return this.#options.isEnabled && !this.#options.isSilent;
  }
  set isEnabled(value) {
    if (typeof value !== "boolean") {
      throw new TypeError("The `isEnabled` option must be a boolean");
    }
    this.#options.isEnabled = value;
  }
  get isSilent() {
    return this.#options.isSilent;
  }
  set isSilent(value) {
    if (typeof value !== "boolean") {
      throw new TypeError("The `isSilent` option must be a boolean");
    }
    this.#options.isSilent = value;
  }
  frame() {
    const now = Date.now();
    if (this.#frameIndex === -1 || now - this.#lastFrameTime >= this.interval) {
      this.#frameIndex = (this.#frameIndex + 1) % this.#spinner.frames.length;
      this.#lastFrameTime = now;
    }
    const { frames } = this.#spinner;
    let frame = frames[this.#frameIndex];
    if (this.#color) {
      frame = source_default[this.#color](frame);
    }
    const fullPrefixText = this.#getFullPrefixText(this.#options.prefixText, " ");
    const fullText = typeof this.text === "string" ? " " + this.text : "";
    const fullSuffixText = this.#getFullSuffixText(this.#options.suffixText, " ");
    return fullPrefixText + frame + fullText + fullSuffixText;
  }
  clear() {
    if (!this.isEnabled || !this.#stream.isTTY) {
      return this;
    }
    this.#internalWrite(() => {
      this.#stream.cursorTo(0);
      for (let index = 0; index < this.#linesToClear; index++) {
        if (index > 0) {
          this.#stream.moveCursor(0, -1);
        }
        this.#stream.clearLine(1);
      }
      if (this.#options.indent) {
        this.#stream.cursorTo(this.#options.indent);
      }
    });
    this.#linesToClear = 0;
    return this;
  }
  // Helper to hook a single stream
  #hookStream(stream) {
    if (!stream || this.#hookedStreams.has(stream) || !stream.isTTY || typeof stream.write !== "function") {
      return;
    }
    if (activeHooksPerStream.has(stream)) {
      console.warn("[ora] Multiple concurrent spinners detected. This may cause visual corruption. Use one spinner at a time.");
    }
    const originalWrite = stream.write;
    this.#hookedStreams.set(stream, originalWrite);
    activeHooksPerStream.set(stream, this);
    stream.write = (chunk, encoding, callback) => this.#hookedWrite(stream, originalWrite, chunk, encoding, callback);
  }
  /**
  Intercept stream writes while spinner is active to handle external writes cleanly without visual corruption.
  Hooks process stdio streams and the active spinner stream so console.log(), console.error(), and direct writes stay tidy.
  */
  #installHook() {
    if (!this.isEnabled || this.#hookedStreams.size > 0) {
      return;
    }
    const streamsToHook = /* @__PURE__ */ new Set([this.#stream, process8.stdout, process8.stderr]);
    for (const stream of streamsToHook) {
      this.#hookStream(stream);
    }
  }
  #uninstallHook() {
    for (const [stream, originalWrite] of this.#hookedStreams) {
      stream.write = originalWrite;
      if (activeHooksPerStream.get(stream) === this) {
        activeHooksPerStream.delete(stream);
      }
    }
    this.#hookedStreams.clear();
  }
  // eslint-disable-next-line max-params -- Need stream and originalWrite for multi-stream support
  #hookedWrite(stream, originalWrite, chunk, encoding, callback) {
    if (typeof encoding === "function") {
      callback = encoding;
      encoding = void 0;
    }
    if (this.#isInternalWrite) {
      return originalWrite.call(stream, chunk, encoding, callback);
    }
    this.clear();
    const chunkString = this.#stringifyChunk(chunk, encoding);
    const chunkTerminatesLine = this.#chunkTerminatesLine(chunkString);
    const writeResult = originalWrite.call(stream, chunk, encoding, callback);
    if (chunkTerminatesLine) {
      this.#clearRenderDeferral();
    } else if (chunkString.length > 0) {
      this.#scheduleRenderDeferral();
    }
    if (this.isSpinning && !this.#deferRenderTimer) {
      this.render();
    }
    return writeResult;
  }
  render() {
    if (!this.isEnabled || this.#drainHandler || this.#deferRenderTimer) {
      return this;
    }
    const useSynchronizedOutput = this.#stream.isTTY;
    let shouldDisableSynchronizedOutput = false;
    try {
      if (useSynchronizedOutput) {
        this.#internalWrite(() => this.#stream.write(SYNCHRONIZED_OUTPUT_ENABLE));
        shouldDisableSynchronizedOutput = true;
      }
      this.clear();
      let frameContent = this.frame();
      const columns = this.#stream.columns ?? 80;
      const actualLineCount = this.#computeLineCountFrom(frameContent, columns);
      const consoleHeight = this.#stream.rows;
      if (consoleHeight && consoleHeight > 1 && actualLineCount > consoleHeight) {
        const lines = frameContent.split("\n");
        const maxLines = consoleHeight - 1;
        frameContent = [...lines.slice(0, maxLines), "... (content truncated to fit terminal)"].join("\n");
      }
      const canContinue = this.#internalWrite(() => this.#stream.write(frameContent));
      if (canContinue === false && this.#stream.isTTY) {
        this.#drainHandler = () => {
          this.#drainHandler = void 0;
          this.#tryRender();
        };
        this.#stream.once("drain", this.#drainHandler);
      }
      this.#linesToClear = this.#computeLineCountFrom(frameContent, columns);
    } finally {
      if (shouldDisableSynchronizedOutput) {
        this.#internalWrite(() => this.#stream.write(SYNCHRONIZED_OUTPUT_DISABLE));
      }
    }
    return this;
  }
  start(text2) {
    if (text2 !== void 0) {
      this.text = text2;
    }
    if (this.isSilent) {
      return this;
    }
    if (!this.isEnabled) {
      const symbol2 = this.text ? "-" : "";
      const line = " ".repeat(this.#options.indent) + this.#buildOutputLine(symbol2, this.text, this.#options.prefixText, this.#options.suffixText);
      if (line.trim() !== "") {
        this.#internalWrite(() => this.#stream.write(line + "\n"));
      }
      return this;
    }
    if (this.isSpinning) {
      return this;
    }
    if (this.#options.hideCursor) {
      cli_cursor_default.hide(this.#stream);
    }
    if (this.#options.discardStdin && process8.stdin.isTTY) {
      stdin_discarder_default.start();
      this.#isDiscardingStdin = true;
    }
    this.#installHook();
    this.render();
    this.#id = setInterval(this.render.bind(this), this.interval);
    return this;
  }
  stop() {
    clearInterval(this.#id);
    this.#id = void 0;
    this.#frameIndex = -1;
    this.#lastFrameTime = 0;
    this.#clearRenderDeferral();
    this.#uninstallHook();
    if (this.#drainHandler) {
      this.#stream.removeListener("drain", this.#drainHandler);
      this.#drainHandler = void 0;
    }
    if (this.isEnabled) {
      this.clear();
      if (this.#options.hideCursor) {
        cli_cursor_default.show(this.#stream);
      }
    }
    if (this.#isDiscardingStdin) {
      this.#isDiscardingStdin = false;
      stdin_discarder_default.stop();
    }
    return this;
  }
  succeed(text2) {
    return this.stopAndPersist({ symbol: symbols_exports.success, text: text2 });
  }
  fail(text2) {
    return this.stopAndPersist({ symbol: symbols_exports.error, text: text2 });
  }
  warn(text2) {
    return this.stopAndPersist({ symbol: symbols_exports.warning, text: text2 });
  }
  info(text2) {
    return this.stopAndPersist({ symbol: symbols_exports.info, text: text2 });
  }
  stopAndPersist(options = {}) {
    if (this.isSilent) {
      return this;
    }
    const symbol2 = options.symbol ?? " ";
    const text2 = options.text ?? this.text;
    const prefixText = options.prefixText ?? this.#options.prefixText;
    const suffixText = options.suffixText ?? this.#options.suffixText;
    const textToWrite = this.#buildOutputLine(symbol2, text2, prefixText, suffixText) + "\n";
    this.stop();
    this.#internalWrite(() => this.#stream.write(textToWrite));
    return this;
  }
};
function ora(options) {
  return new Ora(options);
}

// bin/index.js
var import_picocolors = __toESM(require_picocolors(), 1);

// node_modules/.pnpm/degit@3.10.0/node_modules/degit/dist/src-6fVYqAkF.js
init_utils_DTdqQ6KU();
import m3 from "fs";
import h4 from "tty";
import g3 from "assert";
import _3, { EventEmitter as ee2 } from "events";
import v3 from "fs";
import y4, { dirname as te2, parse as ne2 } from "path";
import b3, { basename as re2, join as ie2, posix as ae2, win32 as oe2 } from "path";
import { EventEmitter as se2 } from "events";
import ce2, { access as le2, constants as ue2, cp as de2, mkdir as fe2, mkdtemp as pe2, readFile as me2, readdir as he2, rm as ge2, writeFile as _e2 } from "fs/promises";
import ve2 from "stream";
import { StringDecoder as ye2 } from "string_decoder";
import { Buffer as be2 } from "buffer";
import * as xe2 from "zlib";
import Se2 from "zlib";
import Ce2 from "assert";
import { randomBytes as we2 } from "crypto";
var _a2, _b2, _c2, _d2;
var Te2 = ((_d2 = (_c2 = (_b2 = (_a2 = h4) == null ? void 0 : _a2.WriteStream) == null ? void 0 : _b2.prototype) == null ? void 0 : _c2.hasColors) == null ? void 0 : _d2.call(_c2)) ?? false;
var x3 = (e4, t4) => {
  if (!Te2) return (e5) => e5;
  let n4 = `\x1B[${e4}m`, r3 = `\x1B[${t4}m`;
  return (e5) => {
    let i4 = e5 + ``, a4 = i4.indexOf(r3);
    if (a4 === -1) return n4 + i4 + r3;
    let o3 = n4, s3 = 0, c4 = (t4 === 22 ? r3 : ``) + n4;
    for (; a4 !== -1; ) o3 += i4.slice(s3, a4) + c4, s3 = a4 + r3.length, a4 = i4.indexOf(r3, s3);
    return o3 += i4.slice(s3) + r3, o3;
  };
};
x3(0, 0);
var S3 = x3(1, 22);
x3(2, 22), x3(3, 23);
var Ee2 = x3(4, 24);
x3(53, 55), x3(7, 27), x3(8, 28), x3(9, 29), x3(30, 39);
var De2 = x3(31, 39);
var Oe2 = x3(32, 39);
x3(33, 39), x3(34, 39);
var ke2 = x3(35, 39);
var Ae2 = x3(36, 39);
x3(37, 39), x3(90, 39), x3(40, 49), x3(41, 49), x3(42, 49), x3(43, 49), x3(44, 49), x3(45, 49), x3(46, 49), x3(47, 49), x3(100, 49), x3(91, 39), x3(92, 39), x3(93, 39), x3(94, 39), x3(95, 39), x3(96, 39), x3(97, 39), x3(101, 49), x3(102, 49), x3(103, 49), x3(104, 49), x3(105, 49), x3(106, 49), x3(107, 49);
var je2 = f(((e4, t4) => {
  let n4 = process.platform === `win32`, r3 = n4 ? `\\\\+` : `\\/`, i4 = n4 ? `\\\\` : `/`, a4 = `((?:[^${i4}]*(?:${i4}|$))*)`, o3 = `([^${i4}]*)`;
  function s3(e5, { extended: t5 = false, globstar: n5 = false, strict: i5 = false, filepath: s4 = false, flags: c4 = `` } = {}) {
    let l4 = ``, u5 = ``, d3 = { regex: ``, segments: [] }, f3 = false, p3 = false, m4 = [];
    function h5(e6, { split: t6, last: n6, only: i6 } = {}) {
      i6 !== `path` && (l4 += e6), s4 && i6 !== `regex` && (d3.regex += e6 === `\\/` ? r3 : e6, t6 ? (n6 && (u5 += e6), u5 !== `` && (c4.includes(`g`) || (u5 = `^${u5}$`), d3.segments.push(new RegExp(u5, c4))), u5 = ``) : u5 += e6);
    }
    let g4, _4;
    for (let r4 = 0; r4 < e5.length; r4++) {
      if (g4 = e5[r4], _4 = e5[r4 + 1], [`\\`, `$`, `^`, `.`, `=`].includes(g4)) {
        h5(`\\${g4}`);
        continue;
      }
      if (g4 === `/`) {
        h5(`\\${g4}`, { split: true }), _4 === `/` && !i5 && (l4 += `?`);
        continue;
      }
      if (g4 === `(`) {
        if (m4.length) {
          h5(g4);
          continue;
        }
        h5(`\\${g4}`);
        continue;
      }
      if (g4 === `)`) {
        if (m4.length) {
          h5(g4);
          let e6 = m4.pop();
          h5(e6 === `@` ? `{1}` : e6 === `!` ? `([^/]*)` : e6);
          continue;
        }
        h5(`\\${g4}`);
        continue;
      }
      if (g4 === `|`) {
        if (m4.length) {
          h5(g4);
          continue;
        }
        h5(`\\${g4}`);
        continue;
      }
      if (g4 === `+`) {
        if (_4 === `(` && t5) {
          m4.push(g4);
          continue;
        }
        h5(`\\${g4}`);
        continue;
      }
      if (g4 === `@` && t5 && _4 === `(`) {
        m4.push(g4);
        continue;
      }
      if (g4 === `!`) {
        if (t5) {
          if (p3) {
            h5(`^`);
            continue;
          }
          if (_4 === `(`) {
            m4.push(g4), h5(`(?!`), r4++;
            continue;
          }
          h5(`\\${g4}`);
          continue;
        }
        h5(`\\${g4}`);
        continue;
      }
      if (g4 === `?`) {
        if (t5) {
          _4 === `(` ? m4.push(g4) : h5(`.`);
          continue;
        }
        h5(`\\${g4}`);
        continue;
      }
      if (g4 === `[`) {
        if (p3 && _4 === `:`) {
          r4++;
          let t6 = ``;
          for (; e5[++r4] !== `:`; ) t6 += e5[r4];
          t6 === `alnum` ? h5(`(\\w|\\d)`) : t6 === `space` ? h5(`\\s`) : t6 === `digit` && h5(`\\d`), r4++;
          continue;
        }
        if (t5) {
          p3 = true, h5(g4);
          continue;
        }
        h5(`\\${g4}`);
        continue;
      }
      if (g4 === `]`) {
        if (t5) {
          p3 = false, h5(g4);
          continue;
        }
        h5(`\\${g4}`);
        continue;
      }
      if (g4 === `{`) {
        if (t5) {
          f3 = true, h5(`(`);
          continue;
        }
        h5(`\\${g4}`);
        continue;
      }
      if (g4 === `}`) {
        if (t5) {
          f3 = false, h5(`)`);
          continue;
        }
        h5(`\\${g4}`);
        continue;
      }
      if (g4 === `,`) {
        if (f3) {
          h5(`|`);
          continue;
        }
        h5(`\\${g4}`);
        continue;
      }
      if (g4 === `*`) {
        if (_4 === `(` && t5) {
          m4.push(g4);
          continue;
        }
        let i6 = e5[r4 - 1], s5 = 1;
        for (; e5[r4 + 1] === `*`; ) s5++, r4++;
        let c5 = e5[r4 + 1];
        n5 ? s5 > 1 && (i6 === `/` || i6 === void 0) && (c5 === `/` || c5 === void 0) ? (h5(`((?:[^/]*(?:/|$))*)`, { only: `regex` }), h5(a4, { only: `path`, last: true, split: true }), r4++) : (h5(`([^/]*)`, { only: `regex` }), h5(o3, { only: `path` })) : h5(`.*`);
        continue;
      }
      h5(g4);
    }
    c4.includes(`g`) || (l4 = `^${l4}$`, u5 = `^${u5}$`, s4 && (d3.regex = `^${d3.regex}$`));
    let ee3 = { regex: new RegExp(l4, c4) };
    return s4 && (d3.segments.push(new RegExp(u5, c4)), d3.regex = new RegExp(d3.regex, c4), d3.globstar = new RegExp(c4.includes(`g`) ? a4 : `^${a4}$`, c4), ee3.path = d3), ee3;
  }
  t4.exports = s3;
}));
var Me2 = f(((e4, t4) => {
  let n4 = h2(`os`), r3 = h2(`path`), i4 = n4.platform() === `win32`, a4 = { "{": `}`, "(": `)`, "[": `]` }, o3 = /\\(.)|(^!|\*|[\].+)]\?|\[[^\\\]]+\]|\{[^\\}]+\}|\(\?[:!=][^\\)]+\)|\([^|]+\|[^\\)]+\)|(\\).|([@?!+*]\(.*\)))/, s3 = /\\(.)|(^!|[*?{}()[\]]|\(\?)/;
  function c4(e5, { strict: t5 = true } = {}) {
    if (e5 === ``) return false;
    let n5, r4 = t5 ? o3 : s3;
    for (; n5 = r4.exec(e5); ) {
      if (n5[2]) return true;
      let t6 = n5.index + n5[0].length, r5 = n5[1], i5 = r5 ? a4[r5] : null;
      if (r5 && i5) {
        let n6 = e5.indexOf(i5, t6);
        n6 !== -1 && (t6 = n6 + 1);
      }
      e5 = e5.slice(t6);
    }
    return false;
  }
  function u5(e5, { strict: t5 = false } = {}) {
    i4 && e5.includes(`/`) && (e5 = e5.split(`\\`).join(`/`)), /[\{\[].*[\/]*.*[\}\]]$/.test(e5) && (e5 += `/`), e5 += `a`;
    do
      e5 = r3.dirname(e5);
    while (c4(e5, { strict: t5 }) || /(^|[^\\])([\{\[]|\([^\)]+$)/.test(e5));
    return e5.replace(/\\([\*\?\|\[\]\(\)\{\}])/g, `$1`);
  }
  function d3(e5, t5 = {}) {
    let n5 = u5(e5, t5), i5 = c4(e5, t5), a5;
    return n5 == `.` ? a5 = e5 : (a5 = e5.substr(n5.length), a5.startsWith(`/`) && (a5 = a5.substr(1))), i5 || (n5 = r3.dirname(e5), a5 = n5 === `.` ? e5 : e5.substr(n5.length)), a5.startsWith(`./`) && (a5 = a5.substr(2)), a5.startsWith(`/`) && (a5 = a5.substr(1)), { base: n5, glob: a5, isGlob: i5 };
  }
  t4.exports = d3;
}));
var Ne2 = f(((e4, t4) => {
  let n4 = h2(`fs`), r3 = je2(), i4 = Me2(), { join: a4, resolve: o3, relative: s3 } = h2(`path`), c4 = /(^|[\\\/])\.[^\\\/\.]/g, u5 = {};
  function d3(e5, t5, r4, i5, l4 = ``, f3 = 0) {
    let p3 = r4.segments[f3], m4 = o3(i5.cwd, t5, l4), h5 = n4.readdirSync(m4), { dot: g4, filesOnly: _4 } = i5, ee3 = 0, v4 = h5.length, y5, te3, ne3, b4, re3;
    for (; ee3 < v4; ee3++) if (te3 = a4(m4, y5 = h5[ee3]), ne3 = l4 ? a4(l4, y5) : y5, !(!g4 && c4.test(ne3))) {
      if (re3 = r4.regex.test(ne3), (b4 = u5[ne3]) === void 0 && (u5[ne3] = b4 = n4.lstatSync(te3)), !b4.isDirectory()) {
        re3 && e5.push(s3(i5.cwd, te3));
        continue;
      }
      p3 && !p3.test(y5) || (!_4 && re3 && e5.push(a4(t5, ne3)), d3(e5, t5, r4, i5, ne3, p3 && p3.toString() !== r4.globstar && f3 + 1));
    }
  }
  t4.exports = function(e5, t5 = {}) {
    if (!e5) return [];
    let a5 = i4(e5);
    if (t5.cwd = t5.cwd || `.`, !a5.isGlob) try {
      let r4 = o3(t5.cwd, e5), i5 = n4.statSync(r4);
      return t5.filesOnly && !i5.isFile() ? [] : t5.absolute ? [r4] : [e5];
    } catch (e6) {
      if (e6.code != `ENOENT`) throw e6;
      return [];
    }
    t5.flush && (u5 = {});
    let s4 = [], { path: c5 } = r3(a5.glob, { filepath: true, globstar: true, extended: true });
    return c5.globstar = c5.globstar.toString(), d3(s4, a5.base, c5, t5, `.`, 0), t5.absolute ? s4.map((e6) => o3(t5.cwd, e6)) : s4;
  };
}));
var Pe2 = /* @__PURE__ */ new Map([[`github`, `github.com`], [`gitlab`, `gitlab.com`], [`bitbucket`, `bitbucket.org`], [`git.sr.ht`, `git.sr.ht`], [`gist`, `gist.github.com`]]);
var Fe2 = { github: (e4, t4) => `${e4.url}/archive/${t4}.tar.gz`, gitlab: (e4, t4) => `${e4.url}/-/archive/${t4}/${e4.name}-${t4}.tar.gz`, bitbucket: (e4, t4) => `${e4.url}/get/${t4}.tar.gz`, "git.sr.ht": (e4, t4) => `${e4.url}/archive/${t4}.tar.gz`, gist: (e4, t4) => `https://codeload.github.com/gist/${e4.name}/tar.gz/${t4}` };
function Ie2(e4) {
  return Object.hasOwn(Fe2, e4);
}
function Le2(e4, t4) {
  let n4 = e4.slice(9), r3 = n4.indexOf(`/`);
  if (r3 === -1) throw new k(`could not parse ${t4}`, { code: `BAD_SRC` });
  return { customDomain: n4.slice(0, r3), remainder: n4.slice(r3 + 1), site: `gitlab`, transport: `https`, isWebUrl: true };
}
function Re2(e4, t4) {
  let n4 = `github`, r3 = `https`, i4 = false, a4 = e4;
  if (e4.startsWith(`https://`) || e4.startsWith(`http://`)) {
    let t5 = new URL(e4);
    n4 = t5.hostname.replace(/\.(com|org)$/u, ``), a4 = t5.pathname.replace(/^\//u, ``), i4 = true;
  } else if (e4.startsWith(`ssh://`)) {
    let t5 = new URL(e4);
    n4 = t5.hostname.replace(/\.(com|org)$/u, ``), a4 = t5.pathname.replace(/^\//u, ``), r3 = `ssh`, i4 = true;
  } else if (e4.startsWith(`git@`)) {
    let i5 = /^git@([^:/]+)[:/](.+)$/u.exec(e4);
    if (!i5) throw new k(`could not parse ${t4}`, { code: `BAD_SRC` });
    n4 = i5[1].replace(/\.(com|org)$/u, ``), a4 = i5[2], r3 = `ssh`;
  } else if (e4.startsWith(`git.sr.ht/`)) n4 = `git.sr.ht`, a4 = e4.slice(10);
  else if (e4.startsWith(`gitlab://`)) return Le2(e4, t4);
  else {
    let t5 = e4.indexOf(`:`), r4 = e4.indexOf(`/`);
    t5 !== -1 && (r4 === -1 || t5 < r4) && (n4 = e4.slice(0, t5), a4 = e4.slice(t5 + 1));
  }
  return n4 === `gist.github` && (n4 = `gist`), { remainder: a4, site: n4, transport: r3, isWebUrl: i4 };
}
function ze2(e4, t4) {
  switch (e4) {
    case `github`: {
      let e5 = t4.findIndex((e6, n4) => (e6 === `tree` || e6 === `blob`) && n4 + 1 < t4.length);
      return e5 === -1 ? void 0 : { ref: t4[e5 + 1], subdir: t4.slice(e5 + 2) };
    }
    case `gitlab`: {
      let e5 = t4.findIndex((e6, n4) => e6 === `-` && (t4[n4 + 1] === `tree` || t4[n4 + 1] === `blob`) && n4 + 2 < t4.length);
      return e5 === -1 ? void 0 : { ref: t4[e5 + 2], subdir: t4.slice(e5 + 3) };
    }
    case `bitbucket`: {
      let e5 = t4.findIndex((e6, n4) => e6 === `src` && n4 + 1 < t4.length);
      return e5 === -1 ? void 0 : { ref: t4[e5 + 1], subdir: t4.slice(e5 + 2) };
    }
    case `git.sr.ht`: {
      let e5 = t4.findIndex((e6, n4) => e6 === `tree` && n4 + 1 < t4.length);
      return e5 === -1 ? void 0 : { ref: t4[e5 + 1], subdir: t4.slice(e5 + 2) };
    }
    case `gist`:
      return;
  }
}
function Be2(e4, t4, n4, r3) {
  if (t4.length > 2) throw new k(`could not parse ${e4}`, { code: `BAD_SRC` });
  let i4 = t4.length === 1 ? t4[0] : t4[1];
  if (!i4) throw new k(`could not parse ${e4}`, { code: `BAD_SRC` });
  let a4 = i4.replace(/\.git$/u, ``), o3 = t4.length === 1 ? `gist` : t4[0], s3 = `https://gist.github.com/${a4}.git`;
  return { mode: `tar`, name: a4, ref: n4, site: `gist`, ssh: `ssh://git@gist.github.com/${a4}.git`, transport: r3, url: s3, user: o3 };
}
function Ve2(e4) {
  let t4 = decodeURIComponent(e4), [n4, r3 = `HEAD`] = t4.split(`#`, 2), { remainder: i4, site: a4, transport: o3, customDomain: s3, isWebUrl: c4 } = Re2(n4, t4);
  if (!Ie2(a4)) throw new k(`degit supports GitHub, GitLab, Sourcehut, BitBucket and Gist`, { code: `UNSUPPORTED_HOST` });
  let l4 = i4.split(`/`).filter(Boolean);
  if (a4 === `gist`) return Be2(e4, l4, r3, o3);
  let [u5, d3, ...p3] = l4;
  if (!u5 || !d3) throw new k(`could not parse ${e4}`, { code: `BAD_SRC` });
  let m4 = d3.replace(/\.git$/u, ``), h5 = r3, g4 = p3;
  if (c4) {
    let e5 = ze2(a4, p3);
    e5 && (r3 === `HEAD` && (h5 = e5.ref), g4 = e5.subdir);
  }
  let _4 = g4.length > 0 ? `/${g4.join(`/`)}` : void 0, ee3 = s3 ?? Pe2.get(a4), v4 = `https://${ee3}/${u5}/${m4}`, y5 = `ssh://git@${ee3}/${u5}/${m4}`;
  return { mode: `tar`, name: m4, ref: h5, site: a4, ssh: y5, subdir: _4, transport: o3, url: v4, user: u5 };
}
function He2(e4, t4) {
  if (t4.site !== `gitlab`) return [t4];
  let [n4] = e4.split(`#`, 2), { remainder: r3, isWebUrl: i4 } = Re2(n4.replace(/\.git$/u, ``), e4), a4 = new URL(t4.url).hostname, o3 = r3, s3 = false;
  if (i4) {
    let e5 = r3.split(`/`).filter(Boolean), t5 = e5.findIndex((t6, n5) => t6 === `-` && (e5[n5 + 1] === `tree` || e5[n5 + 1] === `blob`));
    t5 === -1 ? o3 = r3 : (o3 = e5.slice(0, t5).join(`/`), s3 = true);
  }
  let c4 = o3.split(`/`).filter(Boolean), l4 = [];
  for (let e5 = 2; e5 <= c4.length; e5 += 1) {
    let n5 = c4.slice(0, e5 - 1).join(`/`), r4 = c4[e5 - 1], i5 = c4.slice(e5).join(`/`), o4 = s3 ? t4.subdir : i5 ? `/${i5}` : void 0;
    l4.push({ ...t4, user: n5, name: r4, subdir: o4, url: `https://${a4}/${n5}/${r4}`, ssh: `ssh://git@${a4}/${n5}/${r4}` });
  }
  return l4;
}
var Ue2 = b3.join(V, `aliases.json`);
function Ke2(e4, t4) {
  return Object.hasOwn(e4, t4) ? e4[t4] : void 0;
}
var Qe2 = m(Ne2(), 1);
function $e2(e4) {
  let t4 = b3.resolve(e4, O);
  try {
    if (!m3.lstatSync(t4).isFile()) return false;
    let e5 = M(t4);
    return Array.isArray(e5) ? (m3.unlinkSync(t4), e5) : false;
  } catch {
    return false;
  }
}
function et2(e4, t4, n4, r3) {
  try {
    if (m3.readdirSync(e4).length > 0) {
      if (t4) {
        n4({ code: `DEST_NOT_EMPTY`, message: `destination directory is not empty. Using options.force, continuing` });
        return;
      }
      throw new k(`destination directory is not empty, aborting. Use options.force to override`, { code: `DEST_NOT_EMPTY` });
    }
    r3({ code: `DEST_IS_EMPTY`, message: `destination directory is empty` });
  } catch (e5) {
    if (e5.code !== `ENOENT`) throw e5;
  }
}
function tt2(e4) {
  return /[*?{}[\]]/u.test(e4);
}
function nt2(e4, n4, r3, i4) {
  let a4 = Array.isArray(n4.files) ? n4.files : [n4.files], o3 = b3.resolve(e4), s3 = a4.flatMap((e5) => {
    if (tt2(e5) && !n4.allowGlobs) return i4({ code: `GLOB_NOT_ALLOWED`, message: `remove action uses glob pattern ${S3(e5)} but ${S3(`allowGlobs`)} is not set, skipping` }), [];
    if (!A(o3, e5)) return it2(o3, e5, i4);
    let r4 = (0, Qe2.default)(e5, { cwd: o3, dot: true, flush: true }), a5 = r4.length > 0 ? r4 : [e5];
    return a5.sort((e6, t4) => b3.normalize(t4).split(b3.sep).length - b3.normalize(e6).split(b3.sep).length), a5.flatMap((e6) => it2(o3, e6, i4));
  });
  s3.length > 0 && r3({ code: `REMOVED`, message: `removed: ${S3(s3.map((e5) => S3(e5)).join(`, `))}` });
}
function rt2(e4, n4, r3) {
  if (r3) try {
    let t4 = m3.realpathSync(b3.dirname(n4)), r4 = b3.relative(e4, t4);
    return r4.startsWith(`..`) || b3.isAbsolute(r4) ? { ok: false, missing: false } : { ok: true };
  } catch {
    return { ok: false, missing: true };
  }
  try {
    return A(e4, m3.realpathSync(n4)) ? { ok: true } : { ok: false, missing: false };
  } catch {
    return { ok: false, missing: true };
  }
}
function it2(e4, n4, r3) {
  let i4 = A(e4, n4);
  if (!i4) return r3({ code: `FILE_OUTSIDE_DEST`, message: `action wants to remove ${S3(n4)} but it is outside the destination, skipping` }), [];
  let a4;
  try {
    a4 = m3.lstatSync(i4);
  } catch {
    return r3({ code: `FILE_DOES_NOT_EXIST`, message: `action wants to remove ${S3(n4)} but it does not exist` }), [];
  }
  let o3 = rt2(e4, i4, a4.isSymbolicLink());
  if (o3.ok === false) return r3({ code: o3.missing ? `FILE_DOES_NOT_EXIST` : `FILE_OUTSIDE_DEST`, message: `action wants to remove ${S3(n4)} but ${o3.missing ? `it does not exist` : `it resolves outside the destination, skipping`}` }), [];
  let s3 = a4.isDirectory();
  return m3.rmSync(i4, { force: true, recursive: true }), s3 ? [`${n4}/`] : [n4];
}
function at2(e4, n4, r3) {
  if (!n4 || n4.length === 0) return;
  let a4 = b3.resolve(e4), o3 = /* @__PURE__ */ new Set(), s3 = /* @__PURE__ */ new Set();
  for (let e5 of n4) {
    let n5 = A(a4, e5);
    if (!n5) {
      r3({ code: `FILE_OUTSIDE_DEST`, message: `action wants to keep ${S3(e5)} but it is outside the destination, skipping` });
      continue;
    }
    if (!m3.existsSync(n5)) {
      r3({ code: `FILE_DOES_NOT_EXIST`, message: `action wants to keep ${S3(e5)} but it does not exist` });
      continue;
    }
    let i4 = m3.lstatSync(n5);
    !i4.isSymbolicLink() && i4.isDirectory() ? s3.add(n5) : o3.add(n5);
  }
  if (o3.size === 0 && s3.size === 0) {
    r3({ code: `NO_FILES_MATCHED`, message: `no requested files were found, keeping the entire destination` });
    return;
  }
  let c4 = b3.resolve(a4, O);
  try {
    m3.lstatSync(c4).isFile() && o3.add(c4);
  } catch {
  }
  let l4 = [...s3].map((e5) => ({ dir: e5, prefix: b3.join(e5, b3.sep) }));
  function u5(e5) {
    if (o3.has(e5)) return true;
    for (let { dir: t4, prefix: n5 } of l4) if (e5 === t4 || e5.startsWith(n5)) return true;
    return false;
  }
  d3(a4);
  function d3(e5) {
    for (let t4 of m3.readdirSync(e5, { withFileTypes: true })) {
      let n5 = b3.join(e5, t4.name);
      t4.isDirectory() && !t4.isSymbolicLink() ? (d3(n5), m3.readdirSync(n5).length === 0 && !u5(n5) && m3.rmdirSync(n5)) : u5(n5) || m3.unlinkSync(n5);
    }
  }
}
function ot2(e4, t4, n4) {
  let r3 = n4.split(`/`).filter(Boolean).join(`/`), i4 = b3.join(e4, r3);
  if (!m3.existsSync(i4)) throw new k(`could not find subdirectory ${n4} in cloned repository`, { code: `MISSING_SUBDIR`, subdir: n4 });
  m3.mkdirSync(t4, { recursive: true });
  for (let e5 of m3.readdirSync(i4, { withFileTypes: true })) {
    let n5 = b3.join(i4, e5.name), r4 = b3.join(t4, e5.name);
    m3.cpSync(n5, r4, { recursive: true });
  }
}
function st2(e4, t4, n4, r3) {
  let i4 = Array.isArray(t4.files) ? t4.files : [t4.files], a4 = b3.resolve(e4), o3 = process.env[t4.replacement];
  if (o3 === void 0) {
    r3({ message: `action wants to search_replace using env var ${S3(t4.replacement)} but it is not defined, skipping` });
    return;
  }
  let s3;
  try {
    s3 = new RegExp(t4.pattern, `gu`);
  } catch {
    r3({ message: `action wants to search_replace using an invalid pattern ${S3(t4.pattern)}, skipping` });
    return;
  }
  let c4 = i4.flatMap((e5) => ct2(a4, e5, s3, o3, r3));
  c4.length > 0 && n4({ message: `replaced content in ${S3(String(c4.length))} files: ${c4.map((e5) => S3(e5)).join(`, `)}` });
}
function ct2(e4, n4, r3, i4, a4) {
  let o3 = A(e4, n4);
  if (!o3) return a4({ message: `action wants to search_replace ${S3(n4)} but it is outside the destination, skipping` }), [];
  try {
    let s3 = m3.realpathSync(o3);
    if (!A(e4, s3)) return a4({ message: `action wants to search_replace ${S3(n4)} but it is outside the destination, skipping` }), [];
    if (m3.statSync(s3).isDirectory()) return a4({ message: `action wants to search_replace ${S3(n4)} but it is a directory, skipping` }), [];
    let c4 = m3.readFileSync(s3, `utf8`), l4 = c4.replace(r3, () => i4);
    return l4 === c4 ? [] : (m3.writeFileSync(s3, l4), [n4]);
  } catch (e5) {
    if ((e5 == null ? void 0 : e5.code) === `ENOENT`) return a4({ message: `action wants to search_replace ${S3(n4)} but it does not exist` }), [];
    throw e5;
  }
}
async function lt2(e4, t4, r3, i4, a4) {
  if (typeof r3.src != `string` || r3.src === ``) throw new k(`clone directive requires a non-empty source`, { code: `BAD_SRC` });
  let o3 = j(t4, true), s3;
  if (o3 && (m3.readdirSync(t4).length > 0 || e4.hasStashed) && (s3 = await e4.getStagingDir(), e4.hasStashed === false)) {
    let n4 = F(s3, t4);
    e4.hasStashed = true, I2(n4);
  }
  r3.cache !== void 0 && typeof r3.cache != `boolean` && e4.warn({ message: `clone action cache must be a boolean, ignoring` }), r3.verbose !== void 0 && typeof r3.verbose != `boolean` && e4.warn({ message: `clone action verbose must be a boolean, ignoring` });
  let c4 = a4(r3.src, { aliases: e4.aliases, cache: typeof r3.cache == `boolean` ? r3.cache : e4.cache, fetch: e4.fetch, files: i4, force: true, git: await e4.getGitClient(), verbose: typeof r3.verbose == `boolean` ? r3.verbose : e4.verbose });
  c4.on(`info`, e4.info), c4.on(`warn`, e4.warn);
  try {
    await c4.clone(t4);
  } catch (e5) {
    throw o3 || m3.rmSync(t4, { force: true, recursive: true }), e5;
  }
  if (e4.hasStashed && s3) {
    let n4 = ft2(s3, t4);
    if (n4.ok === true) e4.hasStashed = false;
    else throw new k(`could not restore stashed files: ${n4.message}`, { code: `COULD_NOT_RESTORE`, original: n4.original });
  }
}
function ut2(e4) {
  if (typeof e4 == `string` && e4 !== ``) return [e4];
  if (Array.isArray(e4) && e4.length > 0 && e4.every((e5) => typeof e5 == `string` && e5 !== ``)) return e4;
}
async function dt2(e4, t4, r3, i4) {
  let a4 = typeof t4 == `object` && t4 ? t4.action : void 0;
  if (typeof a4 != `string`) {
    e4.warn({ message: `unknown directive action ${S3(String(a4))}, skipping` });
    return;
  }
  if (t4.action === `clone`) {
    let n4 = ut2(t4.files);
    if (t4.files !== void 0 && n4 === void 0) {
      e4.warn({ message: `clone action requires a string or array of strings for files, skipping` });
      return;
    }
    await lt2(e4, r3, t4, n4, i4);
    return;
  }
  if (t4.action === `search_replace`) {
    j(r3, false);
    let i5 = ut2(t4.files);
    if (i5 === void 0) {
      e4.warn({ message: `search_replace action requires a string or array of strings for files, skipping` });
      return;
    }
    if (typeof t4.pattern != `string` || t4.pattern === ``) {
      e4.warn({ message: `search_replace action requires a non-empty pattern, skipping` });
      return;
    }
    if (typeof t4.replacement != `string` || t4.replacement === ``) {
      e4.warn({ message: `search_replace action requires a non-empty replacement environment variable name, skipping` });
      return;
    }
    st2(r3, { ...t4, files: i5 }, e4.info, e4.warn);
    return;
  }
  if (t4.action === `remove`) {
    j(r3, false);
    let i5 = ut2(t4.files);
    if (i5 === void 0) {
      e4.warn({ message: `remove action requires a string or array of strings for files, skipping` });
      return;
    }
    t4.allowGlobs !== void 0 && typeof t4.allowGlobs != `boolean` && e4.warn({ message: `remove action allowGlobs must be a boolean, ignoring` }), nt2(r3, { ...t4, files: i5, allowGlobs: typeof t4.allowGlobs == `boolean` ? t4.allowGlobs : void 0 }, e4.info, e4.warn);
    return;
  }
  e4.warn({ message: `unknown directive action ${S3(a4)}, skipping` });
}
function ft2(e4, t4, n4 = true) {
  if (!e4) return { ok: true };
  try {
    return L(e4, t4, n4), { ok: true };
  } catch (e5) {
    return { ok: false, message: e5 instanceof Error ? e5.message : String(e5), original: e5 };
  }
}
async function pt2(e4, t4, n4, r3) {
  try {
    for (let i4 of t4) await dt2(e4, i4, n4, r3);
  } catch (t5) {
    if (e4.hasStashed && !(t5 instanceof k && t5.code === `COULD_NOT_RESTORE`)) {
      let t6 = ft2(e4.stagingDir, n4, false);
      t6.ok === true ? e4.hasStashed = false : e4.warn({ message: `could not restore stashed files: ${t6.message}`, original: t6.original });
    }
    throw t5;
  }
}
var mt2 = Object.defineProperty;
var ht2 = (e4, t4) => {
  for (var n4 in t4) mt2(e4, n4, { get: t4[n4], enumerable: true });
};
var gt2 = typeof process == `object` && process ? process : { stdout: null, stderr: null };
var _t2 = (e4) => !!e4 && typeof e4 == `object` && (e4 instanceof Yt || e4 instanceof ve2 || vt2(e4) || yt2(e4));
var vt2 = (e4) => !!e4 && typeof e4 == `object` && e4 instanceof se2 && typeof e4.pipe == `function` && e4.pipe !== ve2.Writable.prototype.pipe;
var yt2 = (e4) => !!e4 && typeof e4 == `object` && e4 instanceof se2 && typeof e4.write == `function` && typeof e4.end == `function`;
var C4 = /* @__PURE__ */ Symbol(`EOF`);
var w3 = /* @__PURE__ */ Symbol(`maybeEmitEnd`);
var bt2 = /* @__PURE__ */ Symbol(`emittedEnd`);
var xt2 = /* @__PURE__ */ Symbol(`emittingEnd`);
var St2 = /* @__PURE__ */ Symbol(`emittedError`);
var Ct2 = /* @__PURE__ */ Symbol(`closed`);
var wt2 = /* @__PURE__ */ Symbol(`read`);
var Tt2 = /* @__PURE__ */ Symbol(`flush`);
var Et2 = /* @__PURE__ */ Symbol(`flushChunk`);
var T3 = /* @__PURE__ */ Symbol(`encoding`);
var Dt2 = /* @__PURE__ */ Symbol(`decoder`);
var E3 = /* @__PURE__ */ Symbol(`flowing`);
var Ot2 = /* @__PURE__ */ Symbol(`paused`);
var kt2 = /* @__PURE__ */ Symbol(`resume`);
var D3 = /* @__PURE__ */ Symbol(`buffer`);
var O3 = /* @__PURE__ */ Symbol(`pipes`);
var k3 = /* @__PURE__ */ Symbol(`bufferLength`);
var At2 = /* @__PURE__ */ Symbol(`bufferPush`);
var jt2 = /* @__PURE__ */ Symbol(`bufferShift`);
var A3 = /* @__PURE__ */ Symbol(`objectMode`);
var j3 = /* @__PURE__ */ Symbol(`destroyed`);
var Mt2 = /* @__PURE__ */ Symbol(`error`);
var Nt2 = /* @__PURE__ */ Symbol(`emitData`);
var Pt2 = /* @__PURE__ */ Symbol(`emitEnd`);
var Ft2 = /* @__PURE__ */ Symbol(`emitEnd2`);
var M3 = /* @__PURE__ */ Symbol(`async`);
var It2 = /* @__PURE__ */ Symbol(`abort`);
var Lt2 = /* @__PURE__ */ Symbol(`aborted`);
var Rt2 = /* @__PURE__ */ Symbol(`signal`);
var zt2 = /* @__PURE__ */ Symbol(`dataListeners`);
var N3 = /* @__PURE__ */ Symbol(`discarded`);
var Bt2 = (e4) => Promise.resolve().then(e4);
var Vt2 = (e4) => e4();
var Ht2 = (e4) => e4 === `end` || e4 === `finish` || e4 === `prefinish`;
var Ut2 = (e4) => e4 instanceof ArrayBuffer || !!e4 && typeof e4 == `object` && e4.constructor && e4.constructor.name === `ArrayBuffer` && e4.byteLength >= 0;
var Wt2 = (e4) => !Buffer.isBuffer(e4) && ArrayBuffer.isView(e4);
var Gt2 = class {
  src;
  dest;
  opts;
  ondrain;
  constructor(e4, t4, n4) {
    this.src = e4, this.dest = t4, this.opts = n4, this.ondrain = () => e4[kt2](), this.dest.on(`drain`, this.ondrain);
  }
  unpipe() {
    this.dest.removeListener(`drain`, this.ondrain);
  }
  proxyErrors(e4) {
  }
  end() {
    this.unpipe(), this.opts.end && this.dest.end();
  }
};
var Kt2 = class extends Gt2 {
  unpipe() {
    this.src.removeListener(`error`, this.proxyErrors), super.unpipe();
  }
  constructor(e4, t4, n4) {
    super(e4, t4, n4), this.proxyErrors = (e5) => this.dest.emit(`error`, e5), e4.on(`error`, this.proxyErrors);
  }
};
var qt = (e4) => !!e4.objectMode;
var Jt = (e4) => !e4.objectMode && !!e4.encoding && e4.encoding !== `buffer`;
var Yt = class extends se2 {
  [E3] = false;
  [Ot2] = false;
  [O3] = [];
  [D3] = [];
  [A3];
  [T3];
  [M3];
  [Dt2];
  [C4] = false;
  [bt2] = false;
  [xt2] = false;
  [Ct2] = false;
  [St2] = null;
  [k3] = 0;
  [j3] = false;
  [Rt2];
  [Lt2] = false;
  [zt2] = 0;
  [N3] = false;
  writable = true;
  readable = true;
  constructor(...e4) {
    let t4 = e4[0] || {};
    if (super(), t4.objectMode && typeof t4.encoding == `string`) throw TypeError(`Encoding and objectMode may not be used together`);
    qt(t4) ? (this[A3] = true, this[T3] = null) : Jt(t4) ? (this[T3] = t4.encoding, this[A3] = false) : (this[A3] = false, this[T3] = null), this[M3] = !!t4.async, this[Dt2] = this[T3] ? new ye2(this[T3]) : null, t4 && t4.debugExposeBuffer === true && Object.defineProperty(this, `buffer`, { get: () => this[D3] }), t4 && t4.debugExposePipes === true && Object.defineProperty(this, `pipes`, { get: () => this[O3] });
    let { signal: n4 } = t4;
    n4 && (this[Rt2] = n4, n4.aborted ? this[It2]() : n4.addEventListener(`abort`, () => this[It2]()));
  }
  get bufferLength() {
    return this[k3];
  }
  get encoding() {
    return this[T3];
  }
  set encoding(e4) {
    throw Error(`Encoding must be set at instantiation time`);
  }
  setEncoding(e4) {
    throw Error(`Encoding must be set at instantiation time`);
  }
  get objectMode() {
    return this[A3];
  }
  set objectMode(e4) {
    throw Error(`objectMode must be set at instantiation time`);
  }
  get async() {
    return this[M3];
  }
  set async(e4) {
    this[M3] = this[M3] || !!e4;
  }
  [It2]() {
    var _a4, _b3;
    this[Lt2] = true, this.emit(`abort`, (_a4 = this[Rt2]) == null ? void 0 : _a4.reason), this.destroy((_b3 = this[Rt2]) == null ? void 0 : _b3.reason);
  }
  get aborted() {
    return this[Lt2];
  }
  set aborted(e4) {
  }
  write(e4, t4, n4) {
    var _a4;
    if (this[Lt2]) return false;
    if (this[C4]) throw Error(`write after end`);
    if (this[j3]) return this.emit(`error`, Object.assign(Error(`Cannot call write after a stream was destroyed`), { code: `ERR_STREAM_DESTROYED` })), true;
    typeof t4 == `function` && (n4 = t4, t4 = `utf8`), t4 ||= `utf8`;
    let r3 = this[M3] ? Bt2 : Vt2;
    if (!this[A3] && !Buffer.isBuffer(e4)) {
      if (Wt2(e4)) e4 = Buffer.from(e4.buffer, e4.byteOffset, e4.byteLength);
      else if (Ut2(e4)) e4 = Buffer.from(e4);
      else if (typeof e4 != `string`) throw Error(`Non-contiguous data written to non-objectMode stream`);
    }
    return this[A3] ? (this[E3] && this[k3] !== 0 && this[Tt2](true), this[E3] ? this.emit(`data`, e4) : this[At2](e4), this[k3] !== 0 && this.emit(`readable`), n4 && r3(n4), this[E3]) : e4.length ? (typeof e4 == `string` && !(t4 === this[T3] && !((_a4 = this[Dt2]) == null ? void 0 : _a4.lastNeed)) && (e4 = Buffer.from(e4, t4)), Buffer.isBuffer(e4) && this[T3] && (e4 = this[Dt2].write(e4)), this[E3] && this[k3] !== 0 && this[Tt2](true), this[E3] ? this.emit(`data`, e4) : this[At2](e4), this[k3] !== 0 && this.emit(`readable`), n4 && r3(n4), this[E3]) : (this[k3] !== 0 && this.emit(`readable`), n4 && r3(n4), this[E3]);
  }
  read(e4) {
    if (this[j3]) return null;
    if (this[N3] = false, this[k3] === 0 || e4 === 0 || e4 && e4 > this[k3]) return this[w3](), null;
    this[A3] && (e4 = null), this[D3].length > 1 && !this[A3] && (this[D3] = [this[T3] ? this[D3].join(``) : Buffer.concat(this[D3], this[k3])]);
    let t4 = this[wt2](e4 || null, this[D3][0]);
    return this[w3](), t4;
  }
  [wt2](e4, t4) {
    if (this[A3]) this[jt2]();
    else {
      let n4 = t4;
      e4 === n4.length || e4 === null ? this[jt2]() : typeof n4 == `string` ? (this[D3][0] = n4.slice(e4), t4 = n4.slice(0, e4), this[k3] -= e4) : (this[D3][0] = n4.subarray(e4), t4 = n4.subarray(0, e4), this[k3] -= e4);
    }
    return this.emit(`data`, t4), !this[D3].length && !this[C4] && this.emit(`drain`), t4;
  }
  end(e4, t4, n4) {
    return typeof e4 == `function` && (n4 = e4, e4 = void 0), typeof t4 == `function` && (n4 = t4, t4 = `utf8`), e4 !== void 0 && this.write(e4, t4), n4 && this.once(`end`, n4), this[C4] = true, this.writable = false, (this[E3] || !this[Ot2]) && this[w3](), this;
  }
  [kt2]() {
    this[j3] || (!this[zt2] && !this[O3].length && (this[N3] = true), this[Ot2] = false, this[E3] = true, this.emit(`resume`), this[D3].length ? this[Tt2]() : this[C4] ? this[w3]() : this.emit(`drain`));
  }
  resume() {
    return this[kt2]();
  }
  pause() {
    this[E3] = false, this[Ot2] = true, this[N3] = false;
  }
  get destroyed() {
    return this[j3];
  }
  get flowing() {
    return this[E3];
  }
  get paused() {
    return this[Ot2];
  }
  [At2](e4) {
    this[A3] ? this[k3] += 1 : this[k3] += e4.length, this[D3].push(e4);
  }
  [jt2]() {
    return this[A3] ? --this[k3] : this[k3] -= this[D3][0].length, this[D3].shift();
  }
  [Tt2](e4 = false) {
    do
      ;
    while (this[Et2](this[jt2]()) && this[D3].length);
    !e4 && !this[D3].length && !this[C4] && this.emit(`drain`);
  }
  [Et2](e4) {
    return this.emit(`data`, e4), this[E3];
  }
  pipe(e4, t4) {
    if (this[j3]) return e4;
    this[N3] = false;
    let n4 = this[bt2];
    return t4 ||= {}, e4 === gt2.stdout || e4 === gt2.stderr ? t4.end = false : t4.end = t4.end !== false, t4.proxyErrors = !!t4.proxyErrors, n4 ? t4.end && e4.end() : (this[O3].push(t4.proxyErrors ? new Kt2(this, e4, t4) : new Gt2(this, e4, t4)), this[M3] ? Bt2(() => this[kt2]()) : this[kt2]()), e4;
  }
  unpipe(e4) {
    let t4 = this[O3].find((t5) => t5.dest === e4);
    t4 && (this[O3].length === 1 ? (this[E3] && this[zt2] === 0 && (this[E3] = false), this[O3] = []) : this[O3].splice(this[O3].indexOf(t4), 1), t4.unpipe());
  }
  addListener(e4, t4) {
    return this.on(e4, t4);
  }
  on(e4, t4) {
    let n4 = super.on(e4, t4);
    if (e4 === `data`) this[N3] = false, this[zt2]++, !this[O3].length && !this[E3] && this[kt2]();
    else if (e4 === `readable` && this[k3] !== 0) super.emit(`readable`);
    else if (Ht2(e4) && this[bt2]) super.emit(e4), this.removeAllListeners(e4);
    else if (e4 === `error` && this[St2]) {
      let e5 = t4;
      this[M3] ? Bt2(() => e5.call(this, this[St2])) : e5.call(this, this[St2]);
    }
    return n4;
  }
  removeListener(e4, t4) {
    return this.off(e4, t4);
  }
  off(e4, t4) {
    let n4 = super.off(e4, t4);
    return e4 === `data` && (this[zt2] = this.listeners(`data`).length, this[zt2] === 0 && !this[N3] && !this[O3].length && (this[E3] = false)), n4;
  }
  removeAllListeners(e4) {
    let t4 = super.removeAllListeners(e4);
    return (e4 === `data` || e4 === void 0) && (this[zt2] = 0, !this[N3] && !this[O3].length && (this[E3] = false)), t4;
  }
  get emittedEnd() {
    return this[bt2];
  }
  [w3]() {
    !this[xt2] && !this[bt2] && !this[j3] && this[D3].length === 0 && this[C4] && (this[xt2] = true, this.emit(`end`), this.emit(`prefinish`), this.emit(`finish`), this[Ct2] && this.emit(`close`), this[xt2] = false);
  }
  emit(e4, ...t4) {
    let n4 = t4[0];
    if (e4 !== `error` && e4 !== `close` && e4 !== j3 && this[j3]) return false;
    if (e4 === `data`) return !this[A3] && !n4 ? false : this[M3] ? (Bt2(() => this[Nt2](n4)), true) : this[Nt2](n4);
    if (e4 === `end`) return this[Pt2]();
    if (e4 === `close`) {
      if (this[Ct2] = true, !this[bt2] && !this[j3]) return false;
      let e5 = super.emit(`close`);
      return this.removeAllListeners(`close`), e5;
    } else if (e4 === `error`) {
      this[St2] = n4, super.emit(Mt2, n4);
      let e5 = !this[Rt2] || this.listeners(`error`).length ? super.emit(`error`, n4) : false;
      return this[w3](), e5;
    } else if (e4 === `resume`) {
      let e5 = super.emit(`resume`);
      return this[w3](), e5;
    } else if (e4 === `finish` || e4 === `prefinish`) {
      let t5 = super.emit(e4);
      return this.removeAllListeners(e4), t5;
    }
    let r3 = super.emit(e4, ...t4);
    return this[w3](), r3;
  }
  [Nt2](e4) {
    for (let t5 of this[O3]) t5.dest.write(e4) === false && this.pause();
    let t4 = this[N3] ? false : super.emit(`data`, e4);
    return this[w3](), t4;
  }
  [Pt2]() {
    return this[bt2] ? false : (this[bt2] = true, this.readable = false, this[M3] ? (Bt2(() => this[Ft2]()), true) : this[Ft2]());
  }
  [Ft2]() {
    if (this[Dt2]) {
      let e5 = this[Dt2].end();
      if (e5) {
        for (let t4 of this[O3]) t4.dest.write(e5);
        this[N3] || super.emit(`data`, e5);
      }
    }
    for (let e5 of this[O3]) e5.end();
    let e4 = super.emit(`end`);
    return this.removeAllListeners(`end`), e4;
  }
  async collect() {
    let e4 = Object.assign([], { dataLength: 0 });
    this[A3] || (e4.dataLength = 0);
    let t4 = this.promise();
    return this.on(`data`, (t5) => {
      e4.push(t5), this[A3] || (e4.dataLength += t5.length);
    }), await t4, e4;
  }
  async concat() {
    if (this[A3]) throw Error(`cannot concat in objectMode`);
    let e4 = await this.collect();
    return this[T3] ? e4.join(``) : Buffer.concat(e4, e4.dataLength);
  }
  async promise() {
    return new Promise((e4, t4) => {
      this.on(j3, () => t4(Error(`stream destroyed`))), this.on(`error`, (e5) => t4(e5)), this.on(`end`, () => e4());
    });
  }
  [Symbol.asyncIterator]() {
    this[N3] = false;
    let e4 = false, t4 = async () => (this.pause(), e4 = true, { value: void 0, done: true });
    return { next: () => {
      if (e4) return t4();
      let n4 = this.read();
      if (n4 !== null) return Promise.resolve({ done: false, value: n4 });
      if (this[C4]) return t4();
      let r3, i4, a4 = (e5) => {
        this.off(`data`, o3), this.off(`end`, s3), this.off(j3, c4), t4(), i4(e5);
      }, o3 = (e5) => {
        this.off(`error`, a4), this.off(`end`, s3), this.off(j3, c4), this.pause(), r3({ value: e5, done: !!this[C4] });
      }, s3 = () => {
        this.off(`error`, a4), this.off(`data`, o3), this.off(j3, c4), t4(), r3({ done: true, value: void 0 });
      }, c4 = () => a4(Error(`stream destroyed`));
      return new Promise((e5, t5) => {
        i4 = t5, r3 = e5, this.once(j3, c4), this.once(`error`, a4), this.once(`end`, s3), this.once(`data`, o3);
      });
    }, throw: t4, return: t4, [Symbol.asyncIterator]() {
      return this;
    }, [Symbol.asyncDispose]: async () => {
    } };
  }
  [Symbol.iterator]() {
    this[N3] = false;
    let e4 = false, t4 = () => (this.pause(), this.off(Mt2, t4), this.off(j3, t4), this.off(`end`, t4), e4 = true, { done: true, value: void 0 });
    return this.once(`end`, t4), this.once(Mt2, t4), this.once(j3, t4), { next: () => {
      if (e4) return t4();
      let n4 = this.read();
      return n4 === null ? t4() : { done: false, value: n4 };
    }, throw: t4, return: t4, [Symbol.iterator]() {
      return this;
    }, [Symbol.dispose]: () => {
    } };
  }
  destroy(e4) {
    if (this[j3]) return e4 ? this.emit(`error`, e4) : this.emit(j3), this;
    this[j3] = true, this[N3] = true, this[D3].length = 0, this[k3] = 0;
    let t4 = this;
    return typeof t4.close == `function` && !this[Ct2] && t4.close(), e4 ? this.emit(`error`, e4) : this.emit(j3), this;
  }
  static get isStream() {
    return _t2;
  }
};
var Xt = v3.writev;
var Zt = /* @__PURE__ */ Symbol(`_autoClose`);
var P3 = /* @__PURE__ */ Symbol(`_close`);
var Qt = /* @__PURE__ */ Symbol(`_ended`);
var F3 = /* @__PURE__ */ Symbol(`_fd`);
var $t = /* @__PURE__ */ Symbol(`_finished`);
var I4 = /* @__PURE__ */ Symbol(`_flags`);
var en = /* @__PURE__ */ Symbol(`_flush`);
var tn = /* @__PURE__ */ Symbol(`_handleChunk`);
var nn = /* @__PURE__ */ Symbol(`_makeBuf`);
var rn = /* @__PURE__ */ Symbol(`_mode`);
var an = /* @__PURE__ */ Symbol(`_needDrain`);
var on = /* @__PURE__ */ Symbol(`_onerror`);
var sn = /* @__PURE__ */ Symbol(`_onopen`);
var cn = /* @__PURE__ */ Symbol(`_onread`);
var ln = /* @__PURE__ */ Symbol(`_onwrite`);
var un = /* @__PURE__ */ Symbol(`_open`);
var L3 = /* @__PURE__ */ Symbol(`_path`);
var dn = /* @__PURE__ */ Symbol(`_pos`);
var R4 = /* @__PURE__ */ Symbol(`_queue`);
var fn = /* @__PURE__ */ Symbol(`_read`);
var pn = /* @__PURE__ */ Symbol(`_readSize`);
var z3 = /* @__PURE__ */ Symbol(`_reading`);
var mn = /* @__PURE__ */ Symbol(`_remain`);
var hn = /* @__PURE__ */ Symbol(`_size`);
var gn = /* @__PURE__ */ Symbol(`_write`);
var _n = /* @__PURE__ */ Symbol(`_writing`);
var vn = /* @__PURE__ */ Symbol(`_defaultFlag`);
var yn = /* @__PURE__ */ Symbol(`_errored`);
var bn = class extends Yt {
  [yn] = false;
  [F3];
  [L3];
  [pn];
  [z3] = false;
  [hn];
  [mn];
  [Zt];
  constructor(e4, t4) {
    if (t4 ||= {}, super(t4), this.readable = true, this.writable = false, typeof e4 != `string`) throw TypeError(`path must be a string`);
    this[yn] = false, this[F3] = typeof t4.fd == `number` ? t4.fd : void 0, this[L3] = e4, this[pn] = t4.readSize || 16 * 1024 * 1024, this[z3] = false, this[hn] = typeof t4.size == `number` ? t4.size : 1 / 0, this[mn] = this[hn], this[Zt] = typeof t4.autoClose == `boolean` ? t4.autoClose : true, typeof this[F3] == `number` ? this[fn]() : this[un]();
  }
  get fd() {
    return this[F3];
  }
  get path() {
    return this[L3];
  }
  write() {
    throw TypeError(`this is a readable stream`);
  }
  end() {
    throw TypeError(`this is a readable stream`);
  }
  [un]() {
    v3.open(this[L3], `r`, (e4, t4) => this[sn](e4, t4));
  }
  [sn](e4, t4) {
    e4 ? this[on](e4) : (this[F3] = t4, this.emit(`open`, t4), this[fn]());
  }
  [nn]() {
    return Buffer.allocUnsafe(Math.min(this[pn], this[mn]));
  }
  [fn]() {
    if (!this[z3]) {
      this[z3] = true;
      let e4 = this[nn]();
      if (e4.length === 0) return process.nextTick(() => this[cn](null, 0, e4));
      v3.read(this[F3], e4, 0, e4.length, null, (e5, t4, n4) => this[cn](e5, t4, n4));
    }
  }
  [cn](e4, t4, n4) {
    this[z3] = false, e4 ? this[on](e4) : this[tn](t4, n4) && this[fn]();
  }
  [P3]() {
    if (this[Zt] && typeof this[F3] == `number`) {
      let e4 = this[F3];
      this[F3] = void 0, v3.close(e4, (e5) => e5 ? this.emit(`error`, e5) : this.emit(`close`));
    }
  }
  [on](e4) {
    this[z3] = true, this[P3](), this.emit(`error`, e4);
  }
  [tn](e4, t4) {
    let n4 = false;
    return this[mn] -= e4, e4 > 0 && (n4 = super.write(e4 < t4.length ? t4.subarray(0, e4) : t4)), (e4 === 0 || this[mn] <= 0) && (n4 = false, this[P3](), super.end()), n4;
  }
  emit(e4, ...t4) {
    switch (e4) {
      case `prefinish`:
      case `finish`:
        return false;
      case `drain`:
        return typeof this[F3] == `number` && this[fn](), false;
      case `error`:
        return this[yn] ? false : (this[yn] = true, super.emit(e4, ...t4));
      default:
        return super.emit(e4, ...t4);
    }
  }
};
var xn = class extends bn {
  [un]() {
    let e4 = true;
    try {
      this[sn](null, v3.openSync(this[L3], `r`)), e4 = false;
    } finally {
      e4 && this[P3]();
    }
  }
  [fn]() {
    let e4 = true;
    try {
      if (!this[z3]) {
        this[z3] = true;
        do {
          let e5 = this[nn](), t4 = e5.length === 0 ? 0 : v3.readSync(this[F3], e5, 0, e5.length, null);
          if (!this[tn](t4, e5)) break;
        } while (true);
        this[z3] = false;
      }
      e4 = false;
    } finally {
      e4 && this[P3]();
    }
  }
  [P3]() {
    if (this[Zt] && typeof this[F3] == `number`) {
      let e4 = this[F3];
      this[F3] = void 0, v3.closeSync(e4), this.emit(`close`);
    }
  }
};
var Sn = class extends _3 {
  readable = false;
  writable = true;
  [yn] = false;
  [_n] = false;
  [Qt] = false;
  [R4] = [];
  [an] = false;
  [L3];
  [rn];
  [Zt];
  [F3];
  [vn];
  [I4];
  [$t] = false;
  [dn];
  constructor(e4, t4) {
    t4 ||= {}, super(t4), this[L3] = e4, this[F3] = typeof t4.fd == `number` ? t4.fd : void 0, this[rn] = t4.mode === void 0 ? 438 : t4.mode, this[dn] = typeof t4.start == `number` ? t4.start : void 0, this[Zt] = typeof t4.autoClose == `boolean` ? t4.autoClose : true;
    let n4 = this[dn] === void 0 ? `w` : `r+`;
    this[vn] = t4.flags === void 0, this[I4] = t4.flags === void 0 ? n4 : t4.flags, this[F3] === void 0 && this[un]();
  }
  emit(e4, ...t4) {
    if (e4 === `error`) {
      if (this[yn]) return false;
      this[yn] = true;
    }
    return super.emit(e4, ...t4);
  }
  get fd() {
    return this[F3];
  }
  get path() {
    return this[L3];
  }
  [on](e4) {
    this[P3](), this[_n] = true, this.emit(`error`, e4);
  }
  [un]() {
    v3.open(this[L3], this[I4], this[rn], (e4, t4) => this[sn](e4, t4));
  }
  [sn](e4, t4) {
    this[vn] && this[I4] === `r+` && e4 && e4.code === `ENOENT` ? (this[I4] = `w`, this[un]()) : e4 ? this[on](e4) : (this[F3] = t4, this.emit(`open`, t4), this[_n] || this[en]());
  }
  end(e4, t4) {
    return e4 && this.write(e4, t4), this[Qt] = true, !this[_n] && !this[R4].length && typeof this[F3] == `number` && this[ln](null, 0), this;
  }
  write(e4, t4) {
    return typeof e4 == `string` && (e4 = Buffer.from(e4, t4)), this[Qt] ? (this.emit(`error`, Error(`write() after end()`)), false) : this[F3] === void 0 || this[_n] || this[R4].length ? (this[R4].push(e4), this[an] = true, false) : (this[_n] = true, this[gn](e4), true);
  }
  [gn](e4) {
    v3.write(this[F3], e4, 0, e4.length, this[dn], (e5, t4) => this[ln](e5, t4));
  }
  [ln](e4, t4) {
    e4 ? this[on](e4) : (this[dn] !== void 0 && typeof t4 == `number` && (this[dn] += t4), this[R4].length ? this[en]() : (this[_n] = false, this[Qt] && !this[$t] ? (this[$t] = true, this[P3](), this.emit(`finish`)) : this[an] && (this[an] = false, this.emit(`drain`))));
  }
  [en]() {
    if (this[R4].length === 0) this[Qt] && this[ln](null, 0);
    else if (this[R4].length === 1) this[gn](this[R4].pop());
    else {
      let e4 = this[R4];
      this[R4] = [], Xt(this[F3], e4, this[dn], (e5, t4) => this[ln](e5, t4));
    }
  }
  [P3]() {
    if (this[Zt] && typeof this[F3] == `number`) {
      let e4 = this[F3];
      this[F3] = void 0, v3.close(e4, (e5) => e5 ? this.emit(`error`, e5) : this.emit(`close`));
    }
  }
};
var Cn = class extends Sn {
  [un]() {
    let e4;
    if (this[vn] && this[I4] === `r+`) try {
      e4 = v3.openSync(this[L3], this[I4], this[rn]);
    } catch (e5) {
      if ((e5 == null ? void 0 : e5.code) === `ENOENT`) return this[I4] = `w`, this[un]();
      throw e5;
    }
    else e4 = v3.openSync(this[L3], this[I4], this[rn]);
    this[sn](null, e4);
  }
  [P3]() {
    if (this[Zt] && typeof this[F3] == `number`) {
      let e4 = this[F3];
      this[F3] = void 0, v3.closeSync(e4), this.emit(`close`);
    }
  }
  [gn](e4) {
    let t4 = true;
    try {
      this[ln](null, v3.writeSync(this[F3], e4, 0, e4.length, this[dn])), t4 = false;
    } finally {
      if (t4) try {
        this[P3]();
      } catch {
      }
    }
  }
};
var wn = /* @__PURE__ */ new Map([[`C`, `cwd`], [`f`, `file`], [`z`, `gzip`], [`P`, `preservePaths`], [`U`, `unlink`], [`strip-components`, `strip`], [`stripComponents`, `strip`], [`keep-newer`, `newer`], [`keepNewer`, `newer`], [`keep-newer-files`, `newer`], [`keepNewerFiles`, `newer`], [`k`, `keep`], [`keep-existing`, `keep`], [`keepExisting`, `keep`], [`m`, `noMtime`], [`no-mtime`, `noMtime`], [`p`, `preserveOwner`], [`L`, `follow`], [`h`, `follow`], [`onentry`, `onReadEntry`]]);
var Tn = (e4) => !!e4.sync && !!e4.file;
var En = (e4) => !e4.sync && !!e4.file;
var Dn = (e4) => !!e4.sync && !e4.file;
var On = (e4) => !e4.sync && !e4.file;
var kn = (e4) => !!e4.file;
var An = (e4) => wn.get(e4) || e4;
var jn = (e4 = {}) => {
  if (!e4) return {};
  let t4 = {};
  for (let [n4, r3] of Object.entries(e4)) {
    let e5 = An(n4);
    t4[e5] = r3;
  }
  return t4.chmod === void 0 && t4.noChmod === false && (t4.chmod = true), delete t4.noChmod, t4;
};
var Mn = (e4, t4, n4, r3, i4) => Object.assign((a4 = [], o3, s3) => {
  Array.isArray(a4) && (o3 = a4, a4 = {}), typeof o3 == `function` && (s3 = o3, o3 = void 0), o3 = o3 ? Array.from(o3) : [];
  let c4 = jn(a4);
  if (i4 == null ? void 0 : i4(c4, o3), Tn(c4)) {
    if (typeof s3 == `function`) throw TypeError(`callback not supported for sync tar functions`);
    return e4(c4, o3);
  } else if (En(c4)) {
    let e5 = t4(c4, o3);
    return s3 ? e5.then(() => s3(), s3) : e5;
  } else if (Dn(c4)) {
    if (typeof s3 == `function`) throw TypeError(`callback not supported for sync tar functions`);
    return n4(c4, o3);
  } else if (On(c4)) {
    if (typeof s3 == `function`) throw TypeError(`callback only supported with file option`);
    return r3(c4, o3);
  }
  throw Error(`impossible options??`);
}, { syncFile: e4, asyncFile: t4, syncNoFile: n4, asyncNoFile: r3, validate: i4 });
var Nn = Se2.constants || { ZLIB_VERNUM: 4736 };
var B3 = Object.freeze(Object.assign(/* @__PURE__ */ Object.create(null), { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_MEM_ERROR: -4, Z_BUF_ERROR: -5, Z_VERSION_ERROR: -6, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, DEFLATE: 1, INFLATE: 2, GZIP: 3, GUNZIP: 4, DEFLATERAW: 5, INFLATERAW: 6, UNZIP: 7, BROTLI_DECODE: 8, BROTLI_ENCODE: 9, Z_MIN_WINDOWBITS: 8, Z_MAX_WINDOWBITS: 15, Z_DEFAULT_WINDOWBITS: 15, Z_MIN_CHUNK: 64, Z_MAX_CHUNK: 1 / 0, Z_DEFAULT_CHUNK: 16384, Z_MIN_MEMLEVEL: 1, Z_MAX_MEMLEVEL: 9, Z_DEFAULT_MEMLEVEL: 8, Z_MIN_LEVEL: -1, Z_MAX_LEVEL: 9, Z_DEFAULT_LEVEL: -1, BROTLI_OPERATION_PROCESS: 0, BROTLI_OPERATION_FLUSH: 1, BROTLI_OPERATION_FINISH: 2, BROTLI_OPERATION_EMIT_METADATA: 3, BROTLI_MODE_GENERIC: 0, BROTLI_MODE_TEXT: 1, BROTLI_MODE_FONT: 2, BROTLI_DEFAULT_MODE: 0, BROTLI_MIN_QUALITY: 0, BROTLI_MAX_QUALITY: 11, BROTLI_DEFAULT_QUALITY: 11, BROTLI_MIN_WINDOW_BITS: 10, BROTLI_MAX_WINDOW_BITS: 24, BROTLI_LARGE_MAX_WINDOW_BITS: 30, BROTLI_DEFAULT_WINDOW: 22, BROTLI_MIN_INPUT_BLOCK_BITS: 16, BROTLI_MAX_INPUT_BLOCK_BITS: 24, BROTLI_PARAM_MODE: 0, BROTLI_PARAM_QUALITY: 1, BROTLI_PARAM_LGWIN: 2, BROTLI_PARAM_LGBLOCK: 3, BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4, BROTLI_PARAM_SIZE_HINT: 5, BROTLI_PARAM_LARGE_WINDOW: 6, BROTLI_PARAM_NPOSTFIX: 7, BROTLI_PARAM_NDIRECT: 8, BROTLI_DECODER_RESULT_ERROR: 0, BROTLI_DECODER_RESULT_SUCCESS: 1, BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2, BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3, BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0, BROTLI_DECODER_PARAM_LARGE_WINDOW: 1, BROTLI_DECODER_NO_ERROR: 0, BROTLI_DECODER_SUCCESS: 1, BROTLI_DECODER_NEEDS_MORE_INPUT: 2, BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3, BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1, BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2, BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3, BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4, BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5, BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6, BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7, BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8, BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9, BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10, BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11, BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12, BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13, BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14, BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15, BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16, BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19, BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20, BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21, BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22, BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25, BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26, BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27, BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30, BROTLI_DECODER_ERROR_UNREACHABLE: -31 }, Nn));
var Pn = be2.concat;
var Fn = Object.getOwnPropertyDescriptor(be2, `concat`);
var In = (e4) => e4;
var Ln = (Fn == null ? void 0 : Fn.writable) === true || (Fn == null ? void 0 : Fn.set) !== void 0 ? (e4) => {
  be2.concat = e4 ? In : Pn;
} : (e4) => {
};
var Rn = /* @__PURE__ */ Symbol(`_superWrite`);
var zn = class extends Error {
  code;
  errno;
  constructor(e4, t4) {
    super(`zlib: ` + e4.message, { cause: e4 }), this.code = e4.code, this.errno = e4.errno, this.code ||= `ZLIB_ERROR`, this.message = `zlib: ` + e4.message, Error.captureStackTrace(this, t4 ?? this.constructor);
  }
  get name() {
    return `ZlibError`;
  }
};
var Bn = /* @__PURE__ */ Symbol(`flushFlag`);
var Vn = class extends Yt {
  #e = false;
  #t = false;
  #n;
  #r;
  #i;
  #a;
  #o;
  get sawError() {
    return this.#e;
  }
  get handle() {
    return this.#a;
  }
  get flushFlag() {
    return this.#n;
  }
  constructor(e4, t4) {
    var _a4;
    if (!e4 || typeof e4 != `object`) throw TypeError(`invalid options for ZlibBase constructor`);
    if (super(e4), this.#n = e4.flush ?? 0, this.#r = e4.finishFlush ?? 0, this.#i = e4.fullFlushFlag ?? 0, typeof xe2[t4] != `function`) throw TypeError(`Compression method not supported: ` + t4);
    try {
      this.#a = new xe2[t4](e4);
    } catch (e5) {
      throw new zn(e5, this.constructor);
    }
    this.#o = (e5) => {
      this.#e || (this.#e = true, this.close(), this.emit(`error`, e5));
    }, (_a4 = this.#a) == null ? void 0 : _a4.on(`error`, (e5) => this.#o(new zn(e5))), this.once(`end`, () => this.close);
  }
  close() {
    this.#a && (this.#a.close(), this.#a = void 0, this.emit(`close`));
  }
  reset() {
    var _a4, _b3;
    if (!this.#e) return g3(this.#a, `zlib binding closed`), (_b3 = (_a4 = this.#a).reset) == null ? void 0 : _b3.call(_a4);
  }
  flush(e4) {
    this.ended || (typeof e4 != `number` && (e4 = this.#i), this.write(Object.assign(be2.alloc(0), { [Bn]: e4 })));
  }
  end(e4, t4, n4) {
    return typeof e4 == `function` && (n4 = e4, t4 = void 0, e4 = void 0), typeof t4 == `function` && (n4 = t4, t4 = void 0), e4 && (t4 ? this.write(e4, t4) : this.write(e4)), this.flush(this.#r), this.#t = true, super.end(n4);
  }
  get ended() {
    return this.#t;
  }
  [Rn](e4) {
    return super.write(e4);
  }
  write(e4, t4, n4) {
    if (typeof t4 == `function` && (n4 = t4, t4 = `utf8`), typeof e4 == `string` && (e4 = be2.from(e4, t4)), this.#e) return;
    g3(this.#a, `zlib binding closed`);
    let r3 = this.#a._handle, i4 = r3.close;
    r3.close = () => {
    };
    let a4 = this.#a.close;
    this.#a.close = () => {
    }, Ln(true);
    let o3;
    try {
      let t5 = typeof e4[Bn] == `number` ? e4[Bn] : this.#n;
      o3 = this.#a._processChunk(e4, t5), Ln(false);
    } catch (e5) {
      Ln(false), this.#o(new zn(e5, this.write));
    } finally {
      this.#a && (this.#a._handle = r3, r3.close = i4, this.#a.close = a4, this.#a.removeAllListeners(`error`));
    }
    this.#a && this.#a.on(`error`, (e5) => this.#o(new zn(e5, this.write)));
    let s3;
    if (o3) if (Array.isArray(o3) && o3.length > 0) {
      let e5 = o3[0];
      s3 = this[Rn](be2.from(e5));
      for (let e6 = 1; e6 < o3.length; e6++) s3 = this[Rn](o3[e6]);
    } else s3 = this[Rn](be2.from(o3));
    return n4 && n4(), s3;
  }
};
var Hn = class extends Vn {
  #e;
  #t;
  constructor(e4, t4) {
    e4 ||= {}, e4.flush = e4.flush || B3.Z_NO_FLUSH, e4.finishFlush = e4.finishFlush || B3.Z_FINISH, e4.fullFlushFlag = B3.Z_FULL_FLUSH, super(e4, t4), this.#e = e4.level, this.#t = e4.strategy;
  }
  params(e4, t4) {
    if (!this.sawError) {
      if (!this.handle) throw Error(`cannot switch params when binding is closed`);
      if (!this.handle.params) throw Error(`not supported in this implementation`);
      if (this.#e !== e4 || this.#t !== t4) {
        this.flush(B3.Z_SYNC_FLUSH), g3(this.handle, `zlib binding closed`);
        let n4 = this.handle.flush;
        this.handle.flush = (e5, t5) => {
          typeof e5 == `function` && (t5 = e5, e5 = this.flushFlag), this.flush(e5), t5 == null ? void 0 : t5();
        };
        try {
          this.handle.params(e4, t4);
        } finally {
          this.handle.flush = n4;
        }
        this.handle && (this.#e = e4, this.#t = t4);
      }
    }
  }
};
var Un = class extends Hn {
  #e;
  constructor(e4) {
    super(e4, `Gzip`), this.#e = e4 && !!e4.portable;
  }
  [Rn](e4) {
    return this.#e ? (this.#e = false, e4[9] = 255, super[Rn](e4)) : super[Rn](e4);
  }
};
var Wn = class extends Hn {
  constructor(e4) {
    super(e4, `Unzip`);
  }
};
var Gn = class extends Vn {
  constructor(e4, t4) {
    e4 ||= {}, e4.flush = e4.flush || B3.BROTLI_OPERATION_PROCESS, e4.finishFlush = e4.finishFlush || B3.BROTLI_OPERATION_FINISH, e4.fullFlushFlag = B3.BROTLI_OPERATION_FLUSH, super(e4, t4);
  }
};
var Kn = class extends Gn {
  constructor(e4) {
    super(e4, `BrotliCompress`);
  }
};
var qn = class extends Gn {
  constructor(e4) {
    super(e4, `BrotliDecompress`);
  }
};
var Jn = class extends Vn {
  constructor(e4, t4) {
    e4 ||= {}, e4.flush = e4.flush || B3.ZSTD_e_continue, e4.finishFlush = e4.finishFlush || B3.ZSTD_e_end, e4.fullFlushFlag = B3.ZSTD_e_flush, super(e4, t4);
  }
};
var Yn = class extends Jn {
  constructor(e4) {
    super(e4, `ZstdCompress`);
  }
};
var Xn = class extends Jn {
  constructor(e4) {
    super(e4, `ZstdDecompress`);
  }
};
var Zn = (e4, t4) => {
  if (Number.isSafeInteger(e4)) e4 < 0 ? $n(e4, t4) : Qn(e4, t4);
  else throw Error(`cannot encode number outside of javascript safe integer range`);
  return t4;
};
var Qn = (e4, t4) => {
  t4[0] = 128;
  for (var n4 = t4.length; n4 > 1; n4--) t4[n4 - 1] = e4 & 255, e4 = Math.floor(e4 / 256);
};
var $n = (e4, t4) => {
  t4[0] = 255;
  var n4 = false;
  e4 *= -1;
  for (var r3 = t4.length; r3 > 1; r3--) {
    var i4 = e4 & 255;
    e4 = Math.floor(e4 / 256), n4 ? t4[r3 - 1] = rr(i4) : i4 === 0 ? t4[r3 - 1] = 0 : (n4 = true, t4[r3 - 1] = ir(i4));
  }
};
var er = (e4) => {
  let t4 = e4[0], n4 = t4 === 128 ? nr(e4.subarray(1, e4.length)) : t4 === 255 ? tr(e4) : null;
  if (n4 === null) throw Error(`invalid base256 encoding`);
  if (!Number.isSafeInteger(n4)) throw Error(`parsed number outside of javascript safe integer range`);
  return n4;
};
var tr = (e4) => {
  for (var t4 = e4.length, n4 = 0, r3 = false, i4 = t4 - 1; i4 > -1; i4--) {
    var a4 = Number(e4[i4]), o3;
    r3 ? o3 = rr(a4) : a4 === 0 ? o3 = a4 : (r3 = true, o3 = ir(a4)), o3 !== 0 && (n4 -= o3 * 256 ** (t4 - i4 - 1));
  }
  return n4;
};
var nr = (e4) => {
  for (var t4 = e4.length, n4 = 0, r3 = t4 - 1; r3 > -1; r3--) {
    var i4 = Number(e4[r3]);
    i4 !== 0 && (n4 += i4 * 256 ** (t4 - r3 - 1));
  }
  return n4;
};
var rr = (e4) => (255 ^ e4) & 255;
var ir = (e4) => (255 ^ e4) + 1 & 255;
ht2({}, { code: () => lr, isCode: () => ar, isName: () => or, name: () => cr, normalFsTypes: () => sr });
var ar = (e4) => cr.has(e4);
var or = (e4) => lr.has(e4);
var sr = /* @__PURE__ */ new Set([`0`, ``, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `D`]);
var cr = /* @__PURE__ */ new Map([[`0`, `File`], [``, `OldFile`], [`1`, `Link`], [`2`, `SymbolicLink`], [`3`, `CharacterDevice`], [`4`, `BlockDevice`], [`5`, `Directory`], [`6`, `FIFO`], [`7`, `ContiguousFile`], [`g`, `GlobalExtendedHeader`], [`x`, `ExtendedHeader`], [`A`, `SolarisACL`], [`D`, `GNUDumpDir`], [`I`, `Inode`], [`K`, `NextFileHasLongLinkpath`], [`L`, `NextFileHasLongPath`], [`M`, `ContinuationFile`], [`N`, `OldGnuLongPath`], [`S`, `SparseFile`], [`V`, `TapeVolumeHeader`], [`X`, `OldExtendedHeader`]]);
var lr = new Map(Array.from(cr).map((e4) => [e4[1], e4[0]]));
var ur = (e4) => e4 === void 0 || e4 < 0 ? void 0 : e4;
var dr = class {
  cksumValid = false;
  needPax = false;
  nullBlock = false;
  block;
  path;
  mode;
  uid;
  gid;
  size;
  cksum;
  #e = `Unsupported`;
  linkpath;
  uname;
  gname;
  devmaj = 0;
  devmin = 0;
  atime;
  ctime;
  mtime;
  charset;
  comment;
  constructor(e4, t4 = 0, n4, r3) {
    Buffer.isBuffer(e4) ? this.decode(e4, t4 || 0, n4, r3) : e4 && this.#t(e4);
  }
  decode(e4, t4, n4, r3) {
    if (t4 ||= 0, !e4 || !(e4.length >= t4 + 512)) throw Error(`need 512 bytes for header`);
    let i4 = pr(e4, t4 + 156, 1), a4 = sr.has(i4), o3 = a4 ? n4 : void 0, s3 = a4 ? r3 : void 0;
    if (this.path = (o3 == null ? void 0 : o3.path) ?? pr(e4, t4, 100), this.mode = (o3 == null ? void 0 : o3.mode) ?? (s3 == null ? void 0 : s3.mode) ?? gr(e4, t4 + 100, 8), this.uid = (o3 == null ? void 0 : o3.uid) ?? (s3 == null ? void 0 : s3.uid) ?? gr(e4, t4 + 108, 8), this.gid = (o3 == null ? void 0 : o3.gid) ?? (s3 == null ? void 0 : s3.gid) ?? gr(e4, t4 + 116, 8), this.size = ur((o3 == null ? void 0 : o3.size) ?? (s3 == null ? void 0 : s3.size) ?? gr(e4, t4 + 124, 12)), this.mtime = (o3 == null ? void 0 : o3.mtime) ?? (s3 == null ? void 0 : s3.mtime) ?? mr(e4, t4 + 136, 12), this.cksum = gr(e4, t4 + 148, 12), s3 && this.#t(s3, true), o3 && this.#t(o3), ar(i4) && (this.#e = i4 || `0`), this.#e === `0` && this.path.slice(-1) === `/` && (this.#e = `5`), this.#e === `5` && (this.size = 0), this.linkpath = pr(e4, t4 + 157, 100), e4.subarray(t4 + 257, t4 + 265).toString() === `ustar\x0000`) if (this.uname = (o3 == null ? void 0 : o3.uname) ?? (s3 == null ? void 0 : s3.uname) ?? pr(e4, t4 + 265, 32), this.gname = (o3 == null ? void 0 : o3.gname) ?? (s3 == null ? void 0 : s3.gname) ?? pr(e4, t4 + 297, 32), this.devmaj = (o3 == null ? void 0 : o3.devmaj) ?? (s3 == null ? void 0 : s3.devmaj) ?? gr(e4, t4 + 329, 8) ?? 0, this.devmin = (o3 == null ? void 0 : o3.devmin) ?? (s3 == null ? void 0 : s3.devmin) ?? gr(e4, t4 + 337, 8) ?? 0, e4[t4 + 475] !== 0) {
      let n5 = pr(e4, t4 + 345, 155);
      this.path = n5 + `/` + this.path;
    } else {
      let i5 = pr(e4, t4 + 345, 130);
      i5 && (this.path = i5 + `/` + this.path), this.atime = (n4 == null ? void 0 : n4.atime) ?? (r3 == null ? void 0 : r3.atime) ?? mr(e4, t4 + 476, 12), this.ctime = (n4 == null ? void 0 : n4.ctime) ?? (r3 == null ? void 0 : r3.ctime) ?? mr(e4, t4 + 488, 12);
    }
    let c4 = 256;
    for (let n5 = t4; n5 < t4 + 148; n5++) c4 += e4[n5];
    for (let n5 = t4 + 156; n5 < t4 + 512; n5++) c4 += e4[n5];
    this.cksumValid = c4 === this.cksum, this.cksum === void 0 && c4 === 256 && (this.nullBlock = true);
  }
  #t(e4, t4 = false) {
    Object.assign(this, Object.fromEntries(Object.entries(e4).filter(([e5, n4]) => !(n4 == null || e5 === `size` && Number(n4) < 0 || e5 === `path` && t4 || e5 === `linkpath` && t4 || e5 === `global`))));
  }
  encode(e4, t4 = 0) {
    if (e4 ||= this.block = Buffer.alloc(512), this.#e === `Unsupported` && (this.#e = `0`), !(e4.length >= t4 + 512)) throw Error(`need 512 bytes for header`);
    let n4 = this.ctime || this.atime ? 130 : 155, r3 = fr(this.path || ``, n4), i4 = r3[0], a4 = r3[1];
    this.needPax = !!r3[2], this.needPax = Er(e4, t4, 100, i4) || this.needPax, this.needPax = br(e4, t4 + 100, 8, this.mode) || this.needPax, this.needPax = br(e4, t4 + 108, 8, this.uid) || this.needPax, this.needPax = br(e4, t4 + 116, 8, this.gid) || this.needPax, this.needPax = br(e4, t4 + 124, 12, this.size) || this.needPax, this.needPax = wr(e4, t4 + 136, 12, this.mtime) || this.needPax, e4[t4 + 156] = Number(this.#e.codePointAt(0)), this.needPax = Er(e4, t4 + 157, 100, this.linkpath) || this.needPax, e4.write(`ustar\x0000`, t4 + 257, 8), this.needPax = Er(e4, t4 + 265, 32, this.uname) || this.needPax, this.needPax = Er(e4, t4 + 297, 32, this.gname) || this.needPax, this.needPax = br(e4, t4 + 329, 8, this.devmaj) || this.needPax, this.needPax = br(e4, t4 + 337, 8, this.devmin) || this.needPax, this.needPax = Er(e4, t4 + 345, n4, a4) || this.needPax, e4[t4 + 475] === 0 ? (this.needPax = Er(e4, t4 + 345, 130, a4) || this.needPax, this.needPax = wr(e4, t4 + 476, 12, this.atime) || this.needPax, this.needPax = wr(e4, t4 + 488, 12, this.ctime) || this.needPax) : this.needPax = Er(e4, t4 + 345, 155, a4) || this.needPax;
    let o3 = 256;
    for (let n5 = t4; n5 < t4 + 148; n5++) o3 += e4[n5];
    for (let n5 = t4 + 156; n5 < t4 + 512; n5++) o3 += e4[n5];
    return this.cksum = o3, br(e4, t4 + 148, 8, this.cksum), this.cksumValid = true, this.needPax;
  }
  get type() {
    return this.#e === `Unsupported` ? this.#e : cr.get(this.#e);
  }
  get typeKey() {
    return this.#e;
  }
  set type(e4) {
    let t4 = String(lr.get(e4));
    if (ar(t4) || t4 === `Unsupported`) this.#e = t4;
    else if (ar(e4)) this.#e = e4;
    else throw TypeError(`invalid entry type: ` + e4);
  }
};
var fr = (e4, t4) => {
  let n4 = e4, r3 = ``, i4, a4 = ae2.parse(e4).root || `.`;
  if (Buffer.byteLength(n4) < 100) i4 = [n4, r3, false];
  else {
    r3 = ae2.dirname(n4), n4 = ae2.basename(n4);
    do
      Buffer.byteLength(n4) <= 100 && Buffer.byteLength(r3) <= t4 ? i4 = [n4, r3, false] : Buffer.byteLength(n4) > 100 && Buffer.byteLength(r3) <= t4 ? i4 = [n4.slice(0, 99), r3, true] : (n4 = ae2.join(ae2.basename(r3), n4), r3 = ae2.dirname(r3));
    while (r3 !== a4 && i4 === void 0);
    i4 ||= [e4.slice(0, 99), ``, true];
  }
  return i4;
};
var pr = (e4, t4, n4) => e4.subarray(t4, t4 + n4).toString(`utf8`).replace(/\0.*/, ``);
var mr = (e4, t4, n4) => hr(gr(e4, t4, n4));
var hr = (e4) => e4 === void 0 ? void 0 : new Date(e4 * 1e3);
var gr = (e4, t4, n4) => Number(e4[t4]) & 128 ? er(e4.subarray(t4, t4 + n4)) : vr(e4, t4, n4);
var _r = (e4) => isNaN(e4) ? void 0 : e4;
var vr = (e4, t4, n4) => _r(parseInt(e4.subarray(t4, t4 + n4).toString(`utf8`).replace(/\0.*$/, ``).trim(), 8));
var yr = { 12: 8589934591, 8: 2097151 };
var br = (e4, t4, n4, r3) => r3 === void 0 ? false : r3 > yr[n4] || r3 < 0 ? (Zn(r3, e4.subarray(t4, t4 + n4)), true) : (xr(e4, t4, n4, r3), false);
var xr = (e4, t4, n4, r3) => e4.write(Sr(r3, n4), t4, n4, `ascii`);
var Sr = (e4, t4) => Cr(Math.floor(e4).toString(8), t4);
var Cr = (e4, t4) => (e4.length === t4 - 1 ? e4 : Array(t4 - e4.length - 1).join(`0`) + e4 + ` `) + `\0`;
var wr = (e4, t4, n4, r3) => r3 === void 0 ? false : br(e4, t4, n4, r3.getTime() / 1e3);
var Tr = Array(156).join(`\0`);
var Er = (e4, t4, n4, r3) => r3 === void 0 ? false : (e4.write(r3 + Tr, t4, n4, `utf8`), r3.length !== Buffer.byteLength(r3) || r3.length > n4);
var Dr = class e2 {
  atime;
  mtime;
  ctime;
  charset;
  comment;
  gid;
  uid;
  gname;
  uname;
  linkpath;
  dev;
  ino;
  nlink;
  path;
  size;
  mode;
  global;
  constructor(e4, t4 = false) {
    this.atime = e4.atime, this.charset = e4.charset, this.comment = e4.comment, this.ctime = e4.ctime, this.dev = e4.dev, this.gid = e4.gid, this.global = t4, this.gname = e4.gname, this.ino = e4.ino, this.linkpath = e4.linkpath, this.mtime = e4.mtime, this.nlink = e4.nlink, this.path = e4.path, this.size = e4.size, this.uid = e4.uid, this.uname = e4.uname;
  }
  encode() {
    let e4 = this.encodeBody();
    if (e4 === ``) return Buffer.allocUnsafe(0);
    let t4 = Buffer.byteLength(e4), n4 = 512 * Math.ceil(1 + t4 / 512), r3 = Buffer.allocUnsafe(n4);
    for (let e5 = 0; e5 < 512; e5++) r3[e5] = 0;
    new dr({ path: (`PaxHeader/` + re2(this.path ?? ``)).slice(0, 99), mode: this.mode || 420, uid: this.uid, gid: this.gid, size: t4, mtime: this.mtime, type: this.global ? `GlobalExtendedHeader` : `ExtendedHeader`, linkpath: ``, uname: this.uname || ``, gname: this.gname || ``, devmaj: 0, devmin: 0, atime: this.atime, ctime: this.ctime }).encode(r3), r3.write(e4, 512, t4, `utf8`);
    for (let e5 = t4 + 512; e5 < r3.length; e5++) r3[e5] = 0;
    return r3;
  }
  encodeBody() {
    return this.encodeField(`path`) + this.encodeField(`ctime`) + this.encodeField(`atime`) + this.encodeField(`dev`) + this.encodeField(`ino`) + this.encodeField(`nlink`) + this.encodeField(`charset`) + this.encodeField(`comment`) + this.encodeField(`gid`) + this.encodeField(`gname`) + this.encodeField(`linkpath`) + this.encodeField(`mtime`) + this.encodeField(`size`) + this.encodeField(`uid`) + this.encodeField(`uname`);
  }
  encodeField(e4) {
    if (this[e4] === void 0) return ``;
    let t4 = this[e4], n4 = t4 instanceof Date ? t4.getTime() / 1e3 : t4, r3 = ` ` + (e4 === `dev` || e4 === `ino` || e4 === `nlink` ? `SCHILY.` : ``) + e4 + `=` + n4 + `
`, i4 = Buffer.byteLength(r3), a4 = Math.floor(Math.log(i4) / Math.log(10)) + 1;
    return i4 + a4 >= 10 ** a4 && (a4 += 1), a4 + i4 + r3;
  }
  static parse(t4, n4, r3 = false) {
    return new e2(Or(kr(t4), n4), r3);
  }
};
var Or = (e4, t4) => t4 ? Object.assign({}, t4, e4) : e4;
var kr = (e4) => e4.replace(/\n$/, ``).split(`
`).reduce(Ar, /* @__PURE__ */ Object.create(null));
var Ar = (e4, t4) => {
  let n4 = parseInt(t4, 10);
  if (n4 !== Buffer.byteLength(t4) + 1) return e4;
  t4 = t4.slice((n4 + ` `).length);
  let r3 = t4.split(`=`), i4 = r3.shift();
  if (!i4) return e4;
  let a4 = i4.replace(/^SCHILY\.(dev|ino|nlink)/, `$1`), o3 = r3.join(`=`).replace(/\0.*/, ``);
  switch (a4) {
    case `path`:
    case `linkpath`:
    case `type`:
    case `charset`:
    case `comment`:
    case `gname`:
    case `uname`:
      e4[a4] = o3;
      break;
    case `ctime`:
    case `atime`:
    case `mtime`:
      e4[a4] = new Date(Number(o3) * 1e3);
      break;
    case `size`:
      let t5 = +o3;
      t5 >= 0 && (e4[a4] = t5);
      break;
    case `gid`:
    case `uid`:
    case `dev`:
    case `ino`:
    case `nlink`:
    case `mode`:
      e4[a4] = +o3;
      break;
  }
  return e4;
};
var V3 = (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform) === `win32` ? (e4) => String(e4).replaceAll(/\\/g, `/`) : (e4) => String(e4);
var jr = class extends Yt {
  extended;
  globalExtended;
  header;
  startBlockSize;
  blockRemain;
  remain;
  type;
  meta = false;
  ignore = false;
  path;
  mode;
  uid;
  gid;
  uname;
  gname;
  size = 0;
  mtime;
  atime;
  ctime;
  linkpath;
  dev;
  ino;
  nlink;
  invalid = false;
  absolute;
  unsupported = false;
  constructor(e4, t4, n4) {
    switch (super({}), this.pause(), this.extended = t4, this.globalExtended = n4, this.header = e4, this.remain = e4.size ?? 0, this.startBlockSize = 512 * Math.ceil(this.remain / 512), this.blockRemain = this.startBlockSize, this.type = e4.type, this.type) {
      case `File`:
      case `OldFile`:
      case `Link`:
      case `SymbolicLink`:
      case `CharacterDevice`:
      case `BlockDevice`:
      case `Directory`:
      case `FIFO`:
      case `ContiguousFile`:
      case `GNUDumpDir`:
        break;
      case `NextFileHasLongLinkpath`:
      case `NextFileHasLongPath`:
      case `OldGnuLongPath`:
      case `GlobalExtendedHeader`:
      case `ExtendedHeader`:
      case `OldExtendedHeader`:
        this.meta = true;
        break;
      default:
        this.ignore = true;
    }
    if (!e4.path) throw Error(`no path provided for tar.ReadEntry`);
    this.path = V3(e4.path), this.mode = e4.mode, this.mode && (this.mode &= 4095), this.uid = e4.uid, this.gid = e4.gid, this.uname = e4.uname, this.gname = e4.gname, this.size = this.remain, this.mtime = e4.mtime, this.atime = e4.atime, this.ctime = e4.ctime, this.linkpath = e4.linkpath ? V3(e4.linkpath) : void 0, this.uname = e4.uname, this.gname = e4.gname, t4 && this.#e(t4), n4 && this.#e(n4, true);
  }
  write(e4) {
    let t4 = e4.length;
    if (t4 > this.blockRemain) throw Error(`writing more to entry than is appropriate`);
    let n4 = this.remain, r3 = this.blockRemain;
    return this.remain = Math.max(0, n4 - t4), this.blockRemain = Math.max(0, r3 - t4), this.ignore ? true : n4 >= t4 ? super.write(e4) : super.write(e4.subarray(0, n4));
  }
  #e(e4, t4 = false) {
    e4.path &&= V3(e4.path), e4.linkpath &&= V3(e4.linkpath), Object.assign(this, Object.fromEntries(Object.entries(e4).filter(([e5, n4]) => !(n4 == null || e5 === `path` && t4))));
  }
};
var Mr = (e4, t4, n4, r3 = {}) => {
  e4.file && (r3.file = e4.file), e4.cwd && (r3.cwd = e4.cwd), r3.code = n4 instanceof Error && n4.code || t4, r3.tarCode = t4, !e4.strict && r3.recoverable !== false ? (n4 instanceof Error && (r3 = Object.assign(n4, r3), n4 = n4.message), e4.emit(`warn`, t4, n4, r3)) : n4 instanceof Error ? e4.emit(`error`, Object.assign(n4, r3)) : e4.emit(`error`, Object.assign(Error(`${t4}: ${n4}`), r3));
};
var Nr = 1024 * 1024;
var Pr = Buffer.from([31, 139]);
var Fr = Buffer.from([40, 181, 47, 253]);
var Ir = Math.max(Pr.length, Fr.length);
var H2 = /* @__PURE__ */ Symbol(`state`);
var Lr = /* @__PURE__ */ Symbol(`writeEntry`);
var U3 = /* @__PURE__ */ Symbol(`readEntry`);
var Rr = /* @__PURE__ */ Symbol(`nextEntry`);
var zr = /* @__PURE__ */ Symbol(`processEntry`);
var W2 = /* @__PURE__ */ Symbol(`extendedHeader`);
var Br = /* @__PURE__ */ Symbol(`globalExtendedHeader`);
var Vr = /* @__PURE__ */ Symbol(`meta`);
var Hr = /* @__PURE__ */ Symbol(`emitMeta`);
var G2 = /* @__PURE__ */ Symbol(`buffer`);
var K2 = /* @__PURE__ */ Symbol(`queue`);
var Ur = /* @__PURE__ */ Symbol(`ended`);
var Wr = /* @__PURE__ */ Symbol(`emittedEnd`);
var Gr = /* @__PURE__ */ Symbol(`emit`);
var q2 = /* @__PURE__ */ Symbol(`unzip`);
var Kr = /* @__PURE__ */ Symbol(`consumeChunk`);
var qr = /* @__PURE__ */ Symbol(`consumeChunkSub`);
var Jr = /* @__PURE__ */ Symbol(`consumeBody`);
var Yr = /* @__PURE__ */ Symbol(`consumeMeta`);
var Xr = /* @__PURE__ */ Symbol(`consumeHeader`);
var Zr = /* @__PURE__ */ Symbol(`consuming`);
var Qr = /* @__PURE__ */ Symbol(`bufferConcat`);
var $r = /* @__PURE__ */ Symbol(`maybeEnd`);
var ei = /* @__PURE__ */ Symbol(`writing`);
var J2 = /* @__PURE__ */ Symbol(`aborted`);
var ti = /* @__PURE__ */ Symbol(`onDone`);
var ni = /* @__PURE__ */ Symbol(`sawValidEntry`);
var ri = /* @__PURE__ */ Symbol(`sawNullBlock`);
var ii = /* @__PURE__ */ Symbol(`sawEOF`);
var ai = /* @__PURE__ */ Symbol(`closeStream`);
var oi = 1e3;
var si = /* @__PURE__ */ Symbol(`compressedBytesRead`);
var ci = /* @__PURE__ */ Symbol(`decompressedBytesRead`);
var li = /* @__PURE__ */ Symbol(`checkDecompressionRatio`);
var ui = () => true;
var di = class extends ee2 {
  file;
  strict;
  maxMetaEntrySize;
  filter;
  brotli;
  zstd;
  maxDecompressionRatio;
  writable = true;
  readable = false;
  [K2] = [];
  [G2];
  [U3];
  [Lr];
  [H2] = `begin`;
  [Vr] = ``;
  [W2];
  [Br];
  [Ur] = false;
  [q2];
  [J2] = false;
  [ni];
  [ri] = false;
  [ii] = false;
  [ei] = false;
  [Zr] = false;
  [Wr] = false;
  [si] = 0;
  [ci] = 0;
  constructor(e4 = {}) {
    super(), this.file = e4.file || ``, this.on(ti, () => {
      (this[H2] === `begin` || this[ni] === false) && this.warn(`TAR_BAD_ARCHIVE`, `Unrecognized archive format`);
    }), e4.ondone ? this.on(ti, e4.ondone) : this.on(ti, () => {
      this.emit(`prefinish`), this.emit(`finish`), this.emit(`end`);
    }), this.strict = !!e4.strict, this.maxDecompressionRatio = typeof e4.maxDecompressionRatio == `number` ? e4.maxDecompressionRatio : oi, this.maxMetaEntrySize = e4.maxMetaEntrySize || Nr, this.filter = typeof e4.filter == `function` ? e4.filter : ui;
    let t4 = e4.file && (e4.file.endsWith(`.tar.br`) || e4.file.endsWith(`.tbr`));
    this.brotli = !(e4.gzip || e4.zstd) && e4.brotli !== void 0 ? e4.brotli : t4 ? void 0 : false;
    let n4 = e4.file && (e4.file.endsWith(`.tar.zst`) || e4.file.endsWith(`.tzst`));
    this.zstd = !(e4.gzip || e4.brotli) && e4.zstd !== void 0 ? e4.zstd : n4 ? true : void 0, this.on(`end`, () => this[ai]()), typeof e4.onwarn == `function` && this.on(`warn`, e4.onwarn), typeof e4.onReadEntry == `function` && this.on(`entry`, e4.onReadEntry);
  }
  warn(e4, t4, n4 = {}) {
    Mr(this, e4, t4, n4);
  }
  [Xr](e4, t4) {
    this[ni] === void 0 && (this[ni] = false);
    let n4;
    try {
      n4 = new dr(e4, t4, this[W2], this[Br]);
    } catch (e5) {
      return this.warn(`TAR_ENTRY_INVALID`, e5);
    }
    if (n4.nullBlock) this[ri] ? (this[ii] = true, this[H2] === `begin` && (this[H2] = `header`), this[Gr](`eof`)) : (this[ri] = true, this[Gr](`nullBlock`));
    else if (this[ri] = false, !n4.cksumValid) this.warn(`TAR_ENTRY_INVALID`, `checksum failure`, { header: n4 });
    else if (!n4.path) this.warn(`TAR_ENTRY_INVALID`, `path is required`, { header: n4 });
    else {
      let e5 = n4.type;
      if (/^(Symbolic)?Link$/.test(e5) && !n4.linkpath) this.warn(`TAR_ENTRY_INVALID`, `linkpath required`, { header: n4 });
      else if (!/^(Symbolic)?Link$/.test(e5) && !/^(Global)?ExtendedHeader$/.test(e5) && n4.linkpath) this.warn(`TAR_ENTRY_INVALID`, `linkpath forbidden`, { header: n4 });
      else {
        let e6 = this[Lr] = new jr(n4, this[W2], this[Br]);
        this[ni] || (e6.remain ? e6.on(`end`, () => {
          e6.invalid || (this[ni] = true);
        }) : this[ni] = true), e6.meta ? e6.size > this.maxMetaEntrySize ? (e6.ignore = true, this[Gr](`ignoredEntry`, e6), this[H2] = `ignore`, e6.resume()) : e6.size > 0 && (this[Vr] = ``, e6.on(`data`, (e7) => this[Vr] += e7), this[H2] = `meta`) : (this[W2] = void 0, e6.ignore = e6.ignore || !this.filter(e6.path, e6), e6.ignore ? (this[Gr](`ignoredEntry`, e6), this[H2] = e6.remain ? `ignore` : `header`, e6.resume()) : (e6.remain ? this[H2] = `body` : (this[H2] = `header`, e6.end()), this[U3] ? this[K2].push(e6) : (this[K2].push(e6), this[Rr]())));
      }
    }
  }
  [ai]() {
    queueMicrotask(() => this.emit(`close`));
  }
  [zr](e4) {
    let t4 = true;
    if (!e4) this[U3] = void 0, t4 = false;
    else if (Array.isArray(e4)) {
      let [t5, ...n4] = e4;
      this.emit(t5, ...n4);
    } else this[U3] = e4, this.emit(`entry`, e4), e4.emittedEnd || (e4.on(`end`, () => this[Rr]()), t4 = false);
    return t4;
  }
  [Rr]() {
    do
      ;
    while (this[zr](this[K2].shift()));
    if (this[K2].length === 0) {
      let e4 = this[U3];
      !e4 || e4.flowing || e4.size === e4.remain ? this[ei] || this.emit(`drain`) : e4.once(`drain`, () => this.emit(`drain`));
    }
  }
  [Jr](e4, t4) {
    let n4 = this[Lr];
    if (!n4) throw Error(`attempt to consume body without entry??`);
    let r3 = n4.blockRemain ?? 0, i4 = r3 >= e4.length && t4 === 0 ? e4 : e4.subarray(t4, t4 + r3);
    return n4.write(i4), n4.blockRemain || (this[H2] = `header`, this[Lr] = void 0, n4.end()), i4.length;
  }
  [Yr](e4, t4) {
    let n4 = this[Lr], r3 = this[Jr](e4, t4);
    return !this[Lr] && n4 && this[Hr](n4), r3;
  }
  [Gr](e4, t4, n4) {
    this[K2].length === 0 && !this[U3] ? this.emit(e4, t4, n4) : this[K2].push([e4, t4, n4]);
  }
  [Hr](e4) {
    switch (this[Gr](`meta`, this[Vr]), e4.type) {
      case `ExtendedHeader`:
      case `OldExtendedHeader`:
        this[W2] = Dr.parse(this[Vr], this[W2], false);
        break;
      case `GlobalExtendedHeader`:
        this[Br] = Dr.parse(this[Vr], this[Br], true);
        break;
      case `NextFileHasLongPath`:
      case `OldGnuLongPath`: {
        let e5 = this[W2] ?? /* @__PURE__ */ Object.create(null);
        this[W2] = e5, e5.path = this[Vr].replace(/\0.*/, ``);
        break;
      }
      case `NextFileHasLongLinkpath`: {
        let e5 = this[W2] || /* @__PURE__ */ Object.create(null);
        this[W2] = e5, e5.linkpath = this[Vr].replace(/\0.*/, ``);
        break;
      }
      default:
        throw Error(`unknown meta: ` + e4.type);
    }
  }
  abort(e4) {
    var _a4;
    if (!this[J2]) {
      if (this[q2]) {
        let e5 = this[q2];
        e5.write = () => true, e5.end = () => e5, e5.emit = () => false, (_a4 = e5.destroy) == null ? void 0 : _a4.call(e5);
      }
      this[J2] = true, this.emit(`abort`, e4), this.warn(`TAR_ABORT`, e4, { recoverable: false });
    }
  }
  [li](e4) {
    this[ci] += e4.length;
    let t4 = this[ci] / this[si];
    return t4 > this.maxDecompressionRatio ? (this.abort(Error(`max decompression ratio exceeded: ${t4.toFixed(2)} > ${this.maxDecompressionRatio}`)), false) : true;
  }
  write(e4, t4, n4) {
    var _a4;
    if (typeof t4 == `function` && (n4 = t4, t4 = void 0), typeof e4 == `string` && (e4 = Buffer.from(e4, typeof t4 == `string` ? t4 : `utf8`)), this[J2]) return n4 == null ? void 0 : n4(), false;
    if ((this[q2] === void 0 || this.brotli === void 0 && this[q2] === false) && e4) {
      if (this[G2] && (e4 = Buffer.concat([this[G2], e4]), this[G2] = void 0), e4.length < Ir) return this[G2] = e4, n4 == null ? void 0 : n4(), true;
      for (let t6 = 0; this[q2] === void 0 && t6 < Pr.length; t6++) e4[t6] !== Pr[t6] && (this[q2] = false);
      let t5 = false;
      if (this[q2] === false && this.zstd !== false) {
        t5 = true;
        for (let n5 = 0; n5 < Fr.length; n5++) if (e4[n5] !== Fr[n5]) {
          t5 = false;
          break;
        }
      }
      let r4 = this.brotli === void 0 && !t5;
      if (this[q2] === false && r4) if (e4.length < 512) if (this[Ur]) this.brotli = true;
      else return this[G2] = e4, n4 == null ? void 0 : n4(), true;
      else try {
        new dr(e4.subarray(0, 512)), this.brotli = false;
      } catch {
        this.brotli = true;
      }
      if (this[q2] === void 0 || this[q2] === false && (this.brotli || t5)) {
        let r5 = this[Ur];
        this[Ur] = false, this[q2] = this[q2] === void 0 ? new Wn({}) : t5 ? new Xn({}) : new qn({}), this[q2].on(`data`, (e5) => {
          this[li](e5) && this[Kr](e5);
        }), this[q2].on(`error`, (e5) => {
          this[J2] || this.abort(e5);
        }), this[q2].on(`end`, () => {
          this[Ur] = true, this[Kr]();
        }), this[ei] = true, this[si] += e4.length;
        let i4 = !!this[q2][r5 ? `end` : `write`](e4);
        return this[ei] = false, n4 == null ? void 0 : n4(), i4;
      }
    }
    this[ei] = true, this[q2] ? (this[si] += e4.length, this[q2].write(e4)) : this[Kr](e4), this[ei] = false;
    let r3 = this[K2].length > 0 ? false : this[U3] ? this[U3].flowing : true;
    return !r3 && this[K2].length === 0 && ((_a4 = this[U3]) == null ? void 0 : _a4.once(`drain`, () => this.emit(`drain`))), n4 == null ? void 0 : n4(), r3;
  }
  [Qr](e4) {
    e4 && !this[J2] && (this[G2] = this[G2] ? Buffer.concat([this[G2], e4]) : e4);
  }
  [$r]() {
    if (this[Ur] && !this[Wr] && !this[J2] && !this[Zr]) {
      this[Wr] = true;
      let e4 = this[Lr];
      if (e4 == null ? void 0 : e4.blockRemain) {
        let t4 = this[G2] ? this[G2].length : 0;
        this.warn(`TAR_BAD_ARCHIVE`, `Truncated input (needed ${e4.blockRemain} more bytes, only ${t4} available)`, { entry: e4 }), this[G2] && e4.write(this[G2]), e4.end();
      }
      this[Gr](ti);
    }
  }
  [Kr](e4) {
    var _a4;
    if (this[Zr] && e4) this[Qr](e4);
    else if (!e4 && !this[G2]) this[$r]();
    else if (e4) {
      if (this[Zr] = true, this[G2]) {
        this[Qr](e4);
        let t4 = this[G2];
        this[G2] = void 0, this[qr](t4);
      } else this[qr](e4);
      for (; this[G2] && ((_a4 = this[G2]) == null ? void 0 : _a4.length) >= 512 && !this[J2] && !this[ii]; ) {
        let e5 = this[G2];
        this[G2] = void 0, this[qr](e5);
      }
      this[Zr] = false;
    }
    (!this[G2] || this[Ur]) && this[$r]();
  }
  [qr](e4) {
    let t4 = 0, n4 = e4.length;
    for (; t4 + 512 <= n4 && !this[J2] && !this[ii]; ) switch (this[H2]) {
      case `begin`:
      case `header`:
        this[Xr](e4, t4), t4 += 512;
        break;
      case `ignore`:
      case `body`:
        t4 += this[Jr](e4, t4);
        break;
      case `meta`:
        t4 += this[Yr](e4, t4);
        break;
      default:
        throw Error(`invalid state: ` + this[H2]);
    }
    t4 < n4 && (this[G2] = this[G2] ? Buffer.concat([e4.subarray(t4), this[G2]]) : e4.subarray(t4));
  }
  end(e4, t4, n4) {
    return typeof e4 == `function` && (n4 = e4, t4 = void 0, e4 = void 0), typeof t4 == `function` && (n4 = t4, t4 = void 0), typeof e4 == `string` && (e4 = Buffer.from(e4, t4)), n4 && this.once(`finish`, n4), this[J2] || (this[q2] ? (e4 && (this[si] += e4.length, this[q2].write(e4)), this[q2].end()) : (this[Ur] = true, (this.brotli === void 0 || this.zstd === void 0) && (e4 ||= Buffer.alloc(0)), e4 && this.write(e4), this[$r]())), this;
  }
};
var fi = (e4) => {
  let t4 = e4.length - 1, n4 = -1;
  for (; t4 > -1 && e4.charAt(t4) === `/`; ) n4 = t4, t4--;
  return n4 === -1 ? e4 : e4.slice(0, n4);
};
var pi = (e4) => {
  let t4 = e4.onReadEntry;
  e4.onReadEntry = t4 ? (e5) => {
    t4(e5), e5.resume();
  } : (e5) => e5.resume();
};
var mi = (e4, t4) => {
  let n4 = new Map(t4.map((e5) => [fi(e5), true])), r3 = e4.filter, i4 = (e5, t5 = ``, r4 = 0) => {
    if (r4 >= 100) return n4.set(e5, false), false;
    let a4 = t5 || ne2(e5).root || `.`, o3;
    if (e5 === a4) o3 = false;
    else {
      let t6 = n4.get(e5);
      o3 = t6 === void 0 ? i4(te2(e5), a4, r4 + 1) : t6;
    }
    return n4.set(e5, o3), o3;
  };
  e4.filter = r3 ? (e5, t5) => r3(e5, t5) && i4(fi(e5)) : (e5) => i4(fi(e5));
};
var hi = Mn((e4) => {
  let t4 = new di(e4), n4 = e4.file, r3;
  try {
    r3 = m3.openSync(n4, `r`);
    let i4 = m3.fstatSync(r3), a4 = e4.maxReadSize || 16 * 1024 * 1024;
    if (i4.size < a4) {
      let e5 = Buffer.allocUnsafe(i4.size), n5 = m3.readSync(r3, e5, 0, i4.size, 0);
      t4.end(n5 === e5.byteLength ? e5 : e5.subarray(0, n5));
    } else {
      let e5 = 0, n5 = Buffer.allocUnsafe(a4);
      for (; e5 < i4.size; ) {
        let i5 = m3.readSync(r3, n5, 0, a4, e5);
        if (i5 === 0) break;
        e5 += i5, t4.write(n5.subarray(0, i5));
      }
      t4.end();
    }
  } finally {
    if (typeof r3 == `number`) try {
      m3.closeSync(r3);
    } catch {
    }
  }
}, (e4, t4) => {
  let n4 = new di(e4), r3 = e4.maxReadSize || 16 * 1024 * 1024, i4 = e4.file;
  return new Promise((e5, t5) => {
    n4.on(`error`, t5), n4.on(`end`, e5), m3.stat(i4, (e6, a4) => {
      if (e6) t5(e6);
      else {
        let e7 = new bn(i4, { readSize: r3, size: a4.size });
        e7.on(`error`, t5), e7.pipe(n4);
      }
    });
  });
}, (e4) => new di(e4), (e4) => new di(e4), (e4, t4) => {
  (t4 == null ? void 0 : t4.length) && mi(e4, t4), e4.noResume || pi(e4);
});
var gi = (e4, t4, n4) => (e4 &= 4095, n4 && (e4 = (e4 | 384) & -19), t4 && (e4 & 256 && (e4 |= 64), e4 & 32 && (e4 |= 8), e4 & 4 && (e4 |= 1)), e4);
var { isAbsolute: _i, parse: vi } = oe2;
var yi = (e4) => {
  let t4 = ``, n4 = vi(e4);
  for (; _i(e4) || n4.root; ) {
    let r3 = e4.charAt(0) === `/` && e4.slice(0, 4) !== `//?/` ? `/` : n4.root;
    e4 = e4.slice(r3.length), t4 += r3, n4 = vi(e4);
  }
  return [t4, e4];
};
var bi = [`|`, `<`, `>`, `?`, `:`];
var xi = bi.map((e4) => String.fromCodePoint(61440 + Number(e4.codePointAt(0))));
var Si = new Map(bi.map((e4, t4) => [e4, xi[t4]]));
var Ci = new Map(xi.map((e4, t4) => [e4, bi[t4]]));
var wi = (e4) => bi.reduce((e5, t4) => e5.split(t4).join(Si.get(t4)), e4);
var Ti = (e4) => xi.reduce((e5, t4) => e5.split(t4).join(Ci.get(t4)), e4);
var Ei = (e4, t4) => t4 ? (e4 = V3(e4).replace(/^\.(\/|$)/, ``), fi(t4) + `/` + e4) : V3(e4);
var Di = 16 * 1024 * 1024;
var Oi = /* @__PURE__ */ Symbol(`process`);
var ki = /* @__PURE__ */ Symbol(`file`);
var Ai = /* @__PURE__ */ Symbol(`directory`);
var ji = /* @__PURE__ */ Symbol(`symlink`);
var Mi = /* @__PURE__ */ Symbol(`hardlink`);
var Ni = /* @__PURE__ */ Symbol(`header`);
var Pi = /* @__PURE__ */ Symbol(`read`);
var Fi = /* @__PURE__ */ Symbol(`lstat`);
var Ii = /* @__PURE__ */ Symbol(`onlstat`);
var Li = /* @__PURE__ */ Symbol(`onread`);
var Ri = /* @__PURE__ */ Symbol(`onreadlink`);
var zi = /* @__PURE__ */ Symbol(`openfile`);
var Bi = /* @__PURE__ */ Symbol(`onopenfile`);
var Vi = /* @__PURE__ */ Symbol(`close`);
var Hi = /* @__PURE__ */ Symbol(`mode`);
var Ui = /* @__PURE__ */ Symbol(`awaitDrain`);
var Wi = /* @__PURE__ */ Symbol(`ondrain`);
var Y2 = /* @__PURE__ */ Symbol(`prefix`);
var Gi = class extends Yt {
  path;
  portable;
  myuid = process.getuid && process.getuid() || 0;
  myuser = process.env.USER || ``;
  maxReadSize;
  linkCache;
  statCache;
  preservePaths;
  cwd;
  strict;
  mtime;
  noPax;
  noMtime;
  prefix;
  fd;
  blockLen = 0;
  blockRemain = 0;
  buf;
  pos = 0;
  remain = 0;
  length = 0;
  offset = 0;
  win32;
  absolute;
  header;
  type;
  linkpath;
  stat;
  onWriteEntry;
  #e = false;
  constructor(e4, t4 = {}) {
    let n4 = jn(t4);
    super(), this.path = V3(e4), this.portable = !!n4.portable, this.maxReadSize = n4.maxReadSize || Di, this.linkCache = n4.linkCache || /* @__PURE__ */ new Map(), this.statCache = n4.statCache || /* @__PURE__ */ new Map(), this.preservePaths = !!n4.preservePaths, this.cwd = V3(n4.cwd || process.cwd()), this.strict = !!n4.strict, this.noPax = !!n4.noPax, this.noMtime = !!n4.noMtime, this.mtime = n4.mtime, this.prefix = n4.prefix ? V3(n4.prefix) : void 0, this.onWriteEntry = n4.onWriteEntry, typeof n4.onwarn == `function` && this.on(`warn`, n4.onwarn);
    let r3 = false;
    if (!this.preservePaths) {
      let [e5, t5] = yi(this.path);
      e5 && typeof t5 == `string` && (this.path = t5, r3 = e5);
    }
    this.win32 = !!n4.win32 || process.platform === `win32`, this.win32 && (this.path = Ti(this.path.replaceAll(/\\/g, `/`)), e4 = e4.replaceAll(/\\/g, `/`)), this.absolute = V3(n4.absolute || y4.resolve(this.cwd, e4)), this.path === `` && (this.path = `./`), r3 && this.warn(`TAR_ENTRY_INFO`, `stripping ${r3} from absolute path`, { entry: this, path: r3 + this.path });
    let i4 = this.statCache.get(this.absolute);
    i4 ? this[Ii](i4) : this[Fi]();
  }
  warn(e4, t4, n4 = {}) {
    return Mr(this, e4, t4, n4);
  }
  emit(e4, ...t4) {
    return e4 === `error` && (this.#e = true), super.emit(e4, ...t4);
  }
  [Fi]() {
    v3.lstat(this.absolute, (e4, t4) => {
      if (e4) return this.emit(`error`, e4);
      this[Ii](t4);
    });
  }
  [Ii](e4) {
    this.statCache.set(this.absolute, e4), this.stat = e4, e4.isFile() || (e4.size = 0), this.type = Ji(e4), this.emit(`stat`, e4), this[Oi]();
  }
  [Oi]() {
    switch (this.type) {
      case `File`:
        return this[ki]();
      case `Directory`:
        return this[Ai]();
      case `SymbolicLink`:
        return this[ji]();
      default:
        return this.end();
    }
  }
  [Hi](e4) {
    return gi(e4, this.type === `Directory`, this.portable);
  }
  [Y2](e4) {
    return Ei(e4, this.prefix);
  }
  [Ni]() {
    var _a4, _b3;
    if (!this.stat) throw Error(`cannot write header before stat`);
    this.type === `Directory` && this.portable && (this.noMtime = true), (_a4 = this.onWriteEntry) == null ? void 0 : _a4.call(this, this), this.header = new dr({ path: this[Y2](this.path), linkpath: this.type === `Link` && this.linkpath !== void 0 ? this[Y2](this.linkpath) : this.linkpath, mode: this[Hi](this.stat.mode), uid: this.portable ? void 0 : this.stat.uid, gid: this.portable ? void 0 : this.stat.gid, size: this.stat.size, mtime: this.noMtime ? void 0 : this.mtime || this.stat.mtime, type: this.type === `Unsupported` ? void 0 : this.type, uname: this.portable ? void 0 : this.stat.uid === this.myuid ? this.myuser : ``, atime: this.portable ? void 0 : this.stat.atime, ctime: this.portable ? void 0 : this.stat.ctime }), this.header.encode() && !this.noPax && super.write(new Dr({ atime: this.portable ? void 0 : this.header.atime, ctime: this.portable ? void 0 : this.header.ctime, gid: this.portable ? void 0 : this.header.gid, mtime: this.noMtime ? void 0 : this.mtime || this.header.mtime, path: this[Y2](this.path), linkpath: this.type === `Link` && this.linkpath !== void 0 ? this[Y2](this.linkpath) : this.linkpath, size: this.header.size, uid: this.portable ? void 0 : this.header.uid, uname: this.portable ? void 0 : this.header.uname, dev: this.portable ? void 0 : this.stat.dev, ino: this.portable ? void 0 : this.stat.ino, nlink: this.portable ? void 0 : this.stat.nlink }).encode());
    let e4 = (_b3 = this.header) == null ? void 0 : _b3.block;
    if (!e4) throw Error(`failed to encode header`);
    super.write(e4);
  }
  [Ai]() {
    if (!this.stat) throw Error(`cannot create directory entry without stat`);
    this.path.slice(-1) !== `/` && (this.path += `/`), this.stat.size = 0, this[Ni](), this.end();
  }
  [ji]() {
    v3.readlink(this.absolute, (e4, t4) => {
      if (e4) return this.emit(`error`, e4);
      this[Ri](t4);
    });
  }
  [Ri](e4) {
    this.linkpath = V3(e4), this[Ni](), this.end();
  }
  [Mi](e4) {
    if (!this.stat) throw Error(`cannot create link entry without stat`);
    this.type = `Link`, this.linkpath = V3(y4.relative(this.cwd, e4)), this.stat.size = 0, this[Ni](), this.end();
  }
  [ki]() {
    if (!this.stat) throw Error(`cannot create file entry without stat`);
    if (this.stat.nlink > 1) {
      let e4 = `${this.stat.dev}:${this.stat.ino}`, t4 = this.linkCache.get(e4);
      if ((t4 == null ? void 0 : t4.indexOf(this.cwd)) === 0) return this[Mi](t4);
      this.linkCache.set(e4, this.absolute);
    }
    if (this[Ni](), this.stat.size === 0) return this.end();
    this[zi]();
  }
  [zi]() {
    v3.open(this.absolute, `r`, (e4, t4) => {
      if (e4) return this.emit(`error`, e4);
      this[Bi](t4);
    });
  }
  [Bi](e4) {
    if (this.fd = e4, this.#e) return this[Vi]();
    if (!this.stat) throw Error(`should stat before calling onopenfile`);
    this.blockLen = 512 * Math.ceil(this.stat.size / 512), this.blockRemain = this.blockLen;
    let t4 = Math.min(this.blockLen, this.maxReadSize);
    this.buf = Buffer.allocUnsafe(t4), this.offset = 0, this.pos = 0, this.remain = this.stat.size, this.length = this.buf.length, this[Pi]();
  }
  [Pi]() {
    let { fd: e4, buf: t4, offset: n4, length: r3, pos: i4 } = this;
    if (e4 === void 0 || t4 === void 0) throw Error(`cannot read file without first opening`);
    v3.read(e4, t4, n4, r3, i4, (e5, t5) => {
      if (e5) return this[Vi](() => this.emit(`error`, e5));
      this[Li](t5);
    });
  }
  [Vi](e4 = () => {
  }) {
    this.fd !== void 0 && v3.close(this.fd, e4);
  }
  [Li](e4) {
    if (e4 <= 0 && this.remain > 0) {
      let e5 = Object.assign(Error(`encountered unexpected EOF`), { path: this.absolute, syscall: `read`, code: `EOF` });
      return this[Vi](() => this.emit(`error`, e5));
    }
    if (e4 > this.remain) {
      let e5 = Object.assign(Error(`did not encounter expected EOF`), { path: this.absolute, syscall: `read`, code: `EOF` });
      return this[Vi](() => this.emit(`error`, e5));
    }
    if (!this.buf) throw Error(`should have created buffer prior to reading`);
    if (e4 === this.remain) for (let t5 = e4; t5 < this.length && e4 < this.blockRemain; t5++) this.buf[t5 + this.offset] = 0, e4++, this.remain++;
    let t4 = this.offset === 0 && e4 === this.buf.length ? this.buf : this.buf.subarray(this.offset, this.offset + e4);
    this.write(t4) ? this[Wi]() : this[Ui](() => this[Wi]());
  }
  [Ui](e4) {
    this.once(`drain`, e4);
  }
  write(e4, t4, n4) {
    if (typeof t4 == `function` && (n4 = t4, t4 = void 0), typeof e4 == `string` && (e4 = Buffer.from(e4, typeof t4 == `string` ? t4 : `utf8`)), this.blockRemain < e4.length) {
      let e5 = Object.assign(Error(`writing more data than expected`), { path: this.absolute });
      return this.emit(`error`, e5);
    }
    return this.remain -= e4.length, this.blockRemain -= e4.length, this.pos += e4.length, this.offset += e4.length, super.write(e4, null, n4);
  }
  [Wi]() {
    if (!this.remain) return this.blockRemain && super.write(Buffer.alloc(this.blockRemain)), this[Vi]((e4) => e4 ? this.emit(`error`, e4) : this.end());
    if (!this.buf) throw Error(`buffer lost somehow in ONDRAIN`);
    this.offset >= this.length && (this.buf = Buffer.allocUnsafe(Math.min(this.blockRemain, this.buf.length)), this.offset = 0), this.length = this.buf.length - this.offset, this[Pi]();
  }
};
var Ki = class extends Gi {
  sync = true;
  [Fi]() {
    this[Ii](v3.lstatSync(this.absolute));
  }
  [ji]() {
    this[Ri](v3.readlinkSync(this.absolute));
  }
  [zi]() {
    this[Bi](v3.openSync(this.absolute, `r`));
  }
  [Pi]() {
    let e4 = true;
    try {
      let { fd: t4, buf: n4, offset: r3, length: i4, pos: a4 } = this;
      if (t4 === void 0 || n4 === void 0) throw Error(`fd and buf must be set in READ method`);
      let o3 = v3.readSync(t4, n4, r3, i4, a4);
      this[Li](o3), e4 = false;
    } finally {
      if (e4) try {
        this[Vi](() => {
        });
      } catch {
      }
    }
  }
  [Ui](e4) {
    e4();
  }
  [Vi](e4 = () => {
  }) {
    this.fd !== void 0 && v3.closeSync(this.fd), e4();
  }
};
var qi = class extends Yt {
  blockLen = 0;
  blockRemain = 0;
  buf = 0;
  pos = 0;
  remain = 0;
  length = 0;
  preservePaths;
  portable;
  strict;
  noPax;
  noMtime;
  readEntry;
  type;
  prefix;
  path;
  mode;
  uid;
  gid;
  uname;
  gname;
  header;
  mtime;
  atime;
  ctime;
  linkpath;
  size;
  onWriteEntry;
  warn(e4, t4, n4 = {}) {
    return Mr(this, e4, t4, n4);
  }
  constructor(e4, t4 = {}) {
    var _a4, _b3;
    let n4 = jn(t4);
    super(), this.preservePaths = !!n4.preservePaths, this.portable = !!n4.portable, this.strict = !!n4.strict, this.noPax = !!n4.noPax, this.noMtime = !!n4.noMtime, this.onWriteEntry = n4.onWriteEntry, this.readEntry = e4;
    let { type: r3 } = e4;
    if (r3 === `Unsupported`) throw Error(`writing entry that should be ignored`);
    this.type = r3, this.type === `Directory` && this.portable && (this.noMtime = true), this.prefix = n4.prefix, this.path = V3(e4.path), this.mode = e4.mode === void 0 ? void 0 : this[Hi](e4.mode), this.uid = this.portable ? void 0 : e4.uid, this.gid = this.portable ? void 0 : e4.gid, this.uname = this.portable ? void 0 : e4.uname, this.gname = this.portable ? void 0 : e4.gname, this.size = e4.size, this.mtime = this.noMtime ? void 0 : n4.mtime || e4.mtime, this.atime = this.portable ? void 0 : e4.atime, this.ctime = this.portable ? void 0 : e4.ctime, this.linkpath = e4.linkpath === void 0 ? void 0 : V3(e4.linkpath), typeof n4.onwarn == `function` && this.on(`warn`, n4.onwarn);
    let i4 = false;
    if (!this.preservePaths) {
      let [e5, t5] = yi(this.path);
      e5 && typeof t5 == `string` && (this.path = t5, i4 = e5);
    }
    this.remain = e4.size, this.blockRemain = e4.startBlockSize, (_a4 = this.onWriteEntry) == null ? void 0 : _a4.call(this, this), this.header = new dr({ path: this[Y2](this.path), linkpath: this.type === `Link` && this.linkpath !== void 0 ? this[Y2](this.linkpath) : this.linkpath, mode: this.mode, uid: this.portable ? void 0 : this.uid, gid: this.portable ? void 0 : this.gid, size: this.size, mtime: this.noMtime ? void 0 : this.mtime, type: this.type, uname: this.portable ? void 0 : this.uname, atime: this.portable ? void 0 : this.atime, ctime: this.portable ? void 0 : this.ctime }), i4 && this.warn(`TAR_ENTRY_INFO`, `stripping ${i4} from absolute path`, { entry: this, path: i4 + this.path }), this.header.encode() && !this.noPax && super.write(new Dr({ atime: this.portable ? void 0 : this.atime, ctime: this.portable ? void 0 : this.ctime, gid: this.portable ? void 0 : this.gid, mtime: this.noMtime ? void 0 : this.mtime, path: this[Y2](this.path), linkpath: this.type === `Link` && this.linkpath !== void 0 ? this[Y2](this.linkpath) : this.linkpath, size: this.size, uid: this.portable ? void 0 : this.uid, uname: this.portable ? void 0 : this.uname, dev: this.portable ? void 0 : this.readEntry.dev, ino: this.portable ? void 0 : this.readEntry.ino, nlink: this.portable ? void 0 : this.readEntry.nlink }).encode());
    let a4 = (_b3 = this.header) == null ? void 0 : _b3.block;
    if (!a4) throw Error(`failed to encode header`);
    super.write(a4), e4.pipe(this);
  }
  [Y2](e4) {
    return Ei(e4, this.prefix);
  }
  [Hi](e4) {
    return gi(e4, this.type === `Directory`, this.portable);
  }
  write(e4, t4, n4) {
    typeof t4 == `function` && (n4 = t4, t4 = void 0), typeof e4 == `string` && (e4 = Buffer.from(e4, typeof t4 == `string` ? t4 : `utf8`));
    let r3 = e4.length;
    if (r3 > this.blockRemain) throw Error(`writing more to entry than is appropriate`);
    return this.blockRemain -= r3, super.write(e4, n4);
  }
  end(e4, t4, n4) {
    return this.blockRemain && super.write(Buffer.alloc(this.blockRemain)), typeof e4 == `function` && (n4 = e4, t4 = void 0, e4 = void 0), typeof t4 == `function` && (n4 = t4, t4 = void 0), typeof e4 == `string` && (e4 = Buffer.from(e4, t4 ?? `utf8`)), n4 && this.once(`finish`, n4), e4 ? super.end(e4, n4) : super.end(n4), this;
  }
};
var Ji = (e4) => e4.isFile() ? `File` : e4.isDirectory() ? `Directory` : e4.isSymbolicLink() ? `SymbolicLink` : `Unsupported`;
var Yi = class e3 {
  tail;
  head;
  length = 0;
  static create(t4 = []) {
    return new e3(t4);
  }
  constructor(e4 = []) {
    for (let t4 of e4) this.push(t4);
  }
  *[Symbol.iterator]() {
    for (let e4 = this.head; e4; e4 = e4.next) yield e4.value;
  }
  removeNode(e4) {
    if (e4.list !== this) throw Error(`removing node which does not belong to this list`);
    let t4 = e4.next, n4 = e4.prev;
    return t4 && (t4.prev = n4), n4 && (n4.next = t4), e4 === this.head && (this.head = t4), e4 === this.tail && (this.tail = n4), this.length--, e4.next = void 0, e4.prev = void 0, e4.list = void 0, t4;
  }
  unshiftNode(e4) {
    if (e4 === this.head) return;
    e4.list && e4.list.removeNode(e4);
    let t4 = this.head;
    e4.list = this, e4.next = t4, t4 && (t4.prev = e4), this.head = e4, this.tail ||= e4, this.length++;
  }
  pushNode(e4) {
    if (e4 === this.tail) return;
    e4.list && e4.list.removeNode(e4);
    let t4 = this.tail;
    e4.list = this, e4.prev = t4, t4 && (t4.next = e4), this.tail = e4, this.head ||= e4, this.length++;
  }
  push(...e4) {
    for (let t4 = 0, n4 = e4.length; t4 < n4; t4++) Zi(this, e4[t4]);
    return this.length;
  }
  unshift(...e4) {
    for (var t4 = 0, n4 = e4.length; t4 < n4; t4++) Qi(this, e4[t4]);
    return this.length;
  }
  pop() {
    if (!this.tail) return;
    let e4 = this.tail.value, t4 = this.tail;
    return this.tail = this.tail.prev, this.tail ? this.tail.next = void 0 : this.head = void 0, t4.list = void 0, this.length--, e4;
  }
  shift() {
    if (!this.head) return;
    let e4 = this.head.value, t4 = this.head;
    return this.head = this.head.next, this.head ? this.head.prev = void 0 : this.tail = void 0, t4.list = void 0, this.length--, e4;
  }
  forEach(e4, t4) {
    t4 ||= this;
    for (let n4 = this.head, r3 = 0; n4; r3++) e4.call(t4, n4.value, r3, this), n4 = n4.next;
  }
  forEachReverse(e4, t4) {
    t4 ||= this;
    for (let n4 = this.tail, r3 = this.length - 1; n4; r3--) e4.call(t4, n4.value, r3, this), n4 = n4.prev;
  }
  get(e4) {
    let t4 = 0, n4 = this.head;
    for (; n4 && t4 < e4; t4++) n4 = n4.next;
    if (t4 === e4 && n4) return n4.value;
  }
  getReverse(e4) {
    let t4 = 0, n4 = this.tail;
    for (; n4 && t4 < e4; t4++) n4 = n4.prev;
    if (t4 === e4 && n4) return n4.value;
  }
  map(t4, n4) {
    n4 ||= this;
    let r3 = new e3();
    for (let e4 = this.head; e4; ) r3.push(t4.call(n4, e4.value, this)), e4 = e4.next;
    return r3;
  }
  mapReverse(t4, n4) {
    n4 ||= this;
    var r3 = new e3();
    for (let e4 = this.tail; e4; ) r3.push(t4.call(n4, e4.value, this)), e4 = e4.prev;
    return r3;
  }
  reduce(e4, t4) {
    let n4, r3 = this.head;
    if (arguments.length > 1) n4 = t4;
    else if (this.head) r3 = this.head.next, n4 = this.head.value;
    else throw TypeError(`Reduce of empty list with no initial value`);
    for (var i4 = 0; r3; i4++) n4 = e4(n4, r3.value, i4), r3 = r3.next;
    return n4;
  }
  reduceReverse(e4, t4) {
    let n4, r3 = this.tail;
    if (arguments.length > 1) n4 = t4;
    else if (this.tail) r3 = this.tail.prev, n4 = this.tail.value;
    else throw TypeError(`Reduce of empty list with no initial value`);
    for (let t5 = this.length - 1; r3; t5--) n4 = e4(n4, r3.value, t5), r3 = r3.prev;
    return n4;
  }
  toArray() {
    let e4 = Array(this.length);
    for (let t4 = 0, n4 = this.head; n4; t4++) e4[t4] = n4.value, n4 = n4.next;
    return e4;
  }
  toArrayReverse() {
    let e4 = Array(this.length);
    for (let t4 = 0, n4 = this.tail; n4; t4++) e4[t4] = n4.value, n4 = n4.prev;
    return e4;
  }
  slice(t4 = 0, n4 = this.length) {
    n4 < 0 && (n4 += this.length), t4 < 0 && (t4 += this.length);
    let r3 = new e3();
    if (n4 < t4 || n4 < 0) return r3;
    t4 < 0 && (t4 = 0), n4 > this.length && (n4 = this.length);
    let i4 = this.head, a4 = 0;
    for (a4 = 0; i4 && a4 < t4; a4++) i4 = i4.next;
    for (; i4 && a4 < n4; a4++, i4 = i4.next) r3.push(i4.value);
    return r3;
  }
  sliceReverse(t4 = 0, n4 = this.length) {
    n4 < 0 && (n4 += this.length), t4 < 0 && (t4 += this.length);
    let r3 = new e3();
    if (n4 < t4 || n4 < 0) return r3;
    t4 < 0 && (t4 = 0), n4 > this.length && (n4 = this.length);
    let i4 = this.length, a4 = this.tail;
    for (; a4 && i4 > n4; i4--) a4 = a4.prev;
    for (; a4 && i4 > t4; i4--, a4 = a4.prev) r3.push(a4.value);
    return r3;
  }
  splice(e4, t4 = 0, ...n4) {
    e4 > this.length && (e4 = this.length - 1), e4 < 0 && (e4 = this.length + e4);
    let r3 = this.head;
    for (let t5 = 0; r3 && t5 < e4; t5++) r3 = r3.next;
    let i4 = [];
    for (let e5 = 0; r3 && e5 < t4; e5++) i4.push(r3.value), r3 = this.removeNode(r3);
    r3 ? r3 !== this.tail && (r3 = r3.prev) : r3 = this.tail;
    for (let e5 of n4) r3 = Xi(this, r3, e5);
    return i4;
  }
  reverse() {
    let e4 = this.head, t4 = this.tail;
    for (let t5 = e4; t5; t5 = t5.prev) {
      let e5 = t5.prev;
      t5.prev = t5.next, t5.next = e5;
    }
    return this.head = t4, this.tail = e4, this;
  }
};
function Xi(e4, t4, n4) {
  let r3 = new $i(n4, t4, t4 ? t4.next : e4.head, e4);
  return r3.next === void 0 && (e4.tail = r3), r3.prev === void 0 && (e4.head = r3), e4.length++, r3;
}
function Zi(e4, t4) {
  e4.tail = new $i(t4, e4.tail, void 0, e4), e4.head ||= e4.tail, e4.length++;
}
function Qi(e4, t4) {
  e4.head = new $i(t4, void 0, e4.head, e4), e4.tail ||= e4.head, e4.length++;
}
var $i = class {
  list;
  next;
  prev;
  value;
  constructor(e4, t4, n4, r3) {
    this.list = r3, this.value = e4, t4 ? (t4.next = this, this.prev = t4) : this.prev = void 0, n4 ? (n4.prev = this, this.next = n4) : this.next = void 0;
  }
};
var ea = class {
  path;
  absolute;
  entry;
  stat;
  readdir;
  pending = false;
  pendingLink = false;
  ignore = false;
  piped = false;
  constructor(e4, t4) {
    this.path = e4 || `./`, this.absolute = t4;
  }
};
var ta = Buffer.alloc(1024);
var na = /* @__PURE__ */ Symbol(`onStat`);
var ra = /* @__PURE__ */ Symbol(`ended`);
var X2 = /* @__PURE__ */ Symbol(`queue`);
var ia = /* @__PURE__ */ Symbol(`pendingLinks`);
var aa = /* @__PURE__ */ Symbol(`current`);
var oa = /* @__PURE__ */ Symbol(`process`);
var sa = /* @__PURE__ */ Symbol(`processing`);
var ca = /* @__PURE__ */ Symbol(`processJob`);
var Z2 = /* @__PURE__ */ Symbol(`jobs`);
var la = /* @__PURE__ */ Symbol(`jobDone`);
var ua = /* @__PURE__ */ Symbol(`addFSEntry`);
var da = /* @__PURE__ */ Symbol(`addTarEntry`);
var fa = /* @__PURE__ */ Symbol(`stat`);
var pa = /* @__PURE__ */ Symbol(`readdir`);
var ma = /* @__PURE__ */ Symbol(`onreaddir`);
var ha = /* @__PURE__ */ Symbol(`pipe`);
var ga = /* @__PURE__ */ Symbol(`entry`);
var _a3 = /* @__PURE__ */ Symbol(`entryOpt`);
var va = /* @__PURE__ */ Symbol(`writeEntryClass`);
var ya = /* @__PURE__ */ Symbol(`write`);
var ba = /* @__PURE__ */ Symbol(`ondrain`);
var xa = class extends Yt {
  sync = false;
  opt;
  cwd;
  maxReadSize;
  preservePaths;
  strict;
  noPax;
  prefix;
  linkCache;
  statCache;
  file;
  portable;
  zip;
  readdirCache;
  noDirRecurse;
  follow;
  noMtime;
  mtime;
  filter;
  jobs;
  [va];
  onWriteEntry;
  [X2];
  [ia] = /* @__PURE__ */ new Map();
  [Z2] = 0;
  [sa] = false;
  [ra] = false;
  constructor(e4 = {}) {
    if (super(), this.opt = e4, this.file = e4.file || ``, this.cwd = e4.cwd || process.cwd(), this.maxReadSize = e4.maxReadSize, this.preservePaths = !!e4.preservePaths, this.strict = !!e4.strict, this.noPax = !!e4.noPax, this.prefix = V3(e4.prefix || ``), this.linkCache = e4.linkCache || /* @__PURE__ */ new Map(), this.statCache = e4.statCache || /* @__PURE__ */ new Map(), this.readdirCache = e4.readdirCache || /* @__PURE__ */ new Map(), this.onWriteEntry = e4.onWriteEntry, this[va] = Gi, typeof e4.onwarn == `function` && this.on(`warn`, e4.onwarn), this.portable = !!e4.portable, e4.gzip || e4.brotli || e4.zstd) {
      if (+!!e4.gzip + +!!e4.brotli + +!!e4.zstd > 1) throw TypeError(`gzip, brotli, zstd are mutually exclusive`);
      if (e4.gzip && (typeof e4.gzip != `object` && (e4.gzip = {}), this.portable && (e4.gzip.portable = true), this.zip = new Un(e4.gzip)), e4.brotli && (typeof e4.brotli != `object` && (e4.brotli = {}), this.zip = new Kn(e4.brotli)), e4.zstd && (typeof e4.zstd != `object` && (e4.zstd = {}), this.zip = new Yn(e4.zstd)), !this.zip) throw Error(`impossible`);
      let t4 = this.zip;
      t4.on(`data`, (e5) => super.write(e5)), t4.on(`end`, () => super.end()), t4.on(`drain`, () => this[ba]()), this.on(`resume`, () => t4.resume());
    } else this.on(`drain`, this[ba]);
    this.noDirRecurse = !!e4.noDirRecurse, this.follow = !!e4.follow, this.noMtime = !!e4.noMtime, e4.mtime && (this.mtime = e4.mtime), this.filter = typeof e4.filter == `function` ? e4.filter : () => true, this[X2] = new Yi(), this[Z2] = 0, this.jobs = Number(e4.jobs) || 4, this[sa] = false, this[ra] = false;
  }
  [ya](e4) {
    return super.write(e4);
  }
  add(e4) {
    return this.write(e4), this;
  }
  end(e4, t4, n4) {
    return typeof e4 == `function` && (n4 = e4, e4 = void 0), typeof t4 == `function` && (n4 = t4, t4 = void 0), e4 && this.add(e4), this[ra] = true, this[oa](), n4 && n4(), this;
  }
  write(e4) {
    if (this[ra]) throw Error(`write after end`);
    return typeof e4 == `string` ? this[ua](e4) : this[da](e4), this.flowing;
  }
  [da](e4) {
    let t4 = V3(y4.resolve(this.cwd, e4.path));
    if (!this.filter(e4.path, e4)) e4.resume();
    else {
      let n4 = new ea(e4.path, t4);
      n4.entry = new qi(e4, this[_a3](n4)), n4.entry.on(`end`, () => this[la](n4)), this[Z2] += 1, this[X2].push(n4);
    }
    this[oa]();
  }
  [ua](e4) {
    let t4 = V3(y4.resolve(this.cwd, e4));
    this[X2].push(new ea(e4, t4)), this[oa]();
  }
  [fa](e4) {
    e4.pending = true, this[Z2] += 1, v3[this.follow ? `stat` : `lstat`](e4.absolute, (t4, n4) => {
      e4.pending = false, --this[Z2], t4 ? this.emit(`error`, t4) : this[na](e4, n4);
    });
  }
  [na](e4, t4) {
    if (this.statCache.set(e4.absolute, t4), e4.stat = t4, !this.filter(e4.path, t4)) e4.ignore = true;
    else if (t4.isFile() && t4.nlink > 1 && !this.linkCache.get(`${t4.dev}:${t4.ino}`) && !this.sync) if (e4 === this[aa]) this[ca](e4);
    else {
      let n4 = `${t4.dev}:${t4.ino}`, r3 = this[ia].get(n4);
      r3 ? r3.push(e4) : this[ia].set(n4, [e4]), e4.pendingLink = true, e4.pending = true;
    }
    this[oa]();
  }
  [pa](e4) {
    e4.pending = true, this[Z2] += 1, v3.readdir(e4.absolute, (t4, n4) => {
      if (e4.pending = false, --this[Z2], t4) return this.emit(`error`, t4);
      this[ma](e4, n4);
    });
  }
  [ma](e4, t4) {
    this.readdirCache.set(e4.absolute, t4), e4.readdir = t4, this[oa]();
  }
  [oa]() {
    if (!this[sa]) {
      this[sa] = true;
      for (let e4 = this[X2].head; e4 && this[Z2] < this.jobs; e4 = e4.next) if (this[ca](e4.value), e4.value.ignore) {
        let t4 = e4.next;
        this[X2].removeNode(e4), e4.next = t4;
      }
      this[sa] = false, this[ra] && this[X2].length === 0 && this[Z2] === 0 && (this.zip ? this.zip.end(ta) : (super.write(ta), super.end()));
    }
  }
  get [aa]() {
    return this[X2] && this[X2].head && this[X2].head.value;
  }
  [la](e4) {
    this[X2].shift(), --this[Z2];
    let { stat: t4 } = e4;
    if (t4 && t4.isFile() && t4.nlink > 1) {
      let e5 = `${t4.dev}:${t4.ino}`, n4 = this[ia].get(e5);
      if (n4) {
        this[ia].delete(e5);
        for (let e6 of n4) e6.pending = false, this[ca](e6);
      }
    }
    this[oa]();
  }
  [ca](e4) {
    if (e4.pending && e4.pendingLink && e4 === this[aa] && (e4.pending = false, e4.pendingLink = false), !e4.pending) {
      if (e4.entry) {
        e4 === this[aa] && !e4.piped && this[ha](e4);
        return;
      }
      if (!e4.stat) {
        let t4 = this.statCache.get(e4.absolute);
        t4 ? this[na](e4, t4) : this[fa](e4);
      }
      if (e4.stat && !e4.ignore) {
        if (!this.noDirRecurse && e4.stat.isDirectory() && !e4.readdir) {
          let t4 = this.readdirCache.get(e4.absolute);
          if (t4 ? this[ma](e4, t4) : this[pa](e4), !e4.readdir) return;
        }
        if (e4.entry = this[ga](e4), !e4.entry) {
          e4.ignore = true;
          return;
        }
        e4 === this[aa] && !e4.piped && this[ha](e4);
      }
    }
  }
  [_a3](e4) {
    return { onwarn: (e5, t4, n4) => this.warn(e5, t4, n4), noPax: this.noPax, cwd: this.cwd, absolute: e4.absolute, preservePaths: this.preservePaths, maxReadSize: this.maxReadSize, strict: this.strict, portable: this.portable, linkCache: this.linkCache, statCache: this.statCache, noMtime: this.noMtime, mtime: this.mtime, prefix: this.prefix, onWriteEntry: this.onWriteEntry };
  }
  [ga](e4) {
    this[Z2] += 1;
    try {
      return new this[va](e4.path, this[_a3](e4)).on(`end`, () => this[la](e4)).on(`error`, (e5) => this.emit(`error`, e5));
    } catch (e5) {
      this.emit(`error`, e5);
    }
  }
  [ba]() {
    this[aa] && this[aa].entry && this[aa].entry.resume();
  }
  [ha](e4) {
    e4.piped = true, e4.readdir && e4.readdir.forEach((t5) => {
      let n5 = e4.path, r3 = n5 === `./` ? `` : n5.replace(/\/*$/, `/`);
      this[ua](r3 + t5);
    });
    let t4 = e4.entry, n4 = this.zip;
    if (!t4) throw Error(`cannot pipe without source`);
    n4 ? t4.on(`data`, (e5) => {
      n4.write(e5) || t4.pause();
    }) : t4.on(`data`, (e5) => {
      super.write(e5) || t4.pause();
    });
  }
  pause() {
    return this.zip && this.zip.pause(), super.pause();
  }
  warn(e4, t4, n4 = {}) {
    Mr(this, e4, t4, n4);
  }
};
var Sa = class extends xa {
  sync = true;
  constructor(e4) {
    super(e4), this[va] = Ki;
  }
  pause() {
  }
  resume() {
  }
  [fa](e4) {
    let t4 = this.follow ? `statSync` : `lstatSync`;
    this[na](e4, v3[t4](e4.absolute));
  }
  [pa](e4) {
    this[ma](e4, v3.readdirSync(e4.absolute));
  }
  [ha](e4) {
    let t4 = e4.entry, n4 = this.zip;
    if (e4.readdir && e4.readdir.forEach((t5) => {
      let n5 = e4.path, r3 = n5 === `./` ? `` : n5.replace(/\/*$/, `/`);
      this[ua](r3 + t5);
    }), !t4) throw Error(`Cannot pipe without source`);
    n4 ? t4.on(`data`, (e5) => {
      n4.write(e5);
    }) : t4.on(`data`, (e5) => {
      super[ya](e5);
    });
  }
};
var Ca = (e4, t4) => {
  let n4 = new Sa(e4), r3 = new Cn(e4.file, { mode: e4.mode || 438 });
  n4.pipe(r3), Ta(n4, t4);
};
var wa = (e4, t4) => {
  let n4 = new xa(e4), r3 = new Sn(e4.file, { mode: e4.mode || 438 });
  n4.pipe(r3);
  let i4 = new Promise((e5, t5) => {
    r3.on(`error`, t5), r3.on(`close`, e5), n4.on(`error`, t5);
  });
  return Ea(n4, t4).catch((e5) => n4.emit(`error`, e5)), i4;
};
var Ta = (e4, t4) => {
  t4.forEach((t5) => {
    t5.charAt(0) === `@` ? hi({ file: b3.resolve(e4.cwd, t5.slice(1)), sync: true, noResume: true, onReadEntry: (t6) => e4.add(t6) }) : e4.add(t5);
  }), e4.end();
};
var Ea = async (e4, t4) => {
  for (let n4 of t4) n4.charAt(0) === `@` ? await hi({ file: b3.resolve(String(e4.cwd), n4.slice(1)), noResume: true, onReadEntry: (t5) => {
    e4.add(t5);
  } }) : e4.add(n4);
  e4.end();
};
Mn(Ca, wa, (e4, t4) => {
  let n4 = new Sa(e4);
  return Ta(n4, t4), n4;
}, (e4, t4) => {
  let n4 = new xa(e4);
  return Ea(n4, t4).catch((e5) => n4.emit(`error`, e5)), n4;
}, (e4, t4) => {
  if (!(t4 == null ? void 0 : t4.length)) throw TypeError(`no paths specified to add to archive`);
});
var Da = (process.env.__FAKE_PLATFORM__ || process.platform) === `win32`;
var { O_CREAT: Oa, O_NOFOLLOW: ka, O_TRUNC: Aa, O_WRONLY: ja } = v3.constants;
var Ma = Number(process.env.__FAKE_FS_O_FILENAME__) || v3.constants.UV_FS_O_FILEMAP || 0;
var Na = Da && !!Ma;
var Pa = 512 * 1024;
var Fa = Ma | Aa | Oa | ja;
var Ia = !Da && typeof ka == `number` ? ka | Aa | Oa | ja : null;
var La = Ia === null ? Na ? (e4) => e4 < Pa ? Fa : `w` : () => `w` : () => Ia;
var Ra = (e4, t4, n4) => {
  try {
    return m3.lchownSync(e4, t4, n4);
  } catch (e5) {
    if ((e5 == null ? void 0 : e5.code) !== `ENOENT`) throw e5;
  }
};
var za = (e4, t4, n4, r3) => {
  m3.lchown(e4, t4, n4, (e5) => {
    r3(e5 && (e5 == null ? void 0 : e5.code) !== `ENOENT` ? e5 : null);
  });
};
var Ba = (e4, t4, n4, r3, i4) => {
  t4.isDirectory() ? Va(b3.resolve(e4, t4.name), n4, r3, (a4) => {
    if (a4) return i4(a4);
    za(b3.resolve(e4, t4.name), n4, r3, i4);
  }) : za(b3.resolve(e4, t4.name), n4, r3, i4);
};
var Va = (e4, t4, n4, r3) => {
  m3.readdir(e4, { withFileTypes: true }, (i4, a4) => {
    if (i4) {
      if (i4.code === `ENOENT`) return r3();
      if (i4.code !== `ENOTDIR` && i4.code !== `ENOTSUP`) return r3(i4);
    }
    if (i4 || !a4.length) return za(e4, t4, n4, r3);
    let o3 = a4.length, s3 = null, c4 = (i5) => {
      if (!s3) {
        if (i5) return r3(s3 = i5);
        if (--o3 === 0) return za(e4, t4, n4, r3);
      }
    };
    for (let r4 of a4) Ba(e4, r4, t4, n4, c4);
  });
};
var Ha = (e4, t4, n4, r3) => {
  t4.isDirectory() && Ua(b3.resolve(e4, t4.name), n4, r3), Ra(b3.resolve(e4, t4.name), n4, r3);
};
var Ua = (e4, t4, n4) => {
  let r3;
  try {
    r3 = m3.readdirSync(e4, { withFileTypes: true });
  } catch (r4) {
    let i4 = r4;
    if ((i4 == null ? void 0 : i4.code) === `ENOENT`) return;
    if ((i4 == null ? void 0 : i4.code) === `ENOTDIR` || (i4 == null ? void 0 : i4.code) === `ENOTSUP`) return Ra(e4, t4, n4);
    throw i4;
  }
  for (let i4 of r3) Ha(e4, i4, t4, n4);
  return Ra(e4, t4, n4);
};
var Wa = class extends Error {
  path;
  code;
  syscall = `chdir`;
  constructor(e4, t4) {
    super(`${t4}: Cannot cd into '${e4}'`), this.path = e4, this.code = t4;
  }
  get name() {
    return `CwdError`;
  }
};
var Ga = class extends Error {
  path;
  symlink;
  syscall = `symlink`;
  code = `TAR_SYMLINK_ERROR`;
  constructor(e4, t4) {
    super(`TAR_SYMLINK_ERROR: Cannot extract through symbolic link`), this.symlink = e4, this.path = t4;
  }
  get name() {
    return `SymlinkError`;
  }
};
var Ka = (e4, t4) => {
  m3.stat(e4, (n4, r3) => {
    (n4 || !r3.isDirectory()) && (n4 = new Wa(e4, (n4 == null ? void 0 : n4.code) || `ENOTDIR`)), t4(n4);
  });
};
var qa = (e4, t4, n4) => {
  e4 = V3(e4);
  let r3 = t4.umask ?? 18, i4 = t4.mode | 448, a4 = (i4 & r3) !== 0, o3 = t4.uid, s3 = t4.gid, c4 = typeof o3 == `number` && typeof s3 == `number` && (o3 !== t4.processUid || s3 !== t4.processGid), l4 = t4.preserve, u5 = t4.unlink, d3 = V3(t4.cwd), f3 = (t5, r4) => {
    t5 ? n4(t5) : r4 && c4 ? Va(r4, o3, s3, (e5) => f3(e5)) : a4 ? m3.chmod(e4, i4, n4) : n4();
  };
  if (e4 === d3) return Ka(e4, f3);
  if (l4) return ce2.mkdir(e4, { mode: i4, recursive: true }).then((e5) => f3(null, e5 ?? void 0), f3);
  Ja(d3, V3(b3.relative(d3, e4)).split(`/`), i4, u5, d3, void 0, f3);
};
var Ja = (e4, t4, n4, r3, i4, a4, o3) => {
  if (t4.length === 0) return o3(null, a4);
  let s3 = t4.shift(), c4 = V3(b3.resolve(e4 + `/` + s3));
  m3.mkdir(c4, n4, Ya(c4, t4, n4, r3, i4, a4, o3));
};
var Ya = (e4, t4, n4, r3, i4, a4, o3) => (s3) => {
  s3 ? m3.lstat(e4, (c4, l4) => {
    if (c4) c4.path = c4.path && V3(c4.path), o3(c4);
    else if (l4.isDirectory()) Ja(e4, t4, n4, r3, i4, a4, o3);
    else if (r3) m3.unlink(e4, (s4) => {
      if (s4) return o3(s4);
      m3.mkdir(e4, n4, Ya(e4, t4, n4, r3, i4, a4, o3));
    });
    else {
      if (l4.isSymbolicLink()) return o3(new Ga(e4, e4 + `/` + t4.join(`/`)));
      o3(s3);
    }
  }) : (a4 ||= e4, Ja(e4, t4, n4, r3, i4, a4, o3));
};
var Xa = (e4) => {
  let t4 = false, n4;
  try {
    t4 = m3.statSync(e4).isDirectory();
  } catch (e5) {
    n4 = e5 == null ? void 0 : e5.code;
  } finally {
    if (!t4) throw new Wa(e4, n4 ?? `ENOTDIR`);
  }
};
var Za = (e4, t4) => {
  e4 = V3(e4);
  let n4 = t4.umask ?? 18, r3 = t4.mode | 448, i4 = (r3 & n4) !== 0, a4 = t4.uid, o3 = t4.gid, s3 = typeof a4 == `number` && typeof o3 == `number` && (a4 !== t4.processUid || o3 !== t4.processGid), c4 = t4.preserve, l4 = t4.unlink, u5 = V3(t4.cwd), d3 = (t5) => {
    t5 && s3 && Ua(t5, a4, o3), i4 && m3.chmodSync(e4, r3);
  };
  if (e4 === u5) return Xa(u5), d3();
  if (c4) return d3(m3.mkdirSync(e4, { mode: r3, recursive: true }) ?? void 0);
  let f3 = V3(b3.relative(u5, e4)).split(`/`), p3;
  for (let e5 = f3.shift(), t5 = u5; e5 && (t5 += `/` + e5); e5 = f3.shift()) {
    t5 = V3(b3.resolve(t5));
    try {
      m3.mkdirSync(t5, r3), p3 ||= t5;
    } catch {
      let e6 = m3.lstatSync(t5);
      if (e6.isDirectory()) continue;
      if (l4) {
        m3.unlinkSync(t5), m3.mkdirSync(t5, r3), p3 ||= t5;
        continue;
      } else if (e6.isSymbolicLink()) return new Ga(t5, t5 + `/` + f3.join(`/`));
    }
  }
  return d3(p3);
};
var Qa = /* @__PURE__ */ Object.create(null);
var $a = 1e4;
var eo = /* @__PURE__ */ new Set();
var to = (e4) => {
  eo.has(e4) ? eo.delete(e4) : Qa[e4] = e4.normalize(`NFD`).toLocaleLowerCase(`en`).toLocaleUpperCase(`en`), eo.add(e4);
  let t4 = Qa[e4], n4 = eo.size - $a;
  if (n4 > $a / 10) {
    for (let e5 of eo) if (eo.delete(e5), delete Qa[e5], --n4 <= 0) break;
  }
  return t4;
};
var no = (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform) === `win32`;
var ro = (e4) => e4.split(`/`).slice(0, -1).reduce((e5, t4) => {
  let n4 = e5.at(-1);
  return n4 !== void 0 && (t4 = ie2(n4, t4)), e5.push(t4 || `/`), e5;
}, []);
var io = class {
  #e = /* @__PURE__ */ new Map();
  #t = /* @__PURE__ */ new Map();
  #n = /* @__PURE__ */ new Set();
  reserve(e4, t4) {
    e4 = no ? [`win32 parallelization disabled`] : e4.map((e5) => fi(ie2(to(e5))));
    let n4 = new Set(e4.map((e5) => ro(e5)).reduce((e5, t5) => e5.concat(t5)));
    this.#t.set(t4, { dirs: n4, paths: e4 });
    for (let n5 of e4) {
      let e5 = this.#e.get(n5);
      e5 ? e5.push(t4) : this.#e.set(n5, [t4]);
    }
    for (let e5 of n4) {
      let n5 = this.#e.get(e5);
      if (!n5) this.#e.set(e5, [/* @__PURE__ */ new Set([t4])]);
      else {
        let e6 = n5.at(-1);
        e6 instanceof Set ? e6.add(t4) : n5.push(/* @__PURE__ */ new Set([t4]));
      }
    }
    return this.#i(t4);
  }
  #r(e4) {
    let t4 = this.#t.get(e4);
    if (!t4) throw Error(`function does not have any path reservations`);
    return { paths: t4.paths.map((e5) => this.#e.get(e5)), dirs: [...t4.dirs].map((e5) => this.#e.get(e5)) };
  }
  check(e4) {
    let { paths: t4, dirs: n4 } = this.#r(e4);
    return t4.every((t5) => t5 && t5[0] === e4) && n4.every((t5) => t5 && t5[0] instanceof Set && t5[0].has(e4));
  }
  #i(e4) {
    return this.#n.has(e4) || !this.check(e4) ? false : (this.#n.add(e4), e4(() => this.#a(e4)), true);
  }
  #a(e4) {
    if (!this.#n.has(e4)) return false;
    let t4 = this.#t.get(e4);
    if (!t4) throw Error(`invalid reservation`);
    let { paths: n4, dirs: r3 } = t4, i4 = /* @__PURE__ */ new Set();
    for (let t5 of n4) {
      let n5 = this.#e.get(t5);
      if (!n5 || (n5 == null ? void 0 : n5[0]) !== e4) continue;
      let r4 = n5[1];
      if (!r4) {
        this.#e.delete(t5);
        continue;
      }
      if (n5.shift(), typeof r4 == `function`) i4.add(r4);
      else for (let e5 of r4) i4.add(e5);
    }
    for (let t5 of r3) {
      let n5 = this.#e.get(t5), r4 = n5 == null ? void 0 : n5[0];
      if (!(!n5 || !(r4 instanceof Set))) if (r4.size === 1 && n5.length === 1) {
        this.#e.delete(t5);
        continue;
      } else if (r4.size === 1) {
        n5.shift();
        let e5 = n5[0];
        typeof e5 == `function` && i4.add(e5);
      } else r4.delete(e4);
    }
    return this.#n.delete(e4), i4.forEach((e5) => this.#i(e5)), true;
  }
};
var ao = () => process.umask();
var oo = /* @__PURE__ */ Symbol(`onEntry`);
var so = /* @__PURE__ */ Symbol(`checkFs`);
var co = /* @__PURE__ */ Symbol(`checkFs2`);
var lo = /* @__PURE__ */ Symbol(`isReusable`);
var Q2 = /* @__PURE__ */ Symbol(`makeFs`);
var uo = /* @__PURE__ */ Symbol(`file`);
var fo = /* @__PURE__ */ Symbol(`directory`);
var po = /* @__PURE__ */ Symbol(`link`);
var mo = /* @__PURE__ */ Symbol(`symlink`);
var ho = /* @__PURE__ */ Symbol(`hardlink`);
var go = /* @__PURE__ */ Symbol(`ensureNoSymlink`);
var _o = /* @__PURE__ */ Symbol(`unsupported`);
var vo = /* @__PURE__ */ Symbol(`checkPath`);
var yo = /* @__PURE__ */ Symbol(`stripAbsolutePath`);
var bo = /* @__PURE__ */ Symbol(`mkdir`);
var $2 = /* @__PURE__ */ Symbol(`onError`);
var xo = /* @__PURE__ */ Symbol(`pending`);
var So = /* @__PURE__ */ Symbol(`pend`);
var Co = /* @__PURE__ */ Symbol(`unpend`);
var wo = /* @__PURE__ */ Symbol(`ended`);
var To = /* @__PURE__ */ Symbol(`maybeClose`);
var Eo = /* @__PURE__ */ Symbol(`skip`);
var Do = /* @__PURE__ */ Symbol(`doChown`);
var Oo = /* @__PURE__ */ Symbol(`uid`);
var ko = /* @__PURE__ */ Symbol(`gid`);
var Ao = /* @__PURE__ */ Symbol(`checkedCwd`);
var jo = (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform) === `win32`;
var Mo = 1024;
var No = (e4, t4) => {
  if (!jo) return m3.unlink(e4, t4);
  let n4 = e4 + `.DELETE.` + we2(16).toString(`hex`);
  m3.rename(e4, n4, (e5) => {
    if (e5) return t4(e5);
    m3.unlink(n4, t4);
  });
};
var Po = (e4) => {
  if (!jo) return m3.unlinkSync(e4);
  let t4 = e4 + `.DELETE.` + we2(16).toString(`hex`);
  m3.renameSync(e4, t4), m3.unlinkSync(t4);
};
var Fo = (e4, t4, n4) => e4 !== void 0 && e4 === e4 >>> 0 ? e4 : t4 !== void 0 && t4 === t4 >>> 0 ? t4 : n4;
var Io = class extends di {
  [wo] = false;
  [Ao] = false;
  [xo] = 0;
  reservations = new io();
  transform;
  writable = true;
  readable = false;
  uid;
  gid;
  setOwner;
  preserveOwner;
  processGid;
  processUid;
  maxDepth;
  forceChown;
  win32;
  newer;
  keep;
  noMtime;
  preservePaths;
  unlink;
  cwd;
  strip;
  processUmask;
  umask;
  dmode;
  fmode;
  chmod;
  constructor(e4 = {}) {
    var _a4;
    if (e4.ondone = () => {
      this[wo] = true, this[To]();
    }, super(e4), this.transform = e4.transform, this.chmod = !!e4.chmod, typeof e4.uid == `number` || typeof e4.gid == `number`) {
      if (typeof e4.uid != `number` || typeof e4.gid != `number`) throw TypeError(`cannot set owner without number uid and gid`);
      if (e4.preserveOwner) throw TypeError(`cannot preserve owner in archive and also set owner explicitly`);
      this.uid = e4.uid, this.gid = e4.gid, this.setOwner = true;
    } else this.uid = void 0, this.gid = void 0, this.setOwner = false;
    this.preserveOwner = e4.preserveOwner === void 0 && typeof e4.uid != `number` ? ((_a4 = process.getuid) == null ? void 0 : _a4.call(process)) === 0 : !!e4.preserveOwner, this.processUid = (this.preserveOwner || this.setOwner) && process.getuid ? process.getuid() : void 0, this.processGid = (this.preserveOwner || this.setOwner) && process.getgid ? process.getgid() : void 0, this.maxDepth = typeof e4.maxDepth == `number` ? e4.maxDepth : Mo, this.forceChown = e4.forceChown === true, this.win32 = !!e4.win32 || jo, this.newer = !!e4.newer, this.keep = !!e4.keep, this.noMtime = !!e4.noMtime, this.preservePaths = !!e4.preservePaths, this.unlink = !!e4.unlink, this.cwd = V3(b3.resolve(e4.cwd || process.cwd())), this.strip = Number(e4.strip) || 0, this.processUmask = this.chmod ? typeof e4.processUmask == `number` ? e4.processUmask : ao() : 0, this.umask = typeof e4.umask == `number` ? e4.umask : this.processUmask, this.dmode = e4.dmode || 511 & ~this.umask, this.fmode = e4.fmode || 438 & ~this.umask, this.on(`entry`, (e5) => this[oo](e5));
  }
  warn(e4, t4, n4 = {}) {
    return (e4 === `TAR_BAD_ARCHIVE` || e4 === `TAR_ABORT`) && (n4.recoverable = false), super.warn(e4, t4, n4);
  }
  [To]() {
    this[wo] && this[xo] === 0 && (this.emit(`prefinish`), this.emit(`finish`), this.emit(`end`));
  }
  [yo](e4, t4) {
    let n4 = e4[t4], { type: r3 } = e4;
    if (!n4 || this.preservePaths) return true;
    let [i4, a4] = yi(n4), o3 = a4.replaceAll(/\\/g, `/`).split(`/`);
    if (o3.includes(`..`) || jo && /^[a-z]:\.\.$/i.test(o3[0] ?? ``)) {
      if (t4 === `path` || r3 === `Link`) return this.warn(`TAR_ENTRY_ERROR`, `${t4} contains '..'`, { entry: e4, [t4]: n4 }), false;
      let i5 = b3.posix.dirname(e4.path), a5 = b3.posix.normalize(b3.posix.join(i5, o3.join(`/`)));
      if (a5.startsWith(`../`) || a5 === `..`) return this.warn(`TAR_ENTRY_ERROR`, `${t4} escapes extraction directory`, { entry: e4, [t4]: n4 }), false;
    }
    return i4 && (e4[t4] = String(a4), this.warn(`TAR_ENTRY_INFO`, `stripping ${i4} from absolute ${t4}`, { entry: e4, [t4]: n4 })), true;
  }
  [vo](e4) {
    let t4 = V3(e4.path), n4 = t4.split(`/`);
    if (this.strip) {
      if (n4.length < this.strip) return false;
      if (e4.type === `Link`) {
        let t5 = V3(String(e4.linkpath)).split(`/`);
        if (t5.length >= this.strip) e4.linkpath = t5.slice(this.strip).join(`/`);
        else return false;
      }
      n4.splice(0, this.strip), e4.path = n4.join(`/`);
    }
    if (isFinite(this.maxDepth) && n4.length > this.maxDepth) return this.warn(`TAR_ENTRY_ERROR`, `path excessively deep`, { entry: e4, path: t4, depth: n4.length, maxDepth: this.maxDepth }), false;
    if (!this[yo](e4, `path`) || !this[yo](e4, `linkpath`)) return false;
    if (e4.absolute = b3.isAbsolute(e4.path) ? V3(b3.resolve(e4.path)) : V3(b3.resolve(this.cwd, e4.path)), !this.preservePaths && typeof e4.absolute == `string` && e4.absolute.indexOf(this.cwd + `/`) !== 0 && e4.absolute !== this.cwd) return this.warn(`TAR_ENTRY_ERROR`, `path escaped extraction target`, { entry: e4, path: V3(e4.path), resolvedPath: e4.absolute, cwd: this.cwd }), false;
    if (e4.absolute === this.cwd && e4.type !== `Directory` && e4.type !== `GNUDumpDir`) return false;
    if (this.win32) {
      let { root: t5 } = b3.win32.parse(String(e4.absolute));
      e4.absolute = t5 + wi(String(e4.absolute).slice(t5.length));
      let { root: n5 } = b3.win32.parse(e4.path);
      e4.path = n5 + wi(e4.path.slice(n5.length));
    }
    return true;
  }
  [oo](e4) {
    if (!this[vo](e4)) return e4.resume();
    switch (Ce2.equal(typeof e4.absolute, `string`), e4.type) {
      case `Directory`:
      case `GNUDumpDir`:
        e4.mode && (e4.mode |= 448);
      case `File`:
      case `OldFile`:
      case `ContiguousFile`:
      case `Link`:
      case `SymbolicLink`:
        return this[so](e4);
      default:
        return this[_o](e4);
    }
  }
  [$2](e4, t4) {
    e4.name === `CwdError` ? this.emit(`error`, e4) : (this.warn(`TAR_ENTRY_ERROR`, e4, { entry: t4 }), this[Co](), t4.resume());
  }
  [bo](e4, t4, n4) {
    qa(V3(e4), { uid: this.uid, gid: this.gid, processUid: this.processUid, processGid: this.processGid, umask: this.processUmask, preserve: this.preservePaths, unlink: this.unlink, cwd: this.cwd, mode: t4 }, n4);
  }
  [Do](e4) {
    return this.forceChown || this.preserveOwner && (typeof e4.uid == `number` && e4.uid !== this.processUid || typeof e4.gid == `number` && e4.gid !== this.processGid) || typeof this.uid == `number` && this.uid !== this.processUid || typeof this.gid == `number` && this.gid !== this.processGid;
  }
  [Oo](e4) {
    return Fo(this.uid, e4.uid, this.processUid);
  }
  [ko](e4) {
    return Fo(this.gid, e4.gid, this.processGid);
  }
  [uo](e4, t4) {
    let n4 = typeof e4.mode == `number` ? e4.mode & 4095 : this.fmode, r3 = new Sn(String(e4.absolute), { flags: La(e4.size), mode: n4, autoClose: false });
    r3.on(`error`, (n5) => {
      r3.fd && m3.close(r3.fd, () => {
      }), r3.write = () => true, this[$2](n5, e4), t4();
    });
    let i4 = 1, a4 = (n5) => {
      if (n5) {
        r3.fd && m3.close(r3.fd, () => {
        }), this[$2](n5, e4), t4();
        return;
      }
      --i4 === 0 && r3.fd !== void 0 && m3.close(r3.fd, (n6) => {
        n6 ? this[$2](n6, e4) : this[Co](), t4();
      });
    };
    r3.on(`finish`, () => {
      let t5 = String(e4.absolute), n5 = r3.fd;
      if (typeof n5 == `number` && e4.mtime && !this.noMtime) {
        i4++;
        let r4 = e4.atime || /* @__PURE__ */ new Date(), o4 = e4.mtime;
        m3.futimes(n5, r4, o4, (e5) => e5 ? m3.utimes(t5, r4, o4, (t6) => a4(t6 && e5)) : a4());
      }
      if (typeof n5 == `number` && this[Do](e4)) {
        i4++;
        let r4 = this[Oo](e4), o4 = this[ko](e4);
        typeof r4 == `number` && typeof o4 == `number` && m3.fchown(n5, r4, o4, (e5) => e5 ? m3.chown(t5, r4, o4, (t6) => a4(t6 && e5)) : a4());
      }
      a4();
    });
    let o3 = this.transform && this.transform(e4) || e4;
    o3 !== e4 && (o3.on(`error`, (n5) => {
      this[$2](n5, e4), t4();
    }), e4.pipe(o3)), o3.pipe(r3);
  }
  [fo](e4, t4) {
    let n4 = typeof e4.mode == `number` ? e4.mode & 4095 : this.dmode;
    this[bo](String(e4.absolute), n4, (n5) => {
      if (n5) {
        this[$2](n5, e4), t4();
        return;
      }
      let r3 = 1, i4 = () => {
        --r3 === 0 && (t4(), this[Co](), e4.resume());
      };
      e4.mtime && !this.noMtime && (r3++, m3.utimes(String(e4.absolute), e4.atime || /* @__PURE__ */ new Date(), e4.mtime, i4)), this[Do](e4) && (r3++, m3.chown(String(e4.absolute), Number(this[Oo](e4)), Number(this[ko](e4)), i4)), i4();
    });
  }
  [_o](e4) {
    e4.unsupported = true, this.warn(`TAR_ENTRY_UNSUPPORTED`, `unsupported entry type: ${e4.type}`, { entry: e4 }), e4.resume();
  }
  [mo](e4, t4) {
    let n4 = V3(b3.relative(this.cwd, b3.resolve(b3.dirname(String(e4.absolute)), String(e4.linkpath)))).split(`/`);
    this[go](e4, this.cwd, n4, () => this[po](e4, String(e4.linkpath), `symlink`, t4), (n5) => {
      this[$2](n5, e4), t4();
    });
  }
  [ho](e4, t4) {
    let n4 = V3(b3.resolve(this.cwd, String(e4.linkpath))), r3 = V3(String(e4.linkpath)).split(`/`);
    this[go](e4, this.cwd, r3, () => this[po](e4, n4, `link`, t4), (n5) => {
      this[$2](n5, e4), t4();
    });
  }
  [go](e4, t4, n4, r3, i4) {
    let a4 = n4.shift();
    if (this.preservePaths || a4 === void 0) return r3();
    let o3 = b3.resolve(t4, a4);
    m3.lstat(o3, (t5, a5) => {
      if (t5) return r3();
      if (a5 == null ? void 0 : a5.isSymbolicLink()) return i4(new Ga(o3, b3.resolve(o3, n4.join(`/`))));
      this[go](e4, o3, n4, r3, i4);
    });
  }
  [So]() {
    this[xo]++;
  }
  [Co]() {
    this[xo]--, this[To]();
  }
  [Eo](e4) {
    this[Co](), e4.resume();
  }
  [lo](e4, t4) {
    return e4.type === `File` && !this.unlink && t4.isFile() && t4.nlink <= 1 && !jo;
  }
  [so](e4) {
    this[So]();
    let t4 = [e4.path];
    e4.linkpath && t4.push(e4.linkpath), this.reservations.reserve(t4, (t5) => this[co](e4, t5));
  }
  [co](e4, t4) {
    let n4 = (e5) => {
      t4(e5);
    }, r3 = () => {
      this[bo](this.cwd, this.dmode, (t5) => {
        if (t5) {
          this[$2](t5, e4), n4();
          return;
        }
        this[Ao] = true, i4();
      });
    }, i4 = () => {
      if (e4.absolute !== this.cwd) {
        let t5 = V3(b3.dirname(String(e4.absolute)));
        if (t5 !== this.cwd) return this[bo](t5, this.dmode, (t6) => {
          if (t6) {
            this[$2](t6, e4), n4();
            return;
          }
          a4();
        });
      }
      a4();
    }, a4 = () => {
      m3.lstat(String(e4.absolute), (t5, r4) => {
        if (r4 && (this.keep || this.newer && r4.mtime > (e4.mtime ?? r4.mtime))) {
          this[Eo](e4), n4();
          return;
        }
        if (t5 || this[lo](e4, r4)) return this[Q2](null, e4, n4);
        if (r4.isDirectory()) {
          if (e4.type === `Directory`) {
            let t6 = this.chmod && e4.mode && (r4.mode & 4095) !== e4.mode, i5 = (t7) => this[Q2](t7 ?? null, e4, n4);
            return t6 ? m3.chmod(String(e4.absolute), Number(e4.mode), i5) : i5();
          }
          if (e4.absolute !== this.cwd) return m3.rmdir(String(e4.absolute), (t6) => this[Q2](t6 ?? null, e4, n4));
        }
        if (e4.absolute === this.cwd) return this[Q2](null, e4, n4);
        No(String(e4.absolute), (t6) => this[Q2](t6 ?? null, e4, n4));
      });
    };
    this[Ao] ? i4() : r3();
  }
  [Q2](e4, t4, n4) {
    if (e4) {
      this[$2](e4, t4), n4();
      return;
    }
    switch (t4.type) {
      case `File`:
      case `OldFile`:
      case `ContiguousFile`:
        return this[uo](t4, n4);
      case `Link`:
        return this[ho](t4, n4);
      case `SymbolicLink`:
        return this[mo](t4, n4);
      case `Directory`:
      case `GNUDumpDir`:
        return this[fo](t4, n4);
    }
  }
  [po](e4, t4, n4, r3) {
    m3[n4](t4, String(e4.absolute), (t5) => {
      t5 ? this[$2](t5, e4) : (this[Co](), e4.resume()), r3();
    });
  }
};
var Lo = (e4) => {
  try {
    return [null, e4()];
  } catch (e5) {
    return [e5, null];
  }
};
var Ro = class extends Io {
  sync = true;
  [Q2](e4, t4) {
    return super[Q2](e4, t4, () => {
    });
  }
  [so](e4) {
    if (!this[Ao]) {
      let t5 = this[bo](this.cwd, this.dmode);
      if (t5) return this[$2](t5, e4);
      this[Ao] = true;
    }
    if (e4.absolute !== this.cwd) {
      let t5 = V3(b3.dirname(String(e4.absolute)));
      if (t5 !== this.cwd) {
        let n5 = this[bo](t5, this.dmode);
        if (n5) return this[$2](n5, e4);
      }
    }
    let [t4, n4] = Lo(() => m3.lstatSync(String(e4.absolute)));
    if (n4 && (this.keep || this.newer && n4.mtime > (e4.mtime ?? n4.mtime))) return this[Eo](e4);
    if (t4 || this[lo](e4, n4)) return this[Q2](null, e4);
    if (n4.isDirectory()) {
      if (e4.type === `Directory`) {
        let [t6] = this.chmod && e4.mode && (n4.mode & 4095) !== e4.mode ? Lo(() => {
          m3.chmodSync(String(e4.absolute), Number(e4.mode));
        }) : [];
        return this[Q2](t6, e4);
      }
      let [t5] = Lo(() => m3.rmdirSync(String(e4.absolute)));
      this[Q2](t5, e4);
    }
    let [r3] = e4.absolute === this.cwd ? [] : Lo(() => Po(String(e4.absolute)));
    this[Q2](r3, e4);
  }
  [uo](e4, t4) {
    let n4 = typeof e4.mode == `number` ? e4.mode & 4095 : this.fmode, r3 = (n5) => {
      let r4;
      try {
        m3.closeSync(i4);
      } catch (e5) {
        r4 = e5;
      }
      (n5 || r4) && this[$2](n5 || r4, e4), t4();
    }, i4;
    try {
      i4 = m3.openSync(String(e4.absolute), La(e4.size), n4);
    } catch (e5) {
      return r3(e5);
    }
    let a4 = this.transform && this.transform(e4) || e4;
    a4 !== e4 && (a4.on(`error`, (t5) => this[$2](t5, e4)), e4.pipe(a4)), a4.on(`data`, (e5) => {
      try {
        m3.writeSync(i4, e5, 0, e5.length);
      } catch (e6) {
        r3(e6);
      }
    }), a4.on(`end`, () => {
      let t5 = null;
      if (e4.mtime && !this.noMtime) {
        let n5 = e4.atime || /* @__PURE__ */ new Date(), r4 = e4.mtime;
        try {
          m3.futimesSync(i4, n5, r4);
        } catch (i5) {
          try {
            m3.utimesSync(String(e4.absolute), n5, r4);
          } catch {
            t5 = i5;
          }
        }
      }
      if (this[Do](e4)) {
        let n5 = this[Oo](e4), r4 = this[ko](e4);
        try {
          m3.fchownSync(i4, Number(n5), Number(r4));
        } catch (i5) {
          try {
            m3.chownSync(String(e4.absolute), Number(n5), Number(r4));
          } catch {
            t5 ||= i5;
          }
        }
      }
      r3(t5);
    });
  }
  [fo](e4, t4) {
    let n4 = typeof e4.mode == `number` ? e4.mode & 4095 : this.dmode, r3 = this[bo](String(e4.absolute), n4);
    if (r3) {
      this[$2](r3, e4), t4();
      return;
    }
    if (e4.mtime && !this.noMtime) try {
      m3.utimesSync(String(e4.absolute), e4.atime || /* @__PURE__ */ new Date(), e4.mtime);
    } catch {
    }
    if (this[Do](e4)) try {
      m3.chownSync(String(e4.absolute), Number(this[Oo](e4)), Number(this[ko](e4)));
    } catch {
    }
    t4(), e4.resume();
  }
  [bo](e4, t4) {
    try {
      return Za(V3(e4), { uid: this.uid, gid: this.gid, processUid: this.processUid, processGid: this.processGid, umask: this.processUmask, preserve: this.preservePaths, unlink: this.unlink, cwd: this.cwd, mode: t4 });
    } catch (e5) {
      return e5;
    }
  }
  [go](e4, t4, n4, r3, i4) {
    if (this.preservePaths || n4.length === 0) return r3();
    let a4 = t4;
    for (let e5 of n4) {
      a4 = b3.resolve(a4, e5);
      let [o3, s3] = Lo(() => m3.lstatSync(a4));
      if (o3) return r3();
      if (s3.isSymbolicLink()) return i4(new Ga(a4, b3.resolve(t4, n4.join(`/`))));
    }
    r3();
  }
  [po](e4, t4, n4, r3) {
    let i4 = `${n4}Sync`;
    try {
      m3[i4](t4, String(e4.absolute)), r3(), e4.resume();
    } catch (t5) {
      return this[$2](t5, e4);
    }
  }
};
var zo = Mn((e4) => {
  let t4 = new Ro(e4), n4 = e4.file, r3 = m3.statSync(n4);
  new xn(n4, { readSize: e4.maxReadSize || 16 * 1024 * 1024, size: r3.size }).pipe(t4);
}, (e4, t4) => {
  let n4 = new Io(e4), r3 = e4.maxReadSize || 16 * 1024 * 1024, i4 = e4.file;
  return new Promise((e5, t5) => {
    n4.on(`error`, t5), n4.on(`close`, e5), m3.stat(i4, (e6, a4) => {
      if (e6) t5(e6);
      else {
        let e7 = new bn(i4, { readSize: r3, size: a4.size });
        e7.on(`error`, t5), e7.pipe(n4);
      }
    });
  });
}, (e4) => new Ro(e4), (e4) => new Io(e4), (e4, t4) => {
  (t4 == null ? void 0 : t4.length) && mi(e4, t4);
});
var Bo = (e4, t4) => {
  let n4 = new Sa(e4), r3 = true, i4, a4;
  try {
    try {
      i4 = m3.openSync(e4.file, `r+`);
    } catch (t5) {
      if ((t5 == null ? void 0 : t5.code) === `ENOENT`) i4 = m3.openSync(e4.file, `w+`);
      else throw t5;
    }
    let o3 = m3.fstatSync(i4), s3 = Buffer.alloc(512);
    t: for (a4 = 0; a4 < o3.size; a4 += 512) {
      for (let e5 = 0, t6 = 0; e5 < 512; e5 += t6) {
        if (t6 = m3.readSync(i4, s3, e5, s3.length - e5, a4 + e5), a4 === 0 && s3[0] === 31 && s3[1] === 139) throw Error(`cannot append to compressed archives`);
        if (!t6) break t;
      }
      let t5 = new dr(s3);
      if (!t5.cksumValid) break;
      let n5 = 512 * Math.ceil((t5.size || 0) / 512);
      if (a4 + n5 + 512 > o3.size) break;
      a4 += n5, e4.mtimeCache && t5.mtime && e4.mtimeCache.set(String(t5.path), t5.mtime);
    }
    r3 = false, Vo(e4, n4, a4, i4, t4);
  } finally {
    if (r3) try {
      m3.closeSync(i4);
    } catch {
    }
  }
};
var Vo = (e4, t4, n4, r3, i4) => {
  let a4 = new Cn(e4.file, { fd: r3, start: n4 });
  t4.pipe(a4), Uo(t4, i4);
};
var Ho = (e4, t4) => {
  t4 = Array.from(t4);
  let n4 = new xa(e4), r3 = (t5, n5, r4) => {
    let i4 = (e5, n6) => {
      e5 ? m3.close(t5, (t6) => r4(e5)) : r4(null, n6);
    }, a4 = 0;
    if (n5 === 0) return i4(null, 0);
    let o3 = 0, s3 = Buffer.alloc(512), c4 = (r5, l4) => {
      if (r5 || l4 === void 0) return i4(r5);
      if (o3 += l4, o3 < 512 && l4) return m3.read(t5, s3, o3, s3.length - o3, a4 + o3, c4);
      if (a4 === 0 && s3[0] === 31 && s3[1] === 139) return i4(Error(`cannot append to compressed archives`));
      if (o3 < 512) return i4(null, a4);
      let u5 = new dr(s3);
      if (!u5.cksumValid) return i4(null, a4);
      let d3 = 512 * Math.ceil((u5.size ?? 0) / 512);
      if (a4 + d3 + 512 > n5 || (a4 += d3 + 512, a4 >= n5)) return i4(null, a4);
      e4.mtimeCache && u5.mtime && e4.mtimeCache.set(String(u5.path), u5.mtime), o3 = 0, m3.read(t5, s3, 0, 512, a4, c4);
    };
    m3.read(t5, s3, 0, 512, a4, c4);
  };
  return new Promise((i4, a4) => {
    n4.on(`error`, a4);
    let o3 = `r+`, s3 = (c4, l4) => {
      if (c4 && c4.code === `ENOENT` && o3 === `r+`) return o3 = `w+`, m3.open(e4.file, o3, s3);
      if (c4 || !l4) return a4(c4);
      m3.fstat(l4, (o4, s4) => {
        if (o4) return m3.close(l4, () => a4(o4));
        r3(l4, s4.size, (r4, o5) => {
          if (r4) return a4(r4);
          let s5 = new Sn(e4.file, { fd: l4, start: o5 });
          n4.pipe(s5), s5.on(`error`, a4), s5.on(`close`, i4), Wo(n4, t4);
        });
      });
    };
    m3.open(e4.file, o3, s3);
  });
};
var Uo = (e4, t4) => {
  t4.forEach((t5) => {
    t5.charAt(0) === `@` ? hi({ file: b3.resolve(e4.cwd, t5.slice(1)), sync: true, noResume: true, onReadEntry: (t6) => e4.add(t6) }) : e4.add(t5);
  }), e4.end();
};
var Wo = async (e4, t4) => {
  for (let n4 of t4) n4.charAt(0) === `@` ? await hi({ file: b3.resolve(String(e4.cwd), n4.slice(1)), noResume: true, onReadEntry: (t5) => e4.add(t5) }) : e4.add(n4);
  e4.end();
};
var Go = Mn(Bo, Ho, () => {
  throw TypeError(`file is required`);
}, () => {
  throw TypeError(`file is required`);
}, (e4, t4) => {
  if (!kn(e4)) throw TypeError(`file is required`);
  if (e4.gzip || e4.brotli || e4.zstd || e4.file.endsWith(`.br`) || e4.file.endsWith(`.tbr`)) throw TypeError(`cannot append to compressed archives`);
  if (!(t4 == null ? void 0 : t4.length)) throw TypeError(`no paths specified to add/replace`);
});
Mn(Go.syncFile, Go.asyncFile, Go.syncNoFile, Go.asyncNoFile, (e4, t4 = []) => {
  var _a4;
  (_a4 = Go.validate) == null ? void 0 : _a4.call(Go, e4, t4), Ko(e4);
});
var Ko = (e4) => {
  let t4 = e4.filter;
  e4.mtimeCache ||= /* @__PURE__ */ new Map(), e4.filter = t4 ? (n4, r3) => {
    var _a4;
    return t4(n4, r3) && !((((_a4 = e4.mtimeCache) == null ? void 0 : _a4.get(n4)) ?? r3.mtime ?? 0) > (r3.mtime ?? 0));
  } : (t5, n4) => {
    var _a4;
    return !((((_a4 = e4.mtimeCache) == null ? void 0 : _a4.get(t5)) ?? n4.mtime ?? 0) > (n4.mtime ?? 0));
  };
};
function qo(e4) {
  return M(b3.join(e4, `map.json`)) || {};
}
async function Jo(e4, t4, n4, r3) {
  let i4 = new Map(Object.entries(r3)), o3 = M(b3.join(e4, `access.json`)) || {};
  o3[t4.ref] = (/* @__PURE__ */ new Date()).toISOString(), await _e2(b3.join(e4, `access.json`), JSON.stringify(o3, null, `  `));
  let s3 = i4.get(t4.ref);
  if (s3 !== n4) {
    if (i4.set(t4.ref, n4), s3 && ![...i4.values()].includes(s3)) try {
      await ge2(b3.join(e4, `${s3}.tar.gz`), { force: true, recursive: true });
    } catch {
    }
    await _e2(b3.join(e4, `map.json`), JSON.stringify(Object.fromEntries(i4), null, `  `));
  }
}
async function Yo(e4, t4, n4) {
  let r3 = e4.cache ? e4.getHashFromCache(e4.repo, t4) : await e4.getHash(e4.repo, t4);
  if (r3) return r3;
  if (e4.repo.transport === `ssh`) {
    e4.warn({ message: `tar lookup failed; falling back to git clone` }), await e4.cloneWithGit(n4);
    return;
  }
  throw new k(`could not find commit hash for ${e4.repo.ref}`, { code: `MISSING_REF`, ref: e4.repo.ref });
}
async function Xo(e4, t4, n4) {
  return { file: b3.join(e4, `${n4}.tar.gz`), subdir: null, url: Fe2[t4.site](t4, n4), workDir: await pe2(b3.join(e4, `extract-`)) };
}
async function Zo(e4, t4) {
  var _a4;
  let n4 = (_a4 = e4.repo.subdir) == null ? void 0 : _a4.split(`/`).filter(Boolean).join(`/`);
  if (!n4) return;
  let r3 = [];
  try {
    await es(e4, t4, async () => {
      r3.length = 0;
      let e5;
      if (await hi({ file: t4.file, onReadEntry: (e6) => {
        r3.push(e6.path);
      }, onwarn: (t5, n5) => {
        t5 === `TAR_BAD_ARCHIVE` && (e5 = Error(n5), e5.code = t5);
      } }), e5) throw e5;
    });
  } catch (e5) {
    throw new k(`could not inspect ${t4.url}`, { code: `COULD_NOT_DOWNLOAD`, url: t4.url, original: e5 });
  }
  let i4 = [...new Set(r3.map((e5) => e5.split(`/`)[0]))];
  for (let e5 of i4) {
    let i5 = `${e5}/${n4}`, a4 = `${i5}/`;
    if (r3.some((e6) => {
      let t5 = e6.replace(/\/$/u, ``);
      return t5 === i5 || t5.startsWith(a4);
    })) {
      t4.subdir = i5;
      return;
    }
  }
  throw new k(`could not find subdirectory /${n4} in archive`, { code: `MISSING_SUBDIR`, subdir: `/${n4}` });
}
async function Qo(e4, t4) {
  if (!e4.cache) {
    try {
      await le2(t4.file, ue2.F_OK), e4.verboseInfo({ code: `FILE_EXISTS`, message: `${t4.file} already exists locally` });
      return;
    } catch {
    }
    N(b3.dirname(t4.file)), e4.proxy && e4.verboseInfo({ code: `PROXY`, message: `using proxy ${e4.proxy}` }), e4.verboseInfo({ code: `DOWNLOADING`, message: `downloading ${t4.url} to ${t4.file}` });
    try {
      await e4.fetch(t4.url, t4.file, e4.proxy);
    } catch (e5) {
      throw new k(`could not download ${t4.url}`, { code: `COULD_NOT_DOWNLOAD`, url: t4.url, original: e5 });
    }
  }
}
async function $o(e4, t4, n4) {
  try {
    e4.verboseInfo({ code: `EXTRACTING`, message: `extracting ${t4.subdir ? `${e4.repo.subdir} from ` : ``}${t4.file} to ${t4.workDir}` });
    let [r3, i4] = t4.subdir ? [t4.subdir.split(`/`).length, [t4.subdir]] : [1, []];
    await es(e4, t4, () => zo({ C: t4.workDir, file: t4.file, strip: r3 }, i4));
    let a4 = await ns(t4.workDir);
    return a4 || (N(n4), await rs(t4.workDir, n4)), a4;
  } catch (e5) {
    throw new k(`could not download ${t4.url}`, { code: `COULD_NOT_DOWNLOAD`, url: t4.url, original: e5 });
  } finally {
    await ge2(t4.workDir, { force: true, recursive: true });
  }
}
async function es(e4, t4, n4) {
  try {
    await n4();
  } catch (r3) {
    let i4 = r3.code;
    if (!(typeof i4 == `string` && /^(TAR_BAD_ARCHIVE|TAR_ABORT|ZLIB_ERROR|Z_(BUF|DATA|STREAM|MEM|VERSION)_ERROR)$/u.test(i4)) || e4.cache) throw r3;
    try {
      await ge2(t4.file, { force: true, recursive: true });
    } catch {
    }
    await e4.fetch(t4.url, t4.file, e4.proxy), await n4();
  }
}
async function ts(e4, t4, n4) {
  let r3 = qo(t4), i4 = await Yo(e4, r3, n4);
  if (!i4) return;
  N(t4);
  let a4 = await Xo(t4, e4.repo, i4);
  await Qo(e4, a4), e4.repo.subdir && await Zo(e4, a4), await $o(e4, a4, n4) && (e4.warn({ message: `git lfs pointer detected in tar snapshot; falling back to git clone` }), await e4.cloneWithGit(n4)), await Jo(t4, e4.repo, i4, r3);
}
async function ns(e4) {
  let t4 = (await he2(e4, { withFileTypes: true })).map(async (t5) => {
    let n4 = b3.join(e4, t5.name);
    if (t5.isDirectory()) return ns(n4);
    if (!t5.isFile()) return false;
    let r3 = await me2(n4, `utf8`);
    return /^version https:\/\/git-lfs\.github\.com\/spec\/v1$/mu.test(r3) && /^oid sha256:[0-9a-f]{64}$/mu.test(r3) && /^size \d+$/mu.test(r3);
  });
  return (await Promise.all(t4)).some(Boolean);
}
async function rs(e4, t4) {
  let n4 = await he2(e4, { withFileTypes: true });
  await Promise.all(n4.map(async (n5) => {
    await de2(b3.join(e4, n5.name), b3.join(t4, n5.name), { recursive: true });
  }));
}
var is = /* @__PURE__ */ new Set([`tar`, `git`]);
function as(e4, t4, n4, r3) {
  let i4 = r3 === `.` ? `` : ` to ${r3}`;
  return `cloned ${S3(`${e4}/${t4}`)}#${S3(n4)}${i4}`;
}
var os2 = class t3 extends se2 {
  aliases;
  cache;
  files;
  force;
  mode;
  verbose;
  proxy;
  repo;
  fetch;
  git;
  gitClientPromise;
  src;
  constructor(t4, n4 = {}) {
    if (super(), n4.mode && !is.has(n4.mode)) throw Error(`Valid modes are ${[...is].join(`, `)}`);
    if (this.aliases = n4.aliases ?? {}, this.cache = n4.cache, this.files = n4.files, this.force = n4.force, this.verbose = n4.verbose, this.proxy = process.env.https_proxy, t4 === void 0) this.mode = n4.mode ?? `tar`;
    else {
      let e4 = Ke2(this.aliases, t4) ?? t4;
      if (typeof e4 != `string` || e4 === ``) throw new k(`source must not be empty`, { code: `BAD_SRC` });
      this.src = e4, this.repo = Ve2(e4), this.mode = n4.mode ?? this.repo.mode, this.repo = { ...this.repo, mode: this.mode };
    }
    this.fetch = n4.fetch || P, this.git = n4.git, this.info = this.info.bind(this), this.warn = this.warn.bind(this), this.verboseInfo = this.verboseInfo.bind(this);
  }
  getGitClient() {
    return this.git ? Promise.resolve(this.git) : (this.gitClientPromise ||= Promise.resolve().then(() => (init_client_8slZtdoy(), client_8slZtdoy_exports)).then(({ defaultGitClient: e4 }) => (this.git = e4, e4)), this.gitClientPromise);
  }
  getDirectives(e4) {
    return $e2(e4);
  }
  async clone(e4) {
    if (!this.repo) throw new k(`clone() requires a source`, { code: `MISSING_SRC` });
    et2(e4, this.force, this.info, this.verboseInfo), await this.cloneToDestination(e4), at2(e4, this.files, this.warn), this.info({ code: `SUCCESS`, dest: e4, message: as(this.repo.user, this.repo.name, this.repo.ref, e4), repo: this.repo }), await this.runDirectives(e4);
  }
  remove(e4, t4) {
    nt2(e4, t4, this.info, this.warn);
  }
  info(e4) {
    this.emit(`info`, e4);
  }
  warn(e4) {
    this.emit(`warn`, e4);
  }
  verboseInfo(e4) {
    this.verbose && this.info(e4);
  }
  async getHash(e4, t4) {
    try {
      let t5 = await (await this.getGitClient()).fetchRefs(e4);
      return e4.ref === `HEAD` ? this.selectHead(t5) : this.selectRef(t5, e4.ref);
    } catch (n4) {
      this.warn(n4);
      let r3 = n4.original;
      return r3 && this.verboseInfo(r3), this.getHashFromCache(e4, t4);
    }
  }
  getHashFromCache(e4, t4) {
    if (e4.ref in t4) {
      let n4 = t4[e4.ref];
      return this.info({ code: `USING_CACHE`, message: `using cached commit hash ${n4}` }), n4;
    }
  }
  selectRef(e4, t4) {
    for (let n4 of e4) if (n4.name === t4) return this.verboseInfo({ code: `FOUND_MATCH`, message: `found matching commit hash: ${n4.hash}` }), n4.hash;
    if (t4.length < 8) return null;
    for (let n4 of e4) if (n4.hash.startsWith(t4)) return n4.hash;
  }
  selectHead(e4) {
    var _a4;
    let t4 = e4.find((e5) => e5.type === `HEAD`);
    if (t4) return t4.hash;
    for (let t5 of [`main`, `master`]) {
      let n4 = e4.find((e5) => e5.type === `HEAD` || !e5.name ? false : e5.name === t5 || e5.name.endsWith(`/${t5}`));
      if (n4) return n4.hash;
    }
    return (_a4 = e4.find((e5) => e5.type === `branch` && e5.hash)) == null ? void 0 : _a4.hash;
  }
  getRepo() {
    if (!this.repo) throw new k(`operation requires a source`, { code: `MISSING_SRC` });
    return this.repo;
  }
  async cloneWithTar(e4) {
    let t4 = this.getRepo();
    await ts({ cache: this.cache, cloneWithGit: (e5, t5) => this.cloneWithGit(e5, t5), fetch: this.fetch, getHash: (e5, t5) => this.getHash(e5, t5), getHashFromCache: (e5, t5) => this.getHashFromCache(e5, t5), proxy: this.proxy, repo: t4, verboseInfo: this.verboseInfo, warn: this.warn }, this.getRepoDir(), e4);
  }
  async cloneWithGit(e4, t4) {
    let n4 = this.getRepo();
    await (await this.getGitClient()).clone(n4, e4, t4 ?? n4.ref, n4.transport);
  }
  async cloneGitToDestination(e4, t4) {
    let n4 = this.getRepo();
    if (n4.subdir) {
      let r3 = await pe2(`degit-git-`);
      try {
        await this.cloneWithGit(r3, t4), ot2(r3, e4, n4.subdir);
      } finally {
        await ge2(r3, { force: true, recursive: true });
      }
      return;
    }
    await this.cloneWithGit(e4, t4);
  }
  shouldFallbackToGit(e4) {
    return !e4 || typeof e4 != `object` ? false : e4.code === `COULD_NOT_DOWNLOAD` && !this.cache;
  }
  getRepoDir() {
    let e4 = this.getRepo();
    return b3.join(V, e4.site, e4.user, e4.name);
  }
  async doCloneToDestination(e4) {
    let t4 = this.getRepo();
    if (this.mode === `git`) {
      let n4 = await this.getHash(t4, {});
      await this.cloneGitToDestination(e4, n4 || t4.ref);
      return;
    }
    try {
      await this.cloneWithTar(e4);
    } catch (t5) {
      if (!this.shouldFallbackToGit(t5)) throw t5;
      this.warn({ message: `tar snapshot download or extraction failed; falling back to git clone` }), await this.cloneGitToDestination(e4);
    }
  }
  async cloneToDestination(e4) {
    let t4 = this.getRepo();
    t4.site === `gitlab` ? await this.tryGitlabProject(He2(this.src, t4), e4, t4) : await this.doCloneToDestination(e4);
  }
  async tryGitlabProject(e4, t4, n4, r3) {
    let [i4, ...a4] = e4;
    if (i4) {
      this.repo = i4, this.verboseInfo({ message: `trying GitLab project path ${i4.url}` });
      try {
        await this.doCloneToDestination(t4);
      } catch (e5) {
        this.repo = n4;
        let o3 = e5.code;
        if (e5 instanceof k && (o3 === `MISSING_REF` || o3 === `COULD_NOT_FETCH`)) this.warn({ message: `GitLab project path ${i4.url} not found; trying next` }), await this.tryGitlabProject(a4, t4, n4, r3 ?? e5);
        else throw e5;
      }
    } else throw r3 ?? new k(`could not find a valid GitLab project path`, { code: `COULD_NOT_FETCH` });
  }
  async runDirectives(e4) {
    let t4 = this.getDirectives(e4);
    t4 && await this.doActions(t4, e4);
  }
  async getActionsStagingDir() {
    return await fe2(V, { recursive: true }), pe2(b3.join(V, `actions-`));
  }
  async doActions(e4, n4) {
    if (!Array.isArray(e4)) throw new k(`directives must be an array`, { code: `BAD_DIRECTIVES` });
    let r3 = { aliases: this.aliases, cache: this.cache, fetch: this.fetch, getGitClient: () => this.getGitClient(), getStagingDir: async () => r3.stagingDir ??= await this.getActionsStagingDir(), hasStashed: false, info: this.info, verbose: this.verbose, warn: this.warn };
    try {
      await pt2(r3, e4, n4, (e5, n5) => new t3(e5, n5));
    } finally {
      r3.stagingDir && (r3.hasStashed ? this.warn({ message: `actions staging left for recovery: ${r3.stagingDir}`, recoveryPath: r3.stagingDir }) : await ge2(r3.stagingDir, { force: true, recursive: true }).catch((e5) => this.warn({ message: `could not remove actions staging: ${r3.stagingDir}`, original: e5 })));
    }
  }
};
function ss(e4, t4 = {}) {
  return new os2(e4, t4);
}

// bin/index.js
import path from "path";
import fs from "fs/promises";
import fsSync from "fs";
import { fileURLToPath } from "url";
var GITHUB_REPO = "MaxamedAweis90/ugaas-templates";
function handleCancel(value) {
  if (isCancel(value)) {
    cancel(import_picocolors.default.yellow("Scaffolding cancelled."));
    process.exit(0);
  }
}
var ProgressEngine = class {
  constructor() {
    this.activeSpinner = null;
  }
  /**
   * Start a step spinner
   * @param {number} current
   * @param {number} total
   * @param {string} title
   */
  startStep(current, total, title) {
    const text2 = import_picocolors.default.bold(`[${current}/${total}]`) + ` ${title}`;
    this.activeSpinner = ora({
      text: text2,
      color: "cyan",
      spinner: "dots"
    }).start();
    return this.activeSpinner;
  }
  /**
   * Complete current step with success
   * @param {string} [message]
   */
  succeedStep(message) {
    if (this.activeSpinner) {
      if (message) {
        this.activeSpinner.succeed(import_picocolors.default.green(message));
      } else {
        this.activeSpinner.succeed();
      }
      this.activeSpinner = null;
    }
  }
  /**
   * Fail current step with error
   * @param {string} message
   */
  failStep(message) {
    if (this.activeSpinner) {
      this.activeSpinner.fail(import_picocolors.default.red(message));
      this.activeSpinner = null;
    }
  }
  /**
   * Log and spin for component downloads (structured for future component injections)
   * @param {string} componentName
   */
  downloadComponent(componentName) {
    const text2 = `Downloading component: ${import_picocolors.default.bold(import_picocolors.default.magenta(componentName))}...`;
    const spinner = ora({
      text: text2,
      color: "magenta",
      spinner: "dots"
    }).start();
    return {
      succeed: (msg = `Downloaded component: ${componentName}`) => spinner.succeed(import_picocolors.default.green(msg)),
      fail: (msg = `Failed downloading component: ${componentName}`) => spinner.fail(import_picocolors.default.red(msg))
    };
  }
};
async function main() {
  if (process.argv.includes("--help") || process.argv.includes("-h")) {
    console.log();
    intro(
      import_picocolors.default.bgCyan(import_picocolors.default.black(" create-ugaas-app ")) + " " + import_picocolors.default.cyan("\u{1F680} Modern fullstack starter generator")
    );
    console.log(import_picocolors.default.bold("\nUsage:"));
    console.log(`  ${import_picocolors.default.cyan("pnpm create ugaas-app")} ${import_picocolors.default.dim("[project-name]")}`);
    console.log(`  ${import_picocolors.default.cyan("npx create-ugaas-app")} ${import_picocolors.default.dim("[project-name]")}`);
    console.log(import_picocolors.default.bold("\nPlatforms:"));
    console.log(`  ${import_picocolors.default.magenta("vite")} - Fast, modern web frontend with React`);
    console.log(`  ${import_picocolors.default.magenta("expo")} - Cross-platform iOS and Android mobile app`);
    console.log(import_picocolors.default.bold("\nStarter Archetypes:"));
    console.log(`  Ecommerce, Finance, Productivity, Delivery, CMS
`);
    process.exit(0);
  }
  console.log();
  intro(
    import_picocolors.default.bgCyan(import_picocolors.default.black(" create-ugaas-app ")) + " " + import_picocolors.default.cyan("\u{1F680} Modern fullstack starter generator")
  );
  const cliArgName = process.argv[2] && !process.argv[2].startsWith("-") ? process.argv[2] : void 0;
  const projectName = await text({
    message: "What is your project name?",
    placeholder: "my-ugaas-app",
    defaultValue: cliArgName || "my-ugaas-app",
    validate(val) {
      const trimmed = val ? val.trim() : "";
      if (!trimmed) return "Project name cannot be empty.";
      if (!/^[a-zA-Z0-9-_]+$/.test(trimmed)) {
        return "Project name can only contain letters, numbers, dashes, and underscores.";
      }
    }
  });
  handleCancel(projectName);
  const formattedProjectName = projectName.trim();
  const targetPath = path.resolve(process.cwd(), formattedProjectName);
  try {
    const files = await fs.readdir(targetPath);
    if (files.length > 0) {
      log.warn(
        import_picocolors.default.yellow(
          `Directory "${formattedProjectName}" already exists and is not empty.`
        )
      );
    }
  } catch {
  }
  const platform = await select({
    message: "Select target platform:",
    options: [
      {
        value: "vite",
        label: "Vite (React Web)",
        hint: "Fast, modern web frontend with React"
      },
      {
        value: "expo",
        label: "Expo (React Native)",
        hint: "Cross-platform iOS and Android mobile app"
      }
    ]
  });
  handleCancel(platform);
  const archetypeChoices = platform === "expo" ? [
    {
      value: "ecommerce_app",
      label: "Ecommerce App",
      hint: "Catalog, cart & mobile checkout"
    },
    {
      value: "finance_app",
      label: "Finance App",
      hint: "Digital wallet, cards & transactions"
    },
    {
      value: "productivity_app",
      label: "Productivity App",
      hint: "Task management, kanban & calendar"
    },
    {
      value: "delivery_app",
      label: "Delivery App",
      hint: "Courier dispatch & live order tracking"
    }
  ] : [
    {
      value: "ecommerce_web",
      label: "E-Commerce Web",
      hint: "Modern storefront, product grid & checkout"
    },
    {
      value: "finance_web",
      label: "Finance Web",
      hint: "Fintech analytics, charts & account management"
    },
    {
      value: "productivity_web",
      label: "Productivity Web",
      hint: "Collaboration boards & task management"
    },
    {
      value: "cms_web",
      label: "CMS & ERP Web",
      hint: "Content administration & editorial dashboard"
    }
  ];
  const archetype = await select({
    message: "Select starter domain archetype:",
    options: archetypeChoices
  });
  handleCancel(archetype);
  const templatePath = `${GITHUB_REPO}/${platform}/${archetype}`;
  log.step(
    import_picocolors.default.bold(
      `Creating ${import_picocolors.default.cyan(formattedProjectName)} with ${import_picocolors.default.magenta(
        platform
      )} / ${import_picocolors.default.blue(archetype)}...`
    )
  );
  const progress = new ProgressEngine();
  try {
    progress.startStep(1, 3, "Fetching template repository...");
    const emitter = ss(templatePath, { cache: false, force: true });
    emitter.on("info", (info2) => {
      if (info2.code === "FETCHING") {
      }
    });
    await emitter.clone(targetPath);
    progress.succeedStep("[1/3] Template repository fetched successfully.");
    progress.startStep(2, 3, "Extracting starter codebase...");
    progress.succeedStep("[2/3] Starter codebase extracted.");
    progress.startStep(3, 3, "Initializing domain configurations...");
    const pkgPath = path.join(targetPath, "package.json");
    try {
      const pkgContent = await fs.readFile(pkgPath, "utf-8");
      const pkg = JSON.parse(pkgContent);
      pkg.name = formattedProjectName;
      await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf-8");
    } catch {
    }
    progress.succeedStep("[3/3] Domain configurations initialized.");
    const devCmd = platform === "expo" ? "pnpm start" : "pnpm dev";
    const nextSteps = [
      `${import_picocolors.default.dim("$")} ${import_picocolors.default.cyan(`cd ${formattedProjectName}`)}`,
      `${import_picocolors.default.dim("$")} ${import_picocolors.default.cyan("pnpm install")}`,
      `${import_picocolors.default.dim("$")} ${import_picocolors.default.cyan(devCmd)}`
    ].join("\n");
    note(nextSteps, "Next steps");
    outro(
      import_picocolors.default.bold(
        import_picocolors.default.green("\u2728 Project created successfully! Happy coding!")
      )
    );
  } catch (error2) {
    progress.failStep("Scaffolding failed.");
    console.log();
    log.error(
      import_picocolors.default.red(`Failed to scaffold template from ${import_picocolors.default.bold(templatePath)}`)
    );
    if (error2.message) {
      log.message(import_picocolors.default.dim(`Details: ${error2.message}`));
    }
    process.exit(1);
  }
}
function isEntrypoint() {
  if (!process.argv[1] || process.argv[1] === "[eval]") return false;
  try {
    const realArgv1 = fsSync.realpathSync(process.argv[1]);
    const realFile = fsSync.realpathSync(fileURLToPath(import.meta.url));
    return realArgv1 === realFile;
  } catch {
    return process.argv[1].endsWith("index.js") || process.argv[1].includes("create-ugaas-app") || process.argv[1].includes("create-ugaas-proj");
  }
}
if (isEntrypoint()) {
  main().catch((err) => {
    console.error(import_picocolors.default.red("Unexpected error:"), err);
    process.exit(1);
  });
}
export {
  ProgressEngine
};
/*! Bundled license information:

degit/dist/client-8slZtdoy.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  (*!
  * This code for `path.join` is directly copied from @zenfs/core/path for bundle size improvements.
  * SPDX-License-Identifier: LGPL-3.0-or-later
  * Copyright (c) James Prevett and other ZenFS contributors.
  *)
  (*! simple-concat. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  (*! simple-get. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
