import Link from "next/link";

const Product = ({randProduct}) => {
  return (
    <div>
      <h1 className="text-6xl text-center my-8">Our Product</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4">
        {
            randProduct.map((product) => <div key={product?._id} className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={product?.image} height={300} width={300} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product?.productName}</h2>
                <p>category: {product?.category}</p>
                <p>price: {product?.price}</p>
                <p>status: {product?.status}</p>
                <p>rating: {product?.rating}</p>
                <div className="card-actions">
                    <Link href={`/details/${product._id}`} className="btn btn-accent tracking-widest">View Details</Link>
                </div>
            </div>
        </div>)
        }
      </div>
    </div>
  );
};

export default Product;
