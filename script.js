document.getElementById('checkButton').addEventListener('click', function() {
    const periodNumber = document.getElementById('periodInput').value;

    if (periodNumber.length === 14) {
        document.getElementById('connecting').classList.remove('hidden');
        document.getElementById('result').classList.add('hidden');

        setTimeout(function() {
            document.getElementById('connecting').classList.add('hidden');
            document.getElementById('result').classList.remove('hidden');

            // Simulate prediction logic (you can replace this with actual logic)
            const predictionElement = document.getElementById('prediction');
            predictionElement.innerHTML = '';

            const isBig = Math.random() > 0.5;
            const isGreen = Math.random() > 0.5;

            if (isBig) {
                predictionElement.className = 'prediction big';
                predictionElement.innerHTML = 'Big ';
            } else {
                predictionElement.className = 'prediction small';
                predictionElement.innerHTML = 'Small ';
            }

            const dot = document.createElement('span');
            dot.className = isGreen ? 'green-dot' : 'red-dot';
            dot.textContent = '●';
            predictionElement.appendChild(dot);
        }, 3000);
    } else {
        alert('Please enter a valid 14-digit period number.');
    }
});
