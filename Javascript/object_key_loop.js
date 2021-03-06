const Symbol = Symbol.for("say1");

class Person {
  static flag = "人";
  static getFlag() {
    return Person.flag;
  }

  static [Symbol.for("symbolPro")]() {
    return "symbolPro";
  }

  constructor(name) {
    this.name = name;
    this[Symbol] = "haha";
  }
  getName() {
    return this.name;
  }
  getAge = () => {
    return 15;
  };
}

function getOwnPropertyStatics(_obj) {
  const KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true,
  };

  let result = [];

  let keys = Object.getOwnPropertyNames(_obj);
  keys = keys.concat(Object.getOwnPropertySymbols(_obj));
  // const keys = Reflect.ownKeys(_obj)
  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];
    if (!KNOWN_STATICS[key]) {
      result.push(key);
    }
  }
  return result;
}

const staticProps = getOwnPropertyStatics(Person);
console.log("静态属性:", staticProps);

// 获取所有不可枚举属性
const symbolIsAnimal = Symbol.for("pro_symbol_attr_isAnimal");
const symbolSay = Symbol.for("pro_symbol_method_say");
const symbolSalary = Symbol.for("ins_symbol_attr_salary");

function Person(age, name) {
  this.ins_in_attr_age = age;
  this.ins_in_attr_name = name;

  this.ins_in_method_walk = function () {
    console.log("ins_method_walk");
  };
}

// 原型方法
Person.prototype.pro_method_say = function (words) {
  console.log("pro_method_say:", words);
};
Person.prototype[symbolSay] = function (words) {
  console.log("pro_symbol_method_say", words);
};

// 原型属性
Person.prototype[symbolIsAnimal] = true;
Person.prototype.pro_attr_isAnimal = true;

const person = new Person(100, "程序员");

//Symbol 属性
person[symbolSalary] = 6000;
person["ins_no_enumerable_attr_sex"] = "男";

// sex 不可枚举
Object.defineProperty(person, "ins_no_enumerable_attr_sex", {
  enumerable: false,
});

Object.defineProperty(person, symbolSalary, {
  enumerable: false,
  value: 999,
});

//
function getNoEnumerable(_obj) {
  //获取原型对象
  // 两种方式
  const keys = Reflect.ownKeys(_obj);
  // const result = keys.filter(key=> {
  //     return !Object.getOwnPropertyDescriptor(_obj, key).enumerable
  // })
  // return result;

  const result = keys.filter((key) => {
    // propertyIsEnumerable 判断属性是否可枚举
    return !Object.prototype.propertyIsEnumerable.call(_obj, key);
  });
  return result;
}

console.log(getNoEnumerable(person));
