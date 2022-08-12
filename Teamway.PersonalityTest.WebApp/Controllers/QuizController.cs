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
        private IPersonalityTestLogic _personalityTestLogic;

        public QuizController(IMemoryCache cache, IPersonalityTestLogic personalityTestLogic)
        {
            _cache = cache;
            _personalityTestLogic = personalityTestLogic;
        }

        /// <summary>
        /// Start quiz from scratch
        /// </summary>
        /// <returns>Instance of the quiz from cache</returns>
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

        /// <summary>
        /// Get details of existing quiz
        /// </summary>
        /// <param name="quizSessionId">unique ID of quiz</param>
        /// <returns>Instance of the quiz from cache</returns>
        [HttpGet("quiz_detail/{quizSessionId}")]
        public ActionResult GetQuizDetail(string quizSessionId)
        {
            QuizSessionDetail quizDetailResponse = _personalityTestLogic.GetQuizDetail(quizSessionId);
            return Ok(quizDetailResponse);
        }

        /// <summary>
        /// Move quiz to previous question
        /// </summary>
        /// <param name="quizSessionId">unique ID of quiz</param>
        /// <returns>Instance of the quiz from cache</returns>
        [HttpPut("quiz_detail/{quizSessionId}/previous")]
        public ActionResult GoToPreviousQuestion(string quizSessionId)
        {
            QuizSessionDetail quizSessionDetail = _personalityTestLogic.GoToPreviousQuestion(quizSessionId);
            return Ok(quizSessionDetail);
        }

        /// <summary>
        /// Submit answer for a question in quiz
        /// </summary>
        /// <param name="quizSessionId">unique ID of quiz</param>
        /// <returns>Instance of the quiz from cache</returns>
        [HttpPut("quiz_detail/{quizSessionId}")]
        public ActionResult SubmitAnswer(string quizSessionId, [FromBody] SubmitAnswerRequest request)
        {
            QuizSessionDetail quizSessionDetail = _personalityTestLogic.SubmitAnswer(quizSessionId, request.QuestionId, request.AnswerId);
            return Ok(quizSessionDetail);
        }

        /// <summary>
        /// Get result of quiz
        /// </summary>
        /// <param name="quizSessionId">unique ID of quiz</param>
        /// <returns>Instance of the quiz from cache</returns>
        [HttpGet("result/{quizSessionId}")]
        public ActionResult GetResult(string quizSessionId)
        {
            return Ok(new GetResultResponse()
            {
                SessionId = quizSessionId,
                PersonalityType = _personalityTestLogic.GetPersonalityType(quizSessionId)
            });
        }
    }
}
