import React from 'react'
import Tarot from '../assets/imgs/Tarot.svg'
import cancleIcon from '../assets/imgs/Page4/cancleIcon.png'

const HostModal = ({ closeModal }) => {
  const compatibilityObj = [
    {
      title: '성격 궁합',
      score: 75,
      description:
        '라봉이의 적극적이고 리더십 있는 성격과 감귤이의 차분하고 내성적인 성격은 대조적이\n' +
        '  지만, 보완적으로 작용할 수 있습니다. 서로의 부족한 부분을 메워줄 수 있는 관계로, 성\n' +
        '  격적 궁합이 상당히 좋은 편입니다.',
    },
    {
      title: '가치관 일치',
      score: 60,
      description:
        '라붕봉이는 외향적이고 도전적이며, 리더 역할을 선호합니다. 반면, 감귤이는 내성적이고 신중하며 깊이 있는 사고를 추구합니다. 이들의 가치관은 다소 차이가 있지만, 목표에 대해 진지한 태도를 공유하고 있어 일치하는 부분이 존재합니다.',
    },
    {
      title: '협력 가능성',
      score: 80,
      description:
        '라봉이는 팀을 이끌며 프로젝트를 추진하는 데 능숙하고, 감귤이는 창의적이면서도 분석적인 사고를 가지고 있어 서로의 능력을 잘 활용할 수 있습니다. 이들의 조합은 큰 시너지를 낼 수 있습니다.',
    },
    {
      title: '의사소통',
      score: 70,
      description:
        '라봉이는 직설적이고 빠르게 의사소통하는 것을 선호하는 반면, 감귤이는 깊이 있는 대화를 즐기지만 천천히 마음을 여는 스타일입니다. 이들이 서로의 의사소통 스타일을 이해하고 존중할 때, 원활한 소통이 가능합니다.',
    },
  ]

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* 모달 배경 */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={closeModal} // 배경 클릭 시 모달 닫기
      ></div>

      {/* 모달 콘텐츠 */}
      <div className="relative w-full h-full max-w-[400px] backdrop-blur-md text-white bg-black bg-opacity-50 rounded-lg shadow-lg z-10">
        {/* X 버튼 */}
        <div className="mt-5 my-1 mx-8 flex justify-end items-center">
          <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-slate-500">
            <button
              onClick={closeModal}
              className="flex justify-center items-center w-full h-full"
            >
              <img
                src={cancleIcon}
                alt="cancleIcon"
                className="w-[25px] h-[25px]"
              />
            </button>
          </div>
        </div>

        {/* 카드 이미지와 텍스트 영역 */}
        <div className="px-6">
          <div className="relative rounded-[28px] overflow-hidden bg-[#1B1F2E] flex justify-center items-center h-[300px]">
            <img
              src={Tarot}
              alt="Tarot"
              className="w-[355px] h-[355px] object-cover rounded-[28px]"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
        </div>
        <div className="px-6">
          {/* 성격궁합 등 4개의 평가 */}
          <div className="space-y-4 mt-4 max-h-[calc(100vh-450px)] overflow-y-scroll">
            {compatibilityObj.map((value, index) => (
              <div key={index} className="bg-[#465290] p-4 rounded-[15px]">
                <div className="flex justify-between items-center">
                  <div className="text-xl flex items-center font-bold">
                    <span role="img" aria-label="icon" className="mr-2">
                      ✌️
                    </span>
                    {value.title}
                  </div>
                  <div className="text-lg font-bold">
                    SCORE : {value.score} / 100
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed border-t-2 border-[#334188]">
                  <br />
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 '종합점수' 부분 */}
        <div className="px-6 py-4 bg-[#2B2F3A] rounded-t-[28px] text-center absolute bottom-0 w-full">
          <div className="text-[18px] font-bold flex justify-center items-center">
            <span role="img" aria-label="icon" className="mr-2">
              👍
            </span>
            종합점수 : 60 / 100
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostModal
