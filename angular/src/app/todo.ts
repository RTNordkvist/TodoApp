export interface Todo {
  id: number;
  text: string;
  createdDate: Date;
  completedDate: Date | null;
}
