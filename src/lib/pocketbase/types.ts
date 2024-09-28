export type User = {
  id: string;
  username: string;
};

export type Message = {
  user: User;
  text: string;
  sentBy: string;
  id: string;
};
