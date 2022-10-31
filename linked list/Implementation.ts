import LinkedList from "./LinkedList";

let ll = new LinkedList();

ll.addFront("Beshinch");
ll.addFront("Oltin");
ll.addFront(1);
ll.addFront(20);

console.log(ll.size());
console.log(ll.get(0));
console.log(ll.printAll());
