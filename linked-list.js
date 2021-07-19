// HACKERRANK

// INSERTION OF NODES AT THE BEGINNING - O(1)T O(n)S

function insertNodeAtHead(head, data) {
  var newNode = new SinglyLinkedListNode(data);
  if (head === null) {
    head = newNode;
    console.log(head);
    return head;
  } else {
    let temp = head;
    head = newNode;
    head.next = temp;
    return head;
  }
}

// INSERTION OF NODES AT THE END - O(n)TS

function insertNodeAtTail(head, data) {
    var newNode = new SinglyLinkedListNode(data)
    if(head===null){
        head=newNode
        return head
    }else{
        var temp = head
        while(temp.next!==null){
            temp=temp.next
        }
        temp.next=newNode
        return head
    }
 }

//  INSERTION OF NODES AT ANY POSITION SPECIFIED - O(n)TS

function insertNodeAtPosition(llist, data, position) {
    var newNode = new SinglyLinkedListNode(data)
    if(!llist && position===0){
        llist=newNode;
        return head
    }else{
        let currentNode = llist
        let increment = 1
        while(currentNode){
            if(increment===position){
                newNode.next = currentNode.next;
                currentNode.next=newNode;
                return llist
            }
            currentNode = currentNode.next
            increment++
        }
    }
}
