import type { Ability } from "./abilityClass.js";

export class Warframe {
    name: string = "";
    releaseDate: string = "";
    acquisitionMethod: string = "";
    role: string[] = [];
    abilities: Ability[] = [];
    ease_of_acquisition: number = 0;
    gameplay_complexity: number = 0;
    ease_to_nuke: number = 0;
    imageUrl: string = "";

    constructor(name: string, releaseDate: string, acquisitionMethod: string, role: string[], abilities: Ability[],
        ease_of_acquisition: number, gameplay_complexity: number, ease_to_nuke: number, imageUrl: string) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.acquisitionMethod = acquisitionMethod;
        this.role = role;
        this.abilities = abilities;
        this.ease_of_acquisition = ease_of_acquisition;
        this.gameplay_complexity = gameplay_complexity;
        this.ease_to_nuke = ease_to_nuke;
        this.imageUrl = imageUrl;
    }

    toJson(): string {
        return JSON.stringify(this);
    }

    static fromJson(json: string): Warframe {
        const obj = JSON.parse(json);
        return new Warframe(obj.name, obj.releaseDate, obj.acquisitionMethod, obj.role, obj.abilities, obj.ease_of_acquisition, obj.gameplay_complexity, obj.ease_to_nuke, obj.imageUrl);
    }
}