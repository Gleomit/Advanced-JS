traverse("birds");

function traverse(selector) {
    traverseNode(document, '');
    function traverseNode(node, spacing) {
        spacing = spacing || '  ';

        if(node.nodeType === document.ELEMENT_NODE && node.className.indexOf(selector) != -1) {

            var nodeID = node.id;

            var output = spacing + node.nodeName.toLowerCase() + ": ";
            if (nodeID != null && nodeID.indexOf(selector) != -1) {
                output += " id=\"" + nodeID + "\"";
            }
            output += " class=\"" + node.className + "\"";

            console.log(output);
        }

        for (var i = 0, len = node.childNodes.length; i < len; i += 1) {
            var child = node.childNodes[i];
            if (child.nodeType === document.ELEMENT_NODE) {
                traverseNode(child, spacing + '  ');
            }
        }
    }
}

