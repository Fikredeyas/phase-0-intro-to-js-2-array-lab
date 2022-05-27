// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}
function appendCat(name) {
    const copyofcats = cats.slice()
    copyofcats.push(name)
    return copyofcats

}
function prependCat(name) {
    const copyofcats = cats.slice()
    copyofcats.unshift(name)
    return copyofcats
}
function removeLastCat(name) {
    const copyofcats = cats.slice()
    copyofcats.pop()
    return copyofcats
}
function removeFirstCat(name) {
    const copyofcats = cats.slice()
    copyofcats.shift(name)
    return copyofcats
}

    






