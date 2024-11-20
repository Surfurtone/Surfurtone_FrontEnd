import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Img01 from '../assets/imgs/Img01.svg'
import Img02 from '../assets/imgs/Img02.svg'
import Img03 from '../assets/imgs/Img03.svg'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      image: Img01,
      text: '"대화가 두려운 당신에게"',
      description1: '다른 사람과의 대화가 부담스러우신가요?',
      description2:
        '투페이스는 당신 대신 대화를 시작해주는 AI 솔루션을 제공합니다.',
      description3: '대화에 대한 불안감 없이 편안하게 소통을 시작해보세요.',
      buttonText: '다음으로',
    },
    {
      image: Img02,
      text: '"친구 만들기가 어려운\n사람들을 위한 새로운 시작"',
      description1:
        '투페이스는 당신의 성격에 맞는 인연매칭과 공간접점을 제공하고,',
      description2: '자연스럽게 연결이 될 수 있도록 도와줍니다.',
      buttonText: '다음으로',
    },
    {
      image: Img03,
      text: '"나와 꼭 맞는\n인연을 찾고 싶은 당신에게"',
      description1: '지금 투페이스를 시작하세요!',
      buttonText: '투페이스 시작하기',
    },
  ]

  const nextSlide = () => {
    if (currentSlide === 2) navigate('/page2')
    else setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  return (
    <div className="flex min-h-screen justify-center items-center relative bg-[#4F64D1] font-pretendard font-[400]">
      <div className="w-full max-w-[400px] flex flex-col justify-between items-center bg-[#4F64D1] h-screen">
        {/* 고정된 상단 부분 */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[30px] font-bold text-white mt-[6.5rem] mb-[-1.2rem]">
            TWO
          </h2>
          <h2 className="text-[48px] font-bold text-white mb-[4.35rem]">
            FACE
          </h2>
          <div className="flex space-x-2 mb-[-3rem]">
            {slides.map((_, bulletIndex) => (
              <div
                key={bulletIndex}
                className={`w-2 h-2 rounded-full ${
                  bulletIndex === currentSlide ? 'bg-black' : 'bg-white border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 슬라이드되는 중앙 부분 */}
        <div
          className="relative w-full flex-grow flex justify-center items-center overflow-hidden"
          style={{ marginBottom: '20px' }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute transition-transform duration-500 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
              }}
            >
              <img
                src={slide.image}
                alt="Slide Image"
                className="w-full max-w-[197px] mx-auto my-4"
              />
              <h3 className="text-[25px] font-bold text-white mb-2 whitespace-pre-line text-center">
                {slide.text}
              </h3>
              <p className="text-[13px] text-white text-center">
                {slide.description1}
              </p>
              {slide.description2 && (
                <p className="text-[13px] text-white text-center">
                  {slide.description2}
                </p>
              )}
              {slide.description3 && (
                <p className="text-[13px] text-white text-center">
                  {slide.description3}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* 고정된 하단 버튼 */}
        <button
          onClick={nextSlide}
          className="bg-white text-[#4F64D1] font-semibold py-[0.5rem] px-[1rem] mb-[6.25rem] rounded-[20px] text-[20px]"
          style={{
            width: '100%',
            maxWidth: '350px',
            height: '57px',
            minHeight: '57px',
          }}
        >
          {slides[currentSlide].buttonText}
        </button>
      </div>
    </div>
  )
}

export default Home
