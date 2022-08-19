import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Card } from 'react-bootstrap';
import '../../index.css';
import app from './app.png';

const Home = () => {
  const [lock, setLock] = useState(true);
  const [text, setText] = useState();
  const [trend, setTrend] = useState("Gatotkaca")
  const check = ()=>{
    if (lock){
      setLock(false);
      setText(<div id="applist">
        <Card style={{ width: '45px', backgroundColor: 'rgb(235, 235, 235)', borderColor: 'transparent' }}>
      <Card.Img variant="top" src={app} />
      <center><p><b>apps</b></p></center>
    </Card>
      </div>)
    }else{
      setLock(true);
      setText();
    }
  }
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <a className='nav' href="https://gatotkaca.mooo.info/"><b>Original</b></a>
            <canvas width={20} height={0} />
            <p className='nav' onClick={()=>alert('kamu sudah di dalam website')}><b>Remake</b></p>
            <canvas width={20} height={0} />
            <img src={app} height={25} width={25} className='app' alt='App Icon' onClick={()=>check()} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {text}
      <h1 className='title'>
        <span style={{color: 'rgb(101, 101, 255)'}}>G</span>
        <span>A</span>
        <span>T</span>
        <span>O</span>
        <span>T</span>
        <span style={{color: 'rgb(101, 101, 255)'}}>K</span>
        <span>A</span>
        <span>C</span>
        <span>A</span>
      </h1>
      <div className='search' onClick={()=>window.location.replace('/search')}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
      </div>
      <center>
      <p className='trend' onClick={()=> window.location.replace(`/searching/${trend}`)}>Trending  |  {trend}</p>
      <p className='cr'>Made In ❤️ Indonesia</p>
      </center>
    </div>
  )
}

export default Home