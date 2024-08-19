import React, { useState } from 'react'
import './CardFlip.css'

const CardFlip = ({ Dday, host }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      className={`card ${isFlipped ? 'is-flipped' : ''}`}
      onClick={handleCardClick}
    >
      {/* 카드 앞면 */}
      <div className="card-face card-front">
        <div className="d-day z-10">{`D-${Dday}`}</div>

        <div className="card-content w-full h-full bg-slate-200">
          <div className="text-xl">카드 앞면</div>
        </div>

        <div className="absolute bottom-0 w-full host-message h-[60px] bg-black items-center px-4 flex text-[16px] font-bold">
          <div className="text-sm ">호스트의 한 마디: {host}</div>
        </div>
      </div>

      {/* 카드 뒷면 */}
      <div className="card-face card-back">
        <div className="card-content">
          <div className="text-xl">카드 뒷면</div>
          <div className="text-sm">D-day: {Dday}</div>
        </div>
      </div>
    </div>
  )
}

export default CardFlip
