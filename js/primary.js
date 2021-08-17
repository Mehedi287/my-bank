function getUserInfo(userInput) {
    const input = document.getElementById(userInput);
    input.value = '';
    return input.value;

}
document.getElementById('submit-btn').addEventListener('click', function () {
    const userEmail = getUserInfo('user-email');
    const userPassword = getUserInfo('user-password');
    if (userEmail == 'mehediHasan@gmail.com' && userPassword == 1234) {
        window.location.href = 'bank.html';
    }
})