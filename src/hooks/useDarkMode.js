import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

export default function useDarkMode () {

    const [isDarkMode, setDarkMode] = useLocalStorage('darkMode');

    useEffect(() => {
        isDarkMode ?
        document.body.classList.add("dark-mode")
        : document.body.classList.remove("dark-mode")
    }, [isDarkMode])

    return [isDarkMode, setDarkMode];
}