import { useState, useEffect } from "react";
import "./App.css";

interface ChromeTab {
  id?: number;
  title?: string;
  url?: string;
  favIconUrl?: string;
  discarded?: boolean;
}

function App() {
  const [tabs, setTabs] = useState<ChromeTab[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<number | null>(
    null,
  );

  useEffect(() => {
    chrome.tabs.query({}, (loadedTabs) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
        setError(`Error fetching tabs: ${chrome.runtime.lastError.message}`);
        setTabs([]);
        return;
      }
      setTabs(loadedTabs);
    });
  }, []);

  const handleDiscardTab = (tabId: number | undefined) => {
    if (tabId) {
      chrome.tabs.discard(tabId, () => {
        if (chrome.runtime.lastError) {
          console.error(
            `Error discarding tab: ${chrome.runtime.lastError.message}`,
          );
        } else {
          setTabs((prevTabs) =>
            prevTabs.map((tab) =>
              tab.id === tabId ? { ...tab, discarded: true } : tab,
            ),
          );
        }
      });
    } else {
      console.error("Cannot discard tab: Tab ID is undefined.");
    }
  };

  const handleTabClick = (
    clickedIndex: number,
    event: React.MouseEvent<HTMLLIElement>,
  ) => {
    const clickedTab = tabs[clickedIndex];

    if (!clickedTab || clickedTab.discarded) {
      return;
    }

    if (
      event.shiftKey &&
      lastSelectedIndex !== null &&
      lastSelectedIndex !== clickedIndex
    ) {
      event.preventDefault();
      const start = Math.min(lastSelectedIndex, clickedIndex);
      const end = Math.max(lastSelectedIndex, clickedIndex);

      for (let i = start; i <= end; i++) {
        const tabToDiscard = tabs[i];
        if (
          tabToDiscard &&
          !tabToDiscard.discarded &&
          tabToDiscard.id !== undefined
        ) {
          handleDiscardTab(tabToDiscard.id);
        }
      }
    } else {
      if (clickedTab.id !== undefined) {
        handleDiscardTab(clickedTab.id);
      }
    }

    setLastSelectedIndex(clickedIndex);
  };

  return (
    <div className="App">
      <div className="flex items-center justify-center mb-3">
        <img src="icon.png" alt="Logo" className="size-10 p-1 pb-0 mb-0 mr-2" />
        <span className="font-bold text-lg">Suspender</span>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {tabs.length > 0 ? (
        <ul className="list-none p-0">
          {tabs.map((tab, index) => (
            <li
              key={tab.id || tab.url}
              className={`flex items-center mb-2 p-2 border border-gray-300 rounded hover:bg-gray-100 ${tab.discarded ? "opacity-50" : ""} ${!tab.discarded ? "cursor-pointer" : "cursor-not-allowed"} select-none`}
              onClick={(e) => handleTabClick(index, e)}
            >
              {tab.favIconUrl && (
                <img
                  src={tab.favIconUrl}
                  alt="favicon"
                  className="size-4 mr-2 border border-gray-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              )}
              <span>{tab.title || "No Title"}</span>
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
