let events = new Set([
    'onclick',
    'onblur',
    'onchange'
]);


let props = new Set([
    'focus'
]);

function node(tagName, attrs, children) {
    if(typeof attrs !== 'object' || attrs === null) {
        throw "attrs has to be an object";
    }

    if(!Array.isArray(children)) {
        throw "children has to be an array";
    }

    let elt = document.createElement(tagName);

    for(let key in attrs) {
        if(events.has(key.toLowerCase())) {
            elt.addEventListener(key.substring(2).toLowerCase(), attrs[key], false);
        } else {
            elt.setAttribute(key, attrs[key]);
        }
    }


    for(let child of children) {
        if(typeof child === 'string') {
            // The createTextNode seems to sanitize the strings
            elt.appendChild(document.createTextNode(child));
        } else {
            elt.appendChild(child);
        }
    }

    return elt;
}


function p(attrs, children) {
    return node("p", attrs, children);
}

function div(attrs, children) {
    return node("div", attrs, children);
}

function a(attrs, children) {
    return node("a", attrs, children);
}

function span(attrs, children) {
    return node("span", attrs, children);
}

function nav(attrs, children) {
    return node("nav", attrs, children);
}

function section(attrs, children) {
    return node("section", attrs, children);
}

function h1(attrs, children) {
    return node("h1", attrs, children);
}

function h2(attrs, children) {
    return node("h2", attrs, children);
}

function h3(attrs, children) {
    return node("h3", attrs, children);
}

function h4(attrs, children) {
    return node("h4", attrs, children);
}

function h5(attrs, children) {
    return node("h5", attrs, children);
}

function h6(attrs, children) {
    return node("h6", attrs, children);
}

function li(attrs, children) {
    return node("li", attrs, children);
}

function ul(attrs, children) {
    return node("ul", attrs, children);
}

function input(attrs, children) {
    return node("input", attrs, children);
}

function form(attrs, children) {
    return node("form", attrs, children);
}

function table(attrs, children) {
    return node("table", attrs, children);
}

function tr(attrs, children) {
    return node("tr", attrs, children);
}

function td(attrs, children) {
    return node("td", attrs, children);
}

function button(attrs, children) {
    return node("button", attrs, children);
}
