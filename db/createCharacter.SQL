insert into characters(character_class, race, character_name, ability_score, spells_id, health)
values ($1, $2, $3, $4, $5, $6)
returning character_id;

-- $5 = res.data.spell_list_id