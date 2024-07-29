BEGIN;

INSERT INTO "user" ("firstname", "lastname", "email", "password") VALUES
('Jean-Claude', 'Duss', 'jcduss@oclock.io', '$2b$10$7vwYGrz2TGeyG4X8YnD9BOag9I.YKGUTJELs64qGmcK/syHu2BzTG'),
('Chuck', 'Norris', 'chuck@oclock.io', '$2b$10$bxAu/9kPBFPnWR6VA8S.WuZTDEkX0faDN/sIStBidbb4do53lllp.');

INSERT INTO "sheet" ("title", "description", "content", "season", "viewsAmount", "author_id") VALUES
('Methode MERISE', 'Tout savoir sur le MCD/MLD/MPD', 'blablabla', 5, 0, 2),
('les classes', 'Tout savoir sur les clases en js', 'blablabla les classes c est super cool', 5, 0, 1),
('les user stories', 'Tout savoir sur les US', 'blablabla les US c est pas un pays mais une methodologie', 5, 0, 2);

INSERT INTO "tag" ("name", "description") VALUES
('Gestion de projet', 'Tout savoir sur les user stories, les wireframes, le KANBAN, la methode MERISE...'),
('La POO', 'Tout savoir sur la programmation orientee objet');

INSERT INTO "sheet_has_tag" ("sheet_id", "tag_id") VALUES
(1, 1),
(2, 2),
(3, 1);

COMMIT;