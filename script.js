//Função Tradicional
function add(a, b) {
    return a + b;
}

console.log(add(5, 10)); // Output: 15

//Arrow Function
const add = (a, b) => a + b;

console.log(add(5, 10)); // Output: 15

//Função Tradicional com this
//Exemplo com Callback
javascript
Copiar código
function Timer() {
    this.seconds = 0;
    setInterval(function() {
        this.seconds++;
        console.log(this.seconds);
    }, 1000);
}

const timer = new Timer(); // 'this.seconds' não se comportará como esperado

//Solução com Arrow Function
function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        console.log(this.seconds);
    }, 1000);
}

const timer = new Timer(); // 'this.seconds' é incrementado corretamente

//Função Regular com 'this'
function Button(label) {
    this.label = label;
    this.element = document.createElement("button");
    this.element.innerText = this.label;

    this.element.addEventListener("click", function() {
        this.innerText = "Clicked!";
    });
}

const button = new Button("Click Me");
document.body.appendChild(button.element);

//Solução com Arrow Function
function Button(label) {
    this.label = label;
    this.element = document.createElement("button");
    this.element.innerText = this.label;

    this.element.addEventListener("click", () => {
        this.element.innerText = "Clicked!";
    });
}

const button = new Button("Click Me");
document.body.appendChild(button.element);
