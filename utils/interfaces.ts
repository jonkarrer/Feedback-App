export interface IFeedback {
  category: string;
  comments: Array<IComment>;
  description: string;
  id: number;
  status: string;
  title: string;
  upvotes: number;
}

export interface IComment {
  content: string;
  id: number;
  replies?: Array<IReply>;
  user: IUser;
}

export interface IUser {
  image: string;
  name: string;
  username: string;
}

export interface IReply {
  content: string;
  replyingTo: string;
  user: IUser;
}
