
function App() {

  const list = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'redux',
      url: 'https://redux.js.org',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5, 
      objectID: 1,

    }
  ]

  return (
    <div>
      <ul>
        {list.map(item => <li key={item.objectID}>
          
          <span> {item.title} </span>
          <span> {item.url} </span>
          <span> {item.author} </span>
          
          
           </li>)}

      </ul>
    </div>
  );
  }

export default App;


//why is item working and not list.title?  Shouldn't it be list.title because that is the name of the array?