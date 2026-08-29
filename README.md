# UDWMJ - Lista 01 (Calculadora de IMC)

## 📌 Funcionalidade do Projeto
Página web interativa que calcula o **Índice de Massa Corporal (IMC)** do usuário:
1. Solicita o nome, peso (kg) e altura (m) através de caixas de diálogo `prompt()`.
2. Realiza o cálculo do IMC usando a fórmula $\text{IMC} = \frac{\text{peso}}{\text{altura}^2}$.
3. Exibe a saudação personalizada e o resultado categorizado (Abaixo do peso, Peso normal, Sobrepeso ou Obesidade) diretamente na página HTML.

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estruturação da página e container de exibição.
* **CSS3:** Estilização externa para centralização e layout do container.
* **JavaScript:** Captura de entradas, processamento dos dados e alteração dinâmica do DOM (`textContent`).

## 📁 Estrutura de Arquivos
* `index.html` — Estrutura principal da página
* `IMC.css` — Arquivo de estilos visuais
* `IMC.js` — Lógica do cálculo e manipulação da página
