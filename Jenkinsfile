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
       stage("Install Node") {
            steps {
                echo 'executing yarn...'
                nodejs('NodeJS 18.7.0') {
                    sh 'npm install'
                }
            }
        }
           stage("Run the Weather App") {
            steps {
                echo 'executing yarn...'
                nodejs('NodeJS 18.7.0') {
                    sh 'npm run start'
                }
            }
        }
//         stage("run backend") {
//             steps {
//                  echo 'executing gradle...'
//                 env.GRADLE_USER_HOME = "$WORKSPACE/.gradle"
//                 withGradle() {
//                     sh 'chmod +x gradlew'
//                     sh './gradlew -v'
//                 }
//             }
//         }
   }
    
//     stage('Cloning GIT') {
//         steps {
//             git 'https://github.com/ashishbehera/weather-website.git'
//         }
//     }
}
