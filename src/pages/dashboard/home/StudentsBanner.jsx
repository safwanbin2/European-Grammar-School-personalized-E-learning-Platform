import React from "react";

const StudentsBanner = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold">Students</h2>
      <p>
        Our students consistently achieve remarkable academic results and
        personal growth. Through hard work and dedication, they excel in their
        studies and extracurricular activities. Their achievements are a
        testament to their commitment and the supportive learning environment we
        provide.
      </p>
      <section className="text-gray-800">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-12">
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm  group hover:no-underline focus:no-underline bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuoYx9F2NC9j8q-LMe-xHjDrVZhhwyOb46Hg&s"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold">Aiden Kim</h3>
                <span className="text-xs text-gray-600">Class 9</span>
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzRhUcnXGeoxoMGrnUVKNmhpdSFy3RV_Pa6g&s"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold">Liam Patel</h3>
                <span className="text-xs text-gray-600">O Level</span>
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuAm50l7aN6Ue9WErUZRJ9drRx334zewdoNSfS0gJGPkuSVjLz2y8JNrawHXyhGG9-ssQ"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold">Ethan Williams</h3>
                <span className="text-xs text-gray-600">A Level</span>
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrNxwjfL49ctjr5bLToPNANbQRsUy-NqBs5Q&s"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold">Noah Davis</h3>
                <span className="text-xs text-gray-600">A Level</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentsBanner;
