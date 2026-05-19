pipeline {

    agent any

    environment {

        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"

        IMAGE_NAME = "cloud-build-website"

        CONTAINER_NAME = "cloud-container"

        DOCKER_USERNAME = "mad0008271"

        APP_PORT = "3001"
    }

    stages {

        stage('Git Pull') {

            steps {

                echo 'Pulling Source Code From GitHub'

                git branch: 'main',
                url: 'https://github.com/MADHU871/cloud-build-website.git'
            }
        }

        stage('Node Check') {

            steps {

                echo 'Checking Node.js and npm'

                sh 'node -v'

                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {

            steps {

                echo 'Installing npm Packages'

                sh 'npm install'
            }
        }

        stage('Docker Pull') {

            steps {

                echo 'Pulling Base Docker Image'

                sh 'docker pull node:20-alpine'
            }
        }

        stage('Docker Build') {

            steps {

                echo 'Building Docker Image'

                sh '''
                docker build \
                --platform linux/arm64/v8 \
                -t $IMAGE_NAME .
                '''
            }
        }

        stage('Docker Images') {

            steps {

                echo 'Checking Docker Images'

                sh 'docker images'
            }
        }

        stage('Docker Stop Old Container') {

            steps {

                echo 'Stopping Old Container'

                sh 'docker stop $CONTAINER_NAME || true'

                sh 'docker rm $CONTAINER_NAME || true'
            }
        }

        stage('Docker Run Automation') {

            steps {

                echo 'Running Docker Container'

                sh '''
                docker run -d \
                --restart always \
                --platform linux/arm64/v8 \
                -p $APP_PORT:3000 \
                --name $CONTAINER_NAME \
                $IMAGE_NAME
                '''
            }
        }

        stage('Docker Logs') {

            steps {

                echo 'Checking Docker Logs'

                sh 'docker logs $CONTAINER_NAME'
            }
        }

        stage('Docker Copy') {

            steps {

                echo 'Copying File From Container'

                sh '''
                docker cp \
                $CONTAINER_NAME:/app/package.json \
                ./package-copy.json
                '''
            }
        }

        stage('Docker Login') {

            steps {

                echo 'DockerHub Login'

                withCredentials([usernamePassword(

                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'

                )]) {

                    sh '''
                    echo $DOCKER_PASS | docker login \
                    -u $DOCKER_USER \
                    --password-stdin
                    '''
                }
            }
        }

        stage('Docker Tag') {

            steps {

                echo 'Tagging Docker Image'

                sh '''
                docker tag \
                $IMAGE_NAME \
                $DOCKER_USERNAME/$IMAGE_NAME:latest
                '''
            }
        }

        stage('Docker Push') {

            steps {

                echo 'Pushing Docker Image To DockerHub'

                sh '''
                docker push \
                $DOCKER_USERNAME/$IMAGE_NAME:latest
                '''
            }
        }

        stage('Docker Pull Test') {

            steps {

                echo 'Testing Docker Pull'

                sh '''
                docker pull \
                $DOCKER_USERNAME/$IMAGE_NAME:latest
                '''
            }
        }

        stage('Docker Trigger') {

            steps {

                echo 'Docker CI/CD Trigger Successful'
            }
        }

        stage('Deployment Success') {

            steps {

                echo 'Application Successfully Deployed'

                echo 'Open Application:'

                echo 'http://localhost:3001'
            }
        }
    }

    post {

        always {

            echo 'Pipeline Finished'
        }

        success {

            echo 'CI/CD Pipeline SUCCESS'
        }

        failure {

            echo 'CI/CD Pipeline FAILED'
        }
    }
}