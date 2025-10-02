import { useParams } from "react-router";

import data from "../data/data";
import { DiReact } from "react-icons/di";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Myprojectsdetails = () => {
  const { id } = useParams();
  const projectId = Number.parseInt(id)

  // Get the project data
  const project = data.projects[projectId]
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <p className="text-gray-600">The project you are looking for does not exist.</p>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">


        {/* Project Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="flex justify-center items-center bg-gray-100 w-full h-64">
            {project.projectImage ? (
              <img
                src={project.projectImage || "/placeholder.svg"}
                alt={`${project.title} preview`}
                className="relative inset-0 w-full h-full object-cover"
              />
            ) : (<DiReact className="w-16 h-16 text-blue-500" />)}
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h1>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-medium text-gray-500">Tech Stack:</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {project.stack}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 m-4">
            {project.liveLink && (<a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"

            >
              <div className="flex items-center gap-2 bg-red-400 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                <FaExternalLinkAlt className="w-4 h-4 " />
                Live Demo
              </div>
            </a>)

            }
            {
              project.gitRepo && (<a
                href={project.gitRepo}
                target="_blank"
                rel="noopener noreferrer"

              >
                <div className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  <FaGithub className="w-4 h-4" />
                  View Code
                </div>

              </a>)
            }
          </div>
        </div>

        {/* Project Highlights */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Highlights</h2>
          <ul className="space-y-4">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">{highlight}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend Technologies */}
          {project.technologies.frontend.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                Frontend Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.frontend.map((tech, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Backend Technologies */}
          {project.technologies.backend.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                Backend Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.backend.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )


}
export default Myprojectsdetails