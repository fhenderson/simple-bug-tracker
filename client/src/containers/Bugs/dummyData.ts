export interface IBugs {
  _id: string
  index: number
  guid:string
  assignTo: string
  reportedBy: string
  description: string
  created: string
  due: string
  severity: string
  status: string
  reproducible: string
  classification: string
}

export const bugs: IBugs[] = [
  {
    "_id": "5f7a7d3af08670bb47c6e8e6",
    "index": 0,
    "guid": "9b57ba35-01bf-4679-8362-bc625f63a2bf",
    "assignTo": "Kerri Burnett",
    "reportedBy": "George Hendricks",
    "description": "Tempor adipisicing duis laborum sunt ea sint cupidatat cupidatat minim tempor mollit sit esse.",
    "created": "05-22-2020",
    "due": "12-18-2020",
    "severity": "Show Stopper",
    "status": "Reopen",
    "reproducible": "Rarely",
    "classification": "Enhancement"
  },
  {
    "_id": "5f7a7d3a55df735728dfc23b",
    "index": 1,
    "guid": "8e413c83-2c84-46ea-b229-161cd7c97984",
    "assignTo": "Eve Chaney",
    "reportedBy": "Eve Chaney",
    "description": "Amet officia do amet minim Lorem cillum et nisi.",
    "created": "03-16-2020",
    "due": "11-28-2020",
    "severity": "Critical",
    "status": "Closed",
    "reproducible": "Not Applicable",
    "classification": "Feature (New)"
  },
  {
    "_id": "5f7a7d3adf9f069c63d50773",
    "index": 2,
    "guid": "9134c06e-f8d9-40f1-942d-9ffa38437bd8",
    "assignTo": "Hugh Henderson",
    "reportedBy": "Alisa Lowery",
    "description": "Exercitation adipisicing dolore id reprehenderit.",
    "created": "05-04-2020",
    "due": "10-16-2020",
    "severity": "Minor",
    "status": "Closed",
    "reproducible": "Unable",
    "classification": "Enhancement"
  },
  {
    "_id": "5f7a7d3af23ef2df08b770dd",
    "index": 3,
    "guid": "e82e28ba-b18a-40d9-9e13-13e182f93af9",
    "assignTo": "Johns Phelps",
    "reportedBy": "George Hendricks",
    "description": "Duis irure ullamco Lorem adipisicing et mollit incididunt.",
    "created": "07-03-2020",
    "due": "11-02-2020",
    "severity": "Major",
    "status": "Closed",
    "reproducible": "Sometimes",
    "classification": "None"
  },
  {
    "_id": "5f7a7d3af6744564119ad7d3",
    "index": 4,
    "guid": "85870f3f-e11e-49a6-885f-8ea9849a6ca4",
    "assignTo": "Alisa Lowery",
    "reportedBy": "Alisa Lowery",
    "description": "Reprehenderit nostrud sint ullamco ad.",
    "created": "03-12-2020",
    "due": "11-11-2020",
    "severity": "Major",
    "status": "In Progress",
    "reproducible": "Always",
    "classification": "Performance"
  },
  {
    "_id": "5f7a7d3a3a1ff7f8e258a256",
    "index": 5,
    "guid": "aa015afa-37ce-4ff5-9356-96ed5602a05e",
    "assignTo": "George Hendricks",
    "reportedBy": "Hugh Henderson",
    "description": "Elit non dolor adipisicing deserunt anim minim eu deserunt adipisicing irure.",
    "created": "05-29-2020",
    "due": "11-09-2020",
    "severity": "Critical",
    "status": "Reopen",
    "reproducible": "Never tried",
    "classification": "UI/Usability"
  },
  {
    "_id": "5f7a7d3ae57df033d8933257",
    "index": 6,
    "guid": "28e0d936-f2d5-40dc-94c6-8046b6b8e6d3",
    "assignTo": "Johns Phelps",
    "reportedBy": "George Hendricks",
    "description": "Est velit sunt pariatur reprehenderit commodo anim do sunt commodo cupidatat dolor ipsum.",
    "created": "08-20-2020",
    "due": "11-20-2020",
    "severity": "Critical",
    "status": "Open",
    "reproducible": "Rarely",
    "classification": "Enhancement"
  },
  {
    "_id": "5f7a7d3afe3f440b223a7112",
    "index": 7,
    "guid": "74593c93-fa94-4e3a-b6bc-fbb64932751d",
    "assignTo": "Alisa Lowery",
    "reportedBy": "George Hendricks",
    "description": "Sunt qui non deserunt ad ex sit eu irure id laboris cillum esse excepteur amet.",
    "created": "07-21-2020",
    "due": "12-30-2020",
    "severity": "Minor",
    "status": "Closed",
    "reproducible": "Not Applicable",
    "classification": "Enhancement"
  },
  {
    "_id": "5f7a7d3a487765e7ad065f4b",
    "index": 8,
    "guid": "a2697e96-8b05-43f1-82ee-4e6c0297d6e0",
    "assignTo": "Eve Chaney",
    "reportedBy": "Johns Phelps",
    "description": "Enim enim minim do qui.",
    "created": "08-06-2020",
    "due": "10-11-2020",
    "severity": "Critical",
    "status": "Reopen",
    "reproducible": "Rarely",
    "classification": "Other bug"
  },
  {
    "_id": "5f7a7d3adbd848d2ea3d8ba7",
    "index": 9,
    "guid": "3d4e7cdb-fb53-41e2-8c82-a1f63fe82741",
    "assignTo": "Johns Phelps",
    "reportedBy": "Eve Chaney",
    "description": "Ad eiusmod cillum eu laboris dolor.",
    "created": "08-24-2020",
    "due": "12-22-2020",
    "severity": "Critical",
    "status": "Closed",
    "reproducible": "Rarely",
    "classification": "Crash/Hang"
  },
  {
    "_id": "5f7a7d3a5631951ed955ee1c",
    "index": 10,
    "guid": "8b11dc8c-f1d6-4024-8421-444766ba79dc",
    "assignTo": "Alisa Lowery",
    "reportedBy": "Alisa Lowery",
    "description": "Eu elit ex aliquip aute deserunt irure ex laborum pariatur fugiat consectetur mollit ea anim.",
    "created": "07-13-2020",
    "due": "12-27-2020",
    "severity": "Show Stopper",
    "status": "Open",
    "reproducible": "Rarely",
    "classification": "Performance"
  },
  {
    "_id": "5f7a7d3abce3ba02279a0786",
    "index": 11,
    "guid": "8cfe5226-2a5f-41dc-824e-15cb0f80e86f",
    "assignTo": "Kerri Burnett",
    "reportedBy": "Alisa Lowery",
    "description": "Id mollit proident eu aliquip nisi ut incididunt magna pariatur fugiat.",
    "created": "04-03-2020",
    "due": "11-18-2020",
    "severity": "Critical",
    "status": "In Progress",
    "reproducible": "Sometimes",
    "classification": "Crash/Hang"
  },
  {
    "_id": "5f7a7d3a01d211e2ee133bd9",
    "index": 12,
    "guid": "050ef0ee-ae12-4c0b-a2d6-d85541b4b6d0",
    "assignTo": "Alisa Lowery",
    "reportedBy": "Alisa Lowery",
    "description": "Cillum fugiat cillum ex aliqua sit laboris sit officia ex duis ut enim amet culpa.",
    "created": "01-25-2020",
    "due": "11-12-2020",
    "severity": "Show Stopper",
    "status": "In Progress",
    "reproducible": "Unable",
    "classification": "Other bug"
  },
  {
    "_id": "5f7a7d3a7e450f235b20dd70",
    "index": 13,
    "guid": "9705ac02-3cb3-423f-af50-43190de7938e",
    "assignTo": "Alisa Lowery",
    "reportedBy": "Kerri Burnett",
    "description": "Incididunt est consectetur duis consequat sint excepteur.",
    "created": "06-15-2020",
    "due": "12-18-2020",
    "severity": "Critical",
    "status": "In Progress",
    "reproducible": "Rarely",
    "classification": "Security"
  },
  {
    "_id": "5f7a7d3a290683577bd97fda",
    "index": 14,
    "guid": "fbe88a5d-be4d-421a-b020-159fd0469dac",
    "assignTo": "Eve Chaney",
    "reportedBy": "Alisa Lowery",
    "description": "Aliquip aliqua quis sint veniam quis incididunt voluptate veniam.",
    "created": "05-30-2020",
    "due": "12-01-2020",
    "severity": "Major",
    "status": "Reopen",
    "reproducible": "Not Applicable",
    "classification": "Enhancement"
  },
  {
    "_id": "5f7a7d3aee4df5f204a9c60d",
    "index": 15,
    "guid": "9d81b29c-28dd-4e3a-be6b-f0fa4c8089ee",
    "assignTo": "Alisa Lowery",
    "reportedBy": "Johns Phelps",
    "description": "Qui mollit id ad ad cupidatat aliqua amet irure officia ut.",
    "created": "04-12-2020",
    "due": "11-22-2020",
    "severity": "Minor",
    "status": "Open",
    "reproducible": "Not Applicable",
    "classification": "UI/Usability"
  },
  {
    "_id": "5f7a7d3ae516e6f31273f179",
    "index": 16,
    "guid": "b2b8fe16-18f7-4d19-8c46-50dd49d9a8b6",
    "assignTo": "Eve Chaney",
    "reportedBy": "Alisa Lowery",
    "description": "Aliquip nostrud esse sint mollit officia labore.",
    "created": "01-04-2020",
    "due": "10-21-2020",
    "severity": "Minor",
    "status": "Open",
    "reproducible": "Not Applicable",
    "classification": "Data loss"
  },
  {
    "_id": "5f7a7d3ac68532395e38fcb8",
    "index": 17,
    "guid": "0940388b-996a-4d2a-8629-eb5824a51144",
    "assignTo": "Johns Phelps",
    "reportedBy": "Alisa Lowery",
    "description": "Commodo magna culpa Lorem adipisicing.",
    "created": "09-27-2020",
    "due": "12-06-2020",
    "severity": "Minor",
    "status": "Open",
    "reproducible": "Not Applicable",
    "classification": "None"
  }
]