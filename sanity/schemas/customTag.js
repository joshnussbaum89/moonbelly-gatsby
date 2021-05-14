import React, { useState } from 'react';

// Important items to allow form fields to work properly and patch the dataset.
// import { PatchEvent, set } from 'part:@sanity/form-builder/patch-event';
import FormField from 'part:@sanity/components/formfields/default';

// Import the TextInput from UI
import { Checkbox, Switch } from '@sanity/ui';

const CustomTagComponent = ({ type }) => {
  const [recipeChecked, toggleRecipeChecked] = useState(false);
  const [diyChecked, toggleDiyChecked] = useState(false);

  // TODOs
  // Edit Input field to make sure everything is formatted nicely
  // DiyChecked === true ? true : false create reusable function for this
  // Checkboxes don't save...?
  return (
    <FormField label={type.title} description={type.description}>
      <div>
        <Switch
          onClick={() => toggleRecipeChecked(!recipeChecked)}
          checked={recipeChecked}
          disabled={diyChecked === true ? true : false}
        />
        <h3>Recipes</h3>
        <Checkbox disabled={diyChecked === true ? true : false} />
        <span> Recipe Type </span>
        <Checkbox disabled={diyChecked === true ? true : false} />
        <span> Ingredient </span>
        <Checkbox disabled={diyChecked === true ? true : false} />
        <span> Restriction </span>
      </div>
      <div>
        <Switch
          onClick={() => toggleDiyChecked(!diyChecked)}
          checked={diyChecked}
          disabled={recipeChecked === true ? true : false}
        />
        <h3>DIY</h3>
        <Checkbox disabled={recipeChecked === true ? true : false} />
        <span> Materials </span>
        <Checkbox disabled={recipeChecked === true ? true : false} />
        <span> Location </span>
        <Checkbox disabled={recipeChecked === true ? true : false} />
        <span> Placeholder </span>
      </div>
    </FormField>
  );
};

export default {
  name: 'word',
  title: 'Words',
  type: 'document',
  fields: [
    {
      name: 'tag',
      title: 'Post Tags',
      type: 'string',
      description: 'One word'
    },
    {
      name: 'Words',
      title: 'Word or Phrase',
      description:
        'Enter tags here that will later be associated with your posts ex/ vegan',
      type: 'string',
      inputComponent: CustomTagComponent,
    },
  ],
};
