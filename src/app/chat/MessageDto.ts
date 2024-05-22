export class MessageDto {
  isUser: boolean;
  content: string;
  cards: Array<any>;

  constructor(isUser: boolean, content: string=null, card: Array<any> = null) {
    this.isUser = isUser;
    this.content = content;
    this.cards = card;
  }

}
