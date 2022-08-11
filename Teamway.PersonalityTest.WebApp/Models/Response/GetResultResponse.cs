using System;
namespace Teamway.PersonalityTest.WebApp.Models.Response
{
    public class GetResultResponse
    {
        public string SessionId { get; set; }
        public PersonalityType PersonalityType { get; set; }
        public GetResultResponse()
        {
        }
    }
}
