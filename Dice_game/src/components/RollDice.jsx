import { useState } from "react";

useState

const RollDice = ({currentDice, rolldice}) => {

   return(
      <div  className="flex flex-col items-center mt-[48px]">
          <div onClick= {rolldice} className="cursor-pointer">
              <img src={`/dices/dice_${currentDice}.png`} alt="" />
          </div>
          <p className="font-[26px]">Click on dice to roll</p>
      </div>
   )
}

export default RollDice;