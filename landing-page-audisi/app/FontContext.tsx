'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Define the context value type
interface FontContextType {
  isDyslexicFont: boolean;
  setIsDyslexicFont: Dispatch<SetStateAction<boolean>>;
}

// Default context value
const defaultContextValue: FontContextType = {
  isDyslexicFont: false,
  setIsDyslexicFont: () => {},
};

const FontContext = createContext<FontContextType>(defaultContextValue);

interface FontProviderProps {
  children: ReactNode; // Explicitly define the type for children
}

export const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
  const [isDyslexicFont, setIsDyslexicFont] = useState<boolean>(false);

  return (
    <FontContext.Provider value={{ isDyslexicFont, setIsDyslexicFont }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFontContext = () => useContext(FontContext);