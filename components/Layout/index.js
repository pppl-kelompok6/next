import Header from '../Header'
import Footer from '../Footer'


export default function Layout(props) {
    const { children } = props
    return (
        <div>
            <Header/>
            <div>{children}</div>
            <Footer />
            <h1>
                <h2></h2>
                <h2></h2>
                <h2></h2>
                <h2></h2>
                <h2></h2>
            </h1>
        </div>
    )
}

