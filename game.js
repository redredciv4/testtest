let correctNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

function checkGuess() {
    let userGuess = document.getElementById('guessInput').value;
    let feedbackText = "";

    guesses += 1;

    if (userGuess < correctNumber) {
        feedbackText = "もっと高い数です。";
    } else if (userGuess > correctNumber) {
        feedbackText = "もっと低い数です。";
    } else {
        feedbackText = `正解です！${guesses}回で当てました。`;
        // ゲームをリセットするか、または新しい数を生成する機能をここに追加できます。
    }

    document.getElementById('feedback').textContent = feedbackText;
}