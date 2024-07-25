import { labels } from "./data/labels";
import { useEffect, useState } from "react";
import { getVinylList } from "./api/vinylClient";  
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [vinylList, setVinylList] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const getVinyls = async () => {  
    try {
      const data = await getVinylList(); 
      setVinylList(data);  
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  useEffect(() => {
    getVinyls();  
  }, []);

  if (isLoading) return <p>{labels.isLoading}</p>;

  return (
    <>
      <div className="flex justify-center">
        <main className="w-[1200px] ">
          <button onClick={() => navigate(+1)}>avanti</button>
          <div className="p-4 ">
            <h1 className="">{labels.vinylList}</h1>  // Modificato
          </div>
          <div className="flex gap-2 items-center">
            <h2>{labels.filterVinylByTitle}</h2>  // Modificato
            <input
              className="border-slate-400 border-2 p-2"
              type="text"
              value={filter}
              placeholder={labels.insertVinylTitle} 
              onChange={handleChange}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="text-left">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.vinylTableTitle}  // Modificato
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.vinylTableArtist}  // Modificato
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.vinylTableGenre}  // Modificato
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.vinylTableEAN13}  // Modificato
                  </th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {vinylList  
                  .filter((vinyl) => vinyl.title.toLowerCase().includes(filter))  
                  .map((vinyl) => {  
                    return (
                      <tr key={vinyl.id}>  
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {vinyl.title}  
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {vinyl.artist} 
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {vinyl.genre}  
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {vinyl.ean13}  
                        </td>
                        <td className="whitespace-nowrap flex gap-2 px-4 py-2">
                          <Link
                            to={`/vinyls/${vinyl.id}`}  
                            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                          >
                            {labels.vinylTableBtnDetail} 
                          </Link>
                          <Link
                            to={`/edit/${vinyl.id}`}  
                            className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                          >
                            Edit
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
