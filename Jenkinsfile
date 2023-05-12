pipeline {
    agent any
    stages {
        stage ("Build") {
          steps {
            echo "Build"
          }
        }
        stage ("Test") {
         steps {
            echo "Test12345"
          }        }
        stage("QA") {
         steps {
            echo "QA Demo Test 1236789000567"
          }
        }
       stage("run frontend") {
            steps {
                echo 'executing yarn...'
                nodejs('NodeJS 18.7.0') {
                    sh 'npm config set strict-ssl false'
                    sh 'yarn install'
                }
            }
        }
        stage("run backend") {
            steps {
                 echo 'executing gradle...'
                withGradle() {
                    sh './gradlew -v'
                }
            }
        }
   }
}
