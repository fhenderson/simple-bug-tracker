# simple-bug-tracker
Minimalist bug tracker using MongoDB, Nest.js, React and Redux 

## Currently in progress

### Status of basic features implementation
- [ ] Server
    - [x] Initialise Nest JS framework
    - [x] Adding User authentication with static users
    - [x] Adding JWT token
    - [ ] Adding mongoDB connection
    - [ ] Add API to create a Bug
    - [ ] Add API to list Bugs
    - [ ] Add API to edit a Bug
    - [ ] Add API to edit a Bug
    - [ ] Add Jest Unit-tests    
- [ ] Client
   - [x] Create React application framework with create-react-app and with Typescript template
        - [x] Add Material-UI
            - [x] Add Infrastructure for theme switching
        - [x] Add react-router-dom
            - [ ] Add Public and Private routes
        - [ ] Add and setup redux
            - [ ] Add Infrastructure for redux store
        - [x] Add and setup linting and prettify
    - [ ] Create login page
        - [ ] Add authentication using token sent to email for single login
    - [ ] Create barebone of Bug tracker functionalities
        - [ ] Create bug
        - [ ] List Bugs
        - [ ] Bug editing/management 
    - [ ] Add Jest Unit-tests 
    - [ ] Add Storybook


### Second phase will have the following features
- [ ] Server
    - [ ] Add authentication using Google
    - [ ] Add authentication using GitHub
    - [ ] Add authentication using token sent to email for single login
    - [ ] Add User Roles: Admin, User
    - [ ] Add Users APIs
- [ ] Client
    - [ ] Add Error Boundary
    - [ ] Add authentication using Google
    - [ ] Add authentication using GitHub
    - [ ] Add authentication using token sent to email for single login
    - [ ] Add User Roles: Admin, User
        - [ ] Add Administration Portal
        - [ ] Add User listing and role modification      
    - [ ] Implement localization in English and French
