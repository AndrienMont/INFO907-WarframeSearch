import { Ability } from "../class/abilityClass";
import { Warframe } from "../class/warframeClass";

export const ontology = {
    Ability: {
        Support: {
            Regen: {
                Energy: {
                    AOE: {} as Record<string, Warframe>,
                    SingleTarget: {} as Record<string, Warframe>
                },
                Health: {
                    AOE: {} as Record<string, Warframe>,
                    SingleTarget: {} as Record<string, Warframe>
                },
                Shield: {
                    AOE: {} as Record<string, Warframe>,
                    SingleTarget: {} as Record<string, Warframe>
                }
            },
            InstantRegain: {
                Energy: {
                    AOE: {} as Record<string, Warframe>,
                    SingleTarget: {} as Record<string, Warframe>
                },
                Health : {
                    AOE: {} as Record<string, Warframe>,
                    SingleTarget: {} as Record<string, Warframe>
                },
                Shield: {
                    AOE: {} as Record<string, Warframe>,
                    SingleTarget: {} as Record<string, Warframe>
                }
            },
            Buff: {
                Damage: {
                    AOE: {} as Record<string, Warframe>,
                    SingleTarget: {} as Record<string, Warframe>
                },
                DamageReduction: {
                    AOE: {} as Record<string, Warframe>,
                    SingleTarget: {} as Record<string, Warframe>
                },
                Overguard: {
                    AOE: {} as Record<string, Warframe>,
                    SingleTarget: {} as Record<string, Warframe>
                },
                MaxHealth: {
                    AOE: {} as Record<string, Warframe>,
                    SingleTarget: {} as Record<string, Warframe>
                }
            },
            Utility: {
                Stealth: {} as Record<string, Warframe>,
                LootGeneration: {} as Record<string, Warframe>,
                AmmoGeneration: {} as Record<string, Warframe>,
            },
            Debuff: {
                ArmorReduction: {
                    AOE: {} as Record<string, Warframe>,
                    SingleTarget: {} as Record<string, Warframe>
                },
                DamageVulnerability: {
                    AOE: {} as Record<string, Warframe>,
                    SingleTarget: {} as Record<string, Warframe>
                },
            }
        },
        Damage: {
            DoT: {
                AOE: {} as Record<string, Warframe>,
                SingleTarget: {} as Record<string, Warframe>
            },
            Instant: {
                AOE: {} as Record<string, Warframe>,
                SingleTarget: {} as Record<string, Warframe>
            }
        },
        CrowdControl: {
            HardCC: {
                AOE: {} as Record<string, Warframe>,
                SingleTarget: {} as Record<string, Warframe>
            },
            SoftCC: {
                AOE: {} as Record<string, Warframe>,
                SingleTarget: {} as Record<string, Warframe>
            },
            ForcedMovement: {
                AOE: {} as Record<string, Warframe>,
                SingleTarget: {} as Record<string, Warframe>
            }
        }
    }
};

