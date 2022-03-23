//const ADMIN = 0;
//const READ_ONLY = 1;
//const AUTHOR = 2; 
//This is fine, but enumerate is better:

enum Role {ADMIN = 6, READ_ONLY = 'READ_ONLY', AUTHOR = 100}  //custom type -> Capital start, automatically assigned indices (bypassed by =6)
//enum as identifiers
//could also use Tuples: Fixed-lenght arrays

const person = {
    name: 'Marvin',
    age: 23,
    hobbies: ['Pumpen', 'Essen'],
    role: Role.AUTHOR
};

//person.role.push('admin'); 
//person.role[1] = 10;

let favoriteActivities: any[]; //any input -> but 'any' takes away all advantages provided by Typescript
favoriteActivities = ['Sports', 223313];


console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    //console.log(hobby.map) !! ERROR: Map nur für arrays, nicht strings
}

