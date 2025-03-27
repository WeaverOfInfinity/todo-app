pipeline {
    agent {
        label 'jenkins-agent'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
                
                sh 'npm ci'
            }

        }

        stage('Lint') {
            steps {
                sh 'npx eslint "**/*.js"'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}