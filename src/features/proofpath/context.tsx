import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { emptyData, type Data, type Lang, type Pair } from "./model";
type Store = {
  data: Data;
  update: (change: Partial<Data>) => void;
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (en: string | Pair, so?: string) => string;
  ready: boolean;
  storageError: boolean;
};
const Context = createContext<Store | null>(null);
export function ProofProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<Data>(emptyData);
  const [lang, setLang] = useState<Lang>("en");
  const [ready, setReady] = useState(false);
  const [storageError, setStorageError] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem("proofpath-v1");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (
          parsed?.data?.profile &&
          Array.isArray(parsed.data.results) &&
          Array.isArray(parsed.data.suggested)
        ) {
          setData({
            ...emptyData,
            ...parsed.data,
            profile: { ...emptyData.profile, ...parsed.data.profile },
          });
          setLang(parsed.lang === "so" ? "so" : "en");
        }
      }
    } catch {
      setStorageError(true);
    }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = lang;
    document.documentElement.dir = "ltr";
    try {
      localStorage.setItem("proofpath-v1", JSON.stringify({ data, lang }));
    } catch {
      setStorageError(true);
    }
  }, [data, lang, ready]);
  const t = (en: string | Pair, so?: string) =>
    typeof en === "string" ? (lang === "so" ? (so ?? en) : en) : en[lang === "so" ? 1 : 0];
  return (
    <Context.Provider
      value={{
        data,
        update: (change) =>
          setData((old) => ({ ...old, ...change, generated: change.generated ?? "" })),
        lang,
        setLang,
        t,
        ready,
        storageError,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export function useProof() {
  const value = useContext(Context);
  if (!value) throw new Error("ProofProvider missing");
  return value;
}
