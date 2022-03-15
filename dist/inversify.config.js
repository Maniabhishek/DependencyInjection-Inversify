"use strict";
// file inversify.config.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.myContainer = void 0;
var inversify_1 = require("inversify");
var types_1 = require("./types");
var entities_1 = require("./entities");
var myContainer = new inversify_1.Container();
exports.myContainer = myContainer;
myContainer.bind(types_1.default.Warrior).to(entities_1.Ninja);
myContainer.bind(types_1.default.Weapon).to(entities_1.Katana);
myContainer.bind(types_1.default.ThrowableWeapon).to(entities_1.Shuriken);
