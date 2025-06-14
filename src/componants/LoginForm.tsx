import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react'

interface LoginFormProps {
    onLogin?: (email: string, password: string) => Promise<void>
    onSignup?: (email: string, password: string, name: string) => Promise<void>
}

const LoginForm: React.FC<LoginFormProps> = ({
                                                 onLogin,
                                                 onSignup
                                             }) => {
    const navigate = useNavigate() // React Router 네비게이션 훅
    const [showPassword, setShowPassword] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            if (isLogin) {
                await onLogin?.(formData.email, formData.password)
            } else {
                if (formData.password !== formData.confirmPassword) {
                    alert('비밀번호가 일치하지 않습니다.')
                    return
                }
                await onSignup?.(formData.email, formData.password, formData.name)
            }
        } catch (error) {
            console.error('Authentication error:', error)
            alert('인증 중 오류가 발생했습니다.')
        } finally {
            setIsLoading(false)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    const handleGoogleLogin = () => {
        console.log('Google 로그인')
    }

    const handleFacebookLogin = () => {
        console.log('Facebook 로그인')
    }

    const handleForgotPassword = () => {
        console.log('비밀번호 찾기')
    }

    // 홈으로 이동하는 함수
    const handleBackToHome = () => {
        navigate('/') // 홈 페이지로 이동
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* 홈으로 돌아가기 버튼 */}
                <button
                    onClick={handleBackToHome}
                    className="inline-flex items-center text-amber-800 hover:text-amber-900 mb-8 transition-colors duration-200 group"
                >
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                    홈으로 돌아가기
                </button>

                {/* 로그인 카드 */}
                <div className="bg-white rounded-2xl shadow-2xl border border-amber-100 overflow-hidden">
                    {/* 헤더 */}
                    <div className="text-center pt-8 pb-6 px-6 bg-gradient-to-b from-amber-50 to-white">
                        <div className="w-35 h-35 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center relative">
                            <img src="/images/tonefit-logo.png" alt="Tonefit Logo" className="w-full h-full object-cover rounded-full" />
                            <span className="text-white text-2xl font-bold absolute">TF</span>
                        </div>
                        <h1 className="text-3xl font-bold text-amber-900 font-serif mb-2">
                            {isLogin ? '로그인' : '회원가입'}
                        </h1>
                        <p className="text-amber-700">
                            {isLogin ? 'TONEFIT에 오신 것을 환영합니다' : '새로운 스타일 여정을 시작하세요'}
                        </p>
                    </div>

                    {/* 폼 영역 */}
                    <div className="px-8 pb-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* 이름 필드 (회원가입 시에만) */}
                            {!isLogin && (
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-amber-900">
                                        이름
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="이름을 입력하세요"
                                        className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200"
                                        required={!isLogin}
                                    />
                                </div>
                            )}

                            {/* 이메일 필드 */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-amber-900">
                                    이메일
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600" />
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="이메일을 입력하세요"
                                        className="w-full pl-12 pr-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200"
                                        required
                                    />
                                </div>
                            </div>

                            {/* 비밀번호 필드 */}
                            <div className="space-y-2">
                                <label htmlFor="password" className="block text-sm font-medium text-amber-900">
                                    비밀번호
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600" />
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="비밀번호를 입력하세요"
                                        className="w-full pl-12 pr-12 py-3 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-600 hover:text-amber-800 transition-colors duration-200"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* 비밀번호 확인 필드 (회원가입 시에만) */}
                            {!isLogin && (
                                <div className="space-y-2">
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-amber-900">
                                        비밀번호 확인
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600" />
                                        <input
                                            id="confirmPassword"
                                            type="password"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            placeholder="비밀번호를 다시 입력하세요"
                                            className="w-full pl-12 pr-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200"
                                            required={!isLogin}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* 로그인 옵션 (로그인 시에만) */}
                            {isLogin && (
                                <div className="flex items-center justify-between text-sm">
                                    <label className="flex items-center space-x-2 text-amber-700">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 text-amber-600 border-amber-300 rounded focus:ring-amber-200 focus:ring-2"
                                        />
                                        <span>로그인 상태 유지</span>
                                    </label>
                                    <button
                                        type="button"
                                        className="text-amber-600 hover:text-amber-800 hover:underline transition-all duration-200"
                                        onClick={handleForgotPassword}
                                    >
                                        비밀번호 찾기
                                    </button>
                                </div>
                            )}

                            {/* 제출 버튼 */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-amber-900 hover:bg-amber-800 disabled:bg-amber-400 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        처리중...
                                    </div>
                                ) : (
                                    isLogin ? '로그인' : '회원가입'
                                )}
                            </button>

                            {/* 구분선 */}
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-amber-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="bg-white px-4 text-amber-600 font-medium">또는</span>
                                </div>
                            </div>

                            {/* 소셜 로그인 버튼들 */}
                            <div className="space-y-3">
                                <button
                                    type="button"
                                    onClick={handleGoogleLogin}
                                    className="w-full border-2 border-amber-200 text-amber-900 hover:bg-amber-50 hover:border-amber-300 py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center font-medium group"
                                >
                                    <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24">
                                        <path
                                            fill="#4285F4"
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        />
                                        <path
                                            fill="#34A853"
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        />
                                        <path
                                            fill="#FBBC05"
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        />
                                        <path
                                            fill="#EA4335"
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        />
                                    </svg>
                                    Google로 계속하기
                                </button>

                                <button
                                    type="button"
                                    onClick={handleFacebookLogin}
                                    className="w-full border-2 border-amber-200 text-amber-900 hover:bg-amber-50 hover:border-amber-300 py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center font-medium group"
                                >
                                    <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" fill="#1877F2" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                    Facebook으로 계속하기
                                </button>
                            </div>

                            {/* 로그인/회원가입 전환 */}
                            <div className="text-center text-sm text-amber-700 pt-4">
                                {isLogin ? '계정이 없으신가요?' : '이미 계정이 있으신가요?'}
                                <button
                                    type="button"
                                    className="text-amber-600 hover:text-amber-800 ml-2 font-semibold hover:underline transition-all duration-200"
                                    onClick={() => setIsLogin(!isLogin)}
                                >
                                    {isLogin ? '회원가입' : '로그인'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm