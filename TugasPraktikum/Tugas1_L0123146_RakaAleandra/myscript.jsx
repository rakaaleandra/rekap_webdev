const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function Header(){
    return(
        <header>
            <nav className="fixed top-0 z-10 h-15 w-full flex items-center border-b border-gray-700 bg-gray-950">
                <ol className="text-center w-full text-base font-semibold text-white">
                    <li className="inline p-10"><a href="https://www.google.com/">Google</a></li>
                    <li className="inline p-10"><a href="https://chatgpt.com/">ChatGPT</a></li>
                    <li className="hidden sm:inline p-10"><a href="https://www.w3schools.com/html/">HTML</a></li>
                    <li className="hidden md:inline p-10"><a href="https://www.w3schools.com/css/">CSS</a></li>
                    <li className="hidden lg:inline p-10"><a href="https://www.w3schools.com/js">Javascript</a></li>
                </ol>
            </nav>
        </header>
    )
}

function Body(){
    return(
        <div className="flex w-full justify-center">
            <div className="flex flex-row gap-10 m-20 text-base/8 font-semibold flex-wrap-reverse lg:flex-nowrap max-w-7xl min-w-auto">
                <main className="shrink rounded-md flex flex-col gap-10 lg:w-auto">
                    <section className="bg-gray-800 rounded-lg text-white text-justify p-10">
                        <article className="pb-5"  id="artikel1">
                            <h1 className="text-2xl">
                                Pola Tidur yang Sehat
                            </h1>
                            <p className="text-gray-400">
                                Selain durasi tidur yang cukup, penting juga untuk menjaga pola tidur yang sehat. Kita juga bisa menciptakan lingkungan tidur yang nyaman dan tenang setiap malamnya.
                            </p>
                            <p className="text-gray-400">
                                Kamu harus bisa menghindari kebiasaan yang dapat mengganggu tidur, seperti mengkonsumsi kafein atau alkohol sebelum tidur, serta menggunakan gadget elektronik di tempat tidur.
                            </p>
                        </article >
                        <hr className="pb-5" />
                        <article className="pb-5" id="artikel2">
                            <h1 className="text-2xl">
                                Pentingnya Waktu Tidur yang Cukup
                            </h1>
                            <p className="text-gray-400">
                                Tidur yang cukup memiliki banyak manfaat bagi kesehatan kita. Ini tidak hanya membantu tubuh untuk pulih dan memperbaiki diri setelah seharian aktivitas, tetapi juga berdampak positif pada kinerja otak, mood, dan daya tahan tubuh terhadap penyakit. 
                            </p>
                            <p className="text-gray-400">
                                Selain itu, tidur yang cukup juga dapat mengurangi risiko terjadinya berbagai masalah kesehatan kronis, seperti obesitas, diabetes, penyakit jantung, dan depresi.
                            </p>
                        </article>
                        <hr className="pb-5" />
                        <article className="pb-5" id="artikel3">
                            <h1 className="text-2xl">
                                Peran Media Massa dalam Pemberantasan Pungutan Liar
                            </h1>
                            <p className="text-gray-400">
                                Pungutan liar (pungli) memang berkelindan dengan korupsi. Mereka serupa tapi tak sama, ada tapi tak kasat mata, merajalela tapi tetap dimaklumkan, seolah hal tersebut sudah biasa terjadi. 
                            </p>
                            <p className="text-gray-400">
                                Selama masyarakat tidak keberatan ‘menghibahkan’ sebagian kecil hartanya bagi para pemungut, masyarakat akan tetap diam. Tentu saja pemakluman yang terus menerus ini berimbas pada kepercayaan dan kualitas terhadap institusi terkait.
                            </p>
                        </article>
                    </section>
                    <section className="bg-gray-800 rounded-lg text-white p-10">
                        <h1>
                            Sumber Artikel :
                            <a href="https://www.ruangguru.com/blog/contoh-artikel" className="text-blue-700 hover:underline"> link</a>
                        </h1>
                    </section>
                </main>
                <aside className="flex-none w-full lg:w-80 text-gray-400 text-base/relaxed">
                    {/* <img src="9e8a8bcfa6345ac78e7758a441c46a5e.jpg" alt="poto" /> */}
                    <h2 className="text-white text-xl">List Article :</h2>
                    <ol className="list-disc pl-4">
                        <li><a href="#artikel1" className="hover:underline">Pola Tidur yang Sehat</a></li>
                        <li><a href="#artikel2" className="hover:underline">Pentingnya Waktu Tidur yang Cukup</a></li>
                        <li><a href="#artikel3" className="hover:underline">Peran Media Massa dalam Pemberantasan Pungutan Liar</a></li>
                    </ol>
                </aside>
            </div>
        </div>
    )
}

function Footer(){
    return(
        <footer className="flex flex-row bg-gray-900 text-white">
            <div className="w-4/5 p-20">
                <h1>
                    Footer
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, laboriosam ipsam? Praesentium, minima obcaecati aspernatur nesciunt laboriosam, placeat fugit deserunt veniam blanditiis expedita at! Velit fuga eum alias laudantium quo?
                </p>
            </div>
            <div className="w-1/5 p-20">

            </div>
        </footer>
    )
}

function Page(){
    return(
        <>
        <Header />
        <Body />
        <Footer />
        </>
    )
}

root.render(<Page />);