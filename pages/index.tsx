import { Inter } from "next/font/google"
import GlassTicTacToe from "../components/GlassTicTacToe"
import Version from "../components/Version"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`bg-white bg-main-pattern dark:bg-lighter-gray dark:bg-main-pattern ${inter.className}`} //bg-gradient-to-br from-blue-500/80 via-gray-500 to-red-500/80
    >
      <div className=" flex flex-col items-center justify-center min-h-screen">
        <GlassTicTacToe id="game-container" />
        <Version />
      </div>
    </main>
  )
}
