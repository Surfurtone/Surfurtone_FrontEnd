import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'
import backIcon from '../assets/imgs/chatPage/backIcon.png'
import myPageIcon from '../assets/imgs/Page2/myPageIcon.png'
import norification from '../assets/imgs/Page2/notification.png'
import SendIcon from '../assets/imgs/chatPage/SendIcon.png'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import Hands from '../assets/imgs/chatPage/Hands.png'
import labong from '../assets/imgs/chatPage/labong.png'

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
  const [inputCount, setInputCount] = useState(0)

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
    setInputCount((prev) => prev + 1)
    setInput('') // 입력창 초기화

    if (inputCount + 1 === 4) {
      const limitMessage = {
        text: '무료 질문 횟수가 끝났습니다. 더 대화를 이어가시려면 광고를 시청해주세요.',
        isUser: false,
      }
      setMessages((prevMessages) => [...prevMessages, limitMessage])
      setInput('')

      // 마이페이지로 가는 버튼 추가
      const myPageButton = {
        text: (
          <div className="flex justify-center">
            <Link to="/page3">
              <button className="bg-blue-500 text-white rounded-full">
                마이페이지로 가기
              </button>
            </Link>
          </div>
        ),
        isUser: false,
      }
      setMessages((prevMessages) => [...prevMessages, myPageButton])
      return
    }

    if (inputCount + 1 !== 4) {
      try {
        //라봉
        // API에 POST 요청을 보내서 서버로 메시지를 전송
        setIsLoading(true)
        const response = await axios.post(
          `${baseUrl}/api/surfurtone/labung/chatbot/`,
          {
            message: input,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        const responseText = response.data.response
        const serverMessage = { text: responseText, isUser: false }
        setMessages((prevMessages) => [...prevMessages, serverMessage])
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching answer from the server:', error)
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

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

  return (
    <div className="relative flex min-h-screen justify-center">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <LoadingSpinner />
        </div>
      )}
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
              <div className="font-bold text-[20px]">라봉이</div>
              <div className="text-[16px] mt-2">
                학과: 제주대학교 컴퓨터공학과
                <br /> 학번: 20201234
                <br /> 학년: 3학년
                <br /> 성별: 남성 <br />
                전화번호: 010-****-****
                <br /> MBTI: ENTJ
              </div>
            </div>
          </div>

          {/* 채팅 */}
          <div className="flex flex-col justify-between p-4">
            <div className="flex flex-col h-[250px] gap-3 overflow-y-auto">
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
            <div className="flex self-end mb-3">
              <div className="relative self-end flex justify-center h-[65px] p-2.5 bg-[#DAD4FF] rounded-full cursor-pointer group">
                <img src={Hands} alt="Hands" className="relative z-20" />
                <div
                  className="absolute left-[-9rem] top-1/4 bg-[#DAD4FF] px-5 py-1 rounded-l-full font-medium transform translate-x-10 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 z-10"
                  onClick={openModal} // 버튼 클릭 시 모달 열기
                >
                  호스트와 함께하기
                </div>
              </div>
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
      {/* 모달이 열려 있을 때만 Modal 컴포넌트를 렌더링 */}
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  )
}

export default FinalScreen
