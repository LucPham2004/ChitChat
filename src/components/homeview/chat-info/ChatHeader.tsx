

const ChatHeader = () => {
    return (
        <div className="flex justify-between items-center w-full p-1 border-b border-gray-200">
            <div className="flex flex-row items-center">
                <div className="relative flex-1 flex items-center p-1 rounded-lg 
				h-full w-max hover:bg-gray-100 cursor-pointer gap-1">
                    <div className="p-1 rounded-lg hover:bg-gray-200 cursor-pointer">
                        <img
                            className="w-10 h-10 rounded-full object-cover"
                            src="https://lh3.googleusercontent.com/proxy/tm1RJoA6rodhWBKMGRfzeR74pIbdxub44suRwIU0sEoJmhWqKL6fdcu2dam9sX15_HKYaodIjV_63KdvKVR9OIxN6tq9hL2NsGJMDSjwdOowrZrKnJWaCT2AC3HI6KjJyAkf0S9y6wBzJVzblA"
                            alt={`ksadnjsd's avatar`}
                        />
                        <img className="w-4 h-4 absolute top-8 left-8" src="" alt="online icon" />
                    </div>
                    <div className='flex flex-col justify-center items-left'>
                        <h3 className='text-gray-800 font-semibold'>Cristiano Ronaldo</h3>
                        <p className='text-gray-500 text-xs'>Đang hoạt động</p>
                    </div>
                </div>
                <div className="">
                    <button>
                        <i className="fas fa-phone"></i>
                    </button>
                    <button>
                        <i className="fas fa-video"></i>
                    </button>
                    <button>
                        <i className="fas fa-info-circle"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader

