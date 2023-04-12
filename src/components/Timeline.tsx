import timeline from "../data/timeline.json"
import TimelineItem from "./TimelineItem"
import Title from "./Title"


export default function Timeline() {
  const data = (timeline as Experience[])

  return (

    <div className="flex flex-col md:flex-row justify-center my-20 ml-4">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {timeline.map(item => (
          <TimelineItem
            year={item.year}
            title={item.title}
            company={item.company}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  )
}