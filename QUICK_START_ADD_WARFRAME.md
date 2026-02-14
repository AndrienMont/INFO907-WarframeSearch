# Quick Start: Adding a Warframe

## How to Access the Form

1. Open the application in your browser
2. Look for the green **"+ Add Warframe"** button in the top-right corner of the search area
3. Click the button to open the form modal

## Form Overview

The form has 4 main sections:

### Section 1: Basic Information
Fill in the warframe's basic details:
- **Warframe Name**: e.g., "Nova", "Rhino", "Saryn"
- **Release Date**: Use the date picker (format: YYYY-MM-DD)
- **Acquisition Method**: How players get it (e.g., "Shop", "Assassination", "Bounties")
- **Image URL**: Link to the warframe's thumbnail image

### Section 2: Roles
Select one or more roles that describe the warframe:
- Damage Dealer
- Support
- Crowd Control
- Stealth
- Mobility
- Survival

**Tip**: You can select multiple roles. Selected roles appear as blue tags below.

### Section 3: Abilities
Add exactly 4 abilities. For each ability:

**Fields:**
1. **Name**: Ability name (e.g., "Fireball", "Speed Boost")
2. **Type**: Select from dropdown (e.g., Damage, Buff, Crowd Control)
3. **Description**: What the ability does (e.g., "Launch a projectile that ignites enemies")
4. **Effect**: Select from dropdown (e.g., "Damage Instant AOE")
5. **Status Effects**: Optional - select any applicable effects (e.g., Heat, Slash, Electricity)

**Pro Tips:**
- All 4 ability fields must be completed before submitting
- Status effects are optional but recommended
- Ability types and effects are standardized - use the dropdowns to ensure consistency

### Section 4: Difficulty Ratings
Set three ratings on a scale of 1-5:

1. **Ease of Acquisition**
   - 1 = Very easy to obtain
   - 5 = Very hard to obtain

2. **Gameplay Complexity**
   - 1 = Very easy to play
   - 5 = Very hard to master

3. **Ease to Nuke**
   - 1 = Hard to deal massive damage
   - 5 = Easy to deal massive damage

Click the numbered buttons to select your rating (they'll turn blue when selected).

## Submitting the Form

1. Verify all required fields are complete (marked with *)
2. Review your entries for accuracy
3. Click the blue **"Add Warframe"** button
4. Wait for the success message
5. The page will automatically reload

## What Happens After Submission

- ✅ Success message appears for 2 seconds
- 🔄 Page automatically reloads
- 📋 New warframe appears in search results
- 🔤 Warframes are automatically sorted alphabetically

## Validation Rules

### Required Fields
- Warframe Name (cannot be empty)
- Release Date (must be selected)
- Acquisition Method (cannot be empty)
- At least one Role (must select at least one)
- Image URL (cannot be empty, must be valid URL format)
- All 4 Abilities must have: Name, Type, Description, and Effect

### Numeric Ratings
- Must be between 1-5
- Defaults to 3 if not changed

## Common Issues & Solutions

### "Warframe already exists"
- A warframe with that name is already in the database
- Choose a different name or check existing warframes first

### Form won't submit
- Verify all required fields are filled (look for * symbol)
- Ensure all 4 abilities have Name, Type, Description, and Effect
- Check that at least one role is selected
- Verify rating buttons are selected (should show blue)

### New warframe not appearing
- Wait for page to reload (takes about 2 seconds)
- Manually refresh the page (press F5 or Ctrl+R)
- Hard refresh (Ctrl+Shift+R on Windows/Linux, Cmd+Shift+R on Mac)

### Image not showing
- Verify the URL is correct and points directly to an image
- Ensure the image host allows external access
- Try a different image URL

## Example: Adding Volt Prime

1. **Basic Info:**
   - Name: "Volt Prime"
   - Release: 2014-06-24
   - Acquisition: "Relics"
   - Image: https://example.com/volt-prime.png

2. **Roles:** Select "Damage Dealer" and "Support"

3. **Abilities:**
   - Ability 1: Shock (Damage, Damage Instant SingleTarget, Electricity)
   - Ability 2: Speed (Buff, Buff Speed SingleTarget)
   - Ability 3: Electric Shield (Buff, Buff Damage SingleTarget)
   - Ability 4: Discharge (Damage, Damage Instant AOE, Electricity)

4. **Ratings:**
   - Ease of Acquisition: 4 (somewhat hard to get)
   - Gameplay Complexity: 2 (relatively easy to play)
   - Ease to Nuke: 4 (easy to deal damage)

5. Click "Add Warframe" ✅

## Tips for Better Entries

- **Be Consistent**: Use existing terminology for types and effects
- **Be Descriptive**: Write clear ability descriptions
- **Use Real URLs**: Ensure image URLs are publicly accessible
- **Multiple Roles**: Many warframes have 2 roles - feel free to select multiple
- **Accurate Ratings**: Think about player experience when rating difficulty

## Getting Help

If you encounter issues:
1. Check the error message shown in the form
2. Verify all required fields are complete
3. Try refreshing the page and starting over
4. Check the full documentation in `ADD_WARFRAME_FEATURE.md`

## What Data Gets Saved

When you add a warframe, the following is saved to the database:
- Warframe name, release date, acquisition method
- Selected roles and image URL
- All 4 abilities with their properties
- Your difficulty ratings
- Timestamp is NOT recorded (but release date is)

The data is stored in `src/data/warframes.json` and automatically sorted alphabetically.