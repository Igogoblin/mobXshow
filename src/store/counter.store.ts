import { makeAutoObservable } from "mobx";

class CounterStore {
  private _count: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get count(): number {
    return this._count;
  }
  increment = (value: number) => {
    this._count += value;
  };
  decrement = (value: number) => {
    this._count -= value;
  };
}
export default new CounterStore();
