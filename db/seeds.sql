USE movie_db;
INSERT INTO movies (name) VALUES
('Movie Title 1'),
('Movie Title 2'),
('Movie Title 3');

INSERT INTO reviews (movie_id, review) VALUES
(1, 'Review for Movie 1'),
(2, 'Review for Movie 2'),
(1, 'Another review for Movie 1');