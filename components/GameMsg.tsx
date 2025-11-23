import { PlayerId } from "@/models/Player"

export type GameMsgProps = {
  id: string
  gameDrawn: boolean
  gameWon: boolean
  player: PlayerId
}

const GameMsg = ({ id, gameDrawn, gameWon, player }: GameMsgProps) => {
  const message = (gameWon) ? `Player ${player} wins!` : (gameDrawn) ? `Draw.` : `Error.`
  return (
    <div className="text-center">
      <h4 className="font-bold text-2xl">
        {message}
      </h4>
    </div>
  )
}

export default GameMsg
