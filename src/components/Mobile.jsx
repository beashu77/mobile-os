import React from "react";


// function Answer (){
//     return(
//         <ol className={StyleSheet.Title }>
//                  <li>
//                   Samsung
//                 </li>
                
//         </ol>
      
//     );

// }

const Answer =({name})=>{
    return (
    <li className="list"> 
     {name}
    </li>
        );
};

export default Answer;