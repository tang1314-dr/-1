export default function (value) {
    if (/^\[/.test(value)) {
        return JSON.parse(value).join(",")
    } else {
        return value
    }
}
