import "./App.css";

import UserList from "./UserList";
function App() {
  return (
    <div>
      <header className="App-header">
        <h3>
          This is the list of all the users by their full names and their
          usernames
        </h3>
        
        <UserList />
      </header>
    </div>
  );
}

export default App;
