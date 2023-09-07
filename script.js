function vote(presentationId) {
    const ratingInput = document.getElementById(`rating${presentationId}`);
    const rating = parseInt(ratingInput.value);
    
    if (isNaN(rating) || rating < 1 || rating > 10) {
        showMessage("Пожалуйста, введите оценку от 1 до 10.");
        return;
    }

    // Здесь можно отправить оценку на сервер (серверную часть).

    showMessage(`Вы проголосовали ${rating} за презентацию ${presentationId}.`);
    ratingInput.value = "";
}

function showMessage(message) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
}
