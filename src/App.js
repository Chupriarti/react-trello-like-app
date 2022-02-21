import React from 'react';
import './App.css';

function App() {
  const [boards, setBoadrs] = React.useState([
    {
      id: 1,
      title: "TODO",  
      items: [
        {
          id: 1, 
          title: "Go to shop"
        }, 
        {
          id: 2, 
          title: "Go to work"
        }
      ]
    },
    {
      id: 2,
      title: "VERIFY",  
      items: [
        {
          id: 3, 
          title: "Go to swim"
        }, 
        {
          id: 4, 
          title: "Go to walk"
        }
      ]
    },
    {
      id: 3,
      title: "DONE",  
      items: [
        {
          id: 5, 
          title: "Go to run"
        }, 
        {
          id: 6, 
          title: "Go to sleep"
        }
      ]
    }
  ])

  return (
    <div className="App">
      {boards.map(board => 
        <div className='board'>
          <div className="board__title">{board.title}</div>
          {board.items.map(item => 
            <div className='item'>{item.title}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
