
function HasChildElements({ subFolders }) {

  return (

    subFolders?.map((subElement, key) => (

      <div className={`px-2 ${subElement?.subFolders ? "py-1 mb-3" : "py-0"}`} style={{ marginLeft: `40px`}}>
        {subElement?.type == "folder" ?
          <div className="folder" style={{ marginLeft: `20px` }}><i className="fa-sharp fa-solid fa-folder me-1"></i>{subElement?.name}</div>
          :
          <div className="file" style={{ marginLeft: `20px` }}>{subElement?.name}</div>
        }
        <HasChildElements subFolders={subElement?.subFolders} />
      </div>
   
   ))
  )
}

export default HasChildElements;
