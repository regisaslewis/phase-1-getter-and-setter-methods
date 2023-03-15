class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return Math.PI * this.diameter;
  }
  get area() {
    return Math.PI * (this.radius * this.radius);
  }

  set diameter(num) {
    return this.radius = num / 2;
  }
  set circumference(num) {
    return this.radius = (num / 2) / Math.PI;
  }
  set area(num) {
    return this.radius = Math.sqrt(num / Math.PI);
  }
}