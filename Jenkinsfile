pipeline {
    agent any  // Define which node to run the pipeline on

    environment {
        NODE_ENV = 'production'
        DEPLOY_USER = 'jenkins'
    }

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


        stage('Deploy to Staging') {
            when {
                branch 'staging'
            }
            steps {
                echo 'Deploying to Staging Environment...'
                sh 'mkdir -p staging && cp -r * staging/'
            }
        }

        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying to Production Environment...'
                sh 'mkdir -p production && cp -r * production/'
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully on branch: ${env.BRANCH_NAME}"
        }
        failure {
            echo 'Pipeline failed! Please check the logs.'
            echo 'Sending notification...'
        }
    }
}
