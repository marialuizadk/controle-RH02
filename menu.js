document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  menu.innerHTML = `
    <a href="index.html">Home</a>
    <a href="cadastro.html">Cadastrar Funcionário</a>
    <a href="ferias.html">Lançar Férias</a>
    <a href="demissao.html">Registrar Demissão</a>
    <a href="aviso_previo.html">Aviso Prévio</a>
    <a href="ativos.html">Funcionários Ativos</a>
    <a href="inativos.html">Funcionários Inativos</a>
    <a href="relatorio.html">Gerar Relatório</a>
  `;
});
