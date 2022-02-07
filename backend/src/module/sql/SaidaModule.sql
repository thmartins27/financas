use db_financas;
delimiter $$
create procedure newSaida(in destino varchar(255), in valor decimal(10, 2), in dataSaida date)
begin
    insert into saida
end $$
delimiter ;