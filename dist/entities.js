"use strict";
// Let's continue by declaring some classes (concretions). The classes are implementations of the interfaces that we just declared. All the classes must be annotated with the @injectable decorator.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shuriken = exports.Katana = exports.Ninja = void 0;
// When a class has a dependency on an interface we also need to use the @inject decorator to define an identifier for the interface that will be available at runtime. In this case we will use the Symbols Symbol.for("Weapon") and Symbol.for("ThrowableWeapon") as runtime identifiers.
// file entities.ts
var inversify_1 = require("inversify");
require("reflect-metadata");
var types_1 = require("./types");
var Katana = /** @class */ (function () {
    function Katana() {
    }
    Katana.prototype.hit = function () {
        return "cut!";
    };
    Katana = __decorate([
        (0, inversify_1.injectable)()
    ], Katana);
    return Katana;
}());
exports.Katana = Katana;
var Shuriken = /** @class */ (function () {
    function Shuriken() {
    }
    Shuriken.prototype.throw = function () {
        return "hit!";
    };
    Shuriken = __decorate([
        (0, inversify_1.injectable)()
    ], Shuriken);
    return Shuriken;
}());
exports.Shuriken = Shuriken;
var Ninja = /** @class */ (function () {
    function Ninja(katana, shuriken) {
        this._katana = katana;
        this._shuriken = shuriken;
    }
    Ninja.prototype.fight = function () { return this._katana.hit(); };
    ;
    Ninja.prototype.sneak = function () { return this._shuriken.throw(); };
    ;
    Ninja = __decorate([
        (0, inversify_1.injectable)(),
        __param(0, (0, inversify_1.inject)(types_1.default.Weapon)),
        __param(1, (0, inversify_1.inject)(types_1.default.ThrowableWeapon)),
        __metadata("design:paramtypes", [Object, Object])
    ], Ninja);
    return Ninja;
}());
exports.Ninja = Ninja;
