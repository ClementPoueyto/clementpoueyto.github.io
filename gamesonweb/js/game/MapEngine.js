const patternLengh = 20

class MapEngine {


    constructor(game, seed = "Geome3Dash") {
        this.game = game

        this.params = []

        // Player 
        this.spaw = new BABYLON.Vector3(0, 100, 0);
        this.jumpCubesVector = new BABYLON.Vector3(0, 1, 0);
        this.boostCubesVector = new BABYLON.Vector3(1, 1, 0);

        this.destroyMeshes = 8
        this.createMeshes = 40
        this.seed = seed
        this.rand = random_seed(this.seed)
        this.run = true

        this.currentParam = -1
        this.cubeWidth = 13
        this.minWidth = 3
        this.maxWidth = 0
        this.dangerMaxHeight = 5
        this.change = 0
        this.pattern = [-1, 0, 1]
        this.defaultPattern = [-1, 0, 1]
        this.currentPattern = new Map()
        this.jumpCubesPower = 500
        this.superJumpCubesPower = 5000
        this.boostPower = 200
        this.dangerPower = 400
        this.upCubeTriggerX = 40
        this.upCubeDefaultTriggerX = 10
        this.downCubeTriggerX = 2
        this.downCubeTriggerY = 0.5
        this.downCubeTriggerZ = 2
        this.heightDifferenceUp = 6
        this.heightDifferenceDown = -6
        this.arenaStartingHeight = 0
        this.upCubeSpeed = 0.1
        this.downCubeSpeed = -0.4
        this.maxUpCubeSpeed = 0
        this.maxUpCubeHeight = 20 * this.cubeWidth
        this.angle = 0

        // Arrays of meshes
        this.normalCubes = []
        this.upCubes = []
        this.downCubes = []
        this.jumpCubes = []
        this.superJumpCubes = []
        this.dangerCubes = []
        this.boostCubes = []

        // Current game position
        this.currentGameX = 0
        this.currentGameY = 0
        this.currentGameZ = 0

        // Array of probability (between 0 and 1000)
        this.normalCubesProbability = [0, 1000]
        this.upCubesProbability = []
        this.downCubesProbability = []
        this.heightDifferenceUpProbability = []
        this.heightDifferenceDownProbability = []
        this.jumpCubesProbability = []
        this.superJumpCubesProbability = []
        this.dangerCubesProbability = []
        this.boostCubesProbability = []

        //material
        this.normalCubesMat = null
        this.upCubesMat = game.redMat
        this.downCubesMat = null
        this.jumpCubesMat = null
        this.superJumpCubesMat = null
        this.dangerCubesMat = null
        this.boostCubesMat = game.blueMat

    }

    /**
     * 
     * @param {Array} params 
     */
    addParamsConfiguration(params) {
        this.params.push(params.slice())
    }
    /**
     * Change params
     * @param {Array} param 
     */
    setParamsConfiguration(param) {
        this.setNewPattern(param[1])
        this.defaultPattern = param[1].splice()
        this.change = param[2]
        this.arenaStartingHeight = param[3]
        this.normalCubesProbability = range(0, param[4])
        this.upCubesProbability = range(0, param[5])
        this.downCubesProbability = range(0, param[6])
        this.heightDifferenceUpProbability = range(0, param[7])
        this.heightDifferenceDownProbability = range(0, param[8])
        this.jumpCubesProbability = range(0, param[9])
        this.jumpCubesPower = param[10]
        this.superJumpCubesProbability = range(0, param[11])
        this.superJumpCubesPower = param[12]
        this.dangerCubesProbability = range(0, param[13])
        this.boostCubesProbability = range(0, param[14])
        this.boostPower = param[15]
        this.minWidth = param[16]
        this.maxWidth = param[17]
        this.change = param[18]
        this.maxUpCubeSpeed = param[19]


    }
    /**
     * Update params 
     */
    updateParams() {
        for (let i = 0; i < this.params.length; i++) {
            if (this.params[i][0] < this.currentGameX * this.cubeWidth && this.currentParam < i) {
                this.setParamsConfiguration(this.params[i])
                this.currentParam = i
                break
            }
        }

    }

