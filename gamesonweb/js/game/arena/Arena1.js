

Arena1 = function (game) {

    // Appel des variables nécéssaires
    this.game = game;
    var scene = game;
    //position d'apparition du joueur dans le niveau;
    this.spawn = new BABYLON.Vector3(0, 15 * 1, 0);
    //Vitesse du joueur dans le niveau
    this.speed = 1.5;
    var music2 = new BABYLON.Sound(
        "Music", "assets/sons/music.mp3", scene, null, {
        loop: true,
        autoplay: true
    }
    )
    this.music = music2;

    //Material pour normal box
    var materialNormalBox = new BABYLON.StandardMaterial("NormalBoxTexture", scene);
    materialNormalBox.diffuseTexture = new BABYLON.Texture("assets/images/decor1/grass.jpg", scene);
    materialNormalBox.diffuseTexture.uScale = 1.0;
    materialNormalBox.diffuseTexture.vScale = 1.0;
    scene.materialNormalBox = materialNormalBox;


     //MESH DE FIN - Ramene au menu
     this.end = BABYLON.MeshBuilder.CreateBox("box1", { size: 60 }, scene);
     var endMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
     endMaterial.alpha = 0
     this.end.material = endMaterial
     this.end.position = new BABYLON.Vector3(5100, -60, 0);
     var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 50, 0), scene);
     light.intensity = 1.3
     //MESH DE FIN - Ramene au menu

     loader = BABYLON.SceneLoader.Append('assets/model/', 'scene1end.glb', scene, function (scene) {
        // do something with the scene
    })
    loader.onMeshLoaded = function (mesh) {
        mesh.position = new BABYLON.Vector3(5100, -100, 0)
        mesh.scaling = new BABYLON.Vector3(50, 50, 50)
    }

    /**DECOR*********************************************************************** */
    if (scene.decorOn == true) {
        var decor1 = new Decor1(scene);
    }
    /********************************************************************** */

    scene.mapEngine = new MapEngine(scene, "D")

    params = { "trigger": -1, "normalCubesProbability": 1000, "pattern": [-1, 0, 1], "minWidth": 3 }
    scene.mapEngine.addParamsConfiguration(params)
    params = { "trigger": 800, "normalCubesProbability": 950, "pattern": [0], "minWidth": 1, "change": 80 }
    scene.mapEngine.addParamsConfiguration(params)
    params = { "trigger": 4000, "normalCubesProbability": 1000, "pattern": [0, 1], "minWidth": 1, "change": 20, "maxWidth": 2 }
    scene.mapEngine.addParamsConfiguration(params)
    params = { "trigger": 5000, "normalCubesProbability": 0, "pattern": [-1, 0, 1], "minWidth": 1, "change": 0 }
    scene.mapEngine.addParamsConfiguration(params)



    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnEveryFrameTrigger },
        function () {
            updateMap(scene)

        }
    ));
    return this


}