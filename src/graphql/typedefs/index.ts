import { mergeTypeDefs } from 'graphql-tools';

import { RootQueryType } from './root_query_type';
import { SiteType } from './site_type';

export default mergeTypeDefs([SiteType, RootQueryType]);
