import omg from "./../../assets/Rectangle 38.png";
export default function Card() {
  const d = new Date();
  return (
    <div className="w-[95%] h-[400px] border-[1px] border-gray-300 rounded-2xl ">
      <a href="">
        <div className="w-[90%] m-auto">
          <img className=" m-auto mt-3" src={omg} alt="" />
          <span className="mt-5 bg-blue-100 px-3 py-1 inline-block rounded text-white">
            <h1 className="text-sm font-medium text-[#4B6BFB]">Technology</h1>
          </span>
          <h1 className="font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
            perspiciatis.
          </h1>
          <div className="w-full flex items-center mt-17 justify-between">
            <span className="flex items-center">
              <img className="w-5 h-5 rounded-3xl" src={omg} alt="" />
              <p className="ml-1.5 text-gray-400">Author</p>
            </span>
            <p className="text-gray-400">
              {d.getDate()}/{d.getMonth() + 1}/{d.getFullYear()}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
