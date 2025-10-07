import { useEffect, useRef, useState } from "react";

export default function DropDown() {
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    return (
        <div ref={dropDownRef}>
            <button onClick={() => setOpen((open) => !open)}>Toggle Dropdown</button>
            {open &&
                <div>Dropdown content</div>
            }
        </div>
    );
}