import Link from "next/link";

const Category = ({categories}) => {
    // console.log('category ==>',categories);
  return (
    <div className="mt-24 mb-12">
      <h2 className="text-6xl  font-bold text-center my-8 tracking-widest">
        Featured Category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
        {categories.map((categoryObj) => (
          <div
            key={categoryObj.category}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <Link href={`/categories/${categoryObj.category}`}>
              <figure>
                <img src={categoryObj.image} height={300} width={300} alt="category" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{categoryObj.category}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
