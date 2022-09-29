import { useState } from 'react'
import './App.scss'
import Kanban from './components/kanban'

function App() {

    const [inputText, setInputText] = useState("");
    let inputHandler = (el) => {
        var lowercase = el.target.value.toLowerCase();
        setInputText(lowercase);
    }

    return (
        <div style={{ padding: '50px' }}>
            <div className='main'>
                <div className='search'>
                    <input  
                    onChange={inputHandler}
                    label="Search"
                    placeholder='Search ...'
                    />
                </div>
            </div>
            <h1 style={{ marginBottom: '20px' }}>
                Kanban UI
            </h1>
            <Kanban input={inputText}/>

        </div>
    )
}

export default App
