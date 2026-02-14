export class Ability {
  name: string = "";
  type: string = "";
  description: string = "";
  effect: string[] = [];
  statusEffect: string[] = [];

  constructor(
    name: string,
    type: string,
    description: string,
    effect: string[],
    statusEffect: string[],
  ) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.effect = effect;
    this.statusEffect = statusEffect;
  }

  toJson(): string {
    return JSON.stringify(this);
  }

  static fromJson(json: string): Ability {
    const obj = JSON.parse(json);
    return new Ability(
      obj.name,
      obj.type,
      obj.description,
      obj.effect,
      obj.statusEffect,
    );
  }
}
