class Users {
    constructor(id, firstName, lastName, age) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

export const users = [
    new Users(1, 'David', 'Cohen', 33),
    new Users(2, 'Yuval', 'Sarig', 25),
    new Users(3, 'Dana', 'Nama', 45),
    new Users(4, 'Shira', 'Levu', 37)
]
