export type CircleProps = {
  id?: string
}

const Circle = ({ id }: CircleProps) => {
  return (
    <div className="flex items-center justify-center h-16">
      <div className="border-8 border-playerOne/80 border-solid rounded-full h-16 w-16"></div>
    </div>
  )
}

export default Circle
