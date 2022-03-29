const { Book } = require('./models');

Book.destroy({
    where: {
        name: 'Novel Bulan'
    }
});