import { Inter } from "next/font/google";
import GlassTicTacToe from "../components/GlassTicTacToe"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`bg-gradient-to-br from-indigo-500/80 via-blue-300 to-sky-500/80 ${inter.className}`}
    >
      <div className="flex flex-col items-center justify-center min-h-screen">
        <GlassTicTacToe
          id="game-container"
        />
      </div>
      
    </main>
  );
}
