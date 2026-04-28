document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todas as linhas apenas do corpo da tabela
    const rows = document.querySelectorAll("tbody tr");

    rows.forEach((row, rowIndex) => {
        row.addEventListener("mouseenter", () => {
            // Percorre todas as linhas anteriores até a linha em que o mouse está
            for (let i = 0; i <= rowIndex; i++) {
                const prevRow = rows[i];
                
                // Verifica todas as células daquela linha (prevRow)
                Array.from(prevRow.children).forEach(td => {
                    const rowspan = parseInt(td.getAttribute("rowspan") || "1", 10);
                    
                    // Se a célula tiver rowspan e ele "alcançar" a linha atual (rowIndex)
                    if (rowspan > 1 && rowIndex < (i + rowspan)) {
                        td.classList.add("hover-ativo");
                    }
                });
            }
        });

        // Remove a cor ao tirar o mouse da linha
        row.addEventListener("mouseleave", () => {
            document.querySelectorAll(".hover-ativo").forEach(el => {
                el.classList.remove("hover-ativo");
            });
        });
    });
});
