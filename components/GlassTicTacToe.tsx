import { useEffect, useState, useRef } from "react"
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
  const [tiles, setTiles] = useState(boardTiles)
  const [currentPlayer, setCurrentPlayer] = useState(PlayerId.one)
  const [gameIsWon, setGameIsWon] = useState(false)
  const [gameIsDrawn, setGameIsDrawn] = useState(false)

  // useEffect(() => {
  //   if (checkForWin(tiles)) {
  //     setGameIsWon(true)
  //   } else if (checkForDraw(tiles)) {
  //     setGameIsDrawn(true)
  //   }
  // }, [tiles])

  function handlePlayerClick(event: React.MouseEvent<HTMLButtonElement>) {
    const tileId = event.currentTarget.id

    setTiles((prevTiles) => {
      //This is cool thanks Claude! prevTiles is an arbitrary parameter name, just the current state stored for tiles and we update tiles with what we return
      const updatedTiles = prevTiles.map((tile) =>
        tile.id === tileId && tile.player === PlayerId.none
          ? { ...tile, selected: true, player: currentPlayer }
          : tile
      )

      // Check win/draw with the updated tiles
      if (checkForWin(updatedTiles)) {
        setGameIsWon(true)
      } else if (checkForDraw(updatedTiles)) {
        setGameIsDrawn(true)
      } else {
        setCurrentPlayer(
          currentPlayer === PlayerId.one ? PlayerId.two : PlayerId.one
        )
      }

      return updatedTiles
    })

    // for (let a = 0; a < boardTiles.length; a++) {
    //   if (boardTiles[a].id === tileId) {
    //     boardTiles[a].selected = true
    //     boardTiles[a].player = currentPlayer
    //   }
    // }

    // if (checkForWin()) {
    //   setGameIsWon(true)
    // } else if (checkForDraw()) {
    //   setGameIsDrawn(true)
    // } else {
    //   const nextPlayer =
    //     currentPlayer === PlayerId.one ? PlayerId.two : PlayerId.one
    //   setCurrentPlayer(nextPlayer)
    // }
  }

  function checkForWin(allTiles: any) {
    //Check for win condition
    const checkRow = (a: Tile, b: Tile, c: Tile) =>
      a.player === b.player &&
      a.player === c.player &&
      a.player !== PlayerId.none

    if (
      checkRow(allTiles[0], allTiles[1], allTiles[2]) ||
      checkRow(allTiles[3], allTiles[4], allTiles[5]) ||
      checkRow(allTiles[6], allTiles[7], allTiles[8])
    ) {
      //Horizontal Win
      return true
    }

    if (
      checkRow(allTiles[0], allTiles[3], allTiles[6]) ||
      checkRow(allTiles[1], allTiles[4], allTiles[7]) ||
      checkRow(allTiles[2], allTiles[5], allTiles[8])
    ) {
      //Vertical Win
      return true
    }

    if (
      checkRow(allTiles[0], allTiles[4], allTiles[8]) ||
      checkRow(allTiles[2], allTiles[4], allTiles[6])
    ) {
      //Cross Win
      return true
    }

    return false
  }

  function checkForDraw(allTiles: any) {
    //Check for draw condition
    const emptyTileCount = allTiles.filter((tile: Tile) => {
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
          {tiles.map((tile, index) => (
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
