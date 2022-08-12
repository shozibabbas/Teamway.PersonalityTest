using System;
using Teamway.PersonalityTest.WebApp.Models;

namespace Teamway.PersonalityTest.WebApp.Core
{
    public interface IPersonalityTestLogic
    {
        public QuizSessionDetail StartQuiz();
        public QuizSessionDetail GetQuizDetail(string quizSessionId);
        public QuizSessionDetail GoToPreviousQuestion(string quizSessionId);
        public QuizSessionDetail SubmitAnswer(string quizSessionId, string questionId, string answerId);
        public PersonalityType GetPersonalityType(string quizSessionId);

    }
}