//change to have multiple categories
export function populateOntology(warframes: Warframe[]) {
    for (const warframe of warframes) {
        for (const ability of warframe.abilities) {
            // Determine the category and subcategory for the ability
            const effects = ability.effect.split("/");

            for (const effect of effects) {
                if (ability.type.includes("Regen")) {
                    if (effect.includes("Energy")) {
                        const target = effect.includes("AOE")
                            ? ontology.Ability.Support.Regen.Energy.AOE
                            : ontology.Ability.Support.Regen.Energy.SingleTarget;
                        target[warframe.name] = warframe;
                    } else if (effect.includes("Health")) {
                        const target = effect.includes("AOE")
                            ? ontology.Ability.Support.Regen.Health.AOE
                            : ontology.Ability.Support.Regen.Health.SingleTarget;
                        target[warframe.name] = warframe;
                    } else if (effect.includes("Shield")) {
                        const target = effect.includes("AOE")
                            ? ontology.Ability.Support.Regen.Shield.AOE
                            : ontology.Ability.Support.Regen.Shield.SingleTarget;
                        target[warframe.name] = warframe;
                    }
                } else if (ability.type.includes("InstantRegain")) {
                    if (effect.includes("Energy")) {
                        const target = effect.includes("AOE")
                            ? ontology.Ability.Support.InstantRegain.Energy.AOE
                            : ontology.Ability.Support.InstantRegain.Energy.SingleTarget;
                        target[warframe.name] = warframe;
                    } else if (effect.includes("Health")) {
                        const target = effect.includes("AOE")
                            ? ontology.Ability.Support.InstantRegain.Health.AOE
                            : ontology.Ability.Support.InstantRegain.Health.SingleTarget;
                        target[warframe.name] = warframe;
                    } else if (effect.includes("Shield")) {
                        const target = effect.includes("AOE")
                            ? ontology.Ability.Support.InstantRegain.Shield.AOE
                            : ontology.Ability.Support.InstantRegain.Shield.SingleTarget;
                        target[warframe.name] = warframe;
                    }
                } else if (ability.type === "Buff") {
                    if (effect.includes("Damage")) {
                        const target = effect.includes("AOE")
                            ? ontology.Ability.Support.Buff.Damage.AOE
                            : ontology.Ability.Support.Buff.Damage.SingleTarget;
                        target[warframe.name] = warframe;
                    } else if (effect.includes("DamageReduction")) {
                        const target = effect.includes("AOE")
                            ? ontology.Ability.Support.Buff.DamageReduction.AOE
                            : ontology.Ability.Support.Buff.DamageReduction.SingleTarget;
                        target[warframe.name] = warframe;
                    } else if (effect.includes("Overguard")) {
                        const target = effect.includes("AOE")
                            ? ontology.Ability.Support.Buff.Overguard.AOE
                            : ontology.Ability.Support.Buff.Overguard.SingleTarget;
                        target[warframe.name] = warframe;
                    }
                } else if (ability.type === "Utility") {
                    if (effect.includes("Stealth")) {
                        ontology.Ability.Support.Utility.Stealth[warframe.name] = warframe;
                    } else if (effect.includes("LootGeneration")) {
                        ontology.Ability.Support.Utility.LootGeneration[warframe.name] = warframe;
                    } else if (effect.includes("AmmoGeneration")) {
                        ontology.Ability.Support.Utility.AmmoGeneration[warframe.name] = warframe;
                    }
                } else if (ability.type === "Damage") {
                    if (effect.includes("DoT")) {
                        const target = effect.includes("AOE")
                            ? ontology.Ability.Damage.DoT.AOE
                            : ontology.Ability.Damage.DoT.SingleTarget;
                        target[warframe.name] = warframe;
                    } else {
                        const target = effect.includes("AOE")
                            ? ontology.Ability.Damage.Instant.AOE
                            : ontology.Ability.Damage.Instant.SingleTarget;
                        target[warframe.name] = warframe;
                    }
                } else if (ability.type === "Crowd Control") {
                    if (effect.includes("HardCC")) {
                        const target = effect.includes("AOE")
                            ? ontology.Ability.CrowdControl.HardCC.AOE
                            : ontology.Ability.CrowdControl.HardCC.SingleTarget;
                        target[warframe.name] = warframe;
                    } else if (effect.includes("SoftCC")) {
                        const target = effect.includes("AOE")
                            ? ontology.Ability.CrowdControl.SoftCC.AOE
                            : ontology.Ability.CrowdControl.SoftCC.SingleTarget;
                        target[warframe.name] = warframe;
                    } else if (effect.includes("ForcedMovement")) {
                        const target = effect.includes("AOE")
                            ? ontology.Ability.CrowdControl.ForcedMovement.AOE
                            : ontology.Ability.CrowdControl.ForcedMovement.SingleTarget;
                        target[warframe.name] = warframe;
                    }
                }
            }
        }
    }
}