    createRandomItem(position) {
        let r = Math.floor(this.rand() * 1000)

        if (this.normalCubesProbability.includes(r)) {
            this.createNormalBox(position)
        } else if (this.upCubesProbability.includes(r)) {
            this.createUpBox(position)
        } else if (this.downCubesProbability.includes(r)) {
            this.createDownBox(position)
        } else if (this.heightDifferenceUpProbability.includes(r)) {
            this.currentGameY += this.heightDifferenceUp
            this.createNormalBox(position)
        } else if (this.heightDifferenceDownProbability.includes(r)) {
            this.currentGameY += this.heightDifferenceDown
            this.createNormalBox(position)
        } else if (this.jumpCubesProbability.includes(r)) {
            this.createJumpBox(position)
        } else if (this.superJumpCubesProbability.includes(r)) {
            this.createSuperJumpBox(position)
        } else if (this.dangerCubesProbability.includes(r)) {
            position.y += Math.floor(this.rand() * this.dangerMaxHeight) * this.cubeWidth
            this.createDangerBox(position)
        } else if (this.boostCubesProbability.includes(r)) {
            this.createBoostBox(position)
        }

    }
    /**
     * Create a rows of cubes
     */
    createCubesRows() {
        if (Math.floor(this.rand() * 1000) < this.change) {
            this.setNewPattern(incArray(this.pattern, Math.floor(this.rand() * 3) - 1))
        }
        let pos = this.pattern.slice();
        shuffle(pos, this.rand());
        for (let i = 0; i < Math.floor(this.rand() * this.maxWidth + this.minWidth); i++) {
            let position = new BABYLON.Vector3(this.currentGameX * this.cubeWidth, this.currentGameY, pos.pop() * this.cubeWidth)
            this.createRandomItem(position);
        }

    }
    /**
     * Create row cubes until the vision field
     */
    createNextMeshes() {
        this.updateParams()
        while (this.game.player.box.position.x > this.currentGameX * this.cubeWidth - this.createMeshes * this.cubeWidth) {
            this.createCubesRows();
            this.currentGameX += 1
        }

    }
    /**
     * playerPos : X
     * @param {*} playerPos 
     */
    getCurrentPattern(playerPos) {
        let foo = []
        let last = []
        for (var [pos, pattern] of this.currentPattern) {
            if (playerPos + 2 * this.cubeWidth >= pos)
                foo = pattern
            last = pattern
        }
        if (foo.length == 0)
            return last
        return foo

    }

    setNewPattern(pattern) {
        this.pattern = pattern.slice()
        this.currentPattern.set(this.currentGameX * this.cubeWidth, pattern.slice())


    }


    /**
     * Reset all the map (destroy all meshes)
     */
    resetMap() {
        this.normalCubes.forEach(function (mesh) {
            mesh.dispose()
        });
        this.upCubes.forEach(function (mesh) {
            mesh.dispose()
        });
        this.downCubes.forEach(function (mesh) {
            mesh.dispose()
        });
        this.jumpCubes.forEach(function (mesh) {
            mesh.dispose()
        });
        this.superJumpCubes.forEach(function (mesh) {
            mesh.dispose()
        });
        this.dangerCubes.forEach(function (mesh) {
            mesh.dispose()
        });
        this.boostCubes.forEach(function (mesh) {
            mesh.dispose()
        });
        this.normalCubes = []
        this.upCubes = []
        this.downCubes = []
        this.jumpCubes = []
        this.superJumpCubes = []
        this.boostCubes = []
        this.dangerCubes = []

        this.currentGameX = 0
        this.currentGameY = 0
        this.currentGameZ = 0
        this.rand = random_seed(this.seed)
        this.currentPattern = new Map()
        this.currentParam = -1
        this.pattern = this.defaultPattern.splice()

    }

