SELECT * FROM cidades ORDER BY id;
SELECT * FROM prefeitos;

INSERT INTO 
    prefeitos(nome, cidade_id)
VALUES 
    ('Rodrigo Neves', 3);

INSERT INTO 
    prefeitos(nome, cidade_id)
VALUES
    ('Raquel Lyra', 4);

INSERT INTO 
    prefeitos(nome, cidade_id)
VALUES
    ('Zenaldo Coutinho', null);

INSERT INTO 
    prefeitos(nome, cidade_id)
VALUES
    ('Rafael Greca', null);
