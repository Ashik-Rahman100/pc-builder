import Link from "next/link";

const ProductDetailPage = ({ products }) => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <img src={products.image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{products?.productName}</h1>
          <p className="py-1">category: {products?.category}</p>
          <p className="py-1">status: {products?.status}</p>
          <p className="py-1">price: {products?.price}</p>
          <p className="py-1">avg. rating: {products?.rating}</p>
          <p className="py-1">
            individual Rating: {products?.individualRating}
          </p>
          <p className="py-1">{products?.description}</p>

          <p className="py-2">Key Features:</p>
          <div className="flex gap-16">
            <div>
              <p>Brand: {products?.keyFeatures?.Brand}</p>
              <p>Model: {products?.keyFeatures?.Model}</p>
              <p>Cores: {products?.keyFeatures?.Cores}</p>
            </div>

            <div>
              <p>BaseClock: {products?.keyFeatures?.BaseClock}</p>
              <p>BoostClock: {products?.keyFeatures?.BoostClock}</p>
              <p>Threads: {products?.keyFeatures?.Threads}</p>
            </div>
            <div>
              <p>Socket: {products?.keyFeatures?.Socket}</p>
              <p>TDP: {products?.keyFeatures?.TDP}</p>
            </div>
          </div>
          <div>
            <p className="mt-4 mb-2">User Reviews: </p>
            {products?.reviews?.map((review, index) => (
              <p key={index} className="py-1">
                <span className="text-bold">username:</span> {review.username}{" "}
                <span className="text-bold">comment: </span> {review.comment}{" "}
                <span className="text-bold">rating:</span> {review.rating}
              </p>
            ))}

            <Link href="/">
              <button className="btn btn-accent tracking-widest">
                Go to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products/");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { productId: String(product.id) },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/products/${params.productId}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      products: data,
    },
  };
};
