pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }
        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to Staging Environment...'
                sh 'mkdir -p staging && cp -r * staging/'
            }
        }
        stage('Approval') {
            steps {
                input message: 'Deploy to Production?'
            }
        }
        stage('Deploy to Production') {
            steps {
                echo 'Deploying to Production Environment...'
                sh 'mkdir -p production && cp -r * production/'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed! Please check the logs.'
            echo 'Sending notification...'
        }
    }
}
