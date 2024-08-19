import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="flex relative">
      {/* 사이드바 - 여기에 페이지 바로가기 추가 */}
      <div className="bg-purple-100 grid grid-cols-1 gap-3 fixed left-0 w-32 top-32">
        <div>사이드바</div>

        <Link to="/" className="bg-yellow-200">
          서비스 소개화면
        </Link>

        <Link to="/page1" className="bg-yellow-200">
          로그인 페이지
        </Link>
        <Link to="/page2" className="bg-yellow-200">
          메인 페이지
        </Link>
        <Link to="/page3" className="bg-yellow-200">
          마이페이지
        </Link>
        <Link to="/page4" className="bg-yellow-200">
          광고 페이지
        </Link>
        <Link to="/chatPage" className="bg-yellow-200">
          채팅 페이지
        </Link>

        <Link to="/cardFlip" className="bg-blue-200">
          카드 컴포넌트
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
