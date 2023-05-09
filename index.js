const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
};

function destructivelyPrependCat(name) {
    cats.unshift(name);
};

function destructivelyRemoveLastCat() {
    cats.pop();
};

function destructivelyRemoveFirstCat() {
    cats.shift();
};

function appendCat(name) {

    const newCats = [...cats, name];
    return newCats;
};

function prependCat(name) {
    const moreNewCats = [name, ...cats];
    return moreNewCats;
};

function removeLastCat() {
   return cats.slice(0, -1);
};

function removeFirstCat() {
    return cats.slice(1);
};
