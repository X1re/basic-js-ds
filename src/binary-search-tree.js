const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    if (this.rootNode === null) {
      this.rootNode = new Node(data);
    } else {
      this._insert(this.rootNode, data);
    }
  }
  _insert(node, data) {
    if (data < node.data) {
      if (node.left === null) {
        node.left = new Node(data);
      } else {
        this._insert(node.left, data);
      }
    } else if (data > node.data) {
      if (node.right === null) {
        node.right = new Node(data);
      } else {
        this._insert(node.right, data);
      }
    }
  }
  has(data) {
    return this._search(this.rootNode, data) !== null;
  }

  _search(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this._search(node.left, data);
    } else {
      return this._search(node.right, data);
    }
  }

  find(data) {
    const foundNode = this._search(this.rootNode, data);

    if (foundNode === null) {
      return null;
    } else {
      return this._search(this.rootNode, data);
    }
  }

  remove(data) {
    this.rootNode = this._remove(this.rootNode, data);
  }

  _remove(node, data) {
    if (node === null) {
      return null;
    }
    if (data < node.data) {
      node.left = this._remove(node.left, data);
    } else if (data > node.data) {
      node.right = this._remove(node.right, data);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        const minRightNode = this._findMinNode(node.right);
        node.data = minRightNode.data;
        node.right = this._remove(node.right, minRightNode.data);
      }
    }
    return node;
  }

  _findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }

    let currentNode = this.rootNode;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }

    let currentNode = this.rootNode;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
