import { BsPencilSquare } from "react-icons/bs";
import ConversationList from "./ConversationList";
import '../../../styles/scrollbar.css';
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import Modal from "../../modals/Modal";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../../../utilities/ThemeContext";

const Conversations = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);
    const toggleSettingModalOpen = () => setIsSettingModalOpen(!isSettingModalOpen);

    const { isDarkMode, toggleDarkMode } = useTheme();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`min-h-[96vh] max-h-[96vh] overflow-hidden min-w-full flex flex-col items-center 
            p-2 pb-0 pe-1 rounded-xl border shadow-sm
            ${isDarkMode ? 'bg-[#1F1F1F] text-gray-300 border-gray-900' : 'bg-white text-black border-gray-200'}`}>

            <div className="flex flex-row items-center p-2 py-0 pe-4 self-start w-full">
                <h2 className={`flex self-start text-2xl font-bold text-left w-[40%]
                    ${isDarkMode ? 'text-white' : 'text-black'}`}> Đoạn chat </h2>
                <div className="relative flex flex-row gap-4 items-center justify-end w-[65%]">
                    <button className={`p-2 rounded-full text-xl 
                        ${isDarkMode ? 'text-white bg-[#474747] hover:bg-[#5A5A5A]' 
                            : 'text-black bg-gray-100 hover:bg-gray-200'}`}>
                        <BsPencilSquare />
                    </button>
                    <button className={`rounded-full ${isDarkMode ? 'text-white' : 'text-black'}`}
                        onClick={toggleMenu}>
                        <img src="/avatar.jpg" className="w-8 h-8 rounded-full" />
                    </button>

                    {isMenuOpen && (
                        <div className="absolute top-8 right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-10">
                            <ul className="text-gray-700 p-1">
                                <Link to={"/profile"}>
                                    <li className="flex items-center gap-4 px-2 py-2 mt-1 mb-1 rounded-lg font-bold hover:bg-gray-100 cursor-pointer">
                                        <img src="/avatar.jpg" className="w-8 h-8 rounded-full" />
                                        Cristiano Ronaldo
                                    </li>
                                </Link>
                                <hr></hr>
                                <li className="flex items-center gap-4 px-2 py-2 mt-1 mb-1 rounded-lg font-bold hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        toggleSettingModalOpen();
                                        setIsMenuOpen(false);
                                    }}>
                                    <button className="p-2 rounded-full text-black text-xl bg-gray-200 hover:bg-gray-200">
                                        <IoSettings />
                                    </button>
                                    Cài đặt
                                </li>
                                <hr></hr>
                                <li className="flex items-center gap-4 px-2 py-2 mt-1 mb-1 rounded-lg font-bold hover:bg-gray-100 cursor-pointer">
                                    <button className="p-2 rounded-full text-black text-xl bg-gray-200 hover:bg-gray-200">
                                        <FiLogOut />
                                    </button>
                                    Đăng xuất
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-col items-center w-full h-full p-2 pe-4">
                <SearchBar />
            </div>

            <div className="flex flex-col items-center w-full h-full py-1 pe-2 overflow-y-auto overflow-x-hidden">
                <ConversationList />
            </div>

            {/* Settings Modal */}
            <Modal isOpen={isSettingModalOpen} onClose={() => setIsSettingModalOpen(false)}>
                <h2 className="text-lg font-bold mb-3">Tuỳ chỉnh</h2>
                <div className="flex flex-col items-start justify-start gap-4 w-full">
                    <div className="flex items-center justify-start gap-2">
                        <div className="rounded-full p-2 bg-gray-100 text-xl">
                            <FaMoon />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <p className="text-md font-semibold">Chế độ tối</p>
                            <p className="text-xs text-gray-800">
                                Điều chỉnh giao diện của ChitChat để giảm độ chói và cho đôi mắt được nghỉ ngơi.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-2 w-full'>
                        <label className='flex gap-2 w-full rounded-lg p-2 ps-10 items-center justify-between'
                            onClick={() => toggleDarkMode}>
                            <p>Đang tắt</p>
                            <div className="flex items-center rounded-full p-2 hover:bg-gray-100 cursor-pointer">
                                <input type="radio" name="darkmode" value="on" className="w-6 h-6 cursor-pointer"
                                    checked={isDarkMode === false}
                                    onChange={() => toggleDarkMode()}/>
                            </div>
                        </label>
                        <label className='flex gap-2 w-full rounded-lg p-2 ps-10 items-center justify-between'
                            onClick={() => toggleDarkMode}>
                            <p>Đang bật</p>
                            <div className="flex items-center rounded-full p-2 hover:bg-gray-100 cursor-pointer">
                                <input type="radio" name="darkmode" value="off" className="w-6 h-6 cursor-pointer"
                                    checked={isDarkMode === true}
                                    onChange={() => toggleDarkMode()}/>
                            </div>
                        </label>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Conversations;

