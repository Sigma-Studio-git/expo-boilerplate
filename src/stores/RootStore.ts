import SubStore from "./SubStore";

export default class RootStore {
  subStore: SubStore;

  constructor() {
    console.log("rootStore constructor");
    this.subStore = new SubStore(this);
  }
}