    /**
     * Destroy only meshes that the player have already passed
     */
    destroyBackMeshes() {

        for (let i = 0; i < this.normalCubes.length; i++) {
            if (this.game.player.box.position.x > this.normalCubes[i].position.x + this.destroyMeshes * this.cubeWidth) {
                this.normalCubes[i].dispose()
                this.normalCubes.splice(i, 1);
            }
        }
        for (let i = 0; i < this.upCubes.length; i++) {
            if (this.game.player.box.position.x > this.upCubes[i].position.x + this.destroyMeshes * this.cubeWidth) {
                this.upCubes[i].dispose()
                this.upCubes.splice(i, 1);
            }

        }
        for (let i = 0; i < this.downCubes.length; i++) {
            if (this.game.player.box.position.x > this.downCubes[i].position.x + this.destroyMeshes * this.cubeWidth) {
                this.downCubes[i].dispose()
                this.downCubes.splice(i, 1);
            }

        }
        for (let i = 0; i < this.jumpCubes.length; i++) {
            if (this.game.player.box.position.x > this.jumpCubes[i].position.x + this.destroyMeshes * this.cubeWidth) {
                this.jumpCubes[i].dispose()
                this.jumpCubes.splice(i, 1);
            }

        }

        for (let i = 0; i < this.superJumpCubes.length; i++) {
            if (this.game.player.box.position.x > this.superJumpCubes[i].position.x + this.destroyMeshes * this.cubeWidth) {
                this.superJumpCubes[i].dispose()
                this.superJumpCubes.splice(i, 1);
            }
        }
        for (let i = 0; i < this.dangerCubes.length; i++) {
            if (this.game.player.box.position.x > this.dangerCubes[i].position.x + this.destroyMeshes * this.cubeWidth) {
                this.dangerCubes[i].dispose()
                this.dangerCubes.splice(i, 1);
            }
        }
        for (let i = 0; i < this.boostCubes.length; i++) {
            if (this.game.player.box.position.x > this.boostCubes[i].position.x + this.destroyMeshes * this.cubeWidth) {
                this.boostCubes[i].dispose()
                this.boostCubes.splice(i, 1);
            }
        }



    }
    /**
     * Create a danger vector(random vector X,Y)
     */
    getDangerVector() {
        return new BABYLON.Vector3(2 * this.rand() - 1.5, 2 * this.rand() - 1.5, 0)
    }


    /******************************************************** */
    //                      CUBES CREATION                    //
    /******************************************************** */


