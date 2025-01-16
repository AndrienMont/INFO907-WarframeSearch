import { warframes } from "$lib/warframes";
import { ontology, populateOntology, searchOntology } from "$lib/ontology";
import { Warframe } from "../../../../class/warframeClass";

populateOntology(warframes);
console.log(ontology);

export async function POST({ request }) {
    const criteria = await request.json();
    const { abilities, acquisition, complexity, nuke } = criteria;

    const matchedWarframes = searchOntology({ abilities, acquisition, complexity, nuke }, ontology);

    const results = matchedWarframes.map(name => warframes.find(warframe => warframe.name === name));

    console.log(results);

    return new Response(JSON.stringify(results), {
        headers: {
            "content-type": "application/json",
        }
    });
}