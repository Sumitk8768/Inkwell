import Articles from "../components/Articles";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-5xl w-fit mx-auto font-bold mt-10">
        Welcome to <span className="text-[#0056A4]">Inkwell</span>
      </h1>
      <p className="text text-[18px] text-gray-600 w-[35em] mx-auto mt-6 p-auto">
        Discover thoughtful articles on technology, programming, and software
        engineering from passionate writers.
      </p>

      <div className="px-[10em] justify-center ">
        <h3 className="mt-10 font-semibold text-2xl">Latest Articles</h3>

      <div className="mt-6 flex flex-wrap gap-8 ">
           <Articles />
           <Articles />
           <Articles />
             <Articles />
           <Articles />
           <Articles />
           
      </div>
      </div>
    </div>
  );
};

export default Home;
