const students = [
    {
        name: 'Michel',
        id: '1',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    },
    {
        name: 'Jason',
        id: '2',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
    }
];

const classes = [
    {
        class: 'M1',
        id: '1'
    },
    {
        class: 'M2',
        id: '2'
    },
    {
        class: 'M3',
        id: '3'
    },
    {
        class: 'M4',
        id: '4'
    },
    {
        class: 'M5',
        id: '5'
    },
];

getClasses = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(classes);
        }, 1000);
    })
}

getStudents = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(students);
        }, 1000)
    })
}
module.exports = {
    getClasses,
    getStudents
}