class Product {
  constructor(name, price) {
    (this.name = name), (this.price = price);
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price.toFixed(2)}`);
  }

  claTotal(tax) {
    return this.price + this.price * tax;
  }
}

const tax = 0.05;

const p = new Product("phone", 900);
const pp = new Product("house", 12.9);
pp.displayProduct();

const total = pp.claTotal(tax);
console.log(`Total with tax is : ${total}$`);
