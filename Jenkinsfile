pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        PORT = '3000'
    }

    stages {
        stage('Clone repository') {
            steps {
                echo 'Cloning repo...'
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                sh 'npm install'
            }
        }

        stage('Build (optional)') {
            steps {
                echo 'No build step required for simple Node.js app'
            }
        }

        stage('Start Server') {
            steps {
                echo 'Starting Node.js server (index.js)...'
                sh 'nohup node index.js > output.log 2>&1 &'
            }
        }

        // Optional: health check
        stage('Health check') {
            steps {
                script {
                    sleep 5 // wait for server to start
                    def result = sh(script: "curl -s -o /dev/null -w \"%{http_code}\" http://localhost:${PORT}", returnStdout: true).trim()
                    if (result != '200') {
                        error "Health check failed with status ${result}"
                    } else {
                        echo "App is running and healthy."
                    }
                }
            }
        }
    }

    post {
        failure {
            echo 'Build failed.'
        }
        success {
            echo 'Build and server start successful!'
        }
    }
}

