class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  load(pos) {
    if (pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    const sum = this.items.reduce((a, b) => a + b, 0);

    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return sum / this.items.length;
    }
  }
}

module.exports = SortedList;
