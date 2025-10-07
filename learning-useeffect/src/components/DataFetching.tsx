import { useEffect, useState } from "react";

const BASE_URL = "https://dummyjson.com";

type ResourceType = "users" | "posts" | "comments";
interface ApiResponse<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
}

export default function DataFetchingTutorial() {
    const [resourceType, setResourceType] = useState<ResourceType>("users");

    const [result, setResult] = useState<ApiResponse<any>>({
        data: null,
        error: null,
        loading: false,
    });

    const [showOptions, setShowOptions] = useState(false);
    
    useEffect(() => {
        async function fetchData() {
            setResult({ data: null, error: null, loading: true });

            try {
                const response = await fetch(`${BASE_URL}/${resourceType}`);
                if (!response.ok) {
                    throw new Error(`Error occured: ${response.status}`)    
                }

                const data = await response.json();
                setResult({ data, error: null, loading: false });
            } catch (error) {
                const message = error instanceof Error ? error.message : "Unexpected error occurend";
                setResult({ data: null, error: message, loading: false})
            }
        };
        fetchData();
    }, [resourceType])

    return (
        <div>
            <h2>Resource Viewer</h2>

            <button onClick={() => setShowOptions((previous: boolean) => !previous)}>{showOptions ? "Hide options" : "choose Resource"}</button>
            
            {showOptions && (
                <div>
                    {
                        (["users", "posts", "comments"] as ResourceType[]).map((type) => (
                            <button
                                key={type}
                                onClick={() => {
                                    setResourceType(type);
                                    setShowOptions(false);
                                }}
                            >
                                {type}
                            </button>
                        ))
                    }
                </div>
            )}

            <h2>Current Resource: {resourceType}</h2>

            {result.loading && 
                <p>Loading the resources...</p>
            }
            {result.error && 
                <p>Error occured while fetching the resources: {result.error}</p>
            }

            {result.data && (
                <pre>
                    {JSON.stringify(result.data, null, 2)}
                </pre>
            )}
        </div>
    )
}