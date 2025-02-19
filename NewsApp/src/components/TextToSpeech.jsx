// import { useState, useRef, useEffect } from "react";

// const TextToSpeech = () => {
//     const [selection, setSelection] = useState("");
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const [isSpeaking, setIsSpeaking] = useState(false);
//     const [isPaused, setIsPaused] = useState(false);
//     const [language, setLanguage] = useState("en-US");

//     const utteranceRef = useRef(null);

//     useEffect(() => {
//         const handleMouseUp = () => {
//             const selectedText = window.getSelection().toString();
//             if (selectedText) {
//                 setSelection(selectedText);

//                 // Get selection position
//                 const range = window.getSelection().getRangeAt(0);
//                 const rect = range.getBoundingClientRect();
//                 setPosition({ x: rect.left + window.scrollX, y: rect.top + window.scrollY - 40 });
//             } else {
//                 setSelection("");
//             }
//         };

//         document.addEventListener("mouseup", handleMouseUp);
//         return () => document.removeEventListener("mouseup", handleMouseUp);
//     }, []);

//     const handleSpeak = () => {
//         if (selection) {
//             const utterance = new SpeechSynthesisUtterance(selection);
//             utterance.lang = language;
//             utterance.onstart = () => setIsSpeaking(true);
//             utterance.onend = () => {
//                 setIsSpeaking(false);
//                 setIsPaused(false);
//                 setSelection("");
//             };

//             utteranceRef.current = utterance;
//             speechSynthesis.speak(utterance);
//         }
//     };

//     const handlePause = () => {
//         if (speechSynthesis.speaking) {
//             speechSynthesis.pause();
//             setIsPaused(true);
//         }
//     };

//     const handleResume = () => {
//         if (speechSynthesis.paused) {
//             speechSynthesis.resume();
//             setIsPaused(false);
//         }
//     };

//     const handleStop = () => {
//         speechSynthesis.cancel();
//         setIsSpeaking(false);
//         setIsPaused(false);
//         setSelection("");
//     };

//     return (
//         <>
//             {/* Floating Controls when text is selected */}
//             {selection && (
//                 <div
//                     style={{ left: `${position.x}px`, top: `${position.y}px` }}
//                     className="fixed bg-white border p-2 rounded-lg shadow-lg flex space-x-2 items-center"
//                 >
//                     <button onClick={handleSpeak} className="bg-blue-500 text-white px-2 py-1 rounded-md">
//                         🔊 Read
//                     </button>

//                     {isSpeaking && !isPaused && (
//                         <button onClick={handlePause} className="bg-yellow-500 text-white px-2 py-1 rounded-md">
//                             ⏸️ Pause
//                         </button>
//                     )}

//                     {isPaused && (
//                         <button onClick={handleResume} className="bg-green-500 text-white px-2 py-1 rounded-md">
//                             ▶️ Resume
//                         </button>
//                     )}

//                     {isSpeaking && (
//                         <button onClick={handleStop} className="bg-red-500 text-white px-2 py-1 rounded-md">
//                             ⏹ Stop
//                         </button>
//                     )}

//                     {/* Language Selector */}
//                     <select value={language} onChange={(e) => setLanguage(e.target.value)} className="border p-1 rounded-md">
//                         <option value="en-US">🇺🇸 English</option>
//                         <option value="es-ES">🇪🇸 Spanish</option>
//                         <option value="fr-FR">🇫🇷 French</option>
//                         <option value="de-DE">🇩🇪 German</option>
//                         <option value="hi-IN">🇮🇳 Hindi</option>
//                     </select>
//                 </div>
//             )}
//         </>
//     );
// };

// export default TextToSpeech;


// ---------------------------------------
// import { useState, useRef, useEffect } from "react";

// const TextToSpeech = () => {
//     const [selection, setSelection] = useState("");
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const [isSpeaking, setIsSpeaking] = useState(false);
//     const [isPaused, setIsPaused] = useState(false);
//     const [language, setLanguage] = useState("en-US");

//     const utteranceRef = useRef(null);

//     useEffect(() => {
//         const handleMouseUp = () => {
//             const selectedText = window.getSelection().toString();
//             if (selectedText) {
//                 setSelection(selectedText);

//                 const range = window.getSelection().getRangeAt(0);
//                 const rect = range.getBoundingClientRect();
//                 setPosition({ x: rect.left + window.scrollX, y: rect.top + window.scrollY - 40 });
//             } else {
//                 setSelection("");
//             }
//         };

//         document.addEventListener("mouseup", handleMouseUp);
//         return () => document.removeEventListener("mouseup", handleMouseUp);
//     }, []);

//     const handleSpeak = () => {
//         if (selection) {
//             speechSynthesis.cancel(); // Stop any existing speech before starting new one

//             const utterance = new SpeechSynthesisUtterance(selection);
//             utterance.lang = language;

//             utterance.onstart = () => {
//                 setIsSpeaking(true);
//                 setIsPaused(false);
//             };

//             utterance.onend = () => {
//                 setIsSpeaking(false);
//                 setIsPaused(false);
//                 setSelection("");
//             };

//             utteranceRef.current = utterance;
//             speechSynthesis.speak(utterance);
//         }
//     };

//     const handlePause = () => {
//         if (speechSynthesis.speaking && !speechSynthesis.paused) {
//             speechSynthesis.pause();
//             setIsPaused(true);
//         }
//     };

