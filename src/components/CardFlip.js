import React, { useEffect, useState } from 'react'
import './CardFlip.css'
import emptyheart from '../assets/imgs/emptyheart.png'
import heart from '../assets/imgs/heart.png'

const CardFlip = ({
  user,
  category,
  d_day,
  description,
  end_day,
  id,
  image_url,
  likes,
  tags,
  title,
  views,
}) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
    console.log(isFlipped)
  }

  const clickHeart = (e) => {
    e.stopPropagation()
    setIsLiked((prev) => !prev)
  }

  useEffect(() => {
    setIsLiked(false)
    setIsFlipped(false)
  }, [id])

  return (
    <div
      className={`card ${isFlipped ? 'is-flipped' : ''}`}
      onClick={handleCardClick}
    >
      {/* 카드 앞면 */}
      <div className="card-face card-front">
        {category === '광고' ? (
          <div className="ad z-10">광고</div>
        ) : (
          <div className="d-day z-10">{`D-${d_day}`}</div>
        )}

        <div
          className="card-content-front w-full h-full bg-slate-200 rounded-lg"
          style={{
            backgroundImage: `url(${image_url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* 앞면 콘텐츠 */}
        </div>
        {isLiked ? (
          <img
            src={heart}
            className="heart text-black w-[20px]"
            onClick={clickHeart}
          />
        ) : (
          <img
            src={emptyheart}
            className="heart text-black w-[20px]"
            onClick={clickHeart}
          />
        )}
        <div className="absolute bottom-0 w-full host-message h-[60px] bg-black items-center px-4 flex text-[16px] font-bold rounded-b-lg">
          <div className="text-lg">{title}</div>
        </div>
      </div>

      {/* 카드 뒷면 */}
      <div className="card-face card-back pt-7 pb-4 px-4">
        {category === '광고' ? (
          <div className="ad z-10">광고</div>
        ) : (
          <div className="d-day z-10">{`D-${d_day}`}</div>
        )}{' '}
        <div className="card-content text-black overflow-y-scroll ">
          <div className="title font-bold mb-2">{title}</div>
          <div className="description text-xs">{description}</div>
        </div>
        {isLiked ? (
          <img
            src={heart}
            className="heart text-black w-[20px]"
            onClick={clickHeart}
          />
        ) : (
          <img
            src={emptyheart}
            className="heart text-black w-[20px]"
            onClick={clickHeart}
          />
        )}
      </div>
    </div>
  )
}

export default CardFlip
