import React, { createContext, useState, useContext, useEffect, useCallback } from "react";
import { fetchData } from "@/library/fetch";

interface WalletData {
  wallet: {
    total: number;
    bitcoin: number;
    cash: number;
  };
  bitcoin: number;
  etherium: number;
  updateWallet: () => void;
}

const WalletContext = createContext<WalletData | null>(null);

const WalletProvider: any = ({ children }: any) => {
  const [wallet, setWallet] = useState<any>(undefined);
  const [bitcoin, setBitcoin] = useState(0);
  const [etherium, setEtherium] = useState(0);

  const updateWallet = useCallback(async () => {
    await fetchData(setWallet, setBitcoin, setEtherium);
  }, []);

  useEffect(() => {
    updateWallet();

    const interval = setInterval(updateWallet, 15000);

    return () => {
      clearInterval(interval);
    };
  }, [updateWallet]);

  return (
    <WalletContext.Provider value={{ wallet, bitcoin, etherium, updateWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export { WalletContext, WalletProvider };
