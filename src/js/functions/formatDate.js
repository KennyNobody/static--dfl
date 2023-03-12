function formatDate(num) {
    const date = new Date(num * 1000);

    const hoursDefault = date.getHours();
    const minutesDefault = date.getMinutes();
    const hours = hoursDefault > 9 ? hoursDefault : `0${  hoursDefault}`;
    const minutes = minutesDefault > 9 ? minutesDefault : `0${  minutesDefault}`;

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const str = `${hours}:${minutes}, ${date.toLocaleString('ru', options)}`;
    return str.slice(0, -3);
}

export { formatDate };
