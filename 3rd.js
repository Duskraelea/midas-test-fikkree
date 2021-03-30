const inputTextArr = ['Hello world',
'Hello 1 world',
'Penguin Hello Croissant Sora world Boss',
'Hello orld',
'world Hello 1',
'world Texas Hello 1',
'Hello1world Helloworld',
'nooooo']

function checkHelloWorld ({str, prefix, suffix}) {
    if ((str.indexOf(prefix) || str.indexOf(suffix)) < 0) return false
    return true
}

function extract ({ str, prefix, suffix }) {
    const splittedText = str.split(/ /u)
    if (checkHelloWorld({ str: splittedText, prefix, suffix })) {
        if (splittedText.indexOf(suffix) < splittedText.indexOf(prefix)) return `String is swapped between ${prefix} and ${suffix}`
        return str.substring(str.indexOf(prefix) + prefix.length, str.indexOf(suffix))
    } else {
        return `String does not contains ${prefix} and/or ${suffix} as a word`
    }
}

const objectData = inputTextArr.reduce((acc, item) => {
    acc.push({
        str: item,
        prefix: "Hello",
        suffix: "world"
    })
    return acc
}, []).forEach(object => {
    console.log(extract({
        str: object.str,
        prefix: object.prefix,
        suffix: object.suffix
    }))
})

// console.log(extract(inputText))
// console.log(extract(inputText2))
// console.log(extract(inputText3))
// console.log(extract(inputText4))
// console.log(extract(inputText5))
// console.log(extract(inputText6))
// console.log(extract(inputText7))
// console.log(extract(inputText8))

