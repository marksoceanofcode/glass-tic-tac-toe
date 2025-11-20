import { useState, useRef } from 'react';
import { errorMessages } from "@/config/errors.config";


export type GlassTicTacToeProps = {
  id: string
};

const GlassTicTacToe = ({
  id
}: GlassTicTacToeProps) => {
  return (
    <div className="bg-white/20 backdrop-blur-md h-96 w-96 p-4 rounded-2xl shadow dark:bg-black/20">
      <div className="bg-black/80 backdrop-blur-md grid grid-cols-3 gap-0 dark:bg-white/80">
        <div className="text-center">1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  );
};

export default GlassTicTacToe;
