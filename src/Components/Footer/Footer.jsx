import { FaEnvelope } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full h-[400px] bg-gray-300 flex items-center">
      <section className="w-[80%] m-auto flex items-center h-full">
        <section className="w-[80%] m-auto flex items-center h-full">
          <div className="w-[280px]">
            <h1 className="font-bold mb-5">About</h1>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <span className="flex">
              <h1 className="font-bold">Email:</h1>
              <a className="ml-2" href="mailto:info@jstemplate.net">

                info@jstemplate.net
              </a>
            </span>
            <span className="flex">
              <h1 className="font-bold">Phone:</h1>
              <p className="ml-2"> 880 123 456 789</p>
            </span>
          </div>
        </section>
        <section>
          <h1 className="font-bold mb-2">Quick Link</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Archived</li>
            <li>Author</li>
            <li>Contact</li>
          </ul>
        </section>
        <section>
          <h1 className="font-bold mb-2">Category</h1>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
            <li>Sports</li>
          </ul>
        </section>
        <div className="w-[600px] h-[250px] bg-white rounded-2xl flex flex-col items-center ">
          <h1 className="font-bold text-center mt-4">Weekly Newsletter</h1>
          <p className="mb-4 mt-4 text-center">
            Get blog articles and offers via email
          </p>
          <span className="flex items-center border-[1px] rounded-[5px] flex-row-reverse justify-between w-[80%]">
            <label className="mr-5"  htmlFor=""><FaEnvelope /></label>
          <input
            className="w-[80%] h-8 pl-5"
            placeholder="Your Email"
            type="email"
            />
            </span>
          <button className="w-[80%] h-8 bg-blue-800 rounded-[5px] text-white font-bold mt-4">
            Subscribe
          </button>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
