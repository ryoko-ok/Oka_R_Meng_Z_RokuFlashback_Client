-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 17, 2021 at 06:38 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_roku`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movies`
--

DROP TABLE IF EXISTS `tbl_movies`;
CREATE TABLE IF NOT EXISTS `tbl_movies` (
  `movies_id` int(11) NOT NULL AUTO_INCREMENT,
  `movies_title` varchar(200) NOT NULL,
  `movies_cover` varchar(100) NOT NULL,
  `movies_year` varchar(10) NOT NULL,
  `movies_runtime` varchar(20) NOT NULL,
  `movies_storyline` text NOT NULL,
  `movies_trailer` varchar(200) NOT NULL,
  `movies_category` varchar(20) NOT NULL,
  `movies_genre` varchar(20) NOT NULL,
  PRIMARY KEY (`movies_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movies`
--

INSERT INTO `tbl_movies` (`movies_id`, `movies_title`, `movies_cover`, `movies_year`, `movies_runtime`, `movies_storyline`, `movies_trailer`, `movies_category`, `movies_genre`) VALUES
(1, 'Singin\' in the Rain', 'adults_movie50_singing.jpg', '1952', '1h43m', 'When the transition is being made from silent films to `talkies\', everyone has trouble adapting. Don and Lina have been cast repeatedly as a romantic couple, but when their latest film is remade into a musical, only Don has the voice for the new singing part. After a lot of practise with a diction coach, Lina still sounds terrible, and Kathy, a bright young aspiring actress, is hired to record over her voice.', 'adults_movie50_singing.mp4', 'adults', 'Comedy'),
(2, 'Breakfast at Tiffany\'s', 'adults_movie60_tiffany.jpg', '1961', '1h55m', 'Paul is a struggling writer who recently moves into a new apartment in New York. When he meets Holly, an eccentric but beautiful socialite, he hopelessly falls in love with her.', 'adults_movie60_Tiffany.mp4', 'adults', 'Comedy'),
(3, 'Grease', 'adults_movie70_grease.jpg', '1978', '1h50m', 'While vacationing in Australia, Danny and Sandy indulge in a passionate love affair with each other. They part ways believing they will not see each other again but fate has other plans.', 'adults_movie70_grease.mp4', 'adults', 'Romance'),
(4, 'E.T. the Extra-Terrestrial', 'adults_movie80_et.jpg', '1982', '1h55m', 'An alien is left behind on Earth and is saved by young Elliot who decides to keep him hidden. While the task force hunts for it, Elliot and his siblings form an emotional bond with their new friend.', 'adults_movie80_et.mp4', 'adults', 'Fantasy'),
(5, 'The Sixth Sense', 'adults_movie90_sixsense.jpg', '1999', '1h47m', 'Malcolm Crowe, a child psychologist, starts treating a young boy who acts as a medium of communication between the former and a slew of unhappy spirits.', 'adults_movie90_sixsense.mp4', 'adults', 'Horror'),
(6, 'Peter Pan', 'kids_movie50_peterpan.jpg', '1953', '1h17m', 'Wendy and her brothers are whisked away to the magical world of Neverland with the hero of their stories, Peter Pan.', 'kids_movie50_peterpan.mp4', 'kids', 'Fantasy'),
(7, 'Mary Poppins', 'kids_movie60_marypoppins.jpg', '1964', '2h19m', 'In turn of the century London, a magical nanny employs music and adventure to help two neglected children become closer to their father.', 'kids_movie60_marypoppins.mp4', 'kids', 'Fantasy'),
(8, 'Superman', 'kids_movie70_superman.jpg', '1978', '2h23m', 'An alien orphan is sent from his dying planet to Earth, where he grows up to become his adoptive home\'s first and greatest superhero.', 'kids_movie70_superman.mp4', 'kids', 'Action'),
(9, 'Ghostbusters', 'kids_movie80_goastbasters.jpg', '1984', '1h45m', 'Three former parapsychology professors set up shop as a unique ghost removal service.', 'kids_movie80_goastbasters.mp4', 'kids', 'Action'),
(10, 'The Addams Family', 'kids_movie90_addamsfamily.jpg', '1991', '1h39m', 'When an evil doctor learns about an eccentric family\'s missing relative, she hires an imposter to masquerade as him so that she can loot the family.', 'kids_movie90_addamsfamily.mp4', 'kids', 'Comedy');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_musics`
--

DROP TABLE IF EXISTS `tbl_musics`;
CREATE TABLE IF NOT EXISTS `tbl_musics` (
  `musics_id` int(11) NOT NULL AUTO_INCREMENT,
  `musics_title` varchar(400) NOT NULL,
  `musics_cover` varchar(200) NOT NULL,
  `musics_singer` varchar(200) NOT NULL,
  `musics_year` varchar(50) NOT NULL,
  `musics_audio` varchar(400) NOT NULL,
  `musics_category` varchar(20) NOT NULL,
  PRIMARY KEY (`musics_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_musics`
--

INSERT INTO `tbl_musics` (`musics_id`, `musics_title`, `musics_cover`, `musics_singer`, `musics_year`, `musics_audio`, `musics_category`) VALUES
(1, 'I Wanna Be Loved by You', 'adults_music50_Iwannabe.jpg', 'Marilyn Monroe', '1959', 'adults_music50_iannabelovedbyyou.mp3', 'adults'),
(2, 'Be My Baby', 'adults_music60_bemybaby.jpg', 'The Ronettes', '1963', 'adults_music60_bemybaby.mp3', 'adults'),
(3, 'We Will Rock You', 'adults_music70_wewillrockyou.jpg', 'Queen', '1978', 'adults_music70_wewillrockyou.mp3', 'adults'),
(4, 'Bad', 'adults_music80_bad.jpg', 'Michael Jackson', '1987', 'adults_music80_bad.mp3', 'adults'),
(5, 'Always Be My Baby', 'adults_music90_alwaysbemybaby.jpg', 'Mariah Carey', '1996', 'adults_music90_alwaysbemybaby.mp3', 'adults'),
(6, 'A Dream Is A Wish Your Heart Makes', 'kids_music50_dreamisawish.jpg', 'Lily James', '1950', 'kids_music50_cinderella.mp3', 'kids'),
(7, 'The Tra La La Song', 'kids_music60_thetralalasong.jpg', 'The Banana Splits', '1969', 'kids_music60_thetralalasong.mp3', 'kids'),
(8, 'Really Rosie', 'kids_music70_reallyrosie.jpg', 'Carole King', '1975', 'kids_music70_reallyrosie.mp3', 'kids'),
(9, 'Hey Mickey', 'kids_music80_heymickey.jpg', 'Toni Basil', '1981', 'kids_music80_heymickye.mp3', 'kids'),
(10, 'Barney\'s Favorites, Volume 1', 'kids_music90_barneysfavourites.jpg', 'Barney', '1993', 'kids_music90_barneysfavourites.mp3', 'kids');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tvs`
--

DROP TABLE IF EXISTS `tbl_tvs`;
CREATE TABLE IF NOT EXISTS `tbl_tvs` (
  `tvs_id` int(11) NOT NULL AUTO_INCREMENT,
  `tvs_title` varchar(200) NOT NULL,
  `tvs_cover` varchar(200) NOT NULL,
  `tvs_storyline` text NOT NULL,
  `tvs_year` varchar(50) NOT NULL,
  `tvs_trailer` varchar(200) NOT NULL,
  `tvs_category` varchar(20) NOT NULL,
  PRIMARY KEY (`tvs_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tvs`
--

INSERT INTO `tbl_tvs` (`tvs_id`, `tvs_title`, `tvs_cover`, `tvs_storyline`, `tvs_year`, `tvs_trailer`, `tvs_category`) VALUES
(1, 'I Love Lucy', 'adults_tv50_ilovelucy.jpg', 'Naive and ambitious but lacking the skill, Lucy\'s relentless efforts to get into showbiz often lands herself and her husband into trouble.Her neighbours and friends also get entangled in her antics.', '1951-1957', 'adults_tv50_ilovelucy.mp4', 'adults'),
(2, 'Star Trek: The Original Series', 'adults_tv60_startrek.jpg', 'James T Kirk, who is the captain of the Starship Enterprise, explores the whole galaxy with his crew and goes on several adventures as they fight evil forces together.', '1966-1969', 'adults_tv60_startrek.mp4', 'adults'),
(3, 'Bewitched', 'adults_tv70_bewitched.jpg', 'Samantha falls in love with New York ad exec Darrin Stephens and marries him in the first episode of the sitcom. Then Darrin finds out that his new bride is one of a secret society of powerful witches and warlocks and that a twitch of her nose brings magic results. Thoroughly befuddled, Darrin makes her promise never to use her powers. She agrees and tries to settle into being the perfect suburban housewife. Her mother, Endora, however, has a different agenda. She hates that Samantha has married a mortal and continually tries to break them up. Sam\'s other spellbinding friends and family pop in and out of the Stephens household as Sam tries (and most of the time fails) to live without magic.', '1964-1972', 'adults_tv70_bewitched.mp4', 'adults'),
(4, 'Full House', 'adults_tv80_fullhouse.jpg', 'Danny is a widower who is raising his three little girls after the death of his wife. But he has help from his musician brother-in-law, Jesse Katsopolis, and his best friend, comedian Joey Gladstone.', '1987-1995', 'adults_tv80_fullhouse.mp4', 'adults'),
(5, 'Dharma & Greg', 'adults_tv90_Dharmaandgreg.jpg', 'Despite their opposite personalities, Dharma, a free-spirited yoga instructor, and Greg, a conservative lawyer, get married after their first date. Their contradictory views create comical situations.', '1997-2002', 'adults_tv90_Dharmaandgreg.mp4', 'adults'),
(6, 'Lassie', 'kids_tv_50_lassie.jpg', 'Lassie is a fictional female Rough Collie dog, and is featured in a short story by Eric Knight that was later expanded to a full-length novel called Lassie Come-Home.', '1954-1974', 'kids_tv_50_lassie.mp4', 'kids'),
(7, 'The Flintstones', 'kids_tv60_flintstones.jpg', 'Fred Flintsone, a modern stone-age man, always finds himself thrown into a series of misadventures.', '1960-1966', 'kids_tv60_flintstones.mp4', 'kids'),
(8, 'New Zoo Revue', 'kids_tv70_newzoorevue.jpg', 'Characters learn life lessons through songs, dances and jokes.', '1972-1977', 'kids_tv70_newzoorevue.mp4', 'kids'),
(9, 'The Trap Door', 'kids_tv80_trapdoor.jpg', 'The escapades of loveable monsters that live in an old castle with a mysterious trapdoor.', '1984-1990', 'kids_tv80_trapdoor.mp4', 'kids'),
(10, 'Gargoyles', 'kids_tv90_gargolyesr.jpg', 'The Manhattan Clan now has to deal with a city that knows about them and fears them.', '1994-1997', 'kids_tv90_gargolyesr.mp4', 'kids');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_fname` varchar(400) NOT NULL,
  `user_name` varchar(400) NOT NULL,
  `user_pass` varchar(200) NOT NULL,
  `user_email` varchar(400) NOT NULL,
  `user_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_ip` varchar(200) NOT NULL,
  `user_avatar` varchar(200) DEFAULT NULL,
  `user_access` int(20) DEFAULT NULL,
  `user_admin` int(1) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_fname`, `user_name`, `user_pass`, `user_email`, `user_date`, `user_ip`, `user_avatar`, `user_access`, `user_admin`) VALUES
(1, 'Ryoko', 'user1', 'user1', 'oka_r@fanshaweonline.ca', '2021-04-13 04:19:50', '::1', 'avatar4.jpg', NULL, 1),
(2, 'User2', 'user2', 'user2', 'test@test.ca', '2021-04-16 00:26:34', '2', 'avatar0.jpg', NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
