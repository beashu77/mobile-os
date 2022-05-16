import logo from './logo.svg';
import './App.css';
import './mobile.css';
import Answer,{Answer2} from './components/Mobile';




function App(){
  let info1 =[
    {name:"Android"},
    {name:"Blckberry"},
    {name:"iphone"},
    {name:"Windows Phone"  }
  ];


  let info2=[
    {name1:"Samsung", type:"square"},
    {name1:"HTC", type:"square"},
    {name1:"Micromax", type:"disc"},
    {name1:"Apple", type:"circle"  }

  ]
        return (
          
            <div >
            {/* <Answer name="Siya" place="India"></Answer> */}
            <h1 className='Title'>Mobile Operating System</h1>
        
            {info1.map((user)=>(

                <Answer {...user} />
            
            ))}


            <h1 className='Title'>Mobile Manufacturers</h1>
                    
                    {info2.map((user)=>(

                        <Answer2 {...user} />
                    
                    ))}
            </div>
            
        );
}

export default App
