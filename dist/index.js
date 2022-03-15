"use strict";
// You can use the method get<T> from the Container class to resolve a dependency. Remember that you should do this only in your composition root to avoid the service locator anti-pattern.
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_config_1 = require("./inversify.config");
var types_1 = require("./types");
var ninja = inversify_config_1.myContainer.get(types_1.default.Warrior);
// expect(ninja.fight()).eql("cut!"); // true
// expect(ninja.sneak()).eql("hit!"); // true
console.log(ninja.fight());
