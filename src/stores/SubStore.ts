import { action, observable } from "mobx";
import RootStore from "./RootStore";

interface ISubStore {
  name: string;
}

export default class SubStore implements ISubStore {
  private rootStore: RootStore;
  @observable name = "";

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action getName = (): string => {
    if (name) return this.name;

    this.name = "Bob";
    return this.name;
  };
}
