import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import myPageIcon from '../assets/imgs/Page2/myPageIcon.png'
import norification from '../assets/imgs/Page2/notification.png'
import CardFlip from '../components/CardFlip'
import Chat from '../assets/imgs/Page2/Chat.svg'
import HostModal from '../components/HostModal'
import compatibility from '../assets/imgs/Page2/compatibility.png'
import axios from 'axios'

const Page2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dataInd, setDataInd] = useState(0)
  const [postList, setPostList] = useState([])
  const [post, setPost] = useState(null) // 초기 상태를 null로 설정
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const categories = ['ALL', '대외활동', '기숙사', '동아리']

  // 초기 렌더링 여부를 확인하는 변수
  const isInitialMount = useRef(true)

  const fetchList = async () => {
    console.log('fetchList 호출됨')
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/surfurtone/post/all/random/`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      )
      const data = response.data
      if (data.length > 0) {
        setPostList(data)
        setPost(data[0])
      }
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data from the server:', error)
      setIsLoading(false)
    }
  }

  const fetchCategoryList = async () => {
    console.log('fetchCategoryList 호출됨')
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/surfurtone/post/category/`,
        { category: selectedCategory },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      )
      const data = response.data
      if (data.length > 0) {
        const filteredData = data.filter(
          (post) =>
            post.category === selectedCategory || post.category === '광고',
        )
        setPostList(filteredData)
        setPost(filteredData[0])
      }
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data from the server:', error)
      setIsLoading(false)
    }
  }

  const navigateChat = () => {
    if (post?.category === '광고') {
      navigate('/page4')
    } else {
      navigate('/chatPage')
    }
  }

  useEffect(() => {
    if (isInitialMount.current || selectedCategory === 'ALL') {
      isInitialMount.current = false
      fetchList()
    } else {
      fetchCategoryList()
    }
  }, [selectedCategory])

  useEffect(() => {
    if (postList.length > 0) {
      setPost(postList[dataInd])
    }
  }, [dataInd, postList])

  const nextList = () => {
    if (postList.length > 0) {
      setDataInd((prev) => (prev + 1) % postList.length)
    }
  }

  return (
    <div className="flex min-h-screen justify-center bg-[#4F64D1]">
      <div className="relative w-full max-w-[400px] overflow-x-hidden bg-[#4F64D1]">
        <div className="px-[22px] py-[50px] flex flex-col justify-between bg-[#4F64D1]">
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

          <div className="flex justify-center mt-[18px] mb-[12px] relative ">
            <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              🔍
            </button>
            <input
              type="text"
              placeholder="찾으시는 활동이 있으신가요?"
              className="w-full pl-[3rem] pr-[12px] py-[8px] text-[13px] rounded-[10px] bg-white text-black"
            />
          </div>

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
          {!isLoading && post ? (
            <CardFlip
              User={post.User}
              category={post.category}
              d_day={post.d_day}
              description={post.description}
              end_day={post.end_day}
              id={post.id}
              image_url={post.image_url}
              likes={post.likes}
              tags={post.tags}
              title={post.title}
              views={post.views}
            />
          ) : (
            <div className="text-white">Loading...</div>
          )}

          <div className="flex gap-4 flex-3 justify-start items-center font-Pretendard font-medium text-[18px] text-black my-7">
            <button
              className="flex-2 h-[57px] flex items-center justify-center px-4 box-border rounded-[20px] bg-white"
              onClick={navigateChat}
            >
              {post?.category === '광고'
                ? '광고주 AI와 대화하기'
                : '호스트 AI와 대화하기'}
            </button>

            <button
              className="flex-1 h-[57px] flex items-center justify-center px-4 box-border rounded-[20px] bg-[#FCC729]"
              onClick={nextList}
            >
              다음 추천
            </button>
          </div>

          <div className="relative self-end flex justify-center h-[65px] p-3 bg-[#DAD4FF] rounded-full cursor-pointer group">
            <img src={compatibility} alt="" className="relative z-20" />
            <button onClick={openModal}>
              <div className="absolute left-[-9rem] top-1/4 bg-[#DAD4FF] px-5 py-1 rounded-l-full font-medium transform translate-x-10 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 z-10">
                {post?.category === '광고'
                  ? '광고주와 궁합보기'
                  : '호스트와 궁합보기'}
              </div>
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && <HostModal closeModal={closeModal} />}
    </div>
  )
}

export default Page2
