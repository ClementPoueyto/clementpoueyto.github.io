

Arena3 = function (game) {

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
    this.end = BABYLON.MeshBuilder.CreateBox("box1", { size: 50 }, scene);
    this.end.position= new BABYLON.Vector3(5010,0,0);
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 10, 0), scene);

    /**DECOR*********************************************************************** */
    if(scene.decorOn==true){
        var decor1= new Decor1(scene);}
   /********************************************************************** */
	    
    scene.mapEngine = new MapEngine(scene, "clement")



    params = {"trigger":-1,"normalCubesProbability":1000,"pattern":[-1,0,1],"minWidth":3}
    scene.mapEngine.addParamsConfiguration(params)
    params = {"trigger":600,"normalCubesProbability":900,"pattern":[0],"minWidth":1,"maxWidth":0,"change":100}
    scene.mapEngine.addParamsConfiguration(params)
    params = {"trigger":2000,"normalCubesProbability":1000,"pattern":[-1,0,1],"minWidth":2,"change":0,"maxWidth":0}
    scene.mapEngine.addParamsConfiguration(params)
    params = {"trigger":3000,"normalCubesProbability":1500,"pattern":[-2,-1,0,1,2],"minWidth":2,"maxWidth":2,"change":0}
    scene.mapEngine.addParamsConfiguration(params)
    params = {"trigger":4500,"normalCubesProbability":1500,"pattern":[-2,-1,0,1,2],"minWidth":2,"maxWidth":2,"change":0}
    scene.mapEngine.addParamsConfiguration(params)
    params = {"trigger":5000,"normalCubesProbability":1,"pattern":[0],"minWidth":1,"maxWidth":0,"change":0}
    scene.mapEngine.addParamsConfiguration(params)


    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnEveryFrameTrigger },
        function () {
            updateMap(scene)

        }
    ));
    return this


}