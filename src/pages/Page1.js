// 로그인 페이지 page1

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Page1 = () => {
  return (
    <div className="flex min-h-screen h-screen justify-center bg-[#F4F4F4]">
      <div className="w-full max-w-[400px] overflow-hidden bg-[#F4F4F4] font-pretendard px-6  flex flex-col justify-between">
        <div className="py-12 flex flex-col gap-4 justify-between bg-[#F4F4F4] flex-grow overflow-hidden">
          <div className="flex flex-col items-center mb-16 text-[#4F64D1]">
            <div className="font-extrabold text-3xl">TWO</div>
            <div className="font-extrabold text-5xl">FACE</div>
          </div>

          <div className="flex flex-col mb-10 text-3xl font-semibold">
            <div>
              <span className="text-[#4F64D1] font-bold">투페이스</span>에
            </div>
            <div>오신 것을 환영합니다!</div>
          </div>

          <div className="flex flex-col gap-7 px-5 flex-grow justify-center">
            <div className="text-lg font-semibold">
              회원님의 학교와 학번을 입력해주세요.
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-[#4F64D1]">
                <span className="pr-1">학교</span>
              </div>
              <input
                type="text"
                placeholder="학교를 선택해주세요"
                className="relative border-b border-[#AEAEAE] bg-[#F4F4F4] py-2 px-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-[#4F64D1]">학번</div>
              <input
                type="text"
                placeholder="학번을 입력해주세요"
                className="border-b border-[#AEAEAE] bg-[#F4F4F4] py-2 px-2"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-[#4F64D1] text-white rounded-[20px] cursor-pointer mt-auto mb-28">
          <Link to="/page2" className="py-3.5 text-xl font-medium text-white">
            계속하기
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page1
