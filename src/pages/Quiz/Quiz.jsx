import { useState } from 'react';
import { QUIZ_QUESTIONS } from '../../data/mockData';
import Icon from '../../components/Icons/IconResolver';
import { ArrowRight, RotateCcw, Trophy, CheckCircle2, XCircle } from 'lucide-react';
import './Quiz.css';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = QUIZ_QUESTIONS[currentQuestion];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const progress = ((currentQuestion + (quizCompleted ? 1 : 0)) / totalQuestions) * 100;

  const handleAnswer = (index) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === question.correctAnswer;
    if (isCorrect) setScore(prev => prev + 1);

    setAnswers(prev => [...prev, {
      questionId: question.id,
      selected: selectedAnswer,
      correct: question.correctAnswer,
      isCorrect
    }]);

    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
    setShowExplanation(false);
  };

  const getScoreIcon = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 90) return <Trophy size={48} color="#f59e0b" />;
    if (percentage >= 70) return <Icon name="sparkles" size={48} color="#10b981" />;
    if (percentage >= 50) return <Icon name="correct" size={48} color="#3b82f6" />;
    return <Icon name="learn" size={48} color="#8b5cf6" />;
  };

  const getScoreMessage = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 90) return "Outstanding! You're an Indian Election Expert!";
    if (percentage >= 70) return "Great job! You know the Indian electoral system well!";
    if (percentage >= 50) return "Good effort! Keep learning about our democracy!";
    return "Keep studying! You'll get there!";
  };

  if (quizCompleted) {
    const percentage = Math.round((score / totalQuestions) * 100);
    return (
      <div className="quiz-page" id="quiz-results">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>

        <div className="container-sm">
          <div className="quiz-results glass-card animate-fadeInUp">
            <div className="results-icon-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              {getScoreIcon()}
            </div>
            <h1 className="heading-2">Quiz Complete!</h1>
            <p className="results-message">{getScoreMessage()}</p>

            <div className="results-score-circle">
              <svg viewBox="0 0 120 120" className="score-ring">
                <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                <circle
                  cx="60" cy="60" r="52" fill="none"
                  stroke={percentage >= 80 ? '#10b981' : percentage >= 50 ? '#f59e0b' : '#ef4444'}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${(percentage / 100) * 327} 327`}
                  transform="rotate(-90 60 60)"
                  className="score-ring-fill"
                />
              </svg>
              <div className="score-text">
                <span className="score-number">{score}/{totalQuestions}</span>
                <span className="score-percent">{percentage}%</span>
              </div>
            </div>

            {percentage >= 80 && (
              <div className="results-badge animate-scaleIn">
                <Trophy size={20} color="#f59e0b" />
                <span>You earned the <strong>"Election Expert"</strong> badge!</span>
              </div>
            )}

            {/* Answer Review */}
            <div className="results-review">
              <h3>Answer Review</h3>
              {answers.map((answer, i) => (
                <div key={i} className={`review-item ${answer.isCorrect ? 'review-correct' : 'review-wrong'}`}>
                  <span className="review-icon">
                    {answer.isCorrect ? <CheckCircle2 size={18} color="#10b981" /> : <XCircle size={18} color="#ef4444" />}
                  </span>
                  <span className="review-question">Q{i + 1}: {QUIZ_QUESTIONS[i].question}</span>
                </div>
              ))}
            </div>

            <button onClick={handleRestart} className="btn btn-primary btn-lg" id="quiz-restart">
              <RotateCcw size={18} style={{ marginRight: '0.5rem' }} /> Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page" id="quiz-page">
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>

      <div className="container-sm">
        {/* Header */}
        <div className="quiz-header animate-fadeInUp">
          <span className="badge badge-accent">
            <Icon name="quiz" size={14} /> Knowledge Quiz
          </span>
          <h1 className="heading-2">Test Your Election Knowledge</h1>
          <p className="quiz-description">
            Answer questions about the Indian democratic process and earn the Election Expert badge!
          </p>
        </div>

        {/* Progress */}
        <div className="quiz-progress animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <div className="quiz-progress-bar">
            <div className="quiz-progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="quiz-progress-info">
            <span>Question {currentQuestion + 1} of {totalQuestions}</span>
            <span>Score: {score}</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="quiz-card glass-card animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="quiz-question-number">Question {currentQuestion + 1}</div>
          <h2 className="quiz-question">{question.question}</h2>

          <div className="quiz-options">
            {question.options.map((option, index) => {
              let optionClass = 'quiz-option';
              if (showExplanation) {
                if (index === question.correctAnswer) optionClass += ' quiz-option-correct';
                else if (index === selectedAnswer) optionClass += ' quiz-option-wrong';
              } else if (index === selectedAnswer) {
                optionClass += ' quiz-option-selected';
              }

              return (
                <button
                  key={index}
                  className={optionClass}
                  onClick={() => handleAnswer(index)}
                  id={`quiz-option-${index}`}
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="option-text">{option}</span>
                  {showExplanation && index === question.correctAnswer && (
                    <CheckCircle2 size={20} className="option-check" color="#10b981" />
                  )}
                  {showExplanation && index === selectedAnswer && index !== question.correctAnswer && (
                    <XCircle size={20} className="option-check" color="#ef4444" />
                  )}
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className="quiz-explanation animate-fadeIn">
              <div className="explanation-header">
                {selectedAnswer === question.correctAnswer ? (
                  <span className="explanation-status correct">
                    <CheckCircle2 size={16} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} /> Correct!
                  </span>
                ) : (
                  <span className="explanation-status wrong">
                    <XCircle size={16} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} /> Not quite!
                  </span>
                )}
              </div>
              <p>{question.explanation}</p>
            </div>
          )}

          <div className="quiz-actions">
            {!showExplanation ? (
              <button
                className="btn btn-primary btn-lg"
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                id="quiz-submit"
              >
                Submit Answer
              </button>
            ) : (
              <button
                className="btn btn-primary btn-lg"
                onClick={handleNext}
                id="quiz-next"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                {currentQuestion < totalQuestions - 1 ? (
                  <>Next Question <ArrowRight size={18} /></>
                ) : (
                  <>See Results <Trophy size={18} /></>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
