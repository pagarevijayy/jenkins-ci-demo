pipeline {
    agent any  // Define which node to run the pipeline on

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

        stage('Deploy') {
            steps {
                echo 'Deploying the app...'
                sh 'mkdir -p production && cp -r * production/'
            }
        }
    }
}
