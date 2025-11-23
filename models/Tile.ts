import { PlayerId } from "./Player"

export interface Tile {
  id: string
  selected: boolean
  player: PlayerId
}
