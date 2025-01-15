import { warframes } from "$lib/warframes";
import { ontology, populateOntology } from "$lib/ontology";

populateOntology(warframes);

export async function POST({ request }) {
    const criteria = await request.json();
    const abilitiesArray = criteria.abilities.map((ability: string) => ability.trim());
    const filtered = warframes.filter(item => {
        const matchesAbilities = abilitiesArray.every((ability: string) => item.abilities.some(a => a.type === ability));
        const matchesAcquisition = criteria.acquisition === 0 || item.ease_of_acquisition === criteria.acquisition;
        const matchesComplexity = criteria.complexity === 0 || item.gameplay_complexity === criteria.complexity;
        const matchesNuke = criteria.nuke === 0 || item.ease_to_nuke === criteria.nuke;
        return matchesAbilities && matchesAcquisition && matchesComplexity && matchesNuke;
    });

    // console.log(filtered);

    return new Response(JSON.stringify(filtered), {
        headers: {
            "content-type": "application/json",
        }
    });
    // return new Response()
}