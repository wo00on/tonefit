import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Palette, Sparkles, Heart, Star, Users } from 'lucide-react';

// UI 컴포넌트들
interface ButtonProps {
    children: React.ReactNode;
    size?: 'sm' | 'lg';
    variant?: 'default' | 'outline';
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, size = 'sm', variant = 'default', className = '', onClick }) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';

    const sizeClasses: Record<'sm' | 'lg', string> = {
        sm: 'h-9 px-3 text-sm',
        lg: 'h-11 px-8 text-base'
    };

    const variantClasses: Record<'default' | 'outline', string> = {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground'
    };

    return (
        <button
            className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
    return (
        <div
            className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className} ${onClick ? 'cursor-pointer' : ''}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
    return <div className={`p-6 ${className}`}>{children}</div>;
};

// 랜딩페이지 컴포넌트
export const LandingPage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const navigateTo = (path: string) => {
        navigate(path);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 pt-20">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div
                        className={`space-y-8 transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 font-medium text-sm">
                                <Star className="w-4 h-4 mr-2 text-amber-600" />
                                2025 트렌드 컬러 업데이트
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 leading-tight font-serif">
                                나에게 <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">FIT</span>한<br />
                                컬러는 따로 있다
                            </h1>
                            <p className="text-xl text-amber-800 leading-relaxed">
                                퍼스널 컬러와 펜톤 트렌드를 조합하여
                                <br />
                                <span className="font-semibold">당신만의 완벽한 스타일</span>을 찾아보세요
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 text-lg hover:translate-y-[-2px] transition-transform duration-300 group w-full sm:w-auto"
                                onClick={() => navigateTo('/diagnosis')}
                            >
                                퍼스널 컬러 진단하기
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-amber-900 text-amber-900 hover:bg-amber-50 px-8 py-4 text-lg hover:translate-y-[-2px] transition-transform duration-300 w-full sm:w-auto"
                                onClick={() => navigateTo('/auth/login')}
                            >
                                로그인 / 회원가입
                            </Button>
                        </div>
                    </div>
                    <div
                        className={`relative transition-all duration-1200 delay-300 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                        }`}
                    >
                        <div className="relative z-10 animate-bounce">
                            <img
                                src="/images/tonefit-logo.png"
                                alt="TONEFIT Character"
                                className="w-full max-w-md mx-auto hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Features Preview */}
            <section className="py-16 bg-white/70 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 font-serif">TONEFIT 특별한 기능</h2>
                        <p className="text-xl text-amber-800">당신의 아름다움을 완성하는 핵심 서비스</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Palette, title: "컬러 진단", desc: "나의 퍼스널 컬러 찾기", color: "amber" as const },
                            { icon: Sparkles, title: "트렌드 컬러", desc: "2025 펜톤 컬러 보기", color: "red" as const },
                            { icon: Heart, title: "코디 추천", desc: "맞춤 스타일 제안", color: "orange" as const },
                            { icon: Users, title: "커뮤니티", desc: "스타일 공유하기", color: "yellow" as const },
                        ].map((item, index) => (
                            <Card
                                key={index}
                                className="border-amber-200 hover:shadow-xl transition-all duration-500 hover:translate-y-[-4px] group"
                                onClick={() => navigateTo(`/${item.title.toLowerCase()}`)}
                            >
                                <CardContent className="p-6 text-center">
                                    <div
                                        className={`w-16 h-16 ${
                                            item.color === "amber" ? "bg-amber-100" :
                                                item.color === "red" ? "bg-red-100" :
                                                    item.color === "orange" ? "bg-orange-100" : "bg-yellow-100"
                                        } rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <item.icon
                                            className={`h-8 w-8 ${
                                                item.color === "amber"
                                                    ? "text-amber-900"
                                                    : item.color === "red"
                                                        ? "text-red-600"
                                                        : item.color === "orange"
                                                            ? "text-orange-600"
                                                            : "text-yellow-600"
                                            }`}
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-amber-900 mb-2 font-serif">{item.title}</h3>
                                    <p className="text-amber-700">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;