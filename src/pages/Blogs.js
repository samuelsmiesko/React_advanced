import List from './components/List'
import './Home.scss'

const Blogs = () => {
    const myStyle = {
        position: 'absolute',
        right: '0',
        top: '10vh',
        float:'right',
        paddingLeft: 'auto',
        paddingRight: 'auto',
    }

    return (
        <div className='ListShow' style={myStyle}>
            <p style={{fontSize: '2.0em', paddingLeft:'50vw'}}>Blogs</p>
            <List/>
        </div>
        
    )
  };
  
  export default Blogs;