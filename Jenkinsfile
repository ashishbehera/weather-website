pipeline {
    agent any
    environment {
        NEW_VERSION = '1.3.0'
    }

    stages {
        stage('Build') {
            steps {
                echo "Building Verion ${NEW_VERSION}"
                withCredentials([
            usernamePassword(credentialsId: 'server_creds',
              usernameVariable: 'username',
              passwordVariable: 'password')
          ]) {
                    echo "User Name ${username}"
                     echo "Password ${password}"

          }
            }
        }
        stage('Test') {
            steps {
                echo 'Test12345'
          }        }
        stage('QA') {
            when {
                branch 'master'
            }
            steps {
                echo 'QA in Master Branch'
            }
        }
        stage('Install Node') {
            steps {
                echo 'executing yarn...'
                nodejs('NodeJS 18.7.0') {
                    sh 'npm install'
                }
            }
        }

        //     stage('Cloning GIT') {
//         steps {
//             git 'https://github.com/ashishbehera/weather-website.git'
//         }
//     }

//            stage("Run the Weather App") {
//             steps {
//                 echo 'executing yarn...'
//                 nodejs('NodeJS 18.7.0') {
//                     sh 'npm run start'
//                 }
//             }
//         }

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

    //     post {
    //         always {
    //         }
    //         success {
    //         }
    //         failure{
    //         }
    //     }
    }
