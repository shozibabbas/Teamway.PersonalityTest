using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using NUnit.Framework;
using Teamway.PersonalityTest.WebApp;
using Teamway.PersonalityTest.WebApp.Core;
using Teamway.PersonalityTest.WebApp.Models;

namespace Teamway.PersonalityTest.TestApp
{
    public class PTLogicTest
    {
        private IMemoryCache _cache;
        private IOptions<PersonalityConfiguration> _options;
        private PersonalityTestLogic _personalityLogic;
        private ISet<string> _cacheKeys = new HashSet<string>();

        [OneTimeSetUp]
        public void OneTimeSetup()
        {
            var services = new ServiceCollection();
            services.AddMemoryCache();

            var serviceProvider = services.BuildServiceProvider();

            _cache = serviceProvider.GetService<IMemoryCache>();
            _options = Options.Create(new PersonalityConfiguration()
            {
                ScoreThreshold = 30,
                MaxQuestionsInQuiz = 5
            });
            DataSeeder.Seed(_cache);
            _personalityLogic = new PersonalityTestLogic(_cache, _options);
        }

        /// <summary>
        /// Checks if quiz can be started
        /// </summary>
        [Test]
        public void QuizCanBeStarted()
        {
            try
            {
                QuizSessionDetail quizSessionDetail = _personalityLogic.StartQuiz();
                _cacheKeys.Add(quizSessionDetail.SessionId);
                Assert.IsNotNull(quizSessionDetail);
            }
            catch(Exception e)
            {
                Assert.Fail();
            }
        }

        /// <summary>
        /// checks if started quiz details can be retrieved
        /// </summary>
        [Test]
        public void QuizDetailsCanBeRetrieved()
        {
            try
            {
                QuizSessionDetail startQuizDetail = _personalityLogic.StartQuiz();
                QuizSessionDetail quizSessionDetail = _personalityLogic.GetQuizDetail(startQuizDetail.SessionId);
                _cacheKeys.Add(startQuizDetail.SessionId);
                _cacheKeys.Add(quizSessionDetail.SessionId);
                Assert.IsNotNull(quizSessionDetail);
                Assert.AreEqual(startQuizDetail.SessionId, quizSessionDetail.SessionId);
            }
            catch(Exception e)
            {
                Assert.Fail();
            }
        }

        /// <summary>
        /// checks if started quiz details can be retrieved
        /// </summary>
        [Test]
        public void QuizDetailsCannotBeRetrievedForWrongKey()
        {
            try
            {
                QuizSessionDetail startQuizDetail = _personalityLogic.StartQuiz();
                _cacheKeys.Add(startQuizDetail.SessionId);
                QuizSessionDetail quizSessionDetail = _personalityLogic.GetQuizDetail("wrong-key");
                Assert.Fail();
            }
            catch (Exception e)
            {
                Assert.Pass();
            }
        }

        /// <summary>
        /// checks if started quiz details are same as retrieved quiz details
        /// </summary>
        [Test]
        public void QuizDetailsAreSame()
        {
            try
            {
                QuizSessionDetail startQuizDetail = _personalityLogic.StartQuiz();
                QuizSessionDetail quizSessionDetail = _personalityLogic.GetQuizDetail(startQuizDetail.SessionId);
                _cacheKeys.Add(startQuizDetail.SessionId);
                _cacheKeys.Add(quizSessionDetail.SessionId);
                Assert.AreEqual(startQuizDetail.SessionId, quizSessionDetail.SessionId);
                Assert.AreEqual(startQuizDetail.CurrentQuestionId, quizSessionDetail.CurrentQuestionId);
                for (int i = 0; i < startQuizDetail.Questions.Count; i++)
                {
                    Assert.AreEqual(startQuizDetail.Questions[i].Id, quizSessionDetail.Questions[i].Id);
                    Assert.AreEqual(startQuizDetail.Questions[i].Title, quizSessionDetail.Questions[i].Title);
                    for (int j = 0; j < startQuizDetail.Questions[i].Answers.Count; j++)
                    {
                        Assert.AreEqual(startQuizDetail.Questions[i].Answers[j].Id, quizSessionDetail.Questions[i].Answers[j].Id);
                        Assert.AreEqual(startQuizDetail.Questions[i].Answers[j].Title, quizSessionDetail.Questions[i].Answers[j].Title);
                        Assert.AreEqual(startQuizDetail.Questions[i].Answers[j].Score, quizSessionDetail.Questions[i].Answers[j].Score);
                    }
                }
            }
            catch(Exception e)
            {
                Assert.Fail();
            }
        }

        /// <summary>
        /// checks if answer can be submitted
        /// </summary>
        [Test]
        public void AnswersCanBeSubmitted()
        {
            try
            {
                QuizSessionDetail startQuizDetail = _personalityLogic.StartQuiz();
                _cacheKeys.Add(startQuizDetail.SessionId);
                QuizSessionDetail quizSessionDetail = _personalityLogic.SubmitAnswer(startQuizDetail.SessionId, startQuizDetail.Questions[0].Id, startQuizDetail.Questions[0].Answers[0].Id);
                Assert.Pass();
            }
            catch(Exception e)
            {

            }
        }

