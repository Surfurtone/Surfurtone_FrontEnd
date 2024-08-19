// 채팅 페이지

import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'
import backIcon from '../assets/imgs/chatPage/backIcon.png'
import myPageIcon from '../assets/imgs/Page2/myPageIcon.png'
import norification from '../assets/imgs/Page2/notification.png'
import SendIcon from '../assets/imgs/chatPage/SendIcon.png'
import { Link } from 'react-router-dom'
import labong from '../assets/imgs/gamgyul.png'

const FinalScreen = () => {
  const [messages, setMessages] = useState([
    {
      text: '저에 대해 알고 싶으신가요? 무엇이든 물어보세요!',
      isUser: false,
    },
  ])
  const baseUrl = process.env.REACT_APP_API_URL
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend()
      setInput('')
    }
  }

  const handleSend = async () => {
    if (input.trim() === '') return

    // 사용자가 입력한 메시지를 먼저 화면에 추가
    const userMessage = { text: input, isUser: true }
    setMessages([...messages, userMessage])

    try {
      //라봉
      // API에 POST 요청을 보내서 서버로 메시지를 전송
      setIsLoading(true)
      const response = await axios.post(
        `${baseUrl}/api/surfurtone/labung/chatbot/`,
        {
          message: `${input}`,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      setInput('')
      const responseText = response.data.response
      const serverMessage = { text: responseText, isUser: false }
      setMessages((prevMessages) => [...prevMessages, serverMessage])
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching answer from the server:', error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex min-h-screen justify-center">
      {isLoading && <LoadingSpinner />}
      <div className="relative w-full max-w-[400px] overflow-x-hidden bg-[#4F64D1]">
        <div className="px-[22px] py-[50px] flex flex-col justify-between bg-[#4F64D1]">
          {/* 헤더 */}
          <div className="flex justify-between items-center mb-[8px] text-white relative">
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

          <div className="bg-[#4F64D1] mt-6 text-white text-[15px] text-center">
            클론봇이 답변하는 내용은 AI 기술을 통해 생성되었습니다. <br />
            실제 당사자가 하는 말과 차이가 있거나 <br /> 일부 부정확할 수
            있습니다.
          </div>

          {/* 호스트 정보 */}
          <div
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
            className="bg-slate-300 rounded-md mt-4 flex p-4"
          >
            <div className="items-center flex-shrink-0">
              <div className="rounded-full bg-white w-[60px] h-[60px] flex justify-center items-center">
                <img src={labong} alt="labong" className="w-[40px] h-[45px]" />
              </div>
            </div>
            <div className="items-center p-4 font-Pretendard flex-grow">
              <div className="font-bold text-[20px]">감귤이</div>
              <div className="text-[16px] mt-2">
                학과: 제주대학교 인공지능학과
                <br /> 학번: 20191111
                <br /> 학년: 4학년
                <br /> 성별: 여성 <br />
                전화번호: 010-****-****
                <br /> MBTI: INFP
              </div>
            </div>
          </div>

          {/* 채팅 */}
          <div className="flex flex-col justify-between p-4">
            <div className="flex flex-col h-[345px] gap-3 overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-2 px-4 max-w-[70%] ${
                    message.isUser
                      ? 'bg-white self-end text-right'
                      : 'bg-yellow-400 self-start text-left'
                  }`}
                  style={{
                    borderRadius: message.isUser
                      ? '28px 28px 0px 28px' // 오른쪽 하단 모서리만 라운디드 적용 안 함
                      : '28px 28px 28px 0px', // 왼쪽 하단 모서리만 라운디드 적용 안 함
                  }}
                >
                  <div className="text-sm font-semibold">{message.text}</div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* 채팅 입력창 */}
          <div className="px-[4px] w-full">
            <div className="flex items-center px-2 py-2 rounded-full border-4 border-white bg">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="호스트에게 궁금한 점을 물어보세요."
                className="bg-transparent flex-grow text-white placeholder-white outline-none px-2"
              />

              <button
                onClick={handleSend}
                className="text-black p-1 rounded-full mr-1 h-[24px] w-[24px]"
              >
                <img
                  src={SendIcon}
                  alt="SendIcon"
                  className="w-[15px] h-[17px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinalScreen
