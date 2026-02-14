import { Warframe } from "../class/warframeClass.js";
import { Ability } from "../class/abilityClass.js";
import warframesData from "../data/warframes.json";

interface AbilityData {
  name: string;
  type: string;
  description: string;
  effect: string[];
  statusEffect: string[];
}

interface WarframeData {
  name: string;
  releaseDate: string;
  acquisitionMethod: string;
  role: string[];
  abilities: AbilityData[];
  ease_of_acquisition: number;
  gameplay_complexity: number;
  ease_to_nuke: number;
  imageUrl: string;
}

/**
 * Converts raw JSON data into Ability objects
 */
function parseAbility(abilityData: AbilityData): Ability {
  return new Ability(
    abilityData.name,
    abilityData.type,
    abilityData.description,
    abilityData.effect,
    abilityData.statusEffect,
  );
}

/**
 * Converts raw JSON data into Warframe objects
 */
function parseWarframe(warframeData: WarframeData): Warframe {
  const abilities = warframeData.abilities.map(parseAbility);

  return new Warframe(
    warframeData.name,
    warframeData.releaseDate,
    warframeData.acquisitionMethod,
    warframeData.role,
    abilities,
    warframeData.ease_of_acquisition,
    warframeData.gameplay_complexity,
    warframeData.ease_to_nuke,
    warframeData.imageUrl,
  );
}

/**
 * Loads and parses all warframes from the JSON data file
 * @returns Array of Warframe objects
 */
export function loadWarframes(): Warframe[] {
  const data = warframesData as WarframeData[];
  return data.map(parseWarframe);
}

/**
 * Finds a warframe by name (case-insensitive)
 * @param name - The name of the warframe to find
 * @returns The Warframe object or undefined if not found
 */
export function findWarframeByName(name: string): Warframe | undefined {
  const warframes = loadWarframes();
  return warframes.find((wf) => wf.name.toLowerCase() === name.toLowerCase());
}

/**
 * Filters warframes by role
 * @param role - The role to filter by
 * @returns Array of Warframes with the specified role
 */
export function filterWarframesByRole(role: string): Warframe[] {
  const warframes = loadWarframes();
  return warframes.filter((wf) => wf.role.includes(role));
}

/**
 * Sorts warframes alphabetically by name
 * @returns Array of Warframes sorted by name
 */
export function getWarframesSortedByName(): Warframe[] {
  const warframes = loadWarframes();
  return [...warframes].sort((a, b) => a.name.localeCompare(b.name));
}
