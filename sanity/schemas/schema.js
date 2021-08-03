// Import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import post from './post';
import tag from './tag';
import youtube from './youtube';

// Give schema to the builder and provide the result to Sanity
export default createSchema({
  // Name our schema
  name: 'default',
  // Concatenate our document type to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Types
    post,
    tag,
    youtube,
  ]),
});
