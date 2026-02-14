# JSON Integration Migration Guide

## Overview

The Warframe Search application has been successfully migrated from hardcoded TypeScript data to a JSON-based storage system. This document outlines the changes made and how to use the new system.

## What Changed

### Before
- All warframe data was embedded directly in `src/lib/warframes.ts`
- 633 lines of TypeScript code containing warframe and ability definitions
- Difficult to update without code changes
- Large file that was hard to maintain

### After
- Warframe data is now stored in `src/data/warframes.json`
- Clean separation between data and application logic
- Easy to add, modify, or remove warframes
- Can be updated without rebuilding the application code

## File Structure

### New Files Created

1. **`src/data/warframes.json`** (602 lines)
   - Contains all 15 warframes with their abilities in JSON format
   - Organized alphabetically by warframe name
   - Easily editable and version-controllable

2. **`src/lib/warframesLoader.ts`** (93 lines)
   - Module for loading and parsing the JSON data
   - Provides utility functions:
     - `loadWarframes()`: Load all warframes
     - `findWarframeByName()`: Search by name
     - `filterWarframesByRole()`: Filter by role
     - `getWarframesSortedByName()`: Get alphabetically sorted list

3. **`src/data/README.md`**
   - Documentation for the data structure
   - Instructions for editing and adding warframes
   - Usage examples

### Modified Files

1. **`src/lib/warframes.ts`** (simplified from 633 lines to 3 lines)
   - Now imports data from the loader instead of defining it inline
   - Maintains backward compatibility with existing imports

## How to Use

### For Developers

The application code remains unchanged. All existing imports still work:

```typescript
import { warframes } from '$lib/warframes';
```

To access additional utility functions:

```typescript
import { 
  loadWarframes, 
  findWarframeByName, 
  filterWarframesByRole,
  getWarframesSortedByName 
} from '$lib/warframesLoader';

// Examples
const allWarframes = loadWarframes();
const ash = findWarframeByName('Ash');
const supportFrames = filterWarframesByRole('Support');
const alphabetical = getWarframesSortedByName();
```

### For Content Editors

To add or modify warframe data, simply edit `src/data/warframes.json`:

1. Open the file in any text editor
2. Add or modify warframe entries
3. Ensure JSON validity
4. The changes will be picked up on the next application build

## JSON Data Schema

Each warframe object follows this structure:

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
      "description": "Description",
      "effect": "Effect Type",
      "statusEffect": ["Status1"]
    }
  ],
  "ease_of_acquisition": 1-5,
  "gameplay_complexity": 1-5,
  "ease_to_nuke": 1-5,
  "imageUrl": "https://..."
}
```

## Adding a New Warframe

To add a new warframe to the database:

1. Open `src/data/warframes.json`
2. Add a new object to the array (maintain alphabetical order)
3. Fill in all required fields
4. Ensure the JSON is valid
5. Save the file

Example:

```json
{
  "name": "NewWarframe",
  "releaseDate": "2024-01-15",
  "acquisitionMethod": "Shop",
  "role": ["Damage Dealer"],
  "abilities": [
    {
      "name": "Ability 1",
      "type": "Damage",
      "description": "Does something",
      "effect": "Damage Instant AOE",
      "statusEffect": ["Heat"]
    }
  ],
  "ease_of_acquisition": 3,
  "gameplay_complexity": 2,
  "ease_to_nuke": 3,
  "imageUrl": "https://example.com/image.png"
}
```

## Benefits of This Approach

✅ **Maintainability**: Data is separate from code  
✅ **Scalability**: Easy to add hundreds of warframes  
✅ **Non-Developer Friendly**: Content team can edit JSON  
✅ **Version Control**: Track data changes separately  
✅ **Flexibility**: Easy to add new fields or modify schema  
✅ **Code Cleanliness**: Reduced TypeScript file size by 95%

## Backward Compatibility

All existing code continues to work without changes:

- `import { warframes } from '$lib/warframes'` ✅
- API endpoints remain unchanged ✅
- No breaking changes to the Warframe class ✅
- No breaking changes to the Ability class ✅

## Future Enhancements

This JSON-based approach provides a foundation for:

- Database integration (PostgreSQL, MongoDB, etc.)
- External API integration
- Admin interface for data management
- Data validation using JSON Schema
- Real-time data updates
- Multi-language support

## Troubleshooting

### Invalid JSON

If you get JSON parsing errors:
- Use a JSON validator like [jsonlint.com](https://jsonlint.com)
- Ensure all strings are properly quoted
- Ensure no trailing commas
- Ensure all brackets and braces match

### Changes Not Appearing

If JSON changes don't appear in the app:
- Rebuild the project: `npm run build`
- Clear the build cache: `rm -rf .svelte-kit node_modules/.vite`
- Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)

### Type Errors

If you see TypeScript errors:
- Ensure all warframe objects have all required fields
- Ensure numeric values are numbers, not strings
- Ensure array fields contain arrays
- Check the data schema in `src/data/README.md`

## Questions or Issues?

Refer to:
- `src/data/README.md` for data structure documentation
- `src/lib/warframesLoader.ts` for implementation details
- `src/lib/warframes.ts` for usage examples