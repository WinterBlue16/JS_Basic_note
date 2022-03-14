sampleLongString = 'hello javascript\nhello nodejs\nhello nestjs'
arrayByLine = sampleLongString.match(/[^\r\n]+/g)
console.log(arrayByLine)