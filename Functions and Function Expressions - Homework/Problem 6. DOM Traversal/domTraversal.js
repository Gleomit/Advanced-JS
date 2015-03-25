function traverse(selector) {
    traverseNode(document, '', false);

    function traverseNode(node, spacing, isChildOfFoundedElement) {
        spacing = spacing || '  ';

        if(isChildOfFoundedElement == false){
            if(node.className && node.className.indexOf(selector) != -1){
                isChildOfFoundedElement = true;
            }
        } else{
            if(node.id){
                console.log(spacing + node.nodeName.toLowerCase() + ": id=\"" + node.id + "\"  class=\"" + node.className + "\"");
            } else{
                console.log(spacing + node.nodeName.toLowerCase() + ": class=\"" + node.className + "\"");
            }
        }

        for (var i = 0, len = node.childNodes.length; i < len; i += 1) {
            var child = node.childNodes[i];

            if (child.nodeType === document.ELEMENT_NODE) {
                traverseNode(child, spacing + '  ', isChildOfFoundedElement);
            }
        }
    }
}

traverse("birds");