"use strict";
exports.__esModule = true;
var LNode = /** @class */ (function () {
    function LNode(data, next) {
        this.data = 0;
        this.next = null;
        this.data = data;
        this.next = (next !== null && next !== void 0 ? next : this.next);
    }
    return LNode;
}());
exports.LNode = LNode;
function info(text, newLine) {
    if (newLine === void 0) { newLine = true; }
    process.stdout.write(text);
    if (newLine) {
        process.stdout.write("\n");
    }
}
exports.info = info;
function show(head) {
    if (head.next == null) {
        return;
    }
    var cur = head;
    while (cur.next !== null) {
        cur = cur.next;
        info(cur.data + " ", false);
    }
    info("");
}
exports.show = show;
function result(initFn, fn) {
    var head = initFn();
    info("Before:");
    show(head);
    var newHead = fn(head);
    info("After:");
    show(newHead);
}
exports.result = result;
function init(INIT_DATA) {
    var head = new LNode(0);
    var curr = head;
    INIT_DATA.forEach(function (index) {
        curr.next = new LNode(index);
        curr = curr.next;
    });
    return head;
}
exports.init = init;
