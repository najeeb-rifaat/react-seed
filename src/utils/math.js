export default class func {

  add(x, y) { return x+y }

  sub(x, y) { return x-y }

  mult(x, y) { return x*y }

  inc(x, y=1) { return this.add(x, y) }

}

