pipeline {
    agent any  // Define which node to run the pipeline on

    stages {
        stage('Pre-build: Install & Verify Node') {
            steps {
                sh '''
                    export PATH=/usr/local/bin:/opt/homebrew/bin:$PATH
                    echo "Node: $(which node)"
                    echo "NPM: $(which npm)"
                    node -v
                    npm -v
                '''
            }
        }
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
