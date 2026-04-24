const input = document.getElementById("inputText");
const output = document.getElementById("output");
const buttons = document.querySelectorAll(".btn-glitch");

// ================= AÇÕES =================
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const action = btn.dataset.action;
        processCipher(action);
    });
});

// ================= FUNÇÃO PRINCIPAL =================
function processCipher(mode) {
    const text = input.value.trim();

    if (!text) {
        showOutput("Nenhum texto inserido.", true);
        return;
    }

    try {
        let result;

        if (mode === "encode") {
            result = btoa(text);
        } else {
            result = atob(text);
        }

        animateOutput(result);

    } catch (err) {
        showOutput("Erro ao processar os dados.", true);
    }
}

// ================= OUTPUT =================
function showOutput(message, isError = false) {
    output.innerText = message;

    output.style.opacity = "0";

    setTimeout(() => {
        output.style.opacity = "1";
        output.style.color = isError ? "#ff4d4d" : "#fff";
    }, 100);
}

// ================= ANIMAÇÃO DIGITANDO =================
function animateOutput(text) {
    output.innerText = "";
    output.style.color = "#fff";

    let i = 0;

    const interval = setInterval(() => {
        output.innerText += text[i];
        i++;

        if (i >= text.length) {
            clearInterval(interval);
        }
    }, 15);
}