    /**
    * Création cube générique 
    * @param {} position 
    */
    createBox(position, name) {
        var mainBox = BABYLON.MeshBuilder.CreateBox("normalBox", { size: 3 }, this.game);
        var scene = this.game
        mainBox.scaling.y = 3;
        mainBox.name = "box"
        mainBox.scaling.x = 4;
        mainBox.scaling.z = 4;
        mainBox.position = position
        mainBox.rotate(BABYLON.Axis.Z, this.angle, BABYLON.Space.WORLD);
        mainBox.actionManager = new BABYLON.ActionManager(this.game);
        mainBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            { trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: scene.player.box },
            function (mainBox) { scene.player.hasJump = false; }
        ));
        return mainBox
    }

    createSphere(position, name) {
        var mainBox = BABYLON.MeshBuilder.CreateSphere("normalBox", { size: 3 }, this.game);
        var scene = this.game
        mainBox.scaling.y = 15;
        mainBox.name = "box"
        mainBox.scaling.x = 15;
        mainBox.scaling.z = 15;
        mainBox.position = position
        mainBox.position.Y+=15
        mainBox.rotate(BABYLON.Axis.Z, this.angle, BABYLON.Space.WORLD);
        mainBox.actionManager = new BABYLON.ActionManager(this.game);
        mainBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            { trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: scene.player.box },
            function (mainBox) { scene.player.hasJump = false; }
        ));
        return mainBox
    }

    /**
    * Cube normal statique
    * @param {} position 
    */
    createNormalBox(position) {
        var mainBox = this.createBox(position)
        mainBox.checkCollisions = true;
        mainBox.material = this.game.materialNormalBox;
        mainBox.physicsImpostor = new BABYLON.PhysicsImpostor(mainBox, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, this.game);
        this.normalCubes.push(mainBox);
    }

    /**
     * Cube qui monte lorsque on l'aproche
     * @param {} position 
     */
    createUpBox(position) {
        var mainBox = this.createBox(position)
        mainBox.material = this.upCubesMat
        mainBox.checkCollisions = true;
        mainBox.physicsImpostor = new BABYLON.PhysicsImpostor(mainBox, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, this.game);
        this.upCubes.push(mainBox);
    }
    

    /**
    * Cube qui descend lorsque l'on est dessus
    * @param {} position 
    */
    createDownBox(position) {
        var mainBox = this.createBox(position)
        mainBox.material = this.downCubesMat

        mainBox.checkCollisions = true;
        mainBox.physicsImpostor = new BABYLON.PhysicsImpostor(mainBox, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, this.game);
        this.downCubes.push(mainBox);
    }
    /**
    * Cube saut
    * @param {} position 
    */
    createJumpBox(position) {
        var mainBox = this.createBox(position)
        mainBox.material = this.jumpCubesMat
        var scene = this.game
        mainBox.checkCollisions = true;
        mainBox.physicsImpostor = new BABYLON.PhysicsImpostor(mainBox, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, this.game);
        mainBox.actionManager = new BABYLON.ActionManager(this.game);
        mainBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            { trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: scene.player.box },
            function () {
                var contactLocalRefPoint = BABYLON.Vector3.Zero();
                scene.player.box.physicsImpostor.applyForce(scene.mapEngine.jumpCubesVector.scale(scene.mapEngine.jumpCubesPower), scene.player.box.getAbsolutePosition().add(contactLocalRefPoint));

            }
        ));
        this.jumpCubes.push(mainBox);
        return mainBox
    }
    createSuperJumpBox(position) {
        var mainBox = this.createBox(position)
        mainBox.material = this.superJumpCubesMat
        var scene = this.game
        mainBox.checkCollisions = true;
        mainBox.physicsImpostor = new BABYLON.PhysicsImpostor(mainBox, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, this.game);
        mainBox.actionManager = new BABYLON.ActionManager(this.game);
        mainBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            { trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: scene.player.box },
            function () {
                var contactLocalRefPoint = BABYLON.Vector3.Zero();
                scene.player.box.physicsImpostor.applyForce(scene.mapEngine.jumpCubesVector.scale(scene.mapEngine.superJumpCubesPower), scene.player.box.getAbsolutePosition().add(contactLocalRefPoint));

            }
        ));
        this.superJumpCubes.push(mainBox);
    }
    createDangerBox(position) {
        var mainBox = this.createBox(position)
        mainBox.material = this.dangerCubesMat
        var scene = this.game
        mainBox.checkCollisions = true;
        mainBox.physicsImpostor = new BABYLON.PhysicsImpostor(mainBox, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0, restitution: 0 }, this.game);
        mainBox.actionManager = new BABYLON.ActionManager(this.game);
        mainBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            { trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: scene.player.box },
            function () {
                scene.player.box.position = scene.arena.spawn;
                scene.mapEngine.resetMap()
                scene.keepPosition = new BABYLON.Vector3.Zero();

            }
        ));
        this.dangerCubes.push(mainBox);
    }
    createBoostBox(position) {
        position.y += 13
        var mainBox = this.createSphere(position)
        var scene = this.game
        mainBox.checkCollisions = true;
        mainBox.material = this.boostCubesMat
        mainBox.physicsImpostor = new BABYLON.PhysicsImpostor(mainBox, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0, restitution: 0 }, this.game);
        mainBox.actionManager = new BABYLON.ActionManager(this.game);
        mainBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            { trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: scene.player.box },
            function () {
                var forceDirection = scene.mapEngine.boostCubesVector
                var contactLocalRefPoint = BABYLON.Vector3.Zero();
                scene.player.box.physicsImpostor.applyImpulse(forceDirection.scale(scene.mapEngine.boostPower), scene.player.box.getAbsolutePosition().add(contactLocalRefPoint));

            }
        ));

        var particleSystem = new BABYLON.ParticleSystem("particles", 10000, scene);
        particleSystem.particleTexture = new BABYLON.Texture("assets/images/flare.png", scene);
        var radius = 0.5;
        var angle = Math.PI / 4;
        mainBox.rotate(BABYLON.Axis.Z,0, BABYLON.Space.WORLD);
        var sphereEmitter = particleSystem.createSphereEmitter(0.3);
        particleSystem.emitter = mainBox;
        mainBox.rotation.z = -300
        particleSystem.color2 =new BABYLON.Color4(0.2, 0.8, 0.2, 1);
        particleSystem.color1 = new BABYLON.Color4(0.2, 0.8, 0.2, 1);
        particleSystem.colorDead = new BABYLON.Color4(0.2, 0.8, 0.2, 1);
        particleSystem.gravity = new BABYLON.Vector3(-20, 15, 0);

        // Size of each particle (random between...
        particleSystem.minSize = 0.1;
        particleSystem.maxSize = 0.5;

        // Life time of each particle (random between...
        particleSystem.minLifeTime = 0.2;
        particleSystem.maxLifeTime = 0.9;

        // Emission rate
        particleSystem.emitRate = 4000;

        // Speed
        particleSystem.minEmitPower = 0;
        particleSystem.maxEmitPower = 0.5;
        particleSystem.updateSpeed = 0.008;

        particleSystem.start();
        this.boostCubes.push(mainBox);


    }

    setMaterial(normalCubesMat, upCubesMat, downCubesMat, jumpCubesMat, superJumpCubesMat, dangerCubesMat, boostCubesMat) {
        this.normalCubesMat = normalCubesMat
        this.upCubesMat = upCubesMat
        this.downCubesMat = downCubesMat
        this.jumpCubesMat = jumpCubesMat
        this.superJumpCubesMat = superJumpCubesMat
        this.dangerCubesMat = dangerCubesMat
        this.boostCubesMat = boostCubesMat

    }

}
/**
 * 
 * @param {BABYLON.Scene} scene 
 */
