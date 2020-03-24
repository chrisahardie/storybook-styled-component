import { useLocation } from "react-router-dom";

/**
 * Custom hook to parse query string
 * @returns a parsed querystring you can interrogate via .get()
 */
export function useQuery() {
  return new URLSearchParams(useLocation().search);
}