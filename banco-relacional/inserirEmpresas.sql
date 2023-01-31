INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 33529461000105),
    ('Vale', 72591620000153),
    ('Cielo', 14867121000140);

ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

DESC empresas; -- mostra as propriedades da tabela
SELECT * FROM cidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1,2,1),
    (1,3,0),
    (2,2,0),
    (2,3,1);