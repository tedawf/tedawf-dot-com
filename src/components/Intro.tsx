export default function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Ang Wei Feng (Ted)
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Full-Stack Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I am a software developer and I'm always looking for opportunities to learn cool new technologies.
        I like to spend my time working on side projects, annoying my fat cat{" "}
        <a
          href="https://www.instagram.com/ted.awf/"
          target="_blank"
          className="text-cyan-500 hover:underline underline-offset-2 decoration-2 decoration-cyan-300"
          rel="noreferrer noopener"
        >
          Luffy
        </a>
        , and occasionally, going to the gym.
        <br />
        I graduated from DigiPen Institute of Technology Singapore in May 2023 with a BS in Computer Science in Real-Time Interactive Simulation.
      </p>
    </div>
  )
}