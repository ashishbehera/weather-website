def buildApp () {
    echo 'Buiding App from External'
}

def deployApp () {
    echo 'Deploying App from External'
    echo "Deployed code version is ${params.VERSION}"

}

def testApp () {
    echo 'Testing App from External'
}

return this

