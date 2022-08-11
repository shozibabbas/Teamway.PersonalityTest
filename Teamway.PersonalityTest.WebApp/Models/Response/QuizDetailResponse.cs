using System;
using System.Collections.Generic;

namespace Teamway.PersonalityTest.WebApp.Models.Response
{
    public class QuizDetailResponse : StartQuizResponse
    {
        public IDictionary<string, string> UserAnswers { get; set; } = new Dictionary<string, string>();
        public bool IsCompleted { get; set; } = false;
        public QuizDetailResponse()
        {
        }
    }
}
