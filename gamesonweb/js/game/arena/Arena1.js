

Arena1 = function (game) {

    // Appel des variables nécéssaires
    this.game = game;
    var scene = game;
    //position d'apparition du joueur dans le niveau;
    this.spawn = new BABYLON.Vector3(0, 15 * 1, 0);
    //Vitesse du joueur dans le niveau
    this.speed = 3;
    var music2 = new BABYLON.Sound(
        "Music", "assets/sons/music.mp3", scene, null, {
        loop: true,
        autoplay: true
    }
    )
    this.music = music2;


    /**DECOR*********************************************************************** */
    if (scene.decorOn == true) {
        var decor1 = new Decor1(scene);
    }
    /********************************************************************** */

    //Material pour normal box
    var materialNormalBox = new BABYLON.StandardMaterial("NormalBoxTexture", scene);
    materialNormalBox.diffuseTexture = new BABYLON.Texture("assets/images/decor1/grass.jpg", scene);
    materialNormalBox.diffuseTexture.uScale = 1.0;
    materialNormalBox.diffuseTexture.vScale = 1.0;
    scene.materialNormalBox = materialNormalBox;

    //MESH DE FIN - Ramene au menu
    this.end = BABYLON.MeshBuilder.CreateBox("box1", { size: 40 }, scene);
    this.end.position = new BABYLON.Vector3(5200, -40, 0);
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 100, 0), scene);
    light.intensity = 0.75
    //MESH DE FIN - Ramene au menu
    loader = BABYLON.SceneLoader.Append('assets/temp/', 'bin.glb', scene, function (scene) {
        // do something with the scene
    })

    loader.onMeshLoaded = function (mesh) {
        mesh.position = new BABYLON.Vector3(5200, -80, 0)
        mesh.scaling = new BABYLON.Vector3(50, 50, 50)

    }
    var materialPlayer = new BABYLON.StandardMaterial("NormalBoxTexture", scene);
    materialPlayer.diffuseTexture = new BABYLON.Texture("assets/images/decor1/waste.jpg", scene)
    materialPlayer.diffuseTexture.uScale = 1.0
    materialPlayer.diffuseTexture.vScale = 1.0
    //game.player.box.material = materialPlayer

    scene.mapEngine = new MapEngine(scene, "D")




    params = { "trigger": -1, "normalCubesProbability": 1000, "pattern": [-1, 0, 1], "minWidth": 3 }
    scene.mapEngine.addParamsConfiguration(params)
    params = { "trigger": 800, "normalCubesProbability": 950, "pattern": [0], "minWidth": 1, "change": 80 }
    scene.mapEngine.addParamsConfiguration(params)
    params = { "trigger": 4000, "normalCubesProbability": 1000, "pattern": [0, 1], "minWidth": 1, "change": 20, "maxWidth": 2 }
    scene.mapEngine.addParamsConfiguration(params)
    params = { "trigger": 5000, "normalCubesProbability": 1, "pattern": [-1, 0, 1], "minWidth": 1, "change": 0 }
    scene.mapEngine.addParamsConfiguration(params)



    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnEveryFrameTrigger },
        function () {
            updateMap(scene)

        }
    ));
    return this


}