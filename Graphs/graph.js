/* graph data structure implemented in JavaScript */
class Graph {
    constructor() {
      this.nodes = [];
      this.edges = {};
    }
  
    addNode(node) {
      this.nodes.push(node);
      this.edges[node] = [];
    }
  
    addEdge(node1, node2) {
      this.edges[node1].push(node2);
      this.edges[node2].push(node1);
    }
  }
  
  const graph = new Graph();
  graph.addNode('i'); 
  graph.addNode('j'); 
  graph.addNode('k'); 
  graph.addEdge('i', 'j'); 
  graph.addEdge('i', 'k'); 
  graph.addEdge('j', 'k'); 
  