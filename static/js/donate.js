document.addEventListener("DOMContentLoaded", () => {
    const editableAmount = document.getElementById("editableAmount");
    const donateButton = document.getElementById("donateButton");

    function formatNumberWithCommas(numStr) {
        let [intPart, decimalPart] = numStr.split('.');
        intPart = intPart.replace(/^0+(?!$)/, '');
        let withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return decimalPart ? `${withCommas}.${decimalPart}` : withCommas;
    }

    function validateAndFormat() {
        let raw = editableAmount.textContent.replace(/[^0-9.]/g, '');

        const parts = raw.split('.');
        if (parts.length > 2) { raw = parts[0] + '.' + parts.slice(1).join(''); }
        if (raw.startsWith('.')) { raw = '0' + raw; }

        const formatted = formatNumberWithCommas(raw);
        editableAmount.textContent = formatted;

        placeCursorAtEnd(editableAmount);

        const numericValue = parseFloat(raw);
        donateButton.disabled = isNaN(numericValue) || numericValue <= 0;
    }

    function placeCursorAtEnd(el) {
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(el);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
    }

    editableAmount.addEventListener("input", validateAndFormat);
});