use db_financas;
delimiter $$
--Procedure para cadastrar novos dados
create procedure newEntrada(in origem varchar(255), in valor decimal(10, 2), in dataEntrada date, in tipo varchar(255))
begin
    insert into entrada(origem_entrada, valor_reais, data_entrada, tipo_entrada) values(origem, valor, dataEntrada, tipo);
end $$

delimiter;


delimiter$$
create procedure allEntrada()
begin
    select origem_entrada as origem, valor_reais as valor, data_entrada as data, tipo_entrada as tipo from entrada;
end $$
delimiter ;