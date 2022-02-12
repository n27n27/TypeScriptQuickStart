let map: {[key: string]: number;} = {};
map["one"] = 1;
map["two"] = 2;
map["three"] = 3;

for(let entry in map){
    console.log(entry);
}

console.log(map["one"]);