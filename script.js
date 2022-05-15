const changeTheme = () => {
    document.documentElement.classList.toggle("dark");
}

const changeLang = () => {
    if (document.documentElement.lang === "en") {
        document.documentElement.setAttribute("lang", "ro");
    } else {
        document.documentElement.setAttribute("lang", "en");
    }
}