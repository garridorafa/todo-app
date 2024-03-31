import { Category } from './category';

export type Todo = {
  id: number;
  title: string;
  category: Category;
  isComplete: boolean;
  createAt: Date;
  updateAt: Date;
  dueAt?: Date;
};
