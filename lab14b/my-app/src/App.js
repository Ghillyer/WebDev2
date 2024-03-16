import BookList from './components/BookList.js'
import './App.css';
import { useEffect, useState } from 'react'; 
import * as Realm from "realm-web";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() { 
      const REALM_APP_ID = "application-0-uqbhk"; 
      const app = new Realm.App({ id: REALM_APP_ID }); 
  
      const credentials = Realm.Credentials.anonymous(); 
      try { 
        const user = await app.logIn(credentials); 
        const allBooks = await user.functions.getAllBooks(); 
        setBooks(allBooks); 
      } catch(err) { 
        console.error("Failed to log in to Realm", err); 
      } 
    } 
    fetchData(); 
  }, []);

  return (
    <div className="App">
      <h1>MongoDB Realms Tester</h1>
      <BookList data={books} />
    </div>
  );
}

export default App;
