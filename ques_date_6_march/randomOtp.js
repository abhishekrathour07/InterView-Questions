
const otpGenerator = (length = 6) => {
    let otp = "";
    for (i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10)
    }
    console.log("Your One time password is " + otp);
}
otpGenerator();
