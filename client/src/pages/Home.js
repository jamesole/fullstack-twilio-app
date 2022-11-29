import '../App.css';
import React, {useState} from 'react';
import axios from 'axios';

export default function Home(props) {
    const [recipient, setRecipient] = useState('');
    const [number, setNumber] = useState('');
    const [body, setBody] = useState('');


    function changed(e) {
        if (e.target.id === 'recipient') {
            setRecipient(e.target.value);
        }
        else if (e.target.id === 'number') {
            setNumber(e.target.value)
        }
        else if(e.target.id ==='body') {
            setBody(e.target.value)
        }
    }

    function send(e) {
        e.preventDefault();
        const message = {
            recipient,
            number: `+1${number}`,
            body
        }
        
        try {
            axios.post("http://localhost:8000/message", message);
        }
        catch (error) {
            console.log(error);
        }
        console.log(message);
        setRecipient('');
        setNumber('');
        setBody('');
    }

    return (
        <div className='middle'>
            <h1 id='welcome'>Welcome, {props.user}</h1>
            <hr></hr>

            <form onSubmit={send}>
                <div className='row'>
                    <div className='col-md-6'>
                        <label>Recipient</label>
                        <input type='text' required placeholder='John Doe...' id='recipient' className='form-control' onChange={changed} value={recipient}/>
                    </div>

                    <div className='col-md-6'>
                        <label>Recipient's Number</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">+1</div>
                            </div>
                            <input type='number' min='1000000000' max='9999999999' required placeholder='7342775709' id='number' className='form-control' onChange={changed} value={number}/>
                        </div>
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group'>
                        <label>Your Message</label>
                        <textarea className='form-control' onChange={changed} id='body' value={body}></textarea>
                    </div>
                </div>
                <button type='submit' id='send' className='btn'>Send Message</button>
            </form>
        </div>
    );
}
