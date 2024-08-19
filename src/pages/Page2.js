import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import myPageIcon from '../assets/imgs/Page2/myPageIcon.png'
import norification from '../assets/imgs/Page2/notification.png'
import CardFlip from '../components/CardFlip'
import Chat from '../assets/imgs/Page2/Chat.svg'
import HostModal from '../components/HostModal'
import compatibility from '../assets/imgs/Page2/compatibility.png'

const Page2 = () => {
  // 현재 선택된 카테고리를 추적하는 state
  const [selectedCategory, setSelectedCategory] = useState('ALL')

  // 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 모달 열기 함수
  const openModal = () => {
    setIsModalOpen(true)
  }

  // 모달 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // 카테고리 버튼들을 배열로 정의
  const categories = ['ALL', '대회활동', '기숙사', '동아리']

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

          {/* 검색 입력창 */}
          <div className="flex justify-center mt-[20px] mb-[12px] relative ">
            <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              🔍
            </button>
            <input
              type="text"
              placeholder="찾으시는 활동이 있으신가요?"
              className="w-full pl-[3rem] pr-[12px] py-[8px] text-[13px] rounded-[10px] bg-white text-black"
            />
          </div>

          {/* 카테고리 */}
          <div className="flex justify-start gap-0 font-Pretendard text-[14px] text-white">
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

          {/* 버튼 */}
          <div className="flex gap-4 flex-3 justify-start items-center font-Pretendard font-medium text-[18px] text-black my-7">
            <button
              className="flex-2 h-[57px] flex items-center justify-center px-4 box-border rounded-[20px] bg-white"
              onClick={openModal} // 버튼 클릭 시 모달 열기
            >
              호스트 AI와 대화하기
            </button>

            <button className="flex-1 h-[57px] flex items-center justify-center px-4 box-border rounded-[20px] bg-[#FCC729]">
              다음 추천
            </button>
          </div>

          <div className="relative self-end flex justify-center h-[65px] p-3 bg-[#DAD4FF] rounded-full cursor-pointer group">
            <img src={compatibility} alt="" className="relative z-20" />
            <button
              onClick={openModal} // 버튼 클릭 시 모달 열기
            >
              <div className="absolute left-[-9rem] top-1/4 bg-[#DAD4FF] px-5 py-1 rounded-l-full font-medium transform translate-x-10 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 z-10">
                호스트와 궁합보기
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* 모달이 열려 있을 때만 Modal 컴포넌트를 렌더링 */}
      {isModalOpen && <HostModal closeModal={closeModal} />}
    </div>
  )
}

export default Page2
