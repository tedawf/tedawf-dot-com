type Section = {
  children: string,
  id?: number
}

export default function Title({ children, id }: Section) {
  return (
    <h1
      id={(id && id)?.toString()}
      className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white"
    >
      {children}
    </h1>
  )
}