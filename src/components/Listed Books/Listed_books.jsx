import { FaAngleDown } from "react-icons/fa6";

const Listed_books = () => {
  return (
    <div>
      <div className="rounded-3xl bg-gray-100 p-10 text-center my-10">
        <p className="text-5xl font-bold">Books</p>
      </div>
      <div className="flex justify-center">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn  bg-green-300 text-xl m-1">Click<FaAngleDown /></div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>
      <div>
        <div role="tablist" className="tabs tabs-lg tabs-lifted  ">
          <a role="tab" className="tab tab-active">Tab 1</a>
          <a role="tab" className="tab ">Tab 2</a>
          <a role="tab" className="tab w-full"></a>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Listed_books