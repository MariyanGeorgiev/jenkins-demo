pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/dr-programmer/jenkins-demo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'No build step for this simple app.'
            }
        }

        stage('Deploy') {
            steps {
                sh 'npx pm2 start index.js || npx pm2 restart index.js'
            }
        }
    }
}

