using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;
using Teamway.PersonalityTest.WebApp.Models;
using Teamway.PersonalityTest.WebApp.Models.Request;
using Teamway.PersonalityTest.WebApp.Models.Response;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Teamway.PersonalityTest.WebApp.Controllers
{
    [Route("[controller]")]
    public class QuizController : Controller
    {
        private IMemoryCache _cache;
        private IOptions<PersonalityConfiguration> _options;

        public QuizController(IMemoryCache cache, IOptions<PersonalityConfiguration> options)
        {
            _cache = cache;
            _options = options;
        }

        [HttpPost("start_quiz")]
        public ActionResult StartQuiz()
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
            StartQuizResponse startQuizResponse = new StartQuizResponse() {
                SessionId = quizSession.SessionId,
                Questions = quizSession.Questions,
                CurrentQuestionId = quizSession.CurrentQuestionId
            };
            return Ok(startQuizResponse);
        }

        [HttpGet("quiz_detail/{quizSessionId}")]
        public ActionResult GetQuizDetail(string quizSessionId)
        {
            _cache.TryGetValue<QuizSessionDetail>(quizSessionId, out QuizSessionDetail quizDetailResponse);
            if (quizDetailResponse == null)
            {
                return BadRequest();
            }
            return Ok(quizDetailResponse);
        }

        [HttpPut("quiz_detail/{quizSessionId}")]
        public ActionResult SubmitAnswer(string quizSessionId, [FromBody] SubmitAnswerRequest request)
        {
            _cache.TryGetValue(quizSessionId, out QuizSessionDetail quizSessionDetail);
            if (quizSessionDetail == null)
            {
                return BadRequest();
            }
            if (quizSessionDetail.UserAnswers.Keys.Contains(request.QuestionId)) {
                return Ok(quizSessionDetail);
            }
            quizSessionDetail.UserAnswers.Add(new KeyValuePair<string, string>(request.QuestionId, request.AnswerId));
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
            return Ok(quizSessionDetail);
        }

        [HttpGet("result/{quizSessionId}")]
        public ActionResult GetResult(string quizSessionId)
        {
            _cache.TryGetValue<QuizSessionDetail>(quizSessionId, out QuizSessionDetail quizSessionDetail);
            if (quizSessionDetail == null || (quizSessionDetail != null && !quizSessionDetail.IsCompleted))
            {
                return BadRequest();
            }
            double totalScore = 0;
            foreach (KeyValuePair<string, string> keyValuePair in quizSessionDetail.UserAnswers)
            {
                totalScore += quizSessionDetail.Questions.First(x => x.Id == keyValuePair.Key).Answers.First(x => x.Id == keyValuePair.Value).Score;
            }
            return Ok(new GetResultResponse()
            {
                SessionId = quizSessionId,
                PersonalityType = totalScore < _options.Value.ScoreThreshold ? PersonalityType.INTROVERT : PersonalityType.EXTROVERT
            });
        }

        [HttpGet]
        public IEnumerable<Question> Get()
        {
            return _cache.Get<IList<Question>>("questions");
        }
    }
}
