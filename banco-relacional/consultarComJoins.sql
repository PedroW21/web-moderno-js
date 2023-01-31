-- Somente oq as tabelas tem em comum
SELECT * FROM 
    cidades c 
INNER JOIN 
    prefeitos p
ON
    c.id = p.cidade_id;

-- o que tem em comum mais o que so tem em cidades
SELECT * FROM
    cidades c
LEFT JOIN 
    prefeitos p
ON
    c.id = p.cidade_id;

-- O que tem em comum mais o que so tem em prefas
SELECT * FROM cidades c
RIGHT JOIN prefeitos p
ON c.id = p.cidade_id;

-- o FULL JOIN IRMAO

-- o my sql n tanka o full join
SELECT * FROM cidades c 
FULL JOIN prefeitos p 
ON c.id = p.cidade_id;


-- FULL JOIN na gambiarra

SELECT * FROM
    cidades c
LEFT JOIN 
    prefeitos p
ON
    c.id = p.cidade_id
UNION -- se eu colocasse ALL taria as duplicações (por causa do inner e etc...)
SELECT * FROM cidades c
RIGHT JOIN prefeitos p
ON c.id = p.cidade_id;