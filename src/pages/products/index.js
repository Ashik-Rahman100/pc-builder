import Product from "@/components/UI/Home/Product";

const ProductsPage = ({randProduct}) => {
  return (
    <div>
      <Product randProduct={randProduct} />
    </div>
  );
};

export default ProductsPage;

export const getServerSideProps = async () => {
  const res = await fetch("https://pc-builder-two-black.vercel.app/api/products");
  const data = await res.json();
  // console.log(data);
  const allData = data.data;
  const suffleData = allData.sort(() => 0.5 - Math.random());
  const randProduct = suffleData.slice(0, 6);

  return {
    props: {
      randProduct: randProduct,
    },
    // revalidate: 10,
  };
};
