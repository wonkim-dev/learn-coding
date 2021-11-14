/**
 * Given a doubly linked list, list nodes also hava a child property that can point to a
 * separate doubly linked list. These child lists can also have one or more
 * child doubly linked lists of their own, and so on. Return the lists as a single level
 * flattened doubly linked list.
 */

// Constraints
// Every list node can have multiple levels of children.
// Set the child property value to null after flattening.

function mergeLinkedList(head) {
  if (!head) {
    return null;
  }
  let currentNode = head;

  while (currentNode) {
    // If current node has a child linked list
    if (currentNode.child) {
      let tail = currentNode.child;
      while (tail.next) {
        tail = tail.next; // Get a tail node of the child linked list
      }

      // Connect the tail node of child linked list to next node in parent linked list
      tail.next = currentNode.next;
      if (tail.next) {
        // In case current node is not the tale of the parent linked list
        tail.next.prev = tail;
      }

      // Connect current node to head of child node
      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
    currentNode = currentNode.next;
  }
}

// Time & space complexity
// Reassign pointer variables only => time complexity: O(1)
// Current node pointer moves towards left only.
// Worst case: current node pointer touches some nodes twice if there is child linked lists.
// Time complexity: O(2n) => O(n)
