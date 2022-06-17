import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import sortBy from "lodash.sortby";

import { useState } from "react";

const appointments = [
  {
    _id: "62acac45548c58ef88b7bcba",
    time: "16:50",
    firstName: "Lucas",
    lastName: "Barnett",
    bookingReference: 85793983,
    nhsNumber: 60347882,
    special: "under-16-overseas",
    dateOfBirth: "1996-05-28T02:14:53",
  },
  {
    _id: "62acac459522af70552a9bb4",
    time: "15:25",
    firstName: "Cain",
    lastName: "Berg",
    bookingReference: 42587170,
    nhsNumber: 86382022,
    special: "hsc-worker",
    dateOfBirth: "1977-06-11T11:41:52",
  },
  {
    _id: "62acac451497b06644cad511",
    time: "11:15",
    firstName: "Charles",
    lastName: "Walker",
    bookingReference: 26034922,
    nhsNumber: 51135314,
    special: "under-16-overseas",
    dateOfBirth: "1936-12-05T05:03:12",
  },
  {
    _id: "62acac45423a33dbc860c502",
    time: "09:10",
    firstName: "Ware",
    lastName: "Wolf",
    bookingReference: 45438844,
    nhsNumber: 10972477,
    special: "hsc-worker",
    dateOfBirth: "1963-12-26T02:50:43",
  },
  {
    _id: "62acac4563641f3eb155859e",
    time: "14:25",
    firstName: "Deanna",
    lastName: "Cleveland",
    bookingReference: 63259127,
    nhsNumber: 77358665,
    special: "immunosupressed",
    dateOfBirth: "1971-08-13T06:09:14",
  },
  {
    _id: "62acac456eb237e461d2c083",
    time: "11:35",
    firstName: "Josie",
    lastName: "Hess",
    bookingReference: 11568830,
    nhsNumber: 88001033,
    special: "under-16-overseas",
    dateOfBirth: "1986-03-03T07:18:31",
  },
  {
    _id: "62acac457ab17ccf23e77399",
    time: "14:05",
    firstName: "Jacklyn",
    lastName: "Kramer",
    bookingReference: 38585322,
    nhsNumber: 39057525,
    special: "no-additional-checks",
    dateOfBirth: "1960-12-13T04:10:50",
  },
  {
    _id: "62acac455b1cb626ea8782db",
    time: "18:20",
    firstName: "Benjamin",
    lastName: "Lawrence",
    bookingReference: 94238428,
    nhsNumber: 44229739,
    special: "no-additional-checks",
    dateOfBirth: "1986-06-29T09:28:50",
  },
  {
    _id: "62acac453ca03f9d4017f6b9",
    time: "17:40",
    firstName: "Kim",
    lastName: "Johnston",
    bookingReference: 90874054,
    nhsNumber: 72627595,
    special: "no-additional-checks",
    dateOfBirth: "1947-03-06T04:30:31",
  },
  {
    _id: "62acac45959121652218fabc",
    time: "15:10",
    firstName: "Steele",
    lastName: "Nicholson",
    bookingReference: 52192164,
    nhsNumber: 78995276,
    special: "no-additional-checks",
    dateOfBirth: "1963-07-11T03:10:36",
  },
  {
    _id: "62acac45443187a755c26bd0",
    time: "15:45",
    firstName: "Burnett",
    lastName: "Ratliff",
    bookingReference: 94364837,
    nhsNumber: 52990820,
    special: "immunosupressed",
    dateOfBirth: "1968-04-22T07:13:17",
  },
  {
    _id: "62acac457427cc966b77b94d",
    time: "09:15",
    firstName: "Wagner",
    lastName: "Hyde",
    bookingReference: 10302681,
    nhsNumber: 95946416,
    special: "no-additional-checks",
    dateOfBirth: "1963-11-21T04:45:13",
  },
  {
    _id: "62acac45ed4dca17e8e361dd",
    time: "12:00",
    firstName: "Veronica",
    lastName: "Mcgee",
    bookingReference: 38251618,
    nhsNumber: 17393037,
    special: "no-additional-checks",
    dateOfBirth: "2008-05-13T09:41:42",
  },
  {
    _id: "62acac45c50c00d528842844",
    time: "16:40",
    firstName: "Dina",
    lastName: "Avila",
    bookingReference: 16459353,
    nhsNumber: 89556443,
    special: "no-additional-checks",
    dateOfBirth: "1962-12-28T06:15:19",
  },
  {
    _id: "62acac45f1bb02c1802e69d9",
    time: "16:35",
    firstName: "Knapp",
    lastName: "Olsen",
    bookingReference: 57476853,
    nhsNumber: 50521184,
    special: "under-16-overseas",
    dateOfBirth: "1942-02-04T10:35:34",
  },
  {
    _id: "62acac45ceba34980a2790cb",
    time: "14:45",
    firstName: "House",
    lastName: "Gates",
    bookingReference: 50739097,
    nhsNumber: 48882876,
    special: "hsc-worker",
    dateOfBirth: "2004-01-19T12:27:15",
  },
  {
    _id: "62acac45815be21e308f1b4c",
    time: "09:00",
    firstName: "Luann",
    lastName: "Flores",
    bookingReference: 21782633,
    nhsNumber: 71480326,
    special: "immunosupressed",
    dateOfBirth: "1941-07-03T04:27:00 -02:00",
  },
  {
    _id: "62acac45518ca28750a2963e",
    time: "11:45",
    firstName: "Nellie",
    lastName: "Barnes",
    bookingReference: 94541266,
    nhsNumber: 41832377,
    special: "immunosupressed",
    dateOfBirth: "2011-10-26T01:42:00",
  },
  {
    _id: "62acac459814330cd781cbd1",
    time: "15:30",
    firstName: "Trisha",
    lastName: "Hutchinson",
    bookingReference: 91785353,
    nhsNumber: 28041256,
    special: "hsc-worker",
    dateOfBirth: "1983-08-31T09:44:33",
  },
  {
    _id: "62acac4554eb3c95e0fdaeaf",
    time: "15:40",
    firstName: "Jacqueline",
    lastName: "Carroll",
    bookingReference: 34415650,
    nhsNumber: 26138986,
    special: "immunosupressed",
    dateOfBirth: "2000-05-30T11:44:17",
  },
  {
    _id: "62acac451a5856a68164094b",
    time: "14:35",
    firstName: "Corrine",
    lastName: "Santana",
    bookingReference: 21372040,
    nhsNumber: 53977855,
    special: "under-16-overseas",
    dateOfBirth: "1980-10-09T04:18:09",
  },
  {
    _id: "62acac45f66fb40c5991d75d",
    time: "09:35",
    firstName: "Jennings",
    lastName: "Joyce",
    bookingReference: 75973311,
    nhsNumber: 49344106,
    special: "no-additional-checks",
    dateOfBirth: "2022-04-25T09:12:49",
  },
  {
    _id: "62acac4576c099ec2492d6f5",
    time: "18:05",
    firstName: "Woodard",
    lastName: "Sutton",
    bookingReference: 35612818,
    nhsNumber: 69328046,
    special: "hsc-worker",
    dateOfBirth: "2000-07-31T04:29:03",
  },
  {
    _id: "62acac45d16e575d9f555f4a",
    time: "09:10",
    firstName: "Yolanda",
    lastName: "Bass",
    bookingReference: 25750382,
    nhsNumber: 75363870,
    special: "immunosupressed",
    dateOfBirth: "1992-01-29T09:54:45",
  },
  {
    _id: "62acac45790bb63595234781",
    time: "14:45",
    firstName: "Bernadette",
    lastName: "Goodman",
    bookingReference: 73139788,
    nhsNumber: 65361754,
    special: "immunosupressed",
    dateOfBirth: "1975-12-20T08:38:47",
  },
  {
    _id: "62acac45481998e51ba1aa07",
    time: "18:50",
    firstName: "Lorraine",
    lastName: "Riley",
    bookingReference: 71208887,
    nhsNumber: 52288103,
    special: "no-additional-checks",
    dateOfBirth: "1985-04-17T01:21:40",
  },
  {
    _id: "62acac45dab6c89463db2a8d",
    time: "18:35",
    firstName: "Watkins",
    lastName: "Macdonald",
    bookingReference: 10580382,
    nhsNumber: 47293631,
    special: "hsc-worker",
    dateOfBirth: "2003-04-24T12:24:52",
  },
  {
    _id: "62acac45d595439a538fcaf8",
    time: "14:00",
    firstName: "Freda",
    lastName: "Lamb",
    bookingReference: 20733696,
    nhsNumber: 95607741,
    special: "hsc-worker",
    dateOfBirth: "1960-05-30T09:41:03",
  },
  {
    _id: "62acac459b7c4e8bf1dd4151",
    time: "16:40",
    firstName: "Hodges",
    lastName: "Maynard",
    bookingReference: 68964107,
    nhsNumber: 14317388,
    special: "immunosupressed",
    dateOfBirth: "1990-04-07T01:51:24",
  },
  {
    _id: "62acac45b162544970f621aa",
    time: "18:05",
    firstName: "Ladonna",
    lastName: "Craig",
    bookingReference: 29285839,
    nhsNumber: 42546640,
    special: "immunosupressed",
    dateOfBirth: "1931-11-05T05:45:40",
  },
  {
    _id: "62acac455a3210f7a584056d",
    time: "15:40",
    firstName: "Dotson",
    lastName: "Koch",
    bookingReference: 46218949,
    nhsNumber: 23079300,
    special: "no-additional-checks",
    dateOfBirth: "1993-04-13T09:09:39",
  },
  {
    _id: "62acac453587968b3b36a335",
    time: "12:30",
    firstName: "Wilma",
    lastName: "Wynn",
    bookingReference: 99447883,
    nhsNumber: 63728835,
    special: "immunosupressed",
    dateOfBirth: "2011-10-25T07:37:42",
  },
  {
    _id: "62acac4569f7f25d92766873",
    time: "09:45",
    firstName: "Horne",
    lastName: "Moss",
    bookingReference: 75928053,
    nhsNumber: 47682642,
    special: "immunosupressed",
    dateOfBirth: "1933-03-29T12:32:52",
  },
  {
    _id: "62acac452ae43be7dfa92f6d",
    time: "18:30",
    firstName: "Mcknight",
    lastName: "Wall",
    bookingReference: 80347598,
    nhsNumber: 80099343,
    special: "no-additional-checks",
    dateOfBirth: "1998-04-04T01:19:01",
  },
  {
    _id: "62acac452a7edd0eff9d2941",
    time: "14:50",
    firstName: "Conner",
    lastName: "Robles",
    bookingReference: 92210462,
    nhsNumber: 18523749,
    special: "hsc-worker",
    dateOfBirth: "1988-06-15T10:00:48",
  },
  {
    _id: "62acac4570765b36ca88117d",
    time: "12:10",
    firstName: "Sheri",
    lastName: "Morse",
    bookingReference: 27078749,
    nhsNumber: 88919417,
    special: "immunosupressed",
    dateOfBirth: "1986-02-25T09:45:14",
  },
  {
    _id: "62acac45f93c933d5f8bf03e",
    time: "14:30",
    firstName: "Burns",
    lastName: "Compton",
    bookingReference: 93934741,
    nhsNumber: 77356310,
    special: "under-16-overseas",
    dateOfBirth: "1982-09-25T02:31:43",
  },
  {
    _id: "62acac45bf55249370b3f659",
    time: "14:25",
    firstName: "Savannah",
    lastName: "Sosa",
    bookingReference: 49156529,
    nhsNumber: 71920224,
    special: "under-16-overseas",
    dateOfBirth: "1978-09-08T07:15:56",
  },
  {
    _id: "62acac4545052f43f6deb5c8",
    time: "18:50",
    firstName: "Stone",
    lastName: "Morgan",
    bookingReference: 66996968,
    nhsNumber: 50391157,
    special: "under-16-overseas",
    dateOfBirth: "1945-07-04T09:24:09 -02:00",
  },
  {
    _id: "62acac4503dc2265affc8079",
    time: "10:35",
    firstName: "Maryellen",
    lastName: "Murphy",
    bookingReference: 94669385,
    nhsNumber: 68890674,
    special: "immunosupressed",
    dateOfBirth: "1949-01-30T07:44:47",
  },
  {
    _id: "62acac452d7d1c3274408707",
    time: "14:00",
    firstName: "Merrill",
    lastName: "Tyson",
    bookingReference: 73777619,
    nhsNumber: 32150380,
    special: "immunosupressed",
    dateOfBirth: "1949-10-08T10:55:21",
  },
  {
    _id: "62acac458103b64122e87fa5",
    time: "13:15",
    firstName: "Best",
    lastName: "Holt",
    bookingReference: 68993067,
    nhsNumber: 97433482,
    special: "hsc-worker",
    dateOfBirth: "1942-11-19T11:58:41",
  },
  {
    _id: "62acac45b42cb48bdae745dd",
    time: "14:35",
    firstName: "Melinda",
    lastName: "Cole",
    bookingReference: 24648841,
    nhsNumber: 52230543,
    special: "under-16-overseas",
    dateOfBirth: "2003-02-27T02:54:26",
  },
  {
    _id: "62acac450717e189b357f24b",
    time: "14:05",
    firstName: "Karyn",
    lastName: "Benton",
    bookingReference: 76364037,
    nhsNumber: 81474368,
    special: "under-16-overseas",
    dateOfBirth: "1987-04-17T12:55:27",
  },
  {
    _id: "62acac45d08de75d90ca8a45",
    time: "09:15",
    firstName: "Lenora",
    lastName: "Alvarado",
    bookingReference: 53162026,
    nhsNumber: 42286688,
    special: "under-16-overseas",
    dateOfBirth: "1985-11-15T05:59:24",
  },
  {
    _id: "62acac45aad50f219aabc77a",
    time: "13:30",
    firstName: "Morris",
    lastName: "Mcdaniel",
    bookingReference: 87180274,
    nhsNumber: 24417965,
    special: "under-16-overseas",
    dateOfBirth: "1971-05-21T12:26:57",
  },
  {
    _id: "62acac45334ee7894a1c6707",
    time: "15:30",
    firstName: "Downs",
    lastName: "Hahn",
    bookingReference: 13603308,
    nhsNumber: 90890155,
    special: "under-16-overseas",
    dateOfBirth: "1976-08-01T12:03:14",
  },
  {
    _id: "62acac45f15ee45a68f46432",
    time: "16:35",
    firstName: "Beth",
    lastName: "Mcneil",
    bookingReference: 85814772,
    nhsNumber: 82730325,
    special: "hsc-worker",
    dateOfBirth: "1975-07-31T01:22:31",
  },
  {
    _id: "62acac45f1bbd37109d301d9",
    time: "14:10",
    firstName: "Whitney",
    lastName: "Bullock",
    bookingReference: 42631424,
    nhsNumber: 22855389,
    special: "no-additional-checks",
    dateOfBirth: "2006-11-18T06:44:15",
  },
  {
    _id: "62acac456cfd511e2f9a24be",
    time: "10:45",
    firstName: "Rosemary",
    lastName: "Clay",
    bookingReference: 83833395,
    nhsNumber: 94221298,
    special: "under-16-overseas",
    dateOfBirth: "1956-09-05T08:04:54",
  },
  {
    _id: "62acac45c633edf88c5f3ba1",
    time: "12:00",
    firstName: "Geraldine",
    lastName: "Middleton",
    bookingReference: 60439141,
    nhsNumber: 86455462,
    special: "immunosupressed",
    dateOfBirth: "1930-09-21T02:28:33",
  },
  {
    _id: "62acac45154b955eb369fdae",
    time: "16:25",
    firstName: "Phillips",
    lastName: "Herman",
    bookingReference: 92098781,
    nhsNumber: 27079358,
    special: "under-16-overseas",
    dateOfBirth: "1974-02-14T02:23:02",
  },
  {
    _id: "62acac45b42bd7e275caf3c1",
    time: "13:45",
    firstName: "Myrna",
    lastName: "Bentley",
    bookingReference: 47858974,
    nhsNumber: 16377913,
    special: "under-16-overseas",
    dateOfBirth: "2016-12-12T12:09:19",
  },
  {
    _id: "62acac45e1c66deb43f4c321",
    time: "15:55",
    firstName: "Sharp",
    lastName: "Macias",
    bookingReference: 73046709,
    nhsNumber: 78089783,
    special: "under-16-overseas",
    dateOfBirth: "1938-05-26T04:47:46",
  },
  {
    _id: "62acac455a97839002f71077",
    time: "18:00",
    firstName: "Burris",
    lastName: "Pugh",
    bookingReference: 38847413,
    nhsNumber: 48571946,
    special: "no-additional-checks",
    dateOfBirth: "1997-07-12T11:54:31",
  },
  {
    _id: "62acac452081ce7f225dbfda",
    time: "14:40",
    firstName: "Allen",
    lastName: "Dickerson",
    bookingReference: 88456590,
    nhsNumber: 95776975,
    special: "hsc-worker",
    dateOfBirth: "1943-03-22T04:46:02",
  },
  {
    _id: "62acac4541ef9f92ce122b36",
    time: "16:25",
    firstName: "Gross",
    lastName: "Long",
    bookingReference: 13939077,
    nhsNumber: 99207029,
    special: "under-16-overseas",
    dateOfBirth: "2011-08-01T11:09:42",
  },
  {
    _id: "62acac455a10661803193fb7",
    time: "16:05",
    firstName: "Maldonado",
    lastName: "Knowles",
    bookingReference: 57852047,
    nhsNumber: 28593100,
    special: "hsc-worker",
    dateOfBirth: "1933-01-19T08:24:18",
  },
  {
    _id: "62acac45e80646931d795221",
    time: "16:15",
    firstName: "Leticia",
    lastName: "Hendrix",
    bookingReference: 43532487,
    nhsNumber: 19628324,
    special: "immunosupressed",
    dateOfBirth: "1978-02-26T06:06:20",
  },
  {
    _id: "62acac450c9882518ef585ce",
    time: "12:15",
    firstName: "Marcia",
    lastName: "Howard",
    bookingReference: 93917509,
    nhsNumber: 29516156,
    special: "no-additional-checks",
    dateOfBirth: "1949-02-28T05:30:42",
  },
  {
    _id: "62acac4524bf9fa4596d069b",
    time: "17:50",
    firstName: "Sanders",
    lastName: "Beach",
    bookingReference: 11167359,
    nhsNumber: 95730319,
    special: "no-additional-checks",
    dateOfBirth: "1964-04-26T09:48:06",
  },
  {
    _id: "62acac4569686717f4aec582",
    time: "11:35",
    firstName: "Elba",
    lastName: "Giles",
    bookingReference: 38309650,
    nhsNumber: 18655674,
    special: "under-16-overseas",
    dateOfBirth: "1990-05-22T11:09:53",
  },
  {
    _id: "62acac4584c76f43e141c22c",
    time: "17:45",
    firstName: "Virgie",
    lastName: "Tanner",
    bookingReference: 49236609,
    nhsNumber: 83980394,
    special: "hsc-worker",
    dateOfBirth: "2013-09-13T05:42:47",
  },
  {
    _id: "62acac459ccfa52e1161d556",
    time: "11:00",
    firstName: "Melva",
    lastName: "Garner",
    bookingReference: 60716336,
    nhsNumber: 60835891,
    special: "hsc-worker",
    dateOfBirth: "2020-12-15T03:29:08",
  },
  {
    _id: "62acac459ab89ae3316bfb00",
    time: "13:55",
    firstName: "Roxie",
    lastName: "Jordan",
    bookingReference: 33108339,
    nhsNumber: 39938660,
    special: "under-16-overseas",
    dateOfBirth: "1982-04-20T05:26:32",
  },
  {
    _id: "62acac455811f7811852e291",
    time: "11:00",
    firstName: "Johnson",
    lastName: "Herring",
    bookingReference: 84125218,
    nhsNumber: 77641957,
    special: "hsc-worker",
    dateOfBirth: "2014-10-11T05:32:14",
  },
  {
    _id: "62acac45288be3590e0ac09d",
    time: "14:00",
    firstName: "Stafford",
    lastName: "Duran",
    bookingReference: 39078233,
    nhsNumber: 73144025,
    special: "no-additional-checks",
    dateOfBirth: "1955-11-28T09:14:53",
  },
  {
    _id: "62acac454e205931e9301241",
    time: "10:20",
    firstName: "Potts",
    lastName: "Serrano",
    bookingReference: 91832832,
    nhsNumber: 44266806,
    special: "immunosupressed",
    dateOfBirth: "1941-10-03T01:15:52",
  },
  {
    _id: "62acac45c6a28520b9e44033",
    time: "18:25",
    firstName: "Moody",
    lastName: "Pacheco",
    bookingReference: 51539460,
    nhsNumber: 23065056,
    special: "no-additional-checks",
    dateOfBirth: "1994-02-28T03:27:17",
  },
  {
    _id: "62acac45a28dc11c87b13ea9",
    time: "10:55",
    firstName: "Bonita",
    lastName: "Patel",
    bookingReference: 19486474,
    nhsNumber: 29394517,
    special: "immunosupressed",
    dateOfBirth: "1955-07-06T03:31:44",
  },
  {
    _id: "62acac455a9ceb2d20318058",
    time: "18:55",
    firstName: "Juanita",
    lastName: "Cote",
    bookingReference: 60017379,
    nhsNumber: 32619239,
    special: "immunosupressed",
    dateOfBirth: "1958-06-08T06:11:02",
  },
  {
    _id: "62acac451fc828d3e9604d15",
    time: "18:15",
    firstName: "Nelson",
    lastName: "Ashley",
    bookingReference: 72828719,
    nhsNumber: 34180897,
    special: "hsc-worker",
    dateOfBirth: "1986-08-23T08:38:54",
  },
  {
    _id: "62acac450c459fc6962ac379",
    time: "18:15",
    firstName: "Kaufman",
    lastName: "Carr",
    bookingReference: 18157835,
    nhsNumber: 56270991,
    special: "hsc-worker",
    dateOfBirth: "1973-04-20T09:00:19",
  },
  {
    _id: "62acac45f1016820d21e70fe",
    time: "09:40",
    firstName: "Cole",
    lastName: "Snyder",
    bookingReference: 13100060,
    nhsNumber: 69869145,
    special: "no-additional-checks",
    dateOfBirth: "1959-05-15T09:34:59",
  },
  {
    _id: "62acac4591034a9f4a39fbe9",
    time: "10:20",
    firstName: "Kline",
    lastName: "Ballard",
    bookingReference: 91529933,
    nhsNumber: 49378072,
    special: "no-additional-checks",
    dateOfBirth: "1984-10-07T09:22:18",
  },
  {
    _id: "62acac450c7f0921c15e5529",
    time: "10:50",
    firstName: "Ross",
    lastName: "Potts",
    bookingReference: 11275084,
    nhsNumber: 30883282,
    special: "immunosupressed",
    dateOfBirth: "1972-06-22T06:26:41",
  },
  {
    _id: "62acac4525fe733a3cf78803",
    time: "09:10",
    firstName: "Lott",
    lastName: "Marks",
    bookingReference: 90882228,
    nhsNumber: 54329982,
    special: "immunosupressed",
    dateOfBirth: "1939-05-16T11:06:50",
  },
  {
    _id: "62acac45c09306183d8a5fde",
    time: "12:55",
    firstName: "Ashley",
    lastName: "Clemons",
    bookingReference: 53150324,
    nhsNumber: 14348929,
    special: "hsc-worker",
    dateOfBirth: "1939-09-14T08:09:20",
  },
  {
    _id: "62acac458a00f6b89cca3d29",
    time: "16:25",
    firstName: "Luisa",
    lastName: "Lane",
    bookingReference: 84622873,
    nhsNumber: 65558594,
    special: "hsc-worker",
    dateOfBirth: "1953-09-24T06:38:35",
  },
  {
    _id: "62acac457012eedf438cf97c",
    time: "13:55",
    firstName: "Lee",
    lastName: "Mcpherson",
    bookingReference: 59624573,
    nhsNumber: 14442506,
    special: "no-additional-checks",
    dateOfBirth: "1962-04-08T04:06:27",
  },
  {
    _id: "62acac45f0e3b610ec15b0c8",
    time: "16:55",
    firstName: "Dorothy",
    lastName: "Moreno",
    bookingReference: 96154905,
    nhsNumber: 24554971,
    special: "immunosupressed",
    dateOfBirth: "1976-06-09T02:41:25",
  },
  {
    _id: "62acac4520e647ddd225d321",
    time: "11:55",
    firstName: "Frieda",
    lastName: "Mann",
    bookingReference: 72636157,
    nhsNumber: 70085320,
    special: "hsc-worker",
    dateOfBirth: "1939-02-05T08:01:04",
  },
  {
    _id: "62acac459c6a0db3e25f39e1",
    time: "17:35",
    firstName: "Kirsten",
    lastName: "Klein",
    bookingReference: 53651272,
    nhsNumber: 21504468,
    special: "no-additional-checks",
    dateOfBirth: "1998-05-26T08:20:12",
  },
  {
    _id: "62acac45d94040ee6a48fd23",
    time: "13:15",
    firstName: "Barrett",
    lastName: "Gaines",
    bookingReference: 41187431,
    nhsNumber: 50845259,
    special: "hsc-worker",
    dateOfBirth: "1939-08-03T09:20:49",
  },
  {
    _id: "62acac452dbb8bca9c9cee09",
    time: "09:40",
    firstName: "Fields",
    lastName: "Burgess",
    bookingReference: 91004451,
    nhsNumber: 26401856,
    special: "under-16-overseas",
    dateOfBirth: "2017-08-13T07:12:38",
  },
  {
    _id: "62acac45c2c61b67a910a9f2",
    time: "11:25",
    firstName: "Monique",
    lastName: "Underwood",
    bookingReference: 72524247,
    nhsNumber: 18480792,
    special: "immunosupressed",
    dateOfBirth: "1993-06-27T07:26:29",
  },
  {
    _id: "62acac45d143653e2797329e",
    time: "13:30",
    firstName: "Robinson",
    lastName: "Santiago",
    bookingReference: 38212203,
    nhsNumber: 34357931,
    special: "hsc-worker",
    dateOfBirth: "2008-07-12T04:15:05",
  },
  {
    _id: "62acac45228d20ddabf6c5a6",
    time: "17:05",
    firstName: "Nola",
    lastName: "Riddle",
    bookingReference: 52404552,
    nhsNumber: 36389458,
    special: "immunosupressed",
    dateOfBirth: "1980-02-19T05:08:08",
  },
  {
    _id: "62acac457e3f297763b7e06e",
    time: "13:20",
    firstName: "Greer",
    lastName: "Booker",
    bookingReference: 73639355,
    nhsNumber: 96053195,
    special: "under-16-overseas",
    dateOfBirth: "1995-11-19T08:19:13",
  },
  {
    _id: "62acac456f63a2a0ca6b590c",
    time: "14:55",
    firstName: "Sonya",
    lastName: "Phillips",
    bookingReference: 11060879,
    nhsNumber: 10698824,
    special: "hsc-worker",
    dateOfBirth: "2016-02-24T05:32:13",
  },
  {
    _id: "62acac45f9850fdba0e18f74",
    time: "14:15",
    firstName: "Chelsea",
    lastName: "Richard",
    bookingReference: 24547742,
    nhsNumber: 21320870,
    special: "hsc-worker",
    dateOfBirth: "1934-10-23T09:54:13",
  },
  {
    _id: "62acac45d46cca3c8027b9b6",
    time: "17:10",
    firstName: "Lynch",
    lastName: "Mclaughlin",
    bookingReference: 86520193,
    nhsNumber: 19853317,
    special: "under-16-overseas",
    dateOfBirth: "2006-05-16T07:36:58",
  },
  {
    _id: "62acac45d2cc83769986907e",
    time: "12:00",
    firstName: "May",
    lastName: "Tyler",
    bookingReference: 89817063,
    nhsNumber: 64223485,
    special: "under-16-overseas",
    dateOfBirth: "1930-03-10T04:38:48",
  },
  {
    _id: "62acac455e243a5042bbeefc",
    time: "09:20",
    firstName: "Latoya",
    lastName: "Combs",
    bookingReference: 62398988,
    nhsNumber: 69933871,
    special: "under-16-overseas",
    dateOfBirth: "1967-09-08T12:17:10",
  },
  {
    _id: "62acac4563215f73f9c53174",
    time: "16:05",
    firstName: "Kelli",
    lastName: "Hunt",
    bookingReference: 31837055,
    nhsNumber: 39469784,
    special: "no-additional-checks",
    dateOfBirth: "2010-10-30T09:17:12",
  },
  {
    _id: "62acac456fb06dcaad966b67",
    time: "16:20",
    firstName: "Santiago",
    lastName: "Mitchell",
    bookingReference: 72279843,
    nhsNumber: 45385186,
    special: "hsc-worker",
    dateOfBirth: "2007-05-08T12:45:01",
  },
  {
    _id: "62acac458d0002c6829530e4",
    time: "17:35",
    firstName: "Lorie",
    lastName: "Burton",
    bookingReference: 47427590,
    nhsNumber: 86133911,
    special: "immunosupressed",
    dateOfBirth: "1948-01-14T01:22:28",
  },
  {
    _id: "62acac45f90c7b644d1896ff",
    time: "17:30",
    firstName: "Edwina",
    lastName: "Kent",
    bookingReference: 52803706,
    nhsNumber: 85620573,
    special: "hsc-worker",
    dateOfBirth: "1991-06-30T09:09:36",
  },
  {
    _id: "62acac45b3a18cf96cee353c",
    time: "17:05",
    firstName: "Carey",
    lastName: "Carney",
    bookingReference: 30919770,
    nhsNumber: 67514337,
    special: "no-additional-checks",
    dateOfBirth: "1963-08-22T11:40:41",
  },
  {
    _id: "62acac45aa92c4dbd3980a7e",
    time: "13:55",
    firstName: "Levy",
    lastName: "Franklin",
    bookingReference: 80834479,
    nhsNumber: 60854287,
    special: "immunosupressed",
    dateOfBirth: "2010-09-03T07:00:13",
  },
];

