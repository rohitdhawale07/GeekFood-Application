import React from "react";
import Navbar from "./Navbar";
// import {FontAwesomeIcon} from '@fortawesome/fontawesome-svg-core'

function HomePage() {
  const cardsData = [
    {
      id: 1,
      heading: "Gladis Lennon",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      subContent: "Head of SEO",
    },
    {
      id: 2,
      heading: "Gladis Lennon",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      subContent: "Head of SEO",
    },
    {
      id: 3,
      heading: "Gladis Lennon",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      subContent: "Head of SEO",
    },
    {
      id: 4,
      heading: "Gladis Lennon",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      subContent: "Head of SEO",
    },
    {
      id: 5,
      heading: "Gladis Lennon",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      subContent: "Head of SEO",
    },
    {
      id: 6,
      heading: "Gladis Lennon",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      subContent: "Head of SEO",
    },
  ];

  return (
    <div>
      <div className="relative">
        <div
          className="bg-cover bg-center h-screen flex items-center justify-center"
          style={{
            backgroundImage:
              'url("https://primary.jwwb.nl/unsplash/wot0Q5sg91E.jpg?enable-io=true&enable=upscale&crop=1920%2C892%2Cx0%2Cy264%2Csafe&width=900&height=418")',
          }}
        >
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Let's Find Your <br />{" "}
              <span className="text-red-500">Favourite Food. </span>
            </h1>
            <p className="text-lg mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div>
              <button className="bg-red-500 text-white px-6 py-3 mr-4 hover:bg-red-600 rounded-md">
                Search Now
              </button>
              <button className="bg-white text-red-500 px-6 py-3 hover:bg-gray-200 rounded-md">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center md:py-16 mt-16">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Section Image"
            className="w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 bg-gray-200 text-black-700 p-8">
          <h1 className="text-4xl font-bold mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            debitis.
          </h1>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            molestiae! Quidem est esse numquam odio deleniti, beatae, magni
            dolores provident quaerat totam eos, aperiam architecto eius quis
            quibusdam fugiat dicta.
          </p>

          <button className="bg-blue-700 text-white px-6 py-3 hover:bg-opacity-80 rounded-md">
            Get in Touch
          </button>
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center">
        {cardsData.map((card) => (
          <div key={card.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white p-6 rounded-md shadow-md">
              <p className="text-gray-600 mb-4">{card.content}</p>
              <h2 className="text-xl font-bold mb-2">{card.heading}</h2>
              <p className="text-gray-600">{card.subContent}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-gray-800 text-white p-8  flex flex-col items-center justify-center">
        <div className="container mx-auto">
          <div className="flex items-center mb-4">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Footer Logo"
              className="h-8 w-8 mr-2"
            />
            <span className="font-semibold text-lg">GeekFoods</span>
          </div>

          <div className="mb-4 text-gray-200">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt{" "}
              <br />
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>

          <div className="flex items-center mb-4 font-bold tracking-wide">
            <a
              href="#"
              className="text-white px-3 transition duration-200 hover:text-blue-500"
            >
              About
            </a>
            <a
              href="#"
              className="text-white px-3 transition duration-200 hover:text-blue-500"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-white px-3 transition duration-200 hover:text-blue-500"
            >
              History
            </a>
            <a
              href="#"
              className="text-white px-3 transition duration-200 hover:text-blue-500"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white px-3 transition duration-200 hover:text-blue-500"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-white px-3 transition duration-200 hover:text-blue-500"
            >
              Blog
            </a>
          </div>

          {/* <div className="flex items-center">
            <a href="#" className="text-white mx-2">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
            <a href="#" className="text-white mx-2">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a href="#" className="text-white mx-2">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a href="#" className="text-white mx-2">
              <FontAwesomeIcon icon={["fab", "whatsapp"]} />
            </a>
          </div> */}
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
