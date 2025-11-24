import { useEffect, useState } from "react";

export function useMount(): boolean {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
