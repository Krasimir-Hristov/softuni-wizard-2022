function initState() {
    let startX = Math.floor(Math.random() * 1000);
    let startY = Math.floor(Math.random() * 500)

    const state = {
        player: `Pesho`,
        gameOver: false,
        score: 0,
        scoreRate: 1,
        killScore: 1000,
        wizard: {
            width: 82,
            height: 100,
            posX: startX,
            posY: startY,
            speed: 7
        },

        bugStats: {
            width: 50,
            height: 50,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1500,
            speed: 10,
        },

        cloudStats: {
            width: 100,
            height: 100,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 2500,
            speed: 5,
        },

        fireball: {
            width: 50,
            height: 50,
            speed: 12,
            nextSpawnTimestamp: 0,
            fireRate: 500,
        },
          
        keys: {
            KeyA: false,
            KeyS: false,
            KeyD: false,
            KeyW: false,
            Space: false,
        }
        
    }

    return state;
}