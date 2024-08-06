
function Age({increaseAge, decreaseAge, resetAge}) {

    return(
        <>

        <div className='grid space-y-6'>
          <button className='btn btn-success' onClick={increaseAge}>Increase Age</button>
          <button className='btn btn-success' onClick={decreaseAge}>Decrease Age</button>
          <button className='btn btn-success' onClick={resetAge}>Reset Age</button>
        </div>

        </>
    )
}


export default Age