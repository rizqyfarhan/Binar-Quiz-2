const { Book } = require('./models');

Book.create({
    name: 'Naruto',
    author: 'Masashi Kishimoto',
    price: '25000',
    is_publish: true
}).then(res => console.log(res));