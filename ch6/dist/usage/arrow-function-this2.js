let typedPerson = {
    name: "Happy",
    hello: function (name2) {
        let message = `Hello, ${this.name + name2}`;
        return message;
    }
};
console.log(typedPerson.hello("World"));
