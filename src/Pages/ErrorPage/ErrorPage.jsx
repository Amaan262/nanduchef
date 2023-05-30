import './ErrorPage.scss'
const ErrorPage = () => {
    return (
        <div className="errorPage_container">
            <div class='error'>
                <h1 class='code'>404</h1>
                <h2 class='desc'>Opss... There's something wrong.</h2>
            </div>
                <a href='https://nanduchef.com' className='backbtn' >Go Back</a>
        </div>
    )
}

export default ErrorPage