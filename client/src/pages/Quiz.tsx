
import { useState } from 'react';
import { useLocation } from 'wouter';
import { PersonalColorType } from '@/types/color';
import { useLanguage } from '@/contexts/LanguageContext';

interface QuizQuestion {
  id: number;
  questionKey: string;
  options: {
    textKey: string;
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
  const { t } = useLanguage();
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
      questionKey: 'quiz.question1',
      options: [
        { textKey: 'quiz.q1.option1', points: { spring: 3, summer: 0, autumn: 2, winter: 0 } },
        { textKey: 'quiz.q1.option2', points: { spring: 0, summer: 3, autumn: 0, winter: 2 } },
        { textKey: 'quiz.q1.option3', points: { spring: 2, summer: 0, autumn: 3, winter: 0 } },
        { textKey: 'quiz.q1.option4', points: { spring: 0, summer: 2, autumn: 0, winter: 3 } }
      ]
    },
    {
      id: 2,
      questionKey: 'quiz.question2',
      options: [
        { textKey: 'quiz.q2.option1', points: { spring: 3, summer: 1, autumn: 0, winter: 0 } },
        { textKey: 'quiz.q2.option2', points: { spring: 0, summer: 3, autumn: 1, winter: 1 } },
        { textKey: 'quiz.q2.option3', points: { spring: 1, summer: 0, autumn: 3, winter: 1 } },
        { textKey: 'quiz.q2.option4', points: { spring: 0, summer: 1, autumn: 1, winter: 3 } }
      ]
    },
    {
      id: 3,
      questionKey: 'quiz.question3',
      options: [
        { textKey: 'quiz.q3.option1', points: { spring: 3, summer: 1, autumn: 1, winter: 0 } },
        { textKey: 'quiz.q3.option2', points: { spring: 0, summer: 3, autumn: 0, winter: 2 } },
        { textKey: 'quiz.q3.option3', points: { spring: 1, summer: 0, autumn: 3, winter: 1 } },
        { textKey: 'quiz.q3.option4', points: { spring: 0, summer: 1, autumn: 1, winter: 3 } }
      ]
    },
    {
      id: 4,
      questionKey: 'quiz.question4',
      options: [
        { textKey: 'quiz.q4.option1', points: { spring: 3, summer: 0, autumn: 1, winter: 0 } },
        { textKey: 'quiz.q4.option2', points: { spring: 0, summer: 3, autumn: 0, winter: 1 } },
        { textKey: 'quiz.q4.option3', points: { spring: 1, summer: 0, autumn: 3, winter: 0 } },
        { textKey: 'quiz.q4.option4', points: { spring: 0, summer: 1, autumn: 0, winter: 3 } }
      ]
    },
    {
      id: 5,
      questionKey: 'quiz.question5',
      options: [
        { textKey: 'quiz.q5.option1', points: { spring: 3, summer: 0, autumn: 3, winter: 0 } },
        { textKey: 'quiz.q5.option2', points: { spring: 0, summer: 3, autumn: 0, winter: 3 } },
        { textKey: 'quiz.q5.option3', points: { spring: 1, summer: 1, autumn: 1, winter: 1 } },
        { textKey: 'quiz.q5.option4', points: { spring: 1, summer: 1, autumn: 1, winter: 1 } }
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
        titleKey: 'quiz.result.spring.title',
        descriptionKey: 'quiz.result.spring.desc',
        colors: ['Coral', 'Peach', 'Bright Orange', 'Lime Green']
      },
      summer: {
        titleKey: 'quiz.result.summer.title',
        descriptionKey: 'quiz.result.summer.desc',
        colors: ['Lavender', 'Soft Pink', 'Pastel Blue', 'Mint']
      },
      autumn: {
        titleKey: 'quiz.result.autumn.title',
        descriptionKey: 'quiz.result.autumn.desc',
        colors: ['Terracotta', 'Olive Green', 'Mustard', 'Burgundy']
      },
      winter: {
        titleKey: 'quiz.result.winter.title',
        descriptionKey: 'quiz.result.winter.desc',
        colors: ['Royal Blue', 'Emerald', 'Pure White', 'Black']
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
      <div className="min-h-screen bg-gray-50">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-3xl p-12 shadow-lg animate-fade-in">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {t('quiz.result.title')}
                </h1>
                <p className="text-lg text-gray-600">
                  {t('quiz.result.subtitle')}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t(resultInfo.titleKey)}
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {t(resultInfo.descriptionKey)}
                </p>
                
                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t('quiz.result.colors')}
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
                  {t('quiz.result.viewDetails')}
                </button>
                <button
                  onClick={restartQuiz}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300"
                >
                  {t('quiz.result.restart')}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('quiz.title')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('quiz.subtitle')}
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
              {t(questions[currentQuestion].questionKey)}
            </h2>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className="w-full p-6 text-left bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all duration-300 hover:shadow-md border border-transparent hover:border-primary"
                >
                  <span className="text-lg text-gray-700">{t(option.textKey)}</span>
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
