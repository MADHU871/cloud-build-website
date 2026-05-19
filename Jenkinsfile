pipeline {

    agent any

    environment {

        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"

        IMAGE_NAME = "cloud-build-website"

        CONTAINER_NAME = "cloud-container"

        DOCKER_USERNAME = "YOUR_DOCKERHUB_USERNAME"
    }

    stages {

        stage('Git Pull') {

            steps {

                git branch: 'main',
                url: 'https://github.com/MADHU871/cloud-build-website.git'

            }
        }

        stage('Node Check') {

            steps {

                sh 'node -v'
                sh 'npm -v'

            }
        }

        stage('Install Dependencies') {

            steps {

                sh 'npm install'

            }
        }

        stage('Docker Pull') {

            steps {

                sh 'docker pull node:20-alpine'

            }
        }

        stage('Docker Build') {

            steps {

                sh '''
                docker build \
                --platform linux/arm64/v8 \
                -t $IMAGE_NAME .
                '''
            }
        }

        stage('Docker Logs Before Run') {

            steps {

                sh 'docker images'

            }
        }

        stage('Docker Stop Old Container') {

            steps {

                sh 'docker stop $CONTAINER_NAME || true'
                sh 'docker rm $CONTAINER_NAME || true'

            }
        }

        stage('Docker Run Automation') {

            steps {

                sh '''
                docker run -d \
                --restart always \
                --platform linux/arm64/v8 \
                -p 3001:3000 \
                --name $CONTAINER_NAME \
                $IMAGE_NAME
                '''
            }
        }

        stage('Docker Logs') {

            steps {

                sh 'docker logs $CONTAINER_NAME'

            }
        }

        stage('Docker Copy') {

            steps {

                sh '''
                docker cp \
                $CONTAINER_NAME:/app/package.json \
                ./package-copy.json
                '''
            }
        }

        stage('Docker Push') {

            steps {

                sh '''
                docker tag $IMAGE_NAME \
                $DOCKER_USERNAME/$IMAGE_NAME
                '''

                sh '''
                docker push \
                $DOCKER_USERNAME/$IMAGE_NAME
                '''
            }
        }

        stage('Docker Trigger') {

            steps {

                echo 'Docker automation and trigger successful'

            }
        }
    }
}