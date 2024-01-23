class Button {
  constructor(width, heigth, color, type) {
    (this.width = width),
    (this.heigth = heigth),
    (this.color = color),
    (this.type = type);
  }

  onClick() {
    console.log(this.width, this.heigth, this.color, this.type);
  }
}

let alarm = new Button(10, 10, "green", "button");

console.log(alarm); //посмотрим на объект alarm

alarm.onClick(); 

function testButton(buttonName) { 
    if (
        (buttonName.width == 10 &&
        buttonName.heigth == 10 &&
        buttonName.color == "green" &&
        buttonName.type == "button")
    ) {
        console.log('Is OK');
    } else {
        console.log('Is BAD');
    }
}

testButton(alarm);

let cancel = new Button(10, 10, "red", "button");

testButton(cancel);

