import React from "react";
import qrcode from "../../public/qr_code.png";
import snake from "../../public/snake.jpg";
import youtube from "../../public/youtube_logo.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: youtube,
      name: "Youtube UI Clone",
      link: "https://sumit-dev-youtube-clone.netlify.app",
      description:
        "A responsive clone of youtube.com with additional functionality including Speech to Text search.",
    },
    {
      id: 2,
      logo: qrcode,
      name: "QR Code Generator",
      link: "https://chipper-faloodeh-cf59d7/",
      description:
        "User can type a text message that will encoded in a QR code and can be scanned by a scanner to see text message",
    },
    {
      id: 3,
      logo: snake,
      name: "Snake Game",
      link: "https://noobiecoder00.github.io/Snake-game/",
      description:
        " A real-time snake game with immersive styling using CSS3 with additional features of highscores and leaderborad",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
          {cardItem.map(({ id, logo, name, link, description }) => (
            <div
              className="flex flex-col md:w-[350px] md:h-[450px] border-[2px] rounded-lg shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300 overflow-hidden"
              key={id}
            >
              <img
                src={logo}
                className="w-full h-1/2 object-contain"
                alt={`${name} project logo`}
              />
              <div className="flex flex-col items-center justify-start p-4 grow">
                <h3 className="text-center font-bold text-xl mb-2">{name}</h3>
                <p className="text-gray-700">{description}</p>
                <a
                  href={link}
                  className="mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors duration-200 w-full text-center"
                  target="_blank"
                  rel=""
                >
                  Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
