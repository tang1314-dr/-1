export default function (value) {
    return new Date(Number(value)).toLocaleDateString()
}