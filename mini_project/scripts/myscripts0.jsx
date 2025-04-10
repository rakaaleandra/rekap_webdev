const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function Header(){
    return(
        <div className="w-full h-80 flex items-center justify-center">
            <h1 className="text-white font-bold text-6xl">
                Feature List
            </h1>
        </div>
    );
}

function Body(){
    return(
        <div className="w-lg bg-gray-800 rounded-full flex justify-center">
            <ol>
                <li>kontol</li>
                <li>kontol</li>
                <li>kontol</li>
            </ol>
        </div>
    )
}

function Page(){
    return(
        <>
            <Header />
            <Body />
        </>
    )
}

root.render(<Page />);