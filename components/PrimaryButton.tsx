export type PrimaryButtonProps = {
  id: string
  buttonText: string
  onClick: any
}

const PrimaryButton = ({ id, buttonText, onClick }: PrimaryButtonProps) => {
  return (
    <button
      id={id}
      className="bg-white/20 px-6 py-4 rounded-2xl shadow dark:bg-black/20 dark:text-white hover:bg-gray-300/80 dark:hover:bg-lighter-gray/80"
      onClick={onClick}
    >
      {buttonText}
    </button>
  )
}

export default PrimaryButton
