insert into spells(cantrips, first_level)
values ($1, $2)
returning spell_list_id;