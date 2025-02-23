The Piping and Redirection of Data Streams will work in terminal of mac os or WSL [linux OS]
    -For Piping
    You have to write this command
    node script.js | node app.js

    -For Redirection
    Redirection will only work upon the file
    Way to write the redirection command
        -node script.js > output.txt
    when we use stderr then it will print in the console
    for that you have to use file descriptor
        -node script.js 2> output.txt 
        it will only write stderr inside the output.txt
    
    If you want to add both output which is stdout and stderr
    then you need to use this command
        -node script.js > output.txt 2>> output.txt




-node app.js < output.txt
It will take output.txt as input and redirect to the app.js 