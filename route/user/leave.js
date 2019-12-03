const {
    User
} = require('../../model/user');

module.exports = async (req, res) => {
    let {
        _id
    } = req.session;
    if (_id) {
        let user = await User.findOne({
            _id
        });
        if (user && user.role == 0) {
            await User.findOneAndDelete({
                _id
            });
        }
    }
    res.send('bye');
};