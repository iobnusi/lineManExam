import React, { useState, useEffect } from 'react';
import './App.css';
import { TextField } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card2 from './Card2'

const App = () => {
  const [users,setUsers] = useState([])

  const [search,setSearch] = useState()

  useEffect( () => {
    fetch("http://localhost:9000/trips")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data) 
      }) 
  }, [])

  useEffect( () => {
    if(!search) {
      fetch("http://localhost:9000/trips")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data) 
      })
    } else {
      fetch("http://localhost:9000/trips?q="+search)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data) 
      })
    }
  }, [search])

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          เที่ยวไหนดี
        </div>
        <div className = "searchBar">
          <TextField
            id="standard-search"
            placeholder="หาที่เที่ยวแล้วไปกัน..."
            type="search"
            variant="standard"
            value = {search}
            InputProps={{
              inputProps: {
                  style: { textAlign: "center" },
              }
            }}
            onChange={(e) => {setSearch(e.target.value)}}
            style = {{width:"95%"}}
          />
        </div>
       <Container style={{height: '65vh', overflow: 'auto'}}>
          {users.map((key) => ( 
            <Card2 images= {key.photos}
            title={key.title}
            desc={key.description}
            tags={key.tags}
            url={key.url}
            setSearch={setSearch}></Card2>
          ))
          }
        </Container>  
      </header>
    </div>
  );
}

export default App;
