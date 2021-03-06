"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fromNodeStream_1 = tslib_1.__importStar(require("./fromNodeStream"));
exports.fromNodeStream = fromNodeStream_1.default;
exports.CustomIterator = fromNodeStream_1.CustomIterator;
var toNodeStream_1 = tslib_1.__importDefault(require("./toNodeStream"));
exports.toNodeStream = toNodeStream_1.default;
var library = {
    fromNodeStream: fromNodeStream_1.default,
    CustomIterator: fromNodeStream_1.CustomIterator,
    toNodeStream: toNodeStream_1.default,
};
exports.default = library;
//# sourceMappingURL=index.js.map