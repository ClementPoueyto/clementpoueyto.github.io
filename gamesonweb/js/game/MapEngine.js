const patternLengh = 20

class MapEngine {


    constructor(game, seed = "Geome3Dash") {
        this.game = game

        this.params = []

        // -------- Don't touch--------------//
        this.jumpCubesVector = new BABYLON.Vector3(0, 1, 0);
        this.boostCubesVector = new BABYLON.Vector3(1, 1, 0);
        // Random
        this.seed = seed
        this.rand = random_seed(this.seed)
        // stop and restart
        this.run = true
        this.currentPattern = new Map()
        this.currentParam = -1
        this.cubeWidth = 13
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



        //--------Editable-------//

        // Performances
        this.destroyMeshes = 20
        this.createMeshes = 10

        // Arena width and change params
        this.minWidth = 0
        this.maxWidth = 0
        // probability to change between 0 and 1000
        this.change = 0

        // must be the same, define array's lines
        this.pattern = [0, 1]
        this.defaultPattern = [0, 1]

        // power and speed params here
        this.jumpCubesPower = 500
        this.superJumpCubesPower = 5000
        this.boostPower = 200
        this.downCubeSpeed = -0.4
        this.maxUpCubeSpeed = 3

        // Trigger params here
        this.upCubeTriggerX = 20
        this.downCubeTriggerX = 2
        this.downCubeTriggerY = 0.5
        this.downCubeTriggerZ = 2

        // height params
        this.heightDifferenceUp = 6
        this.heightDifferenceDown = -6
        this.arenaStartingHeight = 0
        this.upCubeSpeed = 0.08
        this.maxUpCubeHeight = 20
        // define cube rotation angle
        this.angle = 0
        // danger cubes are between current arena height and maxHeight
        this.dangerMaxHeight = 5


        // Array of probability (between 0 and 1000)
        this.normalCubesProbability = []
        this.upCubesProbability = []
        this.downCubesProbability = []
        this.heightDifferenceUpProbability = []
        this.heightDifferenceDownProbability = []
        this.jumpCubesProbability = []
        this.superJumpCubesProbability = []
        this.dangerCubesProbability = []
        this.boostCubesProbability = []


        //--------Editable before starting play loop-------//
        //materials
        this.normalCubesMat = null
        this.upCubesMat = game.redMat
        this.downCubesMat = game.temp
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
        if (params.hasOwnProperty("trigger"))
            this.params.push(params)
        else
            console.log("bad params")
    }
    /**
     * Change params
     * @param {Array} params 
     */
    setParamsConfiguration(params) {
        if (params.hasOwnProperty("minWidth"))
            this.minWidth = params["minWidth"]
        if (params.hasOwnProperty("maxWidth"))
            this.maxWidth = params["maxWidth"]
        if (params.hasOwnProperty("change"))
            this.change = params["change"]
        if (params.hasOwnProperty("pattern"))
            this.setNewPattern(params["pattern"])
        if (params.hasOwnProperty("jumpCubesPower"))
            this.jumpCubesPower = params["jumpCubesPower"]
        if (params.hasOwnProperty("superJumpCubesPower"))
            this.superJumpCubesPower = params["superJumpCubesPower"]
        if (params.hasOwnProperty("boostPower"))
            this.boostPower = params["boostPower"]
        if (params.hasOwnProperty("downCubeSpeed"))
            this.downCubeSpeed = params["downCubeSpeed"]
        if (params.hasOwnProperty("maxUpCubeSpeed"))
            this.maxUpCubeHeight = params["maxUpCubeSpeed"]
        if (params.hasOwnProperty("upCubeTriggerX"))
            this.upCubeTriggerX = params["upCubeTriggerX"]
        if (params.hasOwnProperty("downCubeTriggerX"))
            this.downCubeTriggerX = params["downCubeTriggerX"]
        if (params.hasOwnProperty("downCubeTriggerY"))
            this.downCubeTriggerY = params["downCubeTriggerY"]
        if (params.hasOwnProperty("downCubeTriggerZ"))
            this.downCubeTriggerZ = params["downCubeTriggerZ"]
        if (params.hasOwnProperty("heightDifferenceUp"))
            this.heightDifferenceUp = params["heightDifferenceUp"]
        if (params.hasOwnProperty("heightDifferenceDown"))
            this.heightDifferenceDown = params["heightDifferenceDown"]
        if (params.hasOwnProperty("arenaStartingHeight"))
            this.arenaStartingHeight = params["arenaStartingHeight"]
        if (params.hasOwnProperty("upCubeSpeed"))
            this.upCubeSpeed = params["upCubeSpeed"]
        if (params.hasOwnProperty("maxUpCubeHeight"))
            this.maxUpCubeHeight = params["maxUpCubeHeight"]
        if (params.hasOwnProperty("angle"))
            this.angle = params["angle"]
        if (params.hasOwnProperty("dangerMaxHeight"))
            this.dangerMaxHeight = params["dangerMaxHeight"]
        // Probability must me given in this order !
        if (params.hasOwnProperty("normalCubesProbability"))
            this.normalCubesProbability = range(0, params["normalCubesProbability"])
        if (params.hasOwnProperty("upCubesProbability"))
            this.upCubesProbability = range(0, params["upCubesProbability"])
        if (params.hasOwnProperty("downCubesProbability"))
            this.downCubesProbability = range(0, params["downCubesProbability"])
        if (params.hasOwnProperty("heightDifferenceUpProbability"))
            this.heightDifferenceUpProbability = range(0, params["heightDifferenceUpProbability"])
        if (params.hasOwnProperty("heightDifferenceDownProbability"))
            this.heightDifferenceDownProbability = range(0, params["heightDifferenceDownProbability"])
        if (params.hasOwnProperty("jumpCubesProbability"))
            this.jumpCubesProbability = range(0, params["jumpCubesProbability"])
        if (params.hasOwnProperty("superJumpCubesProbability"))
            this.superJumpCubesProbability = range(0, params["superJumpCubesProbability"])
        if (params.hasOwnProperty("dangerCubesProbability"))
            this.dangerCubesProbability = range(0, params["dangerCubesProbability"])
        if (params.hasOwnProperty("boostCubesProbability"))
            this.boostCubesProbability = range(0, params["boostCubesProbability"])


    }
    /**
     * Update params 
     */
    updateParams() {
        for (let i = 0; i < this.params.length; i++) {

            if (this.params[i]["trigger"] < this.currentGameX * this.cubeWidth && this.currentParam < i) {
                this.setParamsConfiguration(this.params[i])
                this.currentParam = i
                break
            }
        }

    }
    /**
     * Add new object on the map by following probability
     * @param {BABYLON.Vector3} position 
     */

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
     * Create 1 row of cubes
     */
    createCubesRows() {
        if (Math.floor(this.rand() * 1000) < this.change) {
            this.setNewPattern(incArray(this.pattern, Math.floor(this.rand() * 3) - 1))
        }
        let pos = this.pattern.slice();
        shuffle(pos, this.rand());
        for (let i = 0; i < Math.floor(this.rand() * this.maxWidth) + this.minWidth; i++) {
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
     * Allow to know what is the pattern under the player
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

        this.currentPattern = new Map()
        this.currentParam = -1
        this.rand = random_seed(this.seed)
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

        // Arena width and change params
        this.minWidth = 0
        this.maxWidth = 0
        // probability to change between 0 and 1000
        this.change = 0
        // power and speed params here
        this.jumpCubesPower = 500
        this.superJumpCubesPower = 5000
        this.boostPower = 200
        this.downCubeSpeed = -0.4
        this.maxUpCubeSpeed = 3

        // Trigger params here
        this.upCubeTriggerX = 20
        this.downCubeTriggerX = 2
        this.downCubeTriggerY = 0.5
        this.downCubeTriggerZ = 2

        // height params
        this.heightDifferenceUp = 6
        this.heightDifferenceDown = -6
        this.arenaStartingHeight = 0
        this.upCubeSpeed = 0.08
        this.maxUpCubeHeight = 20
        // define cube rotation angle
        this.angle = 0
        // danger cubes are between current arena height and maxHeight
        this.dangerMaxHeight = 5


        // Array of probability (between 0 and 1000)
        this.normalCubesProbability = []
        this.upCubesProbability = []
        this.downCubesProbability = []
        this.heightDifferenceUpProbability = []
        this.heightDifferenceDownProbability = []
        this.jumpCubesProbability = []
        this.superJumpCubesProbability = []
        this.dangerCubesProbability = []
        this.boostCubesProbability = []

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
        mainBox.scaling.y = 1.5;
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
        mainBox.position.Y += 15
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
        mainBox.rotate(BABYLON.Axis.Z, 0, BABYLON.Space.WORLD);
        var sphereEmitter = particleSystem.createSphereEmitter(0.3);
        particleSystem.emitter = mainBox;
        mainBox.rotation.z = -300
        particleSystem.color2 = new BABYLON.Color4(0.2, 0.8, 0.2, 1);
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
    //console.log(scene.mapEngine.normalCubes.length)


    // Update downCubes position
    scene.mapEngine.downCubes.forEach(function (mesh) {
        if ((scene.player.box.position.x > mesh.position.x - scene.mapEngine.downCubeTriggerX * scene.mapEngine.cubeWidth)
            && (mesh.position.y + scene.mapEngine.downCubeTriggerY * 13 > scene.player.box.position.y) && scene.mapEngine.run) {
            mesh.position.y += scene.mapEngine.downCubeSpeed
        }
    });

    // Update upCubes position
    scene.mapEngine.upCubes.forEach(function (mesh) {
        if (scene.player.box.position.x > mesh.position.x - scene.mapEngine.upCubeTriggerX * scene.mapEngine.cubeWidth && mesh.position.y < scene.mapEngine.maxUpCubeHeight * scene.mapEngine.cubeWidth + scene.mapEngine.currentGameY
            && scene.mapEngine.run)
            mesh.position.y += min(scene.mapEngine.maxUpCubeSpeed, Math.abs(scene.mapEngine.upCubeSpeed * (scene.player.box.position.y - scene.mapEngine.currentGameY) / scene.mapEngine.cubeWidth))

    });




}
