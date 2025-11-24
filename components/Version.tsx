export type VersionProps = {
  id?: string
}

const Version = ({ id = "version-container" }: VersionProps) => {
  return (
    <div
      id={id}
      className="bg-white/20 backdrop-blur-md mt-4 px-6 py-2 shadow text-gray-300 rounded-full w-content dark:bg-black/20 dark:text-gray-300"
    >
      <p className="italic text-xs text-center">v0.8.8-beta</p>
    </div>
  )
}

export default Version
