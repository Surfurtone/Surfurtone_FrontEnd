import React from 'react'

const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* 모달 배경 */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={closeModal} // 배경 클릭 시 모달 닫기
      ></div>

      {/* 모달 콘텐츠 */}
      <div className="relative bg-white p-8 rounded-lg shadow-lg z-10">
        <h2 className="text-lg font-bold mb-4">궁합 결과</h2>
        <p>이곳에 궁합 결과 내용을 넣을 수 있습니다.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={closeModal}
        >
          닫기
        </button>
      </div>
    </div>
  )
}

export default Modal
