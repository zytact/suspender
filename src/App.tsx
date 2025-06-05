import { useState, useEffect } from "react";
import "./App.css";

// Define an interface for the Tab object for better type safety
interface ChromeTab {
  id?: number;
  title?: string;
  url?: string;
  favIconUrl?: string;
}

function App() {
  const [tabs, setTabs] = useState<ChromeTab[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    chrome.tabs.query({}, (loadedTabs) => {
      if (chrome.runtime.lastError) {
        // Handle errors, e.g., if the extension doesn't have permissions
        console.error(chrome.runtime.lastError.message);
        setError(`Error fetching tabs: ${chrome.runtime.lastError.message}`);
        setTabs([]); // Clear tabs or set to an empty array
        return;
      }
      setTabs(loadedTabs);
    });
  }, []);

  return (
    <div className="App">
      {error && <p className="text-red-500">{error}</p>}
      {tabs.length > 0 ? (
        <ul className="list-none p-0">
          {tabs.map((tab) => (
            <li
              key={tab.id || tab.url}
              className="flex items-center mb-2 p-2 border border-gray-300 rounded"
            >
              {tab.favIconUrl && (
                <img
                  src={tab.favIconUrl}
                  alt="favicon"
                  className="w-4 h-4 mr-2 border border-gray-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              )}
              <span>
                {tab.title || "No Title"} ({tab.url || "No URL"})
              </span>
            </li>
          ))}
        </ul>
      ) : (
        !error && <p>Loading tabs or no tabs found...</p>
      )}
    </div>
  );
}

export default App;
