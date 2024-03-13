WITH allSubs (id, parent_id, name, level) AS (
	SELECT id, parent_id, name, 0 AS level
		FROM subdivisions sub
		WHERE sub.id = (SELECT subdivision_id FROM collaborators WHERE id = 710253)

	UNION ALL 

	SELECT sub.id, sub.parent_id, sub.name, subs.level + 1
		FROM subdivisions sub
		JOIN allSubs subs ON sub.parent_id = subs.id
)


SELECT c.id, c.name, s.name as sub_name, s.id as sub_id, s.level as sub_level, COUNT(*) OVER (PARTITION BY s.id) AS colls_count  
	FROM collaborators c
	JOIN allSubs s ON s.id = c.subdivision_id;