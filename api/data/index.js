require('../config');
const { VotingTopic } = require('../db');

const exampleTopics = [
    {
      topicTitle: 'Javascript Frameworks',
      topicQuestion: 'What is your preferred Javascript framework?',
      username: 'arwl',
      results: [
        { option: 'AngularJS', votes: 6 },
        { option: 'Angular', votes: 9 },
        { option: 'React', votes: 5 },
        { option: 'Ember', votes: 5 },
        { option: 'JQuery', votes: 12 },
        { option: 'Vue', votes: 5 },
        { option: 'Backbone', votes: 3 },
        { option: 'Other', votes: 2 }
      ],
      voters: []
    },
    {
      topicTitle: 'Server Side Frameworks',
      topicQuestion: 'What is your preferred backend framework?',
      username: 'arwl',
      results: [
        { option: 'C#/.NET', votes: 9 },
        { option: 'Ruby on Rails', votes: 5 },
        { option: 'Node / Express', votes: 12 },
        { option: 'Python', votes: 3 },
        { option: 'PHP / Laravel', votes: 15 },
        { option: 'Java / JSP', votes: 0 },
        { option: 'Other', votes: 0 }
      ],
      voters: []
    },
    {
      topicTitle: 'TV Drama',
      topicQuestion: 'What is the best TV drama of the decade?',
      username: 'arwl',
      results: [
        { option: 'Mad Men', votes: 0 },
        { option: 'Breaking Bad', votes: 0 },
        { option: 'Better Call Saul', votes: 0 },
        { option: 'Line of Duty', votes: 0 },
        { option: 'Fargo', votes: 0 },
        { option: 'West World', votes: 0 },
        { option: 'The Killing', votes: 0 },
        { option: 'Other', votes: 0 }
      ],
      voters: []
    },
    {
      topicTitle: '2016 Films',
      topicQuestion: 'What was the best film of 2016?',
      username: 'arwl',
      results: [
        { option: 'Anomalisa', votes: 0 },
        { option: 'Arrival', votes: 0 },
        { option: 'The Revenant', votes: 0 },
        { option: 'Room', votes: 0 },
        { option: 'Spotlight', votes: 0 },
        { option: 'American Honey', votes: 0 },
        { option: 'I, Daniel Blake', votes: 0 },
        { option: 'Other', votes: 0 }
      ],
      voters: []
    }
  ];

  const seedDatabase = () => {

    exampleTopics.forEach(topic => {
        VotingTopic.create(topic)
          .then(topic => console.log(topic));
    })

  };

  seedDatabase();

