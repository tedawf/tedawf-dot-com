import portfolio from "../data/portfolio.json"
import PortfolioItem from "./PortfolioItem"

export default function Portfolio() {
  const data = (portfolio as Project[])

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {
          portfolio.map(project => (
            <PortfolioItem
              imgUrl={project.imgUrl}
              title={project.title}
              projectType={project.projectType}
              stack={project.stack}
              link={project.link}
            />
          ))}
      </div>
    </div>
  )
}