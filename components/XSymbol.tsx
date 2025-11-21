export type XSymbolProps = {
  id?: string
}

const XSymbol = ({ id }: XSymbolProps) => {
  return (
    <div className="flex items-center justify-center h-16">
        <div className="bg-playerTwo/80 border-solid rotate-45 rounded-full translate-x-7 h-2 w-16">
        </div>
        <div className="bg-playerTwo/80 border-solid -rotate-45 rounded-full -translate-x-7 h-2 w-16">
        </div>
    </div>
  )
}

export default XSymbol
