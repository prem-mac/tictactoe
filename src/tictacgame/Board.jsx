import React, { useState } from "react";
import Square from "./Square";

 const Board = ()=>{
    
    const [s,st]=useState(Array(9).fill(null))
    const[i,si]= useState(true);
    const chceckwinner = ()=>{
        const winnerlogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let logic of winnerlogic){
            const[a,b,c]=logic;
            if(s[a] !==null && s[a]===s[b] && s[a]===s[c]){
                return s[a];
        }
    }
        return false;


    };
    const iswinner = chceckwinner();
    const istie = !iswinner && s.every(item=>item !== null);

    const handleclick=(index)=>{
        if(s[index]!==null){
            return;
        }
        const copystate = [...s]
        copystate[index]=i ? "X": "o"
        st(copystate);
        si(!i)
        
        }
        const reset=()=>{
            st(Array(9).fill(null));
    
    };
     
    return(
        <div className="board-container" style={{color:'black'}}>
            {iswinner ? (<> Congratulations {iswinner} won the game{'  '}
            <button onClick={reset}>Play again</button>
          </>

            ) : istie ?(
            <>
            Game Tied
            
            <button onClick={reset}>Play Again</button> 
            </>
            ) : (
        <>
        <h2> player  {i ? "X": "0"}  please  move</h2>
            <div className="board-row">
                <Square onClick={()=>handleclick(0)}  value={s[0]} />
                <Square onClick={()=>handleclick(1)} value={s[1]}/>
                <Square  onClick={()=>handleclick(2)} value={s[2]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=>handleclick(3)} value={s[3]}/>
                <Square onClick={()=>handleclick(4)} value={s[4]}/>
                <Square onClick={()=>handleclick(5)} value={s[5]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=>handleclick(6)} value={s[6]}/>
                <Square onClick={()=>handleclick(7)} value={s[7]}/>
                <Square onClick={()=>handleclick(8)} value={s[8]}/>
            </div>
            </>
            )
}
        </div>
    );
 };
 export default Board;