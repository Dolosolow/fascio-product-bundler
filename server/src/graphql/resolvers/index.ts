import { mergeResolvers } from 'graphql-tools';

import { rootResolver } from './rootResolver';
import { grupResolver } from './grupResolver';
import { siteResolver } from './siteResolver';

export default mergeResolvers([siteResolver, grupResolver, rootResolver]);
