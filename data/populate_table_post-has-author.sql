BEGIN;

INSERT INTO "post_has_author" ("post_id", "author_id") VALUES
('5','3');

INSERT INTO "post_has_author" ("post_id", "author_id") VALUES
('6','3');

INSERT INTO "post_has_author" ("post_id", "author_id") VALUES
('6','4');

INSERT INTO "post_has_author" ("post_id", "author_id") VALUES
('7','4');

COMMIT;