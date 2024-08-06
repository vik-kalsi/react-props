function CapitalCity({germanySelected, franceSelected, englandSelected, spainSelected}) {


    return(

        <>
            <div className="grid space-y-6 py-6">
                <button className="btn btn-success" onClick={germanySelected}>Germany</button>
                <button className="btn btn-success" onClick={franceSelected}>France</button>
                <button className="btn btn-success" onClick={englandSelected}>England</button>
                <button className="btn btn-success" onClick={spainSelected}>Spain</button>
            </div>
        
        </>
    )
}


export default CapitalCity