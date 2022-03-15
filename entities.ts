
// Let's continue by declaring some classes (concretions). The classes are implementations of the interfaces that we just declared. All the classes must be annotated with the @injectable decorator.

// When a class has a dependency on an interface we also need to use the @inject decorator to define an identifier for the interface that will be available at runtime. In this case we will use the Symbols Symbol.for("Weapon") and Symbol.for("ThrowableWeapon") as runtime identifiers.

// file entities.ts

import { injectable, inject } from "inversify";
import "reflect-metadata";
import TYPES from "./types";
import { Warrior, Weapon, ThrowableWeapon } from "./interface";


@injectable()
class Katana implements Weapon {
    public hit() {
        return "cut!";
    }
}

@injectable()
class Shuriken implements ThrowableWeapon {
    public throw() {
        return "hit!";
    }
}

@injectable()
class Ninja implements Warrior {

    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    public constructor(
        @inject(TYPES.Weapon) katana: Weapon,
        @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
    ) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    public fight() { return this._katana.hit(); };
    public sneak() { return this._shuriken.throw(); };

}

export { Ninja, Katana, Shuriken };