//     const handleResume = () => {
//         if (speechSynthesis.paused) {
//             speechSynthesis.resume();
//             setIsPaused(false);
//         }
//     };

//     const handleStop = () => {
//         speechSynthesis.cancel();
//         setIsSpeaking(false);
//         setIsPaused(false);
//         setSelection("");
//     };

//     return (
//         <>
//             {selection && (
//                 <div
//                     style={{ left: `${position.x}px`, top: `${position.y}px` }}
//                     className="fixed bg-white border p-2 rounded-lg shadow-lg flex space-x-2 items-center"
//                 >
//                     <button onClick={handleSpeak} className="bg-blue-500 text-white px-2 py-1 rounded-md">
//                         🔊 Read
//                     </button>

//                     {isSpeaking && !isPaused && (
//                         <button onClick={handlePause} className="bg-yellow-500 text-white px-2 py-1 rounded-md">
//                             ⏸️ Pause
//                         </button>
//                     )}

//                     {isPaused && (
//                         <button onClick={handleResume} className="bg-green-500 text-white px-2 py-1 rounded-md">
//                             ▶️ Resume
//                         </button>
//                     )}

//                     {isSpeaking && (
//                         <button onClick={handleStop} className="bg-red-500 text-white px-2 py-1 rounded-md">
//                             ⏹ Stop
//                         </button>
//                     )}

//                     <select value={language} onChange={(e) => setLanguage(e.target.value)} className="border p-1 rounded-md">
//                         <option value="en-US">🇺🇸 English</option>
//                         <option value="es-ES">🇪🇸 Spanish</option>
//                         <option value="fr-FR">🇫🇷 French</option>
//                         <option value="de-DE">🇩🇪 German</option>
//                         <option value="hi-IN">🇮🇳 Hindi</option>
//                     </select>
//                 </div>
//             )}
//         </>
//     );
// };

// export default TextToSpeech;

import { useState, useRef, useEffect } from "react";

const TextToSpeech = () => {
    const [selection, setSelection] = useState("");
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [language, setLanguage] = useState("en-US");

    const utteranceRef = useRef(null);

    const updatePosition = () => {
        const selectedText = window.getSelection().toString();
        if (selectedText) {
            const range = window.getSelection().getRangeAt(0);
            const rect = range.getBoundingClientRect();

            setPosition({
                x: rect.left + window.scrollX, // Ensure position is relative to document
                y: rect.top + window.scrollY - 40 // Adjust top position as needed
            });
        }
    };

    const handleMouseUp = () => {
        const selectedText = window.getSelection().toString();
        if (selectedText) {
            setSelection(selectedText);
            updatePosition(); // Update position on text selection
        } else {
            setSelection("");
        }
    };

    useEffect(() => {
        // Handle selection and scrolling events
        document.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("scroll", updatePosition, { passive: true });

        // Update position in case user scrolls during text selection
        return () => {
            document.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("scroll", updatePosition);
        };
    }, [selection]); // Dependencies ensure this runs when selection changes

    const handleSpeak = () => {
        if (selection) {
            speechSynthesis.cancel(); // Stop any existing speech before starting a new one

            const utterance = new SpeechSynthesisUtterance(selection);
            utterance.lang = language;

            utterance.onstart = () => {
                setIsSpeaking(true);
                setIsPaused(false);
            };

            utterance.onend = () => {
                setIsSpeaking(false);
                setIsPaused(false);
                setSelection("");
            };

            utteranceRef.current = utterance;
            speechSynthesis.speak(utterance);
        }
    };

    const handlePause = () => {
        if (speechSynthesis.speaking && !speechSynthesis.paused) {
            speechSynthesis.pause();
            setIsPaused(true);
        }
    };

    const handleResume = () => {
        if (speechSynthesis.paused) {
            speechSynthesis.resume();
            setIsPaused(false);
        }
    };

    const handleStop = () => {
        speechSynthesis.cancel();
        setIsSpeaking(false);
        setIsPaused(false);
        setSelection("");
    };

    return (
        <>
            {selection && (
                <div
                    style={{ left: `${position.x}px`, top: `${position.y}px` }}
                    className="fixed bg-white border p-2 rounded-lg shadow-lg flex space-x-2 items-center"
                >
                    <button onClick={handleSpeak} className="bg-blue-500 text-white px-2 py-1 rounded-md">
                        🔊 Read
                    </button>

                    {isSpeaking && !isPaused && (
                        <button onClick={handlePause} className="bg-yellow-500 text-white px-2 py-1 rounded-md">
                            ⏸️ Pause
                        </button>
                    )}

                    {isPaused && (
                        <button onClick={handleResume} className="bg-green-500 text-white px-2 py-1 rounded-md">
                            ▶️ Resume
                        </button>
                    )}

                    {isSpeaking && (
                        <button onClick={handleStop} className="bg-red-500 text-white px-2 py-1 rounded-md">
                            ⏹ Stop
                        </button>
                    )}

                    <select value={language} onChange={(e) => setLanguage(e.target.value)} className="border p-1 rounded-md">
                        <option value="en-US">🇺🇸 English</option>
                        <option value="es-ES">🇪🇸 Spanish</option>
                        <option value="fr-FR">🇫🇷 French</option>
                        <option value="de-DE">🇩🇪 German</option>
                        <option value="hi-IN">🇮🇳 Hindi</option>
                    </select>
                </div>
            )}
        </>
    );
};

export default TextToSpeech;
