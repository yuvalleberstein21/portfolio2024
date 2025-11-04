import { useState } from "react";
import { Eye, Moon, Sun, ZoomIn, ZoomOut } from "lucide-react";

const AccessibilityButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState(100);
    const [isHighContrast, setIsHighContrast] = useState(false);

    const increaseFontSize = () => {
        const newSize = Math.min(fontSize + 10, 150);
        setFontSize(newSize);
        document.documentElement.style.fontSize = `${newSize}%`;
    };

    const decreaseFontSize = () => {
        const newSize = Math.max(fontSize - 10, 80);
        setFontSize(newSize);
        document.documentElement.style.fontSize = `${newSize}%`;
    };

    const resetFontSize = () => {
        setFontSize(100);
        document.documentElement.style.fontSize = "100%";
    };

    const toggleHighContrast = () => {
        setIsHighContrast(!isHighContrast);
        document.documentElement.classList.toggle("high-contrast");
    };

    return (
        <div className="fixed bottom-6 left-4 z-50">
            {/* כפתור עיקרי */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition"
                aria-label="Accessibility Options"
            >
                <Eye className="h-6 w-6" />
            </button>

            {/* תפריט נפתח */}
            {isOpen && (
                <div className="absolute bottom-16 left-0 bg-slate-600 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg w-64 p-4 animate-fadeIn">
                    <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        אפשרויות נגישות
                    </h3>

                    {/* שינוי גודל טקסט */}
                    <div className="mb-4">
                        <p className="text-xs text-gray-300 mb-2">גודל טקסט</p>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={decreaseFontSize}
                                disabled={fontSize <= 80}
                                className="p-2 border rounded-md hover:bg-gray-500 disabled:opacity-40"
                            >
                                <ZoomOut className="h-4 w-4" />
                            </button>
                            <span className="text-sm w-10 text-center">{fontSize}%</span>
                            <button
                                onClick={increaseFontSize}
                                disabled={fontSize >= 150}
                                className="p-2 border rounded-md hover:bg-gray-500 disabled:opacity-40"
                            >
                                <ZoomIn className="h-4 w-4" />
                            </button>
                        </div>
                        <button
                            onClick={resetFontSize}
                            className="w-full mt-2 text-sm text-blue-600 hover:underline"
                        >
                            אפס
                        </button>
                    </div>

                    {/* קו הפרדה */}
                    <hr className="my-3 border-gray-300 dark:border-gray-700" />

                    {/* ניגודיות גבוהה */}
                    <div>
                        <button
                            onClick={toggleHighContrast}
                            className={`w-full flex items-center justify-center gap-2 p-2 rounded-md text-sm font-medium transition ${isHighContrast
                                ? "bg-yellow-500 text-black hover:bg-yellow-400"
                                : "border border-gray-300 hover:bg-gray-100"
                                }`}
                        >
                            {isHighContrast ? (
                                <Sun className="h-4 w-4" />
                            ) : (
                                <Moon className="h-4 w-4" />
                            )}
                            ניגודיות גבוהה
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccessibilityButton;
