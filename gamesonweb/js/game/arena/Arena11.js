Arena11 = function (game) {

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
    materialNormalBox.diffuseTexture = new BABYLON.Texture("assets/images/decor4/grass.jpg", scene);
    materialNormalBox.diffuseTexture.uScale = 1.0;
    materialNormalBox.diffuseTexture.vScale = 1.0;
    scene.materialNormalBox = materialNormalBox;

    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 50, 0), scene);
     light.intensity = 1.3

  
    //MESH DE FIN - Ramene au menu
    this.end = BABYLON.MeshBuilder.CreateBox("box1", { size:350}, scene);
    var endMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
    endMaterial.alpha = 0
    this.end.material = endMaterial
    this.end.position = new BABYLON.Vector3(4300, 0, 0);
    loader = BABYLON.SceneLoader.Append('assets/model/', 'football.glb', scene, function (scene) {
        // do something with the scene
    })
    loader.onMeshLoaded = function (mesh) {
        mesh.position = new BABYLON.Vector3(4300, 0, 250)
        mesh.scaling = new BABYLON.Vector3(1, 1, 1)
        mesh.rotate(BABYLON.Axis.Y, -1.55 , BABYLON.Space.WORLD);

    }

    scene.mapEngine = new MapEngine(scene, "clementArena10")
    //clementArena4
    //loic

    
    //Material pour normal box
    var materialPlayer = new BABYLON.StandardMaterial("NormalBoxTexture", scene);
    materialPlayer.diffuseTexture = new BABYLON.Texture("assets/images/player/player4.jpg", scene);
    materialPlayer.diffuseTexture.uScale = 1.0;
    materialPlayer.diffuseTexture.vScale = 1.0;
    scene.player.box.material = materialPlayer;
 /** DECOR************************************************* */
    if(scene.decorOn==true){
        var decor4= new Decor4(scene);} 
    /******************************************************************************************** */

    params = {"trigger":-1,"normalCubesProbability":1000,"pattern":[-1,0,1],"minWidth":3}
    scene.mapEngine.addParamsConfiguration(params)
    params = {"trigger":400,"normalCubesProbability":800,"pattern":[-1,0,1,2],"minWidth":2,"maxWidth":0,"change":100}
    scene.mapEngine.addParamsConfiguration(params)
    params = {"trigger":2000,"normalCubesProbability":850,"dangerCubesProbability":1000,"pattern":[-2,-1,0,1,2],"minWidth":2,"maxWidth":2,"change":50}
    scene.mapEngine.addParamsConfiguration(params)
    params = {"trigger":3000,"upCubesProbability":0,"downCubesProbability":0,"boostCubesProbability":50,"normalCubesProbability":800,"jumpCubesProbability":900,"dangerCubesProbability":1000,"pattern":[-2,-1,0,1,2],"minWidth":2,"maxWidth":2,"change":80}
    scene.mapEngine.addParamsConfiguration(params)
    params = {"trigger":5000,"normalCubesProbability":0,"boostCubesProbability":0,"upCubesProbability":0,"jumpCubesProbability":0,"downCubesProbability":0,"dangerCubesProbability":0,"pattern":[0],"minWidth":1,"maxWidth":0}
    scene.mapEngine.addParamsConfiguration(params)


    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnEveryFrameTrigger },
        function () {
            updateMap(scene)

        }
    ));
    return this


}