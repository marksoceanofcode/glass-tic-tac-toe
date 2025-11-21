import { useState, useRef } from "react"
import { errorMessages } from "@/config/errors.config"
import { boardTiles } from "@/data/boardTiles"
import { PlayerId } from "../models/Player"
import Circle from "../components/Circle"
import XSymbol from "../components/XSymbol"

export type GlassTicTacToeProps = {
  id: string
}

const GlassTicTacToe = ({ id }: GlassTicTacToeProps) => {
  //useState
  const [currentPlayer, setCurrentPlayer] = useState(PlayerId.one)

  function handlePlayerClick(event: React.MouseEvent<HTMLButtonElement>) {
    const tileId = event.currentTarget.id

    // Update the board tiles to set the clicked tile's player
    // setBoardTiles((prevTiles) =>
    //   prevTiles.map((tile) =>
    //     tile.id === tileId && tile.player === null
    //       ? { ...tile, player: currentPlayer }
    //       : tile
    //   )
    // )
    for(let a=0; a < boardTiles.length; a++){
      if(boardTiles[a].id === tileId){
        boardTiles[a].selected = true
        boardTiles[a].player = currentPlayer
      }
    }

    const nextPlayer = (currentPlayer === PlayerId.one) ? PlayerId.two : PlayerId.one
    setCurrentPlayer(nextPlayer)
  }

  return (
    <>
      <div>
        <h2
          className={`backdrop-blur-md font-bold mb-16 text-5xl text-center
            ${
              currentPlayer === PlayerId.one
                ? "text-playerOne"
                : "text-playerTwo"
            }
          `}
        >
          Player {currentPlayer}&apos;s turn
        </h2>
      </div>
      <div className="bg-white/20 backdrop-blur-md h-96 w-96 p-4 rounded-2xl shadow dark:bg-black/20">
        <div className="grid grid-cols-3 gap-2 h-full rounded-2xl">
          {boardTiles.map((tile, index) => (
            <button
              id={tile.id}
              className={`bg-white/20 backdrop-blur-md content-center rounded-2xl text-center dark:bg-black/20
              ${
                currentPlayer === PlayerId.one
                  ? "hover:bg-playerOne/20 disabled:hover:bg-white/20 disabled:hover:dark:bg-black/20"
                  : "hover:bg-playerTwo/20 disabled:hover:bg-white/20 disabled:hover:dark:bg-black/20"
              }`}
              disabled={tile.player !== PlayerId.none}
              onClick={handlePlayerClick}
            >
              {tile.player === PlayerId.one ? (
                <Circle />
              ) : tile.player === PlayerId.two ? (
                <XSymbol />
              ) : (
                <div className="h-16"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default GlassTicTacToe
