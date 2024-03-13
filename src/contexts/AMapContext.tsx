import { createContext, useContext } from "react";

export const AMap = createContext<{ current: any }>({ current: null });
export const Map = createContext<{ current: any }>({ current: null });

export function useAMap() {
  return useContext(AMap);
}
export function useMap() {
  return useContext(Map);
}
// export default AMap;
