export class Result {
  option: string;
  votes: number;

  constructor(option: string, votes: number) {
    this.option = option;
    this.votes = votes;
  }
}
