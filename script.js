// ---------- LOGIN ----------
const formLogin = document.getElementById("form-login");

if (formLogin) {
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro-login");

    if (!email || !senha) {
      erro.textContent = "Preencha o email e a senha.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      erro.textContent = "Digite um email válido.";
    } else {
      erro.textContent = "";
      // Aqui você conectaria com o back-end.
      window.location.href = "alterar-senha.html";
    }
  });
}

// ---------- ALTERAR SENHA ----------
const formSenha = document.getElementById("form-senha");

if (formSenha) {
  formSenha.addEventListener("submit", (e) => {
    e.preventDefault();
    const atual = document.getElementById("senha-atual").value;
    const nova = document.getElementById("nova-senha").value;
    const confirmar = document.getElementById("confirmar-senha").value;
    const erro = document.getElementById("erro-senha");
    const ok = document.getElementById("ok-senha");
    ok.textContent = "";

    if (!atual || !nova || !confirmar) {
      erro.textContent = "Preencha todos os campos.";
    } else if (nova.length < 6) {
      erro.textContent = "A nova senha precisa ter pelo menos 6 caracteres.";
    } else if (nova === atual) {
      erro.textContent = "A nova senha deve ser diferente da atual.";
    } else if (nova !== confirmar) {
      erro.textContent = "A confirmação não é igual à nova senha.";
    } else {
      erro.textContent = "";
      ok.textContent = "Senha alterada com sucesso!";
      formSenha.reset();
    }
  });
}