function updateMap(scene) {
    scene.mapEngine.updateParams()
    scene.mapEngine.destroyBackMeshes()
    scene.mapEngine.createNextMeshes()


    // Update downCubes position
    scene.mapEngine.downCubes.forEach(function (mesh) {
        if ((scene.player.box.position.x > mesh.position.x - scene.mapEngine.downCubeTriggerX * scene.mapEngine.cubeWidth)
            && (mesh.position.y + scene.mapEngine.downCubeTriggerY * 13 > scene.player.box.position.y) && scene.mapEngine.run) {
            mesh.position.y += scene.mapEngine.downCubeSpeed
        }
    });

    // Update upCubes position
    scene.mapEngine.upCubes.forEach(function (mesh) {
        if (scene.player.box.position.x > mesh.position.x - scene.mapEngine.upCubeTriggerX * scene.mapEngine.cubeWidth && mesh.position.y < scene.mapEngine.maxUpCubeHeight + scene.mapEngine.currentGameY
            && scene.mapEngine.run)
            mesh.position.y += min(scene.mapEngine.maxUpCubeSpeed, Math.abs(scene.mapEngine.upCubeSpeed * (scene.player.box.position.y - scene.mapEngine.currentGameY) / scene.mapEngine.cubeWidth))

    });




}
