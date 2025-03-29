const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

function Header(prop){
    return (
        <h1>latihan {prop.title}</h1>
    )
}

function HomePage(){
    return(
        <>
        <Header title="React"/>
        
        <div>
            <p>ini adalah halaman home</p>
        </div>
        </>
    )
}

root.render(<HomePage />);