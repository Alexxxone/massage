Meteor.methods({
    sendEmail: function (to, from, subject, text) {
        check([to, from, subject, text], [String]);
        this.unblock();

        Email.send({
            to: 'Aleksandr.Vladimirovich.Khomenko@gmail.com',
            from: 'massage_zp@mail.ru',
            subject: subject,
            text: text
        });
    }
});