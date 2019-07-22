const bcrypt = require("bcrypt");

const SALT_WORK_FACTOR = 10

function HashPassword(password = "") {
    return new Promise((resolve, reject) => {
        return bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
            if (err) {
                return reject(err)
            }
            return bcrypt.hash(password, salt, (hashErr, hash) => {
                if (hashErr) return reject(hashErr);
                resolve(hash)
            });
        });

    })
}

function IsMatchPassword(candidatePassword, hashPassword) {
    return new Promise((res, rej) => {
        return bcrypt.compare(candidatePassword, hashPassword, (err, isMatch) => {
            if (err) return rej(err);
            return res(isMatch);
        });
    });
}
module.exports.HashPassword = HashPassword;
module.exports.IsMatchPassword = IsMatchPassword;