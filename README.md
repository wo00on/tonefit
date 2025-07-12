# TONEFIT 🎨

**퍼스널 컬러 × 펜톤 컬러 매칭 플랫폼**

TONEFIT은 개인의 퍼스널 컬러와 펜톤의 트렌드 컬러를 결합하여 최적의 컬러 매칭을 제공하는 웹 애플리케이션입니다.

![TONEFIT Logo](https://img.shields.io/badge/TONEFIT-Personal%20Color%20Matching-pink?style=for-the-badge&logo=color-sampler)

## ✨ 주요 기능

### 🎯 퍼스널 컬러 진단
- **5단계 퀴즈**를 통한 정확한 퍼스널 컬러 분석
- 봄웜(Spring), 여름쿨(Summer), 가을웜(Autumn), 겨울쿨(Winter) 4가지 타입 분류
- 개인별 맞춤 컬러 팔레트 제공

### 🎨 펜톤 컬러 연동
- **2020-2025년 펜톤 올해의 컬러**와 매칭
- 글로벌 트렌드 컬러와 퍼스널 컬러의 완벽한 조화
- 실시간 컬러 추천 시스템

### 👗 스타일 추천
- 퍼스널 컬러에 맞는 **패션 아이템 추천**
- 상의, 하의, 아우터, 액세서리 등 카테고리별 제안
- 완성된 코디네이션 예시 제공

### 🌍 다국어 지원
- 한국어/영어 **실시간 언어 전환**
- 글로벌 사용자를 위한 현지화 지원

### 📱 반응형 디자인
- 모바일, 태블릿, 데스크톱 **완벽 호환**
- 직관적이고 아름다운 사용자 인터페이스

## 🛠 기술 스택

### Frontend
- **React 18** - 사용자 인터페이스
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 스타일링
- **Wouter** - 라우팅
- **React Query** - 상태 관리
- **Framer Motion** - 애니메이션
- **Radix UI** - 접근성 컴포넌트

### Backend
- **Node.js** - 서버 런타임
- **Express.js** - 웹 프레임워크
- **Drizzle ORM** - 데이터베이스 ORM
- **PostgreSQL** - 데이터베이스
- **WebSocket** - 실시간 통신

### 개발 도구
- **Vite** - 빌드 도구
- **ESBuild** - 번들링
- **Drizzle Kit** - 데이터베이스 마이그레이션

## 🚀 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/your-username/tonefit.git
cd tonefit
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
```bash
# .env 파일 생성
cp .env.example .env

# 데이터베이스 연결 정보 설정
DATABASE_URL="your-database-url"
```

### 4. 데이터베이스 설정
```bash
# 데이터베이스 마이그레이션
npm run db:push
```

### 5. 개발 서버 실행
```bash
# 개발 모드
npm run dev

# 프로덕션 빌드
npm run build
npm start
```

## 📁 프로젝트 구조

```
tonefit/
├── client/                 # Frontend React 애플리케이션
│   ├── src/
│   │   ├── components/     # 재사용 가능한 컴포넌트
│   │   ├── pages/         # 페이지 컴포넌트
│   │   ├── contexts/      # React Context
│   │   ├── hooks/         # 커스텀 훅
│   │   ├── types/         # TypeScript 타입 정의
│   │   └── assets/        # 이미지 및 정적 파일
├── server/                # Backend Express 서버
│   ├── index.ts          # 서버 진입점
│   ├── routes.ts         # API 라우트
│   └── storage.ts        # 데이터 저장소
├── shared/               # 공유 스키마 및 타입
└── drizzle.config.ts     # 데이터베이스 설정
```

## 🎨 주요 페이지

### 🏠 홈페이지
- 퍼스널 컬러 소개 및 서비스 안내
- 컬러 선택기를 통한 즉시 진단
- 사용자 피드 및 트렌드 컬러 갤러리

### 🧪 퍼스널 컬러 진단
- 5단계 퀴즈 기반 진단 시스템
- 실시간 진행률 표시
- 결과에 따른 맞춤 컬러 팔레트 제공

### 📚 컬러 가이드
- 퍼스널 컬러와 펜톤 컬러 상세 설명
- 계절별 컬러 특성 안내
- 트렌드 컬러 히스토리

### 📊 결과 페이지
- 개인별 퍼스널 컬러 분석 결과
- 추천 컬러 팔레트
- 스타일 아이템 및 코디 추천

## 🌟 주요 특징

### 🎯 정확한 컬러 분석
- 과학적 근거에 기반한 퍼스널 컬러 진단
- 피부톤, 모발, 눈동자 색상 종합 분석
- 개인별 특성에 맞는 정확한 결과 제공

### 🎨 트렌드 반영
- 최신 펜톤 컬러 트렌드 반영
- 2020-2025년 올해의 컬러 데이터베이스
- 시즌별 컬러 트렌드 업데이트

### 💡 사용자 경험
- 직관적이고 아름다운 UI/UX
- 부드러운 애니메이션과 전환 효과
- 모바일 최적화된 반응형 디자인

## 📱 스크린샷

### 홈페이지
![Homepage](https://via.placeholder.com/800x400/FF6B9D/FFFFFF?text=TONEFIT+Homepage)

### 퍼스널 컬러 진단
![Quiz](https://via.placeholder.com/800x400/4ECDC4/FFFFFF?text=Personal+Color+Quiz)

### 결과 페이지
![Results](https://via.placeholder.com/800x400/45B7D1/FFFFFF?text=Color+Results)

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

- **프로젝트 링크**: [https://github.com/your-username/tonefit](https://github.com/your-username/tonefit)
- **이메일**: your-email@example.com

## 🙏 감사의 말

- [Pantone](https://www.pantone.com/) - 컬러 트렌드 데이터 제공
- [React](https://reactjs.org/) - 훌륭한 프론트엔드 프레임워크
- [Tailwind CSS](https://tailwindcss.com/) - 아름다운 UI 컴포넌트

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!

