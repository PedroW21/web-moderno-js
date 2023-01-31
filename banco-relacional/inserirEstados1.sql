-- Active: 1675187876209@@127.0.0.1@3306@webmoderno
INSERT INTO estados(nome, sigla, regiao, populacao)
VALUES('Acre', 'AC', 'Norte', 0.83);

INSERT INTO 
    estados(nome, sigla, regiao, populacao)
VALUES
    ('Alagoas', 'AL', 'Nordeste', 3.38),
    ('Amapá', 'AP', 'Norte', 0.8),
    ('Amazonas', 'AM', 'Nordeste', 4.06),
    ('Goiânia', 'GO', 'Centro-Oeste', 1.55);

-- FIZ CAQUINHA KKKK
UPDATE 
    estados
SET 
    nome = 'Goiás'
WHERE
    sigla = 'GO';

UPDATE 
    estados
SET 
    populacao = 6.52
WHERE
    populacao = 1.55;
