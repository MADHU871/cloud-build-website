pipeline {
    agent any

    stages {

        stage('Git Pull') {
            steps {
                git 'https://github.com/MADHU871/cloud-build-website.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t cloud-build-website .'
            }
        }

        stage('Docker Run') {
            steps {
                sh 'docker stop cloud-container || true'
                sh 'docker rm cloud-container || true'
                sh 'docker run -d -p 3000:3000 --name cloud-container cloud-build-website'
            }
        }

    }
}