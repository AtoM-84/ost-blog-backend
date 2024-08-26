BEGIN;

INSERT INTO "post_has_author" ("post_id", "author_id") VALUES
('1','1');

INSERT INTO "post_has_author" ("post_id", "author_id") VALUES
('2','1');

INSERT INTO "post_has_author" ("post_id", "author_id") VALUES
('2','2');

INSERT INTO "post_has_author" ("post_id", "author_id") VALUES
('3','2');

COMMIT;