import { useState } from 'react';
import { useLocation } from 'wouter';
import { PersonalColorType } from '@/types/color';

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    points: {
      spring: number;
      summer: number;
      autumn: number;
      winter: number;
    };
  }[];
}

const Quiz = () => {
  const [, setLocation] = useLocation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    spring: 0,
    summer: 0,
    autumn: 0,
    winter: 0
  });
  const [showResult, setShowResult] = useState(false);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "거울을 보았을 때, 나의 피부톤은?",
      options: [
        { text: "황금빛이 도는 따뜻한 피부", points: { spring: 3, summer: 0, autumn: 2, winter: 0 } },
        { text: "핑크빛이 도는 차가운 피부", points: { spring: 0, summer: 3, autumn: 0, winter: 2 } },
        { text: "노란빛이 강한 따뜻한 피부", points: { spring: 2, summer: 0, autumn: 3, winter: 0 } },
        { text: "창백하고 차가운 피부", points: { spring: 0, summer: 2, autumn: 0, winter: 3 } }
      ]
    },
    {
      id: 2,
      question: "나의 자연스러운 모발 색상은?",
      options: [
        { text: "밝은 갈색 또는 금발", points: { spring: 3, summer: 1, autumn: 0, winter: 0 } },
        { text: "애쉬 브라운 또는 회갈색", points: { spring: 0, summer: 3, autumn: 1, winter: 1 } },
        { text: "진한 갈색 또는 적갈색", points: { spring: 1, summer: 0, autumn: 3, winter: 1 } },
        { text: "검은색 또는 다크 브라운", points: { spring: 0, summer: 1, autumn: 1, winter: 3 } }
      ]
    },
    {
      id: 3,
      question: "나의 눈동자 색상은?",
      options: [
        { text: "밝은 갈색 또는 헤이즐", points: { spring: 3, summer: 1, autumn: 1, winter: 0 } },
        { text: "회색 또는 파란색", points: { spring: 0, summer: 3, autumn: 0, winter: 2 } },
        { text: "짙은 갈색 또는 호박색", points: { spring: 1, summer: 0, autumn: 3, winter: 1 } },
        { text: "검은색 또는 진한 갈색", points: { spring: 0, summer: 1, autumn: 1, winter: 3 } }
      ]
    },
    {
      id: 4,
      question: "어떤 색상을 입을 때 가장 생기있어 보인다는 말을 듣나요?",
      options: [
        { text: "코랄, 피치, 밝은 오렌지", points: { spring: 3, summer: 0, autumn: 1, winter: 0 } },
        { text: "라벤더, 소프트 핑크, 파스텔 블루", points: { spring: 0, summer: 3, autumn: 0, winter: 1 } },
        { text: "테라코타, 올리브 그린, 머스타드", points: { spring: 1, summer: 0, autumn: 3, winter: 0 } },
        { text: "로얄 블루, 에메랄드, 퓨어 화이트", points: { spring: 0, summer: 1, autumn: 0, winter: 3 } }
      ]
    },
    {
      id: 5,
      question: "금속 액세서리 중 어떤 것이 더 잘 어울리나요?",
      options: [
        { text: "골드 계열", points: { spring: 3, summer: 0, autumn: 3, winter: 0 } },
        { text: "실버 계열", points: { spring: 0, summer: 3, autumn: 0, winter: 3 } },
        { text: "둘 다 비슷하게 어울림", points: { spring: 1, summer: 1, autumn: 1, winter: 1 } },
        { text: "잘 모르겠음", points: { spring: 1, summer: 1, autumn: 1, winter: 1 } }
      ]
    }
  ];

  const handleAnswerClick = (optionIndex: number) => {
    const selectedOption = questions[currentQuestion].options[optionIndex];
    const newScores = {
      spring: scores.spring + selectedOption.points.spring,
      summer: scores.summer + selectedOption.points.summer,
      autumn: scores.autumn + selectedOption.points.autumn,
      winter: scores.winter + selectedOption.points.winter
    };
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed, show result
      setShowResult(true);
    }
  };

  const getResult = (): PersonalColorType => {
    const maxScore = Math.max(scores.spring, scores.summer, scores.autumn, scores.winter);
    if (scores.spring === maxScore) return 'spring';
    if (scores.summer === maxScore) return 'summer';
    if (scores.autumn === maxScore) return 'autumn';
    return 'winter';
  };

  const getResultDescription = (type: PersonalColorType) => {
    const descriptions = {
      spring: {
        title: '봄웜 (Spring)',
        description: '밝고 화사한 웜톤으로, 생기 있고 활동적인 매력을 가지고 있습니다.',
        colors: ['코랄', '피치', '밝은 오렌지', '라임 그린']
      },
      summer: {
        title: '여름쿨 (Summer)',
        description: '부드럽고 시원한 쿨톤으로, 차분하고 우아한 매력을 가지고 있습니다.',
        colors: ['라벤더', '소프트 핑크', '파스텔 블루', '민트']
      },
      autumn: {
        title: '가을웜 (Autumn)',
        description: '깊고 따뜻한 웜톤으로, 안정감 있고 성숙한 매력을 가지고 있습니다.',
        colors: ['테라코타', '올리브 그린', '머스타드', '버건디']
      },
      winter: {
        title: '겨울쿨 (Winter)',
        description: '선명하고 차가운 쿨톤으로, 강렬하고 도시적인 매력을 가지고 있습니다.',
        colors: ['로얄 블루', '에메랄드', '퓨어 화이트', '블랙']
      }
    };
    return descriptions[type];
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScores({ spring: 0, summer: 0, autumn: 0, winter: 0 });
    setShowResult(false);
  };

  const goToResults = () => {
    const result = getResult();
    setLocation(`/results/${result}`);
  };

  if (showResult) {
    const result = getResult();
    const resultInfo = getResultDescription(result);
    
    return (
      <div className="min-h-screen" style={{backgroundColor: '#F5F5F7'}}>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-3xl p-12 shadow-lg animate-fade-in">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  진단 완료!
                </h1>
                <p className="text-lg text-gray-600">
                  당신의 퍼스널 컬러 타입이 결정되었습니다
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {resultInfo.title}
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {resultInfo.description}
                </p>
                
                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    추천 컬러
                  </h3>
                  <div className="flex justify-center space-x-4">
                    {resultInfo.colors.map((color, index) => (
                      <span
                        key={index}
                        className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={goToResults}
                  className="bg-primary hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                >
                  상세 결과 보기
                </button>
                <button
                  onClick={restartQuiz}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300"
                >
                  다시 진단하기
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#F5F5F7'}}>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              퍼스널 컬러 진단 키트
            </h1>
            <p className="text-lg text-gray-600">
              간단한 질문으로 나만의 퍼스널 컬러를 찾아보세요
            </p>
            <div className="mt-6">
              <div className="bg-gray-200 rounded-full h-2 max-w-md mx-auto">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {currentQuestion + 1} / {questions.length}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className="w-full p-6 text-left bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all duration-300 hover:shadow-md border border-transparent hover:border-primary"
                >
                  <span className="text-lg text-gray-700">{option.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quiz;