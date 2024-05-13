import DocumentService from "../API/DocumentService";
import {getToday} from "./dates";

export const downloadDocxFile = async (func, title, arg) => {
    try {
        const response = await func(arg);
        const url = URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', title + '_' + getToday() + '.docx');
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading the Word file:', error);
    }
};