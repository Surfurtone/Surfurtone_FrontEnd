const Modal = ({ closeModal }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-md shadow-md w-11/12 max-w-[360px] flex flex-col items-center text-center">
          <h2 className="text-xl font-semibold">홈페이지로 이동하시겠습니까?</h2>
          <div className="mt-4 flex justify-center gap-2 w-full">
            <button
              className="bg-gray-300 px-4 py-2 rounded-md"
              onClick={closeModal}
            >
              안할래요
            </button>
            <button
  className="bg-blue-500 text-white px-4 py-2 rounded-md"
  onClick={() => window.location.href = 'https://www.allforyoung.com/posts/16133'}
>
  함께할래요
</button>

          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  