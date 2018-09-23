class node {

    constructor (dd){
        this.data = dd
        this.next = null
        this.prev = null
    }
}

class doublyList {

    constructor (){
        this.head = null
        this.length = 0
    }

    addAtBeginning (node){
        if (this.head == null) {
            this.head = node
            node.prev = null
            this.length = 1
            return
        }else{
            node.next = this.head
            node.next.prev = node
            this.head = node
            this.length++
        } 
    }

    addAfter(node,after){
        var current = this.head
        if (current == null) {
            this.addAtBeginning(node)
        }else{
            while (current.data != after.data) {
                if (current.next == null) {
                    current.next = node
                    current.next.prev = current
                    this.length++
                    return
                }
                current = current.next
            }
            node.prev = current.next.prev
            current.next.prev = node
            node.next = current.next
            current.next = node
            this.length++
        }
    }

    addAtEnd(node){
        var current = this.head
        if (current == null) {
            this.addAtBeginning(node)
        }else{
            while (current.next != null) {
                current = current.next
            }
            current.next = node
            current.next.prev = current
            this.length++
        }
    }

    addBefore(node,before){
        var current = this.head
        if (current == null) {
            this.addAtBeginning(node)
        }else{
            while (current.data != before.data) {
                if (current.next == null) {
                    current.next = node
                    current.next.prev = current
                    this.length++
                    return
                }
                current = current.next
            }
            node.next = current
            node.prev = current.prev
            current.prev.next = node
            node.next = current
            this.length++
        }
    }
}
const util = require('util');

var linklist = new doublyList()

linklist.addAtBeginning(new node(56))
linklist.addAtBeginning(new node(50))
linklist.addAtBeginning(new node(30))
linklist.addAtEnd(new node(99))
linklist.addAfter(new node(44),new node(50))
linklist.addBefore(new node(77),new node(44))
linklist.addAtEnd(new node(200))


console.log(util.inspect(linklist,{ showHidden: true, depth: null, colors: true }))