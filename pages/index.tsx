import { Inter } from "next/font/google";
import GlassTicTacToe from "../components/GlassTicTacToe"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <GlassTicTacToe
          id="game-container"
        />
      </div>
      
    </main>
  );
}
