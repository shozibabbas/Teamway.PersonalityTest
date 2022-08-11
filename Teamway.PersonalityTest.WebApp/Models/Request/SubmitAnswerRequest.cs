using System;
namespace Teamway.PersonalityTest.WebApp.Models.Request
{
    public class SubmitAnswerRequest
    {
        public string AnswerId { get; set; }
        public string QuestionId { get; set; }
        public SubmitAnswerRequest()
        {
        }
    }
}
