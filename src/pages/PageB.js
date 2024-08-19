// 데이터가 잘 나오는지 확인하는 페이지

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PageB = () => {
  const baseUrl = process.env.REACT_APP_API_URL
  const [characters, setCharacters] = useState([]) // 캐릭터 리스트
  const [character, setCharacter] = useState('') // 현재 캐릭터 정보
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .post(
        `${baseUrl}/api/surfurtone/compatibility/`,
        {
          user1: '1',
          user2: '2',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      )
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message)
        setError(error.message)
      })
  }, [])

  return (
    <div>
      <div>여기는 PageB 입니다.</div>
      <div>캐릭터 이름: {JSON.stringify(character.name)}</div>

      <div className="bg-blue-200 p-5">
        {error ? (
          <div>Error: {error}</div>
        ) : (
          <div>{JSON.stringify(characters)}</div>
        )}
        <div>
          캐릭터 정보
          <div>{JSON.stringify(character)}</div>
        </div>
      </div>
    </div>
  )
}

export default PageB
