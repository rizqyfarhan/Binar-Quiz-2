const { Book } = require('./models');

Book.update({
    is_publish: true
}, {
    where: {
        id: 2
    }
}).then(() => {
    console.log("Berhasil diupdate");
    process.exit();
}).catch(err => {
    console.error("Gagal diupdate");
});