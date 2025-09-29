import { Link } from 'react-router'
import data from '../data/data.js'
import { DiReact } from 'react-icons/di'


const Card = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 p-4">
      {data.projects.map((project, index) => (
        <Link
          to={`/myprojects/${index}`} // use index or unique id
          key={index}

        >
          <div
            key={index}
            className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="flex justify-center items-center bg-gray-100 w-full h-56 sm:h-48 md:h-56 lg:h-60 xl:h-60 2xl:h-60">
              <DiReact className="w-16 h-16 text-blue-500" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold  mb-2 list-disc list-inside line-clamp-1">{project.title}</h2>
              <ul className="text-gray-700  sm:text-base mb-2 list-disc list-inside line-clamp-3">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              <span className="text-gray-400  mb-2 list-disc list-inside line-clamp-1">Stack: {project.stack}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Card
