export const getProducts = async () => {
  const response = await fetch(
    'https://gist.githubusercontent.com/Cristian-Nass/f5e2dedf7f090591fca4ba9d9873a2f9/raw/29ac2ebc24324ec644cf4c1a69a1e50f0208f73e/products.json',
    {}
  );

  return response.json();
};
