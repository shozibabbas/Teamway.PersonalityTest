using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;
using Teamway.PersonalityTest.WebApp.Errors;
using Teamway.PersonalityTest.WebApp.Models;

namespace Teamway.PersonalityTest.WebApp.Core
{
    public class PersonalityTestLogic : IPersonalityTestLogic
    {
        private IMemoryCache _cache;
        private IOptions<PersonalityConfiguration> _options;

        public PersonalityTestLogic(IMemoryCache cache, IOptions<PersonalityConfiguration> options)
        {
            _cache = cache;
            _options = options;
        }

        public QuizSessionDetail StartQuiz()
        {
            IList<Question> questions = _cache.Get<IList<Question>>("questions");
            var rnd = new Random();
            questions = questions.OrderBy(x => rnd.Next()).Take(5).ToList();
            Guid quizSessionId = Guid.NewGuid();
            QuizSessionDetail quizSession = new QuizSessionDetail()
            {
                SessionId = quizSessionId.ToString(),
                Questions = questions,
                CurrentQuestionId = questions.First().Id,
            };
            _cache.Set(quizSessionId.ToString(), quizSession);
            return quizSession;
        }

        public PersonalityType GetPersonalityType(string quizSessionId)
        {
            _cache.TryGetValue<QuizSessionDetail>(quizSessionId, out QuizSessionDetail quizSessionDetail);
            if (quizSessionDetail == null || (quizSessionDetail != null && !quizSessionDetail.IsCompleted))
            {
                throw new InvalidOperationException(ErrorMessages.RECORD_NOT_FOUND);
            }
            double totalScore = 0;
            foreach (KeyValuePair<string, string> keyValuePair in quizSessionDetail.UserAnswers)
            {
                totalScore += quizSessionDetail.Questions.First(x => x.Id == keyValuePair.Key).Answers.First(x => x.Id == keyValuePair.Value).Score;
            }
            return totalScore < _options.Value.ScoreThreshold ? PersonalityType.INTROVERT : PersonalityType.EXTROVERT;
        }

        public QuizSessionDetail GetQuizDetail(string quizSessionId)
        {
            _cache.TryGetValue<QuizSessionDetail>(quizSessionId, out QuizSessionDetail quizSessionDetail);
            if (quizSessionDetail == null)
            {
                throw new InvalidOperationException(ErrorMessages.RECORD_NOT_FOUND);
            }
            return quizSessionDetail;
        }

        public QuizSessionDetail SubmitAnswer(string quizSessionId, string questionId, string answerId)
        {
            _cache.TryGetValue(quizSessionId, out QuizSessionDetail quizSessionDetail);
            if (quizSessionDetail == null)
            {
                throw new InvalidOperationException(ErrorMessages.RECORD_NOT_FOUND);
            }
            if (quizSessionDetail.UserAnswers.Keys.Contains(questionId))
            {
                quizSessionDetail.UserAnswers[questionId] = answerId;
            }
            else
            {
                quizSessionDetail.UserAnswers.Add(new KeyValuePair<string, string>(questionId, answerId));
            }
            int newQuestionIndex = quizSessionDetail.Questions.IndexOf(quizSessionDetail.Questions.First(x => x.Id == quizSessionDetail.CurrentQuestionId)) + 1;
            if (quizSessionDetail.Questions.Count <= newQuestionIndex)
            {
                quizSessionDetail.IsCompleted = true;
            }
            else
            {
                quizSessionDetail.CurrentQuestionId = quizSessionDetail.Questions[newQuestionIndex].Id;
            }
            _cache.Set(quizSessionId, quizSessionDetail);
            return quizSessionDetail;
        }
    }
}
