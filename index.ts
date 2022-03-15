// You can use the method get<T> from the Container class to resolve a dependency. Remember that you should do this only in your composition root to avoid the service locator anti-pattern.

import { myContainer } from "./inversify.config";
import  TYPES  from "./types";
import { Warrior } from "./interface";

const ninja = myContainer.get<Warrior>(TYPES.Warrior);

// expect(ninja.fight()).eql("cut!"); // true
// expect(ninja.sneak()).eql("hit!"); // true

console.log(ninja.fight());