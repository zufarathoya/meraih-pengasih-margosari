import React from 'react'
import Image from 'next/image';

interface program {
  title: string;
  image: string;
  description: string;
  date: string;
}

const Chart = ({programs}:program[]) => {
  return (
    <div>
      {/* ✅ Mobile: Horizontal Scroll */}
      < div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-gray-100 pb-4 md:hidden" >
        {
          programs.map((prog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col flex-shrink-0 w-64"
            >
              <Image
                src={prog.image}
                alt={prog.title}
                width={300}
                height={200}
                className="rounded-lg mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-gray-800">{prog.title}</h3>
              <span className="text-sm text-gray-500">{prog.date}</span>
              <p className="text-gray-600 mt-2 flex-grow text-sm">{prog.description}</p>
            </div>
          ))
        }
      </div >

      {/* ✅ Desktop: Horizontal Scroll */}
      < div className="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-gray-100 pb-4 hidden md:flex" >
        {
          programs.map((prog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <Image
                src={prog.image}
                alt={prog.title}
                width={400}
                height={250}
                className="rounded-lg mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">{prog.title}</h3>
              <span className="text-sm text-gray-500">{prog.date}</span>
              <p className="text-gray-600 mt-2 flex-grow">{prog.description}</p>
            </div>
          ))
        }
      </div >
    </div>
  )
}

export default Chart
