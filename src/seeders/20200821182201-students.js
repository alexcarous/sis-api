module.exports = {
  up: (queryInterface) =>
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    queryInterface.bulkInsert(
      "Students",
      [
        {
          id: 1,
          uid: "SL0100101200001", // SL01200001 =  SL+ num
          num: "01200001", // 01200001 = schoolid + registration year + autoincrementing
          firstname: "Brandie",
          lastname: "Demougeot",
          gender: "Male",
          dateofbirth: "2000-02-22",
          previousSchool: "Gay",
          previousType: "Private School",
        },
        {
          id: 2,
          uid: "SL0100102200002",
          num: "02200002",
          firstname: "Brenn",
          lastname: "Churchin",
          gender: "Male",
          dateofbirth: "2000-01-22",
          previousSchool: "Callida",
          previousType: "Private School",
        },
        {
          id: 3,
          uid: "SL0100103200003",
          num: "03200003",
          firstname: "Shanda",
          lastname: "Landsborough",
          gender: "Male",
          dateofbirth: "1999-02-22",
          previousSchool: "Jerrie",
          previousType: "Private School",
        },
        {
          id: 4,
          uid: "SL0100104200004",
          num: "04200004",
          firstname: "Fenelia",
          lastname: "Umbert",
          gender: "Male",
          dateofbirth: "1995-01-22",
          previousSchool: "Melanie",
          previousType: "Private School",
        },
        {
          id: 5,
          uid: "SL0100105200005",
          num: "05200005",
          firstname: "Robers",
          lastname: "Rowantree",
          gender: "Male",
          dateofbirth: "1996-02-22",
          previousSchool: "Faydra",
          previousType: "Private School",
        },
        {
          id: 6,
          uid: "SR0200206200006",
          num: "06200006",
          firstname: "Gracia",
          lastname: "Lourens",
          gender: "Male",
          dateofbirth: "1998-02-22",
          previousSchool: "Dorette",
          previousType: "Private School",
        },
        {
          id: 7,
          uid: "SR0200207200007",
          num: "07200007",
          firstname: "Sheena",
          lastname: "Frede",
          gender: "Female",
          dateofbirth: "1998-05-22",
          previousSchool: "Millicent",
          previousType: "Government School",
        },
        {
          id: 8,
          uid: "SR0200208200008",
          num: "08200008",
          firstname: "Neile",
          lastname: "Mattke",
          gender: "Male",
          dateofbirth: "1996-03-22",
          previousSchool: "Petra",
          previousType: "Government School",
        },
        {
          id: 9,
          uid: "SR0200209200009",
          num: "09200009",
          firstname: "Adair",
          lastname: "Sainter",
          gender: "Male",
          dateofbirth: "1996-03-25",
          previousSchool: "Kitty",
          previousType: "Government School",
        },
        {
          id: 10,
          uid: "SR0200210200010",
          num: "10200010",
          firstname: "Nesta",
          lastname: "Jost",
          gender: "Male",
          dateofbirth: "1996-04-22",
          previousSchool: "Lizette",
          previousType: "Government School",
        },
        {
          id: 11,
          uid: "SR0200211200011",
          num: "11200011",
          firstname: "Constantine",
          lastname: "Brumby",
          gender: "Male",
          dateofbirth: "1996-03-25",
          previousSchool: "Madel",
          previousType: "NGO School",
        },
        {
          id: 12,
          uid: "SR0200211200011",
          num: "12200012",
          firstname: "Valeda",
          lastname: "Romagosa",
          gender: "Male",
          dateofbirth: "1996-05-22",
          previousSchool: "Alexandrina",
          previousType: "NGO School",
        },
        {
          id: 13,
          uid: "SR0200213200013",
          num: "13200013",
          firstname: "Marijo",
          lastname: "Karmel",
          gender: "Male",
          dateofbirth: "1996-05-22",
          previousSchool: "Jobi",
          previousType: "NGO School",
        },
        {
          id: 14,
          uid: "SR0200214200014",
          num: "14200014",
          firstname: "Kelbee",
          lastname: "Gawthrop",
          gender: "Male",
          dateofbirth: "1998-03-22",
          previousSchool: "Morena",
          previousType: "NGO School",
        },
        {
          id: 15,
          uid: "SR0200215200015",
          num: "15200015",
          firstname: "Guntar",
          lastname: "Fealey",
          gender: "Male",
          dateofbirth: "1996-03-26",
          previousSchool: "Sarene",
          previousType: "NGO School",
        },
        {
          id: 16,
          uid: "SR0200216200016",
          num: "16200016",
          firstname: "Corby",
          lastname: "Heazel",
          gender: "Male",
          dateofbirth: "1996-12-26",
          previousSchool: "Rosalynd",
          previousType: "NGO School",
        },
        {
          id: 17,
          uid: "SR0200217200017",
          num: "17200017",
          firstname: "Ruttger",
          lastname: "Farington",
          gender: "Male",
          dateofbirth: "1996-12-22",
          previousSchool: "Bobette",
          previousType: "NGO School",
        },
        {
          id: 18,
          uid: "SR0200218200018",
          num: "18200018",
          firstname: "Filberto",
          lastname: "Setterfield",
          gender: "Male",
          dateofbirth: "1996-12-22",
          previousSchool: "Xena",
          previousType: "Church/Mosque/Mission School",
        },
        {
          id: 19,
          uid: "SR0200219200019",
          num: "19200019",
          firstname: "Dolley",
          lastname: "Pleaden",
          gender: "Male",
          dateofbirth: "1996-12-22",
          previousSchool: "Loutitia",
          previousType: "Church/Mosque/Mission School",
        },
        {
          id: 20,
          uid: "SR0200220200020",
          num: "20200020",
          firstname: "Yves",
          lastname: "Gatheridge",
          gender: "Male",
          dateofbirth: "1996-12-22",
          previousSchool: "Emmie",
          previousType: "Church/Mosque/Mission School",
        },
        {
          id: 21,
          uid: "SR0200221200021",
          num: "21200021",
          firstname: "Claribel",
          lastname: "Toffanelli",
          gender: "Female",
          dateofbirth: "1996-03-22",
          previousSchool: "Lacey",
          previousType: "Church/Mosque/Mission School",
        },
        {
          id: 22,
          uid: "SR0200222200022",
          num: "22200022",
          firstname: "Fax",
          lastname: "Patel",
          gender: "Female",
          dateofbirth: "1996-11-22",
          previousSchool: "Darcie",
          previousType: "Church/Mosque/Mission School",
        },
        {
          id: 23,
          uid: "SR0200223200023",
          num: "23200023",
          firstname: "Eachelle",
          lastname: "Bauldrey",
          gender: "Female",
          dateofbirth: "1996-11-22",
          previousSchool: "Lane",
          previousType: "Church/Mosque/Mission School",
        },
        {
          id: 24,
          uid: "SR0200224200024",
          num: "24200024",
          firstname: "Christi",
          lastname: "Maven",
          gender: "Female",
          dateofbirth: "1996-11-22",
          previousSchool: "Rosita",
          previousType: "Church/Mosque/Mission School",
        },
        {
          id: 25,
          uid: "SR0200225200025",
          num: "25200025",
          firstname: "Mile",
          lastname: "Collingwood",
          gender: "Female",
          dateofbirth: "1996-10-22",
          previousSchool: "Harmony",
          previousType: "Church/Mosque/Mission School",
        },
        {
          id: 26,
          uid: "SR0200226200026",
          num: "26200026",
          firstname: "Carie",
          lastname: "MacKeever",
          gender: "Female",
          dateofbirth: "1996-11-22",
          previousSchool: "Vere",
          previousType: "Church/Mosque/Mission School",
        },
        {
          id: 27,
          uid: "SR0200227200027",
          num: "27200027",
          firstname: "Trumaine",
          lastname: "Labbez",
          gender: "Female",
          dateofbirth: "1996-11-22",
          previousSchool: "Tierney",
          previousType: "Church/Mosque/Mission School",
        },
        {
          id: 28,
          uid: "SR0200228200028",
          num: "28200028",
          firstname: "Lyle",
          lastname: "Marvell",
          gender: "Female",
          dateofbirth: "1996-02-22",
          previousSchool: "Isis",
          previousType: "Government School",
        },
        {
          id: 29,
          uid: "SR0200229200029",
          num: "29200029",
          firstname: "Patricia",
          lastname: "Wharfe",
          gender: "Female",
          dateofbirth: "1996-06-22",
          previousSchool: "Katrinka",
          previousType: "Government School",
        },
        {
          id: 30,
          uid: "SR0200230200030",
          num: "30200030",
          firstname: "Rochell",
          lastname: "Lauchlan",
          gender: "Female",
          dateofbirth: "1996-07-22",
          previousSchool: "Alta",
          previousType: "Government School",
        },
        {
          id: 31,
          uid: "SR0200231200031",
          num: "31200031",
          firstname: "Juieta",
          lastname: "Rowesby",
          gender: "Female",
          dateofbirth: "1996-05-22",
          previousSchool: "Asia",
          previousType: "Government School",
        },
        {
          id: 32,
          uid: "SR0200232200032",
          num: "32200032",
          firstname: "Tiertza",
          lastname: "Middas",
          gender: "Female",
          dateofbirth: "1996-09-22",
          previousSchool: "Shirlee",
          previousType: "Government School",
        },
        {
          id: 33,
          uid: "SR0200233200033",
          num: "33200033",
          firstname: "Stephana",
          lastname: "Pacey",
          gender: "Female",
          dateofbirth: "1996-05-22",
          previousSchool: "Virgie",
          previousType: "Government School",
        },
        {
          id: 34,
          uid: "SR0200234200034",
          num: "34200034",
          firstname: "Leone",
          lastname: "Behne",
          gender: "Female",
          dateofbirth: "1996-09-22",
          previousSchool: "Selia",
          previousType: "Government School",
        },
        {
          id: 35,
          uid: "SR0200235200035",
          num: "35200035",
          firstname: "Kent",
          lastname: "Ballinghall",
          gender: "Female",
          dateofbirth: "1996-05-22",
          previousSchool: "Petronella",
          previousType: "Government School",
        },
        {
          id: 36,
          uid: "SR0200236200036",
          num: "36200036",
          firstname: "Torry",
          lastname: "Lampens",
          gender: "Female",
          dateofbirth: "1996-05-22",
          previousSchool: "Fawne",
          previousType: "Government School",
        },
        {
          id: 37,
          uid: "SR0200237200037",
          num: "37200037",
          firstname: "Errick",
          lastname: "Jumont",
          gender: "Female",
          dateofbirth: "1996-03-22",
          previousSchool: "Jermaine",
          previousType: "Government School",
        },
        {
          id: 38,
          uid: "SR0200238200038",
          num: "38200038",
          firstname: "Thaine",
          lastname: "Weben",
          gender: "Female",
          dateofbirth: "1996-03-22",
          previousSchool: "Dianemarie",
          previousType: "Government School",
        },
        {
          id: 39,
          uid: "SR0200239200039",
          num: "39200039",
          firstname: "Harcourt",
          lastname: "Simonsson",
          gender: "Female",
          dateofbirth: "1996-03-22",
          previousSchool: "Gilberta",
          previousType: "Government School",
        },
        {
          id: 40,
          uid: "SR0200240200040",
          num: "40200040",
          firstname: "Phineas",
          lastname: "Shirrell",
          gender: "Female",
          dateofbirth: "1996-03-22",
          previousSchool: "Marillin",
          previousType: "Government School",
        },
        {
          id: 41,
          uid: "SR0200241200041",
          num: "41200041",
          firstname: "Sharia",
          lastname: "Chasmer",
          gender: "Female",
          dateofbirth: "1996-03-22",
          previousSchool: "Emelia",
          previousType: "Government School",
        },
        {
          id: 42,
          uid: "SR0200242200042",
          num: "42200042",
          firstname: "Cooper",
          lastname: "Stuckey",
          gender: "Female",
          dateofbirth: "1996-03-22",
          previousSchool: "Marlo",
          previousType: "Government School",
        },
        {
          id: 43,
          uid: "SR0200243200043",
          num: "43200043",
          firstname: "Barbee",
          lastname: "Summerill",
          gender: "Female",
          dateofbirth: "1996-03-22",
          previousSchool: "Valentia",
          previousType: "Government School",
        },
        {
          id: 44,
          uid: "SR0200244200044",
          num: "44200044",
          firstname: "Sinclare",
          lastname: "Aslott",
          gender: "Female",
          dateofbirth: "1996-03-22",
          previousSchool: "Chlo",
          previousType: "Government School",
        },
        {
          id: 45,
          uid: "SR0200245200045",
          num: "45200045",
          firstname: "Teirtza",
          lastname: "Krug",
          gender: "Female",
          dateofbirth: "1996-03-22",
          previousSchool: "Perl",
          previousType: "Government School",
        },
        {
          id: 46,
          uid: "SR0200246200046",
          num: "46200046",
          firstname: "Bathsheba",
          lastname: "Ferriday",
          gender: "Female",
          dateofbirth: "1996-03-22",
          previousSchool: "Laraine",
          previousType: "Government School",
        },
        {
          id: 47,
          uid: "SR0200247200047",
          num: "47200047",
          firstname: "Tera",
          lastname: "Fossey",
          gender: "Female",
          dateofbirth: "1996-03-22",
          previousSchool: "Cyndy",
          previousType: "Private School",
        },
        {
          id: 48,
          uid: "SR0200248200048",
          num: "48200048",
          firstname: "Renaldo",
          lastname: "Lanktree",
          gender: "Male",
          dateofbirth: "1996-03-22",
          previousSchool: "Lauryn",
          previousType: "Private School",
        },
        {
          id: 49,
          uid: "SR0200249200049",
          num: "49200049",
          firstname: "Patin",
          lastname: "Vasenin",
          gender: "Male",
          dateofbirth: "1996-03-22",
          previousSchool: "Dela",
          previousType: "Private School",
        },
        {
          id: 50,
          uid: "SR0200250200050",
          num: "50200050",
          firstname: "Gunner",
          lastname: "Caudell",
          gender: "Male",
          dateofbirth: "1996-03-22",
          previousSchool: "Deeann",
          previousType: "Private School",
        },
      ],
      {}
    ),

  down: (queryInterface) =>
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    queryInterface.bulkDelete("Students", null, {}),
};
