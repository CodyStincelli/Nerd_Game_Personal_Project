join users, character_list, characters
on user_id 

select * from character_list
where user_id = $1
returning *;