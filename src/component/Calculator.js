import { useState } from "react";

var firstval, secval, si, finalval;

const Calculator = () => {

    const [val, setVal] = useState("");

    const screenBreak = (h) => { 

        firstval = val;
        si = h;
        setVal("");  
        
    }

    const decimal = (h) => {

        setVal(val.concat(h.target.value))

        if (val.split('.').length > 1) {

            setVal("ERROR");
        }
    }

    const handleClick = (e) => {

        setVal(val.concat(e.target.value))
    }

    const clear = () => {

        setVal("");
    }

    const backspace = () => {
        setVal(val.slice(0, val.length-1))
    }

    const result = () => {

        secval = val;
        console.log(secval);

        if(si==="+") {

            finalval = (parseFloat(firstval) + parseFloat(secval));
            setVal(finalval);
        }
        else if(si==="-") {

            finalval = (parseFloat(firstval) - parseFloat(secval));
            setVal(finalval);
        }
        else if(si==="*") {

            finalval = (parseFloat(firstval) * parseFloat(secval));
            setVal(finalval);
        }
        else if(si==="/") {

            finalval = (parseFloat(firstval) / parseFloat(secval));
            setVal(Math.round(finalval * 10 ) / 10);
        }
       
    }

    return(

        <div>
            <div className="container my-2">
                {/* <div className="row">
                    <div className="col-12">
                        <h1 className="display-6 fw-bolder text-center text-primary">CALCULATOR</h1>
                        <hr />
                    </div>
                </div> */}
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card mb-3 pt-3 shadow">
                            <div className="card-body text-primary">
                                <input type="text" className="form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow" value={val} onChange={(e) => setVal(e.target.val)}/>


                                <div className="row">
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-3  fs-4" value="" onClick={clear} id="backspace">AC</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-3 fs-4" value="" onClick={backspace}>CE</button>
                                    </div>
                                </div>

                                <div className="row mt-2">                     
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="1" onClick={handleClick}>1</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="2" onClick={handleClick}>2</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="3" onClick={handleClick}>3</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="+" onClick={(s) => {screenBreak('+')}}>+</button>
                                    </div>
                                </div>


                                <div className="row mt-2">
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="4" onClick={handleClick}>4</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="5" onClick={handleClick}>5</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="6" onClick={handleClick}>6</button>   
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="-" onClick={(s) => {screenBreak('-')}}>-</button>
                                    </div>
                                </div>


                                <div className="row mt-2">
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="7" onClick={handleClick}>7</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="8" onClick={handleClick}>8</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="9" onClick={handleClick}>9</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="*" onClick={(s) => {screenBreak('*')}}>*</button>
                                    </div>
                                </div>


                                <div className="row mt-2">
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="." onClick={decimal}>.</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="0" onClick={handleClick}>0</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="=" onClick={result}>=</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary shadow p-4 fs-4" value="/" onClick={(s) => {screenBreak('/')}}>/</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;