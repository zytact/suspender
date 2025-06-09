import { useState, useEffect } from 'react';
import './App.css';

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
        null
    );

    // Cross-browser API detection
    const isFirefox = typeof (globalThis as any).browser !== 'undefined';
    const tabsAPI = isFirefox ? (globalThis as any).browser.tabs : chrome.tabs;
    const runtimeAPI = isFirefox
        ? (globalThis as any).browser.runtime
        : chrome.runtime;

    useEffect(() => {
        if (isFirefox) {
            // Firefox - promise based
            tabsAPI
                .query({})
                .then((loadedTabs: ChromeTab[]) => {
                    setTabs(loadedTabs);
                })
                .catch((error: Error) => {
                    console.error(error.message);
                    setError(`Error fetching tabs: ${error.message}`);
                    setTabs([]);
                });
        } else {
            // Chrome - callback based
            tabsAPI.query({}, (loadedTabs: ChromeTab[]) => {
                if (runtimeAPI.lastError) {
                    console.error(runtimeAPI.lastError.message);
                    setError(
                        `Error fetching tabs: ${runtimeAPI.lastError.message}`
                    );
                    setTabs([]);
                    return;
                }
                setTabs(loadedTabs);
            });
        }
    }, [isFirefox, tabsAPI, runtimeAPI]);

    const handleDiscardTab = (tabId: number | undefined) => {
        if (tabId) {
            if (isFirefox) {
                // Firefox - promise based
                tabsAPI
                    .discard(tabId)
                    .then(() => {
                        setTabs((prevTabs) =>
                            prevTabs.map((tab) =>
                                tab.id === tabId
                                    ? { ...tab, discarded: true }
                                    : tab
                            )
                        );
                    })
                    .catch((error: Error) => {
                        console.error(`Error discarding tab: ${error.message}`);
                    });
            } else {
                // Chrome - callback based
                tabsAPI.discard(tabId, () => {
                    if (runtimeAPI.lastError) {
                        console.error(
                            `Error discarding tab: ${runtimeAPI.lastError.message}`
                        );
                    } else {
                        setTabs((prevTabs) =>
                            prevTabs.map((tab) =>
                                tab.id === tabId
                                    ? { ...tab, discarded: true }
                                    : tab
                            )
                        );
                    }
                });
            }
        } else {
            console.error('Cannot discard tab: Tab ID is undefined.');
        }
    };

    const handleTabClick = (
        clickedIndex: number,
        event: React.MouseEvent<HTMLLIElement>
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
            <div className="mb-3 flex items-center justify-center">
                <img
                    src="icon.png"
                    alt="Logo"
                    className="mr-2 mb-0 size-10 p-1 pb-0"
                />
                <span className="text-lg font-bold">Tsukuyomi</span>
            </div>
            {error && <p className="text-red-500 dark:text-red-400">{error}</p>}
            {tabs.length > 0 ? (
                <ul className="list-none p-0">
                    {tabs.map((tab, index) => (
                        <li
                            key={tab.id || tab.url}
                            className={`mb-2 flex items-center rounded border border-gray-300 p-2 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 ${tab.discarded ? 'opacity-50' : ''} ${!tab.discarded ? 'cursor-pointer' : 'cursor-not-allowed'} select-none`}
                            onClick={(e) => handleTabClick(index, e)}
                        >
                            {tab.favIconUrl && (
                                <img
                                    src={tab.favIconUrl}
                                    alt="favicon"
                                    className="mr-2 size-4"
                                    onError={(e) => {
                                        (
                                            e.target as HTMLImageElement
                                        ).style.display = 'none';
                                    }}
                                />
                            )}
                            <span>{tab.title || 'No Title'}</span>
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
