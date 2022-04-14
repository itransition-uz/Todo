export interface ITodo {
  id: string;
  title: string;
  created_at: Date;
  completed_at?: Date;
  deleted_at?: Date;
}
