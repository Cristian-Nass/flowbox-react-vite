export const getProducts = async () => {
  const response = await fetch(
    'https://gist.githubusercontent.com/Cristian-Nass/f5e2dedf7f090591fca4ba9d9873a2f9/raw/ace08fb1b35b3987c3631adf1583ffb1405a4a37/products.json',
    {}
  );

  return response.json();
};
