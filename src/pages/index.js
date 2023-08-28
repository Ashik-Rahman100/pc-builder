import Banner from "@/components/UI/Home/Banner";
import Product from "@/components/UI/Home/Product";

const HomePage = ({randProduct}) => {
  return (
    <div>
      <Banner />
      <Product randProduct={randProduct} />
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () =>{
  const res = await fetch('http://localhost:5000/products');
  const data = await res.json();
  // console.log(data);
  const suffleData = data.sort(() => 0.5 - Math.random());
  const randProduct = suffleData.slice(0, 6)

  return{
    props:{
      randProduct: randProduct,
    },
    
  }
}