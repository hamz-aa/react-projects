import { useState } from "react"

export function MyDate () {
    const [date, setDate] = useState([dateHandler()]);

    function dateHandler(){
        let date = new Date();
        let day = date.getDay();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let dayInMonth = date.getDate();

        let formattedDate = `${day} ${month} ${year} ${dayInMonth}`;

        return formattedDate;
    }

    return (
        <div>
            <p>{date}</p>
        </div>
    )
}