import { useState } from 'react'
import '../components/Header.css'

export const Header = () => {

    const [med, setMed] = useState("")

    const click = () => {
        setMed (
            <div className='reright'>
                    <div className='about1'>About</div>
                    <div className='about2'>Login</div>
                    <div className='about3'>SignUp</div>
                    <button className='but' onClick={() => {setMed("")}}>Close</button>
            </div>
            
        )
    }

    return (
        <>
        <div className='header'>
            <div className='intoheader'>
                <div className='left'>IT'S MY SITE</div>
                <div className='right'>
                    <div className='about'>About</div>
                    <div className='about'>Login</div>
                    <div className='about'>SignUp</div>
                </div>
                <button className='but' onClick={click}>Menu</button>
            </div>
        </div>
        {med}
        <div className='rest'>
            <div>This is my site</div>
        </div>
        </>
    )
}