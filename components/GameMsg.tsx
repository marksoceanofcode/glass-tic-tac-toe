import { PlayerId } from "@/models/Player"

export type GameMsgProps = {
  id: string
  gameDrawn: boolean
  gameWon: boolean
  player: PlayerId
}

const GameMsg = ({ id, gameDrawn, gameWon, player }: GameMsgProps) => {
  const message = gameWon
    ? `Player ${player} wins!`
    : gameDrawn
      ? `Draw.`
      : `Error.`
  return (
    <div className="relative text-center">
      {gameWon ? (
        <div className="absolute inset-16 flex justify-center items-center pointer-events-none">
          <img src="confetti.gif" className="w-full" />
        </div>
      ) : (
        <></>
      )}

      <h4 className="font-bold font-dark-gray text-2xl dark:text-white">
        {message}
      </h4>
    </div>
  )
}

export default GameMsg
