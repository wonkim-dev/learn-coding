/**
 * Given a linked list and numbers m and b,
 * return it back with only positions m to n in reverse.
 */

// Assume 1 <= m <= n <= lenth of linked list

// This function modifies the original linked list, instead of returning new linked list.
// There are only 5 static variables which do not scale. => Space complexity: O(1)
// Time complexity => 2 of while loops which are O(n) => O(2n) => O(n)
function partialReverse(head, m, n) {
  let currentPos = 1;
  let currentNode = head;
  let start = head; // Last node before the start of reversing linked-list section (m = 1)

  // Process before reaching m position
  // Moving forward until m position => time complexity: O(n)
  while (currentPos < m) {
    start = currentNode; // Capture start before starting reversing
    currentNode = currentNode.next;
    currentPos++;
  }

  let newList = null; // head of reserved linked list section
  let tail = currentNode; // Set node at m position as tail

  // Reverse node as long as current node is between m and n.
  // Moving forward form m to n position => time complexity: O(n)
  while (currentPos >= m && currentPos <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPos++;
  }

  start.next = newList;
  tail.next = currentNode;

  if (m > 1) {
    return head;
  } else {
    // Head of newList will be the head of the whole returned linked list if m = 1
    return newList;
  }
}
