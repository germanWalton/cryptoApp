let cryptoList = [
  { id: 1, name: "Bitcoin", symbol: "BTC", price: "56,737.75" },
  { id: 2, name: "Ethereum", symbol: "ETH", price: "2,345.26" },
  { id: 3, name: "Litecoin", symbol: "LTC", price: "61.19" },
  { id: 4, name: "BNB", symbol: "BNB", price: "514.07" },
  { id: 5, name: "Solana", symbol: "SOL", price: "133.66" },
  { id: 6, name: "Dogecoin", symbol: "DOGE", price: "0.101" },
  { id: 7, name: "Shiba Inu", symbol: "SHIB", price: "0.00001331" }

];

export const listCryptos = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoList);
    }, 1000);
  });
};

export const addCrypto = async (newCrypto) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      cryptoList = [...cryptoList, { ...newCrypto, id: cryptoList.length + 1 }];
      resolve(newCrypto);
    }, 1000);
  });
};

export const updateCrypto = async (id, updatedCrypto) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      cryptoList = cryptoList.map((crypto) => (crypto.id === id ? updatedCrypto : crypto));
      resolve(updatedCrypto);
    }, 1000);
  });
};

export const deleteCrypto = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      cryptoList = cryptoList.filter((crypto) => crypto.id !== id);
      resolve(id);
    }, 1000);
  });
};
