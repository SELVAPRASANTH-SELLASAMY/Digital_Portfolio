const useTimeCalculator = () => {
    const getTime = (startMonth,startYear,endMonth = null,endYear = null) => {
        const date = new Date();
        const currentMonth = endMonth ? Number(endMonth) : Number(date.getMonth()) + 1;
        const currentYear = endYear ? Number(endYear) : Number(date.getFullYear());
        const month = currentMonth < Number(startMonth) ? (12 - startMonth) + currentMonth : currentMonth - Number(startMonth);
        const year = currentYear - (Number(startYear) + (currentMonth < Number(startMonth) ? 1 : 0));
        return year+` yr${year > 1 ? 's ' : ' '}`+month+` mo${month > 1 ? 's' : ""}`;
    }

    return getTime;
}

export default useTimeCalculator;