// Implement the depth-first search algorithm in JavaScript
function depthFirstSearch(graph, startNode) {
    const visited = new Set();
    const stack = [startNode];
  
    while (stack.length > 0) {
      const currentNode = stack.pop();
      if (!visited.has(currentNode)) {
        visited.add(currentNode);
        graph[currentNode].forEach(neighbor => {
          stack.push(neighbor);
        });
      }
    }
  
    return visited;
  }
  
  // Test the depth-first search function
  const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
  };
  console.log(depthFirstSearch(graph, 'A')); // Set { 'A', 'B', 'D', 'E', 'C', 'F' }
  