// import React, { useState, useEffect } from "react";
// import ProjectItem from "../projectItem/ProjectItem";
// import style from "./style.module.scss";

// const ProjectsGrid = () => {
//   const [projects, setProjects] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           "https://crm.server.pro-part.es/api/v1/secondary-projects/integration/projects?accessKey=A7gjfjj0WdBynt8d&secretKey=tGH5UlZcgNtAPrfq9MnmMhWji9j5vYXn&isPagination=true&size=6&page=" +
//             currentPage,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({}),
//           }
//         );
//         const data = await response.json();

//         if (response.ok) {
//           setProjects(data.projects);
//           setTotalPages(data.totalPages || 1);
//         } else {
//           setError("Failed to fetch projects");
//         }
//       } catch (err) {
//         setError("Network error");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, [currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className={style.projects}>
//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}

//       <h1 className={style.projects_title}>Projects</h1>
//       <div className={style.projectsGrid}>
//         {projects.map((project, index) => (
//           <ProjectItem project={project} key={index} />
//         ))}
//       </div>

//       {totalPages > 1 && (
//         <div className={style.pagination}>
//           {Array.from({ length: totalPages }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handlePageChange(index)} // API использует 1-based индексы
//               disabled={currentPage === index}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectsGrid;

import React, { useState, useEffect } from "react";
import ProjectItem from "../projectItem/ProjectItem";
import Pagination from "../pagination/Pagination";
import style from "./style.module.scss";
import Loading from "../loading /Loading";

const ProjectsGrid = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://crm.server.pro-part.es/api/v1/secondary-projects/integration/projects?accessKey=A7gjfjj0WdBynt8d&secretKey=tGH5UlZcgNtAPrfq9MnmMhWji9j5vYXn&isPagination=true&size=${itemsPerPage}&page=${currentPage}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          }
        );
        const data = await response.json();

        if (response.ok) {
          setProjects(data.projects || []);
          setTotalPages(data.totalPages || 1);
        } else {
          setError("Ошибка загрузки проектов");
        }
      } catch (err) {
        setError("Ошибка сети");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [currentPage]);

  return (
    <>
      {loading || error ? (
        <Loading/>
      ) : (
        <div className={style.projects}>
          <h1 className={style.projects_title}>Projects</h1>
          <div className={style.projectsGrid}>
            {projects.map((project, index) => (
              <ProjectItem project={project} key={index} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </>
  );
};

export default ProjectsGrid;
