/**
 * Definie la scene de jeu
 * @author Clement Poueyto
 */
createScene = function (engine, level) {

    /************************* variables initialisation ********************************** */
    var initCompt = new Date().getTime()
    var isloaded = false

    /********************* Moteur physique du jeu *********************** */
    var scene = new BABYLON.Scene(engine)
    var gravityVector = new BABYLON.Vector3(0, -150.81, 0)
    var physicsPlugin = new BABYLON.CannonJSPlugin()
    scene.enablePhysics(gravityVector, physicsPlugin)
    scene.clearColor = new BABYLON.Color3(0, 0, 0)
    scene.collisionsEnabled = true
    /********************* Player Controller *********************** */
    var previousMove = new Date().getTime()
    var previousTorque = new Date().getTime()
    var previousAcceleration = new Date().getTime()
    var previousJump = new Date().getTime()
    var previousPlayerPosX = 0
    // var defaultRotation = scene.camera.rotation
    var brakePower = 30
    var brakeInterval = 100
    var jumpPower = 100
    var sideDelay = 200
    var jumpVector = new BABYLON.Vector3(0, 1, 0)
    var brakeVector = new BABYLON.Vector3(-1, 0.01, 0)
    scene.keepPosition = new BABYLON.Vector3.Zero()
    /****************************************************************** */
    var player = new Player(this)
    scene.player = player
    player.position = new BABYLON.Vector3(0, 1, 0)
    player.movingSideTicks = 0
    player.movingSide = 0
    scene.actionManager = new BABYLON.ActionManager(scene)
    scene.end = false
    var shadowY = 0
    var bestScore = 0
    var ray = null
    var hit = null

    /********************* Camera  *********************** */
    scene.camera = new BABYLON.FreeCamera('camera', player.box.position, scene);
    var cameraAdd = 0;


    /****************************** Particle******************************** */
    /*var particleSystem = new BABYLON.ParticleSystem("laser", 10000, scene);
    particleSystem.particleTexture = new BABYLON.Texture("assets/images/flare.png", scene);
    particleSystem.emitter = player.box;
    particleSystem.emitRate = 3000;
    particleSystem.maxEmitBox = new BABYLON.Vector3(-1, 0, 0);
    particleSystem.minLifeTime = 0.1;
    particleSystem.maxLifeTime = 1;
    particleSystem.minSize = 0.2;
    particleSystem.maxSize = 1.1
    particleSystem.minEmitBox = new BABYLON.Vector3(-1, -2, -2);
    particleSystem.maxEmitBox = new BABYLON.Vector3(1, 2, 2);;
    particleSystem.color1 = new BABYLON.Color4(0.7, 0.3, 0.0, 1);
    particleSystem.color2 = new BABYLON.Color4(1, 0, 0.2, 0.0);
    particleSystem.colorDead = new BABYLON.Color4(1, 0, 0.2, 0.0);
    particleSystem.minEmitPower = 0.1;
    particleSystem.maxEmitPower = 8;
    particleSystem.updateSpeed = 0.01;
    particleSystem.start(); */

    /**************************** Material ************************************************/
    scene.redMat = new BABYLON.StandardMaterial('redMat', scene)
    scene.redMat.emissiveColor = new BABYLON.Color3(1, 0, 0)

    scene.yellowMat = new BABYLON.StandardMaterial('yellowMat', scene)
    scene.yellowMat.emissiveColor = new BABYLON.Color3(1, 1, 0)

    scene.greenMat = new BABYLON.StandardMaterial('greenMat', scene)
    scene.greenMat.emissiveColor = new BABYLON.Color3(0, 1, 0)

    scene.blueMat = new BABYLON.StandardMaterial('blueMat', scene)

    //scene.blueMat.diffuseTexture = new BABYLON.Texture("assets/images/Portal-PNG-Free-Image.png", scene);
    scene.blueMat.diffuseColor = new BABYLON.Color3(0.4, 0.2, 0.8)
    scene.blueMat.alpha = 0.03
    scene.cyanMat = new BABYLON.StandardMaterial('cyanMat', scene)
    scene.cyanMat.emissiveColor = new BABYLON.Color3(0, 1, 1)

    scene.temp = new BABYLON.StandardMaterial('cyanMat', scene)
    scene.temp.emissiveColor = new BABYLON.Color3(1, 0, 1)

    temp = new BABYLON.StandardMaterial('cyanMat', scene)
    temp.emissiveColor = new BABYLON.Color3(0, 0, 1)

    var myMaterial = new BABYLON.StandardMaterial('myMaterial', scene)
    myMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0)
    myMaterial.specularColor = new BABYLON.Color3(0, 0, 0)
    myMaterial.emissiveColor = new BABYLON.Color3(0, 0, 0)
    myMaterial.ambientColor = new BABYLON.Color3(0, 0, 0)

    /****************************** Platform ******************************** */

    var pointer = BABYLON.MeshBuilder.CreateSphere('pointer', { size: 3 }, scene)
    pointer.scaling.y = 0.01
    pointer.scaling.x = 0.4
    pointer.scaling.z = 0.4
    pointer.material = myMaterial

    /****************************** GUI ******************************** */
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI')
    advancedTexture.idealWidth = 1920
    advancedTexture.idealHeight = 1080
    advancedTexture.renderAtIdealSize = true
    var quitButton = new BABYLON.GUI.Button.CreateSimpleButton('quit', 'Quit')
    quitButton.width = 0.1
    quitButton.height = 0.08
    quitButton.color = 'black'
    quitButton.background = 'white'
    quitButton.left = '50px'
    quitButton.top = '30px'
    quitButton.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT
    quitButton.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
    quitButton.onPointerClickObservable.add(function () {
        window.location = 'index.html'
    })
    advancedTexture.addControl(quitButton)

    /************************************ Pause ***************************** */

    var stopButton = new BABYLON.GUI.Button.CreateSimpleButton('pause', 'Stop')
    stopButton.width = 0.1
    stopButton.height = 0.08
    stopButton.color = 'black'
    stopButton.background = 'white'
    stopButton.left = '50px'
    stopButton.top = '150px'
    stopButton.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT
    stopButton.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
    stopButton.onPointerClickObservable.add(function () {
        if (scene.keepPosition.x == 0 && scene.keepPosition.y == 0 && scene.keepPosition.z == 0) {
            player.box.physicsImpostor.sleep()
            scene.keepPosition = player.box.position
            scene.mapEngine.run = false
            stopButton.textBlock.text = 'Resume'
            scene.arena.music.pause()
        } else {
            stopButton.textBlock.text = 'Stop'
            scene.keepPosition = new BABYLON.Vector3.Zero()
            player.box.physicsImpostor.wakeUp()
            scene.mapEngine.run = true
            scene.arena.music.play()
        }
    })
    advancedTexture.addControl(stopButton)

    // X coord player
    var score = new BABYLON.GUI.TextBlock('Score')
    score.textWrapping = true
    score.position = 'absolute'
    score.width = 0.1
    score.height = 0.1
    score.color = 'red'
    score.text = ''
    score.fontSize = '25px'
    score.right = -30
    score.top = 10
    score.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT
    score.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
    advancedTexture.addControl(score)

    var highScore = new BABYLON.GUI.TextBlock('Highscore')
    highScore.textWrapping = true
    highScore.position = 'absolute'
    highScore.width = 0.1
    highScore.height = 0.1
    highScore.color = 'white'
    highScore.text = ''
    highScore.fontSize = '25px'
    highScore.right = -30
    highScore.top = 50
    highScore.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT
    highScore.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
    advancedTexture.addControl(highScore)

    // X coord player
    var textPlayerX = new BABYLON.GUI.TextBlock('X')
    textPlayerX.textWrapping = true
    textPlayerX.position = 'relative'
    textPlayerX.width = '100%'
    textPlayerX.height = '100%'
    textPlayerX.color = 'red'
    textPlayerX.text = ''
    textPlayerX.fontSize = '25px'
    textPlayerX.top = 360
    textPlayerX.left = 750
    advancedTexture.addControl(textPlayerX)

    // Y coord player
    var textPlayerY = new BABYLON.GUI.TextBlock('X')
    textPlayerY.textWrapping = true
    textPlayerY.position = 'absolute'
    textPlayerY.width = '100%'
    textPlayerY.height = '100%'
    textPlayerY.color = 'red'
    textPlayerY.text = ''
    textPlayerY.fontSize = '25px'
    textPlayerY.top = 390
    textPlayerY.left = 750
    advancedTexture.addControl(textPlayerY)

    // Z coord player
    var textPlayerZ = new BABYLON.GUI.TextBlock('X')
    textPlayerZ.textWrapping = true
    textPlayerZ.position = 'absolute'
    textPlayerZ.width = '100%'
    textPlayerZ.height = '100%'
    textPlayerZ.color = 'red'
    textPlayerZ.text = ''
    textPlayerZ.fontSize = '25px'
    textPlayerZ.top = 420
    textPlayerZ.left = 750
    advancedTexture.addControl(textPlayerZ)

    var jump = 0

    /*********************************** Level ************************************************ */
    scene.createLevel = function (lvl) {
        switch (lvl) {
            case 0:
                scene.arena = new Arena1(scene)
                break
            case 1:
                scene.arena = new Arena2(scene)
                break
            case 2:
                scene.arena = new Arena3(scene)
                break
            case 3:
                scene.arena = new Arena4(scene)
                break
            case 4:
                scene.arena = new Arena5(scene)
                break
            case 5:
                scene.arena = new Arena6(scene)
                break
            case 6:
                scene.arena = new Arena7(scene)
                break
            case 7:
                scene.arena = new Arena8(scene)
                break
            case 8:
                scene.arena = new Arena9(scene)
                break
        }
        scene.arena.levelId = lvl
        onLoad()
        initCompt = new Date().getTime()

        return scene.arena
    }

    var respawn = function () {
        resetMovementPlayer()
        player.box.position = scene.arena.spawn
        scene.mapEngine.resetMap()

    }

    var end = function () {
        markFinishedLevel(scene.arena.levelId, scene)
        resetMovementPlayer()
        scene.keepPosition = player.box.position
        player.box.physicsImpostor.sleep()
        scene.end = true
    }

    /****************************Control Multiple Keys************************************************/

    var map = {} //object for multiple key presses
    let container = document.createElement('div')
    let butns = document.createElement('div')
    container.appendChild(butns)
    butns.id = 'btns'
    document.querySelector('body').appendChild(container)

    function MobileButton () {
        let container = document.createElement('div')
        container.classList.add('pause_container')
        let btn = document.createElement('div')
        btn.classList.add('right')
        let img = document.createElement('img')
        img.src = 'assets/controller/pico-pause.png'
        btn.appendChild(img)
        btn.addEventListener('touchstart', (e) => {

            e.preventDefault()
            map['d'] = true
            setTimeout(() => {
                map['d'] = false
            }, 100)
        })
        container.appendChild(btn)
        butns.appendChild(container)

        btn = document.createElement('div')
        btn.classList.add('left')
        img = document.createElement('img')
        img.src = 'assets/controller/pico-pause.png'
        btn.appendChild(img)
        btn.addEventListener('touchstart', (e) => {
            e.preventDefault()
            map['q'] = true
            setTimeout(() => {
                map['q'] = false
            }, 100)
        })
        container.appendChild(btn)
        butns.appendChild(container)

        btn = document.createElement('div')
        btn.classList.add('pause')
        img = document.createElement('img')
        img.src = 'assets/controller/pico-pause.png'
        btn.appendChild(img)
        btn.addEventListener('touchstart', (e) => {
            e.preventDefault()
            map[' '] = true
            setTimeout(() => {
                map[' '] = false
            }, 100)
        })
        container.appendChild(btn)
        butns.appendChild(container)
    }

    MobileButton()

    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (evt) {
        map[evt.sourceEvent.key] = evt.sourceEvent.type == 'keydown'
        //console.log(map);

    }))

    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) {
        map[evt.sourceEvent.key] = evt.sourceEvent.type == 'keydown'
    }))

    /********************** Player and camera Update  ****************************************** */

    scene.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
            {
                trigger: BABYLON.ActionManager.OnEveryFrameTrigger,
            },
            function () {
                loading()
                if (scene.keepPosition.x == 0 && scene.keepPosition.y == 0 && scene.keepPosition.z == 0) {

                    var brakePower = (scene.arena.speed / 30) * 1000
                    player.box.physicsImpostor.setAngularVelocity(new BABYLON.Quaternion(0, 0, 0, 0))
                    // Try to speed up player if it's current speed is bellow ths max speed 
                    if (player.box.position.x - previousPlayerPosX < scene.arena.speed) {
                        var forceDirection = new BABYLON.Vector3(1, 0, 0)
                        var forceMagnitude = Math.floor((scene.arena.speed / 2) * 1000)
                        var contactLocalRefPoint = BABYLON.Vector3.Zero()
                        //player.box.physicsImpostor.applyForce(forceDirection.scale(forceMagnitude),
                           // player.box.getAbsolutePosition().add(contactLocalRefPoint))
                        player.box.position.x+=scene.arena.speed;
                    }
                    if (player.hasJump) {
                        //cameraAdd += 0.5
                        //cameraAdd = Math.min(cameraAdd, 60)
                    } else {
                        //cameraAdd -= 1
                        //cameraAdd = Math.max(cameraAdd, 25)
                    }
                    if (player.box.position.y + 20 * scene.mapEngine.cubeWidth < scene.mapEngine.currentGameY)
                        respawn()

                    // scene.camera.position.x += (player.box.position.x - scene.camera.position.x - 60) * 0.025
                    scene.camera.position.y += (player.box.position.y*1.2 - scene.camera.position.y + cameraAdd + 60) * 0.2
                    // scene.camera.position.z = player.box.position.z * 0.5


                    scene.camera.position.x = player.box.position.x - cameraAdd -120;
                    //scene.camera.position.y = Math.floor(50 +cameraAdd/2);
                    scene.camera.position.z = player.box.position.z*1.4
                    scene.camera.setTarget(new BABYLON.Vector3(player.box.position.x, 4, player.box.position.z));


                    actualScore = min(scene.arena.end.position.x, Math.floor(player.box.position.x))
                    score.text = 'Score: ' + actualScore
                    if (actualScore > bestScore) {
                        bestScore = actualScore
                        highScore.color = 'red'
                    } else {
                        highScore.color = 'white'
                    }
                    setCookie('highscore' + scene.arena.levelId, bestScore, 100 * 365)
                    highScore.text = 'Highscore: ' + bestScore

                    textPlayerX.text = 'x: ' + Math.floor(player.box.position.x)
                    textPlayerY.text = 'y: ' + Math.floor(player.box.position.y)
                    textPlayerZ.text = 'z: ' + Math.floor(player.box.position.z)
                    previousPlayerPosX = player.box.position.x

                    var vec = new BABYLON.Vector3(player.box.position.x, player.box.position.y - 3, player.box.position.z)
                    ray = new BABYLON.Ray(vec, new BABYLON.Vector3(0, -1, 0), 20 * scene.mapEngine.cubeWidth)
                    hit = scene.pickWithRay(ray)
                    if (hit.pickedMesh) {
                        shadowY = hit.pickedMesh.position.y
                    }

                    if (player.box.position.y > shadowY + 12) {
                        pointer.position.x = player.box.position.x + (player.box.position.y - shadowY) * scene.arena.speed * 0.28
                        pointer.position.y = shadowY + 6
                        pointer.position.z = player.box.position.z
                        pointer.scaling.x = min(2, 0.4 * (player.box.position.y - shadowY) / 13 + 0.4)
                        pointer.scaling.z = min(2, 0.4 * (player.box.position.y - shadowY) / 13 + 0.4)
                    } else {
                        pointer.position.y -= 500
                    }
                } else {

                    player.box.position = scene.keepPosition

                }
            })
    )

    function resetMovementPlayer () {
        player.box.physicsImpostor.setAngularVelocity(new BABYLON.Quaternion(0, 0, 0, 0))
        player.box.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 0, 0))
    }

    function loading () {
        if (isloaded == false) {
            let timeWaiting = 2000
            if (new Date().getTime() - initCompt > timeWaiting * 0.25) {
                text.text = 'loading .'
            }
            if (new Date().getTime() - initCompt > timeWaiting * 0.5) {
                text.text = 'loading . .'
            }
            if (new Date().getTime() - initCompt > timeWaiting * 0.75) {
                text.text = 'loading . . .'
            }
            if (new Date().getTime() - initCompt < timeWaiting) {
                player.box.physicsImpostor.sleep()
                scene.keepPosition = scene.arena.spawn
                scene.mapEngine.run = false
            } else {
                player.box.physicsImpostor.wakeUp()
                scene.keepPosition = new BABYLON.Vector3.Zero()
                scene.mapEngine.run = true
                isloaded = true
                advancedTextureLoading.dispose()
            }
        }
    }

    /**
     * Player action control:
     *  ->brake
     *  ->jump
     *  ->right
     *  ->left
     */
    scene.registerAfterRender(function () {

        /***** Transition on player shift (moving) *****/
        let scale = 13
        if (player.movingSideTicks <= 0) {
            player.movingSide = 0
            player.box.position.z = Math.round(player.box.position.z / 13) * 13
        } else {
            player.box.position.z += player.movingSide * 2
            player.movingSideTicks -= 2
        }

        /***** Shift (moving) *****/

        if (new Date().getTime() - previousMove > sideDelay) {
            if ((map['q'] || map['Q'])) {
                if (player.movingSide == 0 && ((Math.max.apply(null, scene.mapEngine.getCurrentPattern(player.box.position.x)) + 1) * scale) > player.box.position.z) {
                    player.movingSide = +1
                    player.movingSideTicks = scale
                    previousMove = new Date().getTime()
                }
            }


            if ((map['d'] || map['D'])) {
                if (player.movingSide == 0 && (-(Math.abs(Math.min.apply(null, scene.mapEngine.getCurrentPattern(player.box.position.x))) + 1) * scale) < player.box.position.z) {
                    player.movingSide = -1
                    player.movingSideTicks = scale
                    previousMove = new Date().getTime()
                }
            }


            if ((map['s'] || map['S']) && new Date().getTime() - previousTorque > brakeInterval) {
                var contactLocalRefPoint = BABYLON.Vector3.Zero()
                player.box.physicsImpostor.applyImpulse(brakeVector.scale(brakePower),
                    player.box.getAbsolutePosition().add(contactLocalRefPoint))
                previousTorque = new Date().getTime()

            }


            if ((map['z'] || map['Z'])) {
                // player.box.position.x += scale;
                // previousMove = new Date().getTime();
            }


            if (player.hasJump == false && (map[' ']) && new Date().getTime() - previousJump > 300) {
                var contactLocalRefPoint = BABYLON.Vector3.Zero()
                previousJump = new Date().getTime()
                jump = player.box.position.x
                var forceDirection = new BABYLON.Vector3(0, 1, 0)
                var contactLocalRefPoint = BABYLON.Vector3.Zero()
                scene.player.box.physicsImpostor.applyImpulse(forceDirection.scale(jumpPower),
                    scene.player.box.getAbsolutePosition().add(contactLocalRefPoint))
                player.hasJump = true
            }

        }

    })

    //Ensemble des actions a execute une fois le niveau charge
    function onLoad () {

        var scoreCookie = getCookie('highscore' + scene.arena.levelId)

        bestScore = scoreCookie == '' ? 0 : scoreCookie

        player.box.position = scene.arena.spawn
        player.box.actionManager = new BABYLON.ActionManager(scene)

        // Intersections, si le joueur franchit la fin du niveau revient au menu
        player.box.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            { trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: scene.arena.end },
            function () { end() }
        ))

    }

    var advancedTextureLoading = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI')
    advancedTextureLoading.idealWidth = 1920
    advancedTextureLoading.idealHeight = 1080
    advancedTextureLoading.renderAtIdealSize = true

    //advancedTexture.isForeground = true;

    //texte : titre du jeu
    var text = new BABYLON.GUI.TextBlock('loading')
    text.textWrapping = true
    text.position = 'absolute'
    text.width = '100%'
    text.height = '100%'
    text.text = `loading`
    text.color = 'white'
    text.fontSize = '60px'
    text.fontFamily = 'Verdana'
    text.top = -150
    advancedTextureLoading.addControl(text)

    return scene

}

function markFinishedLevel (levelId, scene) {
    setCookie('finished' + levelId, 1, 100 * 365)
    updateFinishedLevels(scene)
}

function updateFinishedLevels (scene) {
    for (let i = 0; i < scene.materials.length; i++) {
        if (getCookie('finished' + i) == 1) {
            scene.materials[i].diffuseTexture = new BABYLON.Texture('assets/images/poubelle.jpg', scene)
        }
    }

}

function getCookie (cname) {
    var name = cname + '='
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(';')
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ''
}

function setCookie (cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = 'expires=' + d.toUTCString()
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}