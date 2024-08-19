import React, { useState } from 'react';
import Tarot from '../assets/imgs/Tarot.svg';

const Page4 = () => {
  // 각 항목에 맞는 이모티콘 설정
  const icons = ['👆', '✌️', '🤟', '🖖'];

  // 모달 상태 관리
  const [isOpen, setIsOpen] = useState(true);

  // 모달 닫기 함수
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex min-h-screen justify-center">
      <div className="w-full max-w-[400px] backdrop-blur-md text-white bg-black bg-opacity-50 relative">

        {/* X 버튼 */}
        <button 
          className="absolute top-[-6px] right-6 text-2xl font-bold text-white"
          onClick={closeModal}
        >
          ✕
        </button>

        {/* 카드 이미지와 텍스트 영역 */}
        <div className="px-6 py-6">
          <div className="relative rounded-[28px] overflow-hidden bg-[#1B1F2E] flex justify-center items-center">
            <img 
              src={Tarot}
              alt="Tarot" 
              className="w-[355px] h-[355px] object-cover rounded-[28px]" 
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>

          {/* 성격궁합 등 4개의 평가 */}
          <div className="space-y-4 mt-4 max-h-[400px] overflow-y-scroll">
            {['성격궁합', '가치관 일치', '협력 가능성', '의사소통'].map((title, index) => (
              <div key={index} className="bg-[#465290] p-4 rounded-[15px]">
                <div className="flex justify-between items-center">
                  <div className="text-xl flex items-center font-bold">
                    <span role="img" aria-label="icon" className="mr-2">✌️</span>
                    {title}
                  </div>
                  <div className="text-lg font-bold">SCORE : 75 / 100</div>
                </div>
                <p className="text-sm leading-relaxed border-t-2 border-[#334188]">
                  라붕이의 적극적이고 리더십 있는 성격과 감귤이의 차분하고 내성적인 성격은 대조적이지만, 
                  본연적으로 작용할 수 있습니다. 서로의 부족한 부분을 메워줄 수 있는 관계로, 성격적 
                  궁합이 상당히 좋은 편입니다.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 '종합점수' 부분 */}
        <div className="px-6 py-2 bg-[#2B2F3A] rounded-t-[28px] text-center absolute bottom-0 w-full">
          <div className="text-[18px] font-bold flex justify-center items-center">
            <span role="img" aria-label="icon" className="mr-2">👍</span>
            종합점수 : 60 / 100
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
