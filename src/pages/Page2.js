// 메인페이지 page2

import React from 'react'
import { Link } from 'react-router-dom'
import myPageIcon from '../assets/Page2/myPageIcon.png'
import norification from '../assets/Page2/notification.png'

const Page2 = () => {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="w-full max-w-[400px] overflow-x-hidden bg-gray-300">
        <div className="px-[24px] py-[50px] flex flex-col gap-4 justify-between bg-[#4F64D1]">
          <div className="flex justify-center mb-[8px] bg-purple-500 text-white items-center">
            <div className="font-Pretendard font-bold text-[25px]">
              TWO FACE
            </div>
            <div className="grid grid-cols-2 justify-center items-center">
              <img
                src={myPageIcon}
                alt="myPageIcon"
                className="w-[24px] h-[24px]"
              />
              <img
                src={norification}
                alt="norification"
                className="w-[24px] h-[28px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-[28px] h-36 overflow-hidden bg-yellow-300">
              <div className="absolute left-[20px] top-[16px] z-10 text-xl">
                메인페이지
              </div>
              <div className="absolute right-[20px] bottom-[16px] z-10 text-3xl font-bold">
                29C
              </div>
            </div>
            <div className="relative rounded-[28px] h-36 overflow-hidden bg-white">
              <div className="absolute left-[20px] top-[16px] z-10 text-xl">
                Main Content
              </div>
              <div className="absolute right-[20px] bottom-[16px] z-10 text-3xl font-bold">
                This
              </div>
            </div>
            <div className="box-border rounded-[28px] bg-white relative h-[142px] overflow-hidden col-span-2 flex flex-col cursor-pointer p-[16px_20px]">
              <div className="text-xl font-bold">Test Tets</div>
              <div className="text-sm">test</div>
            </div>
            <div className="box-border rounded-[28px] bg-white relative h-[142px] overflow-hidden col-span-2 flex flex-col cursor-pointer p-[16px_20px]">
              <div className="text-xl font-bold">Test Tets</div>
              <div className="text-sm">test</div>
            </div>
          </div>

          <div className="aliv justify-center bg-blue-500 text-white"></div>

          <Link
            to="/page3"
            className="text-center my-[36px] mt-[36px] mb-[44px] text-[16px] font-normal bg-blue-500 text-white"
          >
            Page3로 이동
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page2
