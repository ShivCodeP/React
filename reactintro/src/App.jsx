import "./styles.css";
import Listappend from "./components/List.jsx"

export default function App() {
  
  const value1 = [{"head":"Mobile Operating System","list":[{"el":"Android","style":"disc"},{"el":"Blckberry","style":"disc"},{"el":"iPhone","style":"disc"},{"el":"Windows Phone","style":"disc"}]},{"head":"Mobile Manfacturers","list":[{"el":"Android","style":"square"},{"el":"Blckberry","style":"square"},{"el":"iPhone","style":"disc"},{"el":"Windows Phone","style":"circle"}]}]

  return (
    <div className="App">
      {value1.map(({head,list}) => (
        <div>
        <h1>{head}</h1>
        {list.map(({el,style}) => (
          <Listappend el = {el} st = {style} />
        ))}
        </div>
      ))}
    </div>
  );
}
