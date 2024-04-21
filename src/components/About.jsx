import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Sumit, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
          I am committed to continuous learning and growth, always seeking new
          challenges and opportunities to expand my horizons.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Education</h1>
        <div
          className="bg-white p-4 shadow rounded-lg mt-2"
          style={{ width: "60%" }}
        >
          <div className="font-semibold text-lg mb-2">
            Karim City College, Jamshedpur
          </div>

          <div className="flex justify-between text-sm mb-1">
            <p>Bachelor of Computer Applications</p>
            <p className="italic">(2021 - 2024)</p>
          </div>

          <div className="flex justify-between text-sm">
            <p>Percentage</p>
            <p className="italic">85%</p>
          </div>
        </div>

        <div
          className="bg-white p-4 shadow rounded-lg mt-2"
          style={{ width: "60%" }}
        >
          <div className="font-semibold text-lg mb-2">
            D.A.V. Public School, Jamshedpur
          </div>

          <div className="flex justify-between text-sm mb-1">
            <p>Intermediate</p>
            <p className="italic">(2019 - 2021)</p>
          </div>

          <div className="flex justify-between text-sm">
            <p>Percentage</p>
            <p className="italic">80%</p>
          </div>
        </div>

        <div
          className="bg-white p-4 shadow rounded-lg mt-2"
          style={{ width: "60%" }}
        >
          <div className="font-semibold text-lg mb-2">
            D.A.V. Public School, Jamshedpur
          </div>

          <div className="flex justify-between text-sm mb-1">
            <p>Matriculation</p>
            <p className="italic">(2021 - 2024)</p>
          </div>

          <div className="flex justify-between text-sm">
            <p>Percentage</p>
            <p className="italic">88.8%</p>
          </div>
        </div>

        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <div
          className="bg-white p-6 shadow rounded-lg mt-2 "
          style={{ width: "60%" }}
        >
          <p className="mb-2">
            <span className="font-semibold">Programming Languages:</span> Java,
            Python, C++
          </p>
          <p className="mb-2">
            <span className="font-semibold">Front-End Technologies:</span>
            {"  "}
            React.js, Tailwind CSS, HTML5, CSS3, JavaScript
          </p>
          <p className="mb-2">
            <span className="font-semibold">Back-End Technologies:</span>
            {"  "}
            MongoDB, Express
          </p>
        </div>

        <br />
        <br />

        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative solutions that exceed client expectations and contribute
          positively to the digital landscape. I am committed to continuous
          learning and growth, always seeking new challenges and opportunities
          to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
