import { useState, useRef } from "react"
import { errorMessages } from "@/config/errors.config"
import { boardTiles } from "@/data/boardTiles"
import { PlayerId } from "../models/Player"
import Circle from "../components/Circle"
import XSymbol from "../components/XSymbol"
import { Tile } from "../models/Tile"

export type GlassTicTacToeProps = {
  id: string
}

const GlassTicTacToe = ({ id }: GlassTicTacToeProps) => {
  //useState
  const [currentPlayer, setCurrentPlayer] = useState(PlayerId.one)
  const [gameIsWon, setGameIsWon] = useState(false)
  const [gameIsDrawn, setGameIsDrawn] = useState(false)

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
    for (let a = 0; a < boardTiles.length; a++) {
      if (boardTiles[a].id === tileId) {
        boardTiles[a].selected = true
        boardTiles[a].player = currentPlayer
      }
    }

    if (checkForWin()) {
      setGameIsWon(true)
    } else if (checkForDraw()) {
      setGameIsDrawn(true)
    } else {
      const nextPlayer = currentPlayer === PlayerId.one ? PlayerId.two : PlayerId.one
      setCurrentPlayer(nextPlayer)
    }
  }

  function checkForWin() {
    //Check for win condition
    const checkRow = (a: Tile, b: Tile, c: Tile) =>
      a.player === b.player &&
      a.player === c.player &&
      a.player !== PlayerId.none

    if (
      checkRow(boardTiles[0], boardTiles[1], boardTiles[2]) ||
      checkRow(boardTiles[3], boardTiles[4], boardTiles[5]) ||
      checkRow(boardTiles[6], boardTiles[7], boardTiles[8])
    ) {
      //Horizontal Win
      return true
    }

    if (
      checkRow(boardTiles[0], boardTiles[3], boardTiles[6]) ||
      checkRow(boardTiles[1], boardTiles[4], boardTiles[7]) ||
      checkRow(boardTiles[2], boardTiles[5], boardTiles[8])
    ) {
      //Vertical Win
      return true
    }

    if (
      checkRow(boardTiles[0], boardTiles[4], boardTiles[8]) ||
      checkRow(boardTiles[2], boardTiles[4], boardTiles[6])
    ) {
      //Cross Win
      return true
    }

    return false
  }

  function checkForDraw() {
    //Check for draw condition
    const emptyTileCount = boardTiles.filter((tile) => {
      return tile.player === PlayerId.none
    })

    return emptyTileCount.length === 0 ? true : false
  }

  return (
    <>
      <div className="bg-white/20 backdrop-blur-md mb-16 px-6 py-2 rounded-full dark:bg-black/20">
        <h2
          className={`font-bold text-5xl text-center
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
              key={index}
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
