import axios from "axios";
import { action, makeAutoObservable, reaction, when } from "mobx";

const STORAGE_KEY = "todo-mobx-list";
interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
class todoStore {
  todos: ITodo[] = [];
  isLoading: boolean = false;

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Инициализирует экземпляр todoStore с автоматической наблюдаемостью и настраивает
   * реакции и условия. Реакция отслеживает изменения в массиве todos,
   * Логирование обновлений и первого элемента todo, когда массив не пустой. Вопрос «когда»
   * condition регистрирует сообщение, когда 'isLoading' становится истинным, указывая на то, что todos
   * загружаются с первым пунктом Todo.
   */

  /*******  9b6ca9ed-61fb-4970-b535-cb3cb046919e  *******/
  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
    reaction(
      () => this.todos, //выполняется при изменении массива todos
      (todos) => {
        //выполняется при изменении массива
        console.log("Todos updated", todos.length);
        if (todos.length > 0) {
          console.log("first todo", todos[0]);
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      }
    );
    when(
      // выполняется, когда 'isLoading' становится истинным
      () => this.isLoading,
      () => {
        console.log("Todos are loading, first todo:", this.todos[0]);
      }
    );
  }
  getCompletedTodos = () => this.todos.filter((todo) => todo.completed);
  addTodo(todo: string) {
    this.todos.push({
      id: this.todos.length + 1,
      todo,
      completed: false,
      userId: 1,
    });
  }
  toggleTodo(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  getAll = action(async () => {
    this.isLoading = true;
    try {
      const response = await axios.get("https://dummyjson.com/todos");
      this.todos = response.data.todos;
    } catch (error) {
      console.log("Ошибка при получении данных", error);
    } finally {
      this.isLoading = false;
    }
  });
  loadFromLocalStorage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        this.todos = JSON.parse(stored);
      } catch (error) {
        console.log("Ошибка при чтении из localStorage", error);
      }
    }
  }
}
export default new todoStore();
