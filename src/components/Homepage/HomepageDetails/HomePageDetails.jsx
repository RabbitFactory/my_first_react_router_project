import Detail from '../Detail';
import allData from '../../data.json';

const HomePageDetails = () => {
  return (
    
    <div>
      <div className='text-4xl font-bold text-center my-20'>Books</div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mb-40'>
      {
        allData.map(
          data => <Detail key={data.bookId} data = {data}></Detail>
        )
      }
    </div>
    </div>
  )
}

export default HomePageDetails

