export interface ICardList {
  id: number;
  title: string;
  cards: ICard[];
}

export interface ICard {
  id: number;
  title: string;
  content: string;
}

// export interface IUser {
//   id: number;
//   nickname: string;
//   email: string;
//   Workspaces: IWorkspace[];
// }

// export interface IUserWithOnline extends IUser {
//   online: boolean;
// }

// export interface IChannel {
//   id: number;
//   name: string;
//   private: boolean;
//   WorkspaceId: number;
// }

// export interface IWorkspace {
//   id: number;
//   name: string;
//   url: string;
//   OwnerId: number;
// }
