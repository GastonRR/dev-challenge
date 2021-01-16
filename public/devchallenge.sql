-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-01-2021 a las 18:06:18
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `devchallenge`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actor`
--

CREATE TABLE `actor` (
  `id` int(11) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `awards` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `actor`
--

INSERT INTO `actor` (`id`, `firstName`, `lastName`, `awards`) VALUES
(1, 'Clemens', 'Jone', 10),
(2, 'Kirbie', 'Dowsett', 7),
(3, 'Augusta', 'Swigg', 8),
(4, 'Kariotta', 'Winterbotham', 9),
(5, 'Ossie', 'Joinson', 7),
(6, 'Wendel', 'Showell', 5),
(7, 'Heloise', 'Gong', 3),
(8, 'Gaultiero', 'Shapero', 3),
(9, 'Nancee', 'Gueinn', 9),
(10, 'Euell', 'LaBastida', 2),
(11, 'Ted', 'Hinckley', 1),
(12, 'Jillene', 'Basnett', 2),
(13, 'Granger', 'Gornall', 10),
(14, 'Joeann', 'Kinney', 10),
(15, 'Elspeth', 'Crossfeld', 9),
(16, 'Penny', 'Albasini', 8),
(17, 'Olivero', 'Heard', 6),
(18, 'Lion', 'Markel', 7),
(19, 'Trey', 'De Biasi', 6),
(20, 'Ophelie', 'Pickle', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actorepisode`
--

