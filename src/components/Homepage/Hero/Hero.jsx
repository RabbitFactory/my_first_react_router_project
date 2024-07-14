import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="hero bg-[#EFFAFC] rounded-xl mt-10">
            <div className="hero-content ">
                <div className="grid grid-cols-2 items-center">
                    <div className="space-y-9">
                        <h1 className="text-6xl font-bold">Books to freshen up your bookshelf</h1>

                        <div>
                            <Link to="/listed_books">
                                <button className="btn text-xl font-bold text-white bg-[#2dde11]">View the list</button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=826&t=st=1720868516~exp=1720869116~hmac=7b7252df7ff1355f45c4b7cadee9692126ee5eabc8c19e80461791fc7686e605" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero