import { weatherApi } from "./api/weatherApi";
import { useState } from "react";

function App() {
	const [search, setSearch] = useState('delhi');

	const { isLoading, data } = weatherApi.useGetWeatherByIdQuery(search);
	
	// Handle loading, error, or success states as needed
	if (isLoading) return <div>Loading Weather...</div>;
	console.log(data);
	
	return (
		<>
<form className="pt-36 max-w-md mx-auto">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input onChange={(event)=> {setSearch(event.target.value)}} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search weather by type City Name" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

{!search ? (
			<div className="flex items-center justify-center">
			<p>No Data Found</p>
			</div>

) : (
	<div>
		<div className="min-h-screen flex items-center justify-center pb-60">
<div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">


						<div className="font-bold text-xl">{data.name}</div>
						{/* <div className="text-sm text-gray-500">Thursday 10 May 2020</div> */}
						<div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
<svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
						</div>
						<div className="flex flex-row items-center justify-center mt-6">
							<div className="font-medium text-6xl">{((data.main.temp)- 273.15).toFixed(2)}°C</div>
							{/* <div className="flex flex-col items-center ml-6">
								<div>Cloudy</div>
								<div className="mt-1">
									<span className="text-sm"><i className="far fa-long-arrow-up"></i></span>
									<span className="text-sm font-light text-gray-500">28°C</span>
								</div>
								<div>
									<span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
									<span className="text-sm font-light text-gray-500">20°C</span>
								</div>
							</div> */}
						</div>
						<div className="flex flex-row justify-between mt-6">
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Wind</div>
								<div className="text-sm text-gray-500">{data.wind.speed}Km/h</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Humidity</div>
								<div className="text-sm text-gray-500">{data.main.humidity}%</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Visibility</div>
								<div className="text-sm text-gray-500">10km</div>
							</div>
						</div>
					</div>
</div>
	</div>

)

}


    </>
  )
}

export default App