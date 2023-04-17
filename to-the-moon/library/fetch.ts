export const fetchData : any = async (setWallet: any, setBitcoin:any, setEtherium:any) => {
    try {
      const data_res = await fetch('/api/wallet/1');
      const bitcoin_res = await fetch(`/api/price/BTC`);
      const ether_res = await fetch(`/api/price/ETC`);

      if (!data_res.ok || !bitcoin_res.ok || !ether_res.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await data_res.json();
      const bit = await bitcoin_res.json();
      const ether = await ether_res.json();

      setWallet(data);
      setBitcoin(Number(bit.price));
      setEtherium(Number(ether.price));
    } catch (error) {
      console.error('Error fetching data:', error);
      // You can set an error state here and display it in your component if you want
      setWallet({total:-100, bitcoin:0, cash:0});
    }
};