export function Main() {
  return (
    <>
      <div className="nhsuk-width-container">
        <main className="nhsuk-main-wrapper" id="maincontent" role="main">
          <div className="nhsuk-grid-row">
            <div className="nhsuk-grid-column-two-thirds">
              <Router>
                <Switch>
                  <Route path="/checked-in">
                    <CheckedIn />
                  </Route>
                  <Route path="/check-in">
                    <>
                      <CheckInView />
                    </>
                  </Route>
                  <Route path="/">
                    <h1>Select the person you want to check in</h1>
                    <div className="nhsuk-form-group">
                      <label className="nhsuk-label" for="example">
                        Search by name or booking reference
                      </label>
                      <input
                        className="nhsuk-input nhsuk-u-width-three-quarters"
                        id="example"
                        name="example"
                        type="text"
                      />
                      <br />
                      <br />
                      <button className="nhsuk-button">Search</button>
                      <h2>Today's appointments</h2>
                      <hr />
                    </div>

                    {/* <p>Select the person you wish to check in</p> */}
                    <ul className="nhsuk-list">
                      {sortBy(appointments, ["lastName"]).map((item) => (
                        <Row {...item} />
                      ))}
                    </ul>
                  </Route>
                </Switch>
              </Router>
            </div>
          </div>
        </main>
      </div>
      {/* <Router>
        <h1>Hello</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>

        <Route path="/about">
          <p>about</p>
        </Route>
        <Route path="/users">
          <p>users</p>
        </Route>
        <Route path="/">
          <p>home</p>
        </Route>
      </Router> */}
    </>
  );
}

