import { LoremIpsum } from "lorem-ipsum";

const args = process.argv[2].split(" ")
const {rerunInterval} = {}
const lorem = new LoremIpsum()

const words = args[0]
let items = []

if( args.length < 2 ) {
    let text = lorem.generateWords(parseInt(words))
    items[0] = {
        title: `Generate ${words} words of lorem ipsum`,
        subtitle: text,
        arg: text,
        valid: true
    }
}

console.log(JSON.stringify({items, rerun: rerunInterval}, null, '\t'));