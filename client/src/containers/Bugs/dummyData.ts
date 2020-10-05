interface IBugs {
  _id: string
  index: number
  guid:string
  name: {
    first: string
    last: string
  }
  company: string
  email: string
  assignTo: string
  reportedBy: string
  description: string
  created: string
  due?: string
  severity: string
  status: string
  reproducible: string
  classification: string
}

export const bugs: IBugs[] = [
  {
    "_id": "5f7a69e09b2ad163d4e5bc48",
    "index": 0,
    "guid": "ca04e285-5ceb-4f9e-9b3a-9e82d41d85ea",
    "name": {
      "first": "Desiree",
      "last": "Oliver"
    },
    "company": "CALCU",
    "email": "desiree.oliver@calcu}.com",
    "assignTo": "Hugh Henderson",
    "reportedBy": "George Hendricks",
    "description": "Voluptate reprehenderit in esse veniam sint occaecat sit amet excepteur reprehenderit eiusmod.",
    "created": "06-13-2020",
    "due": "11-24-2020",
    "severity": "Show Stopper",
    "status": "In Progress",
    "reproducible": "Rarely",
    "classification": "Performance"
  },
  {
    "_id": "5f7a69e0cfd5d52d60a89f63",
    "index": 1,
    "guid": "b30685a5-d3a8-4e28-b0a3-b2d51bd47fa8",
    "name": {
      "first": "Cooley",
      "last": "Harper"
    },
    "company": "BIOLIVE",
    "email": "cooley.harper@biolive}.com",
    "assignTo": "Hugh Henderson",
    "reportedBy": "George Hendricks",
    "description": "Eiusmod ipsum laborum dolor pariatur laborum consequat dolore magna eu anim est velit do qui.",
    "created": "09-15-2020",
    "due": "12-21-2020",
    "severity": "Show Stopper",
    "status": "In Progress",
    "reproducible": "Sometimes",
    "classification": "Enhancement"
  },
  {
    "_id": "5f7a69e0e284a4e9ec299c33",
    "index": 2,
    "guid": "48175219-6708-48e1-bcef-548e1a862b3e",
    "name": {
      "first": "Lesley",
      "last": "Leon"
    },
    "company": "INFOTRIPS",
    "email": "lesley.leon@infotrips}.com",
    "assignTo": "Hugh Henderson",
    "reportedBy": "Hugh Henderson",
    "description": "Tempor aliquip dolor esse sit mollit amet velit qui ex officia adipisicing non duis amet.",
    "created": "05-17-2020",
    "due": "11-11-2020",
    "severity": "Minor",
    "status": "Open",
    "reproducible": "Always",
    "classification": "Feature (New)"
  },
  {
    "_id": "5f7a69e06cf3cab02de53514",
    "index": 3,
    "guid": "eda816ed-5d7e-4c89-944d-fc77ea2bf66f",
    "name": {
      "first": "Reyes",
      "last": "Garza"
    },
    "company": "EMOLTRA",
    "email": "reyes.garza@emoltra}.com",
    "assignTo": "George Hendricks",
    "reportedBy": "Eve Chaney",
    "description": "Sit do dolor mollit consequat.",
    "created": "03-14-2020",
    "due": "12-05-2020",
    "severity": "Major",
    "status": "In Progress",
    "reproducible": "Sometimes",
    "classification": "Other bug"
  },
  {
    "_id": "5f7a69e0a4ba36d7c4f049fb",
    "index": 4,
    "guid": "4584bcd3-c047-4793-a375-e43494a07bc7",
    "name": {
      "first": "Laverne",
      "last": "Sherman"
    },
    "company": "VETRON",
    "email": "laverne.sherman@vetron}.com",
    "assignTo": "Kerri Burnett",
    "reportedBy": "Hugh Henderson",
    "description": "Dolor nisi officia dolor ut dolor commodo commodo sint enim.",
    "created": "06-16-2020",
    "due": "10-23-2020",
    "severity": "Critical",
    "status": "Open",
    "reproducible": "Unable",
    "classification": "Security"
  },
  {
    "_id": "5f7a69e073dd2b71c6989e4a",
    "index": 5,
    "guid": "cf8836be-fbb5-4491-86af-f7d4fbaf6d08",
    "name": {
      "first": "Goodwin",
      "last": "Mathis"
    },
    "company": "ENQUILITY",
    "email": "goodwin.mathis@enquility}.com",
    "assignTo": "Kerri Burnett",
    "reportedBy": "Kerri Burnett",
    "description": "Exercitation incididunt occaecat irure in proident aliqua.",
    "created": "09-16-2020",
    "due": "10-22-2020",
    "severity": "Critical",
    "status": "Open",
    "reproducible": "Not Applicable",
    "classification": "Enhancement"
  },
  {
    "_id": "5f7a69e0e95106fd6a06b6a9",
    "index": 6,
    "guid": "248d8da8-507c-4adf-9774-87d4b45d3066",
    "name": {
      "first": "Cleo",
      "last": "Knapp"
    },
    "company": "ZILLACOM",
    "email": "cleo.knapp@zillacom}.com",
    "assignTo": "George Hendricks",
    "reportedBy": "Kerri Burnett",
    "description": "Reprehenderit voluptate tempor veniam officia aute.",
    "created": "01-03-2020",
    "due": "11-23-2020",
    "severity": "Critical",
    "status": "Open",
    "reproducible": "Always",
    "classification": "Performance"
  },
  {
    "_id": "5f7a69e076fb0570d32ce819",
    "index": 7,
    "guid": "e0e60ec3-1238-4853-9c28-675e038b15e5",
    "name": {
      "first": "Eve",
      "last": "Wright"
    },
    "company": "ISOTRONIC",
    "email": "eve.wright@isotronic}.com",
    "assignTo": "Johns Phelps",
    "reportedBy": "Johns Phelps",
    "description": "Velit proident eu dolor cillum consequat elit nisi reprehenderit officia pariatur.",
    "created": "05-05-2020",
    "due": "12-08-2020",
    "severity": "Critical",
    "status": "Reopen",
    "reproducible": "Not Applicable",
    "classification": "Performance"
  },
  {
    "_id": "5f7a69e00dfee2218bad4456",
    "index": 8,
    "guid": "29dc674f-10b4-4cbf-96fe-c4d55cb708dd",
    "name": {
      "first": "May",
      "last": "Cardenas"
    },
    "company": "BUNGA",
    "email": "may.cardenas@bunga}.com",
    "assignTo": "George Hendricks",
    "reportedBy": "Alisa Lowery",
    "description": "Culpa consectetur nisi Lorem esse anim reprehenderit aliqua culpa proident laborum nostrud.",
    "created": "05-04-2020",
    "due": "12-04-2020",
    "severity": "Major",
    "status": "Open",
    "reproducible": "Not Applicable",
    "classification": "Performance"
  },
  {
    "_id": "5f7a69e001e238a3521b76d9",
    "index": 9,
    "guid": "c0e09747-4060-4ecc-a393-e0772f926a6e",
    "name": {
      "first": "Oneil",
      "last": "Britt"
    },
    "company": "STRALOY",
    "email": "oneil.britt@straloy}.com",
    "assignTo": "Alisa Lowery",
    "reportedBy": "Alisa Lowery",
    "description": "Reprehenderit exercitation consequat culpa fugiat ut ipsum deserunt ipsum exercitation irure duis sunt.",
    "created": "08-23-2020",
    "due": "10-16-2020",
    "severity": "Show Stopper",
    "status": "Reopen",
    "reproducible": "Not Applicable",
    "classification": "Enhancement"
  },
  {
    "_id": "5f7a69e0511b7b2763d8122e",
    "index": 10,
    "guid": "c7b1f1d7-c2b6-4302-9ac3-d70551b44e10",
    "name": {
      "first": "Glenda",
      "last": "Espinoza"
    },
    "company": "DANCERITY",
    "email": "glenda.espinoza@dancerity}.com",
    "assignTo": "Hugh Henderson",
    "reportedBy": "Eve Chaney",
    "description": "Ad laborum exercitation aliquip ipsum anim occaecat aute proident cillum quis officia sint.",
    "created": "09-15-2020",
    "due": "11-02-2020",
    "severity": "Major",
    "status": "Open",
    "reproducible": "Never tried",
    "classification": "Feature (New)"
  },
  {
    "_id": "5f7a69e003127388884f892d",
    "index": 11,
    "guid": "85d65c41-7520-4b38-8c14-39914697136c",
    "name": {
      "first": "Sondra",
      "last": "Love"
    },
    "company": "ZYTRAX",
    "email": "sondra.love@zytrax}.com",
    "assignTo": "George Hendricks",
    "reportedBy": "Alisa Lowery",
    "description": "Pariatur sint exercitation dolore nisi officia mollit elit.",
    "created": "09-08-2020",
    "due": "10-11-2020",
    "severity": "Minor",
    "status": "In Progress",
    "reproducible": "Sometimes",
    "classification": "Security"
  },
  {
    "_id": "5f7a69e085f20b7864c8ad37",
    "index": 12,
    "guid": "6c84d891-9618-41e8-96a8-f811c576275b",
    "name": {
      "first": "Kendra",
      "last": "Gonzales"
    },
    "company": "ORBEAN",
    "email": "kendra.gonzales@orbean}.com",
    "assignTo": "George Hendricks",
    "reportedBy": "Alisa Lowery",
    "description": "Sit velit incididunt ut reprehenderit minim adipisicing dolore magna tempor quis mollit duis nisi.",
    "created": "04-02-2020",
    "due": "11-22-2020",
    "severity": "Critical",
    "status": "Reopen",
    "reproducible": "Rarely",
    "classification": "Security"
  },
  {
    "_id": "5f7a69e0c694fd626bfa6957",
    "index": 13,
    "guid": "71a68f39-46da-45a3-8d8a-3e4f598b4be5",
    "name": {
      "first": "Ruiz",
      "last": "Stevens"
    },
    "company": "XIXAN",
    "email": "ruiz.stevens@xixan}.com",
    "assignTo": "Hugh Henderson",
    "reportedBy": "George Hendricks",
    "description": "Non eiusmod aliquip esse ipsum fugiat ea ad ea qui ipsum.",
    "created": "09-19-2020",
    "due": "12-14-2020",
    "severity": "Major",
    "status": "Reopen",
    "reproducible": "Unable",
    "classification": "Performance"
  },
  {
    "_id": "5f7a69e0aed23d987c65f36a",
    "index": 14,
    "guid": "b34ed269-2c07-459a-9077-8de7ac26aaa1",
    "name": {
      "first": "Cecile",
      "last": "Hopkins"
    },
    "company": "JASPER",
    "email": "cecile.hopkins@jasper}.com",
    "assignTo": "Alisa Lowery",
    "reportedBy": "Eve Chaney",
    "description": "Deserunt eiusmod laboris amet non labore incididunt cillum nisi adipisicing.",
    "created": "05-04-2020",
    "due": "12-27-2020",
    "severity": "Minor",
    "status": "To be tested",
    "reproducible": "Rarely",
    "classification": "Performance"
  },
  {
    "_id": "5f7a69e000884bbc9d8783f8",
    "index": 15,
    "guid": "cd730564-c964-4650-9d3b-442211e77608",
    "name": {
      "first": "Tiffany",
      "last": "Irwin"
    },
    "company": "GENEKOM",
    "email": "tiffany.irwin@genekom}.com",
    "assignTo": "George Hendricks",
    "reportedBy": "Eve Chaney",
    "description": "Mollit dolore ex laborum sit aliqua laborum et magna laboris mollit quis excepteur.",
    "created": "02-13-2020",
    "due": "12-03-2020",
    "severity": "Show Stopper",
    "status": "To be tested",
    "reproducible": "Rarely",
    "classification": "Security"
  }
]