function Row({ _id, firstName, lastName, special }) {
  return (
    <li className="nhsuk-u-margin-bottom-6">
      <Link to={"/check-in/" + _id} title={special}>
        <b>{lastName}</b>, {firstName}
      </Link>
    </li>
  );
}

function CheckInView() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const appointment = appointments.find((item) => item._id === id);
  const [checkbox, setCheckbox] = useState(false);

  function clickHandler() {
    setCheckbox(!checkbox);
  }

  const dob = new Date(appointment.dateOfBirth).toLocaleDateString("en-GB");
  return (
    <>
      <h1 onClick={clickHandler}>Confirm check-in</h1>
      <dl className="nhsuk-summary-list">
        <div className="nhsuk-summary-list__row">
          <dt className="nhsuk-summary-list__key">Name</dt>
          <dd className="nhsuk-summary-list__value">
            {appointment.firstName} {appointment.lastName}
          </dd>
        </div>
        <div className="nhsuk-summary-list__row">
          <dt className="nhsuk-summary-list__key">Date of birth</dt>
          <dd className="nhsuk-summary-list__value">{dob}</dd>
        </div>

        <div className="nhsuk-summary-list__row">
          <dt className="nhsuk-summary-list__key">Appointment time</dt>
          <dd className="nhsuk-summary-list__value">{appointment.time}</dd>
        </div>

        <div className="nhsuk-summary-list__row">
          <dt className="nhsuk-summary-list__key">Booking reference</dt>
          <dd className="nhsuk-summary-list__value">
            {appointment.bookingReference}
          </dd>
        </div>

        <div className="nhsuk-summary-list__row">
          <dt className="nhsuk-summary-list__key">NHS Number</dt>
          <dd className="nhsuk-summary-list__value">{appointment.nhsNumber}</dd>
        </div>
      </dl>

      <ThingsToCheck variant={appointment.special} checkbox={checkbox} />

      <Link to="/checked-in" className="nhsuk-button">
        Check this person in
      </Link>
    </>
  );
}

