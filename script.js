class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.topping = [];
  }
  // TODO: Size
  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_BIG = { price: 100, calories: 40 };

  // TODO: Stuffing
  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_POTATO = { price: 15, calories: 10 };

  // TODO: Topping
  static TOPPING_MAYO = { price: 20, calories: 5 };
  static TOPPING_SAUCE = { price: 15, calories: 0 };

  addTopping(topping) {
    this.topping.push(topping);
  }

  calculateCalories() {
    const baseCalories = this.size.calories + this.stuffing.calories;
    const toppingCalories = this.topping.reduce(
      (total, topping) => total + topping.calories,
      0
    );

    return baseCalories + toppingCalories;
  }

  calculatePrice() {
    const basePrice = this.size.price + this.stuffing.price;
    const toppingPrice = this.topping.reduce(
      (total, toping) => total + toping.price,
      0
    );

    return basePrice + toppingPrice;
  }
}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);
console.log(hamburger);
// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculateCalories());

//  скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());
// А скільки тепер калорій?
console.log("Calories with sauce: " + hamburger.calculateCalories());
