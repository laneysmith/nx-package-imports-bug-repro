import { useEffect } from "react";

export const useThisHook = () => useEffect(() => {
  console.log('I\'m a different useless hook');
}, []);
