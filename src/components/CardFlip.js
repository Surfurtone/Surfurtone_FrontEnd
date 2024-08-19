import React, { useState } from 'react'
import './CardFlip.css'

const CardFlip = ({ Dday, name, error }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    // <div className="card-container">
    <div
      className={`card ${isFlipped ? 'is-flipped' : ''}`}
      onClick={handleCardClick}
    >
      {/* 카드 앞면 */}
      <div className="card-face card-front ">
        <div className="card-content">
          <div className="text-xl">카드 앞면</div>
          <div className="text-sm">D-day: {Dday}</div>
          <div className="text-sm">호스트의 한 마디: {name}</div>
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
    //</div>
  )
}

export default CardFlip
