
function initGameObjects() {
    const startScreen = document.querySelector('.start-screen');
    const gameScreen = document.querySelector('.game-screen');
    const scoreScreen = document.querySelector('.score');
    const endScreen = document.querySelector('.end-screen');
    const totalScore = document.querySelector('.total-score');

    return {
        startScreen,
        gameScreen,
        scoreScreen,
        endScreen,
        totalScore,
        createWizard(initialState) {
            let wizardElement = document.createElement('div');
            wizardElement.classList.add('wizard');

            wizardElement.style.width = initialState.width + 'px';
            wizardElement.style.height = initialState.height + 'px';

            wizardElement.style.left = initialState.posX + 'px';
            wizardElement.style.top = initialState.posY + 'px';

            this.wizardElement = wizardElement;
            gameScreen.appendChild(wizardElement)

            return wizardElement;
        },
        createFireball(wizard, fireball) {
            let fireBallElement = document.createElement('div');
            fireBallElement.classList.add('fireball');
            fireBallElement.style.left = wizard.posX + wizard.width + 'px';
            fireBallElement.style.top = wizard.posY + wizard.height / 3 + 5 + 'px';
            fireBallElement.style.width = fireball.width + 'px';
            fireBallElement.style.height = fireball.height + 'px';

            gameScreen.appendChild(fireBallElement);
        },

        createBug(stats) {
            const bugElement = document.createElement('div');
            bugElement.classList.add('bug');
            bugElement.style.width = stats.width +'px';
            bugElement.style.height = stats.height +'px';
            bugElement.style.left = gameScreen.offsetWidth - stats.width + 'px'
            bugElement.style.top = Math.floor(Math.random() * gameScreen.offsetHeight - stats.height) + 'px';

            gameScreen.appendChild(bugElement);
        },

        createClouds(stats) {
            const cloudElement = document.createElement('div');
            cloudElement.classList.add('cloud');
            cloudElement.style.width = stats.width +'px';
            cloudElement.style.height = stats.height +'px';
            cloudElement.style.left = gameScreen.offsetWidth - stats.width + 'px'
            cloudElement.style.top = Math.floor(Math.random() * gameScreen.offsetHeight - stats.height) + 'px';

            gameScreen.appendChild(cloudElement);
        }
       
    };
}

