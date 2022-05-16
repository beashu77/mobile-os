import logo from './logo.svg';
import './App.css';
import './mobile.css';
import Answer from './components/Mobile';



function App(){
  let info1 =[
    {name:"Android"},
    {name:"Blckberry"},
    {name:"iphone"},
    {name:"Windows Phone"  }
  ];


  let info2=[
    {name:"Samsung"},
    {name:"HTC"},
    {name:"Micromax"},
    {name:"Apple"  }

  ]
        return (
          
            <div className="App">
            {/* <Answer name="Siya" place="India"></Answer> */}
            <h1 className='Title'>Mobile Operating System</h1>
        
            {info1.map((user)=>(

                <Answer {...user} />
            
            ))}


            <h1 className='Title'>Mobile Manufacturers</h1>
                    
                    {info2.map((user)=>(

                        <Answer {...user} />
                    
                    ))}
            </div>
            
        );
}

export default App
