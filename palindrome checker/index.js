const input = document.getElementById("input")

function reverseString(str) {
    return str.split("").reverse().join("")
}
function check() {
    const value = input.value
    const reversed = reverseString(value)

    if (value === reversed){
        alert("Palindrome")
    } else{
        alert("Not a palindrome")
    }

    input.value = "";
}