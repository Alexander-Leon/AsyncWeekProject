export class Stack {
  // Stack constructor function
  constructor () {
    // your code here
    this.top = null
  }

  // Stack.prototype.add
  add (item) {
    this.top = {data: item, previous: this.top}
    return this;
  }

  // Stack.prototype.remove
  remove () {
    if (this.top){
    let rtrnitem = this.top.data
    this.top = this.top.previous
    return rtrnitem
    } else {
      return undefined
    }
  }
}

// -----------------------------------------
// Queues
export class Queue {
  // Queue constructor function
  constructor () {
    this.queue = null
  }

  // Queue.prototype.add
  add (item) {
   if (!this.queue){
    this.queue = {data: item, next: null}
   } else {
     let nxt = this.queue
     while(nxt.next){
       nxt = nxt.next
     }
     nxt.next = {data: item, next: null}
   }
    return this;
  }

  // Queue.prototype.remove
  remove () {
    if (this.queue){
    let rtrn = this.queue.data
    this.queue = this.queue.next
    return rtrn
    } else {
      return null
    }
  }
}

// -----------------------------------------
// Linked lists

export class LinkedList {
  // LinkedList constructor function
  constructor () {
    this.head = this.tail = null;
  }

  // LinkedList.prototype.addToTail
  addToTail (item) {
    if (!this.tail){
    this.tail = new ListNode(item)
    this.head = this.tail
    } else if (!this.head.next){
      this.tail = new ListNode(item, this.head)
      this.head.next = this.tail
    } else {
      let temp = new ListNode(item, this.tail)
      this.tail.next = temp
      this.tail = temp
    }
   
    return this;
  }

  // LinkedList.prototype.removeFromTail
  removeFromTail () {
    let rtrnVal = null
    if (this.tail){
      if(this.head !== this.tail){
      rtrnVal = this.tail.item
    this.tail = this.tail.prev
    this.tail.next = null
    return rtrnVal
      } else {
        rtrnVal = this.head.item
        this.tail = null
        this.head = null
        return rtrnVal
      }
    }
    return rtrnVal
  }

  // LinkedList.prototype.forEach
  forEach (callbackFunc) {
    // your code here
    let temp = this.head
    if (temp){
    while (temp.next){
      callbackFunc(temp.item)
      temp = temp.next
    }
    callbackFunc(temp.item)
  }
}
}

class ListNode {
  // ListNode constructor function
  constructor (item, prev, next) {
    this.item = item;
    this.next = next || null;
    this.prev = prev || null;
  }
}

//-----------------------------------------
// Association lists

class Alist {
  // Alist constructor function
  constructor () {
    this.head = null
  }

  // Alist.prototype.set
  set (key, value) {
    if (this.head){
      this.head = new AlistNode(key,value,this.head)
    } else {
      this.head = new AlistNode(key,value, null)
    }
    return this;
  }

  // Alist.prototype.get
  get (key) {
   let temp = this.head
   while (temp.next){
     if (temp.key === key){
       return temp.value
     }
     temp = temp.next
   }
   return temp.key === key ? temp.value : undefined
  }
}

class AlistNode {
  // AlistNode constructor function
  constructor (key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

//-----------------------------------------
// Hash Tables

function hash (key) {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  return hashedKey % 20;
}

class HashTable {
  // HashTable constructor function
  constructor () {
    this.buckets = Array(20);
    for (let i =0; i < this.buckets.length; i++){
      this.buckets[i] = new Alist()
    }
  }

  // HashTable.prototype.set
  set (key, value) {
    if (this.buckets[hash(key)].head){
      this.buckets[hash(key)].head = new AlistNode(key,value, this.buckets[hash(key)].head)
    } else {
      this.buckets[hash(key)].head = new AlistNode(key, value, null)
    }
    return this;
  }

  // HashTable.prototype.get
  get (key) {
    let temp = this.buckets[hash(key)].head
    do {
      if (temp.key === key){
        return temp.value
      } else {
        temp = temp.next
      }
    } while (temp.next)
    return null
  }
}

//-----------------------------------------
// Binary search trees

class BinarySearchTree {
  // BinarySearchTree constructor function
  constructor (val) {
    this.value = val
    this.left = null
    this.right = null
  }

  // BinarySearchTree.prototype.insert
  insert (val) {
    let temp = this
    while(temp.value !== val){
      if (temp.value > val){
        if (temp.left){
          temp = temp.left
        } else {
          temp.left = new BinarySearchTree(val)
        }
      } else {
        if (temp.right){
          temp = temp.right
        } else {
          temp.right = new BinarySearchTree(val)
        }
      }
    }
    return this;
  }

  // BinarySearchTree.prototype.min
  min () {
    let temp = this
    while(temp.left){
      temp = temp.left
    }
    return temp.value
  }

  // BinarySearchTree.prototype.max
  max () {
    let temp = this
    while(temp.right){
      temp = temp.right
    }
    return temp.value
  }

  // BinarySearchTree.prototype.contains
  contains (val) {
    let temp = this
    while (temp.value !== val){
      // if left and right node are both less than val it means val isn't there and inversly if theyre both larger then val isnt there
      if ((temp.left.value < val && temp.right.value < val) || ((temp.right.value > val && temp.left.value > val))){
        return false
      }
      if (temp.value > val){
        temp = temp.left
      } else {
        temp = temp.right
      }
    }
    return true
  }

  // BinarySearchTree.prototype.traverse
  traverse (callbackFunc) {
    const treeStack = new Stack();
  
    treeStack.add(this)
    
    while(treeStack.top){
      console.log(treeStack.top.data)
    
      if(treeStack.top.data.left){
        treeStack.add(treeStack.top.data.left)
      } else if (treeStack.top.data.right){
        let temp = treeStack.remove()
        treeStack.add(temp.right)
        callbackFunc(temp.value)
      } else {
        callbackFunc(treeStack.remove().value)
        if (treeStack.top){
        treeStack.top.data.left = null
        }
      }
    }
      return null
    }
  }

