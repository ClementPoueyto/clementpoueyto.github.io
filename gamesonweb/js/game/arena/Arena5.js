Arena5 = function (game) {

    // Appel des variables nécéssaires
    this.game = game;
    var scene = game;
    //position d'apparition du joueur dans le niveau;
    this.spawn = new BABYLON.Vector3(0, 15 * 1, 0);
    //Vitesse du joueur dans le niveau
    this.speed = 2;
    var music2 = new BABYLON.Sound(
        "Music", "assets/sons/music.mp3", scene, null, {
        loop: true,
        autoplay: true
    }
    )
    this.music = music2;

     //Material pour normal box
    var materialNormalBox = new BABYLON.StandardMaterial("NormalBoxTexture", scene);
    materialNormalBox.diffuseTexture = new BABYLON.Texture("assets/images/decor2/terre.jpg", scene);
    materialNormalBox.diffuseTexture.uScale = 1.0;
    materialNormalBox.diffuseTexture.vScale = 1.0;
    scene.materialNormalBox = materialNormalBox;

    //MESH DE FIN - Ramene au menu
    this.end = BABYLON.MeshBuilder.CreateBox("box1", { size: 80 }, scene);
    var endMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
    endMaterial.alpha = 0
    this.end.position = new BABYLON.Vector3(5140, -40, 0);
    this.end.material = endMaterial
     //MESH DE FIN - Ramene au menu
     loader = BABYLON.SceneLoader.Append('assets/model/', 'scene2end.glb', scene, function (scene) {
        // do something with the scene
    })
    loader.onMeshLoaded = function (mesh) {
        mesh.position = new BABYLON.Vector3(5140, -80, 0)
        mesh.scaling = new BABYLON.Vector3(40, 40, 40)

    }

    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 50, 0), scene);
     light.intensity = 1.3

    scene.mapEngine = new MapEngine(scene, "clementArena5")
    //clementArena4
    //loic
 /** DECOR************************************************* */
 if(scene.decorOn==true){
    var decor2= new Decor2(scene);}
 /******************************************************************************************** */

    params = {"trigger":-1,"normalCubesProbability":1000,"pattern":[-1,0,1],"minWidth":3}
    scene.mapEngine.addParamsConfiguration(params)
    params = {"trigger":400,"normalCubesProbability":800,"downCubesProbability":1000,"downCubeSpeed":0.2,"downCubeTriggerX":5,"downCubeTriggerY":5,"pattern":[0,1],"minWidth":2,"maxWidth":0}
    scene.mapEngine.addParamsConfiguration(params)
    params = {"trigger":2000,"normalCubesProbability":1000,"pattern":[-1,0,1],"minWidth":2,"change":0,"maxWidth":0}
    scene.mapEngine.addParamsConfiguration(params)
    params = {"trigger":3000,"normalCubesProbability":600,"downCubesProbability":1000,"downCubeSpeed":0.3,"downCubeTriggerX":5,"downCubeTriggerY":5,"pattern":[-1,0,1,2],"minWidth":2,"maxWidth":3,"change":0}
    scene.mapEngine.addParamsConfiguration(params)
    params = {"trigger":4500,"normalCubesProbability":1500,"pattern":[-2,-1,0,1,2],"minWidth":2,"maxWidth":2,"change":0}
    scene.mapEngine.addParamsConfiguration(params)
    params = {"trigger":5000,"normalCubesProbability":1,"downCubesProbability":0,"upCubeSpeed":0,"upCubeTriggerX":0,"pattern":[0],"minWidth":1,"maxWidth":0,"change":0}
    scene.mapEngine.addParamsConfiguration(params)


    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnEveryFrameTrigger },
        function () {
            updateMap(scene)

        }
    ));
    return this


}