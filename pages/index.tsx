import { Inter } from "next/font/google"
import GlassTicTacToe from "../components/GlassTicTacToe"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`bg-gradient-to-br from-blue-500/80 via-gray-500 to-red-500/80 ${inter.className}`}
    >
      <div className="flex flex-col items-center justify-center min-h-screen">
        <GlassTicTacToe id="game-container" />
      </div>
    </main>
  )
}
