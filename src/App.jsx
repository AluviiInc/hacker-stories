const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "redux",
    url: "https://redux.js.org",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const title = "My Hacker Stories";

function App() {
  return (
    <div>
      <h1>{title}</h1>

      <Search />
      <List />
      <hr />
    </div>
  );
}

function List() {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.objectID}>
          <span> {item.title} </span>
          <span> {item.url} </span>
          <span> {item.author} </span>
        </li>
      ))}
    </ul>
  );
}

function Search() {
const handleChange = (event) => {
  // console.log(event);
  console.log(event.target.value)
}

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={ handleChange }></input>
    </>
  );
}

export default App;

//why is item working and not list.title?  Shouldn't it be list.title because that is the name of the array?
