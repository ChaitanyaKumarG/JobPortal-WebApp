import React from 'react'

const Postingdetails = () => {
      const ps = {
    height: '100vh',
  }

function toggle (){
   const sdiv = document.getElementById('cdiv')
   if(sdiv.classList.contains("show")){
       sdiv.classList.replace('show', 'hide')
   }else{
      sdiv.classList.replace('hide', 'show')
   }
}
  return (
    <div className='d-flex'  style={ps}>
    
    
 
    
    <div className='w-100 bg-dark text-white'>

    <div className="border border-white tas w-75 mx-auto p-3 mb-3 mt-4" >
    <h5>Job1</h5>
    <p>Job description</p>
    </div>

    <div className='border border-white w-75 mx-auto p-3 hide' id='cdiv'>
    retriving the all candidates details by selecting one:
    <p>Candidate 1</p>
    <p>Candidate 2</p>
    <p>Candidate 3   etc.... </p>
    <a href='/finalpage' className='btn bg-white bg-opacity-50'>get all candidates info</a>
</div>


    </div>





       <div className='ls'>
         <button className='btn w-75 mx-auto border border-dark  mt-3 form-control' onClick={toggle}>
            <h5 className='m-0'>shortlisted</h5>
        </button>
          <button className='btn mx-auto w-75 border border-dark mt-3  form-control' onClick={toggle}>
            <h5 className='m-0'>rejected</h5>
        </button>
          <button className='btn mx-auto w-75 border border-dark mt-3 form-control' onClick={toggle}>
            <h5 className='m-0'>new saved</h5> 
        </button>
    
        <button className='btn mx-auto w-75 border border-dark mt-3 form-control' onClick={toggle}>
            <h5 className='m-0'>unread</h5>
        </button>
    </div>
    
    </div>
  )
}

export default Postingdetails