CREATE TABLE `actorepisode` (
  `id` int(11) NOT NULL,
  `idEpisode` int(11) NOT NULL,
  `idActor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `actorepisode`
--

INSERT INTO `actorepisode` (`id`, `idEpisode`, `idActor`) VALUES
(1, 13, 8),
(2, 18, 1),
(3, 11, 5),
(4, 15, 4),
(5, 4, 9),
(6, 19, 5),
(7, 9, 5),
(8, 5, 7),
(9, 14, 7),
(10, 18, 10),
(11, 14, 1),
(12, 10, 1),
(13, 17, 10),
(14, 4, 10),
(15, 8, 6),
(16, 5, 7),
(17, 13, 9),
(18, 4, 4),
(19, 4, 6),
(20, 4, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actormovies`
--

CREATE TABLE `actormovies` (
  `id` int(11) NOT NULL,
  `idActor` int(11) NOT NULL,
  `idMovies` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `actormovies`
--

INSERT INTO `actormovies` (`id`, `idActor`, `idMovies`) VALUES
(1, 11, 20),
(2, 2, 1),
(3, 15, 2),
(4, 6, 9),
(5, 5, 17),
(6, 12, 8),
(7, 4, 10),
(8, 10, 20),
(9, 11, 8),
(10, 13, 7),
(11, 11, 1),
(12, 5, 9),
(13, 8, 4),
(14, 6, 16),
(15, 8, 10),
(16, 9, 17),
(17, 17, 7),
(18, 16, 5),
(19, 20, 10),
(20, 14, 17);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `director`
--

CREATE TABLE `director` (
  `id` int(11) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `awards` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `director`
--

INSERT INTO `director` (`id`, `firstName`, `lastName`, `awards`) VALUES
(1, 'Willdon', 'Meineck', 10),
(2, 'Barn', 'Conahy', 7),
(3, 'Marita', 'Aspole', 3),
(4, 'Ettie', 'Ness', 6),
(5, 'Mohandas', 'Plowell', 5),
(6, 'Adan', 'Larkcum', 2),
(7, 'Cathleen', 'Kennedy', 6),
(8, 'Zechariah', 'Bendel', 9),
(9, 'Fania', 'Preon', 1),
(10, 'Falkner', 'De Roeck', 5),
(11, 'Ardenia', 'Tattersdill', 3),
(12, 'Deane', 'Darington', 9),
(13, 'Dalia', 'Bebbell', 8),
(14, 'Gaylord', 'Leman', 7),
(15, 'Rutger', 'M\'Quhan', 1),
(16, 'Woodie', 'Kruger', 1),
(17, 'Sonny', 'McKeown', 1),
(18, 'Sigismund', 'Ysson', 4),
(19, 'Kelsey', 'Stearn', 8),
(20, 'Norton', 'Driussi', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `episodes`
--

CREATE TABLE `episodes` (
  `id` int(11) NOT NULL,
  `title` varchar(450) NOT NULL,
  `number` int(10) NOT NULL,
  `releaseDate` date DEFAULT NULL,
  `idSeason` int(11) NOT NULL,
  `idDirector` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `episodes`
--

INSERT INTO `episodes` (`id`, `title`, `number`, `releaseDate`, `idSeason`, `idDirector`) VALUES
(1, 'Torrente 2: Misión Marbella', 1, '2008-07-17', 1, 11),
(2, 'Stomp the Yard', 1, '2020-04-15', 2, 7),
(3, 'Trial and Error', 1, '2003-01-14', 3, 1),
(4, 'Kind of Loving, A', 1, '2008-03-20', 4, 1),
(5, 'Still Life', 1, '2018-09-23', 5, 19),
(6, 'Haiku Tunnel', 1, '2015-06-15', 6, 16),
(7, 'Lucia', 1, '2019-04-30', 7, 12),
(8, 'Ordeal, The (Calvaire)', 1, '2007-10-25', 8, 8),
(9, 'Peanuts - Die Bank zahlt alles', 1, '2010-02-25', 9, 16),
(10, 'The Moromete Family', 1, '2012-08-25', 10, 14),
(11, 'Fagbug', 1, '2017-10-05', 11, 9),
(12, 'Divine Trash', 1, '2020-10-30', 12, 17),
(13, 'High Hopes', 1, '2015-06-10', 13, 4),
(14, 'Tiger and the Snow, The (La tigre e la neve)', 1, '2000-08-21', 14, 17),
(15, 'Topralli', 1, '2013-08-02', 15, 15),
(16, 'The Castle of Fu Manchu', 1, '2018-08-05', 16, 18),
(17, 'Foxes', 1, '2008-09-13', 17, 9),
(18, 'Zombie Girl: The Movie', 1, '2006-01-04', 18, 16),
(19, 'Chill', 1, '2016-08-05', 19, 15),
(20, '1612: Khroniki smutnogo vremeni', 1, '2002-03-19', 20, 16),
(21, 'Nob Hill', 1, '2014-04-12', 21, 14),
(22, 'Hardcore', 1, '2002-03-30', 22, 15),
(23, 'Julius Caesar', 1, '2008-01-02', 23, 3),
(24, 'Strangers on a Train', 1, '2005-12-24', 24, 4),
(25, 'Deck the Halls', 1, '2008-08-05', 25, 10),
(26, 'Last Mountain, The', 1, '2008-07-09', 26, 4),
(27, 'My Neighbor Totoro (Tonari no Totoro)', 1, '2010-12-03', 27, 2),
(28, 'Continental Divide', 1, '2001-12-07', 28, 11),
(29, 'An Amazing Couple', 1, '2014-07-22', 29, 10),
(30, 'Jimi Hendrix', 1, '2015-06-12', 30, 17),
(31, 'Tale of Tales (Skazka skazok)', 1, '2020-07-28', 31, 12),
(32, 'Laissons Lucie faire !', 1, '2012-09-30', 32, 16),
(33, 'Best of the Best 3: No Turning Back', 1, '2011-08-07', 33, 11),
(34, 'Black Coal, Thin Ice (Bai ri yan huo)', 1, '2007-11-24', 34, 13),
(35, 'Lady and the Tramp II: Scamp\'s Adventure', 1, '2003-02-16', 35, 17),
(36, 'Merry Jail, The (Das fidele Gefängnis)', 1, '2013-03-06', 36, 1),
(37, 'Scary Movie 2', 1, '2008-08-31', 37, 2),
(38, 'Gia', 1, '2014-06-21', 38, 7),
(39, 'Mitt', 1, '2021-01-31', 39, 11),
(40, 'Two Shots Fired', 1, '2010-03-11', 40, 16),
(41, 'Paan Singh Tomar', 1, '2003-06-14', 41, 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genre`
--

CREATE TABLE `genre` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `genre`
--

INSERT INTO `genre` (`id`, `name`, `active`) VALUES
(1, 'Comedy', 1),
(2, 'Crime|Drama|Thriller', 1),
(3, 'Drama', 1),
(4, 'Comedy|Drama', 1),
(5, 'Drama|Thriller', 1),
(6, 'Crime|Drama', 1),
(7, 'Action', 1),
(8, 'Documentary', 1),
(9, 'Fantasy', 1),
(10, 'Romance', 1),
(11, 'Cyberpunk', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(450) NOT NULL,
  `awards` int(11) DEFAULT NULL,
  `length` int(10) DEFAULT NULL,
  `releaseDate` date NOT NULL,
  `idGenre` int(11) NOT NULL,
  `idDirector` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `title`, `awards`, `length`, `releaseDate`, `idGenre`, `idDirector`) VALUES
(1, 'Swan Princess, The', 2, 109, '2013-11-22', 3, 2),
(2, 'Jerk, The', 1, 116, '2004-09-09', 3, 1),
(3, 'In God\'s Hands', 2, 108, '2000-07-26', 7, 14),
(4, 'Deuce Bigalow: European Gigolo', 6, 96, '2003-07-13', 2, 16),
(5, 'Creepshow 2', 6, 95, '2007-11-17', 6, 20),
(6, 'Lady in the Lake', 4, 119, '2020-09-02', 6, 17),
(7, 'Initiation, The', 1, 98, '2011-05-29', 2, 11),
(8, 'Sarah Silverman:  We Are Miracles', 3, 117, '2001-07-03', 5, 20),
(9, 'George and the Dragon', 4, 92, '2019-06-14', 5, 19),
(10, 'Battle for Brooklyn', 6, 111, '2017-10-15', 3, 9),
(11, 'My Boy Jack', 7, 116, '2009-12-03', 1, 8),
(12, 'Woodstock', 8, 118, '2010-08-05', 7, 9),
(13, 'Popcorn', 6, 104, '2009-07-25', 8, 16),
(14, 'Twilight\'s Last Gleaming', 8, 115, '2018-10-20', 3, 12),
(15, 'FDR: American Badass!', 5, 117, '2002-01-27', 5, 10),
(16, 'Naked in New York', 6, 91, '2004-12-07', 4, 8),
(17, 'Mr Hublot', 2, 99, '2013-03-19', 7, 6),
(18, 'Dangerous Moves (La diagonale du fou)', 4, 117, '2011-03-06', 4, 4),
(19, 'Greatest Show on Earth, The', 5, 119, '2020-09-24', 4, 14),
(20, 'Sandglass, The (Sanatorium pod klepsydra)', 8, 102, '2005-01-10', 4, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seasons`
--

CREATE TABLE `seasons` (
  `id` int(11) NOT NULL,
  `title` varchar(450) NOT NULL,
  `number` int(10) DEFAULT NULL,
  `releaseDate` date DEFAULT NULL,
  `idSerie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `seasons`
--

INSERT INTO `seasons` (`id`, `title`, `number`, `releaseDate`, `idSerie`) VALUES
(1, 'Primer Temporada', 1, '2011-01-01', 1),
(2, 'Segunda Temporada', 2, '2012-01-01', 1),
(3, 'Tercer Temporada', 3, '2013-01-01', 1),
(4, 'Cuarta Temporada', 4, '2014-01-01', 1),
(5, 'Quinta Temporada', 5, '2015-01-01', 1),
(6, 'Sexta Temporada', 6, '2016-01-01', 1),
(7, 'Septima Temporada', 7, '2017-01-01', 1),
(8, 'Primer Temporada', 1, '2005-01-01', 2),
(9, 'Segunda Temporada', 2, '2006-01-01', 2),
(10, 'Tercer Temporada', 3, '2007-01-01', 2),
(11, 'Cuarta Temporada', 4, '2008-01-01', 2),
(12, 'Quinta Temporada', 5, '2009-01-01', 2),
(13, 'Sexta Temporada', 6, '2010-01-01', 2),
(14, 'Septima Temporada', 7, '2011-01-01', 2),
(15, 'Octava Temporada', 8, '2012-01-01', 2),
(16, 'Novena Temporada', 9, '2013-01-01', 2),
(17, 'Decima Temporada', 10, '2014-01-01', 2),
(18, 'Undecima Temporada', 11, '2015-01-01', 2),
(19, 'Duodecima Temporada', 12, '2016-01-01', 2),
(20, 'Primer Temporada', 1, '2010-01-01', 3),
(21, 'Segunda Temporada', 2, '2011-01-01', 3),
(22, 'Tercer Temporada', 3, '2012-01-01', 3),
(23, 'Cuarta Temporada', 4, '2013-01-01', 3),
(24, 'Quinta Temporada', 5, '2014-01-01', 3),
(25, 'Sexta Temporada', 6, '2015-01-01', 3),
(26, 'Septima Temporada', 7, '2016-01-01', 3),
(27, 'Primer Temporada', 1, '2011-01-01', 4),
(28, 'Segunda Temporada', 2, '2012-01-01', 4),
(29, 'Tercer Temporada', 3, '2013-01-01', 4),
(30, 'Cuarta Temporada', 4, '2014-01-01', 4),
(31, 'Quinta Temporada', 5, '2015-01-01', 4),
(32, 'Primer Temporada', 1, '2006-01-01', 5),
(33, 'Segunda Temporada', 2, '2008-01-01', 5),
(34, 'Tercer Temporada', 3, '2009-01-01', 5),
(35, 'Cuarta Temporada', 4, '2010-01-01', 5),
(36, 'Quinta Temporada', 5, '2011-01-01', 5),
(37, 'Sexta Temporada', 6, '2012-01-01', 5),
(38, 'Septima Temporada', 7, '2013-01-01', 5),
(39, 'Octava Temporada', 8, '2014-01-01', 5),
(40, 'Novena Temporada', 9, '2015-01-01', 5),
(41, 'Decima Temporada', 10, '2016-01-01', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `series`
--

CREATE TABLE `series` (
  `id` int(11) NOT NULL,
  `title` varchar(450) NOT NULL,
  `releaseDate` date DEFAULT NULL,
  `idGenre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `series`
--

INSERT INTO `series` (`id`, `title`, `releaseDate`, `idGenre`) VALUES
(1, 'Beyond Rangoon', '2020-12-25', 5),
(2, 'Callan', '2003-10-03', 10),
(3, 'Walking Tall', '2013-05-08', 7),
(4, 'We\'re Not Married!', '2014-01-09', 1),
(5, 'My Dog Tulip', '2004-09-15', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(450) NOT NULL,
  `email` varchar(450) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'admin', 'admin@admin.com', '$2b$10$p4vNsBGIUQ3bGVY2MIuOaO3S0wZ.YZeVVFqUN7EQwk7IcB1PrCbOe');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actor`
--
ALTER TABLE `actor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `actorepisode`
--
ALTER TABLE `actorepisode`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_episodes_has_actor_actor1_idx` (`idActor`),
  ADD KEY `fk_episodes_has_actor_episodes1_idx` (`idEpisode`);

--
-- Indices de la tabla `actormovies`
--
ALTER TABLE `actormovies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_actor_has_movies_movies1_idx` (`idMovies`),
  ADD KEY `fk_actor_has_movies_actor1_idx` (`idActor`);

--
-- Indices de la tabla `director`
--
ALTER TABLE `director`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `episodes`
--
ALTER TABLE `episodes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_episodes_seasons1_idx` (`idSeason`),
  ADD KEY `fk_episodes_director1_idx` (`idDirector`);

--
-- Indices de la tabla `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_movies_genre_idx` (`idGenre`),
  ADD KEY `fk_movies_director1_idx` (`idDirector`);

--
-- Indices de la tabla `seasons`
--
ALTER TABLE `seasons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_seasons_series1_idx` (`idSerie`);

--
-- Indices de la tabla `series`
--
ALTER TABLE `series`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_series_genre1_idx` (`idGenre`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actor`
--
ALTER TABLE `actor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `actorepisode`
--
ALTER TABLE `actorepisode`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `actormovies`
--
ALTER TABLE `actormovies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `director`
--
ALTER TABLE `director`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `episodes`
--
ALTER TABLE `episodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla `genre`
--
ALTER TABLE `genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `seasons`
--
ALTER TABLE `seasons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `series`
--
ALTER TABLE `series`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actorepisode`
--
ALTER TABLE `actorepisode`
  ADD CONSTRAINT `fk_episodes_has_actor_actor1` FOREIGN KEY (`idActor`) REFERENCES `actor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_episodes_has_actor_episodes1` FOREIGN KEY (`idEpisode`) REFERENCES `episodes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `actormovies`
--
ALTER TABLE `actormovies`
  ADD CONSTRAINT `fk_actor_has_movies_actor1` FOREIGN KEY (`idActor`) REFERENCES `actor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_actor_has_movies_movies1` FOREIGN KEY (`idMovies`) REFERENCES `movies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `episodes`
--
ALTER TABLE `episodes`
  ADD CONSTRAINT `fk_episodes_director1` FOREIGN KEY (`idDirector`) REFERENCES `director` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_episodes_seasons1` FOREIGN KEY (`idSeason`) REFERENCES `seasons` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `fk_movies_director1` FOREIGN KEY (`idDirector`) REFERENCES `director` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_movies_genre` FOREIGN KEY (`idGenre`) REFERENCES `genre` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `seasons`
--
ALTER TABLE `seasons`
  ADD CONSTRAINT `fk_seasons_series1` FOREIGN KEY (`idSerie`) REFERENCES `series` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `series`
--
ALTER TABLE `series`
  ADD CONSTRAINT `fk_series_genre1` FOREIGN KEY (`idGenre`) REFERENCES `genre` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
