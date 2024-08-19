const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md w-11/12 max-w-[360px] flex flex-col items-center text-center">
        <h2 className="text-xl font-semibold">호스트와 함께하시겠습니까?</h2>
        <p className="text-gray-400 mt-2">
          *주의*
        </p>
        <p className="text-gray-400 mt-2">
          호스트에게 당신과 연락 가능한
        </p>
        <p className="text-gray-400 mt-2">
          기본적인 정보가 제공됩니다!
        </p>
        <div className="mt-4 flex justify-center gap-2 w-full">
          <button
            className="bg-gray-300 px-4 py-2 rounded-md"
            onClick={closeModal}
          >
            안할래요
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={closeModal} // Replace with actual functionality
          >
            함께할래요
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
