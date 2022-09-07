import Artigo from '../Artigo'
import Sidebar from '../Sidebar'
import './style.css'

export function Corpo() {
    return (
        <>
            <div className='principal'>
                <div className='artigo'>
                    <Artigo />
                </div>
                <Sidebar />
            </div>
        </>
    )
}

export default Corpo;