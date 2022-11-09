import { useEffect } from "react"

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title} - RH Digital photography`;
    }, [title])
};

export default UseTitle;