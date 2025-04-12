pipeline {
    agent any  // Define which node to run the pipeline on

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'export PATH=/usr/local/bin:/opt/homebrew/bin:$PATH && npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'export PATH=/usr/local/bin:/opt/homebrew/bin:$PATH && npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the app...'
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
