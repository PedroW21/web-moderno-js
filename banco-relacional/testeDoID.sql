insert into estados(id, nome, sigla, regiao, populacao)
values (1000, 'novo', 'nv', 'sul', 2.54);

select * from estados
where sigla = 'nv';

insert into estados(nome, sigla, regiao, populacao)
values ('Ursinho pooh', 'CH', 'Norte', 100.23);


select * from estados; --testamos o id, no caso o proximo id ficou em 1001 (o anterior foi 1000)