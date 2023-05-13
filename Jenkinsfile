pipeline {
    agent any
    parameters {
      choice(name: 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'])
      booleanParam(name: 'executeTest', defualtValue: true, desrcription: '')
    }
    tools {
        maven 'Maven'
    }
    environment {
        NEW_VERSION = '1.5.0'
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
          when {
            params.executeTest
          }
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

        stage('Install Maven') {
          steps {
        sh 'mvn install'
          }
        }

    stage('Deploy') {
      steps {
        echo 'Deeployed'
        echo "Deployed code version is ${params.VERSION}"
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
