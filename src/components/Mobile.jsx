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
    <li className="list" > 
     {name}
    </li>
        );
};

export default Answer;



const Answer2=({name1,type})=>{
    return(
        <li className="list" type={type}>
            {name1}
        </li>
    );
};
export {Answer2};