using System;
using System.Collections.Generic;

namespace Teamway.PersonalityTest.WebApp.Models
{
    public class Question
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public IList<Answer> Answers { get; set; }
        public DateTime CreatedAt { get; set; }
        public Question()
        {
            CreatedAt = DateTime.Now;
        }
    }
}
