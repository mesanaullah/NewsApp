"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearchPlus, FaMoon, FaSun } from "react-icons/fa";
import { MdAccessible } from "react-icons/md";

const FloatingActionButton = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [magnifierActive, setMagnifierActive] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const magnifierRef = useRef(null);
    const contentRef = useRef(null);
    const containerRef = useRef(null);
    const zoomLevel = 2;

    // Dark mode effect
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.style.setProperty('--background-color', '#1a202c');
            document.documentElement.style.setProperty('--text-color', '#ffffff');
            document.documentElement.style.backgroundColor = 'var(--background-color)';
            document.documentElement.style.color = 'var(--text-color)';
        } else {
            document.documentElement.style.setProperty('--background-color', '#ffffff');
            document.documentElement.style.setProperty('--text-color', '#1a202c');
            document.documentElement.style.backgroundColor = 'var(--background-color)';
            document.documentElement.style.color = 'var(--text-color)';
        }
    }, [isDarkMode]);

    const handleMouseMove = (e) => {
        if (!magnifierRef.current) return;

        const x = e.clientX;
        const y = e.clientY;

        // Position magnifier 75px above and left of cursor
        magnifierRef.current.style.transform = `translate(${x - 75}px, ${y - 75}px)`;

        // Get elements under cursor (excluding magnifier itself)
        const elements = document.elementsFromPoint(x, y);
        const textElement = elements.find(el =>
            el !== magnifierRef.current &&
            !magnifierRef.current?.contains(el) &&
            el.textContent?.trim()
        );

        if (textElement) {
            const rect = textElement.getBoundingClientRect();
            const style = window.getComputedStyle(textElement);

            // Calculate relative position within the element
            const localX = x - rect.left;
            const localY = y - rect.top;

            // Clone text styles for accurate rendering
            contentRef.current.style.fontFamily = style.fontFamily;
            contentRef.current.style.fontSize = style.fontSize;
            contentRef.current.style.lineHeight = style.lineHeight;
            contentRef.current.style.letterSpacing = style.letterSpacing;
            contentRef.current.style.padding = style.padding;

            // Update content and positioning
            contentRef.current.innerHTML = textElement.innerHTML;
            contentRef.current.style.transform = `
                scale(${zoomLevel})
                translate(${75 - localX * zoomLevel}px, 
                          ${75 - localY * zoomLevel}px)
            `;
        }
    };
    const handleClickOutside = (event) => {
        if (
            containerRef.current &&
            !containerRef.current.contains(event.target) &&
            magnifierRef.current &&
            !magnifierRef.current.contains(event.target)
        ) {
            setMagnifierActive(false);
        }
    };

    const handleEscapeKey = (event) => {
        if (event.key === 'Escape') {
            setMagnifierActive(false);
        }
    };

    useEffect(() => {
        if (magnifierActive) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscapeKey);
            document.body.style.cursor = 'none';
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.cursor = 'auto';
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [magnifierActive]);

    return (
        <div ref={containerRef} className="fixed right-4 bottom-6 flex flex-col items-end z-50">
            {/* Zoom Toggle Button */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
                className="mb-2"
            >
                <button
                    onClick={() => setMagnifierActive(!magnifierActive)}
                    className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
                    aria-label={magnifierActive ? "Close magnifier" : "Open magnifier"}
                >
                    <FaSearchPlus className="w-6 h-6" />
                </button>
            </motion.div>

            {/* Magnifier Lens */}
            {magnifierActive && (
                <div
                    ref={magnifierRef}
                    className="pointer-events-none fixed w-[150px] h-[150px] rounded-full border-2 border-blue-500 overflow-hidden bg-white/90 backdrop-blur-sm shadow-xl"
                    style={{
                        left: '0',
                        top: '0',
                        transform: 'translate(-9999px, -9999px)' // Initial off-screen position
                    }}
                >
                    <div
                        ref={contentRef}
                        className="origin-top-left inline-block will-change-transform"
                        style={{
                            transform: `scale(${zoomLevel})`,
                            pointerEvents: 'none',
                            userSelect: 'none'
                        }}
                    />
                </div>
            )}

            {/* Dark Mode Button */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mb-2"
            >
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
                    aria-label={isDarkMode ? "Disable dark mode" : "Enable dark mode"}
                >
                    {isDarkMode ? (
                        <FaSun className="w-6 h-6" />
                    ) : (
                        <FaMoon className="w-6 h-6" />
                    )}
                </button>
            </motion.div>

            {/* Main Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-800 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            >
                <MdAccessible className="w-6 h-6" />
            </button>
        </div>
    );
};

export default FloatingActionButton;

