import List from './components/List'

const Blogs = () => {
    const myStyle = {
        position: 'absolute',
        right: '0',
        top: '10vh',
        width: '70vw',
        paddingLeft: 'auto',
        paddingRight: 'auto',
    }

    return (
        <div style={myStyle}>
            <p style={{fontSize: '2.0em', paddingLeft:'50vw'}}>Blogs</p>
            <List/>
        </div>
        
    )
  };
  
  export default Blogs;