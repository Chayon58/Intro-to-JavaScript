const student = {
    name: 'John',
    id: 123,
    age: 23,
    isActive: true,
    act: function () {
        console.log('student is active');
    },
    subjects: ['Math', 'Science', 'English'],
    address: {
        city: 'New York',
        state: 'NY',
        country: 'USA'
    }

}

console.log(student.address);
student.act();