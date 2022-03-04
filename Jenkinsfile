pipeline {

    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress\integration\tutorialtest\firstest.spec.js", description: "Enter the script path that you want to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Choose the browser to execute test in:")        
    }

    stages{
        stage('Build'){
            steps{
                echo "Building the application"
            }
        }

        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

        stage('Deploying'){
            steps{
                echo "Deploy the application"
            }
        }
    }

}