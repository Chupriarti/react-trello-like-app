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

  function onDragOverHandler (e, board, item) {
    e.preventDefault()
    if (e.target.className == 'item'){
      e.target.style.boxShadow = '0 4px 3px gray'
    }
  }

  function onDragLeaveHandler (e) {
    e.target.style.boxShadow = 'none'
  }

  function onDragStartHandler (e) {

  }

  function onDragEndHandler (e) {
    e.target.style.boxShadow = 'none'
  }

  function onDropHandler (e, board, item) {
    e.preventDefault()
  }

  return (
    <div className="App">
      {boards.map(board => 
        <div key={board.id} className='board'>
          <div className="board__title">{board.title}</div>
          {board.items.map(item => 
            <div
              draggable={true}
              className='item'
              onDragOver={e => onDragOverHandler (e, board, item)}
              onDragLeave={e => onDragLeaveHandler (e)}
              onDragStart={e => onDragStartHandler (e)}
              onDragEnd={e => onDragEndHandler (e)}
              onDrop={e => onDropHandler (e, board, item)}
              key={item.id}
            >
              {item.title}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
