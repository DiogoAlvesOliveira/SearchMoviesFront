import React, { useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Form, MovieTitle, PageTitle } from './styled';
import axios from '../../services/axios';


export default function Movies() {
  const [searchTitle, setSearchTitle] = useState();
  const [title, setTitle] = useState('');
  const [actor, setActor] = useState('');
  const [poster, setPoster] = useState();
  const [plot, setPlot] = useState('');
  const [isFavorite, setIsFavorite] = useState();
  const [text, setText] = useState('');

  async function handleSearch(e) {
    e.preventDefault();
    const { data } = await axios.get(`/movies/'${searchTitle}`);

    setTitle(data.title);
    setActor(data.actors);
    setPoster(data.poster);
    setPlot(data.plot);
    setIsFavorite(data.isFavorite);
    setText('Actors');
  }
  async function handleFavorite(e) {
    e.preventDefault();
    console.log(isFavorite);
    if (!isFavorite){
      const { data } = await axios.post(`/movies`, {
        title,
      });
    }else if(isFavorite){
      const { data } = await axios.delete(`/movies/delete/${title}`);
    }
    setIsFavorite(!isFavorite)
  }
  
  return (
    <>
      <Container>
        <PageTitle>
          <h1>Search the movie by title</h1>
          <p>
            Just enter the movie title name in the text box and click on the
            Search button
          </p>
        </PageTitle>
        <Form>
          <label htmlFor="title">
            <div>
              <input
                type="text"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                placeholder="Enter title"
              />
              <button type="submit">Reset</button>
              <button type="submit" onClick={handleSearch}>
                Search
              </button>
            </div>
          </label>
        </Form>
        <MovieTitle>
          <img src={poster}></img>
          <h1>{title}</h1>
          <p>{plot}</p>
          <div>
            <h3>{text}</h3>
            <p>{actor}</p>
          </div>
          {poster && isFavorite && (
            <button type="submit" onClick={handleFavorite} className='isFavorite'>
              Favorite
            </button>
          )}
          {poster && !isFavorite && (
            <button type="submit" onClick={handleFavorite}>
              Favorite
            </button>
          )}
        </MovieTitle>
      </Container>
    </>
  );
}
