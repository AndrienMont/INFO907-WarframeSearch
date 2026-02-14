# Warframes Data Storage

This directory contains the JSON data files for the Warframe Search application.

## Structure

### `warframes.json`

The main data file containing all warframe information in JSON format. Previously, this data was hardcoded in TypeScript files, but it has been extracted to this JSON file for better maintainability and easier updates.

#### Data Format

Each warframe object has the following structure:

```json
{
  "name": "Warframe Name",
  "releaseDate": "YYYY-MM-DD",
  "acquisitionMethod": "How to obtain",
  "role": ["Role1", "Role2"],
  "abilities": [
    {
      "name": "Ability Name",
      "type": "Ability Type",
      "description": "What the ability does",
      "effect": "Effect Category",
      "statusEffect": ["Status1", "Status2"]
    }
  ],
  "ease_of_acquisition": 1-5,
  "gameplay_complexity": 1-5,
  "ease_to_nuke": 1-5,
  "imageUrl": "https://..."
}
```

#### Field Descriptions

- **name**: The warframe's name
- **releaseDate**: Release date in ISO format (YYYY-MM-DD)
- **acquisitionMethod**: How players can obtain the warframe (e.g., "Shop", "Assassination", "Bounties")
- **role**: Array of roles/tags that describe the warframe's playstyle
- **abilities**: Array of 4 ability objects
- **ease_of_acquisition**: Numeric rating 1-5 (1=easiest, 5=hardest)
- **gameplay_complexity**: Numeric rating 1-5 (1=easiest, 5=hardest)
- **ease_to_nuke**: Numeric rating 1-5 (1=hardest to nuke, 5=easiest to nuke)
- **imageUrl**: URL to the warframe's thumbnail image

## Loading the Data

Use the `warframesLoader.ts` module to load and parse the JSON data:

```typescript
import { loadWarframes, findWarframeByName, filterWarframesByRole } from '$lib/warframesLoader';

// Load all warframes
const allWarframes = loadWarframes();

// Find a specific warframe
const ash = findWarframeByName('Ash');

// Filter by role
const damageFrames = filterWarframesByRole('Damage Dealer');

// Get warframes sorted alphabetically
const sorted = getWarframesSortedByName();
```

## Editing Data

To add or modify warframe data:

1. Edit `warframes.json` directly
2. Ensure the JSON is valid
3. The application will automatically load the updated data on next build/refresh

### Adding a New Warframe

1. Add a new object to the array in `warframes.json`
2. Ensure all required fields are present
3. The data will be automatically parsed when the app loads

### Modifying Existing Warframes

Simply update the relevant fields in the JSON object. Changes will take effect on the next application restart.

## Benefits of JSON Storage

- **Separation of Concerns**: Data is separate from code logic
- **Easier Updates**: Non-developers can edit JSON files
- **Version Control**: Changes to data can be tracked separately from code
- **Scalability**: Easy to add hundreds more warframes without code bloat
- **Flexibility**: Can easily add new fields or modify the schema

## Performance Considerations

- All warframes are loaded into memory when `loadWarframes()` is called
- For large datasets, consider lazy loading or pagination
- The JSON file is bundled with the application at build time
- No runtime API calls are needed unless fetching from an external source

## Future Improvements

- Could be migrated to a database (SQL, MongoDB, etc.)
- Could be fetched from an external API
- Could implement caching strategies
- Could add data validation schemas (JSON Schema, Zod, etc.)