# Add Warframe Feature Documentation

## Overview

A new feature has been added to the Warframe Search application that allows users to add new warframes to the database through an intuitive form interface. This feature includes:

- A modal form with all necessary fields for a complete warframe entry
- Client-side validation before submission
- Server-side validation and persistence
- Automatic alphabetical sorting of warframes
- User feedback with success/error messages

## User Interface

### Add Warframe Button

Located in the top-right corner of the search component, next to the "Search Warframe" title. The green button labeled "+ Add Warframe" opens the form modal.

```
[Search Warframe]                    [+ Add Warframe]
```

### Form Modal

When clicked, opens a comprehensive form with the following sections:

#### 1. Basic Information
- **Warframe Name** (required): The name of the warframe (e.g., "Volt", "Ash")
- **Release Date** (required): Date picker for the warframe's release date
- **Acquisition Method** (required): How to obtain the warframe (e.g., "Shop", "Assassination", "Bounties")
- **Image URL** (required): Link to the warframe's thumbnail image

#### 2. Roles (required)
- Multiple checkboxes to select one or more roles:
  - Damage Dealer
  - Support
  - Crowd Control
  - Stealth
  - Mobility
  - Survival

#### 3. Abilities (required - all 4 must be completed)
Four ability sections, each with:
- **Name** (required): Ability name
- **Type** (required): Dropdown with predefined ability types
- **Description** (required): What the ability does
- **Effect** (required): Dropdown with predefined effect types
- **Status Effects** (optional): Multiple checkboxes for applicable status effects

Available ability types:
- Damage
- Buff
- Debuff
- Crowd Control
- Support
- Utility
- Stealth
- Movement & Damage
- Damage & Crowd Control
- Damage & Debuff
- Buff & Debuff
- Damage/Buff

Available status effects:
- Slash, Impact, Puncture
- Heat, Cold, Electricity, Toxin
- Blast, Corrosive, Gas, Magnetic, Radiation, Viral
- Void, True, Blind

#### 4. Difficulty Ratings
Three rating scales (1-5):
- **Ease of Acquisition**: 1=Easy to acquire, 5=Very hard to acquire
- **Gameplay Complexity**: 1=Easy to play, 5=Very hard to play
- **Ease to Nuke**: 1=Hard to nuke, 5=Easy to nuke

## Form Validation

### Client-Side Validation
Before submission, the form checks:
- Warframe name is not empty
- Release date is selected
- Acquisition method is not empty
- At least one role is selected
- Image URL is not empty
- All 4 abilities are complete with required fields

Error messages appear above the submit button if validation fails.

### Server-Side Validation
The backend validates:
- All required fields are present
- Rating fields are numbers between 1-5
- At least one ability exists
- All ability fields are valid
- Warframe name doesn't already exist (case-insensitive)

## API Endpoint

**POST** `/api/warframe/add`

### Request Body
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
      "statusEffect": ["Status1", "Status2"]
    }
  ],
  "ease_of_acquisition": 3,
  "gameplay_complexity": 3,
  "ease_to_nuke": 3,
  "imageUrl": "https://..."
}
```

### Response

Success (201):
```json
{
  "success": true,
  "message": "Warframe \"WarframeName\" added successfully",
  "warframe": { ... }
}
```

Error (400-409):
```json
{
  "error": "Error message describing what went wrong"
}
```

## File Modifications

### New Files Created

1. **`src/components/addWarframeForm.svelte`**
   - Main form component with all UI and logic
   - Handles form state, validation, and submission
   - Displays success/error messages

2. **`src/routes/api/warframe/add/+server.ts`**
   - API endpoint for handling warframe submissions
   - Server-side validation
   - File I/O operations for updating warframes.json

### Modified Files

1. **`src/components/searchComponent.svelte`**
   - Added import for AddWarframeForm component
   - Added "Add Warframe" button in the header
   - Integrated form modal display

## Data Persistence

When a warframe is successfully added:
1. The new warframe is added to the in-memory array
2. All warframes are sorted alphabetically by name
3. The updated array is written to `src/data/warframes.json`
4. The form closes and page reloads to reflect changes

## Error Handling

Users receive clear error messages for:
- Missing required fields
- Invalid data types
- Duplicate warframe names
- Network errors
- Server-side errors

## Example: Adding a Warframe

1. Click the "+ Add Warframe" button
2. Fill in basic information:
   - Name: "Nova"
   - Release Date: 2013-09-13
   - Acquisition: "Assassination"
   - Image URL: (paste URL)
3. Select roles: "Damage Dealer"
4. Add 4 abilities with:
   - Names, types, descriptions
   - Effects from the dropdown
   - Optional status effects
5. Set difficulty ratings (defaults to 3)
6. Click "Add Warframe"
7. Success message appears and page refreshes

## Browser Requirements

- Modern browser with ES6+ support
- JavaScript enabled
- Network access to the backend API

## Future Enhancements

Possible improvements:
- Image upload instead of URL input
- Ability templates/presets
- Bulk import from external sources
- Edit/delete warframe functionality
- Admin authentication for security
- Change history/audit log

## Troubleshooting

### Form won't submit
- Ensure all required fields are filled (marked with *)
- Check that ratings are set (should show blue selected buttons)
- Verify all 4 abilities have names, types, descriptions, and effects

### Warframe not appearing after submission
- Wait for page to reload (2 seconds after success message)
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors

### Duplicate warframe error
- A warframe with that name already exists
- Choose a different name or check existing warframes first

### Image not loading
- Verify the URL is correct and publicly accessible
- Ensure it's a direct link to an image file
- Check CORS policies if using third-party image hosts