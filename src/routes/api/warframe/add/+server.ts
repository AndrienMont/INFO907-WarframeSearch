import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
  try {
    const warframeData = await request.json();

    // Validate required fields
    const requiredFields = [
      "name",
      "releaseDate",
      "acquisitionMethod",
      "role",
      "abilities",
      "ease_of_acquisition",
      "gameplay_complexity",
      "ease_to_nuke",
      "imageUrl",
    ];
    for (const field of requiredFields) {
      if (!(field in warframeData)) {
        return new Response(
          JSON.stringify({ error: `Missing required field: ${field}` }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
    }

    // Validate abilities
    if (
      !Array.isArray(warframeData.abilities) ||
      warframeData.abilities.length === 0
    ) {
      return new Response(
        JSON.stringify({ error: "At least one ability is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    for (const ability of warframeData.abilities) {
      const abilityRequiredFields = [
        "name",
        "type",
        "description",
        "effect",
        "statusEffect",
      ];
      for (const field of abilityRequiredFields) {
        if (!(field in ability)) {
          return new Response(
            JSON.stringify({
              error: `Missing required field in ability: ${field}`,
            }),
            {
              status: 400,
              headers: { "Content-Type": "application/json" },
            },
          );
        }
      }
      // Validate that effect is an array and not empty
      if (!Array.isArray(ability.effect) || ability.effect.length === 0) {
        return new Response(
          JSON.stringify({
            error: "Each ability must have at least one effect",
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
      // Validate that statusEffect is an array
      if (!Array.isArray(ability.statusEffect)) {
        return new Response(
          JSON.stringify({
            error: "Status effects must be an array",
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
    }

    // Validate numeric fields
    const numericFields = [
      "ease_of_acquisition",
      "gameplay_complexity",
      "ease_to_nuke",
    ];
    for (const field of numericFields) {
      if (
        typeof warframeData[field] !== "number" ||
        warframeData[field] < 1 ||
        warframeData[field] > 5
      ) {
        return new Response(
          JSON.stringify({
            error: `${field} must be a number between 1 and 5`,
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
    }

    // Read the existing warframes.json file
    const filePath = join(process.cwd(), "src/data/warframes.json");
    let warframes = [];

    try {
      const fileContent = readFileSync(filePath, "utf-8");
      warframes = JSON.parse(fileContent);
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Failed to read warframes.json" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Check if warframe already exists
    if (
      warframes.some(
        (w: any) => w.name.toLowerCase() === warframeData.name.toLowerCase(),
      )
    ) {
      return new Response(
        JSON.stringify({
          error: `Warframe "${warframeData.name}" already exists`,
        }),
        {
          status: 409,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Add the new warframe
    warframes.push(warframeData);

    // Sort warframes alphabetically by name
    warframes.sort((a: any, b: any) => a.name.localeCompare(b.name));

    // Write back to file
    try {
      writeFileSync(filePath, JSON.stringify(warframes, null, 2), "utf-8");
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Failed to write to warframes.json" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `Warframe "${warframeData.name}" added successfully`,
        warframe: warframeData,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Invalid JSON or server error" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};