function CheckedIn() {
  return (
    <>
      <h1>This person has been checked in</h1>
      <Link to="/" className="nhsuk-button">
        Back to start
      </Link>
    </>
  );
}

// no-additional-checks
// no corona & identity confirmed

// immunosupressed
// warning - this person is immunosupressed they may need evidence
// no corona & identity confirmed

// under-16-overseas
// warning - parent must be present
// no corona & identity confirmed & parent present

// hsc-worker
// warning - must have proof of worker status
// no corona & identity confirmed & proof of worker status

//

const ThingsToCheck = ({ variant, checkbox }) => {
  return (
    <>
      <form>
        {variant === "immunosupressed" && (
          <Warning
            title="This person is immunosuppressed"
            body="The person you are checking in is immunosuppressed and should have their evidence ready if they have brought any with them."
          />
        )}
        {variant === "under-16-overseas" && (
          <Warning
            title="There must be a parent or guardian at this appointment"
            body="The person you are checking in is under 16 and must be accompanied by a parent or responsible person who is 18 years old or over"
          />
        )}
        {variant === "hsc-worker" && (
          <Warning
            title="This person is a health or social care worker"
            body="The person you are checking in must show you evidence that they are a health or social care worker in order to be checked in."
          />
        )}

        {checkbox && (
          <div className="nhsuk-form-group">
            <fieldset
              className="nhsuk-fieldset"
              aria-describedby="example-hint"
            >
              <legend className="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
                Checks for this person
              </legend>
              <div className="nhsuk-checkboxes">
                <Checkbox
                  unique="symptoms"
                  label="Does not currently have COVID symptoms"
                />
                <Checkbox
                  unique="id"
                  label="Their identity has been confirmed"
                />
                {variant === "under-16-overseas" && (
                  <Checkbox
                    unique="u16"
                    label="A parent or guardian is present"
                  />
                )}
                {variant === "hsc-worker" && (
                  <Checkbox
                    unique="hsc"
                    label="Has evidence to show they are a health or social care worker "
                  />
                )}
              </div>
            </fieldset>
          </div>
        )}

        {!checkbox && (
          <>
            <p>Please confirm that the person you are checking in:</p>
            <ul>
              <li>Does not currently have COVID symptoms</li>
              <li>Matches the details above</li>
              {variant === "under-16-overseas" && (
                <li>
                  Is accompanied by a guardian or responsible person who is 18
                  years old or over
                </li>
              )}
              {variant === "hsc-worker" && (
                <li>
                  Has evidence to show they are a health or social care worker
                </li>
              )}
            </ul>
          </>
        )}
      </form>
    </>
  );
};

function Checkbox({ unique, label }) {
  return (
    <div className="nhsuk-checkboxes__item">
      <input
        className="nhsuk-checkboxes__input"
        id={unique}
        name="example"
        type="checkbox"
        value="phone"
      />
      <label className="nhsuk-label nhsuk-checkboxes__label" for="example-2">
        {label}
      </label>
    </div>
  );
}

function Warning({ title, body }) {
  return (
    <div class="nhsuk-warning-callout">
      <h3 class="nhsuk-warning-callout__label">
        <span role="text">
          <span class="nhsuk-u-visually-hidden">Important: </span>
          {title}
        </span>
      </h3>
      <p>{body}</p>
    </div>
  );
}
