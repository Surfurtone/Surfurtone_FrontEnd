import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import myPageIcon from '../assets/Page2/myPageIcon.png'
import norification from '../assets/Page2/notification.png'
import CardFlip from '../components/CardFlip'
import hostLove from '../assets/Page2/hostLove.png'

const Page2 = () => {
  // 현재 선택된 카테고리를 추적하는 state
  const [selectedCategory, setSelectedCategory] = useState('ALL')

  // 카테고리 버튼들을 배열로 정의
  const categories = ['ALL', '대회활동', '기숙사', '동아리']

  // 태그들을 배열로 정의
  const tags = [
    '#공모전',
    '#구함',
    '#팀원구함',
    '#노동부',
    '#포스터',
    '#어린이공모전',
  ]

  return (
    <div className="flex min-h-screen justify-center">
      <div className="relative w-full max-w-[400px] overflow-x-hidden bg-[#4F64D1]">
        <div className="px-[22px] py-[50px] flex flex-col justify-between bg-[#4F64D1]">
          {/* 헤더 */}
          <div className="flex justify-between items-center mb-[8px] text-white relative">
            <div className="font-Pretendard font-bold text-[25px] absolute left-1/2 transform -translate-x-1/2">
              TWO FACE
            </div>
            <div className="grid grid-cols-2 gap-1 items-center ml-auto">
              <Link to="/page3">
                <img
                  src={myPageIcon}
                  alt="myPageIcon"
                  className="w-[24px] h-[24px]"
                />
              </Link>
              <img
                src={norification}
                alt="norification"
                className="w-[24px] h-[28px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-0">
            {/* 카테고리 */}
            <div className="flex mt-[20px] mb-[12px] justify-start gap-0 font-Pretendard text-[14px] text-white">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`flex items-center justify-center px-[8px] py-[4px] ${
                    selectedCategory === category
                      ? 'font-extrabold underline'
                      : 'font-medium'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* 카드 콘텐츠 */}
            <CardFlip />

            {/* 태그 */}
            <div className="flex flex-wrap mb-[12px] font-Pretendard justify-start gap-2 font-medium text-[13px] text-black mt-[13px]">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-[8px] py-[4px] box-border rounded-[10px] bg-[#DAD4FF]"
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* 버튼 */}
            <div className="flex gap-4 flex-3 mb-[12px] justify-start items-center font-Pretendard font-medium text-[18px] text-black mt-[36px]">
              <Link
                className="flex-2 h-[57px] flex items-center justify-center px-4 box-border rounded-[20px] bg-white"
                to="/chatPage"
              >
                호스트 AI와 대화하기📱
              </Link>

              <button className="flex-1 h-[57px] flex items-center justify-center px-4 box-border rounded-[20px] bg-[#FCC729]">
                다음 추천
              </button>
            </div>
          </div>
        </div>
        {/* 하단 absolute */}
        <div className="absolute bottom-[27px] right-[27px]">
          <Link to="/page4">
            <img src={hostLove} alt="hostLove" className="w-[197px] h-[70px]" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page2
