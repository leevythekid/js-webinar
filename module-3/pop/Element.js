/**
 * Create Element class, which represents an element of
 * the application, and
 * 
 * 1. It has a protractor locator (.locator),
 *    e.g. by.css("h1.title")
 * 2. It has a name (.name), e.g. "Document Title"
 * 3. It can have a parent Element, 
 *    which is the context of the element (.parent)
 * 4. It can have children Elements (.children)
 * 5. It has a method to retrieve the protractor element
 *    by the locator (.get([name])) in it's context
 *     - if it gets a name as parameter, it tries to find
 *       in it's children (recursively) the Element with
 *       the given name or throws an Erorr if it cannot
 *       find the element
 */
//const { element } = require("../test/mock/ElementFinder");

class Element {
    constructor(name, locator) {
        this.name = name;
        this.locator = locator;

        this.parent = null; //if you expect the value to be an object, you should set it to null first
        this.children = {}; //in case of multiple object use {}
    }

    setParent(parent) {
        this.parent = parent;
    }

    addChildren(child) {
        if (this.children.hasOwnProperty(child.name)) {
            throw new Error(child.name + " is already addeld!");
        }
        this.children[child.name] = child;
    }

    get(name) {
        if (typeof name === "undefined") {
            return element(this.locator);
        } /* else {
            for (let key in this.children) {
                if (key === name) {
                    return new ElementFinder(this.children[key].locator);
                    //} else if (typeof this.children[key] == "object" && this.children[key] !== null && !this.children[key].children.isEmpty()) {
                }
                if (!(Object.keys(this.children[key].children).length === 0 && this.children[key].children.constructor === Object)) {
                    const child = this.children[key];
                    child.get(child.name);
                }
            }
        } */


        //while (!(Object.keys(this.children).length === 0 && this.children.constructor === Object)) {



        if (this.children.hasOwnProperty(name)) {
            return this.children[name].get();
        } else {
            for (let key in this.children) {
                if (this.children[key].children.hasOwnProperty(name)) {
                    return this.children[key].children[name].get();
                } else {
                    this.children[key].get(name);
                }
            }
        }
        //}



        if (!this.children.hasOwnProperty(name)) {
            throw new Error(`${name} does not exist!`);
        }

        //return this.children[name].get();
    }
}

module.exports = Element;