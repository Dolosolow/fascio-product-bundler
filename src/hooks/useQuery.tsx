import { useLocation } from "react-router-dom";

export const useQuery = (key?: string) => {
  const query = new URLSearchParams(useLocation().search);
  if (key) {
    return query.get(key);
  }
  return query.toString();
};
