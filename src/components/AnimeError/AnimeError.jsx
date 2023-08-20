import { useRouteError, Link} from 'react-router-dom'

export default function AnimeError() {

  const error = useRouteError()

  return (
    <div className='my-4'>
      <div className="text-white bg-[#393e46] p-4 rounded-lg">
        <h2 className="font-bold text-3xl tracking-wide">Error</h2>
        <p>{error.message}</p>
        <Link to="/" className='hover:text-sky-400 transition-colors duration-300'>Return to homepage</Link>
      </div>
    </div>
  );
}