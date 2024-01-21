interface JsonObject {
    [key: string]: JsonObject | string | string[] |number | boolean | null | undefined;
}

function toFormData(jsonObj: JsonObject): FormData {
    const formData = new FormData();

    for (const key in jsonObj) {
        if (jsonObj.hasOwnProperty(key)) {
            formData.append(key, String(jsonObj[key]));
        }
    }

    return formData;
}

export default toFormData;
