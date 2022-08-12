using System;
using System.Collections.Generic;
using Microsoft.Extensions.Caching.Memory;
using Teamway.PersonalityTest.WebApp.Models;

namespace Teamway.PersonalityTest.WebApp
{
    public static class DataSeeder
    {
        public static void Seed(IMemoryCache cache)
        {
            IList<Question> questions = new List<Question>()
            {
                new Question()
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
                    Answers = new List<Answer>()
                    {
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Interrupt and explain that you are really busy at the moment",
                            Score = 2.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Listen, but with only with half an ear",
                            Score = 5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Think it’s more important to give them some of your time; work can wait",
                            Score = 7.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Don’t dare to interrupt them",
                            Score = 10
                        },



                    }
                },
                new Question()
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
                    Answers = new List<Answer>()
                    {
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Look at your watch every two minutes",
                            Score = 2.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Bubble with inner anger, but keep quiet",
                            Score = 5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Explain to other equally impatient people in the room that the doctor is always running late",
                            Score = 7.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Complain in a loud voice, while tapping your foot impatiently",
                            Score = 10
                        }
                    }
                },
                new Question()
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
                    Answers = new List<Answer>()
                    {
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Continuously interrupt your colleague",
                            Score = 2.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Defend your own point of view, tooth and nail",
                            Score = 5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Think that they are obviously right",
                            Score = 7.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Don’t dare contradict them",
                            Score = 10
                        }
                    }
                },
                new Question()
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "You are taking part in a guided tour of a museum. You:",
                    Answers = new List<Answer>()
                    {
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Are a bit too far towards the back so don’t really hear what the guide is saying",
                            Score = 2.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Follow the group without question",
                            Score = 5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Make sure that everyone is able to hear properly",
                            Score = 7.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Are right up the front, adding your own comments in a loud voice",
                            Score = 10
                        }
                    }
                },
                new Question()
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "During dinner parties at your home, you have a hard time with people who:",
                    Answers = new List<Answer>()
                    {
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Ask you to tell a story in front of everyone else",
                            Score = 2.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Talk privately between themselves",
                            Score = 5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Hang around you all evening",
                            Score = 7.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Always drag the conversation back to themselves",
                            Score = 10
                        }
                    }
                },
                new Question()
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "You crack a joke at work, but nobody seems to have noticed. You:",
                    Answers = new List<Answer>()
                    {
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Think it’s for the best — it was a lame joke anyway",
                            Score = 2.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Wait to share it with your friends after work",
                            Score = 5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Try again a bit later with one of your colleagues",
                            Score = 7.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Keep telling it until they pay attention",
                            Score = 10
                        }
                    }
                },
                new Question()
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "This morning, your agenda seems to be free. You:",
                    Answers = new List<Answer>()
                    {
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Know that somebody will find a reason to come and bother you",
                            Score = 2.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Have a sigh of relief and look forward to a day without stress",
                            Score = 5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Question your colleagues about a project that’s been worrying you",
                            Score = 7.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Pick up the phone and start filling up your agenda with meetings",
                            Score = 10
                        }
                    }
                },
                new Question()
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "During dinner, the discussion moves to a subject about which you know nothing at all. You:",
                    Answers = new List<Answer>()
                    {
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Don’t dare show that you don’t know anything about the subject",
                            Score = 2.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Barely follow the discussion",
                            Score = 5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Ask lots of questions to learn more about it",
                            Score = 7.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Change the subject of discussion",
                            Score = 10
                        }
                    }
                },
                new Question()
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "You’re out with a group of friends and there’s a person who’s quite shy and doesn’t talk much. You:",
                    Answers = new List<Answer>()
                    {
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Hardly notice them at all",
                            Score = 2.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Notice that they’re alone, but don’t go over to talk with them",
                            Score = 5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Shoot some friendly smiles in their direction",
                            Score = 7.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Go and have a chat with them",
                            Score = 10
                        }
                    }
                },
                new Question()
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "At work, somebody asks for your help for the hundredth time. You:",
                    Answers = new List<Answer>()
                    {
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Give them a hand, as usual",
                            Score = 2.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Accept — you’re known for being helpful",
                            Score = 5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Ask them, please, to find somebody else for a change",
                            Score = 7.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Loudly make it known that you’re annoyed",
                            Score = 10
                        }
                    }
                },
                new Question()
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "You’ve been see a movie with your family and the reviews are mixed. You:",
                    Answers = new List<Answer>()
                    {
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Don’t share your point of view with anyone",
                            Score = 2.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Didn’t like the film, but keep your views to yourself when asked",
                            Score = 5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "State your point of view with enthusiasm",
                            Score = 7.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Try to bring the others round to your point of view",
                            Score = 10
                        }
                    }
                },
                new Question()
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "A friend arrives late for your meeting. You:",
                    Answers = new List<Answer>()
                    {
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Say, ‘It’s not a problem,’ even if that’s not what you really think",
                            Score = 2.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Give them a filthy look and sulk for the rest of the evening",
                            Score = 5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Tell them, ‘You’re too much! Have you seen the time",
                            Score = 7.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Make a scene in front of everyone",
                            Score = 10
                        }
                    }
                },
                new Question()
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "You can’t find your car keys. You:",
                    Answers = new List<Answer>()
                    {
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Don’t want anyone to find out, so you take the bus instead",
                            Score = 2.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Panic and search madly without asking anyone for help",
                            Score = 5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Grumble without telling your family why you’re in a bad mood",
                            Score = 7.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Accuse those around you for misplacing them",
                            Score = 10
                        }
                    }
                },
                new Question()
                {
                    Id = Guid.NewGuid().ToString(),
                    Title = "It’s time for your annual appraisal with your boss. You:",
                    Answers = new List<Answer>()
                    {
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Go with great hesitation as these sessions are torture for you",
                            Score = 2.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Look forward to hearing what your boss thinks about you and expects from you",
                            Score = 5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Rehearse and assume the arguments and ideas that you’ve prepared for the meeting",
                            Score = 7.5
                        },
                        new Answer()
                        {
                            Id = Guid.NewGuid().ToString(),
                            Title = "Go along unprepared as you are confident and like improvising",
                            Score = 10
                        }
                    }
                }
            };
            cache.Set("questions", questions, DateTimeOffset.MaxValue);
        }
    }
}
