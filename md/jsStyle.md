## javascript 编码风格






# 一：前言

我们为什么需要编码规范

一个主要的原因是：每个人写代码的方式都是不同的。我可能喜欢这么写，而你喜欢用另一种方法写。如果我们只处理自己的代码，这样并没有什么问题。但如果多个程序员同时在一个代码库上面工作呢？如果没有规范，事情很快会变得一团糟。代码规范可以让新人迅速的熟悉相关的代码，并且也能写出让其他程序员简单易懂的代码。

javascript编码风格，主要考虑易读性、性能、容错机制。






# 二：编码风格

对于编码风格通常可以通过编译器（如：vscode初始化配置好，快捷键alt + shift + f等）进行一键式格式化，但是我们并不要完全依赖编译器格式化功能，格式习惯应该融入自己的编码习惯中。

1.使用 4 个空格做为一个缩进层级

2.用作代码块起始的左花括号 { 前必须有一个空格

**bad**
```
function createShape(type){
  const shapeType = type || "cube";
  // ...
}

```
**good**
```
function createShape(type = "cube") {
  // ...
}
```

3.每个独立语句结束后必须换行，每行不得超过 120 个字符（超长的不可分割的代码允许例外，如复杂的正则）

**bad**
```
if (user.isAuthenticated() && user.isInRole('admin') && user.hasAuthority('add-admin')) {
    // ......
}

```
**good**
```
if (user.isAuthenticated()
    && user.isInRole('admin')
    && user.hasAuthority('add-admin')
) {
    // ......
}
```

4.在 if / else / for / do / while 语句中，即使只有一行，也不得省略块 {...}。

**bad**
```
if (condition) callFunc();
if (condition)
    callFunc();

```
**good**
```
if (condition) {
    callFunc();
}
```







# 三：语言特性

1.变量名不应以短巧为荣，当然太长也不好，变量名应易于理解。

**bad**
```
day1, day2, param1, maximumNumberOfTeamMembers

```
**good**
```
priceInput, userId, houseInfos
```

2.不要在变量名中增加没必要额外的单词。

**bad**
```
let nameValue;
let theProduct;

```
**good**
```
let name;
let product;
```

3.强类型检查

**bad**
```
0 == false // true
2 == "2"   // true

```
**good**
```
!!0 == false         // true
2 === "2"            // false
2 === Number("2")    // true
```

解释：强类型检查可以避免等于判断中隐式的类型转换


4.函数应该使用默认参数，而不是条件语句

**bad**
```
function createShape(type) {
  const shapeType = type || "cube";
  // ...
}

```
**good**
```
function createShape(type = "cube") {
  // ...
}
```

解释：除了简洁，ES6 的写法还有两个好处：首先，阅读代码的人，可以立刻意识到哪些参数是可以省略的，不用查看函数体或文档；其次，有利于将来的代码优化，即使未来的版本在对外接口中，彻底拿掉这个参数，也不会导致以前的代码无法运行。

5.尽可能使用简洁的表达式

**bad**
```
if (name === '') {
    // ......
}
if (name !== '') {
    // ......
}
if (collection.length > 0) {
    // ......
}
if (notTrue === false) {
    // ......
}

```
**good**
```
if (!name) {
    // ......
}
if (name) {
    // ......
}
if (collection.length) {
    // ......
}
if (!notTrue) {
    // ......
}

```

解释：除了简洁，ES6 的写法还有两个好处：首先，阅读代码的人，可以立刻意识到哪些参数是可以省略的，不用查看函数体或文档；其次，有利于将来的代码优化，即使未来的版本在对外接口中，彻底拿掉这个参数，也不会导致以前的代码无法运行。


6.如果通过 if 和 else 使用多行代码块，把 else 放在 if 代码块关闭括号的同一行。

**bad**
```
if (test) {
  // ...
}
else {
  // ...
}

```
**good**
```
if (test) {
  // ...
} else {
  // ...
}
```

7.类型检测优先使用 typeof。对象类型检测使用 instanceof。null 或 undefined 的检测使用 == null。

**good**

```
// string
typeof variable === 'string'

// number
typeof variable === 'number'

// boolean
typeof variable === 'boolean'

// Function
typeof variable === 'function'

// Object
typeof variable === 'object'

// RegExp
variable instanceof RegExp

// Array
variable instanceof Array

// null
variable === null

// null or undefined
variable == null

// undefined
typeof variable === 'undefined'

```

8.【建议】 转换成 string 时，使用 + ''。

**bad**
```
new String(num);
num.toString();
String(num);

```
**good**
```
num + '';
```

9.【建议】 转换成 number 时，通常使用 +。

**bad**
```
Number(str);

```
**good**
```
+str;
```

10.【建议】 转换成 boolean 时，使用 !!。

**good**
```
var num = 3.14;
!!num;
```

11.对象创建时，如果一个对象的所有 属性 均可以不添加引号，则所有 属性 不得添加引号。如果任何一个 属性 需要添加引号，则所有 属性 必须添加 '。

**bad**
```
var info = {
    name: 'someone',
    age: 28,
    'more-info': '...'
};

```
**good**
```
var info = {
    name: 'someone',
    age: 28
};
var info = {
    'name': 'someone',
    'age': 28,
    'more-info': '...'
};
```

12.不允许修改和扩展任何原生对象和宿主对象的原型。

**bad**
```
// 以下行为绝对禁止
String.prototype.trim = function () {
};
```

13.【建议】 一个函数的长度控制在 50 行以内。

解释：

将过多的逻辑单元混在一个大函数中，易导致难以维护。一个清晰易懂的函数应该完成单一的逻辑单元。复杂的操作应进一步抽取，通过函数的调用来体现流程。

**bad**
```
function syncViewStateOnUserAction() {
    if (x.checked) {
        y.checked = true;
        z.value = '';
    }
    else {
        y.checked = false;
    }

    if (!a.value) {
        warning.innerText = 'Please enter it';
        submitButton.disabled = true;
    }
    else {
        warning.innerText = '';
        submitButton.disabled = false;
    }
}

```
**good**
```
function syncViewStateOnUserAction() {
    syncXStateToView();
    checkAAvailability();
}

function syncXStateToView() {
    if (x.checked) {
        y.checked = true;
        z.value = '';
    }
    else {
        y.checked = false;
    }
}

function checkAAvailability() {
    if (!a.value) {
        displayWarningForAMissing();
    }
    else {
        clearWarnignForA();
    }
}
```

14.【建议】 一个函数的参数不易过多。

解释：

除去不定长参数以外，函数具备不同逻辑意义的参数建议控制在 6 个以内，过多参数会导致维护难度增大。

15.避免直接修改外部传入的数据源（如：接口传入的数据）。




# 四：异常处理和错误处理