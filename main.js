import LinkedList from "./list.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.append("tiger");
list.prepend("lion");


// All functions listed chronologically
console.log(list.getSize());
console.log(list.getHead());
console.log(list.tail());
console.log(list.at(5));
list.pop();
console.log(list.contains("snake"));
console.log(list.find("cat"));
console.log(list.toString());
list.insertAt("tiger", 5);
list.removeAt(5);
