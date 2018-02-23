import { EOL } from "os";

var m = new Map();
m.set("hello", "something");
m.set(s, 34);
console.log(m.get(s) == 34);

var s = new Set();
s.add("hello").add("something").add("hello");

console.log(s.size == 2);
console.log(s.has("hello") == true);

var wm = new WeakMap();
wm.set("sss", {extra: 42});
var objRef = new Object();
wm.set(objRef, {extra: 42});

var ws = new WeakSet();
ws.add({data: 42});

// object mathcing, default variables
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true

var {a=10, b=5} = {a: 3};
console.log(a); // 3
console.log(b); // 5