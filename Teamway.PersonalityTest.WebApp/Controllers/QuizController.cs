using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;
using Teamway.PersonalityTest.WebApp.Core;
using Teamway.PersonalityTest.WebApp.Models;
using Teamway.PersonalityTest.WebApp.Models.Request;
using Teamway.PersonalityTest.WebApp.Models.Response;

namespace Teamway.PersonalityTest.WebApp.Controllers
{
    [Route("[controller]")]
    public class QuizController : Controller
    {
        private IMemoryCache _cache;
        private IOptions<PersonalityConfiguration> _options;
        private IPersonalityTestLogic _personalityTestLogic;

        public QuizController(IMemoryCache cache, IOptions<PersonalityConfiguration> options, IPersonalityTestLogic personalityTestLogic)
        {
            _cache = cache;
            _options = options;
            _personalityTestLogic = personalityTestLogic;
        }

        [HttpPost("start_quiz")]
        public ActionResult StartQuiz()
        {
            QuizSessionDetail quizSession = _personalityTestLogic.StartQuiz();
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
            QuizSessionDetail quizDetailResponse = _personalityTestLogic.GetQuizDetail(quizSessionId);
            return Ok(quizDetailResponse);
        }

        [HttpPut("quiz_detail/{quizSessionId}")]
        public ActionResult SubmitAnswer(string quizSessionId, [FromBody] SubmitAnswerRequest request)
        {
            QuizSessionDetail quizSessionDetail = _personalityTestLogic.SubmitAnswer(quizSessionId, request.QuestionId, request.AnswerId);
            return Ok(quizSessionDetail);
        }

        [HttpGet("result/{quizSessionId}")]
        public ActionResult GetResult(string quizSessionId)
        {
            return Ok(new GetResultResponse()
            {
                SessionId = quizSessionId,
                PersonalityType = _personalityTestLogic.GetPersonalityType(quizSessionId)
            });
        }

        [HttpGet]
        public IEnumerable<Question> Get()
        {
            return _cache.Get<IList<Question>>("questions");
        }
    }
}
