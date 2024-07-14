import { useParams } from "react-router-dom";
import allData from '../data.json';
import Nav from "../Nav/Nav";

const BookDetails = () => {

    const { id } = useParams();

    return (
        <div className="container mx-auto">
            <Nav></Nav>
            {
                <div className="grid grid-cols-2 gap-20 my-24">
                    <div className="aspect-[9/8]">
                        <img src={allData[id - 1].image} alt="" className="h-full w-full object-cover rounded-2xl" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="text-6xl font-bold">
                            {allData[id - 1].bookName}

                        </div>
                        <div className="text-lg font-semibold border-b border-dashed border-gray-300 pb-3">
                            By : {allData[id - 1].author}
                        </div>
                        <div className="text-lg border-b border-dashed border-gray-300 pb-3">
                            {allData[id - 1].category}
                        </div>
                        <div className="">
                            <span className="font-bold">Review :</span> {allData[id-1].review}
                        </div>
                        <div className="space-x-4 border-b border-dashed border-gray-300 pb-6">
                            <span className="font-bold">Tag</span> {allData[id-1].tags.map(
                                (tag, idx) => (
                                    <span key={idx} className=" bg-green-50 text-lg py-1 px-2 text-[#23BE0A] rounded-full ">#{tag}</span>
                                )
                            )}
                        </div>
                        <div className="flex gap-20">
                            <div>
                                <p>Number of Pages:</p>
                                <p>Publisher:</p>
                                <p>Year of Publishing:</p>
                                <p>Rating:</p>
                            </div>
                            <div className="font-bold">
                                <p>{allData[id - 1].totalPages}</p>
                                <p>{allData[id - 1].publisher}</p>
                                <p>{allData[id - 1].yearOfPublishing}</p>
                                <p>{allData[id - 1].rating}</p>
                            </div>
                        </div>
                            <div className="flex gap-6">
                                <button className="btn bg-transparent text-xl px-10">Read</button>
                                <button className="px-10 bg-blue-300 text-xl btn">Wishlist</button>
                            </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default BookDetails