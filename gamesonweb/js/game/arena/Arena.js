/**
 * Definie les differents elements du niveau
 * @author Clement Poueyto
 */
Arena = function(game) {
    // Appel des variables nécéssaires
    this.game = game;
    var scene = game;
    // Création de notre lumière principale
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 10, 0), scene);
    var light2 = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(0, -1, 0), scene);
    light2.intensity = 0.8;
    this.normalCubes=[];

    //position d'apparition du joueur dans le niveau;
    this.spawn= new BABYLON.Vector3(0,30,-5);


    //Vitesse du joueur dans le niveau
    this.speed=10;

    // Material pour le sol
    var materialGround = new BABYLON.StandardMaterial("wallTexture", scene);
    materialGround.diffuseTexture = new BABYLON.Texture("assets/images/water.jpg", scene);
    materialGround.diffuseTexture.uScale = 800.0;
    materialGround.diffuseTexture.vScale = 8.0;
    materialGround.material = materialGround;


    //limite de la map en dessous
    this.limit = BABYLON.Mesh.CreateGround("limit", 6, 6, 2, scene);
    this.limit.material=materialGround;
    this.limit.position= new BABYLON.Vector3(0,-10,0);
    this.limit.scaling.y = 1;
    this.limit.scaling.z = 100;
    this.limit.scaling.x = 2000;
    this.limit.checkCollisions = true;
    this.limit.physicsImpostor = new BABYLON.PhysicsImpostor(this.limit, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, scene);
    this.normalCubes.push(this.limit);

    // Material pour les objets
    var materialWall = new BABYLON.StandardMaterial("WallTexture", scene);
    materialWall.diffuseTexture = new BABYLON.Texture("assets/images/wood.jpg", scene);

    // Material pour les objets
    var materialEnd = new BABYLON.StandardMaterial("EndTexture", scene);
    materialEnd.diffuseTexture = new BABYLON.Texture("assets/images/poubelle.jpg", scene);

    var mainBox2 = BABYLON.MeshBuilder.CreateBox("box1", {size:3}, scene);
    mainBox2.material = materialWall;
    mainBox2.scaling.y = 1;
    mainBox2.scaling.x = 40;
    mainBox2.scaling.z = 40;
    mainBox2.position = new BABYLON.Vector3(5,((3/2)*mainBox2.scaling.y),-5);
    mainBox2.checkCollisions=true;
    mainBox2.physicsImpostor = new BABYLON.PhysicsImpostor(mainBox2, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, scene);
    this.normalCubes.push(mainBox2);

    var boxPosition = 40;
    for(let i=0;i<10;i++){
        //meme pattern
        var mainBox = BABYLON.MeshBuilder.CreateBox("box1", {size:3}, scene);
        mainBox.material = materialWall;
        mainBox.scaling.y = 3;
        mainBox.scaling.x = 4;
        mainBox.scaling.z = 4;
        if(i%3==0){
            //haut
            boxPosition+=60;
            mainBox.position = new BABYLON.Vector3(boxPosition,((3/2)*mainBox.scaling.y)+20,-5);
        }
        else if(i%3==1){
            //bas 1
            boxPosition+=90;
            mainBox.position = new BABYLON.Vector3(boxPosition,((3/2)*mainBox.scaling.y),-5);
        }
        else{
            //bas 2
            boxPosition+=75;
            mainBox.position = new BABYLON.Vector3(boxPosition,((3/2)*mainBox.scaling.y),-5);
        }
        
        mainBox.checkCollisions=true;
        mainBox.physicsImpostor = new BABYLON.PhysicsImpostor(mainBox, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, scene);
        this.normalCubes.push(mainBox);


    }

    // ciel
    var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:200.0}, scene);
    skybox.scaling.x=13;
    var skyboxMaterial = new BABYLON.StandardMaterial("skybox", scene);
    skyboxMaterial.diffuseTexture = new BABYLON.Texture("assets/images/sky.jpg", scene);
    skybox.position=new BABYLON.Vector3(200,((5/2)+10),500);
	skyboxMaterial.backFaceCulling = false;
	skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;	
    this.normalCubes.push(skybox);	

   



};