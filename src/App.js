import './App.css';
import folderCollection from "./folderCollection";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import HasChildElements from './HasChildElements';

function App() {

  return (
    <>

      <div className='content-box'>
        <h3>Course Content</h3>
        {folderCollection.map((element, key) => {
          return (
            <div className="mt-4 py-2 px-2 bg-light" style={{ marginLeft: `10px`}}>
              {element?.type == "folder" ?
                <div className='folder h6'>{element.name}</div>
                :
                <div className='file h6'>{element.name}</div>
              }
              
              <HasChildElements subFolders={element?.subFolders} />
            </div>
          )
        })}
      </div>
    </>
  );
}


export default App;
