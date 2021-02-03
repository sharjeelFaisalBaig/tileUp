-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 05, 2021 at 05:41 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mycoursework`
--

-- --------------------------------------------------------

--
-- Table structure for table `orderform`
--

CREATE TABLE `orderform` (
  `orderId` int(11) NOT NULL,
  `orderPaperType` varchar(30) NOT NULL,
  `orderSelectSubject` varchar(30) NOT NULL,
  `orderAcedemicLevel` varchar(30) NOT NULL,
  `orderTopic` varchar(24) NOT NULL,
  `orderPaperInstruction` varchar(100) NOT NULL,
  `orderReferencingStyle` varchar(30) NOT NULL,
  `orderSource` varchar(30) NOT NULL,
  `orderFileAttach` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`orderFileAttach`)),
  `orderPaperStandard` varchar(30) NOT NULL,
  `orderNumberPages` varchar(30) NOT NULL,
  `orderPreferedLanguage` varchar(30) NOT NULL,
  `orderPreferedStyle` varchar(30) NOT NULL,
  `orderDeadline` varchar(30) NOT NULL,
  `ordererName` varchar(27) NOT NULL,
  `ordererEmail` varchar(20) NOT NULL,
  `ordererphone` varchar(20) NOT NULL,
  `ordereLocation` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderform`
--

INSERT INTO `orderform` (`orderId`, `orderPaperType`, `orderSelectSubject`, `orderAcedemicLevel`, `orderTopic`, `orderPaperInstruction`, `orderReferencingStyle`, `orderSource`, `orderFileAttach`, `orderPaperStandard`, `orderNumberPages`, `orderPreferedLanguage`, `orderPreferedStyle`, `orderDeadline`, `ordererName`, `ordererEmail`, `ordererphone`, `ordereLocation`) VALUES
(9, 'Speech/Presentation', 'Computer science', 'High School', 'sadsad', 'sadsad', 'APA Referencing', '1', '[{\"filePath\":\"C:\\xampp\\tmp\\phpF004.tmp\",\"fileName\":\"imageedit_6_2612483973.png\"},{\"filePath\":\"C:\\xampp\\tmp\\phpF015.tmp\",\"fileName\":\"Reem_Kufi.zip\"}]', 'Premium Quality', '1 Page / 250 Words', 'on', 'Double Spaced', '1 Day', 'Sharjeel Faisal', 'sb-4hc253449230@pers', '2135096995', 'Los Angeles, California, United States'),
(14, 'Essay writing', 'Business', 'High School', 'Hello ', 'Hello ', 'APA Referencing', '1', '[{\"filePath\":\"C:\\xampp\\tmp\\php908D.tmp\",\"fileName\":\"Applications Features.docx\"}]', 'Premium Quality', '2 Pages / 500 Words', 'English (U.K.)', 'Double Spaced', '1 Day', 'Sharjeel Faisal', 'sb-4hc253449230@pers', '2135096995', 'null, null, United States'),
(15, 'Essay writing', 'Business', 'High School', 'Hello ', 'Hello ', 'APA Referencing', '1', '[{\"filePath\":\"C:\\xampp\\tmp\\php908D.tmp\",\"fileName\":\"Applications Features.docx\"}]', 'Premium Quality', '2 Pages / 500 Words', 'English (U.K.)', 'Double Spaced', '1 Day', 'Sharjeel Faisal', 'sb-4hc253449230@pers', '2135096995', 'Los Angeles, California, United States'),
(16, 'Essay writing', 'Business', 'High School', 'Hello ', 'Hello ', 'APA Referencing', '1', '[{\"filePath\":\"C:\\xampp\\tmp\\php908D.tmp\",\"fileName\":\"Applications Features.docx\"}]', 'Premium Quality', '2 Pages / 500 Words', 'English (U.K.)', 'Double Spaced', '1 Day', 'Sharjeel Faisal', 'sb-4hc253449230@pers', '2135096995', 'Los Angeles, California, United States');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orderform`
--
ALTER TABLE `orderform`
  ADD PRIMARY KEY (`orderId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orderform`
--
ALTER TABLE `orderform`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