        /// <summary>
        /// checks if current question changes after answer submitted
        /// </summary>
        [Test]
        public void CurrentQuestionChangesOnAnswerSubmission()
        {
            try
            {
                QuizSessionDetail startQuizDetail = _personalityLogic.StartQuiz();
                _cacheKeys.Add(startQuizDetail.SessionId);
                string currentQuestionId = startQuizDetail.CurrentQuestionId;
                QuizSessionDetail quizSessionDetail = _personalityLogic.SubmitAnswer(startQuizDetail.SessionId, startQuizDetail.Questions[0].Id, startQuizDetail.Questions[0].Answers[0].Id);
                Assert.AreNotEqual(currentQuestionId, quizSessionDetail.CurrentQuestionId);
            }
            catch (Exception e)
            {
                Assert.Fail();
            }
        }

        /// <summary>
        /// checks if quiz is marked completed after answering all questions
        /// </summary>
        [Test]
        public void QuizIsMarkedCompleted()
        {
            try
            {
                QuizSessionDetail startQuizDetail = _personalityLogic.StartQuiz();
                _cacheKeys.Add(startQuizDetail.SessionId);
                for (int i = 0; i < startQuizDetail.Questions.Count; i++)
                {
                    _personalityLogic.SubmitAnswer(startQuizDetail.SessionId, startQuizDetail.Questions[i].Id, startQuizDetail.Questions[i].Answers[0].Id);
                }
                QuizSessionDetail quizSessionDetail = _personalityLogic.GetQuizDetail(startQuizDetail.SessionId);
                Assert.IsTrue(quizSessionDetail.IsCompleted);
            }
            catch (Exception e)
            {
                Assert.Fail();
            }
        }

        /// <summary>
        /// checks if quiz is not marked completed after answering few questions
        /// </summary>
        [Test]
        public void QuizIsNotMarkedCompleted()
        {
            try
            {
                QuizSessionDetail startQuizDetail = _personalityLogic.StartQuiz();
                _cacheKeys.Add(startQuizDetail.SessionId);
                for (int i = 0; i < Math.Ceiling((double) startQuizDetail.Questions.Count / 2); i++)
                {
                    _personalityLogic.SubmitAnswer(startQuizDetail.SessionId, startQuizDetail.Questions[i].Id, startQuizDetail.Questions[i].Answers[i].Id);
                }
                QuizSessionDetail quizSessionDetail = _personalityLogic.GetQuizDetail(startQuizDetail.SessionId);
                Assert.IsFalse(quizSessionDetail.IsCompleted);
            }
            catch (Exception e)
            {
                Assert.Fail();
            }
        }

        /// <summary>
        /// checks if result is generated after completing quiz
        /// </summary>
        [Test]
        public void ResultIsGenerated()
        {
            try
            {
                QuizSessionDetail startQuizDetail = _personalityLogic.StartQuiz();
                _cacheKeys.Add(startQuizDetail.SessionId);
                for (int i = 0; i < startQuizDetail.Questions.Count; i++)
                {
                    _personalityLogic.SubmitAnswer(startQuizDetail.SessionId, startQuizDetail.Questions[i].Id, startQuizDetail.Questions[i].Answers[0].Id);
                }
                PersonalityType personalityType = _personalityLogic.GetPersonalityType(startQuizDetail.SessionId);
                Assert.IsNotNull(personalityType);
            }
            catch (Exception e)
            {
                Assert.Fail();
            }
        }

        /// <summary>
        /// checks if result is extrovert after correct answers
        /// </summary>
        [Test]
        public void ResultIsExtrovert()
        {
            try
            {
                QuizSessionDetail startQuizDetail = _personalityLogic.StartQuiz();
                _cacheKeys.Add(startQuizDetail.SessionId);
                IList<Question> questions = _cache.Get<IList<Question>>("questions");
                startQuizDetail.Questions = questions.Take(5).ToList();
                startQuizDetail.CurrentQuestionId = questions.First().Id;
                _cache.Set(startQuizDetail.SessionId, startQuizDetail);
                for (int i = 0; i < startQuizDetail.Questions.Count; i++)
                {
                    _personalityLogic.SubmitAnswer(startQuizDetail.SessionId, startQuizDetail.Questions[i].Id, startQuizDetail.Questions[i].Answers.Last().Id);
                }
                PersonalityType personalityType = _personalityLogic.GetPersonalityType(startQuizDetail.SessionId);
                Assert.AreEqual(personalityType, PersonalityType.EXTROVERT);
            }
            catch (Exception e)
            {
                Assert.Fail();
            }
        }

        /// <summary>
        /// checks if result is introvert after correct answers
        /// </summary>
        [Test]
        public void ResultIsIntrovert()
        {
            try
            {
                QuizSessionDetail startQuizDetail = _personalityLogic.StartQuiz();
                _cacheKeys.Add(startQuizDetail.SessionId);
                IList<Question> questions = _cache.Get<IList<Question>>("questions");
                startQuizDetail.Questions = questions.Take(5).ToList();
                startQuizDetail.CurrentQuestionId = questions.First().Id;
                _cache.Set(startQuizDetail.SessionId, startQuizDetail);
                for (int i = 0; i < startQuizDetail.Questions.Count; i++)
                {
                    _personalityLogic.SubmitAnswer(startQuizDetail.SessionId, startQuizDetail.Questions[i].Id, startQuizDetail.Questions[i].Answers.First().Id);
                }
                PersonalityType personalityType = _personalityLogic.GetPersonalityType(startQuizDetail.SessionId);
                Assert.AreEqual(personalityType, PersonalityType.INTROVERT);
            }
            catch (Exception e)
            {
                Assert.Fail();
            }
        }

        [OneTimeTearDown]
        public void OneTimeDestroy()
        {
            foreach(string key in _cacheKeys)
            {
                _cache.Remove(key);
            }
        }
    }
}
