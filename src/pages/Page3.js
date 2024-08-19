// 마이페이지 page3

import backIcon from '../assets/imgs/chatPage/backIcon.png'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gamgyul from '../assets/imgs/gamgyul.png'
import camera from '../assets/imgs/camera.png'
import adIcon from '../assets/imgs/adicon.png'
import editIcon from '../assets/imgs/editIcon.png'
import myPageIcon from '../assets/imgs/Page2/myPageIcon.png'
import norification from '../assets/imgs/Page2/notification.png'
import { useSelector } from 'react-redux'

const Page2 = () => {
  const navigate = useNavigate()
  const userCountReducer = useSelector((state) => state.userCountSlice)

  const navigateAd = (option) => {
    navigate('/pageA', { state: option })
  }

  const tagObj = ['생기발랄', 'IT', '팀원구함', '소심함']

  // useEffect(() => {}, [userCountReducer])

  return (
    <div className="flex min-h-screen justify-center">
      <div className="w-full max-w-[400px] overflow-x-hidden bg-[#4F64D1] h-screen flex flex-col">
        {/* 헤더 */}

        <div className="flex justify-between items-center mb-[8px] text-white relative px-[22px] pt-[50px]">
          <div className="items-center">
            <Link to="/page2">
              <img
                src={backIcon}
                alt="backIcon"
                className="w-[15px] h-[17px]"
              />
            </Link>
          </div>
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

        <div className="flex flex-col px-5 py-[20px]">
          {/*캐릭터 사진*/}
          <div className="flex flex-col items-center">
            <div className="relative w-fit rounded-3xl flex justify-center items-center z-10">
              <div className="relative w-full rounded-3xl border-2 border-black bg-white px-2 z-20">
                <img
                  src={gamgyul}
                  alt=""
                  className="w-full h-full object-contain p-2"
                />

                <div className="absolute bottom-0 right-[-0.75rem] w-[31px] h-[31px] flex justify-center items-center rounded-full border-2 border-black bg-white z-30 cursor-pointer">
                  <img src={camera} alt="" />
                </div>
              </div>

              <div
                className="absolute left-[-6.2rem] flex flex-col justify-center items-center rounded-full border-2 border-black bg-white p-4 z-0 cursor-pointer"
                onClick={() => {
                  navigateAd('compatibility')
                }}
              >
                <div className="text-xs font-semibold pt-2">남은 궁합 횟수</div>
                <div className="text-xl font-bold text-[#4F64D1]">
                  {userCountReducer.compatibilityCount}회
                </div>
                <img src={adIcon} alt="" />
              </div>

              <div
                className="absolute right-[-6.2rem] flex flex-col justify-center items-center rounded-full border-2 border-black bg-white p-4 z-0 cursor-pointer"
                onClick={() => {
                  navigateAd('chat')
                }}
              >
                <div className="text-xs font-semibold pt-2">남은 대화 횟수</div>
                <div className="text-xl font-bold text-[#4F64D1]">
                  {userCountReducer.chatCount}회
                </div>
                <img src={adIcon} alt="" />
              </div>
            </div>

            <div className="text-2xl text-white font-extrabold pt-3 pb-1">
              감귤이
            </div>
            <div className="rounded-2xl bg-white px-8 py-1 mb-5 text-xs font-bold">
              내정보
            </div>
          </div>

          {/*정보창*/}
          <div className="bg-white rounded-3xl p-6">
            <div className="text-2xl font-bold text-black mb-6">기본정보</div>

            {/* 기본 정보 섹션 */}
            <div className="grid grid-cols-2 gap-y-1 gap-x-6 text-sm">
              <div className="text-[#9B8787]">이름</div>
              <div className="flex items-center">
                홍길동
                <img
                  src={editIcon}
                  alt="edit"
                  className="ml-1 inline-block align-middle cursor-pointer"
                />
              </div>

              <div className="text-[#9B8787]">별명</div>
              <div className="flex items-center">
                감귤이
                <img
                  src={editIcon}
                  alt="edit"
                  className="ml-1 inline-block align-middle cursor-pointer"
                />
              </div>

              <div className="text-[#9B8787]">학교</div>
              <div className="flex items-center">
                제주대학교
                <img
                  src={editIcon}
                  alt="edit"
                  className="ml-1 inline-block align-middle cursor-pointer"
                />
              </div>

              <div className="text-[#9B8787]">학과</div>
              <div className="flex items-center">
                인공지능학과
                <img
                  src={editIcon}
                  alt="edit"
                  className="ml-1 inline-block align-middle cursor-pointer"
                />
              </div>

              <div className="text-[#9B8787]">학번</div>
              <div className="flex items-center">
                2021108030
                <img
                  src={editIcon}
                  alt="edit"
                  className="ml-1 inline-block align-middle cursor-pointer"
                />
              </div>

              <div className="text-[#9B8787]">학년</div>
              <div className="flex items-center">
                4학년
                <img
                  src={editIcon}
                  alt="edit"
                  className="ml-1 inline-block align-middle cursor-pointer"
                />
              </div>

              <div className="text-[#9B8787]">성별</div>
              <div className="flex items-center">
                남
                <img
                  src={editIcon}
                  alt="edit"
                  className="ml-1 inline-block align-middle cursor-pointer"
                />
              </div>

              <div className="text-[#9B8787]">전화번호</div>
              <div className="flex items-center">
                010-8888-8888
                <img
                  src={editIcon}
                  alt="edit"
                  className="ml-1 inline-block align-middle cursor-pointer"
                />
              </div>

              <div className="text-[#9B8787]">MBTI</div>
              <div className="flex items-center">
                ENTJ
                <img
                  src={editIcon}
                  alt="edit"
                  className="ml-1 inline-block align-middle cursor-pointer"
                />
              </div>
            </div>

            {/* 태그 섹션 */}
            <div className="pt-1 pb-3 text-sm flex items-center">
              <div className="text-[#9B8787]">나만의 TAG</div>
              <img
                src={editIcon}
                alt="edit"
                className="ml-1 inline-block align-middle cursor-pointer"
              />
            </div>
            <div className="flex flex-wrap gap-2 pb-6">
              {tagObj.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#DEDDFF] text-[#4F64D1] px-3 py-1 rounded-full text-xs font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* AI 규칙 설정 섹션 */}
            <div className="flex font-bold text-[#9B8787] pb-2 items-center">
              <div>AI 규칙설정</div>
              <img
                src={editIcon}
                alt="edit"
                className="ml-1 inline-block align-middle cursor-pointer"
              />
            </div>
            <div className="text-sm">
              프론트엔드 개발자를 희망하며, 적극적이고 활발한 성격으로 매사에
              열정을 다해 임합니다. 많은 대외활동에 참여했으며, 팀장 및 리더로서
              여러 프로젝트를 성공적으로 이끌었던 경험이 있습니다. 새로운 도전과
              기회를 즐기며, 기술 스택도 빠르게 습득해나가고 있습니다. React와
              Vue.js를 기반으로 한 프론트엔드 프로젝트 경험이 풍부하며, UI/UX에
              대한 깊은 관심과 이해를 가지고 있습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page2
