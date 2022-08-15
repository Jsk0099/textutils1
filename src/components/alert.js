import React , {useState} from 'react';

export default function(props){



  

/* const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    } */
    return (
        <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           {/* <strong>{capitalize(props.alert.type)}</strong>: */} {props.alert.msg} 
        </div>}
        </div>
    )



            {/*
              return(
        <>
          <div className={'alert alert-danger d-flex align-items-center alert-dismissible fade show'}  role="alert">
                <div>
                    {props.alert.msg}
                </div>
            </div>

            {/* {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
        </div>} 
        </>
    )
              */}
}