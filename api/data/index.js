const { VotingTopic } = require('../db');

const exampleTopics = [
    {
      topicTitle: 'Javascript Frameworks',
      topicQuestion: 'What is your preferred Javascript framework?',
      author: 'Alistair Willis',
      results: [
        { option: 'Angular', votes: 9 },
        { option: 'React', votes: 5 },
        { option: 'JQuery', votes: 12 },
        { option: 'Vue', votes: 15 },
      ],
    },
    {
      topicTitle: 'Server Side Frameworks',
      topicQuestion: 'What is your preferred backend framework?',
      author: 'Alistair Willis',
      results: [
        { option: 'C#/.NET', votes: 9 },
        { option: 'Ruby on Rails', votes: 5 },
        { option: 'Node', votes: 12 },
        { option: 'Python', votes: 3 },
        { option: 'PHP', votes: 15 },
        { option: 'Java / JSP', votes: 0 }
      ]
    }
  ];

  const seedDatabase = () => {

    let example = exampleTopics[1];
    console.log(example)
    const votingTopic = new VotingTopic(example);
    votingTopic.save();

  };

  seedDatabase();

