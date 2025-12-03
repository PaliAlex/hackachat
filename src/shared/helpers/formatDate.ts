export const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // convert seconds → ms
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // months are 0-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}