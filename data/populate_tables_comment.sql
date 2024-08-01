BEGIN;

INSERT INTO "comment" ("created_at", "content", "post_id", "author_id") VALUES
('20240731', 'Amazing article, thanks for sharing !', '10', '8');

COMMIT;