import { useState } from 'react';
import useDeviceTypeByWidth from '../utilities/useDeviceTypeByWidth';

const LoginView = () => {
	const deviceType = useDeviceTypeByWidth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();
	};

	return (
		<div className='flex items-center justify-center'>
			<div className="min-h-screen w-full max-w-[2048px] relative flex gap-8 items-center justify-center bg-white">
				{deviceType == 'PC' && 
					<div className='w-3/5 flex items-center justify-center relative'>
						<div className="absolute -translate-y-1/4 translate-x-3/4 bg-[url('/ChatSample.png')] 
							w-[380px] h-[360px] bg-cover bg-center shadow-xl rounded-xl"></div>
						<div className="bg-[url('/profileImage.png')] w-[590px] h-[360px] bg-cover bg-center shadow-xl rounded-xl"></div>
					</div>
				}
				<div className={`${deviceType == 'PC' ? 'w-2/5' : 'w-full'}`}>
					<div className="p-8 rounded-lg w-full max-w-md">
						<p className={`${deviceType == 'PC' ? 'text-5xl' : 'text-xl'} font-bold text-start text-gray-800 mb-16
							bg-gradient-to-br from-blue-500 to-pink-400 bg-clip-text text-transparent`}>
							Nơi tuyệt vời để kết nối năm châu bốn bể
						</p>
						<p className="text-md text-start text-gray-800 mb-6">
							Kết nối với bạn bè và gia đình, xây dựng cộng đồng và đào sâu sở thích của bạn.
						</p>
						<form onSubmit={handleSubmit} className="space-y-2">
							<div>
								<input
									type="email"
									placeholder='Username hoặc email hoặc số điện thoại'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									className="w-3/4 px-4 py-2 mt-2 border rounded-xl bg-gray-100 
										focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>
							<div>
								<input
									type="password"
									placeholder='Mật khẩu'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									className="w-3/4 px-4 py-2 mt-2 border rounded-xl bg-gray-100 
										focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>
							<div>
								<button
									type="submit"
									className="w-fit mt-2 bg-blue-500 hover:bg-blue-700 text-white text-lg 
										font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
								>
									Đăng nhập
								</button>
							</div>
						</form>
						<p className="mt-4 text-center text-gray-600">
							Chưa có tài khoản?{' '}
							<a href="/register" className="text-blue-500 hover:underline">
								Đăng ký ngay!
							</a>
						</p>
					</div>

				</div>

			</div>
		</div>
	);
};

export default LoginView;
