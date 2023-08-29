import Banner from "@/components/UI/Home/Banner";
import Category from "@/components/UI/Home/Category";
import Product from "@/components/UI/Home/Product";

const HomePage = ({randProduct,categories}) => {
  return (
    <div className="min-h-screen">
      <Banner />
      <Product randProduct={randProduct} />
      <Category categories={categories} />
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () =>{
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  // console.log(data, "data ==>");
  const allProducts = data.data;
  const shuffledData = allProducts.sort(() => 0.5 - Math.random());
  const randomProducts = shuffledData.slice(0, 6);

  const categoryRes = await fetch('http://localhost:3000/api/categories');
  const categoryData = await categoryRes.json();
  // console.log(categoryData);
  return{
    props:{
      randProduct: randomProducts,
      categories:categoryData.data,
    },
    revalidate:10,
  }
  
}