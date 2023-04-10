export default function PortfolioItem({ title, imgUrl, projectType, stack, link }: Project) {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-black bg-white p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[104%] rounded-[2rem] bg-black rounded-br-3xl" />
      <a
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-36 object-cover"
        />
      </a>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-italic text-xl">{projectType}</span>
        <a
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">
            {title}
          </h2>
        </a>

        <div className="w-full mt-2 flex items-center justify-between">
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
            {stack.map(item => (
              <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">
                {item}
              </span>
            ))}
          </p>
        </div>
      </div>
    </article>
  )
}