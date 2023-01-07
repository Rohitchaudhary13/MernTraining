import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import MainScreen from "../components/MainScreen";
import Navbar from "../components/Navbar";
import "../styles/MyNotes.css";
// import notes from "../data/notes";
import {MdOutlineDelete} from 'react-icons/md'
import {BiCategoryAlt} from 'react-icons/bi'
import {FaRegEdit} from 'react-icons/fa'
import { Button, Card, Stack } from "react-bootstrap";
import axios from 'axios';

const MyNotes = () => {
  // const deleteHandler =() => {
  //   if(window.confirm("Are you Sure?")){

  //   }
  // }
  const [notes, setNotes] = useState([])


  const fetchNotes = async() => {
    const {data} = await axios.get('/api/notes')
    setNotes(data);
  }

  useEffect(() => {
    fetchNotes();
  }, [])
  


  return (<>
      <Navbar />
    <div className="container">
      <MainScreen title="Welcome Back">
        <div>
        <Link to="createnote">
          <button className="primary">Create Note</button>
        </Link>
        <div className="all-cards">
          {notes.map((note) => (
            <div key={note._id}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title><h2>{note.title}</h2></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}><BiCategoryAlt />{note.category}</div>
                  </Card.Subtitle>
                  <Card.Text>
                    {note.content}
                  </Card.Text>
                  <Card.Link href={`/note/${note._id}`}><FaRegEdit size={25} /></Card.Link>
                  <Card.Link ><Button className="note-primary" ><MdOutlineDelete size={25} /></Button></Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        </div>
      </MainScreen>
      <Footer />
    </div>
    </>
  );
};

export default MyNotes;
