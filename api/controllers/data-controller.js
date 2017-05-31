const { VotingTopic } = require('../db');

exampleTopics = [
    {
      topicTitle: 'Javascript Frameworks',
      topicQuestion: 'What is your preferred Javascript framework?',
      author: 'Alistair Willis',
      id: '1',
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
      id: '2',
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

module.exports = {
  greeting(req, res) {
    console.log('api/data');
    res.set('Access-Control-Allow-Origin', '*');
    res.json({'hello': 'world'});
  }, 

  seedDatabase(req, res) {
    
    let example = exampleTopic[0]; 
    const votingTopic = new VotingTopic(example); 
    votingTopic.save(); 
    res.set('Access-Control-Allow-Origin', '*');
    res.status(201).send(example); 
  }
  


};


