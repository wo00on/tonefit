import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Palette, Sparkles, Heart, Plus } from 'lucide-react';

// 타입 정의
interface User {
    name: string;
    personalColor?: string;
}

interface DashboardProps {
    user: User;
}

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

// 대시보드 컴포넌트
export const Dashboard: React.FC<DashboardProps> = ({ user }) => {
    const navigate = useNavigate();

    const navigateTo = (path: string) => {
        navigate(path);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 lg:ml-64 pt-16 lg:pt-0">
            <div className="container mx-auto px-4 py-8">
                 Welcome Section
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2 font-serif">
                        안녕하세요, {user.name}님! 👋
                    </h1>
                    <p className="text-xl text-amber-800">
                        {user.personalColor
                            ? `${user.personalColor} 타입에 맞는 새로운 스타일을 발견해보세요`
                            : "퍼스널 컬러 진단으로 당신만의 스타일을 찾아보세요"}
                    </p>
                </div>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                        {
                            href: "/diagnosis",
                            icon: Palette,
                            title: "컬러 진단",
                            desc: user.personalColor ? "재진단하기" : "진단 시작",
                            color: "amber" as const,
                        },
                        { href: "/pantone", icon: Sparkles, title: "트렌드 컬러", desc: "2024 펜톤 컬러", color: "red" as const },
                        { href: "/coordination", icon: Heart, title: "코디 추천", desc: "맞춤 스타일", color: "orange" as const },
                        { href: "/favorites", icon: Plus, title: "새 코디", desc: "스타일 만들기", color: "yellow" as const },
                    ].map((item, index) => (
                        <Card
                            key={index}
                            className="border-amber-200 hover:shadow-xl transition-all duration-500 hover:translate-y-[-4px] group h-full"
                            onClick={() => navigateTo(item.href)}
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

                {/* Recent Activity & Recommendations */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Latest Trends */}
                    <Card className="border-amber-200 shadow-lg">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold text-amber-900 mb-4 font-serif">최신 트렌드</h3>
                            <div className="space-y-4">
                                {[
                                    { title: "2024 봄 트렌드", color: "from-pink-200 to-rose-300", trend: "Peach Fuzz" },
                                    { title: "여름 컬러 팔레트", color: "from-blue-200 to-cyan-300", trend: "Ocean Blue" },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-amber-50 transition-colors duration-200 cursor-pointer"
                                    >
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color}`}></div>
                                        <div>
                                            <h4 className="font-medium text-amber-900">{item.title}</h4>
                                            <p className="text-sm text-amber-600">{item.trend}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Personal Recommendations */}
                    <Card className="border-amber-200 shadow-lg">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold text-amber-900 mb-4 font-serif">맞춤 추천</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-amber-50 rounded-lg">
                                    <h4 className="font-medium text-amber-900 mb-2">오늘의 코디 추천</h4>
                                    <p className="text-sm text-amber-700 mb-3">
                                        {user.personalColor
                                            ? `${user.personalColor} 타입에 어울리는 스타일`
                                            : "퍼스널 컬러 진단 후 추천받으세요"}
                                    </p>
                                    <Button size="sm" className="bg-amber-900 hover:bg-amber-800 text-white">
                                        보러가기
                                    </Button>
                                </div>
                                <div className="p-4 bg-orange-50 rounded-lg">
                                    <h4 className="font-medium text-amber-900 mb-2">인기 스타일</h4>
                                    <p className="text-sm text-amber-700 mb-3">이번 주 가장 많이 저장된 코디</p>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="border-amber-900 text-amber-900 hover:bg-amber-50"
                                    >
                                        구경하기
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;