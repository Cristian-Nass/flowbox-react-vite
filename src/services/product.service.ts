export const getProducts = async () => {
  const response = await fetch(
    'https://gist.githubusercontent.com/Cristian-Nass/f5e2dedf7f090591fca4ba9d9873a2f9/raw/0053964fc901421c6f6fa62deb035a220764c958/products.json',
    {}
  );

  return response.json();
};
