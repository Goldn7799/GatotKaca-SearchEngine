import { React, useEffect, useState } from 'react';
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form } from 'react-bootstrap';

const Search = () => {
  const [history, setHistory] = useState([{text: "Gatotkaca"}]);
  const [input, setInput] = useState('')
  const goTo = () => {
    if (input != ''){
      history.push({text: input});
      localStorage.setItem('history', JSON.stringify(history));
      window.location.replace(`/searching/${input}`);
    }else{alert('pencarian kosong/minimal 3 kata')}
    
  };
  
  useEffect(() => {
    document.addEventListener("keyup", function(event) {
      if (event.keyCode == 13) {
          goTo()
      };
    })
    if (localStorage.getItem('first') != '1'){
      localStorage.setItem('history', JSON.stringify([{text: "Gatotkaca"}]));
      localStorage.setItem('first', '1');
      window.location.reload();
    }else {
      setHistory(JSON.parse(localStorage.getItem('history')));
    }
  }, []);
  return (
    <div style={{marginTop: '15px'}}>
      <div className="srch">
      <svg className='search2' onClick={()=>window.location.replace('/')} focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
            <input
            style={{width: '90%', border: 'none', outline: 'none'}}
              type="text"
              placeholder="Search Somethink"
              onChange={(e)=>{setInput(e.target.value)}}
            />
      </div>
      <div className='history'>
        {history.map((db) => {
          return (
            <div onClick={()=>window.location.replace(`/searching/${db.text}`)} className='history-list'>
              <table  className='clock'>
                <tr><td>
                <img style={{float: 'right'}} src="https://cdn-icons-png.flaticon.com/512/109/109613.png" height={18} width={18} alt="clock" />
                  </td>
                  <td><h6 style={{marginTop: '13px', marginLeft: '50px ', textAlign: 'center'}}>{db.text}</h6></td></tr>
              </table>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Search