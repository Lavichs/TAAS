export const formatDateRange = (date1Str, date2Str) => {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    const date1 = new Date(date1Str);
    const date2 = new Date(date2Str);

    if (date1.getMonth() !== date2.getMonth()) {
        const startDate = date1.getDate();
        const startMonth = months[date1.getMonth()];
        const endDate = date2.getDate();
        const endMonth = months[date2.getMonth()];
        const year = date1.getFullYear();

        return `${startDate} ${startMonth} - ${endDate} ${endMonth} ${year}`;
    } else {
        const startDate = date1.getDate();
        const endDate = date2.getDate();
        const month = months[date1.getMonth()];
        const year = date1.getFullYear();

        return `${startDate}-${endDate} ${month} ${year}`;
    }
}

export const differenceDate = (date1Str, date2Str) => {
    const date1 = new Date(date1Str);
    const date2 = new Date(date2Str);

    // Рассчитываем разницу в миллисекундах
    const diffInMs = Math.abs(date2 - date1);

    return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
}

export const getToday = () => {
    let currentDate = new Date();
    return currentDate.getDate() + '-' + currentDate.getMonth() + '-' + currentDate.getFullYear()
}