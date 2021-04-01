import { mergeResolvers } from 'graphql-tools';

import { rootResolver } from './rootResolver';

export default mergeResolvers([rootResolver]);
