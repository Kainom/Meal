/* eslint-disable @typescript-eslint/no-require-imports */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getMeal;
var better_sqlite3_1 = require("better-sqlite3");
var db = (0, better_sqlite3_1.default)('meals.db');
function getMeal() {
    var stmt = db.prepare('SELECT * FROM meals');
    var meal = stmt.get();
    console.log(meal);
}

export default getMeal;