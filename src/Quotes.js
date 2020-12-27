import React, {useState, useEffect} from 'react'
import './Quotes.css'



const Quotes = () => {
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")

    useEffect (() => {
        getQuote();
    }, [])

    const getQuote = () => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        let url = 'https://stoic-quotes.com/api/quote/';
            fetch(proxyUrl + url)
                .then(res => res.json())
                .then(data => {
                    let dataText = data.text;
                    let dataAuthor = data.author;
                    console.log(dataText, dataAuthor)
                    setQuote(dataText);
                    setAuthor(dataAuthor)
            })
    }

    const handleClick = () => {
        getQuote();
    }

    return (
        <div className="body" >
            <div className="container-fluid">
                <div style={{display: 'flex', opacity: '.7', alignItems: 'center', minHeight: '100vh'}} className="row pb-5">
                    <div className="md-col-4 mx-auto">
                        <div className="card mb-4 shadow p-3 mb-5 bg-white rounded" style={{maxWidth: 600, borderRadius: '6px'}}>
                            <div className="card-body">
                                <h3 className="card-title text-center " style={{fontWeight: 'bold', fontSize: '1.75rem'}}>Stoic Quotes</h3>
                                <p className="card-text overflow-auto text-center" style={{fontWeight: 'bold', fontSize: '1rem'}}>{quote} </p>
                                <h6 style={{display: 'flex', justifyContent: 'center', marginTop: '5px'}}>{author}</h6>
                                <a href="/" style={{float: 'left'}} className=" btn btn-primary card-link">Twitter</a>
                                <button style={{float: 'right'}} onClick={handleClick} className="mr-auto card-link btn btn-primary">Get Quote</button>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Quotes

