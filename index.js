

function deepestChild() {

    var lis = document.getElementById('grand-node');

    var deepestNode = lis.children[0];

    while (deepestNode) {
        lis = deepestNode
        deepestNode = lis.children[0]
        console.log(deepestNode.constructor)
    }
    return lis
}

