import { makeAutoObservable } from 'mobx';

class AttentionBorder {
  isBorder = false;

  constructor() {
    makeAutoObservable(this);
  }

  AttentionBorder() {
    setTimeout(() => {
      this.isBorder = !this.isBorder;
    }, 200);

    setTimeout(() => {
      this.isBorder = !this.isBorder;
    }, 1500);
  }
}

export default new AttentionBorder();
