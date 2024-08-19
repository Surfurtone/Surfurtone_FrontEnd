import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import ReactPlayer from 'react-player'
import { setChatCount, setCompatibilityCount } from '../store/userCountSlice'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { useLocation, useNavigate } from 'react-router-dom'
import 'react-circular-progressbar/dist/styles.css'

const PageA = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const option = location.state
  const adUrl = 'https://youtu.be/2byKVpy6_-o?si=XZatpTTofPB9eOHC'
  const [adLength, setAdLength] = useState(7)
  const adMax = 7
  const [timerStarted, setTimerStarted] = useState(false) // 타이머 시작 여부를 useState로 관리
  const completed = useRef(false) // complete 함수가 이미 호출되었는지 여부 관리
  const navigate = useNavigate()

  const videoConfig = {
    youtube: {
      playerVars: {
        controls: 0,
        rel: 0,
        disablekb: 1,
        mute: 1,
        fs: 0,
      },
    },
  }

  useEffect(() => {
    let intervalId

    if (timerStarted && !completed.current) {
      intervalId = setInterval(() => {
        setAdLength((prev) => {
          if (prev <= 1) {
            clearInterval(intervalId)
            complete()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => clearInterval(intervalId) // 컴포넌트 언마운트 시 타이머 클리어
  }, [timerStarted])

  const startTimer = () => {
    if (!timerStarted) {
      setTimerStarted(true) // 타이머가 이미 시작되지 않았다면 타이머 시작
    }
  }

  const complete = () => {
    if (!completed.current) {
      // complete 함수가 한 번만 실행되도록
      completed.current = true

      if (option === 'compatibility') {
        dispatch(setCompatibilityCount())
      } else {
        dispatch(setChatCount())
      }

      navigate('/page3')
    }
  }

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-300">
      <div className="relative w-full max-w-[400px] overflow-hidden flex items-center justify-center h-screen">
        <div className="relative bg-white w-full h-full z-0 transform scale-[3]">
          <ReactPlayer
            url={adUrl}
            config={videoConfig}
            onPlay={startTimer}
            onEnded={complete}
            muted
            playing
            width="100%" // 가로 길이를 100%로 설정
            height="100%" // 세로 길이를 100%로 설정
            style={{ objectFit: 'fill' }} // 비율을 무시하고 꽉 차도록 설정
            className="z-0"
          />
        </div>
        <div className="absolute top-4 right-4 z-10 text-white">
          <div className="w-[60px] h-[60px]">
            <CircularProgressbar
              value={adLength}
              maxValue={adMax} // 초기 타이머의 최대값으로 설정
              minValue={0}
              text={`${adLength}s`}
              styles={buildStyles({
                textColor: '#4F64D1', // 텍스트 색상을 파란색으로 설정
                pathColor: '#4F64D1', // Progressbar의 진행 색상을 파란색으로 설정
                trailColor: '#d6d6d6', // Progressbar의 배경 색상 설정
                textSize: '24px', // 글자 크기 설정
                pathTransitionDuration: 0.5,
                text: {
                  dominantBaseline: 'central', // 텍스트를 수직 중앙에 맞춤
                  textAnchor: 'middle', // 텍스트를 수평 중앙에 맞춤
                },
              })}
              className="z-10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageA
