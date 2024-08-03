import React from "react";

const TeachersBanner = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold">Teachers</h2>
      <p className="">
        Our teachers are dedicated professionals who bring a wealth of knowledge
        and experience to the classroom. They are passionate about student
        success and employ innovative teaching methods to inspire and motivate.
      </p>
      <section className="text-gray-800">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-12">
          <div
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZX6pBHc0xp4t73Cnynv2eJSA0yL5fMUSkRA&s"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl">
                John Doe (Principle)
              </h3>
              <p>
                “Education is not just about imparting knowledge; it’s about
                inspiring curiosity and a lifelong love of learning. Together,
                we can achieve greatness.”
              </p>
            </div>
          </div>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm  group hover:no-underline focus:no-underline bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSagQFsj0MOBegJDx4UtxXZVEloCsgoA0pAug&s"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold">Michael Jordan</h3>
                <span className="text-xs text-gray-600">English</span>
              </div>
            </div>
            <div
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm  group hover:no-underline focus:no-underline bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_R_vlnUz9UhylMPCccagw4dMqhbs4UMPAA&s"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold">John Carry</h3>
                <span className="text-xs text-gray-600">Mathematics</span>
              </div>
            </div>
            <div
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm  group hover:no-underline focus:no-underline bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9Ybgu-3psgpmfvul2z879e4kMQvSbaw9ItYfnM4R-McgtimDw40Nx7nn8qZIflmD_9E"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold">Kamal Uddin</h3>
                <span className="text-xs text-gray-600">Chemistry</span>
              </div>
            </div>
            <div
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm  group hover:no-underline focus:no-underline bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzSFup4GceRsWQiRrWaTc9yqYkBzWvfyzgoUREXNM4-heoYx43nY_L2YIcxlhqNeInqw"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold">Yuhan Cryuf</h3>
                <span className="text-xs text-gray-600">Biology</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeachersBanner;
