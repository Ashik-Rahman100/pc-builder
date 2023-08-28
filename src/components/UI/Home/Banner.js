
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/modern-desktop-compute-concept-illustration_114360-12156.jpg?w=740&t=st=1693237660~exp=1693238260~hmac=34f6683b7c37dd66c665fa60ef5c7a3d08f1253e560519c65a94ddd0f77a4b19)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Build Your Won Pc </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-outline btn-success">Build - PC</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
