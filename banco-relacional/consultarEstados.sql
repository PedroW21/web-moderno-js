SELECT * FROM estados;

SELECT nome, sigla as 'Nome do Estado' FROM estados 
WHERE regiao = 'Sul';

SELECT 
    nome, regiao, populacao 
AS 
    'POP - Em Milhoes' 
FROM 
    estados
WHERE 
    populacao >= 10
ORDER BY 
    populacao DESC;