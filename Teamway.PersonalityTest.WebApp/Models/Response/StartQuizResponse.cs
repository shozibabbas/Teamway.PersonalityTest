using System;
using System.Collections.Generic;

namespace Teamway.PersonalityTest.WebApp.Models.Response
{
    public class StartQuizResponse
    {
        public string SessionId { get; set; }
        public string CurrentQuestionId { get; set; }
        public IList<Question> Questions { get; set; }
        public StartQuizResponse()
        {
        }
    }
}
