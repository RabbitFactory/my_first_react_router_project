import React from 'react'
import { Link } from "react-router-dom";
const Detail_small = ({data}) => {
  return (
    <div>
        <Link to={`/book/${data.bookId}`}>
      <div className="rounded-2xl p-10 border border-gray-300">
        <div className="aspect-[9/12]" >
          <img src={data.image} alt="" className="h-full w-full object-cover" />
        </div>


        <div className="space-x-4 my-3 mt-8 ">
          {data.tags.map((tag, index) => (
            <span key={index} className=" bg-green-50 text-xl text-[#23BE0A] rounded-full p-3 px-5">
              {tag}
            </span>
          ))}
        </div>


        <div className="space-y-3 border-b border-b-gray-300 border-dashed py-6">
          <p className="text-3xl font-bold">{data.bookName}</p>
          <p className="text-2xl">By : {data.author}</p>
        </div>
        <div className="flex justify-between mt-5 ">
          <div>
            <p>{data.category}</p>
          </div>
          <div className="flex gap-3">
            <div>{data.rating}</div>
            <div><i className="fa-regular fa-star"></i></div>
          </div>
        </div>
      </div>
    </Link>
    </div>
  )
}

export default Detail_small