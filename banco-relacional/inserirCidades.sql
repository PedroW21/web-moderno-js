SELECT * FROM estados;

INSERT INTO cidades(nome, area, estado_id)
VALUES ('Campinas', 795, 25);

INSERT INTO cidades(nome, area, estado_id)
VALUES ('Nitéroi', 133.9, 19);

INSERT INTO 
    cidades(nome, area, estado_id)
VALUES(
    'Caruaru', 
    920.6, 
    (select id from estados where sigla = 'PE')
);

INSERT INTO 
    cidades(nome, area, estado_id)
VALUES (
    'Juazeiro do Norte',
    248.2,
    (select id from estados where sigla = 'CE')
);

INSERT INTO 
    cidades(nome, area, estado_id)
VALUES (
    'Goiânia',
    728.8,
    (select id from estados where sigla = 'GO')
);

INSERT INTO 
    cidades(nome, area, estado_id)
VALUES (
    'Brasília',
    5.71,
    (select id from estados where sigla = 'DF')
);

SELECT * FROM cidades;

SELECT cdd.nome AS 'Cidade', est.nome AS 'Estado', area AS 'Área em Km²' FROM cidades cdd 
INNER JOIN estados est 
ON est.id = cdd.estado_id;