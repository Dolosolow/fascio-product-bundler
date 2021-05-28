import { createContext } from "react";

import { Bundle } from "src/types/schema";

export default createContext<Bundle | null>(null);
