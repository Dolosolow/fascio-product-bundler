import { mergeResolvers } from 'graphql-tools';

import { rootResolver } from './rootResolver';
import { siteResolver } from './siteResolver';

export default mergeResolvers([siteResolver, rootResolver]);
